(()=>{var e={};e.id=974,e.ids=[974],e.modules={846:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},9121:e=>{"use strict";e.exports=require("next/dist/server/app-render/action-async-storage.external.js")},9294:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-async-storage.external.js")},3033:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-unit-async-storage.external.js")},3873:e=>{"use strict";e.exports=require("path")},9551:e=>{"use strict";e.exports=require("url")},2636:(e,t,n)=>{"use strict";n.r(t),n.d(t,{GlobalError:()=>s.a,__next_app__:()=>p,pages:()=>d,routeModule:()=>u,tree:()=>c});var o=n(260),r=n(8203),i=n(5155),s=n.n(i),l=n(7292),a={};for(let e in l)0>["default","tree","pages","GlobalError","__next_app__","routeModule"].indexOf(e)&&(a[e]=()=>l[e]);n.d(t,a);let c=["",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(n.bind(n,4940)),"C:\\Users\\TheTr\\Desktop\\Visual Code\\nextjs-portfolio\\src\\app\\page.tsx"],metadata:{icon:[async e=>(await Promise.resolve().then(n.bind(n,440))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(n.bind(n,1354)),"C:\\Users\\TheTr\\Desktop\\Visual Code\\nextjs-portfolio\\src\\app\\layout.tsx"],"not-found":[()=>Promise.resolve().then(n.t.bind(n,9937,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(n.bind(n,440))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],d=["C:\\Users\\TheTr\\Desktop\\Visual Code\\nextjs-portfolio\\src\\app\\page.tsx"],p={require:n,loadChunk:()=>Promise.resolve()},u=new o.AppPageRouteModule({definition:{kind:r.RouteKind.APP_PAGE,page:"/page",pathname:"/",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:c}})},982:(e,t,n)=>{Promise.resolve().then(n.t.bind(n,3219,23)),Promise.resolve().then(n.t.bind(n,4863,23)),Promise.resolve().then(n.t.bind(n,5155,23)),Promise.resolve().then(n.t.bind(n,9350,23)),Promise.resolve().then(n.t.bind(n,6313,23)),Promise.resolve().then(n.t.bind(n,8530,23)),Promise.resolve().then(n.t.bind(n,8921,23))},4542:(e,t,n)=>{Promise.resolve().then(n.t.bind(n,6959,23)),Promise.resolve().then(n.t.bind(n,3875,23)),Promise.resolve().then(n.t.bind(n,8903,23)),Promise.resolve().then(n.t.bind(n,4178,23)),Promise.resolve().then(n.t.bind(n,6013,23)),Promise.resolve().then(n.t.bind(n,7190,23)),Promise.resolve().then(n.t.bind(n,1365,23))},8538:(e,t,n)=>{Promise.resolve().then(n.t.bind(n,1066,23)),Promise.resolve().then(n.t.bind(n,5197,23)),Promise.resolve().then(n.bind(n,9376)),Promise.resolve().then(n.bind(n,9896)),Promise.resolve().then(n.bind(n,9819))},1586:(e,t,n)=>{Promise.resolve().then(n.t.bind(n,1902,23)),Promise.resolve().then(n.t.bind(n,7801,23)),Promise.resolve().then(n.bind(n,4463)),Promise.resolve().then(n.bind(n,6308)),Promise.resolve().then(n.bind(n,7111))},9780:()=>{},6164:()=>{},4463:(e,t,n)=>{"use strict";n.d(t,{default:()=>v});var o,r=n(5512),i=n(8009),s=n(5740),l=function(e,t){return(l=Object.setPrototypeOf||({__proto__:[]})instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])})(e,t)};function a(e,t){if("function"!=typeof t&&null!==t)throw TypeError("Class extends value "+String(t)+" is not a constructor or null");function n(){this.constructor=e}l(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}var c=function(){return(c=Object.assign||function(e){for(var t,n=1,o=arguments.length;n<o;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)};function d(e){return"#"===e.charAt(0)?e.slice(1):e}"function"==typeof SuppressedError&&SuppressedError,function(e,t){void 0===t&&(t={});var n=t.insertAt;if(e&&"undefined"!=typeof document){var o=document.head||document.getElementsByTagName("head")[0],r=document.createElement("style");r.type="text/css","top"===n&&o.firstChild?o.insertBefore(r,o.firstChild):o.appendChild(r),r.styleSheet?r.styleSheet.cssText=e:r.appendChild(document.createTextNode(e))}}("/*\n  code is extracted from Calendly's embed stylesheet: https://assets.calendly.com/assets/external/widget.css\n*/\n\n.calendly-inline-widget,\n.calendly-inline-widget *,\n.calendly-badge-widget,\n.calendly-badge-widget *,\n.calendly-overlay,\n.calendly-overlay * {\n    font-size:16px;\n    line-height:1.2em\n}\n\n.calendly-inline-widget iframe,\n.calendly-badge-widget iframe,\n.calendly-overlay iframe {\n    display:inline;\n    width:100%;\n    height:100%\n}\n\n.calendly-popup-content {\n    position:relative\n}\n\n.calendly-popup-content.calendly-mobile {\n    -webkit-overflow-scrolling:touch;\n    overflow-y:auto\n}\n\n.calendly-overlay {\n    position:fixed;\n    top:0;\n    left:0;\n    right:0;\n    bottom:0;\n    overflow:hidden;\n    z-index:9999;\n    background-color:#a5a5a5;\n    background-color:rgba(31,31,31,0.4)\n}\n\n.calendly-overlay .calendly-close-overlay {\n    position:absolute;\n    top:0;\n    left:0;\n    right:0;\n    bottom:0\n}\n\n.calendly-overlay .calendly-popup {\n    box-sizing:border-box;\n    position:absolute;\n    top:50%;\n    left:50%;\n    -webkit-transform:translateY(-50%) translateX(-50%);\n    transform:translateY(-50%) translateX(-50%);\n    width:80%;\n    min-width:900px;\n    max-width:1000px;\n    height:90%;\n    max-height:680px\n}\n\n@media (max-width: 975px) {\n    .calendly-overlay .calendly-popup {\n        position:fixed;\n        top:50px;\n        left:0;\n        right:0;\n        bottom:0;\n        -webkit-transform:none;\n        transform:none;\n        width:100%;\n        height:auto;\n        min-width:0;\n        max-height:none\n    }\n}\n\n.calendly-overlay .calendly-popup .calendly-popup-content {\n    height:100%;\n}\n\n.calendly-overlay .calendly-popup-close {\n    position:absolute;\n    top:25px;\n    right:25px;\n    color:#fff;\n    width:19px;\n    height:19px;\n    cursor:pointer;\n    background:url(https://assets.calendly.com/assets/external/close-icon.svg) no-repeat;\n    background-size:contain\n}\n\n@media (max-width: 975px) {\n    .calendly-overlay .calendly-popup-close {\n        top:15px;\n        right:15px\n    }\n}\n\n.calendly-badge-widget {\n    position:fixed;\n    right:20px;\n    bottom:15px;\n    z-index:9998\n}\n\n.calendly-badge-widget .calendly-badge-content {\n    display:table-cell;\n    width:auto;\n    height:45px;\n    padding:0 30px;\n    border-radius:25px;\n    box-shadow:rgba(0,0,0,0.25) 0 2px 5px;\n    font-family:sans-serif;\n    text-align:center;\n    vertical-align:middle;\n    font-weight:bold;\n    font-size:14px;\n    color:#fff;\n    cursor:pointer\n}\n\n.calendly-badge-widget .calendly-badge-content.calendly-white {\n    color:#666a73\n}\n\n.calendly-badge-widget .calendly-badge-content span {\n    display:block;\n    font-size:12px\n}\n\n.calendly-spinner {\n    position:absolute;\n    top:50%;\n    left:0;\n    right:0;\n    -webkit-transform:translateY(-50%);\n    transform:translateY(-50%);\n    text-align:center;\n    z-index:-1\n}\n\n.calendly-spinner>div {\n    display:inline-block;\n    width:18px;\n    height:18px;\n    background-color:#e1e1e1;\n    border-radius:50%;\n    vertical-align:middle;\n    -webkit-animation:calendly-bouncedelay 1.4s infinite ease-in-out;\n    animation:calendly-bouncedelay 1.4s infinite ease-in-out;\n    -webkit-animation-fill-mode:both;\n    animation-fill-mode:both\n}\n\n.calendly-spinner .calendly-bounce1 {\n    -webkit-animation-delay:-0.32s;\n    animation-delay:-0.32s\n}\n\n.calendly-spinner .calendly-bounce2 {\n    -webkit-animation-delay:-0.16s;\n    animation-delay:-0.16s\n}\n\n@-webkit-keyframes calendly-bouncedelay {\n    0%,80%,100% {\n        -webkit-transform:scale(0);\n        transform:scale(0)\n    } \n    \n    40%{\n        -webkit-transform:scale(1);\n        transform:scale(1)\n    }\n}\n\n@keyframes calendly-bouncedelay{ \n    0%,80%,100% {\n        -webkit-transform:scale(0);\n        transform:scale(0)\n    }\n    \n    40% {\n        -webkit-transform:scale(1);\n        transform:scale(1)\n    }\n}"),function(e){e.PROFILE_PAGE_VIEWED="calendly.profile_page_viewed",e.EVENT_TYPE_VIEWED="calendly.event_type_viewed",e.DATE_AND_TIME_SELECTED="calendly.date_and_time_selected",e.EVENT_SCHEDULED="calendly.event_scheduled",e.PAGE_HEIGHT="calendly.page_height"}(o||(o={}));var p=function(e){var t,n=e.url,o=e.prefill,r=void 0===o?{}:o,i=e.pageSettings,s=e.utm,l=void 0===s?{}:s,a=e.embedType,c=((null==(t=void 0===i?{}:i)?void 0:t.primaryColor)&&(t.primaryColor=d(t.primaryColor)),(null==t?void 0:t.textColor)&&(t.textColor=d(t.textColor)),(null==t?void 0:t.backgroundColor)&&(t.backgroundColor=d(t.backgroundColor)),t),p=c.backgroundColor,m=c.hideEventTypeDetails,f=c.hideLandingPageDetails,g=c.primaryColor,x=c.textColor,y=c.hideGdprBanner,b=r.customAnswers,v=r.date,j=r.email,w=r.firstName,C=r.guests,_=r.lastName,E=r.location,k=r.smsReminderNumber,P=r.name,S=l.utmCampaign,N=l.utmContent,D=l.utmMedium,T=l.utmSource,z=l.utmTerm,O=l.salesforce_uuid,I=n.indexOf("?"),R=I>-1,L=n.slice(I+1),U=R?n.slice(0,I):n,M=[R?L:null,p?"background_color=".concat(p):null,m?"hide_event_type_details=1":null,f?"hide_landing_page_details=1":null,g?"primary_color=".concat(g):null,x?"text_color=".concat(x):null,y?"hide_gdpr_banner=1":null,P?"name=".concat(encodeURIComponent(P)):null,k?"phone_number=".concat(encodeURIComponent(k)):null,E?"location=".concat(encodeURIComponent(E)):null,w?"first_name=".concat(encodeURIComponent(w)):null,_?"last_name=".concat(encodeURIComponent(_)):null,C?"guests=".concat(C.map(encodeURIComponent).join(",")):null,j?"email=".concat(encodeURIComponent(j)):null,v&&v instanceof Date?"date=".concat(u(v)):null,S?"utm_campaign=".concat(encodeURIComponent(S)):null,N?"utm_content=".concat(encodeURIComponent(N)):null,D?"utm_medium=".concat(encodeURIComponent(D)):null,T?"utm_source=".concat(encodeURIComponent(T)):null,z?"utm_term=".concat(encodeURIComponent(z)):null,O?"salesforce_uuid=".concat(encodeURIComponent(O)):null,a?"embed_type=".concat(a):null,"embed_domain=1"].concat(b?h(b):[]).filter(function(e){return null!==e}).join("&");return"".concat(U,"?").concat(M)},u=function(e){var t=e.getMonth()+1,n=e.getDate();return[e.getFullYear(),t<10?"0".concat(t):t,n<10?"0".concat(n):n].join("-")},m=/^a\d{1,2}$/,h=function(e){var t=Object.keys(e).filter(function(e){return e.match(m)});return t.length?t.map(function(t){return"".concat(t,"=").concat(encodeURIComponent(e[t]))}):[]},f=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return a(t,e),t.prototype.render=function(){return i.createElement("div",{className:"calendly-spinner"},i.createElement("div",{className:"calendly-bounce1"}),i.createElement("div",{className:"calendly-bounce2"}),i.createElement("div",{className:"calendly-bounce3"}))},t}(i.Component),g={minWidth:"320px",height:"630px"};(function(e){function t(t){var n=e.call(this,t)||this;return n.state={isLoading:!0},n.onLoad=n.onLoad.bind(n),n}a(t,e),t.prototype.onLoad=function(){this.setState({isLoading:!1})},t.prototype.render=function(){var e=p({url:this.props.url,pageSettings:this.props.pageSettings,prefill:this.props.prefill,utm:this.props.utm,embedType:"Inline"}),t=this.props.LoadingSpinner||f;return i.createElement("div",{className:"calendly-inline-widget",style:this.props.styles||g},this.state.isLoading&&i.createElement(t,null),i.createElement("iframe",{width:"100%",height:"100%",frameBorder:"0",title:this.props.iframeTitle||"Calendly Scheduling Page",onLoad:this.onLoad,src:e}))}})(i.Component);var x=function(e){function t(t){var n=e.call(this,t)||this;return n.state={isLoading:!0},n.onLoad=n.onLoad.bind(n),n}return a(t,e),t.prototype.onLoad=function(){this.setState({isLoading:!1})},t.prototype.render=function(){var e=p({url:this.props.url,pageSettings:this.props.pageSettings,prefill:this.props.prefill,utm:this.props.utm,embedType:"Inline"}),t=this.props.LoadingSpinner||f;return i.createElement(i.Fragment,null,this.state.isLoading&&i.createElement(t,null),i.createElement("iframe",{width:"100%",height:"100%",frameBorder:"0",title:this.props.iframeTitle||"Calendly Scheduling Page",onLoad:this.onLoad,src:e}))},t}(i.Component),y=function(e){if(!e.open)return null;if(!e.rootElement)throw Error("[react-calendly]: PopupModal rootElement property cannot be undefined");return s.createPortal(i.createElement("div",{className:"calendly-overlay"},i.createElement("div",{onClick:e.onModalClose,className:"calendly-close-overlay"}),i.createElement("div",{className:"calendly-popup"},i.createElement("div",{className:"calendly-popup-content"},i.createElement(x,c({},e)))),i.createElement("button",{className:"calendly-popup-close",onClick:e.onModalClose,"aria-label":"Close modal",style:{display:"block",border:"none",padding:0}})),e.rootElement)},b=function(e){function t(t){var n=e.call(this,t)||this;return n.state={isOpen:!1},n.onClick=n.onClick.bind(n),n.onClose=n.onClose.bind(n),n}return a(t,e),t.prototype.onClick=function(e){e.preventDefault(),this.setState({isOpen:!0})},t.prototype.onClose=function(e){e.stopPropagation(),this.setState({isOpen:!1})},t.prototype.render=function(){return i.createElement(i.Fragment,null,i.createElement("button",{onClick:this.onClick,style:this.props.styles||{},className:this.props.className||""},this.props.text),i.createElement(y,c({},this.props,{open:this.state.isOpen,onModalClose:this.onClose,rootElement:this.props.rootElement})))},t}(i.Component);(function(e){function t(t){var n=e.call(this,t)||this;return n.state={isOpen:!1},n.onClick=n.onClick.bind(n),n.onClose=n.onClose.bind(n),n}a(t,e),t.prototype.onClick=function(){this.setState({isOpen:!0})},t.prototype.onClose=function(e){e.stopPropagation(),this.setState({isOpen:!1})},t.prototype.render=function(){return i.createElement("div",{className:"calendly-badge-widget",onClick:this.onClick},i.createElement("div",{className:"calendly-badge-content",style:{background:this.props.color||"#00a2ff",color:this.props.textColor||"#ffffff"}},this.props.text||"Schedule time with me",this.props.branding&&i.createElement("span",null,"powered by Calendly")),i.createElement(y,c({},this.props,{open:this.state.isOpen,onModalClose:this.onClose,rootElement:this.props.rootElement})))}})(i.Component);let v=()=>{let[e,t]=(0,i.useState)(null);return(0,i.useEffect)(()=>{let e=document.getElementById("root");e?t(e):console.error("Root element not found. Ensure your HTML has an element with id='root'.")},[]),(0,r.jsx)(r.Fragment,{children:e?(0,r.jsx)(b,{className:"satoshi button",url:"https://calendly.com/dhuangxie/30min",rootElement:e,text:"\xa1Agendemos una cita!"}):(0,r.jsx)("button",{children:"\xa1Agendemos una cita!"})})}},6308:(e,t,n)=>{"use strict";n.d(t,{default:()=>i});var o=n(5512),r=n(8009);let i=({style:e})=>{let[t,n]=(0,r.useState)("00:00"),[i,s]=(0,r.useState)("00");return(0,r.useEffect)(()=>{setInterval(()=>{let e=new Date,t=e.getHours(),o=e.getMinutes(),r=e.getSeconds(),i=t.toLocaleString("en-US",{minimumIntegerDigits:2,useGrouping:!1}),l=o.toLocaleString("en-US",{minimumIntegerDigits:2,useGrouping:!1}),a=r.toLocaleString("en-US",{minimumIntegerDigits:2,useGrouping:!1}),c=`${a}`;n(`${i}:${l}`),s(c)},1e3)}),(0,o.jsxs)("div",{className:"block reloj",style:e,children:[(0,o.jsx)("p",{children:t})," ",(0,o.jsx)("span",{className:"segundos",children:i})]})}},7111:(e,t,n)=>{"use strict";n.d(t,{default:()=>i});var o=n(5512),r=n(8009);let i=()=>{let[e,t]=(0,r.useState)(2024);return(0,r.useEffect)(()=>{t(new Date().getFullYear())},[]),(0,o.jsx)("span",{children:e})}},1066:(e,t,n)=>{let{createProxy:o}=n(3439);e.exports=o("C:\\Users\\TheTr\\Desktop\\Visual Code\\nextjs-portfolio\\node_modules\\next\\dist\\client\\image-component.js")},5197:(e,t,n)=>{let{createProxy:o}=n(3439);e.exports=o("C:\\Users\\TheTr\\Desktop\\Visual Code\\nextjs-portfolio\\node_modules\\next\\dist\\client\\link.js")},2326:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImgProps",{enumerable:!0,get:function(){return l}}),n(5843);let o=n(6749),r=n(2833);function i(e){return void 0!==e.default}function s(e){return void 0===e?e:"number"==typeof e?Number.isFinite(e)?e:NaN:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function l(e,t){var n;let l,a,c,{src:d,sizes:p,unoptimized:u=!1,priority:m=!1,loading:h,className:f,quality:g,width:x,height:y,fill:b=!1,style:v,overrideSrc:j,onLoad:w,onLoadingComplete:C,placeholder:_="empty",blurDataURL:E,fetchPriority:k,decoding:P="async",layout:S,objectFit:N,objectPosition:D,lazyBoundary:T,lazyRoot:z,...O}=e,{imgConf:I,showAltText:R,blurComplete:L,defaultLoader:U}=t,M=I||r.imageConfigDefault;if("allSizes"in M)l=M;else{let e=[...M.deviceSizes,...M.imageSizes].sort((e,t)=>e-t),t=M.deviceSizes.sort((e,t)=>e-t);l={...M,allSizes:e,deviceSizes:t}}if(void 0===U)throw Error("images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config");let A=O.loader||U;delete O.loader,delete O.srcSet;let G="__next_img_default"in A;if(G){if("custom"===l.loader)throw Error('Image with src "'+d+'" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader')}else{let e=A;A=t=>{let{config:n,...o}=t;return e(o)}}if(S){"fill"===S&&(b=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[S];e&&(v={...v,...e});let t={responsive:"100vw",fill:"100vw"}[S];t&&!p&&(p=t)}let B="",V=s(x),F=s(y);if((n=d)&&"object"==typeof n&&(i(n)||void 0!==n.src)){let e=i(d)?d.default:d;if(!e.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received "+JSON.stringify(e));if(!e.height||!e.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received "+JSON.stringify(e));if(a=e.blurWidth,c=e.blurHeight,E=E||e.blurDataURL,B=e.src,!b){if(V||F){if(V&&!F){let t=V/e.width;F=Math.round(e.height*t)}else if(!V&&F){let t=F/e.height;V=Math.round(e.width*t)}}else V=e.width,F=e.height}}let W=!m&&("lazy"===h||void 0===h);(!(d="string"==typeof d?d:B)||d.startsWith("data:")||d.startsWith("blob:"))&&(u=!0,W=!1),l.unoptimized&&(u=!0),G&&d.endsWith(".svg")&&!l.dangerouslyAllowSVG&&(u=!0);let q=s(g),H=Object.assign(b?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:N,objectPosition:D}:{},R?{}:{color:"transparent"},v),Y=L||"empty"===_?null:"blur"===_?'url("data:image/svg+xml;charset=utf-8,'+(0,o.getImageBlurSvg)({widthInt:V,heightInt:F,blurWidth:a,blurHeight:c,blurDataURL:E||"",objectFit:H.objectFit})+'")':'url("'+_+'")',X=Y?{backgroundSize:H.objectFit||"cover",backgroundPosition:H.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:Y}:{},$=function(e){let{config:t,src:n,unoptimized:o,width:r,quality:i,sizes:s,loader:l}=e;if(o)return{src:n,srcSet:void 0,sizes:void 0};let{widths:a,kind:c}=function(e,t,n){let{deviceSizes:o,allSizes:r}=e;if(n){let e=/(^|\s)(1?\d?\d)vw/g,t=[];for(let o;o=e.exec(n);o)t.push(parseInt(o[2]));if(t.length){let e=.01*Math.min(...t);return{widths:r.filter(t=>t>=o[0]*e),kind:"w"}}return{widths:r,kind:"w"}}return"number"!=typeof t?{widths:o,kind:"w"}:{widths:[...new Set([t,2*t].map(e=>r.find(t=>t>=e)||r[r.length-1]))],kind:"x"}}(t,r,s),d=a.length-1;return{sizes:s||"w"!==c?s:"100vw",srcSet:a.map((e,o)=>l({config:t,src:n,quality:i,width:e})+" "+("w"===c?e:o+1)+c).join(", "),src:l({config:t,src:n,quality:i,width:a[d]})}}({config:l,src:d,unoptimized:u,width:V,quality:q,sizes:p,loader:A});return{props:{...O,loading:W?"lazy":h,fetchPriority:k,width:V,height:F,decoding:P,className:f,style:{...H,...X},sizes:$.sizes,srcSet:$.srcSet,src:j||$.src},meta:{unoptimized:u,priority:m,placeholder:_,fill:b}}}},6749:(e,t)=>{"use strict";function n(e){let{widthInt:t,heightInt:n,blurWidth:o,blurHeight:r,blurDataURL:i,objectFit:s}=e,l=o?40*o:t,a=r?40*r:n,c=l&&a?"viewBox='0 0 "+l+" "+a+"'":"";return"%3Csvg xmlns='http://www.w3.org/2000/svg' "+c+"%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='"+(c?"none":"contain"===s?"xMidYMid":"cover"===s?"xMidYMid slice":"none")+"' style='filter: url(%23b);' href='"+i+"'/%3E%3C/svg%3E"}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImageBlurSvg",{enumerable:!0,get:function(){return n}})},2833:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{VALID_LOADERS:function(){return n},imageConfigDefault:function(){return o}});let n=["default","imgix","cloudinary","akamai","custom"],o={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",loaderFile:"",domains:[],disableStaticImages:!1,minimumCacheTTL:60,formats:["image/webp"],dangerouslyAllowSVG:!1,contentSecurityPolicy:"script-src 'none'; frame-src 'none'; sandbox;",contentDispositionType:"attachment",localPatterns:void 0,remotePatterns:[],unoptimized:!1}},8516:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{default:function(){return a},getImageProps:function(){return l}});let o=n(3264),r=n(2326),i=n(1066),s=o._(n(6352));function l(e){let{props:t}=(0,r.getImgProps)(e,{defaultLoader:s.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0}});for(let[e,n]of Object.entries(t))void 0===n&&delete t[e];return{props:t}}let a=i.Image},6352:(e,t)=>{"use strict";function n(e){let{config:t,src:n,width:o,quality:r}=e;return t.path+"?url="+encodeURIComponent(n)+"&w="+o+"&q="+(r||75)}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return o}}),n.__next_img_default=!0;let o=n},5843:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"warnOnce",{enumerable:!0,get:function(){return n}});let n=e=>{}},1354:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>i,metadata:()=>r});var o=n(2740);n(1135);let r={title:"David Huang Xie Desarrollador Web | SEO On Page | Wordpress",description:"Soy David Huang Xie, Desarrollador web, apasionado por el SEO, Wordpress y la optimizaci\xf3n de sitios web para mejorar su rendimiento y visibilidad en l\xednea.",keywords:"Desarrollador Web SEO"};function i({children:e}){return(0,o.jsx)("html",{lang:"es",children:(0,o.jsx)("body",{className:"background",children:e})})}},4940:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>u});var o=n(2740);n(6301);let r=()=>(0,o.jsx)(o.Fragment,{children:(0,o.jsx)("svg",{className:"svg-icon",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:(0,o.jsx)("g",{children:(0,o.jsx)("path",{d:"m16.2 22h-8.4c-1.8 0-2.8 0-3.6-.4s-1.4-1-1.7-1.7c-.5-.9-.5-1.9-.5-3.7v-8.4c0-1.8 0-2.8.4-3.6s1-1.4 1.7-1.7c.9-.5 1.9-.5 3.7-.5h8.4c1.8 0 2.8 0 3.6.4s1.4 1 1.7 1.7c.5.9.5 1.9.5 3.7v8.4c0 1.8 0 2.8-.4 3.6s-1 1.4-1.7 1.7c-.9.5-1.9.5-3.7.5zm-8.4-18c-1.5 0-2.3 0-2.7.2s-.7.5-.9.9-.2 1.2-.2 2.7v8.4c0 1.5 0 2.3.2 2.7s.5.7.9.9 1.2.2 2.7.2h8.4c1.5 0 2.3 0 2.7-.2s.7-.5.9-.9.2-1.2.2-2.7v-8.4c0-1.5 0-2.3-.2-2.7s-.5-.7-.9-.9-1.2-.2-2.7-.2zm7.2 12c-.6 0-1-.4-1-1v-3.6l-4.3 4.3c-.4.4-1 .4-1.4 0s-.4-1 0-1.4l4.3-4.3h-3.6c-.6 0-1-.4-1-1s.4-1 1-1h6c.1 0 .3 0 .4.1.1 0 .2.1.3.2s.2.2.2.3c.1.1.1.3.1.4v6c0 .6-.4 1-1 1z"})})})});var i=n(9819),s=n(9376),l=n(8516),a=n.n(l),c=n(5197),d=n.n(c);let p=[({style:e})=>(0,o.jsxs)("div",{className:"block me",style:e,children:[(0,o.jsxs)("div",{className:"me-info",children:[(0,o.jsxs)("div",{className:"me-info-text",children:[(0,o.jsx)("p",{className:"me-info-text special gabinet",children:"Bienvenidos"}),(0,o.jsxs)("div",{children:[(0,o.jsxs)("h1",{children:["Hola, Soy ",(0,o.jsx)("strong",{children:"David Huang Xie"}),", un Desarrollador Web que le apasionan las nuevas tecnolog\xedas y el desarrollo de p\xe1ginas web."]}),(0,o.jsxs)("p",{children:["Me especializo en ",(0,o.jsx)("strong",{children:"desarrollo web"}),", tanto a ",(0,o.jsx)("strong",{children:"c\xf3digo"})," ","como con ",(0,o.jsx)("strong",{children:"WordPress"})," y ",(0,o.jsx)("strong",{children:"SEO OnPage"}),"."]})]})]}),(0,o.jsxs)("div",{className:"me-info-socials",children:[(0,o.jsx)("a",{href:"https://github.com/dhx101",target:"_blank",rel:"noopener noreferrer",children:(0,o.jsx)("svg",{id:"Bold",height:"512",viewBox:"0 0 24 24",width:"512",xmlns:"http://www.w3.org/2000/svg",children:(0,o.jsx)("path",{d:"m12 .5c-6.63 0-12 5.28-12 11.792 0 5.211 3.438 9.63 8.205 11.188.6.111.82-.254.82-.567 0-.28-.01-1.022-.015-2.005-3.338.711-4.042-1.582-4.042-1.582-.546-1.361-1.335-1.725-1.335-1.725-1.087-.731.084-.716.084-.716 1.205.082 1.838 1.215 1.838 1.215 1.07 1.803 2.809 1.282 3.495.981.108-.763.417-1.282.76-1.577-2.665-.295-5.466-1.309-5.466-5.827 0-1.287.465-2.339 1.235-3.164-.135-.298-.54-1.497.105-3.121 0 0 1.005-.316 3.3 1.209.96-.262 1.98-.392 3-.398 1.02.006 2.04.136 3 .398 2.28-1.525 3.285-1.209 3.285-1.209.645 1.624.24 2.823.12 3.121.765.825 1.23 1.877 1.23 3.164 0 4.53-2.805 5.527-5.475 5.817.42.354.81 1.077.81 2.182 0 1.578-.015 2.846-.015 3.229 0 .309.21.678.825.56 4.801-1.548 8.236-5.97 8.236-11.173 0-6.512-5.373-11.792-12-11.792z"})})}),(0,o.jsx)("a",{href:"https://www.linkedin.com/in/dhuangxie/",target:"_blank",rel:"noopener noreferrer",children:(0,o.jsx)("svg",{height:"512",viewBox:"0 0 176 176",width:"512",xmlns:"http://www.w3.org/2000/svg",children:(0,o.jsx)("path",{id:"icon",d:"m152 0h-128a24 24 0 0 0 -24 24v128a24 24 0 0 0 24 24h128a24 24 0 0 0 24-24v-128a24 24 0 0 0 -24-24zm-92 139.28a3.71 3.71 0 0 1 -3.71 3.72h-15.81a3.71 3.71 0 0 1 -3.72-3.72v-66.28a3.72 3.72 0 0 1 3.72-3.72h15.81a3.72 3.72 0 0 1 3.71 3.72zm-11.62-76.28a15 15 0 1 1 15-15 15 15 0 0 1 -15 15zm94.26 76.54a3.41 3.41 0 0 1 -3.42 3.42h-17a3.41 3.41 0 0 1 -3.42-3.42v-31.05c0-4.64 1.36-20.32-12.13-20.32-10.45 0-12.58 10.73-13 15.55v35.86a3.42 3.42 0 0 1 -3.37 3.42h-16.42a3.41 3.41 0 0 1 -3.41-3.42v-66.87a3.41 3.41 0 0 1 3.41-3.42h16.42a3.42 3.42 0 0 1 3.42 3.42v5.78c3.88-5.83 9.63-10.31 21.9-10.31 27.18 0 27 25.38 27 39.32z"})})}),(0,o.jsx)("a",{href:"/David/Curriculum ES.pdf",download:"CV David Huang Xie.pdf",target:"_blank",rel:"noopener noreferrer",children:(0,o.jsx)("svg",{height:"409.6pt",viewBox:"0 0 409.6 409.6",width:"409.6pt",xmlns:"http://www.w3.org/2000/svg",children:(0,o.jsx)("path",{d:"m375.464844 0h-341.328125c-18.773438 0-34.136719 15.363281-34.136719 34.136719v341.332031c0 18.765625 15.363281 34.132812 34.136719 34.132812h341.332031c18.765625 0 34.132812-15.367187 34.132812-34.136718v-341.328125c0-18.773438-15.367187-34.136719-34.136718-34.136719zm-290.128906 136.535156c0-28.269531 22.929687-51.199218 51.199218-51.199218 28.265625 0 51.199219 22.929687 51.199219 51.199218h-34.132813c0-9.429687-7.644531-17.066406-17.066406-17.066406s-17.066406 7.636719-17.066406 17.066406v68.25c0 9.414063 7.640625 17.0625 17.066406 17.0625 9.425782 0 17.066406-7.648437 17.066406-17.0625h34.132813c0 28.28125-22.933594 51.199219-51.199219 51.199219-28.269531 0-51.199218-22.921875-51.199218-51.199219zm238.929687 187.730469h-238.929687v-34.128906h238.933593v34.128906zm-42.664063-68.265625h-34.136718l-42.664063-170.664062h35.183594l24.550781 98.199218 24.550782-98.199218h35.179687zm0 0"})})}),(0,o.jsx)("a",{href:"mailto:dhuangxie@gmail.com",target:"_blank",rel:"noopener noreferrer",children:(0,o.jsx)("svg",{id:"Layer_18",viewBox:"0 0 2000 2000",xmlns:"http://www.w3.org/2000/svg",children:(0,o.jsx)("path",{d:"m1999.999 732.153c-.118-30.48-34.211-48.676-60.12-32.62l-911.801 565.059c-8.599 5.33-18.338 7.995-28.077 7.995s-19.478-2.665-28.076-7.995l-911.804-565.06c-25.909-16.056-60.001 2.139-60.12 32.62 0 .223-.001.446-.001.67v972.928c0 94.2 76.364 170.564 170.564 170.564h1658.872c94.2 0 170.564-76.364 170.564-170.564v-972.928c0-.223-.001-.446-.001-.669zm-1809.256-77.087 789.603 489.333c12.04 7.462 27.268 7.462 39.308 0l789.602-489.329c12.546-7.775 20.179-21.485 20.179-36.245v-409.856c0-47.1-38.182-85.282-85.282-85.282h-1488.307c-47.1 0-85.282 38.182-85.282 85.282v409.852c0 14.76 7.633 28.47 20.179 36.245zm494.034-318.174h630.445c27.511 0 49.815 22.304 49.815 49.814s-22.304 49.814-49.815 49.814h-630.445c-27.51 0-49.814-22.304-49.814-49.814s22.304-49.814 49.814-49.814zm0 232.467h630.445c27.511 0 49.815 22.304 49.815 49.814s-22.304 49.815-49.815 49.815h-630.445c-27.51 0-49.814-22.305-49.814-49.815s22.304-49.814 49.814-49.814z"})})}),(0,o.jsx)(s.default,{})]})]}),(0,o.jsx)("div",{className:"me-photo",children:(0,o.jsx)(a(),{src:"/David/David.png",height:"200",width:"200",alt:"David"})})]}),({style:e})=>(0,o.jsxs)("div",{className:"block about-me",style:e,children:[(0,o.jsx)("h2",{className:"title-gabinet",children:"Sobre m\xed"}),(0,o.jsxs)("div",{className:"satoshi-light",children:[(0,o.jsx)("p",{children:"Buenas, soy David, un Desarrollador Front End de Espa\xf1a."}),(0,o.jsxs)("ul",{children:[(0,o.jsx)("li",{children:"Javascript"}),(0,o.jsx)("li",{children:"React"}),(0,o.jsx)("li",{children:"Nextjs"}),(0,o.jsx)("li",{children:"Node.js"}),(0,o.jsx)("li",{children:"WordPress"}),(0,o.jsx)("li",{children:"Elementor"}),(0,o.jsx)("li",{children:"WP Bakery"}),(0,o.jsx)("li",{children:"SeRanking"}),(0,o.jsx)("li",{children:"G4 y SC"})]}),(0,o.jsx)("p",{children:"Aparte de desarrollar p\xe1ginas webs, soy un apasionado de los videojuegos, el gimnasio y viajar por el mundo. Tambi\xe9n me gusta cocinar, aunque limpiar los trastos no tanto."}),(0,o.jsx)("p",{children:"Aunque tengo preferencia por ciertas herramientas de trabajo, siempre me adapto a las necesidades del cliente para elegir la mejor soluci\xf3n para cada proyecto."})]})]}),({style:e})=>(0,o.jsxs)("div",{className:"block contact",style:e,children:[(0,o.jsx)("h2",{className:"title-gabinet",children:"\xa1Trabajemos juntos!"}),(0,o.jsxs)("div",{children:[(0,o.jsx)("p",{className:"gabinet details",children:"Detalles de contacto"}),(0,o.jsx)("a",{href:"mailto:dhuangxie@gmail.com",target:"_blank",rel:"noopener noreferrer",children:"dhuangxie@gmail.com"}),(0,o.jsx)("p",{children:"Espa\xf1a"})]}),(0,o.jsxs)("div",{children:[(0,o.jsx)("p",{className:"gabinet details",children:"Socials"}),(0,o.jsx)("a",{href:"https://www.linkedin.com/in/dhuangxie/",target:"_blank",rel:"noopener noreferrer",children:"Linkedin"}),(0,o.jsx)("a",{href:"https://github.com/dhx101",target:"_blank",rel:"noopener noreferrer",children:"Github"})]})]}),n(9896).default,({style:e})=>(0,o.jsxs)("a",{href:"/estudios",className:"block estudios",style:e,children:[(0,o.jsx)("h2",{className:"title-gabinet",children:"Estudios"}),(0,o.jsx)(r,{})]}),({style:e})=>(0,o.jsxs)(d(),{href:"/proyectos",className:"block proyectos",style:e,children:[(0,o.jsx)("h2",{className:"title-gabinet",children:"Proyectos"}),(0,o.jsxs)("div",{children:[(0,o.jsx)("p",{children:"Descubre mis proyectos"}),(0,o.jsx)(r,{})]})]}),({style:e})=>(0,o.jsxs)("div",{className:"block actualidad",style:e,children:[(0,o.jsx)("h2",{className:"gabinet",children:"Ahora"}),(0,o.jsx)("p",{className:"special",children:"\xbfQu\xe9 hago?"}),(0,o.jsx)("p",{children:"Trabajo como desarrollador web Freelance"})]}),({style:e})=>(0,o.jsxs)("div",{className:"block experiencia",style:e,children:[(0,o.jsx)("h2",{className:"tittle-gabinet",children:"Experiencia"}),(0,o.jsx)(r,{})]}),({style:e})=>(0,o.jsx)("div",{className:"block footer",style:e,children:(0,o.jsxs)("p",{children:["\xa9 ",(0,o.jsx)(i.default,{})," | Creado con \uD83D\uDC97 y esmero con React y NextJs, por David Huang Xie"]})})],u=()=>(0,o.jsxs)("main",{className:"home",children:[p.map((e,t)=>(0,o.jsx)(e,{style:{animationDelay:`${.1*t}s`}},t)),(0,o.jsx)("div",{id:"root"})]})},9376:(e,t,n)=>{"use strict";n.d(t,{default:()=>o});let o=(0,n(6760).registerClientReference)(function(){throw Error("Attempted to call the default export of \"C:\\\\Users\\\\TheTr\\\\Desktop\\\\Visual Code\\\\nextjs-portfolio\\\\src\\\\components\\\\Calendy\\\\Calendy.tsx\" from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"C:\\Users\\TheTr\\Desktop\\Visual Code\\nextjs-portfolio\\src\\components\\Calendy\\Calendy.tsx","default")},9896:(e,t,n)=>{"use strict";n.d(t,{default:()=>o});let o=(0,n(6760).registerClientReference)(function(){throw Error("Attempted to call the default export of \"C:\\\\Users\\\\TheTr\\\\Desktop\\\\Visual Code\\\\nextjs-portfolio\\\\src\\\\components\\\\Reloj\\\\Reloj.tsx\" from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"C:\\Users\\TheTr\\Desktop\\Visual Code\\nextjs-portfolio\\src\\components\\Reloj\\Reloj.tsx","default")},9819:(e,t,n)=>{"use strict";n.d(t,{default:()=>o});let o=(0,n(6760).registerClientReference)(function(){throw Error("Attempted to call the default export of \"C:\\\\Users\\\\TheTr\\\\Desktop\\\\Visual Code\\\\nextjs-portfolio\\\\src\\\\components\\\\Reloj\\\\Year.tsx\" from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"C:\\Users\\TheTr\\Desktop\\Visual Code\\nextjs-portfolio\\src\\components\\Reloj\\Year.tsx","default")},440:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>r});var o=n(8077);let r=async e=>[{type:"image/x-icon",sizes:"16x16",url:(0,o.fillMetadataSegment)(".",await e.params,"favicon.ico")+""}]},1135:()=>{}};var t=require("../webpack-runtime.js");t.C(e);var n=e=>t(t.s=e),o=t.X(0,[989,112,986],()=>n(2636));module.exports=o})();