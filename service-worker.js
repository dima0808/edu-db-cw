/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "03-01.jpg",
    "revision": "61ccd31b9a99e4dc0b2115d7a181dc71"
  },
  {
    "url": "03-02.jpg",
    "revision": "0e42c83dcc174ebfdbb611ab0956fcd9"
  },
  {
    "url": "03-03.jpg",
    "revision": "dd23072447e0798b536bd162235d14c3"
  },
  {
    "url": "03-04.jpg",
    "revision": "661a64ee2776ef94b23ba82f7ee50969"
  },
  {
    "url": "03-05.jpg",
    "revision": "6f52dcb2ccb40af28a65a4b796eb918d"
  },
  {
    "url": "03-06.jpg",
    "revision": "2643698d9412e41a449c1edee719fb29"
  },
  {
    "url": "03-07.jpg",
    "revision": "c4a788f41d803f8b9bddb5adc0513be6"
  },
  {
    "url": "03-08.jpg",
    "revision": "4c810503ec4bc1adfd29904056fc2886"
  },
  {
    "url": "03-09.jpg",
    "revision": "9c798bc91f80f84b6b0e7f7fba26d65b"
  },
  {
    "url": "03-10.jpg",
    "revision": "bb5b18b65591e9d058edbc14b02c6ba5"
  },
  {
    "url": "03-11.jpg",
    "revision": "6a88d8f48c63e79c72ec45ae84a8d9ff"
  },
  {
    "url": "04-01.jpg",
    "revision": "4bbafd5dd4000461cef55f669139b17b"
  },
  {
    "url": "05-01.jpg",
    "revision": "8d54b111a4b6b5fb4cd39e4c7261b927"
  },
  {
    "url": "06-01.jpg",
    "revision": "cf2dab320c48c5ead6fe105863629e4e"
  },
  {
    "url": "06-02.jpg",
    "revision": "aa286f8fd6540b7a7b6d36392a63f505"
  },
  {
    "url": "06-03.jpg",
    "revision": "239fa5fb2a9063f1e261ae2db81fceef"
  },
  {
    "url": "06-04.jpg",
    "revision": "a2dbf924afd6a8580ce4a2d2bcd6e049"
  },
  {
    "url": "06-05.jpg",
    "revision": "22f4f542b283cdc3d027eb664424d3c8"
  },
  {
    "url": "06-06.jpg",
    "revision": "12017ddd5b9179e8f53e93044acee998"
  },
  {
    "url": "06-07.jpg",
    "revision": "1ded65fc56da9f0008ae4ef2eacc8175"
  },
  {
    "url": "1.jpg",
    "revision": "f1ea37a492254cc85dd6fd1e89b1a6b4"
  },
  {
    "url": "1.png",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "12-01.jpg",
    "revision": "cc85570b3c89f73291af87791115986a"
  },
  {
    "url": "12-02.jpg",
    "revision": "f2b24c5c4beb21d5302c64b59445927a"
  },
  {
    "url": "12-03.jpg",
    "revision": "61fe98dff39d0887978deb0af605571b"
  },
  {
    "url": "12-04.jpg",
    "revision": "ff2468e7fbb03e034be0ffd7312dc7d9"
  },
  {
    "url": "12-05.jpg",
    "revision": "a126fe17514d81279c677666fd459d9d"
  },
  {
    "url": "12-06.jpg",
    "revision": "c25686b2f77ac7c5a2d4706f43e40132"
  },
  {
    "url": "12-07.jpg",
    "revision": "de17f3eb1df503250bcf1a5a4b533eec"
  },
  {
    "url": "12-08.jpg",
    "revision": "f3b58c768c18919a6fa2ab59ea6627db"
  },
  {
    "url": "13-01.jpg",
    "revision": "b22f06060909d43d796a8ffd4b0743a0"
  },
  {
    "url": "13-02.jpg",
    "revision": "2d2bca0518716a8dfaf37ef5c15e54ee"
  },
  {
    "url": "13-03.jpg",
    "revision": "fec1a3db903dc05c462fb6f384a400d6"
  },
  {
    "url": "2.jpg",
    "revision": "572bc2e4ef3efb7c81bbbcac5f09147b"
  },
  {
    "url": "3.jpg",
    "revision": "248757985bb49f73624c6923057530ac"
  },
  {
    "url": "4.jpg",
    "revision": "407c52446e2e463c4f8e494d52dbe485"
  },
  {
    "url": "404.html",
    "revision": "53ae80354ff68da9b6963321bdb50c2a"
  },
  {
    "url": "5.jpg",
    "revision": "7e861769b640afa00fcc0ac4b72d9c52"
  },
  {
    "url": "assets/css/0.styles.10a1179b.css",
    "revision": "c29d50e984dabf68865d4274afab6926"
  },
  {
    "url": "assets/img/DELETE_deletePermissions_admin_1.c27f6d90.png",
    "revision": "c27f6d90cf6d4d38e0d651d2f45e46df"
  },
  {
    "url": "assets/img/DELETE_deletePermissions_admin_2.b80ea310.png",
    "revision": "b80ea310324604650bb96107aa9f1f13"
  },
  {
    "url": "assets/img/GET_allData.8e3d1edb.png",
    "revision": "8e3d1edb7d131360bd6a9c854eab0221"
  },
  {
    "url": "assets/img/GET_allRequests_admin.b8091be9.png",
    "revision": "b8091be9461083358c13452ef6d483f6"
  },
  {
    "url": "assets/img/GET_allRequests.24d78636.png",
    "revision": "24d786362e25dd2bab5e431e0303ebd6"
  },
  {
    "url": "assets/img/GET_user.2d4d4bf5.png",
    "revision": "2d4d4bf5134e6601f317669dfcd1225d"
  },
  {
    "url": "assets/img/PATCH_addPermissions_admin_1.ac313e33.png",
    "revision": "ac313e3397f50887d2f84f9c29575535"
  },
  {
    "url": "assets/img/PATCH_addPermissions_admin_2.8142bec8.png",
    "revision": "8142bec81e782286c8862812701ccad8"
  },
  {
    "url": "assets/img/PATCH_user_1.521ca368.png",
    "revision": "521ca368f354a69d0d0df4372996bdf2"
  },
  {
    "url": "assets/img/PATCH_user_2.4200b3e5.png",
    "revision": "4200b3e5970992d6394ce2bdc3b5c90f"
  },
  {
    "url": "assets/img/POST_approveRequest_admin.cc4c76d6.png",
    "revision": "cc4c76d6c1be3072cbe4c7728edf5678"
  },
  {
    "url": "assets/img/POST_denyRequest_admin.41405bcf.png",
    "revision": "41405bcf7318875ad65f93b5d09a7dfc"
  },
  {
    "url": "assets/img/POST_signin.46bc4ddf.png",
    "revision": "46bc4ddf03767343e724ea6407fbdf5a"
  },
  {
    "url": "assets/img/POST_signup_1.6c686061.png",
    "revision": "6c6860617eea5fcc59c29f90eedc36db"
  },
  {
    "url": "assets/img/POST_signup_2.582e76c3.png",
    "revision": "582e76c37edcf788fce79bb948ec3eae"
  },
  {
    "url": "assets/img/POST_uploadRequest.01d35001.png",
    "revision": "01d35001b365f4b4dc53f4dc551f0f6b"
  },
  {
    "url": "assets/img/relational_schema.094ee927.png",
    "revision": "094ee927e01563b4c7f54c42bb73eeb8"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.5d5ae146.js",
    "revision": "00695da901bc8334245c3e8d837406f2"
  },
  {
    "url": "assets/js/11.a130a9bb.js",
    "revision": "bf5c542673e83816911a85f2a2a5b9db"
  },
  {
    "url": "assets/js/12.d70ca428.js",
    "revision": "b2f41ed984dc64933d4e96c4d27b86d6"
  },
  {
    "url": "assets/js/13.2fc6cb21.js",
    "revision": "7c5fd4c7e31f6160fa04e362c62e186e"
  },
  {
    "url": "assets/js/14.0d8ad425.js",
    "revision": "a080fb65b9a770be6799146570144f83"
  },
  {
    "url": "assets/js/15.1e73ce32.js",
    "revision": "70fdb960f181bd77336593444cd27337"
  },
  {
    "url": "assets/js/16.62bb69bb.js",
    "revision": "1e2182eedd8dbf71c7b603a5ef23a2a2"
  },
  {
    "url": "assets/js/17.16d9b5b7.js",
    "revision": "4f14398928e9dc43545489eadc22981e"
  },
  {
    "url": "assets/js/18.e5cd7bd6.js",
    "revision": "e8a1fefc6c6765271a99214fbf0e7e78"
  },
  {
    "url": "assets/js/19.720104b8.js",
    "revision": "63a7c9d846f620cb9ecc1420cde7b9e8"
  },
  {
    "url": "assets/js/2.333f73a7.js",
    "revision": "427c786ada5b62764cbd3357a578a155"
  },
  {
    "url": "assets/js/20.2df80867.js",
    "revision": "b0d8ea0d9eb33d7b0699e953aefbb497"
  },
  {
    "url": "assets/js/21.792dd41f.js",
    "revision": "a0aec64526a20f96c73c8c5ae5e5e8e4"
  },
  {
    "url": "assets/js/22.b09890c5.js",
    "revision": "a37587cf3b19a74b27f478910246255f"
  },
  {
    "url": "assets/js/23.e6761d11.js",
    "revision": "e2cc7d23eb437583124d04e3cc685627"
  },
  {
    "url": "assets/js/24.d6a3cfa5.js",
    "revision": "0b137058e567a670b3be812f28ad4db0"
  },
  {
    "url": "assets/js/26.d747499e.js",
    "revision": "af46a34e1ee9b3c043c126040c7781de"
  },
  {
    "url": "assets/js/3.7ba8655e.js",
    "revision": "47b84e1a51b2f895d47ec9316f6c25aa"
  },
  {
    "url": "assets/js/4.33bc2aee.js",
    "revision": "b9a203cda18c843de7319774690404e4"
  },
  {
    "url": "assets/js/5.ead50b78.js",
    "revision": "0f3bfca4f624dfc4b07108c0e9301e8e"
  },
  {
    "url": "assets/js/6.f4318144.js",
    "revision": "b356efcdd82c6b65ff2d260221772ffb"
  },
  {
    "url": "assets/js/7.4666a7ce.js",
    "revision": "d4438ea2eef568db76faba19fef7dafe"
  },
  {
    "url": "assets/js/8.c6e97697.js",
    "revision": "d3bfe60e71f974161cc96eb02690ef8b"
  },
  {
    "url": "assets/js/9.5478b07d.js",
    "revision": "7dbc5b514e4ced9aa087ce8060e203b7"
  },
  {
    "url": "assets/js/app.3a0a0bf6.js",
    "revision": "1ee2edf40bbd5f30bcc4c4a387485b6c"
  },
  {
    "url": "conclusion/index.html",
    "revision": "14783a5e8f06eadf4842935f5d4c6dd9"
  },
  {
    "url": "design/index.html",
    "revision": "f6687b752feafa946be528e54ff5ce42"
  },
  {
    "url": "index.html",
    "revision": "d7f7ae176f4994685c4205030efe5d4b"
  },
  {
    "url": "intro/index.html",
    "revision": "7c4605b7a85b98ce8d19a64304021c78"
  },
  {
    "url": "license.html",
    "revision": "70a2edbdcd1a16b29dc6ec11e14ab937"
  },
  {
    "url": "myAvatar.png",
    "revision": "b76db1e62eb8e7fca02a487eb3eac10c"
  },
  {
    "url": "requirements/index.html",
    "revision": "405e9ce237226f441de2ad62b6f8a9ec"
  },
  {
    "url": "requirements/stakeholders-needs.html",
    "revision": "7ce63700920dc74212006f468e0c4fed"
  },
  {
    "url": "requirements/state-of-the-art.html",
    "revision": "047ecfa32c2c730d5d4496ce635c4964"
  },
  {
    "url": "software/index.html",
    "revision": "b5ebf55202e82a8d0c5a01ecba9d9a84"
  },
  {
    "url": "test/index.html",
    "revision": "04482948107c590ddf336535a54e8454"
  },
  {
    "url": "use cases/index.html",
    "revision": "1fcc1799bfdc45bb42b5520d41885504"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
