"use strict";(self.webpackChunktart_website=self.webpackChunktart_website||[]).push([[94],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>h});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),c=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(r),m=n,h=d["".concat(s,".").concat(m)]||d[m]||p[m]||o;return r?a.createElement(h,i(i({ref:t},u),{},{components:r})):a.createElement(h,i({ref:t},u))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:n,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},4583:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var a=r(7462),n=(r(7294),r(3905));const o={},i="Components of a TART telescope",l={unversionedId:"tutorial-basics/hardware",id:"tutorial-basics/hardware",title:"Components of a TART telescope",description:"The TART-3 telescope (the next version) will have a new hardware architecture.",source:"@site/docs/tutorial-basics/hardware.md",sourceDirName:"tutorial-basics",slug:"/tutorial-basics/hardware",permalink:"/tart_website/zu/docs/tutorial-basics/hardware",draft:!1,editUrl:"https://github.com/tart-telescope/tart_website/docs/tutorial-basics/hardware.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Making Images",permalink:"/tart_website/zu/docs/tutorial-basics/making-images"},next:{title:"The TART API",permalink:"/tart_website/zu/docs/tutorial-basics/tart-api"}},s={},c=[{value:"Electronics",id:"electronics",level:2},{value:"Radio Module",id:"radio-module",level:3},{value:"Motherboard",id:"motherboard",level:3},{value:"Antenna Array",id:"antenna-array",level:2},{value:"Changes from TART-2",id:"changes-from-tart-2",level:2}],u={toc:c},d="wrapper";function p(e){let{components:t,...o}=e;return(0,n.kt)(d,(0,a.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"components-of-a-tart-telescope"},"Components of a TART telescope"),(0,n.kt)("p",null,"The TART-3 telescope (the next version) will have a new hardware architecture."),(0,n.kt)("h2",{id:"electronics"},"Electronics"),(0,n.kt)("p",null,"Developed in the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/tart-telescope/radio_module"},"https://github.com/tart-telescope/radio_module")," repository. The hardware consists of a single motherboard, with radio modules mounted on replacable cards."),(0,n.kt)("h3",{id:"radio-module"},"Radio Module"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"TART-3 Radio Module",src:r(9628).Z,width:"1280",height:"864"})),(0,n.kt)("p",null,"These radio modules each contain four receivers."),(0,n.kt)("h3",{id:"motherboard"},"Motherboard"),(0,n.kt)("h2",{id:"antenna-array"},"Antenna Array"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"TART-3 five arm",src:r(1216).Z,width:"1800",height:"600"})),(0,n.kt)("h2",{id:"changes-from-tart-2"},"Changes from TART-2"),(0,n.kt)("p",null,"TART-2 consisted of 4 radio hubs with 6 recievers on each hub. These connected via Cat-6 UTP cable to a central basestation. TART-3 features"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Improved I/Q")))}p.isMDXComponent=!0},1216:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/five_arm-2e9b42e10493f2717d994b38974190be.jpg"},9628:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/tart3_radio_module-b868a2179634d5c36adfef11e5013954.jpg"}}]);