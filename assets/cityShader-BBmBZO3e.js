import{d as p,P as h,g,w as d,cX as M,l1 as L}from"./cesium-utSEP5if.js";const l=[{max:15,color:[.16,.42,.72],label:"0 ~ 15 m"},{max:30,color:[.2,.68,.62],label:"15 ~ 30 m"},{max:50,color:[.55,.78,.25],label:"30 ~ 50 m"},{max:80,color:[.95,.7,.2],label:"50 ~ 80 m"},{max:1/0,color:[.9,.28,.24],label:"≥ 80 m"}],T="—";function w(){return l.map(t=>t.label||T)}function A(t){const e=n=>Math.round(Math.max(0,Math.min(1,n))*255);return`rgb(${e(t[0])}, ${e(t[1])}, ${e(t[2])})`}function F(){return l.map(t=>A(t.color))}const E=6,z=`
void vertexMain(VertexInput vsInput, inout czm_modelVertexOutput vsOutput) {
  vec3 p = vsOutput.positionMC;

  // 区域判据：6 条半平面 a*x + b*z + c >= 0 全部满足才在区域内
  float inside = 1.0;
  if (u_regionEnable > 0.5) {
    float hit = 1.0;
    if (u_planeCount > 0.5) { hit *= step(0.0, u_p0.x * p.x + u_p0.y * p.z + u_p0.z); }
    if (u_planeCount > 1.5) { hit *= step(0.0, u_p1.x * p.x + u_p1.y * p.z + u_p1.z); }
    if (u_planeCount > 2.5) { hit *= step(0.0, u_p2.x * p.x + u_p2.y * p.z + u_p2.z); }
    if (u_planeCount > 3.5) { hit *= step(0.0, u_p3.x * p.x + u_p3.y * p.z + u_p3.z); }
    if (u_planeCount > 4.5) { hit *= step(0.0, u_p4.x * p.x + u_p4.y * p.z + u_p4.z); }
    if (u_planeCount > 5.5) { hit *= step(0.0, u_p5.x * p.x + u_p5.y * p.z + u_p5.z); }
    inside = hit;
  }

  if (u_flatEnable > 0.5 && inside > 0.5) {
    vsOutput.positionMC.y = min(p.y, u_flatHeight);
  }
}
`,O=`
void fragmentMain(FragmentInput fsInput, inout czm_modelMaterial material) {
  if (u_colorEnable > 0.5) {
    // 注意：这里读到的 positionMC 是**经过压平后**的值（顶点阶段改了 attributes.positionMC
    // 之后才生成 varying），所以「压平 + 着色」叠起来语义是一致的。
    float h = fsInput.attributes.positionMC.y;
    vec3 col = u_col0;
    if (h >= u_h0) { col = u_col1; }
    if (h >= u_h1) { col = u_col2; }
    if (h >= u_h2) { col = u_col3; }
    if (h >= u_h3) { col = u_col4; }
    material.diffuse = col;
  }
}
`;function X(){const t=L,e=a=>new p(a,a,a),n=new Array(E).fill(0).map(()=>new p(0,0,1));return new M({uniforms:{u_flatEnable:{type:t.FLOAT,value:0},u_flatHeight:{type:t.FLOAT,value:40},u_regionEnable:{type:t.FLOAT,value:0},u_planeCount:{type:t.FLOAT,value:0},u_p0:{type:t.VEC3,value:n[0]},u_p1:{type:t.VEC3,value:n[1]},u_p2:{type:t.VEC3,value:n[2]},u_p3:{type:t.VEC3,value:n[3]},u_p4:{type:t.VEC3,value:n[4]},u_p5:{type:t.VEC3,value:n[5]},u_colorEnable:{type:t.FLOAT,value:0},u_h0:{type:t.FLOAT,value:l[0].max},u_h1:{type:t.FLOAT,value:l[1].max},u_h2:{type:t.FLOAT,value:l[2].max},u_h3:{type:t.FLOAT,value:l[3].max},u_col0:{type:t.VEC3,value:e(l[0].color[0])},u_col1:{type:t.VEC3,value:e(l[1].color[0])},u_col2:{type:t.VEC3,value:e(l[2].color[0])},u_col3:{type:t.VEC3,value:e(l[3].color[0])},u_col4:{type:t.VEC3,value:e(l[4].color[0])}},vertexShaderText:z,fragmentShaderText:O})}function S(t){l.forEach((e,n)=>{t.setUniform(`u_col${n}`,new p(e.color[0],e.color[1],e.color[2]))})}function H(t,e){t.setUniform("u_flatEnable",e.flatEnable?1:0),t.setUniform("u_flatHeight",e.flatHeight),t.setUniform("u_colorEnable",e.colorEnable?1:0);const n=e.planes.slice(0,E);t.setUniform("u_regionEnable",n.length>0?1:0),t.setUniform("u_planeCount",n.length);for(let a=0;a<E;a++){const r=n[a]??[0,0,1];t.setUniform(`u_p${a}`,new p(r[0],r[1],r[2]))}S(t)}function I(t,e,n,a){const r=Math.min(t,n),f=Math.max(t,n),y=Math.min(e,a),_=Math.max(e,a),c=[[1,0,-r],[-1,0,f],[0,1,-y],[0,-1,_]],x=(r+f)/2,v=(y+_)/2;return c.every(([o,i,u])=>o*x+i*v+u>=0)?c:c.map(([o,i,u])=>[-o,-i,-u])}function P(t,e){var c,x,v,C;const n=t.root,a=(n==null?void 0:n.computedTransform)??(n==null?void 0:n.transform);if(!a)return null;const r=h.inverse(a,new h);if(!r)return null;const f=(o,i)=>{const u=o;if(u!=null&&u.computedTransform&&!h.equals(u.computedTransform,i))return!1;const m=(u==null?void 0:u.children)??[];for(const s of m)if(!f(s,i))return!1;return!0},y=f(n,a);let _={minX:-(((c=t.boundingSphere)==null?void 0:c.radius)??2e4),maxX:((x=t.boundingSphere)==null?void 0:x.radius)??2e4,minZ:-(((v=t.boundingSphere)==null?void 0:v.radius)??2e4),maxZ:((C=t.boundingSphere)==null?void 0:C.radius)??2e4};if(e&&e.length>=12){const o=e;_={minX:o[0]-Math.abs(o[3]),maxX:o[0]+Math.abs(o[3]),minZ:-(o[1]+Math.abs(o[7])),maxZ:-(o[1]-Math.abs(o[7]))}}return{transformSafe:y,xzExtent:_,toLonLat(o,i,u){const m=new p(o,-u,i),s=h.multiplyByPoint(a,m,new p),b=g.fromCartesian(s);return b?{lon:d.toDegrees(b.longitude),lat:d.toDegrees(b.latitude),height:b.height}:{lon:0,lat:0,height:0}},fromLonLat(o,i,u=0){const m=p.fromDegrees(o,i,u),s=h.multiplyByPoint(r,m,new p);return{x:s.x,y:s.z,z:-s.y}}}}export{F as a,w as b,H as c,X as d,I as e,P as r};
