if(!self.define){let e,s={};const a=(a,o)=>(a=new URL(a+".js",o).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(o,i)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(s[n])return;let t={};const c=e=>a(e,n),r={module:{uri:n},exports:t,require:c};s[n]=Promise.all(o.map((e=>r[e]||c(e)))).then((e=>(i(...e),t)))}}define(["./workbox-07a7b4f2"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/app-build-manifest.json",revision:"589800564456be205062169791674045"},{url:"/_next/static/chunks/1690-060c0318246b941b.js",revision:"qlqtFq3os7wQ2H0LO8W0F"},{url:"/_next/static/chunks/1749-579df48e0d220f68.js",revision:"qlqtFq3os7wQ2H0LO8W0F"},{url:"/_next/static/chunks/1980-e175f871287ae862.js",revision:"qlqtFq3os7wQ2H0LO8W0F"},{url:"/_next/static/chunks/2150-bbb6eac2e463ffac.js",revision:"qlqtFq3os7wQ2H0LO8W0F"},{url:"/_next/static/chunks/3268-61b5e689d0bfd031.js",revision:"qlqtFq3os7wQ2H0LO8W0F"},{url:"/_next/static/chunks/3774-034b7d3b5ad69103.js",revision:"qlqtFq3os7wQ2H0LO8W0F"},{url:"/_next/static/chunks/4833-be809887e233845e.js",revision:"qlqtFq3os7wQ2H0LO8W0F"},{url:"/_next/static/chunks/5250-e3fea0a1b4871a36.js",revision:"qlqtFq3os7wQ2H0LO8W0F"},{url:"/_next/static/chunks/5340-419b48e07c5abdb9.js",revision:"qlqtFq3os7wQ2H0LO8W0F"},{url:"/_next/static/chunks/536-2a21631fccc74816.js",revision:"qlqtFq3os7wQ2H0LO8W0F"},{url:"/_next/static/chunks/5381-fd5facde9a949654.js",revision:"qlqtFq3os7wQ2H0LO8W0F"},{url:"/_next/static/chunks/577-b15bd2355fda0e8b.js",revision:"qlqtFq3os7wQ2H0LO8W0F"},{url:"/_next/static/chunks/5853-16167af43aeb39a3.js",revision:"qlqtFq3os7wQ2H0LO8W0F"},{url:"/_next/static/chunks/6456-8a7941aa88288985.js",revision:"qlqtFq3os7wQ2H0LO8W0F"},{url:"/_next/static/chunks/6865-06bbbb5808c649bf.js",revision:"qlqtFq3os7wQ2H0LO8W0F"},{url:"/_next/static/chunks/7174-1539462169bb053d.js",revision:"qlqtFq3os7wQ2H0LO8W0F"},{url:"/_next/static/chunks/7248-514f643b8ac2cc66.js",revision:"qlqtFq3os7wQ2H0LO8W0F"},{url:"/_next/static/chunks/7286-382d90eeceac24e8.js",revision:"qlqtFq3os7wQ2H0LO8W0F"},{url:"/_next/static/chunks/8069-86a9f4f4734fed3b.js",revision:"qlqtFq3os7wQ2H0LO8W0F"},{url:"/_next/static/chunks/8212.302361b2546aebf4.js",revision:"302361b2546aebf4"},{url:"/_next/static/chunks/825-c11aaf889e34f5b2.js",revision:"qlqtFq3os7wQ2H0LO8W0F"},{url:"/_next/static/chunks/8376-6727dff44f8ef263.js",revision:"qlqtFq3os7wQ2H0LO8W0F"},{url:"/_next/static/chunks/8743-01fce14ae6183bc3.js",revision:"qlqtFq3os7wQ2H0LO8W0F"},{url:"/_next/static/chunks/9462-f54d04973ec8af8d.js",revision:"qlqtFq3os7wQ2H0LO8W0F"},{url:"/_next/static/chunks/app/(books)/csol/%5BbookId%5D/%5BchapterId%5D/layout-decd68a2486e1904.js",revision:"qlqtFq3os7wQ2H0LO8W0F"},{url:"/_next/static/chunks/app/(books)/csol/%5BbookId%5D/%5BchapterId%5D/loading-8ac0037c0f00c206.js",revision:"qlqtFq3os7wQ2H0LO8W0F"},{url:"/_next/static/chunks/app/(books)/csol/%5BbookId%5D/%5BchapterId%5D/not-found-677f70c229979ecf.js",revision:"qlqtFq3os7wQ2H0LO8W0F"},{url:"/_next/static/chunks/app/(books)/csol/%5BbookId%5D/%5BchapterId%5D/reading/page-d3c5e921d9842e9e.js",revision:"qlqtFq3os7wQ2H0LO8W0F"},{url:"/_next/static/chunks/app/(books)/csol/%5BbookId%5D/%5BchapterId%5D/singing/page-0b4ff2efa2b0f9d0.js",revision:"qlqtFq3os7wQ2H0LO8W0F"},{url:"/_next/static/chunks/app/(books)/csol/%5BbookId%5D/%5BchapterId%5D/template-7e989e6cf1068723.js",revision:"qlqtFq3os7wQ2H0LO8W0F"},{url:"/_next/static/chunks/app/(books)/csol/%5BbookId%5D/%5BchapterId%5D/words/page-c8e9d10c9dea9232.js",revision:"qlqtFq3os7wQ2H0LO8W0F"},{url:"/_next/static/chunks/app/(books)/csol/%5BbookId%5D/%5BchapterId%5D/writing/page-d3935fe011198bb0.js",revision:"qlqtFq3os7wQ2H0LO8W0F"},{url:"/_next/static/chunks/app/(books)/csol/%5BbookId%5D/page-56b99ca59fe64f36.js",revision:"qlqtFq3os7wQ2H0LO8W0F"},{url:"/_next/static/chunks/app/(books)/csol/page-cb377391468184e4.js",revision:"qlqtFq3os7wQ2H0LO8W0F"},{url:"/_next/static/chunks/app/(books)/hanyu/%5BbookId%5D/%5BchapterId%5D/layout-6c42811a854699ab.js",revision:"qlqtFq3os7wQ2H0LO8W0F"},{url:"/_next/static/chunks/app/(books)/hanyu/%5BbookId%5D/%5BchapterId%5D/loading-4dc0c870181a2a0c.js",revision:"qlqtFq3os7wQ2H0LO8W0F"},{url:"/_next/static/chunks/app/(books)/hanyu/%5BbookId%5D/%5BchapterId%5D/new/page-3a038fbb2f9972f6.js",revision:"qlqtFq3os7wQ2H0LO8W0F"},{url:"/_next/static/chunks/app/(books)/hanyu/%5BbookId%5D/%5BchapterId%5D/not-found-0b102e8ab13219bb.js",revision:"qlqtFq3os7wQ2H0LO8W0F"},{url:"/_next/static/chunks/app/(books)/hanyu/%5BbookId%5D/%5BchapterId%5D/quiz/page-132190fd6304d6c9.js",revision:"qlqtFq3os7wQ2H0LO8W0F"},{url:"/_next/static/chunks/app/(books)/hanyu/%5BbookId%5D/%5BchapterId%5D/sentences/page-de7a423b03e51f2b.js",revision:"qlqtFq3os7wQ2H0LO8W0F"},{url:"/_next/static/chunks/app/(books)/hanyu/%5BbookId%5D/%5BchapterId%5D/template-1d043241744229e1.js",revision:"qlqtFq3os7wQ2H0LO8W0F"},{url:"/_next/static/chunks/app/(books)/hanyu/%5BbookId%5D/%5BchapterId%5D/text/page-94e51b1d78e7fb72.js",revision:"qlqtFq3os7wQ2H0LO8W0F"},{url:"/_next/static/chunks/app/(books)/hanyu/%5BbookId%5D/%5BchapterId%5D/words/page-7143bf8af67b959e.js",revision:"qlqtFq3os7wQ2H0LO8W0F"},{url:"/_next/static/chunks/app/(books)/hanyu/%5BbookId%5D/%5BchapterId%5D/writing/page-34facc86b82736c5.js",revision:"qlqtFq3os7wQ2H0LO8W0F"},{url:"/_next/static/chunks/app/(books)/hanyu/%5BbookId%5D/page-b0dcb0e6e5d91934.js",revision:"qlqtFq3os7wQ2H0LO8W0F"},{url:"/_next/static/chunks/app/(books)/hanyu/page-6cd1578f102b0381.js",revision:"qlqtFq3os7wQ2H0LO8W0F"},{url:"/_next/static/chunks/app/(books)/zhongwen/%5BbookId%5D/%5BchapterId%5D/layout-04b2e45cede41d44.js",revision:"qlqtFq3os7wQ2H0LO8W0F"},{url:"/_next/static/chunks/app/(books)/zhongwen/%5BbookId%5D/%5BchapterId%5D/literacy/page-7dc2f8878d0933e9.js",revision:"qlqtFq3os7wQ2H0LO8W0F"},{url:"/_next/static/chunks/app/(books)/zhongwen/%5BbookId%5D/%5BchapterId%5D/loading-eb8c9a42f7e9602f.js",revision:"qlqtFq3os7wQ2H0LO8W0F"},{url:"/_next/static/chunks/app/(books)/zhongwen/%5BbookId%5D/%5BchapterId%5D/match/page-f7e9513e9039b8bc.js",revision:"qlqtFq3os7wQ2H0LO8W0F"},{url:"/_next/static/chunks/app/(books)/zhongwen/%5BbookId%5D/%5BchapterId%5D/not-found-1280d6263d07607e.js",revision:"qlqtFq3os7wQ2H0LO8W0F"},{url:"/_next/static/chunks/app/(books)/zhongwen/%5BbookId%5D/%5BchapterId%5D/quiz/new-quiz/page-6a3fbd390e1ce06f.js",revision:"qlqtFq3os7wQ2H0LO8W0F"},{url:"/_next/static/chunks/app/(books)/zhongwen/%5BbookId%5D/%5BchapterId%5D/quiz/page-43a4a2d0dbd8109f.js",revision:"qlqtFq3os7wQ2H0LO8W0F"},{url:"/_next/static/chunks/app/(books)/zhongwen/%5BbookId%5D/%5BchapterId%5D/template-5f29f243bf6a044b.js",revision:"qlqtFq3os7wQ2H0LO8W0F"},{url:"/_next/static/chunks/app/(books)/zhongwen/%5BbookId%5D/%5BchapterId%5D/video/page-9fab8942be564232.js",revision:"qlqtFq3os7wQ2H0LO8W0F"},{url:"/_next/static/chunks/app/(books)/zhongwen/%5BbookId%5D/%5BchapterId%5D/word/page-fe418edcc008cddc.js",revision:"qlqtFq3os7wQ2H0LO8W0F"},{url:"/_next/static/chunks/app/(books)/zhongwen/%5BbookId%5D/page-6f7ca411e0c96c3d.js",revision:"qlqtFq3os7wQ2H0LO8W0F"},{url:"/_next/static/chunks/app/(books)/zhongwen/page-6eb4b4ab73cbce60.js",revision:"qlqtFq3os7wQ2H0LO8W0F"},{url:"/_next/static/chunks/app/(tools)/chinese-idioms/loading-d7ea881ae89b04c8.js",revision:"qlqtFq3os7wQ2H0LO8W0F"},{url:"/_next/static/chunks/app/(tools)/chinese-idioms/not-found-b6dca1e049037cdf.js",revision:"qlqtFq3os7wQ2H0LO8W0F"},{url:"/_next/static/chunks/app/(tools)/chinese-idioms/page-c1911b61eec83364.js",revision:"qlqtFq3os7wQ2H0LO8W0F"},{url:"/_next/static/chunks/app/(tools)/chinese-radicals/loading-08acff517041688f.js",revision:"qlqtFq3os7wQ2H0LO8W0F"},{url:"/_next/static/chunks/app/(tools)/chinese-radicals/not-found-302f6c65481ec28b.js",revision:"qlqtFq3os7wQ2H0LO8W0F"},{url:"/_next/static/chunks/app/(tools)/chinese-radicals/page-f7f99ab0a64a1612.js",revision:"qlqtFq3os7wQ2H0LO8W0F"},{url:"/_next/static/chunks/app/(tools)/pinyin/finals/page-116a6b4e27414344.js",revision:"qlqtFq3os7wQ2H0LO8W0F"},{url:"/_next/static/chunks/app/(tools)/pinyin/initials/page-c00f6e70e46bb5ba.js",revision:"qlqtFq3os7wQ2H0LO8W0F"},{url:"/_next/static/chunks/app/(tools)/pinyin/layout-af36b1d8adb4c08c.js",revision:"qlqtFq3os7wQ2H0LO8W0F"},{url:"/_next/static/chunks/app/(tools)/pinyin/loading-c547456fa9aabbcf.js",revision:"qlqtFq3os7wQ2H0LO8W0F"},{url:"/_next/static/chunks/app/(tools)/pinyin/not-found-3d7ade0bc5fc5649.js",revision:"qlqtFq3os7wQ2H0LO8W0F"},{url:"/_next/static/chunks/app/(tools)/pinyin/whole-syllables/page-f6ef01c3d6a4eb05.js",revision:"qlqtFq3os7wQ2H0LO8W0F"},{url:"/_next/static/chunks/app/(videos)/hikaru-no-go/%5Bepisode%5D/page-057e6acc7d181347.js",revision:"qlqtFq3os7wQ2H0LO8W0F"},{url:"/_next/static/chunks/app/(videos)/hikaru-no-go/loading-b5864e543a1a4f47.js",revision:"qlqtFq3os7wQ2H0LO8W0F"},{url:"/_next/static/chunks/app/(videos)/hikaru-no-go/page-9dcd92ae24e83cea.js",revision:"qlqtFq3os7wQ2H0LO8W0F"},{url:"/_next/static/chunks/app/error-1a43ddb1d272319e.js",revision:"qlqtFq3os7wQ2H0LO8W0F"},{url:"/_next/static/chunks/app/layout-f5815182944df095.js",revision:"qlqtFq3os7wQ2H0LO8W0F"},{url:"/_next/static/chunks/app/loading-817224f8d6d7ac8f.js",revision:"qlqtFq3os7wQ2H0LO8W0F"},{url:"/_next/static/chunks/app/not-found-8084ee520a66ce65.js",revision:"qlqtFq3os7wQ2H0LO8W0F"},{url:"/_next/static/chunks/app/page-0b294ee62bf851e4.js",revision:"qlqtFq3os7wQ2H0LO8W0F"},{url:"/_next/static/chunks/app/template-87b417002d4c22a5.js",revision:"qlqtFq3os7wQ2H0LO8W0F"},{url:"/_next/static/chunks/fd9d1056-d8a1595ad3b9ef5d.js",revision:"qlqtFq3os7wQ2H0LO8W0F"},{url:"/_next/static/chunks/framework-08aa667e5202eed8.js",revision:"qlqtFq3os7wQ2H0LO8W0F"},{url:"/_next/static/chunks/main-3c9f493a0f530b9d.js",revision:"qlqtFq3os7wQ2H0LO8W0F"},{url:"/_next/static/chunks/main-app-20ebccd553babf8e.js",revision:"qlqtFq3os7wQ2H0LO8W0F"},{url:"/_next/static/chunks/pages/_app-57bdff7978360b1c.js",revision:"qlqtFq3os7wQ2H0LO8W0F"},{url:"/_next/static/chunks/pages/_error-29037c284dd0eec6.js",revision:"qlqtFq3os7wQ2H0LO8W0F"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-8fa6f05762e71160.js",revision:"qlqtFq3os7wQ2H0LO8W0F"},{url:"/_next/static/css/93b564c6b2f75703.css",revision:"93b564c6b2f75703"},{url:"/_next/static/media/ec1a1eae803b668e-s.p.woff2",revision:"313812e61a1aacffa37a0e33e321d6b2"},{url:"/_next/static/media/f980ec13b5b5e554.p.woff2",revision:"c3066a48c8b1a6b3b2bab94f006e39d1"},{url:"/_next/static/qlqtFq3os7wQ2H0LO8W0F/_buildManifest.js",revision:"2b54d7db375d2b4c0e6af318090bebea"},{url:"/_next/static/qlqtFq3os7wQ2H0LO8W0F/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/android/android-launchericon-144-144.png",revision:"97a2af2d93cf6b6e2c80b5401722fcb3"},{url:"/android/android-launchericon-192-192.png",revision:"3ec1cb9c49a5c12352021131dded9d11"},{url:"/android/android-launchericon-48-48.png",revision:"0c4e68eb52e80f5394782dfcf934085a"},{url:"/android/android-launchericon-512-512.png",revision:"561d041074f7d0edd1ba1b5b87439563"},{url:"/android/android-launchericon-72-72.png",revision:"8bb948b0d9ed1584dc5d3dff47797e75"},{url:"/android/android-launchericon-96-96.png",revision:"b96fb0d5d2ade0c18dea32247046f1fa"},{url:"/images/find_difference.webp",revision:"c06ef6bb4378b82a2d1bf11aa73ce1f8"},{url:"/images/form_phrases.webp",revision:"8206baaaad1ae15caa3f36bf6f3e9a5e"},{url:"/images/loading.svg",revision:"03f7bb11ad1960b89b69efe9d7129655"},{url:"/ios/100.png",revision:"98b348988f167936734095a47d8fbf26"},{url:"/ios/1024.png",revision:"c5c16b488de79bab03c75f575067df89"},{url:"/ios/114.png",revision:"324035e20675a33efaa639ecded6d3b3"},{url:"/ios/120.png",revision:"b7160d556401313eca0953c212184d48"},{url:"/ios/128.png",revision:"4497da64e944560f210943126870594b"},{url:"/ios/144.png",revision:"97a2af2d93cf6b6e2c80b5401722fcb3"},{url:"/ios/152.png",revision:"a1c180085cb47026e476448fb220b55e"},{url:"/ios/16.png",revision:"d3036f288682e4d87508c09071c99866"},{url:"/ios/167.png",revision:"74689b625c69449593f53bcf960a4d21"},{url:"/ios/180.png",revision:"7d891b11e4f69379da65aa58b2975694"},{url:"/ios/192.png",revision:"3ec1cb9c49a5c12352021131dded9d11"},{url:"/ios/20.png",revision:"497e50fe5869eb11f3f2c04f886b882d"},{url:"/ios/256.png",revision:"eeb23f19ffe5d6234872351dec0e1740"},{url:"/ios/29.png",revision:"a530cd9128e26a8269a527e84ae651ca"},{url:"/ios/32.png",revision:"3076d0f1197fc2ccbf58dd103e7526e7"},{url:"/ios/40.png",revision:"3826d1dc4fed430d315f7a56cfb48d6a"},{url:"/ios/50.png",revision:"5c04be75f123efacf2a9c6ffe4d610e4"},{url:"/ios/512.png",revision:"561d041074f7d0edd1ba1b5b87439563"},{url:"/ios/57.png",revision:"45da920b8bdf03f0237634be97d5be91"},{url:"/ios/58.png",revision:"34a4c6f74e3e34d94d79b4841c598955"},{url:"/ios/60.png",revision:"a0bafb14845918b3819f4cbf2a3fc893"},{url:"/ios/64.png",revision:"3ba62e79a5d431985792c54106685920"},{url:"/ios/72.png",revision:"8bb948b0d9ed1584dc5d3dff47797e75"},{url:"/ios/76.png",revision:"59e2dde31dae330520885b40bca686a4"},{url:"/ios/80.png",revision:"a3ac0af1c412e6a8a9ff800c72aef6e0"},{url:"/ios/87.png",revision:"6216cf612f89b116b3dcc6e3e6c89c9c"},{url:"/manifest.json",revision:"26eef9231be6bfa54fabd2c452808650"},{url:"/next.svg",revision:"8e061864f388b47f33a1c3780831193e"},{url:"/vercel.svg",revision:"61c6b19abff40ea7acd577be818f3976"},{url:"/windows11/LargeTile.scale-100.png",revision:"ec011e196177145ffe6164e584a79c0c"},{url:"/windows11/LargeTile.scale-125.png",revision:"77fef95fa79564a914b0454ca22c7e76"},{url:"/windows11/LargeTile.scale-150.png",revision:"6864cc0421aaeb247308032b3d9a64f5"},{url:"/windows11/LargeTile.scale-200.png",revision:"a24059dccb7d1125f4b9b2a876f1df70"},{url:"/windows11/LargeTile.scale-400.png",revision:"e3da6ead57b7269de227bc41deb9b561"},{url:"/windows11/SmallTile.scale-100.png",revision:"d8e89cc302ec7d45ecff940c3e41d07e"},{url:"/windows11/SmallTile.scale-125.png",revision:"00bab15147d07c31badde2186dc07af1"},{url:"/windows11/SmallTile.scale-150.png",revision:"1665b9f99465d40139ff49be092ce418"},{url:"/windows11/SmallTile.scale-200.png",revision:"32b4114e9213bcab099775f1d172a71e"},{url:"/windows11/SmallTile.scale-400.png",revision:"74acdd56fb857aa796e1cce37d75a087"},{url:"/windows11/SplashScreen.scale-100.png",revision:"33acaa2eeef76d6e116d03cfba615286"},{url:"/windows11/SplashScreen.scale-125.png",revision:"5fabdad09950b8e264d38fdedd744560"},{url:"/windows11/SplashScreen.scale-150.png",revision:"e067816959bd89824ea6acd812c3f36e"},{url:"/windows11/SplashScreen.scale-200.png",revision:"15370cfa939d4b502b3d98a3397c460b"},{url:"/windows11/SplashScreen.scale-400.png",revision:"ae35a940fd92d7f84e3f91674464e321"},{url:"/windows11/Square150x150Logo.scale-100.png",revision:"b0839790003b70fd99c985cb43006e57"},{url:"/windows11/Square150x150Logo.scale-125.png",revision:"56ac6a95fe483a039b76e3928599d812"},{url:"/windows11/Square150x150Logo.scale-150.png",revision:"b27270d74ab4d88d6a7477f5ea72a912"},{url:"/windows11/Square150x150Logo.scale-200.png",revision:"3a1edaccc4aaa56948098e1a72d7b48f"},{url:"/windows11/Square150x150Logo.scale-400.png",revision:"2dc2a2eac52d27eeda1fb3f4ad4b693f"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-16.png",revision:"dbc90150e73724d976f86be0488ba868"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-20.png",revision:"8052204b1ee070eba430b870d2e79197"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-24.png",revision:"897558404a9980880afcca758ed08bb1"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-256.png",revision:"5904a02bac7f76ce6dd228e7dfc9446b"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-30.png",revision:"28f64113084a86d60fc0da094c6feb3e"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-32.png",revision:"21dfda5300e60a6945b450c0adf477aa"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-36.png",revision:"173f7a803af5712c50f2035145976141"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-40.png",revision:"91db1a851d33411b140488034e676ada"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-44.png",revision:"ccc93b30e1a26c2c354d1b3d591ac0a4"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-48.png",revision:"8c26e0175d7b2e23fccd5cb0dc1272c3"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-60.png",revision:"2151c54bec93c6d27689a3c4bcaf322e"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-64.png",revision:"89fef1d31d359ea53b0c6fd9922cbeac"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-72.png",revision:"4eb433383becce912c6e6f0444c9b1e2"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-80.png",revision:"566e427607868d0d185edd1cb5cf90a2"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-96.png",revision:"f3bd696e26f7c0886031d102e8302eef"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-16.png",revision:"dbc90150e73724d976f86be0488ba868"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-20.png",revision:"8052204b1ee070eba430b870d2e79197"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-24.png",revision:"897558404a9980880afcca758ed08bb1"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-256.png",revision:"5904a02bac7f76ce6dd228e7dfc9446b"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-30.png",revision:"28f64113084a86d60fc0da094c6feb3e"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-32.png",revision:"21dfda5300e60a6945b450c0adf477aa"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-36.png",revision:"173f7a803af5712c50f2035145976141"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-40.png",revision:"91db1a851d33411b140488034e676ada"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-44.png",revision:"ccc93b30e1a26c2c354d1b3d591ac0a4"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-48.png",revision:"8c26e0175d7b2e23fccd5cb0dc1272c3"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-60.png",revision:"2151c54bec93c6d27689a3c4bcaf322e"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-64.png",revision:"89fef1d31d359ea53b0c6fd9922cbeac"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-72.png",revision:"4eb433383becce912c6e6f0444c9b1e2"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-80.png",revision:"566e427607868d0d185edd1cb5cf90a2"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-96.png",revision:"f3bd696e26f7c0886031d102e8302eef"},{url:"/windows11/Square44x44Logo.scale-100.png",revision:"ccc93b30e1a26c2c354d1b3d591ac0a4"},{url:"/windows11/Square44x44Logo.scale-125.png",revision:"d6a7f808d44e31c99a214533cdac2d33"},{url:"/windows11/Square44x44Logo.scale-150.png",revision:"615b7ca9427b2685108d54dfd76dde6f"},{url:"/windows11/Square44x44Logo.scale-200.png",revision:"e0e47be7796d3a9af17318f282c38771"},{url:"/windows11/Square44x44Logo.scale-400.png",revision:"6ebaaf095c228ccb74427885fed60b8c"},{url:"/windows11/Square44x44Logo.targetsize-16.png",revision:"dbc90150e73724d976f86be0488ba868"},{url:"/windows11/Square44x44Logo.targetsize-20.png",revision:"8052204b1ee070eba430b870d2e79197"},{url:"/windows11/Square44x44Logo.targetsize-24.png",revision:"897558404a9980880afcca758ed08bb1"},{url:"/windows11/Square44x44Logo.targetsize-256.png",revision:"5904a02bac7f76ce6dd228e7dfc9446b"},{url:"/windows11/Square44x44Logo.targetsize-30.png",revision:"28f64113084a86d60fc0da094c6feb3e"},{url:"/windows11/Square44x44Logo.targetsize-32.png",revision:"21dfda5300e60a6945b450c0adf477aa"},{url:"/windows11/Square44x44Logo.targetsize-36.png",revision:"173f7a803af5712c50f2035145976141"},{url:"/windows11/Square44x44Logo.targetsize-40.png",revision:"91db1a851d33411b140488034e676ada"},{url:"/windows11/Square44x44Logo.targetsize-44.png",revision:"ccc93b30e1a26c2c354d1b3d591ac0a4"},{url:"/windows11/Square44x44Logo.targetsize-48.png",revision:"8c26e0175d7b2e23fccd5cb0dc1272c3"},{url:"/windows11/Square44x44Logo.targetsize-60.png",revision:"2151c54bec93c6d27689a3c4bcaf322e"},{url:"/windows11/Square44x44Logo.targetsize-64.png",revision:"89fef1d31d359ea53b0c6fd9922cbeac"},{url:"/windows11/Square44x44Logo.targetsize-72.png",revision:"4eb433383becce912c6e6f0444c9b1e2"},{url:"/windows11/Square44x44Logo.targetsize-80.png",revision:"566e427607868d0d185edd1cb5cf90a2"},{url:"/windows11/Square44x44Logo.targetsize-96.png",revision:"f3bd696e26f7c0886031d102e8302eef"},{url:"/windows11/StoreLogo.scale-100.png",revision:"5c04be75f123efacf2a9c6ffe4d610e4"},{url:"/windows11/StoreLogo.scale-125.png",revision:"1317eca23952c1e07f522bf62b66c5cb"},{url:"/windows11/StoreLogo.scale-150.png",revision:"fac9aba8135872b582a574a3ed9a0f93"},{url:"/windows11/StoreLogo.scale-200.png",revision:"98b348988f167936734095a47d8fbf26"},{url:"/windows11/StoreLogo.scale-400.png",revision:"45ae4bfd985244bcc3bce1ea17ddfa04"},{url:"/windows11/Wide310x150Logo.scale-100.png",revision:"9606ed82ad87956c2c9dee9a02efe8ff"},{url:"/windows11/Wide310x150Logo.scale-125.png",revision:"ce692800bf4863a7706010e97b82bf47"},{url:"/windows11/Wide310x150Logo.scale-150.png",revision:"988246f2e5f29d4473f6686a64f7d6fb"},{url:"/windows11/Wide310x150Logo.scale-200.png",revision:"33acaa2eeef76d6e116d03cfba615286"},{url:"/windows11/Wide310x150Logo.scale-400.png",revision:"15370cfa939d4b502b3d98a3397c460b"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:a,state:o})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
