"use strict";(self.webpackChunktart_website=self.webpackChunktart_website||[]).push([[6315],{6025:(e,a,s)=>{s.r(a),s.d(a,{assets:()=>l,contentTitle:()=>r,default:()=>m,frontMatter:()=>o,metadata:()=>t,toc:()=>d});const t=JSON.parse('{"id":"advanced/disko","title":"DiSkO Imaging Tools","description":"Make round images with your TART data. The DiSkO stands for Discrete Sky Operator imaging. Github Repo Here.","source":"@site/docs/advanced/disko.md","sourceDirName":"advanced","slug":"/advanced/disko","permalink":"/doc/af/docs/advanced/disko","draft":false,"unlisted":false,"editUrl":"https://github.com/tart-telescope/tart_website/docs/advanced/disko.md","tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"sidebar_position":4},"sidebar":"tutorialSidebar","previous":{"title":"Measurement Sets","permalink":"/doc/af/docs/advanced/measurement-sets"},"next":{"title":"Imaging from raw data","permalink":"/doc/af/docs/advanced/image-from-raw"}}');var i=s(4848),n=s(8453);const o={sidebar_position:4},r="DiSkO Imaging Tools",l={},d=[{value:"Get some data",id:"get-some-data",level:2},{value:"Image Output Files",id:"image-output-files",level:2},{value:"Command Line reference",id:"command-line-reference",level:2}];function u(e){const a={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",img:"img",p:"p",pre:"pre",...(0,n.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(a.header,{children:(0,i.jsx)(a.h1,{id:"disko-imaging-tools",children:"DiSkO Imaging Tools"})}),"\n",(0,i.jsxs)(a.p,{children:["Make round images with your TART data. The DiSkO stands for Discrete Sky Operator imaging. ",(0,i.jsx)(a.a,{href:"https://github.com/tmolteno/disko",children:"Github Repo Here"}),"."]}),"\n",(0,i.jsx)(a.h2,{id:"get-some-data",children:"Get some data"}),"\n",(0,i.jsxs)(a.p,{children:["See ",(0,i.jsx)(a.a,{href:"/docs/basics/get-tart-data",children:"getting data"})," for more details"]}),"\n",(0,i.jsx)(a.p,{children:(0,i.jsx)(a.code,{children:"tart2ms --ms signal1.ms --vis vis_2023-11-13_07_28_34.576476.hdf --rephase obs-midpoint --single-field"})}),"\n",(0,i.jsxs)(a.p,{children:["You can create an image using the disko command-line tool (",(0,i.jsx)(a.code,{children:"pip install disko"}),")"]}),"\n",(0,i.jsx)(a.p,{children:(0,i.jsx)(a.code,{children:"disko --ms signal1.ms --SVG --fov 170deg --res 1deg --lasso --alpha 0.005 --healpix --hdf signal.h5"})}),"\n",(0,i.jsx)(a.h2,{id:"image-output-files",children:"Image Output Files"}),"\n",(0,i.jsx)(a.p,{children:"Disko can output various formats, but the best is the .hdf5 format. This can be drawn on using the disko_draw command to show sources e.t.c."}),"\n",(0,i.jsx)(a.p,{children:(0,i.jsx)(a.code,{children:"disko_draw --show-sources --SVG signal.svg signal.h5"})}),"\n",(0,i.jsx)(a.p,{children:(0,i.jsx)(a.img,{src:"/img/signal.svg",alt:"DiSkO image"})}),"\n",(0,i.jsx)(a.h2,{id:"command-line-reference",children:"Command Line reference"}),"\n",(0,i.jsx)(a.pre,{children:(0,i.jsx)(a.code,{children:"disko --help\n\nusage: disko [-h] [--fov FOV] [--res RES] [--mesh] [--adaptive ADAPTIVE] [--res-min RES_MIN] [--healpix] [--nside NSIDE] [--file FILE | --ms MS] [--nvis NVIS] [--vis VIS] [--channel CHANNEL]\n             [--field FIELD] [--ddid DDID] [--lsqr | --lsmr | --fista | --lasso | --tikhonov] [--matrix-free] [--niter NITER] [--dir DIR] [--alpha ALPHA] [--l1-ratio L1_RATIO] [--show-sources]\n             [--title TITLE] [--elevation ELEVATION] [--display] [--PNG] [--PDF] [--SVG] [--HDF HDF] [--VTK] [--FITS] [--cv] [--dask] [--version]\n\nDiSkO: Generate an Discrete Sky Operator Image.\n\noptions:\n  -h, --help            show this help message and exit\n  --fov FOV             Field of view. E.g. 1.3deg, 12\", 11', 8uas, 6mas... (default: 180deg)\n  --res RES             Maximim Resolution of the sky. E.g. 1.3deg, 12\", 11', 8uas, 6mas. (default: 2deg)\n  --mesh                Use a non-structured mesh in the image space (default: False)\n  --adaptive ADAPTIVE   Use N cycles of adaptive meshing (default: 0)\n  --res-min RES_MIN     Highest allowed res of the sky. E.g. 1.3deg, 12\", 11', 8uas, 6mas. (default: None)\n  --healpix             Use HealPix tiling (default: False)\n  --nside NSIDE         Healpix nside parameter for display purposes only. (default: None)\n  --file FILE           Snapshot observation saved JSON file (visiblities, positions and more). (default: None)\n  --ms MS               visibility file (default: None)\n  --nvis NVIS           Number of visibilities to use. (default: 1000)\n  --vis VIS             Use a local JSON file containing the visibilities to create the image. (default: None)\n  --channel CHANNEL     Use this frequency channel. (default: 0)\n  --field FIELD         Use this FIELD_ID from the measurement set. (default: 0)\n  --ddid DDID           Use this DDID from the measurement set. (default: 0)\n  --lsqr                Use lsqr in matrix-free (default: False)\n  --lsmr                Use lsmr in matrix-free (default: False)\n  --fista               Use FISTA in matrix-free (default: False)\n  --lasso               Use L1 regularization. (default: False)\n  --tikhonov            Use L2 regularization. (default: False)\n  --matrix-free         Use matrix-free regularization. (default: False)\n  --niter NITER         Number of iterations for iterative solutions. (default: 100)\n  --dir DIR             Output directory. (default: .)\n  --alpha ALPHA         Regularization parameter. (default: None)\n  --l1-ratio L1_RATIO   Regularization parameter, ratio of l1 to l2 (1.0 means l1 only). (default: 0.02)\n  --show-sources        Show known sources on images (only works on PNG & SVG). (default: False)\n  --title TITLE         Prefix the output files. (default: disko)\n  --elevation ELEVATION\n                        Elevation limit for displaying sources (degrees). (default: 20.0)\n  --display             Display Image to the user. (default: False)\n  --PNG                 Generate a PNG format image. (default: False)\n  --PDF                 Generate a PDF format image. (default: False)\n  --SVG                 Generate a SVG format image. (default: False)\n  --HDF HDF             Generate a HDF format field of view. (default: None)\n  --VTK                 Generate a VTK mesh format image. (default: False)\n  --FITS                Generate a FITS format image. (default: False)\n  --cv                  Use Cross Validation (default: False)\n  --dask                Use dask (default: False)\n  --version             Display the current version (default: False)\n"})})]})}function m(e={}){const{wrapper:a}={...(0,n.R)(),...e.components};return a?(0,i.jsx)(a,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},8453:(e,a,s)=>{s.d(a,{R:()=>o,x:()=>r});var t=s(6540);const i={},n=t.createContext(i);function o(e){const a=t.useContext(n);return t.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function r(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),t.createElement(n.Provider,{value:a},e.children)}}}]);