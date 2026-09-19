import{m as I,d as C,w as z,ax as ma,t as pa,U as k,I as T,P,at as da,c$ as ga,dE as _a,N as wa,aw as Aa,F as ba,M as xa,as as Ca,h as Ma,v as oa,R as va,l as ya,q as ra,e as ia,p as Ia}from"./cesium-utSEP5if.js";const Ya=[{label:"圆形警戒圈",value:"circle"},{label:"前置小扇面",value:"sector"},{label:"楔形（矩形锥）",value:"wedge"},{label:"圆锥体",value:"cone"},{label:"四棱锥体",value:"rect"},{label:"椭圆半球",value:"hemisphere"},{label:"扩散环",value:"ring"}],Xa={circle:["radius"],sector:["length","spanAngle","pitch"],wedge:["length","spanAngle","pitch","swing"],cone:["length","pitch"],rect:["length","spanAngle","spanAngle2","pitch","swing"],hemisphere:["radius"],ring:["radius","rings"]},B=Math.PI/180;function ea(e,a,i,o,t){const u=i*B,_=o*Math.cos(u)/111320,A=o*Math.sin(u)/(111320*Math.max(.01,Math.cos(a*B)));return C.fromDegrees(e+A,a+_,t)}function la(e,a,i,o){const t=T.eastNorthUpToFixedFrame(C.fromDegrees(e.lon,e.lat,e.height)),u=a*B,_=new C(i*Math.sin(u),i*Math.cos(u),o);return P.multiplyByPoint(t,_,new C)}function N(e,a,i,o,t,u){const _=[];for(let A=0;A<=u;A++){const p=A/u;_.push(ea(e.lon,e.lat,a+i*p,o,t(p)))}return _}function D(e,a=1){const i=k.fromCssColorString(e);return a===1?i:i.withAlpha(i.alpha*a)}function F(e){return new ma(new I(e,!1))}const Pa=.8,ha=1.25;function ua(e){return e.shape==="cone"?e.length*ha:e.length}function Y(e){const a=Math.tan(e.pitch*B);return e.shape==="cone"?Math.max(0,e.length*ha*Math.max(Pa,a)):Math.max(0,e.length*a)}const S="rgba(255, 255, 255, 0.5)",X=.62,$=70,ka=.32,Z=46;function G(e){return((e.spin??e.phase??0)%1+1)%1*360}function Oa(e){const a=Math.min(90,Math.max(0,e.swing??45));return Math.sin((e.phase??0)*Math.PI*2)*a}function q(e,a){return e.shape==="wedge"||e.shape==="rect"?a.heading+Oa(e):a.heading}function Ra(e,a,i,o,t,u){const _=C.fromDegrees(e.lon,e.lat,e.height),A=[],p=[];for(let l=0;l<=u;l++){const g=a-i/2+i*l/u;A.push(la(e,g,o,-t)),p.push(la(e,g,o,0))}return p.reverse(),[_,...A,...p]}function Q(e,a,i,o,t){return[C.fromDegrees(e.lon,e.lat,e.height),...N(e,a-i/2,i,o,()=>e.height,t)]}function Ea(e,a,i,o,t,u,_){const A=C.fromDegrees(e.lon,e.lat,e.height+u),p=C.fromDegrees(e.lon,e.lat,e.height+t),l=a-i/2,g=N(e,l,i,o,()=>e.height+u,_),s=N(e,l,i,o,()=>e.height+t,_);return s.reverse(),[A,...g,...s,p]}function J(e,a){const i=[];return[0,Math.floor(a.length/2),a.length-1].forEach(t=>{const u=a[t];u&&i.push(e,u)}),i}function Na(e,a,i){const o=typeof i=="function"?i:()=>i,t=[],u=new I(()=>{const s=o();return C.fromDegrees(s.lon,s.lat,s.height)},!1),_=a.visible?new I(()=>a.visible(),!1):void 0,A=s=>{const f=e.entities.add(_?{...s,show:_}:s);return t.push(f),f},p=a.showInner!==!1,l=(s,f,h)=>{a.filled&&A({name:f,polygon:{hierarchy:new I(()=>new pa(s()),!1),perPositionHeight:!0,material:F(()=>D(h??a.faceColor))}})},g=(s,f,h)=>{a.outline&&A({name:f,polyline:{positions:new I(s,!1),width:new I(()=>a.lineWidth,!1),material:F(()=>D(h??a.lineColor))}})};switch(a.shape){case"circle":{if(A({name:"radar-circle",position:u,ellipse:{semiMajorAxis:new I(()=>a.radius,!1),semiMinorAxis:new I(()=>a.radius,!1),height:new I(()=>o().height,!1),fill:a.filled,material:F(()=>D(a.faceColor)),outline:!1}}),g(()=>{const s=o(),f=N(s,0,360,a.radius,()=>s.height,96);return f.push(f[0].clone()),f},"radar-circle-ring"),p){const s=()=>{const r=o();return Q(r,r.heading+G(a),$,a.radius*X,20)};l(s,"radar-circle-inner"),g(()=>{const r=s();return r.push(r[0].clone()),r},"radar-circle-inner-line");const f=a.radius*.35,h=()=>{const r=o();return Ea(r,r.heading+G(a),$*.42,a.radius*X,0,f,8)};l(h,"radar-circle-blade",a.innerColor??S),g(()=>{const r=h();return r.push(r[0].clone()),r},"radar-circle-blade-line",a.innerColor??S),g(()=>{const r=o(),d=r.heading+G(a),n=C.fromDegrees(r.lon,r.lat,r.height+f),w=N(r,d-$*.21,$*.42,a.radius*X,()=>r.height,2);return J(n,w)},"radar-circle-beam",a.lineColor)}break}case"ring":{const s=Math.max(1,Math.round(a.rings));for(let f=0;f<s;f++){const h=f/s,r=()=>{const d=(a.phase+h)%1;return Math.max(1,a.radius*d)};a.filled&&A({name:`radar-ring-${f}-face`,position:u,ellipse:{semiMajorAxis:new I(r,!1),semiMinorAxis:new I(r,!1),height:new I(()=>o().height,!1),fill:!0,material:F(()=>D(a.faceColor,1-(a.phase+h)%1))}}),a.outline&&A({name:`radar-ring-${f}-line`,polyline:{positions:new I(()=>{const d=o(),n=r(),w=N(d,0,360,n,()=>d.height,96);return w.push(w[0].clone()),w},!1),width:new I(()=>a.lineWidth,!1),material:F(()=>D(a.lineColor,1-(a.phase+h)%1))}})}break}case"sector":case"wedge":{const s=Y(a),f=r=>q(a,r),h=()=>{const r=o();return Ra(r,f(r),a.spanAngle,a.length,s,24)};if(l(h,`radar-${a.shape}-face`),g(()=>{const r=h();return r.push(r[0].clone()),r},`radar-${a.shape}-line`),g(()=>{const r=o(),d=C.fromDegrees(r.lon,r.lat,r.height),n=N(r,f(r)-a.spanAngle/2,a.spanAngle,a.length,()=>r.height-s,24);return J(d,n)},`radar-${a.shape}-beam`),p&&l(()=>{const d=o(),n=f(d),w=C.fromDegrees(d.lon,d.lat,d.height),y=Math.max(4,a.spanAngle*.14),c=N(d,n-y,y*2,a.length,()=>d.height,6),b=N(d,n-y,y*2,a.length,()=>d.height-s,6);return b.reverse(),[w,...c,...b]},`radar-${a.shape}-scanface`,a.innerColor??S),a.shape==="sector"&&p){const r=()=>{const d=o();return Q(d,d.heading,a.spanAngle,a.length*ka,16)};l(r,"radar-sector-inner",a.innerColor??S),g(()=>{const d=r();return d.push(d[0].clone()),d},"radar-sector-inner-line",a.innerColor??S)}break}case"cone":case"rect":{const s=a.shape==="rect",f=s?4:24,h=a.spanAngle/2,r=a.spanAngle2/2,d=Y(a),n=()=>{const c=o();return C.fromDegrees(c.lon,c.lat,c.height)},w=()=>{const c=o(),b=q(a,c);return[[1,1],[-1,1],[-1,-1],[1,-1]].map(([M,x])=>{const R=(a.pitch+x*r)*B;return ea(c.lon,c.lat,b+M*h,a.length,c.height-a.length*Math.tan(R))})},y=()=>{if(s)return w();const c=o(),b=q(a,c),E=ua(a),M=[];for(let x=0;x<=f;x++){const R=b-h+a.spanAngle*(x/f);M.push(ea(c.lon,c.lat,R,E,c.height-d))}return M};l(()=>[n(),...y()],`radar-${a.shape}-side`),s&&l(()=>w(),"radar-rect-base"),g(()=>{if(s){const[b,E,M,x]=w(),R=n();return[b,E,M,x,b,R,E,R,M,R,x]}const c=[n(),...y()];return c.push(c[0].clone()),c},`radar-${a.shape}-line`),g(()=>{const c=n();return J(c,s?w():y())},`radar-${a.shape}-beam`);break}case"hemisphere":{if(A({name:"radar-hemisphere",position:u,ellipsoid:{radii:new I(()=>new C(a.radius,a.radius,a.radius),!1),minimumCone:0,maximumCone:z.PI_OVER_TWO,fill:a.filled,material:F(()=>D(a.faceColor)),outline:!1}}),g(()=>{const s=o(),f=N(s,0,360,a.radius,()=>s.height,96);return f.push(f[0].clone()),f},"radar-hemisphere-ring"),p){const s=A({name:"radar-hemisphere-arc-line",polyline:{positions:new I(()=>{const h=o(),r=h.heading+G(a),d=Z/2;return N(h,r-d,Z,a.radius,()=>h.height,12)},!1),width:new I(()=>a.lineWidth,!1),material:F(()=>D(a.innerColor??S))}});s.show=!1;const f=()=>{const h=o(),r=h.heading+G(a);return Q(h,r,Z,a.radius,12)};l(f,"radar-hemisphere-inner",a.innerColor??S),g(()=>{const h=f();return h.push(h[0].clone()),h},"radar-hemisphere-inner-line",a.innerColor??S);for(const h of t)typeof h.name=="string"&&/^radar-hemisphere-(inner|inner-line|arc-line)$/.test(h.name)&&(h.show=!1)}break}}return t}const za=Math.PI,Sa=za*2,Da=`
uniform vec4  u_color;       // 类型色（体的颜色）
uniform vec4  u_accent;      // 加亮色（网格 / 扫描 / 前缘）
uniform vec2  u_center;      // 盘心在 st 里的位置（外接正方形中心）
uniform float u_span;        // 扇面张角（弧度）；2π 表示全向
uniform float u_front;       // 扇面中轴方位（弧度，从北起顺时针）
uniform float u_sweep;       // 当前扫描方位（弧度，从北起顺时针）
uniform float u_trail;       // 扫描拖尾角宽（弧度）
uniform float u_rings;       // 距离圈数量
uniform float u_spokes;      // 方位线数量
uniform float u_waveNum;     // 径向波数量
uniform float u_wavePhase;   // 径向波相位 [0,1)
uniform float u_ringsOn;     // 0/1 开关
uniform float u_bodyAlpha;
uniform float u_gridAlpha;
uniform float u_waveAlpha;
uniform float u_sweepAlpha;
uniform float u_edgeAlpha;   // 扇面描边（弧边 + 两条直边）的不透明度

/**
 * 抗锯齿线型遮罩。x 是该层自己的「距线心距离」（单层单位），
 * halfW 是线半宽，aa 是每像素的变化量（用 fwidth 现算）。
 *
 * 为什么必须做这一步：细线用固定宽度的 smoothstep 时，屏幕上一个像素跨过的
 * 层内距离可能远大于线宽 → 线条断成虚线（软渲染下尤其明显，实测「距离圈」会碎成短弧）。
 * 把半宽取成 max(固定值, fwidth*1.5)，线宽就永远不少于 3 个像素。
 */
float czm_lineMask(float x, float halfW, float aa)
{
    float w = max(halfW, aa * 1.5);
    return 1.0 - smoothstep(w, w + max(aa, 1e-5), x);
}

czm_material czm_getMaterial(czm_materialInput materialInput)
{
    czm_material material = czm_getDefaultMaterial(materialInput);
    vec2 p = materialInput.st - u_center;
    float r = length(p) * 2.0;
    if (r > 1.0) discard;                       // 圆外不要（discard 比 alpha=0 更省且不写深度）

    // 方位：st 的极角是「从东起逆时针」；换成雷达惯用的「从北起顺时针」
    float az = atan(p.y, p.x);
    float bearing = 1.5707963 - az;
    float db = mod(bearing - u_front + 3.14159265, 6.28318531) - 3.14159265;
    if (abs(db) > u_span * 0.5) discard;        // 扇面之外不要

    // 每像素跨度（用于抗锯齿）：r 与 d 各自现算
    float aaR = max(fwidth(r), 1e-5);
    // 中心处方位线会挤成一点（摩尔纹），用一圈柔和的遮罩把「距离圈 + 方位线」压掉
    float centerMask = smoothstep(0.020, 0.090, r);

    // ① 体：外缘渐隐（一块「硬边的饼」是最显廉价的观感）
    float alpha = u_bodyAlpha * (1.0 - smoothstep(0.20, 1.0, r));

    // ② 距离圈：等距 rings 条 + 最外一圈加粗（当成警戒圈边缘）
    float rr = fract(r * max(1.0, u_rings));
    float dw = min(rr, 1.0 - rr);
    alpha += u_ringsOn * u_gridAlpha * czm_lineMask(dw, 0.016, aaR * max(1.0, u_rings)) * centerMask;
    alpha += u_ringsOn * u_gridAlpha * 1.5 * czm_lineMask(1.0 - r, 0.006, aaR);

    // ③ 方位线（每 360/spokes 一条）
    //    spokesOn 是必须的：分母已经用 max(1.0,…) 防了除零，但那样 u_spokes=0
    //    仍会画出「1 条」辐线 —— 对扩散雷达这种没有方位概念的形状就是一条杂线。
    float spokesOn = step(0.5, u_spokes);
    float f = db / (6.28318531 / max(1.0, u_spokes));
    float d = abs(f - floor(f + 0.5));
    float aaD = max(fwidth(d), 1e-5);
    alpha += spokesOn * u_gridAlpha * czm_lineMask(d, 0.008, aaD) * centerMask;

    // ④ 径向波：waveNum 条同时向外推进的带（对标 freex 的 u_startlength[] 波）
    float wb = fract(r * max(1.0, u_waveNum) - u_wavePhase);
    float band = 1.0 - abs(wb - 0.5) * 2.0;
    alpha += u_waveAlpha * band * band * band;

    // ⑤ 扫描拖尾：以扫描线为前缘，向后按角度渐隐（PPI 的招牌观感）
    float rel = mod(u_sweep - bearing, 6.28318531);
    float trail = max(0.02, u_trail);
    float sweepWeight = pow(max(0.0, 1.0 - rel / trail), 1.6);
    alpha += u_sweepAlpha * sweepWeight;
    // ⑥ 前缘亮线：rel 极小时给一条硬边，扫描线才有「刀口」
    alpha += u_sweepAlpha * 1.4 * czm_lineMask(rel, 0.006, max(fwidth(rel), 1e-5));

    // ⑦ 扇面描边：弧边（r = 1 处）+ 两条直边（db = ±span/2 处）。
    //    有限扇面（前置小扇面 / 楔形 / 四棱锥）原来边缘只会渐变消失，
    //    观感就是「扇面没描边」。这里补一圈硬描边，扇面轮廓才立得起来。
    //    全向形状（span = 2π）的两条直边在 ±180° 重合成一条穿过圆心的线，
    //    必须用 step(u_span, 6.2) 关掉（6.2832 > 6.2 → 全向时该项为 0）。
    float arcEdge = czm_lineMask(1.0 - r, 0.007, aaR);
    float sideD = abs(abs(db) - u_span * 0.5);
    float sideEdge = czm_lineMask(sideD, 0.009, max(fwidth(sideD), 1e-5)) * step(u_span, 6.2);
    float edgeW = max(arcEdge, sideEdge);
    alpha += u_edgeAlpha * edgeW;

    material.diffuse = mix(u_color.rgb, u_accent.rgb, clamp(max(sweepWeight, edgeW), 0.0, 1.0));
    material.emission = u_accent.rgb * (sweepWeight * 0.35 + edgeW * u_edgeAlpha * 0.5);
    material.alpha = clamp(alpha, 0.0, 1.0) * u_color.a;
    return material;
}
`,Fa=`
uniform vec4  u_color;
uniform vec4  u_accent;
uniform float u_span;        // 扇面张角（弧度）
uniform float u_front;       // 扇面中轴方位（弧度）
uniform float u_sweep;       // 当前扫描方位（弧度）
uniform float u_trail;       // 拖尾角宽（弧度）
uniform float u_spokes;      // 方位线数量
uniform float u_waveNum;     // 高度方向的波数量
uniform float u_wavePhase;   // 波相位 [0,1)
uniform float u_flip;        // 0 = 亮在底边（竖直波束壁）；1 = 亮在顶边（向下扩散锥）
uniform float u_bodyAlpha;
uniform float u_gridAlpha;
uniform float u_waveAlpha;
uniform float u_sweepAlpha;
uniform float u_azOffset;    // st.x = 0 对应的罗盘方位（弧度，见 angularOffsetOf）

float czm_lineMask(float x, float halfW, float aa)
{
    float w = max(halfW, aa * 1.5);
    return 1.0 - smoothstep(w, w + max(aa, 1e-5), x);
}

czm_material czm_getMaterial(czm_materialInput materialInput)
{
    czm_material material = czm_getDefaultMaterial(materialInput);
    // u_flip 把「高度分数」翻过来：竖直波束壁的原点在**底边**（天线口在下），
    // 而向下扩散的圆锥体原点是**顶边**（锥尖贴在目标上、锥口朝下）。
    // 翻转之后 ①体亮度 与 ③波走向 两条都自动跟着翻，不用分别改公式。
    float h = mix(materialInput.st.y, 1.0 - materialInput.st.y, u_flip);

    // st.x 是「绕轴角度分数」。它的零点**约定上**应当等于正北 ——
    // 但那是 CylinderGeometry 的顶点起算方式决定的**实现细节**，不是接口承诺。
    // 所以这里不写死 0，统一加 u_azOffset（调用方用 angularOffsetOf 从建好的
    // 几何里反解出来），让 u_front / u_sweep 这些「按罗盘方位给」的量与 st 坐标系
    // 永远同源 —— 否则扫描窗口会被整体旋到任意方位，扇面之外留下一条竖直亮带。
    //
    // ⚠️ 实测结论（1.136 + CylinderGeometry）：u_azOffset 解出来是 **0** ——
    //    顶点从 (0, r) 起算，atan2(x, y) 正好等于 st.x·2π，所以它在本版本上是
    //    恒等变换。需求 3 / 4 的「扇面区域外不要有滚动效果」**不是靠它修的**，而是靠
    //    ① if (abs(db) > u_span * 0.5) discard 这道角度窗口裁剪；
    //    ② 窗口中轴 u_front 与可见扇面实体同源（都取 anchorFor 的 heading）。
    //    保留这一项是因为它把「靠猜的偏移」变成「量出来的偏移」：哪天 Cesium 改了
    //    圆柱 / 圆锥的顶点起算方式，这里不必跟着改公式。QA 断言的是
    //    「窗口宽度 = 可见扇面宽度」+「窗口中轴 = 可见扇面中轴」，不是 u_azOffset 非零。
    //
    // ⚠️ 别照抄 PPI 的换算 —— 两套 st 约定根本不同：
    //    · PPI 建在 EllipseGeometry 上，它的 st 是「外接正方形归一化坐标」，
    //      所以要用 90° − atan2(p.y, p.x) 才能换成「从北起顺时针」的罗盘方位；
    //    · BEAM 建在 CylinderGeometry 上，它的 st.x **本身就是绕轴角度分数**，
    //      乘 2π 直接就是罗盘方位。
    //    把 PPI 那句 90° − … 抄到 BEAM 上会**正好差 90°** → 扫描窗口被整体旋出扇面，
    //    在扇面之外留下一条竖直亮带（需求 3 / 4 点名要去掉的就是这个观感）。
    float bearing = u_azOffset + materialInput.st.x * 6.28318531;
    float db = mod(bearing - u_front + 3.14159265, 6.28318531) - 3.14159265;
    if (abs(db) > u_span * 0.5) discard;

    // ① 体：靠近雷达原点（h 小）更亮，向上渐隐 → 「波束从天线口射出」的体积感
    float alpha = u_bodyAlpha * pow(1.0 - h, 1.4);

    // ② 竖直网格线（每 360/spokes 一条）
    //    与 PPI 同款守卫：u_spokes = 0 时必须一条都不画。分母的 max(1.0,…) 只防了除零，
    //    单独用会让 u_spokes=0 仍然画出「1 条」经线 —— 对没有方位概念的锥体就是一条杂线。
    float spokesOn = step(0.5, u_spokes);
    float f = db / (6.28318531 / max(1.0, u_spokes));
    float d = abs(f - floor(f + 0.5));
    alpha += spokesOn * u_gridAlpha * czm_lineMask(d, 0.010, max(fwidth(d), 1e-5)) * (1.0 - h * 0.6);

    // ③ 高度方向的波（向上推进）
    float wb = fract(h * max(1.0, u_waveNum) - u_wavePhase);
    float band = 1.0 - abs(wb - 0.5) * 2.0;
    alpha += u_waveAlpha * band * band * band * (1.0 - h * 0.5);

    // ④ 扫描叶片：以扫描线为前缘的竖直亮片
    float rel = mod(u_sweep - bearing, 6.28318531);
    float trail = max(0.02, u_trail);
    float sweepWeight = pow(max(0.0, 1.0 - rel / trail), 1.4);
    alpha += u_sweepAlpha * sweepWeight * (1.0 - h * 0.75);
    alpha += u_sweepAlpha * 1.3 * czm_lineMask(rel, 0.008, max(fwidth(rel), 1e-5)) * (1.0 - h * 0.5);

    material.diffuse = mix(u_color.rgb, u_accent.rgb, clamp(sweepWeight, 0.0, 1.0));
    material.emission = u_accent.rgb * sweepWeight * 0.3;
    material.alpha = clamp(alpha, 0.0, 1.0) * u_color.a;
    return material;
}
`,Wa=`
uniform vec4  u_color;
uniform vec4  u_accent;
uniform float u_front;
uniform float u_sweep;
uniform float u_trail;
uniform float u_rings;       // 纬圈数量
uniform float u_spokes;      // 经线数量
uniform float u_waveNum;     // 仰角方向波数量
uniform float u_wavePhase;
uniform float u_bodyAlpha;
uniform float u_gridAlpha;
uniform float u_waveAlpha;
uniform float u_sweepAlpha;

float czm_lineMask(float x, float halfW, float aa)
{
    float w = max(halfW, aa * 1.5);
    return 1.0 - smoothstep(w, w + max(aa, 1e-5), x);
}

czm_material czm_getMaterial(czm_materialInput materialInput)
{
    czm_material material = czm_getDefaultMaterial(materialInput);
    float el = (materialInput.st.y - 0.5) * 2.0;   // 0 = 赤道，1 = 天顶
    if (el < 0.0) discard;
    float bearing = materialInput.st.x * 6.28318531;

    // ① 体：底部亮、靠近天顶渐隐（半球壳如果整片同色就成了「玻璃泡」）
    float alpha = u_bodyAlpha * (1.0 - smoothstep(0.0, 1.0, el));

    // ② 纬圈
    float rr = fract(el * max(1.0, u_rings));
    float dw = min(rr, 1.0 - rr);
    alpha += u_gridAlpha * czm_lineMask(dw, 0.018, max(fwidth(el), 1e-5) * max(1.0, u_rings));

    // ③ 经线
    float f = bearing / (6.28318531 / max(1.0, u_spokes));
    float d = abs(f - floor(f + 0.5));
    alpha += u_gridAlpha * 0.8 * czm_lineMask(d, 0.011, max(fwidth(d), 1e-5)) * (1.0 - el * 0.5);

    // ④ 仰角方向的波（沿球面往上走）
    float wb = fract(el * max(1.0, u_waveNum) - u_wavePhase);
    float band = 1.0 - abs(wb - 0.5) * 2.0;
    alpha += u_waveAlpha * band * band * band * (1.0 - el * 0.6);

    // ⑤ 扫描子午面：绕垂直轴自转的亮扇
    float rel = mod(u_sweep - bearing, 6.28318531);
    float trail = max(0.02, u_trail);
    float sweepWeight = pow(max(0.0, 1.0 - rel / trail), 1.5);
    alpha += u_sweepAlpha * sweepWeight * (1.0 - el * 0.7);
    alpha += u_sweepAlpha * 1.3 * czm_lineMask(rel, 0.008, max(fwidth(rel), 1e-5)) * (1.0 - el * 0.4);

    material.diffuse = mix(u_color.rgb, u_accent.rgb, clamp(sweepWeight, 0.0, 1.0));
    material.emission = u_accent.rgb * sweepWeight * 0.35;
    material.alpha = clamp(alpha, 0.0, 1.0) * u_color.a;
    return material;
}
`,Ta=`
uniform vec4  u_color;       // 扇锥面色
uniform vec4  u_accent;      // 棱线颜色（提亮）
uniform float u_bodyAlpha;   // 面色不透明度 —— 常数，所有面完全一致
uniform float u_edgeAlpha;   // 棱线不透明度

float czm_lineMask(float x, float halfW, float aa)
{
    float w = max(halfW, aa * 1.5);
    return 1.0 - smoothstep(w, w + max(aa, 1e-5), x);
}

czm_material czm_getMaterial(czm_materialInput materialInput)
{
    czm_material material = czm_getDefaultMaterial(materialInput);
    float t = materialInput.st.y;   // 0 = 顶点，1 = 远端
    float s = materialInput.st.x;   // 0 = 左棱，1 = 右棱

    // ① 面色：常量 → 屋顶 / 地板 / 立面 / 侧壁完全同色同亮（不再有「没填色的面」）
    float alpha = u_bodyAlpha;

    // ② 棱线：左右两条侧棱（s 贴 0 / 1）+ 远端一圈（t 贴 1）——
    //    把「顶点连到各角点」的骨架画出来。
    float de = min(s, 1.0 - s);
    float edge = czm_lineMask(de, 0.012, max(fwidth(de), 1e-5));
    edge = max(edge, czm_lineMask(1.0 - t, 0.010, max(fwidth(t), 1e-5)));

    material.diffuse = mix(u_color.rgb, u_accent.rgb, clamp(edge, 0.0, 1.0));
    material.emission = u_accent.rgb * (edge * 0.4);
    material.alpha = clamp(alpha + u_edgeAlpha * edge, 0.0, 1.0) * u_color.a;
    return material;
}
`,j={rings:4,spokes:12,trail:z.toRadians(70),waveNum:4,wavePeriod:3.2,bodyAlpha:.2,gridAlpha:.3,waveAlpha:.16,sweepAlpha:.42,edgeAlpha:0,ppi:!0,flipBeam:!1,beam:!0,wedge:!0,wedgeAlpha:.5,wedgeEdgeAlpha:.6,legacyMode:"ghost"};function Za(e,a,i){switch(e){case"sector":case"wedge":return{...i,beam:!1,spokes:12,waveNum:0,waveAlpha:0,edgeAlpha:.9,accent:k.fromCssColorString(a).withAlpha(1).toCssColorString(),wedge:!0,legacyMode:"ghost"};case"cone":return{...i,ppi:!1,rings:0,spokes:8,waveNum:10,waveAlpha:.6,sweepAlpha:0,gridAlpha:.2,bodyAlpha:.42,flipBeam:!0,accent:k.fromCssColorString(a).brighten(-.35,new k).withAlpha(1).toCssColorString()};case"rect":return{...i,ppi:!1,rings:0,spokes:4,waveNum:10,waveAlpha:.6,sweepAlpha:0,gridAlpha:.2,bodyAlpha:.42,flipBeam:!0,legacyMode:"hide",accent:k.fromCssColorString(a).brighten(-.35,new k).withAlpha(1).toCssColorString()};case"hemisphere":return{...i,domeSweep:!1,waveNum:0,waveAlpha:0,sweepAlpha:.55};case"ring":return{...i,ppi:!1,legacyMode:"show"};case"circle":default:return{...i}}}const K=()=>Aa.POSITION_AND_ST,La=.003;function H(e,a,i){return new wa({fabric:{type:e,uniforms:i,source:a},translucent:!0})}function V(e,a,i){const o=new ba({geometryInstances:new xa({geometry:a}),appearance:new Ca({material:i,flat:!0,closed:!1,translucent:!0}),asynchronous:!1,allowPicking:!1,cull:!1});return e.scene.primitives.add(o),o}function Ga(e,a,i,o){const t=o+1,u=1+t+t,_=new Float64Array(u*3),A=new Float32Array(u*2),p=(n,w,y,c,b,E)=>{_[n*3]=w,_[n*3+1]=y,_[n*3+2]=c,A[n*2]=b,A[n*2+1]=E};p(0,0,0,0,.5,0);const l=e/2;for(let n=0;n<t;n++){const w=n/o,y=-l+e*w,c=a*Math.sin(y),b=a*Math.cos(y);p(1+n,c,b,-i,w,1),p(1+t+n,c,b,0,w,1)}const g=[];for(let n=0;n<o;n++)g.push(0,1+t+n,1+t+n+1);for(let n=0;n<o;n++)g.push(0,1+n+1,1+n);for(let n=0;n<o;n++){const w=1+n,y=1+n+1,c=1+t+n,b=1+t+n+1;g.push(w,y,b,w,b,c)}const s=1,f=1+t,h=1+o,r=1+t+o;return g.push(0,f,s),g.push(0,h,r),new Ma({attributes:{position:new oa({componentDatatype:ra.DOUBLE,componentsPerAttribute:3,values:_}),st:new oa({componentDatatype:ra.FLOAT,componentsPerAttribute:2,values:A})},indices:g,primitiveType:va.TRIANGLES,boundingSphere:ya.fromVertices(Array.from(_))})}function aa(e,a){const i=k.fromCssColorString(e);return i.withAlpha(i.alpha*a).toCssColorString()}function sa(e){return k.fromCssColorString(e).withAlpha(1).toCssColorString()}function fa(e){var u,_,A,p;const a=(_=(u=e==null?void 0:e.attributes)==null?void 0:u.position)==null?void 0:_.values,i=(p=(A=e==null?void 0:e.attributes)==null?void 0:A.st)==null?void 0:p.values;if(!a||!i)return 0;let o=-1,t=-1;for(let l=0;l<i.length/2;l++){const g=a[l*3],s=a[l*3+1],f=g*g+s*s;f>t&&(t=f,o=l)}return o<0?0:Math.atan2(a[o*3],a[o*3+1])-i[o*2]*Math.PI*2}const Ba=/(-blade|-blade-line|-beam)$/,Ua=/(-inner|-inner-line)$/,$a=.3,Ha=1,Va=.85;function qa(e,a,i,o={}){const t={...j,...o},u=typeof i=="function"?i:()=>i,_={lon:0,lat:0,height:0,heading:0},A=()=>{const m=u(),v=a.lift;return v?(_.lon=m.lon,_.lat=m.lat,_.height=m.height+v,_.heading=m.heading,_):m},p=u(),l=a.shape,g=t.legacyMode!=="show";g&&(a.faceColor=aa(a.faceColor,$a),a.innerColor&&(a.innerColor=aa(a.innerColor,Ha)),a.lineColor&&(a.lineColor=aa(a.lineColor,Va)));const s=Na(e,a,A);if(t.legacyMode==="hide")for(const m of s)m.show=!1;else if(g){const m=l==="circle"||l==="ring",v=t.wedge&&(l==="sector"||l==="wedge");for(const O of s)typeof O.name=="string"&&(Ba.test(O.name)||m&&Ua.test(O.name)||v&&/-face$/.test(O.name))&&(O.show=!1)}const f=[],h=[],r=[],d=l==="circle"||l==="ring"||l==="hemisphere"?a.radius:ua(a),n=Math.max(1,d);a.lift=Math.max(30,n*.002);const w=sa(a.faceColor),y=sa(a.lineColor||a.faceColor),c=o.accent?k.fromCssColorString(o.accent):k.fromCssColorString(y).brighten(.55,new k),b=C.fromDegrees(p.lon,p.lat,p.height),M=l==="circle"||l==="ring"||l==="hemisphere"||l==="cone"||l==="rect"?Sa:z.toRadians(Math.max(1,a.spanAngle)),x=z.toRadians(p.heading),R=(m,v,O)=>{f.push(O===void 0?{prim:m,baseMM:v}:{prim:m,baseMM:v,yawBias:O}),r.push(m)};if(t.ppi!==!1){const m=H("RadarPPI",Da,{u_color:k.fromCssColorString(w).withAlpha(1),u_accent:c,u_center:new Ia(.5,.5),u_span:M,u_front:x,u_sweep:x,u_trail:t.trail,u_rings:t.rings,u_spokes:l==="circle"||l==="ring"?Math.max(0,t.spokes):0,u_waveNum:t.waveNum,u_wavePhase:0,u_ringsOn:t.rings>0?1:0,u_bodyAlpha:t.bodyAlpha,u_gridAlpha:t.gridAlpha,u_waveAlpha:t.waveAlpha,u_sweepAlpha:t.sweepAlpha,u_edgeAlpha:t.edgeAlpha??0});h.push(m);const v=new da({center:b,semiMajorAxis:n,semiMinorAxis:n,height:p.height,vertexFormat:K()});R(V(e,v,m),P.IDENTITY.clone())}if(t.beam!==!1&&l!=="circle"&&l!=="ring"&&l!=="hemisphere"){const m=t.flipBeam===!0,v=l==="rect",O=Math.max(0,z.toRadians(Math.max(0,a.pitch)))+z.toRadians(Math.max(0,a.spanAngle2)/2),L=v?Math.max(600,n*Math.tan(O)):m?Math.max(600,Y(a)):Math.max(600,n*.1),W=new ga({length:L,topRadius:m?Math.max(1,n*.03):n,bottomRadius:n,slices:v?4:48,openEnded:!0,vertexFormat:K()}),U=H("RadarBeam",Fa,{u_color:k.fromCssColorString(w).withAlpha(1),u_accent:c,u_span:M,u_front:x,u_sweep:x,u_trail:t.trail,u_spokes:l==="circle"||l==="ring"?Math.max(0,t.spokes):v?4:m?0:Math.max(1,t.spokes),u_waveNum:t.waveNum,u_wavePhase:0,u_flip:m?1:0,u_bodyAlpha:t.bodyAlpha*.7,u_gridAlpha:t.gridAlpha*.6,u_waveAlpha:t.waveAlpha*.7,u_sweepAlpha:t.sweepAlpha*.85,u_azOffset:fa(W)});h.push(U);const ca=V(e,W,U);R(ca,T.eastNorthUpToFixedFrame(C.fromDegrees(p.lon,p.lat,m?p.height-L/2:p.height+L/2)),v?Math.PI/4-fa(W):void 0)}if((l==="sector"||l==="wedge")&&t.wedge!==!1){const m=t.wedgeColor?k.fromCssColorString(t.wedgeColor):k.fromCssColorString(w).withAlpha(1),v=t.wedgeEdge?k.fromCssColorString(t.wedgeEdge):c,O=Math.max(600,Y(a)),L=Ga(M,n,O,24),W=H("RadarWedge",Ta,{u_color:m.withAlpha(1),u_accent:v.withAlpha(1),u_bodyAlpha:t.wedgeAlpha??j.wedgeAlpha,u_edgeAlpha:t.wedgeEdgeAlpha??j.wedgeEdgeAlpha});h.push(W);const U=V(e,L,W);R(U,T.eastNorthUpToFixedFrame(b),0)}if(l==="hemisphere"){const m=H("RadarDome",Wa,{u_color:k.fromCssColorString(w).withAlpha(1),u_accent:c,u_front:x,u_sweep:x,u_trail:t.trail,u_rings:t.rings,u_spokes:Math.max(1,t.spokes),u_waveNum:t.waveNum,u_wavePhase:0,u_bodyAlpha:t.bodyAlpha*.8,u_gridAlpha:t.gridAlpha*.9,u_waveAlpha:t.waveAlpha*.8,u_sweepAlpha:t.domeSweep===!1?0:t.sweepAlpha*.9});h.push(m);const v=V(e,new _a({radii:new C(n,n,n),maximumCone:z.PI_OVER_TWO,stackPartitions:16,slicePartitions:48,vertexFormat:K()}),m);R(v,T.eastNorthUpToFixedFrame(b))}const ta=Math.max(30,n*.002);let na=ta;return{entities:s,primitives:r,materials:h,gfxCount:r.length,shape:l,read:u,refFrame:T.eastNorthUpToFixedFrame(b),baseLift:ta,get lift(){return na},entries:f,visibleOf:o.visible,setVisible(m){for(const v of f)v.prim.show=m},setLift(m){na=m,a.lift=m},dispose(){if(e&&typeof e.isDestroyed=="function"&&!e.isDestroyed())for(const m of f)e.scene.primitives.remove(m.prim);f.length=0,r.length=0,h.length=0,s.length=0}}}function Qa(e,a){const i=typeof e=="function"?e:()=>e,o={lon:0,lat:0,height:0,heading:0};return()=>{const t=i(),u=a()||0;return u?(o.lon=t.lon,o.lat=t.lat,o.height=t.height+u,o.heading=t.heading,o):t}}function Ja(e,a,i,o,t={}){if(!e||typeof e.isDestroyed=="function"&&e.isDestroyed())return;const u=Math.max(.2,t.wavePeriod??j.wavePeriod),_=i/u%1,A=new P,p=new P,l=new P,g=new P,s=new P,f=new ia,h=new P,r=new C,d=new C;for(const n of a){const w=n.read();if(n.visibleOf){const M=n.visibleOf();for(const x of n.entries)x.prim.show=M;if(!M)continue}C.fromDegrees(w.lon,w.lat,w.height,void 0,r),T.eastNorthUpToFixedFrame(r,void 0,l),P.inverse(n.refFrame,p);const y=C.distance(e.camera.positionWC,r),c=Math.max(n.baseLift,y*La);n.setLift&&n.setLift(c),P.fromTranslation(C.fromElements(0,0,c,d),g),P.multiply(l,g,l),P.multiply(l,p,A);const b=z.toRadians(o(n)),E=z.toRadians(t.frontOf?t.frontOf(n):w.heading);for(const M of n.materials){const x=M.uniforms;x.u_sweep=b,"u_front"in x&&(x.u_front=E),x.u_wavePhase=_}for(const M of n.entries)P.multiply(A,M.baseMM,s),M.yawBias!==void 0&&(P.fromRotationTranslation(ia.fromRotationZ(-E+M.yawBias,f),void 0,h),P.multiply(s,h,s)),M.prim.modelMatrix=P.clone(s,new P)}}export{Ya as R,Xa as S,Na as b,qa as c,Qa as l,Za as r,Ja as u};
