const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["_astro/mermaid.core.CPH0ztNw.js","_astro/rolldown-runtime.XKyaHtl9.js","_astro/preload-helper.DHhhL8Zf.js","_astro/chunk-Y2CYZVJY.DsF7k-Jl.js","_astro/src.IfH77Mrn.js","_astro/chunk-DU6HZSFF.ChvRpTiY.js","_astro/chunk-75Z2AOVW.CuSzUqIa.js","_astro/dist.cw9mG4bo.js","_astro/chunk-PWAF6VOD.CKRREzwo.js","_astro/chunk-GMAD6QVW.BgngFlc-.js","_astro/chunk-P2QGCYS3.BAinPd3M.js","_astro/chunk-4HAMMTFA.DeZ9HQLk.js","_astro/rough.esm.Dy-Kn_BL.js","_astro/chunk-GVQU2GXP.BG4EwhLh.js","_astro/chunk-OSK3NFVY.gjpkIUuO.js","_astro/line.BGCEkp6u.js","_astro/path.fybaL0A-.js","_astro/array.BifhSqXX.js","_astro/graphlib.DS17s2tU.js","_astro/chunk-L3NEJ4N5.BlWuTOr3.js"])))=>i.map(i=>d[i]);
import{t as e}from"./preload-helper.DHhhL8Zf.js";var t=`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 448 512" fill="currentColor" class="icon icon-font-awesome icon-expand"><path d="M32 32C14.3 32 0 46.3 0 64v96c0 17.7 14.3 32 32 32s32-14.3 32-32V96h64c17.7 0 32-14.3 32-32S145.7 32 128 32H32zM32 320c-17.7 0-32 14.3-32 32v96c0 17.7 14.3 32 32 32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H64v-64c0-17.7-14.3-32-32-32zM416 32h-96c-17.7 0-32 14.3-32 32s14.3 32 32 32h64v64c0 17.7 14.3 32 32 32s32-14.3 32-32V64c0-17.7-14.3-32-32-32zM416 320c-17.7 0-32 14.3-32 32v64h-64c-17.7 0-32 14.3-32 32s14.3 32 32 32h96c17.7 0 32-14.3 32-32v-96c0-17.7-14.3-32-32-32z"/></svg>
`,n=`mermaid-controls`,r=`mermaid-open-button`,i=`在新标签页打开 Mermaid 图`,a=2/3;function o(e){return e.replace(/[&<>"']/g,e=>({"&":`&amp;`,"<":`&lt;`,">":`&gt;`,'"':`&quot;`,"'":`&#39;`})[e]??e)}function s(){let e=new DOMParser().parseFromString(t,`image/svg+xml`).documentElement,n=document.importNode(e,!0);return n.removeAttribute(`width`),n.removeAttribute(`height`),n.setAttribute(`aria-hidden`,`true`),n.classList.add(`mermaid-open-icon`),n}function c(e){let t=e.viewBox.baseVal;if(t.width>0&&t.height>0)return{width:Math.ceil(t.width),height:Math.ceil(t.height)};let n=Number.parseFloat(e.getAttribute(`width`)??``),r=Number.parseFloat(e.getAttribute(`height`)??``);return n>0&&r>0?{width:Math.ceil(n),height:Math.ceil(r)}:null}function l(e){let t=e.cloneNode(!0),n=c(e);t.setAttribute(`xmlns`,`http://www.w3.org/2000/svg`),t.setAttribute(`xmlns:xlink`,`http://www.w3.org/1999/xlink`),t.style.maxWidth=`none`,t.style.margin=`auto`,n&&(t.setAttribute(`width`,String(n.width)),t.setAttribute(`height`,String(n.height)),t.style.width=`${n.width}px`,t.style.height=`${n.height}px`);let r=getComputedStyle(document.body).backgroundColor||getComputedStyle(document.documentElement).backgroundColor||`#ffffff`,a=new XMLSerializer().serializeToString(t);return`<!doctype html>
<html lang="zh-CN">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>${i}</title>
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
        background: ${o(r)};
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
  <body>${a}</body>
</html>`}function u(e){let t=e.querySelector(`:scope > svg`);if(!t)return;let n=l(t),r=URL.createObjectURL(new Blob([n],{type:`text/html;charset=utf-8`})),i=window.open(r,`_blank`);if(!i)URL.revokeObjectURL(r);else{try{i.opener=null}catch{}window.setTimeout(()=>URL.revokeObjectURL(r),6e4)}}function d(e){let t=document.createElement(`div`);t.className=n;let a=document.createElement(`button`);return a.type=`button`,a.className=r,a.setAttribute(`aria-label`,i),a.title=i,a.append(s()),a.addEventListener(`click`,()=>u(e)),t.append(a),t}function f(e){let t=e.querySelector(`:scope > svg`);if(!t)return;let r=c(t);r&&t.style.setProperty(`--mermaid-mobile-width`,`${Math.ceil(r.width*a)}px`);let i=Array.from(e.children).find(e=>e.classList.contains(n))??d(e);e.prepend(i)}function p(e){for(let t of e.querySelectorAll(`:scope > .${n}`))t.remove()}var m,h;function g(){return document.documentElement.classList.contains(`dark`)?`dark`:`default`}var _=getComputedStyle(document.documentElement).getPropertyValue(`--font-code`).trim(),v={darkMode:!0,background:`#212737`,primaryColor:`#343f60`,primaryTextColor:`#eaedf3`,primaryBorderColor:`#ff6b01`,secondaryColor:`#2b344b`,secondaryTextColor:`#eaedf3`,secondaryBorderColor:`#afb9ca`,tertiaryColor:`#182033`,tertiaryTextColor:`#eaedf3`,tertiaryBorderColor:`#afb9ca`,lineColor:`#afb9ca`,textColor:`#eaedf3`,edgeLabelBackground:`#212737`};async function y(t=!1){let n=Array.from(document.querySelectorAll(`.mermaid`));if(n.length===0)return;let r=g();if(!t&&r===h&&n.filter(e=>!e.hasAttribute(`data-processed`)).length===0)return;m??=e(()=>import(`./mermaid.core.CPH0ztNw.js`).then(e=>e.t),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19]));let{default:i}=await m;i.initialize({startOnLoad:!1,securityLevel:`strict`,fontFamily:_,theme:r===`dark`?`base`:`default`,themeVariables:r===`dark`?v:void 0}),h=r;for(let e of n){if(e.dataset.originalSource||(e.dataset.originalSource=e.textContent??``),t)e.textContent=e.dataset.originalSource,e.removeAttribute(`data-processed`),p(e);else if(e.hasAttribute(`data-processed`))continue;try{await i.run({nodes:[e]}),f(e)}catch(t){e.dataset.processed=`error`,p(e),console.error(`Mermaid diagram failed to render`,t)}}}y(),document.addEventListener(`astro:page-load`,()=>void y()),new MutationObserver(()=>{g()!==h&&y(!0)}).observe(document.documentElement,{attributes:!0,attributeFilter:[`class`,`data-theme`]});