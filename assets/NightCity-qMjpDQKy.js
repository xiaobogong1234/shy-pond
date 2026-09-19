import{E as Qt}from"./el-button-BIufFjLp.js";import"./el-select-DHZScApW.js";import{o as $t,r as Mt,_ as te,c as Ct,a as X,w as K,F as ee,p as vt,f as xt,b as R,t as B,m as ne,g as Rt}from"./index-9vIL5KkC.js";import{cX as ae,cY as oe,gi as se,l1 as ie,ae as Ot,l5 as le,N as Dt,U as H,aG as ce,J as U,W as re,P as F,g as ue,d as P,w as D,kt as Tt,M as Et,an as he,F as me,aq as fe,ar as de,as as ge,al as pe,t as we,I as _e,hC as ye,jO as be,hB as Se,p as Me}from"./cesium-utSEP5if.js";import{G as Ce}from"./index-DRCmDxZs.js";import ve from"./ConfigPanel-BclLAqzI.js";import{g as xe,S as Re,s as Te}from"./skyFaces-ByhyZnys.js";import{m as Ee}from"./buildingGen-aKDqhz_p.js";import{S as Q,s as kt}from"./timelineClock-dcbX5Ecw.js";import"./index-ANLxL66K.js";import"./use-global-config-DaIFvEHd.js";import"./_commonjsHelpers-gnU0ypJ3.js";import"./cesium2s-TV_G_QRL.js";import"./index-CtVsJ-X_.js";import"./fullscreenPopper-CpT4yrsP.js";import"./services-CwmS6buH.js";import"./el-color-picker-Gb65Y4tk.js";import"./buildingExtrude-RlRQz1so.js";const At={east:{min:0,max:0},north:{min:0,max:0},height:{min:0,max:0},spanEast:0,spanNorth:0,spanHeight:0,centerEast:0,centerNorth:0,tileCount:0};function Lt(t){if(!t||typeof t!="object")return{...At};const n=t.root??t;let e=1/0,o=-1/0,a=1/0,m=-1/0,i=1/0,u=-1/0,g=0;const y=d=>{var A;if(!d||typeof d!="object")return;const p=(A=d.boundingVolume)==null?void 0:A.box;if(Array.isArray(p)&&p.length>=12){g++;const S=C=>Math.abs(p[3+C])+Math.abs(p[6+C])+Math.abs(p[9+C]),v=p[0],M=p[1],T=p[2],s=S(0),w=S(1),f=S(2);e=Math.min(e,v-s),o=Math.max(o,v+s),a=Math.min(a,M-w),m=Math.max(m,M+w),i=Math.min(i,T-f),u=Math.max(u,T+f)}const b=d.children;if(Array.isArray(b))for(const S of b)y(S)};return y(n),g===0?{...At}:{east:{min:e,max:o},north:{min:a,max:m},height:{min:i,max:u},spanEast:o-e,spanNorth:m-a,spanHeight:u-i,centerEast:(e+o)/2,centerNorth:(a+m)/2,tileCount:g}}function It(t,n={}){const e=Math.max(1,n.gradientFraction??6),o=Math.max(1,Math.floor(n.targetBands??5)),a=Math.min(1,Math.max(.01,n.bandWidthRatio??.2)),m=Math.max(.001,n.minScale??8),i=Math.max(m,t.spanHeight||0),u=i/o;return{baseHeight:t.height.min||0,heightRange:Math.max(m,i/e),glowRange:i,bandSpacing:u,bandWidth:u*a}}function ot(t){return t-Math.floor(t)}function ke(t,n){return n<t?0:1}function Ae(t,n=360){return Math.abs(ot(t/n)-.5)*2}function Le(t,n){const e=t/n.glowRange;return e<0?0:e>1?1:e}function zt(t,n,e){return 1-ke(.005,Math.abs(Le(t,e)-Ae(n)))}function Ut(t,n,e,o=4e3){let a=0;for(let m=0;m<o;m++){const i=(m+.5)/o*e;zt(i,t,n)>.5&&a++}return a/o*e}function Pt(t,n,e=4e3,o=360){let a=-1;for(let m=0;m<o;m++)for(let i=e-1;i>=0;i--){const u=(i+.5)/e*n;if(zt(u,m,t)>.5){u>a&&(a=u);break}}return a}function Ft(t,n,e=3600,o=360){let a=0;for(let m=0;m<o;m++)a=Math.max(a,Ut(m,t,n,e));return a}const J=[9,12,18,255],Ht=[[255,224,168,255],[255,246,214,255],[176,214,255,255],[89,225,255,255]];function Ie(t={}){const n=Math.max(8,Math.floor(t.size??64)),e=Math.max(1,Math.floor(t.cols??8)),o=Math.max(1,Math.floor(t.rows??8)),a=Math.max(0,Math.floor(t.gutter??1)),m=Math.min(1,Math.max(0,t.litRatio??.55)),i=Ee(t.seed??20260918),u=new Uint8Array(n*n*4);for(let d=0;d<n*n;d++)u[d*4]=J[0],u[d*4+1]=J[1],u[d*4+2]=J[2],u[d*4+3]=J[3];const g=Math.floor(n/e),y=Math.floor(n/o);for(let d=0;d<o;d++)for(let p=0;p<e;p++){const b=i.next(),A=i.int(Ht.length);if(b>=m)continue;const S=Ht[A],v=p*g+a,M=d*y+a,T=Math.min(n,(p+1)*g-a),s=Math.min(n,(d+1)*y-a);for(let w=M;w<s;w++)for(let f=v;f<T;f++){const C=(w*n+f)*4;u[C]=S[0],u[C+1]=S[1],u[C+2]=S[2],u[C+3]=S[3]}}return u}function Pe(t,n=128,e=64,o=1){const a=Math.max(2,Math.floor(n)),m=Math.max(2,Math.floor(e)),i=new Uint8Array(a*m*4);for(let u=0;u<m;u++){const y=(.5-(u+.5)/m)*Math.PI,d=Math.sin(y),p=Math.cos(y);for(let b=0;b<a;b++){const S=((b+.5)/a-.5)*Math.PI*2,v=t(p*Math.cos(S),d,p*Math.sin(S)),M=(u*a+b)*4,T=s=>Math.max(0,Math.min(255,Math.round(v[s]*o)));i[M]=T(0),i[M+1]=T(1),i[M+2]=T(2),i[M+3]=255}}return i}function Fe(t,n={}){const e=Math.max(1,n.spacingM??1200),o=Math.max(e,n.focusSpanM??12e3),a=n.upM??t.height.min+2,[m,i]=n.center??[t.centerEast,t.centerNorth],u=o/2,g=m-u,y=m+u,d=i-u,p=i+u,b=Math.max(0,Math.floor(u/e)),A=[];let S=0,v=0;for(let M=-b;M<=b;M++){const T=i+M*e;T>=d&&T<=p&&(A.push([[g,T,a],[y,T,a]]),S++);const s=m+M*e;s>=g&&s<=y&&(A.push([[s,d,a],[s,p,a]]),v++)}return{segs:A,spacingM:e,focusSpanM:o,countEast:S,countNorth:v,east:{min:g,max:y},north:{min:d,max:p},upM:a}}function He(t,n={}){const e=Math.max(10,n.widthM??700),o=Math.max(0,n.meanderM??1500),a=n.waves??1.5,m=Math.max(4,Math.floor(n.samples??64)),i=n.northAt??.22,u=Math.min(1,Math.max(.05,n.spanRatio??1)),g=n.upM??t.height.min+1.6,y=t.spanEast*u,d=t.centerEast-y/2,p=t.centerNorth+i*t.spanNorth,b=e/2,A=f=>{const C=d+f*y,I=p+o*Math.sin(Math.PI*2*a*f);return[C,I]},S=f=>{const C=o*Math.PI*2*a*Math.cos(Math.PI*2*a*f)/y,I=Math.hypot(1,C)||1;return[1/I,C/I]},v=f=>{const[C,I]=S(f);return[-I,C]},M=[],T=[],s=[];for(let f=0;f<=m;f++){const C=f/m,[I,N]=A(C),[Y,j]=v(C);M.push([I,N,g]),T.push([I+Y*b,N+j*b,g]),s.push([I-Y*b,N-j*b,g])}const w=[...T,...s.slice().reverse()];return w.push([w[0][0],w[0][1],w[0][2]]),{ring:w,center:M,area:Math.abs(Be(w)),widthM:e,upM:g,spanEast:y}}function Be(t){let n=0;for(let e=0;e<t.length;e++){const o=t[e],a=t[(e+1)%t.length];n+=o[0]*a[1]-a[0]*o[1]}return n/2}function at(t,n){return ot(t/Math.max(1e-6,n))}function Ne(t,n,e){const o=at(n,e);let a=t-o;return a=a-Math.round(a),a}const $=[[.384,.502,.608,"#62809b"],[.529,.808,.98,"#87cefa"],[0,.235,1,"#003cff"],[.941,.502,.502,"#f08080"],[1,.647,0,"#ffa500"],[1,.271,0,"#ff4500"]];function Oe(t){const n=$.length,e=ot(t)*n,o=Math.min(n-1,Math.floor(e)),a=e-o,m=$[o],i=$[(o+1)%n];return[m[0]+(i[0]-m[0])*a,m[1]+(i[1]-m[1])*a,m[2]+(i[2]-m[2])*a]}function De(t,n,e,o){if(e<=0)return{pos:t,dir:n};let a=t+n*e,m=n;return a>o?(a=o-(a-o),m=-1):a<-o&&(a=-o+(-o-a),m=1),a=Math.min(o,Math.max(-o,a)),{pos:a,dir:m}}const ze=`
void vertexMain(VertexInput vsInput, inout czm_modelVertexOutput vsOutput) {
  // 模型空间里 +Y 就是"上"轴（与 positionMC.y 同一坐标系，实测推导）
  vec3 nMC = normalize(vsInput.attributes.normalMC);
  v_wallness = 1.0 - abs(nMC.y);
}
`,Ue=`
#define sat(a) clamp(a, 0.0, 1.0)
#define NIGHT_PI 3.14159265359

// 示例的哈希噪声：用来让"外观过渡"的分界线不是一条直尺线
float noise_fun(vec2 co) {
  return fract(sin(dot(co.xy, vec2(12.45678, 93.970204))) * 4321.12345) * 20.0;
}

// 点光源距离衰减（示例 getDistanceDecay 的直写版）
vec3 pointLight(vec3 lightPos, vec3 lightColor, vec3 positionWC) {
  float d = length(lightPos - positionWC);
  return lightColor * sat(-d / u_lightRadius + 1.0);
}

void fragmentMain(FragmentInput fsInput, inout czm_modelMaterial material) {
  // ⚠️ 高度轴 = positionMC.y（本瓦片 Y-up）。抄示例的 .z 会把高度算成 -17674~0
  float dh = fsInput.attributes.positionMC.y - u_baseHeight;

  vec3 normalEC = fsInput.attributes.normalEC;
  vec3 positionEC = fsInput.attributes.positionEC;
  vec3 positionMC = fsInput.attributes.positionMC;
  vec2 uv = fsInput.attributes.texCoord_0;
  float diffuseCoefficient = max(0.0, dot(normalEC, vec3(0.2)));

  // 主题呼吸：相位驱动的一点点亮度起伏（也让 u_themePhase 真的被用到）
  float pulse = 0.85 + 0.15 * sin(u_themePhase * 2.0 * NIGHT_PI);

  /* ── ① 玻璃幕墙：等距圆柱夜空反射 + 高度色偏 + 两盏彩色点光源 ───────── */
  vec3 glass = vec3(0.0);
  float glassA = 0.0;
  {
    vec3 col = vec3(0.0);
    if (u_reflect > 0.5) {
      // ⚠️ 与 nightCity.envUvOf 逐式相同（u=atan2(z,x)/2π+0.5，v=0.5-asin(y)/π）
      vec3 rdir = normalize(czm_inverseViewRotation * reflect(normalize(-positionEC), normalEC));
      vec2 euv = vec2(atan(rdir.z, rdir.x) / (2.0 * NIGHT_PI) + 0.5,
                      0.5 - asin(clamp(rdir.y, -1.0, 1.0)) / NIGHT_PI);
      vec3 env = texture(u_envTex, euv).rgb;
      col = mix(mix(vec3(0.2), vec3(0.1, 0.2, 0.6), sat(dh / u_glowRange)), env, 0.35);
      col *= min(diffuseCoefficient + 0.15, 1.0);
    } else {
      col = mix(vec3(0.05), vec3(0.03, 0.06, 0.14), sat(dh / u_glowRange));
    }
    // ⭐ **城市环境光地板**：不加这一句，背光的楼体在纯黑背景下几乎不可见
    //    （实测：截图里整座城只剩"路网 + 一个点光源色斑"，看不出是城市）。
    //    夜间的城市不会全黑 —— 楼体之间互相反射 + 街道照明的溢出光。
    col = max(col, vec3(0.025, 0.032, 0.048));
    vec3 wc = (czm_model * vec4(positionMC, 1.0)).xyz;
    col += pointLight(u_lightPos0, u_lightColor0, wc);
    col += pointLight(u_lightPos1, u_lightColor1, wc);
    glass = col;
    glassA = 1.0;
  }

  /* ── ② 高亮外观：高度渐变（主题色）+ 窗光带 ────────────────────────── */
  vec3 lit = vec3(0.0);
  float litA = 0.0;
  {
    vec3 col = vec3(0.0);
    /**
     * ⭐ **只有竖直面才发光**：「normalMC」 在 **fragment 里是禁用属性**
     *    （Cesium 会抛 DeveloperError：normalMC is not available in the fragment shader，
     *     并提示 Did you mean normalEC instead）—— 而改用「normalEC」是**错的**：
     *    EC 的"上"是屏幕方向不是模型上轴，且本页整套高度都建在模型空间（「positionMC.y」）。
     *    正解 = 在 **vertex** 里算（那里「normalMC」合法），用自定义 varying「v_wallness」传下来。
     *    「v_wallness」= 1 - |n.y|：0 在地面/屋顶、1 在竖直墙面。
     *    不乘这一项会踩一个很难看出来的坑（实测第一版截图）：白模**自带地面**，
     *    而窗光带「mod(dh, spacing) < width」在 dh∈[0, width) 处恒为真 ⇒
     *    整块地面被涂成主题色 + 一层窗格纹理，画面变成"一张发亮的黄板子"。
     *
     *    ⚠️ GLSL 注释里**不能出现反引号**：整段 shader 存在 JS 模板字面量里，
     *    注释里的反引号会**提前闭合模板**，esbuild 直接报 Unexpected
     *    （本文件已经踩过两次，别再往 GLSL 注释里写反引号）。
     */
    float wallness = smoothstep(0.35, 0.75, v_wallness);
    if (u_gradient > 0.5) {
      // 亮度压到 0.25~0.6 倍主题色：夜城的楼体是"暗面 + 点点灯火"，
      // 而 bloom 会把接近 1.0 的像素整体糊成一片白（实测第一版就是"满屏黄"）
      col = u_accent.rgb * (0.25 + 0.35 * sat(dh / u_heightRange));
      col *= min(diffuseCoefficient + 0.25, 1.0);
    }
    if (u_windows > 0.5) {
      // 厚度恰好 = u_bandWidth（与 nightCity.windowBandLit 同式；示例是 lineWidth/2）
      float litBand = step(fract(dh / u_bandSpacing) * u_bandSpacing, u_bandWidth);
      // 窗格纹理横向慢速滚动 + 高度方向分层
      vec2 wuv = vec2(fract(uv.s - czm_frameNumber / 1200.0),
                      fract(dh / u_bandSpacing * u_winScale));
      // 窗格只贴在竖直面上（地面那条"窗带"不该存在）
      col += texture(u_winTex, wuv).rgb * litBand * 1.6 * pulse * wallness;
    }
    lit = col * wallness;
    litA = 1.0;
  }

  /* ── ③ 移动光圈（与 nightCity.nightBandMask 逐式相同）─────────────── */
  if (u_sweep > 0.5) {
    float norm = sat(dh / u_glowRange);
    float sweep = abs(fract(czm_frameNumber / 360.0) - 0.5) * 2.0;
    float sweepDiff = step(0.005, abs(norm - sweep));
    // 光圈处提亮 60%（不是"翻倍"：翻倍再叠 bloom 会整圈爆白）
    glass += glass * 0.6 * (1.0 - sweepDiff);
    lit += lit * 0.6 * (1.0 - sweepDiff);
  }

  /* ── ④ 外观过渡：扫描线**以下=已点亮**（高亮外观），以上=玻璃幕墙 ──
     ⚠️ 与示例的方位相反：示例是 positionMC.z > u_lerp + noise 时走高亮分支，
        那样"扫到一半"时整座城会变暗（扫描线越高越黑）—— 实测第一版截图就是
        "全黑的城市 + 一条路网"，看不出内容。改成"已扫过的点亮"之后：
        扫到顶 = 全城点亮（默认态），扫到底 = 全暗，任何时刻都读得出城市轮廓。 */
  float noise = noise_fun(vec2(positionMC.x, positionMC.z)) * u_scanNoise;
  float litSide = (u_scanEnable > 0.5 && dh < (u_scan + noise)) ? 1.0 : 0.0;
  vec3 outColor = mix(glass, lit, litSide);
  float outAlpha = mix(glassA, litA, litSide);

  /* ── ⑤ 扫描线窄带高亮（"一层层点亮"的推进线）────────────────────── */
  if (u_scanEnable > 0.5) {
    float band = 1.0 - step(u_scanBand, abs(dh - u_scan));
    outColor += u_accent.rgb * 0.8 * band;
  }

  material.diffuse = outColor;
  material.alpha = outAlpha;
}
`;function We(t,n,e,o){const a=ie;return new ae({uniforms:{u_winTex:{type:a.SAMPLER_2D,value:n},u_envTex:{type:a.SAMPLER_2D,value:e},u_baseHeight:{type:a.FLOAT,value:t.baseHeight},u_heightRange:{type:a.FLOAT,value:t.heightRange},u_glowRange:{type:a.FLOAT,value:t.glowRange},u_bandSpacing:{type:a.FLOAT,value:t.bandSpacing},u_bandWidth:{type:a.FLOAT,value:t.bandWidth},u_winScale:{type:a.FLOAT,value:6},u_accent:{type:a.VEC4,value:new Ot(.384,.502,.608,1)},u_themePhase:{type:a.FLOAT,value:0},u_reflect:{type:a.FLOAT,value:1},u_gradient:{type:a.FLOAT,value:1},u_sweep:{type:a.FLOAT,value:1},u_windows:{type:a.FLOAT,value:1},u_scanEnable:{type:a.FLOAT,value:1},u_scan:{type:a.FLOAT,value:t.baseHeight},u_scanBand:{type:a.FLOAT,value:Math.max(2,t.glowRange*.01)},u_scanNoise:{type:a.FLOAT,value:1},u_lightRadius:{type:a.FLOAT,value:3e3},u_lightPos0:{type:a.VEC3,value:o[0].position},u_lightColor0:{type:a.VEC3,value:o[0].color},u_lightPos1:{type:a.VEC3,value:o[1].position},u_lightColor1:{type:a.VEC3,value:o[1].color}},mode:oe.REPLACE_MATERIAL,lightingModel:se.UNLIT,varyings:{v_wallness:le.FLOAT},vertexShaderText:ze,fragmentShaderText:Ue})}function Bt(t,n,e){t.setUniform("u_reflect",e.reflect?1:0),t.setUniform("u_gradient",e.gradient?1:0),t.setUniform("u_sweep",e.sweep?1:0),t.setUniform("u_windows",e.windows?1:0),t.setUniform("u_winScale",e.winScale),t.setUniform("u_scanEnable",e.scanEnable?1:0),t.setUniform("u_scan",e.scanPos),t.setUniform("u_scanBand",e.scanBand),t.setUniform("u_lightRadius",e.lightRadius),t.setUniform("u_themePhase",e.themePhase),t.setUniform("u_accent",new Ot(n[0],n[1],n[2],1))}function Ge(t,n,e){t.setUniform("u_baseHeight",n.baseHeight),t.setUniform("u_heightRange",n.heightRange),t.setUniform("u_glowRange",n.glowRange),t.setUniform("u_bandSpacing",n.bandSpacing),t.setUniform("u_bandWidth",n.bandWidth),t.setUniform("u_winScale",e)}const Ve=`
uniform vec4 u_color;
uniform float u_speed;
uniform float u_width;

czm_material czm_getMaterial(czm_materialInput materialInput) {
  czm_material material = czm_getDefaultMaterial(materialInput);
  vec2 st = materialInput.st;
  float t = fract(czm_frameNumber / u_speed);
  // 与 nightCity.roadFlowAlpha 同式：光带前缘在 s = t，向后 u_width 渐亮，其余回落到 0.1
  float alpha = smoothstep(t - u_width, t, st.s) * step(-t, -st.s) + 0.1;

  material.diffuse = czm_gammaCorrect(vec4(u_color.rgb / 0.5, 1.0)).rgb;
  material.alpha = alpha;
  material.emission = material.diffuse * 1.5;
  return material;
}
`;function Ye(t,n,e=.03){return new Dt({fabric:{type:"NightRoadFlow",uniforms:{u_color:t,u_speed:n,u_width:e},source:Ve},translucent:!0})}function je(t){return Dt.fromType("Water",{baseWaterColor:t,blendColor:H.fromCssColorString("#0a3a4a"),frequency:900,animationSpeed:.008,amplitude:3,specularIntensity:1,fadeFactor:3})}const tt="/models/3dtiles/JN-WhiteModel/tileset.json",et={size:64,cols:8,rows:8,seed:20260918,litRatio:.55},Z={w:128,h:64},qe=128,Nt={spacingM:1200,focusSpanM:12e3},Xe={widthM:700,meanderM:1500,waves:1.5,samples:64,northAt:.22};function nt(t,n,e){const o=document.createElement("canvas");o.width=n,o.height=e;const a=o.getContext("2d");if(!a)throw new Error("2d context 不可用");const m=a.createImageData(n,e);return m.data.set(t),a.putImageData(m,0,0),o.toDataURL("image/png")}const Je={meta:{path:"/cesium/night-city",title:"夜景白模城市"},components:{Globe:Ce,ConfigPanel:ve},setup(){let t,n,e,o=new F,a=0,m=0,i=null,u=null,g,y,d,p,b=[],A,S;const v={pos:0,dir:1};let M=-1,T="";const s=Mt({reflect:!0,gradient:!0,sweep:!0,windows:!0,winScale:6,bandSpacing:48,heightRange:40,glowRange:242,scanEnable:!0,scanSpeed:3,lightRadius:1500,roadFlow:!0,flowSpeed:200,water:!0,fireworks:!0,sky:!0,bloom:!1,themeCycle:60,playing:!0,speed:1}),w=Mt({tiles:"—",height:"—",litSpan:"—",phase:"—",scan:"—",geo:"—",error:""}),f={phase:0,accent:[.384,.502,.608],litSpan:0,maxLit:0,readyTiles:0,totalTiles:0,scanApplied:0,roadSegs:0};window.__nightCity=()=>{var h,_,x,E,k,L,G,O,z,V,q,it,lt,ct,rt,ut,ht,mt,ft,dt,gt,pt,wt,_t,yt,bt,St;const c=t==null?void 0:t.clock,l=c&&t?U.secondsDifference(c.currentTime,c.startTime):-1,r=(_=(h=e==null?void 0:e.uniforms)==null?void 0:h.u_baseHeight)==null?void 0:_.value;return{hasTileset:!!n,hasShader:!!e,tilesetShow:!!(n!=null&&n.show),readyTiles:f.readyTiles,totalTiles:f.totalTiles,baseHeight:r??-1,heightRange:((E=(x=e==null?void 0:e.uniforms)==null?void 0:x.u_heightRange)==null?void 0:E.value)??-1,glowRange:((L=(k=e==null?void 0:e.uniforms)==null?void 0:k.u_glowRange)==null?void 0:L.value)??-1,bandSpacing:((O=(G=e==null?void 0:e.uniforms)==null?void 0:G.u_bandSpacing)==null?void 0:O.value)??-1,bandWidth:((V=(z=e==null?void 0:e.uniforms)==null?void 0:z.u_bandWidth)==null?void 0:V.value)??-1,themePhase:((it=(q=e==null?void 0:e.uniforms)==null?void 0:q.u_themePhase)==null?void 0:it.value)??-1,themeCycle:s.themeCycle,clockSec:l,litSpan:f.litSpan,roadSegs:f.roadSegs,roadVerts:((ct=(lt=d==null?void 0:d._va)==null?void 0:lt[0])==null?void 0:ct.numberOfVertices)??null,roadSpeed:((rt=g==null?void 0:g.uniforms)==null?void 0:rt.u_speed)??-1,roadWidth:((ut=g==null?void 0:g.uniforms)==null?void 0:ut.u_width)??-1,riverUniforms:!!y,fireworksCount:b.length,roadShow:!!(d!=null&&d.show),waterShow:!!(p!=null&&p.show),fxShow:b.length>0&&b.every(Kt=>Kt.show),darkLayerShown:C().shown,darkLayerIsTop:C().isTop,imageryCount:((ht=t==null?void 0:t.imageryLayers)==null?void 0:ht.length)??0,shouldAnimate:!!((mt=t==null?void 0:t.clock)!=null&&mt.shouldAnimate),multiplier:((ft=t==null?void 0:t.clock)==null?void 0:ft.multiplier)??0,bloomEnabled:!!((pt=(gt=(dt=t==null?void 0:t.scene)==null?void 0:dt.postProcessStages)==null?void 0:gt.bloom)!=null&&pt.enabled),msaaSamples:((wt=t==null?void 0:t.scene)==null?void 0:wt.msaaSamples)??-1,skyBoxShown:!!((yt=(_t=t==null?void 0:t.scene)==null?void 0:_t.skyBox)!=null&&yt.show),scanPos:f.scanApplied,error:w.error,canvasW:((bt=t==null?void 0:t.canvas)==null?void 0:bt.clientWidth)??0,canvasH:((St=t==null?void 0:t.canvas)==null?void 0:St.clientHeight)??0}},window.__nightCitySet=c=>{Object.assign(s,c),W()},window.__nightCityMeasure=async()=>{var _;const l=await(await fetch(tt)).json(),r=Lt(l),h=It(r);return{heightMin:r.height.min,heightMax:r.height.max,spanHeight:r.spanHeight,tileCount:r.tileCount,derived:{baseHeight:h.baseHeight,heightRange:h.heightRange,glowRange:h.glowRange,bandSpacing:h.bandSpacing,bandWidth:h.bandWidth},hasTransform:Array.isArray((_=l==null?void 0:l.root)==null?void 0:_.transform)&&l.root.transform.length===16}},window.__nightCityPhase=()=>{var h,_;const c=t==null?void 0:t.clock;if(!c)return{ok:!1};const l=U.secondsDifference(c.currentTime,c.startTime),r=((_=(h=e==null?void 0:e.uniforms)==null?void 0:h.u_themePhase)==null?void 0:_.value)??-1;return{ok:r>=0,tSec:l,applied:r,expected:at(l,s.themeCycle),residual:Ne(r,l,s.themeCycle),cycle:s.themeCycle,accent:f.accent.slice()}},window.__nightCityBand=()=>!u||!i?{span:-1,maxSpan:-1,maxLit:-1,spanHeight:-1}:{span:Ut(0,u,i.spanHeight),maxSpan:Ft(u,i.spanHeight),maxLit:f.maxLit,spanHeight:i.spanHeight},window.__nightCityShot=()=>{t.scene.render();const l=t.canvas,r=480,h=Math.max(1,Math.round(l.height/l.width*r)),_=document.createElement("canvas");_.width=r,_.height=h;const x=_.getContext("2d");return x?(x.drawImage(l,0,0,r,h),{w:r,h,dataUrl:_.toDataURL("image/jpeg",.7)}):null};function C(){const c=t==null?void 0:t.imageryLayers;if(!c)return{shown:!1,isTop:!1};const l=c._layers??[],r=l.findIndex(h=>I(h)==="ArcGIS全球暗灰色地图");return r<0?{shown:!1,isTop:!1}:{shown:!!l[r].show,isTop:r===l.length-1}}function I(c){var l,r,h,_;return((r=(l=c==null?void 0:c.imageryProvider)==null?void 0:l.credit)==null?void 0:r.html)??((_=(h=c==null?void 0:c.imageryProvider)==null?void 0:h._credit)==null?void 0:_.html)??""}function N(c){return F.multiplyByPoint(o,new P(c[0],c[1],c[2]),new P)}async function Y(){var O;const l=await(await fetch(tt)).json(),r=(O=l==null?void 0:l.root)==null?void 0:O.transform;if(!Array.isArray(r)||r.length!==16)throw new Error("tileset.json 缺 root.transform —— 合成路网/河道的坐标基准无法确定");o=F.fromArray(r);const h=ue.fromCartesian(F.getTranslation(o,new P));a=D.toDegrees((h==null?void 0:h.longitude)??0),m=D.toDegrees((h==null?void 0:h.latitude)??0),i=Lt(l),u=It(i),s.bandSpacing=Math.round(u.bandSpacing),s.heightRange=Math.round(u.heightRange),s.glowRange=Math.round(u.glowRange),v.pos=i.spanHeight,v.dir=-1,f.maxLit=Pt(u,i.spanHeight);const _=Ie(et),x=nt(_,et.size,et.size),E=Pe((z,V,q)=>Te(z,V,q,{seed:20260918,variant:"night",cloudAmount:.35,groundBand:!0,groundFade:.5,glowStrength:.4,sunDir:null}),Z.w,Z.h,1),k=nt(E,Z.w,Z.h),L=P.fromDegrees(a+.03,m+.02,40),G=P.fromDegrees(a-.03,m-.015,40);e=We(u,new Tt({url:x}),new Tt({url:k}),[{position:L,color:P.fromElements(.412,0,1)},{position:G,color:P.fromElements(1,.271,0)}]),n=await t.load3dtiles(tt,{maximumScreenSpaceError:8,customShader:e}),W()}function j(){const c=t.imageryLayers,l=(c==null?void 0:c._layers)??[],r=l.find(h=>I(h)==="ArcGIS全球暗灰色地图");r?(r.show=!0,c.raiseToTop(r),w.error=""):w.error=`未找到「ArcGIS全球暗灰色地图」图层（当前 ${l.length} 层，底图服务表变了？）`}function Wt(){if(!i||!u)return;const c=Fe(i,{spacingM:Nt.spacingM,focusSpanM:Nt.focusSpanM,upM:u.baseHeight+2}),l=c.segs.map(([r,h])=>new Et({geometry:new he({positions:[N(r),N(h)],width:3})}));f.roadSegs=c.segs.length,g=Ye(H.fromCssColorString("#62809b"),s.flowSpeed),M=s.flowSpeed,d=new me({geometryInstances:l,appearance:new fe({material:g,translucent:!0}),asynchronous:!1}),t.scene.primitives.add(d)}function Gt(){if(!i||!u)return;const c=He(i,{...Xe,upM:u.baseHeight+1.6});y=je(H.fromCssColorString("#62809b")),p=new de({geometryInstances:new Et({geometry:new pe({polygonHierarchy:new we(c.ring.map(l=>N(l)))})}),appearance:new ge({material:y,translucent:!1}),asynchronous:!1}),t.scene.primitives.add(p)}function Vt(){if(!i||!u)return;D.setRandomNumberSeed(315);const c=document.createElement("canvas");c.width=20,c.height=20;const l=c.getContext("2d");l&&(l.beginPath(),l.arc(8,8,8,0,D.TWO_PI,!0),l.closePath(),l.fillStyle="rgb(255, 255, 255)",l.fill());const r=["#ff4d4d","#4dff88","#4d9bff","#ffe14d"];for(let h=0;h<8;h++){const _=D.randomBetween(-3200,3200),x=D.randomBetween(-3200,3200),E=N([i.centerEast+_,i.centerNorth+x,u.baseHeight+620]),k=_e.eastNorthUpToFixedFrame(E),L=F.fromTranslation(new P(0,0,160),new F),G=F.inverseTransformation(F.multiply(k,L,new F),new F),O=new ye({image:c,startColor:H.fromCssColorString(r[h%r.length]),endColor:H.fromCssColorString(r[h%r.length]).withAlpha(0),particleLife:1.4,speed:90,imageSize:new Me(7,7),emissionRate:0,emitter:new be(.5),bursts:[new Se({time:1+h*.7,minimum:220,maximum:220})],lifetime:16,updateCallback:z=>{const V=F.multiplyByPoint(G,z.position,new P);P.magnitudeSquared(V)>=300*300&&P.clone(P.ZERO,z.velocity)},modelMatrix:k,emitterModelMatrix:L});t.scene.primitives.add(O),b.push(O)}}function Yt(){if(!e||!u||!i)return;const c={...u,heightRange:s.heightRange,glowRange:s.glowRange,bandSpacing:s.bandSpacing,bandWidth:s.bandSpacing*.2};u=c,Ge(e,c,s.winScale),f.litSpan=Ft(c,i.spanHeight),f.maxLit=Pt(c,i.spanHeight)}function W(){var c,l;if(t){if(Yt(),e){const r={reflect:s.reflect,gradient:s.gradient,sweep:s.sweep,windows:s.windows,winScale:s.winScale,scanEnable:s.scanEnable,scanPos:v.pos,scanBand:Math.max(2,((i==null?void 0:i.spanHeight)??200)*.01),lightRadius:s.lightRadius,themePhase:f.phase};Bt(e,f.accent,r)}g&&M!==s.flowSpeed&&(g.uniforms.u_speed=s.flowSpeed,M=s.flowSpeed),d&&(d.show=s.roadFlow),p&&(p.show=s.water);for(const r of b)r.show=s.fireworks;t.scene.skyBox&&(t.scene.skyBox.show=s.sky),t.scene.postProcessStages.bloom.enabled=s.bloom,t.clock.shouldAnimate=s.playing,t.clock.multiplier=kt(s.speed,!1),(l=(c=t.scene).requestRender)==null||l.call(c)}}function st(){const c=st({playing:s.playing,speed:s.speed});s.playing=c.playing,W()}function jt(){const c=Q.indexOf(s.speed);s.speed=Q[(c+1)%Q.length],W()}function qt(){t&&t.camera.setView({destination:P.fromDegrees(a,m-.085,2600),orientation:{heading:D.toRadians(340),pitch:D.toRadians(-26),roll:0}})}function Xt(){A=()=>{const c=t.clock,l=U.secondsDifference(c.currentTime,c.startTime),r=at(l,s.themeCycle),h=Oe(r);if(f.phase=r,f.accent=h,s.scanEnable&&s.scanSpeed>0){const E=i?Math.max(1,i.spanHeight):200,k=De(v.pos,v.dir,s.scanSpeed,E);v.pos=k.pos,v.dir=k.dir,f.scanApplied=k.pos}e&&Bt(e,h,{reflect:s.reflect,gradient:s.gradient,sweep:s.sweep,windows:s.windows,winScale:s.winScale,scanEnable:s.scanEnable,scanPos:v.pos,scanBand:Math.max(2,((i==null?void 0:i.spanHeight)??200)*.01),lightRadius:s.lightRadius,themePhase:r});const _=h.map(E=>E.toFixed(3)).join(",");if(_!==T){T=_;const E=new H(h[0],h[1],h[2],1);if(g&&(g.uniforms.u_color=E),y){const k=[.039,.227,.29],L=.35;y.uniforms.baseWaterColor=new H(h[0]*L+k[0]*(1-L),h[1]*L+k[1]*(1-L),h[2]*L+k[2]*(1-L),1)}}const x=n==null?void 0:n.statistics;x&&(f.readyTiles=x.numberOfTilesWithContentReady??0,f.totalTiles=x.numberOfTilesTotal??0)},t.scene.postUpdate.addEventListener(A)}function Jt(){S=setInterval(()=>{var E;const c=`${f.readyTiles} / ${f.totalTiles}`;w.tiles!==c&&(w.tiles=c);const l=i?`${i.height.min.toFixed(1)} ~ ${i.height.max.toFixed(1)} m`:"—";w.height!==l&&(w.height=l);const r=`${f.litSpan.toFixed(2)} m（最大）`;w.litSpan!==r&&(w.litSpan=r);const h=`${f.phase.toFixed(3)} · ${f.accent.map(k=>k.toFixed(2)).join("/")}`;w.phase!==h&&(w.phase=h);const _=`${f.scanApplied.toFixed(0)} m`;w.scan!==_&&(w.scan=_);const x=`${((E=d==null?void 0:d.geometryInstances)==null?void 0:E.length)??0} 段 / ${p?"1 环":"—"}`;w.geo!==x&&(w.geo=x)},200)}async function Zt(c){t=c;const l=t.scene;l.highDynamicRange=!0,l.sun.show=!1,l.moon.show=!1,l.skyAtmosphere.show=!1,l.globe.showGroundAtmosphere=!1,l.globe.enableLighting=!1,l.fog.enabled=!1,l.globe.baseColor=H.fromCssColorString("#0d1a24"),l.backgroundColor=H.fromCssColorString("#05080f"),l.globe.depthTestAgainstTerrain=!1;const r=l.postProcessStages.bloom;r.enabled=!0,r.uniforms.contrast=255,r.uniforms.brightness=.05,r.uniforms.glowOnly=!1,r.uniforms.delta=1.1,r.uniforms.sigma=5,r.uniforms.stepSize=.6,r.uniforms.isSelected=!1,r.uniforms.selectedBloom=10,r.uniforms.bloomColor=H.fromCssColorString("#fafafa");const h=xe({size:qe,variant:"night",cloudAmount:.35,glowStrength:.4,groundBand:!1}),_={};for(const E of Re)_[E]=nt(h.faces[E],h.size,h.size);l.skyBox=new ce({sources:_}),await Y(),j(),qt(),Wt(),Gt(),Vt();const x=U.fromIso8601("2024-01-15T14:00:00Z");t.clock.startTime=x,t.clock.currentTime=U.clone(x),t.clock.stopTime=U.addSeconds(x,3600,new U),t.clock.clockRange=re.LOOP_STOP,t.clock.shouldAnimate=s.playing,t.clock.multiplier=kt(s.speed,!1),Xt(),Jt(),W()}return $t(()=>{A&&t&&t.scene.postUpdate.removeEventListener(A),S&&clearInterval(S),delete window.__nightCity,delete window.__nightCitySet,delete window.__nightCityMeasure,delete window.__nightCityPhase,delete window.__nightCityBand,delete window.__nightCityShot}),{init:Zt,config:s,fields:[{key:"reflect",label:"玻璃反射",type:"switch"},{key:"gradient",label:"高度渐变",type:"switch"},{key:"sweep",label:"移动光圈",type:"switch"},{key:"windows",label:"窗光带",type:"switch"},{key:"winScale",label:"窗格密度",type:"slider",min:1,max:20,step:1},{key:"bandSpacing",label:"窗光层间距",type:"slider",min:10,max:120,step:1,unit:"m"},{key:"heightRange",label:"渐变尺度",type:"slider",min:10,max:200,step:1,unit:"m"},{key:"glowRange",label:"光圈扫高",type:"slider",min:60,max:400,step:1,unit:"m"},{key:"scanEnable",label:"外观过渡",type:"switch"},{key:"scanSpeed",label:"过渡速度",type:"slider",min:1,max:20,step:1,unit:"m/帧"},{key:"lightRadius",label:"点光源半径",type:"slider",min:500,max:8e3,step:100,unit:"m"},{key:"roadFlow",label:"道路流光",type:"switch"},{key:"flowSpeed",label:"流光周期",type:"slider",min:60,max:600,step:10,unit:"帧"},{key:"water",label:"河面",type:"switch"},{key:"fireworks",label:"烟花",type:"switch"},{key:"sky",label:"夜空盒",type:"switch"},{key:"bloom",label:"辉光",type:"switch"},{key:"themeCycle",label:"主题周期",type:"slider",min:20,max:120,step:5,unit:"s"}],stat:w,togglePlay:st,cycleSpeed:jt,applyParams:W}}},Ze={class:"nc-stat"},Ke={class:"nc-stat__row"},Qe={class:"nc-stat__tiles"},$e={class:"nc-stat__row"},tn={class:"nc-stat__h"},en={class:"nc-stat__row"},nn={class:"nc-stat__span"},an={class:"nc-stat__row"},on={class:"nc-stat__phase"},sn={class:"nc-stat__row"},ln={class:"nc-stat__scan"},cn={class:"nc-stat__row"},rn={class:"nc-stat__geo"},un={key:0,class:"nc-err"},hn={class:"nc-acts"};function mn(t,n,e,o,a,m){const i=vt("Globe"),u=Qt,g=vt("ConfigPanel");return xt(),Ct(ee,null,[X(i,{options:{timeline:!1},onCreated:o.init},null,8,["onCreated"]),X(g,{model:o.config,fields:o.fields,title:"夜景白模城市",tip:"本地济南白模（JN-WhiteModel，116MB/15 瓦片）用一支 CustomShader 做夜景：高度轴是 positionMC.y（本瓦片 Y-up，示例那套 Z-up 的写法会把光圈打到地下）、窗光带/移动光圈/玻璃反射/两盏彩色点光源/外观过渡扫描，再叠道路流光、河面、夜空盒、烟花与 bloom。高度常数由 tileset.json **实测推导**（不是抄示例的 50/40/200）。",onChange:o.applyParams},{default:K(()=>[R("div",Ze,[R("div",Ke,[n[0]||(n[0]=R("span",null,"白模瓦片",-1)),R("b",Qe,B(o.stat.tiles),1)]),R("div",$e,[n[1]||(n[1]=R("span",null,"高度区间",-1)),R("b",tn,B(o.stat.height),1)]),R("div",en,[n[2]||(n[2]=R("span",null,"光圈窗口",-1)),R("b",nn,B(o.stat.litSpan),1)]),R("div",an,[n[3]||(n[3]=R("span",null,"主题相位",-1)),R("b",on,B(o.stat.phase),1)]),R("div",sn,[n[4]||(n[4]=R("span",null,"扫描面",-1)),R("b",ln,B(o.stat.scan),1)]),R("div",cn,[n[5]||(n[5]=R("span",null,"路网/河环",-1)),R("b",rn,B(o.stat.geo),1)])]),o.stat.error?(xt(),Ct("div",un,B(o.stat.error),1)):ne("",!0),R("div",hn,[X(u,{class:"oo-btn",size:"small",type:"primary",onClick:o.togglePlay},{default:K(()=>[Rt(B(o.config.playing?"暂停":"播放"),1)]),_:1},8,["onClick"]),X(u,{class:"oo-btn",size:"small",onClick:o.cycleSpeed},{default:K(()=>[Rt("倍速 ×"+B(o.config.speed),1)]),_:1},8,["onClick"])])]),_:1},8,["model","fields","onChange"])],64)}const In=te(Je,[["render",mn],["__scopeId","data-v-58a4e05f"]]);export{In as default};
