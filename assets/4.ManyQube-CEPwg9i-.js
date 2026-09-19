import{r as T,c as y}from"./webgl-utils-1OOxpupY.js";import{P as M,s as g,f as P,O as C}from"./orbitControls-DFRyQxJ0.js";import{B as w}from"./geometry-duEbzJ85.js";import{O as D}from"./Object3D-DqpYKwPR.js";import{d as L,A as S,ai as U,c as I,b as O,h as V,f as H,_ as N}from"./index-9vIL5KkC.js";import{c as z,m as Y}from"./mat4-DU5u1pS3.js";import"./cesium-utSEP5if.js";class k extends D{constructor(){super(),this.type="Mesh"}}const W={class:"box"},G=`#version 300 es
in vec4 a_position;
in vec4 a_color;
uniform mat4 u_mvp;
out vec4 v_color;
void main() {
  gl_Position = u_mvp * a_position;
  v_color = a_color;
}
`,j=`#version 300 es
precision highp float;
in vec4 v_color;
out vec4 outColor;
void main() {
  outColor = v_color;
}
`,Q=L({meta:{title:"多个Mesh渲染",path:"/webgl/multi-mesh"},__name:"4.ManyQube",setup(d){const t=V(null);let e=null,o=null,c=null,u=0,a=null;const m=[],_=z();let v=null;const R=()=>!t.value||(e=t.value.getContext("webgl2"),!e)?!1:(e.enable(e.DEPTH_TEST),!0),b=()=>e?(o=y(e,[G,j]),o&&(v=e.getUniformLocation(o,"u_mvp")),!!o):!1,E=()=>{if(!e||!o)return;const r=new w(1,1,1);u=r.indices.length,c=e.createVertexArray(),e.bindVertexArray(c);const i=e.createBuffer();e.bindBuffer(e.ARRAY_BUFFER,i),e.bufferData(e.ARRAY_BUFFER,new Float32Array(r.positions),e.STATIC_DRAW);const s=e.getAttribLocation(o,"a_position");e.enableVertexAttribArray(s),e.vertexAttribPointer(s,3,e.FLOAT,!1,0,0);const l=e.createBuffer();e.bindBuffer(e.ARRAY_BUFFER,l),e.bufferData(e.ARRAY_BUFFER,new Float32Array(r.colors),e.STATIC_DRAW);const n=e.getAttribLocation(o,"a_color");e.enableVertexAttribArray(n),e.vertexAttribPointer(n,3,e.FLOAT,!1,0,0);const f=e.createBuffer();e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,f),e.bufferData(e.ELEMENT_ARRAY_BUFFER,new Uint16Array(r.indices),e.STATIC_DRAW),e.bindVertexArray(null)},h=()=>{if(!t.value)return;const r=t.value.clientWidth/t.value.clientHeight;a=new M(60*Math.PI/180,r,1,100),g(a.position,0,5,17),a.lookAt(P(0,0,0)),new C(a,t.value);for(let i=0;i<3;i++)for(let s=0;s<3;s++)for(let l=0;l<3;l++){const n=new k,f=(i-1)*2.5,B=(s-1)*2.5,F=(l-1)*2.5;n.setPosition(f,B,F),n.rotation[0]=Math.random()*Math.PI,n.rotation[1]=Math.random()*Math.PI,m.push(n)}},x=()=>{!e||!t.value||!a||e.canvas instanceof HTMLCanvasElement&&(T(t.value),e.viewport(0,0,e.canvas.width,e.canvas.height),a.aspectRatio=e.canvas.clientWidth/e.canvas.clientHeight)},A=()=>{!e||!o||!c||!a||(e.clearColor(.1,.1,.1,1),e.clear(e.COLOR_BUFFER_BIT|e.DEPTH_BUFFER_BIT),e.useProgram(o),e.bindVertexArray(c),m.forEach(r=>{e&&(r.rotation[1]+=.03,r.updateMatrix(),Y(_,a.viewProjectionMatrix,r.modelMatrix),e.uniformMatrix4fv(v,!1,_),e.drawElements(e.TRIANGLES,u,e.UNSIGNED_SHORT,0))}),e.bindVertexArray(null),requestAnimationFrame(A))},p=new ResizeObserver(()=>x());return S(()=>{R()&&(b(),E(),h(),A(),t.value&&p.observe(t.value))}),U(()=>{p.disconnect(),e&&(e.deleteProgram(o),e.deleteVertexArray(c))}),(r,i)=>(H(),I("div",W,[O("canvas",{ref_key:"canvasRef",ref:t},null,512)]))}}),te=N(Q,[["__scopeId","data-v-5e449048"]]);export{te as default};
