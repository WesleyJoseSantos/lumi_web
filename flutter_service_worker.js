'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
".git/config": "8852a526e247290296135c90cae2e043",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "754015df593b3a7dc504bde7f026281c",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "37433bee314ea454fe69c23fe2f4f57e",
".git/logs/refs/heads/master": "37433bee314ea454fe69c23fe2f4f57e",
".git/logs/refs/remotes/origin/master": "b791cee0cba1fb98b45d6d1bb71c830d",
".git/objects/01/bcca7d1c23955f7aeda6a269b1b7f540802096": "635a6822e2a56f7f333d54c66b0234db",
".git/objects/09/6c8940f11f64dfd004531f0ba34536b59a08c5": "765c702cbd9993bbcba756dc61377e0c",
".git/objects/0c/e629ea5ca3470e007fcb5cc7a633513efd111f": "bd0ea3cefee19dc0212890b941e5deb6",
".git/objects/10/382f2ab4c3c6b4e97ece181d9e20f7aaede7ae": "bc1eaa94e1aab0f4c1c1ea480316e56a",
".git/objects/18/ca26283e0af4129e83e529b2e3eb13cb587d9d": "b8123aea2964677afa7ca70094e4a047",
".git/objects/1e/2f32cb05a10b1638380d421e190c5c38060ea7": "69852d14f3addef6dc08999605a2a661",
".git/objects/23/c68972a539b5ce436487ba08b6f051ce8008db": "e1abe4fe0558e75a455b5cb7a3f465ae",
".git/objects/2a/12dbbec60147a7a6e3bde7ec073b5b6cda6e73": "8b4a420a40388c4e6221fd50192f872e",
".git/objects/2a/758297d57b609f7315bde857ce9a1d62e10012": "654f867fe89196f9c25942405a89cf6a",
".git/objects/2f/6b27148496817ac4604455037ae0483740f626": "5ef2d8119ee771e94e9ae24103d794b0",
".git/objects/30/6dac5ed8d40c1a67b51105b2c459a386061bc3": "0a17491a92c8dee602194b7eabdb73a1",
".git/objects/35/4570823fd158444129a599a707e8369c165b2e": "dd625fe9e3100702eede16c1b3590554",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/36/dbcc9f207749342e0953b2db8f19420b77487a": "9efed0658b14756d8bf4310cbe93ce6b",
".git/objects/39/e126ff855a6c2fa7768d8d5bd5df5ece00b51d": "1a2ecc127adc0e04905d78509d4c435b",
".git/objects/3b/6a3258d1c22f00e434e0f41cfdbd623761c093": "9f40c2fda5ed72431e9a2010c47ce934",
".git/objects/40/00c450e72590d80fd754ed11a01a0ea67a01df": "21faa096f1a24f73e1befa8e51a71f2e",
".git/objects/44/fcdd85224ead437dbf6472fd20fe4c5f6b7e90": "5dcaf3d9c1cc7589ce3d3023eb3a1484",
".git/objects/45/75bd6e97d653e3c01498db97790fc8c2c25071": "bf2cb8eba08a9c201c99844de110b1e3",
".git/objects/47/227daec40f1a6b70d56016925422f4c4748760": "7ce545eb82fef8fda82fd67289aeb08a",
".git/objects/49/9329226430ed83a8edbb69d62974438369c8bd": "1e88db6d15794d534397de28d236714d",
".git/objects/4c/a2a7c226d2c3e26f0b9dde74214486d0baa896": "734657b1f27c72d07dd9e52a25c020c1",
".git/objects/50/c869e59fee940e5b39fbd4065015d6c93b05c6": "64206974c4f15ef79135a9f4d5ecea8c",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/5c/0d813b36a6bc34e7bb13c55e52c383c3de2e2a": "0d7164dcd5991c79540099ede4df1fe4",
".git/objects/5e/6fb715a5515f7d29279acdf8829da98d5ef872": "b64eb255a4820a295479e296524ee6ba",
".git/objects/60/2c7ec09b04191e479696c9167eacb27d92bf4a": "362b09c1e429d62fb61f1d47acc4e33d",
".git/objects/62/f16c83e2f831e54b2ba61fc35524ecf1c69591": "313980a0fba7dccd9f417a9960ceae8f",
".git/objects/69/df184c4cb04efd67d00e62d44e696e6baa64a5": "d1c3efa762ab7bc691f48d99e5371bbd",
".git/objects/6d/6bcb534985befdde54f3c40b84c03e74ffe7d1": "55c94299348a5f5ddb21eb0c41dc3e00",
".git/objects/7a/58a85997e98ffbe3334f33a10653b47307603d": "57bb26d0dffeef99c82ebdb8aa347bd9",
".git/objects/7f/c2fdb15fad9f5f2602a99c7665a81f739ca4da": "12b46ad72253272323508131ee0ab213",
".git/objects/83/0e3d19e7f2ff19bbb4b955e3a38e3328837e12": "4412f19a8aebd49e1c2fb821b641e232",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/f1c7ce49fe69df43f7906623602884f9be4146": "0bc6bf581d4bce3be2d94216c88a57f1",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8f/8528a05c9057faaa9683982a78576f2c308e7a": "ad37dd420631e84d32a414787652b2c9",
".git/objects/91/e74ba28a87488e5680af5f34ca5f6ed491bab4": "87a0d9b5f907034e2e617e812111c092",
".git/objects/93/3efc16367f4d99bc6f75833477185b9ceb7d94": "bc89a687dbabfe2a19a7b2889dd975c0",
".git/objects/96/5f268e91b7f468ea4ded85a8f2abcddfe1f5a9": "6cde620475753acf951a3fbb6b42aca1",
".git/objects/a0/56817c3b68bd74738c657e1764bac34bfa1b24": "a689a79d5ac67bcb67b7ecc06d505bb6",
".git/objects/a8/234e78324011301c932efde8dd789fba10495a": "5ad9ca983e505191e13f526cf3be6ade",
".git/objects/a8/eda38377e2f1a57b9705896969416fa78dafaf": "ec84d8f8315b161a0268a4c7e77bbf30",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/c9/a388fb920a57a3f0fa7841245c445684719597": "7b41af8abcc9851200abf687b8045d7c",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/d5/b54bd4a898b373f82bb1fa52b9580e7a976e3e": "943e27e1d359e2bc22daf20c70287c19",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/e0/971cd3c23dae7ededde1191cd9cc537565e2cb": "50e592a2065394e61ded2be358988d3f",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/e8/55dc987b0db3ccd24a8869a087233a0e124f27": "9b242467f4dfe05ce7d2727a68a1ea66",
".git/objects/eb/3f53f39c4bb2d15bf85c37e34da7199e7c8ab4": "9bbcca154f1aedf62226b48d86315870",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f1/b30c209a99e6dd1573520e3c231f6a57d9343a": "869520d11a65a3cb4d3c8a846a714f7c",
".git/objects/f5/a3eadc91e5bfcccdc41a8585c4b2318ac4fe9c": "2cd9bc29d814e8421d66563c216dfd86",
".git/objects/f8/7015bc3162ba46e79b379fa98fa4652e5ed0cc": "a033f3343fce2486df3870873c536c86",
".git/objects/fc/de1bb3df8c330568f07ef326d43d8ae3562897": "6e5bf2450330342c243afc3723b9c27e",
".git/refs/heads/master": "7ee7489f05e8a2dc6203c5717e3ac13f",
".git/refs/remotes/origin/master": "7ee7489f05e8a2dc6203c5717e3ac13f",
"assets/AssetManifest.bin": "998ba51e7943aaa27fd9ddc46680d1eb",
"assets/AssetManifest.json": "a5aa2333543a897cc7fa9a31a0087a3f",
"assets/assets/audio/nstorm.mp3": "cc1d44b13352cfa2c230e6926302ad30",
"assets/assets/effect.json": "3f1db1d3c9fb0b128d119f9989536b5b",
"assets/assets/images/feature-graphic.png": "9902bf70efde99d74816a8839396d982",
"assets/assets/images/icon-lumi-black.png": "999088f27e8b4705d80c45cc6b3800e9",
"assets/assets/images/icon-lumi-blue-v2.png": "2dfb0cfc851534d9bd4df2339649a8be",
"assets/assets/images/icon-lumi-blue.png": "308c299df1051b893053b52bd065485a",
"assets/assets/images/logo-lumi-black.png": "9ec1b9bfbca5614c6592ef8c76ac279c",
"assets/assets/images/logo-lumi-blue-v3.png": "7453e15318ca52b21d8ca7727bd77a31",
"assets/assets/images/logo-lumi-blue-v4.png": "923efa573f92750e9b32d8ef66a3ec4e",
"assets/assets/images/logo-lumi-blue.png": "3b079c4315edfb1c5181b620c1163aaf",
"assets/FontManifest.json": "573788c5a2c8adfd299ab61eac5a06e5",
"assets/fonts/MaterialIcons-Regular.otf": "a78111b3a00771142d719ac52bc0b7a8",
"assets/NOTICES": "662255b2e61cf803bbd55c4693cdaf17",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "c6ac80bdc5b2896345377c9439f91d54",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "2f141ffd94f3ef0ed716615fd537e708",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "0ebc4e7ca5e040da671730a59b181135",
"assets/packages/weather_icons/lib/fonts/weathericons-regular-webfont.ttf": "b488ac89ad51a3869cb44f6c47f648a4",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "bbf39143dfd758d8d847453b120c8ebb",
"canvaskit/canvaskit.wasm": "42df12e09ecc0d5a4a34a69d7ee44314",
"canvaskit/chromium/canvaskit.js": "96ae916cd2d1b7320fff853ee22aebb0",
"canvaskit/chromium/canvaskit.wasm": "be0e3b33510f5b7b0cc76cc4d3e50048",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "1a074e8452fe5e0d02b112e22cdcf455",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "aee9f850a5c52edf0f7c3d66b4bb517c",
"/": "aee9f850a5c52edf0f7c3d66b4bb517c",
"main.dart.js": "b556fce65fc663126af6a3f957731bab",
"manifest.json": "b62582220b6886e74c9ee3c8435d500a",
"version.json": "38e87b0a26dcb6db140372d0499eb4d7"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
