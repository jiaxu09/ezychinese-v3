if(!self.define){let e,i={};const a=(a,s)=>(a=new URL(a+".js",s).href,i[a]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=i,document.head.appendChild(e)}else e=a,importScripts(a),i()})).then((()=>{let e=i[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(s,n)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(i[o])return;let r={};const c=e=>a(e,o),d={module:{uri:o},exports:r,require:c};i[o]=Promise.all(s.map((e=>d[e]||c(e)))).then((e=>(n(...e),r)))}}define(["./workbox-07a7b4f2"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/app-build-manifest.json",revision:"8249e01e3158a011781c55771c3b35ee"},{url:"/_next/static/chunks/1176-4151e0cadfcccb6f.js",revision:"jdxSXW-QEkLxZOzhHgIfi"},{url:"/_next/static/chunks/1412-dea55ef11ec2c8f8.js",revision:"jdxSXW-QEkLxZOzhHgIfi"},{url:"/_next/static/chunks/1690-4314714e8f4ed477.js",revision:"jdxSXW-QEkLxZOzhHgIfi"},{url:"/_next/static/chunks/1749-7e343b07dac2abca.js",revision:"jdxSXW-QEkLxZOzhHgIfi"},{url:"/_next/static/chunks/2150-b29effc6f4dcfff8.js",revision:"jdxSXW-QEkLxZOzhHgIfi"},{url:"/_next/static/chunks/2399-2ccee6020ae43b51.js",revision:"jdxSXW-QEkLxZOzhHgIfi"},{url:"/_next/static/chunks/2833-e560b81a7202257b.js",revision:"jdxSXW-QEkLxZOzhHgIfi"},{url:"/_next/static/chunks/3875-8674c49f15b4be38.js",revision:"jdxSXW-QEkLxZOzhHgIfi"},{url:"/_next/static/chunks/4563-1d969e146f5d06f3.js",revision:"jdxSXW-QEkLxZOzhHgIfi"},{url:"/_next/static/chunks/4833-71560ec7ce7b096c.js",revision:"jdxSXW-QEkLxZOzhHgIfi"},{url:"/_next/static/chunks/5250-e3fed665c7e6eac1.js",revision:"jdxSXW-QEkLxZOzhHgIfi"},{url:"/_next/static/chunks/577-d9b293141f16e2ef.js",revision:"jdxSXW-QEkLxZOzhHgIfi"},{url:"/_next/static/chunks/5853-3ac3a63175ce6158.js",revision:"jdxSXW-QEkLxZOzhHgIfi"},{url:"/_next/static/chunks/6594-8d0b17b9a3ff96e2.js",revision:"jdxSXW-QEkLxZOzhHgIfi"},{url:"/_next/static/chunks/794-f8aa41d6308ca207.js",revision:"jdxSXW-QEkLxZOzhHgIfi"},{url:"/_next/static/chunks/8069-d4c14f2f5415ba3a.js",revision:"jdxSXW-QEkLxZOzhHgIfi"},{url:"/_next/static/chunks/8212.fe8d50e743770faf.js",revision:"fe8d50e743770faf"},{url:"/_next/static/chunks/8758-ef307463253aa02a.js",revision:"jdxSXW-QEkLxZOzhHgIfi"},{url:"/_next/static/chunks/8993-215f2dcc4f79593c.js",revision:"jdxSXW-QEkLxZOzhHgIfi"},{url:"/_next/static/chunks/9023-961c65bbde5e5ba0.js",revision:"jdxSXW-QEkLxZOzhHgIfi"},{url:"/_next/static/chunks/9221-40a580b3d4898acb.js",revision:"jdxSXW-QEkLxZOzhHgIfi"},{url:"/_next/static/chunks/9462-f952891168d4aaae.js",revision:"jdxSXW-QEkLxZOzhHgIfi"},{url:"/_next/static/chunks/9642-0169a48232748714.js",revision:"jdxSXW-QEkLxZOzhHgIfi"},{url:"/_next/static/chunks/app/(books)/csol/%5BbookId%5D/%5BchapterId%5D/layout-b1bd7c9ed5575cec.js",revision:"jdxSXW-QEkLxZOzhHgIfi"},{url:"/_next/static/chunks/app/(books)/csol/%5BbookId%5D/%5BchapterId%5D/loading-8036bed7f36b3c02.js",revision:"jdxSXW-QEkLxZOzhHgIfi"},{url:"/_next/static/chunks/app/(books)/csol/%5BbookId%5D/%5BchapterId%5D/not-found-edffdc484076bf4c.js",revision:"jdxSXW-QEkLxZOzhHgIfi"},{url:"/_next/static/chunks/app/(books)/csol/%5BbookId%5D/%5BchapterId%5D/reading/page-11a9815444e99372.js",revision:"jdxSXW-QEkLxZOzhHgIfi"},{url:"/_next/static/chunks/app/(books)/csol/%5BbookId%5D/%5BchapterId%5D/singing/page-033b928e3196d2bb.js",revision:"jdxSXW-QEkLxZOzhHgIfi"},{url:"/_next/static/chunks/app/(books)/csol/%5BbookId%5D/%5BchapterId%5D/template-42223bb90c08cc97.js",revision:"jdxSXW-QEkLxZOzhHgIfi"},{url:"/_next/static/chunks/app/(books)/csol/%5BbookId%5D/%5BchapterId%5D/words/page-2a03dac96d6a18d2.js",revision:"jdxSXW-QEkLxZOzhHgIfi"},{url:"/_next/static/chunks/app/(books)/csol/%5BbookId%5D/%5BchapterId%5D/writing/page-fdfb7b5fb67a9784.js",revision:"jdxSXW-QEkLxZOzhHgIfi"},{url:"/_next/static/chunks/app/(books)/csol/%5BbookId%5D/page-9436f0c7b0242a0b.js",revision:"jdxSXW-QEkLxZOzhHgIfi"},{url:"/_next/static/chunks/app/(books)/csol/page-63b10baf554b85d5.js",revision:"jdxSXW-QEkLxZOzhHgIfi"},{url:"/_next/static/chunks/app/(books)/zhongwen/%5BbookId%5D/%5BchapterId%5D/layout-7f85d1c6fb76545e.js",revision:"jdxSXW-QEkLxZOzhHgIfi"},{url:"/_next/static/chunks/app/(books)/zhongwen/%5BbookId%5D/%5BchapterId%5D/literacy/page-545c822ad3dbadb4.js",revision:"jdxSXW-QEkLxZOzhHgIfi"},{url:"/_next/static/chunks/app/(books)/zhongwen/%5BbookId%5D/%5BchapterId%5D/loading-8fe875f233998493.js",revision:"jdxSXW-QEkLxZOzhHgIfi"},{url:"/_next/static/chunks/app/(books)/zhongwen/%5BbookId%5D/%5BchapterId%5D/match/page-a8bf86121ad8b538.js",revision:"jdxSXW-QEkLxZOzhHgIfi"},{url:"/_next/static/chunks/app/(books)/zhongwen/%5BbookId%5D/%5BchapterId%5D/not-found-f23e30029b9fd20d.js",revision:"jdxSXW-QEkLxZOzhHgIfi"},{url:"/_next/static/chunks/app/(books)/zhongwen/%5BbookId%5D/%5BchapterId%5D/quiz/new-quiz/page-c2062793746c395b.js",revision:"jdxSXW-QEkLxZOzhHgIfi"},{url:"/_next/static/chunks/app/(books)/zhongwen/%5BbookId%5D/%5BchapterId%5D/quiz/page-84fb534cc8ce2608.js",revision:"jdxSXW-QEkLxZOzhHgIfi"},{url:"/_next/static/chunks/app/(books)/zhongwen/%5BbookId%5D/%5BchapterId%5D/template-ff774d0c52ebfdee.js",revision:"jdxSXW-QEkLxZOzhHgIfi"},{url:"/_next/static/chunks/app/(books)/zhongwen/%5BbookId%5D/%5BchapterId%5D/video/page-645b5de7ef655f7f.js",revision:"jdxSXW-QEkLxZOzhHgIfi"},{url:"/_next/static/chunks/app/(books)/zhongwen/%5BbookId%5D/%5BchapterId%5D/word/page-32bec2fce75c78fe.js",revision:"jdxSXW-QEkLxZOzhHgIfi"},{url:"/_next/static/chunks/app/(books)/zhongwen/%5BbookId%5D/page-c37b412f75ca7d26.js",revision:"jdxSXW-QEkLxZOzhHgIfi"},{url:"/_next/static/chunks/app/(books)/zhongwen/page-5e2a45bf39a34701.js",revision:"jdxSXW-QEkLxZOzhHgIfi"},{url:"/_next/static/chunks/app/(tools)/chinese-idioms/page-878f786ce5a9c210.js",revision:"jdxSXW-QEkLxZOzhHgIfi"},{url:"/_next/static/chunks/app/(tools)/chinese-radicals/page-8a81d549da222d39.js",revision:"jdxSXW-QEkLxZOzhHgIfi"},{url:"/_next/static/chunks/app/error-d9eed14bf486300b.js",revision:"jdxSXW-QEkLxZOzhHgIfi"},{url:"/_next/static/chunks/app/layout-1684c7f05d69400c.js",revision:"jdxSXW-QEkLxZOzhHgIfi"},{url:"/_next/static/chunks/app/loading-7faba6f6cfc70cb0.js",revision:"jdxSXW-QEkLxZOzhHgIfi"},{url:"/_next/static/chunks/app/not-found-2d9216d11e8fc7ac.js",revision:"jdxSXW-QEkLxZOzhHgIfi"},{url:"/_next/static/chunks/app/page-60ff88e0e216b143.js",revision:"jdxSXW-QEkLxZOzhHgIfi"},{url:"/_next/static/chunks/app/template-f14466fe3931e219.js",revision:"jdxSXW-QEkLxZOzhHgIfi"},{url:"/_next/static/chunks/fd9d1056-a3cf3db8fad8311f.js",revision:"jdxSXW-QEkLxZOzhHgIfi"},{url:"/_next/static/chunks/framework-20adfd98f723306f.js",revision:"jdxSXW-QEkLxZOzhHgIfi"},{url:"/_next/static/chunks/main-4203bb831739d2b7.js",revision:"jdxSXW-QEkLxZOzhHgIfi"},{url:"/_next/static/chunks/main-app-698db7a95a746e14.js",revision:"jdxSXW-QEkLxZOzhHgIfi"},{url:"/_next/static/chunks/pages/_app-794d85baa83ca682.js",revision:"jdxSXW-QEkLxZOzhHgIfi"},{url:"/_next/static/chunks/pages/_error-5fb63848e0136a02.js",revision:"jdxSXW-QEkLxZOzhHgIfi"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-054fa9657e835741.js",revision:"jdxSXW-QEkLxZOzhHgIfi"},{url:"/_next/static/css/76e900547da5de61.css",revision:"76e900547da5de61"},{url:"/_next/static/jdxSXW-QEkLxZOzhHgIfi/_buildManifest.js",revision:"e57a59d253dabd0e0d31ccdad4b9a2b4"},{url:"/_next/static/jdxSXW-QEkLxZOzhHgIfi/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/media/correct_order.10d92e6f.webp",revision:"27677fde7e8becd8ef7ea086271e44a9"},{url:"/_next/static/media/ec1a1eae803b668e-s.p.woff2",revision:"313812e61a1aacffa37a0e33e321d6b2"},{url:"/_next/static/media/f980ec13b5b5e554.p.woff2",revision:"c3066a48c8b1a6b3b2bab94f006e39d1"},{url:"/android/android-launchericon-144-144.png",revision:"97a2af2d93cf6b6e2c80b5401722fcb3"},{url:"/android/android-launchericon-192-192.png",revision:"3ec1cb9c49a5c12352021131dded9d11"},{url:"/android/android-launchericon-48-48.png",revision:"0c4e68eb52e80f5394782dfcf934085a"},{url:"/android/android-launchericon-512-512.png",revision:"561d041074f7d0edd1ba1b5b87439563"},{url:"/android/android-launchericon-72-72.png",revision:"8bb948b0d9ed1584dc5d3dff47797e75"},{url:"/android/android-launchericon-96-96.png",revision:"b96fb0d5d2ade0c18dea32247046f1fa"},{url:"/images/Screenshot from 2024-02-21 08-38-47.webp",revision:"695587086e6d48ccbf392715550ad3fa"},{url:"/images/Screenshot from 2024-02-21 08-40-03.webp",revision:"8206baaaad1ae15caa3f36bf6f3e9a5e"},{url:"/images/Screenshot from 2024-02-21 08-41-58.webp",revision:"c06ef6bb4378b82a2d1bf11aa73ce1f8"},{url:"/images/correct_order.webp",revision:"27677fde7e8becd8ef7ea086271e44a9"},{url:"/ios/100.png",revision:"98b348988f167936734095a47d8fbf26"},{url:"/ios/1024.png",revision:"c5c16b488de79bab03c75f575067df89"},{url:"/ios/114.png",revision:"324035e20675a33efaa639ecded6d3b3"},{url:"/ios/120.png",revision:"b7160d556401313eca0953c212184d48"},{url:"/ios/128.png",revision:"4497da64e944560f210943126870594b"},{url:"/ios/144.png",revision:"97a2af2d93cf6b6e2c80b5401722fcb3"},{url:"/ios/152.png",revision:"a1c180085cb47026e476448fb220b55e"},{url:"/ios/16.png",revision:"d3036f288682e4d87508c09071c99866"},{url:"/ios/167.png",revision:"74689b625c69449593f53bcf960a4d21"},{url:"/ios/180.png",revision:"7d891b11e4f69379da65aa58b2975694"},{url:"/ios/192.png",revision:"3ec1cb9c49a5c12352021131dded9d11"},{url:"/ios/20.png",revision:"497e50fe5869eb11f3f2c04f886b882d"},{url:"/ios/256.png",revision:"eeb23f19ffe5d6234872351dec0e1740"},{url:"/ios/29.png",revision:"a530cd9128e26a8269a527e84ae651ca"},{url:"/ios/32.png",revision:"3076d0f1197fc2ccbf58dd103e7526e7"},{url:"/ios/40.png",revision:"3826d1dc4fed430d315f7a56cfb48d6a"},{url:"/ios/50.png",revision:"5c04be75f123efacf2a9c6ffe4d610e4"},{url:"/ios/512.png",revision:"561d041074f7d0edd1ba1b5b87439563"},{url:"/ios/57.png",revision:"45da920b8bdf03f0237634be97d5be91"},{url:"/ios/58.png",revision:"34a4c6f74e3e34d94d79b4841c598955"},{url:"/ios/60.png",revision:"a0bafb14845918b3819f4cbf2a3fc893"},{url:"/ios/64.png",revision:"3ba62e79a5d431985792c54106685920"},{url:"/ios/72.png",revision:"8bb948b0d9ed1584dc5d3dff47797e75"},{url:"/ios/76.png",revision:"59e2dde31dae330520885b40bca686a4"},{url:"/ios/80.png",revision:"a3ac0af1c412e6a8a9ff800c72aef6e0"},{url:"/ios/87.png",revision:"6216cf612f89b116b3dcc6e3e6c89c9c"},{url:"/manifest.json",revision:"9b88a53e78ec522d77dbd14d151ac008"},{url:"/next.svg",revision:"8e061864f388b47f33a1c3780831193e"},{url:"/vercel.svg",revision:"61c6b19abff40ea7acd577be818f3976"},{url:"/windows11/LargeTile.scale-100.png",revision:"ec011e196177145ffe6164e584a79c0c"},{url:"/windows11/LargeTile.scale-125.png",revision:"77fef95fa79564a914b0454ca22c7e76"},{url:"/windows11/LargeTile.scale-150.png",revision:"6864cc0421aaeb247308032b3d9a64f5"},{url:"/windows11/LargeTile.scale-200.png",revision:"a24059dccb7d1125f4b9b2a876f1df70"},{url:"/windows11/LargeTile.scale-400.png",revision:"e3da6ead57b7269de227bc41deb9b561"},{url:"/windows11/SmallTile.scale-100.png",revision:"d8e89cc302ec7d45ecff940c3e41d07e"},{url:"/windows11/SmallTile.scale-125.png",revision:"00bab15147d07c31badde2186dc07af1"},{url:"/windows11/SmallTile.scale-150.png",revision:"1665b9f99465d40139ff49be092ce418"},{url:"/windows11/SmallTile.scale-200.png",revision:"32b4114e9213bcab099775f1d172a71e"},{url:"/windows11/SmallTile.scale-400.png",revision:"74acdd56fb857aa796e1cce37d75a087"},{url:"/windows11/SplashScreen.scale-100.png",revision:"33acaa2eeef76d6e116d03cfba615286"},{url:"/windows11/SplashScreen.scale-125.png",revision:"5fabdad09950b8e264d38fdedd744560"},{url:"/windows11/SplashScreen.scale-150.png",revision:"e067816959bd89824ea6acd812c3f36e"},{url:"/windows11/SplashScreen.scale-200.png",revision:"15370cfa939d4b502b3d98a3397c460b"},{url:"/windows11/SplashScreen.scale-400.png",revision:"ae35a940fd92d7f84e3f91674464e321"},{url:"/windows11/Square150x150Logo.scale-100.png",revision:"b0839790003b70fd99c985cb43006e57"},{url:"/windows11/Square150x150Logo.scale-125.png",revision:"56ac6a95fe483a039b76e3928599d812"},{url:"/windows11/Square150x150Logo.scale-150.png",revision:"b27270d74ab4d88d6a7477f5ea72a912"},{url:"/windows11/Square150x150Logo.scale-200.png",revision:"3a1edaccc4aaa56948098e1a72d7b48f"},{url:"/windows11/Square150x150Logo.scale-400.png",revision:"2dc2a2eac52d27eeda1fb3f4ad4b693f"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-16.png",revision:"dbc90150e73724d976f86be0488ba868"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-20.png",revision:"8052204b1ee070eba430b870d2e79197"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-24.png",revision:"897558404a9980880afcca758ed08bb1"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-256.png",revision:"5904a02bac7f76ce6dd228e7dfc9446b"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-30.png",revision:"28f64113084a86d60fc0da094c6feb3e"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-32.png",revision:"21dfda5300e60a6945b450c0adf477aa"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-36.png",revision:"173f7a803af5712c50f2035145976141"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-40.png",revision:"91db1a851d33411b140488034e676ada"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-44.png",revision:"ccc93b30e1a26c2c354d1b3d591ac0a4"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-48.png",revision:"8c26e0175d7b2e23fccd5cb0dc1272c3"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-60.png",revision:"2151c54bec93c6d27689a3c4bcaf322e"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-64.png",revision:"89fef1d31d359ea53b0c6fd9922cbeac"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-72.png",revision:"4eb433383becce912c6e6f0444c9b1e2"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-80.png",revision:"566e427607868d0d185edd1cb5cf90a2"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-96.png",revision:"f3bd696e26f7c0886031d102e8302eef"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-16.png",revision:"dbc90150e73724d976f86be0488ba868"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-20.png",revision:"8052204b1ee070eba430b870d2e79197"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-24.png",revision:"897558404a9980880afcca758ed08bb1"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-256.png",revision:"5904a02bac7f76ce6dd228e7dfc9446b"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-30.png",revision:"28f64113084a86d60fc0da094c6feb3e"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-32.png",revision:"21dfda5300e60a6945b450c0adf477aa"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-36.png",revision:"173f7a803af5712c50f2035145976141"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-40.png",revision:"91db1a851d33411b140488034e676ada"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-44.png",revision:"ccc93b30e1a26c2c354d1b3d591ac0a4"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-48.png",revision:"8c26e0175d7b2e23fccd5cb0dc1272c3"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-60.png",revision:"2151c54bec93c6d27689a3c4bcaf322e"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-64.png",revision:"89fef1d31d359ea53b0c6fd9922cbeac"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-72.png",revision:"4eb433383becce912c6e6f0444c9b1e2"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-80.png",revision:"566e427607868d0d185edd1cb5cf90a2"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-96.png",revision:"f3bd696e26f7c0886031d102e8302eef"},{url:"/windows11/Square44x44Logo.scale-100.png",revision:"ccc93b30e1a26c2c354d1b3d591ac0a4"},{url:"/windows11/Square44x44Logo.scale-125.png",revision:"d6a7f808d44e31c99a214533cdac2d33"},{url:"/windows11/Square44x44Logo.scale-150.png",revision:"615b7ca9427b2685108d54dfd76dde6f"},{url:"/windows11/Square44x44Logo.scale-200.png",revision:"e0e47be7796d3a9af17318f282c38771"},{url:"/windows11/Square44x44Logo.scale-400.png",revision:"6ebaaf095c228ccb74427885fed60b8c"},{url:"/windows11/Square44x44Logo.targetsize-16.png",revision:"dbc90150e73724d976f86be0488ba868"},{url:"/windows11/Square44x44Logo.targetsize-20.png",revision:"8052204b1ee070eba430b870d2e79197"},{url:"/windows11/Square44x44Logo.targetsize-24.png",revision:"897558404a9980880afcca758ed08bb1"},{url:"/windows11/Square44x44Logo.targetsize-256.png",revision:"5904a02bac7f76ce6dd228e7dfc9446b"},{url:"/windows11/Square44x44Logo.targetsize-30.png",revision:"28f64113084a86d60fc0da094c6feb3e"},{url:"/windows11/Square44x44Logo.targetsize-32.png",revision:"21dfda5300e60a6945b450c0adf477aa"},{url:"/windows11/Square44x44Logo.targetsize-36.png",revision:"173f7a803af5712c50f2035145976141"},{url:"/windows11/Square44x44Logo.targetsize-40.png",revision:"91db1a851d33411b140488034e676ada"},{url:"/windows11/Square44x44Logo.targetsize-44.png",revision:"ccc93b30e1a26c2c354d1b3d591ac0a4"},{url:"/windows11/Square44x44Logo.targetsize-48.png",revision:"8c26e0175d7b2e23fccd5cb0dc1272c3"},{url:"/windows11/Square44x44Logo.targetsize-60.png",revision:"2151c54bec93c6d27689a3c4bcaf322e"},{url:"/windows11/Square44x44Logo.targetsize-64.png",revision:"89fef1d31d359ea53b0c6fd9922cbeac"},{url:"/windows11/Square44x44Logo.targetsize-72.png",revision:"4eb433383becce912c6e6f0444c9b1e2"},{url:"/windows11/Square44x44Logo.targetsize-80.png",revision:"566e427607868d0d185edd1cb5cf90a2"},{url:"/windows11/Square44x44Logo.targetsize-96.png",revision:"f3bd696e26f7c0886031d102e8302eef"},{url:"/windows11/StoreLogo.scale-100.png",revision:"5c04be75f123efacf2a9c6ffe4d610e4"},{url:"/windows11/StoreLogo.scale-125.png",revision:"1317eca23952c1e07f522bf62b66c5cb"},{url:"/windows11/StoreLogo.scale-150.png",revision:"fac9aba8135872b582a574a3ed9a0f93"},{url:"/windows11/StoreLogo.scale-200.png",revision:"98b348988f167936734095a47d8fbf26"},{url:"/windows11/StoreLogo.scale-400.png",revision:"45ae4bfd985244bcc3bce1ea17ddfa04"},{url:"/windows11/Wide310x150Logo.scale-100.png",revision:"9606ed82ad87956c2c9dee9a02efe8ff"},{url:"/windows11/Wide310x150Logo.scale-125.png",revision:"ce692800bf4863a7706010e97b82bf47"},{url:"/windows11/Wide310x150Logo.scale-150.png",revision:"988246f2e5f29d4473f6686a64f7d6fb"},{url:"/windows11/Wide310x150Logo.scale-200.png",revision:"33acaa2eeef76d6e116d03cfba615286"},{url:"/windows11/Wide310x150Logo.scale-400.png",revision:"15370cfa939d4b502b3d98a3397c460b"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:i,event:a,state:s})=>i&&"opaqueredirect"===i.type?new Response(i.body,{status:200,statusText:"OK",headers:i.headers}):i}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const i=e.pathname;return!i.startsWith("/api/auth/")&&!!i.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
