import{U as l,d as g,f as p}from"./cesium-utSEP5if.js";import{G as d}from"./index-DRCmDxZs.js";import h from"./ConfigPanel-BclLAqzI.js";import{r as u,_ as C,c as _,a as c,F as x,p as f,f as H}from"./index-9vIL5KkC.js";import"./cesium2s-TV_G_QRL.js";import"./index-CtVsJ-X_.js";import"./el-select-DHZScApW.js";import"./_commonjsHelpers-gnU0ypJ3.js";import"./fullscreenPopper-CpT4yrsP.js";import"./services-CwmS6buH.js";import"./el-color-picker-Gb65Y4tk.js";import"./el-button-BIufFjLp.js";import"./index-ANLxL66K.js";import"./use-global-config-DaIFvEHd.js";const v=`uniform sampler2D colorTexture;  // 颜色纹理
uniform sampler2D depthTexture;  // 深度纹理
in vec2 v_textureCoordinates;  // 纹理坐标
uniform float u_earthRadiusOnCamera;
uniform float u_cameraHeight;
uniform float u_fogHeight;
uniform vec3 u_fogColor;
uniform float u_globalDensity;

//通过深度纹理与纹理坐标得到世界坐标
vec4 getWorldCoordinate(sampler2D depthTexture, vec2 texCoords) {
  float depthOrLogDepth = czm_unpackDepth(texture(depthTexture, texCoords));
  vec4 eyeCoordinate = czm_windowToEyeCoordinates(gl_FragCoord.xy, depthOrLogDepth);
  eyeCoordinate = eyeCoordinate / eyeCoordinate.w;
  vec4 worldCoordinate = czm_inverseView * eyeCoordinate;
  worldCoordinate = worldCoordinate / worldCoordinate.w;
  return worldCoordinate;
}

//计算粗略的高程，依赖js传递的相机位置处的地球高程_earthRadiusOnCamera。好处是计算量非常低
float getRoughHeight(vec4 worldCoordinate) {
  float disToCenter = length(vec3(worldCoordinate));
  return disToCenter - u_earthRadiusOnCamera;
}

//得到a向量在b向量的投影长度，如果同向结果为正，异向结果为负
float projectVector(vec3 a, vec3 b) {
  float scale = dot(a, b) / dot(b, b);
  float k = scale / abs(scale);
  return k * length(scale * b);
}

//线性密度积分高度雾
float linearHeightFog(vec3 positionToCamera, float cameraHeight, float pixelHeight, float fogMaxHeight) {
  float globalDensity = u_globalDensity / 10.0;
  vec3 up = -1.0 * normalize(czm_viewerPositionWC);
  float vh = projectVector(normalize(positionToCamera), up);

  //让相机沿着视线方向移动 雾气产生距离 的距离
  float s = step(100.0, length(positionToCamera));
  vec3 sub = mix(positionToCamera, normalize(positionToCamera) * 100.0, s);
  positionToCamera -= sub;
  cameraHeight = mix(pixelHeight, cameraHeight - 100.0 * vh, s);

  float b = mix(cameraHeight, fogMaxHeight, step(fogMaxHeight, cameraHeight));
  float a = mix(pixelHeight, fogMaxHeight, step(fogMaxHeight, pixelHeight));

  float fog = (b - a) - 0.5 * (pow(b, 2.0) - pow(a, 2.0)) / fogMaxHeight;
  fog = globalDensity * fog / vh;

  if(abs(vh) <= 0.01 && cameraHeight < fogMaxHeight) {
    float disToCamera = length(positionToCamera);
    fog = globalDensity * (1.0 - cameraHeight / fogMaxHeight) * disToCamera;
  }

  fog = mix(0.0, 1.0, fog / (fog + 1.0));

  return fog;
}
void main(void) {
  vec4 color = texture(colorTexture, v_textureCoordinates);
  vec4 positionWC = getWorldCoordinate(depthTexture, v_textureCoordinates);
  float pixelHeight = getRoughHeight(positionWC);
  vec3 positionToCamera = vec3(vec3(positionWC) - czm_viewerPositionWC);
  float fog = linearHeightFog(positionToCamera, u_cameraHeight, pixelHeight, u_fogHeight);
  out_FragColor = mix(color, vec4(u_fogColor, 1.0), fog);
}
`,b={meta:{path:"/cesium/heightFog",title:"高度雾"},components:{Globe:d,ConfigPanel:h},setup(){let e,n;const t=u({fogHeight:1e3,fogDensity:.6,fogColor:"#c8c8c8"});let o="",i=l.WHITE;function s(){return t.fogColor!==o&&(o=t.fogColor,i=l.fromCssColorString(o)??l.WHITE),i}function a(){return new p({fragmentShader:v,uniforms:{u_earthRadiusOnCamera:()=>g.magnitude(e.camera.positionWC)-e.camera.positionCartographic.height,u_cameraHeight:()=>e.camera.positionCartographic.height,u_fogColor:s,u_fogHeight:()=>t.fogHeight,u_globalDensity:()=>t.fogDensity}})}async function r(m){e=m,n=a(),e.scene.postProcessStages.add(n),e.camera.setView({destination:new g(-1.3867057605894802e6,5226754975571179e-9,3.3755822076837276e6),orientation:{heading:3.968066845543675,pitch:-.300780994602595,roll:7913394522685024e-20}})}return{init:r,config:t,fields:[{key:"fogHeight",label:"雾气高度",type:"slider",min:0,max:3e3,step:10,unit:"m"},{key:"fogDensity",label:"雾气强度",type:"slider",min:0,max:1,step:.01,digits:2},{key:"fogColor",label:"雾气颜色",type:"color"}],stage:()=>n}}};function y(e,n,t,o,i,s){const a=f("Globe"),r=f("ConfigPanel");return H(),_(x,null,[c(a,{options:{terrain:!0},onCreated:o.init},null,8,["onCreated"]),c(r,{model:o.config,fields:o.fields,title:"高度雾",tip:"高度雾是后处理阶段：按「像素到相机的距离」与「相对地球半径的高度」叠加一层雾，越高越稀薄。三项参数全部实时生效。"},null,8,["model","fields"])],64)}const j=C(b,[["render",y],["__scopeId","data-v-ac02785e"]]);export{j as default};
