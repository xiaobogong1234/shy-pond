import{E as q}from"./el-button-BIufFjLp.js";import"./el-select-DHZScApW.js";import{o as J,l as W,h as P,y as K,r as Y,_ as Z,c as ee,a as v,w as k,b as h,t as S,p as z,f as te,g as I}from"./index-9vIL5KkC.js";import{P as ie,d as E,I as ae,A as N,K as B,C as U,G,D as $,z as M,ag as V,aE as H,bo as se,aC as O,aD as X,R as Q,az as b,ay as C,aB as j,q as A,ab as ne,bn as oe,aA as re}from"./cesium-utSEP5if.js";import{G as de}from"./index-DRCmDxZs.js";import le from"./ConfigPanel-BclLAqzI.js";import"./index-ANLxL66K.js";import"./use-global-config-DaIFvEHd.js";import"./_commonjsHelpers-gnU0ypJ3.js";import"./cesium2s-TV_G_QRL.js";import"./index-CtVsJ-X_.js";import"./fullscreenPopper-CpT4yrsP.js";import"./services-CwmS6buH.js";import"./el-color-picker-Gb65Y4tk.js";let ce=class{constructor(i,e={}){this.particlesTextureSize=256,this.particlesCount=this.particlesTextureSize*this.particlesTextureSize,this.bounds={minLon:110,maxLon:120,minLat:20,maxLat:30,minHeight:0,maxHeight:1e4},this.gridDimensions={x:32,y:32,z:16},this.windTexture=null,this.particlesTextures=[],this.velocityTextures=[],this.framebuffers=[],this.particleState=0,this.primitives={update:null,draw:null},this.maxWindSpeed=20,this.initialized=!1,this.dataSource="fake",this._windDataCache=null,this._centerLonRad=0,this._centerLatRad=0,this._needsRebuild=!1,this._fullscreenQuadVA=null,this._isDestroyed=!1,this.viewer=i,this.scene=i.scene,this.context=this.scene.context,this.particlesTextureSize=256,this.particlesCount=this.particlesTextureSize*this.particlesTextureSize,this.bounds={minLon:e.minLon??110,maxLon:e.maxLon??120,minLat:e.minLat??20,maxLat:e.maxLat??30,minHeight:0,maxHeight:1e4},this.gridDimensions={x:32,y:32,z:16},this.windTexture=null,this.particlesTextures=[],this.velocityTextures=[],this.framebuffers=[],this.particleState=0,this.primitives={update:null,draw:null},this.maxWindSpeed=20,this.initialized=!1,this._windThickness=e.windThickness??1e5,this._windThicknessManual=e.windThickness!==void 0,this.speedFactor=e.speedFactor??.1,this.cullSpeedMin=e.cullSpeedMin??0,this.cullSpeedMax=e.cullSpeedMax??200,this.windSpeedMin=e.windSpeedMin??0,this.windSpeedMax=e.windSpeedMax??20,this.arrowLength=e.arrowLength??15e4,this.trailLength=e.trailLength??2e4,this.decaySpeed=e.decaySpeed??.005,this.alphaFactor=e.alphaFactor??1,this.dataSource="fake",this._windDataCache=null,this._modelMatrix=ie.IDENTITY.clone(),this._centerCartesian=new E,this._centerLonRad=0,this._centerLatRad=0,this._needsRebuild=!1,this._updateTransform(),this.init()}get windThickness(){return this._windThickness}set windThickness(i){this._windThickness=Number(i),this._windThicknessManual=!0,this._updateTransform()}init(){const i=this.generateFakeWindData();this.createWindTexture(i),this.createParticleTextures()}_updateTransform(){const i=(this.bounds.minLon+this.bounds.maxLon)/2,e=(this.bounds.minLat+this.bounds.maxLat)/2,t=this._windThickness/2,s=E.fromDegrees(i,e,t);this._modelMatrix=ae.eastNorthUpToFixedFrame(s),this._centerCartesian=s.clone(),this._centerLonRad=i*Math.PI/180,this._centerLatRad=e*Math.PI/180,this.primitives.draw&&(this.primitives.draw.modelMatrix=this._modelMatrix)}generateFakeWindData(){const{x:i,y:e,z:t}=this.gridDimensions,s=new Float32Array(i*e*t*4);for(let a=0;a<t;a++)for(let o=0;o<e;o++)for(let n=0;n<i;n++){const l=(a*e*i+o*i+n)*4,r=n/i*2-1,c=-(o/e*2-1)*20+(Math.random()-.5)*5,m=r*20+(Math.random()-.5)*5,u=(Math.random()-.5)*2;s[l]=c,s[l+1]=m,s[l+2]=u,s[l+3]=0}return s}createWindTexture(i){const{x:e,y:t,z:s}=this.gridDimensions;if(this.context.webgl2){const a=this.context._gl,o=a.createTexture();a.bindTexture(a.TEXTURE_3D,o),a.texParameteri(a.TEXTURE_3D,a.TEXTURE_MIN_FILTER,a.LINEAR),a.texParameteri(a.TEXTURE_3D,a.TEXTURE_MAG_FILTER,a.LINEAR),a.texParameteri(a.TEXTURE_3D,a.TEXTURE_WRAP_S,a.CLAMP_TO_EDGE),a.texParameteri(a.TEXTURE_3D,a.TEXTURE_WRAP_T,a.CLAMP_TO_EDGE),a.texParameteri(a.TEXTURE_3D,a.TEXTURE_WRAP_R,a.CLAMP_TO_EDGE),a.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,!1),a.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),a.texImage3D(a.TEXTURE_3D,0,a.RGBA16F,e,t,s,0,a.RGBA,a.FLOAT,i),this.windTexture={_texture:o,_target:a.TEXTURE_3D,destroy:()=>{a.deleteTexture(o)}}}else console.error("Wind3D requires WebGL 2 for 3D Textures.")}createParticleTextures(){const i=this.particlesTextureSize,e=i*i,t=new Float32Array(e*4);for(let n=0;n<e;n++)t[n*4]=Math.random(),t[n*4+1]=Math.random(),t[n*4+2]=Math.random(),t[n*4+3]=Math.random();const s={context:this.context,width:i,height:i,pixelFormat:$.RGBA,pixelDatatype:G.FLOAT,source:{arrayBufferView:t},sampler:new N({minificationFilter:B.NEAREST,magnificationFilter:U.NEAREST})};this.particlesTextures.push(new M(s)),this.particlesTextures.push(new M(s));const a=new Float32Array(e*4),o={context:this.context,width:i,height:i,pixelFormat:$.RGBA,pixelDatatype:G.FLOAT,source:{arrayBufferView:a},sampler:new N({minificationFilter:B.NEAREST,magnificationFilter:U.NEAREST})};this.velocityTextures.push(new M(o)),this.velocityTextures.push(new M(o))}setParticleCount(i){const e=Math.max(16,Math.min(512,Math.pow(2,Math.round(Math.log2(Math.sqrt(i))))));e!==this.particlesTextureSize&&(this.particlesTextureSize=e,this.particlesCount=e*e,this.particlesTextures.forEach(t=>t.destroy()),this.particlesTextures=[],this.velocityTextures.forEach(t=>t.destroy()),this.velocityTextures=[],this.framebuffers.forEach(t=>t.destroy()),this.framebuffers=[],this.createParticleTextures(),this._needsRebuild=!0,console.log(`Wind3D: Particle count set to ${this.particlesCount} (texture ${e}×${e})`))}update(i){if(!this.windTexture)return;(!this.primitives.update||this._needsRebuild)&&(this._needsRebuild=!1,this.createCommands(i.context)),this.framebuffers.length===0&&(this.framebuffers.push(new V({context:this.context,colorTextures:[this.particlesTextures[0],this.velocityTextures[0]],destroyAttachments:!1})),this.framebuffers.push(new V({context:this.context,colorTextures:[this.particlesTextures[1],this.velocityTextures[1]],destroyAttachments:!1})));const e=this.framebuffers[1-this.particleState];this.primitives.update.framebuffer=e,this.primitives.update.execute(i.context),i.commandList.push(this.primitives.draw),this.particleState=1-this.particleState}createCommands(i){console.log("Wind3D: createCommands");const e=`#version 300 es
            precision highp float;
            uniform sampler2D currentParticlesPosition;
            uniform highp sampler3D windTexture;
            uniform float speedFactor;
            uniform float maxWindSpeed;
            uniform float decaySpeed;

            in vec2 v_textureCoordinates;
            layout(location = 0) out vec4 positionOut;
            layout(location = 1) out vec4 velocityOut;

            void main() {
                vec4 particle = texture(currentParticlesPosition, v_textureCoordinates);
                vec3 pos = particle.xyz;
                float packed = particle.w;
                float age = fract(packed);

                age += decaySpeed;
                if (age > 1.0) {
                    age = 0.0;
                    pos = vec3(
                        fract(v_textureCoordinates.x * 12.9898 + v_textureCoordinates.y * 78.233),
                        fract(v_textureCoordinates.x * 53.541 + v_textureCoordinates.y * 12.123),
                        fract(v_textureCoordinates.x * 91.421 + v_textureCoordinates.y * 31.751)
                    );
                }

                vec3 windVector = texture(windTexture, pos).xyz;
                float speed = length(windVector);
                float normalizedSpeed = clamp(speed / maxWindSpeed, 0.0, 1.0);

                pos += windVector * speedFactor * 0.001;

                if (pos.x < 0.0) pos.x += 1.0;
                if (pos.x > 1.0) pos.x -= 1.0;
                if (pos.y < 0.0) pos.y += 1.0;
                if (pos.y > 1.0) pos.y -= 1.0;
                if (pos.z < 0.0) pos.z += 1.0;
                if (pos.z > 1.0) pos.z -= 1.0;

                positionOut = vec4(pos, floor(normalizedSpeed * 255.0) + age);
                velocityOut = vec4(windVector, 0.0);
            }
        `,t=`#version 300 es
        in vec2 position;
        in vec2 textureCoordinates;
        out vec2 v_textureCoordinates;
        void main() {
            gl_Position = vec4(position, 0.0, 1.0);
            v_textureCoordinates = textureCoordinates;
        }
    `,s=H.fromCache({viewport:new se(0,0,this.particlesTextureSize,this.particlesTextureSize)}),a=O.fromCache({context:i,vertexShaderSource:t,fragmentShaderSource:e,attributeLocations:{position:0,textureCoordinates:1}});this.primitives.update=new X({vertexArray:this.createFullscreenQuad(i),primitiveType:Q.TRIANGLES,renderState:s,shaderProgram:a,uniformMap:{currentParticlesPosition:()=>this.particlesTextures[this.particleState],windTexture:()=>this.windTexture,speedFactor:()=>this.speedFactor,maxWindSpeed:()=>this.maxWindSpeed,decaySpeed:()=>this.decaySpeed}});const o=this.particlesCount*6,n=new Float32Array(o);for(let p=0;p<o;p++)n[p]=p;const l=b.createVertexBuffer({context:i,typedArray:n,usage:C.STATIC_DRAW}),r=new j({context:i,attributes:[{index:0,vertexBuffer:l,componentsPerAttribute:1,componentDatatype:A.FLOAT,normalize:!1}]}),u=O.fromCache({context:i,vertexShaderSource:`
            in float particleIndex;

            uniform sampler2D currentParticlesPosition;
            uniform sampler2D velocityTexture;
            uniform float particlesTextureSize;
            uniform float arrowLength;
            uniform float trailLength;
            uniform float speedMin;
            uniform float speedMax;

            // 地理范围（弧度 / 米）
            uniform float boundsMinLon;
            uniform float boundsMaxLon;
            uniform float boundsMinLat;
            uniform float boundsMaxLat;
            uniform float boundsMinHeight;
            uniform float boundsMaxHeight;

            // 中心参考点
            uniform vec3  centerECEF;
            uniform float centerLonRad;
            uniform float centerLatRad;

            out float v_age;
            out float v_speed;
            out float v_culled;

            // WGS84 椭球参数
            const float wgs84_a  = 6378137.0;
            const float wgs84_e2 = 0.00669437999014;

            // 大地坐标 → ECEF
            vec3 geodeticToECEF(float lon, float lat, float h) {
                float sinLat = sin(lat);
                float cosLat = cos(lat);
                float sinLon = sin(lon);
                float cosLon = cos(lon);
                float N = wgs84_a / sqrt(1.0 - wgs84_e2 * sinLat * sinLat);
                return vec3(
                    (N + h) * cosLat * cosLon,
                    (N + h) * cosLat * sinLon,
                    (N * (1.0 - wgs84_e2) + h) * sinLat
                );
            }

            // ENU→ECEF 旋转矩阵（列 = east, north, up）
            mat3 enuToECEFMat(float lon, float lat) {
                float sinLat = sin(lat);
                float cosLat = cos(lat);
                float sinLon = sin(lon);
                float cosLon = cos(lon);
                return mat3(
                    vec3(-sinLon,          cosLon,           0.0),
                    vec3(-sinLat * cosLon, -sinLat * sinLon,  cosLat),
                    vec3( cosLat * cosLon,  cosLat * sinLon,  sinLat)
                );
            }

            void main() {
                float pIdx = floor(particleIndex / 6.0);
                float vType = particleIndex - pIdx * 6.0;

                float width = particlesTextureSize;
                float u = (mod(pIdx, width) + 0.5) / width;
                float v = (floor(pIdx / width) + 0.5) / width;

                vec4 particle = texture(currentParticlesPosition, vec2(u, v));
                vec3 posNorm = particle.xyz;

                float packed = particle.w;
                v_age = fract(packed);
                v_speed = floor(packed) / 255.0;

                v_culled = (v_speed < speedMin || v_speed > speedMax) ? 1.0 : 0.0;

                vec3 velocity = texture(velocityTexture, vec2(u, v)).xyz;

                // 归一化 [0,1] → 大地坐标（弧度，米）
                float lon    = mix(boundsMinLon, boundsMaxLon, posNorm.x);
                float lat    = mix(boundsMinLat, boundsMaxLat, posNorm.y);
                float height = mix(boundsMinHeight, boundsMaxHeight, posNorm.z);

                // 粒子 ECEF 位置
                vec3 ecefPos = geodeticToECEF(lon, lat, height);

                // ECEF → 中心 ENU 局部坐标系
                mat3 ecefToLocal = transpose(enuToECEFMat(centerLonRad, centerLatRad));
                vec3 localPos = ecefToLocal * (ecefPos - centerECEF);

                // 风速方向：粒子 ENU → ECEF → 中心 ENU
                mat3 particleEnuToEcef = enuToECEFMat(lon, lat);
                vec3 velLocal = ecefToLocal * (particleEnuToEcef * velocity);

                float dirLen = length(velLocal);
                vec3 forward = dirLen > 0.001 ? velLocal / dirLen : vec3(1.0, 0.0, 0.0);

                vec3 up = vec3(0.0, 0.0, 1.0);
                vec3 right = cross(forward, up);
                float rightLen = length(right);
                if (rightLen < 0.001) {
                    right = cross(forward, vec3(0.0, 1.0, 0.0));
                    rightLen = length(right);
                }
                right = right / max(rightLen, 0.001);

                float headLen   = arrowLength * 0.3;
                float headWidth = arrowLength * 0.15;

                vec3 tip       = localPos + forward * arrowLength;
                vec3 tail      = localPos - forward * trailLength;
                vec3 headBase  = tip - forward * headLen;
                vec3 leftWing  = headBase + right * headWidth;
                vec3 rightWing = headBase - right * headWidth;

                vec3 pos;
                if (vType < 0.5) {
                    pos = tail;
                } else if (vType < 1.5) {
                    pos = tip;
                } else if (vType < 2.5) {
                    pos = tip;
                } else if (vType < 3.5) {
                    pos = leftWing;
                } else if (vType < 4.5) {
                    pos = tip;
                } else {
                    pos = rightWing;
                }

                gl_Position = (v_culled > 0.5) ? vec4(0.0) : czm_modelViewProjection * vec4(pos, 1.0);
            }
        `,fragmentShaderSource:`
            in float v_age;
            in float v_speed;
            in float v_culled;

            uniform float alphaFactor;
            uniform float colorSpeedMin;  // windSpeedMin / maxWindSpeed (归一化)
            uniform float colorSpeedMax;  // windSpeedMax / maxWindSpeed (归一化)

            vec3 speedToColor(float t) {
                vec3 c;
                if (t < 0.25) {
                    float f = t / 0.25;
                    c = mix(vec3(0.0, 0.0, 1.0), vec3(0.0, 1.0, 1.0), f);
                } else if (t < 0.5) {
                    float f = (t - 0.25) / 0.25;
                    c = mix(vec3(0.0, 1.0, 1.0), vec3(0.0, 1.0, 0.0), f);
                } else if (t < 0.75) {
                    float f = (t - 0.5) / 0.25;
                    c = mix(vec3(0.0, 1.0, 0.0), vec3(1.0, 1.0, 0.0), f);
                } else {
                    float f = (t - 0.75) / 0.25;
                    c = mix(vec3(1.0, 1.0, 0.0), vec3(1.0, 0.0, 0.0), f);
                }
                return c;
            }

            void main() {
                if (v_culled > 0.5) discard;
                float alpha = (1.0 - v_age) * alphaFactor;
                // 将归一化速度重映射到颜色区间
                float colorRange = max(colorSpeedMax - colorSpeedMin, 0.001);
                float colorT = clamp((v_speed - colorSpeedMin) / colorRange, 0.0, 1.0);
                vec3 color = speedToColor(colorT);
                out_FragColor = vec4(color, alpha);
            }
        `,attributeLocations:{particleIndex:0}});this.primitives.draw=new X({vertexArray:r,primitiveType:Q.LINES,shaderProgram:u,modelMatrix:this._modelMatrix,renderState:H.fromCache({depthTest:{enabled:!0,writeMask:!1},blending:oe.ALPHA_BLEND}),uniformMap:{currentParticlesPosition:()=>this.particlesTextures[this.particleState],velocityTexture:()=>this.velocityTextures[this.particleState],particlesTextureSize:()=>this.particlesTextureSize,arrowLength:()=>this.arrowLength,trailLength:()=>this.trailLength,speedMin:()=>this.maxWindSpeed>0?this.cullSpeedMin/this.maxWindSpeed:0,speedMax:()=>this.maxWindSpeed>0?this.cullSpeedMax/this.maxWindSpeed:1,alphaFactor:()=>this.alphaFactor,colorSpeedMin:()=>this.maxWindSpeed>0?this.windSpeedMin/this.maxWindSpeed:0,colorSpeedMax:()=>this.maxWindSpeed>0?Math.min(1,this.windSpeedMax/this.maxWindSpeed):1,boundsMinLon:()=>this.bounds.minLon*Math.PI/180,boundsMaxLon:()=>this.bounds.maxLon*Math.PI/180,boundsMinLat:()=>this.bounds.minLat*Math.PI/180,boundsMaxLat:()=>this.bounds.maxLat*Math.PI/180,boundsMinHeight:()=>0,boundsMaxHeight:()=>this.windThickness,centerECEF:()=>this._centerCartesian,centerLonRad:()=>this._centerLonRad,centerLatRad:()=>this._centerLatRad},pass:ne.TRANSLUCENT})}createFullscreenQuad(i){if(this._fullscreenQuadVA)return this._fullscreenQuadVA;const e=b.createVertexBuffer({context:i,typedArray:new Float32Array([-1,-1,1,-1,1,1,-1,1]),usage:C.STATIC_DRAW}),t=b.createVertexBuffer({context:i,typedArray:new Float32Array([0,0,1,0,1,1,0,1]),usage:C.STATIC_DRAW}),s=b.createIndexBuffer({context:i,typedArray:new Uint16Array([0,1,2,0,2,3]),usage:C.STATIC_DRAW,indexDatatype:re.UNSIGNED_SHORT});return this._fullscreenQuadVA=new j({context:i,attributes:[{index:0,vertexBuffer:e,componentsPerAttribute:2,componentDatatype:A.FLOAT},{index:1,vertexBuffer:t,componentsPerAttribute:2,componentDatatype:A.FLOAT}],indexBuffer:s}),this._fullscreenQuadVA}async switchToRealData(i){try{console.log("Wind3D: Loading 3D wind data...",i);const e=await(await fetch(i)).json();console.log(`Wind3D: Data loaded (${e.header.nx}x${e.header.ny}x${e.header.nz})`),this._windDataCache=e,this._rebuildFromCache(),this.dataSource="real"}catch(e){console.error("Wind3D: Failed to load 3D wind data",e)}}_rebuildFromCache(){if(!this._windDataCache)return;const i=this._windDataCache.header,{nx:e,ny:t,nz:s}=i,a=this._windDataCache.data.u,o=this._windDataCache.data.v,n=this._windDataCache.data.w,l=Math.max(0,Math.floor((this.bounds.minLon-i.lo1)/i.dx)),r=Math.min(e-1,Math.ceil((this.bounds.maxLon-i.lo1)/i.dx)),c=Math.max(0,Math.floor((this.bounds.minLat-i.la1)/i.dy)),m=Math.min(t-1,Math.ceil((this.bounds.maxLat-i.la1)/i.dy)),u=Math.max(2,r-l+1),p=Math.max(2,m-c+1);this.gridDimensions.x=u,this.gridDimensions.y=p,this.gridDimensions.z=s;const f=new Float32Array(u*p*s*4);for(let x=0;x<s;x++){const d=s-1-x;for(let g=0;g<p;g++){const F=c+g;for(let y=0;y<u;y++){const D=l+y,R=d*t*e+F*e+D,_=(x*p*u+g*u+y)*4;F>=0&&F<t&&D>=0&&D<e&&(f[_]=a[R],f[_+1]=o[R],f[_+2]=n[R]),f[_+3]=0}}}this.windTexture&&(this.windTexture.destroy(),this.windTexture=null),this.createWindTexture(f);const L=Math.max(Math.abs(i.uMin),Math.abs(i.uMax)),w=Math.max(Math.abs(i.vMin),Math.abs(i.vMax));this.maxWindSpeed=Math.sqrt(L*L+w*w),i.levelHeights&&i.levelHeights.length>0&&(this.bounds.minHeight=Math.min(...i.levelHeights),this.bounds.maxHeight=Math.max(...i.levelHeights),this._windThicknessManual||(this._windThickness=this.bounds.maxHeight)),this._updateTransform(),this._needsRebuild=!0,console.log(`Wind3D: Rebuilt texture for bounds [${this.bounds.minLon},${this.bounds.maxLon}]×[${this.bounds.minLat},${this.bounds.maxLat}] grid: ${u}×${p}×${s}`)}setBounds(i,e,t,s){if(this.bounds.minLon=i,this.bounds.maxLon=e,this.bounds.minLat=t,this.bounds.maxLat=s,this.dataSource==="real"&&this._windDataCache)this._rebuildFromCache();else{this.gridDimensions.x=32,this.gridDimensions.y=32,this.gridDimensions.z=16,this.windTexture&&(this.windTexture.destroy(),this.windTexture=null);const a=this.generateFakeWindData();this.createWindTexture(a),this._updateTransform(),this._needsRebuild=!0}console.log(`Wind3D: Bounds updated → [${i},${e}]×[${t},${s}]`)}loadGeoJSON(i){let e=i;typeof e=="string"&&(e=JSON.parse(e));const t=[],s=r=>{if(r){if(r.type==="FeatureCollection"&&r.features)r.features.forEach(c=>s(c));else if(r.type==="Feature"&&r.geometry)s(r.geometry);else if(r.type==="GeometryCollection"&&r.geometries)r.geometries.forEach(c=>s(c));else if(r.coordinates){const c=m=>{typeof m[0]=="number"?t.push(m):m.forEach(c)};c(r.coordinates)}}};if(s(e),t.length===0)return console.warn("Wind3D: GeoJSON contains no coordinates"),null;let a=1/0,o=-1/0,n=1/0,l=-1/0;for(const[r,c]of t)r<a&&(a=r),r>o&&(o=r),c<n&&(n=c),c>l&&(l=c);return a=Math.max(-180,a-.5),o=Math.min(360,o+.5),n=Math.max(-90,n-.5),l=Math.min(90,l+.5),console.log(`Wind3D: GeoJSON bbox → [${a.toFixed(2)},${o.toFixed(2)}]×[${n.toFixed(2)},${l.toFixed(2)}] (${t.length} coords)`),this.setBounds(a,o,n,l),{minLon:a,maxLon:o,minLat:n,maxLat:l}}switchToFakeData(){this._windDataCache=null,this.gridDimensions.x=32,this.gridDimensions.y=32,this.gridDimensions.z=16,this.bounds.minHeight=0,this.bounds.maxHeight=1e4,this.windTexture&&(this.windTexture.destroy(),this.windTexture=null);const i=this.generateFakeWindData();this.createWindTexture(i),this.maxWindSpeed=20,this.dataSource="fake",this._updateTransform(),console.log("Wind3D: Switched to fake data")}destroy(){this._isDestroyed=!0}isDestroyed(){return this._isDestroyed===!0}flyTo(){const i=(this.bounds.minLon+this.bounds.maxLon)/2,e=(this.bounds.minLat+this.bounds.maxLat)/2;this.viewer.camera.flyTo({destination:E.fromDegrees(i,e,2e6)})}};const he={meta:{path:"/cesium/wind3d",title:"三维风场"},components:{Globe:de,ConfigPanel:le},setup(){let T;const i=P(null);let e;const t=Y({minLon:0,maxLon:360,minLat:-90,maxLat:90,windThickness:1e6,particlesCount:65536,speedFactor:.02,arrowLength:15e4,trailLength:2e4,decaySpeed:.005,alphaFactor:1,cullSpeedMin:0,cullSpeedMax:200,windSpeedMin:0,windSpeedMax:20,dataSource:"real"}),s=K([]),a=P(0),o=W(()=>t.dataSource==="real"?"真实风场":"模拟风场"),n=W(()=>`${t.minLon.toFixed(1)},${t.minLat.toFixed(1)} → ${t.maxLon.toFixed(1)},${t.maxLat.toFixed(1)}`);let l="",r=0;async function c(d){d.camera.setView({destination:new E(3663592176380739e-8,-1848239555868643e-8,14600812574966867e-9),orientation:{heading:6.281972591907078,pitch:-1.5686580281973281,roll:0}}),T=d,m(T)}async function m(d){e=new ce(d,{minLon:t.minLon,maxLon:t.maxLon,minLat:t.minLat,maxLat:t.maxLat,windThickness:t.windThickness,speedFactor:t.speedFactor}),d.scene.primitives.add(e),await e.switchToRealData("/gisdata/wind3d.json"),u(),p(),l=f(),r=e.particlesCount,a.value=e.maxWindSpeed??0}function u(){const d=e.bounds;t.minLon=d.minLon,t.maxLon=d.maxLon,t.minLat=d.minLat,t.maxLat=d.maxLat,t.windThickness=e.windThickness,t.particlesCount=e.particlesCount,t.speedFactor=e.speedFactor,t.arrowLength=e.arrowLength,t.trailLength=e.trailLength,t.decaySpeed=e.decaySpeed,t.alphaFactor=e.alphaFactor,t.cullSpeedMin=e.cullSpeedMin,t.cullSpeedMax=e.cullSpeedMax,t.windSpeedMin=e.windSpeedMin,t.windSpeedMax=e.windSpeedMax,t.dataSource=e.dataSource}function p(){const d=t;s.value=[{key:"minLon",label:"最小经度",type:"slider",min:-180,max:Math.round(d.maxLon-1),step:.1},{key:"maxLon",label:"最大经度",type:"slider",min:Math.round(d.minLon+1),max:360,step:.1},{key:"minLat",label:"最小纬度",type:"slider",min:-90,max:Math.round(d.maxLat-1),step:.1},{key:"maxLat",label:"最大纬度",type:"slider",min:Math.round(d.minLat+1),max:90,step:.1},{key:"windThickness",label:"厚度",type:"slider",min:1e3,max:5e6,step:1e3,unit:" m",digits:0},{key:"particlesCount",label:"粒子数量",type:"slider",min:256,max:65536,step:256,digits:0},{key:"speedFactor",label:"速度因子",type:"slider",min:.01,max:.1,step:.01,digits:2},{key:"arrowLength",label:"箭头长度",type:"slider",min:5e3,max:5e5,step:1e3,unit:" m",digits:0},{key:"trailLength",label:"拖尾长度",type:"slider",min:0,max:1e5,step:1e3,unit:" m",digits:0},{key:"decaySpeed",label:"衰减速度",type:"slider",min:.001,max:.1,step:.001,digits:3},{key:"alphaFactor",label:"透明度因子",type:"slider",min:0,max:2,step:.1},{key:"cullSpeedMin",label:"剔除-最小风速",type:"slider",min:0,max:Math.round(d.cullSpeedMax),step:.1},{key:"cullSpeedMax",label:"剔除-最大风速",type:"slider",min:Math.round(d.cullSpeedMin),max:200,step:.1},{key:"windSpeedMin",label:"颜色-最小风速",type:"slider",min:0,max:Math.round(d.windSpeedMax),step:.1},{key:"windSpeedMax",label:"颜色-最大风速",type:"slider",min:Math.round(d.windSpeedMin),max:200,step:.1},{key:"dataSource",label:"数据源",type:"select",options:[{label:"模拟风场",value:"fake"},{label:"真实风场",value:"real"}]}]}function f(){return`${t.minLon}|${t.maxLon}|${t.minLat}|${t.maxLat}`}function L(){if(!e)return;const d=f();d!==l&&(e.setBounds(t.minLon,t.maxLon,t.minLat,t.maxLat),l=d),t.particlesCount!==r&&(e.setParticleCount(t.particlesCount),r=e.particlesCount,t.particlesCount=e.particlesCount),e.windThickness=t.windThickness,e.speedFactor=t.speedFactor,e.arrowLength=t.arrowLength,e.trailLength=t.trailLength,e.decaySpeed=t.decaySpeed,e.alphaFactor=t.alphaFactor,e.cullSpeedMin=t.cullSpeedMin,e.cullSpeedMax=t.cullSpeedMax,e.windSpeedMin=t.windSpeedMin,e.windSpeedMax=t.windSpeedMax,t.dataSource!==e.dataSource&&(t.dataSource==="fake"?e.switchToFakeData():e.switchToRealData("/gisdata/wind3d.json"),l=f()),a.value=e.maxWindSpeed??0}function w(){e==null||e.flyTo()}function x(){e&&(t.windThickness=e.bounds.maxHeight||1e6,t.speedFactor=.1,t.arrowLength=15e4,t.trailLength=2e4,t.decaySpeed=.005,t.alphaFactor=1,t.cullSpeedMin=0,t.cullSpeedMax=200,t.windSpeedMin=0,t.windSpeedMax=20,L(),console.log("✅ 风场参数已重置为默认值"))}return J(()=>{var d;(d=e==null?void 0:e.destroy)==null||d.call(e)}),{init:c,box:i,config:t,fields:s,apply:L,flyTo:w,resetParams:x,maxWindSpeed:a,dataSourceLabel:o,boundsLabel:n}}},ue={ref:"box",class:"map-box"},pe={class:"wind-act"},me={class:"oo-card hud"},fe={class:"hud__row"},xe={class:"is-on"},Le={class:"hud__row"},Te={class:"hud__row"},we={class:"hud__row"};function ge(T,i,e,t,s,a){const o=z("Globe"),n=q,l=z("ConfigPanel");return te(),ee("div",ue,[v(o,{options:{terrain:!1},onCreated:t.init},null,8,["onCreated"]),v(l,{model:t.config,fields:t.fields,title:"三维风场",tip:"把 GRIB 式三维风场数据（u/v/w 三通道）烘焙成 3D 纹理，用粒子在风场包围盒内积分推进并画成拖尾；改「风场范围」会按新范围重采样风场纹理，改「粒子数量」会重建粒子纹理。",onChange:t.apply},{default:k(()=>[h("div",pe,[v(n,{class:"oo-btn",size:"small",onClick:t.flyTo},{default:k(()=>[...i[0]||(i[0]=[I("飞行至风场",-1)])]),_:1},8,["onClick"]),v(n,{class:"oo-btn",size:"small",onClick:t.resetParams},{default:k(()=>[...i[1]||(i[1]=[I("重置参数",-1)])]),_:1},8,["onClick"])])]),_:1},8,["model","fields","onChange"]),h("div",me,[h("div",fe,[i[2]||(i[2]=h("span",null,"数据源",-1)),h("b",xe,S(t.dataSourceLabel),1)]),h("div",Le,[i[3]||(i[3]=h("span",null,"最大风速",-1)),h("b",null,S(t.maxWindSpeed.toFixed(1))+" m/s",1)]),h("div",Te,[i[4]||(i[4]=h("span",null,"粒子数量",-1)),h("b",null,S(t.config.particlesCount),1)]),h("div",we,[i[5]||(i[5]=h("span",null,"风场范围",-1)),h("b",null,S(t.boundsLabel),1)])])],512)}const ze=Z(he,[["render",ge],["__scopeId","data-v-0ee12d23"]]);export{ze as default};
