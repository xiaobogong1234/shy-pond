import{c as A}from"./webgl-utils-1OOxpupY.js";import{O as d,c as D,n as T}from"./Object3D-DqpYKwPR.js";import{f as v,c as E,b as P,n as R}from"./orbitControls-DFRyQxJ0.js";import{c as y,m as M}from"./mat4-DU5u1pS3.js";class g{constructor(t={}){this.type="Material",this.color=t.color?v(t.color[0],t.color[1],t.color[2]):v(1,1,1),this.map=t.map||null,this.opacity=t.opacity!==void 0?t.opacity:1,this.transparent=t.transparent!==void 0?t.transparent:!1}}class W extends g{constructor(t){super(t),this.type="MeshBasicMaterial"}}class U extends d{constructor(t,e){super(),this.geometry=t,this.material=e,this.drawMode=4,this.type="Mesh"}}class ${constructor(t,e,i=!0){this.glTexture=t.createTexture(),this.image=new Image,t.bindTexture(t.TEXTURE_2D,this.glTexture),t.texImage2D(t.TEXTURE_2D,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,new Uint8Array([0,0,255,255])),this.image.onload=()=>{t.bindTexture(t.TEXTURE_2D,this.glTexture),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,i?1:0),t.texImage2D(t.TEXTURE_2D,0,t.RGBA,t.RGBA,t.UNSIGNED_BYTE,this.image),t.generateMipmap(t.TEXTURE_2D),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.REPEAT),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.REPEAT),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR_MIPMAP_LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MAG_FILTER,t.LINEAR)},this.image.crossOrigin="Anonymous",this.image.src=e}}class _ extends d{constructor(t=[1,1,1],e=1){super(),this.color=v(t[0],t[1],t[2]),this.intensity=e,this.type="Light"}}class F extends _{constructor(t=[1,1,1],e=1){super(t,e),this.type="AmbientLight"}}class N extends _{constructor(t=[1,1,1],e=1){super(t,e),this.type="DirectionalLight"}}class C extends _{constructor(t=[1,1,1],e=1,i=0,o=1){super(t,e),this.type="PointLight",this.distance=i,this.decay=o}}class w extends g{constructor(t){super(t),this.type="MeshPhongMaterial",this.shininess=(t==null?void 0:t.shininess)!==void 0?t.shininess:30,this.specular=(t==null?void 0:t.specular)||[.1,.1,.1]}}class S extends g{constructor(t){super(t),this.type="MeshStandardMaterial",this.roughness=(t==null?void 0:t.roughness)!==void 0?t.roughness:.5,this.metalness=(t==null?void 0:t.metalness)!==void 0?t.metalness:0}}const B=`#version 300 es
in vec4 a_position;
in vec2 a_uv;
uniform mat4 u_mvp;
out vec2 v_uv;
void main() {
    gl_Position = u_mvp * a_position;
    v_uv = a_uv;
}`,G=`#version 300 es
precision highp float;
in vec2 v_uv;
uniform vec3 u_color;
uniform sampler2D u_map;
uniform bool u_useMap;
out vec4 outColor;
void main() {
    vec4 baseColor = vec4(u_color, 1.0);
    if (u_useMap) {
        vec4 texColor = texture(u_map, v_uv);
        outColor = baseColor * texColor;
    } else {
        outColor = baseColor;
    }
}`,h=`#version 300 es
in vec4 a_position;
in vec3 a_normal;
in vec2 a_uv;

uniform mat4 u_mvp;
uniform mat4 u_model;
uniform mat3 u_normalMatrix;

out vec3 v_normal;
out vec2 v_uv;
out vec3 v_worldPos;

void main() {
  gl_Position = u_mvp * a_position;
  v_normal = normalize(u_normalMatrix * a_normal);
  v_uv = a_uv;
  v_worldPos = (u_model * a_position).xyz;
}`,V=`#version 300 es
precision highp float;

in vec3 v_normal;
in vec2 v_uv;
in vec3 v_worldPos;

uniform vec3 u_color;
uniform sampler2D u_map;
uniform bool u_useMap;

struct AmbientLight {
    vec3 color;
    float intensity;
};

struct DirectionalLight {
    vec3 direction;
    vec3 color;
    float intensity;
};

struct PointLight {
    vec3 position;
    vec3 color;
    float intensity;
    float distance;
    float decay;
};

uniform AmbientLight u_ambientLights[1];
uniform DirectionalLight u_directionalLights[1];
uniform PointLight u_pointLights[1];

uniform int u_numAmbient;
uniform int u_numDirectional;
uniform int u_numPoint;

out vec4 outColor;

void main() {
  vec3 normal = normalize(v_normal);
  vec3 totalLight = vec3(0.0f);

  for(int i = 0; i < 1; i++) {
    if(i >= u_numAmbient)
      break;
    totalLight += u_ambientLights[i].color * u_ambientLights[i].intensity;
  }

  for(int i = 0; i < 1; i++) {
    if(i >= u_numDirectional)
      break;
    vec3 lightDir = normalize(-u_directionalLights[i].direction);
    float diff = max(dot(normal, lightDir), 0.0f);
    totalLight += diff * u_directionalLights[i].color * u_directionalLights[i].intensity;
  }

  for(int i = 0; i < 1; i++) {
    if(i >= u_numPoint)
      break;
    vec3 lightDir = normalize(u_pointLights[i].position - v_worldPos);
    float diff = max(dot(normal, lightDir), 0.0f);

    float distance = length(u_pointLights[i].position - v_worldPos);
    float attenuation = 1.0f;
    if(u_pointLights[i].distance > 0.0f) {
      attenuation = 1.0f / (1.0f + u_pointLights[i].decay * distance * distance);
    }

    totalLight += diff * u_pointLights[i].color * u_pointLights[i].intensity * attenuation;
  }

  vec4 baseColor = vec4(u_color, 1.0f);
  if(u_useMap) {
    baseColor *= texture(u_map, v_uv);
  }

  outColor = vec4(baseColor.rgb * totalLight, baseColor.a);
}`,k=`#version 300 es
precision highp float;

in vec3 v_normal;
in vec2 v_uv;
in vec3 v_worldPos;

uniform vec3 u_color;
uniform sampler2D u_map;
uniform bool u_useMap;
uniform vec3 u_viewPos;

uniform float u_shininess;
uniform vec3 u_specular;

struct AmbientLight {
    vec3 color;
    float intensity;
};

struct DirectionalLight {
    vec3 direction;
    vec3 color;
    float intensity;
};

struct PointLight {
    vec3 position;
    vec3 color;
    float intensity;
    float distance;
    float decay;
};

uniform AmbientLight u_ambientLights[1];
uniform DirectionalLight u_directionalLights[1];
uniform PointLight u_pointLights[1];

uniform int u_numAmbient;
uniform int u_numDirectional;
uniform int u_numPoint;

out vec4 outColor;

void main() {
    vec3 normal = normalize(v_normal);
    vec3 viewDir = normalize(u_viewPos - v_worldPos);
    vec3 totalDiffuse = vec3(0.0);
    vec3 totalSpecular = vec3(0.0);

    for(int i=0; i<1; i++) {
        if(i >= u_numAmbient) break;
        totalDiffuse += u_ambientLights[i].color * u_ambientLights[i].intensity;
    }

    for(int i=0; i<1; i++) {
        if(i >= u_numDirectional) break;
        vec3 lightDir = normalize(-u_directionalLights[i].direction);

        float diff = max(dot(normal, lightDir), 0.0);
        totalDiffuse += diff * u_directionalLights[i].color * u_directionalLights[i].intensity;

        vec3 reflectDir = reflect(-lightDir, normal);
        float spec = pow(max(dot(viewDir, reflectDir), 0.0), u_shininess);
        totalSpecular += spec * u_specular * u_directionalLights[i].color * u_directionalLights[i].intensity;
    }

    for(int i=0; i<1; i++) {
        if(i >= u_numPoint) break;
        vec3 lightDir = normalize(u_pointLights[i].position - v_worldPos);

        float distance = length(u_pointLights[i].position - v_worldPos);
        float attenuation = 1.0;
        if(u_pointLights[i].distance > 0.0) {
            attenuation = 1.0 / (1.0 + u_pointLights[i].decay * distance * distance);
        }

        float diff = max(dot(normal, lightDir), 0.0);
        totalDiffuse += diff * u_pointLights[i].color * u_pointLights[i].intensity * attenuation;

        vec3 reflectDir = reflect(-lightDir, normal);
        float spec = pow(max(dot(viewDir, reflectDir), 0.0), u_shininess);
        totalSpecular += spec * u_specular * u_pointLights[i].color * u_pointLights[i].intensity * attenuation;
    }

    vec4 baseColor = vec4(u_color, 1.0);
    if (u_useMap) {
        baseColor *= texture(u_map, v_uv);
    }

    vec3 finalColor = baseColor.rgb * totalDiffuse + totalSpecular;
    outColor = vec4(finalColor, baseColor.a);
}`,I=`#version 300 es
precision highp float;

in vec3 v_normal;
in vec2 v_uv;
in vec3 v_worldPos;

uniform vec3 u_color;
uniform sampler2D u_map;
uniform bool u_useMap;
uniform vec3 u_viewPos;

uniform float u_roughness;
uniform float u_metalness;

struct AmbientLight {
    vec3 color;
    float intensity;
};

struct DirectionalLight {
    vec3 direction;
    vec3 color;
    float intensity;
};

struct PointLight {
    vec3 position;
    vec3 color;
    float intensity;
    float distance;
    float decay;
};

uniform AmbientLight u_ambientLights[1];
uniform DirectionalLight u_directionalLights[1];
uniform PointLight u_pointLights[1];

uniform int u_numAmbient;
uniform int u_numDirectional;
uniform int u_numPoint;
const float PI = 3.14159265359;

float DistributionGGX(vec3 N, vec3 H, float roughness) {
    float a = roughness * roughness;
    float a2 = a * a;
    float NdotH = max(dot(N, H), 0.0);
    float NdotH2 = NdotH * NdotH;
    float num = a2;
    float denom = (NdotH2 * (a2 - 1.0) + 1.0);
    denom = PI * denom * denom;
    return num / denom;
}

float GeometrySchlickGGX(float NdotV, float roughness) {
    float r = (roughness + 1.0);
    float k = (r * r) / 8.0;
    float num = NdotV;
    float denom = NdotV * (1.0 - k) + k;
    return num / denom;
}

float GeometrySmith(vec3 N, vec3 V, vec3 L, float roughness) {
    float NdotV = max(dot(N, V), 0.0);
    float NdotL = max(dot(N, L), 0.0);
    float ggx2 = GeometrySchlickGGX(NdotV, roughness);
    float ggx1 = GeometrySchlickGGX(NdotL, roughness);
    return ggx1 * ggx2;
}

vec3 fresnelSchlick(float cosTheta, vec3 F0) {
    return F0 + (1.0 - F0) * pow(clamp(1.0 - cosTheta, 0.0, 1.0), 5.0);
}

out vec4 outColor;

void main() {
  vec3 N = normalize(v_normal);
  vec3 V = normalize(u_viewPos - v_worldPos);

  vec4 baseColor = vec4(u_color, 1.0f);
  if(u_useMap) {
    vec4 texColor = texture(u_map, v_uv);
    texColor.rgb = pow(texColor.rgb, vec3(2.2f));
    baseColor *= texColor;
  }
  vec3 albedo = baseColor.rgb;

  vec3 F0 = vec3(0.04f);
  F0 = mix(F0, albedo, u_metalness);

  vec3 Lo = vec3(0.0f);

  for(int i = 0; i < 1; i++) {
    if(i >= u_numDirectional)
      break;
    vec3 L = normalize(-u_directionalLights[i].direction);
    vec3 H = normalize(V + L);
    vec3 radiance = u_directionalLights[i].color * u_directionalLights[i].intensity;

    float NDF = DistributionGGX(N, H, u_roughness);
    float G = GeometrySmith(N, V, L, u_roughness);
    vec3 F = fresnelSchlick(max(dot(H, V), 0.0f), F0);

    vec3 numerator = NDF * G * F;
    float denominator = 4.0f * max(dot(N, V), 0.0f) * max(dot(N, L), 0.0f) + 0.0001f;
    vec3 specular = numerator / denominator;

    vec3 kS = F;
    vec3 kD = vec3(1.0f) - kS;
    kD *= 1.0f - u_metalness;

    float NdotL = max(dot(N, L), 0.0f);

    Lo += (kD * albedo + specular) * radiance * NdotL;
  }

  for(int i = 0; i < 1; i++) {
    if(i >= u_numPoint)
      break;
    vec3 L = normalize(u_pointLights[i].position - v_worldPos);
    vec3 H = normalize(V + L);

    float distance = length(u_pointLights[i].position - v_worldPos);
    float attenuation = 1.0f;
    if(u_pointLights[i].distance > 0.0f) {
      attenuation = 1.0f / (1.0f + u_pointLights[i].decay * distance * distance);
    }
    vec3 radiance = u_pointLights[i].color * u_pointLights[i].intensity * attenuation;

    float NDF = DistributionGGX(N, H, u_roughness);
    float G = GeometrySmith(N, V, L, u_roughness);
    vec3 F = fresnelSchlick(max(dot(H, V), 0.0f), F0);

    vec3 numerator = NDF * G * F;
    float denominator = 4.0f * max(dot(N, V), 0.0f) * max(dot(N, L), 0.0f) + 0.0001f;
    vec3 specular = numerator / denominator;

    vec3 kS = F;
    vec3 kD = vec3(1.0f) - kS;
    kD *= 1.0f - u_metalness;

    float NdotL = max(dot(N, L), 0.0f);

    Lo += (kD * albedo + specular) * radiance * NdotL;
  }

  vec3 ambient = vec3(0.0f);

  for(int i = 0; i < 1; i++) {
    if(i >= u_numAmbient)
      break;
    ambient += u_ambientLights[i].color * u_ambientLights[i].intensity * albedo;
  }

  vec3 color = ambient + Lo;

  color = pow(color, vec3(1.0f / 2.2f));

  outColor = vec4(color, baseColor.a);
}`,m={basic:{vertex:B,fragment:G},lambert:{vertex:h,fragment:V},phong:{vertex:h,fragment:k},standard:{vertex:h,fragment:I}};class Y{constructor(t){this.canvas=t.canvas;const e=this.canvas.getContext("webgl2");if(!e)throw new Error("WebGL2 not supported");this.gl=e,this.programs=new Map,this.geometryVAOs=new WeakMap,this.initContext()}initContext(){const t=this.gl;t.enable(t.DEPTH_TEST),t.enable(t.BLEND),t.blendFunc(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA)}setSize(t,e){this.canvas.width=t,this.canvas.height=e,this.gl.viewport(0,0,t,e)}render(t,e){const i=this.gl;i.clearColor(.1,.1,.1,1),i.clear(i.COLOR_BUFFER_BIT|i.DEPTH_BUFFER_BIT);const o=[],r=[];this.traverse(t,n=>{n instanceof _&&o.push(n),n instanceof U&&r.push(n)});for(const n of r)n.updateMatrixWorld(),this.renderMesh(n,e,o)}traverse(t,e){e(t);for(const i of t.children)this.traverse(i,e)}renderMesh(t,e,i){const o=this.gl,r=t.material,n=this.getProgram(r.type);if(!n)return;o.useProgram(n);const a=y();M(a,e.viewProjectionMatrix,t.modelMatrix);const c=o.getUniformLocation(n,"u_mvp");o.uniformMatrix4fv(c,!1,a);const u=o.getUniformLocation(n,"u_model");u&&o.uniformMatrix4fv(u,!1,t.modelMatrix);const L=o.getUniformLocation(n,"u_normalMatrix");if(L){const l=D();T(l,t.modelMatrix),o.uniformMatrix3fv(L,!1,l)}const p=o.getUniformLocation(n,"u_viewPos");p&&o.uniform3fv(p,e.position);const b=o.getUniformLocation(n,"u_color");if(o.uniform3fv(b,r.color),r.map&&r.map.glTexture){o.activeTexture(o.TEXTURE0),o.bindTexture(o.TEXTURE_2D,r.map.glTexture);const l=o.getUniformLocation(n,"u_map"),f=o.getUniformLocation(n,"u_useMap");o.uniform1i(l,0),o.uniform1i(f,1)}else{const l=o.getUniformLocation(n,"u_useMap");o.uniform1i(l,0)}if(r instanceof w){const l=o.getUniformLocation(n,"u_shininess"),f=o.getUniformLocation(n,"u_specular");o.uniform1f(l,r.shininess),o.uniform3fv(f,r.specular)}if(r instanceof S){const l=o.getUniformLocation(n,"u_roughness"),f=o.getUniformLocation(n,"u_metalness");o.uniform1f(l,r.roughness),o.uniform1f(f,r.metalness)}this.uploadLights(n,i);const x=this.getVAO(t.geometry,n);o.bindVertexArray(x),o.drawElements(t.drawMode,t.geometry.indices.length,o.UNSIGNED_SHORT,0)}uploadLights(t,e){const i=this.gl;let o=0,r=0,n=0;for(const a of e)if(a instanceof F)o<1&&(i.uniform3fv(i.getUniformLocation(t,`u_ambientLights[${o}].color`),a.color),i.uniform1f(i.getUniformLocation(t,`u_ambientLights[${o}].intensity`),a.intensity),o++);else if(a instanceof N){if(r<1){const c=E();P(c,a.position),R(c,c),i.uniform3fv(i.getUniformLocation(t,`u_directionalLights[${r}].direction`),c),i.uniform3fv(i.getUniformLocation(t,`u_directionalLights[${r}].color`),a.color),i.uniform1f(i.getUniformLocation(t,`u_directionalLights[${r}].intensity`),a.intensity),r++}}else a instanceof C&&n<1&&(i.uniform3fv(i.getUniformLocation(t,`u_pointLights[${n}].position`),a.position),i.uniform3fv(i.getUniformLocation(t,`u_pointLights[${n}].color`),a.color),i.uniform1f(i.getUniformLocation(t,`u_pointLights[${n}].intensity`),a.intensity),i.uniform1f(i.getUniformLocation(t,`u_pointLights[${n}].distance`),a.distance),i.uniform1f(i.getUniformLocation(t,`u_pointLights[${n}].decay`),a.decay),n++);i.uniform1i(i.getUniformLocation(t,"u_numAmbient"),o),i.uniform1i(i.getUniformLocation(t,"u_numDirectional"),r),i.uniform1i(i.getUniformLocation(t,"u_numPoint"),n)}getProgram(t){if(this.programs.has(t))return this.programs.get(t);let e=m.basic;t==="MeshLambertMaterial"?e=m.lambert:t==="MeshPhongMaterial"?e=m.phong:t==="MeshStandardMaterial"&&(e=m.standard);const i=A(this.gl,[e.vertex,e.fragment]);return i&&this.programs.set(t,i),i}getVAO(t,e){if(this.geometryVAOs.has(t))return this.geometryVAOs.get(t);const i=this.gl,o=i.createVertexArray();i.bindVertexArray(o);const r=i.createBuffer();i.bindBuffer(i.ARRAY_BUFFER,r),i.bufferData(i.ARRAY_BUFFER,new Float32Array(t.positions),i.STATIC_DRAW);const n=i.getAttribLocation(e,"a_position");if(n>=0&&(i.enableVertexAttribArray(n),i.vertexAttribPointer(n,3,i.FLOAT,!1,0,0)),t.normals&&t.normals.length>0){const c=i.createBuffer();i.bindBuffer(i.ARRAY_BUFFER,c),i.bufferData(i.ARRAY_BUFFER,new Float32Array(t.normals),i.STATIC_DRAW);const u=i.getAttribLocation(e,"a_normal");u>=0&&(i.enableVertexAttribArray(u),i.vertexAttribPointer(u,3,i.FLOAT,!1,0,0))}if(t.uvs&&t.uvs.length>0){const c=i.createBuffer();i.bindBuffer(i.ARRAY_BUFFER,c),i.bufferData(i.ARRAY_BUFFER,new Float32Array(t.uvs),i.STATIC_DRAW);const u=i.getAttribLocation(e,"a_uv");u>=0&&(i.enableVertexAttribArray(u),i.vertexAttribPointer(u,2,i.FLOAT,!1,0,0))}const a=i.createBuffer();return i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,a),i.bufferData(i.ELEMENT_ARRAY_BUFFER,new Uint16Array(t.indices),i.STATIC_DRAW),i.bindVertexArray(null),this.geometryVAOs.set(t,o),o}}class j extends d{constructor(){super(),this.type="Scene"}}export{F as A,N as D,W as M,C as P,j as S,$ as T,Y as W,U as a,S as b};
