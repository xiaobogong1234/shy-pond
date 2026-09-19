import{E as L,a as F}from"./el-select-DHZScApW.js";import{x as A,h as V,_ as M,c as I,a as c,b as p,w as O,p as R,f as B}from"./index-9vIL5KkC.js";import{N as S,U as g,aq as H,d as m,p as h,F as U,M as P,an as G,ar as X,as as q,at as Y,b as j,g as b,au as k}from"./cesium-utSEP5if.js";import{G as $}from"./index-DRCmDxZs.js";import"./_commonjsHelpers-gnU0ypJ3.js";import"./cesium2s-TV_G_QRL.js";import"./index-CtVsJ-X_.js";import"./fullscreenPopper-CpT4yrsP.js";import"./services-CwmS6buH.js";const J=`
                  #version 300 es
                  precision highp float;

                  #define CLIP_POLYLINE
                  void clipLineSegmentToNearPlane(
                      vec3 p0,
                      vec3 p1,
                      out vec4 positionWC,
                      out bool clipped,
                      out bool culledByNearPlane,
                      out vec4 clippedPositionEC)
                  {
                      culledByNearPlane = false;
                      clipped = false;
                      vec3 p0ToP1 = p1 - p0;
                      float magnitude = length(p0ToP1);
                      vec3 direction = normalize(p0ToP1);
                      float endPoint0Distance =  czm_currentFrustum.x + p0.z;
                      float denominator = -direction.z;
                      if (endPoint0Distance > 0.0 && abs(denominator) < czm_epsilon7)
                      {
                          culledByNearPlane = true;
                      }
                      else if (endPoint0Distance > 0.0)
                      {
                          float t = endPoint0Distance / denominator;
                          if (t < 0.0 || t > magnitude)
                          {
                              culledByNearPlane = true;
                          }
                          else
                          {
                              p0 = p0 + t * direction;
                              p0.z = min(p0.z, -czm_currentFrustum.x);
                              clipped = true;
                          }
                      }
                      clippedPositionEC = vec4(p0, 1.0);
                      positionWC = czm_eyeToWindowCoordinates(clippedPositionEC);
                  }
                  vec4 getPolylineWindowCoordinatesEC(vec4 positionEC, vec4 prevEC, vec4 nextEC, float expandDirection, float width, bool usePrevious, out float angle)
                  {
                      #ifdef POLYLINE_DASH
                      vec4 positionWindow = czm_eyeToWindowCoordinates(positionEC);
                      vec4 previousWindow = czm_eyeToWindowCoordinates(prevEC);
                      vec4 nextWindow = czm_eyeToWindowCoordinates(nextEC);
                      vec2 lineDir;
                      if (usePrevious) {
                          lineDir = normalize(positionWindow.xy - previousWindow.xy);
                      }
                      else {
                          lineDir = normalize(nextWindow.xy - positionWindow.xy);
                      }
                      angle = atan(lineDir.x, lineDir.y) - 1.570796327;
                      angle = floor(angle / czm_piOverFour + 0.5) * czm_piOverFour;
                      #endif
                      vec4 clippedPrevWC, clippedPrevEC;
                      bool prevSegmentClipped, prevSegmentCulled;
                      clipLineSegmentToNearPlane(prevEC.xyz, positionEC.xyz, clippedPrevWC, prevSegmentClipped, prevSegmentCulled, clippedPrevEC);
                      vec4 clippedNextWC, clippedNextEC;
                      bool nextSegmentClipped, nextSegmentCulled;
                      clipLineSegmentToNearPlane(nextEC.xyz, positionEC.xyz, clippedNextWC, nextSegmentClipped, nextSegmentCulled, clippedNextEC);
                      bool segmentClipped, segmentCulled;
                      vec4 clippedPositionWC, clippedPositionEC;
                      clipLineSegmentToNearPlane(positionEC.xyz, usePrevious ? prevEC.xyz : nextEC.xyz, clippedPositionWC, segmentClipped, segmentCulled, clippedPositionEC);
                      if (segmentCulled)
                      {
                          return vec4(0.0, 0.0, 0.0, 1.0);
                      }
                      vec2 directionToPrevWC = normalize(clippedPrevWC.xy - clippedPositionWC.xy);
                      vec2 directionToNextWC = normalize(clippedNextWC.xy - clippedPositionWC.xy);
                      if (prevSegmentClipped)
                      {
                          directionToPrevWC = -directionToNextWC;
                      }
                      else if (nextSegmentCulled)
                      {
                          directionToNextWC = -directionToPrevWC;
                      }
                      vec2 thisSegmentForwardWC, otherSegmentForwardWC;
                      if (usePrevious)
                      {
                          thisSegmentForwardWC = -directionToPrevWC;
                          otherSegmentForwardWC = directionToNextWC;
                      }
                      else
                      {
                          thisSegmentForwardWC = directionToNextWC;
                          otherSegmentForwardWC =  -directionToPrevWC;
                      }
                      vec2 thisSegmentLeftWC = vec2(-thisSegmentForwardWC.y, thisSegmentForwardWC.x);
                      vec2 leftWC = thisSegmentLeftWC;
                      float expandWidth = width * 0.5;
                      if (!czm_equalsEpsilon(prevEC.xyz - positionEC.xyz, vec3(0.0), czm_epsilon1) && !czm_equalsEpsilon(nextEC.xyz - positionEC.xyz, vec3(0.0), czm_epsilon1))
                      {
                          vec2 otherSegmentLeftWC = vec2(-otherSegmentForwardWC.y, otherSegmentForwardWC.x);
                          vec2 leftSumWC = thisSegmentLeftWC + otherSegmentLeftWC;
                          float leftSumLength = length(leftSumWC);
                          leftWC = leftSumLength < czm_epsilon6 ? thisSegmentLeftWC : (leftSumWC / leftSumLength);
                          vec2 u = -thisSegmentForwardWC;
                          vec2 v = leftWC;
                          float sinAngle = abs(u.x * v.y - u.y * v.x);
                          expandWidth = clamp(expandWidth / sinAngle, 0.0, width * 2.0);
                      }
                      vec2 offset = leftWC * expandDirection * expandWidth * czm_pixelRatio;
                      return vec4(clippedPositionWC.xy + offset, -clippedPositionWC.z, 1.0) * (czm_projection * clippedPositionEC).w;
                  }
                  vec4 getPolylineWindowCoordinates(vec4 position, vec4 previous, vec4 next, float expandDirection, float width, bool usePrevious, out float angle)
                  {
                      vec4 positionEC = czm_modelViewRelativeToEye * position;
                      vec4 prevEC = czm_modelViewRelativeToEye * previous;
                      vec4 nextEC = czm_modelViewRelativeToEye * next;
                      return getPolylineWindowCoordinatesEC(positionEC, prevEC, nextEC, expandDirection, width, usePrevious, angle);
                  }
                  //输入变量
                  in vec3 position3DHigh;
                  in vec3 position3DLow;
                  in vec3 prevPosition3DHigh;
                  in vec3 prevPosition3DLow;
                  in vec3 nextPosition3DHigh;
                  in vec3 nextPosition3DLow;
                  in vec2 expandAndWidth;
                  in vec2 st;
                  in float batchId;

                  //输出变量(传递给像素着色器)
                  out float o_width;
                  out vec2 o_st;
                  out float o_polylineAngle;
                  out vec4 o_positionEC;
                  out vec3 o_normalEC;

                  void main()
                  {
                      float expandDir = expandAndWidth.x;
                      float width = abs(expandAndWidth.y) + 0.5;
                      bool usePrev = expandAndWidth.y < 0.0;

                      vec4 p = czm_computePosition();
                      vec4 prev = czm_computePrevPosition();
                      vec4 next = czm_computeNextPosition();

                      float angle;
                      vec4 positionWC = getPolylineWindowCoordinates(p, prev, next, expandDir, width, usePrev, angle);
                      gl_Position = czm_viewportOrthographic * positionWC;

                      // 使用新的输出变量名（o_前缀）
                      o_width = width;
                      o_st = st;
                      o_polylineAngle = angle;

                      vec4 eyePosition = czm_modelViewRelativeToEye * p;
                      o_positionEC = czm_inverseModelView * eyePosition;
                      o_normalEC = czm_normal * normalize(cross(next.xyz - p.xyz, p.xyz - prev.xyz));
                  }
              `;function f(i){const t=`
            // 输入变量
            in vec2 o_st;
            in float o_width;
            in float o_polylineAngle;
            in vec4 o_positionEC;
            in vec3 o_normalEC;

            // 输出变量（替换gl_FragColor）
            out vec4 fragColor;

            void main()
            {
`,n=`
            }
          `;let o="";return i===1?o=`
                vec2 st = o_st;
                float xx = fract(st.s - czm_frameNumber/60.0);

                // 标准化颜色值（WebGL2要求颜色值在0.0-1.0范围）
                float r = xx;
                float g = 200.0 / 255.0;  // 将200转换为0.784
                float b = 200.0 / 255.0;  // 将200转换为0.784
                float a = xx;

                fragColor = vec4(r, g, b, a);
`:i===2?o=`
                vec2 st = o_st;
                float xx = fract(st.s*2.0 - czm_frameNumber/60.0);
                float r = xx;
                float g = sin(czm_frameNumber/30.0);
                float b = cos(czm_frameNumber/30.0);
                float a = xx;
                fragColor = vec4(r,g,b,a);
`:i===3?o=`
                vec2 st = o_st;
                float xx = sin(st.s*6.0 -czm_frameNumber/5.0) - cos(st.t*6.0);
                float r = 0.0;
                float g = xx;
                float b = xx;
                float a = xx;
                fragColor = vec4(r,g,b,a);
`:i===4&&(o=`
                vec2 st = o_st;
                float xx = fract(st.s*10.0 + st.t  - czm_frameNumber/60.0);
                if (st.t<0.5) {
                    xx = fract(st.s*10.0 - st.t - czm_frameNumber/60.0);
                }
                float r = 0.0;
                float g = xx;
                float b = xx;
                float a = xx;
                if (st.t>0.8||st.t<0.2) {
                    g = 1.0;
                    b = 1.0;
                    a = 0.4;
                }
                fragColor = vec4(r,g,b,a);
`),t+o+n}function z(i){let t=S.fromType("Color");t.uniforms.color=g.ORANGE;let n;return i===1?n=f(1):i===2?n=f(2):i===3?n=f(3):n=f(4),new H({material:t,translucent:!0,vertexShaderSource:J,fragmentShaderSource:n})}let E;const u={start:{city:"成都",lnglat:[104.06667,30.6666]},ends:[{city:"北京",lnglat:[116.4074,39.9042]},{city:"上海",lnglat:[121.4737,31.2304]},{city:"广州",lnglat:[113.2644,23.1291]},{city:"深圳",lnglat:[114.0579,22.5431]},{city:"大阪",lnglat:[135.5022,34.6937]},{city:"东京",lnglat:[139.6917,35.6895]},{city:"马累",lnglat:[73.5083,4.1733]},{city:"巴黎",lnglat:[2.3522,48.8566]},{city:"莫斯科",lnglat:[37.6173,55.7558]},{city:"加德满都",lnglat:[85.3243,27.7172]},{city:"科伦坡",lnglat:[79.8612,6.9271]},{city:"河内",lnglat:[105.8456,21.0278]},{city:"伦敦",lnglat:[.1278,51.5074]},{city:"法兰克福",lnglat:[8.6822,50.1109]},{city:"阿布扎比",lnglat:[54.3773,24.4667]},{city:"温哥华",lnglat:[123.1207,49.2827]},{city:"墨尔本",lnglat:[144.9631,-37.8136]},{city:"孟买",lnglat:[72.8777,19.076]},{city:"仰光",lnglat:[96.1276,16.7868]},{city:"首尔",lnglat:[126.978,37.5665]}]},w=[],K={meta:{path:"/cesium/flowline",title:"迁徙轨迹"},components:{Globe:$},setup(){async function i(e){e.camera.setView({destination:new m(-3.0026585305014825e6,1335795429322468e-8,3.0809434232476437e6),orientation:{heading:.1988063376013134,pitch:-1.356330151042136,roll:6.283061831889639}}),E=e,e.scene.globe.terrainProviderChanged.addEventListener(()=>{t(e)})}async function t(e){const r=m.fromDegrees(u.start.lnglat[0],u.start.lnglat[1]),a=(await e.getClampPositions([r]))[0];o(a),e.entities.add({position:a,label:{font:"15px",pixelOffset:new h(0,-16),text:u.start.city,disableDepthTestDistance:Number.MAX_VALUE},billboard:{image:"/icons/city.png",scale:.05,disableDepthTestDistance:Number.MAX_VALUE}}),u.ends.forEach(async l=>{const s=m.fromDegrees(l.lnglat[0],l.lnglat[1]),C=(await e.getClampPositions([s]))[0],d=n(a,C),y=e.scene.primitives.add(new U({geometryInstances:[new P({geometry:new G({positions:d})})],appearance:z(1)}));w.push(y),o(s),e.entities.add({position:s,label:{font:"15px",pixelOffset:new h(0,-16),text:l.city,disableDepthTestDistance:Number.MAX_VALUE,outlineColor:g.fromCssColorString("rgba(0,0,0,0.6)"),outlineWidth:2},billboard:{image:"/icons/city.png",scale:.05,disableDepthTestDistance:Number.MAX_VALUE}})})}function n(e,r){const l=[],s=b.fromCartesian(e),C=b.fromCartesian(r),d=new k(s,C),D=d.surfaceDistance/10;for(let x=0;x<=50;x++){const _=x/50,W=d.interpolateUsingFraction(_),N=4*D*_*(1-_),T=m.fromRadians(W.longitude,W.latitude,N);l.push(T)}return l}function o(e){E.scene.groundPrimitives.add(new X({geometryInstances:new P({geometry:new Y({center:e,semiMajorAxis:8e4,semiMinorAxis:8e4}),attributes:{color:j.fromColor(g.WHITE)}}),appearance:new q({vertexShaderSource:"",material:new S({fabric:{type:"dynamics point",uniforms:{color:new g(1,1,0,.7),speed:8,count:2,gradient:.2},source:`
                  uniform vec4 color;
                  uniform float speed;
                  uniform float count;
                  uniform float gradient;
                  czm_material czm_getMaterial(czm_materialInput materialInput)
                  {
                  czm_material material = czm_getDefaultMaterial(materialInput);
                  material.diffuse = 1.5 * color.rgb;
                  vec2 st = materialInput.st;
                  float dis = distance(st, vec2(0.5, 0.5));
                  float per = fract(czm_frameNumber * speed / 1000.0);
                  if(count == 1.0){
                      if(dis > per * 0.5){
                      discard;
                      }else {
                      material.alpha = color.a  * dis / per / 2.0;
                      }
                  } else {
                      vec3 str = materialInput.str;
                      if(abs(str.z)  > 0.001){
                        discard;
                      }
                      if(dis > 0.5){
                        discard;
                      } else {
                      float perDis = 0.5 / count;
                      float disNum;
                      float bl = 0.0;
                      // for (int i = 0; i < 5; i++) {
                          // 在循环中执行操作
                      // }
                      for(int i = 0; i <= 5; i++){
                          if(float(i) <= count) {
                            disNum = perDis * float(i) - dis + per / count;
                            if(disNum > 0.0) {
                                if(disNum < perDis){
                                  bl = 1.0 - disNum / perDis;
                                }
                                else if(disNum - perDis < perDis){
                                  bl = 1.0 - abs(1.0 - disNum / perDis);
                                }
                                material.alpha = pow(bl,(1.0 + 10.0 * (1.0 - gradient)));
                            }
                          }
                      }
                    }
                  }
                  return material;
                  }
                `}})})}))}const v=V(1);return A(v,e=>{w.forEach(r=>{r.appearance=z(e)})}),{init:i,traceStyle:v}}},Q={class:"box"},Z={class:"oo-card oo-panel flow-line"},ee={class:"fl__row"};function te(i,t,n,o,v,e){const r=R("Globe"),a=F,l=L;return B(),I("div",Q,[c(r,{onCreated:o.init,options:{terrain:!0}},null,8,["onCreated"]),p("div",Z,[t[2]||(t[2]=p("div",{class:"fl__head"},[p("span",{class:"fl__title"},"迁徙轨迹线")],-1)),p("div",ee,[t[1]||(t[1]=p("span",null,"轨迹样式",-1)),c(l,{modelValue:o.traceStyle,"onUpdate:modelValue":t[0]||(t[0]=s=>o.traceStyle=s),size:"small",class:"fl__select"},{default:O(()=>[c(a,{value:1,label:"流光 · 单段"}),c(a,{value:2,label:"流光 · 双段"}),c(a,{value:3,label:"波纹干涉"}),c(a,{value:4,label:"条纹 · 边缘高亮"})]),_:1},8,["modelValue"])]),t[3]||(t[3]=p("div",{class:"fl__tip"}," 四种样式只是同一批飞线的片元着色器不同（由 `getFlylineMaterial(style)` 生成），切换即时生效、不重建几何。 ",-1))])])}const de=M(K,[["render",te],["__scopeId","data-v-f9165ea4"]]);export{de as default};
