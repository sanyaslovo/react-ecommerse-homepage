(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{26:function(e,t,n){"use strict";n.d(t,"a",function(){return f});var a=n(45),i=n(3),r=n(0),c=n.n(r),o=n(5),l=(n(8),n(1)),s=n(2),m=n(4);c.a.Component;c.a.Component;var p=function(e,t){return"function"===typeof e?e(t):e},u=function(e,t){return"string"===typeof e?Object(o.c)(e,null,null,t):e},b=function(e){return e},g=c.a.forwardRef;"undefined"===typeof g&&(g=b);var d=g(function(e,t){var n=e.innerRef,a=e.navigate,i=e.onClick,r=Object(s.a)(e,["innerRef","navigate","onClick"]),o=r.target,m=Object(l.a)({},r,{onClick:function(e){try{i&&i(e)}catch(t){throw e.preventDefault(),t}e.defaultPrevented||0!==e.button||o&&"_self"!==o||function(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}(e)||(e.preventDefault(),a())}});return m.ref=b!==g&&t||n,c.a.createElement("a",m)});var f=g(function(e,t){var n=e.component,i=void 0===n?d:n,r=e.replace,o=e.to,f=e.innerRef,h=Object(s.a)(e,["component","replace","to","innerRef"]);return c.a.createElement(a.d.Consumer,null,function(e){e||Object(m.a)(!1);var n=e.history,a=u(p(o,e.location),e.location),s=a?n.createHref(a):"",d=Object(l.a)({},h,{href:s,navigate:function(){var t=p(o,e.location);(r?n.replace:n.push)(t)}});return b!==g?d.ref=t||f:d.innerRef=f,c.a.createElement(i,d)})}),h=function(e){return e},v=c.a.forwardRef;"undefined"===typeof v&&(v=h);v(function(e,t){var n=e["aria-current"],i=void 0===n?"page":n,r=e.activeClassName,o=void 0===r?"active":r,b=e.activeStyle,g=e.className,d=e.exact,y=e.isActive,k=e.location,E=e.sensitive,N=e.strict,w=e.style,U=e.to,T=e.innerRef,j=Object(s.a)(e,["aria-current","activeClassName","activeStyle","className","exact","isActive","location","sensitive","strict","style","to","innerRef"]);return c.a.createElement(a.d.Consumer,null,function(e){e||Object(m.a)(!1);var n=k||e.location,r=u(p(U,n),n),s=r.pathname,B=s&&s.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1"),C=B?Object(a.e)(n.pathname,{path:B,exact:d,sensitive:E,strict:N}):null,O=!!(y?y(C,n):C),R=O?function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.filter(function(e){return e}).join(" ")}(g,o):g,S=O?Object(l.a)({},w,{},b):w,J=Object(l.a)({"aria-current":O&&i||null,className:R,style:S,to:r},j);return h!==v?J.ref=t||T:J.innerRef=T,c.a.createElement(f,J)})})},46:function(e,t,n){"use strict";n.d(t,"a",function(){return a});var a=function(e){return e.cart.cartItems}},47:function(e,t,n){e.exports=n.p+"static/media/crown.19ef7b17.svg"},48:function(e,t,n){},49:function(e,t,n){e.exports=n.p+"static/media/shopping-bag.30f07071.svg"},50:function(e,t,n){},51:function(e,t,n){"use strict";function a(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],a=!0,i=!1,r=void 0;try{for(var c,o=e[Symbol.iterator]();!(a=(c=o.next()).done)&&(n.push(c.value),!t||n.length!==t);a=!0);}catch(l){i=!0,r=l}finally{try{a||null==o.return||o.return()}finally{if(i)throw r}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}n.d(t,"a",function(){return a})},52:function(e,t,n){"use strict";var a=n(0),i=n.n(a),r=n(47),c=n.n(r),o=(n(48),n(26)),l=n(51),s=n(19),m=n(46),p=n(49),u=n.n(p),b=(n(50),Object(s.b)(function(e){return{cartItems:Object(m.a)(e)}})(function(e){var t=e.cartItems,n=Object(a.useState)(!0),r=Object(l.a)(n,2),c=r[0],s=r[1];localStorage.setItem("ItemsInCart",JSON.stringify(t));var m=JSON.parse(localStorage.getItem("ItemsInCart"));return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"cart",onClick:function(){return s(!c)}},i.a.createElement("img",{src:u.a,alt:"Logo"}),i.a.createElement("span",null,t.reduce(function(e,t){return e+t.quantity},0))),c?i.a.createElement("div",{className:"cart-list"},0===m.length?i.a.createElement("span",{className:"empty"},"Your cart is empty"):i.a.createElement("ul",null,t.map(function(e,t){return i.a.createElement("li",{key:t,className:"cart-item"},i.a.createElement("img",{src:e.imageUrl,alt:e.name}),i.a.createElement("div",{className:"cart-item-info"},i.a.createElement("span",null,e.name),i.a.createElement("span",null,"".concat(e.quantity," x $").concat(e.price))))})),i.a.createElement(o.a,{to:"/checkout",className:"btn"},"go to checkout")):[])}));t.a=function(){return i.a.createElement("header",null,i.a.createElement(o.a,{to:"/",className:"logo-container"},i.a.createElement("img",{src:c.a,alt:"Logo"})),i.a.createElement("div",{className:"options"},i.a.createElement(o.a,{to:"/shop",className:"option"},"SHOP"),i.a.createElement(o.a,{to:"/contact",className:"option"},"CONTACT"),i.a.createElement(o.a,{to:"/sign-in",className:"option"},"SIGN IN"),i.a.createElement(b,null)))}},53:function(e,t,n){"use strict";n.d(t,"a",function(){return i}),n.d(t,"d",function(){return r}),n.d(t,"c",function(){return c}),n.d(t,"b",function(){return o});var a=n(11),i=function(e){return{type:a.a.ADD_ITEM_TO_CART,payload:e}},r=function(e){return{type:a.a.REMOVE_ITEM_FROM_CART,payload:e}},c=function(e){return{type:a.a.ENCREASE_CART_ITEM,payload:e}},o=function(e){return{type:a.a.DESCREASE_CART_ITEM,payload:e}}},54:function(e,t,n){"use strict";var a=n(0),i=n.n(a),r=n(19),c=n(53),o=n(46);n(55);t.a=Object(r.b)(function(e){return{cartItems:Object(o.a)(e)}})(function(e){var t=e.offer,n={backgroundImage:"url("+t.imageUrl+")"},a=Object(r.c)(),o=function(e){e.quantity=1,function(e){a(Object(c.a)(e))}(e)};return i.a.createElement("div",{className:"product"},i.a.createElement("div",{className:"background-image",style:n}),i.a.createElement("div",{className:"info"},i.a.createElement("span",{className:"title"},t.name),i.a.createElement("span",{className:"price"},t.price+"$")),i.a.createElement("button",{className:"to-cart",onClick:function(){return o(t)}},"ADD TO CART"))})},55:function(e,t,n){},56:function(e,t,n){"use strict";t.a=[{id:1,title:"Hats",routeName:"hats",items:[{id:1,name:"Brown Brim",imageUrl:"https://i.ibb.co/ZYW3VTp/brown-brim.png",price:25},{id:2,name:"Blue Beanie",imageUrl:"https://i.ibb.co/ypkgK0X/blue-beanie.png",price:18},{id:3,name:"Brown Cowboy",imageUrl:"https://i.ibb.co/QdJwgmp/brown-cowboy.png",price:35},{id:4,name:"Grey Brim",imageUrl:"https://i.ibb.co/RjBLWxB/grey-brim.png",price:25},{id:5,name:"Green Beanie",imageUrl:"https://i.ibb.co/YTjW3vF/green-beanie.png",price:18},{id:6,name:"Palm Tree Cap",imageUrl:"https://i.ibb.co/rKBDvJX/palm-tree-cap.png",price:14},{id:7,name:"Red Beanie",imageUrl:"https://i.ibb.co/bLB646Z/red-beanie.png",price:18},{id:8,name:"Wolf Cap",imageUrl:"https://i.ibb.co/1f2nWMM/wolf-cap.png",price:14},{id:9,name:"Blue Snapback",imageUrl:"https://i.ibb.co/X2VJP2W/blue-snapback.png",price:16}]},{id:2,title:"Sneakers",routeName:"sneakers",items:[{id:10,name:"Adidas NMD",imageUrl:"https://i.ibb.co/0s3pdnc/adidas-nmd.png",price:220},{id:11,name:"Adidas Yeezy",imageUrl:"https://i.ibb.co/dJbG1cT/yeezy.png",price:280},{id:12,name:"Black Converse",imageUrl:"https://i.ibb.co/bPmVXyP/black-converse.png",price:110},{id:13,name:"Nike White AirForce",imageUrl:"https://i.ibb.co/1RcFPk0/white-nike-high-tops.png",price:160},{id:14,name:"Nike Red High Tops",imageUrl:"https://i.ibb.co/QcvzydB/nikes-red.png",price:160},{id:15,name:"Nike Brown High Tops",imageUrl:"https://i.ibb.co/fMTV342/nike-brown.png",price:160},{id:16,name:"Air Jordan Limited",imageUrl:"https://i.ibb.co/w4k6Ws9/nike-funky.png",price:190},{id:17,name:"Timberlands",imageUrl:"https://i.ibb.co/Mhh6wBg/timberlands.png",price:200}]},{id:3,title:"Jackets",routeName:"jackets",items:[{id:18,name:"Black Jean Shearling",imageUrl:"https://i.ibb.co/XzcwL5s/black-shearling.png",price:125},{id:19,name:"Blue Jean Jacket",imageUrl:"https://i.ibb.co/mJS6vz0/blue-jean-jacket.png",price:90},{id:20,name:"Grey Jean Jacket",imageUrl:"https://i.ibb.co/N71k1ML/grey-jean-jacket.png",price:90},{id:21,name:"Brown Shearling",imageUrl:"https://i.ibb.co/s96FpdP/brown-shearling.png",price:165},{id:22,name:"Tan Trench",imageUrl:"https://i.ibb.co/M6hHc3F/brown-trench.png",price:185}]},{id:4,title:"Womens",routeName:"womens",items:[{id:23,name:"Blue Tanktop",imageUrl:"https://i.ibb.co/7CQVJNm/blue-tank.png",price:25},{id:24,name:"Floral Blouse",imageUrl:"https://i.ibb.co/4W2DGKm/floral-blouse.png",price:20},{id:25,name:"Floral Dress",imageUrl:"https://i.ibb.co/KV18Ysr/floral-skirt.png",price:80},{id:26,name:"Red Dots Dress",imageUrl:"https://i.ibb.co/N3BN1bh/red-polka-dot-dress.png",price:80},{id:27,name:"Striped Sweater",imageUrl:"https://i.ibb.co/KmSkMbH/striped-sweater.png",price:45},{id:28,name:"Yellow Track Suit",imageUrl:"https://i.ibb.co/v1cvwNf/yellow-track-suit.png",price:135},{id:29,name:"White Blouse",imageUrl:"https://i.ibb.co/qBcrsJg/white-vest.png",price:20}]},{id:5,title:"Mens",routeName:"mens",items:[{id:30,name:"Camo Down Vest",imageUrl:"https://i.ibb.co/xJS0T3Y/camo-vest.png",price:325},{id:31,name:"Floral T-shirt",imageUrl:"https://i.ibb.co/qMQ75QZ/floral-shirt.png",price:20},{id:32,name:"Black & White Longsleeve",imageUrl:"https://i.ibb.co/55z32tw/long-sleeve.png",price:25},{id:33,name:"Pink T-shirt",imageUrl:"https://i.ibb.co/RvwnBL8/pink-shirt.png",price:25},{id:34,name:"Jean Long Sleeve",imageUrl:"https://i.ibb.co/VpW4x5t/roll-up-jean-shirt.png",price:40},{id:35,name:"Burgundy T-shirt",imageUrl:"https://i.ibb.co/mh3VM1f/polka-dot-shirt.png",price:25}]}]},65:function(e,t,n){},71:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),r=n(52),c=n(54),o=n(56);n(65);t.default=function(e){var t=e.match.params.category,n=o.a.find(function(e){return t===e.routeName});return i.a.createElement("div",{className:"category-page"},i.a.createElement(r.a,null),i.a.createElement("h2",null,n.title),i.a.createElement("div",{className:"wrapper"},n.items.map(function(e){return i.a.createElement(c.a,{key:e.id,offer:e})})))}}}]);
//# sourceMappingURL=3.e8c8b90c.chunk.js.map