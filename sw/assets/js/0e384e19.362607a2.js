"use strict";(self.webpackChunktart_website=self.webpackChunktart_website||[]).push([[9671],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(r),f=a,m=d["".concat(c,".").concat(f)]||d[f]||u[f]||o;return r?n.createElement(m,i(i({ref:t},p),{},{components:r})):n.createElement(m,i({ref:t},p))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},9881:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var n=r(7462),a=(r(7294),r(3905));const o={sidebar_position:1},i="TART Intro",s={unversionedId:"intro",id:"intro",title:"TART Intro",description:"Let's discover TART in less than 5 minutes.",source:"@site/docs/intro.md",sourceDirName:".",slug:"/intro",permalink:"/tart_website/sw/docs/intro",draft:!1,editUrl:"https://github.com/tart-telescope/tart_website/docs/intro.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"Tutorial - Basics",permalink:"/tart_website/sw/docs/category/tutorial---basics"}},c={},l=[{value:"The telescope web interface",id:"the-telescope-web-interface",level:2}],p={toc:l};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"tart-intro"},"TART Intro"),(0,a.kt)("p",null,"Let's discover ",(0,a.kt)("strong",{parentName:"p"},"TART in less than 5 minutes"),"."),(0,a.kt)("p",null,"The Transient Array Radio Telescope (TART) is an aperture synthesis radio telescope, it uses 24 radio receivers to create images of the radio sky at 1.575 GHz. The antennas look at the whole sky at once. Data from these receivers are correlated by the TART basestation, and visibilities are generated in real time.  The TART operates in exactly the same way that large radio telescopes like the MeerKAT, SKA and VLA work, and provides an excellent platform for understanding, and develop new algorithms for radio astronomy. "),(0,a.kt)("h2",{id:"the-telescope-web-interface"},"The telescope web interface"),(0,a.kt)("p",null,"Each TART telescope has a web interface. ",(0,a.kt)("a",{parentName:"p",href:"https://tart.elec.ac.nz/signal/home"},"Signal TART Web Interface"),"."))}u.isMDXComponent=!0}}]);