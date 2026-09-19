import{E as k}from"./el-button-BIufFjLp.js";import{E as N}from"./fullscreenPopper-CpT4yrsP.js";import"./el-select-DHZScApW.js";import{d as R,o as B,c as g,a as v,b as e,g as i,t as r,F,j as O,u as _,w as $,h as p,f as y,k as D,_ as G}from"./index-9vIL5KkC.js";import{cX as j,l1 as X,d as Y,x as J,w as C}from"./cesium-utSEP5if.js";import{G as P}from"./index-DRCmDxZs.js";import"./index-ANLxL66K.js";import"./use-global-config-DaIFvEHd.js";import"./_commonjsHelpers-gnU0ypJ3.js";import"./cesium2s-TV_G_QRL.js";import"./index-CtVsJ-X_.js";import"./services-CwmS6buH.js";const E=[{t:0,color:[.1,.3,.85],label:"0%（最低）"},{t:.25,color:[.12,.75,.85],label:"25%"},{t:.5,color:[.35,.85,.28],label:"50%"},{t:.75,color:[.98,.8,.18],label:"75%"},{t:1,color:[.92,.2,.16],label:"100%（最高）"}];function W(l){const n=d=>Math.round(Math.max(0,Math.min(1,d))*255);return`rgb(${n(l[0])}, ${n(l[1])}, ${n(l[2])})`}function q(){return E.map(l=>W(l.color))}function K(){return E.map(l=>l.label)}const I=0,L=160,Q=`
vec3 heat(float t) {
  t = clamp(t, 0.0, 1.0);
  vec3 c0 = vec3(0.10, 0.30, 0.85);
  vec3 c1 = vec3(0.12, 0.75, 0.85);
  vec3 c2 = vec3(0.35, 0.85, 0.28);
  vec3 c3 = vec3(0.98, 0.80, 0.18);
  vec3 c4 = vec3(0.92, 0.20, 0.16);
  if (t < 0.25) { return mix(c0, c1, t / 0.25); }
  if (t < 0.50) { return mix(c1, c2, (t - 0.25) / 0.25); }
  if (t < 0.75) { return mix(c2, c3, (t - 0.50) / 0.25); }
  return mix(c3, c4, (t - 0.75) / 0.25);
}

void fragmentMain(FragmentInput fsInput, inout czm_modelMaterial material) {
  // 建筑高度：glTF 空间 Y 轴向上（见文件头的高度轴结论）
  float h = fsInput.attributes.positionMC.y;

  // 高度归一化 → 5 结点连续色带
  float t = (h - u_hMin) / max(1.0, u_hMax - u_hMin);

  // 噪声：按 xz **分格**取值（不是逐片元随机）⇒ 同一栋楼内部是同一个偏移量，
  // 视觉上是「分栋起伏」而不是「满屏噪点」。格边长 u_cell 约等于一栋楼的尺度。
  float cell = max(1.0, u_cell);
  float n = fract(sin(dot(floor(fsInput.attributes.positionMC.xz / cell), vec2(12.9898, 78.233))) * 43758.5453);
  t = clamp(t + (n - 0.5) * u_noise, 0.0, 1.0);

  material.diffuse = heat(t);
}
`;function Z(){const l=X;return new j({uniforms:{u_hMin:{type:l.FLOAT,value:I},u_hMax:{type:l.FLOAT,value:L},u_noise:{type:l.FLOAT,value:.18},u_cell:{type:l.FLOAT,value:40}},fragmentShaderText:Q})}function ee(l,n){l.setUniform("u_hMin",n.hMin),l.setUniform("u_hMax",n.hMax),l.setUniform("u_noise",n.noise),l.setUniform("u_cell",n.cell)}const te={class:"oo-card oo-panel panel"},le={class:"ctl"},ne={class:"ctl"},oe={class:"legend"},ae={class:"readout"},ie={class:"btns"},se="/models/3dtiles/JN-WhiteModel/tileset.json",re=R({meta:{path:"/cesium/model-flood",title:"建筑热力"},__name:"ModelFlood",setup(l){const n=p(.18),d=I,u=p(L),h=p(0),S=p("—"),b=K(),z=q(),x=p("正在加载城市白模…");let o=null,a=null,s=null,f=null;function m(){return o&&typeof o.isDestroyed=="function"?!o.isDestroyed():!1}function M(){s&&ee(s,{hMin:d,hMax:u.value,noise:n.value,cell:40})}function w(){!o||!m()||!a||o.camera.flyToBoundingSphere(a.boundingSphere,{duration:0,offset:new J(C.toRadians(25),C.toRadians(-38),a.boundingSphere.radius*1.5)})}async function A(T){o=T,o.camera.setView({destination:new Y(-2.3254302818162767e6,4567209496149441e-9,3.7843622527647093e6),orientation:{heading:5.494979066208495,pitch:-.2910549916283476,roll:0}});try{a=await o.load3dtiles(se,{maximumScreenSpaceError:16})}catch(t){x.value=`白模加载失败：${String(t)}`;return}!m()||!a||(h.value+=1,s=Z(),a.customShader=s,w(),M(),x.value="拖动「高度上限」看色带重新归一化；拖「噪声强度」看分栋起伏。",f=setInterval(()=>{m()&&(S.value=`${Math.round(o.camera.positionCartographic.height)} m`)},300),window.__heat=()=>({ready:!!s&&!!a,noise:n.value,hMin:d,hMax:u.value,tilesetVersion:h.value,tilesetVisible:!!a,heatStops:b.length,cameraHeight:m()?o.camera.positionCartographic.height:-1,tip:x.value}))}return B(()=>{f&&(clearInterval(f),f=null);try{a&&m()&&o.scene.primitives.remove(a)}catch{}a=null;try{s==null||s.destroy()}catch{}s=null,delete window.__heat}),(T,t)=>{const V=N,H=k;return y(),g(F,null,[v(P,{options:{terrain:!1},onCreated:A}),e("div",te,[t[9]||(t[9]=e("div",{class:"panel__title"},"建筑热力",-1)),t[10]||(t[10]=e("div",{class:"panel__tip"},[i(" 对城市白模按"),e("b",null,"建筑高度"),i("做连续热力专题着色：5 结点色带 + 按 xz 分格的噪声做 "),e("b",null,"分栋起伏"),i("。只改 uniform，"),e("b",null,"不重载瓦片"),i("（面板里的「瓦片版本」可复核）。 ")],-1)),e("div",le,[t[2]||(t[2]=e("span",null,"噪声强度（分栋起伏）",-1)),e("b",null,r(n.value.toFixed(2)),1),v(V,{modelValue:n.value,"onUpdate:modelValue":t[0]||(t[0]=c=>n.value=c),min:0,max:.5,step:.02,size:"small",onInput:M},null,8,["modelValue"])]),e("div",ne,[t[3]||(t[3]=e("span",null,"高度上限（归一化）",-1)),e("b",null,r(u.value)+" m",1),v(V,{modelValue:u.value,"onUpdate:modelValue":t[1]||(t[1]=c=>u.value=c),min:40,max:300,step:10,size:"small",onInput:M},null,8,["modelValue"])]),e("div",oe,[(y(!0),g(F,null,O(_(b),(c,U)=>(y(),g("div",{key:c,class:"legend__item"},[e("i",{style:D({background:_(z)[U]})},null,4),e("span",null,r(c),1)]))),128))]),e("div",ae,[e("div",null,[t[4]||(t[4]=e("span",null,"高度范围约定",-1)),e("b",null,r(_(d))+" ~ "+r(u.value)+" m",1)]),e("div",null,[t[5]||(t[5]=e("span",null,"瓦片版本",-1)),e("b",null,"v"+r(h.value),1)]),e("div",null,[t[6]||(t[6]=e("span",null,"相机高度",-1)),e("b",null,r(S.value),1)]),e("div",null,[t[7]||(t[7]=e("span",null,"色带结点",-1)),e("b",null,r(_(b).length),1)])]),t[11]||(t[11]=e("div",{class:"panel__tip"},[e("b",null,"高度范围"),i("是十期用二进制解析 "),e("code",null,"NoLod_0.b3dm"),i(" 得到的 "),e("code",null,"Y 9.2~152.0"),i("，另有瓦片底座略低，故默认取 0~160 m 并可调。 噪声按 "),e("code",null,"xz"),i(),e("b",null,"分格"),i("取值（不是逐片元随机），所以同一栋楼内部是同一个偏移量 —— 视觉上是「分栋起伏」而不是「满屏噪点」。 ")],-1)),e("div",ie,[v(H,{size:"small",onClick:w},{default:$(()=>[...t[8]||(t[8]=[i("重置视角",-1)])]),_:1})])])],64)}}}),ge=G(re,[["__scopeId","data-v-33004622"]]);export{ge as default};
