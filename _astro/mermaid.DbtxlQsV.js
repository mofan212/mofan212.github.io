const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["_astro/mermaid.core.NyaZ8vg_.js","_astro/preload-helper.CVfkMyKi.js","_astro/dayjs.min.EHnDm2OX.js","_astro/_commonjsHelpers.CqkleIqs.js"])))=>i.map(i=>d[i]);
import{_ as g}from"./preload-helper.CVfkMyKi.js";const f=`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 448 512" fill="currentColor" class="icon icon-font-awesome icon-expand"><path d="M32 32C14.3 32 0 46.3 0 64v96c0 17.7 14.3 32 32 32s32-14.3 32-32V96h64c17.7 0 32-14.3 32-32S145.7 32 128 32H32zM32 320c-17.7 0-32 14.3-32 32v96c0 17.7 14.3 32 32 32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H64v-64c0-17.7-14.3-32-32-32zM416 32h-96c-17.7 0-32 14.3-32 32s14.3 32 32 32h64v64c0 17.7 14.3 32 32 32s32-14.3 32-32V64c0-17.7-14.3-32-32-32zM416 320c-17.7 0-32 14.3-32 32v64h-64c-17.7 0-32 14.3-32 32s14.3 32 32 32h96c17.7 0 32-14.3 32-32v-96c0-17.7-14.3-32-32-32z"/></svg>
`,c="mermaid-controls",b="mermaid-open-button",a="在新标签页打开 Mermaid 图",p=2/3;function w(o){return o.replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]??e)}function v(){const o=new DOMParser().parseFromString(f,"image/svg+xml").documentElement,e=document.importNode(o,!0);return e.removeAttribute("width"),e.removeAttribute("height"),e.setAttribute("aria-hidden","true"),e.classList.add("mermaid-open-icon"),e}function u(o){const e=o.viewBox.baseVal;if(e.width>0&&e.height>0)return{width:Math.ceil(e.width),height:Math.ceil(e.height)};const t=Number.parseFloat(o.getAttribute("width")??""),n=Number.parseFloat(o.getAttribute("height")??"");return t>0&&n>0?{width:Math.ceil(t),height:Math.ceil(n)}:null}function y(o){const e=o.cloneNode(!0),t=u(o);e.setAttribute("xmlns","http://www.w3.org/2000/svg"),e.setAttribute("xmlns:xlink","http://www.w3.org/1999/xlink"),e.style.maxWidth="none",e.style.margin="auto",t&&(e.setAttribute("width",String(t.width)),e.setAttribute("height",String(t.height)),e.style.width=`${t.width}px`,e.style.height=`${t.height}px`);const n=getComputedStyle(document.body).backgroundColor||getComputedStyle(document.documentElement).backgroundColor||"#ffffff",r=new XMLSerializer().serializeToString(e);return`<!doctype html>
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
        background: ${w(n)};
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
  <body>${r}</body>
</html>`}function x(o){const e=o.querySelector(":scope > svg");if(!e)return;const t=y(e),n=URL.createObjectURL(new Blob([t],{type:"text/html;charset=utf-8"})),r=window.open(n,"_blank");if(!r){URL.revokeObjectURL(n);return}try{r.opener=null}catch{}window.setTimeout(()=>URL.revokeObjectURL(n),6e4)}function C(o){const e=document.createElement("div");e.className=c;const t=document.createElement("button");return t.type="button",t.className=b,t.setAttribute("aria-label",a),t.title=a,t.append(v()),t.addEventListener("click",()=>x(o)),e.append(t),e}function k(o){const e=o.querySelector(":scope > svg");if(!e)return;const t=u(e);t&&e.style.setProperty("--mermaid-mobile-width",`${Math.ceil(t.width*p)}px`);const r=Array.from(o.children).find(i=>i.classList.contains(c))??C(o);o.prepend(r)}function l(o){for(const e of o.querySelectorAll(`:scope > .${c}`))e.remove()}let m,s;function h(){return document.documentElement.classList.contains("dark")?"dark":"default"}const M=getComputedStyle(document.documentElement).getPropertyValue("--font-code").trim(),A={darkMode:!0,background:"#212737",primaryColor:"#343f60",primaryTextColor:"#eaedf3",primaryBorderColor:"#ff6b01",secondaryColor:"#2b344b",secondaryTextColor:"#eaedf3",secondaryBorderColor:"#afb9ca",tertiaryColor:"#182033",tertiaryTextColor:"#eaedf3",tertiaryBorderColor:"#afb9ca",lineColor:"#afb9ca",textColor:"#eaedf3",edgeLabelBackground:"#212737"};async function d(o=!1){const e=Array.from(document.querySelectorAll(".mermaid"));if(e.length===0)return;const t=h();if(!o&&t===s&&e.filter(i=>!i.hasAttribute("data-processed")).length===0)return;m??=g(()=>import("./mermaid.core.NyaZ8vg_.js").then(r=>r.bk),__vite__mapDeps([0,1,2,3]));const{default:n}=await m;n.initialize({startOnLoad:!1,securityLevel:"strict",fontFamily:M,theme:t==="dark"?"base":"default",themeVariables:t==="dark"?A:void 0}),s=t;for(const r of e){if(r.dataset.originalSource||(r.dataset.originalSource=r.textContent??""),o)r.textContent=r.dataset.originalSource,r.removeAttribute("data-processed"),l(r);else if(r.hasAttribute("data-processed"))continue;try{await n.run({nodes:[r]}),k(r)}catch(i){r.dataset.processed="error",l(r),console.error("Mermaid diagram failed to render",i)}}}d();document.addEventListener("astro:page-load",()=>{d()});const S=new MutationObserver(()=>{h()!==s&&d(!0)});S.observe(document.documentElement,{attributes:!0,attributeFilter:["class","data-theme"]});
