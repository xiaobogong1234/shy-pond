import{d as i,I as L,P as f,cX as P,l1 as I,lv as E,lx as R,gI as N,gw as S,lq as U,x as H,w as T}from"./cesium-utSEP5if.js";import{G as $}from"./index-DRCmDxZs.js";import{o as k,_ as O,i as F,p as B,f as V}from"./index-9vIL5KkC.js";import"./cesium2s-TV_G_QRL.js";import"./index-CtVsJ-X_.js";import"./el-select-DHZScApW.js";import"./_commonjsHelpers-gnU0ypJ3.js";import"./fullscreenPopper-CpT4yrsP.js";import"./services-CwmS6buH.js";const c={left:116.198,right:121.198,bottom:29.691,top:34.691,baseHeightMeters:1e3,topHeightMeters:17e3},g=(c.left+c.right)/2,v=(c.bottom+c.top)/2,A=(a,r,e,t)=>i.distance(i.fromDegrees(a,r),i.fromDegrees(e,t)),Y={centerLon:g,centerLat:v,baseHeightMeters:c.baseHeightMeters,topHeightMeters:c.topHeightMeters,radiusMeters:6e4,radiusXMeters:A(c.left,v,c.right,v)/2,radiusYMeters:A(g,c.bottom,g,c.top)/2,heightMeters:c.topHeightMeters-c.baseHeightMeters,dimensions:new i(128,128,17),dataUrl:"/Nowcasting_CAPPI_20190320043000_Z9250.bin",alpha:1.18,absorptionDistanceMeters:4200};class q{constructor(r){this.shape=R.BOX,this.minBounds=new i(-1,-1,0),this.maxBounds=new i(1,1,1),this.paddingBefore=i.ZERO,this.paddingAfter=i.ZERO,this.names=["reflectivity"],this.types=[N.SCALAR],this.componentTypes=[S.FLOAT32],this.globalTransform=f.IDENTITY,this.shapeTransform=f.IDENTITY,this.minimumValues=[[0]],this.maximumValues=[[75]],this.maximumTileCount=1,this.availableLevels=1,this.contentPromise=null,this.dimensions=i.clone(r.dimensions),this.dataUrl=r.dataUrl}requestData(r){return((r==null?void 0:r.tileLevel)??0)>0?Promise.reject("No radar voxel tiles available beyond level 0"):(this.contentPromise||(this.contentPromise=this.loadVoxelContent()),this.contentPromise)}async loadVoxelContent(){const r=await fetch(this.dataUrl),e=await r.arrayBuffer();if(!r.ok||e.byteLength===0)throw new Error(`Failed to load radar CAPPI data: ${this.dataUrl} → HTTP ${r.status}${r.statusText?" "+r.statusText:""}, ${e.byteLength} bytes`);const{dataOffset:t,header:s}=this.parseCappiHeader(e);for(const d of["width","height","levels"])if(!Number.isFinite(s[d])||s[d]<=0)throw new Error(`Invalid radar CAPPI header from ${this.dataUrl}: ${d}=${s[d]}`);const n=new Uint8Array(e,t),o=s.width*s.height*s.levels;if(n.length<o)throw new Error(`Radar CAPPI data is incomplete: ${n.length}/${o}`);const l=this.resampleCappiData(n,s);return Promise.resolve(U.fromMetadataArray([l]))}parseCappiHeader(r){const e=new Uint8Array(r),t=new TextDecoder("ascii"),s=Number.parseInt(t.decode(e.slice(12,16)).replace(/\0/g,""),10),n=t.decode(e.slice(20,s)).replace(/\0/g,""),o=Object.fromEntries(n.split(",").map(l=>l.split("=")).filter(([l,d])=>l&&d!==void 0));return{dataOffset:s,header:{width:Number(o.Width),height:Number(o.Height),levels:Number(o.Levels),invalid:Number(o.Invalid),ratio:Number(o.Ratio),offset:Number(o.Offset)}}}resampleCappiData(r,e){const t=Math.max(1,Math.round(this.dimensions.x)),s=Math.max(1,Math.round(this.dimensions.y)),n=Math.max(1,Math.round(this.dimensions.z)),o=new Float32Array(t*s*n);for(let l=0;l<n;l++){const d=this.mapIndex(l,n,e.levels);for(let m=0;m<s;m++){const M=Math.floor(m*e.height/s),C=Math.max(M+1,Math.floor((m+1)*e.height/s));for(let h=0;h<t;h++){const x=Math.floor(h*e.width/t),D=Math.max(x+1,Math.floor((h+1)*e.width/t));let p=0;for(let u=M;u<C;u++){const _=d*e.width*e.height+u*e.width;for(let b=x;b<D;b++){const w=r[_+b];if(w===e.invalid)continue;const y=w*e.ratio+e.offset;y>p&&(p=y)}}o[l*s*t+m*t+h]=Math.min(75,Math.max(0,p))}}}return o}mapIndex(r,e,t){const s=Math.round((r+.5)/e*t-.5);return Math.min(t-1,Math.max(0,s))}}function G(a){const r=i.fromDegrees(a.centerLon,a.centerLat,a.baseHeightMeters),e=L.eastNorthUpToFixedFrame(r);return f.multiplyByScale(e,new i(a.radiusXMeters??a.radiusMeters,a.radiusYMeters??a.radiusMeters,a.heightMeters),new f)}function X(a,r){return new P({uniforms:{u_radarAlpha:{type:I.FLOAT,value:a},u_absorptionDistance:{type:I.FLOAT,value:r}},fragmentShaderText:`
vec3 radarColor(float dbz) {
  if (dbz < 10.0) {
    return vec3(0.05, 0.35, 0.95);
  }
  if (dbz < 20.0) {
    return mix(vec3(0.05, 0.35, 0.95), vec3(0.00, 0.82, 0.26), (dbz - 10.0) / 10.0);
  }
  if (dbz < 35.0) {
    return mix(vec3(0.00, 0.82, 0.26), vec3(1.00, 0.92, 0.05), (dbz - 20.0) / 15.0);
  }
  if (dbz < 50.0) {
    return mix(vec3(1.00, 0.92, 0.05), vec3(1.00, 0.23, 0.02), (dbz - 35.0) / 15.0);
  }
  if (dbz < 60.0) {
    return mix(vec3(1.00, 0.23, 0.02), vec3(0.72, 0.08, 0.95), (dbz - 50.0) / 10.0);
  }
  return vec3(0.98, 0.92, 1.0);
}

void fragmentMain(FragmentInput fsInput, inout czm_modelMaterial material) {
  float dbz = fsInput.metadata.reflectivity;
  float signal = smoothstep(3.0, 12.0, dbz);
  float intensity = pow(smoothstep(4.0, 68.0, dbz), 0.72);
  float core = smoothstep(18.0, 62.0, dbz);

  vec3 normal = normalize(fsInput.attributes.normalEC);
  vec3 viewDir = normalize(-fsInput.attributes.positionEC);
  vec3 lightDir = normalize(vec3(0.32, 0.58, 0.75));
  float diffuseLight = max(dot(normal, lightDir), 0.0);
  float backLight = max(dot(-normal, lightDir), 0.0) * 0.18;
  float rimLight = pow(1.0 - clamp(abs(dot(normal, viewDir)), 0.0, 1.0), 2.0);
  float depthShade = mix(1.08, 0.72, clamp(float(fsInput.voxel.stepCount) / 86.0, 0.0, 1.0));
  float shade = (0.58 + diffuseLight * 0.42 + backLight + rimLight * 0.2 + core * 0.12) * depthShade;
  material.diffuse = radarColor(dbz) * shade;

  float baseAlpha = clamp((signal * 0.18 + intensity * 0.82) * u_radarAlpha, 0.0, 0.96);
  float transparency = 1.0 - baseAlpha;
  float thickness = max(fsInput.voxel.travelDistance / u_absorptionDistance, 0.045);
  float volumeAlpha = 1.0 - pow(transparency, thickness);
  material.alpha = dbz <= 1.0 ? 0.0 : volumeAlpha;
}
`})}function Z(a,r={}){const e={...Y,...r};let t=null,s=!0;const n=G(e),o=X(e.alpha,e.absorptionDistanceMeters),l=()=>{if(t)return;const m=new q({dataUrl:e.dataUrl,dimensions:e.dimensions});t=a.scene.primitives.add(new E({provider:m,modelMatrix:n,customShader:o})),t.depthTest=!1,t.nearestSampling=!1,t.screenSpaceError=4,t.stepSize=.38,t.show=s,a.scene.requestRender()},d=()=>{t&&(a.scene.primitives.remove(t),t=null)};return{get primitive(){return t},start(){l()},stop(){},setVisible(m){s=m,t&&(t.show=s),a.scene.requestRender()},destroy(){this.stop(),d(),o.isDestroyed()||o.destroy()}}}let z;const j={meta:{path:"/cesium/vertex-render",title:"体渲染"},components:{Globe:$},setup(){let a;async function r(t){t.camera.setView({destination:new i(3663592176380739e-8,-1848239555868643e-8,14600812574966867e-9),orientation:{heading:6.281972591907078,pitch:-1.5686580281973281,roll:0}}),z=t,e(z)}async function e(t){a==null||a.destroy(),t.scene.globe.depthTestAgainstTerrain=!1,a=Z(t,{dataUrl:"/gisdata/Nowcasting_CAPPI_20190320043000_Z9250.bin"}),a.start();const s=i.fromDegrees(118.698,32.191,9e3);t.camera.lookAt(s,new H(T.toRadians(0),T.toRadians(-36),68e4)),t.camera.lookAtTransform(f.IDENTITY),t.scene.requestRender()}return k(()=>{a==null||a.destroy(),a=void 0}),{init:r}}};function W(a,r,e,t,s,n){const o=B("Globe");return V(),F(o,{options:{terrain:!1},onCreated:t.init},null,8,["onCreated"])}const it=O(j,[["render",W]]);export{it as default};
