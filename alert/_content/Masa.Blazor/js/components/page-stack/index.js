import{b as t}from"../../chunks/tslib.es6.js";const e={},n={},o={};let s=0;function i(i){const r=s,c=n=>function(n,o){return t(this,void 0,void 0,(function*(){const t=e[n];if(null===t)return;const s=o.target.closest("a");if(!s)return;const i=s.getAttribute("href");if(!i)return;let r=s.getAttribute("data-page-stack-strategy");r=null===r?null:r.toLowerCase(),""!==r&&"true"!==r&&"push"!==r||(yield t.invokeMethodAsync("Push",i))}))}(r,n),u=()=>i.invokeMethodAsync("Popstate",window.location.pathname);return n[r]=c,o[r]=u,e[r]=i,document.addEventListener("click",c),window.addEventListener("popstate",u),s++}function r(t){const s=n[t];s&&document.removeEventListener("click",s);const i=o[t];i&&window.removeEventListener("popstate",i),e[t]&&e[t].dispose(),delete n[t],delete o[t],delete e[t]}export{i as attachListener,r as detachListener};
//# sourceMappingURL=index.js.map
