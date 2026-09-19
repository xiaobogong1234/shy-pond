import{E as b}from"./el-button-BIufFjLp.js";import{b as z,E as H}from"./fullscreenPopper-CpT4yrsP.js";import"./el-select-DHZScApW.js";import{h as w,_ as M,c as V,a as d,b as o,t as A,w as E,p as P,f as T,g as h}from"./index-9vIL5KkC.js";import{P as y,d as p,al as F,t as N,F as S,M as k,am as B,N as D,g as G}from"./cesium-utSEP5if.js";import{G as U}from"./index-DRCmDxZs.js";import{c as W}from"./index-Co5BiESo.js";import{h as q}from"./cesium2s-TV_G_QRL.js";import"./index-ANLxL66K.js";import"./use-global-config-DaIFvEHd.js";import"./_commonjsHelpers-gnU0ypJ3.js";import"./index-CtVsJ-X_.js";import"./services-CwmS6buH.js";import"./index-BVxxfBh-.js";const R={meta:{path:"/cesium/flood",title:"淹没分析"},components:{Globe:U},setup(){let r;function e(n){r=n,window.viewer=r,n.camera.setView({destination:new p(-478934.16593992163,5543987251789141e-9,3.1397913258119226e6),orientation:{heading:6.258476232183501,pitch:-.7662897646443163,roll:40175496973660074e-23}}),f()}let i,t,l=w(3e3),v=w(3500),s=w(3e3),u,c;function f(){if(!r)return;r.scene.globe.depthTestAgainstTerrain=!0;const n=[[94.83739296048076,29.794818933352573],[94.93016166085434,29.82617234520679],[94.99751701574823,29.77743770676921],[94.98477850151446,29.689633256614634],[94.91594344329998,29.673775827769795],[94.84008347040994,29.696953661696647],[94.83739296048076,29.794818933352573]],m=n.slice(0,n.length-1).flat(),g=W(q([n])).geometry.coordinates;u=new p.fromDegrees(...g,l.value);const C=new F({polygonHierarchy:new N(p.fromDegreesArray(m)),height:0,extrudedHeight:l.value});i=new S({geometryInstances:new k({geometry:C}),appearance:new B({aboveGround:!0,material:new D({fabric:{type:"Water",uniforms:{normalMap:"/images/waterNormals.jpg",frequency:200,animationSpeed:.01,amplitude:50,specularIntensity:.9,waterRefractionIndex:100}}}),fragmentShaderSource:`
        #version 300 es
        precision highp float;

        // 输入和输出变量
        in vec3 v_positionMC;
        in vec3 v_positionEC;
        in vec2 v_st;

        // 输出颜色
        out vec4 fragColor;

        // 主函数
        void main() {
            // 材质输入结构体
            czm_materialInput materialInput;

            // 计算法线在眼睛坐标系下的值
            vec3 normalEC = normalize(czm_normal3D * czm_geodeticSurfaceNormal(v_positionMC, vec3(0.0), vec3(1.0)));
            
            #ifdef FACE_FORWARD
            normalEC = faceforward(normalEC, vec3(0.0, 0.0, 1.0), -normalEC);
            #endif

            // 设置材质输入
            materialInput.s = v_st.s;
            materialInput.st = v_st;
            materialInput.str = vec3(v_st, 0.0);
            materialInput.normalEC = normalEC;
            materialInput.tangentToEyeMatrix = czm_eastNorthUpToEyeCoordinates(v_positionMC, materialInput.normalEC);

            vec3 positionToEyeEC = -v_positionEC;
            materialInput.positionToEyeEC = positionToEyeEC;

            // 获取材质
            czm_material material = czm_getMaterial(materialInput);

            // 设置输出颜色
            #ifdef FLAT
            fragColor = vec4(material.diffuse + material.emission, material.alpha);
            #else
            fragColor = czm_phong(normalize(positionToEyeEC), material, czm_lightDirectionEC);
            fragColor.a = 0.8;
            #endif
        }
        `})}),t=i.modelMatrix.clone(),r.scene.primitives.add(i)}function a(){if(!i)return;function n(){let m=0;function _(){if(m+=1,s.value>=v.value)return;var g=y.fromTranslation(new p(0,m,0));const C=y.multiplyByPoint(g,u,new p);c=G.fromCartesian(C),s.value=Number(c.height.toFixed(0)),i.modelMatrix=g,requestAnimationFrame(_)}requestAnimationFrame(_)}n()}function x(){i.modelMatrix=t.clone(),s.value=l.value}function I(n){const m=y.fromTranslation(new p(0,n-l.value,0));i.modelMatrix=m}return{getViewer:e,minHeight:l,maxHeight:v,currentHeight:s,updateWaterPlane:I,playAnimation:a,polygonPrimitive:i,resetAnimation:x}}},O={class:"container"},j={class:"oo-card oo-panel info"},L={class:"info__row"},J={class:"info__row"},K={class:"info__water"},Q={class:"info__water-head"},X={class:"info__act"};function Y(r,e,i,t,l,v){const s=P("Globe"),u=z,c=H,f=b;return T(),V("div",O,[d(s,{onCreated:t.getViewer,options:{terrain:!0}},null,8,["onCreated"]),o("div",j,[e[10]||(e[10]=o("div",{class:"info__title"},"淹没分析",-1)),o("div",L,[e[3]||(e[3]=o("span",null,"最低水位",-1)),d(u,{modelValue:t.minHeight,"onUpdate:modelValue":e[0]||(e[0]=a=>t.minHeight=a),min:0,max:2e4,step:50,size:"small","controls-position":"right",class:"info__num"},null,8,["modelValue"]),e[4]||(e[4]=o("em",null,"m",-1))]),o("div",J,[e[5]||(e[5]=o("span",null,"最高水位",-1)),d(u,{modelValue:t.maxHeight,"onUpdate:modelValue":e[1]||(e[1]=a=>t.maxHeight=a),min:1,max:2e4,step:50,size:"small","controls-position":"right",class:"info__num"},null,8,["modelValue"]),e[6]||(e[6]=o("em",null,"m",-1))]),o("div",K,[o("div",Q,[e[7]||(e[7]=o("span",null,"当前水位",-1)),o("b",null,A(t.currentHeight.toFixed(0))+" m",1)]),d(c,{modelValue:t.currentHeight,"onUpdate:modelValue":e[2]||(e[2]=a=>t.currentHeight=a),min:t.minHeight,max:t.maxHeight,size:"small",onInput:t.updateWaterPlane},null,8,["modelValue","min","max","onInput"])]),o("div",X,[d(f,{class:"oo-btn",size:"small",type:"primary",onClick:t.playAnimation},{default:E(()=>[...e[8]||(e[8]=[h("开始",-1)])]),_:1},8,["onClick"]),d(f,{class:"oo-btn",size:"small",onClick:t.resetAnimation},{default:E(()=>[...e[9]||(e[9]=[h("重置",-1)])]),_:1},8,["onClick"])])])])}const ue=M(R,[["render",Y],["__scopeId","data-v-6e379698"]]);export{ue as default};
