import{r as T,c as C}from"./webgl-utils-1OOxpupY.js";import{P as g,s as y,f as h,O as S}from"./orbitControls-DFRyQxJ0.js";import{B as U}from"./geometry-duEbzJ85.js";import{d as w,A as L,ai as O,c as P,b as D,h as V,f as M,_ as I}from"./index-9vIL5KkC.js";import{c as p,i as H,m as N}from"./mat4-DU5u1pS3.js";import"./cesium-utSEP5if.js";const Y={class:"box"},z=`#version 300 es
in vec4 a_position;
in vec4 a_color;
uniform mat4 u_mvp;
out vec4 v_color;
void main() {
  gl_Position = u_mvp * a_position;
  v_color = a_color;
}
`,W=`#version 300 es
precision highp float;
in vec4 v_color;
out vec4 outColor;
void main() {
  outColor = v_color;
}
`,k=w({meta:{title:"轨道控制器",path:"/webgl/orbitControls"},__name:"3.OrbitControl",setup(G){const t=V(null);let e=null,r=null,a=null,s=0,o=null,i=null;const l=p(),c=p();let f=null;const R=()=>!t.value||(e=t.value.getContext("webgl2"),!e)?!1:(e.enable(e.DEPTH_TEST),!0),d=()=>e?(r=C(e,[z,W]),r&&(f=e.getUniformLocation(r,"u_mvp")),!!r):!1,b=()=>{if(!e||!r)return;const n=new U(2,2,2);s=n.indices.length,a=e.createVertexArray(),e.bindVertexArray(a);const v=e.createBuffer();e.bindBuffer(e.ARRAY_BUFFER,v),e.bufferData(e.ARRAY_BUFFER,new Float32Array(n.positions),e.STATIC_DRAW);const m=e.getAttribLocation(r,"a_position");e.enableVertexAttribArray(m),e.vertexAttribPointer(m,3,e.FLOAT,!1,0,0);const x=e.createBuffer();e.bindBuffer(e.ARRAY_BUFFER,x),e.bufferData(e.ARRAY_BUFFER,new Float32Array(n.colors),e.STATIC_DRAW);const A=e.getAttribLocation(r,"a_color");e.enableVertexAttribArray(A),e.vertexAttribPointer(A,3,e.FLOAT,!1,0,0);const F=e.createBuffer();e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,F),e.bufferData(e.ELEMENT_ARRAY_BUFFER,new Uint16Array(n.indices),e.STATIC_DRAW),e.bindVertexArray(null)},E=()=>{if(!t.value)return;const n=t.value.clientWidth/t.value.clientHeight;o=new g(60*Math.PI/180,n,1,2e3),y(o.position,5.0103936195373535,2.959651470184326,6.335330963134766),o.lookAt(h(0,0,0)),i=new S(o,t.value)},B=()=>{!e||!t.value||!o||(T(t.value),e.viewport(0,0,e.canvas.width,e.canvas.height),e.canvas instanceof HTMLCanvasElement&&(o.aspectRatio=e.canvas.clientWidth/e.canvas.clientHeight))},u=()=>{!e||!r||!a||!o||(e.clearColor(.1,.1,.1,1),e.clear(e.COLOR_BUFFER_BIT|e.DEPTH_BUFFER_BIT),e.useProgram(r),H(l),N(c,o.viewProjectionMatrix,l),e.uniformMatrix4fv(f,!1,c),e.bindVertexArray(a),e.drawElements(e.TRIANGLES,s,e.UNSIGNED_SHORT,0),e.bindVertexArray(null),requestAnimationFrame(u))},_=new ResizeObserver(()=>B());return L(()=>{R()&&(d(),b(),E(),u(),t.value&&_.observe(t.value))}),O(()=>{_.disconnect(),i&&i.destroy(),e&&(e.deleteProgram(r),e.deleteVertexArray(a))}),(n,v)=>(M(),P("div",Y,[D("canvas",{ref_key:"canvasRef",ref:t},null,512)]))}}),Z=I(k,[["__scopeId","data-v-289c5ef6"]]);export{Z as default};
