(function(t){function e(e){for(var o,s,i=e[0],c=e[1],l=e[2],u=0,f=[];u<i.length;u++)s=i[u],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&f.push(r[s][0]),r[s]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(t[o]=c[o]);p&&p(e);while(f.length)f.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],o=!0,s=1;s<n.length;s++){var c=n[s];0!==r[c]&&(o=!1)}o&&(a.splice(e--,1),t=i(i.s=n[0]))}return t}var o={},r={app:0},a=[];function s(t){return i.p+"js/"+({about:"about"}[t]||t)+"."+{about:"48e50bd2"}[t]+".js"}function i(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(t){var e=[],n=r[t];if(0!==n)if(n)e.push(n[2]);else{var o=new Promise((function(e,o){n=r[t]=[e,o]}));e.push(n[2]=o);var a,c=document.createElement("script");c.charset="utf-8",c.timeout=120,i.nc&&c.setAttribute("nonce",i.nc),c.src=s(t);var l=new Error;a=function(e){c.onerror=c.onload=null,clearTimeout(u);var n=r[t];if(0!==n){if(n){var o=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src;l.message="Loading chunk "+t+" failed.\n("+o+": "+a+")",l.name="ChunkLoadError",l.type=o,l.request=a,n[1](l)}r[t]=void 0}};var u=setTimeout((function(){a({type:"timeout",target:c})}),12e4);c.onerror=c.onload=a,document.head.appendChild(c)}return Promise.all(e)},i.m=t,i.c=o,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)i.d(n,o,function(e){return t[e]}.bind(null,o));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/",i.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=e,c=c.slice();for(var u=0;u<c.length;u++)e(c[u]);var p=l;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"01f7":function(t,e,n){},"034f":function(t,e,n){"use strict";n("85ec")},"246e":function(t,e,n){"use strict";n("6d4d")},2504:function(t,e,n){"use strict";n("56a8")},"40d9":function(t,e,n){t.exports=n.p+"img/bootstrap-social-logo.d012e3c7.png"},"53d7":function(t,e,n){"use strict";n("01f7")},"56a8":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("Header"),n("router-view"),n("Footer")],1)},a=[],s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",[n("nav",{staticClass:"navbar navbar-expand-lg navbar-light bg-light"},[t._m(0),n("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarSupportedContent"}},[n("ul",{staticClass:"navbar-nav mr-auto"},[n("li",{staticClass:"nav-item active"},[n("a",{staticClass:"nav-link",attrs:{href:"#"}},[n("router-link",{attrs:{to:"/"}},[t._v("Home")])],1)]),n("li",{staticClass:"nav-item"},[n("a",{staticClass:"nav-link",attrs:{href:"#"}},[n("router-link",{attrs:{to:"/about"}},[t._v("About")])],1)]),t._m(1),t._m(2)]),n("form",{staticClass:"form-inline my-2 my-lg-0",on:{submit:function(t){t.preventDefault()}}},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.valorFiltre,expression:"valorFiltre"}],staticClass:"form-control mr-sm-2",attrs:{type:"search",placeholder:"Search","aria-label":"Search"},domProps:{value:t.valorFiltre},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.filtrarFiles(e)},input:function(e){e.target.composing||(t.valorFiltre=e.target.value)}}}),n("router-link",{attrs:{to:{name:"filtre",params:{f:t.valorFiltre}}}},[t._v("Filtrar")])],1)])])])},i=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"}},[n("span",{staticClass:"navbar-toggler-icon"})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",{staticClass:"nav-item dropdown"},[n("a",{staticClass:"nav-link dropdown-toggle",attrs:{href:"#",id:"navbarDropdown",role:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}},[t._v(" Dropdown ")]),n("div",{staticClass:"dropdown-menu",attrs:{"aria-labelledby":"navbarDropdown"}},[n("a",{staticClass:"dropdown-item",attrs:{href:"#"}},[t._v("Action")]),n("a",{staticClass:"dropdown-item",attrs:{href:"#"}},[t._v("Another action")]),n("div",{staticClass:"dropdown-divider"}),n("a",{staticClass:"dropdown-item",attrs:{href:"#"}},[t._v("Something else here")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",{staticClass:"nav-item"},[n("a",{staticClass:"nav-link disabled",attrs:{href:"#"}},[t._v("Disabled")])])}],c=(n("d3b7"),n("8c4f")),l=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[t._m(0),n("MainPage",{attrs:{msg:"Welcome to Your Vue.js + Bootstrap 4 App"}})],1)},u=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"images mb-4"},[o("img",{staticClass:"img-fluid img-thumbnail mx-4",attrs:{alt:"Vue logo",src:n("e669")}}),o("img",{staticClass:"img-fluid img-thumbnail mx-4",attrs:{alt:"Bootstrap logo",src:n("40d9")}})])}],p=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"hello"},[n("h1",[t._v(t._s(t.msg))]),n("button",{staticClass:"btn btn-primary mb-2",on:{click:t.addPost}},[t._v(" Add Post (with random contents) ")]),n("table",{staticClass:"table table-striped"},[n("thead",[n("tr",[n("th",{attrs:{scope:"col"}},[t._v("#")]),n("th",{attrs:{scope:"col"}},[t._v(" Title "),n("i",{staticClass:"bi bi-arrow-down-square",on:{click:function(e){return t.orderPosts("desc")}}}),n("i",{staticClass:"bi bi-arrow-up-square",on:{click:function(e){return t.orderPosts("asc")}}})]),n("th",{attrs:{scope:"col"}},[t._v("Contents")])])]),n("tbody",t._l(t.postsUpdated,(function(e){return n("tr",{key:e.id},[n("th",{attrs:{scope:"row"}},[t._v(t._s(e.id))]),n("td",[n("b",[t._v(t._s(e.title))])]),n("td",[n("span",[t._v(t._s(e.contents))])]),n("td",[n("router-link",{attrs:{to:{name:"post",params:{id:e.id}}}},[t._v("Post")])],1),n("td",{on:{click:function(n){return t.deletePost(e.id)}}},[n("i",{staticClass:"bi bi-trash-fill"})])])})),0)])])},f=[],d=(n("4de4"),n("4160"),n("c975"),n("a434"),n("159b"),n("96cf"),n("1da1")),m={name:"MainPage",props:{msg:String,f:String},watch:{$route:function(t,e){console.info("to = ",t),console.info("from = ",e);var n=t.params.f;this.getPosts(n)}},data:function(){return{posts:[]}},computed:{postsUpdated:function(){return this.posts}},mounted:function(){this.getPosts(" "),this.$on("filterEvent",(function(){console.log("aaa")}))},beforeUpdated:function(){},updated:function(){},methods:{getPosts:function(t){var e=this,n=window.location.href+"posts";console.log(n),fetch(n,{method:"GET"}).then((function(t){return t.json()})).then((function(n){console.log(t),e.posts=" "==t?n:n.filter((function(e){return-1!=e.title.indexOf(t)}))}))},deletePost:function(t){var e=this;fetch("http://localhost:5000/posts/".concat(t),{method:"DELETE"}).then((function(t){return t.json()})).then((function(){e.posts.forEach((function(n,o){n.id!=t||e.posts.splice(o,1)}))}))},addPost:function(){var t="https://my-json-server.typicode.com/classicoman2/fakeRESTserver/posts",e=Math.floor(3*Math.random())+1;function n(t){return o.apply(this,arguments)}function o(){return o=Object(d["a"])(regeneratorRuntime.mark((function n(o){var r,a,s,i,c;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,fetch(t+"/"+e);case 2:return r=n.sent,n.next=5,r.json();case 5:return a=n.sent,s={title:a.title,contents:a.contents},n.next=9,fetch("http://localhost:5000/posts",{method:"POST",body:JSON.stringify(s),headers:{"Content-type":"application/json; charset=UTF-8"}});case 9:return i=n.sent,n.next=12,i.json();case 12:c=n.sent,console.info("Post Creat:",c),o.push(c);case 15:case"end":return n.stop()}}),n)}))),o.apply(this,arguments)}n(this.posts)},orderPosts:function(t){var e=0;if("desc"==t)e=-1;else{if("asc"!=t)throw new Error("method OrderPosts, invalid parameter");e=1}this.posts.sort((function(t,n){return t.title<n.title?e:t.title>n.title?-e:0}))},filterPosts:function(t){this.posts.filter((function(e){return-1!=e.title.indexOf(t)}))}}},v=m,h=(n("a1d4"),n("2877")),b=Object(h["a"])(v,p,f,!1,null,"7b13571c",null),g=b.exports,_={name:"Home",components:{MainPage:g}},C=_,w=(n("2504"),Object(h["a"])(C,l,u,!1,null,"04868a74",null)),y=w.exports,x=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"post"},[n("form",{staticClass:"needs-validation",attrs:{novalidate:""}},[n("div",{staticClass:"row"},[n("label",{staticClass:"col-5",attrs:{for:"firstName"}},[t._v("Title")]),n("input",{staticClass:"col-7 form-control",attrs:{type:"text"},domProps:{value:t.post.title}})]),n("div",{staticClass:"row"},[n("label",{staticClass:"col-5",attrs:{for:"firstName"}},[t._v("Contents")]),n("input",{staticClass:"col-7 form-control",attrs:{type:"text"},domProps:{value:t.post.contents}})])]),n("table",{staticClass:"table"},t._l(t.post.comments,(function(e){return n("tr",{key:e.user},[n("td",[t._v(t._s(e.user))]),t._v(" "),n("td",[t._v(" "+t._s(e.contents)+" ")])])})),0),n("form",{staticClass:"needs-validation",attrs:{novalidate:""}},[n("div",{staticClass:"row"},[n("label",{staticClass:"col-5",attrs:{for:"firstName"}},[t._v("User")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.newcomment.user,expression:"newcomment.user"}],staticClass:"col-7 form-control",attrs:{type:"text"},domProps:{value:t.newcomment.user},on:{input:function(e){e.target.composing||t.$set(t.newcomment,"user",e.target.value)}}})]),n("div",{staticClass:"row"},[n("label",{staticClass:"col-5",attrs:{for:"firstName"}},[t._v("Comment")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.newcomment.contents,expression:"newcomment.contents"}],staticClass:"col-7 form-control",attrs:{type:"text"},domProps:{value:t.newcomment.contents},on:{input:function(e){e.target.composing||t.$set(t.newcomment,"contents",e.target.value)}}})]),n("a",{staticClass:"btn btn-secondary mt-2",on:{click:t.addComment}},[t._v("Publish Comment")])])])},P=[],j={name:"Post",props:{id:String},data:function(){return{post:{},newcomment:{user:"",contents:""}}},mounted:function(){var t=this;fetch("http://localhost:5000/posts/"+this.id).then((function(t){return t.json()})).then((function(e){t.post=e}))},methods:{addComment:function(){function t(t,n){return e.apply(this,arguments)}function e(){return e=Object(d["a"])(regeneratorRuntime.mark((function t(e,n){var o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return void 0===e.comments?(e.comments=[{user:n.user,contents:n.contents}],console.log("There are no comments yet")):e.comments.push({user:n.user,contents:n.contents}),t.next=3,fetch("http://localhost:5000/posts/"+e.id,{method:"PATCH",body:JSON.stringify({comments:e.comments}),headers:{"Content-type":"application/json; charset=UTF-8"}});case 3:return o=t.sent,t.next=6,o.json();case 6:return t.abrupt("return",t.sent);case 7:case"end":return t.stop()}}),t)}))),e.apply(this,arguments)}t(this.post,this.newcomment).then((function(t){console.log(t)})).catch((function(t){return console.error("There was an error while storing the comment",t)}))}}},k=j,O=(n("246e"),Object(h["a"])(k,x,P,!1,null,"d61e6906",null)),E=O.exports;o["a"].use(c["a"]);var S=[{path:"/",name:"Home",component:y},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}},{path:"/post/:id",component:E,props:!0,name:"post"},{path:"/filtre/:f",component:y,props:!0,name:"filtre"}],T=new c["a"]({mode:"history",base:"/",routes:S}),$=T,F={name:"Header",props:{},data:function(){return{valorFiltre:""}},methods:{filtrarFiles:function(){$.push({name:"filtre",params:{f:this.valorFiltre}})}}},N=F,A=Object(h["a"])(N,s,i,!1,null,"66906aa0",null),D=A.exports,M=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",{staticClass:"footer mt-auto py-3 bg-light"},[n("div",{staticClass:"container"},[n("span",{staticClass:"mx-1"},[t._v(t._s(t.name))]),t._v("-"),n("span",{staticClass:"mx-1"},[t._v(t._s(t.year))])])])},H=[],U=(n("b0c0"),{name:"Footer",props:{},data:function(){return{name:"",year:0}},mounted:function(){this.name=this.$store.getters.getName,this.year=this.$store.getters.getYear}}),R=U,J=(n("53d7"),Object(h["a"])(R,M,H,!1,null,null,null)),q=J.exports,L={name:"App",components:{Header:D,Footer:q}},Y=L,B=(n("034f"),Object(h["a"])(Y,r,a,!1,null,null,null)),V=B.exports,G=(n("9607"),n("cd74"),n("2f62"));o["a"].use(G["a"]);var W=new G["a"].Store({state:{footerData:{year:2021,name:"Classicoman"},count:0},mutations:{increment:function(t){t.count++}},getters:{getYear:function(t){return t.footerData.year},getName:function(t){return t.footerData.name}}});o["a"].config.productionTip=!1,new o["a"]({router:$,store:W,render:function(t){return t(V)}}).$mount("#app")},"6d4d":function(t,e,n){},"85ec":function(t,e,n){},9607:function(t,e,n){},a1d4:function(t,e,n){"use strict";n("b041")},b041:function(t,e,n){},e669:function(t,e,n){t.exports=n.p+"img/logo-vue.82b9c7a5.png"}});
//# sourceMappingURL=app.5739f6b2.js.map