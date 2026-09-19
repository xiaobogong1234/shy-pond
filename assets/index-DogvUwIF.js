var Fg=Object.defineProperty;var Bg=(r,e,t)=>e in r?Fg(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t;var B=(r,e,t)=>Bg(r,typeof e!="symbol"?e+"":e,t);import{V as ci,W as Dg,X as Ug,Y as FA,R as lt,t as rf,Z as nf,_ as Vg,Q as sf,$ as of,j as Je,G as Jn,m as jg,a0 as af,u as BA,a1 as Gg,a2 as zg,a3 as $a,a4 as Hg,a5 as aa,a6 as mc,a7 as qg,a8 as Af,B as ur,T as ct,a9 as Qg,aa as Wg,ab as cf,ac as Kg,ad as lf,C as li,x as $g,b as mo,L as uf,p as ff,c as hf,e as Xg,a as df,M as DA,ae as Yg,af as Jg,ag as UA,ah as VA,ai as gc,l as Qi,aj as pf,ak as Zg}from"./composite-layer-D_35hGlM.js";import{b as go,B as eb,A as tb,G as jA,P as rb,a as nb}from"./geojson-layer-B1vzT4J_.js";import{aR as ib,P as sb,at as ob,au as ab,p as Hs,av as hs,aS as Ab,aT as cb,aU as mf,aV as lb,aW as ub,aX as fb,ax as hb,aY as db,aM as pb,_ as we,V as X,l as qs,a as Xa,o as mb,a0 as Zr,Q as bc,aZ as gb,a_ as Or,q as bn,W as _c,d as _n,a$ as bb,b0 as _b,ai as Tb,y as vb,r as xr,z as yb}from"./useDeck-CyF5ro6x.js";import{f as Sb,d as wb,t as Eb,i as xb,m as Tc,r as Cb,s as vc,b as Mb,I as Ya,Q as Qs,a as Ja,g as Ib,c as Rb,L as Nb}from"./layer-extension-Cd02sGkk.js";import{g as Pb}from"./_commonjsHelpers-gnU0ypJ3.js";import{C as Lb}from"./column-layer-CyK21dvV.js";import"./index-9vIL5KkC.js";import"./cesium-utSEP5if.js";import"./tesselator-ClpIL72i.js";import"./linkSync-CPWjq_gk.js";async function Wi(r,e,t,i){return i._parse(r,e,t,i)}globalThis.probe||(globalThis.probe=ib);const gf=new sb({id:"@probe.gl/log"});function kb(r){var e;globalThis.loaders||(globalThis.loaders={}),(e=globalThis.loaders).modules||(e.modules={}),Object.assign(globalThis.loaders.modules,r)}function Ob(r){var t,i;return((i=(t=globalThis.loaders)==null?void 0:t.modules)==null?void 0:i[r])||null}const Aa={};function bf(r={}){var o,c;const e=r.useLocalLibraries??((o=r.core)==null?void 0:o.useLocalLibraries),t=r.CDN??((c=r.core)==null?void 0:c.CDN),i=r.modules;return{...e!==void 0?{useLocalLibraries:e}:{},...t!==void 0?{CDN:t}:{},...i!==void 0?{modules:i}:{}}}async function Fr(r,e=null,t={},i=null){return e&&(r=Fb(r,e,t,i)),Aa[r]=Aa[r]||Bb(r),await Aa[r]}function Fb(r,e,t={},i=null){if(t!=null&&t.core)throw new Error("loadLibrary: options.core must be pre-normalized");if(!t.useLocalLibraries&&r.startsWith("http"))return r;i=i||r;const o=t.modules||{};return o[i]?o[i]:ci?t.CDN?(Dg(t.CDN.startsWith("http")),`${t.CDN}/${e}@${Ug}/dist/libs/${i}`):FA?`../src/libs/${i}`:`modules/${e}/src/libs/${i}`:`modules/${e}/dist/libs/${i}`}async function Bb(r){if(r.endsWith("wasm"))return await Ub(r);if(!ci){const{requireFromFile:t}=globalThis.loaders||{};try{const i=await(t==null?void 0:t(r));return i||!r.includes("/dist/libs/")?i:await(t==null?void 0:t(r.replace("/dist/libs/","/src/libs/")))}catch(i){if(r.includes("/dist/libs/"))try{return await(t==null?void 0:t(r.replace("/dist/libs/","/src/libs/")))}catch{}return console.error(i),null}}if(FA)return importScripts(r);const e=await Vb(r);return Db(e,r)}function Db(r,e){if(!ci){const{requireFromString:i}=globalThis.loaders||{};return i==null?void 0:i(r,e)}if(FA)return eval.call(globalThis,r),null;const t=document.createElement("script");t.id=e;try{t.appendChild(document.createTextNode(r))}catch{t.text=r}return document.body.appendChild(t),null}async function Ub(r){const{readFileAsArrayBuffer:e}=globalThis.loaders||{};if(ci||!e||r.startsWith("http"))return await(await fetch(r)).arrayBuffer();try{return await e(r)}catch{if(r.includes("/dist/libs/"))return await e(r.replace("/dist/libs/","/src/libs/"));throw new Error(`Failed to load ArrayBuffer from ${r}`)}}async function Vb(r){const{readFileAsText:e}=globalThis.loaders||{};if(ci||!e||r.startsWith("http"))return await(await fetch(r)).text();try{return await e(r)}catch{if(r.includes("/dist/libs/"))return await e(r.replace("/dist/libs/","/src/libs/"));throw new Error(`Failed to load text from ${r}`)}}function jb(r,e=5){return typeof r=="string"?r.slice(0,e):ArrayBuffer.isView(r)?yc(r.buffer,r.byteOffset,e):r instanceof ArrayBuffer?yc(r,0,e):""}function yc(r,e,t){if(r.byteLength<=e+t)return"";const i=new DataView(r);let o="";for(let c=0;c<t;c++)o+=String.fromCharCode(i.getUint8(e+c));return o}function Gb(r){try{return JSON.parse(r)}catch{throw new Error(`Failed to parse JSON from data starting with "${jb(r)}"`)}}function Ki(r,e){return lt(r>=0),lt(e>0),r+(e-1)&-4}function zb(r,e,t){let i;if(r instanceof ArrayBuffer)i=new Uint8Array(r);else{const o=r.byteOffset,c=r.byteLength;i=new Uint8Array(r.buffer||r.arrayBuffer,o,c)}return e.set(i,t),t+Ki(i.byteLength,4)}const Hb="Queued Requests",qb="Active Requests",Qb="Cancelled Requests",Wb="Queued Requests Ever",Kb="Active Requests Ever",$b={id:"request-scheduler",throttleRequests:!0,maxRequests:6,debounceTime:0};class _f{constructor(e={}){B(this,"props");B(this,"stats");B(this,"activeRequestCount",0);B(this,"requestQueue",[]);B(this,"requestMap",new Map);B(this,"updateTimer",null);this.props={...$b,...e},this.stats=new rf({id:this.props.id}),this.stats.get(Hb),this.stats.get(qb),this.stats.get(Qb),this.stats.get(Wb),this.stats.get(Kb)}setProps(e){e.throttleRequests!==void 0&&(this.props.throttleRequests=e.throttleRequests),e.maxRequests!==void 0&&(this.props.maxRequests=e.maxRequests),e.debounceTime!==void 0&&(this.props.debounceTime=e.debounceTime)}scheduleRequest(e,t=()=>0){if(!this.props.throttleRequests)return Promise.resolve({done:()=>{}});if(this.requestMap.has(e))return this.requestMap.get(e);const i={handle:e,priority:0,getPriority:t},o=new Promise(c=>(i.resolve=c,i));return this.requestQueue.push(i),this.requestMap.set(e,o),this._issueNewRequests(),o}_issueRequest(e){const{handle:t,resolve:i}=e;let o=!1;const c=()=>{o||(o=!0,this.requestMap.delete(t),this.activeRequestCount--,this._issueNewRequests())};return this.activeRequestCount++,i?i({done:c}):Promise.resolve({done:c})}_issueNewRequests(){this.updateTimer!==null&&clearTimeout(this.updateTimer),this.updateTimer=setTimeout(()=>this._issueNewRequestsAsync(),this.props.debounceTime)}_issueNewRequestsAsync(){this.updateTimer!==null&&clearTimeout(this.updateTimer),this.updateTimer=null;const e=Math.max(this.props.maxRequests-this.activeRequestCount,0);if(e!==0){this._updateAllRequests();for(let t=0;t<e;++t){const i=this.requestQueue.shift();i&&this._issueRequest(i)}}}_updateAllRequests(){const e=this.requestQueue;for(let t=0;t<e.length;++t){const i=e[t];this._updateRequest(i)||(e.splice(t,1),this.requestMap.delete(i.handle),t--)}e.sort((t,i)=>t.priority-i.priority)}_updateRequest(e){return e.priority=e.getPriority(e.handle),e.priority<0?(e.resolve(null),!1):!0}}const ho=class ho{constructor(e,t,i){B(this,"optionsType");B(this,"options");B(this,"data");B(this,"url");B(this,"loadOptions");B(this,"fetch");B(this,"_needsRefresh",!0);var o;i?this.options=nf({...i,core:ho.defaultOptions},t):this.options={...t},this.data=e,this.url=typeof e=="string"?Vg(e):"",this.loadOptions=Yb((o=this.options.core)==null?void 0:o.loadOptions),this.fetch=Xb(this.loadOptions)}setProps(e){this.options=Object.assign(this.options,e),this.setNeedsRefresh()}setNeedsRefresh(){this._needsRefresh=!0}getNeedsRefresh(e=!0){const t=this._needsRefresh;return e&&(this._needsRefresh=!1),t}};B(ho,"defaultOptions",{core:{type:"auto",attributions:[],loadOptions:{},loaders:[]}});let Za=ho;function Xb(r){var i;const e=(i=r==null?void 0:r.core)==null?void 0:i.fetch;if(e&&typeof e=="function")return(o,c)=>e(o,c);const t=r==null?void 0:r.fetch;return t&&typeof t!="function"?o=>fetch(o,t):o=>fetch(o)}function Yb(r){const e={...r};r!=null&&r.core&&(e.core={...r.core});const t=typeof e.baseUri=="string"?e.baseUri:void 0,i=typeof e.baseUrl=="string"?e.baseUrl:void 0;return(t!==void 0||i!==void 0)&&(e.core||(e.core={}),e.core.baseUrl===void 0&&(e.core.baseUrl=i??t),delete e.baseUri,delete e.baseUrl),e}class eA{}B(eA,"type","template"),B(eA,"testURL",e=>!1);function Jb(r){switch(r.constructor){case Int8Array:return"int8";case Uint8Array:case Uint8ClampedArray:return"uint8";case Int16Array:return"int16";case Uint16Array:return"uint16";case Int32Array:return"int32";case Uint32Array:return"uint32";case Float32Array:return"float32";case Float64Array:return"float64";default:return"null"}}function Zb(r){let e=1/0,t=1/0,i=1/0,o=-1/0,c=-1/0,d=-1/0;const m=r.POSITION?r.POSITION.value:[],_=m&&m.length;for(let T=0;T<_;T+=3){const y=m[T],w=m[T+1],M=m[T+2];e=y<e?y:e,t=w<t?w:t,i=M<i?M:i,o=y>o?y:o,c=w>c?w:c,d=M>d?M:d}return[[e,t,i],[o,c,d]]}function e2(r,e,t){const i=Jb(e.value),o=t||t2(e);return{name:r,type:{type:"fixed-size-list",listSize:e.size,children:[{name:"value",type:i}]},nullable:!1,metadata:o}}function t2(r){const e={};return"byteOffset"in r&&(e.byteOffset=r.byteOffset.toString(10)),"byteStride"in r&&(e.byteStride=r.byteStride.toString(10)),"normalized"in r&&(e.normalized=r.normalized.toString()),e}function r2(r,e,t){var c;const i=((c=t==null?void 0:t.core)==null?void 0:c.type)||t.type||"auto",o=i==="auto"?n2(r,e):i2(i,e);if(!o)throw new Error("Not a valid source type");return o.createDataSource(r,t)}function n2(r,e){for(const t of e)if(t.testURL&&t.testURL(r))return t;return null}function i2(r,e){for(const t of e)if(t.type===r)return t;return null}const s2=["image/png","image/jpeg","image/gif","image/webp","image/avif","image/tiff","image/svg","image/svg+xml","image/bmp","image/vnd.microsoft.icon"];let ds=null;async function o2(){return ds?await ds:(ds=a2(),await ds)}async function a2(){const r=new Set;for(const e of s2)(sf?await u2(e):Tf(e))&&r.add(e);return r}const ca={};function A2(r){if(ca[r]===void 0){const e=sf?c2(r):Tf(r);ca[r]=e}return ca[r]}function Tf(r){var o,c;const e=["image/png","image/jpeg","image/gif"],t=((o=globalThis.loaders)==null?void 0:o.imageFormatsNode)||e;return!!((c=globalThis.loaders)==null?void 0:c.parseImageNode)&&t.includes(r)}function c2(r){switch(r){case"image/avif":case"image/webp":return f2(r);default:return!0}}const l2={"image/avif":"data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAAB0AAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAIAAAACAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQ0MAAAAABNjb2xybmNseAACAAIAAYAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAACVtZGF0EgAKCBgANogQEAwgMg8f8D///8WfhwB8+ErK42A=","image/webp":"data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA"};async function u2(r){const e=l2[r];return e?await h2(e):!0}function f2(r){try{return document.createElement("canvas").toDataURL(r).indexOf(`data:${r}`)===0}catch{return!1}}async function h2(r){return new Promise(e=>{const t=new Image;t.src=r,t.onload=()=>e(t.height>0),t.onerror=()=>e(!1)})}class GA extends ob{constructor(e=0,t=0){super(2),ab(e)&&arguments.length===1?this.copy(e):(Hs.debug&&(hs(e),hs(t)),this[0]=e,this[1]=t)}set(e,t){return this[0]=e,this[1]=t,this.check()}copy(e){return this[0]=e[0],this[1]=e[1],this.check()}fromObject(e){return Hs.debug&&(hs(e.x),hs(e.y)),this[0]=e.x,this[1]=e.y,this.check()}toObject(e){return e.x=this[0],e.y=this[1],e}get ELEMENTS(){return 2}horizontalAngle(){return Math.atan2(this.y,this.x)}verticalAngle(){return Math.atan2(this.x,this.y)}transform(e){return this.transformAsPoint(e)}transformAsPoint(e){return Ab(this,this,e),this.check()}transformAsVector(e){return cb(this,this,e),this.check()}transformByMatrix3(e){return mf(this,this,e),this.check()}transformByMatrix2x3(e){return lb(this,this,e),this.check()}transformByMatrix2(e){return ub(this,this,e),this.check()}}var tA;(function(r){r[r.COL0ROW0=0]="COL0ROW0",r[r.COL0ROW1=1]="COL0ROW1",r[r.COL0ROW2=2]="COL0ROW2",r[r.COL1ROW0=3]="COL1ROW0",r[r.COL1ROW1=4]="COL1ROW1",r[r.COL1ROW2=5]="COL1ROW2",r[r.COL2ROW0=6]="COL2ROW0",r[r.COL2ROW1=7]="COL2ROW1",r[r.COL2ROW2=8]="COL2ROW2"})(tA||(tA={}));const d2=Object.freeze([1,0,0,0,1,0,0,0,1]);class rt extends fb{static get IDENTITY(){return m2()}static get ZERO(){return p2()}get ELEMENTS(){return 9}get RANK(){return 3}get INDICES(){return tA}constructor(e,...t){super(-0,-0,-0,-0,-0,-0,-0,-0,-0),arguments.length===1&&Array.isArray(e)?this.copy(e):t.length>0?this.copy([e,...t]):this.identity()}copy(e){return this[0]=e[0],this[1]=e[1],this[2]=e[2],this[3]=e[3],this[4]=e[4],this[5]=e[5],this[6]=e[6],this[7]=e[7],this[8]=e[8],this.check()}identity(){return this.copy(d2)}fromObject(e){return this.check()}fromQuaternion(e){return Sb(this,e),this.check()}set(e,t,i,o,c,d,m,_,T){return this[0]=e,this[1]=t,this[2]=i,this[3]=o,this[4]=c,this[5]=d,this[6]=m,this[7]=_,this[8]=T,this.check()}setRowMajor(e,t,i,o,c,d,m,_,T){return this[0]=e,this[1]=o,this[2]=m,this[3]=t,this[4]=c,this[5]=_,this[6]=i,this[7]=d,this[8]=T,this.check()}determinant(){return wb(this)}transpose(){return Eb(this,this),this.check()}invert(){return xb(this,this),this.check()}multiplyLeft(e){return Tc(this,e,this),this.check()}multiplyRight(e){return Tc(this,this,e),this.check()}rotate(e){return Cb(this,this,e),this.check()}scale(e){return Array.isArray(e)?vc(this,this,e):vc(this,this,[e,e]),this.check()}translate(e){return Mb(this,this,e),this.check()}transform(e,t){let i;switch(e.length){case 2:i=mf(t||[-0,-0],e,this);break;case 3:i=db(t||[-0,-0,-0],e,this);break;case 4:i=hb(t||[-0,-0,-0,-0],e,this);break;default:throw new Error("Illegal vector")}return pb(i,e.length),i}transformVector(e,t){return this.transform(e,t)}transformVector2(e,t){return this.transform(e,t)}transformVector3(e,t){return this.transform(e,t)}}let ps,ms=null;function p2(){return ps||(ps=new rt([0,0,0,0,0,0,0,0,0]),Object.freeze(ps)),ps}function m2(){return ms||(ms=new rt,Object.freeze(ms)),ms}const g2=.1,b2=1e-12,vf=1e-15,_2=1e-20,Hn=64,T2=`
struct skinUniforms {
  jointMatrix: array<mat4x4<f32>, ${Hn}>,
};

@group(0) @binding(auto) var<uniform> skin: skinUniforms;

#ifdef HAS_INSTANCED_SKIN
@group(0) @binding(auto) var<storage, read> skinJointMatrices: array<mat4x4<f32>>;

fn getInstancedSkinMatrix(
  weights: vec4f,
  joints: vec4u,
  instanceIndex: u32,
  jointsPerInstance: u32
) -> mat4x4<f32> {
  let firstJoint = instanceIndex * jointsPerInstance;
  return (weights.x * skinJointMatrices[firstJoint + joints.x])
       + (weights.y * skinJointMatrices[firstJoint + joints.y])
       + (weights.z * skinJointMatrices[firstJoint + joints.z])
       + (weights.w * skinJointMatrices[firstJoint + joints.w]);
}
#endif

fn getSkinMatrix(weights: vec4f, joints: vec4u) -> mat4x4<f32> {
  return (weights.x * skin.jointMatrix[joints.x])
       + (weights.y * skin.jointMatrix[joints.y])
       + (weights.z * skin.jointMatrix[joints.z])
       + (weights.w * skin.jointMatrix[joints.w]);
}
`,v2=`
layout(std140) uniform skinUniforms {
  mat4 jointMatrix[SKIN_MAX_JOINTS];
} skin;

#ifdef HAS_INSTANCED_SKIN
uniform highp sampler2D skinJointMatrices;

mat4 getInstancedJointMatrix(uint jointIndex, uint instanceIndex) {
  int firstColumn = int(jointIndex * 4u);
  int row = int(instanceIndex);
  return mat4(
    texelFetch(skinJointMatrices, ivec2(firstColumn, row), 0),
    texelFetch(skinJointMatrices, ivec2(firstColumn + 1, row), 0),
    texelFetch(skinJointMatrices, ivec2(firstColumn + 2, row), 0),
    texelFetch(skinJointMatrices, ivec2(firstColumn + 3, row), 0)
  );
}

mat4 getInstancedSkinMatrix(
  vec4 weights,
  uvec4 joints,
  uint instanceIndex,
  uint jointsPerInstance
) {
  return (weights.x * getInstancedJointMatrix(joints.x, instanceIndex))
       + (weights.y * getInstancedJointMatrix(joints.y, instanceIndex))
       + (weights.z * getInstancedJointMatrix(joints.z, instanceIndex))
       + (weights.w * getInstancedJointMatrix(joints.w, instanceIndex));
}
#endif

mat4 getSkinMatrix(vec4 weights, uvec4 joints) {
  return (weights.x * skin.jointMatrix[joints.x])
       + (weights.y * skin.jointMatrix[joints.y])
       + (weights.z * skin.jointMatrix[joints.z])
       + (weights.w * skin.jointMatrix[joints.w]);
}

`,y2="",S2={props:{},uniforms:{},bindings:{},name:"skin",bindingLayout:[{name:"skin",group:0},{name:"skinJointMatrices",group:0,visibility:1}],dependencies:[],source:T2,vs:v2,fs:y2,defines:{SKIN_MAX_JOINTS:Hn},getUniforms:(r={},e)=>{var J,Z;const{jointMatrices:t,skinJointMatrices:i,scenegraphsFromGLTF:o,skinIndex:c=0,meshWorldMatrix:d}=r,m=i?{skinJointMatrices:i}:{};if(t)return{jointMatrix:w2(t),...m};const _=(Z=(J=o==null?void 0:o.gltf)==null?void 0:J.skins)==null?void 0:Z[c];if(!_)return{jointMatrix:[],...m};const{inverseBindMatrices:T,joints:y,skeleton:w}=_,M=o.gltfNodeIndexToNodeMap,N=new Map,O=w===void 0||M==null?void 0:M.get(w),F=O?[O]:o.scenes||[];for(const Y of F)Y.preorderTraversal((se,{worldMatrix:he})=>{N.set(se.id,he)});const W=d?new we(d).invert():null,j=new Float32Array(Hn*16),q=T==null?void 0:T.value;for(let Y=0;Y<Math.min(y.length,Hn);Y++){const se=M==null?void 0:M.get(y[Y]);if(!se)continue;const he=N.get(se.id)||se.matrix,ue=W?new we(W).multiplyRight(he):new we(he);q&&q.length>=(Y+1)*16&&ue.multiplyRight(new we(Array.from(q.slice(Y*16,(Y+1)*16)))),j.set(ue,Y*16)}return{jointMatrix:j,...m}},uniformTypes:{jointMatrix:["mat4x4<f32>",Hn]}};function w2(r){const e=new Float32Array(Hn*16);return e.set(r instanceof Float32Array?r.subarray(0,e.length):r.slice(0,e.length)),e}const E2=`
#ifdef HAS_GPU_CROWD_ANIMATION
@group(0) @binding(auto) var<storage, read> gpuAnimationFrames: array<vec4f>;

fn readGPUAnimationFrame(frame: u32, offset: u32, frameStride: u32) -> vec4f {
  return gpuAnimationFrames[frame * frameStride + offset];
}

fn sampleGPUAnimationFrame(
  frames: vec4f,
  blend: vec4f,
  offset: u32,
  frameStride: u32
) -> vec4f {
  let first = mix(
    readGPUAnimationFrame(u32(frames.x), offset, frameStride),
    readGPUAnimationFrame(u32(frames.y), offset, frameStride),
    frames.z
  );
  if (blend.w <= 0.0) {
    return first;
  }
  let second = mix(
    readGPUAnimationFrame(u32(blend.x), offset, frameStride),
    readGPUAnimationFrame(u32(blend.y), offset, frameStride),
    blend.z
  );
  return mix(first, second, blend.w);
}

fn sampleGPUAnimationMatrix(
  frames: vec4f,
  blend: vec4f,
  firstColumn: u32,
  frameStride: u32
) -> mat4x4f {
  return mat4x4f(
    sampleGPUAnimationFrame(frames, blend, firstColumn, frameStride),
    sampleGPUAnimationFrame(frames, blend, firstColumn + 1u, frameStride),
    sampleGPUAnimationFrame(frames, blend, firstColumn + 2u, frameStride),
    sampleGPUAnimationFrame(frames, blend, firstColumn + 3u, frameStride)
  );
}

fn getGPUAnimatedSkinMatrix(
  weights: vec4f,
  joints: vec4u,
  frames: vec4f,
  blend: vec4f,
  frameStride: u32
) -> mat4x4f {
  return weights.x * sampleGPUAnimationMatrix(frames, blend, 4u + joints.x * 4u, frameStride)
       + weights.y * sampleGPUAnimationMatrix(frames, blend, 4u + joints.y * 4u, frameStride)
       + weights.z * sampleGPUAnimationMatrix(frames, blend, 4u + joints.z * 4u, frameStride)
       + weights.w * sampleGPUAnimationMatrix(frames, blend, 4u + joints.w * 4u, frameStride);
}
#endif

#ifdef HAS_INSTANCED_MORPH
@group(0) @binding(auto) var<storage, read> gpuMorphTargets: array<vec4f>;

#ifndef HAS_GPU_CROWD_ANIMATION
@group(0) @binding(auto) var<storage, read> gpuMorphWeights: array<vec4f>;
#endif

fn getGPUCrowdMorphWeight(
  instanceIndex: u32,
  targetIndex: u32,
  targetCount: u32,
  jointsPerInstance: u32,
  frames: vec4f,
  blend: vec4f,
  frameStride: u32
) -> f32 {
#ifdef HAS_GPU_CROWD_ANIMATION
  let offset = 4u + jointsPerInstance * 4u + targetIndex;
  return sampleGPUAnimationFrame(frames, blend, offset, frameStride).x;
#else
  let packedCount = (targetCount + 3u) / 4u;
  let packedWeights = gpuMorphWeights[instanceIndex * packedCount + targetIndex / 4u];
  return packedWeights[targetIndex % 4u];
#endif
}

fn getGPUCrowdMorphDelta(
  instanceIndex: u32,
  vertexIndex: u32,
  attributeIndex: u32,
  vertexCount: u32,
  targetCount: u32,
  jointsPerInstance: u32,
  frames: vec4f,
  blend: vec4f,
  frameStride: u32
) -> vec3f {
  var result = vec3f(0.0);
  for (var targetIndex = 0u; targetIndex < targetCount; targetIndex++) {
    let weight = getGPUCrowdMorphWeight(
      instanceIndex,
      targetIndex,
      targetCount,
      jointsPerInstance,
      frames,
      blend,
      frameStride
    );
    let offset = (targetIndex * 3u + attributeIndex) * vertexCount + vertexIndex;
    result += gpuMorphTargets[offset].xyz * weight;
  }
  return result;
}
#endif
`,x2=`
#ifdef HAS_GPU_CROWD_ANIMATION
uniform highp sampler2D gpuAnimationFrames;

vec4 sampleGPUAnimationFrame(vec4 frames, vec4 blend, int offset) {
  vec4 first = mix(
    texelFetch(gpuAnimationFrames, ivec2(offset, int(frames.x)), 0),
    texelFetch(gpuAnimationFrames, ivec2(offset, int(frames.y)), 0),
    frames.z
  );
  if (blend.w <= 0.0) {
    return first;
  }
  vec4 second = mix(
    texelFetch(gpuAnimationFrames, ivec2(offset, int(blend.x)), 0),
    texelFetch(gpuAnimationFrames, ivec2(offset, int(blend.y)), 0),
    blend.z
  );
  return mix(first, second, blend.w);
}

mat4 sampleGPUAnimationMatrix(vec4 frames, vec4 blend, int firstColumn) {
  return mat4(
    sampleGPUAnimationFrame(frames, blend, firstColumn),
    sampleGPUAnimationFrame(frames, blend, firstColumn + 1),
    sampleGPUAnimationFrame(frames, blend, firstColumn + 2),
    sampleGPUAnimationFrame(frames, blend, firstColumn + 3)
  );
}

mat4 getGPUAnimatedSkinMatrix(vec4 weights, uvec4 joints, vec4 frames, vec4 blend) {
  return weights.x * sampleGPUAnimationMatrix(frames, blend, 4 + int(joints.x) * 4)
       + weights.y * sampleGPUAnimationMatrix(frames, blend, 4 + int(joints.y) * 4)
       + weights.z * sampleGPUAnimationMatrix(frames, blend, 4 + int(joints.z) * 4)
       + weights.w * sampleGPUAnimationMatrix(frames, blend, 4 + int(joints.w) * 4);
}
#endif

#ifdef HAS_INSTANCED_MORPH
uniform highp sampler2D gpuMorphTargets;

#ifndef HAS_GPU_CROWD_ANIMATION
uniform highp sampler2D gpuMorphWeights;
#endif

float getGPUCrowdMorphWeight(
  uint instanceIndex,
  uint targetIndex,
  uint jointsPerInstance,
  vec4 frames,
  vec4 blend
) {
#ifdef HAS_GPU_CROWD_ANIMATION
  int offset = 4 + int(jointsPerInstance) * 4 + int(targetIndex);
  return sampleGPUAnimationFrame(frames, blend, offset).x;
#else
  vec4 packedWeights = texelFetch(
    gpuMorphWeights,
    ivec2(int(targetIndex / 4u), int(instanceIndex)),
    0
  );
  return packedWeights[int(targetIndex % 4u)];
#endif
}

vec3 getGPUCrowdMorphDelta(
  uint instanceIndex,
  uint vertexIndex,
  uint attributeIndex,
  uint targetCount,
  uint jointsPerInstance,
  vec4 frames,
  vec4 blend
) {
  vec3 result = vec3(0.0);
  for (uint targetIndex = 0u; targetIndex < targetCount; targetIndex++) {
    float weight = getGPUCrowdMorphWeight(
      instanceIndex,
      targetIndex,
      jointsPerInstance,
      frames,
      blend
    );
    result += texelFetch(
      gpuMorphTargets,
      ivec2(int(vertexIndex), int(targetIndex * 3u + attributeIndex)),
      0
    ).xyz * weight;
  }
  return result;
}
#endif
`,C2={name:"gpuAnimation",props:{},uniforms:{},bindings:{},source:E2,vs:x2,fs:"",bindingLayout:[{name:"gpuAnimationFrames",group:0,visibility:1},{name:"gpuMorphTargets",group:0,visibility:1},{name:"gpuMorphWeights",group:0,visibility:1}],getUniforms(r={}){return r}},M2=`#ifdef USE_IBL
@group(2) @binding(auto) var pbr_diffuseEnvSampler: texture_cube<f32>;
@group(2) @binding(auto) var pbr_diffuseEnvSamplerSampler: sampler;
@group(2) @binding(auto) var pbr_specularEnvSampler: texture_cube<f32>;
@group(2) @binding(auto) var pbr_specularEnvSamplerSampler: sampler;
@group(2) @binding(auto) var pbr_brdfLUT: texture_2d<f32>;
@group(2) @binding(auto) var pbr_brdfLUTSampler: sampler;
#endif
`,Sc=`#ifdef USE_IBL
uniform samplerCube pbr_diffuseEnvSampler;
uniform samplerCube pbr_specularEnvSampler;
uniform sampler2D pbr_brdfLUT;
#endif
`,I2={name:"ibl",firstBindingSlot:32,bindingLayout:[{name:"pbr_diffuseEnvSampler",group:2},{name:"pbr_specularEnvSampler",group:2},{name:"pbr_brdfLUT",group:2}],source:M2,vs:Sc,fs:Sc},R2=`out vec3 pbr_vPosition;
out vec2 pbr_vUV0;
out vec2 pbr_vUV1;

#ifdef HAS_NORMALS
# ifdef HAS_TANGENTS
out mat3 pbr_vTBN;
# else
out vec3 pbr_vNormal;
# endif
#endif

void pbr_setPositionNormalTangentUV(
  vec4 position,
  vec4 normal,
  vec4 tangent,
  vec2 uv0,
  vec2 uv1
)
{
  vec4 pos = pbrProjection.modelMatrix * position;
  pbr_vPosition = vec3(pos.xyz) / pos.w;

#ifdef HAS_NORMALS
#ifdef HAS_TANGENTS
  vec3 normalW = normalize(vec3(pbrProjection.normalMatrix * vec4(normal.xyz, 0.0)));
  vec3 tangentW = normalize(vec3(pbrProjection.modelMatrix * vec4(tangent.xyz, 0.0)));
  vec3 bitangentW = cross(normalW, tangentW) * tangent.w;
  pbr_vTBN = mat3(tangentW, bitangentW, normalW);
#else // HAS_TANGENTS != 1
  pbr_vNormal = normalize(vec3(pbrProjection.modelMatrix * vec4(normal.xyz, 0.0)));
#endif
#endif

#ifdef HAS_UV
  pbr_vUV0 = uv0;
#else
  pbr_vUV0 = vec2(0.,0.);
#endif

  pbr_vUV1 = uv1;
}
`,N2=`precision highp float;

layout(std140) uniform pbrMaterialUniforms {
  // Material is unlit
  bool unlit;

  // Base color map
  bool baseColorMapEnabled;
  vec4 baseColorFactor;

  bool normalMapEnabled;  
  float normalScale; // #ifdef HAS_NORMALMAP

  bool emissiveMapEnabled;
  vec3 emissiveFactor; // #ifdef HAS_EMISSIVEMAP

  vec2 metallicRoughnessValues;
  bool metallicRoughnessMapEnabled;

  bool occlusionMapEnabled;
  float occlusionStrength; // #ifdef HAS_OCCLUSIONMAP
  
  bool alphaCutoffEnabled;
  float alphaCutoff; // #ifdef ALPHA_CUTOFF

  vec3 specularColorFactor;
  float specularIntensityFactor;
  bool specularColorMapEnabled;
  bool specularIntensityMapEnabled;

  float ior;

  float transmissionFactor;
  bool transmissionMapEnabled;

  float thicknessFactor;
  float attenuationDistance;
  vec3 attenuationColor;

  float clearcoatFactor;
  float clearcoatRoughnessFactor;
  bool clearcoatMapEnabled;
  bool clearcoatRoughnessMapEnabled;

  vec3 sheenColorFactor;
  float sheenRoughnessFactor;
  bool sheenColorMapEnabled;
  bool sheenRoughnessMapEnabled;

  float iridescenceFactor;
  float iridescenceIor;
  vec2 iridescenceThicknessRange;
  bool iridescenceMapEnabled;

  float anisotropyStrength;
  float anisotropyRotation;
  vec2 anisotropyDirection;
  bool anisotropyMapEnabled;

  float emissiveStrength;
  float dispersion;
  
  // IBL
  bool IBLenabled;
  vec2 scaleIBLAmbient; // #ifdef USE_IBL
  
  // debugging flags used for shader output of intermediate PBR variables
  // #ifdef PBR_DEBUG
  vec4 scaleDiffBaseMR;
  vec4 scaleFGDSpec;
  // #endif

  int baseColorUVSet;
  mat3 baseColorUVTransform;
  int metallicRoughnessUVSet;
  mat3 metallicRoughnessUVTransform;
  int normalUVSet;
  mat3 normalUVTransform;
  int occlusionUVSet;
  mat3 occlusionUVTransform;
  int emissiveUVSet;
  mat3 emissiveUVTransform;
  int specularColorUVSet;
  mat3 specularColorUVTransform;
  int specularIntensityUVSet;
  mat3 specularIntensityUVTransform;
  int transmissionUVSet;
  mat3 transmissionUVTransform;
  int thicknessUVSet;
  mat3 thicknessUVTransform;
  int clearcoatUVSet;
  mat3 clearcoatUVTransform;
  int clearcoatRoughnessUVSet;
  mat3 clearcoatRoughnessUVTransform;
  int clearcoatNormalUVSet;
  mat3 clearcoatNormalUVTransform;
  int sheenColorUVSet;
  mat3 sheenColorUVTransform;
  int sheenRoughnessUVSet;
  mat3 sheenRoughnessUVTransform;
  int iridescenceUVSet;
  mat3 iridescenceUVTransform;
  int iridescenceThicknessUVSet;
  mat3 iridescenceThicknessUVTransform;
  int anisotropyUVSet;
  mat3 anisotropyUVTransform;

  float bumpFactor;
  bool bumpMapEnabled;
  float diffuseTransmissionFactor;
  bool diffuseTransmissionMapEnabled;
  vec3 diffuseTransmissionColorFactor;
  bool diffuseTransmissionColorMapEnabled;
  vec3 multiscatterColorFactor;
  bool multiscatterColorMapEnabled;
  float scatterAnisotropy;

  int bumpUVSet;
  mat3 bumpUVTransform;
  int diffuseTransmissionUVSet;
  mat3 diffuseTransmissionUVTransform;
  int diffuseTransmissionColorUVSet;
  mat3 diffuseTransmissionColorUVTransform;
  int multiscatterColorUVSet;
  mat3 multiscatterColorUVTransform;
} pbrMaterial;

// Samplers
#ifdef HAS_BASECOLORMAP
uniform sampler2D pbr_baseColorSampler;
#endif
#ifdef HAS_NORMALMAP
uniform sampler2D pbr_normalSampler;
#endif
#ifdef HAS_EMISSIVEMAP
uniform sampler2D pbr_emissiveSampler;
#endif
#ifdef HAS_METALROUGHNESSMAP
uniform sampler2D pbr_metallicRoughnessSampler;
#endif
#ifdef HAS_OCCLUSIONMAP
uniform sampler2D pbr_occlusionSampler;
#endif
#ifdef HAS_SPECULARCOLORMAP
uniform sampler2D pbr_specularColorSampler;
#endif
#ifdef HAS_SPECULARINTENSITYMAP
uniform sampler2D pbr_specularIntensitySampler;
#endif
#ifdef HAS_TRANSMISSIONMAP
uniform sampler2D pbr_transmissionSampler;
#endif
#ifdef HAS_THICKNESSMAP
uniform sampler2D pbr_thicknessSampler;
#endif
#ifdef HAS_CLEARCOATMAP
uniform sampler2D pbr_clearcoatSampler;
#endif
#ifdef HAS_CLEARCOATROUGHNESSMAP
uniform sampler2D pbr_clearcoatRoughnessSampler;
#endif
#ifdef HAS_CLEARCOATNORMALMAP
uniform sampler2D pbr_clearcoatNormalSampler;
#endif
#ifdef HAS_SHEENCOLORMAP
uniform sampler2D pbr_sheenColorSampler;
#endif
#ifdef HAS_SHEENROUGHNESSMAP
uniform sampler2D pbr_sheenRoughnessSampler;
#endif
#ifdef HAS_IRIDESCENCEMAP
uniform sampler2D pbr_iridescenceSampler;
#endif
#ifdef HAS_IRIDESCENCETHICKNESSMAP
uniform sampler2D pbr_iridescenceThicknessSampler;
#endif
#ifdef HAS_ANISOTROPYMAP
uniform sampler2D pbr_anisotropySampler;
#endif
#ifdef HAS_BUMPMAP
uniform sampler2D pbr_bumpSampler;
#endif
#ifdef HAS_DIFFUSETRANSMISSIONMAP
uniform sampler2D pbr_diffuseTransmissionSampler;
#endif
#ifdef HAS_DIFFUSETRANSMISSIONCOLORMAP
uniform sampler2D pbr_diffuseTransmissionColorSampler;
#endif
#ifdef HAS_MULTISCATTERCOLORMAP
uniform sampler2D pbr_multiscatterColorSampler;
#endif
// Inputs from vertex shader

in vec3 pbr_vPosition;
in vec2 pbr_vUV0;
in vec2 pbr_vUV1;

#ifdef HAS_NORMALS
#ifdef HAS_TANGENTS
in mat3 pbr_vTBN;
#else
in vec3 pbr_vNormal;
#endif
#endif

// Encapsulate the various inputs used by the various functions in the shading equation
// We store values in this struct to simplify the integration of alternative implementations
// of the shading terms, outlined in the Readme.MD Appendix.
struct PBRInfo {
  float NdotL;                  // cos angle between normal and light direction
  float NdotV;                  // cos angle between normal and view direction
  float NdotH;                  // cos angle between normal and half vector
  float LdotH;                  // cos angle between light direction and half vector
  float VdotH;                  // cos angle between view direction and half vector
  float perceptualRoughness;    // roughness value, as authored by the model creator (input to shader)
  float metalness;              // metallic value at the surface
  vec3 reflectance0;            // full reflectance color (normal incidence angle)
  vec3 reflectance90;           // reflectance color at grazing angle
  float alphaRoughness;         // roughness mapped to a more linear change in the roughness (proposed by [2])
  vec3 diffuseColor;            // color contribution from diffuse lighting
  vec3 specularColor;           // color contribution from specular lighting
  vec3 n;                       // normal at surface point
  vec3 v;                       // vector from surface point to camera
  vec3 l;                       // direction from the surface toward the current light
  vec3 h;                       // half vector between the current light and camera
};

const float M_PI = 3.141592653589793;
const float c_MinRoughness = 0.04;

// Widen sub-pixel specular lobes using the screen-space normal footprint.
// This is geometric specular antialiasing: the normal variance is converted
// into an additional squared perceptual roughness before evaluating BRDFs.
float widenSpecularRoughness(float perceptualRoughness, vec3 normal)
{
  vec3 normalDerivativeX = dFdx(normal);
  vec3 normalDerivativeY = dFdy(normal);
  float normalVariance =
    dot(normalDerivativeX, normalDerivativeX) +
    dot(normalDerivativeY, normalDerivativeY);
  float kernelRoughnessSquared = min(2.0 * normalVariance, 1.0);
  return clamp(
    sqrt(perceptualRoughness * perceptualRoughness + kernelRoughnessSquared),
    c_MinRoughness,
    1.0
  );
}

vec3 calculateFinalColor(PBRInfo pbrInfo, vec3 lightColor);

vec4 SRGBtoLINEAR(vec4 srgbIn)
{
#ifdef MANUAL_SRGB
#ifdef SRGB_FAST_APPROXIMATION
  vec3 linOut = pow(srgbIn.xyz,vec3(2.2));
#else // SRGB_FAST_APPROXIMATION
  vec3 bLess = step(vec3(0.04045),srgbIn.xyz);
  vec3 linOut = mix( srgbIn.xyz/vec3(12.92), pow((srgbIn.xyz+vec3(0.055))/vec3(1.055),vec3(2.4)), bLess );
#endif //SRGB_FAST_APPROXIMATION
  return vec4(linOut,srgbIn.w);;
#else //MANUAL_SRGB
  return srgbIn;
#endif //MANUAL_SRGB
}

vec2 getMaterialUV(int uvSet, mat3 uvTransform)
{
  vec2 baseUV = uvSet == 1 ? pbr_vUV1 : pbr_vUV0;
  return (uvTransform * vec3(baseUV, 1.0)).xy;
}

// Build the tangent basis from interpolated attributes or screen-space derivatives.
mat3 getTBN(vec2 uv)
{
#ifndef HAS_TANGENTS
  vec3 pos_dx = dFdx(pbr_vPosition);
  vec3 pos_dy = dFdy(pbr_vPosition);
  vec3 tex_dx = dFdx(vec3(uv, 0.0));
  vec3 tex_dy = dFdy(vec3(uv, 0.0));
  vec3 t = (tex_dy.t * pos_dx - tex_dx.t * pos_dy) / (tex_dx.s * tex_dy.t - tex_dy.s * tex_dx.t);

#ifdef HAS_NORMALS
  vec3 ng = normalize(pbr_vNormal);
#else
  vec3 ng = cross(pos_dx, pos_dy);
#endif

  t = normalize(t - ng * dot(ng, t));
  vec3 b = normalize(cross(ng, t));
  mat3 tbn = mat3(t, b, ng);
#else // HAS_TANGENTS
  mat3 tbn = pbr_vTBN;
#endif

  return tbn;
}

// Find the normal for this fragment, pulling either from a predefined normal map
// or from the interpolated mesh normal and tangent attributes.
vec3 getMappedNormal(sampler2D normalSampler, mat3 tbn, float normalScale, vec2 uv)
{
  vec3 n = texture(normalSampler, uv).rgb;
  return normalize(tbn * ((2.0 * n - 1.0) * vec3(normalScale, normalScale, 1.0)));
}

vec3 getNormal(mat3 tbn, vec2 uv)
{
#ifdef HAS_NORMALMAP
  vec3 n = getMappedNormal(pbr_normalSampler, tbn, pbrMaterial.normalScale, uv);
#else
  // The tbn matrix is linearly interpolated, so we need to re-normalize
  vec3 n = normalize(tbn[2].xyz);
#endif

#ifdef HAS_BUMPMAP
  vec2 bumpUV = getMaterialUV(pbrMaterial.bumpUVSet, pbrMaterial.bumpUVTransform);
  vec2 bumpTexelSize = 1.0 / vec2(textureSize(pbr_bumpSampler, 0));
  float bumpHeight = texture(pbr_bumpSampler, bumpUV).r;
  vec2 bumpGradient = vec2(
    texture(pbr_bumpSampler, bumpUV + vec2(bumpTexelSize.x, 0.0)).r - bumpHeight,
    texture(pbr_bumpSampler, bumpUV + vec2(0.0, bumpTexelSize.y)).r - bumpHeight
  );
  n = normalize(n - pbrMaterial.bumpFactor *
    (tbn[0] * bumpGradient.x + tbn[1] * bumpGradient.y));
#endif

  return n;
}

vec3 getClearcoatNormal(mat3 tbn, vec3 baseNormal, vec2 uv)
{
#ifdef HAS_CLEARCOATNORMALMAP
  return getMappedNormal(pbr_clearcoatNormalSampler, tbn, 1.0, uv);
#else
  return baseNormal;
#endif
}

// Calculation of the lighting contribution from an optional Image Based Light source.
// Precomputed Environment Maps are required uniform inputs and are computed as outlined in [1].
// See our README.md on Environment Maps [3] for additional discussion.
#ifdef USE_IBL
vec3 getIBLContribution(PBRInfo pbrInfo, vec3 n, vec3 reflection)
{
#ifdef USE_SCENE_ENVIRONMENT
  float maximumMipLevel = max(pbrScene.environmentMipCount - 1.0, 0.0);
  float rotationSine = sin(pbrScene.environmentRotation);
  float rotationCosine = cos(pbrScene.environmentRotation);
  mat2 environmentRotation = mat2(rotationCosine, rotationSine, -rotationSine, rotationCosine);
  vec3 environmentNormal = vec3(environmentRotation * n.xz, n.y).xzy;
  vec3 environmentReflection = vec3(environmentRotation * reflection.xz, reflection.y).xzy;
#else
  float maximumMipLevel = 9.0;
  vec3 environmentNormal = n;
  vec3 environmentReflection = reflection;
#endif
  float lod = pbrInfo.perceptualRoughness * maximumMipLevel;
  // retrieve a scale and bias to F0. See [1], Figure 3
  vec4 brdfSample = texture(pbr_brdfLUT,
    vec2(pbrInfo.NdotV, 1.0 - pbrInfo.perceptualRoughness));
  vec4 diffuseSample = texture(pbr_diffuseEnvSampler, environmentNormal);

#ifdef USE_TEX_LOD
  vec4 specularSample = textureLod(pbr_specularEnvSampler, environmentReflection, lod);
#else
  vec4 specularSample = texture(pbr_specularEnvSampler, environmentReflection);
#endif

#ifdef USE_SCENE_ENVIRONMENT
  vec3 brdf = brdfSample.rgb;
  vec3 diffuseLight = diffuseSample.rgb;
  vec3 specularLight = specularSample.rgb;
#else
  vec3 brdf = SRGBtoLINEAR(brdfSample).rgb;
  vec3 diffuseLight = SRGBtoLINEAR(diffuseSample).rgb;
  vec3 specularLight = SRGBtoLINEAR(specularSample).rgb;
#endif

  vec3 diffuse = diffuseLight * pbrInfo.diffuseColor;
  vec3 specular = specularLight * (pbrInfo.specularColor * brdf.x + brdf.y);

  // For presentation, this allows us to disable IBL terms
  diffuse *= pbrMaterial.scaleIBLAmbient.x;
  specular *= pbrMaterial.scaleIBLAmbient.y;

#ifdef USE_SCENE_ENVIRONMENT
  return (diffuse + specular) * max(pbrScene.environmentIntensity, 0.0);
#else
  return diffuse + specular;
#endif
}
#endif

// Basic Lambertian diffuse
// Implementation from Lambert's Photometria https://archive.org/details/lambertsphotome00lambgoog
// See also [1], Equation 1
vec3 diffuse(PBRInfo pbrInfo)
{
  return pbrInfo.diffuseColor / M_PI;
}

// The following equation models the Fresnel reflectance term of the spec equation (aka F())
// Implementation of fresnel from [4], Equation 15
vec3 specularReflection(PBRInfo pbrInfo)
{
  return pbrInfo.reflectance0 +
    (pbrInfo.reflectance90 - pbrInfo.reflectance0) *
    pow(clamp(1.0 - pbrInfo.VdotH, 0.0, 1.0), 5.0);
}

// This calculates the specular geometric attenuation (aka G()),
// where rougher material will reflect less light back to the viewer.
// This implementation is based on [1] Equation 4, and we adopt their modifications to
// alphaRoughness as input as originally proposed in [2].
float geometricOcclusion(PBRInfo pbrInfo)
{
  float NdotL = pbrInfo.NdotL;
  float NdotV = pbrInfo.NdotV;
  float r = pbrInfo.alphaRoughness;

  float attenuationL = 2.0 * NdotL / (NdotL + sqrt(r * r + (1.0 - r * r) * (NdotL * NdotL)));
  float attenuationV = 2.0 * NdotV / (NdotV + sqrt(r * r + (1.0 - r * r) * (NdotV * NdotV)));
  return attenuationL * attenuationV;
}

// The following equation(s) model the distribution of microfacet normals across
// the area being drawn (aka D())
// Implementation from "Average Irregularity Representation of a Roughened Surface
// for Ray Reflection" by T. S. Trowbridge, and K. P. Reitz
// Follows the distribution function recommended in the SIGGRAPH 2013 course notes
// from EPIC Games [1], Equation 3.
float microfacetDistribution(PBRInfo pbrInfo)
{
  float roughnessSq = pbrInfo.alphaRoughness * pbrInfo.alphaRoughness;
  float f = (pbrInfo.NdotH * roughnessSq - pbrInfo.NdotH) * pbrInfo.NdotH + 1.0;
  return roughnessSq / (M_PI * f * f);
}

float maxComponent(vec3 value)
{
  return max(max(value.r, value.g), value.b);
}

float getDielectricF0(float ior)
{
  float clampedIor = max(ior, 1.0);
  float ratio = (clampedIor - 1.0) / (clampedIor + 1.0);
  return ratio * ratio;
}

vec2 normalizeDirection(vec2 direction)
{
  float directionLength = length(direction);
  return directionLength > 0.0001 ? direction / directionLength : vec2(1.0, 0.0);
}

vec2 rotateDirection(vec2 direction, float rotation)
{
  float s = sin(rotation);
  float c = cos(rotation);
  return vec2(direction.x * c - direction.y * s, direction.x * s + direction.y * c);
}

vec3 encodeLinearSRGB(vec3 linearColor)
{
  vec3 positiveColor = max(linearColor, vec3(0.0));
  return mix(
    positiveColor * 12.92,
    1.055 * pow(positiveColor, vec3(1.0 / 2.4)) - 0.055,
    greaterThan(positiveColor, vec3(0.0031308))
  );
}

vec3 toneMapKhronosPBRNeutral(vec3 color)
{
  const float startCompression = 0.76;
  float darkestChannel = min(color.r, min(color.g, color.b));
  float offset = darkestChannel < 0.08
    ? darkestChannel - 6.25 * darkestChannel * darkestChannel
    : 0.04;
  color -= vec3(offset);

  float peak = maxComponent(color);
  if (peak < startCompression) {
    return color;
  }

  float compressionRange = 1.0 - startCompression;
  float compressedPeak = 1.0 - compressionRange * compressionRange /
    (peak + compressionRange - startCompression);
  color *= compressedPeak / max(peak, 0.0001);
  float desaturation = 1.0 - 1.0 / (0.15 * (peak - compressedPeak) + 1.0);
  return mix(color, vec3(compressedPeak), desaturation);
}

vec3 applySceneColorManagement(vec3 sceneColor)
{
#ifdef USE_SCENE_COLOR_MANAGEMENT
  vec3 color = max(sceneColor, vec3(0.0)) * max(pbrScene.exposure, 0.0);
  if (pbrScene.toneMapMode == 1) {
    color /= vec3(1.0) + color;
  } else if (pbrScene.toneMapMode == 2) {
    color = toneMapKhronosPBRNeutral(color);
  } else if (pbrScene.toneMapMode == 3) {
    color = clamp(
      (color * (2.51 * color + 0.03)) / (color * (2.43 * color + 0.59) + 0.14),
      vec3(0.0),
      vec3(1.0)
    );
  }
  return pbrScene.outputEncoding == 0 ? color : encodeLinearSRGB(color);
#else
  return pow(max(sceneColor, vec3(0.0)), vec3(1.0 / 2.2));
#endif
}

float dielectricSchlick(float reflectance, float cosine)
{
  return reflectance + (1.0 - reflectance) * pow(clamp(1.0 - cosine, 0.0, 1.0), 5.0);
}

vec3 evaluateIridescenceSensitivity(float opticalPathDifference, vec3 phaseShift)
{
  float phase = 2.0 * M_PI * opticalPathDifference * 1.0e-9;
  vec3 sensitivity = vec3(5.4856e-13, 4.4201e-13, 5.2481e-13);
  vec3 position = vec3(1.6810e6, 1.7953e6, 2.2084e6);
  vec3 variance = vec3(4.3278e9, 9.3046e9, 6.6121e9);
  vec3 xyz = sensitivity * sqrt(2.0 * M_PI * variance) *
    cos(position * phase + phaseShift) * exp(-phase * phase * variance);
  xyz.x += 9.7470e-14 * sqrt(2.0 * M_PI * 4.5282e9) *
    cos(2.2399e6 * phase + phaseShift.x) * exp(-4.5282e9 * phase * phase);
  xyz /= 1.0685e-7;
  return mat3(
    3.2404542, -0.9692660, 0.0556434,
    -1.5371385, 1.8760108, -0.2040259,
    -0.4985314, 0.0415560, 1.0572252
  ) * xyz;
}

vec3 getIridescenceTint(float iridescence, float thickness, float NdotV, vec3 baseReflectance)
{
  if (iridescence <= 0.0 || thickness <= 0.0) {
    return baseReflectance;
  }

  float filmIor = max(pbrMaterial.iridescenceIor, 1.0);
  float sineSquared = (1.0 - NdotV * NdotV) / (filmIor * filmIor);
  float cosineSquared = 1.0 - sineSquared;
  if (cosineSquared <= 0.0) {
    return mix(baseReflectance, vec3(1.0), iridescence);
  }
  float filmCosine = sqrt(cosineSquared);
  float firstInterfaceReflectance = dielectricSchlick(getDielectricF0(filmIor), NdotV);
  float transmittedEnergy = 1.0 - firstInterfaceReflectance;

  vec3 baseIor = (vec3(1.0) + sqrt(clamp(baseReflectance, vec3(0.0), vec3(0.9999)))) /
    (vec3(1.0) - sqrt(clamp(baseReflectance, vec3(0.0), vec3(0.9999))));
  vec3 secondInterfaceF0 = (baseIor - vec3(filmIor)) / (baseIor + vec3(filmIor));
  secondInterfaceF0 *= secondInterfaceF0;
  vec3 secondInterfaceReflectance = secondInterfaceF0 +
    (vec3(1.0) - secondInterfaceF0) * pow(1.0 - filmCosine, 5.0);
  vec3 phaseShift = vec3(M_PI);
  phaseShift += mix(vec3(0.0), vec3(M_PI), lessThan(baseIor, vec3(filmIor)));
  float opticalPathDifference = 2.0 * filmIor * thickness * filmCosine;
  vec3 combinedReflectance = clamp(
    firstInterfaceReflectance * secondInterfaceReflectance,
    vec3(0.00001),
    vec3(0.9999)
  );
  vec3 recurringAmplitude = sqrt(combinedReflectance);
  vec3 interfaceResponse = transmittedEnergy * transmittedEnergy * secondInterfaceReflectance /
    (vec3(1.0) - combinedReflectance);
  vec3 reflectedSpectrum = vec3(firstInterfaceReflectance) + interfaceResponse;
  vec3 harmonicAmplitude = interfaceResponse - vec3(transmittedEnergy);
  for (int harmonic = 1; harmonic <= 2; harmonic++) {
    harmonicAmplitude *= recurringAmplitude;
    reflectedSpectrum += harmonicAmplitude * 2.0 * evaluateIridescenceSensitivity(
      float(harmonic) * opticalPathDifference,
      float(harmonic) * phaseShift
    );
  }
  return mix(baseReflectance, clamp(reflectedSpectrum, vec3(0.0), vec3(1.0)), iridescence);
}

vec3 getVolumeAttenuation(float thickness)
{
  if (thickness <= 0.0) {
    return vec3(1.0);
  }

  vec3 attenuationCoefficient =
    -log(max(pbrMaterial.attenuationColor, vec3(0.0001))) /
    max(pbrMaterial.attenuationDistance, 0.0001);
  return exp(-attenuationCoefficient * thickness);
}

// KHR_materials_volume_scatter is an active draft. This evaluates a local,
// thickness-aware single-scattering approximation rather than random walk.
vec3 getDiffuseTransmissionAttenuation(
  PBRInfo pbrInfo,
  vec3 multiscatterColor,
  float thickness
)
{
  vec3 volumeAttenuation = getVolumeAttenuation(thickness);
  float scatteringStrength = maxComponent(multiscatterColor);
  if (thickness <= 0.0 || scatteringStrength <= 0.0001) {
    return volumeAttenuation;
  }

  float anisotropy = clamp(pbrMaterial.scatterAnisotropy, -0.95, 0.95);
  float scatteringCosine = clamp(dot(-pbrInfo.v, pbrInfo.l), -1.0, 1.0);
  float phaseDenominator = max(
    1.0 + anisotropy * anisotropy - 2.0 * anisotropy * scatteringCosine,
    0.0001
  );
  float phaseWeight = clamp(
    (1.0 - anisotropy * anisotropy) / pow(phaseDenominator, 1.5),
    0.0,
    4.0
  );
  float scatteringDepth = thickness / max(pbrMaterial.attenuationDistance, 0.0001);
  float scatteringProbability = 1.0 - exp(-scatteringDepth);
  vec3 scatteringColor = clamp(multiscatterColor, vec3(0.0), vec3(1.0));
  return mix(
    volumeAttenuation,
    volumeAttenuation * mix(vec3(1.0), scatteringColor * phaseWeight, scatteringColor),
    scatteringProbability
  );
}

vec3 calculateDiffuseTransmissionLight(
  PBRInfo pbrInfo,
  vec3 lightColor,
  vec3 diffuseTransmissionColor,
  float diffuseTransmission,
  vec3 multiscatterColor,
  float thickness
)
{
  float oppositeHemisphere = max(dot(-pbrInfo.n, pbrInfo.l), 0.0);
  if (oppositeHemisphere <= 0.0 || diffuseTransmission <= 0.0) {
    return vec3(0.0);
  }

  vec3 nonReflectedEnergy = vec3(1.0) - clamp(pbrInfo.reflectance0, vec3(0.0), vec3(1.0));
  vec3 attenuatedColor = getDiffuseTransmissionAttenuation(
    pbrInfo,
    multiscatterColor,
    thickness
  );
  return lightColor * diffuseTransmissionColor * nonReflectedEnergy *
    attenuatedColor * (diffuseTransmission * oppositeHemisphere / M_PI);
}

#ifdef USE_IBL
vec3 calculateDiffuseTransmissionIBL(
  PBRInfo pbrInfo,
  vec3 diffuseTransmissionColor,
  float diffuseTransmission,
  vec3 multiscatterColor,
  float thickness
)
{
  if (diffuseTransmission <= 0.0) {
    return vec3(0.0);
  }

#ifdef USE_SCENE_ENVIRONMENT
  float rotationSine = sin(pbrScene.environmentRotation);
  float rotationCosine = cos(pbrScene.environmentRotation);
  mat2 environmentRotation = mat2(rotationCosine, rotationSine, -rotationSine, rotationCosine);
  vec3 oppositeNormal = vec3(environmentRotation * -pbrInfo.n.xz, -pbrInfo.n.y).xzy;
  vec3 environmentColor = texture(pbr_diffuseEnvSampler, oppositeNormal).rgb *
    max(pbrScene.environmentIntensity, 0.0);
#else
  vec3 environmentColor = SRGBtoLINEAR(texture(pbr_diffuseEnvSampler, -pbrInfo.n)).rgb;
#endif
  vec3 nonReflectedEnergy = vec3(1.0) - clamp(pbrInfo.reflectance0, vec3(0.0), vec3(1.0));
  return environmentColor * diffuseTransmissionColor * nonReflectedEnergy *
    getDiffuseTransmissionAttenuation(pbrInfo, multiscatterColor, thickness) *
    diffuseTransmission * pbrMaterial.scaleIBLAmbient.x;
}
#endif

#ifdef USE_TRANSMISSION_FRAMEBUFFER
vec3 sampleTransmittedSceneColor(
  vec3 position,
  vec3 normal,
  vec3 viewDirection,
  float thickness,
  float perceptualRoughness,
  float indexOfRefraction
)
{
  vec3 refractionDirection = refract(
    -viewDirection,
    normal,
    1.0 / max(indexOfRefraction, 1.0)
  );
  vec3 refractedPosition = position + refractionDirection * thickness;
  vec4 clipPosition = pbrScene.projectionMatrix *
    pbrScene.viewMatrix * vec4(refractedPosition, 1.0);
  vec2 textureCoordinate = clipPosition.xy / max(clipPosition.w, 0.0001) * 0.5 + 0.5;
  textureCoordinate = clamp(textureCoordinate, vec2(0.001), vec2(0.999));

  vec2 blurRadius = perceptualRoughness * perceptualRoughness * 8.0 /
    max(pbrScene.framebufferSize, vec2(1.0));
  vec3 sceneColor = texture(pbr_transmissionFramebufferSampler, textureCoordinate).rgb * 0.4;
  sceneColor += texture(
    pbr_transmissionFramebufferSampler,
    textureCoordinate + vec2(blurRadius.x, 0.0)
  ).rgb * 0.15;
  sceneColor += texture(
    pbr_transmissionFramebufferSampler,
    textureCoordinate - vec2(blurRadius.x, 0.0)
  ).rgb * 0.15;
  sceneColor += texture(
    pbr_transmissionFramebufferSampler,
    textureCoordinate + vec2(0.0, blurRadius.y)
  ).rgb * 0.15;
  sceneColor += texture(
    pbr_transmissionFramebufferSampler,
    textureCoordinate - vec2(0.0, blurRadius.y)
  ).rgb * 0.15;
  return max(sceneColor, vec3(0.0));
}

vec3 getTransmittedSceneColor(
  vec3 position,
  vec3 normal,
  vec3 viewDirection,
  float thickness,
  float perceptualRoughness
)
{
  if (pbrMaterial.dispersion <= 0.0) {
    return sampleTransmittedSceneColor(
      position,
      normal,
      viewDirection,
      thickness,
      perceptualRoughness,
      pbrMaterial.ior
    );
  }

  float halfSpread = (max(pbrMaterial.ior, 1.0) - 1.0) * 0.025 * pbrMaterial.dispersion;
  vec3 indicesOfRefraction = max(
    vec3(pbrMaterial.ior - halfSpread, pbrMaterial.ior, pbrMaterial.ior + halfSpread),
    vec3(1.0)
  );
  return vec3(
    sampleTransmittedSceneColor(
      position, normal, viewDirection, thickness, perceptualRoughness, indicesOfRefraction.r
    ).r,
    sampleTransmittedSceneColor(
      position, normal, viewDirection, thickness, perceptualRoughness, indicesOfRefraction.g
    ).g,
    sampleTransmittedSceneColor(
      position, normal, viewDirection, thickness, perceptualRoughness, indicesOfRefraction.b
    ).b
  );
}
#endif

PBRInfo createClearcoatPBRInfo(PBRInfo basePBRInfo, vec3 clearcoatNormal, float clearcoatRoughness)
{
  float perceptualRoughness = clamp(clearcoatRoughness, c_MinRoughness, 1.0);
  float alphaRoughness = perceptualRoughness * perceptualRoughness;
  float NdotV = clamp(abs(dot(clearcoatNormal, basePBRInfo.v)), 0.001, 1.0);

  return PBRInfo(
    basePBRInfo.NdotL,
    NdotV,
    basePBRInfo.NdotH,
    basePBRInfo.LdotH,
    basePBRInfo.VdotH,
    perceptualRoughness,
    0.0,
    vec3(0.04),
    vec3(1.0),
    alphaRoughness,
    vec3(0.0),
    vec3(0.04),
    clearcoatNormal,
    basePBRInfo.v,
    basePBRInfo.l,
    basePBRInfo.h
  );
}

vec3 calculateClearcoatContribution(
  PBRInfo pbrInfo,
  vec3 lightColor,
  vec3 clearcoatNormal,
  float clearcoatFactor,
  float clearcoatRoughness
) {
  if (clearcoatFactor <= 0.0) {
    return vec3(0.0);
  }

  PBRInfo clearcoatPBRInfo = createClearcoatPBRInfo(pbrInfo, clearcoatNormal, clearcoatRoughness);
  return calculateFinalColor(clearcoatPBRInfo, lightColor) * clearcoatFactor;
}

#ifdef USE_IBL
vec3 calculateClearcoatIBLContribution(
  PBRInfo pbrInfo,
  vec3 clearcoatNormal,
  vec3 reflection,
  float clearcoatFactor,
  float clearcoatRoughness
) {
  if (clearcoatFactor <= 0.0) {
    return vec3(0.0);
  }

  PBRInfo clearcoatPBRInfo = createClearcoatPBRInfo(pbrInfo, clearcoatNormal, clearcoatRoughness);
  return getIBLContribution(clearcoatPBRInfo, clearcoatNormal, reflection) * clearcoatFactor;
}
#endif

vec3 calculateSheenContribution(
  PBRInfo pbrInfo,
  vec3 lightColor,
  vec3 sheenColor,
  float sheenRoughness
) {
  if (maxComponent(sheenColor) <= 0.0) {
    return vec3(0.0);
  }

  float alpha = max(sheenRoughness * sheenRoughness, 0.0001);
  float inverseAlpha = 1.0 / alpha;
  float sineSquared = max(1.0 - pbrInfo.NdotH * pbrInfo.NdotH, 0.0);
  float distribution = (2.0 + inverseAlpha) * pow(sineSquared, inverseAlpha * 0.5) /
    (2.0 * M_PI);
  float visibility = 1.0 / max(
    4.0 * (pbrInfo.NdotL + pbrInfo.NdotV - pbrInfo.NdotL * pbrInfo.NdotV),
    0.0001
  );
  return pbrInfo.NdotL * lightColor * sheenColor * distribution * visibility *
    (1.0 - pbrInfo.metalness);
}

vec3 calculateAnisotropicLightColor(
  PBRInfo pbrInfo,
  vec3 lightColor,
  vec3 anisotropyTangent,
  float anisotropyStrength
) {
  if (anisotropyStrength <= 0.0) {
    return calculateFinalColor(pbrInfo, lightColor);
  }

  vec3 anisotropyBitangent = normalize(cross(pbrInfo.n, anisotropyTangent));
  float tangentRoughness = mix(
    pbrInfo.alphaRoughness,
    1.0,
    anisotropyStrength * anisotropyStrength
  );
  float bitangentRoughness = clamp(pbrInfo.alphaRoughness, 0.001, 1.0);
  float roughnessProduct = tangentRoughness * bitangentRoughness;
  vec3 distributionVector = vec3(
    bitangentRoughness * dot(anisotropyTangent, pbrInfo.h),
    tangentRoughness * dot(anisotropyBitangent, pbrInfo.h),
    roughnessProduct * pbrInfo.NdotH
  );
  float distributionFactor = roughnessProduct /
    max(dot(distributionVector, distributionVector), 0.000001);
  float distribution = roughnessProduct * distributionFactor * distributionFactor / M_PI;
  float viewMask = pbrInfo.NdotL * length(vec3(
    tangentRoughness * dot(anisotropyTangent, pbrInfo.v),
    bitangentRoughness * dot(anisotropyBitangent, pbrInfo.v),
    pbrInfo.NdotV
  ));
  float lightMask = pbrInfo.NdotV * length(vec3(
    tangentRoughness * dot(anisotropyTangent, pbrInfo.l),
    bitangentRoughness * dot(anisotropyBitangent, pbrInfo.l),
    pbrInfo.NdotL
  ));
  float visibility = clamp(0.5 / max(viewMask + lightMask, 0.000001), 0.0, 1.0);
  vec3 fresnel = specularReflection(pbrInfo);
  vec3 diffuseContribution = (vec3(1.0) - fresnel) * diffuse(pbrInfo);
  return pbrInfo.NdotL * lightColor *
    (diffuseContribution + fresnel * distribution * visibility);
}

vec3 getAnisotropicReflection(PBRInfo pbrInfo, vec3 anisotropyTangent, float anisotropyStrength)
{
  if (anisotropyStrength <= 0.0) {
    return -normalize(reflect(pbrInfo.v, pbrInfo.n));
  }
  vec3 anisotropyBitangent = normalize(cross(pbrInfo.n, anisotropyTangent));
  vec3 anisotropicNormal = normalize(cross(anisotropyBitangent, pbrInfo.v));
  anisotropicNormal = normalize(cross(anisotropicNormal, anisotropyBitangent));
  float bend = anisotropyStrength * (1.0 - pbrInfo.perceptualRoughness);
  return -normalize(reflect(pbrInfo.v, normalize(mix(pbrInfo.n, anisotropicNormal, bend))));
}

vec3 calculateMaterialLightColor(
  PBRInfo pbrInfo,
  vec3 lightColor,
  vec3 clearcoatNormal,
  float clearcoatFactor,
  float clearcoatRoughness,
  vec3 sheenColor,
  float sheenRoughness,
  vec3 anisotropyTangent,
  float anisotropyStrength
) {
  vec3 color = calculateAnisotropicLightColor(
    pbrInfo,
    lightColor,
    anisotropyTangent,
    anisotropyStrength
  );
  color += calculateClearcoatContribution(
    pbrInfo,
    lightColor,
    clearcoatNormal,
    clearcoatFactor,
    clearcoatRoughness
  );
  color += calculateSheenContribution(pbrInfo, lightColor, sheenColor, sheenRoughness);
  return color;
}

void PBRInfo_setAmbientLight(inout PBRInfo pbrInfo) {
  pbrInfo.NdotL = 1.0;
  pbrInfo.NdotH = 0.0;
  pbrInfo.LdotH = 0.0;
  pbrInfo.VdotH = 1.0;
  pbrInfo.l = pbrInfo.n;
  pbrInfo.h = pbrInfo.n;
}

void PBRInfo_setDirectionalLight(inout PBRInfo pbrInfo, vec3 lightDirection) {
  vec3 n = pbrInfo.n;
  vec3 v = pbrInfo.v;
  vec3 l = normalize(lightDirection);             // Vector from surface point to light
  vec3 h = normalize(l+v);                        // Half vector between both l and v

  pbrInfo.NdotL = clamp(dot(n, l), 0.001, 1.0);
  pbrInfo.NdotH = clamp(dot(n, h), 0.0, 1.0);
  pbrInfo.LdotH = clamp(dot(l, h), 0.0, 1.0);
  pbrInfo.VdotH = clamp(dot(v, h), 0.0, 1.0);
  pbrInfo.l = l;
  pbrInfo.h = h;
}

void PBRInfo_setPointLight(inout PBRInfo pbrInfo, PointLight pointLight) {
  vec3 light_direction = normalize(pointLight.position - pbr_vPosition);
  PBRInfo_setDirectionalLight(pbrInfo, light_direction);
}

void PBRInfo_setSpotLight(inout PBRInfo pbrInfo, SpotLight spotLight) {
  vec3 light_direction = normalize(spotLight.position - pbr_vPosition);
  PBRInfo_setDirectionalLight(pbrInfo, light_direction);
}

vec3 calculateFinalColor(PBRInfo pbrInfo, vec3 lightColor) {
  // Calculate the shading terms for the microfacet specular shading model
  vec3 F = specularReflection(pbrInfo);
  float G = geometricOcclusion(pbrInfo);
  float D = microfacetDistribution(pbrInfo);

  // Calculation of analytical lighting contribution
  vec3 diffuseContrib = (1.0 - F) * diffuse(pbrInfo);
  vec3 specContrib = F * G * D / (4.0 * pbrInfo.NdotL * pbrInfo.NdotV);
  // Obtain final intensity as reflectance (BRDF) scaled by the energy of the light (cosine law)
  return pbrInfo.NdotL * lightColor * (diffuseContrib + specContrib);
}

vec4 pbr_filterColor(vec4 vertexColor)
{
  vec2 baseColorUV = getMaterialUV(pbrMaterial.baseColorUVSet, pbrMaterial.baseColorUVTransform);
  vec2 metallicRoughnessUV = getMaterialUV(
    pbrMaterial.metallicRoughnessUVSet,
    pbrMaterial.metallicRoughnessUVTransform
  );
  vec2 normalUV = getMaterialUV(pbrMaterial.normalUVSet, pbrMaterial.normalUVTransform);
  vec2 occlusionUV = getMaterialUV(pbrMaterial.occlusionUVSet, pbrMaterial.occlusionUVTransform);
  vec2 emissiveUV = getMaterialUV(pbrMaterial.emissiveUVSet, pbrMaterial.emissiveUVTransform);
  vec2 specularColorUV = getMaterialUV(
    pbrMaterial.specularColorUVSet,
    pbrMaterial.specularColorUVTransform
  );
  vec2 specularIntensityUV = getMaterialUV(
    pbrMaterial.specularIntensityUVSet,
    pbrMaterial.specularIntensityUVTransform
  );
  vec2 transmissionUV = getMaterialUV(
    pbrMaterial.transmissionUVSet,
    pbrMaterial.transmissionUVTransform
  );
  vec2 thicknessUV = getMaterialUV(pbrMaterial.thicknessUVSet, pbrMaterial.thicknessUVTransform);
  vec2 clearcoatUV = getMaterialUV(pbrMaterial.clearcoatUVSet, pbrMaterial.clearcoatUVTransform);
  vec2 clearcoatRoughnessUV = getMaterialUV(
    pbrMaterial.clearcoatRoughnessUVSet,
    pbrMaterial.clearcoatRoughnessUVTransform
  );
  vec2 clearcoatNormalUV = getMaterialUV(
    pbrMaterial.clearcoatNormalUVSet,
    pbrMaterial.clearcoatNormalUVTransform
  );
  vec2 sheenColorUV = getMaterialUV(
    pbrMaterial.sheenColorUVSet,
    pbrMaterial.sheenColorUVTransform
  );
  vec2 sheenRoughnessUV = getMaterialUV(
    pbrMaterial.sheenRoughnessUVSet,
    pbrMaterial.sheenRoughnessUVTransform
  );
  vec2 iridescenceUV = getMaterialUV(
    pbrMaterial.iridescenceUVSet,
    pbrMaterial.iridescenceUVTransform
  );
  vec2 iridescenceThicknessUV = getMaterialUV(
    pbrMaterial.iridescenceThicknessUVSet,
    pbrMaterial.iridescenceThicknessUVTransform
  );
  vec2 anisotropyUV = getMaterialUV(
    pbrMaterial.anisotropyUVSet,
    pbrMaterial.anisotropyUVTransform
  );
  vec2 diffuseTransmissionUV = getMaterialUV(
    pbrMaterial.diffuseTransmissionUVSet,
    pbrMaterial.diffuseTransmissionUVTransform
  );
  vec2 diffuseTransmissionColorUV = getMaterialUV(
    pbrMaterial.diffuseTransmissionColorUVSet,
    pbrMaterial.diffuseTransmissionColorUVTransform
  );
  vec2 multiscatterColorUV = getMaterialUV(
    pbrMaterial.multiscatterColorUVSet,
    pbrMaterial.multiscatterColorUVTransform
  );

  // The albedo may be defined from a base texture or a flat color
#ifdef HAS_BASECOLORMAP
  vec4 baseColor =
    SRGBtoLINEAR(texture(pbr_baseColorSampler, baseColorUV)) *
    pbrMaterial.baseColorFactor * vertexColor;
#else
  vec4 baseColor = pbrMaterial.baseColorFactor * vertexColor;
#endif

#ifdef ALPHA_CUTOFF
  if (baseColor.a < pbrMaterial.alphaCutoff) {
    discard;
  }
#endif

  vec3 color = vec3(0, 0, 0);

  float transmission = 0.0;

  if(pbrMaterial.unlit){
    color.rgb = baseColor.rgb;
  }
  else{
    // Metallic and Roughness material properties are packed together
    // In glTF, these factors can be specified by fixed scalar values
    // or from a metallic-roughness map
    float perceptualRoughness = pbrMaterial.metallicRoughnessValues.y;
    float metallic = pbrMaterial.metallicRoughnessValues.x;
#ifdef HAS_METALROUGHNESSMAP
    // Roughness is stored in the 'g' channel, metallic is stored in the 'b' channel.
    // This layout intentionally reserves the 'r' channel for (optional) occlusion map data
    vec4 mrSample = texture(pbr_metallicRoughnessSampler, metallicRoughnessUV);
    perceptualRoughness = mrSample.g * perceptualRoughness;
    metallic = mrSample.b * metallic;
#endif
    perceptualRoughness = clamp(perceptualRoughness, c_MinRoughness, 1.0);
    metallic = clamp(metallic, 0.0, 1.0);
    mat3 tbn = getTBN(normalUV);
    vec3 n = getNormal(tbn, normalUV);                          // normal at surface point
    perceptualRoughness = widenSpecularRoughness(perceptualRoughness, n);
    vec3 v = normalize(pbrProjection.camera - pbr_vPosition);  // Vector from surface point to camera
    float NdotV = clamp(abs(dot(n, v)), 0.001, 1.0);
#ifdef USE_MATERIAL_EXTENSIONS
    bool useExtendedPBR =
      pbrMaterial.specularColorMapEnabled ||
      pbrMaterial.specularIntensityMapEnabled ||
      abs(pbrMaterial.specularIntensityFactor - 1.0) > 0.0001 ||
      maxComponent(abs(pbrMaterial.specularColorFactor - vec3(1.0))) > 0.0001 ||
      abs(pbrMaterial.ior - 1.5) > 0.0001 ||
      pbrMaterial.dispersion > 0.0001 ||
      pbrMaterial.transmissionMapEnabled ||
      pbrMaterial.transmissionFactor > 0.0001 ||
      pbrMaterial.diffuseTransmissionMapEnabled ||
      pbrMaterial.diffuseTransmissionColorMapEnabled ||
      pbrMaterial.diffuseTransmissionFactor > 0.0001 ||
      pbrMaterial.multiscatterColorMapEnabled ||
      maxComponent(pbrMaterial.multiscatterColorFactor) > 0.0001 ||
      pbrMaterial.clearcoatMapEnabled ||
      pbrMaterial.clearcoatRoughnessMapEnabled ||
      pbrMaterial.clearcoatFactor > 0.0001 ||
      pbrMaterial.clearcoatRoughnessFactor > 0.0001 ||
      pbrMaterial.sheenColorMapEnabled ||
      pbrMaterial.sheenRoughnessMapEnabled ||
      maxComponent(pbrMaterial.sheenColorFactor) > 0.0001 ||
      pbrMaterial.sheenRoughnessFactor > 0.0001 ||
      pbrMaterial.iridescenceMapEnabled ||
      pbrMaterial.iridescenceFactor > 0.0001 ||
      abs(pbrMaterial.iridescenceIor - 1.3) > 0.0001 ||
      abs(pbrMaterial.iridescenceThicknessRange.x - 100.0) > 0.0001 ||
      abs(pbrMaterial.iridescenceThicknessRange.y - 400.0) > 0.0001 ||
      pbrMaterial.anisotropyMapEnabled ||
      pbrMaterial.anisotropyStrength > 0.0001 ||
      abs(pbrMaterial.anisotropyRotation) > 0.0001 ||
      length(pbrMaterial.anisotropyDirection - vec2(1.0, 0.0)) > 0.0001;
#else
    bool useExtendedPBR = false;
#endif

    if (!useExtendedPBR) {
      // Keep the baseline metallic-roughness implementation byte-for-byte equivalent in behavior.
      float alphaRoughness = perceptualRoughness * perceptualRoughness;

      vec3 f0 = vec3(0.04);
      vec3 diffuseColor = baseColor.rgb * (vec3(1.0) - f0);
      diffuseColor *= 1.0 - metallic;
      vec3 specularColor = mix(f0, baseColor.rgb, metallic);

      float reflectance = max(max(specularColor.r, specularColor.g), specularColor.b);
      float reflectance90 = clamp(reflectance * 25.0, 0.0, 1.0);
      vec3 specularEnvironmentR0 = specularColor.rgb;
      vec3 specularEnvironmentR90 = vec3(1.0, 1.0, 1.0) * reflectance90;
      vec3 reflection = -normalize(reflect(v, n));

      PBRInfo pbrInfo = PBRInfo(
        0.0, // NdotL
        NdotV,
        0.0, // NdotH
        0.0, // LdotH
        0.0, // VdotH
        perceptualRoughness,
        metallic,
        specularEnvironmentR0,
        specularEnvironmentR90,
        alphaRoughness,
        diffuseColor,
        specularColor,
        n,
        v,
        n,
        n
      );

#ifdef USE_LIGHTS
      PBRInfo_setAmbientLight(pbrInfo);
      color += calculateFinalColor(pbrInfo, lighting.ambientColor);

      for(int i = 0; i < lighting.directionalLightCount; i++) {
        if (i < lighting.directionalLightCount) {
          PBRInfo_setDirectionalLight(pbrInfo, lighting_getDirectionalLight(i).direction);
          color += calculateFinalColor(pbrInfo, lighting_getDirectionalLight(i).color);
        }
      }

      for(int i = 0; i < lighting.pointLightCount; i++) {
        if (i < lighting.pointLightCount) {
          PBRInfo_setPointLight(pbrInfo, lighting_getPointLight(i));
          float attenuation = getPointLightAttenuation(lighting_getPointLight(i), distance(lighting_getPointLight(i).position, pbr_vPosition));
          color += calculateFinalColor(pbrInfo, lighting_getPointLight(i).color / attenuation);
        }
      }

      for(int i = 0; i < lighting.spotLightCount; i++) {
        if (i < lighting.spotLightCount) {
          PBRInfo_setSpotLight(pbrInfo, lighting_getSpotLight(i));
          float attenuation = getSpotLightAttenuation(lighting_getSpotLight(i), pbr_vPosition);
          color += calculateFinalColor(pbrInfo, lighting_getSpotLight(i).color / attenuation);
        }
      }
#endif

#ifdef USE_IBL
      if (pbrMaterial.IBLenabled) {
        color += getIBLContribution(pbrInfo, n, reflection);
      }
#endif

#ifdef HAS_OCCLUSIONMAP
      if (pbrMaterial.occlusionMapEnabled) {
        float ao = texture(pbr_occlusionSampler, occlusionUV).r;
        color = mix(color, color * ao, pbrMaterial.occlusionStrength);
      }
#endif

      vec3 emissive = pbrMaterial.emissiveFactor;
#ifdef HAS_EMISSIVEMAP
      if (pbrMaterial.emissiveMapEnabled) {
        emissive *= SRGBtoLINEAR(texture(pbr_emissiveSampler, emissiveUV)).rgb;
      }
#endif
      color += emissive * pbrMaterial.emissiveStrength;

#ifdef PBR_DEBUG
      color = mix(color, baseColor.rgb, pbrMaterial.scaleDiffBaseMR.y);
      color = mix(color, vec3(metallic), pbrMaterial.scaleDiffBaseMR.z);
      color = mix(color, vec3(perceptualRoughness), pbrMaterial.scaleDiffBaseMR.w);
#endif

      return vec4(applySceneColorManagement(color), baseColor.a);
    }

    float specularIntensity = pbrMaterial.specularIntensityFactor;
#ifdef HAS_SPECULARINTENSITYMAP
    if (pbrMaterial.specularIntensityMapEnabled) {
      specularIntensity *= texture(pbr_specularIntensitySampler, specularIntensityUV).a;
    }
#endif

    vec3 specularFactor = pbrMaterial.specularColorFactor;
#ifdef HAS_SPECULARCOLORMAP
    if (pbrMaterial.specularColorMapEnabled) {
      specularFactor *= SRGBtoLINEAR(texture(pbr_specularColorSampler, specularColorUV)).rgb;
    }
#endif

    transmission = pbrMaterial.transmissionFactor;
#ifdef HAS_TRANSMISSIONMAP
    if (pbrMaterial.transmissionMapEnabled) {
      transmission *= texture(pbr_transmissionSampler, transmissionUV).r;
    }
#endif
    transmission = clamp(transmission * (1.0 - metallic), 0.0, 1.0);
    float thickness = max(pbrMaterial.thicknessFactor, 0.0);
#ifdef HAS_THICKNESSMAP
    thickness *= texture(pbr_thicknessSampler, thicknessUV).g;
#endif

    float diffuseTransmission = clamp(pbrMaterial.diffuseTransmissionFactor, 0.0, 1.0);
#ifdef HAS_DIFFUSETRANSMISSIONMAP
    if (pbrMaterial.diffuseTransmissionMapEnabled) {
      diffuseTransmission *= texture(pbr_diffuseTransmissionSampler, diffuseTransmissionUV).a;
    }
#endif
    diffuseTransmission *= (1.0 - metallic) * (1.0 - transmission);
    vec3 diffuseTransmissionColor = pbrMaterial.diffuseTransmissionColorFactor;
#ifdef HAS_DIFFUSETRANSMISSIONCOLORMAP
    if (pbrMaterial.diffuseTransmissionColorMapEnabled) {
      diffuseTransmissionColor *= SRGBtoLINEAR(
        texture(pbr_diffuseTransmissionColorSampler, diffuseTransmissionColorUV)
      ).rgb;
    }
#endif
    vec3 multiscatterColor = pbrMaterial.multiscatterColorFactor;
#ifdef HAS_MULTISCATTERCOLORMAP
    if (pbrMaterial.multiscatterColorMapEnabled) {
      multiscatterColor *= SRGBtoLINEAR(
        texture(pbr_multiscatterColorSampler, multiscatterColorUV)
      ).rgb;
    }
#endif

    float clearcoatFactor = pbrMaterial.clearcoatFactor;
    float clearcoatRoughness = pbrMaterial.clearcoatRoughnessFactor;
#ifdef HAS_CLEARCOATMAP
    if (pbrMaterial.clearcoatMapEnabled) {
      clearcoatFactor *= texture(pbr_clearcoatSampler, clearcoatUV).r;
    }
#endif
#ifdef HAS_CLEARCOATROUGHNESSMAP
    if (pbrMaterial.clearcoatRoughnessMapEnabled) {
      clearcoatRoughness *= texture(pbr_clearcoatRoughnessSampler, clearcoatRoughnessUV).g;
    }
#endif
    clearcoatFactor = clamp(clearcoatFactor, 0.0, 1.0);
    clearcoatRoughness = clamp(clearcoatRoughness, c_MinRoughness, 1.0);
    vec3 clearcoatNormal = getClearcoatNormal(getTBN(clearcoatNormalUV), n, clearcoatNormalUV);
    clearcoatRoughness = widenSpecularRoughness(clearcoatRoughness, clearcoatNormal);

    vec3 sheenColor = pbrMaterial.sheenColorFactor;
    float sheenRoughness = pbrMaterial.sheenRoughnessFactor;
#ifdef HAS_SHEENCOLORMAP
    if (pbrMaterial.sheenColorMapEnabled) {
      sheenColor *= SRGBtoLINEAR(texture(pbr_sheenColorSampler, sheenColorUV)).rgb;
    }
#endif
#ifdef HAS_SHEENROUGHNESSMAP
    if (pbrMaterial.sheenRoughnessMapEnabled) {
      sheenRoughness *= texture(pbr_sheenRoughnessSampler, sheenRoughnessUV).a;
    }
#endif
    sheenRoughness = clamp(sheenRoughness, c_MinRoughness, 1.0);

    float iridescence = pbrMaterial.iridescenceFactor;
#ifdef HAS_IRIDESCENCEMAP
    if (pbrMaterial.iridescenceMapEnabled) {
      iridescence *= texture(pbr_iridescenceSampler, iridescenceUV).r;
    }
#endif
    iridescence = clamp(iridescence, 0.0, 1.0);
    float iridescenceThickness = mix(
      pbrMaterial.iridescenceThicknessRange.x,
      pbrMaterial.iridescenceThicknessRange.y,
      0.5
    );
#ifdef HAS_IRIDESCENCETHICKNESSMAP
    iridescenceThickness = mix(
      pbrMaterial.iridescenceThicknessRange.x,
      pbrMaterial.iridescenceThicknessRange.y,
      texture(pbr_iridescenceThicknessSampler, iridescenceThicknessUV).g
    );
#endif

    float anisotropyStrength = clamp(pbrMaterial.anisotropyStrength, 0.0, 1.0);
    vec2 anisotropyDirection = normalizeDirection(pbrMaterial.anisotropyDirection);
#ifdef HAS_ANISOTROPYMAP
    if (pbrMaterial.anisotropyMapEnabled) {
      vec3 anisotropySample = texture(pbr_anisotropySampler, anisotropyUV).rgb;
      anisotropyStrength *= anisotropySample.b;
      vec2 mappedDirection = anisotropySample.rg * 2.0 - 1.0;
      if (length(mappedDirection) > 0.0001) {
        anisotropyDirection = normalize(mappedDirection);
      }
    }
#endif
    anisotropyDirection = rotateDirection(anisotropyDirection, pbrMaterial.anisotropyRotation);
    vec3 anisotropyTangent = normalize(tbn[0] * anisotropyDirection.x + tbn[1] * anisotropyDirection.y);
    if (length(anisotropyTangent) < 0.0001) {
      anisotropyTangent = normalize(tbn[0]);
    }
    // Roughness is authored as perceptual roughness; as is convention,
    // convert to material roughness by squaring the perceptual roughness [2].
    float alphaRoughness = perceptualRoughness * perceptualRoughness;

    float dielectricF0 = getDielectricF0(pbrMaterial.ior);
    vec3 dielectricSpecularF0 = min(
      vec3(dielectricF0) * specularFactor * specularIntensity,
      vec3(1.0)
    );
    dielectricSpecularF0 = getIridescenceTint(
      iridescence,
      iridescenceThickness,
      NdotV,
      dielectricSpecularF0
    );
    vec3 diffuseColor = baseColor.rgb * (vec3(1.0) - dielectricSpecularF0);
    diffuseColor *= (1.0 - metallic) * (1.0 - transmission) * (1.0 - diffuseTransmission);
    vec3 specularColor = mix(dielectricSpecularF0, baseColor.rgb, metallic);

    float clearcoatViewFresnel = dielectricSchlick(
      0.04,
      clamp(abs(dot(clearcoatNormal, v)), 0.0, 1.0)
    );
    float sheenDirectionalAlbedo = maxComponent(sheenColor) *
      (0.157 + 0.343 * (1.0 - NdotV)) * (1.0 - sheenRoughness * 0.5);
    float baseLayerEnergy = (1.0 - clearcoatFactor * clearcoatViewFresnel) *
      (1.0 - clamp(sheenDirectionalAlbedo, 0.0, 1.0));
    diffuseColor *= baseLayerEnergy;
    specularColor *= baseLayerEnergy;

    // Compute reflectance.
    float reflectance = max(max(specularColor.r, specularColor.g), specularColor.b);

    // For typical incident reflectance range (between 4% to 100%) set the grazing
    // reflectance to 100% for typical fresnel effect.
    // For very low reflectance range on highly diffuse objects (below 4%),
    // incrementally reduce grazing reflecance to 0%.
    float reflectance90 = clamp(reflectance * 25.0, 0.0, 1.0);
    vec3 specularEnvironmentR0 = specularColor.rgb;
    vec3 specularEnvironmentR90 = vec3(1.0, 1.0, 1.0) * reflectance90;
    vec3 reflection = -normalize(reflect(v, n));

    PBRInfo pbrInfo = PBRInfo(
      0.0, // NdotL
      NdotV,
      0.0, // NdotH
      0.0, // LdotH
      0.0, // VdotH
      perceptualRoughness,
      metallic,
      specularEnvironmentR0,
      specularEnvironmentR90,
      alphaRoughness,
      diffuseColor,
      specularColor,
      n,
      v,
      n,
      n
    );


#ifdef USE_LIGHTS
    // Apply ambient light
    PBRInfo_setAmbientLight(pbrInfo);
    color += calculateMaterialLightColor(
      pbrInfo,
      lighting.ambientColor,
      clearcoatNormal,
      clearcoatFactor,
      clearcoatRoughness,
      sheenColor,
      sheenRoughness,
      anisotropyTangent,
      anisotropyStrength
    );

    // Apply directional light
    for(int i = 0; i < lighting.directionalLightCount; i++) {
      if (i < lighting.directionalLightCount) {
        PBRInfo_setDirectionalLight(pbrInfo, lighting_getDirectionalLight(i).direction);
        color += calculateMaterialLightColor(
          pbrInfo,
          lighting_getDirectionalLight(i).color,
          clearcoatNormal,
          clearcoatFactor,
          clearcoatRoughness,
          sheenColor,
          sheenRoughness,
          anisotropyTangent,
          anisotropyStrength
        );
        color += calculateDiffuseTransmissionLight(
          pbrInfo,
          lighting_getDirectionalLight(i).color,
          diffuseTransmissionColor,
          diffuseTransmission,
          multiscatterColor,
          thickness
        );
      }
    }

    // Apply point light
    for(int i = 0; i < lighting.pointLightCount; i++) {
      if (i < lighting.pointLightCount) {
        PBRInfo_setPointLight(pbrInfo, lighting_getPointLight(i));
        float attenuation = getPointLightAttenuation(lighting_getPointLight(i), distance(lighting_getPointLight(i).position, pbr_vPosition));
        color += calculateMaterialLightColor(
          pbrInfo,
          lighting_getPointLight(i).color / attenuation,
          clearcoatNormal,
          clearcoatFactor,
          clearcoatRoughness,
          sheenColor,
          sheenRoughness,
          anisotropyTangent,
          anisotropyStrength
        );
        color += calculateDiffuseTransmissionLight(
          pbrInfo,
          lighting_getPointLight(i).color / attenuation,
          diffuseTransmissionColor,
          diffuseTransmission,
          multiscatterColor,
          thickness
        );
      }
    }

    for(int i = 0; i < lighting.spotLightCount; i++) {
      if (i < lighting.spotLightCount) {
        PBRInfo_setSpotLight(pbrInfo, lighting_getSpotLight(i));
        float attenuation = getSpotLightAttenuation(lighting_getSpotLight(i), pbr_vPosition);
        color += calculateMaterialLightColor(
          pbrInfo,
          lighting_getSpotLight(i).color / attenuation,
          clearcoatNormal,
          clearcoatFactor,
          clearcoatRoughness,
          sheenColor,
          sheenRoughness,
          anisotropyTangent,
          anisotropyStrength
        );
        color += calculateDiffuseTransmissionLight(
          pbrInfo,
          lighting_getSpotLight(i).color / attenuation,
          diffuseTransmissionColor,
          diffuseTransmission,
          multiscatterColor,
          thickness
        );
      }
    }
#endif

    // Calculate lighting contribution from image based lighting source (IBL)
#ifdef USE_IBL
    if (pbrMaterial.IBLenabled) {
      color += getIBLContribution(
        pbrInfo,
        n,
        getAnisotropicReflection(pbrInfo, anisotropyTangent, anisotropyStrength)
      );
      color += calculateClearcoatIBLContribution(
        pbrInfo,
        clearcoatNormal,
        -normalize(reflect(v, clearcoatNormal)),
        clearcoatFactor,
        clearcoatRoughness
      );
      color += calculateDiffuseTransmissionIBL(
        pbrInfo,
        diffuseTransmissionColor,
        diffuseTransmission,
        multiscatterColor,
        thickness
      );
      color += sheenColor * pbrMaterial.scaleIBLAmbient.x * (1.0 - sheenRoughness) * 0.25;
    }
#endif

 // Apply optional PBR terms for additional (optional) shading
#ifdef HAS_OCCLUSIONMAP
    if (pbrMaterial.occlusionMapEnabled) {
      float ao = texture(pbr_occlusionSampler, occlusionUV).r;
      color = mix(color, color * ao, pbrMaterial.occlusionStrength);
    }
#endif

    vec3 emissive = pbrMaterial.emissiveFactor;
#ifdef HAS_EMISSIVEMAP
    if (pbrMaterial.emissiveMapEnabled) {
      emissive *= SRGBtoLINEAR(texture(pbr_emissiveSampler, emissiveUV)).rgb;
    }
#endif
    color += emissive * pbrMaterial.emissiveStrength;

    if (transmission > 0.0) {
#ifdef USE_TRANSMISSION_FRAMEBUFFER
      float dielectricFresnel = getDielectricF0(pbrMaterial.ior);
      float transmissionFresnel = dielectricFresnel +
        (1.0 - dielectricFresnel) * pow(1.0 - NdotV, 5.0);
      vec3 transmittedColor = getTransmittedSceneColor(
        pbr_vPosition,
        n,
        v,
        thickness,
        perceptualRoughness
      );
      color += transmittedColor * getVolumeAttenuation(thickness) *
        transmission * (1.0 - transmissionFresnel);
#else
      color = mix(color, color * getVolumeAttenuation(thickness), transmission);
#endif
    }

    // This section uses mix to override final color for reference app visualization
    // of various parameters in the lighting equation.
#ifdef PBR_DEBUG
    // TODO: Figure out how to debug multiple lights

    // color = mix(color, F, pbr_scaleFGDSpec.x);
    // color = mix(color, vec3(G), pbr_scaleFGDSpec.y);
    // color = mix(color, vec3(D), pbr_scaleFGDSpec.z);
    // color = mix(color, specContrib, pbr_scaleFGDSpec.w);

    // color = mix(color, diffuseContrib, pbr_scaleDiffBaseMR.x);
    color = mix(color, baseColor.rgb, pbrMaterial.scaleDiffBaseMR.y);
    color = mix(color, vec3(metallic), pbrMaterial.scaleDiffBaseMR.z);
    color = mix(color, vec3(perceptualRoughness), pbrMaterial.scaleDiffBaseMR.w);
#endif

  }

#ifdef USE_TRANSMISSION_FRAMEBUFFER
  float alpha = clamp(baseColor.a, 0.0, 1.0);
#else
  float alpha = clamp(baseColor.a * (1.0 - transmission), 0.0, 1.0);
#endif
  return vec4(applySceneColorManagement(color), alpha);
}
`,P2=`struct PBRFragmentInputs {
  pbr_vPosition: vec3f,
  pbr_vUV0: vec2f,
  pbr_vUV1: vec2f,
  pbr_vTBN: mat3x3f,
  pbr_vNormal: vec3f
};

var<private> fragmentInputs: PBRFragmentInputs;

fn pbr_setPositionNormalTangentUV(
  position: vec4f,
  normal: vec4f,
  tangent: vec4f,
  uv0: vec2f,
  uv1: vec2f
)
{
  var pos: vec4f = pbrProjection.modelMatrix * position;
  fragmentInputs.pbr_vPosition = pos.xyz / pos.w;
  fragmentInputs.pbr_vNormal = vec3f(0.0, 0.0, 1.0);
  fragmentInputs.pbr_vTBN = mat3x3f(
    vec3f(1.0, 0.0, 0.0),
    vec3f(0.0, 1.0, 0.0),
    vec3f(0.0, 0.0, 1.0)
  );
  fragmentInputs.pbr_vUV0 = vec2f(0.0, 0.0);
  fragmentInputs.pbr_vUV1 = uv1;

#ifdef HAS_NORMALS
  let normalW: vec3f = normalize((pbrProjection.normalMatrix * vec4f(normal.xyz, 0.0)).xyz);
  fragmentInputs.pbr_vNormal = normalW;
#ifdef HAS_TANGENTS
  let tangentW: vec3f = normalize((pbrProjection.modelMatrix * vec4f(tangent.xyz, 0.0)).xyz);
  let bitangentW: vec3f = cross(normalW, tangentW) * tangent.w;
  fragmentInputs.pbr_vTBN = mat3x3f(tangentW, bitangentW, normalW);
#endif
#endif

#ifdef HAS_UV
  fragmentInputs.pbr_vUV0 = uv0;
#endif
}

struct pbrMaterialUniforms {
  // Material is unlit
  unlit: u32,

  // Base color map
  baseColorMapEnabled: u32,
  baseColorFactor: vec4f,

  normalMapEnabled : u32,
  normalScale: f32,  // #ifdef HAS_NORMALMAP

  emissiveMapEnabled: u32,
  emissiveFactor: vec3f, // #ifdef HAS_EMISSIVEMAP

  metallicRoughnessValues: vec2f,
  metallicRoughnessMapEnabled: u32,

  occlusionMapEnabled: i32,
  occlusionStrength: f32, // #ifdef HAS_OCCLUSIONMAP
  
  alphaCutoffEnabled: i32,
  alphaCutoff: f32, // #ifdef ALPHA_CUTOFF

  specularColorFactor: vec3f,
  specularIntensityFactor: f32,
  specularColorMapEnabled: i32,
  specularIntensityMapEnabled: i32,

  ior: f32,

  transmissionFactor: f32,
  transmissionMapEnabled: i32,

  thicknessFactor: f32,
  attenuationDistance: f32,
  attenuationColor: vec3f,

  clearcoatFactor: f32,
  clearcoatRoughnessFactor: f32,
  clearcoatMapEnabled: i32,
  clearcoatRoughnessMapEnabled: i32,

  sheenColorFactor: vec3f,
  sheenRoughnessFactor: f32,
  sheenColorMapEnabled: i32,
  sheenRoughnessMapEnabled: i32,

  iridescenceFactor: f32,
  iridescenceIor: f32,
  iridescenceThicknessRange: vec2f,
  iridescenceMapEnabled: i32,

  anisotropyStrength: f32,
  anisotropyRotation: f32,
  anisotropyDirection: vec2f,
  anisotropyMapEnabled: i32,

  emissiveStrength: f32,
  dispersion: f32,
  
  // IBL
  IBLenabled: i32,
  scaleIBLAmbient: vec2f, // #ifdef USE_IBL
  
  // debugging flags used for shader output of intermediate PBR variables
  // #ifdef PBR_DEBUG
  scaleDiffBaseMR: vec4f,
  scaleFGDSpec: vec4f,
  // #endif

  baseColorUVSet: i32,
  baseColorUVTransform: mat3x3f,
  metallicRoughnessUVSet: i32,
  metallicRoughnessUVTransform: mat3x3f,
  normalUVSet: i32,
  normalUVTransform: mat3x3f,
  occlusionUVSet: i32,
  occlusionUVTransform: mat3x3f,
  emissiveUVSet: i32,
  emissiveUVTransform: mat3x3f,
  specularColorUVSet: i32,
  specularColorUVTransform: mat3x3f,
  specularIntensityUVSet: i32,
  specularIntensityUVTransform: mat3x3f,
  transmissionUVSet: i32,
  transmissionUVTransform: mat3x3f,
  thicknessUVSet: i32,
  thicknessUVTransform: mat3x3f,
  clearcoatUVSet: i32,
  clearcoatUVTransform: mat3x3f,
  clearcoatRoughnessUVSet: i32,
  clearcoatRoughnessUVTransform: mat3x3f,
  clearcoatNormalUVSet: i32,
  clearcoatNormalUVTransform: mat3x3f,
  sheenColorUVSet: i32,
  sheenColorUVTransform: mat3x3f,
  sheenRoughnessUVSet: i32,
  sheenRoughnessUVTransform: mat3x3f,
  iridescenceUVSet: i32,
  iridescenceUVTransform: mat3x3f,
  iridescenceThicknessUVSet: i32,
  iridescenceThicknessUVTransform: mat3x3f,
  anisotropyUVSet: i32,
  anisotropyUVTransform: mat3x3f,

  bumpFactor: f32,
  bumpMapEnabled: i32,
  diffuseTransmissionFactor: f32,
  diffuseTransmissionMapEnabled: i32,
  diffuseTransmissionColorFactor: vec3f,
  diffuseTransmissionColorMapEnabled: i32,
  multiscatterColorFactor: vec3f,
  multiscatterColorMapEnabled: i32,
  scatterAnisotropy: f32,

  bumpUVSet: i32,
  bumpUVTransform: mat3x3f,
  diffuseTransmissionUVSet: i32,
  diffuseTransmissionUVTransform: mat3x3f,
  diffuseTransmissionColorUVSet: i32,
  diffuseTransmissionColorUVTransform: mat3x3f,
  multiscatterColorUVSet: i32,
  multiscatterColorUVTransform: mat3x3f,
}

@group(3) @binding(auto) var<uniform> pbrMaterial : pbrMaterialUniforms;

// Samplers
#ifdef HAS_BASECOLORMAP
@group(3) @binding(auto) var pbr_baseColorSampler: texture_2d<f32>;
@group(3) @binding(auto) var pbr_baseColorSamplerSampler: sampler;
#endif
#ifdef HAS_NORMALMAP
@group(3) @binding(auto) var pbr_normalSampler: texture_2d<f32>;
@group(3) @binding(auto) var pbr_normalSamplerSampler: sampler;
#endif
#ifdef HAS_EMISSIVEMAP
@group(3) @binding(auto) var pbr_emissiveSampler: texture_2d<f32>;
@group(3) @binding(auto) var pbr_emissiveSamplerSampler: sampler;
#endif
#ifdef HAS_METALROUGHNESSMAP
@group(3) @binding(auto) var pbr_metallicRoughnessSampler: texture_2d<f32>;
@group(3) @binding(auto) var pbr_metallicRoughnessSamplerSampler: sampler;
#endif
#ifdef HAS_OCCLUSIONMAP
@group(3) @binding(auto) var pbr_occlusionSampler: texture_2d<f32>;
@group(3) @binding(auto) var pbr_occlusionSamplerSampler: sampler;
#endif
#ifdef HAS_SPECULARCOLORMAP
@group(3) @binding(auto) var pbr_specularColorSampler: texture_2d<f32>;
@group(3) @binding(auto) var pbr_specularColorSamplerSampler: sampler;
#endif
#ifdef HAS_SPECULARINTENSITYMAP
@group(3) @binding(auto) var pbr_specularIntensitySampler: texture_2d<f32>;
@group(3) @binding(auto) var pbr_specularIntensitySamplerSampler: sampler;
#endif
#ifdef HAS_TRANSMISSIONMAP
@group(3) @binding(auto) var pbr_transmissionSampler: texture_2d<f32>;
@group(3) @binding(auto) var pbr_transmissionSamplerSampler: sampler;
#endif
#ifdef HAS_THICKNESSMAP
@group(3) @binding(auto) var pbr_thicknessSampler: texture_2d<f32>;
@group(3) @binding(auto) var pbr_thicknessSamplerSampler: sampler;
#endif
#ifdef HAS_CLEARCOATMAP
@group(3) @binding(auto) var pbr_clearcoatSampler: texture_2d<f32>;
@group(3) @binding(auto) var pbr_clearcoatSamplerSampler: sampler;
#endif
#ifdef HAS_CLEARCOATROUGHNESSMAP
@group(3) @binding(auto) var pbr_clearcoatRoughnessSampler: texture_2d<f32>;
@group(3) @binding(auto) var pbr_clearcoatRoughnessSamplerSampler: sampler;
#endif
#ifdef HAS_CLEARCOATNORMALMAP
@group(3) @binding(auto) var pbr_clearcoatNormalSampler: texture_2d<f32>;
@group(3) @binding(auto) var pbr_clearcoatNormalSamplerSampler: sampler;
#endif
#ifdef HAS_SHEENCOLORMAP
@group(3) @binding(auto) var pbr_sheenColorSampler: texture_2d<f32>;
@group(3) @binding(auto) var pbr_sheenColorSamplerSampler: sampler;
#endif
#ifdef HAS_SHEENROUGHNESSMAP
@group(3) @binding(auto) var pbr_sheenRoughnessSampler: texture_2d<f32>;
@group(3) @binding(auto) var pbr_sheenRoughnessSamplerSampler: sampler;
#endif
#ifdef HAS_IRIDESCENCEMAP
@group(3) @binding(auto) var pbr_iridescenceSampler: texture_2d<f32>;
@group(3) @binding(auto) var pbr_iridescenceSamplerSampler: sampler;
#endif
#ifdef HAS_IRIDESCENCETHICKNESSMAP
@group(3) @binding(auto) var pbr_iridescenceThicknessSampler: texture_2d<f32>;
@group(3) @binding(auto) var pbr_iridescenceThicknessSamplerSampler: sampler;
#endif
#ifdef HAS_ANISOTROPYMAP
@group(3) @binding(auto) var pbr_anisotropySampler: texture_2d<f32>;
@group(3) @binding(auto) var pbr_anisotropySamplerSampler: sampler;
#endif
#ifdef HAS_BUMPMAP
@group(3) @binding(auto) var pbr_bumpSampler: texture_2d<f32>;
@group(3) @binding(auto) var pbr_bumpSamplerSampler: sampler;
#endif
#ifdef HAS_DIFFUSETRANSMISSIONMAP
@group(3) @binding(auto) var pbr_diffuseTransmissionSampler: texture_2d<f32>;
@group(3) @binding(auto) var pbr_diffuseTransmissionSamplerSampler: sampler;
#endif
#ifdef HAS_DIFFUSETRANSMISSIONCOLORMAP
@group(3) @binding(auto) var pbr_diffuseTransmissionColorSampler: texture_2d<f32>;
@group(3) @binding(auto) var pbr_diffuseTransmissionColorSamplerSampler: sampler;
#endif
#ifdef HAS_MULTISCATTERCOLORMAP
@group(3) @binding(auto) var pbr_multiscatterColorSampler: texture_2d<f32>;
@group(3) @binding(auto) var pbr_multiscatterColorSamplerSampler: sampler;
#endif
// Encapsulate the various inputs used by the various functions in the shading equation
// We store values in this struct to simplify the integration of alternative implementations
// of the shading terms, outlined in the Readme.MD Appendix.
struct PBRInfo {
  NdotL: f32,                  // cos angle between normal and light direction
  NdotV: f32,                  // cos angle between normal and view direction
  NdotH: f32,                  // cos angle between normal and half vector
  LdotH: f32,                  // cos angle between light direction and half vector
  VdotH: f32,                  // cos angle between view direction and half vector
  perceptualRoughness: f32,    // roughness value, as authored by the model creator (input to shader)
  metalness: f32,              // metallic value at the surface
  reflectance0: vec3f,            // full reflectance color (normal incidence angle)
  reflectance90: vec3f,           // reflectance color at grazing angle
  alphaRoughness: f32,         // roughness mapped to a more linear change in the roughness (proposed by [2])
  diffuseColor: vec3f,            // color contribution from diffuse lighting
  specularColor: vec3f,           // color contribution from specular lighting
  n: vec3f,                       // normal at surface point
  v: vec3f,                       // vector from surface point to camera
  l: vec3f,                       // direction from the surface toward the current light
  h: vec3f                        // half vector between the current light and camera
};

const M_PI = 3.141592653589793;
const c_MinRoughness = 0.04;

// Widen sub-pixel specular lobes using the screen-space normal footprint.
// This is geometric specular antialiasing: the normal variance is converted
// into an additional squared perceptual roughness before evaluating BRDFs.
fn widenSpecularRoughness(perceptualRoughness: f32, normal: vec3f) -> f32 {
  let normalDerivativeX = dpdx(normal);
  let normalDerivativeY = dpdy(normal);
  let normalVariance =
    dot(normalDerivativeX, normalDerivativeX) +
    dot(normalDerivativeY, normalDerivativeY);
  let kernelRoughnessSquared = min(2.0 * normalVariance, 1.0);
  return clamp(
    sqrt(perceptualRoughness * perceptualRoughness + kernelRoughnessSquared),
    c_MinRoughness,
    1.0
  );
}

fn SRGBtoLINEAR(srgbIn: vec4f ) -> vec4f
{
  var linOut: vec3f = srgbIn.xyz;
#ifdef MANUAL_SRGB
  let bLess: vec3f = step(vec3f(0.04045), srgbIn.xyz);
  linOut = mix(
    srgbIn.xyz / vec3f(12.92),
    pow((srgbIn.xyz + vec3f(0.055)) / vec3f(1.055), vec3f(2.4)),
    bLess
  );
#ifdef SRGB_FAST_APPROXIMATION
  linOut = pow(srgbIn.xyz, vec3f(2.2));
#endif
#endif
  return vec4f(linOut, srgbIn.w);
}

fn getMaterialUV(uvSet: i32, uvTransform: mat3x3f) -> vec2f
{
  var baseUV = fragmentInputs.pbr_vUV0;
  if (uvSet == 1) {
    baseUV = fragmentInputs.pbr_vUV1;
  }
  return (uvTransform * vec3f(baseUV, 1.0)).xy;
}

// Build the tangent basis from interpolated attributes or screen-space derivatives.
fn getTBN(uv: vec2f) -> mat3x3f
{
  let pos_dx: vec3f = dpdx(fragmentInputs.pbr_vPosition);
  let pos_dy: vec3f = dpdy(fragmentInputs.pbr_vPosition);
  let tex_dx: vec3f = dpdx(vec3f(uv, 0.0));
  let tex_dy: vec3f = dpdy(vec3f(uv, 0.0));
  var t: vec3f = (tex_dy.y * pos_dx - tex_dx.y * pos_dy) / (tex_dx.x * tex_dy.y - tex_dy.x * tex_dx.y);

  var ng: vec3f = cross(pos_dy, pos_dx);
#ifdef HAS_NORMALS
  ng = normalize(fragmentInputs.pbr_vNormal);
#endif
  t = normalize(t - ng * dot(ng, t));
  var b: vec3f = normalize(cross(ng, t));
  var tbn: mat3x3f = mat3x3f(t, b, ng);
#ifdef HAS_TANGENTS
  tbn = fragmentInputs.pbr_vTBN;
#endif

  return tbn;
}

// Find the normal for this fragment, pulling either from a predefined normal map
// or from the interpolated mesh normal and tangent attributes.
fn getMappedNormal(
  normalSampler: texture_2d<f32>,
  normalSamplerBinding: sampler,
  tbn: mat3x3f,
  normalScale: f32,
  uv: vec2f
) -> vec3f
{
  let n = textureSample(normalSampler, normalSamplerBinding, uv).rgb;
  return normalize(tbn * ((2.0 * n - 1.0) * vec3f(normalScale, normalScale, 1.0)));
}

fn getNormal(tbn: mat3x3f, uv: vec2f) -> vec3f
{
  // The tbn matrix is linearly interpolated, so we need to re-normalize
  var n: vec3f = normalize(tbn[2].xyz);
#ifdef HAS_NORMALMAP
  n = getMappedNormal(
    pbr_normalSampler,
    pbr_normalSamplerSampler,
    tbn,
    pbrMaterial.normalScale,
    uv
  );
#endif

#ifdef HAS_BUMPMAP
  let bumpUV = getMaterialUV(pbrMaterial.bumpUVSet, pbrMaterial.bumpUVTransform);
  let bumpTexelSize = 1.0 / vec2f(textureDimensions(pbr_bumpSampler, 0));
  let bumpHeight = textureSample(pbr_bumpSampler, pbr_bumpSamplerSampler, bumpUV).r;
  let bumpGradient = vec2f(
    textureSample(
      pbr_bumpSampler,
      pbr_bumpSamplerSampler,
      bumpUV + vec2f(bumpTexelSize.x, 0.0)
    ).r - bumpHeight,
    textureSample(
      pbr_bumpSampler,
      pbr_bumpSamplerSampler,
      bumpUV + vec2f(0.0, bumpTexelSize.y)
    ).r - bumpHeight
  );
  n = normalize(n - pbrMaterial.bumpFactor *
    (tbn[0] * bumpGradient.x + tbn[1] * bumpGradient.y));
#endif

  return n;
}

fn getClearcoatNormal(tbn: mat3x3f, baseNormal: vec3f, uv: vec2f) -> vec3f
{
#ifdef HAS_CLEARCOATNORMALMAP
  return getMappedNormal(
    pbr_clearcoatNormalSampler,
    pbr_clearcoatNormalSamplerSampler,
    tbn,
    1.0,
    uv
  );
#else
  return baseNormal;
#endif
}

// Calculation of the lighting contribution from an optional Image Based Light source.
// Precomputed Environment Maps are required uniform inputs and are computed as outlined in [1].
// See our README.md on Environment Maps [3] for additional discussion.
#ifdef USE_IBL
fn getIBLContribution(pbrInfo: PBRInfo, n: vec3f, reflection: vec3f) -> vec3f
{
#ifdef USE_SCENE_ENVIRONMENT
  let maximumMipLevel = max(pbrScene.environmentMipCount - 1.0, 0.0);
  let rotationSine = sin(pbrScene.environmentRotation);
  let rotationCosine = cos(pbrScene.environmentRotation);
  let environmentRotation = mat2x2f(
    vec2f(rotationCosine, rotationSine),
    vec2f(-rotationSine, rotationCosine)
  );
  let rotatedNormal = environmentRotation * n.xz;
  let rotatedReflection = environmentRotation * reflection.xz;
  let environmentNormal = vec3f(rotatedNormal.x, n.y, rotatedNormal.y);
  let environmentReflection = vec3f(rotatedReflection.x, reflection.y, rotatedReflection.y);
#else
  let maximumMipLevel = 9.0;
  let environmentNormal = n;
  let environmentReflection = reflection;
#endif
  let lod = pbrInfo.perceptualRoughness * maximumMipLevel;
  // retrieve a scale and bias to F0. See [1], Figure 3
  let brdfSample = textureSampleLevel(
    pbr_brdfLUT,
    pbr_brdfLUTSampler,
    vec2f(pbrInfo.NdotV, 1.0 - pbrInfo.perceptualRoughness),
    0.0
  );
  let diffuseSample = textureSampleLevel(
    pbr_diffuseEnvSampler,
    pbr_diffuseEnvSamplerSampler,
    environmentNormal,
    0.0
  );
  var specularSample = textureSampleLevel(
    pbr_specularEnvSampler,
    pbr_specularEnvSamplerSampler,
    environmentReflection,
    0.0
  );
#ifdef USE_TEX_LOD
  specularSample = textureSampleLevel(
    pbr_specularEnvSampler,
    pbr_specularEnvSamplerSampler,
    environmentReflection,
    lod
  );
#endif

#ifdef USE_SCENE_ENVIRONMENT
  let brdf = brdfSample.rgb;
  let diffuseLight = diffuseSample.rgb;
  let specularLight = specularSample.rgb;
#else
  let brdf = SRGBtoLINEAR(brdfSample).rgb;
  let diffuseLight = SRGBtoLINEAR(diffuseSample).rgb;
  let specularLight = SRGBtoLINEAR(specularSample).rgb;
#endif

  let diffuse = diffuseLight * pbrInfo.diffuseColor * pbrMaterial.scaleIBLAmbient.x;
  let specular =
    specularLight * (pbrInfo.specularColor * brdf.x + brdf.y) * pbrMaterial.scaleIBLAmbient.y;

#ifdef USE_SCENE_ENVIRONMENT
  return (diffuse + specular) * max(pbrScene.environmentIntensity, 0.0);
#else
  return diffuse + specular;
#endif
}
#endif

// Basic Lambertian diffuse
// Implementation from Lambert's Photometria https://archive.org/details/lambertsphotome00lambgoog
// See also [1], Equation 1
fn diffuse(pbrInfo: PBRInfo) -> vec3<f32> {
  return pbrInfo.diffuseColor / M_PI;
}

// The following equation models the Fresnel reflectance term of the spec equation (aka F())
// Implementation of fresnel from [4], Equation 15
fn specularReflection(pbrInfo: PBRInfo) -> vec3<f32> {
  return pbrInfo.reflectance0 +
    (pbrInfo.reflectance90 - pbrInfo.reflectance0) *
    pow(clamp(1.0 - pbrInfo.VdotH, 0.0, 1.0), 5.0);
}

// This calculates the specular geometric attenuation (aka G()),
// where rougher material will reflect less light back to the viewer.
// This implementation is based on [1] Equation 4, and we adopt their modifications to
// alphaRoughness as input as originally proposed in [2].
fn geometricOcclusion(pbrInfo: PBRInfo) -> f32 {
  let NdotL: f32 = pbrInfo.NdotL;
  let NdotV: f32 = pbrInfo.NdotV;
  let r: f32 = pbrInfo.alphaRoughness;

  let attenuationL = 2.0 * NdotL / (NdotL + sqrt(r * r + (1.0 - r * r) * (NdotL * NdotL)));
  let attenuationV = 2.0 * NdotV / (NdotV + sqrt(r * r + (1.0 - r * r) * (NdotV * NdotV)));
  return attenuationL * attenuationV;
}

// The following equation(s) model the distribution of microfacet normals across
// the area being drawn (aka D())
// Implementation from "Average Irregularity Representation of a Roughened Surface
// for Ray Reflection" by T. S. Trowbridge, and K. P. Reitz
// Follows the distribution function recommended in the SIGGRAPH 2013 course notes
// from EPIC Games [1], Equation 3.
fn microfacetDistribution(pbrInfo: PBRInfo) -> f32 {
  let roughnessSq = pbrInfo.alphaRoughness * pbrInfo.alphaRoughness;
  let f = (pbrInfo.NdotH * roughnessSq - pbrInfo.NdotH) * pbrInfo.NdotH + 1.0;
  return roughnessSq / (M_PI * f * f);
}

fn maxComponent(value: vec3f) -> f32 {
  return max(max(value.r, value.g), value.b);
}

fn getDielectricF0(ior: f32) -> f32 {
  let clampedIor = max(ior, 1.0);
  let ratio = (clampedIor - 1.0) / (clampedIor + 1.0);
  return ratio * ratio;
}

fn normalizeDirection(direction: vec2f) -> vec2f {
  let directionLength = length(direction);
  if (directionLength > 0.0001) {
    return direction / directionLength;
  }

  return vec2f(1.0, 0.0);
}

fn rotateDirection(direction: vec2f, rotation: f32) -> vec2f {
  let s = sin(rotation);
  let c = cos(rotation);
  return vec2f(direction.x * c - direction.y * s, direction.x * s + direction.y * c);
}

fn encodeLinearSRGB(linearColor: vec3f) -> vec3f {
  let positiveColor = max(linearColor, vec3f(0.0));
  return select(
    positiveColor * 12.92,
    1.055 * pow(positiveColor, vec3f(1.0 / 2.4)) - 0.055,
    positiveColor > vec3f(0.0031308)
  );
}

fn toneMapKhronosPBRNeutral(inputColor: vec3f) -> vec3f {
  let startCompression = 0.76;
  let darkestChannel = min(inputColor.r, min(inputColor.g, inputColor.b));
  let offset = select(
    0.04,
    darkestChannel - 6.25 * darkestChannel * darkestChannel,
    darkestChannel < 0.08
  );
  var color = inputColor - vec3f(offset);
  let peak = maxComponent(color);
  if (peak < startCompression) {
    return color;
  }

  let compressionRange = 1.0 - startCompression;
  let compressedPeak = 1.0 - compressionRange * compressionRange /
    (peak + compressionRange - startCompression);
  color *= compressedPeak / max(peak, 0.0001);
  let desaturation = 1.0 - 1.0 / (0.15 * (peak - compressedPeak) + 1.0);
  return mix(color, vec3f(compressedPeak), desaturation);
}

fn applySceneColorManagement(sceneColor: vec3f) -> vec3f {
#ifdef USE_SCENE_COLOR_MANAGEMENT
  var color = max(sceneColor, vec3f(0.0)) * max(pbrScene.exposure, 0.0);
  if (pbrScene.toneMapMode == 1) {
    color /= vec3f(1.0) + color;
  } else if (pbrScene.toneMapMode == 2) {
    color = toneMapKhronosPBRNeutral(color);
  } else if (pbrScene.toneMapMode == 3) {
    color = clamp(
      (color * (2.51 * color + 0.03)) / (color * (2.43 * color + 0.59) + 0.14),
      vec3f(0.0),
      vec3f(1.0)
    );
  }
  if (pbrScene.outputEncoding == 0) {
    return color;
  }
  return encodeLinearSRGB(color);
#else
  return pow(max(sceneColor, vec3f(0.0)), vec3f(1.0 / 2.2));
#endif
}

fn dielectricSchlick(reflectance: f32, cosine: f32) -> f32 {
  return reflectance + (1.0 - reflectance) * pow(clamp(1.0 - cosine, 0.0, 1.0), 5.0);
}

fn evaluateIridescenceSensitivity(opticalPathDifference: f32, phaseShift: vec3f) -> vec3f {
  let phase = 2.0 * M_PI * opticalPathDifference * 1.0e-9;
  let sensitivity = vec3f(5.4856e-13, 4.4201e-13, 5.2481e-13);
  let position = vec3f(1.6810e6, 1.7953e6, 2.2084e6);
  let variance = vec3f(4.3278e9, 9.3046e9, 6.6121e9);
  var xyz = sensitivity * sqrt(2.0 * M_PI * variance) *
    cos(position * phase + phaseShift) * exp(-phase * phase * variance);
  xyz.x += 9.7470e-14 * sqrt(2.0 * M_PI * 4.5282e9) *
    cos(2.2399e6 * phase + phaseShift.x) * exp(-4.5282e9 * phase * phase);
  xyz /= 1.0685e-7;
  return mat3x3f(
    vec3f(3.2404542, -0.9692660, 0.0556434),
    vec3f(-1.5371385, 1.8760108, -0.2040259),
    vec3f(-0.4985314, 0.0415560, 1.0572252)
  ) * xyz;
}

fn getIridescenceTint(
  iridescence: f32,
  thickness: f32,
  NdotV: f32,
  baseReflectance: vec3f
) -> vec3f {
  if (iridescence <= 0.0 || thickness <= 0.0) {
    return baseReflectance;
  }

  let filmIor = max(pbrMaterial.iridescenceIor, 1.0);
  let sineSquared = (1.0 - NdotV * NdotV) / (filmIor * filmIor);
  let cosineSquared = 1.0 - sineSquared;
  if (cosineSquared <= 0.0) {
    return mix(baseReflectance, vec3f(1.0), iridescence);
  }
  let filmCosine = sqrt(cosineSquared);
  let firstInterfaceReflectance = dielectricSchlick(getDielectricF0(filmIor), NdotV);
  let transmittedEnergy = 1.0 - firstInterfaceReflectance;
  let squareRootReflectance = sqrt(clamp(baseReflectance, vec3f(0.0), vec3f(0.9999)));
  let baseIor = (vec3f(1.0) + squareRootReflectance) /
    (vec3f(1.0) - squareRootReflectance);
  var secondInterfaceF0 = (baseIor - vec3f(filmIor)) / (baseIor + vec3f(filmIor));
  secondInterfaceF0 *= secondInterfaceF0;
  let secondInterfaceReflectance = secondInterfaceF0 +
    (vec3f(1.0) - secondInterfaceF0) * pow(1.0 - filmCosine, 5.0);
  let phaseShift = vec3f(M_PI) + select(
    vec3f(0.0),
    vec3f(M_PI),
    baseIor < vec3f(filmIor)
  );
  let opticalPathDifference = 2.0 * filmIor * thickness * filmCosine;
  let combinedReflectance = clamp(
    firstInterfaceReflectance * secondInterfaceReflectance,
    vec3f(0.00001),
    vec3f(0.9999)
  );
  let recurringAmplitude = sqrt(combinedReflectance);
  let interfaceResponse = transmittedEnergy * transmittedEnergy * secondInterfaceReflectance /
    (vec3f(1.0) - combinedReflectance);
  var reflectedSpectrum = vec3f(firstInterfaceReflectance) + interfaceResponse;
  var harmonicAmplitude = interfaceResponse - vec3f(transmittedEnergy);
  for (var harmonic = 1; harmonic <= 2; harmonic++) {
    harmonicAmplitude *= recurringAmplitude;
    reflectedSpectrum += harmonicAmplitude * 2.0 * evaluateIridescenceSensitivity(
      f32(harmonic) * opticalPathDifference,
      f32(harmonic) * phaseShift
    );
  }
  return mix(baseReflectance, clamp(reflectedSpectrum, vec3f(0.0), vec3f(1.0)), iridescence);
}

fn getVolumeAttenuation(thickness: f32) -> vec3f {
  if (thickness <= 0.0) {
    return vec3f(1.0);
  }

  let attenuationCoefficient =
    -log(max(pbrMaterial.attenuationColor, vec3f(0.0001))) /
    max(pbrMaterial.attenuationDistance, 0.0001);
  return exp(-attenuationCoefficient * thickness);
}

// KHR_materials_volume_scatter is an active draft. This evaluates a local,
// thickness-aware single-scattering approximation rather than random walk.
fn getDiffuseTransmissionAttenuation(
  pbrInfo: PBRInfo,
  multiscatterColor: vec3f,
  thickness: f32
) -> vec3f {
  let volumeAttenuation = getVolumeAttenuation(thickness);
  let scatteringStrength = maxComponent(multiscatterColor);
  if (thickness <= 0.0 || scatteringStrength <= 0.0001) {
    return volumeAttenuation;
  }

  let anisotropy = clamp(pbrMaterial.scatterAnisotropy, -0.95, 0.95);
  let scatteringCosine = clamp(dot(-pbrInfo.v, pbrInfo.l), -1.0, 1.0);
  let phaseDenominator = max(
    1.0 + anisotropy * anisotropy - 2.0 * anisotropy * scatteringCosine,
    0.0001
  );
  let phaseWeight = clamp(
    (1.0 - anisotropy * anisotropy) / pow(phaseDenominator, 1.5),
    0.0,
    4.0
  );
  let scatteringDepth = thickness / max(pbrMaterial.attenuationDistance, 0.0001);
  let scatteringProbability = 1.0 - exp(-scatteringDepth);
  let scatteringColor = clamp(multiscatterColor, vec3f(0.0), vec3f(1.0));
  return mix(
    volumeAttenuation,
    volumeAttenuation * mix(vec3f(1.0), scatteringColor * phaseWeight, scatteringColor),
    scatteringProbability
  );
}

fn calculateDiffuseTransmissionLight(
  pbrInfo: PBRInfo,
  lightColor: vec3f,
  diffuseTransmissionColor: vec3f,
  diffuseTransmission: f32,
  multiscatterColor: vec3f,
  thickness: f32
) -> vec3f {
  let oppositeHemisphere = max(dot(-pbrInfo.n, pbrInfo.l), 0.0);
  if (oppositeHemisphere <= 0.0 || diffuseTransmission <= 0.0) {
    return vec3f(0.0);
  }

  let nonReflectedEnergy = vec3f(1.0) - clamp(pbrInfo.reflectance0, vec3f(0.0), vec3f(1.0));
  let attenuatedColor = getDiffuseTransmissionAttenuation(
    pbrInfo,
    multiscatterColor,
    thickness
  );
  return lightColor * diffuseTransmissionColor * nonReflectedEnergy *
    attenuatedColor * (diffuseTransmission * oppositeHemisphere / M_PI);
}

#ifdef USE_IBL
fn calculateDiffuseTransmissionIBL(
  pbrInfo: PBRInfo,
  diffuseTransmissionColor: vec3f,
  diffuseTransmission: f32,
  multiscatterColor: vec3f,
  thickness: f32
) -> vec3f {
  if (diffuseTransmission <= 0.0) {
    return vec3f(0.0);
  }

#ifdef USE_SCENE_ENVIRONMENT
  let rotationSine = sin(pbrScene.environmentRotation);
  let rotationCosine = cos(pbrScene.environmentRotation);
  let environmentRotation = mat2x2f(
    vec2f(rotationCosine, rotationSine),
    vec2f(-rotationSine, rotationCosine)
  );
  let rotatedNormal = environmentRotation * -pbrInfo.n.xz;
  let oppositeNormal = vec3f(rotatedNormal.x, -pbrInfo.n.y, rotatedNormal.y);
  let environmentColor = textureSampleLevel(
    pbr_diffuseEnvSampler,
    pbr_diffuseEnvSamplerSampler,
    oppositeNormal,
    0.0
  ).rgb * max(pbrScene.environmentIntensity, 0.0);
#else
  let environmentColor = SRGBtoLINEAR(
    textureSampleLevel(pbr_diffuseEnvSampler, pbr_diffuseEnvSamplerSampler, -pbrInfo.n, 0.0)
  ).rgb;
#endif
  let nonReflectedEnergy = vec3f(1.0) - clamp(pbrInfo.reflectance0, vec3f(0.0), vec3f(1.0));
  return environmentColor * diffuseTransmissionColor * nonReflectedEnergy *
    getDiffuseTransmissionAttenuation(pbrInfo, multiscatterColor, thickness) *
    diffuseTransmission * pbrMaterial.scaleIBLAmbient.x;
}
#endif

#ifdef USE_TRANSMISSION_FRAMEBUFFER
fn sampleTransmittedSceneColor(
  position: vec3f,
  normal: vec3f,
  viewDirection: vec3f,
  thickness: f32,
  perceptualRoughness: f32,
  indexOfRefraction: f32
) -> vec3f {
  let refractionDirection = refract(
    -viewDirection,
    normal,
    1.0 / max(indexOfRefraction, 1.0)
  );
  let refractedPosition = position + refractionDirection * thickness;
  let clipPosition = pbrScene.projectionMatrix *
    pbrScene.viewMatrix * vec4f(refractedPosition, 1.0);
  var textureCoordinate = clipPosition.xy / max(clipPosition.w, 0.0001) * 0.5 + 0.5;
  textureCoordinate.y = 1.0 - textureCoordinate.y;
  textureCoordinate = clamp(textureCoordinate, vec2f(0.001), vec2f(0.999));

  let blurRadius = perceptualRoughness * perceptualRoughness * 8.0 /
    max(pbrScene.framebufferSize, vec2f(1.0));
  var sceneColor = textureSampleLevel(
    pbr_transmissionFramebufferSampler,
    pbr_transmissionFramebufferSamplerSampler,
    textureCoordinate,
    0.0
  ).rgb * 0.4;
  sceneColor += textureSampleLevel(
    pbr_transmissionFramebufferSampler,
    pbr_transmissionFramebufferSamplerSampler,
    textureCoordinate + vec2f(blurRadius.x, 0.0),
    0.0
  ).rgb * 0.15;
  sceneColor += textureSampleLevel(
    pbr_transmissionFramebufferSampler,
    pbr_transmissionFramebufferSamplerSampler,
    textureCoordinate - vec2f(blurRadius.x, 0.0),
    0.0
  ).rgb * 0.15;
  sceneColor += textureSampleLevel(
    pbr_transmissionFramebufferSampler,
    pbr_transmissionFramebufferSamplerSampler,
    textureCoordinate + vec2f(0.0, blurRadius.y),
    0.0
  ).rgb * 0.15;
  sceneColor += textureSampleLevel(
    pbr_transmissionFramebufferSampler,
    pbr_transmissionFramebufferSamplerSampler,
    textureCoordinate - vec2f(0.0, blurRadius.y),
    0.0
  ).rgb * 0.15;
  return max(sceneColor, vec3f(0.0));
}

fn getTransmittedSceneColor(
  position: vec3f,
  normal: vec3f,
  viewDirection: vec3f,
  thickness: f32,
  perceptualRoughness: f32
) -> vec3f {
  if (pbrMaterial.dispersion <= 0.0) {
    return sampleTransmittedSceneColor(
      position,
      normal,
      viewDirection,
      thickness,
      perceptualRoughness,
      pbrMaterial.ior
    );
  }

  let halfSpread = (max(pbrMaterial.ior, 1.0) - 1.0) * 0.025 * pbrMaterial.dispersion;
  let indicesOfRefraction = max(
    vec3f(pbrMaterial.ior - halfSpread, pbrMaterial.ior, pbrMaterial.ior + halfSpread),
    vec3f(1.0)
  );
  return vec3f(
    sampleTransmittedSceneColor(
      position, normal, viewDirection, thickness, perceptualRoughness, indicesOfRefraction.r
    ).r,
    sampleTransmittedSceneColor(
      position, normal, viewDirection, thickness, perceptualRoughness, indicesOfRefraction.g
    ).g,
    sampleTransmittedSceneColor(
      position, normal, viewDirection, thickness, perceptualRoughness, indicesOfRefraction.b
    ).b
  );
}
#endif

fn createClearcoatPBRInfo(
  basePBRInfo: PBRInfo,
  clearcoatNormal: vec3f,
  clearcoatRoughness: f32
) -> PBRInfo {
  let perceptualRoughness = clamp(clearcoatRoughness, c_MinRoughness, 1.0);
  let alphaRoughness = perceptualRoughness * perceptualRoughness;
  let NdotV = clamp(abs(dot(clearcoatNormal, basePBRInfo.v)), 0.001, 1.0);

  return PBRInfo(
    basePBRInfo.NdotL,
    NdotV,
    basePBRInfo.NdotH,
    basePBRInfo.LdotH,
    basePBRInfo.VdotH,
    perceptualRoughness,
    0.0,
    vec3f(0.04),
    vec3f(1.0),
    alphaRoughness,
    vec3f(0.0),
    vec3f(0.04),
    clearcoatNormal,
    basePBRInfo.v,
    basePBRInfo.l,
    basePBRInfo.h
  );
}

fn calculateClearcoatContribution(
  pbrInfo: PBRInfo,
  lightColor: vec3f,
  clearcoatNormal: vec3f,
  clearcoatFactor: f32,
  clearcoatRoughness: f32
) -> vec3f {
  if (clearcoatFactor <= 0.0) {
    return vec3f(0.0);
  }

  let clearcoatPBRInfo = createClearcoatPBRInfo(pbrInfo, clearcoatNormal, clearcoatRoughness);
  return calculateFinalColor(clearcoatPBRInfo, lightColor) * clearcoatFactor;
}

#ifdef USE_IBL
fn calculateClearcoatIBLContribution(
  pbrInfo: PBRInfo,
  clearcoatNormal: vec3f,
  reflection: vec3f,
  clearcoatFactor: f32,
  clearcoatRoughness: f32
) -> vec3f {
  if (clearcoatFactor <= 0.0) {
    return vec3f(0.0);
  }

  let clearcoatPBRInfo = createClearcoatPBRInfo(pbrInfo, clearcoatNormal, clearcoatRoughness);
  return getIBLContribution(clearcoatPBRInfo, clearcoatNormal, reflection) * clearcoatFactor;
}
#endif

fn calculateSheenContribution(
  pbrInfo: PBRInfo,
  lightColor: vec3f,
  sheenColor: vec3f,
  sheenRoughness: f32
) -> vec3f {
  if (maxComponent(sheenColor) <= 0.0) {
    return vec3f(0.0);
  }

  let alpha = max(sheenRoughness * sheenRoughness, 0.0001);
  let inverseAlpha = 1.0 / alpha;
  let sineSquared = max(1.0 - pbrInfo.NdotH * pbrInfo.NdotH, 0.0);
  let distribution = (2.0 + inverseAlpha) * pow(sineSquared, inverseAlpha * 0.5) /
    (2.0 * M_PI);
  let visibility = 1.0 / max(
    4.0 * (pbrInfo.NdotL + pbrInfo.NdotV - pbrInfo.NdotL * pbrInfo.NdotV),
    0.0001
  );
  return pbrInfo.NdotL * lightColor * sheenColor * distribution * visibility *
    (1.0 - pbrInfo.metalness);
}

fn calculateAnisotropicLightColor(
  pbrInfo: PBRInfo,
  lightColor: vec3f,
  anisotropyTangent: vec3f,
  anisotropyStrength: f32
) -> vec3f {
  if (anisotropyStrength <= 0.0) {
    return calculateFinalColor(pbrInfo, lightColor);
  }

  let anisotropyBitangent = normalize(cross(pbrInfo.n, anisotropyTangent));
  let tangentRoughness = mix(
    pbrInfo.alphaRoughness,
    1.0,
    anisotropyStrength * anisotropyStrength
  );
  let bitangentRoughness = clamp(pbrInfo.alphaRoughness, 0.001, 1.0);
  let roughnessProduct = tangentRoughness * bitangentRoughness;
  let distributionVector = vec3f(
    bitangentRoughness * dot(anisotropyTangent, pbrInfo.h),
    tangentRoughness * dot(anisotropyBitangent, pbrInfo.h),
    roughnessProduct * pbrInfo.NdotH
  );
  let distributionFactor = roughnessProduct /
    max(dot(distributionVector, distributionVector), 0.000001);
  let distribution = roughnessProduct * distributionFactor * distributionFactor / M_PI;
  let viewMask = pbrInfo.NdotL * length(vec3f(
    tangentRoughness * dot(anisotropyTangent, pbrInfo.v),
    bitangentRoughness * dot(anisotropyBitangent, pbrInfo.v),
    pbrInfo.NdotV
  ));
  let lightMask = pbrInfo.NdotV * length(vec3f(
    tangentRoughness * dot(anisotropyTangent, pbrInfo.l),
    bitangentRoughness * dot(anisotropyBitangent, pbrInfo.l),
    pbrInfo.NdotL
  ));
  let visibility = clamp(0.5 / max(viewMask + lightMask, 0.000001), 0.0, 1.0);
  let fresnel = specularReflection(pbrInfo);
  let diffuseContribution = (vec3f(1.0) - fresnel) * diffuse(pbrInfo);
  return pbrInfo.NdotL * lightColor *
    (diffuseContribution + fresnel * distribution * visibility);
}

fn getAnisotropicReflection(
  pbrInfo: PBRInfo,
  anisotropyTangent: vec3f,
  anisotropyStrength: f32
) -> vec3f {
  if (anisotropyStrength <= 0.0) {
    return -normalize(reflect(pbrInfo.v, pbrInfo.n));
  }
  let anisotropyBitangent = normalize(cross(pbrInfo.n, anisotropyTangent));
  var anisotropicNormal = normalize(cross(anisotropyBitangent, pbrInfo.v));
  anisotropicNormal = normalize(cross(anisotropicNormal, anisotropyBitangent));
  let bend = anisotropyStrength * (1.0 - pbrInfo.perceptualRoughness);
  return -normalize(reflect(pbrInfo.v, normalize(mix(pbrInfo.n, anisotropicNormal, bend))));
}

fn calculateMaterialLightColor(
  pbrInfo: PBRInfo,
  lightColor: vec3f,
  clearcoatNormal: vec3f,
  clearcoatFactor: f32,
  clearcoatRoughness: f32,
  sheenColor: vec3f,
  sheenRoughness: f32,
  anisotropyTangent: vec3f,
  anisotropyStrength: f32
) -> vec3f {
  var color = calculateAnisotropicLightColor(
    pbrInfo,
    lightColor,
    anisotropyTangent,
    anisotropyStrength
  );
  color += calculateClearcoatContribution(
    pbrInfo,
    lightColor,
    clearcoatNormal,
    clearcoatFactor,
    clearcoatRoughness
  );
  color += calculateSheenContribution(pbrInfo, lightColor, sheenColor, sheenRoughness);
  return color;
}

fn PBRInfo_setAmbientLight(pbrInfo: ptr<function, PBRInfo>) {
  (*pbrInfo).NdotL = 1.0;
  (*pbrInfo).NdotH = 0.0;
  (*pbrInfo).LdotH = 0.0;
  (*pbrInfo).VdotH = 1.0;
  (*pbrInfo).l = (*pbrInfo).n;
  (*pbrInfo).h = (*pbrInfo).n;
}

fn PBRInfo_setDirectionalLight(pbrInfo: ptr<function, PBRInfo>, lightDirection: vec3<f32>) {
  let n = (*pbrInfo).n;
  let v = (*pbrInfo).v;
  let l = normalize(lightDirection);             // Vector from surface point to light
  let h = normalize(l + v);                      // Half vector between both l and v

  (*pbrInfo).NdotL = clamp(dot(n, l), 0.001, 1.0);
  (*pbrInfo).NdotH = clamp(dot(n, h), 0.0, 1.0);
  (*pbrInfo).LdotH = clamp(dot(l, h), 0.0, 1.0);
  (*pbrInfo).VdotH = clamp(dot(v, h), 0.0, 1.0);
  (*pbrInfo).l = l;
  (*pbrInfo).h = h;
}

fn PBRInfo_setPointLight(pbrInfo: ptr<function, PBRInfo>, pointLight: PointLight) {
  let light_direction = normalize(pointLight.position - fragmentInputs.pbr_vPosition);
  PBRInfo_setDirectionalLight(pbrInfo, light_direction);
}

fn PBRInfo_setSpotLight(pbrInfo: ptr<function, PBRInfo>, spotLight: SpotLight) {
  let light_direction = normalize(spotLight.position - fragmentInputs.pbr_vPosition);
  PBRInfo_setDirectionalLight(pbrInfo, light_direction);
}

fn calculateFinalColor(pbrInfo: PBRInfo, lightColor: vec3<f32>) -> vec3<f32> {
  // Calculate the shading terms for the microfacet specular shading model
  let F = specularReflection(pbrInfo);
  let G = geometricOcclusion(pbrInfo);
  let D = microfacetDistribution(pbrInfo);

  // Calculation of analytical lighting contribution
  let diffuseContrib = (1.0 - F) * diffuse(pbrInfo);
  let specContrib = F * G * D / (4.0 * pbrInfo.NdotL * pbrInfo.NdotV);
  // Obtain final intensity as reflectance (BRDF) scaled by the energy of the light (cosine law)
  return pbrInfo.NdotL * lightColor * (diffuseContrib + specContrib);
}

fn pbr_filterColor(vertexColor: vec4<f32>) -> vec4<f32> {
  let baseColorUV = getMaterialUV(pbrMaterial.baseColorUVSet, pbrMaterial.baseColorUVTransform);
  let metallicRoughnessUV = getMaterialUV(
    pbrMaterial.metallicRoughnessUVSet,
    pbrMaterial.metallicRoughnessUVTransform
  );
  let normalUV = getMaterialUV(pbrMaterial.normalUVSet, pbrMaterial.normalUVTransform);
  let occlusionUV = getMaterialUV(pbrMaterial.occlusionUVSet, pbrMaterial.occlusionUVTransform);
  let emissiveUV = getMaterialUV(pbrMaterial.emissiveUVSet, pbrMaterial.emissiveUVTransform);
  let specularColorUV = getMaterialUV(
    pbrMaterial.specularColorUVSet,
    pbrMaterial.specularColorUVTransform
  );
  let specularIntensityUV = getMaterialUV(
    pbrMaterial.specularIntensityUVSet,
    pbrMaterial.specularIntensityUVTransform
  );
  let transmissionUV = getMaterialUV(
    pbrMaterial.transmissionUVSet,
    pbrMaterial.transmissionUVTransform
  );
  let thicknessUV = getMaterialUV(pbrMaterial.thicknessUVSet, pbrMaterial.thicknessUVTransform);
  let clearcoatUV = getMaterialUV(pbrMaterial.clearcoatUVSet, pbrMaterial.clearcoatUVTransform);
  let clearcoatRoughnessUV = getMaterialUV(
    pbrMaterial.clearcoatRoughnessUVSet,
    pbrMaterial.clearcoatRoughnessUVTransform
  );
  let clearcoatNormalUV = getMaterialUV(
    pbrMaterial.clearcoatNormalUVSet,
    pbrMaterial.clearcoatNormalUVTransform
  );
  let sheenColorUV = getMaterialUV(
    pbrMaterial.sheenColorUVSet,
    pbrMaterial.sheenColorUVTransform
  );
  let sheenRoughnessUV = getMaterialUV(
    pbrMaterial.sheenRoughnessUVSet,
    pbrMaterial.sheenRoughnessUVTransform
  );
  let iridescenceUV = getMaterialUV(
    pbrMaterial.iridescenceUVSet,
    pbrMaterial.iridescenceUVTransform
  );
  let iridescenceThicknessUV = getMaterialUV(
    pbrMaterial.iridescenceThicknessUVSet,
    pbrMaterial.iridescenceThicknessUVTransform
  );
  let anisotropyUV = getMaterialUV(
    pbrMaterial.anisotropyUVSet,
    pbrMaterial.anisotropyUVTransform
  );
  let diffuseTransmissionUV = getMaterialUV(
    pbrMaterial.diffuseTransmissionUVSet,
    pbrMaterial.diffuseTransmissionUVTransform
  );
  let diffuseTransmissionColorUV = getMaterialUV(
    pbrMaterial.diffuseTransmissionColorUVSet,
    pbrMaterial.diffuseTransmissionColorUVTransform
  );
  let multiscatterColorUV = getMaterialUV(
    pbrMaterial.multiscatterColorUVSet,
    pbrMaterial.multiscatterColorUVTransform
  );

  // The albedo may be defined from a base texture or a flat color
  var baseColor: vec4<f32> = pbrMaterial.baseColorFactor * vertexColor;
  #ifdef HAS_BASECOLORMAP
  baseColor = SRGBtoLINEAR(
    textureSample(pbr_baseColorSampler, pbr_baseColorSamplerSampler, baseColorUV)
  ) * pbrMaterial.baseColorFactor * vertexColor;
  #endif

  #ifdef ALPHA_CUTOFF
  if (baseColor.a < pbrMaterial.alphaCutoff) {
    discard;
  }
  #endif

  var color = vec3<f32>(0.0, 0.0, 0.0);
  var transmission = 0.0;

  if (pbrMaterial.unlit != 0u) {
    color = baseColor.rgb;
  } else {
    // Metallic and Roughness material properties are packed together
    // In glTF, these factors can be specified by fixed scalar values
    // or from a metallic-roughness map
    var perceptualRoughness = pbrMaterial.metallicRoughnessValues.y;
    var metallic = pbrMaterial.metallicRoughnessValues.x;
    #ifdef HAS_METALROUGHNESSMAP
    // Roughness is stored in the 'g' channel, metallic is stored in the 'b' channel.
    // This layout intentionally reserves the 'r' channel for (optional) occlusion map data
    let mrSample = textureSample(
      pbr_metallicRoughnessSampler,
      pbr_metallicRoughnessSamplerSampler,
      metallicRoughnessUV
    );
    perceptualRoughness = mrSample.g * perceptualRoughness;
    metallic = mrSample.b * metallic;
    #endif
    perceptualRoughness = clamp(perceptualRoughness, c_MinRoughness, 1.0);
    metallic = clamp(metallic, 0.0, 1.0);
    let tbn = getTBN(normalUV);
    let n = getNormal(tbn, normalUV);                          // normal at surface point
    perceptualRoughness = widenSpecularRoughness(perceptualRoughness, n);
    let v = normalize(pbrProjection.camera - fragmentInputs.pbr_vPosition);  // Vector from surface point to camera
    let NdotV = clamp(abs(dot(n, v)), 0.001, 1.0);
    var useExtendedPBR = false;
    #ifdef USE_MATERIAL_EXTENSIONS
    useExtendedPBR =
      pbrMaterial.specularColorMapEnabled != 0 ||
      pbrMaterial.specularIntensityMapEnabled != 0 ||
      abs(pbrMaterial.specularIntensityFactor - 1.0) > 0.0001 ||
      maxComponent(abs(pbrMaterial.specularColorFactor - vec3f(1.0))) > 0.0001 ||
      abs(pbrMaterial.ior - 1.5) > 0.0001 ||
      pbrMaterial.dispersion > 0.0001 ||
      pbrMaterial.transmissionMapEnabled != 0 ||
      pbrMaterial.transmissionFactor > 0.0001 ||
      pbrMaterial.diffuseTransmissionMapEnabled != 0 ||
      pbrMaterial.diffuseTransmissionColorMapEnabled != 0 ||
      pbrMaterial.diffuseTransmissionFactor > 0.0001 ||
      pbrMaterial.multiscatterColorMapEnabled != 0 ||
      maxComponent(pbrMaterial.multiscatterColorFactor) > 0.0001 ||
      pbrMaterial.clearcoatMapEnabled != 0 ||
      pbrMaterial.clearcoatRoughnessMapEnabled != 0 ||
      pbrMaterial.clearcoatFactor > 0.0001 ||
      pbrMaterial.clearcoatRoughnessFactor > 0.0001 ||
      pbrMaterial.sheenColorMapEnabled != 0 ||
      pbrMaterial.sheenRoughnessMapEnabled != 0 ||
      maxComponent(pbrMaterial.sheenColorFactor) > 0.0001 ||
      pbrMaterial.sheenRoughnessFactor > 0.0001 ||
      pbrMaterial.iridescenceMapEnabled != 0 ||
      pbrMaterial.iridescenceFactor > 0.0001 ||
      abs(pbrMaterial.iridescenceIor - 1.3) > 0.0001 ||
      abs(pbrMaterial.iridescenceThicknessRange.x - 100.0) > 0.0001 ||
      abs(pbrMaterial.iridescenceThicknessRange.y - 400.0) > 0.0001 ||
      pbrMaterial.anisotropyMapEnabled != 0 ||
      pbrMaterial.anisotropyStrength > 0.0001 ||
      abs(pbrMaterial.anisotropyRotation) > 0.0001 ||
      length(pbrMaterial.anisotropyDirection - vec2f(1.0, 0.0)) > 0.0001;
    #endif

    if (!useExtendedPBR) {
      let alphaRoughness = perceptualRoughness * perceptualRoughness;

      let f0 = vec3<f32>(0.04);
      var diffuseColor = baseColor.rgb * (vec3<f32>(1.0) - f0);
      diffuseColor *= 1.0 - metallic;
      let specularColor = mix(f0, baseColor.rgb, metallic);

      let reflectance = max(max(specularColor.r, specularColor.g), specularColor.b);
      let reflectance90 = clamp(reflectance * 25.0, 0.0, 1.0);
      let specularEnvironmentR0 = specularColor;
      let specularEnvironmentR90 = vec3<f32>(1.0, 1.0, 1.0) * reflectance90;
      let reflection = -normalize(reflect(v, n));

      var pbrInfo = PBRInfo(
        0.0, // NdotL
        NdotV,
        0.0, // NdotH
        0.0, // LdotH
        0.0, // VdotH
        perceptualRoughness,
        metallic,
        specularEnvironmentR0,
        specularEnvironmentR90,
        alphaRoughness,
        diffuseColor,
        specularColor,
        n,
        v,
        n,
        n
      );

      #ifdef USE_LIGHTS
      PBRInfo_setAmbientLight(&pbrInfo);
      color += calculateFinalColor(pbrInfo, lighting.ambientColor);

      for (var i = 0; i < lighting.directionalLightCount; i++) {
        if (i < lighting.directionalLightCount) {
          PBRInfo_setDirectionalLight(&pbrInfo, lighting_getDirectionalLight(i).direction);
          color += calculateFinalColor(pbrInfo, lighting_getDirectionalLight(i).color);
        }
      }

      for (var i = 0; i < lighting.pointLightCount; i++) {
        if (i < lighting.pointLightCount) {
          PBRInfo_setPointLight(&pbrInfo, lighting_getPointLight(i));
          let attenuation = getPointLightAttenuation(
            lighting_getPointLight(i),
            distance(lighting_getPointLight(i).position, fragmentInputs.pbr_vPosition)
          );
          color += calculateFinalColor(pbrInfo, lighting_getPointLight(i).color / attenuation);
        }
      }

      for (var i = 0; i < lighting.spotLightCount; i++) {
        if (i < lighting.spotLightCount) {
          PBRInfo_setSpotLight(&pbrInfo, lighting_getSpotLight(i));
          let attenuation = getSpotLightAttenuation(
            lighting_getSpotLight(i),
            fragmentInputs.pbr_vPosition
          );
          color += calculateFinalColor(pbrInfo, lighting_getSpotLight(i).color / attenuation);
        }
      }
      #endif

      #ifdef USE_IBL
      if (pbrMaterial.IBLenabled != 0) {
        color += getIBLContribution(pbrInfo, n, reflection);
      }
      #endif

      #ifdef HAS_OCCLUSIONMAP
      if (pbrMaterial.occlusionMapEnabled != 0) {
        let ao = textureSample(pbr_occlusionSampler, pbr_occlusionSamplerSampler, occlusionUV).r;
        color = mix(color, color * ao, pbrMaterial.occlusionStrength);
      }
      #endif

      var emissive = pbrMaterial.emissiveFactor;
      #ifdef HAS_EMISSIVEMAP
      if (pbrMaterial.emissiveMapEnabled != 0u) {
        emissive *= SRGBtoLINEAR(
          textureSample(pbr_emissiveSampler, pbr_emissiveSamplerSampler, emissiveUV)
        ).rgb;
      }
      #endif
      color += emissive * pbrMaterial.emissiveStrength;

      #ifdef PBR_DEBUG
      color = mix(color, baseColor.rgb, pbrMaterial.scaleDiffBaseMR.y);
      color = mix(color, vec3<f32>(metallic), pbrMaterial.scaleDiffBaseMR.z);
      color = mix(color, vec3<f32>(perceptualRoughness), pbrMaterial.scaleDiffBaseMR.w);
      #endif

      return vec4<f32>(applySceneColorManagement(color), baseColor.a);
    }

    var specularIntensity = pbrMaterial.specularIntensityFactor;
    #ifdef HAS_SPECULARINTENSITYMAP
    if (pbrMaterial.specularIntensityMapEnabled != 0) {
      specularIntensity *= textureSample(
        pbr_specularIntensitySampler,
        pbr_specularIntensitySamplerSampler,
        specularIntensityUV
      ).a;
    }
    #endif

    var specularFactor = pbrMaterial.specularColorFactor;
    #ifdef HAS_SPECULARCOLORMAP
    if (pbrMaterial.specularColorMapEnabled != 0) {
      specularFactor *= SRGBtoLINEAR(
        textureSample(
          pbr_specularColorSampler,
          pbr_specularColorSamplerSampler,
          specularColorUV
        )
      ).rgb;
    }
    #endif

    transmission = pbrMaterial.transmissionFactor;
    #ifdef HAS_TRANSMISSIONMAP
    if (pbrMaterial.transmissionMapEnabled != 0) {
      transmission *= textureSample(
        pbr_transmissionSampler,
        pbr_transmissionSamplerSampler,
        transmissionUV
      ).r;
    }
    #endif
    transmission = clamp(transmission * (1.0 - metallic), 0.0, 1.0);
    var thickness = max(pbrMaterial.thicknessFactor, 0.0);
    #ifdef HAS_THICKNESSMAP
    thickness *= textureSample(
      pbr_thicknessSampler,
      pbr_thicknessSamplerSampler,
      thicknessUV
    ).g;
    #endif

    var diffuseTransmission = clamp(pbrMaterial.diffuseTransmissionFactor, 0.0, 1.0);
    #ifdef HAS_DIFFUSETRANSMISSIONMAP
    if (pbrMaterial.diffuseTransmissionMapEnabled != 0) {
      diffuseTransmission *= textureSample(
        pbr_diffuseTransmissionSampler,
        pbr_diffuseTransmissionSamplerSampler,
        diffuseTransmissionUV
      ).a;
    }
    #endif
    diffuseTransmission *= (1.0 - metallic) * (1.0 - transmission);
    var diffuseTransmissionColor = pbrMaterial.diffuseTransmissionColorFactor;
    #ifdef HAS_DIFFUSETRANSMISSIONCOLORMAP
    if (pbrMaterial.diffuseTransmissionColorMapEnabled != 0) {
      diffuseTransmissionColor *= SRGBtoLINEAR(
        textureSample(
          pbr_diffuseTransmissionColorSampler,
          pbr_diffuseTransmissionColorSamplerSampler,
          diffuseTransmissionColorUV
        )
      ).rgb;
    }
    #endif
    var multiscatterColor = pbrMaterial.multiscatterColorFactor;
    #ifdef HAS_MULTISCATTERCOLORMAP
    if (pbrMaterial.multiscatterColorMapEnabled != 0) {
      multiscatterColor *= SRGBtoLINEAR(
        textureSample(
          pbr_multiscatterColorSampler,
          pbr_multiscatterColorSamplerSampler,
          multiscatterColorUV
        )
      ).rgb;
    }
    #endif

    var clearcoatFactor = pbrMaterial.clearcoatFactor;
    var clearcoatRoughness = pbrMaterial.clearcoatRoughnessFactor;
    #ifdef HAS_CLEARCOATMAP
    if (pbrMaterial.clearcoatMapEnabled != 0) {
      clearcoatFactor *= textureSample(
        pbr_clearcoatSampler,
        pbr_clearcoatSamplerSampler,
        clearcoatUV
      ).r;
    }
    #endif
    #ifdef HAS_CLEARCOATROUGHNESSMAP
    if (pbrMaterial.clearcoatRoughnessMapEnabled != 0) {
      clearcoatRoughness *= textureSample(
        pbr_clearcoatRoughnessSampler,
        pbr_clearcoatRoughnessSamplerSampler,
        clearcoatRoughnessUV
      ).g;
    }
    #endif
    clearcoatFactor = clamp(clearcoatFactor, 0.0, 1.0);
    clearcoatRoughness = clamp(clearcoatRoughness, c_MinRoughness, 1.0);
    let clearcoatNormal = getClearcoatNormal(getTBN(clearcoatNormalUV), n, clearcoatNormalUV);
    clearcoatRoughness = widenSpecularRoughness(clearcoatRoughness, clearcoatNormal);

    var sheenColor = pbrMaterial.sheenColorFactor;
    var sheenRoughness = pbrMaterial.sheenRoughnessFactor;
    #ifdef HAS_SHEENCOLORMAP
    if (pbrMaterial.sheenColorMapEnabled != 0) {
      sheenColor *= SRGBtoLINEAR(
        textureSample(
          pbr_sheenColorSampler,
          pbr_sheenColorSamplerSampler,
          sheenColorUV
        )
      ).rgb;
    }
    #endif
    #ifdef HAS_SHEENROUGHNESSMAP
    if (pbrMaterial.sheenRoughnessMapEnabled != 0) {
      sheenRoughness *= textureSample(
        pbr_sheenRoughnessSampler,
        pbr_sheenRoughnessSamplerSampler,
        sheenRoughnessUV
      ).a;
    }
    #endif
    sheenRoughness = clamp(sheenRoughness, c_MinRoughness, 1.0);

    var iridescence = pbrMaterial.iridescenceFactor;
    #ifdef HAS_IRIDESCENCEMAP
    if (pbrMaterial.iridescenceMapEnabled != 0) {
      iridescence *= textureSample(
        pbr_iridescenceSampler,
        pbr_iridescenceSamplerSampler,
        iridescenceUV
      ).r;
    }
    #endif
    iridescence = clamp(iridescence, 0.0, 1.0);
    var iridescenceThickness = mix(
      pbrMaterial.iridescenceThicknessRange.x,
      pbrMaterial.iridescenceThicknessRange.y,
      0.5
    );
    #ifdef HAS_IRIDESCENCETHICKNESSMAP
    iridescenceThickness = mix(
      pbrMaterial.iridescenceThicknessRange.x,
      pbrMaterial.iridescenceThicknessRange.y,
      textureSample(
        pbr_iridescenceThicknessSampler,
        pbr_iridescenceThicknessSamplerSampler,
        iridescenceThicknessUV
      ).g
    );
    #endif

    var anisotropyStrength = clamp(pbrMaterial.anisotropyStrength, 0.0, 1.0);
    var anisotropyDirection = normalizeDirection(pbrMaterial.anisotropyDirection);
    #ifdef HAS_ANISOTROPYMAP
    if (pbrMaterial.anisotropyMapEnabled != 0) {
      let anisotropySample = textureSample(
        pbr_anisotropySampler,
        pbr_anisotropySamplerSampler,
        anisotropyUV
      ).rgb;
      anisotropyStrength *= anisotropySample.b;
      let mappedDirection = anisotropySample.rg * 2.0 - 1.0;
      if (length(mappedDirection) > 0.0001) {
        anisotropyDirection = normalize(mappedDirection);
      }
    }
    #endif
    anisotropyDirection = rotateDirection(anisotropyDirection, pbrMaterial.anisotropyRotation);
    var anisotropyTangent =
      normalize(tbn[0] * anisotropyDirection.x + tbn[1] * anisotropyDirection.y);
    if (length(anisotropyTangent) < 0.0001) {
      anisotropyTangent = normalize(tbn[0]);
    }
    // Roughness is authored as perceptual roughness; as is convention,
    // convert to material roughness by squaring the perceptual roughness [2].
    let alphaRoughness = perceptualRoughness * perceptualRoughness;

    let dielectricF0 = getDielectricF0(pbrMaterial.ior);
    var dielectricSpecularF0 = min(
      vec3f(dielectricF0) * specularFactor * specularIntensity,
      vec3f(1.0)
    );
    dielectricSpecularF0 = getIridescenceTint(
      iridescence,
      iridescenceThickness,
      NdotV,
      dielectricSpecularF0
    );
    var diffuseColor = baseColor.rgb * (vec3f(1.0) - dielectricSpecularF0);
    diffuseColor *= (1.0 - metallic) * (1.0 - transmission) * (1.0 - diffuseTransmission);
    var specularColor = mix(dielectricSpecularF0, baseColor.rgb, metallic);

    let clearcoatViewFresnel = dielectricSchlick(
      0.04,
      clamp(abs(dot(clearcoatNormal, v)), 0.0, 1.0)
    );
    let sheenDirectionalAlbedo = maxComponent(sheenColor) *
      (0.157 + 0.343 * (1.0 - NdotV)) * (1.0 - sheenRoughness * 0.5);
    let baseLayerEnergy = (1.0 - clearcoatFactor * clearcoatViewFresnel) *
      (1.0 - clamp(sheenDirectionalAlbedo, 0.0, 1.0));
    diffuseColor *= baseLayerEnergy;
    specularColor *= baseLayerEnergy;

    // Compute reflectance.
    let reflectance = max(max(specularColor.r, specularColor.g), specularColor.b);

    // For typical incident reflectance range (between 4% to 100%) set the grazing
    // reflectance to 100% for typical fresnel effect.
    // For very low reflectance range on highly diffuse objects (below 4%),
    // incrementally reduce grazing reflectance to 0%.
    let reflectance90 = clamp(reflectance * 25.0, 0.0, 1.0);
    let specularEnvironmentR0 = specularColor;
    let specularEnvironmentR90 = vec3<f32>(1.0, 1.0, 1.0) * reflectance90;
    let reflection = -normalize(reflect(v, n));

    var pbrInfo = PBRInfo(
      0.0, // NdotL
      NdotV,
      0.0, // NdotH
      0.0, // LdotH
      0.0, // VdotH
      perceptualRoughness,
      metallic,
      specularEnvironmentR0,
      specularEnvironmentR90,
      alphaRoughness,
      diffuseColor,
      specularColor,
      n,
      v,
      n,
      n
    );

    #ifdef USE_LIGHTS
    // Apply ambient light
    PBRInfo_setAmbientLight(&pbrInfo);
    color += calculateMaterialLightColor(
      pbrInfo,
      lighting.ambientColor,
      clearcoatNormal,
      clearcoatFactor,
      clearcoatRoughness,
      sheenColor,
      sheenRoughness,
      anisotropyTangent,
      anisotropyStrength
    );

    // Apply directional light
    for (var i = 0; i < lighting.directionalLightCount; i++) {
      if (i < lighting.directionalLightCount) {
        PBRInfo_setDirectionalLight(&pbrInfo, lighting_getDirectionalLight(i).direction);
        color += calculateMaterialLightColor(
          pbrInfo,
          lighting_getDirectionalLight(i).color,
          clearcoatNormal,
          clearcoatFactor,
          clearcoatRoughness,
          sheenColor,
          sheenRoughness,
          anisotropyTangent,
          anisotropyStrength
        );
        color += calculateDiffuseTransmissionLight(
          pbrInfo,
          lighting_getDirectionalLight(i).color,
          diffuseTransmissionColor,
          diffuseTransmission,
          multiscatterColor,
          thickness
        );
      }
    }

    // Apply point light
    for (var i = 0; i < lighting.pointLightCount; i++) {
      if (i < lighting.pointLightCount) {
        PBRInfo_setPointLight(&pbrInfo, lighting_getPointLight(i));
        let attenuation = getPointLightAttenuation(
          lighting_getPointLight(i),
          distance(lighting_getPointLight(i).position, fragmentInputs.pbr_vPosition)
        );
        color += calculateMaterialLightColor(
          pbrInfo,
          lighting_getPointLight(i).color / attenuation,
          clearcoatNormal,
          clearcoatFactor,
          clearcoatRoughness,
          sheenColor,
          sheenRoughness,
          anisotropyTangent,
          anisotropyStrength
        );
        color += calculateDiffuseTransmissionLight(
          pbrInfo,
          lighting_getPointLight(i).color / attenuation,
          diffuseTransmissionColor,
          diffuseTransmission,
          multiscatterColor,
          thickness
        );
      }
    }

    for (var i = 0; i < lighting.spotLightCount; i++) {
      if (i < lighting.spotLightCount) {
        PBRInfo_setSpotLight(&pbrInfo, lighting_getSpotLight(i));
        let attenuation = getSpotLightAttenuation(lighting_getSpotLight(i), fragmentInputs.pbr_vPosition);
        color += calculateMaterialLightColor(
          pbrInfo,
          lighting_getSpotLight(i).color / attenuation,
          clearcoatNormal,
          clearcoatFactor,
          clearcoatRoughness,
          sheenColor,
          sheenRoughness,
          anisotropyTangent,
          anisotropyStrength
        );
        color += calculateDiffuseTransmissionLight(
          pbrInfo,
          lighting_getSpotLight(i).color / attenuation,
          diffuseTransmissionColor,
          diffuseTransmission,
          multiscatterColor,
          thickness
        );
      }
    }
    #endif

    // Calculate lighting contribution from image based lighting source (IBL)
    #ifdef USE_IBL
    if (pbrMaterial.IBLenabled != 0) {
      color += getIBLContribution(
        pbrInfo,
        n,
        getAnisotropicReflection(pbrInfo, anisotropyTangent, anisotropyStrength)
      );
      color += calculateClearcoatIBLContribution(
        pbrInfo,
        clearcoatNormal,
        -normalize(reflect(v, clearcoatNormal)),
        clearcoatFactor,
        clearcoatRoughness
      );
      color += calculateDiffuseTransmissionIBL(
        pbrInfo,
        diffuseTransmissionColor,
        diffuseTransmission,
        multiscatterColor,
        thickness
      );
      color += sheenColor * pbrMaterial.scaleIBLAmbient.x * (1.0 - sheenRoughness) * 0.25;
    }
    #endif

    // Apply optional PBR terms for additional (optional) shading
    #ifdef HAS_OCCLUSIONMAP
    if (pbrMaterial.occlusionMapEnabled != 0) {
      let ao = textureSample(pbr_occlusionSampler, pbr_occlusionSamplerSampler, occlusionUV).r;
      color = mix(color, color * ao, pbrMaterial.occlusionStrength);
    }
    #endif

    var emissive = pbrMaterial.emissiveFactor;
    #ifdef HAS_EMISSIVEMAP
    if (pbrMaterial.emissiveMapEnabled != 0u) {
      emissive *= SRGBtoLINEAR(
        textureSample(pbr_emissiveSampler, pbr_emissiveSamplerSampler, emissiveUV)
      ).rgb;
    }
    #endif
    color += emissive * pbrMaterial.emissiveStrength;

    if (transmission > 0.0) {
      #ifdef USE_TRANSMISSION_FRAMEBUFFER
      let dielectricFresnel = getDielectricF0(pbrMaterial.ior);
      let transmissionFresnel = dielectricFresnel +
        (1.0 - dielectricFresnel) * pow(1.0 - NdotV, 5.0);
      let transmittedColor = getTransmittedSceneColor(
        fragmentInputs.pbr_vPosition,
        n,
        v,
        thickness,
        perceptualRoughness
      );
      color += transmittedColor * getVolumeAttenuation(thickness) *
        transmission * (1.0 - transmissionFresnel);
      #else
      color = mix(color, color * getVolumeAttenuation(thickness), transmission);
      #endif
    }

    // This section uses mix to override final color for reference app visualization
    // of various parameters in the lighting equation.
    #ifdef PBR_DEBUG
    // TODO: Figure out how to debug multiple lights

    // color = mix(color, F, pbr_scaleFGDSpec.x);
    // color = mix(color, vec3(G), pbr_scaleFGDSpec.y);
    // color = mix(color, vec3(D), pbr_scaleFGDSpec.z);
    // color = mix(color, specContrib, pbr_scaleFGDSpec.w);

    // color = mix(color, diffuseContrib, pbr_scaleDiffBaseMR.x);
    color = mix(color, baseColor.rgb, pbrMaterial.scaleDiffBaseMR.y);
    color = mix(color, vec3<f32>(metallic), pbrMaterial.scaleDiffBaseMR.z);
    color = mix(color, vec3<f32>(perceptualRoughness), pbrMaterial.scaleDiffBaseMR.w);
    #endif
  }

  #ifdef USE_TRANSMISSION_FRAMEBUFFER
  let alpha = clamp(baseColor.a, 0.0, 1.0);
  #else
  let alpha = clamp(baseColor.a * (1.0 - transmission), 0.0, 1.0);
  #endif
  return vec4<f32>(applySceneColorManagement(color), alpha);
}
`,wc=`layout(std140) uniform pbrProjectionUniforms {
  mat4 modelViewProjectionMatrix;
  mat4 modelMatrix;
  mat4 normalMatrix;
  vec3 camera;
} pbrProjection;
`,L2=`struct pbrProjectionUniforms {
  modelViewProjectionMatrix: mat4x4<f32>,
  modelMatrix: mat4x4<f32>,
  normalMatrix: mat4x4<f32>,
  camera: vec3<f32>
};

@group(0) @binding(auto) var<uniform> pbrProjection: pbrProjectionUniforms;
`,k2={name:"pbrProjection",bindingLayout:[{name:"pbrProjection",group:0}],source:L2,vs:wc,fs:wc,getUniforms:r=>r,uniformTypes:{modelViewProjectionMatrix:"mat4x4<f32>",modelMatrix:"mat4x4<f32>",normalMatrix:"mat4x4<f32>",camera:"vec3<f32>"}},sn={props:{},uniforms:{},defaultUniforms:{unlit:!1,baseColorMapEnabled:!1,baseColorFactor:[1,1,1,1],normalMapEnabled:!1,normalScale:1,emissiveMapEnabled:!1,emissiveFactor:[0,0,0],metallicRoughnessValues:[1,1],metallicRoughnessMapEnabled:!1,occlusionMapEnabled:!1,occlusionStrength:1,alphaCutoffEnabled:!1,alphaCutoff:.5,IBLenabled:!1,scaleIBLAmbient:[1,1],scaleDiffBaseMR:[0,0,0,0],scaleFGDSpec:[0,0,0,0],specularColorFactor:[1,1,1],specularIntensityFactor:1,specularColorMapEnabled:!1,specularIntensityMapEnabled:!1,ior:1.5,transmissionFactor:0,transmissionMapEnabled:!1,thicknessFactor:0,attenuationDistance:1e9,attenuationColor:[1,1,1],clearcoatFactor:0,clearcoatRoughnessFactor:0,clearcoatMapEnabled:!1,clearcoatRoughnessMapEnabled:!1,sheenColorFactor:[0,0,0],sheenRoughnessFactor:0,sheenColorMapEnabled:!1,sheenRoughnessMapEnabled:!1,iridescenceFactor:0,iridescenceIor:1.3,iridescenceThicknessRange:[100,400],iridescenceMapEnabled:!1,anisotropyStrength:0,anisotropyRotation:0,anisotropyDirection:[1,0],anisotropyMapEnabled:!1,emissiveStrength:1,dispersion:0,baseColorUVSet:0,baseColorUVTransform:[1,0,0,0,1,0,0,0,1],metallicRoughnessUVSet:0,metallicRoughnessUVTransform:[1,0,0,0,1,0,0,0,1],normalUVSet:0,normalUVTransform:[1,0,0,0,1,0,0,0,1],occlusionUVSet:0,occlusionUVTransform:[1,0,0,0,1,0,0,0,1],emissiveUVSet:0,emissiveUVTransform:[1,0,0,0,1,0,0,0,1],specularColorUVSet:0,specularColorUVTransform:[1,0,0,0,1,0,0,0,1],specularIntensityUVSet:0,specularIntensityUVTransform:[1,0,0,0,1,0,0,0,1],transmissionUVSet:0,transmissionUVTransform:[1,0,0,0,1,0,0,0,1],thicknessUVSet:0,thicknessUVTransform:[1,0,0,0,1,0,0,0,1],clearcoatUVSet:0,clearcoatUVTransform:[1,0,0,0,1,0,0,0,1],clearcoatRoughnessUVSet:0,clearcoatRoughnessUVTransform:[1,0,0,0,1,0,0,0,1],clearcoatNormalUVSet:0,clearcoatNormalUVTransform:[1,0,0,0,1,0,0,0,1],sheenColorUVSet:0,sheenColorUVTransform:[1,0,0,0,1,0,0,0,1],sheenRoughnessUVSet:0,sheenRoughnessUVTransform:[1,0,0,0,1,0,0,0,1],iridescenceUVSet:0,iridescenceUVTransform:[1,0,0,0,1,0,0,0,1],iridescenceThicknessUVSet:0,iridescenceThicknessUVTransform:[1,0,0,0,1,0,0,0,1],anisotropyUVSet:0,anisotropyUVTransform:[1,0,0,0,1,0,0,0,1],bumpFactor:1,bumpMapEnabled:!1,diffuseTransmissionFactor:0,diffuseTransmissionMapEnabled:!1,diffuseTransmissionColorFactor:[1,1,1],diffuseTransmissionColorMapEnabled:!1,multiscatterColorFactor:[0,0,0],multiscatterColorMapEnabled:!1,scatterAnisotropy:0,bumpUVSet:0,bumpUVTransform:[1,0,0,0,1,0,0,0,1],diffuseTransmissionUVSet:0,diffuseTransmissionUVTransform:[1,0,0,0,1,0,0,0,1],diffuseTransmissionColorUVSet:0,diffuseTransmissionColorUVTransform:[1,0,0,0,1,0,0,0,1],multiscatterColorUVSet:0,multiscatterColorUVTransform:[1,0,0,0,1,0,0,0,1]},name:"pbrMaterial",firstBindingSlot:0,bindingLayout:[{name:"pbrMaterial",group:3},{name:"pbr_baseColorSampler",group:3},{name:"pbr_normalSampler",group:3},{name:"pbr_emissiveSampler",group:3},{name:"pbr_metallicRoughnessSampler",group:3},{name:"pbr_occlusionSampler",group:3},{name:"pbr_specularColorSampler",group:3},{name:"pbr_specularIntensitySampler",group:3},{name:"pbr_transmissionSampler",group:3},{name:"pbr_thicknessSampler",group:3},{name:"pbr_clearcoatSampler",group:3},{name:"pbr_clearcoatRoughnessSampler",group:3},{name:"pbr_clearcoatNormalSampler",group:3},{name:"pbr_sheenColorSampler",group:3},{name:"pbr_sheenRoughnessSampler",group:3},{name:"pbr_iridescenceSampler",group:3},{name:"pbr_iridescenceThicknessSampler",group:3},{name:"pbr_anisotropySampler",group:3},{name:"pbr_bumpSampler",group:3},{name:"pbr_diffuseTransmissionSampler",group:3},{name:"pbr_diffuseTransmissionColorSampler",group:3},{name:"pbr_multiscatterColorSampler",group:3}],dependencies:[of,I2,k2],source:P2,vs:R2,fs:N2,defines:{LIGHTING_FRAGMENT:!0,HAS_NORMALMAP:!1,HAS_EMISSIVEMAP:!1,HAS_OCCLUSIONMAP:!1,HAS_BASECOLORMAP:!1,HAS_METALROUGHNESSMAP:!1,HAS_SPECULARCOLORMAP:!1,HAS_SPECULARINTENSITYMAP:!1,HAS_TRANSMISSIONMAP:!1,HAS_THICKNESSMAP:!1,HAS_CLEARCOATMAP:!1,HAS_CLEARCOATROUGHNESSMAP:!1,HAS_CLEARCOATNORMALMAP:!1,HAS_SHEENCOLORMAP:!1,HAS_SHEENROUGHNESSMAP:!1,HAS_IRIDESCENCEMAP:!1,HAS_IRIDESCENCETHICKNESSMAP:!1,HAS_ANISOTROPYMAP:!1,HAS_BUMPMAP:!1,HAS_DIFFUSETRANSMISSIONMAP:!1,HAS_DIFFUSETRANSMISSIONCOLORMAP:!1,HAS_MULTISCATTERCOLORMAP:!1,USE_MATERIAL_EXTENSIONS:!1,ALPHA_CUTOFF:!1,USE_IBL:!1,PBR_DEBUG:!1},getUniforms:r=>r,uniformTypes:{unlit:"i32",baseColorMapEnabled:"i32",baseColorFactor:"vec4<f32>",normalMapEnabled:"i32",normalScale:"f32",emissiveMapEnabled:"i32",emissiveFactor:"vec3<f32>",metallicRoughnessValues:"vec2<f32>",metallicRoughnessMapEnabled:"i32",occlusionMapEnabled:"i32",occlusionStrength:"f32",alphaCutoffEnabled:"i32",alphaCutoff:"f32",specularColorFactor:"vec3<f32>",specularIntensityFactor:"f32",specularColorMapEnabled:"i32",specularIntensityMapEnabled:"i32",ior:"f32",transmissionFactor:"f32",transmissionMapEnabled:"i32",thicknessFactor:"f32",attenuationDistance:"f32",attenuationColor:"vec3<f32>",clearcoatFactor:"f32",clearcoatRoughnessFactor:"f32",clearcoatMapEnabled:"i32",clearcoatRoughnessMapEnabled:"i32",sheenColorFactor:"vec3<f32>",sheenRoughnessFactor:"f32",sheenColorMapEnabled:"i32",sheenRoughnessMapEnabled:"i32",iridescenceFactor:"f32",iridescenceIor:"f32",iridescenceThicknessRange:"vec2<f32>",iridescenceMapEnabled:"i32",anisotropyStrength:"f32",anisotropyRotation:"f32",anisotropyDirection:"vec2<f32>",anisotropyMapEnabled:"i32",emissiveStrength:"f32",dispersion:"f32",IBLenabled:"i32",scaleIBLAmbient:"vec2<f32>",scaleDiffBaseMR:"vec4<f32>",scaleFGDSpec:"vec4<f32>",baseColorUVSet:"i32",baseColorUVTransform:"mat3x3<f32>",metallicRoughnessUVSet:"i32",metallicRoughnessUVTransform:"mat3x3<f32>",normalUVSet:"i32",normalUVTransform:"mat3x3<f32>",occlusionUVSet:"i32",occlusionUVTransform:"mat3x3<f32>",emissiveUVSet:"i32",emissiveUVTransform:"mat3x3<f32>",specularColorUVSet:"i32",specularColorUVTransform:"mat3x3<f32>",specularIntensityUVSet:"i32",specularIntensityUVTransform:"mat3x3<f32>",transmissionUVSet:"i32",transmissionUVTransform:"mat3x3<f32>",thicknessUVSet:"i32",thicknessUVTransform:"mat3x3<f32>",clearcoatUVSet:"i32",clearcoatUVTransform:"mat3x3<f32>",clearcoatRoughnessUVSet:"i32",clearcoatRoughnessUVTransform:"mat3x3<f32>",clearcoatNormalUVSet:"i32",clearcoatNormalUVTransform:"mat3x3<f32>",sheenColorUVSet:"i32",sheenColorUVTransform:"mat3x3<f32>",sheenRoughnessUVSet:"i32",sheenRoughnessUVTransform:"mat3x3<f32>",iridescenceUVSet:"i32",iridescenceUVTransform:"mat3x3<f32>",iridescenceThicknessUVSet:"i32",iridescenceThicknessUVTransform:"mat3x3<f32>",anisotropyUVSet:"i32",anisotropyUVTransform:"mat3x3<f32>",bumpFactor:"f32",bumpMapEnabled:"i32",diffuseTransmissionFactor:"f32",diffuseTransmissionMapEnabled:"i32",diffuseTransmissionColorFactor:"vec3<f32>",diffuseTransmissionColorMapEnabled:"i32",multiscatterColorFactor:"vec3<f32>",multiscatterColorMapEnabled:"i32",scatterAnisotropy:"f32",bumpUVSet:"i32",bumpUVTransform:"mat3x3<f32>",diffuseTransmissionUVSet:"i32",diffuseTransmissionUVTransform:"mat3x3<f32>",diffuseTransmissionColorUVSet:"i32",diffuseTransmissionColorUVTransform:"mat3x3<f32>",multiscatterColorUVSet:"i32",multiscatterColorUVTransform:"mat3x3<f32>"}};class O2{constructor(e={}){B(this,"name");B(this,"playing",!0);B(this,"speed",1);B(this,"startTime",0);this.name=e.name||"unnamed",Object.assign(this,e)}setTime(e){if(!this.playing)return;const i=(e/1e3-this.startTime)*this.speed;this.applyTime(i)}}class F2{constructor(e){B(this,"clips");B(this,"animations");this.clips=e,this.animations=e}animate(e){Je.warn(`${this.constructor.name}#animate is deprecated. Use ${this.constructor.name}#setTime instead`)(),this.setTime(e)}setTime(e){this.clips.forEach(t=>t.setTime(e))}getAnimations(){return this.clips}}function B2(r,e,t="vector"){const{input:i,output:o,interpolation:c="LINEAR"}=e;if(!i.length||!o.length||!Number.isFinite(r))return null;const d=i.length-1;if(r<=i[0]||d===0)return la(o,c,0,t);if(r>=i[d])return la(o,c,d,t);let m=0,_=d;for(;_-m>1;){const N=Math.floor((m+_)/2);i[N]<=r?m=N:_=N}const T=i[m],w=i[_]-T;if(w<=0||c==="STEP")return la(o,c,m,t);const M=(r-T)/w;switch(c){case"LINEAR":{const N=o[m],O=o[_];return!N||!O?null:t==="quaternion"?rA(N,O,M):D2(N,O,M)}case"CUBICSPLINE":{const N=o[m*3+1],O=o[m*3+2],F=o[_*3],W=o[_*3+1];if(!N||!O||!F||!W)return null;const j=U2(N,O,F,W,w,M);return t==="quaternion"?qn(j):j}default:return null}}function rA(r,e,t){const i=qn(r),o=qn(e);let c=i.reduce((w,M,N)=>w+M*o[N],0);const d=c<0?-1:1;if(c=Math.min(Math.abs(c),1),c>.9995)return qn(i.map((w,M)=>w+t*(o[M]*d-w)));const m=Math.acos(c),_=Math.sin(m),T=Math.sin((1-t)*m)/_,y=Math.sin(t*m)/_*d;return qn(i.map((w,M)=>w*T+o[M]*y))}function la(r,e,t,i){const o=r[e==="CUBICSPLINE"?t*3+1:t];return o?i==="quaternion"?qn(o):[...o]:null}function D2(r,e,t){return r.map((i,o)=>(1-t)*i+t*e[o])}function U2(r,e,t,i,o,c){const d=c*c,m=d*c;return r.map((_,T)=>(2*m-3*d+1)*_+(m-2*d+c)*e[T]*o+(-2*m+3*d)*i[T]+(m-d)*t[T]*o)}function qn(r){const e=Math.hypot(...r);return e>0?r.map(t=>t/e):[0,0,0,1]}class ua{constructor(e){B(this,"name");B(this,"times");B(this,"values");B(this,"interpolation");B(this,"valueType");B(this,"binding");this.name=e.name||e.binding.id||"unnamed",this.times=e.times,this.values=e.values,this.interpolation=e.interpolation||"LINEAR",this.valueType=e.valueType||"vector",this.binding=e.binding}get duration(){return this.times[this.times.length-1]||0}get sampler(){return{input:this.times,output:this.values,interpolation:this.interpolation}}evaluate(e){return B2(e,this.sampler,this.valueType)}}class V2{constructor(e){B(this,"name");B(this,"tracks");B(this,"duration");this.name=e.name||"unnamed",this.tracks=e.tracks,this.duration=e.duration??Math.max(0,...e.tracks.map(t=>t.duration))}}class j2{constructor(e,t,i={}){B(this,"clip");B(this,"mixer");B(this,"time",0);B(this,"timeScale");B(this,"weight");B(this,"loop");B(this,"repetitions");B(this,"paused",!1);B(this,"playing",!1);B(this,"elapsedTime",0);B(this,"fade",null);this.mixer=e,this.clip=t,this.loop=i.loop||"repeat",this.repetitions=i.repetitions??Number.POSITIVE_INFINITY,this.timeScale=i.timeScale??1,this.weight=i.weight??1}play(){return this.playing=!0,this.paused=!1,this}pause(){return this.paused=!0,this}resume(){return this.playing=!0,this.paused=!1,this}stop(){return this.playing=!1,this.paused=!1,this.fade=null,this.reset()}reset(){return this.elapsedTime=0,this.time=0,this}setTime(e){return this.elapsedTime=e,this.time=this.resolveLocalTime(e),this}setLoop(e,t=Number.POSITIVE_INFINITY){return this.loop=e,this.repetitions=t,this.time=this.resolveLocalTime(this.elapsedTime),this}setEffectiveWeight(e){return this.weight=Math.max(0,e),this.fade=null,this}setEffectiveTimeScale(e){return this.timeScale=e,this}fadeIn(e){return this.scheduleFade(1,e)}fadeOut(e){return this.scheduleFade(0,e)}crossFadeTo(e,t){return e.weight=0,e.play().fadeIn(t),this.fadeOut(t)}crossFadeFrom(e,t){return e.crossFadeTo(this,t),this}advance(e){!this.playing||this.paused||(this.advanceFade(Math.abs(e)),this.elapsedTime+=e*this.timeScale,this.time=this.resolveLocalTime(this.elapsedTime),this.hasFinished()&&(this.playing=!1))}get shouldApply(){return(this.playing||this.hasFinished())&&this.weight>0}scheduleFade(e,t){return t<=0?(this.weight=e,this.fade=null,this):(this.fade={duration:t,elapsedTime:0,startWeight:this.weight,endWeight:e},this)}advanceFade(e){if(!this.fade)return;this.fade.elapsedTime+=e;const t=Math.min(this.fade.elapsedTime/this.fade.duration,1);this.weight=this.fade.startWeight+(this.fade.endWeight-this.fade.startWeight)*t,t===1&&(this.fade=null)}hasFinished(){const e=this.clip.duration;return e<=0?this.loop==="once":this.loop==="once"?this.elapsedTime>=e||this.elapsedTime<0:Number.isFinite(this.repetitions)&&Math.abs(this.elapsedTime)>=e*this.repetitions}resolveLocalTime(e){const t=this.clip.duration;if(t<=0)return 0;if(this.loop==="once")return Math.min(Math.max(e,0),t);if(Number.isFinite(this.repetitions)&&Math.abs(e)>=t*this.repetitions)return this.loop==="ping-pong"&&this.repetitions%2===0||e<0?0:t;const i=e>=0&&e<t?e:(e%t+t)%t;if(this.loop==="repeat")return i;const o=Math.floor(e/t);return Math.abs(o%2)===0?i:t-i}}class yf{constructor(e=[]){B(this,"time",0);B(this,"timeScale",1);B(this,"clips",new Map);B(this,"actions",new Map);B(this,"initialValues",new Map);e.forEach(t=>this.addClip(t))}addClip(e){return this.clips.set(e.name,e),this}clipAction(e,t){const i=typeof e=="string"?this.clips.get(e):e;if(!i)throw new Error(`Unknown animation clip: ${e}`);this.addClip(i);let o=this.actions.get(i);return o||(o=new j2(this,i,t),this.actions.set(i,o)),o}getAction(e){const t=this.clips.get(e);return t?this.actions.get(t):void 0}update(e){return this.advance(e),this.applyValues(),this}advance(e){const t=e*this.timeScale;return this.time+=t,this.actions.forEach(i=>i.advance(t)),this}setTime(e){return this.time=e,this.actions.forEach(t=>{t.paused||t.setTime(e*t.timeScale)}),this.applyValues(),this}stopAllAction(){return this.actions.forEach(e=>e.stop()),this}applyValues(){const e=new Map;this.actions.forEach(t=>{!t.shouldApply&&!(t.playing&&t.weight===0)||t.clip.tracks.forEach(i=>{var T,y;const o=i.evaluate(t.time);if(!o)return;const c=i.binding.id||i.binding;if(!this.initialValues.has(c)){const w=(y=(T=i.binding).getValue)==null?void 0:y.call(T);w&&this.initialValues.set(c,[...w])}if(t.weight===0&&!this.initialValues.has(c))return;const d=e.get(c);if(!d){e.set(c,{binding:i.binding,value:[...o],valueType:i.valueType,weight:t.weight});return}if(t.weight===0)return;const m=d.weight+t.weight,_=t.weight/m;d.value=i.valueType==="quaternion"?rA(d.value,o,_):d.value.map((w,M)=>w+(o[M]-w)*_),d.weight=m})}),e.forEach(({binding:t,value:i,valueType:o,weight:c},d)=>{const m=c<1?this.initialValues.get(d):void 0;m&&m.length===i.length&&(i=o==="quaternion"?rA(m,i,c):i.map((_,T)=>m[T]+(_-m[T])*c)),t.setValue(i)})}}function zA(r){const e=r.value;if(e instanceof Float32Array)return e;const t=new Float32Array(e.length),i=Sf(e),o=e instanceof Int8Array||e instanceof Int16Array||e instanceof Int32Array;for(let c=0;c<e.length;c++){const d=Number(e[c]);t[c]=r.normalized&&i?o?Math.max(d/i,-1):d/i:d}return t}function G2(r,e,t){const i={};for(const o of["POSITION","NORMAL","TANGENT"]){const c=r[o];if(!c)continue;const d=new Float32Array(c),m=o==="TANGENT"?4:3,_=Math.floor(c.length/m);for(let T=0;T<Math.min(e.length,t.length);T++){const y=t[T],w=e[T][o];if(!y||!w)continue;const M=o==="TANGENT"&&w.length===_*4?4:3;for(let N=0;N<_;N++){const O=N*m,F=N*M;for(let W=0;W<3;W++)d[O+W]+=(w[F+W]||0)*y}}o!=="POSITION"&&q2(d,m),i[o]=d}return i}function z2(r,e,t,i){var w,M,N;const o={};for(const O of["POSITION","NORMAL","TANGENT"]){const F=e.attributes[O];F&&(o[O]=zA(F))}const c=G2(o,t,i),d={};for(const[O,F]of Object.entries(e.attributes))F&&(d[O]=F);for(const O of["POSITION","NORMAL","TANGENT"]){const F=c[O],W=d[O];F&&W&&(d[O]={...W,value:H2(W,F)})}const m=new Jn({id:e.id,topology:e.topology||"triangle-list",vertexCount:e.vertexCount,indices:e.indices,attributes:d,bufferLayout:e.bufferLayout}),T=(w=jg(m).attributes.geometry)==null?void 0:w.value,y=((M=r._gpuGeometry)==null?void 0:M.attributes.geometry)||r.bufferAttributes.geometry;if(T&&y){y.write(T);return}for(const O of["POSITION","NORMAL","TANGENT"]){const F=c[O];if(F){const W=O==="POSITION"?"positions":O==="NORMAL"?"normals":"TANGENT";(N=r.bufferAttributes[W])==null||N.write(F)}}}function H2(r,e){if(r.value instanceof Float32Array)return e;const t=r.value.slice(),i=Sf(t),o=t instanceof Int8Array||t instanceof Int16Array||t instanceof Int32Array;for(let c=0;c<e.length;c++){const d=e[c];t[c]=r.normalized&&i?Math.round(Math.max(o?-1:0,Math.min(1,d))*i):d}return t}function Sf(r){return r instanceof Int8Array?127:r instanceof Uint8Array||r instanceof Uint8ClampedArray?255:r instanceof Int16Array?32767:r instanceof Uint16Array?65535:r instanceof Int32Array?2147483647:r instanceof Uint32Array?4294967295:0}function q2(r,e){for(let t=0;t<r.length;t+=e){const i=Math.hypot(r[t],r[t+1],r[t+2]);i>0&&(r[t]/=i,r[t+1]/=i,r[t+2]/=i)}}function Q2(r){const{joints:e,meshNode:t,worldMatrices:i,inverseBindMatrices:o,target:c}=r,d=e.length,m=c&&c.length===d*16?c:new Float32Array(d*16),_=t?i.get(t)||t.matrix:void 0,T=_?new we(_).invert():null;for(let y=0;y<d;y++){const w=e[y],M=i.get(w)||w.matrix,N=T?new we(T).multiplyRight(M):new we(M),O=y*16;if(o&&o.length>=O+16){const F=new we;for(let W=0;W<16;W++)F[W]=o[O+W];N.multiplyRight(F)}m.set(N,O)}return m}const Gi=3;class HA{constructor(e,t={}){B(this,"device");B(this,"modules");B(this,"_materialBindingNames");B(this,"_materialModuleNames");this.device=e,this.modules=t.modules||[];const i=new af(Object.fromEntries(this.modules.map(o=>[o.name,o])));this._materialBindingNames=W2(i),this._materialModuleNames=K2(i)}createMaterial(e={}){return new $2(this.device,{...e,factory:this})}getBindingNames(){return Array.from(this._materialBindingNames)}ownsBinding(e){if(this._materialBindingNames.has(e))return!0;const t=wf(e);return t?this._materialModuleNames.has(t):!1}ownsModule(e){return this._materialModuleNames.has(e)}getBindingsByGroup(e){return Object.keys(e).length>0?{[Gi]:e}:{}}}function wf(r){return r.endsWith("Uniforms")?r.slice(0,-8):null}function W2(r){const e=new Set;for(const t of Object.values(r.modules))for(const i of t.bindingLayout||[])i.group===Gi&&e.add(i.name);return e}function K2(r){var t;const e=new Set;for(const i of Object.values(r.modules))i.name&&((t=i.bindingLayout)!=null&&t.some(o=>o.group===Gi&&o.name===i.name))&&e.add(i.name);return e}class $2{constructor(e,t={}){B(this,"id");B(this,"device");B(this,"factory");B(this,"shaderInputs");B(this,"bindings",{});B(this,"_uniformStore");B(this,"_bindGroupCacheToken",{});B(this,"_dynamicResourceGenerations",{});var o,c;this.id=t.id||BA("material"),this.device=e,this.factory=t.factory||new HA(e,{modules:t.modules||((o=t.shaderInputs)==null?void 0:o.getModules())||[]});const i=Object.fromEntries((((c=t.shaderInputs)==null?void 0:c.getModules())||this.factory.modules).map(d=>[d.name,d]));this.shaderInputs=t.shaderInputs||new af(i),this._uniformStore=new Gg(this.device,this.shaderInputs.modules);for(const[d,m]of Object.entries(this.shaderInputs.modules))if(this.ownsModule(d)&&zg(m)){const _=this._uniformStore.getManagedUniformBuffer(d);this.bindings[`${d}Uniforms`]=_}this.updateShaderInputs(),t.bindings&&this._replaceOwnedBindings(t.bindings)}destroy(){this._uniformStore.destroy()}clone(e={}){const t=this.factory.createMaterial({id:e.id,shaderInputs:e.shaderInputs,bindings:{...this.getResourceBindings(),...e.bindings}});return e.shaderInputs||t.setProps(this.shaderInputs.getUniformValues()),e.moduleProps&&t.setProps(e.moduleProps),t.updateShaderInputs(),t}ownsBinding(e){return this.factory.ownsBinding(e)}ownsModule(e){return this.factory.ownsModule(e)}setProps(e){this.shaderInputs.setProps(e)}updateShaderInputs(e){this._uniformStore.setUniforms(this.shaderInputs.getUniformValues(),e),this._setOwnedBindings(this.shaderInputs.getBindingValues())&&(this._bindGroupCacheToken={})}getResourceBindings(){const e={};for(const[t,i]of Object.entries(this.bindings))wf(t)||(e[t]=i);return e}getBindings(e={bindings:[]}){this._syncDynamicResourceGenerations();const t={},i=t;for(const[o,c]of Object.entries(this.bindings))if($a(c)){const d=Hg(e,o,{fallbackGroup:Gi}),m=d?c.resolveTextureBinding(d):null;m&&(i[o]=m)}else c instanceof aa?i[o]=c.buffer:mc(c)?i[o]=qg(c):i[o]=c;return this._syncDynamicResourceGenerations(),t}getBindingsByGroup(e={bindings:[]}){return this.factory.getBindingsByGroup(this.getBindings(e))}getBindGroupCacheKey(e){return this._syncDynamicResourceGenerations(),e===Gi?this._bindGroupCacheToken:null}getBindingsUpdateTimestamp(){let e=0;for(const t of Object.values(this.bindings))t instanceof Af?e=Math.max(e,t.texture.updateTimestamp):t instanceof ur||t instanceof ct||t instanceof Qg||t instanceof aa?e=Math.max(e,t.updateTimestamp):$a(t)?e=t.isReady?Math.max(e,t.updateTimestamp):1/0:mc(t)&&(e=Math.max(e,(t.buffer instanceof aa,t.buffer.updateTimestamp)));return e}_replaceOwnedBindings(e){this._setOwnedBindings(e)&&(this._bindGroupCacheToken={})}_setOwnedBindings(e){let t=!1;for(const[i,o]of Object.entries(e))o!==void 0&&this.ownsBinding(i)&&this.bindings[i]!==o&&(this.bindings[i]=o,t=!0);return t}_syncDynamicResourceGenerations(){const e={};let t=!1;for(const[i,o]of Object.entries(this.bindings)){const c=X2(o);c!==null&&(e[i]=c,this._dynamicResourceGenerations[i]!==c&&(t=!0))}Object.keys(e).length!==Object.keys(this._dynamicResourceGenerations).length&&(t=!0),this._dynamicResourceGenerations=e,t&&(this._bindGroupCacheToken={})}}function X2(r){var e;return $a(r)?r.generation:((e=Wg(r))==null?void 0:e.generation)??null}const Ef={"+X":0,"-X":1,"+Y":2,"-Y":3,"+Z":4,"-Z":5};function Ci(r){return r?Array.isArray(r)?r[0]??null:r:null}function Y2(r){const{dimension:e,data:t}=r;if(!t)return null;switch(e){case"1d":{const i=Ci(t);if(!i)return null;const{width:o}=Mi(i);return{width:o,height:1}}case"2d":{if(ArrayBuffer.isView(t))return null;const i=Ci(t);return i?Mi(i):null}case"3d":case"2d-array":{if(!Array.isArray(t)||t.length===0)return null;const i=Ci(t[0]);return i?Mi(i):null}case"cube":{const i=Object.keys(t)[0]??null;if(!i)return null;const o=t[i],c=Ci(o);return c?Mi(c):null}case"cube-array":{if(!Array.isArray(t)||t.length===0)return null;const i=t[0],o=Object.keys(i)[0]??null;if(!o)return null;const c=Ci(i[o]);return c?Mi(c):null}default:return null}}function Mi(r){if(cf(r))return Kg(r);if(typeof r=="object"&&"width"in r&&"height"in r)return{width:r.width,height:r.height};throw new Error("Unsupported mip-level data")}function J2(r){return typeof r=="object"&&r!==null&&"data"in r&&"width"in r&&"height"in r}function Z2(r){return ArrayBuffer.isView(r)}function xf(r){const{textureFormat:e,format:t}=r;if(e&&t&&e!==t)throw new Error(`Conflicting texture formats "${e}" and "${t}" provided for the same mip level`);return e??t}function Cf(r){const e=Ef[r];if(e===void 0)throw new Error(`Invalid cube face: ${r}`);return e}function e1(r,e){return 6*r+Cf(e)}function Mf(r){throw new Error("setTexture1DData not supported in WebGL.")}function t1(r){return Array.isArray(r)?r:[r]}function ui(r,e,t,i){const o=t1(e),c=r,d=[];for(let m=0;m<o.length;m++){const _=o[m];if(cf(_))d.push({type:"external-image",image:_,z:c,mipLevel:m});else if(J2(_))d.push({type:"texture-data",data:_,textureFormat:xf(_),z:c,mipLevel:m});else if(Z2(_)&&t)d.push({type:"texture-data",data:{data:_,width:Math.max(1,t.width>>m),height:Math.max(1,t.height>>m),...i?{format:i}:{}},textureFormat:i,z:c,mipLevel:m});else throw new Error("Unsupported 2D mip-level payload")}return d}function If(r){const e=[];for(let t=0;t<r.length;t++)e.push(...ui(t,r[t]));return e}function Rf(r){const e=[];for(let t=0;t<r.length;t++)e.push(...ui(t,r[t]));return e}function Nf(r){const e=[];for(const[t,i]of Object.entries(r)){const o=Cf(t);e.push(...ui(o,i))}return e}function Pf(r){const e=[];return r.forEach((t,i)=>{for(const[o,c]of Object.entries(t)){const d=e1(i,o);e.push(...ui(d,c))}}),e}const po=class po{constructor(e,t){B(this,"device");B(this,"id");B(this,"props");B(this,"_texture",null);B(this,"_sampler",null);B(this,"_view",null);B(this,"ready");B(this,"isReady",!1);B(this,"destroyed",!1);B(this,"generation",0);B(this,"updateTimestamp");B(this,"resolveReady",()=>{});B(this,"rejectReady",()=>{});this.device=e;const i=BA("dynamic-texture"),o=t;this.props={...po.defaultProps,id:i,...t,data:null},this.id=this.props.id,this.ready=new Promise((c,d)=>{this.resolveReady=c,this.rejectReady=d}),this.updateTimestamp=this.device.incrementTimestamp(),this.initAsync(o)}get texture(){if(!this._texture)throw new Error("Texture not initialized yet");return this._texture}get sampler(){if(!this._sampler)throw new Error("Sampler not initialized yet");return this._sampler}get view(){if(!this._view)throw new Error("View not initialized yet");return this._view}get[Symbol.toStringTag](){return"DynamicTexture"}toString(){var i,o;const e=((i=this._texture)==null?void 0:i.width)??this.props.width??"?",t=((o=this._texture)==null?void 0:o.height)??this.props.height??"?";return`DynamicTexture:"${this.id}":${e}x${t}px:(${this.isReady?"ready":"loading..."})`}resolveTextureBinding(e){return this.isReady?this.texture:null}async initAsync(e){try{const t=await this._loadAllData(e);this._checkNotDestroyed();const i=t.data?r1({...t,width:e.width,height:e.height,format:e.format}):[],o="format"in e&&e.format!==void 0,c="usage"in e&&e.usage!==void 0,m=(()=>{if(this.props.width&&this.props.height)return{width:this.props.width,height:this.props.height};const F=Y2(t);return F||{width:this.props.width||1,height:this.props.height||1}})();if(!m||m.width<=0||m.height<=0)throw new Error(`${this} size could not be determined or was zero`);const _=n1(this.device,i,m,{format:o?e.format:void 0}),T=_.format??this.props.format,y={...this.props,...m,format:T,mipLevels:1,data:void 0};this.device.isTextureFormatCompressed(T)&&!c&&(y.usage=ct.SAMPLE|ct.COPY_DST);const w=this.props.mipmaps&&!_.hasExplicitMipChain&&!this.device.isTextureFormatCompressed(T);if(this.device.type==="webgpu"&&w){const F=this.props.dimension==="3d"?ct.SAMPLE|ct.STORAGE|ct.COPY_DST|ct.COPY_SRC:ct.SAMPLE|ct.RENDER|ct.COPY_DST|ct.COPY_SRC;y.usage|=F}const M=this.device.getMipLevelCount(y.width,y.height),N=_.hasExplicitMipChain?_.mipLevels:this.props.mipLevels==="auto"?M:Math.max(1,Math.min(M,this.props.mipLevels??1)),O={...y,mipLevels:N};this._texture=this.device.createTexture(O),this._sampler=this.texture.sampler,this._view=this.texture.view,this._touchGeneration(),_.subresources.length&&this._setTextureSubresources(_.subresources),this.props.mipmaps&&!_.hasExplicitMipChain&&!w&&Je.warn(`${this} skipping auto-generated mipmaps for compressed texture format`)(),w&&this.generateMipmaps(),this.isReady=!0,this.resolveReady(this.texture),Je.info(1,`${this} created`)()}catch(t){const i=t instanceof Error?t:new Error(String(t));this.rejectReady(i)}}destroy(){this._texture&&(this._texture.destroy(),this._texture=null,this._sampler=null,this._view=null),this.isReady=!1,this.destroyed=!0}generateMipmaps(){this.device.type==="webgl"?(this.texture.generateMipmapsWebGL(),this._touch()):this.device.type==="webgpu"?(this.device.generateMipmapsWebGPU(this.texture),this._touch()):Je.warn(`${this} mipmaps not supported on ${this.device.type}`)}setSampler(e={}){this._checkReady();const t=e instanceof lf?e:this.device.createSampler(e);this.texture.setSampler(t),this._sampler=t,this._touchGeneration()}async readBuffer(e={}){this.isReady||await this.ready;const t=e.width??this.texture.width,i=e.height??this.texture.height,o=e.depthOrArrayLayers??this.texture.depth,c=this.texture.computeMemoryLayout({width:t,height:i,depthOrArrayLayers:o}),d=this.device.createBuffer({byteLength:c.byteLength,usage:ur.COPY_DST|ur.MAP_READ});this.texture.readBuffer({...e,width:t,height:i,depthOrArrayLayers:o},d);const m=this.device.createFence();return await m.signaled,m.destroy(),d}async readAsync(e={}){this.isReady||await this.ready;const t=e.width??this.texture.width,i=e.height??this.texture.height,o=e.depthOrArrayLayers??this.texture.depth,c=this.texture.computeMemoryLayout({width:t,height:i,depthOrArrayLayers:o}),d=await this.readBuffer(e),m=await d.readAsync(0,c.byteLength);return d.destroy(),m.buffer instanceof ArrayBuffer?m.buffer:m.slice().buffer}resize(e){if(this._checkReady(),e.width===this.texture.width&&e.height===this.texture.height)return!1;const t=this.texture;return this._texture=t.clone(e),this._sampler=this.texture.sampler,this._view=this.texture.view,t.destroy(),this._touchGeneration(),Je.info(`${this} resized`),!0}getCubeFaceIndex(e){const t=Ef[e];if(t===void 0)throw new Error(`Invalid cube face: ${e}`);return t}getCubeArrayFaceIndex(e,t){return 6*e+this.getCubeFaceIndex(t)}setTexture1DData(e){if(this._checkReady(),this.texture.props.dimension!=="1d")throw new Error(`${this} is not 1d`);const t=Mf();this._setTextureSubresources(t)}setTexture2DData(e,t=0){if(this._checkReady(),this.texture.props.dimension!=="2d")throw new Error(`${this} is not 2d`);const i=ui(t,e);this._setTextureSubresources(i)}setTexture3DData(e){if(this.texture.props.dimension!=="3d")throw new Error(`${this} is not 3d`);const t=If(e);this._setTextureSubresources(t)}setTextureArrayData(e){if(this.texture.props.dimension!=="2d-array")throw new Error(`${this} is not 2d-array`);const t=Rf(e);this._setTextureSubresources(t)}setTextureCubeData(e){if(this.texture.props.dimension!=="cube")throw new Error(`${this} is not cube`);const t=Nf(e);this._setTextureSubresources(t)}setTextureCubeArrayData(e){if(this.texture.props.dimension!=="cube-array")throw new Error(`${this} is not cube-array`);const t=Pf(e);this._setTextureSubresources(t)}_setTextureSubresources(e){for(const t of e){const{z:i,mipLevel:o}=t;switch(t.type){case"external-image":const{image:c,flipY:d}=t;this.texture.copyExternalImage({image:c,z:i,mipLevel:o,flipY:d});break;case"texture-data":const{data:m,textureFormat:_}=t;if(_&&_!==this.texture.format)throw new Error(`${this} mip level ${o} uses format "${_}" but texture format is "${this.texture.format}"`);this.texture.writeData(m.data,{x:0,y:0,z:i,width:m.width,height:m.height,depthOrArrayLayers:1,mipLevel:o});break;default:throw new Error("Unsupported 2D mip-level payload")}}e.length>0&&this._touch()}async _loadAllData(e){const t=await iA(e.data);return{dimension:e.dimension??"2d",data:t??null}}_checkNotDestroyed(){this.destroyed&&Je.warn(`${this} already destroyed`)}_checkReady(){this.isReady||Je.warn(`${this} Cannot perform this operation before ready`)}_touch(){this.updateTimestamp=this.device.incrementTimestamp()}_touchGeneration(){this.generation++,this._touch()}};B(po,"defaultProps",{...ct.defaultProps,dimension:"2d",data:null,mipmaps:!1});let nA=po;function r1(r){if(!r.data)return[];const e=r.width&&r.height?{width:r.width,height:r.height}:void 0,t="format"in r?r.format:void 0;switch(r.dimension){case"1d":return Mf();case"2d":return ui(0,r.data,e,t);case"3d":return If(r.data);case"2d-array":return Rf(r.data);case"cube":return Nf(r.data);case"cube-array":return Pf(r.data);default:throw new Error(`Unhandled dimension ${r.dimension}`)}}function n1(r,e,t,i){if(e.length===0)return{subresources:e,mipLevels:1,format:i.format,hasExplicitMipChain:!1};const o=new Map;for(const y of e){const w=o.get(y.z)??[];w.push(y),o.set(y.z,w)}const c=e.some(y=>y.mipLevel>0);let d=i.format,m=Number.POSITIVE_INFINITY;const _=[];for(const[y,w]of o){const M=[...w].sort((q,J)=>q.mipLevel-J.mipLevel),N=M[0];if(!N||N.mipLevel!==0)throw new Error(`DynamicTexture: slice ${y} is missing mip level 0`);const O=xc(r,N);if(O.width!==t.width||O.height!==t.height)throw new Error(`DynamicTexture: slice ${y} base level dimensions ${O.width}x${O.height} do not match expected ${t.width}x${t.height}`);const F=Ec(N);if(F){if(d&&d!==F)throw new Error(`DynamicTexture: slice ${y} base level format "${F}" does not match texture format "${d}"`);d=F}const W=d&&r.isTextureFormatCompressed(d)?i1(r,O.width,O.height,d):r.getMipLevelCount(O.width,O.height);let j=0;for(let q=0;q<M.length;q++){const J=M[q];if(!J||J.mipLevel!==q||q>=W)break;const Z=xc(r,J),Y=Math.max(1,O.width>>q),se=Math.max(1,O.height>>q);if(Z.width!==Y||Z.height!==se)break;const he=Ec(J);if(he&&(d||(d=he),he!==d))break;j++,_.push(J)}m=Math.min(m,j)}const T=Number.isFinite(m)?Math.max(1,m):1;return{subresources:_.filter(y=>y.mipLevel<T),mipLevels:T,format:d,hasExplicitMipChain:c}}function Ec(r){if(r.type==="texture-data")return r.textureFormat??xf(r.data)}function xc(r,e){switch(e.type){case"external-image":return r.getExternalImageSize(e.image);case"texture-data":return{width:e.data.width,height:e.data.height};default:throw new Error("Unsupported texture subresource")}}function i1(r,e,t,i){const{blockWidth:o=1,blockHeight:c=1}=r.getTextureFormatInfo(i);let d=1;for(let m=1;;m++){const _=Math.max(1,e>>m),T=Math.max(1,t>>m);if(_<o||T<c)break;d++}return d}async function iA(r){if(r=await r,Array.isArray(r))return await Promise.all(r.map(iA));if(r&&typeof r=="object"&&r.constructor===Object){const e=r,t=await Promise.all(Object.values(e).map(iA)),i=Object.keys(e),o={};for(let c=0;c<i.length;c++)o[i[c]]=t[c];return o}return r}function fa(r,e){if(!r)throw new Error(e)}class Ws{constructor(e={}){B(this,"id");B(this,"matrix",new we);B(this,"display",!0);B(this,"position",new X);B(this,"rotation",new X);B(this,"scale",new X(1,1,1));B(this,"userData",{});B(this,"props",{});const{id:t}=e;this.id=t||BA(this.constructor.name),this._setScenegraphNodeProps(e)}getBounds(){return null}destroy(){}delete(){this.destroy()}setProps(e){return this._setScenegraphNodeProps(e),this}toString(){return`{type: ScenegraphNode, id: ${this.id})}`}setPosition(e){return fa(e.length===3,"setPosition requires vector argument"),this.position=e,this}setRotation(e){return fa(e.length===3||e.length===4,"setRotation requires vector argument"),this.rotation=e,this}setScale(e){return fa(e.length===3,"setScale requires vector argument"),this.scale=e,this}setMatrix(e,t=!0){t?this.matrix.copy(e):this.matrix=e}setMatrixComponents(e){const{position:t,rotation:i,scale:o,update:c=!0}=e;return t&&this.setPosition(t),i&&this.setRotation(i),o&&this.setScale(o),c&&this.updateMatrix(),this}updateMatrix(){if(this.matrix.identity(),this.matrix.translate(this.position),this.rotation.length===4){const e=new we().fromQuaternion(this.rotation);this.matrix.multiplyRight(e)}else this.matrix.rotateXYZ(this.rotation);return this.matrix.scale(this.scale),this}update({position:e,rotation:t,scale:i}={}){return e&&this.setPosition(e),t&&this.setRotation(t),i&&this.setScale(i),this.updateMatrix(),this}getCoordinateUniforms(e,t){t=t||this.matrix;const i=new we(e).multiplyRight(t),o=i.invert(),c=o.transpose();return{viewMatrix:e,modelMatrix:t,objectMatrix:t,worldMatrix:i,worldInverseMatrix:o,worldInverseTransposeMatrix:c}}_setScenegraphNodeProps(e){e.display!==void 0&&(this.display=e.display),e!=null&&e.position&&this.setPosition(e.position),e!=null&&e.rotation&&this.setRotation(e.rotation),e!=null&&e.scale&&this.setScale(e.scale),this.updateMatrix(),e!=null&&e.matrix&&this.setMatrix(e.matrix),Object.assign(this.props,e)}}function Lf(){return[[1/0,1/0,1/0],[-1/0,-1/0,-1/0]]}function kf(r,e,t){const i=new we(t);for(let o=0;o<8;o++){const c=new X(e[o&1?1:0][0],e[o&2?1:0][1],e[o&4?1:0][2]);i.transformAsPoint(c,c);for(let d=0;d<3;d++)r[0][d]=Math.min(r[0][d],c[d]),r[1][d]=Math.max(r[1][d],c[d])}}function Of(r){return Number.isFinite(r[0][0])}class fr extends Ws{constructor(t={}){t=Array.isArray(t)?{children:t}:t;const{children:i=[]}=t;Je.assert(i.every(o=>o instanceof Ws),"every child must an instance of ScenegraphNode");super(t);B(this,"children");this.children=i}getBounds(){const t=Lf();return this.traverse((i,{worldMatrix:o})=>{const c=i.getBounds();if(!c)return;const d=new we(o).multiplyRight(i.matrix);kf(t,c,d)}),Of(t)?t:null}destroy(){this.children.forEach(t=>t.destroy()),this.removeAll(),super.destroy()}add(...t){for(const i of t)Array.isArray(i)?this.add(...i):this.children.push(i);return this}remove(t){const i=this.children,o=i.indexOf(t);return o>-1&&i.splice(o,1),this}removeAll(){return this.children=[],this}traverse(t,{worldMatrix:i=new we}={}){if(!this.display)return;const o=new we(i).multiplyRight(this.matrix);for(const c of this.children)c.display&&(c instanceof fr?c.traverse(t,{worldMatrix:o}):t(c,{worldMatrix:o}))}traverseDepthSorted(t,{viewMatrix:i,worldMatrix:o=new we,order:c="back-to-front"}){const d=new we(i),m=[];this.traverse((T,y)=>{const w=T.getBounds(),M=w?new X(w[0]).add(w[1]).divide([2,2,2]):new X,N=new we(y.worldMatrix).multiplyRight(T.matrix);N.transformAsPoint(M,M),d.transformAsPoint(M,M),m.push({node:T,context:{worldMatrix:N,bounds:w,depth:-M[2]},index:m.length})},{worldMatrix:new we(o)});const _=c==="back-to-front"?-1:1;m.sort((T,y)=>_*(T.context.depth-y.context.depth)||T.index-y.index);for(const{node:T,context:y}of m)t(T,y)}preorderTraversal(t,{worldMatrix:i=new we}={}){const o=new we(i).multiplyRight(this.matrix);t(this,{worldMatrix:o});for(const c of this.children)c instanceof fr?c.preorderTraversal(t,{worldMatrix:o}):t(c,{worldMatrix:o})}}class vn extends Ws{constructor(t){super(t);B(this,"model");B(this,"instanceMatrices");B(this,"bounds",null);B(this,"managedResources");this.model=t.model,this.managedResources=t.managedResources||[],this.instanceMatrices=t.instanceMatrices||null,this.bounds=t.bounds?this.instanceMatrices?s1(t.bounds,this.instanceMatrices):t.bounds:null,this.setProps(t)}destroy(){this.model&&(this.model.destroy(),this.model=null),this.managedResources.forEach(t=>t.destroy()),this.managedResources=[]}getBounds(){return this.bounds}draw(t){return this.model.draw(t)}}function s1(r,e){const t=Lf();for(const i of e)kf(t,r,i);return Of(t)?t:null}const o1={...go.defaultProps};class Cn extends li{indexToBounds(){return null}renderLayers(){const{elevationScale:e,extruded:t,wireframe:i,filled:o,stroked:c,lineWidthUnits:d,lineWidthScale:m,lineWidthMinPixels:_,lineWidthMaxPixels:T,lineAntialiasing:y,lineJointRounded:w,lineMiterLimit:M,lineDashJustified:N,getElevation:O,getFillColor:F,getLineColor:W,getLineWidth:j}=this.props,{updateTriggers:q,material:J,transitions:Z}=this.props,Y=this.getSubLayerClass("cell",go),{updateTriggers:se,...he}=this.indexToBounds()||{};return new Y({filled:o,wireframe:i,extruded:t,elevationScale:e,stroked:c,lineWidthUnits:d,lineWidthScale:m,lineWidthMinPixels:_,lineWidthMaxPixels:T,lineAntialiasing:y,lineJointRounded:w,lineMiterLimit:M,lineDashJustified:N,material:J,transitions:Z,getElevation:O,getFillColor:F,getLineColor:W,getLineWidth:j},this.getSubLayerProps({id:"cell",updateTriggers:q&&{...se,getElevation:q.getElevation,getFillColor:q.getFillColor,getLineColor:q.getLineColor,getLineWidth:q.getLineWidth}}),he)}}Cn.layerName="GeoCellLayer";Cn.defaultProps=o1;function Ff(){const r=new Float64Array(4);return r[0]=1,r[3]=1,r}function a1(r,e){const t=Math.sin(e),i=Math.cos(e);return r[0]=i,r[1]=t,r[2]=-t,r[3]=i,r}function Mn(){return new Float64Array(2)}function sA(r){const e=new Float64Array(2);return e[0]=r[0],e[1]=r[1],e}function A1(r,e,t){return r[0]=e,r[1]=t,r}function c1(r,e,t){return r[0]=e[0]+t[0],r[1]=e[1]+t[1],r}function Bf(r,e,t){return r[0]=e[0]*t,r[1]=e[1]*t,r}function l1(r,e,t,i){return r[0]=e[0]+t[0]*i,r[1]=e[1]+t[1]*i,r}function Df(r,e){return r[0]=-e[0],r[1]=-e[1],r}function Uf(r){return Math.hypot(r[0],r[1])}function Vf(r,e,t,i){const o=e[0],c=e[1];return r[0]=o+i*(t[0]-o),r[1]=c+i*(t[1]-c),r}function u1(r,e,t,i){const o=e[0]-t[0],c=e[1]-t[1],d=Math.sin(i),m=Math.cos(i);return r[0]=o*m-c*d+t[0],r[1]=o*d+c*m+t[1],r}function qA(r,e,t){const i=e[0],o=e[1];return r[0]=t[0]*i+t[2]*o,r[1]=t[1]*i+t[3]*o,r}function jf(r,e,t){const i=e[0],o=e[1];return r[0]=t[0]*i+t[2]*o+t[4],r[1]=t[1]*i+t[3]*o+t[5],r}function yn(){return new Float64Array(3)}function fi(r,e,t){const i=new Float64Array(3);return i[0]=r,i[1]=e,i[2]=t,i}function f1(r,e,t){return r[0]=e[0]+t[0],r[1]=e[1]+t[1],r[2]=e[2]+t[2],r}function gs(r,e,t){return r[0]=e[0]*t,r[1]=e[1]*t,r[2]=e[2]*t,r}function ha(r,e,t,i){return r[0]=e[0]+t[0]*i,r[1]=e[1]+t[1]*i,r[2]=e[2]+t[2]*i,r}function h1(r){return Math.hypot(r[0],r[1],r[2])}function Cc(r,e){return Math.hypot(e[0]-r[0],e[1]-r[1],e[2]-r[2])}function QA(r,e){const t=e[0],i=e[1],o=e[2];let c=t*t+i*i+o*o;return c>0&&(c=1/Math.sqrt(c)),r[0]=e[0]*c,r[1]=e[1]*c,r[2]=e[2]*c,r}function Lr(r,e){return r[0]*e[0]+r[1]*e[1]+r[2]*e[2]}function Mc(r,e,t){const i=e[0],o=e[1],c=e[2],d=t[0],m=t[1],_=t[2];return r[0]=o*_-c*m,r[1]=c*d-i*_,r[2]=i*m-o*d,r}function Ks(r,e,t){const i=t[0],o=t[1],c=t[2],d=t[3],m=e[0],_=e[1],T=e[2];let y=o*T-c*_,w=c*m-i*T,M=i*_-o*m,N=o*M-c*w,O=c*y-i*M,F=i*w-o*y;const W=d*2;return y*=W,w*=W,M*=W,N*=2,O*=2,F*=2,r[0]=m+y+N,r[1]=_+w+O,r[2]=T+M+F,r}var d1=(1+Math.sqrt(5))/2,$s=2*Math.PI/5,Mr=Math.PI/5,Ic=Math.PI/10,p1=2*Math.atan(d1),oA=Math.PI-p1,bo=(Math.sqrt(5)-1)/2,m1=3-Math.sqrt(5),Gf=63710072e-1;function g1(r,e,t,i){const o=e[0]-r[0],c=e[1]-r[1],d=i[0]-t[0],m=i[1]-t[1],_=o*m-c*d;if(Math.abs(_)<1e-12)return!1;const T=t[0]-r[0],y=t[1]-r[1],w=(T*m-y*d)/_,M=(T*c-y*o)/_;return w>=0&&w<=1&&M>=0&&M<=1}var WA=class aA{constructor(e){this.vertices=e,this.isWindingCorrect()||this.vertices.reverse()}getArea(){let e=0;const t=this.vertices.length;for(let i=0;i<t;i++){const o=(i+1)%t;e+=(this.vertices[o][0]-this.vertices[i][0])*(this.vertices[o][1]+this.vertices[i][1])}return e}isWindingCorrect(){return this.getArea()>=0}getVertices(){return this.vertices}scale(e){for(const t of this.vertices)Bf(t,t,e);return this}rotate180(){for(const e of this.vertices)Df(e,e);return this}reflectY(){for(const e of this.vertices)e[1]=-e[1];return this.vertices.reverse(),this}translate(e){for(const t of this.vertices)c1(t,t,e);return this}transform(e){for(const t of this.vertices)qA(t,t,e);return this}transform2d(e){for(const t of this.vertices)jf(t,t,e);return this}clone(){return new aA(this.vertices.map(t=>sA(t)))}getCenter(){const e=this.vertices.length;return this.vertices.reduce((i,o)=>[i[0]+o[0]/e,i[1]+o[1]/e],[0,0])}containsPoint(e){if(!this.isWindingCorrect())throw new Error("Pentagon is not counter-clockwise");const t=this.vertices.length;let i=1;for(let o=0;o<t;o++){const c=this.vertices[o],d=this.vertices[(o+1)%t],m=c[0]-d[0],_=c[1]-d[1],T=e[0]-c[0],y=e[1]-c[1],w=m*y-_*T;if(w<0){const M=Math.sqrt(T*T+y*y);i=Math.min(i,w/M)}}return i}intersectsSegment(e,t){if(this.containsPoint(e)>0||this.containsPoint(t)>0)return!0;const i=this.vertices.length;for(let o=0;o<i;o++){const c=this.vertices[o],d=this.vertices[(o+1)%i];if(g1(e,t,c,d))return!0}return!1}splitEdges(e){if(e<=1)return this;const t=[],i=this.vertices.length;for(let o=0;o<i;o++){const c=this.vertices[o],d=this.vertices[(o+1)%i];t.push(sA(c));for(let m=1;m<e;m++){const _=m/e,T=Mn();Vf(T,c,d,_),t.push(T)}}return new aA(t)}},zf=[0,0],Hf=[0,1],Sn=[.7885966681787006,1.6149108024237764],qf=[1.6171013659387945,1.054928690397459],Qf=[Math.cos(Ic),Math.sin(Ic)],b1=2*Uf(Sn)*Math.cos(Mr),_1=Mr-Math.atan2(Sn[1],Sn[0]),T1=2*bo/b1;[zf,Hf,Sn,qf,Qf].forEach(r=>{Bf(r,r,T1),u1(r,r,[0,0],_1)});var Wf=new WA([zf,Hf,Sn,qf,Qf]),Kf=Math.atan2(Sn[1],Sn[0])-Mr,v1=[0,0],Xs=bo/Math.cos(Mr),Rc=Kf+Mr,tn=[Xs*Math.cos(Rc),Xs*Math.sin(Rc)],Nc=Kf-Mr,wn=[Xs*Math.cos(Nc),Xs*Math.sin(Nc)],$f=new WA([v1,tn,wn]),y1=[tn[0],tn[1],wn[0],wn[1]],bs=1/(tn[0]*wn[1]-wn[0]*tn[1]);wn[1]*bs,-tn[1]*bs,-wn[0]*bs,tn[0]*bs;var S1=new Float64Array([-.0022392098386786394,21308606513250217e-22,-2559257686421274e-24,33701965267802837e-28,-4667545312611249e-30,667492870384816e-32]),w1=new Float64Array([.0022392089963541657,28831978048607556e-22,508622073997266e-23,102018123778161e-25,21912872306767718e-30,49284235482523806e-33]),E1=class{applyCoefficients(r,e){const t=Math.sin(r),i=Math.cos(r),o=2*(i-t)*(i+t);let c,d;return c=o*e[5]+e[4],d=o*c+e[3],c=o*d-c+e[2],d=o*c-d+e[1],c=o*d-c+e[0],r+2*t*i*c}forward(r){return this.applyCoefficients(r,S1)}inverse(r){return this.applyCoefficients(r,w1)}},Xf=new E1;function Pc(r){return r*(Math.PI/180)}function Lc(r){return r*(180/Math.PI)}function kc(r){const e=Uf(r),t=Math.atan2(r[1],r[0]);return[e,t]}function x1([r,e]){const t=r*Math.cos(e),i=r*Math.sin(e);return[t,i]}function C1(r,[e,t,i]){const o=[e[0]-i[0],e[1]-i[1]],c=[i[0]-t[0],i[1]-t[1]],d=[r[0]-i[0],r[1]-i[1]],m=c[0]*o[1]-c[1]*o[0],_=(c[0]*d[1]-c[1]*d[0])/m,T=(o[0]*d[1]-o[1]*d[0])/m,y=1-(_+T);return[_,T,y]}function M1(r,[e,t,i]){return[r[0]*e[0]+r[1]*t[0]+r[2]*i[0],r[0]*e[1]+r[1]*t[1]+r[2]*i[1]]}function AA(r){const e=Math.atan2(r[1],r[0]),t=Math.sqrt(r[0]*r[0]+r[1]*r[1]),i=Math.atan2(t,r[2]);return[e,i]}function Tn([r,e]){const t=Math.sin(e),i=t*Math.cos(r),o=t*Math.sin(r),c=Math.cos(e);return[i,o,c]}var Yf=93;function I1([r,e]){const t=Pc(r+Yf),i=Pc(e),o=Xf.forward(i),c=Math.PI/2-o;return[t,c]}function Jf(r){return((r+180)%360+360)%360-180}function Zf([r,e]){const t=Jf(Lc(r)-Yf),i=Math.PI/2-e,o=Xf.inverse(i),c=Lc(o);return[t,c]}function R1(r){const e=yn();for(let c=0;c<r.length;c++)f1(e,e,Tn(I1(r[c])));QA(e,e);let[t,i]=Zf(AA(e));(i>89.99||i<-89.99)&&(t=r[0][0]),t=Jf(t);const o=new Array(r.length);for(let c=0;c<r.length;c++){let d=r[c][0];const m=r[c][1];for(;d-t>180;)d=d-360;for(;d-t<-180;)d=d+360;o[c]=[d,m]}return o}function N1(){const r=new Float64Array(4);return r[3]=1,r}function P1(r,e){return r[0]=-e[0],r[1]=-e[1],r[2]=-e[2],r[3]=e[3],r}fi(1,0,0);fi(0,1,0);var _o=Math.sqrt(5),To=Math.sqrt(.2),eh=Math.sqrt((1-To)/2),th=Math.sqrt((1+To)/2),_s=.5,Oc=Math.sqrt((2.5-_o)/10),Fc=Math.sqrt((2.5+_o)/10),Bc=Math.sqrt((1+To)/8),Dc=Math.sqrt((1-To)/8),Uc=Math.sqrt((3-_o)/8),Vc=Math.sqrt((3+_o)/8),L1=[[0,0],[eh,0],[Oc,_s],[-Bc,Uc],[-Bc,-Uc],[Oc,-_s],[-th,0],[-Dc,-Vc],[Fc,-_s],[Fc,_s],[-Dc,Vc],[0,0]],k1=L1.map(([r,e])=>[-e,r]),Ts=k1.map((r,e)=>e===0?[0,0,0,1]:e===11?[0,-1,0,0]:[...r,0,e<6?th:eh]),rh=["vu","uw","vw","vw","vw"],Bi=["wu","uw","vw","vu","uw"],da=["wu","uv","wv","wu","uw"],vs=["vu","uv","wv","wu","uw"],O1=[rh,vs,da,Bi,da,vs,da,Bi,Bi,Bi,vs,vs],F1=[4,2,3,2,0,4,3,2,2,0,3,0],jc=[0,1,2,4,3,5,7,8,6,11,10,9],vr=[];function B1(){ys([0,0],0,Ts[0]);for(let r=0;r<5;r++){const e=r*$s,t=e+Mr;ys([e,oA],Mr,Ts[r+1]),ys([t,Math.PI-oA],Mr,Ts[(r+3)%5+6])}ys([0,Math.PI],0,Ts[11])}var Bn=0;function ys(r,e,t){if(Bn>11)throw new Error(`Too many origins: ${Bn}`);const i=N1();P1(i,t);const o={id:Bn,axis:r,axisCartesian:Tn(r),quat:t,inverseQuat:i,angle:e,orientation:O1[Bn],firstQuintant:F1[Bn]};vr.push(o),Bn++}B1();vr.sort((r,e)=>jc.indexOf(r.id)-jc.indexOf(e.id));vr.forEach((r,e)=>r.id=e);function D1(r,e){const t=e.orientation,i=t===rh||t===Bi?-1:1,o=(r-e.firstQuintant+5)%5,c=t[o];return{quintant:(e.firstQuintant+i*o+5)%5,orientation:c}}var U1=class{forward([r,e]){return[Math.tan(e),r]}inverse([r,e]){return[e,Math.atan(r)]}};function V1(r,e,t,i,o,c){const d=new Float64Array(6);return d[0]=r,d[1]=e,d[2]=t,d[3]=i,d[4]=o,d[5]=c,d}function j1(r,e,t){return r[0]*(e[1]*t[2]-e[2]*t[1])+r[1]*(e[2]*t[0]-e[0]*t[2])+r[2]*(e[0]*t[1]-e[1]*t[0])}function Gc(r,e,t){const i=1+(r[0]*e[0]+r[1]*e[1]+r[2]*e[2])+(e[0]*t[0]+e[1]*t[1]+e[2]*t[2])+(t[0]*r[0]+t[1]*r[1]+t[2]*r[2]);return 2*Math.atan2(j1(r,e,t),i)}var zc=yn(),Ut=yn(),pa=Mn(),ma=Mn(),G1=class nh{constructor(e){this.constants=nh.computeConstants(e)}static computeConstants(e){const[t,i,o]=e,c=yn();Mc(c,i,o);const d=Lr(t,i),m=Lr(t,o),_=Lr(i,o),T=Lr(t,c),y=m+_,w=d+1,M=d*_-m,N=y*y-w*w,O=2*w*M,F=V1(T*T-N,-O,-2*T*y,2*T*w,T*T+N,O);return{volumeABC:T,areaABC:Gc(t,i,o),AdotB:d,AdotC:m,alphaTransform:F}}forward(e,t,i){const[o,c,d]=t,{areaABC:m,volumeABC:_}=this.constants;Mc(zc,c,d);const T=Lr(e,zc);gs(Ut,e,_),ha(Ut,Ut,o,-T);const y=h1(Ut),w=y>0?1/y:1;gs(Ut,Ut,w);const N=Math.max(0,Gc(o,c,Ut))/m,O=y/_*Math.sqrt((1+Lr(o,Ut))/(1+Lr(o,e))),F=[1-O,O*(1-N),O*N];return M1(F,i)}inverse(e,t,i){const[o,c,d]=i,m=C1(e,t),_=1-1e-14;if(m[0]>_)return o;if(m[1]>_)return c;if(m[2]>_)return d;const{AdotB:T,AdotC:y,alphaTransform:w,areaABC:M}=this.constants,N=Lr(o,c),O=Math.abs(N-T)>Math.abs(N-y),F=O?d:c,W=O?c:d,j=O?m[1]:m[2],q=1-m[0],J=j/q*M;pa[0]=Math.cos(J),pa[1]=Math.sin(J),jf(ma,pa,w),gs(Ut,F,ma[0]),ha(Ut,Ut,W,ma[1]),QA(Ut,Ut);const Z=Lr(o,Ut),Y=1+q*q*(Z-1),se=q*Math.sqrt((1+Y)/(1+Z)),he=Y-Z*se,ue=yn();return gs(ue,o,he),ha(ue,ue,Ut,se),ue}},z1=!1,KA=[0,1,2,3,4].map(r=>{const e=Ff();return a1(e,$s*r),e}),Hc=Mn(),qc=Mn();[0,1,2,3].map(r=>{const e=Wf.clone();return r&1&&e.rotate180(),r&2&&e.reflectY(),e.getCenter()});function H1(r,e,t,i,o=z1){const c=(o?$f:Wf).clone();return i&1&&c.rotate180(),i&2&&c.reflectY(),A1(qc,t.x+t.y,-t.x+(i&1)),qA(Hc,qc,y1),c.translate(Hc),c.scale(1/2**r),c.transform(KA[e]),c}function ih(r){const e=$f.clone();return e.transform(KA[r]),e}function q1(){const r=[];for(const e of KA)r.push(qA(Mn(),tn,e));return r.reverse(),new WA(r)}var Q1=class{constructor(){if(this.vertices=[],this.addFaceCenters(),this.addVertices(),this.addMidpoints(),this.vertices.length!==62)throw new Error("Failed to construct CRS: vertices length is not 62");Object.freeze(this.vertices)}getCanonicalTriangle(){return[this.vertices[0],this.vertices[32],this.vertices[12]]}getVertex(r){for(const e of this.vertices)if(Cc(r,e)<1e-5)return e;throw new Error("Failed to find vertex in CRS")}addFaceCenters(){vr.forEach(r=>this.add(Tn(r.axis)))}addVertices(){const r=Math.atan(m1);for(const e of vr)for(let t=0;t<5;t++){const i=(2*t+1)*Math.PI/5,o=Tn([i+e.angle,r]);Ks(o,o,e.quat),this.add(o)}}addMidpoints(){const r=Math.atan(bo);for(const e of vr)for(let t=0;t<5;t++){const i=2*t*Math.PI/5,o=Tn([i+e.angle,r]);Ks(o,o,e.quat),this.add(o)}}add(r){const e=QA(yn(),r);return this.vertices.find(i=>Cc(e,i)<1e-5)?!1:(this.vertices.push(e),!0)}},Qc=new Q1,W1=class{constructor(){this.faceTriangles=[],this.sphericalTriangles=[],this.equalArea=new G1(Qc.getCanonicalTriangle()),this.gnomonic=new U1}forward(r,e){return this.forwardCartesian(Tn(r),e)}forwardCartesian(r,e){const t=vr[e],i=yn();Ks(i,r,t.inverseQuat);const o=AA(i),c=this.gnomonic.forward(o);c[1]=c[1]-t.angle;const d=this.getFaceTriangleIndex(c),m=this.shouldReflect(c);let _=this.getFaceTriangle(d,m,!1),T=this.getSphericalTriangle(d,e,m);return this.equalArea.forward(r,T,_)}inverse(r,e){const t=kc(r),i=this.getFaceTriangleIndex(t),o=this.shouldReflect(t),c=this.getFaceTriangle(i,o,!1),d=this.getSphericalTriangle(i,e,o),m=this.equalArea.inverse(r,c,d);return AA(m)}shouldReflect(r){const[e,t]=r;return x1([e,this.normalizeGamma(t)])[0]>bo}getFaceTriangleIndex([r,e]){return(Math.floor(e/Mr)+10)%10}getFaceTriangle(r,e=!1,t=!1){let i=r;return e&&(i+=t?20:10),this.faceTriangles[i]?this.faceTriangles[i]:(this.faceTriangles[i]=e?this._getReflectedFaceTriangle(r,t):this._getFaceTriangle(r),Object.freeze(this.faceTriangles[i]),this.faceTriangles[i])}_getFaceTriangle(r){const e=Math.floor((r+1)/2)%5,[t,i,o]=ih(e).getVertices(),c=Mn();return Vf(c,i,o,.5),r%2===0?[t,c,i]:[t,o,c]}_getReflectedFaceTriangle(r,e=!1){let[t,i,o]=this._getFaceTriangle(r).map(m=>sA(m));const c=r%2===0;return Df(t,t),l1(t,t,c?i:o,e?1+1/Math.cos(oA):2),[t,o,i]}getSphericalTriangle(r,e,t=!1){let i=10*e+r;return t&&(i+=120),this.sphericalTriangles[i]?this.sphericalTriangles[i]:(this.sphericalTriangles[i]=this._getSphericalTriangle(r,e,t),Object.freeze(this.sphericalTriangles[i]),this.sphericalTriangles[i])}_getSphericalTriangle(r,e,t=!1){const i=vr[e];return this.getFaceTriangle(r,t,!0).map(d=>{const[m,_]=kc(d),T=[m,_+i.angle],y=Tn(this.gnomonic.inverse(T));return Ks(y,y,i.quat),Qc.getVertex(y)})}normalizeGamma(r){const e=r/$s,t=Math.round(e);return(e-t)*$s}},sh={A:"PQAB",B:"B+++PQ---A",C:"P---RMb+++",M:"qQ+++C---b",P:"PpB---B+++",Q:"PQ---Cb+++",R:"b+++a---qQ"},K1={A:"E",B:"+e-",C:"-e+",M:"T",P:"S",Q:"D",R:"+++D---"},Wc=Object.keys(sh);[...Wc,...Wc.map(r=>r.toLowerCase())];var $1=r=>r>="a"&&r<="z"?r.toUpperCase():r.toLowerCase(),oh=r=>[...r].reverse().map(e=>e==="+"?"-":e==="-"?"+":$1(e)).join("");function Kc(r,e){let t="";for(const i of r){const o=i.toUpperCase();e[i]!==void 0?t+=e[i]:i!==o&&e[o]!==void 0?t+=oh(e[o]):t+=i}return t}var ah=(r,e)=>({a:r.a+e.a,b:r.b+e.b}),X1=r=>({a:-r.b,b:r.a+r.b}),Ah=(r,e)=>{let t=r;const i=(e%6+6)%6;for(let o=0;o<i;o++)t=X1(t);return t},ch={E:{a:4,b:0},e:{a:4,b:0},S:{a:4,b:-2},s:{a:4,b:-2},U:{a:0,b:2},u:{a:0,b:2},D:{a:0,b:-2},d:{a:0,b:-2},T:{a:-4,b:0},t:{a:-4,b:0}},Y1=new Set(Object.keys(ch)),J1={E:[{a:0,b:0},{a:4,b:0},{a:4,b:-4}],e:[{a:0,b:0},{a:4,b:0},{a:0,b:4}],S:[{a:0,b:0},{a:4,b:0},{a:4,b:-4}],s:[{a:4,b:-2},{a:0,b:2},{a:0,b:-2}],U:[{a:0,b:2},{a:0,b:-2},{a:4,b:-2}],u:[{a:0,b:0},{a:0,b:4},{a:-4,b:4}],D:[{a:0,b:2},{a:0,b:-2},{a:4,b:-2}],d:[{a:0,b:0},{a:0,b:-4},{a:-4,b:0}],T:[{a:0,b:-4},{a:-4,b:0},{a:-4,b:-4}],t:[{a:-4,b:4},{a:0,b:0},{a:0,b:4}]};function cA(r,e,t){return J1[r].map(i=>ah(e,Ah(i,t)))}function Z1(r,e,t){const[i,o,c]=cA(r,e,t);return{a:i.a+o.a+c.a,b:i.b+o.b+c.b}}function lA(r,e,t,i){let o={...e},c=(t%6+6)%6;for(const d of r){if(d==="+"){c=(c+1)%6;continue}if(d==="-"){c=(c+5)%6;continue}Y1.has(d)&&(i==null||i(d,o,c),o=ah(o,Ah(ch[d],c)))}return{pos:o,heading:c}}function e_(r){const e=lA(r,{a:0,b:0},0);return{disp:e.pos,dHeading:e.heading}}var $c=1e-6;function t_(r,e,t){const i=t?-1:1,o=[];for(let c=0;c<4;c++){const d=e*4+c,m=r.childToken[d],_=r.childFlip[d],T=r.childOffA[d],y=r.childOffB[d],w=r.fpEdges[m*2+(t^_)],M=[];for(let N=0;N<w.length;N+=4)M.push([3*T*i+w[N],3*y*i+w[N+1]]);o.push([c,M])}return o}function uA(r){if(r.length===1)return{leaf:r[0][0]};for(const[,e]of r){const t=e.length;for(let i=0;i<t;i++){const[o,c]=e[i],[d,m]=e[(i+1)%t],_=m-c,T=-(d-o),y=-(_*o+T*c),w=[],M=[];let N=!0;for(const[O,F]of r){let W=1/0,j=-1/0;for(const[q,J]of F){const Z=_*q+T*J+y;Z<W&&(W=Z),Z>j&&(j=Z)}if(W>=-$c)w.push([O,F]);else if(j<=$c)M.push([O,F]);else{N=!1;break}}if(N&&w.length&&M.length)return{nx:_,ny:T,c:y,pos:uA(w),neg:uA(M)}}}throw new Error("lsystem: no clean BSP split for child set")}function fA(r,e){if("leaf"in r)return;const t=[r.nx,r.ny,r.c];e.some(i=>i[0]===t[0]&&i[1]===t[1]&&i[2]===t[2])||e.push(t),fA(r.pos,e),fA(r.neg,e)}function lh(r,e,t){if("leaf"in r)return r.leaf;const i=t.findIndex(o=>o[0]===r.nx&&o[1]===r.ny&&o[2]===r.c);return lh(e>>i&1?r.pos:r.neg,e,t)}var Xc={S:0,D:1,E:2,T:3};function uh(r,e){const t=Object.keys(r),i=[...t,...t.map(Z=>Z.toLowerCase())],o=i.length,c={};i.forEach((Z,Y)=>c[Z]=Y);function d(Z,Y){let se=Z;for(let he=0;he<Y;he++)se=Kc(se,r);return Kc(se,e)}const m=Z=>e_(d(Z,1)).disp;function _(Z){let Y={a:0,b:0},se=0;const he=[];for(const ue of Z){if(ue==="+"){se=(se+1)%6;continue}if(ue==="-"){se=(se+5)%6;continue}if(r[ue.toUpperCase()]===void 0)continue;if(se!==0&&se!==3)throw new Error(`lsystem: non-180° turn (${60*se}°) before a child in rule "${Z}"`);const $=se===3;he.push({token:ue,offUnit:{...Y},flip:$});const Q=m(ue);Y=$?{a:Y.a-Q.a,b:Y.b-Q.b}:{a:Y.a+Q.a,b:Y.b+Q.b}}if(he.length!==4)throw new Error(`lsystem: rule "${Z}" must have 4 children`);return he}const T={};for(const Z of t)T[Z]=_(r[Z]);for(const Z of t)T[Z.toLowerCase()]=_(oh(r[Z]));const y=new Int32Array(o*4),w=new Uint8Array(o*4),M=new Float64Array(o*4),N=new Float64Array(o*4);for(const Z of i){const Y=T[Z];for(let se=0;se<4;se++){const he=c[Z]*4+se;y[he]=c[Y[se].token],w[he]=Y[se].flip?1:0,M[he]=Y[se].offUnit.a,N[he]=Y[se].offUnit.b}}function O(Z){const Y=[...new Map(Z.map($=>[`${$.a},${$.b}`,$])).values()].sort(($,Q)=>$.a-Q.a||$.b-Q.b);if(Y.length<3)return Y;const se=($,Q,U)=>(Q.a-$.a)*(U.b-$.b)-(Q.b-$.b)*(U.a-$.a),he=[];for(const $ of Y){for(;he.length>=2&&se(he[he.length-2],he[he.length-1],$)<=0;)he.pop();he.push($)}const ue=[];for(let $=Y.length-1;$>=0;$--){const Q=Y[$];for(;ue.length>=2&&se(ue[ue.length-2],ue[ue.length-1],Q)<=0;)ue.pop();ue.push(Q)}return he.slice(0,-1).concat(ue.slice(0,-1))}const F=new Array(o*2);for(const Z of i){const Y=[];lA(d(Z,1),{a:0,b:0},0,(he,ue,$)=>Y.push(...cA(he,ue,$)));const se=O(Y);for(let he=0;he<2;he++){const ue=he?-1:1,$=new Float64Array(se.length*4);for(let Q=0;Q<se.length;Q++){const U=se[Q],be=se[(Q+1)%se.length];$[Q*4]=3*ue*U.a,$[Q*4+1]=3*ue*U.b,$[Q*4+2]=ue*(be.a-U.a),$[Q*4+3]=ue*(be.b-U.b)}F[c[Z]*2+he]=$}}const W=new Float64Array(o*2*8),j=new Float64Array(o*2*48),q=new Uint8Array(o*2*4);for(const Z of i){const Y=d(Z,1);for(let se=0;se<2;se++){const he=c[Z]*2+se;let ue=0;lA(Y,{a:0,b:0},se?3:0,($,Q,U)=>{const be=Z1($,Q,U);W[he*8+ue*2]=be.a,W[he*8+ue*2+1]=be.b;const ve=$.toUpperCase();if(Xc[ve]===void 0)throw new Error(`lsystem: no pentagon flavor for draw symbol ${$}`);q[he*4+ue]=Xc[ve]^($===ve?0:1)^U&1;let Se=cA($,Q,U);(Se[1].a-Se[0].a)*(Se[2].b-Se[0].b)-(Se[1].b-Se[0].b)*(Se[2].a-Se[0].a)<0&&(Se=[Se[0],Se[2],Se[1]]);for(let Le=0;Le<3;Le++){const Be=Se[Le],Ke=Se[(Le+1)%3],Ze=he*48+ue*12+Le*4;j[Ze]=3*Be.a,j[Ze+1]=3*Be.b,j[Ze+2]=Ke.a-Be.a,j[Ze+3]=Ke.b-Be.b}ue++})}}const J={motifIdx:c,childToken:y,childFlip:w,childOffA:M,childOffB:N,fpEdges:F,leafSum:W,leafTri:j,leafFlavor:q,classSep:new Float64Array(o*2*9),classLut:new Uint8Array(o*2*8)};for(let Z=0;Z<o;Z++)for(let Y=0;Y<2;Y++){const se=Z*2+Y,he=uA(t_(J,Z,Y)),ue=[];fA(he,ue);for(let $=0;$<ue.length;$++)J.classSep[se*9+$*3]=ue[$][0],J.classSep[se*9+$*3+1]=ue[$][1],J.classSep[se*9+$*3+2]=ue[$][2];for(let $=0;$<8;$++)J.classLut[se*8+$]=lh(he,$,ue)}return J}var Ys=new Float64Array(32);for(let r=0;r<32;r++)Ys[r]=2**r;var fh=new Float64Array(20);for(let r=0;r<20;r++)fh[r]=4**r;uh(sh,K1);var Yc=13,r_=26n,n_=0x3ffffffn;function i_(r,e){if((2*r+e)%12!==0||e%4!==0)throw new Error(`abToTriple: off-lattice corner sum (${r},${e})`);const t=(2*r+e-12)/12,i=(e+4)/4;for(const o of[0,1]){if((i+o)%3!==0)continue;const c=(i+o)/3,d=o-c;if((d+t)%2===0)return{x:c,y:(d+t)/2,z:(d-t)/2}}throw new Error(`abToTriple: no integer triple for (${r},${e})`)}function s_(r,e,t,i){const{childToken:o,childFlip:c,childOffA:d,childOffB:m,leafSum:_,leafFlavor:T}=r,y=Number(e&n_),w=Number(e>>r_);let M=i,N=0,O=0,F=0;for(let q=t;q>=2;q--){const J=q-1,Z=J<Yc?y>>>(J<<1)&3:Math.floor(w/fh[J-Yc])%4,Y=M*4+Z,se=N?-Ys[q-2]:Ys[q-2];O+=d[Y]*se,F+=m[Y]*se,N^=c[Y],M=o[Y]}const W=t>=1?y&3:0,j=M*2+N;return{a:3*O+_[j*8+W*2],b:3*F+_[j*8+W*2+1],flavor:T[j*4+W]}}var hh=uh({W:"W+++Z---WZ",Z:"Z+++W---ZW"},{W:"E",Z:"+e-"}),o_=hh.motifIdx.W;function dh(r){return Array.from({length:r.length},(e,t)=>r.indexOf(t))}var ph=[0,1,3,4,5,6,7,2],mh=[0,1,2,7,3,4,5,6];dh(ph);dh(mh);function a_(r,e,t,i,o){if(e<=0)return;const c=r[e]||0,d=r[e-1],m=t[0]+t[1];let _=!0,T=!0;if(i!==(m===0)?(_=c===1||c===2,T=c===1):(_=c<2,T=c===0),!_)return;const y=T?d:d+4,w=o[y];r[e-1]=w%4,r[e]=(c+4+Math.floor(w/4)-Math.floor(y/4))%4}function A_(r,e){e===1?r[1]=-r[1]:e===3&&(r[0]=-r[0])}function c_(r,e,t){const i=t?mh:ph,o=[1,1];for(let c=r.length-1;c>=0;c--)a_(r,c,o,e,i),A_(o,r[c]);return o}function l_(r,e){const t=[];let i=r;for(;i>0n||t.length<e;)t.push(Number(i&3n)),i>>=2n;return t}function u_(r){let e=0n;for(let t=r.length-1;t>=0;t--)e=e<<2n|BigInt(r[t]);return e}var f_={uv:{reverse:!1,invertJ:!1,flipIJ:!1},vu:{reverse:!0,invertJ:!1,flipIJ:!1},uw:{reverse:!1,invertJ:!1,flipIJ:!0},wu:{reverse:!0,invertJ:!1,flipIJ:!0},vw:{reverse:!0,invertJ:!0,flipIJ:!1},wv:{reverse:!1,invertJ:!0,flipIJ:!1}};function h_(r,e){const t=r[1]===-1?1:0,o=(r[0]+r[1]===0?e===0||e===3:e===2||e===3)?1:0;return t|o<<1}function d_(r,e,t){const i=1n<<BigInt(2*e),o=t.reverse?i-1n-r:r,c=l_(o,e),d=c_(c,t.invertJ,t.flipIJ),m=s_(hh,u_(c),e,o_);let _=i_(m.a,m.b);if(t.flipIJ&&(_={x:_.z,y:_.y,z:_.x}),t.invertJ){const T=Ys[e]-1;_={x:_.y-T,y:_.x+T,z:_.z}}return{triple:_,flips:d,q:c.length>0?c[0]:0}}function p_(r,e,t="uv"){const i=f_[t],{triple:o,flips:c,q:d}=d_(r,e,i);return i.invertJ&&(c[0]=-c[0]),{triple:o,flavor:h_(c,d)}}var Zn=2,hA=30,Jc=58n,m_=0n;function g_(r){if(r===0n)return-1;if(r&1n||(r&0b111n)===0b100n||(r&0b11111n)===0b10000n)return hA;let e=hA-1,t=r>>1n;if(t===0n)return-1;let i=Number(t&0xffffffffn),o;for(i===0?(t>>=32n,e-=16,o=Number(t)):o=i,(o&65535)===0&&(o>>=16,e-=8),e>=6&&(o&255)===0&&(o>>=8,e-=4),e>=4&&(o&15)===0&&(o>>=4,e-=2);e>-1&&(o&1)===0;)e-=1,o=o>>(e<Zn?1:2);return e}function b_(r){const e=g_(r);if(e===-1)return{origin:vr[0],segment:0,S:0n,resolution:e};let t=Jc,i=0;if(e===hA){const w=r&1n?1n:r&0b100n?3n:5n;t=Jc+w,i=w===1n?0:w===3n?32:40}const o=Number(r>>t)+i;let c,d;if(e===0)c=vr[o],d=0;else{const w=Math.floor(o/5);c=vr[w],d=(o+c.firstQuintant)%5}if(!c)throw new Error(`Could not parse origin: ${o}`);if(e<Zn)return{origin:c,segment:d,S:0n,resolution:e};const m=e-Zn+1,_=BigInt(2*m),T=(1n<<t)-1n,y=(r&T)>>t-_;return{origin:c,segment:d,S:y,resolution:e}}var __=24,T_=1.4;fi(0,0,1);(()=>{const r=[];for(let e=0;e<__;e++){const t=(e+1)*T_;r.push(fi(Math.cos(t),Math.sin(t),0))}return r})();Ff();var v_=new W1;function y_({S:r,segment:e,origin:t,resolution:i}){const{quintant:o,orientation:c}=D1(e,t);if(i===Zn-1)return ih(o);if(i===Zn-2)return q1();const d=i-Zn+1,{triple:m,flavor:_}=p_(r,d,c);return H1(d,o,m,_)}function S_(r,{closedRing:e=!0,segments:t="auto"}={closedRing:!0,segments:"auto"}){if(r===m_)return[];const{S:i,segment:o,origin:c,resolution:d}=b_(r);t==="auto"&&(t=Math.max(1,Math.pow(2,6-d)));const T=y_({S:i,segment:o,origin:c,resolution:d}).splitEdges(t).getVertices(),y=new Array(T.length);for(let M=0;M<T.length;M++)y[M]=Zf(v_.inverse(T[M],c.id));const w=R1(y);return e&&w.push(w[0]),w.reverse(),w}function w_(r){return BigInt(`0x${r}`)}var gh=2,E_=gh*Gf/Math.sqrt(15),bh=new Array(31);bh[0]=gh*Gf/Math.sqrt(3);for(let r=1;r<=30;r++)bh[r]=E_/(1<<r-1);fi(0,0,1);fi(1,0,0);var He=(function(r){r=r||{};var e=typeof r<"u"?r:{},t={},i;for(i in e)e.hasOwnProperty(i)&&(t[i]=e[i]);var o="";function c(te){return e.locateFile?e.locateFile(te,o):o+te}var d;typeof document<"u"&&document.currentScript&&(o=document.currentScript.src),o.indexOf("blob:")!==0?o=o.substr(0,o.lastIndexOf("/")+1):o="",d=function(ae,_e,ne){var n=new XMLHttpRequest;n.open("GET",ae,!0),n.responseType="arraybuffer",n.onload=function(){if(n.status==200||n.status==0&&n.response){_e(n.response);return}var Pe=Po(ae);if(Pe){_e(Pe.buffer);return}ne()},n.onerror=ne,n.send(null)};var m=e.print||console.log.bind(console),_=e.printErr||console.warn.bind(console);for(i in t)t.hasOwnProperty(i)&&(e[i]=t[i]);t=null,e.arguments&&e.arguments;var T=0,y=function(te){T=te},w=function(){return T},M=8;function N(te,ae,_e,ne){switch(_e=_e||"i8",_e.charAt(_e.length-1)==="*"&&(_e="i32"),_e){case"i1":be[te>>0]=ae;break;case"i8":be[te>>0]=ae;break;case"i16":Se[te>>1]=ae;break;case"i32":Ie[te>>2]=ae;break;case"i64":No=[ae>>>0,(Pn=ae,+Vr(Pn)>=1?Pn>0?(mi(+pi(Pn/4294967296),4294967295)|0)>>>0:~~+Nn((Pn-+(~~Pn>>>0))/4294967296)>>>0:0)],Ie[te>>2]=No[0],Ie[te+4>>2]=No[1];break;case"float":Le[te>>2]=ae;break;case"double":Be[te>>3]=ae;break;default:An("invalid type for setValue: "+_e)}}function O(te,ae,_e){switch(ae=ae||"i8",ae.charAt(ae.length-1)==="*"&&(ae="i32"),ae){case"i1":return be[te>>0];case"i8":return be[te>>0];case"i16":return Se[te>>1];case"i32":return Ie[te>>2];case"i64":return Ie[te>>2];case"float":return Le[te>>2];case"double":return Be[te>>3];default:An("invalid type for getValue: "+ae)}return null}var F=!1;function W(te,ae){te||An("Assertion failed: "+ae)}function j(te){var ae=e["_"+te];return W(ae,"Cannot call unknown function "+te+", make sure it is exported"),ae}function q(te,ae,_e,ne,n){var P={string:function(zt){var jr=0;if(zt!=null&&zt!==0){var Gr=(zt.length<<2)+1;jr=E0(Gr),ue(zt,jr,Gr)}return jr},array:function(zt){var jr=E0(zt.length);return $(zt,jr),jr}};function Pe(zt){return ae==="string"?se(zt):ae==="boolean"?!!zt:zt}var $e=j(te),Et=[],et=0;if(ne)for(var Qe=0;Qe<ne.length;Qe++){var tt=P[_e[Qe]];tt?(et===0&&(et=Jp()),Et[Qe]=tt(ne[Qe])):Et[Qe]=ne[Qe]}var nt=$e.apply(null,Et);return nt=Pe(nt),et!==0&&Yp(et),nt}function J(te,ae,_e,ne){_e=_e||[];var n=_e.every(function(Pe){return Pe==="number"}),P=ae!=="string";return P&&n&&!ne?j(te):function(){return q(te,ae,_e,arguments)}}var Z=typeof TextDecoder<"u"?new TextDecoder("utf8"):void 0;function Y(te,ae,_e){for(var ne=ae+_e,n=ae;te[n]&&!(n>=ne);)++n;if(n-ae>16&&te.subarray&&Z)return Z.decode(te.subarray(ae,n));for(var P="";ae<n;){var Pe=te[ae++];if(!(Pe&128)){P+=String.fromCharCode(Pe);continue}var $e=te[ae++]&63;if((Pe&224)==192){P+=String.fromCharCode((Pe&31)<<6|$e);continue}var Et=te[ae++]&63;if((Pe&240)==224?Pe=(Pe&15)<<12|$e<<6|Et:Pe=(Pe&7)<<18|$e<<12|Et<<6|te[ae++]&63,Pe<65536)P+=String.fromCharCode(Pe);else{var et=Pe-65536;P+=String.fromCharCode(55296|et>>10,56320|et&1023)}}return P}function se(te,ae){return te?Y(ve,te,ae):""}function he(te,ae,_e,ne){if(!(ne>0))return 0;for(var n=_e,P=_e+ne-1,Pe=0;Pe<te.length;++Pe){var $e=te.charCodeAt(Pe);if($e>=55296&&$e<=57343){var Et=te.charCodeAt(++Pe);$e=65536+(($e&1023)<<10)|Et&1023}if($e<=127){if(_e>=P)break;ae[_e++]=$e}else if($e<=2047){if(_e+1>=P)break;ae[_e++]=192|$e>>6,ae[_e++]=128|$e&63}else if($e<=65535){if(_e+2>=P)break;ae[_e++]=224|$e>>12,ae[_e++]=128|$e>>6&63,ae[_e++]=128|$e&63}else{if(_e+3>=P)break;ae[_e++]=240|$e>>18,ae[_e++]=128|$e>>12&63,ae[_e++]=128|$e>>6&63,ae[_e++]=128|$e&63}}return ae[_e]=0,_e-n}function ue(te,ae,_e){return he(te,ve,ae,_e)}typeof TextDecoder<"u"&&new TextDecoder("utf-16le");function $(te,ae){be.set(te,ae)}function Q(te,ae){return te%ae>0&&(te+=ae-te%ae),te}var U,be,ve,Se,Ie,Le,Be;function Ke(te){U=te,e.HEAP8=be=new Int8Array(te),e.HEAP16=Se=new Int16Array(te),e.HEAP32=Ie=new Int32Array(te),e.HEAPU8=ve=new Uint8Array(te),e.HEAPU16=new Uint16Array(te),e.HEAPU32=new Uint32Array(te),e.HEAPF32=Le=new Float32Array(te),e.HEAPF64=Be=new Float64Array(te)}var Ze=5271296,Ge=28384,ze=e.TOTAL_MEMORY||33554432;e.buffer?U=e.buffer:U=new ArrayBuffer(ze),ze=U.byteLength,Ke(U),Ie[Ge>>2]=Ze;function st(te){for(;te.length>0;){var ae=te.shift();if(typeof ae=="function"){ae();continue}var _e=ae.func;typeof _e=="number"?ae.arg===void 0?e.dynCall_v(_e):e.dynCall_vi(_e,ae.arg):_e(ae.arg===void 0?null:ae.arg)}}var jt=[],Ji=[],Zi=[],di=[];function wt(){if(e.preRun)for(typeof e.preRun=="function"&&(e.preRun=[e.preRun]);e.preRun.length;)Rn(e.preRun.shift());st(jt)}function Gt(){st(Ji)}function sr(){st(Zi)}function on(){if(e.postRun)for(typeof e.postRun=="function"&&(e.postRun=[e.postRun]);e.postRun.length;)Ir(e.postRun.shift());st(di)}function Rn(te){jt.unshift(te)}function Ir(te){di.unshift(te)}var Vr=Math.abs,Nn=Math.ceil,pi=Math.floor,mi=Math.min,an=0,gi=null;function Bp(te){an++,e.monitorRunDependencies&&e.monitorRunDependencies(an)}function Dp(te){if(an--,e.monitorRunDependencies&&e.monitorRunDependencies(an),an==0&&gi){var ae=gi;gi=null,ae()}}e.preloadedImages={},e.preloadedAudios={};var Rr=null,Ro="data:application/octet-stream;base64,";function S0(te){return String.prototype.startsWith?te.startsWith(Ro):te.indexOf(Ro)===0}var Pn,No;Rr="data:application/octet-stream;base64,AAAAAAAAAAAAAAAAAQAAAAIAAAADAAAABAAAAAUAAAAGAAAAAQAAAAQAAAADAAAABgAAAAUAAAACAAAAAAAAAAIAAAADAAAAAQAAAAQAAAAGAAAAAAAAAAUAAAADAAAABgAAAAQAAAAFAAAAAAAAAAEAAAACAAAABAAAAAUAAAAGAAAAAAAAAAIAAAADAAAAAQAAAAUAAAACAAAAAAAAAAEAAAADAAAABgAAAAQAAAAGAAAAAAAAAAUAAAACAAAAAQAAAAQAAAADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAEAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAIAAAADAAAAAAAAAAAAAAACAAAAAAAAAAEAAAADAAAAAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAABAAAAAYAAAAAAAAABQAAAAAAAAAAAAAABAAAAAUAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAYAAAAAAAAABgAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAgAAAAMAAAAEAAAABQAAAAYAAAABAAAAAgAAAAMAAAAEAAAABQAAAAYAAAAAAAAAAgAAAAMAAAAEAAAABQAAAAYAAAAAAAAAAQAAAAMAAAAEAAAABQAAAAYAAAAAAAAAAQAAAAIAAAAEAAAABQAAAAYAAAAAAAAAAQAAAAIAAAADAAAABQAAAAYAAAAAAAAAAQAAAAIAAAADAAAABAAAAAYAAAAAAAAAAQAAAAIAAAADAAAABAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAwAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAgAAAAIAAAAAAAAAAAAAAAYAAAAAAAAAAwAAAAIAAAADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAFAAAABAAAAAAAAAABAAAAAAAAAAAAAAAFAAAABQAAAAAAAAAAAAAAAAAAAAYAAAAAAAAABAAAAAAAAAAGAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAFAAAAAgAAAAQAAAADAAAACAAAAAEAAAAHAAAABgAAAAkAAAAAAAAAAwAAAAIAAAACAAAABgAAAAoAAAALAAAAAAAAAAEAAAAFAAAAAwAAAA0AAAABAAAABwAAAAQAAAAMAAAAAAAAAAQAAAB/AAAADwAAAAgAAAADAAAAAAAAAAwAAAAFAAAAAgAAABIAAAAKAAAACAAAAAAAAAAQAAAABgAAAA4AAAALAAAAEQAAAAEAAAAJAAAAAgAAAAcAAAAVAAAACQAAABMAAAADAAAADQAAAAEAAAAIAAAABQAAABYAAAAQAAAABAAAAAAAAAAPAAAACQAAABMAAAAOAAAAFAAAAAEAAAAHAAAABgAAAAoAAAALAAAAGAAAABcAAAAFAAAAAgAAABIAAAALAAAAEQAAABcAAAAZAAAAAgAAAAYAAAAKAAAADAAAABwAAAANAAAAGgAAAAQAAAAPAAAAAwAAAA0AAAAaAAAAFQAAAB0AAAADAAAADAAAAAcAAAAOAAAAfwAAABEAAAAbAAAACQAAABQAAAAGAAAADwAAABYAAAAcAAAAHwAAAAQAAAAIAAAADAAAABAAAAASAAAAIQAAAB4AAAAIAAAABQAAABYAAAARAAAACwAAAA4AAAAGAAAAIwAAABkAAAAbAAAAEgAAABgAAAAeAAAAIAAAAAUAAAAKAAAAEAAAABMAAAAiAAAAFAAAACQAAAAHAAAAFQAAAAkAAAAUAAAADgAAABMAAAAJAAAAKAAAABsAAAAkAAAAFQAAACYAAAATAAAAIgAAAA0AAAAdAAAABwAAABYAAAAQAAAAKQAAACEAAAAPAAAACAAAAB8AAAAXAAAAGAAAAAsAAAAKAAAAJwAAACUAAAAZAAAAGAAAAH8AAAAgAAAAJQAAAAoAAAAXAAAAEgAAABkAAAAXAAAAEQAAAAsAAAAtAAAAJwAAACMAAAAaAAAAKgAAAB0AAAArAAAADAAAABwAAAANAAAAGwAAACgAAAAjAAAALgAAAA4AAAAUAAAAEQAAABwAAAAfAAAAKgAAACwAAAAMAAAADwAAABoAAAAdAAAAKwAAACYAAAAvAAAADQAAABoAAAAVAAAAHgAAACAAAAAwAAAAMgAAABAAAAASAAAAIQAAAB8AAAApAAAALAAAADUAAAAPAAAAFgAAABwAAAAgAAAAHgAAABgAAAASAAAANAAAADIAAAAlAAAAIQAAAB4AAAAxAAAAMAAAABYAAAAQAAAAKQAAACIAAAATAAAAJgAAABUAAAA2AAAAJAAAADMAAAAjAAAALgAAAC0AAAA4AAAAEQAAABsAAAAZAAAAJAAAABQAAAAiAAAAEwAAADcAAAAoAAAANgAAACUAAAAnAAAANAAAADkAAAAYAAAAFwAAACAAAAAmAAAAfwAAACIAAAAzAAAAHQAAAC8AAAAVAAAAJwAAACUAAAAZAAAAFwAAADsAAAA5AAAALQAAACgAAAAbAAAAJAAAABQAAAA8AAAALgAAADcAAAApAAAAMQAAADUAAAA9AAAAFgAAACEAAAAfAAAAKgAAADoAAAArAAAAPgAAABwAAAAsAAAAGgAAACsAAAA+AAAALwAAAEAAAAAaAAAAKgAAAB0AAAAsAAAANQAAADoAAABBAAAAHAAAAB8AAAAqAAAALQAAACcAAAAjAAAAGQAAAD8AAAA7AAAAOAAAAC4AAAA8AAAAOAAAAEQAAAAbAAAAKAAAACMAAAAvAAAAJgAAACsAAAAdAAAARQAAADMAAABAAAAAMAAAADEAAAAeAAAAIQAAAEMAAABCAAAAMgAAADEAAAB/AAAAPQAAAEIAAAAhAAAAMAAAACkAAAAyAAAAMAAAACAAAAAeAAAARgAAAEMAAAA0AAAAMwAAAEUAAAA2AAAARwAAACYAAAAvAAAAIgAAADQAAAA5AAAARgAAAEoAAAAgAAAAJQAAADIAAAA1AAAAPQAAAEEAAABLAAAAHwAAACkAAAAsAAAANgAAAEcAAAA3AAAASQAAACIAAAAzAAAAJAAAADcAAAAoAAAANgAAACQAAABIAAAAPAAAAEkAAAA4AAAARAAAAD8AAABNAAAAIwAAAC4AAAAtAAAAOQAAADsAAABKAAAATgAAACUAAAAnAAAANAAAADoAAAB/AAAAPgAAAEwAAAAsAAAAQQAAACoAAAA7AAAAPwAAAE4AAABPAAAAJwAAAC0AAAA5AAAAPAAAAEgAAABEAAAAUAAAACgAAAA3AAAALgAAAD0AAAA1AAAAMQAAACkAAABRAAAASwAAAEIAAAA+AAAAKwAAADoAAAAqAAAAUgAAAEAAAABMAAAAPwAAAH8AAAA4AAAALQAAAE8AAAA7AAAATQAAAEAAAAAvAAAAPgAAACsAAABUAAAARQAAAFIAAABBAAAAOgAAADUAAAAsAAAAVgAAAEwAAABLAAAAQgAAAEMAAABRAAAAVQAAADEAAAAwAAAAPQAAAEMAAABCAAAAMgAAADAAAABXAAAAVQAAAEYAAABEAAAAOAAAADwAAAAuAAAAWgAAAE0AAABQAAAARQAAADMAAABAAAAALwAAAFkAAABHAAAAVAAAAEYAAABDAAAANAAAADIAAABTAAAAVwAAAEoAAABHAAAAWQAAAEkAAABbAAAAMwAAAEUAAAA2AAAASAAAAH8AAABJAAAANwAAAFAAAAA8AAAAWAAAAEkAAABbAAAASAAAAFgAAAA2AAAARwAAADcAAABKAAAATgAAAFMAAABcAAAANAAAADkAAABGAAAASwAAAEEAAAA9AAAANQAAAF4AAABWAAAAUQAAAEwAAABWAAAAUgAAAGAAAAA6AAAAQQAAAD4AAABNAAAAPwAAAEQAAAA4AAAAXQAAAE8AAABaAAAATgAAAEoAAAA7AAAAOQAAAF8AAABcAAAATwAAAE8AAABOAAAAPwAAADsAAABdAAAAXwAAAE0AAABQAAAARAAAAEgAAAA8AAAAYwAAAFoAAABYAAAAUQAAAFUAAABeAAAAZQAAAD0AAABCAAAASwAAAFIAAABgAAAAVAAAAGIAAAA+AAAATAAAAEAAAABTAAAAfwAAAEoAAABGAAAAZAAAAFcAAABcAAAAVAAAAEUAAABSAAAAQAAAAGEAAABZAAAAYgAAAFUAAABXAAAAZQAAAGYAAABCAAAAQwAAAFEAAABWAAAATAAAAEsAAABBAAAAaAAAAGAAAABeAAAAVwAAAFMAAABmAAAAZAAAAEMAAABGAAAAVQAAAFgAAABIAAAAWwAAAEkAAABjAAAAUAAAAGkAAABZAAAAYQAAAFsAAABnAAAARQAAAFQAAABHAAAAWgAAAE0AAABQAAAARAAAAGoAAABdAAAAYwAAAFsAAABJAAAAWQAAAEcAAABpAAAAWAAAAGcAAABcAAAAUwAAAE4AAABKAAAAbAAAAGQAAABfAAAAXQAAAE8AAABaAAAATQAAAG0AAABfAAAAagAAAF4AAABWAAAAUQAAAEsAAABrAAAAaAAAAGUAAABfAAAAXAAAAE8AAABOAAAAbQAAAGwAAABdAAAAYAAAAGgAAABiAAAAbgAAAEwAAABWAAAAUgAAAGEAAAB/AAAAYgAAAFQAAABnAAAAWQAAAG8AAABiAAAAbgAAAGEAAABvAAAAUgAAAGAAAABUAAAAYwAAAFAAAABpAAAAWAAAAGoAAABaAAAAcQAAAGQAAABmAAAAUwAAAFcAAABsAAAAcgAAAFwAAABlAAAAZgAAAGsAAABwAAAAUQAAAFUAAABeAAAAZgAAAGUAAABXAAAAVQAAAHIAAABwAAAAZAAAAGcAAABbAAAAYQAAAFkAAAB0AAAAaQAAAG8AAABoAAAAawAAAG4AAABzAAAAVgAAAF4AAABgAAAAaQAAAFgAAABnAAAAWwAAAHEAAABjAAAAdAAAAGoAAABdAAAAYwAAAFoAAAB1AAAAbQAAAHEAAABrAAAAfwAAAGUAAABeAAAAcwAAAGgAAABwAAAAbAAAAGQAAABfAAAAXAAAAHYAAAByAAAAbQAAAG0AAABsAAAAXQAAAF8AAAB1AAAAdgAAAGoAAABuAAAAYgAAAGgAAABgAAAAdwAAAG8AAABzAAAAbwAAAGEAAABuAAAAYgAAAHQAAABnAAAAdwAAAHAAAABrAAAAZgAAAGUAAAB4AAAAcwAAAHIAAABxAAAAYwAAAHQAAABpAAAAdQAAAGoAAAB5AAAAcgAAAHAAAABkAAAAZgAAAHYAAAB4AAAAbAAAAHMAAABuAAAAawAAAGgAAAB4AAAAdwAAAHAAAAB0AAAAZwAAAHcAAABvAAAAcQAAAGkAAAB5AAAAdQAAAH8AAABtAAAAdgAAAHEAAAB5AAAAagAAAHYAAAB4AAAAbAAAAHIAAAB1AAAAeQAAAG0AAAB3AAAAbwAAAHMAAABuAAAAeQAAAHQAAAB4AAAAeAAAAHMAAAByAAAAcAAAAHkAAAB3AAAAdgAAAHkAAAB0AAAAeAAAAHcAAAB1AAAAcQAAAHYAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAABAAAABQAAAAEAAAAAAAAAAAAAAAEAAAAAAAAAAQAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAACAAAABQAAAAEAAAAAAAAA/////wEAAAAAAAAAAwAAAAQAAAACAAAAAAAAAAAAAAABAAAAAAAAAAEAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAMAAAAFAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAFAAAAAQAAAAAAAAAAAAAAAQAAAAMAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAEAAAADAAAAAAAAAAAAAAABAAAAAAAAAAMAAAADAAAAAwAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAADAAAABQAAAAEAAAAAAAAAAAAAAAEAAAAAAAAAAQAAAAAAAAABAAAAAAAAAP////8DAAAAAAAAAAUAAAACAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAEAAAABQAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAMAAAADAAAAAwAAAAMAAAAAAAAAAwAAAAAAAAAAAAAAAAAAAAMAAAAFAAAABQAAAAAAAAAAAAAAAwAAAAMAAAADAAAAAAAAAAAAAAAAAAAAAAAAAAMAAAADAAAAAwAAAAAAAAADAAAAAAAAAAAAAAAAAAAAAAAAAAMAAAAFAAAABQAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAQAAAAAAAAABAAAAAAAAAAMAAAADAAAAAwAAAAAAAAADAAAAAAAAAAAAAAD/////AwAAAAAAAAAFAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAADAAAAAAAAAAAAAAADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAADAAAAAAAAAAAAAAAAAAAAAwAAAAMAAAAAAAAAAAAAAAEAAAAAAAAAAQAAAAAAAAABAAAAAAAAAAAAAAABAAAAAwAAAAAAAAAAAAAAAQAAAAAAAAADAAAAAwAAAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAMAAAADAAAAAwAAAAMAAAAAAAAAAwAAAAAAAAAAAAAAAQAAAAMAAAAAAAAAAAAAAAEAAAAAAAAAAwAAAAMAAAADAAAAAwAAAAAAAAADAAAAAAAAAAAAAAADAAAAAAAAAAMAAAAAAAAAAwAAAAAAAAAAAAAAAAAAAAMAAAAAAAAAAAAAAAMAAAAAAAAAAwAAAAAAAAAAAAAAAAAAAAMAAAADAAAAAAAAAP////8DAAAAAAAAAAUAAAACAAAAAAAAAAAAAAADAAAAAAAAAAAAAAADAAAAAwAAAAAAAAAAAAAAAwAAAAAAAAAAAAAAAwAAAAMAAAAAAAAAAAAAAAAAAAAAAAAAAwAAAAUAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAMAAAAFAAAABQAAAAAAAAAAAAAAAwAAAAMAAAADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAwAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAwAAAAAAAAAAAAAAAwAAAAMAAAAAAAAAAAAAAAAAAAADAAAAAAAAAAMAAAAAAAAAAAAAAAMAAAADAAAAAwAAAAAAAAADAAAAAAAAAAAAAAADAAAAAwAAAAMAAAAAAAAAAwAAAAAAAAAAAAAA/////wMAAAAAAAAABQAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAwAAAAAAAAAAAAAAAwAAAAAAAAADAAAAAAAAAAAAAAAAAAAAAwAAAAMAAAAAAAAAAAAAAAMAAAAAAAAAAwAAAAAAAAADAAAAAAAAAAMAAAADAAAAAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwAAAAAAAAADAAAAAAAAAAMAAAAAAAAAAAAAAAMAAAAAAAAAAAAAAAMAAAADAAAAAAAAAAMAAAADAAAAAwAAAAAAAAAAAAAAAwAAAAAAAAAAAAAAAAAAAAMAAAAAAAAAAwAAAAAAAAAAAAAA/////wMAAAAAAAAABQAAAAIAAAAAAAAAAAAAAAMAAAADAAAAAwAAAAMAAAADAAAAAAAAAAAAAAADAAAAAwAAAAMAAAADAAAAAwAAAAAAAAAAAAAAAwAAAAMAAAADAAAAAwAAAAAAAAADAAAAAAAAAAMAAAADAAAAAwAAAAMAAAAAAAAAAwAAAAAAAAD/////AwAAAAAAAAAFAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAADAAAAAAAAAAAAAAADAAAAAAAAAAMAAAADAAAAAwAAAAAAAAADAAAAAAAAAAAAAAADAAAAAAAAAAAAAAAAAAAAAwAAAAMAAAAAAAAAAwAAAAAAAAAAAAAAAwAAAAMAAAAAAAAAAAAAAAMAAAADAAAAAwAAAAAAAAAAAAAAAAAAAAAAAAADAAAAAAAAAAAAAAADAAAAAwAAAAAAAAAAAAAAAAAAAAMAAAAAAAAAAAAAAAMAAAADAAAAAAAAAAAAAAAAAAAAAwAAAAAAAAADAAAAAAAAAAAAAAD/////AwAAAAAAAAAFAAAAAgAAAAAAAAAAAAAAAwAAAAMAAAADAAAAAAAAAAAAAAADAAAAAAAAAAMAAAADAAAAAwAAAAAAAAAAAAAAAwAAAAAAAAAAAAAAAAAAAAMAAAAAAAAAAAAAAAMAAAAAAAAAAwAAAAAAAAAAAAAAAAAAAAMAAAADAAAAAAAAAAAAAAAAAAAAAwAAAAAAAAAFAAAAAAAAAAAAAAADAAAAAwAAAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAADAAAAAQAAAAAAAAABAAAAAAAAAAAAAAABAAAAAwAAAAEAAAAAAAAAAQAAAAAAAAAAAAAAAwAAAAAAAAADAAAAAAAAAAMAAAAAAAAAAAAAAAMAAAAAAAAAAwAAAAAAAAADAAAAAAAAAP////8DAAAAAAAAAAUAAAACAAAAAAAAAAAAAAAAAAAAAwAAAAAAAAAAAAAAAwAAAAMAAAAAAAAAAAAAAAAAAAADAAAAAAAAAAMAAAAAAAAAAAAAAAMAAAAAAAAAAAAAAAMAAAADAAAAAAAAAAAAAAADAAAAAwAAAAMAAAADAAAAAwAAAAAAAAAAAAAAAAAAAAAAAAADAAAAAAAAAAUAAAAAAAAAAAAAAAMAAAADAAAAAwAAAAMAAAADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAwAAAAMAAAADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwAAAAAAAAAFAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAFAAAABQAAAAAAAAAAAAAAAAAAAAMAAAAAAAAAAAAAAAMAAAADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAMAAAAAAAAAAwAAAAAAAAAAAAAA/////wMAAAAAAAAABQAAAAIAAAAAAAAAAAAAAAMAAAADAAAAAwAAAAAAAAAAAAAAAwAAAAAAAAAFAAAAAAAAAAAAAAAFAAAABQAAAAAAAAAAAAAAAAAAAAEAAAADAAAAAQAAAAAAAAABAAAAAAAAAAMAAAADAAAAAwAAAAAAAAAAAAAAAwAAAAAAAAADAAAAAwAAAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAADAAAAAQAAAAAAAAABAAAAAAAAAAMAAAADAAAAAwAAAAMAAAADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAEAAAAAAAAAAwAAAAUAAAABAAAAAAAAAP////8DAAAAAAAAAAUAAAACAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAFAAAABQAAAAAAAAAAAAAAAAAAAAEAAAAAAAAABAAAAAUAAAABAAAAAAAAAAMAAAADAAAAAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAADAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAIAAAAFAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAEAAAADAAAAAQAAAAAAAAABAAAAAAAAAAUAAAAAAAAAAAAAAAUAAAAFAAAAAAAAAAAAAAD/////AQAAAAAAAAADAAAABAAAAAIAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAUAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAFAAAAAAAAAAAAAAAFAAAABQAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAQAAAAUAAAABAAAAAAAAAAAAAAABAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAEAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAAAAAAAAAAAAEAAAD//////////wEAAAABAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAQAAAAEAAAAAAAAAAAAAAAAAAAADAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwAAAAEAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAsAAAACAAAAAAAAAAAAAAABAAAAAgAAAAYAAAAEAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAYAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAABAAAAAQAAAAAAAAAAAAAAAAAAAAcAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAYAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAKAAAAAgAAAAAAAAAAAAAAAQAAAAEAAAAFAAAABgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAALAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAEAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAMAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAABAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAABwAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAsAAAABAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACgAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwAAAACAAAAAAAAAAAAAAABAAAAAwAAAAcAAAAGAAAAAQAAAAAAAAABAAAAAAAAAAAAAAAAAAAABwAAAAEAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAADAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAwAAAAAAAAABAAAAAQAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAGAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAADgAAAAIAAAAAAAAAAAAAAAEAAAAAAAAACQAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACgAAAAEAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAQAAAAEAAAAAAAAAAAAAAAAAAAAMAAAAAQAAAAEAAAAAAAAAAAAAAAAAAAAAAAAABwAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAsAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAKAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADQAAAAIAAAAAAAAAAAAAAAEAAAAEAAAACAAAAAoAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAALAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAACQAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAGAAAAAgAAAAAAAAAAAAAAAQAAAAsAAAAPAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAOAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAEAAAAAAAAAAQAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAQAAAAEAAAAAAAAAAAAAAAAAAAAIAAAAAQAAAAAAAAABAAAAAAAAAAAAAAAAAAAABQAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAAAAgAAAAAAAAAAAAAAAQAAAAwAAAAQAAAADAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAoAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAJAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADQAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAPAAAAAAAAAAEAAAABAAAAAAAAAAAAAAAAAAAADwAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAQAAAAEAAAAAAAAAAAAAAAAAAAAAAAAADQAAAAEAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAACAAAAAAAAAAAAAAABAAAACgAAABMAAAAIAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkAAAABAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAEQAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAwAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEQAAAAAAAAABAAAAAQAAAAAAAAAAAAAAAAAAAA8AAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAQAAAAAQAAAAAAAAABAAAAAAAAAAAAAAAAAAAACQAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAIAAAAAAAAAAAAAAAEAAAANAAAAEQAAAA0AAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAARAAAAAQAAAAAAAAABAAAAAAAAAAAAAAAAAAAAEwAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAA4AAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAATAAAAAAAAAAEAAAABAAAAAAAAAAAAAAAAAAAAEQAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAA0AAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAARAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkAAAACAAAAAAAAAAAAAAABAAAADgAAABIAAAAPAAAAAQAAAAAAAAABAAAAAAAAAAAAAAAAAAAADwAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABIAAAAAAAAAAQAAAAEAAAAAAAAAAAAAAAAAAAASAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAEwAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAABEAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAATAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEgAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAABIAAAABAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAATAAAAAgAAAAAAAAAAAAAAAQAAAP//////////EwAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAATAAAAAQAAAAAAAAABAAAAAAAAAAAAAAAAAAAAEgAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAASAAAAAAAAABgAAAAAAAAAIQAAAAAAAAAeAAAAAAAAACAAAAADAAAAMQAAAAEAAAAwAAAAAwAAADIAAAADAAAACAAAAAAAAAAFAAAABQAAAAoAAAAFAAAAFgAAAAAAAAAQAAAAAAAAABIAAAAAAAAAKQAAAAEAAAAhAAAAAAAAAB4AAAAAAAAABAAAAAAAAAAAAAAABQAAAAIAAAAFAAAADwAAAAEAAAAIAAAAAAAAAAUAAAAFAAAAHwAAAAEAAAAWAAAAAAAAABAAAAAAAAAAAgAAAAAAAAAGAAAAAAAAAA4AAAAAAAAACgAAAAAAAAALAAAAAAAAABEAAAADAAAAGAAAAAEAAAAXAAAAAwAAABkAAAADAAAAAAAAAAAAAAABAAAABQAAAAkAAAAFAAAABQAAAAAAAAACAAAAAAAAAAYAAAAAAAAAEgAAAAEAAAAKAAAAAAAAAAsAAAAAAAAABAAAAAEAAAADAAAABQAAAAcAAAAFAAAACAAAAAEAAAAAAAAAAAAAAAEAAAAFAAAAEAAAAAEAAAAFAAAAAAAAAAIAAAAAAAAABwAAAAAAAAAVAAAAAAAAACYAAAAAAAAACQAAAAAAAAATAAAAAAAAACIAAAADAAAADgAAAAEAAAAUAAAAAwAAACQAAAADAAAAAwAAAAAAAAANAAAABQAAAB0AAAAFAAAAAQAAAAAAAAAHAAAAAAAAABUAAAAAAAAABgAAAAEAAAAJAAAAAAAAABMAAAAAAAAABAAAAAIAAAAMAAAABQAAABoAAAAFAAAAAAAAAAEAAAADAAAAAAAAAA0AAAAFAAAAAgAAAAEAAAABAAAAAAAAAAcAAAAAAAAAGgAAAAAAAAAqAAAAAAAAADoAAAAAAAAAHQAAAAAAAAArAAAAAAAAAD4AAAADAAAAJgAAAAEAAAAvAAAAAwAAAEAAAAADAAAADAAAAAAAAAAcAAAABQAAACwAAAAFAAAADQAAAAAAAAAaAAAAAAAAACoAAAAAAAAAFQAAAAEAAAAdAAAAAAAAACsAAAAAAAAABAAAAAMAAAAPAAAABQAAAB8AAAAFAAAAAwAAAAEAAAAMAAAAAAAAABwAAAAFAAAABwAAAAEAAAANAAAAAAAAABoAAAAAAAAAHwAAAAAAAAApAAAAAAAAADEAAAAAAAAALAAAAAAAAAA1AAAAAAAAAD0AAAADAAAAOgAAAAEAAABBAAAAAwAAAEsAAAADAAAADwAAAAAAAAAWAAAABQAAACEAAAAFAAAAHAAAAAAAAAAfAAAAAAAAACkAAAAAAAAAKgAAAAEAAAAsAAAAAAAAADUAAAAAAAAABAAAAAQAAAAIAAAABQAAABAAAAAFAAAADAAAAAEAAAAPAAAAAAAAABYAAAAFAAAAGgAAAAEAAAAcAAAAAAAAAB8AAAAAAAAAMgAAAAAAAAAwAAAAAAAAADEAAAADAAAAIAAAAAAAAAAeAAAAAwAAACEAAAADAAAAGAAAAAMAAAASAAAAAwAAABAAAAADAAAARgAAAAAAAABDAAAAAAAAAEIAAAADAAAANAAAAAMAAAAyAAAAAAAAADAAAAAAAAAAJQAAAAMAAAAgAAAAAAAAAB4AAAADAAAAUwAAAAAAAABXAAAAAwAAAFUAAAADAAAASgAAAAMAAABGAAAAAAAAAEMAAAAAAAAAOQAAAAEAAAA0AAAAAwAAADIAAAAAAAAAGQAAAAAAAAAXAAAAAAAAABgAAAADAAAAEQAAAAAAAAALAAAAAwAAAAoAAAADAAAADgAAAAMAAAAGAAAAAwAAAAIAAAADAAAALQAAAAAAAAAnAAAAAAAAACUAAAADAAAAIwAAAAMAAAAZAAAAAAAAABcAAAAAAAAAGwAAAAMAAAARAAAAAAAAAAsAAAADAAAAPwAAAAAAAAA7AAAAAwAAADkAAAADAAAAOAAAAAMAAAAtAAAAAAAAACcAAAAAAAAALgAAAAMAAAAjAAAAAwAAABkAAAAAAAAAJAAAAAAAAAAUAAAAAAAAAA4AAAADAAAAIgAAAAAAAAATAAAAAwAAAAkAAAADAAAAJgAAAAMAAAAVAAAAAwAAAAcAAAADAAAANwAAAAAAAAAoAAAAAAAAABsAAAADAAAANgAAAAMAAAAkAAAAAAAAABQAAAAAAAAAMwAAAAMAAAAiAAAAAAAAABMAAAADAAAASAAAAAAAAAA8AAAAAwAAAC4AAAADAAAASQAAAAMAAAA3AAAAAAAAACgAAAAAAAAARwAAAAMAAAA2AAAAAwAAACQAAAAAAAAAQAAAAAAAAAAvAAAAAAAAACYAAAADAAAAPgAAAAAAAAArAAAAAwAAAB0AAAADAAAAOgAAAAMAAAAqAAAAAwAAABoAAAADAAAAVAAAAAAAAABFAAAAAAAAADMAAAADAAAAUgAAAAMAAABAAAAAAAAAAC8AAAAAAAAATAAAAAMAAAA+AAAAAAAAACsAAAADAAAAYQAAAAAAAABZAAAAAwAAAEcAAAADAAAAYgAAAAMAAABUAAAAAAAAAEUAAAAAAAAAYAAAAAMAAABSAAAAAwAAAEAAAAAAAAAASwAAAAAAAABBAAAAAAAAADoAAAADAAAAPQAAAAAAAAA1AAAAAwAAACwAAAADAAAAMQAAAAMAAAApAAAAAwAAAB8AAAADAAAAXgAAAAAAAABWAAAAAAAAAEwAAAADAAAAUQAAAAMAAABLAAAAAAAAAEEAAAAAAAAAQgAAAAMAAAA9AAAAAAAAADUAAAADAAAAawAAAAAAAABoAAAAAwAAAGAAAAADAAAAZQAAAAMAAABeAAAAAAAAAFYAAAAAAAAAVQAAAAMAAABRAAAAAwAAAEsAAAAAAAAAOQAAAAAAAAA7AAAAAAAAAD8AAAADAAAASgAAAAAAAABOAAAAAwAAAE8AAAADAAAAUwAAAAMAAABcAAAAAwAAAF8AAAADAAAAJQAAAAAAAAAnAAAAAwAAAC0AAAADAAAANAAAAAAAAAA5AAAAAAAAADsAAAAAAAAARgAAAAMAAABKAAAAAAAAAE4AAAADAAAAGAAAAAAAAAAXAAAAAwAAABkAAAADAAAAIAAAAAMAAAAlAAAAAAAAACcAAAADAAAAMgAAAAMAAAA0AAAAAAAAADkAAAAAAAAALgAAAAAAAAA8AAAAAAAAAEgAAAADAAAAOAAAAAAAAABEAAAAAwAAAFAAAAADAAAAPwAAAAMAAABNAAAAAwAAAFoAAAADAAAAGwAAAAAAAAAoAAAAAwAAADcAAAADAAAAIwAAAAAAAAAuAAAAAAAAADwAAAAAAAAALQAAAAMAAAA4AAAAAAAAAEQAAAADAAAADgAAAAAAAAAUAAAAAwAAACQAAAADAAAAEQAAAAMAAAAbAAAAAAAAACgAAAADAAAAGQAAAAMAAAAjAAAAAAAAAC4AAAAAAAAARwAAAAAAAABZAAAAAAAAAGEAAAADAAAASQAAAAAAAABbAAAAAwAAAGcAAAADAAAASAAAAAMAAABYAAAAAwAAAGkAAAADAAAAMwAAAAAAAABFAAAAAwAAAFQAAAADAAAANgAAAAAAAABHAAAAAAAAAFkAAAAAAAAANwAAAAMAAABJAAAAAAAAAFsAAAADAAAAJgAAAAAAAAAvAAAAAwAAAEAAAAADAAAAIgAAAAMAAAAzAAAAAAAAAEUAAAADAAAAJAAAAAMAAAA2AAAAAAAAAEcAAAAAAAAAYAAAAAAAAABoAAAAAAAAAGsAAAADAAAAYgAAAAAAAABuAAAAAwAAAHMAAAADAAAAYQAAAAMAAABvAAAAAwAAAHcAAAADAAAATAAAAAAAAABWAAAAAwAAAF4AAAADAAAAUgAAAAAAAABgAAAAAAAAAGgAAAAAAAAAVAAAAAMAAABiAAAAAAAAAG4AAAADAAAAOgAAAAAAAABBAAAAAwAAAEsAAAADAAAAPgAAAAMAAABMAAAAAAAAAFYAAAADAAAAQAAAAAMAAABSAAAAAAAAAGAAAAAAAAAAVQAAAAAAAABXAAAAAAAAAFMAAAADAAAAZQAAAAAAAABmAAAAAwAAAGQAAAADAAAAawAAAAMAAABwAAAAAwAAAHIAAAADAAAAQgAAAAAAAABDAAAAAwAAAEYAAAADAAAAUQAAAAAAAABVAAAAAAAAAFcAAAAAAAAAXgAAAAMAAABlAAAAAAAAAGYAAAADAAAAMQAAAAAAAAAwAAAAAwAAADIAAAADAAAAPQAAAAMAAABCAAAAAAAAAEMAAAADAAAASwAAAAMAAABRAAAAAAAAAFUAAAAAAAAAXwAAAAAAAABcAAAAAAAAAFMAAAAAAAAATwAAAAAAAABOAAAAAAAAAEoAAAADAAAAPwAAAAEAAAA7AAAAAwAAADkAAAADAAAAbQAAAAAAAABsAAAAAAAAAGQAAAAFAAAAXQAAAAEAAABfAAAAAAAAAFwAAAAAAAAATQAAAAEAAABPAAAAAAAAAE4AAAAAAAAAdQAAAAQAAAB2AAAABQAAAHIAAAAFAAAAagAAAAEAAABtAAAAAAAAAGwAAAAAAAAAWgAAAAEAAABdAAAAAQAAAF8AAAAAAAAAWgAAAAAAAABNAAAAAAAAAD8AAAAAAAAAUAAAAAAAAABEAAAAAAAAADgAAAADAAAASAAAAAEAAAA8AAAAAwAAAC4AAAADAAAAagAAAAAAAABdAAAAAAAAAE8AAAAFAAAAYwAAAAEAAABaAAAAAAAAAE0AAAAAAAAAWAAAAAEAAABQAAAAAAAAAEQAAAAAAAAAdQAAAAMAAABtAAAABQAAAF8AAAAFAAAAcQAAAAEAAABqAAAAAAAAAF0AAAAAAAAAaQAAAAEAAABjAAAAAQAAAFoAAAAAAAAAaQAAAAAAAABYAAAAAAAAAEgAAAAAAAAAZwAAAAAAAABbAAAAAAAAAEkAAAADAAAAYQAAAAEAAABZAAAAAwAAAEcAAAADAAAAcQAAAAAAAABjAAAAAAAAAFAAAAAFAAAAdAAAAAEAAABpAAAAAAAAAFgAAAAAAAAAbwAAAAEAAABnAAAAAAAAAFsAAAAAAAAAdQAAAAIAAABqAAAABQAAAFoAAAAFAAAAeQAAAAEAAABxAAAAAAAAAGMAAAAAAAAAdwAAAAEAAAB0AAAAAQAAAGkAAAAAAAAAdwAAAAAAAABvAAAAAAAAAGEAAAAAAAAAcwAAAAAAAABuAAAAAAAAAGIAAAADAAAAawAAAAEAAABoAAAAAwAAAGAAAAADAAAAeQAAAAAAAAB0AAAAAAAAAGcAAAAFAAAAeAAAAAEAAAB3AAAAAAAAAG8AAAAAAAAAcAAAAAEAAABzAAAAAAAAAG4AAAAAAAAAdQAAAAEAAABxAAAABQAAAGkAAAAFAAAAdgAAAAEAAAB5AAAAAAAAAHQAAAAAAAAAcgAAAAEAAAB4AAAAAQAAAHcAAAAAAAAAcgAAAAAAAABwAAAAAAAAAGsAAAAAAAAAZAAAAAAAAABmAAAAAAAAAGUAAAADAAAAUwAAAAEAAABXAAAAAwAAAFUAAAADAAAAdgAAAAAAAAB4AAAAAAAAAHMAAAAFAAAAbAAAAAEAAAByAAAAAAAAAHAAAAAAAAAAXAAAAAEAAABkAAAAAAAAAGYAAAAAAAAAdQAAAAAAAAB5AAAABQAAAHcAAAAFAAAAbQAAAAEAAAB2AAAAAAAAAHgAAAAAAAAAXwAAAAEAAABsAAAAAQAAAHIAAAAAAAAAGC1EVPsh+T8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABgtRFT7Ifk/GC1EVPsh+T8AAAAAAAAAAAAAAAAAAAAAGC1EVPsh+T8AAAAAAAAAABgtRFT7IQlAGC1EVPsh+T8AAAAAAAAAAAAAAAAAAAAAGC1EVPshCUAAAAAAAAAAABgtRFT7Ifm/GC1EVPsh+T8AAAAAAAAAAAAAAAAAAAAAGC1EVPsh+b8AAAAAAAAAAAAAAAAAAAAAGC1EVPsh+b8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABgtRFT7Ifm/GC1EVPsh+b8AAAAAAAAAAAAAAAAAAAAAGC1EVPsh+b8AAAAAAAAAABgtRFT7IQnAGC1EVPsh+b8AAAAAAAAAAAAAAAAAAAAAGC1EVPshCcAAAAAAAAAAABgtRFT7Ifk/GC1EVPsh+b8AAAAAAAAAAAAAAAAAAAAAGC1EVPsh+T8AAAAAAAAAAAAAAAAAAAAAAAAAAAMAAAAGAAAAAgAAAAUAAAABAAAABAAAAAAAAAAAAAAABQAAAAMAAAABAAAABgAAAAQAAAACAAAAAAAAAMpi5RexJsw/BlIKPVwR5T95Wyu0/QjnP5PjoT7YYcu/mBhKZ6zrwj8wRYS7NebuP3qW6geh+Ls/SLrixebL3r+pcyymN9XrPwmkNHp7xec/GWNMZVAA17+82s+x2BLiPwn2ytbJ9ek/LgEH1sMS1j8yp/2LhTfeP+SnWwtQBbu/d38gkp5X7z8ytsuHaADGPzUYObdf1+m/7IauECWhwz+cjSACjzniP76Z+wUhN9K/1+GEKzup67+/GYr/04baPw6idWOvsuc/ZedTWsRa5b/EJQOuRzi0v/OncYhHPes/h49PixY53j+i8wWfC03Nvw2idWOvsue/ZedTWsRa5T/EJQOuRzi0P/KncYhHPeu/iY9PixY53r+i8wWfC03NP9anWwtQBbs/d38gkp5X778ytsuHaADGvzUYObdf1+k/74auECWhw7+cjSACjzniv8CZ+wUhN9I/1uGEKzup6z+/GYr/04bavwmkNHp7xee/F2NMZVAA1z+82s+x2BLivwr2ytbJ9em/KwEH1sMS1r8yp/2LhTfev81i5RexJsy/BlIKPVwR5b95Wyu0/Qjnv5DjoT7YYcs/nBhKZ6zrwr8wRYS7Nebuv3OW6geh+Lu/SLrixebL3j+pcyymN9Xrv8rHIFfWehZAMBwUdlo0DECTUc17EOb2PxpVB1SWChdAzjbhb9pTDUDQhmdvECX5P9FlMKCC9+g/IIAzjELgE0DajDngMv8GQFhWDmDPjNs/y1guLh96EkAxPi8k7DIEQJCc4URlhRhA3eLKKLwkEECqpNAyTBD/P6xpjXcDiwVAFtl//cQm4z+Ibt3XKiYTQM7mCLUb3QdAoM1t8yVv7D8aLZv2Nk8UQEAJPV5nQwxAtSsfTCoE9z9TPjXLXIIWQBVanC5W9AtAYM3d7Adm9j++5mQz1FoWQBUThyaVBghAwH5muQsV7T89Q1qv82MUQJoWGOfNuBdAzrkClkmwDkDQjKq77t37Py+g0dtitsE/ZwAMTwVPEUBojepluNwBQGYbtuW+t9w/HNWIJs6MEkDTNuQUSlgEQKxktPP5TcQ/ixbLB8JjEUCwuWjXMQYCQAS/R09FkRdAowpiZjhhDkB7LmlczD/7P01iQmhhsAVAnrtTwDy84z/Z6jfQ2TgTQChOCXMnWwpAhrW3daoz8z/HYJvVPI4VQLT3ik5FcA5Angi7LOZd+z+NNVzDy5gXQBXdvVTFUA1AYNMgOeYe+T8+qHXGCwkXQKQTOKwa5AJA8gFVoEMW0T+FwzJyttIRQAEAAAD/////BwAAAP////8xAAAA/////1cBAAD/////YQkAAP////+nQQAA/////5HLAQD/////95AMAP/////B9lcAAAAAAAAAAAAAAAAAAgAAAP////8OAAAA/////2IAAAD/////rgIAAP/////CEgAA/////06DAAD/////IpcDAP/////uIRkA/////4LtrwAAAAAAAAAAAAAAAAAAAAAAAgAAAP//////////AQAAAAMAAAD//////////////////////////////////////////////////////////////////////////wEAAAAAAAAAAgAAAP///////////////wMAAAD//////////////////////////////////////////////////////////////////////////wEAAAAAAAAAAgAAAP///////////////wMAAAD//////////////////////////////////////////////////////////////////////////wEAAAAAAAAAAgAAAP///////////////wMAAAD//////////////////////////////////////////////////////////wIAAAD//////////wEAAAAAAAAA/////////////////////wMAAAD/////////////////////////////////////////////////////AwAAAP////////////////////8AAAAA/////////////////////wEAAAD///////////////8CAAAA////////////////////////////////AwAAAP////////////////////8AAAAA////////////////AgAAAAEAAAD/////////////////////////////////////////////////////AwAAAP////////////////////8AAAAA////////////////AgAAAAEAAAD/////////////////////////////////////////////////////AwAAAP////////////////////8AAAAA////////////////AgAAAAEAAAD/////////////////////////////////////////////////////AwAAAP////////////////////8AAAAA////////////////AgAAAAEAAAD/////////////////////////////////////////////////////AQAAAAIAAAD///////////////8AAAAA/////////////////////wMAAAD/////////////////////////////////////////////////////AQAAAAIAAAD///////////////8AAAAA/////////////////////wMAAAD/////////////////////////////////////////////////////AQAAAAIAAAD///////////////8AAAAA/////////////////////wMAAAD/////////////////////////////////////////////////////AQAAAAIAAAD///////////////8AAAAA/////////////////////wMAAAD///////////////////////////////8CAAAA////////////////AQAAAP////////////////////8AAAAA/////////////////////wMAAAD/////////////////////////////////////////////////////AwAAAP////////////////////8AAAAAAQAAAP//////////AgAAAP//////////////////////////////////////////////////////////AwAAAP///////////////wIAAAAAAAAAAQAAAP//////////////////////////////////////////////////////////////////////////AwAAAP///////////////wIAAAAAAAAAAQAAAP//////////////////////////////////////////////////////////////////////////AwAAAP///////////////wIAAAAAAAAAAQAAAP//////////////////////////////////////////////////////////////////////////AwAAAAEAAAD//////////wIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAgAAAAAAAAACAAAAAQAAAAEAAAACAAAAAgAAAAAAAAAFAAAABQAAAAAAAAACAAAAAgAAAAMAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAIAAAABAAAAAgAAAAIAAAACAAAAAAAAAAUAAAAGAAAAAAAAAAIAAAACAAAAAwAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAIAAAAAAAAAAgAAAAEAAAADAAAAAgAAAAIAAAAAAAAABQAAAAcAAAAAAAAAAgAAAAIAAAADAAAAAwAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAgAAAAAAAAACAAAAAQAAAAQAAAACAAAAAgAAAAAAAAAFAAAACAAAAAAAAAACAAAAAgAAAAMAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAMAAAACAAAAAAAAAAIAAAABAAAAAAAAAAIAAAACAAAAAAAAAAUAAAAJAAAAAAAAAAIAAAACAAAAAwAAAAUAAAAAAAAAAAAAAAAAAAAAAAAACgAAAAIAAAACAAAAAAAAAAMAAAAOAAAAAgAAAAAAAAACAAAAAwAAAAAAAAAAAAAAAgAAAAIAAAADAAAABgAAAAAAAAAAAAAAAAAAAAAAAAALAAAAAgAAAAIAAAAAAAAAAwAAAAoAAAACAAAAAAAAAAIAAAADAAAAAQAAAAAAAAACAAAAAgAAAAMAAAAHAAAAAAAAAAAAAAAAAAAAAAAAAAwAAAACAAAAAgAAAAAAAAADAAAACwAAAAIAAAAAAAAAAgAAAAMAAAACAAAAAAAAAAIAAAACAAAAAwAAAAgAAAAAAAAAAAAAAAAAAAAAAAAADQAAAAIAAAACAAAAAAAAAAMAAAAMAAAAAgAAAAAAAAACAAAAAwAAAAMAAAAAAAAAAgAAAAIAAAADAAAACQAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAgAAAAIAAAAAAAAAAwAAAA0AAAACAAAAAAAAAAIAAAADAAAABAAAAAAAAAACAAAAAgAAAAMAAAAKAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAACAAAAAgAAAAAAAAADAAAABgAAAAIAAAAAAAAAAgAAAAMAAAAPAAAAAAAAAAIAAAACAAAAAwAAAAsAAAAAAAAAAAAAAAAAAAAAAAAABgAAAAIAAAACAAAAAAAAAAMAAAAHAAAAAgAAAAAAAAACAAAAAwAAABAAAAAAAAAAAgAAAAIAAAADAAAADAAAAAAAAAAAAAAAAAAAAAAAAAAHAAAAAgAAAAIAAAAAAAAAAwAAAAgAAAACAAAAAAAAAAIAAAADAAAAEQAAAAAAAAACAAAAAgAAAAMAAAANAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAACAAAAAgAAAAAAAAADAAAACQAAAAIAAAAAAAAAAgAAAAMAAAASAAAAAAAAAAIAAAACAAAAAwAAAA4AAAAAAAAAAAAAAAAAAAAAAAAACQAAAAIAAAACAAAAAAAAAAMAAAAFAAAAAgAAAAAAAAACAAAAAwAAABMAAAAAAAAAAgAAAAIAAAADAAAADwAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAgAAAAAAAAACAAAAAQAAABMAAAACAAAAAgAAAAAAAAAFAAAACgAAAAAAAAACAAAAAgAAAAMAAAAQAAAAAAAAAAAAAAAAAAAAAAAAABEAAAACAAAAAAAAAAIAAAABAAAADwAAAAIAAAACAAAAAAAAAAUAAAALAAAAAAAAAAIAAAACAAAAAwAAABEAAAAAAAAAAAAAAAAAAAAAAAAAEgAAAAIAAAAAAAAAAgAAAAEAAAAQAAAAAgAAAAIAAAAAAAAABQAAAAwAAAAAAAAAAgAAAAIAAAADAAAAEgAAAAAAAAAAAAAAAAAAAAAAAAATAAAAAgAAAAAAAAACAAAAAQAAABEAAAACAAAAAgAAAAAAAAAFAAAADQAAAAAAAAACAAAAAgAAAAMAAAATAAAAAAAAAAAAAAAAAAAAAAAAAA8AAAACAAAAAAAAAAIAAAABAAAAEgAAAAIAAAACAAAAAAAAAAUAAAAOAAAAAAAAAAIAAAACAAAAAwAAAAIAAAABAAAAAAAAAAEAAAACAAAAAAAAAAAAAAACAAAAAQAAAAAAAAABAAAAAgAAAAEAAAAAAAAAAgAAAAAAAAAFAAAABAAAAAAAAAABAAAABQAAAAAAAAAAAAAABQAAAAQAAAAAAAAAAQAAAAUAAAAEAAAAAAAAAAUAAAAAAAAAAgAAAAEAAAAAAAAAAQAAAAIAAAAAAAAAAAAAAAIAAAABAAAAAAAAAAEAAAACAAAAAQAAAAAAAAACAAAAAgAAAAAAAAABAAAAAAAAAAAAAAAFAAAABAAAAAAAAAABAAAABQAAAAAAAAAAAAAABQAAAAQAAAAAAAAAAQAAAAUAAAAEAAAAAAAAAAUAAAAFAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAQAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAABAAAAAAAAAAABAAAAAAEAAAAAAAAAAAEAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAQAAAAAAAAAAAAEAAAAAAAAAAAAAOgehWlKfUEEz1zLi+JsiQa2og3wcMfVAWCbHorc0yEDi+Yn/Y6mbQJ11/mfsnG9At6bnG4UQQkBvMCQWKqUUQJVmwwswmOc/3hVgVBL3uj//qqOEOdGOPw/WDN4gnGE/H3ANkCUgND+AA8btKgAHPwTXBqJVSdo+XfRQAqsKrj4fc+zLYbSPQklEmCZHv2FCUP+uDso1NEKYtPhwphUHQptxnyFXYdpB7CddZAMmrkGAt1AxSTqBQUibBVdTsFNBSuX3MV+AJkFocv82SLf5QAqmgj7AY81A23VDSEnLoEDGEJVSeDFzQDYrqvBk70VA8U157pcRGUBWfEF+ZKbsP6phvycGBZRAJbod0OgwfkCp+L8jatBmQCjl3pGrPlFAfMWm114SOkButwtqS7UjQHQwbcjXyw1A8jnLuuyA9j9KwjL0VwHhPyotk0lcs8k/Q5PvEs9rsz+SfsOQEVqdPzUAKDojLoY/WJz/kcjCcD8YFu070FRZPyoLC2BdJEM/YOXQAuiMM0HIBz1bw3sdQdV46aaHRwZByatzjDPX8EDb3Jie8HXZQCJxj6ULP8NAUaG6uRAZrUCWdmou5/mVQLb9huRPm4BAhvoCHygZaUCuX/I3SPdSQC9/bC/1qTxAfKxsYQ6pJUCuslH+N14QQMS/cv7SvPg/Ol8maYKx4j8AAAAA/////wAAAAAAAAAAAAAAAAAAAAAAAAAA/////////////////////////////////////wAAAAD/////AAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAA/////wAAAAAAAAAAAQAAAAEAAAAAAAAAAAAAAP////8AAAAABQAAAAAAAAAAAAAAAAAAAAAAAAD/////BQAAAAUAAAAAAAAAAAAAAAAAAAAAAAAA/////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP////////////////////////////////////8AAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/////////////////////////////////////AAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAABQAAAAEAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/////////////////////////////////////wAAAAABAAAAAQAAAAEAAAABAAAAAQAAAAEAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAEAAAABAAAAAQAAAAAAAAABAAAAAAAAAAUAAAABAAAAAQAAAAAAAAAAAAAAAQAAAAEAAAAAAAAAAQAAAAEAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQEAAAAAAAEAAQAAAQEAAAAAAAEAAAABAAAAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAABAAAAAAAAAAAAAAABAAAAAQAAAAEAAAAAAAAAAAAAAAEAAAAAAAAAAQAAAAEAAAABAAAAAAAAAAAAAAAAAAAAAAAAAKriWFiWZfg/Y2nmTbY/8z8MHSPSqmnjv6hnn18HR3c/quJYWJZl+D/jq5TzDdzyPwwdI9KqaeO/u0kC1eFSBECq4lhYlmX4P69pJmt7c/E/NnkJi6jSBsDESFlzKkr6P33ArMz7sfY/o2q2uqM08D+oZ59fB0d3PzEqCi3qrvK/kmm4ANp49D+4wS2wzhzvP9WJvyAnx+E/upcY75RVx7+95t+9y0T1P9L18g1caO0/k6CkRyVzAEBf99+e/GjxP6QMsuuLQ/U/PlP4Qr8q7j8Mb/GO2GMCwLl2K/DQIghAePiwytEp9D9UHrsuI/nqPzjMedJ+yuy/k6xgf58n/L+XoQtn22DzP2lzCnsYk+s/JhUSDI4P8z+8lFcBhgTcPxOqKRxEX/M/89MEdoPQ6j8OKQaXDob7vzWwNvblgAPAzGkxMcl88j9Nm4okPkbpP0vI89vxSgRAdac2Z6W2/T+6UFOMC3zyP/+2XEF3hug/QqhELwGKCMAwdlQerEoEQFcr/B+VnvE/hB1hfFzT5j8wdsE/Da64P0hIvnF/sOC/KH/hrXUg8T9bI5OQHaLlP+mYzla7td6/CtKG6iOm8b8FW3TV8oXwP8ORhtNuJ+c/q8JrTMz/AcC8PaUl+PUFwAXv9rkMT/A/m+sAswr15D+7hk/O3yvkP6c/yVsOHKI/qqAX9idJ8D/8hNz1KNPiP7xSXh3Ggvg/epbkiKr57T/23/LB1GLvP4GTTeNZi+M/W4TqlTheBcDupZgIdYUIQGwlcW3YZO8/tQvDXQ3H4j8Bt+sf9DkAQMdFie+nNvg/Z5Uh1wDX7j9h5X2d4KjhPxMJ1ZVT4Pa/evqB8xB//7+W183U9QLsPwzNxsC7AOA/af/LqCnK/r/lPceQ0FQDwHoY0nYIW+w/bHNSHrTg4D/DFcMAdabuv2sz5Ojhnve/FvLf01HN6z/tEDL2Hz/gP0bBv0KUhPA/pd7sEnMc4D8EGon4Lo7sP5NVbYtSON8/DAMC50odBkB+Z2J8MGYCQIhlM1gubOo/FssiPwWy4D8OIlGqRnkCQAd1vopp6f4/QS1keLLK6T9rfoBuT7LZP3KQbH5ugwjAjqVPXTmbBUBL/JxcqR3qP3oSeovuktg/Y6pRhJmqy7+0kwuU0Yjmv2wvsfFmQ+g/R98lJFqQ2T/IGb5gjLkCwK3mNff3kQbAqDznPFM86T+iiP0FfsvYP7fzKG6Mls0/h7+at2btzL8tsUTgk+LmP/YEIrTDINU/WmwKoVjA5L9aC02r6FHxvzzFCT/Qg+Y/nx0V97en0j8+1toJOm77P1kZ7h8KjfQ/GBbbqxgk5j9RGXM79G/SP+beHsWmweQ/9REi4eX0xD/V9s+kmMHkP+pb9yNs09A/c5ERjVDTAECqEr3OBCH7P14ILfMECOU/piRx4P8P0j+JYU//bfL0Pw62fw28B+w/l5YW2Ga45D9+CyKRbenOP5cH6fHy1/S/o/egk03++r91nTYRL/bjP3fHN6OJVdA/7xXQh1XLBcAB3g6tBdUIQKW2KnGYjeQ/SqIpagclyz8F9P3YgNL6v9H6NBsZ8QDAW2k5L5Qs4z/0axa1l6zLP1GE65Mu4wNAwfX+BYmWAEBBgJP90M3hP6/03qhPLdA/zqo5bJz2778/ESlPCTn1v7JkhGyvzuE/DM7sj5twwz/6xbXLavYGQH29RFRGkgNA7bOXVSJ54T9fEhTHO/TDP+8t+HMOiwDAxa0SbGTtA8Atii7y0mLgP4cecHFB3sM/uPUpyv+K7j8nktD1/WvhP2cWmi772d8/Fj7uU9kEvD8oKOESLzKmvwSdCqrHdNu/XCluGsvI3T929OW5md+uP9dP6rXcZNq/gXM+ggzL6b+eKjsPgJncP6i1e9aVu7E/2CnPNJyD1D/DnyGgSe+xvy8k7g9bp9s/nYmLvHn1sz9cFOwApH8IwGa6Mjy9cgZAJr95SiSW2z8rCkhOFvqdP3SIKmO/UwPAEy0zkN7bBsCds8Hg/13YP1zv413hVGi/FVtqixSn6L9XAPQGul3yv7SGu2BoCNk/n94bv7Maj79p13T6X9z3P45MPCW3WvI/rU/8/LRj1T9cgR6SXd+ZPymL2DstbPI/8s/pAkIz6z/fmoB+8efYPz2XyfWgYaa/6wys72AW/j8LZImhgrf3P729Zla/n9U/ySB8B3PBqL8O2nhevvbxv17+5A+n6fe/YrGIqEGB1T+wCEGbkhaxv989QHVE5wFAzd12PTu3/T9AHUPZY2DUP3SQDST0zq2/JCxAlIoj5T+Mhe1IJkrQP/cRpl8QhtU/amc4seFts79khiUSVaz3vxYfWtjPwf2/CHscxQqD0j/ctUBQ9my3v0POnFiyXv2/pjjn2Ju/AcDk45DwBhPRP/GjwlCrv7m/aT2ciwolBsAQOzHr/wUJQCzpq5UYvtI/gDCf3SlCwb+4i7S+mukEQBDA1f8mowFA2utnRN3KyT9T+9EYAVG6v9/IVZ0enrE/7NbRtdGfzr/8y8GpRz7LP3U0vTSk18e/JzHEcwiBB0AGm8Q7AJkEQNLciyt4Esk/gLou5zoQxr+RrOfM91oBwEzd36KybgTAgLou5zoQxj/S3IsreBLJv1gCch0OHO8/FD+RxSLN4j91NL00pNfHP/zLwalHPsu/nL7/By4Pyr8tSP5h7CPiv1P70RgBUbo/2utnRN3Kyb/KfllfCpUIwLkP5zj+NwdAgDCf3SlCwT8s6auVGL7Sv2aFPlaC4eC/XrS5UVH77b/xo8JQq7+5P+TjkPAGE9G/Q30/RYbn1z8FF/ISafuLv9y1QFD2bLc/CHscxQqD0r/fi+tPROX0P6vRc+19ie0/amc4seFtsz/3EaZfEIbVv77TYpahl/o/DDsu0CaC9D90kA0k9M6tP0AdQ9ljYNS/CCI0rxjZA8BgfCaLthgHwLAIQZuSFrE/YrGIqEGB1b8kvQ982+rsv4J8EWu7jPS/ySB8B3PBqD+9vWZWv5/VvwrAByWcJgBAxFujmE9a+j89l8n1oGGmP9+agH7x59i/N03cuJUt9L8X9v4GdIz6v1yBHpJd35m/rU/8/LRj1b8mz69sydf/vyu5idMqVQLAn94bv7Majz8AhrtgaAjZv+aCE66WZ/q/lA1Mgz/p/79c7+Nd4VRoP52zweD/Xdi/TJZpMTb4AkDLWZShPOb/PysKSE4W+p2/Jr95SiSW27/PkmbE7zjnP6UAiCDmMNI/nYmLvHn1s78vJO4PW6fbv5MWA2vqSrQ/V5WLwPB51b+otXvWlbuxv54qOw+Amdy/1keqzYeRBsApIEMHgZIIQHb05bmZ366/XCluGsvI3b8W44a9X9UFQEeQtDM4rwJAFj7uU9kEvL9nFpou+9nfv3Co+JcyyQhAcdkCX2KzBUCHHnBxQd7Dvy2KLvLSYuC/o6+5YTt/AcCHCNDW+8YEwF8SFMc79MO/7bOXVSJ54b9E/pfA2S3xPzD9xaBb0uQ/DM7sj5tww7+yZIRsr87hv7c4c0SEXNG/Tr79/9M+5r+v9N6oTy3Qv5uAk/3QzeG/XcI1OVQkAUAQSV9Z7Qr9P/RrFrWXrMu/W2k5L5Qs479Zo2IBM/vkv6FuipzkFvG/SqIpagcly7+ltipxmI3kv0pmis91cfc/gWQecsRh8D93xzejiVXQv3WdNhEv9uO/D7mgYy612j+PyVPNaT2jv34LIpFt6c6/l5YW2Ga45L+LUp+2A2z9P39i5xSpRfc/piRx4P8P0r9eCC3zBAjlv5n4OKmIUf2/jj/kUAwgAsDqW/cjbNPQv9X2z6SYweS/aTdljlWd8L94R8vZ8SL3v1EZczv0b9K/GBbbqxgk5r9XdfyikfEDwPILMvas0gfAnx0V97en0r88xQk/0IPmvxGErZ681fa/9kCaiOy2/b/2BCK0wyDVvy2xROCT4ua/+5EBLOXxA0B7p53+BnkAQKKI/QV+y9i/qDznPFM86b/snWGNkkgHwC+ByugkUwdAR98lJFqQ2b9sL7HxZkPovyJNGM67oek/HzNy6BqA1D96EnqL7pLYv0v8nFypHeq/axL/u1FnB0AkSEHvxn8DQGt+gG5Pstm/QS1keLLK6b/Sk/O6mtGzPxU8pLcPNty/FssiPwWy4L+IZTNYLmzqvw4szKfSouq/G+XJHY1a87+TVW2LUjjfvwQaifgujuy/3VARaoMl2L9NFodfK+/qv+0QMvYfP+C/FvLf01HN67+ETOQysd8AwH71iI/eGgXAbHNSHrTg4L96GNJ2CFvsv6BnExReeAFA5CakvxSl+j8MzcbAuwDgv5bXzdT1Auy/uVq8/8x58z+uvPMNqzTnP2HlfZ3gqOG/Z5Uh1wDX7r8PUbMSo2P7P9VfBrXlxPI/tQvDXQ3H4r9sJXFt2GTvvyDssGgO0PG/WxT/uE4N+r+Bk03jWYvjv/bf8sHUYu+/rUXN8hUe3j9m5HB1yZCzv/yE3PUo0+K/qqAX9idJ8L9mByqLMMH5v4kHC7KQowHAm+sAswr15L8F7/a5DE/wv2JLsGADFwTAKQjVGovZCMDDkYbTbifnvwVbdNXyhfC/malhH7yI7D+oevd0GWDZP1sjk5AdouW/KH/hrXUg8b8KWmrpQ0sFQAzEAF/pTgBAhB1hfFzT5r9XK/wflZ7xv18hRuqKXAjA/5rUd9v1BED/tlxBd4bov7pQU4wLfPK/4pnwn0T/sj/c277XPF3jv02biiQ+Rum/zGkxMcl88r8Yk0HhJVzjv62yUUFRjfS/89MEdoPQ6r8TqikcRF/zvxQxghHovfY/cfM1eFWE5j9pcwp7GJPrv5ehC2fbYPO/KUV2nGg0/795OhmUaqEFwFQeuy4j+eq/ePiwytEp9L8DuqWfW+8BQLytJylXHPY/PlP4Qr8q7r+kDLLri0P1vxT4ShWL+Oo/DMsWg0zlv7/S9fINXGjtv73m373LRPW/+xg/Gaxd8b94MdQEfW0AwLjBLbDOHO+/kmm4ANp49L+cShSMMbAEwKyjUgWirAdAo2q2uqM08L99wKzM+7H2v3RdlNBXFgnA8S9+ewyV/z+vaSZre3Pxv6riWFiWZfi/2J7VSZZ60j+LES81zPn3v+OrlPMN3PK/quJYWJZl+L/OZbufkEcEQLCNB/1lPOO/Y2nmTbY/87+q4lhYlmX4v7CNB/1lPOO/zmW7n5BHBEBwKD1Aa57LP/XsSsw7RbU/PMDPJGsfoD/TqningGKIPzFtCLYmb3I/qYfrJr7eWz9pQmleXRFFP0rWlJkA2i8/pCvcttgTGD9Dt8IWbjMCPyCG4GRlhOs+1JI2GhDN1D7ns8cGvXK/Pi8m8UTJxac+hNTfA2z4kT7GI8kjLyt7Pv//////HwAI//////8zEAj/////fzIgCP////9vMjAI/////2MyQAj///8/YjJQCP///zdiMmAI////M2IycAj//78zYjKACP//qzNiMpAI/3+rM2IyoAj/D6szYjKwCP8DqzNiMsAIvwOrM2Iy0AifA6szYjLgCJkDqzNiMvAI//////8/Dwj//////ysfCP////9/KS8I/////z8pPwj/////OSlPCP///z84KV8I////Dzgpbwj///8OOCl/CP//Hw44KY8I//8PDjgpnwj/fw0OOCmvCP8PDQ44Kb8I/w0NDjgpzwj/DA0OOCnfCMcMDQ44Ke8IxAwNDjgp/wgHAAAABwAAAAEAAAACAAAABAAAAAMAAAAAAAAAAAAAAAcAAAADAAAAAQAAAAIAAAAFAAAABAAAAAAAAAAAAAAABAAAAAQAAAAAAAAAAgAAAAEAAAADAAAADgAAAAYAAAALAAAAAgAAAAcAAAABAAAAGAAAAAUAAAAKAAAAAQAAAAYAAAAAAAAAJgAAAAcAAAAMAAAAAwAAAAgAAAACAAAAMQAAAAkAAAAOAAAAAAAAAAUAAAAEAAAAOgAAAAgAAAANAAAABAAAAAkAAAADAAAAPwAAAAsAAAAGAAAADwAAAAoAAAAQAAAASAAAAAwAAAAHAAAAEAAAAAsAAAARAAAAUwAAAAoAAAAFAAAAEwAAAA4AAAAPAAAAYQAAAA0AAAAIAAAAEQAAAAwAAAASAAAAawAAAA4AAAAJAAAAEgAAAA0AAAATAAAAdQAAAA8AAAATAAAAEQAAABIAAAAQAAAABgAAAAIAAAADAAAABQAAAAQAAAAAAAAAAAAAAAAAAAAGAAAAAgAAAAMAAAABAAAABQAAAAQAAAAAAAAAAAAAAAcAAAAFAAAAAwAAAAQAAAABAAAAAAAAAAIAAAAAAAAAAgAAAAMAAAABAAAABQAAAAQAAAAGAAAAAAAAAAAAAAAYLURU+yH5PxgtRFT7Ifm/GC1EVPshCUAYLURU+yEJwGFsZ29zLmMAaDNOZWlnaGJvclJvdGF0aW9ucwBjZWxsc1RvTXVsdGlQb2x5LmMAY2VsbFRvRWRnZUFyY3MAAAEDAgQABAMFAQJjYW5jZWxBcmNQYWlycwBjcmVhdGVTb3J0YWJsZUxvb3AAZGlyZWN0ZWRFZGdlLmMAZGlyZWN0ZWRFZGdlVG9Cb3VuZGFyeQBhZGphY2VudEZhY2VEaXJbdG1wRmlqay5mYWNlXVtmaWprLmZhY2VdID09IEtJAGZhY2VpamsuYwBfZmFjZUlqa1BlbnRUb0NlbGxCb3VuZGFyeQBhZGphY2VudEZhY2VEaXJbY2VudGVySUpLLmZhY2VdW2ZhY2UyXSA9PSBLSQBfZmFjZUlqa1RvQ2VsbEJvdW5kYXJ5AGgzSW5kZXguYwBjb21wYWN0Q2VsbHMAdmVjM1RvQ2VsbABjZWxsVG9DaGlsZFBvcwB2YWxpZGF0ZUNoaWxkUG9zAHJldkRpciAhPSBJTlZBTElEX0RJR0lUAGxvY2FsaWouYwBjZWxsVG9Mb2NhbElqawBiYXNlQ2VsbCAhPSBvcmlnaW5CYXNlQ2VsbAAhKG9yaWdpbk9uUGVudCAmJiBpbmRleE9uUGVudCkAYmFzZUNlbGwgPT0gb3JpZ2luQmFzZUNlbGwALi4vaW5jbHVkZS9jb29yZGlqay5oAF91cEFwN0NoZWNrZWQAX3VwQXA3ckNoZWNrZWQAYmFzZUNlbGwgIT0gSU5WQUxJRF9CQVNFX0NFTEwAbG9jYWxJamtUb0NlbGwAIV9pc0Jhc2VDZWxsUGVudGFnb24oYmFzZUNlbGwpAGJhc2VDZWxsUm90YXRpb25zID49IDAAZ3JpZFBhdGhDZWxsc0ludGVycG9sYXRlAHBvbHlmaWxsLmMAaXRlclN0ZXBQb2x5Z29uQ29tcGFjdAAwAHZlcnRleC5jAHZlcnRleFJvdGF0aW9ucwBjZWxsVG9WZXJ0ZXg=";var Up=28400;function Vp(te,ae,_e,ne){An("Assertion failed: "+se(te)+", at: "+[ae?se(ae):"unknown filename",_e,ne?se(ne):"unknown function"])}function w0(){return be.length}function jp(te,ae,_e){ve.set(ve.subarray(ae,ae+_e),te)}function Gp(te){return e.___errno_location&&(Ie[e.___errno_location()>>2]=te),te}function zp(te){An("OOM")}function Hp(te){try{var ae=new ArrayBuffer(te);return ae.byteLength!=te?void 0:(new Int8Array(ae).set(be),Xp(ae),Ke(ae),1)}catch{}}function qp(te){var ae=w0(),_e=16777216,ne=2147483648-_e;if(te>ne)return!1;for(var n=16777216,P=Math.max(ae,n);P<te;)P<=536870912?P=Q(2*P,_e):P=Math.min(Q((3*P+2147483648)/4,_e),ne);var Pe=Hp(P);return!!Pe}var Qp=typeof atob=="function"?atob:function(te){var ae="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",_e="",ne,n,P,Pe,$e,Et,et,Qe=0;te=te.replace(/[^A-Za-z0-9\+\/\=]/g,"");do Pe=ae.indexOf(te.charAt(Qe++)),$e=ae.indexOf(te.charAt(Qe++)),Et=ae.indexOf(te.charAt(Qe++)),et=ae.indexOf(te.charAt(Qe++)),ne=Pe<<2|$e>>4,n=($e&15)<<4|Et>>2,P=(Et&3)<<6|et,_e=_e+String.fromCharCode(ne),Et!==64&&(_e=_e+String.fromCharCode(n)),et!==64&&(_e=_e+String.fromCharCode(P));while(Qe<te.length);return _e};function Wp(te){try{for(var ae=Qp(te),_e=new Uint8Array(ae.length),ne=0;ne<ae.length;++ne)_e[ne]=ae.charCodeAt(ne);return _e}catch{throw new Error("Converting base64 string to bytes failed.")}}function Po(te){if(S0(te))return Wp(te.slice(Ro.length))}var Kp={Math,Int8Array,Int32Array,Uint8Array,Float32Array,Float64Array},$p={a:An,b:y,c:w,d:Vp,e:Gp,f:w0,g:jp,h:qp,i:zp,o:Up,p:Ge},ce=(function(te,ae,_e){"almost asm";var ne=new te.Int8Array(_e),n=new te.Int32Array(_e);new te.Uint8Array(_e),new te.Float32Array(_e);var P=new te.Float64Array(_e),Pe=ae.o|0,$e=ae.p|0,Et=te.Math.floor,et=te.Math.abs,Qe=te.Math.sqrt,tt=te.Math.cos,nt=te.Math.sin,zt=te.Math.tan,jr=te.Math.acos,Gr=te.Math.asin,I0=te.Math.atan,Ft=te.Math.atan2,Ln=te.Math.ceil,Ht=te.Math.imul,Oo=te.Math.min,Zp=te.Math.max,Nr=te.Math.clz32,em=ae.a,Re=ae.b,R=ae.c,ke=ae.d,R0=ae.e,tm=ae.f,rm=ae.g,nm=ae.h,im=ae.i,I=28416;function sm(s){return ne=new Int8Array(s),n=new Int32Array(s),P=new Float64Array(s),_e=s,!0}function om(s){s=s|0;var a=0;return a=I,I=I+s|0,I=I+15&-16,a|0}function am(){return I|0}function Am(s){s=s|0,I=s}function cm(s,a){s=s|0,I=s}function lm(s,a){s=s|0,a=a|0;var A=0,u=0,l=0;return(s|0)<0?(a=2,a|0):(s|0)>13780509?(a=is(15,a)|0,a|0):(A=((s|0)<0)<<31>>31,l=At(s|0,A|0,3,0)|0,u=R()|0,A=de(s|0,A|0,1,0)|0,A=At(l|0,u|0,A|0,R()|0)|0,A=de(A|0,R()|0,1,0)|0,s=R()|0,n[a>>2]=A,n[a+4>>2]=s,a=0,a|0)}function N0(s,a,A,u){return s=s|0,a=a|0,A=A|0,u=u|0,P0(s,a,A,u,0)|0}function P0(s,a,A,u,l){s=s|0,a=a|0,A=A|0,u=u|0,l=l|0;var f=0,h=0,p=0,g=0,b=0;if(g=I,I=I+16|0,h=g,!(L0(s,a,A,u,l)|0))return u=0,I=g,u|0;do if((A|0)>=0){if((A|0)>13780509){if(f=is(15,h)|0,f|0)break;p=h,h=n[p>>2]|0,p=n[p+4>>2]|0}else f=((A|0)<0)<<31>>31,b=At(A|0,f|0,3,0)|0,p=R()|0,f=de(A|0,f|0,1,0)|0,f=At(b|0,p|0,f|0,R()|0)|0,f=de(f|0,R()|0,1,0)|0,p=R()|0,n[h>>2]=f,n[h+4>>2]=p,h=f;if(Qr(u|0,0,h<<3|0)|0,l|0){Qr(l|0,0,h<<2|0)|0,f=Sr(s,a,A,u,l,h,p,0)|0;break}f=Bt(h,4)|0,f?(b=Sr(s,a,A,u,f,h,p,0)|0,ge(f),f=b):f=13}else f=2;while(!1);return b=f,I=g,b|0}function L0(s,a,A,u,l){s=s|0,a=a|0,A=A|0,u=u|0,l=l|0;var f=0,h=0,p=0,g=0,b=0,v=0,S=0,E=0,x=0,C=0,k=0;if(k=I,I=I+16|0,x=k,C=k+8|0,E=x,n[E>>2]=s,n[E+4>>2]=a,(A|0)<0)return C=2,I=k,C|0;if(f=u,n[f>>2]=s,n[f+4>>2]=a,f=(l|0)!=0,f&&(n[l>>2]=0),Ye(s,a)|0)return C=9,I=k,C|0;n[C>>2]=0;e:do if((A|0)>=1)if(f)for(v=1,b=0,S=0,E=1,f=s;;){if(!(b|S)){if(f=vt(f,a,4,C,x)|0,f|0)break e;if(a=x,f=n[a>>2]|0,a=n[a+4>>2]|0,Ye(f,a)|0){f=9;break e}}if(f=vt(f,a,n[26864+(S<<2)>>2]|0,C,x)|0,f|0)break e;if(a=x,f=n[a>>2]|0,a=n[a+4>>2]|0,s=u+(v<<3)|0,n[s>>2]=f,n[s+4>>2]=a,n[l+(v<<2)>>2]=E,s=b+1|0,h=(s|0)==(E|0),p=S+1|0,g=(p|0)==6,Ye(f,a)|0){f=9;break e}if(E=E+(g&h&1)|0,(E|0)>(A|0)){f=0;break}else v=v+1|0,b=h?0:s,S=h?g?0:p:S}else for(v=1,b=0,S=0,E=1,f=s;;){if(!(b|S)){if(f=vt(f,a,4,C,x)|0,f|0)break e;if(a=x,f=n[a>>2]|0,a=n[a+4>>2]|0,Ye(f,a)|0){f=9;break e}}if(f=vt(f,a,n[26864+(S<<2)>>2]|0,C,x)|0,f|0)break e;if(a=x,f=n[a>>2]|0,a=n[a+4>>2]|0,s=u+(v<<3)|0,n[s>>2]=f,n[s+4>>2]=a,s=b+1|0,h=(s|0)==(E|0),p=S+1|0,g=(p|0)==6,Ye(f,a)|0){f=9;break e}if(E=E+(g&h&1)|0,(E|0)>(A|0)){f=0;break}else v=v+1|0,b=h?0:s,S=h?g?0:p:S}else f=0;while(!1);return C=f,I=k,C|0}function Sr(s,a,A,u,l,f,h,p){s=s|0,a=a|0,A=A|0,u=u|0,l=l|0,f=f|0,h=h|0,p=p|0;var g=0,b=0,v=0,S=0,E=0,x=0,C=0,k=0,D=0,G=0;if(k=I,I=I+16|0,x=k+8|0,C=k,g=Pr(s|0,a|0,f|0,h|0)|0,v=R()|0,S=u+(g<<3)|0,D=S,G=n[D>>2]|0,D=n[D+4>>2]|0,b=(G|0)==(s|0)&(D|0)==(a|0),!((G|0)==0&(D|0)==0|b))do g=de(g|0,v|0,1,0)|0,g=qr(g|0,R()|0,f|0,h|0)|0,v=R()|0,S=u+(g<<3)|0,G=S,D=n[G>>2]|0,G=n[G+4>>2]|0,b=(D|0)==(s|0)&(G|0)==(a|0);while(!((D|0)==0&(G|0)==0|b));if(g=l+(g<<2)|0,b&&(n[g>>2]|0)<=(p|0)||(G=S,n[G>>2]=s,n[G+4>>2]=a,n[g>>2]=p,(p|0)>=(A|0)))return G=0,I=k,G|0;switch(b=p+1|0,n[x>>2]=0,g=vt(s,a,2,x,C)|0,g|0){case 9:{E=9;break}case 0:{g=C,g=Sr(n[g>>2]|0,n[g+4>>2]|0,A,u,l,f,h,b)|0,g||(E=9);break}}e:do if((E|0)==9){switch(n[x>>2]=0,g=vt(s,a,3,x,C)|0,g|0){case 9:break;case 0:{if(g=C,g=Sr(n[g>>2]|0,n[g+4>>2]|0,A,u,l,f,h,b)|0,g|0)break e;break}default:break e}switch(n[x>>2]=0,g=vt(s,a,1,x,C)|0,g|0){case 9:break;case 0:{if(g=C,g=Sr(n[g>>2]|0,n[g+4>>2]|0,A,u,l,f,h,b)|0,g|0)break e;break}default:break e}switch(n[x>>2]=0,g=vt(s,a,5,x,C)|0,g|0){case 9:break;case 0:{if(g=C,g=Sr(n[g>>2]|0,n[g+4>>2]|0,A,u,l,f,h,b)|0,g|0)break e;break}default:break e}switch(n[x>>2]=0,g=vt(s,a,4,x,C)|0,g|0){case 9:break;case 0:{if(g=C,g=Sr(n[g>>2]|0,n[g+4>>2]|0,A,u,l,f,h,b)|0,g|0)break e;break}default:break e}switch(n[x>>2]=0,g=vt(s,a,6,x,C)|0,g|0){case 9:break;case 0:{if(g=C,g=Sr(n[g>>2]|0,n[g+4>>2]|0,A,u,l,f,h,b)|0,g|0)break e;break}default:break e}return G=0,I=k,G|0}while(!1);return G=g,I=k,G|0}function vt(s,a,A,u,l){s=s|0,a=a|0,A=A|0,u=u|0,l=l|0;var f=0,h=0,p=0,g=0,b=0,v=0,S=0,E=0,x=0,C=0;if(A>>>0>6)return l=1,l|0;h=(n[u>>2]|0)%6|0,n[u>>2]=h;e:do if((h|0)>0)for(f=0;;){switch(A|0){case 1:{A=5;break}case 5:{A=4;break}case 4:{A=6;break}case 6:{A=2;break}case 2:{A=3;break}case 3:{A=1;break}}if(f=f+1|0,(f|0)==(h|0))break e}while(!1);if(S=oe(s|0,a|0,45)|0,R()|0,v=S&127,v>>>0>121)return l=5,l|0;g=qt(s,a)|0,f=oe(s|0,a|0,52)|0,R()|0,f=f&15;e:do if(!f)b=15;else{for(;;){if(h=(15-f|0)*3|0,p=oe(s|0,a|0,h|0)|0,R()|0,p=p&7,(p|0)==7){a=5;break}if(C=(ar(f)|0)==0,f=f+-1|0,E=le(7,0,h|0)|0,a=a&~(R()|0),x=le(n[(C?432:16)+(p*28|0)+(A<<2)>>2]|0,0,h|0)|0,h=R()|0,A=n[(C?640:224)+(p*28|0)+(A<<2)>>2]|0,s=x|s&~E,a=h|a,!A){A=0;break e}if(!f){b=15;break e}}return a|0}while(!1);(b|0)==15&&(C=n[848+(v*28|0)+(A<<2)>>2]|0,x=le(C|0,0,45)|0,s=x|s,a=R()|0|a&-1040385,A=n[4272+(v*28|0)+(A<<2)>>2]|0,(C&127|0)==127&&(C=le(n[848+(v*28|0)+20>>2]|0,0,45)|0,a=R()|0|a&-1040385,A=n[4272+(v*28|0)+20>>2]|0,s=cn(C|s,a)|0,a=R()|0,n[u>>2]=(n[u>>2]|0)+1)),p=oe(s|0,a|0,45)|0,R()|0,p=p&127;e:do if(ot(p)|0){t:do if((qt(s,a)|0)==1){if((v|0)!=(p|0))if(B0(p,n[7696+(v*28|0)>>2]|0)|0){s=Wo(s,a)|0,h=1,a=R()|0;break}else ke(27634,26928,533,26936);switch(g|0){case 3:{s=cn(s,a)|0,a=R()|0,n[u>>2]=(n[u>>2]|0)+1,h=0;break t}case 5:{s=Wo(s,a)|0,a=R()|0,n[u>>2]=(n[u>>2]|0)+5,h=0;break t}case 0:return C=9,C|0;default:return C=1,C|0}}else h=0;while(!1);if((A|0)>0){f=0;do s=Qo(s,a)|0,a=R()|0,f=f+1|0;while((f|0)!=(A|0))}if((v|0)!=(p|0)){if(!(Fo(p)|0)){if((h|0)!=0|(qt(s,a)|0)!=5)break;n[u>>2]=(n[u>>2]|0)+1;break}switch(S&127){case 8:case 118:break e}(qt(s,a)|0)!=3&&(n[u>>2]=(n[u>>2]|0)+1)}}else if((A|0)>0){f=0;do s=cn(s,a)|0,a=R()|0,f=f+1|0;while((f|0)!=(A|0))}while(!1);return n[u>>2]=((n[u>>2]|0)+A|0)%6|0,C=l,n[C>>2]=s,n[C+4>>2]=a,C=0,C|0}function um(s,a,A,u){return s=s|0,a=a|0,A=A|0,u=u|0,k0(s,a,A,u)|0?(Qr(u|0,0,A*48|0)|0,u=fm(s,a,A,u)|0,u|0):(u=0,u|0)}function k0(s,a,A,u){s=s|0,a=a|0,A=A|0,u=u|0;var l=0,f=0,h=0,p=0,g=0,b=0,v=0,S=0,E=0,x=0,C=0;if(C=I,I=I+16|0,E=C,x=C+8|0,S=E,n[S>>2]=s,n[S+4>>2]=a,(A|0)<0)return x=2,I=C,x|0;if(!A)return x=u,n[x>>2]=s,n[x+4>>2]=a,x=0,I=C,x|0;n[x>>2]=0;e:do if(Ye(s,a)|0)s=9;else{l=0,S=s;do{if(s=vt(S,a,4,x,E)|0,s|0)break e;if(a=E,S=n[a>>2]|0,a=n[a+4>>2]|0,l=l+1|0,Ye(S,a)|0){s=9;break e}}while((l|0)<(A|0));v=u,n[v>>2]=S,n[v+4>>2]=a,v=A+-1|0,b=0,s=1;do{if(l=26864+(b<<2)|0,(b|0)==5)for(h=n[l>>2]|0,f=0,l=s;;){if(s=E,s=vt(n[s>>2]|0,n[s+4>>2]|0,h,x,E)|0,s|0)break e;if((f|0)!=(v|0))if(g=E,p=n[g>>2]|0,g=n[g+4>>2]|0,s=u+(l<<3)|0,n[s>>2]=p,n[s+4>>2]=g,!(Ye(p,g)|0))s=l+1|0;else{s=9;break e}else s=l;if(f=f+1|0,(f|0)>=(A|0))break;l=s}else for(h=E,g=n[l>>2]|0,p=0,l=s,f=n[h>>2]|0,h=n[h+4>>2]|0;;){if(s=vt(f,h,g,x,E)|0,s|0)break e;if(h=E,f=n[h>>2]|0,h=n[h+4>>2]|0,s=u+(l<<3)|0,n[s>>2]=f,n[s+4>>2]=h,s=l+1|0,Ye(f,h)|0){s=9;break e}if(p=p+1|0,(p|0)>=(A|0))break;l=s}b=b+1|0}while(b>>>0<6);s=E,s=(S|0)==(n[s>>2]|0)&&(a|0)==(n[s+4>>2]|0)?0:9}while(!1);return x=s,I=C,x|0}function fm(s,a,A,u){s=s|0,a=a|0,A=A|0,u=u|0;var l=0,f=0,h=0,p=0,g=0,b=0,v=0,S=0,E=0;if(S=I,I=I+16|0,h=S,!A)return n[u>>2]=s,n[u+4>>2]=a,u=0,I=S,u|0;do if((A|0)>=0){if((A|0)>13780509){if(l=is(15,h)|0,l|0)break;f=h,l=n[f>>2]|0,f=n[f+4>>2]|0}else l=((A|0)<0)<<31>>31,v=At(A|0,l|0,3,0)|0,f=R()|0,l=de(A|0,l|0,1,0)|0,l=At(v|0,f|0,l|0,R()|0)|0,l=de(l|0,R()|0,1,0)|0,f=R()|0,v=h,n[v>>2]=l,n[v+4>>2]=f;if(b=Bt(l,8)|0,!b)l=13;else{if(v=Bt(l,4)|0,!v){ge(b),l=13;break}if(l=Sr(s,a,A,b,v,l,f,0)|0,l|0){ge(b),ge(v);break}if(a=n[h>>2]|0,h=n[h+4>>2]|0,(h|0)>0|(h|0)==0&a>>>0>0){l=0,p=0,g=0;do s=b+(p<<3)|0,f=n[s>>2]|0,s=n[s+4>>2]|0,!((f|0)==0&(s|0)==0)&&(n[v+(p<<2)>>2]|0)==(A|0)&&(E=u+(l<<3)|0,n[E>>2]=f,n[E+4>>2]=s,l=l+1|0),p=de(p|0,g|0,1,0)|0,g=R()|0;while((g|0)<(h|0)|(g|0)==(h|0)&p>>>0<a>>>0)}ge(b),ge(v),l=0}}else l=2;while(!1);return E=l,I=S,E|0}function ts(s,a,A,u){s=s|0,a=a|0,A=A|0,u=u|0;var l=0,f=0,h=0,p=0,g=0,b=0;for(p=I,I=I+16|0,f=p,h=p+8|0,l=(Ye(s,a)|0)==0,l=l?1:2;;){if(n[h>>2]=0,b=(vt(s,a,l,h,f)|0)==0,g=f,b&((n[g>>2]|0)==(A|0)?(n[g+4>>2]|0)==(u|0):0)){s=4;break}if(l=l+1|0,l>>>0>=7){l=7,s=4;break}}return(s|0)==4?(I=p,l|0):0}function hm(s,a,A,u){s=s|0,a=a|0,A=A|0,u=u|0;var l=0,f=0,h=0,p=0,g=0,b=0;if(p=I,I=I+48|0,l=p+16|0,f=p+8|0,h=p,A=Ei(A)|0,A|0)return h=A,I=p,h|0;if(b=s,g=n[b+4>>2]|0,A=f,n[A>>2]=n[b>>2],n[A+4>>2]=g,tc(f,l),A=j0(l,a,h)|0,!A){if(a=n[f>>2]|0,f=n[s+8>>2]|0,(f|0)>0){l=n[s+12>>2]|0,A=0;do a=(n[l+(A<<3)>>2]|0)+a|0,A=A+1|0;while((A|0)<(f|0))}A=h,l=n[A>>2]|0,A=n[A+4>>2]|0,f=((a|0)<0)<<31>>31,(A|0)<(f|0)|(A|0)==(f|0)&l>>>0<a>>>0?(A=h,n[A>>2]=a,n[A+4>>2]=f,A=f):a=l,g=de(a|0,A|0,12,0)|0,b=R()|0,A=h,n[A>>2]=g,n[A+4>>2]=b,A=u,n[A>>2]=g,n[A+4>>2]=b,A=0}return b=A,I=p,b|0}function O0(s,a,A,u,l,f,h){s=s|0,a=a|0,A=A|0,u=u|0,l=l|0,f=f|0,h=h|0;var p=0,g=0,b=0,v=0,S=0,E=0,x=0,C=0,k=0,D=0,G=0,L=0,H=0,V=0,ee=0,ie=0,K=0,z=0,pe=0,re=0,Te=0,Ae=0,fe=0,Oe=0,De=0,Rt=0,Ne=0,Ue=0,Dt=0;if(De=I,I=I+64|0,Te=De+48|0,Ae=De+32|0,fe=De+24|0,ee=De+8|0,ie=De,g=n[s>>2]|0,(g|0)<=0)return Oe=0,I=De,Oe|0;for(K=s+4|0,z=Te+8|0,pe=Ae+8|0,re=ee+8|0,p=0,H=0;;){b=n[K>>2]|0,L=b+(H<<4)|0,n[Te>>2]=n[L>>2],n[Te+4>>2]=n[L+4>>2],n[Te+8>>2]=n[L+8>>2],n[Te+12>>2]=n[L+12>>2],(H|0)==(g+-1|0)?(n[Ae>>2]=n[b>>2],n[Ae+4>>2]=n[b+4>>2],n[Ae+8>>2]=n[b+8>>2],n[Ae+12>>2]=n[b+12>>2]):(L=b+(H+1<<4)|0,n[Ae>>2]=n[L>>2],n[Ae+4>>2]=n[L+4>>2],n[Ae+8>>2]=n[L+8>>2],n[Ae+12>>2]=n[L+12>>2]),g=Mm(Te,Ae,u,fe)|0;e:do if(g)b=0,p=g;else if(g=fe,b=n[g>>2]|0,g=n[g+4>>2]|0,(g|0)>0|(g|0)==0&b>>>0>0){G=0,L=0;t:for(;;){if(Ne=1/(+(b>>>0)+4294967296*+(g|0)),Dt=+P[Te>>3],g=yt(b|0,g|0,G|0,L|0)|0,Ue=+(g>>>0)+4294967296*+(R()|0),Rt=+(G>>>0)+4294967296*+(L|0),P[ee>>3]=Ne*(Dt*Ue)+Ne*(+P[Ae>>3]*Rt),P[re>>3]=Ne*(+P[z>>3]*Ue)+Ne*(+P[pe>>3]*Rt),g=Ko(ee,u,ie)|0,g|0){p=g;break}D=ie,k=n[D>>2]|0,D=n[D+4>>2]|0,E=Pr(k|0,D|0,a|0,A|0)|0,v=R()|0,g=h+(E<<3)|0,S=g,b=n[S>>2]|0,S=n[S+4>>2]|0;r:do if((b|0)==0&(S|0)==0)V=g,Oe=16;else for(x=0,C=0;;){if((x|0)>(A|0)|(x|0)==(A|0)&C>>>0>a>>>0){p=1;break t}if((b|0)==(k|0)&(S|0)==(D|0))break r;if(g=de(E|0,v|0,1,0)|0,E=qr(g|0,R()|0,a|0,A|0)|0,v=R()|0,C=de(C|0,x|0,1,0)|0,x=R()|0,g=h+(E<<3)|0,S=g,b=n[S>>2]|0,S=n[S+4>>2]|0,(b|0)==0&(S|0)==0){V=g,Oe=16;break}}while(!1);if((Oe|0)==16&&(Oe=0,!((k|0)==0&(D|0)==0))&&(C=V,n[C>>2]=k,n[C+4>>2]=D,C=f+(n[l>>2]<<3)|0,n[C>>2]=k,n[C+4>>2]=D,C=l,C=de(n[C>>2]|0,n[C+4>>2]|0,1,0)|0,k=R()|0,D=l,n[D>>2]=C,n[D+4>>2]=k),G=de(G|0,L|0,1,0)|0,L=R()|0,g=fe,b=n[g>>2]|0,g=n[g+4>>2]|0,!((g|0)>(L|0)|(g|0)==(L|0)&b>>>0>G>>>0)){b=1;break e}}b=0}else b=1;while(!1);if(H=H+1|0,!b){Oe=21;break}if(g=n[s>>2]|0,(H|0)>=(g|0)){p=0,Oe=21;break}}return(Oe|0)==21?(I=De,p|0):0}function dm(s,a,A,u){s=s|0,a=a|0,A=A|0,u=u|0;var l=0,f=0,h=0,p=0,g=0,b=0,v=0,S=0,E=0,x=0,C=0,k=0,D=0,G=0,L=0,H=0,V=0,ee=0,ie=0,K=0,z=0,pe=0,re=0,Te=0,Ae=0,fe=0,Oe=0,De=0,Rt=0,Ne=0,Ue=0;if(Ue=I,I=I+112|0,Oe=Ue+80|0,g=Ue+72|0,De=Ue,Rt=Ue+56|0,l=Ei(A)|0,l|0)return Ne=l,I=Ue,Ne|0;if(b=s+8|0,Ne=at((n[b>>2]<<5)+32|0)|0,!Ne)return Ne=13,I=Ue,Ne|0;if(ta(s,Ne),l=Ei(A)|0,!l){if(Ae=s,fe=n[Ae+4>>2]|0,l=g,n[l>>2]=n[Ae>>2],n[l+4>>2]=fe,tc(g,Oe),l=j0(Oe,a,De)|0,l)Ae=0,fe=0;else{if(l=n[g>>2]|0,f=n[b>>2]|0,(f|0)>0){h=n[s+12>>2]|0,A=0;do l=(n[h+(A<<3)>>2]|0)+l|0,A=A+1|0;while((A|0)!=(f|0));A=l}else A=l;l=De,f=n[l>>2]|0,l=n[l+4>>2]|0,h=((A|0)<0)<<31>>31,(l|0)<(h|0)|(l|0)==(h|0)&f>>>0<A>>>0?(l=De,n[l>>2]=A,n[l+4>>2]=h,l=h):A=f,Ae=de(A|0,l|0,12,0)|0,fe=R()|0,l=De,n[l>>2]=Ae,n[l+4>>2]=fe,l=0}if(!l){if(A=Bt(Ae,8)|0,!A)return ge(Ne),Ne=13,I=Ue,Ne|0;if(p=Bt(Ae,8)|0,!p)return ge(Ne),ge(A),Ne=13,I=Ue,Ne|0;re=Oe,n[re>>2]=0,n[re+4>>2]=0,re=s,Te=n[re+4>>2]|0,l=g,n[l>>2]=n[re>>2],n[l+4>>2]=Te,l=O0(g,Ae,fe,a,Oe,A,p)|0;e:do if(l)ge(A),ge(p),ge(Ne);else{t:do if((n[b>>2]|0)>0){for(h=s+12|0,f=0;l=O0((n[h>>2]|0)+(f<<3)|0,Ae,fe,a,Oe,A,p)|0,f=f+1|0,!(l|0);)if((f|0)>=(n[b>>2]|0))break t;ge(A),ge(p),ge(Ne);break e}while(!1);(fe|0)>0|(fe|0)==0&Ae>>>0>0&&Qr(p|0,0,Ae<<3|0)|0,Te=Oe,re=n[Te+4>>2]|0;t:do if((re|0)>0|(re|0)==0&(n[Te>>2]|0)>>>0>0){K=A,z=p,pe=A,re=p,Te=A,l=A,V=A,ee=p,ie=p,A=p;r:for(;;){for(D=0,G=0,L=0,H=0,f=0,h=0;;){p=De,g=p+56|0;do n[p>>2]=0,p=p+4|0;while((p|0)<(g|0));if(a=K+(D<<3)|0,b=n[a>>2]|0,a=n[a+4>>2]|0,L0(b,a,1,De,0)|0){p=De,g=p+56|0;do n[p>>2]=0,p=p+4|0;while((p|0)<(g|0));p=Bt(7,4)|0,p|0&&(Sr(b,a,1,De,p,7,0,0)|0,ge(p))}for(k=0;;){C=De+(k<<3)|0,x=n[C>>2]|0,C=n[C+4>>2]|0;n:do if((x|0)==0&(C|0)==0)p=f,g=h;else{if(v=Pr(x|0,C|0,Ae|0,fe|0)|0,b=R()|0,p=u+(v<<3)|0,a=p,g=n[a>>2]|0,a=n[a+4>>2]|0,!((g|0)==0&(a|0)==0)){S=0,E=0;do{if((S|0)>(fe|0)|(S|0)==(fe|0)&E>>>0>Ae>>>0)break r;if((g|0)==(x|0)&(a|0)==(C|0)){p=f,g=h;break n}p=de(v|0,b|0,1,0)|0,v=qr(p|0,R()|0,Ae|0,fe|0)|0,b=R()|0,E=de(E|0,S|0,1,0)|0,S=R()|0,p=u+(v<<3)|0,a=p,g=n[a>>2]|0,a=n[a+4>>2]|0}while(!((g|0)==0&(a|0)==0))}if((x|0)==0&(C|0)==0){p=f,g=h;break}Fn(x,C,Rt)|0,ra(s,Ne,Rt)|0&&(E=de(f|0,h|0,1,0)|0,h=R()|0,S=p,n[S>>2]=x,n[S+4>>2]=C,f=z+(f<<3)|0,n[f>>2]=x,n[f+4>>2]=C,f=E),p=f,g=h}while(!1);if(k=k+1|0,k>>>0>=7)break;f=p,h=g}if(D=de(D|0,G|0,1,0)|0,G=R()|0,L=de(L|0,H|0,1,0)|0,H=R()|0,h=Oe,f=n[h>>2]|0,h=n[h+4>>2]|0,(H|0)<(h|0)|(H|0)==(h|0)&L>>>0<f>>>0)f=p,h=g;else break}if((h|0)>0|(h|0)==0&f>>>0>0){f=0,h=0;do H=K+(f<<3)|0,n[H>>2]=0,n[H+4>>2]=0,f=de(f|0,h|0,1,0)|0,h=R()|0,H=Oe,L=n[H+4>>2]|0;while((h|0)<(L|0)|((h|0)==(L|0)?f>>>0<(n[H>>2]|0)>>>0:0))}if(H=Oe,n[H>>2]=p,n[H+4>>2]=g,(g|0)>0|(g|0)==0&p>>>0>0)k=A,D=ie,G=Te,L=ee,H=z,A=V,ie=l,ee=pe,V=k,l=D,Te=re,re=G,pe=L,z=K,K=H;else break t}ge(pe),ge(re),ge(Ne),l=1;break e}else l=p;while(!1);ge(Ne),ge(A),ge(l),l=0}while(!1);return Ne=l,I=Ue,Ne|0}}return ge(Ne),Ne=l,I=Ue,Ne|0}function pm(s,a,A){s=s|0,a=a|0,A=A|0;var u=0,l=0,f=0,h=0,p=0,g=0,b=0;if(p=I,I=I+16|0,h=p,s=Rm(s,a,((a|0)<0)<<31>>31,h)|0,s|0)return h=s,I=p,h|0;if(f=ug(h,A)|0,A=h+4|0,(n[h>>2]|0)>0){a=0;do{if(l=n[A>>2]|0,u=l+(a<<4)+4|0,ge(n[u>>2]|0),n[u>>2]=0,n[l+(a<<4)>>2]=0,u=l+(a<<4)+8|0,l=l+(a<<4)+12|0,(n[u>>2]|0)>0){s=0;do g=n[l>>2]|0,b=g+(s<<3)+4|0,ge(n[b>>2]|0),n[b>>2]=0,n[g+(s<<3)>>2]=0,s=s+1|0;while((s|0)<(n[u>>2]|0))}ge(n[l>>2]|0),n[l>>2]=0,n[u>>2]=0,a=a+1|0}while((a|0)<(n[h>>2]|0))}return ge(n[A>>2]|0),n[A>>2]=0,n[h>>2]=0,b=f,I=p,b|0}function or(s,a){s=s|0,a=a|0;var A=0,u=0,l=0,f=0,h=0,p=0,g=0,b=0,v=0,S=0;if(h=n[s>>2]|0,(h|0)<=0)return l=0,u=0,h=l<0,u=12.566370614359172-u,u=l+u,l=h?u:l,P[a>>3]=l,0;if(f=n[s+4>>2]|0,s=(h|0)!=1&1,p=+P[f>>3]*.5+.7853981633974483,l=+P[f+(s<<4)>>3]*.5+.7853981633974483,A=+nt(+p)*+nt(+l),u=+P[f+(s<<4)+8>>3]-+P[f+8>>3],A=+Ft(+(+nt(+u)*A),+(+tt(+p)*+tt(+l)+ +tt(+u)*A))*-2,u=A+0,A=u-A,(h|0)==1)return p=u,l=A,h=p<0,l=12.566370614359172-l,l=p+l,p=h?l:p,P[a>>3]=p,0;for(s=1,l=u;v=s,s=s+1|0,S=(s|0)%(h|0)|0,b=+P[f+(v<<4)>>3]*.5+.7853981633974483,g=+P[f+(S<<4)>>3]*.5+.7853981633974483,u=+nt(+b)*+nt(+g),p=+P[f+(S<<4)+8>>3]-+P[f+(v<<4)+8>>3],A=+Ft(+(+nt(+p)*u),+(+tt(+b)*+tt(+g)+ +tt(+p)*u))*-2-A,u=l+A,A=u-l-A,!((s|0)>=(h|0));)l=u;return S=u<0,b=12.566370614359172-A,b=u+b,b=S?b:u,P[a>>3]=b,0}function mm(s,a,A){s=s|0,a=a|0,A=A|0;var u=0,l=0,f=0,h=0;return h=I,I=I+192|0,u=h+176|0,l=h,f=h+168|0,s=ln(s,a,l)|0,s|0?(f=s,I=h,f|0):(n[f>>2]=n[l>>2],n[f+4>>2]=l+8,n[u>>2]=n[f>>2],n[u+4>>2]=n[f+4>>2],or(u,A)|0,f=0,I=h,f|0)}function gm(s,a,A){s=s|0,a=a|0,A=A|0;var u=0,l=0,f=0,h=0;return h=I,I=I+192|0,u=h+176|0,l=h,f=h+168|0,s=ln(s,a,l)|0,s?(f=s,I=h,f|0):(n[f>>2]=n[l>>2],n[f+4>>2]=l+8,n[u>>2]=n[f>>2],n[u+4>>2]=n[f+4>>2],or(u,A)|0,P[A>>3]=+P[A>>3]*4058973249931477e-8,f=0,I=h,f|0)}function bm(s,a,A){s=s|0,a=a|0,A=A|0;var u=0,l=0,f=0,h=0;return h=I,I=I+192|0,u=h+176|0,l=h,f=h+168|0,s=ln(s,a,l)|0,s?(f=s,I=h,f|0):(n[f>>2]=n[l>>2],n[f+4>>2]=l+8,n[u>>2]=n[f>>2],n[u+4>>2]=n[f+4>>2],or(u,A)|0,P[A>>3]=+P[A>>3]*4058973249931477e-8*1e6,f=0,I=h,f|0)}function ot(s){return s=s|0,s>>>0>121?(s=0,s|0):(s=n[7696+(s*28|0)+16>>2]|0,s|0)}function Fo(s){return s=s|0,(s|0)==4|(s|0)==117|0}function F0(s){return s=s|0,n[11120+((n[s>>2]|0)*216|0)+((n[s+4>>2]|0)*72|0)+((n[s+8>>2]|0)*24|0)+(n[s+12>>2]<<3)>>2]|0}function _m(s){return s=s|0,n[11120+((n[s>>2]|0)*216|0)+((n[s+4>>2]|0)*72|0)+((n[s+8>>2]|0)*24|0)+(n[s+12>>2]<<3)+4>>2]|0}function Tm(s,a){s=s|0,a=a|0,s=7696+(s*28|0)|0,n[a>>2]=n[s>>2],n[a+4>>2]=n[s+4>>2],n[a+8>>2]=n[s+8>>2],n[a+12>>2]=n[s+12>>2]}function vm(s,a){s=s|0,a=a|0;var A=0,u=0;if(a>>>0>20)return a=-1,a|0;do if((n[11120+(a*216|0)>>2]|0)!=(s|0))if((n[11120+(a*216|0)+8>>2]|0)!=(s|0))if((n[11120+(a*216|0)+16>>2]|0)!=(s|0))if((n[11120+(a*216|0)+24>>2]|0)!=(s|0))if((n[11120+(a*216|0)+32>>2]|0)!=(s|0))if((n[11120+(a*216|0)+40>>2]|0)!=(s|0))if((n[11120+(a*216|0)+48>>2]|0)!=(s|0))if((n[11120+(a*216|0)+56>>2]|0)!=(s|0))if((n[11120+(a*216|0)+64>>2]|0)!=(s|0))if((n[11120+(a*216|0)+72>>2]|0)!=(s|0))if((n[11120+(a*216|0)+80>>2]|0)!=(s|0))if((n[11120+(a*216|0)+88>>2]|0)!=(s|0))if((n[11120+(a*216|0)+96>>2]|0)!=(s|0))if((n[11120+(a*216|0)+104>>2]|0)!=(s|0))if((n[11120+(a*216|0)+112>>2]|0)!=(s|0))if((n[11120+(a*216|0)+120>>2]|0)!=(s|0))if((n[11120+(a*216|0)+128>>2]|0)!=(s|0))if((n[11120+(a*216|0)+136>>2]|0)==(s|0))s=2,A=1,u=2;else{if((n[11120+(a*216|0)+144>>2]|0)==(s|0)){s=0,A=2,u=0;break}if((n[11120+(a*216|0)+152>>2]|0)==(s|0)){s=0,A=2,u=1;break}if((n[11120+(a*216|0)+160>>2]|0)==(s|0)){s=0,A=2,u=2;break}if((n[11120+(a*216|0)+168>>2]|0)==(s|0)){s=1,A=2,u=0;break}if((n[11120+(a*216|0)+176>>2]|0)==(s|0)){s=1,A=2,u=1;break}if((n[11120+(a*216|0)+184>>2]|0)==(s|0)){s=1,A=2,u=2;break}if((n[11120+(a*216|0)+192>>2]|0)==(s|0)){s=2,A=2,u=0;break}if((n[11120+(a*216|0)+200>>2]|0)==(s|0)){s=2,A=2,u=1;break}if((n[11120+(a*216|0)+208>>2]|0)==(s|0)){s=2,A=2,u=2;break}else s=-1;return s|0}else s=2,A=1,u=1;else s=2,A=1,u=0;else s=1,A=1,u=2;else s=1,A=1,u=1;else s=1,A=1,u=0;else s=0,A=1,u=2;else s=0,A=1,u=1;else s=0,A=1,u=0;else s=2,A=0,u=2;else s=2,A=0,u=1;else s=2,A=0,u=0;else s=1,A=0,u=2;else s=1,A=0,u=1;else s=1,A=0,u=0;else s=0,A=0,u=2;else s=0,A=0,u=1;else s=0,A=0,u=0;while(!1);return a=n[11120+(a*216|0)+(A*72|0)+(s*24|0)+(u<<3)+4>>2]|0,a|0}function B0(s,a){return s=s|0,a=a|0,(n[7696+(s*28|0)+20>>2]|0)==(a|0)?(a=1,a|0):(a=(n[7696+(s*28|0)+24>>2]|0)==(a|0),a|0)}function Bo(s,a){return s=s|0,a=a|0,n[848+(s*28|0)+(a<<2)>>2]|0}function Do(s,a){return s=s|0,a=a|0,(n[848+(s*28|0)>>2]|0)==(a|0)?(a=0,a|0):(n[848+(s*28|0)+4>>2]|0)==(a|0)?(a=1,a|0):(n[848+(s*28|0)+8>>2]|0)==(a|0)?(a=2,a|0):(n[848+(s*28|0)+12>>2]|0)==(a|0)?(a=3,a|0):(n[848+(s*28|0)+16>>2]|0)==(a|0)?(a=4,a|0):(n[848+(s*28|0)+20>>2]|0)==(a|0)?(a=5,a|0):((n[848+(s*28|0)+24>>2]|0)==(a|0)?6:7)|0}function ym(){return 122}function Sm(s){s=s|0;var a=0,A=0,u=0;a=0;do le(a|0,0,45)|0,u=R()|0|134225919,A=s+(a<<3)|0,n[A>>2]=-1,n[A+4>>2]=u,a=a+1|0;while((a|0)!=122);return 0}function wm(s){s=s|0;var a=0,A=0,u=0;return u=+P[s+16>>3],A=+P[s+24>>3],a=u-A,+(u<A?a+6.283185307179586:a)}function Em(s){return s=s|0,+P[s+16>>3]<+P[s+24>>3]|0}function xm(s){return s=s|0,+(+P[s>>3]-+P[s+8>>3])}function D0(s,a){s=s|0,a=a|0;var A=0,u=0,l=0;return A=+P[a>>3],!(A>=+P[s+8>>3])||!(A<=+P[s>>3])?(a=0,a|0):(u=+P[s+16>>3],A=+P[s+24>>3],l=+P[a+8>>3],a=l>=A,s=l<=u&1,u<A?a&&(s=1):a||(s=0),a=(s|0)!=0,a|0)}function Uo(s,a){s=s|0,a=a|0;var A=0,u=0,l=0,f=0,h=0,p=0,g=0,b=0,v=0;return+P[s>>3]<+P[a+8>>3]||+P[s+8>>3]>+P[a>>3]?(u=0,u|0):(f=+P[s+16>>3],A=s+24|0,v=+P[A>>3],h=f<v,u=a+16|0,b=+P[u>>3],l=a+24|0,g=+P[l>>3],p=b<g,a=v-b<g-f,s=h?p|a?1:2:0,a=p?h?1:a?2:1:0,f=+Zt(f,s),f<+Zt(+P[l>>3],a)||(v=+Zt(+P[A>>3],s),v>+Zt(+P[u>>3],a))?(p=0,p|0):(p=1,p|0))}function Cm(s,a,A,u){s=s|0,a=a|0,A=A|0,u=u|0;var l=0,f=0,h=0,p=0,g=0;f=+P[s+16>>3],g=+P[s+24>>3],s=f<g,p=+P[a+16>>3],h=+P[a+24>>3],l=p<h,a=g-p<h-f,n[A>>2]=s?l|a?1:2:0,n[u>>2]=l?s?1:a?2:1:0}function U0(s,a){s=s|0,a=a|0;var A=0,u=0,l=0,f=0,h=0,p=0,g=0,b=0,v=0;return+P[s>>3]<+P[a>>3]||+P[s+8>>3]>+P[a+8>>3]?(u=0,u|0):(u=s+16|0,g=+P[u>>3],f=+P[s+24>>3],h=g<f,A=a+16|0,v=+P[A>>3],l=a+24|0,b=+P[l>>3],p=v<b,a=f-v<b-g,s=h?p|a?1:2:0,a=p?h?1:a?2:1:0,f=+Zt(f,s),f<=+Zt(+P[l>>3],a)?(v=+Zt(+P[u>>3],s),p=v>=+Zt(+P[A>>3],a),p|0):(p=0,p|0))}function V0(s,a){s=s|0,a=a|0;var A=0,u=0,l=0,f=0,h=0,p=0;l=I,I=I+176|0,u=l,n[u>>2]=4,p=+P[a>>3],P[u+8>>3]=p,f=+P[a+16>>3],P[u+16>>3]=f,P[u+24>>3]=p,p=+P[a+24>>3],P[u+32>>3]=p,h=+P[a+8>>3],P[u+40>>3]=h,P[u+48>>3]=p,P[u+56>>3]=h,P[u+64>>3]=f,a=u+72|0,A=a+96|0;do n[a>>2]=0,a=a+4|0;while((a|0)<(A|0));mr(s|0,u|0,168)|0,I=l}function j0(s,a,A){s=s|0,a=a|0,A=A|0;var u=0,l=0,f=0,h=0,p=0,g=0,b=0,v=0,S=0,E=0,x=0,C=0,k=0,D=0;C=I,I=I+288|0,v=C+264|0,S=C+96|0,b=C,p=b,g=p+96|0;do n[p>>2]=0,p=p+4|0;while((p|0)<(g|0));return a=Xo(a,b)|0,a|0?(x=a,I=C,x|0):(g=b,b=n[g>>2]|0,g=n[g+4>>2]|0,Fn(b,g,v)|0,ln(b,g,S)|0,h=+yi(v,S+8|0),P[v>>3]=+P[s>>3],g=v+8|0,P[g>>3]=+P[s+16>>3],P[S>>3]=+P[s+8>>3],b=S+8|0,P[b>>3]=+P[s+24>>3],l=+yi(v,S),D=+P[g>>3]-+P[b>>3],f=+et(+D),k=+P[v>>3]-+P[S>>3],u=+et(+k),!(D==0|k==0)&&(D=+dc(+f,+u),D=+Ln(+(l*l/+us(+(D/+us(+f,+u)),3)/(h*(h*2.59807621135)*.8))),P[Pe>>3]=D,E=~~D>>>0,x=+et(D)>=1?D>0?~~+Oo(+Et(D/4294967296),4294967295)>>>0:~~+Ln((D-+(~~D>>>0))/4294967296)>>>0:0,(n[Pe+4>>2]&2146435072|0)!=2146435072)?(S=(E|0)==0&(x|0)==0,a=A,n[a>>2]=S?1:E,n[a+4>>2]=S?0:x,a=0):a=1,x=a,I=C,x|0)}function Mm(s,a,A,u){s=s|0,a=a|0,A=A|0,u=u|0;var l=0,f=0,h=0,p=0,g=0,b=0,v=0;b=I,I=I+288|0,h=b+264|0,p=b+96|0,g=b,l=g,f=l+96|0;do n[l>>2]=0,l=l+4|0;while((l|0)<(f|0));return A=Xo(A,g)|0,A|0?(u=A,I=b,u|0):(A=g,l=n[A>>2]|0,A=n[A+4>>2]|0,Fn(l,A,h)|0,ln(l,A,p)|0,v=+yi(h,p+8|0),v=+Ln(+(+yi(s,a)/(v*2))),P[Pe>>3]=v,A=~~v>>>0,l=+et(v)>=1?v>0?~~+Oo(+Et(v/4294967296),4294967295)>>>0:~~+Ln((v-+(~~v>>>0))/4294967296)>>>0:0,(n[Pe+4>>2]&2146435072|0)==2146435072?(u=1,I=b,u|0):(g=(A|0)==0&(l|0)==0,n[u>>2]=g?1:A,n[u+4>>2]=g?0:l,u=0,I=b,u|0))}function Im(s,a){s=s|0,a=+a;var A=0,u=0,l=0,f=0,h=0,p=0,g=0,b=0,v=0;f=s+16|0,h=+P[f>>3],A=s+24|0,l=+P[A>>3],u=h-l,u=h<l?u+6.283185307179586:u,b=+P[s>>3],p=s+8|0,g=+P[p>>3],v=b-g,u=(u*a-u)*.5,a=(v*a-v)*.5,b=b+a,P[s>>3]=b>1.5707963267948966?1.5707963267948966:b,a=g-a,P[p>>3]=a<-1.5707963267948966?-1.5707963267948966:a,a=h+u,a=a>3.141592653589793?a+-6.283185307179586:a,P[f>>3]=a<-3.141592653589793?a+6.283185307179586:a,a=l-u,a=a>3.141592653589793?a+-6.283185307179586:a,P[A>>3]=a<-3.141592653589793?a+6.283185307179586:a}function Rm(s,a,A,u){s=s|0,a=a|0,A=A|0,u=u|0;var l=0,f=0,h=0,p=0,g=0,b=0,v=0,S=0,E=0,x=0,C=0,k=0,D=0,G=0,L=0,H=0,V=0,ee=0,ie=0,K=0,z=0,pe=0,re=0,Te=0,Ae=0,fe=0;if(fe=I,I=I+224|0,pe=fe,ee=fe+48|0,g=(A|0)>0|(A|0)==0&a>>>0>0,g&(A>>>0>0|(A|0)==0&a>>>0>17895697))return Ae=14,I=fe,Ae|0;if((A|0)<0)return Ae=2,I=fe,Ae|0;if((a|0)==0&(A|0)==0)return n[u>>2]=0,n[u+4>>2]=0,Ae=0,I=fe,Ae|0;for(l=s,l=zo(n[l>>2]|0,n[l+4>>2]|0)|0,h=0,p=0;;){if(f=s+(h<<3)|0,Ae=f,!(ns(n[Ae>>2]|0,n[Ae+4>>2]|0)|0)){l=5,re=159;break}if(Ae=f,Ae=(zo(n[Ae>>2]|0,n[Ae+4>>2]|0)|0)==(l|0),h=de(h|0,p|0,1,0)|0,p=R()|0,!Ae){l=12,re=159;break}if(!((p|0)<(A|0)|(p|0)==(A|0)&h>>>0<a>>>0)){re=8;break}}if((re|0)==8){do if((A|0)>0|(A|0)==0&a>>>0>1){if(l=a<<3,h=at(l)|0,!h)return Ae=13,I=fe,Ae|0;for(mr(h|0,s|0,l|0)|0,as(h,a,8,1),l=1,f=0;Te=h+(l<<3)|0,Ae=h+(l+-1<<3)|0,Ae=(n[Te>>2]|0)==(n[Ae>>2]|0)?(n[Te+4>>2]|0)==(n[Ae+4>>2]|0):0,l=de(l|0,f|0,1,0)|0,f=R()|0,!Ae;)if(!((f|0)<(A|0)|(f|0)==(A|0)&l>>>0<a>>>0)){re=14;break}if((re|0)==14){ge(h);break}return ge(h),Ae=10,I=fe,Ae|0}while(!1);if(l=At(a|0,A|0,6,0)|0,f=R()|0,g){h=0,p=0;do Ae=s+(p<<3)|0,Ae=((Ye(n[Ae>>2]|0,n[Ae+4>>2]|0)|0)!=0)<<31>>31,l=de(l|0,f|0,Ae|0,((Ae|0)<0)<<31>>31|0)|0,f=R()|0,p=de(p|0,h|0,1,0)|0,h=R()|0;while((h|0)<(A|0)|(h|0)==(A|0)&p>>>0<a>>>0);V=l,H=f}else V=l,H=f;if(G=At(V|0,H|0,10,0)|0,L=R()|0,Te=at(V<<5)|0,!Te)return Ae=13,I=fe,Ae|0;if(Ae=Bt(G,4)|0,!Ae)return ge(Te),Ae=13,I=fe,Ae|0;e:do if(g){for(z=s,Vo(n[z>>2]|0,n[z+4>>2]|0,pe)|0,x=Te,C=0,k=0,l=0,D=0;;){g=pe,g=(n[g>>2]|0)==0&(n[g+4>>2]|0)==0,f=g?26990:26995,h=g?5:6,p=0,g=pe+((g&1)<<3)|0,b=de(h|0,p|0,-1,-1)|0,v=R()|0,S=0,E=0;do K=g+(S<<3)|0,ie=n[K+4>>2]|0,z=x+(S<<5)|0,n[z>>2]=n[K>>2],n[z+4>>2]=ie,ne[x+(S<<5)+9>>0]=0,ne[x+(S<<5)+8>>0]=0,n[x+(S<<5)+20>>2]=x,z=x+(S<<5)+24|0,n[z>>2]=1,n[z+4>>2]=0,z=ne[f+S>>0]|0,ie=de(b|0,v|0,S|0,E|0)|0,ie=Pr(ie|0,R()|0,h|0,p|0)|0,R()|0,ie=ne[f+ie>>0]|0,S=de(S|0,E|0,1,0)|0,E=R()|0,K=ne[f+((S|0)==(h|0)&(E|0)==(p|0)?0:S)>>0]|0,z=z&255,n[x+(z<<5)+16>>2]=x+((ie&255)<<5),n[x+(z<<5)+12>>2]=x+((K&255)<<5);while(E>>>0<p>>>0|(E|0)==(p|0)&S>>>0<h>>>0);if(C=de(C|0,k|0,1,0)|0,k=R()|0,l=de(h|0,p|0,l|0,D|0)|0,D=R()|0,!((k|0)<(A|0)|(k|0)==(A|0)&C>>>0<a>>>0))break e;z=s+(C<<3)|0,Vo(n[z>>2]|0,n[z+4>>2]|0,pe)|0||(x=Te+(l<<5)|0)}ke(27634,26956,108,26975)}while(!1);if((H|0)>0|(H|0)==0&V>>>0>0){p=0,g=0;do{if(f=Te+(p<<5)|0,h=n[f>>2]|0,f=n[f+4>>2]|0,l=oe(h|0,f|0,30)|0,f=At(l^h|0,(R()|0)^f|0,484763065,-1084733587)|0,h=R()|0,l=oe(f|0,h|0,27)|0,h=At(l^f|0,(R()|0)^h|0,321982955,-1798288965)|0,f=R()|0,l=oe(h|0,f|0,31)|0,f=Pr(l^h|0,(R()|0)^f|0,G|0,L|0)|0,h=R()|0,l=Ae+(f<<2)|0,n[l>>2]|0)do l=de(f|0,h|0,1,0)|0,f=qr(l|0,R()|0,G|0,L|0)|0,h=R()|0,l=Ae+(f<<2)|0;while((n[l>>2]|0)!=0);n[l>>2]=Te+(p<<5),p=de(p|0,g|0,1,0)|0,g=R()|0}while((g|0)<(H|0)|(g|0)==(H|0)&p>>>0<V>>>0);S=0,E=0;do{if(p=Te+(S<<5)|0,g=Te+(S<<5)+9|0,!(ne[g>>0]|0)){if(z=p,z0(n[z>>2]|0,n[z+4>>2]|0,pe)|0){re=39;break}v=pe,b=n[v>>2]|0,v=n[v+4>>2]|0,f=oe(b|0,v|0,30)|0,f=At(f^b|0,(R()|0)^v|0,484763065,-1084733587)|0,h=R()|0,l=oe(f|0,h|0,27)|0,h=At(l^f|0,(R()|0)^h|0,321982955,-1798288965)|0,f=R()|0,l=oe(h|0,f|0,31)|0,f=Pr(l^h|0,(R()|0)^f|0,G|0,L|0)|0,h=R()|0,l=n[Ae+(f<<2)>>2]|0;e:do if(l|0){for(;z=l,!((n[z>>2]|0)==(b|0)&&(n[z+4>>2]|0)==(v|0));)if(l=de(f|0,h|0,1,0)|0,f=qr(l|0,R()|0,G|0,L|0)|0,h=R()|0,l=n[Ae+(f<<2)>>2]|0,!l)break e;ne[g>>0]=1,ne[l+9>>0]=1,f=l+16|0,z=Te+(S<<5)+12|0,n[(n[z>>2]|0)+16>>2]=n[f>>2],A=l+12|0,K=n[Te+(S<<5)+16>>2]|0,n[K+12>>2]=n[A>>2],n[(n[A>>2]|0)+16>>2]=K,n[(n[f>>2]|0)+12>>2]=n[z>>2],f=rs(p)|0,z=rs(l)|0,l=f+24|0,A=n[l+4>>2]|0,K=z+24|0,ie=n[K+4>>2]|0,K=(A|0)<(ie|0)|((A|0)==(ie|0)?(n[l>>2]|0)>>>0<(n[K>>2]|0)>>>0:0),l=K?f:z,f=K?z:f,(f|0)!=(l|0)&&(ie=l+24|0,z=f+24|0,K=z,ie=de(n[K>>2]|0,n[K+4>>2]|0,n[ie>>2]|0,n[ie+4>>2]|0)|0,K=R()|0,n[z>>2]=ie,n[z+4>>2]=K,n[l+20>>2]=f)}while(!1)}S=de(S|0,E|0,1,0)|0,E=R()|0}while((E|0)<(H|0)|(E|0)==(H|0)&S>>>0<V>>>0);(re|0)==39&&ke(27634,26956,258,27001),l=0,f=0;do ne[Te+(l<<5)+8>>0]=0,l=de(l|0,f|0,1,0)|0,f=R()|0;while((f|0)<(H|0)|(f|0)==(H|0)&l>>>0<V>>>0);for(b=0,h=0,g=0,v=0;;){if(l=Te+(b<<5)|0,(ne[Te+(b<<5)+8>>0]|0)==0&&(ne[Te+(b<<5)+9>>0]|0)==0){p=l,f=n[p>>2]|0,p=n[p+4>>2]|0;do ne[l+8>>0]=1,l=n[l+12>>2]|0,z=l;while(!((n[z>>2]|0)==(f|0)&&(n[z+4>>2]|0)==(p|0)));h=de(h|0,g|0,1,0)|0,p=R()|0}else p=g;if(b=de(b|0,v|0,1,0)|0,v=R()|0,(v|0)<(H|0)|(v|0)==(H|0)&b>>>0<V>>>0)g=p;else break}l=0,f=0;do ne[Te+(l<<5)+8>>0]=0,l=de(l|0,f|0,1,0)|0,f=R()|0;while((f|0)<(H|0)|(f|0)==(H|0)&l>>>0<V>>>0);K=h,ie=p,l=1}else K=0,ie=0,l=0;z=at(K*24|0)|0;e:do if(z|0){t:do if(l){s=0,G=0,A=0,a=0;r:for(;;){if(l=Te+(s<<5)|0,(ne[Te+(s<<5)+8>>0]|0)==0&&(ne[Te+(s<<5)+9>>0]|0)==0){D=l,k=n[D>>2]|0,D=n[D+4>>2]|0,f=0,h=0;do f=de(f|0,h|0,2,0)|0,h=R()|0,l=n[l+12>>2]|0,L=l;while(!((n[L>>2]|0)==(k|0)&&(n[L+4>>2]|0)==(D|0)));if(C=at(f<<4)|0,!C)break;f=k,h=D,x=0,E=0,p=0,g=0;do{if(bi(f,h,ee)|0){re=69;break r}if(L=n[ee>>2]|0,v=L+-1|0,S=((v|0)<0)<<31>>31,(L|0)>1){h=p,b=0,f=g,p=0;do L=C+(h<<4)|0,g=ee+8+(b<<4)|0,n[L>>2]=n[g>>2],n[L+4>>2]=n[g+4>>2],n[L+8>>2]=n[g+8>>2],n[L+12>>2]=n[g+12>>2],h=de(h|0,f|0,1,0)|0,f=R()|0,b=de(b|0,p|0,1,0)|0,p=R()|0;while((p|0)<(S|0)|(p|0)==(S|0)&b>>>0<v>>>0);p=h,g=f}x=de(x|0,E|0,v|0,S|0)|0,E=R()|0,ne[l+8>>0]=1,l=n[l+12>>2]|0,h=l,f=n[h>>2]|0,h=n[h+4>>2]|0}while(!((f|0)==(k|0)&(h|0)==(D|0)));if(f=Ng(C,x<<4)|0,!f){re=75;break}D=rs(l)|0,L=n[D+4>>2]|0,l=z+(A*24|0)|0,n[l>>2]=n[D>>2],n[l+4>>2]=L,l=z+(A*24|0)+16|0,n[l>>2]=x,n[z+(A*24|0)+20>>2]=f,n[pe>>2]=n[l>>2],n[pe+4>>2]=n[l+4>>2],or(pe,z+(A*24|0)+8|0)|0,f=de(A|0,G|0,1,0)|0,l=R()|0}else f=A,l=G;if(s=de(s|0,a|0,1,0)|0,a=R()|0,(a|0)<(H|0)|(a|0)==(H|0)&s>>>0<V>>>0)G=l,A=f;else break t}if((re|0)==69?ke(27634,26956,351,27016):(re|0)==75&&ge(C),(G|0)>0|(G|0)==0&A>>>0>0)for(p=0,g=0,l=A,h=G;f=n[z+(p*24|0)+20>>2]|0,f?(ge(f),f=G,l=A):f=h,p=de(p|0,g|0,1,0)|0,g=R()|0,(g|0)<(f|0)|(g|0)==(f|0)&p>>>0<l>>>0;)h=f;ge(z);break e}while(!1);as(z,K,24,2);t:do if((K|0)==0&(ie|0)==0){if(L=at(192)|0,L|0){if(n[L+16>>2]=0,n[L+20>>2]=0,E=L+8|0,n[E>>2]=3,l=at(48)|0,x=L+12|0,n[x>>2]=l,l|0){n[l>>2]=n[3860],n[l+4>>2]=n[3861],n[l+8>>2]=n[3862],n[l+12>>2]=n[3863],S=l+16|0,n[S>>2]=n[3864],n[S+4>>2]=n[3865],n[S+8>>2]=n[3866],n[S+12>>2]=n[3867],S=l+32|0,n[S>>2]=n[3868],n[S+4>>2]=n[3869],n[S+8>>2]=n[3870],n[S+12>>2]=n[3871],n[pe>>2]=n[E>>2],n[pe+4>>2]=n[E+4>>2],or(pe,L)|0,n[L+40>>2]=0,n[L+44>>2]=0,S=L+32|0,n[S>>2]=3,l=at(48)|0,C=L+36|0,n[C>>2]=l;do if(!l)p=0,g=1;else{if(n[l>>2]=n[3872],n[l+4>>2]=n[3873],n[l+8>>2]=n[3874],n[l+12>>2]=n[3875],v=l+16|0,n[v>>2]=n[3876],n[v+4>>2]=n[3877],n[v+8>>2]=n[3878],n[v+12>>2]=n[3879],v=l+32|0,n[v>>2]=n[3880],n[v+4>>2]=n[3881],n[v+8>>2]=n[3882],n[v+12>>2]=n[3883],n[pe>>2]=n[S>>2],n[pe+4>>2]=n[S+4>>2],or(pe,L+24|0)|0,n[L+64>>2]=0,n[L+68>>2]=0,v=L+56|0,n[v>>2]=3,l=at(48)|0,k=L+60|0,n[k>>2]=l,!l){p=0,g=2;break}if(n[l>>2]=n[3884],n[l+4>>2]=n[3885],n[l+8>>2]=n[3886],n[l+12>>2]=n[3887],b=l+16|0,n[b>>2]=n[3888],n[b+4>>2]=n[3889],n[b+8>>2]=n[3890],n[b+12>>2]=n[3891],b=l+32|0,n[b>>2]=n[3892],n[b+4>>2]=n[3893],n[b+8>>2]=n[3894],n[b+12>>2]=n[3895],n[pe>>2]=n[v>>2],n[pe+4>>2]=n[v+4>>2],or(pe,L+48|0)|0,n[L+88>>2]=0,n[L+92>>2]=0,b=L+80|0,n[b>>2]=3,l=at(48)|0,D=L+84|0,n[D>>2]=l,!l){p=0,g=3;break}if(n[l>>2]=n[3896],n[l+4>>2]=n[3897],n[l+8>>2]=n[3898],n[l+12>>2]=n[3899],g=l+16|0,n[g>>2]=n[3900],n[g+4>>2]=n[3901],n[g+8>>2]=n[3902],n[g+12>>2]=n[3903],g=l+32|0,n[g>>2]=n[3904],n[g+4>>2]=n[3905],n[g+8>>2]=n[3906],n[g+12>>2]=n[3907],n[pe>>2]=n[b>>2],n[pe+4>>2]=n[b+4>>2],or(pe,L+72|0)|0,n[L+112>>2]=0,n[L+116>>2]=0,g=L+104|0,n[g>>2]=3,l=at(48)|0,s=L+108|0,n[s>>2]=l,!l){p=0,g=4;break}if(n[l>>2]=n[3908],n[l+4>>2]=n[3909],n[l+8>>2]=n[3910],n[l+12>>2]=n[3911],p=l+16|0,n[p>>2]=n[3912],n[p+4>>2]=n[3913],n[p+8>>2]=n[3914],n[p+12>>2]=n[3915],p=l+32|0,n[p>>2]=n[3916],n[p+4>>2]=n[3917],n[p+8>>2]=n[3918],n[p+12>>2]=n[3919],n[pe>>2]=n[g>>2],n[pe+4>>2]=n[g+4>>2],or(pe,L+96|0)|0,n[L+136>>2]=0,n[L+140>>2]=0,p=L+128|0,n[p>>2]=3,l=at(48)|0,a=L+132|0,n[a>>2]=l,!l){p=0,g=5;break}if(n[l>>2]=n[3920],n[l+4>>2]=n[3921],n[l+8>>2]=n[3922],n[l+12>>2]=n[3923],h=l+16|0,n[h>>2]=n[3924],n[h+4>>2]=n[3925],n[h+8>>2]=n[3926],n[h+12>>2]=n[3927],h=l+32|0,n[h>>2]=n[3928],n[h+4>>2]=n[3929],n[h+8>>2]=n[3930],n[h+12>>2]=n[3931],n[pe>>2]=n[p>>2],n[pe+4>>2]=n[p+4>>2],or(pe,L+120|0)|0,n[L+160>>2]=0,n[L+164>>2]=0,h=L+152|0,n[h>>2]=3,l=at(48)|0,A=L+156|0,n[A>>2]=l,!l){p=0,g=6;break}if(n[l>>2]=n[3932],n[l+4>>2]=n[3933],n[l+8>>2]=n[3934],n[l+12>>2]=n[3935],f=l+16|0,n[f>>2]=n[3936],n[f+4>>2]=n[3937],n[f+8>>2]=n[3938],n[f+12>>2]=n[3939],f=l+32|0,n[f>>2]=n[3940],n[f+4>>2]=n[3941],n[f+8>>2]=n[3942],n[f+12>>2]=n[3943],n[pe>>2]=n[h>>2],n[pe+4>>2]=n[h+4>>2],or(pe,L+144|0)|0,n[L+184>>2]=0,n[L+188>>2]=0,f=L+176|0,n[f>>2]=3,l=at(48)|0,G=L+180|0,n[G>>2]=l,!l){p=0,g=7;break}if(n[l>>2]=n[3944],n[l+4>>2]=n[3945],n[l+8>>2]=n[3946],n[l+12>>2]=n[3947],ee=l+16|0,n[ee>>2]=n[3948],n[ee+4>>2]=n[3949],n[ee+8>>2]=n[3950],n[ee+12>>2]=n[3951],l=l+32|0,n[l>>2]=n[3952],n[l+4>>2]=n[3953],n[l+8>>2]=n[3954],n[l+12>>2]=n[3955],n[pe>>2]=n[f>>2],n[pe+4>>2]=n[f+4>>2],or(pe,L+168|0)|0,as(L,8,24,3),l=at(128)|0,n[u+4>>2]=l,l|0){n[u>>2]=8,n[l>>2]=n[E>>2],n[l+4>>2]=n[E+4>>2],n[l+8>>2]=n[E+8>>2],n[l+12>>2]=n[E+12>>2],re=l+16|0,n[re>>2]=n[S>>2],n[re+4>>2]=n[S+4>>2],n[re+8>>2]=n[S+8>>2],n[re+12>>2]=n[S+12>>2],re=l+32|0,n[re>>2]=n[v>>2],n[re+4>>2]=n[v+4>>2],n[re+8>>2]=n[v+8>>2],n[re+12>>2]=n[v+12>>2],re=l+48|0,n[re>>2]=n[b>>2],n[re+4>>2]=n[b+4>>2],n[re+8>>2]=n[b+8>>2],n[re+12>>2]=n[b+12>>2],re=l+64|0,n[re>>2]=n[g>>2],n[re+4>>2]=n[g+4>>2],n[re+8>>2]=n[g+8>>2],n[re+12>>2]=n[g+12>>2],re=l+80|0,n[re>>2]=n[p>>2],n[re+4>>2]=n[p+4>>2],n[re+8>>2]=n[p+8>>2],n[re+12>>2]=n[p+12>>2],re=l+96|0,n[re>>2]=n[h>>2],n[re+4>>2]=n[h+4>>2],n[re+8>>2]=n[h+8>>2],n[re+12>>2]=n[h+12>>2],re=l+112|0,n[re>>2]=n[f>>2],n[re+4>>2]=n[f+4>>2],n[re+8>>2]=n[f+8>>2],n[re+12>>2]=n[f+12>>2],ge(L),re=158;break t}l=n[x>>2]|0,l|0&&ge(l),l=n[C>>2]|0,l|0&&ge(l),l=n[k>>2]|0,l|0&&ge(l),l=n[D>>2]|0,l|0&&ge(l),l=n[s>>2]|0,l|0&&ge(l),l=n[a>>2]|0,l|0&&ge(l),l=n[A>>2]|0,l|0&&ge(l),l=n[G>>2]|0,l|0&&ge(l),ge(L);break t}while(!1);l=0,h=0;do f=n[L+(l*24|0)+12>>2]|0,f|0&&ge(f),l=de(l|0,h|0,1,0)|0,h=R()|0;while(h>>>0<p>>>0|(h|0)==(p|0)&l>>>0<g>>>0)}ge(L),re=152}}else{if((ie|0)>0|(ie|0)==0&K>>>0>0){h=0,p=0,g=0,f=0,l=0,b=0;do ee=z+(h*24|0)|0,pe=p,p=n[ee>>2]|0,re=g,g=n[ee+4>>2]|0,f=de(f|0,l|0,((p|0)!=(pe|0)|(g|0)!=(re|0))&1|0,0)|0,l=R()|0,h=de(h|0,b|0,1,0)|0,b=R()|0;while((b|0)<(ie|0)|(b|0)==(ie|0)&h>>>0<K>>>0);D=f,k=l}else D=0,k=0;if(s=at(D*24|0)|0,s){r:do if((ie|0)>=0){for(E=0,x=0,f=0,h=0,C=0,p=0;;){if(!((E|0)==(K|0)&(x|0)==(ie|0))&&(pe=z+(f*24|0)|0,re=z+(E*24|0)|0,(n[pe>>2]|0)==(n[re>>2]|0)?(n[pe+4>>2]|0)==(n[re+4>>2]|0):0))l=C;else{if(v=z+(f*24|0)|0,re=yt(E|0,x|0,f|0,h|0)|0,pe=R()|0,S=de(re|0,pe|0,-1,-1)|0,h=R()|0,(pe|0)>0|(pe|0)==0&re>>>0>1){if(l=at(S<<3)|0,!l)break;g=0,b=0;do re=g,g=de(g|0,b|0,1,0)|0,b=R()|0,ee=v+(g*24|0)+16|0,pe=n[ee+4>>2]|0,re=l+(re<<3)|0,n[re>>2]=n[ee>>2],n[re+4>>2]=pe;while((b|0)<(h|0)|(b|0)==(h|0)&g>>>0<S>>>0)}else l=0;pe=z+(f*24|0)+16|0,re=n[pe+4>>2]|0,h=s+(p*24|0)+8|0,n[h>>2]=n[pe>>2],n[h+4>>2]=re,n[s+(p*24|0)+16>>2]=S,n[s+(p*24|0)+20>>2]=l,P[s+(p*24|0)>>3]=+P[z+(f*24|0)+8>>3],p=de(p|0,C|0,1,0)|0,f=E,h=x,l=R()|0}if(re=E,E=de(E|0,x|0,1,0)|0,pe=x,x=R()|0,(pe|0)<(ie|0)|(pe|0)==(ie|0)&re>>>0<K>>>0)C=l;else break r}if((C|0)>0|(C|0)==0&p>>>0>0){l=0,h=0;do f=n[s+(l*24|0)+20>>2]|0,f|0&&ge(f),l=de(l|0,h|0,1,0)|0,h=R()|0;while((h|0)<(C|0)|(h|0)==(C|0)&l>>>0<p>>>0)}ge(s),re=152;break t}while(!1);if(as(s,D,24,3),l=at(D<<4)|0,h=u+4|0,n[h>>2]=l,l){n[u>>2]=D;do if((k|0)>0|(k|0)==0&D>>>0>0){if(u=s+8|0,n[l>>2]=n[u>>2],n[l+4>>2]=n[u+4>>2],n[l+8>>2]=n[u+8>>2],n[l+12>>2]=n[u+12>>2],(D|0)==1&(k|0)==0||(u=l+16|0,re=s+32|0,n[u>>2]=n[re>>2],n[u+4>>2]=n[re+4>>2],n[u+8>>2]=n[re+8>>2],n[u+12>>2]=n[re+12>>2],!((k|0)>0|(k|0)==0&D>>>0>2)))break;l=2,f=0;do u=(n[h>>2]|0)+(l<<4)|0,re=s+(l*24|0)+8|0,n[u>>2]=n[re>>2],n[u+4>>2]=n[re+4>>2],n[u+8>>2]=n[re+8>>2],n[u+12>>2]=n[re+12>>2],l=de(l|0,f|0,1,0)|0,f=R()|0;while((f|0)<(k|0)|(f|0)==(k|0)&l>>>0<D>>>0)}while(!1);ge(s),re=158;break}else{if((k|0)>0|(k|0)==0&D>>>0>0){l=0,h=0;do f=n[s+(l*24|0)+20>>2]|0,f|0&&ge(f),l=de(l|0,h|0,1,0)|0,h=R()|0;while((h|0)<(k|0)|(h|0)==(k|0)&l>>>0<D>>>0)}ge(s),re=152;break}}else re=152}while(!1);if((re|0)==158)return ge(Te),ge(Ae),ge(z),Ae=0,I=fe,Ae|0;if((re|0)==152&&(ie|0)>0|(ie|0)==0&K>>>0>0)for(p=0,g=0,l=K,h=ie;f=n[z+(p*24|0)+20>>2]|0,f?(ge(f),f=ie,l=K):f=h,p=de(p|0,g|0,1,0)|0,g=R()|0,(g|0)<(f|0)|(g|0)==(f|0)&p>>>0<l>>>0;)h=f;return ge(z),ge(Te),ge(Ae),Ae=13,I=fe,Ae|0}while(!1);return ge(Te),ge(Ae),Ae=13,I=fe,Ae|0}else if((re|0)==159)return I=fe,l|0;return 0}function Nm(s,a){s=s|0,a=a|0;var A=0,u=0;return u=s,s=n[u>>2]|0,u=n[u+4>>2]|0,A=a,a=n[A>>2]|0,A=n[A+4>>2]|0,(u>>>0<A>>>0|(u|0)==(A|0)&s>>>0<a>>>0?-1:(u>>>0>A>>>0|(u|0)==(A|0)&s>>>0>a>>>0)&1)|0}function rs(s){s=s|0;var a=0,A=0;return a=s+20|0,A=n[a>>2]|0,(A|0)==(s|0)?s|0:(A=rs(A)|0,n[a>>2]=A,A|0)}function Pm(s,a){s=s|0,a=a|0;var A=0,u=0,l=0,f=0,h=0,p=0;return p=s,h=n[p>>2]|0,p=n[p+4>>2]|0,f=a,l=n[f>>2]|0,f=n[f+4>>2]|0,p>>>0<f>>>0|(p|0)==(f|0)&h>>>0<l>>>0?(a=-1,a|0):p>>>0>f>>>0|(p|0)==(f|0)&h>>>0>l>>>0?(a=1,a|0):(u=+P[s+8>>3],A=+P[a+8>>3],u<A?(a=-1,a|0):(a=u>A&1,a|0))}function Lm(s,a){s=s|0,a=a|0;var A=0,u=0;return u=+P[s>>3],A=+P[a>>3],(u>A?-1:u<A&1)|0}function km(s,a,A,u,l){s=s|0,a=a|0,A=A|0,u=u|0,l=l|0;var f=0,h=0,p=0,g=0,b=0,v=0,S=0;if(S=I,I=I+64|0,v=S,p=S+56|0,!(!0&(a&2013265920|0)==134217728&(!0&(u&2013265920|0)==134217728)))return l=5,I=S,l|0;if((s|0)==(A|0)&(a|0)==(u|0))return n[l>>2]=0,l=0,I=S,l|0;if(h=oe(s|0,a|0,52)|0,R()|0,h=h&15,b=oe(A|0,u|0,52)|0,R()|0,(h|0)!=(b&15|0))return l=12,I=S,l|0;if(f=h+-1|0,h>>>0>1){qo(s,a,f,v)|0,qo(A,u,f,p)|0,b=v,g=n[b>>2]|0,b=n[b+4>>2]|0;e:do if((g|0)==(n[p>>2]|0)&&(b|0)==(n[p+4>>2]|0)){h=(h^15)*3|0,f=oe(s|0,a|0,h|0)|0,R()|0,f=f&7,h=oe(A|0,u|0,h|0)|0,R()|0,h=h&7;do if((f|0)==0|(h|0)==0)n[l>>2]=1,f=0;else if((f|0)==7)f=5;else{if((f|0)==1|(h|0)==1&&Ye(g,b)|0){f=5;break}if((n[15824+(f<<2)>>2]|0)!=(h|0)&&(n[15856+(f<<2)>>2]|0)!=(h|0))break e;n[l>>2]=1,f=0}while(!1);return l=f,I=S,l|0}while(!1)}f=v,h=f+56|0;do n[f>>2]=0,f=f+4|0;while((f|0)<(h|0));return N0(s,a,1,v)|0,a=v,!((n[a>>2]|0)==(A|0)&&(n[a+4>>2]|0)==(u|0))&&(a=v+8|0,!((n[a>>2]|0)==(A|0)&&(n[a+4>>2]|0)==(u|0)))&&(a=v+16|0,!((n[a>>2]|0)==(A|0)&&(n[a+4>>2]|0)==(u|0)))&&(a=v+24|0,!((n[a>>2]|0)==(A|0)&&(n[a+4>>2]|0)==(u|0)))&&(a=v+32|0,!((n[a>>2]|0)==(A|0)&&(n[a+4>>2]|0)==(u|0)))&&(a=v+40|0,!((n[a>>2]|0)==(A|0)&&(n[a+4>>2]|0)==(u|0)))?(f=v+48|0,f=((n[f>>2]|0)==(A|0)?(n[f+4>>2]|0)==(u|0):0)&1):f=1,n[l>>2]=f,l=0,I=S,l|0}function Om(s,a,A,u,l){return s=s|0,a=a|0,A=A|0,u=u|0,l=l|0,A=ts(s,a,A,u)|0,(A|0)==7?(l=11,l|0):(u=le(A|0,0,56)|0,a=a&-2130706433|(R()|0)|268435456,n[l>>2]=s|u,n[l+4>>2]=a,l=0,l|0)}function Fm(s,a,A){return s=s|0,a=a|0,A=A|0,!0&(a&2013265920|0)==268435456?(n[A>>2]=s,n[A+4>>2]=a&-2130706433|134217728,A=0,A|0):(A=6,A|0)}function Bm(s,a,A){s=s|0,a=a|0,A=A|0;var u=0,l=0,f=0;return l=I,I=I+16|0,u=l,n[u>>2]=0,!0&(a&2013265920|0)==268435456?(f=oe(s|0,a|0,56)|0,R()|0,u=vt(s,a&-2130706433|134217728,f&7,u,A)|0,I=l,u|0):(u=6,I=l,u|0)}function G0(s,a){s=s|0,a=a|0;var A=0;switch(A=oe(s|0,a|0,56)|0,R()|0,A&7){case 0:case 7:return A=0,A|0}return A=a&-2130706433|134217728,!(!0&(a&2013265920|0)==268435456)||!0&(a&117440512|0)==16777216&(Ye(s,A)|0)!=0?(A=0,A|0):(A=ns(s,A)|0,A|0)}function Dm(s,a,A){s=s|0,a=a|0,A=A|0;var u=0,l=0,f=0,h=0;return l=I,I=I+16|0,u=l,!0&(a&2013265920|0)==268435456?(f=a&-2130706433|134217728,h=A,n[h>>2]=s,n[h+4>>2]=f,n[u>>2]=0,a=oe(s|0,a|0,56)|0,R()|0,u=vt(s,f,a&7,u,A+8|0)|0,I=l,u|0):(u=6,I=l,u|0)}function Vo(s,a,A){s=s|0,a=a|0,A=A|0;var u=0,l=0;return l=(Ye(s,a)|0)==0,a=a&-2130706433,u=A,n[u>>2]=l?s:0,n[u+4>>2]=l?a|285212672:0,u=A+8|0,n[u>>2]=s,n[u+4>>2]=a|301989888,u=A+16|0,n[u>>2]=s,n[u+4>>2]=a|318767104,u=A+24|0,n[u>>2]=s,n[u+4>>2]=a|335544320,u=A+32|0,n[u>>2]=s,n[u+4>>2]=a|352321536,A=A+40|0,n[A>>2]=s,n[A+4>>2]=a|369098752,0}function bi(s,a,A){s=s|0,a=a|0,A=A|0;var u=0,l=0,f=0,h=0;return h=I,I=I+16|0,l=h,f=a&-2130706433|134217728,!0&(a&2013265920|0)==268435456?(u=oe(s|0,a|0,56)|0,R()|0,u=Mg(s,f,u&7)|0,(u|0)==-1?(n[A>>2]=0,f=6,I=h,f|0):(On(s,f,l)|0&&ke(27634,27035,282,27050),a=oe(s|0,a|0,52)|0,R()|0,a=a&15,Ye(s,f)|0?jo(l,a,u,2,A):Go(l,a,u,2,A),f=0,I=h,f|0)):(f=6,I=h,f|0)}function z0(s,a,A){s=s|0,a=a|0,A=A|0;var u=0,l=0,f=0,h=0;return h=I,I=I+16|0,u=h+8|0,l=h,f=a&-2130706433|134217728,!0&(a&2013265920|0)==268435456?(n[u>>2]=0,a=oe(s|0,a|0,56)|0,R()|0,a=vt(s,f,a&7,u,l)|0,a|0?(A=a,I=h,A|0):(u=n[l>>2]|0,l=n[l+4>>2]|0,a=ts(u,l,s,f)|0,(a|0)==7?(A=11,I=h,A|0):(s=le(a|0,0,56)|0,f=l&-2130706433|(R()|0)|268435456,n[A>>2]=u|s,n[A+4>>2]=f,A=0,I=h,A|0))):(A=6,I=h,A|0)}function Um(s,a,A){s=s|0,a=a|0,A=A|0;var u=0,l=0,f=0,h=0,p=0,g=0,b=0,v=0,S=0,E=0,x=0,C=0,k=0,D=0,G=0,L=0,H=0,V=0,ee=0;n[A>>2]=0,b=+P[s>>3],v=+P[s+8>>3],g=+P[s+16>>3],l=0,f=5,u=5,s=0;do k=+P[15888+(l*24|0)>>3]-b,C=+P[15888+(l*24|0)+8>>3]-v,h=+P[15888+(l*24|0)+16>>3]-g,h=k*k+C*C+h*h,h<u&&(n[A>>2]=l,f=h,s=l,u=h),l=l+1|0;while((l|0)!=20);if(f=+jr(+(1-f*.5)),f<1e-16)g=0,h=0;else{if(V=+P[16368+(s*24|0)>>3],L=+P[15888+(s*24|0)>>3],H=+P[15888+(s*24|0)+8>>3],G=+P[15888+(s*24|0)+16>>3],ee=-(G+(L*0+H*0)),h=L*ee+0,k=H*ee+0,ee=G*ee+1,D=+Qe(+(ee*ee+(h*h+k*k))),D=D>0?1/D:0,h=h*D,k=k*D,D=ee*D,ee=-(b*L+v*H+g*G),C=b+L*ee,u=v+H*ee,b=g+G*ee,v=+Qe(+(b*b+(C*C+u*u))),v=v>0?1/v:0,C=C*v,u=u*v,v=b*v,u=+vi(V-+vi(+Ft(+(v*(H*h-L*k)+(C*(G*k-H*D)+u*(L*D-G*h))),+(D*v+(h*C+k*u))))),ar(a)|0?h=+vi(u+-.3334731722518321):h=u,u=+zt(+f)*2.618033988749896,(a|0)>0){s=0;do u=u*2.6457513110645907,s=s+1|0;while((s|0)!=(a|0))}g=+tt(+h)*u,h=+nt(+h)*u}a=A+4|0,x=A+12|0,n[x>>2]=0,f=+et(+h)*1.1547005383792515,u=+et(+g)+f*.5,s=~~u,l=~~f,u=u-+(s|0),f=f-+(l|0);do if(u<.5)if(u<.3333333333333333)if(n[a>>2]=s,f<(u+1)*.5){n[A+8>>2]=l;break}else{l=l+1|0,n[A+8>>2]=l;break}else if(ee=1-u,l=(!(f<ee)&1)+l|0,n[A+8>>2]=l,ee<=f&f<u*2){s=s+1|0,n[a>>2]=s;break}else{n[a>>2]=s;break}else{if(!(u<.6666666666666666))if(s=s+1|0,n[a>>2]=s,f<u*.5){n[A+8>>2]=l;break}else{l=l+1|0,n[A+8>>2]=l;break}if(f<1-u){if(n[A+8>>2]=l,u*2+-1<f){n[a>>2]=s;break}}else l=l+1|0,n[A+8>>2]=l;s=s+1|0,n[a>>2]=s}while(!1);do if(g<0)if(l&1){E=(l+1|0)/2|0,E=yt(s|0,((s|0)<0)<<31>>31|0,E|0,((E|0)<0)<<31>>31|0)|0,s=~~(+(s|0)-((+(E>>>0)+4294967296*+(R()|0))*2+1)),n[a>>2]=s,E=a;break}else{E=(l|0)/2|0,E=yt(s|0,((s|0)<0)<<31>>31|0,E|0,((E|0)<0)<<31>>31|0)|0,s=~~(+(s|0)-(+(E>>>0)+4294967296*+(R()|0))*2),n[a>>2]=s,E=a;break}else E=a;while(!1);S=A+8|0,a=0-l|0,h<0?(A=s-((l<<1|1|0)/2|0)|0,n[E>>2]=A,n[S>>2]=a,l=a):A=s,s=l-A|0,a=0-A|0,(A|0)<0?(n[S>>2]=s,n[x>>2]=a,n[E>>2]=0,p=0):(s=l,p=A,a=0),A=p-s|0,l=a-s|0,(s|0)<0?(n[E>>2]=A,n[x>>2]=l,n[S>>2]=0,p=A,s=0):l=a,A=p-l|0,a=s-l|0,(l|0)<0?(n[E>>2]=A,n[S>>2]=a,n[x>>2]=0,l=0):(a=s,A=p),s=(a|0)<(A|0)?a:A,s=(l|0)<(s|0)?l:s,!((s|0)<=0)&&(n[E>>2]=A-s,n[S>>2]=a-s,n[x>>2]=l-s)}function Vm(s,a,A){s=s|0,a=a|0,A=A|0;var u=0,l=0,f=0,h=0;u=I,I=I+16|0,l=u,h=n[s+12>>2]|0,f=+((n[s+8>>2]|0)-h|0),P[l>>3]=+((n[s+4>>2]|0)-h|0)-f*.5,P[l+8>>3]=f*.8660254037844386,_i(l,n[s>>2]|0,a,0,A),I=u}function _i(s,a,A,u,l){s=s|0,a=a|0,A=A|0,u=u|0,l=l|0;var f=0,h=0,p=0,g=0,b=0,v=0,S=0,E=0,x=0,C=0,k=0,D=0;if(f=+Cg(s),f<1e-16){a=15888+(a*24|0)|0,n[l>>2]=n[a>>2],n[l+4>>2]=n[a+4>>2],n[l+8>>2]=n[a+8>>2],n[l+12>>2]=n[a+12>>2],n[l+16>>2]=n[a+16>>2],n[l+20>>2]=n[a+20>>2];return}if(h=+Ft(+ +P[s+8>>3],+ +P[s>>3]),(A|0)>0){s=0;do f=f*.37796447300922725,s=s+1|0;while((s|0)!=(A|0))}p=f*.3333333333333333,u?(A=(ar(A)|0)==0,f=+I0(+((A?p:p*.37796447300922725)*.381966011250105))):(f=+I0(+(f*.381966011250105)),ar(A)|0&&(h=+vi(h+.3334731722518321))),S=+vi(+P[16368+(a*24|0)>>3]-h),p=+P[15888+(a*24|0)>>3],v=+P[15888+(a*24|0)+8>>3],k=+P[15888+(a*24|0)+16>>3],x=-(k+(p*0+v*0)),b=p*x+0,h=v*x+0,x=k*x+1,E=+Qe(+(x*x+(b*b+h*h))),E=E>0?1/E:0,b=b*E,h=h*E,E=x*E,x=+tt(+S),S=+nt(+S),D=+tt(+f),C=+nt(+f),g=D*p+C*(x*b+S*(k*h-v*E)),f=D*v+C*(x*h+S*(p*E-k*b)),h=D*k+C*(x*E+S*(v*b-p*h)),p=+Qe(+(h*h+(g*g+f*f))),p=p>0?1/p:0,P[l>>3]=g*p,P[l+8>>3]=f*p,P[l+16>>3]=h*p}function jo(s,a,A,u,l){s=s|0,a=a|0,A=A|0,u=u|0,l=l|0;var f=0,h=0,p=0,g=0,b=0,v=0,S=0,E=0,x=0,C=0,k=0,D=0,G=0,L=0,H=0,V=0,ee=0,ie=0,K=0,z=0,pe=0,re=0,Te=0,Ae=0,fe=0,Oe=0,De=0,Rt=0,Ne=0,Ue=0,Dt=0,gt=0,ut=0,bt=0,ft=0,Qt=0,xt=0,Ct=0,cr=0,Nt=0,We=0,un=0;if(Qt=I,I=I+256|0,f=Qt+240|0,Oe=Qt+224|0,ut=Qt,bt=Qt+208|0,ft=Qt+192|0,De=Qt+168|0,Rt=Qt+152|0,Ne=Qt+136|0,Ue=Qt+120|0,Dt=Qt+104|0,gt=Qt+80|0,n[f>>2]=a,n[Oe>>2]=n[s>>2],n[Oe+4>>2]=n[s+4>>2],n[Oe+8>>2]=n[s+8>>2],n[Oe+12>>2]=n[s+12>>2],H0(Oe,f,ut),n[l>>2]=0,Oe=u+A+((u|0)==5&1)|0,(Oe|0)<=(A|0)){I=Qt;return}V=n[f>>2]|0,H=bt+4|0,G=bt+8|0,L=bt+12|0,ee=ft+8|0,ie=A+5|0,K=16848+(V<<2)|0,z=De+8|0,pe=16928+(V<<2)|0,re=Rt+8|0,Te=Ne+8|0,Ae=Ue+8|0,fe=ft+8|0,x=De+8|0,k=De+16|0,C=gt+8|0,D=gt+16|0,E=A,u=0,h=0,p=0,g=0;e:for(;;){S=ut+(((E|0)%5|0)<<4)|0,n[bt>>2]=n[S>>2],n[bt+4>>2]=n[S+4>>2],n[bt+8>>2]=n[S+8>>2],n[bt+12>>2]=n[S+12>>2];do;while((kn(bt,V,0,1)|0)==2);if((E|0)>(A|0)&(ar(a)|0)!=0){if(S=n[bt>>2]|0,s=n[H>>2]|0,b=n[G>>2]|0,f=n[L>>2]|0,xt=+(p-g|0),P[ft>>3]=+(h-g|0)-xt*.5,P[ee>>3]=xt*.8660254037844386,g=n[17008+(S*80|0)+(u<<2)>>2]|0,v=n[18608+(S*80|0)+(g*20|0)>>2]|0,p=n[18608+(S*80|0)+(g*20|0)+16>>2]|0,(p|0)>0){h=0,u=b;do Nt=f+s|0,We=(Nt|0)<0,b=u+s-(We?Nt:0)|0,cr=(b|0)<0,Ct=f+u-(We?Nt:0)-(cr?b:0)|0,f=(Ct|0)<0,s=(We?0:Nt)-(cr?b:0)-(f?Ct:0)|0,u=(cr?0:b)-(f?Ct:0)|0,Ct=f?0:Ct,f=(u|0)<(s|0)?u:s,f=(Ct|0)<(f|0)?Ct:f,b=(f|0)>0,s=s-(b?f:0)|0,u=u-(b?f:0)|0,f=Ct-(b?f:0)|0,h=h+1|0;while((h|0)<(p|0))}else u=b;switch(We=(n[K>>2]|0)*3|0,Ct=(Ht(We,n[18608+(S*80|0)+(g*20|0)+4>>2]|0)|0)+s|0,b=(Ht(We,n[18608+(S*80|0)+(g*20|0)+8>>2]|0)|0)+u|0,We=(Ht(We,n[18608+(S*80|0)+(g*20|0)+12>>2]|0)|0)+f|0,g=(Ct|0)<0,b=b-(g?Ct:0)|0,cr=(b|0)<0,We=We+(g?0-Ct|0:0)+(cr?0-b|0:0)|0,Nt=(We|0)<0,Ct=(g?0:Ct)-(cr?b:0)-(Nt?We:0)|0,b=(cr?0:b)-(Nt?We:0)|0,We=Nt?0:We,Nt=(b|0)<(Ct|0)?b:Ct,Nt=(We|0)<(Nt|0)?We:Nt,cr=(Nt|0)>0,We=We-(cr?Nt:0)|0,xt=+(b-(cr?Nt:0)-We|0),P[De>>3]=+(Ct-(cr?Nt:0)-We|0)-xt*.5,P[z>>3]=xt*.8660254037844386,xt=+(n[pe>>2]|0),P[Rt>>3]=xt*3,P[re>>3]=0,un=xt*-1.5,P[Ne>>3]=un,P[Te>>3]=xt*2.598076211353316,P[Ue>>3]=un,P[Ae>>3]=xt*-2.598076211353316,n[17008+(v*80|0)+(S<<2)>>2]|0){case 1:{s=Ne,u=Rt;break}case 3:{s=Ue,u=Ne;break}case 2:{s=Rt,u=Ue;break}default:{s=12;break e}}ic(ft,De,u,s,Dt),_i(Dt,v,V,1,gt),We=n[l>>2]|0,xt=+Gr(+ +P[D>>3]),un=+Ft(+ +P[C>>3],+ +P[gt>>3]),P[l+8+(We<<4)>>3]=xt,P[l+8+(We<<4)+8>>3]=un,n[l>>2]=(n[l>>2]|0)+1}if((E|0)<(ie|0)&&(We=n[L>>2]|0,xt=+((n[G>>2]|0)-We|0),P[ft>>3]=+((n[H>>2]|0)-We|0)-xt*.5,P[fe>>3]=xt*.8660254037844386,_i(ft,n[bt>>2]|0,V,1,De),We=n[l>>2]|0,xt=+Gr(+ +P[k>>3]),un=+Ft(+ +P[x>>3],+ +P[De>>3]),P[l+8+(We<<4)>>3]=xt,P[l+8+(We<<4)+8>>3]=un,n[l>>2]=(n[l>>2]|0)+1),E=E+1|0,(E|0)>=(Oe|0)){s=3;break}else u=n[bt>>2]|0,h=n[H>>2]|0,p=n[G>>2]|0,g=n[L>>2]|0}if((s|0)==3){I=Qt;return}else(s|0)==12&&ke(27073,27120,599,27130)}function H0(s,a,A){s=s|0,a=a|0,A=A|0;var u=0,l=0,f=0,h=0,p=0,g=0,b=0,v=0,S=0,E=0,x=0,C=0;C=I,I=I+128|0,u=C+64|0,l=C,f=u,h=20208,p=f+60|0;do n[f>>2]=n[h>>2],f=f+4|0,h=h+4|0;while((f|0)<(p|0));f=l,h=20272,p=f+60|0;do n[f>>2]=n[h>>2],f=f+4|0,h=h+4|0;while((f|0)<(p|0));if(v=(ar(n[a>>2]|0)|0)==0,v=v?u:l,x=s+4|0,f=n[x>>2]|0,S=s+8|0,u=n[S>>2]|0,E=s+12|0,l=n[E>>2]|0,h=u+(f<<1)|0,n[x>>2]=h,u=l+(u<<1)|0,n[S>>2]=u,f=(l<<1)+f|0,n[E>>2]=f,l=u-h|0,p=f-h|0,(h|0)<0&&(n[S>>2]=l,n[E>>2]=p,n[x>>2]=0,u=l,h=0,f=p),p=h-u|0,l=f-u|0,(u|0)<0?(n[x>>2]=p,n[E>>2]=l,n[S>>2]=0,u=0):(l=f,p=h),h=p-l|0,f=u-l|0,(l|0)<0?(n[x>>2]=h,n[S>>2]=f,n[E>>2]=0,l=0):(f=u,h=p),u=(f|0)<(h|0)?f:h,u=(l|0)<(u|0)?l:u,(u|0)>0&&(l=l-u|0,f=f-u|0,h=h-u|0,n[x>>2]=h,n[S>>2]=f,n[E>>2]=l),g=(f<<1)+h|0,p=l+(h<<1)|0,n[x>>2]=p,n[S>>2]=g,f=(l<<1)+f|0,n[E>>2]=f,u=g-p|0,l=f-p|0,(p|0)<0?(n[S>>2]=u,n[E>>2]=l,n[x>>2]=0,p=0,f=l):u=g,h=p-u|0,l=f-u|0,(u|0)<0?(n[x>>2]=h,n[E>>2]=l,n[S>>2]=0,p=h,u=0):l=f,h=p-l|0,f=u-l|0,(l|0)<0?(n[x>>2]=h,n[S>>2]=f,n[E>>2]=0,l=0):(f=u,h=p),u=(f|0)<(h|0)?f:h,u=(l|0)<(u|0)?l:u,(u|0)>0&&(n[x>>2]=h-u,n[S>>2]=f-u,n[E>>2]=l-u),ar(n[a>>2]|0)|0&&(f=n[x>>2]|0,h=n[S>>2]|0,l=n[E>>2]|0,u=(h*3|0)+f|0,f=l+(f*3|0)|0,n[x>>2]=f,n[S>>2]=u,h=(l*3|0)+h|0,n[E>>2]=h,l=u-f|0,p=h-f|0,(f|0)<0?(n[S>>2]=l,n[E>>2]=p,n[x>>2]=0,u=l,g=0):(g=f,p=h),f=g-u|0,l=p-u|0,(u|0)<0?(n[x>>2]=f,n[E>>2]=l,n[S>>2]=0,g=f,h=0):(h=u,l=p),f=g-l|0,u=h-l|0,(l|0)<0?(n[x>>2]=f,n[S>>2]=u,n[E>>2]=0,h=u,l=0):f=g,u=(h|0)<(f|0)?h:f,u=(l|0)<(u|0)?l:u,(u|0)>0&&(n[x>>2]=f-u,n[S>>2]=h-u,n[E>>2]=l-u),n[a>>2]=(n[a>>2]|0)+1),n[A>>2]=n[s>>2],l=n[S>>2]|0,u=n[E>>2]|0,a=n[v+4>>2]|0,b=n[v+8>>2]|0,h=(n[v>>2]|0)+(n[x>>2]|0)|0,g=A+4|0,n[g>>2]=h,l=a+l|0,a=A+8|0,n[a>>2]=l,u=b+u|0,b=A+12|0,n[b>>2]=u,f=l-h|0,(h|0)<0&&(u=u-h|0,n[a>>2]=f,n[b>>2]=u,n[g>>2]=0,l=f,h=0),(l|0)<0&&(h=h-l|0,n[g>>2]=h,u=u-l|0,n[b>>2]=u,n[a>>2]=0,l=0),p=h-u|0,f=l-u|0,(u|0)<0?(n[g>>2]=p,n[a>>2]=f,n[b>>2]=0,h=p,u=0):f=l,l=(f|0)<(h|0)?f:h,l=(u|0)<(l|0)?u:l,(l|0)>0&&(n[g>>2]=h-l,n[a>>2]=f-l,n[b>>2]=u-l),n[A+16>>2]=n[s>>2],l=n[S>>2]|0,u=n[E>>2]|0,a=n[v+16>>2]|0,b=n[v+20>>2]|0,h=(n[v+12>>2]|0)+(n[x>>2]|0)|0,g=A+20|0,n[g>>2]=h,l=a+l|0,a=A+24|0,n[a>>2]=l,u=b+u|0,b=A+28|0,n[b>>2]=u,f=l-h|0,(h|0)<0&&(u=u-h|0,n[a>>2]=f,n[b>>2]=u,n[g>>2]=0,l=f,h=0),(l|0)<0&&(h=h-l|0,n[g>>2]=h,u=u-l|0,n[b>>2]=u,n[a>>2]=0,l=0),p=h-u|0,f=l-u|0,(u|0)<0?(n[g>>2]=p,n[a>>2]=f,n[b>>2]=0,h=p,u=0):f=l,l=(f|0)<(h|0)?f:h,l=(u|0)<(l|0)?u:l,(l|0)>0&&(n[g>>2]=h-l,n[a>>2]=f-l,n[b>>2]=u-l),n[A+32>>2]=n[s>>2],l=n[S>>2]|0,u=n[E>>2]|0,a=n[v+28>>2]|0,b=n[v+32>>2]|0,h=(n[v+24>>2]|0)+(n[x>>2]|0)|0,g=A+36|0,n[g>>2]=h,l=a+l|0,a=A+40|0,n[a>>2]=l,u=b+u|0,b=A+44|0,n[b>>2]=u,f=l-h|0,(h|0)<0&&(u=u-h|0,n[a>>2]=f,n[b>>2]=u,n[g>>2]=0,l=f,h=0),(l|0)<0&&(h=h-l|0,n[g>>2]=h,u=u-l|0,n[b>>2]=u,n[a>>2]=0,l=0),p=h-u|0,f=l-u|0,(u|0)<0?(n[g>>2]=p,n[a>>2]=f,n[b>>2]=0,h=p,u=0):f=l,l=(f|0)<(h|0)?f:h,l=(u|0)<(l|0)?u:l,(l|0)>0&&(n[g>>2]=h-l,n[a>>2]=f-l,n[b>>2]=u-l),n[A+48>>2]=n[s>>2],l=n[S>>2]|0,u=n[E>>2]|0,a=n[v+40>>2]|0,b=n[v+44>>2]|0,h=(n[v+36>>2]|0)+(n[x>>2]|0)|0,g=A+52|0,n[g>>2]=h,l=a+l|0,a=A+56|0,n[a>>2]=l,u=b+u|0,b=A+60|0,n[b>>2]=u,f=l-h|0,(h|0)<0&&(u=u-h|0,n[a>>2]=f,n[b>>2]=u,n[g>>2]=0,l=f,h=0),(l|0)<0&&(h=h-l|0,n[g>>2]=h,u=u-l|0,n[b>>2]=u,n[a>>2]=0,l=0),p=h-u|0,f=l-u|0,(u|0)<0?(n[g>>2]=p,n[a>>2]=f,n[b>>2]=0,h=p,u=0):f=l,l=(f|0)<(h|0)?f:h,l=(u|0)<(l|0)?u:l,(l|0)>0&&(n[g>>2]=h-l,n[a>>2]=f-l,n[b>>2]=u-l),n[A+64>>2]=n[s>>2],f=n[S>>2]|0,u=n[E>>2]|0,b=n[v+52>>2]|0,g=n[v+56>>2]|0,h=(n[v+48>>2]|0)+(n[x>>2]|0)|0,a=A+68|0,n[a>>2]=h,f=b+f|0,b=A+72|0,n[b>>2]=f,u=g+u|0,g=A+76|0,n[g>>2]=u,l=f-h|0,(h|0)<0?(u=u-h|0,n[b>>2]=l,n[g>>2]=u,n[a>>2]=0,f=0):(l=f,f=h),(l|0)<0&&(f=f-l|0,n[a>>2]=f,u=u-l|0,n[g>>2]=u,n[b>>2]=0,l=0),p=f-u|0,h=l-u|0,(u|0)<0?(n[a>>2]=p,n[b>>2]=h,n[g>>2]=0,f=p,u=0):h=l,l=(h|0)<(f|0)?h:f,l=(u|0)<(l|0)?u:l,(l|0)<=0){I=C;return}n[a>>2]=f-l,n[b>>2]=h-l,n[g>>2]=u-l,I=C}function kn(s,a,A,u){s=s|0,a=a|0,A=A|0,u=u|0;var l=0,f=0,h=0,p=0,g=0,b=0,v=0,S=0,E=0,x=0,C=0,k=0,D=0,G=0;if(E=n[16928+(a<<2)>>2]|0,S=(u|0)!=0,E=S?E*3|0:E,v=s+4|0,p=n[v>>2]|0,b=s+8|0,f=n[b>>2]|0,S){if(h=s+12|0,u=n[h>>2]|0,l=f+p+u|0,(l|0)==(E|0))return E=1,E|0;g=h}else g=s+12|0,l=n[g>>2]|0,u=l,l=f+p+l|0;if((l|0)<=(E|0))return E=0,E|0;do if((u|0)>0){if(l=n[s>>2]|0,(f|0)>0){l=18608+(l*80|0)+60|0,h=p;break}l=18608+(l*80|0)+40|0,A?(h=p-E|0,A=f+h|0,x=(A|0)<0,f=u+f-(x?A:0)|0,p=(f|0)<0,u=u+h-(x?A:0)-(p?f:0)|0,h=(u|0)<0,A=(x?0:A)-(p?f:0)-(h?u:0)|0,f=(p?0:f)-(h?u:0)|0,u=h?0:u,h=(f|0)<(A|0)?f:A,h=(u|0)<(h|0)?u:h,p=(h|0)>0,f=f-(p?h:0)|0,u=u-(p?h:0)|0,h=A-(p?h:0)+E|0,n[v>>2]=h,n[b>>2]=f,n[g>>2]=u):h=p}else l=18608+((n[s>>2]|0)*80|0)+20|0,h=p;while(!1);if(n[s>>2]=n[l>>2],p=n[l+16>>2]|0,(p|0)>0){A=0;do x=u+h|0,C=(x|0)<0,G=C?x:0,k=f+h-G|0,D=(k|0)<0,s=D?k:0,h=u+f-G-s|0,f=(h|0)<0,u=f?0:h,h=f?h:0,f=(D?0:k)-h|0,h=(C?0:x)-s-h|0,s=(f|0)<(h|0)?f:h,s=(u|0)<(s|0)?u:s,(s|0)>0&&(h=h-s|0,f=f-s|0,u=u-s|0),A=A+1|0;while((A|0)<(p|0));n[v>>2]=h,n[b>>2]=f,n[g>>2]=u}return k=n[16848+(a<<2)>>2]|0,k=S?k*3|0:k,D=Ht(k,n[l+8>>2]|0)|0,G=Ht(k,n[l+12>>2]|0)|0,h=(Ht(k,n[l+4>>2]|0)|0)+h|0,n[v>>2]=h,f=D+f|0,n[b>>2]=f,u=G+u|0,n[g>>2]=u,l=f-h|0,(h|0)<0?(u=u-h|0,n[b>>2]=l,n[g>>2]=u,n[v>>2]=0,f=0):(l=f,f=h),(l|0)<0?(s=f-l|0,n[v>>2]=s,u=u-l|0,n[g>>2]=u,n[b>>2]=0,h=0):(s=f,h=l),f=s-u|0,l=h-u|0,(u|0)<0?(n[v>>2]=f,n[b>>2]=l,n[g>>2]=0,u=0):(l=h,f=s),h=(l|0)<(f|0)?l:f,h=(u|0)<(h|0)?u:h,(h|0)>0&&(f=f-h|0,l=l-h|0,u=u-h|0,n[v>>2]=f,n[b>>2]=l,n[g>>2]=u),S?(G=(l+f+u|0)==(E|0)?1:2,G|0):(G=2,G|0)}function jm(s,a){s=s|0,a=a|0;var A=0;do A=kn(s,a,0,1)|0;while((A|0)==2);return A|0}function Go(s,a,A,u,l){s=s|0,a=a|0,A=A|0,u=u|0,l=l|0;var f=0,h=0,p=0,g=0,b=0,v=0,S=0,E=0,x=0,C=0,k=0,D=0,G=0,L=0,H=0,V=0,ee=0,ie=0,K=0,z=0,pe=0,re=0,Te=0,Ae=0,fe=0,Oe=0,De=0,Rt=0,Ne=0,Ue=0,Dt=0,gt=0,ut=0,bt=0,ft=0;if(gt=I,I=I+272|0,f=gt+256|0,h=gt+240|0,Ne=gt,Ue=gt+224|0,Dt=gt+208|0,re=gt+184|0,Te=gt+168|0,Ae=gt+152|0,fe=gt+136|0,Oe=gt+120|0,De=gt+96|0,n[f>>2]=a,n[h>>2]=n[s>>2],n[h+4>>2]=n[s+4>>2],n[h+8>>2]=n[s+8>>2],n[h+12>>2]=n[s+12>>2],q0(h,f,Ne),n[l>>2]=0,pe=u+A+((u|0)==6&1)|0,(pe|0)<=(A|0)){I=gt;return}G=n[f>>2]|0,L=A+6|0,H=Dt+8|0,V=re+8|0,ee=16928+(G<<2)|0,ie=Te+8|0,K=Ae+8|0,z=fe+8|0,k=n[h>>2]|0,E=Ue+4|0,x=Ue+8|0,C=Ue+12|0,D=Dt+8|0,g=re+8|0,v=re+16|0,b=De+8|0,S=De+16|0,h=0,p=A,u=-1;e:for(;;){if(f=(p|0)%6|0,s=Ne+(f<<4)|0,n[Ue>>2]=n[s>>2],n[Ue+4>>2]=n[s+4>>2],n[Ue+8>>2]=n[s+8>>2],n[Ue+12>>2]=n[s+12>>2],s=h,h=kn(Ue,G,0,1)|0,(p|0)>(A|0)&(ar(a)|0)!=0&&(Rt=n[Ue>>2]|0,(s|0)!=1&(Rt|0)!=(u|0))){switch(ft=(f+5|0)%6|0,s=n[Ne+(ft<<4)+12>>2]|0,ut=+((n[Ne+(ft<<4)+8>>2]|0)-s|0),P[Dt>>3]=+((n[Ne+(ft<<4)+4>>2]|0)-s|0)-ut*.5,P[H>>3]=ut*.8660254037844386,s=n[Ne+(f<<4)+12>>2]|0,ut=+((n[Ne+(f<<4)+8>>2]|0)-s|0),P[re>>3]=+((n[Ne+(f<<4)+4>>2]|0)-s|0)-ut*.5,P[V>>3]=ut*.8660254037844386,ut=+(n[ee>>2]|0),P[Te>>3]=ut*3,P[ie>>3]=0,bt=ut*-1.5,P[Ae>>3]=bt,P[K>>3]=ut*2.598076211353316,P[fe>>3]=bt,P[z>>3]=ut*-2.598076211353316,n[17008+(k*80|0)+(((u|0)==(k|0)?Rt:u)<<2)>>2]|0){case 1:{s=Ae,u=Te;break}case 3:{s=fe,u=Ae;break}case 2:{s=Te,u=fe;break}default:{s=8;break e}}ic(Dt,re,u,s,Oe),!(sc(Dt,Oe)|0)&&!(sc(re,Oe)|0)&&(_i(Oe,k,G,1,De),ft=n[l>>2]|0,ut=+Gr(+ +P[S>>3]),bt=+Ft(+ +P[b>>3],+ +P[De>>3]),P[l+8+(ft<<4)>>3]=ut,P[l+8+(ft<<4)+8>>3]=bt,n[l>>2]=(n[l>>2]|0)+1)}if((p|0)<(L|0)&&(ft=n[C>>2]|0,ut=+((n[x>>2]|0)-ft|0),P[Dt>>3]=+((n[E>>2]|0)-ft|0)-ut*.5,P[D>>3]=ut*.8660254037844386,_i(Dt,n[Ue>>2]|0,G,1,re),ft=n[l>>2]|0,ut=+Gr(+ +P[v>>3]),bt=+Ft(+ +P[g>>3],+ +P[re>>3]),P[l+8+(ft<<4)>>3]=ut,P[l+8+(ft<<4)+8>>3]=bt,n[l>>2]=(n[l>>2]|0)+1),p=p+1|0,(p|0)>=(pe|0)){s=3;break}else u=n[Ue>>2]|0}if((s|0)==3){I=gt;return}else(s|0)==8&&ke(27157,27120,766,27202)}function q0(s,a,A){s=s|0,a=a|0,A=A|0;var u=0,l=0,f=0,h=0,p=0,g=0,b=0,v=0,S=0,E=0,x=0,C=0,k=0;k=I,I=I+160|0,u=k+80|0,l=k,f=u,h=20336,p=f+72|0;do n[f>>2]=n[h>>2],f=f+4|0,h=h+4|0;while((f|0)<(p|0));f=l,h=20416,p=f+72|0;do n[f>>2]=n[h>>2],f=f+4|0,h=h+4|0;while((f|0)<(p|0));S=(ar(n[a>>2]|0)|0)==0,S=S?u:l,C=s+4|0,f=n[C>>2]|0,E=s+8|0,u=n[E>>2]|0,x=s+12|0,l=n[x>>2]|0,h=u+(f<<1)|0,n[C>>2]=h,u=l+(u<<1)|0,n[E>>2]=u,f=(l<<1)+f|0,n[x>>2]=f,l=u-h|0,p=f-h|0,(h|0)<0&&(n[E>>2]=l,n[x>>2]=p,n[C>>2]=0,u=l,h=0,f=p),p=h-u|0,l=f-u|0,(u|0)<0?(n[C>>2]=p,n[x>>2]=l,n[E>>2]=0,u=0):(l=f,p=h),h=p-l|0,f=u-l|0,(l|0)<0?(n[C>>2]=h,n[E>>2]=f,n[x>>2]=0,l=0):(f=u,h=p),u=(f|0)<(h|0)?f:h,u=(l|0)<(u|0)?l:u,(u|0)>0&&(l=l-u|0,f=f-u|0,h=h-u|0,n[C>>2]=h,n[E>>2]=f,n[x>>2]=l),g=(f<<1)+h|0,p=l+(h<<1)|0,n[C>>2]=p,n[E>>2]=g,f=(l<<1)+f|0,n[x>>2]=f,u=g-p|0,l=f-p|0,(p|0)<0?(n[E>>2]=u,n[x>>2]=l,n[C>>2]=0,p=0,f=l):u=g,h=p-u|0,l=f-u|0,(u|0)<0?(n[C>>2]=h,n[x>>2]=l,n[E>>2]=0,p=h,u=0):l=f,h=p-l|0,f=u-l|0,(l|0)<0?(n[C>>2]=h,n[E>>2]=f,n[x>>2]=0,l=0):(f=u,h=p),u=(f|0)<(h|0)?f:h,u=(l|0)<(u|0)?l:u,(u|0)>0&&(n[C>>2]=h-u,n[E>>2]=f-u,n[x>>2]=l-u),ar(n[a>>2]|0)|0&&(f=n[C>>2]|0,h=n[E>>2]|0,l=n[x>>2]|0,u=(h*3|0)+f|0,f=l+(f*3|0)|0,n[C>>2]=f,n[E>>2]=u,h=(l*3|0)+h|0,n[x>>2]=h,l=u-f|0,p=h-f|0,(f|0)<0?(n[E>>2]=l,n[x>>2]=p,n[C>>2]=0,u=l,g=0):(g=f,p=h),f=g-u|0,l=p-u|0,(u|0)<0?(n[C>>2]=f,n[x>>2]=l,n[E>>2]=0,g=f,h=0):(h=u,l=p),f=g-l|0,u=h-l|0,(l|0)<0?(n[C>>2]=f,n[E>>2]=u,n[x>>2]=0,h=u,l=0):f=g,u=(h|0)<(f|0)?h:f,u=(l|0)<(u|0)?l:u,(u|0)>0&&(n[C>>2]=f-u,n[E>>2]=h-u,n[x>>2]=l-u),n[a>>2]=(n[a>>2]|0)+1),g=0;do n[A+(g<<4)>>2]=n[s>>2],l=n[E>>2]|0,u=n[x>>2]|0,b=n[S+(g*12|0)+4>>2]|0,v=n[S+(g*12|0)+8>>2]|0,h=(n[S+(g*12|0)>>2]|0)+(n[C>>2]|0)|0,a=A+(g<<4)+4|0,n[a>>2]=h,l=b+l|0,b=A+(g<<4)+8|0,n[b>>2]=l,u=v+u|0,v=A+(g<<4)+12|0,n[v>>2]=u,f=l-h|0,(h|0)<0&&(u=u-h|0,n[b>>2]=f,n[v>>2]=u,n[a>>2]=0,l=f,h=0),(l|0)<0&&(h=h-l|0,n[a>>2]=h,u=u-l|0,n[v>>2]=u,n[b>>2]=0,l=0),p=h-u|0,f=l-u|0,(u|0)<0?(n[a>>2]=p,n[b>>2]=f,n[v>>2]=0,h=p,u=0):f=l,l=(f|0)<(h|0)?f:h,l=(u|0)<(l|0)?u:l,(l|0)>0&&(n[a>>2]=h-l,n[b>>2]=f-l,n[v>>2]=u-l),g=g+1|0;while((g|0)!=6);I=k}function zo(s,a){return s=s|0,a=a|0,a=oe(s|0,a|0,52)|0,R()|0,a&15|0}function Q0(s,a){return s=s|0,a=a|0,a=oe(s|0,a|0,45)|0,R()|0,a&127|0}function Gm(s,a,A,u){return s=s|0,a=a|0,A=A|0,u=u|0,(A+-1|0)>>>0>14?(u=4,u|0):(A=oe(s|0,a|0,(15-A|0)*3|0)|0,R()|0,n[u>>2]=A&7,u=0,u|0)}function zm(s,a,A,u){s=s|0,a=a|0,A=A|0,u=u|0;var l=0,f=0,h=0,p=0,g=0,b=0;if(s>>>0>15)return u=4,u|0;if(a>>>0>121)return u=17,u|0;h=le(s|0,0,52)|0,l=R()|0,p=le(a|0,0,45)|0,l=l|(R()|0)|134225919;e:do if((s|0)>=1){for(p=1,h=(ne[20496+a>>0]|0)!=0,f=-1;;){if(a=n[A+(p+-1<<2)>>2]|0,a>>>0>6){l=18,a=10;break}if(!((a|0)==0|h^1))if((a|0)==1){l=19,a=10;break}else h=0;if(b=(15-p|0)*3|0,g=le(7,0,b|0)|0,l=l&~(R()|0),a=le(a|0,((a|0)<0)<<31>>31|0,b|0)|0,f=a|f&~g,l=R()|0|l,(p|0)<(s|0))p=p+1|0;else break e}if((a|0)==10)return l|0}else f=-1;while(!1);return b=u,n[b>>2]=f,n[b+4>>2]=l,b=0,b|0}function ns(s,a){s=s|0,a=a|0;var A=0,u=0,l=0,f=0,h=0;return!(!0&(a&-16777216|0)==134217728)||(u=oe(s|0,a|0,52)|0,R()|0,u=u&15,A=oe(s|0,a|0,45)|0,R()|0,A=A&127,A>>>0>121)?(s=0,s|0):(h=(u^15)*3|0,l=oe(s|0,a|0,h|0)|0,h=le(l|0,R()|0,h|0)|0,l=R()|0,f=yt(-1227133514,-1171,h|0,l|0)|0,!((h&613566756&f|0)==0&(l&4681&(R()|0)|0)==0)||(h=(u*3|0)+19|0,f=le(~s|0,~a|0,h|0)|0,h=oe(f|0,R()|0,h|0)|0,!((u|0)==15|(h|0)==0&(R()|0)==0))?(h=0,h|0):!(ne[20496+A>>0]|0)||(a=a&8191,(s|0)==0&(a|0)==0)?(h=1,h|0):(h=sa(s|0,a|0)|0,R()|0,((63-h|0)%3|0|0)!=0|0))}function Hm(s,a){s=s|0,a=a|0;var A=0,u=0,l=0,f=0,h=0;return!0&(a&-16777216|0)==134217728&&(u=oe(s|0,a|0,52)|0,R()|0,u=u&15,A=oe(s|0,a|0,45)|0,R()|0,A=A&127,A>>>0<=121)&&(h=(u^15)*3|0,l=oe(s|0,a|0,h|0)|0,h=le(l|0,R()|0,h|0)|0,l=R()|0,f=yt(-1227133514,-1171,h|0,l|0)|0,(h&613566756&f|0)==0&(l&4681&(R()|0)|0)==0)&&(h=(u*3|0)+19|0,f=le(~s|0,~a|0,h|0)|0,h=oe(f|0,R()|0,h|0)|0,(u|0)==15|(h|0)==0&(R()|0)==0)&&(!(ne[20496+A>>0]|0)||(A=a&8191,(s|0)==0&(A|0)==0)||(h=sa(s|0,A|0)|0,R()|0,(63-h|0)%3|0|0))||G0(s,a)|0?(h=1,h|0):(h=(oc(s,a)|0)!=0&1,h|0)}function Ho(s,a,A,u){s=s|0,a=a|0,A=A|0,u=u|0;var l=0,f=0,h=0,p=0;if(l=le(a|0,0,52)|0,f=R()|0,A=le(A|0,0,45)|0,A=f|(R()|0)|134225919,(a|0)<1){f=-1,u=A,a=s,n[a>>2]=f,s=s+4|0,n[s>>2]=u;return}for(f=1,l=-1;h=(15-f|0)*3|0,p=le(7,0,h|0)|0,A=A&~(R()|0),h=le(u|0,0,h|0)|0,l=l&~p|h,A=A|(R()|0),(f|0)!=(a|0);)f=f+1|0;p=s,h=p,n[h>>2]=l,p=p+4|0,n[p>>2]=A}function qo(s,a,A,u){s=s|0,a=a|0,A=A|0,u=u|0;var l=0,f=0;if(f=oe(s|0,a|0,52)|0,R()|0,f=f&15,A>>>0>15)return u=4,u|0;if((f|0)<(A|0))return u=12,u|0;if((f|0)==(A|0))return n[u>>2]=s,n[u+4>>2]=a,u=0,u|0;if(l=le(A|0,0,52)|0,l=l|s,s=R()|0|a&-15728641,(f|0)>(A|0))do a=le(7,0,(14-A|0)*3|0)|0,A=A+1|0,l=a|l,s=R()|0|s;while((A|0)<(f|0));return n[u>>2]=l,n[u+4>>2]=s,u=0,u|0}function Ti(s,a,A,u){s=s|0,a=a|0,A=A|0,u=u|0;var l=0,f=0,h=0;if(f=oe(s|0,a|0,52)|0,R()|0,f=f&15,!((A|0)<16&(f|0)<=(A|0)))return u=4,u|0;l=A-f|0,A=oe(s|0,a|0,45)|0,R()|0;e:do if(!(ot(A&127)|0))A=zr(7,0,l,((l|0)<0)<<31>>31)|0,l=R()|0;else{t:do if(f|0){for(A=1;h=le(7,0,(15-A|0)*3|0)|0,!!((h&s|0)==0&((R()|0)&a|0)==0);)if(A>>>0<f>>>0)A=A+1|0;else break t;A=zr(7,0,l,((l|0)<0)<<31>>31)|0,l=R()|0;break e}while(!1);A=zr(7,0,l,((l|0)<0)<<31>>31)|0,A=At(A|0,R()|0,5,0)|0,A=de(A|0,R()|0,-5,-1)|0,A=Hr(A|0,R()|0,6,0)|0,A=de(A|0,R()|0,1,0)|0,l=R()|0}while(!1);return h=u,n[h>>2]=A,n[h+4>>2]=l,h=0,h|0}function Ye(s,a){s=s|0,a=a|0;var A=0,u=0,l=0;if(l=oe(s|0,a|0,45)|0,R()|0,!(ot(l&127)|0))return l=0,l|0;l=oe(s|0,a|0,52)|0,R()|0,l=l&15;e:do if(!l)A=0;else for(u=1;;){if(A=oe(s|0,a|0,(15-u|0)*3|0)|0,R()|0,A=A&7,A|0)break e;if(u>>>0<l>>>0)u=u+1|0;else{A=0;break}}while(!1);return l=(A|0)==0&1,l|0}function qm(s,a,A,u){s=s|0,a=a|0,A=A|0,u=u|0;var l=0,f=0,h=0,p=0;if(h=I,I=I+16|0,f=h,Yo(f,s,a,A),a=f,s=n[a>>2]|0,a=n[a+4>>2]|0,(s|0)==0&(a|0)==0)return I=h,0;l=0,A=0;do p=u+(l<<3)|0,n[p>>2]=s,n[p+4>>2]=a,l=de(l|0,A|0,1,0)|0,A=R()|0,Jo(f),p=f,s=n[p>>2]|0,a=n[p+4>>2]|0;while(!((s|0)==0&(a|0)==0));return I=h,0}function W0(s,a,A,u){return s=s|0,a=a|0,A=A|0,u=u|0,(u|0)<(A|0)?(A=a,u=s,Re(A|0),u|0):(A=le(-1,-1,((u-A|0)*3|0)+3|0)|0,u=le(~A|0,~(R()|0)|0,(15-u|0)*3|0)|0,A=~(R()|0)&a,u=~u&s,Re(A|0),u|0)}function K0(s,a,A,u){s=s|0,a=a|0,A=A|0,u=u|0;var l=0;return l=oe(s|0,a|0,52)|0,R()|0,l=l&15,(A|0)<16&(l|0)<=(A|0)?((l|0)<(A|0)&&(l=le(-1,-1,((A+-1-l|0)*3|0)+3|0)|0,l=le(~l|0,~(R()|0)|0,(15-A|0)*3|0)|0,a=~(R()|0)&a,s=~l&s),l=le(A|0,0,52)|0,A=a&-15728641|(R()|0),n[u>>2]=s|l,n[u+4>>2]=A,u=0,u|0):(u=4,u|0)}function Qm(s,a,A,u){s=s|0,a=a|0,A=A|0,u=u|0;var l=0,f=0,h=0,p=0,g=0,b=0,v=0,S=0,E=0,x=0,C=0,k=0,D=0,G=0,L=0,H=0,V=0,ee=0,ie=0,K=0,z=0,pe=0,re=0,Te=0,Ae=0,fe=0;if((A|0)==0&(u|0)==0)return fe=0,fe|0;if(l=s,f=n[l>>2]|0,l=n[l+4>>2]|0,!0&(l&15728640|0)==0){if(!((u|0)>0|(u|0)==0&A>>>0>0)||(fe=a,n[fe>>2]=f,n[fe+4>>2]=l,(A|0)==1&(u|0)==0))return fe=0,fe|0;l=1,f=0;do Te=s+(l<<3)|0,Ae=n[Te+4>>2]|0,fe=a+(l<<3)|0,n[fe>>2]=n[Te>>2],n[fe+4>>2]=Ae,l=de(l|0,f|0,1,0)|0,f=R()|0;while((f|0)<(u|0)|(f|0)==(u|0)&l>>>0<A>>>0);return l=0,l|0}if(re=A<<3,Ae=at(re)|0,!Ae)return fe=13,fe|0;if(mr(Ae|0,s|0,re|0)|0,Te=Bt(A,8)|0,!Te)return ge(Ae),fe=13,fe|0;e:for(;;){l=Ae,b=n[l>>2]|0,l=n[l+4>>2]|0,z=oe(b|0,l|0,52)|0,R()|0,z=z&15,pe=z+-1|0,K=(z|0)!=0,ie=(u|0)>0|(u|0)==0&A>>>0>0;t:do if(K&ie){if(L=le(pe|0,0,52)|0,H=R()|0,pe>>>0>15){if(!((b|0)==0&(l|0)==0)){fe=16;break e}for(f=0,s=0;;){if(f=de(f|0,s|0,1,0)|0,s=R()|0,!((s|0)<(u|0)|(s|0)==(u|0)&f>>>0<A>>>0))break t;if(h=Ae+(f<<3)|0,ee=n[h>>2]|0,h=n[h+4>>2]|0,!((ee|0)==0&(h|0)==0)){l=h,fe=16;break e}}}for(p=b,s=l,f=0,h=0;;){if(!((p|0)==0&(s|0)==0)){if(!(!0&(s&117440512|0)==0)){fe=21;break e}if(v=oe(p|0,s|0,52)|0,R()|0,v=v&15,(v|0)<(pe|0)){l=12,fe=27;break e}if((v|0)!=(pe|0)&&(p=p|L,s=s&-15728641|H,v>>>0>=z>>>0)){g=pe;do ee=le(7,0,(14-g|0)*3|0)|0,g=g+1|0,p=ee|p,s=R()|0|s;while(g>>>0<v>>>0)}if(E=Pr(p|0,s|0,A|0,u|0)|0,x=R()|0,g=Te+(E<<3)|0,v=g,S=n[v>>2]|0,v=n[v+4>>2]|0,!((S|0)==0&(v|0)==0)){D=0,G=0;do{if((D|0)>(u|0)|(D|0)==(u|0)&G>>>0>A>>>0){fe=31;break e}if((S|0)==(p|0)&(v&-117440513|0)==(s|0)){C=oe(S|0,v|0,56)|0,R()|0,C=C&7,k=C+1|0,ee=oe(S|0,v|0,45)|0,R()|0;r:do if(!(ot(ee&127)|0))v=7;else{if(S=oe(S|0,v|0,52)|0,R()|0,S=S&15,!S){v=6;break}for(v=1;;){if(ee=le(7,0,(15-v|0)*3|0)|0,!((ee&p|0)==0&((R()|0)&s|0)==0)){v=7;break r}if(v>>>0<S>>>0)v=v+1|0;else{v=6;break}}}while(!1);if((C+2|0)>>>0>v>>>0){fe=41;break e}ee=le(k|0,0,56)|0,s=R()|0|s&-117440513,V=g,n[V>>2]=0,n[V+4>>2]=0,p=ee|p}else E=de(E|0,x|0,1,0)|0,E=qr(E|0,R()|0,A|0,u|0)|0,x=R()|0;G=de(G|0,D|0,1,0)|0,D=R()|0,g=Te+(E<<3)|0,v=g,S=n[v>>2]|0,v=n[v+4>>2]|0}while(!((S|0)==0&(v|0)==0))}ee=g,n[ee>>2]=p,n[ee+4>>2]=s}if(f=de(f|0,h|0,1,0)|0,h=R()|0,!((h|0)<(u|0)|(h|0)==(u|0)&f>>>0<A>>>0))break t;s=Ae+(f<<3)|0,p=n[s>>2]|0,s=n[s+4>>2]|0}}while(!1);if(ee=de(A|0,u|0,5,0)|0,V=R()|0,V>>>0<0|(V|0)==0&ee>>>0<11){fe=85;break}if(ee=Hr(A|0,u|0,6,0)|0,R()|0,ee=Bt(ee,8)|0,!ee){fe=48;break}do if(ie){for(k=0,s=0,C=0,D=0;;){if(v=Te+(k<<3)|0,h=v,f=n[h>>2]|0,h=n[h+4>>2]|0,(f|0)==0&(h|0)==0)V=C;else{S=oe(f|0,h|0,56)|0,R()|0,S=S&7,p=S+1|0,E=h&-117440513,V=oe(f|0,h|0,45)|0,R()|0;t:do if(ot(V&127)|0){if(x=oe(f|0,h|0,52)|0,R()|0,x=x&15,x|0)for(g=1;;){if(V=le(7,0,(15-g|0)*3|0)|0,!((f&V|0)==0&(E&(R()|0)|0)==0))break t;if(g>>>0<x>>>0)g=g+1|0;else break}h=le(p|0,0,56)|0,f=h|f,h=R()|0|E,p=v,n[p>>2]=f,n[p+4>>2]=h,p=S+2|0}while(!1);(p|0)==7?(V=ee+(s<<3)|0,n[V>>2]=f,n[V+4>>2]=h&-117440513,s=de(s|0,C|0,1,0)|0,V=R()|0):V=C}if(k=de(k|0,D|0,1,0)|0,D=R()|0,(D|0)<(u|0)|(D|0)==(u|0)&k>>>0<A>>>0)C=V;else break}if(ie){if(G=pe>>>0>15,L=le(pe|0,0,52)|0,H=R()|0,!K){for(f=0,g=0,p=0,h=0;(b|0)==0&(l|0)==0||(pe=a+(f<<3)|0,n[pe>>2]=b,n[pe+4>>2]=l,f=de(f|0,g|0,1,0)|0,g=R()|0),p=de(p|0,h|0,1,0)|0,h=R()|0,!!((h|0)<(u|0)|(h|0)==(u|0)&p>>>0<A>>>0);)l=Ae+(p<<3)|0,b=n[l>>2]|0,l=n[l+4>>2]|0;l=V;break}for(f=0,g=0,h=0,p=0;;){do if(!((b|0)==0&(l|0)==0)){if(x=oe(b|0,l|0,52)|0,R()|0,x=x&15,G|(x|0)<(pe|0)){fe=80;break e}if((x|0)!=(pe|0)){if(v=b|L,S=l&-15728641|H,x>>>0>=z>>>0){E=pe;do K=le(7,0,(14-E|0)*3|0)|0,E=E+1|0,v=K|v,S=R()|0|S;while(E>>>0<x>>>0)}}else v=b,S=l;C=Pr(v|0,S|0,A|0,u|0)|0,E=0,x=0,D=R()|0;do{if((E|0)>(u|0)|(E|0)==(u|0)&x>>>0>A>>>0){fe=81;break e}if(K=Te+(C<<3)|0,k=n[K+4>>2]|0,(k&-117440513|0)==(S|0)&&(n[K>>2]|0)==(v|0)){fe=65;break}K=de(C|0,D|0,1,0)|0,C=qr(K|0,R()|0,A|0,u|0)|0,D=R()|0,x=de(x|0,E|0,1,0)|0,E=R()|0,K=Te+(C<<3)|0}while(!((n[K>>2]|0)==(v|0)&&(n[K+4>>2]|0)==(S|0)));if((fe|0)==65&&(fe=0,!0&(k&117440512|0)==100663296))break;K=a+(f<<3)|0,n[K>>2]=b,n[K+4>>2]=l,f=de(f|0,g|0,1,0)|0,g=R()|0}while(!1);if(h=de(h|0,p|0,1,0)|0,p=R()|0,!((p|0)<(u|0)|(p|0)==(u|0)&h>>>0<A>>>0))break;l=Ae+(h<<3)|0,b=n[l>>2]|0,l=n[l+4>>2]|0}l=V}else f=0,l=V}else f=0,s=0,l=0;while(!1);if(Qr(Te|0,0,re|0)|0,mr(Ae|0,ee|0,s<<3|0)|0,ge(ee),(s|0)==0&(l|0)==0){fe=89;break}else a=a+(f<<3)|0,u=l,A=s}if((fe|0)==16)!0&(l&117440512|0)==0?(l=4,fe=27):fe=21;else if((fe|0)==31)ke(27634,27225,620,27235);else{if((fe|0)==41)return ge(Ae),ge(Te),fe=10,fe|0;if((fe|0)==48)return ge(Ae),ge(Te),fe=13,fe|0;(fe|0)==80?ke(27634,27225,711,27235):(fe|0)==81?ke(27634,27225,723,27235):(fe|0)==85&&(mr(a|0,Ae|0,A<<3|0)|0,fe=89)}return(fe|0)==21?(ge(Ae),ge(Te),fe=5,fe|0):(fe|0)==27?(ge(Ae),ge(Te),fe=l,fe|0):(fe|0)==89?(ge(Ae),ge(Te),fe=0,fe|0):0}function Wm(s,a,A,u,l,f,h){s=s|0,a=a|0,A=A|0,u=u|0,l=l|0,f=f|0,h=h|0;var p=0,g=0,b=0,v=0,S=0,E=0,x=0,C=0,k=0;if(k=I,I=I+16|0,C=k,!((A|0)>0|(A|0)==0&a>>>0>0))return C=0,I=k,C|0;if((h|0)>=16)return C=12,I=k,C|0;E=0,x=0,S=0,p=0;e:for(;;){if(b=s+(E<<3)|0,g=n[b>>2]|0,b=n[b+4>>2]|0,v=oe(g|0,b|0,52)|0,R()|0,(v&15|0)>(h|0)){p=12,g=11;break}if(Yo(C,g,b,h),v=C,b=n[v>>2]|0,v=n[v+4>>2]|0,(b|0)==0&(v|0)==0)g=S;else{g=S;do{if(!((p|0)<(f|0)|(p|0)==(f|0)&g>>>0<l>>>0)){g=10;break e}S=u+(g<<3)|0,n[S>>2]=b,n[S+4>>2]=v,g=de(g|0,p|0,1,0)|0,p=R()|0,Jo(C),S=C,b=n[S>>2]|0,v=n[S+4>>2]|0}while(!((b|0)==0&(v|0)==0))}if(E=de(E|0,x|0,1,0)|0,x=R()|0,(x|0)<(A|0)|(x|0)==(A|0)&E>>>0<a>>>0)S=g;else{p=0,g=11;break}}return(g|0)==10?(C=14,I=k,C|0):(g|0)==11?(I=k,p|0):0}function Km(s,a,A,u,l){s=s|0,a=a|0,A=A|0,u=u|0,l=l|0;var f=0,h=0,p=0,g=0,b=0,v=0,S=0,E=0;E=I,I=I+16|0,S=E;e:do if((A|0)>0|(A|0)==0&a>>>0>0){for(b=0,h=0,f=0,v=0;;){if(g=s+(b<<3)|0,p=n[g>>2]|0,g=n[g+4>>2]|0,!((p|0)==0&(g|0)==0)&&(g=(Ti(p,g,u,S)|0)==0,p=S,h=de(n[p>>2]|0,n[p+4>>2]|0,h|0,f|0)|0,f=R()|0,!g)){f=12;break}if(b=de(b|0,v|0,1,0)|0,v=R()|0,!((v|0)<(A|0)|(v|0)==(A|0)&b>>>0<a>>>0))break e}return I=E,f|0}else h=0,f=0;while(!1);return n[l>>2]=h,n[l+4>>2]=f,l=0,I=E,l|0}function $m(s,a){return s=s|0,a=a|0,a=oe(s|0,a|0,52)|0,R()|0,a&1|0}function qt(s,a){s=s|0,a=a|0;var A=0,u=0,l=0;if(l=oe(s|0,a|0,52)|0,R()|0,l=l&15,!l)return l=0,l|0;for(u=1;;){if(A=oe(s|0,a|0,(15-u|0)*3|0)|0,R()|0,A=A&7,A|0){u=5;break}if(u>>>0<l>>>0)u=u+1|0;else{A=0,u=5;break}}return(u|0)==5?A|0:0}function Qo(s,a){s=s|0,a=a|0;var A=0,u=0,l=0,f=0,h=0,p=0,g=0,b=0,v=0;if(v=oe(s|0,a|0,52)|0,R()|0,v=v&15,!v)return b=a,v=s,Re(b|0),v|0;for(b=1,A=0;;){switch(u=(15-b|0)*3|0,p=le(7,0,u|0)|0,g=R()|0,f=s&~p,h=a&~g,s=oe(s|0,a|0,u|0)|0,R()|0,s&7){case 1:{s=5;break}case 5:{s=4;break}case 4:{s=6;break}case 6:{s=2;break}case 2:{s=3;break}case 3:{s=1;break}default:s=s&7}u=le(s|0,0,u|0)|0,l=R()|0,s=u|f,a=l|h;e:do if(!A)if((u&p|0)==0&(l&g|0)==0)A=0;else if(h=oe(s|0,a|0,52)|0,R()|0,h=h&15,!h)A=1;else{A=1;t:for(;;){switch(g=oe(s|0,a|0,(15-A|0)*3|0)|0,R()|0,g&7){case 1:break t;case 0:break;default:{A=1;break e}}if(A>>>0<h>>>0)A=A+1|0;else{A=1;break e}}for(f=1;;){switch(l=(15-f|0)*3|0,A=oe(s|0,a|0,l|0)|0,R()|0,u=le(7,0,l|0)|0,u=s&~u,a=a&~(R()|0),A&7){case 1:{s=5;break}case 5:{s=4;break}case 4:{s=6;break}case 6:{s=2;break}case 2:{s=3;break}case 3:{s=1;break}default:s=A&7}if(s=le(s|0,0,l|0)|0,s=s|u,a=R()|0|a,f>>>0<h>>>0)f=f+1|0;else{A=1;break e}}}while(!1);if(b>>>0<v>>>0)b=b+1|0;else break}return Re(a|0),s|0}function cn(s,a){s=s|0,a=a|0;var A=0,u=0,l=0,f=0,h=0;if(h=oe(s|0,a|0,52)|0,R()|0,h=h&15,!h)return f=a,h=s,Re(f|0),h|0;for(f=1;;){switch(l=(15-f|0)*3|0,A=oe(s|0,a|0,l|0)|0,R()|0,u=le(7,0,l|0)|0,u=s&~u,a=a&~(R()|0),A&7){case 1:{s=5;break}case 5:{s=4;break}case 4:{s=6;break}case 6:{s=2;break}case 2:{s=3;break}case 3:{s=1;break}default:s=A&7}if(s=le(s|0,0,l|0)|0,s=s|u,a=R()|0|a,f>>>0<h>>>0)f=f+1|0;else break}return Re(a|0),s|0}function Xm(s,a){s=s|0,a=a|0;var A=0,u=0,l=0,f=0,h=0,p=0,g=0,b=0,v=0;if(v=oe(s|0,a|0,52)|0,R()|0,v=v&15,!v)return b=a,v=s,Re(b|0),v|0;for(b=1,A=0;;){switch(u=(15-b|0)*3|0,p=le(7,0,u|0)|0,g=R()|0,f=s&~p,h=a&~g,s=oe(s|0,a|0,u|0)|0,R()|0,s&7){case 1:{s=3;break}case 3:{s=2;break}case 2:{s=6;break}case 6:{s=4;break}case 4:{s=5;break}case 5:{s=1;break}default:s=s&7}u=le(s|0,0,u|0)|0,l=R()|0,s=u|f,a=l|h;e:do if(!A)if((u&p|0)==0&(l&g|0)==0)A=0;else if(h=oe(s|0,a|0,52)|0,R()|0,h=h&15,!h)A=1;else{A=1;t:for(;;){switch(g=oe(s|0,a|0,(15-A|0)*3|0)|0,R()|0,g&7){case 1:break t;case 0:break;default:{A=1;break e}}if(A>>>0<h>>>0)A=A+1|0;else{A=1;break e}}for(f=1;;){switch(A=(15-f|0)*3|0,u=le(7,0,A|0)|0,u=s&~u,l=a&~(R()|0),s=oe(s|0,a|0,A|0)|0,R()|0,s&7){case 1:{s=3;break}case 3:{s=2;break}case 2:{s=6;break}case 6:{s=4;break}case 4:{s=5;break}case 5:{s=1;break}default:s=s&7}if(s=le(s|0,0,A|0)|0,s=s|u,a=R()|0|l,f>>>0<h>>>0)f=f+1|0;else{A=1;break e}}}while(!1);if(b>>>0<v>>>0)b=b+1|0;else break}return Re(a|0),s|0}function Wo(s,a){s=s|0,a=a|0;var A=0,u=0,l=0,f=0,h=0;if(h=oe(s|0,a|0,52)|0,R()|0,h=h&15,!h)return f=a,h=s,Re(f|0),h|0;for(f=1;;){switch(u=(15-f|0)*3|0,A=le(7,0,u|0)|0,A=s&~A,l=a&~(R()|0),s=oe(s|0,a|0,u|0)|0,R()|0,s&7){case 1:{s=3;break}case 3:{s=2;break}case 2:{s=6;break}case 6:{s=4;break}case 4:{s=5;break}case 5:{s=1;break}default:s=s&7}if(s=le(s|0,0,u|0)|0,s=s|A,a=R()|0|l,f>>>0<h>>>0)f=f+1|0;else break}return Re(a|0),s|0}function Ym(s,a){s=s|0,a=a|0;var A=0,u=0,l=0,f=0,h=0,p=0,g=0,b=0,v=0,S=0,E=0,x=0,C=0,k=0,D=0,G=0,L=0,H=0,V=0,ee=0,ie=0,K=0;if(V=I,I=I+16|0,H=V,le(a|0,0,52)|0,A=R()|0|134225919,!a)return(n[s+4>>2]|0)>2||(n[s+8>>2]|0)>2||(n[s+12>>2]|0)>2?(L=0,H=0,Re(L|0),I=V,H|0):(le(F0(s)|0,0,45)|0,L=R()|0|A,H=-1,Re(L|0),I=V,H|0);n[H>>2]=n[s>>2],n[H+4>>2]=n[s+4>>2],n[H+8>>2]=n[s+8>>2],n[H+12>>2]=n[s+12>>2],L=H+4|0;e:do if((a|0)>0)for(k=H+8|0,D=H+12|0,C=a,S=n[k>>2]|0,E=n[D>>2]|0,a=-1,v=n[H+4>>2]|0;;){x=C,C=C+-1|0,s=v-E|0,u=S-E|0,x&1?(f=wr(+((s*3|0)-u|0)*.14285714285714285)|0,n[L>>2]=f,s=wr(+((u<<1)+s|0)*.14285714285714285)|0,n[k>>2]=s,n[D>>2]=0,u=s-f|0,l=0-f|0,(f|0)<0?(n[k>>2]=u,n[D>>2]=l,n[L>>2]=0,s=u,h=0):(h=f,l=0),f=h-s|0,u=l-s|0,(s|0)<0?(n[L>>2]=f,n[D>>2]=u,n[k>>2]=0,h=f,f=0):(u=l,f=s),s=h-u|0,l=f-u|0,(u|0)<0?(n[L>>2]=s,n[k>>2]=l,n[D>>2]=0,f=0):(l=f,s=h,f=u),u=(l|0)<(s|0)?l:s,u=(f|0)<(u|0)?f:u,(u|0)>0&&(f=f-u|0,l=l-u|0,s=s-u|0,n[L>>2]=s,n[k>>2]=l,n[D>>2]=f),ie=l+(s*3|0)|0,ee=(ie|0)<0,b=f+(l*3|0)-(ee?ie:0)|0,g=(b|0)<0,u=(f*3|0)+s-(ee?ie:0)-(g?b:0)|0,p=(u|0)<0,K=p?0:u,h=(g?0:b)-(p?u:0)|0,u=(ee?0:ie)-(g?b:0)-(p?u:0)|0,p=(h|0)<(u|0)?h:u,p=(K|0)<(p|0)?K:p,b=(p|0)>0,g=b?p:0,h=h-(b?p:0)|0,p=K-(b?p:0)|0,b=f):(p=wr(+((s<<1)+u|0)*.14285714285714285)|0,n[L>>2]=p,l=wr(+((u*3|0)-s|0)*.14285714285714285)|0,n[k>>2]=l,n[D>>2]=0,u=l-p|0,s=0-p|0,(p|0)<0?(n[k>>2]=u,n[D>>2]=s,n[L>>2]=0,l=u,p=0):s=0,h=p-l|0,u=s-l|0,(l|0)<0?(n[L>>2]=h,n[D>>2]=u,n[k>>2]=0,f=u,l=0):(f=s,h=p),s=h-f|0,u=l-f|0,(f|0)<0?(n[L>>2]=s,n[k>>2]=u,n[D>>2]=0,l=u,f=0):s=h,u=(l|0)<(s|0)?l:s,u=(f|0)<(u|0)?f:u,(u|0)>0&&(f=f-u|0,l=l-u|0,s=s-u|0,n[L>>2]=s,n[k>>2]=l,n[D>>2]=f),ie=f+(s*3|0)|0,K=(ie|0)<0,b=(l*3|0)+s-(K?ie:0)|0,g=(b|0)<0,u=(f*3|0)+l-(K?ie:0)-(g?b:0)|0,p=(u|0)<0,ee=p?0:u,h=(g?0:b)-(p?u:0)|0,u=(K?0:ie)-(g?b:0)-(p?u:0)|0,p=(h|0)<(u|0)?h:u,p=(ee|0)<(p|0)?ee:p,b=(p|0)>0,g=b?p:0,h=h-(b?p:0)|0,p=ee-(b?p:0)|0,b=f),u=v+(g-u)|0,f=(u|0)<0,g=S-h-(f?u:0)|0,h=(g|0)<0,E=E-p+(f?0-u|0:0)+(h?0-g|0:0)|0,v=(E|0)<0,p=v?0:E,K=(h?0:g)-(v?E:0)|0,E=(f?0:u)-(h?g:0)-(v?E:0)|0,v=(K|0)<(E|0)?K:E,v=(p|0)<(v|0)?p:v,g=(v|0)>0,E=E-(g?v:0)|0,h=(15-x|0)*3|0,u=le(7,0,h|0)|0,u=a&~u,f=A&~(R()|0),S=(E|0)<0,ie=S?E:0,K=K-(g?v:0)-ie|0,ee=(K|0)<0,ie=(ee?0-K|0:0)+(p-(g?v:0)-ie)|0,A=(ie|0)<0,a=A?0:ie,ie=A?ie:0,A=(ee?0:K)-ie|0,ie=(S?0:E)-(ee?K:0)-ie|0,K=(A|0)<(ie|0)?A:ie,K=(a|0)<(K|0)?a:K,K=(K|0)>0?K:0,a=a-K|0,A=A-K|0;t:do switch(ie-K|0){case 0:switch(A|0){case 0:{a=(a|0)==0?0:(a|0)==1?1:7;break t}case 1:{a=(a|0)==0?2:(a|0)==1?3:7;break t}default:{G=36;break t}}case 1:switch(A|0){case 0:{a=(a|0)==0?4:(a|0)==1?5:7;break t}case 1:if(a){G=36;break t}else{a=6;break t}default:{G=36;break t}}default:G=36}while(!1);if((G|0)==36&&(G=0,a=7),a=le(a|0,0,h|0)|0,a=a|u,A=R()|0|f,(x|0)<=1)break e;S=l,E=b,v=s}else a=-1,s=n[L>>2]|0;while(!1);e:do if((s|0)<=2&&(n[H+8>>2]|0)<=2&&(n[H+12>>2]|0)<=2){if(u=F0(H)|0,s=le(u|0,0,45)|0,a=s|a,s=R()|0|A&-1040385,g=_m(H)|0,!(ot(u)|0)){if((g|0)<=0)break;for(p=0;;){h=oe(a|0,s|0,52)|0,R()|0,h=h&15;t:do if(h)for(f=1;;){switch(l=(15-f|0)*3|0,A=oe(a|0,s|0,l|0)|0,R()|0,u=le(7,0,l|0)|0,a=a&~u,u=s&~(R()|0),A&7){case 1:{s=5;break}case 5:{s=4;break}case 4:{s=6;break}case 6:{s=2;break}case 2:{s=3;break}case 3:{s=1;break}default:s=A&7}if(s=le(s|0,0,l|0)|0,a=s|a,s=R()|0|u,f>>>0<h>>>0)f=f+1|0;else break t}while(!1);if(p=p+1|0,(p|0)==(g|0))break e}}h=oe(a|0,s|0,52)|0,R()|0,h=h&15;t:do if(h){A=1;r:for(;;){switch(K=oe(a|0,s|0,(15-A|0)*3|0)|0,R()|0,K&7){case 1:break r;case 0:break;default:break t}if(A>>>0<h>>>0)A=A+1|0;else break t}if(B0(u,n[H>>2]|0)|0)for(f=1;;){switch(A=(15-f|0)*3|0,u=le(7,0,A|0)|0,u=a&~u,l=s&~(R()|0),s=oe(a|0,s|0,A|0)|0,R()|0,s&7){case 1:{s=3;break}case 3:{s=2;break}case 2:{s=6;break}case 6:{s=4;break}case 4:{s=5;break}case 5:{s=1;break}default:s=s&7}if(a=le(s|0,0,A|0)|0,a=a|u,s=R()|0|l,f>>>0<h>>>0)f=f+1|0;else break t}else for(f=1;;){switch(l=(15-f|0)*3|0,A=oe(a|0,s|0,l|0)|0,R()|0,u=le(7,0,l|0)|0,a=a&~u,u=s&~(R()|0),A&7){case 1:{s=5;break}case 5:{s=4;break}case 4:{s=6;break}case 6:{s=2;break}case 2:{s=3;break}case 3:{s=1;break}default:s=A&7}if(s=le(s|0,0,l|0)|0,a=s|a,s=R()|0|u,f>>>0<h>>>0)f=f+1|0;else break t}}while(!1);if((g|0)>0){A=0;do a=Qo(a,s)|0,s=R()|0,A=A+1|0;while((A|0)!=(g|0))}}else a=0,s=0;while(!1);return ie=s,K=a,Re(ie|0),I=V,K|0}function ar(s){return s=s|0,(s|0)%2|0|0}function Ko(s,a,A){s=s|0,a=a|0,A=A|0;var u=0,l=0,f=0,h=0,p=0,g=0,b=0,v=0,S=0;if(v=I,I=I+64|0,p=v+24|0,g=v+48|0,b=v,a>>>0>15)return b=4,I=v,b|0;if(f=+P[s>>3],P[Pe>>3]=f,(n[Pe+4>>2]&2146435072|0)==2146435072||(u=+P[s+8>>3],P[Pe>>3]=u,(n[Pe+4>>2]&2146435072|0)==2146435072))return b=3,I=v,b|0;l=+tt(+f),S=l*+tt(+u),l=l*+nt(+u),u=+nt(+f),P[b>>3]=S,P[b+8>>3]=l,P[b+16>>3]=u,P[Pe>>3]=S;do if((n[Pe+4>>2]&2146435072|0)!=2146435072&&(P[Pe>>3]=u,s=n[Pe+4>>2]|0,P[Pe>>3]=l,!((n[Pe+4>>2]&2146435072|0)==2146435072|!0&(s&2146435072|0)==2146435072)))if(n[p>>2]=n[b>>2],n[p+4>>2]=n[b+4>>2],n[p+8>>2]=n[b+8>>2],n[p+12>>2]=n[b+12>>2],n[p+16>>2]=n[b+16>>2],n[p+20>>2]=n[b+20>>2],Um(p,a,g),g=Ym(g,a)|0,b=R()|0,n[A>>2]=g,n[A+4>>2]=b,(g|0)==0&(b|0)==0)ke(27634,27225,1073,27248);else{h=0;break}else h=2;while(!1);return b=h,I=v,b|0}function $o(s,a,A){s=s|0,a=a|0,A=A|0;var u=0,l=0,f=0,h=0,p=0,g=0,b=0,v=0,S=0,E=0,x=0,C=0;if(x=A+4|0,C=oe(s|0,a|0,52)|0,R()|0,C=C&15,E=oe(s|0,a|0,45)|0,R()|0,u=(C|0)==0,ot(E&127)|0){if(u)return C=1,C|0;u=1}else{if(u)return C=0,C|0;(n[x>>2]|0)==0&&(n[A+8>>2]|0)==0?u=(n[A+12>>2]|0)!=0&1:u=1}for(E=A+8|0,S=A+12|0,v=1,A=n[x>>2]|0,h=n[E>>2]|0,f=n[S>>2]|0;l=A*3|0,p=h*3|0,b=f*3|0,v&1?(g=h+l|0,n[x>>2]=g,f=f+p|0,n[E>>2]=f,l=b+A|0,n[S>>2]=l,A=f-g|0,h=l-g|0,(g|0)<0?(n[E>>2]=A,n[S>>2]=h,n[x>>2]=0,p=0,l=h):(A=f,p=g),h=p-A|0,f=l-A|0,(A|0)<0?(n[x>>2]=h,n[S>>2]=f,n[E>>2]=0,p=h,l=0):(f=l,l=A),A=p-f|0,h=l-f|0,(f|0)<0?(n[x>>2]=A,n[E>>2]=h,n[S>>2]=0,f=0):(h=l,A=p),l=(h|0)<(A|0)?h:A,l=(f|0)<(l|0)?f:l,(l|0)>0&&(f=f-l|0,h=h-l|0,A=A-l|0,n[x>>2]=A,n[E>>2]=h,n[S>>2]=f)):(g=p+A|0,p=f+l|0,n[x>>2]=p,n[E>>2]=g,l=b+h|0,n[S>>2]=l,A=g-p|0,f=l-p|0,(p|0)<0?(n[E>>2]=A,n[S>>2]=f,n[x>>2]=0,p=0,l=f):A=g,h=p-A|0,f=l-A|0,(A|0)<0?(n[x>>2]=h,n[S>>2]=f,n[E>>2]=0,p=h,l=0):(f=l,l=A),A=p-f|0,h=l-f|0,(f|0)<0?(n[x>>2]=A,n[E>>2]=h,n[S>>2]=0,f=0):(h=l,A=p),l=(h|0)<(A|0)?h:A,l=(f|0)<(l|0)?f:l,(l|0)>0&&(f=f-l|0,h=h-l|0,A=A-l|0,n[x>>2]=A,n[E>>2]=h,n[S>>2]=f)),l=oe(s|0,a|0,(15-v|0)*3|0)|0,R()|0,l=l&7,(l+-1|0)>>>0<6&&(g=n[22032+(l*12|0)+4>>2]|0,b=n[22032+(l*12|0)+8>>2]|0,p=(n[22032+(l*12|0)>>2]|0)+A|0,n[x>>2]=p,h=g+h|0,n[E>>2]=h,A=b+f|0,n[S>>2]=A,f=h-p|0,l=A-p|0,(p|0)<0&&(n[E>>2]=f,n[S>>2]=l,n[x>>2]=0,p=0,A=l,h=f),l=p-h|0,f=A-h|0,(h|0)<0?(n[x>>2]=l,n[S>>2]=f,n[E>>2]=0,p=l,h=0):f=A,A=p-f|0,l=h-f|0,(f|0)<0?(n[x>>2]=A,n[E>>2]=l,n[S>>2]=0,h=l,f=0):A=p,l=(h|0)<(A|0)?h:A,l=(f|0)<(l|0)?f:l,(l|0)>0&&(f=f-l|0,h=h-l|0,A=A-l|0,n[x>>2]=A,n[E>>2]=h,n[S>>2]=f)),v>>>0<C>>>0;)v=v+1|0;return u|0}function On(s,a,A){s=s|0,a=a|0,A=A|0;var u=0,l=0,f=0,h=0,p=0,g=0,b=0,v=0,S=0,E=0,x=0,C=0;if(C=I,I=I+16|0,S=C,E=oe(s|0,a|0,45)|0,R()|0,E=E&127,E>>>0>121)return n[A>>2]=0,n[A+4>>2]=0,n[A+8>>2]=0,n[A+12>>2]=0,x=5,I=C,x|0;e:do if((ot(E)|0)!=0&&(p=oe(s|0,a|0,52)|0,R()|0,p=p&15,(p|0)!=0)){u=1;t:for(;;){switch(x=oe(s|0,a|0,(15-u|0)*3|0)|0,R()|0,x&7){case 5:break t;case 0:break;default:{b=a;break e}}if(u>>>0<p>>>0)u=u+1|0;else{b=a;break e}}for(h=1,u=a;;){switch(a=(15-h|0)*3|0,l=le(7,0,a|0)|0,l=s&~l,f=u&~(R()|0),u=oe(s|0,u|0,a|0)|0,R()|0,u&7){case 1:{u=3;break}case 3:{u=2;break}case 2:{u=6;break}case 6:{u=4;break}case 4:{u=5;break}case 5:{u=1;break}default:u=u&7}if(s=le(u|0,0,a|0)|0,s=s|l,u=R()|0|f,h>>>0<p>>>0)h=h+1|0;else{b=u;break e}}}else b=a;while(!1);if(x=7696+(E*28|0)|0,n[A>>2]=n[x>>2],n[A+4>>2]=n[x+4>>2],n[A+8>>2]=n[x+8>>2],n[A+12>>2]=n[x+12>>2],!($o(s,b,A)|0))return x=0,I=C,x|0;if(x=A+4|0,n[S>>2]=n[x>>2],n[S+4>>2]=n[x+4>>2],n[S+8>>2]=n[x+8>>2],g=oe(s|0,b|0,52)|0,R()|0,v=g&15,g&1?(f=n[x>>2]|0,p=A+8|0,l=n[p>>2]|0,g=A+12|0,a=n[g>>2]|0,u=(l*3|0)+f|0,f=a+(f*3|0)|0,n[x>>2]=f,n[p>>2]=u,l=(a*3|0)+l|0,n[g>>2]=l,a=u-f|0,h=l-f|0,(f|0)<0&&(n[p>>2]=a,n[g>>2]=h,n[x>>2]=0,u=a,f=0,l=h),h=f-u|0,a=l-u|0,(u|0)<0?(n[x>>2]=h,n[g>>2]=a,n[p>>2]=0,u=0):(a=l,h=f),f=h-a|0,l=u-a|0,(a|0)<0?(n[x>>2]=f,n[p>>2]=l,n[g>>2]=0,a=0):(l=u,f=h),u=(l|0)<(f|0)?l:f,u=(a|0)<(u|0)?a:u,(u|0)>0&&(n[x>>2]=f-u,n[p>>2]=l-u,n[g>>2]=a-u),l=v+1|0):l=v,!(ot(E)|0))u=0;else{e:do if(!v)u=0;else for(a=1;;){if(u=oe(s|0,b|0,(15-a|0)*3|0)|0,R()|0,u=u&7,u|0)break e;if(a>>>0<v>>>0)a=a+1|0;else{u=0;break}}while(!1);u=(u|0)==4&1}if(!(kn(A,l,u,0)|0))(l|0)!=(v|0)&&(n[x>>2]=n[S>>2],n[x+4>>2]=n[S+4>>2],n[x+8>>2]=n[S+8>>2]);else{if(ot(E)|0)do;while((kn(A,l,0,0)|0)!=0);(l|0)!=(v|0)&&(p=A+12|0,s=n[p>>2]|0,u=(n[x>>2]|0)-s|0,h=A+8|0,s=(n[h>>2]|0)-s|0,a=wr(+((u<<1)+s|0)*.14285714285714285)|0,n[x>>2]=a,u=wr(+((s*3|0)-u|0)*.14285714285714285)|0,n[h>>2]=u,n[p>>2]=0,s=u-a|0,l=0-a|0,(a|0)<0?(n[h>>2]=s,n[p>>2]=l,n[x>>2]=0,u=s,a=0):l=0,f=a-u|0,s=l-u|0,(u|0)<0?(n[x>>2]=f,n[p>>2]=s,n[h>>2]=0,a=f,u=0):s=l,f=a-s|0,l=u-s|0,(s|0)<0?(n[x>>2]=f,n[h>>2]=l,n[p>>2]=0,a=f,s=0):l=u,u=(l|0)<(a|0)?l:a,u=(s|0)<(u|0)?s:u,(u|0)>0&&(n[x>>2]=a-u,n[h>>2]=l-u,n[p>>2]=s-u))}return x=0,I=C,x|0}function Fn(s,a,A){s=s|0,a=a|0,A=A|0;var u=0,l=0,f=0,h=0,p=0,g=0;return h=I,I=I+48|0,u=h+24|0,l=h,f=On(s,a,u)|0,f?(I=h,f|0):(f=oe(s|0,a|0,52)|0,R()|0,Vm(u,f&15,l),g=+Gr(+ +P[l+16>>3]),p=+Ft(+ +P[l+8>>3],+ +P[l>>3]),P[A>>3]=g,P[A+8>>3]=p,f=0,I=h,f|0)}function ln(s,a,A){s=s|0,a=a|0,A=A|0;var u=0,l=0,f=0,h=0,p=0;if(h=I,I=I+16|0,f=h,u=On(s,a,f)|0,u|0)return f=u,I=h,f|0;u=oe(s|0,a|0,45)|0,R()|0,u=(ot(u&127)|0)==0,l=oe(s|0,a|0,52)|0,R()|0,l=l&15;e:do if(!u){if(l|0)for(u=1;;){if(p=le(7,0,(15-u|0)*3|0)|0,!((p&s|0)==0&((R()|0)&a|0)==0))break e;if(u>>>0<l>>>0)u=u+1|0;else break}return jo(f,l,0,5,A),p=0,I=h,p|0}while(!1);return Go(f,l,0,6,A),p=0,I=h,p|0}function Jm(s,a,A){s=s|0,a=a|0,A=A|0;var u=0,l=0,f=0;if(l=oe(s|0,a|0,45)|0,R()|0,!(ot(l&127)|0))return l=2,n[A>>2]=l,0;if(l=oe(s|0,a|0,52)|0,R()|0,l=l&15,!l)return l=5,n[A>>2]=l,0;for(u=1;;){if(f=le(7,0,(15-u|0)*3|0)|0,!((f&s|0)==0&((R()|0)&a|0)==0)){u=2,s=6;break}if(u>>>0<l>>>0)u=u+1|0;else{u=5,s=6;break}}return(s|0)==6&&(n[A>>2]=u),0}function $0(s,a,A){s=s|0,a=a|0,A=A|0;var u=0,l=0,f=0,h=0,p=0,g=0,b=0,v=0,S=0;S=I,I=I+128|0,b=S+112|0,f=S+96|0,v=S,l=oe(s|0,a|0,52)|0,R()|0,p=l&15,n[b>>2]=p,h=oe(s|0,a|0,45)|0,R()|0,h=h&127;e:do if(ot(h)|0){if(p|0)for(u=1;;){if(g=le(7,0,(15-u|0)*3|0)|0,!((g&s|0)==0&((R()|0)&a|0)==0)){l=0;break e}if(u>>>0<p>>>0)u=u+1|0;else break}if(l&1)l=1;else return g=le(p+1|0,0,52)|0,v=R()|0|a&-15728641,b=le(7,0,(14-p|0)*3|0)|0,v=$0((g|s)&~b,v&~(R()|0),A)|0,I=S,v|0}else l=0;while(!1);if(u=On(s,a,f)|0,!u){l?(H0(f,b,v),g=5):(q0(f,b,v),g=6);e:do if(ot(h)|0)if(!p)s=5;else for(u=1;;){if(h=le(7,0,(15-u|0)*3|0)|0,!((h&s|0)==0&((R()|0)&a|0)==0)){s=2;break e}if(u>>>0<p>>>0)u=u+1|0;else{s=5;break}}else s=2;while(!1);Qr(A|0,-1,s<<2|0)|0;e:do if(l)for(f=0;;){if(h=v+(f<<4)|0,jm(h,n[b>>2]|0)|0,h=n[h>>2]|0,p=n[A>>2]|0,(p|0)==-1|(p|0)==(h|0))u=A;else{l=0;do{if(l=l+1|0,l>>>0>=s>>>0){u=1;break e}u=A+(l<<2)|0,p=n[u>>2]|0}while(!((p|0)==-1|(p|0)==(h|0)))}if(n[u>>2]=h,f=f+1|0,f>>>0>=g>>>0){u=0;break}}else for(f=0;;){if(h=v+(f<<4)|0,kn(h,n[b>>2]|0,0,1)|0,h=n[h>>2]|0,p=n[A>>2]|0,(p|0)==-1|(p|0)==(h|0))u=A;else{l=0;do{if(l=l+1|0,l>>>0>=s>>>0){u=1;break e}u=A+(l<<2)|0,p=n[u>>2]|0}while(!((p|0)==-1|(p|0)==(h|0)))}if(n[u>>2]=h,f=f+1|0,f>>>0>=g>>>0){u=0;break}}while(!1)}return v=u,I=S,v|0}function Zm(){return 12}function Xo(s,a){s=s|0,a=a|0;var A=0,u=0,l=0,f=0,h=0,p=0,g=0;if(s>>>0>15)return p=4,p|0;if(le(s|0,0,52)|0,p=R()|0|134225919,!s){A=0,u=0;do ot(u)|0&&(le(u|0,0,45)|0,h=p|(R()|0),s=a+(A<<3)|0,n[s>>2]=-1,n[s+4>>2]=h,A=A+1|0),u=u+1|0;while((u|0)!=122);return A=0,A|0}A=0,h=0;do{if(ot(h)|0){for(le(h|0,0,45)|0,u=1,l=-1,f=p|(R()|0);g=le(7,0,(15-u|0)*3|0)|0,l=l&~g,f=f&~(R()|0),(u|0)!=(s|0);)u=u+1|0;g=a+(A<<3)|0,n[g>>2]=l,n[g+4>>2]=f,A=A+1|0}h=h+1|0}while((h|0)!=122);return A=0,A|0}function eg(s,a,A,u){s=s|0,a=a|0,A=A|0,u=u|0;var l=0,f=0,h=0,p=0,g=0,b=0,v=0,S=0,E=0,x=0,C=0,k=0,D=0,G=0,L=0;if(L=I,I=I+16|0,D=L,G=oe(s|0,a|0,52)|0,R()|0,G=G&15,A>>>0>15)return G=4,I=L,G|0;if((G|0)<(A|0))return G=12,I=L,G|0;if((G|0)!=(A|0))if(f=le(A|0,0,52)|0,f=f|s,p=R()|0|a&-15728641,(G|0)>(A|0)){g=A;do k=le(7,0,(14-g|0)*3|0)|0,g=g+1|0,f=k|f,p=R()|0|p;while((g|0)<(G|0));k=f}else k=f;else k=s,p=a;C=oe(k|0,p|0,45)|0,R()|0;e:do if(ot(C&127)|0){if(g=oe(k|0,p|0,52)|0,R()|0,g=g&15,g|0)for(f=1;;){if(C=le(7,0,(15-f|0)*3|0)|0,!((C&k|0)==0&((R()|0)&p|0)==0)){b=33;break e}if(f>>>0<g>>>0)f=f+1|0;else break}if(C=u,n[C>>2]=0,n[C+4>>2]=0,(G|0)>(A|0)){for(C=a&-15728641,x=G;;){if(E=x,x=x+-1|0,x>>>0>15|(G|0)<(x|0)){b=19;break}if((G|0)!=(x|0))if(f=le(x|0,0,52)|0,f=f|s,g=R()|0|C,(G|0)<(E|0))S=f;else{b=x;do S=le(7,0,(14-b|0)*3|0)|0,b=b+1|0,f=S|f,g=R()|0|g;while((b|0)<(G|0));S=f}else S=s,g=a;if(v=oe(S|0,g|0,45)|0,R()|0,!(ot(v&127)|0))f=0;else{v=oe(S|0,g|0,52)|0,R()|0,v=v&15;t:do if(!v)f=0;else for(b=1;;){if(f=oe(S|0,g|0,(15-b|0)*3|0)|0,R()|0,f=f&7,f|0)break t;if(b>>>0<v>>>0)b=b+1|0;else{f=0;break}}while(!1);f=(f|0)==0&1}if(g=oe(s|0,a|0,(15-E|0)*3|0)|0,R()|0,g=g&7,(g|0)==7){l=5,b=42;break}if(f=(f|0)!=0,(g|0)==1&f){l=5,b=42;break}if(S=g+(((g|0)!=0&f)<<31>>31)|0,S|0&&(b=G-E|0,b=zr(7,0,b,((b|0)<0)<<31>>31)|0,v=R()|0,f?(f=At(b|0,v|0,5,0)|0,f=de(f|0,R()|0,-5,-1)|0,f=Hr(f|0,R()|0,6,0)|0,f=de(f|0,R()|0,1,0)|0,g=R()|0):(f=b,g=v),E=S+-1|0,E=At(b|0,v|0,E|0,((E|0)<0)<<31>>31|0)|0,E=de(f|0,g|0,E|0,R()|0)|0,S=R()|0,v=u,v=de(E|0,S|0,n[v>>2]|0,n[v+4>>2]|0)|0,S=R()|0,E=u,n[E>>2]=v,n[E+4>>2]=S),(x|0)<=(A|0)){b=37;break}}if((b|0)==19)ke(27634,27225,1407,27259);else if((b|0)==37){h=u,l=n[h+4>>2]|0,h=n[h>>2]|0;break}else if((b|0)==42)return I=L,l|0}else l=0,h=0}else b=33;while(!1);e:do if((b|0)==33)if(C=u,n[C>>2]=0,n[C+4>>2]=0,(G|0)>(A|0)){for(f=G;;){if(l=oe(s|0,a|0,(15-f|0)*3|0)|0,R()|0,l=l&7,(l|0)==7){l=5;break}if(h=G-f|0,h=zr(7,0,h,((h|0)<0)<<31>>31)|0,l=At(h|0,R()|0,l|0,0)|0,h=R()|0,C=u,h=de(n[C>>2]|0,n[C+4>>2]|0,l|0,h|0)|0,l=R()|0,C=u,n[C>>2]=h,n[C+4>>2]=l,f=f+-1|0,(f|0)<=(A|0))break e}return I=L,l|0}else l=0,h=0;while(!1);return Ti(k,p,G,D)|0&&ke(27634,27225,1367,27274),G=D,D=n[G+4>>2]|0,((l|0)>-1|(l|0)==-1&h>>>0>4294967295)&((D|0)>(l|0)|((D|0)==(l|0)?(n[G>>2]|0)>>>0>h>>>0:0))?(G=0,I=L,G|0):(ke(27634,27225,1447,27259),0)}function tg(s,a,A,u,l,f){s=s|0,a=a|0,A=A|0,u=u|0,l=l|0,f=f|0;var h=0,p=0,g=0,b=0,v=0,S=0,E=0,x=0,C=0,k=0;if(S=I,I=I+16|0,h=S,l>>>0>15)return f=4,I=S,f|0;if(p=oe(A|0,u|0,52)|0,R()|0,p=p&15,(p|0)>(l|0))return f=12,I=S,f|0;if(Ti(A,u,l,h)|0&&ke(27634,27225,1367,27274),v=h,b=n[v+4>>2]|0,!(((a|0)>-1|(a|0)==-1&s>>>0>4294967295)&((b|0)>(a|0)|((b|0)==(a|0)?(n[v>>2]|0)>>>0>s>>>0:0))))return f=2,I=S,f|0;v=l-p|0,l=le(l|0,0,52)|0,g=R()|0|u&-15728641,b=f,n[b>>2]=l|A,n[b+4>>2]=g,b=oe(A|0,u|0,45)|0,R()|0;e:do if(ot(b&127)|0){if(p|0)for(h=1;;){if(b=le(7,0,(15-h|0)*3|0)|0,!((b&A|0)==0&((R()|0)&u|0)==0))break e;if(h>>>0<p>>>0)h=h+1|0;else break}if((v|0)<1)return f=0,I=S,f|0;for(b=p^15,u=-1,g=1,h=1;;){p=v-g|0,p=zr(7,0,p,((p|0)<0)<<31>>31)|0,A=R()|0;do if(h)if(h=At(p|0,A|0,5,0)|0,h=de(h|0,R()|0,-5,-1)|0,h=Hr(h|0,R()|0,6,0)|0,l=R()|0,(a|0)>(l|0)|(a|0)==(l|0)&s>>>0>h>>>0){a=de(s|0,a|0,-1,-1)|0,a=yt(a|0,R()|0,h|0,l|0)|0,h=R()|0,E=f,C=n[E>>2]|0,E=n[E+4>>2]|0,k=(b+u|0)*3|0,x=le(7,0,k|0)|0,E=E&~(R()|0),u=Hr(a|0,h|0,p|0,A|0)|0,s=R()|0,l=de(u|0,s|0,2,0)|0,k=le(l|0,R()|0,k|0)|0,E=R()|0|E,l=f,n[l>>2]=k|C&~x,n[l+4>>2]=E,s=At(u|0,s|0,p|0,A|0)|0,s=yt(a|0,h|0,s|0,R()|0)|0,h=0,a=R()|0;break}else{k=f,x=n[k>>2]|0,k=n[k+4>>2]|0,C=le(7,0,(b+u|0)*3|0)|0,k=k&~(R()|0),h=f,n[h>>2]=x&~C,n[h+4>>2]=k,h=1;break}else x=f,l=n[x>>2]|0,x=n[x+4>>2]|0,u=(b+u|0)*3|0,E=le(7,0,u|0)|0,x=x&~(R()|0),k=Hr(s|0,a|0,p|0,A|0)|0,h=R()|0,u=le(k|0,h|0,u|0)|0,x=R()|0|x,C=f,n[C>>2]=u|l&~E,n[C+4>>2]=x,h=At(k|0,h|0,p|0,A|0)|0,s=yt(s|0,a|0,h|0,R()|0)|0,h=0,a=R()|0;while(!1);if((v|0)>(g|0))u=~g,g=g+1|0;else{a=0;break}}return I=S,a|0}while(!1);if((v|0)<1)return k=0,I=S,k|0;for(l=p^15,h=1;;)if(C=v-h|0,C=zr(7,0,C,((C|0)<0)<<31>>31)|0,k=R()|0,g=f,A=n[g>>2]|0,g=n[g+4>>2]|0,p=(l-h|0)*3|0,u=le(7,0,p|0)|0,g=g&~(R()|0),E=Hr(s|0,a|0,C|0,k|0)|0,x=R()|0,p=le(E|0,x|0,p|0)|0,g=R()|0|g,b=f,n[b>>2]=p|A&~u,n[b+4>>2]=g,k=At(E|0,x|0,C|0,k|0)|0,s=yt(s|0,a|0,k|0,R()|0)|0,a=R()|0,(v|0)<=(h|0)){a=0;break}else h=h+1|0;return I=S,a|0}function Yo(s,a,A,u){s=s|0,a=a|0,A=A|0,u=u|0;var l=0,f=0,h=0;l=oe(a|0,A|0,52)|0,R()|0,l=l&15,(a|0)==0&(A|0)==0|((u|0)>15|(l|0)>(u|0))?(f=-1,a=-1,A=0,l=0):(a=W0(a,A,l+1|0,u)|0,h=(R()|0)&-15728641,A=le(u|0,0,52)|0,A=a|A,h=h|(R()|0),a=(Ye(A,h)|0)==0,f=l,a=a?-1:u,l=h),h=s,n[h>>2]=A,n[h+4>>2]=l,n[s+8>>2]=f,n[s+12>>2]=a}function X0(s,a,A,u){s=s|0,a=a|0,A=A|0,u=u|0;var l=0,f=0;if(l=oe(s|0,a|0,52)|0,R()|0,l=l&15,f=u+8|0,n[f>>2]=l,(s|0)==0&(a|0)==0|((A|0)>15|(l|0)>(A|0))){A=u,n[A>>2]=0,n[A+4>>2]=0,n[f>>2]=-1,n[u+12>>2]=-1;return}if(s=W0(s,a,l+1|0,A)|0,f=(R()|0)&-15728641,l=le(A|0,0,52)|0,l=s|l,f=f|(R()|0),s=u,n[s>>2]=l,n[s+4>>2]=f,s=u+12|0,Ye(l,f)|0){n[s>>2]=A;return}else{n[s>>2]=-1;return}}function Jo(s){s=s|0;var a=0,A=0,u=0,l=0,f=0,h=0,p=0,g=0,b=0;if(A=s,a=n[A>>2]|0,A=n[A+4>>2]|0,!((a|0)==0&(A|0)==0)&&(u=oe(a|0,A|0,52)|0,R()|0,u=u&15,p=le(1,0,(u^15)*3|0)|0,a=de(p|0,R()|0,a|0,A|0)|0,A=R()|0,p=s,n[p>>2]=a,n[p+4>>2]=A,p=s+8|0,h=n[p>>2]|0,!((u|0)<(h|0)))){for(g=s+12|0,f=u;;){if((f|0)==(h|0)){u=5;break}if(b=(f|0)==(n[g>>2]|0),l=(15-f|0)*3|0,u=oe(a|0,A|0,l|0)|0,R()|0,u=u&7,b&((u|0)==1&!0)){u=7;break}if(!((u|0)==7&!0)){u=10;break}if(b=le(1,0,l|0)|0,a=de(a|0,A|0,b|0,R()|0)|0,A=R()|0,b=s,n[b>>2]=a,n[b+4>>2]=A,(f|0)>(h|0))f=f+-1|0;else{u=10;break}}if((u|0)==5){b=s,n[b>>2]=0,n[b+4>>2]=0,n[p>>2]=-1,n[g>>2]=-1;return}else if((u|0)==7){h=le(1,0,l|0)|0,h=de(a|0,A|0,h|0,R()|0)|0,p=R()|0,b=s,n[b>>2]=h,n[b+4>>2]=p,n[g>>2]=f+-1;return}else if((u|0)==10)return}}function vi(s){s=+s;var a=0;return a=s<0?s+6.283185307179586:s,+(s>=6.283185307179586?a+-6.283185307179586:a)}function Zt(s,a){switch(s=+s,a=a|0,a|0){case 1:{s=s<0?s+6.283185307179586:s;break}case 2:{s=s>0?s+-6.283185307179586:s;break}}return+s}function rg(s,a){s=s|0,a=a|0;var A=0,u=0,l=0,f=0;return l=+P[a>>3],u=+P[s>>3],f=+nt(+((l-u)*.5)),A=+nt(+((+P[a+8>>3]-+P[s+8>>3])*.5)),A=f*f+A*(+tt(+l)*+tt(+u)*A),+(+Ft(+ +Qe(+A),+ +Qe(+(1-A)))*2)}function yi(s,a){s=s|0,a=a|0;var A=0,u=0,l=0,f=0;return l=+P[a>>3],u=+P[s>>3],f=+nt(+((l-u)*.5)),A=+nt(+((+P[a+8>>3]-+P[s+8>>3])*.5)),A=f*f+A*(+tt(+l)*+tt(+u)*A),+(+Ft(+ +Qe(+A),+ +Qe(+(1-A)))*2*6371.007180918475)}function ng(s,a){s=s|0,a=a|0;var A=0,u=0,l=0,f=0;return l=+P[a>>3],u=+P[s>>3],f=+nt(+((l-u)*.5)),A=+nt(+((+P[a+8>>3]-+P[s+8>>3])*.5)),A=f*f+A*(+tt(+l)*+tt(+u)*A),+(+Ft(+ +Qe(+A),+ +Qe(+(1-A)))*2*6371.007180918475*1e3)}function Y0(s,a){return s=s|0,a=a|0,s>>>0>15?(a=4,a|0):(P[a>>3]=+P[20624+(s<<3)>>3],a=0,a|0)}function ig(s,a){return s=s|0,a=a|0,s>>>0>15?(a=4,a|0):(P[a>>3]=+P[20752+(s<<3)>>3],a=0,a|0)}function sg(s,a){return s=s|0,a=a|0,s>>>0>15?(a=4,a|0):(P[a>>3]=+P[20880+(s<<3)>>3],a=0,a|0)}function og(s,a){return s=s|0,a=a|0,s>>>0>15?(a=4,a|0):(P[a>>3]=+P[21008+(s<<3)>>3],a=0,a|0)}function is(s,a){s=s|0,a=a|0;var A=0;return s>>>0>15?(a=4,a|0):(A=zr(7,0,s,((s|0)<0)<<31>>31)|0,A=At(A|0,R()|0,120,0)|0,s=R()|0,n[a>>2]=A|2,n[a+4>>2]=s,a=0,a|0)}function ag(s,a,A){s=s|0,a=a|0,A=A|0;var u=0,l=0,f=0,h=0,p=0,g=0,b=0,v=0;if(p=I,I=I+176|0,h=p,s=bi(s,a,h)|0,s|0)return h=s,I=p,h|0;if(P[A>>3]=0,s=n[h>>2]|0,(s|0)<=1)return h=0,I=p,h|0;a=s+-1|0,s=0,u=+P[h+8>>3],l=+P[h+16>>3],f=0;do s=s+1|0,b=u,u=+P[h+8+(s<<4)>>3],v=+nt(+((u-b)*.5)),g=l,l=+P[h+8+(s<<4)+8>>3],g=+nt(+((l-g)*.5)),g=v*v+g*(+tt(+u)*+tt(+b)*g),f=f+ +Ft(+ +Qe(+g),+ +Qe(+(1-g)))*2;while((s|0)<(a|0));return P[A>>3]=f,h=0,I=p,h|0}function Ag(s,a,A){s=s|0,a=a|0,A=A|0;var u=0,l=0,f=0,h=0,p=0,g=0,b=0,v=0;if(p=I,I=I+176|0,h=p,s=bi(s,a,h)|0,s|0)return h=s,f=+P[A>>3],f=f*6371.007180918475,P[A>>3]=f,I=p,h|0;if(P[A>>3]=0,s=n[h>>2]|0,(s|0)<=1)return h=0,f=0,f=f*6371.007180918475,P[A>>3]=f,I=p,h|0;a=s+-1|0,s=0,u=+P[h+8>>3],l=+P[h+16>>3],f=0;do s=s+1|0,b=u,u=+P[h+8+(s<<4)>>3],v=+nt(+((u-b)*.5)),g=l,l=+P[h+8+(s<<4)+8>>3],g=+nt(+((l-g)*.5)),g=v*v+g*(+tt(+b)*+tt(+u)*g),f=f+ +Ft(+ +Qe(+g),+ +Qe(+(1-g)))*2;while((s|0)!=(a|0));return P[A>>3]=f,h=0,v=f,v=v*6371.007180918475,P[A>>3]=v,I=p,h|0}function cg(s,a,A){s=s|0,a=a|0,A=A|0;var u=0,l=0,f=0,h=0,p=0,g=0,b=0,v=0;if(p=I,I=I+176|0,h=p,s=bi(s,a,h)|0,s|0)return h=s,f=+P[A>>3],f=f*6371.007180918475,f=f*1e3,P[A>>3]=f,I=p,h|0;if(P[A>>3]=0,s=n[h>>2]|0,(s|0)<=1)return h=0,f=0,f=f*6371.007180918475,f=f*1e3,P[A>>3]=f,I=p,h|0;a=s+-1|0,s=0,u=+P[h+8>>3],l=+P[h+16>>3],f=0;do s=s+1|0,b=u,u=+P[h+8+(s<<4)>>3],v=+nt(+((u-b)*.5)),g=l,l=+P[h+8+(s<<4)+8>>3],g=+nt(+((l-g)*.5)),g=v*v+g*(+tt(+b)*+tt(+u)*g),f=f+ +Ft(+ +Qe(+g),+ +Qe(+(1-g)))*2;while((s|0)!=(a|0));return P[A>>3]=f,h=0,v=f,v=v*6371.007180918475,v=v*1e3,P[A>>3]=v,I=p,h|0}function lg(s){s=s|0;var a=0,A=0,u=0,l=0,f=0,h=0,p=0;if(s)for(f=s+4|0,h=s+8|0,u=1,l=s;;){if(a=n[l>>2]|0,a|0)do{if(A=n[a>>2]|0,A|0)do p=A,A=n[A+16>>2]|0,ge(p);while((A|0)!=0);p=a,a=n[a+8>>2]|0,ge(p)}while((a|0)!=0);if(a=l,l=n[l+8>>2]|0,u?(n[s>>2]=0,n[f>>2]=0,n[h>>2]=0):ge(a),l)u=0;else break}}function ug(s,a){s=s|0,a=a|0;var A=0,u=0,l=0,f=0,h=0,p=0,g=0,b=0,v=0,S=0,E=0,x=0,C=0,k=0,D=0,G=0;if(n[a>>2]=0,D=a+4|0,n[D>>2]=0,G=a+8|0,n[G>>2]=0,k=n[s>>2]|0,(k|0)<=0)return a=0,a|0;C=s+4|0,s=a,x=0;e:for(;;){if(x){if(A=Bt(1,12)|0,!A){A=5;break}n[s+8>>2]=A,s=A}if(g=n[C>>2]|0,b=Bt(1,12)|0,!b){s=13,A=37;break}if(E=s+4|0,u=n[E>>2]|0,n[((u|0)==0?s:u+8|0)>>2]=b,n[E>>2]=b,u=n[g+(x<<4)>>2]|0,(u|0)<3){s=1,A=37;break}l=g+(x<<4)+4|0,f=b+4|0,A=0,h=0;do{if(p=h,h=at(24)|0,!h){s=13,A=37;break e}oa(h|0,(n[l>>2]|0)+(A<<4)|0,16)|0,n[h+16>>2]=0,p?n[p+16>>2]=h:n[b>>2]=h,n[f>>2]=h,A=A+1|0}while((A|0)<(u|0));if(S=n[g+(x<<4)+8>>2]|0,(S|0)>0){v=g+(x<<4)+12|0,g=0;do{if(u=n[v>>2]|0,A=b,b=Bt(1,12)|0,!b){s=13,A=37;break e}if(n[A+8>>2]=b,n[E>>2]=b,p=n[u+(g<<3)>>2]|0,(p|0)<3){s=1,A=37;break e}u=u+(g<<3)+4|0,l=b+4|0,A=0,f=0;do{if(h=f,f=at(24)|0,!f){s=13,A=37;break e}oa(f|0,(n[u>>2]|0)+(A<<4)|0,16)|0,n[f+16>>2]=0,h?n[h+16>>2]=f:n[b>>2]=f,n[l>>2]=f,A=A+1|0}while((A|0)<(p|0));g=g+1|0}while((g|0)<(S|0))}if(x=x+1|0,(x|0)>=(k|0)){s=0,A=50;break}}if((A|0)==5){if(!a)return a=13,a|0;for(u=1,l=a;;){if(s=n[l>>2]|0,s|0)do{if(A=n[s>>2]|0,A|0)do k=A,A=n[A+16>>2]|0,ge(k);while((A|0)!=0);k=s,s=n[s+8>>2]|0,ge(k)}while((s|0)!=0);if(s=l,l=n[l+8>>2]|0,u?(n[a>>2]=0,n[D>>2]=0,n[G>>2]=0):ge(s),l)u=0;else{s=13;break}}return s|0}else if((A|0)==37){if(!a)return a=s,a|0;for(l=1,f=a;;){if(A=n[f>>2]|0,A|0)do{if(u=n[A>>2]|0,u|0)do k=u,u=n[u+16>>2]|0,ge(k);while((u|0)!=0);k=A,A=n[A+8>>2]|0,ge(k)}while((A|0)!=0);if(A=f,f=n[f+8>>2]|0,l?(n[a>>2]=0,n[D>>2]=0,n[G>>2]=0):ge(A),f)l=0;else break}return s|0}else if((A|0)==50)return s|0;return 0}function Si(s,a,A,u,l){s=s|0,a=a|0,A=A|0,u=u|0,l=l|0;var f=0,h=0,p=0,g=0,b=0,v=0,S=0,E=0,x=0,C=0,k=0,D=0,G=0,L=0;if(G=I,I=I+16|0,D=G,v=oe(s|0,a|0,52)|0,R()|0,v=v&15,x=oe(A|0,u|0,52)|0,R()|0,(v|0)!=(x&15|0))return D=12,I=G,D|0;if(g=oe(s|0,a|0,45)|0,R()|0,g=g&127,b=oe(A|0,u|0,45)|0,R()|0,b=b&127,g>>>0>121|b>>>0>121)return D=5,I=G,D|0;if(x=(g|0)!=(b|0),x){if(h=Do(g,b)|0,(h|0)==7)return D=1,I=G,D|0;p=Do(b,g)|0,(p|0)==7?ke(27291,27315,164,27325):(k=h,f=p)}else k=0,f=0;S=ot(g)|0,E=ot(b)|0,n[D>>2]=0,n[D+4>>2]=0,n[D+8>>2]=0,n[D+12>>2]=0;do if(k){b=n[4272+(g*28|0)+(k<<2)>>2]|0,h=(b|0)>0;e:do if(E)if(h)for(g=0,p=A,h=u;;){switch(p=Xm(p,h)|0,h=R()|0,f|0){case 5:case 1:{f=3;break}case 3:{f=2;break}case 2:{f=6;break}case 6:{f=4;break}case 4:{f=5;break}}if(g=g+1|0,(g|0)==(b|0)){b=f,g=p,p=h;break e}}else b=f,g=A,p=u;else if(h)for(g=0,p=A,h=u;;){switch(p=Wo(p,h)|0,h=R()|0,f|0){case 1:{f=3;break}case 3:{f=2;break}case 2:{f=6;break}case 6:{f=4;break}case 4:{f=5;break}case 5:{f=1;break}}if(g=g+1|0,(g|0)==(b|0)){b=f,g=p,p=h;break e}}else b=f,g=A,p=u;while(!1);if($o(g,p,D)|0,x||ke(27340,27315,194,27325),h=(S|0)!=0,f=(E|0)!=0,h&f&&ke(27367,27315,195,27325),h){if(f=qt(s,a)|0,(f|0)==7){f=5;break}if(ne[21968+(f*7|0)+k>>0]|0){f=1;break}E=n[21136+(f*28|0)+(k<<2)>>2]|0,x=E}else if(f){if(f=qt(g,p)|0,(f|0)==7){f=5;break}if(ne[21968+(f*7|0)+b>>0]|0){f=1;break}x=0,E=n[21136+(b*28|0)+(f<<2)>>2]|0}else x=0,E=0;if((x|E|0)>=0){if((E|0)>0){A=D+4|0,u=D+8|0,S=D+12|0,b=0,p=n[A>>2]|0,h=n[u>>2]|0,f=n[S>>2]|0;do C=h+p|0,a=(C|0)<0,L=a?C:0,h=f+h-L|0,s=(h|0)<0,g=s?h:0,p=f+p-L-g|0,L=(p|0)<0,f=L?0:p,p=L?p:0,h=(s?0:h)-p|0,p=(a?0:C)-g-p|0,g=(h|0)<(p|0)?h:p,g=(f|0)<(g|0)?f:g,(g|0)>0&&(p=p-g|0,h=h-g|0,f=f-g|0),b=b+1|0;while((b|0)!=(E|0));n[A>>2]=p,n[u>>2]=h,n[S>>2]=f}if((k+-1|0)>>>0<6?(f=n[22032+(k*12|0)>>2]|0,p=n[22032+(k*12|0)+4>>2]|0,L=n[22032+(k*12|0)+8>>2]|0,h=(p|0)<(f|0)?p:f,h=(L|0)<(h|0)?L:h,h=(h|0)>0?h:0,f=f-h|0,p=p-h|0,h=L-h|0):(f=0,p=0,h=0),v)for(;;)if(g=f*3|0,b=p*3|0,A=h*3|0,ar(v)|0?(a=g+p|0,s=(a|0)<0,L=b+h-(s?a:0)|0,C=(L|0)<0,p=f+A-(s?a:0)-(C?L:0)|0,h=(p|0)<0,k=h?0:p,g=(C?0:L)-(h?p:0)|0,p=(s?0:a)-(C?L:0)-(h?p:0)|0,h=(g|0)<(p|0)?g:p,h=(k|0)<(h|0)?k:h,L=(h|0)>0,f=L?h:0,g=g-(L?h:0)|0,h=k-(L?h:0)|0):(C=g+h|0,a=(C|0)<0,L=b+f-(a?C:0)|0,f=(L|0)<0,p=A+p-(a?C:0)-(f?L:0)|0,h=(p|0)<0,k=h?0:p,g=(f?0:L)-(h?p:0)|0,p=(a?0:C)-(f?L:0)-(h?p:0)|0,h=(g|0)<(p|0)?g:p,h=(k|0)<(h|0)?k:h,L=(h|0)>0,f=L?h:0,g=g-(L?h:0)|0,h=k-(L?h:0)|0),f=p-f|0,(v|0)>1)v=v+-1|0,p=g;else{p=g;break}if((x|0)>0){g=0;do a=f+p|0,s=(a|0)<0,L=p+h-(s?a:0)|0,C=(L|0)<0,k=f+h-(s?a:0)-(C?L:0)|0,f=(k|0)<0,h=f?0:k,p=(C?0:L)-(f?k:0)|0,k=(s?0:a)-(C?L:0)-(f?k:0)|0,f=(p|0)<(k|0)?p:k,f=(h|0)<(f|0)?h:f,L=(f|0)>0,h=h-(L?f:0)|0,p=p-(L?f:0)|0,f=k-(L?f:0)|0,g=g+1|0;while((g|0)!=(x|0))}A=D+4|0,v=D+8|0,k=n[v>>2]|0,u=D+12|0,L=n[u>>2]|0,g=(n[A>>2]|0)+f|0,n[A>>2]=g,p=k+p|0,n[v>>2]=p,f=L+h|0,n[u>>2]=f,h=p-g|0,(g|0)<0?(f=f-g|0,n[v>>2]=h,n[u>>2]=f,n[A>>2]=0,p=0):(h=p,p=g),(h|0)<0&&(p=p-h|0,n[A>>2]=p,f=f-h|0,n[u>>2]=f,n[v>>2]=0,h=0),b=p-f|0,g=h-f|0,(f|0)<0?(n[A>>2]=b,n[v>>2]=g,n[u>>2]=0,p=b,f=0):g=h,h=(g|0)<(p|0)?g:p,h=(f|0)<(h|0)?f:h,(h|0)>0&&(n[A>>2]=p-h,n[v>>2]=g-h,n[u>>2]=f-h),C=77}else f=5}else if($o(A,u,D)|0,(S|0)!=0&(E|0)!=0)if((b|0)!=(g|0)&&ke(27398,27315,264,27325),h=qt(s,a)|0,f=qt(A,u)|0,(h|0)==7|(f|0)==7)f=5;else if(ne[21968+(h*7|0)+f>>0]|0)f=1;else if(A=n[21136+(h*28|0)+(f<<2)>>2]|0,(A|0)>0){v=D+4|0,u=D+8|0,S=D+12|0,b=0,p=n[v>>2]|0,h=n[u>>2]|0,f=n[S>>2]|0;do k=h+p|0,C=(k|0)<0,s=C?k:0,h=f+h-s|0,a=(h|0)<0,g=a?h:0,p=f+p-s-g|0,s=(p|0)<0,f=s?0:p,p=s?p:0,h=(a?0:h)-p|0,p=(C?0:k)-g-p|0,g=(h|0)<(p|0)?h:p,g=(f|0)<(g|0)?f:g,(g|0)>0&&(p=p-g|0,h=h-g|0,f=f-g|0),b=b+1|0;while((b|0)!=(A|0));n[v>>2]=p,n[u>>2]=h,n[S>>2]=f,C=77}else C=77;else C=77;while(!1);return(C|0)==77&&(f=D+4|0,n[l>>2]=n[f>>2],n[l+4>>2]=n[f+4>>2],n[l+8>>2]=n[f+8>>2],f=0),L=f,I=G,L|0}function J0(s,a,A,u){s=s|0,a=a|0,A=A|0,u=u|0;var l=0,f=0,h=0,p=0,g=0,b=0,v=0,S=0,E=0,x=0,C=0,k=0,D=0,G=0,L=0,H=0,V=0,ee=0,ie=0,K=0,z=0;if(f=oe(s|0,a|0,52)|0,R()|0,f=f&15,V=oe(s|0,a|0,45)|0,R()|0,V=V&127,V>>>0>121)return u=5,u|0;if(D=ot(V)|0,le(f|0,0,52)|0,p=R()|0|134225919,h=u,n[h>>2]=-1,n[h+4>>2]=p,h=n[A>>2]|0,p=n[A+4>>2]|0,A=n[A+8>>2]|0,!f){a=(h|0)<0,G=a?h:0,H=p-G|0,D=(H|0)<0,G=(D?0-H|0:0)+(A-G)|0,A=(G|0)<0,l=A?0:G,G=A?G:0,A=(D?0:H)-G|0,G=(a?0:h)-(D?H:0)-G|0,H=(A|0)<(G|0)?A:G,H=(l|0)<(H|0)?l:H,H=(H|0)>0?H:0,l=l-H|0,A=A-H|0;e:do switch(G-H|0){case 0:switch(A|0){case 0:if(l){l=(l|0)==1?1:7,L=11;break e}else{l=0;break e}case 1:if(l){l=(l|0)==1?3:7,L=11;break e}else{l=2;break e}default:return u=1,u|0}case 1:switch(A|0){case 0:if(l){l=(l|0)==1?5:7,L=11;break e}else{l=4;break e}case 1:{if(l)l=1;else{l=6;break e}return l|0}default:return u=1,u|0}default:return u=1,u|0}while(!1);return(L|0)==11&&(l|0)==7||(l=Bo(V,l)|0,(l|0)==127)?(u=1,u|0):(H=le(l|0,0,45)|0,V=R()|0,L=u,V=n[L+4>>2]&-1040385|V,n[u>>2]=n[L>>2]|H,n[u+4>>2]=V,u=0,u|0)}for(;;){if(k=f,f=f+-1|0,C=h-A|0,x=p-A|0,g=C>>>0>715827881|x>>>0>715827881,ar(k)|0){if(g){if(v=(C|0)>0,S=2147483647-C|0,E=-2147483648-C|0,v?(S|0)<(C|0):(E|0)>(C|0)){l=1,L=107;break}if(z=C<<1,v?(2147483647-z|0)<(C|0):(-2147483648-z|0)>(C|0)){l=1,L=107;break}if((x|0)>0?(2147483647-x|0)<(x|0):(-2147483648-x|0)>(x|0)){l=1,L=107;break}if(g=C*3|0,b=x<<1,(v?(S|0)<(b|0):(E|0)>(b|0))||((C|0)>-1?(g|-2147483648|0)>=(x|0):(g^-2147483648|0)<(x|0))){l=1,L=107;break}}else g=C*3|0,b=x<<1;if(S=wr(+(g-x|0)*.14285714285714285)|0,v=wr(+(b+C|0)*.14285714285714285)|0,b=(v|0)<(S|0),g=b?S:v,b=b?v:S,(b|0)<0){if((b|0)==-2147483648||((g|0)>0?(2147483647-g|0)<(b|0):(-2147483648-g|0)>(b|0))){L=24;break}if((g|0)>-1?(g|-2147483648|0)>=(b|0):(g^-2147483648|0)<(b|0)){L=24;break}}E=(S|0)<0,x=v-(E?S:0)|0,ie=(x|0)<0,ee=(E?0-S|0:0)-(ie?x:0)|0,C=(ee|0)<0,E=(E?0:S)-(ie?x:0)-(C?ee:0)|0,x=(ie?0:x)-(C?ee:0)|0,ee=C?0:ee,C=(x|0)<(E|0)?x:E,C=(ee|0)<(C|0)?ee:C,ie=(C|0)>0,E=E-(ie?C:0)|0,x=x-(ie?C:0)|0,C=ee-(ie?C:0)|0,ie=(E*3|0)+x|0,ee=(ie|0)<0,z=(x*3|0)+C-(ee?ie:0)|0,g=(z|0)<0,S=(C*3|0)+E-(ee?ie:0)-(g?z:0)|0,v=(S|0)<0,K=v?0:S,b=(g?0:z)-(v?S:0)|0,S=(ee?0:ie)-(g?z:0)-(v?S:0)|0,v=(b|0)<(S|0)?b:S,v=(K|0)<(v|0)?K:v,z=(v|0)>0,g=z?v:0,b=b-(z?v:0)|0,v=K-(z?v:0)|0}else{if(g){if(b=(C|0)>0,b?(2147483647-C|0)<(C|0):(-2147483648-C|0)>(C|0)){l=1,L=107;break}if(g=C<<1,v=(x|0)>0,v?(2147483647-x|0)<(x|0):(-2147483648-x|0)>(x|0)){l=1,L=107;break}if(E=x<<1,v?(2147483647-E|0)<(x|0):(-2147483648-E|0)>(x|0)){l=1,L=107;break}if(b?(2147483647-g|0)<(x|0):(-2147483648-g|0)>(x|0)){l=1,L=107;break}if(b=x*3|0,(x|0)>-1?(b|-2147483648|0)>=(C|0):(b^-2147483648|0)<(C|0)){l=1,L=107;break}}else g=C<<1,b=x*3|0;if(S=wr(+(g+x|0)*.14285714285714285)|0,v=wr(+(b-C|0)*.14285714285714285)|0,b=(v|0)<(S|0),g=b?S:v,b=b?v:S,(b|0)<0){if((b|0)==-2147483648||((g|0)>0?(2147483647-g|0)<(b|0):(-2147483648-g|0)>(b|0))){L=36;break}if((g|0)>-1?(g|-2147483648|0)>=(b|0):(g^-2147483648|0)<(b|0)){L=36;break}}E=(S|0)<0,x=v-(E?S:0)|0,K=(x|0)<0,z=(E?0-S|0:0)-(K?x:0)|0,C=(z|0)<0,E=(E?0:S)-(K?x:0)-(C?z:0)|0,x=(K?0:x)-(C?z:0)|0,z=C?0:z,C=(x|0)<(E|0)?x:E,C=(z|0)<(C|0)?z:C,K=(C|0)>0,E=E-(K?C:0)|0,x=x-(K?C:0)|0,C=z-(K?C:0)|0,K=(E*3|0)+C|0,z=(K|0)<0,ee=(x*3|0)+E-(z?K:0)|0,g=(ee|0)<0,S=(C*3|0)+x-(z?K:0)-(g?ee:0)|0,v=(S|0)<0,ie=v?0:S,b=(g?0:ee)-(v?S:0)|0,S=(z?0:K)-(g?ee:0)-(v?S:0)|0,v=(b|0)<(S|0)?b:S,v=(ie|0)<(v|0)?ie:v,ee=(v|0)>0,g=ee?v:0,b=b-(ee?v:0)|0,v=ie-(ee?v:0)|0}g=h+(g-S)|0,K=(g|0)<0,b=p-b-(K?g:0)|0,S=(b|0)<0,ee=A-v+(K?0-g|0:0)+(S?0-b|0:0)|0,h=(ee|0)<0,v=h?0:ee,z=(S?0:b)-(h?ee:0)|0,ee=(K?0:g)-(S?b:0)-(h?ee:0)|0,h=(z|0)<(ee|0)?z:ee,h=(v|0)<(h|0)?v:h,A=(h|0)>0,ee=ee-(A?h:0)|0,b=u,S=n[b>>2]|0,b=n[b+4>>2]|0,p=(15-k|0)*3|0,g=le(7,0,p|0)|0,g=S&~g,b=b&~(R()|0),S=(ee|0)<0,K=S?ee:0,z=z-(A?h:0)-K|0,ie=(z|0)<0,K=(ie?0-z|0:0)+(v-(A?h:0)-K)|0,h=(K|0)<0,A=h?0:K,K=h?K:0,h=(ie?0:z)-K|0,K=(S?0:ee)-(ie?z:0)-K|0,z=(h|0)<(K|0)?h:K,z=(A|0)<(z|0)?A:z,z=(z|0)>0?z:0,A=A-z|0,h=h-z|0;e:do switch(K-z|0){case 0:switch(h|0){case 0:{A=(A|0)==0?0:(A|0)==1?1:7;break e}case 1:{A=(A|0)==0?2:(A|0)==1?3:7;break e}default:{L=45;break e}}case 1:switch(h|0){case 0:{A=(A|0)==0?4:(A|0)==1?5:7;break e}case 1:if(A){L=45;break e}else{A=6;break e}default:{L=45;break e}}default:L=45}while(!1);if((L|0)==45&&(L=0,A=7),ie=le(A|0,0,p|0)|0,K=R()|0|b,z=u,n[z>>2]=ie|g,n[z+4>>2]=K,(k|0)<=1){L=47;break}else h=E,p=x,A=C}if((L|0)==24)ke(27634,27425,416,27447);else if((L|0)==36)ke(27634,27425,464,27461);else if((L|0)==47){if((E|0)>1|(x|0)>1|(C|0)>1)return z=1,z|0;ee=(E|0)<0,K=ee?E:0,z=x-K|0,ie=(z|0)<0,K=(ie?0-z|0:0)+(C-K)|0,f=(K|0)<0,A=f?0:K,K=f?K:0,f=(ie?0:z)-K|0,K=(ee?0:E)-(ie?z:0)-K|0,z=(f|0)<(K|0)?f:K,z=(A|0)<(z|0)?A:z,z=(z|0)>0?z:0,A=A-z|0,f=f-z|0;e:do switch(K-z|0){case 0:switch(f|0){case 0:{f=(A|0)==0?0:(A|0)==1?1:7;break e}case 1:{f=(A|0)==0?2:(A|0)==1?3:7;break e}default:{L=55;break e}}case 1:switch(f|0){case 0:{f=(A|0)==0?4:(A|0)==1?5:7;break e}case 1:if(A){L=55;break e}else{f=6;break e}default:{L=55;break e}}default:L=55}while(!1);(L|0)==55&&(f=7),p=Bo(V,f)|0,(p|0)==127?b=0:b=ot(p)|0;e:do if(f){if(D){if(A=qt(s,a)|0,(A|0)==7)return z=5,z|0;h=n[21344+(A*28|0)+(f<<2)>>2]|0;t:do if((h|0)>0)for(A=f,f=0;;){switch(A|0){case 1:{A=5;break}case 5:{A=4;break}case 4:{A=6;break}case 6:{A=2;break}case 2:{A=3;break}case 3:{A=1;break}}if(f=f+1|0,(f|0)==(h|0))break t}else A=f;while(!1);if((A|0)==1)return z=9,z|0;f=Bo(V,A)|0,(f|0)==127&&ke(27476,27315,415,27506),ot(f)|0?ke(27521,27315,416,27506):(l=f,H=h,G=A)}else l=p,H=0,G=f;if(g=n[4272+(V*28|0)+(G<<2)>>2]|0,(g|0)<=-1&&ke(27552,27315,423,27506),!b){if((H|0)<0)return z=5,z|0;if(H|0){h=u,A=0,f=n[h>>2]|0,h=n[h+4>>2]|0;do f=cn(f,h)|0,h=R()|0,z=u,n[z>>2]=f,n[z+4>>2]=h,A=A+1|0;while((A|0)<(H|0))}if((g|0)<=0){L=104;break}for(h=u,A=0,f=n[h>>2]|0,h=n[h+4>>2]|0;;)if(f=cn(f,h)|0,h=R()|0,z=u,n[z>>2]=f,n[z+4>>2]=h,A=A+1|0,(A|0)==(g|0)){L=104;break e}}if(p=Do(l,V)|0,(p|0)==7&&ke(27291,27315,432,27506),A=u,f=n[A>>2]|0,A=n[A+4>>2]|0,(g|0)>0){h=0;do f=cn(f,A)|0,A=R()|0,z=u,n[z>>2]=f,n[z+4>>2]=A,h=h+1|0;while((h|0)!=(g|0))}if(A=qt(f,A)|0,(A|0)==7&&ke(27634,27315,444,27506),f=Fo(l)|0,f=n[(f?21760:21552)+(p*28|0)+(A<<2)>>2]|0,(f|0)<0&&ke(27634,27315,458,27506),!f)L=104;else{p=u,A=0,h=n[p>>2]|0,p=n[p+4>>2]|0;do h=Qo(h,p)|0,p=R()|0,z=u,n[z>>2]=h,n[z+4>>2]=p,A=A+1|0;while((A|0)<(f|0));L=104}}else if((D|0)!=0&(b|0)!=0){if(l=qt(s,a)|0,A=u,A=qt(n[A>>2]|0,n[A+4>>2]|0)|0,(l|0)==7|(A|0)==7||(A=n[21344+(l*28|0)+(A<<2)>>2]|0,(A|0)<0))return z=5,z|0;if(!A)l=p,L=105;else{h=u,l=0,f=n[h>>2]|0,h=n[h+4>>2]|0;do f=cn(f,h)|0,h=R()|0,z=u,n[z>>2]=f,n[z+4>>2]=h,l=l+1|0;while((l|0)<(A|0));l=p,L=104}}else l=p,L=104;while(!1);return(L|0)==104&&b&&(L=105),(L|0)==105&&(z=u,(qt(n[z>>2]|0,n[z+4>>2]|0)|0)==1)?(z=9,z|0):(K=u,ee=n[K>>2]|0,K=n[K+4>>2]&-1040385,ie=le(l|0,0,45)|0,K=K|(R()|0),z=u,n[z>>2]=ee|ie,n[z+4>>2]=K,z=0,z|0)}else if((L|0)==107)return l|0;return 0}function fg(s,a,A,u,l,f){s=s|0,a=a|0,A=A|0,u=u|0,l=l|0,f=f|0;var h=0,p=0;return p=I,I=I+16|0,h=p,l|0?(h=15,I=p,h|0):(s=Si(s,a,A,u,h)|0,s||(l=n[h+4>>2]|0,s=n[h+8>>2]|0,n[f>>2]=(n[h>>2]|0)-s,n[f+4>>2]=l-s,s=0),h=s,I=p,h|0)}function hg(s,a,A,u,l){s=s|0,a=a|0,A=A|0,u=u|0,l=l|0;var f=0,h=0,p=0,g=0,b=0,v=0,S=0;return S=I,I=I+16|0,v=S,u|0?(v=15,I=S,v|0):(p=n[A>>2]|0,h=n[A+4>>2]|0,n[v>>2]=p,g=v+4|0,n[g>>2]=h,b=v+8|0,n[b>>2]=0,A=(h|0)<(p|0),u=A?p:h,A=A?h:p,(A|0)<0?!((A|0)==-2147483648||((u|0)>0?(2147483647-u|0)<(A|0):(-2147483648-u|0)>(A|0)))&&!((u|0)>-1?(u|-2147483648|0)>=(A|0):(u^-2147483648|0)<(A|0))?f=5:u=1:f=5,(f|0)==5&&(u=h-p|0,f=0-p|0,(p|0)<0?(n[g>>2]=u,n[b>>2]=f,n[v>>2]=0,p=0):(u=h,f=0),h=p-u|0,A=f-u|0,(u|0)<0?(n[v>>2]=h,n[b>>2]=A,n[g>>2]=0,p=h,u=0):A=f,h=p-A|0,f=u-A|0,(A|0)<0?(n[v>>2]=h,n[g>>2]=f,n[b>>2]=0,A=0):(f=u,h=p),u=(f|0)<(h|0)?f:h,u=(A|0)<(u|0)?A:u,(u|0)>0&&(n[v>>2]=h-u,n[g>>2]=f-u,n[b>>2]=A-u),u=J0(s,a,v,l)|0),v=u,I=S,v|0)}function Zo(s,a,A,u,l){s=s|0,a=a|0,A=A|0,u=u|0,l=l|0;var f=0,h=0,p=0,g=0,b=0;return g=I,I=I+32|0,h=g+12|0,p=g,f=Si(s,a,s,a,h)|0,f|0?(p=f,I=g,p|0):(s=Si(s,a,A,u,p)|0,s|0?(p=s,I=g,p|0):(s=(n[h>>2]|0)-(n[p>>2]|0)|0,b=(s|0)<0,u=b?0-s|0:0,A=u+((n[h+4>>2]|0)-(n[p+4>>2]|0))|0,a=(A|0)<0,u=(n[h+8>>2]|0)-(n[p+8>>2]|0)+u+(a?0-A|0:0)|0,f=(u|0)<0,h=f?0:u,u=f?u:0,f=(a?0:A)-u|0,u=(b?0:s)-(a?A:0)-u|0,p=(f|0)<(u|0)?f:u,p=(h|0)<(p|0)?h:p,p=(p|0)>0?p:0,h=h-p|0,f=f-p|0,p=u-p|0,p=(p|0)>-1?p:0-p|0,f=(f|0)>-1?f:0-f|0,h=(h|0)>-1?h:0-h|0,h=(f|0)>(h|0)?f:h,h=(p|0)>(h|0)?p:h,p=l,n[p>>2]=h,n[p+4>>2]=((h|0)<0)<<31>>31,p=0,I=g,p|0))}function dg(s,a,A,u,l){s=s|0,a=a|0,A=A|0,u=u|0,l=l|0;var f=0,h=0;return h=I,I=I+16|0,f=h,s=Zo(s,a,A,u,f)|0,s|0?(f=s,I=h,f|0):(A=f,A=de(n[A>>2]|0,n[A+4>>2]|0,1,0)|0,u=R()|0,f=l,n[f>>2]=A,n[f+4>>2]=u,f=0,I=h,f|0)}function pg(s,a,A,u,l){s=s|0,a=a|0,A=A|0,u=u|0,l=l|0;var f=0,h=0,p=0,g=0;return g=I,I=I+16|0,f=g,h=Zo(s,a,A,u,f)|0,h|0?(l=h,I=g,l|0):(h=f,f=n[h>>2]|0,h=n[h+4>>2]|0,(f|0)==0&(h|0)==0?(n[l>>2]=s,n[l+4>>2]=a,l=0,I=g,l|0):(p=Z0(s,a,A,u,f,h,l,0,0,1,0)|0,p?(l=(Z0(A,u,s,a,f,h,l,f,h,-1,-1)|0)==0,l=l?0:p,I=g,l|0):(l=0,I=g,l|0)))}function Z0(s,a,A,u,l,f,h,p,g,b,v){s=s|0,a=a|0,A=A|0,u=u|0,l=l|0,f=f|0,h=h|0,p=p|0,g=g|0,b=b|0,v=v|0;var S=0,E=0,x=0,C=0,k=0,D=0,G=0,L=0,H=0,V=0,ee=0,ie=0,K=0,z=0,pe=0,re=0,Te=0,Ae=0;if(Te=I,I=I+48|0,S=Te+24|0,E=Te+12|0,re=Te,n[S>>2]=0,n[S+4>>2]=0,n[S+8>>2]=0,n[E>>2]=0,n[E+4>>2]=0,n[E+8>>2]=0,Si(s,a,s,a,S)|0&&ke(27634,27315,696,27575),Si(s,a,A,u,E)|0&&ke(27634,27315,701,27575),k=S+8|0,u=n[k>>2]|0,A=u-(n[S>>2]|0)|0,n[S>>2]=A,pe=S+4|0,u=(n[pe>>2]|0)-u|0,n[pe>>2]=u,pe=u+A|0,S=0-pe|0,n[k>>2]=S,k=E+8|0,L=n[k>>2]|0,G=L-(n[E>>2]|0)|0,n[E>>2]=G,z=E+4|0,L=(n[z>>2]|0)-L|0,n[z>>2]=L,z=L+G|0,n[k>>2]=0-z,K=1/(+(l>>>0)+4294967296*+(f|0)),ee=K*+(G-A|0),ie=K*+(L-u|0),K=K*+(pe-z|0),n[re>>2]=A,z=re+4|0,n[z>>2]=u,pe=re+8|0,n[pe>>2]=S,(f|0)<0)return b=0,I=Te,b|0;for(V=+(A|0),H=+(u|0),D=+(S|0),G=0,L=0;;){if(C=+(G>>>0)+4294967296*+(L|0),Ae=ee*C+V,x=ie*C+H,C=K*C+D,u=~~+fs(+Ae),S=~~+fs(+x),A=~~+fs(+C),Ae=+et(+(+(u|0)-Ae)),x=+et(+(+(S|0)-x)),C=+et(+(+(A|0)-C)),Ae>x&Ae>C?(E=A+S|0,u=0-E|0):(E=0-u|0,x>C&&(S=E-A|0)),n[z>>2]=S,n[re>>2]=E,n[pe>>2]=0,A=u+S|0,(u|0)>0?(n[z>>2]=A,n[pe>>2]=u,n[re>>2]=0,E=0):(A=S,u=0),(A|0)<0?(S=E-A|0,n[re>>2]=S,u=u-A|0,n[pe>>2]=u,n[z>>2]=0,E=S-u|0,A=0-u|0,(u|0)<0?(n[re>>2]=E,n[z>>2]=A,n[pe>>2]=0,k=A,u=0):(k=0,E=S)):k=A,A=(k|0)<(E|0)?k:E,A=(u|0)<(A|0)?u:A,(A|0)>0&&(n[re>>2]=E-A,n[z>>2]=k-A,n[pe>>2]=u-A),A=At(G|0,L|0,b|0,v|0)|0,A=de(A|0,R()|0,p|0,g|0)|0,R()|0,A=J0(s,a,re,h+(A<<3)|0)|0,A|0){u=20;break}if(k=G,G=de(G|0,L|0,1,0)|0,E=L,L=R()|0,!((E|0)<(f|0)|(E|0)==(f|0)&k>>>0<l>>>0)){A=0,u=20;break}}return(u|0)==20?(I=Te,A|0):0}function zr(s,a,A,u){s=s|0,a=a|0,A=A|0,u=u|0;var l=0,f=0,h=0;if((A|0)==0&(u|0)==0)return l=0,f=1,Re(l|0),f|0;f=s,l=a,s=1,a=0;do h=(A&1|0)==0&!0,s=At((h?1:f)|0,(h?0:l)|0,s|0,a|0)|0,a=R()|0,A=hc(A|0,u|0,1)|0,u=R()|0,f=At(f|0,l|0,f|0,l|0)|0,l=R()|0;while(!((A|0)==0&(u|0)==0));return Re(a|0),s|0}function ea(s,a,A,u){s=s|0,a=a|0,A=A|0,u=u|0;var l=0,f=0,h=0,p=0,g=0,b=0,v=0;p=I,I=I+16|0,f=p,h=oe(s|0,a|0,52)|0,R()|0,h=h&15;do if(h){if(l=Fn(s,a,f)|0,!l){b=+P[f>>3],g=1/+tt(+b),v=+P[26032+(h<<3)>>3],P[A>>3]=b+v,P[A+8>>3]=b-v,b=+P[f+8>>3],g=v*g,P[A+16>>3]=g+b,P[A+24>>3]=b-g;break}return h=l,I=p,h|0}else{if(l=oe(s|0,a|0,45)|0,R()|0,l=l&127,l>>>0>121)return h=5,I=p,h|0;f=22128+(l<<5)|0,n[A>>2]=n[f>>2],n[A+4>>2]=n[f+4>>2],n[A+8>>2]=n[f+8>>2],n[A+12>>2]=n[f+12>>2],n[A+16>>2]=n[f+16>>2],n[A+20>>2]=n[f+20>>2],n[A+24>>2]=n[f+24>>2],n[A+28>>2]=n[f+28>>2];break}while(!1);return Im(A,u?1.4:1.1),u=26160+(h<<3)|0,(n[u>>2]|0)==(s|0)&&(n[u+4>>2]|0)==(a|0)&&(P[A>>3]=1.5707963267948966),h=26288+(h<<3)|0,(n[h>>2]|0)==(s|0)&&(n[h+4>>2]|0)==(a|0)&&(P[A+8>>3]=-1.5707963267948966),+P[A>>3]!=1.5707963267948966&&+P[A+8>>3]!=-1.5707963267948966?(h=0,I=p,h|0):(P[A+16>>3]=3.141592653589793,P[A+24>>3]=-3.141592653589793,h=0,I=p,h|0)}function mg(s,a,A,u){s=s|0,a=a|0,A=A|0,u=u|0;var l=0,f=0,h=0,p=0,g=0,b=0,v=0;b=I,I=I+48|0,h=b+32|0,f=b+40|0,p=b,Ho(h,0,0,0),g=n[h>>2]|0,h=n[h+4>>2]|0;do if(A>>>0<=15){if(l=Ei(u)|0,l|0){u=p,n[u>>2]=0,n[u+4>>2]=0,n[p+8>>2]=l,n[p+12>>2]=-1,u=p+16|0,g=p+29|0,n[u>>2]=0,n[u+4>>2]=0,n[u+8>>2]=0,ne[u+12>>0]=0,ne[g>>0]=ne[f>>0]|0,ne[g+1>>0]=ne[f+1>>0]|0,ne[g+2>>0]=ne[f+2>>0]|0;break}if(l=Bt((n[a+8>>2]|0)+1|0,32)|0,l){ta(a,l),v=p,n[v>>2]=g,n[v+4>>2]=h,n[p+8>>2]=0,n[p+12>>2]=A,n[p+16>>2]=u,n[p+20>>2]=a,n[p+24>>2]=l,ne[p+28>>0]=0,g=p+29|0,ne[g>>0]=ne[f>>0]|0,ne[g+1>>0]=ne[f+1>>0]|0,ne[g+2>>0]=ne[f+2>>0]|0;break}else{u=p,n[u>>2]=0,n[u+4>>2]=0,n[p+8>>2]=13,n[p+12>>2]=-1,u=p+16|0,g=p+29|0,n[u>>2]=0,n[u+4>>2]=0,n[u+8>>2]=0,ne[u+12>>0]=0,ne[g>>0]=ne[f>>0]|0,ne[g+1>>0]=ne[f+1>>0]|0,ne[g+2>>0]=ne[f+2>>0]|0;break}}else g=p,n[g>>2]=0,n[g+4>>2]=0,n[p+8>>2]=4,n[p+12>>2]=-1,g=p+16|0,v=p+29|0,n[g>>2]=0,n[g+4>>2]=0,n[g+8>>2]=0,ne[g+12>>0]=0,ne[v>>0]=ne[f>>0]|0,ne[v+1>>0]=ne[f+1>>0]|0,ne[v+2>>0]=ne[f+2>>0]|0;while(!1);ss(p),n[s>>2]=n[p>>2],n[s+4>>2]=n[p+4>>2],n[s+8>>2]=n[p+8>>2],n[s+12>>2]=n[p+12>>2],n[s+16>>2]=n[p+16>>2],n[s+20>>2]=n[p+20>>2],n[s+24>>2]=n[p+24>>2],n[s+28>>2]=n[p+28>>2],I=b}function ss(s){s=s|0;var a=0,A=0,u=0,l=0,f=0,h=0,p=0,g=0,b=0,v=0,S=0,E=0,x=0,C=0,k=0,D=0,G=0,L=0,H=0,V=0;if(V=I,I=I+336|0,x=V+168|0,C=V,u=s,A=n[u>>2]|0,u=n[u+4>>2]|0,(A|0)==0&(u|0)==0){I=V;return}if(a=s+28|0,ne[a>>0]|0?(A=ec(A,u)|0,u=R()|0):ne[a>>0]=1,H=s+20|0,!(n[n[H>>2]>>2]|0)){a=s+24|0,A=n[a>>2]|0,A|0&&ge(A),L=s,n[L>>2]=0,n[L+4>>2]=0,n[s+8>>2]=0,n[H>>2]=0,n[s+12>>2]=-1,n[s+16>>2]=0,n[a>>2]=0,I=V;return}L=s+16|0,a=n[L>>2]|0,l=a&15;e:do if((A|0)==0&(u|0)==0)G=s+24|0;else{k=s+12|0,S=(l|0)==3,v=a&255,g=(l|1|0)==3,E=s+24|0,b=(l+-1|0)>>>0<3,h=(l|2|0)==3,p=C+8|0;t:for(;;){if(f=oe(A|0,u|0,52)|0,R()|0,f=f&15,(f|0)==(n[k>>2]|0)){switch(v&15){case 0:case 2:case 3:{if(l=Fn(A,u,x)|0,l|0){D=15;break t}if(ra(n[H>>2]|0,n[E>>2]|0,x)|0){D=19;break t}break}}if(g&&(l=n[(n[H>>2]|0)+4>>2]|0,n[x>>2]=n[l>>2],n[x+4>>2]=n[l+4>>2],n[x+8>>2]=n[l+8>>2],n[x+12>>2]=n[l+12>>2],D0(26896,x)|0)){if(Ko(n[(n[H>>2]|0)+4>>2]|0,f,C)|0){D=25;break}if(l=C,(n[l>>2]|0)==(A|0)&&(n[l+4>>2]|0)==(u|0)){D=29;break}}if(b){if(l=ln(A,u,x)|0,l|0){D=32;break}if(ea(A,u,C,0)|0){D=36;break}if(h&&rc(n[H>>2]|0,n[E>>2]|0,x,C)|0){D=42;break}if(g&&nc(n[H>>2]|0,n[E>>2]|0,x,C)|0){D=42;break}}if(S){if(a=ea(A,u,x,1)|0,l=n[E>>2]|0,a|0){D=45;break}if(Uo(l,x)|0){if(V0(C,x),U0(x,n[E>>2]|0)|0){D=53;break}if(ra(n[H>>2]|0,n[E>>2]|0,p)|0){D=53;break}if(nc(n[H>>2]|0,n[E>>2]|0,C,x)|0){D=53;break}}}}do if((f|0)<(n[k>>2]|0)){if(a=ea(A,u,x,1)|0,l=n[E>>2]|0,a|0){D=58;break t}if(!(Uo(l,x)|0)){D=73;break}if(U0(n[E>>2]|0,x)|0&&(V0(C,x),rc(n[H>>2]|0,n[E>>2]|0,C,x)|0)){D=65;break t}if(A=K0(A,u,f+1|0,C)|0,A|0){D=67;break t}u=C,A=n[u>>2]|0,u=n[u+4>>2]|0}else D=73;while(!1);if((D|0)==73&&(D=0,A=ec(A,u)|0,u=R()|0),(A|0)==0&(u|0)==0){G=E;break e}}switch(D|0){case 15:{a=n[E>>2]|0,a|0&&ge(a),D=s,n[D>>2]=0,n[D+4>>2]=0,n[H>>2]=0,n[k>>2]=-1,n[L>>2]=0,n[E>>2]=0,n[s+8>>2]=l,D=20;break}case 19:{n[s>>2]=A,n[s+4>>2]=u,D=20;break}case 25:{ke(27634,27600,470,27611);break}case 29:{n[s>>2]=A,n[s+4>>2]=u,I=V;return}case 32:{a=n[E>>2]|0,a|0&&ge(a),G=s,n[G>>2]=0,n[G+4>>2]=0,n[H>>2]=0,n[k>>2]=-1,n[L>>2]=0,n[E>>2]=0,n[s+8>>2]=l,I=V;return}case 36:{ke(27634,27600,493,27611);break}case 42:{n[s>>2]=A,n[s+4>>2]=u,I=V;return}case 45:{l|0&&ge(l),D=s,n[D>>2]=0,n[D+4>>2]=0,n[H>>2]=0,n[k>>2]=-1,n[L>>2]=0,n[E>>2]=0,n[s+8>>2]=a,D=55;break}case 53:{n[s>>2]=A,n[s+4>>2]=u,D=55;break}case 58:{l|0&&ge(l),D=s,n[D>>2]=0,n[D+4>>2]=0,n[H>>2]=0,n[k>>2]=-1,n[L>>2]=0,n[E>>2]=0,n[s+8>>2]=a,D=71;break}case 65:{n[s>>2]=A,n[s+4>>2]=u,D=71;break}case 67:{a=n[E>>2]|0,a|0&&ge(a),G=s,n[G>>2]=0,n[G+4>>2]=0,n[H>>2]=0,n[k>>2]=-1,n[L>>2]=0,n[E>>2]=0,n[s+8>>2]=A,I=V;return}}if((D|0)==20){I=V;return}else if((D|0)==55){I=V;return}else if((D|0)==71){I=V;return}}while(!1);a=n[G>>2]|0,a|0&&ge(a),D=s,n[D>>2]=0,n[D+4>>2]=0,n[s+8>>2]=0,n[H>>2]=0,n[s+12>>2]=-1,n[L>>2]=0,n[G>>2]=0,I=V}function ec(s,a){s=s|0,a=a|0;var A=0,u=0,l=0,f=0,h=0,p=0,g=0,b=0,v=0,S=0;S=I,I=I+16|0,v=S,u=oe(s|0,a|0,52)|0,R()|0,u=u&15,A=oe(s|0,a|0,45)|0,R()|0;do if(u){for(;A=le(u+4095|0,0,52)|0,l=R()|0|a&-15728641,f=(15-u|0)*3|0,h=le(7,0,f|0)|0,p=R()|0,A=A|s|h,l=l|p,g=oe(s|0,a|0,f|0)|0,R()|0,g=g&7,u=u+-1|0,!(g>>>0<6);)if(u)a=l,s=A;else{b=4;break}if((b|0)==4){A=oe(A|0,l|0,45)|0,R()|0;break}return v=(g|0)==0&(Ye(A,l)|0)!=0,v=le((v?2:1)+g|0,0,f|0)|0,b=R()|0|a&~p,v=v|s&~h,Re(b|0),I=S,v|0}while(!1);return A=A&127,A>>>0>120?(b=0,v=0,Re(b|0),I=S,v|0):(Ho(v,0,A+1|0,0),b=n[v+4>>2]|0,v=n[v>>2]|0,Re(b|0),I=S,v|0)}function gg(s,a,A,u,l,f){s=s|0,a=a|0,A=A|0,u=u|0,l=l|0,f=f|0;var h=0,p=0,g=0,b=0,v=0,S=0,E=0,x=0,C=0,k=0,D=0;D=I,I=I+160|0,S=D+80|0,p=D+64|0,E=D+112|0,k=D,mg(S,s,a,A),b=S,Yo(p,n[b>>2]|0,n[b+4>>2]|0,a),b=p,g=n[b>>2]|0,b=n[b+4>>2]|0,h=n[S+8>>2]|0,x=E+4|0,n[x>>2]=n[S>>2],n[x+4>>2]=n[S+4>>2],n[x+8>>2]=n[S+8>>2],n[x+12>>2]=n[S+12>>2],n[x+16>>2]=n[S+16>>2],n[x+20>>2]=n[S+20>>2],n[x+24>>2]=n[S+24>>2],n[x+28>>2]=n[S+28>>2],x=k,n[x>>2]=g,n[x+4>>2]=b,x=k+8|0,n[x>>2]=h,s=k+12|0,a=E,A=s+36|0;do n[s>>2]=n[a>>2],s=s+4|0,a=a+4|0;while((s|0)<(A|0));if(E=k+48|0,n[E>>2]=n[p>>2],n[E+4>>2]=n[p+4>>2],n[E+8>>2]=n[p+8>>2],n[E+12>>2]=n[p+12>>2],(g|0)==0&(b|0)==0)return k=h,I=D,k|0;A=k+16|0,v=k+24|0,S=k+28|0,h=0,p=0,a=g,s=b;do{if(!((h|0)<(l|0)|(h|0)==(l|0)&p>>>0<u>>>0)){C=4;break}if(b=p,p=de(p|0,h|0,1,0)|0,h=R()|0,b=f+(b<<3)|0,n[b>>2]=a,n[b+4>>2]=s,Jo(E),s=E,a=n[s>>2]|0,s=n[s+4>>2]|0,(a|0)==0&(s|0)==0){if(ss(A),a=A,s=n[a>>2]|0,a=n[a+4>>2]|0,(s|0)==0&(a|0)==0){C=10;break}X0(s,a,n[S>>2]|0,E),s=E,a=n[s>>2]|0,s=n[s+4>>2]|0}b=k,n[b>>2]=a,n[b+4>>2]=s}while(!((a|0)==0&(s|0)==0));return(C|0)==4?(s=k+40|0,a=n[s>>2]|0,a|0&&ge(a),C=k+16|0,n[C>>2]=0,n[C+4>>2]=0,n[v>>2]=0,n[k+36>>2]=0,n[S>>2]=-1,n[k+32>>2]=0,n[s>>2]=0,X0(0,0,0,E),n[k>>2]=0,n[k+4>>2]=0,n[x>>2]=0,k=14,I=D,k|0):((C|0)==10&&(n[k>>2]=0,n[k+4>>2]=0,n[x>>2]=n[v>>2]),k=n[x>>2]|0,I=D,k|0)}function bg(s,a,A,u){s=s|0,a=a|0,A=A|0,u=u|0;var l=0,f=0,h=0,p=0,g=0,b=0,v=0,S=0,E=0,x=0;if(S=I,I=I+48|0,g=S+32|0,p=S+40|0,b=S,!(n[s>>2]|0))return v=u,n[v>>2]=0,n[v+4>>2]=0,v=0,I=S,v|0;Ho(g,0,0,0),h=g,l=n[h>>2]|0,h=n[h+4>>2]|0;do if(a>>>0>15)v=b,n[v>>2]=0,n[v+4>>2]=0,n[b+8>>2]=4,n[b+12>>2]=-1,v=b+16|0,A=b+29|0,n[v>>2]=0,n[v+4>>2]=0,n[v+8>>2]=0,ne[v+12>>0]=0,ne[A>>0]=ne[p>>0]|0,ne[A+1>>0]=ne[p+1>>0]|0,ne[A+2>>0]=ne[p+2>>0]|0,A=4,v=9;else{if(A=Ei(A)|0,A|0){g=b,n[g>>2]=0,n[g+4>>2]=0,n[b+8>>2]=A,n[b+12>>2]=-1,g=b+16|0,v=b+29|0,n[g>>2]=0,n[g+4>>2]=0,n[g+8>>2]=0,ne[g+12>>0]=0,ne[v>>0]=ne[p>>0]|0,ne[v+1>>0]=ne[p+1>>0]|0,ne[v+2>>0]=ne[p+2>>0]|0,v=9;break}if(A=Bt((n[s+8>>2]|0)+1|0,32)|0,!A){v=b,n[v>>2]=0,n[v+4>>2]=0,n[b+8>>2]=13,n[b+12>>2]=-1,v=b+16|0,A=b+29|0,n[v>>2]=0,n[v+4>>2]=0,n[v+8>>2]=0,ne[v+12>>0]=0,ne[A>>0]=ne[p>>0]|0,ne[A+1>>0]=ne[p+1>>0]|0,ne[A+2>>0]=ne[p+2>>0]|0,A=13,v=9;break}ta(s,A),x=b,n[x>>2]=l,n[x+4>>2]=h,h=b+8|0,n[h>>2]=0,n[b+12>>2]=a,n[b+20>>2]=s,n[b+24>>2]=A,ne[b+28>>0]=0,l=b+29|0,ne[l>>0]=ne[p>>0]|0,ne[l+1>>0]=ne[p+1>>0]|0,ne[l+2>>0]=ne[p+2>>0]|0,n[b+16>>2]=3,E=+xm(A),E=E*+wm(A),f=+et(+ +P[A>>3]),f=E/+tt(+ +us(+f,+ +et(+ +P[A+8>>3])))*6371.007180918475*6371.007180918475,l=b+12|0,A=n[l>>2]|0;e:do if((A|0)>0)do{if(Y0(A+-1|0,g)|0,!(f/+P[g>>3]>10))break e;x=n[l>>2]|0,A=x+-1|0,n[l>>2]=A}while((x|0)>1);while(!1);if(ss(b),l=u,n[l>>2]=0,n[l+4>>2]=0,l=b,A=n[l>>2]|0,l=n[l+4>>2]|0,!((A|0)==0&(l|0)==0))do Ti(A,l,a,g)|0,p=g,s=u,p=de(n[s>>2]|0,n[s+4>>2]|0,n[p>>2]|0,n[p+4>>2]|0)|0,s=R()|0,x=u,n[x>>2]=p,n[x+4>>2]=s,ss(b),x=b,A=n[x>>2]|0,l=n[x+4>>2]|0;while(!((A|0)==0&(l|0)==0));A=n[h>>2]|0}while(!1);return x=A,I=S,x|0}function wi(s,a,A){s=s|0,a=a|0,A=A|0;var u=0,l=0,f=0,h=0,p=0,g=0,b=0,v=0,S=0,E=0;if(!(D0(a,A)|0)||(a=Em(a)|0,u=+P[A>>3],l=+P[A+8>>3],l=a&l<0?l+6.283185307179586:l,E=n[s>>2]|0,(E|0)<=0))return E=0,E|0;if(S=n[s+4>>2]|0,a){a=0,v=l,A=-1,s=0;e:for(;;){for(b=s;h=+P[S+(b<<4)>>3],l=+P[S+(b<<4)+8>>3],s=(A+2|0)%(E|0)|0,f=+P[S+(s<<4)>>3],p=+P[S+(s<<4)+8>>3],h>f?(g=h,h=p):(g=f,f=h,h=l,l=p),u=u==f|u==g?u+2220446049250313e-31:u,!!(u<f|u>g);)if(A=b+1|0,(A|0)>=(E|0)){A=22;break e}else s=b,b=A,A=s;if(p=h<0?h+6.283185307179586:h,h=l<0?l+6.283185307179586:l,v=p==v|h==v?v+-2220446049250313e-31:v,g=p+(h-p)*((u-f)/(g-f)),(g<0?g+6.283185307179586:g)>v&&(a=a^1),s=b+1|0,(s|0)>=(E|0)){A=22;break}else A=b}if((A|0)==22)return a|0}else{a=0,v=l,A=-1,s=0;e:for(;;){for(b=s;h=+P[S+(b<<4)>>3],l=+P[S+(b<<4)+8>>3],s=(A+2|0)%(E|0)|0,f=+P[S+(s<<4)>>3],p=+P[S+(s<<4)+8>>3],h>f?(g=h,h=p):(g=f,f=h,h=l,l=p),u=u==f|u==g?u+2220446049250313e-31:u,!!(u<f|u>g);)if(A=b+1|0,(A|0)>=(E|0)){A=22;break e}else s=b,b=A,A=s;if(v=h==v|l==v?v+-2220446049250313e-31:v,h+(l-h)*((u-f)/(g-f))>v&&(a=a^1),s=b+1|0,(s|0)>=(E|0)){A=22;break}else A=b}if((A|0)==22)return a|0}return 0}function tc(s,a){s=s|0,a=a|0;var A=0,u=0,l=0,f=0,h=0,p=0,g=0,b=0,v=0,S=0,E=0,x=0,C=0,k=0,D=0,G=0,L=0;if(C=n[s>>2]|0,!C){n[a>>2]=0,n[a+4>>2]=0,n[a+8>>2]=0,n[a+12>>2]=0,n[a+16>>2]=0,n[a+20>>2]=0,n[a+24>>2]=0,n[a+28>>2]=0;return}if(k=a+8|0,P[k>>3]=17976931348623157e292,D=a+24|0,P[D>>3]=17976931348623157e292,P[a>>3]=-17976931348623157e292,G=a+16|0,P[G>>3]=-17976931348623157e292,!((C|0)<=0)){for(E=n[s+4>>2]|0,b=17976931348623157e292,v=-17976931348623157e292,S=0,s=-1,f=17976931348623157e292,h=17976931348623157e292,g=-17976931348623157e292,u=-17976931348623157e292,x=0;A=+P[E+(x<<4)>>3],p=+P[E+(x<<4)+8>>3],s=s+2|0,l=+P[E+(((s|0)==(C|0)?0:s)<<4)+8>>3],A<f&&(P[k>>3]=A,f=A),p<h&&(P[D>>3]=p,h=p),A>g?P[a>>3]=A:A=g,p>u&&(P[G>>3]=p,u=p),b=p>0&p<b?p:b,v=p<0&p>v?p:v,S=S|+et(+(p-l))>3.141592653589793,s=x+1|0,(s|0)!=(C|0);)L=x,g=A,x=s,s=L;S&&(P[G>>3]=v,P[D>>3]=b)}}function Ei(s){return s=s|0,(s>>>0<4?0:15)|0}function ta(s,a){s=s|0,a=a|0;var A=0,u=0,l=0,f=0,h=0,p=0,g=0,b=0,v=0,S=0,E=0,x=0,C=0,k=0,D=0,G=0,L=0,H=0,V=0,ee=0,ie=0,K=0;if(C=n[s>>2]|0,C){if(k=a+8|0,P[k>>3]=17976931348623157e292,D=a+24|0,P[D>>3]=17976931348623157e292,P[a>>3]=-17976931348623157e292,G=a+16|0,P[G>>3]=-17976931348623157e292,(C|0)>0){for(l=n[s+4>>2]|0,E=17976931348623157e292,x=-17976931348623157e292,u=0,A=-1,g=17976931348623157e292,b=17976931348623157e292,S=-17976931348623157e292,h=-17976931348623157e292,L=0;f=+P[l+(L<<4)>>3],v=+P[l+(L<<4)+8>>3],ie=A+2|0,p=+P[l+(((ie|0)==(C|0)?0:ie)<<4)+8>>3],f<g&&(P[k>>3]=f,g=f),v<b&&(P[D>>3]=v,b=v),f>S?P[a>>3]=f:f=S,v>h&&(P[G>>3]=v,h=v),E=v>0&v<E?v:E,x=v<0&v>x?v:x,u=u|+et(+(v-p))>3.141592653589793,A=L+1|0,(A|0)!=(C|0);)ie=L,S=f,L=A,A=ie;u&&(P[G>>3]=x,P[D>>3]=E)}}else n[a>>2]=0,n[a+4>>2]=0,n[a+8>>2]=0,n[a+12>>2]=0,n[a+16>>2]=0,n[a+20>>2]=0,n[a+24>>2]=0,n[a+28>>2]=0;if(ie=s+8|0,A=n[ie>>2]|0,!((A|0)<=0)){ee=s+12|0,V=0;do if(l=n[ee>>2]|0,u=V,V=V+1|0,D=a+(V<<5)|0,G=n[l+(u<<3)>>2]|0,G){if(L=a+(V<<5)+8|0,P[L>>3]=17976931348623157e292,s=a+(V<<5)+24|0,P[s>>3]=17976931348623157e292,P[D>>3]=-17976931348623157e292,H=a+(V<<5)+16|0,P[H>>3]=-17976931348623157e292,(G|0)>0){for(C=n[l+(u<<3)+4>>2]|0,E=17976931348623157e292,x=-17976931348623157e292,l=0,u=-1,k=0,g=17976931348623157e292,b=17976931348623157e292,v=-17976931348623157e292,h=-17976931348623157e292;f=+P[C+(k<<4)>>3],S=+P[C+(k<<4)+8>>3],u=u+2|0,p=+P[C+(((u|0)==(G|0)?0:u)<<4)+8>>3],f<g&&(P[L>>3]=f,g=f),S<b&&(P[s>>3]=S,b=S),f>v?P[D>>3]=f:f=v,S>h&&(P[H>>3]=S,h=S),E=S>0&S<E?S:E,x=S<0&S>x?S:x,l=l|+et(+(S-p))>3.141592653589793,u=k+1|0,(u|0)!=(G|0);)K=k,k=u,v=f,u=K;l&&(P[H>>3]=x,P[s>>3]=E)}}else n[D>>2]=0,n[D+4>>2]=0,n[D+8>>2]=0,n[D+12>>2]=0,n[D+16>>2]=0,n[D+20>>2]=0,n[D+24>>2]=0,n[D+28>>2]=0,A=n[ie>>2]|0;while((V|0)<(A|0))}}function ra(s,a,A){s=s|0,a=a|0,A=A|0;var u=0,l=0,f=0;if(!(wi(s,a,A)|0))return l=0,l|0;if(l=s+8|0,(n[l>>2]|0)<=0)return l=1,l|0;for(u=s+12|0,s=0;;){if(f=s,s=s+1|0,wi((n[u>>2]|0)+(f<<3)|0,a+(s<<5)|0,A)|0){s=0,u=6;break}if((s|0)>=(n[l>>2]|0)){s=1,u=6;break}}return(u|0)==6?s|0:0}function rc(s,a,A,u){s=s|0,a=a|0,A=A|0,u=u|0;var l=0,f=0,h=0,p=0,g=0,b=0,v=0;if(b=I,I=I+16|0,p=b,h=A+8|0,!(wi(s,a,h)|0))return g=0,I=b,g|0;g=s+8|0;e:do if((n[g>>2]|0)>0){for(f=s+12|0,l=0;;){if(v=l,l=l+1|0,wi((n[f>>2]|0)+(v<<3)|0,a+(l<<5)|0,h)|0){l=0;break}if((l|0)>=(n[g>>2]|0))break e}return I=b,l|0}while(!1);if(os(s,a,A,u)|0)return v=0,I=b,v|0;n[p>>2]=n[A>>2],n[p+4>>2]=h,l=n[g>>2]|0;e:do if((l|0)>0)for(s=s+12|0,h=0,f=l;;){if(l=n[s>>2]|0,(n[l+(h<<3)>>2]|0)>0){if(wi(p,u,n[l+(h<<3)+4>>2]|0)|0){l=0;break e}if(l=h+1|0,os((n[s>>2]|0)+(h<<3)|0,a+(l<<5)|0,A,u)|0){l=0;break e}f=n[g>>2]|0}else l=h+1|0;if((l|0)<(f|0))h=l;else{l=1;break}}else l=1;while(!1);return v=l,I=b,v|0}function os(s,a,A,u){s=s|0,a=a|0,A=A|0,u=u|0;var l=0,f=0,h=0,p=0,g=0,b=0,v=0,S=0,E=0,x=0,C=0,k=0,D=0,G=0,L=0,H=0,V=0,ee=0,ie=0,K=0,z=0;if(ie=I,I=I+176|0,L=ie+172|0,l=ie+168|0,H=ie,!(Uo(a,u)|0))return s=0,I=ie,s|0;if(Cm(a,u,L,l),mr(H|0,A|0,168)|0,(n[A>>2]|0)>0){a=0;do K=H+8+(a<<4)+8|0,G=+Zt(+P[K>>3],n[l>>2]|0),P[K>>3]=G,a=a+1|0;while((a|0)<(n[A>>2]|0))}k=+P[u>>3],D=+P[u+8>>3],G=+Zt(+P[u+16>>3],n[l>>2]|0),x=+Zt(+P[u+24>>3],n[l>>2]|0);e:do if((n[s>>2]|0)>0){if(u=s+4|0,l=n[H>>2]|0,(l|0)<=0){for(a=0;;)if(a=a+1|0,(a|0)>=(n[s>>2]|0)){a=0;break e}}for(A=0;;){if(a=n[u>>2]|0,E=+P[a+(A<<4)>>3],C=+Zt(+P[a+(A<<4)+8>>3],n[L>>2]|0),a=n[u>>2]|0,A=A+1|0,K=(A|0)%(n[s>>2]|0)|0,f=+P[a+(K<<4)>>3],h=+Zt(+P[a+(K<<4)+8>>3],n[L>>2]|0),!(E>=k)|!(f>=k)&&!(E<=D)|!(f<=D)&&!(C<=x)|!(h<=x)&&!(C>=G)|!(h>=G)){S=f-E,b=h-C,a=0;do if(z=a,a=a+1|0,K=(a|0)==(l|0)?0:a,f=+P[H+8+(z<<4)+8>>3],h=+P[H+8+(K<<4)+8>>3]-f,p=+P[H+8+(z<<4)>>3],g=+P[H+8+(K<<4)>>3]-p,v=S*h-b*g,v!=0&&(V=C-f,ee=E-p,g=(V*g-h*ee)/v,!(g<0|g>1))&&(v=(S*V-b*ee)/v,v>=0&v<=1)){a=1;break e}while((a|0)<(l|0))}if((A|0)>=(n[s>>2]|0)){a=0;break}}}else a=0;while(!1);return z=a,I=ie,z|0}function nc(s,a,A,u){s=s|0,a=a|0,A=A|0,u=u|0;var l=0,f=0,h=0;if(os(s,a,A,u)|0)return f=1,f|0;if(f=s+8|0,(n[f>>2]|0)<=0)return f=0,f|0;for(l=s+12|0,s=0;;){if(h=s,s=s+1|0,os((n[l>>2]|0)+(h<<3)|0,a+(s<<5)|0,A,u)|0){s=1,l=6;break}if((s|0)>=(n[f>>2]|0)){s=0,l=6;break}}return(l|0)==6?s|0:0}function _g(){return 8}function Tg(){return 16}function vg(){return 168}function yg(){return 8}function Sg(){return 16}function wg(){return 12}function Eg(){return 8}function xg(s){return s=s|0,+(+((n[s>>2]|0)>>>0)+4294967296*+(n[s+4>>2]|0))}function Cg(s){s=s|0;var a=0,A=0;return A=+P[s>>3],a=+P[s+8>>3],+ +Qe(+(A*A+a*a))}function ic(s,a,A,u,l){s=s|0,a=a|0,A=A|0,u=u|0,l=l|0;var f=0,h=0,p=0,g=0,b=0,v=0,S=0,E=0;b=+P[s>>3],g=+P[a>>3]-b,p=+P[s+8>>3],h=+P[a+8>>3]-p,S=+P[A>>3],f=+P[u>>3]-S,E=+P[A+8>>3],v=+P[u+8>>3]-E,f=(f*(p-E)-(b-S)*v)/(g*v-h*f),P[l>>3]=b+g*f,P[l+8>>3]=p+h*f}function sc(s,a){return s=s|0,a=a|0,+et(+(+P[s>>3]-+P[a>>3]))<11920928955078125e-23?(a=+et(+(+P[s+8>>3]-+P[a+8>>3]))<11920928955078125e-23,a|0):(a=0,a|0)}function Mg(s,a,A){s=s|0,a=a|0,A=A|0;var u=0,l=0,f=0;if(f=I,I=I+16|0,l=f,u=Ye(s,a)|0,(A+-1|0)>>>0>5||(u=(u|0)!=0,(A|0)==1&u))return l=-1,I=f,l|0;do if(xi(s,a,l)|0)u=-1;else if(u){u=((n[26416+(A<<2)>>2]|0)+5-(n[l>>2]|0)|0)%5|0;break}else{u=((n[26448+(A<<2)>>2]|0)+6-(n[l>>2]|0)|0)%6|0;break}while(!1);return l=u,I=f,l|0}function xi(s,a,A){s=s|0,a=a|0,A=A|0;var u=0,l=0,f=0,h=0,p=0,g=0,b=0,v=0;if(v=I,I=I+32|0,p=v+16|0,g=v,u=On(s,a,p)|0,u|0)return A=u,I=v,A|0;f=Q0(s,a)|0,b=qt(s,a)|0,Tm(f,g),u=vm(f,n[p>>2]|0)|0;do if(ot(f)|0){do switch(f|0){case 4:{l=0;break}case 14:{l=1;break}case 24:{l=2;break}case 38:{l=3;break}case 49:{l=4;break}case 58:{l=5;break}case 63:{l=6;break}case 72:{l=7;break}case 83:{l=8;break}case 97:{l=9;break}case 107:{l=10;break}case 117:{l=11;break}default:ke(27634,27636,75,27645)}while(!1);if(h=n[26480+(l*24|0)+8>>2]|0,a=n[26480+(l*24|0)+16>>2]|0,s=n[p>>2]|0,(s|0)!=(n[g>>2]|0)&&(g=Fo(f)|0,s=n[p>>2]|0,g|(s|0)==(a|0)&&(u=(u+1|0)%6|0)),(b|0)==3&(s|0)==(a|0)){u=(u+5|0)%6|0;break}(b|0)==5&(s|0)==(h|0)&&(u=(u+1|0)%6|0)}while(!1);return n[A>>2]=u,A=0,I=v,A|0}function Ar(s,a,A,u){s=s|0,a=a|0,A=A|0,u=u|0;var l=0,f=0,h=0,p=0,g=0,b=0,v=0,S=0,E=0,x=0,C=0,k=0,D=0,G=0,L=0,H=0;if(H=I,I=I+32|0,L=H+24|0,D=H+20|0,C=H+8|0,x=H+16|0,E=H,g=(Ye(s,a)|0)==0,g=g?6:5,v=oe(s|0,a|0,52)|0,R()|0,v=v&15,g>>>0<=A>>>0)return u=2,I=H,u|0;S=(v|0)==0,!S&&(k=le(7,0,(v^15)*3|0)|0,(k&s|0)==0&((R()|0)&a|0)==0)?l=A:f=4;e:do if((f|0)==4){if(l=(Ye(s,a)|0)!=0,((l?4:5)|0)<(A|0)||xi(s,a,L)|0||(f=(n[L>>2]|0)+A|0,l?l=26768+(((f|0)%5|0)<<2)|0:l=26800+(((f|0)%6|0)<<2)|0,k=n[l>>2]|0,(k|0)==7))return u=1,I=H,u|0;n[D>>2]=0,l=vt(s,a,k,D,C)|0;do if(!l){if(p=C,b=n[p>>2]|0,p=n[p+4>>2]|0,h=p>>>0<a>>>0|(p|0)==(a|0)&b>>>0<s>>>0,f=h?b:s,h=h?p:a,!S&&(S=le(7,0,(v^15)*3|0)|0,(b&S|0)==0&(p&(R()|0)|0)==0))l=A;else{if(p=(A+-1+g|0)%(g|0)|0,l=Ye(s,a)|0,(p|0)<0&&ke(27634,27636,248,27661),g=(l|0)!=0,((g?4:5)|0)<(p|0)&&ke(27634,27636,248,27661),xi(s,a,L)|0&&ke(27634,27636,248,27661),l=(n[L>>2]|0)+p|0,g?l=26768+(((l|0)%5|0)<<2)|0:l=26800+(((l|0)%6|0)<<2)|0,p=n[l>>2]|0,(p|0)==7&&ke(27634,27636,248,27661),n[x>>2]=0,l=vt(s,a,p,x,E)|0,l|0)break;b=E,g=n[b>>2]|0,b=n[b+4>>2]|0;do if(b>>>0<h>>>0|(b|0)==(h|0)&g>>>0<f>>>0){if(Ye(g,b)|0?f=ts(g,b,s,a)|0:f=n[26864+((((n[x>>2]|0)+(n[26832+(p<<2)>>2]|0)|0)%6|0)<<2)>>2]|0,l=Ye(g,b)|0,(f+-1|0)>>>0>5){l=-1,f=g,h=b;break}if(l=(l|0)!=0,(f|0)==1&l){l=-1,f=g,h=b;break}do if(xi(g,b,L)|0)l=-1;else if(l){l=((n[26416+(f<<2)>>2]|0)+5-(n[L>>2]|0)|0)%5|0;break}else{l=((n[26448+(f<<2)>>2]|0)+6-(n[L>>2]|0)|0)%6|0;break}while(!1);f=g,h=b}else l=A;while(!1);p=C,b=n[p>>2]|0,p=n[p+4>>2]|0}if((f|0)==(b|0)&(h|0)==(p|0)){if(g=(Ye(b,p)|0)!=0,g?s=ts(b,p,s,a)|0:s=n[26864+((((n[D>>2]|0)+(n[26832+(k<<2)>>2]|0)|0)%6|0)<<2)>>2]|0,l=Ye(b,p)|0,(s+-1|0)>>>0<=5&&(G=(l|0)!=0,!((s|0)==1&G)))do if(xi(b,p,L)|0)l=-1;else if(G){l=((n[26416+(s<<2)>>2]|0)+5-(n[L>>2]|0)|0)%5|0;break}else{l=((n[26448+(s<<2)>>2]|0)+6-(n[L>>2]|0)|0)%6|0;break}while(!1);else l=-1;l=l+1|0,l=(l|0)==6|g&(l|0)==5?0:l}a=h,s=f;break e}while(!1);return u=l,I=H,u|0}while(!1);return G=le(l|0,0,56)|0,L=R()|0|a&-2130706433|536870912,n[u>>2]=G|s,n[u+4>>2]=L,u=0,I=H,u|0}function Ig(s,a,A){s=s|0,a=a|0,A=A|0;var u=0,l=0,f=0;return f=(Ye(s,a)|0)==0,u=Ar(s,a,0,A)|0,l=(u|0)==0,f?!l||(u=Ar(s,a,1,A+8|0)|0,u|0)||(u=Ar(s,a,2,A+16|0)|0,u|0)||(u=Ar(s,a,3,A+24|0)|0,u|0)||(u=Ar(s,a,4,A+32|0)|0,u)?(f=u,f|0):Ar(s,a,5,A+40|0)|0:!l||(u=Ar(s,a,1,A+8|0)|0,u|0)||(u=Ar(s,a,2,A+16|0)|0,u|0)||(u=Ar(s,a,3,A+24|0)|0,u|0)||(u=Ar(s,a,4,A+32|0)|0,u|0)?(f=u,f|0):(f=A+40|0,n[f>>2]=0,n[f+4>>2]=0,f=0,f|0)}function Rg(s,a,A){s=s|0,a=a|0,A=A|0;var u=0,l=0,f=0,h=0,p=0,g=0;return g=I,I=I+192|0,l=g,f=g+168|0,h=oe(s|0,a|0,56)|0,R()|0,h=h&7,p=a&-2130706433|134217728,u=On(s,p,f)|0,u|0?(p=u,I=g,p|0):(a=oe(s|0,a|0,52)|0,R()|0,a=a&15,Ye(s,p)|0?jo(f,a,h,1,l):Go(f,a,h,1,l),p=l+8|0,n[A>>2]=n[p>>2],n[A+4>>2]=n[p+4>>2],n[A+8>>2]=n[p+8>>2],n[A+12>>2]=n[p+12>>2],p=0,I=g,p|0)}function oc(s,a){s=s|0,a=a|0;var A=0,u=0,l=0,f=0;return l=I,I=I+16|0,A=l,!(!0&(a&2013265920|0)==536870912)||(u=a&-2130706433|134217728,!(ns(s,u)|0))?(u=0,I=l,u|0):(f=oe(s|0,a|0,56)|0,R()|0,f=(Ar(s,u,f&7,A)|0)==0,u=A,u=f&((n[u>>2]|0)==(s|0)?(n[u+4>>2]|0)==(a|0):0)&1,I=l,u|0)}function ac(){return 27680}function as(s,a,A,u){s=s|0,a=a|0,A=A|0,u=u|0;var l=0,f=0,h=0,p=0,g=0,b=0,v=0,S=0,E=0;S=I,I=I+208|0,g=S,b=S+192|0,h=Ht(A,a)|0,p=b,n[p>>2]=1,n[p+4>>2]=0;e:do if(h|0){for(p=0-A|0,n[g+4>>2]=A,n[g>>2]=A,l=2,a=A,f=A;a=a+A+f|0,n[g+(l<<2)>>2]=a,a>>>0<h>>>0;)E=f,l=l+1|0,f=a,a=E;if(f=s+h+p|0,f>>>0>s>>>0){h=f,l=1,a=1;do{do if((a&3|0)!=3)if(a=l+-1|0,(n[g+(a<<2)>>2]|0)>>>0<(h-s|0)>>>0?na(s,A,u,l,g):cs(s,A,u,b,l,0,g),(l|0)==1){ls(b,1),l=0;break}else{ls(b,a),l=1;break}else na(s,A,u,l,g),As(b,2),l=l+2|0;while(!1);a=n[b>>2]|1,n[b>>2]=a,s=s+A|0}while(s>>>0<f>>>0)}else l=1,a=1;for(cs(s,A,u,b,l,0,g),f=b+4|0;;){if((l|0)==1&(a|0)==1)if(n[f>>2]|0)v=19;else break e;else(l|0)<2?v=19:(ls(b,2),E=l+-2|0,n[b>>2]=n[b>>2]^7,As(b,1),cs(s+(0-(n[g+(E<<2)>>2]|0))+p|0,A,u,b,l+-1|0,1,g),ls(b,1),a=n[b>>2]|1,n[b>>2]=a,s=s+p|0,cs(s,A,u,b,E,1,g),l=E);(v|0)==19&&(v=0,a=Ac(b)|0,As(b,a),s=s+p|0,l=a+l|0,a=n[b>>2]|0)}}while(!1);I=S}function na(s,a,A,u,l){s=s|0,a=a|0,A=A|0,u=u|0,l=l|0;var f=0,h=0,p=0,g=0,b=0,v=0,S=0;S=I,I=I+240|0,v=S,n[v>>2]=s;e:do if((u|0)>1)for(b=0-a|0,p=s,f=u,u=1,h=s;;){if(p=p+b|0,g=f+-2|0,s=p+(0-(n[l+(g<<2)>>2]|0))|0,(Kr[A&3](h,s)|0)>-1&&(Kr[A&3](h,p)|0)>-1||(h=v+(u<<2)|0,(Kr[A&3](s,p)|0)>-1?(n[h>>2]=s,f=f+-1|0):(n[h>>2]=p,s=p,f=g),u=u+1|0,(f|0)<=1))break e;p=s,h=n[v>>2]|0}else u=1;while(!1);lc(a,v,u),I=S}function As(s,a){s=s|0,a=a|0;var A=0,u=0,l=0;l=s+4|0,a>>>0>31?(u=n[l>>2]|0,n[s>>2]=u,n[l>>2]=0,a=a+-32|0,A=0):(A=n[l>>2]|0,u=n[s>>2]|0),n[s>>2]=A<<32-a|u>>>a,n[l>>2]=A>>>a}function cs(s,a,A,u,l,f,h){s=s|0,a=a|0,A=A|0,u=u|0,l=l|0,f=f|0,h=h|0;var p=0,g=0,b=0,v=0,S=0,E=0,x=0,C=0;x=I,I=I+240|0,S=x+232|0,E=x,C=n[u>>2]|0,n[S>>2]=C,g=n[u+4>>2]|0,b=S+4|0,n[b>>2]=g,n[E>>2]=s;e:do if((C|0)!=1|(g|0)!=0&&(v=0-a|0,p=s+(0-(n[h+(l<<2)>>2]|0))|0,(Kr[A&3](p,s)|0)>=1))for(u=1,f=(f|0)==0,g=p;;){if(f&(l|0)>1){if(f=s+v|0,p=n[h+(l+-2<<2)>>2]|0,(Kr[A&3](f,g)|0)>-1){p=10;break e}if((Kr[A&3](f+(0-p)|0,g)|0)>-1){p=10;break e}}if(f=u+1|0,n[E+(u<<2)>>2]=g,C=Ac(S)|0,As(S,C),l=C+l|0,!((n[S>>2]|0)!=1|(n[b>>2]|0)!=0)){u=f,s=g,p=10;break e}if(s=g+(0-(n[h+(l<<2)>>2]|0))|0,(Kr[A&3](s,n[E>>2]|0)|0)<1){s=g,u=f,f=0,p=9;break}else C=g,u=f,f=1,g=s,s=C}else u=1,p=9;while(!1);(p|0)==9&&(f|0)==0&&(p=10),(p|0)==10&&(lc(a,E,u),na(s,a,A,l,h)),I=x}function ls(s,a){s=s|0,a=a|0;var A=0,u=0,l=0;l=s+4|0,a>>>0>31?(u=n[s>>2]|0,n[l>>2]=u,n[s>>2]=0,a=a+-32|0,A=0):(A=n[s>>2]|0,u=n[l>>2]|0),n[l>>2]=A>>>(32-a|0)|u<<a,n[s>>2]=A<<a}function Ac(s){s=s|0;var a=0;return a=cc((n[s>>2]|0)+-1|0)|0,a?a|0:(a=cc(n[s+4>>2]|0)|0,((a|0)==0?0:a+32|0)|0)}function cc(s){s=s|0;var a=0;if(s)if(s&1)s=0;else for(a=s,s=0;s=s+1|0,!(a&2);)a=a>>>1;else s=32;return s|0}function lc(s,a,A){s=s|0,a=a|0,A=A|0;var u=0,l=0,f=0,h=0,p=0;h=I,I=I+256|0,u=h;e:do if((A|0)>=2&&(f=a+(A<<2)|0,n[f>>2]=u,s|0))for(;;){l=s>>>0<256?s:256,mr(u|0,n[a>>2]|0,l|0)|0,u=0;do p=a+(u<<2)|0,u=u+1|0,mr(n[p>>2]|0,n[a+(u<<2)>>2]|0,l|0)|0,n[p>>2]=(n[p>>2]|0)+l;while((u|0)!=(A|0));if(s=s-l|0,!s)break e;u=n[f>>2]|0}while(!1);I=h}function wr(s){return s=+s,~~+pc(+s)|0}function at(s){s=s|0;var a=0,A=0,u=0,l=0,f=0,h=0,p=0,g=0,b=0,v=0,S=0,E=0,x=0,C=0,k=0,D=0,G=0,L=0,H=0,V=0,ee=0;ee=I,I=I+16|0,E=ee;do if(s>>>0<245){if(b=s>>>0<11?16:s+11&-8,s=b>>>3,S=n[6921]|0,A=S>>>s,A&3|0)return a=(A&1^1)+s|0,s=27724+(a<<1<<2)|0,A=s+8|0,u=n[A>>2]|0,l=u+8|0,f=n[l>>2]|0,(f|0)==(s|0)?n[6921]=S&~(1<<a):(n[f+12>>2]=s,n[A>>2]=f),V=a<<3,n[u+4>>2]=V|3,V=u+V+4|0,n[V>>2]=n[V>>2]|1,V=l,I=ee,V|0;if(v=n[6923]|0,b>>>0>v>>>0){if(A|0)return a=2<<s,a=A<<s&(a|0-a),a=(a&0-a)+-1|0,p=a>>>12&16,a=a>>>p,A=a>>>5&8,a=a>>>A,f=a>>>2&4,a=a>>>f,s=a>>>1&2,a=a>>>s,u=a>>>1&1,u=(A|p|f|s|u)+(a>>>u)|0,a=27724+(u<<1<<2)|0,s=a+8|0,f=n[s>>2]|0,p=f+8|0,A=n[p>>2]|0,(A|0)==(a|0)?(s=S&~(1<<u),n[6921]=s):(n[A+12>>2]=a,n[s>>2]=A,s=S),V=u<<3,h=V-b|0,n[f+4>>2]=b|3,l=f+b|0,n[l+4>>2]=h|1,n[f+V>>2]=h,v|0&&(u=n[6926]|0,a=v>>>3,A=27724+(a<<1<<2)|0,a=1<<a,s&a?(s=A+8|0,a=n[s>>2]|0):(n[6921]=s|a,a=A,s=A+8|0),n[s>>2]=u,n[a+12>>2]=u,n[u+8>>2]=a,n[u+12>>2]=A),n[6923]=h,n[6926]=l,V=p,I=ee,V|0;if(f=n[6922]|0,f){for(A=(f&0-f)+-1|0,l=A>>>12&16,A=A>>>l,u=A>>>5&8,A=A>>>u,h=A>>>2&4,A=A>>>h,p=A>>>1&2,A=A>>>p,g=A>>>1&1,g=n[27988+((u|l|h|p|g)+(A>>>g)<<2)>>2]|0,A=g,p=g,g=(n[g+4>>2]&-8)-b|0;s=n[A+16>>2]|0,!(!s&&(s=n[A+20>>2]|0,!s));)h=(n[s+4>>2]&-8)-b|0,l=h>>>0<g>>>0,A=s,p=l?s:p,g=l?h:g;if(h=p+b|0,h>>>0>p>>>0){l=n[p+24>>2]|0,a=n[p+12>>2]|0;do if((a|0)==(p|0)){if(s=p+20|0,a=n[s>>2]|0,!a&&(s=p+16|0,a=n[s>>2]|0,!a)){A=0;break}for(;;)if(u=a+20|0,A=n[u>>2]|0,A)a=A,s=u;else if(u=a+16|0,A=n[u>>2]|0,A)a=A,s=u;else break;n[s>>2]=0,A=a}else A=n[p+8>>2]|0,n[A+12>>2]=a,n[a+8>>2]=A,A=a;while(!1);do if(l|0){if(a=n[p+28>>2]|0,s=27988+(a<<2)|0,(p|0)==(n[s>>2]|0)){if(n[s>>2]=A,!A){n[6922]=f&~(1<<a);break}}else if(V=l+16|0,n[((n[V>>2]|0)==(p|0)?V:l+20|0)>>2]=A,!A)break;n[A+24>>2]=l,a=n[p+16>>2]|0,a|0&&(n[A+16>>2]=a,n[a+24>>2]=A),a=n[p+20>>2]|0,a|0&&(n[A+20>>2]=a,n[a+24>>2]=A)}while(!1);return g>>>0<16?(V=g+b|0,n[p+4>>2]=V|3,V=p+V+4|0,n[V>>2]=n[V>>2]|1):(n[p+4>>2]=b|3,n[h+4>>2]=g|1,n[h+g>>2]=g,v|0&&(u=n[6926]|0,a=v>>>3,A=27724+(a<<1<<2)|0,a=1<<a,a&S?(s=A+8|0,a=n[s>>2]|0):(n[6921]=a|S,a=A,s=A+8|0),n[s>>2]=u,n[a+12>>2]=u,n[u+8>>2]=a,n[u+12>>2]=A),n[6923]=g,n[6926]=h),V=p+8|0,I=ee,V|0}else S=b}else S=b}else S=b}else if(s>>>0<=4294967231)if(s=s+11|0,b=s&-8,u=n[6922]|0,u){l=0-b|0,s=s>>>8,s?b>>>0>16777215?g=31:(S=(s+1048320|0)>>>16&8,k=s<<S,p=(k+520192|0)>>>16&4,k=k<<p,g=(k+245760|0)>>>16&2,g=14-(p|S|g)+(k<<g>>>15)|0,g=b>>>(g+7|0)&1|g<<1):g=0,A=n[27988+(g<<2)>>2]|0;e:do if(!A)A=0,s=0,k=61;else for(s=0,p=b<<((g|0)==31?0:25-(g>>>1)|0),f=0;;){if(h=(n[A+4>>2]&-8)-b|0,h>>>0<l>>>0)if(h)s=A,l=h;else{s=A,l=0,k=65;break e}if(k=n[A+20>>2]|0,A=n[A+16+(p>>>31<<2)>>2]|0,f=(k|0)==0|(k|0)==(A|0)?f:k,A)p=p<<1;else{A=f,k=61;break}}while(!1);if((k|0)==61){if((A|0)==0&(s|0)==0){if(s=2<<g,s=(s|0-s)&u,!s){S=b;break}S=(s&0-s)+-1|0,h=S>>>12&16,S=S>>>h,f=S>>>5&8,S=S>>>f,p=S>>>2&4,S=S>>>p,g=S>>>1&2,S=S>>>g,A=S>>>1&1,s=0,A=n[27988+((f|h|p|g|A)+(S>>>A)<<2)>>2]|0}A?k=65:(p=s,h=l)}if((k|0)==65)for(f=A;;)if(S=(n[f+4>>2]&-8)-b|0,A=S>>>0<l>>>0,l=A?S:l,s=A?f:s,A=n[f+16>>2]|0,A||(A=n[f+20>>2]|0),A)f=A;else{p=s,h=l;break}if((p|0)!=0&&h>>>0<((n[6923]|0)-b|0)>>>0&&(v=p+b|0,v>>>0>p>>>0)){f=n[p+24>>2]|0,a=n[p+12>>2]|0;do if((a|0)==(p|0)){if(s=p+20|0,a=n[s>>2]|0,!a&&(s=p+16|0,a=n[s>>2]|0,!a)){a=0;break}for(;;)if(l=a+20|0,A=n[l>>2]|0,A)a=A,s=l;else if(l=a+16|0,A=n[l>>2]|0,A)a=A,s=l;else break;n[s>>2]=0}else V=n[p+8>>2]|0,n[V+12>>2]=a,n[a+8>>2]=V;while(!1);do if(f){if(s=n[p+28>>2]|0,A=27988+(s<<2)|0,(p|0)==(n[A>>2]|0)){if(n[A>>2]=a,!a){u=u&~(1<<s),n[6922]=u;break}}else if(V=f+16|0,n[((n[V>>2]|0)==(p|0)?V:f+20|0)>>2]=a,!a)break;n[a+24>>2]=f,s=n[p+16>>2]|0,s|0&&(n[a+16>>2]=s,n[s+24>>2]=a),s=n[p+20>>2]|0,s&&(n[a+20>>2]=s,n[s+24>>2]=a)}while(!1);e:do if(h>>>0<16)V=h+b|0,n[p+4>>2]=V|3,V=p+V+4|0,n[V>>2]=n[V>>2]|1;else{if(n[p+4>>2]=b|3,n[v+4>>2]=h|1,n[v+h>>2]=h,a=h>>>3,h>>>0<256){A=27724+(a<<1<<2)|0,s=n[6921]|0,a=1<<a,s&a?(s=A+8|0,a=n[s>>2]|0):(n[6921]=s|a,a=A,s=A+8|0),n[s>>2]=v,n[a+12>>2]=v,n[v+8>>2]=a,n[v+12>>2]=A;break}if(a=h>>>8,a?h>>>0>16777215?A=31:(H=(a+1048320|0)>>>16&8,V=a<<H,L=(V+520192|0)>>>16&4,V=V<<L,A=(V+245760|0)>>>16&2,A=14-(L|H|A)+(V<<A>>>15)|0,A=h>>>(A+7|0)&1|A<<1):A=0,a=27988+(A<<2)|0,n[v+28>>2]=A,s=v+16|0,n[s+4>>2]=0,n[s>>2]=0,s=1<<A,!(u&s)){n[6922]=u|s,n[a>>2]=v,n[v+24>>2]=a,n[v+12>>2]=v,n[v+8>>2]=v;break}a=n[a>>2]|0;t:do if((n[a+4>>2]&-8|0)!=(h|0)){for(u=h<<((A|0)==31?0:25-(A>>>1)|0);A=a+16+(u>>>31<<2)|0,s=n[A>>2]|0,!!s;)if((n[s+4>>2]&-8|0)==(h|0)){a=s;break t}else u=u<<1,a=s;n[A>>2]=v,n[v+24>>2]=a,n[v+12>>2]=v,n[v+8>>2]=v;break e}while(!1);H=a+8|0,V=n[H>>2]|0,n[V+12>>2]=v,n[H>>2]=v,n[v+8>>2]=V,n[v+12>>2]=a,n[v+24>>2]=0}while(!1);return V=p+8|0,I=ee,V|0}else S=b}else S=b;else S=-1;while(!1);if(A=n[6923]|0,A>>>0>=S>>>0)return a=A-S|0,s=n[6926]|0,a>>>0>15?(V=s+S|0,n[6926]=V,n[6923]=a,n[V+4>>2]=a|1,n[s+A>>2]=a,n[s+4>>2]=S|3):(n[6923]=0,n[6926]=0,n[s+4>>2]=A|3,V=s+A+4|0,n[V>>2]=n[V>>2]|1),V=s+8|0,I=ee,V|0;if(h=n[6924]|0,h>>>0>S>>>0)return L=h-S|0,n[6924]=L,V=n[6927]|0,H=V+S|0,n[6927]=H,n[H+4>>2]=L|1,n[V+4>>2]=S|3,V=V+8|0,I=ee,V|0;if(n[7039]|0?s=n[7041]|0:(n[7041]=4096,n[7040]=4096,n[7042]=-1,n[7043]=-1,n[7044]=0,n[7032]=0,n[7039]=E&-16^1431655768,s=4096),p=S+48|0,g=S+47|0,f=s+g|0,l=0-s|0,b=f&l,b>>>0<=S>>>0||(s=n[7031]|0,s|0&&(v=n[7029]|0,E=v+b|0,E>>>0<=v>>>0|E>>>0>s>>>0)))return V=0,I=ee,V|0;e:do if(n[7032]&4)a=0,k=143;else{A=n[6927]|0;t:do if(A){for(u=28132;E=n[u>>2]|0,!(E>>>0<=A>>>0&&(E+(n[u+4>>2]|0)|0)>>>0>A>>>0);)if(s=n[u+8>>2]|0,s)u=s;else{k=128;break t}if(a=f-h&l,a>>>0<2147483647)if(s=Wr(a|0)|0,(s|0)==((n[u>>2]|0)+(n[u+4>>2]|0)|0)){if((s|0)!=-1){h=a,f=s,k=145;break e}}else u=s,k=136;else a=0}else k=128;while(!1);do if((k|0)==128)if(A=Wr(0)|0,(A|0)!=-1&&(a=A,x=n[7040]|0,C=x+-1|0,a=((C&a|0)==0?0:(C+a&0-x)-a|0)+b|0,x=n[7029]|0,C=a+x|0,a>>>0>S>>>0&a>>>0<2147483647)){if(E=n[7031]|0,E|0&&C>>>0<=x>>>0|C>>>0>E>>>0){a=0;break}if(s=Wr(a|0)|0,(s|0)==(A|0)){h=a,f=A,k=145;break e}else u=s,k=136}else a=0;while(!1);do if((k|0)==136){if(A=0-a|0,!(p>>>0>a>>>0&(a>>>0<2147483647&(u|0)!=-1)))if((u|0)==-1){a=0;break}else{h=a,f=u,k=145;break e}if(s=n[7041]|0,s=g-a+s&0-s,s>>>0>=2147483647){h=a,f=u,k=145;break e}if((Wr(s|0)|0)==-1){Wr(A|0)|0,a=0;break}else{h=s+a|0,f=u,k=145;break e}}while(!1);n[7032]=n[7032]|4,k=143}while(!1);if((k|0)==143&&b>>>0<2147483647&&(L=Wr(b|0)|0,C=Wr(0)|0,D=C-L|0,G=D>>>0>(S+40|0)>>>0,!((L|0)==-1|G^1|L>>>0<C>>>0&((L|0)!=-1&(C|0)!=-1)^1))&&(h=G?D:a,f=L,k=145),(k|0)==145){a=(n[7029]|0)+h|0,n[7029]=a,a>>>0>(n[7030]|0)>>>0&&(n[7030]=a),g=n[6927]|0;e:do if(g){for(a=28132;;){if(s=n[a>>2]|0,A=n[a+4>>2]|0,(f|0)==(s+A|0)){k=154;break}if(u=n[a+8>>2]|0,u)a=u;else break}if((k|0)==154&&(H=a+4|0,(n[a+12>>2]&8|0)==0)&&f>>>0>g>>>0&s>>>0<=g>>>0){n[H>>2]=A+h,V=(n[6924]|0)+h|0,L=g+8|0,L=(L&7|0)==0?0:0-L&7,H=g+L|0,L=V-L|0,n[6927]=H,n[6924]=L,n[H+4>>2]=L|1,n[g+V+4>>2]=40,n[6928]=n[7043];break}for(f>>>0<(n[6925]|0)>>>0&&(n[6925]=f),A=f+h|0,a=28132;;){if((n[a>>2]|0)==(A|0)){k=162;break}if(s=n[a+8>>2]|0,s)a=s;else break}if((k|0)==162&&(n[a+12>>2]&8|0)==0){n[a>>2]=f,v=a+4|0,n[v>>2]=(n[v>>2]|0)+h,v=f+8|0,v=f+((v&7|0)==0?0:0-v&7)|0,a=A+8|0,a=A+((a&7|0)==0?0:0-a&7)|0,b=v+S|0,p=a-v-S|0,n[v+4>>2]=S|3;t:do if((g|0)==(a|0))V=(n[6924]|0)+p|0,n[6924]=V,n[6927]=b,n[b+4>>2]=V|1;else{if((n[6926]|0)==(a|0)){V=(n[6923]|0)+p|0,n[6923]=V,n[6926]=b,n[b+4>>2]=V|1,n[b+V>>2]=V;break}if(s=n[a+4>>2]|0,(s&3|0)==1){h=s&-8,u=s>>>3;r:do if(s>>>0<256)if(s=n[a+8>>2]|0,A=n[a+12>>2]|0,(A|0)==(s|0)){n[6921]=n[6921]&~(1<<u);break}else{n[s+12>>2]=A,n[A+8>>2]=s;break}else{f=n[a+24>>2]|0,s=n[a+12>>2]|0;do if((s|0)==(a|0)){if(A=a+16|0,u=A+4|0,s=n[u>>2]|0,s)A=u;else if(s=n[A>>2]|0,!s){s=0;break}for(;;)if(l=s+20|0,u=n[l>>2]|0,u)s=u,A=l;else if(l=s+16|0,u=n[l>>2]|0,u)s=u,A=l;else break;n[A>>2]=0}else V=n[a+8>>2]|0,n[V+12>>2]=s,n[s+8>>2]=V;while(!1);if(!f)break;A=n[a+28>>2]|0,u=27988+(A<<2)|0;do if((n[u>>2]|0)!=(a|0)){if(V=f+16|0,n[((n[V>>2]|0)==(a|0)?V:f+20|0)>>2]=s,!s)break r}else{if(n[u>>2]=s,s|0)break;n[6922]=n[6922]&~(1<<A);break r}while(!1);if(n[s+24>>2]=f,A=a+16|0,u=n[A>>2]|0,u|0&&(n[s+16>>2]=u,n[u+24>>2]=s),A=n[A+4>>2]|0,!A)break;n[s+20>>2]=A,n[A+24>>2]=s}while(!1);a=a+h|0,l=h+p|0}else l=p;if(a=a+4|0,n[a>>2]=n[a>>2]&-2,n[b+4>>2]=l|1,n[b+l>>2]=l,a=l>>>3,l>>>0<256){A=27724+(a<<1<<2)|0,s=n[6921]|0,a=1<<a,s&a?(s=A+8|0,a=n[s>>2]|0):(n[6921]=s|a,a=A,s=A+8|0),n[s>>2]=b,n[a+12>>2]=b,n[b+8>>2]=a,n[b+12>>2]=A;break}a=l>>>8;do if(!a)u=0;else{if(l>>>0>16777215){u=31;break}H=(a+1048320|0)>>>16&8,V=a<<H,L=(V+520192|0)>>>16&4,V=V<<L,u=(V+245760|0)>>>16&2,u=14-(L|H|u)+(V<<u>>>15)|0,u=l>>>(u+7|0)&1|u<<1}while(!1);if(a=27988+(u<<2)|0,n[b+28>>2]=u,s=b+16|0,n[s+4>>2]=0,n[s>>2]=0,s=n[6922]|0,A=1<<u,!(s&A)){n[6922]=s|A,n[a>>2]=b,n[b+24>>2]=a,n[b+12>>2]=b,n[b+8>>2]=b;break}a=n[a>>2]|0;r:do if((n[a+4>>2]&-8|0)!=(l|0)){for(u=l<<((u|0)==31?0:25-(u>>>1)|0);A=a+16+(u>>>31<<2)|0,s=n[A>>2]|0,!!s;)if((n[s+4>>2]&-8|0)==(l|0)){a=s;break r}else u=u<<1,a=s;n[A>>2]=b,n[b+24>>2]=a,n[b+12>>2]=b,n[b+8>>2]=b;break t}while(!1);H=a+8|0,V=n[H>>2]|0,n[V+12>>2]=b,n[H>>2]=b,n[b+8>>2]=V,n[b+12>>2]=a,n[b+24>>2]=0}while(!1);return V=v+8|0,I=ee,V|0}for(a=28132;s=n[a>>2]|0,!(s>>>0<=g>>>0&&(V=s+(n[a+4>>2]|0)|0,V>>>0>g>>>0));)a=n[a+8>>2]|0;l=V+-47|0,s=l+8|0,s=l+((s&7|0)==0?0:0-s&7)|0,l=g+16|0,s=s>>>0<l>>>0?g:s,a=s+8|0,A=h+-40|0,L=f+8|0,L=(L&7|0)==0?0:0-L&7,H=f+L|0,L=A-L|0,n[6927]=H,n[6924]=L,n[H+4>>2]=L|1,n[f+A+4>>2]=40,n[6928]=n[7043],A=s+4|0,n[A>>2]=27,n[a>>2]=n[7033],n[a+4>>2]=n[7034],n[a+8>>2]=n[7035],n[a+12>>2]=n[7036],n[7033]=f,n[7034]=h,n[7036]=0,n[7035]=a,a=s+24|0;do H=a,a=a+4|0,n[a>>2]=7;while((H+8|0)>>>0<V>>>0);if((s|0)!=(g|0)){if(f=s-g|0,n[A>>2]=n[A>>2]&-2,n[g+4>>2]=f|1,n[s>>2]=f,a=f>>>3,f>>>0<256){A=27724+(a<<1<<2)|0,s=n[6921]|0,a=1<<a,s&a?(s=A+8|0,a=n[s>>2]|0):(n[6921]=s|a,a=A,s=A+8|0),n[s>>2]=g,n[a+12>>2]=g,n[g+8>>2]=a,n[g+12>>2]=A;break}if(a=f>>>8,a?f>>>0>16777215?u=31:(H=(a+1048320|0)>>>16&8,V=a<<H,L=(V+520192|0)>>>16&4,V=V<<L,u=(V+245760|0)>>>16&2,u=14-(L|H|u)+(V<<u>>>15)|0,u=f>>>(u+7|0)&1|u<<1):u=0,A=27988+(u<<2)|0,n[g+28>>2]=u,n[g+20>>2]=0,n[l>>2]=0,a=n[6922]|0,s=1<<u,!(a&s)){n[6922]=a|s,n[A>>2]=g,n[g+24>>2]=A,n[g+12>>2]=g,n[g+8>>2]=g;break}a=n[A>>2]|0;t:do if((n[a+4>>2]&-8|0)!=(f|0)){for(u=f<<((u|0)==31?0:25-(u>>>1)|0);A=a+16+(u>>>31<<2)|0,s=n[A>>2]|0,!!s;)if((n[s+4>>2]&-8|0)==(f|0)){a=s;break t}else u=u<<1,a=s;n[A>>2]=g,n[g+24>>2]=a,n[g+12>>2]=g,n[g+8>>2]=g;break e}while(!1);H=a+8|0,V=n[H>>2]|0,n[V+12>>2]=g,n[H>>2]=g,n[g+8>>2]=V,n[g+12>>2]=a,n[g+24>>2]=0}}else V=n[6925]|0,(V|0)==0|f>>>0<V>>>0&&(n[6925]=f),n[7033]=f,n[7034]=h,n[7036]=0,n[6930]=n[7039],n[6929]=-1,n[6934]=27724,n[6933]=27724,n[6936]=27732,n[6935]=27732,n[6938]=27740,n[6937]=27740,n[6940]=27748,n[6939]=27748,n[6942]=27756,n[6941]=27756,n[6944]=27764,n[6943]=27764,n[6946]=27772,n[6945]=27772,n[6948]=27780,n[6947]=27780,n[6950]=27788,n[6949]=27788,n[6952]=27796,n[6951]=27796,n[6954]=27804,n[6953]=27804,n[6956]=27812,n[6955]=27812,n[6958]=27820,n[6957]=27820,n[6960]=27828,n[6959]=27828,n[6962]=27836,n[6961]=27836,n[6964]=27844,n[6963]=27844,n[6966]=27852,n[6965]=27852,n[6968]=27860,n[6967]=27860,n[6970]=27868,n[6969]=27868,n[6972]=27876,n[6971]=27876,n[6974]=27884,n[6973]=27884,n[6976]=27892,n[6975]=27892,n[6978]=27900,n[6977]=27900,n[6980]=27908,n[6979]=27908,n[6982]=27916,n[6981]=27916,n[6984]=27924,n[6983]=27924,n[6986]=27932,n[6985]=27932,n[6988]=27940,n[6987]=27940,n[6990]=27948,n[6989]=27948,n[6992]=27956,n[6991]=27956,n[6994]=27964,n[6993]=27964,n[6996]=27972,n[6995]=27972,V=h+-40|0,L=f+8|0,L=(L&7|0)==0?0:0-L&7,H=f+L|0,L=V-L|0,n[6927]=H,n[6924]=L,n[H+4>>2]=L|1,n[f+V+4>>2]=40,n[6928]=n[7043];while(!1);if(a=n[6924]|0,a>>>0>S>>>0)return L=a-S|0,n[6924]=L,V=n[6927]|0,H=V+S|0,n[6927]=H,n[H+4>>2]=L|1,n[V+4>>2]=S|3,V=V+8|0,I=ee,V|0}return V=ac()|0,n[V>>2]=12,V=0,I=ee,V|0}function ge(s){s=s|0;var a=0,A=0,u=0,l=0,f=0,h=0,p=0,g=0;if(s){A=s+-8|0,l=n[6925]|0,s=n[s+-4>>2]|0,a=s&-8,g=A+a|0;do if(s&1)p=A,h=A;else{if(u=n[A>>2]|0,!(s&3)||(h=A+(0-u)|0,f=u+a|0,h>>>0<l>>>0))return;if((n[6926]|0)==(h|0)){if(s=g+4|0,a=n[s>>2]|0,(a&3|0)!=3){p=h,a=f;break}n[6923]=f,n[s>>2]=a&-2,n[h+4>>2]=f|1,n[h+f>>2]=f;return}if(A=u>>>3,u>>>0<256)if(s=n[h+8>>2]|0,a=n[h+12>>2]|0,(a|0)==(s|0)){n[6921]=n[6921]&~(1<<A),p=h,a=f;break}else{n[s+12>>2]=a,n[a+8>>2]=s,p=h,a=f;break}l=n[h+24>>2]|0,s=n[h+12>>2]|0;do if((s|0)==(h|0)){if(a=h+16|0,A=a+4|0,s=n[A>>2]|0,s)a=A;else if(s=n[a>>2]|0,!s){s=0;break}for(;;)if(u=s+20|0,A=n[u>>2]|0,A)s=A,a=u;else if(u=s+16|0,A=n[u>>2]|0,A)s=A,a=u;else break;n[a>>2]=0}else p=n[h+8>>2]|0,n[p+12>>2]=s,n[s+8>>2]=p;while(!1);if(l){if(a=n[h+28>>2]|0,A=27988+(a<<2)|0,(n[A>>2]|0)==(h|0)){if(n[A>>2]=s,!s){n[6922]=n[6922]&~(1<<a),p=h,a=f;break}}else if(p=l+16|0,n[((n[p>>2]|0)==(h|0)?p:l+20|0)>>2]=s,!s){p=h,a=f;break}n[s+24>>2]=l,a=h+16|0,A=n[a>>2]|0,A|0&&(n[s+16>>2]=A,n[A+24>>2]=s),a=n[a+4>>2]|0,a?(n[s+20>>2]=a,n[a+24>>2]=s,p=h,a=f):(p=h,a=f)}else p=h,a=f}while(!1);if(!(h>>>0>=g>>>0)&&(s=g+4|0,u=n[s>>2]|0,!!(u&1))){if(u&2)n[s>>2]=u&-2,n[p+4>>2]=a|1,n[h+a>>2]=a,l=a;else{if((n[6927]|0)==(g|0)){if(g=(n[6924]|0)+a|0,n[6924]=g,n[6927]=p,n[p+4>>2]=g|1,(p|0)!=(n[6926]|0))return;n[6926]=0,n[6923]=0;return}if((n[6926]|0)==(g|0)){g=(n[6923]|0)+a|0,n[6923]=g,n[6926]=h,n[p+4>>2]=g|1,n[h+g>>2]=g;return}l=(u&-8)+a|0,A=u>>>3;do if(u>>>0<256)if(a=n[g+8>>2]|0,s=n[g+12>>2]|0,(s|0)==(a|0)){n[6921]=n[6921]&~(1<<A);break}else{n[a+12>>2]=s,n[s+8>>2]=a;break}else{f=n[g+24>>2]|0,s=n[g+12>>2]|0;do if((s|0)==(g|0)){if(a=g+16|0,A=a+4|0,s=n[A>>2]|0,s)a=A;else if(s=n[a>>2]|0,!s){A=0;break}for(;;)if(u=s+20|0,A=n[u>>2]|0,A)s=A,a=u;else if(u=s+16|0,A=n[u>>2]|0,A)s=A,a=u;else break;n[a>>2]=0,A=s}else A=n[g+8>>2]|0,n[A+12>>2]=s,n[s+8>>2]=A,A=s;while(!1);if(f|0){if(s=n[g+28>>2]|0,a=27988+(s<<2)|0,(n[a>>2]|0)==(g|0)){if(n[a>>2]=A,!A){n[6922]=n[6922]&~(1<<s);break}}else if(u=f+16|0,n[((n[u>>2]|0)==(g|0)?u:f+20|0)>>2]=A,!A)break;n[A+24>>2]=f,s=g+16|0,a=n[s>>2]|0,a|0&&(n[A+16>>2]=a,n[a+24>>2]=A),s=n[s+4>>2]|0,s|0&&(n[A+20>>2]=s,n[s+24>>2]=A)}}while(!1);if(n[p+4>>2]=l|1,n[h+l>>2]=l,(p|0)==(n[6926]|0)){n[6923]=l;return}}if(s=l>>>3,l>>>0<256){A=27724+(s<<1<<2)|0,a=n[6921]|0,s=1<<s,a&s?(a=A+8|0,s=n[a>>2]|0):(n[6921]=a|s,s=A,a=A+8|0),n[a>>2]=p,n[s+12>>2]=p,n[p+8>>2]=s,n[p+12>>2]=A;return}s=l>>>8,s?l>>>0>16777215?u=31:(h=(s+1048320|0)>>>16&8,g=s<<h,f=(g+520192|0)>>>16&4,g=g<<f,u=(g+245760|0)>>>16&2,u=14-(f|h|u)+(g<<u>>>15)|0,u=l>>>(u+7|0)&1|u<<1):u=0,s=27988+(u<<2)|0,n[p+28>>2]=u,n[p+20>>2]=0,n[p+16>>2]=0,a=n[6922]|0,A=1<<u;e:do if(!(a&A))n[6922]=a|A,n[s>>2]=p,n[p+24>>2]=s,n[p+12>>2]=p,n[p+8>>2]=p;else{s=n[s>>2]|0;t:do if((n[s+4>>2]&-8|0)!=(l|0)){for(u=l<<((u|0)==31?0:25-(u>>>1)|0);A=s+16+(u>>>31<<2)|0,a=n[A>>2]|0,!!a;)if((n[a+4>>2]&-8|0)==(l|0)){s=a;break t}else u=u<<1,s=a;n[A>>2]=p,n[p+24>>2]=s,n[p+12>>2]=p,n[p+8>>2]=p;break e}while(!1);h=s+8|0,g=n[h>>2]|0,n[g+12>>2]=p,n[h>>2]=p,n[p+8>>2]=g,n[p+12>>2]=s,n[p+24>>2]=0}while(!1);if(g=(n[6929]|0)+-1|0,n[6929]=g,!(g|0)){for(s=28140;s=n[s>>2]|0,s;)s=s+8|0;n[6929]=-1}}}}function Bt(s,a){s=s|0,a=a|0;var A=0;return s?(A=Ht(a,s)|0,(a|s)>>>0>65535&&(A=((A>>>0)/(s>>>0)|0|0)==(a|0)?A:-1)):A=0,s=at(A)|0,!s||!(n[s+-4>>2]&3)||Qr(s|0,0,A|0)|0,s|0}function Ng(s,a){s=s|0,a=a|0;var A=0,u=0;return s?a>>>0>4294967231?(a=ac()|0,n[a>>2]=12,a=0,a|0):(A=Pg(s+-8|0,a>>>0<11?16:a+11&-8)|0,A|0?(a=A+8|0,a|0):(A=at(a)|0,A?(u=n[s+-4>>2]|0,u=(u&-8)-((u&3|0)==0?8:4)|0,mr(A|0,s|0,(u>>>0<a>>>0?u:a)|0)|0,ge(s),a=A,a|0):(a=0,a|0))):(a=at(a)|0,a|0)}function Pg(s,a){s=s|0,a=a|0;var A=0,u=0,l=0,f=0,h=0,p=0,g=0,b=0,v=0,S=0;if(v=s+4|0,S=n[v>>2]|0,A=S&-8,p=s+A|0,!(S&3))return a>>>0<256?(s=0,s|0):(A>>>0>=(a+4|0)>>>0&&(A-a|0)>>>0<=n[7041]<<1>>>0||(s=0),s|0);if(A>>>0>=a>>>0)return A=A-a|0,A>>>0<=15||(b=s+a|0,n[v>>2]=S&1|a|2,n[b+4>>2]=A|3,S=p+4|0,n[S>>2]=n[S>>2]|1,uc(b,A)),s|0;if((n[6927]|0)==(p|0))return b=(n[6924]|0)+A|0,A=b-a|0,u=s+a|0,b>>>0<=a>>>0?(s=0,s|0):(n[v>>2]=S&1|a|2,n[u+4>>2]=A|1,n[6927]=u,n[6924]=A,s|0);if((n[6926]|0)==(p|0))return u=(n[6923]|0)+A|0,u>>>0<a>>>0?(s=0,s|0):(A=u-a|0,A>>>0>15?(b=s+a|0,u=s+u|0,n[v>>2]=S&1|a|2,n[b+4>>2]=A|1,n[u>>2]=A,u=u+4|0,n[u>>2]=n[u>>2]&-2,u=b):(n[v>>2]=S&1|u|2,u=s+u+4|0,n[u>>2]=n[u>>2]|1,u=0,A=0),n[6923]=A,n[6926]=u,s|0);if(u=n[p+4>>2]|0,u&2|0||(g=(u&-8)+A|0,g>>>0<a>>>0))return s=0,s|0;b=g-a|0,l=u>>>3;do if(u>>>0<256)if(u=n[p+8>>2]|0,A=n[p+12>>2]|0,(A|0)==(u|0)){n[6921]=n[6921]&~(1<<l);break}else{n[u+12>>2]=A,n[A+8>>2]=u;break}else{h=n[p+24>>2]|0,A=n[p+12>>2]|0;do if((A|0)==(p|0)){if(u=p+16|0,l=u+4|0,A=n[l>>2]|0,A)u=l;else if(A=n[u>>2]|0,!A){l=0;break}for(;;)if(f=A+20|0,l=n[f>>2]|0,l)A=l,u=f;else if(f=A+16|0,l=n[f>>2]|0,l)A=l,u=f;else break;n[u>>2]=0,l=A}else l=n[p+8>>2]|0,n[l+12>>2]=A,n[A+8>>2]=l,l=A;while(!1);if(h|0){if(A=n[p+28>>2]|0,u=27988+(A<<2)|0,(n[u>>2]|0)==(p|0)){if(n[u>>2]=l,!l){n[6922]=n[6922]&~(1<<A);break}}else if(f=h+16|0,n[((n[f>>2]|0)==(p|0)?f:h+20|0)>>2]=l,!l)break;n[l+24>>2]=h,A=p+16|0,u=n[A>>2]|0,u|0&&(n[l+16>>2]=u,n[u+24>>2]=l),A=n[A+4>>2]|0,A|0&&(n[l+20>>2]=A,n[A+24>>2]=l)}}while(!1);return b>>>0<16?(n[v>>2]=S&1|g|2,S=s+g+4|0,n[S>>2]=n[S>>2]|1,s|0):(p=s+a|0,n[v>>2]=S&1|a|2,n[p+4>>2]=b|3,S=s+g+4|0,n[S>>2]=n[S>>2]|1,uc(p,b),s|0)}function uc(s,a){s=s|0,a=a|0;var A=0,u=0,l=0,f=0,h=0,p=0;p=s+a|0,A=n[s+4>>2]|0;do if(A&1)h=s;else{if(l=n[s>>2]|0,!(A&3))return;if(h=s+(0-l)|0,a=l+a|0,(n[6926]|0)==(h|0)){if(s=p+4|0,A=n[s>>2]|0,(A&3|0)!=3)break;n[6923]=a,n[s>>2]=A&-2,n[h+4>>2]=a|1,n[p>>2]=a;return}if(u=l>>>3,l>>>0<256)if(s=n[h+8>>2]|0,A=n[h+12>>2]|0,(A|0)==(s|0)){n[6921]=n[6921]&~(1<<u);break}else{n[s+12>>2]=A,n[A+8>>2]=s;break}f=n[h+24>>2]|0,s=n[h+12>>2]|0;do if((s|0)==(h|0)){if(A=h+16|0,u=A+4|0,s=n[u>>2]|0,s)A=u;else if(s=n[A>>2]|0,!s){s=0;break}for(;;)if(l=s+20|0,u=n[l>>2]|0,u)s=u,A=l;else if(l=s+16|0,u=n[l>>2]|0,u)s=u,A=l;else break;n[A>>2]=0}else l=n[h+8>>2]|0,n[l+12>>2]=s,n[s+8>>2]=l;while(!1);if(f){if(A=n[h+28>>2]|0,u=27988+(A<<2)|0,(n[u>>2]|0)==(h|0)){if(n[u>>2]=s,!s){n[6922]=n[6922]&~(1<<A);break}}else if(l=f+16|0,n[((n[l>>2]|0)==(h|0)?l:f+20|0)>>2]=s,!s)break;n[s+24>>2]=f,A=h+16|0,u=n[A>>2]|0,u|0&&(n[s+16>>2]=u,n[u+24>>2]=s),A=n[A+4>>2]|0,A&&(n[s+20>>2]=A,n[A+24>>2]=s)}}while(!1);if(s=p+4|0,u=n[s>>2]|0,u&2)n[s>>2]=u&-2,n[h+4>>2]=a|1,n[h+a>>2]=a,l=a;else{if((n[6927]|0)==(p|0)){if(p=(n[6924]|0)+a|0,n[6924]=p,n[6927]=h,n[h+4>>2]=p|1,(h|0)!=(n[6926]|0))return;n[6926]=0,n[6923]=0;return}if((n[6926]|0)==(p|0)){p=(n[6923]|0)+a|0,n[6923]=p,n[6926]=h,n[h+4>>2]=p|1,n[h+p>>2]=p;return}l=(u&-8)+a|0,A=u>>>3;do if(u>>>0<256)if(s=n[p+8>>2]|0,a=n[p+12>>2]|0,(a|0)==(s|0)){n[6921]=n[6921]&~(1<<A);break}else{n[s+12>>2]=a,n[a+8>>2]=s;break}else{f=n[p+24>>2]|0,a=n[p+12>>2]|0;do if((a|0)==(p|0)){if(s=p+16|0,A=s+4|0,a=n[A>>2]|0,a)s=A;else if(a=n[s>>2]|0,!a){A=0;break}for(;;)if(u=a+20|0,A=n[u>>2]|0,A)a=A,s=u;else if(u=a+16|0,A=n[u>>2]|0,A)a=A,s=u;else break;n[s>>2]=0,A=a}else A=n[p+8>>2]|0,n[A+12>>2]=a,n[a+8>>2]=A,A=a;while(!1);if(f|0){if(a=n[p+28>>2]|0,s=27988+(a<<2)|0,(n[s>>2]|0)==(p|0)){if(n[s>>2]=A,!A){n[6922]=n[6922]&~(1<<a);break}}else if(u=f+16|0,n[((n[u>>2]|0)==(p|0)?u:f+20|0)>>2]=A,!A)break;n[A+24>>2]=f,a=p+16|0,s=n[a>>2]|0,s|0&&(n[A+16>>2]=s,n[s+24>>2]=A),a=n[a+4>>2]|0,a|0&&(n[A+20>>2]=a,n[a+24>>2]=A)}}while(!1);if(n[h+4>>2]=l|1,n[h+l>>2]=l,(h|0)==(n[6926]|0)){n[6923]=l;return}}if(a=l>>>3,l>>>0<256){A=27724+(a<<1<<2)|0,s=n[6921]|0,a=1<<a,s&a?(s=A+8|0,a=n[s>>2]|0):(n[6921]=s|a,a=A,s=A+8|0),n[s>>2]=h,n[a+12>>2]=h,n[h+8>>2]=a,n[h+12>>2]=A;return}if(a=l>>>8,a?l>>>0>16777215?u=31:(f=(a+1048320|0)>>>16&8,p=a<<f,A=(p+520192|0)>>>16&4,p=p<<A,u=(p+245760|0)>>>16&2,u=14-(A|f|u)+(p<<u>>>15)|0,u=l>>>(u+7|0)&1|u<<1):u=0,a=27988+(u<<2)|0,n[h+28>>2]=u,n[h+20>>2]=0,n[h+16>>2]=0,s=n[6922]|0,A=1<<u,!(s&A)){n[6922]=s|A,n[a>>2]=h,n[h+24>>2]=a,n[h+12>>2]=h,n[h+8>>2]=h;return}a=n[a>>2]|0;e:do if((n[a+4>>2]&-8|0)!=(l|0)){for(u=l<<((u|0)==31?0:25-(u>>>1)|0);A=a+16+(u>>>31<<2)|0,s=n[A>>2]|0,!!s;)if((n[s+4>>2]&-8|0)==(l|0)){a=s;break e}else u=u<<1,a=s;n[A>>2]=h,n[h+24>>2]=a,n[h+12>>2]=h,n[h+8>>2]=h;return}while(!1);f=a+8|0,p=n[f>>2]|0,n[p+12>>2]=h,n[f>>2]=h,n[h+8>>2]=p,n[h+12>>2]=a,n[h+24>>2]=0}function de(s,a,A,u){return s=s|0,a=a|0,A=A|0,u=u|0,A=s+A>>>0,Re(a+u+(A>>>0<s>>>0|0)>>>0|0),A|0|0}function yt(s,a,A,u){return s=s|0,a=a|0,A=A|0,u=u|0,u=a-u-(A>>>0>s>>>0|0)>>>0,Re(u|0),s-A>>>0|0|0}function fc(s){return s=s|0,(s?31-(Nr(s^s-1)|0)|0:32)|0}function ia(s,a,A,u,l){s=s|0,a=a|0,A=A|0,u=u|0,l=l|0;var f=0,h=0,p=0,g=0,b=0,v=0,S=0,E=0,x=0,C=0;if(v=s,g=a,b=g,h=A,E=u,p=E,!b)return f=(l|0)!=0,p?f?(n[l>>2]=s|0,n[l+4>>2]=a&0,E=0,l=0,Re(E|0),l|0):(E=0,l=0,Re(E|0),l|0):(f&&(n[l>>2]=(v>>>0)%(h>>>0),n[l+4>>2]=0),E=0,l=(v>>>0)/(h>>>0)>>>0,Re(E|0),l|0);f=(p|0)==0;do if(h){if(!f){if(f=(Nr(p|0)|0)-(Nr(b|0)|0)|0,f>>>0<=31){S=f+1|0,p=31-f|0,a=f-31>>31,h=S,s=v>>>(S>>>0)&a|b<<p,a=b>>>(S>>>0)&a,f=0,p=v<<p;break}return l?(n[l>>2]=s|0,n[l+4>>2]=g|a&0,E=0,l=0,Re(E|0),l|0):(E=0,l=0,Re(E|0),l|0)}if(f=h-1|0,f&h|0){p=(Nr(h|0)|0)+33-(Nr(b|0)|0)|0,C=64-p|0,S=32-p|0,g=S>>31,x=p-32|0,a=x>>31,h=p,s=S-1>>31&b>>>(x>>>0)|(b<<S|v>>>(p>>>0))&a,a=a&b>>>(p>>>0),f=v<<C&g,p=(b<<C|v>>>(x>>>0))&g|v<<S&p-33>>31;break}return l|0&&(n[l>>2]=f&v,n[l+4>>2]=0),(h|0)==1?(x=g|a&0,C=s|0|0,Re(x|0),C|0):(C=fc(h|0)|0,x=b>>>(C>>>0)|0,C=b<<32-C|v>>>(C>>>0)|0,Re(x|0),C|0)}else{if(f)return l|0&&(n[l>>2]=(b>>>0)%(h>>>0),n[l+4>>2]=0),x=0,C=(b>>>0)/(h>>>0)>>>0,Re(x|0),C|0;if(!v)return l|0&&(n[l>>2]=0,n[l+4>>2]=(b>>>0)%(p>>>0)),x=0,C=(b>>>0)/(p>>>0)>>>0,Re(x|0),C|0;if(f=p-1|0,!(f&p))return l|0&&(n[l>>2]=s|0,n[l+4>>2]=f&b|a&0),x=0,C=b>>>((fc(p|0)|0)>>>0),Re(x|0),C|0;if(f=(Nr(p|0)|0)-(Nr(b|0)|0)|0,f>>>0<=30){a=f+1|0,p=31-f|0,h=a,s=b<<p|v>>>(a>>>0),a=b>>>(a>>>0),f=0,p=v<<p;break}return l?(n[l>>2]=s|0,n[l+4>>2]=g|a&0,x=0,C=0,Re(x|0),C|0):(x=0,C=0,Re(x|0),C|0)}while(!1);if(!h)b=p,g=0,p=0;else{S=A|0|0,v=E|u&0,b=de(S|0,v|0,-1,-1)|0,A=R()|0,g=p,p=0;do u=g,g=f>>>31|g<<1,f=p|f<<1,u=s<<1|u>>>31|0,E=s>>>31|a<<1|0,yt(b|0,A|0,u|0,E|0)|0,C=R()|0,x=C>>31|((C|0)<0?-1:0)<<1,p=x&1,s=yt(u|0,E|0,x&S|0,(((C|0)<0?-1:0)>>31|((C|0)<0?-1:0)<<1)&v|0)|0,a=R()|0,h=h-1|0;while((h|0)!=0);b=g,g=0}return h=0,l|0&&(n[l>>2]=s,n[l+4>>2]=a),x=(f|0)>>>31|(b|h)<<1|(h<<1|f>>>31)&0|g,C=(f<<1|0)&-2|p,Re(x|0),C|0}function Hr(s,a,A,u){s=s|0,a=a|0,A=A|0,u=u|0;var l=0,f=0,h=0,p=0,g=0,b=0;return b=a>>31|((a|0)<0?-1:0)<<1,g=((a|0)<0?-1:0)>>31|((a|0)<0?-1:0)<<1,f=u>>31|((u|0)<0?-1:0)<<1,l=((u|0)<0?-1:0)>>31|((u|0)<0?-1:0)<<1,p=yt(b^s|0,g^a|0,b|0,g|0)|0,h=R()|0,s=f^b,a=l^g,yt((ia(p,h,yt(f^A|0,l^u|0,f|0,l|0)|0,R()|0,0)|0)^s|0,(R()|0)^a|0,s|0,a|0)|0}function Lg(s,a){s=s|0,a=a|0;var A=0,u=0,l=0,f=0;return f=s&65535,l=a&65535,A=Ht(l,f)|0,u=s>>>16,s=(A>>>16)+(Ht(l,u)|0)|0,l=a>>>16,a=Ht(l,f)|0,Re((s>>>16)+(Ht(l,u)|0)+(((s&65535)+a|0)>>>16)|0),s+a<<16|A&65535|0|0}function At(s,a,A,u){s=s|0,a=a|0,A=A|0,u=u|0;var l=0,f=0;return l=s,f=A,A=Lg(l,f)|0,s=R()|0,Re((Ht(a,f)|0)+(Ht(u,l)|0)+s|s&0|0),A|0|0|0}function qr(s,a,A,u){s=s|0,a=a|0,A=A|0,u=u|0;var l=0,f=0,h=0,p=0,g=0,b=0;return l=I,I=I+16|0,p=l|0,h=a>>31|((a|0)<0?-1:0)<<1,f=((a|0)<0?-1:0)>>31|((a|0)<0?-1:0)<<1,b=u>>31|((u|0)<0?-1:0)<<1,g=((u|0)<0?-1:0)>>31|((u|0)<0?-1:0)<<1,s=yt(h^s|0,f^a|0,h|0,f|0)|0,a=R()|0,ia(s,a,yt(b^A|0,g^u|0,b|0,g|0)|0,R()|0,p)|0,u=yt(n[p>>2]^h|0,n[p+4>>2]^f|0,h|0,f|0)|0,A=R()|0,I=l,Re(A|0),u|0}function Pr(s,a,A,u){s=s|0,a=a|0,A=A|0,u=u|0;var l=0,f=0;return f=I,I=I+16|0,l=f|0,ia(s,a,A,u,l)|0,I=f,Re(n[l+4>>2]|0),n[l>>2]|0|0}function hc(s,a,A){return s=s|0,a=a|0,A=A|0,(A|0)<32?(Re(a>>A|0),s>>>A|(a&(1<<A)-1)<<32-A):(Re(((a|0)<0?-1:0)|0),a>>A-32|0)}function oe(s,a,A){return s=s|0,a=a|0,A=A|0,(A|0)<32?(Re(a>>>A|0),s>>>A|(a&(1<<A)-1)<<32-A):(Re(0),a>>>A-32|0)}function le(s,a,A){return s=s|0,a=a|0,A=A|0,(A|0)<32?(Re(a<<A|(s&(1<<A)-1<<32-A)>>>32-A|0),s<<A):(Re(s<<A-32|0),0)}function sa(s,a,A){return s=s|0,a=a|0,a=Nr(a)|0,(a|0)==32&&(a=a+(Nr(s)|0)|0),Re(0),a|0}function dc(s,a){return s=+s,a=+a,s!=s?+a:a!=a?+s:+Zp(+s,+a)}function us(s,a){return s=+s,a=+a,s!=s?+a:a!=a?+s:+Oo(+s,+a)}function fs(s){return s=+s,s>=0?+Et(s+.5):+Ln(s-.5)}function mr(s,a,A){s=s|0,a=a|0,A=A|0;var u=0,l=0,f=0;if((A|0)>=8192)return rm(s|0,a|0,A|0)|0,s|0;if(f=s|0,l=s+A|0,(s&3)==(a&3)){for(;s&3;){if(!A)return f|0;ne[s>>0]=ne[a>>0]|0,s=s+1|0,a=a+1|0,A=A-1|0}for(A=l&-4|0,u=A-64|0;(s|0)<=(u|0);)n[s>>2]=n[a>>2],n[s+4>>2]=n[a+4>>2],n[s+8>>2]=n[a+8>>2],n[s+12>>2]=n[a+12>>2],n[s+16>>2]=n[a+16>>2],n[s+20>>2]=n[a+20>>2],n[s+24>>2]=n[a+24>>2],n[s+28>>2]=n[a+28>>2],n[s+32>>2]=n[a+32>>2],n[s+36>>2]=n[a+36>>2],n[s+40>>2]=n[a+40>>2],n[s+44>>2]=n[a+44>>2],n[s+48>>2]=n[a+48>>2],n[s+52>>2]=n[a+52>>2],n[s+56>>2]=n[a+56>>2],n[s+60>>2]=n[a+60>>2],s=s+64|0,a=a+64|0;for(;(s|0)<(A|0);)n[s>>2]=n[a>>2],s=s+4|0,a=a+4|0}else for(A=l-4|0;(s|0)<(A|0);)ne[s>>0]=ne[a>>0]|0,ne[s+1>>0]=ne[a+1>>0]|0,ne[s+2>>0]=ne[a+2>>0]|0,ne[s+3>>0]=ne[a+3>>0]|0,s=s+4|0,a=a+4|0;for(;(s|0)<(l|0);)ne[s>>0]=ne[a>>0]|0,s=s+1|0,a=a+1|0;return f|0}function oa(s,a,A){s=s|0,a=a|0,A=A|0;var u=0;if((a|0)<(s|0)&(s|0)<(a+A|0)){for(u=s,a=a+A|0,s=s+A|0;(A|0)>0;)s=s-1|0,a=a-1|0,A=A-1|0,ne[s>>0]=ne[a>>0]|0;s=u}else mr(s,a,A)|0;return s|0}function Qr(s,a,A){s=s|0,a=a|0,A=A|0;var u=0,l=0,f=0,h=0;if(f=s+A|0,a=a&255,(A|0)>=67){for(;s&3;)ne[s>>0]=a,s=s+1|0;for(u=f&-4|0,h=a|a<<8|a<<16|a<<24,l=u-64|0;(s|0)<=(l|0);)n[s>>2]=h,n[s+4>>2]=h,n[s+8>>2]=h,n[s+12>>2]=h,n[s+16>>2]=h,n[s+20>>2]=h,n[s+24>>2]=h,n[s+28>>2]=h,n[s+32>>2]=h,n[s+36>>2]=h,n[s+40>>2]=h,n[s+44>>2]=h,n[s+48>>2]=h,n[s+52>>2]=h,n[s+56>>2]=h,n[s+60>>2]=h,s=s+64|0;for(;(s|0)<(u|0);)n[s>>2]=h,s=s+4|0}for(;(s|0)<(f|0);)ne[s>>0]=a,s=s+1|0;return f-A|0}function pc(s){return s=+s,s>=0?+Et(s+.5):+Ln(s-.5)}function Wr(s){s=s|0;var a=0,A=0,u=0;return u=tm()|0,A=n[$e>>2]|0,a=A+s|0,(s|0)>0&(a|0)<(A|0)|(a|0)<0?(im(a|0)|0,R0(12),-1):(a|0)>(u|0)&&!(nm(a|0)|0)?(R0(12),-1):(n[$e>>2]=a,A|0)}function kg(s,a,A){return s=s|0,a=a|0,A=A|0,Kr[s&3](a|0,A|0)|0}function Og(s,a){return em(0),0}var Kr=[Og,Nm,Pm,Lm];return{___divdi3:Hr,___muldi3:At,___remdi3:qr,___uremdi3:Pr,_areNeighborCells:km,_bitshift64Ashr:hc,_bitshift64Lshr:oe,_bitshift64Shl:le,_calloc:Bt,_cellAreaKm2:gm,_cellAreaM2:bm,_cellAreaRads2:mm,_cellToBoundary:ln,_cellToCenterChild:K0,_cellToChildPos:eg,_cellToChildren:qm,_cellToChildrenSize:Ti,_cellToLatLng:Fn,_cellToLocalIj:fg,_cellToParent:qo,_cellToVertex:Ar,_cellToVertexes:Ig,_cellsToDirectedEdge:Om,_cellsToLinkedMultiPolygon:pm,_childPosToCell:tg,_compactCells:Qm,_constructCell:zm,_destroyLinkedMultiPolygon:lg,_directedEdgeToBoundary:bi,_directedEdgeToCells:Dm,_edgeLengthKm:Ag,_edgeLengthM:cg,_edgeLengthRads:ag,_emscripten_replace_memory:sm,_free:ge,_getBaseCellNumber:Q0,_getDirectedEdgeDestination:Bm,_getDirectedEdgeOrigin:Fm,_getHexagonAreaAvgKm2:Y0,_getHexagonAreaAvgM2:ig,_getHexagonEdgeLengthAvgKm:sg,_getHexagonEdgeLengthAvgM:og,_getIcosahedronFaces:$0,_getIndexDigit:Gm,_getNumCells:is,_getPentagons:Xo,_getRes0Cells:Sm,_getResolution:zo,_greatCircleDistanceKm:yi,_greatCircleDistanceM:ng,_greatCircleDistanceRads:rg,_gridDisk:N0,_gridDiskDistances:P0,_gridDistance:Zo,_gridPathCells:pg,_gridPathCellsSize:dg,_gridRing:um,_gridRingUnsafe:k0,_i64Add:de,_i64Subtract:yt,_isPentagon:Ye,_isResClassIII:$m,_isValidCell:ns,_isValidDirectedEdge:G0,_isValidIndex:Hm,_isValidVertex:oc,_latLngToCell:Ko,_llvm_ctlz_i64:sa,_llvm_maxnum_f64:dc,_llvm_minnum_f64:us,_llvm_round_f64:fs,_localIjToCell:hg,_malloc:at,_maxFaceCount:Jm,_maxGridDiskSize:lm,_maxPolygonToCellsSize:hm,_maxPolygonToCellsSizeExperimental:bg,_memcpy:mr,_memmove:oa,_memset:Qr,_originToDirectedEdges:Vo,_pentagonCount:Zm,_polygonToCells:dm,_polygonToCellsExperimental:gg,_readInt64AsDoubleFromPointer:xg,_res0CellCount:ym,_reverseDirectedEdge:z0,_round:pc,_sbrk:Wr,_sizeOfCellBoundary:vg,_sizeOfCoordIJ:Eg,_sizeOfGeoLoop:yg,_sizeOfGeoPolygon:Sg,_sizeOfH3Index:_g,_sizeOfLatLng:Tg,_sizeOfLinkedGeoPolygon:wg,_uncompactCells:Wm,_uncompactCellsSize:Km,_vertexToLatLng:Rg,dynCall_iii:kg,establishStackSpace:cm,stackAlloc:om,stackRestore:Am,stackSave:am}})(Kp,$p,U);e.___divdi3=ce.___divdi3,e.___muldi3=ce.___muldi3,e.___remdi3=ce.___remdi3,e.___uremdi3=ce.___uremdi3,e._areNeighborCells=ce._areNeighborCells,e._bitshift64Ashr=ce._bitshift64Ashr,e._bitshift64Lshr=ce._bitshift64Lshr,e._bitshift64Shl=ce._bitshift64Shl,e._calloc=ce._calloc,e._cellAreaKm2=ce._cellAreaKm2,e._cellAreaM2=ce._cellAreaM2,e._cellAreaRads2=ce._cellAreaRads2,e._cellToBoundary=ce._cellToBoundary,e._cellToCenterChild=ce._cellToCenterChild,e._cellToChildPos=ce._cellToChildPos,e._cellToChildren=ce._cellToChildren,e._cellToChildrenSize=ce._cellToChildrenSize,e._cellToLatLng=ce._cellToLatLng,e._cellToLocalIj=ce._cellToLocalIj,e._cellToParent=ce._cellToParent,e._cellToVertex=ce._cellToVertex,e._cellToVertexes=ce._cellToVertexes,e._cellsToDirectedEdge=ce._cellsToDirectedEdge,e._cellsToLinkedMultiPolygon=ce._cellsToLinkedMultiPolygon,e._childPosToCell=ce._childPosToCell,e._compactCells=ce._compactCells,e._constructCell=ce._constructCell,e._destroyLinkedMultiPolygon=ce._destroyLinkedMultiPolygon,e._directedEdgeToBoundary=ce._directedEdgeToBoundary,e._directedEdgeToCells=ce._directedEdgeToCells,e._edgeLengthKm=ce._edgeLengthKm,e._edgeLengthM=ce._edgeLengthM,e._edgeLengthRads=ce._edgeLengthRads;var Xp=e._emscripten_replace_memory=ce._emscripten_replace_memory;e._free=ce._free,e._getBaseCellNumber=ce._getBaseCellNumber,e._getDirectedEdgeDestination=ce._getDirectedEdgeDestination,e._getDirectedEdgeOrigin=ce._getDirectedEdgeOrigin,e._getHexagonAreaAvgKm2=ce._getHexagonAreaAvgKm2,e._getHexagonAreaAvgM2=ce._getHexagonAreaAvgM2,e._getHexagonEdgeLengthAvgKm=ce._getHexagonEdgeLengthAvgKm,e._getHexagonEdgeLengthAvgM=ce._getHexagonEdgeLengthAvgM,e._getIcosahedronFaces=ce._getIcosahedronFaces,e._getIndexDigit=ce._getIndexDigit,e._getNumCells=ce._getNumCells,e._getPentagons=ce._getPentagons,e._getRes0Cells=ce._getRes0Cells,e._getResolution=ce._getResolution,e._greatCircleDistanceKm=ce._greatCircleDistanceKm,e._greatCircleDistanceM=ce._greatCircleDistanceM,e._greatCircleDistanceRads=ce._greatCircleDistanceRads,e._gridDisk=ce._gridDisk,e._gridDiskDistances=ce._gridDiskDistances,e._gridDistance=ce._gridDistance,e._gridPathCells=ce._gridPathCells,e._gridPathCellsSize=ce._gridPathCellsSize,e._gridRing=ce._gridRing,e._gridRingUnsafe=ce._gridRingUnsafe,e._i64Add=ce._i64Add,e._i64Subtract=ce._i64Subtract,e._isPentagon=ce._isPentagon,e._isResClassIII=ce._isResClassIII,e._isValidCell=ce._isValidCell,e._isValidDirectedEdge=ce._isValidDirectedEdge,e._isValidIndex=ce._isValidIndex,e._isValidVertex=ce._isValidVertex,e._latLngToCell=ce._latLngToCell,e._llvm_ctlz_i64=ce._llvm_ctlz_i64,e._llvm_maxnum_f64=ce._llvm_maxnum_f64,e._llvm_minnum_f64=ce._llvm_minnum_f64,e._llvm_round_f64=ce._llvm_round_f64,e._localIjToCell=ce._localIjToCell,e._malloc=ce._malloc,e._maxFaceCount=ce._maxFaceCount,e._maxGridDiskSize=ce._maxGridDiskSize,e._maxPolygonToCellsSize=ce._maxPolygonToCellsSize,e._maxPolygonToCellsSizeExperimental=ce._maxPolygonToCellsSizeExperimental,e._memcpy=ce._memcpy,e._memmove=ce._memmove,e._memset=ce._memset,e._originToDirectedEdges=ce._originToDirectedEdges,e._pentagonCount=ce._pentagonCount,e._polygonToCells=ce._polygonToCells,e._polygonToCellsExperimental=ce._polygonToCellsExperimental,e._readInt64AsDoubleFromPointer=ce._readInt64AsDoubleFromPointer,e._res0CellCount=ce._res0CellCount,e._reverseDirectedEdge=ce._reverseDirectedEdge,e._round=ce._round,e._sbrk=ce._sbrk,e._sizeOfCellBoundary=ce._sizeOfCellBoundary,e._sizeOfCoordIJ=ce._sizeOfCoordIJ,e._sizeOfGeoLoop=ce._sizeOfGeoLoop,e._sizeOfGeoPolygon=ce._sizeOfGeoPolygon,e._sizeOfH3Index=ce._sizeOfH3Index,e._sizeOfLatLng=ce._sizeOfLatLng,e._sizeOfLinkedGeoPolygon=ce._sizeOfLinkedGeoPolygon,e._uncompactCells=ce._uncompactCells,e._uncompactCellsSize=ce._uncompactCellsSize,e._vertexToLatLng=ce._vertexToLatLng,e.establishStackSpace=ce.establishStackSpace;var E0=e.stackAlloc=ce.stackAlloc,Yp=e.stackRestore=ce.stackRestore,Jp=e.stackSave=ce.stackSave;if(e.dynCall_iii=ce.dynCall_iii,e.asm=ce,e.cwrap=J,e.setValue=N,e.getValue=O,Rr){S0(Rr)||(Rr=c(Rr));{Bp();var Lo=function(te){te.byteLength&&(te=new Uint8Array(te)),ve.set(te,M),e.memoryInitializerRequest&&delete e.memoryInitializerRequest.response,Dp()},x0=function(){d(Rr,Lo,function(){throw"could not load memory initializer "+Rr})},C0=Po(Rr);if(C0)Lo(C0.buffer);else if(e.memoryInitializerRequest){var M0=function(){var te=e.memoryInitializerRequest,ae=te.response;if(te.status!==200&&te.status!==0){var _e=Po(e.memoryInitializerRequestURL);if(_e)ae=_e.buffer;else{console.warn("a problem seems to have happened with Module.memoryInitializerRequest, status: "+te.status+", retrying "+Rr),x0();return}}Lo(ae)};e.memoryInitializerRequest.response?setTimeout(M0,0):e.memoryInitializerRequest.addEventListener("load",M0)}else x0()}}var es;gi=function te(){es||ko(),es||(gi=te)};function ko(te){if(an>0||(wt(),an>0))return;function ae(){es||(es=!0,!F&&(Gt(),sr(),e.onRuntimeInitialized&&e.onRuntimeInitialized(),on()))}e.setStatus?(e.setStatus("Running..."),setTimeout(function(){setTimeout(function(){e.setStatus("")},1),ae()},1)):ae()}e.run=ko;function An(te){throw e.onAbort&&e.onAbort(te),te+="",m(te),_(te),F=!0,"abort("+te+"). Build with -s ASSERTIONS=1 for more info."}if(e.abort=An,e.preInit)for(typeof e.preInit=="function"&&(e.preInit=[e.preInit]);e.preInit.length>0;)e.preInit.pop()();return ko(),r})(typeof He=="object"?He:{}),xe="number",Ee=xe,Dn=xe,Ce=xe,Me=xe,Mt=xe,ye=xe,x_=[["sizeOfH3Index",xe],["sizeOfLatLng",xe],["sizeOfCellBoundary",xe],["sizeOfGeoLoop",xe],["sizeOfGeoPolygon",xe],["sizeOfLinkedGeoPolygon",xe],["sizeOfCoordIJ",xe],["readInt64AsDoubleFromPointer",xe],["isValidCell",Dn,[Ce,Me]],["isValidIndex",Dn,[Ce,Me]],["latLngToCell",Ee,[xe,xe,Mt,ye]],["cellToLatLng",Ee,[Ce,Me,ye]],["cellToBoundary",Ee,[Ce,Me,ye]],["maxGridDiskSize",Ee,[xe,ye]],["gridDisk",Ee,[Ce,Me,xe,ye]],["gridDiskDistances",Ee,[Ce,Me,xe,ye,ye]],["gridRing",Ee,[Ce,Me,xe,ye]],["gridRingUnsafe",Ee,[Ce,Me,xe,ye]],["maxPolygonToCellsSize",Ee,[ye,Mt,xe,ye]],["polygonToCells",Ee,[ye,Mt,xe,ye]],["maxPolygonToCellsSizeExperimental",Ee,[ye,Mt,xe,ye]],["polygonToCellsExperimental",Ee,[ye,Mt,xe,xe,xe,ye]],["cellsToLinkedMultiPolygon",Ee,[ye,xe,ye]],["destroyLinkedMultiPolygon",null,[ye]],["compactCells",Ee,[ye,ye,xe,xe]],["uncompactCells",Ee,[ye,xe,xe,ye,xe,Mt]],["uncompactCellsSize",Ee,[ye,xe,xe,Mt,ye]],["isPentagon",Dn,[Ce,Me]],["isResClassIII",Dn,[Ce,Me]],["getBaseCellNumber",xe,[Ce,Me]],["getResolution",xe,[Ce,Me]],["getIndexDigit",xe,[Ce,Me,xe]],["constructCell",Ee,[xe,xe,ye,ye]],["maxFaceCount",Ee,[Ce,Me,ye]],["getIcosahedronFaces",Ee,[Ce,Me,ye]],["cellToParent",Ee,[Ce,Me,Mt,ye]],["cellToChildren",Ee,[Ce,Me,Mt,ye]],["cellToCenterChild",Ee,[Ce,Me,Mt,ye]],["cellToChildrenSize",Ee,[Ce,Me,Mt,ye]],["cellToChildPos",Ee,[Ce,Me,Mt,ye]],["childPosToCell",Ee,[xe,xe,Ce,Me,Mt,ye]],["areNeighborCells",Ee,[Ce,Me,Ce,Me,ye]],["cellsToDirectedEdge",Ee,[Ce,Me,Ce,Me,ye]],["getDirectedEdgeOrigin",Ee,[Ce,Me,ye]],["getDirectedEdgeDestination",Ee,[Ce,Me,ye]],["isValidDirectedEdge",Dn,[Ce,Me]],["directedEdgeToCells",Ee,[Ce,Me,ye]],["originToDirectedEdges",Ee,[Ce,Me,ye]],["directedEdgeToBoundary",Ee,[Ce,Me,ye]],["reverseDirectedEdge",Ee,[Ce,Me,ye]],["gridDistance",Ee,[Ce,Me,Ce,Me,ye]],["gridPathCells",Ee,[Ce,Me,Ce,Me,ye]],["gridPathCellsSize",Ee,[Ce,Me,Ce,Me,ye]],["cellToLocalIj",Ee,[Ce,Me,Ce,Me,xe,ye]],["localIjToCell",Ee,[Ce,Me,ye,xe,ye]],["getHexagonAreaAvgM2",Ee,[Mt,ye]],["getHexagonAreaAvgKm2",Ee,[Mt,ye]],["getHexagonEdgeLengthAvgM",Ee,[Mt,ye]],["getHexagonEdgeLengthAvgKm",Ee,[Mt,ye]],["greatCircleDistanceM",xe,[ye,ye]],["greatCircleDistanceKm",xe,[ye,ye]],["greatCircleDistanceRads",xe,[ye,ye]],["cellAreaM2",Ee,[Ce,Me,ye]],["cellAreaKm2",Ee,[Ce,Me,ye]],["cellAreaRads2",Ee,[Ce,Me,ye]],["edgeLengthM",Ee,[Ce,Me,ye]],["edgeLengthKm",Ee,[Ce,Me,ye]],["edgeLengthRads",Ee,[Ce,Me,ye]],["getNumCells",Ee,[Mt,ye]],["getRes0Cells",Ee,[ye]],["res0CellCount",xe],["getPentagons",Ee,[xe,ye]],["pentagonCount",xe],["cellToVertex",Ee,[Ce,Me,xe,ye]],["cellToVertexes",Ee,[Ce,Me,ye]],["vertexToLatLng",Ee,[Ce,Me,ye]],["isValidVertex",Dn,[Ce,Me]]],C_=0,M_=1,I_=2,R_=3,_h=4,N_=5,P_=6,L_=7,k_=8,O_=9,F_=10,B_=11,D_=12,U_=13,V_=14,j_=15,G_=16,z_=17,H_=18,q_=19,mt={};mt[C_]="Success";mt[M_]="The operation failed but a more specific error is not available";mt[I_]="Argument was outside of acceptable range";mt[R_]="Latitude or longitude arguments were outside of acceptable range";mt[_h]="Resolution argument was outside of acceptable range";mt[N_]="Cell argument was not valid";mt[P_]="Directed edge argument was not valid";mt[L_]="Undirected edge argument was not valid";mt[k_]="Vertex argument was not valid";mt[O_]="Pentagon distortion was encountered";mt[F_]="Duplicate input";mt[B_]="Cell arguments were not neighbors";mt[D_]="Cell arguments had incompatible resolutions";mt[U_]="Memory allocation failed";mt[V_]="Bounds of provided memory were insufficient";mt[j_]="Mode or flags argument was not valid";mt[G_]="Index argument was not valid";mt[z_]="Base cell number was outside of acceptable range";mt[H_]="Child indexing digits invalid";mt[q_]="Child indexing digits refer to a deleted subsequence";var Th=1e3,Q_=1001,vh=1002,vo={};vo[Th]="Unknown unit";vo[Q_]="Array length out of bounds";vo[vh]="Got unexpected null value for H3 index";var W_="Unknown error";function yh(r,e,t){var i=t&&"value"in t,o=new Error((r[e]||W_)+" (code: "+e+(i?", value: "+t.value:"")+")");return o.code=e,o}function Sh(r,e){var t=arguments.length===2?{value:e}:{};return yh(mt,r,t)}function wh(r,e){var t=arguments.length===2?{value:e}:{};return yh(vo,r,t)}function En(r){if(r!==0)throw Sh(r)}var Tt={};x_.forEach(function(e){Tt[e[0]]=He.cwrap.apply(He,e)});var Qn=16,Eh=4,Zc=4,rn=8,K_=8,Js=Tt.sizeOfH3Index(),xh=Tt.sizeOfLatLng(),$_=Tt.sizeOfCellBoundary();Tt.sizeOfGeoPolygon();Tt.sizeOfGeoLoop();var X_=Tt.sizeOfLinkedGeoPolygon();Tt.sizeOfCoordIJ();var el={m:"m",m2:"m2",km:"km",km2:"km2",rads:"rads",rads2:"rads2"};function Y_(r){if(typeof r!="number"||r<0||r>15||Math.floor(r)!==r)throw Sh(_h,r);return r}function J_(r){if(!r)throw wh(vh);return r}var Z_=/[^0-9a-fA-F]/;function xn(r){if(Array.isArray(r)&&r.length===2&&Number.isInteger(r[0])&&Number.isInteger(r[1]))return r;if(typeof r!="string"||Z_.test(r))return[0,0];var e=parseInt(r.substring(0,r.length-8),Qn),t=parseInt(r.substring(r.length-8),Qn);return[t,e]}function tl(r){if(r>=0)return r.toString(Qn);r=r&2147483647;var e=Ch(8,r.toString(Qn)),t=(parseInt(e[0],Qn)+8).toString(Qn);return e=t+e.substring(1),e}function eT(r,e){return tl(e)+Ch(8,tl(r))}function Ch(r,e){for(var t=r-e.length,i="",o=0;o<t;o++)i+="0";return i=i+e,i}function tT(r,e){e===void 0&&(e=0);var t=He.getValue(r+Js*e,"i32"),i=He.getValue(r+Js*e+Eh,"i32");return i?eT(t,i):null}function rT(r,e){return e===void 0&&(e=0),He.getValue(r+rn*e,"double")}function nT(r){return Tt.readInt64AsDoubleFromPointer(r)}function iT(r,e,t){He.HEAPU32.set(xn(r),e/Eh+2*t)}function sT(r,e){for(var t=e.length,i=0;i<t;i++)iT(e[i],r,i)}function Zs(r){return gT(He.getValue(r,"double"))}function oT(r){return[Zs(r),Zs(r+rn)]}function Mh(r){return[Zs(r+rn),Zs(r)]}function aT(r,e,t){for(var i=He.getValue(r,"i32"),o=r+rn,c=[],d=Mh,m=0;m<i*2;m+=2)c.push(d(o+rn*m));return c.push(c[0]),c}function AT(r,e){for(var t=[],i=Mh,o,c,d,m;r;){for(t.push(o=[]),c=He.getValue(r,"i8*");c;){for(o.push(d=[]),m=He.getValue(c,"i8*");m;)d.push(i(m)),m=He.getValue(m+rn*2,"i8*");d.push(d[0]),c=He.getValue(c+Zc*2,"i8*")}r=He.getValue(r+Zc*2,"i8*")}return t}function cT(r){var e=xn(r),t=e[0],i=e[1];return!!Tt.isPentagon(t,i)}function lT(r){var e=xn(r),t=e[0],i=e[1];return Tt.isValidCell(t,i)?Tt.getResolution(t,i):-1}function uT(r,e,t){var i=He._malloc(xh);He.HEAPF64.set([r,e].map(mT),i/rn);var o=He._malloc(Js);try{return En(Tt.latLngToCell(i,t,o)),J_(tT(o))}finally{He._free(o),He._free(i)}}function $A(r){var e=He._malloc(xh),t=xn(r),i=t[0],o=t[1];try{return En(Tt.cellToLatLng(i,o,e)),oT(e)}finally{He._free(e)}}function fT(r,e){var t=He._malloc($_),i=xn(r),o=i[0],c=i[1];try{return En(Tt.cellToBoundary(o,c,t)),aT(t,e,e)}finally{He._free(t)}}function hT(r,e){if(!r||!r.length)return[];var t=r.length,i=He._calloc(t,Js);sT(i,r);var o=He._calloc(X_);try{return En(Tt.cellsToLinkedMultiPolygon(i,t,o)),AT(o,e)}finally{Tt.destroyLinkedMultiPolygon(o),He._free(o),He._free(i)}}function dT(r,e){var t=xn(r),i=t[0],o=t[1],c=xn(e),d=c[0],m=c[1],_=He._malloc(K_);try{return En(Tt.gridDistance(i,o,d,m,_)),nT(_)}finally{He._free(_)}}function pT(r,e){Y_(r);var t=He._malloc(rn);try{switch(e){case el.m:En(Tt.getHexagonEdgeLengthAvgM(r,t));break;case el.km:En(Tt.getHexagonEdgeLengthAvgKm(r,t));break;default:throw wh(Th,e)}return rT(t)}finally{He._free(t)}}function mT(r){return r*Math.PI/180}function gT(r){return r*180/Math.PI}function XA(r,e){e=e===void 0?r[0][0]:e;for(const t of r){const i=t[0]-e;i>180?t[0]-=360:i<-180&&(t[0]+=360)}}function bT(r,e,t){const[i,o]=$A(r),c=e.length;XA(e,o);const d=e[0]===e[c-1]?c-1:c;for(let m=0;m<d;m++)e[m][0]=qs(o,e[m][0],t),e[m][1]=qs(i,e[m][1],t)}function _T(r,e,t){const i=r(e,t),[o,c]=$A(i);return[c,o]}function rl(r,e=1){const t=fT(r,!0);return e!==1?bT(r,t,e):XA(t),t}function Ih(r){const e=new Float64Array(r.length*2);let t=0;for(const i of r)e[t++]=i[0],e[t++]=i[1];return e}const TT={getPentagon:{type:"accessor",value:r=>r.pentagon}};class Rh extends Cn{indexToBounds(){const{data:e,getPentagon:t}=this.props;return{data:e,_normalize:!1,_windingOrder:"CCW",positionFormat:"XY",getPolygon:(i,o)=>{const c=t(i,o),d=S_(typeof c=="string"?w_(c):c,{closedRing:!0,segments:"auto"});return Ih(d)}}}}Rh.layerName="A5Layer";Rh.defaultProps=TT;function vT(r){return typeof r=="string"?r.charAt(0).toLowerCase()+r.slice(1):r}function dA(r){if(Array.isArray(r))return r.map(e=>dA(e));if(r&&typeof r=="object"){const e={};for(const[t,i]of Object.entries(r))e[vT(t)]=dA(i);return e}return r}const Nh=":A-Za-z_\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD",yT=Nh+"\\-.\\d\\u00B7\\u0300-\\u036F\\u203F-\\u2040",ST="["+Nh+"]["+yT+"]*",wT=new RegExp("^"+ST+"$");function ET(r,e){const t=[];let i=e.exec(r);for(;i;){const o=[];o.startIndex=e.lastIndex-i[0].length;const c=i.length;for(let d=0;d<c;d++)o.push(i[d]);t.push(o),i=e.exec(r)}return t}const Ph=function(r){const e=wT.exec(r);return!(e===null||typeof e>"u")};function xT(r){return typeof r<"u"}const YA=["hasOwnProperty","toString","valueOf","__defineGetter__","__defineSetter__","__lookupGetter__","__lookupSetter__"],Lh=["__proto__","constructor","prototype"],CT={allowBooleanAttributes:!1,unpairedTags:[]};function MT(r,e){e=Object.assign({},CT,e);const t=[];let i=!1,o=!1;r[0]==="\uFEFF"&&(r=r.substr(1));for(let c=0;c<r.length;c++)if(r[c]==="<"&&r[c+1]==="?"){if(c+=2,c=nl(r,c),c.err)return c}else if(r[c]==="<"){let d=c;if(c++,r[c]==="!"){c=il(r,c);continue}else{let m=!1;r[c]==="/"&&(m=!0,c++);let _="";for(;c<r.length&&r[c]!==">"&&r[c]!==" "&&r[c]!=="	"&&r[c]!==`
`&&r[c]!=="\r";c++)_+=r[c];if(_=_.trim(),_[_.length-1]==="/"&&(_=_.substring(0,_.length-1),c--),!FT(_)){let w;return _.trim().length===0?w="Invalid space after '<'.":w="Tag '"+_+"' is an invalid name.",dt("InvalidTag",w,Vt(r,c))}const T=NT(r,c);if(T===!1)return dt("InvalidAttr","Attributes for '"+_+"' have open quote.",Vt(r,c));let y=T.value;if(c=T.index,y[y.length-1]==="/"){const w=c-y.length;y=y.substring(0,y.length-1);const M=sl(y,e);if(M===!0)i=!0;else return dt(M.err.code,M.err.msg,Vt(r,w+M.err.line))}else if(m)if(T.tagClosed){if(y.trim().length>0)return dt("InvalidTag","Closing tag '"+_+"' can't have attributes or invalid starting.",Vt(r,d));if(t.length===0)return dt("InvalidTag","Closing tag '"+_+"' has not been opened.",Vt(r,d));{const w=t.pop();if(_!==w.tagName){let M=Vt(r,w.tagStartPos);return dt("InvalidTag","Expected closing tag '"+w.tagName+"' (opened in line "+M.line+", col "+M.col+") instead of closing tag '"+_+"'.",Vt(r,d))}t.length==0&&(o=!0)}}else return dt("InvalidTag","Closing tag '"+_+"' doesn't have proper closing.",Vt(r,c));else{const w=sl(y,e);if(w!==!0)return dt(w.err.code,w.err.msg,Vt(r,c-y.length+w.err.line));if(o===!0)return dt("InvalidXml","Multiple possible root nodes found.",Vt(r,c));e.unpairedTags.indexOf(_)!==-1||t.push({tagName:_,tagStartPos:d}),i=!0}for(c++;c<r.length;c++)if(r[c]==="<")if(r[c+1]==="!"){c++,c=il(r,c);continue}else if(r[c+1]==="?"){if(c=nl(r,++c),c.err)return c}else break;else if(r[c]==="&"){const w=kT(r,c);if(w==-1)return dt("InvalidChar","char '&' is not expected.",Vt(r,c));c=w}else if(o===!0&&!Wn(r[c]))return dt("InvalidXml","Extra text at the end",Vt(r,c));r[c]==="<"&&c--}}else{if(Wn(r[c]))continue;return dt("InvalidChar","char '"+r[c]+"' is not expected.",Vt(r,c))}if(i){if(t.length==1)return dt("InvalidTag","Unclosed tag '"+t[0].tagName+"'.",Vt(r,t[0].tagStartPos));if(t.length>0)return dt("InvalidXml","Invalid '"+JSON.stringify(t.map(c=>c.tagName),null,4).replace(/\r?\n/g,"")+"' found.",{line:1,col:1})}else return dt("InvalidXml","Start tag expected.",1);return!0}function Wn(r){return r===" "||r==="	"||r===`
`||r==="\r"}function nl(r,e){const t=e;for(;e<r.length;e++)if(r[e]=="?"||r[e]==" "){const i=r.substr(t,e-t);if(e>5&&i==="xml")return dt("InvalidXml","XML declaration allowed only at the start of the document.",Vt(r,e));if(r[e]=="?"&&r[e+1]==">"){e++;break}else continue}return e}function il(r,e){if(r.length>e+5&&r[e+1]==="-"&&r[e+2]==="-"){for(e+=3;e<r.length;e++)if(r[e]==="-"&&r[e+1]==="-"&&r[e+2]===">"){e+=2;break}}else if(r.length>e+8&&r[e+1]==="D"&&r[e+2]==="O"&&r[e+3]==="C"&&r[e+4]==="T"&&r[e+5]==="Y"&&r[e+6]==="P"&&r[e+7]==="E"){let t=1;for(e+=8;e<r.length;e++)if(r[e]==="<")t++;else if(r[e]===">"&&(t--,t===0))break}else if(r.length>e+9&&r[e+1]==="["&&r[e+2]==="C"&&r[e+3]==="D"&&r[e+4]==="A"&&r[e+5]==="T"&&r[e+6]==="A"&&r[e+7]==="["){for(e+=8;e<r.length;e++)if(r[e]==="]"&&r[e+1]==="]"&&r[e+2]===">"){e+=2;break}}return e}const IT='"',RT="'";function NT(r,e){let t="",i="",o=!1;for(;e<r.length;e++){if(r[e]===IT||r[e]===RT)i===""?i=r[e]:i!==r[e]||(i="");else if(r[e]===">"&&i===""){o=!0;break}t+=r[e]}return i!==""?!1:{value:t,index:e,tagClosed:o}}function PT(r){const e=[],t=r.length;let i=0;for(;i<t;){const o=i;for(;i<t&&Wn(r[i]);)i++;if(i>=t)break;if(r[i]==="="){i=o+1;continue}const c=r.slice(o,i),d=i;for(;i<t&&!Wn(r[i])&&r[i]!=="=";)i++;const m=r.slice(d,i);let _,T=i;for(;T<t&&Wn(r[T]);)T++;T<t&&r[T]==="="&&(_=r.slice(i,T+1),i=T+1);let y,w,M=i;for(;M<t&&Wn(r[M]);)M++;if(M<t&&(r[M]==='"'||r[M]==="'")){const O=M+1,F=r.indexOf(r[M],O);F!==-1&&(y=r[M],w=r.slice(O,F),i=F+1)}const N={startIndex:o};N[1]=c,N[2]=m,N[3]=_,N[4]=y!==void 0?!0:void 0,N[5]=y,N[6]=w,e.push(N)}return e}function sl(r,e){const t=PT(r),i={};for(let o=0;o<t.length;o++){if(t[o][1].length===0)return dt("InvalidAttr","Attribute '"+t[o][2]+"' has no space in starting.",Ii(t[o]));if(t[o][3]!==void 0&&t[o][4]===void 0)return dt("InvalidAttr","Attribute '"+t[o][2]+"' is without value.",Ii(t[o]));if(t[o][3]===void 0&&!e.allowBooleanAttributes)return dt("InvalidAttr","boolean attribute '"+t[o][2]+"' is not allowed.",Ii(t[o]));const c=t[o][2];if(!OT(c))return dt("InvalidAttr","Attribute '"+c+"' is an invalid name.",Ii(t[o]));if(!Object.prototype.hasOwnProperty.call(i,c))i[c]=1;else return dt("InvalidAttr","Attribute '"+c+"' is repeated.",Ii(t[o]))}return!0}function LT(r,e){let t=/\d/;for(r[e]==="x"&&(e++,t=/[\da-fA-F]/);e<r.length;e++){if(r[e]===";")return e;if(!r[e].match(t))break}return-1}function kT(r,e){if(e++,r[e]===";")return-1;if(r[e]==="#")return e++,LT(r,e);let t=0;for(;e<r.length;e++,t++)if(!(r[e].match(/\w/)&&t<20)){if(r[e]===";")break;return-1}return e}function dt(r,e,t){return{err:{code:r,msg:e,line:t.line||t,col:t.col}}}function OT(r){return Ph(r)}function FT(r){return Ph(r)}function Vt(r,e){const t=r.substring(0,e).split(/\r?\n/);return{line:t.length,col:t[t.length-1].length+1}}function Ii(r){return r.startIndex+r[1].length}const BT={cent:"¢",pound:"£",curren:"¤",yen:"¥",euro:"€",dollar:"$",fnof:"ƒ",inr:"₹",af:"؋",birr:"ብር",peso:"₱",rub:"₽",won:"₩",yuan:"¥",cedil:"¸"},kh={amp:"&",apos:"'",gt:">",lt:"<",quot:'"'},DT={nbsp:" ",copy:"©",reg:"®",trade:"™",mdash:"—",ndash:"–",hellip:"…",laquo:"«",raquo:"»",lsquo:"‘",rsquo:"’",ldquo:"“",rdquo:"”",bull:"•",para:"¶",sect:"§",deg:"°",frac12:"½",frac14:"¼",frac34:"¾"},eo=Object.freeze({ALLOW:"allow",BLOCK:"block",THROW:"throw"}),UT=new Set("!?\\\\/[]$%{}^&*()<>|+");function ol(r){if(r[0]==="#")throw new Error(`[EntityReplacer] Invalid character '#' in entity name: "${r}"`);for(const e of r)if(UT.has(e))throw new Error(`[EntityReplacer] Invalid character '${e}' in entity name: "${r}"`);return r}function Ri(...r){const e=Object.create(null);for(const t of r)if(t)for(const i of Object.keys(t)){const o=t[i];if(typeof o=="string")e[i]=o;else if(o&&typeof o=="object"&&o.val!==void 0){const c=o.val;typeof c=="string"&&(e[i]=c)}}return e}const mn="external",to="base",pA="all";function VT(r){return!r||r===mn?new Set([mn]):r===pA?new Set([pA]):r===to?new Set([to]):Array.isArray(r)?new Set(r):new Set([mn])}const Xt=Object.freeze({allow:0,leave:1,remove:2,throw:3}),jT=new Set([9,10,13]);function GT(r){if(!r)return{xmlVersion:1,onLevel:Xt.allow,nullLevel:Xt.remove};const e=r.xmlVersion===1.1?1.1:1,t=Xt[r.onNCR]??Xt.allow,i=Xt[r.nullNCR]??Xt.remove,o=Math.max(i,Xt.remove);return{xmlVersion:e,onLevel:t,nullLevel:o}}class zT{constructor(e={}){this._limit=e.limit||{},this._maxTotalExpansions=this._limit.maxTotalExpansions||0,this._maxExpandedLength=this._limit.maxExpandedLength||0,this._postCheck=typeof e.postCheck=="function"?e.postCheck:i=>i,this._limitTiers=VT(this._limit.applyLimitsTo??mn),this._numericAllowed=e.numericAllowed??!0,this._baseMap=Ri(kh,e.namedEntities||null),this._externalMap=Object.create(null),this._inputMap=Object.create(null),this._totalExpansions=0,this._expandedLength=0,this._removeSet=new Set(e.remove&&Array.isArray(e.remove)?e.remove:[]),this._leaveSet=new Set(e.leave&&Array.isArray(e.leave)?e.leave:[]);const t=GT(e.ncr);this._ncrXmlVersion=t.xmlVersion,this._ncrOnLevel=t.onLevel,this._ncrNullLevel=t.nullLevel,this._onExternalEntity=typeof e.onExternalEntity=="function"?e.onExternalEntity:null,this._onInputEntity=typeof e.onInputEntity=="function"?e.onInputEntity:null}_applyRegistrationHook(e,t,i,o){if(!e)return!0;const c=e(t,i);if(c===eo.BLOCK)return!1;if(c===eo.THROW)throw new Error(`[EntityDecoder] Registration of ${o} entity "&${t};" was rejected by hook`);return!0}setExternalEntities(e){if(e)for(const o of Object.keys(e))ol(o);if(!this._onExternalEntity){this._externalMap=Ri(e);return}const t=Ri(e),i=Object.create(null);for(const[o,c]of Object.entries(t))this._applyRegistrationHook(this._onExternalEntity,o,c,"external")&&(i[o]=c);this._externalMap=i}addExternalEntity(e,t){ol(e),typeof t=="string"&&t.indexOf("&")===-1&&this._applyRegistrationHook(this._onExternalEntity,e,t,"external")&&(this._externalMap[e]=t)}addInputEntities(e){if(this._totalExpansions=0,this._expandedLength=0,!this._onInputEntity){this._inputMap=Ri(e);return}const t=Ri(e),i=Object.create(null);for(const[o,c]of Object.entries(t))this._applyRegistrationHook(this._onInputEntity,o,c,"input")&&(i[o]=c);this._inputMap=i}reset(){return this._inputMap=Object.create(null),this._totalExpansions=0,this._expandedLength=0,this}setXmlVersion(e){this._ncrXmlVersion=e===1.1?1.1:1}decode(e){if(typeof e!="string"||e.length===0||e.indexOf("&")===-1)return e;const t=e,i=[],o=e.length;let c=0,d=0;const m=this._maxTotalExpansions>0,_=this._maxExpandedLength>0,T=m||_;for(;d<o;){if(e.charCodeAt(d)!==38){d++;continue}let w=d+1;for(;w<o&&e.charCodeAt(w)!==59&&w-d<=32;)w++;if(w>=o||e.charCodeAt(w)!==59){d++;continue}const M=e.slice(d+1,w);if(M.length===0){d++;continue}let N,O;if(this._removeSet.has(M))N="",O===void 0&&(O=mn);else if(this._leaveSet.has(M)){d++;continue}else if(M.charCodeAt(0)===35){const F=this._resolveNCR(M);if(F===void 0){d++;continue}N=F,O=to}else{const F=this._resolveName(M);N=F==null?void 0:F.value,O=F==null?void 0:F.tier}if(N===void 0){d++;continue}if(d>c&&i.push(e.slice(c,d)),i.push(N),c=w+1,d=c,T&&this._tierCounts(O)){if(m&&(this._totalExpansions++,this._totalExpansions>this._maxTotalExpansions))throw new Error(`[EntityReplacer] Entity expansion count limit exceeded: ${this._totalExpansions} > ${this._maxTotalExpansions}`);if(_){const F=N.length-(M.length+2);if(F>0&&(this._expandedLength+=F,this._expandedLength>this._maxExpandedLength))throw new Error(`[EntityReplacer] Expanded content length limit exceeded: ${this._expandedLength} > ${this._maxExpandedLength}`)}}}c<o&&i.push(e.slice(c));const y=i.length===0?e:i.join("");return this._postCheck(y,t)}_tierCounts(e){return this._limitTiers.has(pA)?!0:this._limitTiers.has(e)}_resolveName(e){if(e in this._inputMap)return{value:this._inputMap[e],tier:mn};if(e in this._externalMap)return{value:this._externalMap[e],tier:mn};if(e in this._baseMap)return{value:this._baseMap[e],tier:to}}_classifyNCR(e){return e===0?this._ncrNullLevel:e>=55296&&e<=57343||this._ncrXmlVersion===1&&e>=1&&e<=31&&!jT.has(e)?Xt.remove:-1}_applyNCRAction(e,t,i){switch(e){case Xt.allow:return String.fromCodePoint(i);case Xt.remove:return"";case Xt.leave:return;case Xt.throw:throw new Error(`[EntityDecoder] Prohibited numeric character reference &${t}; (U+${i.toString(16).toUpperCase().padStart(4,"0")})`);default:return String.fromCodePoint(i)}}_resolveNCR(e){const t=e.charCodeAt(1);let i;if(t===120||t===88?i=parseInt(e.slice(2),16):i=parseInt(e.slice(1),10),Number.isNaN(i)||i<0||i>1114111)return;const o=this._classifyNCR(i);if(!this._numericAllowed&&o<Xt.remove)return;const c=o===-1?this._ncrOnLevel:Math.max(this._ncrOnLevel,o);return this._applyNCRAction(c,e,i)}}const Oh=r=>YA.includes(r)?"__"+r:r,HT={preserveOrder:!1,attributeNamePrefix:"@_",attributesGroupName:!1,textNodeName:"#text",ignoreAttributes:!0,removeNSPrefix:!1,allowBooleanAttributes:!1,parseTagValue:!0,parseAttributeValue:!1,trimValues:!0,cdataPropName:!1,numberParseOptions:{hex:!0,leadingZeros:!0,eNotation:!0,unicode:!1},tagValueProcessor:function(r,e){return e},attributeValueProcessor:function(r,e){return e},stopNodes:[],alwaysCreateTextNode:!1,isArray:()=>!1,commentPropName:!1,unpairedTags:[],processEntities:!0,htmlEntities:!1,entityDecoder:null,ignoreDeclaration:!1,ignorePiTags:!1,transformTagName:!1,transformAttributeName:!1,updateTag:function(r,e,t){return r},captureMetaData:!1,maxNestedTags:100,strictReservedNames:!0,jPath:!0,onDangerousProperty:Oh};function qT(r,e){if(typeof r!="string")return;const t=r.toLowerCase();if(YA.some(i=>t===i.toLowerCase()))throw new Error(`[SECURITY] Invalid ${e}: "${r}" is a reserved JavaScript keyword that could cause prototype pollution`);if(Lh.some(i=>t===i.toLowerCase()))throw new Error(`[SECURITY] Invalid ${e}: "${r}" is a reserved JavaScript keyword that could cause prototype pollution`)}function Fh(r,e){return typeof r=="boolean"?{enabled:r,maxEntitySize:1e4,maxExpansionDepth:1e4,maxTotalExpansions:1/0,maxExpandedLength:1e5,maxEntityCount:1e3,allowedTags:null,tagFilter:null,appliesTo:"all"}:typeof r=="object"&&r!==null?{enabled:r.enabled!==!1,maxEntitySize:Math.max(1,r.maxEntitySize??1e4),maxExpansionDepth:Math.max(1,r.maxExpansionDepth??1e4),maxTotalExpansions:Math.max(1,r.maxTotalExpansions??1/0),maxExpandedLength:Math.max(1,r.maxExpandedLength??1e5),maxEntityCount:Math.max(1,r.maxEntityCount??1e3),allowedTags:r.allowedTags??null,tagFilter:r.tagFilter??null,appliesTo:r.appliesTo??"all"}:Fh(!0)}const QT=function(r){const e=Object.assign({},HT,r),t=[{value:e.attributeNamePrefix,name:"attributeNamePrefix"},{value:e.attributesGroupName,name:"attributesGroupName"},{value:e.textNodeName,name:"textNodeName"},{value:e.cdataPropName,name:"cdataPropName"},{value:e.commentPropName,name:"commentPropName"}];for(const{value:i,name:o}of t)i&&qT(i,o);return e.onDangerousProperty===null&&(e.onDangerousProperty=Oh),e.processEntities=Fh(e.processEntities,e.htmlEntities),e.unpairedTagsSet=new Set(e.unpairedTags),e.stopNodes&&Array.isArray(e.stopNodes)&&(e.stopNodes=e.stopNodes.map(i=>typeof i=="string"&&i.startsWith("*.")?".."+i.substring(2):i)),e};let pn;typeof Symbol!="function"?pn="@@xmlMetadata":pn=Symbol("XML Node Metadata");class Jr{constructor(e){this.tagname=e,this.child=[],this[":@"]=Object.create(null)}add(e,t){e==="__proto__"&&(e="#__proto__"),this.child.push({[e]:t})}addChild(e,t){e.tagname==="__proto__"&&(e.tagname="#__proto__"),e[":@"]&&Object.keys(e[":@"]).length>0?this.child.push({[e.tagname]:e.child,":@":e[":@"]}):this.child.push({[e.tagname]:e.child}),this.addStartIndex(t)}addStartIndex(e){e!==void 0&&(this.child[this.child.length-1][pn]={startIndex:e})}addEndIndex(e){const t=this.child[this.child.length-1];t!==void 0&&t[pn]!==void 0&&t[pn].endIndex===void 0&&(t[pn].endIndex=e)}static getMetaDataSymbol(){return pn}}const Bh=":A-Za-z_À-ÖØ-öø-˿Ͱ-ͽͿ-҆҈-῿‌-‍⁰-↏Ⰰ-⿯、-퟿豈-﷏ﷰ-�",WT=Bh+"\\-\\.\\d·̀-ͯ‿-⁀",Dh=":A-Za-z_À-˿Ͱ-ͽͿ-҆҈-῿‌-‍⁰-↏Ⰰ-⿯、-퟿豈-﷏ﷰ-�𐀀-󯿿",KT=Dh+"\\-\\.\\d·̀-ͯ҇‿-⁀",JA=(r,e,t="")=>{const i=r.replace(":",""),o=e.replace(":",""),c=`[${i}][${o}]*`;return{name:new RegExp(`^[${r}][${e}]*$`,t),ncName:new RegExp(`^${c}$`,t),qName:new RegExp(`^${c}(?::${c})?$`,t),nmToken:new RegExp(`^[${e}]+$`,t),nmTokens:new RegExp(`^[${e}]+(?:\\s+[${e}]+)*$`,t)}},$T=JA(Bh,WT),XT=JA(Dh,KT,"u"),Uh=":A-Za-z_",YT=Uh+"\\-\\.\\d",JT=JA(Uh,YT),ZT=(r="1.0",e=!1)=>e?JT:r==="1.1"?XT:$T,Vh=(r,{xmlVersion:e="1.0",asciiOnly:t=!1}={})=>ZT(e,t).qName.test(r);class ev{constructor(e,t){this.suppressValidationErr=!e,this.options=e,this.xmlVersion=t||1}setXmlVersion(e=1){this.xmlVersion=e}readDocType(e,t){const i=Object.create(null);let o=0;if(e[t+3]==="O"&&e[t+4]==="C"&&e[t+5]==="T"&&e[t+6]==="Y"&&e[t+7]==="P"&&e[t+8]==="E"){t=t+9;let c=1,d=!1,m=!1,_=null,T="";for(;t<e.length;t++){if(_!==null){e[t]===_&&(_=null),T+=e[t];continue}if(!d&&!m&&(e[t]==='"'||e[t]==="'")){_=e[t],T+=e[t];continue}if(e[t]==="<"&&!m){if(d&&fn(e,"!ENTITY",t)){t+=7;let y,w;if([y,w,t]=this.readEntityExp(e,t+1,this.suppressValidationErr),w.indexOf("&")===-1){if(this.options.enabled!==!1&&this.options.maxEntityCount!=null&&o>=this.options.maxEntityCount)throw new Error(`Entity count (${o+1}) exceeds maximum allowed (${this.options.maxEntityCount})`);i[y]=w,o++}}else if(d&&fn(e,"!ELEMENT",t)){t+=8;const{index:y}=this.readElementExp(e,t+1);t=y}else if(d&&fn(e,"!ATTLIST",t))t+=8;else if(d&&fn(e,"!NOTATION",t)){t+=9;const{index:y}=this.readNotationExp(e,t+1,this.suppressValidationErr);t=y}else if(fn(e,"!--",t))m=!0;else throw new Error("Invalid DOCTYPE");c++,T=""}else if(e[t]===">"){if(m?e[t-1]==="-"&&e[t-2]==="-"&&(m=!1,c--):c--,c===0)break}else e[t]==="["?d=!0:T+=e[t]}if(_!==null||c!==0)throw new Error("Unclosed DOCTYPE")}else throw new Error("Invalid Tag instead of DOCTYPE");return{entities:i,i:t}}readEntityExp(e,t){t=Wt(e,t);const i=t;for(;t<e.length&&!/\s/.test(e[t])&&e[t]!=='"'&&e[t]!=="'";)t++;let o=e.substring(i,t);if(Ni(o,{xmlVersion:this.xmlVersion}),t=Wt(e,t),!this.suppressValidationErr){if(e.substring(t,t+6).toUpperCase()==="SYSTEM")throw new Error("External entities are not supported");if(e[t]==="%")throw new Error("Parameter entities are not supported")}let c="";if([t,c]=this.readIdentifierVal(e,t,"entity"),this.options.enabled!==!1&&this.options.maxEntitySize!=null&&c.length>this.options.maxEntitySize)throw new Error(`Entity "${o}" size (${c.length}) exceeds maximum allowed size (${this.options.maxEntitySize})`);return t--,[o,c,t]}readNotationExp(e,t){t=Wt(e,t);const i=t;for(;t<e.length&&!/\s/.test(e[t]);)t++;let o=e.substring(i,t);!this.suppressValidationErr&&Ni(o,{xmlVersion:this.xmlVersion}),t=Wt(e,t);const c=e.substring(t,t+6).toUpperCase();if(!this.suppressValidationErr&&c!=="SYSTEM"&&c!=="PUBLIC")throw new Error(`Expected SYSTEM or PUBLIC, found "${c}"`);t+=c.length,t=Wt(e,t);let d=null,m=null;if(c==="PUBLIC")[t,d]=this.readIdentifierVal(e,t,"publicIdentifier"),t=Wt(e,t),(e[t]==='"'||e[t]==="'")&&([t,m]=this.readIdentifierVal(e,t,"systemIdentifier"));else if(c==="SYSTEM"&&([t,m]=this.readIdentifierVal(e,t,"systemIdentifier"),!this.suppressValidationErr&&!m))throw new Error("Missing mandatory system identifier for SYSTEM notation");return{notationName:o,publicIdentifier:d,systemIdentifier:m,index:--t}}readIdentifierVal(e,t,i){let o="";const c=e[t];if(c!=='"'&&c!=="'")throw new Error(`Expected quoted string, found "${c}"`);t++;const d=t;for(;t<e.length&&e[t]!==c;)t++;if(o=e.substring(d,t),e[t]!==c)throw new Error(`Unterminated ${i} value`);return t++,[t,o]}readElementExp(e,t){t=Wt(e,t);const i=t;for(;t<e.length&&!/\s/.test(e[t]);)t++;let o=e.substring(i,t);if(!this.suppressValidationErr&&!Vh(o,{xmlVersion:this.xmlVersion}))throw new Error(`Invalid element name: "${o}"`);t=Wt(e,t);let c="";if(e[t]==="E"&&fn(e,"MPTY",t))t+=4;else if(e[t]==="A"&&fn(e,"NY",t))t+=2;else if(e[t]==="("){t++;const d=t;for(;t<e.length&&e[t]!==")";)t++;if(c=e.substring(d,t),e[t]!==")")throw new Error("Unterminated content model")}else if(!this.suppressValidationErr)throw new Error(`Invalid Element Expression, found "${e[t]}"`);return{elementName:o,contentModel:c.trim(),index:t}}readAttlistExp(e,t){t=Wt(e,t);let i=t;for(;t<e.length&&!/\s/.test(e[t]);)t++;let o=e.substring(i,t);for(Ni(o,{xmlVersion:this.xmlVersion}),t=Wt(e,t),i=t;t<e.length&&!/\s/.test(e[t]);)t++;let c=e.substring(i,t);if(!Ni(c,{xmlVersion:this.xmlVersion}))throw new Error(`Invalid attribute name: "${c}"`);t=Wt(e,t);let d="";if(e.substring(t,t+8).toUpperCase()==="NOTATION"){if(d="NOTATION",t+=8,t=Wt(e,t),e[t]!=="(")throw new Error(`Expected '(', found "${e[t]}"`);t++;let _=[];for(;t<e.length&&e[t]!==")";){const T=t;for(;t<e.length&&e[t]!=="|"&&e[t]!==")";)t++;let y=e.substring(T,t);if(y=y.trim(),!Ni(y,{xmlVersion:this.xmlVersion}))throw new Error(`Invalid notation name: "${y}"`);_.push(y),e[t]==="|"&&(t++,t=Wt(e,t))}if(e[t]!==")")throw new Error("Unterminated list of notations");t++,d+=" ("+_.join("|")+")"}else{const _=t;for(;t<e.length&&!/\s/.test(e[t]);)t++;d+=e.substring(_,t);const T=["CDATA","ID","IDREF","IDREFS","ENTITY","ENTITIES","NMTOKEN","NMTOKENS"];if(!this.suppressValidationErr&&!T.includes(d.toUpperCase()))throw new Error(`Invalid attribute type: "${d}"`)}t=Wt(e,t);let m="";return e.substring(t,t+8).toUpperCase()==="#REQUIRED"?(m="#REQUIRED",t+=8):e.substring(t,t+7).toUpperCase()==="#IMPLIED"?(m="#IMPLIED",t+=7):[t,m]=this.readIdentifierVal(e,t,"ATTLIST"),{elementName:o,attributeName:c,attributeType:d,defaultValue:m,index:t}}}const Wt=(r,e)=>{for(;e<r.length&&/\s/.test(r[e]);)e++;return e};function fn(r,e,t){for(let i=0;i<e.length;i++)if(e[i]!==r[t+i+1])return!1;return!0}function Ni(r,e){if(Vh(r,{xmlVersion:e}))return r;throw new Error(`Invalid entity name ${r}`)}const tv=[48,1632,1776,2406,2534,2662,2790,2918,3046,3174,3302,3430,3558,3664,3792,3872,4160,4240,6112,6160,6470,6608,6784,6800,6992,7088,7232,7248,65296,120782,120792,120802,120812,120822,66720,68912,69734,69872,69942,70096,70384,70736,70864,71248,71360,71472,71904,72016,72688,72784,73040,73120,73552,92768,92864,93008,123200,123632,124144,125264,130032],mA=255,gA=new Map,jh=65535,Gh=1632,Di=Gh,rv=jh-Gh+1,bA=new Uint8Array(rv).fill(mA);for(const r of tv)for(let e=0;e<10;e++){const t=r+e;t<=jh?bA[t-Di]=e:gA.set(t,e)}const al=48,Al=57,cl=45,Ss=new Set([8722,65293,65123]);function nv(r){if(typeof r!="string")return r;const e=r.length;if(e===0)return r;let t=-1;for(let o=0;o<e;o++){const c=r.charCodeAt(o);if(!(c>=al&&c<=Al||c===cl)){if(c<Di){if(Ss.has(c)){t=o;break}continue}if(c>=55296&&c<=56319){if(o+1<e){const d=r.charCodeAt(o+1);if(d>=56320&&d<=57343){const m=65536+(c-55296<<10)+(d-56320);if(gA.has(m)){t=o;break}}}continue}if(bA[c-Di]!==mA||Ss.has(c)){t=o;break}}}if(t===-1)return r;const i=[];t>0&&i.push(r.slice(0,t));for(let o=t;o<e;o++){const c=r.charCodeAt(o);if(c>=al&&c<=Al||c===cl){i.push(r[o]);continue}if(c<Di){i.push(Ss.has(c)?"-":r[o]);continue}if(c>=55296&&c<=56319){if(o+1<e){const m=r.charCodeAt(o+1);if(m>=56320&&m<=57343){const _=65536+(c-55296<<10)+(m-56320),T=gA.get(_);if(T!==void 0){i.push(String.fromCharCode(T+48)),o++;continue}}}i.push(r[o]);continue}if(Ss.has(c)){i.push("-");continue}const d=bA[c-Di];i.push(d!==mA?String.fromCharCode(d+48):r[o])}return i.join("")}const iv=/^[-+]?0x[a-fA-F0-9]+$/,sv=/^0b[01]+$/,ov=/^0o[0-7]+$/,av=/^([\-\+])?(0*)([0-9]*(\.[0-9]*)?)$/,Av={hex:!0,binary:!1,octal:!1,leadingZeros:!0,decimalPoint:".",eNotation:!0,infinity:"original",unicode:!1};function cv(r,e={}){if(e=Object.assign({},Av,e),!r||typeof r!="string")return r;let t=r.trim();if(t.length===0)return r;if(e.skipLike!==void 0&&e.skipLike.test(t))return r;if(t==="0"||e.unicode&&(t=nv(t),t==="0"))return 0;if(e.hex&&iv.test(t))return ga(t,16);if(e.binary&&sv.test(t))return ga(t,2);if(e.octal&&ov.test(t))return ga(t,8);if(isFinite(t)){if(t.includes("e")||t.includes("E"))return uv(r,t,e);{const i=av.exec(t);if(i){const o=i[1]||"",c=i[2];let d=fv(i[3]);const m=o?r[c.length+1]===".":r[c.length]===".";if(!e.leadingZeros&&(c.length>1||c.length===1&&!m))return r;{const _=Number(t),T=String(_);if(_===0)return _;if(T.search(/[eE]/)!==-1)return e.eNotation?_:r;if(t.indexOf(".")!==-1)return T==="0"||T===d||T===`${o}${d}`?_:r;let y=c?d:t;return c?y===T||o+y===T?_:r:y===T||y===o+T?_:r}}else return r}}else return hv(r,Number(t),e)}const lv=/^([-+])?(0*)(\d*(\.\d*)?[eE][-\+]?\d+)$/;function uv(r,e,t){if(!t.eNotation)return r;const i=e.match(lv);if(i){let o=i[1]||"";const c=i[3].indexOf("e")===-1?"E":"e",d=i[2],m=o?r[d.length+1]===c:r[d.length]===c;return d.length>1&&m?r:d.length===1&&(i[3].startsWith(`.${c}`)||i[3][0]===c)?Number(e):d.length>0?t.leadingZeros&&!m?(e=(i[1]||"")+i[3],Number(e)):r:Number(e)}else return r}function fv(r){if(r&&r.indexOf(".")!==-1){let e=r.length;for(;e>0&&r.charCodeAt(e-1)===48;)e--;return r=r.slice(0,e),r==="."?r="0":r[0]==="."?r="0"+r:r[r.length-1]==="."&&(r=r.substring(0,r.length-1)),r}return r}function ga(r,e){const t=r.trim();if((e===2||e===8)&&(r=t.substring(2)),parseInt)return parseInt(r,e);if(Number.parseInt)return Number.parseInt(r,e);if(window&&window.parseInt)return window.parseInt(r,e);throw new Error("parseInt, Number.parseInt, window.parseInt are not supported")}function hv(r,e,t){const i=e===1/0;switch(t.infinity.toLowerCase()){case"null":return null;case"infinity":return e;case"string":return i?"Infinity":"-Infinity";case"original":default:return r}}function dv(r){return typeof r=="function"?r:Array.isArray(r)?e=>{for(const t of r)if(typeof t=="string"&&e===t||t instanceof RegExp&&t.test(e))return!0}:()=>!1}class ll{constructor(e,t={},i){this.pattern=e,this.separator=t.separator||".",this.segments=this._parse(e),this.data=i,this._hasDeepWildcard=this.segments.some(o=>o.type==="deep-wildcard"),this._hasAttributeCondition=this.segments.some(o=>o.attrName!==void 0),this._hasPositionSelector=this.segments.some(o=>o.position!==void 0)}_parse(e){const t=[];let i=0,o="";for(;i<e.length;)e[i]===this.separator?i+1<e.length&&e[i+1]===this.separator?(o.trim()&&(t.push(this._parseSegment(o.trim())),o=""),t.push({type:"deep-wildcard"}),i+=2):(o.trim()&&t.push(this._parseSegment(o.trim())),o="",i++):(o+=e[i],i++);return o.trim()&&t.push(this._parseSegment(o.trim())),t}_parseSegment(e){const t={type:"tag"};let i=null,o=e;const c=e.match(/^([^\[]+)(\[[^\]]*\])(.*)$/);if(c&&(o=c[1]+c[3],c[2])){const y=c[2].slice(1,-1);y&&(i=y)}let d,m=o;if(o.includes("::")){const y=o.indexOf("::");if(d=o.substring(0,y).trim(),m=o.substring(y+2).trim(),!d)throw new Error(`Invalid namespace in pattern: ${e}`)}let _,T=null;if(m.includes(":")){const y=m.lastIndexOf(":"),w=m.substring(0,y).trim(),M=m.substring(y+1).trim();["first","last","odd","even"].includes(M)||/^nth\(\d+\)$/.test(M)?(_=w,T=M):_=m}else _=m;if(!_)throw new Error(`Invalid segment pattern: ${e}`);if(t.tag=_,d&&(t.namespace=d),i)if(i.includes("=")){const y=i.indexOf("=");t.attrName=i.substring(0,y).trim(),t.attrValue=i.substring(y+1).trim()}else t.attrName=i.trim();if(T){const y=T.match(/^nth\((\d+)\)$/);y?(t.position="nth",t.positionValue=parseInt(y[1],10)):t.position=T}return t}get length(){return this.segments.length}hasDeepWildcard(){return this._hasDeepWildcard}hasAttributeCondition(){return this._hasAttributeCondition}hasPositionSelector(){return this._hasPositionSelector}toString(){return this.pattern}}class pv{constructor(){this._byDepthAndTag=new Map,this._wildcardByDepth=new Map,this._deepWildcards=[],this._deepByTerminalTag=new Map,this._patterns=new Set,this._sealed=!1}add(e){if(this._sealed)throw new TypeError("ExpressionSet is sealed. Create a new ExpressionSet to add more expressions.");if(this._patterns.has(e.pattern))return this;if(this._patterns.add(e.pattern),e.hasDeepWildcard()){const c=e.segments[e.segments.length-1];if(c&&c.type!=="deep-wildcard"&&c.tag!=="*"){const d=c.tag;this._deepByTerminalTag.has(d)||this._deepByTerminalTag.set(d,[]),this._deepByTerminalTag.get(d).push(e)}else this._deepWildcards.push(e);return this}const t=e.length,i=e.segments[e.segments.length-1],o=i==null?void 0:i.tag;if(!o||o==="*")this._wildcardByDepth.has(t)||this._wildcardByDepth.set(t,[]),this._wildcardByDepth.get(t).push(e);else{const c=`${t}:${o}`;this._byDepthAndTag.has(c)||this._byDepthAndTag.set(c,[]),this._byDepthAndTag.get(c).push(e)}return this}addAll(e){for(const t of e)this.add(t);return this}has(e){return this._patterns.has(e.pattern)}get size(){return this._patterns.size}seal(){return this._sealed=!0,this}get isSealed(){return this._sealed}matchesAny(e){return this.findMatch(e)!==null}findMatch(e){const t=e.getDepth(),i=e.getCurrentTag(),o=`${t}:${i}`,c=this._byDepthAndTag.get(o);if(c){for(let _=0;_<c.length;_++)if(e.matches(c[_]))return c[_]}const d=this._wildcardByDepth.get(t);if(d){for(let _=0;_<d.length;_++)if(e.matches(d[_]))return d[_]}const m=this._deepByTerminalTag.get(i);if(m){for(let _=0;_<m.length;_++)if(e.matches(m[_]))return m[_]}for(let _=0;_<this._deepWildcards.length;_++)if(e.matches(this._deepWildcards[_]))return this._deepWildcards[_];return null}}class mv{constructor(e){this._matcher=e}get separator(){return this._matcher.separator}getCurrentTag(){const e=this._matcher.path;return e.length>0?e[e.length-1].tag:void 0}getCurrentNamespace(){const e=this._matcher.path;return e.length>0?e[e.length-1].namespace:void 0}getAttrValue(e){var i;const t=this._matcher.path;if(t.length!==0)return(i=t[t.length-1].values)==null?void 0:i[e]}hasAttr(e){const t=this._matcher.path;if(t.length===0)return!1;const i=t[t.length-1];return i.values!==void 0&&e in i.values}getAnyParentAttr(e){return this._matcher.getAnyParentAttr(e)}hasAnyParentAttr(e){return this._matcher.hasAnyParentAttr(e)}getPosition(){const e=this._matcher.path;return e.length===0?-1:e[e.length-1].position??0}getCounter(){const e=this._matcher.path;return e.length===0?-1:e[e.length-1].counter??0}getIndex(){return this.getPosition()}getDepth(){return this._matcher.path.length}toString(e,t=!0){return this._matcher.toString(e,t)}toArray(){return this._matcher.path.map(e=>e.tag)}matches(e){return this._matcher.matches(e)}matchesAny(e){return e.matchesAny(this._matcher)}}class gv{constructor(e={}){this.separator=e.separator||".",this.path=[],this.siblingStacks=[],this._pathStringCache=null,this._view=new mv(this),this._keptAttrs=[]}push(e,t=null,i=null,o=null){this._pathStringCache=null,this.path.length>0&&(this.path[this.path.length-1].values=void 0);const c=this.path.length;let d=this.siblingStacks[c];d||(d={counts:new Map,total:0},this.siblingStacks[c]=d);const m=i?`${i}:${e}`:e,_=d.counts.get(m)||0,T=d.total;d.counts.set(m,_+1),d.total++;const y={tag:e,position:T,counter:_};i!=null&&(y.namespace=i),t!=null&&(y.values=t),this.path.push(y);const w=this.path.length,M=o!==null?o.keep:null;if(M!=null&&M.length>0&&t)for(let N=0;N<M.length;N++){const O=M[N];t[O]!==void 0&&this._keptAttrs.push({depth:w,name:O,value:t[O]})}}pop(){if(this.path.length===0)return;this._pathStringCache=null;const e=this.path.pop();this.siblingStacks.length>this.path.length+1&&(this.siblingStacks.length=this.path.length+1);const t=this.path.length+1;for(;this._keptAttrs.length>0&&this._keptAttrs[this._keptAttrs.length-1].depth>=t;)this._keptAttrs.pop();return e}updateCurrent(e){if(this.path.length>0){const t=this.path[this.path.length-1];e!=null&&(t.values=e)}}getCurrentTag(){return this.path.length>0?this.path[this.path.length-1].tag:void 0}getCurrentNamespace(){return this.path.length>0?this.path[this.path.length-1].namespace:void 0}getAttrValue(e){var t;if(this.path.length!==0)return(t=this.path[this.path.length-1].values)==null?void 0:t[e]}hasAttr(e){if(this.path.length===0)return!1;const t=this.path[this.path.length-1];return t.values!==void 0&&e in t.values}getAnyParentAttr(e){const t=this._keptAttrs;for(let i=t.length-1;i>=0;i--)if(t[i].name===e)return t[i].value}hasAnyParentAttr(e){const t=this._keptAttrs;for(let i=t.length-1;i>=0;i--)if(t[i].name===e)return!0;return!1}getPosition(){return this.path.length===0?-1:this.path[this.path.length-1].position??0}getCounter(){return this.path.length===0?-1:this.path[this.path.length-1].counter??0}getIndex(){return this.getPosition()}getDepth(){return this.path.length}toString(e,t=!0){const i=e||this.separator;if(i===this.separator&&t===!0){if(this._pathStringCache!==null)return this._pathStringCache;const c=this.path.map(d=>d.namespace?`${d.namespace}:${d.tag}`:d.tag).join(i);return this._pathStringCache=c,c}return this.path.map(c=>t&&c.namespace?`${c.namespace}:${c.tag}`:c.tag).join(i)}toArray(){return this.path.map(e=>e.tag)}reset(){this._pathStringCache=null,this.path=[],this.siblingStacks=[],this._keptAttrs=[]}matches(e){const t=e.segments;return t.length===0?!1:e.hasDeepWildcard()?this._matchWithDeepWildcard(t):this._matchSimple(t)}_matchSimple(e){if(this.path.length!==e.length)return!1;for(let t=0;t<e.length;t++)if(!this._matchSegment(e[t],this.path[t],t===this.path.length-1))return!1;return!0}_matchWithDeepWildcard(e){let t=this.path.length-1,i=e.length-1;for(;i>=0&&t>=0;){const o=e[i];if(o.type==="deep-wildcard"){if(i--,i<0)return!0;const c=e[i];let d=!1;for(let m=t;m>=0;m--)if(this._matchSegment(c,this.path[m],m===this.path.length-1)){t=m-1,i--,d=!0;break}if(!d)return!1}else{if(!this._matchSegment(o,this.path[t],t===this.path.length-1))return!1;t--,i--}}return i<0}_matchSegment(e,t,i){if(e.tag!=="*"&&e.tag!==t.tag||e.namespace!==void 0&&e.namespace!=="*"&&e.namespace!==t.namespace||e.attrName!==void 0&&(!i||!t.values||!(e.attrName in t.values)||e.attrValue!==void 0&&String(t.values[e.attrName])!==String(e.attrValue)))return!1;if(e.position!==void 0){if(!i)return!1;const o=t.counter??0;if(e.position==="first"&&o!==0)return!1;if(e.position==="odd"&&o%2!==1)return!1;if(e.position==="even"&&o%2!==0)return!1;if(e.position==="nth"&&o!==e.positionValue)return!1}return!0}matchesAny(e){return e.matchesAny(this)}snapshot(){return{path:this.path.map(e=>({...e})),siblingStacks:this.siblingStacks.map(e=>e&&{counts:new Map(e.counts),total:e.total}),keptAttrs:this._keptAttrs.map(e=>({...e}))}}restore(e){this._pathStringCache=null,this.path=e.path.map(t=>({...t})),this.siblingStacks=e.siblingStacks.map(t=>t&&{counts:new Map(t.counts),total:t.total}),this._keptAttrs=(e.keptAttrs||[]).map(t=>({...t}))}readOnly(){return this._view}}const zh=[{id:"html-script-open",description:"<script opening tag",pattern:/<script[\s>/]/i},{id:"html-script-close",description:"<\/script closing tag",pattern:/<\/script[\s>]/i},{id:"html-javascript-protocol",description:"javascript: URI scheme (with optional whitespace/encoding)",pattern:/j[\t\n\r ]*a[\t\n\r ]*v[\t\n\r ]*a[\t\n\r ]*s[\t\n\r ]*c[\t\n\r ]*r[\t\n\r ]*i[\t\n\r ]*p[\t\n\r ]*t[\t\n\r ]*:/i},{id:"html-vbscript-protocol",description:"vbscript: URI scheme",pattern:/vbscript[\t\n\r ]*:/i},{id:"html-data-html",description:"data:text/html URI — can execute scripts in browsers",pattern:/data[\t\n\r ]*:[\t\n\r ]*text\/html/i},{id:"html-data-xhtml",description:"data:application/xhtml+xml URI",pattern:/data[\t\n\r ]*:[\t\n\r ]*application\/xhtml/i},{id:"html-data-svg",description:"data:image/svg+xml URI — can execute scripts",pattern:/data[\t\n\r ]*:[\t\n\r ]*image\/svg\+xml/i},{id:"html-inline-event-handler",description:"Inline event handler attributes: onclick=, onerror=, onload=, etc.",pattern:/\bon\w{1,30}\s*=/i},{id:"html-entity-obfuscated-script",description:"HTML-entity-encoded <script (e.g. &#x3C;script or &lt;script)",pattern:/(?:&#x0*3[Cc];?|&#0*60;?|&lt;)\s*script/i},{id:"html-entity-obfuscated-javascript",description:'HTML-entity-encoded javascript: (partial — catches common &#106; or &#x6a; for "j")',pattern:/(?:&#x0*6[Aa];?|&#0*106;?)\s*(?:&#x0*61;?|a)[\s\S]{0,80}script\s*:/i},{id:"html-style-expression",description:"CSS expression() — IE-era code execution in style attributes",pattern:/style[\s\S]{0,20}expression\s*\(/i},{id:"html-object-embed",description:"<object or <embed tags that can load active content",pattern:/<(?:object|embed)[\s>/]/i},{id:"html-base-tag",description:"<base href= — can hijack all relative URLs on a page",pattern:/<base[\s>]/i},{id:"html-meta-refresh",description:'<meta http-equiv="refresh" — can redirect users',pattern:/<meta[\s\S]{0,40}http-equiv[\s\S]{0,20}refresh/i},{id:"html-srcdoc",description:"srcdoc= attribute on iframes — embeds HTML that can run scripts",pattern:/srcdoc\s*=/i},{id:"html-iframe",description:"<iframe tag",pattern:/<iframe[\s>/]/i},{id:"html-form",description:"<form tag — can be used for phishing / credential harvesting injection",pattern:/<form[\s>/]/i}],Hh=[{id:"xml-cdata-injection",description:"CDATA section injection: <![CDATA[ breaks out of text node context",pattern:/<!\[CDATA\[/i},{id:"xml-cdata-close",description:"CDATA close sequence: ]]> can terminate an enclosing CDATA section",pattern:/\]\]>/},{id:"xml-processing-instruction",description:"XML processing instruction: <?xml-stylesheet or <?php etc.",pattern:/<\?(?:xml[\- ]|php|asp)/i},{id:"xml-doctype-injection",description:"DOCTYPE declaration embedded in content — can define entities",pattern:/<!DOCTYPE(?:[\s[]|$)/i},{id:"xml-entity-system",description:"SYSTEM keyword — used in external entity declarations (XXE)",pattern:/\bSYSTEM\s+["']/i},{id:"xml-entity-public",description:"PUBLIC keyword — used in external entity declarations (XXE)",pattern:/\bPUBLIC\s+["']/i},{id:"xml-entity-declaration",description:"<!ENTITY declaration — defines entities, potential XXE or entity expansion",pattern:/<!ENTITY[\s%]/i},{id:"xml-billion-laughs",description:"Entity reference chaining / billion laughs: repeated &eX; style references",pattern:/(?:&\w{1,20};){3,}/},{id:"xml-namespace-confusion",description:"xmlns: attribute injection — can redefine namespaces to confuse parsers",pattern:/\bxmlns(?::\w{1,40})?\s*=/i},{id:"xml-comment-injection",description:"<!-- comment injection — can hide content from some parsers",pattern:/<!--/},{id:"xml-comment-close",description:"--> closes an enclosing XML comment",pattern:/-->/},{id:"xml-pi-close",description:"?> closes an enclosing processing instruction",pattern:/\?>/}],bv=[{id:"svg-script-element",description:"<script element inside SVG executes JavaScript",pattern:/<script[\s>/]/i},{id:"svg-xlink-href-javascript",description:"xlink:href with javascript: — classic SVG XSS via <a> or <use>",pattern:/xlink\s*:\s*href\s*=\s*["']?\s*javascript\s*:/i},{id:"svg-href-javascript",description:"href= with javascript: in SVG context (<a>, <animate>, etc.)",pattern:/href\s*=\s*["']?\s*javascript\s*:/i},{id:"svg-foreignobject",description:"<foreignObject embeds HTML inside SVG — can execute scripts",pattern:/<foreignObject[\s>/]/i},{id:"svg-use-external",description:"<use xlink:href or href pointing to external resource (non-fragment URL)",pattern:/<use[\s\S]{0,60}(?:xlink\s*:\s*)?href\s*=\s*(?:["'][^#]|[^"'#\s>])/i},{id:"svg-animate-href",description:'<animate attributeName="href" — can dynamically change href to javascript:',pattern:/<animate[\s\S]{0,80}attributeName\s*=\s*["'][\s]*href["']/i},{id:"svg-animate-xlinkhref",description:'<animate attributeName="xlink:href"',pattern:/<animate[\s\S]{0,80}attributeName\s*=\s*["'][\s]*xlink\s*:\s*href["']/i},{id:"svg-set-javascript",description:'<set to="javascript:..." — sets an attribute to a javascript: URI',pattern:/<set[\s\S]{0,80}to\s*=\s*["']?\s*javascript\s*:/i},{id:"svg-event-handler",description:"SVG-specific event handler attributes: onload=, onerror=, onactivate=, etc.",pattern:/\bon(?:load|error|activate|begin|end|repeat|focus|blur|click|mouse\w{1,20}|key\w{1,20})\s*=/i},{id:"svg-handler-generic",description:"Generic on* handler catch-all for SVG attributes",pattern:/\bon\w{1,30}\s*=/i},{id:"svg-filter-feimage",description:"<feImage href= — filter primitive that can load external resources",pattern:/<feImage[\s\S]{0,80}(?:xlink\s*:\s*)?href\s*=/i},{id:"svg-image-external",description:"<image xlink:href with http/https or javascript protocol",pattern:/<image[\s\S]{0,80}(?:xlink\s*:\s*)?href\s*=\s*["']?\s*(?:https?|javascript)\s*:/i},{id:"svg-style-javascript",description:"style= attribute containing javascript: (e.g. background:url(javascript:...))",pattern:/style\s*=[\s\S]{0,60}javascript\s*:/i}],qh=[{id:"sql-block-comment-open",description:"SQL block comment open: /* ... */ — unusual in legitimate user text",pattern:/\/\*/},{id:"sql-union-select",description:"UNION SELECT — most common SQL injection aggregation attack",pattern:/\bUNION\s{1,20}(?:ALL\s{1,20})?SELECT\b/i},{id:"sql-drop-table",description:"DROP TABLE — destructive DDL injection",pattern:/\bDROP\s{1,20}TABLE\b/i},{id:"sql-drop-database",description:"DROP DATABASE — destructive DDL injection",pattern:/\bDROP\s{1,20}DATABASE\b/i},{id:"sql-insert-into",description:"INSERT INTO — data injection",pattern:/\bINSERT\s{1,20}INTO\b/i},{id:"sql-delete-from",description:"DELETE FROM — data deletion injection",pattern:/\bDELETE\s{1,20}FROM\b/i},{id:"sql-update-set",description:"UPDATE ... SET — data modification injection",pattern:/\bUPDATE\b[\s\S]{1,60}\bSET\b/i},{id:"sql-exec-xp",description:"EXEC xp_ — MSSQL extended stored procedure execution",pattern:/\bEXEC(?:UTE)?\s{1,20}xp_/i},{id:"sql-tautology-string",description:`Classic string tautology: ' OR '1'='1 or " OR "1"="1"`,pattern:/'\s{0,10}OR\s{0,10}'[^']{0,20}'\s*=\s*'[^']{0,20}/i},{id:"sql-tautology-numeric",description:"Numeric tautology: OR 1=1",pattern:/\bOR\s{1,10}1\s*=\s*1\b/i},{id:"sql-always-true-zero",description:"Numeric tautology: OR 0=0",pattern:/\bOR\s{1,10}0\s*=\s*0\b/i},{id:"sql-sleep-benchmark",description:"Time-based blind injection: SLEEP() or BENCHMARK()",pattern:/\b(?:SLEEP|BENCHMARK)\s*\(/i},{id:"sql-waitfor-delay",description:"MSSQL time-based blind injection: WAITFOR DELAY",pattern:/\bWAITFOR\s{1,20}DELAY\b/i},{id:"sql-char-function",description:"CHAR() function — used to obfuscate injected strings",pattern:/\bCHAR\s*\(\s*\d{1,3}/i},{id:"sql-information-schema",description:"INFORMATION_SCHEMA — reconnaissance query for table/column enumeration",pattern:/\bINFORMATION_SCHEMA\b/i}],_v=[{id:"shell-path-traversal-unix",description:"Unix path traversal: ../  — climbing the directory tree",pattern:/\.\.\//},{id:"shell-path-traversal-windows",description:"Windows path traversal: ..\\ — climbing the directory tree",pattern:/\.\.\\/},{id:"shell-path-traversal-encoded",description:"URL-encoded path traversal: %2e%2e or %2f variants",pattern:/%2e%2e|%2f\.\.|\.\.%2f/i},{id:"shell-null-byte",description:"Null byte injection: \\x00 or %00 — truncates strings in C-backed functions",pattern:/\x00|%00/},{id:"shell-semicolon",description:"Semicolon command separator: cmd1; cmd2",pattern:/;/},{id:"shell-pipe",description:"Pipe operator: cmd1 | cmd2",pattern:/\|/},{id:"shell-and-operator",description:"AND operator: cmd1 && cmd2",pattern:/&&/},{id:"shell-or-operator",description:"OR operator: cmd1 || cmd2",pattern:/\|\|/},{id:"shell-backtick",description:"Backtick command substitution: `cmd`",pattern:/`/},{id:"shell-dollar-paren",description:"Dollar-paren command substitution: $(cmd)",pattern:/\$\(/},{id:"shell-dollar-brace",description:"Dollar-brace variable expansion: ${var} — can be abused for injection",pattern:/\$\{/},{id:"shell-redirect-out",description:"Output redirection: cmd > file or cmd >> file",pattern:/>{1,2}/},{id:"shell-redirect-in",description:"Input redirection: cmd < file",pattern:/</},{id:"shell-newline-injection",description:"Newline injection: \\n or \\r — can inject new shell commands",pattern:/[\n\r]/},{id:"shell-glob-star",description:"Glob expansion: * or ? — can expand to unintended files",pattern:/[/\\][*?]/},{id:"shell-absolute-root",description:"Absolute root path injection: string starting with / or \\ (Windows UNC)",pattern:/^(?:\/|\\\\)/},{id:"shell-windows-drive",description:"Windows drive letter path injection: C:\\ or D:/",pattern:/^[a-zA-Z]:[/\\]/},{id:"shell-curl-wget",description:"curl/wget with URL or flags — can exfiltrate data or download payloads",pattern:/\b(?:curl|wget)\s+(?:https?:\/\/|ftp:\/\/|-)/i}],Tv=[{id:"redos-nested-quantifier-plus",description:"Nested + quantifier inside a group with outer quantifier: (a+)+, (.+b)*, etc.",pattern:/\([^)]*\+[^)]*\)[+*]/},{id:"redos-nested-quantifier-star",description:"Nested * quantifier: (a*)* or (a*)+ — catastrophic backtracking",pattern:/\([^)]*\*[^)]*\)[*+]/},{id:"redos-nested-groups",description:"Doubly nested quantified groups: ((a+)+) — guaranteed catastrophic",pattern:/\(\([^)]{0,40}\)[+*]\)[+*]/},{id:"redos-alternation-overlap",description:"Overlapping alternation under quantifier: (a|a)+ — ambiguous NFA paths",pattern:/\(([^|()]{1,20})\|(?:\1)(?:\|[^|()]{1,20}){0,5}\)[+*?]{1,2}/},{id:"redos-star-plus-concat",description:"(x*x)+ pattern — triggers super-linear backtracking",pattern:/\([^)]{0,10}\*[^)]{0,10}\)[+*]/},{id:"redos-dot-star-greedy",description:"(.*){n,} or (.+){n,} — repeated greedy dot quantifiers",pattern:/\(\.[*+]\)\{?\d/},{id:"redos-large-repetition",description:"Very large fixed or range repetition count {1000,} or {1000,n} — denial of service via backtracking",pattern:/\{\d{4,}(?:,\d*)?\}/},{id:"redos-catastrophic-alternation",description:"Long alternation with many similar branches — polynomial backtracking risk",pattern:/\([^)]{0,200}(?:\|[^|)]{0,50}){9,}\)/}],er=`["'\\s]*:`,vv=[{id:"nosql-where-operator",description:"$where — executes arbitrary JavaScript server-side in MongoDB",pattern:new RegExp(`\\$where${er}`,"i")},{id:"nosql-ne-operator",description:'$ne — "not equal" operator used to bypass equality checks',pattern:new RegExp(`\\$ne${er}`,"i")},{id:"nosql-gt-operator",description:'$gt — "greater than" used to bypass password/value checks',pattern:new RegExp(`\\$gte?${er}`,"i")},{id:"nosql-lt-operator",description:'$lt / $lte — "less than" bypass variants',pattern:new RegExp(`\\$lte?${er}`,"i")},{id:"nosql-regex-operator",description:"$regex — can be used to extract data character by character (blind injection)",pattern:new RegExp(`\\$regex${er}`,"i")},{id:"nosql-or-operator",description:"$or — logical OR; used to create always-true conditions",pattern:new RegExp(`\\$or${er}\\s*\\[`,"i")},{id:"nosql-and-operator",description:"$and — logical AND operator injection",pattern:new RegExp(`\\$and${er}\\s*\\[`,"i")},{id:"nosql-nor-operator",description:"$nor — logical NOR operator injection",pattern:new RegExp(`\\$nor${er}\\s*\\[`,"i")},{id:"nosql-exists-operator",description:"$exists — can enumerate fields to determine schema",pattern:new RegExp(`\\$exists${er}`,"i")},{id:"nosql-in-operator",description:"$in — matches any value in a list; can enumerate values",pattern:new RegExp(`\\$in${er}\\s*\\[`,"i")},{id:"nosql-expr-operator",description:"$expr — allows aggregation expressions in queries (MongoDB 3.6+)",pattern:new RegExp(`\\$expr${er}`,"i")},{id:"nosql-function-operator",description:"$function — executes arbitrary JavaScript in MongoDB 4.4+",pattern:new RegExp(`\\$function${er}`,"i")},{id:"nosql-accumulator-operator",description:"$accumulator — custom aggregation with arbitrary JS execution",pattern:new RegExp(`\\$accumulator${er}`,"i")},{id:"nosql-proto-pollution",description:"__proto__ — prototype pollution via object key injection",pattern:/__proto__/},{id:"nosql-constructor-prototype",description:"constructor.prototype — alternative prototype pollution vector (dot notation or JSON key)",pattern:/constructor[\s"':.,{\[]*prototype/i},{id:"nosql-proto-bracket",description:'["__proto__"] — bracket-notation prototype pollution',pattern:/\[["']__proto__["']\]/}],yv=[{id:"log-crlf-injection",description:"CRLF injection: literal \\r or \\n embeds fake log lines",pattern:/[\r\n]/},{id:"log-url-encoded-crlf",description:"URL-encoded CRLF: %0d, %0a, %0D, %0A — decoded by some log parsers",pattern:/%0[dDaA]/},{id:"log-unicode-newline",description:"Unicode newline variants: U+2028 (line separator), U+2029 (paragraph separator)",pattern:/[\u2028\u2029]/},{id:"log-log4shell-jndi",description:"Log4Shell: ${jndi:...} triggers remote code execution in Apache Log4j",pattern:/\$\{jndi\s*:/i},{id:"log-log4shell-obfuscated",description:"Obfuscated Log4Shell: ${::-j}... lookup-bypass prefix used to evade WAF detection",pattern:/\$\{::-/},{id:"log-log4j-lookup",description:"Log4j lookup syntax: ${env:...}, ${sys:...}, ${ctx:...} — data exfiltration",pattern:/\$\{(?:env|sys|ctx|main|map|sd|web|docker|k8s|spring)\s*:/i},{id:"log-ssti-double-brace",description:"SSTI double-brace: {{expression}} — Jinja2, Twig, Handlebars, etc.",pattern:/\{\{[\s\S]{0,80}\}\}/},{id:"log-ssti-hash-brace",description:"SSTI hash-brace: #{expression} — Thymeleaf, Velocity, Ruby ERB",pattern:/#\{[\s\S]{0,80}\}/},{id:"log-ssti-dollar-brace",description:"SSTI/EL injection: ${expression with operators or method calls} — JSP EL, Freemarker, SpEL",pattern:/\$\{[^}]*(?:\.|\(|\*|\+|\bclass\b|\bruntime\b|\bprocess\b|\bexec\b)[^}]{0,80}\}/i},{id:"log-ssti-percent-tag",description:"SSTI ERB/ASP tag: <%= expression %> — Ruby ERB, ASP",pattern:/<%=[\s\S]{0,80}%>/},{id:"log-null-byte",description:"Null byte: \\x00 or %00 — can truncate log entries in C-backed loggers",pattern:/\x00|%00/},{id:"log-ansi-escape",description:"ANSI escape sequence: ESC[ — can manipulate terminal output when logs are tailed",pattern:/\x1b\[/}],Sv=[{id:"sql-line-comment",description:"SQL line comment: -- followed by whitespace or end of string",pattern:/--(?:\s|$)/},{id:"sql-stacked-query",description:"Stacked queries: semicolon immediately followed by a SQL keyword",pattern:/;\s{0,10}(?:SELECT|INSERT|UPDATE|DELETE|DROP|CREATE|ALTER|EXEC)\b/i},{id:"sql-hex-encoding",description:"Hex-encoded string injection: 0x41414141 style (MySQL)",pattern:/\b0x[0-9a-f]{4,}/i}],wv=[...qh,...Sv];zh.label="HTML";Hh.label="XML";bv.label="SVG";qh.label="SQL";wv.label="SQL-STRICT";_v.label="SHELL";Tv.label="REDOS";vv.label="NOSQL";yv.label="LOG";function Ev(r){if(typeof r!="string")throw new TypeError(`is-unsafe: first argument must be a string, got ${typeof r}`)}function xv(r){if(!(r instanceof RegExp)){if(Array.isArray(r)){if(r.length===0)throw new TypeError("is-unsafe: context must not be an empty array");if(Array.isArray(r[0])){for(const e of r)if(!Array.isArray(e)||e.length===0)throw new TypeError("is-unsafe: each context in the array must be a non-empty pattern array (PatternList)")}return}throw new TypeError(`is-unsafe: second argument must be a PatternList (e.g. HTML), an array of PatternLists (e.g. [HTML, XML]), or a RegExp. Got: ${typeof r}`)}}function Cv(r){return r instanceof RegExp?{lists:null,regex:r}:Array.isArray(r[0])?{lists:r,regex:null}:{lists:[r],regex:null}}function Mv(r,e){const t=e.label??"CUSTOM";for(const i of e)if(i.pattern.test(r))return{context:t,id:i.id,description:i.description,pattern:i.pattern};return null}function Iv(r,e){Ev(r),xv(e);const{lists:t,regex:i}=Cv(e);if(i)return i.test(r);for(const o of t)if(Mv(r,o)!==null)return!0;return!1}function Rv(r,e){if(!r)return{};const t=e.attributesGroupName?r[e.attributesGroupName]:r;if(!t)return{};const i={};for(const o in t)if(o.startsWith(e.attributeNamePrefix)){const c=o.substring(e.attributeNamePrefix.length);i[c]=t[o]}else i[o]=t[o];return i}function Nv(r){if(!r||typeof r!="string")return;const e=r.indexOf(":");if(e!==-1&&e>0){const t=r.substring(0,e);if(t!=="xmlns")return t}}class Pv{constructor(e,t){this.options=e,this.currentNode=null,this.tagsNodeStack=[],this.parseXml=Bv,this.parseTextData=Lv,this.resolveNameSpace=kv,this.buildAttributesMap=Fv,this.isItStopNode=jv,this.replaceEntitiesValue=Uv,this.readStopNodeData=Hv,this.saveTextToParentTag=Vv,this.addChild=Dv,this.ignoreAttributesFn=dv(this.options.ignoreAttributes),this.entityExpansionCount=0,this.currentExpandedLength=0,this.doctypefound=!1;let i={...kh};this.options.entityDecoder?this.entityDecoder=this.options.entityDecoder:(typeof this.options.htmlEntities=="object"?i=this.options.htmlEntities:this.options.htmlEntities===!0&&(i={...DT,...BT}),this.entityDecoder=new zT({namedEntities:{...i,...t},numericAllowed:this.options.htmlEntities,limit:{maxTotalExpansions:this.options.processEntities.maxTotalExpansions,maxExpandedLength:this.options.processEntities.maxExpandedLength,applyLimitsTo:this.options.processEntities.appliesTo},onInputEntity:(c,d)=>Iv(d,[zh,Hh])?eo.BLOCK:eo.ALLOW})),this.matcher=new gv,this.readonlyMatcher=this.matcher.readOnly(),this.isCurrentNodeStopNode=!1,this.stopNodeExpressionsSet=new pv;const o=this.options.stopNodes;if(o&&o.length>0){for(let c=0;c<o.length;c++){const d=o[c];typeof d=="string"?this.stopNodeExpressionsSet.add(new ll(d)):d instanceof ll&&this.stopNodeExpressionsSet.add(d)}this.stopNodeExpressionsSet.seal()}}}function Lv(r,e,t,i,o,c,d){const m=this.options;if(r!==void 0&&(m.trimValues&&!i&&(r=r.trim()),r.length>0)){d||(r=this.replaceEntitiesValue(r,e,t));const _=m.jPath?t.toString():t,T=m.tagValueProcessor(e,r,_,o,c);return T==null?r:typeof T!=typeof r||T!==r?T:m.trimValues||r.trim()===r?TA(r,m.parseTagValue,m.numberParseOptions):r}}function kv(r){if(this.options.removeNSPrefix){const e=r.split(":"),t=r.charAt(0)==="/"?"/":"";if(e[0]==="xmlns")return"";e.length===2&&(r=t+e[1])}return r}const Ov=new RegExp(`([^\\s=]+)\\s*(=\\s*(['"])([\\s\\S]*?)\\3)?`,"gm");function Fv(r,e,t,i=!1){const o=this.options;if(i===!0||o.ignoreAttributes!==!0&&typeof r=="string"){const c=ET(r,Ov),d=c.length,m={},_=new Array(d);let T=!1;const y={};for(let N=0;N<d;N++){const O=this.resolveNameSpace(c[N][1]),F=c[N][4];if(O.length&&F!==void 0){let W=F;o.trimValues&&(W=W.trim()),W=this.replaceEntitiesValue(W,t,this.readonlyMatcher),_[N]=W,y[O]=W,T=!0}}T&&typeof e=="object"&&e.updateCurrent&&e.updateCurrent(y);const w=o.jPath?e.toString():this.readonlyMatcher;let M=!1;for(let N=0;N<d;N++){const O=this.resolveNameSpace(c[N][1]);if(this.ignoreAttributesFn(O,w))continue;let F=o.attributeNamePrefix+O;if(O.length)if(o.transformAttributeName&&(F=o.transformAttributeName(F)),F=Qh(F,o),c[N][4]!==void 0){const W=_[N],j=o.attributeValueProcessor(O,W,w);j==null?m[F]=W:typeof j!=typeof W||j!==W?m[F]=j:m[F]=TA(W,o.parseAttributeValue,o.numberParseOptions),M=!0}else o.allowBooleanAttributes&&(m[F]=!0,M=!0)}if(!M)return;if(o.attributesGroupName&&!o.preserveOrder){const N={};return N[o.attributesGroupName]=m,N}return m}}const Bv=function(r){r=r.replace(/\r\n?/g,`
`);const e=new Jr("!xml");let t=e,i="";this.matcher.reset(),this.entityDecoder.reset(),this.entityExpansionCount=0,this.currentExpandedLength=0,this.doctypefound=!1;const o=this.options,c=new ev(o.processEntities),d=r.length;for(let m=0;m<d;m++)if(r[m]==="<"){const T=r.charCodeAt(m+1);if(T===47){const y=ei(r,">",m,"Closing Tag is not closed.");let w=r.substring(m+2,y).trim();if(o.removeNSPrefix){const N=w.indexOf(":");N!==-1&&(w=w.substr(N+1))}w=ba(o.transformTagName,w,"",o).tagName,t&&(i=this.saveTextToParentTag(i,t,this.readonlyMatcher));const M=this.matcher.getCurrentTag();if(w&&o.unpairedTagsSet.has(w))throw new Error(`Unpaired tag can not be used as closing tag: </${w}>`);M&&o.unpairedTagsSet.has(M)&&(this.matcher.pop(),this.tagsNodeStack.pop()),this.matcher.pop(),this.isCurrentNodeStopNode=!1,t=this.tagsNodeStack.pop()||e,o.captureMetaData&&t&&t.addEndIndex(y+1),i="",m=y}else if(T===63){let y=_A(r,m,!1,"?>");if(!y)throw new Error("Pi Tag is not closed.");i=this.saveTextToParentTag(i,t,this.readonlyMatcher);const w=this.buildAttributesMap(y.tagExp,this.matcher,y.tagName,!0);if(w){const M=w[this.options.attributeNamePrefix+"version"];this.entityDecoder.setXmlVersion(Number(M)||1),c.setXmlVersion(Number(M)||1)}if(!(o.ignoreDeclaration&&y.tagName==="?xml"||o.ignorePiTags)){const M=new Jr(y.tagName);M.add(o.textNodeName,""),y.tagName!==y.tagExp&&y.attrExpPresent&&o.ignoreAttributes!==!0&&(M[":@"]=w),this.addChild(t,M,this.readonlyMatcher,m),o.captureMetaData&&t.addEndIndex(y.closeIndex+2)}m=y.closeIndex+1}else if(T===33&&r.charCodeAt(m+2)===45&&r.charCodeAt(m+3)===45){const y=ei(r,"-->",m+4,"Comment is not closed.");if(o.commentPropName){const w=r.substring(m+4,y-2);i=this.saveTextToParentTag(i,t,this.readonlyMatcher),t.add(o.commentPropName,[{[o.textNodeName]:w}])}m=y}else if(T===33&&r.charCodeAt(m+2)===68){if(this.doctypefound)throw new Error("Multiple DOCTYPE declarations found.");this.doctypefound=!0;const y=c.readDocType(r,m);this.entityDecoder.addInputEntities(y.entities),m=y.i}else if(T===33&&r.charCodeAt(m+2)===91){const y=ei(r,"]]>",m,"CDATA is not closed.")-2,w=r.substring(m+9,y);i=this.saveTextToParentTag(i,t,this.readonlyMatcher);let M=this.parseTextData(w,t.tagname,this.readonlyMatcher,!0,!1,!0,!0);M==null&&(M=""),o.cdataPropName?t.add(o.cdataPropName,[{[o.textNodeName]:w}]):t.add(o.textNodeName,M),m=y+2}else{let y=_A(r,m,o.removeNSPrefix);if(!y){const Y=r.substring(Math.max(0,m-50),Math.min(d,m+50));throw new Error(`readTagExp returned undefined at position ${m}. Context: "${Y}"`)}let w=y.tagName;const M=y.rawTagName;let N=y.tagExp,O=y.attrExpPresent,F=y.closeIndex;if({tagName:w,tagExp:N}=ba(o.transformTagName,w,N,o),o.strictReservedNames&&(w===o.commentPropName||w===o.cdataPropName||w===o.textNodeName||w===o.attributesGroupName))throw new Error(`Invalid tag name: ${w}`);t&&i&&t.tagname!=="!xml"&&(i=this.saveTextToParentTag(i,t,this.readonlyMatcher,!1));const W=t;W&&o.unpairedTagsSet.has(W.tagname)&&(t=this.tagsNodeStack.pop(),this.matcher.pop());let j=!1;N.length>0&&N.lastIndexOf("/")===N.length-1&&(j=!0,w[w.length-1]==="/"?(w=w.substr(0,w.length-1),N=w):N=N.substr(0,N.length-1),O=w!==N);let q=null,J;J=Nv(M),w!==e.tagname&&this.matcher.push(w,{},J),w!==N&&O&&(q=this.buildAttributesMap(N,this.matcher,w),q&&Rv(q,o)),w!==e.tagname&&(this.isCurrentNodeStopNode=this.isItStopNode());const Z=m;if(this.isCurrentNodeStopNode){let Y="";if(j)m=y.closeIndex;else if(o.unpairedTagsSet.has(w))m=y.closeIndex;else{const he=this.readStopNodeData(r,M,F+1);if(!he)throw new Error(`Unexpected end of ${M}`);m=he.i,Y=he.tagContent}const se=new Jr(w);q&&(se[":@"]=q),se.add(o.textNodeName,Y),this.matcher.pop(),this.isCurrentNodeStopNode=!1,this.addChild(t,se,this.readonlyMatcher,Z),o.captureMetaData&&t.addEndIndex(m+1)}else{if(j){({tagName:w,tagExp:N}=ba(o.transformTagName,w,N,o));const Y=new Jr(w);q&&(Y[":@"]=q),this.addChild(t,Y,this.readonlyMatcher,Z),o.captureMetaData&&t.addEndIndex(F+1),this.matcher.pop(),this.isCurrentNodeStopNode=!1}else if(o.unpairedTagsSet.has(w)){const Y=new Jr(w);q&&(Y[":@"]=q),this.addChild(t,Y,this.readonlyMatcher,Z),o.captureMetaData&&t.addEndIndex(y.closeIndex+1),this.matcher.pop(),this.isCurrentNodeStopNode=!1,m=y.closeIndex;continue}else{const Y=new Jr(w);if(this.tagsNodeStack.length>o.maxNestedTags)throw new Error("Maximum nested tags exceeded");this.tagsNodeStack.push(t),q&&(Y[":@"]=q),this.addChild(t,Y,this.readonlyMatcher,Z),t=Y}i="",m=F}}}else i+=r[m];return e.child};function Dv(r,e,t,i){this.options.captureMetaData||(i=void 0);const o=this.options.jPath?t.toString():t,c=this.options.updateTag(e.tagname,o,e[":@"]);c===!1||(typeof c=="string"&&(e.tagname=c),r.addChild(e,i))}function Uv(r,e,t){const i=this.options.processEntities;if(!i||!i.enabled)return r;if(i.allowedTags){const o=this.options.jPath?t.toString():t;if(!(Array.isArray(i.allowedTags)?i.allowedTags.includes(e):i.allowedTags(e,o)))return r}if(i.tagFilter){const o=this.options.jPath?t.toString():t;if(!i.tagFilter(e,o))return r}return this.entityDecoder.decode(r)}function Vv(r,e,t,i){return r&&(i===void 0&&(i=e.child.length===0),r=this.parseTextData(r,e.tagname,t,!1,e[":@"]?Object.keys(e[":@"]).length!==0:!1,i),r!==void 0&&r!==""&&e.add(this.options.textNodeName,r),r=""),r}function jv(){return this.stopNodeExpressionsSet.size===0?!1:this.matcher.matchesAny(this.stopNodeExpressionsSet)}function Gv(r,e,t=">"){let i=0;const o=r.length,c=t.charCodeAt(0),d=t.length>1?t.charCodeAt(1):-1;let m="",_=e;for(let T=e;T<o;T++){const y=r.charCodeAt(T);if(i)y===i&&(i=0);else if(y===34||y===39)i=y;else if(y===c)if(d!==-1){if(r.charCodeAt(T+1)===d)return m+=r.substring(_,T),{data:m,index:T}}else return m+=r.substring(_,T),{data:m,index:T};else y===9&&!i&&(m+=r.substring(_,T)+" ",_=T+1)}}function ei(r,e,t,i){const o=r.indexOf(e,t);if(o===-1)throw new Error(i);return o+e.length-1}function zv(r,e,t,i){const o=r.indexOf(e,t);if(o===-1)throw new Error(i);return o}function _A(r,e,t,i=">"){const o=Gv(r,e+1,i);if(!o)return;let c=o.data;const d=o.index,m=c.search(/\s/);let _=c,T=!0;m!==-1&&(_=c.substring(0,m),c=c.substring(m+1).trimStart());const y=_;if(t){const w=_.indexOf(":");w!==-1&&(_=_.substr(w+1),T=_!==o.data.substr(w+1))}return{tagName:_,tagExp:c,closeIndex:d,attrExpPresent:T,rawTagName:y}}function Hv(r,e,t){const i=t;let o=1;const c=r.length;for(;t<c;t++)if(r[t]==="<"){const d=r.charCodeAt(t+1);if(d===47){const m=zv(r,">",t,`${e} is not closed`);if(r.substring(t+2,m).trim()===e&&(o--,o===0))return{tagContent:r.substring(i,t),i:m};t=m}else if(d===63)t=ei(r,"?>",t+1,"StopNode is not closed.");else if(d===33&&r.charCodeAt(t+2)===45&&r.charCodeAt(t+3)===45)t=ei(r,"-->",t+3,"StopNode is not closed.");else if(d===33&&r.charCodeAt(t+2)===91)t=ei(r,"]]>",t,"StopNode is not closed.")-2;else{const m=_A(r,t,!1);m&&((m&&m.tagName)===e&&m.tagExp[m.tagExp.length-1]!=="/"&&o++,t=m.closeIndex)}}}function TA(r,e,t){if(e&&typeof r=="string"){const i=r.trim();return i==="true"?!0:i==="false"?!1:cv(r,t)}else return xT(r)?r:""}function ba(r,e,t,i){if(r){const o=r(e);t===e&&(t=o),e=o}return e=Qh(e,i),{tagName:e,tagExp:t}}function Qh(r,e){if(Lh.includes(r))throw new Error(`[SECURITY] Invalid name: "${r}" is a reserved JavaScript keyword that could cause prototype pollution`);return YA.includes(r)?e.onDangerousProperty(r):r}const _a=Jr.getMetaDataSymbol();function qv(r,e){if(!r||typeof r!="object")return{};if(!e)return r;const t={};for(const i in r)if(i.startsWith(e)){const o=i.substring(e.length);t[o]=r[i]}else t[i]=r[i];return t}function Qv(r,e,t,i){return Wh(r,e,t,i)}function Wh(r,e,t,i){let o;const c={};for(let d=0;d<r.length;d++){const m=r[d],_=Wv(m);if(_!==void 0&&_!==e.textNodeName){const T=qv(m[":@"]||{},e.attributeNamePrefix);t.push(_,T)}if(_===e.textNodeName)o===void 0?o=m[_]:o+=""+m[_];else{if(_===void 0)continue;if(m[_]){let T=Wh(m[_],e,t,i);const y=$v(T,e);if(Object.keys(T).length===0&&e.alwaysCreateTextNode&&(T[e.textNodeName]=""),m[":@"]?Kv(T,m[":@"],i,e):Object.keys(T).length===1&&T[e.textNodeName]!==void 0&&!e.alwaysCreateTextNode?T=T[e.textNodeName]:Object.keys(T).length===0&&(e.alwaysCreateTextNode?T[e.textNodeName]="":T=""),m[_a]!==void 0&&typeof T=="object"&&T!==null&&(T[_a]=m[_a]),c[_]!==void 0&&Object.prototype.hasOwnProperty.call(c,_))Array.isArray(c[_])||(c[_]=[c[_]]),c[_].push(T);else{const w=e.jPath?i.toString():i;e.isArray(_,w,y)?c[_]=[T]:c[_]=T}_!==void 0&&_!==e.textNodeName&&t.pop()}}}return typeof o=="string"?o.length>0&&(c[e.textNodeName]=o):o!==void 0&&(c[e.textNodeName]=o),c}function Wv(r){const e=Object.keys(r);for(let t=0;t<e.length;t++){const i=e[t];if(i!==":@")return i}}function Kv(r,e,t,i){if(e){const o=Object.keys(e),c=o.length;for(let d=0;d<c;d++){const m=o[d],_=m.startsWith(i.attributeNamePrefix)?m.substring(i.attributeNamePrefix.length):m,T=i.jPath?t.toString()+"."+_:t;i.isArray(m,T,!0,!0)?r[m]=[e[m]]:r[m]=e[m]}}}function $v(r,e){const{textNodeName:t}=e,i=Object.keys(r).length;return!!(i===0||i===1&&(r[t]||typeof r[t]=="boolean"||r[t]===0))}class Xv{constructor(e){this.externalEntities={},this.options=QT(e)}parse(e,t){if(typeof e!="string"&&e.toString)e=e.toString();else if(typeof e!="string")throw new Error("XML data is accepted in String or Bytes[] form.");if(t){t===!0&&(t={});const c=MT(e,t);if(c!==!0)throw Error(`${c.err.msg}:${c.err.line}:${c.err.col}`)}const i=new Pv(this.options,this.externalEntities),o=i.parseXml(e);return this.options.preserveOrder||o===void 0?o:Qv(o,this.options,i.matcher,i.readonlyMatcher)}addEntity(e,t){if(t.indexOf("&")!==-1)throw new Error("Entity value can't have '&'");if(e.indexOf("&")!==-1||e.indexOf(";")!==-1)throw new Error("An entity must be set without '&' and ';'. Eg. use '#xD' for '&#xD;'");if(t==="&")throw new Error("An entity with value '&' is not permitted");this.externalEntities[e]=t}static getMetaDataSymbol(){return Jr.getMetaDataSymbol()}}function ul(r,e){if(e!=null&&e._parser&&e._parser!=="fast-xml-parser")throw new Error(e==null?void 0:e._parser);const t={allowBooleanAttributes:!0,ignoreDeclaration:!0,removeNSPrefix:e==null?void 0:e.removeNSPrefix,textNodeName:e==null?void 0:e.textNodeName,isArray:(o,c,d,m)=>{var T;return!!((T=e==null?void 0:e.arrayPaths)!=null&&T.some(y=>c===y))},...e==null?void 0:e._fastXML},i=Yv(r,t);return e!=null&&e.uncapitalizeKeys?dA(i):i}function Yv(r,e){return new Xv({ignoreAttributes:!1,attributeNamePrefix:"",...e}).parse(r)}const Jv="4.5.1",Jt={dataType:null,batchType:null,name:"XML",id:"xml",module:"xml",version:Jv,worker:!1,extensions:["xml"],mimeTypes:["application/xml","text/xml"],testText:Zv,options:{xml:{_parser:"fast-xml-parser",uncapitalizeKeys:!1,removeNSPrefix:!1,textNodeName:"value",arrayPaths:[]}},parse:async(r,e)=>ul(new TextDecoder().decode(r),{...Jt.options.xml,...e==null?void 0:e.xml}),parseTextSync:(r,e)=>ul(r,{...Jt.options.xml,...e==null?void 0:e.xml})};function Zv(r){return r.startsWith("<?xml")}function ey(r,e){var c,d,m;const t=(c=Jt.parseTextSync)==null?void 0:c.call(Jt,r,e),i=((d=t==null?void 0:t.ServiceExceptionReport)==null?void 0:d.ServiceException)||((m=t==null?void 0:t["ogc:ServiceExceptionReport"])==null?void 0:m["ogc:ServiceException"]);return typeof i=="string"?i:i.value||i.code||"Unknown error"}const ty="4.5.1",Yr={dataType:null,batchType:null,id:"wms-error",name:"WMS Error",module:"wms",version:ty,worker:!1,extensions:["xml"],mimeTypes:["application/vnd.ogc.se_xml","application/xml","text/xml"],testText:ry,options:{wms:{throwOnError:!1}},parse:async(r,e)=>Ta(new TextDecoder().decode(r),e),parseSync:(r,e)=>Ta(new TextDecoder().decode(r),e),parseTextSync:(r,e)=>Ta(r,e)};function ry(r){return r.startsWith("<?xml")}function Ta(r,e){const t={...Yr.options.wms,...e==null?void 0:e.wms},i=ey(r,t),o=t.minimalErrors?i:`WMS Service error: ${i}`;if(t.throwOnError)throw new Error(o);return o}function ni(r){return Array.isArray(r)?r:r?[r]:[]}function yo(r){const e=ni(r);return e.length>0&&e.every(t=>typeof t=="string")?e:[]}function ws(r,e=void 0){switch(typeof r){case"number":return r;case"string":return parseFloat(r);default:return}}function va(r,e=void 0){switch(typeof r){case"number":return r;case"string":return parseInt(r,10);default:return}}function ti(r){switch(r){case"true":return!0;case"false":return!1;case"1":return!0;case"0":return!1;default:return!1}}function fl(r,e){var c;const t=(c=Jt.parseTextSync)==null?void 0:c.call(Jt,r,e),i=t.WMT_MS_Capabilities||t.WMS_Capabilities||t,o=ny(i);if(e!=null&&e.inheritedLayerProps)for(const d of o.layers)$h(d,null);return e!=null&&e.includeRawJSON&&(o.json=i),e!=null&&e.includeXMLText&&(o.xml=r),o}function ny(r){var i,o,c,d,m,_,T,y,w,M,N,O,F,W,j,q;const e={version:String(r.version||""),name:String(((i=r.Service)==null?void 0:i.Name)||"unnamed"),title:(o=r.Service)!=null&&o.Title?String((c=r.Service)==null?void 0:c.Title):void 0,abstract:(d=r.Service)!=null&&d.Abstract?String((m=r.Service)==null?void 0:m.Abstract):void 0,keywords:yo((T=(_=r.Service)==null?void 0:_.KeywordList)==null?void 0:T.Keyword),fees:(y=r.Service)!=null&&y.Fees?JSON.stringify((w=r.Service)==null?void 0:w.Fees):void 0,accessConstraints:(M=r.Service)!=null&&M.AccessConstraints?JSON.stringify((N=r.Service)==null?void 0:N.AccessConstraints):void 0,layerLimit:va((O=r.Service)==null?void 0:O.LayerLimit),maxWidth:va((F=r.Service)==null?void 0:F.maxWidth),maxHeight:va((W=r.Service)==null?void 0:W.maxHeight),layers:[],requests:iy((j=r.Capability)==null?void 0:j.Request),exceptions:sy(r.Exception)},t=ni((q=r.Capability)==null?void 0:q.Layer);for(const J of t)e.layers.push(Kh(J));for(const[J,Z]of Object.entries(e))Z===void 0&&delete e[J];return e}function iy(r){const e={};for(const[t,i]of Object.entries(r||{})){const o=yo(i==null?void 0:i.Format);e[t]={mimeTypes:o}}return e}function sy(r){if(ni(r==null?void 0:r.Format).length>0)return{mimeTypes:yo(r)}}function Kh(r){var T;const e={title:String((r==null?void 0:r.Title)||""),name:(r==null?void 0:r.Name)&&String(r==null?void 0:r.Name),abstract:(r==null?void 0:r.Name)&&String(r==null?void 0:r.Abstract),keywords:yo((T=r.KeywordList)==null?void 0:T.Keyword)},t=(r==null?void 0:r.CRS)||(r==null?void 0:r.SRS);t&&Array.isArray(t)&&t.every(y=>typeof y=="string")&&(e.crs=t);let i=(r==null?void 0:r.EX_GeographicBoundingBox)&&oy(r==null?void 0:r.EX_GeographicBoundingBox);i&&(e.geographicBoundingBox=i),i=(r==null?void 0:r.LatLonBoundingBox)&&ay(r==null?void 0:r.LatLonBoundingBox),i&&(e.geographicBoundingBox=i);const o=(r==null?void 0:r.BoundingBox)&&Ay(r==null?void 0:r.BoundingBox);o&&o.length>0&&(e.boundingBoxes=o);const d=ni(r==null?void 0:r.Dimension).map(y=>ly(y));d.length&&(e.dimensions=d),r!=null&&r.opaque&&(e.opaque=ti(r==null?void 0:r.opaque)),r!=null&&r.cascaded&&(e.cascaded=ti(r==null?void 0:r.cascaded)),r!=null&&r.queryable&&(e.queryable=ti(r==null?void 0:r.queryable));const m=ni(r==null?void 0:r.Layer),_=[];for(const y of m)_.push(Kh(y));_.length>0&&(e.layers=_);for(const[y,w]of Object.entries(e))w===void 0&&delete e[y];return e}function oy(r){const{westBoundLongitude:e,northBoundLatitude:t,eastBoundLongitude:i,southBoundLatitude:o}=r;return[[e,o],[i,t]]}function ay(r){const{minx:e,miny:t,maxx:i,maxy:o}=r;return[[e,t],[i,o]]}function Ay(r){return ni(r).map(t=>cy(t))}function cy(r){const{CRS:e,SRS:t,minx:i,miny:o,maxx:c,maxy:d,resx:m,resy:_}=r,T={crs:e||t,boundingBox:[[ws(i),ws(o)],[ws(c),ws(d)]]};return m&&(T.xResolution=m),_&&(T.yResolution=_),T}function ly(r){const{name:e,units:t,value:i}=r,o={name:e,units:t,extent:i};return r.unitSymbol&&(o.unitSymbol=r.unitSymbol),r.default&&(o.defaultValue=r.default),r.multipleValues&&(o.multipleValues=ti(r.multipleValues)),r.nearestValue&&(o.nearestValue=ti(r.nearestValue)),r.current&&(o.current=ti(r.current)),o}function $h(r,e){e!=null&&e.geographicBoundingBox&&!r.geographicBoundingBox&&(r.geographicBoundingBox=[...e.geographicBoundingBox]),e!=null&&e.crs&&!r.crs&&(r.crs=[...e.crs]),e!=null&&e.boundingBoxes&&!r.boundingBoxes&&(r.boundingBoxes=[...e.boundingBoxes]),e!=null&&e.dimensions&&!r.dimensions&&(r.dimensions=[...e.dimensions]);for(const t of r.layers||[])$h(t,r)}const uy="4.5.1",ZA={dataType:null,batchType:null,id:"wms-capabilities",name:"WMS Capabilities",module:"wms",version:uy,worker:!1,extensions:["xml"],mimeTypes:["application/vnd.ogc.wms_xml","application/xml","text/xml"],testText:fy,options:{wms:{}},parse:async(r,e)=>fl(new TextDecoder().decode(r),e==null?void 0:e.wms),parseTextSync:(r,e)=>fl(r,e==null?void 0:e.wms)};function fy(r){return r.startsWith("<?xml")}function hl(r,e){var c,d;const i=((d=((c=Jt.parseTextSync)==null?void 0:c.call(Jt,r,e)).FeatureInfoResponse)==null?void 0:d.FIELDS)||[];return{features:(Array.isArray(i)?i:[i]).map(m=>hy(m))}}function hy(r){return{attributes:r||{},type:"",bounds:{bottom:0,top:0,left:0,right:0}}}const dy={...ZA,dataType:null,id:"wms-feature-info",name:"WMS FeatureInfo",parse:async(r,e)=>hl(new TextDecoder().decode(r),e),parseTextSync:(r,e)=>hl(r,e)};function dl(r,e){var i;return(i=Jt.parseTextSync)==null?void 0:i.call(Jt,r,e)}const py={...ZA,dataType:null,id:"wms-layer-description",name:"WMS DescribeLayer",parse:async(r,e)=>dl(new TextDecoder().decode(r),e),parseTextSync:(r,e)=>dl(r,e)},Xh={name:"Web Map Service (OGC WMS)",id:"wms",module:"wms",version:"0.0.0",extensions:[],mimeTypes:[],type:"wms",fromUrl:!0,fromBlob:!1,defaultOptions:{wms:{}},testURL:r=>r.toLowerCase().includes("wms"),createDataSource:(r,e)=>new my(r,e)};class my extends Za{constructor(t,i){var o,c,d;super(t,i,Xh.defaultOptions);B(this,"substituteCRS84");B(this,"flipCRS");B(this,"wmsParameters");B(this,"vendorParameters");B(this,"capabilities",null);this.substituteCRS84=((o=i.wms)==null?void 0:o.substituteCRS84)??!1,this.flipCRS=["EPSG:4326"],this.wmsParameters={layers:void 0,query_layers:void 0,styles:void 0,version:"1.3.0",crs:"EPSG:4326",format:"image/png",info_format:"text/plain",transparent:void 0,time:void 0,elevation:void 0,...i.wmsParameters,...(c=i.wms)==null?void 0:c.wmsParameters},this.vendorParameters=((d=i.wms)==null?void 0:d.vendorParameters)||i.vendorParameters||{}}async getMetadata(){const t=await this.getCapabilities();return this.normalizeMetadata(t)}async getImage(t){const{boundingBox:i,bbox:o,...c}=t,d={bbox:i?[...i[0],...i[1]]:o,...c};return await this.getMap(d)}normalizeMetadata(t){return t}async getCapabilities(t,i){const o=this.getCapabilitiesURL(t,i),c=await this.fetch(o),d=await c.arrayBuffer();this._checkResponse(c,d);const m=await ZA.parse(d,this.loadOptions);return this.capabilities=m,m}async getMap(t,i){const o=this.getMapURL(t,i),c=await this.fetch(o),d=await c.arrayBuffer();this._checkResponse(c,d);try{return await Ya.parse(d,this.loadOptions)}catch{throw this._parseError(d)}}async getFeatureInfo(t,i){const o=this.getFeatureInfoURL(t,i),c=await this.fetch(o),d=await c.arrayBuffer();return this._checkResponse(c,d),await dy.parse(d,this.loadOptions)}async getFeatureInfoText(t,i){const o=this.getFeatureInfoURL(t,i),c=await this.fetch(o),d=await c.arrayBuffer();return this._checkResponse(c,d),new TextDecoder().decode(d)}async describeLayer(t,i){const o=this.describeLayerURL(t,i),c=await this.fetch(o),d=await c.arrayBuffer();return this._checkResponse(c,d),await py.parse(d,this.loadOptions)}async getLegendGraphic(t,i){const o=this.getLegendGraphicURL(t,i),c=await this.fetch(o),d=await c.arrayBuffer();this._checkResponse(c,d);try{return await Ya.parse(d,this.loadOptions)}catch{throw this._parseError(d)}}getCapabilitiesURL(t,i){const o={version:this.wmsParameters.version,...t};return this._getWMSUrl("GetCapabilities",o,i)}getMapURL(t,i){t=this._getWMS130Parameters(t);const o={version:this.wmsParameters.version,format:this.wmsParameters.format,transparent:this.wmsParameters.transparent,time:this.wmsParameters.time,elevation:this.wmsParameters.elevation,layers:this.wmsParameters.layers,styles:this.wmsParameters.styles,crs:this.wmsParameters.crs,...t};return this._getWMSUrl("GetMap",o,i)}getFeatureInfoURL(t,i){t=this._getWMS130Parameters(t);const{boundingBox:o,bbox:c}=t;t.bbox=o?[...o[0],...o[1]]:c;const d={version:this.wmsParameters.version,info_format:this.wmsParameters.info_format,layers:this.wmsParameters.layers,query_layers:this.wmsParameters.query_layers,styles:this.wmsParameters.styles,crs:this.wmsParameters.crs,...t};return this._getWMSUrl("GetFeatureInfo",d,i)}describeLayerURL(t,i){const o={version:this.wmsParameters.version,...t};return this._getWMSUrl("DescribeLayer",o,i)}getLegendGraphicURL(t,i){const o={version:this.wmsParameters.version,...t};return this._getWMSUrl("GetLegendGraphic",o,i)}_parseWMSUrl(t){const[i,o]=t.split("?"),c=o.split("&"),d={};for(const m of c){const[_,T]=m.split("=");d[_]=T}return{url:i,parameters:d}}_getWMSUrl(t,i,o){let c=this.url,d=!0;const m={service:"WMS",version:i.version,request:t,...i,...this.vendorParameters,...o},_=["transparent","time","elevation"];for(const[T,y]of Object.entries(m))(!_.includes(T)||y)&&(c+=d?"?":"&",d=!1,c+=this._getURLParameter(T,y,i));return encodeURI(c)}_getWMS130Parameters(t){const i={...t};return i.srs&&(i.crs=i.crs||i.srs,delete i.srs),i}_getURLParameter(t,i,o){switch(t){case"crs":o.version!=="1.3.0"?t="srs":this.substituteCRS84&&i==="EPSG:4326"&&(i="CRS:84");break;case"srs":o.version==="1.3.0"&&(t="crs");break;case"bbox":const c=this._flipBoundingBox(i,o);c&&(i=c);break;case"x":o.version==="1.3.0"&&(t="i");break;case"y":o.version==="1.3.0"&&(t="j");break}return t=t.toUpperCase(),Array.isArray(i)?`${t}=${i.join(",")}`:`${t}=${i?String(i):""}`}_flipBoundingBox(t,i){if(!Array.isArray(t)||t.length!==4)return null;const o=i.version==="1.3.0"&&this.flipCRS.includes(i.crs||"")&&!(this.substituteCRS84&&i.crs==="EPSG:4326"),c=t;return o?[c[1],c[0],c[3],c[2]]:c}async _fetchArrayBuffer(t){const i=await this.fetch(t),o=await i.arrayBuffer();return this._checkResponse(i,o),o}_checkResponse(t,i){var c;const o=t.headers["content-type"];if(!t.ok||Yr.mimeTypes.includes(o)){const d=nf(this.loadOptions,{wms:{throwOnError:!0}}),m=(c=Yr.parseSync)==null?void 0:c.call(Yr,i,d);throw new Error(m)}}_parseError(t){var o,c;const i=(c=Yr.parseSync)==null?void 0:c.call(Yr,t,(o=this.options.core)==null?void 0:o.loadOptions);return new Error(i)}}const pl=6378137*Math.PI;function ml(r){const e=Xa(r);return e[0]=(e[0]/256-1)*pl,e[1]=(e[1]/256-1)*pl,e}const gy={id:"imagery-layer",data:"",serviceType:"auto",srs:"auto",layers:{type:"array",compare:!0,value:[]},onMetadataLoad:{type:"function",value:()=>{}},onMetadataLoadError:{type:"function",value:console.error},onImageLoadStart:{type:"function",value:()=>{}},onImageLoad:{type:"function",value:()=>{}},onImageLoadError:{type:"function",compare:!1,value:(r,e)=>console.error(e,r)}};class Yh extends li{get isLoaded(){var e;return((e=this.state)==null?void 0:e.loadCounter)===0&&super.isLoaded}shouldUpdateState(){return!0}initializeState(){this.state._nextRequestId=0,this.state.lastRequestId=-1,this.state.loadCounter=0}updateState({changeFlags:e,props:t,oldProps:i}){const{viewport:o}=this.context;e.dataChanged||t.serviceType!==i.serviceType?(this.state.imageSource=this._createImageSource(t),this._loadMetadata(),this.debounce(()=>this.loadImage(o,"image source changed"),0)):mb(t.layers,i.layers,1)?e.viewportChanged&&this.debounce(()=>this.loadImage(o,"viewport changed")):this.debounce(()=>this.loadImage(o,"layers changed"),0)}finalizeState(){}renderLayers(){const{bounds:e,image:t,lastRequestParameters:i}=this.state;return t&&new eb({...this.getSubLayerProps({id:"bitmap"}),_imageCoordinateSystem:i.srs==="EPSG:4326"?Zr.LNGLAT:Zr.CARTESIAN,bounds:e,image:t})}async getFeatureInfoText(e,t){var o,c;const{lastRequestParameters:i}=this.state;return i?await((c=(o=this.state.imageSource).getFeatureInfoText)==null?void 0:c.call(o,{...i,query_layers:i.layers,x:e,y:t,info_format:"application/vnd.ogc.gml"})):""}_createImageSource(e){if(e.data instanceof eA)return e.data;if(typeof e.data=="string")return r2(e.data,[Xh],{core:{type:e.serviceType,loadOptions:e.loadOptions}});throw new Error("invalid image source in props.data")}async _loadMetadata(){var t,i;const{imageSource:e}=this.state;try{this.state.loadCounter++;const o=await e.getMetadata();this.state.imageSource===e&&((t=this.getCurrentLayer())==null||t.props.onMetadataLoad(o))}catch(o){(i=this.getCurrentLayer())==null||i.props.onMetadataLoadError(o)}finally{this.state.loadCounter--}}async loadImage(e,t){var w,M;const{layers:i,serviceType:o}=this.props;if(o==="wms"&&i.length===0)return;const c=e.getBounds(),{width:d,height:m}=e,_=this.getRequestId();let{srs:T}=this.props;T==="auto"&&(T=e.resolution?"EPSG:4326":"EPSG:3857");const y={width:d,height:m,boundingBox:[[c[0],c[1]],[c[2],c[3]]],layers:i,crs:T};if(T==="EPSG:3857"){const N=ml([c[0],c[1]]),O=ml([c[2],c[3]]);y.boundingBox=[N,O]}try{this.state.loadCounter++,this.props.onImageLoadStart(_);const N=await this.state.imageSource.getImage(y);this.state.lastRequestId<_&&((w=this.getCurrentLayer())==null||w.props.onImageLoad(_),this.setState({image:N,bounds:c,lastRequestParameters:y,lastRequestId:_}))}catch(N){this.raiseError(N,"Load image"),(M=this.getCurrentLayer())==null||M.props.onImageLoadError(_,N)}finally{this.state.loadCounter--}}getRequestId(){return this.state._nextRequestId++}debounce(e,t=500){clearTimeout(this.state._timeoutId),this.state._timeoutId=setTimeout(()=>e(),t)}}Yh.layerName="WMSLayer";Yh.defaultProps=gy;const by={getHeight:{type:"accessor",value:0},greatCircle:!0};class Jh extends tb{}Jh.layerName="GreatCircleLayer";Jh.defaultProps=by;function _y(r){throw new Error('Could not dynamically require "'+r+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var Us={exports:{}},Ty=Us.exports,gl;function vy(){return gl||(gl=1,(function(r){/**
 * @license long.js (c) 2013 Daniel Wirtz <dcode@dcode.io>
 * Released under the Apache License, Version 2.0
 * see: https://github.com/dcodeIO/long.js for details
 */(function(e,t){typeof _y=="function"&&r&&r.exports?r.exports=t():(e.dcodeIO=e.dcodeIO||{}).Long=t()})(Ty,function(){function e(Q,U,be){this.low=Q|0,this.high=U|0,this.unsigned=!!be}e.prototype.__isLong__,Object.defineProperty(e.prototype,"__isLong__",{value:!0,enumerable:!1,configurable:!1});function t(Q){return(Q&&Q.__isLong__)===!0}e.isLong=t;var i={},o={};function c(Q,U){var be,ve,Se;return U?(Q>>>=0,(Se=0<=Q&&Q<256)&&(ve=o[Q],ve)?ve:(be=m(Q,(Q|0)<0?-1:0,!0),Se&&(o[Q]=be),be)):(Q|=0,(Se=-128<=Q&&Q<128)&&(ve=i[Q],ve)?ve:(be=m(Q,Q<0?-1:0,!1),Se&&(i[Q]=be),be))}e.fromInt=c;function d(Q,U){if(isNaN(Q)||!isFinite(Q))return U?q:j;if(U){if(Q<0)return q;if(Q>=O)return he}else{if(Q<=-F)return ue;if(Q+1>=F)return se}return Q<0?d(-Q,U).neg():m(Q%N|0,Q/N|0,U)}e.fromNumber=d;function m(Q,U,be){return new e(Q,U,be)}e.fromBits=m;var _=Math.pow;function T(Q,U,be){if(Q.length===0)throw Error("empty string");if(Q==="NaN"||Q==="Infinity"||Q==="+Infinity"||Q==="-Infinity")return j;if(typeof U=="number"?(be=U,U=!1):U=!!U,be=be||10,be<2||36<be)throw RangeError("radix");var ve;if((ve=Q.indexOf("-"))>0)throw Error("interior hyphen");if(ve===0)return T(Q.substring(1),U,be).neg();for(var Se=d(_(be,8)),Ie=j,Le=0;Le<Q.length;Le+=8){var Be=Math.min(8,Q.length-Le),Ke=parseInt(Q.substring(Le,Le+Be),be);if(Be<8){var Ze=d(_(be,Be));Ie=Ie.mul(Ze).add(d(Ke))}else Ie=Ie.mul(Se),Ie=Ie.add(d(Ke))}return Ie.unsigned=U,Ie}e.fromString=T;function y(Q){return Q instanceof e?Q:typeof Q=="number"?d(Q):typeof Q=="string"?T(Q):m(Q.low,Q.high,Q.unsigned)}e.fromValue=y;var w=65536,M=1<<24,N=w*w,O=N*N,F=O/2,W=c(M),j=c(0);e.ZERO=j;var q=c(0,!0);e.UZERO=q;var J=c(1);e.ONE=J;var Z=c(1,!0);e.UONE=Z;var Y=c(-1);e.NEG_ONE=Y;var se=m(-1,2147483647,!1);e.MAX_VALUE=se;var he=m(-1,-1,!0);e.MAX_UNSIGNED_VALUE=he;var ue=m(0,-2147483648,!1);e.MIN_VALUE=ue;var $=e.prototype;return $.toInt=function(){return this.unsigned?this.low>>>0:this.low},$.toNumber=function(){return this.unsigned?(this.high>>>0)*N+(this.low>>>0):this.high*N+(this.low>>>0)},$.toString=function(U){if(U=U||10,U<2||36<U)throw RangeError("radix");if(this.isZero())return"0";if(this.isNegative())if(this.eq(ue)){var be=d(U),ve=this.div(be),Se=ve.mul(be).sub(this);return ve.toString(U)+Se.toInt().toString(U)}else return"-"+this.neg().toString(U);for(var Ie=d(_(U,6),this.unsigned),Le=this,Be="";;){var Ke=Le.div(Ie),Ze=Le.sub(Ke.mul(Ie)).toInt()>>>0,Ge=Ze.toString(U);if(Le=Ke,Le.isZero())return Ge+Be;for(;Ge.length<6;)Ge="0"+Ge;Be=""+Ge+Be}},$.getHighBits=function(){return this.high},$.getHighBitsUnsigned=function(){return this.high>>>0},$.getLowBits=function(){return this.low},$.getLowBitsUnsigned=function(){return this.low>>>0},$.getNumBitsAbs=function(){if(this.isNegative())return this.eq(ue)?64:this.neg().getNumBitsAbs();for(var U=this.high!=0?this.high:this.low,be=31;be>0&&(U&1<<be)==0;be--);return this.high!=0?be+33:be+1},$.isZero=function(){return this.high===0&&this.low===0},$.isNegative=function(){return!this.unsigned&&this.high<0},$.isPositive=function(){return this.unsigned||this.high>=0},$.isOdd=function(){return(this.low&1)===1},$.isEven=function(){return(this.low&1)===0},$.equals=function(U){return t(U)||(U=y(U)),this.unsigned!==U.unsigned&&this.high>>>31===1&&U.high>>>31===1?!1:this.high===U.high&&this.low===U.low},$.eq=$.equals,$.notEquals=function(U){return!this.eq(U)},$.neq=$.notEquals,$.lessThan=function(U){return this.comp(U)<0},$.lt=$.lessThan,$.lessThanOrEqual=function(U){return this.comp(U)<=0},$.lte=$.lessThanOrEqual,$.greaterThan=function(U){return this.comp(U)>0},$.gt=$.greaterThan,$.greaterThanOrEqual=function(U){return this.comp(U)>=0},$.gte=$.greaterThanOrEqual,$.compare=function(U){if(t(U)||(U=y(U)),this.eq(U))return 0;var be=this.isNegative(),ve=U.isNegative();return be&&!ve?-1:!be&&ve?1:this.unsigned?U.high>>>0>this.high>>>0||U.high===this.high&&U.low>>>0>this.low>>>0?-1:1:this.sub(U).isNegative()?-1:1},$.comp=$.compare,$.negate=function(){return!this.unsigned&&this.eq(ue)?ue:this.not().add(J)},$.neg=$.negate,$.add=function(U){t(U)||(U=y(U));var be=this.high>>>16,ve=this.high&65535,Se=this.low>>>16,Ie=this.low&65535,Le=U.high>>>16,Be=U.high&65535,Ke=U.low>>>16,Ze=U.low&65535,Ge=0,ze=0,st=0,jt=0;return jt+=Ie+Ze,st+=jt>>>16,jt&=65535,st+=Se+Ke,ze+=st>>>16,st&=65535,ze+=ve+Be,Ge+=ze>>>16,ze&=65535,Ge+=be+Le,Ge&=65535,m(st<<16|jt,Ge<<16|ze,this.unsigned)},$.subtract=function(U){return t(U)||(U=y(U)),this.add(U.neg())},$.sub=$.subtract,$.multiply=function(U){if(this.isZero()||(t(U)||(U=y(U)),U.isZero()))return j;if(this.eq(ue))return U.isOdd()?ue:j;if(U.eq(ue))return this.isOdd()?ue:j;if(this.isNegative())return U.isNegative()?this.neg().mul(U.neg()):this.neg().mul(U).neg();if(U.isNegative())return this.mul(U.neg()).neg();if(this.lt(W)&&U.lt(W))return d(this.toNumber()*U.toNumber(),this.unsigned);var be=this.high>>>16,ve=this.high&65535,Se=this.low>>>16,Ie=this.low&65535,Le=U.high>>>16,Be=U.high&65535,Ke=U.low>>>16,Ze=U.low&65535,Ge=0,ze=0,st=0,jt=0;return jt+=Ie*Ze,st+=jt>>>16,jt&=65535,st+=Se*Ze,ze+=st>>>16,st&=65535,st+=Ie*Ke,ze+=st>>>16,st&=65535,ze+=ve*Ze,Ge+=ze>>>16,ze&=65535,ze+=Se*Ke,Ge+=ze>>>16,ze&=65535,ze+=Ie*Be,Ge+=ze>>>16,ze&=65535,Ge+=be*Ze+ve*Ke+Se*Be+Ie*Le,Ge&=65535,m(st<<16|jt,Ge<<16|ze,this.unsigned)},$.mul=$.multiply,$.divide=function(U){if(t(U)||(U=y(U)),U.isZero())throw Error("division by zero");if(this.isZero())return this.unsigned?q:j;var be,ve,Se;if(this.unsigned){if(U.unsigned||(U=U.toUnsigned()),U.gt(this))return q;if(U.gt(this.shru(1)))return Z;Se=q}else{if(this.eq(ue)){if(U.eq(J)||U.eq(Y))return ue;if(U.eq(ue))return J;var Ie=this.shr(1);return be=Ie.div(U).shl(1),be.eq(j)?U.isNegative()?J:Y:(ve=this.sub(U.mul(be)),Se=be.add(ve.div(U)),Se)}else if(U.eq(ue))return this.unsigned?q:j;if(this.isNegative())return U.isNegative()?this.neg().div(U.neg()):this.neg().div(U).neg();if(U.isNegative())return this.div(U.neg()).neg();Se=j}for(ve=this;ve.gte(U);){be=Math.max(1,Math.floor(ve.toNumber()/U.toNumber()));for(var Le=Math.ceil(Math.log(be)/Math.LN2),Be=Le<=48?1:_(2,Le-48),Ke=d(be),Ze=Ke.mul(U);Ze.isNegative()||Ze.gt(ve);)be-=Be,Ke=d(be,this.unsigned),Ze=Ke.mul(U);Ke.isZero()&&(Ke=J),Se=Se.add(Ke),ve=ve.sub(Ze)}return Se},$.div=$.divide,$.modulo=function(U){return t(U)||(U=y(U)),this.sub(this.div(U).mul(U))},$.mod=$.modulo,$.not=function(){return m(~this.low,~this.high,this.unsigned)},$.and=function(U){return t(U)||(U=y(U)),m(this.low&U.low,this.high&U.high,this.unsigned)},$.or=function(U){return t(U)||(U=y(U)),m(this.low|U.low,this.high|U.high,this.unsigned)},$.xor=function(U){return t(U)||(U=y(U)),m(this.low^U.low,this.high^U.high,this.unsigned)},$.shiftLeft=function(U){return t(U)&&(U=U.toInt()),(U&=63)===0?this:U<32?m(this.low<<U,this.high<<U|this.low>>>32-U,this.unsigned):m(0,this.low<<U-32,this.unsigned)},$.shl=$.shiftLeft,$.shiftRight=function(U){return t(U)&&(U=U.toInt()),(U&=63)===0?this:U<32?m(this.low>>>U|this.high<<32-U,this.high>>U,this.unsigned):m(this.high>>U-32,this.high>=0?0:-1,this.unsigned)},$.shr=$.shiftRight,$.shiftRightUnsigned=function(U){if(t(U)&&(U=U.toInt()),U&=63,U===0)return this;var be=this.high;if(U<32){var ve=this.low;return m(ve>>>U|be<<32-U,be>>>U,this.unsigned)}else return U===32?m(be,0,this.unsigned):m(be>>>U-32,0,this.unsigned)},$.shru=$.shiftRightUnsigned,$.toSigned=function(){return this.unsigned?m(this.low,this.high,!1):this},$.toUnsigned=function(){return this.unsigned?this:m(this.low,this.high,!0)},$.toBytes=function(Q){return Q?this.toBytesLE():this.toBytesBE()},$.toBytesLE=function(){var Q=this.high,U=this.low;return[U&255,U>>>8&255,U>>>16&255,U>>>24&255,Q&255,Q>>>8&255,Q>>>16&255,Q>>>24&255]},$.toBytesBE=function(){var Q=this.high,U=this.low;return[Q>>>24&255,Q>>>16&255,Q>>>8&255,Q&255,U>>>24&255,U>>>16&255,U>>>8&255,U&255]},e})})(Us)),Us.exports}var yy=vy();const Vs=Pb(yy),Sy=3,wy=30,Ey=2*wy+1,bl=180/Math.PI;function xy(r,e,t){const i=1<<e;return[(r[0]+t[0])/i,(r[1]+t[1])/i]}function _l(r){return r>=.5?1/3*(4*r*r-1):1/3*(1-4*(1-r)*(1-r))}function Cy(r){return[_l(r[0]),_l(r[1])]}function My(r,[e,t]){switch(r){case 0:return[1,e,t];case 1:return[-e,1,t];case 2:return[-e,-t,1];case 3:return[-1,-t,-e];case 4:return[t,-1,-e];case 5:return[t,e,-1];default:throw new Error("Invalid face")}}function Iy([r,e,t]){const i=Math.atan2(t,Math.sqrt(r*r+e*e));return[Math.atan2(e,r)*bl,i*bl]}function Ry(r){let e=Vs.fromString(r,!0,10).toString(2);for(;e.length<Sy+Ey;)e="0"+e;const t=e.lastIndexOf("1"),i=e.substring(0,3),o=e.substring(3,t),c=o.length/2,d=Vs.fromString(i,!0,2).toString(10);let m=Vs.fromString(o,!0,2).toString(4);for(;m.length<c;)m="0"+m;return`${d}/${m}`}function Ny(r,e,t,i){if(i===0){t===1&&(e[0]=r-1-e[0],e[1]=r-1-e[1]);const o=e[0];e[0]=e[1],e[1]=o}}function Py(r){const e=r.split("/"),t=parseInt(e[0],10),i=e[1],o=i.length,c=[0,0];let d;for(let m=o-1;m>=0;m--){d=o-m;const _=i[m];let T=0,y=0;_==="1"?y=1:_==="2"?(T=1,y=1):_==="3"&&(T=1);const w=Math.pow(2,d-1);Ny(w,c,T,y),c[0]+=w*T,c[1]+=w*y}if(t%2===1){const m=c[0];c[0]=c[1],c[1]=m}return{face:t,ij:c,level:d}}function Ly(r){const e=r.padEnd(16,"0");return Vs.fromString(e,16)}const ky=100;function Oy({face:r,ij:e,level:t}){const i=[[0,0],[0,1],[1,1],[1,0],[0,0]],o=Math.max(1,Math.ceil(ky*Math.pow(2,-t))),c=new Float64Array(4*o*2+2);let d=0,m=0;for(let _=0;_<4;_++){const T=i[_].slice(0),y=i[_+1],w=(y[0]-T[0])/o,M=(y[1]-T[1])/o;for(let N=0;N<o;N++){T[0]+=w,T[1]+=M;const O=xy(e,t,T),F=Cy(O),W=My(r,F),j=Iy(W);Math.abs(j[1])>89.999&&(j[0]=m);const q=j[0]-m;j[0]+=q>180?-360:q<-180?360:0,c[d++]=j[0],c[d++]=j[1],m=j[0]}}return c[d++]=c[0],c[d++]=c[1],c}function Fy(r){if(typeof r=="string"){if(r.indexOf("/")>0)return r;r=Ly(r)}return Ry(r.toString())}function By(r){const e=Fy(r),t=Py(e);return Oy(t)}const Dy={getS2Token:{type:"accessor",value:r=>r.token}};class Zh extends Cn{indexToBounds(){const{data:e,getS2Token:t}=this.props;return{data:e,_normalize:!1,positionFormat:"XY",getPolygon:(i,o)=>By(t(i,o))}}}Zh.layerName="S2Layer";Zh.defaultProps=Dy;const ya=512;function Uy(r,e){let t=0,i=0,o=1<<r.length;const c=o/ya;for(let d=0;d<r.length;d++){o>>=1;const m=parseInt(r[d]);m%2&&(t|=o),m>1&&(i|=o)}return[[t/c,ya-i/c],[(t+e)/c,ya-(i+e)/c]]}function Vy(r,e=1){const[t,i]=Uy(r,e),[o,c]=bc(t),[d,m]=bc(i);return[d,c,d,m,o,m,o,c,d,c]}const jy={getQuadkey:{type:"accessor",value:r=>r.quadkey}};class ed extends Cn{indexToBounds(){const{data:e,extruded:t,getQuadkey:i}=this.props,o=t?.99:1;return{data:e,_normalize:!1,positionFormat:"XY",getPolygon:(c,d)=>Vy(i(c,d),o),updateTriggers:{getPolygon:o}}}}ed.layerName="QuadkeyLayer";ed.defaultProps=jy;class Gy{constructor(e){this.index=e,this.isVisible=!1,this.isSelected=!1,this.parent=null,this.children=[],this.content=null,this._loader=void 0,this._abortController=null,this._loaderId=0,this._isLoaded=!1,this._isCancelled=!1,this._needsReload=!1}get bbox(){return this._bbox}set bbox(e){this._bbox||(this._bbox=e,"west"in e?this.boundingBox=[[e.west,e.south],[e.east,e.north]]:this.boundingBox=[[e.left,e.top],[e.right,e.bottom]])}get data(){return this.isLoading&&this._loader?this._loader.then(()=>this.data):this.content}get isLoaded(){return this._isLoaded&&!this._needsReload}get isLoading(){return!!this._loader&&!this._isCancelled}get needsReload(){return this._needsReload||this._isCancelled}get byteLength(){const e=this.content?this.content.byteLength:0;return Number.isFinite(e)||console.error("byteLength not defined in tile data"),e}async _loadData({getData:e,getRequestPriority:t,requestScheduler:i,onLoad:o,onError:c}){const{index:d,id:m,bbox:_,userData:T,zoom:y}=this,w=this._loaderId;this._abortController=new AbortController;const{signal:M}=this._abortController,N=await i.scheduleRequest(this,t);if(!N){this._isCancelled=!0;return}if(this._isCancelled){N.done();return}let O=null,F;try{O=await e({index:d,id:m,bbox:_,userData:T,zoom:y,signal:M})}catch(W){F=W||!0}finally{N.done()}if(w===this._loaderId){if(this._loader=void 0,this.content=O,this._isCancelled&&!O){this._isLoaded=!1;return}this._isLoaded=!0,this._isCancelled=!1,F?c(F,this):o(this)}}loadData(e){return this._isLoaded=!1,this._isCancelled=!1,this._needsReload=!1,this._loaderId++,this._loader=this._loadData(e),this._loader}setNeedsReload(){this.isLoading&&(this.abort(),this._loader=void 0),this._needsReload=!0}abort(){var e;this.isLoaded||(this._isCancelled=!0,(e=this._abortController)==null||e.abort())}}const Pt={OUTSIDE:-1,INTERSECTING:0,INSIDE:1},Tl=new X,zy=new X;class e0{constructor(e=[0,0,0],t=[0,0,0],i){i=i||Tl.copy(e).add(t).scale(.5),this.center=new X(i),this.halfDiagonal=new X(t).subtract(this.center),this.minimum=new X(e),this.maximum=new X(t)}clone(){return new e0(this.minimum,this.maximum,this.center)}equals(e){return this===e||!!e&&this.minimum.equals(e.minimum)&&this.maximum.equals(e.maximum)}transform(e){return this.center.transformAsPoint(e),this.halfDiagonal.transform(e),this.minimum.transform(e),this.maximum.transform(e),this}intersectPlane(e){const{halfDiagonal:t}=this,i=zy.from(e.normal),o=t.x*Math.abs(i.x)+t.y*Math.abs(i.y)+t.z*Math.abs(i.z),c=this.center.dot(i)+e.distance;return c-o>0?Pt.INSIDE:c+o<0?Pt.OUTSIDE:Pt.INTERSECTING}distanceTo(e){return Math.sqrt(this.distanceSquaredTo(e))}distanceSquaredTo(e){const t=Tl.from(e).subtract(this.center),{halfDiagonal:i}=this;let o=0,c;return c=Math.abs(t.x)-i.x,c>0&&(o+=c*c),c=Math.abs(t.y)-i.y,c>0&&(o+=c*c),c=Math.abs(t.z)-i.z,c>0&&(o+=c*c),o}}const Pi=new X,vl=new X;class $i{constructor(e=[0,0,0],t=0){this.radius=-0,this.center=new X,this.fromCenterRadius(e,t)}fromCenterRadius(e,t){return this.center.from(e),this.radius=t,this}fromCornerPoints(e,t){return t=Pi.from(t),this.center=new X().from(e).add(t).scale(.5),this.radius=this.center.distance(t),this}equals(e){return this===e||!!e&&this.center.equals(e.center)&&this.radius===e.radius}clone(){return new $i(this.center,this.radius)}union(e){const t=this.center,i=this.radius,o=e.center,c=e.radius,d=Pi.copy(o).subtract(t),m=d.magnitude();if(i>=m+c)return this.clone();if(c>=m+i)return e.clone();const _=(i+m+c)*.5;return vl.copy(d).scale((-i+_)/m).add(t),this.center.copy(vl),this.radius=_,this}expand(e){const i=Pi.from(e).subtract(this.center).magnitude();return i>this.radius&&(this.radius=i),this}transform(e){this.center.transform(e);const t=gb(Pi,e);return this.radius=Math.max(t[0],Math.max(t[1],t[2]))*this.radius,this}distanceSquaredTo(e){const t=this.distanceTo(e);return t*t}distanceTo(e){const i=Pi.from(e).subtract(this.center);return Math.max(0,i.len()-this.radius)}intersectPlane(e){const t=this.center,i=this.radius,c=e.normal.dot(t)+e.distance;return c<-i?Pt.OUTSIDE:c<i?Pt.INTERSECTING:Pt.INSIDE}}const Hy=new X,qy=new X,Es=new X,xs=new X,Cs=new X,Qy=new X,Wy=new X,kr={COLUMN0ROW0:0,COLUMN0ROW1:1,COLUMN0ROW2:2,COLUMN1ROW0:3,COLUMN1ROW1:4,COLUMN1ROW2:5,COLUMN2ROW0:6,COLUMN2ROW1:7,COLUMN2ROW2:8};class Xi{constructor(e=[0,0,0],t=[0,0,0,0,0,0,0,0,0]){this.center=new X().from(e),this.halfAxes=new rt(t)}get halfSize(){const e=this.halfAxes.getColumn(0),t=this.halfAxes.getColumn(1),i=this.halfAxes.getColumn(2);return[new X(e).len(),new X(t).len(),new X(i).len()]}get quaternion(){const e=this.halfAxes.getColumn(0),t=this.halfAxes.getColumn(1),i=this.halfAxes.getColumn(2),o=new X(e).normalize(),c=new X(t).normalize(),d=new X(i).normalize();return new Qs().fromMatrix3(new rt([...o,...c,...d]))}fromCenterHalfSizeQuaternion(e,t,i){const o=new Qs(i),c=new rt().fromQuaternion(o);return c[0]=c[0]*t[0],c[1]=c[1]*t[0],c[2]=c[2]*t[0],c[3]=c[3]*t[1],c[4]=c[4]*t[1],c[5]=c[5]*t[1],c[6]=c[6]*t[2],c[7]=c[7]*t[2],c[8]=c[8]*t[2],this.center=new X().from(e),this.halfAxes=c,this}clone(){return new Xi(this.center,this.halfAxes)}equals(e){return this===e||!!e&&this.center.equals(e.center)&&this.halfAxes.equals(e.halfAxes)}getBoundingSphere(e=new $i){const t=this.halfAxes,i=t.getColumn(0,Es),o=t.getColumn(1,xs),c=t.getColumn(2,Cs),d=Hy.copy(i).add(o).add(c);return e.center.copy(this.center),e.radius=d.magnitude(),e}intersectPlane(e){const t=this.center,i=e.normal,o=this.halfAxes,c=i.x,d=i.y,m=i.z,_=Math.abs(c*o[kr.COLUMN0ROW0]+d*o[kr.COLUMN0ROW1]+m*o[kr.COLUMN0ROW2])+Math.abs(c*o[kr.COLUMN1ROW0]+d*o[kr.COLUMN1ROW1]+m*o[kr.COLUMN1ROW2])+Math.abs(c*o[kr.COLUMN2ROW0]+d*o[kr.COLUMN2ROW1]+m*o[kr.COLUMN2ROW2]),T=i.dot(t)+e.distance;return T<=-_?Pt.OUTSIDE:T>=_?Pt.INSIDE:Pt.INTERSECTING}distanceTo(e){return Math.sqrt(this.distanceSquaredTo(e))}distanceSquaredTo(e){const t=qy.from(e).subtract(this.center),i=this.halfAxes,o=i.getColumn(0,Es),c=i.getColumn(1,xs),d=i.getColumn(2,Cs),m=o.magnitude(),_=c.magnitude(),T=d.magnitude();o.normalize(),c.normalize(),d.normalize();let y=0,w;return w=Math.abs(t.dot(o))-m,w>0&&(y+=w*w),w=Math.abs(t.dot(c))-_,w>0&&(y+=w*w),w=Math.abs(t.dot(d))-T,w>0&&(y+=w*w),y}computePlaneDistances(e,t,i=[-0,-0]){let o=Number.POSITIVE_INFINITY,c=Number.NEGATIVE_INFINITY;const d=this.center,m=this.halfAxes,_=m.getColumn(0,Es),T=m.getColumn(1,xs),y=m.getColumn(2,Cs),w=Qy.copy(_).add(T).add(y).add(d),M=Wy.copy(w).subtract(e);let N=t.dot(M);return o=Math.min(N,o),c=Math.max(N,c),w.copy(d).add(_).add(T).subtract(y),M.copy(w).subtract(e),N=t.dot(M),o=Math.min(N,o),c=Math.max(N,c),w.copy(d).add(_).subtract(T).add(y),M.copy(w).subtract(e),N=t.dot(M),o=Math.min(N,o),c=Math.max(N,c),w.copy(d).add(_).subtract(T).subtract(y),M.copy(w).subtract(e),N=t.dot(M),o=Math.min(N,o),c=Math.max(N,c),d.copy(w).subtract(_).add(T).add(y),M.copy(w).subtract(e),N=t.dot(M),o=Math.min(N,o),c=Math.max(N,c),d.copy(w).subtract(_).add(T).subtract(y),M.copy(w).subtract(e),N=t.dot(M),o=Math.min(N,o),c=Math.max(N,c),d.copy(w).subtract(_).subtract(T).add(y),M.copy(w).subtract(e),N=t.dot(M),o=Math.min(N,o),c=Math.max(N,c),d.copy(w).subtract(_).subtract(T).subtract(y),M.copy(w).subtract(e),N=t.dot(M),o=Math.min(N,o),c=Math.max(N,c),i[0]=o,i[1]=c,i}transform(e){this.center.transformAsPoint(e);const t=this.halfAxes.getColumn(0,Es);t.transformAsPoint(e);const i=this.halfAxes.getColumn(1,xs);i.transformAsPoint(e);const o=this.halfAxes.getColumn(2,Cs);return o.transformAsPoint(e),this.halfAxes=new rt([...t,...i,...o]),this}getTransform(){throw new Error("not implemented")}}const yl=new X,Sl=new X;class _r{constructor(e=[0,0,1],t=0){this.normal=new X,this.distance=-0,this.fromNormalDistance(e,t)}fromNormalDistance(e,t){return Or(Number.isFinite(t)),this.normal.from(e).normalize(),this.distance=t,this}fromPointNormal(e,t){e=yl.from(e),this.normal.from(t).normalize();const i=-this.normal.dot(e);return this.distance=i,this}fromCoefficients(e,t,i,o){return this.normal.set(e,t,i),Or(bn(this.normal.len(),1)),this.distance=o,this}clone(){return new _r(this.normal,this.distance)}equals(e){return bn(this.distance,e.distance)&&bn(this.normal,e.normal)}getPointDistance(e){return this.normal.dot(e)+this.distance}transform(e){const t=Sl.copy(this.normal).transformAsVector(e).normalize(),i=this.normal.scale(-this.distance).transform(e);return this.fromPointNormal(i,t)}projectPointOntoPlane(e,t=[0,0,0]){const i=yl.from(e),o=this.getPointDistance(i),c=Sl.copy(this.normal).scale(o);return i.subtract(c).to(t)}}const wl=[new X([1,0,0]),new X([0,1,0]),new X([0,0,1])],El=new X,Ky=new X;class ir{constructor(e=[]){this.planes=e}fromBoundingSphere(e){this.planes.length=2*wl.length;const t=e.center,i=e.radius;let o=0;for(const c of wl){let d=this.planes[o],m=this.planes[o+1];d||(d=this.planes[o]=new _r),m||(m=this.planes[o+1]=new _r);const _=El.copy(c).scale(-i).add(t);d.fromPointNormal(_,c);const T=El.copy(c).scale(i).add(t),y=Ky.copy(c).negate();m.fromPointNormal(T,y),o+=2}return this}computeVisibility(e){let t=Pt.INSIDE;for(const i of this.planes)switch(e.intersectPlane(i)){case Pt.OUTSIDE:return Pt.OUTSIDE;case Pt.INTERSECTING:t=Pt.INTERSECTING;break}return t}computeVisibilityWithPlaneMask(e,t){if(Or(Number.isFinite(t),"parentPlaneMask is required."),t===ir.MASK_OUTSIDE||t===ir.MASK_INSIDE)return t;let i=ir.MASK_INSIDE;const o=this.planes;for(let c=0;c<this.planes.length;++c){const d=c<31?1<<c:0;if(c<31&&(t&d)===0)continue;const m=o[c],_=e.intersectPlane(m);if(_===Pt.OUTSIDE)return ir.MASK_OUTSIDE;_===Pt.INTERSECTING&&(i|=d)}return i}}ir.MASK_OUTSIDE=4294967295;ir.MASK_INSIDE=0;ir.MASK_INDETERMINATE=2147483647;new X;new X;new X;new X;new X;new X;new X;new X;new X;new X;new X;new X;new X;new X;new X;new X;new X;const Er=new rt,$y=new rt,Xy=new rt,Ms=new rt,xl=new rt;function Yy(r,e={}){const t=_2,i=10;let o=0,c=0;const d=$y,m=Xy;d.identity(),m.copy(r);const _=t*Jy(m);for(;c<i&&Zy(m)>_;)e3(m,Ms),xl.copy(Ms).transpose(),m.multiplyRight(Ms),m.multiplyLeft(xl),d.multiplyRight(Ms),++o>2&&(++c,o=0);return e.unitary=d.toTarget(e.unitary),e.diagonal=m.toTarget(e.diagonal),e}function Jy(r){let e=0;for(let t=0;t<9;++t){const i=r[t];e+=i*i}return Math.sqrt(e)}const vA=[1,0,0],yA=[2,2,1];function Zy(r){let e=0;for(let t=0;t<3;++t){const i=r[Er.getElementIndex(yA[t],vA[t])];e+=2*i*i}return Math.sqrt(e)}function e3(r,e){const t=vf;let i=0,o=1;for(let T=0;T<3;++T){const y=Math.abs(r[Er.getElementIndex(yA[T],vA[T])]);y>i&&(o=T,i=y)}const c=vA[o],d=yA[o];let m=1,_=0;if(Math.abs(r[Er.getElementIndex(d,c)])>t){const T=r[Er.getElementIndex(d,d)],y=r[Er.getElementIndex(c,c)],w=r[Er.getElementIndex(d,c)],M=(T-y)/2/w;let N;M<0?N=-1/(-M+Math.sqrt(1+M*M)):N=1/(M+Math.sqrt(1+M*M)),m=1/Math.sqrt(1+N*N),_=N*m}return rt.IDENTITY.to(e),e[Er.getElementIndex(c,c)]=e[Er.getElementIndex(d,d)]=m,e[Er.getElementIndex(d,c)]=_,e[Er.getElementIndex(c,d)]=-_,e}const $r=new X,t3=new X,r3=new X,n3=new X,i3=new X,s3=new rt,o3={diagonal:new rt,unitary:new rt};function td(r,e=new Xi){if(!r||r.length===0)return e.halfAxes=new rt([0,0,0,0,0,0,0,0,0]),e.center=new X,e;const t=r.length,i=new X(0,0,0);for(const $ of r)i.add($);const o=1/t;i.multiplyByScalar(o);let c=0,d=0,m=0,_=0,T=0,y=0;for(const $ of r){const Q=$r.copy($).subtract(i);c+=Q.x*Q.x,d+=Q.x*Q.y,m+=Q.x*Q.z,_+=Q.y*Q.y,T+=Q.y*Q.z,y+=Q.z*Q.z}c*=o,d*=o,m*=o,_*=o,T*=o,y*=o;const w=s3;w[0]=c,w[1]=d,w[2]=m,w[3]=d,w[4]=_,w[5]=T,w[6]=m,w[7]=T,w[8]=y;const{unitary:M}=Yy(w,o3),N=e.halfAxes.copy(M);let O=N.getColumn(0,r3),F=N.getColumn(1,n3),W=N.getColumn(2,i3),j=-Number.MAX_VALUE,q=-Number.MAX_VALUE,J=-Number.MAX_VALUE,Z=Number.MAX_VALUE,Y=Number.MAX_VALUE,se=Number.MAX_VALUE;for(const $ of r)$r.copy($),j=Math.max($r.dot(O),j),q=Math.max($r.dot(F),q),J=Math.max($r.dot(W),J),Z=Math.min($r.dot(O),Z),Y=Math.min($r.dot(F),Y),se=Math.min($r.dot(W),se);O=O.multiplyByScalar(.5*(Z+j)),F=F.multiplyByScalar(.5*(Y+q)),W=W.multiplyByScalar(.5*(se+J)),e.center.copy(O).add(F).add(W);const he=t3.set(j-Z,q-Y,J-se).multiplyByScalar(.5),ue=new rt([he[0],0,0,0,he[1],0,0,0,he[2]]);return e.halfAxes.multiplyRight(ue),e}const Kn=512,Cl=3,rd=[[.5,.5],[0,0],[0,1],[1,0],[1,1]],nd=rd.concat([[0,.5],[.5,0],[1,.5],[.5,1]]),a3=nd.concat([[.25,.5],[.75,.5]]);class $n{constructor(e,t,i){this.x=e,this.y=t,this.z=i}get children(){if(!this._children){const e=this.x*2,t=this.y*2,i=this.z+1;this._children=[new $n(e,t,i),new $n(e,t+1,i),new $n(e+1,t,i),new $n(e+1,t+1,i)]}return this._children}update(e){const{viewport:t,cullingVolume:i,elevationBounds:o,minZ:c,maxZ:d,bounds:m,offset:_,project:T}=e,y=this.getBoundingVolume(o,_,T);if(m&&!this.insideBounds(m)||i.computeVisibility(y)<0||T&&this.beyondHorizon(t.cameraPosition,T,o[1]))return!1;if(!this.childVisible){let{z:M}=this;if(M<d&&M>=c){const N=y.distanceTo(t.cameraPosition)*t.scale/t.height;M+=Math.floor(Math.log2(N))}if(M>=d)return this.selected=!0,!0}this.selected=!1,this.childVisible=!0;for(const M of this.children)M.update(e);return!0}getSelected(e=[]){if(this.selected&&e.push(this),this._children)for(const t of this._children)t.getSelected(e);return e}beyondHorizon(e,t,i){const o=e[0],c=e[1],d=e[2],m=Math.sqrt(o*o+c*c+d*d),_=Math.atan2(o,-c)*180/Math.PI,T=Math.asin(d/m)*180/Math.PI,[y,w]=Vi(this.x,this.y,this.z),[M,N]=Vi(this.x+1,this.y+1,this.z),O=(y+M)/2,F=O+((_-O+540)%360-180),W=Math.max(y,Math.min(F,M)),j=Math.max(N,Math.min(T,w)),q=t([W,j,i]),J=q[0]*o+q[1]*c+q[2]*d,Z=q[0]*q[0]+q[1]*q[1]+q[2]*q[2];return J<=Z}insideBounds([e,t,i,o]){const c=Math.pow(2,this.z),d=Kn/c;return this.x*d<i&&this.y*d<o&&(this.x+1)*d>e&&(this.y+1)*d>t}getBoundingVolume(e,t,i){if(i){const _=this.z<1?a3:this.z<2?nd:rd,T=[];for(const y of _){const w=Vi(this.x+y[0],this.y+y[1],this.z);w[2]=e[0],T.push(i(w)),e[0]!==e[1]&&(w[2]=e[1],T.push(i(w)))}return td(T)}const o=Math.pow(2,this.z),c=Kn/o,d=this.x*c+t*Kn,m=Kn-(this.y+1)*c;return new e0([d,m,e[0]],[d+c,m+c,e[1]])}}function A3(r,e,t,i){const o=r instanceof Ja?r.projectPosition:null,c=Object.values(r.getFrustumPlanes()).map(({normal:N,distance:O})=>new _r(N.clone().negate(),O)),d=new ir(c),m=r.distanceScales.unitsPerMeter[2],_=t&&t[0]*m||0,T=t&&t[1]*m||0,y=r instanceof _c&&r.pitch<=60?e:0;if(i){const[N,O,F,W]=i,j=Xa([N,W]),q=Xa([F,O]);i=[j[0],Kn-j[1],q[0],Kn-q[1]]}const w=new $n(0,0,0),M={viewport:r,project:o,cullingVolume:d,elevationBounds:[_,T],minZ:y,maxZ:e,bounds:i,offset:0};if(w.update(M),r instanceof _c&&r.subViewports&&r.subViewports.length>1){for(M.offset=-1;w.update(M)&&!(--M.offset<-Cl););for(M.offset=1;w.update(M)&&!(++M.offset>Cl););}return w.getSelected()}const Ur=512,c3=[-1/0,-1/0,1/0,1/0],ro={type:"object",value:null,validate:(r,e)=>e.optional&&r===null||typeof r=="string"||Array.isArray(r)&&r.every(t=>typeof t=="string"),equal:(r,e)=>{if(r===e)return!0;if(!Array.isArray(r)||!Array.isArray(e))return!1;const t=r.length;if(t!==e.length)return!1;for(let i=0;i<t;i++)if(r[i]!==e[i])return!1;return!0}};function t0(r,e){const t=[e.transformAsPoint([r[0],r[1]]),e.transformAsPoint([r[2],r[1]]),e.transformAsPoint([r[0],r[3]]),e.transformAsPoint([r[2],r[3]])];return[Math.min(...t.map(o=>o[0])),Math.min(...t.map(o=>o[1])),Math.max(...t.map(o=>o[0])),Math.max(...t.map(o=>o[1]))]}function l3(r){return Math.abs(r.split("").reduce((e,t)=>(e<<5)-e+t.charCodeAt(0)|0,0))}function no(r,e){if(!r||!r.length)return null;const{index:t,id:i}=e;if(Array.isArray(r)){const c=l3(i)%r.length;r=r[c]}let o=r;for(const c of Object.keys(t)){const d=new RegExp(`{${c}}`,"g");o=o.replace(d,String(t[c]))}return Number.isInteger(t.y)&&Number.isInteger(t.z)&&(o=o.replace(/\{-y\}/g,String(Math.pow(2,t.z)-t.y-1))),o}function u3(r,e,t){let i;return i=r.getBounds(),r.isGeospatial?[Math.max(i[0],t[0]),Math.max(i[1],t[1]),Math.min(i[2],t[2]),Math.min(i[3],t[3])]:[Math.max(Math.min(i[0],t[2]),t[0]),Math.max(Math.min(i[1],t[3]),t[1]),Math.min(Math.max(i[2],t[0]),t[2]),Math.min(Math.max(i[3],t[1]),t[3])]}function f3({viewport:r,z:e,cullRect:t}){return(r.subViewports||[r]).map(o=>SA(o,e||0,t))}function SA(r,e,t){if(!Array.isArray(e)){const c=t.x-r.x,d=t.y-r.y,{width:m,height:_}=t,T={targetZ:e},y=r.unproject([c,d],T),w=r.unproject([c+m,d],T),M=r.unproject([c,d+_],T),N=r.unproject([c+m,d+_],T);return[Math.min(y[0],w[0],M[0],N[0]),Math.min(y[1],w[1],M[1],N[1]),Math.max(y[0],w[0],M[0],N[0]),Math.max(y[1],w[1],M[1],N[1])]}const i=SA(r,e[0],t),o=SA(r,e[1],t);return[Math.min(i[0],o[0]),Math.min(i[1],o[1]),Math.max(i[2],o[2]),Math.max(i[3],o[3])]}function h3(r,e,t){return t?t0(r,t).map(o=>o*e/Ur):r.map(i=>i*e/Ur)}function r0(r,e){return Math.pow(2,r)*Ur/e}function Vi(r,e,t){const i=r0(t,Ur),o=r/i*360-180,c=Math.PI-2*Math.PI*e/i,d=180/Math.PI*Math.atan(.5*(Math.exp(c)-Math.exp(-c)));return[o,d]}function Ml(r,e,t,i){const o=r0(t,i);return[r/o*Ur,e/o*Ur]}function d3(r,e,t,i,o=Ur){if(r.isGeospatial){const[T,y]=Vi(e,t,i),[w,M]=Vi(e+1,t+1,i);return{west:T,north:y,east:w,south:M}}const[c,d]=Ml(e,t,i,o),[m,_]=Ml(e+1,t+1,i,o);return{left:c,top:d,right:m,bottom:_}}function p3(r,e,t,i,o){const c=u3(r,null,i),d=r0(e,t),[m,_,T,y]=h3(c,d,o),w=[];for(let M=Math.floor(m);M<T;M++)for(let N=Math.floor(_);N<y;N++)w.push({x:M,y:N,z:e});return w}function m3({viewport:r,maxZoom:e,minZoom:t,zRange:i,extent:o,tileSize:c=Ur,modelMatrix:d,modelMatrixInverse:m,zoomOffset:_=0,visibleMinZoom:T,visibleMaxZoom:y}){let w=r.isGeospatial?Math.round(r.zoom+Math.log2(Ur/c)+_):Math.ceil(r.zoom+_);if(typeof t=="number"&&Number.isFinite(t)&&w<t){if(!o)return[];w=t}if(typeof e=="number"&&Number.isFinite(e)&&w>e&&(w=e),T!=null&&r.zoom<T)return[];if(y!=null&&r.zoom>y)return[];let M=o;return d&&m&&o&&!r.isGeospatial&&(M=t0(o,d)),r.isGeospatial?A3(r,w,i,o):p3(r,w,c,M||c3,m)}function g3(r){return/(?=.*{z})(?=.*{x})(?=.*({y}|{-y}))/.test(r)}function b3(r){return Number.isFinite(r.west)&&Number.isFinite(r.north)&&Number.isFinite(r.east)&&Number.isFinite(r.south)}function _3(r){let e={},t;return i=>{for(const o in i)if(!T3(i[o],e[o])){t=r(i),e=i;break}return t}}function T3(r,e){if(r===e)return!0;if(Array.isArray(r)){const t=r.length;if(!e||e.length!==t)return!1;for(let i=0;i<t;i++)if(r[i]!==e[i])return!1;return!0}return!1}const Il=1,So=2,v3="never",y3="no-overlap",n0="best-available",S3=5,id=0,sd=1e8,Rl=sd-id-1,w3={[n0]:C3,[y3]:M3,[v3]:()=>{}},E3={extent:null,tileSize:512,maxZoom:null,minZoom:null,maxCacheSize:null,maxCacheByteSize:null,refinementStrategy:"best-available",zRange:null,maxRequests:6,debounceTime:0,zoomOffset:0,visibleMinZoom:null,visibleMaxZoom:null,onTileLoad:()=>{},onTileUnload:()=>{},onTileError:()=>{}};class x3{constructor(e){this._getCullBounds=_3(f3),this.opts={...E3,...e},this.setOptions(this.opts),this.onTileLoad=t=>{var i,o;(o=(i=this.opts).onTileLoad)==null||o.call(i,t),this.opts.maxCacheByteSize!==null&&(this._cacheByteSize+=t.byteLength,this._resizeCache())},this._requestScheduler=new _f({throttleRequests:this.opts.maxRequests>0||this.opts.debounceTime>0,maxRequests:this.opts.maxRequests,debounceTime:this.opts.debounceTime}),this._cache=new Map,this._tiles=[],this._dirty=!1,this._cacheByteSize=0,this._viewport=null,this._zRange=null,this._selectedTiles=null,this._frameNumber=0,this._modelMatrix=new we,this._modelMatrixInverse=new we}get tiles(){return this._tiles}get selectedTiles(){return this._selectedTiles}get isLoaded(){return this._selectedTiles!==null&&this._selectedTiles.every(e=>e.isLoaded)}get needsReload(){return this._selectedTiles!==null&&this._selectedTiles.some(e=>e.needsReload)}setOptions(e){Object.assign(this.opts,e),Number.isFinite(e.maxZoom)&&(this._maxZoom=Math.floor(e.maxZoom)),Number.isFinite(e.minZoom)&&(this._minZoom=Math.ceil(e.minZoom)),this._viewport=null}finalize(){for(const e of this._cache.values())e.isLoading&&e.abort();this._cache.clear(),this._tiles=[],this._selectedTiles=null}reloadAll(){for(const e of this._cache.keys()){const t=this._cache.get(e);!this._selectedTiles||!this._selectedTiles.includes(t)?this._cache.delete(e):t.setNeedsReload()}}update(e,{zRange:t,modelMatrix:i}={zRange:null,modelMatrix:null}){const o=i?new we(i):new we,c=!o.equals(this._modelMatrix);if(!this._viewport||!e.equals(this._viewport)||!bn(this._zRange,t)||c){c&&(this._modelMatrixInverse=o.clone().invert(),this._modelMatrix=o),this._viewport=e,this._zRange=t;const m=this.getTileIndices({viewport:e,maxZoom:this._maxZoom,minZoom:this._minZoom,zRange:t,modelMatrix:this._modelMatrix,modelMatrixInverse:this._modelMatrixInverse});this._selectedTiles=m.map(_=>this._getTile(_,!0)),this._dirty&&this._rebuildTree()}else this.needsReload&&(this._selectedTiles=this._selectedTiles.map(m=>this._getTile(m.index,!0)));const d=this.updateTileStates();return this._pruneRequests(),this._dirty&&this._resizeCache(),d&&this._frameNumber++,this._frameNumber}isTileVisible(e,t,i){if(!e.isVisible)return!1;if(t&&this._viewport){const o=this._getCullBounds({viewport:this._viewport,z:this._zRange,cullRect:t});let{bbox:c}=e;for(const[d,m,_,T]of o){let y;if("west"in c)y=c.west<_&&c.east>d&&c.south<T&&c.north>m;else{if(i&&!we.IDENTITY.equals(i)){const[N,O,F,W]=t0([c.left,c.top,c.right,c.bottom],i);c={left:N,top:O,right:F,bottom:W}}const w=Math.min(c.top,c.bottom),M=Math.max(c.top,c.bottom);y=c.left<_&&c.right>d&&w<T&&M>m}if(y)return!0}return!1}return!0}getTileIndices({viewport:e,maxZoom:t,minZoom:i,zRange:o,modelMatrix:c,modelMatrixInverse:d}){const{tileSize:m,extent:_,zoomOffset:T,visibleMinZoom:y,visibleMaxZoom:w}=this.opts;return m3({viewport:e,maxZoom:t,minZoom:i,zRange:o,tileSize:m,extent:_,modelMatrix:c,modelMatrixInverse:d,zoomOffset:T,visibleMinZoom:y,visibleMaxZoom:w})}getTileId(e){return`${e.x}-${e.y}-${e.z}`}getTileZoom(e){return e.z}getTileMetadata(e){const{tileSize:t}=this.opts;return{bbox:d3(this._viewport,e.x,e.y,e.z,t)}}getParentIndex(e){const t=Math.floor(e.x/2),i=Math.floor(e.y/2),o=e.z-1;return{x:t,y:i,z:o}}updateTileStates(){const e=this.opts.refinementStrategy||n0,t=new Array(this._cache.size);let i=0;for(const o of this._cache.values())t[i++]=o.isVisible,o.isSelected=!1,o.isVisible=!1;for(const o of this._selectedTiles)o.isSelected=!0,o.isVisible=!0;(typeof e=="function"?e:w3[e])(Array.from(this._cache.values())),i=0;for(const o of this._cache.values())if(t[i++]!==o.isVisible)return!0;return!1}_getRequestPriority(e){if(!e.isSelected&&!e.isVisible)return-1;const t=this._getTileDistancePriority(e);return e.isSelected?id+t:sd+t}_getTileDistancePriority(e){const{width:t,height:i}=this._viewport||{};if(!this._viewport||!t||!i)return 0;try{const o=this._getTileScreenCorners(e.bbox),c=[t/2,i/2];if(o.length===4){if(this._isPointInPolygon(c,o))return 0;const d=o.reduce((m,_,T)=>{const y=o[(T+1)%o.length];return Math.min(m,this._getPointToSegmentDistanceSquared(c,_,y))},Number.MAX_SAFE_INTEGER);return Math.min(d,Rl)}}catch{}return Rl}_getTileScreenCorners(e){return("west"in e?[[e.west,e.south],[e.east,e.south],[e.east,e.north],[e.west,e.north]]:[[e.left,e.top],[e.right,e.top],[e.right,e.bottom],[e.left,e.bottom]]).map(i=>this._viewport.project(i)).filter(([i,o])=>Number.isFinite(i)&&Number.isFinite(o))}_isPointInPolygon(e,t){let i=!1;const[o,c]=e;for(let d=0,m=t.length-1;d<t.length;m=d++){const[_,T]=t[d],[y,w]=t[m];T>c!=w>c&&o<(y-_)*(c-T)/(w-T)+_&&(i=!i)}return i}_getPointToSegmentDistanceSquared(e,t,i){const[o,c]=e,[d,m]=t,[_,T]=i,y=_-d,w=T-m,M=y*y+w*w,N=M?Math.max(0,Math.min(1,((o-d)*y+(c-m)*w)/M)):0,O=d+N*y,F=m+N*w,W=o-O,j=c-F;return W*W+j*j}_pruneRequests(){const{maxRequests:e=0}=this.opts,t=[];let i=0;for(const o of this._cache.values())o.isLoading&&(i++,!o.isSelected&&!o.isVisible&&t.push(o));for(;e>0&&i>e&&t.length>0;)t.shift().abort(),i--}_rebuildTree(){const{_cache:e}=this;for(const t of e.values())t.parent=null,t.children&&(t.children.length=0);for(const t of e.values()){const i=this._getNearestAncestor(t);t.parent=i,i!=null&&i.children&&i.children.push(t)}}_resizeCache(){var d,m;const{_cache:e,opts:t}=this,i=t.maxCacheSize??(t.maxCacheByteSize!==null?1/0:S3*this.selectedTiles.length),o=t.maxCacheByteSize??1/0;if(e.size>i||this._cacheByteSize>o){for(const[_,T]of e)if(!T.isVisible&&!T.isSelected&&(this._cacheByteSize-=t.maxCacheByteSize!==null?T.byteLength:0,e.delete(_),(m=(d=this.opts).onTileUnload)==null||m.call(d,T)),e.size<=i&&this._cacheByteSize<=o)break;this._rebuildTree(),this._dirty=!0}this._dirty&&(this._tiles=Array.from(this._cache.values()).sort((_,T)=>_.zoom-T.zoom),this._dirty=!1)}_getTile(e,t){const i=this.getTileId(e);let o=this._cache.get(i),c=!1;return!o&&t?(o=new Gy(e),Object.assign(o,this.getTileMetadata(o.index)),Object.assign(o,{id:i,zoom:this.getTileZoom(o.index)}),c=!0,this._cache.set(i,o),this._dirty=!0):o&&o.needsReload&&(c=!0),o&&c&&o.loadData({getData:this.opts.getTileData,getRequestPriority:this._getRequestPriority.bind(this),requestScheduler:this._requestScheduler,onLoad:this.onTileLoad,onError:this.opts.onTileError}),o}_getNearestAncestor(e){const{_minZoom:t=0}=this;let i=e.index;for(;this.getTileZoom(i)>t;){i=this.getParentIndex(i);const o=this._getTile(i);if(o)return o}return null}}function C3(r){for(const e of r)e.state=0;for(const e of r)e.isSelected&&!od(e)&&i0(e);for(const e of r)e.isVisible=!!(e.state&So)}function M3(r){for(const t of r)t.state=0;for(const t of r)t.isSelected&&od(t);const e=Array.from(r).sort((t,i)=>t.zoom-i.zoom);for(const t of e)if(t.isVisible=!!(t.state&So),t.children&&(t.isVisible||t.state&Il))for(const i of t.children)i.state=Il;else t.isSelected&&i0(t)}function od(r){let e=r;for(;e;){if(e.isLoaded||e.content)return e.state|=So,!0;e=e.parent}return!1}function i0(r){for(const e of r.children)e.isLoaded||e.content?e.state|=So:i0(e)}const I3={TilesetClass:x3,data:{type:"data",value:[]},dataComparator:ro.equal,renderSubLayers:{type:"function",value:r=>new jA(r)},getTileData:{type:"function",optional:!0,value:null},onViewportLoad:{type:"function",optional:!0,value:null},onTileLoad:{type:"function",value:r=>{}},onTileUnload:{type:"function",value:r=>{}},onTileError:{type:"function",value:r=>console.error(r)},extent:{type:"array",optional:!0,value:null,compare:!0},tileSize:512,maxZoom:null,minZoom:0,maxCacheSize:null,maxCacheByteSize:null,refinementStrategy:n0,zRange:null,maxRequests:6,debounceTime:0,zoomOffset:0,visibleMinZoom:null,visibleMaxZoom:null};class Yi extends li{initializeState(){this.state={tileset:null,isLoaded:!1}}finalizeState(){var e,t;(t=(e=this.state)==null?void 0:e.tileset)==null||t.finalize()}get isLoaded(){var e,t,i;return!!((i=(t=(e=this.state)==null?void 0:e.tileset)==null?void 0:t.selectedTiles)!=null&&i.every(o=>o.isLoaded&&(!o.content||!o.layers||o.layers.every(c=>c.isLoaded))))}shouldUpdateState({changeFlags:e}){return e.somethingChanged}updateState({changeFlags:e}){let{tileset:t}=this.state;const i=e.propsOrDataChanged||e.updateTriggersChanged,o=e.dataChanged||e.updateTriggersChanged&&(e.updateTriggersChanged.all||e.updateTriggersChanged.getTileData);t?i&&(t.setOptions(this._getTilesetOptions()),o?t.reloadAll():t.tiles.forEach(c=>{c.layers=null})):(t=new this.props.TilesetClass(this._getTilesetOptions()),this.setState({tileset:t})),this._updateTileset()}_getTilesetOptions(){const{tileSize:e,maxCacheSize:t,maxCacheByteSize:i,refinementStrategy:o,extent:c,maxZoom:d,minZoom:m,maxRequests:_,debounceTime:T,zoomOffset:y,visibleMinZoom:w,visibleMaxZoom:M}=this.props;return{maxCacheSize:t,maxCacheByteSize:i,maxZoom:d,minZoom:m,tileSize:e,refinementStrategy:o,extent:c,maxRequests:_,debounceTime:T,zoomOffset:y,visibleMinZoom:w,visibleMaxZoom:M,getTileData:this.getTileData.bind(this),onTileLoad:this._onTileLoad.bind(this),onTileError:this._onTileError.bind(this),onTileUnload:this._onTileUnload.bind(this)}}_updateTileset(){const e=this.state.tileset,{zRange:t,modelMatrix:i}=this.props,o=e.update(this.context.viewport,{zRange:t,modelMatrix:i}),{isLoaded:c}=e,d=this.state.isLoaded!==c,m=this.state.frameNumber!==o;c&&(d||m)&&this._onViewportLoad(),m&&this.setState({frameNumber:o}),this.state.isLoaded=c}_onViewportLoad(){const{tileset:e}=this.state,{onViewportLoad:t}=this.props;t&&t(e.selectedTiles)}_onTileLoad(e){this.props.onTileLoad(e),e.layers=null,this.setNeedsUpdate()}_onTileError(e,t){this.props.onTileError(e),t.layers=null,this.setNeedsUpdate()}_onTileUnload(e){this.props.onTileUnload(e)}getTileData(e){const{data:t,getTileData:i,fetch:o}=this.props,{signal:c}=e;return e.url=typeof t=="string"||Array.isArray(t)?no(t,e):null,i?i(e):o&&e.url?o(e.url,{propName:"data",layer:this,signal:c}):null}renderSubLayers(e){return this.props.renderSubLayers(e)}getSubLayerPropsByTile(e){return null}getPickingInfo(e){const t=e.sourceLayer,i=t.props.tile,o=e.info;return o.picked&&(o.tile=i),o.sourceTile=i,o.sourceTileSubLayer=t,o}_updateAutoHighlight(e){e.sourceTileSubLayer.updateAutoHighlight(e)}renderLayers(){const{visibleMinZoom:e,visibleMaxZoom:t,minZoom:i,extent:o}=this.props,c=this.context.viewport.zoom;if(e!=null&&c<e||t!=null&&c>t||i!=null&&!o&&c<i){for(const m of this.state.tileset.tiles)m.layers=null;return[]}return this.state.tileset.tiles.map(m=>{const _=this.getSubLayerPropsByTile(m);if(!(!m.isLoaded&&!m.content))if(m.layers)_&&m.layers[0]&&Object.keys(_).some(T=>m.layers[0].props[T]!==_[T])&&(m.layers=m.layers.map(T=>T.clone(_)));else{const T=this.renderSubLayers({...this.props,...this.getSubLayerProps({id:m.id,updateTriggers:this.props.updateTriggers}),data:m.content,_offset:0,tile:m});m.layers=$g(T,Boolean).map(y=>y.clone({tile:m,..._}))}return m.layers})}filterSubLayer({layer:e,cullRect:t}){const{tile:i}=e.props,{modelMatrix:o}=this.props;return this.state.tileset.isTileVisible(i,t,o?new we(o):null)}}Yi.defaultProps=I3;Yi.layerName="TileLayer";const R3=`struct TripsUniforms {
  fadeTrail: f32,
  trailLength: f32,
  currentTime: f32,
};

@group(0) @binding(auto)
var<uniform> trips: TripsUniforms;
`,Nl=`layout(std140) uniform tripsUniforms {
  bool fadeTrail;
  float trailLength;
  float currentTime;
} trips;
`,N3={name:"trips",source:R3,vs:Nl,fs:Nl,uniformTypes:{fadeTrail:"f32",trailLength:"f32",currentTime:"f32"}};function P3(r,e=r.length,t=!1){const i=new Float32Array(e*2);if(r.length===0)return i;const o=e>r.length,c=t?r.length:Math.max(r.length-1,1);for(let d=0;d<e;d++){const m=o?d%c:Math.min(d,r.length-1),_=o?(m+1)%c:Math.min(m+1,r.length-1);i[d*2]=r[m],i[d*2+1]=r[_]}return i}const L3={"  @location(12) rowIndexes: u32,":`
  @location(13) instanceTimestamps: vec2<f32>,`,"  @location(5) vJointType: f32,":`
  @location(6) vTime: f32,`,"    attributes.instanceColors.a * layer.opacity\n  );":`

  varyings.vTime = mix(
    attributes.instanceTimestamps.x,
    attributes.instanceTimestamps.y,
    varyings.vPathPosition.y / varyings.vPathLength
  );

  if (trips.fadeTrail > 0.5) {
    varyings.vColor.a *=
      1.0 - (trips.currentTime - varyings.vTime) / trips.trailLength;
  }`,"  // DECKGL_FILTER_COLOR":`
  if (
    varyings.vTime > trips.currentTime ||
    (trips.fadeTrail > 0.5 && varyings.vTime < trips.currentTime - trips.trailLength)
  ) {
    discard;
  }`},k3={fadeTrail:!0,trailLength:{type:"number",value:120,min:0},currentTime:{type:"number",value:0,min:0},getTimestamps:{type:"accessor",value:r=>r.timestamps}},O3={"vs:#decl":`in float instanceTimestamps;
in float instanceNextTimestamps;
out float vTime;
`,"vs:#main-end":`vTime = instanceTimestamps + (instanceNextTimestamps - instanceTimestamps) * vPathPosition.y / vPathLength;
`,"fs:#decl":`in float vTime;
`,"fs:DECKGL_FILTER_COLOR":`if(vTime > trips.currentTime || (trips.fadeTrail && (vTime < trips.currentTime - trips.trailLength))) {
  discard;
}
if(trips.fadeTrail) {
  color.a *= 1.0 - (trips.currentTime - vTime) / trips.trailLength;
}
`};class ad extends rb{getShaders(){const e=super.getShaders();return e.inject=this.context.device.type==="webgpu"?L3:O3,e.modules=[...e.modules,N3],e}initializeState(){super.initializeState(),this.getAttributeManager().addInstanced({...this.context.device.type==="webgpu"?{instanceTimestamps:{size:2,accessor:"getTimestamps",update:this.calculateWebGPUTimestamps,bufferGroup:"path-instance-data"}}:{timestamps:{size:1,accessor:"getTimestamps",shaderAttributes:{instanceTimestamps:{vertexOffset:0},instanceNextTimestamps:{vertexOffset:1}}}}})}calculateWebGPUTimestamps(e,{data:t,props:i}){var y;const{pathTesselator:o}=this.state,{instanceCount:c,vertexStarts:d}=o,m=new Float32Array(c*2),{iterable:_,objectInfo:T}=mo(t);for(const w of _){T.index++;const M=d[T.index],N=d[T.index+1]??c;if(N<=M)continue;const O=((y=i.getTimestamps)==null?void 0:y.call(i,w,T))??[];m.set(P3(O,N-M,i._pathType==="loop"),M*2)}e.startIndices=d,e.value=m}draw(e){const{fadeTrail:t,trailLength:i,currentTime:o}=this.props,c={fadeTrail:t,trailLength:i,currentTime:o};this.state.model.shaderInputs.setProps({trips:c}),super.draw(e)}}ad.layerName="TripsLayer";ad.defaultProps=k3;const F3=10;function B3(r,e){let t;return r==null?t=e:typeof r=="object"?t={...r,coverage:e}:t={getHexagon:r,coverage:e},t}const D3={...go.defaultProps,highPrecision:"auto",coverage:{type:"number",min:0,max:1,value:1},centerHexagon:null,getHexagon:{type:"accessor",value:r=>r.hexagon},extruded:!0};class hi extends li{initializeState(){hi._checkH3Lib(),this.state={edgeLengthKM:0,resolution:-1}}shouldUpdateState({changeFlags:e}){return this._shouldUseHighPrecision()?e.propsOrDataChanged:e.somethingChanged}updateState({props:e,changeFlags:t}){if(e.highPrecision!==!0&&(t.dataChanged||t.updateTriggersChanged&&t.updateTriggersChanged.getHexagon)){const i=this._calculateH3DataProps();this.setState(i)}this._updateVertices(this.context.viewport)}_calculateH3DataProps(){let e=-1,t=!1,i=!1;const{iterable:o,objectInfo:c}=mo(this.props.data);for(const d of o){c.index++;const m=this.props.getHexagon(d,c),_=lT(m);if(e<0){if(e=_,!this.props.highPrecision)break}else if(e!==_){i=!0;break}if(cT(m)){t=!0;break}}return{resolution:e,edgeLengthKM:e>=0?pT(e,"km"):0,hasMultipleRes:i,hasPentagon:t}}_shouldUseHighPrecision(){if(this.props.highPrecision==="auto"){const{resolution:e,hasPentagon:t,hasMultipleRes:i}=this.state,{viewport:o}=this.context;return!!(o!=null&&o.resolution)||i||t||e>=0&&e<=5}return this.props.highPrecision}_updateVertices(e){if(this._shouldUseHighPrecision())return;const{resolution:t,edgeLengthKM:i,centerHex:o}=this.state;if(t<0)return;const c=this.props.centerHexagon||uT(e.latitude,e.longitude,t);if(o===c)return;if(o)try{if(dT(o,c)*i<F3)return}catch{}const{unitsPerMeter:d}=e.distanceScales;let m=rl(c);const[_,T]=$A(c),[y,w]=e.projectFlat([T,_]);m=m.map(M=>{const N=e.projectFlat(M);return[(N[0]-y)/d[0],(N[1]-w)/d[1]]}),this.setState({centerHex:c,vertices:m})}renderLayers(){return this._shouldUseHighPrecision()?this._renderPolygonLayer():this._renderColumnLayer()}_getForwardProps(){const{elevationScale:e,material:t,coverage:i,extruded:o,wireframe:c,stroked:d,filled:m,lineWidthUnits:_,lineWidthScale:T,lineWidthMinPixels:y,lineWidthMaxPixels:w,getFillColor:M,getElevation:N,getLineColor:O,getLineWidth:F,transitions:W,updateTriggers:j}=this.props;return{elevationScale:e,extruded:o,coverage:i,wireframe:c,stroked:d,filled:m,lineWidthUnits:_,lineWidthScale:T,lineWidthMinPixels:y,lineWidthMaxPixels:w,material:t,getElevation:N,getFillColor:M,getLineColor:O,getLineWidth:F,transitions:W,updateTriggers:{getFillColor:j.getFillColor,getElevation:j.getElevation,getLineColor:j.getLineColor,getLineWidth:j.getLineWidth}}}_renderPolygonLayer(){const{data:e,getHexagon:t,updateTriggers:i,coverage:o}=this.props,c=this.getSubLayerClass("hexagon-cell-hifi",go),d=this._getForwardProps();return d.updateTriggers.getPolygon=B3(i.getHexagon,o),new c(d,this.getSubLayerProps({id:"hexagon-cell-hifi",updateTriggers:d.updateTriggers}),{data:e,_normalize:!1,_windingOrder:"CCW",positionFormat:"XY",getPolygon:(m,_)=>{const T=t(m,_);return Ih(rl(T,o))}})}_renderColumnLayer(){const{data:e,getHexagon:t,updateTriggers:i}=this.props,o=this.getSubLayerClass("hexagon-cell",Lb),c=this._getForwardProps();return c.updateTriggers.getPosition=i.getHexagon,new o(c,this.getSubLayerProps({id:"hexagon-cell",flatShading:!0,updateTriggers:c.updateTriggers}),{data:e,diskResolution:6,radius:1,vertices:this.state.vertices,getPosition:_T.bind(null,t)})}}hi.defaultProps=D3;hi.layerName="H3HexagonLayer";hi._checkH3Lib=()=>{};const U3={getHexagons:{type:"accessor",value:r=>r.hexagons}};class Ad extends Cn{initializeState(){hi._checkH3Lib()}updateState({props:e,changeFlags:t}){if(t.dataChanged||t.updateTriggersChanged&&t.updateTriggersChanged.getHexagons){const{data:i,getHexagons:o}=e,c=[],{iterable:d,objectInfo:m}=mo(i);for(const _ of d){m.index++;const T=o(_,m),y=hT(T,!0);for(const w of y){for(const M of w)XA(M);c.push(this.getSubLayerRow({polygon:w},_,m.index))}}this.setState({polygons:c})}}indexToBounds(){const{getElevation:e,getFillColor:t,getLineColor:i,getLineWidth:o}=this.props;return{data:this.state.polygons,getPolygon:c=>c.polygon,getElevation:this.getSubLayerAccessor(e),getFillColor:this.getSubLayerAccessor(t),getLineColor:this.getSubLayerAccessor(i),getLineWidth:this.getSubLayerAccessor(o)}}}Ad.layerName="H3ClusterLayer";Ad.defaultProps=U3;const Sa=Math.PI/180,Is=new Float32Array(16),Pl=new Float32Array(12);function Ll(r,e,t){const i=e[0]*Sa,o=e[1]*Sa,c=e[2]*Sa,d=Math.sin(c),m=Math.sin(i),_=Math.sin(o),T=Math.cos(c),y=Math.cos(i),w=Math.cos(o),M=t[0],N=t[1],O=t[2];r[0]=M*w*y,r[1]=M*_*y,r[2]=M*-m,r[3]=N*(-_*T+w*m*d),r[4]=N*(w*T+_*m*d),r[5]=N*y*d,r[6]=O*(_*d+w*m*T),r[7]=O*(-w*d+_*m*T),r[8]=O*y*T}function kl(r){return r[0]=r[0],r[1]=r[1],r[2]=r[2],r[3]=r[4],r[4]=r[5],r[5]=r[6],r[6]=r[8],r[7]=r[9],r[8]=r[10],r[9]=r[12],r[10]=r[13],r[11]=r[14],r.subarray(0,12)}const cd={size:12,accessor:["getOrientation","getScale","getTranslation","getTransformMatrix"],shaderAttributes:{instanceModelMatrixCol0:{size:3,elementOffset:0},instanceModelMatrixCol1:{size:3,elementOffset:3},instanceModelMatrixCol2:{size:3,elementOffset:6},instanceTranslation:{size:3,elementOffset:9}},update(r,{startRow:e,endRow:t}){const{data:i,getOrientation:o,getScale:c,getTranslation:d,getTransformMatrix:m}=this.props,_=Array.isArray(m),T=_&&m.length===16,y=Array.isArray(c),w=Array.isArray(o),M=Array.isArray(d),N=T||!_&&!!m(i[0]);N?r.constant=T:r.constant=w&&y&&M;const O=r.value;if(r.constant){let F;N?(Is.set(m),F=kl(Is)):(F=Pl,Ll(F,o,c),F.set(d,9)),r.value=new Float32Array(F)}else{let F=e*r.size;const{iterable:W,objectInfo:j}=mo(i,e,t);for(const q of W){j.index++;let J;if(N)Is.set(T?m:m(q,j)),J=kl(Is);else{J=Pl;const Z=w?o:o(q,j),Y=y?c:c(q,j);Ll(J,Z,Y),J.set(M?d:d(q,j),9)}O[F++]=J[0],O[F++]=J[1],O[F++]=J[2],O[F++]=J[3],O[F++]=J[4],O[F++]=J[5],O[F++]=J[6],O[F++]=J[7],O[F++]=J[8],O[F++]=J[9],O[F++]=J[10],O[F++]=J[11]}}}};function ld(r,e){return e==="cartesian"||e==="meter-offsets"||e==="default"&&!r.isGeospatial}const V3=`struct SimpleMeshUniforms {
  sizeScale: f32,
  composeModelMatrix: f32,
  hasTexture: f32,
  flatShading: f32,
};

@group(0) @binding(auto) var<uniform> simpleMesh: SimpleMeshUniforms;
@group(0) @binding(auto) var simpleMeshTexture: texture_2d<f32>;
@group(0) @binding(auto) var simpleMeshTextureSampler: sampler;
`,Ol=`layout(std140) uniform simpleMeshUniforms {
  float sizeScale;
  bool composeModelMatrix;
  bool hasTexture;
  bool flatShading;
} simpleMesh;
`,j3={name:"simpleMesh",source:V3,vs:Ol,fs:Ol,uniformTypes:{sizeScale:"f32",composeModelMatrix:"f32",hasTexture:"f32",flatShading:"f32"}},G3=`#version 300 es
#define SHADER_NAME simple-mesh-layer-vs
in vec3 positions;
in vec3 normals;
in vec3 colors;
in vec2 texCoords;
in vec3 instancePositions;
in vec3 instancePositions64Low;
in vec4 instanceColors;
in vec3 instanceModelMatrixCol0;
in vec3 instanceModelMatrixCol1;
in vec3 instanceModelMatrixCol2;
in vec3 instanceTranslation;
out vec2 vTexCoord;
out vec3 cameraPosition;
out vec3 normals_commonspace;
out vec4 position_commonspace;
out vec4 vColor;
void main(void) {
geometry.worldPosition = instancePositions;
geometry.uv = texCoords;
geometry.pickingColor = picking_getPickingColorFromInstanceID();
vTexCoord = texCoords;
cameraPosition = project.cameraPosition;
vColor = vec4(colors * instanceColors.rgb, instanceColors.a);
mat3 instanceModelMatrix = mat3(instanceModelMatrixCol0, instanceModelMatrixCol1, instanceModelMatrixCol2);
vec3 pos = (instanceModelMatrix * positions) * simpleMesh.sizeScale + instanceTranslation;
if (simpleMesh.composeModelMatrix) {
DECKGL_FILTER_SIZE(pos, geometry);
normals_commonspace = project_normal(instanceModelMatrix * normals);
geometry.worldPosition += pos;
gl_Position = project_position_to_clipspace(pos + instancePositions, instancePositions64Low, vec3(0.0), position_commonspace);
geometry.position = position_commonspace;
}
else {
pos = project_size(pos);
DECKGL_FILTER_SIZE(pos, geometry);
gl_Position = project_position_to_clipspace(instancePositions, instancePositions64Low, pos, position_commonspace);
geometry.position = position_commonspace;
normals_commonspace = project_normal(instanceModelMatrix * normals);
}
geometry.normal = normals_commonspace;
DECKGL_FILTER_GL_POSITION(gl_Position, geometry);
DECKGL_FILTER_COLOR(vColor, geometry);
}
`,z3=`#version 300 es
#define SHADER_NAME simple-mesh-layer-fs
precision highp float;
uniform sampler2D sampler;
in vec2 vTexCoord;
in vec3 cameraPosition;
in vec3 normals_commonspace;
in vec4 position_commonspace;
in vec4 vColor;
out vec4 fragColor;
void main(void) {
geometry.uv = vTexCoord;
vec3 normal;
if (simpleMesh.flatShading) {
normal = normalize(cross(dFdx(position_commonspace.xyz), dFdy(position_commonspace.xyz)));
} else {
normal = normals_commonspace;
}
vec4 color = simpleMesh.hasTexture ? texture(sampler, vTexCoord) : vColor;
DECKGL_FILTER_COLOR(color, geometry);
vec3 lightColor = lighting_getLightColor(color.rgb, cameraPosition, position_commonspace.xyz, normal);
fragColor = vec4(lightColor, color.a * layer.opacity);
}
`,H3=`struct Attributes {
  @builtin(instance_index) instanceIndex: u32,
  @location(0) positions: vec3<f32>,
  @location(1) normals: vec3<f32>,
  @location(2) colors: vec3<f32>,
  @location(3) texCoords: vec2<f32>,
  @location(4) instancePositions: vec3<f32>,
  @location(5) instancePositions64Low: vec3<f32>,
  @location(6) instanceColors: vec4<f32>,
  @location(7) instanceModelMatrixCol0: vec3<f32>,
  @location(8) instanceModelMatrixCol1: vec3<f32>,
  @location(9) instanceModelMatrixCol2: vec3<f32>,
  @location(10) instanceTranslation: vec3<f32>,
};

struct Varyings {
  @builtin(position) position: vec4<f32>,
  @location(0) color: vec4<f32>,
  @location(1) texCoords: vec2<f32>,
  @location(2) normal: vec3<f32>,
  @location(3) positionCommon: vec3<f32>,
  @location(4) pickingColor: vec3<f32>,
};

@vertex
fn vertexMain(attributes: Attributes) -> Varyings {
  var varyings: Varyings;

  geometry.worldPosition = attributes.instancePositions;
  geometry.uv = attributes.texCoords;
  geometry.pickingColor = picking_getPickingColorFromIndex(attributes.instanceIndex);

  let instanceModelMatrix = mat3x3<f32>(
    attributes.instanceModelMatrixCol0,
    attributes.instanceModelMatrixCol1,
    attributes.instanceModelMatrixCol2
  );
  let meshPosition =
    (instanceModelMatrix * attributes.positions) * simpleMesh.sizeScale +
    attributes.instanceTranslation;

  if (simpleMesh.composeModelMatrix > 0.5) {
    geometry.normal = project_normal(instanceModelMatrix * attributes.normals);
    geometry.worldPosition += meshPosition;
    let projected = project_position_to_clipspace_and_commonspace(
      attributes.instancePositions + meshPosition,
      attributes.instancePositions64Low,
      vec3<f32>(0.0)
    );
    geometry.position = projected.commonPosition;
    varyings.position = projected.clipPosition;
  } else {
    let projected = project_position_to_clipspace_and_commonspace(
      attributes.instancePositions,
      attributes.instancePositions64Low,
      project_size_vec3(meshPosition)
    );
    geometry.position = projected.commonPosition;
    geometry.normal = project_normal(instanceModelMatrix * attributes.normals);
    varyings.position = projected.clipPosition;
  }

  varyings.color = vec4<f32>(
    attributes.colors * attributes.instanceColors.rgb,
    attributes.instanceColors.a
  );
  varyings.texCoords = attributes.texCoords;
  varyings.normal = geometry.normal;
  varyings.positionCommon = geometry.position.xyz;
  varyings.pickingColor = geometry.pickingColor;
  return varyings;
}

@fragment
fn fragmentMain(varyings: Varyings) -> @location(0) vec4<f32> {
  geometry.uv = varyings.texCoords;

  if (picking.isActive > 0.5) {
    if (!picking_isColorValid(varyings.pickingColor)) {
      discard;
    }
    return vec4<f32>(varyings.pickingColor, 1.0);
  }

  var color = varyings.color;
  if (simpleMesh.hasTexture > 0.5) {
    color = textureSample(simpleMeshTexture, simpleMeshTextureSampler, varyings.texCoords);
  }

  var normal = varyings.normal;
  if (simpleMesh.flatShading > 0.5) {
    // WebGPU's screen-space Y axis reverses the derivative orientation used by GLSL flat shading.
    normal = normalize(cross(dpdy(varyings.positionCommon), dpdx(varyings.positionCommon)));
  }

  color = vec4<f32>(
    lighting_getLightColor2(color.rgb, project.cameraPosition, varyings.positionCommon, normal),
    color.a * layer.opacity
  );

  if (picking.isHighlightActive > 0.5) {
    let highlightedColor = picking_normalizeColor(picking.highlightedObjectColor);
    if (picking_isColorZero(abs(varyings.pickingColor - highlightedColor))) {
      let blendedAlpha = picking.highlightColor.a + color.a * (1.0 - picking.highlightColor.a);
      if (blendedAlpha > 0.0) {
        color = vec4<f32>(
          mix(color.rgb, picking.highlightColor.rgb, picking.highlightColor.a / blendedAlpha),
          blendedAlpha
        );
      }
    }
  }

  return deckgl_premultiplied_alpha(color);
}
`;function q3(r){let e=1/0,t=1/0,i=1/0,o=-1/0,c=-1/0,d=-1/0;const m=r.POSITION?r.POSITION.value:[],_=m&&m.length;for(let T=0;T<_;T+=3){const y=m[T],w=m[T+1],M=m[T+2];e=y<e?y:e,t=w<t?w:t,i=M<i?M:i,o=y>o?y:o,c=w>c?w:c,d=M>d?M:d}return[[e,t,i],[o,c,d]]}function wa(r){const e=r.positions||r.POSITION;_n.assert(e,'no "postions" or "POSITION" attribute in mesh');const t=e.value.length/e.size;let i=r.COLOR_0||r.colors;i||(i={size:3,value:new Float32Array(t*3).fill(1)});let o=r.NORMAL||r.normals;o||(o={size:3,value:new Float32Array(t*3).fill(0)});let c=r.TEXCOORD_0||r.texCoords;return c||(c={size:2,value:new Float32Array(t*2).fill(0)}),{positions:e,colors:i,normals:o,texCoords:c}}function Fl(r){return r instanceof Jn?(r.attributes=wa(r.attributes),r):r.attributes?new Jn({...r,topology:"triangle-list",attributes:wa(r.attributes)}):new Jn({topology:"triangle-list",attributes:wa(r)})}const Q3=[0,0,0,255],W3={mesh:{type:"object",value:null,async:!0},texture:{type:"image",value:null,async:!0},sizeScale:{type:"number",value:1,min:0},_instanced:!0,wireframe:!1,material:!0,getPosition:{type:"accessor",value:r=>r.position},getColor:{type:"accessor",value:Q3},getOrientation:{type:"accessor",value:[0,0,0]},getScale:{type:"accessor",value:[1,1,1]},getTranslation:{type:"accessor",value:[0,0,0]},getTransformMatrix:{type:"accessor",value:[]},textureParameters:{type:"object",ignore:!0,value:null}};class zi extends uf{getShaders(){return super.getShaders({vs:G3,fs:z3,source:H3,modules:[ff,hf,Xg,df,j3]})}getBounds(){var i;if(this.props._instanced)return super.getBounds();let e=this.state.positionBounds;if(e)return e;const{mesh:t}=this.props;if(!t)return null;if(e=(i=t.header)==null?void 0:i.boundingBox,!e){const{attributes:o}=Fl(t);o.POSITION=o.POSITION||o.positions,e=q3(o)}return this.state.positionBounds=e,e}initializeState(){this.getAttributeManager().addInstanced({instancePositions:{transition:!0,type:"float64",fp64:this.use64bitPositions(),size:3,accessor:"getPosition"},instanceColors:{type:"unorm8",transition:!0,size:this.props.colorFormat.length,accessor:"getColor",defaultValue:[0,0,0,255]},instanceModelMatrix:cd}),this.setState({emptyTexture:this.context.device.createTexture({data:new Uint8Array(4),width:1,height:1})})}updateState(e){var c;super.updateState(e);const{props:t,oldProps:i,changeFlags:o}=e;if(t.mesh!==i.mesh||o.extensionsChanged){if(this.state.positionBounds=null,(c=this.state.model)==null||c.destroy(),t.mesh){this.state.model=this.getModel(t.mesh);const d=t.mesh.attributes||t.mesh;this.setState({hasNormals:!!(d.NORMAL||d.normals)})}this.getAttributeManager().invalidateAll()}t.texture!==i.texture&&t.texture instanceof ct&&this.setTexture(t.texture),this.state.model&&this.state.model.setTopology(this.props.wireframe?"line-strip":"triangle-list")}finalizeState(e){super.finalizeState(e),this.state.emptyTexture.delete()}draw({uniforms:e}){const{model:t}=this.state;if(!t)return;const{viewport:i,renderPass:o}=this.context,{sizeScale:c,coordinateSystem:d,_instanced:m}=this.props,_={sizeScale:c,composeModelMatrix:!m||ld(i,d),flatShading:!this.state.hasNormals};t.shaderInputs.setProps({simpleMesh:_}),t.draw(o)}get isLoaded(){var e;return!!((e=this.state)!=null&&e.model&&super.isLoaded)}getModel(e){const t=new DA(this.context.device,{...this.getShaders(),id:this.props.id,bufferLayout:this.getAttributeManager().getBufferLayouts(),geometry:Fl(e),isInstanced:!0});return t.shaderInputs.setProps({simpleMesh:this.getTextureProps(this.props.texture)}),t}setTexture(e){const{model:t}=this.state;t&&t.shaderInputs.setProps({simpleMesh:this.getTextureProps(e)})}getTextureProps(e){const t=e||this.state.emptyTexture;return{...this.context.device.type==="webgpu"?{simpleMeshTexture:t}:{sampler:t},hasTexture:!!e}}}zi.defaultProps=W3;zi.layerName="SimpleMeshLayer";const K3=`
struct VertexInputs {
  @location(0) positions: vec3f,
#ifdef HAS_NORMALS
  @location(1) normals: vec3f,
#endif
#ifdef HAS_TANGENTS
  @location(2) TANGENT: vec4f,
#endif
#ifdef HAS_UV
  @location(3) texCoords: vec2f,
#endif
#ifdef HAS_UV_1
  @location(4) texCoords1: vec2f,
#endif
#ifdef HAS_SKIN
  @location(5) JOINTS_0: vec4u,
  @location(6) WEIGHTS_0: vec4f,
#endif
#ifdef HAS_GLTF_INSTANCING
  @location(8) instanceModelMatrixCol0: vec4f,
  @location(9) instanceModelMatrixCol1: vec4f,
  @location(10) instanceModelMatrixCol2: vec4f,
  @location(11) instanceModelMatrixCol3: vec4f,
  @builtin(instance_index) instanceIndex: u32,
#endif
#ifdef HAS_GPU_CROWD_ANIMATION
  @location(12) instanceAnimationFrames: vec4f,
  @location(13) instanceAnimationBlend: vec4f,
#endif
#ifdef HAS_INSTANCED_MORPH
  @builtin(vertex_index) vertexIndex: u32,
#endif
};

struct FragmentInputs {
  @builtin(position) position: vec4f,
  @location(0) pbrPosition: vec3f,
  @location(1) pbrUV0: vec2f,
  @location(2) pbrUV1: vec2f,
  @location(3) pbrNormal: vec3f,
#ifdef HAS_TANGENTS
  @location(4) pbrTangent: vec4f,
#endif
};

#ifdef HAS_GLTF_INSTANCING
fn getGLTFInstanceNormalMatrix(matrix: mat3x3f) -> mat3x3f {
  let firstCofactor = cross(matrix[1], matrix[2]);
  let inverseDeterminant = 1.0 / dot(matrix[0], firstCofactor);
  return mat3x3f(
    firstCofactor,
    cross(matrix[2], matrix[0]),
    cross(matrix[0], matrix[1])
  ) * inverseDeterminant;
}
#endif

@vertex
fn vertexMain(inputs: VertexInputs) -> FragmentInputs {
  var outputs: FragmentInputs;
  var position = vec4f(inputs.positions, 1.0);
  var normal = vec3f(0.0, 0.0, 1.0);
  var tangent = vec4f(1.0, 0.0, 0.0, 1.0);
  var uv0 = vec2f(0.0, 0.0);
  var uv1 = vec2f(0.0, 0.0);

#ifdef HAS_NORMALS
  normal = inputs.normals;
#endif
#ifdef HAS_UV
  uv0 = inputs.texCoords;
#endif
#ifdef HAS_UV_1
  uv1 = inputs.texCoords1;
#endif
#ifdef HAS_TANGENTS
  tangent = inputs.TANGENT;
#endif

#ifdef HAS_INSTANCED_MORPH
  var animationFrames = vec4f(0.0);
  var animationBlend = vec4f(0.0);
#ifdef HAS_GPU_CROWD_ANIMATION
  animationFrames = inputs.instanceAnimationFrames;
  animationBlend = inputs.instanceAnimationBlend;
#endif
  position = vec4f(
    position.xyz + getGPUCrowdMorphDelta(
      inputs.instanceIndex,
      inputs.vertexIndex,
      0u,
      u32(CROWD_MORPH_VERTEX_COUNT),
      u32(CROWD_MORPH_TARGET_COUNT),
      u32(CROWD_ANIMATION_JOINT_COUNT),
      animationFrames,
      animationBlend,
      u32(CROWD_ANIMATION_FRAME_STRIDE)
    ),
    1.0
  );
#ifdef HAS_NORMALS
  normal = normalize(normal + getGPUCrowdMorphDelta(
    inputs.instanceIndex,
    inputs.vertexIndex,
    1u,
    u32(CROWD_MORPH_VERTEX_COUNT),
    u32(CROWD_MORPH_TARGET_COUNT),
    u32(CROWD_ANIMATION_JOINT_COUNT),
    animationFrames,
    animationBlend,
    u32(CROWD_ANIMATION_FRAME_STRIDE)
  ));
#endif
#ifdef HAS_TANGENTS
  tangent = vec4f(normalize(tangent.xyz + getGPUCrowdMorphDelta(
    inputs.instanceIndex,
    inputs.vertexIndex,
    2u,
    u32(CROWD_MORPH_VERTEX_COUNT),
    u32(CROWD_MORPH_TARGET_COUNT),
    u32(CROWD_ANIMATION_JOINT_COUNT),
    animationFrames,
    animationBlend,
    u32(CROWD_ANIMATION_FRAME_STRIDE)
  )), tangent.w);
#endif
#endif

#ifdef HAS_SKIN
#ifdef HAS_GPU_CROWD_ANIMATION
  let skinMatrix = getGPUAnimatedSkinMatrix(
    inputs.WEIGHTS_0,
    inputs.JOINTS_0,
    inputs.instanceAnimationFrames,
    inputs.instanceAnimationBlend,
    u32(CROWD_ANIMATION_FRAME_STRIDE)
  );
#else
#ifdef HAS_INSTANCED_SKIN
  let skinMatrix = getInstancedSkinMatrix(
    inputs.WEIGHTS_0,
    inputs.JOINTS_0,
    inputs.instanceIndex,
    u32(CROWD_JOINTS_PER_INSTANCE)
  );
#else
  let skinMatrix = getSkinMatrix(inputs.WEIGHTS_0, inputs.JOINTS_0);
#endif
#endif
  position = skinMatrix * position;
  normal = normalize((skinMatrix * vec4f(normal, 0.0)).xyz);
#ifdef HAS_TANGENTS
  tangent = vec4f(normalize((skinMatrix * vec4f(tangent.xyz, 0.0)).xyz), tangent.w);
#endif
#endif

#ifdef HAS_GLTF_INSTANCING
  var instanceMatrix = mat4x4f(
    inputs.instanceModelMatrixCol0,
    inputs.instanceModelMatrixCol1,
    inputs.instanceModelMatrixCol2,
    inputs.instanceModelMatrixCol3
  );
#ifdef HAS_GPU_CROWD_ANIMATION
  instanceMatrix *= sampleGPUAnimationMatrix(
    inputs.instanceAnimationFrames,
    inputs.instanceAnimationBlend,
    0u,
    u32(CROWD_ANIMATION_FRAME_STRIDE)
  );
#endif
  position = instanceMatrix * position;
  normal = normalize(getGLTFInstanceNormalMatrix(mat3x3f(
    instanceMatrix[0].xyz,
    instanceMatrix[1].xyz,
    instanceMatrix[2].xyz
  )) * normal);
#ifdef HAS_TANGENTS
  tangent = vec4f(normalize((instanceMatrix * vec4f(tangent.xyz, 0.0)).xyz), tangent.w);
#endif
#endif

  let worldPosition = pbrProjection.modelMatrix * position;

#ifdef HAS_NORMALS
  normal = normalize((pbrProjection.normalMatrix * vec4f(normal, 0.0)).xyz);
#endif
#ifdef HAS_TANGENTS
  let worldTangent = normalize((pbrProjection.modelMatrix * vec4f(tangent.xyz, 0.0)).xyz);
  outputs.pbrTangent = vec4f(worldTangent, tangent.w);
#endif

  outputs.position = pbrProjection.modelViewProjectionMatrix * position;
  outputs.pbrPosition = worldPosition.xyz / worldPosition.w;
  outputs.pbrUV0 = uv0;
  outputs.pbrUV1 = uv1;
  outputs.pbrNormal = normal;
  return outputs;
}

@fragment
fn fragmentMain(inputs: FragmentInputs) -> @location(0) vec4f {
  fragmentInputs.pbr_vPosition = inputs.pbrPosition;
  fragmentInputs.pbr_vUV0 = inputs.pbrUV0;
  fragmentInputs.pbr_vUV1 = inputs.pbrUV1;
  fragmentInputs.pbr_vNormal = inputs.pbrNormal;
#ifdef HAS_TANGENTS
  let tangent = normalize(inputs.pbrTangent.xyz);
  let bitangent = normalize(cross(inputs.pbrNormal, tangent)) * inputs.pbrTangent.w;
  fragmentInputs.pbr_vTBN = mat3x3f(tangent, bitangent, inputs.pbrNormal);
#endif
  return pbr_filterColor(vec4f(1.0));
}
`,$3=`#version 300 es

  // in vec4 POSITION;
  in vec4 positions;

  #ifdef HAS_NORMALS
    // in vec4 NORMAL;
    in vec4 normals;
  #endif

  #ifdef HAS_TANGENTS
    in vec4 TANGENT;
  #endif

  #ifdef HAS_UV
    // in vec2 TEXCOORD_0;
    in vec2 texCoords;
  #endif

  #ifdef HAS_UV_1
    in vec2 texCoords1;
  #endif

  #ifdef HAS_SKIN
    in uvec4 JOINTS_0;
    in vec4 WEIGHTS_0;
  #endif

  #ifdef HAS_GLTF_INSTANCING
    in vec4 instanceModelMatrixCol0;
    in vec4 instanceModelMatrixCol1;
    in vec4 instanceModelMatrixCol2;
    in vec4 instanceModelMatrixCol3;
  #endif

  #ifdef HAS_GPU_CROWD_ANIMATION
    in vec4 instanceAnimationFrames;
    in vec4 instanceAnimationBlend;
  #endif

  void main(void) {
    vec4 _NORMAL = vec4(0.);
    vec4 _TANGENT = vec4(0.);
    vec2 _TEXCOORD_0 = vec2(0.);
    vec2 _TEXCOORD_1 = vec2(0.);

    #ifdef HAS_NORMALS
      _NORMAL = normals;
    #endif

    #ifdef HAS_TANGENTS
      _TANGENT = TANGENT;
    #endif

    #ifdef HAS_UV
      _TEXCOORD_0 = texCoords;
    #endif

    #ifdef HAS_UV_1
      _TEXCOORD_1 = texCoords1;
    #endif

    vec4 pos = positions;

    #ifdef HAS_INSTANCED_MORPH
      vec4 animationFrames = vec4(0.0);
      vec4 animationBlend = vec4(0.0);
      #ifdef HAS_GPU_CROWD_ANIMATION
        animationFrames = instanceAnimationFrames;
        animationBlend = instanceAnimationBlend;
      #endif
      pos.xyz += getGPUCrowdMorphDelta(
        uint(gl_InstanceID),
        uint(gl_VertexID),
        0u,
        uint(CROWD_MORPH_TARGET_COUNT),
        uint(CROWD_ANIMATION_JOINT_COUNT),
        animationFrames,
        animationBlend
      );
      #ifdef HAS_NORMALS
        _NORMAL.xyz = normalize(_NORMAL.xyz + getGPUCrowdMorphDelta(
          uint(gl_InstanceID),
          uint(gl_VertexID),
          1u,
          uint(CROWD_MORPH_TARGET_COUNT),
          uint(CROWD_ANIMATION_JOINT_COUNT),
          animationFrames,
          animationBlend
        ));
      #endif
      #ifdef HAS_TANGENTS
        _TANGENT.xyz = normalize(_TANGENT.xyz + getGPUCrowdMorphDelta(
          uint(gl_InstanceID),
          uint(gl_VertexID),
          2u,
          uint(CROWD_MORPH_TARGET_COUNT),
          uint(CROWD_ANIMATION_JOINT_COUNT),
          animationFrames,
          animationBlend
        ));
      #endif
    #endif

    #ifdef HAS_SKIN
      #ifdef HAS_GPU_CROWD_ANIMATION
        mat4 skinMat = getGPUAnimatedSkinMatrix(
          WEIGHTS_0,
          JOINTS_0,
          instanceAnimationFrames,
          instanceAnimationBlend
        );
      #else
      #ifdef HAS_INSTANCED_SKIN
        mat4 skinMat = getInstancedSkinMatrix(
          WEIGHTS_0,
          JOINTS_0,
          uint(gl_InstanceID),
          uint(CROWD_JOINTS_PER_INSTANCE)
        );
      #else
      mat4 skinMat = getSkinMatrix(WEIGHTS_0, JOINTS_0);
      #endif
      #endif
      pos = skinMat * pos;
      _NORMAL = skinMat * _NORMAL;
      _TANGENT = vec4((skinMat * vec4(_TANGENT.xyz, 0.)).xyz, _TANGENT.w);
    #endif

    #ifdef HAS_GLTF_INSTANCING
      mat4 instanceMatrix = mat4(
        instanceModelMatrixCol0,
        instanceModelMatrixCol1,
        instanceModelMatrixCol2,
        instanceModelMatrixCol3
      );
      #ifdef HAS_GPU_CROWD_ANIMATION
        instanceMatrix *= sampleGPUAnimationMatrix(
          instanceAnimationFrames,
          instanceAnimationBlend,
          0
        );
      #endif
      pos = instanceMatrix * pos;
      _NORMAL = vec4(normalize(transpose(inverse(mat3(instanceMatrix))) * _NORMAL.xyz), 0.0);
      _TANGENT = vec4(normalize(mat3(instanceMatrix) * _TANGENT.xyz), _TANGENT.w);
    #endif

    pbr_setPositionNormalTangentUV(pos, _NORMAL, _TANGENT, _TEXCOORD_0, _TEXCOORD_1);
    gl_Position = pbrProjection.modelViewProjectionMatrix * pos;
  }
`,X3=`#version 300 es
  out vec4 fragmentColor;

  void main(void) {
    vec3 pos = pbr_vPosition;
    fragmentColor = pbr_filterColor(vec4(1.0));
  }
`;function ud(r,e){const t=e.materialFactory||new HA(r,{modules:[sn]}),i={...e.parsedPPBRMaterial.uniforms};delete i.camera;const o=Object.fromEntries(Object.entries({...i,...e.parsedPPBRMaterial.bindings}).filter(([d,m])=>t.ownsBinding(d)&&J3(m))),c=t.createMaterial({id:e.id,bindings:o});return c.setProps({pbrMaterial:i}),c}function Y3(r,e){var Zi,di;const{id:t,geometry:i,parsedPPBRMaterial:o,vertexCount:c,modelOptions:d={},instanceMatrices:m,morphTargets:_=[]}=e,T=(Zi=d.userData)==null?void 0:Zi.gltfAnimatedCrowd;if(T&&m)throw new Error("Nested glTF crowd instancing is unsupported");Je.info(4,"createGLTFModel defines: ",o.defines)();const y=[],w={depthWriteEnabled:!0,depthCompare:"less",depthFormat:"depth24plus",cullMode:"back"},M={},N=[],O=[],F=[],W=!!(T!=null&&T.gpuAnimation);if(m||T)for(let wt=0;wt<4;wt++){const Gt=new Float32Array(((T==null?void 0:T.capacity)||(m==null?void 0:m.length)||0)*4);m==null||m.forEach((Rn,Ir)=>{for(let Vr=0;Vr<4;Vr++)Gt[Ir*4+Vr]=Rn[wt*4+Vr]});const sr=`instanceModelMatrixCol${wt}`,on=r.createBuffer({id:`${t||"gltf"}-${sr}`,data:Gt,usage:ur.VERTEX|ur.COPY_DST});M[sr]=on,N.push({name:sr,format:"float32x4",stepMode:"instance"}),y.push(on),O.push(on),F.push(Gt)}let j,q,J,Z;if(T&&W){j=new Float32Array(T.capacity*4),J=new Float32Array(T.capacity*4);for(const[wt,Gt]of[["instanceAnimationFrames",j],["instanceAnimationBlend",J]]){const sr=r.createBuffer({id:`${t||"gltf"}-${wt}`,data:Gt,usage:ur.VERTEX|ur.COPY_DST});M[wt]=sr,N.push({name:wt,format:"float32x4",stepMode:"instance"}),y.push(sr),wt==="instanceAnimationFrames"?q=sr:Z=sr}}const Y=!!o.defines.HAS_SKIN,se=!!(T&&Y&&!W);let he,ue;T&&se&&(ue=new Float32Array(T.capacity*T.jointsPerInstance*16),he=r.type==="webgpu"?r.createBuffer({id:`${t||"gltf"}-crowd-joint-matrices`,byteLength:ue.byteLength,usage:ur.STORAGE|ur.COPY_DST}):r.createTexture({id:`${t||"gltf"}-crowd-joint-matrices`,format:"rgba32float",width:T.jointsPerInstance*4,height:T.capacity,usage:ct.SAMPLE|ct.COPY_DST,sampler:{minFilter:"nearest",magFilter:"nearest",mipmapFilter:"nearest"}}),y.push(he));const $=T?_.length:0,Q=Math.floor((((di=i.attributes.POSITION)==null?void 0:di.value.length)||0)/3);let U,be,ve;if(T&&$>0&&Q>0){const wt=new Float32Array($*3*Q*4);for(const[Gt,sr]of _.entries())for(const[on,Rn]of["POSITION","NORMAL","TANGENT"].entries()){const Ir=sr[Rn];if(!Ir)continue;const Vr=Rn==="TANGENT"&&Ir.length===Q*4?4:3;for(let Nn=0;Nn<Q;Nn++){const pi=((Gt*3+on)*Q+Nn)*4,mi=Nn*Vr;wt[pi]=Ir[mi]||0,wt[pi+1]=Ir[mi+1]||0,wt[pi+2]=Ir[mi+2]||0}}if(U=Ea(r,`${t||"gltf"}-crowd-morph-targets`,wt,Q,$*3),y.push(U),!W){const Gt=Math.ceil($/4);be=new Float32Array(T.capacity*Gt*4),ve=Ea(r,`${t||"gltf"}-crowd-morph-weights`,be,Gt,T.capacity),y.push(ve)}}const Se=Y&&T?T.jointsPerInstance:0,Ie=4+Se*4+$;let Le,Be;T!=null&&T.gpuAnimation&&(Be=new Float32Array(T.gpuAnimation.frameCount*Ie*4),Le=Ea(r,`${t||"gltf"}-crowd-animation-frames`,Be,Ie,T.gpuAnimation.frameCount),y.push(Le));let Ke=K3;for(const[wt,Gt]of[["CROWD_JOINTS_PER_INSTANCE",(T==null?void 0:T.jointsPerInstance)||0],["CROWD_MORPH_VERTEX_COUNT",Q],["CROWD_MORPH_TARGET_COUNT",$],["CROWD_ANIMATION_JOINT_COUNT",Se],["CROWD_ANIMATION_FRAME_STRIDE",Ie]])Ke=Ke.replaceAll(`u32(${wt})`,`u32(${Gt})`);const Ze={id:t,source:Ke,vs:$3,fs:X3,geometry:i,topology:i.topology,vertexCount:c,modules:[sn,S2,...T?[C2]:[]],...d,...m||T?{attributes:{...d.attributes,...M},bufferLayout:[...d.bufferLayout||[],...N],instanceCount:(m==null?void 0:m.length)||0,isInstanced:!0}:{},defines:{...o.defines,...d.defines,...m||T?{HAS_GLTF_INSTANCING:!0}:{},...se?{HAS_INSTANCED_SKIN:!0,CROWD_JOINTS_PER_INSTANCE:T.jointsPerInstance}:{},...W?{HAS_GPU_CROWD_ANIMATION:!0,CROWD_ANIMATION_FRAME_STRIDE:Ie}:{},...U?{HAS_INSTANCED_MORPH:!0,CROWD_MORPH_TARGET_COUNT:$}:{},...T?{CROWD_ANIMATION_JOINT_COUNT:Se}:{}},parameters:{...w,...o.parameters,...d.parameters}},Ge=e.material||ud(r,{id:t?`${t}-material`:void 0,parsedPPBRMaterial:o});Ze.material=Ge;const ze=new DA(r,Ze),st={...o.uniforms,...d.uniforms,...o.bindings,...d.bindings},jt=Z3(ze.shaderInputs.getModules(),Ge,st);ze.shaderInputs.setProps(jt),he&&ze.shaderInputs.setProps({skin:{jointMatrices:[],skinJointMatrices:he}}),(Le||U||ve)&&ze.shaderInputs.setProps({gpuAnimation:{...Le?{gpuAnimationFrames:Le}:{},...U?{gpuMorphTargets:U}:{},...ve?{gpuMorphWeights:ve}:{}}});const Ji=new vn({managedResources:y,model:ze,bounds:e.bounds,instanceMatrices:m});return T&&(Ji.userData.gltfAnimatedCrowd={transformBuffers:O,transformColumns:F,skinJointMatrices:he,jointMatrices:ue,jointsPerInstance:T.jointsPerInstance,morphTargetCount:$,morphTargetData:U,morphWeights:be,morphWeightData:ve,animationFrames:Le,animationFrameValues:Be,animationFrameStride:Ie,animationJointCount:Se,animationParameters:j,animationParameterBuffer:q,animationBlend:J,animationBlendBuffer:Z}),Ji}function Ea(r,e,t,i,o){if(r.type==="webgpu")return r.createBuffer({id:e,data:t,usage:ur.STORAGE|ur.COPY_DST});const c=r.createTexture({id:e,format:"rgba32float",width:i,height:o,usage:ct.SAMPLE|ct.COPY_DST,sampler:{minFilter:"nearest",magFilter:"nearest",mipmapFilter:"nearest"}});return c.writeData(t,{width:i,height:o}),c}function J3(r){return r instanceof ur||r instanceof nA||r instanceof lf||r instanceof ct||r instanceof Af}function Z3(r,e,t){const i=new Map;for(const c of r){for(const d of Object.keys(c.uniformTypes||{}))i.set(d,c.name);for(const d of c.bindingLayout||[])i.set(d.name,c.name)}const o={};for(const[c,d]of Object.entries(t)){if(d===void 0)continue;const m=i.get(c);!m||e.ownsModule(m)||(o[m]||(o[m]={}),o[m][c]=d)}return o}function eS(r,e){var d,m;const t=(m=(d=e.extensions)==null?void 0:d.EXT_mesh_gpu_instancing)==null?void 0:m.attributes;if(!t||typeof t!="object")return null;const i={};let o;for(const[_,T]of Object.entries(t)){const y=typeof T=="number"?r.accessors[T]:T;if(!y||!ArrayBuffer.isView(y.value))throw new Error(`Invalid glTF instance accessor for ${_}`);if(o!==void 0&&y.count!==o)throw new Error("glTF instance attributes must have matching accessor counts");o=y.count,i[_]={value:y.value,size:y.components||tS(y.type),count:y.count,normalized:!!y.normalized}}const c=[];for(let _=0;_<(o||0);_++){const T=xa(i.TRANSLATION,_,[0,0,0]),y=xa(i.ROTATION,_,[0,0,0,1]),w=xa(i.SCALE,_,[1,1,1]),M=Math.hypot(...y);if(M>0)for(let N=0;N<y.length;N++)y[N]/=M;c.push(new we().translate(T).multiplyRight(new we().fromQuaternion(y)).scale(w))}return{matrices:c,attributes:i}}function xa(r,e,t){if(!r)return[...t];const i=r.value;return t.map((o,c)=>{const d=i[e*r.size+c];return d===void 0?o:r.normalized?r.value instanceof Int8Array?Math.max(d/127,-1):r.value instanceof Int16Array?Math.max(d/32767,-1):r.value instanceof Uint8Array?d/255:r.value instanceof Uint16Array?d/65535:d:d})}function tS(r){switch(r){case"VEC2":return 2;case"VEC3":return 3;case"VEC4":return 4;default:return 1}}function fd(r,e){r.userData.morphWeights=[...e];const t=r.userData.morphMeshes||[];for(const i of t)i.preorderTraversal(o=>{if(!(o instanceof vn))return;const c=o.userData.morphTargets;c&&(z2(o.model,c.geometry,c.targets,e),o.userData.morphWeights=[...e])})}var Fe;(function(r){r[r.POINTS=0]="POINTS",r[r.LINES=1]="LINES",r[r.LINE_LOOP=2]="LINE_LOOP",r[r.LINE_STRIP=3]="LINE_STRIP",r[r.TRIANGLES=4]="TRIANGLES",r[r.TRIANGLE_STRIP=5]="TRIANGLE_STRIP",r[r.TRIANGLE_FAN=6]="TRIANGLE_FAN",r[r.ONE=1]="ONE",r[r.SRC_ALPHA=770]="SRC_ALPHA",r[r.ONE_MINUS_SRC_ALPHA=771]="ONE_MINUS_SRC_ALPHA",r[r.FUNC_ADD=32774]="FUNC_ADD",r[r.LINEAR=9729]="LINEAR",r[r.NEAREST=9728]="NEAREST",r[r.NEAREST_MIPMAP_NEAREST=9984]="NEAREST_MIPMAP_NEAREST",r[r.LINEAR_MIPMAP_NEAREST=9985]="LINEAR_MIPMAP_NEAREST",r[r.NEAREST_MIPMAP_LINEAR=9986]="NEAREST_MIPMAP_LINEAR",r[r.LINEAR_MIPMAP_LINEAR=9987]="LINEAR_MIPMAP_LINEAR",r[r.TEXTURE_MAG_FILTER=10240]="TEXTURE_MAG_FILTER",r[r.TEXTURE_MIN_FILTER=10241]="TEXTURE_MIN_FILTER",r[r.TEXTURE_WRAP_S=10242]="TEXTURE_WRAP_S",r[r.TEXTURE_WRAP_T=10243]="TEXTURE_WRAP_T",r[r.REPEAT=10497]="REPEAT",r[r.CLAMP_TO_EDGE=33071]="CLAMP_TO_EDGE",r[r.MIRRORED_REPEAT=33648]="MIRRORED_REPEAT",r[r.UNPACK_FLIP_Y_WEBGL=37440]="UNPACK_FLIP_Y_WEBGL"})(Fe||(Fe={}));function rS(r){switch(r){case Fe.POINTS:return"point-list";case Fe.LINES:return"line-list";case Fe.LINE_STRIP:return"line-strip";case Fe.TRIANGLES:return"triangle-list";case Fe.TRIANGLE_STRIP:return"triangle-strip";default:throw new Error(String(r))}}function nS(r,e,t){if(r!==Fe.LINE_LOOP&&r!==Fe.TRIANGLE_FAN)return{topology:rS(r)};const i=(e==null?void 0:e.length)??t,o=r===Fe.LINE_LOOP?i>=2?i*2:0:i>=3?(i-2)*3:0,c=e instanceof Uint32Array||!e&&t>65536?Uint32Array:Uint16Array,d=new c(o),m=_=>(e==null?void 0:e[_])??_;if(r===Fe.LINE_LOOP){for(let _=0;_<i;_++)d[_*2]=m(_),d[_*2+1]=m((_+1)%i);return{topology:"line-list",indices:d}}for(let _=0;_<i-2;_++)d[_*3]=m(0),d[_*3+1]=m(_+1),d[_*3+2]=m(_+2);return{topology:"triangle-list",indices:d}}const s0=[ht("baseColor","pbr_baseColorSampler","baseColorTexture",["pbrMetallicRoughness","baseColorTexture"]),ht("metallicRoughness","pbr_metallicRoughnessSampler","metallicRoughnessTexture",["pbrMetallicRoughness","metallicRoughnessTexture"]),ht("normal","pbr_normalSampler","normalTexture",["normalTexture"]),ht("occlusion","pbr_occlusionSampler","occlusionTexture",["occlusionTexture"]),ht("emissive","pbr_emissiveSampler","emissiveTexture",["emissiveTexture"]),ht("specularColor","pbr_specularColorSampler","KHR_materials_specular.specularColorTexture",["extensions","KHR_materials_specular","specularColorTexture"]),ht("specularIntensity","pbr_specularIntensitySampler","KHR_materials_specular.specularTexture",["extensions","KHR_materials_specular","specularTexture"]),ht("transmission","pbr_transmissionSampler","KHR_materials_transmission.transmissionTexture",["extensions","KHR_materials_transmission","transmissionTexture"]),ht("thickness","pbr_thicknessSampler","KHR_materials_volume.thicknessTexture",["extensions","KHR_materials_volume","thicknessTexture"]),ht("clearcoat","pbr_clearcoatSampler","KHR_materials_clearcoat.clearcoatTexture",["extensions","KHR_materials_clearcoat","clearcoatTexture"]),ht("clearcoatRoughness","pbr_clearcoatRoughnessSampler","KHR_materials_clearcoat.clearcoatRoughnessTexture",["extensions","KHR_materials_clearcoat","clearcoatRoughnessTexture"]),ht("clearcoatNormal","pbr_clearcoatNormalSampler","KHR_materials_clearcoat.clearcoatNormalTexture",["extensions","KHR_materials_clearcoat","clearcoatNormalTexture"]),ht("sheenColor","pbr_sheenColorSampler","KHR_materials_sheen.sheenColorTexture",["extensions","KHR_materials_sheen","sheenColorTexture"]),ht("sheenRoughness","pbr_sheenRoughnessSampler","KHR_materials_sheen.sheenRoughnessTexture",["extensions","KHR_materials_sheen","sheenRoughnessTexture"]),ht("iridescence","pbr_iridescenceSampler","KHR_materials_iridescence.iridescenceTexture",["extensions","KHR_materials_iridescence","iridescenceTexture"]),ht("iridescenceThickness","pbr_iridescenceThicknessSampler","KHR_materials_iridescence.iridescenceThicknessTexture",["extensions","KHR_materials_iridescence","iridescenceThicknessTexture"]),ht("anisotropy","pbr_anisotropySampler","KHR_materials_anisotropy.anisotropyTexture",["extensions","KHR_materials_anisotropy","anisotropyTexture"]),ht("bump","pbr_bumpSampler","EXT_materials_bump.bumpTexture",["extensions","EXT_materials_bump","bumpTexture"]),ht("diffuseTransmission","pbr_diffuseTransmissionSampler","KHR_materials_diffuse_transmission.diffuseTransmissionTexture",["extensions","KHR_materials_diffuse_transmission","diffuseTransmissionTexture"]),ht("diffuseTransmissionColor","pbr_diffuseTransmissionColorSampler","KHR_materials_diffuse_transmission.diffuseTransmissionColorTexture",["extensions","KHR_materials_diffuse_transmission","diffuseTransmissionColorTexture"]),ht("multiscatterColor","pbr_multiscatterColorSampler","KHR_materials_volume_scatter.multiscatterColorTexture",["extensions","KHR_materials_volume_scatter","multiscatterColorTexture"])],iS=new Map(s0.map(r=>[r.slot,r]));function ht(r,e,t,i){return{slot:r,binding:e,displayName:t,pathSegments:i,colorSpace:r==="baseColor"||r==="emissive"||r==="specularColor"||r==="sheenColor"||r==="diffuseTransmissionColor"||r==="multiscatterColor"?"srgb":"linear",uvSetUniform:`${r}UVSet`,uvTransformUniform:`${r}UVTransform`}}function sS(){return s0}function hd(r){const e=iS.get(r);if(!e)throw new Error(`Unknown PBR texture transform slot ${r}`);return e}function dd(r){var t;const e=(t=r==null?void 0:r.extensions)==null?void 0:t.KHR_texture_transform;return{offset:e!=null&&e.offset?[e.offset[0],e.offset[1]]:[0,0],rotation:(e==null?void 0:e.rotation)??0,scale:e!=null&&e.scale?[e.scale[0],e.scale[1]]:[1,1]}}function pd(r){var t;const e=(t=r==null?void 0:r.extensions)==null?void 0:t.KHR_texture_transform;return(e==null?void 0:e.texCoord)??(r==null?void 0:r.texCoord)??0}function oS(r){return s0.find(e=>e.pathSegments.length===r.length&&e.pathSegments.every((t,i)=>r[i]===t))||null}function wA(r){const e=new rt().set(1,0,0,0,1,0,r.offset[0],r.offset[1],1),t=new rt().set(Math.cos(r.rotation),Math.sin(r.rotation),0,-Math.sin(r.rotation),Math.cos(r.rotation),0,0,0,1),i=new rt().set(r.scale[0],0,0,0,r.scale[1],0,0,0,1);return Array.from(e.multiplyRight(t).multiplyRight(i))}function aS(r,e){const t=new rt(wA(r)),i=new rt(wA(e)),o=new rt(t).invert();return Array.from(i.multiplyRight(o))}function AS(r={}){var _,T,y,w;const e=r.wrapS??((_=r.parameters)==null?void 0:_[Fe.TEXTURE_WRAP_S]),t=r.wrapT??((T=r.parameters)==null?void 0:T[Fe.TEXTURE_WRAP_T]),i=r.magFilter??((y=r.parameters)==null?void 0:y[Fe.TEXTURE_MAG_FILTER]),o=r.minFilter??((w=r.parameters)==null?void 0:w[Fe.TEXTURE_MIN_FILTER]),c=Bl(e),d=Bl(t),m=cS(i);return{...c?{addressModeU:c}:{},...d?{addressModeV:d}:{},...m?{magFilter:m}:{},...lS(o)}}function Bl(r){switch(r){case Fe.CLAMP_TO_EDGE:return"clamp-to-edge";case Fe.REPEAT:return"repeat";case Fe.MIRRORED_REPEAT:return"mirror-repeat";default:return}}function cS(r){switch(r){case Fe.NEAREST:return"nearest";case Fe.LINEAR:return"linear";default:return}}function lS(r){switch(r){case Fe.NEAREST:return{minFilter:"nearest"};case Fe.LINEAR:return{minFilter:"linear"};case Fe.NEAREST_MIPMAP_NEAREST:return{minFilter:"nearest",mipmapFilter:"nearest"};case Fe.LINEAR_MIPMAP_NEAREST:return{minFilter:"linear",mipmapFilter:"nearest"};case Fe.NEAREST_MIPMAP_LINEAR:return{minFilter:"nearest",mipmapFilter:"linear"};case Fe.LINEAR_MIPMAP_LINEAR:return{minFilter:"linear",mipmapFilter:"linear"};default:return{}}}const uS={NORMAL:["NORMAL","normals"],TANGENT:["TANGENT"],TEXCOORD_0:["TEXCOORD_0","texCoords"],TEXCOORD_1:["TEXCOORD_1","texCoords1"],JOINTS_0:["JOINTS_0"],WEIGHTS_0:["WEIGHTS_0"],COLOR_0:["COLOR_0","colors"]};function md(r,e,t,i){const o={defines:{MANUAL_SRGB:!0},bindings:{},uniforms:{camera:[0,0,0],metallicRoughnessValues:[1,1]},parameters:{},glParameters:{},generatedTextures:[]};o.defines.USE_TEX_LOD=!0;const{imageBasedLightingEnvironment:c}=i;return c&&(o.bindings.pbr_diffuseEnvSampler=c.diffuseEnvSampler.texture,o.bindings.pbr_specularEnvSampler=c.specularEnvSampler.texture,o.bindings.pbr_brdfLUT=c.brdfLutTexture.texture,o.uniforms.IBLenabled=!0,o.uniforms.scaleIBLAmbient=[1,1]),i!=null&&i.pbrDebug&&(o.defines.PBR_DEBUG=!0,o.uniforms.scaleDiffBaseMR=[0,0,0,0],o.uniforms.scaleFGDSpec=[0,0,0,0]),br(t,"NORMAL")&&(o.defines.HAS_NORMALS=!0),br(t,"TANGENT")&&(i!=null&&i.useTangents)&&(o.defines.HAS_TANGENTS=!0),br(t,"TEXCOORD_0")&&(o.defines.HAS_UV=!0),br(t,"TEXCOORD_1")&&(o.defines.HAS_UV_1=!0),br(t,"JOINTS_0")&&br(t,"WEIGHTS_0")&&(o.defines.HAS_SKIN=!0),br(t,"COLOR_0")&&(o.defines.HAS_COLORS=!0),i!=null&&i.imageBasedLightingEnvironment&&(o.defines.USE_IBL=!0),i!=null&&i.lights&&(o.defines.USE_LIGHTS=!0),e&&(i.validateAttributes!==!1&&fS(e,t),dS(r,e,o,t,i.gltf)),o}function fS(r,e){var d;const t=Dl(r,0);t.length>0&&!br(e,"TEXCOORD_0")&&Je.warn(`glTF material uses ${t.join(", ")} but primitive is missing TEXCOORD_0; textured shading will sample the default UV coordinates`)();const i=Dl(r,1);if(i.length>0&&!br(e,"TEXCOORD_1")&&Je.warn(`glTF material uses ${i.join(", ")} with TEXCOORD_1 but primitive is missing TEXCOORD_1; those textures will be skipped`)(),!!(r.unlit||(d=r.extensions)!=null&&d.KHR_materials_unlit)||br(e,"NORMAL"))return;const c=r.normalTexture?"lit PBR shading with normalTexture":"lit PBR shading";Je.warn(`glTF primitive is missing NORMAL while using ${c}; shading will fall back to geometric normals`)()}function Dl(r,e){const t=[];for(const i of sS()){const o=hS(r,i.pathSegments);o&&pd(o)===e&&t.push(i.displayName)}return t}function br(r,e){return uS[e].some(t=>!!r[t])}function hS(r,e){let t=r;for(const i of e)if(t=t==null?void 0:t[i],!t)return null;return t}function dS(r,e,t,i,o){var c;if(t.uniforms.unlit=!!(e.unlit||(c=e.extensions)!=null&&c.KHR_materials_unlit),e.pbrMetallicRoughness&&gS(r,e.pbrMetallicRoughness,t,i,o),e.normalTexture){pt(r,e.normalTexture,"pbr_normalSampler",t,{featureOptions:{define:"HAS_NORMALMAP",enabledUniformName:"normalMapEnabled"},gltf:o,attributes:i,textureTransformSlot:"normal"});const{scale:d=1}=e.normalTexture;t.uniforms.normalScale=d}if(e.occlusionTexture){pt(r,e.occlusionTexture,"pbr_occlusionSampler",t,{featureOptions:{define:"HAS_OCCLUSIONMAP",enabledUniformName:"occlusionMapEnabled"},gltf:o,attributes:i,textureTransformSlot:"occlusion"});const{strength:d=1}=e.occlusionTexture;t.uniforms.occlusionStrength=d}switch(t.uniforms.emissiveFactor=e.emissiveFactor||[0,0,0],e.emissiveTexture&&pt(r,e.emissiveTexture,"pbr_emissiveSampler",t,{featureOptions:{define:"HAS_EMISSIVEMAP",enabledUniformName:"emissiveMapEnabled"},gltf:o,attributes:i,textureTransformSlot:"emissive"}),bS(r,e.extensions,t,o,i),e.alphaMode||"OPAQUE"){case"OPAQUE":break;case"MASK":{const{alphaCutoff:d=.5}=e;t.defines.ALPHA_CUTOFF=!0,t.uniforms.alphaCutoffEnabled=!0,t.uniforms.alphaCutoff=d;break}case"BLEND":Je.warn("glTF BLEND alphaMode might not work well because it requires mesh sorting")(),pS(t);break}}function pS(r){r.parameters.blend=!0,r.parameters.blendColorOperation="add",r.parameters.blendColorSrcFactor="src-alpha",r.parameters.blendColorDstFactor="one-minus-src-alpha",r.parameters.blendAlphaOperation="add",r.parameters.blendAlphaSrcFactor="one",r.parameters.blendAlphaDstFactor="one-minus-src-alpha",r.glParameters.blend=!0,r.glParameters.blendEquation=Fe.FUNC_ADD,r.glParameters.blendFunc=[Fe.SRC_ALPHA,Fe.ONE_MINUS_SRC_ALPHA,Fe.ONE,Fe.ONE_MINUS_SRC_ALPHA]}function mS(r){r.parameters.blend=!0,r.parameters.depthWriteEnabled=!1,r.parameters.blendColorOperation="add",r.parameters.blendColorSrcFactor="one",r.parameters.blendColorDstFactor="one-minus-src-alpha",r.parameters.blendAlphaOperation="add",r.parameters.blendAlphaSrcFactor="one",r.parameters.blendAlphaDstFactor="one-minus-src-alpha",r.glParameters.blend=!0,r.glParameters.depthMask=!1,r.glParameters.blendEquation=Fe.FUNC_ADD,r.glParameters.blendFunc=[Fe.ONE,Fe.ONE_MINUS_SRC_ALPHA,Fe.ONE,Fe.ONE_MINUS_SRC_ALPHA]}function gS(r,e,t,i,o){e.baseColorTexture&&pt(r,e.baseColorTexture,"pbr_baseColorSampler",t,{featureOptions:{define:"HAS_BASECOLORMAP",enabledUniformName:"baseColorMapEnabled"},gltf:o,attributes:i,textureTransformSlot:"baseColor"}),t.uniforms.baseColorFactor=e.baseColorFactor||[1,1,1,1],e.metallicRoughnessTexture&&pt(r,e.metallicRoughnessTexture,"pbr_metallicRoughnessSampler",t,{featureOptions:{define:"HAS_METALROUGHNESSMAP",enabledUniformName:"metallicRoughnessMapEnabled"},gltf:o,attributes:i,textureTransformSlot:"metallicRoughness"});const{metallicFactor:c=1,roughnessFactor:d=1}=e;t.uniforms.metallicRoughnessValues=[c,d]}function bS(r,e,t,i,o={}){e&&(_S(e)&&(t.defines.USE_MATERIAL_EXTENSIONS=!0),TS(r,e.KHR_materials_specular,t,i,o),vS(e.KHR_materials_ior,t),SS(r,e.EXT_materials_bump,t,i,o),yS(r,e.KHR_materials_transmission,t,i,o),wS(r,e.KHR_materials_diffuse_transmission,t,i,o),ES(r,e.KHR_materials_volume,t,i,o),xS(r,e.KHR_materials_volume_scatter,e.KHR_materials_volume,t,i,o),CS(e.KHR_materials_dispersion,t),MS(r,e.KHR_materials_clearcoat,t,i,o),IS(r,e.KHR_materials_sheen,t,i,o),RS(r,e.KHR_materials_iridescence,t,i,o),NS(r,e.KHR_materials_anisotropy,t,i,o),PS(e.KHR_materials_emissive_strength,t))}function _S(r){return!!(r.KHR_materials_specular||r.KHR_materials_ior||r.EXT_materials_bump||r.KHR_materials_transmission||r.KHR_materials_diffuse_transmission||r.KHR_materials_volume||r.KHR_materials_volume_scatter||r.KHR_materials_dispersion||r.KHR_materials_clearcoat||r.KHR_materials_sheen||r.KHR_materials_iridescence||r.KHR_materials_anisotropy)}function TS(r,e,t,i,o={}){e&&(e.specularColorFactor&&(t.uniforms.specularColorFactor=e.specularColorFactor),e.specularFactor!==void 0&&(t.uniforms.specularIntensityFactor=e.specularFactor),e.specularColorTexture&&pt(r,e.specularColorTexture,"pbr_specularColorSampler",t,{featureOptions:{define:"HAS_SPECULARCOLORMAP",enabledUniformName:"specularColorMapEnabled"},gltf:i,attributes:o,textureTransformSlot:"specularColor"}),e.specularTexture&&pt(r,e.specularTexture,"pbr_specularIntensitySampler",t,{featureOptions:{define:"HAS_SPECULARINTENSITYMAP",enabledUniformName:"specularIntensityMapEnabled"},gltf:i,attributes:o,textureTransformSlot:"specularIntensity"}))}function vS(r,e){(r==null?void 0:r.ior)!==void 0&&(e.uniforms.ior=r.ior)}function yS(r,e,t,i,o={}){e&&(e.transmissionFactor!==void 0&&(t.uniforms.transmissionFactor=e.transmissionFactor),e.transmissionTexture&&pt(r,e.transmissionTexture,"pbr_transmissionSampler",t,{featureOptions:{define:"HAS_TRANSMISSIONMAP",enabledUniformName:"transmissionMapEnabled"},gltf:i,attributes:o,textureTransformSlot:"transmission"}),((e.transmissionFactor??0)>0||e.transmissionTexture)&&(Je.warn("KHR_materials_transmission uses a premultiplied-alpha blending approximation and may require mesh sorting")(),mS(t)))}function SS(r,e,t,i,o={}){e&&(t.uniforms.bumpFactor=Math.max(e.bumpFactor??1,0),e.bumpTexture&&pt(r,e.bumpTexture,"pbr_bumpSampler",t,{featureOptions:{define:"HAS_BUMPMAP",enabledUniformName:"bumpMapEnabled"},gltf:i,attributes:o,textureTransformSlot:"bump"}))}function wS(r,e,t,i,o={}){e&&(t.uniforms.diffuseTransmissionFactor=Math.min(Math.max(e.diffuseTransmissionFactor??0,0),1),t.uniforms.diffuseTransmissionColorFactor=e.diffuseTransmissionColorFactor||[1,1,1],e.diffuseTransmissionTexture&&pt(r,e.diffuseTransmissionTexture,"pbr_diffuseTransmissionSampler",t,{featureOptions:{define:"HAS_DIFFUSETRANSMISSIONMAP",enabledUniformName:"diffuseTransmissionMapEnabled"},gltf:i,attributes:o,textureTransformSlot:"diffuseTransmission"}),e.diffuseTransmissionColorTexture&&pt(r,e.diffuseTransmissionColorTexture,"pbr_diffuseTransmissionColorSampler",t,{featureOptions:{define:"HAS_DIFFUSETRANSMISSIONCOLORMAP",enabledUniformName:"diffuseTransmissionColorMapEnabled"},gltf:i,attributes:o,textureTransformSlot:"diffuseTransmissionColor"}))}function ES(r,e,t,i,o={}){e&&(e.thicknessFactor!==void 0&&(t.uniforms.thicknessFactor=e.thicknessFactor),e.thicknessTexture&&pt(r,e.thicknessTexture,"pbr_thicknessSampler",t,{featureOptions:{define:"HAS_THICKNESSMAP"},gltf:i,attributes:o,textureTransformSlot:"thickness"}),e.attenuationDistance!==void 0&&(t.uniforms.attenuationDistance=e.attenuationDistance),e.attenuationColor&&(t.uniforms.attenuationColor=e.attenuationColor))}function xS(r,e,t,i,o,c={}){!e||!t||(i.uniforms.multiscatterColorFactor=e.multiscatterColorFactor||e.multiscatterColor||[0,0,0],i.uniforms.scatterAnisotropy=Math.min(Math.max(e.scatterAnisotropy??0,-.999),.999),e.multiscatterColorTexture&&pt(r,e.multiscatterColorTexture,"pbr_multiscatterColorSampler",i,{featureOptions:{define:"HAS_MULTISCATTERCOLORMAP",enabledUniformName:"multiscatterColorMapEnabled"},gltf:o,attributes:c,textureTransformSlot:"multiscatterColor"}))}function CS(r,e){(r==null?void 0:r.dispersion)!==void 0&&(e.uniforms.dispersion=Math.max(r.dispersion,0))}function MS(r,e,t,i,o={}){e&&(e.clearcoatFactor!==void 0&&(t.uniforms.clearcoatFactor=e.clearcoatFactor),e.clearcoatRoughnessFactor!==void 0&&(t.uniforms.clearcoatRoughnessFactor=e.clearcoatRoughnessFactor),e.clearcoatTexture&&pt(r,e.clearcoatTexture,"pbr_clearcoatSampler",t,{featureOptions:{define:"HAS_CLEARCOATMAP",enabledUniformName:"clearcoatMapEnabled"},gltf:i,attributes:o,textureTransformSlot:"clearcoat"}),e.clearcoatRoughnessTexture&&pt(r,e.clearcoatRoughnessTexture,"pbr_clearcoatRoughnessSampler",t,{featureOptions:{define:"HAS_CLEARCOATROUGHNESSMAP",enabledUniformName:"clearcoatRoughnessMapEnabled"},gltf:i,attributes:o,textureTransformSlot:"clearcoatRoughness"}),e.clearcoatNormalTexture&&pt(r,e.clearcoatNormalTexture,"pbr_clearcoatNormalSampler",t,{featureOptions:{define:"HAS_CLEARCOATNORMALMAP"},gltf:i,attributes:o,textureTransformSlot:"clearcoatNormal"}))}function IS(r,e,t,i,o={}){e&&(e.sheenColorFactor&&(t.uniforms.sheenColorFactor=e.sheenColorFactor),e.sheenRoughnessFactor!==void 0&&(t.uniforms.sheenRoughnessFactor=e.sheenRoughnessFactor),e.sheenColorTexture&&pt(r,e.sheenColorTexture,"pbr_sheenColorSampler",t,{featureOptions:{define:"HAS_SHEENCOLORMAP",enabledUniformName:"sheenColorMapEnabled"},gltf:i,attributes:o,textureTransformSlot:"sheenColor"}),e.sheenRoughnessTexture&&pt(r,e.sheenRoughnessTexture,"pbr_sheenRoughnessSampler",t,{featureOptions:{define:"HAS_SHEENROUGHNESSMAP",enabledUniformName:"sheenRoughnessMapEnabled"},gltf:i,attributes:o,textureTransformSlot:"sheenRoughness"}))}function RS(r,e,t,i,o={}){e&&(e.iridescenceFactor!==void 0&&(t.uniforms.iridescenceFactor=e.iridescenceFactor),e.iridescenceIor!==void 0&&(t.uniforms.iridescenceIor=e.iridescenceIor),(e.iridescenceThicknessMinimum!==void 0||e.iridescenceThicknessMaximum!==void 0)&&(t.uniforms.iridescenceThicknessRange=[e.iridescenceThicknessMinimum??100,e.iridescenceThicknessMaximum??400]),e.iridescenceTexture&&pt(r,e.iridescenceTexture,"pbr_iridescenceSampler",t,{featureOptions:{define:"HAS_IRIDESCENCEMAP",enabledUniformName:"iridescenceMapEnabled"},gltf:i,attributes:o,textureTransformSlot:"iridescence"}),e.iridescenceThicknessTexture&&pt(r,e.iridescenceThicknessTexture,"pbr_iridescenceThicknessSampler",t,{featureOptions:{define:"HAS_IRIDESCENCETHICKNESSMAP"},gltf:i,attributes:o,textureTransformSlot:"iridescenceThickness"}))}function NS(r,e,t,i,o={}){e&&(e.anisotropyStrength!==void 0&&(t.uniforms.anisotropyStrength=e.anisotropyStrength),e.anisotropyRotation!==void 0&&(t.uniforms.anisotropyRotation=e.anisotropyRotation),e.anisotropyTexture&&pt(r,e.anisotropyTexture,"pbr_anisotropySampler",t,{featureOptions:{define:"HAS_ANISOTROPYMAP",enabledUniformName:"anisotropyMapEnabled"},gltf:i,attributes:o,textureTransformSlot:"anisotropy"}))}function PS(r,e){(r==null?void 0:r.emissiveStrength)!==void 0&&(e.uniforms.emissiveStrength=r.emissiveStrength)}function pt(r,e,t,i,o={}){var W,j;const{featureOptions:c={},gltf:d,attributes:m={},textureTransformSlot:_}=o,{define:T,enabledUniformName:y}=c,w=pd(e);if(w>1){Je.warn(`Skipping ${String(t)} because ${w} is not supported; only TEXCOORD_0 and TEXCOORD_1 are currently available`)();return}if(w===1&&!br(m,"TEXCOORD_1")){Je.warn(`Skipping ${String(t)} because it requires TEXCOORD_1 but the primitive does not provide TEXCOORD_1`)();return}const M=kS(e,d),N=(j=(W=M.texture)==null?void 0:W.source)==null?void 0:j.image;if(!N){Je.warn(`Skipping unresolved glTF texture for ${String(t)}`)();return}const O={id:M.uniformName||M.id,sampler:{addressModeU:"repeat",addressModeV:"repeat",minFilter:"linear",magFilter:"linear",...AS(M.texture.sampler)}},F=LS(r,N,O);if(i.bindings[t]=F,T&&(i.defines[T]=!0),y&&(i.uniforms[y]=!0),_){const q=hd(_);i.uniforms[q.uvSetUniform]=w,i.uniforms[q.uvTransformUniform]=wA(dd(e))}i.generatedTextures.push(F)}function LS(r,e,t){if("compressed"in e)return FS(r,e,{id:t.id,sampler:t.sampler});const i=t.width!==void 0&&t.height!==void 0?{width:t.width,height:t.height}:r.getExternalImageSize(e),o=t.sampler.mipmapFilter==="nearest"||t.sampler.mipmapFilter==="linear",c=o?r.getMipLevelCount(i.width,i.height):1,d=r.createTexture({id:t.id,sampler:t.sampler,width:i.width,height:i.height,mipLevels:c,...o?{usage:ct.SAMPLE|ct.RENDER|ct.COPY_DST|ct.COPY_SRC}:{},...t.colorSpace?{format:t.colorSpace==="srgb"?"rgba8unorm-srgb":"rgba8unorm"}:{},data:e});return c>1&&(r.type==="webgl"?d.generateMipmapsWebGL():r.type==="webgpu"&&r.generateMipmapsWebGPU(d)),d}function kS(r,e){if(r.texture||r.index===void 0||!(e!=null&&e.textures))return r;const t=e.textures[r.index];return t?"texture"in t&&t.texture?{...t,...r,texture:t.texture}:"source"in t?{...r,texture:t}:r:r}function Rs(r,e){return r.createTexture({...e,format:"rgba8unorm",width:1,height:1,mipLevels:1})}function Ul(r){return r.textureFormat}function OS(r,e,t){const{blockWidth:i=1,blockHeight:o=1}=Yg.getInfo(t);let c=1;for(let d=1;;d++){const m=Math.max(1,r>>d),_=Math.max(1,e>>d);if(m<i||_<o)break;c++}return c}function FS(r,e,t){var M,N;let i;if(Array.isArray(e.data)&&((M=e.data[0])!=null&&M.data)?i=e.data:"mipmaps"in e&&Array.isArray(e.mipmaps)?i=e.mipmaps:i=[],i.length===0||!((N=i[0])!=null&&N.data))return Je.warn("createCompressedTexture: compressed image has no valid mip levels, creating fallback")(),Rs(r,t);const o=i[0],c=o.width??e.width??0,d=o.height??e.height??0;if(c<=0||d<=0)return Je.warn("createCompressedTexture: base level has invalid dimensions, creating fallback")(),Rs(r,t);const m=Ul(o);if(!m)return Je.warn("createCompressedTexture: compressed image has no textureFormat, creating fallback")(),Rs(r,t);if(!r.isTextureFormatSupported(m))return Je.warn(`createCompressedTexture: ${r.type} device does not support '${m}', creating fallback`)(),Rs(r,t);const _=OS(c,d,m),T=Math.min(i.length,_);let y=1;for(let O=1;O<T;O++){const F=i[O];if(!F.data||F.width<=0||F.height<=0){Je.warn(`createCompressedTexture: mip level ${O} has invalid data/dimensions, truncating`)();break}const W=Ul(F);if(W&&W!==m){Je.warn(`createCompressedTexture: mip level ${O} format '${W}' differs from base '${m}', truncating`)();break}const j=Math.max(1,c>>O),q=Math.max(1,d>>O);if(F.width!==j||F.height!==q){Je.warn(`createCompressedTexture: mip level ${O} dimensions ${F.width}x${F.height} don't match expected ${j}x${q}, truncating`)();break}y++}const w=r.createTexture({...t,format:m,usage:ct.TEXTURE|ct.COPY_DST,width:c,height:d,mipLevels:y,data:o.data});for(let O=1;O<y;O++)w.writeData(i[O].data,{width:i[O].width,height:i[O].height,mipLevel:O});return w}const BS={modelOptions:{},pbrDebug:!1,imageBasedLightingEnvironment:void 0,lights:!0,useTangents:!1,useByteColors:!0,strictExtensions:!1};function DS(r,e,t={}){const i=new Set,o={...BS,...t,generatedTextures:i},c=new HA(r,{modules:[sn]}),d=(e.materials||[]).map((F,W)=>ud(r,{id:HS(F,W),parsedPPBRMaterial:EA(r,F,{},{...o,gltf:e,validateAttributes:!1}),materialFactory:c})),m=new Map;(e.materials||[]).forEach((F,W)=>{m.set(F.id,d[W])});const _=new Map;e.meshes.forEach((F,W)=>{const j=Ca(r,F,e,m,o);_.set(F.id,j)});const T=new Map,y=new Map,w=new Set,M=new Set,N=new Set;return e.nodes.forEach((F,W)=>{const j=US(r,F);T.set(W,j),y.set(F.id,j)}),e.nodes.forEach((F,W)=>{var j,q,J,Z;if(T.get(W).add((F.children??[]).map(({id:Y})=>{const se=y.get(Y);if(!se)throw new Error(`Cannot find child ${Y} of node ${W}`);return se})),F.mesh){const Y=F.mesh,se=eS(e,F),he=Y.primitives.some(ve=>{var Se;return!!((Se=ve.targets)!=null&&Se.length)}),ue=se||he&&w.has(Y.id)?Ca(r,Y,e,m,o,se||void 0):_.get(Y.id);if(!ue)throw new Error(`Cannot find mesh child ${F.mesh.id} of node ${W}`);const $=T.get(W),Q=_.get(Y.id),be=M.has(Y.id)&&(F.skin!==void 0||N.has(Y.id))&&ue===Q?Ca(r,Y,e,m,o):ue;if($.add(be),$.userData.gltfMesh=be,M.add(Y.id),F.skin!==void 0&&N.add(Y.id),he){w.add(Y.id);const ve=((q=(j=Y.primitives.find(Ie=>{var Le;return(Le=Ie.targets)==null?void 0:Le.length}))==null?void 0:j.targets)==null?void 0:q.length)||0,Se=F.weights||Y.weights||new Array(ve).fill(0);$.userData.morphMeshes=[be],(Z=(J=o.modelOptions)==null?void 0:J.userData)!=null&&Z.gltfAnimatedCrowd?$.userData.morphWeights=[...Se]:fd($,Se)}}}),{scenes:e.scenes.map(F=>{const W=(F.nodes||[]).map(({id:j})=>{const q=y.get(j);if(!q)throw new Error(`Cannot find child ${j} of scene ${F.name||F.id}`);return q});return new fr({id:F.name||F.id,children:W})}),materials:d,gltfMeshIdToNodeMap:_,gltfNodeIdToNodeMap:y,gltfNodeIndexToNodeMap:T,generatedTextures:i}}function EA(r,e,t,i){const o=md(r,e,t,i);for(const c of o.generatedTextures)i.generatedTextures.add(c);return o}function US(r,e,t){var i,o;return new fr({id:e.name||e.id,children:[],matrix:e.matrix,display:((o=(i=e.extensions)==null?void 0:i.KHR_node_visibility)==null?void 0:o.visible)!==!1,position:e.translation,rotation:e.rotation,scale:e.scale})}function Ca(r,e,t,i,o,c){const m=(e.primitives||[]).map((T,y)=>VS({device:r,gltfPrimitive:T,primitiveIndex:y,gltfMesh:e,gltf:t,gltfMaterialIdToMaterialMap:i,options:o,instancing:c}));return new fr({id:e.name||e.id,children:m})}function VS({device:r,gltfPrimitive:e,primitiveIndex:t,gltfMesh:i,gltf:o,gltfMaterialIdToMaterialMap:c,options:d,instancing:m}){var j,q,J;const _=e.name||`${i.name||i.id}-primitive-${t}`,T=GS(e.attributes),y=nS(e.mode??4,(j=e.indices)==null?void 0:j.value,T),w=zS(_,e,y),M=w.vertexCount,N=jS(e,o,w),O=EA(r,e.material,w.attributes,{...d,gltf:o}),F=Y3(r,{id:_,geometry:w,material:e.material&&c.get(e.material.id)||null,parsedPPBRMaterial:O,modelOptions:d.modelOptions,vertexCount:M,bounds:[e.attributes.POSITION.min,e.attributes.POSITION.max],instanceMatrices:m==null?void 0:m.matrices,morphTargets:N==null?void 0:N.targets});m&&(F.userData.gltfInstancing=m);const W=((J=(q=e.extensions)==null?void 0:q.KHR_materials_variants)==null?void 0:J.mappings)||[];if(W.length){const Z=new Map;for(const Y of W){const se=typeof Y.material=="number"?o.materials[Y.material]:Y.material,he=se&&c.get(se.id);if(!he)continue;const ue=EA(r,se,w.attributes,{...d,gltf:o});for(const $ of Y.variants||[])Z.set($,{material:he,parameters:{...F.model.parameters,...ue.parameters,depthWriteEnabled:se.alphaMode!=="BLEND",cullMode:se.doubleSided?"none":"back"}})}F.userData.gltfMaterialVariants={defaultMaterial:F.model.material,defaultParameters:{...F.model.parameters},mappings:Z}}return N&&(F.userData.morphTargets=N),F}function jS(r,e,t){var c,d;if(!((c=r.targets)!=null&&c.length))return;const i={};for(const m of["POSITION","NORMAL","TANGENT"]){const _=(d=t.attributes[m])==null?void 0:d.value;_ instanceof Float32Array&&(i[m]=new Float32Array(_))}const o=r.targets.map(m=>{const _={};for(const T of["POSITION","NORMAL","TANGENT"]){const y=m[T],w=typeof y=="number"?e.accessors[y]:y;w!=null&&w.value&&ArrayBuffer.isView(w.value)&&(_[T]=zA(w))}return _});return{geometry:t,baseAttributes:i,targets:o}}function GS(r){let e=1/0;for(const t of Object.values(r))if(t){const{value:i,size:o,components:c}=t,d=o??c;(i==null?void 0:i.length)!==void 0&&d>=1&&(e=Math.min(e,i.length/d))}if(!Number.isFinite(e))throw new Error("Could not determine vertex count from attributes");return e}function zS(r,e,t){var o,c;const i={};for(const[d,m]of Object.entries(e.attributes)){const{components:_,size:T,value:y,normalized:w}=m,M=d==="POSITION"||d==="NORMAL"||d==="TANGENT",N=!!((o=e.targets)!=null&&o.length&&M);i[d]={size:T??_,value:N?zA({value:y,normalized:w}):y,normalized:N?!1:w}}return new Jn({id:r,topology:t.topology,indices:t.indices??((c=e.indices)==null?void 0:c.value),attributes:i})}function HS(r,e){return r.name||r.id||`material-${e}`}function Vl(r,e={}){var d,m,_,T;const t=e.lightDefinitions||r.lights||((m=(d=r.extensions)==null?void 0:d.KHR_lights_punctual)==null?void 0:m.lights);if(!t||!Array.isArray(t)||t.length===0)return[];const i=[],o=XS(r.nodes||[]),c=new Map;for(const y of r.nodes||[]){if(!qS(y,o,e.nodeVisibility))continue;const w=y.light??((T=(_=y.extensions)==null?void 0:_.KHR_lights_punctual)==null?void 0:T.light);if(typeof w!="number"||e.nodeIdentifiers&&!e.nodeIdentifiers.has(y.id))continue;const M=t[w];if(!M)continue;const N=QS(M.color||[1,1,1],e.useByteColors??!0),O=M.intensity??1,F=M.range,W=gd(y,o,c);switch(M.type){case"directional":i.push(KS(W,N,O));break;case"point":i.push(WS(W,N,O,F));break;case"spot":i.push($S(W,N,O,F,M.spot));break}}return i}function qS(r,e,t){var o,c;let i=r;for(;i;){const d=t==null?void 0:t.get(i.id);if(d?!d.display:((c=(o=i.extensions)==null?void 0:o.KHR_node_visibility)==null?void 0:c.visible)===!1)return!1;i=e.get(i.id)}return!0}function QS(r,e){return e?r.map(t=>t*255):Jg(r,!1)}function WS(r,e,t,i){const o=bd(r);let c=[1,0,0];return i!==void 0&&i>0&&(c=[1,0,1/(i*i)]),{type:"point",position:o,color:e,intensity:t,attenuation:c}}function KS(r,e,t){return{type:"directional",direction:_d(r),color:e,intensity:t}}function $S(r,e,t,i,o={}){const c=bd(r),d=_d(r);let m=[1,0,0];return i!==void 0&&i>0&&(m=[1,0,1/(i*i)]),{type:"spot",position:c,direction:d,color:e,intensity:t,attenuation:m,innerConeAngle:o.innerConeAngle??0,outerConeAngle:o.outerConeAngle??Math.PI/4}}function XS(r){const e=new Map;for(const t of r)for(const i of t.children||[])e.set(i.id,t);return e}function gd(r,e,t){const i=t.get(r.id);if(i)return i;const o=YS(r),c=e.get(r.id),d=c?new we(gd(c,e,t)).multiplyRight(o):o;return t.set(r.id,d),d}function YS(r){if(r.matrix)return new we(r.matrix);const e=new we;return r.translation&&e.translate(r.translation),r.rotation&&e.multiplyRight(new we().fromQuaternion(r.rotation)),r.scale&&e.scale(r.scale),e}function bd(r){return r.transformAsPoint([0,0,0])}function _d(r){return r.transformDirection([0,0,-1])}class JS extends O2{constructor(t){var i;super({name:t.animation.name||"unnamed"});B(this,"animation");B(this,"gltfNodeIdToNodeMap");B(this,"onVisibilityChange");B(this,"cameras");B(this,"lightDefinitions");B(this,"onLightChange");B(this,"materials");B(this,"clip");B(this,"mixer");B(this,"action");B(this,"materialTextureTransformState",new Map);if(this.animation=t.animation,this.gltfNodeIdToNodeMap=t.gltfNodeIdToNodeMap,this.onVisibilityChange=t.onVisibilityChange,this.cameras=t.cameras||[],this.lightDefinitions=t.lightDefinitions||[],this.onLightChange=t.onLightChange,this.materials=t.materials||[],(i=this.animation).name||(i.name="unnamed"),this.name=this.animation.name,this.animation.channels.some(o=>o.type==="material"||o.type==="textureTransform")&&!this.materials.length)throw new Error(`Animation ${this.animation.name} targets materials, but GLTFAnimator was created without a materials array`);this.mixer=t.mixer||new yf,this.clip=new V2({name:this.name,tracks:this.animation.channels.map(o=>this.createAnimationTrack(o))}),this.action=this.mixer.clipAction(this.clip).play()}applyTime(t){this.action.setTime(t),this.mixer.update(0)}createAnimationTrack(t){const i=ew(t.sampler.interpolation);if(t.type==="node")return new ua({name:`${t.targetNodeId}.${t.path}`,times:t.sampler.input,values:t.sampler.output,interpolation:i,valueType:t.path==="rotation"?"quaternion":"vector",binding:{id:`node:${t.targetNodeId}:${t.path}`,getValue:()=>this.getNodeAnimationValue(t.targetNodeId,t.path),setValue:c=>this.applyNodeAnimationValue(t.targetNodeId,t.path,c)}});if(t.type==="camera"||t.type==="light")return new ua({name:t.pointer,times:t.sampler.input,values:t.sampler.output,interpolation:i,binding:{id:t.pointer,getValue:()=>this.getSceneAnimationValue(t),setValue:c=>this.applySceneAnimationValue(t,c)}});const o=this.materials[t.targetMaterialIndex];if(!o)throw new Error(`Cannot find animation target material ${t.targetMaterialIndex} for ${t.pointer}`);return new ua({name:t.pointer,times:t.sampler.input,values:t.sampler.output,interpolation:i,binding:{id:t.pointer,getValue:t.type==="material"?()=>tw(o,t):void 0,setValue:c=>{t.type==="material"?rw(o,t,c):sw(o,t,c,this.materialTextureTransformState)}}})}getNodeAnimationValue(t,i){const o=this.getTargetNode(t);switch(i){case"translation":return Array.from(o.position);case"rotation":return Array.from(o.rotation);case"scale":return Array.from(o.scale);case"weights":return Array.from(o.userData.morphWeights||[]);case"visibility":return[o.display?1:0];default:return[]}}applyNodeAnimationValue(t,i,o){var d;const c=this.getTargetNode(t);switch(i){case"translation":c.setPosition(o).updateMatrix();break;case"rotation":c.setRotation(o).updateMatrix();break;case"scale":c.setScale(o).updateMatrix();break;case"weights":fd(c,o);break;case"visibility":c.setProps({display:o[0]!==0}),(d=this.onVisibilityChange)==null||d.call(this);break;default:Je.warn(`Bad animation path ${i}`)()}}getTargetNode(t){const i=this.gltfNodeIdToNodeMap.get(t);if(!i)throw new Error(`Cannot find animation target node ${t}`);return i}getSceneAnimationValue(t){var c,d;if(t.type==="camera"){const m=this.cameras[t.targetCameraIndex],_=(c=m==null?void 0:m[t.projection])==null?void 0:c[t.property];return typeof _=="number"?[_]:[]}const i=this.lightDefinitions[t.targetLightIndex],o=t.property==="innerConeAngle"||t.property==="outerConeAngle"?(d=i==null?void 0:i.spot)==null?void 0:d[t.property]:i==null?void 0:i[t.property];return Array.isArray(o)?t.component===void 0?[...o]:[o[t.component]]:typeof o=="number"?[o]:[]}applySceneAnimationValue(t,i){var c;if(t.type==="camera"){const d=this.cameras[t.targetCameraIndex];d!=null&&d[t.projection]&&(d[t.projection][t.property]=i[0]);return}const o=this.lightDefinitions[t.targetLightIndex];if(o){if(t.property==="innerConeAngle"||t.property==="outerConeAngle")o.spot||(o.spot={}),o.spot[t.property]=i[0];else if(t.component!==void 0){const d=[...o[t.property]||[1,1,1]];d[t.component]=i[0],o[t.property]=d}else o[t.property]=i.length===1?i[0]:[...i];(c=this.onLightChange)==null||c.call(this)}}}class ZS extends F2{constructor(t){var o;const i=new yf;super(t.animations.map((c,d)=>{const m=c.name||`Animation-${d}`;return new JS({gltfNodeIdToNodeMap:t.gltfNodeIdToNodeMap,onVisibilityChange:t.onVisibilityChange,cameras:t.cameras,lightDefinitions:t.lightDefinitions,onLightChange:t.onLightChange,materials:t.materials,mixer:i,animation:{name:m,channels:c.channels}})}));B(this,"mixer");B(this,"activeClip");B(this,"onUpdate");B(this,"previousTimeSeconds");this.mixer=i,this.onUpdate=t.onUpdate,this.activeClip=(o=this.clips[0])==null?void 0:o.name,t.autoplay===!1?this.clips.forEach(c=>{c.playing=!1,c.action.stop()}):t.autoplay==="first"&&this.activeClip&&this.selectClip(this.activeClip)}setUpdateHandler(t){return this.onUpdate=t,this}setTime(t){var d;const i=t/1e3,o=this.previousTimeSeconds===void 0?0:i-this.previousTimeSeconds;this.previousTimeSeconds=i;const c=o*this.mixer.timeScale;this.clips.forEach(m=>{if(!m.playing){m.action.stop();return}if(m.action.paused)return;m.action.resume();const _=Math.max(0,i-m.startTime)*m.speed;m.action.setTime(_-c*m.action.timeScale)}),this.mixer.update(o),(d=this.onUpdate)==null||d.call(this)}update(t){var i;this.mixer.update(t),(i=this.onUpdate)==null||i.call(this)}selectClip(t,i={}){const o=this.clips.find(m=>m.name===t);if(!o)throw new Error(`Unknown animation clip: ${t}`);const c=this.clips.find(m=>m.name===this.activeClip),d=i.crossFadeDuration||0;for(const m of this.clips)m!==o&&!(d>0&&m===c)&&(m.playing=!1,m.action.stop());return o.playing=!0,d>0&&c&&c!==o?(c.playing=!0,c.action.crossFadeTo(o.action,d)):o.action.reset().setEffectiveWeight(1).play(),this.activeClip=t,o}}function ew(r){switch(r){case"STEP":case"LINEAR":case"CUBICSPLINE":return r;default:throw new Error(`Unsupported animation interpolation: ${r}`)}}function tw(r,e){var o;const i=(o=r.shaderInputs.getUniformValues().pbrMaterial)==null?void 0:o[e.property];return Array.isArray(i)?e.component===void 0?[...i]:[i[e.component]]:typeof i=="number"?[i]:[]}function rw(r,e,t){const i=e.component!==void 0?{[e.property]:iw(nw(r,e.property),e.component,t[0])}:{[e.property]:t.length===1?t[0]:t};r.setProps({pbrMaterial:i})}function nw(r,e){var o;const i=(o=r.shaderInputs.getUniformValues().pbrMaterial)==null?void 0:o[e];return Array.isArray(i)?[...i]:[]}function iw(r,e,t){const i=[...r];return i[e]=t,i}function sw(r,e,t,i){const o=hd(e.textureSlot),c=ow(i,r,e);switch(e.path){case"offset":e.component!==void 0?c.offset[e.component]=t[0]:c.offset=[t[0],t[1]];break;case"rotation":c.rotation=t[0];break;case"scale":e.component!==void 0?c.scale[e.component]=t[0]:c.scale=[t[0],t[1]];break}r.setProps({pbrMaterial:{[o.uvTransformUniform]:aS(e.baseTransform,c)}})}function ow(r,e,t){const i=r.get(e)||{};let o=i[t.textureSlot];return o||(o={offset:[...t.baseTransform.offset],rotation:t.baseTransform.rotation,scale:[...t.baseTransform.scale]},i[t.textureSlot]=o,r.set(e,i)),o}class aw{constructor(e){B(this,"bindings");B(this,"scenes");this.scenes=e.scenes,this.bindings=Aw(e),this.update()}update(){if(this.bindings.length===0)return;const e=new Map;for(const t of this.scenes)t.preorderTraversal((i,{worldMatrix:o})=>{i instanceof fr&&e.set(i,new we(o))});for(const t of this.bindings){Q2({joints:t.joints,meshNode:t.node,worldMatrices:e,inverseBindMatrices:t.inverseBindMatrices,target:t.jointMatrices});for(const i of t.models)i.model.shaderInputs.setProps({skin:{jointMatrices:t.jointMatrices}})}}getBinding(e){return this.bindings.find(t=>typeof e=="number"?t.nodeIndex===e:t.node===e)}}function Aw(r){var d;const{gltf:e,gltfNodeIndexToNodeMap:t}=r,i=[],o=e.skins||[],c=new Set;for(const m of r.scenes)m.preorderTraversal(_=>{_ instanceof fr&&c.add(_)});for(const[m,_]of e.nodes.entries()){const T=_.skin;if(T===void 0||!_.mesh)continue;const y=cw(e,T),w=o[y],M=t.get(m);if(!w||!M||!c.has(M))continue;const N=w.joints.flatMap(J=>{const Z=t.get(J);return Z?[Z]:[]});if(N.length!==w.joints.length)continue;const O=_.mesh,F=M.userData.gltfMesh,W=F instanceof fr?F:M.children.find(J=>J instanceof fr&&J.id===(O.name||O.id));if(!(W instanceof fr))continue;const j=W.children.flatMap(J=>J instanceof vn?[J]:[]),q=(d=w.inverseBindMatrices)==null?void 0:d.value;i.push({nodeIndex:m,skinIndex:y,node:M,joints:N,...q instanceof Float32Array?{inverseBindMatrices:q}:{},jointMatrices:new Float32Array(N.length*16),models:j})}return i}function cw(r,e){return typeof e=="number"?e:(r.skins||[]).findIndex(t=>{var i;if(t===e||e.id&&t.id===e.id)return!0;if(t.joints.length!==((i=e.joints)==null?void 0:i.length)||!t.joints.every((o,c)=>{var d;return o===((d=e.joints)==null?void 0:d[c])}))return!1;if(typeof e.inverseBindMatrices=="number"){const o=r.accessors[e.inverseBindMatrices];return!t.inverseBindMatrices||t.inverseBindMatrices===o}return!0})}const lw={supportLevel:"none",standardStatus:"unknown",comment:"Not currently listed in the luma.gl glTF extension support registry."},Td={KHR_draco_mesh_compression:{supportLevel:"built-in",standardStatus:"ratified",comment:"Decoded by loaders.gl before luma.gl builds the scenegraph."},EXT_meshopt_compression:{supportLevel:"built-in",standardStatus:"ratified",comment:"EXT meshopt-compressed buffer views are decoded by loaders.gl before rendering."},KHR_meshopt_compression:{supportLevel:"none",standardStatus:"release-candidate",comment:"The installed loaders.gl GLTFLoader supports EXT_meshopt_compression, not the KHR release candidate."},KHR_mesh_quantization:{supportLevel:"built-in",standardStatus:"ratified",comment:"Loader-materialized quantized accessors retain their typed values and normalization."},EXT_mesh_features:{supportLevel:"loader-only",standardStatus:"ratified",comment:"Feature identifiers are decoded by loaders.gl; automatic rendering and picking are application-owned."},EXT_structural_metadata:{supportLevel:"loader-only",standardStatus:"ratified",comment:"Structural metadata is decoded by loaders.gl; automatic rendering and querying are application-owned."},KHR_lights_punctual:{supportLevel:"built-in",standardStatus:"ratified",comment:"Parsed into luma.gl Light objects."},KHR_materials_unlit:{supportLevel:"built-in",standardStatus:"ratified",comment:"Unlit materials bypass the default lighting path."},KHR_materials_emissive_strength:{supportLevel:"built-in",standardStatus:"ratified",comment:"Applied by the stock PBR shader."},KHR_texture_basisu:{supportLevel:"built-in",standardStatus:"ratified",comment:"BasisU / KTX2 textures pass through when the device supports them."},KHR_texture_transform:{supportLevel:"built-in",standardStatus:"ratified",comment:"Per-slot UV transforms and animated pointers are applied at runtime; avoid duplicate legacy loader-side baking."},EXT_texture_webp:{supportLevel:"loader-only",standardStatus:"ratified",comment:"Texture source is resolved during load; final support depends on browser and device decode support."},EXT_texture_avif:{supportLevel:"none",standardStatus:"ratified",comment:"The image loader can decode supported AVIF images, but GLTFLoader does not select EXT_texture_avif sources."},KHR_materials_specular:{supportLevel:"built-in",standardStatus:"ratified",comment:"The stock shader now applies specular factors and textures to the dielectric F0 term."},KHR_materials_ior:{supportLevel:"built-in",standardStatus:"ratified",comment:"The stock shader now drives dielectric reflectance from the glTF IOR value."},KHR_materials_transmission:{supportLevel:"built-in",standardStatus:"ratified",comment:"The stock shader now applies transmission to the base layer and exposes transparency through alpha, without a scene-color refraction buffer."},KHR_materials_volume:{supportLevel:"built-in",standardStatus:"ratified",comment:"Thickness and attenuation now tint transmitted light in the stock shader."},KHR_materials_clearcoat:{supportLevel:"built-in",standardStatus:"ratified",comment:"The stock shader now adds a secondary clearcoat specular lobe."},KHR_materials_sheen:{supportLevel:"built-in",standardStatus:"ratified",comment:"The stock shader now adds a sheen lobe for cloth-like materials."},KHR_materials_iridescence:{supportLevel:"built-in",standardStatus:"ratified",comment:"The stock shader now tints specular response with a view-dependent thin-film iridescence approximation."},KHR_materials_anisotropy:{supportLevel:"built-in",standardStatus:"ratified",comment:"The stock shader now shapes highlights and IBL response with an anisotropy-direction approximation."},KHR_materials_pbrSpecularGlossiness:{supportLevel:"loader-only",standardStatus:"archived",comment:"Extension data can be loaded, but it is not translated into the default metallic-roughness material path."},KHR_materials_variants:{supportLevel:"parsed-and-wired",standardStatus:"ratified",comment:"Primitive material variants can be selected and restored on the generated scenegraph."},EXT_mesh_gpu_instancing:{supportLevel:"built-in",standardStatus:"ratified",comment:"Accessor-backed instance transforms use one instanced draw per source primitive."},KHR_node_visibility:{supportLevel:"parsed-and-wired",standardStatus:"ratified",comment:"Recursive node visibility controls rendered geometry, punctual lights, and animation."},KHR_animation_pointer:{supportLevel:"parsed-and-wired",standardStatus:"ratified",comment:"Node transforms, morph weights and visibility, material factors, texture transforms, camera projections, and punctual lights are wired to runtime updates."},EXT_materials_bump:{supportLevel:"built-in",standardStatus:"draft",comment:"The experimental bump-map draft perturbs the canonical surface normal from a linear height texture."},KHR_materials_diffuse_transmission:{supportLevel:"built-in",standardStatus:"release-candidate",comment:"The Khronos release candidate adds energy-conserving back-lit diffuse transmission and independent color/factor textures."},KHR_materials_dispersion:{supportLevel:"parsed-and-wired",standardStatus:"ratified",comment:"The canonical PBR shader separates red, green, and blue transmission using wavelength-dependent refraction."},KHR_materials_volume_scatter:{supportLevel:"parsed-and-wired",standardStatus:"draft",comment:"The unratified volume-scattering draft is approximated per surface; random-walk and screen-space diffusion are not implemented."},KHR_xmp:{supportLevel:"none",standardStatus:"archived",comment:"Metadata payloads remain in the loaded glTF, but luma.gl does not interpret them."},KHR_xmp_json_ld:{supportLevel:"none",standardStatus:"ratified",comment:"Metadata is preserved in the glTF, but luma.gl does not interpret it."},EXT_lights_image_based:{supportLevel:"none",standardStatus:"multi-vendor",comment:"Use loadPBREnvironment() or custom environment setup instead."},EXT_texture_video:{supportLevel:"none",standardStatus:"multi-vendor",comment:"Video textures are not created automatically by the stock pipeline."},MSFT_lod:{supportLevel:"parsed-and-wired",standardStatus:"vendor",comment:"Node levels are parsed and selected by opt-in animated crowds; material LOD and GPU-driven selection are not implemented."}};function vd(r,e){const t=Array.from(pw(r)).sort(),i=new Set(r.extensionsRequired||[]),o=t.map(c=>{const d=Td[c]||lw,m=hw(c,d,r,e);return[c,{extensionName:c,required:i.has(c),supported:mw(m.supportLevel),supportLevel:m.supportLevel,standardStatus:d.standardStatus,comment:m.comment}]});return new Map(o)}function uw(r,e){return Array.from(vd(r,e).values()).filter(t=>t.required&&!t.supported)}function fw(r,e){const t=uw(r,e);if(t.length)throw new Error(`Unsupported required glTF extensions: ${t.map(i=>i.extensionName).join(", ")}`)}function hw(r,e,t,i){if(r!=="KHR_texture_basisu"||!i)return e;const c=dw(t).find(d=>d===null||!i.isTextureFormatSupported(d));return c===void 0?e:{supportLevel:"none",comment:c===null?`The ${i.type} device cannot use a BasisU texture whose transcoded GPU format is missing.`:`The ${i.type} device does not support the transcoded BasisU texture format '${c}'.`}}function dw(r){var t;const e=[];for(const i of r.textures||[]){const o=(t=i==null?void 0:i.source)==null?void 0:t.image;if(!(o!=null&&o.compressed))continue;const c=Array.isArray(o.data)?o.data[0]:Array.isArray(o.mipmaps)?o.mipmaps[0]:void 0;e.push((c==null?void 0:c.textureFormat)??null)}return e}function yd(r){return Td[r]||null}function pw(r){var i;const e=r,t=new Set;return Ns(t,r.extensionsUsed),Ns(t,r.extensionsRequired),Ns(t,e.extensionsRemoved),Ns(t,Object.keys(r.extensions||{})),((i=e.lights)!=null&&i.length||(r.nodes||[]).some(o=>"light"in o))&&t.add("KHR_lights_punctual"),(r.materials||[]).some(o=>{var d;const c=o;return c.unlit||((d=c.extensions)==null?void 0:d.KHR_materials_unlit)})&&t.add("KHR_materials_unlit"),t}function Ns(r,e=[]){for(const t of e)r.add(t)}function mw(r){return r==="built-in"||r==="parsed-and-wired"}function gw(r){const e=r.animations||[],t=new Map,i=new Map;return e.flatMap((o,c)=>{const d=o.name||`Animation-${c}`,m=new Map,_=o.channels.flatMap(({sampler:T,target:y})=>{const w=Sw(r,y),M=`${T}:${w??0}`;let N=m.get(M);if(!N){const F=o.samplers[T];if(!F)throw new Error(`Cannot find animation sampler ${T}`);const{input:W,interpolation:j="LINEAR",output:q}=F,J=Nw(r.accessors[W],t),Z=Pw(r.accessors[q],i);N={input:J,interpolation:j,output:w!==void 0?ww(Z,J.length,j,w):Z},m.set(M,N)}const O=bw(r,y,N);return O?[O]:[]});return _.length?[{name:d,channels:_}]:[]})}function bw(r,e,t){if(e.path==="pointer")return _w(r,e,t);const i=Sd(e.path);if(!i)return null;const o=r.nodes[e.node??0];if(!o)throw new Error(`Cannot find animation target ${e.node}`);return{type:"node",sampler:t,targetNodeId:o.id,path:i}}function _w(r,e,t){var c,d;const i=(d=(c=e.extensions)==null?void 0:c.KHR_animation_pointer)==null?void 0:d.pointer;if(typeof i!="string"||!i.startsWith("/"))return Je.warn("KHR_animation_pointer channel is missing a valid JSON pointer and will be skipped")(),null;const o=Iw(i);switch(o[0]){case"nodes":return yw(r,o,t,i);case"materials":return Ew(r,o,t,i);case"cameras":return Tw(r,o,t,i);case"extensions":if(o[1]==="KHR_lights_punctual")return vw(r,o,t,i);break}return en(i,`top-level target "${o[0]}" has no runtime animation mapping`),null}function Tw(r,e,t,i){var y;const o=Number(e[1]),c=(y=r.cameras)==null?void 0:y[o],d=e[2],m=e[3],_=["aspectRatio","yfov","znear","zfar"],T=["xmag","ymag","znear","zfar"];return e.length!==4||!Number.isInteger(o)||!c||d!=="perspective"&&d!=="orthographic"||c.type!==d||!(d==="perspective"?_:T).includes(m)?(en(i,"camera pointers must target a supported projection property"),null):{type:"camera",sampler:t,pointer:i,targetCameraIndex:o,projection:d,property:m}}function vw(r,e,t,i){var w,M;const o=Number(e[3]),c=r.lights||((M=(w=r.extensions)==null?void 0:w.KHR_lights_punctual)==null?void 0:M.lights),d=e[4]==="spot",m=d?e[5]:e[4],_=!d&&m==="color"?e[5]:void 0,T=["color","intensity","range","innerConeAngle","outerConeAngle"],y=d||_!==void 0?6:5;return e[2]!=="lights"||e.length!==y||!Number.isInteger(o)||!Array.isArray(c)||!c[o]||!T.includes(m)||d&&m!=="innerConeAngle"&&m!=="outerConeAngle"||_!==void 0&&(!/^[0-2]$/.test(_)||m!=="color")?(en(i,"punctual-light pointers must target supported typed light properties"),null):{type:"light",sampler:t,pointer:i,targetLightIndex:o,property:m,..._===void 0?{}:{component:Number(_)}}}function yw(r,e,t,i){const o=e.length===5&&e[2]==="extensions"&&e[3]==="KHR_node_visibility"&&e[4]==="visible";if(e.length!==3&&!o)return en(i,"node pointers must target transforms, morph weights, or KHR_node_visibility.visible"),null;const c=Number(e[1]),d=r.nodes[c];if(!Number.isInteger(c)||!d)return Je.warn(`KHR_animation_pointer target ${i} references a missing node and will be skipped`)(),null;if(o&&t.interpolation!=="STEP")return en(i,"boolean visibility animation requires STEP interpolation"),null;const m=o?"visibility":Sd(e[2]);return m?{type:"node",sampler:t,targetNodeId:d.id,path:m}:(en(i,`node property "${e[2]}" has no runtime animation mapping`),null)}function Sw(r,e){var c,d,m,_,T,y,w;let t;if(e.path==="weights")t=e.node;else if(e.path==="pointer"){const M=(d=(c=e.extensions)==null?void 0:c.KHR_animation_pointer)==null?void 0:d.pointer,N=typeof M=="string"?/^\/nodes\/(\d+)\/weights$/.exec(M):null;if(!N)return;t=Number(N[1])}else return;const i=r.nodes[t??0],o=typeof(i==null?void 0:i.mesh)=="number"?r.meshes[i.mesh]:i==null?void 0:i.mesh;return((m=i==null?void 0:i.weights)==null?void 0:m.length)||((_=o==null?void 0:o.weights)==null?void 0:_.length)||((w=(y=(T=o==null?void 0:o.primitives)==null?void 0:T[0])==null?void 0:y.targets)==null?void 0:w.length)||1}function ww(r,e,t,i){const o=t==="CUBICSPLINE"?3:1,c=r.length/(Math.max(e,1)*o),d=i>1?i:Number.isInteger(c)&&c>1?c:i;if(d<=1)return r;const m=r.flat(),_=[];for(let T=0;T<m.length;T+=d)_.push(m.slice(T,T+d));return _}function Ew(r,e,t,i){if(e.length<3)return en(i,"material pointers must include a material index and target property path"),null;const o=Number(e[1]),c=r.materials[o];if(!Number.isInteger(o)||!c)return Je.warn(`KHR_animation_pointer target ${i} references a missing material and will be skipped`)(),null;const d=xw(c,e.slice(2));return"reason"in d?(en(i,d.reason),null):{sampler:t,pointer:i,targetMaterialIndex:o,...d}}function Sd(r){switch(r){case"translation":case"rotation":case"scale":case"weights":return r;default:return null}}function xw(r,e){var o,c,d,m,_,T,y,w,M,N,O,F,W,j,q,J,Z,Y,se,he,ue,$,Q,U;const t=Cw(r,e);if(!("reason"in t)||t.reason!=="not-a-texture-transform-target")return t;switch(e.join("/")){case"pbrMetallicRoughness/baseColorFactor":return r.pbrMetallicRoughness?{type:"material",property:"baseColorFactor"}:{reason:Xe(e)};case"pbrMetallicRoughness/metallicFactor":return r.pbrMetallicRoughness?{type:"material",property:"metallicRoughnessValues",component:0}:{reason:Xe(e)};case"pbrMetallicRoughness/roughnessFactor":return r.pbrMetallicRoughness?{type:"material",property:"metallicRoughnessValues",component:1}:{reason:Xe(e)};case"normalTexture/scale":return r.normalTexture?{type:"material",property:"normalScale"}:{reason:Xe(e)};case"occlusionTexture/strength":return r.occlusionTexture?{type:"material",property:"occlusionStrength"}:{reason:Xe(e)};case"emissiveFactor":return{type:"material",property:"emissiveFactor"};case"alphaCutoff":return{type:"material",property:"alphaCutoff"};case"extensions/KHR_materials_specular/specularFactor":return(o=r.extensions)!=null&&o.KHR_materials_specular?{type:"material",property:"specularIntensityFactor"}:{reason:Xe(e)};case"extensions/KHR_materials_specular/specularColorFactor":return(c=r.extensions)!=null&&c.KHR_materials_specular?{type:"material",property:"specularColorFactor"}:{reason:Xe(e)};case"extensions/KHR_materials_ior/ior":return(d=r.extensions)!=null&&d.KHR_materials_ior?{type:"material",property:"ior"}:{reason:Xe(e)};case"extensions/EXT_materials_bump/bumpFactor":return(m=r.extensions)!=null&&m.EXT_materials_bump?{type:"material",property:"bumpFactor"}:{reason:Xe(e)};case"extensions/KHR_materials_diffuse_transmission/diffuseTransmissionFactor":return(_=r.extensions)!=null&&_.KHR_materials_diffuse_transmission?{type:"material",property:"diffuseTransmissionFactor"}:{reason:Xe(e)};case"extensions/KHR_materials_diffuse_transmission/diffuseTransmissionColorFactor":return(T=r.extensions)!=null&&T.KHR_materials_diffuse_transmission?{type:"material",property:"diffuseTransmissionColorFactor"}:{reason:Xe(e)};case"extensions/KHR_materials_volume_scatter/multiscatterColorFactor":case"extensions/KHR_materials_volume_scatter/multiscatterColor":return(y=r.extensions)!=null&&y.KHR_materials_volume_scatter?{type:"material",property:"multiscatterColorFactor"}:{reason:Xe(e)};case"extensions/KHR_materials_volume_scatter/scatterAnisotropy":return(w=r.extensions)!=null&&w.KHR_materials_volume_scatter?{type:"material",property:"scatterAnisotropy"}:{reason:Xe(e)};case"extensions/KHR_materials_dispersion/dispersion":return(M=r.extensions)!=null&&M.KHR_materials_dispersion?{type:"material",property:"dispersion"}:{reason:Xe(e)};case"extensions/KHR_materials_transmission/transmissionFactor":return(N=r.extensions)!=null&&N.KHR_materials_transmission?{type:"material",property:"transmissionFactor"}:{reason:Xe(e)};case"extensions/KHR_materials_volume/thicknessFactor":return(O=r.extensions)!=null&&O.KHR_materials_volume?{type:"material",property:"thicknessFactor"}:{reason:Xe(e)};case"extensions/KHR_materials_volume/attenuationDistance":return(F=r.extensions)!=null&&F.KHR_materials_volume?{type:"material",property:"attenuationDistance"}:{reason:Xe(e)};case"extensions/KHR_materials_volume/attenuationColor":return(W=r.extensions)!=null&&W.KHR_materials_volume?{type:"material",property:"attenuationColor"}:{reason:Xe(e)};case"extensions/KHR_materials_clearcoat/clearcoatFactor":return(j=r.extensions)!=null&&j.KHR_materials_clearcoat?{type:"material",property:"clearcoatFactor"}:{reason:Xe(e)};case"extensions/KHR_materials_clearcoat/clearcoatRoughnessFactor":return(q=r.extensions)!=null&&q.KHR_materials_clearcoat?{type:"material",property:"clearcoatRoughnessFactor"}:{reason:Xe(e)};case"extensions/KHR_materials_sheen/sheenColorFactor":return(J=r.extensions)!=null&&J.KHR_materials_sheen?{type:"material",property:"sheenColorFactor"}:{reason:Xe(e)};case"extensions/KHR_materials_sheen/sheenRoughnessFactor":return(Z=r.extensions)!=null&&Z.KHR_materials_sheen?{type:"material",property:"sheenRoughnessFactor"}:{reason:Xe(e)};case"extensions/KHR_materials_iridescence/iridescenceFactor":return(Y=r.extensions)!=null&&Y.KHR_materials_iridescence?{type:"material",property:"iridescenceFactor"}:{reason:Xe(e)};case"extensions/KHR_materials_iridescence/iridescenceIor":return(se=r.extensions)!=null&&se.KHR_materials_iridescence?{type:"material",property:"iridescenceIor"}:{reason:Xe(e)};case"extensions/KHR_materials_iridescence/iridescenceThicknessMinimum":return(he=r.extensions)!=null&&he.KHR_materials_iridescence?{type:"material",property:"iridescenceThicknessRange",component:0}:{reason:Xe(e)};case"extensions/KHR_materials_iridescence/iridescenceThicknessMaximum":return(ue=r.extensions)!=null&&ue.KHR_materials_iridescence?{type:"material",property:"iridescenceThicknessRange",component:1}:{reason:Xe(e)};case"extensions/KHR_materials_anisotropy/anisotropyStrength":return($=r.extensions)!=null&&$.KHR_materials_anisotropy?{type:"material",property:"anisotropyStrength"}:{reason:Xe(e)};case"extensions/KHR_materials_anisotropy/anisotropyRotation":return(Q=r.extensions)!=null&&Q.KHR_materials_anisotropy?{type:"material",property:"anisotropyRotation"}:{reason:Xe(e)};case"extensions/KHR_materials_emissive_strength/emissiveStrength":return(U=r.extensions)!=null&&U.KHR_materials_emissive_strength?{type:"material",property:"emissiveStrength"}:{reason:Xe(e)};default:return{reason:Xe(e)}}}function Cw(r,e){const t=e.lastIndexOf("extensions");if(t<0||e[t+1]!=="KHR_texture_transform"||t<1)return{reason:"not-a-texture-transform-target"};const i=oS(e.slice(0,t));if(!i)return{reason:Rw(e.slice(0,t))};const o=Mw(r,i.pathSegments);if(!o)return{reason:`texture-transform target "${e.slice(0,t).join("/")}" does not exist on the referenced material`};const c=e[t+2];if(c==="texCoord")return{reason:"animated KHR_texture_transform.texCoord is unsupported because texCoord selection is structural, not a runtime float/vector update"};if(c!=="offset"&&c!=="rotation"&&c!=="scale")return{reason:`KHR_texture_transform property "${c}" is not animatable; supported properties are offset, rotation, and scale`};const d=e[t+3];if(e.length>t+4)return{reason:`KHR_texture_transform.${c} does not support nested property paths`};let m;if(d!==void 0){if(m=Number(d),c==="rotation")return{reason:"KHR_texture_transform.rotation does not support component indices"};if(!Number.isInteger(m)||m<0||m>1)return{reason:`KHR_texture_transform.${c} component index "${d}" is invalid; only 0 and 1 are supported`}}return{type:"textureTransform",textureSlot:i.slot,path:c,component:m,baseTransform:dd(o)}}function Mw(r,e){let t=r;for(const i of e)if(t=t==null?void 0:t[i],!t)return null;return t}function Iw(r){return r.slice(1).split("/").map(e=>e.replace(/~1/g,"/").replace(/~0/g,"~"))}function Xe(r){const e=wd(r);if(e){const t=yd(e);if((t==null?void 0:t.supportLevel)==="none")return`${e} is referenced by this pointer, but ${t.comment.charAt(0).toLowerCase()}${t.comment.slice(1)}`}return`no runtime target exists for material property "${r.join("/")}"`}function Rw(r){const e=wd(r);if(e){const t=yd(e);if((t==null?void 0:t.supportLevel)==="none")return`${e} is referenced by this pointer, but ${t.comment.charAt(0).toLowerCase()}${t.comment.slice(1)}`}return`texture-transform target "${r.join("/")}" has no runtime texture-slot mapping`}function wd(r){const e=r.indexOf("extensions"),t=r[e+1];return e>=0&&t?t:null}function en(r,e){Je.warn(`KHR_animation_pointer target ${r} will be skipped because ${e}`)()}function Nw(r,e){if(e.has(r))return e.get(r);const{value:t,components:i}=Ed(r);io(i===1,"accessorToJsArray1D must have exactly 1 component");const o=Array.from(t);return e.set(r,o),o}function Pw(r,e){if(e.has(r))return e.get(r);const{value:t,components:i}=Ed(r);io(i>=1,"accessorToJsArray2D must have at least 1 component");const o=[];for(let c=0;c<t.length;c+=i)o.push(Array.from(t.slice(c,c+i)));return e.set(r,o),o}function Ed(r){var o;if(r.value)return{value:r.value,components:r.components};const e=(o=r.bufferView)==null?void 0:o.data;io(e!==void 0),io(r.componentType===5126);const t=r.type==="SCALAR"?1:Number(r.type.slice(3));return{value:new Float32Array(e.buffer,e.byteOffset+(r.byteOffset||0),r.count*t),components:t}}function io(r,e){if(!r)throw new Error(e)}class Lw{constructor(e,t){B(this,"variants");B(this,"names");B(this,"activeVariant",null);B(this,"modelNodes");var c,d;const i=((d=(c=e.extensions)==null?void 0:c.KHR_materials_variants)==null?void 0:d.variants)||[];this.variants=i.map((m,_)=>({name:m.name||`Variant-${_}`,index:_})),this.names=this.variants.map(m=>m.name);const o=new Set;for(const m of t)m.preorderTraversal(_=>{_ instanceof vn&&_.userData.gltfMaterialVariants&&o.add(_)});this.modelNodes=Array.from(o)}selectVariant(e){const t=this.variants.find(i=>i.name===e);if(!t)throw new Error(`Unknown glTF material variant: ${e}`);for(const i of this.modelNodes){const o=i.userData.gltfMaterialVariants,c=o.mappings.get(t.index);i.model.setMaterial((c==null?void 0:c.material)||o.defaultMaterial),i.model.setParameters((c==null?void 0:c.parameters)||o.defaultParameters)}this.activeVariant=e}resetVariant(){for(const e of this.modelNodes){const t=e.userData.gltfMaterialVariants;e.model.setMaterial(t.defaultMaterial),e.model.setParameters(t.defaultParameters)}this.activeVariant=null}}function kw(r,e,t){var ue,$;t!=null&&t.strictExtensions&&fw(e,r);const{scenes:i,materials:o,gltfMeshIdToNodeMap:c,gltfNodeIdToNodeMap:d,gltfNodeIndexToNodeMap:m,generatedTextures:_}=DS(r,e,t),T=gw(e),w=(e.lights||(($=(ue=e.extensions)==null?void 0:ue.KHR_lights_punctual)==null?void 0:$.lights)||[]).map(Q=>({...Q,...Array.isArray(Q.color)?{color:[...Q.color]}:{},...Q.spot?{spot:{...Q.spot}}:{}})),M=(e.cameras||[]).map(Q=>{const U={...Q};return Q.perspective&&(U.perspective={...Q.perspective}),Q.orthographic&&(U.orthographic={...Q.orthographic}),U}),N={useByteColors:(t==null?void 0:t.useByteColors)??!0,nodeVisibility:d,lightDefinitions:w},O=Vl(e,N),F=()=>{O.splice(0,O.length,...Vl(e,N))},W=new ZS({onVisibilityChange:F,cameras:M,lightDefinitions:w,onLightChange:F,animations:T,gltfNodeIdToNodeMap:d,materials:o}),j=new Lw(e,i),q=vd(e,r),J=i.map(Q=>xd(Q.getBounds())),Z=Ow(J),Y=new aw({gltf:e,scenes:i,gltfNodeIndexToNodeMap:m});W.setUpdateHandler(()=>Y.update());let se=!1;return{scenes:i,materials:o,variants:j,cameras:M,animator:W,animations:T,lights:O,extensionSupport:q,sceneBounds:J,modelBounds:Z,gltfMeshIdToNodeMap:c,gltfNodeIdToNodeMap:d,gltfNodeIndexToNodeMap:m,skins:Y,gltf:e,destroy:()=>{if(se)return;se=!0;const Q=new Set([...i,...c.values(),...d.values()]),U=new Set,be=new Set(o);for(const ve of Q)ve.preorderTraversal(Se=>{var Ie;Se instanceof vn&&(U.add(Se),(Ie=Se.model)!=null&&Ie.material&&be.add(Se.model.material))});for(const ve of U)ve.destroy();for(const ve of Q)ve.destroy();for(const ve of be)ve.destroy();for(const ve of _)ve.destroy();_.clear()}}}function xd(r){if(!r)return{bounds:null,center:[0,0,0],size:[0,0,0],radius:.5,recommendedOrbitDistance:1};const e=[[r[0][0],r[0][1],r[0][2]],[r[1][0],r[1][1],r[1][2]]],t=[e[1][0]-e[0][0],e[1][1]-e[0][1],e[1][2]-e[0][2]],i=[e[0][0]+t[0]*.5,e[0][1]+t[1]*.5,e[0][2]+t[2]*.5],o=Math.max(t[0],t[1],t[2])*.5,c=Math.max(.5*Math.hypot(t[0],t[1],t[2]),.001);return{bounds:e,center:i,size:t,radius:c,recommendedOrbitDistance:Math.max(Math.max(o,.001)/Math.tan(Math.PI/6)*1.15,c*1.1)}}function Ow(r){let e=null;for(const t of r)if(t.bounds){if(!e){e=[[...t.bounds[0]],[...t.bounds[1]]];continue}for(let i=0;i<3;i++)e[0][i]=Math.min(e[0][i],t.bounds[0][i]),e[1][i]=Math.max(e[1][i],t.bounds[1][i])}return xd(e)}var jl=(function(){var r="b9H79Tebbbe8Fv9Gbb9Gvuuuuueu9Giuuub9Geueu9Giuuueuixkbeeeddddillviebeoweuecj:Gdkr;Neqo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbeY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVbdE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbiL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtblK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949WboY9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVJ9V29VVbrl79IV9Rbwq1Zkdbk:kYi5ud9:du8Jjjjjbcjq9Rgv8Kjjjjbc9:hodnalTmbcuhoaiRbbgrc;WeGc:Ge9hmbarcsGgwce0mbc9:hoalcufadcd4cbawEgDadfgrcKcaawEgqaraq0Egk6mbaicefhxcj;abad9Uc;WFbGcjdadca0EhmaialfgPar9Rgoadfhsavaoadz:jjjjbgzceVhHcbhOdndninaeaO9nmeaPax9RaD6mdamaeaO9RaOamfgoae6EgAcsfglc9WGhCaAcethXaxaDfhiaOaeaoaeao6E9RhQalcl4cifcd4hLazcjdfaAfhKcbhYabaOad2fg8AhEaHh3incbh5dnawTmbaxaYcd4fRbbh5kcbh8Eazcjdfhqinaih8Fdndndndna5a8Ecet4ciGgoc9:fPdebdkaPa8F9RaA6mrazcjdfa8EaA2fa8FaAz:jjjjb8Aa8FaAfhixdkazcjdfa8EaA2fcbaAz:kjjjb8Aa8FhixekaPa8F9RaL6mva8FaLfhidnaCTmbaPai9RcK6mbaocdtc:q:G:cjbfcj:G:cjbawEhaczhrcbhlinargoc9Wfghaqfhrdndndndndndnaaa8Fahco4fRbbalcoG4ciGcdtfydbPDbedvivvvlvkar9cb83bwar9cb83bbxlkarcbaiRbdai8Xbb9c:c:qj:bw9:9c:q;c1:I1e:d9c:b:c:e1z9:gg9cjjjjjz:dg8J9qE86bbaqaofgrcGfcbaicdfa8J9c8N1:NfghRbbag9cjjjjjw:dg8J9qE86bbarcVfcbaha8J9c8M1:NfghRbbag9cjjjjjl:dg8J9qE86bbarc7fcbaha8J9c8L1:NfghRbbag9cjjjjjd:dg8J9qE86bbarctfcbaha8J9c8K1:NfghRbbag9cjjjjje:dg8J9qE86bbarc91fcbaha8J9c8J1:NfghRbbag9cjjjj;ab:dg8J9qE86bbarc4fcbaha8J9cg1:NfghRbbag9cjjjja:dg8J9qE86bbarc93fcbaha8J9ch1:NfghRbbag9cjjjjz:dgg9qE86bbarc94fcbahag9ca1:NfghRbbai8Xbe9c:c:qj:bw9:9c:q;c1:I1e:d9c:b:c:e1z9:gg9cjjjjjz:dg8J9qE86bbarc95fcbaha8J9c8N1:NfgiRbbag9cjjjjjw:dg8J9qE86bbarc96fcbaia8J9c8M1:NfgiRbbag9cjjjjjl:dg8J9qE86bbarc97fcbaia8J9c8L1:NfgiRbbag9cjjjjjd:dg8J9qE86bbarc98fcbaia8J9c8K1:NfgiRbbag9cjjjjje:dg8J9qE86bbarc99fcbaia8J9c8J1:NfgiRbbag9cjjjj;ab:dg8J9qE86bbarc9:fcbaia8J9cg1:NfgiRbbag9cjjjja:dg8J9qE86bbarcufcbaia8J9ch1:NfgiRbbag9cjjjjz:dgg9qE86bbaiag9ca1:NfhixikaraiRblaiRbbghco4g8Ka8KciSg8KE86bbaqaofgrcGfaiclfa8Kfg8KRbbahcl4ciGg8La8LciSg8LE86bbarcVfa8Ka8Lfg8KRbbahcd4ciGg8La8LciSg8LE86bbarc7fa8Ka8Lfg8KRbbahciGghahciSghE86bbarctfa8Kahfg8KRbbaiRbeghco4g8La8LciSg8LE86bbarc91fa8Ka8Lfg8KRbbahcl4ciGg8La8LciSg8LE86bbarc4fa8Ka8Lfg8KRbbahcd4ciGg8La8LciSg8LE86bbarc93fa8Ka8Lfg8KRbbahciGghahciSghE86bbarc94fa8Kahfg8KRbbaiRbdghco4g8La8LciSg8LE86bbarc95fa8Ka8Lfg8KRbbahcl4ciGg8La8LciSg8LE86bbarc96fa8Ka8Lfg8KRbbahcd4ciGg8La8LciSg8LE86bbarc97fa8Ka8Lfg8KRbbahciGghahciSghE86bbarc98fa8KahfghRbbaiRbigico4g8Ka8KciSg8KE86bbarc99faha8KfghRbbaicl4ciGg8Ka8KciSg8KE86bbarc9:faha8KfghRbbaicd4ciGg8Ka8KciSg8KE86bbarcufaha8KfgrRbbaiciGgiaiciSgiE86bbaraifhixdkaraiRbwaiRbbghcl4g8Ka8KcsSg8KE86bbaqaofgrcGfaicwfa8Kfg8KRbbahcsGghahcsSghE86bbarcVfa8KahfghRbbaiRbeg8Kcl4g8La8LcsSg8LE86bbarc7faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarctfaha8KfghRbbaiRbdg8Kcl4g8La8LcsSg8LE86bbarc91faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc4faha8KfghRbbaiRbig8Kcl4g8La8LcsSg8LE86bbarc93faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc94faha8KfghRbbaiRblg8Kcl4g8La8LcsSg8LE86bbarc95faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc96faha8KfghRbbaiRbvg8Kcl4g8La8LcsSg8LE86bbarc97faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc98faha8KfghRbbaiRbog8Kcl4g8La8LcsSg8LE86bbarc99faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc9:faha8KfghRbbaiRbrgicl4g8Ka8KcsSg8KE86bbarcufaha8KfgrRbbaicsGgiaicsSgiE86bbaraifhixekarai8Pbw83bwarai8Pbb83bbaiczfhikdnaoaC9pmbalcdfhlaoczfhraPai9RcL0mekkaoaC6moaimexokaCmva8FTmvkaqaAfhqa8Ecefg8Ecl9hmbkdndndndnawTmbasaYcd4fRbbgociGPlbedrbkaATmdazaYfh8Fazcjdfhhcbh8EaEhaina8FRbbhraahocbhlinaoahalfRbbgqce4cbaqceG9R7arfgr86bbaoadfhoaAalcefgl9hmbkaacefhaa8Fcefh8FahaAfhha8Ecefg8Ecl9hmbxikkaATmeazaYfhaazcjdfhhcbhoceh8EaKh8FinaEaofhlaa8Vbbhrcbhoinala8FaofRbbcwtahaofRbbgqVc;:FiGce4cbaqceG9R7arfgr87bbaladfhlaQaocefgofmbka8FaXfh8FcdhoaacdfhaahaXfhha8EceGhlcbh8EalmbxdkkaATmbaocl4h8EazaYfRbbhqcwhoa3hlinalRbbaotaqVhqalcefhlaocwfgoca9hmbkcbhhaEh8FaKhainazcjdfahfRbbhrcwhoaahlinalRbbaotarVhralaAfhlaocwfgoca9hmbkara8E94aq7hqcbhoa8Fhlinalaqao486bbalcefhlaocwfgoca9hmbka8Fadfh8FaacefhaahcefghaA9hmbkkaEclfhEa3clfh3aYclfgYad6mbkaza8AaAcufad2fadz:jjjjb8AaAaOfhOaihxaimbkc9:hoxdkcbc99aPax9RakSEhoxekc9:hokavcjqf8Kjjjjbaok:ysezu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnalaeci9UgrcHf6mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecjez:kjjjb8Aav9cu83iUav9cu83i8Wav9cu83iyav9cu83iaav9cu83iKav9cu83izav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhldnaeTmbcmcsaDceSEhkcbhxcbhmcbhrcbhicbhoindnalaq9nmbc9:hoxikdndnawRbbgDc;Ve0mbavc;abfaoaDcu7gPcl4fcsGcitfgsydlhzasydbhHdndnaDcsGgsak9pmbavaiaPfcsGcdtfydbaxasEhDaxasTgOfhxxekdndnascsSmbcehOasc987asamffcefhDxekalcefhDal8SbbgscFeGhPdndnascu9mmbaDhlxekalcvfhlaPcFbGhPcrhsdninaD8SbbgOcFbGastaPVhPaOcu9kmeaDcefhDascrfgsc8J9hmbxdkkaDcefhlkcehOaPce4cbaPceG9R7amfhDkaDhmkavc;abfaocitfgsaDBdbasazBdlavaicdtfaDBdbavc;abfaocefcsGcitfgsaHBdbasaDBdlaocdfhoaOaifhidnadcd9hmbabarcetfgsaH87ebasclfaD87ebascdfaz87ebxdkabarcdtfgsaHBdbascwfaDBdbasclfazBdbxekdnaDcpe0mbavaiaqaDcsGfRbbgscl4gP9RcsGcdtfydbaxcefgOaPEhDavaias9RcsGcdtfydbaOaPTgzfgOascsGgPEhsaPThPdndnadcd9hmbabarcetfgHax87ebaHclfas87ebaHcdfaD87ebxekabarcdtfgHaxBdbaHcwfasBdbaHclfaDBdbkavaicdtfaxBdbavc;abfaocitfgHaDBdbaHaxBdlavaicefgicsGcdtfaDBdbavc;abfaocefcsGcitfgHasBdbaHaDBdlavaiazfgicsGcdtfasBdbavc;abfaocdfcsGcitfgDaxBdbaDasBdlaocifhoaiaPfhiaOaPfhxxekaxcbalRbbgsEgHaDc;:eSgDfhOascsGhAdndnascl4gCmbaOcefhzxekaOhzavaiaC9RcsGcdtfydbhOkdndnaAmbazcefhxxekazhxavaias9RcsGcdtfydbhzkdndnaDTmbalcefhDxekalcdfhDal8SbegPcFeGhsdnaPcu9kmbalcofhHascFbGhscrhldninaD8SbbgPcFbGaltasVhsaPcu9kmeaDcefhDalcrfglc8J9hmbkaHhDxekaDcefhDkasce4cbasceG9R7amfgmhHkdndnaCcsSmbaDhsxekaDcefhsaD8SbbglcFeGhPdnalcu9kmbaDcvfhOaPcFbGhPcrhldninas8SbbgDcFbGaltaPVhPaDcu9kmeascefhsalcrfglc8J9hmbkaOhsxekascefhskaPce4cbaPceG9R7amfgmhOkdndnaAcsSmbashlxekascefhlas8SbbgDcFeGhPdnaDcu9kmbascvfhzaPcFbGhPcrhDdninal8SbbgscFbGaDtaPVhPascu9kmealcefhlaDcrfgDc8J9hmbkazhlxekalcefhlkaPce4cbaPceG9R7amfgmhzkdndnadcd9hmbabarcetfgDaH87ebaDclfaz87ebaDcdfaO87ebxekabarcdtfgDaHBdbaDcwfazBdbaDclfaOBdbkavc;abfaocitfgDaOBdbaDaHBdlavaicdtfaHBdbavc;abfaocefcsGcitfgDazBdbaDaOBdlavaicefgicsGcdtfaOBdbavc;abfaocdfcsGcitfgDaHBdbaDazBdlavaiaCTaCcsSVfgicsGcdtfazBdbaiaATaAcsSVfhiaocifhokawcefhwaocsGhoaicsGhiarcifgrae6mbkkcbc99alaqSEhokavc;aef8Kjjjjbaok:clevu8Jjjjjbcz9Rhvdnalaecvf9pmbc9:skdnaiRbbc;:eGc;qeSmbcuskav9cb83iwaicefhoaialfc98fhrdnaeTmbdnadcdSmbcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcdtfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgiBdbalaiBdbawcefgwae9hmbxdkkcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcetfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgi87ebalaiBdbawcefgwae9hmbkkcbc99aoarSEk:Lvoeue99dud99eud99dndnadcl9hmbaeTmeindndnabcdfgd8Sbb:Yab8Sbbgi:Ygl:l:tabcefgv8Sbbgo:Ygr:l:tgwJbb;:9cawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai86bbdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad86bbdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad86bbabclfhbaecufgembxdkkaeTmbindndnabclfgd8Ueb:Yab8Uebgi:Ygl:l:tabcdfgv8Uebgo:Ygr:l:tgwJb;:FSawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai87ebdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad87ebdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad87ebabcwfhbaecufgembkkk:4ioiue99dud99dud99dnaeTmbcbhiabhlindndnal8Uebgv:YgoJ:ji:1Salcof8UebgrciVgw:Y:vgDNJbbbZJbbb:;avcu9kEMgq:lJbbb9p9DTmbaq:Ohkxekcjjjj94hkkalclf8Uebhvalcdf8UebhxalarcefciGcetfak87ebdndnax:YgqaDNJbbbZJbbb:;axcu9kEMgm:lJbbb9p9DTmbam:Ohxxekcjjjj94hxkabaiarciGgkfcd7cetfax87ebdndnav:YgmaDNJbbbZJbbb:;avcu9kEMgP:lJbbb9p9DTmbaP:Ohvxekcjjjj94hvkalarcufciGcetfav87ebdndnawaw2:ZgPaPMaoaoN:taqaqN:tamamN:tgoJbbbbaoJbbbb9GE:raDNJbbbZMgD:lJbbb9p9DTmbaD:Ohrxekcjjjj94hrkalakcetfar87ebalcwfhlaiclfhiaecufgembkkk9mbdnadcd4ae2gdTmbinababydbgecwtcw91:Yaece91cjjj98Gcjjj;8if::NUdbabclfhbadcufgdmbkkk:Tvirud99eudndnadcl9hmbaeTmeindndnabRbbgiabcefgl8Sbbgvabcdfgo8Sbbgrf9R:YJbbuJabcifgwRbbgdce4adVgDcd4aDVgDcl4aDVgD:Z:vgqNJbbbZMgk:lJbbb9p9DTmbak:Ohxxekcjjjj94hxkaoax86bbdndnaraif:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohoxekcjjjj94hokalao86bbdndnavaifar9R:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohixekcjjjj94hikabai86bbdndnaDadcetGadceGV:ZaqNJbbbZMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkawad86bbabclfhbaecufgembxdkkaeTmbindndnab8Vebgiabcdfgl8Uebgvabclfgo8Uebgrf9R:YJbFu9habcofgw8Vebgdce4adVgDcd4aDVgDcl4aDVgDcw4aDVgD:Z:vgqNJbbbZMgk:lJbbb9p9DTmbak:Ohxxekcjjjj94hxkaoax87ebdndnaraif:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohoxekcjjjj94hokalao87ebdndnavaifar9R:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohixekcjjjj94hikabai87ebdndnaDadcetGadceGV:ZaqNJbbbZMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkawad87ebabcwfhbaecufgembkkk9teiucbcbyd:K:G:cjbgeabcifc98GfgbBd:K:G:cjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaik;LeeeudndnaeabVciGTmbabhixekdndnadcz9pmbabhixekabhiinaiaeydbBdbaiclfaeclfydbBdbaicwfaecwfydbBdbaicxfaecxfydbBdbaeczfheaiczfhiadc9Wfgdcs0mbkkadcl6mbinaiaeydbBdbaeclfheaiclfhiadc98fgdci0mbkkdnadTmbinaiaeRbb86bbaicefhiaecefheadcufgdmbkkabk;aeedudndnabciGTmbabhixekaecFeGc:b:c:ew2hldndnadcz9pmbabhixekabhiinaialBdbaicxfalBdbaicwfalBdbaiclfalBdbaiczfhiadc9Wfgdcs0mbkkadcl6mbinaialBdbaiclfhiadc98fgdci0mbkkdnadTmbinaiae86bbaicefhiadcufgdmbkkabkk83dbcj:Gdk8Kbbbbdbbblbbbwbbbbbbbebbbdbbblbbbwbbbbc:K:Gdkl8W:qbb",e="b9H79TebbbeKl9Gbb9Gvuuuuueu9Giuuub9Geueuixkbbebeeddddilve9Weeeviebeoweuecj:Gdkr;Neqo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbdY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVblE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtboK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbrL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949WbwY9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVJ9V29VVbDl79IV9Rbqq:59Dklbzik94evu8Jjjjjbcz9Rhbcbheincbhdcbhiinabcwfadfaicjuaead4ceGglE86bbaialfhiadcefgdcw9hmbkaeai86b:q:W:cjbaecitab8Piw83i:q:G:cjbaecefgecjd9hmbkk:SBlEud97dur978Jjjjjbcj;kb9Rgv8Kjjjjbc9:hodnalTmbcuhoaiRbbgrc;WeGc:Ge9hmbarcsGgwce0mbc9:hoalcufadcd4cbawEgDadfgrcKcaawEgqaraq0Egk6mbaialfgxar9RhodnadTgmmbavaoad;8qbbkaicefhPcj;abad9Uc;WFbGcjdadca0EhsdndndnadTmbaoadfhzcbhHinaeaH9nmdaxaP9RaD6miabaHad2fgOavcjdfasaeaH9RaHasfae6EgAaAcsfgoc9WGgCSEhXaPaDfhQaocl4cifcd4hLavcj;cbfaCcetfhKavcj;cbfaCci2fhYavcj;cbfaCfh8AcbhEaoc;ab6h3incbh5dnawTmbaPaEcd4fRbbh5kcbh8Eavcj;cbfh8Findndndndna5a8Ecet4ciGgoc9:fPdebdkaxaQ9RaC6mwdnaCTmbavcj;cbfa8EaC2faQaC;8qbbkaQaAfhQxdkaCTmeavcj;cbfa8EaC2fcbaC;8kbxekaxaQ9RaL6moaoclVcbawEhraQaLfhocbhidna3mbaxao9Rc;Gb6mbcbhlina8FalfhidndndndndndnaQalco4fRbbgqciGarfPDbedibledibkaipxbbbbbbbbbbbbbbbbpklbxlkaiaopbblaopbbbgaclp:meaapmbzeHdOiAlCvXoQrLgacdp:meaapmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9oghpxiiiiiiiiiiiiiiiip8Jgap5b9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbagRb:q:W:cjbggpsaap5e9cjF;8;4;W;G;ab9:9cU1:Ng8Jcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPahaap9spklbagaoclffa8JRb:q:W:cjbfhoxikaiaopbbwaopbbbgaclp:meaapmbzeHdOiAlCvXoQrLpxssssssssssssssssp9oghpxssssssssssssssssp8Jgap5b9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbagRb:q:W:cjbggpsaap5e9cjF;8;4;W;G;ab9:9cU1:Ng8Jcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPahaap9spklbagaocwffa8JRb:q:W:cjbfhoxdkaiaopbbbpklbaoczfhoxekaiaopbbdaoRbbggcitpbi:q:G:cjbagRb:q:W:cjbggpsaoRbeg8Jcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbagaocdffa8JRb:q:W:cjbfhokdndndndndndnaqcd4ciGarfPDbedibledibkaiczfpxbbbbbbbbbbbbbbbbpklbxlkaiczfaopbblaopbbbgaclp:meaapmbzeHdOiAlCvXoQrLgacdp:meaapmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9oghpxiiiiiiiiiiiiiiiip8Jgap5b9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbagRb:q:W:cjbggpsaap5e9cjF;8;4;W;G;ab9:9cU1:Ng8Jcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPahaap9spklbagaoclffa8JRb:q:W:cjbfhoxikaiczfaopbbwaopbbbgaclp:meaapmbzeHdOiAlCvXoQrLpxssssssssssssssssp9oghpxssssssssssssssssp8Jgap5b9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbagRb:q:W:cjbggpsaap5e9cjF;8;4;W;G;ab9:9cU1:Ng8Jcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPahaap9spklbagaocwffa8JRb:q:W:cjbfhoxdkaiczfaopbbbpklbaoczfhoxekaiczfaopbbdaoRbbggcitpbi:q:G:cjbagRb:q:W:cjbggpsaoRbeg8Jcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbagaocdffa8JRb:q:W:cjbfhokdndndndndndnaqcl4ciGarfPDbedibledibkaicafpxbbbbbbbbbbbbbbbbpklbxlkaicafaopbblaopbbbgaclp:meaapmbzeHdOiAlCvXoQrLgacdp:meaapmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9oghpxiiiiiiiiiiiiiiiip8Jgap5b9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbagRb:q:W:cjbggpsaap5e9cjF;8;4;W;G;ab9:9cU1:Ng8Jcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPahaap9spklbagaoclffa8JRb:q:W:cjbfhoxikaicafaopbbwaopbbbgaclp:meaapmbzeHdOiAlCvXoQrLpxssssssssssssssssp9oghpxssssssssssssssssp8Jgap5b9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbagRb:q:W:cjbggpsaap5e9cjF;8;4;W;G;ab9:9cU1:Ng8Jcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPahaap9spklbagaocwffa8JRb:q:W:cjbfhoxdkaicafaopbbbpklbaoczfhoxekaicafaopbbdaoRbbggcitpbi:q:G:cjbagRb:q:W:cjbggpsaoRbeg8Jcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbagaocdffa8JRb:q:W:cjbfhokdndndndndndnaqco4arfPDbedibledibkaic8Wfpxbbbbbbbbbbbbbbbbpklbxlkaic8Wfaopbblaopbbbgaclp:meaapmbzeHdOiAlCvXoQrLgacdp:meaapmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9oghpxiiiiiiiiiiiiiiiip8Jgap5b9cjF;8;4;W;G;ab9:9cU1:Ngicitpbi:q:G:cjbaiRb:q:W:cjbgipsaap5e9cjF;8;4;W;G;ab9:9cU1:Ngqcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPahaap9spklbaiaoclffaqRb:q:W:cjbfhoxikaic8Wfaopbbwaopbbbgaclp:meaapmbzeHdOiAlCvXoQrLpxssssssssssssssssp9oghpxssssssssssssssssp8Jgap5b9cjF;8;4;W;G;ab9:9cU1:Ngicitpbi:q:G:cjbaiRb:q:W:cjbgipsaap5e9cjF;8;4;W;G;ab9:9cU1:Ngqcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPahaap9spklbaiaocwffaqRb:q:W:cjbfhoxdkaic8Wfaopbbbpklbaoczfhoxekaic8WfaopbbdaoRbbgicitpbi:q:G:cjbaiRb:q:W:cjbgipsaoRbegqcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbaiaocdffaqRb:q:W:cjbfhokalc;abfhialcjefaC0meaihlaxao9Rc;Fb0mbkkdnaiaC9pmbaici4hlinaxao9RcK6mwa8FaifhqdndndndndndnaQaico4fRbbalcoG4ciGarfPDbedibledibkaqpxbbbbbbbbbbbbbbbbpkbbxlkaqaopbblaopbbbgaclp:meaapmbzeHdOiAlCvXoQrLgacdp:meaapmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9oghpxiiiiiiiiiiiiiiiip8Jgap5b9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbagRb:q:W:cjbggpsaap5e9cjF;8;4;W;G;ab9:9cU1:Ng8Jcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPahaap9spkbbagaoclffa8JRb:q:W:cjbfhoxikaqaopbbwaopbbbgaclp:meaapmbzeHdOiAlCvXoQrLpxssssssssssssssssp9oghpxssssssssssssssssp8Jgap5b9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbagRb:q:W:cjbggpsaap5e9cjF;8;4;W;G;ab9:9cU1:Ng8Jcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPahaap9spkbbagaocwffa8JRb:q:W:cjbfhoxdkaqaopbbbpkbbaoczfhoxekaqaopbbdaoRbbggcitpbi:q:G:cjbagRb:q:W:cjbggpsaoRbeg8Jcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpkbbagaocdffa8JRb:q:W:cjbfhokalcdfhlaiczfgiaC6mbkkaohQaoTmoka8FaCfh8Fa8Ecefg8Ecl9hmbkdndndndnawTmbazaEcd4fRbbglciGPlbedwbkaCTmdaXaEfhlavaEfpbdbh8Kcbhoinalavcj;cbfaofpblbg8La8Aaofpblbg8MpmbzeHdOiAlCvXoQrLg8NaKaofpblbgyaYaofpblbg8PpmbzeHdOiAlCvXoQrLgIpmbezHdiOAlvCXorQLgacep9Taapxeeeeeeeeeeeeeeeeghp9op9Hp9rgaa8Kp9Ug8Kp9Abbbaladfgla8Kaaaapmlvorlvorlvorlvorp9Ug8Kp9Abbbaladfgla8KaaaapmwDqkwDqkwDqkwDqkp9Ug8Kp9Abbbaladfgla8KaaaapmxmPsxmPsxmPsxmPsp9Ug8Kp9Abbbaladfgla8Ka8NaIpmwDKYqk8AExm35Ps8E8Fgacep9Taaahp9op9Hp9rgap9Ug8Kp9Abbbaladfgla8Kaaaapmlvorlvorlvorlvorp9Ug8Kp9Abbbaladfgla8KaaaapmwDqkwDqkwDqkwDqkp9Ug8Kp9Abbbaladfgla8KaaaapmxmPsxmPsxmPsxmPsp9Ug8Kp9Abbbaladfgla8Ka8La8MpmwKDYq8AkEx3m5P8Es8Fg8Laya8PpmwKDYq8AkEx3m5P8Es8Fg8MpmbezHdiOAlvCXorQLgacep9Taaahp9op9Hp9rgap9Ug8Kp9Abbbaladfgla8Kaaaapmlvorlvorlvorlvorp9Ug8Kp9Abbbaladfgla8KaaaapmwDqkwDqkwDqkwDqkp9Ug8Kp9Abbbaladfgla8KaaaapmxmPsxmPsxmPsxmPsp9Ug8Kp9Abbbaladfgla8Ka8La8MpmwDKYqk8AExm35Ps8E8Fgacep9Taaahp9op9Hp9rgap9Ughp9Abbbaladfglahaaaapmlvorlvorlvorlvorp9Ughp9AbbbaladfglahaaaapmwDqkwDqkwDqkwDqkp9Ughp9AbbbaladfglahaaaapmxmPsxmPsxmPsxmPsp9Ug8Kp9AbbbaladfhlaoczfgoaC6mbxikkaCTmeaXaEfhlavaEfpbdbh8Kcbhoinalavcj;cbfaofpblbg8La8Aaofpblbg8MpmbzeHdOiAlCvXoQrLg8NaKaofpblbgyaYaofpblbg8PpmbzeHdOiAlCvXoQrLgIpmbezHdiOAlvCXorQLgacep:neaapxebebebebebebebebghp9op:bep9rgaa8Kp:oeg8Kp9Abbbaladfgla8Kaaaapmlvorlvorlvorlvorp:oeg8Kp9Abbbaladfgla8KaaaapmwDqkwDqkwDqkwDqkp:oeg8Kp9Abbbaladfgla8KaaaapmxmPsxmPsxmPsxmPsp:oeg8Kp9Abbbaladfgla8Ka8NaIpmwDKYqk8AExm35Ps8E8Fgacep:neaaahp9op:bep9rgap:oeg8Kp9Abbbaladfgla8Kaaaapmlvorlvorlvorlvorp:oeg8Kp9Abbbaladfgla8KaaaapmwDqkwDqkwDqkwDqkp:oeg8Kp9Abbbaladfgla8KaaaapmxmPsxmPsxmPsxmPsp:oeg8Kp9Abbbaladfgla8Ka8La8MpmwKDYq8AkEx3m5P8Es8Fg8Laya8PpmwKDYq8AkEx3m5P8Es8Fg8MpmbezHdiOAlvCXorQLgacep:neaaahp9op:bep9rgap:oeg8Kp9Abbbaladfgla8Kaaaapmlvorlvorlvorlvorp:oeg8Kp9Abbbaladfgla8KaaaapmwDqkwDqkwDqkwDqkp:oeg8Kp9Abbbaladfgla8KaaaapmxmPsxmPsxmPsxmPsp:oeg8Kp9Abbbaladfgla8Ka8La8MpmwDKYqk8AExm35Ps8E8Fgacep:neaaahp9op:bep9rgap:oeghp9Abbbaladfglahaaaapmlvorlvorlvorlvorp:oeghp9AbbbaladfglahaaaapmwDqkwDqkwDqkwDqkp:oeghp9AbbbaladfglahaaaapmxmPsxmPsxmPsxmPsp:oeg8Kp9AbbbaladfhlaoczfgoaC6mbxdkkaCTmbaXaEfhrcbhocbalcl4gl9Rc8FGhiavaEfpbdbhhinaravcj;cbfaofpblbg8Ka8Aaofpblbg8LpmbzeHdOiAlCvXoQrLg8MaKaofpblbg8NaYaofpblbgypmbzeHdOiAlCvXoQrLg8PpmbezHdiOAlvCXorQLgaaip:Reaaalp:Tep9qgaahp9rghp9Abbbaradfgrahaaaapmlvorlvorlvorlvorp9rghp9AbbbaradfgrahaaaapmwDqkwDqkwDqkwDqkp9rghp9AbbbaradfgrahaaaapmxmPsxmPsxmPsxmPsp9rghp9Abbbaradfgraha8Ma8PpmwDKYqk8AExm35Ps8E8Fgaaip:Reaaalp:Tep9qgap9rghp9Abbbaradfgrahaaaapmlvorlvorlvorlvorp9rghp9AbbbaradfgrahaaaapmwDqkwDqkwDqkwDqkp9rghp9AbbbaradfgrahaaaapmxmPsxmPsxmPsxmPsp9rghp9Abbbaradfgraha8Ka8LpmwKDYq8AkEx3m5P8Es8Fg8Ka8NaypmwKDYq8AkEx3m5P8Es8Fg8LpmbezHdiOAlvCXorQLgaaip:Reaaalp:Tep9qgap9rghp9Abbbaradfgrahaaaapmlvorlvorlvorlvorp9rghp9AbbbaradfgrahaaaapmwDqkwDqkwDqkwDqkp9rghp9AbbbaradfgrahaaaapmxmPsxmPsxmPsxmPsp9rghp9Abbbaradfgraha8Ka8LpmwDKYqk8AExm35Ps8E8Fgaaip:Reaaalp:Tep9qgap9rghp9Abbbaradfgrahaaaapmlvorlvorlvorlvorp9rghp9AbbbaradfgrahaaaapmwDqkwDqkwDqkwDqkp9rghp9AbbbaradfgrahaaaapmxmPsxmPsxmPsxmPsp9rghp9AbbbaradfhraoczfgoaC6mbkkaEclfgEad6mbkdnaXavcjdf9hmbaAad2goTmbaOavcjdfao;8qbbkdnammbavaXaAcufad2fad;8qbbkaAaHfhHc9:hoaQhPaQmbxlkkaeTmbaDalfhrcbhocuhlinaralaD9RglfaD6mdasaeao9Raoasfae6Eaofgoae6mbkaial9RhPkcbc99axaP9RakSEhoxekc9:hokavcj;kbf8Kjjjjbaokwbz:bjjjbkNsezu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnalaeci9UgrcHf6mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecje;8kbav9cu83iUav9cu83i8Wav9cu83iyav9cu83iaav9cu83iKav9cu83izav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhldnaeTmbcmcsaDceSEhkcbhxcbhmcbhrcbhicbhoindnalaq9nmbc9:hoxikdndnawRbbgDc;Ve0mbavc;abfaoaDcu7gPcl4fcsGcitfgsydlhzasydbhHdndnaDcsGgsak9pmbavaiaPfcsGcdtfydbaxasEhDaxasTgOfhxxekdndnascsSmbcehOasc987asamffcefhDxekalcefhDal8SbbgscFeGhPdndnascu9mmbaDhlxekalcvfhlaPcFbGhPcrhsdninaD8SbbgOcFbGastaPVhPaOcu9kmeaDcefhDascrfgsc8J9hmbxdkkaDcefhlkcehOaPce4cbaPceG9R7amfhDkaDhmkavc;abfaocitfgsaDBdbasazBdlavaicdtfaDBdbavc;abfaocefcsGcitfgsaHBdbasaDBdlaocdfhoaOaifhidnadcd9hmbabarcetfgsaH87ebasclfaD87ebascdfaz87ebxdkabarcdtfgsaHBdbascwfaDBdbasclfazBdbxekdnaDcpe0mbavaiaqaDcsGfRbbgscl4gP9RcsGcdtfydbaxcefgOaPEhDavaias9RcsGcdtfydbaOaPTgzfgOascsGgPEhsaPThPdndnadcd9hmbabarcetfgHax87ebaHclfas87ebaHcdfaD87ebxekabarcdtfgHaxBdbaHcwfasBdbaHclfaDBdbkavaicdtfaxBdbavc;abfaocitfgHaDBdbaHaxBdlavaicefgicsGcdtfaDBdbavc;abfaocefcsGcitfgHasBdbaHaDBdlavaiazfgicsGcdtfasBdbavc;abfaocdfcsGcitfgDaxBdbaDasBdlaocifhoaiaPfhiaOaPfhxxekaxcbalRbbgsEgHaDc;:eSgDfhOascsGhAdndnascl4gCmbaOcefhzxekaOhzavaiaC9RcsGcdtfydbhOkdndnaAmbazcefhxxekazhxavaias9RcsGcdtfydbhzkdndnaDTmbalcefhDxekalcdfhDal8SbegPcFeGhsdnaPcu9kmbalcofhHascFbGhscrhldninaD8SbbgPcFbGaltasVhsaPcu9kmeaDcefhDalcrfglc8J9hmbkaHhDxekaDcefhDkasce4cbasceG9R7amfgmhHkdndnaCcsSmbaDhsxekaDcefhsaD8SbbglcFeGhPdnalcu9kmbaDcvfhOaPcFbGhPcrhldninas8SbbgDcFbGaltaPVhPaDcu9kmeascefhsalcrfglc8J9hmbkaOhsxekascefhskaPce4cbaPceG9R7amfgmhOkdndnaAcsSmbashlxekascefhlas8SbbgDcFeGhPdnaDcu9kmbascvfhzaPcFbGhPcrhDdninal8SbbgscFbGaDtaPVhPascu9kmealcefhlaDcrfgDc8J9hmbkazhlxekalcefhlkaPce4cbaPceG9R7amfgmhzkdndnadcd9hmbabarcetfgDaH87ebaDclfaz87ebaDcdfaO87ebxekabarcdtfgDaHBdbaDcwfazBdbaDclfaOBdbkavc;abfaocitfgDaOBdbaDaHBdlavaicdtfaHBdbavc;abfaocefcsGcitfgDazBdbaDaOBdlavaicefgicsGcdtfaOBdbavc;abfaocdfcsGcitfgDaHBdbaDazBdlavaiaCTaCcsSVfgicsGcdtfazBdbaiaATaAcsSVfhiaocifhokawcefhwaocsGhoaicsGhiarcifgrae6mbkkcbc99alaqSEhokavc;aef8Kjjjjbaok:clevu8Jjjjjbcz9Rhvdnalaecvf9pmbc9:skdnaiRbbc;:eGc;qeSmbcuskav9cb83iwaicefhoaialfc98fhrdnaeTmbdnadcdSmbcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcdtfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgiBdbalaiBdbawcefgwae9hmbxdkkcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcetfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgi87ebalaiBdbawcefgwae9hmbkkcbc99aoarSEk;Toio97eue97aec98Ghedndnadcl9hmbaeTmecbhdinababpbbbgicKp:RecKp:Sep;6eglaicwp:RecKp:Sep;6ealp;Geaiczp:RecKp:Sep;6egvp;Gep;Kep;Legopxbbbbbbbbbbbbbbbbp:2egralpxbbbjbbbjbbbjbbbjgwp9op9rp;Keglpxbb;:9cbb;:9cbb;:9cbb;:9calalp;Meaoaop;Meavaravawp9op9rp;Keglalp;Mep;Kep;Kep;Jep;Negvp;Mepxbbn0bbn0bbn0bbn0grp;KepxFbbbFbbbFbbbFbbbp9oaipxbbbFbbbFbbbFbbbFp9op9qalavp;Mearp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaoavp;Mearp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpkbbabczfhbadclfgdae6mbxdkkaeTmbcbhdinabczfgDaDpbbbgipxbbbbbbFFbbbbbbFFgwp9oabpbbbgoaipmbediwDqkzHOAKY8AEgvczp:Reczp:Sep;6eglaoaipmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eavczp:Sep;6egvp;Gealp;Gep;Kep;Legipxbbbbbbbbbbbbbbbbp:2egralpxbbbjbbbjbbbjbbbjgqp9op9rp;Keglpxb;:FSb;:FSb;:FSb;:FSalalp;Meaiaip;Meavaravaqp9op9rp;Keglalp;Mep;Kep;Kep;Jep;Negvp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbp9oaiavp;Mearp;Keczp:Rep9qgialavp;Mearp;KepxFFbbFFbbFFbbFFbbp9oglpmwDKYqk8AExm35Ps8E8Fp9qpkbbabaoawp9oaialpmbezHdiOAlvCXorQLp9qpkbbabcafhbadclfgdae6mbkkk;2ileue97euo97dnaec98GgiTmbcbheinabcKfpx:ji:1S:ji:1S:ji:1S:ji:1SabpbbbglabczfgvpbbbgopmlvorxmPsCXQL358E8Fgrczp:Segwpxibbbibbbibbbibbbp9qp;6egDp;NegqaDaDp;MegDaDp;KealaopmbediwDqkzHOAKY8AEgDczp:Reczp:Sep;6eglalp;MeaDczp:Sep;6egoaop;Mearczp:Reczp:Sep;6egrarp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jep;Mepxbbn0bbn0bbn0bbn0gDp;KepxFFbbFFbbFFbbFFbbgkp9oaqaop;MeaDp;Keczp:Rep9qgoaqalp;MeaDp;Keakp9oaqarp;MeaDp;Keczp:Rep9qgDpmwDKYqk8AExm35Ps8E8Fglp5eawclp:RegqpEi:T:j83ibavalp5baqpEd:T:j83ibabcwfaoaDpmbezHdiOAlvCXorQLgDp5eaqpEe:T:j83ibabaDp5baqpEb:T:j83ibabcafhbaeclfgeai6mbkkkuee97dnadcd4ae2c98GgeTmbcbhdinababpbbbgicwp:Recwp:Sep;6eaicep:SepxbbjFbbjFbbjFbbjFp9opxbbjZbbjZbbjZbbjZp:Uep;Mepkbbabczfhbadclfgdae6mbkkk:Sodw97euaec98Ghedndnadcl9hmbaeTmecbhdinabpxbbuJbbuJbbuJbbuJabpbbbgicKp:TeglaicYp:Tep9qgvcdp:Teavp9qgvclp:Teavp9qgop;6ep;Negvaicwp:RecKp:SegraipxFbbbFbbbFbbbFbbbgwp9ogDp:Uep;6ep;Mepxbbn0bbn0bbn0bbn0gqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9oavaDarp:Xeaiczp:RecKp:Segip:Uep;6ep;Meaqp;Keawp9op9qavaDaraip:Uep:Xep;6ep;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qavaoalcep:Rep9oalpxebbbebbbebbbebbbp9op9qp;6ep;Meaqp;KecKp:Rep9qpkbbabczfhbadclfgdae6mbxdkkaeTmbcbhdinabczfgkpxbFu9hbFu9hbFu9hbFu9habpbbbglakpbbbgrpmlvorxmPsCXQL358E8Fgvczp:TegqavcHp:Tep9qgicdp:Teaip9qgiclp:Teaip9qgicwp:Teaip9qgop;6ep;NegialarpmbediwDqkzHOAKY8AEgDpxFFbbFFbbFFbbFFbbglp9ograDczp:Segwp:Ueavczp:Reczp:SegDp:Xep;6ep;Mepxbbn0bbn0bbn0bbn0gvp;Kealp9oaiarawaDp:Uep:Xep;6ep;Meavp;Keczp:Rep9qgwaiaoaqcep:Rep9oaqpxebbbebbbebbbebbbp9op9qp;6ep;Meavp;Keczp:ReaiaDarp:Uep;6ep;Meavp;Kealp9op9qgipmwDKYqk8AExm35Ps8E8FpkbbabawaipmbezHdiOAlvCXorQLpkbbabcafhbadclfgdae6mbkkk9teiucbcbydj:G:cjbgeabcifc98GfgbBdj:G:cjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaikkxebcj:Gdklz:zbb",t=new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,3,2,0,0,5,3,1,0,1,12,1,0,10,22,2,12,0,65,0,65,0,65,0,252,10,0,0,11,7,0,65,0,253,15,26,11]),i=new Uint8Array([32,0,65,2,1,106,34,33,3,128,11,4,13,64,6,253,10,7,15,116,127,5,8,12,40,16,19,54,20,9,27,255,113,17,42,67,24,23,146,148,18,14,22,45,70,69,56,114,101,21,25,63,75,136,108,28,118,29,73,115]);if(typeof WebAssembly!="object")return{supported:!1};var o=WebAssembly.validate(t)?m(e):m(r),c,d=WebAssembly.instantiate(o,{}).then(function(j){c=j.instance,c.exports.__wasm_call_ctors()});function m(j){for(var q=new Uint8Array(j.length),J=0;J<j.length;++J){var Z=j.charCodeAt(J);q[J]=Z>96?Z-97:Z>64?Z-39:Z+4}for(var Y=0,J=0;J<j.length;++J)q[Y++]=q[J]<60?i[q[J]]:(q[J]-60)*64+q[++J];return q.buffer.slice(0,Y)}function _(j,q,J,Z,Y,se,he){var ue=j.exports.sbrk,$=Z+3&-4,Q=ue($*Y),U=ue(se.length),be=new Uint8Array(j.exports.memory.buffer);be.set(se,U);var ve=q(Q,Z,Y,U,se.length);if(ve==0&&he&&he(Q,$,Y),J.set(be.subarray(Q,Q+Z*Y)),ue(Q-ue(0)),ve!=0)throw new Error("Malformed buffer data: "+ve)}var T={NONE:"",OCTAHEDRAL:"meshopt_decodeFilterOct",QUATERNION:"meshopt_decodeFilterQuat",EXPONENTIAL:"meshopt_decodeFilterExp",COLOR:"meshopt_decodeFilterColor"},y={ATTRIBUTES:"meshopt_decodeVertexBuffer",TRIANGLES:"meshopt_decodeIndexBuffer",INDICES:"meshopt_decodeIndexSequence"},w=[],M=0;function N(j){var q={object:new Worker(j),pending:0,requests:{}};return q.object.onmessage=function(J){var Z=J.data;q.pending-=Z.count,q.requests[Z.id][Z.action](Z.value),delete q.requests[Z.id]},q}function O(j){for(var q="self.ready = WebAssembly.instantiate(new Uint8Array(["+new Uint8Array(o)+"]), {}).then(function(result) { result.instance.exports.__wasm_call_ctors(); return result.instance; });self.onmessage = "+W.name+";"+_.toString()+W.toString(),J=new Blob([q],{type:"text/javascript"}),Z=URL.createObjectURL(J),Y=w.length;Y<j;++Y)w[Y]=N(Z);for(var Y=j;Y<w.length;++Y)w[Y].object.postMessage({});w.length=j,URL.revokeObjectURL(Z)}function F(j,q,J,Z,Y){for(var se=w[0],he=1;he<w.length;++he)w[he].pending<se.pending&&(se=w[he]);return new Promise(function(ue,$){var Q=new Uint8Array(J),U=++M;se.pending+=j,se.requests[U]={resolve:ue,reject:$},se.object.postMessage({id:U,count:j,size:q,source:Q,mode:Z,filter:Y},[Q.buffer])})}function W(j){var q=j.data;self.ready.then(function(J){if(!q.id)return self.close();try{var Z=new Uint8Array(q.count*q.size);_(J,J.exports[q.mode],Z,q.count,q.size,q.source,J.exports[q.filter]),self.postMessage({id:q.id,count:q.count,action:"resolve",value:Z},[Z.buffer])}catch(Y){self.postMessage({id:q.id,count:q.count,action:"reject",value:Y})}})}return{ready:d,supported:!0,useWorkers:function(j){O(j)},decodeVertexBuffer:function(j,q,J,Z,Y){_(c,c.exports.meshopt_decodeVertexBuffer,j,q,J,Z,c.exports[T[Y]])},decodeIndexBuffer:function(j,q,J,Z){_(c,c.exports.meshopt_decodeIndexBuffer,j,q,J,Z)},decodeIndexSequence:function(j,q,J,Z){_(c,c.exports.meshopt_decodeIndexSequence,j,q,J,Z)},decodeGltfBuffer:function(j,q,J,Z,Y,se){_(c,c.exports[y[Y]],j,q,J,Z,c.exports[T[se]])},decodeGltfBufferAsync:function(j,q,J,Z,Y){return w.length>0?F(j,q,J,y[Z],T[Y]):d.then(function(){var se=new Uint8Array(j*q);return _(c,c.exports[y[Z]],se,j,q,J,c.exports[T[Y]]),se})}}})();function kt(r,e){if(!r)throw new Error(e||"assert failed: gltf")}const Cd={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Md={5120:1,5121:1,5122:2,5123:2,5125:4,5126:4},Fw=1.33,Gl=["SCALAR","VEC2","VEC3","VEC4"],Bw=[[Int8Array,5120],[Uint8Array,5121],[Int16Array,5122],[Uint16Array,5123],[Uint32Array,5125],[Float32Array,5126],[Float64Array,5130]],Dw=new Map(Bw),Uw={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Vw={5120:1,5121:1,5122:2,5123:2,5125:4,5126:4},jw={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array};function Id(r){return Gl[r-1]||Gl[0]}function wo(r){const e=Dw.get(r.constructor);if(!e)throw new Error("Illegal typed array");return e}function so(r,e){const t=jw[r.componentType],i=Uw[r.type],o=Vw[r.componentType],c=r.count*i,d=r.count*i*o;kt(d>=0&&d<=e.byteLength);const m=Md[r.componentType],_=Cd[r.type];return{ArrayType:t,length:c,byteLength:d,componentByteSize:m,numberOfComponentsInElement:_}}function Rd(r){let{images:e,bufferViews:t}=r;e=e||[],t=t||[];const i=e.map(d=>d.bufferView);t=t.filter(d=>!i.includes(d));const o=t.reduce((d,m)=>d+m.byteLength,0),c=e.reduce((d,m)=>{const{width:_,height:T}=m.image;return d+_*T},0);return o+Math.ceil(4*c*Fw)}function Gw(r,e,t){const i=r.bufferViews[t];kt(i);const o=i.buffer,c=e[o];kt(c);const d=(i.byteOffset||0)+c.byteOffset;return new Uint8Array(c.arrayBuffer,d,i.byteLength)}function zw(r,e,t){var F,W;const i=typeof t=="number"?(F=r.accessors)==null?void 0:F[t]:t;if(!i)throw new Error(`No gltf accessor ${JSON.stringify(t)}`);const o=(W=r.bufferViews)==null?void 0:W[i.bufferView||0];if(!o)throw new Error(`No gltf buffer view for accessor ${o}`);const{arrayBuffer:c,byteOffset:d}=e[o.buffer],m=(d||0)+(i.byteOffset||0)+(o.byteOffset||0),{ArrayType:_,length:T,componentByteSize:y,numberOfComponentsInElement:w}=so(i,o),M=y*w,N=o.byteStride||M;if(typeof o.byteStride>"u"||o.byteStride===M)return new _(c,m,T);const O=new _(T);for(let j=0;j<i.count;j++){const q=new _(c,m+j*N,w);O.set(q,j*w)}return O}function Hw(){return{asset:{version:"2.0",generator:"loaders.gl"},buffers:[],extensions:{},extensionsRequired:[],extensionsUsed:[]}}class St{constructor(e){B(this,"gltf");B(this,"sourceBuffers");B(this,"byteLength");this.gltf={json:(e==null?void 0:e.json)||Hw(),buffers:(e==null?void 0:e.buffers)||[],images:(e==null?void 0:e.images)||[]},this.sourceBuffers=[],this.byteLength=0,this.gltf.buffers&&this.gltf.buffers[0]&&(this.byteLength=this.gltf.buffers[0].byteLength,this.sourceBuffers=[this.gltf.buffers[0]])}get json(){return this.gltf.json}getApplicationData(e){return this.json[e]}getExtraData(e){return(this.json.extras||{})[e]}hasExtension(e){const t=this.getUsedExtensions().find(o=>o===e),i=this.getRequiredExtensions().find(o=>o===e);return typeof t=="string"||typeof i=="string"}getExtension(e){const t=this.getUsedExtensions().find(o=>o===e),i=this.json.extensions||{};return t?i[e]:null}getRequiredExtension(e){return this.getRequiredExtensions().find(i=>i===e)?this.getExtension(e):null}getRequiredExtensions(){return this.json.extensionsRequired||[]}getUsedExtensions(){return this.json.extensionsUsed||[]}getRemovedExtensions(){return this.json.extensionsRemoved||[]}getObjectExtension(e,t){return(e.extensions||{})[t]}getScene(e){return this.getObject("scenes",e)}getNode(e){return this.getObject("nodes",e)}getSkin(e){return this.getObject("skins",e)}getMesh(e){return this.getObject("meshes",e)}getMaterial(e){return this.getObject("materials",e)}getAccessor(e){return this.getObject("accessors",e)}getTexture(e){return this.getObject("textures",e)}getSampler(e){return this.getObject("samplers",e)}getImage(e){return this.getObject("images",e)}getBufferView(e){return this.getObject("bufferViews",e)}getBuffer(e){return this.getObject("buffers",e)}getObject(e,t){if(typeof t=="object")return t;const i=this.json[e]&&this.json[e][t];if(!i)throw new Error(`glTF file error: Could not find ${e}[${t}]`);return i}getTypedArrayForBufferView(e){e=this.getBufferView(e);const t=e.buffer,i=this.gltf.buffers[t];kt(i);const o=(e.byteOffset||0)+i.byteOffset;return new Uint8Array(i.arrayBuffer,o,e.byteLength)}getTypedArrayForAccessor(e){const t=this.getAccessor(e);return zw(this.gltf.json,this.gltf.buffers,t)}getTypedArrayForImageData(e){e=this.getAccessor(e);const t=this.getBufferView(e.bufferView),o=this.getBuffer(t.buffer).data,c=t.byteOffset||0;return new Uint8Array(o,c,t.byteLength)}addApplicationData(e,t){return this.json[e]=t,this}addExtraData(e,t){return this.json.extras=this.json.extras||{},this.json.extras[e]=t,this}addObjectExtension(e,t,i){return e.extensions=e.extensions||{},e.extensions[t]=i,this.registerUsedExtension(t),this}setObjectExtension(e,t,i){const o=e.extensions||{};o[t]=i}removeObjectExtension(e,t){const i=(e==null?void 0:e.extensions)||{};if(i[t]){this.json.extensionsRemoved=this.json.extensionsRemoved||[];const o=this.json.extensionsRemoved;o.includes(t)||o.push(t)}delete i[t]}addExtension(e,t={}){return kt(t),this.json.extensions=this.json.extensions||{},this.json.extensions[e]=t,this.registerUsedExtension(e),t}addRequiredExtension(e,t={}){return kt(t),this.addExtension(e,t),this.registerRequiredExtension(e),t}registerUsedExtension(e){this.json.extensionsUsed=this.json.extensionsUsed||[],this.json.extensionsUsed.find(t=>t===e)||this.json.extensionsUsed.push(e)}registerRequiredExtension(e){this.registerUsedExtension(e),this.json.extensionsRequired=this.json.extensionsRequired||[],this.json.extensionsRequired.find(t=>t===e)||this.json.extensionsRequired.push(e)}removeExtension(e){var t;if((t=this.json.extensions)!=null&&t[e]){this.json.extensionsRemoved=this.json.extensionsRemoved||[];const i=this.json.extensionsRemoved;i.includes(e)||i.push(e)}this.json.extensions&&delete this.json.extensions[e],this.json.extensionsRequired&&this._removeStringFromArray(this.json.extensionsRequired,e),this.json.extensionsUsed&&this._removeStringFromArray(this.json.extensionsUsed,e)}setDefaultScene(e){this.json.scene=e}addScene(e){const{nodeIndices:t}=e;return this.json.scenes=this.json.scenes||[],this.json.scenes.push({nodes:t}),this.json.scenes.length-1}addNode(e){const{meshIndex:t,matrix:i}=e;this.json.nodes=this.json.nodes||[];const o={mesh:t};return i&&(o.matrix=i),this.json.nodes.push(o),this.json.nodes.length-1}addMesh(e){const{attributes:t,indices:i,material:o,mode:c=4}=e,m={primitives:[{attributes:this._addAttributes(t),mode:c}]};if(i){const _=this._addIndices(i);m.primitives[0].indices=_}return Number.isFinite(o)&&(m.primitives[0].material=o),this.json.meshes=this.json.meshes||[],this.json.meshes.push(m),this.json.meshes.length-1}addPointCloud(e){const i={primitives:[{attributes:this._addAttributes(e),mode:0}]};return this.json.meshes=this.json.meshes||[],this.json.meshes.push(i),this.json.meshes.length-1}addImage(e,t){const i=Ib(e),o=t||(i==null?void 0:i.mimeType),d={bufferView:this.addBufferView(e),mimeType:o};return this.json.images=this.json.images||[],this.json.images.push(d),this.json.images.length-1}addBufferView(e,t=0,i=this.byteLength){const o=e.byteLength;kt(Number.isFinite(o)),this.sourceBuffers=this.sourceBuffers||[],this.sourceBuffers.push(e);const c={buffer:t,byteOffset:i,byteLength:o};return this.byteLength+=Ki(o,4),this.json.bufferViews=this.json.bufferViews||[],this.json.bufferViews.push(c),this.json.bufferViews.length-1}addAccessor(e,t){const i={bufferView:e,type:Id(t.size),componentType:t.componentType,count:t.count,max:t.max,min:t.min};return this.json.accessors=this.json.accessors||[],this.json.accessors.push(i),this.json.accessors.length-1}addBinaryBuffer(e,t={size:3}){const i=this.addBufferView(e);let o={min:t.min,max:t.max};(!o.min||!o.max)&&(o=this._getAccessorMinMax(e,t.size));const c={size:t.size,componentType:wo(e),count:Math.round(e.length/t.size),min:o.min,max:o.max};return this.addAccessor(i,Object.assign(c,t))}addTexture(e){const{imageIndex:t}=e,i={source:t};return this.json.textures=this.json.textures||[],this.json.textures.push(i),this.json.textures.length-1}addMaterial(e){return this.json.materials=this.json.materials||[],this.json.materials.push(e),this.json.materials.length-1}createBinaryChunk(){var c,d;const e=this.byteLength,t=new ArrayBuffer(e),i=new Uint8Array(t);let o=0;for(const m of this.sourceBuffers||[])o=zb(m,i,o);(d=(c=this.json)==null?void 0:c.buffers)!=null&&d[0]?this.json.buffers[0].byteLength=e:this.json.buffers=[{byteLength:e}],this.gltf.binary=t,this.sourceBuffers=[t],this.gltf.buffers=[{arrayBuffer:t,byteOffset:0,byteLength:t.byteLength}]}_removeStringFromArray(e,t){let i=!0;for(;i;){const o=e.indexOf(t);o>-1?e.splice(o,1):i=!1}}_addAttributes(e={}){const t={};for(const i in e){const o=e[i],c=this._getGltfAttributeName(i),d=this.addBinaryBuffer(o.value,o);t[c]=d}return t}_addIndices(e){return this.addBinaryBuffer(e,{size:1})}_getGltfAttributeName(e){switch(e.toLowerCase()){case"position":case"positions":case"vertices":return"POSITION";case"normal":case"normals":return"NORMAL";case"color":case"colors":return"COLOR_0";case"texcoord":case"texcoords":return"TEXCOORD_0";default:return e}}_getAccessorMinMax(e,t){const i={min:null,max:null};if(e.length<t)return i;i.min=[],i.max=[];const o=e.subarray(0,t);for(const c of o)i.min.push(c),i.max.push(c);for(let c=t;c<e.length;c+=t)for(let d=0;d<t;d++)i.min[0+d]=Math.min(i.min[0+d],e[c+d]),i.max[0+d]=Math.max(i.max[0+d],e[c+d]);return i}}function zl(r){return(r%1+1)%1}const Nd={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16,BOOLEAN:1,STRING:1,ENUM:1},qw={INT8:Int8Array,UINT8:Uint8Array,INT16:Int16Array,UINT16:Uint16Array,INT32:Int32Array,UINT32:Uint32Array,INT64:BigInt64Array,UINT64:BigUint64Array,FLOAT32:Float32Array,FLOAT64:Float64Array},Pd={INT8:1,UINT8:1,INT16:2,UINT16:2,INT32:4,UINT32:4,INT64:8,UINT64:8,FLOAT32:4,FLOAT64:8};function o0(r,e){return Pd[e]*Nd[r]}function Eo(r,e,t,i){if(t!=="UINT8"&&t!=="UINT16"&&t!=="UINT32"&&t!=="UINT64")return null;const o=r.getTypedArrayForBufferView(e),c=xo(o,"SCALAR",t,i+1);return c instanceof BigInt64Array||c instanceof BigUint64Array?null:c}function xo(r,e,t,i=1){const o=Nd[e],c=qw[t],d=Pd[t],m=i*o,_=m*d;let T=r.buffer,y=r.byteOffset;return y%d!==0&&(T=new Uint8Array(T).slice(y,y+_).buffer,y=0),new c(UA(T),y,m)}function a0(r,e,t){var T,y,w,M,N;const i=`TEXCOORD_${e.texCoord||0}`,o=t.attributes[i],c=r.getTypedArrayForAccessor(o),d=r.gltf.json,m=e.index,_=(y=(T=d.textures)==null?void 0:T[m])==null?void 0:y.source;if(typeof _<"u"){const O=(M=(w=d.images)==null?void 0:w[_])==null?void 0:M.mimeType,F=(N=r.gltf.images)==null?void 0:N[_];if(F&&typeof F.width<"u"){const W=[];for(let j=0;j<c.length;j+=2){const q=Qw(F,O,c,j,e.channels);W.push(q)}return W}}return[]}function Ld(r,e,t,i,o){if(!(t!=null&&t.length))return;const c=[];for(const y of t){let w=i.findIndex(M=>M===y);w===-1&&(w=i.push(y)-1),c.push(w)}const d=new Uint32Array(c),m=r.gltf.buffers.push({arrayBuffer:d.buffer,byteOffset:d.byteOffset,byteLength:d.byteLength})-1,_=r.addBufferView(d,m,0),T=r.addAccessor(_,{size:1,componentType:wo(d),count:d.length});o.attributes[e]=T}function Qw(r,e,t,i,o=[0]){const c={r:{offset:0,shift:0},g:{offset:1,shift:8},b:{offset:2,shift:16},a:{offset:3,shift:24}},d=t[i],m=t[i+1];let _=1;e&&(e.indexOf("image/jpeg")!==-1||e.indexOf("image/png")!==-1)&&(_=4);const T=Ww(d,m,r,_);let y=0;for(const w of o){const M=typeof w=="number"?Object.values(c)[w]:c[w],N=T+M.offset,O=Rb(r);if(O.data.length<=N)throw new Error(`${O.data.length} <= ${N}`);const F=O.data[N];y|=F<<M.shift}return y}function Ww(r,e,t,i=1){const o=t.width,c=zl(r)*(o-1),d=Math.round(c),m=t.height,_=zl(e)*(m-1),T=Math.round(_),y=t.components?t.components:i;return(T*o+d)*y}function kd(r,e,t,i,o){const c=[];for(let d=0;d<e;d++){const m=t[d],_=t[d+1]-t[d];if(_+m>i)break;const T=m/o,y=_/o;c.push(r.slice(T,T+y))}return c}function Od(r,e,t){const i=[];for(let o=0;o<e;o++){const c=o*t;i.push(r.slice(c,c+t))}return i}function Fd(r,e,t,i){if(t)throw new Error("Not implemented - arrayOffsets for strings is specified");if(i){const o=[],c=new TextDecoder("utf8");let d=0;for(let m=0;m<r;m++){const _=i[m+1]-i[m];if(_+d<=e.length){const T=e.subarray(d,_+d),y=c.decode(T);o.push(y),d+=_}}return o}return[]}const ri="EXT_mesh_features",Kw=ri;async function $w(r,e){const t=new St(r);Yw(t,e)}function Xw(r,e){const t=new St(r);return Zw(t),t.createBinaryChunk(),t.gltf}function Yw(r,e){const t=r.gltf.json;if(t.meshes)for(const i of t.meshes)for(const o of i.primitives)Jw(r,o,e)}function Jw(r,e,t){var c,d,m;if(!((c=t==null?void 0:t.gltf)!=null&&c.loadBuffers))return;const i=(d=e.extensions)==null?void 0:d[ri],o=i==null?void 0:i.featureIds;if(o)for(const _ of o){let T;if(typeof _.attribute<"u"){const y=`_FEATURE_ID_${_.attribute}`,w=e.attributes[y];T=r.getTypedArrayForAccessor(w)}else typeof _.texture<"u"&&((m=t==null?void 0:t.gltf)!=null&&m.loadImages)?T=a0(r,_.texture,e):T=[];_.data=T}}function Zw(r,e){const t=r.gltf.json.meshes;if(t)for(const i of t)for(const o of i.primitives)tE(r,o)}function eE(r,e,t,i){e.extensions||(e.extensions={});let o=e.extensions[ri];o||(o={featureIds:[]},e.extensions[ri]=o);const{featureIds:c}=o,d={featureCount:t.length,propertyTable:i,data:t};c.push(d),r.addObjectExtension(e,ri,o)}function tE(r,e){var o;const t=(o=e.extensions)==null?void 0:o[ri];if(!t)return;const i=t.featureIds;i.forEach((c,d)=>{if(c.data){const{accessorKey:m,index:_}=rE(e.attributes),T=new Uint32Array(c.data);i[d]={featureCount:T.length,propertyTable:c.propertyTable,attribute:_},r.gltf.buffers.push({arrayBuffer:T.buffer,byteOffset:T.byteOffset,byteLength:T.byteLength});const y=r.addBufferView(T),w=r.addAccessor(y,{size:1,componentType:wo(T),count:T.length});e.attributes[m]=w}})}function rE(r){const e="_FEATURE_ID_",t=Object.keys(r).filter(c=>c.indexOf(e)===0);let i=-1;for(const c of t){const d=Number(c.substring(e.length));d>i&&(i=d)}return i++,{accessorKey:`${e}${i}`,index:i}}const nE=Object.freeze(Object.defineProperty({__proto__:null,createExtMeshFeatures:eE,decode:$w,encode:Xw,name:Kw},Symbol.toStringTag,{value:"Module"})),ii="EXT_structural_metadata",iE=ii;async function sE(r,e){const t=new St(r);aE(t,e)}function oE(r,e){const t=new St(r);return SE(t),t.createBinaryChunk(),t.gltf}function aE(r,e){var i,o;if(!((i=e.gltf)!=null&&i.loadBuffers))return;const t=r.getExtension(ii);t&&((o=e.gltf)!=null&&o.loadImages&&AE(r,t),cE(r,t))}function AE(r,e){const t=e.propertyTextures,i=r.gltf.json;if(t&&i.meshes)for(const o of i.meshes)for(const c of o.primitives)uE(r,t,c,e)}function cE(r,e){const t=e.schema;if(!t)return;const i=t.classes,o=e.propertyTables;if(i&&o)for(const c in i){const d=lE(o,c);d&&hE(r,t,d)}}function lE(r,e){for(const t of r)if(t.class===e)return t;return null}function uE(r,e,t,i){var d;if(!e)return;const o=(d=t.extensions)==null?void 0:d[ii],c=o==null?void 0:o.propertyTextures;if(c)for(const m of c){const _=e[m];fE(r,_,t,i)}}function fE(r,e,t,i){var c;if(!e.properties)return;i.dataAttributeNames||(i.dataAttributeNames=[]);const o=e.class;for(const d in e.properties){const m=`${o}_${d}`,_=(c=e.properties)==null?void 0:c[d];if(!_)continue;_.data||(_.data=[]);const T=_.data,y=a0(r,_,t);y!==null&&(Ld(r,m,y,T,t),_.data=T,i.dataAttributeNames.push(m))}}function hE(r,e,t){var c,d;const i=(c=e.classes)==null?void 0:c[t.class];if(!i)throw new Error(`Incorrect data in the EXT_structural_metadata extension: no schema class with name ${t.class}`);const o=t.count;for(const m in i.properties){const _=i.properties[m],T=(d=t.properties)==null?void 0:d[m];if(T){const y=dE(r,e,_,o,T);T.data=y}}}function dE(r,e,t,i,o){let c=[];const d=o.values,m=r.getTypedArrayForBufferView(d),_=pE(r,t,o,i),T=mE(r,o,i);switch(t.type){case"SCALAR":case"VEC2":case"VEC3":case"VEC4":case"MAT2":case"MAT3":case"MAT4":{c=gE(t,i,m,_);break}case"BOOLEAN":throw new Error(`Not implemented - classProperty.type=${t.type}`);case"STRING":{c=Fd(i,m,_,T);break}case"ENUM":{c=bE(e,t,i,m,_);break}default:throw new Error(`Unknown classProperty type ${t.type}`)}return c}function pE(r,e,t,i){return e.array&&typeof e.count>"u"&&typeof t.arrayOffsets<"u"?Eo(r,t.arrayOffsets,t.arrayOffsetType||"UINT32",i):null}function mE(r,e,t){return typeof e.stringOffsets<"u"?Eo(r,e.stringOffsets,e.stringOffsetType||"UINT32",t):null}function gE(r,e,t,i){const o=r.array,c=r.count,d=o0(r.type,r.componentType),m=t.byteLength/d;let _;return r.componentType?_=xo(t,r.type,r.componentType,m):_=t,o?i?kd(_,e,i,t.length,d):c?Od(_,e,c):[]:_}function bE(r,e,t,i,o){var w;const c=e.enumType;if(!c)throw new Error("Incorrect data in the EXT_structural_metadata extension: classProperty.enumType is not set for type ENUM");const d=(w=r.enums)==null?void 0:w[c];if(!d)throw new Error(`Incorrect data in the EXT_structural_metadata extension: schema.enums does't contain ${c}`);const m=d.valueType||"UINT16",_=o0(e.type,m),T=i.byteLength/_;let y=xo(i,e.type,m,T);if(y||(y=i),e.array){if(o)return _E({valuesData:y,numberOfElements:t,arrayOffsets:o,valuesDataBytesLength:i.length,elementSize:_,enumEntry:d});const M=e.count;return M?TE(y,t,M,d):[]}return A0(y,0,t,d)}function _E(r){const{valuesData:e,numberOfElements:t,arrayOffsets:i,valuesDataBytesLength:o,elementSize:c,enumEntry:d}=r,m=[];for(let _=0;_<t;_++){const T=i[_],y=i[_+1]-i[_];if(y+T>o)break;const w=T/c,M=y/c,N=A0(e,w,M,d);m.push(N)}return m}function TE(r,e,t,i){const o=[];for(let c=0;c<e;c++){const d=t*c,m=A0(r,d,t,i);o.push(m)}return o}function A0(r,e,t,i){const o=[];for(let c=0;c<t;c++)if(r instanceof BigInt64Array||r instanceof BigUint64Array)o.push("");else{const d=r[e+c],m=vE(i,d);m?o.push(m.name):o.push("")}return o}function vE(r,e){for(const t of r.values)if(t.value===e)return t;return null}const yE="schemaClassId";function SE(r,e){var i,o;const t=r.getExtension(ii);if(t&&t.propertyTables)for(const c of t.propertyTables){const d=c.class,m=(o=(i=t.schema)==null?void 0:i.classes)==null?void 0:o[d];c.properties&&m&&wE(c,m,r)}}function wE(r,e,t){for(const i in r.properties){const o=r.properties[i].data;if(o){const c=e.properties[i];if(c){const d=ME(o,c,t);r.properties[i]=d}}}}function EE(r,e,t=yE){let i=r.getExtension(ii);i||(i=r.addExtension(ii)),i.schema=xE(e,t,i.schema);const o=CE(e,t,i.schema);return i.propertyTables||(i.propertyTables=[]),i.propertyTables.push(o)-1}function xE(r,e,t){const i=t??{id:"schema_id"},o={properties:{}};for(const c of r){const d={type:c.elementType,componentType:c.componentType};o.properties[c.name]=d}return i.classes={},i.classes[e]=o,i}function CE(r,e,t){var d;const i={class:e,count:0};let o=0;const c=(d=t.classes)==null?void 0:d[e];for(const m of r){if(o===0&&(o=m.values.length),o!==m.values.length&&m.values.length)throw new Error("Illegal values in attributes");(c==null?void 0:c.properties[m.name])&&(i.properties||(i.properties={}),i.properties[m.name]={values:0,data:m.values})}return i.count=o,i}function ME(r,e,t){const i={values:0};if(e.type==="STRING"){const{stringData:o,stringOffsets:c}=NE(r);i.stringOffsets=Ma(c,t),i.values=Ma(o,t)}else if(e.type==="SCALAR"&&e.componentType){const o=RE(r,e.componentType);i.values=Ma(o,t)}return i}const IE={INT8:Int8Array,UINT8:Uint8Array,INT16:Int16Array,UINT16:Uint16Array,INT32:Int32Array,UINT32:Uint32Array,INT64:Int32Array,UINT64:Uint32Array,FLOAT32:Float32Array,FLOAT64:Float64Array};function RE(r,e){const t=[];for(const o of r)t.push(Number(o));const i=IE[e];if(!i)throw new Error("Illegal component type");return new i(t)}function NE(r){const e=new TextEncoder,t=[];let i=0;for(const _ of r){const T=e.encode(_);i+=T.length,t.push(T)}const o=new Uint8Array(i),c=[];let d=0;for(const _ of t)o.set(_,d),c.push(d),d+=_.length;c.push(d);const m=new Uint32Array(c);return{stringData:o,stringOffsets:m}}function Ma(r,e){return e.gltf.buffers.push({arrayBuffer:UA(r.buffer),byteOffset:r.byteOffset,byteLength:r.byteLength}),e.addBufferView(r)}const PE=Object.freeze(Object.defineProperty({__proto__:null,createExtStructuralMetadata:EE,decode:sE,encode:oE,name:iE},Symbol.toStringTag,{value:"Module"})),Bd="EXT_feature_metadata",LE=Bd;async function kE(r,e){const t=new St(r);OE(t,e)}function OE(r,e){var i,o;if(!((i=e.gltf)!=null&&i.loadBuffers))return;const t=r.getExtension(Bd);t&&((o=e.gltf)!=null&&o.loadImages&&FE(r,t),BE(r,t))}function FE(r,e){const t=e.schema;if(!t)return;const i=t.classes,{featureTextures:o}=e;if(i&&o)for(const c in i){const d=i[c],m=UE(o,c);m&&jE(r,m,d)}}function BE(r,e){const t=e.schema;if(!t)return;const i=t.classes,o=e.featureTables;if(i&&o)for(const c in i){const d=DE(o,c);d&&VE(r,t,d)}}function DE(r,e){for(const t in r){const i=r[t];if(i.class===e)return i}return null}function UE(r,e){for(const t in r){const i=r[t];if(i.class===e)return i}return null}function VE(r,e,t){var c,d;if(!t.class)return;const i=(c=e.classes)==null?void 0:c[t.class];if(!i)throw new Error(`Incorrect data in the EXT_structural_metadata extension: no schema class with name ${t.class}`);const o=t.count;for(const m in i.properties){const _=i.properties[m],T=(d=t.properties)==null?void 0:d[m];if(T){const y=GE(r,e,_,o,T);T.data=y}}}function jE(r,e,t){var o;const i=e.class;for(const c in t.properties){const d=(o=e==null?void 0:e.properties)==null?void 0:o[c];if(d){const m=WE(r,d,i);d.data=m}}}function GE(r,e,t,i,o){let c=[];const d=o.bufferView,m=r.getTypedArrayForBufferView(d),_=zE(r,t,o,i),T=HE(r,t,o,i);return t.type==="STRING"||t.componentType==="STRING"?c=Fd(i,m,_,T):qE(t)&&(c=QE(t,i,m,_)),c}function zE(r,e,t,i){return e.type==="ARRAY"&&typeof e.componentCount>"u"&&typeof t.arrayOffsetBufferView<"u"?Eo(r,t.arrayOffsetBufferView,t.offsetType||"UINT32",i):null}function HE(r,e,t,i){return typeof t.stringOffsetBufferView<"u"?Eo(r,t.stringOffsetBufferView,t.offsetType||"UINT32",i):null}function qE(r){const e=["UINT8","INT16","UINT16","INT32","UINT32","INT64","UINT64","FLOAT32","FLOAT64"];return e.includes(r.type)||typeof r.componentType<"u"&&e.includes(r.componentType)}function QE(r,e,t,i){const o=r.type==="ARRAY",c=r.componentCount,d="SCALAR",m=r.componentType||r.type,_=o0(d,m),T=t.byteLength/_,y=xo(t,d,m,T);return o?i?kd(y,e,i,t.length,_):c?Od(y,e,c):[]:y}function WE(r,e,t){const i=r.gltf.json;if(!i.meshes)return[];const o=[];for(const c of i.meshes)for(const d of c.primitives)KE(r,t,e,o,d);return o}function KE(r,e,t,i,o){const c={channels:t.channels,...t.texture},d=a0(r,c,o);d&&Ld(r,e,d,i,o)}const $E=Object.freeze(Object.defineProperty({__proto__:null,decode:kE,name:LE},Symbol.toStringTag,{value:"Module"})),XE="4.5.1",YE="4.5.1",oo={TRANSCODER:"basis_transcoder.js",TRANSCODER_WASM:"basis_transcoder.wasm",ENCODER:"basis_encoder.js",ENCODER_WASM:"basis_encoder.wasm"};let Hl;async function ql(r){kb(r.modules);const e=Ob("basis");return e||(Hl||(Hl=JE(r)),await Hl)}async function JE(r){let e=null,t=null;return[e,t]=await Promise.all([await Fr(oo.TRANSCODER,"textures",r),await Fr(oo.TRANSCODER_WASM,"textures",r)]),e=e||globalThis.BASIS,await ZE(e,t)}function ZE(r,e){const t={};return e&&(t.wasmBinary=e),new Promise(i=>{r(t).then(o=>{const{BasisFile:c,initializeBasis:d}=o;d(),i({BasisFile:c})})})}let Ia;async function Ql(r){const e=r.modules||{};return e.basisEncoder?e.basisEncoder:(Ia=Ia||ex(r),await Ia)}async function ex(r){let e=null,t=null;return[e,t]=await Promise.all([await Fr(oo.ENCODER,"textures",r),await Fr(oo.ENCODER_WASM,"textures",r)]),e=e||globalThis.BASIS,await tx(e,t)}function tx(r,e){const t={};return e&&(t.wasmBinary=e),new Promise(i=>{r(t).then(o=>{const{BasisFile:c,KTX2File:d,initializeBasis:m,BasisEncoder:_}=o;m(),i({BasisFile:c,KTX2File:d,BasisEncoder:_})})})}const rx=32854,nx=32856,Wl=36194,ix=33776,sx=33779,ox=37493,ax=35840,Ax=35842,cx=36196,lx=35986,ux=34798,fx=37808,hx=36283,dx=36285,Kl=36492,px=["","WEBKIT_","MOZ_"],$l={WEBGL_compressed_texture_s3tc:["bc1-rgb-unorm-webgl","bc1-rgba-unorm","bc2-rgba-unorm","bc3-rgba-unorm"],WEBGL_compressed_texture_s3tc_srgb:["bc1-rgb-unorm-srgb-webgl","bc1-rgba-unorm-srgb","bc2-rgba-unorm-srgb","bc3-rgba-unorm-srgb"],EXT_texture_compression_rgtc:["bc4-r-unorm","bc4-r-snorm","bc5-rg-unorm","bc5-rg-snorm"],EXT_texture_compression_bptc:["bc6h-rgb-ufloat","bc6h-rgb-float","bc7-rgba-unorm","bc7-rgba-unorm-srgb"],WEBGL_compressed_texture_etc1:["etc1-rgb-unorm-webgl"],WEBGL_compressed_texture_etc:["etc2-rgb8unorm","etc2-rgb8unorm-srgb","etc2-rgb8a1unorm","etc2-rgb8a1unorm-srgb","etc2-rgba8unorm","etc2-rgba8unorm-srgb","eac-r11unorm","eac-r11snorm","eac-rg11unorm","eac-rg11snorm"],WEBGL_compressed_texture_pvrtc:["pvrtc-rgb4unorm-webgl","pvrtc-rgba4unorm-webgl","pvrtc-rgb2unorm-webgl","pvrtc-rgba2unorm-webgl"],WEBGL_compressed_texture_atc:["atc-rgb-unorm-webgl","atc-rgba-unorm-webgl","atc-rgbai-unorm-webgl"],WEBGL_compressed_texture_astc:["astc-4x4-unorm","astc-4x4-unorm-srgb","astc-5x4-unorm","astc-5x4-unorm-srgb","astc-5x5-unorm","astc-5x5-unorm-srgb","astc-6x5-unorm","astc-6x5-unorm-srgb","astc-6x6-unorm","astc-6x6-unorm-srgb","astc-8x5-unorm","astc-8x5-unorm-srgb","astc-8x6-unorm","astc-8x6-unorm-srgb","astc-8x8-unorm","astc-8x8-unorm-srgb","astc-10x5-unorm","astc-10x5-unorm-srgb","astc-10x6-unorm","astc-10x6-unorm-srgb","astc-10x8-unorm","astc-10x8-unorm-srgb","astc-10x10-unorm","astc-10x10-unorm-srgb","astc-12x10-unorm","astc-12x10-unorm-srgb","astc-12x12-unorm","astc-12x12-unorm-srgb"]};let Ps=null;function mx(r){if(!Ps){r=r||gx()||void 0,Ps=new Set;for(const e of px)for(const t in $l)if(r&&r.getExtension(`${e}${t}`))for(const i of $l[t])Ps.add(i)}return Ps}function gx(){try{return document.createElement("canvas").getContext("webgl")}catch{return null}}const tr=[171,75,84,88,32,50,48,187,13,10,26,10];function bx(r){const e=new Uint8Array(r);return!(e.byteLength<tr.length||e[0]!==tr[0]||e[1]!==tr[1]||e[2]!==tr[2]||e[3]!==tr[3]||e[4]!==tr[4]||e[5]!==tr[5]||e[6]!==tr[6]||e[7]!==tr[7]||e[8]!==tr[8]||e[9]!==tr[9]||e[10]!==tr[10]||e[11]!==tr[11])}let Xl=Promise.resolve();const Dd={etc1:{basisFormat:0,compressed:!0,format:cx,textureFormat:"etc1-rgb-unorm-webgl"},etc2:{basisFormat:1,compressed:!0,format:ox,textureFormat:"etc2-rgba8unorm"},bc1:{basisFormat:2,compressed:!0,format:ix,textureFormat:"bc1-rgb-unorm-webgl"},bc3:{basisFormat:3,compressed:!0,format:sx,textureFormat:"bc3-rgba-unorm"},bc4:{basisFormat:4,compressed:!0,format:hx,textureFormat:"bc4-r-unorm"},bc5:{basisFormat:5,compressed:!0,format:dx,textureFormat:"bc5-rg-unorm"},"bc7-m6-opaque-only":{basisFormat:6,compressed:!0,format:Kl,textureFormat:"bc7-rgba-unorm"},"bc7-m5":{basisFormat:7,compressed:!0,format:Kl,textureFormat:"bc7-rgba-unorm"},"pvrtc1-4-rgb":{basisFormat:8,compressed:!0,format:ax,textureFormat:"pvrtc-rgb4unorm-webgl"},"pvrtc1-4-rgba":{basisFormat:9,compressed:!0,format:Ax,textureFormat:"pvrtc-rgba4unorm-webgl"},"astc-4x4":{basisFormat:10,compressed:!0,format:fx,textureFormat:"astc-4x4-unorm"},"atc-rgb":{basisFormat:11,compressed:!0,format:lx,textureFormat:"atc-rgb-unorm-webgl"},"atc-rgba-interpolated-alpha":{basisFormat:12,compressed:!0,format:ux,textureFormat:"atc-rgbai-unorm-webgl"},rgba32:{basisFormat:13,compressed:!1,format:nx,textureFormat:"rgba8unorm"},rgb565:{basisFormat:14,compressed:!1,format:Wl,textureFormat:"rgb565unorm-webgl"},bgr565:{basisFormat:15,compressed:!1,format:Wl,textureFormat:"rgb565unorm-webgl"},rgba4444:{basisFormat:16,compressed:!1,format:rx,textureFormat:"rgba4unorm-webgl"}};Object.freeze(Object.keys(Dd));async function _x(r){const e=Xl;let t;Xl=new Promise(i=>{t=i}),await e;try{return await r()}finally{t()}}async function Tx(r,e={}){const t=bf(e);return await _x(async()=>{var i;if(!((i=e.basis)!=null&&i.containerFormat)||e.basis.containerFormat==="auto"){if(bx(r)){const c=await Ql(t);return Yl(c.KTX2File,r,e)}const{BasisFile:o}=await ql(t);return Ra(o,r,e)}switch(e.basis.module){case"encoder":const o=await Ql(t);switch(e.basis.containerFormat){case"ktx2":return Yl(o.KTX2File,r,e);case"basis":default:return Ra(o.BasisFile,r,e)}case"transcoder":default:const{BasisFile:c}=await ql(t);return Ra(c,r,e)}})}function Ra(r,e,t){const i=new r(new Uint8Array(e));try{if(!i.startTranscoding())throw new Error("Failed to start basis transcoding");const o=i.getNumImages(),c=[];for(let d=0;d<o;d++){const m=i.getNumLevels(d),_=[];for(let T=0;T<m;T++)_.push(vx(i,d,T,t));c.push(_)}return c}finally{i.close(),i.delete()}}function vx(r,e,t,i){const o=r.getImageWidth(e,t),c=r.getImageHeight(e,t),d=r.getHasAlpha(),{compressed:m,format:_,basisFormat:T,textureFormat:y}=Ud(i,d),w=r.getImageTranscodedSizeInBytes(e,t,T),M=new Uint8Array(w);if(!r.transcodeImage(M,e,t,T,0,0))throw new Error("failed to start Basis transcoding");return{shape:"texture-level",width:o,height:c,data:M,compressed:m,..._!==void 0?{format:_}:{},...y!==void 0?{textureFormat:y}:{},hasAlpha:d}}function Yl(r,e,t){const i=new r(new Uint8Array(e));try{if(!i.startTranscoding())throw new Error("failed to start KTX2 transcoding");const o=i.getLevels(),c=[];for(let d=0;d<o;d++)c.push(yx(i,d,t));return[c]}finally{i.close(),i.delete()}}function yx(r,e,t){const{alphaFlag:i,height:o,width:c}=r.getImageLevelInfo(e,0,0),{compressed:d,format:m,basisFormat:_,textureFormat:T}=Ud(t,i),y=r.getImageTranscodedSizeInBytes(e,0,0,_),w=new Uint8Array(y);if(!r.transcodeImage(w,e,0,0,_,0,-1,-1))throw new Error("Failed to transcode KTX2 image");return{shape:"texture-level",width:c,height:o,data:w,compressed:d,...m!==void 0?{format:m}:{},...T!==void 0?{textureFormat:T}:{},levelSize:y,hasAlpha:i}}function Ud(r,e){var c,d;let t=((c=r.basis)==null?void 0:c.format)||"auto";t==="auto"&&(t=(d=r.basis)!=null&&d.supportedTextureFormats?xA(r.basis.supportedTextureFormats):xA()),typeof t=="object"&&(t=e?t.alpha:t.noAlpha);const i=t.toLowerCase(),o=Dd[i];if(!o)throw new Error(`Unknown Basis format ${t}`);return o}function xA(r=mx()){const e=new Set(r);return Un(e,["astc-4x4-unorm","astc-4x4-unorm-srgb"])?"astc-4x4":Un(e,["bc7-rgba-unorm","bc7-rgba-unorm-srgb"])?{alpha:"bc7-m5",noAlpha:"bc7-m6-opaque-only"}:Un(e,["bc1-rgb-unorm-webgl","bc1-rgb-unorm-srgb-webgl","bc1-rgba-unorm","bc1-rgba-unorm-srgb","bc2-rgba-unorm","bc2-rgba-unorm-srgb","bc3-rgba-unorm","bc3-rgba-unorm-srgb"])?{alpha:"bc3",noAlpha:"bc1"}:Un(e,["pvrtc-rgb4unorm-webgl","pvrtc-rgba4unorm-webgl","pvrtc-rgb2unorm-webgl","pvrtc-rgba2unorm-webgl"])?{alpha:"pvrtc1-4-rgba",noAlpha:"pvrtc1-4-rgb"}:Un(e,["etc2-rgb8unorm","etc2-rgb8unorm-srgb","etc2-rgb8a1unorm","etc2-rgb8a1unorm-srgb","etc2-rgba8unorm","etc2-rgba8unorm-srgb","eac-r11unorm","eac-r11snorm","eac-rg11unorm","eac-rg11snorm"])?"etc2":e.has("etc1-rgb-unorm-webgl")?"etc1":Un(e,["atc-rgb-unorm-webgl","atc-rgba-unorm-webgl","atc-rgbai-unorm-webgl"])?{alpha:"atc-rgba-interpolated-alpha",noAlpha:"atc-rgb"}:"rgb565"}function Un(r,e){return e.some(t=>r.has(t))}const Sx={dataType:null,batchType:null,name:"Basis",id:"basis",module:"textures",version:YE,worker:!0,extensions:["basis","ktx2"],mimeTypes:["application/octet-stream","image/ktx2"],tests:["sB"],binary:!0,options:{basis:{format:"auto",containerFormat:"auto",module:"transcoder"}}},wx={...Sx,parse:Tx},si=!0,Jl=1735152710,c0=12,ao=8,Ex=1313821514,xx=5130562,Cx=0,Mx=0,Ix=1;function Rx(r,e=0){return`${String.fromCharCode(r.getUint8(e+0))}${String.fromCharCode(r.getUint8(e+1))}${String.fromCharCode(r.getUint8(e+2))}${String.fromCharCode(r.getUint8(e+3))}`}function Nx(r,e=0,t={}){const i=new DataView(r),{magic:o=Jl}=t,c=i.getUint32(e,!1);return c===o||c===Jl}function Px(r,e,t=0,i={}){const o=new DataView(e),c=Rx(o,t+0),d=o.getUint32(t+4,si),m=o.getUint32(t+8,si);switch(Object.assign(r,{header:{byteOffset:t,byteLength:m,hasBinChunk:!1},type:c,version:d,json:{},binChunks:[]}),t+=c0,r.version){case 1:return Lx(r,o,t);case 2:return kx(r,o,t,i={});default:throw new Error(`Invalid GLB version ${r.version}. Only supports version 1 and 2.`)}}function Lx(r,e,t){lt(r.header.byteLength>c0+ao);const i=e.getUint32(t+0,si),o=e.getUint32(t+4,si);return t+=ao,lt(o===Cx),CA(r,e,t,i),t+=i,t+=MA(r,e,t,r.header.byteLength),t}function kx(r,e,t,i){return lt(r.header.byteLength>c0+ao),Ox(r,e,t,i),t+r.header.byteLength}function Ox(r,e,t,i){for(;t+8<=r.header.byteLength;){const o=e.getUint32(t+0,si),c=e.getUint32(t+4,si);switch(t+=ao,c){case Ex:CA(r,e,t,o);break;case xx:MA(r,e,t,o);break;case Mx:i.strict||CA(r,e,t,o);break;case Ix:i.strict||MA(r,e,t,o);break}t+=Ki(o,4)}return t}function CA(r,e,t,i){const o=new Uint8Array(e.buffer,t,i),d=new TextDecoder("utf8").decode(o);return r.json=JSON.parse(d),Ki(i,4)}function MA(r,e,t,i){return r.header.hasBinChunk=!0,r.binChunks.push({byteOffset:t,byteLength:i,arrayBuffer:e.buffer}),Ki(i,4)}function Vd(r,e,t){var c;if(r.startsWith("data:")||r.startsWith("http:")||r.startsWith("https:"))return r;const o=(t==null?void 0:t.baseUrl)||Fx((c=e==null?void 0:e.core)==null?void 0:c.baseUrl);if(!o)throw new Error(`'baseUrl' must be provided to resolve relative url ${r}`);return o.endsWith("/")?`${o}${r}`:`${o}/${r}`}function Fx(r){if(!r)return;if(r.endsWith("/"))return r;const e=r.lastIndexOf("/");return e>=0?r.slice(0,e+1):""}function Bx(r){return typeof r=="string"?r:["NONE","OCTAHEDRAL","QUATERNION","EXPONENTIAL","COLOR"][r]}async function Dx(r,e,t,i,o,c="NONE"){await jl.ready,jl.decodeGltfBuffer(r,e,t,i,o,Bx(c))}async function jd(r,e,t){var d;if(!((d=e.gltf)!=null&&d.decompressMeshes)||!e.gltf.loadBuffers)return;Ux(r.json);const i=new St(r),o=r.json.bufferViews||[],c=o.map(m=>Vx(i,m,t));await Promise.all(c);for(const m of o)i.removeObjectExtension(m,t);for(const m of r.json.buffers||[])i.removeObjectExtension(m,t);i.removeExtension(t)}function Ux(r){const e=r.bufferViews||[];for(let i=0;i<e.length;i++){const o=e[i].extensions;if(o!=null&&o.KHR_meshopt_compression&&o.EXT_meshopt_compression)throw new Error(`glTF bufferView ${i} cannot use both KHR_meshopt_compression and EXT_meshopt_compression.`)}const t=r.buffers||[];for(let i=0;i<t.length;i++){const o=t[i].extensions;if(o!=null&&o.KHR_meshopt_compression&&o.EXT_meshopt_compression)throw new Error(`glTF buffer ${i} cannot use both KHR_meshopt_compression and EXT_meshopt_compression.`)}}async function Vx(r,e,t){const i=r.getObjectExtension(e,t);if(!i)return;const{byteOffset:o=0,byteLength:c,byteStride:d,count:m,mode:_,filter:T="NONE",buffer:y}=i,w=r.gltf.buffers[y],M=r.gltf.buffers[e.buffer],N=new Uint8Array(w.arrayBuffer,w.byteOffset+o,c),O=new Uint8Array(M.arrayBuffer,M.byteOffset+(e.byteOffset||0),e.byteLength);await Dx(O,m,d,N,_,T)}const Gd="EXT_meshopt_compression";async function jx(r,e){await jd(r,e,Gd)}const Gx=Object.freeze(Object.defineProperty({__proto__:null,decode:jx,name:Gd},Symbol.toStringTag,{value:"Module"})),zd="KHR_meshopt_compression";async function zx(r,e){await jd(r,e,zd)}const Hx=Object.freeze(Object.defineProperty({__proto__:null,decode:zx,name:zd},Symbol.toStringTag,{value:"Module"})),Gn="EXT_texture_webp",qx=Gn;function Qx(r,e){const t=new St(r);if(!A2("image/webp")){if(t.getRequiredExtensions().includes(Gn))throw new Error(`gltf: Required extension ${Gn} not supported by browser`);return}const{json:i}=t;for(const o of i.textures||[]){const c=t.getObjectExtension(o,Gn);c&&(o.source=c.source),t.removeObjectExtension(o,Gn)}t.removeExtension(Gn)}const Wx=Object.freeze(Object.defineProperty({__proto__:null,name:qx,preprocess:Qx},Symbol.toStringTag,{value:"Module"})),zn="EXT_texture_avif",Kx=zn;async function $x(r,e){const t=new St(r);if(!(await o2()).has("image/avif")){if(t.getRequiredExtensions().includes(zn))throw new Error(`gltf: Required extension ${zn} not supported by browser`);return}const{json:o}=t;for(const c of o.textures||[]){const d=t.getObjectExtension(c,zn);d&&(c.source=d.source),t.removeObjectExtension(c,zn)}t.removeExtension(zn)}const Xx=Object.freeze(Object.defineProperty({__proto__:null,name:Kx,preprocess:$x},Symbol.toStringTag,{value:"Module"})),js="KHR_texture_basisu",Yx=js;function Jx(r,e){const t=new St(r),{json:i}=t;for(const o of i.textures||[]){const c=t.getObjectExtension(o,js);c&&(o.source=c.source,t.removeObjectExtension(o,js))}t.removeExtension(js)}const Zx=Object.freeze(Object.defineProperty({__proto__:null,name:Yx,preprocess:Jx},Symbol.toStringTag,{value:"Module"})),eC="1.5.6",tC="1.4.1",Na=`https://www.gstatic.com/draco/versioned/decoders/${eC}`,It={DECODER:"draco_wasm_wrapper.js",DECODER_WASM:"draco_decoder.wasm",FALLBACK_DECODER:"draco_decoder.js",ENCODER:"draco_encoder.js"},Li={[It.DECODER]:`${Na}/${It.DECODER}`,[It.DECODER_WASM]:`${Na}/${It.DECODER_WASM}`,[It.FALLBACK_DECODER]:`${Na}/${It.FALLBACK_DECODER}`,[It.ENCODER]:`https://raw.githubusercontent.com/google/draco/${tC}/javascript/${It.ENCODER}`};let Pa;async function rC(r={},e){const t=r.modules||{};return t.draco3d?Pa||(Pa=t.draco3d.createDecoderModule({}).then(i=>({draco:i}))):Pa||(Pa=nC(r,e)),await Pa}function Zl(r,e){if(r&&typeof r=="object"){if(r.default)return r.default;if(r[e])return r[e]}return r}async function nC(r,e){let t,i;switch(e){case"js":t=await Fr(Li[It.FALLBACK_DECODER],"draco",r,It.FALLBACK_DECODER);break;case"wasm":default:try{[t,i]=await Promise.all([await Fr(Li[It.DECODER],"draco",r,It.DECODER),await Fr(Li[It.DECODER_WASM],"draco",r,It.DECODER_WASM)])}catch{t=null,i=null}}return t=Zl(t,"DracoDecoderModule"),t=t||globalThis.DracoDecoderModule,!t&&!ci&&([t,i]=await Promise.all([await Fr(Li[It.DECODER],"draco",{...r,useLocalLibraries:!0},It.DECODER),await Fr(Li[It.DECODER_WASM],"draco",{...r,useLocalLibraries:!0},It.DECODER_WASM)]),t=Zl(t,"DracoDecoderModule"),t=t||globalThis.DracoDecoderModule),await iC(t,i)}function iC(r,e){if(typeof r!="function")throw new Error("DracoDecoderModule could not be loaded");const t={};return e&&(t.wasmBinary=e),new Promise(i=>{r({...t,onModuleLoaded:o=>i({draco:o})})})}const sC="4.5.1";function oC(r,e,t){const i=Hd(e.metadata),o=[],c=aC(e.attributes);for(const d in r){const m=r[d],_=eu(d,m,c[d]);o.push(_)}if(t){const d=eu("indices",t);o.push(d)}return{fields:o,metadata:i}}function aC(r){const e={};for(const t in r){const i=r[t];e[i.name||"undefined"]=i}return e}function eu(r,e,t){const i=t?Hd(t.metadata):void 0;return e2(r,e,i)}function Hd(r){Object.entries(r);const e={};for(const t in r)e[`${t}.string`]=JSON.stringify(r[t]);return e}const tu={POSITION:"POSITION",NORMAL:"NORMAL",COLOR:"COLOR_0",TEX_COORD:"TEXCOORD_0"},AC={1:Int8Array,2:Uint8Array,3:Int16Array,4:Uint16Array,5:Int32Array,6:Uint32Array,9:Float32Array},cC=4;class lC{constructor(e){B(this,"draco");B(this,"decoder");B(this,"metadataQuerier");this.draco=e,this.decoder=new this.draco.Decoder,this.metadataQuerier=new this.draco.MetadataQuerier}destroy(){this.draco.destroy(this.decoder),this.draco.destroy(this.metadataQuerier)}parseSync(e,t={}){const i=new this.draco.DecoderBuffer;i.Init(new Int8Array(e),e.byteLength),this._disableAttributeTransforms(t);const o=this.decoder.GetEncodedGeometryType(i),c=o===this.draco.TRIANGULAR_MESH?new this.draco.Mesh:new this.draco.PointCloud;try{let d;switch(o){case this.draco.TRIANGULAR_MESH:d=this.decoder.DecodeBufferToMesh(i,c);break;case this.draco.POINT_CLOUD:d=this.decoder.DecodeBufferToPointCloud(i,c);break;default:throw new Error("DRACO: Unknown geometry type.")}if(!d.ok()||!c.ptr){const M=`DRACO decompression failed: ${d.error_msg()}`;throw new Error(M)}const m=this._getDracoLoaderData(c,o,t),_=this._getMeshData(c,m,t),T=Zb(_.attributes),y=oC(_.attributes,m,_.indices);return{loader:"draco",loaderData:m,header:{vertexCount:c.num_points(),boundingBox:T},..._,schema:y}}finally{this.draco.destroy(i),c&&this.draco.destroy(c)}}_getDracoLoaderData(e,t,i){const o=this._getTopLevelMetadata(e),c=this._getDracoAttributes(e,i);return{geometry_type:t,num_attributes:e.num_attributes(),num_points:e.num_points(),num_faces:e instanceof this.draco.Mesh?e.num_faces():0,metadata:o,attributes:c}}_getDracoAttributes(e,t){const i={};for(let o=0;o<e.num_attributes();o++){const c=this.decoder.GetAttribute(e,o),d=this._getAttributeMetadata(e,o);i[c.unique_id()]={unique_id:c.unique_id(),attribute_type:c.attribute_type(),data_type:c.data_type(),num_components:c.num_components(),byte_offset:c.byte_offset(),byte_stride:c.byte_stride(),normalized:c.normalized(),attribute_index:o,metadata:d};const m=this._getQuantizationTransform(c,t);m&&(i[c.unique_id()].quantization_transform=m);const _=this._getOctahedronTransform(c,t);_&&(i[c.unique_id()].octahedron_transform=_)}return i}_getMeshData(e,t,i){const o=this._getMeshAttributes(t,e,i);if(!o.POSITION)throw new Error("DRACO: No position attribute found.");if(e instanceof this.draco.Mesh)switch(i.topology){case"triangle-strip":return{topology:"triangle-strip",mode:4,attributes:o,indices:{value:this._getTriangleStripIndices(e),size:1}};case"triangle-list":default:return{topology:"triangle-list",mode:5,attributes:o,indices:{value:this._getTriangleListIndices(e),size:1}}}return{topology:"point-list",mode:0,attributes:o}}_getMeshAttributes(e,t,i){const o={};for(const c of Object.values(e.attributes)){const d=this._deduceAttributeName(c,i);c.name=d;const m=this._getAttributeValues(t,c);if(m){const{value:_,size:T}=m;o[d]={value:_,size:T,byteOffset:c.byte_offset,byteStride:c.byte_stride,normalized:c.normalized}}}return o}_getTriangleListIndices(e){const i=e.num_faces()*3,o=i*cC,c=this.draco._malloc(o);try{return this.decoder.GetTrianglesUInt32Array(e,o,c),new Uint32Array(this.draco.HEAPF32.buffer,c,i).slice()}finally{this.draco._free(c)}}_getTriangleStripIndices(e){const t=new this.draco.DracoInt32Array;try{return this.decoder.GetTriangleStripsFromMesh(e,t),hC(t)}finally{this.draco.destroy(t)}}_getAttributeValues(e,t){const i=AC[t.data_type];if(!i)return console.warn(`DRACO: Unsupported attribute type ${t.data_type}`),null;const o=t.num_components,d=e.num_points()*o,m=d*i.BYTES_PER_ELEMENT,_=uC(this.draco,i);let T;const y=this.draco._malloc(m);try{const w=this.decoder.GetAttribute(e,t.attribute_index);this.decoder.GetAttributeDataArrayForAllPoints(e,w,_,m,y),T=new i(this.draco.HEAPF32.buffer,y,d).slice()}finally{this.draco._free(y)}return{value:T,size:o}}_deduceAttributeName(e,t){const i=e.unique_id;for(const[d,m]of Object.entries(t.extraAttributes||{}))if(m===i)return d;const o=e.attribute_type;for(const d in tu)if(this.draco[d]===o)return tu[d];const c=t.attributeNameEntry||"name";return e.metadata[c]?e.metadata[c].string:`CUSTOM_ATTRIBUTE_${i}`}_getTopLevelMetadata(e){const t=this.decoder.GetMetadata(e);return this._getDracoMetadata(t)}_getAttributeMetadata(e,t){const i=this.decoder.GetAttributeMetadata(e,t);return this._getDracoMetadata(i)}_getDracoMetadata(e){if(!e||!e.ptr)return{};const t={},i=this.metadataQuerier.NumEntries(e);for(let o=0;o<i;o++){const c=this.metadataQuerier.GetEntryName(e,o);t[c]=this._getDracoMetadataField(e,c)}return t}_getDracoMetadataField(e,t){const i=new this.draco.DracoInt32Array;try{this.metadataQuerier.GetIntEntryArray(e,t,i);const o=fC(i);return{int:this.metadataQuerier.GetIntEntry(e,t),string:this.metadataQuerier.GetStringEntry(e,t),double:this.metadataQuerier.GetDoubleEntry(e,t),intArray:o}}finally{this.draco.destroy(i)}}_disableAttributeTransforms(e){const{quantizedAttributes:t=[],octahedronAttributes:i=[]}=e,o=[...t,...i];for(const c of o)this.decoder.SkipAttributeTransform(this.draco[c])}_getQuantizationTransform(e,t){const{quantizedAttributes:i=[]}=t,o=e.attribute_type();if(i.map(d=>this.decoder[d]).includes(o)){const d=new this.draco.AttributeQuantizationTransform;try{if(d.InitFromAttribute(e))return{quantization_bits:d.quantization_bits(),range:d.range(),min_values:new Float32Array([1,2,3]).map(m=>d.min_value(m))}}finally{this.draco.destroy(d)}}return null}_getOctahedronTransform(e,t){const{octahedronAttributes:i=[]}=t,o=e.attribute_type();if(i.map(d=>this.decoder[d]).includes(o)){const d=new this.draco.AttributeQuantizationTransform;try{if(d.InitFromAttribute(e))return{quantization_bits:d.quantization_bits()}}finally{this.draco.destroy(d)}}return null}}function uC(r,e){switch(e){case Float32Array:return r.DT_FLOAT32;case Int8Array:return r.DT_INT8;case Int16Array:return r.DT_INT16;case Int32Array:return r.DT_INT32;case Uint8Array:return r.DT_UINT8;case Uint16Array:return r.DT_UINT16;case Uint32Array:return r.DT_UINT32;default:return r.DT_INVALID}}function fC(r){const e=r.size(),t=new Int32Array(e);for(let i=0;i<e;i++)t[i]=r.GetValue(i);return t}function hC(r){const e=r.size(),t=new Int32Array(e);for(let i=0;i<e;i++)t[i]=r.GetValue(i);return t}const dC={dataType:null,batchType:null,name:"Draco",id:"draco",module:"draco",version:sC,worker:!0,extensions:["drc"],mimeTypes:["application/octet-stream"],binary:!0,tests:["DRACO"],options:{draco:{decoderType:typeof WebAssembly=="object"?"wasm":"js",extraAttributes:{},attributeNameEntry:void 0}}},qd={...dC,parse:pC};async function pC(r,e){var o;const{draco:t}=await rC(bf(e),((o=e==null?void 0:e.draco)==null?void 0:o.decoderType)||"wasm"),i=new lC(t);try{return i.parseSync(r,e==null?void 0:e.draco)}finally{i.destroy()}}function mC(r){const e={};for(const t in r){const i=r[t];if(t!=="indices"){const o=Qd(i);e[t]=o}}return e}function Qd(r){const{buffer:e,size:t,count:i}=gC(r);return{value:e,size:t,byteOffset:0,count:i,type:Id(t),componentType:wo(e)}}function gC(r){let e=r,t=1,i=0;return r&&r.value&&(e=r.value,t=r.size||1),e&&(ArrayBuffer.isView(e)||(e=bC(e,Float32Array)),i=e.length/t),{buffer:e,size:t,count:i}}function bC(r,e,t=!1){return r?Array.isArray(r)?new e(r):t&&!(r instanceof e)?new e(r):r:null}const nn="KHR_draco_mesh_compression",_C=nn;function TC(r,e,t){const i=new St(r);for(const o of Wd(i))i.getObjectExtension(o,nn)}async function vC(r,e,t){var c;if(!((c=e==null?void 0:e.gltf)!=null&&c.decompressMeshes))return;const i=new St(r),o=[];for(const d of Wd(i))i.getObjectExtension(d,nn)&&o.push(SC(i,d,e,t));await Promise.all(o),i.removeExtension(nn)}function yC(r,e={}){const t=new St(r);for(const i of t.json.meshes||[])wC(i),t.addRequiredExtension(nn)}async function SC(r,e,t,i){const o=r.getObjectExtension(e,nn);if(!o)return;const c=r.getTypedArrayForBufferView(o.bufferView),d=VA(c.buffer,c.byteOffset),m={...t};delete m["3d-tiles"];const _=await Wi(d,qd,m,i),T=mC(_.attributes);for(const[y,w]of Object.entries(T))if(y in e.attributes){const M=e.attributes[y],N=r.getAccessor(M);N!=null&&N.min&&(N!=null&&N.max)&&(w.min=N.min,w.max=N.max)}e.attributes=T,_.indices&&(e.indices=Qd(_.indices)),r.removeObjectExtension(e,nn),EC(e)}function wC(r,e,t=4,i,o){var y;if(!i.DracoWriter)throw new Error("options.gltf.DracoWriter not provided");const c=i.DracoWriter.encodeSync({attributes:r}),d=(y=o==null?void 0:o.parseSync)==null?void 0:y.call(o,{attributes:r}),m=i._addFauxAttributes(d.attributes),_=i.addBufferView(c);return{primitives:[{attributes:m,mode:t,extensions:{[nn]:{bufferView:_,attributes:m}}}]}}function EC(r){if(!r.attributes&&Object.keys(r.attributes).length>0)throw new Error("glTF: Empty primitive detected: Draco decompression failure?")}function*Wd(r){for(const e of r.json.meshes||[])for(const t of e.primitives)yield t}const xC=Object.freeze(Object.defineProperty({__proto__:null,decode:vC,encode:yC,name:_C,preprocess:TC},Symbol.toStringTag,{value:"Module"})),oi="KHR_texture_transform",CC=oi,Ls=new X,MC=new rt,IC=new rt;async function RC(r,e){var c;const t=new St(r);if(!t.hasExtension(oi)||!((c=e.gltf)!=null&&c.loadBuffers))return;const o=r.json.materials||[];for(let d=0;d<o.length;d++)NC(d,r,t);o.some(d=>l0(d).length>0)||t.removeExtension(oi)}function NC(r,e,t){var m,_;const i=(m=e.json.materials)==null?void 0:m[r],o=l0(i),c=new Map;let d=PC(e);for(const T of o){const y=(_=T.extensions)==null?void 0:_[oi];if(y){const w=y.texCoord??T.texCoord??0,M=LC(w,y);let N=c.get(M);if(!N){if(N={sourceTexCoord:w,texCoord:d,matrix:DC(y)},!kC(e,r,N))continue;d++,c.set(M,N)}T.texCoord=N.texCoord,t.removeObjectExtension(T,oi),T.extensions&&Object.keys(T.extensions).length===0&&delete T.extensions}}}function l0(r){if(!r||typeof r!="object")return[];const e=r,t=[],i=e.extensions;Number.isFinite(e.index)&&(i!=null&&i[oi])&&t.push(e);for(const[o,c]of Object.entries(e))o!=="extras"&&t.push(...l0(c));return t}function PC(r){let e=-1;for(const t of r.json.meshes||[])for(const i of t.primitives)for(const o of Object.keys(i.attributes)){const c=/^TEXCOORD_(\d+)$/.exec(o);c&&(e=Math.max(e,Number(c[1])))}return e+1}function LC(r,e){const{offset:t=[0,0],rotation:i=0,scale:o=[1,1]}=e;return JSON.stringify([r,t,i,o])}function kC(r,e,t){const i=[],o=r.json.meshes||[];for(const c of o)for(const d of c.primitives){const m=d.material;Number.isFinite(m)&&e===m&&i.push(d)}if(i.length===0||i.some(c=>!OC(r,c,t.sourceTexCoord)))return!1;for(const c of i)FC(r,c,t);return!0}function OC(r,e,t){var d,m;const i=e.attributes[`TEXCOORD_${t}`];if(!Number.isFinite(i))return!1;const o=(d=r.json.accessors)==null?void 0:d[i];if(!o||o.bufferView===void 0||o.sparse)return!1;const c=(m=r.json.bufferViews)==null?void 0:m[o.bufferView];return!!(c&&r.buffers[c.buffer])}function FC(r,e,t){var m,_;const{sourceTexCoord:i,texCoord:o,matrix:c}=t,d=e.attributes[`TEXCOORD_${i}`];if(Number.isFinite(d)){const T=(m=r.json.accessors)==null?void 0:m[d];if(T&&T.bufferView!==void 0){const y=(_=r.json.bufferViews)==null?void 0:_[T.bufferView];if(y){const{arrayBuffer:w,byteOffset:M}=r.buffers[y.buffer],N=(M||0)+(T.byteOffset||0)+(y.byteOffset||0),{ArrayType:O,length:F}=so(T,y),W=Md[T.componentType],j=Cd[T.type],q=y.byteStride||W*j,J=new Float32Array(F);for(let Z=0;Z<T.count;Z++){const Y=new O(w,N+Z*q,2);Ls.set(Y[0],Y[1],1),Ls.transformByMatrix3(c),J.set([Ls[0],Ls[1]],Z*j)}BC(o,T,e,r,J)}}}}function BC(r,e,t,i,o){i.buffers.push({arrayBuffer:UA(o.buffer),byteOffset:0,byteLength:o.buffer.byteLength}),i.json.bufferViews=i.json.bufferViews||[];const c=i.json.bufferViews;c.push({buffer:i.buffers.length-1,byteLength:o.buffer.byteLength,byteOffset:0});const d=i.json.accessors;d&&(d.push({bufferView:(c==null?void 0:c.length)-1,byteOffset:0,componentType:5126,count:e.count,type:"VEC2"}),t.attributes[`TEXCOORD_${r}`]=d.length-1)}function DC(r){const{offset:e=[0,0],rotation:t=0,scale:i=[1,1]}=r,o=new rt().set(1,0,0,0,1,0,e[0],e[1],1),c=MC.set(Math.cos(t),Math.sin(t),0,-Math.sin(t),Math.cos(t),0,0,0,1),d=IC.set(i[0],0,0,0,i[1],0,0,0,1);return o.multiplyRight(c).multiplyRight(d)}const UC=Object.freeze(Object.defineProperty({__proto__:null,decode:RC,name:CC},Symbol.toStringTag,{value:"Module"})),gn="KHR_lights_punctual",VC=gn;async function jC(r){const e=new St(r),{json:t}=e,i=e.getExtension(gn);i&&(e.json.lights=i.lights,e.removeExtension(gn));for(const o of t.nodes||[]){const c=e.getObjectExtension(o,gn);c&&(o.light=c.light),e.removeObjectExtension(o,gn)}}async function GC(r){const e=new St(r),{json:t}=e;if(t.lights){const i=e.addExtension(gn);kt(!i.lights),i.lights=t.lights,delete t.lights}if(e.json.lights){for(const i of e.json.lights){const o=i.node;e.addObjectExtension(o,gn,i)}delete e.json.lights}}const zC=Object.freeze(Object.defineProperty({__proto__:null,decode:jC,encode:GC,name:VC},Symbol.toStringTag,{value:"Module"})),Hi="KHR_materials_unlit",HC=Hi;async function qC(r){const e=new St(r),{json:t}=e;for(const i of t.materials||[])i.extensions&&i.extensions.KHR_materials_unlit&&(i.unlit=!0),e.removeObjectExtension(i,Hi);e.removeExtension(Hi)}function QC(r){const e=new St(r),{json:t}=e;if(e.materials)for(const i of t.materials||[])i.unlit&&(delete i.unlit,e.addObjectExtension(i,Hi,{}),e.addExtension(Hi))}const WC=Object.freeze(Object.defineProperty({__proto__:null,decode:qC,encode:QC,name:HC},Symbol.toStringTag,{value:"Module"})),Ui="KHR_techniques_webgl",KC=Ui;async function $C(r){const e=new St(r),{json:t}=e,i=e.getExtension(Ui);if(i){const o=YC(i,e);for(const c of t.materials||[]){const d=e.getObjectExtension(c,Ui);d&&(c.technique=Object.assign({},d,o[d.technique]),c.technique.values=JC(c.technique,e)),e.removeObjectExtension(c,Ui)}e.removeExtension(Ui)}}async function XC(r,e){}function YC(r,e){const{programs:t=[],shaders:i=[],techniques:o=[]}=r,c=new TextDecoder;return i.forEach(d=>{if(Number.isFinite(d.bufferView))d.code=c.decode(e.getTypedArrayForBufferView(d.bufferView));else throw new Error("KHR_techniques_webgl: no shader code")}),t.forEach(d=>{d.fragmentShader=i[d.fragmentShader],d.vertexShader=i[d.vertexShader]}),o.forEach(d=>{d.program=t[d.program]}),o}function JC(r,e){const t=Object.assign({},r.values);return Object.keys(r.uniforms||{}).forEach(i=>{r.uniforms[i].value&&!(i in t)&&(t[i]=r.uniforms[i].value)}),Object.keys(t).forEach(i=>{typeof t[i]=="object"&&t[i].index!==void 0&&(t[i].texture=e.getTexture(t[i].index))}),t}const ZC=Object.freeze(Object.defineProperty({__proto__:null,decode:$C,encode:XC,name:KC},Symbol.toStringTag,{value:"Module"})),Kd=[PE,nE,Hx,Gx,Xx,Wx,Zx,xC,zC,WC,ZC,UC,$E];async function eM(r,e={},t){var o;const i=Kd.filter(c=>$d(c.name,e));for(const c of i)await((o=c.preprocess)==null?void 0:o.call(c,r,e,t))}async function tM(r,e={},t){var o;const i=Kd.filter(c=>$d(c.name,e));for(const c of i)await((o=c.decode)==null?void 0:o.call(c,r,e,t))}function $d(r,e){var o;const t=((o=e==null?void 0:e.gltf)==null?void 0:o.excludeExtensions)||{};return!(r in t&&!t[r])}const La="KHR_binary_glTF";function rM(r){const e=new St(r),{json:t}=e;for(const i of t.images||[]){const o=e.getObjectExtension(i,La);o&&Object.assign(i,o),e.removeObjectExtension(i,La)}t.buffers&&t.buffers[0]&&delete t.buffers[0].uri,e.removeExtension(La)}const ru={accessors:"accessor",animations:"animation",buffers:"buffer",bufferViews:"bufferView",images:"image",materials:"material",meshes:"mesh",nodes:"node",samplers:"sampler",scenes:"scene",skins:"skin",textures:"texture"},nM={accessor:"accessors",animations:"animation",buffer:"buffers",bufferView:"bufferViews",image:"images",material:"materials",mesh:"meshes",node:"nodes",sampler:"samplers",scene:"scenes",skin:"skins",texture:"textures"};class iM{constructor(){B(this,"idToIndexMap",{animations:{},accessors:{},buffers:{},bufferViews:{},images:{},materials:{},meshes:{},nodes:{},samplers:{},scenes:{},skins:{},textures:{}});B(this,"json")}normalize(e,t){this.json=e.json;const i=e.json;switch(i.asset&&i.asset.version){case"2.0":return;case void 0:case"1.0":break;default:console.warn(`glTF: Unknown version ${i.asset.version}`);return}if(!t.normalize)throw new Error("glTF v1 is not supported.");console.warn("Converting glTF v1 to glTF v2 format. This is experimental and may fail."),this._addAsset(i),this._convertTopLevelObjectsToArrays(i),rM(e),this._convertObjectIdsToArrayIndices(i),this._updateObjects(i),this._updateMaterial(i)}_addAsset(e){e.asset=e.asset||{},e.asset.version="2.0",e.asset.generator=e.asset.generator||"Normalized to glTF 2.0 by loaders.gl"}_convertTopLevelObjectsToArrays(e){for(const t in ru)this._convertTopLevelObjectToArray(e,t)}_convertTopLevelObjectToArray(e,t){const i=e[t];if(!(!i||Array.isArray(i))){e[t]=[];for(const o in i){const c=i[o];c.id=c.id||o;const d=e[t].length;e[t].push(c),this.idToIndexMap[t][o]=d}}}_convertObjectIdsToArrayIndices(e){for(const t in ru)this._convertIdsToIndices(e,t);"scene"in e&&(e.scene=this._convertIdToIndex(e.scene,"scene"));for(const t of e.textures)this._convertTextureIds(t);for(const t of e.meshes)this._convertMeshIds(t);for(const t of e.nodes)this._convertNodeIds(t);for(const t of e.scenes)this._convertSceneIds(t)}_convertTextureIds(e){e.source&&(e.source=this._convertIdToIndex(e.source,"image"))}_convertMeshIds(e){for(const t of e.primitives){const{attributes:i,indices:o,material:c}=t;for(const d in i)i[d]=this._convertIdToIndex(i[d],"accessor");o&&(t.indices=this._convertIdToIndex(o,"accessor")),c&&(t.material=this._convertIdToIndex(c,"material"))}}_convertNodeIds(e){e.children&&(e.children=e.children.map(t=>this._convertIdToIndex(t,"node"))),e.meshes&&(e.meshes=e.meshes.map(t=>this._convertIdToIndex(t,"mesh")))}_convertSceneIds(e){e.nodes&&(e.nodes=e.nodes.map(t=>this._convertIdToIndex(t,"node")))}_convertIdsToIndices(e,t){e[t]||(console.warn(`gltf v1: json doesn't contain attribute ${t}`),e[t]=[]);for(const i of e[t])for(const o in i){const c=i[o],d=this._convertIdToIndex(c,o);i[o]=d}}_convertIdToIndex(e,t){const i=nM[t];if(i in this.idToIndexMap){const o=this.idToIndexMap[i][e];if(!Number.isFinite(o))throw new Error(`gltf v1: failed to resolve ${t} with id ${e}`);return o}return e}_updateObjects(e){for(const t of this.json.buffers)delete t.type}_updateMaterial(e){var t,i,o;for(const c of e.materials){c.pbrMetallicRoughness={baseColorFactor:[1,1,1,1],metallicFactor:1,roughnessFactor:1};const d=((t=c.values)==null?void 0:t.tex)||((i=c.values)==null?void 0:i.texture2d_0)||((o=c.values)==null?void 0:o.diffuseTex),m=e.textures.findIndex(_=>_.id===d);m!==-1&&(c.pbrMetallicRoughness.baseColorTexture={index:m})}}}function sM(r,e={}){return new iM().normalize(r,e)}function oM(r,e){const t=r.basis,i=t==null?void 0:t.format;return{...r,core:{...r.core,mimeType:e},basis:{...t,format:i&&i!=="auto"?i:xA(t==null?void 0:t.supportedTextureFormats)}}}async function aM(r,e,t=0,i,o){var c,d,m;return AM(r,e,t,i),sM(r,{normalize:(c=i==null?void 0:i.gltf)==null?void 0:c.normalize}),await eM(r,i,o),(d=i==null?void 0:i.gltf)!=null&&d.loadBuffers&&r.json.buffers&&await cM(r,i,o),(m=i==null?void 0:i.gltf)!=null&&m.loadImages&&await lM(r,i,o),await tM(r,i,o),r}function AM(r,e,t,i){var d,m;if((d=i.core)!=null&&d.baseUrl&&(r.baseUri=(m=i.core)==null?void 0:m.baseUrl),e instanceof ArrayBuffer&&!Nx(e,t,i.glb)&&(e=new TextDecoder().decode(e)),typeof e=="string")r.json=Gb(e);else if(e instanceof ArrayBuffer){const _={};t=Px(_,e,t,i.glb),kt(_.type==="glTF",`Invalid GLB magic string ${_.type}`),r._glb=_,r.json=_.json}else kt(!1,"GLTF: must be ArrayBuffer or string");const o=r.json.buffers||[];if(r.buffers=new Array(o.length).fill(null),r._glb&&r._glb.header.hasBinChunk){const{binChunks:_}=r._glb;r.buffers[0]={arrayBuffer:_[0].arrayBuffer,byteOffset:_[0].byteOffset,byteLength:_[0].byteLength}}const c=r.json.images||[];r.images=new Array(c.length).fill({})}async function cM(r,e,t){var o,c;const i=r.json.buffers||[];for(let d=0;d<i.length;++d){const m=i[d];if(m.uri){const{fetch:_}=t;kt(_);const T=Vd(m.uri,e,t),y=await((o=t==null?void 0:t.fetch)==null?void 0:o.call(t,T)),w=await((c=y==null?void 0:y.arrayBuffer)==null?void 0:c.call(y));r.buffers[d]={arrayBuffer:w,byteOffset:0,byteLength:w.byteLength},delete m.uri}else r.buffers[d]===null&&(r.buffers[d]={arrayBuffer:new ArrayBuffer(m.byteLength),byteOffset:0,byteLength:m.byteLength})}}async function lM(r,e,t){const i=uM(r),o=r.json.images||[],c=[];for(const d of i)c.push(fM(r,o[d],d,e,t));return await Promise.all(c)}function uM(r){const e=new Set,t=r.json.textures||[];for(const i of t)i.source!==void 0&&e.add(i.source);return Array.from(e).sort()}async function fM(r,e,t,i,o){let c;if(e.uri&&!e.hasOwnProperty("bufferView")){const _=Vd(e.uri,i,o),{fetch:T}=o;c=await(await T(_)).arrayBuffer(),e.bufferView={data:c}}if(Number.isFinite(e.bufferView)){const _=Gw(r.json,r.buffers,e.bufferView);c=VA(_.buffer,_.byteOffset,_.byteLength)}kt(c,"glTF image has no data");const d=oM(i,e.mimeType);let m=await Wi(c,[Ya,wx],d,o);m&&m[0]&&(m={compressed:!0,mipmaps:!1,width:m[0].width,height:m[0].height,data:m[0]}),r.images=r.images||[],r.images[t]=m}const qi={dataType:null,batchType:null,name:"glTF",id:"gltf",module:"gltf",version:XE,extensions:["gltf","glb"],mimeTypes:["model/gltf+json","model/gltf-binary"],text:!0,binary:!0,tests:["glTF"],parse:hM,options:{gltf:{normalize:!0,loadBuffers:!0,loadImages:!0,decompressMeshes:!0}}};async function hM(r,e={},t){var d;const i={...qi.options,...e};i.gltf={...qi.options.gltf,...i.gltf};const o=((d=e==null?void 0:e.glb)==null?void 0:d.byteOffset)||0;return await aM({},r,o,i,t)}const dM={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},pM={5120:1,5121:1,5122:2,5123:2,5125:4,5126:4},lr={TEXTURE_MAG_FILTER:10240,TEXTURE_MIN_FILTER:10241,TEXTURE_WRAP_S:10242,TEXTURE_WRAP_T:10243,REPEAT:10497,LINEAR:9729,NEAREST_MIPMAP_LINEAR:9986},mM={magFilter:lr.TEXTURE_MAG_FILTER,minFilter:lr.TEXTURE_MIN_FILTER,wrapS:lr.TEXTURE_WRAP_S,wrapT:lr.TEXTURE_WRAP_T},gM={[lr.TEXTURE_MAG_FILTER]:lr.LINEAR,[lr.TEXTURE_MIN_FILTER]:lr.NEAREST_MIPMAP_LINEAR,[lr.TEXTURE_WRAP_S]:lr.REPEAT,[lr.TEXTURE_WRAP_T]:lr.REPEAT};function bM(){return{id:"default-sampler",parameters:gM}}function _M(r){return pM[r]}function TM(r){return dM[r]}class vM{constructor(){B(this,"baseUri","");B(this,"jsonUnprocessed");B(this,"json");B(this,"buffers",[]);B(this,"images",[])}postProcess(e,t={}){const{json:i,buffers:o=[],images:c=[]}=e,{baseUri:d=""}=e;return kt(i),this.baseUri=d,this.buffers=o,this.images=c,this.jsonUnprocessed=i,this.json=this._resolveTree(e.json,t),this.json}_resolveTree(e,t={}){const i={...e};return this.json=i,e.bufferViews&&(i.bufferViews=e.bufferViews.map((o,c)=>this._resolveBufferView(o,c))),e.images&&(i.images=e.images.map((o,c)=>this._resolveImage(o,c))),e.samplers&&(i.samplers=e.samplers.map((o,c)=>this._resolveSampler(o,c))),e.textures&&(i.textures=e.textures.map((o,c)=>this._resolveTexture(o,c))),e.accessors&&(i.accessors=e.accessors.map((o,c)=>this._resolveAccessor(o,c))),e.materials&&(i.materials=e.materials.map((o,c)=>this._resolveMaterial(o,c))),e.meshes&&(i.meshes=e.meshes.map((o,c)=>this._resolveMesh(o,c))),e.nodes&&(i.nodes=e.nodes.map((o,c)=>this._resolveNode(o,c)),i.nodes=i.nodes.map((o,c)=>this._resolveNodeChildren(o))),e.skins&&(i.skins=e.skins.map((o,c)=>this._resolveSkin(o,c))),e.scenes&&(i.scenes=e.scenes.map((o,c)=>this._resolveScene(o,c))),typeof this.json.scene=="number"&&i.scenes&&(i.scene=i.scenes[this.json.scene]),i}getScene(e){return this._get(this.json.scenes,e)}getNode(e){return this._get(this.json.nodes,e)}getSkin(e){return this._get(this.json.skins,e)}getMesh(e){return this._get(this.json.meshes,e)}getMaterial(e){return this._get(this.json.materials,e)}getAccessor(e){return this._get(this.json.accessors,e)}getCamera(e){return this._get(this.json.cameras,e)}getTexture(e){return this._get(this.json.textures,e)}getSampler(e){return this._get(this.json.samplers,e)}getImage(e){return this._get(this.json.images,e)}getBufferView(e){return this._get(this.json.bufferViews,e)}getBuffer(e){return this._get(this.json.buffers,e)}_get(e,t){if(typeof t=="object")return t;const i=e&&e[t];return i||console.warn(`glTF file error: Could not find ${e}[${t}]`),i}_resolveScene(e,t){return{...e,id:e.id||`scene-${t}`,nodes:(e.nodes||[]).map(i=>this.getNode(i))}}_resolveNode(e,t){const i={...e,id:(e==null?void 0:e.id)||`node-${t}`};return e.mesh!==void 0&&(i.mesh=this.getMesh(e.mesh)),e.camera!==void 0&&(i.camera=this.getCamera(e.camera)),e.skin!==void 0&&(i.skin=this.getSkin(e.skin)),e.meshes!==void 0&&e.meshes.length&&(i.mesh=e.meshes.reduce((o,c)=>{const d=this.getMesh(c);return o.id=d.id,o.primitives=o.primitives.concat(d.primitives),o},{primitives:[]})),i}_resolveNodeChildren(e){return e.children&&(e.children=e.children.map(t=>this.getNode(t))),e}_resolveSkin(e,t){const i=typeof e.inverseBindMatrices=="number"?this.getAccessor(e.inverseBindMatrices):void 0;return{...e,id:e.id||`skin-${t}`,inverseBindMatrices:i}}_resolveMesh(e,t){const i={...e,id:e.id||`mesh-${t}`,primitives:[]};return e.primitives&&(i.primitives=e.primitives.map((o,c)=>{const d={...o,attributes:{},indices:void 0,material:void 0},m=o.attributes;for(const _ in m)d.attributes[_]=this.getAccessor(m[_]);return o.indices!==void 0&&(d.indices=this.getAccessor(o.indices)),o.material!==void 0&&(d.material=this.getMaterial(o.material)),yM(d,i.id,c)})),i}_resolveMaterial(e,t){const i={...e,id:e.id||`material-${t}`};if(i.normalTexture&&(i.normalTexture={...i.normalTexture},i.normalTexture.texture=this.getTexture(i.normalTexture.index)),i.occlusionTexture&&(i.occlusionTexture={...i.occlusionTexture},i.occlusionTexture.texture=this.getTexture(i.occlusionTexture.index)),i.emissiveTexture&&(i.emissiveTexture={...i.emissiveTexture},i.emissiveTexture.texture=this.getTexture(i.emissiveTexture.index)),i.emissiveFactor||(i.emissiveFactor=i.emissiveTexture?[1,1,1]:[0,0,0]),i.pbrMetallicRoughness){i.pbrMetallicRoughness={...i.pbrMetallicRoughness};const o=i.pbrMetallicRoughness;o.baseColorTexture&&(o.baseColorTexture={...o.baseColorTexture},o.baseColorTexture.texture=this.getTexture(o.baseColorTexture.index)),o.metallicRoughnessTexture&&(o.metallicRoughnessTexture={...o.metallicRoughnessTexture},o.metallicRoughnessTexture.texture=this.getTexture(o.metallicRoughnessTexture.index))}return i}_resolveAccessor(e,t){const i=_M(e.componentType),o=TM(e.type),c=i*o,d={...e,id:e.id||`accessor-${t}`,bytesPerComponent:i,components:o,bytesPerElement:c,value:void 0,bufferView:void 0,sparse:void 0};if(e.bufferView!==void 0&&(d.bufferView=this.getBufferView(e.bufferView)),d.bufferView){const m=d.bufferView.buffer,{ArrayType:_,byteLength:T}=so(d,d.bufferView),y=(d.bufferView.byteOffset||0)+(d.byteOffset||0)+m.byteOffset;let w=gc(m.arrayBuffer,y,T);d.bufferView.byteStride&&(w=this._getValueFromInterleavedBuffer(m,y,d.bufferView.byteStride,d.bytesPerElement,d.count)),d.value=new _(w)}else{const{ArrayType:m}=so(d,{byteLength:d.count*d.bytesPerElement});d.value=new m(d.count*d.components)}return e.sparse&&this._applySparseAccessor(d,e.sparse),d}_applySparseAccessor(e,t){const i=SM(t.indices.componentType),o=this._getTypedArrayFromBufferView(i,this.getBufferView(t.indices.bufferView),t.indices.byteOffset||0,t.count),c=e.value.constructor,d=this._getTypedArrayFromBufferView(c,this.getBufferView(t.values.bufferView),t.values.byteOffset||0,t.count*e.components);for(let m=0;m<t.count;m++){const _=Number(o[m]);kt(Number.isInteger(_)&&_>=0&&_<e.count,"glTF sparse accessor index is out of bounds");for(let T=0;T<e.components;T++){const y=_*e.components+T,w=m*e.components+T;Reflect.set(e.value,y,d[w])}}}_getTypedArrayFromBufferView(e,t,i,o){const c=o*e.BYTES_PER_ELEMENT;kt(i+c<=t.byteLength,"glTF sparse accessor data exceeds its buffer view");const d=t.buffer,m=d.byteOffset+(t.byteOffset||0)+i,_=gc(d.arrayBuffer,m,c);return new e(_)}_getValueFromInterleavedBuffer(e,t,i,o,c){const d=new Uint8Array(c*o);for(let m=0;m<c;m++){const _=t+m*i;d.set(new Uint8Array(e.arrayBuffer.slice(_,_+o)),m*o)}return d.buffer}_resolveTexture(e,t){return{...e,id:e.id||`texture-${t}`,sampler:typeof e.sampler=="number"?this.getSampler(e.sampler):bM(),source:typeof e.source=="number"?this.getImage(e.source):void 0}}_resolveSampler(e,t){const i={id:e.id||`sampler-${t}`,...e,parameters:{}};for(const o in i){const c=this._enumSamplerParameter(o);c!==void 0&&(i.parameters[c]=i[o])}return i}_enumSamplerParameter(e){return mM[e]}_resolveImage(e,t){const i={...e,id:e.id||`image-${t}`,image:null,bufferView:e.bufferView!==void 0?this.getBufferView(e.bufferView):void 0},o=this.images[t];return o&&(i.image=o),i}_resolveBufferView(e,t){const i=e.buffer,o=this.buffers[i].arrayBuffer;let c=this.buffers[i].byteOffset||0;return e.byteOffset&&(c+=e.byteOffset),{id:`bufferView-${t}`,...e,buffer:this.buffers[i],data:new Uint8Array(o,c,e.byteLength)}}_resolveCamera(e,t){const i={...e,id:e.id||`camera-${t}`};return i.perspective,i.orthographic,i}}function yM(r,e,t){var _,T;if(r.mode!==2&&r.mode!==6)return r;const i=(_=r.indices)==null?void 0:_.value,o=((T=r.indices)==null?void 0:T.count)??wM(r),c=EM(i,o),d=c<=65535?Uint16Array:Uint32Array,m=r.mode===2?CM(i,o,d):MM(i,o,d);return r.mode=r.mode===2?1:4,r.indices={id:`${e}-primitive-${t}-portable-indices`,components:1,bytesPerComponent:d.BYTES_PER_ELEMENT,bytesPerElement:d.BYTES_PER_ELEMENT,componentType:d===Uint16Array?5123:5125,normalized:!1,count:m.length,type:"SCALAR",min:m.length?[xM(m)]:void 0,max:m.length?[c]:void 0,value:m},r}function SM(r){switch(r){case 5121:return Uint8Array;case 5123:return Uint16Array;case 5125:return Uint32Array;default:throw new Error(`Invalid glTF sparse index component type ${r}`)}}function wM(r){const e=Object.values(r.attributes)[0];return kt(e,"glTF primitive must define at least one attribute"),e.count}function EM(r,e){if(!r)return Math.max(0,e-1);let t=0;for(let i=0;i<e;i++)t=Math.max(t,Number(r[i]));return t}function xM(r){let e=1/0;for(const t of r)e=Math.min(e,t);return e}function ji(r,e){return r?Number(r[e]):e}function CM(r,e,t){if(e<2)return new t(0);const i=new t(e*2);for(let o=0;o<e;o++)i[o*2]=ji(r,o),i[o*2+1]=ji(r,(o+1)%e);return i}function MM(r,e,t){const i=Math.max(0,e-2),o=new t(i*3);for(let c=0;c<i;c++)o[c*3]=ji(r,0),o[c*3+1]=ji(r,c+1),o[c*3+2]=ji(r,c+2);return o}function u0(r,e){return new vM().postProcess(r,e)}async function IM(r){const e=[];return r.scenes.forEach(t=>{t.traverse(i=>{})}),await RM(()=>e.some(t=>!t.loaded))}async function RM(r){for(;r();)await new Promise(e=>requestAnimationFrame(e))}const NM=`struct ScenegraphUniforms {
  sizeScale: f32,
  sizeMinPixels: f32,
  sizeMaxPixels: f32,
  sceneModelMatrix: mat4x4<f32>,
  composeModelMatrix: f32,
};

@group(0) @binding(auto)
var<uniform> scenegraph: ScenegraphUniforms;
`,nu=`layout(std140) uniform scenegraphUniforms {
  float sizeScale;
  float sizeMinPixels;
  float sizeMaxPixels;
  mat4 sceneModelMatrix;
  float composeModelMatrix;
} scenegraph;
`,PM={name:"scenegraph",source:NM,vs:nu,fs:nu,uniformTypes:{sizeScale:"f32",sizeMinPixels:"f32",sizeMaxPixels:"f32",sceneModelMatrix:"mat4x4<f32>",composeModelMatrix:"f32"}},LM=`#version 300 es
#define SHADER_NAME scenegraph-layer-vertex-shader
in vec3 instancePositions;
in vec3 instancePositions64Low;
in vec4 instanceColors;
in vec3 instanceModelMatrixCol0;
in vec3 instanceModelMatrixCol1;
in vec3 instanceModelMatrixCol2;
in vec3 instanceTranslation;
in vec3 positions;
#ifdef HAS_UV
in vec2 texCoords;
#endif
#ifdef LIGHTING_PBR
#ifdef HAS_NORMALS
in vec3 normals;
#endif
#endif
out vec4 vColor;
#ifndef LIGHTING_PBR
#ifdef HAS_UV
out vec2 vTEXCOORD_0;
#endif
#endif
void main(void) {
#if defined(HAS_UV) && !defined(LIGHTING_PBR)
vTEXCOORD_0 = texCoords;
geometry.uv = texCoords;
#endif
geometry.worldPosition = instancePositions;
geometry.pickingColor = picking_getPickingColorFromInstanceID();
mat3 instanceModelMatrix = mat3(instanceModelMatrixCol0, instanceModelMatrixCol1, instanceModelMatrixCol2);
vec3 normal = vec3(0.0, 0.0, 1.0);
#ifdef LIGHTING_PBR
#ifdef HAS_NORMALS
normal = instanceModelMatrix * (scenegraph.sceneModelMatrix * vec4(normals, 0.0)).xyz;
#endif
#endif
float originalSize = project_size_to_pixel(scenegraph.sizeScale);
float clampedSize = clamp(originalSize, scenegraph.sizeMinPixels, scenegraph.sizeMaxPixels);
float sizeRatio = originalSize == 0.0 ? 0.0 : clampedSize / originalSize;
vec3 pos = (instanceModelMatrix * (scenegraph.sceneModelMatrix * vec4(positions, 1.0)).xyz) * scenegraph.sizeScale * sizeRatio + instanceTranslation;
if(scenegraph.composeModelMatrix > 0.5) {
DECKGL_FILTER_SIZE(pos, geometry);
geometry.normal = project_normal(normal);
geometry.worldPosition += pos;
gl_Position = project_position_to_clipspace(pos + instancePositions, instancePositions64Low, vec3(0.0), geometry.position);
}
else {
pos = project_size(pos);
DECKGL_FILTER_SIZE(pos, geometry);
gl_Position = project_position_to_clipspace(instancePositions, instancePositions64Low, pos, geometry.position);
geometry.normal = project_normal(normal);
}
DECKGL_FILTER_GL_POSITION(gl_Position, geometry);
#ifdef LIGHTING_PBR
pbr_vPosition = geometry.position.xyz;
#ifdef HAS_NORMALS
pbr_vNormal = geometry.normal;
#endif
#ifdef HAS_UV
pbr_vUV0 = texCoords;
#else
pbr_vUV0 = vec2(0., 0.);
#endif
pbr_vUV1 = vec2(0., 0.);
geometry.uv = pbr_vUV0;
#endif
vColor = instanceColors;
DECKGL_FILTER_COLOR(vColor, geometry);
}
`,kM=`#version 300 es
#define SHADER_NAME scenegraph-layer-fragment-shader
in vec4 vColor;
out vec4 fragColor;
#ifndef LIGHTING_PBR
#if defined(HAS_UV) && defined(HAS_BASECOLORMAP)
in vec2 vTEXCOORD_0;
uniform sampler2D pbr_baseColorSampler;
#endif
#endif
void main(void) {
#ifdef LIGHTING_PBR
fragColor = pbr_filterColor(vColor);
geometry.uv = pbr_vUV0;
#else
#if defined(HAS_UV) && defined(HAS_BASECOLORMAP)
fragColor = vColor * texture(pbr_baseColorSampler, vTEXCOORD_0);
geometry.uv = vTEXCOORD_0;
#else
fragColor = vColor;
#endif
#endif
fragColor.a *= layer.opacity;
DECKGL_FILTER_COLOR(fragColor, geometry);
}
`,OM=`struct VertexInputs {
  @location(0) positions: vec3<f32>,
#ifdef HAS_NORMALS
  @location(1) normals: vec3<f32>,
#endif
#ifdef HAS_UV
  @location(3) texCoords: vec2<f32>,
#endif
  @location(6) instancePositions: vec3<f32>,
  @location(7) instancePositions64Low: vec3<f32>,
  @location(8) instanceColors: vec4<f32>,
  @location(10) instanceModelMatrixCol0: vec3<f32>,
  @location(11) instanceModelMatrixCol1: vec3<f32>,
  @location(12) instanceModelMatrixCol2: vec3<f32>,
  @location(13) instanceTranslation: vec3<f32>,
};

struct FragmentInputs {
  @builtin(position) position: vec4<f32>,
  @location(0) vColor: vec4<f32>,
  @location(1) vTexCoord: vec2<f32>,
  @location(2) pbrPosition: vec3<f32>,
  @location(3) pbrUV: vec2<f32>,
  @location(4) pbrNormal: vec3<f32>,
  @location(5) pickingColor: vec3<f32>,
};

@vertex
fn vertexMain(
  inputs: VertexInputs,
  @builtin(instance_index) instanceIndex: u32
) -> FragmentInputs {
  var outputs: FragmentInputs;

  geometry.worldPosition = inputs.instancePositions;
  geometry.pickingColor = picking_getPickingColorFromIndex(instanceIndex);

  var vertexPosition = inputs.positions;
  var texCoord = vec2<f32>(0.0, 0.0);
  var normal = vec3<f32>(0.0, 0.0, 1.0);

#ifdef HAS_UV
  texCoord = inputs.texCoords;
#endif
#ifdef HAS_NORMALS
  normal = inputs.normals;
#endif

  geometry.uv = texCoord;

  let instanceModelMatrix = mat3x3<f32>(
    inputs.instanceModelMatrixCol0,
    inputs.instanceModelMatrixCol1,
    inputs.instanceModelMatrixCol2
  );

  let scenePosition = (scenegraph.sceneModelMatrix * vec4<f32>(vertexPosition, 1.0)).xyz;
  let worldNormal = instanceModelMatrix * (scenegraph.sceneModelMatrix * vec4<f32>(normal, 0.0)).xyz;

  let originalSize = project_meter_size_to_pixel(scenegraph.sizeScale);
  let clampedSize = clamp(originalSize, scenegraph.sizeMinPixels, scenegraph.sizeMaxPixels);
  let sizeRatio = select(0.0, clampedSize / originalSize, originalSize > 0.0);

  let pos =
    (instanceModelMatrix * scenePosition) * scenegraph.sizeScale * sizeRatio +
    inputs.instanceTranslation;

  if (scenegraph.composeModelMatrix > 0.5) {
    geometry.normal = project_normal(worldNormal);
    geometry.worldPosition = inputs.instancePositions + pos;
    geometry.position = vec4<f32>(
      project_position_vec3_f64(inputs.instancePositions + pos, inputs.instancePositions64Low),
      1.0
    );
  } else {
    let sizeAdjustedPos = project_size_vec3(pos);
    // Scenegraph offsets are east/north/up in globe mode. Use project32's helper so it can
    // rotate the offset onto the local tangent plane before producing the common position.
    let projectResult = project_position_to_clipspace_and_commonspace(
      inputs.instancePositions,
      inputs.instancePositions64Low,
      sizeAdjustedPos
    );
    geometry.position = projectResult.commonPosition;
    geometry.normal = project_normal(worldNormal);
  }

  outputs.position = project_common_position_to_clipspace(geometry.position);
  outputs.vColor = inputs.instanceColors;
  outputs.vTexCoord = texCoord;
  outputs.pbrPosition = geometry.position.xyz;
  outputs.pbrUV = texCoord;
  outputs.pbrNormal = geometry.normal;
  outputs.pickingColor = geometry.pickingColor;
  return outputs;
}

@fragment
fn fragmentMain(inputs: FragmentInputs) -> @location(0) vec4<f32> {
  fragmentGeometry.uv = inputs.vTexCoord;

  if (picking.isActive > 0.5) {
    if (!picking_isColorValid(inputs.pickingColor)) {
      discard;
    }
    return vec4<f32>(inputs.pickingColor, 1.0);
  }

  var fragColor = inputs.vColor;

#ifdef LIGHTING_PBR
  fragmentInputs.pbr_vPosition = inputs.pbrPosition;
  // scenegraphPbrMaterial uses the indexed UV fields from the current PBR module.
  fragmentInputs.pbr_vUV0 = inputs.pbrUV;
  fragmentInputs.pbr_vUV1 = vec2<f32>(0.0);
  fragmentInputs.pbr_vNormal = inputs.pbrNormal;
  // Vertex color is part of the material base color and must be applied before lighting.
  fragColor = pbr_filterColor(fragColor);
#else
#ifdef HAS_BASECOLORMAP
  fragColor =
    fragColor *
    textureSample(pbr_baseColorSampler, pbr_baseColorSamplerSampler, inputs.vTexCoord);
#endif
#endif

  fragColor.a *= layer.opacity;

  if (picking.isHighlightActive > 0.5) {
    let highlightedObjectColor = picking_normalizeColor(picking.highlightedObjectColor);
    if (picking_isColorZero(abs(inputs.pickingColor - highlightedObjectColor))) {
      let highlightAlpha = picking.highlightColor.a;
      let blendedAlpha = highlightAlpha + fragColor.a * (1.0 - highlightAlpha);
      if (blendedAlpha > 0.0) {
        let highlightRatio = highlightAlpha / blendedAlpha;
        fragColor = vec4<f32>(
          mix(fragColor.rgb, picking.highlightColor.rgb, highlightRatio),
          blendedAlpha
        );
      }
    }
  }

  return deckgl_premultiplied_alpha(fragColor);
}
`,FM=sn.source.replace(/fn pbr_setPositionNormalTangentUV\([\s\S]*?\n}\n/,`fn pbr_setPositionNormalTangentUV(position: vec4f, normal: vec4f, tangent: vec4f, uv: vec2f)
{
  fragmentInputs.pbr_vPosition = position.xyz;
  fragmentInputs.pbr_vNormal = normal.xyz;
  fragmentInputs.pbr_vTBN = mat3x3f(
    vec3f(1.0, 0.0, 0.0),
    vec3f(0.0, 1.0, 0.0),
    vec3f(0.0, 0.0, 1.0)
  );
  fragmentInputs.pbr_vUV0 = uv;
  fragmentInputs.pbr_vUV1 = uv;
}
`).replace(/pbrProjection\.camera/g,"project.cameraPosition"),iu={...sn,dependencies:[of],source:FM},Xd=[255,255,255,255],BM={scenegraph:{type:"object",value:null,async:!0},getScene:r=>r&&r.scenes?typeof r.scene=="object"?r.scene:r.scenes[r.scene||0]:r,getAnimator:r=>r&&r.animator,_animations:null,onFirstDraw:{type:"function",value:()=>{}},sizeScale:{type:"number",value:1,min:0},sizeMinPixels:{type:"number",min:0,value:0},sizeMaxPixels:{type:"number",min:0,value:Number.MAX_SAFE_INTEGER},getPosition:{type:"accessor",value:r=>r.position},getColor:{type:"accessor",value:Xd},_lighting:"flat",_imageBasedLightingEnvironment:void 0,getOrientation:{type:"accessor",value:[0,0,0]},getScale:{type:"accessor",value:[1,1,1]},getTranslation:{type:"accessor",value:[0,0,0]},getTransformMatrix:{type:"accessor",value:[]},loaders:[qi]};class f0 extends uf{getShaders(){var c;const e={};let t;const i=((c=this.context.device)==null?void 0:c.type)==="webgpu";this.props._lighting==="pbr"?(t=i?iu:sn,e.LIGHTING_PBR=1):i?t=iu:t={name:"pbrMaterial"};const o=[ff,hf,df,PM,t];return super.getShaders({defines:e,vs:LM,fs:kM,source:OM,modules:o})}initializeState(){const e=this.getAttributeManager(),t=this.context.device.type!=="webgpu";e.addInstanced({instancePositions:{size:3,type:"float64",fp64:this.use64bitPositions(),accessor:"getPosition",transition:t},instanceColors:{type:"unorm8",size:this.props.colorFormat.length,accessor:"getColor",defaultValue:Xd,transition:t},instanceModelMatrix:cd})}updateState(e){super.updateState(e);const{props:t,oldProps:i}=e;t.scenegraph!==i.scenegraph?this._updateScenegraph():t._animations!==i._animations&&this._applyAnimationsProp(this.state.animator,t._animations)}finalizeState(e){super.finalizeState(e),this._destroyScenegraphAssets()}get isLoaded(){var e;return!!((e=this.state)!=null&&e.scenegraph&&super.isLoaded)}_updateScenegraph(){const e=this.props,{device:t}=this.context;let i=null;if(e.scenegraph instanceof Ws)i={scenes:[e.scenegraph]};else if(e.scenegraph&&typeof e.scenegraph=="object"){const m=e.scenegraph,_=m.json?u0(m):m,T=kw(t,_,this._getModelOptions());i=T,IM(T).then(()=>this.setNeedsRedraw()).catch(y=>{this.raiseError(y,"loading glTF")})}const o={layer:this,device:this.context.device},c=e.getScene(i,o),d=e.getAnimator(i,o);if(c instanceof fr){this._destroyScenegraphAssets(),this._applyAnimationsProp(d,e._animations);const m=[];c.traverse(_=>{_ instanceof vn&&m.push(_.model)}),this.setState({scenegraph:c,animator:d,materials:(i==null?void 0:i.materials)||null,models:m,firstDrawSignaled:!1}),this.getAttributeManager().invalidateAll()}else c!==null&&_n.warn("invalid scenegraph:",c)()}_destroyScenegraphAssets(){var e,t;(e=this.state.scenegraph)==null||e.destroy(),(t=this.state.materials)==null||t.forEach(i=>i.destroy()),this.state.scenegraph=null,this.state.animator=null,this.state.materials=null,this.state.models=[]}_applyAnimationsProp(e,t){if(!e||!t)return;const i=e.getAnimations();Object.keys(t).sort().forEach(o=>{const c=t[o];if(o==="*")i.forEach(d=>{Object.assign(d,c)});else if(Number.isFinite(Number(o))){const d=Number(o);d>=0&&d<i.length?Object.assign(i[d],c):_n.warn(`animation ${o} not found`)()}else{const d=i.find(({animation:m})=>m.name===o);d?Object.assign(d,c):_n.warn(`animation ${o} not found`)()}})}_getModelOptions(){const{_imageBasedLightingEnvironment:e}=this.props;let t;e&&(typeof e=="function"?t=e({device:this.context.device,gl:this.context.gl,layer:this}):t=e);const i=this.context.device.type==="webgpu"?{depthWriteEnabled:!0,depthCompare:"less-equal"}:void 0;return{imageBasedLightingEnvironment:t,modelOptions:{id:this.props.id,isInstanced:!0,bufferLayout:this.getAttributeManager().getBufferLayouts(),parameters:i,...this.getShaders()},useTangents:!1}}draw({context:e}){var y,w;if(!this.state.scenegraph)return;this.props._animations&&this.state.animator&&(this.state.animator.setTime(e.timeline.getTime()),this.setNeedsRedraw());const{viewport:t,renderPass:i}=this.context,{sizeScale:o,sizeMinPixels:c,sizeMaxPixels:d,coordinateSystem:m}=this.props,_={camera:t.cameraPosition},T=this.getNumInstances();this.state.scenegraph.traverse((M,{worldMatrix:N})=>{if(M instanceof vn){const{model:O}=M;O.setInstanceCount(T);const F={sizeScale:o,sizeMinPixels:c,sizeMaxPixels:d,composeModelMatrix:ld(t,m)?1:0,sceneModelMatrix:N};O.shaderInputs.setProps({pbrProjection:_,scenegraph:F}),O.draw(i)}}),this.state.firstDrawSignaled||(this.state.firstDrawSignaled=!0,(w=(y=this.props).onFirstDraw)==null||w.call(y))}}f0.defaultProps=BM;f0.layerName="ScenegraphLayer";const su=`layout(std140) uniform meshUniforms {
  bool pickFeatureIds;
} mesh;
`,DM=`struct MeshUniforms {
  pickFeatureIds: f32,
};

@group(0) @binding(auto) var<uniform> mesh: MeshUniforms;
`,UM={name:"mesh",vs:su,fs:su,source:DM,uniformTypes:{pickFeatureIds:"f32"}},VM=sn.source.replace(/fn pbr_setPositionNormalTangentUV\([\s\S]*?\n}\n/,`fn pbr_setPositionNormalTangentUV(position: vec4f, normal: vec4f, tangent: vec4f, uv: vec2f)
{
  fragmentInputs.pbr_vPosition = position.xyz;
  fragmentInputs.pbr_vNormal = normal.xyz;
  fragmentInputs.pbr_vTBN = mat3x3f(
    vec3f(1.0, 0.0, 0.0),
    vec3f(0.0, 1.0, 0.0),
    vec3f(0.0, 0.0, 1.0)
  );
  fragmentInputs.pbr_vUV0 = uv;
  fragmentInputs.pbr_vUV1 = uv;
}
`).replace(/pbrProjection\.camera/g,"project.cameraPosition"),jM={...sn,source:VM},GM=`#version 300 es
#define SHADER_NAME simple-mesh-layer-vs
in vec3 positions;
in vec3 normals;
in vec3 colors;
in vec2 texCoords;
in vec4 uvRegions;
in float rowIndexes;
in vec4 instanceColors;
in vec3 instanceModelMatrixCol0;
in vec3 instanceModelMatrixCol1;
in vec3 instanceModelMatrixCol2;
out vec2 vTexCoord;
out vec3 cameraPosition;
out vec3 normals_commonspace;
out vec4 position_commonspace;
out vec4 vColor;
vec2 applyUVRegion(vec2 uv) {
#ifdef HAS_UV_REGIONS
return fract(uv) * (uvRegions.zw - uvRegions.xy) + uvRegions.xy;
#else
return uv;
#endif
}
void main(void) {
vec2 uv = applyUVRegion(texCoords);
geometry.uv = uv;
if (mesh.pickFeatureIds) {
geometry.pickingColor = picking_getPickingColorFromIndex(rowIndexes);
} else {
geometry.pickingColor = picking_getPickingColorFromInstanceID();
}
mat3 instanceModelMatrix = mat3(instanceModelMatrixCol0, instanceModelMatrixCol1, instanceModelMatrixCol2);
vTexCoord = uv;
cameraPosition = project.cameraPosition;
vColor = vec4(colors * instanceColors.rgb, instanceColors.a);
vec3 pos = (instanceModelMatrix * positions) * simpleMesh.sizeScale;
vec3 projectedPosition = project_position(positions);
position_commonspace = vec4(projectedPosition, 1.0);
gl_Position = project_common_position_to_clipspace(position_commonspace);
geometry.position = position_commonspace;
normals_commonspace = project_normal(instanceModelMatrix * normals);
geometry.normal = normals_commonspace;
DECKGL_FILTER_GL_POSITION(gl_Position, geometry);
#ifdef MODULE_PBRMATERIAL
pbr_vPosition = geometry.position.xyz;
#ifdef HAS_NORMALS
pbr_vNormal = geometry.normal;
#endif
#ifdef HAS_UV
pbr_vUV0 = uv;
#else
pbr_vUV0 = vec2(0., 0.);
#endif
pbr_vUV1 = vec2(0., 0.);
geometry.uv = pbr_vUV0;
#endif
DECKGL_FILTER_COLOR(vColor, geometry);
}
`,zM=`#version 300 es
#define SHADER_NAME simple-mesh-layer-fs
precision highp float;
uniform sampler2D sampler;
in vec2 vTexCoord;
in vec3 cameraPosition;
in vec3 normals_commonspace;
in vec4 position_commonspace;
in vec4 vColor;
out vec4 fragColor;
void main(void) {
#ifdef MODULE_PBRMATERIAL
fragColor = vColor * pbr_filterColor(vec4(0));
geometry.uv = pbr_vUV0;
fragColor.a *= layer.opacity;
#else
geometry.uv = vTexCoord;
vec3 normal;
if (simpleMesh.flatShading) {
normal = normalize(cross(dFdx(position_commonspace.xyz), dFdy(position_commonspace.xyz)));
} else {
normal = normals_commonspace;
}
vec4 color = simpleMesh.hasTexture ? texture(sampler, vTexCoord) : vColor;
vec3 lightColor = lighting_getLightColor(color.rgb, cameraPosition, position_commonspace.xyz, normal);
fragColor = vec4(lightColor, color.a * layer.opacity);
#endif
DECKGL_FILTER_COLOR(fragColor, geometry);
}
`,HM=`struct VertexInputs {
  @location(0) positions: vec3<f32>,
#ifdef HAS_NORMALS
  @location(1) normals: vec3<f32>,
#endif
  @location(2) colors: vec4<f32>,
#ifdef HAS_UV
  @location(3) texCoords: vec2<f32>,
#endif
#ifdef HAS_UV_REGIONS
  @location(4) uvRegions: vec4<f32>,
#endif
#ifdef HAS_FEATURE_IDS
  @location(5) rowIndexes: u32,
#endif
  @location(6) instanceColors: vec4<f32>,
  @location(7) instanceModelMatrixCol0: vec3<f32>,
  @location(8) instanceModelMatrixCol1: vec3<f32>,
  @location(9) instanceModelMatrixCol2: vec3<f32>,
};

struct FragmentInputs {
  @builtin(position) position: vec4<f32>,
  @location(0) color: vec4<f32>,
  @location(1) texCoord: vec2<f32>,
  @location(2) pbrPosition: vec3<f32>,
  @location(3) pbrNormal: vec3<f32>,
  @location(4) pickingColor: vec3<f32>,
};

fn applyUVRegion(uv: vec2<f32>, uvRegion: vec4<f32>) -> vec2<f32> {
#ifdef HAS_UV_REGIONS
  // https://github.com/Esri/i3s-spec/blob/master/docs/1.7/geometryUVRegion.cmn.md
  return fract(uv) * (uvRegion.zw - uvRegion.xy) + uvRegion.xy;
#else
  return uv;
#endif
}

@vertex
fn vertexMain(
  inputs: VertexInputs,
  @builtin(instance_index) instanceIndex: u32
) -> FragmentInputs {
  var outputs: FragmentInputs;
  var texCoord = vec2<f32>(0.0);
  var normal = vec3<f32>(0.0, 0.0, 1.0);
  var uvRegion = vec4<f32>(0.0);

#ifdef HAS_UV
  texCoord = inputs.texCoords;
#endif
#ifdef HAS_NORMALS
  normal = inputs.normals;
#endif
#ifdef HAS_UV_REGIONS
  uvRegion = inputs.uvRegions;
#endif

  texCoord = applyUVRegion(texCoord, uvRegion);
  geometry.uv = texCoord;
#ifdef HAS_FEATURE_IDS
  geometry.pickingColor = picking_getPickingColorFromIndex(inputs.rowIndexes);
#else
  geometry.pickingColor = picking_getPickingColorFromIndex(instanceIndex);
#endif

  let instanceModelMatrix = mat3x3<f32>(
    inputs.instanceModelMatrixCol0,
    inputs.instanceModelMatrixCol1,
    inputs.instanceModelMatrixCol2
  );
  let commonPosition = vec4<f32>(project_position_vec3_f32(inputs.positions), 1.0);

  geometry.position = commonPosition;
  geometry.normal = project_normal(instanceModelMatrix * normal);

  outputs.position = project_common_position_to_clipspace(commonPosition);
  outputs.color = vec4<f32>(
    inputs.colors.rgb * inputs.instanceColors.rgb,
    inputs.instanceColors.a
  );
  outputs.texCoord = texCoord;
  outputs.pbrPosition = commonPosition.xyz;
  outputs.pbrNormal = geometry.normal;
  outputs.pickingColor = geometry.pickingColor;
  return outputs;
}

@fragment
fn fragmentMain(inputs: FragmentInputs) -> @location(0) vec4<f32> {
  fragmentGeometry.uv = inputs.texCoord;

  if (picking.isActive > 0.5) {
    if (!picking_isColorValid(inputs.pickingColor)) {
      discard;
    }
    return vec4<f32>(inputs.pickingColor, 1.0);
  }

  fragmentInputs.pbr_vPosition = inputs.pbrPosition;
  fragmentInputs.pbr_vUV0 = inputs.texCoord;
  fragmentInputs.pbr_vUV1 = vec2<f32>(0.0);
  fragmentInputs.pbr_vNormal = inputs.pbrNormal;

  var color = inputs.color * pbr_filterColor(vec4<f32>(0.0));
  color.a *= layer.opacity;

  if (picking.isHighlightActive > 0.5) {
    let highlightedObjectColor = picking_normalizeColor(picking.highlightedObjectColor);
    if (picking_isColorZero(abs(inputs.pickingColor - highlightedObjectColor))) {
      let highlightAlpha = picking.highlightColor.a;
      let blendedAlpha = highlightAlpha + color.a * (1.0 - highlightAlpha);
      if (blendedAlpha > 0.0) {
        color = vec4<f32>(
          mix(color.rgb, picking.highlightColor.rgb, highlightAlpha / blendedAlpha),
          blendedAlpha
        );
      }
    }
  }

  return deckgl_premultiplied_alpha(color);
}
`;function qM(r){const e=r.positions||r.POSITION,t=e.value.length/e.size;r.COLOR_0||r.colors||(r.colors={size:4,value:new Uint8Array(t*4).fill(255),normalized:!0})}const QM={pbrMaterial:{type:"object",value:null},featureIds:{type:"array",value:null,optional:!0}};class h0 extends zi{getShaders(){const e=super.getShaders();return{...e,vs:GM,fs:zM,source:HM,modules:[...e.modules,jM,UM]}}initializeState(){const{featureIds:e}=this.props;super.initializeState();const t=this.getAttributeManager();e&&t.add({rowIndexes:{type:"uint32",size:1,noAlloc:!0,update:this.calculateFeatureIdsPickingIndexes}})}updateState(e){super.updateState(e);const{props:t,oldProps:i}=e;t.pbrMaterial!==i.pbrMaterial&&this.updatePbrMaterialUniforms(t.pbrMaterial)}draw(e){const{featureIds:t}=this.props,{model:i}=this.state;if(!i)return;const o={pickFeatureIds:!!t},c={camera:this.context.viewport.cameraPosition};i.shaderInputs.setProps({pbrProjection:c,mesh:o}),super.draw(e)}getModel(e){const{id:t}=this.props,i=this.parseMaterial(this.props.pbrMaterial,e);this.setState({parsedPBRMaterial:i});const o=this.getShaders();return qM(e.attributes),new DA(this.context.device,{...this.getShaders(),id:t,geometry:e,bufferLayout:this.getAttributeManager().getBufferLayouts(),defines:{...o.defines,...i==null?void 0:i.defines,HAS_UV_REGIONS:e.attributes.uvRegions?1:0,HAS_FEATURE_IDS:this.props.featureIds?1:0},parameters:i==null?void 0:i.parameters,isInstanced:!0})}updatePbrMaterialUniforms(e){const{model:t}=this.state;if(t){const{mesh:i}=this.props,o=this.parseMaterial(e,i);this.setState({parsedPBRMaterial:o});const{pbr_baseColorSampler:c}=o.bindings,{emptyTexture:d}=this.state,m=c||d,_={...this.context.device.type==="webgpu"?{simpleMeshTexture:m}:{sampler:m},hasTexture:!!c},{camera:T,...y}={...o.bindings,...o.uniforms};t.shaderInputs.setProps({simpleMesh:_,pbrMaterial:y})}}parseMaterial(e,t){const i=!!(e.pbrMetallicRoughness&&e.pbrMetallicRoughness.baseColorTexture);return md(this.context.device,{unlit:i,...e},{NORMAL:t.attributes.normals,TEXCOORD_0:t.attributes.texCoords},{pbrDebug:!1,lights:!0,useTangents:!1})}calculateFeatureIdsPickingIndexes(e){const t=this.props.featureIds;e.value=new Uint32Array(t)}finalizeState(e){var t;super.finalizeState(e),(t=this.state.parsedPBRMaterial)==null||t.generatedTextures.forEach(i=>i.destroy()),this.setState({parsedPBRMaterial:null})}}h0.layerName="MeshLayer";h0.defaultProps=QM;const WM=6378137,KM=6378137,$M=6356752314245179e-9;function Co(r){return r}new X;function XM(r,e=[],t=Co){return"longitude"in r?(e[0]=t(r.longitude),e[1]=t(r.latitude),e[2]=r.height):"x"in r?(e[0]=t(r.x),e[1]=t(r.y),e[2]=r.z):(e[0]=t(r[0]),e[1]=t(r[1]),e[2]=r[2]),e}function YM(r,e=[]){return XM(r,e,Hs._cartographicRadians?Co:_b)}function JM(r,e,t=Co){return"longitude"in e?(e.longitude=t(r[0]),e.latitude=t(r[1]),e.height=r[2]):"x"in e?(e.x=t(r[0]),e.y=t(r[1]),e.z=r[2]):(e[0]=t(r[0]),e[1]=t(r[1]),e[2]=r[2]),e}function ZM(r,e){return JM(r,e,Hs._cartographicRadians?Co:bb)}const ou=1e-14,eI=new X,au={up:{south:"east",north:"west",west:"south",east:"north"},down:{south:"west",north:"east",west:"north",east:"south"},south:{up:"west",down:"east",west:"down",east:"up"},north:{up:"east",down:"west",west:"up",east:"down"},west:{up:"north",down:"south",north:"down",south:"up"},east:{up:"south",down:"north",north:"up",south:"down"}},ka={north:[-1,0,0],east:[0,1,0],up:[0,0,1],south:[1,0,0],west:[0,-1,0],down:[0,0,-1]},ki={east:new X,north:new X,up:new X,west:new X,south:new X,down:new X},tI=new X,rI=new X,nI=new X;function Au(r,e,t,i,o,c){const d=au[e]&&au[e][t];Or(d&&(!i||i===d));let m,_,T;const y=eI.copy(o);if(bn(y.x,0,ou)&&bn(y.y,0,ou)){const M=Math.sign(y.z);m=tI.fromArray(ka[e]),e!=="east"&&e!=="west"&&m.scale(M),_=rI.fromArray(ka[t]),t!=="east"&&t!=="west"&&_.scale(M),T=nI.fromArray(ka[i]),i!=="east"&&i!=="west"&&T.scale(M)}else{const{up:M,east:N,north:O}=ki;N.set(-y.y,y.x,0).normalize(),r.geodeticSurfaceNormal(y,M),O.copy(M).cross(N);const{down:F,west:W,south:j}=ki;F.copy(M).scale(-1),W.copy(N).scale(-1),j.copy(O).scale(-1),m=ki[e],_=ki[t],T=ki[i]}return c[0]=m.x,c[1]=m.y,c[2]=m.z,c[3]=0,c[4]=_.x,c[5]=_.y,c[6]=_.z,c[7]=0,c[8]=T.x,c[9]=T.y,c[10]=T.z,c[11]=0,c[12]=y.x,c[13]=y.y,c[14]=y.z,c[15]=1,c}const Vn=new X,iI=new X,sI=new X;function oI(r,e,t=[]){const{oneOverRadii:i,oneOverRadiiSquared:o,centerToleranceSquared:c}=e;Vn.from(r);const d=Vn.x,m=Vn.y,_=Vn.z,T=i.x,y=i.y,w=i.z,M=d*d*T*T,N=m*m*y*y,O=_*_*w*w,F=M+N+O,W=Math.sqrt(1/F);if(!Number.isFinite(W))return;const j=iI;if(j.copy(r).scale(W),F<c)return j.to(t);const q=o.x,J=o.y,Z=o.z,Y=sI;Y.set(j.x*q*2,j.y*J*2,j.z*Z*2);let se=(1-W)*Vn.len()/(.5*Y.len()),he=0,ue,$,Q,U;do{se-=he,ue=1/(1+se*q),$=1/(1+se*J),Q=1/(1+se*Z);const be=ue*ue,ve=$*$,Se=Q*Q,Ie=be*ue,Le=ve*$,Be=Se*Q;U=M*be+N*ve+O*Se-1;const Ze=-2*(M*Ie*q+N*Le*J+O*Be*Z);he=U/Ze}while(Math.abs(U)>b2);return Vn.scale([ue,$,Q]).to(t)}const ks=new X,cu=new X,aI=new X,gr=new X,AI=new X,Os=new X;class it{constructor(e=0,t=0,i=0){this.centerToleranceSquared=g2,Or(e>=0),Or(t>=0),Or(i>=0),this.radii=new X(e,t,i),this.radiiSquared=new X(e*e,t*t,i*i),this.radiiToTheFourth=new X(e*e*e*e,t*t*t*t,i*i*i*i),this.oneOverRadii=new X(e===0?0:1/e,t===0?0:1/t,i===0?0:1/i),this.oneOverRadiiSquared=new X(e===0?0:1/(e*e),t===0?0:1/(t*t),i===0?0:1/(i*i)),this.minimumRadius=Math.min(e,t,i),this.maximumRadius=Math.max(e,t,i),this.radiiSquared.z!==0&&(this.squaredXOverSquaredZ=this.radiiSquared.x/this.radiiSquared.z),Object.freeze(this)}equals(e){return this===e||!!(e&&this.radii.equals(e.radii))}toString(){return this.radii.toString()}cartographicToCartesian(e,t=[0,0,0]){const i=cu,o=aI,[,,c]=e;this.geodeticSurfaceNormalCartographic(e,i),o.copy(this.radiiSquared).scale(i);const d=Math.sqrt(i.dot(o));return o.scale(1/d),i.scale(c),o.add(i),o.to(t)}cartesianToCartographic(e,t=[0,0,0]){Os.from(e);const i=this.scaleToGeodeticSurface(Os,gr);if(!i)return;const o=this.geodeticSurfaceNormal(i,cu),c=AI;c.copy(Os).subtract(i);const d=Math.atan2(o.y,o.x),m=Math.asin(o.z),_=Math.sign(Tb(c,Os))*vb(c);return ZM([d,m,_],t)}eastNorthUpToFixedFrame(e,t=new we){return Au(this,"east","north","up",e,t)}localFrameToFixedFrame(e,t,i,o,c=new we){return Au(this,e,t,i,o,c)}geocentricSurfaceNormal(e,t=[0,0,0]){return ks.from(e).normalize().to(t)}geodeticSurfaceNormalCartographic(e,t=[0,0,0]){const i=YM(e),o=i[0],c=i[1],d=Math.cos(c);return ks.set(d*Math.cos(o),d*Math.sin(o),Math.sin(c)).normalize(),ks.to(t)}geodeticSurfaceNormal(e,t=[0,0,0]){return ks.from(e).scale(this.oneOverRadiiSquared).normalize().to(t)}scaleToGeodeticSurface(e,t){return oI(e,this,t)}scaleToGeocentricSurface(e,t=[0,0,0]){gr.from(e);const i=gr.x,o=gr.y,c=gr.z,d=this.oneOverRadiiSquared,m=1/Math.sqrt(i*i*d.x+o*o*d.y+c*c*d.z);return gr.multiplyScalar(m).to(t)}transformPositionToScaledSpace(e,t=[0,0,0]){return gr.from(e).scale(this.oneOverRadii).to(t)}transformPositionFromScaledSpace(e,t=[0,0,0]){return gr.from(e).scale(this.radii).to(t)}getSurfaceNormalIntersectionWithZAxis(e,t=0,i=[0,0,0]){Or(bn(this.radii.x,this.radii.y,vf)),Or(this.radii.z>0),gr.from(e);const o=gr.z*(1-this.squaredXOverSquaredZ);if(!(Math.abs(o)>=this.radii.z-t))return gr.set(0,0,o).to(i)}}it.WGS84=new it(WM,KM,$M);class cI{constructor(e,t,i){B(this,"item");B(this,"previous");B(this,"next");this.item=e,this.previous=t,this.next=i}}class lI{constructor(){B(this,"head",null);B(this,"tail",null);B(this,"_length",0)}get length(){return this._length}add(e){const t=new cI(e,this.tail,null);return this.tail?(this.tail.next=t,this.tail=t):(this.head=t,this.tail=t),++this._length,t}remove(e){e&&(e.previous&&e.next?(e.previous.next=e.next,e.next.previous=e.previous):e.previous?(e.previous.next=null,this.tail=e.previous):e.next?(e.next.previous=null,this.head=e.next):(this.head=null,this.tail=null),e.next=null,e.previous=null,--this._length)}splice(e,t){e!==t&&(this.remove(t),this._insert(e,t))}_insert(e,t){const i=e.next;e.next=t,this.tail===e?this.tail=t:i.previous=t,t.next=i,t.previous=e,++this._length}}class uI{constructor(){B(this,"_list");B(this,"_sentinel");B(this,"_trimTiles");this._list=new lI,this._sentinel=this._list.add("sentinel"),this._trimTiles=!1}reset(){this._list.splice(this._list.tail,this._sentinel)}touch(e){const t=e._cacheNode;t&&this._list.splice(this._sentinel,t)}add(e,t,i){t._cacheNode||(t._cacheNode=this._list.add(t),i&&i(e,t))}unloadTile(e,t,i){const o=t._cacheNode;o&&(this._list.remove(o),t._cacheNode=null,i&&i(e,t))}unloadTiles(e,t){const i=this._trimTiles;this._trimTiles=!1;const o=this._list,c=e.maximumMemoryUsage*1024*1024,d=this._sentinel;let m=o.head;for(;m!==d&&(e.gpuMemoryUsageInBytes>c||i);){const _=m.item;m=m.next,this.unloadTile(e,_,t)}}trim(){this._trimTiles=!0}}function fI(r,e){lt(r),lt(e);const{rtcCenter:t,gltfUpAxis:i}=e,{computedTransform:o,boundingVolume:{center:c}}=r;let d=new we(o);switch(t&&d.translate(t),i){case"Z":break;case"Y":const M=new we().rotateX(Math.PI/2);d=d.multiplyRight(M);break;case"X":const N=new we().rotateY(-Math.PI/2);d=d.multiplyRight(N);break}e.isQuantized&&d.translate(e.quantizedVolumeOffset).scale(e.quantizedVolumeScale);const m=new X(c);e.cartesianModelMatrix=d,e.cartesianOrigin=m;const _=it.WGS84.cartesianToCartographic(m,new X),y=it.WGS84.eastNorthUpToFixedFrame(m).invert();e.cartographicModelMatrix=y.multiplyRight(d),e.cartographicOrigin=_;const w=dI(e);w&&(e.cartesianModelMatrix=new we(d).multiplyRight(w.matrix),e.cartographicModelMatrix.multiplyRight(w.matrix),w.matrix=we.IDENTITY),e.coordinateSystem||(e.modelMatrix=e.cartographicModelMatrix)}const hI=1e6**2;function dI(r){var m,_;const e=r.gltf;if(!e)return null;const t=typeof e.scene=="number"?e.scene:0,i=(m=e.scenes)==null?void 0:m[t],o=(_=i==null?void 0:i.nodes)==null?void 0:_[0];if(!(o!=null&&o.matrix))return null;const c=o.matrix;return c[12]*c[12]+c[13]*c[13]+c[14]*c[14]<=hI?null:o}const lu=new X,Oa=new X,IA=new ir([new _r,new _r,new _r,new _r,new _r,new _r]);function pI(r,e){const{cameraDirection:t,cameraUp:i,height:o}=r,{metersPerUnit:c}=r.distanceScales,d=Gs(r,r.center),m=it.WGS84.eastNorthUpToFixedFrame(d),_=r.unprojectPosition(r.cameraPosition),T=it.WGS84.cartographicToCartesian(_,new X),y=new X(m.transformAsVector(new X(t).scale(c))).normalize(),w=new X(m.transformAsVector(new X(i).scale(c))).normalize();gI(r);const M=r.constructor,{longitude:N,latitude:O,width:F,bearing:W,zoom:j}=r,q=new M({longitude:N,latitude:O,height:o,width:F,bearing:W,zoom:j,pitch:0});return{camera:{position:T,direction:y,up:w},viewport:r,topDownViewport:q,height:o,cullingVolume:IA,frameNumber:e,sseDenominator:1.15}}function mI(r,e,t){if(t===0||r.length<=t)return[r,[]];const i=[],{longitude:o,latitude:c}=e.viewport;for(const[T,y]of r.entries()){const[w,M]=y.header.mbs,N=Math.abs(o-w),O=Math.abs(c-M),F=Math.sqrt(O*O+N*N);i.push([T,F])}const d=i.sort((T,y)=>T[1]-y[1]),m=[];for(let T=0;T<t;T++)m.push(r[d[T][0]]);const _=[];for(let T=t;T<d.length;T++)_.push(r[d[T][0]]);return[m,_]}function gI(r){const e=r.getFrustumPlanes(),t=uu(e.near,r.cameraPosition),i=Gs(r,t),o=Gs(r,r.cameraPosition,Oa);let c=0;IA.planes[c++].fromPointNormal(i,lu.copy(i).subtract(o));for(const d in e){if(d==="near")continue;const m=e[d],_=uu(m,t,Oa),T=Gs(r,_,Oa);IA.planes[c++].fromPointNormal(T,lu.copy(i).subtract(T))}}function uu(r,e,t=new X){const i=r.normal.dot(e);return t.copy(r.normal).scale(r.distance-i).add(e),t}function Gs(r,e,t=new X){const i=r.unprojectPosition(e);return it.WGS84.cartographicToCartesian(i,t)}const bI=6378137,_I=6378137,RA=6356752314245179e-9,Xn=new X;function TI(r,e){if(r instanceof Xi){const{halfAxes:t}=r,i=yI(t);return Math.log2(RA/(i+e[2]))}else if(r instanceof $i){const{radius:t}=r;return Math.log2(RA/(t+e[2]))}else if(r.width&&r.height){const{width:t,height:i}=r,o=Math.log2(bI/t),c=Math.log2(_I/i);return(o+c)/2}return 1}function Yd(r,e,t){it.WGS84.cartographicToCartesian([r.xmax,r.ymax,r.zmax],Xn);const i=Math.sqrt(Math.pow(Xn[0]-t[0],2)+Math.pow(Xn[1]-t[1],2)+Math.pow(Xn[2]-t[2],2));return Math.log2(RA/(i+e[2]))}function vI(r,e,t){const[i,o,c,d]=r;return Yd({xmax:c,ymax:d,zmax:0},e,t)}function yI(r){r.getColumn(0,Xn);const e=r.getColumn(1),t=r.getColumn(2);return Xn.add(e).add(t).len()}const rr={UNLOADED:0,LOADING:1,PROCESSING:2,READY:3,EXPIRED:4,FAILED:5};var yr;(function(r){r[r.ADD=1]="ADD",r[r.REPLACE=2]="REPLACE"})(yr||(yr={}));var Br;(function(r){r.EMPTY="empty",r.SCENEGRAPH="scenegraph",r.POINTCLOUD="pointcloud",r.MESH="mesh"})(Br||(Br={}));var $t;(function(r){r.I3S="I3S",r.TILES3D="TILES3D"})($t||($t={}));var ai;(function(r){r.GEOMETRIC_ERROR="geometricError",r.MAX_SCREEN_THRESHOLD="maxScreenThreshold"})(ai||(ai={}));const SI={USE_OPTIMIZATION:1};function Jd(r){return r!=null}const Lt=new X,zs=new X,wI=new X,EI=new X,hn=new X,fu=new X,hu=new X,du=new X;function Fa(r,e,t){if(lt(r,"3D Tile: boundingVolume must be defined"),r.box)return Zd(r.box,e,t);if(r.region)return MI(r.region);if(r.sphere)return CI(r.sphere,e,t);throw new Error("3D Tile: boundingVolume must contain a sphere, region, or box")}function xI(r,e){if(r.box)return II(e);if(r.region){const[t,i,o,c,d,m]=r.region;return[[xr(t),xr(i),d],[xr(o),xr(c),m]]}if(r.sphere)return RI(e);throw new Error("Unkown boundingVolume type")}function Zd(r,e,t){const i=new X(r[0],r[1],r[2]);e.transform(i,i);let o=[];if(r.length===10){const T=r.slice(3,6),y=new Qs;y.fromArray(r,6);const w=new X([1,0,0]),M=new X([0,1,0]),N=new X([0,0,1]);w.transformByQuaternion(y),w.scale(T[0]),M.transformByQuaternion(y),M.scale(T[1]),N.transformByQuaternion(y),N.scale(T[2]),o=[...w.toArray(),...M.toArray(),...N.toArray()]}else o=[...r.slice(3,6),...r.slice(6,9),...r.slice(9,12)];const c=e.transformAsVector(o.slice(0,3)),d=e.transformAsVector(o.slice(3,6)),m=e.transformAsVector(o.slice(6,9)),_=new rt([c[0],c[1],c[2],d[0],d[1],d[2],m[0],m[1],m[2]]);return Jd(t)?(t.center=i,t.halfAxes=_,t):new Xi(i,_)}function CI(r,e,t){const i=new X(r[0],r[1],r[2]);e.transform(i,i);const o=e.getScale(zs),c=Math.max(Math.max(o[0],o[1]),o[2]),d=r[3]*c;return Jd(t)?(t.center=i,t.radius=d,t):new $i(i,d)}function MI(r){const[e,t,i,o,c,d]=r,m=it.WGS84.cartographicToCartesian([xr(e),xr(o),c],wI),_=it.WGS84.cartographicToCartesian([xr(i),xr(t),d],EI),T=new X().addVectors(m,_).multiplyByScalar(.5);return it.WGS84.cartesianToCartographic(T,hn),it.WGS84.cartographicToCartesian([xr(i),hn[1],hn[2]],fu),it.WGS84.cartographicToCartesian([hn[0],xr(o),hn[2]],hu),it.WGS84.cartographicToCartesian([hn[0],hn[1],d],du),Zd([...T,...fu.subtract(T),...hu.subtract(T),...du.subtract(T)],new we)}function II(r){const e=ep(),{halfAxes:t}=r,i=new X(t.getColumn(0)),o=new X(t.getColumn(1)),c=new X(t.getColumn(2));for(let d=0;d<2;d++){for(let m=0;m<2;m++){for(let _=0;_<2;_++)Lt.copy(r.center),Lt.add(i),Lt.add(o),Lt.add(c),tp(e,Lt),c.negate();o.negate()}i.negate()}return e}function RI(r){const e=ep(),{center:t,radius:i}=r,o=it.WGS84.scaleToGeodeticSurface(t,Lt);let c;o?c=it.WGS84.geodeticSurfaceNormal(o):c=new X(0,0,1);let d=new X(c[2],-c[1],0);d.len()>0?d.normalize():d=new X(0,1,0);const m=d.clone().cross(c);for(const _ of[d,m,c]){zs.copy(_).scale(i);for(let T=0;T<2;T++)Lt.copy(t),Lt.add(zs),tp(e,Lt),zs.negate()}return e}function ep(){return[[1/0,1/0,1/0],[-1/0,-1/0,-1/0]]}function tp(r,e){it.WGS84.cartesianToCartographic(e,Lt),r[0][0]=Math.min(r[0][0],Lt[0]),r[0][1]=Math.min(r[0][1],Lt[1]),r[0][2]=Math.min(r[0][2],Lt[2]),r[1][0]=Math.max(r[1][0],Lt[0]),r[1][1]=Math.max(r[1][1],Lt[1]),r[1][2]=Math.max(r[1][2],Lt[2])}new X;new X;new we;new X;new X;new X;function NI(r,e){const t=r*e;return 1-Math.exp(-(t*t))}function PI(r,e){if(r.dynamicScreenSpaceError&&r.dynamicScreenSpaceErrorComputedDensity){const t=r.dynamicScreenSpaceErrorComputedDensity,i=r.dynamicScreenSpaceErrorFactor;return NI(e,t)*i}return 0}function LI(r,e,t){const i=r.tileset,o=r.parent&&r.parent.lodMetricValue||r.lodMetricValue,c=t?o:r.lodMetricValue;if(c===0)return 0;const d=Math.max(r._distanceToCamera,1e-7),{height:m,sseDenominator:_}=e,{viewDistanceScale:T}=i.options;let y=c*m*(T||1)/(d*_);return y-=PI(i,d),y}const Ba=new X,pu=new X,Xr=new X,mu=new X,kI=new X,Da=new we,gu=new we;function OI(r,e){if(r.lodMetricValue===0||isNaN(r.lodMetricValue))return"DIG";const t=2*rp(r,e);return t<2?"OUT":!r.header.children||t<=r.lodMetricValue?"DRAW":r.header.children?"DIG":"OUT"}function rp(r,e){const{topDownViewport:t}=e,i=r.header.mbs[1],o=r.header.mbs[0],c=r.header.mbs[2],d=r.header.mbs[3],m=[...r.boundingVolume.center],_=t.unprojectPosition(t.cameraPosition);it.WGS84.cartographicToCartesian(_,Ba),pu.copy(Ba).subtract(m).normalize(),it.WGS84.eastNorthUpToFixedFrame(m,Da),gu.copy(Da).invert(),Xr.copy(Ba).transform(gu);const T=Math.sqrt(Xr[0]*Xr[0]+Xr[1]*Xr[1]),y=T*T/Xr[2];mu.copy([Xr[0],Xr[1],y]);const M=mu.transform(Da).subtract(m).normalize(),O=pu.cross(M).normalize().scale(d).add(m),F=it.WGS84.cartesianToCartographic(O),W=t.project([o,i,c]),j=t.project(F);return kI.copy(W).subtract(j).magnitude()}function FI(r){return{assetGltfUpAxis:r.asset&&r.asset.gltfUpAxis||"Y"}}class bu{constructor(e=0){B(this,"_map",new Map);B(this,"_array");B(this,"_length");this._array=new Array(e),this._length=e}get length(){return this._length}set length(e){this._length=e,e>this._array.length&&(this._array.length=e)}get values(){return this._array}get(e){return lt(e<this._array.length),this._array[e]}set(e,t){lt(e>=0),e>=this.length&&(this.length=e+1),this._map.has(this._array[e])&&this._map.delete(this._array[e]),this._array[e]=t,this._map.set(t,e)}delete(e){const t=this._map.get(e);t>=0&&(this._array.splice(t,1),this._map.delete(e),this.length--)}peek(){return this._array[this._length-1]}push(e){if(!this._map.has(e)){const t=this.length++;this._array[t]=e,this._map.set(e,t)}}pop(){const e=this._array[--this.length];return this._map.delete(e),e}reserve(e){lt(e>=0),e>this._array.length&&(this._array.length=e)}resize(e){lt(e>=0),this.length=e}trim(e){e==null&&(e=this.length),this._array.length=e}reset(){this._array=[],this._map=new Map,this._length=0}find(e){return this._map.has(e)}}const BI={loadSiblings:!1,skipLevelOfDetail:!1,updateTransforms:!0,onTraversalEnd:()=>{},viewportTraversersMap:{},basePath:""};class Mo{constructor(e){B(this,"options");B(this,"root",null);B(this,"selectedTiles",{});B(this,"requestedTiles",{});B(this,"emptyTiles",{});B(this,"lastUpdate",new Date().getTime());B(this,"updateDebounceTime",1e3);B(this,"_traversalStack",new bu);B(this,"_emptyTraversalStack",new bu);B(this,"_frameNumber",null);this.options={...BI,...e}}traversalFinished(e){return!0}traverse(e,t,i){this.root=e,this.options={...this.options,...i},this.reset(),this.updateTile(e,t),this._frameNumber=t.frameNumber,this.executeTraversal(e,t)}reset(){this.requestedTiles={},this.selectedTiles={},this.emptyTiles={},this._traversalStack.reset(),this._emptyTraversalStack.reset()}executeTraversal(e,t){const i=this._traversalStack;for(e._selectionDepth=1,i.push(e);i.length>0;){const c=i.pop();let d=!1;this.canTraverse(c,t)&&(this.updateChildTiles(c,t),d=this.updateAndPushChildren(c,t,i,c.hasRenderContent?c._selectionDepth+1:c._selectionDepth));const m=c.parent,_=!!(!m||m._shouldRefine),T=!d;c.hasRenderContent?c.refine===yr.ADD?(this.loadTile(c,t),this.selectTile(c,t)):c.refine===yr.REPLACE&&(this.loadTile(c,t),T&&this.selectTile(c,t)):(this.emptyTiles[c.id]=c,this.loadTile(c,t),T&&this.selectTile(c,t)),this.touchTile(c,t),c._shouldRefine=d&&_}const o=new Date().getTime();(this.traversalFinished(t)||o-this.lastUpdate>this.updateDebounceTime)&&(this.lastUpdate=o,this.options.onTraversalEnd(t))}updateChildTiles(e,t){const i=e.children;for(const o of i)this.updateTile(o,t)}updateAndPushChildren(e,t,i,o){const{loadSiblings:c,skipLevelOfDetail:d}=this.options,m=e.children;m.sort(this.compareDistanceToCamera.bind(this));const _=e.refine===yr.REPLACE&&e.hasRenderContent&&!d;let T=!1,y=!0;for(const w of m)if(w._selectionDepth=o,w.isVisibleAndInRequestVolume?(i.find(w)&&i.delete(w),i.push(w),T=!0):(_||c)&&(this.loadTile(w,t),this.touchTile(w,t)),_){let M;if(w._inRequestVolume?w.hasRenderContent?M=w.contentAvailable:M=this.executeEmptyTraversal(w,t):M=!1,y=y&&M,!y)return!1}return T||(y=!1),y}updateTile(e,t){this.updateTileVisibility(e,t)}selectTile(e,t){this.shouldSelectTile(e)&&(e._selectedFrame=t.frameNumber,this.selectedTiles[e.id]=e)}loadTile(e,t){this.shouldLoadTile(e)&&(e._requestedFrame=t.frameNumber,e._priority=e._getPriority(),this.requestedTiles[e.id]=e)}touchTile(e,t){e.tileset._cache.touch(e),e._touchedFrame=t.frameNumber}canTraverse(e,t){return e.hasChildren?e.hasTilesetContent?!e.contentExpired:this.shouldRefine(e,t):!1}shouldLoadTile(e){return e.hasUnloadedContent||e.contentExpired}shouldSelectTile(e){return e.contentAvailable&&!this.options.skipLevelOfDetail}shouldRefine(e,t,i=!1){let o=e._screenSpaceError;return i&&(o=e.getScreenSpaceError(t,!0)),o>e.tileset.memoryAdjustedScreenSpaceError}updateTileVisibility(e,t){const i=[];if(this.options.viewportTraversersMap)for(const o in this.options.viewportTraversersMap)this.options.viewportTraversersMap[o]===t.viewport.id&&i.push(o);else i.push(t.viewport.id);e.updateVisibility(t,i)}compareDistanceToCamera(e,t){return e._distanceToCamera-t._distanceToCamera}anyChildrenVisible(e,t){let i=!1;for(const o of e.children)o.updateVisibility(t),i=i||o.isVisibleAndInRequestVolume;return i}executeEmptyTraversal(e,t){let i=!0;const o=this._emptyTraversalStack;for(o.push(e);o.length>0;){const c=o.pop(),d=!c.hasRenderContent&&this.canTraverse(c,t),m=!c.hasRenderContent&&c.children.length===0;if(!d&&!c.contentAvailable&&!m&&(i=!1),this.updateTile(c,t),c.isVisibleAndInRequestVolume||(this.loadTile(c,t),this.touchTile(c,t)),d){const _=c.children;for(const T of _)o.push(T)}}return e.hasEmptyContent||i}}const _u=new X;function DI(r){return r!=null}class NA{constructor(e,t,i,o=""){B(this,"tileset");B(this,"header");B(this,"id");B(this,"url");B(this,"parent");B(this,"refine");B(this,"type");B(this,"contentUrl");B(this,"lodMetricType","geometricError");B(this,"lodMetricValue",0);B(this,"boundingVolume",null);B(this,"content",null);B(this,"contentState",rr.UNLOADED);B(this,"gpuMemoryUsageInBytes",0);B(this,"children",[]);B(this,"depth",0);B(this,"viewportIds",[]);B(this,"transform",new we);B(this,"extensions",null);B(this,"implicitTiling",null);B(this,"userData",{});B(this,"computedTransform");B(this,"hasEmptyContent",!1);B(this,"hasTilesetContent",!1);B(this,"traverser",new Mo({}));B(this,"_cacheNode",null);B(this,"_frameNumber",null);B(this,"_expireDate",null);B(this,"_expiredContent",null);B(this,"_boundingBox");B(this,"_distanceToCamera",0);B(this,"_screenSpaceError",0);B(this,"_visibilityPlaneMask");B(this,"_visible");B(this,"_contentBoundingVolume");B(this,"_viewerRequestVolume");B(this,"_initialTransform",new we);B(this,"_priority",0);B(this,"_selectedFrame",0);B(this,"_requestedFrame",0);B(this,"_selectionDepth",0);B(this,"_touchedFrame",0);B(this,"_centerZDepth",0);B(this,"_shouldRefine",!1);B(this,"_stackLength",0);B(this,"_visitedFrame",0);B(this,"_inRequestVolume",!1);B(this,"_lodJudge",null);B(this,"tileDrawn",!0);this.header=t,this.tileset=e,this.id=o||t.id,this.url=t.url,this.parent=i,this.refine=this._getRefine(t.refine),this.type=t.type,this.contentUrl=t.contentUrl,this._initializeLodMetric(t),this._initializeTransforms(t),this._initializeBoundingVolumes(t),this._initializeContent(t),this._initializeRenderingState(t),Object.seal(this)}destroy(){this.header=null}isDestroyed(){return this.header===null}get selected(){return this._selectedFrame===this.tileset._frameNumber}get isVisible(){return this._visible}get isVisibleAndInRequestVolume(){return this._visible&&this._inRequestVolume}get hasRenderContent(){return!this.hasEmptyContent&&!this.hasTilesetContent}get hasChildren(){return this.children.length>0||this.header.children&&this.header.children.length>0}get contentReady(){return this.contentState===rr.READY||this.hasEmptyContent}get contentAvailable(){return!!(this.contentReady&&this.hasRenderContent||this._expiredContent&&!this.contentFailed)}get hasUnloadedContent(){return this.hasRenderContent&&this.contentUnloaded}get contentUnloaded(){return this.contentState===rr.UNLOADED}get contentExpired(){return this.contentState===rr.EXPIRED}get contentFailed(){return this.contentState===rr.FAILED}get distanceToCamera(){return this._distanceToCamera}get screenSpaceError(){return this._screenSpaceError}get boundingBox(){return this._boundingBox||(this._boundingBox=xI(this.header.boundingVolume,this.boundingVolume)),this._boundingBox}getScreenSpaceError(e,t){switch(this.tileset.type){case $t.I3S:return rp(this,e);case $t.TILES3D:return LI(this,e,t);default:throw new Error("Unsupported tileset type")}}unselect(){this._selectedFrame=0}_getGpuMemoryUsageInBytes(){return this.content.gpuMemoryUsageInBytes||this.content.byteLength||0}_getPriority(){const e=this.tileset._traverser,{skipLevelOfDetail:t}=e.options,i=this.refine===yr.ADD||t;if(i&&!this.isVisible&&this._visible!==void 0||this.tileset._frameNumber-this._touchedFrame>=1||this.contentState===rr.UNLOADED)return-1;const o=this.parent,d=o&&(!i||this._screenSpaceError===0||o.hasTilesetContent)?o._screenSpaceError:this._screenSpaceError,m=e.root?e.root._screenSpaceError:0;return Math.max(m-d,0)}async loadContent(){if(this.hasEmptyContent)return!1;if(this.content)return!0;this.contentExpired&&(this._expireDate=null),this.contentState=rr.LOADING;const t=await this.tileset._requestScheduler.scheduleRequest(this.id,this._getPriority.bind(this));if(!t)return this.contentState=rr.UNLOADED,!1;try{const i=this.tileset.getTileUrl(this.contentUrl),o=this.tileset.loader,c=this.tileset.loadOptions[o.id]||{},d={...this.tileset.loadOptions,[o.id]:{...c,isTileset:this.type==="json",...this._getLoaderSpecificOptions(o.id)}};return this.content=await Qi(i,o,d),this.tileset.options.contentLoader&&await this.tileset.options.contentLoader(this),this._isTileset()&&this.tileset._initializeTileHeaders(this.content,this),this.contentState=rr.READY,this._onContentLoaded(),!0}catch(i){throw this.contentState=rr.FAILED,i}finally{t.done()}}unloadContent(){return this.content&&this.content.destroy&&this.content.destroy(),this.content=null,this.header.content&&this.header.content.destroy&&this.header.content.destroy(),this.header.content=null,this.contentState=rr.UNLOADED,this.tileDrawn=!0,!0}updateVisibility(e,t){if(this._frameNumber===e.frameNumber)return;const i=this.parent,o=i?i._visibilityPlaneMask:ir.MASK_INDETERMINATE;if(this.tileset._traverser.options.updateTransforms){const c=i?i.computedTransform:this.tileset.modelMatrix;this._updateTransform(c)}this._distanceToCamera=this.distanceToTile(e),this._screenSpaceError=this.getScreenSpaceError(e,!1),this._visibilityPlaneMask=this.visibility(e,o),this._visible=this._visibilityPlaneMask!==ir.MASK_OUTSIDE,this._inRequestVolume=this.insideViewerRequestVolume(e),this._frameNumber=e.frameNumber,this.viewportIds=t}visibility(e,t){const{cullingVolume:i}=e,{boundingVolume:o}=this;return i.computeVisibilityWithPlaneMask(o,t)}contentVisibility(){return!0}distanceToTile(e){const t=this.boundingVolume;return Math.sqrt(Math.max(t.distanceSquaredTo(e.camera.position),0))}cameraSpaceZDepth({camera:e}){const t=this.boundingVolume;return _u.subVectors(t.center,e.position),e.direction.dot(_u)}insideViewerRequestVolume(e){const t=this._viewerRequestVolume;return!t||t.distanceSquaredTo(e.camera.position)<=0}updateExpiration(){if(DI(this._expireDate)&&this.contentReady&&!this.hasEmptyContent){const e=Date.now();Date.lessThan(this._expireDate,e)&&(this.contentState=rr.EXPIRED,this._expiredContent=this.content)}}get extras(){return this.header.extras}_initializeLodMetric(e){"lodMetricType"in e?this.lodMetricType=e.lodMetricType:(this.lodMetricType=this.parent&&this.parent.lodMetricType||this.tileset.lodMetricType,console.warn("3D Tile: Required prop lodMetricType is undefined. Using parent lodMetricType")),"lodMetricValue"in e?this.lodMetricValue=e.lodMetricValue:(this.lodMetricValue=this.parent&&this.parent.lodMetricValue||this.tileset.lodMetricValue,console.warn("3D Tile: Required prop lodMetricValue is undefined. Using parent lodMetricValue"))}_initializeTransforms(e){this.transform=e.transform?new we(e.transform):new we;const t=this.parent,i=this.tileset,o=t&&t.computedTransform?t.computedTransform.clone():i.modelMatrix.clone();this.computedTransform=new we(o).multiplyRight(this.transform);const c=t&&t._initialTransform?t._initialTransform.clone():new we;this._initialTransform=new we(c).multiplyRight(this.transform)}_initializeBoundingVolumes(e){this._contentBoundingVolume=null,this._viewerRequestVolume=null,this._updateBoundingVolume(e)}_initializeContent(e){this.content={_tileset:this.tileset,_tile:this},this.hasEmptyContent=!0,this.contentState=rr.UNLOADED,this.hasTilesetContent=!1,e.contentUrl&&(this.content=null,this.hasEmptyContent=!1)}_initializeRenderingState(e){this.depth=e.level||(this.parent?this.parent.depth+1:0),this._shouldRefine=!1,this._distanceToCamera=0,this._centerZDepth=0,this._screenSpaceError=0,this._visibilityPlaneMask=ir.MASK_INDETERMINATE,this._visible=void 0,this._inRequestVolume=!1,this._stackLength=0,this._selectionDepth=0,this._frameNumber=0,this._touchedFrame=0,this._visitedFrame=0,this._selectedFrame=0,this._requestedFrame=0,this._priority=0}_getRefine(e){return e||this.parent&&this.parent.refine||yr.REPLACE}_isTileset(){return this.contentUrl.indexOf(".json")!==-1}_onContentLoaded(){switch(this.content&&this.content.type){case"vctr":case"geom":this.tileset._traverser.disableSkipLevelOfDetail=!0;break}this._isTileset()?this.hasTilesetContent=!0:this.gpuMemoryUsageInBytes=this._getGpuMemoryUsageInBytes()}_updateBoundingVolume(e){this.boundingVolume=Fa(e.boundingVolume,this.computedTransform,this.boundingVolume);const t=e.content;t&&(t.boundingVolume&&(this._contentBoundingVolume=Fa(t.boundingVolume,this.computedTransform,this._contentBoundingVolume)),e.viewerRequestVolume&&(this._viewerRequestVolume=Fa(e.viewerRequestVolume,this.computedTransform,this._viewerRequestVolume)))}_updateTransform(e=new we){const t=e.clone().multiplyRight(this.transform);t.equals(this.computedTransform)||(this.computedTransform=t,this._updateBoundingVolume(this.header))}_getLoaderSpecificOptions(e){switch(e){case"i3s":return{...this.tileset.options.i3s,_tileOptions:{attributeUrls:this.header.attributeUrls,textureUrl:this.header.textureUrl,textureFormat:this.header.textureFormat,textureLoaderOptions:this.header.textureLoaderOptions,materialDefinition:this.header.materialDefinition,isDracoGeometry:this.header.isDracoGeometry,mbs:this.header.mbs},_tilesetOptions:{store:this.tileset.tileset.store,attributeStorageInfo:this.tileset.tileset.attributeStorageInfo,fields:this.tileset.tileset.fields},isTileHeader:!1};case"3d-tiles":case"cesium-ion":default:return FI(this.tileset.tileset)}}}class UI extends Mo{compareDistanceToCamera(e,t){return t._distanceToCamera===0&&e._distanceToCamera===0?t._centerZDepth-e._centerZDepth:t._distanceToCamera-e._distanceToCamera}updateTileVisibility(e,t){if(super.updateTileVisibility(e,t),!e.isVisibleAndInRequestVolume)return;const i=e.children.length>0;if(e.hasTilesetContent&&i){const d=e.children[0];this.updateTileVisibility(d,t),e._visible=d._visible;return}if(this.meetsScreenSpaceErrorEarly(e,t)){e._visible=!1;return}const o=e.refine===yr.REPLACE,c=e._optimChildrenWithinParent===SI.USE_OPTIMIZATION;if(o&&c&&i&&!this.anyChildrenVisible(e,t)){e._visible=!1;return}}meetsScreenSpaceErrorEarly(e,t){const{parent:i}=e;return!i||i.hasTilesetContent||i.refine!==yr.ADD?!1:!this.shouldRefine(e,t,!0)}}class VI{constructor(){B(this,"frameNumberMap",new Map)}register(e,t){const i=this.frameNumberMap.get(e)||new Map,o=i.get(t)||0;i.set(t,o+1),this.frameNumberMap.set(e,i)}deregister(e,t){const i=this.frameNumberMap.get(e);if(!i)return;const o=i.get(t)||1;i.set(t,o-1)}isZero(e,t){var o;return(((o=this.frameNumberMap.get(e))==null?void 0:o.get(t))||0)===0}}const Ua={REQUESTED:"REQUESTED",COMPLETED:"COMPLETED",ERROR:"ERROR"};class jI{constructor(){B(this,"_statusMap");B(this,"pendingTilesRegister",new VI);this._statusMap={}}add(e,t,i,o){if(!this._statusMap[t]){const{frameNumber:c,viewport:{id:d}}=o;this._statusMap[t]={request:e,callback:i,key:t,frameState:o,status:Ua.REQUESTED},this.pendingTilesRegister.register(d,c),e().then(m=>{this._statusMap[t].status=Ua.COMPLETED;const{frameNumber:_,viewport:{id:T}}=this._statusMap[t].frameState;this.pendingTilesRegister.deregister(T,_),this._statusMap[t].callback(m,o)}).catch(m=>{this._statusMap[t].status=Ua.ERROR;const{frameNumber:_,viewport:{id:T}}=this._statusMap[t].frameState;this.pendingTilesRegister.deregister(T,_),i(m)})}}update(e,t){if(this._statusMap[e]){const{frameNumber:i,viewport:{id:o}}=this._statusMap[e].frameState;this.pendingTilesRegister.deregister(o,i);const{frameNumber:c,viewport:{id:d}}=t;this.pendingTilesRegister.register(d,c),this._statusMap[e].frameState=t}}find(e){return this._statusMap[e]}hasPendingTiles(e,t){return!this.pendingTilesRegister.isZero(e,t)}}class GI extends Mo{constructor(t){super(t);B(this,"_tileManager");this._tileManager=new jI}traversalFinished(t){return!this._tileManager.hasPendingTiles(t.viewport.id,this._frameNumber||0)}shouldRefine(t,i){return t._lodJudge=OI(t,i),t._lodJudge==="DIG"}updateChildTiles(t,i){const o=t.header.children||[],c=t.children,d=t.tileset;for(const m of o){const _=`${m.id}-${i.viewport.id}`,T=c&&c.find(y=>y.id===_);if(T)T&&this.updateTile(T,i);else{let y=()=>this._loadTile(m.id,d);this._tileManager.find(_)?this._tileManager.update(_,i):(d.tileset.nodePages&&(y=()=>d.tileset.nodePagesTile.formTileFromNodePages(m.id)),this._tileManager.add(y,_,M=>this._onTileLoad(M,t,_),i))}}return!1}async _loadTile(t,i){const{loader:o}=i,c=i.getTileUrl(`${i.url}/nodes/${t}`),d={...i.loadOptions,i3s:{...i.loadOptions.i3s,isTileHeader:!0}};return await Qi(c,o,d)}_onTileLoad(t,i,o){const c=new NA(i.tileset,t,i,o);i.children.push(c);const d=this._tileManager.find(c.id).frameState;this.updateTile(c,d),this._frameNumber===d.frameNumber&&(this.traversalFinished(d)||new Date().getTime()-this.lastUpdate>this.updateDebounceTime)&&this.executeTraversal(c,d)}}const zI={description:"",ellipsoid:it.WGS84,modelMatrix:new we,throttleRequests:!0,maxRequests:64,maximumMemoryUsage:32,memoryCacheOverflow:1,maximumTilesSelected:0,debounceTime:0,onTileLoad:()=>{},onTileUnload:()=>{},onTileError:()=>{},onTraversalComplete:r=>r,onUpdate:()=>{},contentLoader:void 0,viewDistanceScale:1,maximumScreenSpaceError:8,memoryAdjustedScreenSpaceError:!1,loadTiles:!0,updateTransforms:!0,viewportTraversersMap:null,loadOptions:{fetch:{}},attributions:[],basePath:"",i3s:{}},Fs="Tiles In Tileset(s)",Va="Tiles In Memory",Tu="Tiles In View",vu="Tiles To Render",yu="Tiles Loaded",ja="Tiles Loading",Su="Tiles Unloaded",wu="Failed Tile Loads",Eu="Points/Vertices",Ga="Tile Memory Use",xu="Maximum Screen Space Error";class HI{constructor(e,t){B(this,"options");B(this,"loadOptions");B(this,"type");B(this,"tileset");B(this,"loader");B(this,"url");B(this,"basePath");B(this,"modelMatrix");B(this,"ellipsoid");B(this,"lodMetricType");B(this,"lodMetricValue");B(this,"refine");B(this,"root",null);B(this,"roots",{});B(this,"asset",{});B(this,"description","");B(this,"properties");B(this,"extras",null);B(this,"attributions",{});B(this,"credits",{});B(this,"stats");B(this,"contentFormats",{draco:!1,meshopt:!1,dds:!1,ktx2:!1});B(this,"cartographicCenter",null);B(this,"cartesianCenter",null);B(this,"zoom",1);B(this,"boundingVolume",null);B(this,"dynamicScreenSpaceErrorComputedDensity",0);B(this,"maximumMemoryUsage",32);B(this,"gpuMemoryUsageInBytes",0);B(this,"memoryAdjustedScreenSpaceError",0);B(this,"_cacheBytes",0);B(this,"_cacheOverflowBytes",0);B(this,"_frameNumber",0);B(this,"_queryParams",{});B(this,"_extensionsUsed",[]);B(this,"_tiles",{});B(this,"_pendingCount",0);B(this,"selectedTiles",[]);B(this,"traverseCounter",0);B(this,"geometricError",0);B(this,"lastUpdatedVieports",null);B(this,"_requestedTiles",[]);B(this,"_emptyTiles",[]);B(this,"frameStateData",{});B(this,"_traverser");B(this,"_cache",new uI);B(this,"_requestScheduler");B(this,"_heldTiles",new Set);B(this,"updatePromise",null);B(this,"tilesetInitializationPromise");this.options={...zI,...t},this.tileset=e,this.loader=e.loader,this.type=e.type,this.url=e.url,this.basePath=e.basePath||pf(this.url),this.modelMatrix=this.options.modelMatrix,this.ellipsoid=this.options.ellipsoid,this.lodMetricType=e.lodMetricType,this.lodMetricValue=e.lodMetricValue,this.refine=e.root.refine,this.loadOptions=this.options.loadOptions||{},this._traverser=this._initializeTraverser(),this._requestScheduler=new _f({throttleRequests:this.options.throttleRequests,maxRequests:this.options.maxRequests}),this.memoryAdjustedScreenSpaceError=this.options.maximumScreenSpaceError,this._cacheBytes=this.options.maximumMemoryUsage*1024*1024,this._cacheOverflowBytes=this.options.memoryCacheOverflow*1024*1024,this.stats=new rf({id:this.url}),this._initializeStats(),this.tilesetInitializationPromise=this._initializeTileSet(e)}destroy(){this._destroy()}isLoaded(){return this._pendingCount===0&&this._frameNumber!==0&&this._requestedTiles.length===0}get tiles(){return Object.values(this._tiles)}get frameNumber(){return this._frameNumber}get queryParams(){return new URLSearchParams(this._queryParams).toString()}setProps(e){this.options={...this.options,...e}}getTileUrl(e){if(e.startsWith("data:"))return e;let i=e;return this.queryParams.length&&(i=`${e}${e.includes("?")?"&":"?"}${this.queryParams}`),i}hasExtension(e){return this._extensionsUsed.indexOf(e)>-1}update(e=null){this.tilesetInitializationPromise.then(()=>{!e&&this.lastUpdatedVieports?e=this.lastUpdatedVieports:this.lastUpdatedVieports=e,e&&this.doUpdate(e)})}async selectTiles(e=null){return await this.tilesetInitializationPromise,e&&(this.lastUpdatedVieports=e),this.updatePromise||(this.updatePromise=new Promise(t=>{setTimeout(()=>{this.lastUpdatedVieports&&this.doUpdate(this.lastUpdatedVieports),t(this._frameNumber),this.updatePromise=null},this.options.debounceTime)})),this.updatePromise}adjustScreenSpaceError(){this.gpuMemoryUsageInBytes<this._cacheBytes?this.memoryAdjustedScreenSpaceError=Math.max(this.memoryAdjustedScreenSpaceError/1.02,this.options.maximumScreenSpaceError):this.gpuMemoryUsageInBytes>this._cacheBytes+this._cacheOverflowBytes&&(this.memoryAdjustedScreenSpaceError*=1.02)}doUpdate(e){if("loadTiles"in this.options&&!this.options.loadTiles||this.traverseCounter>0)return;const t=e instanceof Array?e:[e];this._cache.reset(),this._frameNumber++,this.traverseCounter=t.length;const i=[];for(const o of t){const c=o.id;this._needTraverse(c)?i.push(c):this.traverseCounter--}for(const o of t){const c=o.id;if(this.roots[c]||(this.roots[c]=this._initializeTileHeaders(this.tileset,null)),!i.includes(c))continue;const d=pI(o,this._frameNumber);this._traverser.traverse(this.roots[c],d,this.options)}}_needTraverse(e){let t=e;return this.options.viewportTraversersMap&&(t=this.options.viewportTraversersMap[e]),t===e}_onTraversalEnd(e){const t=e.viewport.id;this.frameStateData[t]||(this.frameStateData[t]={selectedTiles:[],_requestedTiles:[],_emptyTiles:[]});const i=this.frameStateData[t],o=Object.values(this._traverser.selectedTiles),[c,d]=mI(o,e,this.options.maximumTilesSelected);i.selectedTiles=c;for(const m of d)m.unselect();i._requestedTiles=Object.values(this._traverser.requestedTiles),i._emptyTiles=Object.values(this._traverser.emptyTiles),this.traverseCounter--,!(this.traverseCounter>0)&&this._updateTiles()}_updateTiles(){const e=this.selectedTiles;this.selectedTiles=[],this._requestedTiles=[],this._emptyTiles=[];for(const c in this.frameStateData){const d=this.frameStateData[c];this.selectedTiles=this.selectedTiles.concat(d.selectedTiles),this._requestedTiles=this._requestedTiles.concat(d._requestedTiles),this._emptyTiles=this._emptyTiles.concat(d._emptyTiles)}this.selectedTiles=this.options.onTraversalComplete(this.selectedTiles);const t=new Set(this.selectedTiles.map(c=>c.id)),i=this.selectedTiles.some(c=>!c.tileDrawn);let o=0;if(i){for(const c of t)this._heldTiles.add(c);for(const c of this._heldTiles){if(t.has(c))continue;const d=this._tiles[c];d&&d.contentAvailable?(d._selectedFrame=this._frameNumber,this.selectedTiles.push(d),o++):this._heldTiles.delete(c)}}else this._heldTiles=t;o>0&&setTimeout(()=>{this.selectTiles()},0);for(const c of this.selectedTiles)this._tiles[c.id]=c;this._loadTiles(),this._unloadTiles(),this._updateStats(),this._tilesChanged(e,this.selectedTiles)&&this.options.onUpdate()}_tilesChanged(e,t){if(e.length!==t.length)return!0;const i=new Set(e.map(d=>d.id)),o=new Set(t.map(d=>d.id));let c=e.filter(d=>!o.has(d.id)).length>0;return c=c||t.filter(d=>!i.has(d.id)).length>0,c}_loadTiles(){this._requestedTiles.sort((e,t)=>e._priority-t._priority);for(const e of this._requestedTiles)e.contentUnloaded&&this._loadTile(e)}_unloadTiles(){this._cache.unloadTiles(this,(e,t)=>e._unloadTile(t))}_updateStats(){let e=0,t=0;for(const i of this.selectedTiles)i.contentAvailable&&i.content&&(e++,i.content.pointCount?t+=i.content.pointCount:t+=i.content.vertexCount);this.stats.get(Tu).count=this.selectedTiles.length,this.stats.get(vu).count=e,this.stats.get(Eu).count=t,this.stats.get(xu).count=this.memoryAdjustedScreenSpaceError}async _initializeTileSet(e){this.type===$t.I3S&&(this.calculateViewPropsI3S(),e.root=await e.root),this.root=this._initializeTileHeaders(e,null),this.type===$t.TILES3D&&(this._initializeTiles3DTileset(e),this.calculateViewPropsTiles3D()),this.type===$t.I3S&&this._initializeI3STileset()}calculateViewPropsI3S(){var i;const e=this.tileset.fullExtent;if(e){const{xmin:o,xmax:c,ymin:d,ymax:m,zmin:_,zmax:T}=e;this.cartographicCenter=new X(o+(c-o)/2,d+(m-d)/2,_+(T-_)/2),this.cartesianCenter=new X,it.WGS84.cartographicToCartesian(this.cartographicCenter,this.cartesianCenter),this.zoom=Yd(e,this.cartographicCenter,this.cartesianCenter);return}const t=(i=this.tileset.store)==null?void 0:i.extent;if(t){const[o,c,d,m]=t;this.cartographicCenter=new X(o+(d-o)/2,c+(m-c)/2,0),this.cartesianCenter=new X,it.WGS84.cartographicToCartesian(this.cartographicCenter,this.cartesianCenter),this.zoom=vI(t,this.cartographicCenter,this.cartesianCenter);return}console.warn("Extent is not defined in the tileset header"),this.cartographicCenter=new X,this.zoom=1}calculateViewPropsTiles3D(){const e=this.root,{center:t}=e.boundingVolume;if(!t){console.warn("center was not pre-calculated for the root tile"),this.cartographicCenter=new X,this.zoom=1;return}t[0]!==0||t[1]!==0||t[2]!==0?(this.cartographicCenter=new X,it.WGS84.cartesianToCartographic(t,this.cartographicCenter)):this.cartographicCenter=new X(0,0,-it.WGS84.radii[0]),this.cartesianCenter=t,this.zoom=TI(e.boundingVolume,this.cartographicCenter)}_initializeStats(){this.stats.get(Fs),this.stats.get(ja),this.stats.get(Va),this.stats.get(Tu),this.stats.get(vu),this.stats.get(yu),this.stats.get(Su),this.stats.get(wu),this.stats.get(Eu),this.stats.get(Ga,"memory"),this.stats.get(xu)}_initializeTileHeaders(e,t){var o;const i=new NA(this,e.root,t);if(t&&(t.children.push(i),i.depth=t.depth+1),this.type===$t.TILES3D){const c=[];for(c.push(i);c.length>0;){const d=c.pop();this.stats.get(Fs).incrementCount();const m=d.header.children||[];for(const _ of m){const T=new NA(this,_,d);if((o=T.contentUrl)!=null&&o.includes("?session=")){const w=new URL(T.contentUrl).searchParams.get("session");w&&(this._queryParams.session=w)}d.children.push(T),T.depth=d.depth+1,c.push(T)}}}return i}_initializeTraverser(){let e;switch(this.type){case $t.TILES3D:e=UI;break;case $t.I3S:e=GI;break;default:e=Mo}return new e({basePath:this.basePath,onTraversalEnd:this._onTraversalEnd.bind(this)})}_destroyTileHeaders(e){this._destroySubtree(e)}async _loadTile(e){let t;try{this._onStartTileLoading(),t=await e.loadContent()}catch(i){this._onTileLoadError(e,i instanceof Error?i:new Error("load failed"))}finally{this._onEndTileLoading(),this._onTileLoad(e,t)}}_onTileLoadError(e,t){this.stats.get(wu).incrementCount();const i=t.message||t.toString(),o=e.url;console.error(`A 3D tile failed to load: ${e.url} ${i}`),this.options.onTileError(e,i,o)}_onTileLoad(e,t){var i,o;if(t){if(this.type===$t.I3S){const c=((o=(i=this.tileset)==null?void 0:i.nodePagesTile)==null?void 0:o.nodesInNodePages)||0;this.stats.get(Fs).reset(),this.stats.get(Fs).addCount(c)}e&&e.content&&fI(e,e.content),this.updateContentTypes(e),this._addTileToCache(e),this.options.onTileLoad(e)}}updateContentTypes(e){var t;if(this.type===$t.I3S)switch(e.header.isDracoGeometry&&(this.contentFormats.draco=!0),e.header.textureFormat){case"dds":this.contentFormats.dds=!0;break;case"ktx2":this.contentFormats.ktx2=!0;break}else if(this.type===$t.TILES3D){const{extensionsRemoved:i=[]}=((t=e.content)==null?void 0:t.gltf)||{};i.includes("KHR_draco_mesh_compression")&&(this.contentFormats.draco=!0),i.includes("EXT_meshopt_compression")&&(this.contentFormats.meshopt=!0),i.includes("KHR_texture_basisu")&&(this.contentFormats.ktx2=!0)}}_onStartTileLoading(){this._pendingCount++,this.stats.get(ja).incrementCount()}_onEndTileLoading(){this._pendingCount--,this.stats.get(ja).decrementCount()}_addTileToCache(e){this._cache.add(this,e,t=>t._updateCacheStats(e))}_updateCacheStats(e){this.stats.get(yu).incrementCount(),this.stats.get(Va).incrementCount(),this.gpuMemoryUsageInBytes+=e.gpuMemoryUsageInBytes||0,this.stats.get(Ga).count=this.gpuMemoryUsageInBytes,this.options.memoryAdjustedScreenSpaceError&&this.adjustScreenSpaceError()}_unloadTile(e){this.gpuMemoryUsageInBytes-=e.gpuMemoryUsageInBytes||0,this.stats.get(Va).decrementCount(),this.stats.get(Su).incrementCount(),this.stats.get(Ga).count=this.gpuMemoryUsageInBytes,this.options.onTileUnload(e),e.unloadContent()}_destroy(){const e=[];for(this.root&&e.push(this.root);e.length>0;){const t=e.pop();for(const i of t.children)e.push(i);this._destroyTile(t)}this.root=null}_destroySubtree(e){const t=e,i=[];for(i.push(t);i.length>0;){e=i.pop();for(const o of e.children)i.push(o);e!==t&&this._destroyTile(e)}t.children=[]}_destroyTile(e){this._cache.unloadTile(this,e),this._unloadTile(e),e.destroy()}_initializeTiles3DTileset(e){if(e.queryString){const t=new URLSearchParams(e.queryString),i=Object.fromEntries(t.entries());this._queryParams={...this._queryParams,...i}}if(this.asset=e.asset,!this.asset)throw new Error("Tileset must have an asset property.");if(this.asset.version!=="0.0"&&this.asset.version!=="1.0"&&this.asset.version!=="1.1")throw new Error("The tileset must be 3D Tiles version either 0.0 or 1.0 or 1.1.");"tilesetVersion"in this.asset&&(this._queryParams.v=this.asset.tilesetVersion),this.credits={attributions:this.options.attributions||[]},this.description=this.options.description||"",this.properties=e.properties,this.geometricError=e.geometricError,this._extensionsUsed=e.extensionsUsed||[],this.extras=e.extras}_initializeI3STileset(){const e=this.loadOptions.i3s;e&&typeof e=="object"&&"token"in e&&(this._queryParams.token=e.token)}}const np="4.5.1",Oi={COMPOSITE:"cmpt",POINT_CLOUD:"pnts",BATCHED_3D_MODEL:"b3dm",INSTANCED_3D_MODEL:"i3dm",GLTF:"glTF"};function ip(r,e,t){lt(r instanceof ArrayBuffer);const i=new TextDecoder("utf8"),o=new Uint8Array(r,e,t);return i.decode(o)}function qI(r,e=0){const t=new DataView(r);return`${String.fromCharCode(t.getUint8(e+0))}${String.fromCharCode(t.getUint8(e+1))}${String.fromCharCode(t.getUint8(e+2))}${String.fromCharCode(t.getUint8(e+3))}`}const QI={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},_t={BYTE:5120,UNSIGNED_BYTE:5121,SHORT:5122,UNSIGNED_SHORT:5123,INT:5124,UNSIGNED_INT:5125,FLOAT:5126,DOUBLE:5130},Ve={...QI,..._t},za={[_t.DOUBLE]:Float64Array,[_t.FLOAT]:Float32Array,[_t.UNSIGNED_SHORT]:Uint16Array,[_t.UNSIGNED_INT]:Uint32Array,[_t.UNSIGNED_BYTE]:Uint8Array,[_t.BYTE]:Int8Array,[_t.SHORT]:Int16Array,[_t.INT]:Int32Array},WI={DOUBLE:_t.DOUBLE,FLOAT:_t.FLOAT,UNSIGNED_SHORT:_t.UNSIGNED_SHORT,UNSIGNED_INT:_t.UNSIGNED_INT,UNSIGNED_BYTE:_t.UNSIGNED_BYTE,BYTE:_t.BYTE,SHORT:_t.SHORT,INT:_t.INT},Ha="Failed to convert GL type";class nr{static fromTypedArray(e){e=ArrayBuffer.isView(e)?e.constructor:e;for(const t in za)if(za[t]===e)return t;throw new Error(Ha)}static fromName(e){const t=WI[e];if(!t)throw new Error(Ha);return t}static getArrayType(e){switch(e){case _t.UNSIGNED_SHORT_5_6_5:case _t.UNSIGNED_SHORT_4_4_4_4:case _t.UNSIGNED_SHORT_5_5_5_1:return Uint16Array;default:const t=za[e];if(!t)throw new Error(Ha);return t}}static getByteSize(e){return nr.getArrayType(e).BYTES_PER_ELEMENT}static validate(e){return!!nr.getArrayType(e)}static createTypedArray(e,t,i=0,o){o===void 0&&(o=(t.byteLength-i)/nr.getByteSize(e));const c=ArrayBuffer.isView(t)?t.buffer:t,d=nr.getArrayType(e);return new d(c,i,o)}}function KI(r,e){if(!r)throw new Error(`math.gl assertion failed. ${e}`)}function $I(r,e=[0,0,0]){const t=r>>11&31,i=r>>5&63,o=r&31;return e[0]=t<<3,e[1]=i<<2,e[2]=o<<3,e}new GA;new X;new GA;new GA;function Cu(r,e=255){return yb(r,0,e)/e*2-1}function Mu(r){return r<0?-1:1}function XI(r,e,t,i){if(KI(i),r<0||r>t||e<0||e>t)throw new Error(`x and y must be unsigned normalized integers between 0 and ${t}`);if(i.x=Cu(r,t),i.y=Cu(e,t),i.z=1-(Math.abs(i.x)+Math.abs(i.y)),i.z<0){const o=i.x;i.x=(1-Math.abs(i.y))*Mu(o),i.y=(1-Math.abs(o))*Mu(i.y)}return i.normalize()}function YI(r,e,t){return XI(r,e,255,t)}class d0{constructor(e,t){B(this,"json");B(this,"buffer");B(this,"featuresLength",0);B(this,"_cachedTypedArrays",{});this.json=e,this.buffer=t}getExtension(e){return this.json.extensions&&this.json.extensions[e]}hasProperty(e){return!!this.json[e]}getGlobalProperty(e,t=Ve.UNSIGNED_INT,i=1){const o=this.json[e];return o&&Number.isFinite(o.byteOffset)?this._getTypedArrayFromBinary(e,t,i,1,o.byteOffset):o}getPropertyArray(e,t,i){const o=this.json[e];return o&&Number.isFinite(o.byteOffset)?("componentType"in o&&(t=nr.fromName(o.componentType)),this._getTypedArrayFromBinary(e,t,i,this.featuresLength,o.byteOffset)):this._getTypedArrayFromArray(e,t,o)}getProperty(e,t,i,o,c){const d=this.json[e];if(!d)return d;const m=this.getPropertyArray(e,t,i);if(i===1)return m[o];for(let _=0;_<i;++_)c[_]=m[i*o+_];return c}_getTypedArrayFromBinary(e,t,i,o,c){const d=this._cachedTypedArrays;let m=d[e];return m||(m=nr.createTypedArray(t,this.buffer.buffer,this.buffer.byteOffset+c,o*i),d[e]=m),m}_getTypedArrayFromArray(e,t,i){const o=this._cachedTypedArrays;let c=o[e];if(!c){if(ArrayBuffer.isView(i)){const d=i.byteOffset,_=i.byteLength/nr.getByteSize(t);c=nr.createTypedArray(t,i.buffer,d,_)}else if(i instanceof ArrayBuffer)c=nr.createTypedArray(t,i);else{const d=nr.getArrayType(t);c=new d(i)}o[e]=c}return c}}const JI={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},ZI={SCALAR:(r,e)=>r[e],VEC2:(r,e)=>[r[2*e+0],r[2*e+1]],VEC3:(r,e)=>[r[3*e+0],r[3*e+1],r[3*e+2]],VEC4:(r,e)=>[r[4*e+0],r[4*e+1],r[4*e+2],r[4*e+3]],MAT2:(r,e)=>[r[4*e+0],r[4*e+1],r[4*e+2],r[4*e+3]],MAT3:(r,e)=>[r[9*e+0],r[9*e+1],r[9*e+2],r[9*e+3],r[9*e+4],r[9*e+5],r[9*e+6],r[9*e+7],r[9*e+8]],MAT4:(r,e)=>[r[16*e+0],r[16*e+1],r[16*e+2],r[16*e+3],r[16*e+4],r[16*e+5],r[16*e+6],r[16*e+7],r[16*e+8],r[16*e+9],r[16*e+10],r[16*e+11],r[16*e+12],r[16*e+13],r[16*e+14],r[16*e+15]]},e4={SCALAR:(r,e,t)=>{e[t]=r},VEC2:(r,e,t)=>{e[2*t+0]=r[0],e[2*t+1]=r[1]},VEC3:(r,e,t)=>{e[3*t+0]=r[0],e[3*t+1]=r[1],e[3*t+2]=r[2]},VEC4:(r,e,t)=>{e[4*t+0]=r[0],e[4*t+1]=r[1],e[4*t+2]=r[2],e[4*t+3]=r[3]},MAT2:(r,e,t)=>{e[4*t+0]=r[0],e[4*t+1]=r[1],e[4*t+2]=r[2],e[4*t+3]=r[3]},MAT3:(r,e,t)=>{e[9*t+0]=r[0],e[9*t+1]=r[1],e[9*t+2]=r[2],e[9*t+3]=r[3],e[9*t+4]=r[4],e[9*t+5]=r[5],e[9*t+6]=r[6],e[9*t+7]=r[7],e[9*t+8]=r[8],e[9*t+9]=r[9]},MAT4:(r,e,t)=>{e[16*t+0]=r[0],e[16*t+1]=r[1],e[16*t+2]=r[2],e[16*t+3]=r[3],e[16*t+4]=r[4],e[16*t+5]=r[5],e[16*t+6]=r[6],e[16*t+7]=r[7],e[16*t+8]=r[8],e[16*t+9]=r[9],e[16*t+10]=r[10],e[16*t+11]=r[11],e[16*t+12]=r[12],e[16*t+13]=r[13],e[16*t+14]=r[14],e[16*t+15]=r[15]}};function t4(r,e,t,i){const{componentType:o}=r;lt(r.componentType);const c=typeof o=="string"?nr.fromName(o):o,d=JI[r.type],m=ZI[r.type],_=e4[r.type];return t+=r.byteOffset,{values:nr.createTypedArray(c,e,t,d*i),type:c,size:d,unpacker:m,packer:_}}const Cr=r=>r!==void 0;function r4(r,e,t){if(!e)return null;let i=r.getExtension("3DTILES_batch_table_hierarchy");const o=e.HIERARCHY;return o&&(console.warn("3D Tile Parser: HIERARCHY is deprecated. Use 3DTILES_batch_table_hierarchy."),e.extensions=e.extensions||{},e.extensions["3DTILES_batch_table_hierarchy"]=o,i=o),i?n4(i,t):null}function n4(r,e){let t,i,o;const c=r.instancesLength,d=r.classes;let m=r.classIds,_=r.parentCounts,T=r.parentIds,y=c;Cr(m.byteOffset)&&(m.componentType=defaultValue(m.componentType,GL.UNSIGNED_SHORT),m.type=AttributeType.SCALAR,o=getBinaryAccessor(m),m=o.createArrayBufferView(e.buffer,e.byteOffset+m.byteOffset,c));let w;if(Cr(_))for(Cr(_.byteOffset)&&(_.componentType=defaultValue(_.componentType,GL.UNSIGNED_SHORT),_.type=AttributeType.SCALAR,o=getBinaryAccessor(_),_=o.createArrayBufferView(e.buffer,e.byteOffset+_.byteOffset,c)),w=new Uint16Array(c),y=0,t=0;t<c;++t)w[t]=y,y+=_[t];Cr(T)&&Cr(T.byteOffset)&&(T.componentType=defaultValue(T.componentType,GL.UNSIGNED_SHORT),T.type=AttributeType.SCALAR,o=getBinaryAccessor(T),T=o.createArrayBufferView(e.buffer,e.byteOffset+T.byteOffset,y));const M=d.length;for(t=0;t<M;++t){const W=d[t].length,j=d[t].instances,q=getBinaryProperties(W,j,e);d[t].instances=combine(q,j)}const N=new Array(M).fill(0),O=new Uint16Array(c);for(t=0;t<c;++t)i=m[t],O[t]=N[i],++N[i];const F={classes:d,classIds:m,classIndexes:O,parentCounts:_,parentIndexes:w,parentIds:T};return o4(F),F}function Fi(r,e,t){if(!r)return;const i=r.parentCounts;return r.parentIds?t(r,e):i>0?i4(r,e,t):s4(r,e,t)}function i4(r,e,t){const i=r.classIds,o=r.parentCounts,c=r.parentIds,d=r.parentIndexes,m=i.length,_=scratchVisited;_.length=Math.max(_.length,m);const T=++marker,y=scratchStack;for(y.length=0,y.push(e);y.length>0;){if(e=y.pop(),_[e]===T)continue;_[e]=T;const w=t(r,e);if(Cr(w))return w;const M=o[e],N=d[e];for(let O=0;O<M;++O){const F=c[N+O];F!==e&&y.push(F)}}return null}function s4(r,e,t){let i=!0;for(;i;){const o=t(r,e);if(Cr(o))return o;const c=r.parentIds[e];i=c!==e,e=c}throw new Error("traverseHierarchySingleParent")}function o4(r){const t=r.classIds.length;for(let i=0;i<t;++i)sp(r,i,stack)}function sp(r,e,t){const i=r.parentCounts,o=r.parentIds,c=r.parentIndexes,m=r.classIds.length;if(!Cr(o))return;assert(e<m,`Parent index ${e} exceeds the total number of instances: ${m}`),assert(t.indexOf(e)===-1,"Circular dependency detected in the batch table hierarchy."),t.push(e);const _=Cr(i)?i[e]:1,T=Cr(i)?c[e]:e;for(let y=0;y<_;++y){const w=o[T+y];w!==e&&sp(r,w,t)}t.pop(e)}function Kt(r){return r!=null}const Bs=(r,e)=>r,a4={HIERARCHY:!0,extensions:!0,extras:!0};class op{constructor(e,t,i,o={}){B(this,"json");B(this,"binary");B(this,"featureCount");B(this,"_extensions");B(this,"_properties");B(this,"_binaryProperties");B(this,"_hierarchy");var c;lt(i>=0),this.json=e||{},this.binary=t,this.featureCount=i,this._extensions=((c=this.json)==null?void 0:c.extensions)||{},this._properties={};for(const d in this.json)a4[d]||(this._properties[d]=this.json[d]);this._binaryProperties=this._initializeBinaryProperties(),o["3DTILES_batch_table_hierarchy"]&&(this._hierarchy=r4(this,this.json,this.binary))}getExtension(e){return this.json&&this.json.extensions&&this.json.extensions[e]}memorySizeInBytes(){return 0}isClass(e,t){if(this._checkBatchId(e),lt(typeof t=="string",t),this._hierarchy){const i=Fi(this._hierarchy,e,(o,c)=>{const d=o.classIds[c];return o.classes[d].name===t});return Kt(i)}return!1}isExactClass(e,t){return lt(typeof t=="string",t),this.getExactClassName(e)===t}getExactClassName(e){if(this._checkBatchId(e),this._hierarchy){const t=this._hierarchy.classIds[e];return this._hierarchy.classes[t].name}}hasProperty(e,t){return this._checkBatchId(e),lt(typeof t=="string",t),Kt(this._properties[t])||this._hasPropertyInHierarchy(e,t)}getPropertyNames(e,t){this._checkBatchId(e),t=Kt(t)?t:[],t.length=0;const i=Object.keys(this._properties);return t.push(...i),this._hierarchy&&this._getPropertyNamesInHierarchy(e,t),t}getProperty(e,t){if(this._checkBatchId(e),lt(typeof t=="string",t),this._binaryProperties){const o=this._binaryProperties[t];if(Kt(o))return this._getBinaryProperty(o,e)}const i=this._properties[t];if(Kt(i))return Bs(i[e]);if(this._hierarchy){const o=this._getHierarchyProperty(e,t);if(Kt(o))return o}}setProperty(e,t,i){const o=this.featureCount;if(this._checkBatchId(e),lt(typeof t=="string",t),this._binaryProperties){const d=this._binaryProperties[t];if(d){this._setBinaryProperty(d,e,i);return}}if(this._hierarchy&&this._setHierarchyProperty(this,e,t,i))return;let c=this._properties[t];Kt(c)||(this._properties[t]=new Array(o),c=this._properties[t]),c[e]=Bs(i)}_checkBatchId(e){if(!(e>=0&&e<this.featureCount))throw new Error("batchId not in range [0, featureCount - 1].")}_getBinaryProperty(e,t){return e.unpack(e.typedArray,t)}_setBinaryProperty(e,t,i){e.pack(i,e.typedArray,t)}_initializeBinaryProperties(){let e=null;for(const t in this._properties){const i=this._properties[t],o=this._initializeBinaryProperty(t,i);o&&(e=e||{},e[t]=o)}return e}_initializeBinaryProperty(e,t){if("byteOffset"in t){const i=t;lt(this.binary,`Property ${e} requires a batch table binary.`),lt(i.type,`Property ${e} requires a type.`);const o=t4(i,this.binary.buffer,this.binary.byteOffset|0,this.featureCount);return{typedArray:o.values,componentCount:o.size,unpack:o.unpacker,pack:o.packer}}return null}_hasPropertyInHierarchy(e,t){if(!this._hierarchy)return!1;const i=Fi(this._hierarchy,e,(o,c)=>{const d=o.classIds[c],m=o.classes[d].instances;return Kt(m[t])});return Kt(i)}_getPropertyNamesInHierarchy(e,t){Fi(this._hierarchy,e,(i,o)=>{const c=i.classIds[o],d=i.classes[c].instances;for(const m in d)d.hasOwnProperty(m)&&t.indexOf(m)===-1&&t.push(m)})}_getHierarchyProperty(e,t){return Fi(this._hierarchy,e,(i,o)=>{const c=i.classIds[o],d=i.classes[c],m=i.classIndexes[o],_=d.instances[t];return Kt(_)?Kt(_.typedArray)?this._getBinaryProperty(_,m):Bs(_[m]):null})}_setHierarchyProperty(e,t,i,o){const c=Fi(this._hierarchy,t,(d,m)=>{const _=d.classIds[m],T=d.classes[_],y=d.classIndexes[m],w=T.instances[i];return Kt(w)?(lt(m===t,`Inherited property "${i}" is read-only.`),Kt(w.typedArray)?this._setBinaryProperty(w,y,o):w[y]=Bs(o),!0):!1});return Kt(c)}}const qa=4;function Io(r,e,t=0){const i=new DataView(e);if(r.magic=i.getUint32(t,!0),t+=qa,r.version=i.getUint32(t,!0),t+=qa,r.byteLength=i.getUint32(t,!0),t+=qa,r.version!==1)throw new Error(`3D Tile Version ${r.version} not supported`);return t}const jn=4,Iu="b3dm tile in legacy format.";function p0(r,e,t){const i=new DataView(e);let o;r.header=r.header||{};let c=i.getUint32(t,!0);t+=jn;let d=i.getUint32(t,!0);t+=jn;let m=i.getUint32(t,!0);t+=jn;let _=i.getUint32(t,!0);return t+=jn,m>=570425344?(t-=jn*2,o=c,m=d,_=0,c=0,d=0,console.warn(Iu)):_>=570425344&&(t-=jn,o=m,m=c,_=d,c=0,d=0,console.warn(Iu)),r.header.featureTableJsonByteLength=c,r.header.featureTableBinaryByteLength=d,r.header.batchTableJsonByteLength=m,r.header.batchTableBinaryByteLength=_,r.header.batchLength=o,t}function m0(r,e,t,i){return t=A4(r,e,t),t=c4(r,e,t),t}function A4(r,e,t,i){const{featureTableJsonByteLength:o,featureTableBinaryByteLength:c,batchLength:d}=r.header||{};if(r.featureTableJson={BATCH_LENGTH:d||0},o&&o>0){const m=ip(e,t,o);r.featureTableJson=JSON.parse(m)}return t+=o||0,r.featureTableBinary=new Uint8Array(e,t,c),t+=c||0,t}function c4(r,e,t,i){const{batchTableJsonByteLength:o,batchTableBinaryByteLength:c}=r.header||{};if(o&&o>0){const d=ip(e,t,o);r.batchTableJson=JSON.parse(d),t+=o,c&&c>0&&(r.batchTableBinary=new Uint8Array(e,t,c),r.batchTableBinary=new Uint8Array(r.batchTableBinary),t+=c)}return t}function ap(r,e,t){if(!e&&(!r||!r.batchIds||!t))return null;const{batchIds:i,isRGB565:o,pointCount:c=0}=r;if(i&&t){const d=new Uint8ClampedArray(c*3);for(let m=0;m<c;m++){const _=i[m],y=t.getProperty(_,"dimensions").map(w=>w*255);d[m*3]=y[0],d[m*3+1]=y[1],d[m*3+2]=y[2]}return{type:Ve.UNSIGNED_BYTE,value:d,size:3,normalized:!0}}if(e&&o){const d=new Uint8ClampedArray(c*3);for(let m=0;m<c;m++){const _=$I(e[m]);d[m*3]=_[0],d[m*3+1]=_[1],d[m*3+2]=_[2]}return{type:Ve.UNSIGNED_BYTE,value:d,size:3,normalized:!0}}return e&&e.length===c*3?{type:Ve.UNSIGNED_BYTE,value:e,size:3,normalized:!0}:{type:Ve.UNSIGNED_BYTE,value:e||new Uint8ClampedArray,size:4,normalized:!0}}const Ru=new X;function l4(r,e){if(!e)return null;if(r.isOctEncoded16P){const t=new Float32Array((r.pointsLength||0)*3);for(let i=0;i<(r.pointsLength||0);i++)YI(e[i*2],e[i*2+1],Ru),Ru.toArray(t,i*3);return{type:Ve.FLOAT,size:2,value:t}}return{type:Ve.FLOAT,size:2,value:e}}function u4(r,e,t){return r.isQuantized?t["3d-tiles"]&&t["3d-tiles"].decodeQuantizedPositions?(r.isQuantized=!1,f4(r,e)):{type:Ve.UNSIGNED_SHORT,value:e,size:3,normalized:!0}:e}function f4(r,e){const t=new X,i=new Float32Array(r.pointCount*3);for(let o=0;o<r.pointCount;o++)t.set(e[o*3],e[o*3+1],e[o*3+2]).scale(1/r.quantizedRange).multiply(r.quantizedVolumeScale).add(r.quantizedVolumeOffset).toArray(i,o*3);return i}async function h4(r,e,t,i,o){t=Io(r,e,t),t=p0(r,e,t),t=m0(r,e,t),d4(r);const{featureTable:c,batchTable:d}=p4(r);return await T4(r,c,d,i,o),m4(r,c,i),g4(r,c,d),b4(r,c),t}function d4(r){r.attributes={positions:null,colors:null,normals:null,batchIds:null},r.isQuantized=!1,r.isTranslucent=!1,r.isRGB565=!1,r.isOctEncoded16P=!1}function p4(r){const e=new d0(r.featureTableJson,r.featureTableBinary),t=e.getGlobalProperty("POINTS_LENGTH");if(!Number.isFinite(t))throw new Error("POINTS_LENGTH must be defined");e.featuresLength=t,r.featuresLength=t,r.pointsLength=t,r.pointCount=t,r.rtcCenter=e.getGlobalProperty("RTC_CENTER",Ve.FLOAT,3);const i=_4(r,e);return{featureTable:e,batchTable:i}}function m4(r,e,t){if(r.attributes=r.attributes||{positions:null,colors:null,normals:null,batchIds:null},!r.attributes.positions){if(e.hasProperty("POSITION"))r.attributes.positions=e.getPropertyArray("POSITION",Ve.FLOAT,3);else if(e.hasProperty("POSITION_QUANTIZED")){const i=e.getPropertyArray("POSITION_QUANTIZED",Ve.UNSIGNED_SHORT,3);if(r.isQuantized=!0,r.quantizedRange=65535,r.quantizedVolumeScale=e.getGlobalProperty("QUANTIZED_VOLUME_SCALE",Ve.FLOAT,3),!r.quantizedVolumeScale)throw new Error("QUANTIZED_VOLUME_SCALE must be defined for quantized positions.");if(r.quantizedVolumeOffset=e.getGlobalProperty("QUANTIZED_VOLUME_OFFSET",Ve.FLOAT,3),!r.quantizedVolumeOffset)throw new Error("QUANTIZED_VOLUME_OFFSET must be defined for quantized positions.");r.attributes.positions=u4(r,i,t)}}if(!r.attributes.positions)throw new Error("Either POSITION or POSITION_QUANTIZED must be defined.")}function g4(r,e,t){if(r.attributes=r.attributes||{positions:null,colors:null,normals:null,batchIds:null},!r.attributes.colors){let i=null;e.hasProperty("RGBA")?(i=e.getPropertyArray("RGBA",Ve.UNSIGNED_BYTE,4),r.isTranslucent=!0):e.hasProperty("RGB")?i=e.getPropertyArray("RGB",Ve.UNSIGNED_BYTE,3):e.hasProperty("RGB565")&&(i=e.getPropertyArray("RGB565",Ve.UNSIGNED_SHORT,1),r.isRGB565=!0),r.attributes.colors=ap(r,i,t)}e.hasProperty("CONSTANT_RGBA")&&(r.constantRGBA=e.getGlobalProperty("CONSTANT_RGBA",Ve.UNSIGNED_BYTE,4))}function b4(r,e){if(r.attributes=r.attributes||{positions:null,colors:null,normals:null,batchIds:null},!r.attributes.normals){let t=null;e.hasProperty("NORMAL")?t=e.getPropertyArray("NORMAL",Ve.FLOAT,3):e.hasProperty("NORMAL_OCT16P")&&(t=e.getPropertyArray("NORMAL_OCT16P",Ve.UNSIGNED_BYTE,2),r.isOctEncoded16P=!0),r.attributes.normals=l4(r,t)}}function _4(r,e){let t=null;if(!r.batchIds&&e.hasProperty("BATCH_ID")&&(r.batchIds=e.getPropertyArray("BATCH_ID",Ve.UNSIGNED_SHORT,1),r.batchIds)){const i=e.getGlobalProperty("BATCH_LENGTH");if(!i)throw new Error("Global property: BATCH_LENGTH must be defined when BATCH_ID is defined.");const{batchTableJson:o,batchTableBinary:c}=r;t=new op(o,c,i)}return t}async function T4(r,e,t,i,o){let c,d,m;const _=r.batchTableJson&&r.batchTableJson.extensions&&r.batchTableJson.extensions["3DTILES_draco_point_compression"];_&&(m=_.properties);const T=e.getExtension("3DTILES_draco_point_compression");if(T){d=T.properties;const w=T.byteOffset,M=T.byteLength;if(!d||!Number.isFinite(w)||!M)throw new Error("Draco properties, byteOffset, and byteLength must be defined");c=(r.featureTableBinary||[]).slice(w,w+M),r.hasPositions=Number.isFinite(d.POSITION),r.hasColors=Number.isFinite(d.RGB)||Number.isFinite(d.RGBA),r.hasNormals=Number.isFinite(d.NORMAL),r.hasBatchIds=Number.isFinite(d.BATCH_ID),r.isTranslucent=Number.isFinite(d.RGBA)}if(!c)return!0;const y={buffer:c,properties:{...d,...m},batchTableProperties:m};return await v4(r,y,i,o)}async function v4(r,e,t,i){if(!i)return;const o={...t,draco:{...t==null?void 0:t.draco,extraAttributes:e.batchTableProperties||{}}};delete o["3d-tiles"];const c=await Wi(e.buffer,qd,o,i),d=c.attributes.POSITION&&c.attributes.POSITION.value,m=c.attributes.COLOR_0&&c.attributes.COLOR_0.value,_=c.attributes.NORMAL&&c.attributes.NORMAL.value,T=c.attributes.BATCH_ID&&c.attributes.BATCH_ID.value,y=d&&c.attributes.POSITION.value.quantization,w=_&&c.attributes.NORMAL.value.quantization;if(y){const N=c.POSITION.data.quantization,O=N.range;r.quantizedVolumeScale=new X(O,O,O),r.quantizedVolumeOffset=new X(N.minValues),r.quantizedRange=(1<<N.quantizationBits)-1,r.isQuantizedDraco=!0}w&&(r.octEncodedRange=(1<<c.NORMAL.data.quantization.quantizationBits)-1,r.isOctEncodedDraco=!0);const M={};if(e.batchTableProperties)for(const N of Object.keys(e.batchTableProperties))c.attributes[N]&&c.attributes[N].value&&(M[N.toLowerCase()]=c.attributes[N].value);r.attributes={positions:d,colors:ap(r,m,void 0),normals:_,batchIds:T,...M}}const PA={URI:0,EMBEDDED:1};function Ap(r,e,t,i){r.rotateYtoZ=!0;const o=(r.byteOffset||0)+(r.byteLength||0)-t;if(o===0)throw new Error("glTF byte length must be greater than 0.");return r.gltfUpAxis=i!=null&&i["3d-tiles"]&&i["3d-tiles"].assetGltfUpAxis?i["3d-tiles"].assetGltfUpAxis:"Y",r.gltfArrayBuffer=VA(e,t,o),r.gltfByteOffset=0,r.gltfByteLength=o,t%4===0||console.warn(`${r.type}: embedded glb is not aligned to a 4-byte boundary.`),(r.byteOffset||0)+(r.byteLength||0)}async function cp(r,e,t,i){const o=(t==null?void 0:t["3d-tiles"])||{};if(y4(r,e),o.loadGLTF){if(!i)return;if(r.gltfUrl){const{fetch:c}=i,d=await c(r.gltfUrl,t==null?void 0:t.core);r.gltfArrayBuffer=await d.arrayBuffer(),r.gltfByteOffset=0}if(r.gltfArrayBuffer){const c=await Wi(r.gltfArrayBuffer,qi,t,i);r.gltf=u0(c),r.gpuMemoryUsageInBytes=Rd(r.gltf),delete r.gltfArrayBuffer,delete r.gltfByteOffset,delete r.gltfByteLength}}}function y4(r,e,t){switch(e){case PA.URI:if(r.gltfArrayBuffer){const i=new Uint8Array(r.gltfArrayBuffer,r.gltfByteOffset),c=new TextDecoder().decode(i);r.gltfUrl=c.replace(/[\s\0]+$/,"")}delete r.gltfArrayBuffer,delete r.gltfByteOffset,delete r.gltfByteLength;break;case PA.EMBEDDED:break;default:throw new Error("b3dm: Illegal glTF format field")}}async function S4(r,e,t,i,o){var d;t=w4(r,e,t,i),await cp(r,PA.EMBEDDED,i,o);const c=(d=r==null?void 0:r.gltf)==null?void 0:d.extensions;return c&&c.CESIUM_RTC&&(r.rtcCenter=c.CESIUM_RTC.center),t}function w4(r,e,t,i,o){t=Io(r,e,t),t=p0(r,e,t),t=m0(r,e,t),t=Ap(r,e,t,i);const c=new d0(r.featureTableJson,r.featureTableBinary);return r.rtcCenter=c.getGlobalProperty("RTC_CENTER",Ve.FLOAT,3),t}async function E4(r,e,t,i,o){return t=x4(r,e,t,i),await cp(r,r.gltfFormat||0,i,o),t}function x4(r,e,t,i,o){var T;if(t=Io(r,e,t),r.version!==1)throw new Error(`Instanced 3D Model version ${r.version} is not supported`);t=p0(r,e,t);const c=new DataView(e);if(r.gltfFormat=c.getUint32(t,!0),t+=4,t=m0(r,e,t),t=Ap(r,e,t,i),!((T=r==null?void 0:r.header)!=null&&T.featureTableJsonByteLength)||r.header.featureTableJsonByteLength===0)throw new Error("i3dm parser: featureTableJsonByteLength is zero.");const d=new d0(r.featureTableJson,r.featureTableBinary),m=d.getGlobalProperty("INSTANCES_LENGTH");if(d.featuresLength=m,!Number.isFinite(m))throw new Error("i3dm parser: INSTANCES_LENGTH must be defined");r.eastNorthUp=d.getGlobalProperty("EAST_NORTH_UP"),r.rtcCenter=d.getGlobalProperty("RTC_CENTER",Ve.FLOAT,3);const _=new op(r.batchTableJson,r.batchTableBinary,m);return C4(r,d,_,m),t}function C4(r,e,t,i){const o=new Array(i),c=new X;new X,new X,new X;const d=new rt,m=new Qs,_=new X,T={},y=new we,w=[],M=[],N=[],O=[];for(let F=0;F<i;F++){let W;if(e.hasProperty("POSITION"))W=e.getProperty("POSITION",Ve.FLOAT,3,F,c);else if(e.hasProperty("POSITION_QUANTIZED")){W=e.getProperty("POSITION_QUANTIZED",Ve.UNSIGNED_SHORT,3,F,c);const se=e.getGlobalProperty("QUANTIZED_VOLUME_OFFSET",Ve.FLOAT,3);if(!se)throw new Error("i3dm parser: QUANTIZED_VOLUME_OFFSET must be defined for quantized positions.");const he=e.getGlobalProperty("QUANTIZED_VOLUME_SCALE",Ve.FLOAT,3);if(!he)throw new Error("i3dm parser: QUANTIZED_VOLUME_SCALE must be defined for quantized positions.");const ue=65535;for(let $=0;$<3;$++)W[$]=W[$]/ue*he[$]+se[$]}if(!W)throw new Error("i3dm: POSITION or POSITION_QUANTIZED must be defined for each instance.");if(c.copy(W),T.translation=c,r.normalUp=e.getProperty("NORMAL_UP",Ve.FLOAT,3,F,w),r.normalRight=e.getProperty("NORMAL_RIGHT",Ve.FLOAT,3,F,M),r.normalUp){if(!r.normalRight)throw new Error("i3dm: Custom orientation requires both NORMAL_UP and NORMAL_RIGHT.");r.hasCustomOrientation=!0}else{if(r.octNormalUp=e.getProperty("NORMAL_UP_OCT32P",Ve.UNSIGNED_SHORT,2,F,w),r.octNormalRight=e.getProperty("NORMAL_RIGHT_OCT32P",Ve.UNSIGNED_SHORT,2,F,M),r.octNormalUp)throw r.octNormalRight?new Error("i3dm: oct-encoded orientation not implemented"):new Error("i3dm: oct-encoded orientation requires NORMAL_UP_OCT32P and NORMAL_RIGHT_OCT32P");r.eastNorthUp?(it.WGS84.eastNorthUpToFixedFrame(c,y),y.getRotationMatrix3(d)):d.identity()}m.fromMatrix3(d),T.rotation=m,_.set(1,1,1);const j=e.getProperty("SCALE",Ve.FLOAT,1,F,N);Number.isFinite(j)&&_.multiplyByScalar(j);const q=e.getProperty("SCALE_NON_UNIFORM",Ve.FLOAT,3,F,w);q&&_.scale(q),T.scale=_;let J=e.getProperty("BATCH_ID",Ve.UNSIGNED_SHORT,1,F,O);J===void 0&&(J=F);const Z=new we().fromQuaternion(T.rotation);y.identity(),y.translate(T.translation),y.multiplyRight(Z),y.scale(T.scale);const Y=y.clone();o[F]={modelMatrix:Y,batchId:J}}r.instances=o}async function M4(r,e,t,i,o,c){t=Io(r,e,t);const d=new DataView(e);for(r.tilesLength=d.getUint32(t,!0),t+=4,r.tiles=[];r.tiles.length<r.tilesLength&&(r.byteLength||0)-t>12;){const m={shape:"tile3d"};r.tiles.push(m),t=await c(e,t,i,o,m)}return t}async function I4(r,e,t,i){var o,c;if(r.rotateYtoZ=!0,r.gltfUpAxis=(o=t==null?void 0:t["3d-tiles"])!=null&&o.assetGltfUpAxis?t["3d-tiles"].assetGltfUpAxis:"Y",(c=t==null?void 0:t["3d-tiles"])!=null&&c.loadGLTF){if(!i)return e.byteLength;const d=await Wi(e,qi,t,i);r.gltf=u0(d),r.gpuMemoryUsageInBytes=Rd(r.gltf)}else r.gltfArrayBuffer=e;return e.byteLength}async function lp(r,e=0,t,i,o={shape:"tile3d"}){switch(o.byteOffset=e,o.type=qI(r,e),o.type){case Oi.COMPOSITE:return await M4(o,r,e,t,i,lp);case Oi.BATCHED_3D_MODEL:return await S4(o,r,e,t,i);case Oi.GLTF:return await I4(o,r,t,i);case Oi.INSTANCED_3D_MODEL:return await E4(o,r,e,t,i);case Oi.POINT_CLOUD:return await h4(o,r,e,t,i);default:throw new Error(`3DTileLoader: unknown type ${o.type}`)}}const R4=1952609651,N4=1;async function P4(r,e,t){if(new Uint32Array(r.slice(0,4))[0]!==R4)throw new Error("Wrong subtree file magic number");if(new Uint32Array(r.slice(4,8))[0]!==N4)throw new Error("Wrong subtree file verson, must be 1");const c=Nu(r.slice(8,16)),d=new Uint8Array(r,24,c),_=new TextDecoder("utf8").decode(d),T=JSON.parse(_),y=Nu(r.slice(16,24));let w=new ArrayBuffer(0);if(y&&(w=r.slice(24+c)),await Ds(T,T.tileAvailability,w,t),Array.isArray(T.contentAvailability))for(const M of T.contentAvailability)await Ds(T,M,w,t);else await Ds(T,T.contentAvailability,w,t);return await Ds(T,T.childSubtreeAvailability,w,t),T}async function Ds(r,e,t,i){const o=Number.isFinite(e.bitstream)?e.bitstream:e.bufferView;if(typeof o!="number")return;const c=r.bufferViews[o],d=r.buffers[c.buffer];if(!(i!=null&&i.baseUrl))throw new Error("Url is not provided");if(!i.fetch)throw new Error("fetch is not provided");if(d.uri){const _=`${(i==null?void 0:i.baseUrl)||""}/${d.uri}`,y=await(await i.fetch(_)).arrayBuffer();e.explicitBitstream=new Uint8Array(y,c.byteOffset,c.byteLength);return}const m=r.buffers.slice(0,c.buffer).reduce((_,T)=>_+T.byteLength,0);e.explicitBitstream=new Uint8Array(t.slice(m,m+d.byteLength),c.byteOffset,c.byteLength)}function Nu(r){const e=new DataView(r),t=e.getUint32(0,!0),i=e.getUint32(4,!0);return t+2**32*i}const up={dataType:null,batchType:null,id:"3d-tiles-subtree",name:"3D Tiles Subtree",module:"3d-tiles",version:np,extensions:["subtree"],mimeTypes:["application/octet-stream"],tests:["subtree"],parse:P4,options:{}};/**
 * @license
 * Copyright 2009 The Closure Library Authors
 * Copyright 2020 Daniel Wirtz / The long.js Authors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * SPDX-License-Identifier: Apache-2.0
 */var hr=null;try{hr=new WebAssembly.Instance(new WebAssembly.Module(new Uint8Array([0,97,115,109,1,0,0,0,1,13,2,96,0,1,127,96,4,127,127,127,127,1,127,3,7,6,0,1,1,1,1,1,6,6,1,127,1,65,0,11,7,50,6,3,109,117,108,0,1,5,100,105,118,95,115,0,2,5,100,105,118,95,117,0,3,5,114,101,109,95,115,0,4,5,114,101,109,95,117,0,5,8,103,101,116,95,104,105,103,104,0,0,10,191,1,6,4,0,35,0,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,126,34,4,66,32,135,167,36,0,32,4,167,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,127,34,4,66,32,135,167,36,0,32,4,167,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,128,34,4,66,32,135,167,36,0,32,4,167,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,129,34,4,66,32,135,167,36,0,32,4,167,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,130,34,4,66,32,135,167,36,0,32,4,167,11])),{}).exports}catch{}function qe(r,e,t){this.low=r|0,this.high=e|0,this.unsigned=!!t}qe.prototype.__isLong__;Object.defineProperty(qe.prototype,"__isLong__",{value:!0});function Ot(r){return(r&&r.__isLong__)===!0}function Pu(r){var e=Math.clz32(r&-r);return r?31-e:e}qe.isLong=Ot;var Lu={},ku={};function In(r,e){var t,i,o;return e?(r>>>=0,(o=0<=r&&r<256)&&(i=ku[r],i)?i:(t=je(r,0,!0),o&&(ku[r]=t),t)):(r|=0,(o=-128<=r&&r<128)&&(i=Lu[r],i)?i:(t=je(r,r<0?-1:0,!1),o&&(Lu[r]=t),t))}qe.fromInt=In;function dr(r,e){if(isNaN(r))return e?Dr:Tr;if(e){if(r<0)return Dr;if(r>=fp)return pp}else{if(r<=-Fu)return Yt;if(r+1>=Fu)return dp}return r<0?dr(-r,e).neg():je(r%Ai|0,r/Ai|0,e)}qe.fromNumber=dr;function je(r,e,t){return new qe(r,e,t)}qe.fromBits=je;var Ao=Math.pow;function g0(r,e,t){if(r.length===0)throw Error("empty string");if(typeof e=="number"?(t=e,e=!1):e=!!e,r==="NaN"||r==="Infinity"||r==="+Infinity"||r==="-Infinity")return e?Dr:Tr;if(t=t||10,t<2||36<t)throw RangeError("radix");var i;if((i=r.indexOf("-"))>0)throw Error("interior hyphen");if(i===0)return g0(r.substring(1),e,t).neg();for(var o=dr(Ao(t,8)),c=Tr,d=0;d<r.length;d+=8){var m=Math.min(8,r.length-d),_=parseInt(r.substring(d,d+m),t);if(m<8){var T=dr(Ao(t,m));c=c.mul(T).add(dr(_))}else c=c.mul(o),c=c.add(dr(_))}return c.unsigned=e,c}qe.fromString=g0;function pr(r,e){return typeof r=="number"?dr(r,e):typeof r=="string"?g0(r,e):je(r.low,r.high,typeof e=="boolean"?e:r.unsigned)}qe.fromValue=pr;var Ou=65536,L4=1<<24,Ai=Ou*Ou,fp=Ai*Ai,Fu=fp/2,Bu=In(L4),Tr=In(0);qe.ZERO=Tr;var Dr=In(0,!0);qe.UZERO=Dr;var Yn=In(1);qe.ONE=Yn;var hp=In(1,!0);qe.UONE=hp;var LA=In(-1);qe.NEG_ONE=LA;var dp=je(-1,2147483647,!1);qe.MAX_VALUE=dp;var pp=je(-1,-1,!0);qe.MAX_UNSIGNED_VALUE=pp;var Yt=je(0,-2147483648,!1);qe.MIN_VALUE=Yt;var me=qe.prototype;me.toInt=function(){return this.unsigned?this.low>>>0:this.low};me.toNumber=function(){return this.unsigned?(this.high>>>0)*Ai+(this.low>>>0):this.high*Ai+(this.low>>>0)};me.toString=function(e){if(e=e||10,e<2||36<e)throw RangeError("radix");if(this.isZero())return"0";if(this.isNegative())if(this.eq(Yt)){var t=dr(e),i=this.div(t),o=i.mul(t).sub(this);return i.toString(e)+o.toInt().toString(e)}else return"-"+this.neg().toString(e);for(var c=dr(Ao(e,6),this.unsigned),d=this,m="";;){var _=d.div(c),T=d.sub(_.mul(c)).toInt()>>>0,y=T.toString(e);if(d=_,d.isZero())return y+m;for(;y.length<6;)y="0"+y;m=""+y+m}};me.getHighBits=function(){return this.high};me.getHighBitsUnsigned=function(){return this.high>>>0};me.getLowBits=function(){return this.low};me.getLowBitsUnsigned=function(){return this.low>>>0};me.getNumBitsAbs=function(){if(this.isNegative())return this.eq(Yt)?64:this.neg().getNumBitsAbs();for(var e=this.high!=0?this.high:this.low,t=31;t>0&&(e&1<<t)==0;t--);return this.high!=0?t+33:t+1};me.isSafeInteger=function(){var e=this.high>>21;return e?this.unsigned?!1:e===-1&&!(this.low===0&&this.high===-2097152):!0};me.isZero=function(){return this.high===0&&this.low===0};me.eqz=me.isZero;me.isNegative=function(){return!this.unsigned&&this.high<0};me.isPositive=function(){return this.unsigned||this.high>=0};me.isOdd=function(){return(this.low&1)===1};me.isEven=function(){return(this.low&1)===0};me.equals=function(e){return Ot(e)||(e=pr(e)),this.unsigned!==e.unsigned&&this.high>>>31===1&&e.high>>>31===1?!1:this.high===e.high&&this.low===e.low};me.eq=me.equals;me.notEquals=function(e){return!this.eq(e)};me.neq=me.notEquals;me.ne=me.notEquals;me.lessThan=function(e){return this.comp(e)<0};me.lt=me.lessThan;me.lessThanOrEqual=function(e){return this.comp(e)<=0};me.lte=me.lessThanOrEqual;me.le=me.lessThanOrEqual;me.greaterThan=function(e){return this.comp(e)>0};me.gt=me.greaterThan;me.greaterThanOrEqual=function(e){return this.comp(e)>=0};me.gte=me.greaterThanOrEqual;me.ge=me.greaterThanOrEqual;me.compare=function(e){if(Ot(e)||(e=pr(e)),this.eq(e))return 0;var t=this.isNegative(),i=e.isNegative();return t&&!i?-1:!t&&i?1:this.unsigned?e.high>>>0>this.high>>>0||e.high===this.high&&e.low>>>0>this.low>>>0?-1:1:this.sub(e).isNegative()?-1:1};me.comp=me.compare;me.negate=function(){return!this.unsigned&&this.eq(Yt)?Yt:this.not().add(Yn)};me.neg=me.negate;me.add=function(e){Ot(e)||(e=pr(e));var t=this.high>>>16,i=this.high&65535,o=this.low>>>16,c=this.low&65535,d=e.high>>>16,m=e.high&65535,_=e.low>>>16,T=e.low&65535,y=0,w=0,M=0,N=0;return N+=c+T,M+=N>>>16,N&=65535,M+=o+_,w+=M>>>16,M&=65535,w+=i+m,y+=w>>>16,w&=65535,y+=t+d,y&=65535,je(M<<16|N,y<<16|w,this.unsigned)};me.subtract=function(e){return Ot(e)||(e=pr(e)),this.add(e.neg())};me.sub=me.subtract;me.multiply=function(e){if(this.isZero())return this;if(Ot(e)||(e=pr(e)),hr){var t=hr.mul(this.low,this.high,e.low,e.high);return je(t,hr.get_high(),this.unsigned)}if(e.isZero())return this.unsigned?Dr:Tr;if(this.eq(Yt))return e.isOdd()?Yt:Tr;if(e.eq(Yt))return this.isOdd()?Yt:Tr;if(this.isNegative())return e.isNegative()?this.neg().mul(e.neg()):this.neg().mul(e).neg();if(e.isNegative())return this.mul(e.neg()).neg();if(this.lt(Bu)&&e.lt(Bu))return dr(this.toNumber()*e.toNumber(),this.unsigned);var i=this.high>>>16,o=this.high&65535,c=this.low>>>16,d=this.low&65535,m=e.high>>>16,_=e.high&65535,T=e.low>>>16,y=e.low&65535,w=0,M=0,N=0,O=0;return O+=d*y,N+=O>>>16,O&=65535,N+=c*y,M+=N>>>16,N&=65535,N+=d*T,M+=N>>>16,N&=65535,M+=o*y,w+=M>>>16,M&=65535,M+=c*T,w+=M>>>16,M&=65535,M+=d*_,w+=M>>>16,M&=65535,w+=i*y+o*T+c*_+d*m,w&=65535,je(N<<16|O,w<<16|M,this.unsigned)};me.mul=me.multiply;me.divide=function(e){if(Ot(e)||(e=pr(e)),e.isZero())throw Error("division by zero");if(hr){if(!this.unsigned&&this.high===-2147483648&&e.low===-1&&e.high===-1)return this;var t=(this.unsigned?hr.div_u:hr.div_s)(this.low,this.high,e.low,e.high);return je(t,hr.get_high(),this.unsigned)}if(this.isZero())return this.unsigned?Dr:Tr;var i,o,c;if(this.unsigned){if(e.unsigned||(e=e.toUnsigned()),e.gt(this))return Dr;if(e.gt(this.shru(1)))return hp;c=Dr}else{if(this.eq(Yt)){if(e.eq(Yn)||e.eq(LA))return Yt;if(e.eq(Yt))return Yn;var d=this.shr(1);return i=d.div(e).shl(1),i.eq(Tr)?e.isNegative()?Yn:LA:(o=this.sub(e.mul(i)),c=i.add(o.div(e)),c)}else if(e.eq(Yt))return this.unsigned?Dr:Tr;if(this.isNegative())return e.isNegative()?this.neg().div(e.neg()):this.neg().div(e).neg();if(e.isNegative())return this.div(e.neg()).neg();c=Tr}for(o=this;o.gte(e);){i=Math.max(1,Math.floor(o.toNumber()/e.toNumber()));for(var m=Math.ceil(Math.log(i)/Math.LN2),_=m<=48?1:Ao(2,m-48),T=dr(i),y=T.mul(e);y.isNegative()||y.gt(o);)i-=_,T=dr(i,this.unsigned),y=T.mul(e);T.isZero()&&(T=Yn),c=c.add(T),o=o.sub(y)}return c};me.div=me.divide;me.modulo=function(e){if(Ot(e)||(e=pr(e)),hr){var t=(this.unsigned?hr.rem_u:hr.rem_s)(this.low,this.high,e.low,e.high);return je(t,hr.get_high(),this.unsigned)}return this.sub(this.div(e).mul(e))};me.mod=me.modulo;me.rem=me.modulo;me.not=function(){return je(~this.low,~this.high,this.unsigned)};me.countLeadingZeros=function(){return this.high?Math.clz32(this.high):Math.clz32(this.low)+32};me.clz=me.countLeadingZeros;me.countTrailingZeros=function(){return this.low?Pu(this.low):Pu(this.high)+32};me.ctz=me.countTrailingZeros;me.and=function(e){return Ot(e)||(e=pr(e)),je(this.low&e.low,this.high&e.high,this.unsigned)};me.or=function(e){return Ot(e)||(e=pr(e)),je(this.low|e.low,this.high|e.high,this.unsigned)};me.xor=function(e){return Ot(e)||(e=pr(e)),je(this.low^e.low,this.high^e.high,this.unsigned)};me.shiftLeft=function(e){return Ot(e)&&(e=e.toInt()),(e&=63)===0?this:e<32?je(this.low<<e,this.high<<e|this.low>>>32-e,this.unsigned):je(0,this.low<<e-32,this.unsigned)};me.shl=me.shiftLeft;me.shiftRight=function(e){return Ot(e)&&(e=e.toInt()),(e&=63)===0?this:e<32?je(this.low>>>e|this.high<<32-e,this.high>>e,this.unsigned):je(this.high>>e-32,this.high>=0?0:-1,this.unsigned)};me.shr=me.shiftRight;me.shiftRightUnsigned=function(e){return Ot(e)&&(e=e.toInt()),(e&=63)===0?this:e<32?je(this.low>>>e|this.high<<32-e,this.high>>>e,this.unsigned):e===32?je(this.high,0,this.unsigned):je(this.high>>>e-32,0,this.unsigned)};me.shru=me.shiftRightUnsigned;me.shr_u=me.shiftRightUnsigned;me.rotateLeft=function(e){var t;return Ot(e)&&(e=e.toInt()),(e&=63)===0?this:e===32?je(this.high,this.low,this.unsigned):e<32?(t=32-e,je(this.low<<e|this.high>>>t,this.high<<e|this.low>>>t,this.unsigned)):(e-=32,t=32-e,je(this.high<<e|this.low>>>t,this.low<<e|this.high>>>t,this.unsigned))};me.rotl=me.rotateLeft;me.rotateRight=function(e){var t;return Ot(e)&&(e=e.toInt()),(e&=63)===0?this:e===32?je(this.high,this.low,this.unsigned):e<32?(t=32-e,je(this.high<<t|this.low>>>e,this.low<<t|this.high>>>e,this.unsigned)):(e-=32,t=32-e,je(this.low<<t|this.high>>>e,this.high<<t|this.low>>>e,this.unsigned))};me.rotr=me.rotateRight;me.toSigned=function(){return this.unsigned?je(this.low,this.high,!1):this};me.toUnsigned=function(){return this.unsigned?this:je(this.low,this.high,!0)};me.toBytes=function(e){return e?this.toBytesLE():this.toBytesBE()};me.toBytesLE=function(){var e=this.high,t=this.low;return[t&255,t>>>8&255,t>>>16&255,t>>>24,e&255,e>>>8&255,e>>>16&255,e>>>24]};me.toBytesBE=function(){var e=this.high,t=this.low;return[e>>>24,e>>>16&255,e>>>8&255,e&255,t>>>24,t>>>16&255,t>>>8&255,t&255]};qe.fromBytes=function(e,t,i){return i?qe.fromBytesLE(e,t):qe.fromBytesBE(e,t)};qe.fromBytesLE=function(e,t){return new qe(e[0]|e[1]<<8|e[2]<<16|e[3]<<24,e[4]|e[5]<<8|e[6]<<16|e[7]<<24,t)};qe.fromBytesBE=function(e,t){return new qe(e[4]<<24|e[5]<<16|e[6]<<8|e[7],e[0]<<24|e[1]<<16|e[2]<<8|e[3],t)};typeof BigInt=="function"&&(qe.fromBigInt=function(e,t){var i=Number(BigInt.asIntN(32,e)),o=Number(BigInt.asIntN(32,e>>BigInt(32)));return je(i,o,t)},qe.fromValue=function(e,t){return typeof e=="bigint"?qe.fromBigInt(e,t):pr(e,t)},me.toBigInt=function(){var e=BigInt(this.low>>>0),t=BigInt(this.unsigned?this.high>>>0:this.high);return t<<BigInt(32)|e});const k4=16;function mp(r){r==="X"&&(r="");const e=r.padEnd(k4,"0");return qe.fromString(e,!0,16)}function O4(r){if(r.isZero())return"X";let e=r.countTrailingZeros();const t=e%4;e=(e-t)/4;const i=e;e*=4;const c=r.shiftRightUnsigned(e).toString(16).replace(/0+$/,"");return Array(17-i-c.length).join("0")+c}function F4(r,e){const t=B4(r).shiftRightUnsigned(2);return r.add(qe.fromNumber(2*e+1-4).multiply(t))}function B4(r){return r.and(r.not().add(1))}const D4=3,U4=30,V4=2*U4+1,Du=180/Math.PI;function j4(r){if(r.length===0)throw new Error(`Invalid Hilbert quad key ${r}`);const e=r.split("/"),t=parseInt(e[0],10),i=e[1],o=i.length;let c=0;const d=[0,0];for(let m=o-1;m>=0;m--){c=o-m;const _=i[m];let T=0,y=0;_==="1"?y=1:_==="2"?(T=1,y=1):_==="3"&&(T=1);const w=Math.pow(2,c-1);z4(w,d,T,y),d[0]+=w*T,d[1]+=w*y}if(t%2===1){const m=d[0];d[0]=d[1],d[1]=m}return{face:t,ij:d,level:c}}function G4(r){if(r.isZero())return"";let e=r.toString(2);for(;e.length<D4+V4;)e="0"+e;const t=e.lastIndexOf("1"),i=e.substring(0,3),o=e.substring(3,t),c=o.length/2,d=qe.fromString(i,!0,2).toString(10);let m="";if(c!==0)for(m=qe.fromString(o,!0,2).toString(4);m.length<c;)m="0"+m;return`${d}/${m}`}function gp(r,e,t){const i=1<<e;return[(r[0]+t[0])/i,(r[1]+t[1])/i]}function Uu(r){return r>=.5?1/3*(4*r*r-1):1/3*(1-4*(1-r)*(1-r))}function bp(r){return[Uu(r[0]),Uu(r[1])]}function _p(r,[e,t]){switch(r){case 0:return[1,e,t];case 1:return[-e,1,t];case 2:return[-e,-t,1];case 3:return[-1,-t,-e];case 4:return[t,-1,-e];case 5:return[t,e,-1];default:throw new Error("Invalid face")}}function Tp([r,e,t]){const i=Math.atan2(t,Math.sqrt(r*r+e*e));return[Math.atan2(e,r)*Du,i*Du]}function z4(r,e,t,i){if(i===0){t===1&&(e[0]=r-1-e[0],e[1]=r-1-e[1]);const o=e[0];e[0]=e[1],e[1]=o}}function H4(r){const e=gp(r.ij,r.level,[.5,.5]),t=bp(e),i=_p(r.face,t);return Tp(i)}const q4=100;function Vu(r){const{face:e,ij:t,level:i}=r,o=[[0,0],[0,1],[1,1],[1,0],[0,0]],c=Math.max(1,Math.ceil(q4*Math.pow(2,-i))),d=new Float64Array(4*c*2+2);let m=0,_=0;for(let T=0;T<4;T++){const y=o[T].slice(0),w=o[T+1],M=(w[0]-y[0])/c,N=(w[1]-y[1])/c;for(let O=0;O<c;O++){y[0]+=M,y[1]+=N;const F=gp(t,i,y),W=bp(F),j=_p(e,W),q=Tp(j);Math.abs(q[1])>89.999&&(q[0]=_);const J=q[0]-_;q[0]+=J>180?-360:J<-180?360:0,d[m++]=q[0],d[m++]=q[1],_=q[0]}}return d[m++]=d[0],d[m++]=d[1],d}function b0(r){const e=Q4(r);return j4(e)}function Q4(r){if(r.indexOf("/")>0)return r;const e=mp(r);return G4(e)}function W4(r){const e=b0(r);return H4(e)}function K4(r){let e;if(r.face===2||r.face===5){let t=null,i=0;for(let o=0;o<4;o++){const c=`${r.face}/${o}`,d=b0(c),m=Vu(d);(typeof t>"u"||t===null)&&(t=new Float64Array(4*m.length)),t.set(m,i),i+=m.length}e=ju(t)}else{const t=Vu(r);e=ju(t)}return e}function ju(r){if(r.length%2!==0)throw new Error("Invalid corners");const e=[],t=[];for(let i=0;i<r.length;i+=2)e.push(r[i]),t.push(r[i+1]);return e.sort((i,o)=>i-o),t.sort((i,o)=>i-o),{west:e[0],east:e[e.length-1],north:t[t.length-1],south:t[0]}}function $4(r,e){const t=(e==null?void 0:e.minimumHeight)||0,i=(e==null?void 0:e.maximumHeight)||0,o=b0(r),c=K4(o),d=c.west,m=c.south,_=c.east,T=c.north,y=[];return y.push(new X(d,T,t)),y.push(new X(_,T,t)),y.push(new X(_,m,t)),y.push(new X(d,m,t)),y.push(new X(d,T,i)),y.push(new X(_,T,i)),y.push(new X(_,m,i)),y.push(new X(d,m,i)),y}function vp(r){const e=r.token,t={minimumHeight:r.minimumHeight,maximumHeight:r.maximumHeight},i=$4(e,t),o=W4(e),c=o[0],d=o[1],m=it.WGS84.cartographicToCartesian([c,d,t.maximumHeight]),_=new X(m[0],m[1],m[2]);i.push(_);const T=td(i);return[...T.center,...T.halfAxes]}const X4=4,Y4=8,J4={QUADTREE:X4,OCTREE:Y4};function Z4(r,e,t){if(r!=null&&r.box){const i=mp(r.s2VolumeInfo.token),o=F4(i,e),c=O4(o),d={...r.s2VolumeInfo};switch(d.token=c,t){case"OCTREE":const T=r.s2VolumeInfo,y=T.maximumHeight-T.minimumHeight,w=y/2,M=T.minimumHeight+y/2;T.minimumHeight=M-w,T.maximumHeight=M+w;break}return{box:vp(d),s2VolumeInfo:d}}}async function yp(r){const{subtree:e,subtreeData:t={level:0,x:0,y:0,z:0},parentData:i={mortonIndex:0,localLevel:-1,localX:0,localY:0,localZ:0},childIndex:o=0,implicitOptions:c,loaderOptions:d,s2VolumeBox:m}=r,{subdivisionScheme:_,subtreeLevels:T,maximumLevel:y,contentUrlTemplate:w,subtreesUriTemplate:M,basePath:N}=c,O={children:[],lodMetricValue:0,contentUrl:""};if(typeof y!="number"||!Number.isFinite(y))return gf.once(`Missing 'maximumLevel' or 'availableLevels' property. The subtree ${w} won't be loaded...`),O;const F=i.localLevel+1,W=t.level+F;if(W>y)return O;const j=J4[_],q=Math.log2(j),J=o&1,Z=o>>1&1,Y=o>>2&1,se=dn(i.localX,J,1),he=dn(i.localY,Z,1),ue=dn(i.localZ,Y,1),$=dn(t.x,se,F),Q=dn(t.y,he,F),U=dn(t.z,ue,F),be=dn(i.mortonIndex,o,q),ve=F===T&&Qa(e.childSubtreeAvailability,be);let Se,Ie,Le,Be;if(ve){const Ge=`${N}/${M}`,ze=kA(Ge,W,$,Q,U);Se=await Qi(ze,up,d),Be=0,Ie={level:W,x:$,y:Q,z:U},Le={mortonIndex:0,localLevel:0,localX:0,localY:0,localZ:0}}else Se=e,Be=(j**F-1)/(j-1)+be,Ie=t,Le={mortonIndex:be,localLevel:F,localX:se,localY:he,localZ:ue};if(!Qa(Se.tileAvailability,Be))return O;Qa(Se.contentAvailability,Be)&&(O.contentUrl=kA(w,W,$,Q,U));for(let Ge=0;Ge<j;Ge++){const ze=Z4(m,Ge,_),st=await yp({subtree:Se,subtreeData:Ie,parentData:Le,childIndex:Ge,implicitOptions:c,loaderOptions:d,s2VolumeBox:ze});(st.contentUrl||st.children.length)&&O.children.push(st)}return O.contentUrl||O.children.length?eR(O,{level:W,x:$,y:Q,z:U},c,m):O}function Qa(r,e){let t;return Array.isArray(r)?(t=r[0],r.length>1&&gf.once('Not supported extension "3DTILES_multiple_contents" has been detected')):t=r,"constant"in t?!!t.constant:t.explicitBitstream?nR(e,t.explicitBitstream):!1}function eR(r,e,t,i){const{basePath:o,refine:c,getRefine:d,lodMetricType:m,getTileType:_,rootLodMetricValue:T,rootBoundingVolume:y}=t,w=r.contentUrl&&r.contentUrl.replace(`${o}/`,""),M=T/2**e.level,N=i!=null&&i.box?{box:i.box}:y,O=tR(N,e,t.subdivisionScheme);return{children:r.children,contentUrl:r.contentUrl,content:{uri:w},id:r.contentUrl,refine:d(c),type:_(r),lodMetricType:m,lodMetricValue:M,geometricError:M,transform:r.transform,boundingVolume:O}}function tR(r,e,t){if(r.region){const{level:i,x:o,y:c,z:d}=e,[m,_,T,y,w,M]=r.region,N=2**i,O=(T-m)/N,[F,W]=[m+O*o,m+O*(o+1)],j=(y-_)/N,[q,J]=[_+j*c,_+j*(c+1)];let Z,Y;if(t==="OCTREE"){const se=(M-w)/N;[Z,Y]=[w+se*d,w+se*(d+1)]}else[Z,Y]=[w,M];return{region:[F,q,W,J,Z,Y]}}if(r.box)return r;throw new Error(`Unsupported bounding volume type ${JSON.stringify(r)}`)}function dn(r,e,t){return(r<<t)+e}function kA(r,e,t,i,o){const c=rR({level:e,x:t,y:i,z:o});return r.replace(/{level}|{x}|{y}|{z}/gi,d=>c[d])}function rR(r){const e={};for(const t in r)e[`{${t}}`]=r[t];return e}function nR(r,e){const t=Math.floor(r/8),i=r%8;return(e[t]>>i&1)===1}function _0(r,e=""){if(!e)return Br.EMPTY;const i=e.split("?")[0].split(".").pop();switch(i){case"pnts":return Br.POINTCLOUD;case"i3dm":case"b3dm":case"glb":case"gltf":return Br.SCENEGRAPH;default:return i||Br.EMPTY}}function T0(r){switch(r){case"REPLACE":case"replace":return yr.REPLACE;case"ADD":case"add":return yr.ADD;default:return r}}function OA(r,e){if(/^[a-z][0-9a-z+.-]*:/i.test(e)){const i=new URL(r,`${e}/`);return decodeURI(i.toString())}else if(r.startsWith("/"))return r;return Zg(e,r)}function Gu(r,e){var o;if(!r)return null;let t;if(r.content){const c=r.content.uri||((o=r.content)==null?void 0:o.url);typeof c<"u"&&(t=OA(c,e))}return{...r,id:t,contentUrl:t,lodMetricType:ai.GEOMETRIC_ERROR,lodMetricValue:r.geometricError,transformMatrix:r.transform,type:_0(r,t),refine:T0(r.refine)}}async function iR(r,e,t){let i=null;const o=Hu(r.root);o&&r.root?i=await zu(r.root,r,e,o,t):i=Gu(r.root,e);const c=[];for(c.push(i);c.length>0;){const d=c.pop()||{},m=d.children||[],_=[];for(const T of m){const y=Hu(T);let w;y?w=await zu(T,r,e,y,t):w=Gu(T,e),w&&(_.push(w),c.push(w))}d.children=_}return i}async function zu(r,e,t,i,o){var Z,Y,se;const{subdivisionScheme:c,maximumLevel:d,availableLevels:m,subtreeLevels:_,subtrees:{uri:T}}=i,y=kA(T,0,0,0,0),w=OA(y,t),M=await Qi(w,up,o),N=(Z=r.content)==null?void 0:Z.uri,O=N?OA(N,t):"",F=(Y=e==null?void 0:e.root)==null?void 0:Y.refine,W=r.geometricError,j=(se=r.boundingVolume.extensions)==null?void 0:se["3DTILES_bounding_volume_S2"];if(j){const ue={box:vp(j),s2VolumeInfo:j};r.boundingVolume=ue}const q=r.boundingVolume,J={contentUrlTemplate:O,subtreesUriTemplate:T,subdivisionScheme:c,subtreeLevels:_,maximumLevel:Number.isFinite(m)?m-1:d,refine:F,basePath:t,lodMetricType:ai.GEOMETRIC_ERROR,rootLodMetricValue:W,rootBoundingVolume:q,getTileType:_0,getRefine:T0};return await sR(r,t,M,J,o)}async function sR(r,e,t,i,o){if(!r)return null;const{children:c,contentUrl:d}=await yp({subtree:t,implicitOptions:i,loaderOptions:o});let m,_=null;return d&&(m=d,_={uri:d.replace(`${e}/`,"")}),{...r,id:m,contentUrl:m,lodMetricType:ai.GEOMETRIC_ERROR,lodMetricValue:r.geometricError,transformMatrix:r.transform,type:_0(r,m),refine:T0(r.refine),content:_||r.content,children:c}}function Hu(r){var e;return((e=r==null?void 0:r.extensions)==null?void 0:e["3DTILES_implicit_tiling"])||(r==null?void 0:r.implicitTiling)}const Sp={dataType:null,batchType:null,id:"3d-tiles",name:"3D Tiles",module:"3d-tiles",version:np,extensions:["cmpt","pnts","b3dm","i3dm"],mimeTypes:["application/octet-stream"],tests:["cmpt","pnts","b3dm","i3dm"],parse:oR,options:{"3d-tiles":{loadGLTF:!0,decodeQuantizedPositions:!1,isTileset:"auto",assetGltfUpAxis:null}}};async function oR(r,e={},t){const i=e["3d-tiles"]||{};let o;return i.isTileset==="auto"?o=(t==null?void 0:t.url)&&t.url.indexOf(".json")!==-1:o=i.isTileset,o?aR(r,e,t):AR(r,e,t)}async function aR(r,e,t){var _;const i=JSON.parse(new TextDecoder().decode(r)),o=(t==null?void 0:t.url)||"",c=cR(o),d=await iR(i,c,e||{});return{...i,shape:"tileset3d",loader:Sp,url:o,queryString:(t==null?void 0:t.queryString)||"",basePath:c,root:d||i.root,type:$t.TILES3D,lodMetricType:ai.GEOMETRIC_ERROR,lodMetricValue:((_=i.root)==null?void 0:_.geometricError)||0}}async function AR(r,e,t){const i={content:{shape:"tile3d",featureIds:null}};return await lp(r,0,e,t,i.content),i.content}function cR(r){return pf(r)}const qu=[0],lR={getPointColor:{type:"accessor",value:[0,0,0,255]},pointSize:1,data:"",loader:Sp,onTilesetLoad:{type:"function",value:r=>{}},onTileLoad:{type:"function",value:r=>{}},onTileUnload:{type:"function",value:r=>{}},onTileError:{type:"function",value:(r,e,t)=>{}},_getMeshColor:{type:"function",value:r=>[255,255,255]}};class wp extends li{initializeState(){"onTileLoadFail"in this.props&&_n.removed("onTileLoadFail","onTileError")(),this.state={layerMap:{},tileset3d:null,activeViewports:{},lastUpdatedViewports:null}}get isLoaded(){var e,t;return!!((t=(e=this.state)==null?void 0:e.tileset3d)!=null&&t.isLoaded()&&super.isLoaded)}shouldUpdateState({changeFlags:e}){return e.somethingChanged}updateState({props:e,oldProps:t,changeFlags:i}){if(e.data&&e.data!==t.data&&this._loadTileset(e.data),i.viewportChanged){const{activeViewports:o}=this.state;Object.keys(o).length&&(this._updateTileset(o),this.state.lastUpdatedViewports=o,this.state.activeViewports={})}if(i.propsChanged){const{layerMap:o}=this.state;for(const c in o)o[c].needsUpdate=!0}}finalizeState(e){var t;(t=this.state.tileset3d)==null||t.destroy(),this.state.tileset3d=null,this.state.layerMap={},this.state.activeViewports={},this.state.lastUpdatedViewports=null,super.finalizeState(e)}activateViewport(e){const{activeViewports:t,lastUpdatedViewports:i}=this.state;this.internalState.viewport=e,t[e.id]=e;const o=i==null?void 0:i[e.id];(!o||!e.equals(o))&&(this.setChangeFlags({viewportChanged:!0}),this.setNeedsUpdate())}getPickingInfo({info:e,sourceLayer:t}){const i=t&&t.props.tile;return e.picked&&(e.object=i),e.sourceTile=i,e}filterSubLayer({layer:e,viewport:t,cullRect:i,isPicking:o}){var m;const{tile:c}=e.props,{id:d}=t;if(!c.selected||!c.viewportIds.includes(d))return!1;if(o&&i&&((m=c.content)!=null&&m.cartographicOrigin)){const[_,T]=t.project(c.content.cartographicOrigin),y=i.x+i.width/2,w=i.y+i.height/2,M=Math.max(t.width,t.height)/4,N=_-y,O=T-w;if(N*N+O*O>M*M)return!1}return!0}_updateAutoHighlight(e){const t=e.sourceTile,i=this.state.layerMap[t==null?void 0:t.id];i&&i.layer&&i.layer.updateAutoHighlight(e)}async _loadTileset(e){var w,M;const t=this.props.loadOptions||{},i=(w=this.props.loaders)!=null&&w.length?this.props.loaders:this.props.loader,o=Array.isArray(i)?i[0]:i,{tileset:c,...d}=t,m={loadOptions:{...d},...c};let _=e;if("preload"in o&&typeof o.preload=="function"){const N=await o.preload(e,t);N.url&&(_=N.url),N.headers&&(m.loadOptions.core={...m.loadOptions.core,fetch:{...(M=m.loadOptions.core)==null?void 0:M.fetch,headers:N.headers}}),Object.assign(m,N)}const T=await Qi(_,o,m.loadOptions),y=new HI(T,{onTileLoad:this._onTileLoad.bind(this),onTileUnload:this._onTileUnload.bind(this),onTileError:this.props.onTileError,onUpdate:()=>this.setNeedsUpdate(),...m});this.setState({tileset3d:y,layerMap:{}}),this._updateTileset(this.state.activeViewports),this.props.onTilesetLoad(y)}_onTileLoad(e){const{lastUpdatedViewports:t}=this.state;e.tileDrawn=!1,this.props.onTileLoad(e),this._updateTileset(t),this.setNeedsUpdate()}_onTileUnload(e){delete this.state.layerMap[e.id],this.props.onTileUnload(e)}_updateTileset(e){if(!e)return;const{tileset3d:t}=this.state,{timeline:i}=this.context,o=Object.keys(e).length;!i||!o||!t||t.selectTiles(Object.values(e)).then(c=>{this.state.frameNumber!==c&&this.setState({frameNumber:c})})}_getSubLayer(e,t){if(!e.content)return null;switch(e.type){case Br.POINTCLOUD:return this._makePointCloudLayer(e,t);case Br.SCENEGRAPH:return this._make3DModelLayer(e);case Br.MESH:return this._makeSimpleMeshLayer(e,t);default:throw new Error(`Tile3DLayer: Failed to render layer of type ${e.content.type}`)}}_makePointCloudLayer(e,t){const{attributes:i,pointCount:o,constantRGBA:c,cartographicOrigin:d,modelMatrix:m}=e.content,{positions:_,normals:T,colors:y}=i;if(!_)return null;const w=t&&t.props.data||{header:{vertexCount:o},attributes:{POSITION:_,NORMAL:T,COLOR_0:y}},{pointSize:M,getPointColor:N}=this.props,O=this.getSubLayerClass("pointcloud",nb);return new O({pointSize:M},this.getSubLayerProps({id:"pointcloud"}),{id:`${this.id}-pointcloud-${e.id}`,tile:e,data:w,coordinateSystem:Zr.METER_OFFSETS,coordinateOrigin:d,modelMatrix:m,getColor:c||N,_offset:0})}_make3DModelLayer(e){const{gltf:t,instances:i,cartographicOrigin:o,modelMatrix:c}=e.content,d=this.getSubLayerClass("scenegraph",f0);return new d({_lighting:"pbr"},this.getSubLayerProps({id:"scenegraph"}),{id:`${this.id}-scenegraph-${e.id}`,tile:e,data:i||qu,scenegraph:t,coordinateSystem:Zr.METER_OFFSETS,coordinateOrigin:o,modelMatrix:c,getTransformMatrix:m=>m.modelMatrix,getPosition:[0,0,0],_offset:0,onFirstDraw:()=>{e.tileDrawn=!0}})}_makeSimpleMeshLayer(e,t){const i=e.content,{attributes:o,indices:c,modelMatrix:d,cartographicOrigin:m,coordinateSystem:_=Zr.METER_OFFSETS,material:T,featureIds:y}=i,{_getMeshColor:w}=this.props,M=t&&t.props.mesh||new Jn({topology:"triangle-list",attributes:uR(o),indices:c}),N=this.getSubLayerClass("mesh",h0);return new N(this.getSubLayerProps({id:"mesh"}),{id:`${this.id}-mesh-${e.id}`,tile:e,mesh:M,data:qu,getColor:w(e),pbrMaterial:T,modelMatrix:d,coordinateOrigin:m,coordinateSystem:_,featureIds:y,_offset:0})}renderLayers(){const{tileset3d:e,layerMap:t}=this.state;return e?e.tiles.map(i=>{const o=t[i.id]=t[i.id]||{tile:i};let{layer:c}=o;return i.selected&&(c?o.needsUpdate&&(c=this._getSubLayer(i,c),o.needsUpdate=!1):c=this._getSubLayer(i)),o.layer=c,c}).filter(Boolean):null}}wp.defaultProps=lR;wp.layerName="Tile3DLayer";function uR(r){const e={};return e.positions={...r.positions,value:new Float32Array(r.positions.value)},r.normals&&(e.normals=r.normals),r.texCoords&&(e.texCoords=r.texCoords),r.colors&&(e.colors=r.colors),r.uvRegions&&(e.uvRegions=r.uvRegions),e}const fR="4.5.1",Ep={dataType:null,batchType:null,name:"Terrain",id:"terrain",module:"terrain",version:fR,worker:!0,extensions:["png","pngraw","jpg","jpeg","gif","webp","bmp"],mimeTypes:["image/png","image/jpeg","image/gif","image/webp","image/bmp"],options:{terrain:{tesselator:"auto",bounds:void 0,meshMaxError:10,elevationDecoder:{rScaler:1,gScaler:0,bScaler:0,offset:0},skirtHeight:void 0}}};({...Ep});const Qu=[1],Wu=1,Ku=1,co=90,lo=180,hR={...Yi.defaultProps,elevationData:ro,texture:{...ro,optional:!0},meshMaxError:{type:"number",value:4},bounds:{type:"array",value:null,optional:!0,compare:!0},color:{type:"color",value:[255,255,255]},elevationDecoder:{type:"object",value:{rScaler:1,gScaler:0,bScaler:0,offset:0}},workerUrl:"",wireframe:!1,material:!0,loaders:[Ep]};function $u(r){return Array.isArray(r)?r.join(";"):r||""}function dR(r,e,t){const i=(r[2]-r[0])/e*Wu,o=(r[3]-r[1])/e*Wu,c=[r[0]-i,r[1]-o,r[2]+i,r[3]+o];return t?[Math.max(c[0],-lo),Math.max(c[1],-co),Math.min(c[2],lo),Math.min(c[3],co)]:c}function pR(r){return!Number.isFinite(r)||r<=0?Ku:Math.max(r,Ku)}class xp extends li{updateState({props:e,oldProps:t}){const i=e.elevationData!==t.elevationData;if(i){const{elevationData:c}=e,d=c&&(Array.isArray(c)||mR(c));this.setState({isTiled:d})}const o=i||e.meshMaxError!==t.meshMaxError||e.elevationDecoder!==t.elevationDecoder||e.bounds!==t.bounds;if(!this.state.isTiled&&o){const c=this.loadTerrain(e);this.setState({terrain:c})}e.workerUrl&&_n.removed("workerUrl","loadOptions.terrain.workerUrl")()}loadTerrain({elevationData:e,bounds:t,elevationDecoder:i,meshMaxError:o,signal:c}){if(!e)return null;const d=pR(o);let m=this.getLoadOptions();m={...m,terrain:{skirtHeight:this.state.isTiled?d*2:0,...m==null?void 0:m.terrain,bounds:t,meshMaxError:d,elevationDecoder:i}};const{fetch:_}=this.props;return _(e,{propName:"elevationData",layer:this,loadOptions:m,signal:c})}getTiledTerrainData(e){const{elevationData:t,fetch:i,texture:o,elevationDecoder:c,meshMaxError:d}=this.props,{viewport:m}=this.context,_=no(t,e),T=o&&no(o,e),{signal:y}=e;let w=[0,0],M=[0,0];if(m.isGeospatial){const j=e.bbox;w=m.projectFlat([j.west,j.south]),M=m.projectFlat([j.east,j.north])}else{const j=e.bbox;w=[j.left,j.bottom],M=[j.right,j.top]}const N=[w[0],w[1],M[0],M[1]],O=dR(N,this.props.tileSize,m instanceof Ja),F=this.loadTerrain({elevationData:_,bounds:O,elevationDecoder:c,meshMaxError:d,signal:y}),W=T?i(T,{propName:"texture",layer:this,loaders:[],signal:y}).catch(j=>null):Promise.resolve(null);return Promise.all([F,W])}renderSubLayers(e){var O;const t=this.getSubLayerClass("mesh",zi),{color:i,wireframe:o,material:c}=this.props,{data:d}=e;if(!d)return null;const[m,_]=d,{viewport:T}=this.context,y=T instanceof Ja,w=(O=m==null?void 0:m.header)==null?void 0:O.boundingBox,M=w&&w.every(([F,W])=>F>=-lo&&F<=lo&&W>=-co&&W<=co),N=y&&M?Zr.LNGLAT:Zr.CARTESIAN;return new t(e,{data:Qu,mesh:m,texture:_,_instanced:!1,coordinateSystem:N,getPosition:F=>[0,0,0],getColor:i,wireframe:o,material:c})}onViewportLoad(e){if(!e)return;const{zRange:t}=this.state,i=e.map(d=>d.content).filter(Boolean).map(d=>d[0].header.boundingBox.map(_=>_[2]));if(i.length===0)return;const o=Math.min(...i.map(d=>d[0])),c=Math.max(...i.map(d=>d[1]));(!t||o<t[0]||c>t[1])&&this.setState({zRange:[o,c]})}renderLayers(){const{color:e,material:t,elevationData:i,texture:o,wireframe:c,meshMaxError:d,elevationDecoder:m,tileSize:_,maxZoom:T,minZoom:y,extent:w,maxRequests:M,onTileLoad:N,onTileUnload:O,onTileError:F,maxCacheSize:W,maxCacheByteSize:j,refinementStrategy:q,zoomOffset:J}=this.props;if(this.state.isTiled)return new Yi(this.getSubLayerProps({id:"tiles"}),{getTileData:this.getTiledTerrainData.bind(this),renderSubLayers:this.renderSubLayers.bind(this),updateTriggers:{getTileData:{elevationData:$u(i),texture:$u(o),meshMaxError:d,elevationDecoder:m,projectionMode:this.context.viewport.projectionMode,zoomOffset:J}},onViewportLoad:this.onViewportLoad.bind(this),zRange:this.state.zRange||null,tileSize:_,maxZoom:T,minZoom:y,extent:w,maxRequests:M,onTileLoad:N,onTileUnload:O,onTileError:F,maxCacheSize:W,maxCacheByteSize:j,refinementStrategy:q,zoomOffset:J});if(!i)return null;const Z=this.getSubLayerClass("mesh",zi);return new Z(this.getSubLayerProps({id:"mesh"}),{data:Qu,mesh:this.state.terrain,texture:o,_instanced:!1,getPosition:Y=>[0,0,0],getColor:e,material:t,wireframe:c})}}xp.defaultProps=hR;xp.layerName="TerrainLayer";const mR=r=>r.includes("{x}")&&(r.includes("{y}")||r.includes("{-y}")),gR={clipBounds:[0,0,1,1],clipByInstance:void 0},Cp=`
layout(std140) uniform clipUniforms {
  vec4 bounds;
} clip;

bool clip_isInBounds(vec2 position) {
  return position.x >= clip.bounds[0] && position.y >= clip.bounds[1] && position.x < clip.bounds[2] && position.y < clip.bounds[3];
}
`,bR={name:"clip",vs:Cp,uniformTypes:{bounds:"vec4<f32>"}},_R={"vs:#decl":`
out float clip_isVisible;
`,"vs:DECKGL_FILTER_GL_POSITION":`
  clip_isVisible = float(clip_isInBounds(geometry.worldPosition.xy));
`,"fs:#decl":`
in float clip_isVisible;
`,"fs:DECKGL_FILTER_COLOR":`
  if (clip_isVisible < 0.5) discard;
`},TR={name:"clip",fs:Cp,uniformTypes:{bounds:"vec4<f32>"}},vR={"vs:#decl":`
out vec2 clip_commonPosition;
`,"vs:DECKGL_FILTER_GL_POSITION":`
  clip_commonPosition = geometry.position.xy;
`,"fs:#decl":`
in vec2 clip_commonPosition;
`,"fs:DECKGL_FILTER_COLOR":`
  if (!clip_isInBounds(clip_commonPosition)) discard;
`};class v0 extends Nb{getShaders(){let e="instancePositions"in this.getAttributeManager().attributes;return this.props.clipByInstance!==void 0&&(e=!!this.props.clipByInstance),this.state.clipByInstance=e,this.context.device.type==="webgpu"?{}:e?{modules:[bR],inject:_R}:{modules:[TR],inject:vR}}draw(){const{clipBounds:e}=this.props,t={};if(this.state.clipByInstance)t.bounds=e;else{const i=this.projectPosition([e[0],e[1],0]),o=this.projectPosition([e[2],e[3],0]);t.bounds=[Math.min(i[0],o[0]),Math.min(i[1],o[1]),Math.max(i[0],o[0]),Math.max(i[1],o[1])]}this.context.device.type==="webgpu"&&(t.enabled=!0,t.mode=this.state.clipByInstance?"instance":"geometry"),this.setShaderModuleProps({clip:t})}}v0.defaultProps=gR;v0.extensionName="ClipExtension";function yR(r,e,t){switch(r.type){case"Point":return wR(r,e,t);case"LineString":return SR(r,e,t);case"Polygon":return Mp(r,e,t);default:const i=r;throw new Error(`Unsupported geometry type: ${i==null?void 0:i.type}`)}}function Mp(r,e=-1/0,t=1/0){const{positions:i}=r,o=r.polygonIndices.value.filter(_=>_>=e&&_<=t),c=r.primitivePolygonIndices.value.filter(_=>_>=e&&_<=t);if(!(o.length>2)){const _=[];for(let T=0;T<c.length-1;T++){const y=c[T],w=c[T+1],M=uo(i,y,w);_.push(M)}return{type:"Polygon",coordinates:_}}const m=[];for(let _=0;_<o.length-1;_++){const T=o[_],y=o[_+1],w=Mp(r,T,y).coordinates;m.push(w)}return{type:"MultiPolygon",coordinates:m}}function SR(r,e=-1/0,t=1/0){const{positions:i}=r,o=r.pathIndices.value.filter(m=>m>=e&&m<=t);if(!(o.length>2))return{type:"LineString",coordinates:uo(i,o[0],o[1])};const d=[];for(let m=0;m<o.length-1;m++){const _=uo(i,o[m],o[m+1]);d.push(_)}return{type:"MultiLineString",coordinates:d}}function wR(r,e,t){const{positions:i}=r,o=uo(i,e,t);return o.length>1?{type:"MultiPoint",coordinates:o}:{type:"Point",coordinates:o[0]}}function uo(r,e,t){e=e||0,t=t||r.value.length/r.size;const i=[];for(let o=e;o<t;o++){const c=Array();for(let d=o*r.size;d<(o+1)*r.size;d++)c.push(Number(r.value[d]));i.push(c)}return i}function Xu(r,e){const t=e==null?void 0:e.globalFeatureId;return t!==void 0?ER(r,t):xR(r,e==null?void 0:e.type)}function ER(r,e){const t=Ip(r);for(const i of t){let o=0,c=i.featureIds.value[0];for(let d=0;d<i.featureIds.value.length;d++){const m=i.featureIds.value[d];if(m!==c){if(e===i.globalFeatureIds.value[o])return fo(i,o,d);o=d,c=m}}if(e===i.globalFeatureIds.value[o])return fo(i,o,i.featureIds.value.length)}throw new Error(`featureId:${e} not found`)}function xR(r,e){const t=Ip(r);return CR(t)}function Ip(r,e){const t=[];return r.points&&(r.points.type="Point",t.push(r.points)),r.lines&&(r.lines.type="LineString",t.push(r.lines)),r.polygons&&(r.polygons.type="Polygon",t.push(r.polygons)),t}function CR(r){const e=[];for(const t of r){if(t.featureIds.value.length===0)continue;let i=0,o=t.featureIds.value[0];for(let c=0;c<t.featureIds.value.length;c++){const d=t.featureIds.value[c];d!==o&&(e.push(fo(t,i,c)),i=c,o=d)}e.push(fo(t,i,t.featureIds.value.length))}return e}function fo(r,e,t){const i=yR(r,e,t),o=IR(r,e),c=MR(r,e);return{type:"Feature",geometry:i,properties:o,...c}}function MR(r,e=0,t){return r.fields&&r.fields[r.featureIds.value[e]]}function IR(r,e=0,t){const i=Object.assign({},r.properties[r.featureIds.value[e]]);for(const o in r.numericProps)i[o]=r.numericProps[o].value[e];return i}const RR={name:"Mapbox Vector Tile",id:"mvt",module:"mvt",extensions:["mvt","pbf"],mimeTypes:["application/vnd.mapbox-vector-tile","application/x-protobuf"],category:"geometry"},NR="4.5.1",Rp={...RR,dataType:null,batchType:null,version:NR,worker:!0,options:{mvt:{shape:"geojson",coordinates:"local",layerProperty:"layerName",layers:void 0,tileIndex:void 0}}};({...Rp});const PR={Point:Np,MultiPoint:LR,LineString:Pp,MultiLineString:kR,Polygon:Lp,MultiPolygon:OR};function Np([r,e],[t,i],o){const c=qs(t[0],i[0],r),d=qs(t[1],i[1],e);return o.unprojectFlat([c,d])}function y0(r,e,t){return r.map(i=>Np(i,e,t))}function LR(r,e,t){return y0(r,e,t)}function Pp(r,e,t){return y0(r,e,t)}function kR(r,e,t){return r.map(i=>Pp(i,e,t))}function Lp(r,e,t){return r.map(i=>y0(i,e,t))}function OR(r,e,t){return r.map(i=>Lp(i,e,t))}function FR(r,e,t){const i=t.projectFlat([e.west,e.north]),o=t.projectFlat([e.east,e.south]),c=[i,o];return{...r,coordinates:PR[r.type](r.coordinates,c,t)}}const BR=["points","lines","polygons"];function DR(r,e,t,i){for(const o of BR){const c=r[o]&&UR(r[o],e,t,i);if(c>=0)return c}return-1}function UR(r,e,t,i){const o=r.featureIds.value;if(!o.length)return-1;let c=0,d=o[o.length-1]+1;if(i){const _=VR(r,i);if(_)c=_[0],d=_[1]+1;else return-1}let m=-1;if(e in r.numericProps){const _=r.numericProps[e].value.findIndex((T,y)=>T===t&&o[y]>=c&&o[y]<d);return _>=0?r.globalFeatureIds.value[_]:-1}else e?m=Yu(r.properties,_=>_[e]===t,c,d):r.fields&&(m=Yu(r.fields,_=>_.id===t,c,d));return m>=0?jR(r,m):-1}function VR(r,e){if(!r.__layers){const t={},{properties:i}=r;for(let o=0;o<i.length;o++){const{layerName:c}=i[o];c&&(t[c]?t[c][1]=o:t[c]=[o,o])}r.__layers=t}return r.__layers[e]}function jR(r,e){if(!r.__ids){const t=[],i=r.featureIds.value,o=r.globalFeatureIds.value;for(let c=0;c<i.length;c++)t[i[c]]=o[c];r.__ids=t}return r.__ids[e]}function Yu(r,e,t,i){for(let o=t;o<i;o++)if(e(r[o],o))return o;return-1}const Wa=512,GR={...jA.defaultProps,data:ro,onDataLoad:{type:"function",value:null,optional:!0,compare:!1},uniqueIdProperty:"",highlightedFeatureId:null,loaders:[Rp],binary:!0};class kp extends Yi{initializeState(){super.initializeState();const e=this.context.viewport.resolution!==void 0?!1:this.props.binary;this.setState({binary:e,data:null,tileJSON:null,hoveredFeatureId:null,hoveredFeatureLayerName:null})}get isLoaded(){var e;return!!((e=this.state)!=null&&e.data&&super.isLoaded)}updateState({props:e,oldProps:t,context:i,changeFlags:o}){var d;o.dataChanged&&this._updateTileData(),(d=this.state)!=null&&d.data&&(super.updateState({props:e,oldProps:t,context:i,changeFlags:o}),this._setWGS84PropertyForTiles());const{highlightColor:c}=e;c!==t.highlightColor&&Array.isArray(c)&&this.setState({highlightColor:c})}async _updateTileData(){let e=this.props.data,t=null;if(typeof e=="string"&&!g3(e)){const{onDataLoad:i,fetch:o}=this.props;this.setState({data:null,tileJSON:null});try{t=await o(e,{propName:"data",layer:this,loaders:[]})}catch(c){this.raiseError(c,"loading TileJSON"),e=null}i&&i(t,{propName:"data",layer:this})}else e&&typeof e=="object"&&"tilejson"in e&&(t=e);t&&(e=t.tiles),this.setState({data:e,tileJSON:t})}_getTilesetOptions(){const e=super._getTilesetOptions(),t=this.state.tileJSON,{minZoom:i,maxZoom:o}=this.props;return t&&(Number.isFinite(t.minzoom)&&t.minzoom>i&&(e.minZoom=t.minzoom),Number.isFinite(t.maxzoom)&&(!Number.isFinite(o)||t.maxzoom<o)&&(e.maxZoom=t.maxzoom)),e}renderLayers(){var e;return(e=this.state)!=null&&e.data?super.renderLayers():null}getTileData(e){const{data:t,binary:i}=this.state,{index:o,signal:c}=e,d=no(t,e);if(!d)return Promise.reject("Invalid URL");let m=this.getLoadOptions();const{fetch:_}=this.props;return m={...m,core:{...m==null?void 0:m.core,mimeType:"application/x-protobuf"},mvt:{...m==null?void 0:m.mvt,shape:i?"binary":"geojson",coordinates:this.context.viewport.resolution?"wgs84":"local",tileIndex:o}},_(d,{propName:"data",layer:this,loadOptions:m,signal:c})}renderSubLayers(e){const{x:t,y:i,z:o}=e.tile.index,c=Math.pow(2,o),d=Wa/c,m=-d,_=Wa*t/c,T=Wa*(1-i/c),y=new we().scale([d,m,1]);e.autoHighlight=!1,this.context.viewport.resolution||(e.modelMatrix=y,e.coordinateOrigin=[_,T,0],e.coordinateSystem=Zr.CARTESIAN,e.extensions=[...e.extensions||[],new v0]);const w=super.renderSubLayers(e);return this.state.binary&&!(w instanceof jA)&&_n.warn("renderSubLayers() must return GeoJsonLayer when using binary:true")(),w}_updateAutoHighlight(e){const{uniqueIdProperty:t}=this.props,{hoveredFeatureId:i,hoveredFeatureLayerName:o}=this.state,c=e.object;let d=null,m=null;c&&(d=Ka(c,t),m=Ju(c));let{highlightColor:_}=this.props;typeof _=="function"&&(_=_(e)),(i!==d||o!==m)&&this.setState({highlightColor:_,hoveredFeatureId:d,hoveredFeatureLayerName:m})}_isWGS84(){return!!this.context.viewport.resolution}getPickingInfo(e){const t=super.getPickingInfo(e);if(this.state.binary&&t.index!==-1){const{data:i}=e.sourceLayer.props;t.object=Xu(i,{globalFeatureId:t.index})}return t.object&&!this._isWGS84()&&(t.object=ef(t.object,t.tile.bbox,this.context.viewport)),t}getSubLayerPropsByTile(e){return{highlightedObjectIndex:this.getHighlightedObjectIndex(e),highlightColor:this.state.highlightColor}}getHighlightedObjectIndex(e){const{hoveredFeatureId:t,hoveredFeatureLayerName:i,binary:o}=this.state,{uniqueIdProperty:c,highlightedFeatureId:d}=this.props,m=e.content,_=Zu(d);if(!(Zu(t)||_))return-1;const y=_?d:t;return Array.isArray(m)?m.findIndex(w=>{const M=Ka(w,c)===y,N=_||Ju(w)===i;return M&&N}):m&&o?DR(m,c,y,_?"":i):-1}_pickObjects(e){const{deck:t,viewport:i}=this.context,o=i.width,c=i.height,d=i.x,m=i.y,_=[this.id];return t.pickObjects({x:d,y:m,width:o,height:c,layerIds:_,maxObjects:e})}getRenderedFeatures(e=null){const t=this._pickObjects(e),i=new Set,o=[];for(const c of t){const d=Ka(c.object,this.props.uniqueIdProperty);d===void 0?o.push(c.object):i.has(d)||(i.add(d),o.push(c.object))}return o}_setWGS84PropertyForTiles(){const e="dataInWGS84";this.state.tileset.selectedTiles.forEach(i=>{i.hasOwnProperty(e)||Object.defineProperty(i,e,{get:()=>{if(!i.content)return null;if(this.state.binary&&Array.isArray(i.content)&&!i.content.length)return[];const{bbox:o}=i;if(i._contentWGS84===void 0&&b3(o)){const c=this.state.binary?Xu(i.content):i.content;i._contentWGS84=c.map(d=>ef(d,o,this.context.viewport))}return i._contentWGS84}})})}}kp.layerName="MVTLayer";kp.defaultProps=GR;function Ka(r,e){if(r.properties&&e)return r.properties[e];if("id"in r)return r.id}function Ju(r){var e;return((e=r.properties)==null?void 0:e.layerName)||null}function Zu(r){return r!=null&&r!==""}function ef(r,e,t){const i={...r,geometry:{type:r.geometry.type}};return Object.defineProperty(i.geometry,"coordinates",{get:()=>FR(r.geometry,e,t).coordinates}),i}const tf="0123456789bcdefghjkmnpqrstuvwxyz",Op={};for(let r=0;r<tf.length;r++)Op[tf.charAt(r)]=r;const zR=-90,HR=90,qR=-180,QR=180;function WR(r){let e=!0,t=HR,i=zR,o=QR,c=qR,d,m=0;for(let _=0,T=r.length;_<T;_++){const y=r[_].toLowerCase();m=Op[y];for(let w=4;w>=0;w--){const M=m>>w&1;e?(d=(o+c)/2,M===1?c=d:o=d):(d=(t+i)/2,M===1?i=d:t=d),e=!e}}return[i,c,t,o]}function KR(r){const[e,t,i,o]=WR(r);return[o,i,o,e,t,e,t,i,o,i]}const $R={getGeohash:{type:"accessor",value:r=>r.geohash}};class Fp extends Cn{indexToBounds(){const{data:e,getGeohash:t}=this.props;return{data:e,_normalize:!1,positionFormat:"XY",getPolygon:(i,o)=>KR(t(i,o))}}}Fp.layerName="GeohashLayer";Fp.defaultProps=$R;export{Rh as A5Layer,Fp as GeohashLayer,Jh as GreatCircleLayer,Ad as H3ClusterLayer,hi as H3HexagonLayer,kp as MVTLayer,ed as QuadkeyLayer,Zh as S2Layer,xp as TerrainLayer,wp as Tile3DLayer,Yi as TileLayer,ad as TripsLayer,Cn as _GeoCellLayer,Gy as _Tile2DHeader,x3 as _Tileset2D,Yh as _WMSLayer,no as _getURLFromTemplate};
