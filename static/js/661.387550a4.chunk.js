"use strict";(self.webpackChunkpractice=self.webpackChunkpractice||[]).push([[661],{861:(n,i,e)=>{e.d(i,{A:()=>c});var s=e(579);const c=function(n){let{lodingColor:i="black"}=n,e=i;return(0,s.jsx)("div",{className:"spinner-border",role:"status",style:{color:"".concat(e)},children:(0,s.jsx)("span",{className:"visually-hidden",children:"Loading..."})})}},661:(n,i,e)=>{e.r(i),e.d(i,{default:()=>y});var s=e(528),c=e(213),t=e(43),a=e(216),o=e(464),l=e(861);const r=e.p+"static/media/octicon-play-24.0b8e63e83e5c4055031b87246c340695.svg";const d=e.p+"static/media/arrow-back.10fd89d409e4688c4672a3674de2c249.svg";var p,h,m,x,u=e(579);let v=o.Ay.div(p||(p=(0,s.A)(["\n  display: flex;\n  justify-content: center;\n"]))),j=o.Ay.div(h||(h=(0,s.A)(["\n  position: relative;\n\n  .octicon-play-24 {\n    width: 132px;\n    height: 132px;\n    position: absolute;\n    left: calc(50% - 66px);\n    top: calc(50% - 65.5px);\n    opacity: 0.4;\n    cursor: pointer;\n  }\n"]))),g=o.Ay.div(m||(m=(0,s.A)(["\n    color: white;\n    .movie-description{\n        width: 896px;\n    }\n"]))),f=o.Ay.img(x||(x=(0,s.A)(["\n  width: 50px;\n  position: absolute;\n  left: 10px;\n  top: 80px;\n"])));const y=function(){let n=(0,a.Zp)();const[i,e]=(0,t.useState)(!0),[s,o]=(0,t.useState)([]),{id:p}=(0,a.g)();(0,t.useEffect)((()=>{h()}),[]);const h=async()=>{const n=await c.A.get("https://yts.mx/api/v2/movie_details.json?movie_id=".concat(p));o(n.data.data.movie),e(!1)};return(0,u.jsxs)("div",{className:"content-div",children:[(0,u.jsx)(f,{src:d,onClick:()=>{n(-1)},style:{cursor:"pointer"}}),i?(0,u.jsx)(l.A,{lodingColor:"white"}):(0,u.jsx)(v,{children:(0,u.jsxs)("div",{className:"Detail-info",children:[(0,u.jsxs)(j,{children:[(0,u.jsx)("img",{className:"theater-img",src:s.background_image_original}),(0,u.jsx)("img",{className:"octicon-play-24",src:r,onClick:()=>{window.open(s.url)}})]}),(0,u.jsxs)(g,{children:[(0,u.jsx)("img",{className:"poster-img",src:s.medium_cover_image}),(0,u.jsx)("h1",{children:s.title}),(0,u.jsxs)("div",{children:[s.year,"\ub144 ",function(n){if(n){const i=Math.floor(n/60),e=n%60;return e?i?"\u2022 ".concat(i,"\uc2dc\uac04 ").concat(e," \ubd84"):"\u2022 ".concat(e," \ubd84"):"\u2022 ".concat(i,"\uc2dc\uac04")}return null}(s.runtime)]}),(0,u.jsxs)("div",{className:"movieRate-info",children:[(0,u.jsxs)("span",{children:["rate : ",s.rating]}),(0,u.jsxs)("span",{children:["like : ",s.like_count]})]}),(0,u.jsx)("div",{children:s.genres.map((n=>(0,u.jsx)("div",{children:n})))},p),(0,u.jsx)("div",{className:"movie-description",children:s.description_full})]})]})})]})}}}]);
//# sourceMappingURL=661.387550a4.chunk.js.map