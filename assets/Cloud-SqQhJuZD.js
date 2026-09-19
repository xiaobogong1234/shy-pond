import{E as ee}from"./el-button-BIufFjLp.js";import"./el-select-DHZScApW.js";import{o as te,r as G,h as z,_ as oe,c as ae,a as D,w as T,b as u,n as q,t as _,p as j,f as ie,g as R}from"./index-9vIL5KkC.js";import{d as b,z as M,A as B,C as W,K as U,E as x,f as ne,p as re,D as Y,G as K,w as I,J as L}from"./cesium-utSEP5if.js";import{G as se}from"./index-DRCmDxZs.js";import le from"./ConfigPanel-BclLAqzI.js";import"./index-ANLxL66K.js";import"./use-global-config-DaIFvEHd.js";import"./_commonjsHelpers-gnU0ypJ3.js";import"./cesium2s-TV_G_QRL.js";import"./index-CtVsJ-X_.js";import"./fullscreenPopper-CpT4yrsP.js";import"./services-CwmS6buH.js";import"./el-color-picker-Gb65Y4tk.js";async function X(s,o,t,e,r){const l=await(await fetch(o)).arrayBuffer(),i=new Uint8Array(l),n=e*r,C=t*n,p=new Uint8Array(C*4);for(let d=0;d<i.length;d++){const m=i[d];p[d*4]=m,p[d*4+1]=m,p[d*4+2]=m,p[d*4+3]=255}const y=new M({context:s,width:t,height:n,pixelFormat:Y.RGBA,pixelDatatype:K.UNSIGNED_BYTE,source:{width:t,height:n,arrayBufferView:p},sampler:new B({wrapS:x.CLAMP_TO_EDGE,wrapT:x.CLAMP_TO_EDGE,minificationFilter:U.LINEAR,magnificationFilter:W.LINEAR})});return console.log(`Loaded Cesium flattened R8 3D->2D texture: ${o} (${t}x${e}x${r} -> ${t}x${n})`),y}const ce=new URL(""+new URL("shape-C0zrEmxc.bin",import.meta.url).href,import.meta.url).href,ue=new URL(""+new URL("shape_detail-Tuf-gW3D.bin",import.meta.url).href,import.meta.url).href,de=new URL(""+new URL("local_weather-DSzanC6h.png",import.meta.url).href,import.meta.url).href;async function fe(s,o={}){const t={cloudAltitude:o.cloudAltitude??750,cloudHeight:o.cloudHeight??800,cloudDensityScale:o.cloudDensityScale??.25,cloudCover:o.cloudCover??.3,cloudSpeed:o.cloudSpeed??.02,shapeAmount:o.shapeAmount??1,shapeDetailAmount:o.shapeDetailAmount??1,shapeAlteringBias:o.shapeAlteringBias??.35,coverageFilterWidth:o.coverageFilterWidth??.6,scatteringCoefficient:o.scatteringCoefficient??1,absorptionCoefficient:o.absorptionCoefficient??0,volumetricCloudSteps:Math.max(4,Math.floor(o.volumetricCloudSteps??80)),sunMarchSteps:o.sunMarchSteps??6,weatherMipBias:o.weatherMipBias??.35,jitterAmount:o.jitterAmount??.38,jitterScale:o.jitterScale??1.15,rayleighCoeff:o.rayleighCoeff??new b(27e-7,5e-6,1e-5),mieCoeff:o.mieCoeff??new b(5e-7,5e-7,5e-7),sunBrightness:o.sunBrightness??25,earthRadius:6371e3,powderScale:o.powderScale??.8,powderExponent:o.powderExponent??2,skyLightScale:o.skyLightScale??1,cloudShadowIntensity:o.cloudShadowIntensity??.5,enableVolumetricLight:o.enableVolumetricLight??!1,volumetricLightIntensity:o.volumetricLightIntensity??1,fogDensity:o.fogDensity??3e-5},e=s.scene.context;let r=null,f=null,l=null,i=null;try{r=await X(e,ce,128,128,128),f=await X(e,ue,32,32,32);const a=new Image;a.src=de,await new Promise(v=>{a.onload=v,a.onerror=()=>v()}),a.complete&&a.naturalWidth>0&&(l=new M({context:e,source:a,sampler:new B({wrapS:x.REPEAT,wrapT:x.REPEAT,minificationFilter:U.LINEAR,magnificationFilter:W.LINEAR})}),typeof l.generateMipmap=="function"&&l.generateMipmap()),console.log("Cloud textures loaded:",{shape:!!r,detail:!!f,weather:!!l,stbn:!!i})}catch(a){console.warn("Failed to load cloud textures:",a)}function n(a,v,A){const g=document.createElement("canvas");g.width=1,g.height=1;const O=g.getContext("2d");return O.fillStyle=`rgb(${a},${v},${A})`,O.fillRect(0,0,1,1),new M({context:e,source:g,sampler:new B({wrapS:x.REPEAT,wrapT:x.REPEAT})})}function C(){const a=new Uint8Array(65536);for(let v=0;v<16384;v++){const A=Math.floor(Math.random()*256),g=v*4;a[g]=A,a[g+1]=A,a[g+2]=A,a[g+3]=255}return new M({context:e,width:128,height:128,pixelFormat:Y.RGBA,pixelDatatype:K.UNSIGNED_BYTE,source:{width:128,height:128,arrayBufferView:a},sampler:new B({wrapS:x.REPEAT,wrapT:x.REPEAT,minificationFilter:U.NEAREST,magnificationFilter:W.NEAREST})})}r||(r=n(128,128,128)),f||(f=n(128,128,128)),l||(l=n(180,180,180)),i||(i=C());const p=`
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
      // 这里的 skyLight 用作云层底部的基础环境光
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
      // 场景底图（此时不仅包含几何，还包含了已经在在其上绘制过的 AtmosphereStage 的大气散射光）
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

      // 1. 若光线落在大地上，在其上叠加云阴影投影
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
      // clouds.a 是透射率，透射部分直接使用被天空/大气渲染过的底色，被遮挡的部分直接叠加云的 Radiance
      color = color * transmittance + mappedRadiance;

      out_FragColor = vec4(clamp(color, 0.0, 1.0), 1.0);
    }
  `,y=new ne({fragmentShader:p,uniforms:{cloudAltitude:()=>t.cloudAltitude,cloudHeight:()=>t.cloudHeight,cloudDensityScale:()=>t.cloudDensityScale,cloudCover:()=>t.cloudCover,cloudSpeed:()=>t.cloudSpeed,shapeAmount:()=>t.shapeAmount,shapeDetailAmount:()=>t.shapeDetailAmount,shapeAlteringBias:()=>t.shapeAlteringBias,coverageFilterWidth:()=>t.coverageFilterWidth,scatteringCoefficient:()=>t.scatteringCoefficient,absorptionCoefficient:()=>t.absorptionCoefficient,volumetricCloudSteps:()=>t.volumetricCloudSteps,sunMarchSteps:()=>t.sunMarchSteps,weatherMipBias:()=>t.weatherMipBias,jitterAmount:()=>t.jitterAmount,jitterScale:()=>t.jitterScale,rayleighCoeff:()=>t.rayleighCoeff,mieCoeff:()=>t.mieCoeff,sunBrightness:()=>t.sunBrightness,earthRadius:()=>s.camera?b.magnitude(s.camera.positionWC)-s.camera.positionCartographic.height:t.earthRadius,powderScale:()=>t.powderScale,powderExponent:()=>t.powderExponent,skyLightScale:()=>t.skyLightScale,cloudShadowIntensity:()=>t.cloudShadowIntensity,enableVolumetricLight:()=>t.enableVolumetricLight,volumetricLightIntensity:()=>t.volumetricLightIntensity,fogDensity:()=>t.fogDensity,resolution:()=>new re(s.canvas.width,s.canvas.height),shapeTexture:()=>r,shapeDetailTexture:()=>f,weatherTexture:()=>l,stbnTexture:()=>i}});s.scene.postProcessStages.add(y);function d(a){t.cloudCover=Number(a)}function m(a){t.cloudHeight=Number(a)}function E(a){t.cloudAltitude=Number(a)}function S(a){t.cloudDensityScale=Number(a)}function P(a){t.cloudSpeed=Number(a)}function w(a){t.shapeAmount=Number(a)}function k(a){t.shapeDetailAmount=Number(a)}function V(a){t.volumetricCloudSteps=Math.max(4,Math.floor(Number(a)))}function N(a){t.sunBrightness=Number(a)}function c(a){t.cloudShadowIntensity=Number(a)}function h(){s&&y&&s.scene.postProcessStages.remove(y),r&&r.destroy&&r.destroy(),f&&f.destroy&&f.destroy(),l&&l.destroy&&l.destroy(),i&&i.destroy&&i.destroy()}function F(a){S(a)}function J(a){m(a)}function Q(a){t.enableVolumetricLight=!!a}function Z(a){t.volumetricLightIntensity=Number(a)}function $(){}return{stage:y,uniformsState:t,setCloudCover:d,setCloudHeight:m,setCloudAltitude:E,setCloudDensityScale:S,setCloudSpeed:P,setShapeAmount:w,setShapeDetailAmount:k,setVolumetricCloudSteps:V,setSunBrightness:N,setCloudShadowIntensity:c,setCloudDensity:F,setCloudThickness:J,setEnableVolumetricLight:Q,setVolumetricLightIntensity:Z,updateFromCamera:$,destroy:h}}const pe="2026-09-16T10:00:00+08:00",H={longitude:139.7671,latitude:35.6812,height:15e3},me={meta:{path:"/cesium/cloud",title:"体积云"},components:{Globe:se,ConfigPanel:le},setup(){const s=z(!0),o=z(!0),t=z(.86),e=G({coverage:.3,cloudBottom:750,cloudTop:1550,scattering:.04,absorption:.02,shapeAmount:1,shapeDetail:.25}),r=G({effectsEnabled:!0,cloudMotionEnabled:!0,animatedCloudSpeed:.86,coverage:.3,cloudBottom:750,cloudTop:1550,scattering:.04,absorption:.02,shapeAmount:1,shapeDetail:.25}),f=[{key:"effectsEnabled",label:"启用效果",type:"switch"},{key:"cloudMotionEnabled",label:"云层运动",type:"switch",visible:c=>!!c.effectsEnabled},{key:"animatedCloudSpeed",label:"云层运动速度",type:"slider",min:0,max:1.5,step:.01,digits:2,visible:c=>!!c.effectsEnabled&&!!c.cloudMotionEnabled},{key:"coverage",label:"云量覆盖度",type:"slider",min:0,max:1,step:.01,digits:2},{key:"cloudBottom",label:"云底高度",type:"slider",min:0,max:1e4,step:100,digits:0,unit:" m"},{key:"cloudTop",label:"云顶高度",type:"slider",min:1e3,max:15e3,step:100,digits:0,unit:" m"},{key:"scattering",label:"散射系数",type:"slider",min:.01,max:.1,step:.005,digits:3},{key:"absorption",label:"吸收系数",type:"slider",min:.01,max:.05,step:.005,digits:3},{key:"shapeAmount",label:"形状强度",type:"slider",min:.1,max:1,step:.05,digits:2},{key:"shapeDetail",label:"细节强度",type:"slider",min:0,max:.5,step:.05,digits:2}];function l(){if(r.cloudTop<r.cloudBottom+100){r.cloudTop=r.cloudBottom+100;return}s.value=r.effectsEnabled,o.value=r.cloudMotionEnabled,t.value=r.animatedCloudSpeed,e.coverage=r.coverage,e.cloudBottom=r.cloudBottom,e.cloudTop=r.cloudTop,e.scattering=r.scattering,e.absorption=r.absorption,e.shapeAmount=r.shapeAmount,e.shapeDetail=r.shapeDetail,m(),S()}let i=null,n=null,C=!1;async function p(c){i=c,C=!1,i.scene.globe.enableLighting=!0,i.scene.globe.depthTestAgainstTerrain=!0,i.scene.globe.showGroundAtmosphere=!0,i.scene.skyAtmosphere&&(i.scene.skyAtmosphere.show=!0),i.scene.requestRenderMode=!1;const h=L.fromIso8601(pe);i.clock.startTime=L.clone(h),i.clock.currentTime=L.clone(h),i.clock.stopTime=L.addDays(h,1,new L),i.clock.shouldAnimate=!0,i.camera.flyTo({destination:b.fromDegrees(H.longitude,H.latitude,H.height),orientation:{heading:I.toRadians(0),pitch:I.toRadians(-45),roll:0},duration:0}),w(),await y(c)}async function y(c){d();try{if(n=await fe(c,{cloudAltitude:e.cloudBottom,cloudHeight:Math.max(100,e.cloudTop-e.cloudBottom),cloudCover:e.coverage,cloudDensityScale:e.scattering*5,cloudSpeed:t.value,volumetricCloudSteps:64,shapeAmount:e.shapeAmount,shapeDetailAmount:e.shapeDetail,absorptionCoefficient:e.absorption}),C){d();return}S(),E()}catch(h){console.error("体积云初始化失败:",h)}}function d(){n==null||n.destroy(),n=null}function m(){n&&(n.stage.enabled=s.value,E(),i==null||i.scene.requestRender())}function E(){if(!n)return;const c=s.value&&o.value?t.value:0;n.setCloudSpeed(c),i==null||i.scene.requestRender()}function S(){n&&(e.cloudTop<e.cloudBottom+100&&(e.cloudTop=e.cloudBottom+100),n.setCloudCover(e.coverage),n.setCloudAltitude(e.cloudBottom),n.setCloudHeight(e.cloudTop-e.cloudBottom),n.setCloudDensityScale(e.scattering*5),n.setShapeAmount(e.shapeAmount),n.setShapeDetailAmount(e.shapeDetail),n.uniformsState.absorptionCoefficient=e.absorption,n.stage.enabled=s.value,i==null||i.scene.requestRender())}function P(c,h,F){i&&i.camera.flyTo({destination:b.fromDegrees(c,h,F),orientation:{heading:I.toRadians(0),pitch:I.toRadians(-45),roll:0},duration:3})}function w(){i&&i.camera.flyTo({destination:b.fromDegrees(139.768016,35.588907,4833.7),orientation:{heading:359.1739,pitch:I.toRadians(-12.2247),roll:-.0245},duration:0})}function k(){P(-.1276,51.5074,15e3)}function V(){P(-74.006,40.7128,15e3)}function N(){w()}return te(()=>{C=!0,d(),i=null}),{init:p,effectsEnabled:s,cloudMotionEnabled:o,animatedCloudSpeed:t,cloudOptions:e,panelModel:r,fields:f,applyPanel:l,handleEffectsToggle:m,updateCloudMotion:E,syncCloudUniforms:S,flyToTokyo:w,flyToLondon:k,flyToNYC:V,resetView:N}}},he={class:"cloud-demo"},ge={class:"cloud-act"},ye={class:"oo-card hud"},ve={class:"hud__row"},xe={class:"hud__row"},Ce={class:"hud__row"},Se={class:"hud__row"};function De(s,o,t,e,r,f){const l=j("Globe"),i=ee,n=j("ConfigPanel");return ie(),ae("div",he,[D(l,{options:{terrain:!0,timeline:!0},onCreated:e.init},null,8,["onCreated"]),D(n,{model:e.panelModel,fields:e.fields,title:"大气与云层控制",tip:"PBR 体积云：对云层包围盒做 ray-marching，用 3D 噪声扰动形状与细节，按散射/吸收系数积分透射率。关掉「启用效果」可对比有云 / 无云。",onChange:e.applyPanel},{default:T(()=>[u("div",ge,[D(i,{class:"oo-btn",size:"small",onClick:e.flyToTokyo},{default:T(()=>[...o[0]||(o[0]=[R("东京",-1)])]),_:1},8,["onClick"]),D(i,{class:"oo-btn",size:"small",onClick:e.flyToLondon},{default:T(()=>[...o[1]||(o[1]=[R("伦敦",-1)])]),_:1},8,["onClick"]),D(i,{class:"oo-btn",size:"small",onClick:e.flyToNYC},{default:T(()=>[...o[2]||(o[2]=[R("纽约",-1)])]),_:1},8,["onClick"]),D(i,{class:"oo-btn",size:"small",onClick:e.resetView},{default:T(()=>[...o[3]||(o[3]=[R("重置视图",-1)])]),_:1},8,["onClick"])])]),_:1},8,["model","fields","onChange"]),u("div",ye,[u("div",ve,[o[4]||(o[4]=u("span",null,"云层效果",-1)),u("b",{class:q({"is-on":e.effectsEnabled})},_(e.effectsEnabled?"已启用":"已关闭"),3)]),u("div",xe,[o[5]||(o[5]=u("span",null,"云层运动",-1)),u("b",{class:q({"is-on":e.effectsEnabled&&e.cloudMotionEnabled})},_(e.effectsEnabled?e.cloudMotionEnabled?`速度 ${e.animatedCloudSpeed.toFixed(2)}`:"静止":"—"),3)]),u("div",Ce,[o[6]||(o[6]=u("span",null,"云底 / 云顶",-1)),u("b",null,_(e.cloudOptions.cloudBottom)+" / "+_(e.cloudOptions.cloudTop)+" m",1)]),u("div",Se,[o[7]||(o[7]=u("span",null,"覆盖度",-1)),u("b",null,_(e.cloudOptions.coverage.toFixed(2)),1)])])])}const Ne=oe(me,[["render",De],["__scopeId","data-v-b19c58a2"]]);export{Ne as default};
