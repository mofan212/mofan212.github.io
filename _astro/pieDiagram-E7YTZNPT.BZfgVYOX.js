import{p as at}from"./chunk-JWPE2WC7.BD0q-jm1.js";import{Y as D,b_ as G,j as rt,an as nt,bK as it,ao as ot,bL as st,as as lt,bN as ct,d as g,bf as B,ar as ut,N as dt,bJ as gt,bs as pt,X as ht,O as ft,aa as mt}from"./mermaid.core.NyaZ8vg_.js";import{p as vt}from"./cynefin-OW5HDTMX.BA5iYYb5.js";import{d as K}from"./arc.nzPkU3fJ.js";import{o as xt}from"./ordinal.BYWQX77i.js";function St(t,n){return n<t?-1:n>t?1:n>=t?0:NaN}function yt(t){return t}function wt(){var t=yt,n=St,y=null,T=D(0),l=D(G),p=D(0);function i(e){var r,s=(e=rt(e)).length,h,w,$=0,f=new Array(s),o=new Array(s),b=+T.apply(this,arguments),E=Math.min(G,Math.max(-G,l.apply(this,arguments)-b)),k,N=Math.min(Math.abs(E)/s,p.apply(this,arguments)),u=N*(E<0?-1:1),A;for(r=0;r<s;++r)(A=o[f[r]=r]=+t(e[r],r,e))>0&&($+=A);for(n!=null?f.sort(function(M,m){return n(o[M],o[m])}):y!=null&&f.sort(function(M,m){return y(e[M],e[m])}),r=0,w=$?(E-s*u)/$:0;r<s;++r,b=k)h=f[r],A=o[h],k=b+(A>0?A*w:0)+u,o[h]={data:e[h],index:r,value:A,startAngle:b,endAngle:k,padAngle:N};return o}return i.value=function(e){return arguments.length?(t=typeof e=="function"?e:D(+e),i):t},i.sortValues=function(e){return arguments.length?(n=e,y=null,i):n},i.sort=function(e){return arguments.length?(y=e,n=null,i):y},i.startAngle=function(e){return arguments.length?(T=typeof e=="function"?e:D(+e),i):T},i.endAngle=function(e){return arguments.length?(l=typeof e=="function"?e:D(+e),i):l},i.padAngle=function(e){return arguments.length?(p=typeof e=="function"?e:D(+e),i):p},i}var At=mt.pie,I={sections:new Map,showData:!1},W=I.sections,V=I.showData,Ct=structuredClone(At),$t=g(()=>structuredClone(Ct),"getConfig"),bt=g(()=>{W=new Map,V=I.showData,ft()},"clear"),Dt=g(({label:t,value:n})=>{if(n<0)throw new Error(`"${t}" has invalid value: ${n}. Negative values are not allowed in pie charts. All slice values must be >= 0.`);W.has(t)||(W.set(t,n),B.debug(`added new section: ${t}, with value: ${n}`))},"addSection"),Tt=g(()=>W,"getSections"),kt=g(t=>{V=t},"setShowData"),zt=g(()=>V,"getShowData"),Y={getConfig:$t,clear:bt,setDiagramTitle:ct,getDiagramTitle:lt,setAccTitle:st,getAccTitle:ot,setAccDescription:it,getAccDescription:nt,addSection:Dt,getSections:Tt,setShowData:kt,getShowData:zt},Et=g((t,n)=>{at(t,n),n.setShowData(t.showData),t.sections.map(n.addSection)},"populateDb"),Mt={parse:g(async t=>{const n=await vt("pie",t);B.debug(n),Et(n,Y)},"parse")},Lt=g(t=>`
  .pieCircle{
    stroke: ${t.pieStrokeColor};
    stroke-width : ${t.pieStrokeWidth};
    opacity : ${t.pieOpacity};
  }
  .pieCircle.highlighted{
    scale: 1.05;
    opacity: 1;
  }
  .pieCircle.highlightedOnHover:hover{
    transition-duration: 250ms;
    scale: 1.05;
    opacity: 1;
  }
  .pieOuterCircle{
    stroke: ${t.pieOuterStrokeColor};
    stroke-width: ${t.pieOuterStrokeWidth};
    fill: none;
  }
  .pieTitleText {
    text-anchor: middle;
    font-size: ${t.pieTitleTextSize};
    fill: ${t.pieTitleTextColor};
    font-family: ${t.fontFamily};
  }
  .slice {
    font-family: ${t.fontFamily};
    fill: ${t.pieSectionTextColor};
    font-size:${t.pieSectionTextSize};
    // fill: white;
  }
  .legend text {
    fill: ${t.pieLegendTextColor};
    font-family: ${t.fontFamily};
    font-size: ${t.pieLegendTextSize};
  }
`,"getStyles"),Nt=Lt,Rt=g(t=>{const n=[...t.values()].reduce((l,p)=>l+p,0),y=[...t.entries()].map(([l,p])=>({label:l,value:p})).filter(l=>l.value/n*100>=1);return wt().value(l=>l.value).sort(null)(y)},"createPieArcs"),Ot=g((t,n,y,T)=>{B.debug(`rendering pie chart
`+t);const l=T.db,p=ut(),i=dt(l.getConfig(),p.pie),e=40,r=18,s=4,h=450,w=h,$=gt(n),f=$.append("g");f.attr("transform","translate("+w/2+","+h/2+")");const{themeVariables:o}=p;let[b]=pt(o.pieOuterStrokeWidth);b??=2;const E=i.legendPosition,k=i.textPosition,N=i.donutHole>0&&i.donutHole<=.9?i.donutHole:0,u=Math.min(w,h)/2-e,A=K().innerRadius(N*u).outerRadius(u),M=K().innerRadius(u*k).outerRadius(u*k),m=f.append("g");m.append("circle").attr("cx",0).attr("cy",0).attr("r",u+b/2).attr("class","pieOuterCircle");const R=l.getSections(),Z=Rt(R),q=[o.pie1,o.pie2,o.pie3,o.pie4,o.pie5,o.pie6,o.pie7,o.pie8,o.pie9,o.pie10,o.pie11,o.pie12];let _=0;R.forEach(a=>{_+=a});const j=Z.filter(a=>(a.data.value/_*100).toFixed(0)!=="0"),F=xt(q).domain([...R.keys()]);m.selectAll("mySlices").data(j).enter().append("path").attr("d",A).attr("fill",a=>F(a.data.label)).attr("class",a=>{let c="pieCircle";return i.highlightSlice==="hover"?c+=" highlightedOnHover":i.highlightSlice===a.data.label&&(c+=" highlighted"),c}),m.selectAll("mySlices").data(j).enter().append("text").text(a=>(a.data.value/_*100).toFixed(0)+"%").attr("transform",a=>"translate("+M.centroid(a)+")").style("text-anchor","middle").attr("class","slice");const Q=f.append("text").text(l.getDiagramTitle()).attr("x",0).attr("y",-400/2).attr("class","pieTitleText"),L=[...R.entries()].map(([a,c])=>({label:a,value:c})),C=f.selectAll(".legend").data(L).enter().append("g").attr("class","legend");C.append("rect").attr("width",r).attr("height",r).style("fill",a=>F(a.label)).style("stroke",a=>F(a.label)),C.append("text").attr("x",r+s).attr("y",r-s).text(a=>l.getShowData()?`${a.label} [${a.value}]`:a.label);const z=Math.max(...C.selectAll("text").nodes().map(a=>a?.getBoundingClientRect().width??0));let O=h,H=w+e;const d=r+s,P=L.length*d;switch(E){case"center":C.attr("transform",(a,c)=>{const v=d*L.length/2,x=-z/2-(r+s),S=c*d-v;return"translate("+x+","+S+")"});break;case"top":O+=P,C.attr("transform",(a,c)=>{const v=u,x=-z/2-(r+s),S=c*d-v;return`translate(${x}, ${S})`}),m.attr("transform",()=>`translate(0, ${P+d})`);break;case"bottom":O+=P,C.attr("transform",(a,c)=>{const v=-u-d,x=-z/2-(r+s),S=c*d-v;return"translate("+x+","+S+")"});break;case"left":H+=r+s+z,C.attr("transform",(a,c)=>{const v=d*L.length/2,x=-u-(r+s),S=c*d-v;return"translate("+x+","+S+")"}),m.attr("transform",()=>`translate(${z+r+s}, 0)`);break;default:H+=r+s+z,C.attr("transform",(a,c)=>{const v=d*L.length/2,x=12*r,S=c*d-v;return"translate("+x+","+S+")"});break}const U=Q.node()?.getBoundingClientRect().width??0,tt=w/2-U/2,et=w/2+U/2,X=Math.min(0,tt),J=Math.max(H,et)-X;$.attr("viewBox",`${X} 0 ${J} ${O}`),ht($,O,J,i.useMaxWidth)},"draw"),Wt={draw:Ot},It={parser:Mt,db:Y,renderer:Wt,styles:Nt};export{It as diagram};
