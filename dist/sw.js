if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return r[e]||(s=new Promise((async s=>{if("document"in self){const r=document.createElement("script");r.src=e,document.head.appendChild(r),r.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!r[e])throw new Error(`Module ${e} didn’t register its module`);return r[e]}))},s=(s,r)=>{Promise.all(s.map(e)).then((e=>r(1===e.length?e[0]:e)))},r={require:Promise.resolve(s)};self.define=(s,i,t)=>{r[s]||(r[s]=Promise.resolve().then((()=>{let r={};const n={uri:location.origin+s.slice(1)};return Promise.all(i.map((s=>{switch(s){case"exports":return r;case"module":return n;default:return e(s)}}))).then((e=>{const s=t(...e);return r.default||(r.default=s),r}))})))}}define("./sw.js",["./workbox-afb9f189"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"assets/About.0481e555.js",revision:"feb61957a9308a45bf2f802242ae5197"},{url:"assets/Home.b05dbb57.css",revision:"dea8bd0ab3ccbebcbec4ff676468f0a3"},{url:"assets/Home.f1bf9d5d.js",revision:"9b03fb0d119652e46259adbbd79aa945"},{url:"assets/index.356c3d1b.css",revision:"b396a6553e5c07729509c8634b7a4dde"},{url:"assets/index.d162a001.js",revision:"3fd8219f19f6a32b49d953afd86ad343"},{url:"assets/vendor.39fb069f.js",revision:"ffde58ead602407c3c6e8c6620c8e624"},{url:"index.html",revision:"cc048c9add17ff199ee275570065fa00"},{url:"registerSW.js",revision:"78425e84310a799a9bd0b504695fee50"},{url:"manifest.webmanifest",revision:"785592e7e7c889492af377a00e1ac0e0"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
