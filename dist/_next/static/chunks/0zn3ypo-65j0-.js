(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,94909,(e,o,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a={default:function(){return c},getImageProps:function(){return u}};for(var r in a)Object.defineProperty(t,r,{enumerable:!0,get:a[r]});let i=e.r(55682),l=e.r(8927),s=e.r(85437),n=i._(e.r(1948));function u(e){let{props:o}=(0,l.getImgProps)(e,{defaultLoader:n.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[32,48,64,96,128,256,384],qualities:[75],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1}});for(let[e,t]of Object.entries(o))void 0===t&&delete o[e];return{props:o}}let c=s.Image},57688,(e,o,t)=>{o.exports=e.r(94909)},80178,e=>{"use strict";var o=e.i(71645),t=e.i(37881),a=e.i(573),r=e.i(31967),i=e.i(21449),l=e.i(93344);let s=`#version 300 es
precision mediump float;

uniform float u_time;

uniform vec4 u_colors[10];
uniform float u_colorsCount;

uniform float u_distortion;
uniform float u_swirl;
uniform float u_grainMixer;
uniform float u_grainOverlay;

in vec2 v_objectUV;
out vec4 fragColor;

${l.declarePI}
${l.rotation2}
${l.proceduralHash21}

float valueNoise(vec2 st) {
  vec2 i = floor(st);
  vec2 f = fract(st);
  float a = hash21(i);
  float b = hash21(i + vec2(1.0, 0.0));
  float c = hash21(i + vec2(0.0, 1.0));
  float d = hash21(i + vec2(1.0, 1.0));
  vec2 u = f * f * (3.0 - 2.0 * f);
  float x1 = mix(a, b, u.x);
  float x2 = mix(c, d, u.x);
  return mix(x1, x2, u.y);
}

float noise(vec2 n, vec2 seedOffset) {
  return valueNoise(n + seedOffset);
}

vec2 getPosition(int i, float t) {
  float a = float(i) * .37;
  float b = .6 + fract(float(i) / 3.) * .9;
  float c = .8 + fract(float(i + 1) / 4.);

  float x = sin(t * b + a);
  float y = cos(t * c + a * 1.5);

  return .5 + .5 * vec2(x, y);
}

void main() {
  vec2 uv = v_objectUV;
  uv += .5;
  vec2 grainUV = uv * 1000.;

  float grain = noise(grainUV, vec2(0.));
  float mixerGrain = .4 * u_grainMixer * (grain - .5);

  const float firstFrameOffset = 41.5;
  float t = .5 * (u_time + firstFrameOffset);

  float radius = smoothstep(0., 1., length(uv - .5));
  float center = 1. - radius;
  for (float i = 1.; i <= 2.; i++) {
    uv.x += u_distortion * center / i * sin(t + i * .4 * smoothstep(.0, 1., uv.y)) * cos(.2 * t + i * 2.4 * smoothstep(.0, 1., uv.y));
    uv.y += u_distortion * center / i * cos(t + i * 2. * smoothstep(.0, 1., uv.x));
  }

  vec2 uvRotated = uv;
  uvRotated -= vec2(.5);
  float angle = 3. * u_swirl * radius;
  uvRotated = rotate(uvRotated, -angle);
  uvRotated += vec2(.5);

  vec3 color = vec3(0.);
  float opacity = 0.;
  float totalWeight = 0.;

  for (int i = 0; i < 10; i++) {
    if (i >= int(u_colorsCount)) break;

    vec2 pos = getPosition(i, t) + mixerGrain;
    vec3 colorFraction = u_colors[i].rgb * u_colors[i].a;
    float opacityFraction = u_colors[i].a;

    float dist = length(uvRotated - pos);

    dist = pow(dist, 3.5);
    float weight = 1. / (dist + 1e-3);
    color += colorFraction * weight;
    opacity += opacityFraction * weight;
    totalWeight += weight;
  }

  color /= max(1e-4, totalWeight);
  opacity /= max(1e-4, totalWeight);

  float grainOverlay = valueNoise(rotate(grainUV, 1.) + vec2(3.));
  grainOverlay = mix(grainOverlay, valueNoise(rotate(grainUV, 2.) + vec2(-1.)), .5);
  grainOverlay = pow(grainOverlay, 1.3);

  float grainOverlayV = grainOverlay * 2. - 1.;
  vec3 grainOverlayColor = vec3(step(0., grainOverlayV));
  float grainOverlayStrength = u_grainOverlay * abs(grainOverlayV);
  grainOverlayStrength = pow(grainOverlayStrength, .8);
  color = mix(color, grainOverlayColor, .35 * grainOverlayStrength);

  opacity += .5 * grainOverlayStrength;
  opacity = clamp(opacity, 0., 1.);

  fragColor = vec4(color, opacity);
}
`;var n=e.i(43476);let u={name:"Default",params:{...r.defaultObjectSizing,speed:1,frame:0,colors:["#e0eaff","#241d9a","#f75092","#9f50d3"],distortion:.8,swirl:.1,grainMixer:0,grainOverlay:0}};r.defaultObjectSizing,r.defaultObjectSizing,r.defaultObjectSizing;let c=(0,o.memo)(function({speed:e=u.params.speed,frame:o=u.params.frame,colors:a=u.params.colors,distortion:l=u.params.distortion,swirl:c=u.params.swirl,grainMixer:f=u.params.grainMixer,grainOverlay:g=u.params.grainOverlay,fit:m=u.params.fit,rotation:p=u.params.rotation,scale:d=u.params.scale,originX:h=u.params.originX,originY:v=u.params.originY,offsetX:x=u.params.offsetX,offsetY:_=u.params.offsetY,worldWidth:y=u.params.worldWidth,worldHeight:b=u.params.worldHeight,...w}){let S={u_colors:a.map(i.getShaderColorFromString),u_colorsCount:a.length,u_distortion:l,u_swirl:c,u_grainMixer:f,u_grainOverlay:g,u_fit:r.ShaderFitOptions[m],u_rotation:p,u_scale:d,u_offsetX:x,u_offsetY:_,u_originX:h,u_originY:v,u_worldWidth:y,u_worldHeight:b};return(0,n.jsx)(t.ShaderMount,{...w,speed:e,frame:o,fragmentShader:s,uniforms:S})},a.colorPropsAreEqual);e.s(["MeshGradient",0,c],80178)},12138,e=>{"use strict";var o=e.i(43476),t=e.i(57688),a=e.i(80178),r=e.i(71645),i=e.i(37881),l=e.i(573),s=e.i(21449),n=e.i(93344);let u=`#version 300 es
precision mediump float;

uniform float u_time;
uniform float u_scale;

uniform vec4 u_colors[10];
uniform float u_colorsCount;
uniform float u_stepsPerColor;
uniform float u_softness;

in vec2 v_patternUV;

out vec4 fragColor;

${n.simplexNoise}

float getNoise(vec2 uv, float t) {
  float noise = .5 * snoise(uv - vec2(0., .3 * t));
  noise += .5 * snoise(2. * uv + vec2(0., .32 * t));

  return noise;
}

float steppedSmooth(float m, float steps, float softness) {
  float stepT = floor(m * steps) / steps;
  float f = m * steps - floor(m * steps);
  float fw = steps * fwidth(m);
  float smoothed = smoothstep(.5 - softness, min(1., .5 + softness + fw), f);
  return stepT + smoothed / steps;
}

void main() {
  vec2 shape_uv = v_patternUV;
  shape_uv *= .1;

  float t = .2 * u_time;

  float shape = .5 + .5 * getNoise(shape_uv, t);

  bool u_extraSides = true;

  float mixer = shape * (u_colorsCount - 1.);
  if (u_extraSides == true) {
    mixer = (shape - .5 / u_colorsCount) * u_colorsCount;
  }

  float steps = max(1., u_stepsPerColor);

  vec4 gradient = u_colors[0];
  gradient.rgb *= gradient.a;
  for (int i = 1; i < 10; i++) {
    if (i >= int(u_colorsCount)) break;

    float localM = clamp(mixer - float(i - 1), 0., 1.);
    localM = steppedSmooth(localM, steps, .5 * u_softness);

    vec4 c = u_colors[i];
    c.rgb *= c.a;
    gradient = mix(gradient, c, localM);
  }

  if (u_extraSides == true) {
    if ((mixer < 0.) || (mixer > (u_colorsCount - 1.))) {
      float localM = mixer + 1.;
      if (mixer > (u_colorsCount - 1.)) {
        localM = mixer - (u_colorsCount - 1.);
      }
      localM = steppedSmooth(localM, steps, .5 * u_softness);
      vec4 cFst = u_colors[0];
      cFst.rgb *= cFst.a;
      vec4 cLast = u_colors[int(u_colorsCount - 1.)];
      cLast.rgb *= cLast.a;
      gradient = mix(cLast, cFst, localM);
    }
  }

  vec3 color = gradient.rgb;
  float opacity = gradient.a;

  ${n.colorBandingFix}

  fragColor = vec4(color, opacity);
}
`;var c=e.i(31967);let f={name:"Default",params:{...c.defaultPatternSizing,scale:.6,speed:.5,frame:0,colors:["#4449CF","#FFD1E0","#F94446","#FFD36B","#FFFFFF"],stepsPerColor:2,softness:0}};c.defaultPatternSizing,c.defaultPatternSizing,c.defaultPatternSizing;let g=(0,r.memo)(function({speed:e=f.params.speed,frame:t=f.params.frame,colors:a=f.params.colors,stepsPerColor:r=f.params.stepsPerColor,softness:l=f.params.softness,fit:n=f.params.fit,scale:g=f.params.scale,rotation:m=f.params.rotation,originX:p=f.params.originX,originY:d=f.params.originY,offsetX:h=f.params.offsetX,offsetY:v=f.params.offsetY,worldWidth:x=f.params.worldWidth,worldHeight:_=f.params.worldHeight,...y}){let b={u_colors:a.map(s.getShaderColorFromString),u_colorsCount:a.length,u_stepsPerColor:r,u_softness:l,u_fit:c.ShaderFitOptions[n],u_scale:g,u_rotation:m,u_offsetX:h,u_offsetY:v,u_originX:p,u_originY:d,u_worldWidth:x,u_worldHeight:_};return(0,o.jsx)(i.ShaderMount,{...y,speed:e,frame:t,fragmentShader:u,uniforms:b})},l.colorPropsAreEqual);var m=e.i(41443);function p({image:e,backgroundImage:t,paperBackgroundStyle:a,paperMockupStyle:r}){if(!e)return null;let i=t&&(a??{height:"148%",left:"-24%",top:"-22%",width:"148%"}),l=r??{height:"104%",left:"7%",top:"0%",width:"86%"};return(0,o.jsxs)("div",{"aria-hidden":"true",className:"relative h-full w-full overflow-hidden",children:[t&&i?(0,o.jsx)("div",{style:{backgroundImage:`url(${t})`,backgroundPosition:"center",backgroundSize:"cover",boxSizing:"border-box",height:i.height,left:i.left,position:"absolute",top:i.top,width:i.width}}):null,(0,o.jsx)("div",{style:{backgroundImage:`url(${e})`,backgroundPosition:"center",backgroundRepeat:"no-repeat",backgroundSize:"cover",boxSizing:"border-box",height:l.height,left:l.left,position:"absolute",top:l.top,width:l.width}})]})}function d(){let e=(0,m.usePrefersReducedMotion)();return(0,o.jsxs)("div",{"aria-hidden":"true",className:"relative h-full w-full overflow-hidden",style:{backgroundColor:"#2F6FE8"},children:[(0,o.jsx)(a.MeshGradient,{speed:1.5*!e,scale:1.67,distortion:.58,swirl:.19,frame:312711.3930000042,colors:["#6BB5FF","#1D5DF6","#4DA3FF"],style:{height:"150%",left:"-18%",position:"absolute",top:"-24%",width:"168%"}}),(0,o.jsx)(t.default,{alt:"",className:"absolute max-w-none select-none",draggable:!1,height:3896,sizes:"(max-width: 768px) 48vw, 44vw",src:"/work/uniconnect/home-phone.png",style:{filter:"drop-shadow(0 24px 34px rgba(8, 26, 58, 0.28))",height:"90%",left:"50%",top:"5%",transform:"translateX(-50%)",width:"auto"},width:1920}),(0,o.jsx)("div",{className:"absolute inset-0",style:{backgroundImage:"linear-gradient(180deg, rgba(255,255,255,0.14), transparent 32%, rgba(0,0,0,0.08))",pointerEvents:"none"}})]})}function h(){let e=(0,m.usePrefersReducedMotion)();return(0,o.jsxs)("div",{"aria-hidden":"true",className:"relative h-full w-full overflow-hidden",style:{backgroundColor:"#243D75"},children:[(0,o.jsx)(g,{speed:3.1*!e,scale:1.4,stepsPerColor:5,softness:1,frame:871826.1199999118,colors:["#699BFF","#1e3765"],style:{height:"150%",left:"50%",position:"absolute",top:"50%",translate:"-50% -50%",width:"150%"}}),(0,o.jsx)(t.default,{alt:"",className:"absolute h-auto max-w-none select-none",draggable:!1,height:3680,sizes:"(max-width: 768px) 48vw, 44vw",src:"/work/uoft-footprint/footprint-places-discovered-phone.png",style:{height:"110%",left:"50%",objectFit:"cover",top:"-5%",transform:"translateX(-50%)",width:"110%"},width:1800})]})}function v(){let e=(0,m.usePrefersReducedMotion)();return(0,o.jsxs)("div",{"aria-hidden":"true",className:"relative h-full overflow-hidden",style:{backgroundColor:"#FFFFFF",boxSizing:"border-box",fontSynthesis:"none",MozOsxFontSmoothing:"grayscale",WebkitFontSmoothing:"antialiased"},children:[(0,o.jsx)(a.MeshGradient,{speed:1.6*!e,scale:.76,distortion:1,swirl:.24,grainMixer:.27,grainOverlay:.07,frame:238357.60000000405,colors:["#FF9C63","#1A8B8C","#C9692C","#1DD5D6"],style:{height:"105%",left:0,position:"absolute",top:"-2.8%",width:"102%"}}),(0,o.jsx)(t.default,{alt:"",className:"absolute max-w-none select-none",draggable:!1,height:2800,sizes:"(max-width: 768px) 30vw, 28vw",src:"/work/oacao-knowledge-hub-frame.png",style:{filter:"drop-shadow(0 24px 44px rgba(44, 24, 16, 0.2))",height:"86%",left:"50%",top:"7%",transform:"translateX(-50%)",width:"auto"},width:1920})]})}function x(){let e=(0,m.usePrefersReducedMotion)();return(0,o.jsxs)("div",{"aria-hidden":"true",className:"relative h-full w-full overflow-hidden",style:{backgroundColor:"#FFFFFF"},children:[(0,o.jsx)(a.MeshGradient,{speed:.52*!e,scale:.72,distortion:0,swirl:1,frame:692552.1739999712,colors:["#FFE398","#92FFB1","#6AB7FF"],style:{height:"163.4%",left:"-21.7%",position:"absolute",top:"-52.2%",width:"136%"}}),(0,o.jsx)(t.default,{alt:"",className:"absolute max-w-none select-none",draggable:!1,height:2108,sizes:"(max-width: 768px) 112vw, 88vw",src:"/work/hamhoush/hamhoush-mockup.png",style:{top:"53%",left:"50%",height:"auto",width:"109%",transform:"translate(-50%, -50%)"},width:3200}),(0,o.jsx)("div",{className:"absolute inset-0",style:{backgroundImage:"linear-gradient(180deg, rgba(255,255,255,0.08), transparent 38%, rgba(26,44,64,0.03))",pointerEvents:"none"}})]})}e.s(["WorkIndexPreview",0,function({kind:e,image:t,backgroundImage:a,paperBackgroundStyle:r,paperMockupStyle:i}){return"paper"===e?(0,o.jsx)(p,{image:t,backgroundImage:a,paperBackgroundStyle:r,paperMockupStyle:i}):(0,o.jsx)("div",{className:"h-full w-full overflow-hidden",children:"proberoom"===e?(0,o.jsx)(x,{}):"student-event-discovery"===e?(0,o.jsx)(d,{}):"service-design-placeholder"===e?(0,o.jsx)(v,{}):(0,o.jsx)(h,{})})}],12138)},68877,e=>{"use strict";let o=(0,e.i(56420).default)("arrow-right",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);e.s(["ArrowRight",0,o],68877)},27784,e=>{"use strict";let o="portfolio-generation-agent";function t(e){return`portfolio-agent-cameo:${e}`}function a(e){try{return"true"===window.sessionStorage.getItem(t(e))}catch{return!0}}e.s(["claimCameo",0,function(e){if(a(e))return!1;try{return window.sessionStorage.setItem(t(e),"true"),!0}catch{return!1}},"getRememberedAgent",0,function(){try{let e=window.sessionStorage.getItem(o);if(!e)return null;let t=JSON.parse(e);return"string"==typeof t.name&&"string"==typeof t.color?{name:t.name,color:t.color}:null}catch{return null}},"hasCameoPlayed",0,a,"rememberAgent",0,function(e){try{window.sessionStorage.setItem(o,JSON.stringify(e))}catch{}}])},32492,e=>{"use strict";var o=e.i(43476),t=e.i(71645),a=e.i(37881),r=e.i(573),i=e.i(93344);let l=`#version 300 es
precision mediump float;

uniform vec2 u_resolution;
uniform float u_pixelRatio;
uniform float u_originX;
uniform float u_originY;
uniform float u_worldWidth;
uniform float u_worldHeight;
uniform float u_fit;

uniform float u_scale;
uniform float u_rotation;
uniform float u_offsetX;
uniform float u_offsetY;

uniform vec4 u_colorFront;
uniform vec4 u_colorBack;
uniform vec4 u_colorHighlight;

uniform sampler2D u_image;
uniform float u_imageAspectRatio;

uniform float u_type;
uniform float u_pxSize;
uniform bool u_originalColors;
uniform bool u_inverted;
uniform float u_colorSteps;

out vec4 fragColor;


${i.proceduralHash21}
${i.declarePI}

float getUvFrame(vec2 uv, vec2 pad) {
  float aa = 0.0001;

  float left   = smoothstep(-pad.x, -pad.x + aa, uv.x);
  float right  = smoothstep(1.0 + pad.x, 1.0 + pad.x - aa, uv.x);
  float bottom = smoothstep(-pad.y, -pad.y + aa, uv.y);
  float top    = smoothstep(1.0 + pad.y, 1.0 + pad.y - aa, uv.y);

  return left * right * bottom * top;
}

vec2 getImageUV(vec2 uv) {
  vec2 boxOrigin = vec2(.5 - u_originX, u_originY - .5);
  float r = u_rotation * PI / 180.;
  mat2 graphicRotation = mat2(cos(r), sin(r), -sin(r), cos(r));
  vec2 graphicOffset = vec2(-u_offsetX, u_offsetY);

  vec2 imageBoxSize;
  if (u_fit == 1.) { // contain
    imageBoxSize.x = min(u_resolution.x / u_imageAspectRatio, u_resolution.y) * u_imageAspectRatio;
  } else if (u_fit == 2.) { // cover
    imageBoxSize.x = max(u_resolution.x / u_imageAspectRatio, u_resolution.y) * u_imageAspectRatio;
  } else {
    imageBoxSize.x = min(10.0, 10.0 / u_imageAspectRatio * u_imageAspectRatio);
  }
  imageBoxSize.y = imageBoxSize.x / u_imageAspectRatio;
  vec2 imageBoxScale = u_resolution.xy / imageBoxSize;

  vec2 imageUV = uv;
  imageUV *= imageBoxScale;
  imageUV += boxOrigin * (imageBoxScale - 1.);
  imageUV += graphicOffset;
  imageUV /= u_scale;
  imageUV.x *= u_imageAspectRatio;
  imageUV = graphicRotation * imageUV;
  imageUV.x /= u_imageAspectRatio;

  imageUV += .5;
  imageUV.y = 1. - imageUV.y;

  return imageUV;
}

const int bayer2x2[4] = int[4](0, 2, 3, 1);
const int bayer4x4[16] = int[16](
0, 8, 2, 10,
12, 4, 14, 6,
3, 11, 1, 9,
15, 7, 13, 5
);

const int bayer8x8[64] = int[64](
0, 32, 8, 40, 2, 34, 10, 42,
48, 16, 56, 24, 50, 18, 58, 26,
12, 44, 4, 36, 14, 46, 6, 38,
60, 28, 52, 20, 62, 30, 54, 22,
3, 35, 11, 43, 1, 33, 9, 41,
51, 19, 59, 27, 49, 17, 57, 25,
15, 47, 7, 39, 13, 45, 5, 37,
63, 31, 55, 23, 61, 29, 53, 21
);

float getBayerValue(vec2 uv, int size) {
  ivec2 pos = ivec2(fract(uv / float(size)) * float(size));
  int index = pos.y * size + pos.x;

  if (size == 2) {
    return float(bayer2x2[index]) / 4.0;
  } else if (size == 4) {
    return float(bayer4x4[index]) / 16.0;
  } else if (size == 8) {
    return float(bayer8x8[index]) / 64.0;
  }
  return 0.0;
}


void main() {

  float pxSize = u_pxSize * u_pixelRatio;
  vec2 pxSizeUV = gl_FragCoord.xy - .5 * u_resolution;
  pxSizeUV /= pxSize;
  vec2 canvasPixelizedUV = (floor(pxSizeUV) + .5) * pxSize;
  vec2 normalizedUV = canvasPixelizedUV / u_resolution;

  vec2 imageUV = getImageUV(normalizedUV);
  vec2 ditheringNoiseUV = canvasPixelizedUV;
  vec4 image = texture(u_image, imageUV);
  float frame = getUvFrame(imageUV, pxSize / u_resolution);

  int type = int(floor(u_type));
  float dithering = 0.0;

  float lum = dot(vec3(.2126, .7152, .0722), image.rgb);
  lum = u_inverted ? (1. - lum) : lum;

  switch (type) {
    case 1: {
      dithering = step(hash21(ditheringNoiseUV), lum);
    } break;
    case 2:
    dithering = getBayerValue(pxSizeUV, 2);
    break;
    case 3:
    dithering = getBayerValue(pxSizeUV, 4);
    break;
    default :
    dithering = getBayerValue(pxSizeUV, 8);
    break;
  }

  float colorSteps = max(floor(u_colorSteps), 1.);
  vec3 color = vec3(0.0);
  float opacity = 1.;

  dithering -= .5;
  float brightness = clamp(lum + dithering / colorSteps, 0.0, 1.0);
  brightness = mix(0.0, brightness, frame);
  brightness = mix(0.0, brightness, image.a);
  float quantLum = floor(brightness * colorSteps + 0.5) / colorSteps;
  quantLum = mix(0.0, quantLum, frame);

  if (u_originalColors == true) {
    vec3 normColor = image.rgb / max(lum, 0.001);
    color = normColor * quantLum;

    float quantAlpha = floor(image.a * colorSteps + 0.5) / colorSteps;
    opacity = mix(quantLum, 1., quantAlpha);
  } else {
    vec3 fgColor = u_colorFront.rgb * u_colorFront.a;
    float fgOpacity = u_colorFront.a;
    vec3 bgColor = u_colorBack.rgb * u_colorBack.a;
    float bgOpacity = u_colorBack.a;
    vec3 hlColor = u_colorHighlight.rgb * u_colorHighlight.a;
    float hlOpacity = u_colorHighlight.a;

    fgColor = mix(fgColor, hlColor, step(1.02 - .02 * u_colorSteps, brightness));
    fgOpacity = mix(fgOpacity, hlOpacity, step(1.02 - .02 * u_colorSteps, brightness));

    color = fgColor * quantLum;
    opacity = fgOpacity * quantLum;
    color += bgColor * (1.0 - opacity);
    opacity += bgOpacity * (1.0 - opacity);
  }

  fragColor = vec4(color, opacity);
}
`;var s=e.i(21449),n=e.i(31967);i.simplexNoise,i.declarePI,i.proceduralHash11,i.proceduralHash21;let u={random:1,"2x2":2,"4x4":3,"8x8":4},c={name:"Default",params:{...n.defaultObjectSizing,fit:"cover",speed:0,frame:0,colorFront:"#94ffaf",colorBack:"#000c38",colorHighlight:"#eaff94",type:"8x8",size:2,colorSteps:2,originalColors:!1,inverted:!1}};n.defaultObjectSizing,n.defaultObjectSizing,n.defaultObjectSizing;let f=(0,t.memo)(function({speed:e=c.params.speed,frame:t=c.params.frame,colorFront:r=c.params.colorFront,colorBack:i=c.params.colorBack,colorHighlight:f=c.params.colorHighlight,image:g="",type:m=c.params.type,colorSteps:p=c.params.colorSteps,originalColors:d=c.params.originalColors,inverted:h=c.params.inverted,pxSize:v,size:x=void 0===v?c.params.size:v,fit:_=c.params.fit,scale:y=c.params.scale,rotation:b=c.params.rotation,originX:w=c.params.originX,originY:S=c.params.originY,offsetX:F=c.params.offsetX,offsetY:C=c.params.offsetY,worldWidth:z=c.params.worldWidth,worldHeight:O=c.params.worldHeight,...V}){let U={u_image:g,u_colorFront:(0,s.getShaderColorFromString)(r),u_colorBack:(0,s.getShaderColorFromString)(i),u_colorHighlight:(0,s.getShaderColorFromString)(f),u_type:u[m],u_pxSize:x,u_colorSteps:p,u_originalColors:d,u_inverted:h,u_fit:n.ShaderFitOptions[_],u_rotation:b,u_scale:y,u_offsetX:F,u_offsetY:C,u_originX:w,u_originY:S,u_worldWidth:z,u_worldHeight:O};return(0,o.jsx)(a.ShaderMount,{...V,speed:e,frame:t,fragmentShader:l,uniforms:U})},r.colorPropsAreEqual);e.s(["WritingDitherImage",0,function({image:e,className:t,size:a=.8}){return(0,o.jsx)("div",{"aria-hidden":"true",className:t,children:(0,o.jsx)(f,{originalColors:!0,inverted:!1,type:"8x8",size:a,colorSteps:6,image:e,scale:1,fit:"cover",colorFront:"#00000000",colorHighlight:"#00000000",colorBack:"#00000000",style:{display:"block",height:"100%",width:"100%"}})})}],32492)}]);