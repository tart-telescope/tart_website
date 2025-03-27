"use strict";(self.webpackChunktart_website=self.webpackChunktart_website||[]).push([[215],{8453:(e,t,s)=>{s.d(t,{R:()=>a,x:()=>i});var n=s(6540);const o={},l=n.createContext(o);function a(e){const t=n.useContext(l);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),n.createElement(l.Provider,{value:t},e.children)}},9815:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>r,contentTitle:()=>i,default:()=>h,frontMatter:()=>a,metadata:()=>n,toc:()=>c});const n=JSON.parse('{"id":"install/sbc","title":"Single-board Computer","description":"This is a Raspberry pi 3/4 or a Quartz64 computer with a standard 40-pin I/O connector. The basic installation steps are:","source":"@site/docs/install/sbc.md","sourceDirName":"install","slug":"/install/sbc","permalink":"/doc/xh/docs/install/sbc","draft":false,"unlisted":false,"editUrl":"https://github.com/tart-telescope/tart_website/docs/install/sbc.md","tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"sidebar_position":3},"sidebar":"tutorialSidebar","previous":{"title":"Antenna Array","permalink":"/doc/xh/docs/install/array"},"next":{"title":"How to use Docosaurus","permalink":"/doc/xh/docs/category/how-to-use-docosaurus"}}');var o=s(4848),l=s(8453);const a={sidebar_position:3},i="Single-board Computer",r={},c=[{value:"Install some packages",id:"install-some-packages",level:2},{value:"Install TailScale",id:"install-tailscale",level:2},{value:"Install the TART operating software.",id:"install-the-tart-operating-software",level:2},{value:"Connecting to your telescope locally",id:"connecting-to-your-telescope-locally",level:2},{value:"Troubleshooting",id:"troubleshooting",level:3}];function d(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",ul:"ul",...(0,l.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.header,{children:(0,o.jsx)(t.h1,{id:"single-board-computer",children:"Single-board Computer"})}),"\n",(0,o.jsx)(t.p,{children:"This is a Raspberry pi 3/4 or a Quartz64 computer with a standard 40-pin I/O connector. The basic installation steps are:"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:"Install base OS (no user interface needed)"}),"\n",(0,o.jsxs)(t.li,{children:["Create a user called tart\n",(0,o.jsx)("code",{children:"sudo adduser tart"})]}),"\n",(0,o.jsxs)(t.li,{children:["Enable the SPI interface (this is done using raspi_config on an rPi, and ",(0,o.jsx)("code",{children:"modprobe spi_rockchip"})," on the Quartz64."]}),"\n"]}),"\n",(0,o.jsx)(t.h2,{id:"install-some-packages",children:"Install some packages"}),"\n",(0,o.jsx)(t.p,{children:"The following packages are needed to continue with the install. Mostly this is docker."}),"\n",(0,o.jsx)("code",{children:"sudo apt install curl docker.io docker-compose git"}),"\n",(0,o.jsx)("code",{children:"sudo usermod -a -G tart docker"}),"\n",(0,o.jsx)(t.h2,{id:"install-tailscale",children:"Install TailScale"}),"\n",(0,o.jsxs)(t.p,{children:["The TART single board computers are connected to a global network\n",(0,o.jsxs)("code",{children:["curl -fsSL ",(0,o.jsx)(t.a,{href:"https://tailscale.com/install.sh",children:"https://tailscale.com/install.sh"})," | sh\nsudo tailscale up"]})]}),"\n",(0,o.jsx)(t.h2,{id:"install-the-tart-operating-software",children:"Install the TART operating software."}),"\n",(0,o.jsx)(t.p,{children:"This software contains the API server and the necessary code to communicate to the telescope electronics using the SPI interface."}),"\n",(0,o.jsx)("code",{children:(0,o.jsxs)(t.p,{children:["git clone ",(0,o.jsx)(t.a,{href:"https://github.com/tart-telescope/sbc_code",children:"https://github.com/tart-telescope/sbc_code"}),"\ncd sbc_code/software\ndocker-compose -f docker-compose-telescope.yml build"]})}),"\n",(0,o.jsx)(t.h2,{id:"connecting-to-your-telescope-locally",children:"Connecting to your telescope locally"}),"\n",(0,o.jsx)(t.p,{children:"If you telescope has an IP address on your network (i.e., x.x.x.x) then you can connect directly to it via a web browser"}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.code,{children:"http://x.x.x.x"})}),"\n",(0,o.jsx)(t.h3,{id:"troubleshooting",children:"Troubleshooting"}),"\n",(0,o.jsx)(t.p,{children:"You should see a web interface... If the image looks like a clock (showing the current time in UTC), then the TART can't communicate with it's correlator."})]})}function h(e={}){const{wrapper:t}={...(0,l.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}}}]);