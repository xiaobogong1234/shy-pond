import{r as p,c as A}from"./webgl-utils-1OOxpupY.js";import{d,A as R,ai as b,c as g,b as x,h as F,f as B,_ as E}from"./index-9vIL5KkC.js";import"./cesium-utSEP5if.js";const y={class:"box"},T=`#version 300 es
in vec4 a_position;
out vec4 v_position;
void main() {
  gl_Position = a_position;
  v_position = a_position;
}
`,w=`#version 300 es
precision highp float;
uniform float u_time;
in vec4 v_position;
out vec4 outColor;
void main() {
  float r = v_position.x * 0.5 + 0.5;
  float g = v_position.y * 0.5 + 0.5;
  float b = sin(u_time) * 0.5 + 0.5;
  outColor = vec4(r, g, b, 1.0);
}
`,C=d({meta:{title:"三角形",path:"/webgl/triangle"},__name:"1.Triangle",setup(h){const o=F(null);let e=null,t=null,r=null,f=Date.now(),l=0;const _=()=>o.value?(e=o.value.getContext("webgl2"),e?(c(),!0):(console.error("WebGL2 not supported"),!1)):!1,v=()=>e?(t=A(e,[T,w]),!!t):!1,m=()=>{if(!e||!t)return;const n=e.getAttribLocation(t,"a_position"),i=new Float32Array([-.5,-.5,0,.8,.5,-.5]);r=e.createVertexArray(),e.bindVertexArray(r);const s=e.createBuffer();e.bindBuffer(e.ARRAY_BUFFER,s),e.bufferData(e.ARRAY_BUFFER,i,e.STATIC_DRAW),e.enableVertexAttribArray(n),e.vertexAttribPointer(n,2,e.FLOAT,!1,0,0),e.bindBuffer(e.ARRAY_BUFFER,null),e.bindVertexArray(null)},c=()=>{!e||!o.value||(p(o.value),e.viewport(0,0,e.canvas.width,e.canvas.height))},a=()=>{if(!e||!t||!r)return;const i=(Date.now()-f)/1e3;e.clearColor(0,0,0,0),e.clear(e.COLOR_BUFFER_BIT),e.useProgram(t);const s=e.getUniformLocation(t,"u_time");e.uniform1f(s,i),e.bindVertexArray(r),e.drawArrays(e.TRIANGLES,0,3),e.bindVertexArray(null),l=requestAnimationFrame(a)},u=new ResizeObserver(()=>{c(),a()});return R(()=>{_()&&(v(),m(),a(),o.value&&u.observe(o.value))}),b(()=>{u.disconnect(),cancelAnimationFrame(l),e&&(e.deleteProgram(t),e.deleteVertexArray(r))}),(n,i)=>(B(),g("div",y,[x("canvas",{ref_key:"canvasRef",ref:o},null,512)]))}}),U=E(C,[["__scopeId","data-v-a633929e"]]);export{U as default};
