import{r as e,o as r,c as o,a as t,b as n,w as s,F as i,d as u,e as l,f as a,g as c}from"./vendor.189db20a.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver((e=>{for(const o of e)if("childList"===o.type)for(const e of o.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&r(e)})).observe(document,{childList:!0,subtree:!0})}function r(e){if(e.ep)return;e.ep=!0;const r=function(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerpolicy&&(r.referrerPolicy=e.referrerpolicy),"use-credentials"===e.crossorigin?r.credentials="include":"anonymous"===e.crossorigin?r.credentials="omit":r.credentials="same-origin",r}(e);fetch(e.href,r)}}();var d=(e,r)=>{for(const[o,t]of r)e[o]=t;return e};const f={},p=u("Home"),m=u("About");var y=d(f,[["render",function(u,l){const a=e("router-link"),c=e("router-view");return r(),o(i,null,[t("nav",null,[n(a,{to:"/"},{default:s((()=>[p])),_:1}),n(a,{to:"/about"},{default:s((()=>[m])),_:1})]),n(c)],64)}]]);var v=d({},[["render",function(e,t){return r(),o("div",null,"home")}]]);const h={},b=t("div",null,"It's a site to the crypto world.",-1),g=t("div",null,"Enjoy.",-1);const w=[{path:"/",component:v},{path:"/about",component:d(h,[["render",function(e,t){return r(),o(i,null,[b,g],64)}]])}],L=l({history:a(),routes:w});c(y).use(L).mount("#app");
