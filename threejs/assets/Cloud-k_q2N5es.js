import{G}from"./index-Dn_qgZKj.js";import{g as R,h as q,i as j,_ as X,c as Y,b as K,a,j as C,v as B,n as J,k as y,t as S,d as Q,r as Z,o as $}from"./index-5WYVxu99.js";import"./Cesium2s.esm-BZusVx6M.js";import"./MapButtons-0Y_ttAEs.js";import"./el-select-DUHu5zMh.js";import"./services-qDwRdj0S.js";const D=window.Cesium;async function U(u,e,i,t,r){const s=await(await fetch(e)).arrayBuffer(),o=new Uint8Array(s),f=t*r,E=i*f,v=new Uint8Array(E*4);for(let c=0;c<o.length;c++){const p=o[c];v[c*4]=p,v[c*4+1]=p,v[c*4+2]=p,v[c*4+3]=255}const m=new D.Texture({context:u,width:i,height:f,pixelFormat:D.PixelFormat.RGBA,pixelDatatype:D.PixelDatatype.UNSIGNED_BYTE,source:{width:i,height:f,arrayBufferView:v},sampler:new D.Sampler({wrapS:D.TextureWrap.CLAMP_TO_EDGE,wrapT:D.TextureWrap.CLAMP_TO_EDGE,minificationFilter:D.TextureMinificationFilter.LINEAR,magnificationFilter:D.TextureMagnificationFilter.LINEAR})});return console.log(`Loaded Cesium flattened R8 3D->2D texture: ${e} (${i}x${t}x${r} -> ${i}x${f})`),m}const ee=new URL("/assets/shape-C0zrEmxc.bin",import.meta.url).href,te=new URL("/assets/shape_detail-Tuf-gW3D.bin",import.meta.url).href,oe=new URL("/assets/local_weather-DSzanC6h.png",import.meta.url).href;async function ie(u,e={}){const i={cloudAltitude:e.cloudAltitude??750,cloudHeight:e.cloudHeight??800,cloudDensityScale:e.cloudDensityScale??.25,cloudCover:e.cloudCover??.3,cloudSpeed:e.cloudSpeed??.02,shapeAmount:e.shapeAmount??1,shapeDetailAmount:e.shapeDetailAmount??1,shapeAlteringBias:e.shapeAlteringBias??.35,coverageFilterWidth:e.coverageFilterWidth??.6,scatteringCoefficient:e.scatteringCoefficient??1,absorptionCoefficient:e.absorptionCoefficient??0,volumetricCloudSteps:Math.max(4,Math.floor(e.volumetricCloudSteps??80)),sunMarchSteps:e.sunMarchSteps??6,weatherMipBias:e.weatherMipBias??.35,jitterAmount:e.jitterAmount??.38,jitterScale:e.jitterScale??1.15,rayleighCoeff:e.rayleighCoeff??new Cesium.Cartesian3(27e-7,5e-6,1e-5),mieCoeff:e.mieCoeff??new Cesium.Cartesian3(5e-7,5e-7,5e-7),sunBrightness:e.sunBrightness??25,earthRadius:6371e3,powderScale:e.powderScale??.8,powderExponent:e.powderExponent??2,skyLightScale:e.skyLightScale??1,cloudShadowIntensity:e.cloudShadowIntensity??.5,enableVolumetricLight:e.enableVolumetricLight??!1,volumetricLightIntensity:e.volumetricLightIntensity??1,fogDensity:e.fogDensity??3e-5},t=u.scene.context;let r=null,l=null,s=null,o=null;try{r=await U(t,ee,128,128,128),l=await U(t,te,32,32,32);const n=new Image;n.src=oe,await new Promise(x=>{n.onload=x,n.onerror=()=>x()}),n.complete&&n.naturalWidth>0&&(s=new Cesium.Texture({context:t,source:n,sampler:new Cesium.Sampler({wrapS:Cesium.TextureWrap.REPEAT,wrapT:Cesium.TextureWrap.REPEAT,minificationFilter:Cesium.TextureMinificationFilter.LINEAR,magnificationFilter:Cesium.TextureMagnificationFilter.LINEAR})}),typeof s.generateMipmap=="function"&&s.generateMipmap()),console.log("Cloud textures loaded:",{shape:!!r,detail:!!l,weather:!!s,stbn:!!o})}catch(n){console.warn("Failed to load cloud textures:",n)}function f(n,x,g){const d=document.createElement("canvas");d.width=1,d.height=1;const b=d.getContext("2d");return b.fillStyle=`rgb(${n},${x},${g})`,b.fillRect(0,0,1,1),new Cesium.Texture({context:t,source:d,sampler:new Cesium.Sampler({wrapS:Cesium.TextureWrap.REPEAT,wrapT:Cesium.TextureWrap.REPEAT})})}function E(){const g=new Uint8Array(65536);for(let d=0;d<128*128;d++){const b=Math.floor(Math.random()*256),P=d*4;g[P]=b,g[P+1]=b,g[P+2]=b,g[P+3]=255}return new Cesium.Texture({context:t,width:128,height:128,pixelFormat:Cesium.PixelFormat.RGBA,pixelDatatype:Cesium.PixelDatatype.UNSIGNED_BYTE,source:{width:128,height:128,arrayBufferView:g},sampler:new Cesium.Sampler({wrapS:Cesium.TextureWrap.REPEAT,wrapT:Cesium.TextureWrap.REPEAT,minificationFilter:Cesium.TextureMinificationFilter.NEAREST,magnificationFilter:Cesium.TextureMagnificationFilter.NEAREST})})}r||(r=f(128,128,128)),l||(l=f(128,128,128)),s||(s=f(180,180,180)),o||(o=E());const v=`
    precision highp float;
    uniform sampler2D colorTexture;
    uniform sampler2D depthTexture;
    in vec2 v_textureCoordinates;

    // Cloud layer
    uniform float cloudAltitude;
    uniform float cloudHeight;
    uniform float cloudDensityScale;
    uniform float cloudCover;
    uniform float cloudSpeed;

    // Shape
    uniform float shapeAmount;
    uniform float shapeDetailAmount;
    uniform float shapeAlteringBias;
    uniform float coverageFilterWidth;

    // Scattering
    uniform float scatteringCoefficient;
    uniform float absorptionCoefficient;

    // Rendering
    uniform int volumetricCloudSteps;
    uniform int sunMarchSteps;
    uniform float weatherMipBias;
    uniform float jitterAmount;
    uniform float jitterScale;

    // Atmosphere
    uniform vec3 rayleighCoeff;
    uniform vec3 mieCoeff;
    uniform float sunBrightness;
    uniform float earthRadius;

    // Visual
    uniform float powderScale;
    uniform float powderExponent;
    uniform float skyLightScale;
    uniform float cloudShadowIntensity;
    uniform bool enableVolumetricLight;
    uniform float volumetricLightIntensity;
    uniform float fogDensity;

    // Textures
    uniform sampler2D shapeTexture;
    uniform sampler2D shapeDetailTexture;
    uniform sampler2D weatherTexture;
    uniform sampler2D stbnTexture;
    uniform vec2 resolution;

    const float PI = 3.14159265359;
    const float RECIPROCAL_PI4 = 0.07957747154594767;
    const float rLOG2 = 1.0 / log(2.0);

    #define SHAPE_DEPTH 128.0
    #define SHAPE_DETAIL_DEPTH 32.0

    // three-geospatial shape repeat: 0.0003 (ECEF meters)
    const vec3 SHAPE_REPEAT = vec3(0.0003);
    // three-geospatial detail repeat: 0.006
    const vec3 SHAPE_DETAIL_REPEAT = vec3(0.006);
    // three-geospatial weather repeat: 100 (globe UV space)
    const vec2 WEATHER_REPEAT = vec2(100.0);

    const float CLOUDS_MAX_VIEWING_DISTANCE = 250000.0;
    const float DEPTH_EPSILON = 1e-5;
    const float SURFACE_SHADOW_BIAS = 24.0;

    #define cloudMinHeight cloudAltitude
    #define cloudMaxHeight (cloudAltitude + cloudHeight)
    #define d02(x) (abs(x) + 1e-3)

    // === Flattened 3D texture sampling ===
    vec4 sampleFlattened3D(sampler2D tex, vec3 uvw, float numSlices) {
      vec3 w = fract(uvw);
      float slice = w.z * (numSlices - 1.0);
      float s0 = floor(slice);
      float s1 = min(s0 + 1.0, numSlices - 1.0);
      float sf = slice - s0;
      float inv = 1.0 / numSlices;
      vec2 uv0 = vec2(w.x, (s0 + w.y) * inv);
      vec2 uv1 = vec2(w.x, (s1 + w.y) * inv);
      return mix(texture(tex, uv0), texture(tex, uv1), sf);
    }

    float remapClamped(float v, float lo, float hi) {
      return clamp((v - lo) / (hi - lo), 0.0, 1.0);
    }

    // === Cube-sphere UV mapping (from three-geospatial) ===
    vec2 getCubeSphereUv(vec3 position) {
      vec3 n = normalize(position);
      vec3 f = abs(n);
      vec3 c = n / max(f.x, max(f.y, f.z));
      vec2 m;
      if (f.y > f.x && f.y > f.z) {
        m = c.y > 0.0 ? vec2(-n.x, n.z) : n.xz;
      } else if (f.x > f.y && f.x > f.z) {
        m = c.x > 0.0 ? n.yz : vec2(-n.y, n.z);
      } else {
        m = c.z > 0.0 ? n.xy : vec2(n.x, -n.y);
      }
      vec2 m2 = m * m;
      float q = dot(m2.xy, vec2(-2.0, 2.0)) - 3.0;
      float q2 = q * q;
      vec2 uv;
      uv.x = sqrt(max(0.0, 1.5 + m2.x - m2.y - 0.5 * sqrt(max(0.0, -24.0 * m2.x + q2)))) * (m.x > 0.0 ? 1.0 : -1.0);
      uv.y = sqrt(max(0.0, 6.0 / max(0.001, 3.0 - uv.x * uv.x))) * m.y;
      return uv * 0.5 + 0.5;
    }

    // === Shape altering function (from three-geospatial) ===
    float shapeAltering(float heightFraction, float bias) {
      float biased = pow(clamp(heightFraction, 0.0, 1.0), bias);
      float x = clamp(biased * 2.0 - 1.0, -1.0, 1.0);
      return 1.0 - x * x;
    }

    vec2 raySphereIntersect(vec3 r0, vec3 rd, float sr) {
      float a = dot(rd, rd);
      float b = 2.0 * dot(rd, r0);
      float c = dot(r0, r0) - sr * sr;
      float d = b * b - 4.0 * a * c;
      if (d < 0.0) return vec2(-1.0);
      float sqrtD = sqrt(d);
      return vec2((-b - sqrtD) / (2.0 * a), (-b + sqrtD) / (2.0 * a));
    }

    float calcEarthShadow(vec3 p, vec3 sunVector) {
      vec2 hit = raySphereIntersect(p, sunVector, earthRadius);
      return hit.x > 0.0 ? 0.0 : 1.0;
    }

    float IGN(float x, float y) {
      return fract(52.9829189 * fract(0.06711056 * x + 0.00583715 * y));
    }

    float getSTBN() {
      return texture(stbnTexture, gl_FragCoord.xy / vec2(128.0, 128.0)).r;
    }

    float getDither() {
      float ign = IGN(gl_FragCoord.x, gl_FragCoord.y);
      float blue = getSTBN();
      float mixed = fract(blue + ign * 0.754877666);
      // Keep some stochastic offset, but bias it closer to the ray center so
      // the single-frame noise does not show up as coarse grain.
      return mix(0.5, mixed, jitterAmount);
    }

    float getWeatherMipLevel(vec2 uv, float distToCamera) {
      vec2 coord = uv * resolution;
      vec2 ddx = dFdx(coord);
      vec2 ddy = dFdy(coord);
      float deltaMaxSqr = max(dot(ddx, ddx), dot(ddy, ddy)) * 0.1;
      float screenMip = max(0.0, 0.5 * log2(max(1.0, deltaMaxSqr)));
      float distanceMip = smoothstep(30000.0, 150000.0, distToCamera) * 4.0;
      return screenMip + distanceMip + weatherMipBias;
    }

    float getCloudDistanceVisibility(float cloudDistance) {
      return exp(-max(0.0, cloudDistance) * 0.00003);
    }

    bool getCloudLayerRayRange(
      vec3 origin,
      vec3 dir,
      float maxDist,
      out float tEnter,
      out float tExit
    ) {
      float baseR = earthRadius + cloudMinHeight;
      float topR = earthRadius + cloudMaxHeight;
      vec2 toTop = raySphereIntersect(origin, dir, topR);
      vec2 toBase = raySphereIntersect(origin, dir, baseR);
      float height = length(origin) - earthRadius;

      tEnter = -1.0;
      tExit = -1.0;

      if (height > cloudMaxHeight) {
        if (toTop.x > 0.0) {
          tEnter = toTop.x;
          tExit = toBase.x > 0.0 ? toBase.x : toTop.y;
        }
      } else if (height < cloudMinHeight) {
        if (toBase.y > 0.0 && toTop.y > 0.0) {
          tEnter = toBase.y;
          tExit = toTop.y;
        }
      } else {
        tEnter = 0.0;
        tExit = toBase.x > 0.0 ? toBase.x : toTop.y;
      }

      if (tEnter < 0.0 || tExit < 0.0) return false;

      tEnter = max(0.0, tEnter);
      tExit = min(tExit, maxDist);
      return tExit > tEnter;
    }

    // === Cloud density (faithful three-geospatial port) ===
    float getClouds(vec3 worldPos, float stepSize) {
      float r = length(worldPos);
      float height = r - earthRadius;
      if (height < cloudMinHeight || height > cloudMaxHeight) return 0.0;

      // Normalized height within cloud layer [0, 1]
      float heightFraction = (height - cloudMinHeight) / cloudHeight;

      // Shape altering function: rounds cloud tops
      float heightScale = shapeAltering(heightFraction, shapeAlteringBias);

      // Cube-sphere UV for weather texture (three-geospatial approach)
      vec2 globeUv = getCubeSphereUv(worldPos);
      vec2 weatherUv = globeUv * WEATHER_REPEAT;
      float distToCamera = length(worldPos - czm_viewerPositionWC);
      float weatherMip = getWeatherMipLevel(weatherUv, distToCamera);
      float weather = textureLod(weatherTexture, weatherUv, weatherMip).r;

      // Coverage modulation (from three-geospatial/Skybolt)
      // factor = 1.0 - coverage * heightScale
      // density = remapClamped(mix(weather, 1.0, filterWidth), factor, factor + filterWidth)
      float factor = 1.0 - cloudCover * heightScale;
      float mixedWeather = mix(weather, 1.0, coverageFilterWidth);
      float baseDensity = remapClamped(mixedWeather, factor, factor + coverageFilterWidth);

      if (baseDensity < 1e-5) return 0.0;

      // Wind animation
      float time = czm_frameNumber * 0.016 * cloudSpeed;
      vec3 evolution = vec3(time * 80.0, 0.0, time * 40.0);

      // 3D shape noise (shape.bin = Perlin-Worley)
      vec3 shapePos = (worldPos + evolution) * SHAPE_REPEAT;
      float shape = sampleFlattened3D(shapeTexture, shapePos, SHAPE_DEPTH).r;

      // Erode with shape noise
      float shapedDensity = remapClamped(baseDensity, (1.0 - shape) * shapeAmount, 1.0);
      if (shapedDensity < 1e-5) return 0.0;

      // Detail noise (only close range)
      if (distToCamera < 100000.0 && shapeDetailAmount > 0.0) {
        vec3 detailPos = worldPos * SHAPE_DETAIL_REPEAT;
        float detail = sampleFlattened3D(shapeDetailTexture, detailPos, SHAPE_DETAIL_DEPTH).r;

        // Fluffy top, wispy bottom (three-geospatial)
        float modifier = mix(
          pow(detail, 6.0),
          1.0 - detail,
          smoothstep(0.2, 0.4, heightFraction)
        );
        modifier *= shapeDetailAmount;
        shapedDensity = remapClamped(shapedDensity * 2.0, modifier * 0.5, 1.0);

        float detailFade = smoothstep(100000.0, 60000.0, distToCamera);
        shapedDensity = mix(remapClamped(baseDensity, (1.0 - shape) * shapeAmount, 1.0), shapedDensity, detailFade);
      }

      // Density profile: exponential term
      float density = shapedDensity * cloudDensityScale;

      return max(0.0, density);
    }

    float getClouds(vec3 worldPos) {
      return getClouds(worldPos, 0.0);
    }

    // === Phase functions ===
    float hgPhase(float cosTheta, float g) {
      float g2 = g * g;
      return RECIPROCAL_PI4 * (1.0 - g2) / max(1e-7, pow(1.0 + g2 - 2.0 * g * cosTheta, 1.5));
    }

    float phaseFunction(float cosTheta, float attenuation) {
      const vec2 g = vec2(0.85, -0.2);
      const float gMix = 0.5;
      float p1 = hgPhase(cosTheta, g.x * attenuation);
      float p2 = hgPhase(cosTheta, g.y * attenuation);
      return mix(p2, p1, gMix);
    }

    // === Multiple scattering approximation (from three-geospatial) ===
    float approximateMultipleScattering(float opticalDepth, float cosTheta) {
      vec3 coeffs = vec3(1.0);
      vec3 attenuation = vec3(0.5);
      float scattering = 0.0;
      for (int i = 0; i < 8; i++) {
        float beer = exp(-opticalDepth * coeffs.y);
        scattering += coeffs.x * beer * phaseFunction(cosTheta, coeffs.z);
        coeffs *= attenuation;
      }
      return scattering;
    }

    // === Sun optical depth march ===
    float marchSunOpticalDepth(vec3 origin, vec3 sunDir) {
      float topRadius = earthRadius + cloudMaxHeight;
      vec2 hit = raySphereIntersect(origin, sunDir, topRadius);
      float maxDist = max(0.0, hit.y);
      if (maxDist <= 0.0) return 0.0;

      // 倍增步长：起始小，后续逐渐变大，避免光线被粗糙大步长过度遮挡
      float stepSize = 50.0;
      float nextDistance = stepSize * 0.5;
      float od = 0.0;

      const int maxSunSteps = 12;
      for (int i = 0; i < maxSunSteps; i++) {
        if (i >= sunMarchSteps) break;
        if (nextDistance > maxDist) break;
        vec3 pos = origin + sunDir * nextDistance;
        float d = getClouds(pos, stepSize);
        // ext 衰减
        float ext = d * (scatteringCoefficient + absorptionCoefficient);
        od += ext * stepSize;
        nextDistance += stepSize;
        stepSize *= 2.0;
      }
      return od;
    }

    // === Atmospheric helpers ===
    // 匹配使用 AtmosphereStage 的色调映射与太阳衰减估算
    float calcParticleThickness(float depth) {
      depth = max(depth * 2.0 + 0.01, 0.01);
      return 100000.0 / depth;
    }

    vec3 scatter(vec3 coeff, float depth) { return coeff * depth; }
    vec3 absorb(vec3 coeff, float depth) { return exp2(scatter(coeff, -depth)); }

    vec3 calcAtmosphericScatterTop(vec3 sunVector, vec3 up) {
      // 这里的 skyLight 用作云层背部的基础环境光
      vec3 totalCoeff = rayleighCoeff + mieCoeff;
      float lDotU = dot(sunVector, up);
      float odView = calcParticleThickness(1.0);
      float odLight = calcParticleThickness(lDotU);
      vec3 absView = absorb(totalCoeff, odView);
      vec3 absLight = absorb(totalCoeff, odLight);
      vec3 scView = scatter(totalCoeff, odView);
      vec3 scLight = scatter(totalCoeff, odLight);
      float ln2 = log(2.0);
      vec3 absSun = d02(absLight - absView) / d02((scLight - scView) * ln2);
      vec3 mieS = scatter(mieCoeff, odView) * 0.25;
      vec3 rayS = scatter(rayleighCoeff, odView) * 0.375;
      return (mieS + rayS) * absSun * sunBrightness;
    }

    // === Cloud shadow ===
    float getCloudShadow(vec3 p, vec3 sunVector, out float firstCloudDistance) {
      // 从地表法线方向抬高一点，避免深度重建点贴着地形时的数值误差让阴影脱地。
      vec3 surfaceNormal = normalize(p);
      vec3 origin = p + surfaceNormal * SURFACE_SHADOW_BIAS;
      float tStart;
      float tEnd;
      if (!getCloudLayerRayRange(origin, sunVector, CLOUDS_MAX_VIEWING_DISTANCE, tStart, tEnd)) {
        firstCloudDistance = CLOUDS_MAX_VIEWING_DISTANCE;
        return 1.0;
      }

      vec3 firstCloudPos = origin + sunVector * tStart;
      firstCloudDistance = distance(czm_viewerPositionWC, firstCloudPos);

      float pathLen = tEnd - tStart;
      if (pathLen <= 0.0) return 1.0;

      const int steps = 6;
      float ss = min(pathLen / float(steps), 200.0);
      vec3 pos = origin + sunVector * (tStart + ss * 0.5);
      float od = 0.0;
      for (int i = 0; i < steps; i++) {
        od += getClouds(pos, ss); // 这里只是累加密度
        pos += sunVector * ss;
      }
      float ext = od * (scatteringCoefficient + absorptionCoefficient);
      return exp(-ext * ss);
    }

    // === Main cloud march ===
    vec4 calculateVolumetricClouds(vec3 viewerPos, vec3 dir, float dither, vec3 sunIrradiance, vec3 sunDir, float maxDist) {
      const int maxSteps = 128;
      int steps = min(volumetricCloudSteps, maxSteps);

      float tEnter;
      float tExit;
      if (!getCloudLayerRayRange(
        viewerPos,
        dir,
        min(maxDist, CLOUDS_MAX_VIEWING_DISTANCE),
        tEnter,
        tExit
      )) {
        return vec4(0.0, 0.0, 0.0, 1.0);
      }

      float totalDist = tExit - tEnter;
      float stepLen = totalDist / float(steps);
      float currentStep = stepLen;

      vec3 radianceIntegral = vec3(0.0);
      float transmittanceIntegral = 1.0;
      float weightedDistanceSum = 0.0;
      float transmittanceSum = 0.0;
      float cosTheta = dot(sunDir, dir);

      // Calculate a base sky light contribution locally
      vec3 skyLight = calcAtmosphericScatterTop(sunDir, normalize(viewerPos));
      float skyIllumination = max(0.2, sunBrightness * 0.05); // 环境散射底光，保证完全在阴影处的云不黑

      float rayDist = currentStep * dither * jitterScale;

      for (int i = 0; i < maxSteps; i++) {
        if (i >= steps || rayDist > totalDist) break;

        vec3 pos = viewerPos + dir * (tEnter + rayDist);
        float density = getClouds(pos, currentStep);

        if (density > 1e-4) {
          float extinction = density * (scatteringCoefficient + absorptionCoefficient);
          float scatterAmt = density * scatteringCoefficient;

          // March to sun for optical depth
          float sunOD = marchSunOpticalDepth(pos, sunDir);

          // Multiple scattering approximation
          vec3 radiance = sunIrradiance * approximateMultipleScattering(sunOD, cosTheta);

          // Earth shadow
          radiance *= calcEarthShadow(pos, sunDir);

          // 天空环境光反弹补偿：让处于阴影中的云底部保持一定亮度
          float h = length(pos) - earthRadius;
          float hFrac = clamp((h - cloudMinHeight) / cloudHeight, 0.0, 1.0);
          float skyGrad = mix(0.3, 1.0, hFrac * 0.5 + 0.5); // 云底光更暗但不是0
          radiance += skyLight * RECIPROCAL_PI4 * skyGrad * skyLightScale * skyIllumination;

          radiance *= scatterAmt;

          // Energy-conserving analytical integration
          float tr = exp(-extinction * currentStep);
          float clampedExt = max(extinction, 1e-7);
          vec3 scatterIntegral = (radiance - radiance * tr) / clampedExt;
          radianceIntegral += transmittanceIntegral * scatterIntegral;
          transmittanceIntegral *= tr;

          weightedDistanceSum += rayDist * transmittanceIntegral;
          transmittanceSum += transmittanceIntegral;
        }

        if (transmittanceIntegral < 0.01) {
            transmittanceIntegral = 0.0;
            break;
        }

        currentStep *= 1.01;
        rayDist += currentStep;
      }

      // Atmospheric Aerial Perspective Fade: Blend into sky the further away it is.
      // This makes the clouds visually "link" to the atmospheric scattering drawn by AtmosphereStage!
      float frontDepth = transmittanceSum > 0.0 ? tEnter + weightedDistanceSum / transmittanceSum : tEnter;
      float cloudVisibility = exp(-max(0.0, frontDepth) * fogDensity);
      float perspectiveFog = 1.0 - cloudVisibility;

      // When completely fogged, clouds become transparent so the background AtmosphereStage shows purely.
      transmittanceIntegral = mix(transmittanceIntegral, 1.0, perspectiveFog);
      radianceIntegral *= cloudVisibility;

      return vec4(radianceIntegral, transmittanceIntegral);
    }

    void main() {
      // 场景底图（此时不仅包含几何，还包含了已经在其上绘制过的 AtmosphereStage 的大气散射光）
      vec4 sceneColor = texture(colorTexture, v_textureCoordinates);
      float depth = czm_unpackDepth(texture(depthTexture, v_textureCoordinates));
      bool hitsScene = depth < 1.0 - DEPTH_EPSILON;

      vec4 posEC = czm_windowToEyeCoordinates(gl_FragCoord.xy, depth);
      vec4 posWC = czm_inverseView * posEC;
      posWC.xyz /= posWC.w;

      vec3 viewerPos = czm_viewerPositionWC;
      vec3 dir = normalize(posWC.xyz - viewerPos);
      vec3 sunDir = normalize(czm_sunPositionWC);
      float viewDist = hitsScene ? length(posWC.xyz - viewerPos) : CLOUDS_MAX_VIEWING_DISTANCE;

      float dither = getDither();

      // Sun Illumination at Cloud Altitude
      // Fix: Don't let it become completely black when sun drops slightly. Provide a base illumination.
      vec3 totalCoeff = rayleighCoeff + mieCoeff;
      vec3 up = normalize(viewerPos);
      float lDotU = dot(sunDir, up);
      float odLight = calcParticleThickness(max(lDotU, 0.05)); // Avoid absolute zero at horizon
      vec3 sunIrradiance = absorb(totalCoeff, odLight) * sunBrightness;

      // 赋予基础的日落微光，避免全黑
      sunIrradiance = max(sunIrradiance, vec3(0.05, 0.08, 0.12));

      // Calculate the volumetrics (returns radiance and transmittance)
      vec4 clouds = calculateVolumetricClouds(viewerPos, dir, dither, sunIrradiance, sunDir, viewDist);
      vec3 radiance = clouds.rgb;
      float transmittance = clouds.a;

      // ---- 阴影与色调映射融合阶段 ----
      vec3 color = sceneColor.rgb;

      // 1. 若光线落在大地上，在其上叠加云影投影
      if (hitsScene) {
        float distToV = length(posWC.xyz - viewerPos);
        vec3 surfaceNormal = normalize(posWC.xyz);
        float NdotL = dot(surfaceNormal, sunDir);
        if (distToV < CLOUDS_MAX_VIEWING_DISTANCE && NdotL > 0.0) {
          float shadowCloudDistance;
          float shadow = getCloudShadow(posWC.xyz, sunDir, shadowCloudDistance);
          float shadowVisibility = getCloudDistanceVisibility(shadowCloudDistance);
          float fd = smoothstep(0.0, 0.1, NdotL);
          // 减去一定亮度来产生阴影
          color = color * mix(
            1.0,
            shadow,
            cloudShadowIntensity * fd * shadowVisibility
          );
        }
      }

      // 2. 将计算取得的云体积 Radiance (HDR线性空间) 进行与 AtmosphereStage EXACTLY 相同的 Tone Mapping
      // AtmosphereStage copy.js 使用的是 1.0 - exp(-2.1 * radiance)
      vec3 mappedRadiance = 1.0 - exp(-2.1 * radiance);

      // 3. 将云的 mappedRadiance 混合到包含了 AtmosphereStage 的 sceneColor 底图上
      // clouds.a 是透射率，透射部分直接使用被天空/大气渲染过底色，被遮挡的部分直接叠加云的 Radiance
      color = color * transmittance + mappedRadiance;

      out_FragColor = vec4(clamp(color, 0.0, 1.0), 1.0);
    }
  `,m=new Cesium.PostProcessStage({fragmentShader:v,uniforms:{cloudAltitude:()=>i.cloudAltitude,cloudHeight:()=>i.cloudHeight,cloudDensityScale:()=>i.cloudDensityScale,cloudCover:()=>i.cloudCover,cloudSpeed:()=>i.cloudSpeed,shapeAmount:()=>i.shapeAmount,shapeDetailAmount:()=>i.shapeDetailAmount,shapeAlteringBias:()=>i.shapeAlteringBias,coverageFilterWidth:()=>i.coverageFilterWidth,scatteringCoefficient:()=>i.scatteringCoefficient,absorptionCoefficient:()=>i.absorptionCoefficient,volumetricCloudSteps:()=>i.volumetricCloudSteps,sunMarchSteps:()=>i.sunMarchSteps,weatherMipBias:()=>i.weatherMipBias,jitterAmount:()=>i.jitterAmount,jitterScale:()=>i.jitterScale,rayleighCoeff:()=>i.rayleighCoeff,mieCoeff:()=>i.mieCoeff,sunBrightness:()=>i.sunBrightness,earthRadius:()=>u.camera?Cesium.Cartesian3.magnitude(u.camera.positionWC)-u.camera.positionCartographic.height:i.earthRadius,powderScale:()=>i.powderScale,powderExponent:()=>i.powderExponent,skyLightScale:()=>i.skyLightScale,cloudShadowIntensity:()=>i.cloudShadowIntensity,enableVolumetricLight:()=>i.enableVolumetricLight,volumetricLightIntensity:()=>i.volumetricLightIntensity,fogDensity:()=>i.fogDensity,resolution:()=>new Cesium.Cartesian2(u.canvas.width,u.canvas.height),shapeTexture:()=>r,shapeDetailTexture:()=>l,weatherTexture:()=>s,stbnTexture:()=>o}});u.scene.postProcessStages.add(m);function c(n){i.cloudCover=Number(n)}function p(n){i.cloudHeight=Number(n)}function T(n){i.cloudAltitude=Number(n)}function I(n){i.cloudDensityScale=Number(n)}function F(n){i.cloudSpeed=Number(n)}function M(n){i.shapeAmount=Number(n)}function h(n){i.shapeDetailAmount=Number(n)}function w(n){i.volumetricCloudSteps=Math.max(4,Math.floor(Number(n)))}function L(n){i.sunBrightness=Number(n)}function N(n){i.cloudShadowIntensity=Number(n)}function k(){var n,x,g,d;u&&m&&u.scene.postProcessStages.remove(m),(n=r==null?void 0:r.destroy)==null||n.call(r),(x=l==null?void 0:l.destroy)==null||x.call(l),(g=s==null?void 0:s.destroy)==null||g.call(s),(d=o==null?void 0:o.destroy)==null||d.call(o)}function W(n){I(n)}function _(n){p(n)}function z(n){i.enableVolumetricLight=!!n}function H(n){i.volumetricLightIntensity=Number(n)}function O(){}return{stage:m,uniformsState:i,setCloudCover:c,setCloudHeight:p,setCloudAltitude:T,setCloudDensityScale:I,setCloudSpeed:F,setShapeAmount:M,setShapeDetailAmount:h,setVolumetricCloudSteps:w,setSunBrightness:L,setCloudShadowIntensity:N,setCloudDensity:W,setCloudThickness:_,setEnableVolumetricLight:z,setVolumetricLightIntensity:H,updateFromCamera:O,destroy:k}}const A=window.Cesium,V={longitude:139.7671,latitude:35.6812,height:15e3},ae={meta:{path:"/cesium/cloud",title:"体积云"},components:{Globe:G},setup(){const u=R(!0),e=R(!0),i=R(.2),t=q({coverage:.3,cloudBottom:750,cloudTop:1550,scattering:.04,absorption:.02,shapeAmount:1,shapeDetail:.25});let r=null,l=null,s=!1;async function o(h){r=h,s=!1,r.scene.globe.enableLighting=!0,r.scene.globe.depthTestAgainstTerrain=!0,r.scene.globe.showGroundAtmosphere=!0,r.scene.skyAtmosphere&&(r.scene.skyAtmosphere.show=!0),r.scene.requestRenderMode=!1,r.clock.shouldAnimate=!0,r.camera.flyTo({destination:A.Cartesian3.fromDegrees(V.longitude,V.latitude,V.height),orientation:{heading:A.Math.toRadians(0),pitch:A.Math.toRadians(-45),roll:0},duration:0}),await f(h)}async function f(h){E();try{if(l=await ie(h,{cloudAltitude:t.cloudBottom,cloudHeight:Math.max(100,t.cloudTop-t.cloudBottom),cloudCover:t.coverage,cloudDensityScale:t.scattering*5,cloudSpeed:i.value,volumetricCloudSteps:64,shapeAmount:t.shapeAmount,shapeDetailAmount:t.shapeDetail,absorptionCoefficient:t.absorption}),s){E();return}c(),m()}catch(w){console.error("体积云初始化失败:",w)}}function E(){l==null||l.destroy(),l=null}function v(){l&&(l.stage.enabled=u.value,m(),r==null||r.scene.requestRender())}function m(){if(!l)return;const h=u.value&&e.value?i.value:0;l.setCloudSpeed(h),r==null||r.scene.requestRender()}function c(){l&&(t.cloudTop<t.cloudBottom+100&&(t.cloudTop=t.cloudBottom+100),l.setCloudCover(t.coverage),l.setCloudAltitude(t.cloudBottom),l.setCloudHeight(t.cloudTop-t.cloudBottom),l.setCloudDensityScale(t.scattering*5),l.setShapeAmount(t.shapeAmount),l.setShapeDetailAmount(t.shapeDetail),l.uniformsState.absorptionCoefficient=t.absorption,l.stage.enabled=u.value,r==null||r.scene.requestRender())}function p(h,w,L){r&&r.camera.flyTo({destination:A.Cartesian3.fromDegrees(h,w,L),orientation:{heading:A.Math.toRadians(0),pitch:A.Math.toRadians(-45),roll:0},duration:3})}function T(){p(139.7671,35.6812,15e3)}function I(){p(-.1276,51.5074,15e3)}function F(){p(-74.006,40.7128,15e3)}function M(){T()}return j(()=>{s=!0,E(),r=null}),{init:o,effectsEnabled:u,cloudMotionEnabled:e,animatedCloudSpeed:i,cloudOptions:t,handleEffectsToggle:v,updateCloudMotion:m,syncCloudUniforms:c,flyToTokyo:T,flyToLondon:I,flyToNYC:F,resetView:M}}},ne={class:"cloud-demo"},re={class:"control-panel"},le={class:"checkbox-row"},se={class:"checkbox-row"},ue={class:"control-group"},ce={class:"value"},de={class:"control-group"},fe={class:"value"},me={class:"control-group"},pe={class:"value"},he={class:"control-group"},ge={class:"value"},Ce={class:"control-group"},ve={class:"value"},xe={class:"control-group"},ye={class:"value"},Se={class:"control-group"},De={class:"value"},Ee={class:"control-group"},be={class:"value"},Ae={class:"button-group"};function we(u,e,i,t,r,l){const s=Z("Globe");return $(),Y("div",ne,[K(s,{options:{terrain:!0,timeline:!0},onCreated:t.init},null,8,["onCreated"]),a("div",re,[e[35]||(e[35]=a("h3",null,"大气与云层控制",-1)),a("label",le,[C(a("input",{"onUpdate:modelValue":e[0]||(e[0]=o=>t.effectsEnabled=o),type:"checkbox",onChange:e[1]||(e[1]=(...o)=>t.handleEffectsToggle&&t.handleEffectsToggle(...o))},null,544),[[B,t.effectsEnabled]]),e[24]||(e[24]=a("span",null,"启用效果",-1))]),a("div",{class:J(["controls",{disabled:!t.effectsEnabled}])},[a("label",se,[C(a("input",{"onUpdate:modelValue":e[2]||(e[2]=o=>t.cloudMotionEnabled=o),type:"checkbox",onChange:e[3]||(e[3]=(...o)=>t.updateCloudMotion&&t.updateCloudMotion(...o))},null,544),[[B,t.cloudMotionEnabled]]),e[25]||(e[25]=a("span",null,"云层运动",-1))]),a("div",ue,[e[26]||(e[26]=a("label",{for:"cloudSpeed"},"云层运动速度",-1)),C(a("input",{id:"cloudSpeed","onUpdate:modelValue":e[4]||(e[4]=o=>t.animatedCloudSpeed=o),type:"range",min:"0",max:"1.5",step:"0.01",onInput:e[5]||(e[5]=(...o)=>t.updateCloudMotion&&t.updateCloudMotion(...o))},null,544),[[y,t.animatedCloudSpeed,void 0,{number:!0}]]),a("div",ce,S(t.animatedCloudSpeed.toFixed(2)),1)]),a("div",de,[e[27]||(e[27]=a("label",{for:"coverage"},"云量覆盖度",-1)),C(a("input",{id:"coverage","onUpdate:modelValue":e[6]||(e[6]=o=>t.cloudOptions.coverage=o),type:"range",min:"0",max:"1",step:"0.01",onInput:e[7]||(e[7]=(...o)=>t.syncCloudUniforms&&t.syncCloudUniforms(...o))},null,544),[[y,t.cloudOptions.coverage,void 0,{number:!0}]]),a("div",fe,S(t.cloudOptions.coverage.toFixed(2)),1)]),a("div",me,[e[28]||(e[28]=a("label",{for:"cloudBottom"},"云底高度 (m)",-1)),C(a("input",{id:"cloudBottom","onUpdate:modelValue":e[8]||(e[8]=o=>t.cloudOptions.cloudBottom=o),type:"range",min:"0",max:"10000",step:"100",onInput:e[9]||(e[9]=(...o)=>t.syncCloudUniforms&&t.syncCloudUniforms(...o))},null,544),[[y,t.cloudOptions.cloudBottom,void 0,{number:!0}]]),a("div",pe,S(t.cloudOptions.cloudBottom.toFixed(0)),1)]),a("div",he,[e[29]||(e[29]=a("label",{for:"cloudTop"},"云顶高度 (m)",-1)),C(a("input",{id:"cloudTop","onUpdate:modelValue":e[10]||(e[10]=o=>t.cloudOptions.cloudTop=o),type:"range",min:"1000",max:"15000",step:"100",onInput:e[11]||(e[11]=(...o)=>t.syncCloudUniforms&&t.syncCloudUniforms(...o))},null,544),[[y,t.cloudOptions.cloudTop,void 0,{number:!0}]]),a("div",ge,S(t.cloudOptions.cloudTop.toFixed(0)),1)]),a("div",Ce,[e[30]||(e[30]=a("label",{for:"scattering"},"散射系数",-1)),C(a("input",{id:"scattering","onUpdate:modelValue":e[12]||(e[12]=o=>t.cloudOptions.scattering=o),type:"range",min:"0.01",max:"0.1",step:"0.005",onInput:e[13]||(e[13]=(...o)=>t.syncCloudUniforms&&t.syncCloudUniforms(...o))},null,544),[[y,t.cloudOptions.scattering,void 0,{number:!0}]]),a("div",ve,S(t.cloudOptions.scattering.toFixed(3)),1)]),a("div",xe,[e[31]||(e[31]=a("label",{for:"absorption"},"吸收系数",-1)),C(a("input",{id:"absorption","onUpdate:modelValue":e[14]||(e[14]=o=>t.cloudOptions.absorption=o),type:"range",min:"0.01",max:"0.05",step:"0.005",onInput:e[15]||(e[15]=(...o)=>t.syncCloudUniforms&&t.syncCloudUniforms(...o))},null,544),[[y,t.cloudOptions.absorption,void 0,{number:!0}]]),a("div",ye,S(t.cloudOptions.absorption.toFixed(3)),1)]),a("div",Se,[e[32]||(e[32]=a("label",{for:"shapeAmount"},"形状强度",-1)),C(a("input",{id:"shapeAmount","onUpdate:modelValue":e[16]||(e[16]=o=>t.cloudOptions.shapeAmount=o),type:"range",min:"0.1",max:"1.0",step:"0.05",onInput:e[17]||(e[17]=(...o)=>t.syncCloudUniforms&&t.syncCloudUniforms(...o))},null,544),[[y,t.cloudOptions.shapeAmount,void 0,{number:!0}]]),a("div",De,S(t.cloudOptions.shapeAmount.toFixed(2)),1)]),a("div",Ee,[e[33]||(e[33]=a("label",{for:"shapeDetail"},"细节强度",-1)),C(a("input",{id:"shapeDetail","onUpdate:modelValue":e[18]||(e[18]=o=>t.cloudOptions.shapeDetail=o),type:"range",min:"0",max:"0.5",step:"0.05",onInput:e[19]||(e[19]=(...o)=>t.syncCloudUniforms&&t.syncCloudUniforms(...o))},null,544),[[y,t.cloudOptions.shapeDetail,void 0,{number:!0}]]),a("div",be,S(t.cloudOptions.shapeDetail.toFixed(2)),1)]),a("div",Ae,[a("button",{type:"button",onClick:e[20]||(e[20]=(...o)=>t.flyToTokyo&&t.flyToTokyo(...o))},"飞到东京"),a("button",{type:"button",onClick:e[21]||(e[21]=(...o)=>t.flyToLondon&&t.flyToLondon(...o))},"飞到伦敦"),a("button",{type:"button",onClick:e[22]||(e[22]=(...o)=>t.flyToNYC&&t.flyToNYC(...o))},"飞到纽约"),a("button",{type:"button",onClick:e[23]||(e[23]=(...o)=>t.resetView&&t.resetView(...o))},"重置视图")]),e[34]||(e[34]=a("div",{class:"copyright"},[Q(" copyright by "),a("a",{href:"https://yuangis.site/"},"YuanGIS ")],-1))],2)])])}const Re=X(ae,[["render",we],["__scopeId","data-v-dbddbff1"]]);export{Re as default};
