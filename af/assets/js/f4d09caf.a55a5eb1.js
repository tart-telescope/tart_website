"use strict";(self.webpackChunktart_website=self.webpackChunktart_website||[]).push([[2453],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>g});var a=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,i=function(e,t){if(null==e)return{};var r,a,i={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=a.createContext({}),c=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,i=e.mdxType,n=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=c(r),g=i,d=m["".concat(l,".").concat(g)]||m[g]||p[g]||n;return r?a.createElement(d,s(s({ref:t},u),{},{components:r})):a.createElement(d,s({ref:t},u))}));function g(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=r.length,s=new Array(n);s[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:i,s[1]=o;for(var c=2;c<n;c++)s[c]=r[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},3689:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>n,metadata:()=>o,toc:()=>c});var a=r(7462),i=(r(7294),r(3905));const n={sidebar_position:3},s="Making Images",o={unversionedId:"tutorial-basics/making-images",id:"tutorial-basics/making-images",title:"Making Images",description:"Creating images in TART is requires three things",source:"@site/docs/tutorial-basics/making-images.md",sourceDirName:"tutorial-basics",slug:"/tutorial-basics/making-images",permalink:"/tart_website/af/docs/tutorial-basics/making-images",draft:!1,editUrl:"https://github.com/tart-telescope/tart_website/docs/tutorial-basics/making-images.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Getting data from TART",permalink:"/tart_website/af/docs/tutorial-basics/get-tart-data"},next:{title:"The TART API",permalink:"/tart_website/af/docs/tutorial-basics/tart-api"}},l={},c=[{value:"Using the TART web interface",id:"using-the-tart-web-interface",level:2},{value:"Using DiSkO",id:"using-disko",level:2},{value:"Using WSClean",id:"using-wsclean",level:2}],u={toc:c};function p(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"making-images"},"Making Images"),(0,i.kt)("p",null,"Creating images in TART is requires three things"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Some ",(0,i.kt)("a",{parentName:"li",href:"/docs/tutorial-extras/calibration"},"calibrated")," TART data"),(0,i.kt)("li",{parentName:"ul"},"Some imaging software")),(0,i.kt)("h2",{id:"using-the-tart-web-interface"},"Using the TART web interface"),(0,i.kt)("p",null,"The easiest way to make images is to use the web interface."),(0,i.kt)("h2",{id:"using-disko"},"Using DiSkO"),(0,i.kt)("p",null,"The disko python package is a tools designed to work with all-sky radio telescopes. It was developed along with the TART project. DiSkO stands for Discrete Sky Operator imaging. You should have some data from the TART in measurement set format. DiSkO can be installed like any other Python package."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"    disko --healpix --fov 155deg --res 1deg --ms test_data/test.ms --field 1 --SVG --alpha=0.01 --lasso --title 'tart_lasso'\n")),(0,i.kt)("h2",{id:"using-wsclean"},"Using WSClean"),(0,i.kt)("p",null,"The wsclean package is available for"))}p.isMDXComponent=!0}}]);