import{j as e}from"./index-XtYTn164.js";import{R as u}from"./react-vendor-DTkXckhQ.js";import{p as P,d as $}from"./purify.es-DnfDK_hS.js";import{af as O,ag as V,V as M,ah as g,ai as Q,Q as B,aj as F,ak as U,al as W,am as q,ae as H}from"./icons-6J_ozvLF.js";function X({value:r,onChange:b,onSubmit:x,placeholder:w,disabled:h,submitLabel:N="Send",draftKey:a,projectTemplate:C}){const[f,j]=u.useState("write"),k=u.useRef(null),[d,p]=u.useState(null);u.useEffect(()=>{if(a)try{const t=localStorage.getItem(a)||"";t&&!r&&b(t)}catch{}},[a]),u.useEffect(()=>{if(a)try{localStorage.setItem(a,r||"")}catch{}},[r,a]);function s(t,i=""){const n=k.current,o=r||"",l=n?n.selectionStart||0:o.length,c=n?n.selectionEnd||0:o.length,m=o.slice(l,c),y=t+m+i,_=o.slice(0,l)+y+o.slice(c);return b(_),requestAnimationFrame(()=>{try{n==null||n.focus(),n.selectionStart=n.selectionEnd=l+t.length+m.length}catch{}}),y}function I(t){var o;const i=(o=t.target.files)==null?void 0:o[0];if(!i)return;const n=new FileReader;n.onload=()=>{const c=`

![image](${String(n.result||"")})

`;s(c,""),p(c)},n.readAsDataURL(i)}function v(){const t=prompt("Video URL (YouTube/Vimeo/direct)");if(t){if(/youtu\.be\/.+|youtube\.com\/watch\?v=/.test(t)){const i=t.match(/(?:v=|youtu\.be\/)([A-Za-z0-9_-]{6,})/),n=i==null?void 0:i[1];if(n){s(`

<iframe width="560" height="315" src="https://www.youtube.com/embed/${n}" frameborder="0" allowfullscreen></iframe>

`);return}}s(`

${t}

`)}}function z(){s(`

> [poll]
> Question?
> - Option A
> - Option B
> - Option C

`)}function L(){s(`

- [ ] Задача 1
- [ ] Задача 2
- [x] Готово

`)}function D(){s(`

# Проект: Название

## Цели
- ...

## Технологии
- ...

## Прогресс
- [ ] Шаг 1
- [ ] Шаг 2

`)}function R(t){(t.metaKey||t.ctrlKey)&&(t.key.toLowerCase()==="b"?(t.preventDefault(),s("**","**")):t.key.toLowerCase()==="i"?(t.preventDefault(),s("_","_")):t.key.toLowerCase()==="k"?(t.preventDefault(),s("[text](",")")):t.key==="`"&&(t.preventDefault(),s("`","`")))}function S(t){t.preventDefault()}function A(t){var l;t.preventDefault();const i=(l=t.dataTransfer)==null?void 0:l.files;if(!i||i.length===0)return;const n=i[0];if(!n||!/^image\//.test(n.type))return;const o=new FileReader;o.onload=()=>{const m=`

![image](${String(o.result||"")})

`;s(m,""),p(m)},o.readAsDataURL(n)}function E(){if(!d)return;const t=r.indexOf(d);t>=0&&b(r.slice(0,t)+r.slice(t+d.length)),p(null)}const T=u.useMemo(()=>{try{return P.sanitize($.parse(r||""))}catch{return""}},[r]);return e.jsxs("div",{className:"w-full",onDragOver:S,onDrop:A,children:[e.jsxs("div",{className:"mb-2 flex flex-wrap items-center gap-2",children:[e.jsx("button",{type:"button",className:"btn",onClick:()=>s("**","**"),title:"Bold",children:e.jsx(O,{size:14})}),e.jsx("button",{type:"button",className:"btn",onClick:()=>s("_","_"),title:"Italic",children:e.jsx(V,{size:14})}),e.jsx("button",{type:"button",className:"btn",onClick:()=>s("[text](",")"),title:"Link",children:e.jsx(M,{size:14})}),e.jsx("button",{type:"button",className:"btn",onClick:()=>s("`","`"),title:"Inline code",children:e.jsx(g,{size:14})}),e.jsxs("button",{type:"button",className:"btn",onClick:()=>s("\n\n````\n","\n````\n"),title:"Code block",children:[e.jsx(g,{size:14})," ",e.jsx("span",{className:"ml-1",children:"{}"})]}),e.jsx("button",{type:"button",className:"btn",onClick:()=>s(`

- `),title:"List",children:e.jsx(Q,{size:14})}),e.jsx("button",{type:"button",className:"btn",onClick:()=>s(`

> `),title:"Quote",children:e.jsx(B,{size:14})}),e.jsxs("label",{className:"btn",title:"Insert image",children:[e.jsx(F,{size:14}),e.jsx("input",{type:"file",accept:"image/*",hidden:!0,onChange:I})]}),e.jsx("button",{type:"button",className:"btn",onClick:v,title:"Insert video",children:e.jsx(U,{size:14})}),e.jsx("button",{type:"button",className:"btn",onClick:z,title:"Insert poll",children:"Poll"}),e.jsx("button",{type:"button",className:"btn",onClick:L,title:"Task list",children:e.jsx(W,{size:14})}),C&&e.jsx("button",{type:"button",className:"btn",onClick:D,title:"Insert project template",children:"Insert Project Template"}),d&&e.jsxs("button",{type:"button",className:"btn",onClick:E,title:"Удалить вложение",children:[e.jsx(q,{size:14})," Clear"]}),e.jsxs("div",{className:"ml-auto flex items-center gap-1",children:[e.jsx("button",{type:"button",className:`tab ${f==="write"?"tab-active":""}`,onClick:()=>j("write"),children:"Write"}),e.jsxs("button",{type:"button",className:`tab ${f==="preview"?"tab-active":""}`,onClick:()=>j("preview"),children:[e.jsx(H,{size:14})," Preview"]})]})]}),f==="write"?e.jsx("textarea",{ref:k,className:"input min-h-[120px]",placeholder:w||"Write in Markdown...",value:r,onChange:t=>b(t.target.value),disabled:h,onKeyDown:R}):e.jsx("div",{className:"prose prose-invert max-w-none rounded-lg border p-3",style:{borderColor:"var(--border)",background:"var(--surface-2)"},dangerouslySetInnerHTML:{__html:T}}),x&&e.jsx("div",{className:"mt-2 flex justify-end",children:e.jsx("button",{type:"button",className:"btn btn-primary",onClick:()=>{const t=r.trim();if(t&&(x(t),a))try{localStorage.removeItem(a)}catch{}},disabled:h,children:N})})]})}export{X as M};
