"use strict";(self.webpackChunktart_website=self.webpackChunktart_website||[]).push([[9502],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(r),m=o,f=u["".concat(c,".").concat(m)]||u[m]||d[m]||a;return r?n.createElement(f,i(i({ref:t},p),{},{components:r})):n.createElement(f,i({ref:t},p))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[u]="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},2574:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var n=r(7462),o=(r(7294),r(3905));const a={sidebar_position:1},i="Correlators",s={unversionedId:"advanced/correlators",id:"advanced/correlators",title:"Correlators",description:"The TART telescope motherboard contains a correlator. This is a piece of hardware that generates visibilities from the telescope date. This is done using an FPGA, which is programmed using the Verilog programming language.",source:"@site/docs/advanced/correlators.md",sourceDirName:"advanced",slug:"/advanced/correlators",permalink:"/tart_website/af/docs/advanced/correlators",draft:!1,editUrl:"https://github.com/tart-telescope/tart_website/docs/advanced/correlators.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Calibration",permalink:"/tart_website/af/docs/advanced/calibration"},next:{title:"Measurement Sets",permalink:"/tart_website/af/docs/advanced/measurement-sets"}},c={},l=[{value:"Integration Time",id:"integration-time",level:2},{value:"Resolution",id:"resolution",level:2},{value:"Github",id:"github",level:2}],p={toc:l},u="wrapper";function d(e){let{components:t,...r}=e;return(0,o.kt)(u,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"correlators"},"Correlators"),(0,o.kt)("p",null,"The TART telescope motherboard contains a correlator. This is a piece of hardware that generates visibilities from the telescope date. This is done using an FPGA, which is programmed using the Verilog programming language."),(0,o.kt)("h2",{id:"integration-time"},"Integration Time"),(0,o.kt)("h2",{id:"resolution"},"Resolution"),(0,o.kt)("h2",{id:"github"},"Github"),(0,o.kt)("p",null,"The correlator code is ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/tart-telescope/fpga-correlator"},"here")))}d.isMDXComponent=!0}}]);