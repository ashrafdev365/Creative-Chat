if(!self.define){let e,s={};const i=(i,t)=>(i=new URL(i+".js",t).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(t,n)=>{const a=e||("document"in self?document.currentScript.src:"")||location.href;if(s[a])return;let c={};const r=e=>i(e,a),o={module:{uri:a},exports:c,require:r};s[a]=Promise.all(t.map((e=>o[e]||r(e)))).then((e=>(n(...e),c)))}}define(["./workbox-1846d813"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next//static/media/ashraf.d625df64.svg",revision:"AyhGkqf_Is64Hitsl-5gI"},{url:"/_next//static/media/fb.ac498b8b.svg",revision:"AyhGkqf_Is64Hitsl-5gI"},{url:"/_next//static/media/github.419103f6.svg",revision:"AyhGkqf_Is64Hitsl-5gI"},{url:"/_next//static/media/google.0542877e.svg",revision:"AyhGkqf_Is64Hitsl-5gI"},{url:"/_next//static/media/twitter.2bd147c5.svg",revision:"AyhGkqf_Is64Hitsl-5gI"},{url:"/_next/static/AyhGkqf_Is64Hitsl-5gI/_buildManifest.js",revision:"AyhGkqf_Is64Hitsl-5gI"},{url:"/_next/static/AyhGkqf_Is64Hitsl-5gI/_middlewareManifest.js",revision:"AyhGkqf_Is64Hitsl-5gI"},{url:"/_next/static/AyhGkqf_Is64Hitsl-5gI/_ssgManifest.js",revision:"AyhGkqf_Is64Hitsl-5gI"},{url:"/_next/static/chunks/framework-91d7f78b5b4003c8.js",revision:"AyhGkqf_Is64Hitsl-5gI"},{url:"/_next/static/chunks/main-3a27fc9359964658.js",revision:"AyhGkqf_Is64Hitsl-5gI"},{url:"/_next/static/chunks/pages/_app-3211c4a9b958513e.js",revision:"AyhGkqf_Is64Hitsl-5gI"},{url:"/_next/static/chunks/pages/_error-2280fa386d040b66.js",revision:"AyhGkqf_Is64Hitsl-5gI"},{url:"/_next/static/chunks/pages/index-a04e5acca3c3429d.js",revision:"AyhGkqf_Is64Hitsl-5gI"},{url:"/_next/static/chunks/pages/user-1d600dfaa9bf17d6.js",revision:"AyhGkqf_Is64Hitsl-5gI"},{url:"/_next/static/chunks/pages/user/%5Bchat%5D-60658f0387f22ce8.js",revision:"AyhGkqf_Is64Hitsl-5gI"},{url:"/_next/static/chunks/polyfills-5cd94c89d3acac5f.js",revision:"AyhGkqf_Is64Hitsl-5gI"},{url:"/_next/static/chunks/webpack-49b6f2937c9ce9f4.js",revision:"AyhGkqf_Is64Hitsl-5gI"},{url:"/_next/static/css/f658c57b17b7c688.css",revision:"AyhGkqf_Is64Hitsl-5gI"},{url:"/ashraf.svg",revision:"8bff232eca9e94e2d5343fee0ac123b6"},{url:"/favicon.ico",revision:"aa2603f0e8facf50778357c425bafd25"},{url:"/fb.svg",revision:"e645ea4ef0089dbc222141dd0d921680"},{url:"/github.svg",revision:"764a68a037cf2a298e54c05b247842b2"},{url:"/google.svg",revision:"c61ab1e61bd33f59088431a813e49dbe"},{url:"/icon-192x192.png",revision:"ad75bf09a6aac8fabd0f7662b1f0ad55"},{url:"/icon-256x256.png",revision:"2cf0fe9b0791deaf089bae900a33d0b0"},{url:"/icon-384x384.png",revision:"c94f81f46a63a4edd65566eb4449bb00"},{url:"/icon-512x512.png",revision:"fb0ce0a48d25bf3d575fc6f6eb14b78c"},{url:"/manifest.json",revision:"a1499c9ec6893406f7b0ee190fc145d0"},{url:"/twitter.svg",revision:"49d5db56555a05daa851e5b570909383"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:i,state:t})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
