(function(e){function t(t){for(var n,a,c=t[0],s=t[1],u=t[2],l=0,p=[];l<c.length;l++)a=c[l],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&p.push(o[a][0]),o[a]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n]);d&&d(t);while(p.length)p.shift()();return i.push.apply(i,u||[]),r()}function r(){for(var e,t=0;t<i.length;t++){for(var r=i[t],n=!0,a=1;a<r.length;a++){var c=r[a];0!==o[c]&&(n=!1)}n&&(i.splice(t--,1),e=s(s.s=r[0]))}return e}var n={},a={app:0},o={app:0},i=[];function c(e){return s.p+"js/"+({}[e]||e)+"."+{"chunk-11e813ac":"f3ef463d","chunk-56c62aac":"009078a5","chunk-71e8c65d":"4fa3bea7","chunk-7ae1ce32":"c62a0347"}[e]+".js"}function s(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,s),r.l=!0,r.exports}s.e=function(e){var t=[],r={"chunk-11e813ac":1,"chunk-56c62aac":1,"chunk-71e8c65d":1,"chunk-7ae1ce32":1};a[e]?t.push(a[e]):0!==a[e]&&r[e]&&t.push(a[e]=new Promise((function(t,r){for(var n="css/"+({}[e]||e)+"."+{"chunk-11e813ac":"b25b9f0d","chunk-56c62aac":"76ec9eee","chunk-71e8c65d":"09983a40","chunk-7ae1ce32":"9aebfefb"}[e]+".css",o=s.p+n,i=document.getElementsByTagName("link"),c=0;c<i.length;c++){var u=i[c],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===n||l===o))return t()}var p=document.getElementsByTagName("style");for(c=0;c<p.length;c++){u=p[c],l=u.getAttribute("data-href");if(l===n||l===o)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var n=t&&t.target&&t.target.src||o,i=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=n,delete a[e],d.parentNode.removeChild(d),r(i)},d.href=o;var f=document.getElementsByTagName("head")[0];f.appendChild(d)})).then((function(){a[e]=0})));var n=o[e];if(0!==n)if(n)t.push(n[2]);else{var i=new Promise((function(t,r){n=o[e]=[t,r]}));t.push(n[2]=i);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=c(e);var p=new Error;u=function(t){l.onerror=l.onload=null,clearTimeout(d);var r=o[e];if(0!==r){if(r){var n=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;p.message="Loading chunk "+e+" failed.\n("+n+": "+a+")",p.name="ChunkLoadError",p.type=n,p.request=a,r[1](p)}o[e]=void 0}};var d=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(t)},s.m=e,s.c=n,s.d=function(e,t,r){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(s.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)s.d(r,n,function(t){return e[t]}.bind(null,n));return r},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/",s.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var p=0;p<u.length;p++)t(u[p]);var d=l;i.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"56d7":function(e,t,r){"use strict";r.r(t);r("4160"),r("d3b7"),r("159b"),r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("nav",{staticClass:"navbar navbar-dark bg-dark",attrs:{id:"nav"}},[r("router-link",{attrs:{to:{name:"main"}}},[e._v("Vue Recipes")]),e._v("| "),r("router-link",{attrs:{to:{name:"search"}}},[e._v("Search")]),e._v("| "+e._s(!e.$root.store.username)+" "),e.$root.store.username?r("span",[e._v(" "+e._s(e.$root.store.username)+": "),r("button",{on:{click:e.Logout}},[e._v("Logout")]),e._v("| ")]):r("span",[e._v(" Guest: "),r("router-link",{attrs:{to:{name:"register"}}},[e._v("Register")]),e._v("| "),r("router-link",{attrs:{to:{name:"login"}}},[e._v("Login")]),e._v("| ")],1)],1),r("router-view")],1)},o=[],i={name:"App",methods:{Logout:function(){var e=this;this.$root.store.logout(),this.$root.toast("Logout","User logged out successfully","success"),this.$router.push("/")["catch"]((function(){e.$forceUpdate()}))}}},c=i,s=(r("5c0b"),r("2877")),u=Object(s["a"])(c,a,o,!1,null,null,null),l=u.exports,p=r("a7fe"),d=r.n(p),f=r("bc3a"),h=r.n(f),v=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"container"},[r("h1",{staticClass:"title"},[e._v("Main Page")]),r("RecipePreviewList",{staticClass:"RandomRecipes center",attrs:{title:"Random Recipes"}}),e.$root.store.username?e._e():r("router-link",{attrs:{to:"/login",tag:"button"}},[e._v("You need to Login to vue this")]),e._v(" "+e._s(e.$root.store.username)+" "),r("RecipePreviewList",{class:{RandomRecipes:!0,blur:!e.$root.store.username,center:!0},attrs:{title:"Last Viewed Recipes",disabled:""}})],1)},m=[],g=r("99d8"),b={components:{RecipePreviewList:g["a"]}},_=b,y=(r("c52e"),Object(s["a"])(_,v,m,!1,null,"94332520",null)),k=y.exports,w=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"container"},[r("h1",[e._v("Four Oh Four you didn't")]),r("router-link",{attrs:{to:"/",exact:""}},[e._v("ET Go Home")])],1)},C=[],j={},O=Object(s["a"])(j,w,C,!1,null,null,null),P=O.exports,R=[{path:"/",name:"main",component:k},{path:"/register",name:"register",component:function(){return r.e("chunk-7ae1ce32").then(r.bind(null,"eaff"))}},{path:"/login",name:"login",component:function(){return r.e("chunk-71e8c65d").then(r.bind(null,"62cc"))}},{path:"/search",name:"search",component:function(){return r.e("chunk-56c62aac").then(r.bind(null,"37906"))}},{path:"/recipe/:recipeId",name:"recipe",component:function(){return r.e("chunk-11e813ac").then(r.bind(null,"6619"))}},{path:"*",name:"notFound",component:P}],x=R,$=r("8c4f"),L=r("1dce"),S=r.n(L),E=(r("f9e3"),r("2dd8"),r("1073")),T=r("cbd0"),q=r("b1fc"),A=r("7049"),N=r("a7e2"),F=r("f9bc"),M=r("44d4"),I=r("cca8"),V=r("51c2"),B=r("498a");n["default"].use($["a"]);var D=new $["a"]({routes:x});[E["a"],T["a"],q["a"],A["a"],N["a"],F["a"],M["a"],I["a"],V["a"],B["a"]].forEach((function(e){return n["default"].use(e)})),n["default"].use(S.a),h.a.interceptors.request.use((function(e){return e}),(function(e){return Promise.reject(e)})),h.a.interceptors.response.use((function(e){return e}),(function(e){return Promise.reject(e)})),n["default"].use(d.a,h.a),n["default"].config.productionTip=!1;var G={username:localStorage.username,login:function(e){localStorage.setItem("username",e),this.username=e,console.log("login",this.username)},logout:function(){console.log("logout"),localStorage.removeItem("username"),this.username=void 0}};console.log(G),new n["default"]({router:D,data:function(){return{store:G}},methods:{toast:function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,n=arguments.length>3&&void 0!==arguments[3]&&arguments[3];this.$bvToast.toast("".concat(t),{title:"".concat(e),toaster:"b-toaster-top-center",variant:r,solid:!0,appendToast:n,autoHideDelay:3e3})}},render:function(e){return e(l)}}).$mount("#app")},"5baa":function(e,t,r){"use strict";var n=r("fdf5"),a=r.n(n);a.a},"5c0b":function(e,t,r){"use strict";var n=r("9c0c"),a=r.n(n);a.a},9474:function(e,t,r){},"99d8":function(e,t,r){"use strict";var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("b-container",[r("h3",[e._v(" "+e._s(e.title)+": "),e._t("default")],2),r("div",{staticClass:"card-deck"},e._l(e.recipes,(function(e){return r("div",{key:e.id,staticClass:"card"},[r("RecipePreview",{staticClass:"recipePreview",attrs:{recipe:e}})],1)})),0)])},a=[],o=r("2909"),i=(r("96cf"),r("1da1")),c=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[e.image_load?r("img",{staticClass:"card-img-top",attrs:{src:e.recipe.image}}):e._e(),r("div",{staticClass:"card-body"},[r("h5",{staticClass:"card-title"},[e._v(e._s(e.recipe.title))])]),r("ul",{staticClass:"list-group list-group-flush"},[r("li",{staticClass:"list-group-item"},[e._v("Cooking Time: "+e._s(e.recipe.readyInMinutes))]),r("li",{staticClass:"list-group-item"},[e._v("Popularity: "+e._s(e.recipe.popularity))]),r("li",{staticClass:"list-group-item"},[r("p",[e._v("Speceial Labels: ")]),e.recipe.vegan?r("p",[e._v("Vegan ")]):e._e(),e.recipe.vegetarian?r("p",[e._v("Vegetarian ")]):e._e(),e.recipe.glutenFree?r("p",[e._v("Gluten Free ")]):e._e()])]),e._m(0)])},s=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"card-footer",staticStyle:{}},[r("a",{staticClass:"card-link",attrs:{href:"#"}},[e._v("Card link")]),r("a",{staticClass:"card-link",attrs:{href:"#"}},[e._v("Another link")])])}],u=(r("a9e3"),{mounted:function(){var e=this;this.axios.get(this.recipe.image).then((function(t){e.image_load=!0}))},data:function(){return{image_load:!1}},props:{recipe:{type:Object,required:!0},id:{type:Number,required:!0},title:{type:String,required:!0},readyInMinutes:{type:Number,required:!0},image:{type:String,required:!0},aggregateLikes:{type:Number,required:!1,default:function(){}}},methods:{addToFavourites:function(){return Object(i["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})))()}}}),l=u,p=(r("aff6"),r("2877")),d=Object(p["a"])(l,c,s,!1,null,"3850a692",null),f=d.exports,h={name:"RecipePreviewList",components:{RecipePreview:f},props:{title:{type:String,required:!0}},data:function(){return{recipes:[]}},mounted:function(){this.updateRecipes()},methods:{updateRecipes:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var r,n,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.axios.get(e.$root.store.server_domain+"/recipes/random");case 3:n=t.sent,a=n.data,e.recipes=[],(r=e.recipes).push.apply(r,Object(o["a"])(a)),t.next=12;break;case 9:t.prev=9,t.t0=t["catch"](0),console.log(t.t0);case 12:case"end":return t.stop()}}),t,null,[[0,9]])})))()}}},v=h,m=(r("5baa"),Object(p["a"])(v,n,a,!1,null,"e0cddce0",null));t["a"]=m.exports},"9c0c":function(e,t,r){},aff6:function(e,t,r){"use strict";var n=r("bd23"),a=r.n(n);a.a},bd23:function(e,t,r){},c52e:function(e,t,r){"use strict";var n=r("9474"),a=r.n(n);a.a},fdf5:function(e,t,r){}});
//# sourceMappingURL=app.596d147c.js.map