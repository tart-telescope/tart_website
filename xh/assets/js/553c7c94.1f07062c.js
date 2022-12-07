"use strict";(self.webpackChunktart_website=self.webpackChunktart_website||[]).push([[810],{3905:(t,e,n)=>{n.d(e,{Zo:()=>p,kt:()=>d});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},i=Object.keys(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var s=a.createContext({}),c=function(t){var e=a.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},p=function(t){var e=c(t.components);return a.createElement(s.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,i=t.originalType,s=t.parentName,p=l(t,["components","mdxType","originalType","parentName"]),m=c(n),d=r,f=m["".concat(s,".").concat(d)]||m[d]||u[d]||i;return n?a.createElement(f,o(o({ref:e},p),{},{components:n})):a.createElement(f,o({ref:e},p))}));function d(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=t,l.mdxType="string"==typeof t?t:r,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7722:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var a=n(7462),r=(n(7294),n(3905));const i={sidebar_position:2},o="Getting data from TART",l={unversionedId:"tutorial-basics/get-tart-data",id:"tutorial-basics/get-tart-data",title:"Getting data from TART",description:"Each telescope can be queried for data using the telescope API (API)",source:"@site/docs/tutorial-basics/get-tart-data.md",sourceDirName:"tutorial-basics",slug:"/tutorial-basics/get-tart-data",permalink:"/tart_website/xh/docs/tutorial-basics/get-tart-data",draft:!1,editUrl:"https://github.com/tart-telescope/tart_website/docs/tutorial-basics/get-tart-data.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Terminology",permalink:"/tart_website/xh/docs/tutorial-basics/terminology"},next:{title:"Making Images",permalink:"/tart_website/xh/docs/tutorial-basics/making-images"}},s={},c=[{value:"Using the API directly",id:"using-the-api-directly",level:2},{value:"Using the tart_tools package",id:"using-the-tart_tools-package",level:2},{value:"Creating a measurement set",id:"creating-a-measurement-set",level:2},{value:"From S3 bucket",id:"from-s3-bucket",level:2},{value:"Install requirements",id:"install-requirements",level:3},{value:"Fetch via MinIO",id:"fetch-via-minio",level:3}],p={toc:c};function u(t){let{components:e,...n}=t;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"getting-data-from-tart"},"Getting data from TART"),(0,r.kt)("p",null,"Each telescope can be queried for data using the telescope API (API)"),(0,r.kt)("admonition",{title:"Authentication",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"One doesn't need a login to capture data from a TART telescope. ")),(0,r.kt)("h2",{id:"using-the-api-directly"},"Using the API directly"),(0,r.kt)("p",null," The authentication is only need for API requests that modify the telescope properties (like uploading calibration gains and phases).THe API for the telescope is documented online (",(0,r.kt)("a",{parentName:"p",href:"https://tart.elec.ac.nz/signal/doc/"},"https://tart.elec.ac.nz/signal/doc/"),") and shows the restful API calls that can be made.\nTo get imaging data try the (",(0,r.kt)("a",{parentName:"p",href:"https://tart.elec.ac.nz/signal/doc/#api-Imaging-get_latest_vis"},"https://tart.elec.ac.nz/signal/doc/#api-Imaging-get_latest_vis"),")"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"    wget -O test.json\xa0 https://tart.elec.ac.nz/signal/api/v1/imaging/vis\n")),(0,r.kt)("p",null,"This will download the latest visibilties into a file called test.json"),(0,r.kt)("h2",{id:"using-the-tart_tools-package"},"Using the tart_tools package"),(0,r.kt)("p",null,"You can install the tart_tools python package which will give you some command line tools to work with the TART telescope."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"pip3 install tart_tools")),(0,r.kt)("h2",{id:"creating-a-measurement-set"},"Creating a measurement set"),(0,r.kt)("p",null,"You can install the tart2ms python package which will give you some command line tools to work with the measurement sets "),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"pip3 install tart2ms")),(0,r.kt)("p",null,"tart2ms --ms obs.ms --api ",(0,r.kt)("a",{parentName:"p",href:"https://tart.elec.ac.nz/signal"},"https://tart.elec.ac.nz/signal")),(0,r.kt)("h2",{id:"from-s3-bucket"},"From S3 bucket"),(0,r.kt)("p",null,"Visibility and Raw data can also be downloaded from the S3 Cache (most recent 30days only)."),(0,r.kt)("h3",{id:"install-requirements"},"Install requirements"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"pip3 install minio tqdm")),(0,r.kt)("h3",{id:"fetch-via-minio"},"Fetch via MinIO"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"import os\nfrom tqdm import tqdm\nfrom minio import Minio\n\nMINIO_API_HOST = \"s3.max.ac.nz\"\nBUCKET_NAME = \"tart-hdf\"\n\n# prefix = 'rhodes/raw/2022/'\n# prefix = 'rhodes/vis/2022/'\n# prefix = 'signal/raw/2022/'\nprefix = 'signal/vis/2022/'\n\noutput = 'downloads/'\n\nlimit_last_10 = -10     # Only fetch the last 10 entries files\n\n\nif __name__ == \"__main__\":\n    if not os.path.exists(output):\n        os.mkdir(output)\n\n    client = Minio(MINIO_API_HOST, secure=True)\n    objects = client.list_objects(BUCKET_NAME, prefix=prefix, recursive=True)\n\n\n    for item in tqdm(list(objects)[limit_last_10:]):\n        fname_out = f'{output}{item.object_name}'\n        client.fget_object(BUCKET_NAME, item.object_name, fname_out)\n        print(fname_out)\n")),(0,r.kt)("p",null,"Follow up by creating a measurement set from selected or all hdf files"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"tart2ms  --hdf downloads/*/vis/*/*/*/*.hdf --telescope_name 'kat-7'\n")))}u.isMDXComponent=!0}}]);