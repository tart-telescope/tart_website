"use strict";(self.webpackChunktart_website=self.webpackChunktart_website||[]).push([[94],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>m});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),c=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=c(a),h=n,m=u["".concat(s,".").concat(h)]||u[h]||p[h]||o;return a?r.createElement(m,i(i({ref:t},d),{},{components:a})):r.createElement(m,i({ref:t},d))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:n,i[1]=l;for(var c=2;c<o;c++)i[c]=a[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}h.displayName="MDXCreateElement"},4583:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=a(7462),n=(a(7294),a(3905));const o={},i="Components of a TART telescope",l={unversionedId:"tutorial-basics/hardware",id:"tutorial-basics/hardware",title:"Components of a TART telescope",description:"The TART-3 telescope (the next version) will have a new hardware architecture.",source:"@site/docs/tutorial-basics/hardware.md",sourceDirName:"tutorial-basics",slug:"/tutorial-basics/hardware",permalink:"/tart_website/zu/docs/tutorial-basics/hardware",draft:!1,editUrl:"https://github.com/tart-telescope/tart_website/docs/tutorial-basics/hardware.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Making Images",permalink:"/tart_website/zu/docs/tutorial-basics/making-images"},next:{title:"The TART API",permalink:"/tart_website/zu/docs/tutorial-basics/tart-api"}},s={},c=[{value:"Electronics",id:"electronics",level:2},{value:"Radio Module",id:"radio-module",level:3},{value:"Motherboard",id:"motherboard",level:3},{value:"Antenna Array",id:"antenna-array",level:2},{value:"Changes from TART-2",id:"changes-from-tart-2",level:2},{value:"Costings",id:"costings",level:2},{value:"TART-in-a-box",id:"tart-in-a-box",level:3}],d={toc:c},u="wrapper";function p(e){let{components:t,...o}=e;return(0,n.kt)(u,(0,r.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"components-of-a-tart-telescope"},"Components of a TART telescope"),(0,n.kt)("p",null,"The TART-3 telescope (the next version) will have a new hardware architecture."),(0,n.kt)("h2",{id:"electronics"},"Electronics"),(0,n.kt)("p",null,"Developed in the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/tart-telescope/radio_module"},"https://github.com/tart-telescope/radio_module")," repository. The hardware consists of a single motherboard, with radio modules mounted on replacable cards."),(0,n.kt)("h3",{id:"radio-module"},"Radio Module"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"TART-3 Radio Module",src:a(9628).Z,width:"1280",height:"864"})),(0,n.kt)("p",null,"These radio modules each contain four receivers, and are connected to active antennas using a SMA connector. "),(0,n.kt)("h3",{id:"motherboard"},"Motherboard"),(0,n.kt)("p",null,"The motherboard has 6 slots for radio modules. and houses:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"The FPGA correlator"),(0,n.kt)("li",{parentName:"ul"},"The linux computer that provides a web API, connected to the internet, and runs the TART software.")),(0,n.kt)("p",null,"Currently this is in development. Below is a photograph of the in development motherboard (May 2023 v3.0.0a1) with two radio boards. "),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"TART-3 Motherboard",src:a(8e3).Z,width:"1200",height:"810"})),(0,n.kt)("h2",{id:"antenna-array"},"Antenna Array"),(0,n.kt)("p",null,"This array is designed to be low cost. There is considerable freedom for TART sites to experiment with different array layouts."),(0,n.kt)("p",null,"Here is a rendering of a potential 5 arm layout, optimized to provide effective imaging. The individual antennas are the small black cylinders. Each arm is 2.1m long. The UV coverage of the proposed array is shown as well.\n",(0,n.kt)("img",{alt:"TART-3 five arm rendering",src:a(7891).Z,width:"1827",height:"1115"}),"\n",(0,n.kt)("img",{alt:"TART-3 five arm",src:a(940).Z,width:"800",height:"400"})),(0,n.kt)("h2",{id:"changes-from-tart-2"},"Changes from TART-2"),(0,n.kt)("p",null,"TART-2 consisted of 4 radio hubs with 6 recievers on each hub. These connected via Cat-6 UTP cable to a central basestation. TART-3 features"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Improved I/Q sampling - reducing a random phase offset on restart."),(0,n.kt)("li",{parentName:"ul"},"Up to 2-bit I and Q samples can be digitized"),(0,n.kt)("li",{parentName:"ul"},"New Correlator FPGA - lower cost and higher performance."),(0,n.kt)("li",{parentName:"ul"},"Easier Antenna Layout"),(0,n.kt)("li",{parentName:"ul"},"All radios are in a central location, lower costs.")),(0,n.kt)("h2",{id:"costings"},"Costings"),(0,n.kt)("p",null,"Costings are difficult to estimate as this is a new version of hardware and development is not complete. We are hoping to achieve manufacturing costs of approximately 500 euro for the telescope bare electronics. The antenna array assembly is usually fabricated on-site from available materials. "),(0,n.kt)("p",null,"Some extimates are below not including and freight charges:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Electronics electronics: ~EUR 500. Electronics will be made availeble on request from the New Zealand hardware team (see below for a potential other avenue). "),(0,n.kt)("li",{parentName:"ul"},"24 GPS patch antennas with 3m cables: ~EUR 150"),(0,n.kt)("li",{parentName:"ul"},"Case and Housing: Done on site: Allow ~EUR 100 (not including labour)"),(0,n.kt)("li",{parentName:"ul"},"Antenna array. Done on site, and costs will vary wideley as most of the costs are labour.  Can range for ~EUR 100 (using scrap and volunteer labour) to much more.")),(0,n.kt)("h3",{id:"tart-in-a-box"},"TART-in-a-box"),(0,n.kt)("p",null,"The TART-in-a-box project aims to provide universities with a comprehensive package containing the TART hardware and software, along with teaching materials, to facilitate the implementation of radio astronomy education and promotion of STEM. The TART is an affordable open-source telescope array designed to train and educate students in tertiary and secondary levels. The project demonstrates the calibration and imaging of GNSS constellations using TART and relevant software. The project aligns with various United Nations Sustainable Development Goals (UN-SDGs), including quality education, gender equality, poverty reduction, and industry innovation, recognizing education as a crucial global industry for socio-economic development."),(0,n.kt)("p",null,"The project is sponsored by the South African Radio Astronomy (SARA) Starbizz initiative."))}p.isMDXComponent=!0},8e3:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/motherboard3a1-d29e003551da305bf1168c61865f0dc4.jpg"},7891:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/optimized_array-c319a94ffeff0ff02c573c78fd6c59ec.png"},9628:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/tart3_radio_module-b868a2179634d5c36adfef11e5013954.jpg"},940:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/uv_coverage-2f472efd03575244fc5f388af3952f45.png"}}]);