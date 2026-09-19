import{p as m,U as W,G as F,D as _,af as d,w as M,y as ae,g as f,d as n,P as s,av as G,aw as ne,em as ce,aF as se,bl as D,bk as q,dc as le,ae as he,ja as ue,z as B,A as X,K as me,C as I,E as z,u as pe,B as N,h as de,ej as fe,v as j,q as Y,j as O,ag as we,aR as ve,aa as xe,ab as Q,cv as ge,aB as Z,ay as K,aC as ye,aE as Fe,aD as _e,q_ as Se,e as L,I as Ce}from"./cesium-utSEP5if.js";class S{constructor(e){this.commandType=e.commandType,this.geometry=e.geometry,this.attributeLocations=e.attributeLocations,this.primitiveType=e.primitiveType,this.uniformMap=e.uniformMap,this.vertexShaderSource=e.vertexShaderSource,this.fragmentShaderSource=e.fragmentShaderSource,this.rawRenderState=e.rawRenderState,this.framebuffer=e.framebuffer,this.outputTexture=e.outputTexture,this.autoClear=e.autoClear??!1,this.preExecute=e.preExecute,this.modelMatrix=e.modelMatrix??s.IDENTITY,this.show=!0,this.commandToExecute=void 0,this.clearCommand=void 0,this.autoClear&&(this.clearCommand=new xe({color:new W(0,0,0,0),depth:1,framebuffer:this.framebuffer,pass:Q.OPAQUE}))}createCommand(e){switch(this.commandType){case"Draw":{const t=Z.fromGeometry({context:e,geometry:this.geometry,attributeLocations:this.attributeLocations,bufferUsage:K.STATIC_DRAW}),i=ye.fromCache({context:e,attributeLocations:this.attributeLocations,vertexShaderSource:this.vertexShaderSource,fragmentShaderSource:this.fragmentShaderSource}),o=Fe.fromCache(this.rawRenderState);return new _e({owner:this,vertexArray:t,primitiveType:this.primitiveType,uniformMap:this.uniformMap,modelMatrix:this.modelMatrix,shaderProgram:i,framebuffer:this.framebuffer,renderState:o,pass:Q.OPAQUE})}case"Compute":return new ge({owner:this,fragmentShaderSource:this.fragmentShaderSource,uniformMap:this.uniformMap,outputTexture:this.outputTexture,persists:!0})}}setGeometry(e,t){this.geometry=t;const i=Z.fromGeometry({context:e,geometry:this.geometry,attributeLocations:this.attributeLocations,bufferUsage:K.STATIC_DRAW});this.commandToExecute.vertexArray=i}update(e){this.show&&(O(this.commandToExecute)||(this.commandToExecute=this.createCommand(e.context)),O(this.preExecute)&&this.preExecute(),O(this.clearCommand)&&e.commandList.push(this.clearCommand),e.commandList.push(this.commandToExecute))}isDestroyed(){return!1}destroy(){return O(this.commandToExecute)&&this.commandToExecute.shaderProgram&&this.commandToExecute.shaderProgram.destroy(),Se(this)}}class C{static loadText(e){const t=new XMLHttpRequest;return t.open("GET",e,!1),t.send(),t.responseText}static getFullscreenQuad(){return new de({attributes:new fe({position:new j({componentDatatype:Y.FLOAT,componentsPerAttribute:3,values:new Float32Array([-1,-1,0,1,-1,0,1,1,0,-1,1,0])}),st:new j({componentDatatype:Y.FLOAT,componentsPerAttribute:2,values:new Float32Array([0,0,1,0,1,1,0,1])})}),indices:new Uint32Array([3,2,0,0,2,1])})}static createTexture(e){if(O(e.arrayBufferView)){const t={};t.arrayBufferView=e.arrayBufferView,e.source=t}return new B(e)}static createFramebuffer(e,t,i){return new we({context:e,colorTextures:[t],depthTexture:i})}static createRawRenderState(e){const o={viewport:e.viewport,depthTest:e.depthTest,depthMask:e.depthMask,blending:e.blending};return ve.getDefaultRenderState(!0,!1,o)}}function Te(u=[0,0,0],e=[0,0,0],t=[1,1,1]){const i=s.fromRotationTranslation(L.fromRotationX(M.toRadians(e[0]))),o=s.fromRotationTranslation(L.fromRotationY(M.toRadians(e[1]))),c=s.fromRotationTranslation(L.fromRotationZ(M.toRadians(e[2])));let a;if(u instanceof n)a=u;else if(Array.isArray(u)&&u.length===3)a=n.fromDegrees(u[0],u[1],u[2]);else throw new Error("position 参数必须是 Cesium.Cartesian3 或长度为3的数组");const r=Ce.eastNorthUpToFixedFrame(a);s.multiply(r,i,r),s.multiply(r,o,r),s.multiply(r,c,r);const l=s.fromScale(new n(...t));return s.multiply(r,l,new s)}const T=`
const int textureSize = 256;
// Render
const vec3 backgroundColor = vec3(0.2);
// Terrain
const float transitionTime = 5.0;
const float transitionPercent = 0.3;
const int octaves = 7;
// Water simulation
const float attenuation = 0.995;
const float strenght = 0.25;
const float minTotalFlow = 0.0001;
const float initialWaterLevel = 0.0;

mat2 rot(in float ang)
{
 return mat2(
     cos(ang), -sin(ang),
     sin(ang), cos(ang));
}

// hash from Dave_Hoskins https://www.shadertoy.com/view/4djSRW
float hash12(vec2 p)
{
 vec3 p3 = fract(vec3(p.xyx) * .1031);
 p3 += dot(p3, p3.yzx + 33.33);
 return fract((p3.x + p3.y) * p3.z);
}

float hash13(vec3 p3)
{
 p3 = fract(p3 * .1031);
 p3 += dot(p3, p3.zyx + 31.32);
 return fract((p3.x + p3.y) * p3.z);
}

// Box intersection by IQ https://iquilezles.org/articles/boxfunctions

vec2 boxIntersection( in vec3 ro, in vec3 rd, in vec3 rad, out vec3 oN )
{
 vec3 m = 1.0 / rd;
 vec3 n = m * ro;
 vec3 k = abs(m) * rad;
 vec3 t1 = -n - k;
 vec3 t2 = -n + k;

 float tN = max( max( t1.x, t1.y ), t1.z );
 float tF = min( min( t2.x, t2.y ), t2.z );

 if( tN > tF || tF < 0.0) return vec2(-1.0); // no intersection

 oN = -sign(rd)*step(t1.yzx, t1.xyz) * step(t1.zxy, t1.xyz);

 return vec2( tN, tF );
}

vec2 hitBox(vec3 orig, vec3 dir) {
 const vec3 box_min = vec3(-0.5);
 const vec3 box_max = vec3(0.5);
 vec3 inv_dir = 1.0 / dir;
 vec3 tmin_tmp = (box_min - orig) * inv_dir;
 vec3 tmax_tmp = (box_max - orig) * inv_dir;
 vec3 tmin = min(tmin_tmp, tmax_tmp);
 vec3 tmax = max(tmin_tmp, tmax_tmp);
 float t0 = max(tmin.x, max(tmin.y, tmin.z));
 float t1 = min(tmax.x, min(tmax.y, tmax.z));
 return vec2(t0, t1);
}

// Fog by IQ https://iquilezles.org/articles/fog

vec3 applyFog( in vec3 rgb, vec3 fogColor, in float distance)
{
 float fogAmount = exp( -distance );
 return mix( fogColor, rgb, fogAmount );
}
`,Oe=`
// compute Terrain and update water level 1st pass
uniform sampler2D iChannel0;
uniform sampler2D iChannel1;
uniform sampler2D iChannel2;       // 外部传入的高度图纹理
uniform float   iTime;
uniform int   iFrame;
uniform vec2    iWaterSource;      // 加水位置（纹理空间 UV）
uniform float   iWaterStrength;    // 加水强度
uniform float   iHeightRange;      // 高度范围（用于归一化外部高度图）
float boxNoise( in vec2 p, in float z )
{
 vec2 fl = floor(p);
 vec2 fr = fract(p);
 fr = smoothstep(0.0, 1.0, fr);
 float res = mix(mix( hash13(vec3(fl, z)),       hash13(vec3(fl + vec2(1,0), z)),fr.x),
         mix( hash13(vec3(fl + vec2(0,1), z)), hash13(vec3(fl + vec2(1,1), z)),fr.x),fr.y);
 return res;
}

float Terrain( in vec2 p, in float z, in int octaveNum)
{
 float a = 1.0;
 float f = .0;
 for (int i = 0; i < octaveNum; i++)
 {
   f += a * boxNoise(p, z);
   a *= 0.45;
   p = 2.0 * rot(radians(41.0)) * p;
 }
 return f;
}

vec2 readHeight(ivec2 p)
{
 p = clamp(p, ivec2(0), ivec2(textureSize - 1));
 return texelFetch(iChannel0, p, 0).xy;
}

vec4 readOutFlow(ivec2 p)
{
 if(p.x < 0 || p.y < 0 || p.x >= textureSize || p.y >= textureSize)
   return vec4(0);
 return texelFetch(iChannel1, p, 0);
}

void main( )
{
 // Outside ?
 if( max(gl_FragCoord.x, gl_FragCoord.y) > float(textureSize) )
   discard;

 // Terrain - 优先使用外部传入的高度图，否则使用程序生成的地形
 vec2 uv = gl_FragCoord.xy / float(textureSize);

 // UV坐标变换以匹配深度图方向
 // 深度图渲染器: 正交相机从上往下看,UV.x=东西(West->East), UV.y=南北(South->North)
 // 流体模拟器: 绕X轴旋转90度后,XZ平面对应地面
 // 经过测试,不需要任何变换,直接使用原始UV
 vec2 heightMapUV = uv;

 vec4 heightMapSample = texture(iChannel2, heightMapUV);
 float terrainElevation;

 // 检查是否有有效的外部高度图
 // 深度图格式: UNSIGNED_SHORT,R通道存储归一化的高度值[0,1], Alpha通道=1.0表示有效数据
 if(heightMapSample.a > 0.5) {
   // 使用外部高度图
   // heightMapSample.r 已经是归一化的高度值 [0, 1]
   // 0 = 最低点, 1 = 最高点
   terrainElevation = heightMapSample.r;

 } else {
   // 降级使用程序生成的地形
   terrainElevation = Terrain(uv * 4.0, 0.0, octaves) * 0.5;
 }
 // Water
 float waterDept = initialWaterLevel;
 if(iFrame != 0)
 {
   ivec2 p = ivec2(gl_FragCoord.xy);
   vec2 height = readHeight(p);
   vec4 OutFlow = texelFetch(iChannel1, p, 0);
   float totalOutFlow = OutFlow.x + OutFlow.y + OutFlow.z + OutFlow.w;
   float totalInFlow = 0.0;
   totalInFlow += readOutFlow(p + ivec2( 1, 0)).z;
   totalInFlow += readOutFlow(p + ivec2( 0, 1)).w;
   totalInFlow += readOutFlow(p + ivec2(-1, 0)).x;
   totalInFlow += readOutFlow(p + ivec2( 0, -1)).y;
   waterDept = height.y - totalOutFlow + totalInFlow;
 }

 // 添加鼠标点击加水效果
 if(iWaterStrength > 0.0 && iWaterSource.x >= 0.0 && iWaterSource.y >= 0.0) {
   vec2 diff = uv - iWaterSource;
   float dist = length(diff);
   // 使用高斯分布在点击位置周围添加水
   float radius = 0.05; // 加水半径（纹理空间）
   float addWater = iWaterStrength * exp(-dist * dist / (radius * radius));
   waterDept += addWater;
 }

 out_FragColor = vec4(terrainElevation, waterDept, 0, 1);
}
`,Me=`
// Update Outflow 1st pass
uniform sampler2D iChannel0;
uniform sampler2D iChannel1;
uniform float   iTime;
uniform int   iFrame;
vec2 readHeight(ivec2 p)
{
 p = clamp(p, ivec2(0), ivec2(textureSize - 1));
 return texelFetch(iChannel0, p, 0).xy;
}

float computeOutFlowDir(vec2 centerHeight, ivec2 pos)
{
 vec2 dirHeight = readHeight(pos);
 return max(0.0f, (centerHeight.x + centerHeight.y) - (dirHeight.x + dirHeight.y));
}

void main()
{
 ivec2 p = ivec2(gl_FragCoord.xy);
 // Init to zero at frame 0
 if(iFrame == 0)
 {
   out_FragColor = vec4(0);
   return;
 }

 // Outside ?
 if( max(p.x, p.y) > textureSize )
   discard;


   vec4 oOutFlow = texelFetch(iChannel1, p, 0);
 vec2 height = readHeight(p);
 vec4 nOutFlow;
 nOutFlow.x = computeOutFlowDir(height, p + ivec2( 1, 0));
 nOutFlow.y = computeOutFlowDir(height, p + ivec2( 0, 1));
 nOutFlow.z = computeOutFlowDir(height, p + ivec2(-1, 0));
 nOutFlow.w = computeOutFlowDir(height, p + ivec2( 0, -1));
 nOutFlow = attenuation * oOutFlow + strenght * nOutFlow;
 float totalFlow = nOutFlow.x + nOutFlow.y + nOutFlow.z + nOutFlow.w;
 if(totalFlow > minTotalFlow)
 {
   if(height.y < totalFlow)
   {
     nOutFlow = nOutFlow * (height.y / totalFlow);
   }
 }
 else
 {
   nOutFlow = vec4(0);
 }


 out_FragColor = nOutFlow;
}
`,Ae=`
// water level 2nd pass
uniform sampler2D iChannel0;
uniform sampler2D iChannel1;
uniform float   iTime;
uniform int   iFrame;
vec2 readHeight(ivec2 p)
{
 p = clamp(p, ivec2(0), ivec2(textureSize - 1));
 return texelFetch(iChannel0, p, 0).xy;
}

vec4 readOutFlow(ivec2 p)
{
 if(p.x < 0 || p.y < 0 || p.x >= textureSize || p.y >= textureSize)
   return vec4(0);
 return texelFetch(iChannel1, p, 0);
}

void main( )
{
 // Outside ?
 if( max(gl_FragCoord.x, gl_FragCoord.y) > float(textureSize) )
   discard;

 // Water
 ivec2 p = ivec2(gl_FragCoord.xy);
 vec2 height = readHeight(p);
 vec4 OutFlow = texelFetch(iChannel1, p, 0);
 float totalOutFlow = OutFlow.x + OutFlow.y + OutFlow.z + OutFlow.w;
 float totalInFlow = 0.0;
 totalInFlow += readOutFlow(p + ivec2( 1, 0)).z;
 totalInFlow += readOutFlow(p + ivec2( 0, 1)).w;
 totalInFlow += readOutFlow(p + ivec2(-1, 0)).x;
 totalInFlow += readOutFlow(p + ivec2( 0, -1)).y;
 float waterDept = height.y - totalOutFlow + totalInFlow;

 out_FragColor = vec4(height.x, waterDept, 0, 1);
}
`,De=`
// Update Outflow 2nd pass
uniform sampler2D iChannel0;
uniform sampler2D iChannel1;
uniform float   iTime;
uniform int   iFrame;
vec2 readHeight(ivec2 p)
{
 p = clamp(p, ivec2(0), ivec2(textureSize - 1));
 return texelFetch(iChannel0, p, 0).xy;
}

float computeOutFlowDir(vec2 centerHeight, ivec2 pos)
{
 vec2 dirHeight = readHeight(pos);
 return max(0.0f, (centerHeight.x + centerHeight.y) - (dirHeight.x + dirHeight.y));
}

void main( )
{
 ivec2 p = ivec2(gl_FragCoord.xy);

 // Outside ?
 if( max(p.x, p.y) > textureSize )
   discard;


   vec4 oOutFlow = texelFetch(iChannel1, p, 0);
 vec2 height = readHeight(p);
 vec4 nOutFlow;
 nOutFlow.x = computeOutFlowDir(height, p + ivec2( 1, 0));
 nOutFlow.y = computeOutFlowDir(height, p + ivec2( 0, 1));
 nOutFlow.z = computeOutFlowDir(height, p + ivec2(-1, 0));
 nOutFlow.w = computeOutFlowDir(height, p + ivec2( 0, -1));
 nOutFlow = attenuation * oOutFlow + strenght * nOutFlow;
 float totalFlow = nOutFlow.x + nOutFlow.y + nOutFlow.z + nOutFlow.w;
 if(totalFlow > minTotalFlow)
 {
   if(height.y < totalFlow)
   {
     nOutFlow = nOutFlow * (height.y / totalFlow);
   }
 }
 else
 {
   nOutFlow = vec4(0);
 }


 out_FragColor = nOutFlow;
}
`,ze=`
// Created by David Gallardo - xjorma/2021
// License Creative Commons Attribution-NonCommercial-ShareAlike 3.0
#define AA
#define GAMMA 1
uniform sampler2D iChannel0;
uniform sampler2D iChannel1;
uniform vec2   iResolution;
uniform float   iTime;
uniform int   iFrame;
uniform vec4   iWaterColor;
in vec3 vo;
in vec3 vd;
in vec2 v_st;
const vec3 light = vec3(0.,4.,2.);
const float boxHeight = 0.45;
vec2 getHeight(in vec3 p)
{
 // p 的范围是 [-0.5, 0.5]，转换到 [0, 1]
 vec2 uv = p.xy + 0.5;
 // 直接使用 uv 采样（已经在 [0,1] 范围内）
 vec2 h = texture(iChannel0, uv).xy;
 h.y += h.x;
 // 将高度从 [0, 1] 映射回模型空间 [-0.5, 0.5]
 // p.z 是模型空间的高度坐标
 return h - 0.5;
}

vec3 getNormal(in vec3 p, int comp)
{
 float d = 2.0 / float(textureSize);
 float hMid = getHeight(p)[comp];
 float hRight = getHeight(p + vec3(d, 0, 0))[comp];
 float hTop = getHeight(p + vec3(0, d, 0))[comp];
 // 在 ENU 坐标系中：X-东, Y-北, Z-高度
 // 切线向量：dX方向 = (d, 0, hRight-hMid), dY方向 = (0, d, hTop-hMid)
 // 法线 = cross(dX, dY) 指向上方
 vec3 tangentX = vec3(d, 0, hRight - hMid);
 vec3 tangentY = vec3(0, d, hTop - hMid);
 return normalize(cross(tangentX, tangentY));
}

vec3 terrainColor(in vec3 p, in vec3 n, out float spec)
{
 spec = 0.1;
 // 基础草地颜色
 vec3 c = vec3(0.21, 0.50, 0.07);

 // 悬崖效果：当法线的Z分量（向上）较小时，表示陡峭的悬崖
 float cliff = smoothstep(0.8, 0.3, n.z);
 c = mix(c, vec3(0.25), cliff);
 spec = mix(spec, 0.3, cliff);

 // 雪效果：高海拔 + 平坦表面
 float snow = smoothstep(0.05, 0.25, p.z) * smoothstep(0.5, 0.7, n.z);
 c = mix(c, vec3(0.95, 0.95, 0.85), snow);
 spec = mix(spec, 0.4, snow);

 // 纹理采样：将模型空间 [-0.5, 0.5] 转换到 [0, 1]
 vec2 texUV = p.xy + 0.5;
 vec3 t = texture(iChannel1, texUV * 3.0).xyz;

 // 修复：使用叠加混合而不是相乘，避免纹理变黑
 // 如果纹理有效（不全黑），用它调制基础颜色
 // 使用 (t * 0.5 + 0.5) 将纹理值映射到 [0.5, 1.5] 范围，避免全黑
 vec3 texModulated = c * (t * 0.5 + 0.5);

 // 只在纹理有明显数据时才混合，否则保持基础颜色
 float texStrength = length(t) > 0.1 ? 0.2 : 0.0;
 return mix(c, texModulated, texStrength);
}

vec3 undergroundColor(float d)
{
 vec3 color[4] = vec3[](vec3(0.5, 0.45, 0.5), vec3(0.40, 0.35, 0.25), vec3(0.55, 0.50, 0.4), vec3(0.45, 0.30, 0.20));
 d *= 6.0;
 d = min(d, 3.0 - 0.001);
 float fr = fract(d);
 float fl = floor(d);
 return mix(color[int(fl)], color[int(fl) + 1], fr);
}



vec3 Render(in vec3 ro, in vec3 rd) {
 vec3 n;
 vec3 rayDir = normalize(rd);
 vec2 ret = hitBox(ro, rayDir);
 if (ret.x > ret.y) discard;
 ret.x = max(ret.x, 0.0);
 vec3 p = ro + ret.x * rayDir;

 if(ret.x > 0.0) {
   vec3 pi = ro + rd * ret.x;
   vec3 tc;
   vec3 tn;
   float tt = ret.x;
   vec2 h = getHeight(pi);
   float spec;
   if(pi.z < h.x) {
     tn = n;
     tc = undergroundColor(h.x - pi.z);
   }
   else {
     for (int i = 0; i < 80; i++) {
       vec3 p = ro + rd * tt;
       float h = p.z - getHeight(p).x;
       if (h < 0.0002 || tt > ret.y)
       break;
       tt += h * 0.4;
     }
     tn = getNormal(ro + rd * tt, 0);
     tc = terrainColor(ro + rd * tt, tn, spec);
   }
   {
     vec3 lightDir = normalize(light - (ro + rd * tt));
     tc = tc * (max( 0.0, dot(lightDir, tn)) + 0.3);
     spec *= pow(max(0., dot(lightDir, reflect(rd, tn))), 10.0);
     tc += spec;
   }
   if(tt > ret.y) {
     tc = iWaterColor.rgb;
   }
   float wt = ret.x;
   h = getHeight(pi);
   vec3 waterNormal;
   if(pi.z < h.y) {
     waterNormal = n;
   }
   else {
     for (int i = 0; i < 80; i++) {
       vec3 p = ro + rd * wt;
       float h = p.z - getHeight(p).y;
       if (h < 0.0002 || wt > min(tt, ret.y))
       break;
       wt += h * 0.4;
     }
     waterNormal = getNormal(ro + rd * wt, 1);
   }
   if(wt < ret.y) {
     float dist = (min(tt, ret.y) - wt);
     vec3 p = waterNormal;
     vec3 lightDir = normalize(light - (ro + rd * wt));
     tc = applyFog( tc, iWaterColor.rgb, dist * 15.0);
     float spec = pow(max(0., dot(lightDir, reflect(rd, waterNormal))), 20.0);
     tc += 0.5 * spec * smoothstep(0.0, 0.1, dist);
   }else{
     discard;
   }
   return tc;
 }
 discard;
}

vec3 vignette(vec3 color, vec2 q, float v)
{
 color *= 0.3 + 0.8 * pow(16.0 * q.x * q.y * (1.0 - q.x) * (1.0 - q.y), v);
 return color;
}


void main()
{
 vec3 tot = vec3(0.0);
 vec3 rayDir = normalize(vd);
 vec3 col = Render(vo, rayDir);
 tot += col;

 // 计算正确的深度值用于深度测试
 vec2 ret = hitBox(vo, rayDir);
 if (ret.x > ret.y) discard;
 ret.x = max(ret.x, 0.0);

 // 计算水面交点
 float wt = ret.x;
 vec3 pi = vo + rayDir * ret.x;
 vec2 h = getHeight(pi);

 if(pi.z < h.y) {
   // 视线起点在水下，使用入口点
 } else {
   // 视线起点在水上，计算水面交点
   for (int i = 0; i < 80; i++) {
     vec3 p = vo + rayDir * wt;
     float height = p.z - getHeight(p).y;
     if (height < 0.0002 || wt > ret.y)
       break;
     wt += height * 0.4;
   }
 }

 // 将世界空间点转换到裁剪空间以写入正确的深度
 if(wt < ret.y) {
   vec3 worldPos = vo + rayDir * wt;
   vec4 clipPos = czm_modelViewProjection * vec4(worldPos, 1.0);
   float depthValue = clipPos.z / clipPos.w;
   gl_FragDepth = (depthValue + 1.0) * 0.5; // 转换到 [0, 1] 范围
 } else {
   discard;
 }

 out_FragColor = vec4( tot, 1.0 );
}
`;class be{constructor(e,t){this._waterSourcePosition=new m(-1,-1),this._waterSourceStrength=0,this._primitives=[],this.option=t,this._viewer=e,this._waterColor=t.waterColor||new W(.2,.5,.8,.6),this._width=256,this._height=256,this._resolution=new m(this._width,this._height),this.initShaderToy()}async initShaderToy(){const e=this._viewer.scene.context,t=C.createTexture({context:e,width:this._width,height:this._height,pixelFormat:_.RGBA,pixelDatatype:F.FLOAT,arrayBufferView:new Float32Array(this._width*this._height*4)}),i=C.createTexture({context:e,width:this._width,height:this._height,pixelFormat:_.RGBA,pixelDatatype:F.FLOAT,arrayBufferView:new Float32Array(this._width*this._height*4)}),o=C.createTexture({context:e,width:this._width,height:this._height,pixelFormat:_.RGBA,pixelDatatype:F.FLOAT,arrayBufferView:new Float32Array(this._width*this._height*4)}),c=C.createTexture({context:e,width:this._width,height:this._height,pixelFormat:_.RGBA,pixelDatatype:F.FLOAT,arrayBufferView:new Float32Array(this._width*this._height*4)}),a=C.getFullscreenQuad();let r=1,l=0;const p=new S({commandType:"Compute",uniformMap:{iTime:()=>r,iFrame:()=>l,resolution:()=>this._resolution,iChannel0:()=>o,iChannel1:()=>c,iChannel2:()=>this._heightMapTexture||this._viewer.scene.frameState.context.defaultTexture,iWaterSource:()=>this._waterSourcePosition,iWaterStrength:()=>this._waterSourceStrength,iHeightRange:()=>{const V=this.option.heightRange||[0,2e3];return V[1]-V[0]}},fragmentShaderSource:new d({sources:[T,Oe]}),geometry:a,outputTexture:t,preExecute:function(){p.commandToExecute.outputTexture=t}});this._bufferA=p;const w=new S({commandType:"Compute",uniformMap:{iTime:()=>r,iFrame:()=>l,resolution:()=>this._resolution,iChannel0:()=>t,iChannel1:()=>c},fragmentShaderSource:new d({sources:[T,Me]}),geometry:a,outputTexture:i,preExecute:function(){w.commandToExecute.outputTexture=i}}),v=new S({commandType:"Compute",uniformMap:{iTime:()=>r,iFrame:()=>l,resolution:()=>this._resolution,iChannel0:()=>t,iChannel1:()=>i},fragmentShaderSource:new d({sources:[T,Ae]}),geometry:a,outputTexture:o,preExecute:function(){v.commandToExecute.outputTexture=o}}),x=new S({commandType:"Compute",uniformMap:{iTime:()=>r,iFrame:()=>l,resolution:()=>this._resolution,iChannel0:()=>o,iChannel1:()=>i},fragmentShaderSource:new d({sources:[T,De]}),geometry:a,outputTexture:c,preExecute:function(){x.commandToExecute.outputTexture=c}}),A=await this._initTerrain(),h=this.option.rectangle,g=M.toDegrees((h.west+h.east)/2),R=M.toDegrees((h.north+h.south)/2),y=ae.WGS84,U=f.toCartesian(new f(h.west,h.north,0),y),J=f.toCartesian(new f(h.east,h.north,0),y),$=f.toCartesian(new f(h.west,h.south,0),y),ee=n.distance(U,J),te=n.distance(U,$),b=this.option.heightRange||[0,2e3],E=b[1]-b[0],k=new n(ee,te,E),H=Te([g,R,b[0]+E/2],[0,0,0],[k.x,k.y,E]);this._modelMatrix=H,this._inverseModelMatrix=s.inverse(H,new s);const ie=G.fromDimensions({vertexFormat:ne.POSITION_AND_ST,dimensions:new n(1,1,1)}),P=G.createGeometry(ie),re=P?ce.createAttributeLocations(P):void 0,oe=new S({commandType:"Draw",uniformMap:{iTime:()=>r,iFrame:()=>l,iResolution:()=>this._resolution,iChannel0:()=>o,iChannel1:()=>A,iWaterColor:()=>new he(this._waterColor.red,this._waterColor.green,this._waterColor.blue,this._waterColor.alpha)},geometry:P,modelMatrix:H,attributeLocations:re,rawRenderState:{depthTest:{enabled:!0,func:le.LESS_OR_EQUAL},depthMask:!0,blending:{enabled:!0,equationRgb:q.ADD,equationAlpha:q.ADD,functionSourceRgb:D.SOURCE_ALPHA,functionSourceAlpha:D.ONE,functionDestinationRgb:D.ONE_MINUS_SOURCE_ALPHA,functionDestinationAlpha:D.ONE_MINUS_SOURCE_ALPHA},cull:{enabled:!0,face:se.BACK}},vertexShaderSource:new d({sources:[`
          in vec3 position;  // 顶点位置
          in vec2 st;        // 纹理坐标

          out vec3 vo;       // 输出：视线原点（相机位置）
          out vec3 vd;       // 输出：视线方向
          out vec2 v_st;     // 输出：纹理坐标

          void main()
          {
              // 计算相机位置（高精度）
              vo = czm_encodedCameraPositionMCHigh + czm_encodedCameraPositionMCLow;
              // 计算视线方向（从相机到顶点）
              vd = position - vo;
              // 传递纹理坐标
              v_st = st;
              // 计算裁剪空间位置
              gl_Position = czm_modelViewProjection * vec4(position,1.0);
          }
        `]}),fragmentShaderSource:new d({sources:[T+ze]})});this._viewer.scene.postRender.addEventListener(()=>{r=performance.now()/1e3,l+=.02}),this._primitives.push(this._viewer.scene.primitives.add(p)),this._primitives.push(this._viewer.scene.primitives.add(w)),this._primitives.push(this._viewer.scene.primitives.add(v)),this._primitives.push(this._viewer.scene.primitives.add(x)),this._primitives.push(this._viewer.scene.primitives.add(oe))}async _initTerrain(){try{console.log("🔄 开始加载流体地形表面纹理: /images/fluid.jpg");const e=await ue.fetchImage({url:"/images/fluid.jpg"});e&&console.log("📐 纹理图片尺寸:",e.width,"x",e.height);const t=new B({context:this._viewer.scene.frameState.context,source:e,sampler:new X({wrapS:z.REPEAT,wrapT:z.REPEAT,magnificationFilter:I.LINEAR,minificationFilter:me.LINEAR_MIPMAP_LINEAR})});return t.generateMipmap(),console.log("✅ 流体地形表面纹理加载成功，纹理ID:",t._id),t}catch(e){console.error("❌ 流体地形表面纹理加载失败，创建白色默认纹理:",e);const t=64,i=new Uint8Array(t*t*4);for(let c=0;c<t;c++)for(let a=0;a<t;a++){const r=(c*t+a)*4,l=(a>>3)+(c>>3)&1?220:180;i[r]=l,i[r+1]=l,i[r+2]=l,i[r+3]=255}const o=new B({context:this._viewer.scene.frameState.context,source:{width:t,height:t,arrayBufferView:i},pixelFormat:_.RGBA,pixelDatatype:F.UNSIGNED_BYTE,sampler:new X({wrapS:z.REPEAT,wrapT:z.REPEAT,magnificationFilter:I.LINEAR,minificationFilter:I.LINEAR})});return console.log("✅ 后备棋盘格纹理创建成功"),o}}enableWaterInput(e=.02){this._clickHandler||(this._clickHandler=new pe(this._viewer.scene.canvas),this._clickHandler.setInputAction(t=>{this._handleMouseClick(t.position,e)},N.LEFT_DOWN),this._clickHandler.setInputAction(t=>{this._waterSourceStrength>0&&this._handleMouseClick(t.endPosition,e)},N.MOUSE_MOVE),this._clickHandler.setInputAction(()=>{this._waterSourceStrength=0,this._waterSourcePosition=new m(-1,-1)},N.LEFT_UP))}disableWaterInput(){this._clickHandler&&(this._clickHandler.destroy(),this._clickHandler=void 0,this._waterSourceStrength=0,this._waterSourcePosition=new m(-1,-1))}_handleMouseClick(e,t){if(!this._modelMatrix||!this._inverseModelMatrix)return;const i=this._viewer.camera.getPickRay(e);if(!i)return;const o=this._rayBoxIntersection(i);if(!o)return;const c=s.multiplyByPoint(this._inverseModelMatrix,o,new n),a=c.x+.5,r=c.y+.5;a>=0&&a<=1&&r>=0&&r<=1&&(this._waterSourcePosition=new m(a,r),this._waterSourceStrength=t)}_rayBoxIntersection(e){if(!this._modelMatrix)return null;const t=this._inverseModelMatrix,i=s.multiplyByPoint(t,e.origin,new n),o=s.multiplyByPointAsVector(t,e.direction,new n);n.normalize(o,o);const c=new n(-.5,-.5,-.5),a=new n(.5,.5,.5),r=new n(1/o.x,1/o.y,1/o.z),l=(c.x-i.x)*r.x,p=(a.x-i.x)*r.x,w=(c.y-i.y)*r.y,v=(a.y-i.y)*r.y,x=(c.z-i.z)*r.z,A=(a.z-i.z)*r.z,h=Math.max(Math.max(Math.min(l,p),Math.min(w,v)),Math.min(x,A)),g=Math.min(Math.min(Math.max(l,p),Math.max(w,v)),Math.max(x,A));if(g<0||h>g)return null;const R=h>0?h:g,y=n.add(i,n.multiplyByScalar(o,R,new n),new n);return s.multiplyByPoint(this._modelMatrix,y,new n)}addWaterAt(e,t,i=.02){e>=0&&e<=1&&t>=0&&t<=1&&(this._waterSourcePosition=new m(e,t),this._waterSourceStrength=i)}stopAddingWater(){this._waterSourceStrength=0,this._waterSourcePosition=new m(-1,-1)}updateHeightMap(e){if(!e){console.error("❌ 高度图纹理无效");return}this._heightMapTexture=e,console.log("✅ 流体模拟器已更新地形高度图")}updateHeightMapFromDepthMapRenderer(e){if(!e||!e.texture){console.error("❌ 深度图结果无效，无法更新流体地形");return}this.updateHeightMap(e.texture)}getHeightMapTexture(){return this._heightMapTexture}setWaterColor(e){Array.isArray(e)?this._waterColor=new W(e[0],e[1],e[2],e[3]):this._waterColor=e.clone()}getWaterColor(){return this._waterColor.clone()}destroy(){try{this.disableWaterInput();for(const e of this._primitives)try{this._viewer.scene.primitives.remove(e)}catch(t){console.warn("⚠️ 移除渲染原始体时出错:",t)}if(this._primitives=[],this._heightMapTexture){if(typeof this._heightMapTexture.isDestroyed=="function"&&!this._heightMapTexture.isDestroyed())try{this._heightMapTexture.destroy()}catch(e){console.warn("⚠️ 高度图纹理销毁时出错:",e)}this._heightMapTexture=void 0}this._modelMatrix=void 0,this._inverseModelMatrix=void 0,this._waterSourcePosition=new m(-1,-1),this._waterSourceStrength=0,console.log("✅ FluidDemo 资源已清理")}catch(e){console.error("❌ FluidDemo 销毁时出错:",e)}}}export{be as F};
