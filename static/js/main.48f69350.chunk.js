(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,t,n){"use strict";t.a={ADD_ITEM_TO_CART:"ADD_ITEM_TO_CART",REMOVE_ITEM_FROM_CART:"REMOVE_ITEM_FROM_CART",ENCREASE_CART_ITEM:"ENCREASE_CART_ITEM",DESCREASE_CART_ITEM:"DESCREASE_CART_ITEM"}},27:function(e,t,n){e.exports=n(44)},32:function(e,t,n){},43:function(e,t,n){},44:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(10),o=n.n(r),u=(n(32),n(45)),l=n(5),i=n(22),m=n.n(i),s=[{exact:!0,path:"/react-ecommerce-homepage",component:Object(a.lazy)(function(){return n.e(5).then(n.bind(null,72))})},{exact:!0,path:"/react-ecommerce-homepage/shop",component:Object(a.lazy)(function(){return n.e(4).then(n.bind(null,68))})},{exact:!0,path:"/react-ecommerce-homepage/contact",component:Object(a.lazy)(function(){return n.e(8).then(n.bind(null,69))})},{exact:!0,path:"/react-ecommerce-homepage/sign-in",component:Object(a.lazy)(function(){return Promise.all([n.e(10),n.e(6)]).then(n.bind(null,73))})},{exact:!0,path:"/react-ecommerce-homepage/checkout",component:Object(a.lazy)(function(){return n.e(7).then(n.bind(null,70))})},{exact:!0,path:"/react-ecommerce-homepage/shop/:category",component:Object(a.lazy)(function(){return n.e(3).then(n.bind(null,71))})},{exact:!0,path:"*",component:Object(a.lazy)(function(){return n.e(9).then(n.bind(null,74))})}],E=function e(t){return t?c.a.createElement(a.Suspense,{fallback:c.a.createElement(m.a,{loaded:!0,lines:13,length:20,width:10,radius:30,corners:1,rotate:0,direction:1,color:"#000",speed:1,trail:60,shadow:!1,hwaccel:!1,className:"spinner",zIndex:2e9,top:"50%",left:"50%",scale:1,loadedClassName:"loadedContent"})},c.a.createElement(u.c,null,t.map(function(t,n){var r=t.guard||a.Fragment,o=t.layout||a.Fragment,l=t.component;return c.a.createElement(u.a,{key:n,path:t.path,exact:t.exact,render:function(n){return c.a.createElement(r,null,c.a.createElement(o,null,t.routes?e(t.routes):c.a.createElement(l,n)))}})}))):null};var p=function(){return E(s)},d=n(19),b=n(24),h=n(6),O=n(14),_=n(25),f=n.n(_),T=n(9),I=n(7),y=n(11),R={cartItems:[]},j=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case y.a.ADD_ITEM_TO_CART:if(e.cartItems.find(function(e){return e.id===t.payload.id})){var n=e.cartItems.map(function(e){return e.id===t.payload.id?Object(I.a)({},e,{quantity:e.quantity+1}):e});return Object(I.a)({},e,{cartItems:Object(T.a)(n)})}return Object(I.a)({},e,{cartItems:[].concat(Object(T.a)(e.cartItems),[t.payload])});case y.a.REMOVE_ITEM_FROM_CART:var a=e.cartItems.filter(function(e){return e.id!==t.payload});return Object(I.a)({},e,{cartItems:Object(T.a)(a)});case y.a.ENCREASE_CART_ITEM:var c=e.cartItems.map(function(e){return e.id===t.payload?(e.quantity+=1,e):e});return Object(I.a)({},e,{cartItems:Object(T.a)(c)});case y.a.DESCREASE_CART_ITEM:var r=e.cartItems.map(function(e){return e.id===t.payload&&e.quantity>0?(e.quantity-=1,e):e});return Object(I.a)({},e,{cartItems:Object(T.a)(r)});default:return e}},A={key:"root",storage:f.a,whitelist:["cart"]},C=Object(h.b)({cart:j}),M=Object(O.a)(A,C),g=Object(h.c)(M),w=Object(O.b)(g),x=(n(43),Object(l.a)()),v=function(){return c.a.createElement(d.a,{store:g},c.a.createElement(u.b,{history:x},c.a.createElement(b.a,{persistor:w},c.a.createElement(p,null))))};o.a.render(c.a.createElement(v,null),document.getElementById("root"))}},[[27,1,2]]]);
//# sourceMappingURL=main.48f69350.chunk.js.map