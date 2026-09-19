const n=`// 雨效果后处理 —— 世界方位锚定 + 解析距离分层 + 可配风向（自研 GLSL，Cesium 1.136 兼容）
// ---------------------------------------------------------------------------
// 背景：Cesium 1.136 的公开构建已移除 PostProcessStageLibrary.createRainStage /
// createSnowStage（实测在 public/libs/Cesium/index.js 里 grep 两者均 0 命中），
// 所以雨只能自研。演进过程（每版都是被「看着假 / 看着怪」逼出来的）：
//
//   v1 纯屏幕空间三层竖条 —— 雨丝固定在屏幕上，转相机纹丝不动，像 TV 雪花/划痕。
//   v2 列锚定到世界方位角，转相机雨幕横掠。但所有雨丝一样长一样粗，远近不分。
//   v3 加深度分层 + 可配风向 → 踩了两个坑，本版（v4）逐一修掉：
//
//   坑 A「转视角/改俯角后雨丝被拉斜拉花」：
//      v3 把**像素自身的水平偏角 dAz** 也塞进了列相位，而它的系数是
//      u_cols·u_aspect·(2π/fovX) ≈ 1800。dAz 在屏上横跨 ±半视场角，等于把整片
//      列图案横向剪切了上百列 —— 一转视角或一改俯角，雨丝就被拉成斜的、疏密不匀，
//      看着就是「形状扭曲」。正解：**锚定相位只用相机方位角 u_heading**（刚性整体平移，
//      转视角 = 整片雨幕平移，形不变），像素位置只由屏幕空间几何项决定。
//
//   坑 B「屏幕上出现一块块形状不同的雨」：
//      v3 用深度缓冲逐像素算分层权重，可深度在建筑/地形轮廓处是**阶跃**的，权重跟着跳，
//      轮廓两侧的雨丝长度/密度突变 → 一块块的怪雨。正解：改用**解析距离**——按
//      「该像素视线在地平线以下的俯角」直接算平地上的斜距（H/sin(dep)）。它在屏幕空间
//      连续可导，不依赖深度缓冲，既没有阶跃，也省掉一次纹理采样与对数深度解码。
//
//   坑 C：着色器里不能出现「斜杠+双星号」开头的单行块注释（详见文件末尾说明）。
//
// 当前做法：
//   ① 风向可配：CPU 把「风 + 下落」合成世界速度，转到相机系取横向分量 → u_dir 就是
//      雨丝在屏幕上的方向。所以风向跟着相机姿态一起变（俯视时风往哪吹就斜向哪边）。
//   ② 解析距离分层：近处雨丝长、粗、亮、疏；远处短、细、淡、密，凝成雨幕。
//      这是最有效的「去假」手段 —— 真实雨景里近处雨滴拖成线、远处只剩一层灰幕。
//   ③ 单丝随机：每列另有长度/亮度随机，头端加一颗亮点（水滴），破掉整齐感。

uniform sampler2D colorTexture;
uniform float u_intensity; // 0..1 雨强度
uniform float u_time;      // 秒（JS 侧按真实时间给，帧率抖动时雨速更稳）
uniform vec3 u_rainColor;
uniform float u_cols;      // 横向列密度（越大雨越密）
uniform float u_len;       // 雨丝长度（占屏高比例）
uniform float u_speed;     // 下落速度（屏高/秒）
uniform vec2 u_dir;        // 雨丝在屏幕上的方向（单位向量，y 向下）
uniform float u_spread;    // 横向速度占比：1 = 无风垂直落，越大雨丝越长
uniform float u_aspect;    // 屏宽/屏高
uniform float u_depthRef;  // 参考距离（= 屏幕中心地面点的斜距），k=1 即画面正中
uniform float u_H;         // 相机离地高（米），解析距离用
uniform float u_pitch;     // 相机俯仰角（弧度，向下为负）
uniform float u_tanHalfFovY; // tan(fovY / 2)
uniform float u_anchor;    // 0 = 纯屏幕锚定，1 = 纯世界方位锚定
uniform float u_heading;   // 相机方位角（弧度）

in vec2 v_textureCoordinates;

const float PI = 3.14159265358979323846;

float rainHash(vec2 p) {
  return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
}

void main(void) {
  vec4 color = texture(colorTexture, v_textureCoordinates);
  vec2 uv = v_textureCoordinates;

  // ---- 屏幕空间坐标：按 aspect 校正，再沿「雨丝方向」拆成 纵向/横向 两个轴 ----
  vec2 q = vec2((uv.x - 0.5) * u_aspect, uv.y - 0.5);
  vec2 along = u_dir;
  vec2 across = vec2(-along.y, along.x);
  float acrossCoord = dot(q, across);
  float alongCoord = dot(q, along);

  // ---- 列的世界方位锚定：只用相机方位角做**刚性整体平移**（坑 A）----
  // 转 1 弧度 → 图案平移 (u_cols·u_aspect)·3/π 列 ≈ 「转 60° 恰好平移一屏的列数」，
  // 与 fovX 无关（否则缩放时列图案会横向漂移）。形不变，只是整体掠过。
  float colBase = acrossCoord * u_cols + u_anchor * u_heading * (u_cols * u_aspect) * (3.0 / PI);

  // ---- 解析距离 → 近/中/远 三层权重（坑 B：不用深度缓冲）----
  // 该像素视线在地平线以下的俯角 → 平地上的斜距。头顶 +1 为屏幕顶部。
  float above = (uv.y - 0.5) * 2.0;
  float dep = -(u_pitch + atan(above * u_tanHalfFovY));
  float sinDep = sin(min(dep, 1.5707963)); // 超过 90°（近乎垂直下视）按 90° 算
  float distProxy = u_H / max(0.06, sinDep); // 地平线以上 sinDep<0 → 落到「很远」
  float k = u_depthRef / distProxy;

  float wNear = smoothstep(0.85, 1.90, k);
  float wFar = smoothstep(1.25, 0.50, k);
  float wMid = clamp(1.0 - wNear - wFar, 0.12, 1.0);

  float rain = 0.0;
  for (int i = 0; i < 3; i++) {
    float fi = float(i);
    float w = (i == 0) ? wNear : ((i == 1) ? wMid : wFar);

    // 近层：丝长、粗、列疏、亮；远层：丝短、细、列密、淡
    float col = colBase * (1.0 + fi * 0.55);
    float idx = floor(col);
    float seg = fract(col);

    // 每列：相位 + 长度 + 亮度 三个独立随机 → 破掉「整齐划一」的假感
    float r0 = rainHash(vec2(idx, fi * 7.0 + 3.0));
    float r1 = rainHash(vec2(idx, fi * 13.0 + 17.0));
    float r2 = rainHash(vec2(idx, fi * 29.0 + 41.0));
    float phase = r0 * 20.0;

    // 丝长近/远差 5 倍以上 —— 这是「近处拖成线、远处只剩幕」的关键
    float len = u_len * (1.50 - fi * 0.62) * (0.62 + r1 * 0.85) * u_spread;
    float p = fract(alongCoord / len + u_time * u_speed * (1.18 - fi * 0.20) / len + phase);

    // 纵向：拖尾渐隐 + 头端一颗更亮的水滴
    float head = smoothstep(0.42, 1.0, p);
    head = head * head * (0.75 + 0.25 * r2) + smoothstep(0.90, 1.0, p) * 0.55;

    // 横向：列中心高斯的芯 + 一圈很淡的晕
    float dx = seg - 0.5;
    float wk = (34.0 + fi * 46.0) * (0.8 + 0.5 * r1);
    float streak = exp(-dx * dx * wk) + exp(-dx * dx * 10.0) * 0.22;

    // 一部分列不下雨；越远层保留得越多（远处是一条长视线，雨滴自然更多）
    float thr = 0.30 - fi * 0.06;
    float keep = step(thr, rainHash(vec2(idx, fi + 71.0)));

    rain += streak * head * keep * (1.0 - fi * 0.28) * w;
  }

  rain = clamp(rain, 0.0, 1.0) * u_intensity;
  color.rgb = mix(color.rgb, u_rainColor, rain * 0.9);
  // 雨幕整体压暗一点，否则叠完偏灰发白
  color.rgb *= 1.0 - 0.20 * u_intensity;
  out_FragColor = color;
}

// ⛔ 本文件不要出现「斜杠+双星号」开头的块注释（连星号+斜杠收尾的那种）。
//    Cesium 的 ShaderSource 去注释工具是
//      source.replace(/\\/\\*\\*[\\s\\S]*?\\*\\//gm, t => t.match(/\\n/gm).length ...)
//    注释里没有换行时 t.match 返回 null → TypeError → 整条渲染管线
//    "An error occurred while rendering. Rendering has stopped."，页面直接不动。
//    一律用 // 行注释。
`;export{n as r};
