import{L as Q,p as ee,c as te,a as ie,M as X,l as ci,b as we,G as oe,g as Rt,d as fi,C as Ge}from"./composite-layer-D_35hGlM.js";import{U as ne,l as Re,a as Ye,d as J,W as di}from"./useDeck-CyF5ro6x.js";import{T as Ot}from"./tesselator-ClpIL72i.js";import{g as pi}from"./_commonjsHelpers-gnU0ypJ3.js";import{m as zt,W as Mt}from"./column-layer-CyK21dvV.js";var he={exports:{}},Xe;function gi(){if(Xe)return he.exports;Xe=1,he.exports=o,he.exports.default=o;function o(c,g,p){p=p||2;var x=g&&g.length,m=x?g[0]*p:c.length,y=e(c,0,m,p,!0),P=[];if(!y||y.next===y.prev)return P;var b,w,A,B,k,R,V;if(x&&(y=l(c,g,y,p)),c.length>80*p){b=A=c[0],w=B=c[1];for(var D=p;D<m;D+=p)k=c[D],R=c[D+1],k<b&&(b=k),R<w&&(w=R),k>A&&(A=k),R>B&&(B=R);V=Math.max(A-b,B-w),V=V!==0?32767/V:0}return i(y,P,p,b,w,V,0),P}function e(c,g,p,x,m){var y,P;if(m===Y(c,g,p,x)>0)for(y=g;y<p;y+=x)P=U(y,c[y],c[y+1],P);else for(y=p-x;y>=g;y-=x)P=U(y,c[y],c[y+1],P);return P&&T(P,P.next)&&(W(P),P=P.next),P}function t(c,g){if(!c)return c;g||(g=c);var p=c,x;do if(x=!1,!p.steiner&&(T(p,p.next)||I(p.prev,p,p.next)===0)){if(W(p),p=g=p.prev,p===p.next)break;x=!0}else p=p.next;while(x||p!==g);return g}function i(c,g,p,x,m,y,P){if(c){!P&&y&&v(c,x,m,y);for(var b=c,w,A;c.prev!==c.next;){if(w=c.prev,A=c.next,y?s(c,x,m,y):n(c)){g.push(w.i/p|0),g.push(c.i/p|0),g.push(A.i/p|0),W(c),c=A.next,b=A.next;continue}if(c=A,c===b){P?P===1?(c=r(t(c),g,p),i(c,g,p,x,m,y,2)):P===2&&a(c,g,p,x,m,y):i(t(c),g,p,x,m,y,1);break}}}}function n(c){var g=c.prev,p=c,x=c.next;if(I(g,p,x)>=0)return!1;for(var m=g.x,y=p.x,P=x.x,b=g.y,w=p.y,A=x.y,B=m<y?m<P?m:P:y<P?y:P,k=b<w?b<A?b:A:w<A?w:A,R=m>y?m>P?m:P:y>P?y:P,V=b>w?b>A?b:A:w>A?w:A,D=x.next;D!==g;){if(D.x>=B&&D.x<=R&&D.y>=k&&D.y<=V&&S(m,b,y,w,P,A,D.x,D.y)&&I(D.prev,D,D.next)>=0)return!1;D=D.next}return!0}function s(c,g,p,x){var m=c.prev,y=c,P=c.next;if(I(m,y,P)>=0)return!1;for(var b=m.x,w=y.x,A=P.x,B=m.y,k=y.y,R=P.y,V=b<w?b<A?b:A:w<A?w:A,D=B<k?B<R?B:R:k<R?k:R,re=b>w?b>A?b:A:w>A?w:A,ae=B>k?B>R?B:R:k>R?k:R,Ke=C(V,D,g,p,x),Je=C(re,ae,g,p,x),O=c.prevZ,z=c.nextZ;O&&O.z>=Ke&&z&&z.z<=Je;){if(O.x>=V&&O.x<=re&&O.y>=D&&O.y<=ae&&O!==m&&O!==P&&S(b,B,w,k,A,R,O.x,O.y)&&I(O.prev,O,O.next)>=0||(O=O.prevZ,z.x>=V&&z.x<=re&&z.y>=D&&z.y<=ae&&z!==m&&z!==P&&S(b,B,w,k,A,R,z.x,z.y)&&I(z.prev,z,z.next)>=0))return!1;z=z.nextZ}for(;O&&O.z>=Ke;){if(O.x>=V&&O.x<=re&&O.y>=D&&O.y<=ae&&O!==m&&O!==P&&S(b,B,w,k,A,R,O.x,O.y)&&I(O.prev,O,O.next)>=0)return!1;O=O.prevZ}for(;z&&z.z<=Je;){if(z.x>=V&&z.x<=re&&z.y>=D&&z.y<=ae&&z!==m&&z!==P&&S(b,B,w,k,A,R,z.x,z.y)&&I(z.prev,z,z.next)>=0)return!1;z=z.nextZ}return!0}function r(c,g,p){var x=c;do{var m=x.prev,y=x.next.next;!T(m,y)&&E(m,x,x.next,y)&&F(m,y)&&F(y,m)&&(g.push(m.i/p|0),g.push(x.i/p|0),g.push(y.i/p|0),W(x),W(x.next),x=c=y),x=x.next}while(x!==c);return t(x)}function a(c,g,p,x,m,y){var P=c;do{for(var b=P.next.next;b!==P.prev;){if(P.i!==b.i&&M(P,b)){var w=$(P,b);P=t(P,P.next),w=t(w,w.next),i(P,g,p,x,m,y,0),i(w,g,p,x,m,y,0);return}b=b.next}P=P.next}while(P!==c)}function l(c,g,p,x){var m=[],y,P,b,w,A;for(y=0,P=g.length;y<P;y++)b=g[y]*x,w=y<P-1?g[y+1]*x:c.length,A=e(c,b,w,x,!1),A===A.next&&(A.steiner=!0),m.push(L(A));for(m.sort(f),y=0;y<m.length;y++)p=d(m[y],p);return p}function f(c,g){return c.x-g.x}function d(c,g){var p=u(c,g);if(!p)return g;var x=$(p,c);return t(x,x.next),t(p,p.next)}function u(c,g){var p=g,x=c.x,m=c.y,y=-1/0,P;do{if(m<=p.y&&m>=p.next.y&&p.next.y!==p.y){var b=p.x+(m-p.y)*(p.next.x-p.x)/(p.next.y-p.y);if(b<=x&&b>y&&(y=b,P=p.x<p.next.x?p:p.next,b===x))return P}p=p.next}while(p!==g);if(!P)return null;var w=P,A=P.x,B=P.y,k=1/0,R;p=P;do x>=p.x&&p.x>=A&&x!==p.x&&S(m<B?x:y,m,A,B,m<B?y:x,m,p.x,p.y)&&(R=Math.abs(m-p.y)/(x-p.x),F(p,c)&&(R<k||R===k&&(p.x>P.x||p.x===P.x&&h(P,p)))&&(P=p,k=R)),p=p.next;while(p!==w);return P}function h(c,g){return I(c.prev,c,g.prev)<0&&I(g.next,c,c.next)<0}function v(c,g,p,x){var m=c;do m.z===0&&(m.z=C(m.x,m.y,g,p,x)),m.prevZ=m.prev,m.nextZ=m.next,m=m.next;while(m!==c);m.prevZ.nextZ=null,m.prevZ=null,_(m)}function _(c){var g,p,x,m,y,P,b,w,A=1;do{for(p=c,c=null,y=null,P=0;p;){for(P++,x=p,b=0,g=0;g<A&&(b++,x=x.nextZ,!!x);g++);for(w=A;b>0||w>0&&x;)b!==0&&(w===0||!x||p.z<=x.z)?(m=p,p=p.nextZ,b--):(m=x,x=x.nextZ,w--),y?y.nextZ=m:c=m,m.prevZ=y,y=m;p=x}y.nextZ=null,A*=2}while(P>1);return c}function C(c,g,p,x,m){return c=(c-p)*m|0,g=(g-x)*m|0,c=(c|c<<8)&16711935,c=(c|c<<4)&252645135,c=(c|c<<2)&858993459,c=(c|c<<1)&1431655765,g=(g|g<<8)&16711935,g=(g|g<<4)&252645135,g=(g|g<<2)&858993459,g=(g|g<<1)&1431655765,c|g<<1}function L(c){var g=c,p=c;do(g.x<p.x||g.x===p.x&&g.y<p.y)&&(p=g),g=g.next;while(g!==c);return p}function S(c,g,p,x,m,y,P,b){return(m-P)*(g-b)>=(c-P)*(y-b)&&(c-P)*(x-b)>=(p-P)*(g-b)&&(p-P)*(y-b)>=(m-P)*(x-b)}function M(c,g){return c.next.i!==g.i&&c.prev.i!==g.i&&!H(c,g)&&(F(c,g)&&F(g,c)&&N(c,g)&&(I(c.prev,c,g.prev)||I(c,g.prev,g))||T(c,g)&&I(c.prev,c,c.next)>0&&I(g.prev,g,g.next)>0)}function I(c,g,p){return(g.y-c.y)*(p.x-g.x)-(g.x-c.x)*(p.y-g.y)}function T(c,g){return c.x===g.x&&c.y===g.y}function E(c,g,p,x){var m=G(I(c,g,p)),y=G(I(c,g,x)),P=G(I(p,x,c)),b=G(I(p,x,g));return!!(m!==y&&P!==b||m===0&&j(c,p,g)||y===0&&j(c,x,g)||P===0&&j(p,c,x)||b===0&&j(p,g,x))}function j(c,g,p){return g.x<=Math.max(c.x,p.x)&&g.x>=Math.min(c.x,p.x)&&g.y<=Math.max(c.y,p.y)&&g.y>=Math.min(c.y,p.y)}function G(c){return c>0?1:c<0?-1:0}function H(c,g){var p=c;do{if(p.i!==c.i&&p.next.i!==c.i&&p.i!==g.i&&p.next.i!==g.i&&E(p,p.next,c,g))return!0;p=p.next}while(p!==c);return!1}function F(c,g){return I(c.prev,c,c.next)<0?I(c,g,c.next)>=0&&I(c,c.prev,g)>=0:I(c,g,c.prev)<0||I(c,c.next,g)<0}function N(c,g){var p=c,x=!1,m=(c.x+g.x)/2,y=(c.y+g.y)/2;do p.y>y!=p.next.y>y&&p.next.y!==p.y&&m<(p.next.x-p.x)*(y-p.y)/(p.next.y-p.y)+p.x&&(x=!x),p=p.next;while(p!==c);return x}function $(c,g){var p=new Z(c.i,c.x,c.y),x=new Z(g.i,g.x,g.y),m=c.next,y=g.prev;return c.next=g,g.prev=c,p.next=m,m.prev=p,x.next=p,p.prev=x,y.next=x,x.prev=y,x}function U(c,g,p,x){var m=new Z(c,g,p);return x?(m.next=x.next,m.prev=x,x.next.prev=m,x.next=m):(m.prev=m,m.next=m),m}function W(c){c.next.prev=c.prev,c.prev.next=c.next,c.prevZ&&(c.prevZ.nextZ=c.nextZ),c.nextZ&&(c.nextZ.prevZ=c.prevZ)}function Z(c,g,p){this.i=c,this.x=g,this.y=p,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}o.deviation=function(c,g,p,x){var m=g&&g.length,y=m?g[0]*p:c.length,P=Math.abs(Y(c,0,y,p));if(m)for(var b=0,w=g.length;b<w;b++){var A=g[b]*p,B=b<w-1?g[b+1]*p:c.length;P-=Math.abs(Y(c,A,B,p))}var k=0;for(b=0;b<x.length;b+=3){var R=x[b]*p,V=x[b+1]*p,D=x[b+2]*p;k+=Math.abs((c[R]-c[D])*(c[V+1]-c[R+1])-(c[R]-c[V])*(c[D+1]-c[R+1]))}return P===0&&k===0?0:Math.abs((k-P)/P)};function Y(c,g,p,x){for(var m=0,y=g,P=p-x;y<p;y+=x)m+=(c[P]-c[y])*(c[y+1]+c[P+1]),P=y;return m}return o.flatten=function(c){for(var g=c[0][0].length,p={vertices:[],holes:[],dimensions:g},x=0,m=0;m<c.length;m++){for(var y=0;y<c[m].length;y++)for(var P=0;P<g;P++)p.vertices.push(c[m][y][P]);m>0&&(x+=c[m-1].length,p.holes.push(x))}return p},he.exports}var ui=gi();const hi=pi(ui),vi=`struct ArcUniforms {
  greatCircle: f32,
  useShortestPath: f32,
  numSegments: f32,
  widthScale: f32,
  widthMinPixels: f32,
  widthMaxPixels: f32,
  widthUnits: i32,
};

@group(0) @binding(auto) var<uniform> arc: ArcUniforms;
`,qe=`layout(std140) uniform arcUniforms {
  bool greatCircle;
  bool useShortestPath;
  float numSegments;
  float widthScale;
  float widthMinPixels;
  float widthMaxPixels;
  highp int widthUnits;
} arc;
`,xi={name:"arc",source:vi,vs:qe,fs:qe,uniformTypes:{greatCircle:"f32",useShortestPath:"f32",numSegments:"f32",widthScale:"f32",widthMinPixels:"f32",widthMaxPixels:"f32",widthUnits:"i32"}},mi=`const ZERO_OFFSET: vec3<f32> = vec3<f32>(0.0, 0.0, 0.0);

struct Attributes {
  @location(0) instanceSourcePositions: vec3<f32>,
  @location(1) instanceSourcePositions64Low: vec3<f32>,
  @location(2) instanceTargetPositions: vec3<f32>,
  @location(3) instanceTargetPositions64Low: vec3<f32>,
  @location(4) instanceSourceColors: vec4<f32>,
  @location(5) instanceTargetColors: vec4<f32>,
  @location(6) instanceWidths: f32,
  @location(7) instanceHeights: f32,
  @location(8) instanceTilts: f32,
};

struct Varyings {
  @builtin(position) position: vec4<f32>,
  @location(0) color: vec4<f32>,
  @location(1) uv: vec2<f32>,
  @location(2) pickingColor: vec3<f32>,
  @location(3) isValid: f32,
};

fn paraboloid(
  distance: f32,
  sourceZ: f32,
  targetZ: f32,
  ratio: f32,
  height: f32
) -> f32 {
  let deltaZ = targetZ - sourceZ;
  let dh = distance * height;
  if (dh == 0.0) {
    return sourceZ + deltaZ * ratio;
  }
  let unitZ = deltaZ / dh;
  let p2 = unitZ * unitZ + 1.0;
  let dir = select(0.0, 1.0, deltaZ <= 0.0);
  let z0 = mix(sourceZ, targetZ, dir);
  let r = mix(ratio, 1.0 - ratio, dir);
  return sqrt(max(r * (p2 - r), 0.0)) * dh + z0;
}

fn getExtrusionOffset(lineClipspace: vec2<f32>, side: f32, width: f32) -> vec2<f32> {
  var direction = normalize(lineClipspace * project.viewportSize);
  direction = vec2<f32>(-direction.y, direction.x);
  return direction * side * width / 2.0;
}

fn getSegmentRatio(index: f32) -> f32 {
  return smoothstep(0.0, 1.0, index / max(arc.numSegments - 1.0, 1.0));
}

fn interpolateFlat(
  source: vec3<f32>,
  targetPosition: vec3<f32>,
  ratio: f32,
  height: f32,
  tiltDegrees: f32
) -> vec3<f32> {
  let distance = length(source.xy - targetPosition.xy);
  let z = paraboloid(distance, source.z, targetPosition.z, ratio, height);
  let tiltAngle = radians(tiltDegrees);
  let tiltDirection = normalize(targetPosition.xy - source.xy);
  let tilt = vec2<f32>(-tiltDirection.y, tiltDirection.x) * z * sin(tiltAngle);
  return vec3<f32>(mix(source.xy, targetPosition.xy, ratio) + tilt, z * cos(tiltAngle));
}

// Great circle interpolation
// http://www.movable-type.co.uk/scripts/latlong.html
fn getAngularDistance(source: vec2<f32>, targetPosition: vec2<f32>) -> f32 {
  let sourceRadians = radians(source);
  let targetRadians = radians(targetPosition);
  let sinHalfDelta = sin((sourceRadians - targetRadians) / 2.0);
  let sinHalfDeltaSquared = sinHalfDelta * sinHalfDelta;
  let a = sinHalfDeltaSquared.y +
    cos(sourceRadians.y) * cos(targetRadians.y) * sinHalfDeltaSquared.x;
  return 2.0 * asin(sqrt(a));
}

fn interpolateGreatCircle(
  source: vec3<f32>,
  targetPosition: vec3<f32>,
  source3D: vec3<f32>,
  target3D: vec3<f32>,
  angularDistance: f32,
  ratio: f32,
  height: f32
) -> vec3<f32> {
  var longitudeLatitude: vec2<f32>;

  // If the angular distance is PI, use linear interpolation. Otherwise use spherical interpolation.
  if (abs(angularDistance - PI) < 0.001) {
    longitudeLatitude = (1.0 - ratio) * source.xy + ratio * targetPosition.xy;
  } else {
    let a = sin((1.0 - ratio) * angularDistance);
    let b = sin(ratio * angularDistance);
    let p = source3D.yxz * a + target3D.yxz * b;
    longitudeLatitude = degrees(vec2<f32>(
      atan2(p.y, -p.x),
      atan2(p.z, length(p.xy))
    ));
  }

  let z = paraboloid(
    angularDistance * EARTH_RADIUS,
    source.z,
    targetPosition.z,
    ratio,
    height
  );
  return vec3<f32>(longitudeLatitude, z);
}

@vertex
fn vertexMain(
  attributes: Attributes,
  @builtin(vertex_index) vertexIndex: u32,
  @builtin(instance_index) instanceIndex: u32
) -> Varyings {
  geometry.worldPosition = attributes.instanceSourcePositions;
  geometry.worldPositionAlt = attributes.instanceTargetPositions;

  let segmentIndex = f32(vertexIndex / 2u);
  let segmentSide = select(-1.0, 1.0, vertexIndex % 2u == 1u);
  var segmentRatio = getSegmentRatio(segmentIndex);
  let previousRatio = getSegmentRatio(max(0.0, segmentIndex - 1.0));
  var nextRatio = getSegmentRatio(min(arc.numSegments - 1.0, segmentIndex + 1.0));
  // If this is the first point, use next - current as direction.
  var indexDirection = select(-1.0, 1.0, segmentIndex <= 0.0);
  var isValid = 1.0;

  var currentClip: vec4<f32>;
  var nextClip: vec4<f32>;

  if (
    (arc.greatCircle != 0.0 || project.projectionMode == PROJECTION_MODE_GLOBE) &&
    project.coordinateSystem == COORDINATE_SYSTEM_LNGLAT
  ) {
    let source = project_globe_(vec3<f32>(attributes.instanceSourcePositions.xy, 0.0));
    let targetPosition = project_globe_(vec3<f32>(attributes.instanceTargetPositions.xy, 0.0));
    let angularDistance = getAngularDistance(
      attributes.instanceSourcePositions.xy,
      attributes.instanceTargetPositions.xy
    );

    let previousPosition = interpolateGreatCircle(
      attributes.instanceSourcePositions,
      attributes.instanceTargetPositions,
      source,
      targetPosition,
      angularDistance,
      previousRatio,
      attributes.instanceHeights
    );
    var currentPosition = interpolateGreatCircle(
      attributes.instanceSourcePositions,
      attributes.instanceTargetPositions,
      source,
      targetPosition,
      angularDistance,
      segmentRatio,
      attributes.instanceHeights
    );
    var nextPosition = interpolateGreatCircle(
      attributes.instanceSourcePositions,
      attributes.instanceTargetPositions,
      source,
      targetPosition,
      angularDistance,
      nextRatio,
      attributes.instanceHeights
    );

    if (abs(currentPosition.x - previousPosition.x) > 180.0) {
      indexDirection = -1.0;
      isValid = 0.0;
    } else if (abs(currentPosition.x - nextPosition.x) > 180.0) {
      indexDirection = 1.0;
      isValid = 0.0;
    }
    nextPosition = select(nextPosition, previousPosition, indexDirection < 0.0);
    nextRatio = select(nextRatio, previousRatio, indexDirection < 0.0);

    if (isValid == 0.0) {
      // Split at the antimeridian.
      nextPosition.x += select(360.0, -360.0, nextPosition.x > 0.0);
      let ratio = (
        select(-180.0, 180.0, currentPosition.x > 0.0) - currentPosition.x
      ) / (nextPosition.x - currentPosition.x);
      currentPosition = mix(currentPosition, nextPosition, ratio);
      segmentRatio = mix(segmentRatio, nextRatio, ratio);
    }

    let currentPosition64Low = mix(
      attributes.instanceSourcePositions64Low,
      attributes.instanceTargetPositions64Low,
      segmentRatio
    );
    let nextPosition64Low = mix(
      attributes.instanceSourcePositions64Low,
      attributes.instanceTargetPositions64Low,
      nextRatio
    );
    let currentProjection = project_position_to_clipspace_and_commonspace(
      currentPosition,
      currentPosition64Low,
      ZERO_OFFSET
    );
    currentClip = currentProjection.clipPosition;
    nextClip = project_position_to_clipspace(nextPosition, nextPosition64Low, ZERO_OFFSET);
    geometry.position = currentProjection.commonPosition;
  } else {
    var sourceWorld = attributes.instanceSourcePositions;
    var targetWorld = attributes.instanceTargetPositions;
    if (arc.useShortestPath != 0.0) {
      sourceWorld.x = ((sourceWorld.x + 180.0) % 360.0) - 180.0;
      targetWorld.x = ((targetWorld.x + 180.0) % 360.0) - 180.0;
      let deltaLongitude = targetWorld.x - sourceWorld.x;
      if (deltaLongitude > 180.0) {
        targetWorld.x -= 360.0;
      }
      if (deltaLongitude < -180.0) {
        sourceWorld.x -= 360.0;
      }
    }

    let source = project_position_vec3_f64(
      sourceWorld,
      attributes.instanceSourcePositions64Low
    );
    let targetPosition = project_position_vec3_f64(
      targetWorld,
      attributes.instanceTargetPositions64Low
    );

    // Common x at longitude=-180.
    var antimeridianX = 0.0;
    if (arc.useShortestPath != 0.0) {
      if (project.projectionMode == PROJECTION_MODE_WEB_MERCATOR_AUTO_OFFSET) {
        antimeridianX = -(project.coordinateOrigin.x + 180.0) / 360.0 * TILE_SIZE;
      }
      let thresholdRatio = (antimeridianX - source.x) / (targetPosition.x - source.x);
      if (previousRatio <= thresholdRatio && nextRatio > thresholdRatio) {
        isValid = 0.0;
        indexDirection = sign(segmentRatio - thresholdRatio);
        segmentRatio = thresholdRatio;
      }
    }

    nextRatio = select(nextRatio, previousRatio, indexDirection < 0.0);
    var currentPosition = interpolateFlat(
      source,
      targetPosition,
      segmentRatio,
      attributes.instanceHeights,
      attributes.instanceTilts
    );
    var nextPosition = interpolateFlat(
      source,
      targetPosition,
      nextRatio,
      attributes.instanceHeights,
      attributes.instanceTilts
    );

    if (arc.useShortestPath != 0.0 && nextPosition.x < antimeridianX) {
      currentPosition.x += TILE_SIZE;
      nextPosition.x += TILE_SIZE;
    }

    currentClip = project_common_position_to_clipspace(vec4<f32>(currentPosition, 1.0));
    nextClip = project_common_position_to_clipspace(vec4<f32>(nextPosition, 1.0));
    geometry.position = vec4<f32>(currentPosition, 1.0);
  }

  geometry.uv = vec2<f32>(segmentRatio, segmentSide);
  geometry.pickingColor = picking_getPickingColorFromIndex(instanceIndex);

  let widthPixels = clamp(
    project_unit_size_to_pixel(attributes.instanceWidths * arc.widthScale, arc.widthUnits),
    arc.widthMinPixels,
    arc.widthMaxPixels
  );
#ifdef ANTIALIASING
  var offset = getExtrusionOffset(
#else
  let offset = getExtrusionOffset(
#endif
    (nextClip.xy - currentClip.xy) * indexDirection,
    segmentSide,
    widthPixels
  );
#ifdef ANTIALIASING
  let halfWidthPixels = length(offset);
  if (halfWidthPixels > 0.0) {
    // Keep the declared edge at abs(uv.y) == 1 while rasterizing the outer half of the centered
    // one-device-pixel coverage ramp.
    let coverageScale = 1.0 + 0.5 / project.devicePixelRatio / halfWidthPixels;
    offset *= coverageScale;
    geometry.uv.y *= coverageScale;
  }
#endif

  var output: Varyings;
  output.position = currentClip + vec4<f32>(project_pixel_size_to_clipspace(offset), 0.0, 0.0);
  let color = mix(attributes.instanceSourceColors, attributes.instanceTargetColors, segmentRatio);
  output.color = vec4<f32>(color.rgb, color.a * layer.opacity);
  output.uv = geometry.uv;
  output.pickingColor = geometry.pickingColor;
  output.isValid = isValid;
  return output;
}

@fragment
fn fragmentMain(varyings: Varyings) -> @location(0) vec4<f32> {
#ifdef ANTIALIASING
  let edgeCoord = abs(varyings.uv.y);
  let edgePixels = (1.0 - edgeCoord) / max(fwidth(edgeCoord), 1e-6);
#endif

  if (varyings.isValid == 0.0) {
    discard;
  }

#ifdef ANTIALIASING
  // Fragments outside the coverage ramp must not write depth or picking colors.
  if (edgePixels <= -SMOOTH_EDGE_RADIUS) {
    discard;
  }
#endif
  var color = varyings.color;
#ifdef ANTIALIASING
  // Feather one device pixel across the width. Arc segments meet lengthwise, so only soften the
  // two outer edges of the strip.
  color.a *= smoothedge(0.0, edgePixels);
#endif
  if (picking.isActive > 0.5) {
    if (!picking_isColorValid(varyings.pickingColor)) {
      discard;
    }
    return vec4<f32>(varyings.pickingColor, 1.0);
  }
  if (picking.isHighlightActive > 0.5) {
    let highlightedObjectColor = picking_normalizeColor(picking.highlightedObjectColor);
    if (picking_isColorZero(abs(varyings.pickingColor - highlightedObjectColor))) {
      let highlightAlpha = picking.highlightColor.a;
      let blendedAlpha = highlightAlpha + color.a * (1.0 - highlightAlpha);
      if (blendedAlpha > 0.0) {
        let highlightRatio = highlightAlpha / blendedAlpha;
        color = vec4<f32>(
          mix(color.rgb, picking.highlightColor.rgb, highlightRatio),
          blendedAlpha
        );
      }
    }
  }
  return deckgl_premultiplied_alpha(color);
}
`,yi=`#version 300 es
#define SHADER_NAME arc-layer-vertex-shader
in vec4 instanceSourceColors;
in vec4 instanceTargetColors;
in vec3 instanceSourcePositions;
in vec3 instanceSourcePositions64Low;
in vec3 instanceTargetPositions;
in vec3 instanceTargetPositions64Low;
in float instanceWidths;
in float instanceHeights;
in float instanceTilts;
out vec4 vColor;
out vec2 uv;
out float isValid;
float paraboloid(float distance, float sourceZ, float targetZ, float ratio) {
float deltaZ = targetZ - sourceZ;
float dh = distance * instanceHeights;
if (dh == 0.0) {
return sourceZ + deltaZ * ratio;
}
float unitZ = deltaZ / dh;
float p2 = unitZ * unitZ + 1.0;
float dir = step(deltaZ, 0.0);
float z0 = mix(sourceZ, targetZ, dir);
float r = mix(ratio, 1.0 - ratio, dir);
return sqrt(r * (p2 - r)) * dh + z0;
}
vec2 getExtrusionOffset(vec2 line_clipspace, float offset_direction, float width) {
vec2 dir_screenspace = normalize(line_clipspace * project.viewportSize);
dir_screenspace = vec2(-dir_screenspace.y, dir_screenspace.x);
return dir_screenspace * offset_direction * width / 2.0;
}
float getSegmentRatio(float index) {
return smoothstep(0.0, 1.0, index / (arc.numSegments - 1.0));
}
vec3 interpolateFlat(vec3 source, vec3 target, float segmentRatio) {
float distance = length(source.xy - target.xy);
float z = paraboloid(distance, source.z, target.z, segmentRatio);
float tiltAngle = radians(instanceTilts);
vec2 tiltDirection = normalize(target.xy - source.xy);
vec2 tilt = vec2(-tiltDirection.y, tiltDirection.x) * z * sin(tiltAngle);
return vec3(
mix(source.xy, target.xy, segmentRatio) + tilt,
z * cos(tiltAngle)
);
}
float getAngularDist (vec2 source, vec2 target) {
vec2 sourceRadians = radians(source);
vec2 targetRadians = radians(target);
vec2 sin_half_delta = sin((sourceRadians - targetRadians) / 2.0);
vec2 shd_sq = sin_half_delta * sin_half_delta;
float a = shd_sq.y + cos(sourceRadians.y) * cos(targetRadians.y) * shd_sq.x;
return 2.0 * asin(sqrt(a));
}
vec3 interpolateGreatCircle(vec3 source, vec3 target, vec3 source3D, vec3 target3D, float angularDist, float t) {
vec2 lngLat;
if(abs(angularDist - PI) < 0.001) {
lngLat = (1.0 - t) * source.xy + t * target.xy;
} else {
float a = sin((1.0 - t) * angularDist);
float b = sin(t * angularDist);
vec3 p = source3D.yxz * a + target3D.yxz * b;
lngLat = degrees(vec2(atan(p.y, -p.x), atan(p.z, length(p.xy))));
}
float z = paraboloid(angularDist * EARTH_RADIUS, source.z, target.z, t);
return vec3(lngLat, z);
}
void main(void) {
geometry.worldPosition = instanceSourcePositions;
geometry.worldPositionAlt = instanceTargetPositions;
float segmentIndex = float(gl_VertexID / 2);
float segmentSide = mod(float(gl_VertexID), 2.) == 0. ? -1. : 1.;
float segmentRatio = getSegmentRatio(segmentIndex);
float prevSegmentRatio = getSegmentRatio(max(0.0, segmentIndex - 1.0));
float nextSegmentRatio = getSegmentRatio(min(arc.numSegments - 1.0, segmentIndex + 1.0));
float indexDir = mix(-1.0, 1.0, step(segmentIndex, 0.0));
isValid = 1.0;
uv = vec2(segmentRatio, segmentSide);
geometry.uv = uv;
geometry.pickingColor = picking_getPickingColorFromInstanceID();
vec4 curr;
vec4 next;
vec3 source;
vec3 target;
if ((arc.greatCircle || project.projectionMode == PROJECTION_MODE_GLOBE) && project.coordinateSystem == COORDINATE_SYSTEM_LNGLAT) {
source = project_globe_(vec3(instanceSourcePositions.xy, 0.0));
target = project_globe_(vec3(instanceTargetPositions.xy, 0.0));
float angularDist = getAngularDist(instanceSourcePositions.xy, instanceTargetPositions.xy);
vec3 prevPos = interpolateGreatCircle(instanceSourcePositions, instanceTargetPositions, source, target, angularDist, prevSegmentRatio);
vec3 currPos = interpolateGreatCircle(instanceSourcePositions, instanceTargetPositions, source, target, angularDist, segmentRatio);
vec3 nextPos = interpolateGreatCircle(instanceSourcePositions, instanceTargetPositions, source, target, angularDist, nextSegmentRatio);
if (abs(currPos.x - prevPos.x) > 180.0) {
indexDir = -1.0;
isValid = 0.0;
} else if (abs(currPos.x - nextPos.x) > 180.0) {
indexDir = 1.0;
isValid = 0.0;
}
nextPos = indexDir < 0.0 ? prevPos : nextPos;
nextSegmentRatio = indexDir < 0.0 ? prevSegmentRatio : nextSegmentRatio;
if (isValid == 0.0) {
nextPos.x += nextPos.x > 0.0 ? -360.0 : 360.0;
float t = ((currPos.x > 0.0 ? 180.0 : -180.0) - currPos.x) / (nextPos.x - currPos.x);
currPos = mix(currPos, nextPos, t);
segmentRatio = mix(segmentRatio, nextSegmentRatio, t);
}
vec3 currPos64Low = mix(instanceSourcePositions64Low, instanceTargetPositions64Low, segmentRatio);
vec3 nextPos64Low = mix(instanceSourcePositions64Low, instanceTargetPositions64Low, nextSegmentRatio);
curr = project_position_to_clipspace(currPos, currPos64Low, vec3(0.0), geometry.position);
next = project_position_to_clipspace(nextPos, nextPos64Low, vec3(0.0));
} else {
vec3 source_world = instanceSourcePositions;
vec3 target_world = instanceTargetPositions;
if (arc.useShortestPath) {
source_world.x = mod(source_world.x + 180., 360.0) - 180.;
target_world.x = mod(target_world.x + 180., 360.0) - 180.;
float deltaLng = target_world.x - source_world.x;
if (deltaLng > 180.) target_world.x -= 360.;
if (deltaLng < -180.) source_world.x -= 360.;
}
source = project_position(source_world, instanceSourcePositions64Low);
target = project_position(target_world, instanceTargetPositions64Low);
float antiMeridianX = 0.0;
if (arc.useShortestPath) {
if (project.projectionMode == PROJECTION_MODE_WEB_MERCATOR_AUTO_OFFSET) {
antiMeridianX = -(project.coordinateOrigin.x + 180.) / 360. * TILE_SIZE;
}
float thresholdRatio = (antiMeridianX - source.x) / (target.x - source.x);
if (prevSegmentRatio <= thresholdRatio && nextSegmentRatio > thresholdRatio) {
isValid = 0.0;
indexDir = sign(segmentRatio - thresholdRatio);
segmentRatio = thresholdRatio;
}
}
nextSegmentRatio = indexDir < 0.0 ? prevSegmentRatio : nextSegmentRatio;
vec3 currPos = interpolateFlat(source, target, segmentRatio);
vec3 nextPos = interpolateFlat(source, target, nextSegmentRatio);
if (arc.useShortestPath) {
if (nextPos.x < antiMeridianX) {
currPos.x += TILE_SIZE;
nextPos.x += TILE_SIZE;
}
}
curr = project_common_position_to_clipspace(vec4(currPos, 1.0));
next = project_common_position_to_clipspace(vec4(nextPos, 1.0));
geometry.position = vec4(currPos, 1.0);
}
float widthPixels = clamp(
project_size_to_pixel(instanceWidths * arc.widthScale, arc.widthUnits),
arc.widthMinPixels, arc.widthMaxPixels
);
vec3 offset = vec3(
getExtrusionOffset((next.xy - curr.xy) * indexDir, segmentSide, widthPixels),
0.0);
DECKGL_FILTER_SIZE(offset, geometry);
#ifdef ANTIALIASING
float halfWidthPixels = length(offset.xy);
if (halfWidthPixels > 0.0) {
float coverageScale = 1.0 + 0.5 / project.devicePixelRatio / halfWidthPixels;
offset.xy *= coverageScale;
uv.y *= coverageScale;
}
geometry.uv = uv;
#endif
DECKGL_FILTER_GL_POSITION(curr, geometry);
gl_Position = curr + vec4(project_pixel_size_to_clipspace(offset.xy), 0.0, 0.0);
vec4 color = mix(instanceSourceColors, instanceTargetColors, segmentRatio);
vColor = vec4(color.rgb, color.a * layer.opacity);
DECKGL_FILTER_COLOR(vColor, geometry);
}
`,Pi=`#version 300 es
#define SHADER_NAME arc-layer-fragment-shader
precision highp float;
in vec4 vColor;
in vec2 uv;
in float isValid;
out vec4 fragColor;
void main(void) {
#ifdef ANTIALIASING
float edgeCoord = abs(uv.y);
float edgePixels = (1.0 - edgeCoord) / max(fwidth(edgeCoord), 1e-6);
#endif
if (isValid == 0.0) {
discard;
}
#ifdef ANTIALIASING
if (edgePixels <= -SMOOTH_EDGE_RADIUS) {
discard;
}
#endif
fragColor = vColor;
geometry.uv = uv;
#ifdef ANTIALIASING
fragColor.a *= smoothedge(0.0, edgePixels);
#endif
DECKGL_FILTER_COLOR(fragColor, geometry);
}
`,Le=[0,0,0,255],_i={getSourcePosition:{type:"accessor",value:o=>o.sourcePosition},getTargetPosition:{type:"accessor",value:o=>o.targetPosition},getSourceColor:{type:"accessor",value:Le},getTargetColor:{type:"accessor",value:Le},getWidth:{type:"accessor",value:1},getHeight:{type:"accessor",value:1},getTilt:{type:"accessor",value:0},greatCircle:!1,numSegments:{type:"number",value:50,min:1},widthUnits:"pixels",widthScale:{type:"number",value:1,min:0},widthMinPixels:{type:"number",value:0,min:0},widthMaxPixels:{type:"number",value:Number.MAX_SAFE_INTEGER,min:0},antialiasing:!1};class kt extends Q{getBounds(){var e;return(e=this.getAttributeManager())==null?void 0:e.getBounds(["instanceSourcePositions","instanceTargetPositions"])}getShaders(){const{antialiasing:e}=this.props;return super.getShaders({vs:yi,fs:Pi,source:mi,defines:e?{ANTIALIASING:1}:{},modules:[ee,te,ie,xi]})}get wrapLongitude(){return!1}initializeState(){this.getAttributeManager().addInstanced({instanceSourcePositions:{size:3,type:"float64",fp64:this.use64bitPositions(),transition:!0,accessor:"getSourcePosition"},instanceTargetPositions:{size:3,type:"float64",fp64:this.use64bitPositions(),transition:!0,accessor:"getTargetPosition"},instanceSourceColors:{size:this.props.colorFormat.length,type:"unorm8",transition:!0,accessor:"getSourceColor",defaultValue:Le},instanceTargetColors:{size:this.props.colorFormat.length,type:"unorm8",transition:!0,accessor:"getTargetColor",defaultValue:Le},instanceWidths:{size:1,transition:!0,accessor:"getWidth",defaultValue:1},instanceHeights:{size:1,transition:!0,accessor:"getHeight",defaultValue:1},instanceTilts:{size:1,transition:!0,accessor:"getTilt",defaultValue:0}})}updateState(e){var s;super.updateState(e);const{props:t,oldProps:i,changeFlags:n}=e;(n.extensionsChanged||t.antialiasing!==i.antialiasing)&&((s=this.state.model)==null||s.destroy(),this.state.model=this._getModel(),this.getAttributeManager().invalidateAll())}draw({uniforms:e}){const{widthUnits:t,widthScale:i,widthMinPixels:n,widthMaxPixels:s,greatCircle:r,wrapLongitude:a,numSegments:l}=this.props,f={numSegments:l,widthUnits:ne[t],widthScale:i,widthMinPixels:n,widthMaxPixels:s,greatCircle:r,useShortestPath:a},d=this.state.model;d.shaderInputs.setProps({arc:f}),d.setVertexCount(l*2),d.draw(this.context.renderPass)}_getModel(){return new X(this.context.device,{...this.getShaders(),id:this.props.id,bufferLayout:this.getAttributeManager().getBufferLayouts(),topology:"triangle-strip",isInstanced:!0})}}kt.layerName="ArcLayer";kt.defaultProps=_i;const Ci=new Uint32Array([0,2,1,0,3,2]),bi=new Float32Array([0,1,0,0,1,0,1,1]);function Li(o,e){if(!e)return Si(o);const t=Math.max(Math.abs(o[0][0]-o[3][0]),Math.abs(o[1][0]-o[2][0])),i=Math.max(Math.abs(o[1][1]-o[0][1]),Math.abs(o[2][1]-o[3][1])),n=Math.ceil(t/e)+1,s=Math.ceil(i/e)+1,r=(n-1)*(s-1)*6,a=new Uint32Array(r),l=new Float32Array(n*s*2),f=new Float64Array(n*s*3);let d=0,u=0;for(let h=0;h<n;h++){const v=h/(n-1);for(let _=0;_<s;_++){const C=_/(s-1),L=Ai(o,v,C);f[d*3+0]=L[0],f[d*3+1]=L[1],f[d*3+2]=L[2]||0,l[d*2+0]=v,l[d*2+1]=1-C,h>0&&_>0&&(a[u++]=d-s,a[u++]=d-s-1,a[u++]=d-1,a[u++]=d-s,a[u++]=d-1,a[u++]=d),d++}}return{vertexCount:r,positions:f,indices:a,texCoords:l}}function Si(o){const e=new Float64Array(12);for(let t=0;t<o.length;t++)e[t*3+0]=o[t][0],e[t*3+1]=o[t][1],e[t*3+2]=o[t][2]||0;return{vertexCount:6,positions:e,indices:Ci,texCoords:bi}}function Ai(o,e,t){return Re(Re(o[0],o[1],t),Re(o[3],o[2],t),e)}const wi=`
struct BitmapUniforms {
  bounds: vec4<f32>,
  coordinateConversion: f32,
  desaturate: f32,
  tintColor: vec3<f32>,
  transparentColor: vec4<f32>,
};

@group(0) @binding(auto) var<uniform> bitmap: BitmapUniforms;
@group(0) @binding(auto) var bitmapTexture: texture_2d<f32>;
@group(0) @binding(auto) var bitmapTextureSampler: sampler;
`,Qe=`layout(std140) uniform bitmapUniforms {
  vec4 bounds;
  float coordinateConversion;
  float desaturate;
  vec3 tintColor;
  vec4 transparentColor;
} bitmap;
`,Ii={name:"bitmap",source:wi,vs:Qe,fs:Qe,uniformTypes:{bounds:"vec4<f32>",coordinateConversion:"f32",desaturate:"f32",tintColor:"vec3<f32>",transparentColor:"vec4<f32>"}},Ei=`struct Attributes {
  @location(0) positions: vec3<f32>,
  @location(1) positions64Low: vec3<f32>,
  @location(2) texCoords: vec2<f32>,
};

struct Varyings {
  @builtin(position) position: vec4<f32>,
  @location(0) vTexCoord: vec2<f32>,
  @location(1) vTexPos: vec2<f32>,
  @location(2) pickingColor: vec3<f32>,
  @location(3) pickingDepth: f32,
};

// from degrees to Web Mercator
fn lnglat_to_mercator(lnglat: vec2<f32>) -> vec2<f32> {
  let x = lnglat.x;
  let y = clamp(lnglat.y, -89.9, 89.9);
  return vec2<f32>(
    radians(x) + PI,
    PI + log(tan(PI * 0.25 + radians(y) * 0.5))
  ) * WORLD_SCALE;
}

// from Web Mercator to degrees
fn mercator_to_lnglat(xy: vec2<f32>) -> vec2<f32> {
  let position = xy / WORLD_SCALE;
  return degrees(vec2<f32>(
    position.x - PI,
    atan(exp(position.y - PI)) * 2.0 - PI * 0.5
  ));
}

fn color_desaturate(colorValue: vec3<f32>) -> vec3<f32> {
  let luminance = (colorValue.r + colorValue.g + colorValue.b) * 0.333333333;
  return mix(colorValue, vec3<f32>(luminance), bitmap.desaturate);
}

fn color_tint(colorValue: vec3<f32>) -> vec3<f32> {
  return colorValue * bitmap.tintColor;
}

fn apply_opacity(colorValue: vec3<f32>, alpha: f32) -> vec4<f32> {
  if (bitmap.transparentColor.a == 0.0) {
    return vec4<f32>(colorValue, alpha);
  }
  let blendedAlpha = alpha + bitmap.transparentColor.a * (1.0 - alpha);
  let highLightRatio = alpha / blendedAlpha;
  let blendedRGB = mix(bitmap.transparentColor.rgb, colorValue, highLightRatio);
  return vec4<f32>(blendedRGB, blendedAlpha);
}

fn getUV(position: vec2<f32>) -> vec2<f32> {
  return vec2<f32>(
    (position.x - bitmap.bounds[0]) / (bitmap.bounds[2] - bitmap.bounds[0]),
    (position.y - bitmap.bounds[3]) / (bitmap.bounds[1] - bitmap.bounds[3])
  );
}

// Pack the top 12 bits of two normalized floats into three 8-bit values.
fn packUVsIntoRGB(uv: vec2<f32>) -> vec3<f32> {
  let uv8bit = floor(uv * 256.0);
  let uvFraction = fract(uv * 256.0);
  let uvFraction4bit = floor(uvFraction * 16.0);
  let fractions = uvFraction4bit.x + uvFraction4bit.y * 16.0;
  return vec3<f32>(uv8bit, fractions) / 255.0;
}

@vertex
fn vertexMain(attributes: Attributes) -> Varyings {
  var output: Varyings;
  geometry.worldPosition = attributes.positions;
  geometry.uv = attributes.texCoords;
  geometry.pickingColor = picking_getPickingColorFromIndex(0u);

  let projectedPosition = project_position_to_clipspace_and_commonspace(
    attributes.positions,
    attributes.positions64Low,
    vec3<f32>(0.0)
  );
  geometry.position = projectedPosition.commonPosition;
  output.position = projectedPosition.clipPosition;
  output.vTexCoord = attributes.texCoords;
  output.vTexPos = vec2<f32>(0.0);
  output.pickingColor = geometry.pickingColor;
  output.pickingDepth = output.position.z / output.position.w;

  if (bitmap.coordinateConversion < -0.5) {
    output.vTexPos = geometry.position.xy + project.commonOrigin.xy;
  } else if (bitmap.coordinateConversion > 0.5) {
    output.vTexPos = geometry.worldPosition.xy;
  }

  return output;
}

@fragment
fn fragmentMain(input: Varyings) -> @location(0) vec4<f32> {
  var uv = input.vTexCoord;
  if (bitmap.coordinateConversion < -0.5) {
    uv = getUV(mercator_to_lnglat(input.vTexPos));
  } else if (bitmap.coordinateConversion > 0.5) {
    uv = getUV(lnglat_to_mercator(input.vTexPos));
  }

  let bitmapColor = textureSample(bitmapTexture, bitmapTextureSampler, uv);
  var fragColor = apply_opacity(
    color_tint(color_desaturate(bitmapColor.rgb)),
    bitmapColor.a * layer.opacity
  );

  geometry.uv = uv;

  if (picking.isActive > 0.5) {
    if (picking.isAttribute > 0.5) {
      return vec4<f32>(input.pickingDepth, 0.0, 0.0, 1.0);
    }
    return vec4<f32>(packUVsIntoRGB(uv), 1.0);
  }

  if (picking.isHighlightActive > 0.5) {
    let highlightedObjectColor = picking_normalizeColor(picking.highlightedObjectColor);
    if (picking_isColorZero(abs(input.pickingColor - highlightedObjectColor))) {
      let highLightAlpha = picking.highlightColor.a;
      let blendedAlpha = highLightAlpha + fragColor.a * (1.0 - highLightAlpha);
      if (blendedAlpha > 0.0) {
        let highLightRatio = highLightAlpha / blendedAlpha;
        fragColor = vec4<f32>(
          mix(fragColor.rgb, picking.highlightColor.rgb, highLightRatio),
          blendedAlpha
        );
      } else {
        fragColor = vec4<f32>(fragColor.rgb, 0.0);
      }
    }
  }

  return deckgl_premultiplied_alpha(fragColor);
}
`,Ti=`#version 300 es
#define SHADER_NAME bitmap-layer-vertex-shader

in vec2 texCoords;
in vec3 positions;
in vec3 positions64Low;

out vec2 vTexCoord;
out vec2 vTexPos;

const vec3 pickingColor = vec3(1.0, 0.0, 0.0);

void main(void) {
  geometry.worldPosition = positions;
  geometry.uv = texCoords;
  geometry.pickingColor = pickingColor;

  gl_Position = project_position_to_clipspace(positions, positions64Low, vec3(0.0), geometry.position);
  DECKGL_FILTER_GL_POSITION(gl_Position, geometry);

  vTexCoord = texCoords;

  if (bitmap.coordinateConversion < -0.5) {
    vTexPos = geometry.position.xy + project.commonOrigin.xy;
  } else if (bitmap.coordinateConversion > 0.5) {
    vTexPos = geometry.worldPosition.xy;
  }

  vec4 color = vec4(0.0);
  DECKGL_FILTER_COLOR(color, geometry);
}
`,Ri=`
vec3 packUVsIntoRGB(vec2 uv) {
  // Extract the top 8 bits. We want values to be truncated down so we can add a fraction
  vec2 uv8bit = floor(uv * 256.);

  // Calculate the normalized remainders of u and v parts that do not fit into 8 bits
  // Scale and clamp to 0-1 range
  vec2 uvFraction = fract(uv * 256.);
  vec2 uvFraction4bit = floor(uvFraction * 16.);

  // Remainder can be encoded in blue channel, encode as 4 bits for pixel coordinates
  float fractions = uvFraction4bit.x + uvFraction4bit.y * 16.;

  return vec3(uv8bit, fractions) / 255.;
}
`,Oi=`#version 300 es
#define SHADER_NAME bitmap-layer-fragment-shader

#ifdef GL_ES
precision highp float;
#endif

uniform sampler2D bitmapTexture;

in vec2 vTexCoord;
in vec2 vTexPos;

out vec4 fragColor;

/* projection utils */
const float TILE_SIZE = 512.0;
const float PI = 3.1415926536;
const float WORLD_SCALE = TILE_SIZE / PI / 2.0;

// from degrees to Web Mercator
vec2 lnglat_to_mercator(vec2 lnglat) {
  float x = lnglat.x;
  float y = clamp(lnglat.y, -89.9, 89.9);
  return vec2(
    radians(x) + PI,
    PI + log(tan(PI * 0.25 + radians(y) * 0.5))
  ) * WORLD_SCALE;
}

// from Web Mercator to degrees
vec2 mercator_to_lnglat(vec2 xy) {
  xy /= WORLD_SCALE;
  return degrees(vec2(
    xy.x - PI,
    atan(exp(xy.y - PI)) * 2.0 - PI * 0.5
  ));
}
/* End projection utils */

// apply desaturation
vec3 color_desaturate(vec3 color) {
  float luminance = (color.r + color.g + color.b) * 0.333333333;
  return mix(color, vec3(luminance), bitmap.desaturate);
}

// apply tint
vec3 color_tint(vec3 color) {
  return color * bitmap.tintColor;
}

// blend with background color
vec4 apply_opacity(vec3 color, float alpha) {
  if (bitmap.transparentColor.a == 0.0) {
    return vec4(color, alpha);
  }
  float blendedAlpha = alpha + bitmap.transparentColor.a * (1.0 - alpha);
  float highLightRatio = alpha / blendedAlpha;
  vec3 blendedRGB = mix(bitmap.transparentColor.rgb, color, highLightRatio);
  return vec4(blendedRGB, blendedAlpha);
}

vec2 getUV(vec2 pos) {
  return vec2(
    (pos.x - bitmap.bounds[0]) / (bitmap.bounds[2] - bitmap.bounds[0]),
    (pos.y - bitmap.bounds[3]) / (bitmap.bounds[1] - bitmap.bounds[3])
  );
}

${Ri}

void main(void) {
  vec2 uv = vTexCoord;
  if (bitmap.coordinateConversion < -0.5) {
    vec2 lnglat = mercator_to_lnglat(vTexPos);
    uv = getUV(lnglat);
  } else if (bitmap.coordinateConversion > 0.5) {
    vec2 commonPos = lnglat_to_mercator(vTexPos);
    uv = getUV(commonPos);
  }
  vec4 bitmapColor = texture(bitmapTexture, uv);

  fragColor = apply_opacity(color_tint(color_desaturate(bitmapColor.rgb)), bitmapColor.a * layer.opacity);

  geometry.uv = uv;
  DECKGL_FILTER_COLOR(fragColor, geometry);

  if (bool(picking.isActive) && !bool(picking.isAttribute)) {
    // Since instance information is not used, we can use picking color for pixel index
    fragColor.rgb = packUVsIntoRGB(uv);
  }
}
`,zi={image:{type:"image",value:null,async:!0},bounds:{type:"array",value:[1,0,0,1],compare:!0},_imageCoordinateSystem:"default",desaturate:{type:"number",min:0,max:1,value:0},transparentColor:{type:"color",value:[0,0,0,0]},tintColor:{type:"color",value:[255,255,255]},textureParameters:{type:"object",ignore:!0,value:null}};class Dt extends Q{getShaders(){return super.getShaders({vs:Ti,fs:Oi,source:Ei,modules:[te,ee,ie,Ii]})}initializeState(){const e=this.getAttributeManager(),t=!0;e.add({indices:{size:1,isIndexed:!0,update:i=>i.value=this.state.mesh.indices,noAlloc:t},positions:{size:3,type:"float64",fp64:this.use64bitPositions(),update:i=>i.value=this.state.mesh.positions,noAlloc:t},texCoords:{size:2,update:i=>i.value=this.state.mesh.texCoords,noAlloc:t}})}updateState({props:e,oldProps:t,changeFlags:i}){var s;const n=this.getAttributeManager();if(i.extensionsChanged&&((s=this.state.model)==null||s.destroy(),this.state.model=this._getModel(),n.invalidateAll()),e.bounds!==t.bounds){const r=this.state.mesh,a=this._createMesh();this.state.model.setVertexCount(a.vertexCount);for(const l in a)r&&r[l]!==a[l]&&n.invalidate(l);this.setState({mesh:a,...this._getCoordinateUniforms()})}else e._imageCoordinateSystem!==t._imageCoordinateSystem&&this.setState(this._getCoordinateUniforms())}getPickingInfo(e){const{image:t}=this.props,i=e.info;if(!i.color||!t)return i.bitmap=null,i;const{width:n,height:s}=t;i.index=0;const r=Mi(i.color);return i.bitmap={size:{width:n,height:s},uv:r,pixel:[Math.floor(r[0]*n),Math.floor(r[1]*s)]},i}disablePickingIndex(){this.setState({disablePicking:!0})}restorePickingColors(){this.setState({disablePicking:!1})}_updateAutoHighlight(e){super._updateAutoHighlight({...e,color:this.encodePickingColor(0)})}_createMesh(){const{bounds:e}=this.props;let t=e;return et(e)&&(t=[[e[0],e[1]],[e[0],e[3]],[e[2],e[3]],[e[2],e[1]]]),Li(t,this.context.viewport.resolution)}_getModel(){const e=this.context.device.type==="webgpu"?this.getAttributeManager().getBufferLayouts({isInstanced:!1}).filter(t=>t.name!=="indices"):this.getAttributeManager().getBufferLayouts();return new X(this.context.device,{...this.getShaders(),id:this.props.id,bufferLayout:e,topology:"triangle-list",isInstanced:!1})}draw(e){const{shaderModuleProps:t}=e,{model:i,coordinateConversion:n,bounds:s,disablePicking:r}=this.state,{image:a,desaturate:l,transparentColor:f,tintColor:d}=this.props;if(!(t.picking.isActive&&r)&&a&&i){const u={bitmapTexture:a,bounds:s,coordinateConversion:n,desaturate:l,tintColor:d.slice(0,3).map(h=>h/255),transparentColor:f.map(h=>h/255)};i.shaderInputs.setProps({bitmap:u}),i.draw(this.context.renderPass)}}_getCoordinateUniforms(){let{_imageCoordinateSystem:e}=this.props;if(e!=="default"){const{bounds:t}=this.props;if(!et(t))throw new Error("_imageCoordinateSystem only supports rectangular bounds");const i=this.context.viewport.resolution?"lnglat":"cartesian";if(e=e==="lnglat"?"lnglat":"cartesian",e==="lnglat"&&i==="cartesian")return{coordinateConversion:-1,bounds:t};if(e==="cartesian"&&i==="lnglat"){const n=Ye([t[0],t[1]]),s=Ye([t[2],t[3]]);return{coordinateConversion:1,bounds:[n[0],n[1],s[0],s[1]]}}}return{coordinateConversion:0,bounds:[0,0,0,0]}}}Dt.layerName="BitmapLayer";Dt.defaultProps=zi;function Mi(o){const[e,t,i]=o,n=(i&240)/256,s=(i&15)/16;return[(e+s)/256,(t+n)/256]}function et(o){return Number.isFinite(o[0])}const tt=`layout(std140) uniform iconUniforms {
  float sizeScale;
  vec2 iconsTextureDim;
  float sizeBasis;
  float sizeMinPixels;
  float sizeMaxPixels;
  bool billboard;
  highp int sizeUnits;
  float alphaCutoff;
} icon;
`,ki={name:"icon",vs:tt,fs:tt,uniformTypes:{sizeScale:"f32",iconsTextureDim:"vec2<f32>",sizeBasis:"f32",sizeMinPixels:"f32",sizeMaxPixels:"f32",billboard:"f32",sizeUnits:"i32",alphaCutoff:"f32"}},Di=`#version 300 es
#define SHADER_NAME icon-layer-vertex-shader
in vec2 positions;
in vec3 instancePositions;
in vec3 instancePositions64Low;
in float instanceSizes;
in float instanceAngles;
in vec4 instanceColors;
#ifdef USE_ROW_INDEXES
in float rowIndexes;
#endif
in vec4 instanceIconFrames;
in float instanceColorModes;
in vec2 instanceOffsets;
in vec2 instancePixelOffset;
out float vColorMode;
out vec4 vColor;
out vec2 vTextureCoords;
out vec2 uv;
vec2 rotate_by_angle(vec2 vertex, float angle) {
float angle_radian = angle * PI / 180.0;
float cos_angle = cos(angle_radian);
float sin_angle = sin(angle_radian);
mat2 rotationMatrix = mat2(cos_angle, -sin_angle, sin_angle, cos_angle);
return rotationMatrix * vertex;
}
void main(void) {
geometry.worldPosition = instancePositions;
geometry.uv = positions;
#ifdef USE_ROW_INDEXES
geometry.pickingColor = picking_getPickingColorFromIndex(rowIndexes);
#else
geometry.pickingColor = picking_getPickingColorFromInstanceID();
#endif
uv = positions;
vec2 iconSize = instanceIconFrames.zw;
float sizePixels = clamp(
project_size_to_pixel(instanceSizes * icon.sizeScale, icon.sizeUnits),
icon.sizeMinPixels, icon.sizeMaxPixels
);
float iconConstraint = icon.sizeBasis == 0.0 ? iconSize.x : iconSize.y;
float instanceScale = iconConstraint == 0.0 ? 0.0 : sizePixels / iconConstraint;
vec2 pixelOffset = positions / 2.0 * iconSize + instanceOffsets;
pixelOffset = rotate_by_angle(pixelOffset, instanceAngles) * instanceScale;
pixelOffset += instancePixelOffset;
pixelOffset.y *= -1.0;
if (icon.billboard)  {
gl_Position = project_position_to_clipspace(instancePositions, instancePositions64Low, vec3(0.0), geometry.position);
DECKGL_FILTER_GL_POSITION(gl_Position, geometry);
vec3 offset = vec3(pixelOffset, 0.0);
DECKGL_FILTER_SIZE(offset, geometry);
gl_Position.xy += project_pixel_size_to_clipspace(offset.xy);
} else {
vec3 offset_common = vec3(project_pixel_size(pixelOffset), 0.0);
DECKGL_FILTER_SIZE(offset_common, geometry);
gl_Position = project_position_to_clipspace(instancePositions, instancePositions64Low, offset_common, geometry.position);
DECKGL_FILTER_GL_POSITION(gl_Position, geometry);
}
vTextureCoords = mix(
instanceIconFrames.xy,
instanceIconFrames.xy + iconSize,
(positions.xy + 1.0) / 2.0
) / icon.iconsTextureDim;
vColor = instanceColors;
DECKGL_FILTER_COLOR(vColor, geometry);
vColorMode = instanceColorModes;
}
`,Fi=`#version 300 es
#define SHADER_NAME icon-layer-fragment-shader
precision highp float;
uniform sampler2D iconsTexture;
in float vColorMode;
in vec4 vColor;
in vec2 vTextureCoords;
in vec2 uv;
out vec4 fragColor;
void main(void) {
geometry.uv = uv;
vec4 texColor = texture(iconsTexture, vTextureCoords);
vec3 color = mix(texColor.rgb, vColor.rgb, vColorMode);
float a = texColor.a * layer.opacity * vColor.a;
if (a < icon.alphaCutoff) {
discard;
}
fragColor = vec4(color, a);
DECKGL_FILTER_COLOR(fragColor, geometry);
}
`,Bi=`struct IconUniforms {
  sizeScale: f32,
  iconsTextureDim: vec2<f32>,
  sizeBasis: f32,
  sizeMinPixels: f32,
  sizeMaxPixels: f32,
  billboard: i32,
  sizeUnits: i32,
  alphaCutoff: f32
};

@group(0) @binding(auto) var<uniform> icon: IconUniforms;
@group(0) @binding(auto) var iconsTexture : texture_2d<f32>;
@group(0) @binding(auto) var iconsTextureSampler : sampler;

fn rotate_by_angle(vertex: vec2<f32>, angle_deg: f32) -> vec2<f32> {
  let angle_radian = angle_deg * PI / 180.0;
  let c = cos(angle_radian);
  let s = sin(angle_radian);
  let rotation = mat2x2<f32>(vec2<f32>(c, s), vec2<f32>(-s, c));
  return rotation * vertex;
}

struct Attributes {
  @builtin(instance_index) instanceIndex : u32,
  @location(0) positions: vec2<f32>,

  @location(1) instancePositions: vec3<f32>,
  @location(2) instancePositions64Low: vec3<f32>,
  @location(3) instanceSizes: f32,
  @location(4) instanceAngles: f32,
  @location(5) instanceColors: vec4<f32>,
  @location(6) instanceIconFrames: vec4<f32>,
  @location(7) instanceColorModes: f32,
  @location(8) instanceOffsets: vec2<f32>,
  @location(9) instancePixelOffset: vec2<f32>,
  PICKING_COLOR_ATTRIBUTE
};

struct Varyings {
  @builtin(position) position: vec4<f32>,

  @location(0) vColorMode: f32,
  @location(1) vColor: vec4<f32>,
  @location(2) vTextureCoords: vec2<f32>,
  @location(3) uv: vec2<f32>,
  @location(4) pickingColor: vec3<f32>,
};

@vertex
fn vertexMain(inp: Attributes) -> Varyings {
  // write geometry fields used by filters + FS
  geometry.worldPosition = inp.instancePositions;
  geometry.uv = inp.positions;
  geometry.pickingColor = PICKING_COLOR_VALUE;

  var outp: Varyings;
  outp.uv = inp.positions;

  let iconSize = inp.instanceIconFrames.zw;

  // convert size in meters to pixels, then clamp
  let sizePixels = clamp(
    project_unit_size_to_pixel(inp.instanceSizes * icon.sizeScale, icon.sizeUnits),
    icon.sizeMinPixels, icon.sizeMaxPixels
  );

  // scale icon height to match instanceSize
  let iconConstraint = select(iconSize.y, iconSize.x, icon.sizeBasis == 0.0);
  let instanceScale = select(sizePixels / iconConstraint, 0.0, iconConstraint == 0.0);

  // scale and rotate vertex in "pixel" units; then add per-instance pixel offset
  var pixelOffset = inp.positions / 2.0 * iconSize + inp.instanceOffsets;
  pixelOffset = rotate_by_angle(pixelOffset, inp.instanceAngles) * instanceScale;
  pixelOffset = pixelOffset + inp.instancePixelOffset;
  pixelOffset.y = pixelOffset.y * -1.0;

  if (icon.billboard != 0) {
    var pos = project_position_to_clipspace(inp.instancePositions, inp.instancePositions64Low, vec3<f32>(0.0)); // TODO, &geometry.position);
    // DECKGL_FILTER_GL_POSITION(pos, geometry);

    var offset = vec3<f32>(pixelOffset, 0.0);
    // DECKGL_FILTER_SIZE(offset, geometry);
    let clipOffset = project_pixel_size_to_clipspace(offset.xy);
    pos = vec4<f32>(pos.x + clipOffset.x, pos.y + clipOffset.y, pos.z, pos.w);
    outp.position = pos;
  } else {
    var offset_common = vec3<f32>(project_pixel_size_vec2(pixelOffset), 0.0);
    // DECKGL_FILTER_SIZE(offset_common, geometry);
    var pos = project_position_to_clipspace(inp.instancePositions, inp.instancePositions64Low, offset_common); // TODO, &geometry.position);
    // DECKGL_FILTER_GL_POSITION(pos, geometry);
    outp.position = pos;
  }

  let uvMix = (inp.positions.xy + vec2<f32>(1.0, 1.0)) * 0.5;
  outp.vTextureCoords = mix(inp.instanceIconFrames.xy, inp.instanceIconFrames.xy + iconSize, uvMix) / icon.iconsTextureDim;

  outp.vColor = inp.instanceColors;
  // DECKGL_FILTER_COLOR(outp.vColor, geometry);

  outp.vColorMode = inp.instanceColorModes;
  outp.pickingColor = geometry.pickingColor;

  return outp;
}

@fragment
fn fragmentMain(inp: Varyings) -> @location(0) vec4<f32> {
  // expose to deck.gl filter hooks
  geometry.uv = inp.uv;

  let texColor = textureSample(iconsTexture, iconsTextureSampler, inp.vTextureCoords);

  // if colorMode == 0, use pixel color from the texture
  // if colorMode == 1 (or picking), use texture as transparency mask
  let rgb = mix(texColor.rgb, inp.vColor.rgb, inp.vColorMode);
  let a = texColor.a * layer.opacity * inp.vColor.a;

  if (a < icon.alphaCutoff) {
    discard;
  }

  if (picking.isActive > 0.5) {
    if (!picking_isColorValid(inp.pickingColor)) {
      discard;
    }
    return vec4<f32>(inp.pickingColor, 1.0);
  }

  var fragColor = deckgl_premultiplied_alpha(vec4<f32>(rgb, a));

  if (picking.isHighlightActive > 0.5) {
    let highlightedObjectColor = picking_normalizeColor(picking.highlightedObjectColor);
    if (picking_isColorZero(abs(inp.pickingColor - highlightedObjectColor))) {
      let highLightAlpha = picking.highlightColor.a;
      let blendedAlpha = highLightAlpha + fragColor.a * (1.0 - highLightAlpha);
      if (blendedAlpha > 0.0) {
        let highLightRatio = highLightAlpha / blendedAlpha;
        fragColor = vec4<f32>(
          mix(fragColor.rgb, picking.highlightColor.rgb, highLightRatio),
          blendedAlpha
        );
      } else {
        fragColor = vec4<f32>(fragColor.rgb, 0.0);
      }
    }
  }

  return fragColor;
}
`;function Ni(o){return Bi.replace("PICKING_COLOR_ATTRIBUTE",o?"@location(10) rowIndexes: u32,":"").replace("PICKING_COLOR_VALUE",o?"picking_getPickingColorFromIndex(inp.rowIndexes)":"picking_getPickingColorFromIndex(inp.instanceIndex)")}const ji=1024,Gi=4,it=()=>{},ot={minFilter:"linear",mipmapFilter:"linear",magFilter:"linear",addressModeU:"clamp-to-edge",addressModeV:"clamp-to-edge"},Wi={x:0,y:0,width:0,height:0};function Ui(o){return Math.pow(2,Math.ceil(Math.log2(o)))}function Vi(o,e,t,i){const n=Math.min(t/e.width,i/e.height),s=Math.floor(e.width*n),r=Math.floor(e.height*n);return n===1?{image:e,width:s,height:r}:(o.canvas.height=r,o.canvas.width=s,o.clearRect(0,0,s,r),o.drawImage(e,0,0,e.width,e.height,0,0,s,r),{image:o.canvas,width:s,height:r})}function ge(o){return o&&(o.id||o.url)}function Ft(o){const{device:e}=o;e.type==="webgl"?o.generateMipmapsWebGL():e.type==="webgpu"&&e.generateMipmapsWebGPU(o)}function Hi(o,e,t,i){const{width:n,height:s,device:r}=o,a=r.createTexture({format:"rgba8unorm",width:e,height:t,sampler:i,mipLevels:r.getMipLevelCount(e,t)}),l=r.createCommandEncoder();l.copyTextureToTexture({sourceTexture:o,destinationTexture:a,width:n,height:s});const f=l.finish();return r.submit(f),Ft(a),o.destroy(),a}function nt(o,e,t){for(let i=0;i<e.length;i++){const{icon:n,xOffset:s}=e[i],r=ge(n);o[r]={...n,x:s,y:t}}}function $i({icons:o,buffer:e,mapping:t={},xOffset:i=0,yOffset:n=0,rowHeight:s=0,canvasWidth:r}){let a=[];for(let l=0;l<o.length;l++){const f=o[l],d=ge(f);if(!t[d]){const{height:u,width:h}=f;i+h+e>r&&(nt(t,a,n),i=0,n=s+n+e,s=0,a=[]),a.push({icon:f,xOffset:i}),i=i+h+e,s=Math.max(s,u)}}return a.length>0&&nt(t,a,n),{mapping:t,rowHeight:s,xOffset:i,yOffset:n,canvasWidth:r,canvasHeight:Ui(s+n+e)}}function Zi(o,e,t){if(!o||!e)return null;t=t||{};const i={},{iterable:n,objectInfo:s}=we(o);for(const r of n){s.index++;const a=e(r,s),l=ge(a);if(!a)throw new Error("Icon is missing.");if(!a.url)throw new Error("Icon url is missing.");!i[l]&&(!t[l]||a.url!==t[l].url)&&(i[l]={...a,source:r,sourceIndex:s.index})}return i}class Ki{constructor(e,{onUpdate:t=it,onError:i=it}){this._loadOptions=null,this._texture=null,this._externalTexture=null,this._mapping={},this._samplerParameters=null,this._pendingCount=0,this._autoPacking=!1,this._xOffset=0,this._yOffset=0,this._rowHeight=0,this._buffer=Gi,this._canvasWidth=ji,this._canvasHeight=0,this._canvas=null,this.device=e,this.onUpdate=t,this.onError=i}finalize(){var e;(e=this._texture)==null||e.delete()}getTexture(){return this._texture||this._externalTexture}getIconMapping(e){const t=this._autoPacking?ge(e):e;return this._mapping[t]||Wi}setProps({loadOptions:e,autoPacking:t,iconAtlas:i,iconMapping:n,textureParameters:s}){var r;e&&(this._loadOptions=e),t!==void 0&&(this._autoPacking=t),n&&(this._mapping=n),i&&((r=this._texture)==null||r.delete(),this._texture=null,this._externalTexture=i),s&&(this._samplerParameters=s)}get isLoaded(){return this._pendingCount===0}packIcons(e,t){if(!this._autoPacking||typeof document>"u")return;const i=Object.values(Zi(e,t,this._mapping)||{});if(i.length>0){const{mapping:n,xOffset:s,yOffset:r,rowHeight:a,canvasHeight:l}=$i({icons:i,buffer:this._buffer,canvasWidth:this._canvasWidth,mapping:this._mapping,rowHeight:this._rowHeight,xOffset:this._xOffset,yOffset:this._yOffset});this._rowHeight=a,this._mapping=n,this._xOffset=s,this._yOffset=r,this._canvasHeight=l,this._texture||(this._texture=this.device.createTexture({format:"rgba8unorm",data:null,width:this._canvasWidth,height:this._canvasHeight,sampler:this._samplerParameters||ot,mipLevels:this.device.getMipLevelCount(this._canvasWidth,this._canvasHeight)})),this._texture.height!==this._canvasHeight&&(this._texture=Hi(this._texture,this._canvasWidth,this._canvasHeight,this._samplerParameters||ot)),this.onUpdate(!0),this._canvas=this._canvas||document.createElement("canvas"),this._loadIcons(i)}}_loadIcons(e){const t=this._canvas.getContext("2d",{willReadFrequently:!0});for(const i of e)this._pendingCount++,ci(i.url,this._loadOptions).then(n=>{var L;const s=ge(i),r=this._mapping[s],{x:a,y:l,width:f,height:d}=r,{image:u,width:h,height:v}=Vi(t,n,f,d),_=a+(f-h)/2,C=l+(d-v)/2;(L=this._texture)==null||L.copyExternalImage({image:u,x:_,y:C,width:h,height:v}),r.x=_,r.y=C,r.width=h,r.height=v,this._texture&&Ft(this._texture),this.onUpdate(h!==f||v!==d)}).catch(n=>{this.onError({url:i.url,source:i.source,sourceIndex:i.sourceIndex,loadOptions:this._loadOptions,error:n})}).finally(()=>{this._pendingCount--})}}const Bt=[0,0,0,255],Ji={iconAtlas:{type:"image",value:null,async:!0},iconMapping:{type:"object",value:{},async:!0},sizeScale:{type:"number",value:1,min:0},billboard:!0,sizeUnits:"pixels",sizeBasis:"height",sizeMinPixels:{type:"number",min:0,value:0},sizeMaxPixels:{type:"number",min:0,value:Number.MAX_SAFE_INTEGER},alphaCutoff:{type:"number",value:.05,min:0,max:1},getPosition:{type:"accessor",value:o=>o.position},getIcon:{type:"accessor",value:o=>o.icon},getColor:{type:"accessor",value:Bt},getSize:{type:"accessor",value:1},getAngle:{type:"accessor",value:0},getPixelOffset:{type:"accessor",value:[0,0]},onIconError:{type:"function",value:null,optional:!0},textureParameters:{type:"object",ignore:!0,value:null}};class Ie extends Q{getShaders(){var t,i;const e=!!((i=(t=this.props.data)==null?void 0:t.attributes)!=null&&i.rowIndexes);return super.getShaders({vs:Di,fs:Fi,source:Ni(e),defines:e?{USE_ROW_INDEXES:!0}:{},modules:[ee,te,ie,ki]})}initializeState(){var t,i;this.state={iconManager:new Ki(this.context.device,{onUpdate:this._onUpdate.bind(this),onError:this._onError.bind(this)})},this.getAttributeManager().addInstanced({instancePositions:{size:3,type:"float64",fp64:this.use64bitPositions(),transition:!0,accessor:"getPosition"},instanceSizes:{size:1,transition:!0,bufferGroup:"icon-instance-data",accessor:"getSize",defaultValue:1},instanceIconDefs:{size:7,bufferGroup:"icon-instance-data",accessor:"getIcon",transform:this.getInstanceIconDef,shaderAttributes:{instanceOffsets:{size:2,elementOffset:0},instanceIconFrames:{size:4,elementOffset:2},instanceColorModes:{size:1,elementOffset:6}}},instanceColors:{size:this.props.colorFormat.length,type:"unorm8",transition:!0,bufferGroup:"icon-instance-data",accessor:"getColor",defaultValue:Bt},instanceAngles:{size:1,transition:!0,bufferGroup:"icon-instance-data",accessor:"getAngle"},instancePixelOffset:{size:2,transition:!0,bufferGroup:"icon-instance-data",accessor:"getPixelOffset"},...(i=(t=this.props.data)==null?void 0:t.attributes)!=null&&i.rowIndexes?{rowIndexes:{size:1,type:"uint32",noAlloc:!0}}:{}})}updateState(e){var v;super.updateState(e);const{props:t,oldProps:i,changeFlags:n}=e,s=this.getAttributeManager(),{iconAtlas:r,iconMapping:a,data:l,getIcon:f,textureParameters:d}=t,{iconManager:u}=this.state;if(typeof r=="string")return;const h=r||this.internalState.isAsyncPropLoading("iconAtlas");u.setProps({loadOptions:t.loadOptions,autoPacking:!h,iconAtlas:r,iconMapping:h?a:null,textureParameters:d}),h?i.iconMapping!==t.iconMapping&&s.invalidate("getIcon"):(n.dataChanged||n.updateTriggersChanged&&(n.updateTriggersChanged.all||n.updateTriggersChanged.getIcon))&&u.packIcons(l,f),n.extensionsChanged&&((v=this.state.model)==null||v.destroy(),this.state.model=this._getModel(),s.invalidateAll())}get isLoaded(){return super.isLoaded&&this.state.iconManager.isLoaded}finalizeState(e){super.finalizeState(e),this.state.iconManager.finalize()}draw({uniforms:e}){this._drawModel(this.state.model)}_drawModel(e){const{sizeScale:t,sizeBasis:i,sizeMinPixels:n,sizeMaxPixels:s,sizeUnits:r,billboard:a,alphaCutoff:l}=this.props,{iconManager:f}=this.state,d=f.getTexture();if(d){const u={iconsTexture:d,iconsTextureDim:[d.width,d.height],sizeUnits:ne[r],sizeScale:t,sizeBasis:i==="height"?1:0,sizeMinPixels:n,sizeMaxPixels:s,billboard:a,alphaCutoff:l};e.shaderInputs.setProps({icon:u}),e.draw(this.context.renderPass)}}_getModel(e=this.props.id){const t=[-1,-1,1,-1,-1,1,1,1];return new X(this.context.device,{...this.getShaders(),id:e,bufferLayout:this.getAttributeManager().getBufferLayouts(),geometry:new oe({topology:"triangle-strip",attributes:{positions:{size:2,value:new Float32Array(t)}}}),isInstanced:!0})}_onUpdate(e){var t;e?((t=this.getAttributeManager())==null||t.invalidate("getIcon"),this.setNeedsUpdate()):this.setNeedsRedraw()}_onError(e){var i;const t=(i=this.getCurrentLayer())==null?void 0:i.props.onIconError;t?t(e):J.error(e.error.message)()}getInstanceIconDef(e){const{x:t,y:i,width:n,height:s,mask:r,anchorX:a=n/2,anchorY:l=s/2}=this.state.iconManager.getIconMapping(e);return[n/2-a,s/2-l,t,i,n,s,r?1:0]}}Ie.defaultProps=Ji;Ie.layerName="IconLayer";const st=`layout(std140) uniform pointCloudUniforms {
  float radiusPixels;
  highp int sizeUnits;
} pointCloud;
`,Yi={name:"pointCloud",source:"",vs:st,fs:st,uniformTypes:{radiusPixels:"f32",sizeUnits:"i32"}},Xi=`#version 300 es
#define SHADER_NAME point-cloud-layer-vertex-shader
in vec3 positions;
in vec3 instanceNormals;
in vec4 instanceColors;
in vec3 instancePositions;
in vec3 instancePositions64Low;
out vec4 vColor;
out vec2 unitPosition;
void main(void) {
geometry.worldPosition = instancePositions;
geometry.normal = project_normal(instanceNormals);
unitPosition = positions.xy;
geometry.uv = unitPosition;
geometry.pickingColor = picking_getPickingColorFromInstanceID();
vec3 offset = vec3(positions.xy * project_size_to_pixel(pointCloud.radiusPixels, pointCloud.sizeUnits), 0.0);
DECKGL_FILTER_SIZE(offset, geometry);
#ifdef ANTIALIASING
float triangleRadiusPixels = length(offset.xy);
if (triangleRadiusPixels > 0.0) {
float coverageScale = 1.0 + 1.0 / project.devicePixelRatio / triangleRadiusPixels;
offset.xy *= coverageScale;
unitPosition *= coverageScale;
geometry.uv = unitPosition;
}
#endif
gl_Position = project_position_to_clipspace(instancePositions, instancePositions64Low, vec3(0.), geometry.position);
DECKGL_FILTER_GL_POSITION(gl_Position, geometry);
gl_Position.xy += project_pixel_size_to_clipspace(offset.xy);
vec3 lightColor = lighting_getLightColor(instanceColors.rgb, project.cameraPosition, geometry.position.xyz, geometry.normal);
vColor = vec4(lightColor, instanceColors.a * layer.opacity);
DECKGL_FILTER_COLOR(vColor, geometry);
}
`,qi=`#version 300 es
#define SHADER_NAME point-cloud-layer-fragment-shader
precision highp float;
in vec4 vColor;
in vec2 unitPosition;
out vec4 fragColor;
void main(void) {
geometry.uv = unitPosition.xy;
float distToCenter = length(unitPosition);
#ifdef ANTIALIASING
float edgePixels = (1.0 - distToCenter) / max(fwidth(distToCenter), 1e-6);
if (edgePixels <= -SMOOTH_EDGE_RADIUS) {
#else
if (distToCenter > 1.0) {
#endif
discard;
}
fragColor = vColor;
#ifdef ANTIALIASING
fragColor.a *= smoothedge(0.0, edgePixels);
#endif
DECKGL_FILTER_COLOR(fragColor, geometry);
}
`,Qi=`struct PointCloudUniforms {
  radiusPixels: f32,
  sizeUnits: i32,
};

@group(0) @binding(0)
var<uniform> pointCloudUniforms: PointCloudUniforms;

struct Attributes {
  @builtin(instance_index) instanceIndex : u32,
  @builtin(vertex_index) vertexIndex : u32,
  @location(0) positions: vec3<f32>,
  @location(1) instancePositions: vec3<f32>,
  @location(2) instancePositions64Low: vec3<f32>,
  @location(3) instanceNormals: vec3<f32>,
  @location(4) instanceColors: vec4<f32>
};

struct Varyings {
  @builtin(position) position: vec4<f32>,
  @location(0) vColor: vec4<f32>,
  @location(1) unitPosition: vec2<f32>,
  @location(2) pickingColor: vec3<f32>,
};

@vertex
fn vertexMain(attributes: Attributes) -> Varyings {
  var varyings: Varyings;

  geometry.worldPosition = attributes.instancePositions;

  let centerResult = project_position_to_clipspace_and_commonspace(
    attributes.instancePositions,
    attributes.instancePositions64Low,
    vec3<f32>(0.0)
  );
  geometry.position = centerResult.commonPosition;
  geometry.normal = project_normal(attributes.instanceNormals);

  // Position on the enclosing triangle. Its edges are tangent to the unit circle.
  varyings.unitPosition = attributes.positions.xy;
  geometry.uv = varyings.unitPosition;
  geometry.pickingColor = picking_getPickingColorFromIndex(attributes.instanceIndex);

  // Find the center of the point and add the current vertex
#ifdef ANTIALIASING
  var offset = vec3<f32>(
#else
  let offset = vec3<f32>(
#endif
    attributes.positions.xy *
      project_unit_size_to_pixel(pointCloudUniforms.radiusPixels, pointCloudUniforms.sizeUnits),
    0.0
  );
  // DECKGL_FILTER_SIZE(offset, geometry);
#ifdef ANTIALIASING
  let triangleRadiusPixels = length(offset.xy);
  if (triangleRadiusPixels > 0.0) {
    // The triangle's inradius is half its vertex radius. Scaling its vertex radius by one device
    // pixel therefore adds half a device pixel around all three tangent points.
    let coverageScale = 1.0 + 1.0 / project.devicePixelRatio / triangleRadiusPixels;
    offset *= coverageScale;
    varyings.unitPosition *= coverageScale;
    geometry.uv = varyings.unitPosition;
  }
#endif

  varyings.position = centerResult.clipPosition;
  // DECKGL_FILTER_GL_POSITION(gl_Position, geometry);
  let clipPixels = project_pixel_size_to_clipspace(offset.xy);
  varyings.position.x += clipPixels.x;
  varyings.position.y += clipPixels.y;

  // Apply lighting
  let lightColor = lighting_getLightColor2(attributes.instanceColors.rgb, project.cameraPosition, geometry.position.xyz, geometry.normal);

  // Apply opacity to instance color, or return instance picking color
  varyings.vColor = vec4(lightColor, attributes.instanceColors.a * layer.opacity);
  // DECKGL_FILTER_COLOR(vColor, geometry);
  varyings.pickingColor = geometry.pickingColor;

  return varyings;
}

@fragment
fn fragmentMain(varyings: Varyings) -> @location(0) vec4<f32> {
  // var geometry: Geometry;
  // geometry.uv = unitPosition.xy;

  let distToCenter = length(varyings.unitPosition);
#ifdef ANTIALIASING
  let edgePixels = (1.0 - distToCenter) / max(fwidth(distToCenter), 1e-6);
  if (edgePixels <= -SMOOTH_EDGE_RADIUS) {
#else
  if (distToCenter > 1.0) {
#endif
    discard;
  }

  var fragColor: vec4<f32>;

  fragColor = varyings.vColor;

#ifdef ANTIALIASING
  fragColor.a *= smoothedge(0.0, edgePixels);
#endif

  if (picking.isActive > 0.5) {
    if (!picking_isColorValid(varyings.pickingColor)) {
      discard;
    }
    return vec4<f32>(varyings.pickingColor, 1.0);
  }

  if (picking.isHighlightActive > 0.5) {
    let highlightedObjectColor = picking_normalizeColor(picking.highlightedObjectColor);
    if (picking_isColorZero(abs(varyings.pickingColor - highlightedObjectColor))) {
      let highLightAlpha = picking.highlightColor.a;
      let blendedAlpha = highLightAlpha + fragColor.a * (1.0 - highLightAlpha);
      if (blendedAlpha > 0.0) {
        let highLightRatio = highLightAlpha / blendedAlpha;
        fragColor = vec4<f32>(
          mix(fragColor.rgb, picking.highlightColor.rgb, highLightRatio),
          blendedAlpha
        );
      } else {
        fragColor = vec4<f32>(fragColor.rgb, 0.0);
      }
    }
  }

  // Apply premultiplied alpha as required by transparent canvas
  fragColor = deckgl_premultiplied_alpha(fragColor);

  return fragColor;
}
`,Nt=[0,0,0,255],jt=[0,0,1],eo={sizeUnits:"pixels",pointSize:{type:"number",min:0,value:10},antialiasing:!1,getPosition:{type:"accessor",value:o=>o.position},getNormal:{type:"accessor",value:jt},getColor:{type:"accessor",value:Nt},material:!0,radiusPixels:{deprecatedFor:"pointSize"}};function to(o){const{header:e,attributes:t}=o;if(!(!e||!t)&&(o.length=e.vertexCount,t.POSITION&&(t.instancePositions=t.POSITION),t.NORMAL&&(t.instanceNormals=t.NORMAL),t.COLOR_0)){const{size:i,value:n}=t.COLOR_0;t.instanceColors={size:i,type:"unorm8",value:n}}}class Gt extends Q{getShaders(){const{antialiasing:e}=this.props;return super.getShaders({vs:Xi,fs:qi,source:Qi,defines:e?{ANTIALIASING:1}:{},modules:[ee,te,Rt,ie,Yi]})}initializeState(){this.getAttributeManager().addInstanced({instancePositions:{size:3,type:"float64",fp64:this.use64bitPositions(),transition:!0,accessor:"getPosition"},instanceNormals:{size:3,transition:!0,accessor:"getNormal",defaultValue:jt},instanceColors:{size:this.props.colorFormat.length,type:"unorm8",transition:!0,accessor:"getColor",defaultValue:Nt}})}updateState(e){var s;const{changeFlags:t,props:i,oldProps:n}=e;super.updateState(e),(t.extensionsChanged||i.antialiasing!==n.antialiasing)&&((s=this.state.model)==null||s.destroy(),this.state.model=this._getModel(),this.getAttributeManager().invalidateAll()),t.dataChanged&&to(i.data)}draw({uniforms:e}){const{pointSize:t,sizeUnits:i}=this.props,n=this.state.model,s={sizeUnits:ne[i],radiusPixels:t};n.shaderInputs.setProps({pointCloud:s}),n.draw(this.context.renderPass)}_getModel(){const e=[];for(let t=0;t<3;t++){const i=t/3*Math.PI*2;e.push(Math.cos(i)*2,Math.sin(i)*2,0)}return new X(this.context.device,{...this.getShaders(),id:this.props.id,bufferLayout:this.getAttributeManager().getBufferLayouts(),geometry:new oe({topology:"triangle-list",attributes:{positions:new Float32Array(e)}}),isInstanced:!0})}}Gt.layerName="PointCloudLayer";Gt.defaultProps=eo;const rt=`layout(std140) uniform scatterplotUniforms {
  float radiusScale;
  float radiusMinPixels;
  float radiusMaxPixels;
  float lineWidthScale;
  float lineWidthMinPixels;
  float lineWidthMaxPixels;
  float stroked;
  float filled;
  bool antialiasing;
  bool billboard;
  highp int radiusUnits;
  highp int lineWidthUnits;
} scatterplot;
`,io={name:"scatterplot",vs:rt,fs:rt,source:"",uniformTypes:{radiusScale:"f32",radiusMinPixels:"f32",radiusMaxPixels:"f32",lineWidthScale:"f32",lineWidthMinPixels:"f32",lineWidthMaxPixels:"f32",stroked:"f32",filled:"f32",antialiasing:"f32",billboard:"f32",radiusUnits:"i32",lineWidthUnits:"i32"}},oo=`#version 300 es
#define SHADER_NAME scatterplot-layer-vertex-shader
in vec3 positions;
in vec3 instancePositions;
in vec3 instancePositions64Low;
in float instanceRadius;
in float instanceLineWidths;
in vec4 instanceFillColors;
in vec4 instanceLineColors;
#ifdef USE_ROW_INDEXES
in float rowIndexes;
#endif
in vec2 instancePixelOffset;
out vec4 vFillColor;
out vec4 vLineColor;
out vec2 unitPosition;
out float innerUnitRadius;
out float outerRadiusPixels;
void main(void) {
geometry.worldPosition = instancePositions;
outerRadiusPixels = clamp(
project_size_to_pixel(scatterplot.radiusScale * instanceRadius, scatterplot.radiusUnits),
scatterplot.radiusMinPixels, scatterplot.radiusMaxPixels
);
float lineWidthPixels = clamp(
project_size_to_pixel(scatterplot.lineWidthScale * instanceLineWidths, scatterplot.lineWidthUnits),
scatterplot.lineWidthMinPixels, scatterplot.lineWidthMaxPixels
);
outerRadiusPixels += scatterplot.stroked * lineWidthPixels / 2.0;
float edgePadding = scatterplot.antialiasing ? (outerRadiusPixels + SMOOTH_EDGE_RADIUS) / outerRadiusPixels : 1.0;
unitPosition = edgePadding * positions.xy;
geometry.uv = unitPosition;
#ifdef USE_ROW_INDEXES
geometry.pickingColor = picking_getPickingColorFromIndex(rowIndexes);
#else
geometry.pickingColor = picking_getPickingColorFromInstanceID();
#endif
innerUnitRadius = 1.0 - scatterplot.stroked * lineWidthPixels / outerRadiusPixels;
if (scatterplot.billboard) {
gl_Position = project_position_to_clipspace(instancePositions, instancePositions64Low, vec3(0.0), geometry.position);
DECKGL_FILTER_GL_POSITION(gl_Position, geometry);
vec3 offset = edgePadding * positions * outerRadiusPixels;
offset.xy += instancePixelOffset;
DECKGL_FILTER_SIZE(offset, geometry);
gl_Position.xy += project_pixel_size_to_clipspace(offset.xy);
} else {
vec3 offset = edgePadding * positions * project_pixel_size(outerRadiusPixels);
offset.xy += project_pixel_size(instancePixelOffset);
DECKGL_FILTER_SIZE(offset, geometry);
gl_Position = project_position_to_clipspace(instancePositions, instancePositions64Low, offset, geometry.position);
DECKGL_FILTER_GL_POSITION(gl_Position, geometry);
}
vFillColor = vec4(instanceFillColors.rgb, instanceFillColors.a * layer.opacity);
DECKGL_FILTER_COLOR(vFillColor, geometry);
vLineColor = vec4(instanceLineColors.rgb, instanceLineColors.a * layer.opacity);
DECKGL_FILTER_COLOR(vLineColor, geometry);
}
`,no=`#version 300 es
#define SHADER_NAME scatterplot-layer-fragment-shader
precision highp float;
in vec4 vFillColor;
in vec4 vLineColor;
in vec2 unitPosition;
in float innerUnitRadius;
in float outerRadiusPixels;
out vec4 fragColor;
void main(void) {
geometry.uv = unitPosition;
float distToCenter = length(unitPosition) * outerRadiusPixels;
float inCircle = scatterplot.antialiasing ?
smoothedge(distToCenter, outerRadiusPixels) :
step(distToCenter, outerRadiusPixels);
if (inCircle == 0.0) {
discard;
}
if (scatterplot.stroked > 0.5) {
float isLine = scatterplot.antialiasing ?
smoothedge(innerUnitRadius * outerRadiusPixels, distToCenter) :
step(innerUnitRadius * outerRadiusPixels, distToCenter);
if (scatterplot.filled > 0.5) {
fragColor = mix(vFillColor, vLineColor, isLine);
} else {
if (isLine == 0.0) {
discard;
}
fragColor = vec4(vLineColor.rgb, vLineColor.a * isLine);
}
} else if (scatterplot.filled < 0.5) {
discard;
} else {
fragColor = vFillColor;
}
fragColor.a *= inCircle;
DECKGL_FILTER_COLOR(fragColor, geometry);
}
`,so=`// Main shaders

struct ScatterplotUniforms {
  radiusScale: f32,
  radiusMinPixels: f32,
  radiusMaxPixels: f32,
  lineWidthScale: f32,
  lineWidthMinPixels: f32,
  lineWidthMaxPixels: f32,
  stroked: f32,
  filled: i32,
  antialiasing: i32,
  billboard: i32,
  radiusUnits: i32,
  lineWidthUnits: i32,
};

@group(0) @binding(0) var<uniform> scatterplot: ScatterplotUniforms;

struct Attributes {
  @builtin(instance_index) instanceIndex : u32,
  @builtin(vertex_index) vertexIndex : u32,
  @location(0) positions: vec3<f32>,
  @location(1) instancePositions: vec3<f32>,
  @location(2) instancePositions64Low: vec3<f32>,
  @location(3) instanceRadius: f32,
  @location(4) instanceLineWidths: f32,
  @location(5) instanceFillColors: vec4<f32>,
  @location(6) instanceLineColors: vec4<f32>,
  @location(7) instancePixelOffset: vec2<f32>,
  PICKING_COLOR_ATTRIBUTE
};

struct Varyings {
  @builtin(position) position: vec4<f32>,
  @location(0) vFillColor: vec4<f32>,
  @location(1) vLineColor: vec4<f32>,
  @location(2) unitPosition: vec2<f32>,
  @location(3) innerUnitRadius: f32,
  @location(4) outerRadiusPixels: f32,
  @location(5) pickingColor: vec3<f32>,
  @location(6) clipCoordinates: vec2<f32>,
};

@vertex
fn vertexMain(attributes: Attributes) -> Varyings {
  var varyings: Varyings;

  // Draw an inline geometry constant array clip space triangle to verify that rendering works.
  // var positions = array<vec2<f32>, 3>(vec2(0.0, 0.5), vec2(-0.5, -0.5), vec2(0.5, -0.5));
  // if (attributes.instanceIndex == 0) {
  //   varyings.position = vec4<f32>(positions[attributes.vertexIndex], 0.0, 1.0);
  //   return varyings;
  // }

  geometry.worldPosition = attributes.instancePositions;

  // Multiply out radius and clamp to limits
  varyings.outerRadiusPixels = clamp(
    project_unit_size_to_pixel(scatterplot.radiusScale * attributes.instanceRadius, scatterplot.radiusUnits),
    scatterplot.radiusMinPixels, scatterplot.radiusMaxPixels
  );

  // Multiply out line width and clamp to limits
  let lineWidthPixels = clamp(
    project_unit_size_to_pixel(scatterplot.lineWidthScale * attributes.instanceLineWidths, scatterplot.lineWidthUnits),
    scatterplot.lineWidthMinPixels, scatterplot.lineWidthMaxPixels
  );

  // outer radius needs to offset by half stroke width
  varyings.outerRadiusPixels += scatterplot.stroked * lineWidthPixels / 2.0;
  // Expand geometry to accommodate edge smoothing
  // WGSL selects the second value when the condition is true, so keep the antialiased path second.
  let edgePadding = select(
    1.0,
    (varyings.outerRadiusPixels + SMOOTH_EDGE_RADIUS) / varyings.outerRadiusPixels,
    scatterplot.antialiasing != 0
  );

  // position on the containing square in [-1, 1] space
  varyings.unitPosition = edgePadding * attributes.positions.xy;
  geometry.uv = varyings.unitPosition;
  geometry.pickingColor = PICKING_COLOR_VALUE;

  varyings.innerUnitRadius = 1.0 - scatterplot.stroked * lineWidthPixels / varyings.outerRadiusPixels;

  if (scatterplot.billboard != 0) {
    let projectedPosition = project_position_to_clipspace_and_commonspace(
      attributes.instancePositions,
      attributes.instancePositions64Low,
      vec3<f32>(0.0)
    );
    geometry.position = projectedPosition.commonPosition;
    varyings.position = projectedPosition.clipPosition;
    // DECKGL_FILTER_GL_POSITION(varyings.position, geometry);
    var offset = edgePadding * attributes.positions * varyings.outerRadiusPixels;
    offset = vec3<f32>(offset.xy + attributes.instancePixelOffset, offset.z);
    // DECKGL_FILTER_SIZE(offset, geometry);
    let clipPixels = project_pixel_size_to_clipspace(offset.xy);
    varyings.position = vec4<f32>(varyings.position.x + clipPixels.x, varyings.position.y + clipPixels.y, varyings.position.z, varyings.position.w);
    geometry.position = vec4<f32>(
      geometry.position.xy + project_pixel_size_vec2(offset.xy),
      geometry.position.zw
    );
  } else {
    var offset = edgePadding * attributes.positions * project_pixel_size_float(varyings.outerRadiusPixels);
    offset = vec3<f32>(offset.xy + project_pixel_size_vec2(attributes.instancePixelOffset), offset.z);
    // DECKGL_FILTER_SIZE(offset, geometry);
    let projectedPosition = project_position_to_clipspace_and_commonspace(
      attributes.instancePositions,
      attributes.instancePositions64Low,
      offset
    );
    geometry.position = projectedPosition.commonPosition;
    varyings.position = projectedPosition.clipPosition;
    // DECKGL_FILTER_GL_POSITION(varyings.position, geometry);
  }

  varyings.clipCoordinates = geometry.position.xy;
  clip_filterPosition(&varyings.position, geometry.worldPosition.xy);

  // Apply opacity to instance color, or return instance picking color
  varyings.vFillColor = vec4<f32>(attributes.instanceFillColors.rgb, attributes.instanceFillColors.a * layer.opacity);
  // DECKGL_FILTER_COLOR(varyings.vFillColor, geometry);
  varyings.vLineColor = vec4<f32>(attributes.instanceLineColors.rgb, attributes.instanceLineColors.a * layer.opacity);
  // DECKGL_FILTER_COLOR(varyings.vLineColor, geometry);
  varyings.pickingColor = geometry.pickingColor;

  return varyings;
}

@fragment
fn fragmentMain(varyings: Varyings) -> @location(0) vec4<f32> {
  // var geometry: Geometry;
  // geometry.uv = unitPosition;

  let distToCenter = length(varyings.unitPosition) * varyings.outerRadiusPixels;
  let inCircle = select(
    step(distToCenter, varyings.outerRadiusPixels),
    smoothedge(distToCenter, varyings.outerRadiusPixels),
    scatterplot.antialiasing != 0
  );

  if (inCircle == 0.0) {
    discard;
  }

  var fragColor: vec4<f32>;

  if (scatterplot.stroked != 0) {
    let isLine = select(
      step(varyings.innerUnitRadius * varyings.outerRadiusPixels, distToCenter),
      smoothedge(varyings.innerUnitRadius * varyings.outerRadiusPixels, distToCenter),
      scatterplot.antialiasing != 0
    );

    if (scatterplot.filled != 0) {
      fragColor = mix(varyings.vFillColor, varyings.vLineColor, isLine);
    } else {
      if (isLine == 0.0) {
        discard;
      }
      fragColor = vec4<f32>(varyings.vLineColor.rgb, varyings.vLineColor.a * isLine);
    }
  } else if (scatterplot.filled == 0) {
    discard;
  } else {
    fragColor = varyings.vFillColor;
  }

  fragColor.a *= inCircle;

  clip_filterColor(varyings.clipCoordinates);

  if (picking.isActive > 0.5) {
    if (!picking_isColorValid(varyings.pickingColor)) {
      discard;
    }
    return vec4<f32>(varyings.pickingColor, 1.0);
  }

  if (picking.isHighlightActive > 0.5) {
    let highlightedObjectColor = picking_normalizeColor(picking.highlightedObjectColor);
    if (picking_isColorZero(abs(varyings.pickingColor - highlightedObjectColor))) {
      let highLightAlpha = picking.highlightColor.a;
      let blendedAlpha = highLightAlpha + fragColor.a * (1.0 - highLightAlpha);
      if (blendedAlpha > 0.0) {
        let highLightRatio = highLightAlpha / blendedAlpha;
        fragColor = vec4<f32>(
          mix(fragColor.rgb, picking.highlightColor.rgb, highLightRatio),
          blendedAlpha
        );
      } else {
        fragColor = vec4<f32>(fragColor.rgb, 0.0);
      }
    }
  }

  // Apply premultiplied alpha as required by transparent canvas
  fragColor = deckgl_premultiplied_alpha(fragColor);

  return fragColor;
  // return vec4<f32>(0, 0, 1, 1);
}
`;function ro(o){return so.replace("PICKING_COLOR_ATTRIBUTE",o?"@location(8) rowIndexes: u32,":"").replace("PICKING_COLOR_VALUE",o?"picking_getPickingColorFromIndex(attributes.rowIndexes)":"picking_getPickingColorFromIndex(attributes.instanceIndex)")}const Fe=0,Wt=1,ao=`struct ClipUniforms {
  enabled: i32,
  mode: i32,
  bounds: vec4<f32>,
};

@group(2) @binding(auto) var<uniform> clipUniforms: ClipUniforms;

fn clip_isInBounds(coordinates: vec2<f32>) -> bool {
  return coordinates.x >= clipUniforms.bounds.x &&
    coordinates.y >= clipUniforms.bounds.y &&
    coordinates.x < clipUniforms.bounds.z &&
    coordinates.y < clipUniforms.bounds.w;
}

fn clip_filterPosition(position: ptr<function, vec4<f32>>, instanceCoordinates: vec2<f32>) {
  if (
    clipUniforms.enabled != 0 &&
    clipUniforms.mode == ${Wt} &&
    !clip_isInBounds(instanceCoordinates)
  ) {
    *position = vec4<f32>(2.0, 2.0, 2.0, 1.0);
  }
}

fn clip_filterColor(geometryCoordinates: vec2<f32>) {
  if (
    clipUniforms.enabled != 0 &&
    clipUniforms.mode == ${Fe} &&
    !clip_isInBounds(geometryCoordinates)
  ) {
    discard;
  }
}
`,We={name:"clip",source:ao,props:{},uniforms:{},bindingLayout:[{name:"clip",group:2}],uniformTypes:{enabled:"i32",mode:"i32",bounds:"vec4<f32>"},defaultUniforms:{enabled:0,mode:Fe,bounds:[0,0,1,1]},getUniforms(o={}){const e={};return o.enabled!==void 0&&(e.enabled=o.enabled?1:0),o.mode!==void 0&&(e.mode=o.mode==="instance"?Wt:Fe),o.bounds!==void 0&&(e.bounds=o.bounds),e}},at=[0,0,0,255],lo={radiusUnits:"meters",radiusScale:{type:"number",min:0,value:1},radiusMinPixels:{type:"number",min:0,value:0},radiusMaxPixels:{type:"number",min:0,value:Number.MAX_SAFE_INTEGER},lineWidthUnits:"meters",lineWidthScale:{type:"number",min:0,value:1},lineWidthMinPixels:{type:"number",min:0,value:0},lineWidthMaxPixels:{type:"number",min:0,value:Number.MAX_SAFE_INTEGER},stroked:!1,filled:!0,billboard:!1,antialiasing:!0,getPosition:{type:"accessor",value:o=>o.position},getRadius:{type:"accessor",value:1},getFillColor:{type:"accessor",value:at},getLineColor:{type:"accessor",value:at},getLineWidth:{type:"accessor",value:1},getPixelOffset:{type:"accessor",value:[0,0]},strokeWidth:{deprecatedFor:"getLineWidth"},outline:{deprecatedFor:"stroked"},getColor:{deprecatedFor:["getFillColor","getLineColor"]}};class Ue extends Q{getShaders(){var t,i;const e=!!((i=(t=this.props.data)==null?void 0:t.attributes)!=null&&i.rowIndexes);return super.getShaders({vs:oo,fs:no,source:ro(e),defines:e?{USE_ROW_INDEXES:!0}:{},modules:[ee,te,ie,io,...this.context.device.type==="webgpu"?[We]:[]]})}initializeState(){var t,i;const e=(i=(t=this.props.data)==null?void 0:t.attributes)!=null&&i.rowIndexes?{rowIndexes:{size:1,type:"uint32",noAlloc:!0}}:{};this.getAttributeManager().addInstanced({instancePositions:{size:3,type:"float64",fp64:this.use64bitPositions(),transition:!0,accessor:"getPosition"},instanceRadius:{size:1,transition:!0,accessor:"getRadius",defaultValue:1,bufferGroup:"scatterplot-instance-data"},instanceFillColors:{size:this.props.colorFormat.length,transition:!0,type:"unorm8",accessor:"getFillColor",defaultValue:[0,0,0,255],bufferGroup:"scatterplot-instance-data"},instanceLineColors:{size:this.props.colorFormat.length,transition:!0,type:"unorm8",accessor:"getLineColor",defaultValue:[0,0,0,255],bufferGroup:"scatterplot-instance-data"},instanceLineWidths:{size:1,transition:!0,accessor:"getLineWidth",defaultValue:1,bufferGroup:"scatterplot-instance-data"},instancePixelOffset:{size:2,transition:!0,accessor:"getPixelOffset",bufferGroup:"scatterplot-instance-data"},...e})}updateState(e){var t;super.updateState(e),e.changeFlags.extensionsChanged&&((t=this.state.model)==null||t.destroy(),this.state.model=this._getModel(),this.getAttributeManager().invalidateAll())}draw({uniforms:e}){const{radiusUnits:t,radiusScale:i,radiusMinPixels:n,radiusMaxPixels:s,stroked:r,filled:a,billboard:l,antialiasing:f,lineWidthUnits:d,lineWidthScale:u,lineWidthMinPixels:h,lineWidthMaxPixels:v}=this.props,_={stroked:r,filled:a,billboard:l,antialiasing:f,radiusUnits:ne[t],radiusScale:i,radiusMinPixels:n,radiusMaxPixels:s,lineWidthUnits:ne[d],lineWidthScale:u,lineWidthMinPixels:h,lineWidthMaxPixels:v},C=this.state.model;C.shaderInputs.setProps({scatterplot:_}),C.draw(this.context.renderPass)}_getModel(){const e=[-1,-1,0,1,-1,0,-1,1,0,1,1,0];return new X(this.context.device,{...this.getShaders(),id:this.props.id,bufferLayout:this.getAttributeManager().getBufferLayouts(),geometry:new oe({topology:"triangle-strip",attributes:{positions:{size:3,value:new Float32Array(e)}}}),isInstanced:!0})}}Ue.defaultProps=lo;Ue.layerName="ScatterplotLayer";function K(o,e){const t=e.length,i=o.length;if(i>0){let n=!0;for(let s=0;s<t;s++)if(o[i-t+s]!==e[s]){n=!1;break}if(n)return!1}for(let n=0;n<t;n++)o[i+n]=e[n];return!0}function Be(o,e){const t=e.length;for(let i=0;i<t;i++)o[i]=e[i]}function ue(o,e,t,i,n=[]){const s=i+e*t;for(let r=0;r<t;r++)n[r]=o[s+r];return n}function Ne(o,e,t,i,n=[]){let s,r;if(t&8)s=(i[3]-o[1])/(e[1]-o[1]),r=3;else if(t&4)s=(i[1]-o[1])/(e[1]-o[1]),r=1;else if(t&2)s=(i[2]-o[0])/(e[0]-o[0]),r=2;else if(t&1)s=(i[0]-o[0])/(e[0]-o[0]),r=0;else return null;for(let a=0;a<o.length;a++)n[a]=(r&1)===a?i[r]:s*(e[a]-o[a])+o[a];return n}function Pe(o,e){let t=0;return o[0]<e[0]?t|=1:o[0]>e[2]&&(t|=2),o[1]<e[1]?t|=4:o[1]>e[3]&&(t|=8),t}function Ut(o,e){const{size:t=2,broken:i=!1,gridResolution:n=10,gridOffset:s=[0,0],startIndex:r=0,endIndex:a=o.length}=e||{},l=(a-r)/t;let f=[];const d=[f],u=ue(o,0,t,r);let h,v;const _=Ht(u,n,s,[]),C=[];K(f,u);for(let L=1;L<l;L++){for(h=ue(o,L,t,r,h),v=Pe(h,_);v;){Ne(u,h,v,_,C);const S=Pe(C,_);S&&(Ne(u,C,S,_,C),v=S),K(f,C),Be(u,C),fo(_,n,v),i&&f.length>t&&(f=[],d.push(f),K(f,u)),v=Pe(h,_)}K(f,h),Be(u,h)}return i?d:d[0]}const lt=0,co=1;function Vt(o,e=null,t){if(!o.length)return[];const{size:i=2,gridResolution:n=10,gridOffset:s=[0,0],edgeTypes:r=!1}=t||{},a=[],l=[{pos:o,types:r?new Array(o.length/i).fill(co):null,holes:e||[]}],f=[[],[]];let d=[];for(;l.length;){const{pos:u,types:h,holes:v}=l.shift();po(u,i,v[0]||u.length,f),d=Ht(f[0],n,s,d);const _=Pe(f[1],d);if(_){let C=ct(u,h,i,0,v[0]||u.length,d,_);const L={pos:C[0].pos,types:C[0].types,holes:[]},S={pos:C[1].pos,types:C[1].types,holes:[]};l.push(L,S);for(let M=0;M<v.length;M++)C=ct(u,h,i,v[M],v[M+1]||u.length,d,_),C[0]&&(L.holes.push(L.pos.length),L.pos=ve(L.pos,C[0].pos),r&&(L.types=ve(L.types,C[0].types))),C[1]&&(S.holes.push(S.pos.length),S.pos=ve(S.pos,C[1].pos),r&&(S.types=ve(S.types,C[1].types)))}else{const C={positions:u};r&&(C.edgeTypes=h),v.length&&(C.holeIndices=v),a.push(C)}}return a}function ct(o,e,t,i,n,s,r){const a=(n-i)/t,l=[],f=[],d=[],u=[],h=[];let v,_,C;const L=ue(o,a-1,t,i);let S=Math.sign(r&8?L[1]-s[3]:L[0]-s[2]),M=e&&e[a-1],I=0,T=0;for(let E=0;E<a;E++)v=ue(o,E,t,i,v),_=Math.sign(r&8?v[1]-s[3]:v[0]-s[2]),C=e&&e[i/t+E],_&&S&&S!==_&&(Ne(L,v,r,s,h),K(l,h)&&d.push(M),K(f,h)&&u.push(M)),_<=0?(K(l,v)&&d.push(C),I-=_):d.length&&(d[d.length-1]=lt),_>=0?(K(f,v)&&u.push(C),T+=_):u.length&&(u[u.length-1]=lt),Be(L,v),S=_,M=C;return[I?{pos:l,types:e&&d}:null,T?{pos:f,types:e&&u}:null]}function Ht(o,e,t,i){const n=Math.floor((o[0]-t[0])/e)*e+t[0],s=Math.floor((o[1]-t[1])/e)*e+t[1];return i[0]=n,i[1]=s,i[2]=n+e,i[3]=s+e,i}function fo(o,e,t){t&8?(o[1]+=e,o[3]+=e):t&4?(o[1]-=e,o[3]-=e):t&2?(o[0]+=e,o[2]+=e):t&1&&(o[0]-=e,o[2]-=e)}function po(o,e,t,i){let n=1/0,s=-1/0,r=1/0,a=-1/0;for(let l=0;l<t;l+=e){const f=o[l],d=o[l+1];n=f<n?f:n,s=f>s?f:s,r=d<r?d:r,a=d>a?d:a}return i[0][0]=n,i[0][1]=r,i[1][0]=s,i[1][1]=a,i}function ve(o,e){for(let t=0;t<e.length;t++)o.push(e[t]);return o}const go=85.051129;function uo(o,e){const{size:t=2,startIndex:i=0,endIndex:n=o.length,normalize:s=!0}=e||{},r=o.slice(i,n);$t(r,t,0,n-i);const a=Ut(r,{size:t,broken:!0,gridResolution:360,gridOffset:[-180,-180]});if(s)for(const l of a)Zt(l,t);return a}function ho(o,e=null,t){const{size:i=2,normalize:n=!0,edgeTypes:s=!1}=t||{};e=e||[];const r=[],a=[];let l=0,f=0;for(let u=0;u<=e.length;u++){const h=e[u]||o.length,v=f,_=vo(o,i,l,h);for(let C=_;C<h;C++)r[f++]=o[C];for(let C=l;C<_;C++)r[f++]=o[C];$t(r,i,v,f),xo(r,i,v,f,t==null?void 0:t.maxLatitude),l=h,a[u]=f}a.pop();const d=Vt(r,a,{size:i,gridResolution:360,gridOffset:[-180,-180],edgeTypes:s});if(n)for(const u of d)Zt(u.positions,i);return d}function vo(o,e,t,i){let n=-1,s=-1;for(let r=t+1;r<i;r+=e){const a=Math.abs(o[r]);a>n&&(n=a,s=r-1)}return s}function xo(o,e,t,i,n=go){const s=o[t],r=o[i-e];if(Math.abs(s-r)>180){const a=ue(o,0,e,t);a[0]+=Math.round((r-s)/360)*360,K(o,a),a[1]=Math.sign(a[1])*n,K(o,a),a[0]=s,K(o,a)}}function $t(o,e,t,i){let n=o[0],s;for(let r=t;r<i;r+=e){s=o[r];const a=s-n;(a>180||a<-180)&&(s-=Math.round(a/360)*360),o[r]=n=s}}function Zt(o,e){let t;const i=o.length/e;for(let s=0;s<i&&(t=o[s*e],(t+180)%360===0);s++);const n=-Math.round(t/360)*360;if(n!==0)for(let s=0;s<i;s++)o[s*e]+=n}function mo(o,e,t,i){let n;if(Array.isArray(o[0])){const s=o.length*e;n=new Array(s);for(let r=0;r<o.length;r++)for(let a=0;a<e;a++)n[r*e+a]=o[r][a]||0}else n=o;return t?Ut(n,{size:e,gridResolution:t}):i?uo(n,{size:e}):n}const yo=1,Po=2,le=4;class _o extends Ot{constructor(e){super({...e,attributes:{positions:{size:3,padding:18,initialize:!0,type:e.fp64?Float64Array:Float32Array},segmentTypes:{size:1,type:e.isWebGPU?Float32Array:Uint8ClampedArray}}})}get(e){return this.attributes[e]}getPathSegmentIndices(e){const t=this.attributes.segmentTypes,i=this.vertexStarts[e],n=Math.min(this.vertexStarts[e+1]??this.instanceCount,this.instanceCount),s=[];for(let r=i;r<n-1;r++)(t[r]&le)===0&&s.push(r);return s.length&&(t[i]&le)!==0&&s.unshift(s.pop()),s}getGeometryFromBuffer(e){return this.normalize||this.opts.isWebGPU?super.getGeometryFromBuffer(e):null}normalizeGeometry(e){return this.normalize?mo(e,this.positionSize,this.opts.resolution,this.opts.wrapLongitude):e}getGeometrySize(e){if(ft(e)){let i=0;for(const n of e)i+=this.getGeometrySize(n);return i}const t=this.getPathLength(e);return t<2?0:this.isClosed(e)?t<3?0:t+2:t}updateGeometryAttributes(e,t){if(t.geometrySize!==0)if(e&&ft(e))for(const i of e){const n=this.getGeometrySize(i);t.geometrySize=n,this.updateGeometryAttributes(i,t),t.vertexStart+=n}else this._updateSegmentTypes(e,t),this._updatePositions(e,t)}_updateSegmentTypes(e,t){const i=this.attributes.segmentTypes,n=e?this.isClosed(e):!1,{vertexStart:s,geometrySize:r}=t;i.fill(0,s,s+r),n?(i[s]=le,i[s+r-2]=le):(i[s]+=yo,i[s+r-2]+=Po),i[s+r-1]=le}_updatePositions(e,t){const{positions:i}=this.attributes;if(!i||!e)return;const{vertexStart:n,geometrySize:s}=t,r=new Array(3);for(let a=n,l=0;l<s;a++,l++)this.getPointOnPath(e,l,r),i[a*3]=r[0],i[a*3+1]=r[1],i[a*3+2]=r[2]}getPathLength(e){return e.length/this.positionSize}getPointOnPath(e,t,i=[]){const{positionSize:n}=this;t*n>=e.length&&(t+=1-e.length/n);const s=t*n;return i[0]=e[s],i[1]=e[s+1],i[2]=n===3&&e[s+2]||0,i}isClosed(e){if(!this.normalize)return!!this.opts.loop;const{positionSize:t}=this,i=e.length-t;return e[0]===e[i]&&e[1]===e[i+1]&&(t===2||e[2]===e[i+2])}}function ft(o){return Array.isArray(o[0])}const Co=`struct PathUniforms {
  widthScale: f32,
  widthMinPixels: f32,
  widthMaxPixels: f32,
  jointType: f32,
  capType: f32,
  miterLimit: f32,
  billboard: f32,
  widthUnits: i32,
};

@group(0) @binding(auto)
var<uniform> path: PathUniforms;
`,dt=`layout(std140) uniform pathUniforms {
  float widthScale;
  float widthMinPixels;
  float widthMaxPixels;
  float jointType;
  float capType;
  float miterLimit;
  bool billboard;
  highp int widthUnits;
} path;
`,bo={name:"path",source:Co,vs:dt,fs:dt,uniformTypes:{widthScale:"f32",widthMinPixels:"f32",widthMaxPixels:"f32",jointType:"f32",capType:"f32",miterLimit:"f32",billboard:"f32",widthUnits:"i32"}},Lo=`const EPSILON: f32 = 0.001;
const ZERO_OFFSET: vec3<f32> = vec3<f32>(0.0, 0.0, 0.0);

struct JoinResult {
  offset: vec3<f32>,
  cornerOffset: vec2<f32>,
  miterLength: f32,
  pathPosition: vec2<f32>,
  pathLength: f32,
  jointType: f32,
};

struct Attributes {
  @location(0) positions: vec2<f32>,
  @location(1) instanceTypes: f32,
  @location(2) instanceLeftPositions: vec3<f32>,
  @location(3) instanceStartPositions: vec3<f32>,
  @location(4) instanceEndPositions: vec3<f32>,
  @location(5) instanceRightPositions: vec3<f32>,
  @location(6) instanceLeftPositions64Low: vec3<f32>,
  @location(7) instanceStartPositions64Low: vec3<f32>,
  @location(8) instanceEndPositions64Low: vec3<f32>,
  @location(9) instanceRightPositions64Low: vec3<f32>,
  @location(10) instanceStrokeWidths: f32,
  @location(11) instanceColors: vec4<f32>,
  @location(12) rowIndexes: u32,
};

struct Varyings {
  @builtin(position) position: vec4<f32>,
  @location(0) vColor: vec4<f32>,
  @location(1) vCornerOffset: vec2<f32>,
  @location(2) vMiterLength: f32,
  @location(3) vPathPosition: vec2<f32>,
  @location(4) vPathLength: f32,
  @location(5) vJointType: f32,
  // Location 6 is reserved for TripsLayer's injected vTime varying.
  @location(7) clipCoordinates: vec2<f32>,
#ifdef DASH_ENABLED
  @location(8) vPathBounds: vec2<f32>,
#endif
};

fn flipIfTrue(flag: bool) -> f32 {
  return select(1.0, -1.0, flag);
}

fn clipLine(position: vec4<f32>, refPosition: vec4<f32>) -> vec4<f32> {
  if (position.w < EPSILON) {
    let r = (EPSILON - refPosition.w) / (position.w - refPosition.w);
    return refPosition + (position - refPosition) * r;
  }
  return position;
}

#ifdef DASH_ENABLED
// Return the visible interval of the original segment before clipLine moves either endpoint.
fn getClippedPathRange(startW: f32, endW: f32) -> vec2<f32> {
  let startClipped = startW < EPSILON;
  let endClipped = endW < EPSILON;
  if (startClipped && endClipped) {
    return vec2<f32>(0.0, 0.0);
  }
  if (startClipped || endClipped) {
    let intersection = clamp((EPSILON - startW) / (endW - startW), 0.0, 1.0);
    if (startClipped) {
      return vec2<f32>(intersection, 1.0);
    }
    return vec2<f32>(0.0, intersection);
  }
  return vec2<f32>(0.0, 1.0);
}
#endif

fn getLineJoinOffset(
  prevPoint: vec3<f32>,
  currPoint: vec3<f32>,
  nextPoint: vec3<f32>,
  width: vec2<f32>,
#ifdef DASH_ENABLED
  sourcePathLength: f32,
  sourcePathRange: vec2<f32>,
#endif
#ifdef ANTIALIASING
  coverageScale: f32,
#endif
  positions: vec2<f32>,
  instanceTypes: f32
) -> JoinResult {
  let isEnd = positions.x > 0.0;
  let sideOfPath = positions.y;
  let isJoint = select(0.0, 1.0, sideOfPath == 0.0);

  var deltaA3 = currPoint - prevPoint;
  var deltaB3 = nextPoint - currPoint;

  let rotationResult = project_needs_rotation(currPoint);
  if (path.billboard == 0.0 && rotationResult.needsRotation) {
    deltaA3 = rotationResult.transform * deltaA3;
    deltaB3 = rotationResult.transform * deltaB3;
  }

  let deltaA = deltaA3.xy / width;
  let deltaB = deltaB3.xy / width;

  let lenA = length(deltaA);
  let lenB = length(deltaB);

  let dirA = select(vec2<f32>(0.0, 0.0), normalize(deltaA), lenA > 0.0);
  let dirB = select(vec2<f32>(0.0, 0.0), normalize(deltaB), lenB > 0.0);

  let perpA = vec2<f32>(-dirA.y, dirA.x);
  let perpB = vec2<f32>(-dirB.y, dirB.x);

  var tangent = dirA + dirB;
  tangent = select(perpA, normalize(tangent), length(tangent) > 0.0);
  let miterVec = vec2<f32>(-tangent.y, tangent.x);
  let dir = select(dirB, dirA, isEnd);
  let perp = select(perpB, perpA, isEnd);
#ifdef DASH_ENABLED
  let segmentLength2D = select(lenB, lenA, isEnd);

  // Extrusion happens in the XY plane, so segmentLength2D is a 2D length and pathPosition.y
  // below measures 2D distance along the segment. For a path that also moves in Z the true
  // arc length is longer by this ratio. Scaling pathLength and pathPosition.y by it makes
  // the coordinate measure real 3D distance while leaving the joint tests unchanged, since
  // they compare the two against each other and both are scaled alike. Billboard mode
  // extrudes in clip space, where the perspective divide has already reduced the segment to
  // its screen projection, so its complete common-space length is supplied by the caller.
  // Mirrors path-layer-vertex.glsl.ts.
  let currDelta3 = select(deltaB3, deltaA3, isEnd);
  let currLength2D = length(currDelta3.xy);
  // Do not clamp a valid denominator to EPSILON: high-zoom Web Mercator deltas are often
  // smaller than that in common space, and changing their scale corrupts even flat paths.
  let safeLength2D = select(1.0, currLength2D, currLength2D > 0.0);
  var arcLengthRatio = 1.0;
  var pathPositionOffset = 0.0;
  var pathLength = segmentLength2D;
  if (path.billboard != 0.0) {
    // clipLine may shorten the visible screen-space segment. Preserve the corresponding interval
    // of the complete common-space arclength instead of compressing the full dash period into the
    // visible span. Keep pathLength complete so justification is stable as the camera clips it.
    let visiblePathLength = sourcePathLength * (sourcePathRange.y - sourcePathRange.x);
    arcLengthRatio = 0.0;
    if (segmentLength2D > 0.0) {
      arcLengthRatio = visiblePathLength / segmentLength2D;
    }
    pathPositionOffset = sourcePathLength * sourcePathRange.x;
    pathLength = sourcePathLength;
  } else if (currLength2D > 0.0) {
    arcLengthRatio = length(currDelta3) / safeLength2D;
    pathLength = segmentLength2D * arcLengthRatio;
  }
#else
  let pathLength = select(lenB, lenA, isEnd);
#endif

  let sinHalfA = abs(dot(miterVec, perp));
  let cosHalfA = abs(dot(dirA, miterVec));
  let turnDirection = flipIfTrue(dirA.x * dirB.y >= dirA.y * dirB.x);
  let cornerPosition = sideOfPath * turnDirection;

  var miterSize = 1.0 / max(sinHalfA, EPSILON);
  miterSize = mix(
    min(miterSize, max(lenA, lenB) / max(cosHalfA, EPSILON)),
    miterSize,
    step(0.0, cornerPosition)
  );

  var offsetVec =
    mix(miterVec * miterSize, perp, step(0.5, cornerPosition)) *
    (sideOfPath + isJoint * turnDirection);

  let isStartCap = lenA == 0.0 || (!isEnd && (instanceTypes == 1.0 || instanceTypes == 3.0));
  let isEndCap = lenB == 0.0 || (isEnd && (instanceTypes == 2.0 || instanceTypes == 3.0));
  let isCap = isStartCap || isEndCap;

  var jointType = path.jointType;
  if (isCap) {
    offsetVec = mix(
      perp * sideOfPath,
      dir * path.capType * 4.0 * flipIfTrue(isStartCap),
      isJoint
    );
    jointType = path.capType;
  }

#ifdef ANTIALIASING
  let coverageOffsetVec = offsetVec * coverageScale;
  var miterLength = dot(coverageOffsetVec, miterVec * turnDirection);
#else
  var miterLength = dot(offsetVec, miterVec * turnDirection);
#endif
  miterLength = select(miterLength, isJoint, isCap);

#ifdef ANTIALIASING
  let offsetFromStartOfPath = coverageOffsetVec + deltaA * select(0.0, 1.0, isEnd);
#else
  let offsetFromStartOfPath = offsetVec + deltaA * select(0.0, 1.0, isEnd);
#endif
  let pathPosition = vec2<f32>(
    dot(offsetFromStartOfPath, perp),
#ifdef DASH_ENABLED
    pathPositionOffset + dot(offsetFromStartOfPath, dir) * arcLengthRatio
#else
    dot(offsetFromStartOfPath, dir)
#endif
  );
  let isValid = step(f32(instanceTypes), 3.5);
#ifdef ANTIALIASING
  var offset = vec3<f32>(coverageOffsetVec * width * isValid, 0.0);
#else
  var offset = vec3<f32>(offsetVec * width * isValid, 0.0);
#endif

  if (path.billboard == 0.0 && rotationResult.needsRotation) {
    offset = rotationResult.transform * offset;
  }

#ifdef ANTIALIASING
  return JoinResult(
    offset, coverageOffsetVec, miterLength, pathPosition, pathLength, jointType
  );
#else
  return JoinResult(offset, offsetVec, miterLength, pathPosition, pathLength, jointType);
#endif
}

@vertex
fn vertexMain(attributes: Attributes) -> Varyings {
  var varyings: Varyings;

  geometry.pickingColor = picking_getPickingColorFromIndex(attributes.rowIndexes);

  let isEnd = attributes.positions.x;

  let prevPosition = mix(attributes.instanceLeftPositions, attributes.instanceStartPositions, isEnd);
  let prevPosition64Low = mix(
    attributes.instanceLeftPositions64Low,
    attributes.instanceStartPositions64Low,
    isEnd
  );
  let currPosition = mix(attributes.instanceStartPositions, attributes.instanceEndPositions, isEnd);
  let currPosition64Low = mix(
    attributes.instanceStartPositions64Low,
    attributes.instanceEndPositions64Low,
    isEnd
  );
  let nextPosition = mix(attributes.instanceEndPositions, attributes.instanceRightPositions, isEnd);
  let nextPosition64Low = mix(
    attributes.instanceEndPositions64Low,
    attributes.instanceRightPositions64Low,
    isEnd
  );

  geometry.worldPosition = currPosition;

  let widthPixels =
    clamp(
      project_unit_size_to_pixel(attributes.instanceStrokeWidths * path.widthScale, path.widthUnits),
      path.widthMinPixels,
      path.widthMaxPixels
    ) / 2.0;

  if (path.billboard != 0.0) {
#ifdef DASH_ENABLED
    let prevProjection = project_position_to_clipspace_and_commonspace(
      prevPosition, prevPosition64Low, ZERO_OFFSET
    );
    let nextProjection = project_position_to_clipspace_and_commonspace(
      nextPosition, nextPosition64Low, ZERO_OFFSET
    );
    let prevPositionCommon = prevProjection.commonPosition.xyz;
    let nextPositionCommon = nextProjection.commonPosition.xyz;
    var prevPositionScreen = prevProjection.clipPosition;
    var nextPositionScreen = nextProjection.clipPosition;
#else
    var prevPositionScreen = project_position_to_clipspace(
      prevPosition, prevPosition64Low, ZERO_OFFSET
    );
    var nextPositionScreen = project_position_to_clipspace(
      nextPosition, nextPosition64Low, ZERO_OFFSET
    );
#endif
    let currProjection = project_position_to_clipspace_and_commonspace(
      currPosition, currPosition64Low, ZERO_OFFSET
    );
    geometry.position = currProjection.commonPosition;
    var currPositionScreen = currProjection.clipPosition;
#ifdef DASH_ENABLED
    let currPositionCommon = currProjection.commonPosition.xyz;
    let sourcePathStartScreen = mix(currPositionScreen, prevPositionScreen, isEnd);
    let sourcePathEndScreen = mix(nextPositionScreen, currPositionScreen, isEnd);
    let billboardPathRange = getClippedPathRange(
      sourcePathStartScreen.w, sourcePathEndScreen.w
    );
#endif

    prevPositionScreen = clipLine(prevPositionScreen, currPositionScreen);
    nextPositionScreen = clipLine(nextPositionScreen, currPositionScreen);
    currPositionScreen = clipLine(currPositionScreen, mix(nextPositionScreen, prevPositionScreen, isEnd));

#ifdef ANTIALIASING
    let coverageScale = select(
      1.0,
      (widthPixels + 0.5 / project.devicePixelRatio) / max(widthPixels, 1e-6),
      widthPixels > 0.0
    );
#endif
#ifdef DASH_ENABLED
    let currentDeltaCommon = select(
      nextPositionCommon - currPositionCommon,
      currPositionCommon - prevPositionCommon,
      isEnd > 0.0
    );
    let billboardPathLength = select(
      0.0,
      length(currentDeltaCommon) * project.scale / (widthPixels * project.focalDistance),
      widthPixels > 0.0
    );
#endif
    let join = getLineJoinOffset(
      prevPositionScreen.xyz / prevPositionScreen.w,
      currPositionScreen.xyz / currPositionScreen.w,
      nextPositionScreen.xyz / nextPositionScreen.w,
      project_pixel_size_to_clipspace(vec2<f32>(widthPixels, widthPixels)),
#ifdef DASH_ENABLED
      billboardPathLength,
      billboardPathRange,
#endif
#ifdef ANTIALIASING
      coverageScale,
#endif
      attributes.positions,
      attributes.instanceTypes
    );
#ifdef DASH_ENABLED
    // Phase and justification use the complete source segment, while cap and joint coverage
    // must still recognize the endpoints moved by clipLine.
    varyings.vPathBounds = billboardPathLength * billboardPathRange;
#endif

    geometry.uv = join.pathPosition;
    varyings.position = vec4<f32>(
      currPositionScreen.xyz + join.offset * currPositionScreen.w,
      currPositionScreen.w
    );
    varyings.vCornerOffset = join.cornerOffset;
    varyings.vMiterLength = join.miterLength;
    varyings.vPathPosition = join.pathPosition;
    varyings.vPathLength = join.pathLength;
    varyings.vJointType = join.jointType;
  } else {
    let prevPositionCommon = project_position_vec3_f64(prevPosition, prevPosition64Low);
    let currPositionCommon = project_position_vec3_f64(currPosition, currPosition64Low);
    let nextPositionCommon = project_position_vec3_f64(nextPosition, nextPosition64Low);

    let width = vec2<f32>(
      project_pixel_size_float(widthPixels),
      project_pixel_size_float(widthPixels)
    );
#ifdef ANTIALIASING
    let coverageScale = select(
      1.0,
      (widthPixels + 0.5 / project.devicePixelRatio) / max(widthPixels, 1e-6),
      widthPixels > 0.0
    );
#endif
    let join = getLineJoinOffset(
      prevPositionCommon,
      currPositionCommon,
      nextPositionCommon,
      width,
#ifdef DASH_ENABLED
      1.0,
      vec2<f32>(0.0, 1.0),
#endif
#ifdef ANTIALIASING
      coverageScale,
#endif
      attributes.positions,
      attributes.instanceTypes
    );
#ifdef DASH_ENABLED
    varyings.vPathBounds = vec2<f32>(0.0, join.pathLength);
#endif

    geometry.position = vec4<f32>(currPositionCommon + join.offset, 1.0);
    geometry.uv = join.pathPosition;
    varyings.position = project_common_position_to_clipspace(geometry.position);
    varyings.vCornerOffset = join.cornerOffset;
    varyings.vMiterLength = join.miterLength;
    varyings.vPathPosition = join.pathPosition;
    varyings.vPathLength = join.pathLength;
    varyings.vJointType = join.jointType;
  }

  varyings.clipCoordinates = geometry.position.xy;
  clip_filterPosition(&varyings.position, geometry.worldPosition.xy);

  varyings.vColor = vec4<f32>(
    attributes.instanceColors.rgb,
    attributes.instanceColors.a * layer.opacity
  );
  return varyings;
}

@fragment
fn fragmentMain(varyings: Varyings) -> @location(0) vec4<f32> {
  geometry.uv = varyings.vPathPosition;

#ifdef ANTIALIASING
  // Coordinates of the outer silhouette, in units of half-width: rounded joints and caps are
  // bounded by the corner offset, everywhere else by the edge of the stroke. Dividing by the
  // screen-space derivative converts the distance to the boundary into device pixels, which stays
  // correct under perspective foreshortening and under extensions that rescale the stroke.
#ifdef DASH_ENABLED
  let isCorner =
    varyings.vPathPosition.y < varyings.vPathBounds.x ||
    varyings.vPathPosition.y > varyings.vPathBounds.y;
#else
  let isCorner = varyings.vPathPosition.y < 0.0 || varyings.vPathPosition.y > varyings.vPathLength;
#endif
  let isRound = varyings.vJointType > 0.5;

  // Distance to the silhouette in device pixels, from the derivative of the coordinate that
  // bounds it. Computed before the discards below: derivatives need uniform control flow and are
  // undefined after a discard in the quad. See dev-docs/RFCs/v9.4/analytic-antialiasing-rfc.md
  let bodyCoord = abs(varyings.vPathPosition.x);
  let cornerCoord = length(varyings.vCornerOffset);
  // Both evaluated so each derivative stays on one field across the corner/body boundary
  let bodyPixels = (1.0 - bodyCoord) / max(fwidth(bodyCoord), 1e-6);
  let cornerPixels = (1.0 - cornerCoord) / max(fwidth(cornerCoord), 1e-6);
#ifdef PATH_STYLE_OFFSET
  // Rounded corners still intersect the stroke-width envelope. Extensions may remap
  // vPathPosition.x independently of vCornerOffset, as PathStyleExtension does for offsets.
  let edgePixels = select(bodyPixels, min(cornerPixels, bodyPixels), isRound && isCorner);
#else
  let edgePixels = select(bodyPixels, cornerPixels, isRound && isCorner);
#endif

  // Fragments outside the coverage ramp must not write depth or picking colors.
  if (edgePixels <= -SMOOTH_EDGE_RADIUS) {
    discard;
  }

  if (isCorner) {
    if (!isRound && varyings.vMiterLength > path.miterLimit + 1.0) {
      discard;
    }
  }

  var color = varyings.vColor;

  // Feather one device pixel across the width only, before premultiplication. edgePixels is a
  // signed device-pixel distance and SMOOTH_EDGE_RADIUS is 0.5, so this ramps across one pixel.
  color.a *= smoothedge(0.0, edgePixels);
#else
#ifdef DASH_ENABLED
  if (
    varyings.vPathPosition.y < varyings.vPathBounds.x ||
    varyings.vPathPosition.y > varyings.vPathBounds.y
  ) {
#else
  if (
    varyings.vPathPosition.y < 0.0 ||
    varyings.vPathPosition.y > varyings.vPathLength
  ) {
#endif
    if (varyings.vJointType > 0.5 && length(varyings.vCornerOffset) > 1.0) {
      discard;
    }
    if (
      varyings.vJointType < 0.5 &&
      varyings.vMiterLength > path.miterLimit + 1.0
    ) {
      discard;
    }
  }
#endif

  // Fragment-layer injections that discard pixels must run after analytic coverage derivatives.
  // See TripsLayer, which rejects fragments outside of the active time window at this anchor.
  // DECKGL_FILTER_COLOR
  clip_filterColor(varyings.clipCoordinates);
#ifdef ANTIALIASING
  return deckgl_premultiplied_alpha(color);
#else
  return deckgl_premultiplied_alpha(varyings.vColor);
#endif
}
`,So=`#version 300 es
#define SHADER_NAME path-layer-vertex-shader
in vec2 positions;
in float instanceTypes;
in vec3 instanceStartPositions;
in vec3 instanceEndPositions;
in vec3 instanceLeftPositions;
in vec3 instanceRightPositions;
in vec3 instanceLeftPositions64Low;
in vec3 instanceStartPositions64Low;
in vec3 instanceEndPositions64Low;
in vec3 instanceRightPositions64Low;
in float instanceStrokeWidths;
in vec4 instanceColors;
in float rowIndexes;
uniform float opacity;
out vec4 vColor;
out vec2 vCornerOffset;
out float vMiterLength;
out vec2 vPathPosition;
out float vPathLength;
out float vJointType;
#ifdef DASH_ENABLED
out vec2 vPathBounds;
#endif
const float EPSILON = 0.001;
const vec3 ZERO_OFFSET = vec3(0.0);
float flipIfTrue(bool flag) {
return -(float(flag) * 2. - 1.);
}
vec3 getLineJoinOffset(
vec3 prevPoint, vec3 currPoint, vec3 nextPoint,
vec2 width
#ifdef DASH_ENABLED
, float sourcePathLength, vec2 sourcePathRange
#endif
#ifdef ANTIALIASING
, float coverageScale
#endif
) {
bool isEnd = positions.x > 0.0;
float sideOfPath = positions.y;
float isJoint = float(sideOfPath == 0.0);
vec3 deltaA3 = (currPoint - prevPoint);
vec3 deltaB3 = (nextPoint - currPoint);
mat3 rotationMatrix;
bool needsRotation = !path.billboard && project_needs_rotation(currPoint, rotationMatrix);
if (needsRotation) {
deltaA3 = deltaA3 * rotationMatrix;
deltaB3 = deltaB3 * rotationMatrix;
}
vec2 deltaA = deltaA3.xy / width;
vec2 deltaB = deltaB3.xy / width;
float lenA = length(deltaA);
float lenB = length(deltaB);
vec2 dirA = lenA > 0. ? normalize(deltaA) : vec2(0.0, 0.0);
vec2 dirB = lenB > 0. ? normalize(deltaB) : vec2(0.0, 0.0);
vec2 perpA = vec2(-dirA.y, dirA.x);
vec2 perpB = vec2(-dirB.y, dirB.x);
vec2 tangent = dirA + dirB;
tangent = length(tangent) > 0. ? normalize(tangent) : perpA;
vec2 miterVec = vec2(-tangent.y, tangent.x);
vec2 dir = isEnd ? dirA : dirB;
vec2 perp = isEnd ? perpA : perpB;
float L = isEnd ? lenA : lenB;
#ifdef DASH_ENABLED
vec3 currDelta3 = isEnd ? deltaA3 : deltaB3;
float currLength2D = length(currDelta3.xy);
float arcLengthRatio = 1.0;
float pathPositionOffset = 0.0;
float pathLength = L;
if (path.billboard) {
float visiblePathLength = sourcePathLength * (sourcePathRange.y - sourcePathRange.x);
arcLengthRatio = L > 0.0 ? visiblePathLength / L : 0.0;
pathPositionOffset = sourcePathLength * sourcePathRange.x;
pathLength = sourcePathLength;
} else if (currLength2D > 0.0) {
arcLengthRatio = length(currDelta3) / currLength2D;
pathLength = L * arcLengthRatio;
}
#endif
float sinHalfA = abs(dot(miterVec, perp));
float cosHalfA = abs(dot(dirA, miterVec));
float turnDirection = flipIfTrue(dirA.x * dirB.y >= dirA.y * dirB.x);
float cornerPosition = sideOfPath * turnDirection;
float miterSize = 1.0 / max(sinHalfA, EPSILON);
miterSize = mix(
min(miterSize, max(lenA, lenB) / max(cosHalfA, EPSILON)),
miterSize,
step(0.0, cornerPosition)
);
vec2 offsetVec = mix(miterVec * miterSize, perp, step(0.5, cornerPosition))
* (sideOfPath + isJoint * turnDirection);
bool isStartCap = lenA == 0.0 || (!isEnd && (instanceTypes == 1.0 || instanceTypes == 3.0));
bool isEndCap = lenB == 0.0 || (isEnd && (instanceTypes == 2.0 || instanceTypes == 3.0));
bool isCap = isStartCap || isEndCap;
if (isCap) {
offsetVec = mix(perp * sideOfPath, dir * path.capType * 4.0 * flipIfTrue(isStartCap), isJoint);
vJointType = path.capType;
} else {
vJointType = path.jointType;
}
#ifdef ANTIALIASING
vec2 coverageOffsetVec = offsetVec * coverageScale;
#ifdef DASH_ENABLED
vPathLength = pathLength;
#else
vPathLength = L;
#endif
vCornerOffset = coverageOffsetVec;
vMiterLength = dot(vCornerOffset, miterVec * turnDirection);
vMiterLength = isCap ? isJoint : vMiterLength;
vec2 offsetFromStartOfPath = coverageOffsetVec + deltaA * float(isEnd);
vPathPosition = vec2(
dot(offsetFromStartOfPath, perp),
#ifdef DASH_ENABLED
pathPositionOffset + dot(offsetFromStartOfPath, dir) * arcLengthRatio
#else
dot(offsetFromStartOfPath, dir)
#endif
);
geometry.uv = vPathPosition;
float isValid = step(instanceTypes, 3.5);
vec3 offset = vec3(coverageOffsetVec * width * isValid, 0.0);
#else
#ifdef DASH_ENABLED
vPathLength = pathLength;
#else
vPathLength = L;
#endif
vCornerOffset = offsetVec;
vMiterLength = dot(vCornerOffset, miterVec * turnDirection);
vMiterLength = isCap ? isJoint : vMiterLength;
vec2 offsetFromStartOfPath = vCornerOffset + deltaA * float(isEnd);
vPathPosition = vec2(
dot(offsetFromStartOfPath, perp),
#ifdef DASH_ENABLED
pathPositionOffset + dot(offsetFromStartOfPath, dir) * arcLengthRatio
#else
dot(offsetFromStartOfPath, dir)
#endif
);
geometry.uv = vPathPosition;
float isValid = step(instanceTypes, 3.5);
vec3 offset = vec3(offsetVec * width * isValid, 0.0);
#endif
if (needsRotation) {
offset = rotationMatrix * offset;
}
return offset;
}
void clipLine(inout vec4 position, vec4 refPosition) {
if (position.w < EPSILON) {
float r = (EPSILON - refPosition.w) / (position.w - refPosition.w);
position = refPosition + (position - refPosition) * r;
}
}
#ifdef DASH_ENABLED
vec2 getClippedPathRange(float startW, float endW) {
bool startClipped = startW < EPSILON;
bool endClipped = endW < EPSILON;
if (startClipped && endClipped) {
return vec2(0.0);
}
if (startClipped || endClipped) {
float intersection = clamp((EPSILON - startW) / (endW - startW), 0.0, 1.0);
return startClipped ? vec2(intersection, 1.0) : vec2(0.0, intersection);
}
return vec2(0.0, 1.0);
}
#endif
void main() {
geometry.pickingColor = picking_getPickingColorFromIndex(rowIndexes);
vColor = vec4(instanceColors.rgb, instanceColors.a * layer.opacity);
float isEnd = positions.x;
vec3 prevPosition = mix(instanceLeftPositions, instanceStartPositions, isEnd);
vec3 prevPosition64Low = mix(instanceLeftPositions64Low, instanceStartPositions64Low, isEnd);
vec3 currPosition = mix(instanceStartPositions, instanceEndPositions, isEnd);
vec3 currPosition64Low = mix(instanceStartPositions64Low, instanceEndPositions64Low, isEnd);
vec3 nextPosition = mix(instanceEndPositions, instanceRightPositions, isEnd);
vec3 nextPosition64Low = mix(instanceEndPositions64Low, instanceRightPositions64Low, isEnd);
geometry.worldPosition = currPosition;
vec2 widthPixels = vec2(clamp(
project_size_to_pixel(instanceStrokeWidths * path.widthScale, path.widthUnits),
path.widthMinPixels, path.widthMaxPixels) / 2.0);
vec3 width;
if (path.billboard) {
#ifdef DASH_ENABLED
vec4 prevPositionCommon;
vec4 nextPositionCommon;
vec4 prevPositionScreen = project_position_to_clipspace(
prevPosition, prevPosition64Low, ZERO_OFFSET, prevPositionCommon
);
#else
vec4 prevPositionScreen = project_position_to_clipspace(
prevPosition, prevPosition64Low, ZERO_OFFSET
);
#endif
vec4 currPositionScreen = project_position_to_clipspace(currPosition, currPosition64Low, ZERO_OFFSET, geometry.position);
#ifdef DASH_ENABLED
vec4 nextPositionScreen = project_position_to_clipspace(
nextPosition, nextPosition64Low, ZERO_OFFSET, nextPositionCommon
);
#else
vec4 nextPositionScreen = project_position_to_clipspace(
nextPosition, nextPosition64Low, ZERO_OFFSET
);
#endif
#ifdef DASH_ENABLED
vec4 sourcePathStartScreen = mix(currPositionScreen, prevPositionScreen, isEnd);
vec4 sourcePathEndScreen = mix(nextPositionScreen, currPositionScreen, isEnd);
vec2 billboardPathRange = getClippedPathRange(
sourcePathStartScreen.w, sourcePathEndScreen.w
);
#endif
clipLine(prevPositionScreen, currPositionScreen);
clipLine(nextPositionScreen, currPositionScreen);
clipLine(currPositionScreen, mix(nextPositionScreen, prevPositionScreen, isEnd));
width = vec3(widthPixels, 0.0);
DECKGL_FILTER_SIZE(width, geometry);
#ifdef ANTIALIASING
vec2 coveragePadding = vec2(0.5 / project.devicePixelRatio);
float coverageScale = length(width.xy) > 0.0
? length(width.xy + coveragePadding) / length(width.xy)
: 1.0;
#endif
#ifdef DASH_ENABLED
vec3 currentDeltaCommon = isEnd > 0.0
? geometry.position.xyz - prevPositionCommon.xyz
: nextPositionCommon.xyz - geometry.position.xyz;
float billboardPathLength = width.x > 0.0
? length(currentDeltaCommon) * project.scale / (width.x * project.focalDistance)
: 0.0;
#endif
vec3 offset = getLineJoinOffset(
prevPositionScreen.xyz / prevPositionScreen.w,
currPositionScreen.xyz / currPositionScreen.w,
nextPositionScreen.xyz / nextPositionScreen.w,
project_pixel_size_to_clipspace(width.xy)
#ifdef DASH_ENABLED
,
billboardPathLength, billboardPathRange
#endif
#ifdef ANTIALIASING
,
coverageScale
#endif
);
#ifdef DASH_ENABLED
vPathBounds = billboardPathLength * billboardPathRange;
#endif
DECKGL_FILTER_GL_POSITION(currPositionScreen, geometry);
gl_Position = vec4(currPositionScreen.xyz + offset * currPositionScreen.w, currPositionScreen.w);
} else {
prevPosition = project_position(prevPosition, prevPosition64Low);
currPosition = project_position(currPosition, currPosition64Low);
nextPosition = project_position(nextPosition, nextPosition64Low);
width = vec3(project_pixel_size(widthPixels), 0.0);
DECKGL_FILTER_SIZE(width, geometry);
#ifdef ANTIALIASING
vec2 coveragePadding = project_pixel_size(vec2(0.5 / project.devicePixelRatio));
float coverageScale = length(width.xy) > 0.0
? length(width.xy + coveragePadding) / length(width.xy)
: 1.0;
#endif
vec3 offset = getLineJoinOffset(
prevPosition, currPosition, nextPosition, width.xy
#ifdef DASH_ENABLED
, 1.0, vec2(0.0, 1.0)
#endif
#ifdef ANTIALIASING
, coverageScale
#endif
);
#ifdef DASH_ENABLED
vPathBounds = vec2(0.0, vPathLength);
#endif
geometry.position = vec4(currPosition + offset, 1.0);
gl_Position = project_common_position_to_clipspace(geometry.position);
DECKGL_FILTER_GL_POSITION(gl_Position, geometry);
}
DECKGL_FILTER_COLOR(vColor, geometry);
}
`,Ao=`#version 300 es
#define SHADER_NAME path-layer-fragment-shader
precision highp float;
in vec4 vColor;
in vec2 vCornerOffset;
in float vMiterLength;
in vec2 vPathPosition;
in float vPathLength;
in float vJointType;
#ifdef DASH_ENABLED
in vec2 vPathBounds;
#endif
out vec4 fragColor;
void main(void) {
geometry.uv = vPathPosition;
#ifdef ANTIALIASING
#ifdef DASH_ENABLED
bool isCorner = vPathPosition.y < vPathBounds.x || vPathPosition.y > vPathBounds.y;
#else
bool isCorner = vPathPosition.y < 0.0 || vPathPosition.y > vPathLength;
#endif
bool isRound = vJointType > 0.5;
float bodyCoord = abs(vPathPosition.x);
float cornerCoord = length(vCornerOffset);
float bodyPixels = (1.0 - bodyCoord) / max(fwidth(bodyCoord), 1e-6);
float cornerPixels = (1.0 - cornerCoord) / max(fwidth(cornerCoord), 1e-6);
#ifdef PATH_STYLE_OFFSET
float edgePixels = isRound && isCorner ? min(cornerPixels, bodyPixels) : bodyPixels;
#else
float edgePixels = isRound && isCorner ? cornerPixels : bodyPixels;
#endif
if (edgePixels <= -SMOOTH_EDGE_RADIUS) {
discard;
}
if (isCorner) {
if (!isRound && vMiterLength > path.miterLimit + 1.0) {
discard;
}
}
fragColor = vColor;
fragColor.a *= smoothedge(0.0, edgePixels);
#else
#ifdef DASH_ENABLED
if (vPathPosition.y < vPathBounds.x || vPathPosition.y > vPathBounds.y) {
#else
if (vPathPosition.y < 0.0 || vPathPosition.y > vPathLength) {
#endif
if (vJointType > 0.5 && length(vCornerOffset) > 1.0) {
discard;
}
if (vJointType < 0.5 && vMiterLength > path.miterLimit + 1.0) {
discard;
}
}
fragColor = vColor;
#endif
DECKGL_FILTER_COLOR(fragColor, geometry);
}
`,Kt=[0,0,0,255],wo={widthUnits:"meters",widthScale:{type:"number",min:0,value:1},widthMinPixels:{type:"number",min:0,value:0},widthMaxPixels:{type:"number",min:0,value:Number.MAX_SAFE_INTEGER},jointRounded:!1,capRounded:!1,miterLimit:{type:"number",min:0,value:4},antialiasing:!1,billboard:!1,_pathType:null,getPath:{type:"accessor",value:o=>o.path},getColor:{type:"accessor",value:Kt},getWidth:{type:"accessor",value:1},rounded:{deprecatedFor:["jointRounded","capRounded"]}},Oe={enter:(o,e)=>e.length?e.subarray(e.length-o.length):o};function Io(o){if(o.isGeospatial)return null;const{unitsPerMeter:e}=o.distanceScales;return[e[0],e[1],e[2]]}function pt(o,e){return o===e||!!(o&&e&&o.length===e.length&&o.every((t,i)=>t===e[i]))}class Ee extends Q{getShaders(){const{antialiasing:e}=this.props;return super.getShaders({vs:So,fs:Ao,source:Lo,defines:e?{ANTIALIASING:1}:{},modules:[ee,te,ie,bo,...this.context.device.type==="webgpu"?[We]:[]]})}get wrapLongitude(){return!1}getBounds(){var e;return this.context.device.type==="webgpu"?null:(e=this.getAttributeManager())==null?void 0:e.getBounds(["vertexPositions"])}getPathProjectionScale(e){var r;const t=this.props.coordinateSystem;if(!!!((r=this.getAttributeManager())!=null&&r.getAttributes().instanceDashOffsets))return null;if(e instanceof di&&e.zoom>=12&&(t==="default"||t==="lnglat"||t==="cartesian")){const a=fi.getUniforms({viewport:e,coordinateSystem:t,coordinateOrigin:this.props.coordinateOrigin,autoWrapLongitude:this.wrapLongitude});return[e.projectionMode,a.coordinateOrigin[1],a.commonOrigin[1],...a.commonUnitsPerWorldUnit,...a.commonUnitsPerWorldUnit2,a.commonUnitsPerMeter[2]]}const s=Io(e);return s?[e.projectionMode,...s]:[e.projectionMode]}shouldUpdateState(e){var i,n;const{viewport:t}=this.context;return super.shouldUpdateState(e)||((i=this.state)==null?void 0:i.tessellationResolution)!==t.resolution||!pt((n=this.state)==null?void 0:n.pathProjectionScale,this.getPathProjectionScale(t))}initializeState(){const t=this.context.device.type==="webgpu";this.getAttributeManager().addInstanced({...t?{pathPositions:{size:24,type:"float32",transition:!1,accessor:"getPath",update:this.calculateWebGPUPositions,shaderAttributes:{instanceLeftPositions:{size:3,elementOffset:0},instanceStartPositions:{size:3,elementOffset:3},instanceEndPositions:{size:3,elementOffset:6},instanceRightPositions:{size:3,elementOffset:9},instanceLeftPositions64Low:{size:3,elementOffset:12},instanceStartPositions64Low:{size:3,elementOffset:15},instanceEndPositions64Low:{size:3,elementOffset:18},instanceRightPositions64Low:{size:3,elementOffset:21}},noAlloc:!0}}:{vertexPositions:{size:3,vertexOffset:1,type:"float64",fp64:this.use64bitPositions(),transition:Oe,accessor:"getPath",update:this.calculatePositions,noAlloc:!0,shaderAttributes:{instanceLeftPositions:{vertexOffset:0},instanceStartPositions:{vertexOffset:1},instanceEndPositions:{vertexOffset:2},instanceRightPositions:{vertexOffset:3}}}},instanceTypes:{size:1,type:t?"float32":"uint8",update:this.calculateSegmentTypes,noAlloc:!0},instanceStrokeWidths:{size:1,accessor:"getWidth",transition:t?!1:Oe,defaultValue:1,bufferGroup:"path-instance-data"},instanceColors:{size:this.props.colorFormat.length,type:"unorm8",accessor:"getColor",transition:t?!1:Oe,defaultValue:Kt,bufferGroup:"path-instance-data"},rowIndexes:{size:1,type:"uint32",accessor:(n,{index:s})=>n&&n.__source?n.__source.index:s,bufferGroup:"path-instance-data"}}),this.setState({pathTesselator:new _o({fp64:this.use64bitPositions(),isWebGPU:t}),tessellationResolution:this.context.viewport.resolution,pathProjectionScale:this.getPathProjectionScale(this.context.viewport)})}updateState(e){var v;super.updateState(e);const{props:t,oldProps:i,changeFlags:n}=e,s=this.getAttributeManager(),{viewport:r}=this.context,a=this.state.tessellationResolution!==r.resolution,l=this.getPathProjectionScale(r),f=!pt(this.state.pathProjectionScale,l),u=n.updateTriggersChanged&&(n.updateTriggersChanged.all||n.updateTriggersChanged.getPath)||t._pathType!==i._pathType||t.positionFormat!==i.positionFormat||t.wrapLongitude!==i.wrapLongitude||a;if(n.dataChanged||u){const{pathTesselator:_}=this.state,C=t.data.attributes||{};_.updateGeometry({data:t.data,geometryBuffer:C.getPath,buffers:C,normalize:!t._pathType,loop:t._pathType==="loop",getGeometry:t.getPath,positionFormat:t.positionFormat,wrapLongitude:t.wrapLongitude,resolution:r.resolution,dataChanged:u?void 0:n.dataChanged}),this.setState({numInstances:_.instanceCount,startIndices:_.vertexStarts,tessellationResolution:r.resolution,pathProjectionScale:l}),!n.dataChanged||u?s.invalidateAll():f&&s.invalidate("instanceDashOffsets")}else f&&(this.setState({pathProjectionScale:l}),s.invalidate("instanceDashOffsets"));(n.extensionsChanged||t.antialiasing!==i.antialiasing)&&((v=this.state.model)==null||v.destroy(),this.state.model=this._getModel(),s.invalidateAll())}getPickingInfo(e){const t=super.getPickingInfo(e),{index:i}=t,n=this.props.data;return n[0]&&n[0].__source&&(t.object=n.find(s=>s.__source.index===i)),t}disablePickingIndex(e){const t=this.props.data;if(t[0]&&t[0].__source)for(let i=0;i<t.length;i++)t[i].__source.index===e&&this._disablePickingIndex(i);else super.disablePickingIndex(e)}draw({uniforms:e}){const{jointRounded:t,capRounded:i,billboard:n,miterLimit:s,widthUnits:r,widthScale:a,widthMinPixels:l,widthMaxPixels:f}=this.props,d=this.state.model,u={jointType:Number(t),capType:Number(i),billboard:n,widthUnits:ne[r],widthScale:a,miterLimit:s,widthMinPixels:l,widthMaxPixels:f};d.shaderInputs.setProps({path:u}),d.draw(this.context.renderPass)}_getModel(){const e=[0,1,2,1,4,2,1,3,4,3,5,4],t=[0,0,0,-1,0,1,1,-1,1,1,1,0];return new X(this.context.device,{...this.getShaders(),id:this.props.id,bufferLayout:this.getAttributeManager().getBufferLayouts(),geometry:new oe({topology:"triangle-list",attributes:{indices:new Uint16Array(e),positions:{value:new Float32Array(t),size:2}}}),isInstanced:!0})}calculatePositions(e){const{pathTesselator:t}=this.state;e.startIndices=t.vertexStarts,e.value=t.get("positions")}calculateSegmentTypes(e){const{pathTesselator:t}=this.state;e.startIndices=t.vertexStarts,e.value=t.get("segmentTypes")}calculateWebGPUPositions(e){const{pathTesselator:t}=this.state,i=t.get("positions");if(!i){e.value=null;return}const n=t.instanceCount,s=new Float32Array(n*24),r=[-1,0,1,2];for(let a=0;a<n;a++){const l=a*24;for(let f=0;f<4;f++){const d=a+r[f],u=l+f*3;for(let h=0;h<3;h++){const v=d>=0&&d<n?i[d*3+h]:0,_=Math.fround(v);s[u+h]=_,s[u+h+12]=v-_}}}e.startIndices=t.vertexStarts,e.value=s}}Ee.defaultProps=wo;Ee.layerName="PathLayer";const xe=Mt.CLOCKWISE,gt=Mt.COUNTER_CLOCKWISE,q={};function Eo(o){if(o=o&&o.positions||o,!Array.isArray(o)&&!ArrayBuffer.isView(o))throw new Error("invalid polygon")}function fe(o){return"positions"in o?o.positions:o}function _e(o){return"holeIndices"in o?o.holeIndices:null}function To(o){return Array.isArray(o[0])}function Ro(o){return o.length>=1&&o[0].length>=2&&Number.isFinite(o[0][0])}function Oo(o){const e=o[0],t=o[o.length-1];return e[0]===t[0]&&e[1]===t[1]&&e[2]===t[2]}function zo(o,e,t,i){for(let n=0;n<e;n++)if(o[t+n]!==o[i-e+n])return!1;return!0}function ut(o,e,t,i,n){let s=e;const r=t.length;for(let a=0;a<r;a++)for(let l=0;l<i;l++)o[s++]=t[a][l]||0;if(!Oo(t))for(let a=0;a<i;a++)o[s++]=t[0][a]||0;return q.start=e,q.end=s,q.size=i,zt(o,n,q),s}function ht(o,e,t,i,n=0,s,r){s=s||t.length;const a=s-n;if(a<=0)return e;let l=e;for(let f=0;f<a;f++)o[l++]=t[n+f];if(!zo(t,i,n,s))for(let f=0;f<i;f++)o[l++]=t[n+f];return q.start=e,q.end=l,q.size=i,zt(o,r,q),l}function Jt(o,e){Eo(o);const t=[],i=[];if("positions"in o){const{positions:n,holeIndices:s}=o;if(s){let r=0;for(let a=0;a<=s.length;a++)r=ht(t,r,n,e,s[a-1],s[a],a===0?xe:gt),i.push(r);return i.pop(),{positions:t,holeIndices:i}}o=n}if(!To(o))return ht(t,0,o,e,0,t.length,xe),t;if(!Ro(o)){let n=0;for(const[s,r]of o.entries())n=ut(t,n,r,e,s===0?xe:gt),i.push(n);return i.pop(),{positions:t,holeIndices:i}}return ut(t,0,o,e,xe),t}function ze(o,e,t){const i=o.length/3;let n=0;for(let s=0;s<i;s++){const r=(s+1)%i;n+=o[s*3+e]*o[r*3+t],n-=o[r*3+e]*o[s*3+t]}return Math.abs(n/2)}function vt(o,e,t,i){const n=o.length/3;for(let s=0;s<n;s++){const r=s*3,a=o[r+0],l=o[r+1],f=o[r+2];o[r+e]=a,o[r+t]=l,o[r+i]=f}}function Mo(o,e,t,i){let n=_e(o);n&&(n=n.map(a=>a/e));let s=fe(o);const r=i&&e===3;if(t){const a=s.length;s=s.slice();const l=[];for(let f=0;f<a;f+=e){l[0]=s[f],l[1]=s[f+1],r&&(l[2]=s[f+2]);const d=t(l);s[f]=d[0],s[f+1]=d[1],r&&(s[f+2]=d[2])}}if(r){const a=ze(s,0,1),l=ze(s,0,2),f=ze(s,1,2);if(!a&&!l&&!f)return[];a>l&&a>f||(l>f?(t||(s=s.slice()),vt(s,0,2,1)):(t||(s=s.slice()),vt(s,2,0,1)))}return hi(s,n,e)}class ko extends Ot{constructor(e){const{fp64:t,IndexType:i=Uint32Array}=e;super({...e,attributes:{positions:{size:3,type:t?Float64Array:Float32Array},vertexValid:{type:Uint16Array,size:1},indices:{type:i,size:1}}})}get(e){const{attributes:t}=this;return e==="indices"?t.indices&&t.indices.subarray(0,this.vertexCount):t[e]}updateGeometry(e){super.updateGeometry(e);const t=this.buffers.indices;if(t)this.vertexCount=(t.value||t).length;else if(this.data&&!this.getGeometry)throw new Error("missing indices buffer")}normalizeGeometry(e){if(this.normalize){const t=Jt(e,this.positionSize);return this.opts.resolution?Vt(fe(t),_e(t),{size:this.positionSize,gridResolution:this.opts.resolution,edgeTypes:!0}):this.opts.wrapLongitude?ho(fe(t),_e(t),{size:this.positionSize,maxLatitude:86,edgeTypes:!0}):t}return e}getGeometrySize(e){if(xt(e)){let t=0;for(const i of e)t+=this.getGeometrySize(i);return t}return fe(e).length/this.positionSize}getGeometryFromBuffer(e){return this.normalize||!this.buffers.indices?super.getGeometryFromBuffer(e):null}updateGeometryAttributes(e,t){if(e&&xt(e))for(const i of e){const n=this.getGeometrySize(i);t.geometrySize=n,this.updateGeometryAttributes(i,t),t.vertexStart+=n,t.indexStart=this.indexStarts[t.geometryIndex+1]}else{const i=e;this._updateIndices(i,t),this._updatePositions(i,t),this._updateVertexValid(i,t)}}_updateIndices(e,{geometryIndex:t,vertexStart:i,indexStart:n}){const{attributes:s,indexStarts:r,typedArrayManager:a}=this;let l=s.indices;if(!l||!e)return;let f=n;const d=Mo(e,this.positionSize,this.opts.preproject,this.opts.full3d);l=a.allocate(l,n+d.length,{copy:!0});for(let u=0;u<d.length;u++)l[f++]=d[u]+i;r[t+1]=n+d.length,s.indices=l}_updatePositions(e,{vertexStart:t,geometrySize:i}){const{attributes:{positions:n},positionSize:s}=this;if(!n||!e)return;const r=fe(e);for(let a=t,l=0;l<i;a++,l++){const f=r[l*s],d=r[l*s+1],u=s>2?r[l*s+2]:0;n[a*3]=f,n[a*3+1]=d,n[a*3+2]=u}}_updateVertexValid(e,{vertexStart:t,geometrySize:i}){const{positionSize:n}=this,s=this.attributes.vertexValid,r=e&&_e(e);if(e&&e.edgeTypes?s.set(e.edgeTypes,t):s.fill(1,t,t+i),r)for(let a=0;a<r.length;a++)s[t+r[a]/n-1]=0;s[t+i-1]=0}}function xt(o){return Array.isArray(o)&&o.length>0&&!Number.isFinite(o[0])}const Do=`struct SolidPolygonUniforms {
  extruded: f32,
  isWireframe: f32,
  elevationScale: f32,
};

@group(0) @binding(auto) var<uniform> solidPolygon: SolidPolygonUniforms;
`,mt=`layout(std140) uniform solidPolygonUniforms {
  bool extruded;
  bool isWireframe;
  float elevationScale;
} solidPolygon;
`,Fo={name:"solidPolygon",source:Do,vs:mt,fs:mt,uniformTypes:{extruded:"f32",isWireframe:"f32",elevationScale:"f32"}},Yt=`in vec4 fillColors;
in vec4 lineColors;
in float rowIndexes;
out vec4 vColor;
struct PolygonProps {
vec3 positions;
vec3 positions64Low;
vec3 normal;
float elevations;
};
vec3 project_offset_normal(vec3 vector) {
if (project.coordinateSystem == COORDINATE_SYSTEM_LNGLAT ||
project.coordinateSystem == COORDINATE_SYSTEM_LNGLAT_OFFSETS) {
return normalize(vector * project.commonUnitsPerWorldUnit);
}
return project_normal(vector);
}
void calculatePosition(PolygonProps props) {
vec3 pos = props.positions;
vec3 pos64Low = props.positions64Low;
vec3 normal = props.normal;
vec4 colors = solidPolygon.isWireframe ? lineColors : fillColors;
geometry.worldPosition = props.positions;
geometry.pickingColor = picking_getPickingColorFromIndex(rowIndexes);
if (solidPolygon.extruded) {
pos.z += props.elevations * solidPolygon.elevationScale;
}
gl_Position = project_position_to_clipspace(pos, pos64Low, vec3(0.), geometry.position);
DECKGL_FILTER_GL_POSITION(gl_Position, geometry);
if (solidPolygon.extruded) {
#ifdef IS_SIDE_VERTEX
normal = project_offset_normal(normal);
#else
normal = project_normal(normal);
#endif
geometry.normal = normal;
vec3 lightColor = lighting_getLightColor(colors.rgb, project.cameraPosition, geometry.position.xyz, geometry.normal);
vColor = vec4(lightColor, colors.a * layer.opacity);
} else {
vColor = vec4(colors.rgb, colors.a * layer.opacity);
}
DECKGL_FILTER_COLOR(vColor, geometry);
}
`,Bo=`#version 300 es
#define SHADER_NAME solid-polygon-layer-vertex-shader
in vec3 vertexPositions;
in vec3 vertexPositions64Low;
in float elevations;
${Yt}
void main(void) {
PolygonProps props;
props.positions = vertexPositions;
props.positions64Low = vertexPositions64Low;
props.elevations = elevations;
props.normal = vec3(0.0, 0.0, 1.0);
calculatePosition(props);
}
`,No=`#version 300 es
#define SHADER_NAME solid-polygon-layer-vertex-shader-side
#define IS_SIDE_VERTEX
in vec2 positions;
in vec3 vertexPositions;
in vec3 nextVertexPositions;
in vec3 vertexPositions64Low;
in vec3 nextVertexPositions64Low;
in float elevations;
in float instanceVertexValid;
${Yt}
void main(void) {
if(instanceVertexValid < 0.5){
gl_Position = vec4(0.);
return;
}
PolygonProps props;
vec3 pos;
vec3 pos64Low;
vec3 nextPos;
vec3 nextPos64Low;
#if RING_WINDING_ORDER_CW == 1
pos = vertexPositions;
pos64Low = vertexPositions64Low;
nextPos = nextVertexPositions;
nextPos64Low = nextVertexPositions64Low;
#else
pos = nextVertexPositions;
pos64Low = nextVertexPositions64Low;
nextPos = vertexPositions;
nextPos64Low = vertexPositions64Low;
#endif
props.positions = mix(pos, nextPos, positions.x);
props.positions64Low = mix(pos64Low, nextPos64Low, positions.x);
props.normal = vec3(
pos.y - nextPos.y + (pos64Low.y - nextPos64Low.y),
nextPos.x - pos.x + (nextPos64Low.x - pos64Low.x),
0.0);
props.elevations = elevations * positions.y;
calculatePosition(props);
}
`,jo=`#version 300 es
#define SHADER_NAME solid-polygon-layer-fragment-shader
precision highp float;
in vec4 vColor;
out vec4 fragColor;
void main(void) {
fragColor = vColor;
geometry.uv = vec2(0.);
DECKGL_FILTER_COLOR(fragColor, geometry);
}
`;function Xt(){return`fn project_offset_normal(vector: vec3<f32>) -> vec3<f32> {
  if (project.coordinateSystem == COORDINATE_SYSTEM_LNGLAT ||
      project.coordinateSystem == COORDINATE_SYSTEM_LNGLAT_OFFSETS) {
    return normalize(vector * project.commonUnitsPerWorldUnit);
  }
  return project_normal(vector);
}

fn apply_polygon_color(
  colors: vec4<f32>,
  normal: vec3<f32>,
  position: vec4<f32>
) -> vec4<f32> {
  if (solidPolygon.extruded > 0.5) {
    let lightColor = lighting_getLightColor2(
      colors.rgb,
      project.cameraPosition,
      position.xyz,
      normal
    );
    return vec4<f32>(lightColor, colors.a * layer.opacity);
  }
  return vec4<f32>(colors.rgb, colors.a * layer.opacity);
}
`}function qt(){return`@fragment
fn fragmentMain(inp: Varyings) -> @location(0) vec4<f32> {
  geometry.uv = vec2<f32>(0.0, 0.0);

  clip_filterColor(inp.clipCoordinates);

  if (picking.isActive > 0.5) {
    if (!picking_isColorValid(inp.pickingColor)) {
      discard;
    }
    return vec4<f32>(inp.pickingColor, 1.0);
  }

  var fragColor = inp.vColor;

  if (picking.isHighlightActive > 0.5) {
    let highlightedObjectColor = picking_normalizeColor(picking.highlightedObjectColor);
    if (picking_isColorZero(abs(inp.pickingColor - highlightedObjectColor))) {
      let highLightAlpha = picking.highlightColor.a;
      let blendedAlpha = highLightAlpha + fragColor.a * (1.0 - highLightAlpha);
      if (blendedAlpha > 0.0) {
        let highLightRatio = highLightAlpha / blendedAlpha;
        fragColor = vec4<f32>(
          mix(fragColor.rgb, picking.highlightColor.rgb, highLightRatio),
          blendedAlpha
        );
      } else {
        fragColor = vec4<f32>(fragColor.rgb, 0.0);
      }
    }
  }

  return deckgl_premultiplied_alpha(fragColor);
}
`}function Go(){return`${Xt()}

struct Attributes {
  @location(0) vertexPositions: vec3<f32>,
  @location(1) vertexPositions64Low: vec3<f32>,
  @location(2) elevations: f32,
  @location(3) fillColors: vec4<f32>,
  @location(4) lineColors: vec4<f32>,
  @location(5) rowIndexes: u32,
};

struct Varyings {
  @builtin(position) position: vec4<f32>,
  @location(0) vColor: vec4<f32>,
  @location(1) pickingColor: vec3<f32>,
  @location(2) clipCoordinates: vec2<f32>,
};

@vertex
fn vertexMain(attributes: Attributes) -> Varyings {
  var outp: Varyings;

  var pos = attributes.vertexPositions;
  if (solidPolygon.extruded > 0.5) {
    pos.z += attributes.elevations * solidPolygon.elevationScale;
  }

  geometry.worldPosition = attributes.vertexPositions;
  geometry.pickingColor = picking_getPickingColorFromIndex(attributes.rowIndexes);

  let projectedPosition = project_position_to_clipspace_and_commonspace(
    pos,
    attributes.vertexPositions64Low,
    vec3<f32>(0.0)
  );
  geometry.position = projectedPosition.commonPosition;
  outp.position = projectedPosition.clipPosition;

  let normal = project_normal(vec3<f32>(0.0, 0.0, 1.0));
  geometry.normal = normal;

  let colors = select(
    attributes.fillColors,
    attributes.lineColors,
    solidPolygon.isWireframe > 0.5
  );
  outp.vColor = apply_polygon_color(colors, normal, geometry.position);
  outp.pickingColor = geometry.pickingColor;

  outp.clipCoordinates = geometry.position.xy;
  clip_filterPosition(&outp.position, geometry.worldPosition.xy);

  return outp;
}

${qt()}
`}function Wo(o){return`const RING_WINDING_ORDER_CW: bool = ${o?"true":"false"};

${Xt()}

struct Attributes {
  @location(0) positions: vec2<f32>,
  @location(1) vertexPositions: vec3<f32>,
  @location(2) vertexPositions64Low: vec3<f32>,
  @location(3) nextVertexPositions: vec3<f32>,
  @location(4) nextVertexPositions64Low: vec3<f32>,
  @location(5) vertexValid: f32,
  @location(6) elevations: f32,
  @location(7) fillColors: vec4<f32>,
  @location(8) lineColors: vec4<f32>,
  @location(9) rowIndexes: u32,
};

struct Varyings {
  @builtin(position) position: vec4<f32>,
  @location(0) vColor: vec4<f32>,
  @location(1) pickingColor: vec3<f32>,
  @location(2) clipCoordinates: vec2<f32>,
};

@vertex
fn vertexMain(attributes: Attributes) -> Varyings {
  var outp: Varyings;
  outp.position = vec4<f32>(0.0);
  outp.vColor = vec4<f32>(0.0);
  outp.pickingColor = picking_getPickingColorFromIndex(attributes.rowIndexes);
  outp.clipCoordinates = vec2<f32>(0.0);

  if (attributes.vertexValid < 0.5) {
    return outp;
  }

  let pos = select(attributes.nextVertexPositions, attributes.vertexPositions, RING_WINDING_ORDER_CW);
  let pos64Low = select(
    attributes.nextVertexPositions64Low,
    attributes.vertexPositions64Low,
    RING_WINDING_ORDER_CW
  );
  let nextPos = select(attributes.vertexPositions, attributes.nextVertexPositions, RING_WINDING_ORDER_CW);
  let nextPos64Low = select(
    attributes.vertexPositions64Low,
    attributes.nextVertexPositions64Low,
    RING_WINDING_ORDER_CW
  );

  let position = mix(pos, nextPos, attributes.positions.x);
  let position64Low = mix(pos64Low, nextPos64Low, attributes.positions.x);

  var worldPosition = position;
  if (solidPolygon.extruded > 0.5) {
    worldPosition.z += attributes.elevations * attributes.positions.y * solidPolygon.elevationScale;
  }

  geometry.worldPosition = position;
  geometry.pickingColor = picking_getPickingColorFromIndex(attributes.rowIndexes);

  let projectedPosition = project_position_to_clipspace_and_commonspace(
    worldPosition,
    position64Low,
    vec3<f32>(0.0)
  );
  geometry.position = projectedPosition.commonPosition;
  outp.position = projectedPosition.clipPosition;

  let normal = project_offset_normal(vec3<f32>(
    pos.y - nextPos.y + (pos64Low.y - nextPos64Low.y),
    nextPos.x - pos.x + (nextPos64Low.x - pos64Low.x),
    0.0
  ));
  geometry.normal = normal;

  let colors = select(
    attributes.fillColors,
    attributes.lineColors,
    solidPolygon.isWireframe > 0.5
  );
  outp.vColor = apply_polygon_color(colors, normal, geometry.position);
  outp.pickingColor = geometry.pickingColor;

  outp.clipCoordinates = geometry.position.xy;
  clip_filterPosition(&outp.position, geometry.worldPosition.xy);

  return outp;
}

${qt()}
`}function Uo(o,e){return o==="top"?Go():Wo(e)}const Se=[0,0,0,255],Vo={filled:!0,extruded:!1,wireframe:!1,_normalize:!0,_windingOrder:"CW",_full3d:!1,elevationScale:{type:"number",min:0,value:1},getPolygon:{type:"accessor",value:o=>o.polygon},getElevation:{type:"accessor",value:1e3},getFillColor:{type:"accessor",value:Se},getLineColor:{type:"accessor",value:Se},material:!0},me={enter:(o,e)=>e.length?e.subarray(e.length-o.length):o};class Te extends Q{getShaders(e){const t=!this.props._normalize&&this.props._windingOrder==="CCW"?0:1;return super.getShaders({vs:e==="top"?Bo:No,fs:jo,source:Uo(e,!!t),defines:{RING_WINDING_ORDER_CW:t},modules:[ee,te,Rt,ie,Fo,...this.context.device.type==="webgpu"?[We]:[]]})}get wrapLongitude(){return!1}getBounds(){var e;return(e=this.getAttributeManager())==null?void 0:e.getBounds(["vertexPositions"])}initializeState(){const{viewport:e}=this.context;let{coordinateSystem:t}=this.props;const{_full3d:i}=this.props;e.isGeospatial&&t==="default"&&(t="lnglat");let n;t==="lnglat"&&(i?n=e.projectPosition.bind(e):n=e.projectFlat.bind(e)),this.setState({numInstances:0,polygonTesselator:new ko({preproject:n,fp64:this.use64bitPositions(),IndexType:Uint32Array})});const s=this.getAttributeManager(),r=!0,a=this.context.device.type==="webgpu";s.add({indices:{size:1,isIndexed:!0,update:this.calculateIndices,noAlloc:r},vertexPositions:{size:3,type:"float64",stepMode:"dynamic",fp64:this.use64bitPositions(),transition:me,accessor:"getPolygon",update:this.calculatePositions,noAlloc:r,...a?{}:{shaderAttributes:{nextVertexPositions:{vertexOffset:1}}}},...a?{nextVertexPositions:{size:3,type:"float64",stepMode:"dynamic",fp64:this.use64bitPositions(),transition:!1,update:this.calculateNextPositions,noAlloc:r}}:{},[a?"vertexValid":"instanceVertexValid"]:{size:1,type:a?"float32":"uint16",stepMode:"instance",update:this.calculateVertexValid,noAlloc:r},elevations:{size:1,stepMode:"dynamic",transition:me,accessor:"getElevation",bufferGroup:"solid-polygon-instance-data"},fillColors:{size:this.props.colorFormat.length,type:"unorm8",stepMode:"dynamic",transition:me,accessor:"getFillColor",defaultValue:Se,bufferGroup:"solid-polygon-instance-data"},lineColors:{size:this.props.colorFormat.length,type:"unorm8",stepMode:"dynamic",transition:me,accessor:"getLineColor",defaultValue:Se,bufferGroup:"solid-polygon-instance-data"},rowIndexes:{size:1,type:"uint32",stepMode:"dynamic",accessor:(l,{index:f})=>l&&l.__source?l.__source.index:f,bufferGroup:"solid-polygon-instance-data"}})}getPickingInfo(e){const t=super.getPickingInfo(e),{index:i}=t,n=this.props.data;return n[0]&&n[0].__source&&(t.object=n.find(s=>s.__source.index===i)),t}disablePickingIndex(e){const t=this.props.data;if(t[0]&&t[0].__source)for(let i=0;i<t.length;i++)t[i].__source.index===e&&this._disablePickingIndex(i);else super.disablePickingIndex(e)}draw({uniforms:e}){const{extruded:t,filled:i,wireframe:n,elevationScale:s}=this.props,{topModel:r,sideModel:a,wireframeModel:l,polygonTesselator:f}=this.state,d={extruded:!!t,elevationScale:s,isWireframe:!1};l&&n&&(l.setInstanceCount(f.instanceCount-1),l.shaderInputs.setProps({solidPolygon:{...d,isWireframe:!0}}),l.draw(this.context.renderPass)),a&&i&&(a.setInstanceCount(f.instanceCount-1),a.shaderInputs.setProps({solidPolygon:d}),a.draw(this.context.renderPass)),r&&i&&(r.setVertexCount(f.vertexCount),r.shaderInputs.setProps({solidPolygon:d}),r.draw(this.context.renderPass))}updateState(e){var a;super.updateState(e),this.updateGeometry(e);const{props:t,oldProps:i,changeFlags:n}=e,s=this.getAttributeManager();(n.extensionsChanged||t.filled!==i.filled||t.extruded!==i.extruded)&&((a=this.state.models)==null||a.forEach(l=>l.destroy()),this.setState(this._getModels()),s.invalidateAll())}updateGeometry({props:e,oldProps:t,changeFlags:i}){if(i.dataChanged||i.updateTriggersChanged&&(i.updateTriggersChanged.all||i.updateTriggersChanged.getPolygon)){const{polygonTesselator:s}=this.state,r=e.data.attributes||{};s.updateGeometry({data:e.data,normalize:e._normalize,geometryBuffer:r.getPolygon,buffers:this.context.device.type==="webgpu"?{...r}:r,getGeometry:e.getPolygon,positionFormat:e.positionFormat,wrapLongitude:e.wrapLongitude,resolution:this.context.viewport.resolution,fp64:this.use64bitPositions(),dataChanged:i.dataChanged,full3d:e._full3d}),this.setState({numInstances:s.instanceCount,startIndices:s.vertexStarts}),i.dataChanged||this.getAttributeManager().invalidateAll()}}_getModels(){const{id:e,filled:t,extruded:i}=this.props;let n,s,r;if(t){const a=this.getShaders("top");a.defines={...a.defines,NON_INSTANCED_MODEL:1};let l=this.getAttributeManager().getBufferLayouts({isInstanced:!1});this.context.device.type==="webgpu"&&(l=l.filter(f=>f.name!=="indices"&&f.name!=="vertexValid"&&f.name!=="instanceVertexValid"&&f.name!=="nextVertexPositions")),n=new X(this.context.device,{...a,id:`${e}-top`,topology:"triangle-list",bufferLayout:l,isIndexed:!0,userData:{excludeAttributes:{vertexValid:!0,instanceVertexValid:!0,nextVertexPositions:!0}}})}if(i){let a=this.getAttributeManager().getBufferLayouts({isInstanced:!0});this.context.device.type==="webgpu"&&(a=a.filter(l=>l.name!=="indices")),s=new X(this.context.device,{...this.getShaders("side"),id:`${e}-side`,bufferLayout:a,geometry:new oe({topology:"triangle-strip",attributes:{positions:{size:2,value:new Float32Array([1,0,0,0,1,1,0,1])}}}),isInstanced:!0,userData:{excludeAttributes:{indices:!0}}}),r=new X(this.context.device,{...this.getShaders("side"),id:`${e}-wireframe`,bufferLayout:a,geometry:new oe({topology:"line-strip",attributes:{positions:{size:2,value:new Float32Array([1,0,0,0,0,1,1,1])}}}),isInstanced:!0,userData:{excludeAttributes:{indices:!0}}})}return{models:[s,r,n].filter(Boolean),topModel:n,sideModel:s,wireframeModel:r}}calculateIndices(e){const{polygonTesselator:t}=this.state;e.startIndices=t.indexStarts,e.value=t.get("indices")}calculatePositions(e){var n;const{polygonTesselator:t}=this.state;e.startIndices=t.vertexStarts;const i=(n=this.props.data.attributes)==null?void 0:n.getPolygon;if(this.context.device.type==="webgpu"&&ArrayBuffer.isView(i==null?void 0:i.value)){const{value:s,size:r=3,offset:a=0,stride:l}=i,f=a/s.BYTES_PER_ELEMENT,d=l?l/s.BYTES_PER_ELEMENT:r,u=new Float64Array(t.instanceCount*3);for(let h=0;h<t.instanceCount;h++){const v=f+h*d,_=h*3;u[_]=s[v],u[_+1]=s[v+1],u[_+2]=r>2?s[v+2]:0}e.value=u;return}e.value=t.get("positions")}calculateVertexValid(e){var n,s;const t=(s=(n=this.props.data.attributes)==null?void 0:n.instanceVertexValid)==null?void 0:s.value,i=this.context.device.type==="webgpu"&&t?t:this.state.polygonTesselator.get("vertexValid");e.value=this.context.device.type==="webgpu"&&i?Float32Array.from(i):i}calculateNextPositions(e){var l,f,d;const{polygonTesselator:t}=this.state,i=this.getAttributeManager().getAttributes(),n=i.vertexPositions.value,s=((f=(l=this.props.data.attributes)==null?void 0:l.instanceVertexValid)==null?void 0:f.value)||((d=i.vertexValid)==null?void 0:d.value)||t.get("vertexValid");if(e.startIndices=t.vertexStarts,!n){e.value=n;return}const r=n.length/3,a=new n.constructor(n.length);for(let u=0;u<r;u++){const h=u*3,v=s!=null&&s[u]&&u+1<r?h+3:h;for(let _=0;_<3;_++)a[h+_]=n[v+_]}e.value=a}}Te.defaultProps=Vo;Te.layerName="SolidPolygonLayer";function Qt({data:o,getIndex:e,dataRange:t,replace:i}){const{startRow:n=0,endRow:s=1/0}=t,r=o.length;let a=r,l=r;for(let h=0;h<r;h++){const v=e(o[h]);if(a>h&&v>=n&&(a=h),v>=s){l=h;break}}let f=a;const u=l-a!==i.length?o.slice(l):void 0;for(let h=0;h<i.length;h++)o[f++]=i[h];if(u){for(let h=0;h<u.length;h++)o[f++]=u[h];o.length=f}return{startRow:a,endRow:a+i.length}}const ei=[0,0,0,255],Ho=[0,0,0,255],$o={stroked:!0,filled:!0,extruded:!1,elevationScale:1,wireframe:!1,_normalize:!0,_windingOrder:"CW",lineWidthUnits:"meters",lineWidthScale:1,lineWidthMinPixels:0,lineWidthMaxPixels:Number.MAX_SAFE_INTEGER,lineJointRounded:!1,lineMiterLimit:4,lineAntialiasing:!1,getPolygon:{type:"accessor",value:o=>o.polygon},getFillColor:{type:"accessor",value:Ho},getLineColor:{type:"accessor",value:ei},getLineWidth:{type:"accessor",value:1},getElevation:{type:"accessor",value:1e3},material:!0};class ti extends Ge{initializeState(){this.state={paths:[],pathsDiff:null},this.props.getLineDashArray&&J.removed("getLineDashArray","PathStyleExtension")()}updateState({changeFlags:e}){const t=e.dataChanged||e.updateTriggersChanged&&(e.updateTriggersChanged.all||e.updateTriggersChanged.getPolygon);if(t&&Array.isArray(e.dataChanged)){const i=this.state.paths.slice(),n=e.dataChanged.map(s=>Qt({data:i,getIndex:r=>r.__source.index,dataRange:s,replace:this._getPaths(s)}));this.setState({paths:i,pathsDiff:n})}else t&&this.setState({paths:this._getPaths(),pathsDiff:null})}_getPaths(e={}){const{data:t,getPolygon:i,positionFormat:n,_normalize:s}=this.props,r=[],a=n==="XY"?2:3,{startRow:l,endRow:f}=e,{iterable:d,objectInfo:u}=we(t,l,f);for(const h of d){u.index++;let v=i(h,u);s&&(v=Jt(v,a));const{holeIndices:_}=v,C=v.positions||v;if(_)for(let L=0;L<=_.length;L++){const S=C.slice(_[L-1]||0,_[L]||C.length);r.push(this.getSubLayerRow({path:S},h,u.index))}else r.push(this.getSubLayerRow({path:C},h,u.index))}return r}renderLayers(){const{data:e,_dataDiff:t,stroked:i,filled:n,extruded:s,wireframe:r,_normalize:a,_windingOrder:l,elevationScale:f,transitions:d,positionFormat:u}=this.props,{lineWidthUnits:h,lineWidthScale:v,lineWidthMinPixels:_,lineWidthMaxPixels:C,lineJointRounded:L,lineMiterLimit:S,lineAntialiasing:M,lineDashJustified:I}=this.props,{getFillColor:T,getLineColor:E,getLineWidth:j,getLineDashArray:G,getElevation:H,getPolygon:F,updateTriggers:N,material:$}=this.props,{paths:U,pathsDiff:W}=this.state,Z=this.getSubLayerClass("fill",Te),Y=this.getSubLayerClass("stroke",Ee),c=this.shouldRenderSubLayer("fill",U)&&new Z({_dataDiff:t,extruded:s,elevationScale:f,filled:n,wireframe:r,_normalize:a,_windingOrder:l,getElevation:H,getFillColor:T,getLineColor:s&&r?E:ei,material:$,transitions:d},this.getSubLayerProps({id:"fill",updateTriggers:N&&{getPolygon:N.getPolygon,getElevation:N.getElevation,getFillColor:N.getFillColor,lineColors:s&&r,getLineColor:N.getLineColor}}),{data:e,positionFormat:u,getPolygon:F}),g=!s&&i&&this.shouldRenderSubLayer("stroke",U)&&new Y({_dataDiff:W&&(()=>W),widthUnits:h,widthScale:v,widthMinPixels:_,widthMaxPixels:C,jointRounded:L,miterLimit:S,antialiasing:M,dashJustified:I,_pathType:"loop",transitions:d&&{getWidth:d.getLineWidth,getColor:d.getLineColor,getPath:d.getPolygon},getColor:this.getSubLayerAccessor(E),getWidth:this.getSubLayerAccessor(j),getDashArray:this.getSubLayerAccessor(G)},this.getSubLayerProps({id:"stroke",updateTriggers:N&&{getWidth:N.getLineWidth,getColor:N.getLineColor,getDashArray:N.getLineDashArray}}),{data:U,positionFormat:u,getPath:p=>p.path});return[!s&&c,g,s&&c]}}ti.layerName="PolygonLayer";ti.defaultProps=$o;function Zo(o,e){if(!o)return null;const t="startIndices"in o?o.startIndices[e]:e,i=o.featureIds.value[t];return t!==-1?Ko(o,i,t):null}function Ko(o,e,t){const i={properties:{...o.properties[e]}};for(const n in o.numericProps)i.properties[n]=o.numericProps[n].value[t];return i}function Jo(o){const e={points:null,lines:null,polygons:null};for(const t in e){const i=o[t].globalFeatureIds.value;e[t]=new Uint32Array(i)}return e}const yt=`layout(std140) uniform sdfUniforms {
  float gamma;
  bool enabled;
  float buffer;
  float outlineBuffer;
  vec4 outlineColor;
} sdf;
`,Yo={name:"sdf",vs:yt,fs:yt,uniformTypes:{gamma:"f32",enabled:"f32",buffer:"f32",outlineBuffer:"f32",outlineColor:"vec4<f32>"}},de={none:0,start:1,center:2,end:3},Xo=`layout(std140) uniform textUniforms {
  highp vec2 cutoffPixels;
  highp ivec2 align;
  highp float fontSize;
  bool flipY;
} text;

#define ALIGN_MODE_START ${de.start}
#define ALIGN_MODE_CENTER ${de.center}
#define ALIGN_MODE_END ${de.end}
`,ii={name:"text",vs:Xo,getUniforms:({contentCutoffPixels:o=[0,0],contentAlignHorizontal:e="none",contentAlignVertical:t="none",fontSize:i,viewport:n})=>({cutoffPixels:o,align:[de[e],de[t]],fontSize:i,flipY:(n==null?void 0:n.flipY)??!1}),uniformTypes:{cutoffPixels:"vec2<f32>",align:"vec2<i32>",fontSize:"f32",flipY:"f32"}},qo=`#version 300 es
#define SHADER_NAME multi-icon-layer-vertex-shader
in vec2 positions;
in vec3 instancePositions;
in vec3 instancePositions64Low;
in float instanceSizes;
in float instanceAngles;
in vec4 instanceColors;
in float rowIndexes;
in vec4 instanceIconFrames;
in float instanceColorModes;
in vec2 instanceOffsets;
in vec2 instancePixelOffset;
in vec4 instanceClipRect;
out float vColorMode;
out vec4 vColor;
out vec2 vTextureCoords;
out vec2 uv;
vec2 rotate_by_angle(vec2 vertex, float angle) {
float angle_radian = angle * PI / 180.0;
float cos_angle = cos(angle_radian);
float sin_angle = sin(angle_radian);
mat2 rotationMatrix = mat2(cos_angle, -sin_angle, sin_angle, cos_angle);
return rotationMatrix * vertex;
}
float getPixelOffsetFromAlignment(float anchor, float extent, float clipStart, float clipEnd, int mode) {
if (clipEnd < clipStart) return 0.0;
if (mode == ALIGN_MODE_START) {
return max(- (anchor + clipStart), 0.0);
}
if (mode == ALIGN_MODE_CENTER) {
float _min = max(0., anchor + clipStart);
float _max = min(extent, anchor + clipEnd);
return _min < _max ? (_min + _max) / 2.0 - anchor : 0.0;
}
if (mode == ALIGN_MODE_END) {
return min(extent - (anchor + clipEnd), 0.);
}
return 0.0;
}
void main(void) {
geometry.worldPosition = instancePositions;
geometry.uv = positions;
geometry.pickingColor = picking_getPickingColorFromIndex(rowIndexes);
uv = positions;
vec2 iconSize = instanceIconFrames.zw;
float sizePixels = clamp(
project_size_to_pixel(instanceSizes * icon.sizeScale, icon.sizeUnits),
icon.sizeMinPixels, icon.sizeMaxPixels
);
float instanceScale = sizePixels / text.fontSize;
vec2 pixelOffset = positions / 2.0 * iconSize + instanceOffsets;
pixelOffset = rotate_by_angle(pixelOffset, instanceAngles) * instanceScale;
pixelOffset += instancePixelOffset;
pixelOffset.y *= -1.0;
vec2 anchorPosScreen;
if (icon.billboard)  {
gl_Position = project_position_to_clipspace(instancePositions, instancePositions64Low, vec3(0.0), geometry.position);
anchorPosScreen = gl_Position.xy / gl_Position.w;
DECKGL_FILTER_GL_POSITION(gl_Position, geometry);
vec3 offset = vec3(pixelOffset, 0.0);
DECKGL_FILTER_SIZE(offset, geometry);
gl_Position.xy += project_pixel_size_to_clipspace(offset.xy);
} else {
vec3 offset_common = vec3(project_pixel_size(pixelOffset), 0.0);
if (text.flipY) {
offset_common.y *= -1.;
}
DECKGL_FILTER_SIZE(offset_common, geometry);
vec4 anchorPos = project_position_to_clipspace(instancePositions, instancePositions64Low, vec3(0.0));
anchorPosScreen = anchorPos.xy / anchorPos.w;
gl_Position = project_position_to_clipspace(instancePositions, instancePositions64Low, offset_common, geometry.position);
DECKGL_FILTER_GL_POSITION(gl_Position, geometry);
}
anchorPosScreen = vec2(anchorPosScreen.x + 1.0, 1.0 - anchorPosScreen.y) / 2.0 * project.viewportSize / project.devicePixelRatio;
vec2 xy = project_size_to_pixel(instanceClipRect.xy);
vec2 wh = project_size_to_pixel(instanceClipRect.zw);
if (text.flipY) {
xy.y = -xy.y - wh.y;
}
if (text.align.x > 0 || text.align.y > 0) {
vec2 viewportPixels = project.viewportSize / project.devicePixelRatio;
vec2 scrollPixels = vec2(
getPixelOffsetFromAlignment(anchorPosScreen.x, viewportPixels.x, xy.x, xy.x + wh.x, text.align.x),
-getPixelOffsetFromAlignment(anchorPosScreen.y, viewportPixels.y, -xy.y - wh.y, -xy.y, text.align.y)
);
pixelOffset += scrollPixels;
gl_Position.xy += project_pixel_size_to_clipspace(scrollPixels);
}
if (instanceClipRect.z >= 0.) {
if (pixelOffset.x < xy.x || pixelOffset.x > xy.x + wh.x) {
gl_Position = vec4(0.0);
}
else if (text.cutoffPixels.x > 0.) {
float vpWidth = project.viewportSize.x / project.devicePixelRatio;
float l = max(anchorPosScreen.x + xy.x, 0.0);
float r = min(anchorPosScreen.x + xy.x + wh.x, vpWidth);
if (r - l < text.cutoffPixels.x) {
gl_Position = vec4(0.0);
}
}
}
if (instanceClipRect.w >= 0.) {
if (pixelOffset.y < xy.y || pixelOffset.y > xy.y + wh.y) {
gl_Position = vec4(0.0);
}
else if (text.cutoffPixels.y > 0.) {
float vpHeight = project.viewportSize.y / project.devicePixelRatio;
float t = max(anchorPosScreen.y - xy.y - wh.y, 0.0);
float b = min(anchorPosScreen.y - xy.y, vpHeight);
if (b - t < text.cutoffPixels.y) {
gl_Position = vec4(0.0);
}
}
}
vTextureCoords = mix(
instanceIconFrames.xy,
instanceIconFrames.xy + iconSize,
(positions.xy + 1.0) / 2.0
) / icon.iconsTextureDim;
vColor = instanceColors;
DECKGL_FILTER_COLOR(vColor, geometry);
vColorMode = instanceColorModes;
}
`,Qo=`#version 300 es
#define SHADER_NAME multi-icon-layer-fragment-shader
precision highp float;
uniform sampler2D iconsTexture;
in vec4 vColor;
in vec2 vTextureCoords;
in vec2 uv;
out vec4 fragColor;
void main(void) {
geometry.uv = uv;
if (!bool(picking.isActive)) {
float alpha = texture(iconsTexture, vTextureCoords).a;
vec4 color = vColor;
if (sdf.enabled) {
float distance = alpha;
alpha = smoothstep(sdf.buffer - sdf.gamma, sdf.buffer + sdf.gamma, distance);
if (sdf.outlineBuffer > 0.0) {
float inFill = alpha;
float inBorder = smoothstep(sdf.outlineBuffer - sdf.gamma, sdf.outlineBuffer + sdf.gamma, distance);
color = mix(sdf.outlineColor, vColor, inFill);
alpha = inBorder;
}
}
float a = alpha * color.a;
if (a < icon.alphaCutoff) {
discard;
}
fragColor = vec4(color.rgb, a * layer.opacity);
}
DECKGL_FILTER_COLOR(fragColor, geometry);
}
`;function en({collision:o=!1}={}){return`struct IconUniforms {
  sizeScale: f32,
  iconsTextureDim: vec2<f32>,
  sizeBasis: f32,
  sizeMinPixels: f32,
  sizeMaxPixels: f32,
  billboard: i32,
  sizeUnits: i32,
  alphaCutoff: f32
};

struct TextUniforms {
  cutoffPixels: vec2<f32>,
  align: vec2<i32>,
  fontSize: f32,
  flipY: f32
};

struct SdfUniforms {
  gamma: f32,
  enabled: f32,
  buffer: f32,
  outlineBuffer: f32,
  outlineColor: vec4<f32>
};

${o?`struct CollisionUniforms {
  sort: i32,
  enabled: i32
};
`:""}

const ALIGN_MODE_START: i32 = 1;
const ALIGN_MODE_CENTER: i32 = 2;
const ALIGN_MODE_END: i32 = 3;

@group(0) @binding(auto) var<uniform> icon: IconUniforms;
@group(0) @binding(auto) var<uniform> text: TextUniforms;
@group(0) @binding(auto) var<uniform> sdf: SdfUniforms;
${o?"@group(0) @binding(auto) var<uniform> collision: CollisionUniforms;":""}
@group(0) @binding(auto) var iconsTexture : texture_2d<f32>;
@group(0) @binding(auto) var iconsTextureSampler : sampler;
${o?`@group(0) @binding(auto) var collision_texture : texture_2d<f32>;
`:""}

fn rotate_by_angle(vertex: vec2<f32>, angle_deg: f32) -> vec2<f32> {
  let angle_radian = angle_deg * PI / 180.0;
  let c = cos(angle_radian);
  let s = sin(angle_radian);
  let rotation = mat2x2<f32>(vec2<f32>(c, -s), vec2<f32>(s, c));
  return rotation * vertex;
}

fn get_pixel_offset_from_alignment(
  anchor: f32,
  extent: f32,
  clipStart: f32,
  clipEnd: f32,
  mode: i32
) -> f32 {
  if (clipEnd < clipStart) {
    return 0.0;
  }
  if (mode == ALIGN_MODE_START) {
    return max(-(anchor + clipStart), 0.0);
  }
  if (mode == ALIGN_MODE_CENTER) {
    let minValue = max(0.0, anchor + clipStart);
    let maxValue = min(extent, anchor + clipEnd);
    if (minValue < maxValue) {
      return (minValue + maxValue) / 2.0 - anchor;
    }
    return 0.0;
  }
  if (mode == ALIGN_MODE_END) {
    return min(extent - (anchor + clipEnd), 0.0);
  }
  return 0.0;
}

${o?`fn collision_match(texCoords: vec2<f32>, pickingColor: vec3<f32>) -> f32 {
  let textureSize = vec2<i32>(textureDimensions(collision_texture));
  let pixelCoords = clamp(
    vec2<i32>(texCoords * vec2<f32>(textureSize)),
    vec2<i32>(0),
    textureSize - vec2<i32>(1)
  );
  let collisionPickingColor = textureLoad(collision_texture, pixelCoords, 0);
  let delta = dot(abs(collisionPickingColor.rgb - pickingColor), vec3<f32>(1.0));
  return step(delta, 0.001);
}

fn collision_is_visible(texCoords: vec2<f32>, pickingColor: vec3<f32>) -> f32 {
  if (collision.enabled == 0) {
    return 1.0;
  }

  var accumulator = 0.0;
  let stepSize = vec2<f32>(1.0) / project.viewportSize;

  for (var i: i32 = -2; i <= 2; i = i + 1) {
    for (var j: i32 = -2; j <= 2; j = j + 1) {
      let delta = vec2<f32>(f32(j), f32(i)) * stepSize;
      accumulator = accumulator + collision_match(texCoords + delta, pickingColor);
    }
  }

  return pow(accumulator / 25.0, 2.2);
}
`:""}

struct Attributes {
  @location(0) positions: vec2<f32>,

  @location(1) instancePositions: vec3<f32>,
  @location(2) instancePositions64Low: vec3<f32>,
  @location(3) instanceSizes: f32,
  @location(4) instanceAngles: f32,
  @location(5) instanceColors: vec4<f32>,
  @location(6) instanceIconFrames: vec4<f32>,
  @location(7) instanceColorModes: f32,
  @location(8) instanceOffsets: vec2<f32>,
  @location(9) instancePixelOffset: vec2<f32>,
  @location(10) rowIndexes: u32,
  @location(11) instanceClipRect: vec4<f32>,
  ${o?"@location(12) collisionPriorities: f32,":""}
};

struct Varyings {
  @builtin(position) position: vec4<f32>,

  @location(0) vColorMode: f32,
  @location(1) vColor: vec4<f32>,
  @location(2) vTextureCoords: vec2<f32>,
  @location(3) uv: vec2<f32>,
  @location(4) pickingColor: vec3<f32>,
};

@vertex
fn vertexMain(inp: Attributes) -> Varyings {
  geometry.worldPosition = inp.instancePositions;
  geometry.uv = inp.positions;
  geometry.pickingColor = picking_getPickingColorFromIndex(inp.rowIndexes);

  var outp: Varyings;
  outp.uv = inp.positions;

  let iconSize = inp.instanceIconFrames.zw;

  let sizePixels = clamp(
    project_unit_size_to_pixel(inp.instanceSizes * icon.sizeScale, icon.sizeUnits),
    icon.sizeMinPixels, icon.sizeMaxPixels
  );
  let instanceScale = sizePixels / text.fontSize;

  var pixelOffset = inp.positions / 2.0 * iconSize + inp.instanceOffsets;
  pixelOffset = rotate_by_angle(pixelOffset, inp.instanceAngles) * instanceScale;
  pixelOffset = pixelOffset + inp.instancePixelOffset;
  pixelOffset.y = pixelOffset.y * -1.0;

  var pos: vec4<f32>;
  var anchorPosScreen: vec2<f32>;
  if (icon.billboard != 0) {
    pos = project_position_to_clipspace(inp.instancePositions, inp.instancePositions64Low, vec3<f32>(0.0));
    anchorPosScreen = pos.xy / pos.w;

    let clipOffset = project_pixel_size_to_clipspace(pixelOffset);
    pos = vec4<f32>(pos.x + clipOffset.x, pos.y + clipOffset.y, pos.z, pos.w);
  } else {
    var offsetCommon = vec3<f32>(project_pixel_size_vec2(pixelOffset), 0.0);
    if (text.flipY > 0.5) {
      offsetCommon.y = offsetCommon.y * -1.0;
    }
    let anchorPos = project_position_to_clipspace(inp.instancePositions, inp.instancePositions64Low, vec3<f32>(0.0));
    anchorPosScreen = anchorPos.xy / anchorPos.w;
    pos = project_position_to_clipspace(inp.instancePositions, inp.instancePositions64Low, offsetCommon);
  }

  anchorPosScreen = vec2<f32>(anchorPosScreen.x + 1.0, 1.0 - anchorPosScreen.y) / 2.0 *
    project.viewportSize / project.devicePixelRatio;
  var xy = project_size_vec2(inp.instanceClipRect.xy) * project.scale;
  var wh = project_size_vec2(inp.instanceClipRect.zw) * project.scale;

  if (text.flipY > 0.5) {
    xy.y = -xy.y - wh.y;
  }
  if (text.align.x > 0 || text.align.y > 0) {
    let viewportPixels = project.viewportSize / project.devicePixelRatio;
    let scrollPixels = vec2<f32>(
      get_pixel_offset_from_alignment(anchorPosScreen.x, viewportPixels.x, xy.x, xy.x + wh.x, text.align.x),
      -get_pixel_offset_from_alignment(anchorPosScreen.y, viewportPixels.y, -xy.y - wh.y, -xy.y, text.align.y)
    );
    pixelOffset = pixelOffset + scrollPixels;
    let scrollClipOffset = project_pixel_size_to_clipspace(scrollPixels);
    pos.x = pos.x + scrollClipOffset.x;
    pos.y = pos.y + scrollClipOffset.y;
  }

  if (inp.instanceClipRect.z >= 0.0) {
    if (pixelOffset.x < xy.x || pixelOffset.x > xy.x + wh.x) {
      pos = vec4<f32>(0.0);
    } else if (text.cutoffPixels.x > 0.0) {
      let viewportWidth = project.viewportSize.x / project.devicePixelRatio;
      let left = max(anchorPosScreen.x + xy.x, 0.0);
      let right = min(anchorPosScreen.x + xy.x + wh.x, viewportWidth);
      if (right - left < text.cutoffPixels.x) {
        pos = vec4<f32>(0.0);
      }
    }
  }
  if (inp.instanceClipRect.w >= 0.0) {
    if (pixelOffset.y < xy.y || pixelOffset.y > xy.y + wh.y) {
      pos = vec4<f32>(0.0);
    } else if (text.cutoffPixels.y > 0.0) {
      let viewportHeight = project.viewportSize.y / project.devicePixelRatio;
      let top = max(anchorPosScreen.y - xy.y - wh.y, 0.0);
      let bottom = min(anchorPosScreen.y - xy.y, viewportHeight);
      if (bottom - top < text.cutoffPixels.y) {
        pos = vec4<f32>(0.0);
      }
    }
  }

  ${o?`  if (collision.sort != 0) {
    pos.z = -0.001 * inp.collisionPriorities * pos.w;
  }
  `:""}

  let uvMix = (inp.positions.xy + vec2<f32>(1.0, 1.0)) * 0.5;
  outp.vTextureCoords = mix(inp.instanceIconFrames.xy, inp.instanceIconFrames.xy + iconSize, uvMix) / icon.iconsTextureDim;

  outp.position = pos;
  outp.vColor = inp.instanceColors;
  outp.vColorMode = inp.instanceColorModes;
  outp.pickingColor = picking_getPickingColorFromIndex(inp.rowIndexes);

  return outp;
}

@fragment
fn fragmentMain(inp: Varyings) -> @location(0) vec4<f32> {
  geometry.uv = inp.uv;

  let texColor = textureSample(iconsTexture, iconsTextureSampler, inp.vTextureCoords);
  var alpha = texColor.a;
  var color = inp.vColor;

  if (sdf.enabled > 0.5) {
    let distance = alpha;
    alpha = smoothstep(sdf.buffer - sdf.gamma, sdf.buffer + sdf.gamma, distance);

    if (sdf.outlineBuffer > 0.0) {
      let inFill = alpha;
      let inBorder = smoothstep(sdf.outlineBuffer - sdf.gamma, sdf.outlineBuffer + sdf.gamma, distance);
      color = mix(sdf.outlineColor, inp.vColor, inFill);
      alpha = inBorder;
    }
  } else if (inp.vColorMode == 0.0) {
    color = texColor;
  }

  var a = alpha * color.a * layer.opacity;
  if (a < icon.alphaCutoff) {
    discard;
  }

  if (picking.isActive > 0.5) {
    if (!picking_isColorValid(inp.pickingColor)) {
      discard;
    }
    return vec4<f32>(inp.pickingColor, 1.0);
  }

  ${o?`  let collisionFade = collision_is_visible(inp.position.xy / project.viewportSize, inp.pickingColor);
  a = a * collisionFade;
  if (a <= 0.0001) {
    discard;
  }
  `:""}

  var fragColor = deckgl_premultiplied_alpha(vec4<f32>(color.rgb, a));

  if (picking.isHighlightActive > 0.5) {
    let highlightedObjectColor = picking_normalizeColor(picking.highlightedObjectColor);
    if (picking_isColorZero(abs(inp.pickingColor - highlightedObjectColor))) {
      let highLightAlpha = picking.highlightColor.a;
      let blendedAlpha = highLightAlpha + fragColor.a * (1.0 - highLightAlpha);
      if (blendedAlpha > 0.0) {
        let highLightRatio = highLightAlpha / blendedAlpha;
        fragColor = vec4<f32>(
          mix(fragColor.rgb, picking.highlightColor.rgb, highLightRatio),
          blendedAlpha
        );
      } else {
        fragColor = vec4<f32>(fragColor.rgb, 0.0);
      }
    }
  }

  return fragColor;
}
`}const tn=en(),Me=192/256,on={getIconOffsets:{type:"accessor",value:o=>o.offsets},getContentBox:{type:"accessor",value:[0,0,-1,-1]},fontSize:1,alphaCutoff:.001,smoothing:.1,outlineWidth:0,outlineColor:{type:"color",value:[0,0,0,255]},contentCutoffPixels:{type:"array",value:[0,0]},contentAlignHorizontal:"none",contentAlignVertical:"none"};class Ve extends Ie{getShaders(){const e=super.getShaders();return{...e,modules:[...e.modules,ii,Yo],vs:qo,fs:Qo,source:tn}}initializeState(){super.initializeState();const e=this.getAttributeManager(),t=e.attributes.instanceIconDefs;t.settings.update=this.calculateInstanceIconDefs,e.addInstanced({rowIndexes:{type:"uint32",size:1,bufferGroup:"icon-instance-data",accessor:(i,{index:n})=>n},instanceClipRect:{size:4,bufferGroup:"icon-instance-data",accessor:"getContentBox",defaultValue:[0,0,-1,-1]}})}updateState(e){var r;super.updateState(e);const{props:t,oldProps:i,changeFlags:n}=e,{outlineColor:s}=t;if(n.extensionsChanged){(r=this.state.fillModel)==null||r.destroy();const a=this.context.device.type==="webgpu"?this._getModel(`${this.props.id}-fill`):void 0;this.setState({fillModel:a,models:a?[this.state.model,a]:[this.state.model]})}if(n.updateTriggersChanged&&(n.updateTriggersChanged.getIcon||n.updateTriggersChanged.getIconOffsets)&&this.getAttributeManager().invalidate("instanceIconDefs"),s!==i.outlineColor){const a=[s[0]/255,s[1]/255,s[2]/255,(s[3]??255)/255];this.setState({outlineColor:a})}!t.sdf&&t.outlineWidth&&J.warn(`${this.id}: fontSettings.sdf is required to render outline`)()}draw(e){const{sdf:t,smoothing:i,fontSize:n,outlineWidth:s,contentCutoffPixels:r,contentAlignHorizontal:a,contentAlignVertical:l}=this.props,{outlineColor:f}=this.state,d=s?Math.max(i,Me*(1-s)):-1,u=this.state.model,h={buffer:Me,outlineBuffer:d,gamma:i,enabled:!!t,outlineColor:f},v={contentCutoffPixels:r,contentAlignHorizontal:a,contentAlignVertical:l,fontSize:n,viewport:this.context.viewport};if(u.shaderInputs.setProps({sdf:h,text:v}),super.draw(e),t&&s){const{iconManager:_}=this.state;if(_.getTexture()){const L=this.state.fillModel||u;L.shaderInputs.setProps({sdf:{...h,outlineBuffer:Me},text:v}),this._drawModel(L)}}}calculateInstanceIconDefs(e,{startRow:t,endRow:i}){const{data:n,getIcon:s,getIconOffsets:r}=this.props;let a=e.getVertexOffset(t);const l=e.value,{iterable:f,objectInfo:d}=we(n,t,i);for(const u of f){d.index++;const h=s(u,d),v=r(u,d);if(h){let _=0;for(const C of Array.from(h)){const L=super.getInstanceIconDef(C);L[0]=v[_*2],L[1]+=v[_*2+1],L[6]=1,l.set(L,a),a+=e.size,_++}}}}}Ve.defaultProps=on;Ve.layerName="MultiIconLayer";const pe=1e20,He=new Float64Array(256);for(let o=0;o<256;o++){const e=.5-Math.pow(o/255,.45454545454545453);He[o]=e*Math.abs(e)}He[255]=-pe;class nn{constructor({fontSize:e=24,buffer:t=3,radius:i=8,cutoff:n=.25,fontFamily:s="sans-serif",fontWeight:r="normal",fontStyle:a="normal",lang:l=null}={}){this.buffer=t,this.radius=i,this.cutoff=n,this.lang=l;const f=this.size=e+t*4,d=this._createCanvas(f),u=this.ctx=d.getContext("2d",{willReadFrequently:!0});u.font=`${a} ${r} ${e}px ${s}`,u.textBaseline="alphabetic",u.textAlign="left",u.fillStyle="black",this.gridOuter=new Float64Array(f*f),this.gridInner=new Float64Array(f*f),this.f=new Float64Array(f),this.z=new Float64Array(f+1),this.v=new Uint16Array(f)}_createCanvas(e){if(typeof OffscreenCanvas<"u")return new OffscreenCanvas(e,e);const t=document.createElement("canvas");return t.width=t.height=e,t}draw(e){const{width:t,actualBoundingBoxAscent:i,actualBoundingBoxDescent:n,actualBoundingBoxLeft:s,actualBoundingBoxRight:r}=this.ctx.measureText(e),a=Math.ceil(i),l=Math.floor(-s),f=Math.max(0,Math.min(this.size-this.buffer,Math.ceil(r)-l)),d=Math.max(0,Math.min(this.size-this.buffer,a+Math.ceil(n))),u=f+2*this.buffer,h=d+2*this.buffer,v=Math.max(u*h,0),_=new Uint8ClampedArray(v),C={data:_,width:u,height:h,glyphWidth:f,glyphHeight:d,glyphTop:a,glyphLeft:l,glyphAdvance:t};if(f===0||d===0)return C;const{ctx:L,buffer:S,gridInner:M,gridOuter:I}=this;this.lang&&(L.lang=this.lang),L.clearRect(S,S,f,d),L.fillText(e,S-l,S+a);const T=L.getImageData(S,S,f,d);I.fill(pe,0,v),M.fill(0,0,v);let E=3;for(let F=0;F<d;F++){let N=(F+S)*u+S;for(let $=0;$<f;$++,E+=4,N++){const U=T.data[E];if(U===0)continue;const W=He[U];I[N]=Math.max(0,W),M[N]=Math.max(0,-W)}}Pt(I,0,0,u,h,u,this.f,this.v,this.z);const j=Math.min(S,1);Pt(M,S-j,S-j,f+2*j,d+2*j,u,this.f,this.v,this.z);const G=255/this.radius,H=255*(1-this.cutoff);for(let F=0;F<v;F++){const N=Math.sqrt(I[F])-Math.sqrt(M[F]);_[F]=Math.round(H-G*N)}return C}}function Pt(o,e,t,i,n,s,r,a,l){for(let f=e;f<e+i;f++)_t(o,t*s+f,s,n,r,a,l);for(let f=t;f<t+n;f++)_t(o,f*s+e,1,i,r,a,l)}function _t(o,e,t,i,n,s,r){s[0]=0,r[0]=-pe,r[1]=pe,n[0]=o[e];for(let a=1,l=0,f=0;a<i;a++){n[a]=o[e+a*t];const d=a*a;do{const u=s[l];f=(n[a]-n[u]+d-u*u)/(a-u)/2}while(f<=r[l]&&--l>-1);l++,s[l]=a,r[l]=f,r[l+1]=pe}for(let a=0,l=0;a<i;a++){for(;r[l+1]<a;)l++;const f=s[l],d=a-f;o[e+a*t]=n[f]+d*d}}const sn=32,rn=[];function an(o){return Math.pow(2,Math.ceil(Math.log2(o)))}function ln({characterSet:o,measureText:e,buffer:t,maxCanvasWidth:i,mapping:n={},xOffset:s=0,yOffsetMin:r=0,yOffsetMax:a=0}){let l=s,f=r,d=a;for(const u of o)if(!n[u]){const{advance:h,width:v,ascent:_,descent:C}=e(u),L=_+C;l+v+t*2>i&&(l=0,f=d),n[u]={x:l+t,y:f+t,width:v,height:L,advance:h,anchorX:v/2,anchorY:_},l+=v+t*2,d=Math.max(d,f+L+t*2)}return{mapping:n,xOffset:l,yOffsetMin:f,yOffsetMax:d,canvasHeight:an(d)}}function oi(o,e,t,i){var s;let n=0;for(let r=e;r<t;r++){const a=o[r];n+=((s=i[a])==null?void 0:s.advance)||0}return n}function ni(o,e,t,i,n,s){let r=e,a=0;for(let l=e;l<t;l++){const f=oi(o,l,l+1,n);a+f>i&&(r<l&&s.push(l),r=l,a=0),a+=f}return a}function cn(o,e,t,i,n,s){let r=e,a=e,l=e,f=0;for(let d=e;d<t;d++)if((o[d]===" "||o[d+1]===" "||d+1===t)&&(l=d+1),l>a){let u=oi(o,a,l,n);f+u>i&&(r<a&&(s.push(a),r=a,f=0),u>i&&(u=ni(o,a,l,i,n,s),r=s[s.length-1])),a=l,f+=u}return f}function fn(o,e,t,i,n=0,s){s===void 0&&(s=o.length);const r=[];return e==="break-all"?ni(o,n,s,t,i,r):cn(o,n,s,t,i,r),r}function dn(o,e,t,i,n,s){let r=0,a=0;for(let l=e;l<t;l++){const f=o[l],d=i[f];d&&(a=Math.max(a,d.height))}for(let l=e;l<t;l++){const f=o[l],d=i[f];d?(n[l]=r+d.anchorX,r+=d.advance):(J.warn(`Missing character: ${f} (${f.codePointAt(0)})`)(),n[l]=r,r+=sn)}s[0]=r,s[1]=a}function pn(o,e,t,i,n,s){const r=Array.from(o),a=r.length,l=new Array(a),f=new Array(a),d=new Array(a),u=(i==="break-word"||i==="break-all")&&isFinite(n)&&n>0,h=[0,0],v=[0,0];let _=0,C=e+t/2,L=0,S=0;for(let M=0;M<=a;M++){const I=r[M];if((I===`
`||M===a)&&(S=M),S>L){const T=u?fn(r,i,n,s,L,S):rn;for(let E=0;E<=T.length;E++){const j=E===0?L:T[E-1],G=E<T.length?T[E]:S;dn(r,j,G,s,l,v);for(let H=j;H<G;H++)f[H]=C,d[H]=v[0];_++,C+=t,h[0]=Math.max(h[0],v[0])}L=S}I===`
`&&(l[L]=0,f[L]=0,d[L]=0,L++)}return h[1]=_*t,{x:l,y:f,rowWidth:d,size:h}}function gn({value:o,length:e,stride:t,offset:i,startIndices:n,characterSet:s}){const r=o.BYTES_PER_ELEMENT,a=t?t/r:1,l=i?i/r:0,f=n[e]||Math.ceil((o.length-l)/a),d=s&&new Set,u=new Array(e);let h=o;if(a>1||l>0){const v=o.constructor;h=new v(f);for(let _=0;_<f;_++)h[_]=o[_*a+l]}for(let v=0;v<e;v++){const _=n[v],C=n[v+1]||f,L=h.subarray(_,C);u[v]=String.fromCodePoint.apply(null,L),d&&L.forEach(d.add,d)}if(d)for(const v of d)s.add(String.fromCodePoint(v));return{texts:u,characterCount:f}}class si{constructor(e=5){this._cache={},this._order=[],this.limit=e}get(e){const t=this._cache[e];return t&&(this._deleteOrder(e),this._appendOrder(e)),t}set(e,t){this._cache[e]?(this.delete(e),this._cache[e]=t,this._appendOrder(e)):(Object.keys(this._cache).length===this.limit&&this.delete(this._order[0]),this._cache[e]=t,this._appendOrder(e))}delete(e){this._cache[e]&&(delete this._cache[e],this._deleteOrder(e))}_deleteOrder(e){const t=this._order.indexOf(e);t>=0&&this._order.splice(t,1)}_appendOrder(e){this._order.push(e)}}function un(){const o=[];for(let e=32;e<128;e++)o.push(String.fromCharCode(e));return o}const se={fontFamily:"Monaco, monospace",fontWeight:"normal",characterSet:un(),fontSize:64,buffer:4,sdf:!1,cutoff:.25,radius:12,smoothing:.1},Ct=1024,bt=.9,Lt=.3,ri=3;let Ae=new si(ri);function hn(o,e){let t;typeof e=="string"?t=new Set(Array.from(e)):t=new Set(e);const i=Ae.get(o);if(!i)return t;for(const n in i.mapping)t.has(n)&&t.delete(n);return t}function vn(o,e){for(let t=0;t<o.length;t++)e.data[4*t+3]=o[t]}function St(o,e,t,i){o.font=`${i} ${t}px ${e}`,o.fillStyle="#000",o.textBaseline="alphabetic",o.textAlign="left"}function xn(o,e,t){if(t===void 0){const n=o.measureText("A");return n.fontBoundingBoxAscent?{advance:0,width:0,ascent:Math.ceil(n.fontBoundingBoxAscent),descent:Math.ceil(n.fontBoundingBoxDescent)}:{advance:0,width:0,ascent:e*bt,descent:e*Lt}}const i=o.measureText(t);return i.actualBoundingBoxAscent?{advance:i.width,width:Math.ceil(i.actualBoundingBoxRight-i.actualBoundingBoxLeft),ascent:Math.ceil(i.actualBoundingBoxAscent),descent:Math.ceil(i.actualBoundingBoxDescent)}:{advance:i.width,width:i.width,ascent:e*bt,descent:e*Lt}}function mn(o){J.assert(Number.isFinite(o)&&o>=ri,"Invalid cache limit"),Ae=new si(o)}class yn{constructor(){this.props={...se}}get atlas(){return this._atlas}get mapping(){return this._atlas&&this._atlas.mapping}setProps(e={}){Object.assign(this.props,e),e._getFontRenderer&&(this._getFontRenderer=e._getFontRenderer),this._key=this._getKey();const t=hn(this._key,this.props.characterSet),i=Ae.get(this._key);if(i&&t.size===0){this._atlas!==i&&(this._atlas=i);return}const n=this._generateFontAtlas(t,i);this._atlas=n,Ae.set(this._key,n)}_generateFontAtlas(e,t){const{fontFamily:i,fontWeight:n,fontSize:s,buffer:r,sdf:a,radius:l,cutoff:f}=this.props;let d=t&&t.data;d||(d=document.createElement("canvas"),d.width=Ct);const u=d.getContext("2d",{willReadFrequently:!0});St(u,i,s,n);const h=T=>xn(u,s,T);let v;this._getFontRenderer?v=this._getFontRenderer(this.props):a&&(v={measure:h,draw:Pn(this.props)});const{mapping:_,canvasHeight:C,xOffset:L,yOffsetMin:S,yOffsetMax:M}=ln({measureText:T=>v?v.measure(T):h(T),buffer:r,characterSet:e,maxCanvasWidth:Ct,...t&&{mapping:t.mapping,xOffset:t.xOffset,yOffsetMin:t.yOffsetMin,yOffsetMax:t.yOffsetMax}});if(d.height!==C){const T=d.height>0?u.getImageData(0,0,d.width,d.height):null;d.height=C,T&&u.putImageData(T,0,0)}if(St(u,i,s,n),v)for(const T of e){const E=_[T],j=E.width,{data:G,left:H=0,top:F=0}=v.draw(T),N=E.x-H,$=E.y-F,U=Math.max(0,Math.round(N)),W=Math.max(0,Math.round($)),Z=Math.min(G.width,d.width-U),Y=Math.min(G.height,d.height-W);u.putImageData(G,U,W,0,0,Z,Y),E.x=U,E.y=W,E.width=Z,E.height=Y,E.anchorX+=Z/2-H-j/2,E.anchorY+=F}else for(const T of e){const E=_[T];u.fillText(T,E.x,E.y+E.anchorY)}const I=v?v.measure():h();return{baselineOffset:(I.ascent-I.descent)/2,xOffset:L,yOffsetMin:S,yOffsetMax:M,mapping:_,data:d,width:d.width,height:d.height}}_getKey(){const{fontFamily:e,fontWeight:t,fontSize:i,buffer:n,sdf:s,radius:r,cutoff:a}=this.props;return s?`${e} ${t} ${i} ${n} ${r} ${a}`:`${e} ${t} ${i} ${n}`}}function Pn({fontSize:o,buffer:e,radius:t,cutoff:i,fontFamily:n,fontWeight:s}){const r=new nn({fontSize:o,buffer:e,radius:t,cutoff:i,fontFamily:n,fontWeight:`${s}`});return a=>{const{data:l,width:f,height:d}=r.draw(a),u=new ImageData(f,d);return vn(l,u),{data:u,left:e,top:e}}}const _n=`struct TextBackgroundUniforms {
  billboard: f32,
  sizeScale: f32,
  sizeMinPixels: f32,
  sizeMaxPixels: f32,
  borderRadius: vec4<f32>,
  padding: vec4<f32>,
  sizeUnits: i32,
  stroked: f32,
};

@group(0) @binding(auto) var<uniform> textBackground: TextBackgroundUniforms;
`,At=`layout(std140) uniform textBackgroundUniforms {
  bool billboard;
  float sizeScale;
  float sizeMinPixels;
  float sizeMaxPixels;
  vec4 borderRadius;
  vec4 padding;
  highp int sizeUnits;
  bool stroked;
} textBackground;
`,Cn={name:"textBackground",source:_n,vs:At,fs:At,uniformTypes:{billboard:"f32",sizeScale:"f32",sizeMinPixels:"f32",sizeMaxPixels:"f32",borderRadius:"vec4<f32>",padding:"vec4<f32>",sizeUnits:"i32",stroked:"f32"}},bn=`#version 300 es
#define SHADER_NAME text-background-layer-vertex-shader
in vec2 positions;
in vec3 instancePositions;
in vec3 instancePositions64Low;
in vec4 instanceRects;
in vec4 instanceClipRect;
in float instanceSizes;
in float instanceAngles;
in vec2 instancePixelOffsets;
in float instanceLineWidths;
in vec4 instanceFillColors;
in vec4 instanceLineColors;
out vec4 vFillColor;
out vec4 vLineColor;
out float vLineWidth;
out vec2 uv;
out vec2 dimensions;
vec2 rotate_by_angle(vec2 vertex, float angle) {
float angle_radian = radians(angle);
float cos_angle = cos(angle_radian);
float sin_angle = sin(angle_radian);
mat2 rotationMatrix = mat2(cos_angle, -sin_angle, sin_angle, cos_angle);
return rotationMatrix * vertex;
}
void main(void) {
geometry.worldPosition = instancePositions;
geometry.uv = positions;
geometry.pickingColor = picking_getPickingColorFromInstanceID();
uv = positions;
vLineWidth = instanceLineWidths;
float sizePixels = clamp(
project_size_to_pixel(instanceSizes * textBackground.sizeScale, textBackground.sizeUnits),
textBackground.sizeMinPixels, textBackground.sizeMaxPixels
);
float instanceScale = sizePixels / text.fontSize;
dimensions = instanceRects.zw * instanceScale + textBackground.padding.xy + textBackground.padding.zw;
vec2 pixelOffset = (positions * instanceRects.zw + instanceRects.xy) * instanceScale + mix(-textBackground.padding.xy, textBackground.padding.zw, positions);
pixelOffset = rotate_by_angle(pixelOffset, instanceAngles);
pixelOffset += instancePixelOffsets;
pixelOffset.y *= -1.0;
vec2 xy = project_size_to_pixel(instanceClipRect.xy);
vec2 wh = project_size_to_pixel(instanceClipRect.zw);
if (text.flipY) {
xy.y = -xy.y - wh.y;
}
if (instanceClipRect.z >= 0.0) {
dimensions.x = wh.x;
pixelOffset.x = xy.x + uv.x * wh.x + mix(-textBackground.padding.x, textBackground.padding.z, uv.x);
}
if (instanceClipRect.w >= 0.0) {
dimensions.y = wh.y;
pixelOffset.y = xy.y + uv.y * wh.y + mix(-textBackground.padding.y, textBackground.padding.w, uv.y);
}
if (textBackground.billboard)  {
gl_Position = project_position_to_clipspace(instancePositions, instancePositions64Low, vec3(0.0), geometry.position);
DECKGL_FILTER_GL_POSITION(gl_Position, geometry);
vec3 offset = vec3(pixelOffset, 0.0);
DECKGL_FILTER_SIZE(offset, geometry);
gl_Position.xy += project_pixel_size_to_clipspace(offset.xy);
} else {
vec3 offset_common = vec3(project_pixel_size(pixelOffset), 0.0);
if (text.flipY) {
offset_common.y *= -1.;
}
DECKGL_FILTER_SIZE(offset_common, geometry);
gl_Position = project_position_to_clipspace(instancePositions, instancePositions64Low, offset_common, geometry.position);
DECKGL_FILTER_GL_POSITION(gl_Position, geometry);
}
vFillColor = vec4(instanceFillColors.rgb, instanceFillColors.a * layer.opacity);
DECKGL_FILTER_COLOR(vFillColor, geometry);
vLineColor = vec4(instanceLineColors.rgb, instanceLineColors.a * layer.opacity);
DECKGL_FILTER_COLOR(vLineColor, geometry);
}
`,Ln=`#version 300 es
#define SHADER_NAME text-background-layer-fragment-shader
precision highp float;
in vec4 vFillColor;
in vec4 vLineColor;
in float vLineWidth;
in vec2 uv;
in vec2 dimensions;
out vec4 fragColor;
float round_rect(vec2 p, vec2 size, vec4 radii) {
vec2 pixelPositionCB = (p - 0.5) * size;
vec2 sizeCB = size * 0.5;
float maxBorderRadius = min(size.x, size.y) * 0.5;
vec4 borderRadius = vec4(min(radii, maxBorderRadius));
borderRadius.xy =
(pixelPositionCB.x > 0.0) ? borderRadius.xy : borderRadius.zw;
borderRadius.x = (pixelPositionCB.y > 0.0) ? borderRadius.x : borderRadius.y;
vec2 q = abs(pixelPositionCB) - sizeCB + borderRadius.x;
return -(min(max(q.x, q.y), 0.0) + length(max(q, 0.0)) - borderRadius.x);
}
float rect(vec2 p, vec2 size) {
vec2 pixelPosition = p * size;
return min(min(pixelPosition.x, size.x - pixelPosition.x),
min(pixelPosition.y, size.y - pixelPosition.y));
}
vec4 get_stroked_fragColor(float dist) {
float isBorder = smoothedge(dist, vLineWidth);
return mix(vFillColor, vLineColor, isBorder);
}
void main(void) {
geometry.uv = uv;
if (textBackground.borderRadius != vec4(0.0)) {
float distToEdge = round_rect(uv, dimensions, textBackground.borderRadius);
float shapeAlpha = smoothedge(-distToEdge, 0.0);
if (shapeAlpha == 0.0) {
discard;
}
if (textBackground.stroked) {
fragColor = get_stroked_fragColor(distToEdge);
} else {
fragColor = vFillColor;
}
fragColor.a *= shapeAlpha;
} else {
if (textBackground.stroked) {
float distToEdge = rect(uv, dimensions);
fragColor = get_stroked_fragColor(distToEdge);
} else {
fragColor = vFillColor;
}
}
DECKGL_FILTER_COLOR(fragColor, geometry);
}
`,Sn=`struct TextUniforms {
  cutoffPixels: vec2<f32>,
  align: vec2<i32>,
  fontSize: f32,
  flipY: f32,
};

@group(0) @binding(auto) var<uniform> text: TextUniforms;

fn rotate_by_angle(vertex: vec2<f32>, angle: f32) -> vec2<f32> {
  let angleRadian = radians(angle);
  let cosine = cos(angleRadian);
  let sine = sin(angleRadian);
  let rotationMatrix = mat2x2<f32>(
    vec2<f32>(cosine, -sine),
    vec2<f32>(sine, cosine)
  );
  return rotationMatrix * vertex;
}

struct Attributes {
  @builtin(instance_index) instanceIndex: u32,
  @location(0) positions: vec2<f32>,
  @location(1) instancePositions: vec3<f32>,
  @location(2) instancePositions64Low: vec3<f32>,
  @location(3) instanceSizes: f32,
  @location(4) instanceAngles: f32,
  @location(5) instanceRects: vec4<f32>,
  @location(6) instanceClipRect: vec4<f32>,
  @location(7) instancePixelOffsets: vec2<f32>,
  @location(8) instanceFillColors: vec4<f32>,
  @location(9) instanceLineColors: vec4<f32>,
  @location(10) instanceLineWidths: f32,
};

struct Varyings {
  @builtin(position) position: vec4<f32>,
  @location(0) vFillColor: vec4<f32>,
  @location(1) vLineColor: vec4<f32>,
  @location(2) vLineWidth: f32,
  @location(3) uv: vec2<f32>,
  @location(4) dimensions: vec2<f32>,
  @location(5) pickingColor: vec3<f32>,
};

@vertex
fn vertexMain(attributes: Attributes) -> Varyings {
  geometry.worldPosition = attributes.instancePositions;
  geometry.uv = attributes.positions;
  geometry.pickingColor = picking_getPickingColorFromIndex(attributes.instanceIndex);

  var varyings: Varyings;
  varyings.uv = attributes.positions;
  varyings.vLineWidth = attributes.instanceLineWidths;

  let sizePixels = clamp(
    project_unit_size_to_pixel(
      attributes.instanceSizes * textBackground.sizeScale,
      textBackground.sizeUnits
    ),
    textBackground.sizeMinPixels,
    textBackground.sizeMaxPixels
  );
  let instanceScale = sizePixels / text.fontSize;

  varyings.dimensions = attributes.instanceRects.zw * instanceScale +
    textBackground.padding.xy + textBackground.padding.zw;

  var pixelOffset =
    (attributes.positions * attributes.instanceRects.zw + attributes.instanceRects.xy) *
      instanceScale +
    mix(-textBackground.padding.xy, textBackground.padding.zw, attributes.positions);
  pixelOffset = rotate_by_angle(pixelOffset, attributes.instanceAngles);
  pixelOffset = pixelOffset + attributes.instancePixelOffsets;
  pixelOffset.y = pixelOffset.y * -1.0;

  var xy = project_size_vec2(attributes.instanceClipRect.xy) * project.scale;
  let wh = project_size_vec2(attributes.instanceClipRect.zw) * project.scale;
  if (text.flipY > 0.5) {
    xy.y = -xy.y - wh.y;
  }
  if (attributes.instanceClipRect.z >= 0.0) {
    varyings.dimensions.x = wh.x;
    pixelOffset.x = xy.x + varyings.uv.x * wh.x + mix(
      -textBackground.padding.x,
      textBackground.padding.z,
      varyings.uv.x
    );
  }
  if (attributes.instanceClipRect.w >= 0.0) {
    varyings.dimensions.y = wh.y;
    pixelOffset.y = xy.y + varyings.uv.y * wh.y + mix(
      -textBackground.padding.y,
      textBackground.padding.w,
      varyings.uv.y
    );
  }

  if (textBackground.billboard > 0.5) {
    var position = project_position_to_clipspace(
      attributes.instancePositions,
      attributes.instancePositions64Low,
      vec3<f32>(0.0)
    );
    let clipOffset = project_pixel_size_to_clipspace(pixelOffset);
    position = vec4<f32>(
      position.x + clipOffset.x,
      position.y + clipOffset.y,
      position.z,
      position.w
    );
    varyings.position = position;
  } else {
    var offsetCommon = vec3<f32>(project_pixel_size_vec2(pixelOffset), 0.0);
    if (text.flipY > 0.5) {
      offsetCommon.y = offsetCommon.y * -1.0;
    }
    varyings.position = project_position_to_clipspace(
      attributes.instancePositions,
      attributes.instancePositions64Low,
      offsetCommon
    );
  }

  varyings.vFillColor = vec4<f32>(
    attributes.instanceFillColors.rgb,
    attributes.instanceFillColors.a * layer.opacity
  );
  varyings.vLineColor = vec4<f32>(
    attributes.instanceLineColors.rgb,
    attributes.instanceLineColors.a * layer.opacity
  );
  varyings.pickingColor = geometry.pickingColor;
  return varyings;
}

fn round_rect(point: vec2<f32>, size: vec2<f32>, radii: vec4<f32>) -> f32 {
  let pixelPosition = (point - 0.5) * size;
  let halfSize = size * 0.5;
  let maxBorderRadius = min(size.x, size.y) * 0.5;
  var borderRadius = min(radii, vec4<f32>(maxBorderRadius));

  borderRadius = select(borderRadius.zwxy, borderRadius, pixelPosition.x > 0.0);
  let radius = select(borderRadius.y, borderRadius.x, pixelPosition.y > 0.0);
  let q = abs(pixelPosition) - halfSize + radius;
  return -(min(max(q.x, q.y), 0.0) + length(max(q, vec2<f32>(0.0))) - radius);
}

fn rect(point: vec2<f32>, size: vec2<f32>) -> f32 {
  let pixelPosition = point * size;
  return min(
    min(pixelPosition.x, size.x - pixelPosition.x),
    min(pixelPosition.y, size.y - pixelPosition.y)
  );
}

fn get_stroked_frag_color(
  distanceToEdge: f32,
  lineWidth: f32,
  fillColor: vec4<f32>,
  lineColor: vec4<f32>
) -> vec4<f32> {
  let isBorder = smoothedge(distanceToEdge, lineWidth);
  return mix(fillColor, lineColor, isBorder);
}

@fragment
fn fragmentMain(varyings: Varyings) -> @location(0) vec4<f32> {
  geometry.uv = varyings.uv;
  var fragColor: vec4<f32>;

  if (any(textBackground.borderRadius != vec4<f32>(0.0))) {
    let distanceToEdge = round_rect(
      varyings.uv,
      varyings.dimensions,
      textBackground.borderRadius
    );
    let shapeAlpha = smoothedge(-distanceToEdge, 0.0);
    if (shapeAlpha == 0.0) {
      discard;
    }
    if (textBackground.stroked > 0.5) {
      fragColor = get_stroked_frag_color(
        distanceToEdge,
        varyings.vLineWidth,
        varyings.vFillColor,
        varyings.vLineColor
      );
    } else {
      fragColor = varyings.vFillColor;
    }
    fragColor.a = fragColor.a * shapeAlpha;
  } else if (textBackground.stroked > 0.5) {
    let distanceToEdge = rect(varyings.uv, varyings.dimensions);
    fragColor = get_stroked_frag_color(
      distanceToEdge,
      varyings.vLineWidth,
      varyings.vFillColor,
      varyings.vLineColor
    );
  } else {
    fragColor = varyings.vFillColor;
  }

  if (picking.isActive > 0.5) {
    if (!picking_isColorValid(varyings.pickingColor)) {
      discard;
    }
    return vec4<f32>(varyings.pickingColor, 1.0);
  }

  if (picking.isHighlightActive > 0.5) {
    let highlightedObjectColor = picking_normalizeColor(picking.highlightedObjectColor);
    if (picking_isColorZero(abs(varyings.pickingColor - highlightedObjectColor))) {
      let highlightAlpha = picking.highlightColor.a;
      let blendedAlpha = highlightAlpha + fragColor.a * (1.0 - highlightAlpha);
      if (blendedAlpha > 0.0) {
        let highlightRatio = highlightAlpha / blendedAlpha;
        fragColor = vec4<f32>(
          mix(fragColor.rgb, picking.highlightColor.rgb, highlightRatio),
          blendedAlpha
        );
      } else {
        fragColor = vec4<f32>(fragColor.rgb, 0.0);
      }
    }
  }

  return deckgl_premultiplied_alpha(fragColor);
}
`,An={billboard:!0,sizeScale:1,sizeUnits:"pixels",sizeMinPixels:0,sizeMaxPixels:Number.MAX_SAFE_INTEGER,fontSize:1,borderRadius:{type:"object",value:0},padding:{type:"array",value:[0,0,0,0]},getPosition:{type:"accessor",value:o=>o.position},getSize:{type:"accessor",value:1},getAngle:{type:"accessor",value:0},getPixelOffset:{type:"accessor",value:[0,0]},getBoundingRect:{type:"accessor",value:[0,0,0,0]},getClipRect:{type:"accessor",value:[0,0,-1,-1]},getFillColor:{type:"accessor",value:[0,0,0,255]},getLineColor:{type:"accessor",value:[0,0,0,255]},getLineWidth:{type:"accessor",value:1}};class $e extends Q{getShaders(){return super.getShaders({vs:bn,fs:Ln,source:Sn,modules:[ee,te,ie,Cn,ii]})}initializeState(){this.getAttributeManager().addInstanced({instancePositions:{size:3,type:"float64",fp64:this.use64bitPositions(),transition:!0,accessor:"getPosition"},instanceSizes:{size:1,transition:!0,bufferGroup:"text-background-instance-data",accessor:"getSize",defaultValue:1},instanceAngles:{size:1,transition:!0,bufferGroup:"text-background-instance-data",accessor:"getAngle"},instanceRects:{size:4,bufferGroup:"text-background-instance-data",accessor:"getBoundingRect"},instanceClipRect:{size:4,bufferGroup:"text-background-instance-data",accessor:"getClipRect",defaultValue:[0,0,-1,-1]},instancePixelOffsets:{size:2,transition:!0,bufferGroup:"text-background-instance-data",accessor:"getPixelOffset"},instanceFillColors:{size:4,transition:!0,type:"unorm8",accessor:"getFillColor",defaultValue:[0,0,0,255]},instanceLineColors:{size:4,transition:!0,type:"unorm8",accessor:"getLineColor",defaultValue:[0,0,0,255]},instanceLineWidths:{size:1,transition:!0,bufferGroup:"text-background-instance-data",accessor:"getLineWidth",defaultValue:1}})}updateState(e){var i;super.updateState(e);const{changeFlags:t}=e;t.extensionsChanged&&((i=this.state.model)==null||i.destroy(),this.state.model=this._getModel(),this.getAttributeManager().invalidateAll())}draw({uniforms:e}){const{billboard:t,sizeScale:i,sizeUnits:n,sizeMinPixels:s,sizeMaxPixels:r,getLineWidth:a,fontSize:l}=this.props;let{padding:f,borderRadius:d}=this.props;f.length<4&&(f=[f[0],f[1],f[0],f[1]]),Array.isArray(d)||(d=[d,d,d,d]);const u=this.state.model,h={billboard:t,stroked:!!a,borderRadius:d,padding:f,sizeUnits:ne[n],sizeScale:i,sizeMinPixels:s,sizeMaxPixels:r},v={fontSize:l,viewport:this.context.viewport};u.shaderInputs.setProps({textBackground:h,text:v}),u.draw(this.context.renderPass)}_getModel(){const e=[0,0,1,0,0,1,1,1];return new X(this.context.device,{...this.getShaders(),id:this.props.id,bufferLayout:this.getAttributeManager().getBufferLayouts(),geometry:new oe({topology:"triangle-strip",vertexCount:4,attributes:{positions:{size:2,value:new Float32Array(e)}}}),isInstanced:!0})}}$e.defaultProps=An;$e.layerName="TextBackgroundLayer";const wt={start:1,middle:0,end:-1},It={top:1,center:0,bottom:-1},ke=[0,0,0,255],wn=1,In={billboard:!0,sizeScale:1,sizeUnits:"pixels",sizeMinPixels:0,sizeMaxPixels:Number.MAX_SAFE_INTEGER,background:!1,getBackgroundColor:{type:"accessor",value:[255,255,255,255]},getBorderColor:{type:"accessor",value:ke},getBorderWidth:{type:"accessor",value:0},backgroundBorderRadius:{type:"object",value:0},backgroundPadding:{type:"array",value:[0,0,0,0]},characterSet:{type:"object",value:se.characterSet},fontFamily:se.fontFamily,fontWeight:se.fontWeight,lineHeight:wn,outlineWidth:{type:"number",value:0,min:0},outlineColor:{type:"color",value:ke},fontSettings:{type:"object",value:{},compare:1},wordBreak:"break-word",maxWidth:{type:"number",value:-1},contentCutoffPixels:{type:"array",value:[0,0]},contentAlignHorizontal:"none",contentAlignVertical:"none",getText:{type:"accessor",value:o=>o.text},getPosition:{type:"accessor",value:o=>o.position},getColor:{type:"accessor",value:ke},getSize:{type:"accessor",value:32},getAngle:{type:"accessor",value:0},getTextAnchor:{type:"accessor",value:"middle"},getAlignmentBaseline:{type:"accessor",value:"center"},getPixelOffset:{type:"accessor",value:[0,0]},getContentBox:{type:"accessor",value:[0,0,-1,-1]},backgroundColor:{deprecatedFor:["background","getBackgroundColor"]}};class Ze extends Ge{constructor(){super(...arguments),this.getBoundingRect=(e,t)=>{const{size:[i,n]}=this.transformParagraph(e,t),{getTextAnchor:s,getAlignmentBaseline:r}=this.props,a=wt[typeof s=="function"?s(e,t):s],l=It[typeof r=="function"?r(e,t):r];return[(a-1)*i/2,(l-1)*n/2,i,n]},this.getIconOffsets=(e,t)=>{const{getTextAnchor:i,getAlignmentBaseline:n}=this.props,{x:s,y:r,rowWidth:a,size:[,l]}=this.transformParagraph(e,t),f=wt[typeof i=="function"?i(e,t):i],d=It[typeof n=="function"?n(e,t):n],u=s.length,h=new Array(u*2);let v=0;for(let _=0;_<u;_++)h[v++]=(f-1)*a[_]/2+s[_],h[v++]=(d-1)*l/2+r[_];return h}}initializeState(){this.state={styleVersion:0,fontAtlasManager:new yn},this.props.maxWidth>0&&J.once(1,"v8.9 breaking change: TextLayer maxWidth is now relative to text size")()}updateState(e){const{props:t,oldProps:i,changeFlags:n}=e;(n.dataChanged||n.updateTriggersChanged&&(n.updateTriggersChanged.all||n.updateTriggersChanged.getText))&&this._updateText(),(this._updateFontAtlas()||t.lineHeight!==i.lineHeight||t.wordBreak!==i.wordBreak||t.maxWidth!==i.maxWidth)&&this.setState({styleVersion:this.state.styleVersion+1})}getPickingInfo({info:e}){return e.object=e.index>=0?this.props.data[e.index]:null,e}_updateFontAtlas(){const{fontSettings:e,fontFamily:t,fontWeight:i,_getFontRenderer:n}=this.props,{fontAtlasManager:s,characterSet:r}=this.state,a={...e,characterSet:r,fontFamily:t,fontWeight:i,_getFontRenderer:n};if(!s.mapping)return s.setProps(a),!0;for(const l in a)if(a[l]!==s.props[l])return s.setProps(a),!0;return!1}_updateText(){var l;const{data:e,characterSet:t}=this.props,i=(l=e.attributes)==null?void 0:l.getText;let{getText:n}=this.props,s=e.startIndices,r;const a=t==="auto"&&new Set;if(i&&s){const{texts:f,characterCount:d}=gn({...ArrayBuffer.isView(i)?{value:i}:i,length:e.length,startIndices:s,characterSet:a});r=d,n=(u,{index:h})=>f[h]}else{const{iterable:f,objectInfo:d}=we(e);s=[0],r=0;for(const u of f){d.index++;const h=Array.from(n(u,d)||"");a&&h.forEach(a.add,a),r+=h.length,s.push(r)}}this.setState({getText:n,startIndices:s,numInstances:r,characterSet:a||t})}transformParagraph(e,t){const{fontAtlasManager:i}=this.state,n=i.mapping,{baselineOffset:s}=i.atlas,{fontSize:r}=i.props,a=this.state.getText,{wordBreak:l,lineHeight:f,maxWidth:d}=this.props,u=a(e,t)||"";return pn(u,s,f*r,l,d*r,n)}renderLayers(){const{startIndices:e,numInstances:t,getText:i,fontAtlasManager:{atlas:n,mapping:s},styleVersion:r}=this.state,{data:a,_dataDiff:l,getPosition:f,getColor:d,getSize:u,getAngle:h,getPixelOffset:v,getBackgroundColor:_,getBorderColor:C,getBorderWidth:L,getContentBox:S,backgroundBorderRadius:M,backgroundPadding:I,background:T,billboard:E,fontSettings:j,outlineWidth:G,outlineColor:H,sizeScale:F,sizeUnits:N,sizeMinPixels:$,sizeMaxPixels:U,contentCutoffPixels:W,contentAlignHorizontal:Z,contentAlignVertical:Y,transitions:c,updateTriggers:g}=this.props,p=this.getSubLayerClass("characters",Ve),x=this.getSubLayerClass("background",$e),{fontSize:m}=this.state.fontAtlasManager.props;return[T&&new x({getFillColor:_,getLineColor:C,getLineWidth:L,borderRadius:M,padding:I,getPosition:f,getSize:u,getAngle:h,getPixelOffset:v,getClipRect:S,billboard:E,sizeScale:F,sizeUnits:N,sizeMinPixels:$,sizeMaxPixels:U,fontSize:m,transitions:c&&{getPosition:c.getPosition,getAngle:c.getAngle,getSize:c.getSize,getFillColor:c.getBackgroundColor,getLineColor:c.getBorderColor,getLineWidth:c.getBorderWidth,getPixelOffset:c.getPixelOffset}},this.getSubLayerProps({id:"background",updateTriggers:{getPosition:g.getPosition,getAngle:g.getAngle,getSize:g.getSize,getFillColor:g.getBackgroundColor,getLineColor:g.getBorderColor,getLineWidth:g.getBorderWidth,getPixelOffset:g.getPixelOffset,getBoundingRect:{getText:g.getText,getTextAnchor:g.getTextAnchor,getAlignmentBaseline:g.getAlignmentBaseline,styleVersion:r}}}),{data:a.attributes&&a.attributes.background?{length:a.length,attributes:a.attributes.background}:a,_dataDiff:l,autoHighlight:!1,getBoundingRect:this.getBoundingRect}),new p({sdf:j.sdf,smoothing:Number.isFinite(j.smoothing)?j.smoothing:se.smoothing,outlineWidth:G/(j.radius||se.radius),outlineColor:H,iconAtlas:n,iconMapping:s,getPosition:f,getColor:d,getSize:u,getAngle:h,getPixelOffset:v,getContentBox:S,billboard:E,sizeScale:F,sizeUnits:N,sizeMinPixels:$,sizeMaxPixels:U,fontSize:m,contentCutoffPixels:W,contentAlignHorizontal:Z,contentAlignVertical:Y,transitions:c&&{getPosition:c.getPosition,getAngle:c.getAngle,getColor:c.getColor,getSize:c.getSize,getPixelOffset:c.getPixelOffset,getContentBox:c.getContentBox}},this.getSubLayerProps({id:"characters",updateTriggers:{all:g.getText,getPosition:g.getPosition,getAngle:g.getAngle,getColor:g.getColor,getSize:g.getSize,getPixelOffset:g.getPixelOffset,getContentBox:g.getContentBox,getIconOffsets:{getTextAnchor:g.getTextAnchor,getAlignmentBaseline:g.getAlignmentBaseline,styleVersion:r}}}),{data:a,_dataDiff:l,startIndices:e,numInstances:t,getIconOffsets:this.getIconOffsets,getIcon:i})]}static set fontAtlasCacheLimit(e){mn(e)}}Ze.defaultProps=In;Ze.layerName="TextLayer";const Ce={circle:{type:Ue,props:{filled:"filled",stroked:"stroked",lineWidthMaxPixels:"lineWidthMaxPixels",lineWidthMinPixels:"lineWidthMinPixels",lineWidthScale:"lineWidthScale",lineWidthUnits:"lineWidthUnits",pointRadiusMaxPixels:"radiusMaxPixels",pointRadiusMinPixels:"radiusMinPixels",pointRadiusScale:"radiusScale",pointRadiusUnits:"radiusUnits",pointAntialiasing:"antialiasing",pointBillboard:"billboard",getFillColor:"getFillColor",getLineColor:"getLineColor",getLineWidth:"getLineWidth",getPointRadius:"getRadius"}},icon:{type:Ie,props:{iconAtlas:"iconAtlas",iconMapping:"iconMapping",iconSizeMaxPixels:"sizeMaxPixels",iconSizeMinPixels:"sizeMinPixels",iconSizeScale:"sizeScale",iconSizeUnits:"sizeUnits",iconAlphaCutoff:"alphaCutoff",iconBillboard:"billboard",getIcon:"getIcon",getIconAngle:"getAngle",getIconColor:"getColor",getIconPixelOffset:"getPixelOffset",getIconSize:"getSize"}},text:{type:Ze,props:{textSizeMaxPixels:"sizeMaxPixels",textSizeMinPixels:"sizeMinPixels",textSizeScale:"sizeScale",textSizeUnits:"sizeUnits",textBackground:"background",textBackgroundPadding:"backgroundPadding",textFontFamily:"fontFamily",textFontWeight:"fontWeight",textLineHeight:"lineHeight",textMaxWidth:"maxWidth",textOutlineColor:"outlineColor",textOutlineWidth:"outlineWidth",textWordBreak:"wordBreak",textCharacterSet:"characterSet",textBillboard:"billboard",textFontSettings:"fontSettings",getText:"getText",getTextAngle:"getAngle",getTextColor:"getColor",getTextPixelOffset:"getPixelOffset",getTextSize:"getSize",getTextAnchor:"getTextAnchor",getTextAlignmentBaseline:"getAlignmentBaseline",getTextBackgroundColor:"getBackgroundColor",getTextBorderColor:"getBorderColor",getTextBorderWidth:"getBorderWidth"}}},be={type:Ee,props:{lineWidthUnits:"widthUnits",lineWidthScale:"widthScale",lineWidthMinPixels:"widthMinPixels",lineWidthMaxPixels:"widthMaxPixels",lineJointRounded:"jointRounded",lineCapRounded:"capRounded",lineMiterLimit:"miterLimit",lineBillboard:"billboard",lineAntialiasing:"antialiasing",getLineColor:"getColor",getLineWidth:"getWidth"}},je={type:Te,props:{extruded:"extruded",filled:"filled",wireframe:"wireframe",elevationScale:"elevationScale",material:"material",_full3d:"_full3d",getElevation:"getElevation",getFillColor:"getFillColor",getLineColor:"getLineColor"}};function ce({type:o,props:e}){const t={};for(const i in e)t[i]=o.defaultProps[e[i]];return t}function De(o,e){const{transitions:t,updateTriggers:i}=o.props,n={updateTriggers:{},transitions:t&&{getPosition:t.geometry}};for(const s in e){const r=e[s];let a=o.props[s];s.startsWith("get")&&(a=o.getSubLayerAccessor(a),n.updateTriggers[r]=i[s],t&&(n.transitions[r]=t[s])),n[r]=a}return n}function En(o){if(Array.isArray(o))return o;switch(J.assert(o.type,"GeoJSON does not have type"),o.type){case"Feature":return[o];case"FeatureCollection":return J.assert(Array.isArray(o.features),"GeoJSON does not have features array"),o.features;default:return[{geometry:o}]}}function Et(o,e,t={}){const i={pointFeatures:[],lineFeatures:[],polygonFeatures:[],polygonOutlineFeatures:[]},{startRow:n=0,endRow:s=o.length}=t;for(let r=n;r<s;r++){const a=o[r],{geometry:l}=a;if(l)if(l.type==="GeometryCollection"){J.assert(Array.isArray(l.geometries),"GeoJSON does not have geometries array");const{geometries:f}=l;for(let d=0;d<f.length;d++){const u=f[d];Tt(u,i,e,a,r)}}else Tt(l,i,e,a,r)}return i}function Tt(o,e,t,i,n){const{type:s,coordinates:r}=o,{pointFeatures:a,lineFeatures:l,polygonFeatures:f,polygonOutlineFeatures:d}=e;if(!Rn(s,r)){J.warn(`${s} coordinates are malformed`)();return}switch(s){case"Point":a.push(t({geometry:o},i,n));break;case"MultiPoint":r.forEach(u=>{a.push(t({geometry:{type:"Point",coordinates:u}},i,n))});break;case"LineString":l.push(t({geometry:o},i,n));break;case"MultiLineString":r.forEach(u=>{l.push(t({geometry:{type:"LineString",coordinates:u}},i,n))});break;case"Polygon":f.push(t({geometry:o},i,n)),r.forEach(u=>{d.push(t({geometry:{type:"LineString",coordinates:u}},i,n))});break;case"MultiPolygon":r.forEach(u=>{f.push(t({geometry:{type:"Polygon",coordinates:u}},i,n)),u.forEach(h=>{d.push(t({geometry:{type:"LineString",coordinates:h}},i,n))})});break}}const Tn={Point:1,MultiPoint:2,LineString:2,MultiLineString:3,Polygon:3,MultiPolygon:4};function Rn(o,e){let t=Tn[o];for(J.assert(t,`Unknown GeoJSON type ${o}`);e&&--t>0;)e=e[0];return e&&Number.isFinite(e[0])}function ai(){return{points:{},lines:{},polygons:{},polygonsOutline:{}}}function ye(o){return o.geometry.coordinates}function On(o,e){const t=ai(),{pointFeatures:i,lineFeatures:n,polygonFeatures:s,polygonOutlineFeatures:r}=o;return t.points.data=i,t.points._dataDiff=e.pointFeatures&&(()=>e.pointFeatures),t.points.getPosition=ye,t.lines.data=n,t.lines._dataDiff=e.lineFeatures&&(()=>e.lineFeatures),t.lines.getPath=ye,t.polygons.data=s,t.polygons._dataDiff=e.polygonFeatures&&(()=>e.polygonFeatures),t.polygons.getPolygon=ye,t.polygonsOutline.data=r,t.polygonsOutline._dataDiff=e.polygonOutlineFeatures&&(()=>e.polygonOutlineFeatures),t.polygonsOutline.getPath=ye,t}function zn(o){const e=ai(),{points:t,lines:i,polygons:n}=o,s=Jo(o);e.points.data={length:t.positions.value.length/t.positions.size,attributes:{...t.attributes,getPosition:t.positions,rowIndexes:{size:1,type:"uint32",value:s.points}},properties:t.properties,numericProps:t.numericProps,featureIds:t.featureIds},e.lines.data={length:i.pathIndices.value.length-1,startIndices:i.pathIndices.value,attributes:{...i.attributes,getPath:i.positions,rowIndexes:{size:1,type:"uint32",value:s.lines}},properties:i.properties,numericProps:i.numericProps,featureIds:i.featureIds},e.lines._pathType="open";const r=n.positions.value.length/n.positions.size,a=Array(r).fill(1);for(const l of n.primitivePolygonIndices.value)a[l-1]=0;return e.polygons.data={length:n.polygonIndices.value.length-1,startIndices:n.polygonIndices.value,attributes:{...n.attributes,getPolygon:n.positions,instanceVertexValid:{size:1,value:new Uint16Array(a)},rowIndexes:{size:1,type:"uint32",value:s.polygons}},properties:n.properties,numericProps:n.numericProps,featureIds:n.featureIds},e.polygons._normalize=!1,n.triangles&&(e.polygons.data.attributes.indices=n.triangles.value),e.polygonsOutline.data={length:n.primitivePolygonIndices.value.length-1,startIndices:n.primitivePolygonIndices.value,attributes:{...n.attributes,getPath:n.positions,rowIndexes:{size:1,type:"uint32",value:s.polygons}},properties:n.properties,numericProps:n.numericProps,featureIds:n.featureIds},e.polygonsOutline._pathType="open",e}const Mn=["points","linestrings","polygons"],kn={...ce(Ce.circle),...ce(Ce.icon),...ce(Ce.text),...ce(be),...ce(je),stroked:!0,filled:!0,extruded:!1,wireframe:!1,_full3d:!1,iconAtlas:{type:"object",value:null},iconMapping:{type:"object",value:{}},getIcon:{type:"accessor",value:o=>o.properties.icon},getText:{type:"accessor",value:o=>o.properties.text},pointType:"circle",getRadius:{deprecatedFor:"getPointRadius"}};class li extends Ge{initializeState(){this.state={layerProps:{},features:{},featuresDiff:{}}}updateState({props:e,changeFlags:t}){if(!t.dataChanged)return;const{data:i}=this.props,n=i&&"points"in i&&"polygons"in i&&"lines"in i;this.setState({binary:n}),n?this._updateStateBinary({props:e,changeFlags:t}):this._updateStateJSON({props:e,changeFlags:t})}_updateStateBinary({props:e,changeFlags:t}){const i=zn(e.data);this.setState({layerProps:i})}_updateStateJSON({props:e,changeFlags:t}){const i=En(e.data),n=this.getSubLayerRow.bind(this);let s={};const r={};if(Array.isArray(t.dataChanged)){const l=this.state.features;for(const f in l)s[f]=l[f].slice(),r[f]=[];for(const f of t.dataChanged){const d=Et(i,n,f);for(const u in l)r[u].push(Qt({data:s[u],getIndex:h=>h.__source.index,dataRange:f,replace:d[u]}))}}else s=Et(i,n);const a=On(s,r);this.setState({features:s,featuresDiff:r,layerProps:a})}getPickingInfo(e){const t=super.getPickingInfo(e),{index:i,sourceLayer:n}=t;return t.featureType=Mn.find(s=>n.id.startsWith(`${this.id}-${s}-`)),i>=0&&n.id.startsWith(`${this.id}-points-text`)&&this.state.binary&&(t.index=this.props.data.points.globalFeatureIds.value[i]),t}_updateAutoHighlight(e){const t=`${this.id}-points-`,i=e.featureType==="points";for(const n of this.getSubLayers())n.id.startsWith(t)===i&&n.updateAutoHighlight(e)}_renderPolygonLayer(){var r;const{extruded:e,wireframe:t}=this.props,{layerProps:i}=this.state,n="polygons-fill",s=this.shouldRenderSubLayer(n,(r=i.polygons)==null?void 0:r.data)&&this.getSubLayerClass(n,je.type);if(s){const a=De(this,je.props),l=e&&t;return l||delete a.getLineColor,a.updateTriggers.lineColors=l,new s(a,this.getSubLayerProps({id:n,updateTriggers:a.updateTriggers}),i.polygons)}return null}_renderLineLayers(){var l,f;const{extruded:e,stroked:t}=this.props,{layerProps:i}=this.state,n="polygons-stroke",s="linestrings",r=!e&&t&&this.shouldRenderSubLayer(n,(l=i.polygonsOutline)==null?void 0:l.data)&&this.getSubLayerClass(n,be.type),a=this.shouldRenderSubLayer(s,(f=i.lines)==null?void 0:f.data)&&this.getSubLayerClass(s,be.type);if(r||a){const d=De(this,be.props);return[r&&new r(d,this.getSubLayerProps({id:n,updateTriggers:d.updateTriggers}),i.polygonsOutline),a&&new a(d,this.getSubLayerProps({id:s,updateTriggers:d.updateTriggers}),i.lines)]}return null}_renderPointLayers(){var a;const{pointType:e}=this.props,{layerProps:t,binary:i}=this.state;let{highlightedObjectIndex:n}=this.props;!i&&Number.isFinite(n)&&(n=t.points.data.findIndex(l=>l.__source.index===n));const s=new Set(e.split("+")),r=[];for(const l of s){const f=`points-${l}`,d=Ce[l],u=d&&this.shouldRenderSubLayer(f,(a=t.points)==null?void 0:a.data)&&this.getSubLayerClass(f,d.type);if(u){const h=De(this,d.props);let v=t.points;if(l==="text"&&i){const{rowIndexes:_,...C}=v.data.attributes;v={...v,data:{...v.data,attributes:C}}}r.push(new u(h,this.getSubLayerProps({id:f,updateTriggers:h.updateTriggers,highlightedObjectIndex:n}),v))}}return r}renderLayers(){const{extruded:e}=this.props,t=this._renderPolygonLayer(),i=this._renderLineLayers(),n=this._renderPointLayers();return[!e&&t,i,n,e&&t]}getSubLayerAccessor(e){const{binary:t}=this.state;return!t||typeof e!="function"?super.getSubLayerAccessor(e):(i,n)=>{const{data:s,index:r}=n,a=Zo(s,r);return e(a,n)}}}li.layerName="GeoJsonLayer";li.defaultProps=kn;export{kt as A,Dt as B,li as G,Ie as I,Ve as M,Ee as P,Ue as S,Ze as T,Gt as a,ti as b,Te as c,$e as d};
