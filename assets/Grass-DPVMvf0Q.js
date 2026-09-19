import{E as Fs}from"./el-button-BIufFjLp.js";import"./el-select-DHZScApW.js";import{y as Ms,o as Cs,r as ve,h as ft,l as Ft,_ as As,c as Ss,a as _t,w as pt,b as h,n as Es,q as Rs,v as Ls,t as A,p as we,f as Ps,g as vt}from"./index-9vIL5KkC.js";import{I as xt,d as B,P as j,ae as Wt,p as Je,ay as Qe,az as tt,aA as Xe,q as Ye,aB as Ze,af as zt,aC as $e,aD as ts,R as es,ab as ss,aE as ns,s as as,aF as Ds,aG as Ns,U as ie,x as ks,w as rt,J as Os,g as xe}from"./cesium-utSEP5if.js";import{D as Is}from"./cesium2s-TV_G_QRL.js";import{E as Te}from"./index-D2_aDPhA.js";import{G as Bs}from"./index-DRCmDxZs.js";import Gs from"./ConfigPanel-BclLAqzI.js";import{i as Ws}from"./flatTerrain-BZ-0E-Gz.js";import"./index-ANLxL66K.js";import"./use-global-config-DaIFvEHd.js";import"./_commonjsHelpers-gnU0ypJ3.js";import"./fullscreenPopper-CpT4yrsP.js";import"./index-CtVsJ-X_.js";import"./services-CwmS6buH.js";import"./el-color-picker-Gb65Y4tk.js";const os=5,zs=[.11,.19,.055],Hs=[.42,.66,.15],Us=[.92,.97,.48],Vs=[.62,.6,.44],Ks=.18,js=[.5,.28,.15,.07],qs=[1,2.17,4.31,8.11],Fe=[.72,.28],Js=[1,1.7],Qs=1.1,Xs=.35,Ys=.22,Zs=3.4,ne=s=>s<0?0:s>1?1:s,It=(s,t,e)=>{if(s===t)return e<s?0:1;const n=ne((e-s)/(t-s));return n*n*(3-2*n)},Yt=(s,t,e)=>s+(t-s)*e;function $s(s){let t=(s|0)^2654435769;return t=Math.imul(t^t>>>16,569420461),t=Math.imul(t^t>>>15,1935289751),t=(t^t>>>15)>>>0,t/4294967296}function C(s,t){return $s((s|0)*2654435761+(t|0)*2246822507+374761393)}function Tt(s,t){return C(s,t)*2-1}function tn(s=os){const t=Math.max(1,Math.floor(s)),e=2*t+1,n=2*t-1,i=new Float32Array(e),o=new Float32Array(e);for(let u=0;u<t;u++){const g=u/t;i[2*u]=g,i[2*u+1]=g,o[2*u]=-1,o[2*u+1]=1}i[2*t]=1,o[2*t]=0;const r=new Uint16Array(n*3);let f=0;for(let u=0;u<t;u++){const g=2*u,b=2*u+1;if(u<t-1){const y=2*(u+1),_=2*(u+1)+1;r[f++]=g,r[f++]=b,r[f++]=_,r[f++]=g,r[f++]=_,r[f++]=y}else r[f++]=g,r[f++]=b,r[f++]=2*t}return{segments:t,vertCount:e,triCount:n,u:i,lat:o,indices:r,tipIndex:2*t}}const Zt=4,ae=Math.PI*(3-Math.sqrt(5));function en(s,t=0){const e=Math.max(1,Math.floor(s));if(e===1)return[[0,0,0,1]];const n=2*Math.PI*C(t,91),i=[];for(let o=0;o<e;o++){const r=Math.sqrt((o+.5)/e),f=o*ae+n*.15,u=f+(C(o,92)-.5)*.6,g=.72+.56*C(o,93);i.push([r*Math.cos(f),r*Math.sin(f),u,g])}return i}const sn={pct:0,lo:1,hi:1};function nn(s,t,e){if(!(e.pct>0))return 1;const n=Math.abs(Math.floor(s))*31+Math.floor(t);if(C(n,371)>=Math.min(1,e.pct))return 1;const i=ne(e.lo),o=ne(e.hi),r=Math.min(i,o),f=Math.max(i,o);return r+(f-r)*C(n,372)}const is=4,$t=4,Me=4,an=.45,on=1.7,te=2,Ce=4,Bt=1/3,Ae=2/3,Se=1.9,rn=2.5,Ee=.15,ln=.5,Re=.08,cn={pct:0},un={count:0,lenK:.45,tilt:.8,fold:cn};function dn(s,t,e,n){const i=Math.abs(Math.floor(s))*37+Math.floor(t)*11+Math.floor(e),o=.18+.52*C(i,500),r=n.lenK*(.55+.45*C(i,501)),u=(C(i,502)<.5?-1:1)*n.tilt*(.45+.55*C(i,503)),g=.6+.8*C(i,504);return[o,r,u,g]}function hn(s,t,e,n,i=1){if(!(n.pct>0))return{folded:!1,hinges:[]};const o=Math.abs(Math.floor(s))*61+Math.floor(t)*13+Math.floor(e)*149;if(C(o,520)>=Math.min(1,n.pct))return{folded:!1,hinges:[]};const r=Math.max(te,Math.min(Ce,te+Math.floor(C(o,521)*(Ce-te+1)))),f=i<0?-1:1,u=[];for(let g=0;g<r;g++){const b=Bt+(Ae-Bt)*g/r,y=Bt+(Ae-Bt)*(g+1)/r,_=b+(y-b)*C(o+g*7,522),w=g===0?Se+(rn-Se)*C(o+g*7,523):Ee+(ln-Ee)*C(o+g*7,524);u.push({at:_,ang:f*w})}return{folded:!0,hinges:u}}function Le(s,t,e,n){let i=0,o=0,r=0;for(const u of n){if(!(u.at<s))break;const g=Pe(u.at,t,e),b=Math.cos(i),y=Math.sin(i),_=Math.cos(i+u.ang),w=Math.sin(i+u.ang);o+=(b-_)*g.x-(y-w)*g.y,r+=(y-w)*g.x+(b-_)*g.y,i+=u.ang}const f=Pe(s,t,e);return{x:Math.cos(i)*f.x-Math.sin(i)*f.y+o,y:Math.sin(i)*f.x+Math.cos(i)*f.y+r,nx:Math.cos(i),ny:Math.sin(i)}}function fn(s,t){let e=1-Math.abs(s-1)/Re;for(const n of t){const i=1-Math.abs(s-n.at)/Re;i>e&&(e=i)}return Math.max(0,Math.min(1,e))}function _n(s,t){const n=[0,...s.map(_=>_.at),1],i=n.length-1,o=2*i+1,r=2*i-1,f=new Float32Array(o),u=new Float32Array(o),g=new Float32Array(o*4),b=new Uint16Array(r*3);for(let _=0;_<i;_++){const w=n[_],l=Le(w,1,t,s);for(let M=0;M<2;M++){const S=2*_+M;f[S]=w,u[S]=M===0?-1:1,g[S*4]=l.x,g[S*4+1]=l.y,g[S*4+2]=l.nx,g[S*4+3]=l.ny}}{const _=2*i,w=Le(1,1,t,s);f[_]=1,u[_]=0,g[_*4]=w.x,g[_*4+1]=w.y,g[_*4+2]=w.nx,g[_*4+3]=w.ny}let y=0;for(let _=0;_<i-1;_++){const w=2*_,l=2*_+1,M=2*(_+1),S=2*(_+1)+1;b[y++]=w,b[y++]=l,b[y++]=S,b[y++]=w,b[y++]=S,b[y++]=M}{const _=2*(i-1);b[y++]=_,b[y++]=_+1,b[y++]=2*i}return{vertCount:o,triCount:r,u:f,lat:u,bpt:g,indices:b}}function mn(s,t,e,n=1){const i=Math.max(0,Math.min(is,Math.floor(e.count))),o=[];for(let r=0;r<i;r++){const[f,u,g,b]=dn(s,t,r,e),y=f>n+1e-6,_=hn(s,t,r,e.fold,g);o.push({attachU:f,lenK:y?0:u,phi:g,bendK:b,folded:_.folded,hinges:_.hinges,severed:y})}return o}function gn(s=os,t=1,e=0,n=sn,i=un){const o=tn(s),r=Math.max(1,Math.floor(t)),f=Math.max(0,Math.min(is,Math.floor(i.count))),u=o.vertCount*r,g=en(r,e),b=[];let y=u,_=o.triCount*r;for(let H=0;H<r;H++){const[W,Q,m,p]=g[H],F=nn(e,H,n),x=mn(e,H,i,F).map(E=>{const k=_n(E.hinges,E.phi);return y+=k.vertCount,_+=k.triCount,{rec:E,strip:k}});b.push({dx:W,dz:Q,yawOff:m,hScale:p,brk:F,branches:x})}const w=new Float32Array(y),l=new Float32Array(y),M=new Float32Array(y*Zt),S=new Float32Array(y),L=new Float32Array(y*$t),N=new Float32Array(y),U=new Float32Array(y*Me),D=new Uint16Array(_*3);let Z=u,V=0;for(let H=0;H<r;H++){const W=b[H],Q=H*o.vertCount;w.set(o.u,Q),l.set(o.lat,Q);for(let m=0;m<o.vertCount;m++){const p=Q+m,F=p*Zt;M[F]=W.dx,M[F+1]=W.dz,M[F+2]=W.yawOff,M[F+3]=W.hScale,S[p]=W.brk,L[p*$t]=-1}for(let m=0;m<o.indices.length;m++)D[V+m]=o.indices[m]+Q;V+=o.indices.length;for(const{rec:m,strip:p}of W.branches){const F=Z;Z+=p.vertCount,w.set(p.u,F),l.set(p.lat,F);for(let x=0;x<p.vertCount;x++){const E=F+x,k=E*Zt;M[k]=W.dx,M[k+1]=W.dz,M[k+2]=W.yawOff,M[k+3]=W.hScale,S[E]=1;const G=E*$t;L[G]=m.attachU,L[G+1]=m.lenK,L[G+2]=m.phi,L[G+3]=m.bendK,N[E]=m.folded?fn(p.u[x],m.hinges):0;const Y=E*Me;U[Y]=p.bpt[x*4],U[Y+1]=p.bpt[x*4+1],U[Y+2]=p.bpt[x*4+2],U[Y+3]=p.bpt[x*4+3]}for(let x=0;x<p.indices.length;x++)D[V+x]=p.indices[x]+F;V+=p.indices.length}}return{segments:o.segments,blades:r,vertCount:y,triCount:_,u:w,lat:l,slot:M,brk:S,brA:L,brPale:N,bpt:U,branchPerBlade:f,branchFoldCount:b.reduce((H,W)=>H+W.branches.filter(Q=>Q.rec.folded).length,0),indices:D,tipIndex:o.tipIndex}}function Pe(s,t,e){const n=e*s;if(Math.abs(n)<1e-4)return{x:0,y:t*s,tx:0,ty:1};const i=t/e;return{x:i*(1-Math.cos(n)),y:i*Math.sin(n),tx:Math.sin(n),ty:Math.cos(n)}}function rs(s){const t=s.dirDeg*Math.PI/180;return[Math.cos(t),Math.sin(t)]}const pn=.28;function ls(s,t,e){if(!e)return!0;const n=Math.floor(e.length/2);if(n<3)return!0;let i=!1;for(let o=0,r=n-1;o<n;r=o++){const f=e[o*2],u=e[o*2+1],g=e[r*2],b=e[r*2+1];u>t!=b>t&&s<(g-f)*(t-u)/(b-u)+f&&(i=!i)}return i}function cs(s,t,e){const n=Math.floor(s),i=Math.floor(t),o=s-n,r=t-i,f=(l,M)=>C(l*73856093+M*19349663,e),u=f(n,i),g=f(n+1,i),b=f(n,i+1),y=f(n+1,i+1),_=o*o*(3-2*o),w=r*r*(3-2*r);return Yt(Yt(u,g,_),Yt(b,y,_),w)}const bn=4096;function yn(s,t,e){const n=Math.min(t,bn),i=new Float64Array(n);for(let o=0;o<n;o++){const r=n===t?o:(Math.imul(o,2654435761)>>>0)%t;i[o]=s(r).score}return i.sort(),i[Math.min(n-1,Math.max(0,Math.floor(e*n)))]}function vn(s){const t=Math.min(.6,Math.max(0,s.holeFrac)),e=Math.max(1,Math.ceil(Math.sqrt(s.count/(1-t)))),n=e*e,i=s.area/e,o=s.area/2,r=_=>_+(s.seed|0)|0,f=Math.max(0,s.edgeFade)*s.area,u=_=>{const w=_%e,l=(_-w)/e,M=.08+.84*C(r(_),11),S=.08+.84*C(r(_),12),L=(w+M)*i-o,N=(l+S)*i-o,U=cs(L/s.patchScale+.5,N/s.patchScale+.5,s.seed);let D=1;return f>0&&(D=Math.min(It(-o,-o+f,L),It(o,o-f,L),It(-o,-o+f,N),It(o,o-f,N))),{x:L,z:N,score:U*D}},g=t<=0?-1:yn(u,n,t),b=[],y=[];for(let _=0;_<e;_++)for(let w=0;w<e;w++){const l=_*e+w,{x:M,z:S,score:L}=u(l);if(L<g){y.push(l);continue}if(!ls(M,S,s.region)){y.push(l);continue}const N=b.length,U=1+s.heightVar*Tt(N,21),D=Math.max(.05,s.bladeHeight*U);b.push({x:M,z:S,height:D,halfWidth:s.bladeWidth*(.75+.5*C(N,22))*Math.sqrt(D/s.bladeHeight),yaw:2*Math.PI*C(N,23),lean:s.leanRad*Tt(N,24),hue:Tt(N,25),stiff:Math.min(1.8,Math.max(.55,D/s.bladeHeight))*(.75+.5*C(N,26)),phaseJitter:2*Math.PI*C(N,27)})}return{blades:b,gridN:e,holes:y.length,cells:n,holeCells:y,step:i}}const De=12;function wn(s){const t=s.length,e=new Float32Array(t*4),n=new Float32Array(t*4),i=new Float32Array(t*4);for(let o=0;o<t;o++){const r=s[o];e[o*4]=r.x,e[o*4+1]=r.z,e[o*4+2]=r.height,e[o*4+3]=r.halfWidth,n[o*4]=r.yaw,n[o*4+1]=r.lean,n[o*4+2]=r.stiff,n[o*4+3]=r.hue,i[o*4]=r.phaseJitter}return{base:e,rot:n,wind:i}}const us=`
const vec3  GF_C_ROOT = vec3(${zs.map(s=>s.toFixed(4)).join(", ")});
const vec3  GF_C_MID  = vec3(${Hs.map(s=>s.toFixed(4)).join(", ")});
const vec3  GF_C_TIP  = vec3(${Us.map(s=>s.toFixed(4)).join(", ")});
const vec3  GF_BREAK_PALE = vec3(${Vs.map(s=>s.toFixed(4)).join(", ")});
const float GF_BREAK_W    = ${Ks.toFixed(4)};
const float GF_AO_LO  = 0.45;

float gfJsSmoothstep(float e0, float e1, float x) {
  float t = clamp((x - e0) / (e1 - e0), 0.0, 1.0);
  return t * t * (3.0 - 2.0 * t);
}

vec3 gfBladeColor(float u, float hue) {
  float s1 = gfJsSmoothstep(0.0, 0.55, u);
  float s2 = gfJsSmoothstep(0.45, 1.0, u);
  vec3 c = mix(mix(GF_C_ROOT, GF_C_MID, s1), GF_C_TIP, s2);
  c *= mix(GF_AO_LO, 1.0, gfJsSmoothstep(0.0, 0.6, u));
  c.r *= 1.0 - 0.35 * hue;
  c.b *= 1.0 + 0.35 * hue;
  return clamp(c, 0.0, 1.0);
}
`,ds=`
const float GF_GUST_MIN = ${pn.toFixed(4)};
const float GF_W0 = ${Fe[0].toFixed(4)};
const float GF_W1 = ${Fe[1].toFixed(4)};
const float GF_F2 = ${Js[1].toFixed(4)};
const float GF_P2 = ${Qs.toFixed(4)};
const vec4  GF_GUST_W = vec4(${js.map(s=>s.toFixed(4)).join(", ")});
const vec4  GF_GUST_F = vec4(${qs.map(s=>s.toFixed(4)).join(", ")});
const float GF_AMP_FLOOR   = ${Xs.toFixed(4)};
const float GF_FLUTTER_MIX = ${Ys.toFixed(4)};
const float GF_FLUTTER_FREQ = ${Zs.toFixed(4)};
const float GF_BRANCH_FREQ  = ${on.toFixed(4)};
const float GF_BRANCH_W_K   = ${an.toFixed(4)};

uniform vec4 u_gustPhase;

float gfWave(float phi) {
  return GF_W0 * sin(phi) + GF_W1 * sin(GF_F2 * phi + GF_P2);
}

// Wind-to-blade coupling. KEEP THE SIGN: proj is the wind component inside the blade's
// own plane, so its sign decides which way the blade tips over. Only the MAGNITUDE is
// floored (a blade whose width axis is perpendicular to the wind would otherwise never
// move at all). Mirrors windCoupling() in the JS half of this file.
float gfCoupling(vec2 windDir, float yaw) {
  float proj = cos(yaw) * windDir.x + sin(yaw) * windDir.y;
  float s = proj < 0.0 ? -1.0 : 1.0;
  return s * (GF_AMP_FLOOR + (1.0 - GF_AMP_FLOOR) * abs(proj));
}

float gfGust(float w) {
  vec4 s = vec4(sin(GF_GUST_F.x * w + u_gustPhase.x),
                sin(GF_GUST_F.y * w + u_gustPhase.y),
                sin(GF_GUST_F.z * w + u_gustPhase.z),
                sin(GF_GUST_F.w * w + u_gustPhase.w));
  return 0.5 + 0.5 * dot(GF_GUST_W, s);
}

vec2 gfCenterline(float u, float height, float theta) {
  float a = theta * u;
  if (abs(a) < 1e-4) { return vec2(0.0, height * u); }
  float r = height / theta;
  return vec2(r * (1.0 - cos(a)), r * sin(a));
}

vec2 gfTangent(float u, float theta) {
  float a = theta * u;
  if (abs(a) < 1e-4) { return vec2(0.0, 1.0); }
  return vec2(sin(a), cos(a));
}

float gfWidthProfile(float u) {
  return 1.0 - 0.9 * pow(clamp(u, 0.0, 1.0), 1.5);
}
`,xn=`
in vec2 a_uv;
in vec4 a_slot;
in vec4 a_base;
in vec4 a_rot;
in vec4 a_wind;
in float a_brk;
in vec4 a_brA;
in float a_pale;
in vec4 a_bpt;

uniform float u_time;
uniform vec2  u_windDir;
uniform float u_windK;
uniform float u_windOmega;
uniform float u_gustScale;
uniform float u_gustSpeed;
uniform float u_ampRad;
uniform vec3  u_cameraPosModel;

out float v_u;
out float v_hue;
out vec3  v_normalModel;
out vec3  v_posModel;
out float v_dist;
// Per-vertex whitening amount in [0,1]. Computed HERE (not in the fragment shader) because
// the break points of a drooping branch are already baked into a_bpt and are no longer
// visible to the shader -- those vertices carry their pale amount in a_pale instead.
// For the main blade it is the truncation-end band (ramp over uu, so the severed end is
// the palest point). This is why v_brk / v_broken no longer exist as varyings.
out float v_pale;

void main() {
  float u      = a_uv.x;
  float latN   = a_uv.y;
  float x0     = a_base.x;
  float z0     = a_base.y;
  float height = a_base.z;
  float halfW  = a_base.w;
  float yaw0   = a_rot.x;
  float lean   = a_rot.y;
  float stiff  = a_rot.z;
  float hue    = a_rot.w;

  // Tuft slot: this blade's offset from the tuft centre, in units of the tuft radius,
  // rotated into the instance's own frame so one shared table fans out differently per tuft.
  float c0 = cos(yaw0);
  float s0 = sin(yaw0);
  float bx = x0 + a_slot.x * c0 - a_slot.y * s0;
  float bz = z0 + a_slot.x * s0 + a_slot.y * c0;
  float yaw = yaw0 + a_slot.z;
  float H   = max(0.02, height * a_slot.w);
  // Truncation parameter: clamp the arc parameter to the break point => the strip simply ENDS
  // there. a_brk = 1.0 means intact, so min(u, 1.0) == u exactly (bit-identical for intact
  // strips). NOTE this is PARAMETER-AGNOSTIC: it applies to the main blade AND to every side
  // branch (each carries its OWN a_brk) => "branches snap off" needs no separate code path.
  float uuClip = clamp(a_brk, 0.0, 1.0);

  float along = bx * u_windDir.x + bz * u_windDir.y;
  float phi   = u_windK * along - u_windOmega * u_time + a_wind.x;
  float g     = gfGust(along / u_gustScale - (u_gustSpeed * u_time) / u_gustScale);
  float env   = GF_GUST_MIN + (1.0 - GF_GUST_MIN) * g;

  // Two time scales, in a CONVEX combination (so |sway| <= 1 still holds and the
  // amplitude bound is unchanged):
  //   * mainSway: the coherent travelling wave (phase from the blade's own position),
  //     direction-coupled through gfCoupling;
  //   * flutter : per-blade phase (a_wind.x) only => incoherent shimmer, no wavefront.
  float mainSway = gfWave(phi) * gfCoupling(u_windDir, yaw);
  float flutter  = gfWave(u_windOmega * GF_FLUTTER_FREQ * u_time + a_wind.x);
  float sway     = mix(mainSway, flutter, GF_FLUTTER_MIX);
  float theta = lean + u_ampRad * stiff * env * sway;

  float uu;
  vec2 p2;
  if (a_brA.x >= 0.0) {
    // ---- Side branch (a_brA.x = attachU >= 0) ----
    // The branch's base frame is the PARENT centreline at attachU, so the branch rides along
    // with whatever the parent is doing (static lean + wind bend) instead of detaching.
    // Its own angle gets an EXTRA wind term at GF_BRANCH_FREQ (not 1.0: at the same frequency
    // a whole tuft would swing like one rigid body and the branches would read as noise)
    // plus a per-branch phase (a_wind.x + attachU * 2pi) so the branches shimmer independently.
    float ang  = a_brA.z + u_ampRad * a_brA.w * env
                 * gfWave(GF_BRANCH_FREQ * u_windOmega * u_time + a_wind.x + a_brA.x * 6.2831853)
                 * gfCoupling(u_windDir, yaw);
    vec2  Cp   = gfCenterline(a_brA.x, H, theta);
    vec2  Tp   = gfTangent(a_brA.x, theta);
    // Rotate the parent's tangent by ang inside the blade's own bend plane. perp keeps the
    // SAME handedness as the main path's N = (T.y, -T.x) so both bow to the same side.
    vec2  axis = vec2(Tp.x * cos(ang) - Tp.y * sin(ang), Tp.x * sin(ang) + Tp.y * cos(ang));
    vec2  perp = vec2(axis.y, -axis.x);
    uu = min(u, uuClip);
    // The branch shape is BAKED into a_bpt as a rigid polyline in the branch's own local
    // frame (bent AND folded: "breaks off and droops down"). All we do here is map that
    // polyline through the live frame:
    //   (lx, ly) = local point (baked with L = 1, scaled by lenK*H here)
    //   (nx, ny) = the local lateral unit vector of THAT segment, so the ribbon's width
    //              direction follows the fold instead of staying on the original perp
    //
    // ⭐ lenK == 0 means "this branch went away with the parent's severed top" (baked on the
    // JS side, see branchPlan). Scaling by Lb = 0 kills the position term; the width GATE
    // kills the width term. Without the gate the base ring would still straddle
    // +-0.45*halfW around Cp, leaving the vertices merely COLLINEAR -- and collinear-in-
    // exact-math is NOT degenerate-in-float32: the rounding of Cp +- perp*W leaves a sliver
    // that some rasterisers still emit fragments for (measured: 1823 px of speckle over the
    // whole screen). With the gate every vertex lands on the EXACT same float triple.
    // ⚠️ For a live branch brAlive is exactly 1.0, and x * 1.0 is bit-exact, so this gate
    //    cannot change a live branch by even one ULP.
    float Lb      = a_brA.y * H;
    float brAlive = step(1e-6, a_brA.y);
    float bw      = latN * halfW * GF_BRANCH_W_K * gfWidthProfile(uu) * brAlive;
    p2 = Cp + perp * (Lb * a_bpt.x + a_bpt.z * bw) + axis * (Lb * a_bpt.y + a_bpt.w * bw);
  } else {
    // ---- Main blade (a_brA.x = -1) ----
    uu = min(u, uuClip);
    vec2 C = gfCenterline(uu, H, theta);
    vec2 T = gfTangent(uu, theta);
    vec2 N = vec2(T.y, -T.x);
    p2 = C + N * (latN * halfW * gfWidthProfile(uu));
  }

  float cy = cos(yaw);
  float sy = sin(yaw);
  // Model space is ENU: x = east, y = north, z = UP.
  // NOTE: Cesium's eastNorthUpToFixedFrame is NOT the usual "y up" graphics frame.
  // Kernel ground axes (x, z) map to (east, north); kernel vertical maps to z.
  // (Full story: see the JS doc block right above this shader.)
  vec3 posModel = vec3(bx + p2.x * cy, bz + p2.x * sy, p2.y);

  v_u = uu;
  // Whitening amount, per vertex:
  //   * main blade: 0 while intact (bit-exact => turning breaks on cannot tint an intact
  //     blade by one ULP), ramping to 1 over the last GF_BREAK_W of arc length before the
  //     severed end (uu == uuClip there, so that is the palest point);
  //   * side branch: the baked per-vertex amount a_pale (1 at every fold point and the tip).
  float broken = step(uuClip, 0.9999);
  v_pale = (a_brA.x >= 0.0) ? a_pale : broken * gfJsSmoothstep(uuClip - GF_BREAK_W, uuClip, uu);
  v_hue = hue;
  // Blade face normal: kernel (-sin yaw, 0, cos yaw)  ->  ENU (-sin yaw, cos yaw, 0)
  v_normalModel = vec3(-sy, cy, 0.0);
  v_posModel = posModel;
  v_dist = length(posModel - u_cameraPosModel);
  gl_Position = czm_modelViewProjection * vec4(posModel, 1.0);
  // Depth convention: Cesium's globe (and every built-in pipeline) writes LOGARITHMIC depth
  // when scene.logarithmicDepthBuffer is on. Our raw DrawCommand would otherwise write the
  // plain linear NDC depth, which is numerically "almost at the far plane" on that scale, so
  // the globe wins the depth test and hides the near grass (only blades sticking above the
  // horizon survived). czm_vertexLogDepth() feeds v_depthFromNearPlusOne; it is a no-op when
  // LOG_DEPTH is not defined.
  czm_vertexLogDepth();
}
`,Tn=`
in float v_u;
in float v_hue;
in vec3  v_normalModel;
in vec3  v_posModel;
in float v_dist;
in float v_pale;

uniform vec3  u_sunDirModel;
uniform vec3  u_cameraPosModel;
uniform vec3  u_groundColor;
uniform float u_fadeNear;
uniform float u_fadeFar;
uniform float u_ambient;
uniform float u_translucency;

void main() {
  float fade = 1.0 - gfJsSmoothstep(u_fadeNear, u_fadeFar, v_dist);
  float dither = fract(gl_FragCoord.x * 0.7548776662 + gl_FragCoord.y * 0.5698402910);
  if (dither > fade) { discard; }

  vec3 N = normalize(v_normalModel);
  if (!gl_FrontFacing) { N = -N; }
  vec3 V = normalize(u_cameraPosModel - v_posModel);

  vec3 base = gfBladeColor(v_u, v_hue);
  float ndl = max(dot(N, u_sunDirModel), 0.0);
  vec3 lit = base * (u_ambient + (1.0 - u_ambient) * ndl);

  float back = max(dot(-V, u_sunDirModel), 0.0);
  lit += base * u_translucency * pow(back, 3.0);

  // Broken ends go pale. The amount arrives per vertex in v_pale (see the vertex shader):
  // 0 for every intact main blade => mix() returns lit bit-for-bit, so switching breaks on
  // cannot tint an intact blade; non-zero near a severed end / at a branch's fold points.
  // Neither v_brk nor the fold geometry is needed here any more -- that is the point of
  // moving the ramp to the vertex shader.
  lit = mix(lit, GF_BREAK_PALE, v_pale);

  // Far-blade tint toward the ground colour. KEEP THIS OPERAND ORDER: mix(a, b, 0.0)
  // returns a exactly, so swapping the first two arguments paints the WHOLE near field
  // in pure ground colour (blades present, animating, zero errors, and byte-identical to
  // the bare ground). See the JS doc block above for the full story.
  // MUST also use the SAME ramp as the dither cull above, otherwise a ring of untinted
  // blades survives outside the cull line and reads as a hard edge.
  lit = mix(lit, u_groundColor, gfJsSmoothstep(u_fadeNear, u_fadeFar, v_dist));
  out_FragColor = vec4(clamp(lit, 0.0, 1.0), 1.0);
  // Must match the vertex shader's czm_vertexLogDepth() call. See that shader for the full
  // story: without this the globe's logarithmic depth hides all near-field grass.
  czm_writeLogDepth();
}
`;function Fn(){return us+ds+xn}function Mn(){return us+Tn}const Cn=["u_time","u_windDir","u_windK","u_windOmega","u_gustScale","u_gustSpeed","u_ampRad","u_cameraPosModel","u_gustPhase"],An=["u_sunDirModel","u_cameraPosModel","u_groundColor","u_fadeNear","u_fadeFar","u_ambient","u_translucency"];function Sn(){return{area:120,count:3e4,seed:20260917,bladeHeight:.42,heightVar:.45,bladeWidth:.012,bladesPerTuft:3,tuftRadius:.075,leanRad:.22,patchScale:26,holeFrac:.18,edgeFade:.06,breakPct:.55,breakLo:.42,breakHi:.92,branchCount:3,branchLen:.62,branchTilt:.8,branchFoldPct:1/3,region:null}}function En(){return{dirDeg:35,speed:6.5,wavelength:34,ampRad:.62,gustScale:21,gustSpeed:4.2,gustPhase:Nt(20260917)}}function Nt(s){return[2*Math.PI*C(s,71),2*Math.PI*C(s,72),2*Math.PI*C(s,73),2*Math.PI*C(s,74)]}function hs(s){const t=2*Math.PI/s.wavelength;return{k:t,omega:t*s.speed}}const ht={a_uv:0,a_slot:1,a_base:2,a_rot:3,a_wind:4,a_brk:5,a_brA:6,a_pale:7,a_bpt:8};class Rn{constructor(t,e){this._isDestroyed=!1,this.result=null,this.meshInfo=null,this._va=null,this._draw=null,this._shader=null,this._buffers=[],this._needsRebuild=!0,this._k=0,this._omega=0,this._t=0,this._lastWall=null,this._tPinned=null,this.visible=!0,this.viewer=t,this.scene=t.scene,this.segments=e.segments??5,this.layout={...Sn(),...e.layout??{}},this.wind={...En(),...e.wind??{}},this.timeScale=e.timeScale??1,this.groundColor=e.groundColor??[.18,.26,.13],this.fadeNear=e.fadeNear??140,this.fadeFar=e.fadeFar??260,this.ambient=e.ambient??.42,this.translucency=e.translucency??.35,this._modelMatrix=xt.eastNorthUpToFixedFrame(B.fromDegrees(e.lon,e.lat,e.height??0)),this._invModel=j.inverseTransformation(this._modelMatrix,new j),this._camModel=new B,this._sunModel=B.normalize(new B(.62,.42,.66),new B),this._ground=new B(...this.groundColor),this._gustPhase=new Wt(...Nt(this.layout.seed)),this._windDir=new Je(1,0),this._syncWindScalars()}_syncWindScalars(){const[t,e]=rs(this.wind);this._windDir.x=t,this._windDir.y=e;const{k:n,omega:i}=hs(this.wind);this._k=n,this._omega=i}update(t){this._isDestroyed||((!this._draw||this._needsRebuild)&&(this._needsRebuild=!1,this._createCommands(t.context)),this._draw&&this.visible&&(this._advanceTime(),j.multiplyByPoint(this._invModel,t.camera.positionWC,this._camModel),t.commandList.push(this._draw)))}_advanceTime(){if(this._tPinned!==null){this._t=this._tPinned;return}const t=(typeof performance<"u"?performance.now():Date.now())*.001;if(this._lastWall===null){this._lastWall=t;return}let e=t-this._lastWall;this._lastWall=t,(!(e>0)||e>.5)&&(e=0),this._t+=e*this.timeScale}_createCommands(t){var Q,m,p;this._destroyCommands();const e=gn(this.segments,this.layout.bladesPerTuft,this.layout.seed,{pct:this.layout.breakPct,lo:this.layout.breakLo,hi:this.layout.breakHi},{count:this.layout.branchCount,lenK:this.layout.branchLen,tilt:this.layout.branchTilt,fold:{pct:this.layout.branchFoldPct}});this.meshInfo={verts:e.vertCount,tris:e.triCount,branchPerBlade:e.branchPerBlade,branchFoldCount:e.branchFoldCount};const n=vn(this.layout);this.result=n;const i=n.blades.length;if(i===0)return;const o=wn(n.blades),r=Qe.STATIC_DRAW,f=new Float32Array(e.vertCount*2);for(let F=0;F<e.vertCount;F++)f[F*2]=e.u[F],f[F*2+1]=e.lat[F];const u=tt.createVertexBuffer({context:t,typedArray:f,usage:r}),g=tt.createVertexBuffer({context:t,typedArray:e.slot,usage:r}),b=tt.createVertexBuffer({context:t,typedArray:e.brk,usage:r}),y=tt.createVertexBuffer({context:t,typedArray:e.brA,usage:r}),_=tt.createVertexBuffer({context:t,typedArray:e.brPale,usage:r}),w=tt.createVertexBuffer({context:t,typedArray:e.bpt,usage:r}),l=tt.createVertexBuffer({context:t,typedArray:o.base,usage:r}),M=tt.createVertexBuffer({context:t,typedArray:o.rot,usage:r}),S=tt.createVertexBuffer({context:t,typedArray:o.wind,usage:r});this._buffers.push(u,g,b,y,_,w,l,M,S);const L=Xe.fromTypedArray(e.indices);L||console.error("[GrassField] 无法从索引数组推断 IndexDatatype（应为 Uint8/16/32Array），绘制会静默失效：",(m=(Q=e.indices)==null?void 0:Q.constructor)==null?void 0:m.name);const N=tt.createIndexBuffer({context:t,typedArray:e.indices,indexDatatype:L,usage:r});this._buffers.push(N);const U=Ye.FLOAT,D=(F,x,E,k)=>({index:F,vertexBuffer:x,componentsPerAttribute:E,componentDatatype:U,normalize:!1,offsetInBytes:0,strideInBytes:0,instanceDivisor:k});this._va=new Ze({context:t,attributes:[D(ht.a_uv,u,2,0),D(ht.a_slot,g,4,0),D(ht.a_brk,b,1,0),D(ht.a_brA,y,4,0),D(ht.a_pale,_,1,0),D(ht.a_bpt,w,4,0),D(ht.a_base,l,4,1),D(ht.a_rot,M,4,1),D(ht.a_wind,S,4,1)],indexBuffer:N});const Z=new zt({context:t,sources:[Fn()]}),V=new zt({context:t,sources:[Mn()]});!!((p=this.scene)!=null&&p.logarithmicDepthBuffer)&&(Z.defines.push("LOG_DEPTH"),V.defines.push("LOG_DEPTH")),this._shader=$e.fromCache({context:t,vertexShaderSource:Z,fragmentShaderSource:V,attributeLocations:ht});const W=this._buildUniformMap();this._draw=new ts({vertexArray:this._va,primitiveType:es.TRIANGLES,shaderProgram:this._shader,renderState:ns.fromCache({depthTest:{enabled:!0},depthMask:!0,cull:{enabled:!1}}),uniformMap:W,modelMatrix:this._modelMatrix,pass:ss.OPAQUE,count:e.indices.length,instanceCount:i,cull:!1,owner:this})}_buildUniformMap(){const t={u_time:()=>this._t,u_windDir:()=>this._windDir,u_windK:()=>this._k,u_windOmega:()=>this._omega,u_gustScale:()=>this.wind.gustScale,u_gustSpeed:()=>this.wind.gustSpeed,u_ampRad:()=>this.wind.ampRad,u_cameraPosModel:()=>this._camModel,u_gustPhase:()=>this._gustPhase,u_sunDirModel:()=>this._sunModel,u_groundColor:()=>this._ground,u_fadeNear:()=>this.fadeNear,u_fadeFar:()=>this.fadeFar,u_ambient:()=>this.ambient,u_translucency:()=>this.translucency},e=Array.from(new Set([...Cn,...An])),n=e.filter(o=>!(o in t));n.length>0&&console.error(`[GrassField] uniformMap 缺项：${n.join(", ")} —— 这些 uniform 会静默变成 0（Cesium 不报错）。清单来自 shared/grassField.ts 的 GRASS_VERTEX_UNIFORMS / GRASS_FRAGMENT_UNIFORMS。`);const i=Object.keys(t).filter(o=>!e.includes(o));return i.length>0&&console.warn(`[GrassField] uniformMap 多余项（着色器已不声明）：${i.join(", ")}`),t}setLayout(t){const e=this.layout.seed;this.layout={...this.layout,...t},this.layout.seed!==e&&(this._gustPhase=new Wt(...Nt(this.layout.seed))),this._needsRebuild=!0}setSegments(t){const e=Math.max(1,Math.round(t));return e===this.segments?!1:(this.segments=e,this._needsRebuild=!0,!0)}setOrigin(t,e,n=0){this._modelMatrix=xt.eastNorthUpToFixedFrame(B.fromDegrees(t,e,n)),this._invModel=j.inverseTransformation(this._modelMatrix,new j),this._needsRebuild=!0}setWind(t){this.wind={...this.wind,...t},this._syncWindScalars()}setAppearance(t){t.groundColor&&(this.groundColor=t.groundColor,this._ground=new B(...this.groundColor)),t.fadeNear!==void 0&&(this.fadeNear=t.fadeNear),t.fadeFar!==void 0&&(this.fadeFar=t.fadeFar),t.ambient!==void 0&&(this.ambient=t.ambient),t.translucency!==void 0&&(this.translucency=t.translucency)}setTime(t){this._tPinned=t,t!==null&&(this._t=t),this._lastWall=null}get time(){return this._t}lawnScreenQuad(){if(!this.scene)return null;const t=this.layout.area/2,e=[[-t,-t],[t,-t],[t,t],[-t,t]],n=[];for(const[i,o]of e){const r=j.multiplyByPoint(this._modelMatrix,new B(i,o,0),new B),f=as.worldToWindowCoordinates(this.scene,r);if(!f)return null;n.push({x:f.x,y:f.y})}return n}get stats(){const t=this.result,e=t?t.blades.length:0,n=this.segments,i=Math.max(1,Math.floor(this.layout.bladesPerTuft||1)),o=this.meshInfo,r=o?o.branchPerBlade:0,f=o?o.verts:(2*n+1)*i,u=o?o.tris:(2*n-1)*i;return{blades:e,totalBlades:e*i,bladesPerTuft:i,totalBranches:e*i*r,branchPerBlade:r,branchFoldCount:o?o.branchFoldCount:0,branchFoldFrac:o&&r>0&&i>0?o.branchFoldCount/(r*i):0,holes:t?t.holes:0,cells:t?t.cells:0,gridN:t?t.gridN:0,step:t?t.step:0,trisPerBlade:2*n-1,vertsPerBlade:2*n+1,meshVerts:f,meshTris:u,totalTris:e*u,instanceFloats:e*De,instanceBytes:e*De*4,segments:n}}_destroyCommands(){this._va&&!this._va.isDestroyed()&&this._va.destroy(),this._va=null;for(const t of this._buffers)try{t&&!t.isDestroyed()&&t.destroy()}catch{}this._buffers=[],this._draw=null}destroy(){this._isDestroyed||(this._destroyCommands(),this._isDestroyed=!0)}isDestroyed(){return this._isDestroyed}}const Lt=.34,Ne=.05,ke=.032,Oe=6,Ln=3,Pn=3,Dn=[5,3,3],Nn=[1.27,.52,.45],kn=[.62,.58,.55],On=[.5,.5,.42],In=.55,Ie=.4,Bn=.99,Be=8,Ge=.07,Gn=.045,We=.85,Wn=1.55,Gt=.38,zn=.3,ze=.6,Hn=.8,He=0,ee=1,Ue=2,Ve=3,Ke=8,bt=(s,t)=>[s[0]-t[0],s[1]-t[1],s[2]-t[2]],lt=(s,t)=>[s[0]+t[0],s[1]+t[1],s[2]+t[2]],$=(s,t)=>[s[0]*t,s[1]*t,s[2]*t],fs=(s,t)=>s[0]*t[0]+s[1]*t[1]+s[2]*t[2],re=s=>Math.hypot(s[0],s[1],s[2]),Pt=(s,t)=>[s[1]*t[2]-s[2]*t[1],s[2]*t[0]-s[0]*t[2],s[0]*t[1]-s[1]*t[0]],Dt=s=>{const t=re(s);return t>1e-12?[s[0]/t,s[1]/t,s[2]/t]:[0,1,0]};function oe(s){const t=Dt(s),e=[0,1,0];let n=bt(e,$(t,fs(e,t)));return re(n)<1e-4&&(n=Math.abs(t[0])<.9?Pt([1,0,0],t):Pt([0,0,1],t)),n=Dt(n),{d:t,e1:n,e2:Dt(Pt(t,n))}}function je(s,t,e){const{d:n,e1:i,e2:o}=oe(s),r=lt($(i,Math.cos(t)),$(o,Math.sin(t)));return Dt(lt($(n,Math.cos(e)),$(r,Math.sin(e))))}function Un(s,t=0){const e=C(s,511+t*13);return e<Gt?ze+e/Gt*(1-ze):(e-Gt)/(1-Gt)*zn}function Vn(s=0){const t=[];let e=0,n=0;const i=(m,p,F)=>$(lt(lt(m,p),F),1/3),o=(m,p,F,x,E,k,G,Y=!1)=>{let q=Pt(bt(p,m),bt(F,m));const st=re(q);if(st<1e-12)return;q=$(q,1/st);let et=p,X=F;fs(q,G)<0&&(q=$(q,-1),et=F,X=p),t.push({p:[m,et,X],s:x,n:q,part:E,tint:k}),Y&&t.push({p:[m,X,et],s:[x[0],x[2],x[1]],n:$(q,-1),part:E,tint:k})},r=(m,p,F,x,E,k,G,Y)=>{const{e1:q,e2:st}=oe(bt(p,m)),et=(K,J)=>{const ct=[];for(let At=0;At<E;At++){const St=2*Math.PI*At/E;ct.push(lt(K,lt($(q,Math.cos(St)*J),$(st,Math.sin(St)*J))))}return ct},X=et(m,F),at=et(p,x),ot=$(lt(m,p),.5);for(let K=0;K<E;K++){const J=(K+1)%E;o(X[K],X[J],at[J],[G,G,Y],k,0,bt(i(X[K],X[J],at[J]),ot)),o(X[K],at[J],at[K],[G,Y,Y],k,0,bt(i(X[K],at[J],at[K]),ot))}};r([0,0,0],[0,Lt,0],Ne,ke,Oe,He,0,Lt);const f=Oe*2,u=(m,p)=>m.r0+(m.r1-m.r0)*p,g=(m,p)=>lt(m.p0,$(bt(m.p1,m.p0),p));let b=[{p0:[0,0,0],p1:[0,Lt,0],dir:[0,1,0],r0:Ne,r1:ke,s0:0,s1:Lt,level:0,id:0}],y=1;for(let m=0;m<Ln;m++){const p=[],F=Math.max(1,Math.round(Dn[m]));for(const x of b){const E=x.s1-x.s0;for(let k=0;k<F;k++){const G=y++,Y=C(G,311+s*7),q=Ie+(Bn-Ie)*((k+.15+.7*Y)/F),st=k*ae+.9*Tt(G,312),et=On[m]*(.78+.44*C(G,313)),X=je(x.dir,st,et),at=E*Nn[m],ot=g(x,q),K=u(x,q)*kn[m],J=x.s0+q*E,ct={p0:ot,p1:lt(ot,$(X,at)),dir:X,r0:K,r1:K*In,s0:J,s1:J+at,level:m+1,id:G};r(ot,ct.p1,K,ct.r1,Pn,ee,ct.s0,ct.s1),e++,p.push(ct)}}b=p}for(const m of b){const p=m.s1-m.s0,F=2*Math.PI*C(m.id,411);for(let x=0;x<Be;x++){const E=y++,k=.28+.76*((x+.25+.5*C(E,412))/Be),G=g(m,k),Y=F+x*ae+.7*Tt(E,413),q=We+(Wn-We)*C(E,414),st=je(m.dir,Y,q),{e1:et}=oe(st),X=$(et,Gn*(.7+.6*C(E,415))),at=lt(G,$(st,Ge*(.75+.5*C(E,416)))),ot=Dt(Pt(et,st)),K=m.s0+k*p+Ge*.5;o(bt(G,X),lt(G,X),at,[K,K,K],Ue,Un(E,s),ot,!0),n++}}let _=0;for(const m of t)for(const p of m.p)p[1]>_&&(_=p[1]);const w=_>1e-9?1/_:1,l=Lt*w;let M=0;for(const m of t)for(const p of m.s)p>M&&(M=p);const S=M>1e-9?1/M:1,L=(m,p,F)=>m===He?.3+.64*Math.min(1,Math.max(0,p/Math.max(1e-6,l))):m===ee?.24+.56*F:(.16+.84*Math.min(1,Math.max(0,(p-l)/Math.max(1e-6,1-l))))*(.84+.16*F),N=t.length,U=N*3,D=new Float32Array(U*3),Z=new Float32Array(U*4),V=new Float32Array(U*Ve),H=new Uint16Array(U);let W=0,Q=0;for(let m=0;m<N;m++){const p=t[m];p.part===ee?W++:p.part===Ue&&Q++;for(let F=0;F<3;F++){const x=m*3+F,E=p.p[F],k=E[1]*w;D[x*3]=E[0]*w,D[x*3+1]=k,D[x*3+2]=E[2]*w,Z[x*4]=p.n[0],Z[x*4+1]=p.n[1],Z[x*4+2]=p.n[2],Z[x*4+3]=L(p.part,k,p.s[F]*S);const G=x*Ve;V[G]=Math.pow(Math.min(1,Math.max(0,p.s[F]*S)),Hn),V[G+1]=p.part,V[G+2]=p.tint,H[x]=x}}return{position:D,geo:Z,sway:V,index:H,vertCount:U,tris:N,trunkTris:f,branchTris:W,leafTris:Q,branchCount:e,leafCount:n}}const Kn=7,qe=.14;function jn(){return{count:170,area:55,seed:20260917,height:6.2,heightVar:.42,widthK:1,region:null}}function qn(s){const t=s.area/2,e=Math.max(0,Math.floor(s.count)),n=s.clearing??Kn,i=Math.min(.95,Math.PI*n*n/(4*t*t)),o=1-Math.pow(1-qe/2,2),r=Math.max(.05,1-i-o),f=Math.max(1,Math.ceil(Math.sqrt(Math.max(e,1)/r))),u=2*t/f,g=w=>w+(s.seed|0)|0,b=[];let y=0;if(e===0)return{trees:b,cells:y,kept:0,step:u,area:s.area,half:t,clearing:n};const _=(w,l,M)=>{const S=Math.max(1,s.height*(1+s.heightVar*Tt(w,41)));return{x:l,z:M,yaw:2*Math.PI*C(w,42),scale:S,xzK:s.widthK*(.86+.28*C(w,43)),trunkK:.85+.35*C(w,44),hue:Tt(w,45),phase:2*Math.PI*C(w,46)}};for(let w=0;w<f;w++)for(let l=0;l<f;l++){const M=w*f+l,S=(l+.06+.88*C(g(M),11))/f*2*t-t,L=(w+.06+.88*C(g(M),12))/f*2*t-t;y++;const N=t*(1-qe*cs(S/22+3.7,L/22+9.1,s.seed));Math.max(Math.abs(S),Math.abs(L))>N||Math.hypot(S,L)<n||ls(S,L,s.region)&&b.push(_(b.length,S,L))}return{trees:b,cells:y,kept:b.length,step:u,area:s.area,half:t,clearing:n}}function Jn(s){const t=s.length,e=new Float32Array(t*4),n=new Float32Array(t*4);for(let i=0;i<t;i++){const o=s[i];e[i*4]=o.x,e[i*4+1]=o.z,e[i*4+2]=o.yaw,e[i*4+3]=o.scale,n[i*4]=o.xzK,n[i*4+1]=o.phase,n[i*4+2]=o.hue,n[i*4+3]=o.trunkK}return{site:e,shape:n}}const Qn=[.12,.088,.055],Xn=[.32,.24,.15],Yn=[.055,.115,.04],Zn=[.26,.46,.125],$n=[.3,.235,.045],ta=[.62,.53,.115],ea=1.22,Mt=s=>`vec3(${s.map(t=>t.toFixed(4)).join(", ")})`,sa=`
const vec3 TF_TRUNK_LO = ${Mt(Qn)};
const vec3 TF_TRUNK_HI = ${Mt(Xn)};
const vec3 TF_LEAF_LO  = ${Mt(Yn)};
const vec3 TF_LEAF_HI  = ${Mt(Zn)};
const vec3 TF_YEL_LO   = ${Mt($n)};
const vec3 TF_YEL_HI   = ${Mt(ta)};

float tfJsSmoothstep(float e0, float e1, float x) {
  float t = clamp((x - e0) / (e1 - e0), 0.0, 1.0);
  return t * t * (3.0 - 2.0 * t);
}

vec3 tfTreeColor(float shade, float part, float hue, float tint) {
  float s = clamp(shade, 0.0, 1.0);
  vec3 trunk = mix(TF_TRUNK_LO, TF_TRUNK_HI, s);
  vec3 wood  = trunk * ${ea.toFixed(4)};
  vec3 green = mix(TF_LEAF_LO, TF_LEAF_HI, s);
  vec3 yel   = mix(TF_YEL_LO, TF_YEL_HI, s);
  vec3 leaf  = mix(green, yel, clamp(tint, 0.0, 1.0));
  // 离散分档：part < 0.5 干 / < 1.5 枝 / 否则叶
  vec3 c = part < 0.5 ? trunk : (part < 1.5 ? wood : leaf);
  c.r *= 1.0 + 0.30 * hue;
  c.b *= 1.0 - 0.25 * hue;
  return clamp(c, 0.0, 1.0);
}
`,na=`
in vec3 a_pos;
in vec4 a_nrm;
in vec3 a_sway;
in vec4 a_site;
in vec4 a_shape;

uniform float u_time;
uniform vec2  u_windDir;
uniform float u_windK;
uniform float u_windOmega;
uniform float u_gustScale;
uniform float u_gustSpeed;
uniform float u_swayAmp;
uniform vec3  u_cameraPosModel;

out vec3  v_normalModel;
out vec3  v_posModel;
out float v_dist;
out float v_shade;
out float v_part;
out float v_hue;
out float v_tint;

// 叶片扑动：频率比整树摆动高一个量级、振幅小；相位取自叶片自己的位置。
const float TF_LEAF_FREQ    = 5.7000;
const float TF_LEAF_OMEGA   = 2.3000;
const float TF_LEAF_FLUTTER = 0.2200;

void main() {
  float x0 = a_site.x;
  float z0 = a_site.y;
  float yaw = a_site.z;
  float h = a_site.w;
  float part = a_sway.y;
  // Only the trunk eats trunkK; branches and leaves eat the canopy width xzK.
  // (See the JS doc block above -- no backticks in here on purpose.)
  float isTrunk = 1.0 - step(0.5, part);
  float xzK = mix(a_shape.x, a_shape.w, isTrunk);
  float phase = a_shape.y;
  float hue = a_shape.z;

  vec3 p = a_pos;
  // 冠幅只作用在**地面的两个轴**上（模型空间里是 xz；竖直 y 绝不参与，
  // 否则"树干粗细/冠幅"会顺手改掉树高，而 HUD 与判据都只认 y）。
  p.xz *= xzK;
  p *= h;

  float cy = cos(yaw);
  float sy = sin(yaw);
  // Ground axes rotate by yaw; the vertical stays vertical.
  // Model space: (x, z) = ground, y = UP.  ENU output: (east, north, UP).
  vec2 g = vec2(p.x * cy - p.z * sy, p.x * sy + p.z * cy);
  vec3 q = vec3(g.x + x0, g.y + z0, p.y);
  vec3 n = vec3(a_nrm.x * cy - a_nrm.z * sy, a_nrm.x * sy + a_nrm.z * cy, a_nrm.y);

  // Whole-tree sway: shear in the MODEL wind direction, weighted by flex squared.
  // flex = 0 at the trunk base (rigid) and 1 at the crown top (moves the most), so
  // squaring it keeps the trunk planted instead of leaning the tree like a rigid pole.
  // NOTE: the shear lives on the GROUND plane -- (x, y) of the ENU vector.
  float along = q.x * u_windDir.x + q.y * u_windDir.y;
  float phi = u_windK * along - u_windOmega * u_time + phase;
  float gst = gfGust(along / u_gustScale - (u_gustSpeed * u_time) / u_gustScale);
  float env = GF_GUST_MIN + (1.0 - GF_GUST_MIN) * gst;
  float f = a_sway.x;
  float s = u_swayAmp * h * f * f * env * gfWave(phi);
  q.x += u_windDir.x * s;
  q.y += u_windDir.y * s;

  // ---- Leaves flutter: small, high frequency, and PERPENDICULAR to the wind ----
  // The phase comes from the leaf's own position, so neighbouring leaves are out of step.
  // perp(w) = (-w.y, w.x) keeps the flutter a pure rustle instead of extra lean.
  float isLeaf = step(1.5, part);
  float fl = isLeaf * u_swayAmp * h * TF_LEAF_FLUTTER * env
           * gfWave(TF_LEAF_FREQ * (a_pos.x + 1.3 * a_pos.z) - TF_LEAF_OMEGA * u_time + phase);
  q.x += -u_windDir.y * fl;
  q.y +=  u_windDir.x * fl;

  v_normalModel = normalize(n);
  v_posModel = q;
  v_dist = length(q - u_cameraPosModel);
  v_shade = a_nrm.w;
  v_part = part;
  v_hue = hue;
  v_tint = a_sway.z;
  gl_Position = czm_modelViewProjection * vec4(q, 1.0);
  czm_vertexLogDepth();
}
`,aa=`
in vec3  v_normalModel;
in vec3  v_posModel;
in float v_dist;
in float v_shade;
in float v_part;
in float v_hue;
in float v_tint;

uniform vec3  u_sunDirModel;
uniform vec3  u_cameraPosModel;
uniform vec3  u_groundColor;
uniform float u_fadeNear;
uniform float u_fadeFar;
uniform float u_ambient;

void main() {
  vec3 N = normalize(v_normalModel);
  vec3 base = tfTreeColor(v_shade, v_part, v_hue, v_tint);
  float ndl = max(dot(N, u_sunDirModel), 0.0);
  vec3 lit = base * (u_ambient + (1.0 - u_ambient) * ndl);
  float fog = tfJsSmoothstep(u_fadeNear, u_fadeFar, v_dist);
  out_FragColor = vec4(mix(lit, u_groundColor, fog), 1.0);
  czm_writeLogDepth();
}
`;function oa(){return ds+na}function ia(){return sa+aa}const ra=["u_time","u_windDir","u_windK","u_windOmega","u_gustScale","u_gustSpeed","u_swayAmp","u_cameraPosModel","u_gustPhase"],la=["u_sunDirModel","u_cameraPosModel","u_groundColor","u_fadeNear","u_fadeFar","u_ambient"];function ca(){return{dirDeg:35,speed:5.5,wavelength:70,ampRel:.05,gustScale:46,gustSpeed:3.2}}const Ct={a_pos:0,a_nrm:1,a_sway:2,a_site:3,a_shape:4};class ua{constructor(t,e){this._isDestroyed=!1,this.result=null,this._va=null,this._draw=null,this._buffers=[],this._needsRebuild=!0,this._k=0,this._omega=0,this._meshVerts=0,this._meshTris=0,this._meshInfo=null,this._t=0,this._lastWall=null,this._tPinned=null,this.visible=!0,this.viewer=t,this.scene=t.scene,this.layout={...jn(),...e.layout??{}},this.wind={...ca(),...e.wind??{}},this.timeScale=e.timeScale??1,this.groundColor=e.groundColor??[.18,.26,.13];const n=this.layout.area/2;this.fadeNear=e.fadeNear??n*.9,this.fadeFar=e.fadeFar??n*2.6,this.ambient=e.ambient??.42,this._modelMatrix=xt.eastNorthUpToFixedFrame(B.fromDegrees(e.lon,e.lat,e.height??0)),this._invModel=j.inverseTransformation(this._modelMatrix,new j),this._camModel=new B,this._sunModel=B.normalize(new B(.55,.4,.73),new B),this._ground=new B(...this.groundColor),this._gustPhase=new Wt(...Nt(this.layout.seed)),this._windDir=new Je(1,0),this._syncWindScalars()}_syncWindScalars(){const[t,e]=rs(this.wind);this._windDir.x=t,this._windDir.y=e;const{k:n,omega:i}=hs(this.wind);this._k=n,this._omega=i}update(t){this._isDestroyed||((!this._draw||this._needsRebuild)&&(this._needsRebuild=!1,this._createCommands(t.context)),this._draw&&this.visible&&(this._advanceTime(),j.multiplyByPoint(this._invModel,t.camera.positionWC,this._camModel),t.commandList.push(this._draw)))}_advanceTime(){if(this._tPinned!==null){this._t=this._tPinned;return}const t=(typeof performance<"u"?performance.now():Date.now())*.001;if(this._lastWall===null){this._lastWall=t;return}let e=t-this._lastWall;this._lastWall=t,(!(e>0)||e>.5)&&(e=0),this._t+=e*this.timeScale}_createCommands(t){var D,Z,V;this._destroyCommands();const e=Vn(this.layout.seed),n=qn(this.layout);this.result=n;const i=n.trees.length;if(this._meshVerts=e.vertCount,this._meshTris=e.tris,this._meshInfo={verts:e.vertCount,tris:e.tris,branchTris:e.branchTris,leafTris:e.leafTris,branchCount:e.branchCount,leafCount:e.leafCount},i===0)return;const o=Jn(n.trees),r=Qe.STATIC_DRAW,f=tt.createVertexBuffer({context:t,typedArray:e.position,usage:r}),u=tt.createVertexBuffer({context:t,typedArray:e.geo,usage:r}),g=tt.createVertexBuffer({context:t,typedArray:e.sway,usage:r}),b=tt.createVertexBuffer({context:t,typedArray:o.site,usage:r}),y=tt.createVertexBuffer({context:t,typedArray:o.shape,usage:r});this._buffers.push(f,u,g,b,y);const _=Xe.fromTypedArray(e.index);_||console.error("[TreeField] 无法从索引数组推断 IndexDatatype（应为 Uint8/16/32Array），绘制会静默失效：",(Z=(D=e.index)==null?void 0:D.constructor)==null?void 0:Z.name);const w=tt.createIndexBuffer({context:t,typedArray:e.index,indexDatatype:_,usage:r});this._buffers.push(w);const l=Ye.FLOAT,M=(H,W,Q,m)=>({index:H,vertexBuffer:W,componentsPerAttribute:Q,componentDatatype:l,normalize:!1,offsetInBytes:0,strideInBytes:0,instanceDivisor:m});this._va=new Ze({context:t,attributes:[M(Ct.a_pos,f,3,0),M(Ct.a_nrm,u,4,0),M(Ct.a_sway,g,3,0),M(Ct.a_site,b,4,1),M(Ct.a_shape,y,4,1)],indexBuffer:w});const S=new zt({context:t,sources:[oa()]}),L=new zt({context:t,sources:[ia()]});!!((V=this.scene)!=null&&V.logarithmicDepthBuffer)&&(S.defines.push("LOG_DEPTH"),L.defines.push("LOG_DEPTH"));const U=$e.fromCache({context:t,vertexShaderSource:S,fragmentShaderSource:L,attributeLocations:Ct});this._draw=new ts({vertexArray:this._va,primitiveType:es.TRIANGLES,shaderProgram:U,renderState:ns.fromCache({depthTest:{enabled:!0},depthMask:!0,cull:{enabled:!0,face:Ds.BACK}}),uniformMap:this._buildUniformMap(),modelMatrix:this._modelMatrix,pass:ss.OPAQUE,count:e.index.length,instanceCount:i,cull:!1,owner:this})}_buildUniformMap(){const t={u_time:()=>this._t,u_windDir:()=>this._windDir,u_windK:()=>this._k,u_windOmega:()=>this._omega,u_gustScale:()=>this.wind.gustScale,u_gustSpeed:()=>this.wind.gustSpeed,u_swayAmp:()=>this.wind.ampRel,u_cameraPosModel:()=>this._camModel,u_gustPhase:()=>this._gustPhase,u_sunDirModel:()=>this._sunModel,u_groundColor:()=>this._ground,u_fadeNear:()=>this.fadeNear,u_fadeFar:()=>this.fadeFar,u_ambient:()=>this.ambient},e=Array.from(new Set([...ra,...la])),n=e.filter(o=>!(o in t));n.length>0&&console.error(`[TreeField] uniformMap 缺项：${n.join(", ")} —— 这些 uniform 会静默变成 0（Cesium 不报错）。清单来自 shared/treeField.ts 的 TREE_VERTEX_UNIFORMS / TREE_FRAGMENT_UNIFORMS。`);const i=Object.keys(t).filter(o=>!e.includes(o));return i.length>0&&console.warn(`[TreeField] uniformMap 多余项（着色器已不声明）：${i.join(", ")}`),t}setLayout(t){const e=this.layout.seed;this.layout={...this.layout,...t},this.layout.seed!==e&&(this._gustPhase=new Wt(...Nt(this.layout.seed))),this._needsRebuild=!0}setOrigin(t,e,n=0){this._modelMatrix=xt.eastNorthUpToFixedFrame(B.fromDegrees(t,e,n)),this._invModel=j.inverseTransformation(this._modelMatrix,new j),this._needsRebuild=!0}setWind(t){this.wind={...this.wind,...t},this._syncWindScalars()}setAppearance(t){t.groundColor&&(this.groundColor=t.groundColor,this._ground=new B(...this.groundColor)),t.fadeNear!==void 0&&(this.fadeNear=t.fadeNear),t.fadeFar!==void 0&&(this.fadeFar=t.fadeFar),t.ambient!==void 0&&(this.ambient=t.ambient)}setTime(t){this._tPinned=t,t!==null&&(this._t=t),this._lastWall=null}get time(){return this._t}treesScreenRect(){if(!this.scene||!this.result)return null;let t=1/0,e=1/0,n=-1/0,i=-1/0;const o=new B;for(const r of this.result.trees)for(const f of[0,r.scale]){j.multiplyByPoint(this._modelMatrix,new B(r.x,r.z,f),o);const u=as.worldToWindowCoordinates(this.scene,o);u&&(u.x<t&&(t=u.x),u.x>n&&(n=u.x),u.y<e&&(e=u.y),u.y>i&&(i=u.y))}return n>t?{x0:t,y0:e,x1:n,y1:i}:null}get stats(){const t=this.result,e=t?t.trees.length:0;return{trees:e,cells:t?t.cells:0,kept:t?t.kept:0,step:t?t.step:0,area:t?t.area:0,half:t?t.half:0,clearing:t?t.clearing:0,meshVerts:this._meshVerts,meshTris:this._meshTris,branchCount:this._meshInfo?this._meshInfo.branchCount:0,leafCount:this._meshInfo?this._meshInfo.leafCount:0,branchTris:this._meshInfo?this._meshInfo.branchTris:0,leafTris:this._meshInfo?this._meshInfo.leafTris:0,totalTris:e*this._meshTris,instanceFloats:e*Ke,instanceBytes:e*Ke*4}}_destroyCommands(){this._va&&!this._va.isDestroyed()&&this._va.destroy(),this._va=null;for(const t of this._buffers)try{t&&!t.isDestroyed()&&t.destroy()}catch{}this._buffers=[],this._draw=null}destroy(){this._isDestroyed||(this._destroyCommands(),this._isDestroyed=!0)}isDestroyed(){return this._isDestroyed}}const se={zenith:"#2f6fc4",haze:"#bcd8ee",horizon:"#dceaf5"};function da(s,t={}){const e=t.zenith??se.zenith,n=t.haze??se.haze,i=t.horizon??se.horizon,o=g=>{const b=document.createElement("canvas");b.width=256,b.height=256;const y=b.getContext("2d"),_=y.createLinearGradient(0,0,0,b.height);for(const[w,l]of g)_.addColorStop(w,l);return y.fillStyle=_,y.fillRect(0,0,b.width,b.height),b.toDataURL("image/png")},r=o([[0,e],[.44,n],[.52,i],[1,i]]),f=o([[0,e],[1,e]]),u=o([[0,i],[1,i]]);return s.skyBox=new Ns({sources:{positiveX:r,negativeX:r,positiveY:f,negativeY:u,positiveZ:r,negativeZ:r}}),s.backgroundColor=ie.fromCssColorString(i),s.skyAtmosphere&&(s.skyAtmosphere.show=!0,s.skyAtmosphere.showGroundAtmosphere=!0),s.skyBox}function ha(s,t="#3f6b26"){const e=s.globe;return e.baseColor=ie.fromCssColorString(t),e.enableLighting=!1,e.showGroundAtmosphere=!0,s.imageryLayers.removeAll(!1),e}const fa=8e4,_a=3e3,wt={perf:{label:"性能",hint:"~18 万三角形",count:1e4,segments:3,branchCount:1,regionMaxTufts:12e3},balanced:{label:"均衡",hint:"~74 万三角形",count:2e4,segments:4,branchCount:2,regionMaxTufts:24e3},quality:{label:"画质",hint:"~180 万三角形",count:32e3,segments:5,branchCount:3,regionMaxTufts:8e4}},mt=121.4737,gt=31.2304,_s={lon:121.473524,lat:31.230202,height:4.98,heading:24.9998,pitch:-28.0009,roll:0},ma={lon:121.473501,lat:31.230195,height:13.64,heading:0,pitch:-78.0004,roll:0},ga={..._s,pitch:-14},pa={lon:mt,lat:gt,height:460,heading:0,pitch:-45,roll:0},ba={meta:{path:"/cesium/grass",title:"动态草坪"},components:{Globe:Bs,ConfigPanel:Gs},setup(){let s,t,e;const n=ft(null),i=ve({lon:mt,lat:gt}),o=ft(null),r=ft(!1),f=ft(!1);let u;const g=Ft(()=>{const a=o.value;if(!a||a.length<6)return null;let v=1/0,c=1/0,d=-1/0,T=-1/0,R=0;const P=a.length/2;for(let I=0;I<P;I++){const z=a[I*2],O=a[I*2+1];z<v&&(v=z),z>d&&(d=z),O<c&&(c=O),O>T&&(T=O);const ut=(I+1)%P;R+=z*a[ut*2+1]-a[ut*2]*O}return{x0:v,z0:c,x1:d,z1:T,w:d-v,h:T-c,area:Math.abs(R)/2}}),b=1.06;function y(){const a=g.value;if(!a)return null;const v=Math.max(1,Math.max(a.w,a.h)*b),c=(v/Math.max(1,l.area))**2,d=Math.max(1e3,Math.min(fa,l.regionMaxTufts)),T=Math.max(0,Math.min(_a,l.regionMaxTrees));return{area:v,side:v,count:Math.max(1,Math.min(d,Math.round(l.count*c))),treeCount:Math.max(0,Math.min(T,Math.round(l.treeCount*c)))}}const _=Ft(()=>{const a=g.value,v=y();return{active:r.value,verts:o.value?Math.floor(o.value.length/2):0,area:a?a.area:0,side:v?v.side:0}}),w=Ft(()=>{var a;return((a=y())==null?void 0:a.treeCount)??l.treeCount}),l=ve({quality:"balanced",segments:4,regionMaxTufts:24e3,regionMaxTrees:3e3,count:2e4,area:55,bladeHeight:.62,heightVar:.5,bladeWidth:.019,bladesPerTuft:3,tuftRadius:.075,holeFrac:.07,seed:20260917,breakPct:.55,breakLo:.42,breakHi:.92,branchCount:2,branchLen:.62,branchTilt:.8,branchFoldPct:1/3,dirDeg:35,speed:6.5,wavelength:34,ampRad:.62,gustScale:21,timeScale:1,groundColor:"rgb(58, 95, 34)",fadeNear:30,fadeFar:70,ambient:.5,translucency:.45,treeCount:170,treeHeight:6.2,treeHeightVar:.42,treeWidth:1,treeSway:.05}),M={...l},S=Ms([{key:"quality",label:"画质档",type:"select",options:Object.keys(wt).map(a=>({value:a,label:`${wt[a].label}（${wt[a].hint}）`}))},{key:"segments",label:"叶片段数",min:2,max:8,step:1,digits:0},{key:"regionMaxTufts",label:"区域草丛上限",min:2e3,max:8e4,step:1e3,digits:0},{key:"regionMaxTrees",label:"区域树上限",min:0,max:3e3,step:100,digits:0},{key:"count",label:"草丛数",min:1e3,max:8e4,step:1e3,digits:0},{key:"bladesPerTuft",label:"每丛叶数",min:1,max:8,step:1,digits:0},{key:"tuftRadius",label:"丛半径",min:.02,max:.25,step:.005,unit:" m",digits:3},{key:"area",label:"草坪边长",min:20,max:300,step:5,unit:" m",digits:0},{key:"bladeHeight",label:"草高",min:.1,max:1.5,step:.01,unit:" m",digits:2},{key:"heightVar",label:"高矮差",min:0,max:.8,step:.05,digits:2},{key:"bladeWidth",label:"叶半宽",min:.003,max:.03,step:.001,unit:" m",digits:3},{key:"holeFrac",label:"空地比例",min:0,max:.5,step:.01,digits:2},{key:"seed",label:"随机种子",min:1,max:99999999,step:1,digits:0},{key:"breakPct",label:"折断比例",min:0,max:1,step:.05,digits:2},{key:"breakLo",label:"折断下界",min:.2,max:1,step:.02,digits:2},{key:"breakHi",label:"折断上界",min:.2,max:1,step:.02,digits:2},{key:"branchCount",label:"每叶侧枝",min:0,max:4,step:1,digits:0},{key:"branchLen",label:"侧枝长度",min:.1,max:1.2,step:.02,digits:2},{key:"branchTilt",label:"侧枝张角",min:.1,max:1.4,step:.05,unit:" rad",digits:2},{key:"branchFoldPct",label:"枝杈折断",min:0,max:1,step:.05,digits:2},{key:"dirDeg",label:"风向（自东逆时针）",min:0,max:359,step:1,unit:"°",digits:0},{key:"speed",label:"风速",min:0,max:20,step:.5,unit:" m/s",digits:1},{key:"wavelength",label:"波长",min:4,max:120,step:1,unit:" m",digits:0},{key:"ampRad",label:"摆幅",min:0,max:1.2,step:.01,unit:" rad",digits:2},{key:"gustScale",label:"阵风尺度",min:6,max:60,step:1,unit:" m",digits:0},{key:"timeScale",label:"时间倍率",min:.1,max:3,step:.1,digits:1},{key:"groundColor",label:"地表色",type:"color"},{key:"fadeNear",label:"淡出起点",min:10,max:300,step:5,unit:" m",digits:0},{key:"fadeFar",label:"淡出终点",min:20,max:600,step:5,unit:" m",digits:0},{key:"ambient",label:"环境光",min:.05,max:1,step:.01,digits:2},{key:"translucency",label:"背光透射",min:0,max:1,step:.01,digits:2},{key:"treeCount",label:"树林数量",min:0,max:1200,step:10,digits:0},{key:"treeHeight",label:"树高",min:2,max:14,step:.2,unit:" m",digits:1},{key:"treeHeightVar",label:"高矮差",min:0,max:.8,step:.02,digits:2},{key:"treeWidth",label:"冠幅系数",min:.6,max:1.6,step:.05,digits:2},{key:"treeSway",label:"树摆幅",min:0,max:.2,step:.005,digits:3}]),L=ft({blades:0,totalBlades:0,bladesPerTuft:3,branchPerBlade:0,totalBranches:0,branchFoldCount:0,branchFoldFrac:0,meshTris:0,holes:0,cells:0,gridN:0,step:0,trisPerBlade:0,vertsPerBlade:0,meshVerts:0,totalTris:0,instanceFloats:0,instanceBytes:0,segments:5}),N=ft(0),U=a=>`${a.blades}|${a.cells}|${a.gridN}|${a.meshTris}|${a.meshVerts}|${a.branchPerBlade}|${a.branchFoldCount}|${a.bladesPerTuft}|${a.segments}`,D=ft(0),Z=ft(0);let V=0,H=0,W=null;const Q=ft({trees:0,cells:0,kept:0,meshTris:0,totalTris:0,instanceBytes:0,half:0,clearing:0,step:0,branchCount:0,leafCount:0,branchTris:0,leafTris:0}),m=Ft(()=>{const a=l.treeHeight,v=l.treeHeightVar;return`${(a*(1-v)).toFixed(1)}~${(a*(1+v)).toFixed(1)}`}),p=Ft(()=>{const a=L.value.step,v=L.value.bladesPerTuft||0;return!(a>0)||!v?0:Math.min(1,2*l.bladeWidth*v/a)}),F=window.setInterval(()=>{t&&!t.isDestroyed()&&(N.value=t.time);const a=performance.now();if(H===0)H=a;else{const v=a-H;v>=400&&V>0&&(D.value=V*1e3/v,Z.value=v/V,V=0,H=a)}if(t&&!t.isDestroyed()){const v=t.stats;U(v)!==U(L.value)&&(L.value=v)}},250);let x="",E=l.quality;const k=Ft(()=>{const a=Object.keys(wt).find(v=>{const c=wt[v];return c.count===l.count&&c.segments===l.segments&&c.branchCount===l.branchCount&&c.regionMaxTufts===l.regionMaxTufts});return a?wt[a].label:"自定义"}),G=()=>{const a=y();return{count:a?a.count:l.count,area:a?a.area:l.area,region:o.value,bladeHeight:l.bladeHeight,heightVar:l.heightVar,bladeWidth:l.bladeWidth,bladesPerTuft:l.bladesPerTuft,tuftRadius:l.tuftRadius,holeFrac:l.holeFrac,seed:l.seed,breakPct:l.breakPct,breakLo:l.breakLo,breakHi:l.breakHi,branchCount:l.branchCount,branchLen:l.branchLen,branchTilt:l.branchTilt,branchFoldPct:l.branchFoldPct}},Y=()=>Object.values(G()).map(a=>Array.isArray(a)?JSON.stringify(a):a).join("|"),q=()=>{const a=y();return{count:a?a.treeCount:l.treeCount,area:a?a.area:l.area,region:o.value,seed:l.seed,height:l.treeHeight,heightVar:l.treeHeightVar,widthK:l.treeWidth}},st=()=>Object.values(q()).map(a=>Array.isArray(a)?JSON.stringify(a):a).join("|");let et="";const X=()=>({dirDeg:l.dirDeg,speed:l.speed*.85,wavelength:l.wavelength*2,ampRel:l.treeSway,gustScale:l.gustScale*2.2}),at=()=>{var v;const a=(((v=y())==null?void 0:v.area)??l.area)/2;return{fadeNear:a*.9,fadeFar:a*2.6}};function ot(){const a=ie.fromCssColorString(l.groundColor);return[(a==null?void 0:a.red)??.18,(a==null?void 0:a.green)??.26,(a==null?void 0:a.blue)??.13]}async function K(a){s=a,s.clock.shouldAnimate=!1,W=s.scene.postRender.addEventListener(()=>{V++}),H=performance.now(),Ws(s),da(s.scene),ha(s.scene,"#3a5f22"),t=new Rn(s,{lon:mt,lat:gt,segments:5,layout:G(),wind:{dirDeg:l.dirDeg,speed:l.speed,wavelength:l.wavelength,ampRad:l.ampRad,gustScale:l.gustScale},groundColor:ot()}),s.scene.primitives.add(t),e=new ua(s,{lon:mt,lat:gt,layout:q(),wind:X(),groundColor:ot(),ambient:l.ambient}),s.scene.primitives.add(e),t.visible=!1,e.visible=!1,x=Y(),et=st(),J(),Et(),ct(s),vs(),console.log(`✅ 草树已就绪（默认隐藏，等待绘制区域）：${t.stats.blades} 草丛 / ${t.stats.totalBlades} 叶，${e.stats.trees} 棵树 / 共 ${(t.stats.totalTris+e.stats.totalTris).toLocaleString()} 三角形`)}function J(){if(t){if(l.quality!==E){const a=wt[l.quality];a&&(l.count=a.count,l.segments=a.segments,l.branchCount=a.branchCount,l.regionMaxTufts=a.regionMaxTufts),E=l.quality}Y()!==x&&(t.setLayout(G()),x=Y()),t.setSegments(l.segments),t.setWind({dirDeg:l.dirDeg,speed:l.speed,wavelength:l.wavelength,ampRad:l.ampRad,gustScale:l.gustScale}),t.timeScale=l.timeScale,t.setAppearance({groundColor:ot(),fadeNear:l.fadeNear,fadeFar:l.fadeFar,ambient:l.ambient,translucency:l.translucency}),L.value=t.stats,e&&(st()!==et&&(e.setLayout(q()),et=st()),e.setWind(X()),e.timeScale=l.timeScale,e.setAppearance({groundColor:ot(),ambient:l.ambient,...at()}),Q.value=e.stats),N.value=t.time}}function ct(a){u=new Is(a),u.onClose=v=>{var T,R;u==null||u.end();const c=(T=v.polygon)==null?void 0:T.hierarchy,d=((R=c!=null&&c.getValue?c.getValue(Os.now()):c)==null?void 0:R.positions)??[];if(d.length<3){Te({message:"多边形至少需要 3 个顶点，请重新绘制",type:"warning"});return}ms(d)}}function At(a){let v=0,c=0;const d=a.map(O=>xe.fromCartesian(O));for(const O of d)v+=O.longitude,c+=O.latitude;const T=rt.toDegrees(v/d.length),R=rt.toDegrees(c/d.length),P=j.inverseTransformation(xt.eastNorthUpToFixedFrame(B.fromDegrees(T,R,0)),new j),I=[],z=new B;for(const O of a)j.multiplyByPoint(P,O,z),I.push(z.x,z.y);return{lon:T,lat:R,local:I}}function St(a,v=i.lon,c=i.lat){return i.lon=v,i.lat=c,o.value=a.slice(),t==null||t.setOrigin(v,c),e==null||e.setOrigin(v,c),r.value=!0,t&&(t.visible=!0),e&&(e.visible=!0),J(),_.value}function ms(a){const{lon:v,lat:c,local:d}=At(a),T=St(d,v,c);Et(),console.log(`✅ 已按区域生成：${T.verts} 个顶点 / 包围 ${T.side.toFixed(0)} m 见方，区域外一律不生成（草丛 ${t.stats.blades}，树 ${e.stats.trees}）`)}function gs(){u&&(Ht(!0),Ot(pa),u.type="polygon",u.start(),Te({message:"左键逐点、右键闭合，完成区域绘制",type:"info",duration:4e3}))}function Ht(a=!1){u==null||u.clear(),o.value=null,r.value=!1,i.lon=mt,i.lat=gt,t==null||t.setOrigin(mt,gt),e==null||e.setOrigin(mt,gt),t&&(t.visible=!1),e&&(e.visible=!1),J(),a||console.log("🧹 区域已清空（草树已隐藏）")}const ps=j.inverseTransformation(xt.eastNorthUpToFixedFrame(B.fromDegrees(mt,gt,0)),new j);function kt(){return o.value?B.fromDegrees(i.lon,i.lat,0):null}function Ot(a,v=null){let c=B.fromDegrees(a.lon,a.lat,a.height);if(v){const d=j.multiplyByPoint(ps,c,new B);c=j.multiplyByPoint(xt.eastNorthUpToFixedFrame(v),d,new B)}s.camera.setView({destination:c,orientation:{heading:rt.toRadians(a.heading),pitch:rt.toRadians(a.pitch),roll:rt.toRadians(a.roll)}})}function bs(a,v,c){const d=kt()??B.fromDegrees(mt,gt,0);s.camera.lookAt(d,new ks(rt.toRadians(c),rt.toRadians(v),a)),s.camera.lookAtTransform(j.IDENTITY)}const Et=()=>Ot(ga,kt()),le=()=>Ot(_s,kt()),ce=()=>Ot(ma,kt()),ue=()=>bs(15,-6,25);function de(){const a=s.camera,v=xe.fromCartesian(a.positionWC);return{lon:rt.toDegrees(v.longitude),lat:rt.toDegrees(v.latitude),height:v.height,heading:rt.toDegrees(a.heading),pitch:rt.toDegrees(a.pitch)}}function ys(){Object.assign(l,M),E="",J(),Et(),console.log("✅ 草坪 + 树林参数已重置为默认值")}function vs(){const a=window,v=()=>({...t.stats,t:t.time,visible:t.visible,wind:{...t.wind},layout:{...t.layout},segments:t.segments,fadeNear:t.fadeNear,fadeFar:t.fadeFar,ambient:t.ambient,translucency:t.translucency,camera:de(),tree:{...e.stats,visible:e.visible,t:e.time,layout:{...e.layout},wind:{...e.wind},fadeNear:e.fadeNear,fadeFar:e.fadeFar}});a.__grass=v,a.__treePrimitive=()=>e,a.__treeShow=c=>(e.visible=!!c,{visible:e.visible}),a.__treeDrawInfo=()=>{var T,R,P,I;const c=e==null?void 0:e._draw;if(!c)return{hasDraw:!1};const d=c.vertexArray;return{hasDraw:!0,count:c.count,instanceCount:c.instanceCount,pass:c.pass,cull:c.cull,renderStateCull:(T=c.renderState)==null?void 0:T.cull,programDestroyed:((P=(R=c.shaderProgram)==null?void 0:R.isDestroyed)==null?void 0:P.call(R))??null,vaAttrs:((d==null?void 0:d._attributes)??[]).map(z=>{var O;return{index:z.index,componentsPerAttribute:z.componentsPerAttribute,instanceDivisor:z.instanceDivisor,bufBytes:(O=z.vertexBuffer)==null?void 0:O._sizeInBytes}}),indexCount:(I=d==null?void 0:d._indexBuffer)==null?void 0:I.numberOfIndices}},a.__grassPrimitive=()=>t,a.__grassSet=c=>(Object.assign(l,c),J(),v()),a.__grassQuality=c=>(l.quality=c,J(),{quality:c,applied:k.value,...v()}),a.__grassCam=c=>(c==="top"?ce():c==="ground"?ue():c==="near"?le():Et(),{mode:c,camera:de()}),a.__grassRegion=()=>({..._.value,generated:r.value,origin:{lon:i.lon,lat:i.lat},region:o.value?o.value.slice():null,fit:y(),grassVisible:!!t.visible,treeVisible:!!e.visible,blades:t.stats.blades,cells:t.stats.cells,holes:t.stats.holes,step:t.stats.step,trees:e.stats.trees,treeCells:e.stats.cells}),a.__grassDraw=(c,d,T)=>St(c,d,T),a.__grassClearRegion=()=>(Ht(!0),a.__grassRegion()),a.__grassPoints=()=>{var c;return(((c=t.result)==null?void 0:c.blades)??[]).map(d=>[d.x,d.z])},a.__treePoints=()=>{var c;return(((c=e.result)==null?void 0:c.trees)??[]).map(d=>[d.x,d.z])},a.__grassTime=c=>(t.setTime(c),e==null||e.setTime(c),N.value=t.time,{t:t.time,treeT:(e==null?void 0:e.time)??-1,pinned:c!==null}),a.__grassShow=c=>(t.visible=!!c,{visible:t.visible}),a.__grassUiHidden=c=>{const d=n.value;return d&&d.classList.toggle("is-ui-hidden",!!c),{hidden:!!c}},a.__grassRender=()=>{var c;return(c=s==null?void 0:s.scene)==null||c.render(),!0},a.__grassDrawInfo=()=>{var R,P,I,z;const c=t==null?void 0:t._draw;if(!c)return{hasDraw:!1};const d=c.vertexArray,T=((d==null?void 0:d._attributes)??[]).map(O=>{var ut;return{index:O.index,enabled:O.enabled,componentsPerAttribute:O.componentsPerAttribute,componentDatatype:O.componentDatatype,instanceDivisor:O.instanceDivisor,strideInBytes:O.strideInBytes,offsetInBytes:O.offsetInBytes,bufBytes:(ut=O.vertexBuffer)==null?void 0:ut._sizeInBytes}});return{hasDraw:!0,count:c.count,instanceCount:c.instanceCount,pass:c.pass,primitiveType:c.primitiveType,cull:c.cull,hasBoundingVolume:!!c.boundingVolume,modelMatrix:j.toArray(c.modelMatrix).map(O=>Number(O.toPrecision(6))),vaAttrs:T,vaoVertices:d==null?void 0:d._numberOfVertices,indexBytes:(R=d==null?void 0:d._indexBuffer)==null?void 0:R._sizeInBytes,indexCount:(P=d==null?void 0:d._indexBuffer)==null?void 0:P.numberOfIndices,programDestroyed:((z=(I=c.shaderProgram)==null?void 0:I.isDestroyed)==null?void 0:z.call(I))??null,executeCalls:a.__grassExecCount??-1}},a.__grassHookExecute=()=>{const c=t._draw;if(!c)return{ok:!1};const d=Object.getPrototypeOf(c);if(!d.__grassPatched){const T=d.execute;d.execute=function(...R){const P=window;return this===c&&(P.__grassExecCount=(P.__grassExecCount??0)+1),this===(e==null?void 0:e._draw)&&(P.__treeExecCount=(P.__treeExecCount??0)+1),T.apply(this,R)},d.__grassPatched=!0,d.__treePatched=!0}return a.__grassExecCount=0,a.__treeExecCount=0,{ok:!0}},a.__grassShot=c=>{const d=s==null?void 0:s.canvas;if(!d)return null;s.scene.render();const T=a.__gShotC||(a.__gShotC=document.createElement("canvas"));T.width=d.width,T.height=d.height;const R=T.getContext("2d");return R.clearRect(0,0,T.width,T.height),R.drawImage(d,0,0),a.__gShots=a.__gShots||{},a.__gShots[c]={data:R.getImageData(0,0,T.width,T.height).data,w:T.width,h:T.height},{w:T.width,h:T.height}},a.__grassScreenRect=()=>{const c=s==null?void 0:s.canvas;if(!c)return null;const d=t.lawnScreenQuad();if(!d)return null;const T=d.map(P=>P.x),R=d.map(P=>P.y);return{pts:d,bbox:{x0:Math.min(...T),y0:Math.min(...R),x1:Math.max(...T),y1:Math.max(...R)},canvas:{w:c.width,h:c.height,cssW:c.clientWidth,cssH:c.clientHeight,dpr:c.clientWidth?c.width/c.clientWidth:1}}},a.__grassDiff=(c,d,T,R)=>{var ge,pe;const P=(ge=a.__gShots)==null?void 0:ge[c],I=(pe=a.__gShots)==null?void 0:pe[d];if(!P||!I)return null;const z=P.w,O=P.h,ut=s==null?void 0:s.canvas,Ut=ut&&ut.clientWidth?ut.width/ut.clientWidth:1,yt=(T??[]).map(nt=>({x:nt.x*Ut,y:nt.y*Ut})),xs=(nt,it)=>{let dt=!1;for(let Rt=0,Qt=yt.length-1;Rt<yt.length;Qt=Rt++){const be=yt[Rt].x,Xt=yt[Rt].y,Ts=yt[Qt].x,ye=yt[Qt].y;Xt>it!=ye>it&&nt<(Ts-be)*(it-Xt)/(ye-Xt)+be&&(dt=!dt)}return dt};let Vt=0,he=0,fe=0,_e=0,me=0,Kt=1e9,jt=-1,qt=1e9,Jt=-1;for(let nt=0;nt<O;nt++)for(let it=0;it<z;it++){const dt=(nt*z+it)*4;Math.abs(P.data[dt]-I.data[dt])+Math.abs(P.data[dt+1]-I.data[dt+1])+Math.abs(P.data[dt+2]-I.data[dt+2])>24&&(Vt++,R!==void 0&&(nt<R?_e++:me++),yt.length===4&&(xs(it,nt)?he++:fe++),it<Kt&&(Kt=it),it>jt&&(jt=it),nt<qt&&(qt=nt),nt>Jt&&(Jt=nt))}return{n:Vt,insideN:he,outsideN:fe,aboveN:_e,belowN:me,bbox:Vt?{x0:Kt,y0:qt,x1:jt,y1:Jt}:null,size:{w:z,h:O},dpr:Ut}},a.__grassMean=c=>{var P;const d=(P=a.__gShots)==null?void 0:P[c];if(!d)return null;let T=0;const R=d.w*d.h;for(let I=0;I<R;I++){const z=I*4;T+=.2126*d.data[z]+.7152*d.data[z+1]+.0722*d.data[z+2]}return T/R},a.__grassDump=c=>{var I;const d=(I=a.__gShots)==null?void 0:I[c];if(!d)return null;const T=document.createElement("canvas");T.width=d.w,T.height=d.h;const R=T.getContext("2d"),P=R.createImageData(d.w,d.h);return P.data.set(d.data),R.putImageData(P,0,0),T.toDataURL("image/png")}}function ws(){const a=window;for(const v of Object.keys(a))(v.startsWith("__grass")||v.startsWith("__gShot"))&&delete a[v]}return Cs(()=>{var a,v,c,d,T,R;window.clearInterval(F);try{W==null||W()}catch{}ws();try{u==null||u.destroy()}catch{}try{(v=(a=s==null?void 0:s.scene)==null?void 0:a.primitives)==null||v.remove(e)}catch{}try{(d=(c=s==null?void 0:s.scene)==null?void 0:c.primitives)==null||d.remove(t)}catch{}(T=e==null?void 0:e.destroy)==null||T.call(e),(R=t==null?void 0:t.destroy)==null||R.call(t)}),{init:K,box:n,config:l,fields:S,apply:J,stats:L,treeStats:Q,treeHeightRange:m,coverage:p,windTime:N,fps:D,frameMs:Z,qualityName:k,region:o,regionStats:_,treeRequest:w,startDraw:gs,clearRegion:Ht,hudCollapsed:f,camScene:Et,camClose:le,camTop:ce,camGround:ue,resetParams:ys}}},ya={ref:"box",class:"map-box"},va={class:"grass-act"},wa={class:"grass-act"},xa={class:"oo-card hud"},Ta={class:"hud__head"},Fa=["aria-expanded","title"],Ma={class:"hud__body"},Ca={class:"hud__row"},Aa={class:"hud__row"},Sa={class:"hud__row"},Ea={class:"hud__row"},Ra={class:"hud__row"},La={class:"hud__row"},Pa={class:"hud__row"},Da={class:"hud__row"},Na={class:"hud__row"},ka={class:"hud__row"},Oa={class:"hud__row"},Ia={class:"hud__row"},Ba={class:"hud__row"},Ga={class:"hud__row"},Wa={class:"hud__row"},za={class:"hud__row"},Ha={class:"hud__row"},Ua={class:"hud__row"},Va={class:"hud__row"},Ka={class:"hud__row"},ja={class:"hud__row"},qa={class:"hud__row"},Ja={class:"hud__row"},Qa={class:"hud__row"},Xa={class:"hud__row"};function Ya(s,t,e,n,i,o){const r=we("Globe"),f=Fs,u=we("ConfigPanel");return Ps(),Ss("div",ya,[_t(r,{options:{terrain:!1},onCreated:n.init},null,8,["onCreated"]),_t(u,{model:n.config,fields:n.fields,title:"动态草坪 · 树林",collapsible:"",tip:"【卡顿先看这里】画质档一次写回草丛数 / 叶片段数 / 每叶侧枝 / 区域上限这四项成本：性能档 ~24 万三角形、均衡档（默认）~78 万、画质档 ~174 万（= 最早的默认）。右侧「帧率 / 帧耗时」是实测值（含 GPU 等待），切档或拖草丛数时它立刻反映代价。流程：点「绘制区域」→ 在地球上**左键逐点、右键闭合**画一个多边形 → 草与树只长在该区域内（区域外的格子按空洞剔除）；「重新绘制」会先清掉旧的再画，「清空」回到未生成状态。密度不随区域大小变：区域放大时按**面积比**同步放大草丛/树的数量，超出「区域草丛上限」则降密度、由 HUD 的「格子步长」如实反映。草地：一次实例 = 一丛 3 根叶片（丛内槽位走顶点属性，着色器里没有动态下标/分支），单根叶片 = 多段小四边形 + 一个尖端三角形，顶点着色器按「弧长参数化的圆弧中心线」把它弯下去（弯曲不改变叶长），相位取自叶片根部位置 ⇒ 整片草以行波方式起伏。树林：一次实例 = 一棵树（树干锥台 + 两个二十面体扰动球冠，逐面独立顶点取平面法线），摆动是 x² 形的整体剪切（根部为 0 ⇒ 树干不被拔起），林缘用低频噪声做成波浪。两者各是一次实例化 draw call，共用同一套风向与同一条时间轴。",onChange:n.apply},{default:pt(()=>[h("div",va,[_t(f,{class:"oo-btn",size:"small",onClick:n.camScene},{default:pt(()=>[...t[1]||(t[1]=[vt("草坪",-1)])]),_:1},8,["onClick"]),_t(f,{class:"oo-btn",size:"small",onClick:n.camClose},{default:pt(()=>[...t[2]||(t[2]=[vt("近景",-1)])]),_:1},8,["onClick"]),_t(f,{class:"oo-btn",size:"small",onClick:n.camTop},{default:pt(()=>[...t[3]||(t[3]=[vt("俯视",-1)])]),_:1},8,["onClick"]),_t(f,{class:"oo-btn",size:"small",onClick:n.camGround},{default:pt(()=>[...t[4]||(t[4]=[vt("地平线",-1)])]),_:1},8,["onClick"]),_t(f,{class:"oo-btn",size:"small",onClick:n.resetParams},{default:pt(()=>[...t[5]||(t[5]=[vt("重置",-1)])]),_:1},8,["onClick"])]),h("div",wa,[_t(f,{class:"oo-btn",size:"small",onClick:n.startDraw},{default:pt(()=>[vt(A(n.region?"重新绘制":"绘制区域"),1)]),_:1},8,["onClick"]),_t(f,{class:"oo-btn",size:"small",disabled:!n.region,onClick:n.clearRegion},{default:pt(()=>[...t[6]||(t[6]=[vt("清空",-1)])]),_:1},8,["disabled","onClick"])])]),_:1},8,["model","fields","onChange"]),h("div",xa,[h("div",Ta,[t[7]||(t[7]=h("span",{class:"hud__title"},"草坪读数",-1)),h("button",{class:"panel-toggle",type:"button","aria-expanded":!n.hudCollapsed,title:n.hudCollapsed?"展开读数面板":"折叠读数面板",onClick:t[0]||(t[0]=g=>n.hudCollapsed=!n.hudCollapsed)},[h("i",{class:Es({"is-collapsed":n.hudCollapsed})},null,2)],8,Fa)]),Rs(h("div",Ma,[h("div",Ca,[t[8]||(t[8]=h("span",null,"帧率 / 帧耗时",-1)),h("b",null,A(n.fps.toFixed(1))+" fps / "+A(n.frameMs.toFixed(0))+" ms",1)]),h("div",Aa,[t[9]||(t[9]=h("span",null,"画质档",-1)),h("b",null,A(n.qualityName),1)]),h("div",Sa,[t[10]||(t[10]=h("span",null,"区域",-1)),h("b",null,A(n.regionStats.active?"已生成":"未绘制"),1)]),h("div",Ea,[t[11]||(t[11]=h("span",null,"顶点 / 面积",-1)),h("b",null,A(n.regionStats.verts)+" / "+A(n.regionStats.area.toFixed(0))+" m²",1)]),h("div",Ra,[t[12]||(t[12]=h("span",null,"区域内边长",-1)),h("b",null,A(n.regionStats.side.toFixed(0))+" m",1)]),h("div",La,[t[13]||(t[13]=h("span",null,"草丛 / 叶片",-1)),h("b",null,A(n.stats.blades.toLocaleString())+" / "+A(n.stats.totalBlades.toLocaleString()),1)]),h("div",Pa,[t[14]||(t[14]=h("span",null,"每丛叶数",-1)),h("b",null,A(n.stats.bladesPerTuft)+" 叶",1)]),h("div",Da,[t[15]||(t[15]=h("span",null,"格子步长",-1)),h("b",null,A((n.stats.step*100).toFixed(1))+" cm",1)]),h("div",Na,[t[16]||(t[16]=h("span",null,"近场覆盖",-1)),h("b",null,A((n.coverage*100).toFixed(0))+" %",1)]),h("div",ka,[t[17]||(t[17]=h("span",null,"空洞 / 格子",-1)),h("b",null,A(n.stats.holes)+" / "+A(n.stats.cells),1)]),h("div",Oa,[t[18]||(t[18]=h("span",null,"每片构成",-1)),h("b",null,A(n.stats.trisPerBlade)+" 三角 / "+A(n.stats.vertsPerBlade)+" 顶点",1)]),h("div",Ia,[t[19]||(t[19]=h("span",null,"每叶侧枝",-1)),h("b",null,A(n.stats.branchPerBlade)+" 支 / 共 "+A(n.stats.totalBranches.toLocaleString()),1)]),h("div",Ba,[t[20]||(t[20]=h("span",null,"枝杈折断垂下",-1)),h("b",null,A((n.stats.branchFoldFrac*100).toFixed(0))+" %",1)]),h("div",Ga,[t[21]||(t[21]=h("span",null,"每丛（含侧枝）",-1)),h("b",null,A(n.stats.meshTris)+" 三角 / "+A(n.stats.meshVerts)+" 顶点",1)]),h("div",Wa,[t[22]||(t[22]=h("span",null,"三角形总数",-1)),h("b",null,A(n.stats.totalTris.toLocaleString()),1)]),h("div",za,[t[23]||(t[23]=h("span",null,"实例缓冲",-1)),h("b",null,A((n.stats.instanceBytes/1048576).toFixed(2))+" MB",1)]),h("div",Ha,[t[24]||(t[24]=h("span",null,"风场时间",-1)),h("b",null,A(n.windTime.toFixed(2))+" s",1)]),h("div",Ua,[t[25]||(t[25]=h("span",null,"摆幅 / 波长",-1)),h("b",null,A(n.config.ampRad.toFixed(2))+" rad / "+A(n.config.wavelength)+" m",1)]),h("div",Va,[t[26]||(t[26]=h("span",null,"树林（实/请求）",-1)),h("b",null,A(n.treeStats.trees)+" / "+A(n.treeRequest),1)]),h("div",Ka,[t[27]||(t[27]=h("span",null,"落树 / 格点",-1)),h("b",null,A(n.treeStats.kept)+" / "+A(n.treeStats.cells),1)]),h("div",ja,[t[28]||(t[28]=h("span",null,"树高范围",-1)),h("b",null,A(n.treeHeightRange)+" m",1)]),h("div",qa,[t[29]||(t[29]=h("span",null,"单棵构成",-1)),h("b",null,A(n.treeStats.branchCount)+" 段枝 / "+A(n.treeStats.leafCount)+" 叶",1)]),h("div",Ja,[t[30]||(t[30]=h("span",null,"单棵三角形",-1)),h("b",null,A(n.treeStats.meshTris)+"（枝 "+A(n.treeStats.branchTris)+" + 叶 "+A(n.treeStats.leafTris)+"）",1)]),h("div",Qa,[t[31]||(t[31]=h("span",null,"树林三角形",-1)),h("b",null,A(n.treeStats.totalTris.toLocaleString()),1)]),h("div",Xa,[t[32]||(t[32]=h("span",null,"同地地块",-1)),h("b",null,"±"+A(n.treeStats.half.toFixed(1))+" m（草树共用）",1)])],512),[[Ls,!n.hudCollapsed]])])],512)}const mo=As(ba,[["render",Ya],["__scopeId","data-v-2d87872e"]]);export{wt as QUALITY_PRESETS,mo as default};
