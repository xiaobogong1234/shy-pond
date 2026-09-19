import{E as g,a as x}from"./el-select-DHZScApW.js";import{x as c,h as d,_ as u,c as p,a,b,g as w,w as R,p as H,f as z}from"./index-9vIL5KkC.js";import{d as M,cX as i}from"./cesium-utSEP5if.js";import{G as C}from"./index-DRCmDxZs.js";import"./_commonjsHelpers-gnU0ypJ3.js";import"./cesium2s-TV_G_QRL.js";import"./index-CtVsJ-X_.js";import"./fullscreenPopper-CpT4yrsP.js";import"./services-CwmS6buH.js";let s,o;const n={科技青:new i({fragmentShaderText:`
            void fragmentMain(FragmentInput fsInput, inout czm_modelMaterial material) {
                float _baseHeight = 50.0; // 物体的基础高度，需要修改成一个合适的建筑基础高度
                float _heightRange = 40.0; // 高亮的范围(_baseHeight ~ _baseHeight + _heightRange) 默认是 0-60米
                float _glowRange = 200.0; // 光环的移动范围(高度)
                float vtxf_height = fsInput.attributes.positionMC.y-_baseHeight;
                float vtxf_a11 = fract(czm_frameNumber / 120.0) * 3.14159265 * 2.0;
                float vtxf_a12 = vtxf_height / _heightRange + sin(vtxf_a11) * 0.1;
                material.diffuse = vec3(0.0,0.2,0.3)*vec3(vtxf_a12, vtxf_a12, vtxf_a12);
                float vtxf_a13 = fract(czm_frameNumber / 360.0);
                float vtxf_h = clamp(vtxf_height / _glowRange, 0.0, 1.0);
                vtxf_a13 = abs(vtxf_a13 - 0.5) * 2.0;
                float vtxf_diff = step(0.005, abs(vtxf_h - vtxf_a13));
                material.diffuse += material.diffuse * (1.0 - vtxf_diff);
            }
          `}),活力黄:new i({fragmentShaderText:`
      void fragmentMain(FragmentInput fsInput, inout czm_modelMaterial material) {
          float _baseHeight = 50.0; // 物体的基础高度，需要修改成一个合适的建筑基础高度
          float _heightRange = 40.0; // 高亮的范围(_baseHeight ~ _baseHeight + _heightRange) 默认是 0-60米
          float _glowRange = 120.0; // 光环的移动范围(高度)
          float vtxf_height = fsInput.attributes.positionMC.y-_baseHeight;
          float vtxf_a11 = fract(czm_frameNumber / 120.0) * 3.14159265 * 2.0;
          float vtxf_a12 = vtxf_height / _heightRange + sin(vtxf_a11) * 0.1;
          //高度归一化(意义：假设模型高度范围在0-100米之间)
          float normalizedHeight = clamp(vtxf_height * 0.02, 0.0, 1.0);

          //定义渐变的两个颜色：底部白色，顶部蓝色
          vec3 bottomColor = vec3(0.9, 0.9, 0.0);  
          vec3 topColor = vec3(0.7, 0.5, 0.0);  

          //基于归一化高度值计算最终颜色
          material.diffuse = mix(bottomColor, topColor, normalizedHeight);

          material.diffuse *= vec3(vtxf_a12, vtxf_a12, vtxf_a12);
          float vtxf_a13 = fract(czm_frameNumber / 360.0);
          float vtxf_h = clamp(vtxf_height / _glowRange, 0.0, 1.0);
          vtxf_a13 = abs(vtxf_a13 - 0.5) * 2.0;
          float vtxf_diff = step(0.005, abs(vtxf_h - vtxf_a13));
          material.diffuse += material.diffuse * (1.0 - vtxf_diff);
      }
    `}),玫瑰红:new i({fragmentShaderText:`
            void fragmentMain(FragmentInput fsInput, inout czm_modelMaterial material) {
                float _baseHeight = 50.0; // 物体的基础高度，需要修改成一个合适的建筑基础高度
                float _heightRange = 40.0; // 高亮的范围(_baseHeight ~ _baseHeight + _heightRange) 默认是 0-60米
                float _glowRange = 200.0; // 光环的移动范围(高度)
                float vtxf_height = fsInput.attributes.positionMC.y-_baseHeight;
                float vtxf_a11 = fract(czm_frameNumber / 120.0) * 3.14159265 * 2.0;
                float vtxf_a12 = vtxf_height / _heightRange + sin(vtxf_a11) * 0.1;
                material.diffuse = vec3(0.8,0.1,0.1)*vec3(vtxf_a12, vtxf_a12, vtxf_a12);
                float vtxf_a13 = fract(czm_frameNumber / 360.0);
                float vtxf_h = clamp(vtxf_height / _glowRange, 0.0, 1.0);
                vtxf_a13 = abs(vtxf_a13 - 0.5) * 2.0;
                float vtxf_diff = step(0.005, abs(vtxf_h - vtxf_a13));
                material.diffuse += material.diffuse * (1.0 - vtxf_diff);
            }
          `}),环保绿:new i({fragmentShaderText:`
      void fragmentMain(FragmentInput fsInput, inout czm_modelMaterial material) {
          float _baseHeight = 50.0; // 物体的基础高度，需要修改成一个合适的建筑基础高度
          float _heightRange = 40.0; // 高亮的范围(_baseHeight ~ _baseHeight + _heightRange) 默认是 0-60米
          float _glowRange = 120.0; // 光环的移动范围(高度)
          float vtxf_height = fsInput.attributes.positionMC.y-_baseHeight;
          float vtxf_a11 = fract(czm_frameNumber / 120.0) * 3.14159265 * 2.0;
          float vtxf_a12 = vtxf_height / _heightRange + sin(vtxf_a11) * 0.1;
          material.diffuse = vec3(0.1,0.5,0.1)*vec3(vtxf_a12, vtxf_a12, vtxf_a12);
          float vtxf_a13 = fract(czm_frameNumber / 360.0);
          float vtxf_h = clamp(vtxf_height / _glowRange, 0.0, 1.0);
          vtxf_a13 = abs(vtxf_a13 - 0.5) * 2.0;
          float vtxf_diff = step(0.005, abs(vtxf_h - vtxf_a13));
          material.diffuse += material.diffuse * (1.0 - vtxf_diff);
      }
    `})},I={meta:{path:"/cesium/white-model",title:"建筑白膜加载"},components:{Globe:C},setup(){async function l(t){t.camera.setView({destination:new M(-2.3254302818162767e6,4567209496149441e-9,3.7843622527647093e6),orientation:{heading:5.494979066208495,pitch:-.2910549916283476,roll:19288541095896505e-21}}),s=t,e(s)}async function e(t){try{o=await t.load3dtiles("/models/3dtiles/JN-WhiteModel/tileset.json"),o.customShader=n.科技青}catch(r){console.error(`Error creating tileset: ${r}`)}}const _=d("科技青");return c(_,t=>{o&&(o.customShader=n[t])}),{init:l,activeShader:_}}},N={class:"box"},S={class:"oo-panel oo-card"};function y(l,e,_,t,r,V){const m=H("Globe"),f=x,h=g;return z(),p("div",N,[a(m,{options:{terrain:!1},onCreated:t.init},null,8,["onCreated"]),b("div",S,[e[1]||(e[1]=w(" 自定义shader ",-1)),a(h,{style:{"min-width":"120px"},modelValue:t.activeShader,"onUpdate:modelValue":e[0]||(e[0]=v=>t.activeShader=v)},{default:R(()=>[a(f,{value:"科技青"}),a(f,{value:"活力黄"}),a(f,{value:"玫瑰红"}),a(f,{value:"环保绿"})]),_:1},8,["modelValue"])])])}const J=u(I,[["render",y],["__scopeId","data-v-c9ad4491"]]);export{J as default};
