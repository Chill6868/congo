(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[345],{8927:(e,t,n)=>{Promise.resolve().then(n.bind(n,5174))},5174:(e,t,n)=>{"use strict";n.d(t,{default:()=>s});var o=n(5155),r=n(6609),i=n(7396),a=n(2115);function s(e){let t,{backgroundClassName:n="background-button",backgroundGradient:s=!1,borderClassName:l="border-[2px] border-button",borderGradient:c=!1,borderRadiusClassName:d="rounded-full",paddingClassName:u="px-32 py-16",textClassName:m="text-white",clickAnimation:p="pulse",hover:f="brightness",children:b="Example Button",className:h,formSendClass:g="",href:v="",targetBlank:y=!1}=e;(0,a.useEffect)(()=>{document.querySelectorAll(".click-animation-element").forEach(e=>{e.remove()})},[]);let w=()=>{let e=getComputedStyle(document.documentElement).getPropertyValue("--transition-duration-default").trim();return e?e.endsWith("ms")?parseFloat(e):e.endsWith("s")?1e3*parseFloat(e):0:(console.warn("Transition duration not found, returning default 0."),0)},x=()=>{if(t){t.style.opacity="0";let e=t;setTimeout(()=>{e.remove()},w())}},k=()=>{document.querySelectorAll(".click-animation-element").forEach(e=>{e instanceof HTMLElement&&(e.style.opacity="0",setTimeout(()=>{e.remove()},w()))})},_=e=>{e.target.querySelectorAll(".click-animation-element").forEach(e=>{e.style.opacity="0",setTimeout(()=>{e.remove()},w())});let n=document.createElement("div");t=n,n.classList.add("click-animation-element");let o=e.nativeEvent.offsetX,r=e.nativeEvent.offsetY;n.style.top="".concat(r,"px"),n.style.left="".concat(o,"px");let i=e.target;i.append(n);let a=i.querySelector(".click-animation-element").closest("button, a");if(a){let e=a.offsetWidth;n.style.setProperty("--click-animation-pulse-size","".concat(2.5*e,"px"))}};return""===v?(0,o.jsxs)("button",{onMouseDown:e=>{window.innerWidth>=1280&&("pulse"===p&&_(e),""!==g&&console.log("clicked send form"))},onMouseUp:()=>{window.innerWidth>=1280&&"pulse"===p&&x()},onMouseLeave:()=>{window.innerWidth>=1280&&"pulse"===p&&x()},className:(0,r.A)("cursor-pointer overflow-hidden relative flex justify-center items-center ".concat(u," ").concat(d," ").concat(g),{"[&>.btnchld]:hover:brightness-75 [&>.btnchld]:transition-[filter]":"brightness"===f},h),children:[(0,o.jsx)("div",{className:(0,r.A)("btnchld pointer-events-none absolute inset-0 ".concat(d," ").concat(n),{"bg-gradient-to-r from-primary-300 to-primary":!0===s})}),(0,o.jsx)("div",{className:(0,r.A)("btnchld pointer-events-none absolute inset-0 ".concat(d," ").concat(l),{"border-transparent bg-origin-border bg-gradient-to-r from-primary-300 to-primary [mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] [-webkit-mask-composite:destination-out] [mask-composite:exclude_!important]":!0===c||!0===s})}),(0,o.jsx)("span",{className:"relative pointer-events-none text-lg font-button ".concat(m),children:b})]}):(0,o.jsxs)(i.default,{onMouseDown:e=>{window.innerWidth>=1280&&("pulse"===p&&_(e),""!==g&&console.log("clicked send form"))},onMouseUp:()=>{window.innerWidth>=1280&&"pulse"===p&&x()},onMouseLeave:()=>{window.innerWidth>=1280&&"pulse"===p&&k()},className:(0,r.A)("cursor-pointer overflow-hidden relative flex justify-center items-center ".concat(u," ").concat(d," ").concat(g),{"[&>.btnchld]:hover:brightness-75 [&>.btnchld]:transition-[filter]":"brightness"===f},h),href:v,...y?{target:"_blank",rel:"nofollow noopener noreferrer external"}:{},draggable:"false",children:[(0,o.jsx)("div",{className:(0,r.A)("btnchld pointer-events-none absolute inset-0 ".concat(d," ").concat(n),{"bg-gradient-to-r from-primary-300 to-primary":!0===s})}),(0,o.jsx)("div",{className:(0,r.A)("btnchld pointer-events-none absolute inset-0 ".concat(d," ").concat(l),{"border-transparent bg-origin-border bg-gradient-to-r from-primary-300 to-primary [mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] [-webkit-mask-composite:destination-out] [mask-composite:exclude_!important]":!0===c||!0===s})}),(0,o.jsx)("span",{className:"relative pointer-events-none text-lg font-button ".concat(m),children:b})]})}},6609:(e,t,n)=>{"use strict";n.d(t,{A:()=>i});var o=n(3463),r=n(9795);let i=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return(0,r.QP)((0,o.$)(...t))}}},e=>{var t=t=>e(e.s=t);e.O(0,[181,396,441,517,358],()=>t(8927)),_N_E=e.O()}]);