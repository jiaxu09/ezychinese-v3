if(!self.define){let e,s={};const a=(a,i)=>(a=new URL(a+".js",i).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(i,n)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(s[o])return;let r={};const c=e=>a(e,o),t={module:{uri:o},exports:r,require:c};s[o]=Promise.all(i.map((e=>t[e]||c(e)))).then((e=>(n(...e),r)))}}define(["./workbox-07a7b4f2"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/app-build-manifest.json",revision:"680718ca07daad7322e75a6449859e42"},{url:"/_next/static/R9TmmJ13RxJwUBjgNHesK/_buildManifest.js",revision:"2b54d7db375d2b4c0e6af318090bebea"},{url:"/_next/static/R9TmmJ13RxJwUBjgNHesK/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/1412-a64b2a0166b9f2bb.js",revision:"R9TmmJ13RxJwUBjgNHesK"},{url:"/_next/static/chunks/1690-38fbd43ace515c82.js",revision:"R9TmmJ13RxJwUBjgNHesK"},{url:"/_next/static/chunks/1749-579df48e0d220f68.js",revision:"R9TmmJ13RxJwUBjgNHesK"},{url:"/_next/static/chunks/2060-6ae30fa19b5c0ca5.js",revision:"R9TmmJ13RxJwUBjgNHesK"},{url:"/_next/static/chunks/2150-bbb6eac2e463ffac.js",revision:"R9TmmJ13RxJwUBjgNHesK"},{url:"/_next/static/chunks/3268-61b5e689d0bfd031.js",revision:"R9TmmJ13RxJwUBjgNHesK"},{url:"/_next/static/chunks/3621-96c26ca13354b005.js",revision:"R9TmmJ13RxJwUBjgNHesK"},{url:"/_next/static/chunks/3774-0eb832d735b96661.js",revision:"R9TmmJ13RxJwUBjgNHesK"},{url:"/_next/static/chunks/4563-55214a5fbd244efe.js",revision:"R9TmmJ13RxJwUBjgNHesK"},{url:"/_next/static/chunks/4833-be809887e233845e.js",revision:"R9TmmJ13RxJwUBjgNHesK"},{url:"/_next/static/chunks/5250-e3fea0a1b4871a36.js",revision:"R9TmmJ13RxJwUBjgNHesK"},{url:"/_next/static/chunks/5610-f6c37b1e8180e236.js",revision:"R9TmmJ13RxJwUBjgNHesK"},{url:"/_next/static/chunks/577-b15bd2355fda0e8b.js",revision:"R9TmmJ13RxJwUBjgNHesK"},{url:"/_next/static/chunks/5853-16167af43aeb39a3.js",revision:"R9TmmJ13RxJwUBjgNHesK"},{url:"/_next/static/chunks/616-a172fbaa9922f805.js",revision:"R9TmmJ13RxJwUBjgNHesK"},{url:"/_next/static/chunks/6594-36b48a386875b226.js",revision:"R9TmmJ13RxJwUBjgNHesK"},{url:"/_next/static/chunks/8069-86a9f4f4734fed3b.js",revision:"R9TmmJ13RxJwUBjgNHesK"},{url:"/_next/static/chunks/8212.302361b2546aebf4.js",revision:"302361b2546aebf4"},{url:"/_next/static/chunks/825-c11aaf889e34f5b2.js",revision:"R9TmmJ13RxJwUBjgNHesK"},{url:"/_next/static/chunks/8758-5898cb91c2217997.js",revision:"R9TmmJ13RxJwUBjgNHesK"},{url:"/_next/static/chunks/9023-d1f5499bbb7e9250.js",revision:"R9TmmJ13RxJwUBjgNHesK"},{url:"/_next/static/chunks/9462-3f654c158c9d0043.js",revision:"R9TmmJ13RxJwUBjgNHesK"},{url:"/_next/static/chunks/app/(books)/csol/%5BbookId%5D/%5BchapterId%5D/layout-611b866ef331aeb9.js",revision:"R9TmmJ13RxJwUBjgNHesK"},{url:"/_next/static/chunks/app/(books)/csol/%5BbookId%5D/%5BchapterId%5D/loading-43206c4a47ae5b8d.js",revision:"R9TmmJ13RxJwUBjgNHesK"},{url:"/_next/static/chunks/app/(books)/csol/%5BbookId%5D/%5BchapterId%5D/not-found-1c8c8766c860fa64.js",revision:"R9TmmJ13RxJwUBjgNHesK"},{url:"/_next/static/chunks/app/(books)/csol/%5BbookId%5D/%5BchapterId%5D/reading/page-0a349e64a745a559.js",revision:"R9TmmJ13RxJwUBjgNHesK"},{url:"/_next/static/chunks/app/(books)/csol/%5BbookId%5D/%5BchapterId%5D/singing/page-639d9af4d7437ba2.js",revision:"R9TmmJ13RxJwUBjgNHesK"},{url:"/_next/static/chunks/app/(books)/csol/%5BbookId%5D/%5BchapterId%5D/template-03e016cf95279084.js",revision:"R9TmmJ13RxJwUBjgNHesK"},{url:"/_next/static/chunks/app/(books)/csol/%5BbookId%5D/%5BchapterId%5D/words/page-6d1a1b98794a77ec.js",revision:"R9TmmJ13RxJwUBjgNHesK"},{url:"/_next/static/chunks/app/(books)/csol/%5BbookId%5D/%5BchapterId%5D/writing/page-e5e10ce7b12baf9b.js",revision:"R9TmmJ13RxJwUBjgNHesK"},{url:"/_next/static/chunks/app/(books)/csol/%5BbookId%5D/page-5f659fa00fe67566.js",revision:"R9TmmJ13RxJwUBjgNHesK"},{url:"/_next/static/chunks/app/(books)/csol/page-eeaf1211f66a310b.js",revision:"R9TmmJ13RxJwUBjgNHesK"},{url:"/_next/static/chunks/app/(books)/zhongwen/%5BbookId%5D/%5BchapterId%5D/layout-c69e024f0f825073.js",revision:"R9TmmJ13RxJwUBjgNHesK"},{url:"/_next/static/chunks/app/(books)/zhongwen/%5BbookId%5D/%5BchapterId%5D/literacy/page-13b4c52cec129740.js",revision:"R9TmmJ13RxJwUBjgNHesK"},{url:"/_next/static/chunks/app/(books)/zhongwen/%5BbookId%5D/%5BchapterId%5D/loading-03e83ddf330096cc.js",revision:"R9TmmJ13RxJwUBjgNHesK"},{url:"/_next/static/chunks/app/(books)/zhongwen/%5BbookId%5D/%5BchapterId%5D/match/page-78781cbf83106bf4.js",revision:"R9TmmJ13RxJwUBjgNHesK"},{url:"/_next/static/chunks/app/(books)/zhongwen/%5BbookId%5D/%5BchapterId%5D/not-found-db94153b936a972d.js",revision:"R9TmmJ13RxJwUBjgNHesK"},{url:"/_next/static/chunks/app/(books)/zhongwen/%5BbookId%5D/%5BchapterId%5D/quiz/new-quiz/page-e17ebb5dfc5d7beb.js",revision:"R9TmmJ13RxJwUBjgNHesK"},{url:"/_next/static/chunks/app/(books)/zhongwen/%5BbookId%5D/%5BchapterId%5D/quiz/page-6f0900b18cdd2361.js",revision:"R9TmmJ13RxJwUBjgNHesK"},{url:"/_next/static/chunks/app/(books)/zhongwen/%5BbookId%5D/%5BchapterId%5D/template-1fc3f189ebfb4a45.js",revision:"R9TmmJ13RxJwUBjgNHesK"},{url:"/_next/static/chunks/app/(books)/zhongwen/%5BbookId%5D/%5BchapterId%5D/video/page-c99f0c161d3e291e.js",revision:"R9TmmJ13RxJwUBjgNHesK"},{url:"/_next/static/chunks/app/(books)/zhongwen/%5BbookId%5D/%5BchapterId%5D/word/page-bfa9979dabaeb8cb.js",revision:"R9TmmJ13RxJwUBjgNHesK"},{url:"/_next/static/chunks/app/(books)/zhongwen/%5BbookId%5D/page-f71612be1b3f6d4b.js",revision:"R9TmmJ13RxJwUBjgNHesK"},{url:"/_next/static/chunks/app/(books)/zhongwen/page-f9d1b2f25a9c1771.js",revision:"R9TmmJ13RxJwUBjgNHesK"},{url:"/_next/static/chunks/app/(tools)/chinese-idioms/loading-cf4ae7ee85691fbd.js",revision:"R9TmmJ13RxJwUBjgNHesK"},{url:"/_next/static/chunks/app/(tools)/chinese-idioms/not-found-38fbeff0aa562fcf.js",revision:"R9TmmJ13RxJwUBjgNHesK"},{url:"/_next/static/chunks/app/(tools)/chinese-idioms/page-d9995751b5db4532.js",revision:"R9TmmJ13RxJwUBjgNHesK"},{url:"/_next/static/chunks/app/(tools)/chinese-radicals/loading-cbc3be47b3bb28d6.js",revision:"R9TmmJ13RxJwUBjgNHesK"},{url:"/_next/static/chunks/app/(tools)/chinese-radicals/not-found-6a8d054dad3f66c6.js",revision:"R9TmmJ13RxJwUBjgNHesK"},{url:"/_next/static/chunks/app/(tools)/chinese-radicals/page-9aa0d01a392ac304.js",revision:"R9TmmJ13RxJwUBjgNHesK"},{url:"/_next/static/chunks/app/(tools)/pinyin/finals/page-45fdd96d583e305f.js",revision:"R9TmmJ13RxJwUBjgNHesK"},{url:"/_next/static/chunks/app/(tools)/pinyin/initials/page-8a225820927ecac5.js",revision:"R9TmmJ13RxJwUBjgNHesK"},{url:"/_next/static/chunks/app/(tools)/pinyin/layout-953dd758aeb92240.js",revision:"R9TmmJ13RxJwUBjgNHesK"},{url:"/_next/static/chunks/app/(tools)/pinyin/loading-8afd773b5858befa.js",revision:"R9TmmJ13RxJwUBjgNHesK"},{url:"/_next/static/chunks/app/(tools)/pinyin/not-found-d9150e32426cf0f0.js",revision:"R9TmmJ13RxJwUBjgNHesK"},{url:"/_next/static/chunks/app/(tools)/pinyin/whole-syllables/page-a587a3837201e2c6.js",revision:"R9TmmJ13RxJwUBjgNHesK"},{url:"/_next/static/chunks/app/(videos)/hikaru-no-go/%5Bepisode%5D/page-340abaa0f162e8b0.js",revision:"R9TmmJ13RxJwUBjgNHesK"},{url:"/_next/static/chunks/app/(videos)/hikaru-no-go/loading-d2126a8d67b197c6.js",revision:"R9TmmJ13RxJwUBjgNHesK"},{url:"/_next/static/chunks/app/(videos)/hikaru-no-go/page-fd51170b6b3d18f2.js",revision:"R9TmmJ13RxJwUBjgNHesK"},{url:"/_next/static/chunks/app/error-c619200cb2b6a6f8.js",revision:"R9TmmJ13RxJwUBjgNHesK"},{url:"/_next/static/chunks/app/layout-9358cc9c2c298008.js",revision:"R9TmmJ13RxJwUBjgNHesK"},{url:"/_next/static/chunks/app/loading-3f8bd10333bec7b8.js",revision:"R9TmmJ13RxJwUBjgNHesK"},{url:"/_next/static/chunks/app/not-found-fa67cbd84d5494f1.js",revision:"R9TmmJ13RxJwUBjgNHesK"},{url:"/_next/static/chunks/app/page-0b294ee62bf851e4.js",revision:"R9TmmJ13RxJwUBjgNHesK"},{url:"/_next/static/chunks/app/template-fe81e1d2ae9020f6.js",revision:"R9TmmJ13RxJwUBjgNHesK"},{url:"/_next/static/chunks/fd9d1056-d8a1595ad3b9ef5d.js",revision:"R9TmmJ13RxJwUBjgNHesK"},{url:"/_next/static/chunks/framework-08aa667e5202eed8.js",revision:"R9TmmJ13RxJwUBjgNHesK"},{url:"/_next/static/chunks/main-861791c3fdae3727.js",revision:"R9TmmJ13RxJwUBjgNHesK"},{url:"/_next/static/chunks/main-app-20ebccd553babf8e.js",revision:"R9TmmJ13RxJwUBjgNHesK"},{url:"/_next/static/chunks/pages/_app-57bdff7978360b1c.js",revision:"R9TmmJ13RxJwUBjgNHesK"},{url:"/_next/static/chunks/pages/_error-29037c284dd0eec6.js",revision:"R9TmmJ13RxJwUBjgNHesK"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-4f670217a244e4fa.js",revision:"R9TmmJ13RxJwUBjgNHesK"},{url:"/_next/static/css/6538c0264791d86e.css",revision:"6538c0264791d86e"},{url:"/_next/static/media/ec1a1eae803b668e-s.p.woff2",revision:"313812e61a1aacffa37a0e33e321d6b2"},{url:"/_next/static/media/f980ec13b5b5e554.p.woff2",revision:"c3066a48c8b1a6b3b2bab94f006e39d1"},{url:"/android/android-launchericon-144-144.png",revision:"97a2af2d93cf6b6e2c80b5401722fcb3"},{url:"/android/android-launchericon-192-192.png",revision:"3ec1cb9c49a5c12352021131dded9d11"},{url:"/android/android-launchericon-48-48.png",revision:"0c4e68eb52e80f5394782dfcf934085a"},{url:"/android/android-launchericon-512-512.png",revision:"561d041074f7d0edd1ba1b5b87439563"},{url:"/android/android-launchericon-72-72.png",revision:"8bb948b0d9ed1584dc5d3dff47797e75"},{url:"/android/android-launchericon-96-96.png",revision:"b96fb0d5d2ade0c18dea32247046f1fa"},{url:"/images/find_difference.webp",revision:"c06ef6bb4378b82a2d1bf11aa73ce1f8"},{url:"/images/form_phrases.webp",revision:"8206baaaad1ae15caa3f36bf6f3e9a5e"},{url:"/images/loading.svg",revision:"03f7bb11ad1960b89b69efe9d7129655"},{url:"/ios/100.png",revision:"98b348988f167936734095a47d8fbf26"},{url:"/ios/1024.png",revision:"c5c16b488de79bab03c75f575067df89"},{url:"/ios/114.png",revision:"324035e20675a33efaa639ecded6d3b3"},{url:"/ios/120.png",revision:"b7160d556401313eca0953c212184d48"},{url:"/ios/128.png",revision:"4497da64e944560f210943126870594b"},{url:"/ios/144.png",revision:"97a2af2d93cf6b6e2c80b5401722fcb3"},{url:"/ios/152.png",revision:"a1c180085cb47026e476448fb220b55e"},{url:"/ios/16.png",revision:"d3036f288682e4d87508c09071c99866"},{url:"/ios/167.png",revision:"74689b625c69449593f53bcf960a4d21"},{url:"/ios/180.png",revision:"7d891b11e4f69379da65aa58b2975694"},{url:"/ios/192.png",revision:"3ec1cb9c49a5c12352021131dded9d11"},{url:"/ios/20.png",revision:"497e50fe5869eb11f3f2c04f886b882d"},{url:"/ios/256.png",revision:"eeb23f19ffe5d6234872351dec0e1740"},{url:"/ios/29.png",revision:"a530cd9128e26a8269a527e84ae651ca"},{url:"/ios/32.png",revision:"3076d0f1197fc2ccbf58dd103e7526e7"},{url:"/ios/40.png",revision:"3826d1dc4fed430d315f7a56cfb48d6a"},{url:"/ios/50.png",revision:"5c04be75f123efacf2a9c6ffe4d610e4"},{url:"/ios/512.png",revision:"561d041074f7d0edd1ba1b5b87439563"},{url:"/ios/57.png",revision:"45da920b8bdf03f0237634be97d5be91"},{url:"/ios/58.png",revision:"34a4c6f74e3e34d94d79b4841c598955"},{url:"/ios/60.png",revision:"a0bafb14845918b3819f4cbf2a3fc893"},{url:"/ios/64.png",revision:"3ba62e79a5d431985792c54106685920"},{url:"/ios/72.png",revision:"8bb948b0d9ed1584dc5d3dff47797e75"},{url:"/ios/76.png",revision:"59e2dde31dae330520885b40bca686a4"},{url:"/ios/80.png",revision:"a3ac0af1c412e6a8a9ff800c72aef6e0"},{url:"/ios/87.png",revision:"6216cf612f89b116b3dcc6e3e6c89c9c"},{url:"/manifest.json",revision:"26eef9231be6bfa54fabd2c452808650"},{url:"/next.svg",revision:"8e061864f388b47f33a1c3780831193e"},{url:"/vercel.svg",revision:"61c6b19abff40ea7acd577be818f3976"},{url:"/windows11/LargeTile.scale-100.png",revision:"ec011e196177145ffe6164e584a79c0c"},{url:"/windows11/LargeTile.scale-125.png",revision:"77fef95fa79564a914b0454ca22c7e76"},{url:"/windows11/LargeTile.scale-150.png",revision:"6864cc0421aaeb247308032b3d9a64f5"},{url:"/windows11/LargeTile.scale-200.png",revision:"a24059dccb7d1125f4b9b2a876f1df70"},{url:"/windows11/LargeTile.scale-400.png",revision:"e3da6ead57b7269de227bc41deb9b561"},{url:"/windows11/SmallTile.scale-100.png",revision:"d8e89cc302ec7d45ecff940c3e41d07e"},{url:"/windows11/SmallTile.scale-125.png",revision:"00bab15147d07c31badde2186dc07af1"},{url:"/windows11/SmallTile.scale-150.png",revision:"1665b9f99465d40139ff49be092ce418"},{url:"/windows11/SmallTile.scale-200.png",revision:"32b4114e9213bcab099775f1d172a71e"},{url:"/windows11/SmallTile.scale-400.png",revision:"74acdd56fb857aa796e1cce37d75a087"},{url:"/windows11/SplashScreen.scale-100.png",revision:"33acaa2eeef76d6e116d03cfba615286"},{url:"/windows11/SplashScreen.scale-125.png",revision:"5fabdad09950b8e264d38fdedd744560"},{url:"/windows11/SplashScreen.scale-150.png",revision:"e067816959bd89824ea6acd812c3f36e"},{url:"/windows11/SplashScreen.scale-200.png",revision:"15370cfa939d4b502b3d98a3397c460b"},{url:"/windows11/SplashScreen.scale-400.png",revision:"ae35a940fd92d7f84e3f91674464e321"},{url:"/windows11/Square150x150Logo.scale-100.png",revision:"b0839790003b70fd99c985cb43006e57"},{url:"/windows11/Square150x150Logo.scale-125.png",revision:"56ac6a95fe483a039b76e3928599d812"},{url:"/windows11/Square150x150Logo.scale-150.png",revision:"b27270d74ab4d88d6a7477f5ea72a912"},{url:"/windows11/Square150x150Logo.scale-200.png",revision:"3a1edaccc4aaa56948098e1a72d7b48f"},{url:"/windows11/Square150x150Logo.scale-400.png",revision:"2dc2a2eac52d27eeda1fb3f4ad4b693f"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-16.png",revision:"dbc90150e73724d976f86be0488ba868"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-20.png",revision:"8052204b1ee070eba430b870d2e79197"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-24.png",revision:"897558404a9980880afcca758ed08bb1"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-256.png",revision:"5904a02bac7f76ce6dd228e7dfc9446b"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-30.png",revision:"28f64113084a86d60fc0da094c6feb3e"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-32.png",revision:"21dfda5300e60a6945b450c0adf477aa"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-36.png",revision:"173f7a803af5712c50f2035145976141"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-40.png",revision:"91db1a851d33411b140488034e676ada"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-44.png",revision:"ccc93b30e1a26c2c354d1b3d591ac0a4"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-48.png",revision:"8c26e0175d7b2e23fccd5cb0dc1272c3"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-60.png",revision:"2151c54bec93c6d27689a3c4bcaf322e"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-64.png",revision:"89fef1d31d359ea53b0c6fd9922cbeac"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-72.png",revision:"4eb433383becce912c6e6f0444c9b1e2"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-80.png",revision:"566e427607868d0d185edd1cb5cf90a2"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-96.png",revision:"f3bd696e26f7c0886031d102e8302eef"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-16.png",revision:"dbc90150e73724d976f86be0488ba868"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-20.png",revision:"8052204b1ee070eba430b870d2e79197"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-24.png",revision:"897558404a9980880afcca758ed08bb1"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-256.png",revision:"5904a02bac7f76ce6dd228e7dfc9446b"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-30.png",revision:"28f64113084a86d60fc0da094c6feb3e"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-32.png",revision:"21dfda5300e60a6945b450c0adf477aa"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-36.png",revision:"173f7a803af5712c50f2035145976141"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-40.png",revision:"91db1a851d33411b140488034e676ada"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-44.png",revision:"ccc93b30e1a26c2c354d1b3d591ac0a4"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-48.png",revision:"8c26e0175d7b2e23fccd5cb0dc1272c3"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-60.png",revision:"2151c54bec93c6d27689a3c4bcaf322e"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-64.png",revision:"89fef1d31d359ea53b0c6fd9922cbeac"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-72.png",revision:"4eb433383becce912c6e6f0444c9b1e2"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-80.png",revision:"566e427607868d0d185edd1cb5cf90a2"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-96.png",revision:"f3bd696e26f7c0886031d102e8302eef"},{url:"/windows11/Square44x44Logo.scale-100.png",revision:"ccc93b30e1a26c2c354d1b3d591ac0a4"},{url:"/windows11/Square44x44Logo.scale-125.png",revision:"d6a7f808d44e31c99a214533cdac2d33"},{url:"/windows11/Square44x44Logo.scale-150.png",revision:"615b7ca9427b2685108d54dfd76dde6f"},{url:"/windows11/Square44x44Logo.scale-200.png",revision:"e0e47be7796d3a9af17318f282c38771"},{url:"/windows11/Square44x44Logo.scale-400.png",revision:"6ebaaf095c228ccb74427885fed60b8c"},{url:"/windows11/Square44x44Logo.targetsize-16.png",revision:"dbc90150e73724d976f86be0488ba868"},{url:"/windows11/Square44x44Logo.targetsize-20.png",revision:"8052204b1ee070eba430b870d2e79197"},{url:"/windows11/Square44x44Logo.targetsize-24.png",revision:"897558404a9980880afcca758ed08bb1"},{url:"/windows11/Square44x44Logo.targetsize-256.png",revision:"5904a02bac7f76ce6dd228e7dfc9446b"},{url:"/windows11/Square44x44Logo.targetsize-30.png",revision:"28f64113084a86d60fc0da094c6feb3e"},{url:"/windows11/Square44x44Logo.targetsize-32.png",revision:"21dfda5300e60a6945b450c0adf477aa"},{url:"/windows11/Square44x44Logo.targetsize-36.png",revision:"173f7a803af5712c50f2035145976141"},{url:"/windows11/Square44x44Logo.targetsize-40.png",revision:"91db1a851d33411b140488034e676ada"},{url:"/windows11/Square44x44Logo.targetsize-44.png",revision:"ccc93b30e1a26c2c354d1b3d591ac0a4"},{url:"/windows11/Square44x44Logo.targetsize-48.png",revision:"8c26e0175d7b2e23fccd5cb0dc1272c3"},{url:"/windows11/Square44x44Logo.targetsize-60.png",revision:"2151c54bec93c6d27689a3c4bcaf322e"},{url:"/windows11/Square44x44Logo.targetsize-64.png",revision:"89fef1d31d359ea53b0c6fd9922cbeac"},{url:"/windows11/Square44x44Logo.targetsize-72.png",revision:"4eb433383becce912c6e6f0444c9b1e2"},{url:"/windows11/Square44x44Logo.targetsize-80.png",revision:"566e427607868d0d185edd1cb5cf90a2"},{url:"/windows11/Square44x44Logo.targetsize-96.png",revision:"f3bd696e26f7c0886031d102e8302eef"},{url:"/windows11/StoreLogo.scale-100.png",revision:"5c04be75f123efacf2a9c6ffe4d610e4"},{url:"/windows11/StoreLogo.scale-125.png",revision:"1317eca23952c1e07f522bf62b66c5cb"},{url:"/windows11/StoreLogo.scale-150.png",revision:"fac9aba8135872b582a574a3ed9a0f93"},{url:"/windows11/StoreLogo.scale-200.png",revision:"98b348988f167936734095a47d8fbf26"},{url:"/windows11/StoreLogo.scale-400.png",revision:"45ae4bfd985244bcc3bce1ea17ddfa04"},{url:"/windows11/Wide310x150Logo.scale-100.png",revision:"9606ed82ad87956c2c9dee9a02efe8ff"},{url:"/windows11/Wide310x150Logo.scale-125.png",revision:"ce692800bf4863a7706010e97b82bf47"},{url:"/windows11/Wide310x150Logo.scale-150.png",revision:"988246f2e5f29d4473f6686a64f7d6fb"},{url:"/windows11/Wide310x150Logo.scale-200.png",revision:"33acaa2eeef76d6e116d03cfba615286"},{url:"/windows11/Wide310x150Logo.scale-400.png",revision:"15370cfa939d4b502b3d98a3397c460b"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:a,state:i})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
