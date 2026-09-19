const e=`uniform sampler2D reflectMap;
uniform sampler2D refractMap;
uniform vec3 waterNormal;
uniform vec3 fresnelParams;  // x为最小反射系数，y为最大反射系数，z为视线因子
uniform sampler2D specularMap;
uniform sampler2D normalMap;
uniform vec4 baseWaterColor;
uniform vec4 blendColor;
uniform float frequency;
uniform float waterOpacity;
uniform float animationSpeed;
uniform float amplitude;
uniform float specularIntensity;
uniform float fadeFactor;
czm_material czm_getMaterial(czm_materialInput materialInput) {
    czm_material material = czm_getDefaultMaterial(materialInput);
    float time = czm_frameNumber * animationSpeed;
    // 根据视点到当前像素的距离（positionToEyeEC）计算衰减系数，距离越远波浪扰动越弱
    float fade = max(1.0, (length(materialInput.positionToEyeEC) / 10000000000.0) * frequency * fadeFactor);
    float specularMapValue = texture(specularMap, materialInput.st).r;
    // 注意：此时不使用方向运动，只需将角度设置为0.0；
    vec4 noise = czm_getWaterNoise(normalMap, materialInput.st * frequency, time, 0.0);
    vec3 normalTangentSpace = noise.xyz * vec3(1.0, 1.0, (1.0 / amplitude));
    // 根据fade衰减法线XY分量，远处波浪更平缓。
    normalTangentSpace.xy /= fade;
    // 降低specularMapValue区域（如岸边）混合默认法线(0,0,50)，减少扰动。
    normalTangentSpace = mix(vec3(0.0, 0.0, 50.0), normalTangentSpace, specularMapValue);
    normalTangentSpace = normalize(normalTangentSpace);
    // 获取新法向量与垂直于切平面的向量的对齐比例，值越接近1说明扰动越小，用于后续漫反射增强。
    float tsPerturbationRatio = clamp(dot(normalTangentSpace, vec3(0.0, 0.0, 1.0)), 0.0, 1.0);
    // 随着高光贴图值的减少，淡化水的效果
    float alpha = mix(blendColor.a, baseWaterColor.a, specularMapValue) * specularMapValue;
    // 基础色是水和非水颜色的混合，基于镜面贴图的值，可能需要一个均匀的混合因子来更好地控制这一点
    vec3 waterColor = mix(blendColor.rgb, baseWaterColor.rgb, specularMapValue);
    // 漫射高光是基于法线的扰动程度
    waterColor += (0.1 * tsPerturbationRatio);
    // 获取水面反射的颜色
    vec2 reflect_uv = gl_FragCoord.xy / czm_viewport.zw;  // 获取屏幕uv
    vec2 refract_uv = gl_FragCoord.xy / czm_viewport.zw;  // 获取屏幕uv
    reflect_uv.s = (1.0 - reflect_uv.s);            // 反射纹理镜像翻转
    // 按照法线方向来扰动反射贴图的纹理坐标
    reflect_uv += normalTangentSpace.xy / 100.0;
    refract_uv += normalTangentSpace.xy / 100.0;
    vec3 reflectColor = texture(reflectMap, reflect_uv).rgb;
    vec3 refractColor = texture(refractMap, refract_uv).rgb;
    // 加入菲涅尔现象
    vec3 positionEC = -materialInput.positionToEyeEC;
    vec4 positionWC = czm_inverseView * vec4(positionEC, 1.0);
    vec3 cameraDir = normalize(positionWC.xyz - czm_viewerPositionWC);
    vec3 n = normalize(waterNormal);
    float fresnel = 1.0 - dot(-cameraDir, n);
    float min_rc = fresnelParams.x;         // 物体最小反射系数
    float max_rc = fresnelParams.y;         // 物体最大反射系数
    float f = fresnelParams.z;              // 视线因子
    fresnel = min_rc + (max_rc - min_rc) * pow(fresnel, f);
    // 菲涅尔值高，代表反射强(更多显示水的反射)，值低则是折射强(也可以理解成更多显示水的本色)
    material.diffuse = mix(mix(refractColor, reflectColor, fresnel), waterColor, waterOpacity);
    material.alpha = mix(alpha, 1.0, fresnel);
    material.normal = normalize(materialInput.tangentToEyeMatrix * normalTangentSpace);
    material.specular = specularIntensity;
    material.shininess = 10.0;
    return material;
}
`;export{e as w};
