const a=`// 流光折线材质 —— 自定义 Material fabric 的 GLSL 主体
// ---------------------------------------------------------------------------
// 用途：参考 plane_fight 的「动态传输线」——折线上有一段流动的光带。
//
// 说明：这是 **Material**（不是 PostProcessStage），因此入口是
// \`czm_getMaterial(czm_materialInput)\`，由 JS 侧用
//   Material._materialCache.addMaterial('FlowLine', { fabric: {..., source: 本文件}, translucent: true })
// 注册，再用 CallbackProperty 每帧取一次（time uniform 递增）即得到连续流动。
//
// 约定（Cesium 材质）：
//   · materialInput.st.s —— 沿折线的归一化弧长（0→1）
//   · materialInput.st.t —— 折线横截面方向（0→1）
//   · 返回值 czm_material 直接决定 diffuse / alpha

uniform vec4 u_color;
uniform float u_speed; // 光带移动速度（圈/秒）
uniform float u_time; // 秒
uniform float u_glowPower; // 光带锐利度
uniform float u_baseAlpha; // 底色透明度（0 则只有光带可见）

czm_material czm_getMaterial(czm_materialInput materialInput) {
  czm_material material = czm_getDefaultMaterial(materialInput);
  vec2 st = materialInput.st;

  // 沿弧长跑动的相位
  float t = fract(st.s - u_time * u_speed);
  // 前缘亮、后沿拖尾：用两个 smoothstep 夹出一个不对称光带
  float head = smoothstep(0.0, 0.18, t);
  float tail = smoothstep(1.0, 0.45, t);
  float glow = pow(head * tail, u_glowPower);

  material.diffuse = u_color.rgb;
  material.alpha = u_color.a * (u_baseAlpha + (1.0 - u_baseAlpha) * glow);
  // ⚠️ czm_material 结构体里**没有** emissive 字段（只有 emission）。
  //    写成 emissive 会让整个片元着色器编译失败：
  //      ERROR: 0:33: 'emissive' :  no such field in structure
  //      ERROR: 0:33: 'assign'   : cannot convert from 'highp 3-component vector of float'
  //                                to 'structure czm_material'
  //    编译失败时 Cesium 会静默回退到默认材质 —— 表现为「页面不报错，但流光完全没效果」。
  material.emission = u_color.rgb * glow;
  return material;
}
`;export{a as f};
