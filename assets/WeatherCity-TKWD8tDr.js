import{E as ue}from"./el-button-BIufFjLp.js";import"./el-select-DHZScApW.js";import{d as ce,o as me,c as fe,a as b,w as k,F as de,r as pe,h as g,f as ge,b as a,g as L,t as h,_ as he}from"./index-9vIL5KkC.js";import{J as v,d as l,w as c,I as ve,O as we,e as _e,P as Y,g as be,U as X,f as Z,p as Ce,cX as ye,cY as Se,gi as xe,l1 as I}from"./cesium-utSEP5if.js";import{G as ke}from"./index-DRCmDxZs.js";import Te from"./ConfigPanel-BclLAqzI.js";import{r as Ae}from"./rain-BEvjiNYi.js";import"./index-ANLxL66K.js";import"./use-global-config-DaIFvEHd.js";import"./_commonjsHelpers-gnU0ypJ3.js";import"./cesium2s-TV_G_QRL.js";import"./index-CtVsJ-X_.js";import"./fullscreenPopper-CpT4yrsP.js";import"./services-CwmS6buH.js";import"./el-color-picker-Gb65Y4tk.js";const Oe=`// 雪效果后处理 —— Cesium 1.136 兼容实现
// ---------------------------------------------------------------------------
// 与 rain.glsl 同理：Cesium 1.136 的公开构建里 **没有** createSnowStage
// （实测 grep "createSnowStage" / "snowStage" 均为 0 次命中），故自研。
//
// 做法：屏幕空间三层「雪花粒子场」。
//   · 把屏幕切成网格，每个格子里放至多一个雪花（哈希决定位置与大小）；
//   · 下落速度分层（远的慢、近的快），并叠加正弦横向飘移；
//   · 用平滑圆点做 sprite，避免方形颗粒感。

uniform sampler2D colorTexture;
uniform float u_intensity; // 0..1 雪强度
uniform float u_time; // 秒
uniform vec3 u_snowColor;

in vec2 v_textureCoordinates;

float snowHash(vec2 p) {
  return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
}

void main(void) {
  vec4 color = texture(colorTexture, v_textureCoordinates);
  vec2 uv = v_textureCoordinates;
  float aspect = czm_viewport.z / czm_viewport.w;

  float snow = 0.0;
  for (int i = 0; i < 4; i++) {
    float fi = float(i);
    float cells = 14.0 + fi * 9.0; // 网格密度（层）
    float fall = 0.035 + fi * 0.028; // 下落速度

    // 横向飘移：随时间与纵向位置做正弦，模拟风
    float drift = sin(u_time * (0.5 + fi * 0.25) + uv.y * 6.0 + fi * 2.1) * 0.022;

    vec2 st = vec2((uv.x + drift) * cells * aspect, uv.y * cells + u_time * fall * cells);
    vec2 cell = floor(st);
    vec2 local = fract(st) - 0.5;

    float r = snowHash(cell + fi * 31.0);
    // 只用 55% 的格子放雪花，其余留空 → 疏密自然
    if (r > 0.55) {
      float size = 0.16 + r * 0.18;
      float d = length(local);
      // 平滑圆点：边缘柔和
      snow += smoothstep(size, size * 0.25, d) * (0.5 + r * 0.5);
    }
  }

  snow = clamp(snow, 0.0, 1.0) * u_intensity;
  color.rgb = mix(color.rgb, u_snowColor, snow * 0.9);
  out_FragColor = color;
}
`,Pe={class:"wc__acts"},ze={class:"wc__read"},Ee={class:"wc__read"},Le={class:"wc__read"},Ie={class:"wc__read"},Me={class:"wc__read"},q="/models/3dtiles/JN-WhiteModel/tileset.json",K="2024-06-21T04:00:00Z",Fe=ce({meta:{path:"/cesium/weather-city",title:"昼夜联动天气"},__name:"WeatherCity",setup(Re){const s=pe({hour:12,autoDay:!0,linking:!0,snow:.6,rain:0,rainColor:"#93a7c4",snowColor:"#e8f1ff"}),M=g(0),T=g(!1),F=g(!1),R=g(!1),A=g(1),C=g(0),y=g(0);let t=null,m=null,S,x,w=null,N=0,V=0,D=v.now();const Q=new l,ee=[{key:"hour",label:"世界时",type:"slider",min:0,max:24,step:.25,unit:"h",digits:2},{key:"autoDay",label:"昼夜自动流转",type:"switch"},{key:"linking",label:"昼夜联动（对照项）",type:"switch"},{key:"snow",label:"降雪强度",type:"slider",min:0,max:1,step:.05,digits:2},{key:"rain",label:"降雨强度",type:"slider",min:0,max:1,step:.05,digits:2},{key:"rainColor",label:"雨色",type:"color"},{key:"snowColor",label:"雪色",type:"color"}];({...s});function te(){return new ye({mode:Se.REPLACE_MATERIAL,lightingModel:xe.UNLIT,uniforms:{u_lightColor:{type:I.VEC3,value:new l(1,1,1)},u_snowAlpha:{type:I.FLOAT,value:0},u_rainAlpha:{type:I.FLOAT,value:0},u_night:{type:I.FLOAT,value:0}},fragmentShaderText:`
      void fragmentMain(FragmentInput fsInput, inout czm_modelMaterial material) {
        vec3 positionMC = fsInput.attributes.positionMC;
        vec3 normalEC = fsInput.attributes.normalEC;
        // 世界系法线 → 取 z 分量当作"朝天程度"，决定积雪/积水的累积量
        vec3 normalWC = normalize(czm_inverseViewRotation * normalEC);
        float upness = smoothstep(0.15, 0.85, abs(normalWC.z));

        // 基础白模：低处偏暗、高处偏亮
        float hNorm = clamp(positionMC.y / 240.0, 0.0, 1.0);
        vec3 base = mix(vec3(0.10, 0.12, 0.16), vec3(0.72, 0.75, 0.80), hNorm);
        material.diffuse = base;

        // 积雪：只落在朝上的面
        material.diffuse = mix(material.diffuse, vec3(0.92, 0.95, 1.0), u_snowAlpha * upness);

        // 湿滑：整体压暗（朝上的面更湿更暗）
        float wet = u_rainAlpha * (0.35 + 0.65 * upness);
        material.diffuse = mix(material.diffuse, material.diffuse * 0.32 + vec3(0.02, 0.03, 0.05), wet);

        // 夜间窗光：按高度分带随机点亮（确定性，不用 rand）
        float band = step(0.55, fract(positionMC.y * 0.42 + positionMC.x * 0.07));
        material.diffuse += vec3(1.0, 0.86, 0.55) * band * u_night * 0.55;

        // 受光（u_lightColor 由 JS 的照度链写入）
        material.diffuse *= min(max(dot(normalEC, czm_sunDirectionEC), 0.0) + u_lightColor, 1.0);
        material.alpha = 1.0;
      }
    `})}function ne(){var e,o;const n=(o=(e=t==null?void 0:t.camera)==null?void 0:e.frustum)==null?void 0:o.fovy;return typeof n=="number"&&n>0?n:c.toRadians(60)}function B(){return t?v.secondsDifference(t.clock.currentTime,D):0}function oe(){const n=X.fromCssColorString(s.rainColor);return new Z({name:"wc-rain",fragmentShader:Ae,uniforms:{u_intensity:()=>s.rain,u_time:()=>B(),u_rainColor:()=>n,u_cols:()=>180,u_len:()=>.35,u_speed:()=>1.6,u_dir:()=>new Ce(0,1),u_spread:()=>1,u_aspect:()=>t?t.canvas.clientWidth/Math.max(1,t.canvas.clientHeight):1.7,u_depthRef:()=>{if(!t)return 1e3;const e=t.camera.positionCartographic.height,o=Math.max(.05,-t.camera.pitch);return e/Math.sin(o)},u_H:()=>t?t.camera.positionCartographic.height:2e3,u_pitch:()=>t?t.camera.pitch:-.4,u_tanHalfFovY:()=>Math.tan(ne()/2),u_anchor:()=>t?Math.abs(Math.cos(t.camera.pitch)):1,u_heading:()=>t?t.camera.heading:0}})}function se(){const n=X.fromCssColorString(s.snowColor);return new Z({name:"wc-snow",fragmentShader:Oe,uniforms:{u_intensity:()=>s.snow,u_time:()=>B(),u_snowColor:()=>n}})}function ae(n,e){const o=ve.computeIcrfToFixedMatrix(n);if(!o)return;const i=we.computeSunPositionInEarthInertialFrame(n,new l),r=_e.multiplyByVector(o,i,new l);return l.normalize(r,e)}function O(){var f;if(!t||!m)return!1;const n=t.clock.currentTime,e=ae(n,Q);if(!e)return!1;const o=l.normalize(t.camera.position,new l),i=c.clamp(l.dot(o,e),-1,1);M.value=i;const r=(f=m.customShader)==null?void 0:f.uniforms;if(!s.linking)return T.value=!1,t.scene.postProcessStages.bloom&&(t.scene.postProcessStages.bloom.enabled=!1),t.scene.postProcessStages.ambientOcclusion&&(t.scene.postProcessStages.ambientOcclusion.enabled=!0),F.value=!1,R.value=!0,A.value=1.3,w&&(w.brightness=1.3),C.value=s.snow,y.value=s.rain,r&&(r.u_lightColor.value=new l(1,1,1),r.u_snowAlpha.value=s.snow,r.u_rainAlpha.value=s.rain,r.u_night.value=0),!0;const u=i<0;T.value=u,t.scene.postProcessStages.bloom&&(t.scene.postProcessStages.bloom.enabled=u),t.scene.postProcessStages.ambientOcclusion&&(t.scene.postProcessStages.ambientOcclusion.enabled=!u),F.value=u,R.value=!u;const d=c.clamp(i,0,1);A.value=d+.3,w&&(w.brightness=d+.3);const E=1+(1-d)*.9;if(C.value=c.clamp(s.snow*E,0,1),y.value=c.clamp(s.rain*E,0,1),r){const _=c.clamp(i,.05,2);r.u_lightColor.value=new l(_,_,_),r.u_snowAlpha.value=C.value,r.u_rainAlpha.value=y.value,r.u_night.value=u?1:0}return!0}function P(){if(!t)return;t.clock.shouldAnimate=!!s.autoDay,t.clock.multiplier=600;const n=v.fromIso8601(K);t.clock.currentTime=v.addSeconds(n,s.hour*3600,new v),O()}function W(n){s.hour=n,P(),O()}function ie(){}const re={city:{dLat:-.085,h:2600,heading:340,pitch:-26},wide:{dLat:-.26,h:11e3,heading:345,pitch:-30}};function z(n){if(!t)return;const e=re[n];e&&t.camera.setView({destination:l.fromDegrees(N,V+e.dLat,e.h),orientation:{heading:c.toRadians(e.heading),pitch:c.toRadians(e.pitch),roll:0}})}async function le(n){var _;t=n;const e=t.scene;e.globe.enableLighting=!0,e.globe.depthTestAgainstTerrain=!1,e.msaaSamples=4,e.postProcessStages.fxaa&&(e.postProcessStages.fxaa.enabled=!0);const o=e.postProcessStages.bloom;o&&Object.assign(o.uniforms,{contrast:119,brightness:-.4,glowOnly:!1,delta:.9,sigma:3.78,stepSize:5});const i=e.postProcessStages.ambientOcclusion;i&&Object.assign(i.uniforms,{intensity:1.5,bias:.4,lengthCap:.45,stepSize:1.8,blurStepSize:1}),w=e.imageryLayers.get(0);const u=await(await fetch(q)).json(),d=(_=u==null?void 0:u.root)==null?void 0:_.transform;if(!Array.isArray(d)||d.length!==16)throw new Error("tileset.json 缺 root.transform");const E=Y.fromArray(d),f=be.fromCartesian(Y.getTranslation(E,new l));N=c.toDegrees((f==null?void 0:f.longitude)??0),V=c.toDegrees((f==null?void 0:f.latitude)??0),S=oe(),x=se(),e.postProcessStages.add(S),e.postProcessStages.add(x),m=await t.load3dtiles(q,{maximumScreenSpaceError:16}),m.customShader=te(),D=v.fromIso8601(K),t.clock.currentTime=D,z("city"),P(),e.postRender.addEventListener(j),window.__weatherCity=()=>{var p,H,U,$,G,J;return{ready:!!m,linking:s.linking,sunDot:M.value,night:T.value,bloom:!!((p=e.postProcessStages.bloom)!=null&&p.enabled),ao:!!((H=e.postProcessStages.ambientOcclusion)!=null&&H.enabled),imageryBrightness:A.value,surfSnow:C.value,surfRain:y.value,lightColor:((J=(G=($=(U=m==null?void 0:m.customShader)==null?void 0:U.uniforms)==null?void 0:$.u_lightColor)==null?void 0:G.value)==null?void 0:J.x)??-1,clockAnimate:t.clock.shouldAnimate,clockTime:v.toIso8601(t.clock.currentTime),rainStage:!!S,snowStage:!!x}},window.__weatherCityApply=p=>(Object.assign(s,p),P(),O(),window.__weatherCity()),window.__weatherCityView=p=>(z(p),p)}function j(){O()}return me(()=>{var n;if(t&&!((n=t.isDestroyed)!=null&&n.call(t))){t.scene.postRender.removeEventListener(j);const e=t.scene.postProcessStages;for(const o of[S,x])o&&e.contains(o)&&e.remove(o)}S=void 0,x=void 0,m=null,w=null,delete window.__weatherCity,delete window.__weatherCityApply,delete window.__weatherCityView,t=null}),(n,e)=>{const o=ue;return ge(),fe(de,null,[b(ke,{options:{terrain:!1},onChange:ie,onCreated:le}),b(Te,{model:s,fields:ee,title:"昼夜联动天气",tip:"核心不是「下雨下雪」本身，而是**昼夜联动**：每帧按 sun·camera 点积算出当前照度，一处分档驱动四处 —— 泛光/环境光遮蔽开关、建筑 CustomShader 的受光量、底图亮度、地表积雪/湿滑累积。右侧读数区把这条链路的每一环都摊开给你看。",onChange:P},{default:k(()=>[a("div",Pe,[b(o,{class:"oo-btn",size:"small",onClick:e[0]||(e[0]=i=>z("city"))},{default:k(()=>[...e[4]||(e[4]=[L("城区视角",-1)])]),_:1}),b(o,{class:"oo-btn",size:"small",onClick:e[1]||(e[1]=i=>z("wide"))},{default:k(()=>[...e[5]||(e[5]=[L("远景",-1)])]),_:1}),b(o,{class:"oo-btn",size:"small",onClick:e[2]||(e[2]=i=>W(12))},{default:k(()=>[...e[6]||(e[6]=[L("正午",-1)])]),_:1}),b(o,{class:"oo-btn",size:"small",onClick:e[3]||(e[3]=i=>W(0))},{default:k(()=>[...e[7]||(e[7]=[L("午夜",-1)])]),_:1})]),a("div",ze,[e[8]||(e[8]=a("span",null,"照度 sn（sun·camera）",-1)),a("b",null,h(M.value.toFixed(3)),1)]),a("div",Ee,[e[9]||(e[9]=a("span",null,"档位",-1)),a("b",null,h(T.value?"夜间":"日间"),1)]),a("div",Le,[e[10]||(e[10]=a("span",null,"泛光 / 环境光遮蔽",-1)),a("b",null,h(F.value?"开":"关")+" / "+h(R.value?"开":"关"),1)]),a("div",Ie,[e[11]||(e[11]=a("span",null,"底图亮度",-1)),a("b",null,h(A.value.toFixed(2)),1)]),a("div",Me,[e[12]||(e[12]=a("span",null,"地表积雪 / 湿滑",-1)),a("b",null,h(C.value.toFixed(2))+" / "+h(y.value.toFixed(2)),1)])]),_:1},8,["model"])],64)}}}),Ke=he(Fe,[["__scopeId","data-v-efe590e7"]]);export{Ke as default};
