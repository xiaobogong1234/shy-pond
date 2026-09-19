import{r as h,c as y}from"./webgl-utils-1OOxpupY.js";import{B as C}from"./geometry-duEbzJ85.js";import{d as w,A as D,ai as S,c as U,b as L,h as M,f as P,_ as V}from"./index-9vIL5KkC.js";import{c,l as I,p as O,i as H,r as p,m as b}from"./mat4-DU5u1pS3.js";import"./cesium-utSEP5if.js";const N={class:"box"},Y=`#version 300 es
in vec4 a_position;
in vec4 a_color;
uniform mat4 u_matrix;
out vec4 v_color;
void main() {
  gl_Position = u_matrix * a_position;
  v_color = a_color;
}
`,z=`#version 300 es
precision highp float;
in vec4 v_color;
out vec4 outColor;
void main() {
  outColor = v_color;
}
`,k=w({meta:{title:"ThreeJS风格方块",path:"/webgl/cube-threejs"},__name:"2.ThreeCube",setup(G){const o=M(null);let e=null,t=null,n=null,l=0,E=Date.now();const f=c(),u=c(),a=c(),s=c();let _=null;const x=()=>!o.value||(e=o.value.getContext("webgl2"),!e)?!1:(e.enable(e.DEPTH_TEST),A(),!0),T=()=>e?(t=y(e,[Y,z]),t&&(_=e.getUniformLocation(t,"u_matrix")),!!t):!1,B=()=>{if(!e||!t)return;const r=new C(2,2,2);l=r.indices.length,n=e.createVertexArray(),e.bindVertexArray(n);const i=e.createBuffer();e.bindBuffer(e.ARRAY_BUFFER,i),e.bufferData(e.ARRAY_BUFFER,new Float32Array(r.positions),e.STATIC_DRAW);const R=e.getAttribLocation(t,"a_position");e.enableVertexAttribArray(R),e.vertexAttribPointer(R,3,e.FLOAT,!1,0,0);const F=e.createBuffer();e.bindBuffer(e.ARRAY_BUFFER,F),e.bufferData(e.ARRAY_BUFFER,new Float32Array(r.colors),e.STATIC_DRAW);const d=e.getAttribLocation(t,"a_color");e.enableVertexAttribArray(d),e.vertexAttribPointer(d,3,e.FLOAT,!1,0,0);const g=e.createBuffer();e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,g),e.bufferData(e.ELEMENT_ARRAY_BUFFER,new Uint16Array(r.indices),e.STATIC_DRAW),e.bindVertexArray(null)},A=()=>{if(!(!e||!o.value)&&(h(o.value),e.viewport(0,0,e.canvas.width,e.canvas.height),e.canvas instanceof HTMLCanvasElement)){const r=e.canvas.clientWidth/e.canvas.clientHeight;O(f,60*Math.PI/180,r,1,2e3)}},m=()=>{if(!e||!t||!n)return;const i=(Date.now()-E)/1e3;e.clearColor(.1,.1,.1,1),e.clear(e.COLOR_BUFFER_BIT|e.DEPTH_BUFFER_BIT),e.useProgram(t),H(a),p(a,a,i*.5,[0,1,0]),p(a,a,i*.3,[1,0,0]),b(s,u,a),b(s,f,s),e.uniformMatrix4fv(_,!1,s),e.bindVertexArray(n),e.drawElements(e.TRIANGLES,l,e.UNSIGNED_SHORT,0),e.bindVertexArray(null),requestAnimationFrame(m)},v=new ResizeObserver(()=>A());return D(()=>{x()&&(T(),B(),I(u,[3,3,5],[0,0,0],[0,1,0]),m(),o.value&&v.observe(o.value))}),S(()=>{v.disconnect(),e&&(e.deleteProgram(t),e.deleteVertexArray(n))}),(r,i)=>(P(),U("div",N,[L("canvas",{ref_key:"canvasRef",ref:o},null,512)]))}}),K=V(k,[["__scopeId","data-v-2d11fae7"]]);export{K as default};
