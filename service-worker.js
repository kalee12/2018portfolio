"use strict";var precacheConfig=[["/index.html","1e82a54d36b75d61a8a82771589934b1"],["/static/css/main.ef69c1ff.css","ec4a2f113837170823292993cd6428ae"],["/static/js/main.e7c1fea8.js","b86c1a3625fed9557f64a2347db949a6"],["/static/media/HH_icon_color.355823b4.svg","355823b41da1ceba9e061a6d9e352e71"],["/static/media/HH_icon_w.5f12e099.svg","5f12e099073304773e4cf8fabf44c7d8"],["/static/media/SH_icon_color.3e81bda0.svg","3e81bda0fc8051f064b6c3f139fc4ca5"],["/static/media/SH_icon_w.23268204.svg","23268204c4f3ea9402f6b0b942e75f41"],["/static/media/aevus_icon_color.6e02048b.svg","6e02048bf4c0cb148d7c551e473fe999"],["/static/media/aevus_icon_w.e8dfc542.svg","e8dfc54210636dbd37587a3676a16701"],["/static/media/ambulo_icon_color.6127cb15.svg","6127cb1505dc0804ca4bfc4010a36a42"],["/static/media/ambulo_icon_w.ce670962.svg","ce6709626c543f0099bc2dc1aeeaa24c"],["/static/media/chromatic_icon_color.d6e2f5f9.svg","d6e2f5f94462a242bde58c2854f0f771"],["/static/media/chromatic_icon_w.8eec895b.svg","8eec895bb8f87ca178a48f94c89265a8"],["/static/media/default_icon_b.df8b5a93.svg","df8b5a93284e692c01b18cb9f5a5b936"],["/static/media/github.ea8bb7f4.svg","ea8bb7f4b65e7f8b2438d45463270d82"],["/static/media/resume.aad591e1.svg","aad591e107aa2dc5173511a89a35d4bf"],["/static/media/shift_icon_color.dd6b862d.svg","dd6b862d00b69c9805b0cf6879820037"],["/static/media/shift_icon_w.3d1a01bd.svg","3d1a01bd818cd565095eda8a62d33ec9"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,a,n){var c=new URL(e);return n&&c.pathname.match(n)||(c.search+=(c.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),c.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return a.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),c=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),c]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(n){return setOfCachedUrls(n).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return n.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!a.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,a=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),n="index.html";(e=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,n),e=urlsToCacheKeys.has(a));var c="/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(a=new URL(c,self.location).toString(),e=urlsToCacheKeys.has(a)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});