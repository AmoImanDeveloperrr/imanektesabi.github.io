(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,11241,e=>{"use strict";let t=(0,e.i(56420).default)("arrow-left",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);e.s(["ArrowLeft",0,t],11241)},18581,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"useMergedRef",{enumerable:!0,get:function(){return n}});let i=e.r(71645);function n(e,t){let r=(0,i.useRef)(null),n=(0,i.useRef)(null);return(0,i.useCallback)(i=>{if(null===i){let e=r.current;e&&(r.current=null,e());let t=n.current;t&&(n.current=null,t())}else e&&(r.current=o(e,i)),t&&(n.current=o(t,i))},[e,t])}function o(e,t){if("function"!=typeof e)return e.current=t,()=>{e.current=null};{let r=e(t);return"function"==typeof r?r:()=>e(null)}}("function"==typeof r.default||"object"==typeof r.default&&null!==r.default)&&void 0===r.default.__esModule&&(Object.defineProperty(r.default,"__esModule",{value:!0}),Object.assign(r.default,r),t.exports=r.default)},96661,5014,e=>{"use strict";let t=(...e)=>e.filter((e,t,r)=>!!e&&""!==e.trim()&&r.indexOf(e)===t).join(" ").trim();e.s(["mergeClasses",0,t],96661);var r=e.i(71645),i={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};let n=(0,r.createContext)({}),o=(0,r.forwardRef)(({color:e,size:o,strokeWidth:a,absoluteStrokeWidth:s,className:l="",children:u,iconNode:c,...d},h)=>{let{size:f=24,strokeWidth:p=2,absoluteStrokeWidth:g=!1,color:m="currentColor",className:v=""}=(0,r.useContext)(n)??{},x=s??g?24*Number(a??p)/Number(o??f):a??p;return(0,r.createElement)("svg",{ref:h,...i,width:o??f??i.width,height:o??f??i.height,stroke:e??m,strokeWidth:x,className:t("lucide",v,l),...!u&&!(e=>{for(let t in e)if(t.startsWith("aria-")||"role"===t||"title"===t)return!0;return!1})(d)&&{"aria-hidden":"true"},...d},[...c.map(([e,t])=>(0,r.createElement)(e,t)),...Array.isArray(u)?u:[u]])});e.s(["default",0,o],5014)},56420,e=>{"use strict";var t=e.i(71645),r=e.i(96661);let i=e=>{let t=e.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,t,r)=>r?r.toUpperCase():t.toLowerCase());return t.charAt(0).toUpperCase()+t.slice(1)};var n=e.i(5014);e.s(["default",0,(e,o)=>{let a=(0,t.forwardRef)(({className:a,...s},l)=>(0,t.createElement)(n.default,{ref:l,iconNode:o,className:(0,r.mergeClasses)(`lucide-${i(e).replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase()}`,`lucide-${e}`,a),...s}));return a.displayName=i(e),a}],56420)},95057,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});var i={formatUrl:function(){return s},formatWithValidation:function(){return u},urlObjectKeys:function(){return l}};for(var n in i)Object.defineProperty(r,n,{enumerable:!0,get:i[n]});let o=e.r(90809)._(e.r(98183)),a=/https?|ftp|gopher|file/;function s(e){let{auth:t,hostname:r}=e,i=e.protocol||"",n=e.pathname||"",s=e.hash||"",l=e.query||"",u=!1;t=t?encodeURIComponent(t).replace(/%3A/i,":")+"@":"",e.host?u=t+e.host:r&&(u=t+(~r.indexOf(":")?`[${r}]`:r),e.port&&(u+=":"+e.port)),l&&"object"==typeof l&&(l=String(o.urlQueryToSearchParams(l)));let c=e.search||l&&`?${l}`||"";return i&&!i.endsWith(":")&&(i+=":"),e.slashes||(!i||a.test(i))&&!1!==u?(u="//"+(u||""),n&&"/"!==n[0]&&(n="/"+n)):u||(u=""),s&&"#"!==s[0]&&(s="#"+s),c&&"?"!==c[0]&&(c="?"+c),n=n.replace(/[?#]/g,encodeURIComponent),c=c.replace("#","%23"),`${i}${u}${n}${c}${s}`}let l=["auth","hash","host","hostname","href","path","pathname","port","protocol","query","search","slashes"];function u(e){return s(e)}},73668,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"isLocalURL",{enumerable:!0,get:function(){return o}});let i=e.r(18967),n=e.r(52817);function o(e){if(!(0,i.isAbsoluteUrl)(e))return!0;try{let t=(0,i.getLocationOrigin)(),r=new URL(e,t);return r.origin===t&&(0,n.hasBasePath)(r.pathname)}catch(e){return!1}}},84508,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"errorOnce",{enumerable:!0,get:function(){return i}});let i=e=>{}},22016,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});var i={default:function(){return v},useLinkStatus:function(){return _}};for(var n in i)Object.defineProperty(r,n,{enumerable:!0,get:i[n]});let o=e.r(90809),a=e.r(43476),s=o._(e.r(71645)),l=e.r(95057),u=e.r(8372),c=e.r(18581),d=e.r(18967),h=e.r(5550);e.r(33525);let f=e.r(88540),p=e.r(91949),g=e.r(73668),m=e.r(9396);function v(t){var r,i;let n,o,v,[_,y]=(0,s.useOptimistic)(p.IDLE_LINK_STATUS),b=(0,s.useRef)(null),{href:S,as:w,children:R,prefetch:E=null,passHref:P,replace:U,shallow:A,scroll:z,onClick:O,onMouseEnter:C,onTouchStart:B,legacyBehavior:M=!1,onNavigate:T,transitionTypes:j,ref:I,unstable_dynamicOnHover:L,...D}=t;n=R,M&&("string"==typeof n||"number"==typeof n)&&(n=(0,a.jsx)("a",{children:n}));let V=s.default.useContext(u.AppRouterContext),F=!1!==E,W=!1!==E?null===(i=E)||"auto"===i?m.FetchStrategy.PPR:m.FetchStrategy.Full:m.FetchStrategy.PPR,$="string"==typeof(r=w||S)?r:(0,l.formatUrl)(r);if(M){if(n?.$$typeof===Symbol.for("react.lazy"))throw Object.defineProperty(Error("`<Link legacyBehavior>` received a direct child that is either a Server Component, or JSX that was loaded with React.lazy(). This is not supported. Either remove legacyBehavior, or make the direct child a Client Component that renders the Link's `<a>` tag."),"__NEXT_ERROR_CODE",{value:"E863",enumerable:!1,configurable:!0});o=s.default.Children.only(n)}let N=M?o&&"object"==typeof o&&o.ref:I,k=s.default.useCallback(e=>(null!==V&&(b.current=(0,p.mountLinkInstance)(e,$,V,W,F,y)),()=>{b.current&&((0,p.unmountLinkForCurrentNavigation)(b.current),b.current=null),(0,p.unmountPrefetchableInstance)(e)}),[F,$,V,W,y]),H={ref:(0,c.useMergedRef)(k,N),onClick(t){M||"function"!=typeof O||O(t),M&&o.props&&"function"==typeof o.props.onClick&&o.props.onClick(t),!V||t.defaultPrevented||function(t,r,i,n,o,a,l){if("u">typeof window){let u,{nodeName:c}=t.currentTarget;if("A"===c.toUpperCase()&&((u=t.currentTarget.getAttribute("target"))&&"_self"!==u||t.metaKey||t.ctrlKey||t.shiftKey||t.altKey||t.nativeEvent&&2===t.nativeEvent.which)||t.currentTarget.hasAttribute("download"))return;if(!(0,g.isLocalURL)(r)){n&&(t.preventDefault(),location.replace(r));return}if(t.preventDefault(),a){let e=!1;if(a({preventDefault:()=>{e=!0}}),e)return}let{dispatchNavigateAction:d}=e.r(99781);s.default.startTransition(()=>{d(r,n?"replace":"push",!1===o?f.ScrollBehavior.NoScroll:f.ScrollBehavior.Default,i.current,l)})}}(t,$,b,U,z,T,j)},onMouseEnter(e){M||"function"!=typeof C||C(e),M&&o.props&&"function"==typeof o.props.onMouseEnter&&o.props.onMouseEnter(e),V&&F&&(0,p.onNavigationIntent)(e.currentTarget,!0===L)},onTouchStart:function(e){M||"function"!=typeof B||B(e),M&&o.props&&"function"==typeof o.props.onTouchStart&&o.props.onTouchStart(e),V&&F&&(0,p.onNavigationIntent)(e.currentTarget,!0===L)}};return(0,d.isAbsoluteUrl)($)?H.href=$:M&&!P&&("a"!==o.type||"href"in o.props)||(H.href=(0,h.addBasePath)($)),v=M?s.default.cloneElement(o,H):(0,a.jsx)("a",{...D,...H,children:n}),(0,a.jsx)(x.Provider,{value:_,children:v})}e.r(84508);let x=(0,s.createContext)(p.IDLE_LINK_STATUS),_=()=>(0,s.useContext)(x);("function"==typeof r.default||"object"==typeof r.default&&null!==r.default)&&void 0===r.default.__esModule&&(Object.defineProperty(r.default,"__esModule",{value:!0}),Object.assign(r.default,r),t.exports=r.default)},41443,e=>{"use strict";var t=e.i(71645);let r="(prefers-reduced-motion: reduce)";function i(e){if(!window.matchMedia)return()=>{};let t=window.matchMedia(r);return t.addEventListener("change",e),()=>t.removeEventListener("change",e)}function n(){return!!window.matchMedia&&window.matchMedia(r).matches}e.s(["prefersReducedMotion",0,n,"usePrefersReducedMotion",0,function(){return(0,t.useSyncExternalStore)(i,n,()=>!1)}])},88143,(e,t,r)=>{"use strict";function i({widthInt:e,heightInt:t,blurWidth:r,blurHeight:n,blurDataURL:o,objectFit:a}){let s=r?40*r:e,l=n?40*n:t,u=s&&l?`viewBox='0 0 ${s} ${l}'`:"";return`%3Csvg xmlns='http://www.w3.org/2000/svg' ${u}%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='${u?"none":"contain"===a?"xMidYMid":"cover"===a?"xMidYMid slice":"none"}' style='filter: url(%23b);' href='${o}'/%3E%3C/svg%3E`}Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"getImageBlurSvg",{enumerable:!0,get:function(){return i}})},87690,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});var i={VALID_LOADERS:function(){return o},imageConfigDefault:function(){return a}};for(var n in i)Object.defineProperty(r,n,{enumerable:!0,get:i[n]});let o=["default","imgix","cloudinary","akamai","custom"],a={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[32,48,64,96,128,256,384],path:"/_next/image",loader:"default",loaderFile:"",domains:[],disableStaticImages:!1,minimumCacheTTL:14400,formats:["image/webp"],maximumDiskCacheSize:void 0,maximumRedirects:3,maximumResponseBody:5e7,dangerouslyAllowLocalIP:!1,dangerouslyAllowSVG:!1,contentSecurityPolicy:"script-src 'none'; frame-src 'none'; sandbox;",contentDispositionType:"attachment",localPatterns:void 0,remotePatterns:[],qualities:[75],unoptimized:!1,customCacheHandler:!1}},8927,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"getImgProps",{enumerable:!0,get:function(){return u}}),e.r(33525);let i=e.r(43369),n=e.r(88143),o=e.r(87690),a=["-moz-initial","fill","none","scale-down",void 0];function s(e){return void 0!==e.default}function l(e){return void 0===e?e:"number"==typeof e?Number.isFinite(e)?e:NaN:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function u({src:e,sizes:t,unoptimized:r=!1,priority:c=!1,preload:d=!1,loading:h,className:f,quality:p,width:g,height:m,fill:v=!1,style:x,overrideSrc:_,onLoad:y,onLoadingComplete:b,placeholder:S="empty",blurDataURL:w,fetchPriority:R,decoding:E="async",layout:P,objectFit:U,objectPosition:A,lazyBoundary:z,lazyRoot:O,...C},B){var M;let T,j,I,{imgConf:L,showAltText:D,blurComplete:V,defaultLoader:F}=B,W=L||o.imageConfigDefault;if("allSizes"in W)T=W;else{let e=[...W.deviceSizes,...W.imageSizes].sort((e,t)=>e-t),t=W.deviceSizes.sort((e,t)=>e-t),r=W.qualities?.sort((e,t)=>e-t);T={...W,allSizes:e,deviceSizes:t,qualities:r}}if(void 0===F)throw Object.defineProperty(Error("images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config"),"__NEXT_ERROR_CODE",{value:"E163",enumerable:!1,configurable:!0});let $=C.loader||F;delete C.loader,delete C.srcSet;let N="__next_img_default"in $;if(N){if("custom"===T.loader)throw Object.defineProperty(Error(`Image with src "${e}" is missing "loader" prop.
Read more: https://nextjs.org/docs/messages/next-image-missing-loader`),"__NEXT_ERROR_CODE",{value:"E252",enumerable:!1,configurable:!0})}else{let e=$;$=t=>{let{config:r,...i}=t;return e(i)}}if(P){"fill"===P&&(v=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[P];e&&(x={...x,...e});let r={responsive:"100vw",fill:"100vw"}[P];r&&!t&&(t=r)}let k="",H=l(g),G=l(m);if((M=e)&&"object"==typeof M&&(s(M)||void 0!==M.src)){let t=s(e)?e.default:e;if(!t.src)throw Object.defineProperty(Error(`An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ${JSON.stringify(t)}`),"__NEXT_ERROR_CODE",{value:"E460",enumerable:!1,configurable:!0});if(!t.height||!t.width)throw Object.defineProperty(Error(`An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ${JSON.stringify(t)}`),"__NEXT_ERROR_CODE",{value:"E48",enumerable:!1,configurable:!0});if(j=t.blurWidth,I=t.blurHeight,w=w||t.blurDataURL,k=t.src,!v)if(H||G){if(H&&!G){let e=H/t.width;G=Math.round(t.height*e)}else if(!H&&G){let e=G/t.height;H=Math.round(t.width*e)}}else H=t.width,G=t.height}let X=!c&&!d&&("lazy"===h||void 0===h);(!(e="string"==typeof e?e:k)||e.startsWith("data:")||e.startsWith("blob:"))&&(r=!0,X=!1),T.unoptimized&&(r=!0),N&&!T.dangerouslyAllowSVG&&e.split("?",1)[0].endsWith(".svg")&&(r=!0);let q=l(p),Y=Object.assign(v?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:U,objectPosition:A}:{},D?{}:{color:"transparent"},x),K=V||"empty"===S?null:"blur"===S?`url("data:image/svg+xml;charset=utf-8,${(0,n.getImageBlurSvg)({widthInt:H,heightInt:G,blurWidth:j,blurHeight:I,blurDataURL:w||"",objectFit:Y.objectFit})}")`:`url("${S}")`,Q=a.includes(Y.objectFit)?"fill"===Y.objectFit?"100% 100%":"cover":Y.objectFit,J=K?{backgroundSize:Q,backgroundPosition:Y.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:K}:{},Z=function({config:e,src:t,unoptimized:r,width:n,quality:o,sizes:a,loader:s}){if(r){if(t.startsWith("/")&&!t.startsWith("//")){let e=(0,i.getDeploymentId)();if(e){let r=t.indexOf("?");if(-1!==r){let i=new URLSearchParams(t.slice(r+1));i.get("dpl")||(i.append("dpl",e),t=t.slice(0,r)+"?"+i.toString())}else t+=`?dpl=${e}`}}return{src:t,srcSet:void 0,sizes:void 0}}let{widths:l,kind:u}=function({deviceSizes:e,allSizes:t},r,i){if(i){let r=/(^|\s)(1?\d?\d)vw/g,n=[];for(let e;e=r.exec(i);)n.push(parseInt(e[2]));if(n.length){let r=.01*Math.min(...n);return{widths:t.filter(t=>t>=e[0]*r),kind:"w"}}return{widths:t,kind:"w"}}return"number"!=typeof r?{widths:e,kind:"w"}:{widths:[...new Set([r,2*r].map(e=>t.find(t=>t>=e)||t[t.length-1]))],kind:"x"}}(e,n,a),c=l.length-1;return{sizes:a||"w"!==u?a:"100vw",srcSet:l.map((r,i)=>`${s({config:e,src:t,quality:o,width:r})} ${"w"===u?r:i+1}${u}`).join(", "),src:s({config:e,src:t,quality:o,width:l[c]})}}({config:T,src:e,unoptimized:r,width:H,quality:q,sizes:t,loader:$}),ee=X?"lazy":h;return{props:{...C,loading:ee,fetchPriority:R,width:H,height:G,decoding:E,className:f,style:{...Y,...J},sizes:Z.sizes,srcSet:Z.srcSet,src:_||Z.src},meta:{unoptimized:r,preload:d||c,placeholder:S,fill:v}}}},98879,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"default",{enumerable:!0,get:function(){return s}});let i=e.r(71645),n="u"<typeof window,o=n?()=>{}:i.useLayoutEffect,a=n?()=>{}:i.useEffect;function s(e){let{headManager:t,reduceComponentsToState:r}=e;function s(){if(t&&t.mountedInstances){let e=i.Children.toArray(Array.from(t.mountedInstances).filter(Boolean));t.updateHead(r(e))}}return n&&(t?.mountedInstances?.add(e.children),s()),o(()=>(t?.mountedInstances?.add(e.children),()=>{t?.mountedInstances?.delete(e.children)})),o(()=>(t&&(t._pendingUpdate=s),()=>{t&&(t._pendingUpdate=s)})),a(()=>(t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null),()=>{t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null)})),null}},25633,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});var i={default:function(){return g},defaultHead:function(){return d}};for(var n in i)Object.defineProperty(r,n,{enumerable:!0,get:i[n]});let o=e.r(55682),a=e.r(90809),s=e.r(43476),l=a._(e.r(71645)),u=o._(e.r(98879)),c=e.r(42732);function d(){return[(0,s.jsx)("meta",{charSet:"utf-8"},"charset"),(0,s.jsx)("meta",{name:"viewport",content:"width=device-width"},"viewport")]}function h(e,t){return"string"==typeof t||"number"==typeof t?e:t.type===l.default.Fragment?e.concat(l.default.Children.toArray(t.props.children).reduce((e,t)=>"string"==typeof t||"number"==typeof t?e:e.concat(t),[])):e.concat(t)}e.r(33525);let f=["name","httpEquiv","charSet","itemProp"];function p(e){let t,r,i,n;return e.reduce(h,[]).reverse().concat(d().reverse()).filter((t=new Set,r=new Set,i=new Set,n={},e=>{let o=!0,a=!1;if(e.key&&"number"!=typeof e.key&&e.key.indexOf("$")>0){a=!0;let r=e.key.slice(e.key.indexOf("$")+1);t.has(r)?o=!1:t.add(r)}switch(e.type){case"title":case"base":r.has(e.type)?o=!1:r.add(e.type);break;case"meta":for(let t=0,r=f.length;t<r;t++){let r=f[t];if(e.props.hasOwnProperty(r))if("charSet"===r)i.has(r)?o=!1:i.add(r);else{let t=e.props[r],i=n[r]||new Set;("name"!==r||!a)&&i.has(t)?o=!1:(i.add(t),n[r]=i)}}}return o})).reverse().map((e,t)=>{let r=e.key||t;return l.default.cloneElement(e,{key:r})})}let g=function({children:e}){let t=(0,l.useContext)(c.HeadManagerContext);return(0,s.jsx)(u.default,{reduceComponentsToState:p,headManager:t,children:e})};("function"==typeof r.default||"object"==typeof r.default&&null!==r.default)&&void 0===r.default.__esModule&&(Object.defineProperty(r.default,"__esModule",{value:!0}),Object.assign(r.default,r),t.exports=r.default)},18556,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"ImageConfigContext",{enumerable:!0,get:function(){return o}});let i=e.r(55682)._(e.r(71645)),n=e.r(87690),o=i.default.createContext(n.imageConfigDefault)},65856,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"RouterContext",{enumerable:!0,get:function(){return i}});let i=e.r(55682)._(e.r(71645)).default.createContext(null)},70965,(e,t,r)=>{"use strict";function i(e,t){let r=e||75;return t?.qualities?.length?t.qualities.reduce((e,t)=>Math.abs(t-r)<Math.abs(e-r)?t:e,t.qualities[0]):r}Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"findClosestQuality",{enumerable:!0,get:function(){return i}})},1948,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"default",{enumerable:!0,get:function(){return a}});let i=e.r(70965),n=e.r(43369);function o({config:e,src:t,width:r,quality:a}){let s=(0,n.getDeploymentId)();if(t.startsWith("/")&&!t.startsWith("//")){let e=t.indexOf("?");if(-1!==e){let r=new URLSearchParams(t.slice(e+1)),i=r.get("dpl");if(i){s=i,r.delete("dpl");let n=r.toString();t=t.slice(0,e)+(n?"?"+n:"")}}}if(t.startsWith("/")&&t.includes("?")&&e.localPatterns?.length===1&&"**"===e.localPatterns[0].pathname&&""===e.localPatterns[0].search)throw Object.defineProperty(Error(`Image with src "${t}" is using a query string which is not configured in images.localPatterns.
Read more: https://nextjs.org/docs/messages/next-image-unconfigured-localpatterns`),"__NEXT_ERROR_CODE",{value:"E871",enumerable:!1,configurable:!0});let l=(0,i.findClosestQuality)(a,e);return t}o.__next_img_default=!0;let a=o},85437,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"Image",{enumerable:!0,get:function(){return y}});let i=e.r(55682),n=e.r(90809),o=e.r(43476),a=n._(e.r(71645)),s=i._(e.r(74080)),l=i._(e.r(25633)),u=e.r(8927),c=e.r(87690),d=e.r(18556);e.r(33525);let h=e.r(65856),f=i._(e.r(1948)),p=e.r(18581),g={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[32,48,64,96,128,256,384],qualities:[75],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1};function m(e,t,r,i,n,o,a){let s=e?.src;e&&e["data-loaded-src"]!==s&&(e["data-loaded-src"]=s,("decode"in e?e.decode():Promise.resolve()).catch(()=>{}).then(()=>{if(e.parentElement&&e.isConnected){if("empty"!==t&&n(!0),r?.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let i=!1,n=!1;r.current({...t,nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>i,isPropagationStopped:()=>n,persist:()=>{},preventDefault:()=>{i=!0,t.preventDefault()},stopPropagation:()=>{n=!0,t.stopPropagation()}})}i?.current&&i.current(e)}}))}function v(e){return a.use?{fetchPriority:e}:{fetchpriority:e}}"u"<typeof window&&(globalThis.__NEXT_IMAGE_IMPORTED=!0);let x=(0,a.forwardRef)(({src:e,srcSet:t,sizes:r,height:i,width:n,decoding:s,className:l,style:u,fetchPriority:c,placeholder:d,loading:h,unoptimized:f,fill:g,onLoadRef:x,onLoadingCompleteRef:_,setBlurComplete:y,setShowAltText:b,sizesInput:S,onLoad:w,onError:R,...E},P)=>{let U=(0,a.useCallback)(e=>{e&&(R&&(e.src=e.src),e.complete&&m(e,d,x,_,y,f,S))},[e,d,x,_,y,R,f,S]),A=(0,p.useMergedRef)(P,U);return(0,o.jsx)("img",{...E,...v(c),loading:h,width:n,height:i,decoding:s,"data-nimg":g?"fill":"1",className:l,style:u,sizes:r,srcSet:t,src:e,ref:A,onLoad:e=>{m(e.currentTarget,d,x,_,y,f,S)},onError:e=>{b(!0),"empty"!==d&&y(!0),R&&R(e)}})});function _({isAppRouter:e,imgAttributes:t}){let r={as:"image",imageSrcSet:t.srcSet,imageSizes:t.sizes,crossOrigin:t.crossOrigin,referrerPolicy:t.referrerPolicy,...v(t.fetchPriority)};return e&&s.default.preload?(s.default.preload(t.src,r),null):(0,o.jsx)(l.default,{children:(0,o.jsx)("link",{rel:"preload",href:t.srcSet?void 0:t.src,...r},"__nimg-"+t.src+t.srcSet+t.sizes)})}let y=(0,a.forwardRef)((e,t)=>{let r=(0,a.useContext)(h.RouterContext),i=(0,a.useContext)(d.ImageConfigContext),n=(0,a.useMemo)(()=>{let e=g||i||c.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),r=e.deviceSizes.sort((e,t)=>e-t),n=e.qualities?.sort((e,t)=>e-t);return{...e,allSizes:t,deviceSizes:r,qualities:n,localPatterns:"u"<typeof window?i?.localPatterns:e.localPatterns}},[i]),{onLoad:s,onLoadingComplete:l}=e,p=(0,a.useRef)(s);(0,a.useEffect)(()=>{p.current=s},[s]);let m=(0,a.useRef)(l);(0,a.useEffect)(()=>{m.current=l},[l]);let[v,y]=(0,a.useState)(!1),[b,S]=(0,a.useState)(!1),{props:w,meta:R}=(0,u.getImgProps)(e,{defaultLoader:f.default,imgConf:n,blurComplete:v,showAltText:b});return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(x,{...w,unoptimized:R.unoptimized,placeholder:R.placeholder,fill:R.fill,onLoadRef:p,onLoadingCompleteRef:m,setBlurComplete:y,setShowAltText:S,sizesInput:e.sizes,ref:t}),R.preload?(0,o.jsx)(_,{isAppRouter:!r,imgAttributes:w}):null]})});("function"==typeof r.default||"object"==typeof r.default&&null!==r.default)&&void 0===r.default.__esModule&&(Object.defineProperty(r.default,"__esModule",{value:!0}),Object.assign(r.default,r),t.exports=r.default)},37881,e=>{"use strict";var t=e.i(71645);let r=`#version 300 es
precision mediump float;

layout(location = 0) in vec4 a_position;

uniform vec2 u_resolution;
uniform float u_pixelRatio;
uniform float u_imageAspectRatio;
uniform float u_originX;
uniform float u_originY;
uniform float u_worldWidth;
uniform float u_worldHeight;
uniform float u_fit;
uniform float u_scale;
uniform float u_rotation;
uniform float u_offsetX;
uniform float u_offsetY;

out vec2 v_objectUV;
out vec2 v_objectBoxSize;
out vec2 v_responsiveUV;
out vec2 v_responsiveBoxGivenSize;
out vec2 v_patternUV;
out vec2 v_patternBoxSize;
out vec2 v_imageUV;

vec3 getBoxSize(float boxRatio, vec2 givenBoxSize) {
  vec2 box = vec2(0.);
  // fit = none
  box.x = boxRatio * min(givenBoxSize.x / boxRatio, givenBoxSize.y);
  float noFitBoxWidth = box.x;
  if (u_fit == 1.) { // fit = contain
    box.x = boxRatio * min(u_resolution.x / boxRatio, u_resolution.y);
  } else if (u_fit == 2.) { // fit = cover
    box.x = boxRatio * max(u_resolution.x / boxRatio, u_resolution.y);
  }
  box.y = box.x / boxRatio;
  return vec3(box, noFitBoxWidth);
}

void main() {
  gl_Position = a_position;

  vec2 uv = gl_Position.xy * .5;
  vec2 boxOrigin = vec2(.5 - u_originX, u_originY - .5);
  vec2 givenBoxSize = vec2(u_worldWidth, u_worldHeight);
  givenBoxSize = max(givenBoxSize, vec2(1.)) * u_pixelRatio;
  float r = u_rotation * 3.14159265358979323846 / 180.;
  mat2 graphicRotation = mat2(cos(r), sin(r), -sin(r), cos(r));
  vec2 graphicOffset = vec2(-u_offsetX, u_offsetY);


  // ===================================================

  float fixedRatio = 1.;
  vec2 fixedRatioBoxGivenSize = vec2(
  (u_worldWidth == 0.) ? u_resolution.x : givenBoxSize.x,
  (u_worldHeight == 0.) ? u_resolution.y : givenBoxSize.y
  );

  v_objectBoxSize = getBoxSize(fixedRatio, fixedRatioBoxGivenSize).xy;
  vec2 objectWorldScale = u_resolution.xy / v_objectBoxSize;

  v_objectUV = uv;
  v_objectUV *= objectWorldScale;
  v_objectUV += boxOrigin * (objectWorldScale - 1.);
  v_objectUV += graphicOffset;
  v_objectUV /= u_scale;
  v_objectUV = graphicRotation * v_objectUV;

  // ===================================================

  v_responsiveBoxGivenSize = vec2(
  (u_worldWidth == 0.) ? u_resolution.x : givenBoxSize.x,
  (u_worldHeight == 0.) ? u_resolution.y : givenBoxSize.y
  );
  float responsiveRatio = v_responsiveBoxGivenSize.x / v_responsiveBoxGivenSize.y;
  vec2 responsiveBoxSize = getBoxSize(responsiveRatio, v_responsiveBoxGivenSize).xy;
  vec2 responsiveBoxScale = u_resolution.xy / responsiveBoxSize;

  #ifdef ADD_HELPERS
  v_responsiveHelperBox = uv;
  v_responsiveHelperBox *= responsiveBoxScale;
  v_responsiveHelperBox += boxOrigin * (responsiveBoxScale - 1.);
  #endif

  v_responsiveUV = uv;
  v_responsiveUV *= responsiveBoxScale;
  v_responsiveUV += boxOrigin * (responsiveBoxScale - 1.);
  v_responsiveUV += graphicOffset;
  v_responsiveUV /= u_scale;
  v_responsiveUV.x *= responsiveRatio;
  v_responsiveUV = graphicRotation * v_responsiveUV;
  v_responsiveUV.x /= responsiveRatio;

  // ===================================================

  float patternBoxRatio = givenBoxSize.x / givenBoxSize.y;
  vec2 patternBoxGivenSize = vec2(
  (u_worldWidth == 0.) ? u_resolution.x : givenBoxSize.x,
  (u_worldHeight == 0.) ? u_resolution.y : givenBoxSize.y
  );
  patternBoxRatio = patternBoxGivenSize.x / patternBoxGivenSize.y;

  vec3 boxSizeData = getBoxSize(patternBoxRatio, patternBoxGivenSize);
  v_patternBoxSize = boxSizeData.xy;
  float patternBoxNoFitBoxWidth = boxSizeData.z;
  vec2 patternBoxScale = u_resolution.xy / v_patternBoxSize;

  v_patternUV = uv;
  v_patternUV += graphicOffset / patternBoxScale;
  v_patternUV += boxOrigin;
  v_patternUV -= boxOrigin / patternBoxScale;
  v_patternUV *= u_resolution.xy;
  v_patternUV /= u_pixelRatio;
  if (u_fit > 0.) {
    v_patternUV *= (patternBoxNoFitBoxWidth / v_patternBoxSize.x);
  }
  v_patternUV /= u_scale;
  v_patternUV = graphicRotation * v_patternUV;
  v_patternUV += boxOrigin / patternBoxScale;
  v_patternUV -= boxOrigin;
  // x100 is a default multiplier between vertex and fragmant shaders
  // we use it to avoid UV presision issues
  v_patternUV *= .01;

  // ===================================================

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

  v_imageUV = uv;
  v_imageUV *= imageBoxScale;
  v_imageUV += boxOrigin * (imageBoxScale - 1.);
  v_imageUV += graphicOffset;
  v_imageUV /= u_scale;
  v_imageUV.x *= u_imageAspectRatio;
  v_imageUV = graphicRotation * v_imageUV;
  v_imageUV.x /= u_imageAspectRatio;

  v_imageUV += .5;
  v_imageUV.y = 1. - v_imageUV.y;
}`,i=8294400;class n{parentElement;canvasElement;gl;program=null;uniformLocations={};fragmentShader;rafId=null;lastRenderTime=0;currentFrame=0;speed=0;currentSpeed=0;providedUniforms;mipmaps=[];hasBeenDisposed=!1;resolutionChanged=!0;textures=new Map;minPixelRatio;maxPixelCount;isSafari=(function(){let e=navigator.userAgent.toLowerCase();return e.includes("safari")&&!e.includes("chrome")&&!e.includes("android")})();uniformCache={};textureUnitMap=new Map;ownerDocument;constructor(e,t,r,n,o=0,s=0,l=2,u=i,c=[]){if(e?.nodeType===1)this.parentElement=e;else throw Error("Paper Shaders: parent element must be an HTMLElement");if(this.ownerDocument=e.ownerDocument,!this.ownerDocument.querySelector("style[data-paper-shader]")){const e=this.ownerDocument.createElement("style");e.innerHTML=a,e.setAttribute("data-paper-shader",""),this.ownerDocument.head.prepend(e)}const d=this.ownerDocument.createElement("canvas");this.canvasElement=d,this.parentElement.prepend(d),this.fragmentShader=t,this.providedUniforms=r,this.mipmaps=c,this.currentFrame=s,this.minPixelRatio=l,this.maxPixelCount=u;const h=d.getContext("webgl2",n);if(!h)throw Error("Paper Shaders: WebGL is not supported in this browser");this.gl=h,this.initProgram(),this.setupPositionAttribute(),this.setupUniforms(),this.setUniformValues(this.providedUniforms),this.setupResizeObserver(),visualViewport?.addEventListener("resize",this.handleVisualViewportChange),this.setSpeed(o),this.parentElement.setAttribute("data-paper-shader",""),this.parentElement.paperShaderMount=this,this.ownerDocument.addEventListener("visibilitychange",this.handleDocumentVisibilityChange)}initProgram=()=>{let e=function(e,t,r){let i=e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT),n=i?i.precision:null;n&&n<23&&(t=t.replace(/precision\s+(lowp|mediump)\s+float;/g,"precision highp float;"),r=r.replace(/precision\s+(lowp|mediump)\s+float/g,"precision highp float").replace(/\b(uniform|varying|attribute)\s+(lowp|mediump)\s+(\w+)/g,"$1 highp $3"));let a=o(e,e.VERTEX_SHADER,t),s=o(e,e.FRAGMENT_SHADER,r);if(!a||!s)return null;let l=e.createProgram();return l?(e.attachShader(l,a),e.attachShader(l,s),e.linkProgram(l),e.getProgramParameter(l,e.LINK_STATUS))?(e.detachShader(l,a),e.detachShader(l,s),e.deleteShader(a),e.deleteShader(s),l):(console.error("Unable to initialize the shader program: "+e.getProgramInfoLog(l)),e.deleteProgram(l),e.deleteShader(a),e.deleteShader(s),null):null}(this.gl,r,this.fragmentShader);e&&(this.program=e)};setupPositionAttribute=()=>{let e=this.gl.getAttribLocation(this.program,"a_position"),t=this.gl.createBuffer();this.gl.bindBuffer(this.gl.ARRAY_BUFFER,t),this.gl.bufferData(this.gl.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),this.gl.STATIC_DRAW),this.gl.enableVertexAttribArray(e),this.gl.vertexAttribPointer(e,2,this.gl.FLOAT,!1,0,0)};setupUniforms=()=>{let e={u_time:this.gl.getUniformLocation(this.program,"u_time"),u_pixelRatio:this.gl.getUniformLocation(this.program,"u_pixelRatio"),u_resolution:this.gl.getUniformLocation(this.program,"u_resolution")};Object.entries(this.providedUniforms).forEach(([t,r])=>{if(e[t]=this.gl.getUniformLocation(this.program,t),r instanceof HTMLImageElement){let r=`${t}AspectRatio`;e[r]=this.gl.getUniformLocation(this.program,r)}}),this.uniformLocations=e};renderScale=1;parentWidth=0;parentHeight=0;parentDevicePixelWidth=0;parentDevicePixelHeight=0;devicePixelsSupported=!1;resizeObserver=null;setupResizeObserver=()=>{this.resizeObserver=new ResizeObserver(([e])=>{if(e?.borderBoxSize[0]){let t=e.devicePixelContentBoxSize?.[0];void 0!==t&&(this.devicePixelsSupported=!0,this.parentDevicePixelWidth=t.inlineSize,this.parentDevicePixelHeight=t.blockSize),this.parentWidth=e.borderBoxSize[0].inlineSize,this.parentHeight=e.borderBoxSize[0].blockSize}this.handleResize()}),this.resizeObserver.observe(this.parentElement)};handleVisualViewportChange=()=>{this.resizeObserver?.disconnect(),this.setupResizeObserver()};handleResize=()=>{let e=0,t=0,r=Math.max(1,window.devicePixelRatio),i=visualViewport?.scale??1;if(this.devicePixelsSupported){let n=Math.max(1,this.minPixelRatio/r);e=this.parentDevicePixelWidth*n*i,t=this.parentDevicePixelHeight*n*i}else{var n;let o,a,s=Math.max(r,this.minPixelRatio)*i;this.isSafari&&(s*=Math.max(1,(n=this.ownerDocument,(a=Math.round(100*(o=outerWidth/((visualViewport?.scale??1)*(visualViewport?.width??window.innerWidth)+(window.innerWidth-n.documentElement.clientWidth)))))%5==0?a/100:33===a?1/3:67===a?2/3:133===a?4/3:o))),e=Math.round(this.parentWidth)*s,t=Math.round(this.parentHeight)*s}let o=Math.min(1,Math.sqrt(this.maxPixelCount)/Math.sqrt(e*t)),a=Math.round(e*o),s=Math.round(t*o),l=a/Math.round(this.parentWidth);(this.canvasElement.width!==a||this.canvasElement.height!==s||this.renderScale!==l)&&(this.renderScale=l,this.canvasElement.width=a,this.canvasElement.height=s,this.resolutionChanged=!0,this.gl.viewport(0,0,this.gl.canvas.width,this.gl.canvas.height),this.render(performance.now()))};render=e=>{if(this.hasBeenDisposed)return;if(null===this.program)return void console.warn("Tried to render before program or gl was initialized");let t=e-this.lastRenderTime;this.lastRenderTime=e,0!==this.currentSpeed&&(this.currentFrame+=t*this.currentSpeed),this.gl.clear(this.gl.COLOR_BUFFER_BIT),this.gl.useProgram(this.program),this.gl.uniform1f(this.uniformLocations.u_time,.001*this.currentFrame),this.resolutionChanged&&(this.gl.uniform2f(this.uniformLocations.u_resolution,this.gl.canvas.width,this.gl.canvas.height),this.gl.uniform1f(this.uniformLocations.u_pixelRatio,this.renderScale),this.resolutionChanged=!1),this.gl.drawArrays(this.gl.TRIANGLES,0,6),0!==this.currentSpeed?this.requestRender():this.rafId=null};requestRender=()=>{null!==this.rafId&&cancelAnimationFrame(this.rafId),this.rafId=requestAnimationFrame(this.render)};setTextureUniform=(e,t)=>{if(!t.complete||0===t.naturalWidth)throw Error(`Paper Shaders: image for uniform ${e} must be fully loaded`);let r=this.textures.get(e);r&&this.gl.deleteTexture(r),this.textureUnitMap.has(e)||this.textureUnitMap.set(e,this.textureUnitMap.size);let i=this.textureUnitMap.get(e);this.gl.activeTexture(this.gl.TEXTURE0+i);let n=this.gl.createTexture();this.gl.bindTexture(this.gl.TEXTURE_2D,n),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_WRAP_S,this.gl.CLAMP_TO_EDGE),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_WRAP_T,this.gl.CLAMP_TO_EDGE),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_MIN_FILTER,this.gl.LINEAR),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_MAG_FILTER,this.gl.LINEAR),this.gl.texImage2D(this.gl.TEXTURE_2D,0,this.gl.RGBA,this.gl.RGBA,this.gl.UNSIGNED_BYTE,t),this.mipmaps.includes(e)&&(this.gl.generateMipmap(this.gl.TEXTURE_2D),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_MIN_FILTER,this.gl.LINEAR_MIPMAP_LINEAR));let o=this.gl.getError();if(o!==this.gl.NO_ERROR||null===n)return void console.error("Paper Shaders: WebGL error when uploading texture:",o);this.textures.set(e,n);let a=this.uniformLocations[e];if(a){this.gl.uniform1i(a,i);let r=`${e}AspectRatio`,n=this.uniformLocations[r];if(n){let e=t.naturalWidth/t.naturalHeight;this.gl.uniform1f(n,e)}}};areUniformValuesEqual=(e,t)=>e===t||!!(Array.isArray(e)&&Array.isArray(t))&&e.length===t.length&&e.every((e,r)=>this.areUniformValuesEqual(e,t[r]));setUniformValues=e=>{this.gl.useProgram(this.program),Object.entries(e).forEach(([e,t])=>{let r=t;if(t instanceof HTMLImageElement&&(r=`${t.src.slice(0,200)}|${t.naturalWidth}x${t.naturalHeight}`),this.areUniformValuesEqual(this.uniformCache[e],r))return;this.uniformCache[e]=r;let i=this.uniformLocations[e];if(!i)return void console.warn(`Uniform location for ${e} not found`);if(t instanceof HTMLImageElement)this.setTextureUniform(e,t);else if(Array.isArray(t)){let r=null,n=null;if(void 0!==t[0]&&Array.isArray(t[0])){let i=t[0].length;if(!t.every(e=>e.length===i))return void console.warn(`All child arrays must be the same length for ${e}`);r=t.flat(),n=i}else n=(r=t).length;switch(n){case 2:this.gl.uniform2fv(i,r);break;case 3:this.gl.uniform3fv(i,r);break;case 4:this.gl.uniform4fv(i,r);break;case 9:this.gl.uniformMatrix3fv(i,!1,r);break;case 16:this.gl.uniformMatrix4fv(i,!1,r);break;default:console.warn(`Unsupported uniform array length: ${n}`)}}else"number"==typeof t?this.gl.uniform1f(i,t):"boolean"==typeof t?this.gl.uniform1i(i,+!!t):console.warn(`Unsupported uniform type for ${e}: ${typeof t}`)})};getCurrentFrame=()=>this.currentFrame;setFrame=e=>{this.currentFrame=e,this.lastRenderTime=performance.now(),this.render(performance.now())};setSpeed=(e=1)=>{this.speed=e,this.setCurrentSpeed(this.ownerDocument.hidden?0:e)};setCurrentSpeed=e=>{this.currentSpeed=e,null===this.rafId&&0!==e&&(this.lastRenderTime=performance.now(),this.rafId=requestAnimationFrame(this.render)),null!==this.rafId&&0===e&&(cancelAnimationFrame(this.rafId),this.rafId=null)};setMaxPixelCount=(e=i)=>{this.maxPixelCount=e,this.handleResize()};setMinPixelRatio=(e=2)=>{this.minPixelRatio=e,this.handleResize()};setUniforms=e=>{this.setUniformValues(e),this.providedUniforms={...this.providedUniforms,...e},this.render(performance.now())};handleDocumentVisibilityChange=()=>{this.setCurrentSpeed(this.ownerDocument.hidden?0:this.speed)};dispose=()=>{this.hasBeenDisposed=!0,null!==this.rafId&&(cancelAnimationFrame(this.rafId),this.rafId=null),this.gl&&this.program&&(this.textures.forEach(e=>{this.gl.deleteTexture(e)}),this.textures.clear(),this.gl.deleteProgram(this.program),this.program=null,this.gl.bindBuffer(this.gl.ARRAY_BUFFER,null),this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER,null),this.gl.bindRenderbuffer(this.gl.RENDERBUFFER,null),this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,null),this.gl.getError()),this.resizeObserver&&(this.resizeObserver.disconnect(),this.resizeObserver=null),visualViewport?.removeEventListener("resize",this.handleVisualViewportChange),this.ownerDocument.removeEventListener("visibilitychange",this.handleDocumentVisibilityChange),this.uniformLocations={},this.canvasElement.remove(),delete this.parentElement.paperShaderMount}}function o(e,t,r){let i=e.createShader(t);return i?(e.shaderSource(i,r),e.compileShader(i),e.getShaderParameter(i,e.COMPILE_STATUS))?i:(console.error("An error occurred compiling the shaders: "+e.getShaderInfoLog(i)),e.deleteShader(i),null):null}let a=`@layer paper-shaders {
  :where([data-paper-shader]) {
    isolation: isolate;
    position: relative;

    & canvas {
      contain: strict;
      display: block;
      position: absolute;
      inset: 0;
      z-index: -1;
      width: 100%;
      height: 100%;
      border-radius: inherit;
      corner-shape: inherit;
    }
  }
}`;function s(e){if(e.naturalWidth<1024&&e.naturalHeight<1024){if(e.naturalWidth<1||e.naturalHeight<1)return;let t=e.naturalWidth/e.naturalHeight;e.width=Math.round(t>1?1024*t:1024),e.height=Math.round(t>1?1024:1024/t)}}var l=e.i(43476);async function u(e){let t={},r=[];return Object.entries(e).forEach(([e,i])=>{if("string"==typeof i){let n=i||"data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==";if(!(e=>{try{if(e.startsWith("/"))return!0;return new URL(e),!0}catch{return!1}})(n))return void console.warn(`Uniform "${e}" has invalid URL "${n}". Skipping image loading.`);let o=new Promise((r,i)=>{let o=new Image;(e=>{try{if(e.startsWith("/"))return!1;return new URL(e,window.location.origin).origin!==window.location.origin}catch{return!1}})(n)&&(o.crossOrigin="anonymous"),o.onload=()=>{s(o),t[e]=o,r()},o.onerror=()=>{console.error(`Could not set uniforms. Failed to load image at ${n}`),i()},o.src=n});r.push(o)}else i instanceof HTMLImageElement&&s(i),t[e]=i}),await Promise.all(r),t}let c=(0,t.forwardRef)(function({fragmentShader:e,uniforms:r,webGlContextAttributes:i,speed:o=0,frame:a=0,width:s,height:c,minPixelRatio:d,maxPixelCount:h,mipmaps:f,style:p,...g},m){var v;let x,_,[y,b]=(0,t.useState)(!1),S=(0,t.useRef)(null),w=(0,t.useRef)(null),R=(0,t.useRef)(i);(0,t.useEffect)(()=>((async()=>{let t=await u(r);S.current&&!w.current&&(w.current=new n(S.current,e,t,R.current,o,a,d,h,f),b(!0))})(),()=>{w.current?.dispose(),w.current=null}),[e]),(0,t.useEffect)(()=>{let e=!1;return(async()=>{let t=await u(r);e||w.current?.setUniforms(t)})(),()=>{e=!0}},[r,y]),(0,t.useEffect)(()=>{w.current?.setSpeed(o)},[o,y]),(0,t.useEffect)(()=>{w.current?.setMaxPixelCount(h)},[h,y]),(0,t.useEffect)(()=>{w.current?.setMinPixelRatio(d)},[d,y]),(0,t.useEffect)(()=>{w.current?.setFrame(a)},[a,y]);let E=(v=[S,m],x=t.useRef(void 0),_=t.useCallback(e=>{let t=v.map(t=>{if(null!=t){if("function"==typeof t){let r=t(e);return"function"==typeof r?r:()=>{t(null)}}return t.current=e,()=>{t.current=null}}});return()=>{t.forEach(e=>e?.())}},v),t.useMemo(()=>v.every(e=>null==e)?null:e=>{x.current&&(x.current(),x.current=void 0),null!=e&&(x.current=_(e))},v));return(0,l.jsx)("div",{ref:E,style:void 0!==s||void 0!==c?{width:"string"==typeof s&&!1===isNaN(+s)?+s:s,height:"string"==typeof c&&!1===isNaN(+c)?+c:c,...p}:p,...g})});c.displayName="ShaderMount",e.s(["ShaderMount",0,c],37881)},21449,e=>{"use strict";let t=(e,t,r)=>Math.min(Math.max(e,t),r),r=[0,0,0,1];e.s(["getShaderColorFromString",0,function(e){if(Array.isArray(e))return 4===e.length?e:3===e.length?[...e,1]:r;if("string"!=typeof e)return r;let i,n,o,a=1;if(e.startsWith("#")){var s;[i,n,o,a]=(3===(s=(s=e).replace(/^#/,"")).length&&(s=s.split("").map(e=>e+e).join("")),6===s.length&&(s+="ff"),[parseInt(s.slice(0,2),16)/255,parseInt(s.slice(2,4),16)/255,parseInt(s.slice(4,6),16)/255,parseInt(s.slice(6,8),16)/255])}else if(e.startsWith("rgb")){let t;[i,n,o,a]=(t=e.match(/^rgba?\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*([0-9.]+))?\s*\)$/i))?[parseInt(t[1]??"0")/255,parseInt(t[2]??"0")/255,parseInt(t[3]??"0")/255,void 0===t[4]?1:parseFloat(t[4])]:[0,0,0,1]}else{let t;if(!e.startsWith("hsl"))return console.error("Unsupported color format",e),r;[i,n,o,a]=function(e){let t,r,i,[n,o,a,s]=e,l=n/360,u=o/100,c=a/100;if(0===o)t=r=i=c;else{let e=(e,t,r)=>(r<0&&(r+=1),r>1&&(r-=1),r<1/6)?e+(t-e)*6*r:r<.5?t:r<2/3?e+(t-e)*(2/3-r)*6:e,n=c<.5?c*(1+u):c+u-c*u,o=2*c-n;t=e(o,n,l+1/3),r=e(o,n,l),i=e(o,n,l-1/3)}return[t,r,i,s]}((t=e.match(/^hsla?\s*\(\s*(\d+)\s*,\s*(\d+)%\s*,\s*(\d+)%\s*(?:,\s*([0-9.]+))?\s*\)$/i))?[parseInt(t[1]??"0"),parseInt(t[2]??"0"),parseInt(t[3]??"0"),void 0===t[4]?1:parseFloat(t[4])]:[0,0,0,1])}return[t(i,0,1),t(n,0,1),t(o,0,1),t(a,0,1)]}])},93344,e=>{"use strict";let t=`
#define TWO_PI 6.28318530718
#define PI 3.14159265358979323846
`,r=`
vec2 rotate(vec2 uv, float th) {
  return mat2(cos(th), sin(th), -sin(th), cos(th)) * uv;
}
`,i=`
  float hash11(float p) {
    p = fract(p * 0.3183099) + 0.1;
    p *= p + 19.19;
    return fract(p * p);
  }
`,n=`
  float hash21(vec2 p) {
    p = fract(p * vec2(0.3183099, 0.3678794)) + 0.1;
    p += dot(p, p + 19.19);
    return fract(p.x * p.y);
  }
`,o=`
  float randomR(vec2 p) {
    vec2 uv = floor(p) / 100. + .5;
    return texture(u_noiseTexture, fract(uv)).r;
  }
`,a=`
  color += 1. / 256. * (fract(sin(dot(.014 * gl_FragCoord.xy, vec2(12.9898, 78.233))) * 43758.5453123) - .5);
`,s=`
vec3 permute(vec3 x) { return mod(((x * 34.0) + 1.0) * x, 289.0); }
float snoise(vec2 v) {
  const vec4 C = vec4(0.211324865405187, 0.366025403784439,
    -0.577350269189626, 0.024390243902439);
  vec2 i = floor(v + dot(v, C.yy));
  vec2 x0 = v - i + dot(i, C.xx);
  vec2 i1;
  i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
  vec4 x12 = x0.xyxy + C.xxzz;
  x12.xy -= i1;
  i = mod(i, 289.0);
  vec3 p = permute(permute(i.y + vec3(0.0, i1.y, 1.0))
    + i.x + vec3(0.0, i1.x, 1.0));
  vec3 m = max(0.5 - vec3(dot(x0, x0), dot(x12.xy, x12.xy),
      dot(x12.zw, x12.zw)), 0.0);
  m = m * m;
  m = m * m;
  vec3 x = 2.0 * fract(p * C.www) - 1.0;
  vec3 h = abs(x) - 0.5;
  vec3 ox = floor(x + 0.5);
  vec3 a0 = x - ox;
  m *= 1.79284291400159 - 0.85373472095314 * (a0 * a0 + h * h);
  vec3 g;
  g.x = a0.x * x0.x + h.x * x0.y;
  g.yz = a0.yz * x12.xz + h.yz * x12.yw;
  return 130.0 * dot(m, g);
}
`;e.s(["colorBandingFix",0,a,"declarePI",0,t,"proceduralHash11",0,i,"proceduralHash21",0,n,"rotation2",0,r,"simplexNoise",0,s,"textureRandomizerR",0,o])},31967,e=>{"use strict";e.s(["ShaderFitOptions",0,{none:0,contain:1,cover:2},"defaultObjectSizing",0,{fit:"contain",scale:1,rotation:0,offsetX:0,offsetY:0,originX:.5,originY:.5,worldWidth:0,worldHeight:0},"defaultPatternSizing",0,{fit:"none",scale:1,rotation:0,offsetX:0,offsetY:0,originX:.5,originY:.5,worldWidth:0,worldHeight:0}])},573,e=>{"use strict";e.s(["colorPropsAreEqual",0,function(e,t){for(let r in e){if("colors"===r){let r=Array.isArray(e.colors),i=Array.isArray(t.colors);if(!r||!i){if(!1===Object.is(e.colors,t.colors))return!1;continue}if(e.colors?.length!==t.colors?.length||!e.colors?.every((e,r)=>e===t.colors?.[r]))return!1;continue}if(!1===Object.is(e[r],t[r]))return!1}return!0}])}]);