"use strict";(self.webpackChunkpractice=self.webpackChunkpractice||[]).push([[603],{603:(e,n,t)=>{t.r(n),t.d(n,{default:()=>f});var r=t(528),i=t(43);const o=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;const t=(0,i.useRef)();return(0,i.useEffect)((()=>{if("number"!==typeof e||"number"!==typeof n)return;const{current:r}=t;t.current&&(r.offsetWidth,r.style.transition="opacity ".concat(e,"s ease-in-out ").concat(n,"s"),r.style.opacity=1)}),[]),{ref:t,style:{opacity:0}}};var c,s=t(766),l=t(464),d=t(579);const u=l.Ay.div(c||(c=(0,r.A)(["\n    display: flex;\n    justify-content: center;\n    gap: 5px;\n"]))),a=[{tab:"Section 1",content:"I'm the content of the Section 1"},{tab:"Section 2",content:"I'm the content of the Section 2"}];const f=function(){const e=(e=>{const[n,t]=(0,i.useState)(e);return(0,i.useEffect)((()=>{document.querySelector("title").innerText=n}),[n]),t})("Loading\u2026"),n=(0,i.useRef)();(0,i.useEffect)((()=>{const t=setTimeout((()=>n.current.focus()),500),r=setTimeout((()=>e("Practice6")),500);return()=>{clearTimeout(t),clearTimeout(r)}}),[]),(e=>{const n=n=>{const{clientY:t}=n;t<=0&&e()};(0,i.useEffect)((()=>{if("function"===typeof e)return document.addEventListener("mouseleave",n),()=>{document.removeEventListener("mouseleave",n)}}),[])})((()=>console.log("Plz don't leave")));const t=((e,n)=>{const[t,r]=(0,i.useState)(e);return{value:t,onChange:e=>{const{target:{value:t}}=e;let i=!0;"function"===typeof n&&(i=n(t)),i&&r(t)}}})("Mr. ",(e=>e.length<=10)),{currentItem:r,changeItem:c}=((e,n)=>{const[t,r]=(0,i.useState)(e);if(n&&Array.isArray(n))return{currentItem:n[t],changeItem:r}})(0,a),l=(e=>{const n=(0,i.useRef)();return(0,i.useEffect)((()=>{if("function"===typeof e)return n.current&&n.current.addEventListener("click",e),()=>{n.current&&n.current.removeEventListener("click",e)}}),[]),n})((()=>console.log("Hello"))),f=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",n=arguments.length>1?arguments[1]:void 0,t=arguments.length>2?arguments[2]:void 0;if(!n&&"function"!==typeof n)return;if(!t&&"function"!==typeof t)return;return()=>{window.confirm(e)?n():t()}}("Are you sure?",(()=>console.log("Deleting the World")),(()=>console.log("Aborted"))),{enablePrevent:h,disablePrevent:x}=(()=>{const e=e=>{e.preventDefault(),e.returnValue=""};return{enablePrevent:()=>window.addEventListener("beforeunload",e),disablePrevent:()=>window.removeEventListener("beforeunload",e)}})(),v=o(1,0),j=o(1,1),p=(e=>{const[n,t]=(0,i.useState)(navigator.onLine),r=()=>{"function"===typeof e&&e(navigator.onLine),t(navigator.onLine)};return(0,i.useEffect)((()=>(window.addEventListener("online",r),window.addEventListener("offline",r),()=>{window.removeEventListener("online",r),window.removeEventListener("offline",r)})),[]),n})((e=>{console.log(e?"We just went online":"We are Offline")})),{y:m}=(()=>{const[e,n]=(0,i.useState)({x:0,y:0}),t=e=>{n({y:window.scrollY,x:window.scrollX})};return(0,i.useEffect)((()=>(window.addEventListener("scroll",t),()=>window.removeEventListener("scroll",t))),[]),e})(),{element:g,triggerFull:w,exitFull:y,isFullscreen:E}=(e=>{const n=(0,i.useRef)(),[t,r]=(0,i.useState)(!1);return{element:n,triggerFull:()=>{n.current&&(n.current.requestFullscreen(),e&&"function"===typeof e&&e(!0),r(!0))},exitFull:()=>{document.exitFullscreen(),e&&"function"===typeof e&&e(!1),r(!1)},isFullscreen:t}})((e=>{console.log(e?"We are full":"We are Small")})),b=((e,n)=>{if(!1 in window)return;return()=>{"granted"!==Notification.permission?Notification.requestPermission().then((t=>{"granted"===t&&new Notification(e,n)})):new Notification(e,n)}})("\ud14c\uc2a4\ud2b8 \uc54c\ub78c\ucc3d",{body:"\ud14c\uc2a4\ud2b8\ub97c \ud655\uc778\ud588\uc2b5\ub2c8\ub2e4."});return(0,d.jsxs)("div",{className:"content-div",style:{height:"150vh"},children:[(0,d.jsx)("h1",{children:"\ucee4\uc2a4\ud140 \ud6c5 \uc5f0\uc2b5\uc6a9 \ud398\uc774\uc9c0"}),(0,d.jsx)("hr",{}),(0,d.jsxs)("div",{children:[(0,d.jsx)("h3",{children:"UseInput"}),(0,d.jsx)("input",{placeholder:"Name",...t})]}),(0,d.jsxs)("div",{children:[(0,d.jsx)("h3",{children:"UseTabs"}),(0,d.jsx)(u,{children:a.map(((e,n)=>(0,d.jsx)(s.E,{onClick:()=>c(n),children:e.tab},n)))}),(0,d.jsx)("div",{children:r.content})]}),(0,d.jsxs)("div",{children:[(0,d.jsx)("h3",{children:"UseRef(Not custom hook)"}),(0,d.jsx)("div",{children:"Hi"}),(0,d.jsx)("input",{ref:n,placeholder:"0.5\ucd08 \ub0b4\ub85c \uc5ec\uae30\uc5d0 focus"})]}),(0,d.jsxs)("div",{children:[(0,d.jsx)("h3",{children:"UseClick"}),(0,d.jsx)("p",{ref:l,style:{cursor:"pointer"},children:"Click Here(\ucd9c\ub825 \uc815\ubcf4\ub294 \ucf58\uc194\ucc3d \ud655\uc778)"})]}),(0,d.jsxs)("div",{children:[(0,d.jsx)("h3",{children:"useConfirm"}),(0,d.jsx)(s.E,{onClick:f,children:"Delete the world"}),(0,d.jsx)("p",{children:"(\ud655\uc778, \ucde8\uc18c\uc5d0 \ub530\ub978 \uacb0\uacfc\ub294 \ucf58\uc194\ucc3d \ud655\uc778)"})]}),(0,d.jsxs)("div",{children:[(0,d.jsx)("h3",{children:"usePreventLeave"}),(0,d.jsxs)(u,{children:[(0,d.jsx)(s.E,{onClick:h,children:"Protect"}),(0,d.jsx)(s.E,{onClick:x,children:"Unprotect"})]}),(0,d.jsx)("p",{children:"Protect\ub97c \ub204\ub974\uace0 \ucc3d\uc744 \ubc97\uc5b4\ub098\ub824 \ud558\uba74 \uc54c\ub9bc\ucc3d\uc774 \ub728\uace0, Unprotect\ub97c \ub204\ub974\uba74 \uadf8\ub0e5 \ubc97\uc5b4\ub0a0 \uc218 \uc788\ub2e4."})]}),(0,d.jsxs)("div",{children:[(0,d.jsx)("h3",{children:"useFadeIn"}),(0,d.jsx)("p",{...v,children:"Hello"}),(0,d.jsx)("p",{...j,children:"I'm maren"})]}),(0,d.jsxs)("div",{children:[(0,d.jsx)("h3",{children:"useNetwork"}),(0,d.jsx)("p",{children:p?"Online":"Offline"})]}),(0,d.jsx)("div",{children:(0,d.jsx)("h3",{style:{left:"20px",top:"200px",position:"fixed",color:m>100?"red":"blue"},children:"useScroll"})}),(0,d.jsxs)("div",{children:[(0,d.jsx)("h3",{children:"useFullscreen"}),(0,d.jsxs)("div",{ref:g,children:[(0,d.jsx)("img",{src:"https://i.ibb.co/R6RwNxx/grape.jpg",alt:"grape",width:"250"}),(0,d.jsx)("br",{}),E?(0,d.jsx)(s.E,{onClick:y,children:"Exit fullscreen"}):null]}),(0,d.jsx)(s.E,{onClick:w,children:"Make fullscreen"})]}),(0,d.jsxs)("div",{children:[(0,d.jsx)("h3",{children:"useNotification"}),(0,d.jsx)(s.E,{onClick:b,children:"\uc54c\ub78c\ucc3d \ub744\uc6b0\uae30"})]})]})}},766:(e,n,t)=>{t.d(n,{E:()=>o});var r,i=t(528);let o=t(464).Ay.button(r||(r=(0,i.A)(["\n  background-color: black;\n  color: white;\n  padding: 10px 20px;\n  border-radius: 10px;\n  border: none;\n"])))}}]);
//# sourceMappingURL=603.c0e0da30.chunk.js.map