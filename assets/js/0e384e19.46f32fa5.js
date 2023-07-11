"use strict";(self.webpackChunktart_website=self.webpackChunktart_website||[]).push([[9671],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>u});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),c=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(r),m=n,u=d["".concat(l,".").concat(m)]||d[m]||h[m]||o;return r?a.createElement(u,i(i({ref:t},p),{},{components:r})):a.createElement(u,i({ref:t},p))}));function u(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:n,i[1]=s;for(var c=2;c<o;c++)i[c]=r[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},9881:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var a=r(7462),n=(r(7294),r(3905));const o={sidebar_position:1},i="TART Intro",s={unversionedId:"intro",id:"intro",title:"TART Intro",description:"Let's discover TART in less than 5 minutes.",source:"@site/docs/intro.md",sourceDirName:".",slug:"/intro",permalink:"/tart_website/docs/intro",draft:!1,editUrl:"https://github.com/tart-telescope/tart_website/docs/intro.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"TART - Basics",permalink:"/tart_website/docs/category/tart---basics"}},l={},c=[{value:"The telescope web interface",id:"the-telescope-web-interface",level:2},{value:"The components of a TART telescope",id:"the-components-of-a-tart-telescope",level:2},{value:"Using the tart tools",id:"using-the-tart-tools",level:2},{value:"Creating Images",id:"creating-images",level:2}],p={toc:c},d="wrapper";function h(e){let{components:t,...r}=e;return(0,n.kt)(d,(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"tart-intro"},"TART Intro"),(0,n.kt)("p",null,"Let's discover ",(0,n.kt)("strong",{parentName:"p"},"TART in less than 5 minutes"),"."),(0,n.kt)("p",null,"The Transient Array Radio Telescope (TART) is an aperture synthesis radio telescope, it uses 24 radio receivers to create images of the radio sky at 1.575 GHz. The antennas look at the whole sky at once. Data from these receivers are correlated by the TART basestation, and visibilities are generated in real time.  The TART operates in exactly the same way that large radio telescopes like the MeerKAT, SKA and VLA work, and provides an excellent platform for understanding, and develop new algorithms for radio astronomy. "),(0,n.kt)("h2",{id:"the-telescope-web-interface"},"The telescope web interface"),(0,n.kt)("p",null,"Each TART telescope has a web interface. These are web applications that get data from the  ",(0,n.kt)("a",{parentName:"p",href:"./basics/tart-api"},"TART web API")," and create images and allow you to control the telescope. Here is the web interface for the ",(0,n.kt)("a",{parentName:"p",href:"https://tart.elec.ac.nz/signal/home"},"Dunedin New Zealand TART"),"."),(0,n.kt)("h2",{id:"the-components-of-a-tart-telescope"},"The components of a TART telescope"),(0,n.kt)("p",null,"A TART consists of 24 radio receivers (mounted on radio modules), each with an antenna arranged in an array. These radio hubs are connected to the baststation. Further information on the ",(0,n.kt)("a",{parentName:"p",href:"./basics/hardware"},"TART hardware")," page."),(0,n.kt)("p",null,"All of the data from the telescope is processed on the basestation and made available via the ",(0,n.kt)("a",{parentName:"p",href:"./basics/tart-api"},"TART web API"),"."),(0,n.kt)("h2",{id:"using-the-tart-tools"},"Using the tart tools"),(0,n.kt)("p",null,"There are some command line tools available as part of the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/tart-telescope/tart_modules"},"tart_tools python package"),". These command line tools let you do things like downloading data, creating images e.t.c."),(0,n.kt)("h2",{id:"creating-images"},"Creating Images"),(0,n.kt)("p",null,"You can use command-line tools and more to create images from the TART telescope. These are described  ",(0,n.kt)("a",{parentName:"p",href:"./basics/making-images"},"Making Images"),"."))}h.isMDXComponent=!0}}]);