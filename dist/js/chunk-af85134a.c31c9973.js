(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-af85134a"],{"1c4c":function(t,a,e){"use strict";var i=e("9b43"),s=e("5ca1"),n=e("4bf8"),r=e("1fa8"),o=e("33a4"),c=e("9def"),l=e("f1ae"),u=e("27ee");s(s.S+s.F*!e("5cc5")(function(t){Array.from(t)}),"Array",{from:function(t){var a,e,s,d,f=n(t),p="function"==typeof this?this:Array,h=arguments.length,v=h>1?arguments[1]:void 0,g=void 0!==v,_=0,m=u(f);if(g&&(v=i(v,h>2?arguments[2]:void 0,2)),void 0==m||p==Array&&o(m))for(a=c(f.length),e=new p(a);a>_;_++)l(e,_,g?v(f[_],_):f[_]);else for(d=m.call(f),e=new p;!(s=d.next()).done;_++)l(e,_,g?r(d,v,[s.value,_],!0):s.value);return e.length=_,e}})},"2f21":function(t,a,e){"use strict";var i=e("79e5");t.exports=function(t,a){return!!t&&i(function(){a?t.call(null,function(){},1):t.call(null)})}},"4f7f":function(t,a,e){"use strict";var i=e("c26b"),s=e("b39a"),n="Set";t.exports=e("e0b8")(n,function(t){return function(){return t(this,arguments.length>0?arguments[0]:void 0)}},{add:function(t){return i.def(s(this,n),t=0===t?0:t,t)}},i)},5162:function(t,a,e){"use strict";var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("nav",{attrs:{"aria-label":"Page navigation example"}},[e("ul",{staticClass:"pagination justify-content-center"},[t.ary.length?e("li",{staticClass:"page-item",class:{disabled:1===t.nowpage}},[e("a",{staticClass:"page-link",attrs:{href:"#","aria-label":"Previous"},on:{click:function(a){return a.preventDefault(),t.scroolpage(t.nowpage-1)}}},[e("span",{attrs:{"aria-hidden":"true"}},[t._v("«")])])]):t._e(),t._l(t.limitPage,function(a){return e("li",{key:a,staticClass:"page-item",class:{active:t.nowpage===a}},[e("a",{staticClass:"page-link",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.scroolpage(a)}}},[t._v(t._s(a))])])}),t.ary.length?e("li",{staticClass:"page-item",class:{disabled:t.nowpage===t.TotalPage}},[e("a",{staticClass:"page-link",attrs:{href:"#","aria-label":"Next"},on:{click:function(a){return a.preventDefault(),t.scroolpage(t.nowpage+1)}}},[e("span",{attrs:{"aria-hidden":"\n             true"}},[t._v("»")])])]):t._e()],2)])])},s=[],n=(e("55dd"),e("1157")),r=e.n(n),o={props:["ary","makeout"],data:function(){return{nowpage:1,limit:10,TotalLength:0,PageData:[],totalpage:0}},watch:{TotalLength:function(){this.sortdata(),this.pagedata(1)},ary:{handler:"Datadefault",immediate:!0}},computed:{TotalPage:function(){return Math.ceil(this.ary.length/this.limit)},limitPage:function(){var t=[],a=Math.ceil(this.ary.length/this.limit);if(a<=0)return!1;if(this.nowpage<=3){var e=5;a<=5&&(e=a);for(var i=1;i<=e;i++)t.push(i)}else if(this.nowpage>=3&&this.nowpage<a-2)for(var s=this.nowpage-2;s<=this.nowpage+2;s++)t.push(s);else if(this.nowpage>=a-2)for(var n=this.nowpage-2;n<=a;n++)t.push(n);return t}},methods:{Datadefault:function(){this.TotalLength=this.ary.length,this.totalpage=Math.ceil(this.ary.length/this.limit)},pagedata:function(t){if(this.PageData=[],0!==this.ary.length){t<=0?t=1:t>=this.totalpage&&(t=this.totalpage),this.nowpage=t;var a=(t-1)*this.limit,e=t*this.limit;e>=this.TotalLength&&(e=this.TotalLength);for(var i=a;i<e;i++)this.PageData.push(this.ary[i]);this.$emit("getPageData",this.PageData)}},scroolpage:function(t){if(this.pagedata(t),"product"===this.makeout){var a=r()(".l-scrool"),e=a.offset().top,i=a.outerHeight(!0)-a.outerHeight(),s=r()(".nav-fixed").height();r()(window).scrollTop(e-s-i)}else r()(window).scrollTop(0)},sortdata:function(){var t=this;this.ary.sort(function(a,e){return"pay"===t.makeout?e.is_paid-a.is_paid:"enable"===t.makeout?(a.is_enabled=a.is_enabled?a.is_enabled:0,e.is_enabled=e.is_enabled?e.is_enabled:0,e.is_enabled-a.is_enabled):a.origin_price-e.origin_price})}}},c=o,l=e("2877"),u=Object(l["a"])(c,i,s,!1,null,null,null);a["a"]=u.exports},"55dd":function(t,a,e){"use strict";var i=e("5ca1"),s=e("d8e8"),n=e("4bf8"),r=e("79e5"),o=[].sort,c=[1,2,3];i(i.P+i.F*(r(function(){c.sort(void 0)})||!r(function(){c.sort(null)})||!e("2f21")(o)),"Array",{sort:function(t){return void 0===t?o.call(n(this)):o.call(n(this),s(t))}})},"5df3":function(t,a,e){"use strict";var i=e("02f4")(!0);e("01f9")(String,"String",function(t){this._t=String(t),this._i=0},function(){var t,a=this._t,e=this._i;return e>=a.length?{value:void 0,done:!0}:(t=i(a,e),this._i+=t.length,{value:t,done:!1})})},"67ab":function(t,a,e){var i=e("ca5a")("meta"),s=e("d3f4"),n=e("69a8"),r=e("86cc").f,o=0,c=Object.isExtensible||function(){return!0},l=!e("79e5")(function(){return c(Object.preventExtensions({}))}),u=function(t){r(t,i,{value:{i:"O"+ ++o,w:{}}})},d=function(t,a){if(!s(t))return"symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!n(t,i)){if(!c(t))return"F";if(!a)return"E";u(t)}return t[i].i},f=function(t,a){if(!n(t,i)){if(!c(t))return!0;if(!a)return!1;u(t)}return t[i].w},p=function(t){return l&&h.NEED&&c(t)&&!n(t,i)&&u(t),t},h=t.exports={KEY:i,NEED:!1,fastKey:d,getWeak:f,onFreeze:p}},b39a:function(t,a,e){var i=e("d3f4");t.exports=function(t,a){if(!i(t)||t._t!==a)throw TypeError("Incompatible receiver, "+a+" required!");return t}},c26b:function(t,a,e){"use strict";var i=e("86cc").f,s=e("2aeb"),n=e("dcbc"),r=e("9b43"),o=e("f605"),c=e("4a59"),l=e("01f9"),u=e("d53b"),d=e("7a56"),f=e("9e1e"),p=e("67ab").fastKey,h=e("b39a"),v=f?"_s":"size",g=function(t,a){var e,i=p(a);if("F"!==i)return t._i[i];for(e=t._f;e;e=e.n)if(e.k==a)return e};t.exports={getConstructor:function(t,a,e,l){var u=t(function(t,i){o(t,u,a,"_i"),t._t=a,t._i=s(null),t._f=void 0,t._l=void 0,t[v]=0,void 0!=i&&c(i,e,t[l],t)});return n(u.prototype,{clear:function(){for(var t=h(this,a),e=t._i,i=t._f;i;i=i.n)i.r=!0,i.p&&(i.p=i.p.n=void 0),delete e[i.i];t._f=t._l=void 0,t[v]=0},delete:function(t){var e=h(this,a),i=g(e,t);if(i){var s=i.n,n=i.p;delete e._i[i.i],i.r=!0,n&&(n.n=s),s&&(s.p=n),e._f==i&&(e._f=s),e._l==i&&(e._l=n),e[v]--}return!!i},forEach:function(t){h(this,a);var e,i=r(t,arguments.length>1?arguments[1]:void 0,3);while(e=e?e.n:this._f){i(e.v,e.k,this);while(e&&e.r)e=e.p}},has:function(t){return!!g(h(this,a),t)}}),f&&i(u.prototype,"size",{get:function(){return h(this,a)[v]}}),u},def:function(t,a,e){var i,s,n=g(t,a);return n?n.v=e:(t._l=n={i:s=p(a,!0),k:a,v:e,p:i=t._l,n:void 0,r:!1},t._f||(t._f=n),i&&(i.n=n),t[v]++,"F"!==s&&(t._i[s]=n)),t},getEntry:g,setStrong:function(t,a,e){l(t,a,function(t,e){this._t=h(t,a),this._k=e,this._l=void 0},function(){var t=this,a=t._k,e=t._l;while(e&&e.r)e=e.p;return t._t&&(t._l=e=e?e.n:t._t._f)?u(0,"keys"==a?e.k:"values"==a?e.v:[e.k,e.v]):(t._t=void 0,u(1))},e?"entries":"values",!e,!0),d(a)}}},e0b8:function(t,a,e){"use strict";var i=e("7726"),s=e("5ca1"),n=e("2aba"),r=e("dcbc"),o=e("67ab"),c=e("4a59"),l=e("f605"),u=e("d3f4"),d=e("79e5"),f=e("5cc5"),p=e("7f20"),h=e("5dbc");t.exports=function(t,a,e,v,g,_){var m=i[t],b=m,y=g?"set":"add",C=b&&b.prototype,x={},w=function(t){var a=C[t];n(C,t,"delete"==t?function(t){return!(_&&!u(t))&&a.call(this,0===t?0:t)}:"has"==t?function(t){return!(_&&!u(t))&&a.call(this,0===t?0:t)}:"get"==t?function(t){return _&&!u(t)?void 0:a.call(this,0===t?0:t)}:"add"==t?function(t){return a.call(this,0===t?0:t),this}:function(t,e){return a.call(this,0===t?0:t,e),this})};if("function"==typeof b&&(_||C.forEach&&!d(function(){(new b).entries().next()}))){var k=new b,E=k[y](_?{}:-0,1)!=k,P=d(function(){k.has(1)}),D=f(function(t){new b(t)}),S=!_&&d(function(){var t=new b,a=5;while(a--)t[y](a,a);return!t.has(-0)});D||(b=a(function(a,e){l(a,b,t);var i=h(new m,a,b);return void 0!=e&&c(e,g,i[y],i),i}),b.prototype=C,C.constructor=b),(P||S)&&(w("delete"),w("has"),g&&w("get")),(S||E)&&w(y),_&&C.clear&&delete C.clear}else b=v.getConstructor(a,t,g,y),r(b.prototype,e),o.NEED=!0;return p(b,t),x[t]=b,s(s.G+s.W+s.F*(b!=m),x),_||v.setStrong(b,t,g),b}},f1ae:function(t,a,e){"use strict";var i=e("86cc"),s=e("4630");t.exports=function(t,a,e){a in t?i.f(t,a,s(0,e)):t[a]=e}},fc1e:function(t,a,e){"use strict";e.r(a);var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"products-bg",staticStyle:{"margin-top":"-55px"}},[t._m(0),e("section",{staticClass:"mt-5 l-scrool"},[e("div",{staticClass:"container"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-lg-3"},[e("div",{staticClass:"list-group sticky-top",staticStyle:{top:"66px"}},[e("a",{staticClass:"list-group-item list-group-item-action rounded-0",class:{active:"all"===t.active},attrs:{href:"#"},on:{click:function(a){return a.preventDefault(),t.choose("all")}}},[e("i",{staticClass:"fas fa-briefcase"}),t._v("\n              所有商品")]),t._l(t.categories,function(a){return e("a",{key:a,staticClass:"list-group-item list-group-item-action",class:{active:t.active===a},attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.choose(a)}}},["水果"===a?e("i",{staticClass:"fab fa-apple fa-lg"}):t._e(),"飲料"===a?e("i",{staticClass:"fas fa-cocktail"}):t._e(),t._v("\n              "+t._s(a))])})],2)]),e("div",{staticClass:"col-lg-9"},[e("card",{attrs:{active:t.active}})],1)])])])])},s=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"bd-example"},[e("div",{staticClass:"carousel slide",attrs:{id:"carouselExampleCaptions","data-ride":"carousel"}},[e("ol",{staticClass:"carousel-indicators"},[e("li",{staticClass:"active",attrs:{"data-target":"#carouselExampleCaptions","data-slide-to":"0"}}),e("li",{attrs:{"data-target":"#carouselExampleCaptions","data-slide-to":"1"}}),e("li",{attrs:{"data-target":"#carouselExampleCaptions","data-slide-to":"2"}})]),e("div",{staticClass:"carousel-inner"},[e("div",{staticClass:"carousel-item active"},[e("div",{staticClass:"bg-cover vh-100",staticStyle:{"background-image":"url('https://images.unsplash.com/photo-1464297162577-f5295c892194?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80')"}}),e("div",{staticClass:"carousel-caption d-none d-md-block"},[e("h5",{staticClass:"h2"},[t._v("細心栽種")]),e("p",{staticClass:"px-5"},[t._v("屏除農藥、化學肥料、基因改造作物、植物生長調節劑等非天然物質的使用。是一個無論是土壤、生態體系及人類三者的健康均能夠維持永續（可持續發展）的生產系統。這系統有賴生態上的過程、多元性及適應當地環境的循環，用以克服各種發展上的困難，而不是仰賴外間的介入")])])]),e("div",{staticClass:"carousel-item"},[e("div",{staticClass:"bg-cover vh-100",staticStyle:{"background-image":"url('https://images.unsplash.com/photo-1423483641154-5411ec9c0ddf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80')"}}),e("div",{staticClass:"carousel-caption d-none d-md-block"},[e("h5",{staticClass:"h2"},[t._v("無噴灑農藥")]),e("p",{staticClass:"px-5"},[t._v("您知道每次噴灑農藥，當中只有很少一部分真正用於除蟲嗎？其餘絕大部分的農藥，卻全部成為環境污染物，滲進土裡、流到水裡、揮發於空氣中，不僅威脅到生物多樣性，最終還可經由各種型態進入人體，危害我們的健康。")])])]),e("div",{staticClass:"carousel-item"},[e("div",{staticClass:"bg-cover vh-100",staticStyle:{"background-image":"url('https://images.unsplash.com/photo-1544144683-bf1749166af3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80')"}}),e("div",{staticClass:"carousel-caption d-none d-md-block"},[e("h5",{staticClass:"h2"},[t._v("大顆又多汁")]),e("p",{staticClass:"px-5"},[t._v("不惜耗費任何成本研究，大還要更大，全台灣最大的水果")])])])]),e("a",{staticClass:"carousel-control-prev",attrs:{href:"#carouselExampleCaptions",role:"button","data-slide":"prev"}},[e("span",{staticClass:"carousel-control-prev-icon",attrs:{"aria-hidden":"true"}}),e("span",{staticClass:"sr-only"},[t._v("Previous")])]),e("a",{staticClass:"carousel-control-next",attrs:{href:"#carouselExampleCaptions",role:"button","data-slide":"next"}},[e("span",{staticClass:"carousel-control-next-icon",attrs:{"aria-hidden":"true"}}),e("span",{staticClass:"sr-only"},[t._v("Next")])])])])}],n=(e("4f7f"),e("5df3"),e("1c4c"),e("ac6a"),function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("div",{staticClass:"input-group mb-3 mt-3 mt-lg-0"},[e("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.searchname,expression:"searchname",modifiers:{trim:!0}}],staticClass:"form-control w-75",attrs:{type:"text",placeholder:"搜尋商品"},domProps:{value:t.searchname},on:{keyup:function(a){return!a.type.indexOf("key")&&t._k(a.keyCode,"enter",13,a.key,"Enter")?null:t.search()},input:function(a){a.target.composing||(t.searchname=a.target.value.trim())},blur:function(a){return t.$forceUpdate()}}}),e("div",{staticClass:"input-group-append"},[e("button",{staticClass:"btn btn-outline-brown",attrs:{type:"submit"},on:{click:function(a){return t.search()}}},[t._v("搜尋")])])]),t.ary.length?e("div",[e("div",{staticClass:"text-center h3"},[t._v("已搜尋到"+t._s(t.ary.length)+"個商品")]),e("div",{staticClass:"row"},t._l(t.pageproduct,function(a){return e("div",{key:a.id,staticClass:"col-lg-6 col-xl-4 mb-4"},[e("div",{staticClass:"card border-0 shadow-sm h-100 l-card"},[e("div",{staticStyle:{height:"150px","background-size":"cover","background-position":"center"},style:{backgroundImage:"url("+a.imageUrl+")"}}),e("div",{staticClass:"card-body d-flex flex-column"},[e("div",{staticClass:"title d-flex justify-content-between align-items-center mb-3"},[e("h5",{staticClass:"card-title mb-0"},[e("span",{staticClass:"text-dark",attrs:{href:"#"}},[t._v(t._s(a.title))])]),e("h6",{staticClass:"mb-0"},[e("span",{staticClass:"badge badge-secondary ml-2",class:a.color},[t._v(t._s(a.category))])])]),e("p",{staticClass:"card-text body"},[t._v(t._s(a.content))]),e("div",{staticClass:"footer d-flex justify-content-between align-items-baseline"},[a.origin_price?t._e():e("div",{staticClass:"h5"},[t._v("售價 "+t._s(a.price)+" 元")]),a.origin_price?e("del",{staticClass:"h6 text-secondary"},[t._v("原價 "+t._s(a.origin_price)+" 元")]):t._e(),a.origin_price?e("div",{staticClass:"h5 text-dorange"},[t._v("特價 "+t._s(a.price)+" 元")]):t._e()])]),e("div",{staticClass:"card-footer d-flex"},[e("button",{staticClass:"btn btn-outline-primary btn-sm",attrs:{type:"button"},on:{click:function(e){return t.gotoproduct(a.id)}}},[t._v("\n                查看更多\n              ")]),e("button",{staticClass:"btn btn-outline-dorange btn-sm ml-auto",attrs:{type:"button",disabled:t.addtoCartload===a.id},on:{click:function(e){return t.addtoCart(a.id)}}},[t.addtoCartload===a.id?e("i",{staticClass:"fas fa-spinner fa-spin"}):t._e(),t._v("\n                加到購物車\n              ")])])])])}),0)]):e("div",{staticClass:"h3 text-center vh-100"},[t._v("\n    沒有符合的商品\n  ")]),e("pages",{attrs:{ary:t.ary,makeout:"product"},on:{getPageData:t.getPageData}})],1)}),r=[],o=e("5162"),c=e("1157"),l=e.n(c),u={components:{pages:o["a"]},props:["active"],data:function(){return{ary:[],pageproduct:[],products:[],product:{},searchname:"",isLoading:!1}},created:function(){this.getProducts()},watch:{active:function(){this.datafilter();var t=l()(".l-scrool"),a=t.offset().top,e=l()(".nav-fixed").height(),i=t.outerHeight(!0)-t.outerHeight();l()(window).scrollTop(a-e-i)}},computed:{addtoCartload:function(){return this.$store.state.Mcart.loading}},methods:{getProducts:function(){var t=this;this.$store.dispatch("Mproduct/getProducts").then(function(){t.products=t.$store.state.Mproduct.product.slice(),t.ary=t.products,t.datafilter()})},datafilter:function(){var t=this;this.ary=[],"all"===this.active?this.products.forEach(function(a){1===a.is_enabled&&t.ary.push(a)}):this.products.forEach(function(a){1===a.is_enabled&&-1!==a.category.indexOf(t.active)&&t.ary.push(a)}),this.ary.forEach(function(t){"水果"===t.category?t.color="badge-success":"飲料"===t.category&&(t.color="badge-info")})},addtoCart:function(t){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;this.$store.dispatch("Mcart/addtocart",{id:t,qty:a})},getPageData:function(t){this.pageproduct=t},search:function(){var t=this;this.ary=[],""!==this.searchname&&(this.ary=this.products.filter(function(a){return-1!==a.title.indexOf(t.searchname)}))},gotoproduct:function(t){this.$router.push("/products/".concat(t))}}},d=u,f=e("2877"),p=Object(f["a"])(d,n,r,!1,null,null,null),h=p.exports,v={data:function(){return{active:"all",product:[],categories:[]}},components:{card:h},created:function(){this.products()},methods:{choose:function(t){this.active=t},products:function(){var t=this;this.$store.dispatch("Mproduct/getProducts").then(function(){t.product=t.$store.state.Mproduct.product;var a=[];t.product.forEach(function(t){a.push(t.category)}),t.categories=Array.from(new Set(a))})}}},g=v,_=Object(f["a"])(g,i,s,!1,null,null,null);a["default"]=_.exports}}]);
//# sourceMappingURL=chunk-af85134a.c31c9973.js.map