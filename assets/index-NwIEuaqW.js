import{M as re,U as se,C as le,H as ce,p as W,b as H}from"./composite-layer-D_35hGlM.js";import{C as G}from"./column-layer-CyK21dvV.js";import{o as O,d as E,a1 as $}from"./useDeck-CyF5ro6x.js";import{C as ue}from"./cube-geometry-CmPlxiKe.js";import"./index-9vIL5KkC.js";import"./cesium-utSEP5if.js";import"./linkSync-CPWjq_gk.js";function ge({pointCount:r,getBinId:e}){const t=new Map;for(let o=0;o<r;o++){const i=e(o);if(i===null)continue;let n=t.get(String(i));n?n.points.push(o):(n={id:i,index:t.size,points:[o]},t.set(String(i),n))}return Array.from(t.values())}function de({bins:r,dimensions:e,target:t}){const o=r.length*e;(!t||t.length<o)&&(t=new Float32Array(o));for(let i=0;i<r.length;i++){const{id:n}=r[i];Array.isArray(n)?t.set(n,i*e):t[i]=n}return t}const me=r=>r.length,X=(r,e)=>{let t=0;for(const o of r)t+=e(o);return t},fe=(r,e)=>r.length===0?NaN:X(r,e)/r.length,he=(r,e)=>{let t=1/0;for(const o of r){const i=e(o);i<t&&(t=i)}return t},pe=(r,e)=>{let t=-1/0;for(const o of r){const i=e(o);i>t&&(t=i)}return t},ve={COUNT:me,SUM:X,MEAN:fe,MIN:he,MAX:pe};function be({bins:r,getValue:e,operation:t,target:o}){(!o||o.length<r.length)&&(o=new Float32Array(r.length));let i=1/0,n=-1/0;for(let a=0;a<r.length;a++){const{points:s}=r[a];o[a]=t(s,e),o[a]<i&&(i=o[a]),o[a]>n&&(n=o[a])}return{value:o,domain:[i,n]}}function B(r,e,t){const o={};for(const n of r.sources||[]){const a=e[n];if(a)o[n]=Ce(a);else throw new Error(`Cannot find attribute ${n}`)}const i={};return n=>{for(const a in o)i[a]=o[a](n);return r.getValue(i,n,t)}}function Ce(r){const e=r.value,{offset:t=0,stride:o,size:i}=r.getAccessor(),n=e.BYTES_PER_ELEMENT,a=t/n,s=o?o/n:i;if(i===1)return r.isConstant?()=>e[0]:u=>{const c=a+s*u;return e[c]};let l;return r.isConstant?(l=Array.from(e),()=>l):(l=new Array(i),u=>{const c=a+s*u;for(let g=0;g<i;g++)l[g]=e[c+g];return l})}class q{constructor(e){this.bins=[],this.binIds=null,this.results=[],this.dimensions=e.dimensions,this.channelCount=e.getValue.length,this.props={...e,binOptions:{},pointCount:0,operations:[],customOperations:[],attributes:{}},this.needsUpdate=!0,this.setProps(e)}destroy(){}get binCount(){return this.bins.length}setProps(e){const t=this.props;if(e.binOptions&&(O(e.binOptions,t.binOptions,2)||this.setNeedsUpdate()),e.operations)for(let o=0;o<this.channelCount;o++)e.operations[o]!==t.operations[o]&&this.setNeedsUpdate(o);if(e.customOperations)for(let o=0;o<this.channelCount;o++)!!e.customOperations[o]!=!!t.customOperations[o]&&this.setNeedsUpdate(o);e.pointCount!==void 0&&e.pointCount!==t.pointCount&&this.setNeedsUpdate(),e.attributes&&(e.attributes={...t.attributes,...e.attributes}),Object.assign(this.props,e)}setNeedsUpdate(e){e===void 0?this.needsUpdate=!0:this.needsUpdate!==!0&&(this.needsUpdate=this.needsUpdate||[],this.needsUpdate[e]=!0)}update(){var e,t,o,i;if(this.needsUpdate===!0){this.bins=ge({pointCount:this.props.pointCount,getBinId:B(this.props.getBin,this.props.attributes,this.props.binOptions)});const n=de({bins:this.bins,dimensions:this.dimensions,target:(e=this.binIds)==null?void 0:e.value});this.binIds={value:n,type:"float32",size:this.dimensions}}for(let n=0;n<this.channelCount;n++)if(this.needsUpdate===!0||this.needsUpdate[n]){const a=this.props.customOperations[n]||ve[this.props.operations[n]],{value:s,domain:l}=be({bins:this.bins,getValue:B(this.props.getValue[n],this.props.attributes,void 0),operation:a,target:(t=this.results[n])==null?void 0:t.value});this.results[n]={value:s,domain:l,type:"float32",size:1},(i=(o=this.props).onUpdate)==null||i.call(o,{channel:n})}this.needsUpdate=!1}preDraw(){}getBins(){return this.binIds}getResult(e){return this.results[e]}getResultDomain(e){var t;return((t=this.results[e])==null?void 0:t.domain)??[1/0,-1/0]}getBin(e){const t=this.bins[e];if(!t)return null;const o=new Array(this.channelCount);for(let i=0;i<o.length;i++){const n=this.results[i];o[i]=n==null?void 0:n.value[e]}return{id:t.id,value:o,count:t.points.length,pointIndices:t.points}}}function Y(r,e,t){return r.createFramebuffer({width:e,height:t,colorAttachments:[r.createTexture({width:e,height:t,format:"rgba32float",sampler:{minFilter:"nearest",magFilter:"nearest"}})]})}const ye=`layout(std140) uniform binSorterUniforms {
  ivec4 binIdRange;
  ivec2 targetSize;
} binSorter;
`,xe={name:"binSorter",vs:ye,uniformTypes:{binIdRange:"vec4<i32>",targetSize:"vec2<i32>"}},K=[1,2,4,8],U=3e38,Se={SUM:0,MEAN:0,MIN:0,MAX:0,COUNT:0},y=1024;class Ae{constructor(e,t){this.binsFBO=null,this.device=e,this.model=Ve(e,t)}get texture(){return this.binsFBO?this.binsFBO.colorAttachments[0].texture:null}destroy(){var e,t;this.model.destroy(),(e=this.binsFBO)==null||e.colorAttachments[0].texture.destroy(),(t=this.binsFBO)==null||t.destroy()}getBinValues(e){if(!this.binsFBO)return null;const t=e%y,o=Math.floor(e/y),i=this.device.readPixelsToArrayWebGL(this.binsFBO,{sourceX:t,sourceY:o,sourceWidth:1,sourceHeight:1}).buffer;return new Float32Array(i)}setDimensions(e,t){var a,s;const o=y,i=Math.ceil(e/o);this.binsFBO?this.binsFBO.height<i&&this.binsFBO.resize({width:o,height:i}):this.binsFBO=Y(this.device,o,i);const n={binIdRange:[t[0][0],t[0][1],((a=t[1])==null?void 0:a[0])||0,((s=t[1])==null?void 0:s[1])||0],targetSize:[this.binsFBO.width,this.binsFBO.height]};this.model.shaderInputs.setProps({binSorter:n})}setModelProps(e){const t=this.model;e.attributes&&t.setAttributes(e.attributes),e.constantAttributes&&t.setConstantAttributes(e.constantAttributes),e.vertexCount!==void 0&&t.setVertexCount(e.vertexCount),e.shaderModuleProps&&t.shaderInputs.setProps(e.shaderModuleProps)}update(e){if(!this.binsFBO)return;const t=Ie(e);this._updateBins("SUM",t.SUM+t.MEAN),this._updateBins("MIN",t.MIN),this._updateBins("MAX",t.MAX)}_updateBins(e,t){if(t===0)return;t|=K[3];const o=this.model,i=this.binsFBO,n=e==="MAX"?-U:e==="MIN"?U:0,a=this.device.beginRenderPass({id:`gpu-aggregation-${e}`,framebuffer:i,parameters:{viewport:[0,0,i.width,i.height],colorMask:t},clearColor:[n,n,n,0],clearDepth:!1,clearStencil:!1});o.setParameters({blend:!0,blendColorSrcFactor:"one",blendColorDstFactor:"one",blendAlphaSrcFactor:"one",blendAlphaDstFactor:"one",blendColorOperation:e==="MAX"?"max":e==="MIN"?"min":"add",blendAlphaOperation:"add"}),o.draw(a),a.end()}}function Ie(r){const e={...Se};for(let t=0;t<r.length;t++){const o=r[t];o&&(e[o]+=K[t])}return e}function Ve(r,e){let t=e.vs;e.dimensions===2&&(t+=`
void getBin(out int binId) {
  ivec2 binId2;
  getBin(binId2);
  if (binId2.x < binSorter.binIdRange.x || binId2.x >= binSorter.binIdRange.y) {
    binId = -1;
  } else {
    binId = (binId2.y - binSorter.binIdRange.z) * (binSorter.binIdRange.y - binSorter.binIdRange.x) + binId2.x;
  }
}
`);const o=`#version 300 es
#define SHADER_NAME gpu-aggregation-sort-bins-vertex

${t}

out vec3 v_Value;

void main() {
  int binIndex;
  getBin(binIndex);
  binIndex = binIndex - binSorter.binIdRange.x;
  if (binIndex < 0) {
    gl_Position = vec4(0.);
    return;
  }
  int row = binIndex / binSorter.targetSize.x;
  int col = binIndex - row * binSorter.targetSize.x;
  vec2 position = (vec2(col, row) + 0.5) / vec2(binSorter.targetSize) * 2.0 - 1.0;
  gl_Position = vec4(position, 0.0, 1.0);
  gl_PointSize = 1.0;

#if NUM_CHANNELS == 3
  getValue(v_Value);
#elif NUM_CHANNELS == 2
  getValue(v_Value.xy);
#else
  getValue(v_Value.x);
#endif
}
`,i=`#version 300 es
#define SHADER_NAME gpu-aggregation-sort-bins-fragment

precision highp float;

in vec3 v_Value;
out vec4 fragColor;

void main() {
  fragColor.xyz = v_Value;

  #ifdef MODULE_GEOMETRY
  geometry.uv = vec2(0.);
  DECKGL_FILTER_COLOR(fragColor, geometry);
  #endif

  fragColor.w = 1.0;
}
`;return new re(r,{bufferLayout:e.bufferLayout,modules:[...e.modules||[],xe],defines:{...e.defines,NON_INSTANCED_MODEL:1,NUM_CHANNELS:e.channelCount},isInstanced:!1,vs:o,fs:i,topology:"point-list",disableWarnings:!0})}const _e=`layout(std140) uniform aggregatorTransformUniforms {
  ivec4 binIdRange;
  bvec3 isCount;
  bvec3 isMean;
  float naN;
} aggregatorTransform;
`,Me={name:"aggregatorTransform",vs:_e,uniformTypes:{binIdRange:"vec4<i32>",isCount:"vec3<f32>",isMean:"vec3<f32>",naN:"f32"}};class Pe{constructor(e,t){this.binBuffer=null,this.valueBuffer=null,this._domains=null,this.device=e,this.channelCount=t.channelCount,this.transform=Te(e,t),this.domainFBO=Y(e,2,1)}destroy(){var e,t;this.transform.destroy(),(e=this.binBuffer)==null||e.destroy(),(t=this.valueBuffer)==null||t.destroy(),this.domainFBO.colorAttachments[0].texture.destroy(),this.domainFBO.destroy()}get domains(){if(!this._domains){const e=this.device.readPixelsToArrayWebGL(this.domainFBO).buffer,t=new Float32Array(e);this._domains=[[-t[4],t[0]],[-t[5],t[1]],[-t[6],t[2]]].slice(0,this.channelCount)}return this._domains}setDimensions(e,t){var l,u,c,g;const{model:o,transformFeedback:i}=this.transform;o.setVertexCount(e);const n={binIdRange:[t[0][0],t[0][1],((l=t[1])==null?void 0:l[0])||0,((u=t[1])==null?void 0:u[1])||0]};o.shaderInputs.setProps({aggregatorTransform:n});const a=e*t.length*4;(!this.binBuffer||this.binBuffer.byteLength<a)&&((c=this.binBuffer)==null||c.destroy(),this.binBuffer=this.device.createBuffer({byteLength:a}),i.setBuffer("binIds",this.binBuffer));const s=e*this.channelCount*4;(!this.valueBuffer||this.valueBuffer.byteLength<s)&&((g=this.valueBuffer)==null||g.destroy(),this.valueBuffer=this.device.createBuffer({byteLength:s}),i.setBuffer("values",this.valueBuffer))}update(e,t){if(!e)return;const o=this.transform,i=this.domainFBO,n=[0,1,2].map(l=>t[l]==="COUNT"?1:0),a=[0,1,2].map(l=>t[l]==="MEAN"?1:0),s={isCount:n,isMean:a,bins:e};o.model.shaderInputs.setProps({aggregatorTransform:s}),o.run({id:"gpu-aggregation-domain",framebuffer:i,discard:!1,parameters:{viewport:[0,0,2,1]},clearColor:[-3e38,-3e38,-3e38,0],clearDepth:!1,clearStencil:!1}),this._domains=null}}function Te(r,e){const t=`#version 300 es
#define SHADER_NAME gpu-aggregation-domain-vertex

uniform sampler2D bins;

#if NUM_DIMS == 1
out float binIds;
#else
out vec2 binIds;
#endif

#if NUM_CHANNELS == 1
flat out float values;
#elif NUM_CHANNELS == 2
flat out vec2 values;
#else
flat out vec3 values;
#endif

const float NAN = intBitsToFloat(-1);

void main() {
  int row = gl_VertexID / SAMPLER_WIDTH;
  int col = gl_VertexID - row * SAMPLER_WIDTH;
  vec4 weights = texelFetch(bins, ivec2(col, row), 0);
  vec3 value3 = mix(
    mix(weights.rgb, vec3(weights.a), aggregatorTransform.isCount),
    weights.rgb / max(weights.a, 1.0),
    aggregatorTransform.isMean
  );
  if (weights.a == 0.0) {
    value3 = vec3(NAN);
  }

#if NUM_DIMS == 1
  binIds = float(gl_VertexID + aggregatorTransform.binIdRange.x);
#else
  int y = gl_VertexID / (aggregatorTransform.binIdRange.y - aggregatorTransform.binIdRange.x);
  int x = gl_VertexID - y * (aggregatorTransform.binIdRange.y - aggregatorTransform.binIdRange.x);
  binIds.y = float(y + aggregatorTransform.binIdRange.z);
  binIds.x = float(x + aggregatorTransform.binIdRange.x);
#endif

#if NUM_CHANNELS == 3
  values = value3;
#elif NUM_CHANNELS == 2
  values = value3.xy;
#else
  values = value3.x;
#endif

  gl_Position = vec4(0., 0., 0., 1.);
  // This model renders into a 2x1 texture to obtain min and max simultaneously.
  // See comments in fragment shader
  gl_PointSize = 2.0;
}
`,o=`#version 300 es
#define SHADER_NAME gpu-aggregation-domain-fragment

precision highp float;

#if NUM_CHANNELS == 1
flat in float values;
#elif NUM_CHANNELS == 2
flat in vec2 values;
#else
flat in vec3 values;
#endif

out vec4 fragColor;

void main() {
  vec3 value3;
#if NUM_CHANNELS == 3
  value3 = values;
#elif NUM_CHANNELS == 2
  value3.xy = values;
#else
  value3.x = values;
#endif
  if (isnan(value3.x)) discard;
  // This shader renders into a 2x1 texture with blending=max
  // The left pixel yields the max value of each channel
  // The right pixel yields the min value of each channel
  if (gl_FragCoord.x < 1.0) {
    fragColor = vec4(value3, 1.0);
  } else {
    fragColor = vec4(-value3, 1.0);
  }
}
`;return r.type==="webgl"&&r.getExtension("GL_ARB_shader_bit_encoding"),new se(r,{vs:t,fs:o,topology:"point-list",modules:[Me],parameters:{blend:!0,blendColorSrcFactor:"one",blendColorDstFactor:"one",blendColorOperation:"max",blendAlphaSrcFactor:"one",blendAlphaDstFactor:"one",blendAlphaOperation:"max"},defines:{NUM_DIMS:e.dimensions,NUM_CHANNELS:e.channelCount,SAMPLER_WIDTH:y},varyings:["binIds","values"],disableWarnings:!0})}class x{static isSupported(e){return e.features.has("float32-renderable-webgl")&&e.features.has("texture-blend-float-webgl")}constructor(e,t){this.binCount=0,this.binIds=null,this.results=[],this.device=e,this.dimensions=t.dimensions,this.channelCount=t.channelCount,this.props={...t,pointCount:0,binIdRange:[[0,0]],operations:[],attributes:{},binOptions:{}},this.needsUpdate=new Array(this.channelCount).fill(!0),this.binSorter=new Ae(e,t),this.aggregationTransform=new Pe(e,t),this.setProps(t)}getBins(){var t;const e=this.aggregationTransform.binBuffer;return e?(((t=this.binIds)==null?void 0:t.buffer)!==e&&(this.binIds={buffer:e,type:"float32",size:this.dimensions}),this.binIds):null}getResult(e){var o;const t=this.aggregationTransform.valueBuffer;return!t||e>=this.channelCount?null:(((o=this.results[e])==null?void 0:o.buffer)!==t&&(this.results[e]={buffer:t,type:"float32",size:1,stride:this.channelCount*4,offset:e*4}),this.results[e])}getResultDomain(e){return this.aggregationTransform.domains[e]}getBin(e){if(e<0||e>=this.binCount)return null;const{binIdRange:t}=this.props;let o;if(this.dimensions===1)o=[e+t[0][0]];else{const[[s,l],[u]]=t,c=l-s;o=[e%c+s,Math.floor(e/c)+u]}const i=this.binSorter.getBinValues(e);if(!i)return null;const n=i[3],a=[];for(let s=0;s<this.channelCount;s++){const l=this.props.operations[s];l==="COUNT"?a[s]=n:n===0?a[s]=NaN:a[s]=l==="MEAN"?i[s]/n:i[s]}return{id:o,value:a,count:n}}destroy(){this.binSorter.destroy(),this.aggregationTransform.destroy()}setProps(e){const t=this.props;if("binIdRange"in e&&!O(e.binIdRange,t.binIdRange,2)){const o=e.binIdRange;if(E.assert(o.length===this.dimensions),this.dimensions===1){const[[i,n]]=o;this.binCount=n-i}else{const[[i,n],[a,s]]=o;this.binCount=(n-i)*(s-a)}this.binSorter.setDimensions(this.binCount,o),this.aggregationTransform.setDimensions(this.binCount,o),this.setNeedsUpdate()}if(e.operations)for(let o=0;o<this.channelCount;o++)e.operations[o]!==t.operations[o]&&this.setNeedsUpdate(o);if(e.pointCount!==void 0&&e.pointCount!==t.pointCount&&(this.binSorter.setModelProps({vertexCount:e.pointCount}),this.setNeedsUpdate()),e.binOptions&&(O(e.binOptions,t.binOptions,2)||this.setNeedsUpdate(),this.binSorter.model.shaderInputs.setProps({binOptions:e.binOptions})),e.attributes){const o={},i={};for(const n of Object.values(e.attributes))for(const[a,s]of Object.entries(n.getValue()))ArrayBuffer.isView(s)?i[a]=s:s&&(o[a]=s);this.binSorter.setModelProps({attributes:o,constantAttributes:i})}e.shaderModuleProps&&this.binSorter.setModelProps({shaderModuleProps:e.shaderModuleProps}),Object.assign(this.props,e)}setNeedsUpdate(e){e===void 0?this.needsUpdate.fill(!0):this.needsUpdate[e]=!0}update(){}preDraw(){var o,i;if(!this.needsUpdate.some(Boolean))return;const{operations:e}=this.props,t=this.needsUpdate.map((n,a)=>n?e[a]:null);this.binSorter.update(t),this.aggregationTransform.update(this.binSorter.texture,e);for(let n=0;n<this.channelCount;n++)this.needsUpdate[n]&&(this.needsUpdate[n]=!1,(i=(o=this.props).onUpdate)==null||i.call(o,{channel:n}))}}class L extends le{get isDrawable(){return!0}initializeState(){}updateState(e){var o,i;super.updateState(e);const t=this.getAggregatorType();if(e.changeFlags.extensionsChanged||this.state.aggregatorType!==t){(o=this.state.aggregator)==null||o.destroy();const n=this.createAggregator(t);return n.setProps({attributes:(i=this.getAttributeManager())==null?void 0:i.attributes}),this.setState({aggregator:n,aggregatorType:t}),!0}return!1}finalizeState(e){super.finalizeState(e),this.state.aggregator.destroy()}updateAttributes(e){const{aggregator:t}=this.state;t.setProps({attributes:e});for(const o in e)this.onAttributeChange(o);t.update()}draw({shaderModuleProps:e}){const{aggregator:t}=this.state;t.setProps({shaderModuleProps:e}),t.preDraw()}_getAttributeManager(){return new ce(this.context.device,{id:this.props.id,stats:this.context.stats})}}L.layerName="AggregationLayer";const Z=[[255,255,178],[254,217,118],[254,178,76],[253,141,60],[240,59,32],[189,0,38]];function De(r,e=!1,t=Float32Array){let o;if(Number.isFinite(r[0]))o=new t(r);else{o=new t(r.length*4);let i=0;for(let n=0;n<r.length;n++){const a=r[n];o[i++]=a[0],o[i++]=a[1],o[i++]=a[2],o[i++]=Number.isFinite(a[3])?a[3]:255}}if(e)for(let i=0;i<o.length;i++)o[i]/=255;return o}const S={linear:"linear",quantile:"nearest",quantize:"nearest",ordinal:"nearest"};function Q(r,e){r.setSampler({minFilter:S[e],magFilter:S[e]})}function J(r,e,t="linear"){const o=De(e,!1,Uint8Array);return r.createTexture({format:"rgba8unorm",sampler:{minFilter:S[t],magFilter:S[t],addressModeU:"clamp-to-edge",addressModeV:"clamp-to-edge"},data:o,width:o.length/4,height:1})}class A{constructor(e,t){this.props={scaleType:"linear",lowerPercentile:0,upperPercentile:100},this.domain=null,this.cutoff=null,this.input=e,this.inputLength=t,this.attribute=e}getScalePercentile(){if(!this._percentile){const e=z(this.input,this.inputLength);this._percentile=Ne(e)}return this._percentile}getScaleOrdinal(){if(!this._ordinal){const e=z(this.input,this.inputLength);this._ordinal=we(e)}return this._ordinal}getCutoff({scaleType:e,lowerPercentile:t,upperPercentile:o}){if(e==="quantile")return[t,o-1];if(t>0||o<100){const{domain:i}=this.getScalePercentile();let n=i[Math.floor(t)-1]??-1/0,a=i[Math.floor(o)-1]??1/0;if(e==="ordinal"){const{domain:s}=this.getScaleOrdinal();n=s.findIndex(l=>l>=n),a=s.findIndex(l=>l>a)-1,a===-2&&(a=s.length-1)}return[n,a]}return null}update(e){const t=this.props;if(e.scaleType!==t.scaleType)switch(e.scaleType){case"quantile":{const{attribute:o}=this.getScalePercentile();this.attribute=o,this.domain=[0,99];break}case"ordinal":{const{attribute:o,domain:i}=this.getScaleOrdinal();this.attribute=o,this.domain=[0,i.length-1];break}default:this.attribute=this.input,this.domain=null}return(e.scaleType!==t.scaleType||e.lowerPercentile!==t.lowerPercentile||e.upperPercentile!==t.upperPercentile)&&(this.cutoff=this.getCutoff(e)),this.props=e,this}}function we(r){const e=new Set;for(const i of r)Number.isFinite(i)&&e.add(i);const t=Array.from(e).sort(),o=new Map;for(let i=0;i<t.length;i++)o.set(t[i],i);return{attribute:{value:r.map(i=>Number.isFinite(i)?o.get(i):NaN),type:"float32",size:1},domain:t}}function Ne(r,e=100){const t=Array.from(r).filter(Number.isFinite).sort(Re);let o=0;const i=Math.max(1,e),n=new Array(i-1);for(;++o<i;)n[o-1]=Oe(t,o/i);return{attribute:{value:r.map(a=>Number.isFinite(a)?Ee(n,a):NaN),type:"float32",size:1},domain:n}}function z(r,e){var a;const t=(r.stride??4)/4,o=(r.offset??0)/4;let i=r.value;if(!i){const s=(a=r.buffer)==null?void 0:a.readSyncWebGL(0,t*4*e);s&&(i=new Float32Array(s.buffer),r.value=i)}if(t===1)return i.subarray(0,e);const n=new Float32Array(e);for(let s=0;s<e;s++)n[s]=i[s*t+o];return n}function Re(r,e){return r-e}function Oe(r,e){const t=r.length;if(e<=0||t<2)return r[0];if(e>=1)return r[t-1];const o=(t-1)*e,i=Math.floor(o),n=r[i],a=r[i+1];return n+(a-n)*(o-i)}function Ee(r,e){let t=0,o=r.length;for(;t<o;){const i=t+o>>>1;r[i]>e?o=i:t=i+1}return t}function ee({dataBounds:r,getBinId:e,padding:t=0}){const o=[r[0],r[1],[r[0][0],r[1][1]],[r[1][0],r[0][1]]].map(l=>e(l)),i=Math.min(...o.map(l=>l[0]))-t,n=Math.min(...o.map(l=>l[1]))-t,a=Math.max(...o.map(l=>l[0]))+t+1,s=Math.max(...o.map(l=>l[1]))+t+1;return[[i,a],[n,s]]}const Le=`const HEXBIN_DISTANCE: vec2<f32> = vec2<f32>(1.7320508, 1.5);

struct Attributes {
  @builtin(instance_index) instanceIndex: u32,
  @location(0) positions: vec3<f32>,
  @location(1) normals: vec3<f32>,
  @location(2) instancePositions: vec2<f32>,
  @location(3) instanceColorValues: f32,
  @location(4) instanceElevationValues: f32,
};

struct Varyings {
  @builtin(position) position: vec4<f32>,
  @location(0) color: vec4<f32>,
  @location(1) pickingColor: vec3<f32>,
};

fn hexbinCentroid(binId: vec2<f32>, radius: f32) -> vec2<f32> {
  var adjustedBinId = binId;
  adjustedBinId.x += fract(adjustedBinId.y * 0.5);
  return adjustedBinId * HEXBIN_DISTANCE * radius;
}

fn interpolate(value: f32, domain: vec2<f32>, range: vec2<f32>) -> f32 {
  let ratio = clamp((value - domain.x) / (domain.y - domain.x), 0.0, 1.0);
  return mix(range.x, range.y, ratio);
}

fn sampleColorRange(value: f32, domain: vec2<f32>) -> vec4<f32> {
  let ratio = (value - domain.x) / (domain.y - domain.x);
  return textureSampleLevel(colorRange, colorRangeSampler, vec2<f32>(ratio, 0.5), 0.0);
}

@vertex
fn vertexMain(attributes: Attributes) -> Varyings {
  var output: Varyings;
  geometry.pickingColor = picking_getPickingColorFromIndex(attributes.instanceIndex);
  output.pickingColor = geometry.pickingColor;

  if (
    attributes.instanceColorValues != attributes.instanceColorValues ||
    attributes.instanceColorValues < hexagon.colorDomain.z ||
    attributes.instanceColorValues > hexagon.colorDomain.w ||
    attributes.instanceElevationValues < hexagon.elevationDomain.z ||
    attributes.instanceElevationValues > hexagon.elevationDomain.w
  ) {
    output.position = vec4<f32>(0.0);
    output.color = vec4<f32>(0.0);
    return output;
  }

  var commonPosition =
    hexbinCentroid(attributes.instancePositions, column.radius) +
    (hexagon.originCommon - project.commonOrigin.xy);
  commonPosition += attributes.positions.xy * column.radius * column.coverage;
  geometry.position = vec4<f32>(commonPosition, 0.0, 1.0);
  geometry.normal = project_normal(attributes.normals);

  if (column.extruded > 0.5) {
    var elevation = interpolate(
      attributes.instanceElevationValues,
      hexagon.elevationDomain.xy,
      hexagon.elevationRange
    );
    elevation = project_size_float(elevation);
    geometry.position.z = (attributes.positions.z + 1.0) / 2.0 * elevation;
  }

  output.position = project_common_position_to_clipspace(geometry.position);
  var colorValue = sampleColorRange(attributes.instanceColorValues, hexagon.colorDomain.xy);
  if (column.extruded > 0.5) {
    colorValue = vec4<f32>(
      lighting_getLightColor2(
        colorValue.rgb,
        project.cameraPosition,
        geometry.position.xyz,
        geometry.normal
      ),
      colorValue.a
    );
  }
  output.color = vec4<f32>(colorValue.rgb, colorValue.a * layer.opacity);
  return output;
}

@fragment
fn fragmentMain(varyings: Varyings) -> @location(0) vec4<f32> {
  if (picking.isActive > 0.5) {
    if (!picking_isColorValid(varyings.pickingColor)) {
      discard;
    }
    return vec4<f32>(varyings.pickingColor, 1.0);
  }

  var color = varyings.color;
  if (picking.isHighlightActive > 0.5) {
    let highlightedObjectColor = picking_normalizeColor(picking.highlightedObjectColor);
    if (picking_isColorZero(abs(varyings.pickingColor - highlightedObjectColor))) {
      let highLightAlpha = picking.highlightColor.a;
      let blendedAlpha = highLightAlpha + color.a * (1.0 - highLightAlpha);
      if (blendedAlpha > 0.0) {
        let highLightRatio = highLightAlpha / blendedAlpha;
        color = vec4<f32>(
          mix(color.rgb, picking.highlightColor.rgb, highLightRatio),
          blendedAlpha
        );
      } else {
        color = vec4<f32>(color.rgb, 0.0);
      }
    }
  }

  return deckgl_premultiplied_alpha(color);
}
`,te=Math.PI/3,I=2*Math.sin(te),V=1.5,Be=Array.from({length:6},(r,e)=>{const t=e*te;return[Math.sin(t),-Math.cos(t)]});function R([r,e],t){let o=Math.round(e=e/t/V),i=Math.round(r=r/t/I-(o&1)/2);const n=e-o;if(Math.abs(n)*3>1){const a=r-i,s=i+(r<i?-1:1)/2,l=o+(e<o?-1:1),u=r-s,c=e-l;a*a+n*n>u*u+c*c&&(i=s+(o&1?1:-1)/2,o=l)}return[i,o]}const Ue=`
const vec2 DIST = vec2(${I}, ${V});

ivec2 pointToHexbin(vec2 p, float radius) {
  p /= radius * DIST;
  float pj = round(p.y);
  float pjm2 = mod(pj, 2.0);
  p.x -= pjm2 * 0.5;
  float pi = round(p.x);
  vec2 d1 = p - vec2(pi, pj);

  if (abs(d1.y) * 3. > 1.) {
    vec2 v2 = step(0.0, d1) - 0.5;
    v2.y *= 2.0;
    vec2 d2 = d1 - v2;
    if (dot(d1, d1) > dot(d2, d2)) {
      pi += v2.x + pjm2 - 0.5;
      pj += v2.y;
    }
  }
  return ivec2(pi, pj);
}
`;function F([r,e],t){return[(r+(e&1)/2)*t*I,e*t*V]}const ze=`
const vec2 DIST = vec2(${I}, ${V});

vec2 hexbinCentroid(vec2 binId, float radius) {
  binId.x += fract(binId.y * 0.5);
  return binId * DIST * radius;
}
`,Fe=`#version 300 es
#define SHADER_NAME hexagon-cell-layer-vertex-shader
in vec3 positions;
in vec3 normals;
in vec2 instancePositions;
in float instanceElevationValues;
in float instanceColorValues;
uniform sampler2D colorRange;
out vec4 vColor;
${ze}
float interp(float value, vec2 domain, vec2 range) {
float r = min(max((value - domain.x) / (domain.y - domain.x), 0.), 1.);
return mix(range.x, range.y, r);
}
vec4 interp(float value, vec2 domain, sampler2D range) {
float r = (value - domain.x) / (domain.y - domain.x);
return texture(range, vec2(r, 0.5));
}
void main(void) {
geometry.pickingColor = picking_getPickingColorFromInstanceID();
if (isnan(instanceColorValues) ||
instanceColorValues < hexagon.colorDomain.z ||
instanceColorValues > hexagon.colorDomain.w ||
instanceElevationValues < hexagon.elevationDomain.z ||
instanceElevationValues > hexagon.elevationDomain.w
) {
gl_Position = vec4(0.);
return;
}
vec2 commonPosition = hexbinCentroid(instancePositions, column.radius) + (hexagon.originCommon - project.commonOrigin.xy);
commonPosition += positions.xy * column.radius * column.coverage;
geometry.position = vec4(commonPosition, 0.0, 1.0);
geometry.normal = project_normal(normals);
float elevation = 0.0;
if (column.extruded) {
elevation = interp(instanceElevationValues, hexagon.elevationDomain.xy, hexagon.elevationRange);
elevation = project_size(elevation);
geometry.position.z = (positions.z + 1.0) / 2.0 * elevation;
}
gl_Position = project_common_position_to_clipspace(geometry.position);
DECKGL_FILTER_GL_POSITION(gl_Position, geometry);
vColor = interp(instanceColorValues, hexagon.colorDomain.xy, colorRange);
vColor.a *= layer.opacity;
if (column.extruded) {
vColor.rgb = lighting_getLightColor(vColor.rgb, project.cameraPosition, geometry.position.xyz, geometry.normal);
}
DECKGL_FILTER_COLOR(vColor, geometry);
}
`,ke=`struct HexagonUniforms {
  colorDomain: vec4<f32>,
  elevationDomain: vec4<f32>,
  elevationRange: vec2<f32>,
  originCommon: vec2<f32>,
};

@group(0) @binding(auto) var<uniform> hexagon: HexagonUniforms;
@group(0) @binding(auto) var colorRange: texture_2d<f32>;
@group(0) @binding(auto) var colorRangeSampler: sampler;
`,je=`layout(std140) uniform hexagonUniforms {
  vec4 colorDomain;
  vec4 elevationDomain;
  vec2 elevationRange;
  vec2 originCommon;
} hexagon;
`,We={name:"hexagon",source:ke,vs:je,uniformTypes:{colorDomain:"vec4<f32>",elevationDomain:"vec4<f32>",elevationRange:"vec2<f32>",originCommon:"vec2<f32>"}};class oe extends G{getShaders(){const e=super.getShaders();return e.modules.push(We),{...e,source:Le,vs:Fe}}initializeState(){super.initializeState();const e=this.getAttributeManager();e.remove(["instanceElevations","instanceFillColors","instanceLineColors","instanceStrokeWidths"]),e.addInstanced({instancePositions:{size:2,type:"float32",accessor:"getBin"},instanceColorValues:{size:1,type:"float32",accessor:"getColorValue"},instanceElevationValues:{size:1,type:"float32",accessor:"getElevationValue"}})}updateState(e){var n;super.updateState(e);const{props:t,oldProps:o}=e,i=this.state.fillModel;if(o.colorRange!==t.colorRange){(n=this.state.colorTexture)==null||n.destroy(),this.state.colorTexture=J(this.context.device,t.colorRange,t.colorScaleType);const a={colorRange:this.state.colorTexture};i.shaderInputs.setProps({hexagon:a})}else o.colorScaleType!==t.colorScaleType&&Q(this.state.colorTexture,t.colorScaleType)}finalizeState(e){var t;super.finalizeState(e),(t=this.state.colorTexture)==null||t.destroy()}draw({uniforms:e}){const{radius:t,hexOriginCommon:o,elevationRange:i,elevationScale:n,extruded:a,coverage:s,colorDomain:l,elevationDomain:u}=this.props,c=this.props.colorCutoff||[-1/0,1/0],g=this.props.elevationCutoff||[-1/0,1/0],d=this.state.fillModel,m={colorDomain:[Math.max(l[0],c[0]),Math.min(l[1],c[1]),Math.max(l[0]-1,c[0]),Math.min(l[1]+1,c[1])],elevationDomain:[Math.max(u[0],g[0]),Math.min(u[1],g[1]),Math.max(u[0]-1,g[0]),Math.min(u[1]+1,g[1])],elevationRange:[i[0]*n,i[1]*n],originCommon:o};d.shaderInputs.setProps({column:{extruded:a,coverage:s,radius:t},hexagon:m}),d.draw(this.context.renderPass)}}oe.layerName="HexagonCellLayer";const He=`layout(std140) uniform binOptionsUniforms {
  vec2 hexOriginCommon;
  float radiusCommon;
} binOptions;
`,Ge={name:"binOptions",vs:He,uniformTypes:{hexOriginCommon:"vec2<f32>",radiusCommon:"f32"}};function k(){}const $e={gpuAggregation:!0,colorDomain:null,colorRange:Z,getColorValue:{type:"accessor",value:null},getColorWeight:{type:"accessor",value:1},colorAggregation:"SUM",lowerPercentile:{type:"number",min:0,max:100,value:0},upperPercentile:{type:"number",min:0,max:100,value:100},colorScaleType:"quantize",onSetColorDomain:k,elevationDomain:null,elevationRange:[0,1e3],getElevationValue:{type:"accessor",value:null},getElevationWeight:{type:"accessor",value:1},elevationAggregation:"SUM",elevationScale:{type:"number",min:0,value:1},elevationLowerPercentile:{type:"number",min:0,max:100,value:0},elevationUpperPercentile:{type:"number",min:0,max:100,value:100},elevationScaleType:"linear",onSetElevationDomain:k,radius:{type:"number",min:1,value:1e3},coverage:{type:"number",min:0,max:1,value:1},getPosition:{type:"accessor",value:r=>r.position},hexagonAggregator:{type:"function",optional:!0,value:null},extruded:!1,material:!0};class ie extends L{getAggregatorType(){const{gpuAggregation:e,hexagonAggregator:t,getColorValue:o,getElevationValue:i}=this.props;return e&&(t||o||i)?(E.warn("Features not supported by GPU aggregation, falling back to CPU")(),"cpu"):e&&x.isSupported(this.context.device)?"gpu":"cpu"}createAggregator(e){if(e==="cpu"){const{hexagonAggregator:t,radius:o}=this.props;return new q({dimensions:2,getBin:{sources:["positions"],getValue:({positions:i},n,a)=>{if(t)return t(i,o);const l=this.state.aggregatorViewport.projectPosition(i),{radiusCommon:u,hexOriginCommon:c}=a;return R([l[0]-c[0],l[1]-c[1]],u)}},getValue:[{sources:["colorWeights"],getValue:({colorWeights:i})=>i},{sources:["elevationWeights"],getValue:({elevationWeights:i})=>i}]})}return new x(this.context.device,{dimensions:2,channelCount:2,bufferLayout:this.getAttributeManager().getBufferLayouts({isInstanced:!1}),...super.getShaders({modules:[W,Ge],vs:`
  in vec3 positions;
  in vec3 positions64Low;
  in float colorWeights;
  in float elevationWeights;
  
  ${Ue}

  void getBin(out ivec2 binId) {
    vec3 positionCommon = project_position(positions, positions64Low);
    binId = pointToHexbin(positionCommon.xy, binOptions.radiusCommon);
  }
  void getValue(out vec2 value) {
    value = vec2(colorWeights, elevationWeights);
  }
  `})})}initializeState(){super.initializeState(),this.getAttributeManager().add({positions:{size:3,accessor:"getPosition",type:"float64",fp64:this.use64bitPositions()},colorWeights:{size:1,accessor:"getColorWeight"},elevationWeights:{size:1,accessor:"getElevationWeight"}})}updateState(e){const t=super.updateState(e),{props:o,oldProps:i,changeFlags:n}=e,{aggregator:a}=this.state;if((n.dataChanged||!this.state.dataAsArray)&&(o.getColorValue||o.getElevationValue)&&(this.state.dataAsArray=Array.from(H(o.data).iterable)),t||n.dataChanged||o.radius!==i.radius||o.getColorValue!==i.getColorValue||o.getElevationValue!==i.getElevationValue||o.colorAggregation!==i.colorAggregation||o.elevationAggregation!==i.elevationAggregation){this._updateBinOptions();const{radiusCommon:s,hexOriginCommon:l,binIdRange:u,dataAsArray:c}=this.state;if(a.setProps({binIdRange:u,pointCount:this.getNumInstances(),operations:[o.colorAggregation,o.elevationAggregation],binOptions:{radiusCommon:s,hexOriginCommon:l},onUpdate:this._onAggregationUpdate.bind(this)}),c){const{getColorValue:g,getElevationValue:d}=this.props;a.setProps({customOperations:[g&&(m=>g(m.map(f=>c[f]),{indices:m,data:o.data})),d&&(m=>d(m.map(f=>c[f]),{indices:m,data:o.data}))]})}}return n.updateTriggersChanged&&n.updateTriggersChanged.getColorValue&&a.setNeedsUpdate(0),n.updateTriggersChanged&&n.updateTriggersChanged.getElevationValue&&a.setNeedsUpdate(1),t}_updateBinOptions(){const e=this.getBounds();let t=1,o=[0,0],i=[[0,1],[0,1]],n=this.context.viewport;if(e&&Number.isFinite(e[0][0])){let a=[(e[0][0]+e[1][0])/2,(e[0][1]+e[1][1])/2];const{radius:s}=this.props,{unitsPerMeter:l}=n.getDistanceScales(a);t=l[0]*s;const u=R(n.projectFlat(a),t);a=n.unprojectFlat(F(u,t));const c=n.constructor;n=n.isGeospatial?new c({longitude:a[0],latitude:a[1],zoom:12}):new $({position:[a[0],a[1],0],zoom:12}),o=[Math.fround(n.center[0]),Math.fround(n.center[1])],i=ee({dataBounds:e,getBinId:g=>{const d=n.projectFlat(g);return d[0]-=o[0],d[1]-=o[1],R(d,t)},padding:1})}this.setState({radiusCommon:t,hexOriginCommon:o,binIdRange:i,aggregatorViewport:n})}draw(e){e.shaderModuleProps.project&&(e.shaderModuleProps.project.viewport=this.state.aggregatorViewport),super.draw(e)}_onAggregationUpdate({channel:e}){const t=this.getCurrentLayer().props,{aggregator:o}=this.state;if(e===0){const i=o.getResult(0);this.setState({colors:new A(i,o.binCount)}),t.onSetColorDomain(o.getResultDomain(0))}else if(e===1){const i=o.getResult(1);this.setState({elevations:new A(i,o.binCount)}),t.onSetElevationDomain(o.getResultDomain(1))}}onAttributeChange(e){const{aggregator:t}=this.state;switch(e){case"positions":t.setNeedsUpdate(),this._updateBinOptions();const{radiusCommon:o,hexOriginCommon:i,binIdRange:n}=this.state;t.setProps({binIdRange:n,binOptions:{radiusCommon:o,hexOriginCommon:i}});break;case"colorWeights":t.setNeedsUpdate(0);break;case"elevationWeights":t.setNeedsUpdate(1);break}}renderLayers(){var b,C;const{aggregator:e,radiusCommon:t,hexOriginCommon:o}=this.state,{elevationScale:i,colorRange:n,elevationRange:a,extruded:s,coverage:l,material:u,transitions:c,colorScaleType:g,lowerPercentile:d,upperPercentile:m,colorDomain:f,elevationScaleType:_,elevationLowerPercentile:M,elevationUpperPercentile:P,elevationDomain:T}=this.props,D=this.getSubLayerClass("cells",oe),v=e.getBins(),h=(b=this.state.colors)==null?void 0:b.update({scaleType:g,lowerPercentile:d,upperPercentile:m}),p=(C=this.state.elevations)==null?void 0:C.update({scaleType:_,lowerPercentile:M,upperPercentile:P});return!h||!p?null:new D(this.getSubLayerProps({id:"cells"}),{data:{length:e.binCount,attributes:{getBin:v,getColorValue:h.attribute,getElevationValue:p.attribute}},dataComparator:(w,N)=>w.length===N.length,updateTriggers:{getBin:[v],getColorValue:[h.attribute],getElevationValue:[p.attribute]},diskResolution:6,vertices:Be,radius:t,hexOriginCommon:o,elevationScale:i,colorRange:n,colorScaleType:g,elevationRange:a,extruded:s,coverage:l,material:u,colorDomain:h.domain||f||e.getResultDomain(0),elevationDomain:p.domain||T||e.getResultDomain(1),colorCutoff:h.cutoff,elevationCutoff:p.cutoff,transitions:c&&{getFillColor:c.getColorValue||c.getColorWeight,getElevation:c.getElevationValue||c.getElevationWeight},extensions:[]})}getPickingInfo(e){const t=e.info,{index:o}=t;if(o>=0){const i=this.state.aggregator.getBin(o);let n;if(i){const a=F(i.id,this.state.radiusCommon),s=this.context.viewport.unprojectFlat(a);n={col:i.id[0],row:i.id[1],position:s,colorValue:i.value[0],elevationValue:i.value[1],count:i.count},i.pointIndices&&(n.pointIndices=i.pointIndices,n.points=Array.isArray(this.props.data)?i.pointIndices.map(l=>this.props.data[l]):[])}t.object=n}return t}}ie.layerName="HexagonLayer";ie.defaultProps=$e;const Xe=`struct Attributes {
  @builtin(instance_index) instanceIndex: u32,
  @location(0) positions: vec3<f32>,
  @location(1) normals: vec3<f32>,
  @location(2) instancePositions: vec2<f32>,
  @location(3) instanceColorValues: f32,
  @location(4) instanceElevationValues: f32,
};

struct Varyings {
  @builtin(position) position: vec4<f32>,
  @location(0) color: vec4<f32>,
  @location(1) pickingColor: vec3<f32>,
};

fn interpolate(value: f32, domain: vec2<f32>, range: vec2<f32>) -> f32 {
  let ratio = clamp((value - domain.x) / (domain.y - domain.x), 0.0, 1.0);
  return mix(range.x, range.y, ratio);
}

fn sampleColorRange(value: f32, domain: vec2<f32>) -> vec4<f32> {
  let ratio = (value - domain.x) / (domain.y - domain.x);
  return textureSampleLevel(colorRange, colorRangeSampler, vec2<f32>(ratio, 0.5), 0.0);
}

@vertex
fn vertexMain(attributes: Attributes) -> Varyings {
  var output: Varyings;
  geometry.pickingColor = picking_getPickingColorFromIndex(attributes.instanceIndex);
  output.pickingColor = geometry.pickingColor;

  if (
    attributes.instanceColorValues != attributes.instanceColorValues ||
    attributes.instanceColorValues < grid.colorDomain.z ||
    attributes.instanceColorValues > grid.colorDomain.w ||
    attributes.instanceElevationValues < grid.elevationDomain.z ||
    attributes.instanceElevationValues > grid.elevationDomain.w
  ) {
    output.position = vec4<f32>(0.0);
    output.color = vec4<f32>(0.0);
    return output;
  }

  let commonPosition =
    (attributes.instancePositions +
      (attributes.positions.xy + vec2<f32>(1.0)) * 0.5 * column.coverage) *
      grid.sizeCommon +
    grid.originCommon -
    project.commonOrigin.xy;
  geometry.position = vec4<f32>(commonPosition, 0.0, 1.0);
  geometry.normal = project_normal(attributes.normals);

  if (column.extruded > 0.5) {
    var elevation = interpolate(
      attributes.instanceElevationValues,
      grid.elevationDomain.xy,
      grid.elevationRange
    );
    elevation = project_size_float(elevation);
    geometry.position.z = (attributes.positions.z + 1.0) * 0.5 * elevation;
  }

  output.position = project_common_position_to_clipspace(geometry.position);
  var colorValue = sampleColorRange(attributes.instanceColorValues, grid.colorDomain.xy);
  if (column.extruded > 0.5) {
    colorValue = vec4<f32>(
      lighting_getLightColor2(
        colorValue.rgb,
        project.cameraPosition,
        geometry.position.xyz,
        geometry.normal
      ),
      colorValue.a
    );
  }
  output.color = vec4<f32>(colorValue.rgb, colorValue.a * layer.opacity);
  return output;
}

@fragment
fn fragmentMain(varyings: Varyings) -> @location(0) vec4<f32> {
  if (picking.isActive > 0.5) {
    if (!picking_isColorValid(varyings.pickingColor)) {
      discard;
    }
    return vec4<f32>(varyings.pickingColor, 1.0);
  }

  var color = varyings.color;
  if (picking.isHighlightActive > 0.5) {
    let highlightedObjectColor = picking_normalizeColor(picking.highlightedObjectColor);
    if (picking_isColorZero(abs(varyings.pickingColor - highlightedObjectColor))) {
      let highlightAlpha = picking.highlightColor.a;
      let blendedAlpha = highlightAlpha + color.a * (1.0 - highlightAlpha);
      if (blendedAlpha > 0.0) {
        let highlightRatio = highlightAlpha / blendedAlpha;
        color = vec4<f32>(
          mix(color.rgb, picking.highlightColor.rgb, highlightRatio),
          blendedAlpha
        );
      } else {
        color = vec4<f32>(color.rgb, 0.0);
      }
    }
  }

  return deckgl_premultiplied_alpha(color);
}
`,qe=`#version 300 es
#define SHADER_NAME grid-cell-layer-vertex-shader
in vec3 positions;
in vec3 normals;
in vec2 instancePositions;
in float instanceElevationValues;
in float instanceColorValues;
uniform sampler2D colorRange;
out vec4 vColor;
float interp(float value, vec2 domain, vec2 range) {
float r = min(max((value - domain.x) / (domain.y - domain.x), 0.), 1.);
return mix(range.x, range.y, r);
}
vec4 interp(float value, vec2 domain, sampler2D range) {
float r = (value - domain.x) / (domain.y - domain.x);
return texture(range, vec2(r, 0.5));
}
void main(void) {
geometry.pickingColor = picking_getPickingColorFromInstanceID();
if (isnan(instanceColorValues) ||
instanceColorValues < grid.colorDomain.z ||
instanceColorValues > grid.colorDomain.w ||
instanceElevationValues < grid.elevationDomain.z ||
instanceElevationValues > grid.elevationDomain.w
) {
gl_Position = vec4(0.);
return;
}
vec2 commonPosition = (instancePositions + (positions.xy + 1.0) / 2.0 * column.coverage) * grid.sizeCommon + grid.originCommon - project.commonOrigin.xy;
geometry.position = vec4(commonPosition, 0.0, 1.0);
geometry.normal = project_normal(normals);
float elevation = 0.0;
if (column.extruded) {
elevation = interp(instanceElevationValues, grid.elevationDomain.xy, grid.elevationRange);
elevation = project_size(elevation);
geometry.position.z = (positions.z + 1.0) / 2.0 * elevation;
}
gl_Position = project_common_position_to_clipspace(geometry.position);
DECKGL_FILTER_GL_POSITION(gl_Position, geometry);
vColor = interp(instanceColorValues, grid.colorDomain.xy, colorRange);
vColor.a *= layer.opacity;
if (column.extruded) {
vColor.rgb = lighting_getLightColor(vColor.rgb, project.cameraPosition, geometry.position.xyz, geometry.normal);
}
DECKGL_FILTER_COLOR(vColor, geometry);
}
`,Ye=`struct gridUniforms {
  colorDomain: vec4<f32>,
  elevationDomain: vec4<f32>,
  elevationRange: vec2<f32>,
  originCommon: vec2<f32>,
  sizeCommon: vec2<f32>,
};

@group(0) @binding(auto) var<uniform> grid: gridUniforms;
@group(0) @binding(auto) var colorRange: texture_2d<f32>;
@group(0) @binding(auto) var colorRangeSampler: sampler;
`,Ke=`layout(std140) uniform gridUniforms {
  vec4 colorDomain;
  vec4 elevationDomain;
  vec2 elevationRange;
  vec2 originCommon;
  vec2 sizeCommon;
} grid;
`,Ze={name:"grid",source:Ye,vs:Ke,uniformTypes:{colorDomain:"vec4<f32>",elevationDomain:"vec4<f32>",elevationRange:"vec2<f32>",originCommon:"vec2<f32>",sizeCommon:"vec2<f32>"}};class ne extends G{getShaders(){const e=super.getShaders();return e.modules.push(Ze),{...e,source:Xe,vs:qe}}initializeState(){super.initializeState();const e=this.getAttributeManager();e.remove(["instanceElevations","instanceFillColors","instanceLineColors","instanceStrokeWidths"]),e.addInstanced({instancePositions:{size:2,type:"float32",accessor:"getBin"},instanceColorValues:{size:1,type:"float32",accessor:"getColorValue"},instanceElevationValues:{size:1,type:"float32",accessor:"getElevationValue"}})}updateState(e){var n;super.updateState(e);const{props:t,oldProps:o}=e,i=this.state.fillModel;if(o.colorRange!==t.colorRange){(n=this.state.colorTexture)==null||n.destroy(),this.state.colorTexture=J(this.context.device,t.colorRange,t.colorScaleType);const a={colorRange:this.state.colorTexture};i.shaderInputs.setProps({grid:a})}else o.colorScaleType!==t.colorScaleType&&Q(this.state.colorTexture,t.colorScaleType)}finalizeState(e){var t;super.finalizeState(e),(t=this.state.colorTexture)==null||t.destroy()}_updateGeometry(){const e=new ue;this._setFillGeometry(e)}draw({uniforms:e}){const{cellOriginCommon:t,cellSizeCommon:o,elevationRange:i,elevationScale:n,extruded:a,coverage:s,colorDomain:l,elevationDomain:u}=this.props,c=this.props.colorCutoff||[-1/0,1/0],g=this.props.elevationCutoff||[-1/0,1/0],d=this.state.fillModel,m={colorDomain:[Math.max(l[0],c[0]),Math.min(l[1],c[1]),Math.max(l[0]-1,c[0]),Math.min(l[1]+1,c[1])],elevationDomain:[Math.max(u[0],g[0]),Math.min(u[1],g[1]),Math.max(u[0]-1,g[0]),Math.min(u[1]+1,g[1])],elevationRange:[i[0]*n,i[1]*n],originCommon:t,sizeCommon:o};d.shaderInputs.setProps({column:{extruded:a,coverage:s},grid:m}),d.draw(this.context.renderPass)}}ne.layerName="GridCellLayer";const Qe=`layout(std140) uniform binOptionsUniforms {
  vec2 cellOriginCommon;
  vec2 cellSizeCommon;
} binOptions;
`,Je={name:"binOptions",vs:Qe,uniformTypes:{cellOriginCommon:"vec2<f32>",cellSizeCommon:"vec2<f32>"}};function j(){}const et={gpuAggregation:!0,colorDomain:null,colorRange:Z,getColorValue:{type:"accessor",value:null},getColorWeight:{type:"accessor",value:1},colorAggregation:"SUM",lowerPercentile:{type:"number",min:0,max:100,value:0},upperPercentile:{type:"number",min:0,max:100,value:100},colorScaleType:"quantize",onSetColorDomain:j,elevationDomain:null,elevationRange:[0,1e3],getElevationValue:{type:"accessor",value:null},getElevationWeight:{type:"accessor",value:1},elevationAggregation:"SUM",elevationScale:{type:"number",min:0,value:1},elevationLowerPercentile:{type:"number",min:0,max:100,value:0},elevationUpperPercentile:{type:"number",min:0,max:100,value:100},elevationScaleType:"linear",onSetElevationDomain:j,cellSize:{type:"number",min:0,value:1e3},coverage:{type:"number",min:0,max:1,value:1},getPosition:{type:"accessor",value:r=>r.position},gridAggregator:{type:"function",optional:!0,value:null},extruded:!1,material:!0};class ae extends L{getAggregatorType(){const{gpuAggregation:e,gridAggregator:t,getColorValue:o,getElevationValue:i}=this.props;return e&&(t||o||i)?(E.warn("Features not supported by GPU aggregation, falling back to CPU")(),"cpu"):e&&x.isSupported(this.context.device)?"gpu":"cpu"}createAggregator(e){if(e==="cpu"){const{gridAggregator:t,cellSize:o}=this.props;return new q({dimensions:2,getBin:{sources:["positions"],getValue:({positions:i},n,a)=>{if(t)return t(i,o);const l=this.state.aggregatorViewport.projectPosition(i),{cellSizeCommon:u,cellOriginCommon:c}=a;return[Math.floor((l[0]-c[0])/u[0]),Math.floor((l[1]-c[1])/u[1])]}},getValue:[{sources:["colorWeights"],getValue:({colorWeights:i})=>i},{sources:["elevationWeights"],getValue:({elevationWeights:i})=>i}]})}return new x(this.context.device,{dimensions:2,channelCount:2,bufferLayout:this.getAttributeManager().getBufferLayouts({isInstanced:!1}),...super.getShaders({modules:[W,Je],vs:`
  in vec3 positions;
  in vec3 positions64Low;
  in float colorWeights;
  in float elevationWeights;

  void getBin(out ivec2 binId) {
    vec3 positionCommon = project_position(positions, positions64Low);
    vec2 gridCoords = floor(positionCommon.xy / binOptions.cellSizeCommon);
    binId = ivec2(gridCoords);
  }
  void getValue(out vec2 value) {
    value = vec2(colorWeights, elevationWeights);
  }
  `})})}initializeState(){super.initializeState(),this.getAttributeManager().add({positions:{size:3,accessor:"getPosition",type:"float64",fp64:this.use64bitPositions()},colorWeights:{size:1,accessor:"getColorWeight"},elevationWeights:{size:1,accessor:"getElevationWeight"}})}updateState(e){const t=super.updateState(e),{props:o,oldProps:i,changeFlags:n}=e,{aggregator:a}=this.state;if((n.dataChanged||!this.state.dataAsArray)&&(o.getColorValue||o.getElevationValue)&&(this.state.dataAsArray=Array.from(H(o.data).iterable)),t||n.dataChanged||o.cellSize!==i.cellSize||o.getColorValue!==i.getColorValue||o.getElevationValue!==i.getElevationValue||o.colorAggregation!==i.colorAggregation||o.elevationAggregation!==i.elevationAggregation){this._updateBinOptions();const{cellSizeCommon:s,cellOriginCommon:l,binIdRange:u,dataAsArray:c}=this.state;if(a.setProps({binIdRange:u,pointCount:this.getNumInstances(),operations:[o.colorAggregation,o.elevationAggregation],binOptions:{cellSizeCommon:s,cellOriginCommon:l},onUpdate:this._onAggregationUpdate.bind(this)}),c){const{getColorValue:g,getElevationValue:d}=this.props;a.setProps({customOperations:[g&&(m=>g(m.map(f=>c[f]),{indices:m,data:o.data})),d&&(m=>d(m.map(f=>c[f]),{indices:m,data:o.data}))]})}}return n.updateTriggersChanged&&n.updateTriggersChanged.getColorValue&&a.setNeedsUpdate(0),n.updateTriggersChanged&&n.updateTriggersChanged.getElevationValue&&a.setNeedsUpdate(1),t}_updateBinOptions(){const e=this.getBounds(),t=[1,1];let o=[0,0],i=[[0,1],[0,1]],n=this.context.viewport;if(e&&Number.isFinite(e[0][0])){let a=[(e[0][0]+e[1][0])/2,(e[0][1]+e[1][1])/2];const{cellSize:s}=this.props,{unitsPerMeter:l}=n.getDistanceScales(a);t[0]=l[0]*s,t[1]=l[1]*s;const u=n.projectFlat(a);o=[Math.floor(u[0]/t[0])*t[0],Math.floor(u[1]/t[1])*t[1]],a=n.unprojectFlat(o);const c=n.constructor;n=n.isGeospatial?new c({longitude:a[0],latitude:a[1],zoom:12}):new $({position:[a[0],a[1],0],zoom:12}),o=[Math.fround(n.center[0]),Math.fround(n.center[1])],i=ee({dataBounds:e,getBinId:g=>{const d=n.projectFlat(g);return[Math.floor((d[0]-o[0])/t[0]),Math.floor((d[1]-o[1])/t[1])]}})}this.setState({cellSizeCommon:t,cellOriginCommon:o,binIdRange:i,aggregatorViewport:n})}draw(e){e.shaderModuleProps.project&&(e.shaderModuleProps.project.viewport=this.state.aggregatorViewport),super.draw(e)}_onAggregationUpdate({channel:e}){const t=this.getCurrentLayer().props,{aggregator:o}=this.state;if(e===0){const i=o.getResult(0);this.setState({colors:new A(i,o.binCount)}),t.onSetColorDomain(o.getResultDomain(0))}else if(e===1){const i=o.getResult(1);this.setState({elevations:new A(i,o.binCount)}),t.onSetElevationDomain(o.getResultDomain(1))}}onAttributeChange(e){const{aggregator:t}=this.state;switch(e){case"positions":t.setNeedsUpdate(),this._updateBinOptions();const{cellSizeCommon:o,cellOriginCommon:i,binIdRange:n}=this.state;t.setProps({binIdRange:n,binOptions:{cellSizeCommon:o,cellOriginCommon:i}});break;case"colorWeights":t.setNeedsUpdate(0);break;case"elevationWeights":t.setNeedsUpdate(1);break}}renderLayers(){var b,C;const{aggregator:e,cellOriginCommon:t,cellSizeCommon:o}=this.state,{elevationScale:i,colorRange:n,elevationRange:a,extruded:s,coverage:l,material:u,transitions:c,colorScaleType:g,lowerPercentile:d,upperPercentile:m,colorDomain:f,elevationScaleType:_,elevationLowerPercentile:M,elevationUpperPercentile:P,elevationDomain:T}=this.props,D=this.getSubLayerClass("cells",ne),v=e.getBins(),h=(b=this.state.colors)==null?void 0:b.update({scaleType:g,lowerPercentile:d,upperPercentile:m}),p=(C=this.state.elevations)==null?void 0:C.update({scaleType:_,lowerPercentile:M,upperPercentile:P});return!h||!p?null:new D(this.getSubLayerProps({id:"cells"}),{data:{length:e.binCount,attributes:{getBin:v,getColorValue:h.attribute,getElevationValue:p.attribute}},dataComparator:(w,N)=>w.length===N.length,updateTriggers:{getBin:[v],getColorValue:[h.attribute],getElevationValue:[p.attribute]},cellOriginCommon:t,cellSizeCommon:o,elevationScale:i,colorRange:n,colorScaleType:g,elevationRange:a,extruded:s,coverage:l,material:u,colorDomain:h.domain||f||e.getResultDomain(0),elevationDomain:p.domain||T||e.getResultDomain(1),colorCutoff:h.cutoff,elevationCutoff:p.cutoff,transitions:c&&{getFillColor:c.getColorValue||c.getColorWeight,getElevation:c.getElevationValue||c.getElevationWeight},extensions:[]})}getPickingInfo(e){const t=e.info,{index:o}=t;if(o>=0){const i=this.state.aggregator.getBin(o);let n;i&&(n={col:i.id[0],row:i.id[1],colorValue:i.value[0],elevationValue:i.value[1],count:i.count},i.pointIndices&&(n.pointIndices=i.pointIndices,n.points=Array.isArray(this.props.data)?i.pointIndices.map(a=>this.props.data[a]):[])),t.object=n}return t}}ae.layerName="GridLayer";ae.defaultProps=et;export{q as CPUAggregator,ae as GridLayer,ie as HexagonLayer,x as WebGLAggregator,L as _AggregationLayer};
