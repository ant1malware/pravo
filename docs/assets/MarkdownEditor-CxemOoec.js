import{j as e}from"./index-CAkmMo7n.js";import{R as l}from"./react-vendor-DTkXckhQ.js";import{p as _,d as O}from"./purify.es-DnfDK_hS.js";import{ae as P,af as $,O as F,ag as g,ah as V,Q as M,ai as Q,aj as U,ak as W,al as q,ad as H}from"./icons-wEjUy8Cq.js";function X({value:i,onChange:d,onSubmit:x,placeholder:w,disabled:h,submitLabel:C="Send",draftKey:u,projectTemplate:N}){const[f,j]=l.useState("write"),k=l.useRef(null),[b,p]=l.useState(null);l.useEffect(()=>{if(u)try{const t=localStorage.getItem(u)||"";t&&!i&&d(t)}catch{}},[u]),l.useEffect(()=>{if(u)try{localStorage.setItem(u,i||"")}catch{}},[i,u]),l.useEffect(()=>{if(!u)return;const t=o=>{(i||"").trim().length>0&&(o.preventDefault(),o.returnValue="")};return window.addEventListener("beforeunload",t),()=>window.removeEventListener("beforeunload",t)},[u,i]);function s(t,o=""){const n=k.current,r=i||"",a=n?n.selectionStart||0:r.length,c=n?n.selectionEnd||0:r.length,m=r.slice(a,c),y=t+m+o,B=r.slice(0,a)+y+r.slice(c);return d(B),requestAnimationFrame(()=>{try{n==null||n.focus(),n.selectionStart=n.selectionEnd=a+t.length+m.length}catch{}}),y}function E(t){var r;const o=(r=t.target.files)==null?void 0:r[0];if(!o)return;const n=new FileReader;n.onload=()=>{const c=`

![image](${String(n.result||"")})

`;s(c,""),p(c)},n.readAsDataURL(o)}function I(){const t=prompt("Video URL (YouTube/Vimeo/direct)");if(t){if(/youtu\.be\/.+|youtube\.com\/watch\?v=/.test(t)){const o=t.match(/(?:v=|youtu\.be\/)([A-Za-z0-9_-]{6,})/),n=o==null?void 0:o[1];if(n){s(`

<iframe width="560" height="315" src="https://www.youtube.com/embed/${n}" frameborder="0" allowfullscreen></iframe>

`);return}}s(`

${t}

`)}}function v(){s(`

> [poll]
> Question?
> - Option A
> - Option B
> - Option C

`)}function D(){s(`

- [ ] \u0417\u0430\u0434\u0430\u0447\u0430 1
- [ ] \u0417\u0430\u0434\u0430\u0447\u0430 2
- [x] \u0413\u043E\u0442\u043E\u0432\u043E

`)}function L(){s(`

# \u041F\u0440\u043E\u0435\u043A\u0442: \u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435

## \u0426\u0435\u043B\u0438
- ...

## \u0422\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u0438
- ...

## \u041F\u0440\u043E\u0433\u0440\u0435\u0441\u0441
- [ ] \u0428\u0430\u0433 1
- [ ] \u0428\u0430\u0433 2

`)}function z(t){(t.metaKey||t.ctrlKey)&&(t.key.toLowerCase()==="b"?(t.preventDefault(),s("**","**")):t.key.toLowerCase()==="i"?(t.preventDefault(),s("_","_")):t.key.toLowerCase()==="k"?(t.preventDefault(),s("[text](",")")):t.key==="`"&&(t.preventDefault(),s("`","`")))}function R(t){t.preventDefault()}function S(t){var a;t.preventDefault();const o=(a=t.dataTransfer)==null?void 0:a.files;if(!o||o.length===0)return;const n=o[0];if(!n||!/^image\//.test(n.type))return;const r=new FileReader;r.onload=()=>{const m=`

![image](${String(r.result||"")})

`;s(m,""),p(m)},r.readAsDataURL(n)}function A(){if(!b)return;const t=i.indexOf(b);t>=0&&d(i.slice(0,t)+i.slice(t+b.length)),p(null)}const T=l.useMemo(()=>{try{return _.sanitize(O.parse(i||""))}catch{return""}},[i]);return e.jsxs("div",{className:"w-full",onDragOver:R,onDrop:S,children:[e.jsxs("div",{className:"mb-2 flex flex-wrap items-center gap-2",children:[e.jsx("button",{type:"button",className:"btn",onClick:()=>s("**","**"),title:"Bold",children:e.jsx(P,{size:14})}),e.jsx("button",{type:"button",className:"btn",onClick:()=>s("_","_"),title:"Italic",children:e.jsx($,{size:14})}),e.jsx("button",{type:"button",className:"btn",onClick:()=>s("[text](",")"),title:"Link",children:e.jsx(F,{size:14})}),e.jsx("button",{type:"button",className:"btn",onClick:()=>s("`","`"),title:"Inline code",children:e.jsx(g,{size:14})}),e.jsxs("button",{type:"button",className:"btn",onClick:()=>s("\n\n````\n","\n````\n"),title:"Code block",children:[e.jsx(g,{size:14})," ",e.jsx("span",{className:"ml-1",children:"{}"})]}),e.jsx("button",{type:"button",className:"btn",onClick:()=>s(`

- `),title:"List",children:e.jsx(V,{size:14})}),e.jsx("button",{type:"button",className:"btn",onClick:()=>s(`

> `),title:"Quote",children:e.jsx(M,{size:14})}),e.jsxs("label",{className:"btn",title:"Insert image",children:[e.jsx(Q,{size:14}),e.jsx("input",{type:"file",accept:"image/*",hidden:!0,onChange:E})]}),e.jsx("button",{type:"button",className:"btn",onClick:I,title:"Insert video",children:e.jsx(U,{size:14})}),e.jsx("button",{type:"button",className:"btn",onClick:v,title:"Insert poll",children:"Poll"}),e.jsx("button",{type:"button",className:"btn",onClick:D,title:"Task list",children:e.jsx(W,{size:14})}),N&&e.jsx("button",{type:"button",className:"btn",onClick:L,title:"Insert project template",children:"Insert Project Template"}),b&&e.jsxs("button",{type:"button",className:"btn",onClick:A,title:"\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u0432\u043B\u043E\u0436\u0435\u043D\u0438\u0435",children:[e.jsx(q,{size:14})," Clear"]}),e.jsxs("div",{className:"ml-auto flex items-center gap-1",children:[e.jsx("button",{type:"button",className:`tab ${f==="write"?"tab-active":""}`,onClick:()=>j("write"),children:"Write"}),e.jsxs("button",{type:"button",className:`tab ${f==="preview"?"tab-active":""}`,onClick:()=>j("preview"),children:[e.jsx(H,{size:14})," Preview"]})]})]}),f==="write"?e.jsx("textarea",{ref:k,className:"input min-h-[120px]",placeholder:w||"Write in Markdown...",value:i,onChange:t=>d(t.target.value),disabled:h,onKeyDown:z}):e.jsx("div",{className:"prose prose-invert max-w-none rounded-lg border p-3",style:{borderColor:"var(--border)",background:"var(--surface-2)"},dangerouslySetInnerHTML:{__html:T}}),x&&e.jsx("div",{className:"mt-2 flex justify-end",children:e.jsx("button",{type:"button",className:"btn btn-primary",onClick:()=>{const t=i.trim();if(t&&(x(t),u))try{localStorage.removeItem(u)}catch{}},disabled:h,children:C})})]})}export{X as M};
