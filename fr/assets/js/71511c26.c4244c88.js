"use strict";(self.webpackChunktart_website=self.webpackChunktart_website||[]).push([[4448],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>d});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),c=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},m=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),p=c(a),g=n,d=p["".concat(l,".").concat(g)]||p[g]||u[g]||i;return a?r.createElement(d,s(s({ref:t},m),{},{components:a})):r.createElement(d,s({ref:t},m))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,s=new Array(i);s[0]=g;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[p]="string"==typeof e?e:n,s[1]=o;for(var c=2;c<i;c++)s[c]=a[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}g.displayName="MDXCreateElement"},2437:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var r=a(7462),n=(a(7294),a(3905));const i={sidebar_position:3},s="Making Images",o={unversionedId:"basics/making-images",id:"basics/making-images",title:"Making Images",description:"Creating images in TART is requires three things",source:"@site/docs/basics/making-images.md",sourceDirName:"basics",slug:"/basics/making-images",permalink:"/tart_website/fr/docs/basics/making-images",draft:!1,editUrl:"https://github.com/tart-telescope/tart_website/docs/basics/making-images.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Getting data from TART",permalink:"/tart_website/fr/docs/basics/get-tart-data"},next:{title:"Components of a TART telescope",permalink:"/tart_website/fr/docs/basics/hardware"}},l={},c=[{value:"Using the TART web interface",id:"using-the-tart-web-interface",level:2},{value:"Using DiSkO",id:"using-disko",level:2},{value:"Using WSClean",id:"using-wsclean",level:2}],m={toc:c},p="wrapper";function u(e){let{components:t,...a}=e;return(0,n.kt)(p,(0,r.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"making-images"},"Making Images"),(0,n.kt)("p",null,"Creating images in TART is requires three things"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Some ",(0,n.kt)("a",{parentName:"li",href:"/docs/advanced/calibration"},"calibrated")," TART data"),(0,n.kt)("li",{parentName:"ul"},"Some imaging software")),(0,n.kt)("h2",{id:"using-the-tart-web-interface"},"Using the TART web interface"),(0,n.kt)("p",null,"The easiest way to make images is to use the web interface."),(0,n.kt)("h2",{id:"using-disko"},"Using DiSkO"),(0,n.kt)("p",null,"The disko python package is a tools designed to work with all-sky radio telescopes. It was developed along with the TART project. DiSkO stands for Discrete Sky Operator imaging. You should have some data from the TART in measurement set format. DiSkO can be installed like any other Python package."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"    disko --healpix --fov 155deg --res 1deg --ms test_data/test.ms --field 1 --SVG --alpha=0.01 --lasso --title 'tart_lasso'\n")),(0,n.kt)("h2",{id:"using-wsclean"},"Using WSClean"),(0,n.kt)("p",null,"The wsclean package is a standard tool for creating images from measurement sets. If you have a measurement set (created by ",(0,n.kt)("strong",{parentName:"p"},"tart2ms"),"), then the following command should make a FITS formatted image."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"export OPENBLAS_NUM_THREADS=1; wsclean -weight briggs 0 -name test -pol RR -size 1000 1000 -scale 0.175 -niter 1000 -gain 0.1 -mgain 0.05 -padding 1.5 -auto-mask 7 test.ms\n")))}u.isMDXComponent=!0}}]);