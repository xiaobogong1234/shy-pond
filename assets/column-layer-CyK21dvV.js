import{G as b,L as O,p as R,c as z,e as E,g as A,a as G,M as _,m as M}from"./composite-layer-D_35hGlM.js";import{d as j,U as C}from"./useDeck-CyF5ro6x.js";const U={CLOCKWISE:1,COUNTER_CLOCKWISE:-1};function F(r,e,t={}){return N(r,t)!==e?(D(r,t),!0):!1}function N(r,e={}){return Math.sign(T(r,e))}const S={x:0,y:1,z:2};function T(r,e={}){const{start:t=0,end:o=r.length,plane:i="xy"}=e,s=e.size||2;let l=0;const a=S[i[0]],u=S[i[1]];for(let d=t,n=o-s;d<o;d+=s)l+=(r[d+a]-r[n+a])*(r[d+u]+r[n+u]),n=d;return l/2}function D(r,e){const{start:t=0,end:o=r.length,size:i=2}=e,s=(o-t)/i,l=Math.floor(s/2);for(let a=0;a<l;++a){const u=t+a*i,d=t+(s-1-a)*i;for(let n=0;n<i;++n){const p=r[u+n];r[u+n]=r[d+n],r[d+n]=p}}}class W extends b{constructor(e){const{indices:t,attributes:o}=V(e);super({...e,topology:"line-list",indices:t,attributes:o})}}function V(r){const{radius:e,height:t=1,nradial:o=10}=r;let{vertices:i}=r;i&&(j.assert(i.length>=o),i=i.flatMap(c=>[c[0],c[1]]),F(i,U.COUNTER_CLOCKWISE));const s=t>0,l=o+1,a=s?l*3+1:o,u=Math.PI*2/o,d=new Uint16Array(s?o*3*2:0),n=new Float32Array(a*3),p=new Float32Array(a*3);let f=0;if(s){for(let c=0;c<l;c++){const m=c*u,g=c%o,v=Math.sin(m),y=Math.cos(m);for(let h=0;h<2;h++)n[f+0]=i?i[g*2]:y*e,n[f+1]=i?i[g*2+1]:v*e,n[f+2]=(1/2-h)*t,p[f+0]=i?i[g*2]:y,p[f+1]=i?i[g*2+1]:v,f+=3}n[f+0]=n[f-3],n[f+1]=n[f-2],n[f+2]=n[f-1],f+=3}for(let c=s?0:1;c<l;c++){const m=Math.floor(c/2)*Math.sign(.5-c%2),g=m*u,v=(m+o)%o,y=Math.sin(g),h=Math.cos(g);n[f+0]=i?i[v*2]:h*e,n[f+1]=i?i[v*2+1]:y*e,n[f+2]=t/2,p[f+2]=1,f+=3}if(s){let c=0;for(let m=0;m<o;m++)d[c++]=m*2+0,d[c++]=m*2+2,d[c++]=m*2+0,d[c++]=m*2+1,d[c++]=m*2+1,d[c++]=m*2+3}return{indices:d,attributes:{POSITION:{size:3,value:n},NORMAL:{size:3,value:p}}}}const H=`struct ColumnUniforms {
  radius: f32,
  angle: f32,
  offset: vec2<f32>,
  extruded: f32,
  stroked: f32,
  isStroke: f32,
  coverage: f32,
  elevationScale: f32,
  edgeDistance: f32,
  widthScale: f32,
  widthMinPixels: f32,
  widthMaxPixels: f32,
  radiusUnits: i32,
  widthUnits: i32,
};

@group(0) @binding(auto) var<uniform> column: ColumnUniforms;
`,k=`layout(std140) uniform columnUniforms {
  float radius;
  float angle;
  vec2 offset;
  bool extruded;
  bool stroked;
  bool isStroke;
  float coverage;
  float elevationScale;
  float edgeDistance;
  float widthScale;
  float widthMinPixels;
  float widthMaxPixels;
  highp int radiusUnits;
  highp int widthUnits;
} column;
`,K={name:"column",source:H,vs:k,fs:k,uniformTypes:{radius:"f32",angle:"f32",offset:"vec2<f32>",extruded:"f32",stroked:"f32",isStroke:"f32",coverage:"f32",elevationScale:"f32",edgeDistance:"f32",widthScale:"f32",widthMinPixels:"f32",widthMaxPixels:"f32",radiusUnits:"i32",widthUnits:"i32"}},w=`struct Attributes {
  @builtin(instance_index) instanceIndex: u32,
  @location(0) positions: vec3<f32>,
  @location(1) normals: vec3<f32>,
  @location(2) instancePositions: vec3<f32>,
  @location(3) instancePositions64Low: vec3<f32>,
  @location(4) instanceElevations: f32,
  @location(5) instanceFillColors: vec4<f32>,
  @location(6) instanceLineColors: vec4<f32>,
  @location(7) instanceStrokeWidths: f32
};

fn getRotationMatrix(angle: f32) -> mat2x2<f32> {
  let s = sin(angle);
  let c = cos(angle);
  return mat2x2<f32>(
    vec2<f32>(c, s),
    vec2<f32>(-s, c)
  );
}

fn getOffset(
  positions: vec3<f32>,
  strokeOffsetRatio: f32,
  dotRadius: f32,
  rotationMatrix: mat2x2<f32>
) -> vec3<f32> {
  var offset = (rotationMatrix * positions.xy * strokeOffsetRatio + column.offset) * dotRadius;
  if (column.radiusUnits == UNIT_METERS) {
    offset = project_size_vec2(offset);
  } else if (column.radiusUnits == UNIT_PIXELS) {
    offset = project_pixel_size_vec2(offset);
  }
  return vec3<f32>(offset, 0.0);
}
`,$=`${w}

struct Varyings {
  @builtin(position) position: vec4<f32>,
  @location(0) color: vec4<f32>
};

@vertex
fn vertexMain(attributes: Attributes) -> Varyings {
  var varyings: Varyings;

  geometry.worldPosition = attributes.instancePositions;
  geometry.pickingColor = picking_getPickingColorFromIndex(attributes.instanceIndex);

  let isStroke = column.isStroke > 0.5;
  let baseColor = select(attributes.instanceFillColors, attributes.instanceLineColors, isStroke);
  let rotationMatrix = getRotationMatrix(column.angle);

  var elevation = 0.0;
  var strokeOffsetRatio = 1.0;

  if (column.extruded > 0.5) {
    elevation =
      attributes.instanceElevations * (attributes.positions.z + 1.0) / 2.0 * column.elevationScale;
  } else if (column.stroked > 0.5) {
    let widthPixels = clamp(
      project_unit_size_to_pixel(attributes.instanceStrokeWidths * column.widthScale, column.widthUnits),
      column.widthMinPixels,
      column.widthMaxPixels
    ) / 2.0;
    let halfOffset =
      project_pixel_size_float(widthPixels) /
      project_size_float(column.edgeDistance * column.coverage * column.radius);
    if (isStroke) {
      strokeOffsetRatio -= sign(attributes.positions.z) * halfOffset;
    } else {
      strokeOffsetRatio -= halfOffset;
    }
  }

  let shouldRender = select(0.0, 1.0, baseColor.a > 0.0 && attributes.instanceElevations >= 0.0);
  let dotRadius = column.radius * column.coverage * shouldRender;
  let centroidPosition =
    vec3<f32>(
      attributes.instancePositions.xy,
      attributes.instancePositions.z + elevation
    );
  let offset = getOffset(attributes.positions, strokeOffsetRatio, dotRadius, rotationMatrix);
  let projected = project_position_to_clipspace_and_commonspace(
    centroidPosition,
    attributes.instancePositions64Low,
    offset
  );

  geometry.position = projected.commonPosition;
  geometry.normal = project_normal(vec3<f32>(rotationMatrix * attributes.normals.xy, attributes.normals.z));

  let lightColor = lighting_getLightColor2(
    baseColor.rgb,
    project.cameraPosition,
    geometry.position.xyz,
    geometry.normal
  );

  varyings.position = projected.clipPosition;
  varyings.color = vec4<f32>(
    select(baseColor.rgb, lightColor, column.extruded > 0.5 && !isStroke),
    baseColor.a * layer.opacity
  );

  return varyings;
}

@fragment
fn fragmentMain(varyings: Varyings) -> @location(0) vec4<f32> {
  geometry.uv = vec2<f32>(0.0);
  return deckgl_premultiplied_alpha(varyings.color);
}
`,B=`${w}

struct Varyings {
  @builtin(position) position: vec4<f32>,
  @location(0) color: vec4<f32>,
  @location(1) cameraPosition: vec3<f32>,
  @location(2) positionCommonspace: vec4<f32>
};

@vertex
fn vertexMain(attributes: Attributes) -> Varyings {
  var varyings: Varyings;

  geometry.worldPosition = attributes.instancePositions;
  geometry.pickingColor = picking_getPickingColorFromIndex(attributes.instanceIndex);

  let isStroke = column.isStroke > 0.5;
  let baseColor = select(attributes.instanceFillColors, attributes.instanceLineColors, isStroke);
  let rotationMatrix = getRotationMatrix(column.angle);

  var elevation = 0.0;
  var strokeOffsetRatio = 1.0;

  if (column.extruded > 0.5) {
    elevation =
      attributes.instanceElevations * (attributes.positions.z + 1.0) / 2.0 * column.elevationScale;
  } else if (column.stroked > 0.5) {
    let widthPixels = clamp(
      project_unit_size_to_pixel(attributes.instanceStrokeWidths * column.widthScale, column.widthUnits),
      column.widthMinPixels,
      column.widthMaxPixels
    ) / 2.0;
    let halfOffset =
      project_pixel_size_float(widthPixels) /
      project_size_float(column.edgeDistance * column.coverage * column.radius);
    if (isStroke) {
      strokeOffsetRatio -= sign(attributes.positions.z) * halfOffset;
    } else {
      strokeOffsetRatio -= halfOffset;
    }
  }

  let shouldRender = select(0.0, 1.0, baseColor.a > 0.0 && attributes.instanceElevations >= 0.0);
  let dotRadius = column.radius * column.coverage * shouldRender;
  let centroidPosition =
    vec3<f32>(
      attributes.instancePositions.xy,
      attributes.instancePositions.z + elevation
    );
  let offset = getOffset(attributes.positions, strokeOffsetRatio, dotRadius, rotationMatrix);
  let projected = project_position_to_clipspace_and_commonspace(
    centroidPosition,
    attributes.instancePositions64Low,
    offset
  );

  geometry.position = projected.commonPosition;
  geometry.normal = project_normal(vec3<f32>(rotationMatrix * attributes.normals.xy, attributes.normals.z));

  varyings.position = projected.clipPosition;
  varyings.color = vec4<f32>(baseColor.rgb, baseColor.a * layer.opacity);
  varyings.cameraPosition = project.cameraPosition;
  varyings.positionCommonspace = projected.commonPosition;

  return varyings;
}

@fragment
fn fragmentMain(varyings: Varyings) -> @location(0) vec4<f32> {
  geometry.uv = vec2<f32>(0.0);

  var fragColor = varyings.color;
  if (column.extruded > 0.5 && column.isStroke < 0.5) {
    // WebGPU's screen-space Y axis reverses the derivative orientation used by GLSL flat shading.
    let normal = normalize(cross(dpdy(varyings.positionCommonspace.xyz), dpdx(varyings.positionCommonspace.xyz)));
    fragColor = vec4<f32>(
      lighting_getLightColor2(
        varyings.color.rgb,
        varyings.cameraPosition,
        varyings.positionCommonspace.xyz,
        normal
      ),
      varyings.color.a
    );
  }

  return deckgl_premultiplied_alpha(fragColor);
}
`;function X(r){return r?B:$}const Y=`#version 300 es
#define SHADER_NAME column-layer-vertex-shader
in vec3 positions;
in vec3 normals;
in vec3 instancePositions;
in float instanceElevations;
in vec3 instancePositions64Low;
in vec4 instanceFillColors;
in vec4 instanceLineColors;
in float instanceStrokeWidths;
out vec4 vColor;
#ifdef FLAT_SHADING
out vec3 cameraPosition;
out vec4 position_commonspace;
#endif
void main(void) {
geometry.worldPosition = instancePositions;
vec4 color = column.isStroke ? instanceLineColors : instanceFillColors;
mat2 rotationMatrix = mat2(cos(column.angle), sin(column.angle), -sin(column.angle), cos(column.angle));
float elevation = 0.0;
float strokeOffsetRatio = 1.0;
if (column.extruded) {
elevation = instanceElevations * (positions.z + 1.0) / 2.0 * column.elevationScale;
} else if (column.stroked) {
float widthPixels = clamp(
project_size_to_pixel(instanceStrokeWidths * column.widthScale, column.widthUnits),
column.widthMinPixels, column.widthMaxPixels) / 2.0;
float halfOffset = project_pixel_size(widthPixels) / project_size(column.edgeDistance * column.coverage * column.radius);
if (column.isStroke) {
strokeOffsetRatio -= sign(positions.z) * halfOffset;
} else {
strokeOffsetRatio -= halfOffset;
}
}
float shouldRender = float(color.a > 0.0 && instanceElevations >= 0.0);
float dotRadius = column.radius * column.coverage * shouldRender;
geometry.pickingColor = picking_getPickingColorFromInstanceID();
vec3 centroidPosition = vec3(instancePositions.xy, instancePositions.z + elevation);
vec3 centroidPosition64Low = instancePositions64Low;
vec2 offset = (rotationMatrix * positions.xy * strokeOffsetRatio + column.offset) * dotRadius;
if (column.radiusUnits == UNIT_METERS) {
offset = project_size(offset);
} else if (column.radiusUnits == UNIT_PIXELS) {
offset = project_pixel_size(offset);
}
vec3 pos = vec3(offset, 0.);
DECKGL_FILTER_SIZE(pos, geometry);
gl_Position = project_position_to_clipspace(centroidPosition, centroidPosition64Low, pos, geometry.position);
geometry.normal = project_normal(vec3(rotationMatrix * normals.xy, normals.z));
DECKGL_FILTER_GL_POSITION(gl_Position, geometry);
if (column.extruded && !column.isStroke) {
#ifdef FLAT_SHADING
cameraPosition = project.cameraPosition;
position_commonspace = geometry.position;
vColor = vec4(color.rgb, color.a * layer.opacity);
#else
vec3 lightColor = lighting_getLightColor(color.rgb, project.cameraPosition, geometry.position.xyz, geometry.normal);
vColor = vec4(lightColor, color.a * layer.opacity);
#endif
} else {
vColor = vec4(color.rgb, color.a * layer.opacity);
}
DECKGL_FILTER_COLOR(vColor, geometry);
}
`,q=`#version 300 es
#define SHADER_NAME column-layer-fragment-shader
precision highp float;
out vec4 fragColor;
in vec4 vColor;
#ifdef FLAT_SHADING
in vec3 cameraPosition;
in vec4 position_commonspace;
#endif
void main(void) {
fragColor = vColor;
geometry.uv = vec2(0.);
#ifdef FLAT_SHADING
if (column.extruded && !column.isStroke && !bool(picking.isActive)) {
vec3 normal = normalize(cross(dFdx(position_commonspace.xyz), dFdy(position_commonspace.xyz)));
fragColor.rgb = lighting_getLightColor(vColor.rgb, cameraPosition, position_commonspace.xyz, normal);
}
#endif
DECKGL_FILTER_COLOR(fragColor, geometry);
}
`,x=[0,0,0,255],Z={name:"geometry",stepMode:"vertex",byteStride:24,attributes:[{attribute:"positions",format:"float32x3",byteOffset:0},{attribute:"normals",format:"float32x3",byteOffset:12}]},J={diskResolution:{type:"number",min:4,value:20},vertices:null,radius:{type:"number",min:0,value:1e3},angle:{type:"number",value:0},offset:{type:"array",value:[0,0]},coverage:{type:"number",min:0,max:1,value:1},elevationScale:{type:"number",min:0,value:1},radiusUnits:"meters",lineWidthUnits:"meters",lineWidthScale:1,lineWidthMinPixels:0,lineWidthMaxPixels:Number.MAX_SAFE_INTEGER,extruded:!0,wireframe:!1,filled:!0,stroked:!1,flatShading:!1,getPosition:{type:"accessor",value:r=>r.position},getFillColor:{type:"accessor",value:x},getLineColor:{type:"accessor",value:x},getLineWidth:{type:"accessor",value:1},getElevation:{type:"accessor",value:1e3},material:!0,getColor:{deprecatedFor:["getFillColor","getLineColor"]}};class L extends O{getShaders(){const e={},{flatShading:t}=this.props;return t&&(e.FLAT_SHADING=1),super.getShaders({vs:Y,fs:q,source:X(t),defines:e,modules:[R,z,t?E:A,G,K]})}initializeState(){this.getAttributeManager().addInstanced({instancePositions:{size:3,type:"float64",fp64:this.use64bitPositions(),transition:!0,accessor:"getPosition"},instanceElevations:{size:1,transition:!0,accessor:"getElevation"},instanceFillColors:{size:this.props.colorFormat.length,type:"unorm8",transition:!0,accessor:"getFillColor",defaultValue:x},instanceLineColors:{size:this.props.colorFormat.length,type:"unorm8",transition:!0,accessor:"getLineColor",defaultValue:x},instanceStrokeWidths:{size:1,accessor:"getLineWidth",transition:!0}})}updateState(e){var a;super.updateState(e);const{props:t,oldProps:o,changeFlags:i}=e,s=i.extensionsChanged||t.flatShading!==o.flatShading;s&&((a=this.state.models)==null||a.forEach(u=>u.destroy()),this.setState(this._getModels()),this.getAttributeManager().invalidateAll());const l=this.getNumInstances();this.state.fillModel.setInstanceCount(l),this.state.strokeModel.setInstanceCount(l),this.state.wireframeModel.setInstanceCount(l),(s||t.diskResolution!==o.diskResolution||t.vertices!==o.vertices||t.extruded!==o.extruded||t.stroked!==o.stroked)&&this._updateGeometry(t)}getGeometry(e,t,o){const i=new W({radius:1,height:o?2:0,vertices:t,nradial:e});let s=0;if(t)for(let l=0;l<e;l++){const a=t[l],u=Math.sqrt(a[0]*a[0]+a[1]*a[1]);s+=u/e}else s=1;return this.setState({edgeDistance:Math.cos(Math.PI/e)*s}),i}_getModels(){const e=this.getShaders(),t=[...this.getAttributeManager().getBufferLayouts(),Z],o=new _(this.context.device,{...e,id:`${this.props.id}-fill`,bufferLayout:t,isInstanced:!0}),i=new _(this.context.device,{...e,id:`${this.props.id}-stroke`,bufferLayout:t,isInstanced:!0}),s=new _(this.context.device,{...e,id:`${this.props.id}-wireframe`,bufferLayout:t,isInstanced:!0});return{fillModel:o,strokeModel:i,wireframeModel:s,models:[s,o,i]}}_updateGeometry({diskResolution:e,vertices:t,extruded:o,stroked:i}){const s=this.getGeometry(e,t,o||i),l=s.attributes.POSITION,a=s.attributes.NORMAL;if(this._setFillGeometry(new b({topology:"triangle-strip",attributes:{POSITION:l,NORMAL:a}})),!o&&i){const u=l.value.length/3;this._setStrokeGeometry(new b({topology:"triangle-strip",vertexCount:u-e-1,attributes:{POSITION:l,NORMAL:a}}))}o&&this._setWireframeGeometry(s)}_setFillGeometry(e){const t=M(e,{attributes:["POSITION","NORMAL"]});this.state.fillModel.setGeometry(t)}_setStrokeGeometry(e){const t=M(e,{attributes:["POSITION","NORMAL"]});this.state.strokeModel.setGeometry(t)}_setWireframeGeometry(e){const t=M(e,{attributes:["POSITION","NORMAL"]}),o=this.state.wireframeModel;o.setGeometry(t),o.setTopology("line-list")}draw({uniforms:e}){const{lineWidthUnits:t,lineWidthScale:o,lineWidthMinPixels:i,lineWidthMaxPixels:s,radiusUnits:l,elevationScale:a,extruded:u,filled:d,stroked:n,wireframe:p,offset:f,coverage:c,radius:m,angle:g}=this.props,v=this.state.fillModel,y=this.state.strokeModel,h=this.state.wireframeModel,{edgeDistance:I}=this.state,P={radius:m,angle:g/180*Math.PI,offset:f,extruded:u,stroked:n,coverage:c,elevationScale:a,edgeDistance:I,radiusUnits:C[l],widthUnits:C[t],widthScale:o,widthMinPixels:i,widthMaxPixels:s};u&&p&&(h.shaderInputs.setProps({column:{...P,isStroke:!0}}),h.draw(this.context.renderPass)),d&&(v.shaderInputs.setProps({column:{...P,isStroke:!1}}),v.draw(this.context.renderPass)),!u&&n&&(y.shaderInputs.setProps({column:{...P,isStroke:!0}}),y.draw(this.context.renderPass))}}L.layerName="ColumnLayer";L.defaultProps=J;export{L as C,U as W,F as m};
