if(!self.define){let e,a={};const s=(s,i)=>(s=new URL(s+".js",i).href,a[s]||new Promise((a=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=a,document.head.appendChild(e)}else e=s,importScripts(s),a()})).then((()=>{let e=a[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(i,n)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(a[o])return;let t={};const c=e=>s(e,o),r={module:{uri:o},exports:t,require:c};a[o]=Promise.all(i.map((e=>r[e]||c(e)))).then((e=>(n(...e),t)))}}define(["./workbox-07a7b4f2"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/1.mp3",revision:"0cd1238ff2ee20b4df25cc5dbd84b925"},{url:"/_next/app-build-manifest.json",revision:"eda9556c556c0518d69cd952eeef53a0"},{url:"/_next/static/UztM4wCuN5KQ65QH3Vb7H/_buildManifest.js",revision:"2b54d7db375d2b4c0e6af318090bebea"},{url:"/_next/static/UztM4wCuN5KQ65QH3Vb7H/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/1749-c3f886bf2556db90.js",revision:"UztM4wCuN5KQ65QH3Vb7H"},{url:"/_next/static/chunks/1928-5df5e4f5c1163a1b.js",revision:"UztM4wCuN5KQ65QH3Vb7H"},{url:"/_next/static/chunks/2150-bbb6eac2e463ffac.js",revision:"UztM4wCuN5KQ65QH3Vb7H"},{url:"/_next/static/chunks/2466-8c0916181d4f4b7e.js",revision:"UztM4wCuN5KQ65QH3Vb7H"},{url:"/_next/static/chunks/2510-1830905972469020.js",revision:"UztM4wCuN5KQ65QH3Vb7H"},{url:"/_next/static/chunks/3757-46ff5468e01fe0c0.js",revision:"UztM4wCuN5KQ65QH3Vb7H"},{url:"/_next/static/chunks/41-391fccdb1dfe91b6.js",revision:"UztM4wCuN5KQ65QH3Vb7H"},{url:"/_next/static/chunks/4694-22a7380ad8008bf0.js",revision:"UztM4wCuN5KQ65QH3Vb7H"},{url:"/_next/static/chunks/5019-b05ebd8a5ba4fe93.js",revision:"UztM4wCuN5KQ65QH3Vb7H"},{url:"/_next/static/chunks/5157-795e85a431ef3057.js",revision:"UztM4wCuN5KQ65QH3Vb7H"},{url:"/_next/static/chunks/5250-4406f2223c9e81a2.js",revision:"UztM4wCuN5KQ65QH3Vb7H"},{url:"/_next/static/chunks/5340-419b48e07c5abdb9.js",revision:"UztM4wCuN5KQ65QH3Vb7H"},{url:"/_next/static/chunks/5742-85318c006a30831d.js",revision:"UztM4wCuN5KQ65QH3Vb7H"},{url:"/_next/static/chunks/5833-acb55dae36b7f288.js",revision:"UztM4wCuN5KQ65QH3Vb7H"},{url:"/_next/static/chunks/6446-a51a2ae875b610c5.js",revision:"UztM4wCuN5KQ65QH3Vb7H"},{url:"/_next/static/chunks/6453-2d9e0f84435bf0d2.js",revision:"UztM4wCuN5KQ65QH3Vb7H"},{url:"/_next/static/chunks/6665-18da19de45dac717.js",revision:"UztM4wCuN5KQ65QH3Vb7H"},{url:"/_next/static/chunks/7153-980de99698b21e93.js",revision:"UztM4wCuN5KQ65QH3Vb7H"},{url:"/_next/static/chunks/7173-20565a73e7e7ec05.js",revision:"UztM4wCuN5KQ65QH3Vb7H"},{url:"/_next/static/chunks/7434-14fb4daa59edf114.js",revision:"UztM4wCuN5KQ65QH3Vb7H"},{url:"/_next/static/chunks/7515-d8fac16e88a32483.js",revision:"UztM4wCuN5KQ65QH3Vb7H"},{url:"/_next/static/chunks/79-578ae3a1cda267f3.js",revision:"UztM4wCuN5KQ65QH3Vb7H"},{url:"/_next/static/chunks/8069-96dedb4ae858a318.js",revision:"UztM4wCuN5KQ65QH3Vb7H"},{url:"/_next/static/chunks/8212.302361b2546aebf4.js",revision:"302361b2546aebf4"},{url:"/_next/static/chunks/8225-af49678af1fb08e1.js",revision:"UztM4wCuN5KQ65QH3Vb7H"},{url:"/_next/static/chunks/8242-bdd19d33ba8e50a0.js",revision:"UztM4wCuN5KQ65QH3Vb7H"},{url:"/_next/static/chunks/8610-e32f0e6d512d69e7.js",revision:"UztM4wCuN5KQ65QH3Vb7H"},{url:"/_next/static/chunks/9055-92c6c3186873439a.js",revision:"UztM4wCuN5KQ65QH3Vb7H"},{url:"/_next/static/chunks/9411-e7a227fc39c125dc.js",revision:"UztM4wCuN5KQ65QH3Vb7H"},{url:"/_next/static/chunks/9462-22116efd8dbcb56d.js",revision:"UztM4wCuN5KQ65QH3Vb7H"},{url:"/_next/static/chunks/9814-7933d0115a7d068e.js",revision:"UztM4wCuN5KQ65QH3Vb7H"},{url:"/_next/static/chunks/app/(books)/csol/%5BbookId%5D/%5BchapterId%5D/layout-22db756118ebc24a.js",revision:"UztM4wCuN5KQ65QH3Vb7H"},{url:"/_next/static/chunks/app/(books)/csol/%5BbookId%5D/%5BchapterId%5D/loading-ef902ba54d6159e2.js",revision:"UztM4wCuN5KQ65QH3Vb7H"},{url:"/_next/static/chunks/app/(books)/csol/%5BbookId%5D/%5BchapterId%5D/new-quiz/page-109860b63d166d8d.js",revision:"UztM4wCuN5KQ65QH3Vb7H"},{url:"/_next/static/chunks/app/(books)/csol/%5BbookId%5D/%5BchapterId%5D/not-found-322af92ac3837b6b.js",revision:"UztM4wCuN5KQ65QH3Vb7H"},{url:"/_next/static/chunks/app/(books)/csol/%5BbookId%5D/%5BchapterId%5D/quiz/page-dd37f24492db89d2.js",revision:"UztM4wCuN5KQ65QH3Vb7H"},{url:"/_next/static/chunks/app/(books)/csol/%5BbookId%5D/%5BchapterId%5D/reading/page-89cf343d76f505a9.js",revision:"UztM4wCuN5KQ65QH3Vb7H"},{url:"/_next/static/chunks/app/(books)/csol/%5BbookId%5D/%5BchapterId%5D/singing/page-3d0a39f16cb3443b.js",revision:"UztM4wCuN5KQ65QH3Vb7H"},{url:"/_next/static/chunks/app/(books)/csol/%5BbookId%5D/%5BchapterId%5D/template-89b5dfa6581b6ccc.js",revision:"UztM4wCuN5KQ65QH3Vb7H"},{url:"/_next/static/chunks/app/(books)/csol/%5BbookId%5D/%5BchapterId%5D/words/page-895645d7235df1f5.js",revision:"UztM4wCuN5KQ65QH3Vb7H"},{url:"/_next/static/chunks/app/(books)/csol/%5BbookId%5D/%5BchapterId%5D/writing/page-dbead93d61d1b470.js",revision:"UztM4wCuN5KQ65QH3Vb7H"},{url:"/_next/static/chunks/app/(books)/csol/%5BbookId%5D/page-e756ca8c68fc1a1f.js",revision:"UztM4wCuN5KQ65QH3Vb7H"},{url:"/_next/static/chunks/app/(books)/csol/page-b7339c8f758768e2.js",revision:"UztM4wCuN5KQ65QH3Vb7H"},{url:"/_next/static/chunks/app/(books)/hanyu/%5BbookId%5D/%5BchapterId%5D/layout-61f2180ed7efb137.js",revision:"UztM4wCuN5KQ65QH3Vb7H"},{url:"/_next/static/chunks/app/(books)/hanyu/%5BbookId%5D/%5BchapterId%5D/loading-6de01353a46c73d5.js",revision:"UztM4wCuN5KQ65QH3Vb7H"},{url:"/_next/static/chunks/app/(books)/hanyu/%5BbookId%5D/%5BchapterId%5D/new/page-85b11a0e445e18e6.js",revision:"UztM4wCuN5KQ65QH3Vb7H"},{url:"/_next/static/chunks/app/(books)/hanyu/%5BbookId%5D/%5BchapterId%5D/not-found-0c5d3f00eeb62c80.js",revision:"UztM4wCuN5KQ65QH3Vb7H"},{url:"/_next/static/chunks/app/(books)/hanyu/%5BbookId%5D/%5BchapterId%5D/quiz/new/page-82194c435b068d82.js",revision:"UztM4wCuN5KQ65QH3Vb7H"},{url:"/_next/static/chunks/app/(books)/hanyu/%5BbookId%5D/%5BchapterId%5D/quiz/page-bedb2a641fb4dbd6.js",revision:"UztM4wCuN5KQ65QH3Vb7H"},{url:"/_next/static/chunks/app/(books)/hanyu/%5BbookId%5D/%5BchapterId%5D/sentences/page-a53249c80a5be8e4.js",revision:"UztM4wCuN5KQ65QH3Vb7H"},{url:"/_next/static/chunks/app/(books)/hanyu/%5BbookId%5D/%5BchapterId%5D/template-c6badb9ab5ac3b36.js",revision:"UztM4wCuN5KQ65QH3Vb7H"},{url:"/_next/static/chunks/app/(books)/hanyu/%5BbookId%5D/%5BchapterId%5D/text/page-c77fc4c66ec9d3d9.js",revision:"UztM4wCuN5KQ65QH3Vb7H"},{url:"/_next/static/chunks/app/(books)/hanyu/%5BbookId%5D/%5BchapterId%5D/words/page-cce6c375419c79e6.js",revision:"UztM4wCuN5KQ65QH3Vb7H"},{url:"/_next/static/chunks/app/(books)/hanyu/%5BbookId%5D/%5BchapterId%5D/writing/page-7a3c56db44736c5c.js",revision:"UztM4wCuN5KQ65QH3Vb7H"},{url:"/_next/static/chunks/app/(books)/hanyu/%5BbookId%5D/page-74519b95d34c6e16.js",revision:"UztM4wCuN5KQ65QH3Vb7H"},{url:"/_next/static/chunks/app/(books)/hanyu/page-f7048a0fd3384dde.js",revision:"UztM4wCuN5KQ65QH3Vb7H"},{url:"/_next/static/chunks/app/(books)/zhongwen/%5BbookId%5D/%5BchapterId%5D/layout-d7dcddc827d08e14.js",revision:"UztM4wCuN5KQ65QH3Vb7H"},{url:"/_next/static/chunks/app/(books)/zhongwen/%5BbookId%5D/%5BchapterId%5D/literacy/page-03d6e8ab91824af3.js",revision:"UztM4wCuN5KQ65QH3Vb7H"},{url:"/_next/static/chunks/app/(books)/zhongwen/%5BbookId%5D/%5BchapterId%5D/loading-a9cfce6941c64a4a.js",revision:"UztM4wCuN5KQ65QH3Vb7H"},{url:"/_next/static/chunks/app/(books)/zhongwen/%5BbookId%5D/%5BchapterId%5D/match/page-2c12e6b3c7e62686.js",revision:"UztM4wCuN5KQ65QH3Vb7H"},{url:"/_next/static/chunks/app/(books)/zhongwen/%5BbookId%5D/%5BchapterId%5D/not-found-25e89a8fee5f3418.js",revision:"UztM4wCuN5KQ65QH3Vb7H"},{url:"/_next/static/chunks/app/(books)/zhongwen/%5BbookId%5D/%5BchapterId%5D/quiz/new-quiz/page-48286b531e442c16.js",revision:"UztM4wCuN5KQ65QH3Vb7H"},{url:"/_next/static/chunks/app/(books)/zhongwen/%5BbookId%5D/%5BchapterId%5D/quiz/page-03aa042b8f6d7b3c.js",revision:"UztM4wCuN5KQ65QH3Vb7H"},{url:"/_next/static/chunks/app/(books)/zhongwen/%5BbookId%5D/%5BchapterId%5D/template-cb1d970995b9839d.js",revision:"UztM4wCuN5KQ65QH3Vb7H"},{url:"/_next/static/chunks/app/(books)/zhongwen/%5BbookId%5D/%5BchapterId%5D/video/page-bf27ba3c18c3ac3d.js",revision:"UztM4wCuN5KQ65QH3Vb7H"},{url:"/_next/static/chunks/app/(books)/zhongwen/%5BbookId%5D/%5BchapterId%5D/word/page-a0ebdb0df7d4c7b2.js",revision:"UztM4wCuN5KQ65QH3Vb7H"},{url:"/_next/static/chunks/app/(books)/zhongwen/%5BbookId%5D/page-0b1eddaa7d3c3baa.js",revision:"UztM4wCuN5KQ65QH3Vb7H"},{url:"/_next/static/chunks/app/(books)/zhongwen/page-72a556bff5905da9.js",revision:"UztM4wCuN5KQ65QH3Vb7H"},{url:"/_next/static/chunks/app/(reading)/reading/%5Blevelid%5D/%5Bstoryid%5D/page-6d5ef6deafbee35d.js",revision:"UztM4wCuN5KQ65QH3Vb7H"},{url:"/_next/static/chunks/app/(reading)/reading/%5Blevelid%5D/layout-8e97c8bfd95c6fce.js",revision:"UztM4wCuN5KQ65QH3Vb7H"},{url:"/_next/static/chunks/app/(reading)/reading/%5Blevelid%5D/page-2003c7b3d47b4245.js",revision:"UztM4wCuN5KQ65QH3Vb7H"},{url:"/_next/static/chunks/app/(tools)/chinese-idioms/loading-9b755984ddb48f29.js",revision:"UztM4wCuN5KQ65QH3Vb7H"},{url:"/_next/static/chunks/app/(tools)/chinese-idioms/not-found-ff20b2df9137b61c.js",revision:"UztM4wCuN5KQ65QH3Vb7H"},{url:"/_next/static/chunks/app/(tools)/chinese-idioms/page-c1092acce81d55ff.js",revision:"UztM4wCuN5KQ65QH3Vb7H"},{url:"/_next/static/chunks/app/(tools)/chinese-radicals/loading-f7df72e92d83d715.js",revision:"UztM4wCuN5KQ65QH3Vb7H"},{url:"/_next/static/chunks/app/(tools)/chinese-radicals/not-found-3e0c12b3f449dfba.js",revision:"UztM4wCuN5KQ65QH3Vb7H"},{url:"/_next/static/chunks/app/(tools)/chinese-radicals/page-46a8a543bfa61b84.js",revision:"UztM4wCuN5KQ65QH3Vb7H"},{url:"/_next/static/chunks/app/(tools)/chinese-strokes/loading-0e2456150fbf2704.js",revision:"UztM4wCuN5KQ65QH3Vb7H"},{url:"/_next/static/chunks/app/(tools)/chinese-strokes/page-7e45ada4222a5916.js",revision:"UztM4wCuN5KQ65QH3Vb7H"},{url:"/_next/static/chunks/app/(tools)/flashcards/%5BcategoryId%5D/page-a4c27e7e745b4406.js",revision:"UztM4wCuN5KQ65QH3Vb7H"},{url:"/_next/static/chunks/app/(tools)/flashcards/page-709615186bd73f1a.js",revision:"UztM4wCuN5KQ65QH3Vb7H"},{url:"/_next/static/chunks/app/(tools)/pinyin/finals/page-b1ab78fbcee87dd8.js",revision:"UztM4wCuN5KQ65QH3Vb7H"},{url:"/_next/static/chunks/app/(tools)/pinyin/hanzi-to-pinyin/page-24fa88524ca7d424.js",revision:"UztM4wCuN5KQ65QH3Vb7H"},{url:"/_next/static/chunks/app/(tools)/pinyin/initials/page-ce3e6efe22b44e07.js",revision:"UztM4wCuN5KQ65QH3Vb7H"},{url:"/_next/static/chunks/app/(tools)/pinyin/layout-9d9acaad42578473.js",revision:"UztM4wCuN5KQ65QH3Vb7H"},{url:"/_next/static/chunks/app/(tools)/pinyin/loading-a244780f6340c792.js",revision:"UztM4wCuN5KQ65QH3Vb7H"},{url:"/_next/static/chunks/app/(tools)/pinyin/not-found-882e1bfe5d96c637.js",revision:"UztM4wCuN5KQ65QH3Vb7H"},{url:"/_next/static/chunks/app/(tools)/pinyin/whole-syllables/page-fcb5f32dce6e4cc3.js",revision:"UztM4wCuN5KQ65QH3Vb7H"},{url:"/_next/static/chunks/app/(tools)/vocabulary/page-caf66735b55038cb.js",revision:"UztM4wCuN5KQ65QH3Vb7H"},{url:"/_next/static/chunks/app/(videos)/hikaru-no-go/%5Bepisode%5D/page-39c68d0e243587c1.js",revision:"UztM4wCuN5KQ65QH3Vb7H"},{url:"/_next/static/chunks/app/(videos)/hikaru-no-go/loading-5dfaa502c66a90d4.js",revision:"UztM4wCuN5KQ65QH3Vb7H"},{url:"/_next/static/chunks/app/(videos)/hikaru-no-go/page-b7f2bd9d8ce199f9.js",revision:"UztM4wCuN5KQ65QH3Vb7H"},{url:"/_next/static/chunks/app/error-891836b5417d460f.js",revision:"UztM4wCuN5KQ65QH3Vb7H"},{url:"/_next/static/chunks/app/layout-0a34b5fe9afe1189.js",revision:"UztM4wCuN5KQ65QH3Vb7H"},{url:"/_next/static/chunks/app/loading-8733fd1ab0a649fe.js",revision:"UztM4wCuN5KQ65QH3Vb7H"},{url:"/_next/static/chunks/app/not-found-66f531fdaac99521.js",revision:"UztM4wCuN5KQ65QH3Vb7H"},{url:"/_next/static/chunks/app/page-5bc20bfb576946df.js",revision:"UztM4wCuN5KQ65QH3Vb7H"},{url:"/_next/static/chunks/app/template-b8a2b577d45a74e0.js",revision:"UztM4wCuN5KQ65QH3Vb7H"},{url:"/_next/static/chunks/fd9d1056-61558ab10666f11a.js",revision:"UztM4wCuN5KQ65QH3Vb7H"},{url:"/_next/static/chunks/framework-08aa667e5202eed8.js",revision:"UztM4wCuN5KQ65QH3Vb7H"},{url:"/_next/static/chunks/main-734602c737f576d4.js",revision:"UztM4wCuN5KQ65QH3Vb7H"},{url:"/_next/static/chunks/main-app-20ebccd553babf8e.js",revision:"UztM4wCuN5KQ65QH3Vb7H"},{url:"/_next/static/chunks/pages/_app-57bdff7978360b1c.js",revision:"UztM4wCuN5KQ65QH3Vb7H"},{url:"/_next/static/chunks/pages/_error-29037c284dd0eec6.js",revision:"UztM4wCuN5KQ65QH3Vb7H"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-91232b61a56dc3a1.js",revision:"UztM4wCuN5KQ65QH3Vb7H"},{url:"/_next/static/css/2b01662a6567695a.css",revision:"2b01662a6567695a"},{url:"/_next/static/media/ec1a1eae803b668e-s.p.woff2",revision:"313812e61a1aacffa37a0e33e321d6b2"},{url:"/_next/static/media/f980ec13b5b5e554.p.woff2",revision:"c3066a48c8b1a6b3b2bab94f006e39d1"},{url:"/android/android-launchericon-144-144.png",revision:"97a2af2d93cf6b6e2c80b5401722fcb3"},{url:"/android/android-launchericon-192-192.png",revision:"3ec1cb9c49a5c12352021131dded9d11"},{url:"/android/android-launchericon-48-48.png",revision:"0c4e68eb52e80f5394782dfcf934085a"},{url:"/android/android-launchericon-512-512.png",revision:"561d041074f7d0edd1ba1b5b87439563"},{url:"/android/android-launchericon-72-72.png",revision:"8bb948b0d9ed1584dc5d3dff47797e75"},{url:"/android/android-launchericon-96-96.png",revision:"b96fb0d5d2ade0c18dea32247046f1fa"},{url:"/images/find_difference.webp",revision:"c06ef6bb4378b82a2d1bf11aa73ce1f8"},{url:"/images/form_phrases.webp",revision:"8206baaaad1ae15caa3f36bf6f3e9a5e"},{url:"/ios/100.png",revision:"98b348988f167936734095a47d8fbf26"},{url:"/ios/1024.png",revision:"c5c16b488de79bab03c75f575067df89"},{url:"/ios/114.png",revision:"324035e20675a33efaa639ecded6d3b3"},{url:"/ios/120.png",revision:"b7160d556401313eca0953c212184d48"},{url:"/ios/128.png",revision:"4497da64e944560f210943126870594b"},{url:"/ios/144.png",revision:"97a2af2d93cf6b6e2c80b5401722fcb3"},{url:"/ios/152.png",revision:"a1c180085cb47026e476448fb220b55e"},{url:"/ios/16.png",revision:"d3036f288682e4d87508c09071c99866"},{url:"/ios/167.png",revision:"74689b625c69449593f53bcf960a4d21"},{url:"/ios/180.png",revision:"7d891b11e4f69379da65aa58b2975694"},{url:"/ios/192.png",revision:"3ec1cb9c49a5c12352021131dded9d11"},{url:"/ios/20.png",revision:"497e50fe5869eb11f3f2c04f886b882d"},{url:"/ios/256.png",revision:"eeb23f19ffe5d6234872351dec0e1740"},{url:"/ios/29.png",revision:"a530cd9128e26a8269a527e84ae651ca"},{url:"/ios/32.png",revision:"3076d0f1197fc2ccbf58dd103e7526e7"},{url:"/ios/40.png",revision:"3826d1dc4fed430d315f7a56cfb48d6a"},{url:"/ios/50.png",revision:"5c04be75f123efacf2a9c6ffe4d610e4"},{url:"/ios/512.png",revision:"561d041074f7d0edd1ba1b5b87439563"},{url:"/ios/57.png",revision:"45da920b8bdf03f0237634be97d5be91"},{url:"/ios/58.png",revision:"34a4c6f74e3e34d94d79b4841c598955"},{url:"/ios/60.png",revision:"a0bafb14845918b3819f4cbf2a3fc893"},{url:"/ios/64.png",revision:"3ba62e79a5d431985792c54106685920"},{url:"/ios/72.png",revision:"8bb948b0d9ed1584dc5d3dff47797e75"},{url:"/ios/76.png",revision:"59e2dde31dae330520885b40bca686a4"},{url:"/ios/80.png",revision:"a3ac0af1c412e6a8a9ff800c72aef6e0"},{url:"/ios/87.png",revision:"6216cf612f89b116b3dcc6e3e6c89c9c"},{url:"/manifest.json",revision:"26eef9231be6bfa54fabd2c452808650"},{url:"/next.svg",revision:"8e061864f388b47f33a1c3780831193e"},{url:"/vercel.svg",revision:"61c6b19abff40ea7acd577be818f3976"},{url:"/windows11/LargeTile.scale-100.png",revision:"ec011e196177145ffe6164e584a79c0c"},{url:"/windows11/LargeTile.scale-125.png",revision:"77fef95fa79564a914b0454ca22c7e76"},{url:"/windows11/LargeTile.scale-150.png",revision:"6864cc0421aaeb247308032b3d9a64f5"},{url:"/windows11/LargeTile.scale-200.png",revision:"a24059dccb7d1125f4b9b2a876f1df70"},{url:"/windows11/LargeTile.scale-400.png",revision:"e3da6ead57b7269de227bc41deb9b561"},{url:"/windows11/SmallTile.scale-100.png",revision:"d8e89cc302ec7d45ecff940c3e41d07e"},{url:"/windows11/SmallTile.scale-125.png",revision:"00bab15147d07c31badde2186dc07af1"},{url:"/windows11/SmallTile.scale-150.png",revision:"1665b9f99465d40139ff49be092ce418"},{url:"/windows11/SmallTile.scale-200.png",revision:"32b4114e9213bcab099775f1d172a71e"},{url:"/windows11/SmallTile.scale-400.png",revision:"74acdd56fb857aa796e1cce37d75a087"},{url:"/windows11/SplashScreen.scale-100.png",revision:"33acaa2eeef76d6e116d03cfba615286"},{url:"/windows11/SplashScreen.scale-125.png",revision:"5fabdad09950b8e264d38fdedd744560"},{url:"/windows11/SplashScreen.scale-150.png",revision:"e067816959bd89824ea6acd812c3f36e"},{url:"/windows11/SplashScreen.scale-200.png",revision:"15370cfa939d4b502b3d98a3397c460b"},{url:"/windows11/SplashScreen.scale-400.png",revision:"ae35a940fd92d7f84e3f91674464e321"},{url:"/windows11/Square150x150Logo.scale-100.png",revision:"b0839790003b70fd99c985cb43006e57"},{url:"/windows11/Square150x150Logo.scale-125.png",revision:"56ac6a95fe483a039b76e3928599d812"},{url:"/windows11/Square150x150Logo.scale-150.png",revision:"b27270d74ab4d88d6a7477f5ea72a912"},{url:"/windows11/Square150x150Logo.scale-200.png",revision:"3a1edaccc4aaa56948098e1a72d7b48f"},{url:"/windows11/Square150x150Logo.scale-400.png",revision:"2dc2a2eac52d27eeda1fb3f4ad4b693f"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-16.png",revision:"dbc90150e73724d976f86be0488ba868"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-20.png",revision:"8052204b1ee070eba430b870d2e79197"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-24.png",revision:"897558404a9980880afcca758ed08bb1"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-256.png",revision:"5904a02bac7f76ce6dd228e7dfc9446b"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-30.png",revision:"28f64113084a86d60fc0da094c6feb3e"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-32.png",revision:"21dfda5300e60a6945b450c0adf477aa"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-36.png",revision:"173f7a803af5712c50f2035145976141"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-40.png",revision:"91db1a851d33411b140488034e676ada"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-44.png",revision:"ccc93b30e1a26c2c354d1b3d591ac0a4"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-48.png",revision:"8c26e0175d7b2e23fccd5cb0dc1272c3"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-60.png",revision:"2151c54bec93c6d27689a3c4bcaf322e"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-64.png",revision:"89fef1d31d359ea53b0c6fd9922cbeac"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-72.png",revision:"4eb433383becce912c6e6f0444c9b1e2"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-80.png",revision:"566e427607868d0d185edd1cb5cf90a2"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-96.png",revision:"f3bd696e26f7c0886031d102e8302eef"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-16.png",revision:"dbc90150e73724d976f86be0488ba868"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-20.png",revision:"8052204b1ee070eba430b870d2e79197"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-24.png",revision:"897558404a9980880afcca758ed08bb1"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-256.png",revision:"5904a02bac7f76ce6dd228e7dfc9446b"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-30.png",revision:"28f64113084a86d60fc0da094c6feb3e"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-32.png",revision:"21dfda5300e60a6945b450c0adf477aa"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-36.png",revision:"173f7a803af5712c50f2035145976141"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-40.png",revision:"91db1a851d33411b140488034e676ada"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-44.png",revision:"ccc93b30e1a26c2c354d1b3d591ac0a4"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-48.png",revision:"8c26e0175d7b2e23fccd5cb0dc1272c3"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-60.png",revision:"2151c54bec93c6d27689a3c4bcaf322e"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-64.png",revision:"89fef1d31d359ea53b0c6fd9922cbeac"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-72.png",revision:"4eb433383becce912c6e6f0444c9b1e2"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-80.png",revision:"566e427607868d0d185edd1cb5cf90a2"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-96.png",revision:"f3bd696e26f7c0886031d102e8302eef"},{url:"/windows11/Square44x44Logo.scale-100.png",revision:"ccc93b30e1a26c2c354d1b3d591ac0a4"},{url:"/windows11/Square44x44Logo.scale-125.png",revision:"d6a7f808d44e31c99a214533cdac2d33"},{url:"/windows11/Square44x44Logo.scale-150.png",revision:"615b7ca9427b2685108d54dfd76dde6f"},{url:"/windows11/Square44x44Logo.scale-200.png",revision:"e0e47be7796d3a9af17318f282c38771"},{url:"/windows11/Square44x44Logo.scale-400.png",revision:"6ebaaf095c228ccb74427885fed60b8c"},{url:"/windows11/Square44x44Logo.targetsize-16.png",revision:"dbc90150e73724d976f86be0488ba868"},{url:"/windows11/Square44x44Logo.targetsize-20.png",revision:"8052204b1ee070eba430b870d2e79197"},{url:"/windows11/Square44x44Logo.targetsize-24.png",revision:"897558404a9980880afcca758ed08bb1"},{url:"/windows11/Square44x44Logo.targetsize-256.png",revision:"5904a02bac7f76ce6dd228e7dfc9446b"},{url:"/windows11/Square44x44Logo.targetsize-30.png",revision:"28f64113084a86d60fc0da094c6feb3e"},{url:"/windows11/Square44x44Logo.targetsize-32.png",revision:"21dfda5300e60a6945b450c0adf477aa"},{url:"/windows11/Square44x44Logo.targetsize-36.png",revision:"173f7a803af5712c50f2035145976141"},{url:"/windows11/Square44x44Logo.targetsize-40.png",revision:"91db1a851d33411b140488034e676ada"},{url:"/windows11/Square44x44Logo.targetsize-44.png",revision:"ccc93b30e1a26c2c354d1b3d591ac0a4"},{url:"/windows11/Square44x44Logo.targetsize-48.png",revision:"8c26e0175d7b2e23fccd5cb0dc1272c3"},{url:"/windows11/Square44x44Logo.targetsize-60.png",revision:"2151c54bec93c6d27689a3c4bcaf322e"},{url:"/windows11/Square44x44Logo.targetsize-64.png",revision:"89fef1d31d359ea53b0c6fd9922cbeac"},{url:"/windows11/Square44x44Logo.targetsize-72.png",revision:"4eb433383becce912c6e6f0444c9b1e2"},{url:"/windows11/Square44x44Logo.targetsize-80.png",revision:"566e427607868d0d185edd1cb5cf90a2"},{url:"/windows11/Square44x44Logo.targetsize-96.png",revision:"f3bd696e26f7c0886031d102e8302eef"},{url:"/windows11/StoreLogo.scale-100.png",revision:"5c04be75f123efacf2a9c6ffe4d610e4"},{url:"/windows11/StoreLogo.scale-125.png",revision:"1317eca23952c1e07f522bf62b66c5cb"},{url:"/windows11/StoreLogo.scale-150.png",revision:"fac9aba8135872b582a574a3ed9a0f93"},{url:"/windows11/StoreLogo.scale-200.png",revision:"98b348988f167936734095a47d8fbf26"},{url:"/windows11/StoreLogo.scale-400.png",revision:"45ae4bfd985244bcc3bce1ea17ddfa04"},{url:"/windows11/Wide310x150Logo.scale-100.png",revision:"9606ed82ad87956c2c9dee9a02efe8ff"},{url:"/windows11/Wide310x150Logo.scale-125.png",revision:"ce692800bf4863a7706010e97b82bf47"},{url:"/windows11/Wide310x150Logo.scale-150.png",revision:"988246f2e5f29d4473f6686a64f7d6fb"},{url:"/windows11/Wide310x150Logo.scale-200.png",revision:"33acaa2eeef76d6e116d03cfba615286"},{url:"/windows11/Wide310x150Logo.scale-400.png",revision:"15370cfa939d4b502b3d98a3397c460b"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:a,event:s,state:i})=>a&&"opaqueredirect"===a.type?new Response(a.body,{status:200,statusText:"OK",headers:a.headers}):a}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const a=e.pathname;return!a.startsWith("/api/auth/")&&!!a.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
