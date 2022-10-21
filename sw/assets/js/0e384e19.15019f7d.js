"use strict";(self.webpackChunktart_website=self.webpackChunktart_website||[]).push([[9671],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(r),f=a,g=d["".concat(c,".").concat(f)]||d[f]||u[f]||i;return r?n.createElement(g,o(o({ref:t},p),{},{components:r})):n.createElement(g,o({ref:t},p))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},9881:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var n=r(7462),a=(r(7294),r(3905));const i={sidebar_position:1},o="TART Intro",s={unversionedId:"intro",id:"intro",title:"TART Intro",description:"Let's discover TART in less than 5 minutes. The TART is an aperture synthesis radio telescope, it uses 24 radio receivers to create images of the radio sky at 1.575 GHz.",source:"@site/docs/intro.md",sourceDirName:".",slug:"/intro",permalink:"/tart_website/sw/docs/intro",draft:!1,editUrl:"https://github.com/tart-telescope/tart_website/docs/intro.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"Tutorial - Basics",permalink:"/tart_website/sw/docs/category/tutorial---basics"}},c={},l=[{value:"Getting Started with the TART API",id:"getting-started-with-the-tart-api",level:2}],p={toc:l};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"tart-intro"},"TART Intro"),(0,a.kt)("p",null,"Let's discover ",(0,a.kt)("strong",{parentName:"p"},"TART in less than 5 minutes"),". The TART is an aperture synthesis radio telescope, it uses 24 radio receivers to create images of the radio sky at 1.575 GHz."),(0,a.kt)("h2",{id:"getting-started-with-the-tart-api"},"Getting Started with the TART API"),(0,a.kt)("p",null,"Get started by ",(0,a.kt)("strong",{parentName:"p"},"creating a new site"),"."),(0,a.kt)("p",null,"One doesn't need a login to capture data from the telescopes. The authentication is only need for API requests that modify the telescope properties (like uploading calibration gains and phases).THe API for the telescope is documented online (",(0,a.kt)("a",{parentName:"p",href:"https://tart.elec.ac.nz/signal/doc/"},"https://tart.elec.ac.nz/signal/doc/"),") and shows the restful API calls that can be made.\nTo get imaging data try the (",(0,a.kt)("a",{parentName:"p",href:"https://tart.elec.ac.nz/signal/doc/#api-Imaging-get_latest_vis"},"https://tart.elec.ac.nz/signal/doc/#api-Imaging-get_latest_vis"),")\n\xa0\xa0\xa0\xa0wget -O test.json\xa0 ",(0,a.kt)("a",{parentName:"p",href:"https://tart.elec.ac.nz/signal/api/v1/imaging/vis"},"https://tart.elec.ac.nz/signal/api/v1/imaging/vis"),"\nThis will download the latest visibilties into a file called test.json"))}u.isMDXComponent=!0}}]);