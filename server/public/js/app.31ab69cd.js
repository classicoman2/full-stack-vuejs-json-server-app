(function(t){function e(e){for(var o,a,i=e[0],c=e[1],u=e[2],l=0,f=[];l<i.length;l++)a=i[l],Object.prototype.hasOwnProperty.call(r,a)&&r[a]&&f.push(r[a][0]),r[a]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(t[o]=c[o]);p&&p(e);while(f.length)f.shift()();return s.push.apply(s,u||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],o=!0,a=1;a<n.length;a++){var c=n[a];0!==r[c]&&(o=!1)}o&&(s.splice(e--,1),t=i(i.s=n[0]))}return t}var o={},r={app:0},s=[];function a(t){return i.p+"js/"+({about:"about"}[t]||t)+"."+{about:"6eefba14"}[t]+".js"}function i(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(t){var e=[],n=r[t];if(0!==n)if(n)e.push(n[2]);else{var o=new Promise((function(e,o){n=r[t]=[e,o]}));e.push(n[2]=o);var s,c=document.createElement("script");c.charset="utf-8",c.timeout=120,i.nc&&c.setAttribute("nonce",i.nc),c.src=a(t);var u=new Error;s=function(e){c.onerror=c.onload=null,clearTimeout(l);var n=r[t];if(0!==n){if(n){var o=e&&("load"===e.type?"missing":e.type),s=e&&e.target&&e.target.src;u.message="Loading chunk "+t+" failed.\n("+o+": "+s+")",u.name="ChunkLoadError",u.type=o,u.request=s,n[1](u)}r[t]=void 0}};var l=setTimeout((function(){s({type:"timeout",target:c})}),12e4);c.onerror=c.onload=s,document.head.appendChild(c)}return Promise.all(e)},i.m=t,i.c=o,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)i.d(n,o,function(e){return t[e]}.bind(null,o));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/",i.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var p=u;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";n("85ec")},"1a97":function(t,e,n){},2201:function(t,e,n){"use strict";n("1a97")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",{attrs:{id:"nav"}},[n("router-link",{attrs:{to:"/"}},[t._v("Home")]),t._v(" | "),n("router-link",{attrs:{to:"/about"}},[t._v("About")])],1),n("router-view")],1)},s=[],a=(n("034f"),n("2877")),i={},c=Object(a["a"])(i,r,s,!1,null,null,null),u=c.exports,l=(n("4989"),n("ab8b"),n("cd74"),n("d3b7"),n("8c4f")),p=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"home"},[o("img",{attrs:{alt:"Vue logo",src:n("cf05")}}),o("HelloWorld",{attrs:{msg:"Welcome to Your Vue.js App"}})],1)},f=[],d=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"hello"},[n("h1",[t._v(t._s(t.msg))]),n("button",{staticClass:"btn btn-primary",on:{click:t.addPost}},[t._v(" Add Post (with random contents) ")]),n("table",{staticClass:"table"},[n("thead",[n("tr",[n("th",{attrs:{scope:"col"}},[t._v("#")]),n("th",{attrs:{scope:"col"}},[t._v(" Title "),n("i",{staticClass:"bi bi-arrow-down-square",on:{click:function(e){return t.orderPosts("desc")}}}),n("i",{staticClass:"bi bi-arrow-up-square",on:{click:function(e){return t.orderPosts("asc")}}})]),n("th",{attrs:{scope:"col"}},[t._v("Contents")])])]),n("tbody",t._l(t.postsUpdated,(function(e){return n("tr",{key:e.id},[n("th",{attrs:{scope:"row"}},[t._v(t._s(e.id))]),n("td",[t._v(t._s(e.title))]),n("td",[t._v(t._s(e.contents))]),n("td",{on:{click:function(n){return t.deletePost(e.id)}}},[n("i",{staticClass:"bi bi-trash-fill"})])])})),0)])])},h=[],m=(n("4160"),n("a434"),n("159b"),n("96cf"),n("1da1")),v={name:"HelloWorld",props:{msg:String},data:function(){return{posts:[]}},computed:{postsUpdated:function(){return this.posts}},mounted:function(){this.getPosts()},methods:{getPosts:function(){var t=this;fetch("http://localhost:3000/posts",{method:"GET"}).then((function(t){return t.json()})).then((function(e){t.posts=e}))},deletePost:function(t){var e=this;fetch("http://localhost:3000/posts/".concat(t),{method:"DELETE"}).then((function(t){return t.json()})).then((function(){e.posts.forEach((function(n,o){n.id!=t||e.posts.splice(o,1)}))}))},addPost:function(){var t="https://my-json-server.typicode.com/classicoman2/fakeRESTserver/posts",e=Math.floor(3*Math.random())+1;function n(t){return o.apply(this,arguments)}function o(){return o=Object(m["a"])(regeneratorRuntime.mark((function n(o){var r,s,a,i,c;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,fetch(t+"/"+e);case 2:return r=n.sent,n.next=5,r.json();case 5:return s=n.sent,a={title:s.title,contents:s.contents},n.next=9,fetch("http://localhost:3000/posts",{method:"POST",body:JSON.stringify(a),headers:{"Content-type":"application/json; charset=UTF-8"}});case 9:return i=n.sent,n.next=12,i.json();case 12:c=n.sent,console.info("Post Creat:",c),o.push(a);case 15:case"end":return n.stop()}}),n)}))),o.apply(this,arguments)}n(this.posts)},orderPosts:function(t){var e=0;if("desc"==t)e=-1;else{if("asc"!=t)throw new Error("method OrderPosts, invalid parameter");e=1}this.posts.sort((function(t,n){return t.title<n.title?e:t.title>n.title?-e:0}))}}},b=v,g=(n("2201"),Object(a["a"])(b,d,h,!1,null,"685ed5a4",null)),y=g.exports,_={name:"Home",components:{HelloWorld:y}},w=_,j=Object(a["a"])(w,p,f,!1,null,null,null),P=j.exports;o["a"].use(l["a"]);var O=[{path:"/",name:"Home",component:P},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}}],x=new l["a"]({mode:"history",base:"/",routes:O}),k=x;o["a"].config.productionTip=!1,new o["a"]({router:k,render:function(t){return t(u)}}).$mount("#app")},"85ec":function(t,e,n){},cf05:function(t,e,n){t.exports=n.p+"img/logo.82b9c7a5.png"}});
//# sourceMappingURL=app.31ab69cd.js.map