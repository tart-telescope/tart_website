"use strict";(self.webpackChunktart_website=self.webpackChunktart_website||[]).push([[5550],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>h});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(a),h=r,m=d["".concat(s,".").concat(h)]||d[h]||u[h]||i;return a?n.createElement(m,o(o({ref:t},p),{},{components:a})):n.createElement(m,o({ref:t},p))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},8467:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var n=a(7462),r=(a(7294),a(3905));const i={},o="The TART API",l={unversionedId:"tutorial-basics/tart-api",id:"tutorial-basics/tart-api",title:"The TART API",description:"One doesn't need a login to capture data from the telescopes. The authentication is only need for API requests that modify the telescope properties (like uploading calibration gains and phases). The API for the telescope is documented online (https://tart.elec.ac.nz/signal/doc/) and shows the restful API calls that can be made.",source:"@site/docs/tutorial-basics/tart-api.md",sourceDirName:"tutorial-basics",slug:"/tutorial-basics/tart-api",permalink:"/tart_website/af/docs/tutorial-basics/tart-api",draft:!1,editUrl:"https://github.com/tart-telescope/tart_website/docs/tutorial-basics/tart-api.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Making Images",permalink:"/tart_website/af/docs/tutorial-basics/making-images"},next:{title:"Tutorial - Advanced",permalink:"/tart_website/af/docs/category/tutorial---advanced"}},s={},c=[{value:"API documentation",id:"api-documentation",level:2},{value:"The source catalogue",id:"the-source-catalogue",level:2}],p={toc:c};function u(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"the-tart-api"},"The TART API"),(0,r.kt)("p",null,"One doesn't need a login to capture data from the telescopes. The authentication is only need for API requests that modify the telescope properties (like uploading calibration gains and phases). The API for the telescope is documented online (",(0,r.kt)("a",{parentName:"p",href:"https://tart.elec.ac.nz/signal/doc/"},"https://tart.elec.ac.nz/signal/doc/"),") and shows the restful API calls that can be made."),(0,r.kt)("p",null,"To get imaging data we will call the ",(0,r.kt)("a",{parentName:"p",href:"https://tart.elec.ac.nz/signal/doc/#api-Imaging-get_latest_vis"},"imaging/vis")," endpoint."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"wget -O test.json\xa0 https://tart.elec.ac.nz/signal/api/v1/imaging/vis\n")),(0,r.kt)("p",null,"This will request the ",(0,r.kt)("inlineCode",{parentName:"p"},"imaing/vis")," API endpoint, and the returned data will contain the latest visibilties. These are then saved into a file called test.json"),(0,r.kt)("p",null,"Try this in your browser by ",(0,r.kt)("a",{parentName:"p",href:"https://tart.elec.ac.nz/signal/api/v1/imaging/vis"},"clicking here")),(0,r.kt)("h2",{id:"api-documentation"},"API documentation"),(0,r.kt)("p",null,"API documentation is available here: ",(0,r.kt)("a",{parentName:"p",href:"https://tart.elec.ac.nz/signal/docs"},"https://tart.elec.ac.nz/signal/docs")),(0,r.kt)("h2",{id:"the-source-catalogue"},"The source catalogue"),(0,r.kt)("p",null,"There is an online API for getting source positions in the GPS sky. It is documented at (",(0,r.kt)("a",{parentName:"p",href:"https://tart.elec.ac.nz/catalog/doc/index.html"},"https://tart.elec.ac.nz/catalog/doc/index.html"),")"))}u.isMDXComponent=!0}}]);