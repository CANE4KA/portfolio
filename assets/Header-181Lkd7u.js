import{u as m,r as d,j as e}from"./index-CvVcIPsq.js";import{c as s}from"./createLucideIcon-DwuDuWRQ.js";import{M as h,a as p}from"./elements-DaEJGKgF.js";/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x=s("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l=s("Moon",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i=s("Sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y=s("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),c=[{name:"Home",href:"#home"},{name:"About",href:"#about"},{name:"Skills",href:"#skills"},{name:"Projects",href:"#projects"},{name:"Contact",href:"#contact"}],b=()=>{const{theme:t,toggleTheme:o}=m(),[n,r]=d.useState(!1);return e.jsxs(h,{initial:{y:-100},animate:{y:0},transition:{duration:.5},className:"fixed w-full bg-background/80 backdrop-blur-md z-50 border-b border-border",children:[e.jsxs("div",{className:"container mx-auto px-4 py-4 flex justify-between items-center",children:[e.jsx("a",{href:"#home",className:"text-xl font-bold",children:"Portfolio"}),e.jsxs("nav",{className:"hidden md:flex items-center gap-8",children:[c.map(a=>e.jsxs("a",{href:a.href,className:"relative group",children:[a.name,e.jsx("span",{className:"absolute left-0 bottom-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"})]},a.name)),e.jsx("button",{"aria-label":"Переключить тему",onClick:o,className:"p-2 rounded-full hover:bg-accent",children:t==="dark"?e.jsx(i,{size:20}):e.jsx(l,{size:20})})]}),e.jsx("button",{"aria-label":"Меню",className:"md:hidden p-2",onClick:()=>r(!n),children:n?e.jsx(y,{size:24}):e.jsx(x,{size:24})})]}),n&&e.jsxs(p,{initial:{opacity:0,y:-20},animate:{opacity:1,y:0},className:"md:hidden px-4 pb-4 flex flex-col gap-4",children:[c.map(a=>e.jsx("a",{href:a.href,className:"py-2",onClick:()=>r(!1),children:a.name},a.name)),e.jsxs("button",{"aria-label":"Переключить тему",onClick:o,className:"flex items-center gap-2 py-2",children:[t==="dark"?"Light Mode":"Dark Mode",t==="dark"?e.jsx(i,{size:20}):e.jsx(l,{size:20})]})]})]})};export{b as default};
