if(!self.define){let e,a={};const i=(i,n)=>(i=new URL(i+".js",n).href,a[i]||new Promise((a=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=a,document.head.appendChild(e)}else e=i,importScripts(i),a()})).then((()=>{let e=a[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,s)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(a[r])return;let o={};const c=e=>i(e,r),d={module:{uri:r},exports:o,require:c};a[r]=Promise.all(n.map((e=>d[e]||c(e)))).then((e=>(s(...e),o)))}}define(["./workbox-07a7b4f2"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/app-build-manifest.json",revision:"681860a1b5be222563aa3cd3cdfe9289"},{url:"/_next/static/chunks/150-90741def33bc7723.js",revision:"tpP3eTPqZmHJt7pY8Iirf"},{url:"/_next/static/chunks/212.a6d77743b0e2dd21.js",revision:"a6d77743b0e2dd21"},{url:"/_next/static/chunks/250-a7ef93b5bfd2fa5a.js",revision:"tpP3eTPqZmHJt7pY8Iirf"},{url:"/_next/static/chunks/69-1a4194d6fee1cf63.js",revision:"tpP3eTPqZmHJt7pY8Iirf"},{url:"/_next/static/chunks/749-8a3e09c91ef94b24.js",revision:"tpP3eTPqZmHJt7pY8Iirf"},{url:"/_next/static/chunks/app/(app)/(tools)/chinese-radicals/page-8eac54955b9bd31e.js",revision:"tpP3eTPqZmHJt7pY8Iirf"},{url:"/_next/static/chunks/app/(app)/page-96f252f70ead185c.js",revision:"tpP3eTPqZmHJt7pY8Iirf"},{url:"/_next/static/chunks/app/_not-found-6f402eea34f0ba1e.js",revision:"tpP3eTPqZmHJt7pY8Iirf"},{url:"/_next/static/chunks/app/layout-5682915edc68a6a3.js",revision:"tpP3eTPqZmHJt7pY8Iirf"},{url:"/_next/static/chunks/fd9d1056-86b26466c3c28796.js",revision:"tpP3eTPqZmHJt7pY8Iirf"},{url:"/_next/static/chunks/framework-aec844d2ccbe7592.js",revision:"tpP3eTPqZmHJt7pY8Iirf"},{url:"/_next/static/chunks/main-2d8f5d1b60ad4642.js",revision:"tpP3eTPqZmHJt7pY8Iirf"},{url:"/_next/static/chunks/main-app-15f126cf156c806e.js",revision:"tpP3eTPqZmHJt7pY8Iirf"},{url:"/_next/static/chunks/pages/_app-75f6107b0260711c.js",revision:"tpP3eTPqZmHJt7pY8Iirf"},{url:"/_next/static/chunks/pages/_error-9a890acb1e81c3fc.js",revision:"tpP3eTPqZmHJt7pY8Iirf"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-d0befc50ab8b5752.js",revision:"tpP3eTPqZmHJt7pY8Iirf"},{url:"/_next/static/css/f15f2a810c03bba6.css",revision:"f15f2a810c03bba6"},{url:"/_next/static/media/csol.a68c4ca4.webp",revision:"3cf2788ab3d8a4520e7a3711732a6a7d"},{url:"/_next/static/media/ec1a1eae803b668e-s.p.woff2",revision:"313812e61a1aacffa37a0e33e321d6b2"},{url:"/_next/static/media/f980ec13b5b5e554.p.woff2",revision:"c3066a48c8b1a6b3b2bab94f006e39d1"},{url:"/_next/static/media/hero.e8b4f174.webp",revision:"d73842bbd3f08f0b2a4f3335320d7521"},{url:"/_next/static/media/zhongwen.82fcea96.webp",revision:"e9072b0db52bec5d1af7fe639ac33609"},{url:"/_next/static/tpP3eTPqZmHJt7pY8Iirf/_buildManifest.js",revision:"e0a21c7d7f93d89dce16df0231dc76f2"},{url:"/_next/static/tpP3eTPqZmHJt7pY8Iirf/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/android/android-launchericon-144-144.png",revision:"f74bf01ba1ea34c8fc3b608a516dfb35"},{url:"/android/android-launchericon-192-192.png",revision:"dee7bf3096833dabc90b39f8e01da3e1"},{url:"/android/android-launchericon-48-48.png",revision:"c8c513226a02c415d780f9e100e377c9"},{url:"/android/android-launchericon-512-512.png",revision:"a65d9bcedeb2186f202be20a16a657a7"},{url:"/android/android-launchericon-72-72.png",revision:"32ec98c5e6f5c6b917fb496411cbe69a"},{url:"/android/android-launchericon-96-96.png",revision:"1285d067d334566d365a4aa65912b6e5"},{url:"/images/csol.webp",revision:"3cf2788ab3d8a4520e7a3711732a6a7d"},{url:"/images/google.webp",revision:"189330f6d7a15e767c827c510884f726"},{url:"/images/hero.webp",revision:"d73842bbd3f08f0b2a4f3335320d7521"},{url:"/images/logo.webp",revision:"088966df21493b9ac511fcb77edf2667"},{url:"/images/radicals.svg",revision:"386803d5001c32961b7498c709dc8bec"},{url:"/images/stair-h.svg",revision:"863fd37aec93c784449df9a7c38b7d96"},{url:"/images/stair.svg",revision:"31a2dcf7dc79d2445880f65629de62f6"},{url:"/images/zhongwen.webp",revision:"e9072b0db52bec5d1af7fe639ac33609"},{url:"/ios/100.png",revision:"e8dd7c0b6db7e3668fb36b1a2911e61f"},{url:"/ios/1024.png",revision:"9761dcf4992fd474933e99dbd500fb02"},{url:"/ios/114.png",revision:"310a03adcac2fad090be6ae1ab3c700e"},{url:"/ios/120.png",revision:"1b601c6e01d92d5a8ecc21fdc7c30373"},{url:"/ios/128.png",revision:"d55164833b906b3b6186fa616e6c8c56"},{url:"/ios/144.png",revision:"f74bf01ba1ea34c8fc3b608a516dfb35"},{url:"/ios/152.png",revision:"7bf1b61bbad60c37fb4efb3dac906ef3"},{url:"/ios/16.png",revision:"919f6b7a503a2e51b87aa22ea0a46170"},{url:"/ios/167.png",revision:"72c2a3e9f1a367c373778926486fd821"},{url:"/ios/180.png",revision:"83033b80093eb23e92033f1bea2ddd40"},{url:"/ios/192.png",revision:"dee7bf3096833dabc90b39f8e01da3e1"},{url:"/ios/20.png",revision:"31bfed79768f92be595da4657465fcfb"},{url:"/ios/256.png",revision:"f39231fb504325cfb9a7314fb1f438fb"},{url:"/ios/29.png",revision:"af0b0da39161a316b4ae5f03cb68a25a"},{url:"/ios/32.png",revision:"c4d29bb40eea0bb4ce45914e22bf58d3"},{url:"/ios/40.png",revision:"a483edbb37e1201043f08f93daa13105"},{url:"/ios/50.png",revision:"1de88e592005aa9050bbd8b3627090fe"},{url:"/ios/512.png",revision:"a65d9bcedeb2186f202be20a16a657a7"},{url:"/ios/57.png",revision:"3512a14aca7cbfd14364f53962686294"},{url:"/ios/58.png",revision:"f97f3f7da9f4a04a306fa5a259c6931a"},{url:"/ios/60.png",revision:"8f8bd2ef00864eb7a453b8d9013f6e7d"},{url:"/ios/64.png",revision:"2e6d576f89712682d43d294094258ea4"},{url:"/ios/72.png",revision:"32ec98c5e6f5c6b917fb496411cbe69a"},{url:"/ios/76.png",revision:"c7be0b68e1c0f0264789e9ac52807472"},{url:"/ios/80.png",revision:"cca0135349d81086f99712cbc32104be"},{url:"/ios/87.png",revision:"3cc27129ca14a27b65a4c941519ef5e1"},{url:"/manifest.json",revision:"9b88a53e78ec522d77dbd14d151ac008"},{url:"/next.svg",revision:"8e061864f388b47f33a1c3780831193e"},{url:"/vercel.svg",revision:"61c6b19abff40ea7acd577be818f3976"},{url:"/windows11/LargeTile.scale-100.png",revision:"1d1a99f510f578a35a5e78ba0bbb8d29"},{url:"/windows11/LargeTile.scale-125.png",revision:"3938d4184a9920e5224535d6d8e8df29"},{url:"/windows11/LargeTile.scale-150.png",revision:"cbcb35fcbd12a37e9ee4c504a78df947"},{url:"/windows11/LargeTile.scale-200.png",revision:"c4a034a28797d4a777ed4bda3a90a3cf"},{url:"/windows11/LargeTile.scale-400.png",revision:"a41014b91f5feb6824a4b48cd017cf1e"},{url:"/windows11/SmallTile.scale-100.png",revision:"1fd51ffce0596488719281d953c56c05"},{url:"/windows11/SmallTile.scale-125.png",revision:"c2b11d17c6daf9a52da143078b7b2615"},{url:"/windows11/SmallTile.scale-150.png",revision:"f9df194994fbb5c79646ec0afb4f0673"},{url:"/windows11/SmallTile.scale-200.png",revision:"1a5c8e14f22a438d7d75052ad37b719b"},{url:"/windows11/SmallTile.scale-400.png",revision:"e72415f2b603333655bd827c19c7e44d"},{url:"/windows11/SplashScreen.scale-100.png",revision:"72a5383ef594e075d6fb44316f4da8c0"},{url:"/windows11/SplashScreen.scale-125.png",revision:"7c5958b48dbf9472faf19e64d50819d7"},{url:"/windows11/SplashScreen.scale-150.png",revision:"66595ab65f8c5c54b7ccdf5a3aee29f5"},{url:"/windows11/SplashScreen.scale-200.png",revision:"6e2f494804e9148a3e448494529c8a1e"},{url:"/windows11/SplashScreen.scale-400.png",revision:"6a397955f94d3cbbf7135407045bf9ca"},{url:"/windows11/Square150x150Logo.scale-100.png",revision:"7bc6c839415f9500ff344eb110644a61"},{url:"/windows11/Square150x150Logo.scale-125.png",revision:"98edce3e11ef8de95e4cb70f792f6a37"},{url:"/windows11/Square150x150Logo.scale-150.png",revision:"4fdf1aeebabdaccfb3804a26acbc6bda"},{url:"/windows11/Square150x150Logo.scale-200.png",revision:"7b0f39c45ac5dbdec942ff70b07acc9a"},{url:"/windows11/Square150x150Logo.scale-400.png",revision:"8e7fbddcd336f2aac04622fd950bf68a"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-16.png",revision:"ae67cd0378696166ccfe3737c5d8e16a"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-20.png",revision:"4dbbc575013c45aeaab7e909434a1236"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-24.png",revision:"583e0392d8266d0c37ed945028dd73b4"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-256.png",revision:"ee3b955c9bb7ed64e7e36cf74a88983a"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-30.png",revision:"866b37eae4a804555aae1b4f41df6ec5"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-32.png",revision:"ed26b8c5dfc9da278468fe859237c7b3"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-36.png",revision:"8ec617469a170dfd233ce0a68ba0a60b"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-40.png",revision:"c3463df31070040fd9e4c23b50556056"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-44.png",revision:"efc35487ebd4714d4850ab23b976c5e4"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-48.png",revision:"3c47972f60cfd506f42671052aca4e5d"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-60.png",revision:"c5449db97551742a0891a915a777d16e"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-64.png",revision:"816a57bce2accfec041baea57b1bd8da"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-72.png",revision:"cf58908e523d95d63e629a0a18688229"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-80.png",revision:"bc879e7627fdb5218e7ccb5ff73aae66"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-96.png",revision:"2ddab823c02f7bfdaf59b7c407c6bb20"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-16.png",revision:"ae67cd0378696166ccfe3737c5d8e16a"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-20.png",revision:"4dbbc575013c45aeaab7e909434a1236"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-24.png",revision:"583e0392d8266d0c37ed945028dd73b4"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-256.png",revision:"ee3b955c9bb7ed64e7e36cf74a88983a"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-30.png",revision:"866b37eae4a804555aae1b4f41df6ec5"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-32.png",revision:"ed26b8c5dfc9da278468fe859237c7b3"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-36.png",revision:"8ec617469a170dfd233ce0a68ba0a60b"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-40.png",revision:"c3463df31070040fd9e4c23b50556056"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-44.png",revision:"efc35487ebd4714d4850ab23b976c5e4"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-48.png",revision:"3c47972f60cfd506f42671052aca4e5d"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-60.png",revision:"c5449db97551742a0891a915a777d16e"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-64.png",revision:"816a57bce2accfec041baea57b1bd8da"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-72.png",revision:"cf58908e523d95d63e629a0a18688229"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-80.png",revision:"bc879e7627fdb5218e7ccb5ff73aae66"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-96.png",revision:"2ddab823c02f7bfdaf59b7c407c6bb20"},{url:"/windows11/Square44x44Logo.scale-100.png",revision:"efc35487ebd4714d4850ab23b976c5e4"},{url:"/windows11/Square44x44Logo.scale-125.png",revision:"fa64757daa68a560b66f6e6827466f5f"},{url:"/windows11/Square44x44Logo.scale-150.png",revision:"6377903b034154b881349908b61eecc3"},{url:"/windows11/Square44x44Logo.scale-200.png",revision:"62c294f82bb911cb049e606561546772"},{url:"/windows11/Square44x44Logo.scale-400.png",revision:"01427f305342259f045539e960628e38"},{url:"/windows11/Square44x44Logo.targetsize-16.png",revision:"ae67cd0378696166ccfe3737c5d8e16a"},{url:"/windows11/Square44x44Logo.targetsize-20.png",revision:"4dbbc575013c45aeaab7e909434a1236"},{url:"/windows11/Square44x44Logo.targetsize-24.png",revision:"583e0392d8266d0c37ed945028dd73b4"},{url:"/windows11/Square44x44Logo.targetsize-256.png",revision:"ee3b955c9bb7ed64e7e36cf74a88983a"},{url:"/windows11/Square44x44Logo.targetsize-30.png",revision:"866b37eae4a804555aae1b4f41df6ec5"},{url:"/windows11/Square44x44Logo.targetsize-32.png",revision:"ed26b8c5dfc9da278468fe859237c7b3"},{url:"/windows11/Square44x44Logo.targetsize-36.png",revision:"8ec617469a170dfd233ce0a68ba0a60b"},{url:"/windows11/Square44x44Logo.targetsize-40.png",revision:"c3463df31070040fd9e4c23b50556056"},{url:"/windows11/Square44x44Logo.targetsize-44.png",revision:"efc35487ebd4714d4850ab23b976c5e4"},{url:"/windows11/Square44x44Logo.targetsize-48.png",revision:"3c47972f60cfd506f42671052aca4e5d"},{url:"/windows11/Square44x44Logo.targetsize-60.png",revision:"c5449db97551742a0891a915a777d16e"},{url:"/windows11/Square44x44Logo.targetsize-64.png",revision:"816a57bce2accfec041baea57b1bd8da"},{url:"/windows11/Square44x44Logo.targetsize-72.png",revision:"cf58908e523d95d63e629a0a18688229"},{url:"/windows11/Square44x44Logo.targetsize-80.png",revision:"bc879e7627fdb5218e7ccb5ff73aae66"},{url:"/windows11/Square44x44Logo.targetsize-96.png",revision:"2ddab823c02f7bfdaf59b7c407c6bb20"},{url:"/windows11/StoreLogo.scale-100.png",revision:"1de88e592005aa9050bbd8b3627090fe"},{url:"/windows11/StoreLogo.scale-125.png",revision:"0b125a184fc0c55e0a7b27a2692dec40"},{url:"/windows11/StoreLogo.scale-150.png",revision:"1108e177f6dcb983948b005fd8f30afa"},{url:"/windows11/StoreLogo.scale-200.png",revision:"e8dd7c0b6db7e3668fb36b1a2911e61f"},{url:"/windows11/StoreLogo.scale-400.png",revision:"e80dde68b54a0821e06047bc163c863c"},{url:"/windows11/Wide310x150Logo.scale-100.png",revision:"94d47c3a5e6f3aa2e97a848a89b5c6b7"},{url:"/windows11/Wide310x150Logo.scale-125.png",revision:"845653743ec8f500f50de58a2470e056"},{url:"/windows11/Wide310x150Logo.scale-150.png",revision:"edda0ce0b5583b8a16dee76ff955c84c"},{url:"/windows11/Wide310x150Logo.scale-200.png",revision:"72a5383ef594e075d6fb44316f4da8c0"},{url:"/windows11/Wide310x150Logo.scale-400.png",revision:"6e2f494804e9148a3e448494529c8a1e"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:a,event:i,state:n})=>a&&"opaqueredirect"===a.type?new Response(a.body,{status:200,statusText:"OK",headers:a.headers}):a}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const a=e.pathname;return!a.startsWith("/api/auth/")&&!!a.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
