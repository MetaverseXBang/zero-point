if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return r[e]||(s=new Promise((async s=>{if("document"in self){const r=document.createElement("script");r.src=e,document.head.appendChild(r),r.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!r[e])throw new Error(`Module ${e} didn’t register its module`);return r[e]}))},s=(s,r)=>{Promise.all(s.map(e)).then((e=>r(1===e.length?e[0]:e)))},r={require:Promise.resolve(s)};self.define=(s,i,t)=>{r[s]||(r[s]=Promise.resolve().then((()=>{let r={};const n={uri:location.origin+s.slice(1)};return Promise.all(i.map((s=>{switch(s){case"exports":return r;case"module":return n;default:return e(s)}}))).then((e=>{const s=t(...e);return r.default||(r.default=s),r}))})))}}define("./sw.js",["./workbox-afb9f189"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"assets/About.de73d81d.js",revision:"4deb394435f31d75d31a2f05dd04661a"},{url:"assets/Home.65c1f670.js",revision:"8a79b05510c43d4f398e550926878880"},{url:"assets/index.50425e5a.css",revision:"eb2a4cb0ea4440c6be84c425029c4984"},{url:"assets/index.e83780be.js",revision:"a66ebc90589e7f32323d189f4d6038d8"},{url:"assets/vendor.189db20a.js",revision:"8ba429a38f667a8c873abb9b8f689447"},{url:"index.html",revision:"031b879cb8849f432adb1b551f308d7f"},{url:"registerSW.js",revision:"78425e84310a799a9bd0b504695fee50"},{url:"manifest.webmanifest",revision:"785592e7e7c889492af377a00e1ac0e0"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));