const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["_astro/mermaid.core.NyaZ8vg_.js","_astro/preload-helper.CVfkMyKi.js","_astro/dayjs.min.EHnDm2OX.js","_astro/_commonjsHelpers.CqkleIqs.js"])))=>i.map(i=>d[i]);
import{_ as h}from"./preload-helper.CVfkMyKi.js";const g=`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 448 512" fill="currentColor" class="icon icon-font-awesome icon-expand"><path d="M32 32C14.3 32 0 46.3 0 64v96c0 17.7 14.3 32 32 32s32-14.3 32-32V96h64c17.7 0 32-14.3 32-32S145.7 32 128 32H32zM32 320c-17.7 0-32 14.3-32 32v96c0 17.7 14.3 32 32 32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H64v-64c0-17.7-14.3-32-32-32zM416 32h-96c-17.7 0-32 14.3-32 32s14.3 32 32 32h64v64c0 17.7 14.3 32 32 32s32-14.3 32-32V64c0-17.7-14.3-32-32-32zM416 320c-17.7 0-32 14.3-32 32v64h-64c-17.7 0-32 14.3-32 32s14.3 32 32 32h96c17.7 0 32-14.3 32-32v-96c0-17.7-14.3-32-32-32z"/></svg>
`,s="mermaid-controls",f="mermaid-open-button",a="在新标签页打开 Mermaid 图";function b(t){return t.replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]??e)}function p(){const t=new DOMParser().parseFromString(g,"image/svg+xml").documentElement,e=document.importNode(t,!0);return e.removeAttribute("width"),e.removeAttribute("height"),e.setAttribute("aria-hidden","true"),e.classList.add("mermaid-open-icon"),e}function w(t){const e=t.viewBox.baseVal;if(e.width>0&&e.height>0)return{width:Math.ceil(e.width),height:Math.ceil(e.height)};const r=Number.parseFloat(t.getAttribute("width")??""),n=Number.parseFloat(t.getAttribute("height")??"");return r>0&&n>0?{width:Math.ceil(r),height:Math.ceil(n)}:null}function v(t){const e=t.cloneNode(!0),r=w(t);e.setAttribute("xmlns","http://www.w3.org/2000/svg"),e.setAttribute("xmlns:xlink","http://www.w3.org/1999/xlink"),e.style.maxWidth="none",e.style.margin="auto",r&&(e.setAttribute("width",String(r.width)),e.setAttribute("height",String(r.height)),e.style.width=`${r.width}px`,e.style.height=`${r.height}px`);const n=getComputedStyle(document.body).backgroundColor||getComputedStyle(document.documentElement).backgroundColor||"#ffffff",o=new XMLSerializer().serializeToString(e);return`<!doctype html>
<html lang="zh-CN">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>${a}</title>
    <style>
      :root { color-scheme: light dark; }
      html { min-height: 100%; }
      body {
        box-sizing: border-box;
        display: flex;
        min-width: 100%;
        min-height: 100vh;
        min-height: 100dvh;
        margin: 0;
        padding: 1.5rem;
        overflow: auto;
        background: ${b(n)};
        user-select: text;
      }
      svg {
        display: block;
        flex: 0 0 auto;
        max-width: none;
        height: auto;
        margin: auto;
      }
    </style>
  </head>
  <body>${o}</body>
</html>`}function y(t){const e=t.querySelector(":scope > svg");if(!e)return;const r=v(e),n=URL.createObjectURL(new Blob([r],{type:"text/html;charset=utf-8"})),o=window.open(n,"_blank");if(!o){URL.revokeObjectURL(n);return}try{o.opener=null}catch{}window.setTimeout(()=>URL.revokeObjectURL(n),6e4)}function x(t){const e=document.createElement("div");e.className=s;const r=document.createElement("button");return r.type="button",r.className=f,r.setAttribute("aria-label",a),r.title=a,r.append(p()),r.addEventListener("click",()=>y(t)),e.append(r),e}function C(t){if(!t.querySelector(":scope > svg"))return;const r=Array.from(t.children).find(n=>n.classList.contains(s))??x(t);t.prepend(r)}function l(t){for(const e of t.querySelectorAll(`:scope > .${s}`))e.remove()}let m,c;function u(){return document.documentElement.classList.contains("dark")?"dark":"default"}const k=getComputedStyle(document.documentElement).getPropertyValue("--font-code").trim(),A={darkMode:!0,background:"#212737",primaryColor:"#343f60",primaryTextColor:"#eaedf3",primaryBorderColor:"#ff6b01",secondaryColor:"#2b344b",secondaryTextColor:"#eaedf3",secondaryBorderColor:"#afb9ca",tertiaryColor:"#182033",tertiaryTextColor:"#eaedf3",tertiaryBorderColor:"#afb9ca",lineColor:"#afb9ca",textColor:"#eaedf3",edgeLabelBackground:"#212737"};async function d(t=!1){const e=Array.from(document.querySelectorAll(".mermaid"));if(e.length===0)return;const r=u();if(!t&&r===c&&e.filter(i=>!i.hasAttribute("data-processed")).length===0)return;m??=h(()=>import("./mermaid.core.NyaZ8vg_.js").then(o=>o.bk),__vite__mapDeps([0,1,2,3]));const{default:n}=await m;n.initialize({startOnLoad:!1,securityLevel:"strict",fontFamily:k,theme:r==="dark"?"base":"default",themeVariables:r==="dark"?A:void 0}),c=r;for(const o of e){if(o.dataset.originalSource||(o.dataset.originalSource=o.textContent??""),t)o.textContent=o.dataset.originalSource,o.removeAttribute("data-processed"),l(o);else if(o.hasAttribute("data-processed"))continue;try{await n.run({nodes:[o]}),C(o)}catch(i){o.dataset.processed="error",l(o),console.error("Mermaid diagram failed to render",i)}}}d();document.addEventListener("astro:page-load",()=>{d()});const M=new MutationObserver(()=>{u()!==c&&d(!0)});M.observe(document.documentElement,{attributes:!0,attributeFilter:["class","data-theme"]});
