(function(t){function e(e){for(var r,s,c=e[0],u=e[1],i=e[2],d=0,p=[];d<c.length;d++)s=c[d],Object.prototype.hasOwnProperty.call(a,s)&&a[s]&&p.push(a[s][0]),a[s]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(t[r]=u[r]);l&&l(e);while(p.length)p.shift()();return o.push.apply(o,i||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],r=!0,c=1;c<n.length;c++){var u=n[c];0!==a[u]&&(r=!1)}r&&(o.splice(e--,1),t=s(s.s=n[0]))}return t}var r={},a={app:0},o=[];function s(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=r,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)s.d(n,r,function(e){return t[e]}.bind(null,r));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=e,c=c.slice();for(var i=0;i<c.length;i++)e(c[i]);var l=u;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var r=n("85ec"),a=n.n(r);a.a},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("f9e3");var r=n("2b0e"),a=n("cd1f"),o=n.n(a),s=n("fa33"),c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-page",{attrs:{setting:t.pageSet},on:{"page-change":t.pageChange}})},u=[],i={name:"Pagination",data:function(){return{pageSet:{totalRow:0,language:"en"}}},methods:{pageChange:function(t){console.log(t)}}},l=i,d=n("2877"),p=Object(d["a"])(l,c,u,!1,null,null,null),f=p.exports,h=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},v=[],m=(n("034f"),{}),_=Object(d["a"])(m,h,v,!1,null,null,null),b=_.exports,g=n("8c4f"),y=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("button",{staticClass:"btn btn-primary",attrs:{type:"button"}},[t._v(t._s(t.msg))])])},O=[],C=n("bc3a"),w=n.n(C),P={name:"Ping",data:function(){return{msg:""}},methods:{getMessage:function(){var t=this,e="http://localhost:5000/ping";w.a.get(e).then((function(e){t.msg=e.data})).catch((function(t){console.error(t)}))}},created:function(){this.getMessage()}},j=P,x=Object(d["a"])(j,y,O,!1,null,null,null),S=x.exports,$=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[t._m(0),n("br"),n("br"),n("br"),n("div",{staticClass:"row"},[n("div",{staticClass:"col-sm-10"},[n("h4",[t._v("Total Amount")]),n("hr"),n("br"),n("br"),n("h5",[t._v("Created date")]),n("DatePicker"),n("br"),n("br"),n("table",{staticClass:"table table-hover"},[t._m(1),n("tbody",t._l(t.orders,(function(e,r){return n("tr",{key:r},[n("td",[t._v(t._s(e.Order_name))]),n("td",[t._v(t._s(e.Customer_Company))]),n("td",[t._v(t._s(e.Customer_name))]),n("td",[t._v(t._s(e.Order_date))]),n("td",[t._v(t._s(e.Delivered_Amount))]),n("td",[t._v(t._s(e.Total_Amount))])])})),0)])],1)]),n("Pagination")],1)},k=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"col-md-3"},[n("form",{staticClass:"navbar-form",attrs:{role:"search"}},[n("div",{staticClass:"input-group add-on"},[n("button",{staticClass:"btn btn-default",attrs:{type:"submit"}})])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("thead",[n("tr",[n("th",{attrs:{scope:"col"}},[t._v("Order name")]),n("th",{attrs:{scope:"col"}},[t._v("Customer Company")]),n("th",{attrs:{scope:"col"}},[t._v("Customer name")]),n("th",{attrs:{scope:"col"}},[t._v("Order date")]),n("th",{attrs:{scope:"col"}},[t._v("Delivered Amount")]),n("th",{attrs:{scope:"col"}},[t._v("Total Amount")]),n("th")])])}],E={data:function(){return{orders:[]}},methods:{getOrders:function(){var t=this,e="http://localhost:5000/orders";w.a.get(e).then((function(e){t.orders=e.data.orders})).catch((function(t){console.error(t)}))}},created:function(){this.getOrders()}},M=E,T=Object(d["a"])(M,$,k,!1,null,null,null),A=T.exports;r["a"].use(g["a"]);var D=new g["a"]({mode:"history",base:"/",routes:[{path:"/orders",name:"Orders",component:A},{path:"/ping",name:"Ping",component:S}]});r["a"].component("DatePicker",s["a"]),r["a"].config.productionTip=!1,r["a"].use(o.a),r["a"].component("Pagination",f),new r["a"]({router:D,render:function(t){return t(b)}}).$mount("#app")},"85ec":function(t,e,n){}});
//# sourceMappingURL=app.94c8edae.js.map