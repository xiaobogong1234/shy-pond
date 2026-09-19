const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./index-B3DTSFHT.js","./expression-Bl_GL2tO.js","./useDeck-CyF5ro6x.js","./index-9vIL5KkC.js","./cesium-utSEP5if.js","./index-D6p4bqtD.css","./linkSync-CPWjq_gk.js","./index-DbQH83pR.js"])))=>i.map(i=>d[i]);
var cu=Object.defineProperty;var uu=(n,e,t)=>e in n?cu(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var l=(n,e,t)=>uu(n,typeof e!="symbol"?e+"":e,t);import{i as oa,b as lu,n as fu,P as Di,d as te,c as he,t as $i,m as vs,U as un,e as du,s as hu,W as gu,f as Yr,g as nn,j as Te,T as ki,k as pu,l as mu,o as kt,w as bu}from"./useDeck-CyF5ro6x.js";import{s as xs}from"./index-9vIL5KkC.js";function Ss(n,e){if(!n)throw new Error(e||"loader assertion failed.")}const aa=!!(typeof process!="object"||String(process)!=="[object process]"||process.browser),Es=typeof process<"u"&&process.version&&/v([0-9]*)/.exec(process.version);Es&&parseFloat(Es[1]);function _u(n){return oa()?lu()?"Electron":(fu.userAgent||"").indexOf("Edge")>-1?"Edge":globalThis.chrome?"Chrome":globalThis.safari?"Safari":globalThis.mozInnerScreenX?"Firefox":"Unknown":"Node"}const or="4.5.1",yu=or[0]>="0"&&or[0]<="9"?`v${or}`:"";function wu(){const n=new Di({id:"loaders.gl"});return globalThis.loaders||(globalThis.loaders={}),globalThis.loaders.log=n,globalThis.loaders.version=yu,globalThis.probe||(globalThis.probe={}),globalThis.probe.loaders=n,n}const vu=wu(),xu=n=>typeof n=="boolean",ce=n=>typeof n=="function",ke=n=>n!==null&&typeof n=="object",As=n=>ke(n)&&n.constructor==={}.constructor,ca=n=>typeof SharedArrayBuffer<"u"&&n instanceof SharedArrayBuffer,Ui=n=>ke(n)&&typeof n.byteLength=="number"&&typeof n.slice=="function",Su=n=>!!n&&ce(n[Symbol.iterator]),Eu=n=>!!n&&ce(n[Symbol.asyncIterator]),Ue=n=>typeof Response<"u"&&n instanceof Response||ke(n)&&ce(n.arrayBuffer)&&ce(n.text)&&ce(n.json),Ne=n=>typeof Blob<"u"&&n instanceof Blob,Au=n=>typeof ReadableStream<"u"&&n instanceof ReadableStream||ke(n)&&ce(n.tee)&&ce(n.cancel)&&ce(n.getReader),Tu=n=>ke(n)&&ce(n.read)&&ce(n.pipe)&&xu(n.readable),ua=n=>Au(n)||Tu(n);function Lu(n,e){return la(n||{},e)}function la(n,e,t=0){if(t>3)return e;const r={...n};for(const[i,s]of Object.entries(e))s&&typeof s=="object"&&!Array.isArray(s)?r[i]=la(r[i]||{},e[i],t+1):r[i]=e[i];return r}const Pu="latest";function Bu(){var n;return(n=globalThis._loadersgl_)!=null&&n.version||(globalThis._loadersgl_=globalThis._loadersgl_||{},globalThis._loadersgl_.version="4.5.1"),globalThis._loadersgl_.version}const Cu=Bu();function xe(n,e){if(!n)throw new Error(e||"loaders.gl assertion failed.")}const Be=typeof process!="object"||String(process)!=="[object process]"||process.browser,Nv=typeof importScripts=="function",Iu=typeof window<"u"&&typeof window.orientation<"u",Ts=typeof process<"u"&&process.version&&/v([0-9]*)/.exec(process.version);Ts&&parseFloat(Ts[1]);class Ou{constructor(e,t){l(this,"name");l(this,"workerThread");l(this,"isRunning",!0);l(this,"result");l(this,"_resolve",()=>{});l(this,"_reject",()=>{});this.name=e,this.workerThread=t,this.result=new Promise((r,i)=>{this._resolve=r,this._reject=i})}postMessage(e,t){this.workerThread.postMessage({source:"loaders.gl",type:e,payload:t})}done(e){xe(this.isRunning),this.isRunning=!1,this._resolve(e)}error(e){xe(this.isRunning),this.isRunning=!1,this._reject(e)}}class ar{terminate(){}}const cr=new Map;function Ru(n){xe(n.source&&!n.url||!n.source&&n.url);let e=cr.get(n.source||n.url);return e||(n.url&&(e=Mu(n.url),cr.set(n.url,e)),n.source&&(e=fa(n.source),cr.set(n.source,e))),xe(e),e}function Mu(n){if(!n.startsWith("http"))return n;const e=Du(n);return fa(e)}function fa(n){const e=new Blob([n],{type:"application/javascript"});return URL.createObjectURL(e)}function Du(n){return`try {
  importScripts('${n}');
} catch (error) {
  console.error(error);
  throw error;
}`}function da(n,e=!0,t){const r=t||new Set;if(n){if(Ls(n))r.add(n);else if(Ls(n.buffer))r.add(n.buffer);else if(!ArrayBuffer.isView(n)){if(e&&typeof n=="object")for(const i in n)da(n[i],e,r)}}return t===void 0?Array.from(r):[]}function Ls(n){return n?n instanceof ArrayBuffer||typeof MessagePort<"u"&&n instanceof MessagePort||typeof ImageBitmap<"u"&&n instanceof ImageBitmap||typeof OffscreenCanvas<"u"&&n instanceof OffscreenCanvas:!1}const ur=()=>{};class qr{constructor(e){l(this,"name");l(this,"source");l(this,"url");l(this,"terminated",!1);l(this,"worker");l(this,"onMessage");l(this,"onError");l(this,"_loadableURL","");const{name:t,source:r,url:i}=e;xe(r||i),this.name=t,this.source=r,this.url=i,this.onMessage=ur,this.onError=s=>console.log(s),this.worker=Be?this._createBrowserWorker():this._createNodeWorker()}static isSupported(){return typeof Worker<"u"&&Be||typeof ar<"u"&&!Be}destroy(){this.onMessage=ur,this.onError=ur,this.worker.terminate(),this.terminated=!0}get isRunning(){return!!this.onMessage}postMessage(e,t){t=t||da(e),this.worker.postMessage(e,t)}_getErrorFromErrorEvent(e){let t="Failed to load ";return t+=`worker ${this.name} from ${this.url}. `,e.message&&(t+=`${e.message} in `),e.lineno&&(t+=`:${e.lineno}:${e.colno}`),new Error(t)}_createBrowserWorker(){this._loadableURL=Ru({source:this.source,url:this.url});const e=new Worker(this._loadableURL,{name:this.name});return e.onmessage=t=>{t.data?this.onMessage(t.data):this.onError(new Error("No data received"))},e.onerror=t=>{this.onError(this._getErrorFromErrorEvent(t)),this.terminated=!0},e.onmessageerror=t=>console.error(t),e}_createNodeWorker(){let e;if(this.url){const r=this.url.includes(":/")||this.url.startsWith("/")?this.url:`./${this.url}`,i=this.url.endsWith(".ts")||this.url.endsWith(".mjs")?"module":"commonjs";e=new ar(r,{eval:!1,type:i})}else if(this.source)e=new ar(this.source,{eval:!0});else throw new Error("no worker");return e.on("message",t=>{this.onMessage(t)}),e.on("error",t=>{this.onError(t)}),e.on("exit",t=>{}),e}}class $u{constructor(e){l(this,"name","unnamed");l(this,"source");l(this,"url");l(this,"maxConcurrency",1);l(this,"maxMobileConcurrency",1);l(this,"onDebug",()=>{});l(this,"reuseWorkers",!0);l(this,"props",{});l(this,"jobQueue",[]);l(this,"idleQueue",[]);l(this,"count",0);l(this,"isDestroyed",!1);this.source=e.source,this.url=e.url,this.setProps(e)}static isSupported(){return qr.isSupported()}destroy(){this.idleQueue.forEach(e=>e.destroy()),this.isDestroyed=!0}setProps(e){this.props={...this.props,...e},e.name!==void 0&&(this.name=e.name),e.maxConcurrency!==void 0&&(this.maxConcurrency=e.maxConcurrency),e.maxMobileConcurrency!==void 0&&(this.maxMobileConcurrency=e.maxMobileConcurrency),e.reuseWorkers!==void 0&&(this.reuseWorkers=e.reuseWorkers),e.onDebug!==void 0&&(this.onDebug=e.onDebug)}async startJob(e,t=(i,s,o)=>i.done(o),r=(i,s)=>i.error(s)){const i=new Promise(s=>(this.jobQueue.push({name:e,onMessage:t,onError:r,onStart:s}),this));return this._startQueuedJob(),await i}async _startQueuedJob(){if(!this.jobQueue.length)return;const e=this._getAvailableWorker();if(!e)return;const t=this.jobQueue.shift();if(t){this.onDebug({message:"Starting job",name:t.name,workerThread:e,backlog:this.jobQueue.length});const r=new Ou(t.name,e);e.onMessage=i=>t.onMessage(r,i.type,i.payload),e.onError=i=>t.onError(r,i),t.onStart(r);try{await r.result}catch(i){console.error(`Worker exception: ${i}`)}finally{this.returnWorkerToQueue(e)}}}returnWorkerToQueue(e){!Be||this.isDestroyed||!this.reuseWorkers||this.count>this._getMaxConcurrency()?(e.destroy(),this.count--):this.idleQueue.push(e),this.isDestroyed||this._startQueuedJob()}_getAvailableWorker(){if(this.idleQueue.length>0)return this.idleQueue.shift()||null;if(this.count<this._getMaxConcurrency()){this.count++;const e=`${this.name.toLowerCase()} (#${this.count} of ${this.maxConcurrency})`;return new qr({name:e,source:this.source,url:this.url})}return null}_getMaxConcurrency(){return Iu?this.maxMobileConcurrency:this.maxConcurrency}}const ku={maxConcurrency:3,maxMobileConcurrency:1,reuseWorkers:!0,onDebug:()=>{}},be=class be{constructor(e){l(this,"props");l(this,"workerPools",new Map);this.props={...ku},this.setProps(e),this.workerPools=new Map}static isSupported(){return qr.isSupported()}static getWorkerFarm(e={}){return be._workerFarm=be._workerFarm||new be({}),be._workerFarm.setProps(e),be._workerFarm}destroy(){for(const e of this.workerPools.values())e.destroy();this.workerPools=new Map}setProps(e){this.props={...this.props,...e};for(const t of this.workerPools.values())t.setProps(this._getWorkerPoolProps())}getWorkerPool(e){const{name:t,source:r,url:i}=e;let s=this.workerPools.get(t);return s||(s=new $u({name:t,source:r,url:i}),s.setProps(this._getWorkerPoolProps()),this.workerPools.set(t,s)),s}_getWorkerPoolProps(){return{maxConcurrency:this.props.maxConcurrency,maxMobileConcurrency:this.props.maxMobileConcurrency,reuseWorkers:this.props.reuseWorkers,onDebug:this.props.onDebug}}};l(be,"_workerFarm");let ln=be;function Uu(n,e={}){var o;const t=e[n.id]||{},r=Be?`${n.id}-worker.js`:`${n.id}-worker-node.js`;let i=t.workerUrl;if(!i&&n.id==="compression"&&(i=e.workerUrl),(e._workerType||((o=e==null?void 0:e.core)==null?void 0:o._workerType))==="test"&&(Be?i=`modules/${n.module}/dist/${r}`:i=`modules/${n.module}/src/workers/${n.id}-worker-node.ts`),!i){let a=n.version;a==="latest"&&(a=Pu);const c=a?`@${a}`:"";i=`https://unpkg.com/@loaders.gl/${n.module}${c}/dist/${r}`}return xe(i),i}function Nu(n,e=Cu){xe(n,"no worker provided");const t=n.version;return!(!e||!t)}function Fu(n,e){var i,s;if(!ln.isSupported())return!1;const t=(e==null?void 0:e._nodeWorkers)??((i=e==null?void 0:e.core)==null?void 0:i._nodeWorkers);if(!Be&&!t)return!1;const r=(e==null?void 0:e.worker)??((s=e==null?void 0:e.core)==null?void 0:s.worker);return!!(n.worker&&r)}async function Gu(n,e,t,r,i){const s=n.id,o=Uu(n,t),c=ln.getWorkerFarm(t==null?void 0:t.core).getWorkerPool({name:s,url:o});t=JSON.parse(JSON.stringify(t)),r=JSON.parse(JSON.stringify(r||{}));const u=await c.startJob("process-on-worker",zu.bind(null,i));return u.postMessage("process",{input:e,options:t,context:r}),await(await u.result).result}async function zu(n,e,t,r){switch(t){case"done":e.done(r);break;case"error":e.error(new Error(r.error));break;case"process":const{id:i,input:s,options:o}=r;try{const a=await n(s,o);e.postMessage("done",{id:i,result:a})}catch(a){const c=a instanceof Error?a.message:"unknown error";e.postMessage("error",{id:i,error:c})}break;default:console.warn(`parse-with-worker unknown message ${t}`)}}function Wu(n,e,t){if(t=t||n.byteLength,n.byteLength<t||e.byteLength<t)return!1;const r=new Uint8Array(n),i=new Uint8Array(e);for(let s=0;s<r.length;++s)if(r[s]!==i[s])return!1;return!0}function ju(...n){return Vu(n)}function Vu(n){const e=n.map(s=>s instanceof ArrayBuffer?new Uint8Array(s):s),t=e.reduce((s,o)=>s+o.byteLength,0),r=new Uint8Array(t);let i=0;for(const s of e)r.set(s,i),i+=s.byteLength;return r.buffer}function Fv(n,e,t){const r=t!==void 0?new Uint8Array(n).subarray(e,e+t):new Uint8Array(n).subarray(e);return new Uint8Array(r).buffer}async function Hu(n){const e=[];for await(const t of n)e.push(Yu(t));return ju(...e)}function Yu(n){if(n instanceof ArrayBuffer)return n;if(ArrayBuffer.isView(n)){const{buffer:e,byteOffset:t,byteLength:r}=n;return Ps(e,t,r)}return Ps(n)}function Ps(n,e=0,t=n.byteLength-e){const r=new Uint8Array(n,e,t),i=new Uint8Array(r.length);return i.set(r),i.buffer}function Bs(){let n;if(typeof window<"u"&&window.performance)n=window.performance.now();else if(typeof process<"u"&&process.hrtime){const e=process.hrtime();n=e[0]*1e3+e[1]/1e6}else n=Date.now();return n}class Cs{constructor(e,t){this.sampleSize=1,this.time=0,this.count=0,this.samples=0,this.lastTiming=0,this.lastSampleTime=0,this.lastSampleCount=0,this._count=0,this._time=0,this._samples=0,this._startTime=0,this._timerPending=!1,this.name=e,this.type=t,this.reset()}reset(){return this.time=0,this.count=0,this.samples=0,this.lastTiming=0,this.lastSampleTime=0,this.lastSampleCount=0,this._count=0,this._time=0,this._samples=0,this._startTime=0,this._timerPending=!1,this}setSampleSize(e){return this.sampleSize=e,this}incrementCount(){return this.addCount(1),this}decrementCount(){return this.subtractCount(1),this}addCount(e){return this._count+=e,this._samples++,this._checkSampling(),this}subtractCount(e){return this._count-=e,this._samples++,this._checkSampling(),this}addTime(e){return this._time+=e,this.lastTiming=e,this._samples++,this._checkSampling(),this}timeStart(){return this._startTime=Bs(),this._timerPending=!0,this}timeEnd(){return this._timerPending?(this.addTime(Bs()-this._startTime),this._timerPending=!1,this._checkSampling(),this):this}getSampleAverageCount(){return this.sampleSize>0?this.lastSampleCount/this.sampleSize:0}getSampleAverageTime(){return this.sampleSize>0?this.lastSampleTime/this.sampleSize:0}getSampleHz(){return this.lastSampleTime>0?this.sampleSize/(this.lastSampleTime/1e3):0}getAverageCount(){return this.samples>0?this.count/this.samples:0}getAverageTime(){return this.samples>0?this.time/this.samples:0}getHz(){return this.time>0?this.samples/(this.time/1e3):0}_checkSampling(){this._samples===this.sampleSize&&(this.lastSampleTime=this._time,this.lastSampleCount=this._count,this.count+=this._count,this.time+=this._time,this.samples+=this._samples,this._time=0,this._count=0,this._samples=0)}}class qu{constructor(e){this.stats={},this.id=e.id,this.stats={},this._initializeStats(e.stats),Object.seal(this)}get(e,t="count"){return this._getOrCreate({name:e,type:t})}get size(){return Object.keys(this.stats).length}reset(){for(const e of Object.values(this.stats))e.reset();return this}forEach(e){for(const t of Object.values(this.stats))e(t)}getTable(){const e={};return this.forEach(t=>{e[t.name]={time:t.time||0,count:t.count||0,average:t.getAverageTime()||0,hz:t.getHz()||0}}),e}_initializeStats(e=[]){e.forEach(t=>this._getOrCreate(t))}_getOrCreate(e){const{name:t,type:r}=e;let i=this.stats[t];return i||(e instanceof Cs?i=e:i=new Cs(t,r),this.stats[t]=i),i}}let Qu="";const Is={};function Xu(n){for(const e in Is)if(n.startsWith(e)){const t=Is[e];n=n.replace(e,t)}return!n.startsWith("http://")&&!n.startsWith("https://")&&(n=`${Qu}${n}`),n}function ha(n){return n&&typeof n=="object"&&n.isBuffer}function Ni(n){if(ha(n))return n;if(n instanceof ArrayBuffer)return n;if(ca(n))return Qr(n);if(ArrayBuffer.isView(n)){const e=n.buffer;return n.byteOffset===0&&n.byteLength===n.buffer.byteLength?e:e.slice(n.byteOffset,n.byteOffset+n.byteLength)}if(typeof n=="string"){const e=n;return new TextEncoder().encode(e).buffer}if(n&&typeof n=="object"&&n._toArrayBuffer)return n._toArrayBuffer();throw new Error("toArrayBuffer")}function ga(n){if(n instanceof ArrayBuffer)return n;if(ca(n))return Qr(n);const{buffer:e,byteOffset:t,byteLength:r}=n;return e instanceof ArrayBuffer&&t===0&&r===e.byteLength?e:Qr(e,t,r)}function Qr(n,e=0,t=n.byteLength-e){const r=new Uint8Array(n,e,t),i=new Uint8Array(r.length);return i.set(r),i.buffer}function Zu(n){return ArrayBuffer.isView(n)?n:new Uint8Array(n)}function Ku(){var e;if(typeof process<"u"&&typeof process.cwd<"u")return process.cwd();const n=(e=window.location)==null?void 0:e.pathname;return(n==null?void 0:n.slice(0,n.lastIndexOf("/")+1))||""}function pa(n){const e=n?n.lastIndexOf("/"):-1;return e>=0?n.substr(e+1):n}function ma(n){const e=n?n.lastIndexOf("/"):-1;return e>=0?n.substr(0,e):""}function Gv(...n){const e=[];for(let s=0;s<n.length;s++)e[s]=n[s];let t="",r=!1,i;for(let s=e.length-1;s>=-1&&!r;s--){let o;s>=0?o=e[s]:(i===void 0&&(i=Ku()),o=i),o.length!==0&&(t=`${o}/${t}`,r=o.charCodeAt(0)===lt)}return t=Ju(t,!r),r?`/${t}`:t.length>0?t:"."}const lt=47,lr=46;function Ju(n,e){let t="",r=-1,i=0,s,o=!1;for(let a=0;a<=n.length;++a){if(a<n.length)s=n.charCodeAt(a);else{if(s===lt)break;s=lt}if(s===lt){if(!(r===a-1||i===1))if(r!==a-1&&i===2){if(t.length<2||!o||t.charCodeAt(t.length-1)!==lr||t.charCodeAt(t.length-2)!==lr){if(t.length>2){const c=t.length-1;let u=c;for(;u>=0&&t.charCodeAt(u)!==lt;--u);if(u!==c){t=u===-1?"":t.slice(0,u),r=a,i=0,o=!1;continue}}else if(t.length===2||t.length===1){t="",r=a,i=0,o=!1;continue}}e&&(t.length>0?t+="/..":t="..",o=!0)}else{const c=n.slice(r+1,a);t.length>0?t+=`/${c}`:t=c,o=!1}r=a,i=0}else s===lr&&i!==-1?++i:i=-1}return t}class el extends Error{constructor(t,r){super(t);l(this,"reason");l(this,"url");l(this,"response");this.reason=r.reason,this.url=r.url,this.response=r.response}}const tl=/^data:([-\w.]+\/[-\w.+]+)(;|,)/,nl=/^([-\w.]+\/[-\w.+]+)/;function Os(n,e){return n.toLowerCase()===e.toLowerCase()}function rl(n){const e=nl.exec(n);return e?e[1]:n}function Rs(n){const e=tl.exec(n);return e?e[1]:""}const ba=/\?.*/;function il(n){const e=n.match(ba);return e&&e[0]}function Qn(n){return n.replace(ba,"")}function sl(n){if(n.length<50)return n;const e=n.slice(n.length-15);return`${n.substr(0,32)}...${e}`}function Xn(n){return Ue(n)?n.url:Ne(n)?("name"in n?n.name:"")||"":typeof n=="string"?n:""}function Zn(n){if(Ue(n)){const e=n.headers.get("content-type")||"",t=Qn(n.url);return rl(e)||Rs(t)}return Ne(n)?n.type||"":typeof n=="string"?Rs(n):""}function ol(n){return Ue(n)?n.headers["content-length"]||-1:Ne(n)?n.size:typeof n=="string"?n.length:n instanceof ArrayBuffer||ArrayBuffer.isView(n)?n.byteLength:-1}async function _a(n){if(Ue(n))return n;const e={},t=ol(n);t>=0&&(e["content-length"]=String(t));const r=Xn(n),i=Zn(n);i&&(e["content-type"]=i);const s=await ul(n);s&&(e["x-first-bytes"]=s),typeof n=="string"&&(n=new TextEncoder().encode(n));const o=new Response(n,{headers:e});return Object.defineProperty(o,"url",{value:r}),o}async function al(n){if(!n.ok)throw await cl(n)}async function cl(n){const e=sl(n.url);let t=`Failed to fetch resource (${n.status}) ${n.statusText}: ${e}`;t=t.length>100?`${t.slice(0,100)}...`:t;const r={reason:n.statusText,url:n.url,response:n};try{const i=n.headers.get("Content-Type");r.reason=!n.bodyUsed&&(i!=null&&i.includes("application/json"))?await n.json():await n.text()}catch{}return new el(t,r)}async function ul(n){if(typeof n=="string")return`data:,${n.slice(0,5)}`;if(n instanceof Blob){const t=n.slice(0,5);return await new Promise(r=>{const i=new FileReader;i.onload=s=>{var o;return r((o=s==null?void 0:s.target)==null?void 0:o.result)},i.readAsDataURL(t)})}if(n instanceof ArrayBuffer){const t=n.slice(0,5);return`data:base64,${ll(t)}`}return null}function ll(n){let e="";const t=new Uint8Array(n);for(let r=0;r<t.byteLength;r++)e+=String.fromCharCode(t[r]);return btoa(e)}function fl(n){return!dl(n)&&!hl(n)}function dl(n){return n.startsWith("http:")||n.startsWith("https:")}function hl(n){return n.startsWith("data:")}async function Ms(n,e){var t,r;if(typeof n=="string"){const i=Xu(n);return fl(i)&&(t=globalThis.loaders)!=null&&t.fetchNode?(r=globalThis.loaders)==null?void 0:r.fetchNode(i,e):await fetch(i,e)}return await _a(n)}const Ut=new Di({id:"loaders.gl"});class gl{log(){return()=>{}}info(){return()=>{}}warn(){return()=>{}}error(){return()=>{}}}class pl{constructor(){l(this,"console");this.console=console}log(...e){return this.console.log.bind(this.console,...e)}info(...e){return this.console.info.bind(this.console,...e)}warn(...e){return this.console.warn.bind(this.console,...e)}error(...e){return this.console.error.bind(this.console,...e)}}const Xr={core:{baseUrl:void 0,fetch:null,mimeType:void 0,fallbackMimeType:void 0,ignoreRegisteredLoaders:void 0,nothrow:!1,log:new pl,useLocalLibraries:!1,CDN:"https://unpkg.com/@loaders.gl",worker:!0,maxConcurrency:3,maxMobileConcurrency:1,reuseWorkers:aa,_nodeWorkers:!1,_workerType:"",limit:0,_limitMB:0,batchSize:"auto",batchDebounceMs:0,metadata:!1,transforms:[]}},ml={baseUri:"core.baseUrl",fetch:"core.fetch",mimeType:"core.mimeType",fallbackMimeType:"core.fallbackMimeType",ignoreRegisteredLoaders:"core.ignoreRegisteredLoaders",nothrow:"core.nothrow",log:"core.log",useLocalLibraries:"core.useLocalLibraries",CDN:"core.CDN",worker:"core.worker",maxConcurrency:"core.maxConcurrency",maxMobileConcurrency:"core.maxMobileConcurrency",reuseWorkers:"core.reuseWorkers",_nodeWorkers:"core.nodeWorkers",_workerType:"core._workerType",_worker:"core._workerType",limit:"core.limit",_limitMB:"core._limitMB",batchSize:"core.batchSize",batchDebounceMs:"core.batchDebounceMs",metadata:"core.metadata",transforms:"core.transforms",throws:"nothrow",dataType:"(no longer used)",uri:"core.baseUrl",method:"core.fetch.method",headers:"core.fetch.headers",body:"core.fetch.body",mode:"core.fetch.mode",credentials:"core.fetch.credentials",cache:"core.fetch.cache",redirect:"core.fetch.redirect",referrer:"core.fetch.referrer",referrerPolicy:"core.fetch.referrerPolicy",integrity:"core.fetch.integrity",keepalive:"core.fetch.keepalive",signal:"core.fetch.signal"},Fi=["baseUrl","fetch","mimeType","fallbackMimeType","ignoreRegisteredLoaders","nothrow","log","useLocalLibraries","CDN","worker","maxConcurrency","maxMobileConcurrency","reuseWorkers","_nodeWorkers","_workerType","limit","_limitMB","batchSize","batchDebounceMs","metadata","transforms"];function ya(){globalThis.loaders=globalThis.loaders||{};const{loaders:n}=globalThis;return n._state||(n._state={}),n._state}function wa(){const n=ya();return n.globalOptions=n.globalOptions||{...Xr,core:{...Xr.core}},Re(n.globalOptions)}function bl(n,e,t,r){return t=t||[],t=Array.isArray(t)?t:[t],_l(n,t),Re(wl(e,n,r))}function Re(n){const e=xl(n);va(e);for(const t of Fi)e.core&&e.core[t]!==void 0&&delete e[t];return e.core&&e.core._workerType!==void 0&&delete e._worker,e}function _l(n,e){Ds(n,null,Xr,ml,e);for(const t of e){const r=n&&n[t.id]||{},i=t.options&&t.options[t.id]||{},s=t.deprecatedOptions&&t.deprecatedOptions[t.id]||{};Ds(r,t.id,i,s,e)}}function Ds(n,e,t,r,i){const s=e||"Top level",o=e?`${e}.`:"";for(const a in n){const c=!e&&ke(n[a]),u=a==="baseUri"&&!e,f=a==="workerUrl"&&e;if(!(a in t)&&!u&&!f){if(a in r)Ut.level>0&&Ut.warn(`${s} loader option '${o}${a}' no longer supported, use '${r[a]}'`)();else if(!c&&Ut.level>0){const d=yl(a,i);Ut.warn(`${s} loader option '${o}${a}' not recognized. ${d}`)()}}}}function yl(n,e){const t=n.toLowerCase();let r="";for(const i of e)for(const s in i.options){if(n===s)return`Did you mean '${i.id}.${s}'?`;const o=s.toLowerCase();(t.startsWith(o)||o.startsWith(t))&&(r=r||`Did you mean '${i.id}.${s}'?`)}return r}function wl(n,e,t){var o;const r=n.options||{},i={...r};r.core&&(i.core={...r.core}),va(i),((o=i.core)==null?void 0:o.log)===null&&(i.core={...i.core,log:new gl}),$s(i,Re(wa()));const s=Re(e);return $s(i,s),vl(i,t),Sl(i),i}function $s(n,e){for(const t in e)if(t in e){const r=e[t];As(r)&&As(n[t])?n[t]={...n[t],...e[t]}:n[t]=e[t]}}function vl(n,e){var r;if(!e)return;((r=n.core)==null?void 0:r.baseUrl)!==void 0||(n.core||(n.core={}),n.core.baseUrl=ma(Qn(e)))}function xl(n){const e={...n};return n.core&&(e.core={...n.core}),e}function va(n){n.baseUri!==void 0&&(n.core||(n.core={}),n.core.baseUrl===void 0&&(n.core.baseUrl=n.baseUri));for(const t of Fi)if(n[t]!==void 0){const i=n.core=n.core||{};i[t]===void 0&&(i[t]=n[t])}const e=n._worker;e!==void 0&&(n.core||(n.core={}),n.core._workerType===void 0&&(n.core._workerType=e))}function Sl(n){const e=n.core;if(e)for(const t of Fi)e[t]!==void 0&&(n[t]=e[t])}function Gi(n){return n?(Array.isArray(n)&&(n=n[0]),Array.isArray(n==null?void 0:n.extensions)):!1}function zi(n){Ss(n,"null loader"),Ss(Gi(n),"invalid loader");let e;return Array.isArray(n)&&(e=n[1],n=n[0],n={...n,options:{...n.options,...e}}),(n!=null&&n.parseTextSync||n!=null&&n.parseText)&&(n.text=!0),n.text||(n.binary=!0),n}const xa=()=>{const n=ya();return n.loaderRegistry=n.loaderRegistry||[],n.loaderRegistry};function zv(n){const e=xa();n=Array.isArray(n)?n:[n];for(const t of n){const r=zi(t);e.find(i=>r===i)||e.unshift(r)}}function El(){return xa()}const Al=/\.([^.]+)$/;async function Tl(n,e=[],t,r){if(!Sa(n))return null;const i=Re(t||{});if(i.core||(i.core={}),n instanceof Response&&ks(n)){const o=await n.clone().text(),a=Nt(o,e,{...i,core:{...i.core,nothrow:!0}},r);if(a)return a}let s=Nt(n,e,{...i,core:{...i.core,nothrow:!0}},r);if(s)return s;if(Ne(n)&&(n=await n.slice(0,10).arrayBuffer(),s=Nt(n,e,i,r)),!s&&n instanceof Response&&ks(n)){const o=await n.clone().text();s=Nt(o,e,i,r)}if(!s&&!i.core.nothrow)throw new Error(Ea(n));return s}function ks(n){const e=Zn(n);return!!(e&&(e.startsWith("text/")||e==="application/json"||e.endsWith("+json")))}function Nt(n,e=[],t,r){if(!Sa(n))return null;const i=Re(t||{});if(i.core||(i.core={}),e&&!Array.isArray(e))return zi(e);let s=[];e&&(s=s.concat(e)),i.core.ignoreRegisteredLoaders||s.push(...El()),Pl(s);const o=Ll(n,s,i,r);if(!o&&!i.core.nothrow)throw new Error(Ea(n));return o}function Ll(n,e,t,r){var u,f,d,h,g;const i=Xn(n),s=Zn(n),o=Qn(i)||(r==null?void 0:r.url);let a=null,c="";return(u=t==null?void 0:t.core)!=null&&u.mimeType&&(a=fr(e,(f=t==null?void 0:t.core)==null?void 0:f.mimeType),c=`match forced by supplied MIME type ${(d=t==null?void 0:t.core)==null?void 0:d.mimeType}`),a=a||Bl(e,o),c=c||(a?`matched url ${o}`:""),a=a||fr(e,s),c=c||(a?`matched MIME type ${s}`:""),a=a||Il(e,n),c=c||(a?`matched initial data ${Aa(n)}`:""),(h=t==null?void 0:t.core)!=null&&h.fallbackMimeType&&(a=a||fr(e,(g=t==null?void 0:t.core)==null?void 0:g.fallbackMimeType),c=c||(a?`matched fallback MIME type ${s}`:"")),c&&vu.log(1,`selectLoader selected ${a==null?void 0:a.name}: ${c}.`),a}function Sa(n){return!(n instanceof Response&&n.status===204)}function Ea(n){const e=Xn(n),t=Zn(n);let r="No valid loader found (";r+=e?`${pa(e)}, `:"no url provided, ",r+=`MIME type: ${t?`"${t}"`:"not provided"}, `;const i=n?Aa(n):"";return r+=i?` first bytes: "${i}"`:"first bytes: not available",r+=")",r}function Pl(n){for(const e of n)zi(e)}function Bl(n,e){const t=e&&Al.exec(e),r=t&&t[1];return r?Cl(n,r):null}function Cl(n,e){e=e.toLowerCase();for(const t of n)for(const r of t.extensions)if(r.toLowerCase()===e)return t;return null}function fr(n,e){var t;for(const r of n)if((t=r.mimeTypes)!=null&&t.some(i=>Os(e,i))||Os(e,`application/x.${r.id}`))return r;return null}function Il(n,e){if(!e)return null;for(const t of n)if(typeof e=="string"){if(Ol(e,t))return t}else if(ArrayBuffer.isView(e)){if(Us(e.buffer,e.byteOffset,t))return t}else if(e instanceof ArrayBuffer&&Us(e,0,t))return t;return null}function Ol(n,e){return e.testText?e.testText(n):(Array.isArray(e.tests)?e.tests:[e.tests]).some(r=>n.startsWith(r))}function Us(n,e,t){return(Array.isArray(t.tests)?t.tests:[t.tests]).some(i=>Rl(n,e,t,i))}function Rl(n,e,t,r){if(Ui(r))return Wu(r,n,r.byteLength);switch(typeof r){case"function":return r(ga(n));case"string":const i=Zr(n,e,r.length);return r===i;default:return!1}}function Aa(n,e=5){return typeof n=="string"?n.slice(0,e):ArrayBuffer.isView(n)?Zr(n.buffer,n.byteOffset,e):n instanceof ArrayBuffer?Zr(n,0,e):""}function Zr(n,e,t){if(n.byteLength<e+t)return"";const r=new DataView(n);let i="";for(let s=0;s<t;s++)i+=String.fromCharCode(r.getUint8(e+s));return i}const Ml=256*1024;function*Dl(n,e){const t=(e==null?void 0:e.chunkSize)||Ml;let r=0;const i=new TextEncoder;for(;r<n.length;){const s=Math.min(n.length-r,t),o=n.slice(r,r+s);r+=s,yield ga(i.encode(o))}}const $l=256*1024;function*kl(n,e={}){const{chunkSize:t=$l}=e;let r=0;for(;r<n.byteLength;){const i=Math.min(n.byteLength-r,t),s=new ArrayBuffer(i),o=new Uint8Array(n,r,i);new Uint8Array(s).set(o),r+=i,yield s}}const Ul=1024*1024;async function*Nl(n,e){const t=(e==null?void 0:e.chunkSize)||Ul;let r=0;for(;r<n.size;){const i=r+t,s=await n.slice(r,i).arrayBuffer();r=i,yield s}}function Ns(n,e){return aa?Fl(n,e):Gl(n)}async function*Fl(n,e){const t=n.getReader();let r;try{for(;;){const i=r||t.read();e!=null&&e._streamReadAhead&&(r=t.read());const{done:s,value:o}=await i;if(s)return;yield Ni(o)}}catch{t.releaseLock()}}async function*Gl(n,e){for await(const t of n)yield Ni(t)}function zl(n,e){if(typeof n=="string")return Dl(n,e);if(n instanceof ArrayBuffer)return kl(n,e);if(Ne(n))return Nl(n,e);if(ua(n))return Ns(n,e);if(Ue(n)){const t=n.body;if(!t)throw new Error("Readable stream not available on Response");return Ns(t,e)}throw new Error("makeIterator")}const Ta="Cannot convert supplied data type";function Wl(n,e,t){if(e.text&&typeof n=="string")return n;if(ha(n)&&(n=n.buffer),Ui(n)){const r=Zu(n);return e.text&&!e.binary?new TextDecoder("utf8").decode(r):Ni(r)}throw new Error(Ta)}async function jl(n,e,t){if(typeof n=="string"||Ui(n))return Wl(n,e);if(Ne(n)&&(n=await _a(n)),Ue(n))return await al(n),e.binary?await n.arrayBuffer():await n.text();if(ua(n)&&(n=zl(n,t)),Su(n)||Eu(n))return Hu(n);throw new Error(Ta)}function La(n,e){var s;const t=wa(),r=n||t,i=r.fetch??((s=r.core)==null?void 0:s.fetch);return typeof i=="function"?i:ke(i)?o=>Ms(o,i):e!=null&&e.fetch?e==null?void 0:e.fetch:Ms}function Vl(n,e,t){if(t)return t;const r={fetch:La(e,n),...n};if(r.url){const i=Qn(r.url);r.baseUrl=i,r.queryString=il(r.url),r.filename=pa(i),r.baseUrl=ma(i)}return Array.isArray(r.loaders)||(r.loaders=null),r}function Hl(n,e){if(n&&!Array.isArray(n))return n;let t;if(n&&(t=Array.isArray(n)?n:[n]),e&&e.loaders){const r=Array.isArray(e.loaders)?e.loaders:[e.loaders];t=t?[...t,...r]:r}return t&&t.length?t:void 0}async function fn(n,e,t,r){e&&!Array.isArray(e)&&!Gi(e)&&(r=void 0,t=e,e=void 0),n=await n,t=t||{};const i=Xn(n),o=Hl(e,r),a=await Tl(n,o,t);if(!a)return null;const c=bl(t,a,o,i);return r=Vl({url:i,_parse:fn,loaders:o},c,r||null),await Yl(a,n,c,r)}async function Yl(n,e,t,r){if(Nu(n),t=Lu(n.options,t),Ue(e)){const{ok:s,redirected:o,status:a,statusText:c,type:u,url:f}=e,d=Object.fromEntries(e.headers.entries());r.response={headers:d,ok:s,redirected:o,status:a,statusText:c,type:u,url:f}}e=await jl(e,n,t);const i=n;if(i.parseTextSync&&typeof e=="string")return i.parseTextSync(e,t,r);if(Fu(n,t))return await Gu(n,e,t,r,fn);if(i.parseText&&typeof e=="string")return await i.parseText(e,t,r);if(i.parse)return await i.parse(e,t,r);throw xe(!i.parseSync),new Error(`${n.id} loader - no parser found and worker is disabled`)}function ql(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function Ql(n){return Array.isArray(n)?n.length===0||typeof n[0]=="number":!1}function Pa(n){return ql(n)||Ql(n)}async function Fs(n,e,t,r){var c;let i,s;!Array.isArray(e)&&!Gi(e)?(i=[],s=e):(i=e,s=t);const o=La(s);let a=n;return typeof n=="string"&&(a=await o(n)),Ne(n)&&(a=await o(n)),typeof n=="string"&&((c=Re(s||{}).core)!=null&&c.baseUrl||(s={...s,core:{...s==null?void 0:s.core,baseUrl:n}})),Array.isArray(i)?await fn(a,i,s):await fn(a,i,s)}let Kr={};function Wv(n){Kr=n}function q(n,e,t,r){te.level>0&&Kr[n]&&Kr[n].call(null,e,t,r)}const Z="(?:var<\\s*(uniform|storage(?:\\s*,\\s*[A-Za-z_][A-Za-z0-9_]*)?)\\s*>|var)\\s+([A-Za-z_][A-Za-z0-9_]*)",K="\\s*",Et=[new RegExp(`@binding\\(\\s*(auto|\\d+)\\s*\\)${K}@group\\(\\s*(\\d+)\\s*\\)${K}${Z}`,"g"),new RegExp(`@group\\(\\s*(\\d+)\\s*\\)${K}@binding\\(\\s*(auto|\\d+)\\s*\\)${K}${Z}`,"g")],Jr=[new RegExp(`@binding\\(\\s*(auto|\\d+)\\s*\\)${K}@group\\(\\s*(\\d+)\\s*\\)${K}${Z}`,"g"),new RegExp(`@group\\(\\s*(\\d+)\\s*\\)${K}@binding\\(\\s*(auto|\\d+)\\s*\\)${K}${Z}`,"g")],Xl=[new RegExp(`@binding\\(\\s*(\\d+)\\s*\\)${K}@group\\(\\s*(\\d+)\\s*\\)${K}${Z}`,"g"),new RegExp(`@group\\(\\s*(\\d+)\\s*\\)${K}@binding\\(\\s*(\\d+)\\s*\\)${K}${Z}`,"g")],Zl=[new RegExp(`@binding\\(\\s*(auto)\\s*\\)\\s*@group\\(\\s*(\\d+)\\s*\\)\\s*${Z}`,"g"),new RegExp(`@group\\(\\s*(\\d+)\\s*\\)\\s*@binding\\(\\s*(auto)\\s*\\)\\s*${Z}`,"g"),new RegExp(`@binding\\(\\s*(auto)\\s*\\)\\s*@group\\(\\s*(\\d+)\\s*\\)(?:[\\s\\n\\r]*@[A-Za-z_][^\\n\\r]*)*[\\s\\n\\r]*${Z}`,"g"),new RegExp(`@group\\(\\s*(\\d+)\\s*\\)\\s*@binding\\(\\s*(auto)\\s*\\)(?:[\\s\\n\\r]*@[A-Za-z_][^\\n\\r]*)*[\\s\\n\\r]*${Z}`,"g")];function Kn(n){const e=n.split("");let t=0,r=0,i=!1,s=!1,o=!1;for(;t<n.length;){const a=n[t],c=n[t+1];if(s){o?o=!1:a==="\\"?o=!0:a==='"'&&(s=!1),t++;continue}if(i){a===`
`||a==="\r"?i=!1:e[t]=" ",t++;continue}if(r>0){if(a==="/"&&c==="*"){e[t]=" ",e[t+1]=" ",r++,t+=2;continue}if(a==="*"&&c==="/"){e[t]=" ",e[t+1]=" ",r--,t+=2;continue}a!==`
`&&a!=="\r"&&(e[t]=" "),t++;continue}if(a==='"'){s=!0,t++;continue}if(a==="/"&&c==="/"){e[t]=" ",e[t+1]=" ",i=!0,t+=2;continue}if(a==="/"&&c==="*"){e[t]=" ",e[t+1]=" ",r=1,t+=2;continue}t++}return e.join("")}function Je(n,e){var i;const t=Kn(n),r=[];for(const s of e){s.lastIndex=0;let o;for(o=s.exec(t);o;){const a=s===e[0],c=o.index,u=o[0].length;r.push({match:n.slice(c,c+u),index:c,length:u,bindingToken:o[a?1:2],groupToken:o[a?2:1],accessDeclaration:(i=o[3])==null?void 0:i.trim(),name:o[4]}),o=s.exec(t)}}return r.sort((s,o)=>s.index-o.index)}function Ba(n,e,t){const r=Je(n,e);if(!r.length)return n;let i="",s=0;for(const o of r)i+=n.slice(s,o.index),i+=t(o),s=o.index+o.length;return i+=n.slice(s),i}function Ca(n){return/@binding\(\s*auto\s*\)/.test(Kn(n))}function Kl(n,e){return Je(n,e===Et||e===Jr?Zl:e).find(r=>r.bindingToken==="auto")}function Ia(n,e={}){const t=Oa(n),r=Jl(t);if(!r)return null;const i=ef(t,r);if(!i)return null;const s=nf(t,r,i);if(!s)return null;if(e.scanVertexAttributes===!1)return{attributes:[],bindings:s};const o=tf(t,r);if(!o)return null;const a=cf(t,r,i,o,e.vertexEntryPoint);return a?{attributes:a,bindings:s}:null}function Oa(n){const e=Kn(n),t=/[A-Za-z_][A-Za-z0-9_]*|(?:0[xX][0-9A-Fa-f]+|\d+)|[@(){}<>\[\]:,;=]/g,r=[];let i=t.exec(e);for(;i;)r.push({value:i[0],index:i.index}),i=t.exec(e);return r}function Jl(n){const e=[];let t=0;for(const r of n){if(r.value==="}"&&t===0)return null;e.push(t),r.value==="{"?t++:r.value==="}"&&t--}return t===0?e:null}function ef(n,e){var r,i;const t=new Map;for(let s=0;s<n.length;s++){if(e[s]!==0||n[s].value!=="alias")continue;const o=(r=n[s+1])==null?void 0:r.value;if(!It(o)||((i=n[s+2])==null?void 0:i.value)!=="="||t.has(o))return null;const a=Da(n,e,s+3,";");if(a<0||a===s+3)return null;t.set(o,dn(n.slice(s+3,a))),s=a}return t}function tf(n,e){var r,i;const t=new Map;for(let s=0;s<n.length;s++){if(e[s]!==0||n[s].value!=="struct")continue;const o=(r=n[s+1])==null?void 0:r.value,a=s+2;if(!It(o)||t.has(o)||((i=n[a])==null?void 0:i.value)!=="{")return null;const c=ji(n,a,"{","}");if(c<0)return null;t.set(o,n.slice(a+1,c)),s=c}return t}function nf(n,e,t){var o,a,c;const r=[],i=new Set,s=new Set;for(let u=0;u<n.length;u++){if(e[u]!==0||n[u].value!=="var")continue;const f=$a(n,e,u),d=n.slice(f,u),h=ei(d,"group"),g=ei(d,"binding");if(h===null||g===null||h===void 0!=(g===void 0))return null;if(h===void 0||g===void 0)continue;let p=u+1,m=[];if(((o=n[p])==null?void 0:o.value)==="<"){const S=ji(n,p,"<",">");if(S<0)return null;const E=Jn(n.slice(p+1,S),",");if(!E)return null;m=E.map(dn),p=S+1}const b=(a=n[p])==null?void 0:a.value;if(!It(b)||((c=n[p+1])==null?void 0:c.value)!==":")return null;const w=Da(n,e,p+2,";");if(w<0||w===p+2)return null;const _=Wi(dn(n.slice(p+2,w)),t);if(!_)return null;const y=rf({name:b,group:h,location:g,addressSpace:m,resourceType:_}),x=`${h}:${g}`;if(!y||i.has(x)||s.has(b))return null;r.push(y),i.add(x),s.add(b),u=w}return af(r),r.sort((u,f)=>u.group-f.group||u.location-f.location||u.name.localeCompare(f.name))}function rf(n){const{name:e,group:t,location:r,addressSpace:i,resourceType:s}=n,o={name:e,group:t,location:r};if(i[0]==="uniform"&&i.length===1)return{...o,type:"uniform"};if(i[0]==="storage"&&i.length<=2){const a=i[1]||"read";return a==="read"?{...o,type:"read-only-storage"}:a==="read_write"?{...o,type:"storage"}:null}return i.length>0?null:s==="sampler"||s==="sampler_comparison"?{...o,type:"sampler",...s==="sampler_comparison"?{samplerType:"comparison"}:{}}:s==="texture_external"?{...o,type:"external-texture"}:sf(o,s)||of(o,s)}function sf(n,e){const t=/^texture_storage_(1d|2d|2d_array|3d)<([A-Za-z0-9_]+),(read|write|read_write)>$/.exec(e);if(!t)return null;const r={read:"read-only",write:"write-only",read_write:"read-write"}[t[3]];return{...n,type:"storage",format:t[2],access:r,viewDimension:ti(t[1])}}function of(n,e){const t=/^texture_(multisampled_)?(1d|2d|2d_array|cube|cube_array|3d)<(f32|i32|u32)>$/.exec(e);if(t){if(t[1]&&t[2]!=="2d")return null;const i={f32:"float",i32:"sint",u32:"uint"}[t[3]];return{...n,type:"texture",viewDimension:ti(t[2]),sampleType:i,multisampled:!!t[1]}}const r=/^texture_depth_(multisampled_)?(2d|2d_array|cube|cube_array)$/.exec(e);return!r||r[1]&&r[2]!=="2d"?null:{...n,type:"texture",viewDimension:ti(r[2]),sampleType:"depth",multisampled:!!r[1]}}function af(n){for(const e of n){if(e.type!=="sampler"||e.samplerType||!e.name.endsWith("Sampler"))continue;const t=e.name.slice(0,-7),r=n.find(i=>i.type==="texture"&&i.name===t&&i.group===e.group);(r==null?void 0:r.sampleType)==="depth"&&(e.samplerType="non-filtering")}}function cf(n,e,t,r,i){const s=uf(n,e);if(!s)return null;const o=s.filter(g=>g.vertex),a=i?o.find(g=>g.name===i):o.length===1?o[0]:void 0;if(!a)return o.length===0&&!i?[]:null;const c=Jn(a.parameters,",");if(!c)return null;const u=[],f=new Set,d=new Set,h=new Set;for(const g of c)if(g.length>0&&!Ra({declaration:g,aliases:t,structures:r,attributes:u,attributeLocations:f,attributeNames:d,visitedStructures:h}))return null;return u.sort((g,p)=>g.location-p.location||g.name.localeCompare(p.name))}function uf(n,e){var i,s;const t=[],r=new Set;for(let o=0;o<n.length;o++){if(e[o]!==0||n[o].value!=="fn")continue;const a=(i=n[o+1])==null?void 0:i.value,c=o+2;if(!It(a)||r.has(a)||((s=n[c])==null?void 0:s.value)!=="(")return null;const u=ji(n,c,"(",")");if(u<0)return null;const f=$a(n,e,o);t.push({name:a,vertex:Ma(n.slice(f,o),"vertex"),parameters:n.slice(c+1,u)}),r.add(a),o=u}return t}function Ra(n){const{declaration:e,aliases:t,structures:r,attributes:i,attributeLocations:s,attributeNames:o,visitedStructures:a}=n,c=df(e,":");if(c<1||c===e.length-1)return!1;const u=hf(e.slice(0,c)),f=ei(e.slice(0,c),"location"),d=Ma(e.slice(0,c),"builtin"),h=Wi(dn(e.slice(c+1)),t);if(!u||f===null||!h||f!==void 0&&d)return!1;if(f!==void 0){const m=ff(h);return!m||s.has(f)||o.has(u)?!1:(i.push({name:u,location:f,type:m}),s.add(f),o.add(u),!0)}if(d)return!0;const g=r.get(h);if(!g||a.has(h))return!1;const p=Jn(g,",");if(!p)return!1;a.add(h);for(const m of p)if(m.length>0&&!Ra({...n,declaration:m}))return!1;return a.delete(h),!0}function Wi(n,e,t=new Set){const r=Oa(n);let i="";for(const s of r){const o=e.get(s.value);if(!o){i+=lf(s.value);continue}if(t.has(s.value))return null;const a=new Set(t);a.add(s.value);const c=Wi(o,e,a);if(!c)return null;i+=c}return i}function lf(n){const e=/^(vec[234]|mat[234]x[234])([fiuh])$/.exec(n);if(!e)return n;const t={f:"f32",i:"i32",u:"u32",h:"f16"}[e[2]];return`${e[1]}<${t}>`}function ff(n){return/^(?:i32|u32|f32|f16|vec[234]<(?:i32|u32|f32|f16)>)$/.test(n)?n:null}function ei(n,e){var r,i,s,o;let t;for(let a=0;a<n.length;a++)if(!(n[a].value!=="@"||((r=n[a+1])==null?void 0:r.value)!==e)){if(t!==void 0||((i=n[a+2])==null?void 0:i.value)!=="("||!/^\d+$/.test(((s=n[a+3])==null?void 0:s.value)||"")||((o=n[a+4])==null?void 0:o.value)!==")")return null;t=Number(n[a+3].value)}return t}function Ma(n,e){return n.some((t,r)=>{var i;return t.value==="@"&&((i=n[r+1])==null?void 0:i.value)===e})}function ti(n){return n.replace("_","-")}function ji(n,e,t,r){let i=0;for(let s=e;s<n.length;s++)if(n[s].value===t)i++;else if(n[s].value===r&&--i===0)return s;return-1}function Jn(n,e){const t=[];let r=0;const i={"(":0,"<":0,"[":0,"{":0},s=Object.keys(i),o={")":"(",">":"<","]":"[","}":"{"};for(let a=0;a<n.length;a++){const c=n[a].value;if(c===e&&s.every(u=>i[u]===0)){t.push(n.slice(r,a)),r=a+1;continue}if(c in i)i[c]++;else if(c in o){const u=o[c];if(i[u]--,i[u]<0)return null}}return s.every(a=>i[a]===0)?(t.push(n.slice(r)),t):null}function df(n,e){const t=Jn(n,e);return t&&t.length===2?t[0].length:-1}function Da(n,e,t,r){for(let i=t;i<n.length;i++)if(e[i]===0&&n[i].value===r)return i;return-1}function $a(n,e,t){for(let r=t-1;r>=0;r--)if(n[r].value===";"&&e[r]===0||n[r].value==="}"&&e[r]===1)return r+1;return 0}function hf(n){for(let e=n.length-1;e>=0;e--)if(It(n[e].value))return n[e].value;return null}function dn(n){return n.map(e=>e.value).join("")}function It(n){return!!(n&&/^[A-Za-z_][A-Za-z0-9_]*$/.test(n))}function et(n,e){var t;if(!n){const r=new Error(e||"shadertools: assertion failed.");throw(t=Error.captureStackTrace)==null||t.call(Error,r,et),r}}const dr={number:{type:"number",validate(n,e){return Number.isFinite(n)&&typeof e=="object"&&(e.max===void 0||n<=e.max)&&(e.min===void 0||n>=e.min)}},array:{type:"array",validate(n,e){return Array.isArray(n)||ArrayBuffer.isView(n)}}};function gf(n){const e={};for(const[t,r]of Object.entries(n))e[t]=pf(r);return e}function pf(n){let e=Gs(n);if(e!=="object")return{value:n,...dr[e],type:e};if(typeof n=="object")return n?n.type!==void 0?{...n,...dr[n.type],type:n.type}:n.value===void 0?{type:"object",value:n}:(e=Gs(n.value),{...n,...dr[e],type:e}):{type:"object",value:null};throw new Error("props")}function Gs(n){return Array.isArray(n)||ArrayBuffer.isView(n)?"array":typeof n}const mf=`#ifdef MODULE_LOGDEPTH
  logdepth_adjustPosition(gl_Position);
#endif
`,bf=`#ifdef MODULE_MATERIAL
  fragColor = material_filterColor(fragColor);
#endif

#ifdef MODULE_LIGHTING
  fragColor = lighting_filterColor(fragColor);
#endif

#ifdef MODULE_FOG
  fragColor = fog_filterColor(fragColor);
#endif

#ifdef MODULE_PICKING
  fragColor = picking_filterHighlightColor(fragColor);
  fragColor = picking_filterPickingColor(fragColor);
#endif

#ifdef MODULE_LOGDEPTH
  logdepth_setFragDepth();
#endif
`,_f={vertex:mf,fragment:bf},zs=/void\s+main\s*\([^)]*\)\s*\{\n?/,Ws=/}\n?[^{}]*$/,hr=[],rn="__LUMA_INJECT_DECLARATIONS__";function yf(n){const e={vertex:{},fragment:{}};for(const t in n){let r=n[t];const i=wf(t);typeof r=="string"&&(r={order:0,injection:r}),e[i][t]=r}return e}function wf(n){const e=n.slice(0,2);switch(e){case"vs":return"vertex";case"fs":return"fragment";default:throw new Error(e)}}function hn(n,e,t,r=!1,i="glsl",s={}){const o=e==="vertex";for(const a in t){const c=t[a];c.sort((f,d)=>f.order-d.order),hr.length=c.length;for(let f=0,d=c.length;f<d;++f)hr[f]=c[f].injection;const u=`${hr.join(`
`)}
`;switch(a){case"vs:#decl":(i==="wgsl"||o)&&(n=n.replace(rn,u));break;case"vs:#main-start":(i==="wgsl"||o)&&(n=i==="wgsl"?Ft(n,"vertex",u,"start",s.vertex):n.replace(zs,f=>f+u));break;case"vs:#main-end":(i==="wgsl"||o)&&(n=i==="wgsl"?Ft(n,"vertex",u,"end",s.vertex):n.replace(Ws,f=>u+f));break;case"fs:#decl":(i==="wgsl"||!o)&&(n=n.replace(rn,u));break;case"fs:#main-start":(i==="wgsl"||!o)&&(n=i==="wgsl"?Ft(n,"fragment",u,"start",s.fragment):n.replace(zs,f=>f+u));break;case"fs:#main-end":(i==="wgsl"||!o)&&(n=i==="wgsl"?Ft(n,"fragment",u,"end",s.fragment):n.replace(Ws,f=>u+f));break;default:n=n.replace(a,f=>f+u)}}return n=n.replace(rn,""),r&&(n=n.replace(/\}\s*$/,a=>a+_f[e])),n}function Ft(n,e,t,r,i){const s=vf(n,e,i);if(!s)return n;if(r==="start"){const o=s.openBraceIndex+1;return`${n.slice(0,o)}
${t}${n.slice(o)}`}return`${n.slice(0,s.closeBraceIndex)}${t}${n.slice(s.closeBraceIndex)}`}function vf(n,e,t){const r=e==="vertex"?"@vertex":"@fragment",i=n.indexOf(r);if(i<0)return null;const s=t?n.search(new RegExp(`\\bfn\\s+${xf(t)}\\s*\\(`)):n.indexOf("fn",i);if(s<0)return null;const o=n.indexOf("{",s);if(o<0)return null;let a=0;for(let c=o;c<n.length;c++){const u=n[c];if(u==="{")a++;else if(u==="}"&&(a--,a===0))return{openBraceIndex:o,closeBraceIndex:c}}return null}function xf(n){return n.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function gn(n){n.map(e=>Sf(e))}function Sf(n){if(n.instance)return;gn(n.dependencies||[]);const{propTypes:e={},deprecations:t=[],inject:r={}}=n,i={normalizedInjections:yf(r),parsedDeprecations:Ef(t)};e&&(i.propValidators=gf(e)),n.instance=i;let s={};e&&(s=Object.entries(e).reduce((o,[a,c])=>{const u=c==null?void 0:c.value;return u&&(o[a]=u),o},{})),n.defaultUniforms={...n.defaultUniforms,...s}}function ka(n,e,t){var r;(r=n.deprecations)==null||r.forEach(i=>{var s;(s=i.regex)!=null&&s.test(e)&&(i.deprecated?t.deprecated(i.old,i.new)():t.removed(i.old,i.new)())})}function Ef(n){return n.forEach(e=>{switch(e.type){case"function":e.regex=new RegExp(`\\b${e.old}\\(`);break;default:e.regex=new RegExp(`${e.type} ${e.old};`)}}),n}function pn(n){gn(n);const e={},t={};Ua({modules:n,level:0,moduleMap:e,moduleDepth:t});const r=Object.keys(t).sort((i,s)=>t[s]-t[i]).map(i=>e[i]);return gn(r),r}function Ua(n){const{modules:e,level:t,moduleMap:r,moduleDepth:i}=n;if(t>=5)throw new Error("Possible loop in shader dependency graph");for(const s of e)r[s.name]=s,(i[s.name]===void 0||i[s.name]<t)&&(i[s.name]=t);for(const s of e)s.dependencies&&Ua({modules:s.dependencies,level:t+1,moduleMap:r,moduleDepth:i})}const v=new Di({id:"luma.gl"}),Af={id:null,powerPreference:"high-performance",failIfMajorPerformanceCaveat:!1,featureLevel:void 0,optionalFeatures:[],xrCompatible:!1,createCanvasContext:void 0,webgl:{},onError:(n,e)=>{},onResize:(n,e)=>{const[t,r]=n.getDevicePixelSize();v.log(1,`${n} resized => ${t}x${r}px`)()},onPositionChange:(n,e)=>{const[t,r]=n.getPosition();v.log(1,`${n} repositioned => ${t},${r}`)()},onVisibilityChange:n=>v.log(1,`${n} Visibility changed ${n.isVisible}`)(),onDevicePixelRatioChange:(n,e)=>v.log(1,`${n} DPR changed ${e.oldRatio} => ${n.devicePixelRatio}`)(),debug:Lf(),debugGPUTime:!1,debugShaders:v.get("debug-shaders")||void 0,debugFramebuffers:!!v.get("debug-framebuffers"),debugFactories:!!v.get("debug-factories"),debugWebGL:!!v.get("debug-webgl"),debugSpectorJS:void 0,debugSpectorJSUrl:void 0,_reuseDevices:!1,_cacheShaders:!0,_destroyShaders:!1,_cachePipelines:!0,_sharePipelines:!0,_destroyPipelines:!1,_initializeFeatures:!0,_disabledFeatures:{"compilation-status-async-webgl":!0},_handle:void 0};function Tf(n,e){return n!=null?!!n:e!==void 0?e!=="production":!1}function Lf(){return Tf(v.get("debug"),Pf())}function Pf(){const n=globalThis.process;if(n!=null&&n.env)return n.env.NODE_ENV}const Bf="GPU Time and Memory",Cf=["Adapter","GPU","GPU Type","GPU Backend","Frame Rate","CPU Time","GPU Time","GPU Memory","Buffer Memory","Texture Memory","External Buffer Memory","External Texture Memory","Swap Chain Texture"],js=new WeakMap,Vs=new WeakMap;class If{constructor(){l(this,"stats",new Map)}getStats(e){return this.get(e)}get(e){this.stats.has(e)||this.stats.set(e,new qu({id:e}));const t=this.stats.get(e);return e===Bf&&Rf(t,Cf),t}}const Of=new If;function Rf(n,e){const t=n.stats;let r=!1;for(const c of e)t[c]||(n.get(c),r=!0);const i=Object.keys(t).length,s=js.get(n);if(!r&&(s==null?void 0:s.orderedStatNames)===e&&s.statCount===i)return;const o={};let a=Vs.get(e);a||(a=new Set(e),Vs.set(e,a));for(const c of e)t[c]&&(o[c]=t[c]);for(const[c,u]of Object.entries(t))a.has(c)||(o[c]=u);for(const c of Object.keys(t))delete t[c];Object.assign(t,o),js.set(n,{orderedStatNames:e,statCount:i})}const gr={};function Ot(n="id"){gr[n]=gr[n]||1;const e=gr[n]++;return`${n}-${e}`}const Mf="cpu-hotspot-profiler",Hs="GPU Resource Counts",Ys="Resource Counts",qs="GPU Time and Memory",Df=["Resources","Buffers","Textures","Samplers","TextureViews","Framebuffers","QuerySets","Shaders","RenderPipelines","ComputePipelines","PipelineLayouts","VertexArrays","RenderPasss","RenderBundleEncoders","RenderBundles","ComputePasss","CommandEncoders","CommandBuffers"],$f=["Resources","Buffers","Textures","Samplers","TextureViews","Framebuffers","QuerySets","Shaders","RenderPipelines","SharedRenderPipelines","ComputePipelines","PipelineLayouts","VertexArrays","RenderPasss","RenderBundleEncoders","RenderBundles","ComputePasss","CommandEncoders","CommandBuffers"],kf=Df.flatMap(n=>[`${n} Created`,`${n} Active`]),Uf=$f.flatMap(n=>[`${n} Created`,`${n} Active`]),Qs=new WeakMap,Xs=new WeakMap;class T{constructor(e,t,r){l(this,"id");l(this,"props");l(this,"userData",{});l(this,"_device");l(this,"destroyed",!1);l(this,"allocatedBytes",0);l(this,"allocatedBytesName",null);l(this,"_attachedResources",new Set);if(!e)throw new Error("no device");this._device=e,this.props=Nf(t,r);const i=this.props.id!=="undefined"?this.props.id:Ot(this[Symbol.toStringTag]);this.props.id=i,this.id=i,this.userData=this.props.userData||{},this.addStats()}toString(){return`${this[Symbol.toStringTag]||this.constructor.name}:"${this.id}"`}toJSON(){return this.toString()}get ownsHandle(){return(this.props.handle===void 0||this.props.handle===null)&&!this.isHandleBorrowed}get isHandleBorrowed(){return!!this.props._isHandleBorrowed}destroy(){this.destroyed||this.destroyResource()}delete(){return this.destroy(),this}getProps(){return this.props}attachResource(e){this._attachedResources.add(e)}detachResource(e){this._attachedResources.delete(e)}destroyAttachedResource(e){this._attachedResources.delete(e)&&e.destroy()}destroyAttachedResources(){for(const e of this._attachedResources)e.destroy();this._attachedResources=new Set}destroyResource(){this.destroyed||(this.destroyAttachedResources(),this.removeStats(),this.destroyed=!0)}removeStats(){const e=ft(this._device),t=e?pe():0,r=[this._device.statsManager.getStats(Hs),this._device.statsManager.getStats(Ys)],i=Ks(this._device);for(const o of r)Zs(o,i);const s=this.getStatsName();for(const o of r)o.get("Resources Active").decrementCount(),o.get(`${s}s Active`).decrementCount();e&&(e.statsBookkeepingCalls=(e.statsBookkeepingCalls||0)+1,e.statsBookkeepingTimeMs=(e.statsBookkeepingTimeMs||0)+(pe()-t))}trackAllocatedMemory(e,t=this.getStatsName()){const r=ft(this._device),i=r?pe():0,s=this._device.statsManager.getStats(qs);this.allocatedBytes>0&&this.allocatedBytesName&&(s.get("GPU Memory").subtractCount(this.allocatedBytes),s.get(`${this.allocatedBytesName} Memory`).subtractCount(this.allocatedBytes)),s.get("GPU Memory").addCount(e),s.get(`${t} Memory`).addCount(e),r&&(r.statsBookkeepingCalls=(r.statsBookkeepingCalls||0)+1,r.statsBookkeepingTimeMs=(r.statsBookkeepingTimeMs||0)+(pe()-i)),this.allocatedBytes=e,this.allocatedBytesName=t}trackReferencedMemory(e,t=this.getStatsName()){this.trackAllocatedMemory(e,`External ${t}`)}trackDeallocatedMemory(e=this.getStatsName()){if(this.allocatedBytes===0){this.allocatedBytesName=null;return}const t=ft(this._device),r=t?pe():0,i=this._device.statsManager.getStats(qs);i.get("GPU Memory").subtractCount(this.allocatedBytes),i.get(`${this.allocatedBytesName||e} Memory`).subtractCount(this.allocatedBytes),t&&(t.statsBookkeepingCalls=(t.statsBookkeepingCalls||0)+1,t.statsBookkeepingTimeMs=(t.statsBookkeepingTimeMs||0)+(pe()-r)),this.allocatedBytes=0,this.allocatedBytesName=null}trackDeallocatedReferencedMemory(e=this.getStatsName()){this.trackDeallocatedMemory(`Referenced ${e}`)}addStats(){const e=this.getStatsName(),t=ft(this._device),r=t?pe():0,i=[this._device.statsManager.getStats(Hs),this._device.statsManager.getStats(Ys)],s=Ks(this._device);for(const o of i)Zs(o,s);for(const o of i)o.get("Resources Created").incrementCount(),o.get("Resources Active").incrementCount(),o.get(`${e}s Created`).incrementCount(),o.get(`${e}s Active`).incrementCount();t&&(t.statsBookkeepingCalls=(t.statsBookkeepingCalls||0)+1,t.statsBookkeepingTimeMs=(t.statsBookkeepingTimeMs||0)+(pe()-r)),Ff(this._device,e)}getStatsName(){return Gf(this)}}l(T,"defaultProps",{id:"undefined",handle:void 0,_isHandleBorrowed:!1,userData:void 0});function Nf(n,e){const t={...e};for(const r in n)n[r]!==void 0&&(t[r]=n[r]);return t}function Zs(n,e){const t=n.stats;let r=!1;for(const c of e)t[c]||(n.get(c),r=!0);const i=Object.keys(t).length,s=Qs.get(n);if(!r&&(s==null?void 0:s.orderedStatNames)===e&&s.statCount===i)return;const o={};let a=Xs.get(e);a||(a=new Set(e),Xs.set(e,a));for(const c of e)t[c]&&(o[c]=t[c]);for(const[c,u]of Object.entries(t))a.has(c)||(o[c]=u);for(const c of Object.keys(t))delete t[c];Object.assign(t,o),Qs.set(n,{orderedStatNames:e,statCount:i})}function Ks(n){return n.type==="webgl"?Uf:kf}function ft(n){const e=n.userData[Mf];return e!=null&&e.enabled?e:null}function pe(){var n,e;return((e=(n=globalThis.performance)==null?void 0:n.now)==null?void 0:e.call(n))??Date.now()}function Ff(n,e){const t=ft(n);if(!(!t||!t.activeDefaultFramebufferAcquireDepth))switch(t.transientCanvasResourceCreates=(t.transientCanvasResourceCreates||0)+1,e){case"Texture":t.transientCanvasTextureCreates=(t.transientCanvasTextureCreates||0)+1;break;case"TextureView":t.transientCanvasTextureViewCreates=(t.transientCanvasTextureViewCreates||0)+1;break;case"Sampler":t.transientCanvasSamplerCreates=(t.transientCanvasSamplerCreates||0)+1;break;case"Framebuffer":t.transientCanvasFramebufferCreates=(t.transientCanvasFramebufferCreates||0)+1;break}}function Gf(n){let e=Object.getPrototypeOf(n);for(;e;){const t=Object.getPrototypeOf(e);if(!t||t===T.prototype)return zf(e)||n[Symbol.toStringTag]||n.constructor.name;e=t}return n[Symbol.toStringTag]||n.constructor.name}function zf(n){const e=Object.getOwnPropertyDescriptor(n,Symbol.toStringTag);return typeof(e==null?void 0:e.get)=="function"?e.get.call(n):typeof(e==null?void 0:e.value)=="string"?e.value:null}const U=class U extends T{constructor(t,r){const i={...r};(r.usage||0)&U.INDEX&&!r.indexType&&(r.data instanceof Uint32Array?i.indexType="uint32":r.data instanceof Uint16Array?i.indexType="uint16":r.data instanceof Uint8Array&&(i.indexType="uint8")),delete i.data;super(t,i,U.defaultProps);l(this,"usage");l(this,"indexType");l(this,"updateTimestamp");l(this,"debugData",new ArrayBuffer(0));this.usage=i.usage||0,this.indexType=i.indexType,this.updateTimestamp=t.incrementTimestamp()}get[Symbol.toStringTag](){return"Buffer"}clone(t){return this.device.createBuffer({...this.props,...t})}_setDebugData(t,r,i){if(!this.device.props.debug)return;let s=null,o;ArrayBuffer.isView(t)?(s=t,o=t.buffer):o=t;const a=Math.min(t?t.byteLength:i,U.DEBUG_DATA_MAX_LENGTH);if(o===null)this.debugData=new ArrayBuffer(a);else{const c=Math.min((s==null?void 0:s.byteOffset)||0,o.byteLength),u=Math.max(0,o.byteLength-c),f=Math.min(a,u);this.debugData=new Uint8Array(o,c,f).slice().buffer}}};l(U,"INDEX",16),l(U,"VERTEX",32),l(U,"UNIFORM",64),l(U,"STORAGE",128),l(U,"INDIRECT",256),l(U,"QUERY_RESOLVE",512),l(U,"MAP_READ",1),l(U,"MAP_WRITE",2),l(U,"COPY_SRC",4),l(U,"COPY_DST",8),l(U,"DEBUG_DATA_MAX_LENGTH",32),l(U,"defaultProps",{...T.defaultProps,handle:void 0,usage:0,byteLength:0,byteOffset:0,data:null,indexType:"uint16",onMapped:void 0});let A=U;const ni=globalThis.Float16Array;function Wf(){return ni??Uint16Array}function jf(n){return!!(ni&&n===ni)}function Vf(n){const e=n.includes("norm"),t=!e&&!n.startsWith("float"),r=n.startsWith("s"),i=Hi[n],[s,o,a]=i||["uint8 ","i32",1];return{signedType:s,primitiveType:o,byteLength:a,normalized:e,integer:t,signed:r}}function Hf(n){const e=n;switch(e){case"uint8":return"unorm8";case"sint8":return"snorm8";case"uint16":return"unorm16";case"sint16":return"snorm16";default:return e}}function oe(n,e){switch(e){case 1:return n;case 2:return n+n%2;default:return n+(4-n%4)%4}}function Na(n){const e=ArrayBuffer.isView(n)?n.constructor:n;if(jf(e))return"float16";if(e===Uint8ClampedArray)return"uint8";const t=Object.values(Hi).find(r=>e===r[4]);if(!t)throw new Error(e.name);return t[0]}function Yf(n){return Na(n)}function gt(n){if(n==="float16")return Wf();const e=Hi[n];if(!e)throw new Error(n);const[,,,,t]=e;return t}function Vi(n){return gt(n)}const Hi={uint8:["uint8","u32",1,!1,Uint8Array],sint8:["sint8","i32",1,!1,Int8Array],unorm8:["uint8","f32",1,!0,Uint8Array],snorm8:["sint8","f32",1,!0,Int8Array],uint16:["uint16","u32",2,!1,Uint16Array],sint16:["sint16","i32",2,!1,Int16Array],unorm16:["uint16","u32",2,!0,Uint16Array],snorm16:["sint16","i32",2,!0,Int16Array],float16:["float16","f16",2,!1,Uint16Array],float32:["float32","f32",4,!1,Float32Array],uint32:["uint32","u32",4,!1,Uint32Array],sint32:["sint32","i32",4,!1,Int32Array]};class qf{getDataTypeInfo(e){return Vf(e)}getNormalizedDataType(e){return Hf(e)}alignTo(e,t){return oe(e,t)}getDataType(e){return Yf(e)}getTypedArrayConstructor(e){return Vi(e)}}const ue=new qf;class Qf{getVertexFormatInfo(e){if(e==="unorm10-10-10-2")return{type:"unorm8",components:4,byteLength:4,integer:!1,signed:!1,normalized:!0};let t=e==="unorm8x4-bgra"?"unorm8x4":e,r;t.endsWith("-webgl")&&(t=t.slice(0,-6),r=!0);const i=t.split("x");if(i.length>2)throw new Error(`Unsupported vertex format: ${e}`);const[s,o]=i,a=s,c=Zf(e,o),u=Xf(e,a);let f;try{f=r?Kf(e,a,c):this.makeVertexFormat(u.signedType,c,u.normalized)}catch{throw new Error(`Unsupported vertex format: ${e}`)}if(f!==(r?e:t))throw new Error(`Unsupported vertex format: ${e}`);const d={type:a,components:c,byteLength:u.byteLength*c,integer:u.integer,signed:u.signed,normalized:u.normalized};return r&&(d.webglOnly=!0),d}makeVertexFormat(e,t,r){const i=r?ue.getNormalizedDataType(e):e;switch(i){case"unorm8":return t===1?"unorm8":t===3?"unorm8x3-webgl":`${i}x${t}`;case"snorm8":return t===1?"snorm8":t===3?"snorm8x3-webgl":`${i}x${t}`;case"uint8":case"sint8":if(t===3)throw new Error(`size: ${t}`);return t===1?i:`${i}x${t}`;case"uint16":return t===1?"uint16":t===3?"uint16x3-webgl":`${i}x${t}`;case"sint16":return t===1?"sint16":t===3?"sint16x3-webgl":`${i}x${t}`;case"unorm16":return t===1?"unorm16":t===3?"unorm16x3-webgl":`${i}x${t}`;case"snorm16":return t===1?"snorm16":t===3?"snorm16x3-webgl":`${i}x${t}`;case"float16":if(t===3)throw new Error(`size: ${t}`);return t===1?i:`${i}x${t}`;default:return t===1?i:`${i}x${t}`}}getVertexFormatFromAttribute(e,t,r){if(!t||t>4)throw new Error(`size ${t}`);const i=t,s=ue.getDataType(e);return this.makeVertexFormat(s,i,r)}getCompatibleVertexFormat(e){let t;switch(e.primitiveType){case"f32":t="float32";break;case"i32":t="sint32";break;case"u32":t="uint32";break;case"f16":return e.components<=2?"float16x2":"float16x4"}return e.components===1?t:`${t}x${e.components}`}}const F=new Qf;function Xf(n,e){try{return ue.getDataTypeInfo(e)}catch{throw new Error(`Unsupported vertex format: ${n}`)}}function Zf(n,e){if(!e)return 1;const t=Number(e);if(t===2||t===3||t===4)return t;throw new Error(`Unsupported vertex format: ${n}`)}function Kf(n,e,t){if(t!==3)throw new Error(`Unsupported vertex format: ${n}`);switch(e){case"uint8":case"sint8":case"unorm8":case"snorm8":case"uint16":case"sint16":case"unorm16":case"snorm16":return`${e}x3-webgl`;default:throw new Error(`Unsupported vertex format: ${n}`)}}const N="texture-compression-bc",P="texture-compression-astc",ne="texture-compression-etc2",Jf="texture-compression-etc1-webgl",Gt="texture-compression-pvrtc-webgl",pr="texture-compression-atc-webgl",zt="float32-renderable-webgl",mr="float16-renderable-webgl",ed="rgb9e5ufloat-renderable-webgl",br="snorm8-renderable-webgl",me="norm16-webgl",_r="norm16-renderable-webgl",yr="snorm16-renderable-webgl",Wt="float32-filterable",Js="float16-filterable-webgl",Rt=1,Mt=2,Yi=4,qi=8,tt=16,er=5,Fa=10,k=Rt|Mt,jt=Rt|Yi,fe=Rt|Mt|Yi|qi,re=Rt|Mt|tt,td=Rt|Yi|tt,ri=fe|tt,eo=(Mt|qi|tt)<<er,nd=(Mt|qi)<<er,z=tt<<er,ze=ri<<er,rd=fe<<Fa,wr=tt<<Fa;function Qi(n){const e=Ga[n];if(!e)throw new Error(`Unsupported texture format ${n}`);return e}function id(){return Ga}const sd={r8unorm:{webgpu:fe|z},rg8unorm:{webgpu:fe|z},"rgb8unorm-webgl":{},rgba8unorm:{webgpu:ri},"rgba8unorm-srgb":{webgpu:fe},r8snorm:{render:br,webgpu:jt|eo},rg8snorm:{render:br,webgpu:jt|eo},"rgb8snorm-webgl":{},rgba8snorm:{render:br,webgpu:td|nd},r8uint:{webgpu:k|z},rg8uint:{webgpu:k|z},rgba8uint:{webgpu:re},r8sint:{webgpu:k|z},rg8sint:{webgpu:k|z},rgba8sint:{webgpu:re},bgra8unorm:{webgpu:fe},"bgra8unorm-srgb":{webgpu:rd},r16unorm:{f:me,render:_r,webgpu:ze},rg16unorm:{f:me,render:_r,webgpu:ze},"rgb16unorm-webgl":{f:me,render:!1},rgba16unorm:{f:me,render:_r,webgpu:ze},r16snorm:{f:me,render:yr,webgpu:ze},rg16snorm:{f:me,render:yr,webgpu:ze},"rgb16snorm-webgl":{f:me,render:!1},rgba16snorm:{f:me,render:yr,webgpu:ze},r16uint:{webgpu:k|z},rg16uint:{webgpu:k|z},rgba16uint:{webgpu:re},r16sint:{webgpu:k|z},rg16sint:{webgpu:k|z},rgba16sint:{webgpu:re},r16float:{render:mr,filter:"float16-filterable-webgl",webgpu:fe|z},rg16float:{render:mr,filter:Js,webgpu:fe|z},rgba16float:{render:mr,filter:Js,webgpu:ri},r32uint:{webgpu:re},rg32uint:{webgpu:k|wr},rgba32uint:{webgpu:re},r32sint:{webgpu:re},rg32sint:{webgpu:k|wr},rgba32sint:{webgpu:re},r32float:{render:zt,filter:Wt,webgpu:re},rg32float:{render:!1,filter:Wt,webgpu:k|wr},"rgb32float-webgl":{render:zt,filter:Wt},rgba32float:{render:zt,filter:Wt,webgpu:re},"rgba4unorm-webgl":{channels:"rgba",bitsPerChannel:[4,4,4,4],packed:!0},"rgb565unorm-webgl":{channels:"rgb",bitsPerChannel:[5,6,5,0],packed:!0},"rgb5a1unorm-webgl":{channels:"rgba",bitsPerChannel:[5,5,5,1],packed:!0},rgb9e5ufloat:{channels:"rgb",packed:!0,render:ed,webgpu:jt},rg11b10ufloat:{channels:"rgb",bitsPerChannel:[11,11,10,0],packed:!0,p:1,render:zt,webgpu:jt|z},rgb10a2unorm:{channels:"rgba",bitsPerChannel:[10,10,10,2],packed:!0,p:1,webgpu:fe|z},rgb10a2uint:{channels:"rgba",bitsPerChannel:[10,10,10,2],packed:!0,p:1,webgpu:k|z},stencil8:{attachment:"stencil",bitsPerChannel:[8,0,0,0],dataType:"uint8",webgpu:k},depth16unorm:{attachment:"depth",bitsPerChannel:[16,0,0,0],dataType:"uint16",webgpu:k},depth24plus:{attachment:"depth",bitsPerChannel:[24,0,0,0],dataType:"uint32",webgpu:k},depth32float:{attachment:"depth",bitsPerChannel:[32,0,0,0],dataType:"float32",webgpu:k},"depth24plus-stencil8":{attachment:"depth-stencil",bitsPerChannel:[24,8,0,0],packed:!0,webgpu:k},"depth32float-stencil8":{attachment:"depth-stencil",bitsPerChannel:[32,8,0,0],packed:!0,f:"depth32float-stencil8",webgpu:k}},od={"bc1-rgb-unorm-webgl":{f:N},"bc1-rgb-unorm-srgb-webgl":{f:N},"bc1-rgba-unorm":{f:N},"bc1-rgba-unorm-srgb":{f:N},"bc2-rgba-unorm":{f:N},"bc2-rgba-unorm-srgb":{f:N},"bc3-rgba-unorm":{f:N},"bc3-rgba-unorm-srgb":{f:N},"bc4-r-unorm":{f:N},"bc4-r-snorm":{f:N},"bc5-rg-unorm":{f:N},"bc5-rg-snorm":{f:N},"bc6h-rgb-ufloat":{f:N},"bc6h-rgb-float":{f:N},"bc7-rgba-unorm":{f:N},"bc7-rgba-unorm-srgb":{f:N},"etc2-rgb8unorm":{f:ne},"etc2-rgb8unorm-srgb":{f:ne},"etc2-rgb8a1unorm":{f:ne},"etc2-rgb8a1unorm-srgb":{f:ne},"etc2-rgba8unorm":{f:ne},"etc2-rgba8unorm-srgb":{f:ne},"eac-r11unorm":{f:ne},"eac-r11snorm":{f:ne},"eac-rg11unorm":{f:ne},"eac-rg11snorm":{f:ne},"astc-4x4-unorm":{f:P},"astc-4x4-unorm-srgb":{f:P},"astc-5x4-unorm":{f:P},"astc-5x4-unorm-srgb":{f:P},"astc-5x5-unorm":{f:P},"astc-5x5-unorm-srgb":{f:P},"astc-6x5-unorm":{f:P},"astc-6x5-unorm-srgb":{f:P},"astc-6x6-unorm":{f:P},"astc-6x6-unorm-srgb":{f:P},"astc-8x5-unorm":{f:P},"astc-8x5-unorm-srgb":{f:P},"astc-8x6-unorm":{f:P},"astc-8x6-unorm-srgb":{f:P},"astc-8x8-unorm":{f:P},"astc-8x8-unorm-srgb":{f:P},"astc-10x5-unorm":{f:P},"astc-10x5-unorm-srgb":{f:P},"astc-10x6-unorm":{f:P},"astc-10x6-unorm-srgb":{f:P},"astc-10x8-unorm":{f:P},"astc-10x8-unorm-srgb":{f:P},"astc-10x10-unorm":{f:P},"astc-10x10-unorm-srgb":{f:P},"astc-12x10-unorm":{f:P},"astc-12x10-unorm-srgb":{f:P},"astc-12x12-unorm":{f:P},"astc-12x12-unorm-srgb":{f:P},"pvrtc-rgb4unorm-webgl":{f:Gt},"pvrtc-rgba4unorm-webgl":{f:Gt},"pvrtc-rgb2unorm-webgl":{f:Gt},"pvrtc-rgba2unorm-webgl":{f:Gt},"etc1-rbg-unorm-webgl":{f:Jf},"atc-rgb-unorm-webgl":{f:pr},"atc-rgba-unorm-webgl":{f:pr},"atc-rgbai-unorm-webgl":{f:pr}},Ga={...sd,...od},ad=/^(r|rg|rgb|rgba|bgra)([0-9]*)([a-z]*)(-srgb)?(-webgl)?$/,cd=["rgb","rgba","bgra"],ud=["depth","stencil"],ld=5,fd=["bc1","bc2","bc3","bc4","bc5","bc6","bc7","etc1","etc2","eac","atc","astc","pvrtc"];class dd{isColor(e){return cd.some(t=>e.startsWith(t))}isDepthStencil(e){return ud.some(t=>e.startsWith(t))}isCompressed(e){return fd.some(t=>e.startsWith(t))}getInfo(e){return za(e)}getCapabilities(e){return gd(e)}getWebGPUCapabilities(e){const t=Qi(e);return t.webgpu!==void 0?t.webgpu:this.isCompressed(e)&&!e.endsWith("-webgl")?ld:0}computeMemoryLayout(e){return hd(e)}}const ee=new dd;function hd({format:n,width:e,height:t,depth:r,byteAlignment:i}){const s=ee.getInfo(n),{bytesPerPixel:o,bytesPerBlock:a=o,blockWidth:c=1,blockHeight:u=1,compressed:f=!1}=s,d=f?Math.ceil(e/c):e,h=f?Math.ceil(t/u):t,g=d*a,p=Math.ceil(g/i)*i,m=h,b=p*m*r;return{bytesPerPixel:o,bytesPerRow:p,rowsPerImage:m,depthOrArrayLayers:r,bytesPerImage:p*m,byteLength:b}}function gd(n){const e=Qi(n),t={format:n,create:e.f??!0,render:e.render??!0,filter:e.filter??!0,blend:e.blend??!0,store:e.store??!0},r=za(n),i=n.startsWith("depth")||n.startsWith("stencil"),s=r==null?void 0:r.signed,o=r==null?void 0:r.integer,a=r==null?void 0:r.webgl,c=!!(r!=null&&r.compressed);return t.render&&(t.render=!i&&!c),t.filter&&(t.filter=!i&&!s&&!o&&!a),t}function za(n){let e=pd(n);if(ee.isCompressed(n)){e.channels="rgb",e.components=3,e.bytesPerPixel=1,e.srgb=!1,e.compressed=!0,e.bytesPerBlock=bd(n);const r=md(n);r&&(e.blockWidth=r.blockWidth,e.blockHeight=r.blockHeight)}const t=e.packed?null:ad.exec(n);if(t){const[,r,i,s,o,a]=t,c=`${s}${i}`,u=ue.getDataTypeInfo(c),f=u.byteLength*8,d=(r==null?void 0:r.length)??1,h=[f,d>=2?f:0,d>=3?f:0,d>=4?f:0];e={format:n,attachment:e.attachment,dataType:u.signedType,components:d,channels:r,integer:u.integer,signed:u.signed,normalized:u.normalized,bitsPerChannel:h,bytesPerPixel:u.byteLength*d,packed:e.packed,srgb:e.srgb},a==="-webgl"&&(e.webgl=!0),o==="-srgb"&&(e.srgb=!0)}return n.endsWith("-webgl")&&(e.webgl=!0),n.endsWith("-srgb")&&(e.srgb=!0),e}function pd(n){var s;const e={...Qi(n)},t=e.bytesPerPixel||1,r=e.bitsPerChannel||[8,8,8,8];return delete e.bitsPerChannel,delete e.bytesPerPixel,delete e.f,delete e.render,delete e.filter,delete e.blend,delete e.store,delete e.webgpu,{...e,format:n,attachment:e.attachment||"color",channels:e.channels||"r",components:e.components||((s=e.channels)==null?void 0:s.length)||1,bytesPerPixel:t,bitsPerChannel:r,dataType:e.dataType||"uint8",srgb:e.srgb??!1,packed:e.packed??!1,webgl:e.webgl??!1,integer:e.integer??!1,signed:e.signed??!1,normalized:e.normalized??!1,compressed:e.compressed??!1}}function md(n){const t=/.*-(\d+)x(\d+)-.*/.exec(n);if(t){const[,r,i]=t;return{blockWidth:Number(r),blockHeight:Number(i)}}return n.startsWith("bc")||n.startsWith("etc1")||n.startsWith("etc2")||n.startsWith("eac")||n.startsWith("atc")?{blockWidth:4,blockHeight:4}:n.startsWith("pvrtc-rgb4")||n.startsWith("pvrtc-rgba4")?{blockWidth:4,blockHeight:4}:n.startsWith("pvrtc-rgb2")||n.startsWith("pvrtc-rgba2")?{blockWidth:8,blockHeight:4}:null}function bd(n){return n.startsWith("bc1")||n.startsWith("bc4")||n.startsWith("etc1")||n.startsWith("etc2-rgb8")||n.startsWith("etc2-rgb8a1")||n.startsWith("eac-r11")||n==="atc-rgb-unorm-webgl"?8:n.startsWith("bc2")||n.startsWith("bc3")||n.startsWith("bc5")||n.startsWith("bc6h")||n.startsWith("bc7")||n.startsWith("etc2-rgba8")||n.startsWith("eac-rg11")||n.startsWith("astc")||n==="atc-rgba-unorm-webgl"||n==="atc-rgbai-unorm-webgl"?16:n.startsWith("pvrtc")?8:16}function _d(n){return typeof ImageData<"u"&&n instanceof ImageData||typeof ImageBitmap<"u"&&n instanceof ImageBitmap||typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement||typeof VideoFrame<"u"&&n instanceof VideoFrame||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof OffscreenCanvas<"u"&&n instanceof OffscreenCanvas}function yd(n){if(typeof ImageData<"u"&&n instanceof ImageData||typeof ImageBitmap<"u"&&n instanceof ImageBitmap||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof OffscreenCanvas<"u"&&n instanceof OffscreenCanvas)return{width:n.width,height:n.height};if(typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement)return{width:n.naturalWidth,height:n.naturalHeight};if(typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement)return{width:n.videoWidth,height:n.videoHeight};if(typeof VideoFrame<"u"&&n instanceof VideoFrame)return{width:n.displayWidth,height:n.displayHeight};throw new Error("Unknown image type")}class wd{}function vd(n,e){const t=ii(n),r=e.map(ii).filter(i=>i!==void 0);return[t,...r].filter(i=>i!==void 0)}function ii(n){var e;if(n!==void 0){if(n===null||typeof n=="string"||typeof n=="number"||typeof n=="boolean")return n;if(n instanceof Error)return n.message;if(Array.isArray(n))return n.map(ii);if(typeof n=="object"){if(xd(n)){const t=String(n);if(t!=="[object Object]")return t}return Sd(n)?Ed(n):((e=n.constructor)==null?void 0:e.name)||"Object"}return String(n)}}function xd(n){return"toString"in n&&typeof n.toString=="function"&&n.toString!==Object.prototype.toString}function Sd(n){return"message"in n&&"type"in n}function Ed(n){const e=typeof n.type=="string"?n.type:"message",t=typeof n.message=="string"?n.message:"",r=typeof n.lineNum=="number"?n.lineNum:null,i=typeof n.linePos=="number"?n.linePos:null,s=r!==null&&i!==null?` @ ${r}:${i}`:r!==null?` @ ${r}`:"";return`${e}${s}: ${t}`.trim()}class Ad{constructor(e=[],t){l(this,"features");l(this,"disabledFeatures");this.features=new Set(e),this.disabledFeatures=t||{}}*[Symbol.iterator](){yield*this.features}has(e){var t;return!((t=this.disabledFeatures)!=null&&t[e])&&this.features.has(e)}}function Td(){if(typeof HTMLCanvasElement>"u")return!1;const n=HTMLCanvasElement.prototype;return"layoutSubtree"in n&&typeof n.requestPaint=="function"}const Rn=class Rn{constructor(e){l(this,"id");l(this,"props");l(this,"userData",{});l(this,"statsManager",Of);l(this,"_factories",{});l(this,"timestamp",0);l(this,"_reused",!1);l(this,"_moduleData",{});l(this,"wgslLanguageFeatures",new Set);l(this,"_textureCaps",{});l(this,"_debugGPUTimeQuery",null);this.props={...Rn.defaultProps,...e},this.id=this.props.id||Ot(this[Symbol.toStringTag].toLowerCase())}get[Symbol.toStringTag](){return"Device"}toString(){return`Device(${this.id})`}toJSON(){return this.toString()}getVertexFormatInfo(e){return F.getVertexFormatInfo(e)}isVertexFormatSupported(e){return!0}getTextureFormatInfo(e){return ee.getInfo(e)}getTextureFormatCapabilities(e){let t=this._textureCaps[e];if(!t){const r=this._getDeviceTextureFormatCapabilities(e);t=this._getDeviceSpecificTextureFormatCapabilities(r),this._textureCaps[e]=t}return t}getMipLevelCount(e,t,r=1){const i=Math.max(e,t,r);return 1+Math.floor(Math.log2(i))}isExternalImage(e){return _d(e)}getExternalImageSize(e){return yd(e)}isTextureFormatSupported(e){return this.getTextureFormatCapabilities(e).create}isTextureFormatFilterable(e){return this.getTextureFormatCapabilities(e).filter}isTextureFormatRenderable(e){return this.getTextureFormatCapabilities(e).render}isTextureFormatCompressed(e){return ee.isCompressed(e)}getSupportedCompressedTextureFormats(){const e=[];for(const t of Object.keys(id()))this.isTextureFormatCompressed(t)&&this.isTextureFormatSupported(t)&&e.push(t);return e}pushDebugGroup(e){this.commandEncoder.pushDebugGroup(e)}popDebugGroup(){var e;(e=this.commandEncoder)==null||e.popDebugGroup()}insertDebugMarker(e){var t;(t=this.commandEncoder)==null||t.insertDebugMarker(e)}loseDevice(){return!1}incrementTimestamp(){return this.timestamp++}reportError(e,t,...r){if(!this.props.onError(e,t)){const s=vd(t,r);return v.error(this.type==="webgl"?"%cWebGL":"%cWebGPU","color: white; background: red; padding: 2px 6px; border-radius: 3px;",e.message,...s)}return()=>{}}debug(){if(this.props.debug)debugger;else v.once(0,`'Type luma.log.set({debug: true}) in console to enable debug breakpoints',
or create a device with the 'debug: true' prop.`)()}getDefaultCanvasContext(){if(!this.canvasContext)throw new Error("Device has no default CanvasContext. See props.createCanvasContext");return this.canvasContext}createFence(){throw new Error("createFence() not implemented")}beginRenderPass(e){return this.commandEncoder.beginRenderPass(e)}beginComputePass(e){return this.commandEncoder.beginComputePass(e)}writeBufferViaCommandEncoder(e,t,r,i=0){throw new Error("writeBufferViaCommandEncoder() not implemented")}generateMipmapsWebGPU(e){throw new Error("not implemented")}_createSharedRenderPipelineWebGL(e){throw new Error("_createSharedRenderPipelineWebGL() not implemented")}_createBindGroupLayoutWebGPU(e,t){throw new Error("_createBindGroupLayoutWebGPU() not implemented")}_createBindGroupWebGPU(e,t,r,i,s){throw new Error("_createBindGroupWebGPU() not implemented")}_supportsDebugGPUTime(){return this.features.has("timestamp-query")&&!!(this.props.debug||this.props.debugGPUTime)}_enableDebugGPUTime(e=256){if(!this._supportsDebugGPUTime())return null;if(this._debugGPUTimeQuery)return this._debugGPUTimeQuery;try{this._debugGPUTimeQuery=this.createQuerySet({type:"timestamp",count:e}),this.commandEncoder=this.createCommandEncoder({id:this.commandEncoder.props.id,timeProfilingQuerySet:this._debugGPUTimeQuery})}catch{this._debugGPUTimeQuery=null}return this._debugGPUTimeQuery}_disableDebugGPUTime(){this._debugGPUTimeQuery&&(this.commandEncoder.getTimeProfilingQuerySet()===this._debugGPUTimeQuery&&(this.commandEncoder=this.createCommandEncoder({id:this.commandEncoder.props.id})),this._debugGPUTimeQuery.destroy(),this._debugGPUTimeQuery=null)}_isDebugGPUTimeEnabled(){return this._debugGPUTimeQuery!==null}getCanvasContext(){return this.getDefaultCanvasContext()}readPixelsToArrayWebGL(e,t){throw new Error("not implemented")}readPixelsToBufferWebGL(e,t){throw new Error("not implemented")}setParametersWebGL(e){throw new Error("not implemented")}getParametersWebGL(e){throw new Error("not implemented")}withParametersWebGL(e,t){throw new Error("not implemented")}clearWebGL(e){throw new Error("not implemented")}resetWebGL(){throw new Error("not implemented")}getModuleData(e){var t;return(t=this._moduleData)[e]||(t[e]={}),this._moduleData[e]}static _getCanvasContextProps(e){return e.createCanvasContext===!0?{}:e.createCanvasContext}_getDeviceTextureFormatCapabilities(e){const t=ee.getCapabilities(e),r=s=>(typeof s=="string"?this.features.has(s):s)??!0,i=r(t.create);return{format:e,create:i,render:i&&r(t.render),filter:i&&r(t.filter),blend:i&&r(t.blend),store:i&&r(t.store)}}_normalizeBufferProps(e){(e instanceof ArrayBuffer||ArrayBuffer.isView(e))&&(e={data:e});const t={...e};if((e.usage||0)&A.INDEX&&(e.indexType||(e.data instanceof Uint32Array?t.indexType="uint32":e.data instanceof Uint16Array?t.indexType="uint16":e.data instanceof Uint8Array&&(t.data=new Uint16Array(e.data),t.indexType="uint16")),!t.indexType))throw new Error("indices buffer content must be of type uint16 or uint32");return t}};l(Rn,"defaultProps",{...Af});let mn=Rn;class Ld{constructor(e){l(this,"props");l(this,"_resizeObserver");l(this,"_intersectionObserver");l(this,"_observeDevicePixelRatioTimeout",null);l(this,"_observeDevicePixelRatioMediaQuery",null);l(this,"_handleDevicePixelRatioChange",()=>this._refreshDevicePixelRatio());l(this,"_trackPositionInterval",null);l(this,"_started",!1);this.props=e}get started(){return this._started}start(){if(this._started||!this.props.canvas)return;this._started=!0,this._intersectionObserver||(this._intersectionObserver=new IntersectionObserver(t=>this.props.onIntersection(t))),this._resizeObserver||(this._resizeObserver=new ResizeObserver(t=>this.props.onResize(t))),this._intersectionObserver.observe(this.props.canvas);const e=this.props.resizeObserverBox;try{this._resizeObserver.observe(this.props.canvas,{box:e})}catch{this._resizeObserver.observe(this.props.canvas,{box:"content-box"})}this._observeDevicePixelRatioTimeout=setTimeout(()=>this._refreshDevicePixelRatio(),0),this.props.trackPosition&&this._trackPosition()}stop(){var e,t;this._started&&(this._started=!1,this._observeDevicePixelRatioTimeout&&(clearTimeout(this._observeDevicePixelRatioTimeout),this._observeDevicePixelRatioTimeout=null),this._observeDevicePixelRatioMediaQuery&&(this._observeDevicePixelRatioMediaQuery.removeEventListener("change",this._handleDevicePixelRatioChange),this._observeDevicePixelRatioMediaQuery=null),this._trackPositionInterval&&(clearInterval(this._trackPositionInterval),this._trackPositionInterval=null),(e=this._resizeObserver)==null||e.disconnect(),(t=this._intersectionObserver)==null||t.disconnect())}_refreshDevicePixelRatio(){var e;this._started&&(this.props.onDevicePixelRatioChange(),(e=this._observeDevicePixelRatioMediaQuery)==null||e.removeEventListener("change",this._handleDevicePixelRatioChange),this._observeDevicePixelRatioMediaQuery=matchMedia(`(resolution: ${window.devicePixelRatio}dppx)`),this._observeDevicePixelRatioMediaQuery.addEventListener("change",this._handleDevicePixelRatioChange,{once:!0}))}_trackPosition(e=100){this._trackPositionInterval||(this._trackPositionInterval=setInterval(()=>{this._started?this.props.onPositionChange():this._trackPositionInterval&&(clearInterval(this._trackPositionInterval),this._trackPositionInterval=null)},e))}}function Pd(){let n,e;return{promise:new Promise((r,i)=>{n=r,e=i}),resolve:n,reject:e}}function At(n,e){var t;if(!n){const r=new Error(e??"luma.gl assertion failed.");throw(t=Error.captureStackTrace)==null||t.call(Error,r,At),r}}function bn(n,e){return At(n,e),n}const Ye=class Ye{constructor(e){l(this,"id");l(this,"props");l(this,"canvas");l(this,"htmlCanvas");l(this,"offscreenCanvas");l(this,"type");l(this,"initialized");l(this,"isInitialized",!1);l(this,"isVisible",!0);l(this,"cssWidth");l(this,"cssHeight");l(this,"devicePixelRatio");l(this,"devicePixelWidth");l(this,"devicePixelHeight");l(this,"drawingBufferWidth");l(this,"drawingBufferHeight");l(this,"_initializedResolvers",Pd());l(this,"_canvasObserver");l(this,"_position",[0,0]);l(this,"destroyed",!1);l(this,"_needsDrawingBufferResize",!0);l(this,"_configuredDrawingBufferSize",[0,0]);var t,r;this.props={...Ye.defaultProps,...e},e=this.props,this.initialized=this._initializedResolvers.promise,oa()?e.canvas?typeof e.canvas=="string"?this.canvas=Cd(e.canvas):this.canvas=e.canvas:this.canvas=Id(e):this.canvas={width:e.width||1,height:e.height||1},Ye.isHTMLCanvas(this.canvas)?(this.id=e.id||this.canvas.id,this.type="html-canvas",this.htmlCanvas=this.canvas):Ye.isOffscreenCanvas(this.canvas)?(this.id=e.id||"offscreen-canvas",this.type="offscreen-canvas",this.offscreenCanvas=this.canvas):(this.id=e.id||"node-canvas-context",this.type="node"),this.cssWidth=((t=this.htmlCanvas)==null?void 0:t.clientWidth)||this.canvas.width,this.cssHeight=((r=this.htmlCanvas)==null?void 0:r.clientHeight)||this.canvas.height,this.devicePixelWidth=this.canvas.width,this.devicePixelHeight=this.canvas.height,this.drawingBufferWidth=this.canvas.width,this.drawingBufferHeight=this.canvas.height,this._configuredDrawingBufferSize=[this.canvas.width,this.canvas.height],this.devicePixelRatio=globalThis.devicePixelRatio||1,this._position=[0,0],this._canvasObserver=new Ld({canvas:this.htmlCanvas,trackPosition:this.props.trackPosition,resizeObserverBox:this.props.pixelSizeSource==="css-dpr"?"content-box":"device-pixel-content-box",onResize:i=>this._handleResize(i),onIntersection:i=>this._handleIntersection(i),onDevicePixelRatioChange:()=>this._observeDevicePixelRatio(),onPositionChange:()=>this.updatePosition()})}static isHTMLCanvas(e){return typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement}static isOffscreenCanvas(e){return typeof OffscreenCanvas<"u"&&e instanceof OffscreenCanvas}toString(){return`${this[Symbol.toStringTag]}(${this.id})`}destroy(){this.destroyed||(this.destroyed=!0,this._stopObservers(),this.device=null)}setProps(e){return"useDevicePixels"in e&&(this.props.useDevicePixels=e.useDevicePixels||!1,this._updateDrawingBufferSize()),this}getCurrentFramebuffer(e){return this._resizeDrawingBufferIfNeeded(),this._getCurrentFramebuffer(e)}getCSSSize(){return[this.cssWidth,this.cssHeight]}getPosition(){return this._position}getDevicePixelSize(){return[this.devicePixelWidth,this.devicePixelHeight]}getDrawingBufferSize(){return[this.drawingBufferWidth,this.drawingBufferHeight]}getMaxDrawingBufferSize(){const e=this.device.limits.maxTextureDimension2D;return[e,e]}setDrawingBufferSize(e,t){e=Math.floor(e),t=Math.floor(t),!(this.drawingBufferWidth===e&&this.drawingBufferHeight===t)&&(this.drawingBufferWidth=e,this.drawingBufferHeight=t,this._needsDrawingBufferResize=!0)}getDevicePixelRatio(){return typeof window<"u"&&window.devicePixelRatio||1}cssToDevicePixels(e,t=!0){const r=this.cssToDeviceRatio(),[i,s]=this.getDrawingBufferSize();return Od(e,r,i,s,t)}getPixelSize(){return this.getDevicePixelSize()}getAspect(){const[e,t]=this.getDrawingBufferSize();return e>0&&t>0?e/t:1}cssToDeviceRatio(){try{const[e]=this.getDrawingBufferSize(),[t]=this.getCSSSize();return t?e/t:1}catch{return 1}}resize(e){this.setDrawingBufferSize(e.width,e.height)}_setAutoCreatedCanvasId(e){var t;((t=this.htmlCanvas)==null?void 0:t.id)==="lumagl-auto-created-canvas"&&(this.htmlCanvas.id=e)}_startObservers(){this.destroyed||this._canvasObserver.start()}_stopObservers(){this._canvasObserver.stop()}_handleIntersection(e){if(this.destroyed)return;const t=e.find(i=>i.target===this.canvas);if(!t)return;const r=t.isIntersecting;this.isVisible!==r&&(this.isVisible=r,this.device.props.onVisibilityChange(this))}_handleResize(e){var s;if(this.destroyed)return;const t=e.find(o=>o.target===this.canvas);if(!t)return;const r=bn((s=t.contentBoxSize)==null?void 0:s[0]);this.cssWidth=r.inlineSize,this.cssHeight=r.blockSize;const i=this.getDevicePixelSize();this._setDevicePixelSize(this._getDevicePixelSizeFromResizeEntry(t)),this._updateDrawingBufferSize(),this.device.props.onResize(this,{oldPixelSize:i})}_updateDrawingBufferSize(){if(this.props.autoResize)if(typeof this.props.useDevicePixels=="number"){const e=this.props.useDevicePixels;this.setDrawingBufferSize(this.cssWidth*e,this.cssHeight*e)}else this.props.useDevicePixels?this.setDrawingBufferSize(this.devicePixelWidth,this.devicePixelHeight):this.setDrawingBufferSize(this.cssWidth,this.cssHeight);this._initializedResolvers.resolve(),this.isInitialized=!0,this.updatePosition()}_getDevicePixelSizeFromResizeEntry(e){var r,i,s,o,a;const t=bn((r=e.contentBoxSize)==null?void 0:r[0]);return this.props.pixelSizeSource==="css-dpr"?this._getDevicePixelSizeFromCSSSize(t.inlineSize,t.blockSize):{devicePixelWidth:((s=(i=e.devicePixelContentBoxSize)==null?void 0:i[0])==null?void 0:s.inlineSize)||t.inlineSize*devicePixelRatio,devicePixelHeight:((a=(o=e.devicePixelContentBoxSize)==null?void 0:o[0])==null?void 0:a.blockSize)||t.blockSize*devicePixelRatio}}_getDevicePixelSizeFromCSSSize(e,t){const r=this.getDevicePixelRatio();return{devicePixelWidth:Math.floor(e*r),devicePixelHeight:Math.floor(t*r)}}_setDevicePixelSize({devicePixelWidth:e,devicePixelHeight:t}){const[r,i]=this.getMaxDrawingBufferSize();this.devicePixelWidth=Math.max(1,Math.min(e,r)),this.devicePixelHeight=Math.max(1,Math.min(t,i))}_resizeDrawingBufferIfNeeded(){if(this._needsDrawingBufferResize){this._needsDrawingBufferResize=!1,(this.drawingBufferWidth!==this.canvas.width||this.drawingBufferHeight!==this.canvas.height)&&(this.canvas.width=this.drawingBufferWidth,this.canvas.height=this.drawingBufferHeight);const[t,r]=this._configuredDrawingBufferSize;(this.drawingBufferWidth!==t||this.drawingBufferHeight!==r)&&(this._configureDevice(),this._configuredDrawingBufferSize=[this.drawingBufferWidth,this.drawingBufferHeight])}}_observeDevicePixelRatio(){var t,r;if(this.destroyed||!this._canvasObserver.started)return;const e=this.devicePixelRatio;if(this.devicePixelRatio=window.devicePixelRatio,this.props.pixelSizeSource==="css-dpr"){const i=this.getDevicePixelSize();this._setDevicePixelSize(this._getDevicePixelSizeFromCSSSize(this.cssWidth,this.cssHeight)),this._updateDrawingBufferSize(),this.device.props.onResize(this,{oldPixelSize:i})}this.updatePosition(),(r=(t=this.device.props).onDevicePixelRatioChange)==null||r.call(t,this,{oldRatio:e})}updatePosition(){var t,r,i;if(this.destroyed)return;const e=(t=this.htmlCanvas)==null?void 0:t.getBoundingClientRect();if(e){const s=[e.left,e.top];if(this._position??(this._position=s),s[0]!==this._position[0]||s[1]!==this._position[1]){const a=this._position;this._position=s,(i=(r=this.device.props).onPositionChange)==null||i.call(r,this,{oldPosition:a})}}}};l(Ye,"defaultProps",{id:void 0,canvas:null,width:800,height:600,useDevicePixels:!0,pixelSizeSource:"exact",autoResize:!0,container:null,visible:!0,alphaMode:"opaque",colorSpace:"srgb",colorFormat:void 0,toneMapping:"standard",trackPosition:!1});let Xe=Ye;function Bd(n){if(typeof n=="string"){const e=document.getElementById(n);if(!e)throw new Error(`${n} is not an HTML element`);return e}return n||document.body}function Cd(n){const e=document.getElementById(n);if(!Xe.isHTMLCanvas(e))throw new Error("Object is not a canvas element");return e}function Id(n){const{width:e,height:t}=n,r=document.createElement("canvas");r.id=Ot("lumagl-auto-created-canvas"),r.width=e||1,r.height=t||1,r.style.width=Number.isFinite(e)?`${e}px`:"100%",r.style.height=Number.isFinite(t)?`${t}px`:"100%",n!=null&&n.visible||(r.style.visibility="hidden");const i=Bd((n==null?void 0:n.container)||null);return i.insertBefore(r,i.firstChild),r}function Od(n,e,t,r,i){const s=n,o=to(s[0],e,t);let a=no(s[1],e,r,i),c=to(s[0]+1,e,t);const u=c===t-1?c:c-1;c=no(s[1]+1,e,r,i);let f;return i?(c=c===0?c:c+1,f=a,a=c):f=c===r-1?c:c-1,{x:o,y:a,width:Math.max(u-o+1,1),height:Math.max(f-a+1,1)}}function to(n,e,t){return Math.min(Math.round(n*e),t-1)}function no(n,e,t,r){return r?Math.max(0,t-1-Math.round(n*e)):Math.min(Math.round(n*e),t-1)}class Wa extends Xe{}l(Wa,"defaultProps",Xe.defaultProps);class Rd extends Xe{}const vt=class vt extends T{get[Symbol.toStringTag](){return"Sampler"}constructor(e,t){t=vt.normalizeProps(e,t),super(e,t,vt.defaultProps)}static normalizeProps(e,t){return t}};l(vt,"defaultProps",{...T.defaultProps,type:"color-sampler",addressModeU:"clamp-to-edge",addressModeV:"clamp-to-edge",addressModeW:"clamp-to-edge",magFilter:"nearest",minFilter:"nearest",mipmapFilter:"none",lodMinClamp:0,lodMaxClamp:32,compare:"less-equal",maxAnisotropy:1});let _n=vt;const Md={"1d":"1d","2d":"2d","2d-array":"2d",cube:"2d","cube-array":"2d","3d":"3d"},B=class B extends T{constructor(t,r,i){r=B.normalizeProps(t,r);super(t,r,B.defaultProps);l(this,"dimension");l(this,"baseDimension");l(this,"format");l(this,"width");l(this,"height");l(this,"depth");l(this,"mipLevels");l(this,"samples");l(this,"byteAlignment");l(this,"ready",Promise.resolve(this));l(this,"isReady",!0);l(this,"updateTimestamp");if(this.dimension=this.props.dimension,this.baseDimension=Md[this.dimension],this.format=this.props.format,this.width=this.props.width,this.height=this.props.height,this.depth=this.props.depth,this.mipLevels=this.props.mipLevels,this.samples=this.props.samples||1,this.dimension==="cube"&&(this.depth=6),this.props.width===void 0||this.props.height===void 0)if(t.isExternalImage(r.data)){const s=t.getExternalImageSize(r.data);this.width=(s==null?void 0:s.width)||1,this.height=(s==null?void 0:s.height)||1}else this.width=1,this.height=1,(this.props.width===void 0||this.props.height===void 0)&&v.warn(`${this} created with undefined width or height. This is deprecated. Use DynamicTexture instead.`)();this.byteAlignment=(i==null?void 0:i.byteAlignment)||1,this.updateTimestamp=t.incrementTimestamp()}get[Symbol.toStringTag](){return"Texture"}toString(){return`Texture(${this.id},${this.format},${this.width}x${this.height})`}clone(t){return this.device.createTexture({...this.props,...t})}setSampler(t){this.sampler=t instanceof _n?t:this.device.createSampler(t)}copyImageData(t){const{data:r,depth:i,...s}=t;this.writeData(r,{...s,depthOrArrayLayers:s.depthOrArrayLayers??i})}computeMemoryLayout(t={}){const r=this._normalizeTextureReadOptions(t),{width:i=this.width,height:s=this.height,depthOrArrayLayers:o=this.depth}=r,{format:a,byteAlignment:c}=this;return ee.computeMemoryLayout({format:a,width:i,height:s,depth:o,byteAlignment:c})}readBuffer(t,r){throw new Error("readBuffer not implemented")}readDataAsync(t){throw new Error("readBuffer not implemented")}writeBuffer(t,r){throw new Error("readBuffer not implemented")}writeData(t,r){throw new Error("readBuffer not implemented")}readDataSyncWebGL(t){throw new Error("readDataSyncWebGL not available")}generateMipmapsWebGL(){throw new Error("generateMipmapsWebGL not available")}static normalizeProps(t,r){const i={...r},{width:s,height:o}=i;return typeof s=="number"&&(i.width=Math.max(1,Math.ceil(s))),typeof o=="number"&&(i.height=Math.max(1,Math.ceil(o))),i}_initializeData(t){this.device.isExternalImage(t)?this.copyExternalImage({image:t,width:this.width,height:this.height,depth:this.depth,mipLevel:0,x:0,y:0,z:0,aspect:"all",colorSpace:"srgb",premultipliedAlpha:!1,flipY:!1}):t&&this.copyImageData({data:t,mipLevel:0,x:0,y:0,z:0,aspect:"all"})}_normalizeCopyImageDataOptions(t){const{data:r,depth:i,...s}=t,o=this._normalizeTextureWriteOptions({...s,depthOrArrayLayers:s.depthOrArrayLayers??i});return{data:r,depth:o.depthOrArrayLayers,...o}}_normalizeCopyExternalImageOptions(t){const r=B._omitUndefined(t),i=r.mipLevel??0,s=this._getMipLevelSize(i),o=this.device.getExternalImageSize(t.image),a={...B.defaultCopyExternalImageOptions,...s,...o,...r};return a.width=Math.min(a.width,s.width-a.x),a.height=Math.min(a.height,s.height-a.y),a.depth=Math.min(a.depth,s.depthOrArrayLayers-a.z),a}_normalizeCopyElementImageOptions(t){const r=B._omitUndefined(t),i=r.mipLevel??0,s=this._getMipLevelSize(i),o={...B.defaultCopyElementImageOptions,...s,...r};return o.width=Math.min(o.width,s.width-o.x),o.height=Math.min(o.height,s.height-o.y),o.depth=Math.min(o.depth,s.depthOrArrayLayers-o.z),o}_normalizeTextureReadOptions(t){const r=B._omitUndefined(t),i=r.mipLevel??0,s=this._getMipLevelSize(i),o={...B.defaultTextureReadOptions,...s,...r};return o.width=Math.min(o.width,s.width-o.x),o.height=Math.min(o.height,s.height-o.y),o.depthOrArrayLayers=Math.min(o.depthOrArrayLayers,s.depthOrArrayLayers-o.z),o}_getSupportedColorReadOptions(t){const r=this._normalizeTextureReadOptions(t),i=ee.getInfo(this.format);switch(this._validateColorReadAspect(r),this._validateColorReadFormat(i),this.dimension){case"2d":case"cube":case"cube-array":case"2d-array":case"3d":return r;default:throw new Error(`${this} color readback does not support ${this.dimension} textures`)}}_validateColorReadAspect(t){if(t.aspect!=="all")throw new Error(`${this} color readback only supports aspect 'all'`)}_validateColorReadFormat(t){if(t.compressed)throw new Error(`${this} color readback does not support compressed formats (${this.format})`);switch(t.attachment){case"color":return;case"depth":throw new Error(`${this} color readback does not support depth formats (${this.format})`);case"stencil":throw new Error(`${this} color readback does not support stencil formats (${this.format})`);case"depth-stencil":throw new Error(`${this} color readback does not support depth-stencil formats (${this.format})`);default:throw new Error(`${this} color readback does not support format ${this.format}`)}}_normalizeTextureWriteOptions(t){const r=B._omitUndefined(t),i=r.mipLevel??0,s=this._getMipLevelSize(i),o={...B.defaultTextureWriteOptions,...s,...r};o.width=Math.min(o.width,s.width-o.x),o.height=Math.min(o.height,s.height-o.y),o.depthOrArrayLayers=Math.min(o.depthOrArrayLayers,s.depthOrArrayLayers-o.z);const a=ee.computeMemoryLayout({format:this.format,width:o.width,height:o.height,depth:o.depthOrArrayLayers,byteAlignment:this.byteAlignment}),c=a.bytesPerPixel*o.width;if(o.bytesPerRow=r.bytesPerRow??a.bytesPerRow,o.rowsPerImage=r.rowsPerImage??o.height,o.bytesPerRow<c)throw new Error(`bytesPerRow (${o.bytesPerRow}) must be at least ${c} for ${this.format}`);if(o.rowsPerImage<o.height)throw new Error(`rowsPerImage (${o.rowsPerImage}) must be at least ${o.height} for ${this.format}`);const u=this.device.getTextureFormatInfo(this.format).bytesPerPixel;if(u&&o.bytesPerRow%u!==0)throw new Error(`bytesPerRow (${o.bytesPerRow}) must be a multiple of bytesPerPixel (${u}) for ${this.format}`);return o}_getMipLevelSize(t){const r=Math.max(1,this.width>>t),i=this.baseDimension==="1d"?1:Math.max(1,this.height>>t),s=this.dimension==="3d"?Math.max(1,this.depth>>t):this.depth;return{width:r,height:i,depthOrArrayLayers:s}}getAllocatedByteLength(){let t=0;for(let r=0;r<this.mipLevels;r++){const{width:i,height:s,depthOrArrayLayers:o}=this._getMipLevelSize(r);t+=ee.computeMemoryLayout({format:this.format,width:i,height:s,depth:o,byteAlignment:1}).byteLength}return t*this.samples}static _omitUndefined(t){return Object.fromEntries(Object.entries(t).filter(([,r])=>r!==void 0))}};l(B,"SAMPLE",4),l(B,"STORAGE",8),l(B,"RENDER",16),l(B,"COPY_SRC",1),l(B,"COPY_DST",2),l(B,"TEXTURE",4),l(B,"RENDER_ATTACHMENT",16),l(B,"defaultProps",{...T.defaultProps,data:null,dimension:"2d",format:"rgba8unorm",usage:B.SAMPLE|B.RENDER|B.COPY_DST,width:void 0,height:void 0,depth:1,mipLevels:1,samples:void 0,sampler:{},view:void 0}),l(B,"defaultCopyDataOptions",{data:void 0,byteOffset:0,bytesPerRow:void 0,rowsPerImage:void 0,width:void 0,height:void 0,depthOrArrayLayers:void 0,depth:1,mipLevel:0,x:0,y:0,z:0,aspect:"all"}),l(B,"defaultCopyExternalImageOptions",{image:void 0,sourceX:0,sourceY:0,width:void 0,height:void 0,depth:1,mipLevel:0,x:0,y:0,z:0,aspect:"all",colorSpace:"srgb",premultipliedAlpha:!1,flipY:!1}),l(B,"defaultCopyElementImageOptions",{element:void 0,width:void 0,height:void 0,sourceX:0,sourceY:0,sourceWidth:void 0,sourceHeight:void 0,depth:1,mipLevel:0,x:0,y:0,z:0,aspect:"all",colorSpace:"srgb",premultipliedAlpha:!1,flipY:!1}),l(B,"defaultTextureReadOptions",{x:0,y:0,z:0,width:void 0,height:void 0,depthOrArrayLayers:1,mipLevel:0,aspect:"all"}),l(B,"defaultTextureWriteOptions",{byteOffset:0,bytesPerRow:void 0,rowsPerImage:void 0,x:0,y:0,z:0,width:void 0,height:void 0,depthOrArrayLayers:1,mipLevel:0,aspect:"all"});let j=B;const Mn=class Mn extends T{get[Symbol.toStringTag](){return"TextureView"}constructor(e,t){super(e,t,Mn.defaultProps)}};l(Mn,"defaultProps",{...T.defaultProps,format:void 0,dimension:void 0,aspect:"all",baseMipLevel:0,mipLevelCount:void 0,baseArrayLayer:0,arrayLayerCount:void 0});let yn=Mn;const Dn=class Dn extends T{constructor(t,r){super(t,r,Dn.defaultProps);l(this,"width");l(this,"height");l(this,"updateTimestamp");const i=this.props.source?t.getExternalImageSize(this.props.source):null;this.width=this.props.width||(i==null?void 0:i.width)||0,this.height=this.props.height||(i==null?void 0:i.height)||0,this.updateTimestamp=t.incrementTimestamp()}get[Symbol.toStringTag](){return"ExternalTexture"}};l(Dn,"defaultProps",{...T.defaultProps,source:void 0,width:0,height:0,colorSpace:"srgb",sampler:{}});let si=Dn;function Dd(n,e,t){let r="";const i=e.split(/\r?\n/),s=n.slice().sort((o,a)=>o.lineNum-a.lineNum);switch((t==null?void 0:t.showSourceCode)||"no"){case"all":let o=0;for(let a=1;a<=i.length;a++){const c=i[a-1],u=s[o];for(c&&u&&(r+=ja(c,a,t));s.length>o&&u.lineNum===a;){const f=s[o++];f&&(r+=vr(f,i,f.lineNum,{...t,inlineSource:!1}))}}for(;s.length>o;){const a=s[o++];a&&(r+=vr(a,[],0,{...t,inlineSource:!1}))}return r;case"issues":case"no":for(const a of n)r+=vr(a,i,a.lineNum,{inlineSource:(t==null?void 0:t.showSourceCode)!=="no"});return r}}function vr(n,e,t,r){if(r!=null&&r.inlineSource){const s=$d(e,t),o=n.linePos>0?`${" ".repeat(n.linePos+5)}^^^
`:"";return`
${s}${o}${n.type.toUpperCase()}: ${n.message}

`}const i=n.type==="error"?"red":"orange";return r!=null&&r.html?`<div class='luma-compiler-log-${n.type}' style="color:${i};"><b> ${n.type.toUpperCase()}: ${n.message}</b></div>`:`${n.type.toUpperCase()}: ${n.message}`}function $d(n,e,t){let r="";for(let i=e-2;i<=e;i++){const s=n[i-1];s!==void 0&&(r+=ja(s,e,t))}return r}function ja(n,e,t){const r=t!=null&&t.html?Ud(n):n;return`${kd(String(e),4)}: ${r}${t!=null&&t.html?"<br/>":`
`}`}function kd(n,e){let t="";for(let r=n.length;r<e;++r)t+=" ";return t+n}function Ud(n){return n.replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#039;")}const $n=class $n extends T{constructor(t,r){r={...r,debugShaders:r.debugShaders||t.props.debugShaders||"errors"};super(t,{id:Nd(r),...r},$n.defaultProps);l(this,"stage");l(this,"source");l(this,"compilationStatus","pending");this.stage=this.props.stage,this.source=this.props.source}get[Symbol.toStringTag](){return"Shader"}getCompilationInfoSync(){return null}getTranslatedSource(){return null}async debugShader(){const t=this.props.debugShaders;switch(t){case"never":return;case"errors":if(this.compilationStatus==="success")return;break}try{const r=await this.getCompilationInfo();if(t==="warnings"&&(r==null?void 0:r.length)===0)return;this._displayShaderLog(r,this.id)}catch(r){v.warn(`Shader ${this.id}: failed to fetch compilation info during debug logging`,r)()}}_displayShaderLog(t,r){if(typeof document>"u"||!(document!=null&&document.createElement))return;const i=r,s=`${this.stage} shader "${i}"`,o=Dd(t,this.source,{showSourceCode:"all",html:!0}),a=this.getTranslatedSource(),c=document.createElement("div");c.innerHTML=`<h1>Compilation error in ${s}</h1>
<div style="display:flex;position:fixed;top:10px;right:20px;gap:2px;">
<button id="copy">Copy source</button><br/>
<button id="close">Close</button>
</div>
<code><pre>${o}</pre></code>`,a&&(c.innerHTML+=`<br /><h1>Translated Source</h1><br /><br /><code><pre>${a}</pre></code>`),c.style.top="0",c.style.left="0",c.style.background="white",c.style.position="fixed",c.style.zIndex="9999",c.style.maxWidth="100vw",c.style.maxHeight="100vh",c.style.overflowY="auto",document.body.appendChild(c);const u=c.querySelector(".luma-compiler-log-error");u==null||u.scrollIntoView(),c.querySelector("button#close").onclick=()=>{c.remove()},c.querySelector("button#copy").onclick=()=>{navigator.clipboard.writeText(this.source)}}};l($n,"defaultProps",{...T.defaultProps,language:"auto",stage:void 0,source:"",sourceMap:null,entryPoint:"main",debugShaders:void 0});let wn=$n;function Nd(n){return Fd(n.source)||n.id||Ot(`unnamed ${n.stage}-shader`)}function Fd(n,e="unnamed"){const r=/#define[\s*]SHADER_NAME[\s*]([A-Za-z0-9_-]+)[\s*]/.exec(n);return(r==null?void 0:r[1])??e}const kn=class kn extends T{constructor(t,r={}){super(t,r,kn.defaultProps);l(this,"width");l(this,"height");this.width=this.props.width,this.height=this.props.height}get[Symbol.toStringTag](){return"Framebuffer"}clone(t){const r=this.colorAttachments.map(s=>s.texture.clone(t)),i=this.depthStencilAttachment&&this.depthStencilAttachment.texture.clone(t);return this.device.createFramebuffer({...this.props,...t,colorAttachments:r,depthStencilAttachment:i})}resize(t){let r=!t;if(t){const[i,s]=Array.isArray(t)?t:[t.width,t.height];r=r||s!==this.height||i!==this.width,this.width=i,this.height=s}r&&(v.log(2,`Resizing framebuffer ${this.id} to ${this.width}x${this.height}`)(),this.resizeAttachments(this.width,this.height))}autoCreateAttachmentTextures(){if(this.props.colorAttachments.length===0&&!this.props.depthStencilAttachment)throw new Error("Framebuffer has noattachments");this.colorAttachments=this.props.colorAttachments.map((r,i)=>{if(typeof r=="string"){const s=this.createColorTexture(r,i);return this.attachResource(s),s.view}return r instanceof j?r.view:r});const t=this.props.depthStencilAttachment;if(t)if(typeof t=="string"){const r=this.createDepthStencilTexture(t);this.attachResource(r),this.depthStencilAttachment=r.view}else t instanceof j?this.depthStencilAttachment=t.view:this.depthStencilAttachment=t}createColorTexture(t,r){return this.device.createTexture({id:`${this.id}-color-attachment-${r}`,usage:j.RENDER_ATTACHMENT,format:t,width:this.width,height:this.height,sampler:{magFilter:"linear",minFilter:"linear"}})}createDepthStencilTexture(t){return this.device.createTexture({id:`${this.id}-depth-stencil-attachment`,usage:j.RENDER_ATTACHMENT|j.SAMPLE,format:t,width:this.width,height:this.height})}resizeAttachments(t,r){if(this.colorAttachments.forEach((i,s)=>{const o=i.texture.clone({width:t,height:r});this.destroyAttachedResource(i),this.colorAttachments[s]=o.view,this.attachResource(o.view)}),this.depthStencilAttachment){const i=this.depthStencilAttachment.texture.clone({width:t,height:r});this.destroyAttachedResource(this.depthStencilAttachment),this.depthStencilAttachment=i.view,this.attachResource(i)}this.updateAttachments()}};l(kn,"defaultProps",{...T.defaultProps,width:1,height:1,colorAttachments:[],depthStencilAttachment:null});let vn=kn;const Un=class Un extends T{constructor(t,r){super(t,r,Un.defaultProps);l(this,"shaderLayout");l(this,"bufferLayout");l(this,"linkStatus","pending");l(this,"hash","");l(this,"sharedRenderPipeline",null);this.shaderLayout=this.props.shaderLayout,this.bufferLayout=this.props.bufferLayout||[],this.sharedRenderPipeline=this.props._sharedRenderPipeline||null}get[Symbol.toStringTag](){return"RenderPipeline"}get isPending(){var t;return this.linkStatus==="pending"||this.vs.compilationStatus==="pending"||((t=this.fs)==null?void 0:t.compilationStatus)==="pending"}get isErrored(){var t;return this.linkStatus==="error"||this.vs.compilationStatus==="error"||((t=this.fs)==null?void 0:t.compilationStatus)==="error"}};l(Un,"defaultProps",{...T.defaultProps,vs:null,vertexEntryPoint:"vertexMain",vsConstants:{},fs:null,fragmentEntryPoint:"fragmentMain",fsConstants:{},shaderLayout:null,bufferLayout:[],topology:"triangle-list",colorAttachmentFormats:void 0,depthStencilAttachmentFormat:void 0,parameters:{},varyings:void 0,bufferMode:void 0,disableWarnings:!1,_sharedRenderPipeline:void 0,_uniformBlockLayouts:[],bindings:void 0,bindGroups:void 0});let ye=Un;class Gd extends T{get[Symbol.toStringTag](){return"SharedRenderPipeline"}constructor(e,t){super(e,t,{...T.defaultProps,handle:void 0,vs:void 0,fs:void 0,varyings:void 0,bufferMode:void 0})}}const Nn=class Nn extends T{constructor(t,r){super(t,r,Nn.defaultProps);l(this,"hash","");l(this,"shaderLayout");this.shaderLayout=r.shaderLayout}get[Symbol.toStringTag](){return"ComputePipeline"}};l(Nn,"defaultProps",{...T.defaultProps,shader:void 0,entryPoint:void 0,constants:{},shaderLayout:void 0});let Tt=Nn;const Fn=class Fn{constructor(e){l(this,"device");l(this,"_hashCounter",0);l(this,"_hashes",{});l(this,"_renderPipelineCache",{});l(this,"_computePipelineCache",{});l(this,"_sharedRenderPipelineCache",{});this.device=e}static getDefaultPipelineFactory(e){const t=e.getModuleData("@luma.gl/core");return t.defaultPipelineFactory||(t.defaultPipelineFactory=new Fn(e)),t.defaultPipelineFactory}get[Symbol.toStringTag](){return"PipelineFactory"}toString(){return`PipelineFactory(${this.device.id})`}createRenderPipeline(e){var o;if(!this.device.props._cachePipelines)return this.device.createRenderPipeline(e);const t={...ye.defaultProps,...e},r=this._renderPipelineCache,i=this._hashRenderPipeline(t);let s=(o=r[i])==null?void 0:o.resource;if(s)r[i].useCount++,this.device.props.debugFactories&&v.log(3,`${this}: ${r[i].resource} reused, count=${r[i].useCount}, (id=${e.id})`)();else{const a=this.device.type==="webgl"&&this.device.props._sharePipelines?this.createSharedRenderPipeline(t):void 0;s=this.device.createRenderPipeline({...t,id:t.id?`${t.id}-cached`:Ot("unnamed-cached"),_sharedRenderPipeline:a}),s.hash=i,r[i]={resource:s,useCount:1},this.device.props.debugFactories&&v.log(3,`${this}: ${s} created, count=${r[i].useCount}`)()}return s}createComputePipeline(e){var o;if(!this.device.props._cachePipelines)return this.device.createComputePipeline(e);const t={...Tt.defaultProps,...e},r=this._computePipelineCache,i=this._hashComputePipeline(t);let s=(o=r[i])==null?void 0:o.resource;return s?(r[i].useCount++,this.device.props.debugFactories&&v.log(3,`${this}: ${r[i].resource} reused, count=${r[i].useCount}, (id=${e.id})`)()):(s=this.device.createComputePipeline({...t,id:t.id?`${t.id}-cached`:void 0}),s.hash=i,r[i]={resource:s,useCount:1},this.device.props.debugFactories&&v.log(3,`${this}: ${s} created, count=${r[i].useCount}`)()),s}release(e){if(!this.device.props._cachePipelines){e.destroy();return}const t=this._getCache(e),r=e.hash;t[r].useCount--,t[r].useCount===0?(this._destroyPipeline(e),this.device.props.debugFactories&&v.log(3,`${this}: ${e} released and destroyed`)()):t[r].useCount<0?(v.error(`${this}: ${e} released, useCount < 0, resetting`)(),t[r].useCount=0):this.device.props.debugFactories&&v.log(3,`${this}: ${e} released, count=${t[r].useCount}`)()}createSharedRenderPipeline(e){const t=this._hashSharedRenderPipeline(e);let r=this._sharedRenderPipelineCache[t];return r||(r={resource:this.device._createSharedRenderPipelineWebGL(e),useCount:0},this._sharedRenderPipelineCache[t]=r),r.useCount++,r.resource}releaseSharedRenderPipeline(e){if(!e.sharedRenderPipeline)return;const t=this._hashSharedRenderPipeline(e.sharedRenderPipeline.props),r=this._sharedRenderPipelineCache[t];r&&(r.useCount--,r.useCount===0&&(r.resource.destroy(),delete this._sharedRenderPipelineCache[t]))}_destroyPipeline(e){const t=this._getCache(e);return this.device.props._destroyPipelines?(delete t[e.hash],e.destroy(),e instanceof ye&&this.releaseSharedRenderPipeline(e),!0):!1}_getCache(e){let t;if(e instanceof Tt&&(t=this._computePipelineCache),e instanceof ye&&(t=this._renderPipelineCache),!t)throw new Error(`${this}`);if(!t[e.hash])throw new Error(`${this}: ${e} matched incorrect entry`);return t}_hashComputePipeline(e){const{type:t}=this.device,r=this._getHash(e.shader.source),i=this._getHash(JSON.stringify(e.shaderLayout));return`${t}/C/${r}SL${i}`}_hashRenderPipeline(e){const t=e.vs?this._getHash(e.vs.source):0,r=e.fs?this._getHash(e.fs.source):0,i=this._getWebGLVaryingHash(e),s=this._getHash(JSON.stringify(e.shaderLayout)),o=this._getHash(JSON.stringify(e._uniformBlockLayouts)),a=this._getHash(JSON.stringify(e.bufferLayout)),{type:c}=this.device;switch(c){case"webgl":const u=this._getHash(JSON.stringify(e.parameters));return`${c}/R/${t}/${r}V${i}T${e.topology}P${u}SL${s}UBL${o}BL${a}`;case"webgpu":default:const f=this._getHash(JSON.stringify({vertexEntryPoint:e.vertexEntryPoint,fragmentEntryPoint:e.fragmentEntryPoint})),d=this._getHash(JSON.stringify(e.parameters)),h=this._getWebGPUAttachmentHash(e);return`${c}/R/${t}/${r}V${i}T${e.topology}EP${f}P${d}SL${s}BL${a}A${h}`}}_hashSharedRenderPipeline(e){const t=e.vs?this._getHash(e.vs.source):0,r=e.fs?this._getHash(e.fs.source):0,i=this._getWebGLVaryingHash(e);return`webgl/S/${t}/${r}V${i}`}_getHash(e){return this._hashes[e]===void 0&&(this._hashes[e]=this._hashCounter++),this._hashes[e]}_getWebGLVaryingHash(e){const{varyings:t=[],bufferMode:r=null}=e;return this._getHash(JSON.stringify({varyings:t,bufferMode:r}))}_getWebGPUAttachmentHash(e){var i;const t=e.colorAttachmentFormats??[this.device.preferredColorFormat],r=e.depthStencilAttachmentFormat??((i=e.parameters)!=null&&i.depthWriteEnabled?this.device.preferredDepthFormat:null);return this._getHash(JSON.stringify({colorAttachmentFormats:t,depthStencilAttachmentFormat:r}))}};l(Fn,"defaultProps",{...ye.defaultProps});let xn=Fn;const Gn=class Gn{constructor(e){l(this,"device");l(this,"_cache",{});this.device=e}static getDefaultShaderFactory(e){const t=e.getModuleData("@luma.gl/core");return t.defaultShaderFactory||(t.defaultShaderFactory=new Gn(e)),t.defaultShaderFactory}get[Symbol.toStringTag](){return"ShaderFactory"}toString(){return`${this[Symbol.toStringTag]}(${this.device.id})`}createShader(e){if(!this.device.props._cacheShaders)return this.device.createShader(e);const t=this._hashShader(e);let r=this._cache[t];if(r)r.useCount++,this.device.props.debugFactories&&v.log(3,`${this}: Reusing shader ${r.resource.id} count=${r.useCount}`)();else{const i=this.device.createShader({...e,id:e.id?`${e.id}-cached`:void 0});this._cache[t]=r={resource:i,useCount:1},this.device.props.debugFactories&&v.log(3,`${this}: Created new shader ${i.id}`)()}return r.resource}release(e){if(!this.device.props._cacheShaders){e.destroy();return}const t=this._hashShader(e),r=this._cache[t];if(r)if(r.useCount--,r.useCount===0)this.device.props._destroyShaders&&(delete this._cache[t],r.resource.destroy(),this.device.props.debugFactories&&v.log(3,`${this}: Releasing shader ${e.id}, destroyed`)());else{if(r.useCount<0)throw new Error(`ShaderFactory: Shader ${e.id} released too many times`);this.device.props.debugFactories&&v.log(3,`${this}: Releasing shader ${e.id} count=${r.useCount}`)()}}_hashShader(e){return`${e.stage}:${e.source}`}};l(Gn,"defaultProps",{...wn.defaultProps});let Sn=Gn;function Va(n,e,t){const r=n.bindings.find(i=>i.name===e||`${i.name.toLocaleLowerCase()}uniforms`===e.toLocaleLowerCase());return!r&&!(t!=null&&t.ignoreWarnings)&&v.warn(`Binding ${e} not set: Not found in shader layout.`)(),r||null}function Xi(n,e){if(!e)return{};if(zd(e))return Object.fromEntries(Object.entries(e).map(([i,s])=>[Number(i),{...s}]));const t={};for(const[r,i]of Object.entries(e)){const s=Va(n,r),o=(s==null?void 0:s.group)??0;t[o]||(t[o]={}),t[o][r]=i}return t}function oi(n){const e={};for(const t of Object.values(n))Object.assign(e,t);return e}function zd(n){const e=Object.keys(n);return e.length>0&&e.every(t=>/^\d+$/.test(t))}const J=class J extends T{get[Symbol.toStringTag](){return"RenderPass"}constructor(e,t,r=J.defaultProps){t=J.normalizeProps(e,t),super(e,t,r)}static normalizeProps(e,t){return t}};l(J,"defaultClearColor",[0,0,0,1]),l(J,"defaultClearDepth",1),l(J,"defaultClearStencil",0),l(J,"defaultProps",{...T.defaultProps,framebuffer:null,resolveTargets:void 0,parameters:void 0,clearColor:J.defaultClearColor,clearColors:void 0,clearDepth:J.defaultClearDepth,clearStencil:J.defaultClearStencil,depthReadOnly:!1,stencilReadOnly:!1,discard:!1,occlusionQuerySet:void 0,timestampQuerySet:void 0,beginTimestampIndex:void 0,endTimestampIndex:void 0});let ai=J;const zn=class zn extends T{constructor(t,r){super(t,r,zn.defaultProps);l(this,"_timeProfilingQuerySet",null);l(this,"_timeProfilingSlotCount",0);l(this,"_gpuTimeMs");this._timeProfilingQuerySet=r.timeProfilingQuerySet??null,this._timeProfilingSlotCount=0,this._gpuTimeMs=void 0}get[Symbol.toStringTag](){return"CommandEncoder"}async resolveTimeProfilingQuerySet(){if(this._gpuTimeMs=void 0,!this._timeProfilingQuerySet)return;const t=Math.floor(this._timeProfilingSlotCount/2);if(t<=0)return;const r=t*2,i=await this._timeProfilingQuerySet.readResults({firstQuery:0,queryCount:r});let s=0n;for(let o=0;o<r;o+=2)s+=i[o+1]-i[o];this._gpuTimeMs=Number(s)/1e6}getTimeProfilingSlotCount(){return this._timeProfilingSlotCount}getTimeProfilingQuerySet(){return this._timeProfilingQuerySet}_applyTimeProfilingToPassProps(t){const r=t||{};if(!this._supportsTimestampQueries()||!this._timeProfilingQuerySet||r.timestampQuerySet!==void 0||r.beginTimestampIndex!==void 0||r.endTimestampIndex!==void 0)return r;const i=this._timeProfilingSlotCount;return i+1>=this._timeProfilingQuerySet.props.count?r:(this._timeProfilingSlotCount+=2,{...r,timestampQuerySet:this._timeProfilingQuerySet,beginTimestampIndex:i,endTimestampIndex:i+1})}_supportsTimestampQueries(){return this.device.features.has("timestamp-query")}};l(zn,"defaultProps",{...T.defaultProps,measureExecutionTime:void 0,timeProfilingQuerySet:void 0});let ci=zn;const Wn=class Wn extends T{get[Symbol.toStringTag](){return"CommandBuffer"}constructor(e,t){super(e,t,Wn.defaultProps)}};l(Wn,"defaultProps",{...T.defaultProps});let ui=Wn;const jn=class jn extends T{constructor(t,r){super(t,r,jn.defaultProps);l(this,"maxVertexAttributes");l(this,"indexBuffer",null);l(this,"attributes");this.maxVertexAttributes=t.limits.maxVertexAttributes,this.attributes=new Array(this.maxVertexAttributes).fill(null)}get[Symbol.toStringTag](){return"VertexArray"}getBufferSlot(t){return null}getDrawValidationError(){return null}setConstantWebGL(t,r){this.device.reportError(new Error("constant attributes not supported"),this)()}};l(jn,"defaultProps",{...T.defaultProps,shaderLayout:void 0,bufferLayout:[]});let li=jn;const Vn=class Vn extends T{get[Symbol.toStringTag](){return"TransformFeedback"}constructor(e,t){super(e,t,Vn.defaultProps)}};l(Vn,"defaultProps",{...T.defaultProps,layout:void 0,buffers:{}});let fi=Vn;const Hn=class Hn extends T{get[Symbol.toStringTag](){return"QuerySet"}constructor(e,t){super(e,t,Hn.defaultProps)}};l(Hn,"defaultProps",{...T.defaultProps,type:void 0,count:void 0});let di=Hn;const Yn=class Yn extends T{get[Symbol.toStringTag](){return"Fence"}constructor(e,t={}){super(e,t,Yn.defaultProps)}};l(Yn,"defaultProps",{...T.defaultProps});let hi=Yn;function Zi(n){const e=Ki(n),t=qd[e];if(!t)throw new Error(`Unsupported variable shader type: ${n}`);return t}function Wd(n){const e=Ha(n),t=Yd[e];if(!t)throw new Error(`Unsupported attribute shader type: ${n}`);const[r,i]=t,s=r==="i32"||r==="u32",o=r!=="u32",a=Hd[r]*i;return{primitiveType:r,components:i,byteLength:a,integer:s,signed:o}}class jd{getVariableShaderTypeInfo(e){return Zi(e)}getAttributeShaderTypeInfo(e){return Wd(e)}makeShaderAttributeType(e,t){return Vd(e,t)}resolveAttributeShaderTypeAlias(e){return Ha(e)}resolveVariableShaderTypeAlias(e){return Ki(e)}}function Vd(n,e){return e===1?n:`vec${e}<${n}>`}function Ha(n){return Qd[n]||n}function Ki(n){return Xd[n]||n}const nt=new jd,Hd={f32:4,f16:2,i32:4,u32:4},Yd={f32:["f32",1],"vec2<f32>":["f32",2],"vec3<f32>":["f32",3],"vec4<f32>":["f32",4],f16:["f16",1],"vec2<f16>":["f16",2],"vec3<f16>":["f16",3],"vec4<f16>":["f16",4],i32:["i32",1],"vec2<i32>":["i32",2],"vec3<i32>":["i32",3],"vec4<i32>":["i32",4],u32:["u32",1],"vec2<u32>":["u32",2],"vec3<u32>":["u32",3],"vec4<u32>":["u32",4]},qd={f32:{type:"f32",components:1},f16:{type:"f16",components:1},i32:{type:"i32",components:1},u32:{type:"u32",components:1},"vec2<f32>":{type:"f32",components:2},"vec3<f32>":{type:"f32",components:3},"vec4<f32>":{type:"f32",components:4},"vec2<f16>":{type:"f16",components:2},"vec3<f16>":{type:"f16",components:3},"vec4<f16>":{type:"f16",components:4},"vec2<i32>":{type:"i32",components:2},"vec3<i32>":{type:"i32",components:3},"vec4<i32>":{type:"i32",components:4},"vec2<u32>":{type:"u32",components:2},"vec3<u32>":{type:"u32",components:3},"vec4<u32>":{type:"u32",components:4},"mat2x2<f32>":{type:"f32",components:4},"mat2x3<f32>":{type:"f32",components:6},"mat2x4<f32>":{type:"f32",components:8},"mat3x2<f32>":{type:"f32",components:6},"mat3x3<f32>":{type:"f32",components:9},"mat3x4<f32>":{type:"f32",components:12},"mat4x2<f32>":{type:"f32",components:8},"mat4x3<f32>":{type:"f32",components:12},"mat4x4<f32>":{type:"f32",components:16},"mat2x2<f16>":{type:"f16",components:4},"mat2x3<f16>":{type:"f16",components:6},"mat2x4<f16>":{type:"f16",components:8},"mat3x2<f16>":{type:"f16",components:6},"mat3x3<f16>":{type:"f16",components:9},"mat3x4<f16>":{type:"f16",components:12},"mat4x2<f16>":{type:"f16",components:8},"mat4x3<f16>":{type:"f16",components:12},"mat4x4<f16>":{type:"f16",components:16},"mat2x2<i32>":{type:"i32",components:4},"mat2x3<i32>":{type:"i32",components:6},"mat2x4<i32>":{type:"i32",components:8},"mat3x2<i32>":{type:"i32",components:6},"mat3x3<i32>":{type:"i32",components:9},"mat3x4<i32>":{type:"i32",components:12},"mat4x2<i32>":{type:"i32",components:8},"mat4x3<i32>":{type:"i32",components:12},"mat4x4<i32>":{type:"i32",components:16},"mat2x2<u32>":{type:"u32",components:4},"mat2x3<u32>":{type:"u32",components:6},"mat2x4<u32>":{type:"u32",components:8},"mat3x2<u32>":{type:"u32",components:6},"mat3x3<u32>":{type:"u32",components:9},"mat3x4<u32>":{type:"u32",components:12},"mat4x2<u32>":{type:"u32",components:8},"mat4x3<u32>":{type:"u32",components:12},"mat4x4<u32>":{type:"u32",components:16}},Qd={vec2i:"vec2<i32>",vec3i:"vec3<i32>",vec4i:"vec4<i32>",vec2u:"vec2<u32>",vec3u:"vec3<u32>",vec4u:"vec4<u32>",vec2f:"vec2<f32>",vec3f:"vec3<f32>",vec4f:"vec4<f32>",vec2h:"vec2<f16>",vec3h:"vec3<f16>",vec4h:"vec4<f16>"},Xd={vec2i:"vec2<i32>",vec3i:"vec3<i32>",vec4i:"vec4<i32>",vec2u:"vec2<u32>",vec3u:"vec3<u32>",vec4u:"vec4<u32>",vec2f:"vec2<f32>",vec3f:"vec3<f32>",vec4f:"vec4<f32>",vec2h:"vec2<f16>",vec3h:"vec3<f16>",vec4h:"vec4<f16>",mat2x2f:"mat2x2<f32>",mat2x3f:"mat2x3<f32>",mat2x4f:"mat2x4<f32>",mat3x2f:"mat3x2<f32>",mat3x3f:"mat3x3<f32>",mat3x4f:"mat3x4<f32>",mat4x2f:"mat4x2<f32>",mat4x3f:"mat4x3<f32>",mat4x4f:"mat4x4<f32>",mat2x2i:"mat2x2<i32>",mat2x3i:"mat2x3<i32>",mat2x4i:"mat2x4<i32>",mat3x2i:"mat3x2<i32>",mat3x3i:"mat3x3<i32>",mat3x4i:"mat3x4<i32>",mat4x2i:"mat4x2<i32>",mat4x3i:"mat4x3<i32>",mat4x4i:"mat4x4<i32>",mat2x2u:"mat2x2<u32>",mat2x3u:"mat2x3<u32>",mat2x4u:"mat2x4<u32>",mat3x2u:"mat3x2<u32>",mat3x3u:"mat3x3<u32>",mat3x4u:"mat3x4<u32>",mat4x2u:"mat4x2<u32>",mat4x3u:"mat4x3<u32>",mat4x4u:"mat4x4<u32>",mat2x2h:"mat2x2<f16>",mat2x3h:"mat2x3<f16>",mat2x4h:"mat2x4<f16>",mat3x2h:"mat3x2<f16>",mat3x3h:"mat3x3<f16>",mat3x4h:"mat3x4<f16>",mat4x2h:"mat4x2<f16>",mat4x3h:"mat4x3<f16>",mat4x4h:"mat4x4<f16>"};function Ji(n,e={}){const t={...n},r=e.layout??"std140",i={};let s=0;for(const[o,a]of Object.entries(t))s=gi(i,o,a,s,r);return s=oe(s,Se(t,r)),{layout:r,byteLength:s*4,uniformTypes:t,fields:i}}function tr(n,e){const t=Ki(n),r=Zi(t),i=/^mat(\d)x(\d)<.+>$/.exec(t);if(i){const o=Number(i[1]),a=Number(i[2]),c=ro(a,t,r.type),u=Kd(c.size,c.alignment,e);return{alignment:c.alignment,size:o*u,components:o*a,columns:o,rows:a,columnStride:u,shaderType:t,type:r.type}}const s=/^vec(\d)<.+>$/.exec(t);return s?ro(Number(s[1]),t,r.type):{alignment:1,size:1,components:1,columns:1,rows:1,columnStride:1,shaderType:t,type:r.type}}function Ya(n){return!!n&&typeof n=="object"&&!Array.isArray(n)}function gi(n,e,t,r,i){if(typeof t=="string"){const s=tr(t,i),o=oe(r,s.alignment);return n[e]={offset:o,...s},o+s.size}if(Array.isArray(t)){if(Array.isArray(t[0]))throw new Error(`Nested arrays are not supported for ${e}`);const s=t[0],o=t[1],a=Qa(s,i),c=oe(r,Se(t,i));for(let u=0;u<o;u++)gi(n,`${e}[${u}]`,s,c+u*a,i);return c+a*o}if(Ya(t)){const s=Se(t,i);let o=oe(r,s);for(const[a,c]of Object.entries(t))o=gi(n,`${e}.${a}`,c,o,i);return oe(o,s)}throw new Error(`Unsupported CompositeShaderType for ${e}`)}function qa(n,e){if(typeof n=="string")return tr(n,e).size;if(Array.isArray(n)){const r=n[0],i=n[1];if(Array.isArray(r))throw new Error("Nested arrays are not supported");return Qa(r,e)*i}let t=0;for(const r of Object.values(n)){const i=r;t=oe(t,Se(i,e)),t+=qa(i,e)}return oe(t,Se(n,e))}function Se(n,e){if(typeof n=="string")return tr(n,e).alignment;if(Array.isArray(n)){const r=n[0],i=Se(r,e);return Xa(e)?Math.max(i,4):i}let t=1;for(const r of Object.values(n)){const i=Se(r,e);t=Math.max(t,i)}return Jd(e)?Math.max(t,4):t}function ro(n,e,t,r){return{alignment:n===2?2:4,size:n===3?3:n,components:n,columns:1,rows:n,columnStride:n===3?3:n,shaderType:e,type:t}}function Qa(n,e){const t=qa(n,e),r=Se(n,e);return Zd(t,r,e)}function Zd(n,e,t){return oe(n,Xa(t)?4:e)}function Kd(n,e,t){return t==="std140"?4:oe(n,e)}function Xa(n){return n==="std140"||n==="wgsl-uniform"}function Jd(n){return n==="std140"||n==="wgsl-uniform"}let Vt;function Za(n){return(!Vt||Vt.byteLength<n)&&(Vt=new ArrayBuffer(n)),Vt}function eh(n,e){const t=Za(n.BYTES_PER_ELEMENT*e);return new n(t,0,e)}function th(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function En(n){return Array.isArray(n)?n.length===0||typeof n[0]=="number":th(n)}class nh{constructor(e){l(this,"layout");this.layout=e}has(e){return!!this.layout.fields[e]}get(e){const t=this.layout.fields[e];return t?{offset:t.offset,size:t.size}:void 0}getFlatUniformValues(e){const t={};for(const[r,i]of Object.entries(e)){const s=this.layout.uniformTypes[r];s?this._flattenCompositeValue(t,r,s,i):this.layout.fields[r]&&(t[r]=i)}return t}getData(e){const t=Za(this.layout.byteLength);new Uint8Array(t,0,this.layout.byteLength).fill(0);const r={i32:new Int32Array(t),u32:new Uint32Array(t),f32:new Float32Array(t),f16:new Uint16Array(t)},i=this.getFlatUniformValues(e);for(const[s,o]of Object.entries(i))this._writeLeafValue(r,s,o);return new Uint8Array(t,0,this.layout.byteLength)}_flattenCompositeValue(e,t,r,i){if(i!==void 0){if(typeof r=="string"||this.layout.fields[t]){e[t]=i;return}if(Array.isArray(r)){const s=r[0],o=r[1];if(Array.isArray(s))throw new Error(`Nested arrays are not supported for ${t}`);if(typeof s=="string"&&En(i)){this._flattenPackedArray(e,t,s,o,i);return}if(!Array.isArray(i)){v.warn(`Unsupported uniform array value for ${t}:`,i)();return}for(let a=0;a<Math.min(i.length,o);a++){const c=i[a];c!==void 0&&this._flattenCompositeValue(e,`${t}[${a}]`,s,c)}return}if(Ya(r)&&rh(i)){for(const[s,o]of Object.entries(i)){if(o===void 0)continue;const a=`${t}.${s}`;this._flattenCompositeValue(e,a,r[s],o)}return}v.warn(`Unsupported uniform value for ${t}:`,i)()}}_flattenPackedArray(e,t,r,i,s){const o=s,c=tr(r,this.layout.layout).components;for(let u=0;u<i;u++){const f=u*c;if(f>=o.length)break;c===1?e[`${t}[${u}]`]=Number(o[f]):e[`${t}[${u}]`]=ih(s,f,f+c)}}_writeLeafValue(e,t,r){const i=this.layout.fields[t];if(!i){v.warn(`Uniform ${t} not found in layout`)();return}const{type:s,components:o,columns:a,rows:c,offset:u,columnStride:f}=i,d=e[s];if(o===1){d[u]=Number(r);return}const h=r;if(a===1){for(let p=0;p<o;p++)d[u+p]=Number(h[p]??0);return}let g=0;for(let p=0;p<a;p++){const m=u+p*f;for(let b=0;b<c;b++)d[m+b]=Number(h[g++]??0)}}}function rh(n){return!!n&&typeof n=="object"&&!Array.isArray(n)&&!ArrayBuffer.isView(n)}function ih(n,e,t){return Array.prototype.slice.call(n,e,t)}const sh=128;function oh(n,e,t=16){if(n===e)return!0;const r=n,i=e;if(!En(r)||!En(i)||r.length!==i.length)return!1;const s=Math.min(t,sh);if(r.length>s)return!1;for(let o=0;o<r.length;++o)if(i[o]!==r[o])return!1;return!0}function ah(n){return En(n)?n.slice():n}class ch{constructor(e){l(this,"name");l(this,"uniforms",{});l(this,"modifiedUniforms",{});l(this,"modified",!0);l(this,"bindingLayout",{});l(this,"needsRedraw","initialized");var t;if(this.name=(e==null?void 0:e.name)||"unnamed",e!=null&&e.name&&(e!=null&&e.shaderLayout)){const r=(t=e==null?void 0:e.shaderLayout.bindings)==null?void 0:t.find(s=>s.type==="uniform"&&s.name===(e==null?void 0:e.name));if(!r)throw new Error(e==null?void 0:e.name);const i=r;for(const s of i.uniforms||[])this.bindingLayout[s.name]=s}}setUniforms(e){for(const[t,r]of Object.entries(e))this._setUniform(t,r)&&!this.needsRedraw&&this.setNeedsRedraw(`${this.name}.${t}=${r}`)}setNeedsRedraw(e){this.needsRedraw=this.needsRedraw||e}getAllUniforms(){return this.modifiedUniforms={},this.needsRedraw=!1,this.uniforms||{}}_setUniform(e,t){return oh(this.uniforms[e],t)?!1:(this.uniforms[e]=ah(t),this.modifiedUniforms[e]=!0,this.modified=!0,!0)}}const uh=1024;class Ka{constructor(e,t){l(this,"device");l(this,"uniformBlocks",new Map);l(this,"shaderBlockLayouts",new Map);l(this,"shaderBlockWriters",new Map);l(this,"uniformBuffers",new Map);this.device=e;for(const[r,i]of Object.entries(t)){const s=r,o=Ji(i.uniformTypes??{},{layout:i.layout??lh(e)}),a=new nh(o);this.shaderBlockLayouts.set(s,o),this.shaderBlockWriters.set(s,a);const c=new ch({name:r});c.setUniforms(a.getFlatUniformValues(i.defaultUniforms||{})),this.uniformBlocks.set(s,c)}}destroy(){for(const e of this.uniformBuffers.values())e.destroy()}setUniforms(e,t){var r;for(const[i,s]of Object.entries(e)){const o=i,a=this.shaderBlockWriters.get(o),c=a==null?void 0:a.getFlatUniformValues(s||{});(r=this.uniformBlocks.get(o))==null||r.setUniforms(c||{})}this.updateUniformBuffers(t)}getUniformBufferByteLength(e){var r;const t=((r=this.shaderBlockLayouts.get(e))==null?void 0:r.byteLength)||0;return Math.max(t,uh)}getUniformBufferData(e){var i;const t=((i=this.uniformBlocks.get(e))==null?void 0:i.getAllUniforms())||{},r=this.shaderBlockWriters.get(e);return(r==null?void 0:r.getData(t))||new Uint8Array(0)}createUniformBuffer(e,t){t&&this.setUniforms(t);const r=this.getUniformBufferByteLength(e),i=this.device.createBuffer({usage:A.UNIFORM|A.COPY_DST,byteLength:r}),s=this.getUniformBufferData(e);return i.write(s),i}getManagedUniformBuffer(e){if(!this.uniformBuffers.get(e)){const t=this.getUniformBufferByteLength(e),r=this.device.createBuffer({usage:A.UNIFORM|A.COPY_DST,byteLength:t});this.uniformBuffers.set(e,r)}return this.uniformBuffers.get(e)}updateUniformBuffers(e){let t=!1;for(const r of this.uniformBlocks.keys()){const i=this.updateUniformBuffer(r,e);t||(t=i)}return t&&v.log(3,`UniformStore.updateUniformBuffers(): ${t}`)(),t}updateUniformBuffer(e,t){var o;const r=this.uniformBlocks.get(e);let i=this.uniformBuffers.get(e),s=!1;if(i&&(r!=null&&r.needsRedraw)){s||(s=r.needsRedraw);const a=this.getUniformBufferData(e);i=this.uniformBuffers.get(e),i&&(t?this.device.writeBufferViaCommandEncoder(t,i,a):i.write(a));const c=(o=this.uniformBlocks.get(e))==null?void 0:o.getAllUniforms();v.log(4,`Writing to uniform buffer ${String(e)}`,a,c)()}return s}}function lh(n){return n.type==="webgpu"?"wgsl-uniform":"std140"}function pi(n){return n.attributes?n.attributes.map(e=>e.attribute):[n.name]}function fh(n){return Object.fromEntries(n.attributes.map(e=>[e.name,e.location]))}function io(n){let e=1/0;for(const t of n)t!==void 0&&(e=Math.min(e,t));return e}function dh(n,e,t){hh(e);const r=new Map;for(const i of e){const s=gh(i);if(i.attributes)for(const o of i.attributes)r.has(o.attribute)||r.set(o.attribute,{bufferName:i.name,stepMode:i.stepMode,vertexFormat:o.format,byteOffset:o.byteOffset,byteStride:s});else i.format&&!r.has(i.name)&&r.set(i.name,{bufferName:i.name,stepMode:i.stepMode,vertexFormat:i.format,byteOffset:0,byteStride:s})}return n.attributes.map(i=>{const s=r.get(i.name);!s&&(t!=null&&t.warnOnMissingBufferLayout)&&v.warn(`layout for attribute "${i.name}" not present in buffer layout`)();const o=nt.getAttributeShaderTypeInfo(i.type),a=(s==null?void 0:s.vertexFormat)||F.getCompatibleVertexFormat(o);return{attributeName:i.name,bufferName:(s==null?void 0:s.bufferName)||i.name,location:i.location,vertexFormat:a,byteOffset:(s==null?void 0:s.byteOffset)??0,byteStride:(s==null?void 0:s.byteStride)??F.getVertexFormatInfo(a).byteLength,stepMode:(s==null?void 0:s.stepMode)||i.stepMode||(i.name.startsWith("instance")?"instance":"vertex")}}).sort((i,s)=>i.location-s.location)}function hh(n){for(const e of n)(e.attributes&&e.format||!e.attributes&&!e.format)&&v.warn(`BufferLayout ${e.name} must have either 'attributes' or 'format' field`)()}function gh(n){if(typeof n.byteStride=="number")return n.byteStride;if(n.attributes){let e=0;for(const t of n.attributes)e+=F.getVertexFormatInfo(t.format).byteLength;return e}return F.getVertexFormatInfo(n.format).byteLength}function Ja(n,e){const t={},r=dh(n,e,{warnOnMissingBufferLayout:!0});for(const i of r){const s=ph(n,i);t[i.attributeName]=s}return t}function ph(n,e){const t=mh(n,e.attributeName),r=nt.getAttributeShaderTypeInfo(t.type),i=e.vertexFormat,s=F.getVertexFormatInfo(i);return{attributeName:e.attributeName,bufferName:e.bufferName,location:t.location,shaderType:t.type,primitiveType:r.primitiveType,shaderComponents:r.components,vertexFormat:i,bufferDataType:s.type,bufferComponents:s.components,normalized:s.normalized,integer:r.integer,stepMode:e.stepMode,byteOffset:e.byteOffset,byteStride:e.byteStride}}function mh(n,e){const t=n.attributes.find(r=>r.name===e);return t||v.warn(`shader layout attribute "${e}" not present in shader`)(),t||null}const bh=/^(vs|fs):(?:#(?:decl|main-start|main-end)|[A-Za-z_][\w-]*)$/;function ec(n=[],e){const t=[],r={},i={},s={},o={};for(const a of n)so({modules:t,defines:r,injections:i,vertexInputs:s,varyings:o},a),so({modules:t,defines:r,injections:i,vertexInputs:s,varyings:o},a[e]);for(const a of Object.keys(o))if(s[a])throw new Error(`ShaderPlugin name "${a}" cannot be both a vertex input and a varying`);return{modules:t,defines:r,injections:i,vertexInputs:s,varyings:o}}function tc(n=[],e=[]){const t=[...n],r=new Set(t.map(i=>i.name));for(const i of e)r.has(i.name)||(t.push(i),r.add(i.name));return t}function so(n,e){var t;if(e){(t=e.modules)!=null&&t.length&&n.modules.push(...e.modules),e.defines&&Object.assign(n.defines,e.defines);for(const[r,i]of Object.entries(e.vertexInputs||{})){oo(r,"vertex input");const s=n.vertexInputs[r];if(s&&s!==i)throw new Error(`ShaderPlugin vertex input "${r}" has conflicting types "${s}" and "${i}"`);n.vertexInputs[r]=i}for(const[r,i]of Object.entries(e.varyings||{})){oo(r,"varying");const s=_h(r,i),o=n.varyings[r];if(o&&(o.type!==s.type||o.interpolation!==s.interpolation))throw new Error(`ShaderPlugin varying "${r}" has conflicting declarations "${o.type}/${o.interpolation}" and "${s.type}/${s.interpolation}"`);n.varyings[r]=s}for(const r of e.injections||[])yh(r.target),n.injections[r.target]||(n.injections[r.target]=[]),n.injections[r.target].push({injection:r.injection,order:r.order??0})}}function oo(n,e){if(!/^[A-Za-z_][A-Za-z0-9_]*$/.test(n)||n.startsWith("_luma_"))throw new Error(`ShaderPlugin ${e} "${n}" must be a valid non-reserved identifier`)}function _h(n,e){const{primitiveType:t}=nt.getAttributeShaderTypeInfo(e.type),r=t==="i32"||t==="u32",i=e.interpolation||(r?"flat":"smooth");if(r&&i==="smooth")throw new Error(`ShaderPlugin integer varying "${n}" must use flat interpolation`);return{type:e.type,interpolation:i}}function yh(n){if(!bh.test(n))throw new Error(`ShaderPlugin injection target "${n}" must be a named shader anchor or hook`)}const wh=/^(?:uniform\s+)?(?:(?:lowp|mediump|highp)\s+)?[A-Za-z0-9_]+(?:<[^>]+>)?\s+([A-Za-z0-9_]+)(?:\s*\[[^\]]+\])?\s*;/,vh=/((?:layout\s*\([^)]*\)\s*)*)uniform\s+([A-Za-z_][A-Za-z0-9_]*)\s*\{([\s\S]*?)\}\s*([A-Za-z_][A-Za-z0-9_]*)?\s*;/g;function es(n){return`${n.name}Uniforms`}function xh(n,e){const t=e==="wgsl"?n.source:e==="vertex"?n.vs:n.fs;if(!t)return null;const r=es(n);return Th(t,e==="wgsl"?"wgsl":"glsl",r)}function Sh(n,e){const t=Object.keys(n.uniformTypes||{});if(!t.length)return null;const r=xh(n,e);return r?{moduleName:n.name,uniformBlockName:es(n),stage:e,expectedUniformNames:t,actualUniformNames:r,matches:Bh(t,r)}:null}function Eh(n,e,t={}){var s,o;const r=Sh(n,e);if(!r||r.matches)return r;const i=Ch(r);return(o=(s=t.log)==null?void 0:s.error)==null||o.call(s,i,r)(),t.throwOnError!==!1&&et(!1,i),r}function ts(n){var r;const e=[],t=Ih(n);for(const i of t.matchAll(vh)){const s=((r=i[1])==null?void 0:r.trim())||null;e.push({blockName:i[2],body:i[3],instanceName:i[4]||null,layoutQualifier:s,hasLayoutQualifier:!!s,isStd140:!!(s&&/\blayout\s*\([^)]*\bstd140\b[^)]*\)/.exec(s))})}return e}function Ah(n,e,t,r){var o;const i=ts(n).filter(a=>!a.isStd140),s=new Set;for(const a of i){if(s.has(a.blockName))continue;s.add(a.blockName);const c="",u=a.hasLayoutQualifier?`declares ${Oh(a.layoutQualifier)} instead of layout(std140)`:"does not declare layout(std140)",f=`${c}${e} shader uniform block ${a.blockName} ${u}. luma.gl host-side shader block packing assumes explicit layout(std140) for GLSL uniform blocks. Add \`layout(std140)\` to the block declaration.`;(o=t==null?void 0:t.warn)==null||o.call(t,f,a)()}return i}function Th(n,e,t){const r=e==="wgsl"?Lh(n,t):Ph(n,t);if(!r)return null;const i=[];for(const s of r.split(`
`)){const o=s.replace(/\/\/.*$/,"").trim();if(!o||o.startsWith("#"))continue;const a=e==="wgsl"?o.match(/^([A-Za-z0-9_]+)\s*:/):o.match(wh);a&&i.push(a[1])}return i}function Lh(n,e){const t=new RegExp(`\\bstruct\\s+${e}\\b`,"m").exec(n);if(!t)return null;const r=n.indexOf("{",t.index);if(r<0)return null;let i=0;for(let s=r;s<n.length;s++){const o=n[s];if(o==="{"){i++;continue}if(o==="}"&&(i--,i===0))return n.slice(r+1,s)}return null}function Ph(n,e){const t=ts(n).find(r=>r.blockName===e);return(t==null?void 0:t.body)||null}function Bh(n,e){if(n.length!==e.length)return!1;for(let t=0;t<n.length;t++)if(n[t]!==e[t])return!1;return!0}function Ch(n){const{expectedUniformNames:e,actualUniformNames:t}=n,r=e.filter(a=>!t.includes(a)),i=t.filter(a=>!e.includes(a)),s=[`Expected ${e.length} fields, found ${t.length}.`],o=Rh(e,t);return o&&s.push(o),r.length&&s.push(`Missing from shader block (${r.length}): ${ao(r)}.`),i.length&&s.push(`Unexpected in shader block (${i.length}): ${ao(i)}.`),e.length<=12&&t.length<=12&&(r.length||i.length)&&(s.push(`Expected: ${e.join(", ")}.`),s.push(`Actual: ${t.join(", ")}.`)),`${n.moduleName}: ${n.stage} shader uniform block ${n.uniformBlockName} does not match module.uniformTypes. ${s.join(" ")}`}function Ih(n){return n.replace(/\/\*[\s\S]*?\*\//g,"").replace(/\/\/.*$/gm,"")}function Oh(n){return n.replace(/\s+/g," ").trim()}function Rh(n,e){const t=Math.min(n.length,e.length);for(let r=0;r<t;r++)if(n[r]!==e[r])return`First mismatch at field ${r+1}: expected ${n[r]}, found ${e[r]}.`;return n.length>e.length?`Shader block ends after field ${e.length}; expected next field ${n[e.length]}.`:e.length>n.length?`Shader block has extra field ${e.length}: ${e[n.length]}.`:null}function ao(n,e=8){if(n.length<=e)return n.join(", ");const t=n.length-e;return`${n.slice(0,e).join(", ")}, ... (${t} more)`}function Mh(n){switch(n==null?void 0:n.gpu.toLowerCase()){case"apple":return`#define APPLE_GPU
// Apple optimizes away the calculation necessary for emulated fp64
#define LUMA_FP64_CODE_ELIMINATION_WORKAROUND 1
#define LUMA_FP32_TAN_PRECISION_WORKAROUND 1
// Intel GPU doesn't have full 32 bits precision in same cases, causes overflow
#define LUMA_FP64_HIGH_BITS_OVERFLOW_WORKAROUND 1
`;case"nvidia":return`#define NVIDIA_GPU
// Nvidia optimizes away the calculation necessary for emulated fp64
#define LUMA_FP64_CODE_ELIMINATION_WORKAROUND 1
`;case"intel":return`#define INTEL_GPU
// Intel optimizes away the calculation necessary for emulated fp64
#define LUMA_FP64_CODE_ELIMINATION_WORKAROUND 1
// Intel's built-in 'tan' function doesn't have acceptable precision
#define LUMA_FP32_TAN_PRECISION_WORKAROUND 1
// Intel GPU doesn't have full 32 bits precision in same cases, causes overflow
#define LUMA_FP64_HIGH_BITS_OVERFLOW_WORKAROUND 1
`;case"amd":return`#define AMD_GPU
`;default:return`#define DEFAULT_GPU
// Prevent driver from optimizing away the calculation necessary for emulated fp64
#define LUMA_FP64_CODE_ELIMINATION_WORKAROUND 1
// Headless Chrome's software shader 'tan' function doesn't have acceptable precision
#define LUMA_FP32_TAN_PRECISION_WORKAROUND 1
// If the GPU doesn't have full 32 bits precision, will causes overflow
#define LUMA_FP64_HIGH_BITS_OVERFLOW_WORKAROUND 1
`}}function Dh(n,e){var r;if(Number(((r=n.match(/^#version[ \t]+(\d+)/m))==null?void 0:r[1])||100)!==300)throw new Error("luma.gl v9 only supports GLSL 3.00 shader sources");switch(e){case"vertex":return n=co(n,$h),n;case"fragment":return n=co(n,kh),n;default:throw new Error(e)}}const nc=[[/^(#version[ \t]+(100|300[ \t]+es))?[ \t]*\n/,`#version 300 es
`],[/\btexture(2D|2DProj|Cube)Lod(EXT)?\(/g,"textureLod("],[/\btexture(2D|2DProj|Cube)(EXT)?\(/g,"texture("]],$h=[...nc,[mi("attribute"),"in $1"],[mi("varying"),"out $1"]],kh=[...nc,[mi("varying"),"in $1"]];function co(n,e){for(const[t,r]of e)n=n.replace(t,r);return n}function mi(n){return new RegExp(`\\b${n}[ \\t]+(\\w+[ \\t]+\\w+(\\[\\w+\\])?;)`,"g")}function bi(n,e,t="glsl"){let r="";for(const i in n){const s=n[i];if(r+=`${t==="wgsl"?"fn":"void"} ${s.signature} {
`,s.header&&(r+=`  ${s.header}`),e[i]){const a=e[i];a.sort((c,u)=>c.order-u.order);for(const c of a)r+=`  ${c.injection}
`}s.footer&&(r+=`  ${s.footer}`),r+=`}
`}return r}function rc(n){const e={vertex:{},fragment:{}};for(const t of n){let r,i;typeof t!="string"?(r=t,i=r.hook):(r={},i=t),i=i.trim();const s=i.indexOf(":"),o=i.slice(0,s),a=i.slice(s+1),c=i.replace(/\(.+/,""),u=Object.assign(r,{signature:a});switch(o){case"vs":e.vertex[c]=u;break;case"fs":e.fragment[c]=u;break;default:throw new Error(o)}}return e}function Uh(n,e){return{name:Nh(n,e),language:"glsl",version:Fh(n)}}function Nh(n,e="unnamed"){const r=/#define[^\S\r\n]*SHADER_NAME[^\S\r\n]*([A-Za-z0-9_-]+)\s*/.exec(n);return r?r[1]:e}function Fh(n){let e=100;const t=n.match(/[^\s]+/g);if(t&&t.length>=2&&t[0]==="#version"){const r=parseInt(t[1],10);Number.isFinite(r)&&(e=r)}if(e!==100&&e!==300)throw new Error(`Invalid GLSL version ${e}`);return e}const uo=[new RegExp(`@binding\\(\\s*(\\d+)\\s*\\)\\s*@group\\(\\s*(\\d+)\\s*\\)\\s*${Z}\\s*:\\s*([^;]+);`,"g"),new RegExp(`@group\\(\\s*(\\d+)\\s*\\)\\s*@binding\\(\\s*(\\d+)\\s*\\)\\s*${Z}\\s*:\\s*([^;]+);`,"g")];function ic(n,e=[]){var s;const t=Kn(n),r=new Map;for(const o of e)r.set(lo(o.name,o.group,o.location),o.moduleName);const i=[];for(const o of uo){o.lastIndex=0;let a;for(a=o.exec(t);a;){const c=o===uo[0],u=Number(a[c?1:2]),f=Number(a[c?2:1]),d=(s=a[3])==null?void 0:s.trim(),h=a[4],g=a[5].trim(),p=r.get(lo(h,f,u));i.push(Gh({name:h,group:f,binding:u,owner:p?"module":"application",moduleName:p,accessDeclaration:d,resourceType:g})),a=o.exec(t)}}return i.sort((o,a)=>o.group!==a.group?o.group-a.group:o.binding!==a.binding?o.binding-a.binding:o.name.localeCompare(a.name))}function Gh(n){const e={name:n.name,group:n.group,binding:n.binding,owner:n.owner,kind:"unknown",moduleName:n.moduleName,resourceType:n.resourceType};if(n.accessDeclaration){const t=n.accessDeclaration.split(",").map(r=>r.trim());if(t[0]==="uniform")return{...e,kind:"uniform",access:"uniform"};if(t[0]==="storage"){const r=t[1]||"read_write";return{...e,kind:r==="read"?"read-only-storage":"storage",access:r}}}return n.resourceType==="sampler"||n.resourceType==="sampler_comparison"?{...e,kind:"sampler",samplerKind:n.resourceType==="sampler_comparison"?"comparison":"filtering"}:n.resourceType.startsWith("texture_storage_")?{...e,kind:"storage-texture",access:Wh(n.resourceType),viewDimension:fo(n.resourceType)}:n.resourceType.startsWith("texture_")?{...e,kind:"texture",viewDimension:fo(n.resourceType),sampleType:zh(n.resourceType),multisampled:n.resourceType.startsWith("texture_multisampled_")}:e}function lo(n,e,t){return`${e}:${t}:${n}`}function fo(n){if(n.includes("cube_array"))return"cube-array";if(n.includes("2d_array"))return"2d-array";if(n.includes("cube"))return"cube";if(n.includes("3d"))return"3d";if(n.includes("2d"))return"2d";if(n.includes("1d"))return"1d"}function zh(n){if(n.startsWith("texture_depth_"))return"depth";if(n.includes("<i32>"))return"sint";if(n.includes("<u32>"))return"uint";if(n.includes("<f32>"))return"float"}function Wh(n){const e=/,\s*([A-Za-z_][A-Za-z0-9_]*)\s*>$/.exec(n);return e==null?void 0:e[1]}const Pe="([a-zA-Z_][a-zA-Z0-9_]*)",jh=/^\s*\#\s*if\s+(.+?)\s*(?:\/\/.*)?$/,Vh=new RegExp(`^\\s*\\#\\s*ifdef\\s*${Pe}\\s*$`),Hh=new RegExp(`^\\s*\\#\\s*ifndef\\s*${Pe}\\s*(?:\\/\\/.*)?$`),Yh=/^\s*\#\s*else\s*(?:\/\/.*)?$/,qh=/^\s*\#\s*endif\s*$/,Qh=new RegExp(`^\\s*\\#\\s*ifdef\\s*${Pe}\\s*(?:\\/\\/.*)?$`),Xh=/^\s*\#\s*endif\s*(?:\/\/.*)?$/;function Lt(n,e){var o,a;const t=n.split(`
`),r=[],i=[];let s=!0;for(const c of t){const u=c.match(jh),f=c.match(Qh)||c.match(Vh),d=c.match(Hh),h=c.match(Yh),g=c.match(Xh)||c.match(qh);if(u){const p=Zh(u[1],(e==null?void 0:e.defines)||{}),m=s&&p;i.push({parentActive:s,branchTaken:p,active:m}),s=m}else if(f||d){const p=(o=f||d)==null?void 0:o[1],m=!!((a=e==null?void 0:e.defines)!=null&&a[p]),b=f?m:!m,w=s&&b;i.push({parentActive:s,branchTaken:b,active:w}),s=w}else if(h){const p=i[i.length-1];if(!p)throw new Error("Encountered #else without matching #if, #ifdef or #ifndef");p.active=p.parentActive&&!p.branchTaken,p.branchTaken=!0,s=p.active}else g?(i.pop(),s=i.length?i[i.length-1].active:!0):s&&r.push(c)}if(i.length>0)throw new Error("Unterminated conditional block in shader source");return r.join(`
`)}function Zh(n,e){const t=n.trim();if(/^[+-]?\d+(?:\.\d+)?$/.test(t))return Number(t)!==0;if(t==="true")return!0;if(t==="false")return!1;const r=t.match(new RegExp(`^!\\s*${Pe}$`));if(r)return!e[r[1]];const i=t.match(new RegExp(`^${Pe}$`));if(i)return!!e[i[1]];const s=t.match(new RegExp(`^defined\\s*\\(\\s*${Pe}\\s*\\)$`));if(s)return e[s[1]]!==void 0;const o=t.match(new RegExp(`^!\\s*defined\\s*\\(\\s*${Pe}\\s*\\)$`));if(o)return e[o[1]]===void 0;throw new Error(`Unsupported #if expression "${n}"`)}function Kh(n,e){const t=[];for(const[r,i]of Object.entries(e))eg(n,r),t.push(`in ${ns(i)} ${r};`);return t.join(`
`)}function Jh(n,e,t){const r=Object.entries(t);if(r.length===0)return{source:n,declarations:"",initialization:""};const i=tg(n,e),s=n.slice(i.openParenthesis+1,i.closeParenthesis),o=ng(n,s),a=new Set(o.locations),c=[],u=[],f=[];for(const[m,b]of r){if(o.names.has(m)||sg(n,m))throw new Error(`ShaderPlugin vertex input "${m}" conflicts with an existing WGSL shader input or variable`);const w=og(a);a.add(w);const _=`_luma_${m}`;c.push(`@location(${w}) ${_}: ${b}`),u.push(`var<private> ${m}: ${b};`),f.push(`${m} = ${_};`)}const d=s.trim()?`,
  `:`
  `,h=s.trim()?"":`
`,g=`${s}${d}${c.join(`,
  `)}${h}`;return{source:n.slice(0,i.openParenthesis+1)+g+n.slice(i.closeParenthesis),declarations:u.join(`
`),initialization:f.join(`
`)}}function ns(n){const{primitiveType:e,components:t}=nt.getAttributeShaderTypeInfo(n),r=e==="i32"?"int":e==="u32"?"uint":"float";return t===1?r:`${r==="int"?"i":r==="uint"?"u":""}vec${t}`}function eg(n,e){const t=nr(e);if(new RegExp(`\\b(?:in|attribute)\\s+(?:(?:lowp|mediump|highp)\\s+)?[A-Za-z_][A-Za-z0-9_]*\\s+${t}\\s*(?:\\[|;)`).test(n))throw new Error(`ShaderPlugin vertex input "${e}" conflicts with an existing GLSL input`)}function tg(n,e){const r=new RegExp(`\\bfn\\s+${nr(e)}\\s*\\(`,"g").exec(n);if(!r)throw new Error(`ShaderPlugin vertex inputs require WGSL vertex entry point "${e}"`);const i=n.indexOf("(",r.index),s=sc(n,i,"(",")");if(s<0)throw new Error(`Unable to parse WGSL vertex entry point "${e}" parameters`);return{openParenthesis:i,closeParenthesis:s}}function ng(n,e){const t=ho(e),r=new Set(go(e)),i=rg(e);for(const s of i){const o=ig(n,s);if(o!==null){t.push(...ho(o));for(const a of go(o))r.add(a)}}return{locations:t,names:r}}function ho(n){const e=[],t=/@location\s*\(\s*(\d+)\s*\)/g;let r=t.exec(n);for(;r;)e.push(Number(r[1])),r=t.exec(n);return e}function go(n){const e=[],t=/(?:^|,)\s*(?:@[A-Za-z_][\w]*(?:\([^)]*\))?\s*)*([A-Za-z_][\w]*)\s*:/gm;let r=t.exec(n);for(;r;)e.push(r[1]),r=t.exec(n);return e}function rg(n){const e=[],t=/:\s*([A-Za-z_][\w]*)\b/g;let r=t.exec(n);for(;r;)e.push(r[1]),r=t.exec(n);return e}function ig(n,e){const r=new RegExp(`\\bstruct\\s+${nr(e)}\\s*\\{`,"g").exec(n);if(!r)return null;const i=n.indexOf("{",r.index),s=sc(n,i,"{","}");return s<0?null:n.slice(i+1,s)}function sg(n,e){const t=nr(e),r=new RegExp(`\\b(?:var(?:<[^>]+>)?|let|const)\\s+${t}\\b`,"g");let i=r.exec(n);for(;i;){if(ag(n,i.index)===0)return!0;i=r.exec(n)}return!1}function og(n){let e=0;for(;n.has(e);)e++;return e}function sc(n,e,t,r){let i=0,s=0,o=!1;for(let a=e;a<n.length;a++){const c=n[a],u=n[a+1];if(o){c===`
`&&(o=!1);continue}if(s>0){c==="/"&&u==="*"?(s++,a++):c==="*"&&u==="/"&&(s--,a++);continue}if(c==="/"&&u==="/"){o=!0,a++;continue}if(c==="/"&&u==="*"){s=1,a++;continue}if(c===t&&i++,c===r&&--i===0)return a}return-1}function ag(n,e){let t=0,r=0,i=!1;for(let s=0;s<e;s++){const o=n[s],a=n[s+1];if(i){o===`
`&&(i=!1);continue}if(r>0){o==="/"&&a==="*"?(r++,s++):o==="*"&&a==="/"&&(r--,s++);continue}o==="/"&&a==="/"?(i=!0,s++):o==="/"&&a==="*"?(r=1,s++):o==="{"?t++:o==="}"&&t--}return t}function nr(n){return n.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function cg(n,e,t){const r=[],i=[];for(const[s,o]of Object.entries(t)){xg(n,s);const a=o.interpolation==="flat"?"flat ":"",c=e==="vertex"?"out":"in";r.push(`${a}${c} ${ns(o.type)} ${s};`),e==="vertex"&&i.push(`${s} = ${wg(o.type)};`)}return{declarations:r.join(`
`),initialization:i.join(`
`)}}function ug(n,e,t,r){const i=Object.entries(r);if(i.length===0)return{source:n,declarations:"",vertexInitialization:"",fragmentInitialization:""};let s=n,o=Ht(s,e,"vertex");const a=lg(s,o);let c=Ht(s,t,"fragment");const u=fg(s,c),f=xr(s,a),d=xr(s,u.type),h=new Set([...Yt(o.parameters),...Yt(f.body),...Yt(c.parameters),...Yt(d.body)]),g=new Set([...po(f.body),...po(d.body)]),p=[],m=[],b=[],w=[];for(const[S,E]of i){if(h.has(S)||_g(s,S))throw new Error(`ShaderPlugin varying "${S}" conflicts with existing WGSL stage I/O or a module variable`);const C=yg(g);g.add(C);const O=E.interpolation==="flat"?" @interpolate(flat)":"";p.push(`  @location(${C})${O} ${S}: ${E.type},`),m.push(`var<private> ${S}: ${E.type};`),b.push(`${S} = ${vg(E.type)};`),w.push(`${S} = ${u.name}.${S};`)}dg(s,a,o.openBrace,o.closeBrace),s=hg(s,a,o,i.map(([S])=>S)),o=Ht(s,e,"vertex"),s=gg(s,o,i.map(([S])=>S));const y=(a===u.type?[a]:[a,u.type]).map(S=>xr(s,S).closeBrace).sort((S,E)=>E-S);for(const S of y)s=s.slice(0,S)+`${p.join(`
`)}
`+s.slice(S);if(c=Ht(s,t,"fragment"),!new RegExp(`\\b${Fe(u.name)}\\s*:`).test(c.parameters))throw new Error(`Unable to preserve WGSL fragment input "${u.name}"`);return{source:s,declarations:m.join(`
`),vertexInitialization:b.join(`
`),fragmentInitialization:w.join(`
`)}}function Ht(n,e,t){const i=new RegExp(`\\bfn\\s+${Fe(e)}\\s*\\(`,"g").exec(n);if(!i)throw new Error(`ShaderPlugin varyings require WGSL ${t} entry point "${e}"`);const s=n.indexOf("(",i.index),o=An(n,s,"(",")"),a=n.indexOf("{",o),c=An(n,a,"{","}");if(o<0||a<0||c<0)throw new Error(`Unable to parse WGSL ${t} entry point "${e}"`);return{openParenthesis:s,closeParenthesis:o,openBrace:a,closeBrace:c,parameters:n.slice(s+1,o)}}function lg(n,e){const t=n.slice(e.closeParenthesis+1,e.openBrace),r=/->\s*([A-Za-z_][\w]*)\s*$/.exec(t.trim());if(!r||rs(n,r[1])===null)throw new Error("ShaderPlugin varyings require the WGSL vertex entry point to return a named struct");return r[1]}function fg(n,e){const t=[];for(const r of bg(e.parameters,",")){const i=/(?:@[A-Za-z_][\w]*(?:\([^)]*\))?\s*)*([A-Za-z_][\w]*)\s*:\s*([A-Za-z_][\w]*)\s*$/.exec(r.trim());i&&rs(n,i[2])&&t.push({name:i[1],type:i[2]})}if(t.length!==1)throw new Error(`ShaderPlugin varyings require exactly one named WGSL fragment input struct; found ${t.length}`);return t[0]}function xr(n,e){const t=rs(n,e);if(!t)throw new Error(`Unable to find WGSL stage I/O struct "${e}"`);return t}function rs(n,e){const r=new RegExp(`\\bstruct\\s+${Fe(e)}\\s*\\{`,"g").exec(n);if(!r)return null;const i=n.indexOf("{",r.index),s=An(n,i,"{","}");return s<0?null:{openBrace:i,closeBrace:s,body:n.slice(i+1,s)}}function dg(n,e,t,r){const i=new RegExp(`\\b${Fe(e)}\\s*\\(`,"g");let s=i.exec(n);for(;s;){if(s.index<t||s.index>r)throw new Error(`ShaderPlugin varying output struct "${e}" is constructed outside the selected vertex entry point`);s=i.exec(n)}}function hg(n,e,t,r){const i=new RegExp(`\\b${Fe(e)}\\s*\\(`,"g"),s=[];let o=i.exec(n);for(;o;){if(o.index>t.openBrace&&o.index<t.closeBrace){const a=n.indexOf("(",o.index),c=An(n,a,"(",")");if(c<0||c>t.closeBrace)throw new Error(`Unable to parse WGSL output constructor "${e}"`);s.push({openParenthesis:a,closeParenthesis:c})}o=i.exec(n)}for(const a of s.sort((c,u)=>u.closeParenthesis-c.closeParenthesis)){const u=n.slice(a.openParenthesis+1,a.closeParenthesis).trim()?", ":"";n=n.slice(0,a.closeParenthesis)+u+r.join(", ")+n.slice(a.closeParenthesis)}return n}function gg(n,e,t){const r=pg(n,e.openBrace+1,e.closeBrace);for(let i=r.length-1;i>=0;i--){const s=r[i],o=n.slice(s.expressionStart,s.semicolon).trim();if(!o)throw new Error("ShaderPlugin varying vertex entry point cannot use an empty return");const a=`_luma_vertexOutput${i}`,c=t.map(f=>`${a}.${f} = ${f};`).join(`
`),u=`{
var ${a} = ${o};
${c}
return ${a};
}`;n=n.slice(0,s.start)+u+n.slice(s.semicolon+1)}return n}function pg(n,e,t){const r=[];let i=e;for(;i<t;)if(i=is(n,i,t),n.slice(i,i+6)==="return"&&!/[A-Za-z0-9_]/.test(n[i+6]||"")){const s=i+6,o=mg(n,s,t);if(o<0)throw new Error("Unable to parse WGSL return statement in selected vertex entry point");r.push({start:i,expressionStart:s,semicolon:o}),i=o+1}else i++;return r}function mg(n,e,t){let r=0,i=0;for(let s=e;s<t;s++){const o=is(n,s,t);if(o!==s){s=o-1;continue}const a=n[s];if(a==="("&&r++,a===")"&&r--,a==="["&&i++,a==="]"&&i--,a===";"&&r===0&&i===0)return s}return-1}function is(n,e,t){let r=e;if(n[r]==="/"&&n[r+1]==="/"){const i=n.indexOf(`
`,r+2);return i<0||i>t?t:i+1}if(n[r]==="/"&&n[r+1]==="*"){let i=1;for(r+=2;r<t&&i>0;)n[r]==="/"&&n[r+1]==="*"?(i++,r+=2):n[r]==="*"&&n[r+1]==="/"?(i--,r+=2):r++}return r}function bg(n,e){const t=[];let r=0,i=0,s=0;for(let o=0;o<n.length;o++){const a=n[o];a==="("&&i++,a===")"&&i--,a==="<"&&s++,a===">"&&s--,a===e&&i===0&&s===0&&(t.push(n.slice(r,o)),r=o+1)}return t.push(n.slice(r)),t}function po(n){const e=[],t=/@location\s*\(\s*(\d+)\s*\)/g;let r=t.exec(n);for(;r;)e.push(Number(r[1])),r=t.exec(n);return e}function Yt(n){const e=[],t=/(?:^|,)\s*(?:@[A-Za-z_][\w]*(?:\([^)]*\))?\s*)*([A-Za-z_][\w]*)\s*:/gm;let r=t.exec(n);for(;r;)e.push(r[1]),r=t.exec(n);return e}function _g(n,e){const t=new RegExp(`\\b(?:var(?:<[^>]+>)?|let|const)\\s+${Fe(e)}\\b`,"g");let r=t.exec(n);for(;r;){if(Sg(n,r.index)===0)return!0;r=t.exec(n)}return!1}function yg(n){let e=0;for(;n.has(e);)e++;return e}function wg(n){const{primitiveType:e,components:t}=nt.getAttributeShaderTypeInfo(n),r=e==="u32"?"0u":e==="i32"?"0":"0.0";return t===1?r:`${ns(n)}(${r})`}function vg(n){const{primitiveType:e,components:t}=nt.getAttributeShaderTypeInfo(n),r=`${e}(0)`;return t===1?r:`${n}(${r})`}function xg(n,e){if(new RegExp(`\\b(?:flat\\s+|smooth\\s+)?(?:in|out|varying)\\s+(?:(?:lowp|mediump|highp)\\s+)?[A-Za-z_][A-Za-z0-9_]*\\s+${Fe(e)}\\s*(?:\\[|;)`).test(n))throw new Error(`ShaderPlugin varying "${e}" conflicts with existing GLSL stage I/O`)}function An(n,e,t,r){let i=0,s=0,o=!1;for(let a=e;a<n.length;a++){const c=n[a],u=n[a+1];if(o){c===`
`&&(o=!1);continue}if(s>0){c==="/"&&u==="*"?(s++,a++):c==="*"&&u==="/"&&(s--,a++);continue}if(c==="/"&&u==="/"){o=!0,a++;continue}if(c==="/"&&u==="*"){s=1,a++;continue}if(c===t&&i++,c===r&&--i===0)return a}return-1}function Sg(n,e){let t=0;for(let r=0;r<e;r++){const i=is(n,r,e);if(i!==r){r=i-1;continue}n[r]==="{"&&t++,n[r]==="}"&&t--}return t}function Fe(n){return n.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}const ss=`

${rn}
`,Pt=100,Eg=`precision highp float;
`;function Ag(n){const e=pn(n.modules||[]),{source:t,bindingAssignments:r}=Lg(n.platformInfo,{...n,source:n.source,stage:"vertex",modules:e});return{source:t,getUniforms:oc(e),bindingAssignments:r,bindingTable:ic(t,r),shaderLayout:Ia(t,{vertexEntryPoint:n.vertexEntryPoint,scanVertexAttributes:n.scanVertexAttributes})}}function Tg(n){const{vs:e,fs:t}=n,r=pn(n.modules||[]);return{vs:mo(n.platformInfo,{...n,source:e,stage:"vertex",modules:r}),fs:mo(n.platformInfo,{...n,source:t,stage:"fragment",modules:r}),getUniforms:oc(r)}}function Lg(n,e){const{source:t,stage:r,modules:i,defines:s={},hookFunctions:o=[],inject:a={},pluginInjections:c={},pluginVertexInputs:u={},pluginVaryings:f={},vertexEntryPoint:d="vertexMain",fragmentEntryPoint:h="fragmentMain",log:g}=e;et(typeof t=="string","shader source must be a string");const p=Lt(t,{defines:s}),m=Jh(p,d,u),b=ug(m.source,d,h,f),w=b.source;let _="";const y=rc(o),x={},S={},E={};ac(c,x,S,E);for(const M in a){const W=typeof a[M]=="string"?{injection:a[M],order:0}:a[M],$=/^(v|f)s:(#)?([\w-]+)$/.exec(M);if($){const ge=$[2],Ge=$[3];ge?Ge==="decl"?S[M]=[W]:E[M]=[W]:x[M]=[W]}else E[M]=[W]}Pg(m.declarations,m.initialization,S,E),Bg(b,S,E);const C=i,O=Dg(w),G=Mg(O.source),le=Ng(C,e._bindingRegistry,G,s),L=[];for(const M of C){g&&ka(M,w,g);const W=Lt(cc(M,"wgsl",g),{defines:s}),$=$g(W,M,{usedBindingsByGroup:G,bindingRegistry:e._bindingRegistry,reservedBindingKeysByGroup:le});L.push(...$.bindingAssignments);const ge=$.source;_+=ge;const Ge=Cg(M);for(const H in Ge){const ws=/^(v|f)s:#([\w-]+)$/.exec(H);if(ws){const sr=ws[2]==="decl"?S:E;sr[H]=sr[H]||[],sr[H].push(Ge[H])}else x[H]=x[H]||[],x[H].push(Ge[H])}}return _+=ss,_=hn(_,r,Ig(S),!1,"wgsl",{vertex:d,fragment:h}),_+=Og(y,x),_+=Vg(L),_+=O.source,_=hn(_,r,E,!1,"wgsl",{vertex:d,fragment:h}),jg(_),{source:_,bindingAssignments:L}}function mo(n,e){var le;const{source:t,stage:r,language:i="glsl",modules:s,defines:o={},hookFunctions:a=[],inject:c={},pluginInjections:u={},pluginVertexInputs:f={},pluginVaryings:d={},prologue:h=!0,log:g}=e;et(typeof t=="string","shader source must be a string");const p=i==="glsl"?Uh(t).version:-1,m=n.shaderLanguageVersion,b=p===100?"#version 100":"#version 300 es",_=t.split(`
`).slice(1).join(`
`),y={};s.forEach(L=>{Object.assign(y,L.defines)}),Object.assign(y,o);let x="";switch(i){case"wgsl":break;case"glsl":x=h?`${b}

// ----- PROLOGUE -------------------------
${`#define SHADER_TYPE_${r.toUpperCase()}`}

${Mh(n)}
${r==="fragment"?Eg:""}

// ----- APPLICATION DEFINES -------------------------

${Rg(y)}

`:`${b}
`;break}const S=rc(a),E={},C={},O={};ac(u,E,C,O);for(const L in c){const M=typeof c[L]=="string"?{injection:c[L],order:0}:c[L],W=/^(v|f)s:(#)?([\w-]+)$/.exec(L);if(W){const $=W[2],ge=W[3];$?ge==="decl"?C[L]=[M]:O[L]=[M]:E[L]=[M]}else O[L]=[M]}if(r==="vertex"){const L=Kh(_,f);L&&(C["vs:#decl"]=C["vs:#decl"]||[],C["vs:#decl"].push({injection:L,order:Number.MIN_SAFE_INTEGER}))}const G=cg(_,r,d);if(G.declarations){const L=r==="vertex"?"vs:#decl":"fs:#decl";C[L]=C[L]||[],C[L].push({injection:G.declarations,order:Number.MIN_SAFE_INTEGER})}G.initialization&&(O["vs:#main-start"]=O["vs:#main-start"]||[],O["vs:#main-start"].push({injection:G.initialization,order:Number.MIN_SAFE_INTEGER}));for(const L of s){g&&ka(L,_,g);const M=cc(L,r,g);x+=M;const W=((le=L.instance)==null?void 0:le.normalizedInjections[r])||{};for(const $ in W){const ge=/^(v|f)s:#([\w-]+)$/.exec($);if(ge){const H=ge[2]==="decl"?C:O;H[$]=H[$]||[],H[$].push(W[$])}else E[$]=E[$]||[],E[$].push(W[$])}}return x+="// ----- MAIN SHADER SOURCE -------------------------",x+=ss,x=hn(x,r,C),x+=bi(S[r],E),x+=_,x=hn(x,r,O),i==="glsl"&&p!==m&&(x=Dh(x,r)),i==="glsl"&&Ah(x,r,g),x.trim()}function oc(n){return function(t){var i;const r={};for(const s of n){const o=(i=s.getUniforms)==null?void 0:i.call(s,t,r);Object.assign(r,o)}return r}}function ac(n,e,t,r){for(const i in n){const s=/^(v|f)s:(#)?([\w-]+)$/.exec(i);if(s){const o=s[2],a=s[3],c=o?a==="decl"?t:r:e;c[i]=c[i]||[],c[i].push(...n[i])}else r[i]=r[i]||[],r[i].push(...n[i])}}function Pg(n,e,t,r){n&&(t["vs:#decl"]=t["vs:#decl"]||[],t["vs:#decl"].push({injection:n,order:Number.MIN_SAFE_INTEGER})),e&&(r["vs:#main-start"]=r["vs:#main-start"]||[],r["vs:#main-start"].push({injection:e,order:Number.MIN_SAFE_INTEGER}))}function Bg(n,e,t){n.declarations&&(e["vs:#decl"]=e["vs:#decl"]||[],e["vs:#decl"].push({injection:n.declarations,order:Number.MIN_SAFE_INTEGER})),n.vertexInitialization&&(t["vs:#main-start"]=t["vs:#main-start"]||[],t["vs:#main-start"].push({injection:n.vertexInitialization,order:Number.MIN_SAFE_INTEGER})),n.fragmentInitialization&&(t["fs:#main-start"]=t["fs:#main-start"]||[],t["fs:#main-start"].push({injection:n.fragmentInitialization,order:Number.MIN_SAFE_INTEGER}))}function Cg(n){var e,t;return{...((e=n.instance)==null?void 0:e.normalizedInjections.vertex)||{},...((t=n.instance)==null?void 0:t.normalizedInjections.fragment)||{}}}function Ig(n){const e=[...n["vs:#decl"]||[],...n["fs:#decl"]||[]];return e.length?{"vs:#decl":e}:{}}function Og(n,e){return bi(n.vertex,e,"wgsl")+bi(n.fragment,e,"wgsl")}function Rg(n={}){let e="";for(const t in n){const r=n[t];(r||Number.isFinite(r))&&(e+=`#define ${t.toUpperCase()} ${n[t]}
`)}return e}function cc(n,e,t){let r;switch(e){case"vertex":r=n.vs||"";break;case"fragment":r=n.fs||"";break;case"wgsl":r=n.source||"";break;default:et(!1)}if(!n.name)throw new Error("Shader module must have a name");Eh(n,e,{log:t});const i=n.name.toUpperCase().replace(/[^0-9a-z]/gi,"_");let s=`// ----- MODULE ${n.name} ---------------

`;return e!=="wgsl"&&(s+=`#define MODULE_${i}
`),s+=`${r}
`,s}function Mg(n){const e=new Map;for(const t of Je(n,Xl)){const r=Number(t.bindingToken),i=Number(t.groupToken);os(i,r,t.name),Ze(e,i,r,`application binding "${t.name}"`)}return e}function Dg(n){const e=Je(n,Jr),t=new Map;for(const s of e){if(s.bindingToken==="auto")continue;const o=Number(s.bindingToken),a=Number(s.groupToken);os(a,o,s.name),Ze(t,a,o,`application binding "${s.name}"`)}const r={sawSupportedBindingDeclaration:e.length>0},i=Ba(n,Jr,s=>Ug(s,t,r));if(Ca(n)&&!r.sawSupportedBindingDeclaration)throw new Error('Unsupported @binding(auto) declaration form in application WGSL. Use adjacent "@group(N)" and "@binding(auto)" decorators followed by a bindable "var" declaration.');return{source:i}}function $g(n,e,t){const r=[],s={sawSupportedBindingDeclaration:Je(n,Et).length>0,nextHintedBindingLocation:typeof e.firstBindingSlot=="number"?e.firstBindingSlot:null},o=Ba(n,Et,a=>kg(a,{module:e,context:t,bindingAssignments:r,relocationState:s}));if(Ca(n)&&!s.sawSupportedBindingDeclaration)throw new Error(`Unsupported @binding(auto) declaration form in module "${e.name}". Use adjacent "@group(N)" and "@binding(auto)" decorators followed by a bindable "var" declaration.`);return{source:o,bindingAssignments:r}}function kg(n,e){var h,g;const{module:t,context:r,bindingAssignments:i,relocationState:s}=e,{match:o,bindingToken:a,groupToken:c,name:u}=n,f=Number(c);if(a==="auto"){const p=uc(f,t.name,u),m=(h=r.bindingRegistry)==null?void 0:h.get(p),b=m!==void 0?m:zg(f,r.usedBindingsByGroup,t.name,s.nextHintedBindingLocation??void 0,r.bindingRegistry);return bo(t.name,f,b,u),m!==void 0&&Fg(r.reservedBindingKeysByGroup,f,b,p)?(i.push({moduleName:t.name,name:u,group:f,location:b}),o.replace(/@binding\(\s*auto\s*\)/,`@binding(${b})`)):(Ze(r.usedBindingsByGroup,f,b,`module "${t.name}" binding "${u}"`),(g=r.bindingRegistry)==null||g.set(p,b),i.push({moduleName:t.name,name:u,group:f,location:b}),s.nextHintedBindingLocation!==null&&m===void 0&&(s.nextHintedBindingLocation=b+1),o.replace(/@binding\(\s*auto\s*\)/,`@binding(${b})`))}const d=Number(a);return bo(t.name,f,d,u),Ze(r.usedBindingsByGroup,f,d,`module "${t.name}" binding "${u}"`),i.push({moduleName:t.name,name:u,group:f,location:d}),o}function Ug(n,e,t){const{match:r,bindingToken:i,groupToken:s,name:o}=n,a=Number(s);if(i==="auto"){const c=Wg(a,e);return os(a,c,o),Ze(e,a,c,`application binding "${o}"`),r.replace(/@binding\(\s*auto\s*\)/,`@binding(${c})`)}return t.sawSupportedBindingDeclaration=!0,r}function Ng(n,e,t,r){const i=new Map;if(!e)return i;for(const s of n)for(const o of Gg(s,r)){const a=uc(o.group,s.name,o.name),c=e.get(a);if(c!==void 0){const u=i.get(o.group)||new Map,f=u.get(c);if(f&&f!==a)throw new Error(`Duplicate WGSL binding reservation for modules "${f}" and "${a}": group ${o.group}, binding ${c}.`);Ze(t,o.group,c,`registered module binding "${a}"`),u.set(c,a),i.set(o.group,u)}}return i}function Fg(n,e,t,r){const i=n.get(e);if(!i)return!1;const s=i.get(t);if(!s)return!1;if(s!==r)throw new Error(`Registered module binding "${r}" collided with "${s}": group ${e}, binding ${t}.`);return!0}function Gg(n,e){const t=[],r=Lt(n.source||"",{defines:e});for(const i of Je(r,Et))t.push({name:i.name,group:Number(i.groupToken)});return t}function os(n,e,t){if(n===0&&e>=Pt)throw new Error(`Application binding "${t}" in group 0 uses reserved binding ${e}. Application-owned explicit group-0 bindings must stay below ${Pt}.`)}function bo(n,e,t,r){if(e===0&&t<Pt)throw new Error(`Module "${n}" binding "${r}" in group 0 uses reserved application binding ${t}. Module-owned explicit group-0 bindings must be ${Pt} or higher.`)}function Ze(n,e,t,r){const i=n.get(e)||new Set;if(i.has(t))throw new Error(`Duplicate WGSL binding assignment for ${r}: group ${e}, binding ${t}.`);i.add(t),n.set(e,i)}function zg(n,e,t,r,i){const s=e.get(n)||new Set,o=new Set,a=`${n}:`,c=`${a}${t}:`;for(const[f,d]of i||[])f.startsWith(c)&&o.add(d);let u=r??(n===0?Pt:s.size>0?Math.max(...s)+1:0);for(;s.has(u)||o.has(u);)u++;for(const[f,d]of i||[])d===u&&f.startsWith(a)&&(i==null||i.delete(f));return u}function Wg(n,e){const t=e.get(n)||new Set;let r=0;for(;t.has(r);)r++;return r}function jg(n){const e=Kl(n,Et);if(!e)return;const t=Hg(n,e.index);throw t?new Error(`Unresolved @binding(auto) for module "${t}" binding "${e.name}" remained in assembled WGSL source.`):Yg(n,e.index)?new Error(`Unresolved @binding(auto) for application binding "${e.name}" remained in assembled WGSL source.`):new Error(`Unresolved @binding(auto) remained in assembled WGSL source near "${qg(e.match)}".`)}function Vg(n){if(n.length===0)return"";let e=`// ----- MODULE WGSL BINDING ASSIGNMENTS ---------------
`;for(const t of n)e+=`// ${t.moduleName}.${t.name} -> @group(${t.group}) @binding(${t.location})
`;return e+=`
`,e}function uc(n,e,t){return`${n}:${e}:${t}`}function Hg(n,e){const t=/^\/\/ ----- MODULE ([^\n]+) ---------------$/gm;let r,i;for(i=t.exec(n);i&&i.index<=e;)r=i[1],i=t.exec(n);return r}function Yg(n,e){const t=n.indexOf(ss);return t>=0?e>t:!0}function qg(n){return n.replace(/\s+/g," ").trim()}const de=class de{constructor(){l(this,"_hookFunctions",[]);l(this,"_defaultModules",[])}static getDefaultShaderAssembler(e){return et(e==="glsl"||e==="wgsl"),e==="wgsl"?(de.defaultShaderAssemblers.wgsl=de.defaultShaderAssemblers.wgsl||new Ke,de.defaultShaderAssemblers.wgsl):(de.defaultShaderAssemblers.glsl=de.defaultShaderAssemblers.glsl||new Qg,de.defaultShaderAssemblers.glsl)}addDefaultModule(e){this._defaultModules.find(t=>t.name===(typeof e=="string"?e:e.name))||this._defaultModules.push(e)}removeDefaultModule(e){const t=typeof e=="string"?e:e.name;this._defaultModules=this._defaultModules.filter(r=>r.name!==t)}addShaderHook(e,t){t&&(e=Object.assign(t,{hook:e})),this._hookFunctions.push(e)}_getModuleList(e=[]){const t=new Array(this._defaultModules.length+e.length),r={};let i=0;for(let s=0,o=this._defaultModules.length;s<o;++s){const a=this._defaultModules[s],c=a.name;t[i++]=a,r[c]=!0}for(let s=0,o=e.length;s<o;++s){const a=e[s],c=a.name;r[c]||(t[i++]=a,r[c]=!0)}return t.length=i,gn(t),t}};l(de,"defaultShaderAssemblers",{});let Me=de;class Qg extends Me{constructor(){super(...arguments);l(this,"shaderLanguage","glsl")}assembleGLSLShaderPair(t){const r=this._getModuleList(t.modules),i=this._hookFunctions;return{...Tg({...t,vs:t.vs,fs:t.fs,modules:r,hookFunctions:i}),modules:r}}}class Ke extends Me{constructor(){super(...arguments);l(this,"shaderLanguage","wgsl");l(this,"_wgslBindingRegistry",new Map)}assembleWGSLShader(t){const r=this._getModuleList(t.modules),i=this._hookFunctions,s=Ke.getShaderPreprocessorDefines(t,r),o=t.platformInfo.shaderLanguage==="wgsl"&&t.source?Lt(t.source,{defines:s}):t.source,{source:a,getUniforms:c,bindingAssignments:u}=Ag({...t,source:o,defines:s,_bindingRegistry:this._wgslBindingRegistry,modules:r,hookFunctions:i}),f=t.platformInfo.shaderLanguage==="wgsl"?Lt(a,{defines:s}):a;return{source:f,getUniforms:c,modules:r,bindingAssignments:u,bindingTable:ic(f,u),shaderLayout:Ia(f,{vertexEntryPoint:t.vertexEntryPoint,scanVertexAttributes:t.scanVertexAttributes})}}static getShaderPreprocessorDefines(t,r){return{...Ke.getPlatformPreprocessorDefines(t.platformInfo),...r.reduce((i,s)=>(Object.assign(i,s.defines),i),{}),...t.defines}}static getPlatformPreprocessorDefines(t){const r=t.limits||{};return{LUMA_SUPPORTS_VERTEX_STORAGE_BUFFERS:t.type==="webgpu"&&(r.maxStorageBuffersInVertexStage||0)>0,LUMA_FP32_TAN_PRECISION_WORKAROUND:t.type==="webgpu"&&t.gpu.toLowerCase()!=="nvidia"&&t.gpu.toLowerCase()!=="amd",LUMA_FP64_INTEGER_ARITHMETIC:t.type==="webgpu"&&t.gpu.toLowerCase()==="apple"}}}const Xg=`out vec4 transform_output;
void main() {
  transform_output = vec4(0);
}`,Zg=`#version 300 es
${Xg}`;function Kg(n){const{input:e,inputChannels:t,output:r}={};if(!e)return Zg;if(!t)throw new Error("inputChannels");const i=Jg(t),s=ep(e,t);return`#version 300 es
in ${i} ${e};
out vec4 ${r};
void main() {
  ${r} = ${s};
}`}function Jg(n){switch(n){case 1:return"float";case 2:return"vec2";case 3:return"vec3";case 4:return"vec4";default:throw new Error(`invalid channels: ${n}`)}}function ep(n,e){switch(e){case 1:return`vec4(${n}, 0.0, 0.0, 1.0)`;case 2:return`vec4(${n}, 0.0, 1.0)`;case 3:return`vec4(${n}, 1.0)`;case 4:return n;default:throw new Error(`invalid channels: ${e}`)}}function lc(n,e=[],t=0){const r=Math.fround(n),i=n-r;return e[t]=r,e[t+1]=i,e}function tp(n){return n-Math.fround(n)}function np(n){const e=new Float32Array(32);for(let t=0;t<4;++t)for(let r=0;r<4;++r){const i=t*4+r;lc(n[r*4+t],e,i*2)}return e}function fc(n,e=!0){return n??e}function dc(n=[0,0,0],e=!0){return e?n.map(t=>t/255):[...n]}function rp(n,e=!0){const t=dc(n.slice(0,3),e),r=Number.isFinite(n[3]),i=r?n[3]:1;return[t[0],t[1],t[2],e&&r?i/255:i]}const ip=`#ifdef LUMA_FP32_TAN_PRECISION_WORKAROUND

// All these functions are for substituting tan() function from Intel GPU only
const float TWO_PI = 6.2831854820251465;
const float PI_2 = 1.5707963705062866;
const float PI_16 = 0.1963495463132858;

const float SIN_TABLE_0 = 0.19509032368659973;
const float SIN_TABLE_1 = 0.3826834261417389;
const float SIN_TABLE_2 = 0.5555702447891235;
const float SIN_TABLE_3 = 0.7071067690849304;

const float COS_TABLE_0 = 0.9807852506637573;
const float COS_TABLE_1 = 0.9238795042037964;
const float COS_TABLE_2 = 0.8314695954322815;
const float COS_TABLE_3 = 0.7071067690849304;

const float INVERSE_FACTORIAL_3 = 1.666666716337204e-01; // 1/3!
const float INVERSE_FACTORIAL_5 = 8.333333767950535e-03; // 1/5!
const float INVERSE_FACTORIAL_7 = 1.9841270113829523e-04; // 1/7!
const float INVERSE_FACTORIAL_9 = 2.75573188446287533e-06; // 1/9!

float sin_taylor_fp32(float a) {
  float r, s, t, x;

  if (a == 0.0) {
    return 0.0;
  }

  x = -a * a;
  s = a;
  r = a;

  r = r * x;
  t = r * INVERSE_FACTORIAL_3;
  s = s + t;

  r = r * x;
  t = r * INVERSE_FACTORIAL_5;
  s = s + t;

  r = r * x;
  t = r * INVERSE_FACTORIAL_7;
  s = s + t;

  r = r * x;
  t = r * INVERSE_FACTORIAL_9;
  s = s + t;

  return s;
}

void sincos_taylor_fp32(float a, out float sin_t, out float cos_t) {
  if (a == 0.0) {
    sin_t = 0.0;
    cos_t = 1.0;
  }
  sin_t = sin_taylor_fp32(a);
  cos_t = sqrt(1.0 - sin_t * sin_t);
}

float tan_taylor_fp32(float a) {
    float sin_a;
    float cos_a;

    if (a == 0.0) {
        return 0.0;
    }

    // 2pi range reduction
    float z = floor(a / TWO_PI);
    float r = a - TWO_PI * z;

    float t;
    float q = floor(r / PI_2 + 0.5);
    int j = int(q);

    if (j < -2 || j > 2) {
        return 1.0 / 0.0;
    }

    t = r - PI_2 * q;

    q = floor(t / PI_16 + 0.5);
    int k = int(q);
    int abs_k = int(abs(float(k)));

    if (abs_k > 4) {
        return 1.0 / 0.0;
    } else {
        t = t - PI_16 * q;
    }

    float u = 0.0;
    float v = 0.0;

    float sin_t, cos_t;
    float s, c;
    sincos_taylor_fp32(t, sin_t, cos_t);

    if (k == 0) {
        s = sin_t;
        c = cos_t;
    } else {
        if (abs(float(abs_k) - 1.0) < 0.5) {
            u = COS_TABLE_0;
            v = SIN_TABLE_0;
        } else if (abs(float(abs_k) - 2.0) < 0.5) {
            u = COS_TABLE_1;
            v = SIN_TABLE_1;
        } else if (abs(float(abs_k) - 3.0) < 0.5) {
            u = COS_TABLE_2;
            v = SIN_TABLE_2;
        } else if (abs(float(abs_k) - 4.0) < 0.5) {
            u = COS_TABLE_3;
            v = SIN_TABLE_3;
        }
        if (k > 0) {
            s = u * sin_t + v * cos_t;
            c = u * cos_t - v * sin_t;
        } else {
            s = u * sin_t - v * cos_t;
            c = u * cos_t + v * sin_t;
        }
    }

    if (j == 0) {
        sin_a = s;
        cos_a = c;
    } else if (j == 1) {
        sin_a = c;
        cos_a = -s;
    } else if (j == -1) {
        sin_a = -c;
        cos_a = s;
    } else {
        sin_a = -s;
        cos_a = -c;
    }
    return sin_a / cos_a;
}
#endif

float tan_fp32(float a) {
#ifdef LUMA_FP32_TAN_PRECISION_WORKAROUND
  return tan_taylor_fp32(a);
#else
  return tan(a);
#endif
}
`,sp=`#ifdef LUMA_FP32_TAN_PRECISION_WORKAROUND
const FP32_TWO_PI: f32 = 6.2831854820251465;
const FP32_PI_2: f32 = 1.5707963705062866;
const FP32_PI_16: f32 = 0.1963495463132858;

const FP32_SIN_TABLE_0: f32 = 0.19509032368659973;
const FP32_SIN_TABLE_1: f32 = 0.3826834261417389;
const FP32_SIN_TABLE_2: f32 = 0.5555702447891235;
const FP32_SIN_TABLE_3: f32 = 0.7071067690849304;

const FP32_COS_TABLE_0: f32 = 0.9807852506637573;
const FP32_COS_TABLE_1: f32 = 0.9238795042037964;
const FP32_COS_TABLE_2: f32 = 0.8314695954322815;
const FP32_COS_TABLE_3: f32 = 0.7071067690849304;

const FP32_INVERSE_FACTORIAL_3: f32 = 1.666666716337204e-01;
const FP32_INVERSE_FACTORIAL_5: f32 = 8.333333767950535e-03;
const FP32_INVERSE_FACTORIAL_7: f32 = 1.9841270113829523e-04;
const FP32_INVERSE_FACTORIAL_9: f32 = 2.75573188446287533e-06;
const FP32_OVERFLOW: f32 = 3.402823466e+38;

fn sin_taylor_fp32(a: f32) -> f32 {
  if (a == 0.0) {
    return 0.0;
  }

  let x = -a * a;
  var sum = a;
  var term = a;

  term = term * x;
  sum = sum + term * FP32_INVERSE_FACTORIAL_3;
  term = term * x;
  sum = sum + term * FP32_INVERSE_FACTORIAL_5;
  term = term * x;
  sum = sum + term * FP32_INVERSE_FACTORIAL_7;
  term = term * x;
  sum = sum + term * FP32_INVERSE_FACTORIAL_9;

  return sum;
}

fn tan_taylor_fp32(a: f32) -> f32 {
  if (a == 0.0) {
    return 0.0;
  }

  let z = floor(a / FP32_TWO_PI);
  let reduced = a - FP32_TWO_PI * z;

  var quadrantValue = floor(reduced / FP32_PI_2 + 0.5);
  let quadrant = i32(quadrantValue);
  if (quadrant < -2 || quadrant > 2) {
    return FP32_OVERFLOW;
  }

  var angle = reduced - FP32_PI_2 * quadrantValue;
  quadrantValue = floor(angle / FP32_PI_16 + 0.5);
  let tableIndex = i32(quadrantValue);
  let absoluteTableIndex = abs(tableIndex);
  if (absoluteTableIndex > 4) {
    return FP32_OVERFLOW;
  }

  angle = angle - FP32_PI_16 * quadrantValue;
  let sinAngle = sin_taylor_fp32(angle);
  let cosAngle = sqrt(1.0 - sinAngle * sinAngle);

  var tableCos = 0.0;
  var tableSin = 0.0;
  if (absoluteTableIndex == 1) {
    tableCos = FP32_COS_TABLE_0;
    tableSin = FP32_SIN_TABLE_0;
  } else if (absoluteTableIndex == 2) {
    tableCos = FP32_COS_TABLE_1;
    tableSin = FP32_SIN_TABLE_1;
  } else if (absoluteTableIndex == 3) {
    tableCos = FP32_COS_TABLE_2;
    tableSin = FP32_SIN_TABLE_2;
  } else if (absoluteTableIndex == 4) {
    tableCos = FP32_COS_TABLE_3;
    tableSin = FP32_SIN_TABLE_3;
  }

  var sinReduced = sinAngle;
  var cosReduced = cosAngle;
  if (tableIndex > 0) {
    sinReduced = tableCos * sinAngle + tableSin * cosAngle;
    cosReduced = tableCos * cosAngle - tableSin * sinAngle;
  } else if (tableIndex < 0) {
    sinReduced = tableCos * sinAngle - tableSin * cosAngle;
    cosReduced = tableCos * cosAngle + tableSin * sinAngle;
  }

  var sinValue = 0.0;
  var cosValue = 0.0;
  if (quadrant == 0) {
    sinValue = sinReduced;
    cosValue = cosReduced;
  } else if (quadrant == 1) {
    sinValue = cosReduced;
    cosValue = -sinReduced;
  } else if (quadrant == -1) {
    sinValue = -cosReduced;
    cosValue = sinReduced;
  } else {
    sinValue = -sinReduced;
    cosValue = -cosReduced;
  }

  return sinValue / cosValue;
}

fn tan_fp32(a: f32) -> f32 {
  return tan_taylor_fp32(a);
}
#else
fn tan_fp32(a: f32) -> f32 {
  return tan(a);
}
#endif
`,op={name:"fp32",source:sp,vs:ip},_o=`
layout(std140) uniform fp64arithmeticUniforms {
  uniform float ONE;
  uniform float SPLIT;
} fp64;

/*
About LUMA_FP64_CODE_ELIMINATION_WORKAROUND

The purpose of this workaround is to prevent shader compilers from
optimizing away necessary arithmetic operations by swapping their sequences
or transform the equation to some 'equivalent' form.

These helpers implement Dekker/Veltkamp-style error tracking. If the compiler
folds constants or reassociates the arithmetic, the high/low split can stop
tracking the rounding error correctly. That failure mode tends to look fine in
simple coordinate setup, but then breaks down inside iterative arithmetic such
as fp64 Mandelbrot loops.

The method is to multiply an artifical variable, ONE, which will be known to
the compiler to be 1 only at runtime. The whole expression is then represented
as a polynomial with respective to ONE. In the coefficients of all terms, only one a
and one b should appear

err = (a + b) * ONE^6 - a * ONE^5 - (a + b) * ONE^4 + a * ONE^3 - b - (a + b) * ONE^2 + a * ONE
*/

float prevent_fp64_optimization(float value) {
#if defined(LUMA_FP64_CODE_ELIMINATION_WORKAROUND)
  return value + fp64.ONE * 0.0;
#else
  return value;
#endif
}

// Divide float number to high and low floats to extend fraction bits
vec2 split(float a) {
  // Keep SPLIT as a runtime uniform so the compiler cannot fold the Dekker
  // split into a constant expression and reassociate the recovery steps.
  float split = prevent_fp64_optimization(fp64.SPLIT);
  float t = prevent_fp64_optimization(a * split);
  float temp = t - a;
  float a_hi = t - temp;
  float a_lo = a - a_hi;
  return vec2(a_hi, a_lo);
}

// Divide float number again when high float uses too many fraction bits
vec2 split2(vec2 a) {
  vec2 b = split(a.x);
  b.y += a.y;
  return b;
}

// Special sum operation when a > b
vec2 quickTwoSum(float a, float b) {
#if defined(LUMA_FP64_CODE_ELIMINATION_WORKAROUND)
  float sum = (a + b) * fp64.ONE;
  float err = b - (sum - a) * fp64.ONE;
#else
  float sum = a + b;
  float err = b - (sum - a);
#endif
  return vec2(sum, err);
}

// General sum operation
vec2 twoSum(float a, float b) {
  float s = (a + b);
#if defined(LUMA_FP64_CODE_ELIMINATION_WORKAROUND)
  float v = (s * fp64.ONE - a) * fp64.ONE;
  float err = (a - (s - v) * fp64.ONE) * fp64.ONE * fp64.ONE * fp64.ONE + (b - v);
#else
  float v = s - a;
  float err = (a - (s - v)) + (b - v);
#endif
  return vec2(s, err);
}

vec2 twoSub(float a, float b) {
  float s = (a - b);
#if defined(LUMA_FP64_CODE_ELIMINATION_WORKAROUND)
  float v = (s * fp64.ONE - a) * fp64.ONE;
  float err = (a - (s - v) * fp64.ONE) * fp64.ONE * fp64.ONE * fp64.ONE - (b + v);
#else
  float v = s - a;
  float err = (a - (s - v)) - (b + v);
#endif
  return vec2(s, err);
}

vec2 twoSqr(float a) {
  float prod = a * a;
  vec2 a_fp64 = split(a);
#if defined(LUMA_FP64_CODE_ELIMINATION_WORKAROUND)
  float err = ((a_fp64.x * a_fp64.x - prod) * fp64.ONE + 2.0 * a_fp64.x *
    a_fp64.y * fp64.ONE * fp64.ONE) + a_fp64.y * a_fp64.y * fp64.ONE * fp64.ONE * fp64.ONE;
#else
  float err = ((a_fp64.x * a_fp64.x - prod) + 2.0 * a_fp64.x * a_fp64.y) + a_fp64.y * a_fp64.y;
#endif
  return vec2(prod, err);
}

vec2 twoProd(float a, float b) {
  float prod = a * b;
  vec2 a_fp64 = split(a);
  vec2 b_fp64 = split(b);
  // twoProd is especially sensitive because mul_fp64 and div_fp64 both depend
  // on the split terms and cross terms staying in the original evaluation
  // order. If the compiler folds or reassociates them, the low part tends to
  // collapse to zero or NaN on some drivers.
  float highProduct = prevent_fp64_optimization(a_fp64.x * b_fp64.x);
  float crossProduct1 = prevent_fp64_optimization(a_fp64.x * b_fp64.y);
  float crossProduct2 = prevent_fp64_optimization(a_fp64.y * b_fp64.x);
  float lowProduct = prevent_fp64_optimization(a_fp64.y * b_fp64.y);
#if defined(LUMA_FP64_CODE_ELIMINATION_WORKAROUND)
  float err1 = (highProduct - prod) * fp64.ONE;
  float err2 = crossProduct1 * fp64.ONE * fp64.ONE;
  float err3 = crossProduct2 * fp64.ONE * fp64.ONE * fp64.ONE;
  float err4 = lowProduct * fp64.ONE * fp64.ONE * fp64.ONE * fp64.ONE;
#else
  float err1 = highProduct - prod;
  float err2 = crossProduct1;
  float err3 = crossProduct2;
  float err4 = lowProduct;
#endif
  float err = ((err1 + err2) + err3) + err4;
  return vec2(prod, err);
}

vec2 sum_fp64(vec2 a, vec2 b) {
  vec2 s, t;
  s = twoSum(a.x, b.x);
  t = twoSum(a.y, b.y);
  s.y += t.x;
  s = quickTwoSum(s.x, s.y);
  s.y += t.y;
  s = quickTwoSum(s.x, s.y);
  return s;
}

vec2 sub_fp64(vec2 a, vec2 b) {
  vec2 s, t;
  s = twoSub(a.x, b.x);
  t = twoSub(a.y, b.y);
  s.y += t.x;
  s = quickTwoSum(s.x, s.y);
  s.y += t.y;
  s = quickTwoSum(s.x, s.y);
  return s;
}

vec2 mul_fp64(vec2 a, vec2 b) {
  vec2 prod = twoProd(a.x, b.x);
  // y component is for the error
  prod.y += a.x * b.y;
#if defined(LUMA_FP64_HIGH_BITS_OVERFLOW_WORKAROUND)
  prod = split2(prod);
#endif
  prod = quickTwoSum(prod.x, prod.y);
  prod.y += a.y * b.x;
#if defined(LUMA_FP64_HIGH_BITS_OVERFLOW_WORKAROUND)
  prod = split2(prod);
#endif
  prod = quickTwoSum(prod.x, prod.y);
  return prod;
}

vec2 div_fp64(vec2 a, vec2 b) {
  float xn = 1.0 / b.x;
#if defined(LUMA_FP64_HIGH_BITS_OVERFLOW_WORKAROUND)
  vec2 yn = mul_fp64(a, vec2(xn, 0));
#else
  vec2 yn = a * xn;
#endif
  float diff = (sub_fp64(a, mul_fp64(b, yn))).x;
  vec2 prod = twoProd(xn, diff);
  return sum_fp64(yn, prod);
}

vec2 sqrt_fp64(vec2 a) {
  if (a.x == 0.0 && a.y == 0.0) return vec2(0.0, 0.0);
  if (a.x < 0.0) return vec2(0.0 / 0.0, 0.0 / 0.0);

  float x = 1.0 / sqrt(a.x);
  float yn = a.x * x;
#if defined(LUMA_FP64_CODE_ELIMINATION_WORKAROUND)
  vec2 yn_sqr = twoSqr(yn) * fp64.ONE;
#else
  vec2 yn_sqr = twoSqr(yn);
#endif
  float diff = sub_fp64(a, yn_sqr).x;
  vec2 prod = twoProd(x * 0.5, diff);
#if defined(LUMA_FP64_HIGH_BITS_OVERFLOW_WORKAROUND)
  return sum_fp64(split(yn), prod);
#else
  return sum_fp64(vec2(yn, 0.0), prod);
#endif
}
`,ap=`struct Fp64F32Bits {
  sign: u32,
  baseExponent: i32,
  significand: u32,
  isZero: bool,
  isInf: bool,
  isNan: bool,
};

// Decode an f32 as (-1)^sign * significand * 2^baseExponent.
fn fp64_decode_f32_bits(bits: u32) -> Fp64F32Bits {
  let sign = bits >> 31u;
  let exponentBits = (bits >> 23u) & 0xffu;
  let fraction = bits & 0x7fffffu;

  if (exponentBits == 0xffu) {
    return Fp64F32Bits(sign, 0, 0u, false, fraction == 0u, fraction != 0u);
  }
  if (exponentBits == 0u) {
    return Fp64F32Bits(sign, -149, fraction, fraction == 0u, false, false);
  }
  return Fp64F32Bits(sign, i32(exponentBits) - 150, 0x800000u | fraction, false, false, false);
}

fn fp64_f32_magnitude_compare(aBits: u32, bBits: u32) -> i32 {
  let aMagnitude = aBits & 0x7fffffffu;
  let bMagnitude = bBits & 0x7fffffffu;
  if (aMagnitude == bMagnitude) {
    return 0;
  }
  return select(-1, 1, aMagnitude > bMagnitude);
}

fn fp64_make_residual_f32_bits(
  exactSign: u32,
  exactMagnitude: vec2u,
  exactBaseExponent: i32,
  highBits: u32
) -> u32 {
  if (fp64_u64_is_zero(exactMagnitude)) {
    return 0u;
  }

  let high = fp64_decode_f32_bits(highBits);
  if (high.isInf || high.isNan) {
    return exactSign << 31u;
  }
  if (high.isZero) {
    return fp64_make_f32_bits_from_u64(exactSign, exactMagnitude, exactBaseExponent);
  }

  let commonBaseExponent = min(exactBaseExponent, high.baseExponent);
  let exactShift = exactBaseExponent - commonBaseExponent;
  let highShift = high.baseExponent - commonBaseExponent;

  // A normal two-sum/two-product residual never needs a shift this large.
  // This guard gives deterministic underflow behavior outside that contract.
  if (exactShift >= 64 || highShift >= 64) {
    return exactSign << 31u;
  }

  let exactAligned = fp64_u64_shift_left(exactMagnitude, u32(exactShift));
  let highAligned = fp64_u64_shift_left(vec2u(0u, high.significand), u32(highShift));
  let comparison = fp64_u64_compare(exactAligned, highAligned);
  if (comparison == 0) {
    return 0u;
  }

  var residualSign = exactSign;
  var residualMagnitude: vec2u;
  if (comparison > 0) {
    residualMagnitude = fp64_u64_sub(exactAligned, highAligned);
  } else {
    residualSign = exactSign ^ 1u;
    residualMagnitude = fp64_u64_sub(highAligned, exactAligned);
  }
  return fp64_make_f32_bits_from_u64(
    residualSign,
    residualMagnitude,
    commonBaseExponent
  );
}

fn fp64_split_accumulator_bits(
  sign: u32,
  magnitude: vec2u,
  baseExponent: i32
) -> vec2u {
  let highBits = fp64_make_f32_bits_from_u64(sign, magnitude, baseExponent);
  let lowBits = fp64_make_residual_f32_bits(sign, magnitude, baseExponent, highBits);
  return vec2u(highBits, lowBits);
}

fn fp64_two_sum_integer_bits(aBits: u32, bBits: u32) -> vec2u {
  let a = fp64_decode_f32_bits(aBits);
  let b = fp64_decode_f32_bits(bBits);

  if (a.isNan || b.isNan) {
    return vec2u(0x7fc00000u, 0u);
  }
  if (a.isInf || b.isInf) {
    if (a.isInf && b.isInf && a.sign != b.sign) {
      return vec2u(0x7fc00000u, 0u);
    }
    return select(vec2u(bBits, 0u), vec2u(aBits, 0u), a.isInf);
  }
  if (a.isZero && b.isZero) {
    return vec2u((a.sign & b.sign) << 31u, 0u);
  }
  if (a.isZero) {
    return vec2u(bBits, 0u);
  }
  if (b.isZero) {
    return vec2u(aBits, 0u);
  }

  let exponentDifference = select(
    b.baseExponent - a.baseExponent,
    a.baseExponent - b.baseExponent,
    a.baseExponent >= b.baseExponent
  );

  // Beyond half an ulp, rounding cannot change the larger operand. Returning
  // the smaller operand intact also avoids an unbounded integer alignment.
  // At a power-of-two boundary the spacing below the larger operand is half
  // the spacing above it, so an opposite-sign gap-25 operand can still change
  // the rounded high limb. Gap 26 is the first universally safe early-out.
  if (exponentDifference > 25) {
    if (fp64_f32_magnitude_compare(aBits, bBits) >= 0) {
      return vec2u(aBits, bBits);
    }
    return vec2u(bBits, aBits);
  }

  let commonBaseExponent = min(a.baseExponent, b.baseExponent);
  let aMagnitude = fp64_u64_shift_left(
    vec2u(0u, a.significand),
    u32(a.baseExponent - commonBaseExponent)
  );
  let bMagnitude = fp64_u64_shift_left(
    vec2u(0u, b.significand),
    u32(b.baseExponent - commonBaseExponent)
  );

  var resultSign = a.sign;
  var resultMagnitude: vec2u;
  if (a.sign == b.sign) {
    resultMagnitude = fp64_u64_add(aMagnitude, bMagnitude);
  } else {
    let comparison = fp64_u64_compare(aMagnitude, bMagnitude);
    if (comparison == 0) {
      return vec2u(0u, 0u);
    }
    if (comparison > 0) {
      resultMagnitude = fp64_u64_sub(aMagnitude, bMagnitude);
    } else {
      resultSign = b.sign;
      resultMagnitude = fp64_u64_sub(bMagnitude, aMagnitude);
    }
  }

  return fp64_split_accumulator_bits(resultSign, resultMagnitude, commonBaseExponent);
}

fn fp64_two_sum_integer(a: f32, b: f32) -> vec2f {
  let resultBits = fp64_two_sum_integer_bits(bitcast<u32>(a), bitcast<u32>(b));
  return vec2f(bitcast<f32>(resultBits.x), bitcast<f32>(resultBits.y));
}

fn fp64_multiply_significands(a: u32, b: u32) -> vec2u {
  let aLow = a & 0xffffu;
  let aHigh = a >> 16u;
  let bLow = b & 0xffffu;
  let bHigh = b >> 16u;
  let lowProduct = aLow * bLow;
  let crossProduct = aLow * bHigh + aHigh * bLow;
  let highProduct = aHigh * bHigh;

  var result = vec2u(0u, lowProduct);
  result = fp64_u64_add(
    result,
    fp64_u64_shift_left(vec2u(0u, crossProduct), 16u)
  );
  result = fp64_u64_add(result, vec2u(highProduct, 0u));
  return result;
}

fn fp64_two_prod_integer_bits(aBits: u32, bBits: u32) -> vec2u {
  let a = fp64_decode_f32_bits(aBits);
  let b = fp64_decode_f32_bits(bBits);
  let resultSign = a.sign ^ b.sign;

  if (a.isNan || b.isNan || ((a.isZero || b.isZero) && (a.isInf || b.isInf))) {
    return vec2u(0x7fc00000u, 0u);
  }
  if (a.isInf || b.isInf) {
    return vec2u((resultSign << 31u) | 0x7f800000u, resultSign << 31u);
  }
  if (a.isZero || b.isZero) {
    return vec2u(resultSign << 31u, resultSign << 31u);
  }

  let magnitude = fp64_multiply_significands(a.significand, b.significand);
  return fp64_split_accumulator_bits(
    resultSign,
    magnitude,
    a.baseExponent + b.baseExponent
  );
}

fn fp64_two_prod_integer(a: f32, b: f32) -> vec2f {
  let resultBits = fp64_two_prod_integer_bits(bitcast<u32>(a), bitcast<u32>(b));
  return vec2f(bitcast<f32>(resultBits.x), bitcast<f32>(resultBits.y));
}

fn fp64_round_add_integer(a: f32, b: f32) -> f32 {
  return fp64_two_sum_integer(a, b).x;
}

fn fp64_round_mul_integer(a: f32, b: f32) -> f32 {
  return fp64_two_prod_integer(a, b).x;
}

#ifndef LUMA_FP64_PREDICATE_ONLY
fn fp64_f32_finite_exponent(value: Fp64F32Bits) -> i32 {
  let mostSignificantBit = 31u - countLeadingZeros(value.significand);
  return value.baseExponent + i32(mostSignificantBit);
}

fn fp64_scale_f32_integer(value: f32, exponent: i32) -> f32 {
  let decoded = fp64_decode_f32_bits(bitcast<u32>(value));
  if (decoded.isZero || decoded.isInf || decoded.isNan) {
    return value;
  }
  let resultBits = fp64_make_f32_bits_from_u64(
    decoded.sign,
    vec2u(0u, decoded.significand),
    decoded.baseExponent + exponent
  );
  return bitcast<f32>(resultBits);
}

// Divide normalized significands so the hardware operation cannot overflow,
// underflow, or flush a subnormal result. Reapply the exponent with integer
// packing, which also produces subnormal correction limbs without relying on
// floating-point arithmetic to preserve them.
fn fp64_divide_f32_integer(aValue: f32, bValue: f32) -> f32 {
  let a = fp64_decode_f32_bits(bitcast<u32>(aValue));
  let b = fp64_decode_f32_bits(bitcast<u32>(bValue));
  if (a.isZero || b.isZero || a.isInf || b.isInf || a.isNan || b.isNan) {
    return aValue / bValue;
  }

  let aMostSignificantBit = 31u - countLeadingZeros(a.significand);
  let bMostSignificantBit = 31u - countLeadingZeros(b.significand);
  let normalizedABits = fp64_make_f32_bits_from_u64(
    a.sign,
    vec2u(0u, a.significand),
    -i32(aMostSignificantBit)
  );
  let normalizedBBits = fp64_make_f32_bits_from_u64(
    b.sign,
    vec2u(0u, b.significand),
    -i32(bMostSignificantBit)
  );
  let normalizedQuotient = bitcast<f32>(normalizedABits) / bitcast<f32>(normalizedBBits);
  let quotient = fp64_decode_f32_bits(bitcast<u32>(normalizedQuotient));
  let exponentShift =
    a.baseExponent + i32(aMostSignificantBit) -
    b.baseExponent - i32(bMostSignificantBit);
  let quotientBits = fp64_make_f32_bits_from_u64(
    quotient.sign,
    vec2u(0u, quotient.significand),
    quotient.baseExponent + exponentShift
  );
  return bitcast<f32>(quotientBits);
}
#endif

#ifndef LUMA_FP64_PREDICATE_ONLY
fn split(a: f32) -> vec2f {
  let aBits = bitcast<u32>(a);
  let decoded = fp64_decode_f32_bits(aBits);
  if (decoded.isZero || decoded.isInf || decoded.isNan) {
    return vec2f(a, 0.0);
  }

  var roundedHigh = decoded.significand >> 12u;
  let remainder = decoded.significand & 0xfffu;
  if (remainder > 0x800u || (remainder == 0x800u && (roundedHigh & 1u) == 1u)) {
    roundedHigh = roundedHigh + 1u;
  }
  var highMagnitude = vec2u(0u, roundedHigh << 12u);
  var highBits = fp64_make_f32_bits_from_u64(
    decoded.sign,
    highMagnitude,
    decoded.baseExponent
  );
  // Rounding the high limb of a maximum-exponent value can overflow even
  // though the original value is finite. Truncate only in that boundary case
  // so split remains an exact finite decomposition.
  if (fp64_decode_f32_bits(highBits).isInf) {
    roundedHigh = decoded.significand >> 12u;
    highMagnitude = vec2u(0u, roundedHigh << 12u);
    highBits = fp64_make_f32_bits_from_u64(
      decoded.sign,
      highMagnitude,
      decoded.baseExponent
    );
  }
  let lowBits = fp64_make_residual_f32_bits(
    decoded.sign,
    vec2u(0u, decoded.significand),
    decoded.baseExponent,
    highBits
  );
  return vec2f(bitcast<f32>(highBits), bitcast<f32>(lowBits));
}

fn split2(a: vec2f) -> vec2f {
  var result = split(a.x);
  result.y = fp64_round_add_integer(result.y, a.y);
  return result;
}
#endif

#ifndef LUMA_FP64_PREDICATE_ONLY
fn quickTwoSum(a: f32, b: f32) -> vec2f {
  return fp64_two_sum_integer(a, b);
}
#endif

fn twoSum(a: f32, b: f32) -> vec2f {
  return fp64_two_sum_integer(a, b);
}

fn twoSub(a: f32, b: f32) -> vec2f {
  let bBits = bitcast<u32>(b) ^ 0x80000000u;
  let resultBits = fp64_two_sum_integer_bits(bitcast<u32>(a), bBits);
  return vec2f(bitcast<f32>(resultBits.x), bitcast<f32>(resultBits.y));
}

#ifndef LUMA_FP64_PREDICATE_ONLY
fn twoSqr(a: f32) -> vec2f {
  return fp64_two_prod_integer(a, a);
}

fn twoProd(a: f32, b: f32) -> vec2f {
  return fp64_two_prod_integer(a, b);
}
#endif

fn sum_fp64(a: vec2f, b: vec2f) -> vec2f {
  var sum = fp64_two_sum_integer(a.x, b.x);
  let lowSum = fp64_two_sum_integer(a.y, b.y);
  sum.y = fp64_round_add_integer(sum.y, lowSum.x);
  sum = fp64_two_sum_integer(sum.x, sum.y);
  sum.y = fp64_round_add_integer(sum.y, lowSum.y);
  return fp64_two_sum_integer(sum.x, sum.y);
}

fn sub_fp64(a: vec2f, b: vec2f) -> vec2f {
  let negatedB = vec2f(
    bitcast<f32>(bitcast<u32>(b.x) ^ 0x80000000u),
    bitcast<f32>(bitcast<u32>(b.y) ^ 0x80000000u)
  );
  return sum_fp64(a, negatedB);
}

fn mul_fp64(a: vec2f, b: vec2f) -> vec2f {
  var product = fp64_two_prod_integer(a.x, b.x);
  let crossProduct1 = fp64_round_mul_integer(a.x, b.y);
  product.y = fp64_round_add_integer(product.y, crossProduct1);
  product = fp64_two_sum_integer(product.x, product.y);
  let crossProduct2 = fp64_round_mul_integer(a.y, b.x);
  product.y = fp64_round_add_integer(product.y, crossProduct2);
  return fp64_two_sum_integer(product.x, product.y);
}

#ifndef LUMA_FP64_PREDICATE_ONLY
fn fp64_scale_fp64_integer(value: vec2f, exponent: i32) -> vec2f {
  let high = fp64_scale_f32_integer(value.x, exponent);
  let low = fp64_scale_f32_integer(value.y, exponent);
  return sum_fp64(vec2f(high, 0.0), vec2f(low, 0.0));
}

fn fp64_div_fp64_normalized(a: vec2f, b: vec2f) -> vec2f {
  let quotientHigh = fp64_divide_f32_integer(a.x, b.x);
  var quotient = vec2f(quotientHigh, 0.0);

  let remainder = sub_fp64(a, mul_fp64(b, quotient));
  let quotientLow = fp64_divide_f32_integer(remainder.x, b.x);
  quotient = sum_fp64(quotient, vec2f(quotientLow, 0.0));

  let secondRemainder = sub_fp64(a, mul_fp64(b, quotient));
  let correction = fp64_divide_f32_integer(secondRemainder.x, b.x);
  return sum_fp64(quotient, vec2f(correction, 0.0));
}

fn div_fp64(a: vec2f, b: vec2f) -> vec2f {
  let decodedA = fp64_decode_f32_bits(bitcast<u32>(a.x));
  let decodedB = fp64_decode_f32_bits(bitcast<u32>(b.x));
  if (
    decodedA.isZero || decodedB.isZero ||
    decodedA.isInf || decodedB.isInf ||
    decodedA.isNan || decodedB.isNan
  ) {
    return fp64_div_fp64_normalized(a, b);
  }

  let exponentA = fp64_f32_finite_exponent(decodedA);
  let exponentB = fp64_f32_finite_exponent(decodedB);
  // Correct the quotient near unity so b * q and the remainder stay clear of
  // both f32 underflow and overflow. The exponent difference is applied once.
  let normalizedA = fp64_scale_fp64_integer(a, -exponentA);
  let normalizedB = fp64_scale_fp64_integer(b, -exponentB);
  let normalizedQuotient = fp64_div_fp64_normalized(normalizedA, normalizedB);
  return fp64_scale_fp64_integer(normalizedQuotient, exponentA - exponentB);
}

fn fp64_sqrt_fp64_normalized(a: vec2f) -> vec2f {
  let estimate = sqrt(a.x);
  let difference = sub_fp64(a, fp64_two_prod_integer(estimate, estimate)).x;
  let denominator = fp64_round_add_integer(estimate, estimate);
  let correction = fp64_divide_f32_integer(difference, denominator);
  return sum_fp64(vec2f(estimate, 0.0), vec2f(correction, 0.0));
}

fn sqrt_fp64(a: vec2f) -> vec2f {
  let decoded = fp64_decode_f32_bits(bitcast<u32>(a.x));
  let decodedLow = fp64_decode_f32_bits(bitcast<u32>(a.y));
  if (decoded.isZero && decodedLow.isZero) {
    return vec2f(0.0, 0.0);
  }
  if (decoded.sign == 1u) {
    let nanValue = fp64_nan(a.x);
    return vec2f(nanValue, nanValue);
  }

  if (decoded.isInf || decoded.isNan) {
    return fp64_sqrt_fp64_normalized(a);
  }
  let exponent = fp64_f32_finite_exponent(decoded);
  // An even scale lets the final square-root rescale use an integer exponent.
  let evenExponent = exponent - (exponent & 1);
  let normalizedA = fp64_scale_fp64_integer(a, -evenExponent);
  let normalizedRoot = fp64_sqrt_fp64_normalized(normalizedA);
  return fp64_scale_fp64_integer(normalizedRoot, evenExponent / 2);
}
#endif
`,cp=`struct Fp64ArithmeticUniforms {
  ONE: f32,
  SPLIT: f32,
};

@group(0) @binding(auto) var<uniform> fp64arithmetic : Fp64ArithmeticUniforms;

#ifndef LUMA_FP64_F32_INPUT_ONLY
struct Fp64Bits {
  sign: u32,
  exponent: i32,
  significand: vec2u,
  isZero: bool,
  isInf: bool,
  isNan: bool,
};
#endif

#ifndef LUMA_FP64_PREDICATE_ONLY
fn fp64_nan(seed: f32) -> f32 {
  let nanBits = 0x7fc00000u | select(0u, 1u, seed < 0.0);
  return bitcast<f32>(nanBits);
}
#endif

fn fp64_u64_is_zero(value: vec2u) -> bool {
  return value.x == 0u && value.y == 0u;
}

fn fp64_u64_compare(a: vec2u, b: vec2u) -> i32 {
  if (a.x != b.x) {
    return select(-1, 1, a.x > b.x);
  }
  if (a.y != b.y) {
    return select(-1, 1, a.y > b.y);
  }
  return 0;
}

fn fp64_u64_add(a: vec2u, b: vec2u) -> vec2u {
  let low = a.y + b.y;
  let carry = select(0u, 1u, low < a.y);
  return vec2u(a.x + b.x + carry, low);
}

fn fp64_u64_sub(a: vec2u, b: vec2u) -> vec2u {
  let borrow = select(0u, 1u, a.y < b.y);
  return vec2u(a.x - b.x - borrow, a.y - b.y);
}

fn fp64_u64_shift_left(value: vec2u, shift: u32) -> vec2u {
  if (shift == 0u) {
    return value;
  }
  if (shift < 32u) {
    return vec2u((value.x << shift) | (value.y >> (32u - shift)), value.y << shift);
  }
  if (shift == 32u) {
    return vec2u(value.y, 0u);
  }
  if (shift < 64u) {
    return vec2u(value.y << (shift - 32u), 0u);
  }
  return vec2u(0u);
}

fn fp64_u64_shift_right(value: vec2u, shift: u32) -> vec2u {
  if (shift == 0u) {
    return value;
  }
  if (shift < 32u) {
    return vec2u(value.x >> shift, (value.y >> shift) | (value.x << (32u - shift)));
  }
  if (shift == 32u) {
    return vec2u(0u, value.x);
  }
  if (shift < 64u) {
    return vec2u(0u, value.x >> (shift - 32u));
  }
  return vec2u(0u);
}

fn fp64_u64_get_bit(value: vec2u, bitIndex: u32) -> bool {
  if (bitIndex >= 64u) {
    return false;
  }
  if (bitIndex >= 32u) {
    return ((value.x >> (bitIndex - 32u)) & 1u) != 0u;
  }
  return ((value.y >> bitIndex) & 1u) != 0u;
}

fn fp64_u64_has_bits_below(value: vec2u, bitCount: u32) -> bool {
  if (bitCount == 0u) {
    return false;
  }
  if (bitCount >= 64u) {
    return !fp64_u64_is_zero(value);
  }
  if (bitCount > 32u) {
    let highBitCount = bitCount - 32u;
    let highMask = (1u << highBitCount) - 1u;
    return value.y != 0u || (value.x & highMask) != 0u;
  }
  if (bitCount == 32u) {
    return value.y != 0u;
  }
  let lowMask = (1u << bitCount) - 1u;
  return (value.y & lowMask) != 0u;
}

#ifndef LUMA_FP64_F32_INPUT_ONLY
fn fp64_u64_shift_right_sticky(value: vec2u, shift: u32) -> vec2u {
  var shifted = fp64_u64_shift_right(value, shift);
  if (fp64_u64_has_bits_below(value, shift)) {
    shifted.y = shifted.y | 1u;
  }
  return shifted;
}
#endif

fn fp64_u64_count_leading_zeros(value: vec2u) -> u32 {
  if (value.x != 0u) {
    return countLeadingZeros(value.x);
  }
  return 32u + countLeadingZeros(value.y);
}

fn fp64_round_shift_right_to_u32(value: vec2u, shift: u32) -> u32 {
  if (shift == 0u) {
    return value.y;
  }

  let truncated = fp64_u64_shift_right(value, shift);
  var rounded = truncated.y;
  let guard = fp64_u64_get_bit(value, shift - 1u);
  let hasTrailingBits = fp64_u64_has_bits_below(value, shift - 1u);
  if (guard && (hasTrailingBits || (rounded & 1u) == 1u)) {
    rounded = rounded + 1u;
  }
  return rounded;
}

#ifndef LUMA_FP64_F32_INPUT_ONLY
fn fp64_round_shift_right(value: vec2u, shift: u32) -> vec2u {
  if (shift == 0u) {
    return value;
  }

  var rounded = fp64_u64_shift_right(value, shift);
  let guard = fp64_u64_get_bit(value, shift - 1u);
  let hasTrailingBits = fp64_u64_has_bits_below(value, shift - 1u);
  if (guard && (hasTrailingBits || (rounded.y & 1u) == 1u)) {
    rounded = fp64_u64_add(rounded, vec2u(0u, 1u));
  }
  return rounded;
}
#endif

fn fp64_make_f32_bits_from_u64(sign: u32, significand: vec2u, baseExponent: i32) -> u32 {
  if (fp64_u64_is_zero(significand)) {
    return sign << 31u;
  }

  let leadingZeros = fp64_u64_count_leading_zeros(significand);
  let mostSignificantBit = 63u - leadingZeros;
  var exponent = baseExponent + i32(mostSignificantBit);

  if (exponent > 127) {
    return (sign << 31u) | 0x7f800000u;
  }

  if (exponent >= -126) {
    let shift = i32(mostSignificantBit) - 23;
    var significand24: u32;
    if (shift > 0) {
      significand24 = fp64_round_shift_right_to_u32(significand, u32(shift));
    } else {
      significand24 = fp64_u64_shift_left(significand, u32(-shift)).y;
    }

    if (significand24 >= 0x1000000u) {
      significand24 = significand24 >> 1u;
      exponent = exponent + 1;
      if (exponent > 127) {
        return (sign << 31u) | 0x7f800000u;
      }
    }

    return (sign << 31u) | (u32(exponent + 127) << 23u) | (significand24 & 0x7fffffu);
  }

  let scaleExponent = baseExponent + 149;
  var mantissa: u32;
  if (scaleExponent >= 0) {
    mantissa = fp64_u64_shift_left(significand, u32(scaleExponent)).y;
  } else {
    mantissa = fp64_round_shift_right_to_u32(significand, u32(-scaleExponent));
  }

  if (mantissa >= 0x800000u) {
    return (sign << 31u) | 0x00800000u;
  }
  return (sign << 31u) | mantissa;
}

#ifndef LUMA_FP64_F32_INPUT_ONLY
fn fp64_decode_bits(bits: vec2u) -> Fp64Bits {
  let sign = bits.x >> 31u;
  let exponentBits = (bits.x >> 20u) & 0x7ffu;
  let fractionHigh = bits.x & 0xfffffu;
  let fractionLow = bits.y;
  let fraction = vec2u(fractionHigh, fractionLow);

  if (exponentBits == 0x7ffu) {
    let isInf = fp64_u64_is_zero(fraction);
    return Fp64Bits(sign, 0, vec2u(0u), false, isInf, !isInf);
  }

  if (exponentBits == 0u) {
    let isZero = fp64_u64_is_zero(fraction);
    return Fp64Bits(sign, -1022, fraction, isZero, false, false);
  }

  return Fp64Bits(sign, i32(exponentBits) - 1023, vec2u((1u << 20u) | fractionHigh, fractionLow), false, false, false);
}

fn fp64_finite_magnitude_compare(a: Fp64Bits, b: Fp64Bits) -> i32 {
  if (a.exponent != b.exponent) {
    return select(-1, 1, a.exponent > b.exponent);
  }
  return fp64_u64_compare(a.significand, b.significand);
}
#endif

#ifndef LUMA_FP64_F32_INPUT_ONLY
struct Fp64RawF32Bits {
  sign: u32,
  baseExponent: i32,
  significand: u32,
  isZero: bool,
  isInf: bool,
  isNan: bool,
};

// Decode an f32 as (-1)^sign * significand * 2^baseExponent. This shared
// integer representation lets normalization remain independent of the
// selected double-single arithmetic implementation.
fn fp64_decode_raw_f32_bits(bits: u32) -> Fp64RawF32Bits {
  let sign = bits >> 31u;
  let exponentBits = (bits >> 23u) & 0xffu;
  let fraction = bits & 0x7fffffu;

  if (exponentBits == 0xffu) {
    return Fp64RawF32Bits(sign, 0, 0u, false, fraction == 0u, fraction != 0u);
  }
  if (exponentBits == 0u) {
    return Fp64RawF32Bits(sign, -149, fraction, fraction == 0u, false, false);
  }
  return Fp64RawF32Bits(
    sign,
    i32(exponentBits) - 150,
    0x800000u | fraction,
    false,
    false,
    false
  );
}

fn fp64_raw_f32_magnitude_compare(aBits: u32, bBits: u32) -> i32 {
  let aMagnitude = aBits & 0x7fffffffu;
  let bMagnitude = bBits & 0x7fffffffu;
  if (aMagnitude == bMagnitude) {
    return 0;
  }
  return select(-1, 1, aMagnitude > bMagnitude);
}

fn fp64_make_raw_residual_f32_bits(
  exactSign: u32,
  exactMagnitude: vec2u,
  exactBaseExponent: i32,
  highBits: u32
) -> u32 {
  if (fp64_u64_is_zero(exactMagnitude)) {
    return 0u;
  }

  let high = fp64_decode_raw_f32_bits(highBits);
  if (high.isInf || high.isNan) {
    return 0u;
  }
  if (high.isZero) {
    return fp64_make_f32_bits_from_u64(exactSign, exactMagnitude, exactBaseExponent);
  }

  let commonBaseExponent = min(exactBaseExponent, high.baseExponent);
  let exactShift = exactBaseExponent - commonBaseExponent;
  let highShift = high.baseExponent - commonBaseExponent;
  if (exactShift >= 64 || highShift >= 64) {
    return 0u;
  }

  let exactAligned = fp64_u64_shift_left(exactMagnitude, u32(exactShift));
  let highAligned = fp64_u64_shift_left(vec2u(0u, high.significand), u32(highShift));
  let comparison = fp64_u64_compare(exactAligned, highAligned);
  if (comparison == 0) {
    return 0u;
  }

  var residualSign = exactSign;
  var residualMagnitude: vec2u;
  if (comparison > 0) {
    residualMagnitude = fp64_u64_sub(exactAligned, highAligned);
  } else {
    residualSign = exactSign ^ 1u;
    residualMagnitude = fp64_u64_sub(highAligned, exactAligned);
  }
  return fp64_make_f32_bits_from_u64(
    residualSign,
    residualMagnitude,
    commonBaseExponent
  );
}

fn fp64_split_raw_accumulator_bits(
  sign: u32,
  magnitude: vec2u,
  baseExponent: i32
) -> vec2u {
  if (fp64_u64_is_zero(magnitude)) {
    return vec2u(0u);
  }
  let highBits = fp64_make_f32_bits_from_u64(sign, magnitude, baseExponent);
  let rawLowBits = fp64_make_raw_residual_f32_bits(sign, magnitude, baseExponent, highBits);
  let lowBits = select(rawLowBits, 0u, (rawLowBits & 0x7fffffffu) == 0u);
  if ((highBits & 0x7fffffffu) == 0u && (lowBits & 0x7fffffffu) == 0u) {
    return vec2u(0u);
  }
  return vec2u(highBits, lowBits);
}
#endif

#ifndef LUMA_FP64_F32_INPUT_ONLY
// Round an arithmetic accumulator to binary64 before splitting it. The
// aligned add/subtract paths retain three guard bits plus a sticky bit, which
// is sufficient for round-to-nearest-even at the binary64 boundary.
fn fp64_split_binary64_accumulator_bits(
  sign: u32,
  magnitude: vec2u,
  baseExponent: i32
) -> vec2u {
  if (fp64_u64_is_zero(magnitude)) {
    return vec2u(0u);
  }

  let mostSignificantBit = 63u - fp64_u64_count_leading_zeros(magnitude);
  let exponent = baseExponent + i32(mostSignificantBit);
  if (exponent > 1023) {
    return vec2u((sign << 31u) | 0x7f800000u, 0u);
  }

  var roundedMagnitude = magnitude;
  var roundedBaseExponent = baseExponent;
  if (exponent >= -1022) {
    if (mostSignificantBit > 52u) {
      let shift = mostSignificantBit - 52u;
      roundedMagnitude = fp64_round_shift_right(magnitude, shift);
      roundedBaseExponent = baseExponent + i32(shift);
    }
  } else {
    let shift = -1074 - baseExponent;
    if (shift > 0) {
      roundedMagnitude = fp64_round_shift_right(magnitude, u32(shift));
      roundedBaseExponent = -1074;
    }
  }

  if (fp64_u64_is_zero(roundedMagnitude)) {
    return vec2u(0u);
  }
  return fp64_split_raw_accumulator_bits(sign, roundedMagnitude, roundedBaseExponent);
}
#endif

#ifndef LUMA_FP64_PREDICATE_ONLY
fn fp64_add_raw_f32_bits(aBits: u32, bBits: u32) -> vec2u {
  let a = fp64_decode_raw_f32_bits(aBits);
  let b = fp64_decode_raw_f32_bits(bBits);

  if (a.isNan || b.isNan) {
    return vec2u(0x7fc00000u, 0u);
  }
  if (a.isInf || b.isInf) {
    if (a.isInf && b.isInf && a.sign != b.sign) {
      return vec2u(0x7fc00000u, 0u);
    }
    return select(vec2u(bBits, 0u), vec2u(aBits, 0u), a.isInf);
  }
  if (a.isZero && b.isZero) {
    return vec2u(0u);
  }
  if (a.isZero) {
    return vec2u(bBits, 0u);
  }
  if (b.isZero) {
    return vec2u(aBits, 0u);
  }

  let exponentDifference = abs(a.baseExponent - b.baseExponent);
  if (exponentDifference > 25) {
    if (fp64_raw_f32_magnitude_compare(aBits, bBits) >= 0) {
      return vec2u(aBits, bBits);
    }
    return vec2u(bBits, aBits);
  }

  let commonBaseExponent = min(a.baseExponent, b.baseExponent);
  let aMagnitude = fp64_u64_shift_left(
    vec2u(0u, a.significand),
    u32(a.baseExponent - commonBaseExponent)
  );
  let bMagnitude = fp64_u64_shift_left(
    vec2u(0u, b.significand),
    u32(b.baseExponent - commonBaseExponent)
  );

  var resultSign = a.sign;
  var resultMagnitude: vec2u;
  if (a.sign == b.sign) {
    resultMagnitude = fp64_u64_add(aMagnitude, bMagnitude);
  } else {
    let comparison = fp64_u64_compare(aMagnitude, bMagnitude);
    if (comparison == 0) {
      return vec2u(0u);
    }
    if (comparison > 0) {
      resultMagnitude = fp64_u64_sub(aMagnitude, bMagnitude);
    } else {
      resultSign = b.sign;
      resultMagnitude = fp64_u64_sub(bMagnitude, aMagnitude);
    }
  }

  return fp64_split_raw_accumulator_bits(
    resultSign,
    resultMagnitude,
    commonBaseExponent
  );
}
#endif

#ifndef LUMA_FP64_F32_INPUT_ONLY
fn fp64_add_aligned_magnitudes_to_fp64_bits(
  sign: u32,
  larger: Fp64Bits,
  smaller: Fp64Bits
) -> vec2u {
  let largeSignificand = fp64_u64_shift_left(larger.significand, 3u);
  let smallSignificand = fp64_u64_shift_right_sticky(
    fp64_u64_shift_left(smaller.significand, 3u),
    u32(larger.exponent - smaller.exponent)
  );
  let resultSignificand = fp64_u64_add(largeSignificand, smallSignificand);
  return fp64_split_binary64_accumulator_bits(
    sign,
    resultSignificand,
    larger.exponent - 55
  );
}

fn fp64_sub_aligned_magnitudes_to_fp64_bits(
  sign: u32,
  larger: Fp64Bits,
  smaller: Fp64Bits
) -> vec2u {
  let largeSignificand = fp64_u64_shift_left(larger.significand, 3u);
  let smallSignificand = fp64_u64_shift_right_sticky(
    fp64_u64_shift_left(smaller.significand, 3u),
    u32(larger.exponent - smaller.exponent)
  );
  let resultSignificand = fp64_u64_sub(largeSignificand, smallSignificand);
  return fp64_split_binary64_accumulator_bits(
    sign,
    resultSignificand,
    larger.exponent - 55
  );
}

fn fp64_add_aligned_magnitudes_to_f32_bits(sign: u32, larger: Fp64Bits, smaller: Fp64Bits) -> u32 {
  let largeSignificand = fp64_u64_shift_left(larger.significand, 3u);
  let smallSignificand = fp64_u64_shift_right_sticky(
    fp64_u64_shift_left(smaller.significand, 3u),
    u32(larger.exponent - smaller.exponent)
  );
  let resultSignificand = fp64_u64_add(largeSignificand, smallSignificand);
  return fp64_make_f32_bits_from_u64(sign, resultSignificand, larger.exponent - 55);
}

fn fp64_sub_aligned_magnitudes_to_f32_bits(sign: u32, larger: Fp64Bits, smaller: Fp64Bits) -> u32 {
  let largeSignificand = fp64_u64_shift_left(larger.significand, 3u);
  let smallSignificand = fp64_u64_shift_right_sticky(
    fp64_u64_shift_left(smaller.significand, 3u),
    u32(larger.exponent - smaller.exponent)
  );
  let resultSignificand = fp64_u64_sub(largeSignificand, smallSignificand);
  return fp64_make_f32_bits_from_u64(sign, resultSignificand, larger.exponent - 55);
}

// Subtract two raw binary64 values and round the exact result once to f32.
// The input words are canonical high/low words: .x contains sign/exponent/high
// fraction bits, and .y contains the low 32 fraction bits.
fn sub_fp64u32_to_f32_bits(aBits: vec2u, bBits: vec2u) -> u32 {
  let a = fp64_decode_bits(aBits);
  let b = fp64_decode_bits(bBits);
  let bSubtractionSign = b.sign ^ 1u;

  if (a.isNan || b.isNan) {
    return 0x7fc00000u;
  }
  if (a.isInf && b.isInf) {
    if (a.sign == bSubtractionSign) {
      return (a.sign << 31u) | 0x7f800000u;
    }
    return 0x7fc00000u;
  }
  if (a.isInf) {
    return (a.sign << 31u) | 0x7f800000u;
  }
  if (b.isInf) {
    return (bSubtractionSign << 31u) | 0x7f800000u;
  }
  if (a.isZero && b.isZero) {
    return select(0u, 0x80000000u, a.sign == 1u && b.sign == 0u);
  }

  let magnitudeComparison = fp64_finite_magnitude_compare(a, b);
  if (a.sign == bSubtractionSign) {
    if (magnitudeComparison >= 0) {
      return fp64_add_aligned_magnitudes_to_f32_bits(a.sign, a, b);
    }
    return fp64_add_aligned_magnitudes_to_f32_bits(a.sign, b, a);
  }

  if (magnitudeComparison == 0) {
    return 0u;
  }
  if (magnitudeComparison > 0) {
    return fp64_sub_aligned_magnitudes_to_f32_bits(a.sign, a, b);
  }
  return fp64_sub_aligned_magnitudes_to_f32_bits(bSubtractionSign, b, a);
}

fn sub_fp64u32_to_f32(aBits: vec2u, bBits: vec2u) -> f32 {
  return bitcast<f32>(sub_fp64u32_to_f32_bits(aBits, bBits));
}

// Subtract two raw binary64 values, round once to binary64, then split the
// result into normalized f32 limbs. Finite results must fit within the f32
// exponent range; larger magnitudes map to infinity and smaller magnitudes
// map to zero. The input words use canonical high/low word order.
fn sub_fp64u32_to_fp64_bits(aBits: vec2u, bBits: vec2u) -> vec2u {
  let a = fp64_decode_bits(aBits);
  let b = fp64_decode_bits(bBits);
  let bSubtractionSign = b.sign ^ 1u;

  if (a.isNan || b.isNan) {
    return vec2u(0x7fc00000u, 0u);
  }
  if (a.isInf && b.isInf) {
    if (a.sign == bSubtractionSign) {
      return vec2u((a.sign << 31u) | 0x7f800000u, 0u);
    }
    return vec2u(0x7fc00000u, 0u);
  }
  if (a.isInf) {
    return vec2u((a.sign << 31u) | 0x7f800000u, 0u);
  }
  if (b.isInf) {
    return vec2u((bSubtractionSign << 31u) | 0x7f800000u, 0u);
  }
  if (a.isZero && b.isZero) {
    return vec2u(0u);
  }

  let magnitudeComparison = fp64_finite_magnitude_compare(a, b);
  if (a.sign == bSubtractionSign) {
    if (magnitudeComparison >= 0) {
      return fp64_add_aligned_magnitudes_to_fp64_bits(a.sign, a, b);
    }
    return fp64_add_aligned_magnitudes_to_fp64_bits(a.sign, b, a);
  }

  if (magnitudeComparison == 0) {
    return vec2u(0u);
  }
  if (magnitudeComparison > 0) {
    return fp64_sub_aligned_magnitudes_to_fp64_bits(a.sign, a, b);
  }
  return fp64_sub_aligned_magnitudes_to_fp64_bits(bSubtractionSign, b, a);
}

fn sub_fp64u32_to_fp64(aBits: vec2u, bBits: vec2u) -> vec2f {
  let resultBits = sub_fp64u32_to_fp64_bits(aBits, bBits);
  return vec2f(bitcast<f32>(resultBits.x), bitcast<f32>(resultBits.y));
}
#endif

#ifndef LUMA_FP64_PREDICATE_ONLY
fn fp64_runtime_zero() -> f32 {
  return fp64arithmetic.ONE * 0.0;
}

fn prevent_fp64_optimization(value: f32) -> f32 {
#ifdef LUMA_FP64_CODE_ELIMINATION_WORKAROUND
  return value + fp64_runtime_zero();
#else
  return value;
#endif
}
#endif

#ifdef LUMA_FP64_INTEGER_ARITHMETIC
${ap}
#else
fn split(a: f32) -> vec2f {
  let splitValue = prevent_fp64_optimization(fp64arithmetic.SPLIT + fp64_runtime_zero());
  let t = prevent_fp64_optimization(a * splitValue);
  let temp = prevent_fp64_optimization(t - a);
  let aHi = prevent_fp64_optimization(t - temp);
  let aLo = prevent_fp64_optimization(a - aHi);
  return vec2f(aHi, aLo);
}

fn split2(a: vec2f) -> vec2f {
  var b = split(a.x);
  b.y = b.y + a.y;
  return b;
}

fn quickTwoSum(a: f32, b: f32) -> vec2f {
#ifdef LUMA_FP64_CODE_ELIMINATION_WORKAROUND
  let sum = prevent_fp64_optimization((a + b) * fp64arithmetic.ONE);
  let err = prevent_fp64_optimization(b - (sum - a) * fp64arithmetic.ONE);
#else
  let sum = prevent_fp64_optimization(a + b);
  let err = prevent_fp64_optimization(b - (sum - a));
#endif
  return vec2f(sum, err);
}

fn twoSum(a: f32, b: f32) -> vec2f {
  let s = prevent_fp64_optimization(a + b);
#ifdef LUMA_FP64_CODE_ELIMINATION_WORKAROUND
  let v = prevent_fp64_optimization((s * fp64arithmetic.ONE - a) * fp64arithmetic.ONE);
  let err =
    prevent_fp64_optimization((a - (s - v) * fp64arithmetic.ONE) *
      fp64arithmetic.ONE *
      fp64arithmetic.ONE *
      fp64arithmetic.ONE) +
    prevent_fp64_optimization(b - v);
#else
  let v = prevent_fp64_optimization(s - a);
  let err = prevent_fp64_optimization(a - (s - v)) + prevent_fp64_optimization(b - v);
#endif
  return vec2f(s, err);
}

fn twoSub(a: f32, b: f32) -> vec2f {
  let s = prevent_fp64_optimization(a - b);
#ifdef LUMA_FP64_CODE_ELIMINATION_WORKAROUND
  let v = prevent_fp64_optimization((s * fp64arithmetic.ONE - a) * fp64arithmetic.ONE);
  let err =
    prevent_fp64_optimization((a - (s - v) * fp64arithmetic.ONE) *
      fp64arithmetic.ONE *
      fp64arithmetic.ONE *
      fp64arithmetic.ONE) -
    prevent_fp64_optimization(b + v);
#else
  let v = prevent_fp64_optimization(s - a);
  let err = prevent_fp64_optimization(a - (s - v)) - prevent_fp64_optimization(b + v);
#endif
  return vec2f(s, err);
}

fn twoSqr(a: f32) -> vec2f {
  let prod = prevent_fp64_optimization(a * a);
  let aFp64 = split(a);
  let highProduct = prevent_fp64_optimization(aFp64.x * aFp64.x);
  let crossProduct = prevent_fp64_optimization(2.0 * aFp64.x * aFp64.y);
  let lowProduct = prevent_fp64_optimization(aFp64.y * aFp64.y);
#ifdef LUMA_FP64_CODE_ELIMINATION_WORKAROUND
  let err =
    (prevent_fp64_optimization(highProduct - prod) * fp64arithmetic.ONE +
      crossProduct * fp64arithmetic.ONE * fp64arithmetic.ONE) +
    lowProduct * fp64arithmetic.ONE * fp64arithmetic.ONE * fp64arithmetic.ONE;
#else
  let err = ((prevent_fp64_optimization(highProduct - prod) + crossProduct) + lowProduct);
#endif
  return vec2f(prod, err);
}

fn twoProd(a: f32, b: f32) -> vec2f {
  let prod = prevent_fp64_optimization(a * b);
  let aFp64 = split(a);
  let bFp64 = split(b);
  let highProduct = prevent_fp64_optimization(aFp64.x * bFp64.x);
  let crossProduct1 = prevent_fp64_optimization(aFp64.x * bFp64.y);
  let crossProduct2 = prevent_fp64_optimization(aFp64.y * bFp64.x);
  let lowProduct = prevent_fp64_optimization(aFp64.y * bFp64.y);
#ifdef LUMA_FP64_CODE_ELIMINATION_WORKAROUND
  let err1 = (highProduct - prod) * fp64arithmetic.ONE;
  let err2 = crossProduct1 * fp64arithmetic.ONE * fp64arithmetic.ONE;
  let err3 = crossProduct2 * fp64arithmetic.ONE * fp64arithmetic.ONE * fp64arithmetic.ONE;
  let err4 =
    lowProduct *
    fp64arithmetic.ONE *
    fp64arithmetic.ONE *
    fp64arithmetic.ONE *
    fp64arithmetic.ONE;
#else
  let err1 = highProduct - prod;
  let err2 = crossProduct1;
  let err3 = crossProduct2;
  let err4 = lowProduct;
#endif
  let err12InputA = prevent_fp64_optimization(err1);
  let err12InputB = prevent_fp64_optimization(err2);
  let err12 = prevent_fp64_optimization(err12InputA + err12InputB);
  let err123InputA = prevent_fp64_optimization(err12);
  let err123InputB = prevent_fp64_optimization(err3);
  let err123 = prevent_fp64_optimization(err123InputA + err123InputB);
  let err1234InputA = prevent_fp64_optimization(err123);
  let err1234InputB = prevent_fp64_optimization(err4);
  let err = prevent_fp64_optimization(err1234InputA + err1234InputB);
  return vec2f(prod, err);
}

fn sum_fp64(a: vec2f, b: vec2f) -> vec2f {
  var s = twoSum(a.x, b.x);
  let t = twoSum(a.y, b.y);
  s.y = prevent_fp64_optimization(s.y + t.x);
  s = quickTwoSum(s.x, s.y);
  s.y = prevent_fp64_optimization(s.y + t.y);
  s = quickTwoSum(s.x, s.y);
  return s;
}

fn sub_fp64(a: vec2f, b: vec2f) -> vec2f {
  var s = twoSub(a.x, b.x);
  let t = twoSub(a.y, b.y);
  s.y = prevent_fp64_optimization(s.y + t.x);
  s = quickTwoSum(s.x, s.y);
  s.y = prevent_fp64_optimization(s.y + t.y);
  s = quickTwoSum(s.x, s.y);
  return s;
}

fn mul_fp64(a: vec2f, b: vec2f) -> vec2f {
  var prod = twoProd(a.x, b.x);
  let crossProduct1 = prevent_fp64_optimization(a.x * b.y);
  prod.y = prevent_fp64_optimization(prod.y + crossProduct1);
#ifdef LUMA_FP64_HIGH_BITS_OVERFLOW_WORKAROUND
  prod = split2(prod);
#endif
  prod = quickTwoSum(prod.x, prod.y);
  let crossProduct2 = prevent_fp64_optimization(a.y * b.x);
  prod.y = prevent_fp64_optimization(prod.y + crossProduct2);
#ifdef LUMA_FP64_HIGH_BITS_OVERFLOW_WORKAROUND
  prod = split2(prod);
#endif
  prod = quickTwoSum(prod.x, prod.y);
  return prod;
}

#ifndef LUMA_FP64_PREDICATE_ONLY
fn div_fp64(a: vec2f, b: vec2f) -> vec2f {
  let xn = prevent_fp64_optimization(1.0 / b.x);
  let yn = mul_fp64(a, vec2f(xn, fp64_runtime_zero()));
  let diff = prevent_fp64_optimization(sub_fp64(a, mul_fp64(b, yn)).x);
  let prod = twoProd(xn, diff);
  return sum_fp64(yn, prod);
}

fn sqrt_fp64(a: vec2f) -> vec2f {
  if (a.x == 0.0 && a.y == 0.0) {
    return vec2f(0.0, 0.0);
  }
  if (a.x < 0.0) {
    let nanValue = fp64_nan(a.x);
    return vec2f(nanValue, nanValue);
  }

  let x = prevent_fp64_optimization(1.0 / sqrt(a.x));
  let yn = prevent_fp64_optimization(a.x * x);
#ifdef LUMA_FP64_CODE_ELIMINATION_WORKAROUND
  let ynSqr = twoSqr(yn) * fp64arithmetic.ONE;
#else
  let ynSqr = twoSqr(yn);
#endif
  let diff = prevent_fp64_optimization(sub_fp64(a, ynSqr).x);
  let prod = twoProd(prevent_fp64_optimization(x * 0.5), diff);
#ifdef LUMA_FP64_HIGH_BITS_OVERFLOW_WORKAROUND
  return sum_fp64(split(yn), prod);
#else
  return sum_fp64(vec2f(yn, 0.0), prod);
#endif
}
#endif
#endif

#ifndef LUMA_FP64_PREDICATE_ONLY
fn fp64_f32_bits_is_nan(bits: u32) -> bool {
  return (bits & 0x7fffffffu) > 0x7f800000u;
}

fn fp64_f32_bits_is_inf(bits: u32) -> bool {
  return (bits & 0x7fffffffu) == 0x7f800000u;
}

fn fp64_compare_f32_bits(aBits: u32, bBits: u32) -> i32 {
  let aMagnitude = aBits & 0x7fffffffu;
  let bMagnitude = bBits & 0x7fffffffu;
  if (aMagnitude == 0u && bMagnitude == 0u) {
    return 0;
  }
  let aSign = aBits >> 31u;
  let bSign = bBits >> 31u;
  if (aSign != bSign) {
    return select(1, -1, aSign == 1u);
  }
  if (aMagnitude == bMagnitude) {
    return 0;
  }
  let magnitudeComparison = select(-1, 1, aMagnitude > bMagnitude);
  return select(magnitudeComparison, -magnitudeComparison, aSign == 1u);
}

// Normalize an arbitrary pair of finite f32 limbs with integer accumulation.
// This is independent of LUMA_FP64_INTEGER_ARITHMETIC and canonicalizes every
// representation of zero to vec2f(+0.0, +0.0).
fn normalize_fp64(value: vec2f) -> vec2f {
  let resultBits = fp64_add_raw_f32_bits(bitcast<u32>(value.x), bitcast<u32>(value.y));
  return vec2f(bitcast<f32>(resultBits.x), bitcast<f32>(resultBits.y));
}

fn is_nan_fp64(value: vec2f) -> bool {
  let normalized = normalize_fp64(value);
  return fp64_f32_bits_is_nan(bitcast<u32>(normalized.x)) ||
    fp64_f32_bits_is_nan(bitcast<u32>(normalized.y));
}

fn is_finite_fp64(value: vec2f) -> bool {
  let normalized = normalize_fp64(value);
  let highBits = bitcast<u32>(normalized.x);
  let lowBits = bitcast<u32>(normalized.y);
  return !fp64_f32_bits_is_nan(highBits) && !fp64_f32_bits_is_nan(lowBits) &&
    !fp64_f32_bits_is_inf(highBits) && !fp64_f32_bits_is_inf(lowBits);
}

// Returns -1, 0, or 1. NaN is unordered and returns 0; call is_nan_fp64 or
// is_finite_fp64 first when 0 must mean a finite zero.
fn sign_fp64(value: vec2f) -> i32 {
  let normalized = normalize_fp64(value);
  let highBits = bitcast<u32>(normalized.x);
  let lowBits = bitcast<u32>(normalized.y);
  if (fp64_f32_bits_is_nan(highBits) || fp64_f32_bits_is_nan(lowBits)) {
    return 0;
  }
  if ((highBits & 0x7fffffffu) != 0u) {
    return select(1, -1, (highBits >> 31u) == 1u);
  }
  if ((lowBits & 0x7fffffffu) != 0u) {
    return select(1, -1, (lowBits >> 31u) == 1u);
  }
  return 0;
}

// Compares double-single values and returns -1, 0, or 1. NaN is unordered
// and returns 0; callers that require equality semantics must first check
// is_nan_fp64 or is_finite_fp64.
fn compare_fp64(a: vec2f, b: vec2f) -> i32 {
  let normalizedA = normalize_fp64(a);
  let normalizedB = normalize_fp64(b);
  let aHighBits = bitcast<u32>(normalizedA.x);
  let aLowBits = bitcast<u32>(normalizedA.y);
  let bHighBits = bitcast<u32>(normalizedB.x);
  let bLowBits = bitcast<u32>(normalizedB.y);
  if (fp64_f32_bits_is_nan(aHighBits) || fp64_f32_bits_is_nan(aLowBits) ||
      fp64_f32_bits_is_nan(bHighBits) || fp64_f32_bits_is_nan(bLowBits)) {
    return 0;
  }
  let highComparison = fp64_compare_f32_bits(aHighBits, bHighBits);
  if (highComparison != 0) {
    return highComparison;
  }
  return fp64_compare_f32_bits(aLowBits, bLowBits);
}
#endif
`,up={ONE:1,SPLIT:4097},lp={name:"fp64arithmetic",source:cp,fs:_o,vs:_o,defaultUniforms:up,uniformTypes:{ONE:"f32",SPLIT:"f32"},fp64ify:lc,fp64LowPart:tp,fp64ifyMatrix4:np},fp={useByteColors:"f32"},dp={useByteColors:!0},yo=gp("floatColors"),hp=pp("floatColors");function gp(n){return`layout(std140) uniform ${n}Uniforms {
  float useByteColors;
} ${n};

vec3 ${n}_normalize(vec3 inputColor) {
  return ${n}.useByteColors > 0.5 ? inputColor / 255.0 : inputColor;
}

vec4 ${n}_normalize(vec4 inputColor) {
  return ${n}.useByteColors > 0.5 ? inputColor / 255.0 : inputColor;
}

vec4 ${n}_premultiplyAlpha(vec4 inputColor) {
  return vec4(inputColor.rgb * inputColor.a, inputColor.a);
}

vec4 ${n}_unpremultiplyAlpha(vec4 inputColor) {
  return inputColor.a > 0.0 ? vec4(inputColor.rgb / inputColor.a, inputColor.a) : vec4(0.0);
}

vec4 ${n}_premultiply_alpha(vec4 inputColor) {
  return ${n}_premultiplyAlpha(inputColor);
}

vec4 ${n}_unpremultiply_alpha(vec4 inputColor) {
  return ${n}_unpremultiplyAlpha(inputColor);
}
`}function pp(n){return`struct ${n}Uniforms {
  useByteColors: f32
};

@group(0) @binding(auto) var<uniform> ${n} : ${n}Uniforms;

fn ${n}_normalize(inputColor: vec3<f32>) -> vec3<f32> {
  return select(inputColor, inputColor / 255.0, ${n}.useByteColors > 0.5);
}

fn ${n}_normalize4(inputColor: vec4<f32>) -> vec4<f32> {
  return select(inputColor, inputColor / 255.0, ${n}.useByteColors > 0.5);
}

fn ${n}_premultiplyAlpha(inputColor: vec4<f32>) -> vec4<f32> {
  return vec4<f32>(inputColor.rgb * inputColor.a, inputColor.a);
}

fn ${n}_unpremultiplyAlpha(inputColor: vec4<f32>) -> vec4<f32> {
  return select(
    vec4<f32>(0.0),
    vec4<f32>(inputColor.rgb / inputColor.a, inputColor.a),
    inputColor.a > 0.0
  );
}

fn ${n}_premultiply_alpha(inputColor: vec4<f32>) -> vec4<f32> {
  return ${n}_premultiplyAlpha(inputColor);
}

fn ${n}_unpremultiply_alpha(inputColor: vec4<f32>) -> vec4<f32> {
  return ${n}_unpremultiplyAlpha(inputColor);
}
`}const hc={name:"floatColors",props:{},uniforms:{},vs:yo,fs:yo,source:hp,uniformTypes:fp,defaultUniforms:dp},mp=[0,1,1,1],bp=`layout(std140) uniform pickingUniforms {
  float isActive;
  float isAttribute;
  float isHighlightActive;
  float useByteColors;
  vec3 highlightedObjectColor;
  vec4 highlightColor;
} picking;

out vec4 picking_vRGBcolor_Avalid;

// Normalize unsigned byte color to 0-1 range
vec3 picking_normalizeColor(vec3 color) {
  return picking.useByteColors > 0.5 ? color / 255.0 : color;
}

// Normalize unsigned byte color to 0-1 range
vec4 picking_normalizeColor(vec4 color) {
  return picking.useByteColors > 0.5 ? color / 255.0 : color;
}

bool picking_isColorZero(vec3 color) {
  return dot(color, vec3(1.0)) < 0.00001;
}

bool picking_isColorValid(vec3 color) {
  return dot(color, vec3(1.0)) > 0.00001;
}

// Check if this vertex is highlighted 
bool isVertexHighlighted(vec3 vertexColor) {
  vec3 highlightedObjectColor = picking_normalizeColor(picking.highlightedObjectColor);
  return
    bool(picking.isHighlightActive) && picking_isColorZero(abs(vertexColor - highlightedObjectColor));
}

// Set the current picking color
void picking_setPickingColor(vec3 pickingColor) {
  pickingColor = picking_normalizeColor(pickingColor);

  if (bool(picking.isActive)) {
    // Use alpha as the validity flag. If pickingColor is [0, 0, 0] fragment is non-pickable
    picking_vRGBcolor_Avalid.a = float(picking_isColorValid(pickingColor));

    if (!bool(picking.isAttribute)) {
      // Stores the picking color so that the fragment shader can render it during picking
      picking_vRGBcolor_Avalid.rgb = pickingColor;
    }
  } else {
    // Do the comparison with selected item color in vertex shader as it should mean fewer compares
    picking_vRGBcolor_Avalid.a = float(isVertexHighlighted(pickingColor));
  }
}

void picking_setPickingAttribute(float value) {
  if (bool(picking.isAttribute)) {
    picking_vRGBcolor_Avalid.r = value;
  }
}

void picking_setPickingAttribute(vec2 value) {
  if (bool(picking.isAttribute)) {
    picking_vRGBcolor_Avalid.rg = value;
  }
}

void picking_setPickingAttribute(vec3 value) {
  if (bool(picking.isAttribute)) {
    picking_vRGBcolor_Avalid.rgb = value;
  }
}
`,_p=`layout(std140) uniform pickingUniforms {
  float isActive;
  float isAttribute;
  float isHighlightActive;
  float useByteColors;
  vec3 highlightedObjectColor;
  vec4 highlightColor;
} picking;

in vec4 picking_vRGBcolor_Avalid;

/*
 * Returns highlight color if this item is selected.
 */
vec4 picking_filterHighlightColor(vec4 color) {
  // If we are still picking, we don't highlight
  if (picking.isActive > 0.5) {
    return color;
  }

  bool selected = bool(picking_vRGBcolor_Avalid.a);

  if (selected) {
    // Blend in highlight color based on its alpha value
    float highLightAlpha = picking.highlightColor.a;
    float blendedAlpha = highLightAlpha + color.a * (1.0 - highLightAlpha);
    float highLightRatio = highLightAlpha / blendedAlpha;

    vec3 blendedRGB = mix(color.rgb, picking.highlightColor.rgb, highLightRatio);
    return vec4(blendedRGB, blendedAlpha);
  } else {
    return color;
  }
}

/*
 * Returns picking color if picking enabled else unmodified argument.
 */
vec4 picking_filterPickingColor(vec4 color) {
  if (bool(picking.isActive)) {
    if (picking_vRGBcolor_Avalid.a == 0.0) {
      discard;
    }
    return picking_vRGBcolor_Avalid;
  }
  return color;
}

/*
 * Returns picking color if picking is enabled if not
 * highlight color if this item is selected, otherwise unmodified argument.
 */
vec4 picking_filterColor(vec4 color) {
  vec4 highlightColor = picking_filterHighlightColor(color);
  return picking_filterPickingColor(highlightColor);
}
`,We={props:{},uniforms:{},name:"picking",uniformTypes:{isActive:"f32",isAttribute:"f32",isHighlightActive:"f32",useByteColors:"f32",highlightedObjectColor:"vec3<f32>",highlightColor:"vec4<f32>"},defaultUniforms:{isActive:!1,isAttribute:!1,isHighlightActive:!1,useByteColors:!0,highlightedObjectColor:[0,0,0],highlightColor:mp},vs:bp,fs:_p,getUniforms:yp};function yp(n={},e){const t={},r=fc(n.useByteColors,!0);if(n.highlightedObjectColor!==void 0)if(n.highlightedObjectColor===null)t.isHighlightActive=!1;else{t.isHighlightActive=!0;const i=n.highlightedObjectColor.slice(0,3);t.highlightedObjectColor=i}return n.highlightColor&&(t.highlightColor=rp(n.highlightColor,r)),n.isActive!==void 0&&(t.isActive=!!n.isActive,t.isAttribute=!!n.isAttribute),n.useByteColors!==void 0&&(t.useByteColors=!!n.useByteColors),t}const wo=`precision highp int;

// #if (defined(SHADER_TYPE_FRAGMENT) && defined(LIGHTING_FRAGMENT)) || (defined(SHADER_TYPE_VERTEX) && defined(LIGHTING_VERTEX))
struct AmbientLight {
  vec3 color;
};

struct PointLight {
  vec3 color;
  vec3 position;
  vec3 attenuation; // 2nd order x:Constant-y:Linear-z:Exponential
};

struct SpotLight {
  vec3 color;
  vec3 position;
  vec3 direction;
  vec3 attenuation;
  vec2 coneCos;
};

struct DirectionalLight {
  vec3 color;
  vec3 direction;
};

struct UniformLight {
  vec3 color;
  vec3 position;
  vec3 direction;
  vec3 attenuation;
  vec2 coneCos;
};

layout(std140) uniform lightingUniforms {
  int enabled;
  int directionalLightCount;
  int pointLightCount;
  int spotLightCount;
  vec3 ambientColor;
  UniformLight lights[5];
} lighting;

PointLight lighting_getPointLight(int index) {
  UniformLight light = lighting.lights[index];
  return PointLight(light.color, light.position, light.attenuation);
}

SpotLight lighting_getSpotLight(int index) {
  UniformLight light = lighting.lights[lighting.pointLightCount + index];
  return SpotLight(light.color, light.position, light.direction, light.attenuation, light.coneCos);
}

DirectionalLight lighting_getDirectionalLight(int index) {
  UniformLight light =
    lighting.lights[lighting.pointLightCount + lighting.spotLightCount + index];
  return DirectionalLight(light.color, light.direction);
}

float getPointLightAttenuation(PointLight pointLight, float distance) {
  return pointLight.attenuation.x
       + pointLight.attenuation.y * distance
       + pointLight.attenuation.z * distance * distance;
}

float getSpotLightAttenuation(SpotLight spotLight, vec3 positionWorldspace) {
  vec3 light_direction = normalize(positionWorldspace - spotLight.position);
  float coneFactor = smoothstep(
    spotLight.coneCos.y,
    spotLight.coneCos.x,
    dot(normalize(spotLight.direction), light_direction)
  );
  float distanceAttenuation = getPointLightAttenuation(
    PointLight(spotLight.color, spotLight.position, spotLight.attenuation),
    distance(spotLight.position, positionWorldspace)
  );
  return distanceAttenuation / max(coneFactor, 0.0001);
}

// #endif
`,wp=`// #if (defined(SHADER_TYPE_FRAGMENT) && defined(LIGHTING_FRAGMENT)) || (defined(SHADER_TYPE_VERTEX) && defined(LIGHTING_VERTEX))
const MAX_LIGHTS: i32 = 5;

struct AmbientLight {
  color: vec3<f32>,
};

struct PointLight {
  color: vec3<f32>,
  position: vec3<f32>,
  attenuation: vec3<f32>, // 2nd order x:Constant-y:Linear-z:Exponential
};

struct SpotLight {
  color: vec3<f32>,
  position: vec3<f32>,
  direction: vec3<f32>,
  attenuation: vec3<f32>,
  coneCos: vec2<f32>,
};

struct DirectionalLight {
  color: vec3<f32>,
  direction: vec3<f32>,
};

struct UniformLight {
  color: vec3<f32>,
  position: vec3<f32>,
  direction: vec3<f32>,
  attenuation: vec3<f32>,
  coneCos: vec2<f32>,
};

struct lightingUniforms {
  enabled: i32,
  directionalLightCount: i32,
  pointLightCount: i32,
  spotLightCount: i32,
  ambientColor: vec3<f32>,
  lights: array<UniformLight, 5>,
};

@group(2) @binding(auto) var<uniform> lighting : lightingUniforms;

fn lighting_getPointLight(index: i32) -> PointLight {
  let light = lighting.lights[index];
  return PointLight(light.color, light.position, light.attenuation);
}

fn lighting_getSpotLight(index: i32) -> SpotLight {
  let light = lighting.lights[lighting.pointLightCount + index];
  return SpotLight(light.color, light.position, light.direction, light.attenuation, light.coneCos);
}

fn lighting_getDirectionalLight(index: i32) -> DirectionalLight {
  let light = lighting.lights[lighting.pointLightCount + lighting.spotLightCount + index];
  return DirectionalLight(light.color, light.direction);
}

fn getPointLightAttenuation(pointLight: PointLight, distance: f32) -> f32 {
  return pointLight.attenuation.x
       + pointLight.attenuation.y * distance
       + pointLight.attenuation.z * distance * distance;
}

fn getSpotLightAttenuation(spotLight: SpotLight, positionWorldspace: vec3<f32>) -> f32 {
  let lightDirection = normalize(positionWorldspace - spotLight.position);
  let coneFactor = smoothstep(
    spotLight.coneCos.y,
    spotLight.coneCos.x,
    dot(normalize(spotLight.direction), lightDirection)
  );
  let distanceAttenuation = getPointLightAttenuation(
    PointLight(spotLight.color, spotLight.position, spotLight.attenuation),
    distance(spotLight.position, positionWorldspace)
  );
  return distanceAttenuation / max(coneFactor, 0.0001);
}
`,Le=5,vp={color:"vec3<f32>",position:"vec3<f32>",direction:"vec3<f32>",attenuation:"vec3<f32>",coneCos:"vec2<f32>"},gc={props:{},uniforms:{},name:"lighting",defines:{},uniformTypes:{enabled:"i32",directionalLightCount:"i32",pointLightCount:"i32",spotLightCount:"i32",ambientColor:"vec3<f32>",lights:[vp,Le]},defaultUniforms:sn(),bindingLayout:[{name:"lighting",group:2}],firstBindingSlot:0,source:wp,vs:wo,fs:wo,getUniforms:xp};function xp(n,e={}){if(n=n&&{...n},!n)return sn();n.lights&&(n={...n,...Ep(n.lights),lights:void 0});const{useByteColors:t,ambientLight:r,pointLights:i,spotLights:s,directionalLights:o}=n||{};if(!(r||i&&i.length>0||s&&s.length>0||o&&o.length>0))return{...sn(),enabled:0};const c={...sn(),...Sp({useByteColors:t,ambientLight:r,pointLights:i,spotLights:s,directionalLights:o})};return n.enabled!==void 0&&(c.enabled=n.enabled?1:0),c}function Sp({useByteColors:n,ambientLight:e,pointLights:t=[],spotLights:r=[],directionalLights:i=[]}){const s=pc();let o=0,a=0,c=0,u=0;for(const f of t){if(o>=Le)break;s[o]={...s[o],color:qt(f,n),position:f.position,attenuation:f.attenuation||[1,0,0]},o++,a++}for(const f of r){if(o>=Le)break;s[o]={...s[o],color:qt(f,n),position:f.position,direction:f.direction,attenuation:f.attenuation||[1,0,0],coneCos:Tp(f)},o++,c++}for(const f of i){if(o>=Le)break;s[o]={...s[o],color:qt(f,n),direction:f.direction},o++,u++}return t.length+r.length+i.length>Le&&v.warn(`MAX_LIGHTS exceeded, truncating to ${Le}`)(),{ambientColor:qt(e,n),directionalLightCount:u,pointLightCount:a,spotLightCount:c,lights:s}}function Ep(n){var t,r,i;const e={pointLights:[],spotLights:[],directionalLights:[]};for(const s of n||[])switch(s.type){case"ambient":e.ambientLight=s;break;case"directional":(t=e.directionalLights)==null||t.push(s);break;case"point":(r=e.pointLights)==null||r.push(s);break;case"spot":(i=e.spotLights)==null||i.push(s);break}return e}function qt(n={},e){const{color:t=[0,0,0],intensity:r=1}=n;return dc(t,fc(e,!0)).map(s=>s*r)}function sn(){return{enabled:1,directionalLightCount:0,pointLightCount:0,spotLightCount:0,ambientColor:[.1,.1,.1],lights:pc()}}function pc(){return Array.from({length:Le},()=>Ap())}function Ap(){return{color:[1,1,1],position:[1,1,2],direction:[1,1,1],attenuation:[1,0,0],coneCos:[1,0]}}function Tp(n){const e=n.innerConeAngle??0,t=n.outerConeAngle??Math.PI/4;return[Math.cos(e),Math.cos(t)]}const mc=`layout(std140) uniform phongMaterialUniforms {
  uniform bool unlit;
  uniform float ambient;
  uniform float diffuse;
  uniform float shininess;
  uniform vec3  specularColor;
} material;
`,bc=`layout(std140) uniform phongMaterialUniforms {
  uniform bool unlit;
  uniform float ambient;
  uniform float diffuse;
  uniform float shininess;
  uniform vec3  specularColor;
} material;

vec3 lighting_getLightColor(vec3 surfaceColor, vec3 light_direction, vec3 view_direction, vec3 normal_worldspace, vec3 color) {
  vec3 halfway_direction = normalize(light_direction + view_direction);
  float lambertian = dot(light_direction, normal_worldspace);
  float specular = 0.0;
  if (lambertian > 0.0) {
    float specular_angle = max(dot(normal_worldspace, halfway_direction), 0.0);
    specular = pow(specular_angle, material.shininess);
  }
  lambertian = max(lambertian, 0.0);
  return (lambertian * material.diffuse * surfaceColor + specular * floatColors_normalize(material.specularColor)) * color;
}

vec3 lighting_getLightColor(vec3 surfaceColor, vec3 cameraPosition, vec3 position_worldspace, vec3 normal_worldspace) {
  vec3 lightColor = surfaceColor;

  if (material.unlit) {
    return surfaceColor;
  }

  if (lighting.enabled == 0) {
    return lightColor;
  }

  vec3 view_direction = normalize(cameraPosition - position_worldspace);
  lightColor = material.ambient * surfaceColor * lighting.ambientColor;

  for (int i = 0; i < lighting.pointLightCount; i++) {
    PointLight pointLight = lighting_getPointLight(i);
    vec3 light_position_worldspace = pointLight.position;
    vec3 light_direction = normalize(light_position_worldspace - position_worldspace);
    float light_attenuation = getPointLightAttenuation(pointLight, distance(light_position_worldspace, position_worldspace));
    lightColor += lighting_getLightColor(surfaceColor, light_direction, view_direction, normal_worldspace, pointLight.color / light_attenuation);
  }

  for (int i = 0; i < lighting.spotLightCount; i++) {
    SpotLight spotLight = lighting_getSpotLight(i);
    vec3 light_position_worldspace = spotLight.position;
    vec3 light_direction = normalize(light_position_worldspace - position_worldspace);
    float light_attenuation = getSpotLightAttenuation(spotLight, position_worldspace);
    lightColor += lighting_getLightColor(surfaceColor, light_direction, view_direction, normal_worldspace, spotLight.color / light_attenuation);
  }

  for (int i = 0; i < lighting.directionalLightCount; i++) {
    DirectionalLight directionalLight = lighting_getDirectionalLight(i);
    lightColor += lighting_getLightColor(surfaceColor, -directionalLight.direction, view_direction, normal_worldspace, directionalLight.color);
  }
  
  return lightColor;
}
`,_c=`struct phongMaterialUniforms {
  unlit: u32,
  ambient: f32,
  diffuse: f32,
  shininess: f32,
  specularColor: vec3<f32>,
};

@group(3) @binding(auto) var<uniform> phongMaterial : phongMaterialUniforms;

fn lighting_getLightColor(surfaceColor: vec3<f32>, light_direction: vec3<f32>, view_direction: vec3<f32>, normal_worldspace: vec3<f32>, color: vec3<f32>) -> vec3<f32> {
  let halfway_direction: vec3<f32> = normalize(light_direction + view_direction);
  var lambertian: f32 = dot(light_direction, normal_worldspace);
  var specular: f32 = 0.0;
  if (lambertian > 0.0) {
    let specular_angle = max(dot(normal_worldspace, halfway_direction), 0.0);
    specular = pow(specular_angle, phongMaterial.shininess);
  }
  lambertian = max(lambertian, 0.0);
  return (
    lambertian * phongMaterial.diffuse * surfaceColor +
    specular * floatColors_normalize(phongMaterial.specularColor)
  ) * color;
}

fn lighting_getLightColor2(surfaceColor: vec3<f32>, cameraPosition: vec3<f32>, position_worldspace: vec3<f32>, normal_worldspace: vec3<f32>) -> vec3<f32> {
  var lightColor: vec3<f32> = surfaceColor;

  if (phongMaterial.unlit != 0u) {
    return surfaceColor;
  }

  if (lighting.enabled == 0) {
    return lightColor;
  }

  let view_direction: vec3<f32> = normalize(cameraPosition - position_worldspace);
  lightColor = phongMaterial.ambient * surfaceColor * lighting.ambientColor;

  for (var i: i32 = 0; i < lighting.pointLightCount; i++) {
    let pointLight: PointLight = lighting_getPointLight(i);
    let light_position_worldspace: vec3<f32> = pointLight.position;
    let light_direction: vec3<f32> = normalize(light_position_worldspace - position_worldspace);
    let light_attenuation = getPointLightAttenuation(
      pointLight,
      distance(light_position_worldspace, position_worldspace)
    );
    lightColor += lighting_getLightColor(
      surfaceColor,
      light_direction,
      view_direction,
      normal_worldspace,
      pointLight.color / light_attenuation
    );
  }

  for (var i: i32 = 0; i < lighting.spotLightCount; i++) {
    let spotLight: SpotLight = lighting_getSpotLight(i);
    let light_position_worldspace: vec3<f32> = spotLight.position;
    let light_direction: vec3<f32> = normalize(light_position_worldspace - position_worldspace);
    let light_attenuation = getSpotLightAttenuation(spotLight, position_worldspace);
    lightColor += lighting_getLightColor(
      surfaceColor,
      light_direction,
      view_direction,
      normal_worldspace,
      spotLight.color / light_attenuation
    );
  }

  for (var i: i32 = 0; i < lighting.directionalLightCount; i++) {
    let directionalLight: DirectionalLight = lighting_getDirectionalLight(i);
    lightColor += lighting_getLightColor(surfaceColor, -directionalLight.direction, view_direction, normal_worldspace, directionalLight.color);
  }  
  
  return lightColor;
}

fn lighting_getSpecularLightColor(cameraPosition: vec3<f32>, position_worldspace: vec3<f32>, normal_worldspace: vec3<f32>) -> vec3<f32>{
  var lightColor = vec3<f32>(0, 0, 0);
  let surfaceColor = vec3<f32>(0, 0, 0);

  if (lighting.enabled != 0) {
    let view_direction = normalize(cameraPosition - position_worldspace);

    for (var i: i32 = 0; i < lighting.pointLightCount; i++) {
      let pointLight: PointLight = lighting_getPointLight(i);
      let light_position_worldspace: vec3<f32> = pointLight.position;
      let light_direction: vec3<f32> = normalize(light_position_worldspace - position_worldspace);
      let light_attenuation = getPointLightAttenuation(
        pointLight,
        distance(light_position_worldspace, position_worldspace)
      );
      lightColor += lighting_getLightColor(
        surfaceColor,
        light_direction,
        view_direction,
        normal_worldspace,
        pointLight.color / light_attenuation
      );
    }

    for (var i: i32 = 0; i < lighting.spotLightCount; i++) {
      let spotLight: SpotLight = lighting_getSpotLight(i);
      let light_position_worldspace: vec3<f32> = spotLight.position;
      let light_direction: vec3<f32> = normalize(light_position_worldspace - position_worldspace);
      let light_attenuation = getSpotLightAttenuation(spotLight, position_worldspace);
      lightColor += lighting_getLightColor(
        surfaceColor,
        light_direction,
        view_direction,
        normal_worldspace,
        spotLight.color / light_attenuation
      );
    }

    for (var i: i32 = 0; i < lighting.directionalLightCount; i++) {
        let directionalLight: DirectionalLight = lighting_getDirectionalLight(i);
        lightColor += lighting_getLightColor(surfaceColor, -directionalLight.direction, view_direction, normal_worldspace, directionalLight.color);
    }
  }
  return lightColor;
}
`,Lp=[38.25,38.25,38.25],Pp={props:{},name:"gouraudMaterial",bindingLayout:[{name:"gouraudMaterial",group:3}],vs:bc.replace("phongMaterial","gouraudMaterial"),fs:mc.replace("phongMaterial","gouraudMaterial"),source:_c.replaceAll("phongMaterial","gouraudMaterial"),defines:{LIGHTING_VERTEX:!0},dependencies:[gc,hc],uniformTypes:{unlit:"i32",ambient:"f32",diffuse:"f32",shininess:"f32",specularColor:"vec3<f32>"},defaultUniforms:{unlit:!1,ambient:.35,diffuse:.6,shininess:32,specularColor:Lp},getUniforms(n){return{...Pp.defaultUniforms,...n}}},Bp=[38.25,38.25,38.25],Cp={name:"phongMaterial",firstBindingSlot:0,bindingLayout:[{name:"phongMaterial",group:3}],dependencies:[gc,hc],source:_c,vs:mc,fs:bc,defines:{LIGHTING_FRAGMENT:!0},uniformTypes:{unlit:"i32",ambient:"f32",diffuse:"f32",shininess:"f32",specularColor:"vec3<f32>"},defaultUniforms:{unlit:!1,ambient:.35,diffuse:.6,shininess:32,specularColor:Bp},getUniforms(n){return{...Cp.defaultUniforms,...n}}},Ip=`

@must_use
fn deckgl_premultiplied_alpha(fragColor: vec4<f32>) -> vec4<f32> {
    return vec4(fragColor.rgb * fragColor.a, fragColor.a); 
};
`,jv={name:"color",dependencies:[],source:Ip,getUniforms:n=>({})},Op=`const SMOOTH_EDGE_RADIUS: f32 = 0.5;

struct VertexGeometry {
  position: vec4<f32>,
  worldPosition: vec3<f32>,
  worldPositionAlt: vec3<f32>,
  normal: vec3<f32>,
  uv: vec2<f32>,
  pickingColor: vec3<f32>,
};

var<private> geometry_: VertexGeometry = VertexGeometry(
  vec4<f32>(0.0, 0.0, 1.0, 0.0),
  vec3<f32>(0.0, 0.0, 0.0),
  vec3<f32>(0.0, 0.0, 0.0),
  vec3<f32>(0.0, 0.0, 0.0),
  vec2<f32>(0.0, 0.0),
  vec3<f32>(0.0, 0.0, 0.0)
);

struct FragmentGeometry {
  uv: vec2<f32>,
};

var<private> fragmentGeometry: FragmentGeometry;

fn smoothedge(edge: f32, x: f32) -> f32 {
  return smoothstep(edge - SMOOTH_EDGE_RADIUS, edge + SMOOTH_EDGE_RADIUS, x);
}
`,yc="#define SMOOTH_EDGE_RADIUS 0.5",Rp=`${yc}

struct VertexGeometry {
  vec4 position;
  vec3 worldPosition;
  vec3 worldPositionAlt;
  vec3 normal;
  vec2 uv;
  vec3 pickingColor;
} geometry = VertexGeometry(
  vec4(0.0, 0.0, 1.0, 0.0),
  vec3(0.0),
  vec3(0.0),
  vec3(0.0),
  vec2(0.0),
  vec3(0.0)
);
`,Mp=`${yc}

struct FragmentGeometry {
  vec2 uv;
};
FragmentGeometry geometry;

float smoothedge(float edge, float x) {
  return smoothstep(edge - SMOOTH_EDGE_RADIUS, edge + SMOOTH_EDGE_RADIUS, x);
}
`,Dp={name:"geometry",source:Op,vs:Rp,fs:Mp};function $p(n,e){if(n===e)return!0;if(Array.isArray(n)){const t=n.length;if(!e||e.length!==t)return!1;for(let r=0;r<t;r++)if(n[r]!==e[r])return!1;return!0}return!1}function as(n){let e={},t;return r=>{for(const i in r)if(!$p(r[i],e[i])){t=n(r),e=r;break}return t}}const vo=[0,0,0,0],kp=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0],wc=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],Up=[0,0,0],vc=[0,0,0],Np={default:-1,cartesian:0,lnglat:1,"meter-offsets":2,"lnglat-offsets":3};function cs(n){const e=Np[n];if(e===void 0)throw new Error(`Invalid coordinateSystem: ${n}`);return e}const Fp=as(Wp);function xc(n,e,t=vc){t.length<3&&(t=[t[0],t[1],0]);let r=t,i,s=!0;switch(e==="lnglat-offsets"||e==="meter-offsets"?i=t:i=n.isGeospatial?[Math.fround(n.longitude),Math.fround(n.latitude),0]:null,n.projectionMode){case he.WEB_MERCATOR:(e==="lnglat"||e==="cartesian")&&(i=[0,0,0],s=!1);break;case he.WEB_MERCATOR_AUTO_OFFSET:e==="lnglat"?r=i:e==="cartesian"&&(r=[Math.fround(n.center[0]),Math.fround(n.center[1]),0],i=n.unprojectPosition(r),r[0]-=t[0],r[1]-=t[1],r[2]-=t[2]);break;case he.IDENTITY:r=n.position.map(Math.fround),r[2]=r[2]||0;break;case he.GLOBE:s=!1,i=null;break;default:s=!1}return{geospatialOrigin:i,shaderCoordinateOrigin:r,offsetMode:s}}function Gp(n,e,t){const{viewMatrixUncentered:r,projectionMatrix:i}=n;let{viewMatrix:s,viewProjectionMatrix:o}=n,a=vo,c=vo,u=n.cameraPosition;const{geospatialOrigin:f,shaderCoordinateOrigin:d,offsetMode:h}=xc(n,e,t);return h&&(c=n.projectPosition(f||d),u=[u[0]-c[0],u[1]-c[1],u[2]-c[2]],c[3]=1,a=$i([],c,o),s=r||s,o=vs([],i,s),o=vs([],o,kp)),{viewMatrix:s,viewProjectionMatrix:o,projectionCenter:a,originCommon:c,cameraPosCommon:u,shaderCoordinateOrigin:d,geospatialOrigin:f}}function zp({viewport:n,devicePixelRatio:e=1,modelMatrix:t=null,coordinateSystem:r="default",coordinateOrigin:i=vc,autoWrapLongitude:s=!1}){r==="default"&&(r=n.isGeospatial?"lnglat":"cartesian");const o=Fp({viewport:n,devicePixelRatio:e,coordinateSystem:r,coordinateOrigin:i});return o.wrapLongitude=s,o.modelMatrix=t||wc,o}function Wp({viewport:n,devicePixelRatio:e,coordinateSystem:t,coordinateOrigin:r}){const{projectionCenter:i,viewProjectionMatrix:s,originCommon:o,cameraPosCommon:a,shaderCoordinateOrigin:c,geospatialOrigin:u}=Gp(n,t,r),f=n.getDistanceScales(),d=[n.width*e,n.height*e],h=$i([],[0,0,-n.focalDistance,1],n.projectionMatrix)[3]||1,g={coordinateSystem:cs(t),projectionMode:n.projectionMode,coordinateOrigin:c,commonOrigin:o.slice(0,3),center:i,pseudoMeters:!!n._pseudoMeters,viewportSize:d,devicePixelRatio:e,focalDistance:h,commonUnitsPerMeter:f.unitsPerMeter,commonUnitsPerWorldUnit:f.unitsPerMeter,commonUnitsPerWorldUnit2:Up,scale:n.scale,wrapLongitude:!1,viewProjectionMatrix:s,modelMatrix:wc,cameraPosition:a};if(u){const p=n.getDistanceScales(u);switch(t){case"meter-offsets":g.commonUnitsPerWorldUnit=p.unitsPerMeter,g.commonUnitsPerWorldUnit2=p.unitsPerMeter2;break;case"lnglat":case"lnglat-offsets":n._pseudoMeters||(g.commonUnitsPerMeter=p.unitsPerMeter),g.commonUnitsPerWorldUnit=p.unitsPerDegree,g.commonUnitsPerWorldUnit2=p.unitsPerDegree2;break;case"cartesian":g.commonUnitsPerWorldUnit=[1,1,p.unitsPerMeter[2]],g.commonUnitsPerWorldUnit2=[0,0,p.unitsPerMeter2[2]];break}}if(n.projectionMode===he.GLOBE&&t==="meter-offsets"){const b=r[0]*Math.PI/180,w=r[1]*Math.PI/180,_=Math.cos(w),y=((r[2]||0)/6370972+1)*256;g.commonOrigin=[Math.sin(b)*_*y,-Math.cos(b)*_*y,Math.sin(w)*y]}return g}const jp=["default","lnglat","meter-offsets","lnglat-offsets","cartesian"],Vp=jp.map(n=>`const COORDINATE_SYSTEM_${n.toUpperCase().replaceAll("-","_")}: i32 = ${cs(n)};`).join(""),Hp=Object.keys(he).map(n=>`const PROJECTION_MODE_${n}: i32 = ${he[n]};`).join(""),Yp=Object.keys(un).map(n=>`const UNIT_${n.toUpperCase()}: i32 = ${un[n]};`).join(""),qp=`${Vp}
${Hp}
${Yp}

const TILE_SIZE: f32 = 512.0;
const PI: f32 = 3.1415926536;
const WORLD_SCALE: f32 = TILE_SIZE / (PI * 2.0);
const ZERO_64_LOW: vec3<f32> = vec3<f32>(0.0, 0.0, 0.0);
const EARTH_RADIUS: f32 = 6370972.0; // meters
const GLOBE_RADIUS: f32 = 256.0;

// -----------------------------------------------------------------------------
// Uniform block (converted from GLSL uniform block)
// -----------------------------------------------------------------------------
struct ProjectUniforms {
  wrapLongitude: i32,
  coordinateSystem: i32,
  commonUnitsPerMeter: vec3<f32>,
  projectionMode: i32,
  scale: f32,
  commonUnitsPerWorldUnit: vec3<f32>,
  commonUnitsPerWorldUnit2: vec3<f32>,
  center: vec4<f32>,
  modelMatrix: mat4x4<f32>,
  viewProjectionMatrix: mat4x4<f32>,
  viewportSize: vec2<f32>,
  devicePixelRatio: f32,
  focalDistance: f32,
  cameraPosition: vec3<f32>,
  coordinateOrigin: vec3<f32>,
  commonOrigin: vec3<f32>,
  pseudoMeters: i32,
};

@group(0) @binding(auto)
var<uniform> project: ProjectUniforms;

// -----------------------------------------------------------------------------
// Geometry data shared across the project helpers.
// The active layer shader is responsible for populating this private module
// state before calling the project functions below.
// -----------------------------------------------------------------------------

// Structure to carry additional geometry data used by deck.gl filters.
struct Geometry {
  worldPosition: vec3<f32>,
  worldPositionAlt: vec3<f32>,
  position: vec4<f32>,
  normal: vec3<f32>,
  uv: vec2<f32>,
  pickingColor: vec3<f32>,
};

var<private> geometry: Geometry;
`,Qp=`${qp}

// -----------------------------------------------------------------------------
// Functions
// -----------------------------------------------------------------------------

// Returns an adjustment factor for commonUnitsPerMeter
fn _project_size_at_latitude(lat: f32) -> f32 {
  let y = clamp(lat, -89.9, 89.9);
  return 1.0 / cos(radians(y));
}

// Overloaded version: scales a value in meters at a given latitude.
fn _project_size_at_latitude_m(meters: f32, lat: f32) -> f32 {
  return meters * project.commonUnitsPerMeter.z * _project_size_at_latitude(lat);
}

// Computes a non-linear scale factor based on geometry.
// (Note: This function relies on "geometry" being provided.)
fn project_size() -> f32 {
  if (project.projectionMode == PROJECTION_MODE_WEB_MERCATOR &&
      project.coordinateSystem == COORDINATE_SYSTEM_LNGLAT &&
      project.pseudoMeters == 0) {
    if (geometry.position.w == 0.0) {
      return _project_size_at_latitude(geometry.worldPosition.y);
    }
    let y: f32 = geometry.position.y / TILE_SIZE * 2.0 - 1.0;
    let y2 = y * y;
    let y4 = y2 * y2;
    let y6 = y4 * y2;
    return 1.0 + 4.9348 * y2 + 4.0587 * y4 + 1.5642 * y6;
  }
  return 1.0;
}

// Overloads to scale offsets (meters to world units)
fn project_size_float(meters: f32) -> f32 {
  return meters * project.commonUnitsPerMeter.z * project_size();
}

fn project_size_vec2(meters: vec2<f32>) -> vec2<f32> {
  return meters * project.commonUnitsPerMeter.xy * project_size();
}

fn project_size_vec3(meters: vec3<f32>) -> vec3<f32> {
  return meters * project.commonUnitsPerMeter * project_size();
}

fn project_size_vec4(meters: vec4<f32>) -> vec4<f32> {
  return vec4<f32>(meters.xyz * project.commonUnitsPerMeter, meters.w);
}

// Returns a rotation matrix aligning the z‑axis with the given up vector.
fn project_get_orientation_matrix(up: vec3<f32>) -> mat3x3<f32> {
  let uz = normalize(up);
  let ux = select(
    vec3<f32>(1.0, 0.0, 0.0),
    normalize(vec3<f32>(uz.y, -uz.x, 0.0)),
    abs(uz.z) == 1.0
  );
  let uy = cross(uz, ux);
  return mat3x3<f32>(ux, uy, uz);
}

// Since WGSL does not support "out" parameters, we return a struct.
struct RotationResult {
  needsRotation: bool,
  transform: mat3x3<f32>,
};

fn project_needs_rotation(commonPosition: vec3<f32>) -> RotationResult {
  if (project.projectionMode == PROJECTION_MODE_GLOBE) {
    return RotationResult(true, project_get_orientation_matrix(commonPosition));
  } else {
    return RotationResult(false, mat3x3<f32>());  // identity alternative if needed
  };
}

// Projects a normal vector from the current coordinate system to world space.
fn project_normal(vector: vec3<f32>) -> vec3<f32> {
  let normal_modelspace = project.modelMatrix * vec4<f32>(vector, 0.0);
  var n = normalize(normal_modelspace.xyz * project.commonUnitsPerMeter);
  let rotResult = project_needs_rotation(geometry.position.xyz);
  if (rotResult.needsRotation) {
    n = rotResult.transform * n;
  }
  return n;
}

// Applies a scale offset based on y-offset (dy)
fn project_offset_(offset: vec4<f32>) -> vec4<f32> {
  let dy: f32 = offset.y;
  let commonUnitsPerWorldUnit = project.commonUnitsPerWorldUnit + project.commonUnitsPerWorldUnit2 * dy;
  return vec4<f32>(offset.xyz * commonUnitsPerWorldUnit, offset.w);
}

// Projects lng/lat coordinates to a unit tile [0,1]
fn project_mercator_(lnglat: vec2<f32>) -> vec2<f32> {
  var x = lnglat.x;
  if (project.wrapLongitude != 0) {
    x = ((x + 180.0) % 360.0) - 180.0;
  }
  let y = clamp(lnglat.y, -89.9, 89.9);
  return vec2<f32>(
    radians(x) + PI,
    PI + log(tan_fp32(PI * 0.25 + radians(y) * 0.5))
  ) * WORLD_SCALE;
}

// Projects lng/lat/z coordinates for a globe projection.
fn project_globe_(lnglatz: vec3<f32>) -> vec3<f32> {
  let lambda = radians(lnglatz.x);
  let phi = radians(lnglatz.y);
  let cosPhi = cos(phi);
  let D = (lnglatz.z / EARTH_RADIUS + 1.0) * GLOBE_RADIUS;
  return vec3<f32>(
    sin(lambda) * cosPhi,
    -cos(lambda) * cosPhi,
    sin(phi)
  ) * D;
}

// Projects positions (with an optional 64-bit low part) from the input
// coordinate system to the common space.
fn project_position_vec4_f64(position: vec4<f32>, position64Low: vec3<f32>) -> vec4<f32> {
  var position_world = project.modelMatrix * position;

  // Work around for a Mac+NVIDIA bug:
  if (project.projectionMode == PROJECTION_MODE_WEB_MERCATOR) {
    if (project.coordinateSystem == COORDINATE_SYSTEM_LNGLAT) {
      return vec4<f32>(
        project_mercator_(position_world.xy),
        _project_size_at_latitude_m(position_world.z, position_world.y),
        position_world.w
      );
    }
    if (project.coordinateSystem == COORDINATE_SYSTEM_CARTESIAN) {
      position_world = vec4f(position_world.xyz + project.coordinateOrigin, position_world.w);
    }
  }
  if (project.projectionMode == PROJECTION_MODE_GLOBE) {
    if (project.coordinateSystem == COORDINATE_SYSTEM_LNGLAT) {
      return vec4<f32>(
        project_globe_(position_world.xyz),
        position_world.w
      );
    }
    if (project.coordinateSystem == COORDINATE_SYSTEM_METER_OFFSETS) {
      let enuMatrix = project_get_orientation_matrix(project.commonOrigin);
      let metersToCommon = GLOBE_RADIUS / EARTH_RADIUS;
      let offsetCommon = (enuMatrix * vec3<f32>(-position_world.x, -position_world.y, position_world.z)) * metersToCommon;
      return vec4<f32>(project.commonOrigin + offsetCommon, position_world.w);
    }
  }
  if (project.projectionMode == PROJECTION_MODE_WEB_MERCATOR_AUTO_OFFSET) {
    if (project.coordinateSystem == COORDINATE_SYSTEM_LNGLAT) {
      if (abs(position_world.y - project.coordinateOrigin.y) > 0.25) {
        return vec4<f32>(
          project_mercator_(position_world.xy) - project.commonOrigin.xy,
          project_size_float(position_world.z),
          position_world.w
        );
      }
    }
  }
  if (project.projectionMode == PROJECTION_MODE_IDENTITY ||
      (project.projectionMode == PROJECTION_MODE_WEB_MERCATOR_AUTO_OFFSET &&
       (project.coordinateSystem == COORDINATE_SYSTEM_LNGLAT ||
        project.coordinateSystem == COORDINATE_SYSTEM_CARTESIAN))) {
    position_world = vec4f(position_world.xyz - project.coordinateOrigin, position_world.w);
  }

  return project_offset_(position_world) +
         project_offset_(project.modelMatrix * vec4<f32>(position64Low, 0.0));
}

// Overloaded versions for different input types.
fn project_position_vec4_f32(position: vec4<f32>) -> vec4<f32> {
  return project_position_vec4_f64(position, ZERO_64_LOW);
}

fn project_position_vec3_f64(position: vec3<f32>, position64Low: vec3<f32>) -> vec3<f32> {
  let projected_position = project_position_vec4_f64(vec4<f32>(position, 1.0), position64Low);
  return projected_position.xyz;
}

fn project_position_vec3_f32(position: vec3<f32>) -> vec3<f32> {
  let projected_position = project_position_vec4_f64(vec4<f32>(position, 1.0), ZERO_64_LOW);
  return projected_position.xyz;
}

fn project_position_vec2_f32(position: vec2<f32>) -> vec2<f32> {
  let projected_position = project_position_vec4_f64(vec4<f32>(position, 0.0, 1.0), ZERO_64_LOW);
  return projected_position.xy;
}

// Transforms a common space position to clip space.
fn project_common_position_to_clipspace_with_projection(position: vec4<f32>, viewProjectionMatrix: mat4x4<f32>, center: vec4<f32>) -> vec4<f32> {
  var clipPosition = viewProjectionMatrix * position + center;
  // deck.gl projection matrices use WebGL's [-w, w] depth range; WebGPU clips z to [0, w].
  clipPosition.z = (clipPosition.z + clipPosition.w) * 0.5;
  return clipPosition;
}

// Uses the project viewProjectionMatrix and center.
fn project_common_position_to_clipspace(position: vec4<f32>) -> vec4<f32> {
  return project_common_position_to_clipspace_with_projection(position, project.viewProjectionMatrix, project.center);
}

// Returns a clip space offset corresponding to a given number of screen pixels.
fn project_pixel_size_to_clipspace(pixels: vec2<f32>) -> vec2<f32> {
  let offset = pixels / project.viewportSize * project.devicePixelRatio * 2.0;
  return offset * project.focalDistance;
}

fn project_meter_size_to_pixel(meters: f32) -> f32 {
  return project_size_float(meters) * project.scale;
}

fn project_unit_size_to_pixel(size: f32, unit: i32) -> f32 {
  if (unit == UNIT_METERS) {
    return project_meter_size_to_pixel(size);
  } else if (unit == UNIT_COMMON) {
    return size * project.scale;
  }
  // UNIT_PIXELS: no scaling applied.
  return size;
}

fn project_pixel_size_float(pixels: f32) -> f32 {
  return pixels / project.scale;
}

fn project_pixel_size_vec2(pixels: vec2<f32>) -> vec2<f32> {
  return pixels / project.scale;
}
`,Xp=["default","lnglat","meter-offsets","lnglat-offsets","cartesian"],Zp=Xp.map(n=>`const int COORDINATE_SYSTEM_${n.toUpperCase().replaceAll("-","_")} = ${cs(n)};`).join(""),Kp=Object.keys(he).map(n=>`const int PROJECTION_MODE_${n} = ${he[n]};`).join(""),Jp=Object.keys(un).map(n=>`const int UNIT_${n.toUpperCase()} = ${un[n]};`).join(""),em=`${Zp}
${Kp}
${Jp}
layout(std140) uniform projectUniforms {
bool wrapLongitude;
int coordinateSystem;
vec3 commonUnitsPerMeter;
int projectionMode;
float scale;
vec3 commonUnitsPerWorldUnit;
vec3 commonUnitsPerWorldUnit2;
vec4 center;
mat4 modelMatrix;
mat4 viewProjectionMatrix;
vec2 viewportSize;
float devicePixelRatio;
float focalDistance;
vec3 cameraPosition;
vec3 coordinateOrigin;
vec3 commonOrigin;
bool pseudoMeters;
} project;
const float TILE_SIZE = 512.0;
const float PI = 3.1415926536;
const float WORLD_SCALE = TILE_SIZE / (PI * 2.0);
const vec3 ZERO_64_LOW = vec3(0.0);
const float EARTH_RADIUS = 6370972.0;
const float GLOBE_RADIUS = 256.0;
float project_size_at_latitude(float lat) {
float y = clamp(lat, -89.9, 89.9);
return 1.0 / cos(radians(y));
}
float project_size() {
if (project.projectionMode == PROJECTION_MODE_WEB_MERCATOR &&
project.coordinateSystem == COORDINATE_SYSTEM_LNGLAT &&
project.pseudoMeters == false) {
if (geometry.position.w == 0.0) {
return project_size_at_latitude(geometry.worldPosition.y);
}
float y = geometry.position.y / TILE_SIZE * 2.0 - 1.0;
float y2 = y * y;
float y4 = y2 * y2;
float y6 = y4 * y2;
return 1.0 + 4.9348 * y2 + 4.0587 * y4 + 1.5642 * y6;
}
return 1.0;
}
float project_size_at_latitude(float meters, float lat) {
return meters * project.commonUnitsPerMeter.z * project_size_at_latitude(lat);
}
float project_size(float meters) {
return meters * project.commonUnitsPerMeter.z * project_size();
}
vec2 project_size(vec2 meters) {
return meters * project.commonUnitsPerMeter.xy * project_size();
}
vec3 project_size(vec3 meters) {
return meters * project.commonUnitsPerMeter * project_size();
}
vec4 project_size(vec4 meters) {
return vec4(meters.xyz * project.commonUnitsPerMeter, meters.w);
}
mat3 project_get_orientation_matrix(vec3 up) {
vec3 uz = normalize(up);
vec3 ux = abs(uz.z) == 1.0 ? vec3(1.0, 0.0, 0.0) : normalize(vec3(uz.y, -uz.x, 0));
vec3 uy = cross(uz, ux);
return mat3(ux, uy, uz);
}
bool project_needs_rotation(vec3 commonPosition, out mat3 transform) {
if (project.projectionMode == PROJECTION_MODE_GLOBE) {
transform = project_get_orientation_matrix(commonPosition);
return true;
}
return false;
}
vec3 project_normal(vec3 vector) {
vec4 normal_modelspace = project.modelMatrix * vec4(vector, 0.0);
vec3 n = normalize(normal_modelspace.xyz * project.commonUnitsPerMeter);
mat3 rotation;
if (project_needs_rotation(geometry.position.xyz, rotation)) {
n = rotation * n;
}
return n;
}
vec4 project_offset_(vec4 offset) {
float dy = offset.y;
vec3 commonUnitsPerWorldUnit = project.commonUnitsPerWorldUnit + project.commonUnitsPerWorldUnit2 * dy;
return vec4(offset.xyz * commonUnitsPerWorldUnit, offset.w);
}
vec2 project_mercator_(vec2 lnglat) {
float x = lnglat.x;
if (project.wrapLongitude) {
x = mod(x + 180., 360.0) - 180.;
}
float y = clamp(lnglat.y, -89.9, 89.9);
return vec2(
radians(x) + PI,
PI + log(tan_fp32(PI * 0.25 + radians(y) * 0.5))
) * WORLD_SCALE;
}
vec3 project_globe_(vec3 lnglatz) {
float lambda = radians(lnglatz.x);
float phi = radians(lnglatz.y);
float cosPhi = cos(phi);
float D = (lnglatz.z / EARTH_RADIUS + 1.0) * GLOBE_RADIUS;
return vec3(
sin(lambda) * cosPhi,
-cos(lambda) * cosPhi,
sin(phi)
) * D;
}
vec4 project_position(vec4 position, vec3 position64Low) {
vec4 position_world = project.modelMatrix * position;
if (project.projectionMode == PROJECTION_MODE_WEB_MERCATOR) {
if (project.coordinateSystem == COORDINATE_SYSTEM_LNGLAT) {
return vec4(
project_mercator_(position_world.xy),
project_size_at_latitude(position_world.z, position_world.y),
position_world.w
);
}
if (project.coordinateSystem == COORDINATE_SYSTEM_CARTESIAN) {
position_world.xyz += project.coordinateOrigin;
}
}
if (project.projectionMode == PROJECTION_MODE_GLOBE) {
if (project.coordinateSystem == COORDINATE_SYSTEM_LNGLAT) {
return vec4(
project_globe_(position_world.xyz),
position_world.w
);
}
if (project.coordinateSystem == COORDINATE_SYSTEM_METER_OFFSETS) {
mat3 enuMatrix = project_get_orientation_matrix(project.commonOrigin);
float metersToCommon = GLOBE_RADIUS / EARTH_RADIUS;
vec3 offsetCommon = (enuMatrix * vec3(-position_world.xy, position_world.z)) * metersToCommon;
return vec4(project.commonOrigin + offsetCommon, position_world.w);
}
}
if (project.projectionMode == PROJECTION_MODE_WEB_MERCATOR_AUTO_OFFSET) {
if (project.coordinateSystem == COORDINATE_SYSTEM_LNGLAT) {
if (abs(position_world.y - project.coordinateOrigin.y) > 0.25) {
return vec4(
project_mercator_(position_world.xy) - project.commonOrigin.xy,
project_size(position_world.z),
position_world.w
);
}
}
}
if (project.projectionMode == PROJECTION_MODE_IDENTITY ||
(project.projectionMode == PROJECTION_MODE_WEB_MERCATOR_AUTO_OFFSET &&
(project.coordinateSystem == COORDINATE_SYSTEM_LNGLAT ||
project.coordinateSystem == COORDINATE_SYSTEM_CARTESIAN))) {
position_world.xyz -= project.coordinateOrigin;
}
return project_offset_(position_world) + project_offset_(project.modelMatrix * vec4(position64Low, 0.0));
}
vec4 project_position(vec4 position) {
return project_position(position, ZERO_64_LOW);
}
vec3 project_position(vec3 position, vec3 position64Low) {
vec4 projected_position = project_position(vec4(position, 1.0), position64Low);
return projected_position.xyz;
}
vec3 project_position(vec3 position) {
vec4 projected_position = project_position(vec4(position, 1.0), ZERO_64_LOW);
return projected_position.xyz;
}
vec2 project_position(vec2 position) {
vec4 projected_position = project_position(vec4(position, 0.0, 1.0), ZERO_64_LOW);
return projected_position.xy;
}
vec4 project_common_position_to_clipspace(vec4 position, mat4 viewProjectionMatrix, vec4 center) {
return viewProjectionMatrix * position + center;
}
vec4 project_common_position_to_clipspace(vec4 position) {
return project_common_position_to_clipspace(position, project.viewProjectionMatrix, project.center);
}
vec2 project_pixel_size_to_clipspace(vec2 pixels) {
vec2 offset = pixels / project.viewportSize * project.devicePixelRatio * 2.0;
return offset * project.focalDistance;
}
float project_size_to_pixel(float meters) {
return project_size(meters) * project.scale;
}
vec2 project_size_to_pixel(vec2 meters) {
return project_size(meters) * project.scale;
}
float project_size_to_pixel(float size, int unit) {
if (unit == UNIT_METERS) return project_size_to_pixel(size);
if (unit == UNIT_COMMON) return size * project.scale;
return size;
}
float project_pixel_size(float pixels) {
return pixels / project.scale;
}
vec2 project_pixel_size(vec2 pixels) {
return pixels / project.scale;
}
`,tm={};function nm(n=tm){return"viewport"in n?zp(n):{}}const rm={name:"project",dependencies:[op,Dp],source:Qp,vs:em,getUniforms:nm,uniformTypes:{wrapLongitude:"f32",coordinateSystem:"i32",commonUnitsPerMeter:"vec3<f32>",projectionMode:"i32",scale:"f32",commonUnitsPerWorldUnit:"vec3<f32>",commonUnitsPerWorldUnit2:"vec3<f32>",center:"vec4<f32>",modelMatrix:"mat4x4<f32>",viewProjectionMatrix:"mat4x4<f32>",viewportSize:"vec2<f32>",devicePixelRatio:"f32",focalDistance:"f32",cameraPosition:"vec3<f32>",coordinateOrigin:"vec3<f32>",commonOrigin:"vec3<f32>",pseudoMeters:"f32"}},im=`// Define a structure to hold both the clip-space position and the common position.
struct ProjectResult {
  clipPosition: vec4<f32>,
  commonPosition: vec4<f32>,
};

// This function mimics the GLSL version with the 'out' parameter by returning both values.
fn project_position_to_clipspace_and_commonspace(
    position: vec3<f32>,
    position64Low: vec3<f32>,
    offset: vec3<f32>
) -> ProjectResult {
  // Compute the projected position.
  let projectedPosition: vec3<f32> = project_position_vec3_f64(position, position64Low);

  // Start with the provided offset.
  var finalOffset: vec3<f32> = offset;

  // Get whether a rotation is needed and the rotation matrix.
  let rotationResult = project_needs_rotation(projectedPosition);

  // If rotation is needed, update the offset.
  if (rotationResult.needsRotation) {
    finalOffset = rotationResult.transform * offset;
  }

  // Compute the common position.
  let commonPosition: vec4<f32> = vec4<f32>(projectedPosition + finalOffset, 1.0);

  // Convert to clip-space.
  let clipPosition: vec4<f32> = project_common_position_to_clipspace(commonPosition);

  return ProjectResult(clipPosition, commonPosition);
}

// A convenience overload that returns only the clip-space position.
fn project_position_to_clipspace(
    position: vec3<f32>,
    position64Low: vec3<f32>,
    offset: vec3<f32>
) -> vec4<f32> {
  return project_position_to_clipspace_and_commonspace(position, position64Low, offset).clipPosition;
}
`,sm=`vec4 project_position_to_clipspace(
  vec3 position, vec3 position64Low, vec3 offset, out vec4 commonPosition
) {
  vec3 projectedPosition = project_position(position, position64Low);
  mat3 rotation;
  if (project_needs_rotation(projectedPosition, rotation)) {
    // offset is specified as ENU
    // when in globe projection, rotate offset so that the ground alighs with the surface of the globe
    offset = rotation * offset;
  }
  commonPosition = vec4(projectedPosition + offset, 1.0);
  return project_common_position_to_clipspace(commonPosition);
}

vec4 project_position_to_clipspace(
  vec3 position, vec3 position64Low, vec3 offset
) {
  vec4 commonPosition;
  return project_position_to_clipspace(position, position64Low, offset, commonPosition);
}
`,Vv={name:"project32",dependencies:[rm],source:im,vs:sm},Tn=10,Ln=16777215;function om(n,e){n.length===Tn?te.warn(`pickMultipleObjects can only exclude ${Tn} previously picked objects for layers without picking buffers`)():n.push(e)}const am=`  float disabledPickingIndexCount;
  vec4 disabledPickingIndices0;
  vec4 disabledPickingIndices1;
  vec4 disabledPickingIndices2;
`;function xo(n){return n.replace(`  vec4 highlightColor;
} picking;`,`  vec4 highlightColor;
${am}} picking;`)}function Sr(n,e){return[n[e]||0,n[e+1]||0,n[e+2]||0,n[e+3]||0]}const cm=`vec3 picking_getPickingColorFromIndex(float objectIndex) {
  if (objectIndex < 0.0 || objectIndex >= ${Ln}.0) {
    return vec3(0.0);
  }

  for (int i = 0; i < ${Tn}; i++) {
    if (float(i) >= picking.disabledPickingIndexCount) {
      break;
    }
    vec4 disabledIndices = i < 4
      ? picking.disabledPickingIndices0
      : (i < 8 ? picking.disabledPickingIndices1 : picking.disabledPickingIndices2);
    float disabledIndex = disabledIndices[i - (i / 4) * 4];
    if (disabledIndex == objectIndex) {
      return vec3(0.0);
    }
  }

  float encodedIndex = objectIndex + 1.0;
  return vec3(
    mod(encodedIndex, 256.0),
    mod(floor(encodedIndex / 256.0), 256.0),
    mod(floor(encodedIndex / 65536.0), 256.0)
  );
}

vec3 picking_getPickingColorFromIndex(uint objectIndex) {
  return picking_getPickingColorFromIndex(float(objectIndex));
}

vec3 picking_getPickingColorFromInstanceID() {
  return picking_getPickingColorFromIndex(float(gl_InstanceID));
}

void picking_setPickingColorFromInstanceID() {
  picking_setPickingColor(picking_getPickingColorFromInstanceID());
}
`,um=`struct pickingUniforms {
  isActive: f32,
  isAttribute: f32,
  isHighlightActive: f32,
  useByteColors: f32,
  highlightedObjectColor: vec3<f32>,
  highlightColor: vec4<f32>,
  disabledPickingIndexCount: f32,
  disabledPickingIndices0: vec4<f32>,
  disabledPickingIndices1: vec4<f32>,
  disabledPickingIndices2: vec4<f32>,
};

@group(0) @binding(auto) var<uniform> picking: pickingUniforms;

fn picking_normalizeColor(color: vec3<f32>) -> vec3<f32> {
  return select(color, color / 255.0, picking.useByteColors > 0.5);
}

fn picking_normalizeColor4(color: vec4<f32>) -> vec4<f32> {
  return select(color, color / 255.0, picking.useByteColors > 0.5);
}

fn picking_isColorZero(color: vec3<f32>) -> bool {
  return dot(color, vec3<f32>(1.0)) < 0.00001;
}

fn picking_isColorValid(color: vec3<f32>) -> bool {
  return dot(color, vec3<f32>(1.0)) > 0.00001;
}

fn picking_getPickingColorFromIndex(objectIndex: u32) -> vec3<f32> {
  if (objectIndex >= ${Ln}u) {
    return vec3<f32>(0.0);
  }

  for (var i = 0; i < ${Tn}; i = i + 1) {
    if (f32(i) >= picking.disabledPickingIndexCount) {
      break;
    }
    let disabledIndices = select(
      picking.disabledPickingIndices2,
      select(picking.disabledPickingIndices1, picking.disabledPickingIndices0, i < 4),
      i < 8
    );
    let disabledIndex = disabledIndices[i % 4];
    if (disabledIndex == f32(objectIndex)) {
      return vec3<f32>(0.0);
    }
  }

  let encodedIndex = objectIndex + 1u;
  return vec3<f32>(
    f32(encodedIndex % 256u),
    f32((encodedIndex / 256u) % 256u),
    f32((encodedIndex / 65536u) % 256u)
  ) / 255.0;
}
`,Hv={...We,vs:`${xo(We.vs)}
${cm}`,fs:xo(We.fs),source:um,uniformTypes:{...We.uniformTypes,disabledPickingIndexCount:"f32",disabledPickingIndices0:"vec4<f32>",disabledPickingIndices1:"vec4<f32>",disabledPickingIndices2:"vec4<f32>"},defaultUniforms:{...We.defaultUniforms,useByteColors:!0,disabledPickingIndexCount:0,disabledPickingIndices0:[0,0,0,0],disabledPickingIndices1:[0,0,0,0],disabledPickingIndices2:[0,0,0,0]},getUniforms(n,e){const t=We.getUniforms(n,e),r=n.disabledPickingIndices||[];return t.disabledPickingIndexCount=r.length,t.disabledPickingIndices0=Sr(r,0),t.disabledPickingIndices1=Sr(r,4),t.disabledPickingIndices2=Sr(r,8),t},inject:{"vs:DECKGL_FILTER_GL_POSITION":`
    // for picking depth values
    picking_setPickingAttribute(position.z / position.w);
  `,"vs:DECKGL_FILTER_COLOR":`
  picking_setPickingColor(geometry.pickingColor);
  `,"fs:DECKGL_FILTER_COLOR":{order:99,injection:`
  // use highlight color if this fragment belongs to the selected object.
  color = picking_filterHighlightColor(color);

  // use picking color if rendering to picking FBO.
  color = picking_filterPickingColor(color);
    `}}},So=[0,0,0];function Er(n,e,t=!1){const r=e.projectPosition(n);if(t&&e instanceof gu){const[i,s,o=0]=n,a=e.getDistanceScales([i,s]);r[2]=o*a.unitsPerMeter[2]}return r}function lm(n){const{viewport:e,modelMatrix:t,coordinateOrigin:r}=n;let{coordinateSystem:i,fromCoordinateSystem:s,fromCoordinateOrigin:o}=n;return i==="default"&&(i=e.isGeospatial?"lnglat":"cartesian"),s===void 0?s=i:s==="default"&&(s=e.isGeospatial?"lnglat":"cartesian"),o===void 0&&(o=r),{viewport:e,coordinateSystem:i,coordinateOrigin:r,modelMatrix:t,fromCoordinateSystem:s,fromCoordinateOrigin:o}}function us(n,{viewport:e,modelMatrix:t,coordinateSystem:r,coordinateOrigin:i,offsetMode:s}){let[o,a,c=0]=n;switch(t&&([o,a,c]=$i([],[o,a,c,1],t)),r){case"default":return us(n,{viewport:e,modelMatrix:t,coordinateSystem:e.isGeospatial?"lnglat":"cartesian",coordinateOrigin:i,offsetMode:s});case"lnglat":return Er([o,a,c],e,s);case"lnglat-offsets":return Er([o+i[0],a+i[1],c+(i[2]||0)],e,s);case"meter-offsets":return Er(du(i,[o,a,c]),e,s);case"cartesian":return e.isGeospatial?[o+i[0],a+i[1],c+i[2]]:e.projectPosition([o,a,c]);default:throw new Error(`Invalid coordinateSystem: ${r}`)}}function fm(n,e){const{viewport:t,coordinateSystem:r,coordinateOrigin:i,modelMatrix:s,fromCoordinateSystem:o,fromCoordinateOrigin:a}=lm(e),{autoOffset:c=!0}=e,{geospatialOrigin:u=So,shaderCoordinateOrigin:f=So,offsetMode:d=!1}=c?xc(t,r,i):{},h=us(n,{viewport:t,modelMatrix:s,coordinateSystem:o,coordinateOrigin:a,offsetMode:d});if(d){const g=t.projectPosition(u||f);hu(h,h,g)}return h}const Ar={};function Dt(n="id"){Ar[n]=Ar[n]||1;const e=Ar[n]++;return`${n}-${e}`}class dm{constructor(e){l(this,"id");l(this,"topology");l(this,"vertexCount");l(this,"indices");l(this,"attributes");l(this,"bufferLayout");l(this,"userData",{});const{attributes:t={},indices:r=null,vertexCount:i=null}=e;this.id=e.id||Dt("geometry"),this.topology=e.topology,r&&(this.indices=ArrayBuffer.isView(r)?{value:r,size:1}:r),this.attributes={};for(const[s,o]of Object.entries(t)){const a=ArrayBuffer.isView(o)?{value:o}:o;if(!ArrayBuffer.isView(a.value))throw new Error(`${this._print(s)}: must be typed array or object with value as typed array`);if((s==="POSITION"||s==="positions")&&!a.size&&(a.size=3),s==="indices"){if(this.indices)throw new Error("Multiple indices detected");this.indices=a}else{const c=Bt(s),u=Object.keys(this.attributes).find(f=>Bt(f)===c);u&&delete this.attributes[u],this.attributes[s]=a}}this.indices&&this.indices.isIndexed!==void 0&&(this.indices=Object.assign({},this.indices),delete this.indices.isIndexed),this.vertexCount=i||this._calculateVertexCount(this.attributes,this.indices),this.bufferLayout=e.bufferLayout||hm(this.attributes)}getVertexCount(){return this.vertexCount}getAttributes(){return this.indices?{indices:this.indices,...this.attributes}:this.attributes}_print(e){return`Geometry ${this.id} attribute ${e}`}_setAttributes(e,t){return this}_calculateVertexCount(e,t){if(t)return t.value.length;let r=1/0;for(const i of Object.values(e)){if(!i)continue;const{value:s,size:o,constant:a}=i;!a&&s&&o!==void 0&&o>=1&&(r=Math.min(r,s.length/o))}return r}}function Bt(n){switch(n){case"POSITION":return"positions";case"NORMAL":return"normals";case"TEXCOORD_0":return"texCoords";case"TEXCOORD_1":return"texCoords1";case"COLOR_0":return"colors";default:return n}}function hm(n){const e=[];for(const[t,r]of Object.entries(n)){if(!r)continue;const{value:i,size:s,normalized:o}=r;if(s===void 0)throw new Error(`Attribute ${t} is missing a size`);e.push({name:Bt(t),format:F.getVertexFormatFromAttribute(i,s,o)})}return e}function gm(n,e={}){const t=e.bufferName||"geometry";if(pm(n,t))return n;const r=e.minAttributeAlignment||4,i=mm(n,e.attributes),s=[];let o=0,a=1/0;for(const[f,d]of i){if(!d)continue;if(d.constant)throw new Error(`Attribute ${f} is constant`);const{value:h,size:g,normalized:p}=d;if(!ArrayBuffer.isView(h))throw new Error(`Attribute ${f} is missing typed array data`);if(g===void 0)throw new Error(`Attribute ${f} is missing a size`);const m=F.getVertexFormatFromAttribute(h,g,p),b=F.getVertexFormatInfo(m);o=Eo(o,r),s.push({sourceName:f,attributeName:Bt(f),value:h,size:g,format:m,byteOffset:o,byteLength:b.byteLength}),o+=b.byteLength;const w=h.length/g;if(!Number.isInteger(w))throw new Error(`Attribute ${f} length is not divisible by size`);a=Math.min(a,w)}if(s.length===0||!Number.isFinite(a))throw new Error(`Geometry ${n.id} has no interleavable attributes`);const c=Eo(o,r),u=new ArrayBuffer(a*c);for(const f of s)bm(u,a,c,f);return new dm({id:n.id,topology:n.topology||"triangle-list",vertexCount:n.vertexCount,indices:n.indices,attributes:{[t]:{value:new Uint8Array(u),size:c,byteStride:c}},bufferLayout:[{name:t,stepMode:"vertex",byteStride:c,attributes:s.map(f=>({attribute:f.attributeName,format:f.format,byteOffset:f.byteOffset}))}]})}function pm(n,e){var r;if(n.bufferLayout.length!==1)return!1;const t=n.bufferLayout[0];return t.name===e&&!!((r=t.attributes)!=null&&r.length)&&!!n.attributes[e]}function mm(n,e){return e?e.map(t=>[t,n.attributes[t]]):Object.entries(n.attributes)}function bm(n,e,t,r){const i=r.value.constructor,s=i.BYTES_PER_ELEMENT;if(r.byteOffset%s!==0||t%s!==0)throw new Error(`Attribute ${r.sourceName} is not aligned to its component type`);const o=new i(n),a=r.value,c=r.byteOffset/s,u=t/s;for(let f=0;f<e;f++){const d=f*r.size,h=f*u+c;for(let g=0;g<r.size;g++)o[h+g]=a[d+g]}}function Eo(n,e){return Math.ceil(n/e)*e}class Ao{constructor(e){l(this,"id");l(this,"userData",{});l(this,"topology");l(this,"bufferLayout",[]);l(this,"vertexCount");l(this,"indices");l(this,"attributes");if(this.id=e.id||Dt("geometry"),this.topology=e.topology,this.indices=e.indices||null,this.attributes=e.attributes,this.vertexCount=e.vertexCount,this.bufferLayout=e.bufferLayout||[],this.indices&&!(this.indices.usage&A.INDEX))throw new Error("Index buffer must have INDEX usage")}destroy(){var e;(e=this.indices)==null||e.destroy();for(const t of Object.values(this.attributes))t.destroy()}getVertexCount(){return this.vertexCount}getAttributes(){return this.attributes}getIndexes(){return this.indices||null}_calculateVertexCount(e){return e.byteLength/12}}function _m(n,e){if(e instanceof Ao)return e;const t=gm(e),r=ym(n,t),{attributes:i,bufferLayout:s}=wm(n,t);return new Ao({topology:t.topology||"triangle-list",bufferLayout:s,vertexCount:t.vertexCount,indices:r,attributes:i})}function ym(n,e){if(!e.indices)return;const t=e.indices.value;return n.createBuffer({usage:A.INDEX,data:t})}function wm(n,e){var r;const t={};for(const[i,s]of Object.entries(e.attributes)){const o=((r=e.bufferLayout.find(a=>a.name===i))==null?void 0:r.name)||Bt(i);s&&(t[o]=n.createBuffer({data:s.value,id:`${i}-buffer`}))}return{attributes:t,bufferLayout:e.bufferLayout,vertexCount:e.vertexCount}}function vm(n,e){var i;const t={},r="Values";if(n.attributes.length===0&&!((i=n.varyings)!=null&&i.length))return{"No attributes or varyings":{[r]:"N/A"}};for(const s of n.attributes)if(s){const o=`${s.location} ${s.name}: ${s.type}`;t[`in ${o}`]={[r]:s.stepMode||"vertex"}}for(const s of n.varyings||[]){const o=`${s.location} ${s.name}`;t[`out ${o}`]={[r]:JSON.stringify(s)}}return t}const Qt="__debugFramebufferState",Tr=8;function xm(n,e,t){if(n.device.type!=="webgl")return;const r=Am(n.device);if(!r.flushing){if(Lm(n)){Sm(n,t,r);return}e&&Tm(e)&&e.handle!==null&&(r.queuedFramebuffers.includes(e)||r.queuedFramebuffers.push(e))}}function Sm(n,e,t){if(t.queuedFramebuffers.length===0)return;const r=n.device,{gl:i}=r,s=i.getParameter(36010),o=i.getParameter(36006),[a,c]=n.device.getDefaultCanvasContext().getDrawingBufferSize();let u=To(e.top,Tr);const f=To(e.left,Tr);t.flushing=!0;try{for(const d of t.queuedFramebuffers){const[h,g,p,m,b]=Em({framebuffer:d,targetWidth:a,targetHeight:c,topPx:u,leftPx:f,minimap:e.minimap});i.bindFramebuffer(36008,d.handle),i.bindFramebuffer(36009,null),i.blitFramebuffer(0,0,d.width,d.height,h,g,p,m,16384,9728),u+=b+Tr}}finally{i.bindFramebuffer(36008,s),i.bindFramebuffer(36009,o),t.flushing=!1}}function Em(n){const{framebuffer:e,targetWidth:t,targetHeight:r,topPx:i,leftPx:s}=n,o=Math.max(Math.floor(t/4),1),a=Math.max(Math.floor(r/4),1),c=Math.min(o/e.width,a/e.height),u=Math.max(Math.floor(e.width*c),1),f=Math.max(Math.floor(e.height*c),1),d=s,h=Math.max(r-i-f,0),g=d+u,p=h+f;return[d,h,g,p,f]}function Am(n){var e;return(e=n.userData)[Qt]||(e[Qt]={flushing:!1,queuedFramebuffers:[]}),n.userData[Qt]}function Tm(n){return"colorAttachments"in n}function Lm(n){const e=n.props.framebuffer;return!e||e.handle===null}function To(n,e){if(!n)return e;const t=Number.parseInt(n,10);return Number.isFinite(t)?t:e}function pt(n,e,t){if(n===e)return!0;if(!t||!n||!e)return!1;if(Array.isArray(n)){if(!Array.isArray(e)||n.length!==e.length)return!1;for(let r=0;r<n.length;r++)if(!pt(n[r],e[r],t-1))return!1;return!0}if(Array.isArray(e))return!1;if(typeof n=="object"&&typeof e=="object"){const r=Object.keys(n),i=Object.keys(e);if(r.length!==i.length)return!1;for(const s of r)if(!e.hasOwnProperty(s)||!pt(n[s],e[s],t-1))return!1;return!0}return!1}class Lr{constructor(e){l(this,"bufferLayouts");this.bufferLayouts=e}getBufferLayout(e){return this.bufferLayouts.find(t=>t.name===e)||null}getAttributeNamesForBuffer(e){return pi(e)}mergeBufferLayouts(e,t){const r=[...e];for(const i of t){const s=r.findIndex(o=>o.name===i.name);s<0?r.push(i):r[s]=i}return r}}function Pm(n,e){const t=fh(n),r=e.slice();return r.sort((i,s)=>{const o=io(pi(i).map(c=>t[c])),a=io(pi(s).map(c=>t[c]));return o-a}),r}function Pn(n,e){if(!n||!e.some(r=>{var i;return(i=r.bindingLayout)==null?void 0:i.length}))return n;const t={...n,bindings:n.bindings.map(r=>({...r}))};"attributes"in(n||{})&&(t.attributes=(n==null?void 0:n.attributes)||[]);for(const r of e)for(const i of r.bindingLayout||[])for(const s of Im(i.name)){const o=t.bindings.find(a=>a.name===s);(o==null?void 0:o.group)===0&&(o.group=i.group),o&&i.visibility!==void 0&&(o.visibility=i.visibility)}return t}function Bm(n,e,t=[]){return n?e?{...n,attributes:n.attributes.length?Mm(n.attributes,e.attributes.filter(r=>t.includes(r.name))):e.attributes,bindings:Rm(n.bindings,e.bindings)}:n:e}function ls(n){return!!(n.uniformTypes&&!Om(n.uniformTypes))}function Cm(n){const e=[];for(const t of n){const r=es(t),i=new Set([t.vs,t.fs].flatMap(o=>o?ts(o).filter(a=>a.isStd140).map(a=>a.blockName):[])),s=i.has(r)?r:i.size===1?i.values().next().value:void 0;ls(t)&&s&&e.push({name:s,uniformTypes:t.uniformTypes})}return e}function Sc(n,e){const t=[],r=new Set;for(const i of[...n||[],...e||[]])r.has(i.name)||(r.add(i.name),t.push(i));return t}function Im(n){const e=new Set([n,`${n}Uniforms`]);return n.endsWith("Uniforms")||e.add(`${n}Sampler`),[...e]}function Om(n){for(const e in n)return!1;return!0}function Rm(n,e){const t=n.map(s=>({...s})),r=new Set(n.map(s=>s.name)),i=new Set(n.map(s=>`${s.group}:${s.location}`));for(const s of e){const o=`${s.group}:${s.location}`;!r.has(s.name)&&!i.has(o)&&t.push({...s})}return t}function Mm(n,e){const t=n.map(s=>({...s})),r=new Map(n.map(s=>[s.name,s])),i=new Map(n.map(s=>[s.location,s]));for(const s of e){const o=r.get(s.name);if(o){if(o.type!==s.type||o.location!==s.location)throw new Error(`Shader attribute "${s.name}" conflicts with its inferred type or location`);continue}const a=i.get(s.location);if(a)throw new Error(`Shader attributes "${a.name}" and "${s.name}" both use location ${s.location}`);t.push({...s})}return t}function Dm(n){return Pa(n)||typeof n=="number"||typeof n=="boolean"}function $m(n,e={}){const t={bindings:{},uniforms:{}};return Object.keys(n).forEach(r=>{const i=n[r];Object.prototype.hasOwnProperty.call(e,r)||Dm(i)?t.uniforms[r]=i:t.bindings[r]=i}),t}class Ec{constructor(e,t){l(this,"options",{disableWarnings:!1});l(this,"modules");l(this,"moduleUniforms");l(this,"moduleBindings");l(this,"directBindings",{});Object.assign(this.options,t);const r=pn(Object.values(e).filter(km));for(const i of r)e[i.name]=i;v.log(1,"Creating ShaderInputs with modules",Object.keys(e))(),this.modules=e,this.moduleUniforms={},this.moduleBindings={};for(const[i,s]of Object.entries(e))s&&(this._addModule(s),s.name&&i!==s.name&&!this.options.disableWarnings&&v.warn(`Module name: ${i} vs ${s.name}`)())}destroy(){}setProps(e){var t;e.bindings&&Object.assign(this.directBindings,e.bindings);for(const r of Object.keys(e)){if(r==="bindings")continue;const i=r,s=e[i]||{},o=this.modules[i];if(!o)this.options.disableWarnings||v.warn(`Module ${r} not found`)();else{const a=this.moduleUniforms[i],c=this.moduleBindings[i],u=((t=o.getUniforms)==null?void 0:t.call(o,s,a))||s,{uniforms:f,bindings:d}=$m(u,o.uniformTypes);this.moduleUniforms[i]=Lo(a,f,o.uniformTypes),this.moduleBindings[i]={...c,...d}}}}getModules(){return Object.values(this.modules)}addModules(e){const t=pn(e);for(const r of t){const i=r.name;this.modules[i]||(this.modules[i]=r,this._addModule(r))}}getUniformValues(){return this.moduleUniforms}getBindingValues(){const e={};for(const t of Object.values(this.moduleBindings))Object.assign(e,t);return Object.assign(e,this.directBindings),e}getModuleBindingValues(e){const t=this.moduleBindings[e];return t?{...t}:{}}getDebugTable(){var t;const e={};for(const[r,i]of Object.entries(this.moduleUniforms))for(const[s,o]of Object.entries(i))e[`${r}.${s}`]={type:(t=this.modules[r].uniformTypes)==null?void 0:t[s],value:String(o)};return e}_addModule(e){const t=e.name;this.moduleUniforms[t]=Lo({},e.defaultUniforms||{},e.uniformTypes),this.moduleBindings[t]={}}}function Lo(n={},e={},t={}){const r={...n};for(const[i,s]of Object.entries(e))s!==void 0&&(r[i]=_i(n[i],s,t[i]));return r}function _i(n,e,t){if(!t||typeof t=="string")return mt(e);if(Array.isArray(t)){if(yi(e)||!Array.isArray(e))return mt(e);const o=Array.isArray(n)&&!yi(n)?[...n]:[],a=o.slice();for(let c=0;c<e.length;c++){const u=e[c];u!==void 0&&(a[c]=_i(o[c],u,t[0]))}return a}if(!wi(e))return mt(e);const r=t,i=wi(n)?n:{},s={...i};for(const[o,a]of Object.entries(e))a!==void 0&&(s[o]=_i(i[o],a,r[o]));return s}function mt(n){return ArrayBuffer.isView(n)?Array.prototype.slice.call(n):Array.isArray(n)?yi(n)?n.slice():n.map(t=>t===void 0?void 0:mt(t)):wi(n)?Object.fromEntries(Object.entries(n).map(([e,t])=>[e,t===void 0?void 0:mt(t)])):n}function yi(n){return ArrayBuffer.isView(n)||Array.isArray(n)&&(n.length===0||typeof n[0]=="number")}function wi(n){return!!n&&typeof n=="object"&&!Array.isArray(n)&&!ArrayBuffer.isView(n)}function km(n){return!!(n!=null&&n.dependencies)}const Um=A.DEBUG_DATA_MAX_LENGTH;class X{constructor(e,t){l(this,"device");l(this,"id");l(this,"ready");l(this,"usage");l(this,"props");l(this,"isReady",!0);l(this,"destroyed",!1);l(this,"generation",0);l(this,"updateTimestamp");l(this,"debugData",new ArrayBuffer(0));l(this,"_debugDataEnabled");l(this,"_maxDebugDataByteLength");l(this,"_ownsBuffer");l(this,"_buffer");const{debugData:r=!1,buffer:i,ownsBuffer:s=!0,...o}=t;if(i&&i.device!==e)throw new Error("DynamicBuffer adopted buffers must belong to the supplied device");if(i&&(o.byteLength!==void 0||o.data!==void 0))throw new Error("DynamicBuffer cannot combine an adopted buffer with byteLength or data");const a=t.id||(i==null?void 0:i.id)||Dt("dynamic-buffer"),c={...o,id:a,usage:o.usage??(i==null?void 0:i.usage),indexType:o.indexType??(i==null?void 0:i.indexType)};(c.usage||0)&A.INDEX&&!c.indexType&&(o.data instanceof Uint32Array?c.indexType="uint32":o.data instanceof Uint16Array?c.indexType="uint16":o.data instanceof Uint8Array&&(c.indexType="uint8")),delete c.data,delete c.byteOffset,this.device=e,this.id=a,this.props=c,this.usage=c.usage||0,this._debugDataEnabled=!!r,this._maxDebugDataByteLength=typeof r=="object"&&r.maxByteLength!==void 0?r.maxByteLength:Um,this._ownsBuffer=s,this._buffer=i??this.device.createBuffer({...o,id:a}),this.ready=Promise.resolve(this._buffer),this.updateTimestamp=this._buffer.updateTimestamp,this._resetDebugData(this._buffer.byteLength),o.data&&this._writeDebugData(o.data,o.byteOffset||0)}get buffer(){return this._buffer}get byteLength(){return this._buffer.byteLength}get[Symbol.toStringTag](){return"DynamicBuffer"}toString(){return`DynamicBuffer:"${this.id}":${this.byteLength}B`}toJSON(){return this.toString()}write(e,t=0){this._buffer.write(e,t),this._touch(),this._writeDebugData(e,t)}async mapAndWriteAsync(e,t=0,r=this.byteLength-t){let i=null;await this._buffer.mapAndWriteAsync(async(s,o)=>{await e(s,o),i=new Uint8Array(s.slice(0,r))},t,r),this._touch(),i&&this._writeDebugData(i,t)}async readAsync(e=0,t=this.byteLength-e){const r=await this._buffer.readAsync(e,t);return this._writeDebugData(r,e)&&this._touch(),r}async mapAndReadAsync(e,t=0,r=this.byteLength-t){let i=null;const s=await this._buffer.mapAndReadAsync(async(o,a)=>(i=new Uint8Array(o.slice(0)),await e(o,a)),t,r);return i&&this._writeDebugData(i,t)&&this._touch(),s}resize(e){const{byteLength:t,preserveData:r=!1}=e;if(t===this.byteLength)return!1;const i=Math.min(e.copyByteLength??Math.min(this.byteLength,t),this.byteLength,t),s=this._buffer,o=this.debugData.slice(0),{data:a,byteOffset:c,...u}=this.props,f=this.device.createBuffer({...u,byteLength:t});return r&&i>0&&this._copyBufferContents(s,f,i),this._buffer=f,this._resetDebugData(t),r&&o.byteLength>0&&this._writeDebugData(o,0),this._ownsBuffer&&s.destroy(),this._ownsBuffer=!0,this.generation++,this._touch(),!0}ensureSize(e,t){return e<=this.byteLength?!1:this.resize({byteLength:e,preserveData:t==null?void 0:t.preserveData})}getBinding(e){return(e==null?void 0:e.offset)===void 0&&(e==null?void 0:e.size)===void 0?this._buffer:{buffer:this._buffer,offset:e==null?void 0:e.offset,size:e==null?void 0:e.size}}destroy(){this.destroyed||(this._ownsBuffer&&this._buffer.destroy(),this.destroyed=!0,this.debugData=new ArrayBuffer(0))}_copyBufferContents(e,t,r){const i=this.device.type==="webgpu"?Math.ceil(r/4)*4:r,s=this.device.createCommandEncoder();s.copyBufferToBuffer({sourceBuffer:e,destinationBuffer:t,size:i}),this.device.submit(s.finish())}_touch(){this.updateTimestamp=this.device.incrementTimestamp()}_resetDebugData(e){if(!this._debugDataEnabled){this.debugData=new ArrayBuffer(0);return}this.debugData=new ArrayBuffer(Math.min(e,this._maxDebugDataByteLength))}_writeDebugData(e,t){if(!this._debugDataEnabled||this.debugData.byteLength===0||t>=this.debugData.byteLength)return!1;const r=ArrayBuffer.isView(e)?new Uint8Array(e.buffer,e.byteOffset,e.byteLength):new Uint8Array(e),i=new Uint8Array(this.debugData),s=Math.min(r.byteLength,i.byteLength-t);return i.set(r.subarray(0,s),t),s>0}}function fs(n){return n!==null&&typeof n=="object"&&"buffer"in n}function Yv(n){return n instanceof X?n:fs(n)&&n.buffer instanceof X?n.buffer:null}function Nm(n){return n instanceof X?n.buffer:n}function Fm(n){return{buffer:Nm(n.buffer),offset:n.offset,size:n.size}}function on(n){return n!==null&&typeof n=="object"&&"resolveTextureBinding"in n&&typeof n.resolveTextureBinding=="function"}function Gm(n){return(n==null?void 0:n.type)==="texture"||(n==null?void 0:n.type)==="external-texture"}function zm(n,e,t){const r=Va(n,e,{ignoreWarnings:!0});return Gm(r)?r:n.bindings.length===0&&(t==null?void 0:t.fallbackGroup)!==void 0?{type:"texture",name:e,group:t.fallbackGroup,location:0}:null}const ie=2,Wm=1e4,Pr="render pipeline initialization failed",jm=["stencil8","depth16unorm","depth24plus","depth24plus-stencil8","depth32float","depth32float-stencil8"],xt=class xt{constructor(e,t){l(this,"device");l(this,"id");l(this,"source");l(this,"vs");l(this,"fs");l(this,"pipelineFactory");l(this,"shaderFactory");l(this,"userData",{});l(this,"parameters");l(this,"topology");l(this,"bufferLayout");l(this,"isInstanced");l(this,"instanceCount",0);l(this,"vertexCount");l(this,"indexCount");l(this,"firstVertex");l(this,"firstIndex");l(this,"indexBuffer",null);l(this,"bufferAttributes",{});l(this,"constantAttributes",{});l(this,"bindings",{});l(this,"vertexArray");l(this,"transformFeedback",null);l(this,"pipeline");l(this,"shaderInputs");l(this,"material",null);l(this,"_uniformStore");l(this,"_attributeInfos",{});l(this,"_gpuGeometry",null);l(this,"props");l(this,"_dynamicIndexBufferSource",null);l(this,"_dynamicAttributeBufferSources",{});l(this,"_colorAttachmentFormats");l(this,"_depthStencilAttachmentFormat");l(this,"_pipelineNeedsUpdate","newly created");l(this,"_needsRedraw","initializing");l(this,"_drawBlockedReason",!1);l(this,"_destroyed",!1);l(this,"_lastDrawTimestamp",-1);l(this,"_bindingTable",[]);l(this,"_lastLogTime",0);l(this,"_logOpen",!1);l(this,"_drawCount",0);var h;const r=xt.defaultProps.shaderAssembler;this.props={...xt.defaultProps,...t,shaderAssembler:t.shaderAssembler??(Br(r,e.info.shadingLanguage)?r:Me.getDefaultShaderAssembler(e.info.shadingLanguage))},t=this.props,this.id=t.id||Dt("model"),this.device=e,Object.assign(this.userData,t.userData),this.material=t.material||null;const i=Qm(e),s=ec(this.props.plugins,i.shaderLanguage),o=tc(this.props.modules,s.modules),a=Object.fromEntries(o.map(g=>[g.name,g])),c=t.shaderInputs||new Ec(a,{disableWarnings:this.props.disableWarnings});t.shaderInputs&&s.modules.length>0&&c.addModules(s.modules),this.setShaderInputs(c);const u=Sc(this.props.modules,c.getModules()),f={...s.defines,...this.props.defines};if(this.device.type==="webgl"&&(this.props._uniformBlockLayouts=Cm(u)),this.props.shaderLayout=Pn(this.props.shaderLayout,u)||null,this.device.type==="webgpu"&&this.props.source){const g=this.props.shaderAssembler;At(Br(g,"wgsl"));const{source:p,getUniforms:m,bindingTable:b,shaderLayout:w}=g.assembleWGSLShader({platformInfo:i,...this.props,modules:u,defines:f,pluginInjections:s.injections,pluginVertexInputs:s.vertexInputs,pluginVaryings:s.varyings});this.source=p,this._getModuleUniforms=m,this._bindingTable=b;const _=w??((h=e.getShaderLayout)==null?void 0:h.call(e,this.source)),y=Vm(_,s.vertexInputs),x=Bm(this.props.shaderLayout,y,Object.keys(s.vertexInputs));this.props.shaderLayout=Pn(x||null,u)||null}else{const g=this.props.shaderAssembler;At(Br(g,"glsl"));const{vs:p,fs:m,getUniforms:b}=g.assembleGLSLShaderPair({platformInfo:i,...this.props,modules:u,defines:f,pluginInjections:s.injections,pluginVertexInputs:s.vertexInputs,pluginVaryings:s.varyings});this.vs=p,this.fs=m,this._getModuleUniforms=b,this._bindingTable=[]}this.vertexCount=this.props.vertexCount,this.indexCount=this.props.indexCount,this.firstVertex=this.props.firstVertex,this.firstIndex=this.props.firstIndex,this.instanceCount=this.props.instanceCount,this.topology=this.props.topology,this.bufferLayout=this.props.bufferLayout,this.parameters=this.props.parameters,this._colorAttachmentFormats=this.props.colorAttachmentFormats,this._depthStencilAttachmentFormat=this.props.depthStencilAttachmentFormat,t.geometry&&this.setGeometry(t.geometry),this.pipelineFactory=t.pipelineFactory||xn.getDefaultPipelineFactory(this.device),this.shaderFactory=t.shaderFactory||Sn.getDefaultShaderFactory(this.device),this.pipeline=this._updatePipeline(),this.vertexArray=e.createVertexArray({shaderLayout:this.pipeline.shaderLayout,bufferLayout:this.pipeline.bufferLayout}),this._gpuGeometry&&this._setGeometryAttributes(this._gpuGeometry),"isInstanced"in t&&(this.isInstanced=t.isInstanced),t.instanceCount&&this.setInstanceCount(t.instanceCount),t.vertexCount&&this.setVertexCount(t.vertexCount),t.indexBuffer&&this.setIndexBuffer(t.indexBuffer),t.attributes&&this.setAttributes(t.attributes),t.constantAttributes&&this.setConstantAttributes(t.constantAttributes),t.bindings&&this.setBindings(t.bindings),t.transformFeedback&&(this.transformFeedback=t.transformFeedback)}get[Symbol.toStringTag](){return"Model"}toString(){return`Model(${this.id})`}destroy(){var e;this._destroyed||(this.pipelineFactory.release(this.pipeline),this.shaderFactory.release(this.pipeline.vs),this.pipeline.fs&&this.pipeline.fs!==this.pipeline.vs&&this.shaderFactory.release(this.pipeline.fs),this._uniformStore.destroy(),(e=this._gpuGeometry)==null||e.destroy(),this._destroyed=!0)}needsRedraw(){this._getBindingsUpdateTimestamp()>this._lastDrawTimestamp&&this.setNeedsRedraw("contents of bound textures or buffers updated");const e=this._needsRedraw;return this._needsRedraw=!1,e}setNeedsRedraw(e){this._needsRedraw||(this._needsRedraw=e)}getBindingDebugTable(){return this._bindingTable}predraw(e){var t;this._syncDynamicBuffers(),this.updateShaderInputs(e),(t=this.material)==null||t.updateShaderInputs(e),this.pipeline=this._updatePipeline()}draw(e){var s;if(this._drawBlockedReason&&!this._pipelineNeedsUpdate)return v.info(ie,`>>> DRAWING ABORTED ${this.id}: ${this._drawBlockedReason}`)(),!1;const t=this._areBindingsLoading();if(t)return v.info(ie,`>>> DRAWING ABORTED ${this.id}: ${t} not loaded`)(),!1;this._syncAttachmentFormats(e);try{e.pushDebugGroup(`${this}.predraw(${e})`),this.device.type==="webgpu"?(this.updateShaderInputs(),(s=this.material)==null||s.updateShaderInputs(),this._syncDynamicBuffers(),this.pipeline=this._updatePipeline()):this.predraw(this.device.commandEncoder)}finally{e.popDebugGroup()}let r,i=this.pipeline.isErrored;try{if(e.pushDebugGroup(`${this}.draw(${e})`),this._logDrawCallStart(),this.pipeline=this._updatePipeline(),i=this.pipeline.isErrored,i)v.info(ie,`>>> DRAWING ABORTED ${this.id}: ${Pr}`)(),r=!1;else{const o=this.vertexArray.getDrawValidationError();if(o)v.info(ie,`>>> DRAWING ABORTED ${this.id}: ${o}`)(),this._drawBlockedReason=o,r=!1;else{const a=this._getCurrentShaderLayout(),c=this._getBindings(a),u=this._getBindGroups(a,c),{indexBuffer:f}=this.vertexArray,d=f?this.indexCount??f.byteLength/(f.indexType==="uint32"?4:2):void 0;e.setPipeline(this.pipeline),e.setBindings(u,{_bindGroupCacheKeys:this._getBindGroupCacheKeys()}),e.setVertexArray(this.vertexArray),r=this.isInstanced===!0&&this.instanceCount===0?!0:e.draw({isInstanced:this.isInstanced,vertexCount:this.vertexCount,instanceCount:this.isInstanced?this.instanceCount:void 0,indexCount:d,firstVertex:this.firstVertex,firstIndex:this.firstIndex,transformFeedback:this.transformFeedback||void 0,uniforms:this.props.uniforms,parameters:this.parameters,topology:this.topology})}}}finally{e.popDebugGroup(),this._logDrawCallEnd()}return this._logFramebuffer(e),r?(this._lastDrawTimestamp=this.device.timestamp,this._needsRedraw=!1):i?(this._needsRedraw=Pr,this._drawBlockedReason=Pr):this._drawBlockedReason?this._needsRedraw=this._drawBlockedReason:this._needsRedraw="waiting for resource initialization",r}setGeometry(e){var r;(r=this._gpuGeometry)==null||r.destroy();const t=e&&_m(this.device,e);if(t){this.setTopology(t.topology||"triangle-list");const i=new Lr(this.bufferLayout);this.bufferLayout=i.mergeBufferLayouts(t.bufferLayout,this.bufferLayout),this.vertexArray&&this._setGeometryAttributes(t)}this._gpuGeometry=t}setTopology(e){e!==this.topology&&(this.topology=e,this._setPipelineNeedsUpdate("topology"))}setBufferLayout(e){const t=new Lr(this.bufferLayout),r=this._gpuGeometry?t.mergeBufferLayouts(e,this._gpuGeometry.bufferLayout):e;pt(r,this.bufferLayout,-1)||(this.bufferLayout=r,this._setPipelineNeedsUpdate("bufferLayout"),this.pipeline=this._updatePipeline(),this.vertexArray=this.device.createVertexArray({shaderLayout:this.pipeline.shaderLayout,bufferLayout:this.pipeline.bufferLayout}),this._gpuGeometry&&this._setGeometryAttributes(this._gpuGeometry))}setParameters(e){pt(e,this.parameters,2)||(this.parameters=e,this._setPipelineNeedsUpdate("parameters"))}setInstanceCount(e){this.instanceCount=e,this.isInstanced===void 0&&e>0&&(this.isInstanced=!0),this.setNeedsRedraw("instanceCount")}setVertexCount(e){this.vertexCount=e,this.setNeedsRedraw("vertexCount")}setIndexCount(e){this.indexCount=e,this.setNeedsRedraw("indexCount")}setDrawOffsets({firstVertex:e,firstIndex:t}){this.firstVertex=e,this.firstIndex=t,this.setNeedsRedraw("drawOffsets")}setShaderInputs(e){var t;this.shaderInputs=e,this._uniformStore=new Ka(this.device,this.shaderInputs.modules);for(const[r,i]of Object.entries(this.shaderInputs.modules))if(ls(i)&&!((t=this.material)!=null&&t.ownsModule(r))){const s=this._uniformStore.getManagedUniformBuffer(r);this.bindings[`${r}Uniforms`]=s}this.setNeedsRedraw("shaderInputs")}setMaterial(e){this.material=e,this.setNeedsRedraw("material")}updateShaderInputs(e){this._uniformStore.setUniforms(this.shaderInputs.getUniformValues(),e),this.setBindings(this._getNonMaterialBindings(this.shaderInputs.getBindingValues())),this.setNeedsRedraw("shaderInputs")}setBindings(e){Object.assign(this.bindings,e),this.setNeedsRedraw("bindings")}setTransformFeedback(e){this.transformFeedback=e,this.setNeedsRedraw("transformFeedback")}setIndexBuffer(e){const t=e instanceof X?e.buffer:e;this.indexBuffer=t,this._dynamicIndexBufferSource=e instanceof X?{source:e,generation:e.generation}:null,this.vertexArray.setIndexBuffer(t),this.setNeedsRedraw("indexBuffer")}setAttributes(e,t){this._drawBlockedReason=!1;const r=(t==null?void 0:t.disableWarnings)??this.props.disableWarnings;e.indices&&v.warn(`Model:${this.id} setAttributes() - indexBuffer should be set using setIndexBuffer()`)(),this.bufferLayout=Pm(this.pipeline.shaderLayout,this.bufferLayout);const i=new Lr(this.bufferLayout);for(const[s,o]of Object.entries(e)){const a=o instanceof X?o.buffer:o,c=i.getBufferLayout(s);if(!c){r||v.warn(`Model(${this.id}): Missing layout for buffer "${s}".`)();continue}const u=i.getAttributeNamesForBuffer(c);let f=!1;for(const d of u){const h=this._attributeInfos[d];if(h){const g=this.device.type==="webgpu"?this.vertexArray.getBufferSlot(h.bufferName):h.location;if(g===null){r||v.warn(`Model(${this.id}): Missing vertex array slot for buffer "${h.bufferName}".`)();continue}this.vertexArray.setBuffer(g,a),o instanceof X?this._dynamicAttributeBufferSources[g]={source:o,generation:o.generation}:delete this._dynamicAttributeBufferSources[g],f=!0}}!f&&!r&&v.warn(`Model(${this.id}): Ignoring buffer "${a.id}" for unknown attribute "${s}"`)()}this.setNeedsRedraw("attributes")}setConstantAttributes(e,t){for(const[r,i]of Object.entries(e)){const s=this._attributeInfos[r];s?this.vertexArray.setConstantWebGL(s.location,i):((t==null?void 0:t.disableWarnings)??this.props.disableWarnings)||v.warn(`Model "${this.id}: Ignoring constant supplied for unknown attribute "${r}"`)()}this.setNeedsRedraw("constants")}_areBindingsLoading(){var e;for(const t of Object.values(this.bindings))if(on(t)&&!t.isReady)return t.id;for(const t of Object.values(((e=this.material)==null?void 0:e.bindings)||{}))if(on(t)&&!t.isReady)return t.id;return!1}_getBindings(e=this._getCurrentShaderLayout()){const t={};for(const[r,i]of Object.entries(this.bindings)){const s=Hm(r,i,e);s&&(t[r]=s)}return t}_getBindGroups(e=this._getCurrentShaderLayout(),t=this._getBindings(e)){const r=e.bindings.length?Xi(e,t):{0:t};if(!this.material)return r;for(const[i,s]of Object.entries(this.material.getBindingsByGroup(e))){const o=Number(i);r[o]={...r[o]||{},...s}}return r}_getBindGroupCacheKeys(){var t;const e=(t=this.material)==null?void 0:t.getBindGroupCacheKey(3);return e?{3:e}:{}}_getBindingsUpdateTimestamp(){var t;let e=0;this._dynamicIndexBufferSource&&(e=Math.max(e,this._dynamicIndexBufferSource.source.updateTimestamp));for(const r of Object.values(this._dynamicAttributeBufferSources))e=Math.max(e,r.source.updateTimestamp);for(const r of Object.values(this.bindings))r instanceof yn?e=Math.max(e,r.texture.updateTimestamp):r instanceof A||r instanceof j||r instanceof si||r instanceof X?e=Math.max(e,r.updateTimestamp):on(r)?e=r.isReady?Math.max(e,r.updateTimestamp):1/0:fs(r)&&(e=Math.max(e,(r.buffer instanceof X,r.buffer.updateTimestamp)));return Math.max(e,((t=this.material)==null?void 0:t.getBindingsUpdateTimestamp())||0)}_setGeometryAttributes(e){const t={...e.attributes};for(const[r]of Object.entries(t))!this.pipeline.shaderLayout.attributes.find(i=>i.name===r)&&r!=="positions"&&delete t[r];this.vertexCount=e.vertexCount,this.setIndexBuffer(e.indices||null),this.setAttributes(e.attributes,{disableWarnings:!0}),this.setAttributes(t,{disableWarnings:this.props.disableWarnings}),this.setNeedsRedraw("geometry attributes")}_setPipelineNeedsUpdate(e){this._pipelineNeedsUpdate||(this._pipelineNeedsUpdate=e),this._drawBlockedReason=!1,this.setNeedsRedraw(e)}_updatePipeline(){if(this._pipelineNeedsUpdate){let e=null,t=null;this.pipeline&&(v.log(1,`Model ${this.id}: Recreating pipeline because "${this._pipelineNeedsUpdate}".`)(),e=this.pipeline.vs,t=this.pipeline.fs),this._pipelineNeedsUpdate=!1;const r=this.shaderFactory.createShader({id:`${this.id}-vertex`,stage:"vertex",source:this.source||this.vs,debugShaders:this.props.debugShaders});let i=null;this.source?i=r:this.fs&&(i=this.shaderFactory.createShader({id:`${this.id}-fragment`,stage:"fragment",source:this.source||this.fs,debugShaders:this.props.debugShaders})),this.pipeline=this.pipelineFactory.createRenderPipeline({...this.props,bindings:void 0,bufferLayout:this.bufferLayout,colorAttachmentFormats:this._colorAttachmentFormats,depthStencilAttachmentFormat:this._depthStencilAttachmentFormat,topology:this.topology,parameters:this.parameters,bindGroups:void 0,vs:r,fs:i}),this._attributeInfos=Ja(this.pipeline.shaderLayout,this.bufferLayout),e&&this.shaderFactory.release(e),t&&t!==e&&this.shaderFactory.release(t)}return this.pipeline}_logDrawCallStart(){const e=v.level>3?0:Wm;v.level<2||Date.now()-this._lastLogTime<e||(this._lastLogTime=Date.now(),this._logOpen=!0,v.group(ie,`>>> DRAWING MODEL ${this.id}`,{collapsed:v.level<=2})())}_logDrawCallEnd(){if(this._logOpen){const e=vm(this.pipeline.shaderLayout,this.id);v.table(ie,e)();const t=this.shaderInputs.getDebugTable();v.table(ie,t)();const r=this._getAttributeDebugTable();v.table(ie,this._attributeInfos)(),v.table(ie,r)(),v.groupEnd(ie)(),this._logOpen=!1}}_logFramebuffer(e){const t=this.device.props.debugFramebuffers;if(this._drawCount++,!t)return;const r=e.props.framebuffer;xm(e,r,{id:(r==null?void 0:r.id)||`${this.id}-framebuffer`,minimap:!0})}_getAttributeDebugTable(){const e={};for(const[t,r]of Object.entries(this._attributeInfos)){const i=this.vertexArray.attributes[r.location];e[r.location]={name:t,type:r.shaderType,values:i?this._getBufferOrConstantValues(i,r.bufferDataType):"null"}}if(this.vertexArray.indexBuffer){const{indexBuffer:t}=this.vertexArray,r=t.indexType==="uint32"?new Uint32Array(t.debugData):new Uint16Array(t.debugData);e.indices={name:"indices",type:t.indexType,values:r.toString()}}return e}_getBufferOrConstantValues(e,t){const r=ue.getTypedArrayConstructor(t);return(e instanceof A?new r(e.debugData):e).toString()}_getNonMaterialBindings(e){if(!this.material)return e;const t={};for(const[r,i]of Object.entries(e))this.material.ownsBinding(r)||(t[r]=i);return t}_getCurrentShaderLayout(){var e;return((e=this.pipeline)==null?void 0:e.shaderLayout)||this.props.shaderLayout||{bindings:[]}}_syncDynamicBuffers(){if(this._dynamicIndexBufferSource&&this._dynamicIndexBufferSource.generation!==this._dynamicIndexBufferSource.source.generation){const e=this._dynamicIndexBufferSource.source.buffer;this.indexBuffer=e,this.vertexArray.setIndexBuffer(e),this._dynamicIndexBufferSource.generation=this._dynamicIndexBufferSource.source.generation,this.setNeedsRedraw("dynamic index buffer")}for(const[e,t]of Object.entries(this._dynamicAttributeBufferSources))t.generation!==t.source.generation&&(this.vertexArray.setBuffer(Number(e),t.source.buffer),t.generation=t.source.generation,this.setNeedsRedraw("dynamic attribute buffer"))}_syncAttachmentFormats(e){var o,a,c;if(this.device.type!=="webgpu")return;const t=e.framebuffer||e.props.framebuffer,r=e.props,i=r.colorAttachmentFormats??((o=t==null?void 0:t.colorAttachments)==null?void 0:o.map(u=>{var f;return Ym((f=u==null?void 0:u.texture)==null?void 0:f.format)})),s=r.depthStencilAttachmentFormat===!1?void 0:r.depthStencilAttachmentFormat??qm((c=(a=t==null?void 0:t.depthStencilAttachment)==null?void 0:a.texture)==null?void 0:c.format);(!pt(this._colorAttachmentFormats,i,1)||this._depthStencilAttachmentFormat!==s)&&(this._colorAttachmentFormats=i,this._depthStencilAttachmentFormat=s,this._setPipelineNeedsUpdate("attachment formats"))}};l(xt,"defaultProps",{...ye.defaultProps,source:void 0,vs:null,fs:null,id:"unnamed",handle:void 0,userData:{},defines:{},modules:[],plugins:[],geometry:null,indexBuffer:null,indexCount:void 0,firstVertex:0,firstIndex:0,attributes:{},constantAttributes:{},bindings:{},uniforms:{},varyings:[],isInstanced:void 0,instanceCount:0,vertexCount:0,shaderInputs:void 0,material:void 0,pipelineFactory:void 0,shaderFactory:void 0,transformFeedback:void 0,shaderAssembler:Me.getDefaultShaderAssembler("glsl"),debugShaders:void 0,disableWarnings:void 0});let Bn=xt;function Br(n,e){return n.shaderLanguage!==void 0&&n.shaderLanguage!==e?!1:e==="glsl"?"assembleGLSLShaderPair"in n&&typeof n.assembleGLSLShaderPair=="function":"assembleWGSLShader"in n&&typeof n.assembleWGSLShader=="function"}function Vm(n,e){return!n||Object.keys(e).length===0?n:{...n,attributes:n.attributes.map(t=>{const r=t.name.startsWith("_luma_")?t.name.slice(6):null;return r&&e[r]?{...t,name:r}:t})}}function Hm(n,e,t){if(on(e)){const r=zm(t,n,{fallbackGroup:0});return r?e.resolveTextureBinding(r):null}return e instanceof X?e.buffer:fs(e)?Fm(e):e}function Ym(n){return n&&!Ac(n)?n:null}function qm(n){return n&&Ac(n)?n:void 0}function Ac(n){return jm.includes(n)}function Qm(n){return{type:n.type,shaderLanguage:n.info.shadingLanguage,shaderLanguageVersion:n.info.shadingLanguageVersion,gpu:n.info.gpu,limits:n.limits,features:n.features}}const Xm=35980,Zm=35981,St=class St{constructor(e,t=St.defaultProps){l(this,"device");l(this,"model");l(this,"transformFeedback");if(!St.isSupported(e))throw new Error("BufferTransform not yet implemented on WebGPU");this.device=e,this.model=new Bn(this.device,{id:t.id||"buffer-transform-model",fs:t.fs||Kg(),topology:t.topology||"point-list",varyings:t.outputs||t.varyings,...t,bufferMode:t.bufferMode||(t.feedbackBufferMode==="interleaved"?Xm:Zm)}),this.transformFeedback=this.device.createTransformFeedback({layout:this.model.pipeline.shaderLayout,buffers:t.feedbackBuffers}),this.model.setTransformFeedback(this.transformFeedback)}static isSupported(e){var t;return((t=e==null?void 0:e.info)==null?void 0:t.type)==="webgl"}destroy(){this.model&&this.model.destroy()}delete(){this.destroy()}run(e){e!=null&&e.inputBuffers&&this.model.setAttributes(e.inputBuffers),e!=null&&e.outputBuffers&&this.transformFeedback.setBuffers(e.outputBuffers);const t=this.device.beginRenderPass({discard:!0,...e});this.model.draw(t),t.end()}getBuffer(e){return this.transformFeedback.getBuffer(e)}readAsync(e){const t=this.getBuffer(e);if(!t)throw new Error("BufferTransform#getBuffer");if(t instanceof A)return t.readAsync();const{buffer:r,byteOffset:i=0,byteLength:s=r.byteLength}=t;return r.readAsync(i,s)}};l(St,"defaultProps",{...Bn.defaultProps,feedbackBufferMode:"separate",outputs:void 0,feedbackBuffers:void 0});let Ct=St;const Cr=2,Km=1e4,qn=class qn{constructor(e,t){l(this,"device");l(this,"id");l(this,"pipelineFactory");l(this,"shaderFactory");l(this,"userData",{});l(this,"bindings",{});l(this,"pipeline");l(this,"source");l(this,"shader");l(this,"shaderInputs");l(this,"_uniformStore");l(this,"_pipelineNeedsUpdate","newly created");l(this,"_getModuleUniforms");l(this,"props");l(this,"_destroyed",!1);l(this,"_lastLogTime",0);l(this,"_logOpen",!1);l(this,"_drawCount",0);var p,m;if(e.type!=="webgpu")throw new Error("Computation is only supported in WebGPU");this.props={...qn.defaultProps,...t},t=this.props,this.id=t.id||Dt("model"),this.device=e,Object.assign(this.userData,t.userData);const r=Jm(e),i=ec(this.props.plugins,r.shaderLanguage);if(Object.keys(i.vertexInputs).length>0||Object.keys(i.varyings).length>0)throw new Error("Computation does not support ShaderPlugin vertex inputs or varyings");const s=tc(this.props.modules,i.modules),o=Object.fromEntries(s.map(b=>[b.name,b]));this.shaderInputs=t.shaderInputs||new Ec(o),t.shaderInputs&&i.modules.length>0&&this.shaderInputs.addModules(i.modules),this.setShaderInputs(this.shaderInputs);const a=Sc(this.props.modules,(p=this.shaderInputs)==null?void 0:p.getModules()),c={...i.defines,...this.props.defines};this.props.shaderLayout=Pn(this.props.shaderLayout,a)||null,this.pipelineFactory=t.pipelineFactory||xn.getDefaultPipelineFactory(this.device),this.shaderFactory=t.shaderFactory||Sn.getDefaultShaderFactory(this.device);const u=this.props.shaderAssembler;At(u instanceof Ke);const{source:f,getUniforms:d,shaderLayout:h}=u.assembleWGSLShader({platformInfo:r,...this.props,modules:a,defines:c,scanVertexAttributes:!1,pluginInjections:i.injections});this.source=f,this._getModuleUniforms=d;const g=h??((m=e.getShaderLayout)==null?void 0:m.call(e,this.source,{scanVertexAttributes:!1}));this.props.shaderLayout=Pn(this.props.shaderLayout||g||null,a)||null,this.pipeline=this._updatePipeline(),t.bindings&&this.setBindings(t.bindings)}destroy(){this._destroyed||(this.pipelineFactory.release(this.pipeline),this.shaderFactory.release(this.shader),this._uniformStore.destroy(),this._destroyed=!0)}predraw(e){this.updateShaderInputs(e)}dispatch(e,t,r,i){try{this._logDrawCallStart(),this._setPipeline(e),e.dispatch(t,r,i)}finally{this._logDrawCallEnd()}}dispatchIndirect(e,t,r=0){try{this._logDrawCallStart(),this._setPipeline(e),e.dispatchIndirect(t,r)}finally{this._logDrawCallEnd()}}_setPipeline(e){this.pipeline=this._updatePipeline(),this.pipeline.setBindings(this.bindings),e.setPipeline(this.pipeline),e.setBindings({})}setVertexCount(e){}setInstanceCount(e){}setShaderInputs(e){this.shaderInputs=e,this._uniformStore=new Ka(this.device,this.shaderInputs.modules);for(const[t,r]of Object.entries(this.shaderInputs.modules))if(ls(r)){const i=this._uniformStore.getManagedUniformBuffer(t);this.bindings[`${t}Uniforms`]=i}}setShaderModuleProps(e){const t=this._getModuleUniforms(e),r=Object.keys(t).filter(i=>{const s=t[i];return!Pa(s)&&typeof s!="number"&&typeof s!="boolean"});for(const i of r)t[i],delete t[i]}updateShaderInputs(e){this._uniformStore.setUniforms(this.shaderInputs.getUniformValues(),e)}setBindings(e){Object.assign(this.bindings,e)}_setPipelineNeedsUpdate(e){this._pipelineNeedsUpdate=this._pipelineNeedsUpdate||e}_updatePipeline(){if(this._pipelineNeedsUpdate){let e=null;this.pipeline&&(v.log(1,`Model ${this.id}: Recreating pipeline because "${this._pipelineNeedsUpdate}".`)(),e=this.shader),this._pipelineNeedsUpdate=!1,this.shader=this.shaderFactory.createShader({id:`${this.id}-fragment`,stage:"compute",source:this.source,debugShaders:this.props.debugShaders}),this.pipeline=this.pipelineFactory.createComputePipeline({...this.props,shader:this.shader}),e&&this.shaderFactory.release(e)}return this.pipeline}_logDrawCallStart(){const e=v.level>3?0:Km;v.level<2||Date.now()-this._lastLogTime<e||(this._lastLogTime=Date.now(),this._logOpen=!0,v.group(Cr,`>>> DRAWING MODEL ${this.id}`,{collapsed:v.level<=2})())}_logDrawCallEnd(){if(this._logOpen){const e=this.shaderInputs.getDebugTable();v.table(Cr,e)(),v.groupEnd(Cr)(),this._logOpen=!1}}_getBufferOrConstantValues(e,t){const r=ue.getTypedArrayConstructor(t);return(e instanceof A?new r(e.debugData):e).toString()}};l(qn,"defaultProps",{...Tt.defaultProps,id:"unnamed",handle:void 0,userData:{},source:"",modules:[],defines:{},plugins:[],bindings:void 0,shaderInputs:void 0,pipelineFactory:void 0,shaderFactory:void 0,shaderAssembler:Me.getDefaultShaderAssembler("wgsl"),debugShaders:void 0});let vi=qn;function Jm(n){return{type:n.type,shaderLanguage:n.info.shadingLanguage,shaderLanguageVersion:n.info.shadingLanguageVersion,gpu:n.info.gpu,limits:n.limits,features:n.features}}const eb={NO_STATE:"Awaiting state",MATCHED:"Matched. State transferred from previous layer",INITIALIZED:"Initialized",AWAITING_GC:"Discarded. Awaiting garbage collection",AWAITING_FINALIZATION:"No longer matched. Awaiting garbage collection",FINALIZED:"Finalized! Awaiting garbage collection"},Cn=Symbol.for("component"),ve=Symbol.for("propTypes"),Ir=Symbol.for("deprecatedProps"),qe=Symbol.for("asyncPropDefaults"),De=Symbol.for("asyncPropOriginal"),we=Symbol.for("asyncPropResolved");function tb(n,e=()=>!0){return Array.isArray(n)?Tc(n,e,[]):e(n)?[n]:[]}function Tc(n,e,t){let r=-1;for(;++r<n.length;){const i=n[r];Array.isArray(i)?Tc(i,e,t):e(i)&&t.push(i)}return t}function nb({target:n,source:e,start:t=0,count:r=1}){const i=e.length,s=r*i;let o=0;for(let a=t;o<i;o++)n[a++]=e[o];for(;o<s;)o<s-o?(n.copyWithin(t+o,t,t+o),o*=2):(n.copyWithin(t+o,t,t+s-o),o=s);return n}let Po=!1;async function qv(){{ds();return}}function rb(n,e){return ds(),n}async function Qv(n){{ds();return}}function ib(n){return null}function ds(){Po||(Po=!0,v.warn("Import @luma.gl/webgl/debug before enabling WebGL debugging.")())}const hs={3042:!1,32773:new Float32Array([0,0,0,0]),32777:32774,34877:32774,32969:1,32968:0,32971:1,32970:0,3106:new Float32Array([0,0,0,0]),3107:[!0,!0,!0,!0],2884:!1,2885:1029,2929:!1,2931:1,2932:513,2928:new Float32Array([0,1]),2930:!0,3024:!0,35725:null,36006:null,36007:null,34229:null,34964:null,2886:2305,33170:4352,2849:1,32823:!1,32824:0,10752:0,32926:!1,32928:!1,32938:1,32939:!1,3089:!1,3088:new Int32Array([0,0,1024,1024]),2960:!1,2961:0,2968:4294967295,36005:4294967295,2962:519,2967:0,2963:4294967295,34816:519,36003:0,36004:4294967295,2964:7680,2965:7680,2966:7680,34817:7680,34818:7680,34819:7680,2978:[0,0,1024,1024],36389:null,36662:null,36663:null,35053:null,35055:null,35723:4352,36010:null,35977:!1,3333:4,3317:4,37440:!1,37441:!1,37443:37444,3330:0,3332:0,3331:0,3314:0,32878:0,3316:0,3315:0,32877:0},D=(n,e,t)=>e?n.enable(t):n.disable(t),Bo=(n,e,t)=>n.hint(t,e),Y=(n,e,t)=>n.pixelStorei(t,e),Co=(n,e,t)=>{const r=t===36006?36009:36008;return n.bindFramebuffer(r,e)},it=(n,e,t)=>{const i={34964:34962,36662:36662,36663:36663,35053:35051,35055:35052}[t];n.bindBuffer(i,e)};function Or(n){return Array.isArray(n)||ArrayBuffer.isView(n)&&!(n instanceof DataView)}const sb={3042:D,32773:(n,e)=>n.blendColor(...e),32777:"blendEquation",34877:"blendEquation",32969:"blendFunc",32968:"blendFunc",32971:"blendFunc",32970:"blendFunc",3106:(n,e)=>n.clearColor(...e),3107:(n,e)=>n.colorMask(...e),2884:D,2885:(n,e)=>n.cullFace(e),2929:D,2931:(n,e)=>n.clearDepth(e),2932:(n,e)=>n.depthFunc(e),2928:(n,e)=>n.depthRange(...e),2930:(n,e)=>n.depthMask(e),3024:D,35723:Bo,35725:(n,e)=>n.useProgram(e),36007:(n,e)=>n.bindRenderbuffer(36161,e),36389:(n,e)=>{var t;return(t=n.bindTransformFeedback)==null?void 0:t.call(n,36386,e)},34229:(n,e)=>n.bindVertexArray(e),36006:Co,36010:Co,34964:it,36662:it,36663:it,35053:it,35055:it,2886:(n,e)=>n.frontFace(e),33170:Bo,2849:(n,e)=>n.lineWidth(e),32823:D,32824:"polygonOffset",10752:"polygonOffset",35977:D,32926:D,32928:D,32938:"sampleCoverage",32939:"sampleCoverage",3089:D,3088:(n,e)=>n.scissor(...e),2960:D,2961:(n,e)=>n.clearStencil(e),2968:(n,e)=>n.stencilMaskSeparate(1028,e),36005:(n,e)=>n.stencilMaskSeparate(1029,e),2962:"stencilFuncFront",2967:"stencilFuncFront",2963:"stencilFuncFront",34816:"stencilFuncBack",36003:"stencilFuncBack",36004:"stencilFuncBack",2964:"stencilOpFront",2965:"stencilOpFront",2966:"stencilOpFront",34817:"stencilOpBack",34818:"stencilOpBack",34819:"stencilOpBack",2978:(n,e)=>n.viewport(...e),34383:D,10754:D,12288:D,12289:D,12290:D,12291:D,12292:D,12293:D,12294:D,12295:D,3333:Y,3317:Y,37440:Y,37441:Y,37443:Y,3330:Y,3332:Y,3331:Y,3314:Y,32878:Y,3316:Y,3315:Y,32877:Y,framebuffer:(n,e)=>{const t=e&&"handle"in e?e.handle:e;return n.bindFramebuffer(36160,t)},blend:(n,e)=>e?n.enable(3042):n.disable(3042),blendColor:(n,e)=>n.blendColor(...e),blendEquation:(n,e)=>{const t=typeof e=="number"?[e,e]:e;n.blendEquationSeparate(...t)},blendFunc:(n,e)=>{const t=(e==null?void 0:e.length)===2?[...e,...e]:e;n.blendFuncSeparate(...t)},clearColor:(n,e)=>n.clearColor(...e),clearDepth:(n,e)=>n.clearDepth(e),clearStencil:(n,e)=>n.clearStencil(e),colorMask:(n,e)=>n.colorMask(...e),cull:(n,e)=>e?n.enable(2884):n.disable(2884),cullFace:(n,e)=>n.cullFace(e),depthTest:(n,e)=>e?n.enable(2929):n.disable(2929),depthFunc:(n,e)=>n.depthFunc(e),depthMask:(n,e)=>n.depthMask(e),depthRange:(n,e)=>n.depthRange(...e),dither:(n,e)=>e?n.enable(3024):n.disable(3024),derivativeHint:(n,e)=>{n.hint(35723,e)},frontFace:(n,e)=>n.frontFace(e),mipmapHint:(n,e)=>n.hint(33170,e),lineWidth:(n,e)=>n.lineWidth(e),polygonOffsetFill:(n,e)=>e?n.enable(32823):n.disable(32823),polygonOffset:(n,e)=>n.polygonOffset(...e),sampleCoverage:(n,e)=>n.sampleCoverage(e[0],e[1]||!1),scissorTest:(n,e)=>e?n.enable(3089):n.disable(3089),scissor:(n,e)=>n.scissor(...e),stencilTest:(n,e)=>e?n.enable(2960):n.disable(2960),stencilMask:(n,e)=>{e=Or(e)?e:[e,e];const[t,r]=e;n.stencilMaskSeparate(1028,t),n.stencilMaskSeparate(1029,r)},stencilFunc:(n,e)=>{e=Or(e)&&e.length===3?[...e,...e]:e;const[t,r,i,s,o,a]=e;n.stencilFuncSeparate(1028,t,r,i),n.stencilFuncSeparate(1029,s,o,a)},stencilOp:(n,e)=>{e=Or(e)&&e.length===3?[...e,...e]:e;const[t,r,i,s,o,a]=e;n.stencilOpSeparate(1028,t,r,i),n.stencilOpSeparate(1029,s,o,a)},viewport:(n,e)=>n.viewport(...e)};function R(n,e,t){return e[n]!==void 0?e[n]:t[n]}const ob={blendEquation:(n,e,t)=>n.blendEquationSeparate(R(32777,e,t),R(34877,e,t)),blendFunc:(n,e,t)=>n.blendFuncSeparate(R(32969,e,t),R(32968,e,t),R(32971,e,t),R(32970,e,t)),polygonOffset:(n,e,t)=>n.polygonOffset(R(32824,e,t),R(10752,e,t)),sampleCoverage:(n,e,t)=>n.sampleCoverage(R(32938,e,t),R(32939,e,t)),stencilFuncFront:(n,e,t)=>n.stencilFuncSeparate(1028,R(2962,e,t),R(2967,e,t),R(2963,e,t)),stencilFuncBack:(n,e,t)=>n.stencilFuncSeparate(1029,R(34816,e,t),R(36003,e,t),R(36004,e,t)),stencilOpFront:(n,e,t)=>n.stencilOpSeparate(1028,R(2964,e,t),R(2965,e,t),R(2966,e,t)),stencilOpBack:(n,e,t)=>n.stencilOpSeparate(1029,R(34817,e,t),R(34818,e,t),R(34819,e,t))},Io={enable:(n,e)=>n({[e]:!0}),disable:(n,e)=>n({[e]:!1}),pixelStorei:(n,e,t)=>n({[e]:t}),hint:(n,e,t)=>n({[e]:t}),useProgram:(n,e)=>n({35725:e}),bindRenderbuffer:(n,e,t)=>n({36007:t}),bindTransformFeedback:(n,e,t)=>n({36389:t}),bindVertexArray:(n,e)=>n({34229:e}),bindFramebuffer:(n,e,t)=>{switch(e){case 36160:return n({36006:t,36010:t});case 36009:return n({36006:t});case 36008:return n({36010:t});default:return null}},bindBuffer:(n,e,t)=>{const r={34962:[34964],36662:[36662],36663:[36663],35051:[35053],35052:[35055]}[e];return r?n({[r]:t}):{valueChanged:!0}},blendColor:(n,e,t,r,i)=>n({32773:new Float32Array([e,t,r,i])}),blendEquation:(n,e)=>n({32777:e,34877:e}),blendEquationSeparate:(n,e,t)=>n({32777:e,34877:t}),blendFunc:(n,e,t)=>n({32969:e,32968:t,32971:e,32970:t}),blendFuncSeparate:(n,e,t,r,i)=>n({32969:e,32968:t,32971:r,32970:i}),clearColor:(n,e,t,r,i)=>n({3106:new Float32Array([e,t,r,i])}),clearDepth:(n,e)=>n({2931:e}),clearStencil:(n,e)=>n({2961:e}),colorMask:(n,e,t,r,i)=>n({3107:[e,t,r,i]}),cullFace:(n,e)=>n({2885:e}),depthFunc:(n,e)=>n({2932:e}),depthRange:(n,e,t)=>n({2928:new Float32Array([e,t])}),depthMask:(n,e)=>n({2930:e}),frontFace:(n,e)=>n({2886:e}),lineWidth:(n,e)=>n({2849:e}),polygonOffset:(n,e,t)=>n({32824:e,10752:t}),sampleCoverage:(n,e,t)=>n({32938:e,32939:t}),scissor:(n,e,t,r,i)=>n({3088:new Int32Array([e,t,r,i])}),stencilMask:(n,e)=>n({2968:e,36005:e}),stencilMaskSeparate:(n,e,t)=>n({[e===1028?2968:36005]:t}),stencilFunc:(n,e,t,r)=>n({2962:e,2967:t,2963:r,34816:e,36003:t,36004:r}),stencilFuncSeparate:(n,e,t,r,i)=>n({[e===1028?2962:34816]:t,[e===1028?2967:36003]:r,[e===1028?2963:36004]:i}),stencilOp:(n,e,t,r)=>n({2964:e,2965:t,2966:r,34817:e,34818:t,34819:r}),stencilOpSeparate:(n,e,t,r,i)=>n({[e===1028?2964:34817]:t,[e===1028?2965:34818]:r,[e===1028?2966:34819]:i}),viewport:(n,e,t,r,i)=>n({2978:[e,t,r,i]})},se=(n,e)=>n.isEnabled(e),Oo={3042:se,2884:se,2929:se,3024:se,32823:se,32926:se,32928:se,3089:se,2960:se,35977:se},ab=new Set([34016,36388,36387,35983,35368,34965,35739,35738,3074,34853,34854,34855,34856,34857,34858,34859,34860,34861,34862,34863,34864,34865,34866,34867,34868,35097,32873,35869,32874,34068]);function rt(n,e){var i;if(ub(e))return;const t={};for(const s in e){const o=Number(s),a=sb[s];a&&(typeof a=="string"?t[a]=!0:a(n,e[s],o))}const r=(i=n.lumaState)==null?void 0:i.cache;if(r)for(const s in t){const o=ob[s];o(n,e,r)}}function Lc(n,e=hs){if(typeof e=="number"){const i=e,s=Oo[i];return s?s(n,i):n.getParameter(i)}const t=Array.isArray(e)?e:Object.keys(e),r={};for(const i of t){const s=Oo[i];r[i]=s?s(n,Number(i)):n.getParameter(Number(i))}return r}function cb(n){rt(n,hs)}function ub(n){for(const e in n)return!1;return!0}function lb(n,e){if(n===e)return!0;if(Ro(n)&&Ro(e)&&n.length===e.length){for(let t=0;t<n.length;++t)if(n[t]!==e[t])return!1;return!0}return!1}function Ro(n){return Array.isArray(n)||ArrayBuffer.isView(n)}class Ce{constructor(e,t){l(this,"gl");l(this,"program",null);l(this,"stateStack",[]);l(this,"enable",!0);l(this,"cache",null);l(this,"log");l(this,"initialized",!1);this.gl=e,this.log=(t==null?void 0:t.log)||(()=>{}),this._updateCache=this._updateCache.bind(this),Object.seal(this)}static get(e){return e.lumaState}push(e={}){this.stateStack.push({})}pop(){const e=this.stateStack[this.stateStack.length-1];rt(this.gl,e),this.stateStack.pop()}trackState(e,t){if(this.cache=t!=null&&t.copyState?Lc(e):Object.assign({},hs),this.initialized)throw new Error("WebGLStateTracker");this.initialized=!0,this.gl.lumaState=this,db(e);for(const r in Io){const i=Io[r];fb(e,r,i)}Mo(e,"getParameter"),Mo(e,"isEnabled")}_updateCache(e){let t=!1,r;const i=this.stateStack.length>0?this.stateStack[this.stateStack.length-1]:null;for(const s in e){const o=e[s],a=this.cache[s];lb(o,a)||(t=!0,r=a,i&&!(s in i)&&(i[s]=a),this.cache[s]=o)}return{valueChanged:t,oldValue:r}}}function Mo(n,e){const t=n[e].bind(n);n[e]=function(i){if(i===void 0||ab.has(i))return t(i);const s=Ce.get(n);return i in s.cache||(s.cache[i]=t(i)),s.enable?s.cache[i]:t(i)},Object.defineProperty(n[e],"name",{value:`${e}-from-cache`,configurable:!1})}function fb(n,e,t){if(!n[e])return;const r=n[e].bind(n);n[e]=function(...s){const o=Ce.get(n),{valueChanged:a,oldValue:c}=t(o._updateCache,...s);return a&&r(...s),c},Object.defineProperty(n[e],"name",{value:`${e}-to-cache`,configurable:!1})}function db(n){const e=n.useProgram.bind(n);n.useProgram=function(r){const i=Ce.get(n);i.program!==r&&(e(r),i.program=r)}}function xi(n){const e=n.luma||{_polyfilled:!1,extensions:{},softwareRenderer:!1};return e._polyfilled??(e._polyfilled=!1),e.extensions||(e.extensions={}),n.luma=e,e}function hb(n,e,t){let r="";const i=c=>{const u=c.statusMessage;u&&(r||(r=u))};n.addEventListener("webglcontextcreationerror",i,!1);const s=t.failIfMajorPerformanceCaveat!==!0,o={preserveDrawingBuffer:!0,...t,failIfMajorPerformanceCaveat:!0};let a=null;try{a||(a=n.getContext("webgl2",o)),!a&&o.failIfMajorPerformanceCaveat&&(r||(r="Only software GPU is available. Set `failIfMajorPerformanceCaveat: false` to allow."));let c=!1;if(!a&&s&&(o.failIfMajorPerformanceCaveat=!1,a=n.getContext("webgl2",o),c=!0),a||(a=n.getContext("webgl",{}),a&&(a=null,r||(r="Your browser only supports WebGL1"))),!a)throw r||(r="Your browser does not support WebGL"),new Error(`Failed to create WebGL context: ${r}`);const u=xi(a);u.softwareRenderer=c;const{onContextLost:f,onContextRestored:d}=e;return n.addEventListener("webglcontextlost",h=>f(h),!1),n.addEventListener("webglcontextrestored",h=>d(h),!1),a}finally{n.removeEventListener("webglcontextcreationerror",i,!1)}}function $e(n,e,t){return t[e]===void 0&&(t[e]=n.getExtension(e)||null),t[e]}function gb(n,e){const t=n.getParameter(7936),r=n.getParameter(7937);$e(n,"WEBGL_debug_renderer_info",e);const i=e.WEBGL_debug_renderer_info,s=n.getParameter(i?i.UNMASKED_VENDOR_WEBGL:7936),o=n.getParameter(i?i.UNMASKED_RENDERER_WEBGL:7937),a=s||t,c=o||r,u=n.getParameter(7938),f=Pc(a,c),d=pb(a,c),h=mb(a,c);return{type:"webgl",gpu:f,gpuType:h,gpuBackend:d,vendor:a,renderer:c,version:u,shadingLanguage:"glsl",shadingLanguageVersion:300}}function Pc(n,e){return/NVIDIA/i.exec(n)||/NVIDIA/i.exec(e)?"nvidia":/INTEL/i.exec(n)||/INTEL/i.exec(e)?"intel":/Apple/i.exec(n)||/Apple/i.exec(e)?"apple":/AMD/i.exec(n)||/AMD/i.exec(e)||/ATI/i.exec(n)||/ATI/i.exec(e)?"amd":/SwiftShader/i.exec(n)||/SwiftShader/i.exec(e)?"software":"unknown"}function pb(n,e){return/Metal/i.exec(n)||/Metal/i.exec(e)?"metal":/ANGLE/i.exec(n)||/ANGLE/i.exec(e)?"opengl":"unknown"}function mb(n,e){if(/SwiftShader/i.exec(n)||/SwiftShader/i.exec(e))return"cpu";switch(Pc(n,e)){case"apple":return bb(n,e)?"integrated":"unknown";case"intel":return"integrated";case"software":return"cpu";case"unknown":return"unknown";default:return"discrete"}}function bb(n,e){return/Apple (M\d|A\d|GPU)/i.test(`${n} ${e}`)}function Bc(n){switch(n){case"uint8":return 5121;case"sint8":return 5120;case"unorm8":return 5121;case"snorm8":return 5120;case"uint16":return 5123;case"sint16":return 5122;case"unorm16":return 5123;case"snorm16":return 5122;case"uint32":return 5125;case"sint32":return 5124;case"float16":return 5131;case"float32":return 5126}throw new Error(String(n))}const dt="WEBGL_compressed_texture_s3tc",ht="WEBGL_compressed_texture_s3tc_srgb",je="EXT_texture_compression_rgtc",Ve="EXT_texture_compression_bptc",_b="WEBGL_compressed_texture_etc",yb="WEBGL_compressed_texture_astc",wb="WEBGL_compressed_texture_etc1",vb="WEBGL_compressed_texture_pvrtc",xb="WEBGL_compressed_texture_atc",Sb="EXT_texture_norm16",Do="EXT_render_snorm",Cc="EXT_color_buffer_float",Rr="snorm8-renderable-webgl",Mr="norm16-renderable-webgl",Dr="snorm16-renderable-webgl",$r="float16-renderable-webgl",Xt="float32-renderable-webgl",Eb="rgb9e5ufloat-renderable-webgl",gs={"float32-renderable-webgl":{extensions:[Cc]},"float16-renderable-webgl":{extensions:["EXT_color_buffer_half_float"]},"rgb9e5ufloat-renderable-webgl":{extensions:["WEBGL_render_shared_exponent"]},"snorm8-renderable-webgl":{extensions:[Do]},"norm16-webgl":{extensions:[Sb]},"norm16-renderable-webgl":{features:["norm16-webgl"]},"snorm16-renderable-webgl":{features:["norm16-webgl"],extensions:[Do]},"float32-filterable":{extensions:["OES_texture_float_linear"]},"float16-filterable-webgl":{extensions:["OES_texture_half_float_linear"]},"texture-filterable-anisotropic-webgl":{extensions:["EXT_texture_filter_anisotropic"]},"texture-blend-float-webgl":{extensions:["EXT_float_blend"]},"texture-compression-bc":{extensions:[dt,ht,je,Ve]},"texture-compression-bc5-webgl":{extensions:[je]},"texture-compression-bc7-webgl":{extensions:[Ve]},"texture-compression-etc2":{extensions:[_b]},"texture-compression-astc":{extensions:[yb]},"texture-compression-etc1-webgl":{extensions:[wb]},"texture-compression-pvrtc-webgl":{extensions:[vb]},"texture-compression-atc-webgl":{extensions:[xb]}};function Ab(n){return n in gs}function Ic(n,e,t){return Oc(n,e,t,new Set)}function Oc(n,e,t,r){const i=gs[e];if(!i||r.has(e))return!1;r.add(e);const s=(i.features||[]).every(o=>Oc(n,o,t,r));return r.delete(e),s?(i.extensions||[]).every(o=>!!$e(n,o,t)):!1}const rr={r8unorm:{gl:33321,rb:!0},r8snorm:{gl:36756,r:Rr},r8uint:{gl:33330,rb:!0},r8sint:{gl:33329,rb:!0},rg8unorm:{gl:33323,rb:!0},rg8snorm:{gl:36757,r:Rr},rg8uint:{gl:33336,rb:!0},rg8sint:{gl:33335,rb:!0},r16uint:{gl:33332,rb:!0},r16sint:{gl:33331,rb:!0},r16float:{gl:33325,rb:!0,r:$r},r16unorm:{gl:33322,rb:!0,r:Mr},r16snorm:{gl:36760,r:Dr},"rgba4unorm-webgl":{gl:32854,rb:!0},"rgb565unorm-webgl":{gl:36194,rb:!0},"rgb5a1unorm-webgl":{gl:32855,rb:!0},"rgb8unorm-webgl":{gl:32849},"rgb8snorm-webgl":{gl:36758},rgba8unorm:{gl:32856},"rgba8unorm-srgb":{gl:35907},rgba8snorm:{gl:36759,r:Rr},rgba8uint:{gl:36220},rgba8sint:{gl:36238},bgra8unorm:{},"bgra8unorm-srgb":{},rg16uint:{gl:33338},rg16sint:{gl:33337},rg16float:{gl:33327,rb:!0,r:$r},rg16unorm:{gl:33324,r:Mr},rg16snorm:{gl:36761,r:Dr},r32uint:{gl:33334,rb:!0},r32sint:{gl:33333,rb:!0},r32float:{gl:33326,r:Xt},rgb9e5ufloat:{gl:35901,r:Eb},rg11b10ufloat:{gl:35898,rb:!0},rgb10a2unorm:{gl:32857,rb:!0},rgb10a2uint:{gl:36975,rb:!0},"rgb16unorm-webgl":{gl:32852,r:!1},"rgb16snorm-webgl":{gl:36762,r:!1},rg32uint:{gl:33340,rb:!0},rg32sint:{gl:33339,rb:!0},rg32float:{gl:33328,rb:!0,r:Xt},rgba16uint:{gl:36214,rb:!0},rgba16sint:{gl:36232,rb:!0},rgba16float:{gl:34842,r:$r},rgba16unorm:{gl:32859,rb:!0,r:Mr},rgba16snorm:{gl:36763,r:Dr},"rgb32float-webgl":{gl:34837,x:Cc,r:Xt,dataFormat:6407,types:[5126]},rgba32uint:{gl:36208,rb:!0},rgba32sint:{gl:36226,rb:!0},rgba32float:{gl:34836,rb:!0,r:Xt},stencil8:{gl:36168,rb:!0},depth16unorm:{gl:33189,dataFormat:6402,types:[5123],rb:!0},depth24plus:{gl:33190,dataFormat:6402,types:[5125]},depth32float:{gl:36012,dataFormat:6402,types:[5126],rb:!0},"depth24plus-stencil8":{gl:35056,rb:!0,depthTexture:!0,dataFormat:34041,types:[34042]},"depth32float-stencil8":{gl:36013,dataFormat:34041,types:[36269],rb:!0},"bc1-rgb-unorm-webgl":{gl:33776,x:dt},"bc1-rgb-unorm-srgb-webgl":{gl:35916,x:ht},"bc1-rgba-unorm":{gl:33777,x:dt},"bc1-rgba-unorm-srgb":{gl:35916,x:ht},"bc2-rgba-unorm":{gl:33778,x:dt},"bc2-rgba-unorm-srgb":{gl:35918,x:ht},"bc3-rgba-unorm":{gl:33779,x:dt},"bc3-rgba-unorm-srgb":{gl:35919,x:ht},"bc4-r-unorm":{gl:36283,x:je},"bc4-r-snorm":{gl:36284,x:je},"bc5-rg-unorm":{gl:36285,x:je},"bc5-rg-snorm":{gl:36286,x:je},"bc6h-rgb-ufloat":{gl:36495,x:Ve},"bc6h-rgb-float":{gl:36494,x:Ve},"bc7-rgba-unorm":{gl:36492,x:Ve},"bc7-rgba-unorm-srgb":{gl:36493,x:Ve},"etc2-rgb8unorm":{gl:37492},"etc2-rgb8unorm-srgb":{gl:37494},"etc2-rgb8a1unorm":{gl:37496},"etc2-rgb8a1unorm-srgb":{gl:37497},"etc2-rgba8unorm":{gl:37493},"etc2-rgba8unorm-srgb":{gl:37495},"eac-r11unorm":{gl:37488},"eac-r11snorm":{gl:37489},"eac-rg11unorm":{gl:37490},"eac-rg11snorm":{gl:37491},"astc-4x4-unorm":{gl:37808},"astc-4x4-unorm-srgb":{gl:37840},"astc-5x4-unorm":{gl:37809},"astc-5x4-unorm-srgb":{gl:37841},"astc-5x5-unorm":{gl:37810},"astc-5x5-unorm-srgb":{gl:37842},"astc-6x5-unorm":{gl:37811},"astc-6x5-unorm-srgb":{gl:37843},"astc-6x6-unorm":{gl:37812},"astc-6x6-unorm-srgb":{gl:37844},"astc-8x5-unorm":{gl:37813},"astc-8x5-unorm-srgb":{gl:37845},"astc-8x6-unorm":{gl:37814},"astc-8x6-unorm-srgb":{gl:37846},"astc-8x8-unorm":{gl:37815},"astc-8x8-unorm-srgb":{gl:37847},"astc-10x5-unorm":{gl:37816},"astc-10x5-unorm-srgb":{gl:37848},"astc-10x6-unorm":{gl:37817},"astc-10x6-unorm-srgb":{gl:37849},"astc-10x8-unorm":{gl:37818},"astc-10x8-unorm-srgb":{gl:37850},"astc-10x10-unorm":{gl:37819},"astc-10x10-unorm-srgb":{gl:37851},"astc-12x10-unorm":{gl:37820},"astc-12x10-unorm-srgb":{gl:37852},"astc-12x12-unorm":{gl:37821},"astc-12x12-unorm-srgb":{gl:37853},"pvrtc-rgb4unorm-webgl":{gl:35840},"pvrtc-rgba4unorm-webgl":{gl:35842},"pvrtc-rgb2unorm-webgl":{gl:35841},"pvrtc-rgba2unorm-webgl":{gl:35843},"etc1-rbg-unorm-webgl":{gl:36196},"atc-rgb-unorm-webgl":{gl:35986},"atc-rgba-unorm-webgl":{gl:35986},"atc-rgbai-unorm-webgl":{gl:34798}};function Tb(n,e,t){let r=e.create;const i=rr[e.format];(i==null?void 0:i.gl)===void 0&&(r=!1),i!=null&&i.x&&(r=r&&!!$e(n,i.x,t)),e.format==="stencil8"&&(r=!1);const s=(i==null?void 0:i.r)===!1?!1:(i==null?void 0:i.r)===void 0||Ic(n,i.r,t),o=r&&e.render&&s&&Lb(n,e.format,t);return{format:e.format,create:r&&e.create,render:o,filter:r&&e.filter,blend:r&&e.blend,store:r&&e.store}}function Lb(n,e,t){const r=rr[e],i=r==null?void 0:r.gl;if(i===void 0||r!=null&&r.x&&!$e(n,r.x,t))return!1;const s=n.getParameter(32873),o=n.getParameter(36006),a=n.createTexture(),c=n.createFramebuffer();if(!a||!c)return!1;const u=0;let f=Number(n.getError());for(;f!==u;)f=n.getError();let d=!1;try{if(n.bindTexture(3553,a),n.texStorage2D(3553,1,i,1,1),Number(n.getError())!==u)return!1;n.bindFramebuffer(36160,c),n.framebufferTexture2D(36160,36064,3553,a,0),d=Number(n.checkFramebufferStatus(36160))===36053&&Number(n.getError())===u}finally{n.bindFramebuffer(36160,o),n.deleteFramebuffer(c),n.bindTexture(3553,s),n.deleteTexture(a)}return d}function Rc(n){var i;const e=rr[n],t=Cb(n),r=ee.getInfo(n);return r.compressed&&(e.dataFormat=t),{internalFormat:t,format:(e==null?void 0:e.dataFormat)||Bb(r.channels,r.integer,r.normalized,t),type:r.dataType?Bc(r.dataType):((i=e==null?void 0:e.types)==null?void 0:i[0])||5121,compressed:r.compressed||!1}}function Pb(n){switch(ee.getInfo(n).attachment){case"depth":return 36096;case"stencil":return 36128;case"depth-stencil":return 33306;default:throw new Error(`Not a depth stencil format: ${n}`)}}function Bb(n,e,t,r){if(r===6408||r===6407)return r;switch(n){case"r":return e&&!t?36244:6403;case"rg":return e&&!t?33320:33319;case"rgb":return e&&!t?36248:6407;case"rgba":return e&&!t?36249:6408;case"bgra":throw new Error("bgra pixels not supported by WebGL");default:return 6408}}function Cb(n){const e=rr[n],t=e==null?void 0:e.gl;if(t===void 0)throw new Error(`Unsupported texture format ${n}`);return t}const $o={"depth-clip-control":"EXT_depth_clamp","timestamp-query":"EXT_disjoint_timer_query_webgl2","compilation-status-async-webgl":"KHR_parallel_shader_compile","html-in-canvas":n=>Td()&&typeof n.texElementImage2D=="function","polygon-mode-webgl":"WEBGL_polygon_mode","provoking-vertex-webgl":"WEBGL_provoking_vertex","shader-clip-cull-distance-webgl":"WEBGL_clip_cull_distance","shader-noperspective-interpolation-webgl":"NV_shader_noperspective_interpolation","shader-conservative-depth-webgl":"EXT_conservative_depth"};class Ib extends Ad{constructor(t,r,i){super([],i);l(this,"gl");l(this,"extensions");l(this,"testedFeatures",new Set);this.gl=t,this.extensions=r,$e(t,"EXT_color_buffer_float",r)}*[Symbol.iterator](){const t=this.getFeatures();for(const r of t)this.has(r)&&(yield r);return[]}has(t){var r;return(r=this.disabledFeatures)!=null&&r[t]?!1:(this.testedFeatures.has(t)||(this.testedFeatures.add(t),Ab(t)&&Ic(this.gl,t,this.extensions)&&this.features.add(t),this.getWebGLFeature(t)&&this.features.add(t)),this.features.has(t))}initializeFeatures(){const t=this.getFeatures().filter(r=>r!=="polygon-mode-webgl");for(const r of t)this.has(r)}getFeatures(){return[...Object.keys($o),...Object.keys(gs)]}getWebGLFeature(t){const r=$o[t];return typeof r=="string"?!!$e(this.gl,r,this.extensions):typeof r=="function"?r(this.gl):!!r}}class Ob extends wd{constructor(t){super();l(this,"gl");l(this,"limits",{});this.gl=t}get maxTextureDimension1D(){return 0}get maxTextureDimension2D(){return this.getParameter(3379)}get maxTextureDimension3D(){return this.getParameter(32883)}get maxTextureArrayLayers(){return this.getParameter(35071)}get maxBindGroups(){return 0}get maxBindGroupsPlusVertexBuffers(){return 0}get maxBindingsPerBindGroup(){return 0}get maxDynamicUniformBuffersPerPipelineLayout(){return 0}get maxDynamicStorageBuffersPerPipelineLayout(){return 0}get maxSampledTexturesPerShaderStage(){return this.getParameter(35660)}get maxSamplersPerShaderStage(){return this.getParameter(35661)}get maxStorageBuffersPerShaderStage(){return 0}get maxStorageBuffersInVertexStage(){return 0}get maxStorageBuffersInFragmentStage(){return 0}get maxStorageTexturesPerShaderStage(){return 0}get maxStorageTexturesInVertexStage(){return 0}get maxStorageTexturesInFragmentStage(){return 0}get maxUniformBuffersPerShaderStage(){return this.getParameter(35375)}get maxUniformBufferBindingSize(){return this.getParameter(35376)}get maxStorageBufferBindingSize(){return 0}get maxBufferSize(){return Number.MAX_SAFE_INTEGER}get minUniformBufferOffsetAlignment(){return this.getParameter(35380)}get minStorageBufferOffsetAlignment(){return 0}get maxVertexBuffers(){return 16}get maxVertexAttributes(){return this.getParameter(34921)}get maxVertexBufferArrayStride(){return 2048}get maxInterStageShaderVariables(){return this.getParameter(35659)}get maxColorAttachments(){return this.getParameter(36063)}get maxColorAttachmentBytesPerSample(){return 0}get maxComputeWorkgroupStorageSize(){return 0}get maxComputeInvocationsPerWorkgroup(){return 0}get maxComputeWorkgroupSizeX(){return 0}get maxComputeWorkgroupSizeY(){return 0}get maxComputeWorkgroupSizeZ(){return 0}get maxComputeWorkgroupsPerDimension(){return 0}getParameter(t){return this.limits[t]===void 0&&(this.limits[t]=this.gl.getParameter(t)),this.limits[t]||0}}class bt extends vn{constructor(t,r){super(t,r);l(this,"device");l(this,"gl");l(this,"handle");l(this,"colorAttachments",[]);l(this,"depthStencilAttachment",null);const i=r.handle,s=i===null;this.device=t,this.gl=t.gl,this.handle=i||s?i:this.gl.createFramebuffer(),s||(t._setWebGLDebugMetadata(this.handle,this,{spector:this.props}),r.handle||(this.autoCreateAttachmentTextures(),this.updateAttachments()))}destroy(){super.destroy(),!this.destroyed&&this.handle!==null&&!this.props.handle&&this.gl.deleteFramebuffer(this.handle)}updateAttachments(){const t=this.gl.bindFramebuffer(36160,this.handle);for(let r=0;r<this.colorAttachments.length;++r){const i=this.colorAttachments[r];if(i){const s=36064+r;this._attachTextureView(s,i)}}if(this.depthStencilAttachment){const r=Pb(this.depthStencilAttachment.props.format);this._attachTextureView(r,this.depthStencilAttachment)}if(this.device.props.debug){const r=this.gl.checkFramebufferStatus(36160);if(r!==36053)throw new Error(`Framebuffer ${Mb(r)}`)}this.gl.bindFramebuffer(36160,t)}_attachTextureView(t,r){const{gl:i}=this.device,{texture:s}=r,o=r.props.baseMipLevel,a=r.props.baseArrayLayer;switch(i.bindTexture(s.glTarget,s.handle),s.glTarget){case 35866:case 32879:i.framebufferTextureLayer(36160,t,s.handle,o,a);break;case 34067:const c=Rb(a);i.framebufferTexture2D(36160,t,c,s.handle,o);break;case 3553:i.framebufferTexture2D(36160,t,3553,s.handle,o);break;default:throw new Error("Illegal texture type")}i.bindTexture(s.glTarget,null)}resizeAttachments(t,r){if(this.handle===null){this.width=t,this.height=r;return}super.resizeAttachments(t,r)}}function Rb(n){return n<34069?n+34069:n}function Mb(n){switch(n){case 36053:return"success";case 36054:return"Mismatched attachments";case 36055:return"No attachments";case 36057:return"Height/width mismatch";case 36061:return"Unsupported or split attachments";case 36182:return"Samples mismatch";default:return`${n}`}}class Db extends Wa{constructor(t,r){super(r);l(this,"device");l(this,"handle",null);l(this,"_framebuffer",null);this.device=t,this._setAutoCreatedCanvasId(`${this.device.id}-canvas`),this._configureDevice()}get[Symbol.toStringTag](){return"WebGLCanvasContext"}_configureDevice(){var r,i,s;(this.drawingBufferWidth!==((r=this._framebuffer)==null?void 0:r.width)||this.drawingBufferHeight!==((i=this._framebuffer)==null?void 0:i.height))&&((s=this._framebuffer)==null||s.resize([this.drawingBufferWidth,this.drawingBufferHeight]))}_getCurrentFramebuffer(){return this._framebuffer||(this._framebuffer=new bt(this.device,{id:"canvas-context-framebuffer",handle:null,width:this.drawingBufferWidth,height:this.drawingBufferHeight})),this._framebuffer}}class $b extends Rd{constructor(t,r={}){super(r);l(this,"device");l(this,"handle",null);l(this,"context2d");this.device=t;const i=`${this[Symbol.toStringTag]}(${this.id})`;if(!this.device.getDefaultCanvasContext().offscreenCanvas)throw new Error(`${i}: WebGL PresentationContext requires the default CanvasContext canvas to be an OffscreenCanvas`);const o=this.canvas.getContext("2d");if(!o)throw new Error(`${i}: Failed to create 2d presentation context`);this.context2d=o,this._setAutoCreatedCanvasId(`${this.device.id}-presentation-canvas`),this._configureDevice(),this._startObservers()}get[Symbol.toStringTag](){return"WebGLPresentationContext"}present(){this._resizeDrawingBufferIfNeeded(),this.device.submit();const t=this.device.getDefaultCanvasContext(),[r,i]=t.getDrawingBufferSize();if(!(this.drawingBufferWidth===0||this.drawingBufferHeight===0||r===0||i===0||t.canvas.width===0||t.canvas.height===0)){if(r!==this.drawingBufferWidth||i!==this.drawingBufferHeight||t.canvas.width!==this.drawingBufferWidth||t.canvas.height!==this.drawingBufferHeight)throw new Error(`${this[Symbol.toStringTag]}(${this.id}): Default canvas context size ${r}x${i} does not match presentation size ${this.drawingBufferWidth}x${this.drawingBufferHeight}`);this.context2d.clearRect(0,0,this.drawingBufferWidth,this.drawingBufferHeight),this.context2d.drawImage(t.canvas,0,0)}}_configureDevice(){}_getCurrentFramebuffer(t){const r=this.device.getDefaultCanvasContext();return r.setDrawingBufferSize(this.drawingBufferWidth,this.drawingBufferHeight),r.getCurrentFramebuffer(t)}}const kr={};function kb(n="id"){kr[n]=kr[n]||1;const e=kr[n]++;return`${n}-${e}`}class _t extends A{constructor(t,r={}){super(t,r);l(this,"device");l(this,"gl");l(this,"handle");l(this,"glTarget");l(this,"glUsage");l(this,"glIndexType",5123);l(this,"byteLength",0);l(this,"bytesUsed",0);this.device=t,this.gl=this.device.gl;const i=typeof r=="object"?r.handle:void 0;this.handle=i||this.gl.createBuffer(),t._setWebGLDebugMetadata(this.handle,this,{spector:{...this.props,data:typeof this.props.data}}),this.glTarget=Ub(this.props.usage),this.glUsage=Nb(this.props.usage),this.glIndexType=this.props.indexType==="uint32"?5125:5123,r.data?this._initWithData(r.data,r.byteOffset,r.byteLength):this._initWithByteLength(r.byteLength||0)}destroy(){!this.destroyed&&this.handle&&(this.removeStats(),this.props.handle?this.trackDeallocatedReferencedMemory("Buffer"):(this.trackDeallocatedMemory(),this.gl.deleteBuffer(this.handle)),this.destroyed=!0,this.handle=null)}_initWithData(t,r=0,i=t.byteLength+r){const s=this.glTarget;this.gl.bindBuffer(s,this.handle),this.gl.bufferData(s,i,this.glUsage),this.gl.bufferSubData(s,r,t),this.gl.bindBuffer(s,null),this.bytesUsed=i,this.byteLength=i,this._setDebugData(t,r,i),this.props.handle?this.trackReferencedMemory(i,"Buffer"):this.trackAllocatedMemory(i)}_initWithByteLength(t){let r=t;t===0&&(r=new Float32Array(0));const i=this.glTarget;return this.gl.bindBuffer(i,this.handle),this.gl.bufferData(i,r,this.glUsage),this.gl.bindBuffer(i,null),this.bytesUsed=t,this.byteLength=t,this._setDebugData(null,0,t),this.props.handle?this.trackReferencedMemory(t,"Buffer"):this.trackAllocatedMemory(t),this}write(t,r=0){const i=ArrayBuffer.isView(t)?t:new Uint8Array(t),s=36663;this.gl.bindBuffer(s,this.handle),this.gl.bufferSubData(s,r,i),this.gl.bindBuffer(s,null),this._setDebugData(t,r,t.byteLength)}async mapAndWriteAsync(t,r=0,i=this.byteLength-r){const s=new ArrayBuffer(i);await t(s,"copied"),this.write(s,r)}async readAsync(t=0,r){return this.readSyncWebGL(t,r)}async mapAndReadAsync(t,r=0,i){const s=await this.readAsync(r,i);return await t(s.buffer,"copied")}readSyncWebGL(t=0,r){r=r??this.byteLength-t;const i=new Uint8Array(r),s=0;return this.gl.bindBuffer(36662,this.handle),this.gl.getBufferSubData(36662,t,i,s,r),this.gl.bindBuffer(36662,null),this._setDebugData(i,t,r),i}}function Ub(n){return n&A.INDEX?34963:n&A.VERTEX?34962:n&A.UNIFORM?35345:34962}function Nb(n){return n&A.INDEX||n&A.VERTEX?35044:n&A.UNIFORM?35048:35044}function Fb(n){var r;const e=n.split(/\r?\n/),t=[];for(const i of e){if(i.length<=1)continue;const s=i.trim(),o=i.split(":"),a=(r=o[0])==null?void 0:r.trim();if(o.length===2){const[p,m]=o;if(!p||!m){t.push({message:s,type:Zt(a||"info"),lineNum:0,linePos:0});continue}t.push({message:m.trim(),type:Zt(p),lineNum:0,linePos:0});continue}const[c,u,f,...d]=o;if(!c||!u||!f){t.push({message:o.slice(1).join(":").trim()||s,type:Zt(a||"info"),lineNum:0,linePos:0});continue}let h=parseInt(f,10);Number.isNaN(h)&&(h=0);let g=parseInt(u,10);Number.isNaN(g)&&(g=0),t.push({message:d.join(":").trim(),type:Zt(c),lineNum:h,linePos:g})}return t}function Zt(n){const e=["warning","error","info"],t=n.toLowerCase();return e.includes(t)?t:"info"}class Gb extends wn{constructor(t,r){super(t,r);l(this,"device");l(this,"handle");l(this,"_compilationInfoLog","");this.device=t;const i=this.props.handle;switch(this.props.stage){case"vertex":this.handle=i||this.device.gl.createShader(35633);break;case"fragment":this.handle=i||this.device.gl.createShader(35632);break;default:throw new Error(this.props.stage)}t._setWebGLDebugMetadata(this.handle,this,{spector:this.props});const s=this._compile(this.source);s&&typeof s.catch=="function"&&s.catch(()=>{this.compilationStatus="error"})}destroy(){this.handle&&(this.removeStats(),this.device.gl.deleteShader(this.handle),this.destroyed=!0,this.handle.destroyed=!0)}get asyncCompilationStatus(){return this._waitForCompilationComplete().then(()=>(this._getCompilationStatus(),this.compilationStatus))}async getCompilationInfo(){return await this._waitForCompilationComplete(),this.getCompilationInfoSync()}getCompilationInfoSync(){const t=this._getCompilationInfoLog();return t?Fb(t):[]}getTranslatedSource(){const r=this.device.getExtension("WEBGL_debug_shaders").WEBGL_debug_shaders;return(r==null?void 0:r.getTranslatedShaderSource(this.handle))||null}_compile(t){t=t.startsWith("#version ")?t:`#version 300 es
${t}`;const{gl:r}=this.device;if(r.shaderSource(this.handle,t),r.compileShader(this.handle),!this.device.props.debug){this.compilationStatus="pending";return}if(!this.device.features.has("compilation-status-async-webgl")){if(this._getCompilationStatus(),this.debugShader(),this.compilationStatus==="error")throw new Error(this._getCompilationErrorMessage(t));return}return v.once(1,"Shader compilation is asynchronous")(),this._waitForCompilationComplete().then(()=>{v.info(2,`Shader ${this.id} - async compilation complete: ${this.compilationStatus}`)(),this._getCompilationStatus(),this.debugShader()})}async _waitForCompilationComplete(){const t=async s=>await new Promise(o=>setTimeout(o,s));if(!this.device.features.has("compilation-status-async-webgl")){await t(10);return}const{gl:i}=this.device;for(;;){if(i.getShaderParameter(this.handle,37297))return;await t(10)}}_getCompilationStatus(){this.compilationStatus=this.device.gl.getShaderParameter(this.handle,35713)?"success":"error",this.compilationStatus==="error"&&this._getCompilationInfoLog()}_getCompilationErrorMessage(t){var d;const r=`${this.props.stage} shader ${this.props.id}`,i=zb(this._getCompilationInfoLog()),s=this.getCompilationInfoSync(),o=s.find(h=>h.type==="error"&&h.message.trim())||s.find(h=>h.message.trim())||s.find(h=>h.type==="error")||s[0];if(!o)return i?`GLSL compilation errors in ${r}: ${i}`:`GLSL compilation errors in ${r}: WebGL did not provide a shader compiler log`;const a=o.lineNum?(d=t.split(/\r?\n/)[o.lineNum-1])==null?void 0:d.trim():void 0,c=o.lineNum?` line ${o.lineNum}`:"",u=a?`
Source: ${a}`:"",f=o.message.trim()||i||"WebGL did not provide a shader compiler log";return`GLSL compilation errors in ${r}:${c}: ${f}${u}`}_getCompilationInfoLog(){var r;const t=(r=this.device.gl.getShaderInfoLog(this.handle))==null?void 0:r.trim();return t&&(this._compilationInfoLog=t),this._compilationInfoLog}}function zb(n){var e;return(e=n.split(/\r?\n/).find(t=>t.trim()))==null?void 0:e.trim()}function Wb(n,e,t,r){if(Yb(e))return r(n);const i=n;i.pushState();try{return jb(n,e),rt(i.gl,t),r(n)}finally{i.popState()}}function jb(n,e){const t=n,{gl:r}=t;if(e.cullMode)switch(e.cullMode){case"none":r.disable(2884);break;case"front":r.enable(2884),r.cullFace(1028);break;case"back":r.enable(2884),r.cullFace(1029);break}if(e.frontFace&&r.frontFace(Ie("frontFace",e.frontFace,{ccw:2305,cw:2304})),e.unclippedDepth&&n.features.has("depth-clip-control")&&r.enable(34383),e.depthBias!==void 0&&(r.enable(32823),r.polygonOffset(e.depthBias,e.depthBiasSlopeScale||0)),e.provokingVertex&&n.features.has("provoking-vertex-webgl")){const s=t.getExtension("WEBGL_provoking_vertex").WEBGL_provoking_vertex,o=Ie("provokingVertex",e.provokingVertex,{first:36429,last:36430});s==null||s.provokingVertexWEBGL(o)}if((e.polygonMode||e.polygonOffsetLine)&&n.features.has("polygon-mode-webgl")){if(e.polygonMode){const s=t.getExtension("WEBGL_polygon_mode").WEBGL_polygon_mode,o=Ie("polygonMode",e.polygonMode,{fill:6914,line:6913});s==null||s.polygonModeWEBGL(1028,o),s==null||s.polygonModeWEBGL(1029,o)}e.polygonOffsetLine&&r.enable(10754)}if(n.features.has("shader-clip-cull-distance-webgl")&&(e.clipDistance0&&r.enable(12288),e.clipDistance1&&r.enable(12289),e.clipDistance2&&r.enable(12290),e.clipDistance3&&r.enable(12291),e.clipDistance4&&r.enable(12292),e.clipDistance5&&r.enable(12293),e.clipDistance6&&r.enable(12294),e.clipDistance7&&r.enable(12295)),e.depthWriteEnabled!==void 0&&r.depthMask(Hb("depthWriteEnabled",e.depthWriteEnabled)),e.depthCompare&&(e.depthCompare!=="always"?r.enable(2929):r.disable(2929),r.depthFunc(Si("depthCompare",e.depthCompare))),e.clearDepth!==void 0&&r.clearDepth(e.clearDepth),e.stencilWriteMask){const i=e.stencilWriteMask;r.stencilMaskSeparate(1028,i),r.stencilMaskSeparate(1029,i)}if(e.stencilReadMask&&v.warn("stencilReadMask not supported under WebGL"),e.stencilCompare){const i=e.stencilReadMask||4294967295,s=Si("depthCompare",e.stencilCompare);e.stencilCompare!=="always"?r.enable(2960):r.disable(2960),r.stencilFuncSeparate(1028,s,0,i),r.stencilFuncSeparate(1029,s,0,i)}if(e.stencilPassOperation&&e.stencilFailOperation&&e.stencilDepthFailOperation){const i=Ur("stencilPassOperation",e.stencilPassOperation),s=Ur("stencilFailOperation",e.stencilFailOperation),o=Ur("stencilDepthFailOperation",e.stencilDepthFailOperation);r.stencilOpSeparate(1028,s,o,i),r.stencilOpSeparate(1029,s,o,i)}switch(e.blend){case!0:r.enable(3042);break;case!1:r.disable(3042);break}if(e.blendColorOperation||e.blendAlphaOperation){const i=ko("blendColorOperation",e.blendColorOperation||"add"),s=ko("blendAlphaOperation",e.blendAlphaOperation||"add");r.blendEquationSeparate(i,s);const o=Kt("blendColorSrcFactor",e.blendColorSrcFactor||"one"),a=Kt("blendColorDstFactor",e.blendColorDstFactor||"zero"),c=Kt("blendAlphaSrcFactor",e.blendAlphaSrcFactor||"one"),u=Kt("blendAlphaDstFactor",e.blendAlphaDstFactor||"zero");r.blendFuncSeparate(o,a,c,u)}}function Si(n,e){return Ie(n,e,{never:512,less:513,equal:514,"less-equal":515,greater:516,"not-equal":517,"greater-equal":518,always:519})}function Ur(n,e){return Ie(n,e,{keep:7680,zero:0,replace:7681,invert:5386,"increment-clamp":7682,"decrement-clamp":7683,"increment-wrap":34055,"decrement-wrap":34056})}function ko(n,e){return Ie(n,e,{add:32774,subtract:32778,"reverse-subtract":32779,min:32775,max:32776})}function Kt(n,e,t="color"){return Ie(n,e,{one:1,zero:0,src:768,"one-minus-src":769,dst:774,"one-minus-dst":775,"src-alpha":770,"one-minus-src-alpha":771,"dst-alpha":772,"one-minus-dst-alpha":773,"src-alpha-saturated":776,constant:t==="color"?32769:32771,"one-minus-constant":t==="color"?32770:32772,src1:768,"one-minus-src1":769,"src1-alpha":770,"one-minus-src1-alpha":771})}function Vb(n,e){return`Illegal parameter ${e} for ${n}`}function Ie(n,e,t){if(!(e in t))throw new Error(Vb(n,e));return t[e]}function Hb(n,e){return e}function Yb(n){let e=!0;for(const t in n){e=!1;break}return e}function Mc(n){const e={};return n.addressModeU&&(e[10242]=Nr(n.addressModeU)),n.addressModeV&&(e[10243]=Nr(n.addressModeV)),n.addressModeW&&(e[32882]=Nr(n.addressModeW)),n.magFilter&&(e[10240]=Ei(n.magFilter)),(n.minFilter||n.mipmapFilter)&&(e[10241]=qb(n.minFilter||"linear",n.mipmapFilter)),n.lodMinClamp!==void 0&&(e[33082]=n.lodMinClamp),n.lodMaxClamp!==void 0&&(e[33083]=n.lodMaxClamp),n.type==="comparison-sampler"&&(e[34892]=34894),n.compare&&(e[34893]=Si("compare",n.compare)),n.maxAnisotropy&&(e[34046]=n.maxAnisotropy),e}function Nr(n){switch(n){case"clamp-to-edge":return 33071;case"repeat":return 10497;case"mirror-repeat":return 33648}}function Ei(n){switch(n){case"nearest":return 9728;case"linear":return 9729}}function qb(n,e="none"){if(!e)return Ei(n);switch(e){case"none":return Ei(n);case"nearest":switch(n){case"nearest":return 9984;case"linear":return 9985}break;case"linear":switch(n){case"nearest":return 9986;case"linear":return 9987}}}class Qb extends _n{constructor(t,r){super(t,r);l(this,"device");l(this,"handle");l(this,"parameters");this.device=t,this.parameters=Mc(r),this.handle=r.handle||this.device.gl.createSampler(),this._setSamplerParameters(this.parameters)}destroy(){this.handle&&(this.device.gl.deleteSampler(this.handle),this.handle=void 0)}toString(){return`Sampler(${this.id},${JSON.stringify(this.props)})`}_setSamplerParameters(t){for(const[r,i]of Object.entries(t)){const s=Number(r);switch(s){case 33082:case 33083:this.device.gl.samplerParameterf(this.handle,s,i);break;default:this.device.gl.samplerParameteri(this.handle,s,i);break}}}}function _e(n,e,t){if(Xb(e))return t(n);const{nocatch:r=!0}=e,i=Ce.get(n);i.push(),rt(n,e);let s;if(r)s=t(n),i.pop();else try{s=t(n)}finally{i.pop()}return s}function Xb(n){for(const e in n)return!1;return!0}class He extends yn{constructor(t,r){super(t,{...j.defaultProps,...r});l(this,"device");l(this,"gl");l(this,"handle");l(this,"texture");this.device=t,this.gl=this.device.gl,this.handle=null,this.texture=r.texture}}function Dc(n){return Zb[n]}const Zb={5124:"sint32",5125:"uint32",5122:"sint16",5123:"uint16",5120:"sint8",5121:"uint8",5126:"float32",5131:"float16",33635:"uint16",32819:"uint16",32820:"uint16",33640:"uint32",35899:"uint32",35902:"uint32",34042:"uint32",36269:"uint32"};class yt extends j{constructor(t,r){super(t,r,{byteAlignment:1});l(this,"device");l(this,"gl");l(this,"handle");l(this,"sampler");l(this,"view");l(this,"glTarget");l(this,"glFormat");l(this,"glType");l(this,"glInternalFormat");l(this,"compressed");l(this,"_textureUnit",0);l(this,"_framebuffer",null);l(this,"_framebufferAttachmentKey",null);this.device=t,this.gl=this.device.gl;const i=Rc(this.props.format);if(this.glTarget=e_(this.props.dimension),this.glInternalFormat=i.internalFormat,this.glFormat=i.format,this.glType=i.type,this.compressed=i.compressed,this.isHandleBorrowed&&this.props.handle===void 0)throw new Error("Borrowed WebGL textures require a texture handle");if(this.handle=this.props.handle||this.gl.createTexture(),this.device._setWebGLDebugMetadata(this.handle,this,{spector:this.props}),!this.isHandleBorrowed){this.gl.bindTexture(this.glTarget,this.handle);const{dimension:s,width:o,height:a,depth:c,mipLevels:u,glTarget:f,glInternalFormat:d}=this;if(!this.compressed)switch(s){case"2d":case"cube":this.gl.texStorage2D(f,u,d,o,a);break;case"2d-array":case"3d":this.gl.texStorage3D(f,u,d,o,a,c);break;default:throw new Error(s)}this.gl.bindTexture(this.glTarget,null),this._initializeData(r.data)}this.ownsHandle?this.trackAllocatedMemory(this.getAllocatedByteLength(),"Texture"):this.trackReferencedMemory(this.getAllocatedByteLength(),"Texture"),this.isHandleBorrowed||this.setSampler(this.props.sampler),this.view=new He(this.device,{...this.props,texture:this}),Object.seal(this)}destroy(){var t;this.handle&&((t=this._framebuffer)==null||t.destroy(),this._framebuffer=null,this._framebufferAttachmentKey=null,this.removeStats(),this.ownsHandle?(this.gl.deleteTexture(this.handle),this.trackDeallocatedMemory("Texture")):this.trackDeallocatedReferencedMemory("Texture"),this.destroyed=!0)}createView(t){return new He(this.device,{...t,texture:this})}clone(t){if(this.isHandleBorrowed&&t&&(t.width!==this.width||t.height!==this.height))throw new Error(`Cannot resize borrowed read-only ${this}`);return super.clone(t)}setSampler(t={}){this._assertWritable("set sampler parameters on"),super.setSampler(t);const r=Mc(this.sampler.props);this._setSamplerParameters(r)}copyExternalImage(t){this._assertWritable("copy external image data into");const r=this._normalizeCopyExternalImageOptions(t);if(r.sourceX||r.sourceY)throw new Error("WebGL does not support sourceX/sourceY)");const{glFormat:i,glType:s}=this,{image:o,depth:a,mipLevel:c,x:u,y:f,z:d,width:h,height:g}=r,p=st(this.glTarget,this.dimension,d),m=r.flipY?{37440:!0}:{};return this.gl.bindTexture(this.glTarget,this.handle),_e(this.gl,m,()=>{switch(this.dimension){case"2d":case"cube":this.gl.texSubImage2D(p,c,u,f,h,g,i,s,o);break;case"2d-array":case"3d":this.gl.texSubImage3D(p,c,u,f,d,h,g,a,i,s,o);break;default:}}),this.gl.bindTexture(this.glTarget,null),{width:r.width,height:r.height}}copyElementImage(t){this._assertWritable("copy element image data into");const r=this._normalizeCopyElementImageOptions(t),{glFormat:i}=this,{element:s,depth:o,mipLevel:a,sourceX:c,sourceY:u,sourceWidth:f,sourceHeight:d,x:h,y:g,z:p,width:m,height:b}=r,w=st(this.glTarget,this.dimension,p),_=r.flipY?{37440:!0}:{},y=this.gl;if(o!==1||this.dimension!=="2d"&&this.dimension!=="cube")throw new Error(`${this} copyElementImage only supports 2d and cube textures on WebGL`);if(a!==0||h!==0||g!==0)throw new Error(`${this} copyElementImage only supports full base-level uploads on WebGL`);if(typeof y.texElementImage2D!="function")throw new Error(`${this} copyElementImage is not supported by this WebGL implementation`);return this.gl.bindTexture(this.glTarget,this.handle),_e(this.gl,_,()=>{var x;(x=y.texElementImage2D)==null||x.call(y,w,i,s,{sx:c,sy:u,swidth:f??m,sheight:d??b,width:m,height:b})}),this.gl.bindTexture(this.glTarget,null),{width:r.width,height:r.height}}copyImageData(t){super.copyImageData(t)}readBuffer(t={},r){if(!r)throw new Error(`${this} readBuffer requires a destination buffer`);const i=this._getSupportedColorReadOptions(t),s=t.byteOffset??0,o=this.computeMemoryLayout(i);if(r.byteLength<s+o.byteLength)throw new Error(`${this} readBuffer target is too small (${r.byteLength} < ${s+o.byteLength})`);const a=r;this.gl.bindBuffer(35051,a.handle);try{this._readColorTextureLayers(i,o,c=>{this.gl.readPixels(i.x,i.y,i.width,i.height,this.glFormat,this.glType,s+c)})}finally{this.gl.bindBuffer(35051,null)}return r}async readDataAsync(t={}){throw new Error(`${this} readDataAsync is deprecated; use readBuffer() with an explicit destination buffer or DynamicTexture.readAsync()`)}writeBuffer(t,r={}){this._assertWritable("write buffer data into");const i=this._normalizeTextureWriteOptions(r),{width:s,height:o,depthOrArrayLayers:a,mipLevel:c,byteOffset:u,x:f,y:d,z:h}=i,{glFormat:g,glType:p,compressed:m}=this,b=st(this.glTarget,this.dimension,h);if(m)throw new Error("writeBuffer for compressed textures is not implemented in WebGL");const{bytesPerPixel:w}=this.device.getTextureFormatInfo(this.format),_=w?i.bytesPerRow/w:void 0,y={3317:this.byteAlignment,..._!==void 0?{3314:_}:{},32878:i.rowsPerImage};this.gl.bindTexture(this.glTarget,this.handle),this.gl.bindBuffer(35052,t.handle),_e(this.gl,y,()=>{switch(this.dimension){case"2d":case"cube":this.gl.texSubImage2D(b,c,f,d,s,o,g,p,u);break;case"2d-array":case"3d":this.gl.texSubImage3D(b,c,f,d,h,s,o,a,g,p,u);break;default:}}),this.gl.bindBuffer(35052,null),this.gl.bindTexture(this.glTarget,null)}writeData(t,r={}){this._assertWritable("write data into");const i=this._normalizeTextureWriteOptions(r),s=ArrayBuffer.isView(t)?t:new Uint8Array(t),{width:o,height:a,depthOrArrayLayers:c,mipLevel:u,x:f,y:d,z:h,byteOffset:g}=i,{glFormat:p,glType:m,compressed:b}=this,w=st(this.glTarget,this.dimension,h);let _;if(!b){const{bytesPerPixel:O}=this.device.getTextureFormatInfo(this.format);O&&(_=i.bytesPerRow/O)}const y=this.compressed?{}:{3317:this.byteAlignment,..._!==void 0?{3314:_}:{},32878:i.rowsPerImage},x=Jb(s,g),S=b?Kb(s,g):s,E=this._getMipLevelSize(u),C=f===0&&d===0&&h===0&&o===E.width&&a===E.height&&c===E.depthOrArrayLayers;this.gl.bindTexture(this.glTarget,this.handle),this.gl.bindBuffer(35052,null),_e(this.gl,y,()=>{switch(this.dimension){case"2d":case"cube":b?C?this.gl.compressedTexImage2D(w,u,p,o,a,0,S):this.gl.compressedTexSubImage2D(w,u,f,d,o,a,p,S):this.gl.texSubImage2D(w,u,f,d,o,a,p,m,s,x);break;case"2d-array":case"3d":b?C?this.gl.compressedTexImage3D(w,u,p,o,a,c,0,S):this.gl.compressedTexSubImage3D(w,u,f,d,h,o,a,c,p,S):this.gl.texSubImage3D(w,u,f,d,h,o,a,c,p,m,s,x);break;default:}}),this.gl.bindTexture(this.glTarget,null)}_getRowByteAlignment(t,r){return 1}_getFramebuffer(){return this._framebuffer||(this._framebuffer=this.device.createFramebuffer({id:`framebuffer-for-${this.id}`,width:this.width,height:this.height,colorAttachments:[this]})),this._framebuffer}readDataSyncWebGL(t={}){const r=this._getSupportedColorReadOptions(t),i=this.computeMemoryLayout(r),s=Dc(this.glType),o=Vi(s),a=new o(i.byteLength/o.BYTES_PER_ELEMENT);return this._readColorTextureLayers(r,i,c=>{const u=new o(a.buffer,a.byteOffset+c,i.bytesPerImage/o.BYTES_PER_ELEMENT);this.gl.readPixels(r.x,r.y,r.width,r.height,this.glFormat,this.glType,u)}),a.buffer}_readColorTextureLayers(t,r,i){const s=this._getFramebuffer(),o=r.bytesPerRow/r.bytesPerPixel,a={3333:this.byteAlignment,...o!==t.width?{3330:o}:{}},c=this.gl.getParameter(3074),u=this.gl.bindFramebuffer(36160,s.handle);try{this.gl.readBuffer(36064),_e(this.gl,a,()=>{for(let f=0;f<t.depthOrArrayLayers;f++)this._attachReadSubresource(s,t.mipLevel,t.z+f),i(f*r.bytesPerImage)})}finally{this.gl.bindFramebuffer(36160,u||null),this.gl.readBuffer(c)}}_attachReadSubresource(t,r,i){const s=`${r}:${i}`;if(this._framebufferAttachmentKey!==s){switch(this.dimension){case"2d":this.gl.framebufferTexture2D(36160,36064,3553,this.handle,r);break;case"cube":this.gl.framebufferTexture2D(36160,36064,st(this.glTarget,this.dimension,i),this.handle,r);break;case"2d-array":case"3d":this.gl.framebufferTextureLayer(36160,36064,this.handle,r,i);break;default:throw new Error(`${this} color readback does not support ${this.dimension} textures`)}if(this.device.props.debug){const o=Number(this.gl.checkFramebufferStatus(36160));if(o!==36053)throw new Error(`${t} incomplete for ${this} readback (${o})`)}this._framebufferAttachmentKey=s}}generateMipmapsWebGL(t){if(this._assertWritable("generate mipmaps for"),!(!(this.device.isTextureFormatRenderable(this.props.format)&&this.device.isTextureFormatFilterable(this.props.format))&&(v.warn(`${this} is not renderable or filterable, may not be able to generate mipmaps`)(),!(t!=null&&t.force))))try{this.gl.bindTexture(this.glTarget,this.handle),this.gl.generateMipmap(this.glTarget)}catch(i){v.warn(`Error generating mipmap for ${this}: ${i.message}`)()}finally{this.gl.bindTexture(this.glTarget,null)}}_setSamplerParameters(t){v.log(2,`${this.id} sampler parameters`,this.device.getGLKeys(t))(),this.gl.bindTexture(this.glTarget,this.handle);for(const[r,i]of Object.entries(t)){const s=Number(r),o=i;switch(s){case 33082:case 33083:this.gl.texParameterf(this.glTarget,s,o);break;case 10240:case 10241:this.gl.texParameteri(this.glTarget,s,o);break;case 10242:case 10243:case 32882:this.gl.texParameteri(this.glTarget,s,o);break;case 34046:this.device.features.has("texture-filterable-anisotropic-webgl")&&this.gl.texParameteri(this.glTarget,s,o);break;case 34892:case 34893:this.gl.texParameteri(this.glTarget,s,o);break}}this.gl.bindTexture(this.glTarget,null)}_getActiveUnit(){return this.gl.getParameter(34016)-33984}_bind(t){const{gl:r}=this;return t!==void 0&&(this._textureUnit=t,r.activeTexture(33984+t)),r.bindTexture(this.glTarget,this.handle),t}_unbind(t){const{gl:r}=this;return t!==void 0&&(this._textureUnit=t,r.activeTexture(33984+t)),r.bindTexture(this.glTarget,null),t}_assertWritable(t){if(this.isHandleBorrowed)throw new Error(`Cannot ${t} borrowed read-only ${this}`)}}function Kb(n,e=0){return e?new n.constructor(n.buffer,n.byteOffset+e,(n.byteLength-e)/n.BYTES_PER_ELEMENT):n}function Jb(n,e){if(e%n.BYTES_PER_ELEMENT!==0)throw new Error(`Texture byteOffset ${e} must align to typed array element size ${n.BYTES_PER_ELEMENT}`);return e/n.BYTES_PER_ELEMENT}function e_(n){switch(n){case"1d":break;case"2d":return 3553;case"3d":return 32879;case"cube":return 34067;case"2d-array":return 35866}throw new Error(n)}function st(n,e,t){return e==="cube"?34069+t:n}function t_(n,e,t,r){const i=n;let s=r;s===!0&&(s=1),s===!1&&(s=0);const o=typeof s=="number"?[s]:s;switch(t){case 35678:case 35680:case 35679:case 35682:case 36289:case 36292:case 36293:case 36298:case 36299:case 36300:case 36303:case 36306:case 36307:case 36308:case 36311:if(typeof r!="number")throw new Error("samplers must be set to integers");return n.uniform1i(e,r);case 5126:return n.uniform1fv(e,o);case 35664:return n.uniform2fv(e,o);case 35665:return n.uniform3fv(e,o);case 35666:return n.uniform4fv(e,o);case 5124:return n.uniform1iv(e,o);case 35667:return n.uniform2iv(e,o);case 35668:return n.uniform3iv(e,o);case 35669:return n.uniform4iv(e,o);case 35670:return n.uniform1iv(e,o);case 35671:return n.uniform2iv(e,o);case 35672:return n.uniform3iv(e,o);case 35673:return n.uniform4iv(e,o);case 5125:return i.uniform1uiv(e,o,1);case 36294:return i.uniform2uiv(e,o,2);case 36295:return i.uniform3uiv(e,o,3);case 36296:return i.uniform4uiv(e,o,4);case 35674:return n.uniformMatrix2fv(e,!1,o);case 35675:return n.uniformMatrix3fv(e,!1,o);case 35676:return n.uniformMatrix4fv(e,!1,o);case 35685:return i.uniformMatrix2x3fv(e,!1,o);case 35686:return i.uniformMatrix2x4fv(e,!1,o);case 35687:return i.uniformMatrix3x2fv(e,!1,o);case 35688:return i.uniformMatrix3x4fv(e,!1,o);case 35689:return i.uniformMatrix4x2fv(e,!1,o);case 35690:return i.uniformMatrix4x3fv(e,!1,o)}throw new Error("Illegal uniform")}function n_(n){return s_[n]}function ps(n){return i_[n]}function $c(n){return!!kc[n]}function r_(n){return kc[n]}const i_={5126:"f32",35664:"vec2<f32>",35665:"vec3<f32>",35666:"vec4<f32>",5124:"i32",35667:"vec2<i32>",35668:"vec3<i32>",35669:"vec4<i32>",5125:"u32",36294:"vec2<u32>",36295:"vec3<u32>",36296:"vec4<u32>",35670:"f32",35671:"vec2<f32>",35672:"vec3<f32>",35673:"vec4<f32>",35674:"mat2x2<f32>",35685:"mat2x3<f32>",35686:"mat2x4<f32>",35687:"mat3x2<f32>",35675:"mat3x3<f32>",35688:"mat3x4<f32>",35689:"mat4x2<f32>",35690:"mat4x3<f32>",35676:"mat4x4<f32>"},kc={35678:{viewDimension:"2d",sampleType:"float"},35680:{viewDimension:"cube",sampleType:"float"},35679:{viewDimension:"3d",sampleType:"float"},35682:{viewDimension:"3d",sampleType:"depth"},36289:{viewDimension:"2d-array",sampleType:"float"},36292:{viewDimension:"2d-array",sampleType:"depth"},36293:{viewDimension:"cube",sampleType:"float"},36298:{viewDimension:"2d",sampleType:"sint"},36299:{viewDimension:"3d",sampleType:"sint"},36300:{viewDimension:"cube",sampleType:"sint"},36303:{viewDimension:"2d-array",sampleType:"uint"},36306:{viewDimension:"2d",sampleType:"uint"},36307:{viewDimension:"3d",sampleType:"uint"},36308:{viewDimension:"cube",sampleType:"uint"},36311:{viewDimension:"2d-array",sampleType:"uint"}},s_={uint8:5121,sint8:5120,unorm8:5121,snorm8:5120,uint16:5123,sint16:5122,unorm16:5123,snorm16:5122,uint32:5125,sint32:5124,float16:5131,float32:5126};function o_(n,e,t={}){const r={attributes:[],bindings:[]};r.attributes=a_(n,e);const i=l_(n,e,t);for(const c of i){const u=c.uniforms.map(f=>({name:f.name,format:f.format,byteOffset:f.byteOffset,byteStride:f.byteStride,arrayLength:f.arrayLength}));r.bindings.push({type:"uniform",name:c.name,group:0,location:c.location,visibility:(c.vertex?1:0)|(c.fragment?2:0),minBindingSize:c.byteLength,uniforms:u})}const s=u_(n,e);let o=0;for(const c of s)if($c(c.type)){const{viewDimension:u,sampleType:f}=r_(c.type);r.bindings.push({type:"texture",name:c.name,group:0,location:o,viewDimension:u,sampleType:f}),c.textureUnit=o,o+=1}s.length&&(r.uniforms=s);const a=c_(n,e);return a!=null&&a.length&&(r.varyings=a),r}function a_(n,e){const t=[],r=n.getProgramParameter(e,35721);for(let i=0;i<r;i++){const s=n.getActiveAttrib(e,i);if(!s)throw new Error("activeInfo");const{name:o,type:a}=s,c=n.getAttribLocation(e,o);if(c>=0){const u=ps(a),f=/instance/i.test(o)?"instance":"vertex";t.push({name:o,location:c,stepMode:f,type:u})}}return t.sort((i,s)=>i.location-s.location),t}function c_(n,e){const t=[],r=n.getProgramParameter(e,35971);for(let i=0;i<r;i++){const s=n.getTransformFeedbackVarying(e,i);if(!s)throw new Error("activeInfo");const{name:o,type:a,size:c}=s,u=ps(a),{type:f,components:d}=Zi(u);t.push({location:i,name:o,type:f,size:c*d})}return t.sort((i,s)=>i.location-s.location),t}function u_(n,e){const t=[],r=n.getProgramParameter(e,35718);for(let i=0;i<r;i++){const s=n.getActiveUniform(e,i);if(!s)throw new Error("activeInfo");const{name:o,size:a,type:c}=s,{name:u,isArray:f}=b_(o);let d=n.getUniformLocation(e,u);const h={location:d,name:u,size:a,type:c,isArray:f};if(t.push(h),h.size>1)for(let g=0;g<h.size;g++){const p=`${u}[${g}]`;d=n.getUniformLocation(e,p);const m={...h,name:p,location:d};t.push(m)}}return t}function l_(n,e,t){const r=[],i=d_(n,e,t);for(const[o,a]of i){r.push(a);try{const c=Uo(n,e,o,a.name);f_(c,a)}catch(c){const u=c instanceof Error?c.message:String(c);v.once(0,`WebGL uniform block reflection failed for "${a.name}"; using supplied std140 metadata. ${u}`)()}}const s=n.getProgramParameter(e,35382);if(!Number.isInteger(s)||s<0)throw new Error(`Failed to reflect WebGL uniform blocks: ACTIVE_UNIFORM_BLOCKS returned ${String(s)}`);for(let o=0;o<s;o++)i.has(o)||r.push(Uo(n,e,o));return r.sort((o,a)=>o.location-a.location),r}function f_(n,e){for(const t of n.uniforms){const r=e.uniforms.find(i=>t.name===i.name||t.name.endsWith(`.${i.name}`));if(!r)throw new Error(`Failed to validate WebGL uniform block "${e.name}": reflected unexpected member "${t.name}"`);if(t.format!==r.format||t.arrayLength!==r.arrayLength||t.byteOffset!==r.byteOffset||t.byteStride!==r.byteStride)throw new Error(`Failed to validate WebGL uniform block "${e.name}": reflected layout for "${t.name}" does not match supplied std140 metadata`)}}function d_(n,e,t){var s;const r=new Map;for(const o of t.uniformBlockLayouts||[])r.set(o.name,g_(o));for(const o of((s=t.shaderLayout)==null?void 0:s.bindings)||[])m_(o)&&r.set(o.name,o);const i=new Map;for(const o of r.values()){const a=h_(n,e,o.name);if(!a)continue;const{blockIndex:c,blockName:u}=a;if(i.has(c))throw new Error(`Multiple supplied uniform block layouts resolve to active WebGL block "${u}"`);i.set(c,{name:u,location:c,byteLength:o.minBindingSize,vertex:!!(o.visibility&&o.visibility&1),fragment:!!(o.visibility&&o.visibility&2),uniformCount:o.uniforms.length,uniforms:o.uniforms.map(f=>({...f}))})}return i}function h_(n,e,t){const r=t.endsWith("Uniforms")?[t,t.slice(0,-8)]:[t,`${t}Uniforms`];for(const i of r){const s=n.getUniformBlockIndex(e,i);if(s!==4294967295){if(!Number.isInteger(s)||s<0)throw new Error(`Failed to resolve WebGL uniform block "${i}": getUniformBlockIndex returned ${String(s)}`);return{blockIndex:s,blockName:i}}}return null}function Uo(n,e,t,r){const i=r||n.getActiveUniformBlockName(e,t);if(!i)throw new Error(`Failed to reflect WebGL uniform block at index ${t}: missing block name`);const s=(y,x)=>{const S=n.getActiveUniformBlockParameter(e,t,y);if(S==null)throw new Error(`Failed to reflect WebGL uniform block "${i}": ${x} returned null`);return S},o=Ae(s(35391,"UNIFORM_BLOCK_BINDING"),i,"UNIFORM_BLOCK_BINDING",0),a=Ae(s(35392,"UNIFORM_BLOCK_DATA_SIZE"),i,"UNIFORM_BLOCK_DATA_SIZE",0),c=Ae(s(35394,"UNIFORM_BLOCK_ACTIVE_UNIFORMS"),i,"UNIFORM_BLOCK_ACTIVE_UNIFORMS",0),u=Uc(s(35395,"UNIFORM_BLOCK_ACTIVE_UNIFORM_INDICES"),i,"UNIFORM_BLOCK_ACTIVE_UNIFORM_INDICES",c),f=ot(n,e,u,35383,"UNIFORM_TYPE",i,c),d=ot(n,e,u,35384,"UNIFORM_SIZE",i,c),h=ot(n,e,u,35386,"UNIFORM_BLOCK_INDEX",i,c),g=ot(n,e,u,35387,"UNIFORM_OFFSET",i,c),p=ot(n,e,u,35388,"UNIFORM_ARRAY_STRIDE",i,c),m=[];for(let y=0;y<c;y++){if(h[y]!==t)throw new Error(`Failed to reflect WebGL uniform block "${i}": active uniform index ${u[y]} belongs to block ${h[y]}, expected ${t}`);const x=u[y],S=n.getActiveUniform(e,x);if(!S)throw new Error(`Failed to reflect WebGL uniform block "${i}": getActiveUniform(${x}) returned null`);const E=Ae(f[y],i,`UNIFORM_TYPE[${y}]`,1),C=Ae(d[y],i,`UNIFORM_SIZE[${y}]`,1),O=Ae(g[y],i,`UNIFORM_OFFSET[${y}]`,0),G=Ae(p[y],i,`UNIFORM_ARRAY_STRIDE[${y}]`,0);if(S.type!==E||S.size!==C)throw new Error(`Failed to reflect WebGL uniform block "${i}": getActiveUniform(${x}) disagrees with getActiveUniforms`);m.push({name:S.name,format:ps(E),arrayLength:C,byteOffset:O,byteStride:G})}const b={name:i,location:o,byteLength:a,vertex:!!s(35396,"UNIFORM_BLOCK_REFERENCED_BY_VERTEX_SHADER"),fragment:!!s(35398,"UNIFORM_BLOCK_REFERENCED_BY_FRAGMENT_SHADER"),uniformCount:c,uniforms:m},w=new Set(b.uniforms.map(y=>y.name.split(".")[0]).filter(y=>!!y)),_=b.name.replace(/Uniforms$/,"");if(w.size===1&&!w.has(b.name)&&!w.has(_)){const[y]=w;v.warn(`Uniform block "${b.name}" uses GLSL instance "${y}". luma.gl binds uniform buffers by block name ("${b.name}") and alias ("${_}"). Prefer matching the instance name to one of those to avoid confusing silent mismatches.`)()}return b}function ot(n,e,t,r,i,s,o){const a=n.getActiveUniforms(e,t,r);if(a===null)throw new Error(`Failed to reflect WebGL uniform block "${s}": ${i} returned null`);return Uc(a,s,i,o)}function Uc(n,e,t,r){if(!Array.isArray(n)&&!ArrayBuffer.isView(n))throw new Error(`Failed to reflect WebGL uniform block "${e}": ${t} returned a non-array value`);const i=Array.from(n);if(i.length!==r||i.some(s=>!Number.isInteger(s)))throw new Error(`Failed to reflect WebGL uniform block "${e}": ${t} returned ${i.length} invalid values, expected ${r}`);return i}function Ae(n,e,t,r){if(!Number.isInteger(n)||n<r)throw new Error(`Failed to reflect WebGL uniform block "${e}": ${t} returned ${String(n)}`);return n}function g_(n){const e=Ji(n.uniformTypes,{layout:"std140"}),t=p_(n.uniformTypes,e.fields);return{type:"uniform",name:n.name,group:0,location:0,minBindingSize:e.byteLength,uniforms:t}}function p_(n,e){const t=[],r=(s,o)=>{if(typeof o=="string"){const a=e[s];if(!a)throw new Error(`Missing std140 layout field ${s}`);t.push({name:s,format:a.shaderType,arrayLength:1,byteOffset:a.offset*4,byteStride:0});return}if(Array.isArray(o)){i(s,o[0],o[1]);return}for(const[a,c]of Object.entries(o))r(`${s}.${a}`,c)},i=(s,o,a)=>{if(typeof o=="string"){const c=e[`${s}[0]`],u=a>1?e[`${s}[1]`]:void 0;if(!c)throw new Error(`Missing std140 array layout field ${s}[0]`);t.push({name:`${s}[0]`,format:c.shaderType,arrayLength:a,byteOffset:c.offset*4,byteStride:u?(u.offset-c.offset)*4:0});return}if(Array.isArray(o))throw new Error(`Nested uniform arrays are not supported for ${s}`);for(const[c,u]of Object.entries(o)){if(typeof u!="string")throw new Error(`Composite uniform array members are not supported for ${s}`);const f=`${s}[0].${c}`,d=`${s}[1].${c}`,h=e[f],g=a>1?e[d]:void 0;if(!h)throw new Error(`Missing std140 array layout field ${f}`);t.push({name:f,format:h.shaderType,arrayLength:a,byteOffset:h.offset*4,byteStride:g?(g.offset-h.offset)*4:0})}};for(const[s,o]of Object.entries(n))r(s,o);return t}function m_(n){return n.type==="uniform"&&Number.isInteger(n.minBindingSize)&&n.minBindingSize>=0&&Array.isArray(n.uniforms)&&n.uniforms.every(e=>typeof e.name=="string"&&typeof e.format=="string"&&Number.isInteger(e.arrayLength)&&e.arrayLength>0&&Number.isInteger(e.byteOffset)&&e.byteOffset>=0&&Number.isInteger(e.byteStride)&&e.byteStride>=0)}function b_(n){if(n[n.length-1]!=="]")return{name:n,length:1,isArray:!1};const t=/([^[]*)(\[[0-9]+\])?/.exec(n);return{name:bn(t==null?void 0:t[1],`Failed to parse GLSL uniform name ${n}`),length:t!=null&&t[2]?1:0,isArray:!!(t!=null&&t[2])}}class __ extends ye{constructor(t,r){super(t,r);l(this,"device");l(this,"handle");l(this,"vs");l(this,"fs");l(this,"introspectedLayout");l(this,"bindings",{});l(this,"uniforms",{});l(this,"varyings",null);l(this,"_uniformCount",0);l(this,"_uniformSetters",{});this.device=t;const i=this.sharedRenderPipeline||this.device._createSharedRenderPipelineWebGL(r);this.sharedRenderPipeline=i,this.handle=i.handle,this.vs=i.vs,this.fs=i.fs,this.linkStatus=i.linkStatus,this.introspectedLayout=o_(this.device.gl,this.handle,{uniformBlockLayouts:r._uniformBlockLayouts,shaderLayout:r.shaderLayout}),this.device._setWebGLDebugMetadata(this.handle,this,{spector:{id:this.props.id}}),this.shaderLayout=r.shaderLayout?y_(this.introspectedLayout,r.shaderLayout):this.introspectedLayout}get[Symbol.toStringTag](){return"WEBGLRenderPipeline"}destroy(){this.destroyed||(this.sharedRenderPipeline&&!this.props._sharedRenderPipeline&&this.sharedRenderPipeline.destroy(),this.destroyResource())}setBindings(t,r){const i=oi(Xi(this.shaderLayout,t));for(const[s,o]of Object.entries(i)){const a=Nc(this.shaderLayout,s);if(a){switch(o||v.warn(`Unsetting binding "${s}" in render pipeline "${this.id}"`)(),a.type){case"uniform":if(!(o instanceof _t)&&!(o.buffer instanceof _t))throw new Error("buffer value");break;case"texture":if(!(o instanceof He||o instanceof yt||o instanceof bt))throw new Error(`${this} Bad texture binding for ${s}`);break;case"sampler":v.warn(`Ignoring sampler ${s}`)();break;default:throw new Error(a.type)}this.bindings[s]=o}else{const c=this.shaderLayout.bindings.map(u=>`"${u.name}"`).join(", ");r!=null&&r.disableWarnings||v.warn(`No binding "${s}" in render pipeline "${this.id}", expected one of ${c}`,o)()}}}draw(t){const r=t.renderPass,i=t.bindGroups?oi(t.bindGroups):t.bindings||this.bindings;return r.setPipeline(this),r.setBindings(i),r.setVertexArray(t.vertexArray),r.draw({parameters:t.parameters,topology:t.topology,isInstanced:t.isInstanced,vertexCount:t.vertexCount,indexCount:t.indexCount,instanceCount:t.instanceCount,firstVertex:t.firstVertex,firstIndex:t.firstIndex,firstInstance:t.firstInstance,baseVertex:t.baseVertex,transformFeedback:t.transformFeedback,uniforms:t.uniforms})}_areTexturesRenderable(t){let r=!0;for(const i of this.shaderLayout.bindings)No(t,i.name)||(v.warn(`Binding ${i.name} not found in ${this.id}`)(),r=!1);return r}_applyBindings(t,r){if(this._syncLinkStatus(),this.linkStatus!=="success")return;const{gl:i}=this.device;i.useProgram(this.handle);let s=0,o=0;for(const a of this.shaderLayout.bindings){const c=No(t,a.name);if(!c)throw new Error(`No value for binding ${a.name} in ${this.id}`);switch(a.type){case"uniform":const{name:u}=a,f=i.getUniformBlockIndex(this.handle,u);if(f===4294967295)throw new Error(`Invalid uniform block name ${u}`);if(i.uniformBlockBinding(this.handle,f,o),c instanceof _t)i.bindBufferBase(35345,o,c.handle);else{const h=c;i.bindBufferRange(35345,o,h.buffer.handle,h.offset||0,h.size||h.buffer.byteLength-(h.offset||0))}o+=1;break;case"texture":if(!(c instanceof He||c instanceof yt||c instanceof bt))throw new Error("texture");let d;if(c instanceof He)d=c.texture;else if(c instanceof yt)d=c;else if(c instanceof bt&&c.colorAttachments[0]instanceof He)v.warn("Passing framebuffer in texture binding may be deprecated. Use fbo.colorAttachments[0] instead")(),d=c.colorAttachments[0].texture;else throw new Error("No texture");i.activeTexture(33984+s),i.bindTexture(d.glTarget,d.handle),s+=1;break;case"sampler":break;case"storage":case"read-only-storage":throw new Error(`binding type '${a.type}' not supported in WebGL`)}}}_applyUniforms(t){for(const r of this.shaderLayout.uniforms||[]){const{name:i,location:s,type:o,textureUnit:a}=r,c=t[i]??a;c!==void 0&&t_(this.device.gl,s,o,c)}}_syncLinkStatus(){this.linkStatus=this.sharedRenderPipeline.linkStatus}}function y_(n,e){const t={...n,attributes:n.attributes.map(r=>({...r})),bindings:n.bindings.map(r=>({...r}))};for(const r of(e==null?void 0:e.attributes)||[]){const i=t.attributes.find(s=>s.name===r.name);i?(i.type=r.type||i.type,i.stepMode=r.stepMode||i.stepMode):v.warn(`shader layout attribute ${r.name} not present in shader`)}for(const r of(e==null?void 0:e.bindings)||[]){const i=Nc(t,r.name);if(!i){v.warn(`shader layout binding ${r.name} not present in shader`);continue}Object.assign(i,r)}return t}function Nc(n,e){return n.bindings.find(t=>t.name===e||t.name===`${e}Uniforms`||`${t.name}Uniforms`===e)}function No(n,e){return n[e]||n[`${e}Uniforms`]||n[e.replace(/Uniforms$/,"")]}const Fo=4;class w_ extends Gd{constructor(t,r){super(t,r);l(this,"device");l(this,"handle");l(this,"vs");l(this,"fs");l(this,"linkStatus","pending");this.device=t,this.handle=r.handle||this.device.gl.createProgram(),this.vs=r.vs,this.fs=r.fs,r.varyings&&r.varyings.length>0&&this.device.gl.transformFeedbackVaryings(this.handle,r.varyings,r.bufferMode||35981),this._linkShaders()}destroy(){this.destroyed||(this.device.gl.useProgram(null),this.device.gl.deleteProgram(this.handle),this.handle.destroyed=!0,this.destroyResource())}async _linkShaders(){const{gl:t}=this.device;if(t.attachShader(this.handle,this.vs.handle),t.attachShader(this.handle,this.fs.handle),v.time(Fo,`linkProgram for ${this.id}`)(),t.linkProgram(this.handle),v.timeEnd(Fo,`linkProgram for ${this.id}`)(),!this.device.features.has("compilation-status-async-webgl")){const i=this._getLinkStatus();this._reportLinkStatus(i);return}v.once(1,"RenderPipeline linking is asynchronous")(),await this._waitForLinkComplete(),v.info(2,`RenderPipeline ${this.id} - async linking complete: ${this.linkStatus}`)();const r=this._getLinkStatus();this._reportLinkStatus(r)}async _reportLinkStatus(t){var r;switch(t){case"success":return;default:const i=t==="link-error"?"Link error":"Validation error";switch(this.vs.compilationStatus){case"error":throw this.vs.debugShader(),new Error(`${this} ${i} during compilation of ${this.vs}`);case"pending":await this.vs.asyncCompilationStatus,this.vs.debugShader();break}switch((r=this.fs)==null?void 0:r.compilationStatus){case"error":throw this.fs.debugShader(),new Error(`${this} ${i} during compilation of ${this.fs}`);case"pending":await this.fs.asyncCompilationStatus,this.fs.debugShader();break}const s=this.device.gl.getProgramInfoLog(this.handle);this.device.reportError(new Error(`${i} during ${t}: ${s}`),this)(),this.device.debug()}}_getLinkStatus(){const{gl:t}=this.device;return t.getProgramParameter(this.handle,35714)?(this._initializeSamplerUniforms(),t.validateProgram(this.handle),t.getProgramParameter(this.handle,35715)?(this.linkStatus="success","success"):(this.linkStatus="error","validation-error")):(this.linkStatus="error","link-error")}_initializeSamplerUniforms(){const{gl:t}=this.device;t.useProgram(this.handle);let r=0;const i=t.getProgramParameter(this.handle,35718);for(let s=0;s<i;s++){const o=t.getActiveUniform(this.handle,s);if(o&&$c(o.type)){const a=o.name.endsWith("[0]"),c=a?o.name.slice(0,-3):o.name,u=t.getUniformLocation(this.handle,c);u!==null&&(r=this._assignSamplerUniform(u,o,a,r))}}}_assignSamplerUniform(t,r,i,s){const{gl:o}=this.device;if(i&&r.size>1){const a=Int32Array.from({length:r.size},(c,u)=>s+u);return o.uniform1iv(t,a),s+r.size}return o.uniform1i(t,s),s+1}async _waitForLinkComplete(){const t=async s=>await new Promise(o=>setTimeout(o,s));if(!this.device.features.has("compilation-status-async-webgl")){await t(10);return}const{gl:i}=this.device;for(;;){if(i.getProgramParameter(this.handle,37297))return;await t(10)}}}class v_ extends ui{constructor(t,r={}){super(t,r);l(this,"device");l(this,"handle",null);l(this,"commands",[]);this.device=t}_executeCommands(t=this.commands){for(const r of t)switch(r.name){case"copy-buffer-to-buffer":x_(this.device,r.options);break;case"copy-buffer-to-texture":S_(this.device,r.options);break;case"copy-texture-to-buffer":E_(this.device,r.options);break;case"copy-texture-to-texture":A_(this.device,r.options);break;default:throw new Error(r.name)}}}function x_(n,e){const t=e.sourceBuffer,r=e.destinationBuffer;n.gl.bindBuffer(36662,t.handle),n.gl.bindBuffer(36663,r.handle),n.gl.copyBufferSubData(36662,36663,e.sourceOffset??0,e.destinationOffset??0,e.size),n.gl.bindBuffer(36662,null),n.gl.bindBuffer(36663,null)}function S_(n,e){const{sourceBuffer:t,byteOffset:r=0,destinationTexture:i,mipLevel:s=0,origin:o=[0,0,0],aspect:a="all",bytesPerRow:c,rowsPerImage:u,size:f}=e;if(a!=="all")throw new Error("copyBufferToTexture aspect is not supported in WebGL");i.writeBuffer(t,{byteOffset:r,bytesPerRow:c,rowsPerImage:u,mipLevel:s,x:o[0]??0,y:o[1]??0,z:o[2]??0,width:f[0],height:f[1],depthOrArrayLayers:f[2]})}function E_(n,e){const{sourceTexture:t,mipLevel:r=0,aspect:i="all",width:s=e.sourceTexture.width,height:o=e.sourceTexture.height,depthOrArrayLayers:a,origin:c=[0,0,0],destinationBuffer:u,byteOffset:f=0,bytesPerRow:d,rowsPerImage:h}=e;if(t instanceof j){t.readBuffer({x:c[0]??0,y:c[1]??0,z:c[2]??0,width:s,height:o,depthOrArrayLayers:a,mipLevel:r,aspect:i,byteOffset:f},u);return}if(i!=="all")throw new Error("aspect not supported in WebGL");if(r!==0||a!==void 0||d||h)throw new Error("not implemented");const{framebuffer:g,destroyFramebuffer:p}=Fc(t);let m;try{const b=u,w=s||g.width,_=o||g.height,y=bn(g.colorAttachments[0]),x=Rc(y.texture.props.format),S=x.format,E=x.type;n.gl.bindBuffer(35051,b.handle),m=n.gl.bindFramebuffer(36160,g.handle),n.gl.readPixels(c[0],c[1],w,_,S,E,f)}finally{n.gl.bindBuffer(35051,null),m!==void 0&&n.gl.bindFramebuffer(36160,m),p&&g.destroy()}}function A_(n,e){const{sourceTexture:t,destinationMipLevel:r=0,origin:i=[0,0],destinationOrigin:s=[0,0,0],destinationTexture:o}=e;let{width:a=e.destinationTexture.width,height:c=e.destinationTexture.height}=e;const{framebuffer:u,destroyFramebuffer:f}=Fc(t),[d=0,h=0]=i,[g,p,m]=s,b=n.gl.bindFramebuffer(36160,u.handle);let w,_;if(o instanceof yt)w=o,a=Number.isFinite(a)?a:w.width,c=Number.isFinite(c)?c:w.height,w._bind(0),_=w.glTarget;else throw new Error("invalid destination");switch(_){case 3553:case 34067:n.gl.copyTexSubImage2D(_,r,g,p,d,h,a,c);break;case 35866:case 32879:n.gl.copyTexSubImage3D(_,r,g,p,m,d,h,a,c);break}w&&w._unbind(),n.gl.bindFramebuffer(36160,b),f&&u.destroy()}function Fc(n){if(n instanceof j){const{width:e,height:t,id:r}=n;return{framebuffer:n.device.createFramebuffer({id:`framebuffer-for-${r}`,width:e,height:t,colorAttachments:[n]}),destroyFramebuffer:!0}}return{framebuffer:n,destroyFramebuffer:!1}}function T_(n){switch(n){case"point-list":return 0;case"line-list":return 1;case"line-strip":return 3;case"triangle-list":return 4;case"triangle-strip":return 5;default:throw new Error(n)}}function L_(n){switch(n){case"point-list":return 0;case"line-list":return 1;case"line-strip":return 1;case"triangle-list":return 4;case"triangle-strip":return 4;default:throw new Error(n)}}const P_=[1,2,4,8];class B_ extends ai{constructor(t,r){var a;super(t,r);l(this,"device");l(this,"handle",null);l(this,"glParameters",{});l(this,"pipeline",null);l(this,"bindings",{});l(this,"bindingsPipeline",null);l(this,"vertexArray",null);this.device=t;const i=this.props.framebuffer,s=!i||i.handle===null;s&&t.getDefaultCanvasContext()._resizeDrawingBufferIfNeeded();let o;if(!((a=r==null?void 0:r.parameters)!=null&&a.viewport))if(!s&&i){const{width:c,height:u}=i;o=[0,0,c,u]}else{const[c,u]=t.getDefaultCanvasContext().getDrawingBufferSize();o=[0,0,c,u]}if(this.device.pushState(),this.setParameters({viewport:o,...this.props.parameters}),!s&&(i!=null&&i.colorAttachments.length)){const c=i.colorAttachments.map((u,f)=>36064+f);this.device.gl.drawBuffers(c)}else s&&this.device.gl.drawBuffers([1029]);this.clear(),this.props.timestampQuerySet&&this.props.beginTimestampIndex!==void 0&&this.props.timestampQuerySet.writeTimestamp(this.props.beginTimestampIndex)}end(){this.destroyed||(this.props.timestampQuerySet&&this.props.endTimestampIndex!==void 0&&this.props.timestampQuerySet.writeTimestamp(this.props.endTimestampIndex),this.device.popState(),this.destroy())}pushDebugGroup(t){}popDebugGroup(){}insertDebugMarker(t){}executeBundles(t){throw new Error("Render bundles are only supported in WebGPU")}setParameters(t={}){const r={...this.glParameters};r.framebuffer=this.props.framebuffer||null,this.props.depthReadOnly&&(r.depthMask=!this.props.depthReadOnly),r.stencilMask=this.props.stencilReadOnly?0:1,r[35977]=this.props.discard,t.viewport&&(t.viewport.length>=6?(r.viewport=t.viewport.slice(0,4),r.depthRange=[t.viewport[4],t.viewport[5]]):r.viewport=t.viewport),t.scissorRect&&(r.scissorTest=!0,r.scissor=t.scissorRect),t.blendConstant&&(r.blendColor=t.blendConstant),t.stencilReference!==void 0&&(r[2967]=t.stencilReference,r[36003]=t.stencilReference),"colorMask"in t&&(r.colorMask=P_.map(i=>!!(i&t.colorMask))),this.glParameters=r,rt(this.device.gl,r)}setPipeline(t){this.pipeline=t}setBindings(t,r){if(!this.pipeline)throw new Error("RenderPass.setPipeline() must be called before setBindings()");this.bindings=oi(Xi(this.pipeline.shaderLayout,t)),this.bindingsPipeline=this.pipeline}setVertexArray(t){this.vertexArray=t}draw(t){var y;const r=this.pipeline,i=this.vertexArray;if(!r)throw new Error("RenderPass.setPipeline() must be called before draw()");if(!i)throw new Error("RenderPass.setVertexArray() must be called before draw()");if(r.shaderLayout.bindings.length>0&&this.bindingsPipeline!==r)throw new Error("RenderPass.setBindings() must be called after setPipeline() before draw()");r._syncLinkStatus();const{parameters:s=r.props.parameters,topology:o=r.props.topology,vertexCount:a,indexCount:c,instanceCount:u,isInstanced:f=!1,firstVertex:d=0,transformFeedback:h,uniforms:g=r.uniforms}=t,p=T_(o),m=!!i.indexBuffer,b=(y=i.indexBuffer)==null?void 0:y.glIndexType,w=c??a??0;if(r.linkStatus!=="success")return v.info(2,`RenderPipeline:${r.id}.draw() aborted - waiting for shader linking`)(),!1;if(!r._areTexturesRenderable(this.bindings))return v.info(2,`RenderPipeline:${r.id}.draw() aborted - textures not yet loaded`)(),!1;this.device.gl.useProgram(r.handle),i.bindBeforeRender(this);const _=h;return _&&_.begin(r.props.topology),r._applyBindings(this.bindings,{disableWarnings:r.props.disableWarnings}),r._applyUniforms(g),Wb(this.device,s,this.glParameters,()=>{m&&f?this.device.gl.drawElementsInstanced(p,w,b,d,u||0):m?this.device.gl.drawElements(p,w,b,d):f?this.device.gl.drawArraysInstanced(p,d,a||0,u||0):this.device.gl.drawArrays(p,d,a||0),_&&_.end()}),i.unbindAfterRender(this),!0}drawIndirect(t,r=0){throw new Error("Indirect drawing is only supported in WebGPU")}drawIndexedIndirect(t,r=0){throw new Error("Indirect drawing is only supported in WebGPU")}beginOcclusionQuery(t){const r=this.props.occlusionQuerySet;r==null||r.beginOcclusionQuery()}endOcclusionQuery(){const t=this.props.occlusionQuerySet;t==null||t.endOcclusionQuery()}clear(){const t={...this.glParameters};let r=0;this.props.clearColors&&this.props.clearColors.forEach((i,s)=>{i&&this.clearColorBuffer(s,i)}),this.props.clearColor!==!1&&this.props.clearColors===void 0&&(r|=16384,t.clearColor=this.props.clearColor),this.props.clearDepth!==!1&&(r|=256,t.clearDepth=this.props.clearDepth),this.props.clearStencil!==!1&&(r|=1024,t.clearStencil=this.props.clearStencil),r!==0&&_e(this.device.gl,t,()=>{this.device.gl.clear(r)})}clearColorBuffer(t=0,r=[0,0,0,0]){_e(this.device.gl,{framebuffer:this.props.framebuffer},()=>{switch(r.constructor){case Int8Array:case Int16Array:case Int32Array:this.device.gl.clearBufferiv(6144,t,r);break;case Uint8Array:case Uint8ClampedArray:case Uint16Array:case Uint32Array:this.device.gl.clearBufferuiv(6144,t,r);break;case Float32Array:this.device.gl.clearBufferfv(6144,t,r);break;default:throw new Error("clearColorBuffer: color must be typed array")}})}}class Go extends ci{constructor(t,r){super(t,r);l(this,"device");l(this,"handle",null);l(this,"commandBuffer");this.device=t,this.commandBuffer=new v_(t,{id:this.id,userData:this.userData})}destroy(){this.destroyResource()}finish(){return this.destroy(),this.commandBuffer}beginRenderPass(t={}){return new B_(this.device,this._applyTimeProfilingToPassProps(t))}beginComputePass(t={}){throw new Error("ComputePass not supported in WebGL")}copyBufferToBuffer(t){this.commandBuffer.commands.push({name:"copy-buffer-to-buffer",options:t})}copyBufferToTexture(t){this.commandBuffer.commands.push({name:"copy-buffer-to-texture",options:t})}copyTextureToBuffer(t){this.commandBuffer.commands.push({name:"copy-texture-to-buffer",options:t})}copyTextureToTexture(t){this.commandBuffer.commands.push({name:"copy-texture-to-texture",options:t})}pushDebugGroup(t){}popDebugGroup(){}insertDebugMarker(t){}resolveQuerySet(t,r,i){throw new Error("resolveQuerySet is not supported in WebGL")}writeTimestamp(t,r){t.writeTimestamp(r)}}function C_(n){const{target:e,source:t,start:r=0,count:i=1}=n,s=t.length,o=i*s;let a=0;for(let c=r;a<s;a++)e[c++]=t[a]??0;for(;a<o;)a<o-a?(e.copyWithin(r+a,r,r+a),a*=2):(e.copyWithin(r+a,r,r+o-a),a=o);return n.target}class ms extends li{constructor(t,r){super(t,r);l(this,"device");l(this,"handle");l(this,"attributeInfosByLocation");l(this,"buffer",null);l(this,"bufferValue",null);this.device=t,this.handle=this.device.gl.createVertexArray(),this.attributeInfosByLocation=new Array(this.maxVertexAttributes).fill(null);for(const i of Object.values(Ja(r.shaderLayout,r.bufferLayout)))this.attributeInfosByLocation[i.location]=i}get[Symbol.toStringTag](){return"VertexArray"}static isConstantAttributeZeroSupported(t){return _u()==="Chrome"}destroy(){var t;super.destroy(),this.buffer&&((t=this.buffer)==null||t.destroy()),this.handle&&(this.device.gl.deleteVertexArray(this.handle),this.handle=void 0)}setIndexBuffer(t){const r=t;if(r&&r.glTarget!==34963)throw new Error("Use .setBuffer()");this.device.gl.bindVertexArray(this.handle),this.device.gl.bindBuffer(34963,r?r.handle:null),this.indexBuffer=r,this.device.gl.bindVertexArray(null)}setBuffer(t,r){const i=r;if(i.glTarget===34963)throw new Error("Use .setIndexBuffer()");const{size:s,type:o,stride:a,offset:c,normalized:u,integer:f,divisor:d}=this._getAccessor(t);this.device.gl.bindVertexArray(this.handle),this.device.gl.bindBuffer(34962,i.handle),f?this.device.gl.vertexAttribIPointer(t,s,o,a,c):this.device.gl.vertexAttribPointer(t,s,o,u,a,c),this.device.gl.bindBuffer(34962,null),this.device.gl.enableVertexAttribArray(t),this.device.gl.vertexAttribDivisor(t,d||0),this.attributes[t]=i,this.device.gl.bindVertexArray(null)}setConstantWebGL(t,r){this._enable(t,!1),this.attributes[t]=r}bindBeforeRender(){this.device.gl.bindVertexArray(this.handle),this._applyConstantAttributes()}unbindAfterRender(){this.device.gl.bindVertexArray(null)}_applyConstantAttributes(){for(let t=0;t<this.maxVertexAttributes;++t){const r=this.attributes[t];ArrayBuffer.isView(r)&&this.device.setConstantAttributeWebGL(t,r)}}_getAccessor(t){const r=this.attributeInfosByLocation[t];if(!r)throw new Error(`Unknown attribute location ${t}`);const i=Bc(r.bufferDataType);return{size:r.bufferComponents,type:i,stride:r.byteStride,offset:r.byteOffset,normalized:r.normalized,integer:r.integer,divisor:r.stepMode==="instance"?1:0}}_enable(t,r=!0){const s=ms.isConstantAttributeZeroSupported(this.device)||t!==0;(r||s)&&(t=Number(t),this.device.gl.bindVertexArray(this.handle),r?this.device.gl.enableVertexAttribArray(t):this.device.gl.disableVertexAttribArray(t),this.device.gl.bindVertexArray(null))}getConstantBuffer(t,r){const i=I_(r),s=i.byteLength*t,o=i.length*t;if(this.buffer&&s!==this.buffer.byteLength)throw new Error(`Buffer size is immutable, byte length ${s} !== ${this.buffer.byteLength}.`);let a=!this.buffer;if(this.buffer=this.buffer||this.device.createBuffer({byteLength:s}),a||(a=!O_(i,this.bufferValue)),a){const c=eh(r.constructor,o);C_({target:c,source:i,start:0,count:o}),this.buffer.write(c),this.bufferValue=r}return this.buffer}}function I_(n){return Array.isArray(n)?new Float32Array(n):n}function O_(n,e){if(!n||!e||n.length!==e.length||n.constructor!==e.constructor)return!1;for(let t=0;t<n.length;++t)if(n[t]!==e[t])return!1;return!0}class R_ extends fi{constructor(t,r){super(t,r);l(this,"device");l(this,"gl");l(this,"handle");l(this,"layout");l(this,"buffers",{});l(this,"unusedBuffers",{});l(this,"bindOnUse",!0);l(this,"_bound",!1);this.device=t,this.gl=t.gl,this.handle=this.props.handle||this.gl.createTransformFeedback(),this.layout=this.props.layout,r.buffers&&this.setBuffers(r.buffers),Object.seal(this)}destroy(){this.gl.deleteTransformFeedback(this.handle),super.destroy()}begin(t="point-list"){this.gl.bindTransformFeedback(36386,this.handle),this.bindOnUse&&this._bindBuffers(),this.gl.beginTransformFeedback(L_(t))}end(){this.gl.endTransformFeedback(),this.bindOnUse&&this._unbindBuffers(),this.gl.bindTransformFeedback(36386,null)}setBuffers(t){this.buffers={},this.unusedBuffers={},this.bind(()=>{for(const[r,i]of Object.entries(t))this.setBuffer(r,i)})}setBuffer(t,r){const i=this._getVaryingIndex(t),{buffer:s,byteLength:o,byteOffset:a}=this._getBufferRange(r);if(i<0){this.unusedBuffers[t]=s,v.warn(`${this.id} unusedBuffers varying buffer ${t}`)();return}this.buffers[i]={buffer:s,byteLength:o,byteOffset:a},this.bindOnUse||this._bindBuffer(i,s,a,o)}getBuffer(t){if(zo(t))return this.buffers[t]||null;const r=this._getVaryingIndex(t);return this.buffers[r]??null}bind(t=this.handle){if(typeof t!="function")return this.gl.bindTransformFeedback(36386,t),this;let r;return this._bound?r=t():(this.gl.bindTransformFeedback(36386,this.handle),this._bound=!0,r=t(),this._bound=!1,this.gl.bindTransformFeedback(36386,null)),r}unbind(){this.bind(null)}_getBufferRange(t){if(t instanceof _t)return{buffer:t,byteOffset:0,byteLength:t.byteLength};const{buffer:r,byteOffset:i=0,byteLength:s=t.buffer.byteLength}=t;return{buffer:r,byteOffset:i,byteLength:s}}_getVaryingIndex(t){if(zo(t))return Number(t);for(const r of this.layout.varyings||[])if(t===r.name)return r.location;return-1}_bindBuffers(){for(const[t,r]of Object.entries(this.buffers)){const{buffer:i,byteLength:s,byteOffset:o}=this._getBufferRange(r);this._bindBuffer(Number(t),i,o,s)}}_unbindBuffers(){for(const t in this.buffers)this.gl.bindBufferBase(35982,Number(t),null)}_bindBuffer(t,r,i=0,s){const o=r&&r.handle;!o||s===void 0?this.gl.bindBufferBase(35982,t,o):this.gl.bindBufferRange(35982,t,o,i,s)}}function zo(n){return typeof n=="number"?Number.isInteger(n):/^\d+$/.test(n)}class M_ extends di{constructor(t,r){super(t,r);l(this,"device");l(this,"handle");l(this,"_timestampPairs",[]);l(this,"_pendingReads",new Set);l(this,"_occlusionQuery",null);l(this,"_occlusionActive",!1);if(this.device=t,r.type==="timestamp"){if(r.count<2)throw new Error("Timestamp QuerySet requires at least two query slots");this._timestampPairs=new Array(Math.ceil(r.count/2)).fill(null).map(()=>({activeQuery:null,completedQueries:[]})),this.handle=null}else{if(r.count>1)throw new Error("WebGL occlusion QuerySet can only have one value");const i=this.device.gl.createQuery();if(!i)throw new Error("WebGL query not supported");this.handle=i}Object.seal(this)}get[Symbol.toStringTag](){return"QuerySet"}destroy(){if(!this.destroyed){this.handle&&this.device.gl.deleteQuery(this.handle);for(const t of this._timestampPairs){t.activeQuery&&(this._cancelPendingQuery(t.activeQuery),this.device.gl.deleteQuery(t.activeQuery.handle));for(const r of t.completedQueries)this._cancelPendingQuery(r),this.device.gl.deleteQuery(r.handle)}this._occlusionQuery&&(this._cancelPendingQuery(this._occlusionQuery),this.device.gl.deleteQuery(this._occlusionQuery.handle));for(const t of Array.from(this._pendingReads))this._cancelPendingQuery(t);this.destroyResource()}}isResultAvailable(t){return this.props.type==="timestamp"?t===void 0?this._timestampPairs.some((r,i)=>this._isTimestampPairAvailable(i)):this._isTimestampPairAvailable(this._getTimestampPairIndex(t)):this._occlusionQuery?this._pollQueryAvailability(this._occlusionQuery):!1}async readResults(t){const r=(t==null?void 0:t.firstQuery)||0,i=(t==null?void 0:t.queryCount)||this.props.count-r;if(this._validateRange(r,i),this.props.type==="timestamp"){const s=new Array(i).fill(0n),o=Math.floor(r/2),a=Math.floor((r+i-1)/2);for(let c=o;c<=a;c++){const u=await this._consumeTimestampPairResult(c),f=c*2,d=f+1;f>=r&&f<r+i&&(s[f-r]=0n),d>=r&&d<r+i&&(s[d-r]=u)}return s}if(!this._occlusionQuery)throw new Error("Occlusion query has not been started");return[await this._consumeQueryResult(this._occlusionQuery)]}async readTimestampDuration(t,r){if(this.props.type!=="timestamp")throw new Error("Timestamp durations require a timestamp QuerySet");if(t<0||r>=this.props.count||r<=t)throw new Error("Timestamp duration range is out of bounds");if(t%2!==0||r!==t+1)throw new Error("WebGL timestamp durations require adjacent even/odd query indices");const i=await this._consumeTimestampPairResult(this._getTimestampPairIndex(t));return Number(i)/1e6}beginOcclusionQuery(){if(this.props.type!=="occlusion")throw new Error("Occlusion queries require an occlusion QuerySet");if(!this.handle)throw new Error("WebGL occlusion query is not available");if(this._occlusionActive)throw new Error("Occlusion query is already active");this.device.gl.beginQuery(35887,this.handle),this._occlusionQuery={handle:this.handle,promise:null,result:null,disjoint:!1,cancelled:!1,pollRequestId:null,resolve:null,reject:null},this._occlusionActive=!0}endOcclusionQuery(){if(!this._occlusionActive)throw new Error("Occlusion query is not active");this.device.gl.endQuery(35887),this._occlusionActive=!1}writeTimestamp(t){if(this.props.type!=="timestamp")throw new Error("Timestamp writes require a timestamp QuerySet");const r=this._getTimestampPairIndex(t),i=this._timestampPairs[r];if(t%2===0){if(i.activeQuery)throw new Error("Timestamp query pair is already active");const s=this.device.gl.createQuery();if(!s)throw new Error("WebGL query not supported");const o={handle:s,promise:null,result:null,disjoint:!1,cancelled:!1,pollRequestId:null,resolve:null,reject:null};this.device.gl.beginQuery(35007,s),i.activeQuery=o;return}if(!i.activeQuery)throw new Error("Timestamp query pair was ended before it was started");this.device.gl.endQuery(35007),i.completedQueries.push(i.activeQuery),i.activeQuery=null}_validateRange(t,r){if(t<0||r<0||t+r>this.props.count)throw new Error("Query read range is out of bounds")}_getTimestampPairIndex(t){if(t<0||t>=this.props.count)throw new Error("Query index is out of bounds");return Math.floor(t/2)}_isTimestampPairAvailable(t){const r=this._timestampPairs[t];return!r||r.completedQueries.length===0?!1:this._pollQueryAvailability(r.completedQueries[0])}_pollQueryAvailability(t){if(t.cancelled||this.destroyed)return t.result=0n,!0;if(t.result!==null||t.disjoint)return!0;if(!this.device.gl.getQueryParameter(t.handle,34919))return!1;const i=!!this.device.gl.getParameter(36795);return t.disjoint=i,t.result=i?0n:BigInt(this.device.gl.getQueryParameter(t.handle,34918)),!0}async _consumeTimestampPairResult(t){const r=this._timestampPairs[t];if(!r||r.completedQueries.length===0)throw new Error("Timestamp query pair has no completed result");const i=r.completedQueries.shift();try{return await this._consumeQueryResult(i)}finally{this.device.gl.deleteQuery(i.handle)}}_consumeQueryResult(t){return t.promise||(this._pendingReads.add(t),t.promise=new Promise((r,i)=>{t.resolve=r,t.reject=i;const s=()=>{if(t.pollRequestId=null,t.cancelled||this.destroyed){this._pendingReads.delete(t),t.promise=null,t.resolve=null,t.reject=null,r(0n);return}if(!this._pollQueryAvailability(t)){t.pollRequestId=this._requestAnimationFrame(s);return}this._pendingReads.delete(t),t.promise=null,t.resolve=null,t.reject=null,t.disjoint?i(new Error("GPU timestamp query was invalidated by a disjoint event")):r(t.result||0n)};s()})),t.promise}_cancelPendingQuery(t){if(this._pendingReads.delete(t),t.cancelled=!0,t.pollRequestId!==null&&(this._cancelAnimationFrame(t.pollRequestId),t.pollRequestId=null),t.resolve){const r=t.resolve;t.promise=null,t.resolve=null,t.reject=null,r(0n)}}_requestAnimationFrame(t){return requestAnimationFrame(t)}_cancelAnimationFrame(t){cancelAnimationFrame(t)}}class D_ extends hi{constructor(t,r={}){super(t,{});l(this,"device");l(this,"gl");l(this,"handle");l(this,"signaled");l(this,"_signaled",!1);this.device=t,this.gl=t.gl;const i=this.props.handle||this.gl.fenceSync(this.gl.SYNC_GPU_COMMANDS_COMPLETE,0);if(!i)throw new Error("Failed to create WebGL fence");this.handle=i,this.signaled=new Promise(s=>{const o=()=>{const a=this.gl.clientWaitSync(this.handle,0,0);a===this.gl.ALREADY_SIGNALED||a===this.gl.CONDITION_SATISFIED?(this._signaled=!0,s()):setTimeout(o,1)};o()})}isSignaled(){if(this._signaled)return!0;const t=this.gl.getSyncParameter(this.handle,this.gl.SYNC_STATUS);return this._signaled=t===this.gl.SIGNALED,this._signaled}destroy(){this.destroyed||this.gl.deleteSync(this.handle)}}function Gc(n){switch(n){case 6406:case 33326:case 6403:case 36244:return 1;case 33339:case 33340:case 33328:case 33320:case 33319:return 2;case 6407:case 36248:case 34837:return 3;case 6408:case 36249:case 34836:return 4;default:return 0}}function $_(n){switch(n){case 5121:return 1;case 33635:case 32819:case 32820:return 2;case 5126:return 4;default:return 0}}function k_(n,e){var _;const{sourceX:t=0,sourceY:r=0,sourceAttachment:i=0}=e||{};let{target:s=null,sourceWidth:o,sourceHeight:a,sourceDepth:c,sourceFormat:u,sourceType:f}=e||{};const{framebuffer:d,deleteFramebuffer:h}=zc(n),{gl:g,handle:p}=d;o||(o=d.width),a||(a=d.height);const m=(_=d.colorAttachments[i])==null?void 0:_.texture;if(!m)throw new Error(`Invalid framebuffer attachment ${i}`);c=(m==null?void 0:m.depth)||1,u||(u=(m==null?void 0:m.glFormat)||6408),f||(f=(m==null?void 0:m.glType)||5121),s=F_(s,f,u,o,a);const b=ue.getDataType(s);f=f||n_(b);const w=g.bindFramebuffer(36160,p);return g.readBuffer(36064+i),g.readPixels(t,r,o,a,u,f,s),g.readBuffer(36064),g.bindFramebuffer(36160,w||null),h&&d.destroy(),s}function U_(n,e){const{target:t,sourceX:r=0,sourceY:i=0,sourceFormat:s=6408,targetByteOffset:o=0}=e||{};let{sourceWidth:a,sourceHeight:c,sourceType:u}=e||{};const{framebuffer:f,deleteFramebuffer:d}=zc(n);a=a||f.width,c=c||f.height;const h=f;u=u||5121;let g=t;if(!g){const m=Gc(s),b=$_(u),w=o+a*c*m*b;g=h.device.createBuffer({byteLength:w})}const p=n.device.createCommandEncoder();return p.copyTextureToBuffer({sourceTexture:n,width:a,height:c,origin:[r,i],destinationBuffer:g,byteOffset:o}),p.destroy(),d&&f.destroy(),g}function zc(n){return n instanceof vn?{framebuffer:n,deleteFramebuffer:!1}:{framebuffer:N_(n),deleteFramebuffer:!0}}function N_(n,e){const{device:t,width:r,height:i,id:s}=n;return t.createFramebuffer({...e,id:`framebuffer-for-${s}`,width:r,height:i,colorAttachments:[n]})}function F_(n,e,t,r,i,s){if(n)return n;e||(e=5121);const o=Dc(e),a=ue.getTypedArrayConstructor(o),c=Gc(t);return new a(r*i*c)}class Oe extends mn{constructor(t){var d;super({...t,id:t.id||kb("webgl-device")});l(this,"type","webgl");l(this,"handle");l(this,"features");l(this,"limits");l(this,"info");l(this,"canvasContext");l(this,"preferredColorFormat","rgba8unorm");l(this,"preferredDepthFormat","depth24plus");l(this,"commandEncoder");l(this,"lost");l(this,"_resolveContextLost");l(this,"_isLost",!1);l(this,"gl");l(this,"_constants");l(this,"extensions");l(this,"_polyfilled",!1);l(this,"spectorJS");const r=mn._getCanvasContextProps(t);if(!r)throw new Error("WebGLDevice requires props.createCanvasContext to be set");const i=((d=r.canvas)==null?void 0:d.gl)??null;let s=Oe.getDeviceFromContext(i);if(s)throw new Error(`WebGL context already attached to device ${s.id}`);this.canvasContext=new Db(this,r),this.lost=new Promise(h=>{this._resolveContextLost=h});const o={...t.webgl};r.alphaMode==="premultiplied"&&(o.premultipliedAlpha=!0),t.powerPreference!==void 0&&(o.powerPreference=t.powerPreference),t.failIfMajorPerformanceCaveat!==void 0&&(o.failIfMajorPerformanceCaveat=t.failIfMajorPerformanceCaveat);const c=this.props._handle||hb(this.canvasContext.canvas,{onContextLost:h=>{var g;return(g=this._resolveContextLost)==null?void 0:g.call(this,{reason:"destroyed",message:"Entered sleep mode, or too many apps or browser tabs are using the GPU."})},onContextRestored:h=>{console.log("WebGL context restored")}},o);if(!c)throw new Error("WebGL context creation failed");if(s=Oe.getDeviceFromContext(c),s){if(t._reuseDevices)return v.log(1,`Not creating a new Device, instead returning a reference to Device ${s.id} already attached to WebGL context`,s)(),this.canvasContext.destroy(),s._reused=!0,s;throw new Error(`WebGL context already attached to device ${s.id}`)}this.handle=c,this.gl=c,this.spectorJS=ib({...this.props,gl:this.handle});const u=xi(this.handle);u.device=this,u.extensions||(u.extensions={}),this.extensions=u.extensions,this.info=gb(this.gl,this.extensions),this.limits=new Ob(this.gl),this.features=new Ib(this.gl,this.extensions,this.props._disabledFeatures),this.props._initializeFeatures&&this.features.initializeFeatures(),new Ce(this.gl,{log:(...h)=>v.log(1,...h)()}).trackState(this.gl,{copyState:!1}),(t.debug||t.debugWebGL)&&(this.gl=rb(this.gl,{traceWebGL:t.debugWebGL}),v.warn("WebGL debug mode activated. Performance reduced.")()),t.debugWebGL&&(v.level=Math.max(v.level,1)),this.commandEncoder=new Go(this,{id:`${this}-command-encoder`}),this.canvasContext._startObservers()}static getDeviceFromContext(t){var r;return t?((r=t.luma)==null?void 0:r.device)??null:null}get[Symbol.toStringTag](){return"WebGLDevice"}toString(){return`${this[Symbol.toStringTag]}(${this.id})`}isVertexFormatSupported(t){switch(t){case"unorm8x4-bgra":return!1;default:return!0}}destroy(){var t;if(!this.props._reuseDevices&&!this._reused){this._isLost=!0,(t=this.commandEncoder)==null||t.destroy();const r=xi(this.handle);r.device=null}}get isLost(){return this._isLost||this.gl.isContextLost()}createCanvasContext(t){throw new Error("WebGL only supports a single canvas")}createPresentationContext(t){return new $b(this,t||{})}createBuffer(t){const r=this._normalizeBufferProps(t);return new _t(this,r)}createTexture(t){return new yt(this,t)}createExternalTexture(t){throw new Error("ExternalTexture is not available on WebGL")}createSampler(t){return new Qb(this,t)}createShader(t){return new Gb(this,t)}createFramebuffer(t){return new bt(this,t)}createVertexArray(t){return new ms(this,t)}createTransformFeedback(t){return new R_(this,t)}createQuerySet(t){return new M_(this,t)}createFence(){return new D_(this)}createRenderPipeline(t){return new __(this,t)}_createSharedRenderPipelineWebGL(t){return new w_(this,t)}createComputePipeline(t){throw new Error("ComputePipeline not supported in WebGL")}createRenderBundleEncoder(t){throw new Error("Render bundles are only supported in WebGPU")}createCommandEncoder(t={}){return new Go(this,t)}submit(t){let r=null;t||({submittedCommandEncoder:r,commandBuffer:t}=this._finalizeDefaultCommandEncoderForSubmit());try{t._executeCommands(),r&&r.resolveTimeProfilingQuerySet().then(()=>{this.commandEncoder._gpuTimeMs=r._gpuTimeMs}).catch(()=>{})}finally{t.destroy()}}writeBufferViaCommandEncoder(t,r,i,s=0){r.write(i,s)}_finalizeDefaultCommandEncoderForSubmit(){const t=this.commandEncoder,r=t.finish();return this.commandEncoder.destroy(),this.commandEncoder=this.createCommandEncoder({id:t.props.id,timeProfilingQuerySet:t.getTimeProfilingQuerySet()}),{submittedCommandEncoder:t,commandBuffer:r}}readPixelsToArrayWebGL(t,r){return k_(t,r)}readPixelsToBufferWebGL(t,r){return U_(t,r)}setParametersWebGL(t){rt(this.gl,t)}getParametersWebGL(t){return Lc(this.gl,t)}withParametersWebGL(t,r){return _e(this.gl,t,r)}resetWebGL(){v.warn("WebGLDevice.resetWebGL is deprecated, use only for debugging")(),cb(this.gl)}_getDeviceSpecificTextureFormatCapabilities(t){return Tb(this.gl,t,this.extensions)}loseDevice(){var s;let t=!1;const i=this.getExtension("WEBGL_lose_context").WEBGL_lose_context;return i&&(t=!0,i.loseContext()),(s=this._resolveContextLost)==null||s.call(this,{reason:"destroyed",message:"Application triggered context loss"}),t}pushState(){Ce.get(this.gl).push()}popState(){Ce.get(this.gl).pop()}getGLKey(t,r){const i=Number(t);for(const s in this.gl)if(this.gl[s]===i)return`GL.${s}`;return r!=null&&r.emptyIfUnknown?"":String(t)}getGLKeys(t){const r={emptyIfUnknown:!0};return Object.entries(t).reduce((i,[s,o])=>(i[`${s}:${this.getGLKey(s,r)}`]=`${o}:${this.getGLKey(o,r)}`,i),{})}setConstantAttributeWebGL(t,r){const i=this.limits.maxVertexAttributes;this._constants=this._constants||new Array(i).fill(null);const s=this._constants[t];switch(s&&j_(s,r)&&v.info(1,`setConstantAttributeWebGL(${t}) could have been skipped, value unchanged`)(),this._constants[t]=r,r.constructor){case Float32Array:G_(this,t,r);break;case Int32Array:z_(this,t,r);break;case Uint32Array:W_(this,t,r);break;default:throw new Error("constant")}}getExtension(t){return $e(this.gl,t,this.extensions),this.extensions}_setWebGLDebugMetadata(t,r,i){t.luma=r;const s={props:i.spector,id:i.spector.id};t.__SPECTOR_Metadata=s}}function G_(n,e,t){switch(t.length){case 1:n.gl.vertexAttrib1fv(e,t);break;case 2:n.gl.vertexAttrib2fv(e,t);break;case 3:n.gl.vertexAttrib3fv(e,t);break;case 4:n.gl.vertexAttrib4fv(e,t);break}}function z_(n,e,t){n.gl.vertexAttribI4iv(e,t)}function W_(n,e,t){n.gl.vertexAttribI4uiv(e,t)}function j_(n,e){if(!n||!e||n.length!==e.length||n.constructor!==e.constructor)return!1;for(let t=0;t<n.length;++t)if(n[t]!==e[t])return!1;return!0}const Xv=Object.freeze(Object.defineProperty({__proto__:null,WebGLDevice:Oe},Symbol.toStringTag,{value:"Module"}));function V_(n){switch(n){case"float64":return Float64Array;case"uint8":case"unorm8":return Uint8ClampedArray;default:return Vi(n)}}const H_=ue.getDataType.bind(ue);function Jt(n,e,t){if(e.size>4)return null;const r=t==="webgpu"&&e.type==="uint8"?"unorm8":e.type,i=e.size,s=!!(t!=="webgpu"&&i===3&&r&&["uint8","sint8","unorm8","snorm8","uint16","sint16","unorm16","snorm16"].includes(r));return{attribute:n,format:i>1?`${r}x${i}${s?"-webgl":""}`:e.type,byteOffset:e.offset||0}}function ae(n){return n.stride||n.size*n.bytesPerElement}function Y_(n,e){return n.type===e.type&&n.size===e.size&&ae(n)===ae(e)&&(n.offset||0)===(e.offset||0)}function Ai(n,e){e.offset&&te.removed("shaderAttribute.offset","vertexOffset, elementOffset")();const t=ae(n),r=e.vertexOffset!==void 0?e.vertexOffset:n.vertexOffset||0,i=e.elementOffset||0,s=r*t+i*n.bytesPerElement+(n.offset||0);return{...e,offset:s,stride:t}}function q_(n,e){const t=Ai(n,e);return{high:t,low:{...t,offset:t.offset+n.size*4}}}class Q_{constructor(e,t,r){this._buffer=null,this.device=e,this.id=t.id||"",this.size=t.size||1;const i=t.logicalType||t.type,s=i==="float64";let{defaultValue:o}=t;o=Number.isFinite(o)?[o]:o||new Array(this.size).fill(0);let a;s?a="float32":!i&&t.isIndexed?a="uint32":a=i||"float32";let c=V_(i||a);this.doublePrecision=s,s&&t.fp64===!1&&(c=Float32Array),this.value=null,this.settings={...t,defaultType:c,defaultValue:o,logicalType:i,type:a,normalized:a.includes("norm"),size:this.size,bytesPerElement:c.BYTES_PER_ELEMENT},this.state={...r,externalBuffer:null,bufferAccessor:this.settings,allocatedValue:null,numInstances:0,bounds:null,constant:!1}}get isConstant(){return this.state.constant}get buffer(){return this._buffer}get byteOffset(){const e=this.getAccessor();return e.vertexOffset?e.vertexOffset*ae(e):0}get numInstances(){return this.state.numInstances}set numInstances(e){this.state.numInstances=e}get isDoublePrecisionBuffer(){return this._shouldSplitDoublePrecisionValue(this.value)}delete(){this._buffer&&(this._buffer.delete(),this._buffer=null),Yr.release(this.state.allocatedValue),this.state.allocatedValue=null}getBuffer(){return this.state.constant&&this.device.type!=="webgpu"?null:this.state.externalBuffer||this._buffer}getValue(e=this.id,t=null){const r={};if(this.state.constant){const i=this.value;if(this.device.type==="webgpu"&&this._buffer)r[e]=this._buffer;else if(t){const s=Ai(this.getAccessor(),t),o=s.offset/i.BYTES_PER_ELEMENT,a=s.size||this.size;r[e]=i.subarray(o,o+a)}else r[e]=i}else r[e]=this.getBuffer();return this.doublePrecision&&(this.isDoublePrecisionBuffer?r[`${e}64Low`]=r[e]:r[`${e}64Low`]=new Float32Array(this.size)),r}_getBufferLayout(e=this.id,t=null){const r=this.getAccessor(),i=[],s={name:this.id,byteStride:this.device.type==="webgpu"&&this.state.constant?0:ae(r)};if(this.doublePrecision){const o=q_(r,t||{});i.push(Jt(e,{...r,...o.high},this.device.type),Jt(`${e}64Low`,{...r,...o.low},this.device.type))}else if(t){const o=Ai(r,t);i.push(Jt(e,{...r,...o},this.device.type))}else i.push(Jt(e,r,this.device.type));return s.attributes=i.filter(Boolean),s}setAccessor(e){this.state.bufferAccessor=e}getAccessor(){return this.state.bufferAccessor}getBounds(){if(this.state.bounds)return this.state.bounds;let e=null;if(this.state.constant&&this.value){const t=Array.from(this.value);e=[t,t]}else{const{value:t,numInstances:r,size:i}=this,s=r*i;if(t&&s&&t.length>=s){const o=new Array(i).fill(1/0),a=new Array(i).fill(-1/0);for(let c=0;c<s;)for(let u=0;u<i;u++){const f=t[c++];f<o[u]&&(o[u]=f),f>a[u]&&(a[u]=f)}e=[o,a]}}return this.state.bounds=e,e}setData(e){const{state:t}=this;let r;ArrayBuffer.isView(e)?r={value:e}:e instanceof A?r={buffer:e}:r=e;const i={...this.settings,...r};if(ArrayBuffer.isView(r.value)){if(!r.type)if(this.doublePrecision&&r.value instanceof Float64Array)i.type="float32";else{const o=H_(r.value);i.type=i.normalized?o.replace("int","norm"):o}i.bytesPerElement=r.value.BYTES_PER_ELEMENT,i.stride=ae(i)}if(t.bounds=null,r.constant){let s=r.value;if(s=this._normalizeValue(s,[],0),this.settings.normalized&&(s=this.normalizeConstant(s)),!(!t.constant||!this._areValuesEqual(s,this.value)))return!1;t.externalBuffer=null,t.constant=!0,this.value=ArrayBuffer.isView(s)?s:new Float32Array(s)}else if(r.buffer){const s=r.buffer;t.externalBuffer=s,t.constant=!1,this.value=r.value||null}else if(r.value){this._checkExternalBuffer(r);const s=r.value;let o=s;t.externalBuffer=null,t.constant=!1,this.value=s,this._shouldSplitDoublePrecisionValue(o)&&(o=nn(o,i),s instanceof Float32Array&&(i.stride=i.size*2*Float32Array.BYTES_PER_ELEMENT));let{buffer:a}=this;const c=ae(i),u=(i.vertexOffset||0)*c;if(this.settings.isIndexed){const d=this.settings.defaultType;o.constructor!==d&&(o=new d(o))}const f=o.byteLength+u+c*2;(!a||a.byteLength<f)&&(a=this._createBuffer(f)),a.write(o,u)}return this.setAccessor(i),!0}updateSubBuffer(e={}){this.state.bounds=null;const t=this.value,{startOffset:r=0,endOffset:i}=e,s=this._shouldSplitDoublePrecisionValue(t);this.buffer.write(s?nn(t,{size:this.size,startIndex:r,endIndex:i}):t.subarray(r,i),r*(s?8:t.BYTES_PER_ELEMENT)+this.byteOffset)}allocate(e,t=!1){const{state:r}=this,i=r.allocatedValue,s=Yr.allocate(i,e+1,{size:this.size,type:this.settings.defaultType,copy:t});this.value=s;const o=this._shouldSplitDoublePrecisionValue(s),a=o&&s instanceof Float32Array?{...this.settings,stride:this.size*2*Float32Array.BYTES_PER_ELEMENT}:this.settings;this.setAccessor(a);const{byteOffset:c}=this;let{buffer:u}=this;const f=s.byteLength*(o&&s instanceof Float32Array?2:1);return(!u||u.byteLength<f+c)&&(u=this._createBuffer(f+c),t&&i&&u.write(this._shouldSplitDoublePrecisionValue(i)?nn(i,this):i,c)),r.allocatedValue=s,r.constant=!1,r.externalBuffer=null,!0}_shouldSplitDoublePrecisionValue(e){return!!(this.doublePrecision&&(e instanceof Float64Array||this.device.type==="webgpu"&&e instanceof Float32Array))}_checkExternalBuffer(e){const{value:t}=e;if(!ArrayBuffer.isView(t))throw new Error(`Attribute ${this.id} value is not TypedArray`);const r=this.settings.defaultType;let i=!1;if(this.doublePrecision&&(i=t.BYTES_PER_ELEMENT<4),i)throw new Error(`Attribute ${this.id} does not support ${t.constructor.name}`);!(t instanceof r)&&this.settings.normalized&&!("normalized"in e)&&te.warn(`Attribute ${this.id} is normalized`)()}normalizeConstant(e){switch(this.settings.type){case"snorm8":return new Float32Array(e).map(t=>(t+128)/255*2-1);case"snorm16":return new Float32Array(e).map(t=>(t+32768)/65535*2-1);case"unorm8":return new Float32Array(e).map(t=>t/255);case"unorm16":return new Float32Array(e).map(t=>t/65535);default:return e}}_normalizeValue(e,t,r){const{defaultValue:i,size:s}=this.settings;if(Number.isFinite(e))return t[r]=e,t;if(!e){let o=s;for(;--o>=0;)t[r+o]=i[o];return t}switch(s){case 4:t[r+3]=Number.isFinite(e[3])?e[3]:i[3];case 3:t[r+2]=Number.isFinite(e[2])?e[2]:i[2];case 2:t[r+1]=Number.isFinite(e[1])?e[1]:i[1];case 1:t[r+0]=Number.isFinite(e[0])?e[0]:i[0];break;default:let o=s;for(;--o>=0;)t[r+o]=Number.isFinite(e[o])?e[o]:i[o]}return t}_areValuesEqual(e,t){if(!e||!t)return!1;const{size:r}=this;for(let i=0;i<r;i++)if(e[i]!==t[i])return!1;return!0}_createBuffer(e){var s;this._buffer&&this._buffer.destroy();const{isIndexed:t,type:r}=this.settings,i=this.device.type==="webgpu"&&!t?A.VERTEX|A.STORAGE|A.COPY_DST|A.COPY_SRC:(t?A.INDEX:A.VERTEX)|A.COPY_DST;return this._buffer=this.device.createBuffer({...(s=this._buffer)==null?void 0:s.props,id:this.id,usage:i,indexType:t?r:void 0,byteLength:e}),this._buffer}}const Wo=[],jo=[];function X_(n,e=0,t=1/0){let r=Wo;const i={index:-1,data:n,target:[]};return n?typeof n[Symbol.iterator]=="function"?r=n:n.length>0&&(jo.length=n.length,r=jo):r=Wo,(e>0||Number.isFinite(t))&&(r=(Array.isArray(r)?r:Array.from(r)).slice(e,t),i.index=e-1),{iterable:r,objectInfo:i}}function Wc(n){return n&&n[Symbol.asyncIterator]}function Z_(n,e){const{size:t,stride:r,offset:i,startIndices:s,nested:o}=e,a=n.BYTES_PER_ELEMENT,c=r?r/a:t,u=i?i/a:0,f=Math.floor((n.length-u)/c);return(d,{index:h,target:g})=>{if(!s){const w=h*c+u;for(let _=0;_<t;_++)g[_]=n[w+_];return g}const p=s[h],m=s[h+1]||f;let b;if(o){b=new Array(m-p);for(let w=p;w<m;w++){const _=w*c+u;g=new Array(t);for(let y=0;y<t;y++)g[y]=n[_+y];b[w-p]=g}}else if(c===t)b=n.subarray(p*t+u,m*t+u);else{b=new n.constructor((m-p)*t);let w=0;for(let _=p;_<m;_++){const y=_*c+u;for(let x=0;x<t;x++)b[w++]=n[y+x]}}return b}}const K_=[],an=[[0,1/0]];function J_(n,e){if(n===an||(e[0]<0&&(e[0]=0),e[0]>=e[1]))return n;const t=[],r=n.length;let i=0;for(let s=0;s<r;s++){const o=n[s];o[1]<e[0]?(t.push(o),i=s+1):o[0]>e[1]?t.push(o):e=[Math.min(o[0],e[0]),Math.max(o[1],e[1])]}return t.splice(i,0,e),t}const ey={interpolation:{duration:0,easing:n=>n},spring:{stiffness:.05,damping:.5}};function jc(n,e){if(!n)return null;Number.isFinite(n)&&(n={type:"interpolation",duration:n});const t=n.type||"interpolation";return{...ey[t],...e,...n,type:t}}class Vc extends Q_{constructor(e,t){super(e,t,{startIndices:null,constantValue:null,lastExternalBuffer:null,binaryValue:null,binaryAccessor:null,needsUpdate:!0,needsRedraw:!1,layoutChanged:!1,updateRanges:an}),this.constant=!1,this.settings.update=t.update||(t.accessor?this._autoUpdater:void 0),Object.seal(this.settings),Object.seal(this.state),this._validateAttributeUpdaters()}get startIndices(){return this.state.startIndices}set startIndices(e){this.state.startIndices=e}needsUpdate(){return this.state.needsUpdate}needsRedraw({clearChangedFlags:e=!1}={}){const t=this.state.needsRedraw;return this.state.needsRedraw=t&&!e,t}layoutChanged(){return this.state.layoutChanged}setAccessor(e){var t;(t=this.state).layoutChanged||(t.layoutChanged=!Y_(e,this.getAccessor())),super.setAccessor(e)}getUpdateTriggers(){const{accessor:e}=this.settings;return[this.id].concat(typeof e!="function"&&e||[])}supportsTransition(){return!!this.settings.transition}getTransitionSetting(e){if(!e||!this.supportsTransition())return null;const{accessor:t}=this.settings,r=this.settings.transition,i=Array.isArray(t)?e[t.find(s=>e[s])]:e[t];return jc(i,r)}setNeedsUpdate(e=this.id,t){if(this.state.needsUpdate=this.state.needsUpdate||e,this.setNeedsRedraw(e),t){const{startRow:r=0,endRow:i=1/0}=t;this.state.updateRanges=J_(this.state.updateRanges,[r,i])}else this.state.updateRanges=an}clearNeedsUpdate(){this.state.needsUpdate=!1,this.state.updateRanges=K_}setNeedsRedraw(e=this.id){this.state.needsRedraw=this.state.needsRedraw||e}allocate(e){const{state:t,settings:r}=this;if(r.noAlloc)return!1;if(r.update){const i=this.isConstant;return super.allocate(e,t.updateRanges!==an),t.layoutChanged||(t.layoutChanged=i&&this.device.type==="webgpu"),!0}return!1}updateBuffer({numInstances:e,data:t,props:r,context:i}){if(!this.needsUpdate())return!1;const{state:{updateRanges:s},settings:{update:o,noAlloc:a}}=this;let c=!0;if(o){for(const[u,f]of s)o.call(i,this,{data:t,startRow:u,endRow:f,props:r,numInstances:e});if(this.value)if(this.constant||!this.buffer||this.buffer.byteLength<this.value.byteLength+this.byteOffset){if(this.constant){const u=this.value;this.value=null,this.setConstantValue(i,u)}else this.setData({value:this.value,constant:this.constant});this.constant=!1}else for(const[u,f]of s){const d=Number.isFinite(u)?this.getVertexOffset(u):0,h=Number.isFinite(f)?this.getVertexOffset(f):a||!Number.isFinite(e)?this.value.length:e*this.size;super.updateSubBuffer({startOffset:d,endOffset:h})}this._checkAttributeArray()}else c=!1;return this.clearNeedsUpdate(),this.setNeedsRedraw(),c}setConstantValue(e,t){var r;if(t===void 0||typeof t=="function")return!1;const i=this.isConstant,s=this.settings.transform&&e?this.settings.transform.call(e,t):t,o=this.settings.defaultType;this.state.constantValue=this._normalizeValue(s,new o(this.size),0);const a=this.setData({constant:!0,value:s});if(this.device.type==="webgpu"){let c=this.state.constantValue;this.doublePrecision&&(c instanceof Float32Array||c instanceof Float64Array)&&(c=nn(c,{size:this.size}),this.setAccessor({...this.getAccessor(),stride:this.size*2*Float32Array.BYTES_PER_ELEMENT}));let u=this._buffer;(!u||u.byteLength<c.byteLength)&&(u=this._createBuffer(c.byteLength)),u.write(c),(r=this.state).layoutChanged||(r.layoutChanged=!i),this.constant=!1}return a&&this.setNeedsRedraw(),this.clearNeedsUpdate(),!0}getConstantValue(){return this.isConstant?this.state.constantValue:null}setExternalBuffer(e){const{state:t}=this;return e?(this.clearNeedsUpdate(),t.lastExternalBuffer===e||(t.lastExternalBuffer=e,this.setNeedsRedraw(),this.setData(e)),!0):(t.lastExternalBuffer=null,!1)}setBinaryValue(e,t=null){const{state:r,settings:i}=this;if(!e)return r.binaryValue=null,r.binaryAccessor=null,!1;if(i.noAlloc)return!1;if(r.binaryValue===e)return this.clearNeedsUpdate(),!0;if(r.binaryValue=e,this.setNeedsRedraw(),i.transform||t!==this.startIndices){ArrayBuffer.isView(e)&&(e={value:e});const o=e;Te(ArrayBuffer.isView(o.value),`invalid ${i.accessor}`);const a=!!o.size&&o.size!==this.size;return r.binaryAccessor=Z_(o.value,{size:o.size||this.size,stride:o.stride,offset:o.offset,startIndices:t,nested:a}),!1}return this.clearNeedsUpdate(),this.setData(e),!0}getVertexOffset(e){const{startIndices:t}=this;return(t?e<t.length?t[e]:this.numInstances:e)*this.size}getValue(){const e=this.settings.shaderAttributes,t=super.getValue();if(!e)return t;for(const r in e)Object.assign(t,super.getValue(r,e[r]));return t}getBufferLayout(e){this.state.layoutChanged=!1;const t=this.settings.shaderAttributes,r=super._getBufferLayout(),{stepMode:i}=this.settings;if(i==="dynamic"?r.stepMode=e?e.isInstanced?"instance":"vertex":"instance":r.stepMode=i??"vertex",!t)return r;for(const s in t){const o=super._getBufferLayout(s,t[s]);r.attributes.push(...o.attributes)}return r}_autoUpdater(e,{data:t,startRow:r,endRow:i,props:s,numInstances:o}){const{settings:a,state:c,value:u,size:f,startIndices:d}=e,{accessor:h,transform:g}=a,p=c.binaryAccessor||(typeof h=="function"?h:s[h]);Te(typeof p=="function",`accessor "${h}" is not a function`);let m=e.getVertexOffset(r);const{iterable:b,objectInfo:w}=X_(t,r,i);for(const _ of b){w.index++;let y=p(_,w);if(g&&(y=g.call(this,y)),d){const x=(w.index<d.length-1?d[w.index+1]:o)-d[w.index];if(y&&Array.isArray(y[0])){let S=m;for(const E of y)e._normalizeValue(E,u,S),S+=f}else y&&y.length>f?u.set(y,m):(e._normalizeValue(y,w.target,0),nb({target:u,source:w.target,start:m,count:x}));m+=x*f}else e._normalizeValue(y,u,m),m+=f}}_validateAttributeUpdaters(){const{settings:e}=this;if(!(e.noAlloc||typeof e.update=="function"))throw new Error(`Attribute ${this.id} missing update or accessor`)}_checkAttributeArray(){const{value:e}=this,t=Math.min(4,this.size);if(e&&e.length>=t){let r=!0;switch(t){case 4:r=r&&Number.isFinite(e[3]);case 3:r=r&&Number.isFinite(e[2]);case 2:r=r&&Number.isFinite(e[1]);case 1:r=r&&Number.isFinite(e[0]);break;default:r=!1}if(!r)throw new Error(`Illegal attribute generated for ${this.id}`)}}}const Hc=/^vertex-list<([^<>]+)>$/,Yc=/^value-list<([^<>]+)>$/;function qc(n){return Hc.test(n)}function Qc(n){return Yc.test(n)}function ty(n){const e=Hc.exec(n),t=Yc.exec(n),r=(e==null?void 0:e[1])??(t==null?void 0:t[1])??n;try{F.getVertexFormatInfo(r)}catch{throw new Error(`Unsupported GPUVector format ${n}`)}return r}function $t(n){const e=ty(n),t=qc(n),r=Qc(n),i=F.getVertexFormatInfo(e),s=i.type,o=i.normalized,a=ny(s,o);return{format:n,elementFormat:e,vertexList:t,valueList:r,type:s,signedDataType:ry(e,s),primitiveType:a,components:i.components,byteLength:i.byteLength,integer:i.integer,signed:i.signed,normalized:o,...i.webglOnly?{webglOnly:!0}:{}}}function ny(n,e){if(e)return"f32";switch(n){case"float32":return"f32";case"float16":return"f16";case"uint8":case"uint16":case"uint32":return"u32";case"sint8":case"sint16":case"sint32":return"i32";default:throw new Error(`Unsupported GPUVector component type ${n}`)}}function ry(n,e){if(n==="unorm10-10-10-2")return"uint32";switch(e){case"unorm8":return"uint8";case"snorm8":return"sint8";case"unorm16":return"uint16";case"snorm16":return"sint16";default:return e}}class In{constructor(e){l(this,"buffer");l(this,"format");l(this,"length");l(this,"byteOffset");l(this,"byteStride");const t=F.getVertexFormatInfo(e.format).byteLength,r=e.byteOffset??0,i=e.byteStride??t;if(Fr(e.length,"GPUDataView length"),Fr(r,"GPUDataView byteOffset"),Fr(i,"GPUDataView byteStride"),i<t)throw new Error(`GPUDataView byteStride ${i} is smaller than ${e.format} byte length ${t}`);const s=e.length===0?0:(e.length-1)*i+t,o=r+s;if(!Number.isSafeInteger(s)||!Number.isSafeInteger(o))throw new Error("GPUDataView byte range must use safe integers");if(o>e.buffer.byteLength)throw new Error("GPUDataView exceeds its backing buffer byte length");this.buffer=e.buffer,this.format=e.format,this.length=e.length,this.byteOffset=r,this.byteStride=i}get elementByteLength(){return F.getVertexFormatInfo(this.format).byteLength}get byteLength(){return this.length===0?0:(this.length-1)*this.byteStride+this.elementByteLength}}function Fr(n,e){if(!Number.isSafeInteger(n)||n<0)throw new Error(`${e} must be a non-negative safe integer`)}function Gr(n){return!!(n&&typeof n=="object"&&n.type==="struct")}function iy(n,e){const t=Object.entries(n);if(t.length===0)throw new Error("GPUData struct format must declare at least one field");return e==="packed"?sy(t):oy(t)}function sy(n){const e=[];let t=0,r=0;for(const[i,s]of n){const o=F.getVertexFormatInfo(s);if(o.webglOnly)throw new Error(`Packed GPUData struct field "${i}" uses WebGL-only format ${s}`);t=Vo(t,Math.min(4,o.byteLength)),e.push([i,Object.freeze({format:s,byteOffset:t,byteLength:o.byteLength})]),t+=o.byteLength,r+=o.components}return Object.freeze({type:"struct",layout:"packed",fields:Object.freeze(Object.fromEntries(e)),components:r,byteStride:Vo(t,4),rowByteLength:t})}function oy(n){const e=Object.fromEntries(n.map(([o,a])=>[o,ay(a)])),t=Ji(e,{layout:"wgsl-storage"}),r=[];let i=0,s=0;for(const[o,a]of n){const c=F.getVertexFormatInfo(a),u=t.fields[o].offset*4;r.push([o,Object.freeze({format:a,byteOffset:u,byteLength:c.byteLength})]),i=Math.max(i,u+c.byteLength),s+=c.components}return Object.freeze({type:"struct",layout:"wgsl-storage",fields:Object.freeze(Object.fromEntries(r)),components:s,byteStride:t.byteLength,rowByteLength:i})}function ay(n){const e=F.getVertexFormatInfo(n);switch(e.type){case"float32":return en("f32",e.components);case"sint32":return en("i32",e.components);case"uint32":return en("u32",e.components);default:{const t=Math.ceil(e.byteLength/4);return en("u32",t)}}}function en(n,e){return e===1?n:`vec${e}<${n}>`}function Vo(n,e){return Math.ceil(n/e)*e}class cy{constructor(e,t){l(this,"buffer");l(this,"ownsDataBuffer");this.buffer=e,this.ownsDataBuffer=t}get ownsBuffer(){return this.ownsDataBuffer}transferBufferOwnership(e){if(e.buffer!==this.buffer)throw new Error("GPUData ownership can only be transferred to the same buffer");e.ownsDataBuffer=this.ownsDataBuffer,this.ownsDataBuffer=!1}destroy(){this.ownsDataBuffer&&(this.buffer.destroy(),this.ownsDataBuffer=!1)}}class uy extends cy{constructor(t){const{buffer:r,format:i,length:s,valueLength:o,stride:a,byteOffset:c=0,byteStride:u,rowByteLength:f,ownsBuffer:d=!1,readbackMetadata:h,valueOffsets:g,nullBitmap:p,valueByteLength:m,dataType:b}=t;super(r,d);l(this,"dataType");l(this,"format");l(this,"length");l(this,"valueLength");l(this,"stride");l(this,"byteOffset");l(this,"byteStride");l(this,"rowByteLength");l(this,"readbackMetadata");l(this,"valueOffsets");l(this,"nullBitmap");l(this,"valueByteLength");let w;i?typeof i=="string"?w=i:w=iy(i,t.layout??"wgsl-storage"):w=void 0;const _=Gr(w)?w:void 0,y=typeof w=="string"?$t(w):void 0;if(this.dataType=b,this.format=w,this.length=s,this.valueLength=o??s,this.stride=a??(y==null?void 0:y.components)??(_==null?void 0:_.components)??u??f??1,this.byteOffset=c,this.rowByteLength=f??(_==null?void 0:_.rowByteLength)??(y==null?void 0:y.byteLength)??u??this.stride,this.byteStride=u??(_==null?void 0:_.byteStride)??this.rowByteLength,_){if(this.rowByteLength<_.rowByteLength)throw new Error(`GPUData rowByteLength ${this.rowByteLength} is smaller than struct format row byte length ${_.rowByteLength}`);if(this.byteStride<Math.max(_.byteStride,this.rowByteLength))throw new Error(`GPUData byteStride ${this.byteStride} is smaller than its struct row layout`)}this.readbackMetadata=h,this.valueOffsets=g,this.nullBitmap=p,this.valueByteLength=m}getChild(t){if(!Gr(this.format))return null;const r=this.format.fields[t];return r?new In({buffer:this.buffer,format:r.format,length:this.length,byteOffset:this.byteOffset+r.byteOffset,byteStride:this.byteStride}):null}getChildAt(t){if(!Gr(this.format))return null;const r=Object.values(this.format.fields)[t];return r?new In({buffer:this.buffer,format:r.format,length:this.length,byteOffset:this.byteOffset+r.byteOffset,byteStride:this.byteStride}):null}}const Ti=uy;class wt{constructor(e){l(this,"name");l(this,"dataType");l(this,"format");l(this,"length");l(this,"valueLength");l(this,"stride");l(this,"byteOffset");l(this,"byteStride");l(this,"rowByteLength");l(this,"bufferLayout");l(this,"data",[]);l(this,"device");l(this,"bufferProps");l(this,"isAppendable",!1);l(this,"ownsDataChunks",!0);l(this,"ownedVectors",[]);l(this,"appendableByteLength",0);var t,r,i;switch(e.type){case"buffer":{const{name:s,buffer:o,format:a,length:c,valueLength:u=c,byteOffset:f=0,ownsBuffer:d=!1}=e,{stride:h,byteStride:g,rowByteLength:p}=Ho(e);this.name=s,this.dataType=e.dataType,this.format=a,this.length=c,this.valueLength=u,this.stride=h,this.byteOffset=f,this.byteStride=g,this.rowByteLength=p,this.data.push(new Ti({buffer:o,format:a,length:c,valueLength:u,stride:h,byteOffset:f,byteStride:g,rowByteLength:p,ownsBuffer:d,dataType:e.dataType}));return}case"interleaved":{const{name:s,buffer:o,format:a,length:c,valueLength:u=c,byteOffset:f=0,byteStride:d,attributes:h,ownsBuffer:g=!1}=e;this.name=s,this.dataType=e.dataType,this.format=a,this.length=c,this.valueLength=u,this.stride=d,this.byteOffset=f,this.byteStride=d,this.rowByteLength=d,this.bufferLayout={name:s,byteStride:d,attributes:h},this.data.push(new Ti({buffer:o,format:a,length:c,valueLength:u,stride:d,byteOffset:f,byteStride:d,rowByteLength:d,ownsBuffer:g,dataType:e.dataType}));return}case"data":{const s=e.format??ly(e.data),o=s?$t(s):void 0,{name:a,data:c,stride:u=((t=c[0])==null?void 0:t.stride)??(o==null?void 0:o.components)??1,valueLength:f=c.reduce((m,b)=>m+b.valueLength,0),byteStride:d=((r=c[0])==null?void 0:r.byteStride)??(o==null?void 0:o.byteLength),rowByteLength:h=((i=c[0])==null?void 0:i.rowByteLength)??(o==null?void 0:o.byteLength),bufferLayout:g,ownsData:p=!1}=e;if(d===void 0||h===void 0)throw new Error("GPUVector requires format or explicit byte layout metadata");s&&fy(c,s),this.name=a,this.dataType=e.dataType,this.format=s,this.length=c.reduce((m,b)=>m+b.length,0),this.valueLength=f,this.stride=u,this.byteOffset=c.length===1?c[0].byteOffset:0,this.byteStride=d,this.rowByteLength=h,this.bufferLayout=g,this.ownsDataChunks=p,this.data.push(...c);return}case"appendable":{const{name:s,device:o,format:a,valueLength:c=0,bufferProps:u}=e,{stride:f,byteStride:d,rowByteLength:h}=Ho(e);this.name=s,this.dataType=e.dataType,this.format=a,this.length=0,this.valueLength=c,this.stride=f,this.byteOffset=0,this.byteStride=d,this.rowByteLength=h,this.device=o,this.bufferProps=u,this.isAppendable=!0;return}}}get ownsBuffer(){return this.ownsDataChunks&&this.data.some(e=>e.ownsBuffer)||this.ownedVectors.some(e=>e.ownsBuffer)}get capacityRows(){return this.isAppendable?this.length:void 0}get appendedByteLength(){return this.appendableByteLength}addData(e){if(this.format&&e.format!==this.format)throw new Error("GPUVector.addData() requires matching formats");if(e.byteStride!==this.byteStride)throw new Error("GPUVector.addData() requires matching byteStride");if(e.rowByteLength!==this.rowByteLength)throw new Error("GPUVector.addData() requires matching rowByteLength");return this.data.push(e),this.length+=e.length,this.valueLength+=e.valueLength,this}appendDataChunk(e,t=this.appendableByteLength+e.buffer.byteLength){if(!this.isAppendable)throw new Error("GPUVector.appendDataChunk() requires appendable vector storage");if(this.format&&e.format!==this.format)throw new Error("GPUVector.appendDataChunk() requires matching formats");if(e.byteStride!==this.byteStride||e.rowByteLength!==this.rowByteLength)throw new Error("GPUVector.appendDataChunk() requires matching byte layout metadata");return this.data.push(e),this.length+=e.length,this.valueLength+=e.valueLength,this.appendableByteLength=t,this}resetLastBatch(){if(!this.isAppendable)throw new Error("GPUVector.resetLastBatch() requires appendable vector storage");for(const e of this.data.splice(0))e.destroy();return this.length=0,this.valueLength=0,this.appendableByteLength=0,this}retainOwnedVectors(e){return this.ownedVectors.push(...e),this}transferBufferOwnership(e){const t=this.data[0],r=e.data[0];if(!t||!r||t.buffer!==r.buffer)throw new Error("GPUVector ownership can only be transferred to the same buffer");t.transferBufferOwnership(r)}destroy(){if(this.ownsDataChunks)for(const e of this.data)e.destroy();for(const e of this.ownedVectors.splice(0))e.destroy()}}function Ho(n){const e=n.format?$t(n.format):void 0,t=n.rowByteLength??n.byteStride??(e==null?void 0:e.byteLength);if(t===void 0)throw new Error("GPUVector requires format or explicit rowByteLength");return{stride:n.stride??(e==null?void 0:e.components)??1,byteStride:n.byteStride??t,rowByteLength:t}}function ly(n){var e;return(e=n[0])==null?void 0:e.format}function fy(n,e){if(n.find(r=>r.format!==e))throw new Error("GPUVector data chunks must share the declared format")}class dy{constructor(){l(this,"poolSize",20);l(this,"bufferPools");this.bufferPools=new Map}createOrReuse(e,t){if(t>e.limits.maxBufferSize)throw new Error(`Buffer pool cannot allocate ${t} bytes: device.limits.maxBufferSize is ${e.limits.maxBufferSize}`);const r=this.bufferPools.get(e),i=r?r.findIndex(o=>o.byteLength>=t):-1;if(i<0)return e.createBuffer({usage:A.VERTEX|A.STORAGE|A.COPY_DST|A.COPY_SRC,byteLength:t});const[s]=r.splice(i,1);return s}recycle(e){const t=e.device;this.bufferPools.has(t)||this.bufferPools.set(t,[]);const r=this.bufferPools.get(t),i=r.findIndex(s=>s.byteLength>e.byteLength);i<0?r.push(e):r.splice(i,0,e),this.purge()}purge(){for(const[e,t]of this.bufferPools){const r=e.isLost?0:this.poolSize;for(;t.length>r;)t.shift().destroy();t.length===0&&this.bufferPools.delete(e)}}}const at=new dy;class I{constructor(e){l(this,"type");l(this,"size");l(this,"normalized");l(this,"isConstant");l(this,"length");l(this,"ValueType");l(this,"source",null);l(this,"format");l(this,"_id");l(this,"_destroyed",!1);l(this,"_value");l(this,"_offset");l(this,"_stride");l(this,"_byteLength");l(this,"_gpuVector");l(this,"_bufferOwnership","owned");l(this,"_targetBuffer");const{id:t,value:r,buffer:i,gpuData:s,format:o,source:a=null,isConstant:c=!1}=e;if(!a&&!r&&!i&&!s)throw new Error("GPUDataEvaluator must have a value source");let{type:u,size:f,offset:d,stride:h,normalized:g,length:p}=e;if(a instanceof I?(u=u??a.type,f=f??a.size,d=d??a.offset,h=h??a.stride,g=g??a.normalized,p=p??a.length):(f=f??1,d=d??0,g=g??!1,p=c?1:p),!u)throw new Error("GPUDataEvaluator: type not defined");if(this._id=t,this.type=u,this.size=f,this.ValueType=gt(this.type),this._offset=d,this._stride=h||this.ValueType.BYTES_PER_ELEMENT*f,this.normalized=g,this.source=a,this.format=o,p===void 0)if(c)p=1;else{if(!r)throw new Error("GPUDataEvaluator: length not defined");p=Math.ceil(r.byteLength/this.stride)}this.isConstant=c,this.length=p;const m=this.ValueType.BYTES_PER_ELEMENT*this.size;this._byteLength=p===0?0:(p-1)*this.stride+m,this._value=r,this._bufferOwnership=a instanceof I||i||s?"borrowed":"owned",s?this._gpuVector=new wt({type:"data",name:this._id??"data",format:s.format,data:[s],stride:s.stride,byteStride:s.byteStride,rowByteLength:s.rowByteLength}):i&&(this._gpuVector=this.createGPUVectorView({buffer:i,name:this._id,format:this.format}))}static get bufferPoolSize(){return at.poolSize}static set bufferPoolSize(e){if(!Number.isSafeInteger(e)||e<0)throw new Error("GPUDataEvaluator.bufferPoolSize must be a non-negative safe integer");at.poolSize=e,at.purge()}get offset(){return this._offset}get stride(){return this._stride}get byteLength(){return this._byteLength}static fromArray(e,{type:t,size:r=1,offset:i=0,stride:s=0,normalized:o=!1}){let a=t,c;if(Array.isArray(e)){a=a||"float32";const f=gt(a);c=new f(e)}else e instanceof Float64Array?(a="uint32",r*=2,i*=2,s*=2,c=new Uint32Array(e.buffer,e.byteOffset,e.byteLength/4)):(a=a||Na(e),c=e);const u=`<${a} * ${r}>`;return new I({id:u,type:a,size:r,offset:i,stride:s,normalized:o,value:c})}static fromConstant(e,t="float32"){const r=gt(t);let i;return Array.isArray(e)?i=`[${e.join(",")}]`:(i=String(e),e=[e]),new I({id:i,isConstant:!0,type:t,size:e.length,value:new r(e)})}static fromGPUData(e,t={}){gy(e);const r=new In({buffer:e.buffer,format:e.format,length:e.length,byteOffset:e.byteOffset,byteStride:e.byteStride});return new I({...qo(r),id:t.id,gpuData:e})}static fromGPUDataView(e,t={}){return new I({...qo(e),id:t.id,buffer:e.buffer})}get value(){return this._value||(this.source instanceof I?this.source.value:void 0)}get evaluated(){return!!this._gpuVector}get id(){return this._id}get gpuVector(){if(!this._gpuVector)throw new Error(`${this} not evaluated`);return this._gpuVector}get buffer(){return tn(this.gpuVector)}setTargetBuffer({buffer:e,byteOffset:t=0,byteStride:r=this.stride}){if(this._destroyed)throw new Error(`GPUDataEvaluator ${this} already destroyed`);if(this._gpuVector)throw new Error(`GPUDataEvaluator ${this} already evaluated`);if(!this.source||this.source instanceof I)throw new Error("GPUDataEvaluator target buffers require a deferred operation source");this._targetBuffer={buffer:e,byteOffset:t,byteStride:r}}async evaluate(e,t={}){if(this._destroyed)throw new Error(`GPUDataEvaluator ${this} already destroyed`);if(this._gpuVector)return this._gpuVector;let r;if(this.source instanceof I){const i=await this.source.evaluate(e);return this._gpuVector=this.createGPUVectorView({...t,buffer:tn(i)}),this._gpuVector}if(r=this._getEvaluationBuffer(e),this._value)r.write(this._value);else{const i=await this.source.execute(e,r);if(!i.success)throw i.error||new Error(`${this.source} evaluation failed`);i.value&&(this._value=i.value)}return this._gpuVector=this.createGPUVectorView({...t,buffer:r}),this._gpuVector}evaluateSync(e,t={}){if(this._destroyed)throw new Error(`GPUDataEvaluator ${this} already destroyed`);if(this._gpuVector)return this._gpuVector;let r;if(this.source instanceof I){const i=this.source.evaluateSync(e);return this._gpuVector=this.createGPUVectorView({...t,buffer:tn(i)}),this._gpuVector}if(r=this._getEvaluationBuffer(e),this._value)r.write(this._value);else{const i=this.source.executeSync(e,r);if(!i.success)throw i.error||new Error(`${this.source} evaluation failed`);i.value&&(this._value=i.value)}return this._gpuVector=this.createGPUVectorView({...t,buffer:r}),this._gpuVector}createGPUVectorView(e){const t=e.name??this._id??"vector",r=e.format??this.format??by(this.type,this.size,this.normalized);if(e.interleaved){const i=typeof e.interleaved=="object"&&e.interleaved.attributes?e.interleaved.attributes:my(this);return new wt({type:"interleaved",name:t,buffer:e.buffer,format:e.format??this.format,length:this.length,byteOffset:this.offset,byteStride:this.stride,attributes:i,ownsBuffer:!1})}return new wt({type:"buffer",name:t,buffer:e.buffer,format:r,length:this.length,stride:this.size,byteOffset:this.offset,byteStride:this.stride,rowByteLength:this.ValueType.BYTES_PER_ELEMENT*this.size,ownsBuffer:!1})}_getEvaluationBuffer(e){const t=this._targetBuffer;if(!t)return at.createOrReuse(e,this.byteLength);if(t.buffer.device!==e)throw new Error("GPUDataEvaluator target buffer belongs to a different device");const r=this.ValueType.BYTES_PER_ELEMENT*this.size,i=this.length===0?0:(this.length-1)*t.byteStride+r;if(t.byteOffset+i>t.buffer.byteLength)throw new Error("GPUDataEvaluator target buffer is too small for the output layout");return this._offset=t.byteOffset,this._stride=t.byteStride,this._byteLength=i,this._bufferOwnership="borrowed",this._targetBuffer=void 0,t.buffer}async readValue(e=0,t){const{ValueType:r}=this,{size:i,offset:s,stride:o,length:a}=this,c=r.BYTES_PER_ELEMENT*i;if(t=t??a,e=Math.max(0,Math.min(a,e)),t=Math.max(e,Math.min(a,t)),this._value)return hy(this,this._value,e,t);const u=t-e;if(u===0)return new r(0);const f=s+e*o,d=o===c?u*c:(u-1)*o+c,h=await this.buffer.readAsync(f,d),g=new r(h.buffer,h.byteOffset,h.byteLength/r.BYTES_PER_ELEMENT);if(o===c)return g;const p=new Uint8Array(c*u);for(let m=0;m<u;m++){const b=m*o;p.set(h.subarray(b,b+c),m*c)}return new r(p.buffer)}async ensureCPUValue(){const e=this.value;if(e)return e;const t=await this.buffer.readAsync(0,this.offset+this.byteLength);if(t.byteLength%this.ValueType.BYTES_PER_ELEMENT!==0)throw new Error(`${this} backing buffer byte length is not aligned to its scalar type`);const r=t.slice();return this._value=new this.ValueType(r.buffer,r.byteOffset,r.byteLength/this.ValueType.BYTES_PER_ELEMENT),this._value}ensureCPUValueSync(){const e=this.value;if(e)return e;throw new Error(`${this} CPU value is not available for synchronous evaluation`)}toString(){var e;return this._id??((e=this.source)==null?void 0:e.toString())??this.constructor.name}destroy(){this._gpuVector&&(this._bufferOwnership==="owned"&&at.recycle(tn(this._gpuVector)),this._gpuVector=void 0),this._targetBuffer=void 0,this._destroyed=!0}}function hy(n,e,t,r){const{ValueType:i,size:s,offset:o,stride:a}=n,c=a/i.BYTES_PER_ELEMENT,u=o/i.BYTES_PER_ELEMENT,f=r-t;if(c===s){const h=u+t*c;return e.subarray(h,h+f*s)}const d=new i(f*s);for(let h=0;h<f;h++){const g=u+(t+h)*c;d.set(e.subarray(g,g+s),h*s)}return d}function Yo(n){if(n instanceof I)return n;if(typeof n=="number"||Array.isArray(n))return I.fromConstant(n);if(n instanceof Ti)return I.fromGPUData(n);if(n instanceof In)return I.fromGPUDataView(n);throw new Error("getGPUDataEvaluator() requires GPUDataEvaluator, GPUData, GPUDataView, number, or number[]")}function gy(n){if(!n.format)throw new Error("GPUDataEvaluator.fromGPUData() requires GPUData format metadata");if(qc(n.format)||Qc(n.format))throw new Error("GPUDataEvaluator.fromGPUData() does not support variable-length input");const t=$t(n.format).byteLength;if(n.rowByteLength!==t)throw new Error(`GPUDataEvaluator.fromGPUData() requires rowByteLength ${t} for GPUData`)}function qo(n){const e=$t(n.format),t=gt(e.signedDataType),r=t.BYTES_PER_ELEMENT*e.components;if(e.byteLength!==r)throw new Error(`GPUDataEvaluator does not support packed vertex format ${n.format}: ${e.byteLength} physical bytes cannot expose ${e.components} ${e.signedDataType} components`);if(n.byteOffset%t.BYTES_PER_ELEMENT!==0||n.byteStride%t.BYTES_PER_ELEMENT!==0)throw new Error(`GPUDataEvaluator requires ${n.format} offset and stride aligned to ${t.BYTES_PER_ELEMENT} bytes`);return{type:e.signedDataType,size:e.components,offset:n.byteOffset,stride:n.byteStride,normalized:e.normalized,length:n.length,format:n.format}}function tn(n){const e=py(n).buffer;return e instanceof X?e.buffer:e}function py(n){const[e,...t]=n.data;if(!e||t.length>0)throw new Error(`GPUDataEvaluator requires exactly one GPUData chunk for "${n.name}"`);return e}function my(n){const e=[];return Xc(n,e,{byteOffset:0}),e}function Xc(n,e,t){const r=n.source;if(r&&!(r instanceof I)&&r.name==="interleave"){for(const i of Object.values(r.inputs))i instanceof I&&Xc(i,e,t);return}e.push({attribute:n.id??n.toString(),format:Zc(n.type,n.size,n.normalized),byteOffset:t.byteOffset}),t.byteOffset+=n.ValueType.BYTES_PER_ELEMENT*n.size}function Zc(n,e,t=!1){if(e<1||e>4)throw new Error(`Cannot synthesize a GPUVector vertex format with ${e} components`);let r=n;if(t)switch(n){case"uint8":r="unorm8";break;case"sint8":r="snorm8";break;case"uint16":r="unorm16";break;case"sint16":r="snorm16";break;case"float32":r="float32";break;default:throw new Error(`Unsupported normalized vertex format for ${n}`)}return(r==="uint8"||r==="sint8"||r==="uint16"||r==="sint16"||r==="unorm8"||r==="snorm8"||r==="unorm16"||r==="snorm16")&&e===3?`${r}x3-webgl`:`${r}${e===1?"":`x${e}`}`}function by(n,e,t=!1){return e>=1&&e<=4?Zc(n,e,t):void 0}class Qe{constructor({id:e,gpuDataEvaluators:t,gpuVector:r,format:i}){l(this,"gpuDataEvaluators");l(this,"format");l(this,"length");l(this,"id");l(this,"_gpuVector");l(this,"_ownsGPUDataEvaluators");l(this,"_destroyed",!1);if(t.length===0)throw new Error("GPUVectorEvaluator requires at least one GPUData evaluator");_y(t),this.id=e,this.gpuDataEvaluators=t,this.format=i??t[0].format,this.length=t.reduce((s,o)=>s+o.length,0),this._gpuVector=r,this._ownsGPUDataEvaluators=!r}static fromGPUVector(e){if(e.bufferLayout)throw new Error(`GPUVectorEvaluator.fromGPUVector() does not accept interleaved vector "${e.name}"`);if(e.data.length===0)throw new Error(`GPUVectorEvaluator.fromGPUVector() requires GPUData for "${e.name}"`);return new Qe({id:e.name,gpuDataEvaluators:e.data.map(t=>I.fromGPUData(t,{id:e.name})),gpuVector:e,format:e.format})}static fromGPUDataEvaluators(e,t={}){return new Qe({id:t.id,gpuDataEvaluators:e,format:t.format})}get evaluated(){return!!this._gpuVector}get gpuVector(){if(!this._gpuVector)throw new Error(`${this} not evaluated`);return this._gpuVector}mapGPUData(e){return Qe.fromGPUDataEvaluators(this.gpuDataEvaluators.map((t,r)=>e(t,r)),{id:this.id})}async evaluate(e,t={}){if(this._destroyed)throw new Error(`GPUVectorEvaluator ${this} already destroyed`);if(this._gpuVector)return this._gpuVector;const r=await Promise.all(this.gpuDataEvaluators.map(a=>a.evaluate(e,t))),i=r[0],s=r.map(Qo),o=t.format??this.format??i.format;return this._gpuVector=new wt({type:"data",name:t.name??this.id??"vector",format:o,data:s,stride:i.stride,byteStride:i.byteStride,rowByteLength:i.rowByteLength,bufferLayout:i.bufferLayout}),this._gpuVector}evaluateSync(e,t={}){if(this._destroyed)throw new Error(`GPUVectorEvaluator ${this} already destroyed`);if(this._gpuVector)return this._gpuVector;const r=this.gpuDataEvaluators.map(a=>a.evaluateSync(e,t)),i=r[0],s=r.map(Qo),o=t.format??this.format??i.format;return this._gpuVector=new wt({type:"data",name:t.name??this.id??"vector",format:o,data:s,stride:i.stride,byteStride:i.byteStride,rowByteLength:i.rowByteLength,bufferLayout:i.bufferLayout}),this._gpuVector}destroy(){if(this._ownsGPUDataEvaluators)for(const e of this.gpuDataEvaluators)e.destroy();this._gpuVector=void 0,this._destroyed=!0}toString(){return this.id??this.constructor.name}}function _y(n){const e=n[0];for(const t of n.slice(1))if(t.type!==e.type||t.size!==e.size||t.normalized!==e.normalized||t.format!==e.format)throw new Error("GPUVectorEvaluator requires matching GPUData evaluator layouts")}function Qo(n){const[e,...t]=n.data;if(!e||t.length>0)throw new Error(`GPUVectorEvaluator requires one GPUData chunk for "${n.name}"`);return e}const yy={add:{arity:2,symbol:"arithmetic_add"},subtract:{arity:2,symbol:"arithmetic_subtract"},multiply:{arity:2,symbol:"arithmetic_multiply"},divide:{arity:2,symbol:"arithmetic_divide"},pow:{arity:2,symbol:"pow"},sqrt:{arity:1,symbol:"sqrt"},abs:{arity:1,symbol:"abs"},sin:{arity:1,symbol:"sin"},cos:{arity:1,symbol:"cos"},tan:{arity:1,symbol:"arithmetic_tan"},exp:{arity:1,symbol:"exp"},log:{arity:1,symbol:"log"}};function bs({elementWise:n,func:e,inputs:t,output:r,outputBuffer:i}){const s=Array.isArray(t)?t:Object.values(t);for(const p of s)if(!p.value)throw new Error(`${p} does not have CPU value`);const o=r.length,a=r.size,c=new r.ValueType(o*a);for(let p=0;p<o;p++){const m=s.map(b=>V(b,p));if(n)for(let b=0;b<a;b++)c[p*a+b]=e.apply(null,m.map(w=>w[b]));else e.call(null,c.subarray(p*a,p*a+a),...m)}const u=r.ValueType.BYTES_PER_ELEMENT,f=r.offset/u,d=r.stride/u,h=a;let g=c;if(f!==0||d!==h){g=new r.ValueType(f+r.byteLength/u);for(let p=0;p<o;p++){const m=p*h,b=f+p*d,w=c.subarray(m,m+a);g.set(w,b),i.write(w,b*u)}}else i.write(c);return{success:!0,value:g}}function V(n,e){const t=n.value,r=n.size,i=n.offset/n.ValueType.BYTES_PER_ELEMENT,s=n.stride/n.ValueType.BYTES_PER_ELEMENT,o=n.isConstant?0:e,a=i+o*s,c=t.slice(a,a+r);if(!n.normalized)return c;const u=new Float32Array(r);for(let f=0;f<r;f++)u[f]=wy(c[f],n.type);return u}function wy(n,e){switch(e){case"uint8":return n/255;case"uint16":return n/65535;case"uint32":return n/4294967295;case"sint8":return Math.max(n/127,-1);case"sint16":return Math.max(n/32767,-1);case"sint32":return Math.max(n/2147483647,-1);case"float32":return n;default:throw new Error(`Unsupported normalized source type ${e}`)}}const vy=({inputs:n,output:e,target:t})=>{for(const i of Object.values(n.namedInputs))if(!i.value)throw new Error(`${i} does not have CPU value`);const r=new e.ValueType(e.length*e.size);for(let i=0;i<e.length;i++){const s=Object.fromEntries(Object.entries(n.namedInputs).map(([o,a])=>[o,V(a,i)]));for(let o=0;o<e.size;o++)r[i*e.size+o]=Kc(n.expression,s,o)}return t.write(r),{success:!0,value:r}};function Kc(n,e,t){switch(n.kind){case"input":{const r=e[n.name];return t<r.length?r[t]:r.length===1?r[0]:0}case"literal":return Array.isArray(n.value)?n.value[t]??0:n.value;case"call":{xy(n.op,n.args.length);const r=n.args.map(i=>Kc(i,e,t));switch(n.op){case"add":return r[0]+r[1];case"subtract":return r[0]-r[1];case"multiply":return r[0]*r[1];case"divide":return r[0]/r[1];case"pow":return Math.pow(r[0],r[1]);case"sqrt":return Math.sqrt(r[0]);case"abs":return Math.abs(r[0]);case"sin":return Math.sin(r[0]);case"cos":return Math.cos(r[0]);case"tan":return Math.tan(r[0]);case"exp":return Math.exp(r[0]);case"log":return Math.log(r[0]);default:{const i=n.op;throw new Error(`Unsupported arithmetic op ${i}`)}}}default:{const r=n;throw new Error(`Unsupported expression node ${r.kind}`)}}}function xy(n,e){const t=yy[n].arity;if(e!==t)throw new Error(`Arithmetic op '${n}' expects ${t} args, got ${e}`)}const Sy=({inputs:n,output:e,target:t})=>{const{sourceValues:r}=n;if(!r.value)throw new Error(`${r} does not have CPU value`);const s=new e.ValueType(e.length*e.size);if(r.length===0)return{success:!1,error:new Error(`${r} is empty`)};for(let o=0;o<r.size;o++){const a=V(r,0)[o],c=o*e.size,u=c+1;s[c]=a,s[u]=a;for(let f=1;f<r.length;f++){const d=V(r,f)[o];d<s[c]&&(s[c]=d),d>s[u]&&(s[u]=d)}}return t.write(s),{success:!0,value:s}},Ey=({inputs:n,output:e,target:t})=>bs({func:(r,i)=>{const s=r.length/2,o=new Float64Array(i.buffer);for(let a=0;a<s;a++){const c=o[a];r[a]=Math.fround(c),r[a+s]=c-r[a]}return r},inputs:n,output:e,outputBuffer:t}),Ay=async({inputs:n,output:e,target:t})=>{const{ids:r,sourceValues:i}=n,s=r.value,o=i.value;if(!s)throw new Error(`${r} does not have CPU value`);if(!o)throw new Error(`${i} does not have CPU value`);const a=new e.ValueType(e.length*e.size),c=new Array(e.size).fill(0);for(let u=0;u<e.length;u++){const f=V(r,u),d=Number(f[0]),h=Ty(d,i.length)?V(i,d):c;a.set(h,u*e.size)}return t.write(a),{success:!0,value:a}};function Ty(n,e){return Number.isInteger(n)&&n>=0&&n<e}const Ly=({inputs:n,output:e,target:t})=>bs({func:(r,...i)=>{let s=0;for(const o of i)r.set(o,s),s+=o.length},inputs:n,output:e,outputBuffer:t}),Py=({inputs:n,output:e,target:t})=>{const{x:r,y:i}=n,s=new e.ValueType(e.length);for(let o=0;o<e.length;o++){const a=V(r,o),c=V(i,o);let u=0;for(let f=0;f<r.size;f++)u+=a[f]*c[f];s[o]=u}return t.write(s),{success:!0,value:s}},By=({inputs:n,output:e,target:t})=>{const{x:r,y:i}=n,s=new e.ValueType(e.length);for(let o=0;o<e.length;o++){const a=V(r,o),c=V(i,o);let u=1;for(let f=0;f<r.size;f++)if(a[f]!==c[f]){u=0;break}s[o]=u}return t.write(s),{success:!0,value:s}},Cy=({inputs:n,output:e,target:t})=>{const{x:r}=n,i=new e.ValueType(e.length);for(let s=0;s<e.length;s++){const o=V(r,s);let a=0;for(let c=0;c<r.size;c++)a+=o[c]*o[c];i[s]=Math.sqrt(a)}return t.write(i),{success:!0,value:i}},Iy=async({inputs:n,output:e,target:t})=>{const{segments:r,vertexCount:i}=n,s=r.value;if(!s)throw new Error(`${r} does not have CPU value`);Oy(s,r,i);const o=new e.ValueType(e.length*e.size);let a=0;for(let c=0;c<i;c++){for(;a+1<r.length&&s[Li(r,a+1)]<=c;)a++;const u=s[Li(r,a)],f=c*e.size;o[f]=a,o[f+1]=c-u}return t.write(o),{success:!0,value:o}};function Oy(n,e,t){if(e.length<1)throw new Error("segmentedMap segments must contain at least one segment start");let r=0;for(let i=0;i<e.length;i++){const s=n[Li(e,i)];if(i===0&&s!==0)throw new Error(`segmentedMap segments must start at 0, got ${s}`);if(i>0&&s<r)throw new Error(`segmentedMap segments must be non-decreasing, got ${s} after ${r}`);r=s}if(r>t)throw new Error(`segmentedMap last segment start must be <= vertexCount, got ${r} > ${t}`)}function Li(n,e){return n.offset/n.ValueType.BYTES_PER_ELEMENT+e*(n.stride/n.ValueType.BYTES_PER_ELEMENT)}const Ry=async({inputs:n,output:e,target:t})=>{const{condition:r,whenTrue:i,whenFalse:s}=n,o=new e.ValueType(e.length*e.size);for(let a=0;a<e.length;a++){const c=V(r,a),u=V(i,a),f=V(s,a);for(let d=0;d<e.size;d++){const h=zr(c,r.size,d);o[a*e.size+d]=h!==0?zr(u,i.size,d):zr(f,s.size,d)}}return t.write(o),{success:!0,value:o}};function zr(n,e,t){return t<e?n[t]:e===1?n[0]:0}const My=({inputs:n,output:e,target:t})=>{const r=new e.ValueType(e.length);for(let i=0;i<e.length;i++)r[i]=n.start+i*n.step;return t.write(r),{success:!0,value:r}},Dy=({inputs:n,output:e,target:t})=>{const{columns:r}=n;return bs({func:(i,s)=>{for(let o=0;o<r.length;o++)i[o]=s[r[o]]},inputs:{x:n.x},output:e,outputBuffer:t})},$y=Object.freeze(Object.defineProperty({__proto__:null,arithmetic:vy,dot:Py,equalAll:By,extent:Sy,fround:Ey,gather:Ay,interleave:Ly,length:Cy,segmentedMap:Iy,select:Ry,sequence:My,swizzle:Dy},Symbol.toStringTag,{value:"Module"}));class ky{constructor(){l(this,"_modules",{cpu:$y})}add(e,t){const r=this._modules[e];if(typeof t.then=="function"){const s=Promise.all([Promise.resolve(r||{}),t]).then(([o,a])=>({...o,...a}));return this._modules[e]=s,s.then(o=>{this._modules[e]=o}).catch(o=>{v.error(`Failed to register ${e} backend: ${o}`)()}),s}if(r&&typeof r.then=="function"){const s=Promise.resolve(r).then(o=>({...o,...t})).then(o=>(this._modules[e]=o,o)).catch(o=>{throw v.error(`Failed to register ${e} backend: ${o}`)(),o});return this._modules[e]=s,s}const i={...r||{},...t};return this._modules[e]=i,Promise.resolve(i)}async get(e,t){let r=this._modules[e];if(!r)if(e==="webgl")r=this.add("webgl",xs(()=>import("./index-B3DTSFHT.js"),__vite__mapDeps([0,1,2,3,4,5,6]),import.meta.url));else if(e==="webgpu")r=this.add("webgpu",xs(()=>import("./index-DbQH83pR.js"),__vite__mapDeps([7,1,2,3,4,5,6]),import.meta.url));else throw new Error(`${e} backend not registered`);const s=(await r)[t];if(typeof s!="function")throw new Error(`${e} backend does not implement ${t}`);return s}getSync(e,t){const r=this._modules[e];if(!r)throw new Error(`${e} backend not registered`);if(typeof r.then=="function")throw new Error(`${e} backend is not loaded yet`);const s=r[t];if(typeof s!="function")throw new Error(`${e} backend does not implement ${t}`);return s}clear(){this._modules={}}}const Pi=new ky;class Uy{constructor(e){l(this,"inputs");l(this,"dependencies");this.inputs=e,this.dependencies=Array.from(e instanceof Array?e:Object.values(e)).filter(t=>t instanceof I)}async execute(e,t){return await this._resolveDependencies(e),await this._executeWithHandler(await Pi.get(this._getHandlerRegistry(e),this.name),t)}executeSync(e,t){this._resolveDependenciesSync(e);const r=this._executeWithHandler(Pi.getSync(this._getHandlerRegistry(e),this.name),t);if(Ny(r))throw new Error(`${this.name} returned a Promise in executeSync()`);return r}shouldExecuteOnCPU(){return this.output.length<=1&&Array.from(this.dependencies).every(e=>!!e.value)}_getHandlerRegistry(e){return this.shouldExecuteOnCPU()?"cpu":e.type}async _resolveDependencies(e){for(const r of this.dependencies)await r.evaluate(e);if(this._getHandlerRegistry(e)==="cpu"||e.type==="null")for(const r of this.dependencies)await r.ensureCPUValue()}_resolveDependenciesSync(e){for(const r of this.dependencies)r.evaluateSync(e);if(this._getHandlerRegistry(e)==="cpu"||e.type==="null")for(const r of this.dependencies)r.ensureCPUValueSync()}_executeWithHandler(e,t){return e({device:t.device,inputs:this.inputs,output:this.output,target:t})}}function Ny(n){return typeof(n==null?void 0:n.then)=="function"}function Fy(...n){let e=Gy(n.map(t=>t.type));return e[0]!=="f"&&n.some(t=>t.normalized)&&(e="float32"),{isConstant:n.every(t=>t.isConstant),type:e,size:n.reduce((t,r)=>Math.max(t,r.size),0),length:n.reduce((t,r)=>Math.max(t,r.length),0)}}function Gy(n){let e=0,t=0;for(const r of n){if(r[0]==="f")return"float32";const i=r.endsWith("8")?8:r.endsWith("6")?16:32;r[0]==="u"?e=Math.max(e,i):t=Math.max(t,i)}return e&&!t?`uint${e}`:t&&e<32?`sint${Math.max(t,e*2)}`:"float32"}class zy extends Uy{constructor(t){super(t);l(this,"name","interleave");l(this,"output");const{isConstant:r,type:i,length:s}=Fy(...t);this.output=new I({isConstant:r,type:i,size:t.reduce((o,a)=>o+a.size,0),length:s,source:this})}toString(){return`_${this.inputs.join("_")}_`}}function Wy(...n){if(n.length===0)throw new Error("interleave() requires at least one input");return n.length===1?Yo(n[0]):new zy(n.map(Yo)).output}function jy(n,e){const t=Hy(e);for(const r of t)r.evaluateSync(n);return Vy(t),e}function Vy(n){const e=new Set(n.flatMap(qy)),t=new Set;for(const r of n)cn(r,t);for(const r of t)r.evaluated&&!e.has(r.buffer)&&r.destroy()}function Hy(n){const e=new Set;return Bi(n,e,new Set),Array.from(e)}function Bi(n,e,t){if(Qy(n)){e.add(n);return}if(!(!n||typeof n!="object"||t.has(n))){if(t.add(n),Array.isArray(n)){for(const r of n)Bi(r,e,t);return}if(Yy(n))for(const r of Object.values(n))Bi(r,e,t)}}function Yy(n){const e=Object.getPrototypeOf(n);return e===Object.prototype||e===null}function cn(n,e){if(n instanceof Qe){for(const r of n.gpuDataEvaluators)cn(r,e);return}const t=n.source;if(t){if(t instanceof I){e.has(t)||(e.add(t),cn(t,e));return}for(const r of t.dependencies)e.has(r)||(e.add(r),cn(r,e))}}function qy(n){return n instanceof I?[n.buffer]:n.gpuVector.data.map(e=>e.buffer instanceof X?e.buffer.buffer:e.buffer)}function Qy(n){return n instanceof I||n instanceof Qe}const Xy=65535;function Zy(n,e){const t=ew(e),r=Math.max(1,Math.ceil(n)),i=Math.min(r,t),s=Math.min(Math.ceil(r/i),t),o=Math.ceil(r/i/s);if(o>t)throw new Error(`WebGPU dispatch requires ${r} workgroups, exceeding the 3D dispatch limit of ${t} per dimension`);return{x:i,y:s,z:o}}function Ky(n,e="workgroupId"){return`((${e}.z * ${n.y}u + ${e}.y) * ${n.x}u + ${e}.x)`}function Jy(n,e,t="workgroupId",r="localId"){return`(${Ky(n,t)} * ${e}u + ${r}.x)`}function ew(n){return Number.isFinite(n)&&n>0?Math.floor(n):Xy}function Ci(n,e){switch(n){case"u32":return`${e}u`;case"f32":return Number.isInteger(e)?`${e}.0`:`${e}`;default:return`${e}`}}function Zv(n,e){switch(n){case"uint32":return Ci("u32",Math.trunc(e));case"sint32":return`${Math.trunc(e)}`;case"float32":return Ci("f32",e);default:throw new Error(`WebGPU operations only support 32-bit output types, got ${n}`)}}function tw(n){switch(n){case"uint32":return"0u";case"sint32":return"0";case"float32":return"0.0";default:throw new Error(`WebGPU operations only support 32-bit output types, got ${n}`)}}function Ee(n){switch(n){case"uint32":return"u32";case"sint32":return"i32";case"float32":return"f32";default:throw new Error(`WebGPU operations only support 32-bit storage types, got ${n}`)}}const Wr=64,nw="GPGPU Operation Counts",rw="Computation Runs",iw=new Ke;function sw({module:n,elementWise:e=!1,expression:t,inputs:r,output:i,operationType:s=i.type,outputBuffer:o}){if(!n.source)throw new Error(`WebGPU computation ${n.name} requires WGSL source`);const a=fw(r),c=a.map(([_,y])=>({name:_,input:y})),u=c.filter(({input:_})=>!_.isConstant).map((_,y)=>({..._,index:y})),f=Ee(s),d=Ee(i.type),h={TYPE:f,RESULT_LEN:i.size.toString()},g=Zy(Math.ceil(i.length/Wr),o.device.limits.maxComputeWorkgroupsPerDimension);for(const[_,y]of a)h[`${_.toUpperCase()}_LEN`]=y.size.toString();const p=`
${hw(n.source,h)}
${u.map(({name:_,input:y,index:x})=>ow(_,y,x)).join(`
`)}
${c.map(({name:_,input:y})=>aw(_,y,s)).join(`
`)}
${cw(i,u.length)}
${uw(i)}

@compute @workgroup_size(${Wr}) fn main(
  @builtin(workgroup_id) workgroupId: vec3<u32>,
  @builtin(local_invocation_id) localId: vec3<u32>
) {
  let rowIndex = ${Jy(g,Wr)};
  if (rowIndex >= ${i.length}u) {
    return;
  }

${c.map(({name:_})=>`  let ${_} = read_${_}(rowIndex);`).join(`
`)}
  var result: array<${d}, ${i.size}>;
${lw(n.name,a,i,e,t)}
  write_result(rowIndex, result);
}
`,m=new vi(o.device,{source:p,modules:n.dependencies,shaderAssembler:iw,shaderLayout:{bindings:[...u.map(({name:_},y)=>({name:_,type:"storage",group:0,location:y})),{name:"result",type:"storage",group:0,location:u.length}]}}),b=Object.fromEntries(u.map(({name:_,input:y})=>[_,y.buffer]));b.result=o,m.setBindings(b);const w=o.device.beginComputePass({});o.device.statsManager.getStats(nw).get(rw).incrementCount(),m.dispatch(w,g.x,g.y,g.z),w.end(),o.device.submit(),m.destroy()}function ow(n,e,t){if(e.isConstant)return"";const r=Ee(e.type);return`@group(0) @binding(${t}) var<storage, read> ${n}: array<${r}>;`}function aw(n,e,t){const r=Ee(t),i=e.type===t?"":r,s=e.stride/e.ValueType.BYTES_PER_ELEMENT,o=e.offset/e.ValueType.BYTES_PER_ELEMENT;return e.isConstant?`fn read_${n}(_rowIndex: u32) -> array<${r}, ${e.size}> {
  return array<${r}, ${e.size}>(${dw(e,i)});
}`:`fn read_${n}(rowIndex: u32) -> array<${r}, ${e.size}> {
  var value: array<${r}, ${e.size}>;
  let rowOffset = ${o}u + rowIndex * ${s}u;
${Array.from({length:e.size},(a,c)=>i?`  value[${c}] = ${i}(${n}[rowOffset + ${c}u]);`:`  value[${c}] = ${n}[rowOffset + ${c}u];`).join(`
`)}
  return value;
}`}function cw(n,e){const t=Ee(n.type);return`@group(0) @binding(${e}) var<storage, read_write> result: array<${t}>;`}function uw(n){const e=n.stride/n.ValueType.BYTES_PER_ELEMENT,t=n.offset/n.ValueType.BYTES_PER_ELEMENT;return`fn write_result(rowIndex: u32, value: array<${Ee(n.type)}, ${n.size}>) {
  let rowOffset = ${t}u + rowIndex * ${e}u;
${Array.from({length:n.size},(i,s)=>`  result[rowOffset + ${s}u] = value[${s}];`).join(`
`)}
}`}function lw(n,e,t,r,i){let s="";if(i)for(let o=0;o<t.size;o++)s+=`  result[${o}] = ${i(o)};
`;else if(r){const o=tw(t.type),a=Ee(t.type);for(let c=0;c<t.size;c++){const u=e.map(([f,d])=>c<d.size?Ee(d.type)===a?`${f}[${c}]`:`${a}(${f}[${c}])`:o);s+=`  result[${c}] = ${n}(${u.join(", ")});
`}}else s+=`result = ${n}(${e.map(([o])=>o).join(", ")});`;return s.trimEnd()}function fw(n){return Array.isArray(n)?n.map((e,t)=>[`x${t}`,e]):Object.entries(n)}function dw(n,e){const t=n.value;if(!t)throw new Error(`Constant input ${n} is missing CPU values`);return Array.from({length:n.size},(r,i)=>Ci(e,t[i]??0)).join(", ")}function hw(n,e){for(const t in e)n=n.replaceAll(`{${t}}`,e[t]);return n}const gw=({inputs:n,output:e,target:t})=>{const r=n.map((c,u)=>[`x${u}`,c]);pw(t.device.limits,r);const i=r.map(([c,u])=>`${c}: array<{TYPE}, ${u.size}>`).join(", ");let s=0;const o=r.map(([c,u])=>{const f=Array.from({length:u.size},(d,h)=>`  out[${s+h}] = ${c}[${h}];`).join(`
`);return s+=u.size,f}).join(`
`),a=`fn interleave(${i}) -> array<{TYPE}, {RESULT_LEN}> {
  var out: array<{TYPE}, {RESULT_LEN}>;
${o}
  return out;
}
`;return sw({module:{name:"interleave",source:a},inputs:n,output:e,outputBuffer:t}),{success:!0}};function pw(n,e){const r=e.filter(([,i])=>!i.isConstant).length+1;if(r>n.maxStorageBuffersPerShaderStage)throw new Error(`interleave() requires ${r} storage buffers, exceeding device limit ${n.maxStorageBuffersPerShaderStage}`);if(r>n.maxBindingsPerBindGroup)throw new Error(`interleave() requires ${r} bindings, exceeding bind group limit ${n.maxBindingsPerBindGroup}`)}class mw{constructor(e,{id:t,isTransitionAttribute:r}){this.packedBuffers={},this.device=e,this.id=t,this.isTransitionAttribute=r,this.device.type==="webgpu"&&Pi.add("webgpu",{interleave:gw})}hasGroups(e){return this.device.type==="webgpu"&&Object.values(e).some(t=>!!t.settings.bufferGroup)}finalize(){for(const e of Object.values(this.packedBuffers))e.packed.destroy();this.packedBuffers={}}getBufferLayouts(e,t){const r=this._getPackedGroups(e,t,{requireValues:!1,excludeAttributes:{}});return this._getBufferLayouts(e,r,t)}getBindings(e,t,r,i){const s=this._getPackedGroups(e,r,{requireValues:!0,excludeAttributes:i}),o={},a=new Set;for(const c of s.values()){const u=!this.packedBuffers[c.id]||c.attributes.some(f=>!!t[f.id]);o[c.id]=this._getPackedBuffer(c,u);for(const f of c.attributes)a.add(f.id)}return{bufferLayouts:this._getBufferLayouts(e,s,r).filter(c=>{var u;return!i[c.name]&&!((u=e[c.name])!=null&&u.settings.isIndexed)}),buffers:o,groupedAttributeIds:a}}_getPackedGroups(e,t,{requireValues:r,excludeAttributes:i}){const s=new Map;for(const a of Object.values(e)){const c=a.settings.bufferGroup;if(!c)continue;const u=s.get(c)||[];u.push(a),s.set(c,u)}const o=new Map;for(const[a,c]of s){const u=this._getPackedGroup(a,c,t,r,i);u&&o.set(a,u)}return o}_getPackedGroup(e,t,r,i,s){if(t.length<2)return null;const o=t.map(g=>g.getBufferLayout(r)),a=o[0].stepMode,c=Math.max(1,t[0].numInstances),u=i&&t.every(g=>g.isConstant);for(let g=0;g<t.length;g++){const p=t[g],m=p.getAccessor(),b=m.size*m.bytesPerElement;if(s[p.id]||p.settings.isIndexed||p.settings.noAlloc||p.doublePrecision||this.isTransitionAttribute(p.id)||o[g].stepMode!==a||p.numInstances!==t[0].numInstances||(m.offset||0)!==0||(m.vertexOffset||0)!==0||ae(m)!==b||i&&(p.isConstant?!p.getConstantValue()||p.getConstantValue().byteLength<b:!ArrayBuffer.isView(p.value)||p.value.byteLength<c*b))return null}const f={},d=[];let h=0;for(let g=0;g<t.length;g++){const p=t[g];h=Xo(h),f[p.id]=h;for(const m of o[g].attributes||[])d.push({...m,byteOffset:h+(m.byteOffset||0)});h+=ae(p.getAccessor())}return h=Xo(h),{id:e,attributes:t,byteStride:h,byteOffsets:f,rowCount:c,layout:{name:e,byteStride:u?0:h,stepMode:a,attributes:d}}}_getBufferLayouts(e,t,r){const i=[],s=new Set,o=new Set;for(const a of t.values())for(const c of a.attributes)o.add(c.id);for(const a of Object.values(e)){const c=a.settings.bufferGroup,u=c&&t.get(c);u&&o.has(a.id)?s.has(u.id)||(i.push(u.layout),s.add(u.id)):i.push(a.getBufferLayout(r))}return i}_getPackedBuffer(e,t){const r=JSON.stringify({byteStride:e.layout.byteStride,attributes:e.layout.attributes}),i=this.packedBuffers[e.id];if((!i||i.layoutKey!==r)&&(t=!0),t){i&&(i.packed.destroy(),delete this.packedBuffers[e.id]);const s=this._interleavePackedGroup(e);return this.packedBuffers[e.id]={packed:s,layoutKey:r},s.buffer}if(!i)throw new Error(`Attribute buffer group ${e.id} has no packed buffer`);return i.packed.buffer}_interleavePackedGroup(e){const t=e.attributes.map(i=>this._getInterleaveInput(e,i)),r=Wy(...t);return jy(this.device,r),r}_getInterleaveInput(e,t){const r=ae(t.getAccessor()),i=e.byteOffsets[t.id];if(ct(`${e.id}.${t.id} rowByteLength`,r),ct(`${e.id}.${t.id} groupByteOffset`,i),t.isConstant){const c=t.getConstantValue();if(!c)throw new Error(`Attribute group ${e.id} is missing constant value ${t.id}`);return ct(`${e.id}.${t.id} constant byteOffset`,c.byteOffset),new I({id:t.id,type:"uint32",size:r/4,isConstant:!0,value:new Uint32Array(c.buffer,c.byteOffset,r/Uint32Array.BYTES_PER_ELEMENT)})}const s=t.getBuffer(),o=t.byteOffset,a=t.getAccessor().stride||r;if(ct(`${e.id}.${t.id} byteOffset`,o),ct(`${e.id}.${t.id} stride`,a),!s)throw new Error(`Attribute group ${e.id} cannot interleave missing buffer ${t.id}`);return new I({id:t.id,type:"uint32",size:r/4,offset:o,stride:a,length:e.rowCount,buffer:s})}}function Xo(n){return Math.ceil(n/4)*4}function ct(n,e){if(e%4!==0)throw new Error(`Attribute buffer groups require 32-bit alignment: ${n}=${e}`)}function jr(n){const{source:e,target:t,start:r=0,size:i,getData:s}=n,o=n.end||t.length,a=e.length,c=o-r;if(a>c){t.set(e.subarray(0,c),r);return}if(t.set(e,r),!s)return;let u=a;for(;u<c;){const f=s(u,e);for(let d=0;d<i;d++)t[r+u]=f[d]||0,u++}}function bw({source:n,target:e,size:t,getData:r,sourceStartIndices:i,targetStartIndices:s}){if(!i||!s)return jr({source:n,target:e,size:t,getData:r}),e;let o=0,a=0;const c=r&&((f,d)=>r(f+a,d)),u=Math.min(i.length,s.length);for(let f=1;f<u;f++){const d=i[f]*t,h=s[f]*t;jr({source:n.subarray(o,d),target:e,start:a,end:h,size:t,getData:c}),o=d,a=h}return a<e.length&&jr({source:[],target:e,start:a,size:t,getData:c}),e}function _w(n){const{device:e,settings:t,value:r}=n,i=new Vc(e,t);return i.setData({value:r instanceof Float64Array?new Float64Array(0):new Float32Array(0),normalized:t.normalized}),i}function Jc(n){switch(n){case 1:return"float";case 2:return"vec2";case 3:return"vec3";case 4:return"vec4";default:throw new Error(`No defined attribute type for size "${n}"`)}}function eu(n){switch(n){case 1:return"float32";case 2:return"float32x2";case 3:return"float32x3";case 4:return"float32x4";default:throw new Error("invalid type size")}}function tu(n){n.push(n.shift())}function yw(n,e){const{settings:t,value:r,size:i}=n,s=n.isDoublePrecisionBuffer?2:1;let o=0;const{shaderAttributes:a}=n.settings;if(a)for(const c of Object.values(a))o=Math.max(o,c.vertexOffset??0);return(t.noAlloc?r.length:(e+o)*i)*s}function nu({device:n,source:e,target:t}){return(!t||t.byteLength<e.byteLength)&&(t==null||t.destroy(),t=n.createBuffer({byteLength:e.byteLength,usage:e.usage})),t}function ru({device:n,buffer:e,attribute:t,fromLength:r,toLength:i,fromStartIndices:s,getData:o=a=>a}){const a=t.isDoublePrecisionBuffer?2:1,c=t.size*a,u=t.byteOffset,f=t.settings.bytesPerElement<4?u/t.settings.bytesPerElement*4:u,d=t.startIndices,h=s&&d,g=t.isConstant;if(!h&&e&&r>=i)return e;const p=t.value instanceof Float64Array?Float32Array:t.value.constructor,m=g?t.value:new p(t.getBuffer().readSyncWebGL(u,i*p.BYTES_PER_ELEMENT).buffer);if(t.settings.normalized&&!g){const y=o;o=(x,S)=>t.normalizeConstant(y(x,S))}const b=g?(y,x)=>o(m,x):(y,x)=>o(m.subarray(y+u,y+u+c),x),w=e?new Float32Array(e.readSyncWebGL(f,r*4).buffer):new Float32Array(0),_=new Float32Array(i);return bw({source:w,target:_,sourceStartIndices:s,targetStartIndices:d,size:c,getData:b}),(!e||e.byteLength<_.byteLength+f)&&(e==null||e.destroy(),e=n.createBuffer({byteLength:_.byteLength+f,usage:35050})),e.write(_,f),e}class iu{constructor({device:e,attribute:t,timeline:r}){this.buffers=[],this.currentLength=0,this.device=e,this.transition=new ki(r),this.attribute=t,this.attributeInTransition=_w(t),this.currentStartIndices=t.startIndices}get inProgress(){return this.transition.inProgress}start(e,t,r=1/0){this.settings=e,this.currentStartIndices=this.attribute.startIndices,this.currentLength=yw(this.attribute,t),this.transition.start({...e,duration:r})}update(){const e=this.transition.update();return e&&this.onUpdate(),e}setBuffer(e){const{stride:t}=this.attributeInTransition.getAccessor();this.attributeInTransition.setData({buffer:e,normalized:this.attribute.settings.normalized,value:this.attributeInTransition.value,stride:t})}cancel(){this.transition.cancel()}delete(){this.cancel();for(const e of this.buffers)e.destroy();this.buffers.length=0}}class ww extends iu{constructor({device:e,attribute:t,timeline:r}){super({device:e,attribute:t,timeline:r}),this.type="interpolation",this.transform=Ew(e,t)}start(e,t){const r=this.currentLength,i=this.currentStartIndices;if(super.start(e,t,e.duration),e.duration<=0){this.transition.cancel();return}const{buffers:s,attribute:o}=this;tu(s),s[0]=ru({device:this.device,buffer:s[0],attribute:o,fromLength:r,toLength:this.currentLength,fromStartIndices:i,getData:e.enter}),s[1]=nu({device:this.device,source:s[0],target:s[1]}),this.setBuffer(s[1]);const{transform:a}=this,c=a.model;let u=Math.floor(this.currentLength/o.size);su(o)&&(u/=2),c.setVertexCount(u),o.isConstant?(c.setAttributes({aFrom:s[0]}),c.setConstantAttributes({aTo:o.value})):c.setAttributes({aFrom:s[0],aTo:o.getBuffer()}),a.transformFeedback.setBuffers({vCurrent:s[1]})}onUpdate(){const{duration:e,easing:t}=this.settings,{time:r}=this.transition;let i=r/e;t&&(i=t(i));const{model:s}=this.transform,o={time:i};s.shaderInputs.setProps({interpolation:o}),this.transform.run({discard:!0})}delete(){super.delete(),this.transform.destroy()}}const vw=`layout(std140) uniform interpolationUniforms {
  float time;
} interpolation;
`,Zo={name:"interpolation",vs:vw,uniformTypes:{time:"f32"}},xw=`#version 300 es
#define SHADER_NAME interpolation-transition-vertex-shader

in ATTRIBUTE_TYPE aFrom;
in ATTRIBUTE_TYPE aTo;
out ATTRIBUTE_TYPE vCurrent;

void main(void) {
  vCurrent = mix(aFrom, aTo, interpolation.time);
  gl_Position = vec4(0.0);
}
`,Sw=`#version 300 es
#define SHADER_NAME interpolation-transition-vertex-shader

in ATTRIBUTE_TYPE aFrom;
in ATTRIBUTE_TYPE aFrom64Low;
in ATTRIBUTE_TYPE aTo;
in ATTRIBUTE_TYPE aTo64Low;
out ATTRIBUTE_TYPE vCurrent;
out ATTRIBUTE_TYPE vCurrent64Low;

vec2 mix_fp64(vec2 a, vec2 b, float x) {
  vec2 range = sub_fp64(b, a);
  return sum_fp64(a, mul_fp64(range, vec2(x, 0.0)));
}

void main(void) {
  for (int i=0; i<ATTRIBUTE_SIZE; i++) {
    vec2 value = mix_fp64(vec2(aFrom[i], aFrom64Low[i]), vec2(aTo[i], aTo64Low[i]), interpolation.time);
    vCurrent[i] = value.x;
    vCurrent64Low[i] = value.y;
  }
  gl_Position = vec4(0.0);
}
`;function su(n){return n.isDoublePrecisionBuffer}function Ew(n,e){const t=e.size,r=Jc(t),i=eu(t),s=e.getBufferLayout();return su(e)?new Ct(n,{vs:Sw,bufferLayout:[{name:"aFrom",byteStride:8*t,attributes:[{attribute:"aFrom",format:i,byteOffset:0},{attribute:"aFrom64Low",format:i,byteOffset:4*t}]},{name:"aTo",byteStride:8*t,attributes:[{attribute:"aTo",format:i,byteOffset:0},{attribute:"aTo64Low",format:i,byteOffset:4*t}]}],modules:[lp,Zo],defines:{ATTRIBUTE_TYPE:r,ATTRIBUTE_SIZE:t},moduleSettings:{},varyings:["vCurrent","vCurrent64Low"],bufferMode:35980,disableWarnings:!0}):new Ct(n,{vs:xw,bufferLayout:[{name:"aFrom",format:i},{name:"aTo",format:s.attributes[0].format}],modules:[Zo],defines:{ATTRIBUTE_TYPE:r},varyings:["vCurrent"],disableWarnings:!0})}class Aw extends iu{constructor({device:e,attribute:t,timeline:r}){super({device:e,attribute:t,timeline:r}),this.type="spring",this.texture=Iw(e),this.framebuffer=Ow(e,this.texture),this.transform=Cw(e,t)}start(e,t){const r=this.currentLength,i=this.currentStartIndices;super.start(e,t);const{buffers:s,attribute:o}=this;for(let c=0;c<2;c++)s[c]=ru({device:this.device,buffer:s[c],attribute:o,fromLength:r,toLength:this.currentLength,fromStartIndices:i,getData:e.enter});s[2]=nu({device:this.device,source:s[0],target:s[2]}),this.setBuffer(s[1]);const{model:a}=this.transform;a.setVertexCount(Math.floor(this.currentLength/o.size)),o.isConstant?a.setConstantAttributes({aTo:o.value}):a.setAttributes({aTo:o.getBuffer()})}onUpdate(){const{buffers:e,transform:t,framebuffer:r,transition:i}=this,s=this.settings;t.model.setAttributes({aPrev:e[0],aCur:e[1]}),t.transformFeedback.setBuffers({vNext:e[2]});const o={stiffness:s.stiffness,damping:s.damping};t.model.shaderInputs.setProps({spring:o}),t.run({framebuffer:r,discard:!1,parameters:{viewport:[0,0,1,1]},clearColor:[0,0,0,0]}),tu(e),this.setBuffer(e[1]),this.device.readPixelsToArrayWebGL(r)[0]>0||i.end()}delete(){super.delete(),this.transform.destroy(),this.texture.destroy(),this.framebuffer.destroy()}}const Tw=`layout(std140) uniform springUniforms {
  float damping;
  float stiffness;
} spring;
`,Lw={name:"spring",vs:Tw,uniformTypes:{damping:"f32",stiffness:"f32"}},Pw=`#version 300 es
#define SHADER_NAME spring-transition-vertex-shader

#define EPSILON 0.00001

in ATTRIBUTE_TYPE aPrev;
in ATTRIBUTE_TYPE aCur;
in ATTRIBUTE_TYPE aTo;
out ATTRIBUTE_TYPE vNext;
out float vIsTransitioningFlag;

ATTRIBUTE_TYPE getNextValue(ATTRIBUTE_TYPE cur, ATTRIBUTE_TYPE prev, ATTRIBUTE_TYPE dest) {
  ATTRIBUTE_TYPE velocity = cur - prev;
  ATTRIBUTE_TYPE delta = dest - cur;
  ATTRIBUTE_TYPE force = delta * spring.stiffness;
  ATTRIBUTE_TYPE resistance = velocity * spring.damping;
  return force - resistance + velocity + cur;
}

void main(void) {
  bool isTransitioning = length(aCur - aPrev) > EPSILON || length(aTo - aCur) > EPSILON;
  vIsTransitioningFlag = isTransitioning ? 1.0 : 0.0;

  vNext = getNextValue(aCur, aPrev, aTo);
  gl_Position = vec4(0, 0, 0, 1);
  gl_PointSize = 100.0;
}
`,Bw=`#version 300 es
#define SHADER_NAME spring-transition-is-transitioning-fragment-shader

in float vIsTransitioningFlag;

out vec4 fragColor;

void main(void) {
  if (vIsTransitioningFlag == 0.0) {
    discard;
  }
  fragColor = vec4(1.0);
}`;function Cw(n,e){const t=Jc(e.size),r=eu(e.size);return new Ct(n,{vs:Pw,fs:Bw,bufferLayout:[{name:"aPrev",format:r},{name:"aCur",format:r},{name:"aTo",format:e.getBufferLayout().attributes[0].format}],varyings:["vNext"],modules:[Lw],defines:{ATTRIBUTE_TYPE:t},parameters:{depthCompare:"always",blendColorOperation:"max",blendColorSrcFactor:"one",blendColorDstFactor:"one",blendAlphaOperation:"max",blendAlphaSrcFactor:"one",blendAlphaDstFactor:"one"}})}function Iw(n){return n.createTexture({data:new Uint8Array(4),format:"rgba8unorm",width:1,height:1})}function Ow(n,e){return n.createFramebuffer({id:"spring-transition-is-transitioning-framebuffer",width:1,height:1,colorAttachments:[e]})}const Rw={interpolation:ww,spring:Aw};class Mw{constructor(e,{id:t,timeline:r}){if(!e)throw new Error("AttributeTransitionManager is constructed without device");this.id=t,this.device=e,this.timeline=r,this.transitions={},this.needsRedraw=!1,this.numInstances=1}finalize(){for(const e in this.transitions)this._removeTransition(e)}update({attributes:e,transitions:t,numInstances:r}){this.numInstances=r||1;for(const i in e){const s=e[i],o=s.getTransitionSetting(t);o&&this._updateAttribute(i,s,o)}for(const i in this.transitions){const s=e[i];(!s||!s.getTransitionSetting(t))&&this._removeTransition(i)}}hasAttribute(e){const t=this.transitions[e];return t&&t.inProgress}getAttributes(){const e={};for(const t in this.transitions){const r=this.transitions[t];r.inProgress&&(e[t]=r.attributeInTransition)}return e}run(){if(this.numInstances===0)return!1;for(const t in this.transitions)this.transitions[t].update()&&(this.needsRedraw=!0);const e=this.needsRedraw;return this.needsRedraw=!1,e}_removeTransition(e){this.transitions[e].delete(),delete this.transitions[e]}_updateAttribute(e,t,r){const i=this.transitions[e];let s=!i||i.type!==r.type;if(s){i&&this._removeTransition(e);const o=Rw[r.type];o?this.transitions[e]=new o({attribute:t,timeline:this.timeline,device:this.device}):(te.error(`unsupported transition type '${r.type}'`)(),s=!1)}(s||t.needsRedraw())&&(this.needsRedraw=!0,this.transitions[e].start(r,this.numInstances))}}const Ko="attributeManager.invalidate",Dw="attributeManager.updateStart",$w="attributeManager.updateEnd",kw="attribute.updateStart",Uw="attribute.allocate",Nw="attribute.updateEnd";class Fw{constructor(e,{id:t="attribute-manager",stats:r,timeline:i}={}){this.mergeBoundsMemoized=as(pu),this.id=t,this.device=e,this.attributes={},this.updateTriggers={},this.needsRedraw=!0,this.userData={},this.stats=r,this.attributeTransitionManager=new Mw(e,{id:`${t}-transitions`,timeline:i}),this.attributeBufferGroups=e.type==="webgpu"?new mw(e,{id:t,isTransitionAttribute:s=>this.attributeTransitionManager.hasAttribute(s)}):null,Object.seal(this)}finalize(){var e;(e=this.attributeBufferGroups)==null||e.finalize();for(const t in this.attributes)this.attributes[t].delete();this.attributeTransitionManager.finalize()}getNeedsRedraw(e={clearRedrawFlags:!1}){const t=this.needsRedraw;return this.needsRedraw=this.needsRedraw&&!e.clearRedrawFlags,t&&this.id}setNeedsRedraw(){this.needsRedraw=!0}add(e){this._add(e)}addInstanced(e){this._add(e,{stepMode:"instance"})}remove(e){for(const t of e)this.attributes[t]!==void 0&&(this.attributes[t].delete(),delete this.attributes[t])}invalidate(e,t){const r=this._invalidateTrigger(e,t);q(Ko,this,e,r)}invalidateAll(e){for(const t in this.attributes)this.attributes[t].setNeedsUpdate(t,e);q(Ko,this,"all")}update({data:e,numInstances:t,startIndices:r=null,transitions:i,props:s={},buffers:o={},context:a={}}){let c=!1;q(Dw,this),this.stats&&this.stats.get("Update Attributes").timeStart();for(const u in this.attributes){const f=this.attributes[u],d=f.settings.accessor;f.startIndices=r,f.numInstances=t,s[u]&&te.removed(`props.${u}`,`data.attributes.${u}`)(),f.setExternalBuffer(o[u])||f.setBinaryValue(typeof d=="string"?o[d]:void 0,e.startIndices)||typeof d=="string"&&!o[d]&&f.setConstantValue(a,s[d])||f.needsUpdate()&&(c=!0,this._updateAttribute({attribute:f,numInstances:t,data:e,props:s,context:a})),this.needsRedraw=this.needsRedraw||f.needsRedraw()}c&&q($w,this,t),this.stats&&(this.stats.get("Update Attributes").timeEnd(),c&&this.stats.get("Attributes updated").incrementCount()),this.attributeTransitionManager.update({attributes:this.attributes,numInstances:t,transitions:i})}updateTransition(){const{attributeTransitionManager:e}=this,t=e.run();return this.needsRedraw=this.needsRedraw||t,t}getAttributes(){return{...this.attributes,...this.attributeTransitionManager.getAttributes()}}getBounds(e){const t=e.map(r=>{var i;return(i=this.attributes[r])==null?void 0:i.getBounds()});return this.mergeBoundsMemoized(t)}getChangedAttributes(e={clearChangedFlags:!1}){const{attributes:t,attributeTransitionManager:r}=this,i={...r.getAttributes()};for(const s in t){const o=t[s];o.needsRedraw(e)&&!r.hasAttribute(s)&&(i[s]=o)}return i}getBufferLayouts(e){return this.hasBufferGroups()?this.attributeBufferGroups.getBufferLayouts(this.getAttributes(),e):Object.values(this.getAttributes()).map(t=>t.getBufferLayout(e))}hasBufferGroups(){var e;return!!((e=this.attributeBufferGroups)!=null&&e.hasGroups(this.attributes))}getBufferGroupBindings(e,t,r={}){return this.attributeBufferGroups?this.attributeBufferGroups.getBindings(this.getAttributes(),e,t,r):{bufferLayouts:this.getBufferLayouts(t),buffers:{},groupedAttributeIds:new Set}}_add(e,t){for(const r in e){const i=e[r],s={...i,id:r,size:i.isIndexed&&1||i.size||1,...t};this.attributes[r]=new Vc(this.device,s)}this._mapUpdateTriggersToAttributes()}_mapUpdateTriggersToAttributes(){const e={};for(const t in this.attributes)this.attributes[t].getUpdateTriggers().forEach(i=>{e[i]||(e[i]=[]),e[i].push(t)});this.updateTriggers=e}_invalidateTrigger(e,t){const{attributes:r,updateTriggers:i}=this,s=i[e];return s&&s.forEach(o=>{const a=r[o];a&&a.setNeedsUpdate(a.id,t)}),s}_updateAttribute(e){const{attribute:t,numInstances:r}=e;if(q(kw,t),t.constant){t.setConstantValue(e.context,t.value);return}t.allocate(r)&&q(Uw,t,r),t.updateBuffer(e)&&(this.needsRedraw=!0,q(Nw,t,r))}}class Gw extends ki{get value(){return this._value}_onUpdate(){const{time:e,settings:{fromValue:t,toValue:r,duration:i,easing:s}}=this,o=s(e/i);this._value=mu(t,r,o)}}const Jo=1e-5;function ea(n,e,t,r,i){const s=e-n,a=(t-e)*i,c=-s*r;return a+c+s+e}function zw(n,e,t,r,i){if(Array.isArray(t)){const s=[];for(let o=0;o<t.length;o++)s[o]=ea(n[o],e[o],t[o],r,i);return s}return ea(n,e,t,r,i)}function ta(n,e){if(Array.isArray(n)){let t=0;for(let r=0;r<n.length;r++){const i=n[r]-e[r];t+=i*i}return Math.sqrt(t)}return Math.abs(n-e)}class Ww extends ki{get value(){return this._currValue}_onUpdate(){const{fromValue:e,toValue:t,damping:r,stiffness:i}=this.settings,{_prevValue:s=e,_currValue:o=e}=this;let a=zw(s,o,t,r,i);const c=ta(a,t),u=ta(a,o);c<Jo&&u<Jo&&(a=t,this.end()),this._prevValue=o,this._currValue=a}}const jw={interpolation:Gw,spring:Ww};class Vw{constructor(e){this.transitions=new Map,this.timeline=e}get active(){return this.transitions.size>0}add(e,t,r,i){const{transitions:s}=this;if(s.has(e)){const c=s.get(e),{value:u=c.settings.fromValue}=c;t=u,this.remove(e)}if(i=jc(i),!i)return;const o=jw[i.type];if(!o){te.error(`unsupported transition type '${i.type}'`)();return}const a=new o(this.timeline);a.start({...i,fromValue:t,toValue:r}),s.set(e,a)}remove(e){const{transitions:t}=this;t.has(e)&&(t.get(e).cancel(),t.delete(e))}update(){const e={};for(const[t,r]of this.transitions)r.update(),e[t]=r.value,r.inProgress||this.remove(t);return e}clear(){for(const e of this.transitions.keys())this.remove(e)}}function Hw(n){const e=n[ve];for(const t in e){const r=e[t],{validate:i}=r;if(i&&!i(n[t],r))throw new Error(`Invalid prop ${t}: ${n[t]}`)}}function Yw(n,e){const t=ou({newProps:n,oldProps:e,propTypes:n[ve],ignoreProps:{data:null,updateTriggers:null,extensions:null,transitions:null}}),r=Qw(n,e);let i=!1;return r||(i=Xw(n,e)),{dataChanged:r,propsChanged:t,updateTriggersChanged:i,extensionsChanged:Zw(n,e),transitionsChanged:qw(n,e)}}function qw(n,e){if(!n.transitions)return!1;const t={},r=n[ve];let i=!1;for(const s in n.transitions){const o=r[s],a=o&&o.type;(a==="number"||a==="color"||a==="array")&&Ii(n[s],e[s],o)&&(t[s]=!0,i=!0)}return i?t:!1}function ou({newProps:n,oldProps:e,ignoreProps:t={},propTypes:r={},triggerName:i="props"}){if(e===n)return!1;if(typeof n!="object"||n===null)return`${i} changed shallowly`;if(typeof e!="object"||e===null)return`${i} changed shallowly`;for(const s of Object.keys(n))if(!(s in t)){if(!(s in e))return`${i}.${s} added`;const o=Ii(n[s],e[s],r[s]);if(o)return`${i}.${s} ${o}`}for(const s of Object.keys(e))if(!(s in t)){if(!(s in n))return`${i}.${s} dropped`;if(!Object.hasOwnProperty.call(n,s)){const o=Ii(n[s],e[s],r[s]);if(o)return`${i}.${s} ${o}`}}return!1}function Ii(n,e,t){let r=t&&t.equal;return r&&!r(n,e,t)||!r&&(r=n&&e&&n.equals,r&&!r.call(n,e))?"changed deeply":!r&&e!==n?"changed shallowly":null}function Qw(n,e){if(e===null)return"oldProps is null, initial diff";let t=!1;const{dataComparator:r,_dataDiff:i}=n;return r?r(n.data,e.data)||(t="Data comparator detected a change"):n.data!==e.data&&(t="A new data container was supplied"),t&&i&&(t=i(n.data,e.data)||t),t}function Xw(n,e){if(e===null)return{all:!0};if("all"in n.updateTriggers&&na(n,e,"all"))return{all:!0};const t={};let r=!1;for(const i in n.updateTriggers)i!=="all"&&na(n,e,i)&&(t[i]=!0,r=!0);return r?t:!1}function Zw(n,e){if(e===null)return!0;const t=e.extensions,{extensions:r}=n;if(r===t)return!1;if(!t||!r||r.length!==t.length)return!0;for(let i=0;i<r.length;i++)if(!r[i].equals(t[i]))return!0;return!1}function na(n,e,t){let r=n.updateTriggers[t];r=r??{};let i=e.updateTriggers[t];return i=i??{},ou({oldProps:i,newProps:r,triggerName:t})}const Kw="count(): argument not an object",Jw="count(): argument not a container";function ev(n){if(!nv(n))throw new Error(Kw);if(typeof n.count=="function")return n.count();if(Number.isFinite(n.size))return n.size;if(Number.isFinite(n.length))return n.length;if(tv(n))return Object.keys(n).length;throw new Error(Jw)}function tv(n){return n!==null&&typeof n=="object"&&n.constructor===Object}function nv(n){return n!==null&&typeof n=="object"}function ra(n,e){if(!e)return n;const t={...n,...e};if("defines"in e&&(t.defines={...n.defines,...e.defines}),"modules"in e&&(t.modules=(n.modules||[]).concat(e.modules),e.modules.some(r=>r.name==="project64"))){const r=t.modules.findIndex(i=>i.name==="project32");r>=0&&t.modules.splice(r,1)}if("inject"in e)if(!n.inject)t.inject=e.inject;else{const r={...n.inject};for(const i in e.inject)r[i]=(r[i]||"")+e.inject[i];t.inject=r}return t}const rv={minFilter:"linear",mipmapFilter:"linear",magFilter:"linear",addressModeU:"clamp-to-edge",addressModeV:"clamp-to-edge"},Oi={};function iv(n,e,t,r){if(t instanceof j)return t;t.constructor&&t.constructor.name!=="Object"&&(t={data:t});let i=null;t.compressed&&(i={minFilter:"linear",mipmapFilter:t.data.length>1?"nearest":"linear"});const{width:s,height:o}=t.data,a=e.createTexture({...t,sampler:{...rv,...i,...r},mipLevels:e.getMipLevelCount(s,o)});return e.type==="webgl"?a.generateMipmapsWebGL():e.type==="webgpu"&&e.generateMipmapsWebGPU(a),Oi[a.id]=n,a}function sv(n,e){!e||!(e instanceof j)||Oi[e.id]===n&&(e.delete(),delete Oi[e.id])}const ov={boolean:{validate(n,e){return!0},equal(n,e,t){return!!n==!!e}},number:{validate(n,e){return Number.isFinite(n)&&(!("max"in e)||n<=e.max)&&(!("min"in e)||n>=e.min)}},color:{validate(n,e){return e.optional&&!n||Ri(n)&&(n.length===3||n.length===4)},equal(n,e,t){return kt(n,e,1)}},accessor:{validate(n,e){const t=On(n);return t==="function"||t===On(e.value)},equal(n,e,t){return typeof e=="function"?!0:kt(n,e,1)}},array:{validate(n,e){return e.optional&&!n||Ri(n)},equal(n,e,t){const{compare:r}=t,i=Number.isInteger(r)?r:r?1:0;return r?kt(n,e,i):n===e}},object:{equal(n,e,t){if(t.ignore)return!0;const{compare:r}=t,i=Number.isInteger(r)?r:r?1:0;return r?kt(n,e,i):n===e}},function:{validate(n,e){return e.optional&&!n||typeof n=="function"},equal(n,e,t){return!t.compare&&t.ignore!==!1||n===e}},data:{transform:(n,e,t)=>{if(!n)return n;const{dataTransform:r}=t.props;return r?r(n):typeof n.shape=="string"&&n.shape.endsWith("-table")&&Array.isArray(n.data)?n.data:n}},image:{transform:(n,e,t)=>{const r=t.context;return!r||!r.device?null:iv(t.id,r.device,n,{...e.parameters,...t.props.textureParameters})},release:(n,e,t)=>{sv(t.id,n)}}};function av(n){const e={},t={},r={};for(const[i,s]of Object.entries(n)){const o=s==null?void 0:s.deprecatedFor;if(o)r[i]=Array.isArray(o)?o:[o];else{const a=cv(i,s);e[i]=a,t[i]=a.value}}return{propTypes:e,defaultProps:t,deprecatedProps:r}}function cv(n,e){switch(On(e)){case"object":return ut(n,e);case"array":return ut(n,{type:"array",value:e,compare:!1});case"boolean":return ut(n,{type:"boolean",value:e});case"number":return ut(n,{type:"number",value:e});case"function":return ut(n,{type:"function",value:e,compare:!0});default:return{name:n,type:"unknown",value:e}}}function ut(n,e){return"type"in e?{name:n,...ov[e.type],...e}:"value"in e?{name:n,type:On(e.value),...e}:{name:n,type:"object",value:e}}function Ri(n){return Array.isArray(n)||ArrayBuffer.isView(n)}function On(n){return Ri(n)?"array":n===null?"null":typeof n}function uv(n,e){let t;for(let s=e.length-1;s>=0;s--){const o=e[s];"extensions"in o&&(t=o.extensions)}const r=Mi(n.constructor,t),i=Object.create(r);i[Cn]=n,i[De]={},i[we]={};for(let s=0;s<e.length;++s){const o=e[s];for(const a in o)i[a]=o[a]}return Object.freeze(i),i}const lv="_mergedDefaultProps";function Mi(n,e){if(!(n instanceof ir.constructor))return{};let t=lv;if(e)for(const i of e){const s=i.constructor;s&&(t+=`:${s.extensionName||s.name}`)}const r=au(n,t);return r||(n[t]=fv(n,e||[]))}function fv(n,e){if(!n.prototype)return null;const r=Object.getPrototypeOf(n),i=Mi(r),s=au(n,"defaultProps")||{},o=av(s),a=Object.assign(Object.create(null),i,o.defaultProps),c=Object.assign(Object.create(null),i==null?void 0:i[ve],o.propTypes),u=Object.assign(Object.create(null),i==null?void 0:i[Ir],o.deprecatedProps);for(const f of e){const d=Mi(f.constructor);d&&(Object.assign(a,d),Object.assign(c,d[ve]),Object.assign(u,d[Ir]))}return dv(a,n),gv(a,c),hv(a,u),a[ve]=c,a[Ir]=u,e.length===0&&!_s(n,"_propTypes")&&(n._propTypes=c),a}function dv(n,e){const t=mv(e);Object.defineProperties(n,{id:{writable:!0,value:t}})}function hv(n,e){for(const t in e)Object.defineProperty(n,t,{enumerable:!1,set(r){const i=`${this.id}: ${t}`;for(const s of e[t])_s(this,s)||(this[s]=r);te.deprecated(i,e[t].join("/"))()}})}function gv(n,e){const t={},r={};for(const i in e){const s=e[i],{name:o,value:a}=s;s.async&&(t[o]=a,r[o]=pv(o))}n[qe]=t,n[De]={},Object.defineProperties(n,r)}function pv(n){return{enumerable:!0,set(e){typeof e=="string"||e instanceof Promise||Wc(e)?this[De][n]=e:this[we][n]=e},get(){if(this[we]){if(n in this[we])return this[we][n]||this[qe][n];if(n in this[De]){const e=this[Cn]&&this[Cn].internalState;if(e&&e.hasAsyncProp(n))return e.getAsyncProp(n)||this[qe][n]}}return this[qe][n]}}}function _s(n,e){return Object.prototype.hasOwnProperty.call(n,e)}function au(n,e){return _s(n,e)&&n[e]}function mv(n){const e=n.componentName;return e||te.warn(`${n.name}.componentName not specified`)(),e||n.name}let bv=0;class ir{constructor(...e){this.props=uv(this,e),this.id=this.props.id,this.count=bv++}clone(e){const{props:t}=this,r={};for(const i in t[qe])i in t[we]?r[i]=t[we][i]:i in t[De]&&(r[i]=t[De][i]);return new this.constructor({...t,...r,...e})}}ir.componentName="Component";ir.defaultProps={};const _v=Object.freeze({});class yv{constructor(e){this.component=e,this.asyncProps={},this.onAsyncPropUpdated=()=>{},this.oldProps=null,this.oldAsyncProps=null}finalize(){for(const e in this.asyncProps){const t=this.asyncProps[e];t&&t.type&&t.type.release&&t.type.release(t.resolvedValue,t.type,this.component)}this.asyncProps={},this.component=null,this.resetOldProps()}getOldProps(){return this.oldAsyncProps||this.oldProps||_v}resetOldProps(){this.oldAsyncProps=null,this.oldProps=this.component?this.component.props:null}hasAsyncProp(e){return e in this.asyncProps}getAsyncProp(e){const t=this.asyncProps[e];return t&&t.resolvedValue}isAsyncPropLoading(e){if(e){const t=this.asyncProps[e];return!!(t&&t.pendingLoadCount>0&&t.pendingLoadCount!==t.resolvedLoadCount)}for(const t in this.asyncProps)if(this.isAsyncPropLoading(t))return!0;return!1}reloadAsyncProp(e,t){this._watchPromise(e,Promise.resolve(t))}setAsyncProps(e){this.component=e[Cn]||this.component;const t=e[we]||{},r=e[De]||e,i=e[qe]||{};for(const s in t){const o=t[s];this._createAsyncPropData(s,i[s]),this._updateAsyncProp(s,o),t[s]=this.getAsyncProp(s)}for(const s in r){const o=r[s];this._createAsyncPropData(s,i[s]),this._updateAsyncProp(s,o)}}_fetch(e,t){return null}_onResolve(e,t){}_onError(e,t){}_updateAsyncProp(e,t){if(this._didAsyncInputValueChange(e,t)){if(typeof t=="string"&&(t=this._fetch(e,t)),t instanceof Promise){this._watchPromise(e,t);return}if(Wc(t)){this._resolveAsyncIterable(e,t);return}this._setPropValue(e,t)}}_freezeAsyncOldProps(){if(!this.oldAsyncProps&&this.oldProps){this.oldAsyncProps=Object.create(this.oldProps);for(const e in this.asyncProps)Object.defineProperty(this.oldAsyncProps,e,{enumerable:!0,value:this.oldProps[e]})}}_didAsyncInputValueChange(e,t){const r=this.asyncProps[e];return t===r.resolvedValue||t===r.lastValue?!1:(r.lastValue=t,!0)}_setPropValue(e,t){this._freezeAsyncOldProps();const r=this.asyncProps[e];r&&(t=this._postProcessValue(r,t),r.resolvedValue=t,r.pendingLoadCount++,r.resolvedLoadCount=r.pendingLoadCount)}_setAsyncPropValue(e,t,r){const i=this.asyncProps[e];i&&r>=i.resolvedLoadCount&&t!==void 0&&(this._freezeAsyncOldProps(),i.resolvedValue=t,i.resolvedLoadCount=r,this.onAsyncPropUpdated(e,t))}_watchPromise(e,t){const r=this.asyncProps[e];if(r){r.pendingLoadCount++;const i=r.pendingLoadCount;t.then(s=>{this.component&&(s=this._postProcessValue(r,s),this._setAsyncPropValue(e,s,i),this._onResolve(e,s))}).catch(s=>{this._onError(e,s)})}}async _resolveAsyncIterable(e,t){if(e!=="data"){this._setPropValue(e,t);return}const r=this.asyncProps[e];if(!r)return;r.pendingLoadCount++;const i=r.pendingLoadCount;let s=[],o=0;for await(const a of t){if(!this.component)return;const{dataTransform:c}=this.component.props;c?s=c(a,s):s=s.concat(a),Object.defineProperty(s,"__diff",{enumerable:!1,value:[{startRow:o,endRow:s.length}]}),o=s.length,this._setAsyncPropValue(e,s,i)}this._onResolve(e,s)}_postProcessValue(e,t){const r=e.type;return r&&this.component&&(r.release&&r.release(e.resolvedValue,r,this.component),r.transform)?r.transform(t,r,this.component):t}_createAsyncPropData(e,t){if(!this.asyncProps[e]){const i=this.component&&this.component.props[ve];this.asyncProps[e]={type:i&&i[e],lastValue:null,resolvedValue:t,pendingLoadCount:0,resolvedLoadCount:0}}}}class wv extends yv{constructor({attributeManager:e,layer:t}){super(t),this.attributeManager=e,this.needsRedraw=!0,this.needsUpdate=!0,this.subLayers=null,this.usesPickingColorCache=!1,this.disabledPickingIndices=[]}get layer(){return this.component}_fetch(e,t){const r=this.layer,i=r==null?void 0:r.props.fetch;return i?i(t,{propName:e,layer:r}):super._fetch(e,t)}_onResolve(e,t){const r=this.layer;if(r){const i=r.props.onDataLoad;e==="data"&&i&&i(t,{propName:e,layer:r})}}_onError(e,t){const r=this.layer;r&&r.raiseError(t,`loading ${e} of ${this.layer}`)}}const vv="layer.changeFlag",xv="layer.initialize",Sv="layer.update",Ev="layer.finalize",Av="layer.matched",ia=2**24-1,Tv=Object.freeze([]),Lv=as(({oldViewport:n,viewport:e})=>n.equals(e));let Q=new Uint8ClampedArray(0);function sa(n){return n.rowIndexes||n.pickingColors||n.instancePickingColors}function Vr(n){return n.rowIndexes}function Hr(n){return n.pickingColors||n.instancePickingColors}const Pv={data:{type:"data",value:Tv,async:!0},dataComparator:{type:"function",value:null,optional:!0},_dataDiff:{type:"function",value:n=>n&&n.__diff,optional:!0},dataTransform:{type:"function",value:null,optional:!0},onDataLoad:{type:"function",value:null,optional:!0},onError:{type:"function",value:null,optional:!0},fetch:{type:"function",value:(n,{propName:e,layer:t,loaders:r,loadOptions:i,signal:s})=>{var c;const{resourceManager:o}=t.context;i=i||t.getLoadOptions(),r=r||t.props.loaders,s&&(i={...i,core:{...i==null?void 0:i.core,fetch:{...(c=i==null?void 0:i.core)==null?void 0:c.fetch,signal:s}}});let a=o.contains(n);return!a&&!i&&(o.add({resourceId:n,data:Fs(n,r),persistent:!1}),a=!0),a?o.subscribe({resourceId:n,onChange:u=>{var f;return(f=t.internalState)==null?void 0:f.reloadAsyncProp(e,u)},consumerId:t.id,requestId:e}):Fs(n,r,i)}},updateTriggers:{},visible:!0,pickable:!1,opacity:{type:"number",min:0,max:1,value:1},operation:"draw",onHover:{type:"function",value:null,optional:!0},onClick:{type:"function",value:null,optional:!0},onDragStart:{type:"function",value:null,optional:!0},onDrag:{type:"function",value:null,optional:!0},onDragEnd:{type:"function",value:null,optional:!0},coordinateSystem:"default",coordinateOrigin:{type:"array",value:[0,0,0],compare:!0},modelMatrix:{type:"array",value:null,compare:!0,optional:!0},wrapLongitude:!1,positionFormat:"XYZ",colorFormat:"RGBA",parameters:{type:"object",value:{},optional:!0,compare:2},loadOptions:{type:"object",value:null,optional:!0,ignore:!0},transitions:null,extensions:[],loaders:{type:"array",value:[],optional:!0,ignore:!0},getPolygonOffset:{type:"function",value:({layerIndex:n})=>[0,-n*100]},highlightedObjectIndex:null,autoHighlight:!1,highlightColor:{type:"accessor",value:[0,0,128,128]}};class ys extends ir{constructor(){super(...arguments),this.internalState=null,this.lifecycle=eb.NO_STATE,this.parent=null}static get componentName(){return Object.prototype.hasOwnProperty.call(this,"layerName")?this.layerName:""}get root(){let e=this;for(;e.parent;)e=e.parent;return e}toString(){return`${this.constructor.layerName||this.constructor.name}({id: '${this.props.id}'})`}project(e){Te(this.internalState);const t=this.internalState.viewport||this.context.viewport,r=us(e,{viewport:t,modelMatrix:this.props.modelMatrix,coordinateOrigin:this.props.coordinateOrigin,coordinateSystem:this.props.coordinateSystem}),[i,s,o]=bu(r,t.pixelProjectionMatrix);return e.length===2?[i,s]:[i,s,o]}unproject(e){return Te(this.internalState),(this.internalState.viewport||this.context.viewport).unproject(e)}projectPosition(e,t){Te(this.internalState);const r=this.internalState.viewport||this.context.viewport;return fm(e,{viewport:r,modelMatrix:this.props.modelMatrix,coordinateOrigin:this.props.coordinateOrigin,coordinateSystem:this.props.coordinateSystem,...t})}get isComposite(){return!1}get isDrawable(){return!0}setState(e){this.setChangeFlags({stateChanged:!0}),Object.assign(this.state,e),this.setNeedsRedraw()}setNeedsRedraw(){this.internalState&&(this.internalState.needsRedraw=!0)}setNeedsUpdate(){this.internalState&&(this.context.layerManager.setNeedsUpdate(String(this)),this.internalState.needsUpdate=!0)}get isLoaded(){return this.internalState?!this.internalState.isAsyncPropLoading():!1}get wrapLongitude(){return this.props.wrapLongitude}isPickable(){return this.props.pickable&&this.props.visible}getModels(){const e=this.state;return e&&(e.models||e.model&&[e.model])||[]}setShaderModuleProps(...e){for(const t of this.getModels())t.shaderInputs.setProps(...e)}getAttributeManager(){return this.internalState&&this.internalState.attributeManager}getCurrentLayer(){return this.internalState&&this.internalState.layer}getLoadOptions(){return this.props.loadOptions}use64bitPositions(){const{coordinateSystem:e}=this.props;return e==="default"||e==="lnglat"||e==="cartesian"}onHover(e,t){return this.props.onHover&&this.props.onHover(e,t)||!1}onClick(e,t){return this.props.onClick&&this.props.onClick(e,t)||!1}nullPickingColor(){return[0,0,0]}encodePickingColor(e,t=[]){return t[0]=e+1&255,t[1]=e+1>>8&255,t[2]=e+1>>8>>8&255,t}decodePickingColor(e){Te(e instanceof Uint8Array);const[t,r,i]=e;return t+r*256+i*65536-1}getNumInstances(){return Number.isFinite(this.props.numInstances)?this.props.numInstances:this.state&&this.state.numInstances!==void 0?this.state.numInstances:ev(this.props.data)}getStartIndices(){return this.props.startIndices?this.props.startIndices:this.state&&this.state.startIndices?this.state.startIndices:null}getBounds(){var e;return(e=this.getAttributeManager())==null?void 0:e.getBounds(["positions","instancePositions"])}getShaders(e){e=ra(e,{disableWarnings:!0,modules:this.context.defaultShaderModules});for(const t of this.props.extensions)e=ra(e,t.getShaders.call(this,t));return e}shouldUpdateState(e){return e.changeFlags.propsOrDataChanged}updateState(e){const t=this.getAttributeManager(),{dataChanged:r}=e.changeFlags;if(r&&t)if(Array.isArray(r))for(const i of r)t.invalidateAll(i);else t.invalidateAll();if(t){const{props:i}=e,s=this.internalState.hasPickingBuffer,o=Number.isInteger(i.highlightedObjectIndex)||!!i.pickable||i.extensions.some(a=>a.getNeedsPickingBuffer.call(this,a));if(s!==o){this.internalState.hasPickingBuffer=o;const a=sa(t.attributes);a&&(o&&a.constant&&(a.constant=!1,t.invalidate(a.id)),!a.value&&!o&&(a.constant=!0,a.value=Vr(t.attributes)?[Ln]:[0,0,0]))}}}finalizeState(e){for(const r of this.getModels())r.destroy();const t=this.getAttributeManager();t&&t.finalize(),this.context&&this.context.resourceManager.unsubscribe({consumerId:this.id}),this.internalState&&(this.internalState.uniformTransitions.clear(),this.internalState.finalize())}draw(e){for(const t of this.getModels())t.draw(e.renderPass)}getPickingInfo({info:e,mode:t,sourceLayer:r}){const{index:i}=e;return i>=0&&Array.isArray(this.props.data)&&(e.object=this.props.data[i]),e}raiseError(e,t){var r,i,s,o;t&&(e=new Error(`${t}: ${e.message}`,{cause:e})),(i=(r=this.props).onError)!=null&&i.call(r,e)||(o=(s=this.context)==null?void 0:s.onError)==null||o.call(s,e,this)}getNeedsRedraw(e={clearRedrawFlags:!1}){return this._getNeedsRedraw(e)}needsUpdate(){return this.internalState?this.internalState.needsUpdate||this.hasUniformTransition()||this.shouldUpdateState(this._getUpdateParams()):!1}hasUniformTransition(){var e;return((e=this.internalState)==null?void 0:e.uniformTransitions.active)||!1}activateViewport(e){if(!this.internalState)return;const t=this.internalState.viewport;this.internalState.viewport=e,(!t||!Lv({oldViewport:t,viewport:e}))&&(this.setChangeFlags({viewportChanged:!0}),this.isComposite?this.needsUpdate()&&this.setNeedsUpdate():this._update())}invalidateAttribute(e="all"){const t=this.getAttributeManager();t&&(e==="all"?t.invalidateAll():t.invalidate(e))}updateAttributes(e){let t=!1;for(const r in e)e[r].layoutChanged()&&(t=!0);for(const r of this.getModels())this._setModelAttributes(r,e,t)}_updateAttributes(){const e=this.getAttributeManager();if(!e)return;const t=this.props,r=this.getNumInstances(),i=this.getStartIndices();e.update({data:t.data,numInstances:r,startIndices:i,props:t,transitions:t.transitions,buffers:t.data.attributes,context:this});const s=e.getChangedAttributes({clearChangedFlags:!0});this.updateAttributes(s)}_updateAttributeTransition(){const e=this.getAttributeManager();e&&e.updateTransition()}_updateUniformTransition(){const{uniformTransitions:e}=this.internalState;if(e.active){const t=e.update(),r=Object.create(this.props);for(const i in t)Object.defineProperty(r,i,{value:t[i]});return r}return this.props}calculateInstancePickingColors(e,{numInstances:t}){if(e.constant)return;const r=Math.floor(Q.length/4);this.internalState.usesPickingColorCache=!0;const i=t>0&&Q[0]===0;if(r<t||i){t>ia&&te.warn("Layer has too many data objects. Picking might not be able to distinguish all objects.")(),Q=Yr.allocate(Q,t,{size:4,copy:!0,maxCount:Math.max(t,ia)});const s=Math.floor(Q.length/4),o=[0,0,0],a=i?0:r;for(let c=a;c<s;c++)this.encodePickingColor(c,o),Q[c*4+0]=o[0],Q[c*4+1]=o[1],Q[c*4+2]=o[2],Q[c*4+3]=0}e.value=Q.subarray(0,t*4)}_setModelAttributes(e,t,r=!1){var c;if(!Object.keys(t).length)return;const i=this.getAttributeManager();if(i!=null&&i.hasBufferGroups()){this._setGroupedModelAttributes(e,i,t);return}if(r){const u=this.getAttributeManager();e.setBufferLayout(u.getBufferLayouts(e)),t=u.getAttributes()}const s=((c=e.userData)==null?void 0:c.excludeAttributes)||{},o={},a={};for(const u in t){if(s[u])continue;const f=t[u].getValue();for(const d in f){const h=f[d];h instanceof A?t[u].settings.isIndexed?e.setIndexBuffer(h):o[d]=h:h&&(a[d]=h)}}e.setAttributes(o),e.setConstantAttributes(a)}_setGroupedModelAttributes(e,t,r){var u;const i=((u=e.userData)==null?void 0:u.excludeAttributes)||{},s=t.getBufferGroupBindings(r,e,i);e.setBufferLayout(s.bufferLayouts);const o={...s.buffers},a={},c=t.getAttributes();for(const f in c){if(i[f]||s.groupedAttributeIds.has(f))continue;const d=c[f],h=d.getValue();for(const g in h){const p=h[g];p instanceof A?d.settings.isIndexed?e.setIndexBuffer(p):o[g]=p:p&&(a[g]=p)}}e.setAttributes(o),e.setConstantAttributes(a)}disablePickingIndex(e){const t=this.props.data;if(!("attributes"in t)){this._disablePickingIndex(e);return}const r=this.getAttributeManager().attributes,i=Vr(r),s=Hr(r),o=i&&t.attributes&&t.attributes[i.id];if(o&&o.value){const c=o.value;for(let u=0;u<t.length;u++){const f=i.getVertexOffset(u);c[f]===e&&this._disablePickingIndex(u)}return}const a=s&&t.attributes&&t.attributes[s.id];if(a&&a.value){const c=a.value,u=this.encodePickingColor(e);for(let f=0;f<t.length;f++){const d=s.getVertexOffset(f);c[d]===u[0]&&c[d+1]===u[1]&&c[d+2]===u[2]&&this._disablePickingIndex(f)}}else this._disablePickingIndex(e)}_disablePickingIndex(e){const t=this.getAttributeManager().attributes,r=Vr(t);if(r){const a=r.getVertexOffset(e),c=r.getVertexOffset(e+1),u=new Uint32Array(c-a);u.fill(Ln),r.buffer.write(u,a*u.BYTES_PER_ELEMENT);return}const i=Hr(t);if(!i){this.internalState&&om(this.internalState.disabledPickingIndices,e);return}const s=i.getVertexOffset(e),o=i.getVertexOffset(e+1);i.buffer.write(new Uint8Array(o-s),s)}restorePickingColors(){const e=this.getAttributeManager().attributes,t=sa(e);if(!t){this.internalState&&(this.internalState.disabledPickingIndices.length=0);return}const r=Hr(e);this.internalState.usesPickingColorCache&&r&&r.value.buffer!==Q.buffer&&(r.value=Q.subarray(0,r.value.length)),t.updateSubBuffer({startOffset:0})}_initialize(){Te(!this.internalState),q(xv,this);const e=this._getAttributeManager();this.internalState=new wv({attributeManager:e,layer:this}),this._clearChangeFlags(),this.state={},Object.defineProperty(this.state,"attributeManager",{get:()=>(te.deprecated("layer.state.attributeManager","layer.getAttributeManager()")(),e)}),this.internalState.uniformTransitions=new Vw(this.context.timeline),this.internalState.onAsyncPropUpdated=this._onAsyncPropUpdated.bind(this),this.internalState.setAsyncProps(this.props),this.initializeState(this.context);for(const t of this.props.extensions)t.initializeState.call(this,this.context,t);this.setChangeFlags({dataChanged:"init",propsChanged:"init",viewportChanged:!0,extensionsChanged:!0}),this._update()}_transferState(e){q(Av,this,this===e);const{state:t,internalState:r}=e;this!==e&&(this.internalState=r,this.state=t,this.internalState.setAsyncProps(this.props),this._diffProps(this.props,this.internalState.getOldProps()))}_update(){const e=this.needsUpdate();if(q(Sv,this,e),!e)return;this.context.stats.get("Layer updates").incrementCount();const t=this.props,r=this.context,i=this.internalState,s=r.viewport,o=this._updateUniformTransition();i.propsInTransition=o,r.viewport=i.viewport||s,this.props=o;try{const a=this._getUpdateParams(),c=this.getModels();if(r.device)this.updateState(a);else try{this.updateState(a)}catch{}for(const f of this.props.extensions)f.updateState.call(this,a,f);this.setNeedsRedraw(),this._updateAttributes();const u=this.getModels()[0]!==c[0];this._postUpdate(a,u)}finally{r.viewport=s,this.props=t,this._clearChangeFlags(),i.needsUpdate=!1,i.resetOldProps()}}_finalize(){q(Ev,this),this.finalizeState(this.context);for(const e of this.props.extensions)e.finalizeState.call(this,this.context,e)}_drawLayer({renderPass:e,shaderModuleProps:t=null,uniforms:r={},parameters:i={}}){this._updateAttributeTransition();const s=this.props,o=this.context;this.props=this.internalState.propsInTransition||s;try{t&&this.setShaderModuleProps(t);const{getPolygonOffset:a}=this.props,c=a&&a(r)||[0,0];o.device instanceof Oe&&o.device.setParametersWebGL({polygonOffset:c});const u=o.device instanceof Oe?null:Bv(i);if(Cv(this.getModels(),e,i,u),o.device instanceof Oe)o.device.withParametersWebGL(i,()=>{const f={renderPass:e,shaderModuleProps:t,uniforms:r,parameters:i,context:o};for(const d of this.props.extensions)d.draw.call(this,f,d);this.draw(f)});else{u!=null&&u.renderPassParameters&&e.setParameters(u.renderPassParameters);const f={renderPass:e,shaderModuleProps:t,uniforms:r,parameters:i,context:o};for(const d of this.props.extensions)d.draw.call(this,f,d);this.draw(f)}}finally{this.props=s}}getChangeFlags(){var e;return(e=this.internalState)==null?void 0:e.changeFlags}setChangeFlags(e){if(!this.internalState)return;const{changeFlags:t}=this.internalState;for(const i in e)if(e[i]){let s=!1;switch(i){case"dataChanged":const o=e[i],a=t[i];o&&Array.isArray(a)&&(t.dataChanged=Array.isArray(o)?a.concat(o):o,s=!0);default:t[i]||(t[i]=e[i],s=!0)}s&&q(vv,this,i,e)}const r=!!(t.dataChanged||t.updateTriggersChanged||t.propsChanged||t.extensionsChanged);t.propsOrDataChanged=r,t.somethingChanged=r||t.viewportChanged||t.stateChanged}_clearChangeFlags(){this.internalState.changeFlags={dataChanged:!1,propsChanged:!1,updateTriggersChanged:!1,viewportChanged:!1,stateChanged:!1,extensionsChanged:!1,propsOrDataChanged:!1,somethingChanged:!1}}_diffProps(e,t){var i;const r=Yw(e,t);if(r.updateTriggersChanged)for(const s in r.updateTriggersChanged)r.updateTriggersChanged[s]&&this.invalidateAttribute(s);if(r.transitionsChanged)for(const s in r.transitionsChanged)this.internalState.uniformTransitions.add(s,t[s],e[s],(i=e.transitions)==null?void 0:i[s]);return this.setChangeFlags(r)}validateProps(){Hw(this.props)}updateAutoHighlight(e){this.props.autoHighlight&&!Number.isInteger(this.props.highlightedObjectIndex)&&this._updateAutoHighlight(e)}_updateAutoHighlight(e){const t={highlightedObjectColor:e.picked?e.color:null},{highlightColor:r}=this.props;e.picked&&typeof r=="function"&&(t.highlightColor=r(e)),this.setShaderModuleProps({picking:t}),this.setNeedsRedraw()}_getAttributeManager(){const e=this.context;return new Fw(e.device,{id:this.props.id,stats:e.stats,timeline:e.timeline})}_postUpdate(e,t){const{props:r,oldProps:i}=e,s=this.state.model;s!=null&&s.isInstanced&&s.setInstanceCount(this.getNumInstances());const{autoHighlight:o,highlightedObjectIndex:a,highlightColor:c}=r;if(t||i.autoHighlight!==o||i.highlightedObjectIndex!==a||i.highlightColor!==c){const u={};Array.isArray(c)&&(u.highlightColor=c),(t||i.autoHighlight!==o||a!==i.highlightedObjectIndex)&&(u.highlightedObjectColor=Number.isFinite(a)&&a>=0?this.encodePickingColor(a):null),this.setShaderModuleProps({picking:u})}}_getUpdateParams(){return{props:this.props,oldProps:this.internalState.getOldProps(),context:this.context,changeFlags:this.internalState.changeFlags}}_getNeedsRedraw(e){if(!this.internalState)return!1;let t=!1;t=t||this.internalState.needsRedraw&&this.id;const r=this.getAttributeManager(),i=r?r.getNeedsRedraw(e):!1;if(t=t||i,t)for(const s of this.props.extensions)s.onNeedsRedraw.call(this,s);return this.internalState.needsRedraw=this.internalState.needsRedraw&&!e.clearRedrawFlags,t}_onAsyncPropUpdated(){this._diffProps(this.props,this.internalState.getOldProps()),this.setNeedsUpdate()}}ys.defaultProps=Pv;ys.layerName="Layer";function Bv(n){const{blendConstant:e,...t}=n;return e?{pipelineParameters:t,renderPassParameters:{blendConstant:e}}:{pipelineParameters:t}}function Cv(n,e,t,r){for(const i of n)i.device.type==="webgpu"?(Iv(i,e),i.setParameters({...i.parameters,...r==null?void 0:r.pipelineParameters})):i.setParameters(t)}function Iv(n,e){var o,a;const t=e.props.framebuffer||(e.framebuffer??null);if(!t)return;const r=t.colorAttachments.map(c=>{var u;return((u=c==null?void 0:c.texture)==null?void 0:u.format)??null}),i=(a=(o=t.depthStencilAttachment)==null?void 0:o.texture)==null?void 0:a.format,s=n;(!Ov(s.props.colorAttachmentFormats,r)||s.props.depthStencilAttachmentFormat!==i)&&(s.props.colorAttachmentFormats=r,s.props.depthStencilAttachmentFormat=i,s._setPipelineNeedsUpdate("attachment formats"))}function Ov(n,e){if(n===e)return!0;if(!n||!e||n.length!==e.length)return!1;for(let t=0;t<n.length;t++)if(n[t]!==e[t])return!1;return!0}const Rv="compositeLayer.renderLayers";class Mv extends ys{get isComposite(){return!0}get isDrawable(){return!1}get isLoaded(){return super.isLoaded&&this.getSubLayers().every(e=>e.isLoaded)}getSubLayers(){return this.internalState&&this.internalState.subLayers||[]}initializeState(e){}setState(e){super.setState(e),this.setNeedsUpdate()}getPickingInfo({info:e}){const{object:t}=e;return t&&t.__source&&t.__source.parent&&t.__source.parent.id===this.id&&(e.object=t.__source.object,e.index=t.__source.index),e}filterSubLayer(e){return!0}shouldRenderSubLayer(e,t){return t&&t.length}getSubLayerClass(e,t){const{_subLayerProps:r}=this.props;return r&&r[e]&&r[e].type||t}getSubLayerRow(e,t,r){return e.__source={parent:this,object:t,index:r},e}getSubLayerAccessor(e){if(typeof e=="function"){const t={index:-1,data:this.props.data,target:[]};return(r,i)=>r&&r.__source?(t.index=r.__source.index,e(r.__source.object,t)):e(r,i)}return e}getSubLayerProps(e={}){var C;const{opacity:t,pickable:r,visible:i,parameters:s,getPolygonOffset:o,highlightedObjectIndex:a,autoHighlight:c,highlightColor:u,coordinateSystem:f,coordinateOrigin:d,wrapLongitude:h,positionFormat:g,modelMatrix:p,extensions:m,fetch:b,operation:w,_subLayerProps:_}=this.props,y={id:"",updateTriggers:{},opacity:t,pickable:r,visible:i,parameters:s,getPolygonOffset:o,highlightedObjectIndex:a,autoHighlight:c,highlightColor:u,coordinateSystem:f,coordinateOrigin:d,wrapLongitude:h,positionFormat:g,modelMatrix:p,extensions:m,fetch:b,operation:w},x=_&&e.id&&_[e.id],S=x&&x.updateTriggers,E=e.id||"sublayer";if(x){const O=this.props[ve],G=e.type?e.type._propTypes:{};for(const le in x){const L=G[le]||O[le];L&&L.type==="accessor"&&(x[le]=this.getSubLayerAccessor(x[le]))}}Object.assign(y,e,x),y.id=`${this.props.id}-${E}`,y.updateTriggers={all:(C=this.props.updateTriggers)==null?void 0:C.all,...e.updateTriggers,...S};for(const O of m){const G=O.getSubLayerProps.call(this,O);G&&Object.assign(y,G,{updateTriggers:Object.assign(y.updateTriggers,G.updateTriggers)})}return y}_updateAutoHighlight(e){for(const t of this.getSubLayers())t.updateAutoHighlight(e)}_getAttributeManager(){return null}_postUpdate(e,t){let r=this.internalState.subLayers;const i=!r||this.needsUpdate();if(i){const s=this.renderLayers();r=tb(s,Boolean),this.internalState.subLayers=r}q(Rv,this,i,r);for(const s of r)s.parent=this}}Mv.layerName="CompositeLayer";export{gc as $,qv as A,A as B,Mv as C,Af as D,Qv as E,Vc as F,dm as G,Fw as H,ir as I,yv as J,ou as K,ys as L,Bn as M,ev as N,nb as O,ra as P,aa as Q,Ss as R,Me as S,j as T,Ct as U,Be as V,xe as W,Cu as X,Nv as Y,Lu as Z,Xu as _,Hv as a,Ec as a0,Ka as a1,ls as a2,on as a3,zm as a4,X as a5,fs as a6,Fm as a7,yn as a8,si as a9,Xv as aA,Yv as aa,_d as ab,yd as ac,_n as ad,ee as ae,dc as af,ga as ag,Fv as ah,Qr as ai,ma as aj,Gv as ak,I as al,at as am,Qg as an,op as ao,yy as ap,Ee as aq,tw as ar,sw as as,Zv as at,Ci as au,Zy as av,Ky as aw,vi as ax,Jy as ay,gw as az,X_ as b,jv as c,rm as d,Cp as e,Z_ as f,Pp as g,zv as h,Of as i,v as j,cs as k,Fs as l,gm as m,as as n,Dp as o,Vv as p,fm as q,Wv as r,zp as s,qu as t,Dt as u,Sf as v,q as w,tb as x,eb as y,mn as z};
