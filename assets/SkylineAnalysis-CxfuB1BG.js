import{f as _,U as y,d as m,w as C}from"./cesium-utSEP5if.js";import{G as w}from"./index-DRCmDxZs.js";import S from"./ConfigPanel-BclLAqzI.js";import{d as b,o as D,c as k,a as g,b as o,t as c,F as T,h as p,f as z,r as F,_ as W}from"./index-9vIL5KkC.js";import"./cesium2s-TV_G_QRL.js";import"./index-CtVsJ-X_.js";import"./el-select-DHZScApW.js";import"./_commonjsHelpers-gnU0ypJ3.js";import"./fullscreenPopper-CpT4yrsP.js";import"./services-CwmS6buH.js";import"./el-color-picker-Gb65Y4tk.js";import"./el-button-BIufFjLp.js";import"./index-ANLxL66K.js";import"./use-global-config-DaIFvEHd.js";const P=`// 天际线后处理 fragmentShader（六期 · 优先级 2）
// ---------------------------------------------------------------------------
// 移植 mars3d \`thing.Skyline\` 的深度边缘检测算法，改写为 Cesium 1.136 内置函数。
//
// ⚠️ Cesium 1.136 后处理走 **GLSL 3.0（WebGL2）** 语法（参考 shaders/mosaic.glsl）：
//   · 输入用 \`in vec2 v_textureCoordinates\`（不能写 \`varying\`，那是 WebGL1 保留字）；
//   · 输出用 \`out_FragColor\`（不能写 \`gl_FragColor\`）；
//   · \`v_textureCoordinates\` / \`colorTexture\` / \`depthTexture\` 是 PostProcessStage
//     自动注入的，**不要自行声明** sampler 之外的这些变量名。
//
// 算法：读深度纹理 depthTexture，对当前像素的 8 邻域采样深度；
// 若任一邻域深度「未命中」（即天空 / 无地形，打包深度 >= 1.0），
// 则当前像素是山脊/天际线轮廓，染成 tjxColor；其余保持原色。
//
// ⚠️ 本文件走 import 字符串导入（glslAsString 插件），**禁止反引号**。
uniform sampler2D colorTexture;
uniform sampler2D depthTexture;
uniform float lineWidth;   // 线宽（像素）
uniform vec3 tjxColor;     // 天际线颜色（rgb）
uniform float height;      // 相机高度（米），超过阈值直接跳过

in vec2 v_textureCoordinates;

// 窗口深度 → 线性深度（0~1）
float getDepth(in vec4 depth) {
  float z_window = czm_unpackDepth(depth);
  z_window = czm_reverseLogDepth(z_window);
  float n_range = czm_depthRange.near;
  float f_range = czm_depthRange.far;
  return (2.0 * z_window - n_range - f_range) / (f_range - n_range);
}

// 8 邻域深度采样：任一邻域是「天空」（打包深度 >= 1.0）→ 当前像素是轮廓
bool isSkyline(vec2 uv, float lw) {
  vec2 pixelSize = lw / czm_viewport.zw;
  float dx0 = -pixelSize.x;
  float dy0 = -pixelSize.y;
  float dx1 = pixelSize.x;
  float dy1 = pixelSize.y;

  if (getDepth(texture(depthTexture, uv + vec2(dx0, dy0))) >= 1.0) return true;
  if (getDepth(texture(depthTexture, uv + vec2(0.0, dy0))) >= 1.0) return true;
  if (getDepth(texture(depthTexture, uv + vec2(dx1, dy0))) >= 1.0) return true;
  if (getDepth(texture(depthTexture, uv + vec2(dx0, 0.0))) >= 1.0) return true;
  if (getDepth(texture(depthTexture, uv + vec2(dx1, 0.0))) >= 1.0) return true;
  if (getDepth(texture(depthTexture, uv + vec2(dx0, dy1))) >= 1.0) return true;
  if (getDepth(texture(depthTexture, uv + vec2(0.0, dy1))) >= 1.0) return true;
  if (getDepth(texture(depthTexture, uv + vec2(dx1, dy1))) >= 1.0) return true;

  return false;
}

void main() {
  vec4 color = texture(colorTexture, v_textureCoordinates);

  // 相机高度超过阈值（高空俯瞰无「天空」像素，满屏噪点）→ 直接返回原色
  if (height > 14102.0) {
    out_FragColor = color;
    return;
  }

  vec4 currD = texture(depthTexture, v_textureCoordinates);
  // 当前像素本身就是天空 → 原色（天际线只画在「地形与天空的交界」处）
  if (currD.r >= 1.0) {
    out_FragColor = color;
    return;
  }

  if (isSkyline(v_textureCoordinates, lineWidth)) {
    // 天际线像素：染成 tjxColor
    out_FragColor = vec4(mix(color.rgb, tjxColor, 0.9), 1.0);
  } else {
    out_FragColor = color;
  }
}
`,j={class:"oo-card hud"},G={class:"hud__row"},L={class:"hud__row"},A={class:"hud__row"},B=b({meta:{path:"/cesium/skyline",title:"天际线分析"},__name:"SkylineAnalysis",setup(I){let t=null;function a(){return t?typeof t.isDestroyed=="function"?!t.isDestroyed():!0:!1}const i=F({enabled:!0,lineWidth:2,color:"rgba(255, 80, 80, 1.0)"}),v=[{key:"enabled",label:"天际线开关",type:"switch"},{key:"lineWidth",label:"线宽",type:"slider",min:1,max:10,step:1,unit:"px"},{key:"color",label:"颜色",type:"color"}],l=p(!1),s=p(0),d=p(0);let r;function f(){if(!a())return;const n=t.scene.postProcessStages;if(r&&n.contains(r)&&(n.remove(r),r=void 0),!i.enabled){l.value=!1,s.value=n.length,h();return}r=new _({name:"demo-skyline",fragmentShader:P,uniforms:{height:()=>{if(!a())return 0;const e=t.camera.positionCartographic;return e?e.height:0},lineWidth:()=>i.lineWidth,tjxColor:()=>{const e=y.fromCssColorString(i.color);return new m(e.red,e.green,e.blue)}}}),n.add(r),l.value=!0,s.value=n.length,h()}function h(){var n;d.value=a()?((n=t.camera.positionCartographic)==null?void 0:n.height)??0:0,window.__skyline={enabled:i.enabled,width:i.lineWidth,color:i.color,stageMounted:l.value,stageCount:s.value}}let u;function x(n){t=n,t.camera.flyTo({destination:m.fromDegrees(116.4,39.9,4e3),orientation:{heading:0,pitch:C.toRadians(-25),roll:0},duration:0}),f(),u=setInterval(()=>{var e;a()&&(d.value=((e=t.camera.positionCartographic)==null?void 0:e.height)??0)},500)}return D(()=>{u&&clearInterval(u),u=void 0,a()&&r&&t.scene.postProcessStages.contains(r)&&t.scene.postProcessStages.remove(r),r=void 0,a()&&(t=null)}),(n,e)=>(z(),k(T,null,[g(w,{options:{terrain:!0,timeline:!1},onCreated:x}),g(S,{model:i,fields:v,title:"天际线分析",tip:"深度边缘检测勾勒地形/模型山脊轮廓。对标 mars3d k10_skyline（PostProcessStage + 深度纹理 8 邻域边缘检测）。",onChange:f},null,8,["model"]),o("div",j,[o("div",G,[e[0]||(e[0]=o("span",null,"后处理已挂载",-1)),o("b",null,c(l.value?"是":"否"),1)]),o("div",L,[e[1]||(e[1]=o("span",null,"后处理总数",-1)),o("b",null,c(s.value),1)]),o("div",A,[e[2]||(e[2]=o("span",null,"相机高度",-1)),o("b",null,c(d.value.toFixed(0))+" m",1)])])],64))}}),Z=W(B,[["__scopeId","data-v-907a06a1"]]);export{Z as default};
