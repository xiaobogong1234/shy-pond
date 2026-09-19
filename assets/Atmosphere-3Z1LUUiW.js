import{E as z}from"./el-button-BIufFjLp.js";import"./el-select-DHZScApW.js";import{d as U,o as k,c as O,a as _,w as p,F as D,r as N,f as B,b as s,g as y,u as F,t as A,h as V,_ as q}from"./index-9vIL5KkC.js";import{w as h,d,J as f,I as W,O as j,e as $,f as Q}from"./cesium-utSEP5if.js";import{G as Y}from"./index-DRCmDxZs.js";import J from"./ConfigPanel-BclLAqzI.js";import"./index-ANLxL66K.js";import"./use-global-config-DaIFvEHd.js";import"./_commonjsHelpers-gnU0ypJ3.js";import"./cesium2s-TV_G_QRL.js";import"./index-CtVsJ-X_.js";import"./fullscreenPopper-CpT4yrsP.js";import"./services-CwmS6buH.js";import"./el-color-picker-Gb65Y4tk.js";const K=`/**
 * 屏幕空间 Ray Marching 近似大气散射（后处理阶段）。
 * -----------------------------------------------------------------------------
 * 移植自 \`demos-verify12/cesium-for-fluid-master/index.js\` 的 \`atmosphereFs\`
 * （原注释：「基于屏幕空间的 Ray Marching 球面近似大气散射」，README 称「基础 shader 雾效」）。
 *
 * ★ 与本工程既有高度雾（\`shaders/heightfog.glsl\`）的根本差别（同一栏里正好构成对照）：
 *   · heightfog = **解析式**：按「像素高度 + 到相机距离」套一条闭式密度积分，相机附近全是近似，
 *     不含太阳方位、不含地球曲率遮挡 ⇒ 天体一动它纹丝不动；
 *   · 本文件 = **数值积分**：对每条视线真步进 16 步（再对每步向太阳方向步进 4 步），
 *     算 Rayleigh / Mie 两套光学深度 ⇒ **天空颜色随太阳方位改变**（日出偏红、正午偏蓝），
 *     并且 \`get_sun_light\` 里 \`height < 0\` 的分支就是**地球自阴影**（夜半球不发光）。
 *
 * ★ 相对原实现的三处**必要**改写（不改则跑不起来或行为未定义）：
 *   ① 原实现用 \`#ifdef GL_ES\` 定义 \`_in/_inout/_out/_begin/_end\` 五个宏，函数签名写成
 *      \`_in(float) angle\` / \`_begin(ray_t) … _end\`。实测**本工程 Cesium 1.136 构建里
 *      \`GL_ES\` 出现 0 次** ⇒ 那段宏是死的 ⇒ \`_in\` 全是未定义标识符 ⇒ 直接编译失败。
 *      这里一律改写成标准 GLSL（函数形参默认 \`in\`，结构体用构造式）。
 *   ② 原实现 \`float t0, t1;\` 先声明再交给 \`isect_sphere(..., t0, t1)\` 当 \`inout\` 写回，
 *      但**忽略返回值**；无交点时 \`t1\` 未初始化即被 \`march_step = t1 / n\` 使用（未定义行为）。
 *      这里显式初始化为 0。⚠️ 不改成「无交点则 return」是因为：光源射线起点必在大气球内部，
 *      \`t0 < 0 < t1\` 恒成立 ⇒ 那条分支**永不执行**，加了就是死代码（本工程纪律）。
 *   ③ 采样步数由 \`const int\` 改为 \`__NUM_SAMPLES__\` 占位（编译期常量，\`#define\` 文本替换），
 *      让页面能做「低/中/高」画质档 —— 换档必须**重建**后处理阶段，因为循环上界是编译期量。
 *
 * ⚠️ 本文件**不使用 \`czm_frameNumber\`** ⇒ 相机与时钟不动时输出**逐像素恒定**。
 *    这是刻意的：静态画面才能让像素判据成立（见工程备忘「静止闸门」一节）。
 */

uniform sampler2D colorTexture; // Cesium 注入：上一阶段的颜色
uniform sampler2D depthTexture; // Cesium 注入：场景深度
uniform float u_multiplier;     // 散射亮度总倍率（原实现硬编码 23.0）
uniform float u_rayleigh;       // Rayleigh 系数倍率
uniform float u_mie;            // Mie 系数倍率
uniform float u_exposure;       // 末尾色调映射 \`1 - exp(-k * c)\` 的 k（原实现硬编码 2.2）
uniform float u_amount;         // 0 = 输出原图（A/B 对照），1 = 完整大气

in vec2 v_textureCoordinates;

#define NUM_SAMPLES __NUM_SAMPLES__
#define NUM_SAMPLES_LIGHT __NUM_SAMPLES_LIGHT__

const float PI = 3.14159265359;
const vec3 BETA_R = vec3(5.5e-6, 13.0e-6, 22.4e-6);
const vec3 BETA_M = vec3(21e-6);
const float H_R = 10e3;          // Rayleigh 标高
const float H_M = 3.8e3;         // Mie 标高
const float EARTH_RADIUS = 6360e3;
const float ATMOSPHERE_RADIUS = 6420e3; // 大气壳层外径（原实现 sphere_t 里的 6420e3）
const float HG_G = 0.76;         // Henyey-Greenstein 各向异性因子

struct ray_t {
  vec3 origin;
  vec3 direction;
};

struct sphere_t {
  vec3 origin;
  float radius;
};

struct plane_t {
  vec3 direction;
  float distance;
};

plane_t plane; // 视线打到场景的距离，由 main 里赋值（原实现同名全局）

float rayleigh_phase_func(float mu) {
  return 3.0 * (1.0 + mu * mu) / (16.0 * PI);
}

float henyey_greenstein_phase_func(float mu) {
  return (1.0 - HG_G * HG_G) /
         ((4.0 * PI) * pow(1.0 + HG_G * HG_G - 2.0 * HG_G * mu, 1.5));
}

bool isect_sphere(ray_t ray, sphere_t sphere, inout float t0, inout float t1) {
  vec3 rc = sphere.origin - ray.origin;
  float radius2 = sphere.radius * sphere.radius;
  float tca = dot(rc, ray.direction);
  float d2 = dot(rc, rc) - tca * tca;
  if (d2 > radius2) return false;
  float thc = sqrt(radius2 - d2);
  t0 = tca - thc;
  t1 = tca + thc;
  return true;
}

const sphere_t ATMOSPHERE = sphere_t(vec3(0.0), ATMOSPHERE_RADIUS);

/**
 * 沿「采样点 → 太阳」方向二次步进，判断该点是否处在地影里，并累积光学深度。
 * \`height < 0\` 即射线穿到地表以下 ⇒ 该采样点收不到阳光（地球自阴影）。
 */
bool get_sun_light(ray_t ray, inout float optical_depthR, inout float optical_depthM) {
  float t0 = 0.0;
  float t1 = 0.0;
  isect_sphere(ray, ATMOSPHERE, t0, t1);
  float march_pos = 0.0;
  float march_step = t1 / float(NUM_SAMPLES_LIGHT);
  for (int i = 0; i < NUM_SAMPLES_LIGHT; i++) {
    vec3 s = ray.origin + ray.direction * (march_pos + 0.5 * march_step);
    float height = length(s) - EARTH_RADIUS;
    if (height < 0.0) return false;
    optical_depthR += exp(-height / H_R) * march_step;
    optical_depthM += exp(-height / H_M) * march_step;
    march_pos += march_step;
  }
  return true;
}

// 沿单条视线积分，返回散射颜色（rgb）与其不透明度（a = 1 - 透过率）。
// 💥 这里**不能**写成单行的 /** ... */（本文件历史上就是那么写的）：
//    Cesium 的 ShaderSource 在拼装前会调 removeComments()，它用
//    \`match(/\\n/gm).length\` 数「块注释里有多少个换行」——**单行**块注释让 match 返回 null，
//    于是 \`Cannot read properties of null (reading 'length')\`，
//    而且抛在**渲染帧里** ⇒ 整个 viewer 直接 "Rendering has stopped"。
//    守卫：tools/check-glsl-templates.mjs（含 --selftest）会静态拦下这种写法。
vec4 get_incident_light(ray_t ray) {
  vec3 dir = ray.direction;
  vec3 start = ray.origin;
  float a = dot(dir, dir);
  float b = 2.0 * dot(dir, start);
  float radius2 = ATMOSPHERE.radius * ATMOSPHERE.radius;
  float c = dot(start, start) - radius2;
  float d = (b * b) - 4.0 * a * c;
  if (d < 0.0) return vec4(0.0);
  float squaredD = sqrt(d);
  // 有效区间 = max(入点, 0) ~ min(出点, 打到场景的距离)
  vec2 ray_length = vec2(
    max((-b - squaredD) / (2.0 * a), 0.0),
    min((-b + squaredD) / (2.0 * a), plane.distance)
  );
  if (ray_length.x > ray_length.y) return vec4(0.0);

  float march_step = (ray_length.y - ray_length.x) / float(NUM_SAMPLES);
  float mu = dot(ray.direction, normalize(czm_sunPositionWC));
  float phaseR = rayleigh_phase_func(mu);
  float phaseM = henyey_greenstein_phase_func(mu);

  float optical_depthR = 0.0;
  float optical_depthM = 0.0;
  vec3 sumR = vec3(0.0);
  vec3 sumM = vec3(0.0);
  float march_pos = 0.0;

  for (int i = 0; i < NUM_SAMPLES; i++) {
    vec3 s = ray.origin + ray.direction * (march_pos + 0.5 * march_step);
    float height = length(s) - EARTH_RADIUS;
    float hr = exp(-height / H_R) * march_step;
    float hm = exp(-height / H_M) * march_step;
    optical_depthR += hr;
    optical_depthM += hm;

    ray_t light_ray = ray_t(s, normalize(czm_sunPositionWC));
    float optical_depth_lightR = 0.0;
    float optical_depth_lightM = 0.0;
    bool overground = get_sun_light(light_ray, optical_depth_lightR, optical_depth_lightM);

    if (overground) {
      vec3 tau = (BETA_R * u_rayleigh) * (optical_depthR + optical_depth_lightR) +
                 (BETA_M * u_mie) * 1.1 * (optical_depthM + optical_depth_lightM);
      vec3 attenuation = exp(-tau);
      sumR += hr * attenuation;
      sumM += hm * attenuation;
    }
    march_pos += march_step;
  }

  float attenuation = length(exp(-((BETA_M * u_mie * optical_depthM) +
                                   (BETA_R * u_rayleigh * optical_depthR)) * 4.0));
  return vec4(
    u_multiplier * (sumR * phaseR * (BETA_R * u_rayleigh) +
                    sumM * phaseM * (BETA_M * u_mie)),
    1.0 - attenuation
  );
}

void main() {
  vec4 sceneColor = texture(colorTexture, v_textureCoordinates);

  // 反查该像素的世界坐标（与工程的 VolumetricCloudsPBR / heightfog 同一套写法）
  float depth = czm_unpackDepth(texture(depthTexture, v_textureCoordinates));
  vec4 positionEC = czm_windowToEyeCoordinates(gl_FragCoord.xy, depth);
  vec4 positionWC = czm_inverseView * positionEC;
  positionWC.xyz = positionWC.xyz / positionWC.w;

  vec3 lVector = positionWC.xyz - czm_viewerPositionWC;
  ray_t ray = ray_t(czm_viewerPositionWC, normalize(lVector));
  plane.distance = length(lVector);

  vec4 atmosphereColor = get_incident_light(ray);

  // 大气在前、场景在后（按大气自身不透明度混合），再走一次色调映射
  vec4 composite = atmosphereColor + sceneColor * (1.0 - atmosphereColor.a);
  composite = vec4(1.0 - exp(-u_exposure * composite.rgb), composite.a);

  out_FragColor = mix(sceneColor, composite, u_amount);
}
`,R="__NUM_SAMPLES__",x="__NUM_SAMPLES_LIGHT__",X={low:{samples:8,samplesLight:2},medium:{samples:16,samplesLight:4},high:{samples:32,samplesLight:8}},T=["low","medium","high"],Z={low:"低 8×2",medium:"中 16×4",high:"高 32×8"};function ee(u,n){const a=X[n];if(!a)throw new Error(`未知大气画质档 "${n}"，可选：${T.join(" / ")}`);return te(u,a.samples,a.samplesLight)}function te(u,n,a){for(const[i,r]of[["samples",n],["samplesLight",a]])if(!Number.isInteger(r)||r<1)throw new Error(`大气散射 ${i} 必须是 ≥1 的整数，收到 ${r}`);const t=u.split(R).join(String(n)).split(x).join(String(a));for(const i of[R,x])if(t.includes(i))throw new Error(`替换后仍残留占位符 ${i}：着色器源与占位符常量已不一致`);return t}const ne={class:"atm__acts"},oe={class:"atm__read"},ie={class:"atm__read"},ae=U({meta:{path:"/cesium/atmosphere",title:"大气散射"},__name:"Atmosphere",setup(u){const n=N({hour:6,rayleigh:1,mie:1,multiplier:23,exposure:2.2,amount:1,quality:"medium"}),a=V(0);let t=null,i,r="";const b=T.map(o=>({label:Z[o],value:o})),C=[{key:"hour",label:"世界时",type:"slider",min:0,max:24,step:.25,unit:"h",digits:2},{key:"rayleigh",label:"Rayleigh 倍率",type:"slider",min:0,max:3,step:.05,digits:2},{key:"mie",label:"Mie 倍率",type:"slider",min:0,max:3,step:.05,digits:2},{key:"multiplier",label:"散射亮度",type:"slider",min:0,max:60,step:1},{key:"exposure",label:"色调映射",type:"slider",min:.3,max:6,step:.1,digits:2},{key:"quality",label:"画质档",type:"select",options:b},{key:"amount",label:"大气占比",type:"slider",min:0,max:1,step:.01,digits:2}],w={...n};function P(){const o=ee(K,n.quality);return new Q({name:"demo-atmosphere",fragmentShader:o,uniforms:{u_multiplier:()=>n.multiplier,u_rayleigh:()=>n.rayleigh,u_mie:()=>n.mie,u_exposure:()=>n.exposure,u_amount:()=>n.amount}})}function M(){var e;if(!t||(e=t.isDestroyed)!=null&&e.call(t))return;const o=t.scene.postProcessStages;i&&o.contains(i)&&o.remove(i),i=void 0}function E(){t&&(M(),i=P(),t.scene.postProcessStages.add(i),r=n.quality)}function v(){if(!t)return;const o=f.fromIso8601("2024-03-20T00:00:00Z");t.clock.currentTime=f.addSeconds(o,n.hour*3600,new f)}function S(){if(!t)return;const o=t.clock.currentTime,e=W.computeIcrfToFixedMatrix(o);if(!e)return;const l=j.computeSunPositionInEarthInertialFrame(o,new d),m=$.multiplyByVector(e,l,new d),G=d.normalize(m,m);a.value=h.toDegrees(Math.asin(h.clamp(G.z,-1,1)))}function g(){v(),S(),n.quality!==r&&E()}function L(){Object.assign(n,w),g()}const H={horizon:{lon:90,lat:32,h:25e3,heading:180,pitch:-6},high:{lon:100,lat:35,h:22e4,heading:0,pitch:-55}};function c(o){if(!t)return;const e=H[o];e&&t.camera.setView({destination:d.fromDegrees(e.lon,e.lat,e.h),orientation:{heading:h.toRadians(e.heading),pitch:h.toRadians(e.pitch),roll:0}})}function I(o){t=o,t.scene.skyAtmosphere.show=!1,t.scene.globe.showGroundAtmosphere=!1,t.scene.fog.enabled=!0,t.clock.shouldAnimate=!1,c("horizon"),E(),v(),S(),window.__atmosphere=()=>({ready:!!i,builtQuality:r,quality:n.quality,amount:n.amount,hour:n.hour,sunElevation:a.value,stageName:(i==null?void 0:i.name)??null,stageCount:t.scene.postProcessStages.length,clockTime:f.toIso8601(t.clock.currentTime)}),window.__atmosphereApply=e=>(Object.assign(n,e),g(),window.__atmosphere()),window.__atmosphereView=e=>(c(e),e)}return k(()=>{M(),delete window.__atmosphere,delete window.__atmosphereApply,delete window.__atmosphereView,t=null}),(o,e)=>{const l=z;return B(),O(D,null,[_(Y,{options:{terrain:!0},onCreated:I}),_(J,{model:n,fields:C,title:"大气散射",tip:"屏幕空间 Ray Marching 大气散射：对每条视线真步进积分 Rayleigh / Mie 光学深度，并沿「采样点→太阳」二次步进判地球自阴影。「大气占比」拨到 0 可看原图对照。",onChange:g},{default:p(()=>[s("div",ne,[_(l,{class:"oo-btn",size:"small",onClick:e[0]||(e[0]=m=>c("horizon"))},{default:p(()=>[...e[2]||(e[2]=[y("地平线视角",-1)])]),_:1}),_(l,{class:"oo-btn",size:"small",onClick:e[1]||(e[1]=m=>c("high"))},{default:p(()=>[...e[3]||(e[3]=[y("高空俯视",-1)])]),_:1}),_(l,{class:"oo-btn",size:"small",disabled:!F(t),onClick:L},{default:p(()=>[...e[4]||(e[4]=[y("复位参数",-1)])]),_:1},8,["disabled"])]),s("div",oe,[e[5]||(e[5]=s("span",null,"太阳高度角",-1)),s("b",null,A(a.value.toFixed(1))+"°",1)]),s("div",ie,[e[6]||(e[6]=s("span",null,"画质档（编译期）",-1)),s("b",null,A(n.quality),1)])]),_:1},8,["model"])],64)}}}),Ee=q(ae,[["__scopeId","data-v-e9e4126b"]]);export{Ee as default};
