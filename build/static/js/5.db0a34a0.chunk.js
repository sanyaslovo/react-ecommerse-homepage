(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{26:function(e,t,n){"use strict";n.d(t,"a",function(){return d});var a=n(45),r=n(3),c=n(0),i=n.n(c),l=n(5),o=(n(8),n(1)),s=n(2),u=n(4);i.a.Component;i.a.Component;var m=function(e,t){return"function"===typeof e?e(t):e},f=function(e,t){return"string"===typeof e?Object(l.c)(e,null,null,t):e},p=function(e){return e},g=i.a.forwardRef;"undefined"===typeof g&&(g=p);var v=g(function(e,t){var n=e.innerRef,a=e.navigate,r=e.onClick,c=Object(s.a)(e,["innerRef","navigate","onClick"]),l=c.target,u=Object(o.a)({},c,{onClick:function(e){try{r&&r(e)}catch(t){throw e.preventDefault(),t}e.defaultPrevented||0!==e.button||l&&"_self"!==l||function(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}(e)||(e.preventDefault(),a())}});return u.ref=p!==g&&t||n,i.a.createElement("a",u)});var d=g(function(e,t){var n=e.component,r=void 0===n?v:n,c=e.replace,l=e.to,d=e.innerRef,y=Object(s.a)(e,["component","replace","to","innerRef"]);return i.a.createElement(a.d.Consumer,null,function(e){e||Object(u.a)(!1);var n=e.history,a=f(m(l,e.location),e.location),s=a?n.createHref(a):"",v=Object(o.a)({},y,{href:s,navigate:function(){var t=m(l,e.location);(c?n.replace:n.push)(t)}});return p!==g?v.ref=t||d:v.innerRef=d,i.a.createElement(r,v)})}),y=function(e){return e},E=i.a.forwardRef;"undefined"===typeof E&&(E=y);E(function(e,t){var n=e["aria-current"],r=void 0===n?"page":n,c=e.activeClassName,l=void 0===c?"active":c,p=e.activeStyle,g=e.className,v=e.exact,b=e.isActive,h=e.location,N=e.sensitive,k=e.strict,O=e.style,j=e.to,C=e.innerRef,w=Object(s.a)(e,["aria-current","activeClassName","activeStyle","className","exact","isActive","location","sensitive","strict","style","to","innerRef"]);return i.a.createElement(a.d.Consumer,null,function(e){e||Object(u.a)(!1);var n=h||e.location,c=f(m(j,n),n),s=c.pathname,U=s&&s.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1"),I=U?Object(a.e)(n.pathname,{path:U,exact:v,sensitive:N,strict:k}):null,R=!!(b?b(I,n):I),S=R?function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.filter(function(e){return e}).join(" ")}(g,l):g,x=R?Object(o.a)({},O,{},p):O,A=Object(o.a)({"aria-current":R&&r||null,className:S,style:x,to:c},w);return y!==E?A.ref=t||C:A.innerRef=C,i.a.createElement(d,A)})})},46:function(e,t,n){"use strict";n.d(t,"a",function(){return a});var a=function(e){return e.cart.cartItems}},47:function(e,t,n){e.exports=n.p+"static/media/crown.19ef7b17.svg"},48:function(e,t,n){},49:function(e,t,n){e.exports=n.p+"static/media/shopping-bag.30f07071.svg"},50:function(e,t,n){},51:function(e,t,n){"use strict";function a(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],a=!0,r=!1,c=void 0;try{for(var i,l=e[Symbol.iterator]();!(a=(i=l.next()).done)&&(n.push(i.value),!t||n.length!==t);a=!0);}catch(o){r=!0,c=o}finally{try{a||null==l.return||l.return()}finally{if(r)throw c}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}n.d(t,"a",function(){return a})},52:function(e,t,n){"use strict";var a=n(0),r=n.n(a),c=n(47),i=n.n(c),l=(n(48),n(26)),o=n(51),s=n(19),u=n(46),m=n(49),f=n.n(m),p=(n(50),Object(s.b)(function(e){return{cartItems:Object(u.a)(e)}})(function(e){var t=e.cartItems,n=Object(a.useState)(!0),c=Object(o.a)(n,2),i=c[0],s=c[1];localStorage.setItem("ItemsInCart",JSON.stringify(t));var u=JSON.parse(localStorage.getItem("ItemsInCart"));return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"cart",onClick:function(){return s(!i)}},r.a.createElement("img",{src:f.a,alt:"Logo"}),r.a.createElement("span",null,t.reduce(function(e,t){return e+t.quantity},0))),i?r.a.createElement("div",{className:"cart-list"},0===u.length?r.a.createElement("span",{className:"empty"},"Your cart is empty"):r.a.createElement("ul",null,t.map(function(e,t){return r.a.createElement("li",{key:t,className:"cart-item"},r.a.createElement("img",{src:e.imageUrl,alt:e.name}),r.a.createElement("div",{className:"cart-item-info"},r.a.createElement("span",null,e.name),r.a.createElement("span",null,"".concat(e.quantity," x $").concat(e.price))))})),r.a.createElement(l.a,{to:"/checkout",className:"btn"},"go to checkout")):[])}));t.a=function(){return r.a.createElement("header",null,r.a.createElement(l.a,{to:"/",className:"logo-container"},r.a.createElement("img",{src:i.a,alt:"Logo"})),r.a.createElement("div",{className:"options"},r.a.createElement(l.a,{to:"/shop",className:"option"},"SHOP"),r.a.createElement(l.a,{to:"/contact",className:"option"},"CONTACT"),r.a.createElement(l.a,{to:"/sign-in",className:"option"},"SIGN IN"),r.a.createElement(p,null)))}},57:function(e,t,n){},58:function(e,t,n){},72:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(52),i=(n(57),n(58),n(26)),l=function(e){var t=e.title,n=e.imageUrl,a=e.linkUrl,c=e.size,l={backgroundImage:"url("+n+")"},o=c?"itemCategory "+c:"itemCategory",s="/shop/".concat(a);return r.a.createElement(i.a,{to:s,className:o},r.a.createElement("div",{className:"backgroundImg",style:l}),r.a.createElement("div",{className:"category-content"},r.a.createElement("span",{className:"category-title"},t),r.a.createElement("span",{className:"category-action"},"SHOP NOW")))},o=function(e){var t=e.categories;return r.a.createElement("div",{className:"directory-menu"},t.map(function(e){return r.a.createElement(l,{key:e.id,title:e.title,imageUrl:e.imageUrl,linkUrl:e.linkUrl,size:e.size})}))},s=[{title:"hats",imageUrl:"https://i.ibb.co/cvpntL1/hats.png",id:1,linkUrl:"hats"},{title:"jackets",imageUrl:"https://i.ibb.co/px2tCc3/jackets.png",id:2,linkUrl:"jackets"},{title:"sneakers",imageUrl:"https://i.ibb.co/0jqHpnp/sneakers.png",id:3,linkUrl:"sneakers"},{title:"womens",imageUrl:"https://i.ibb.co/GCCdy8t/womens.png",size:"large",id:4,linkUrl:"womens"},{title:"mens",imageUrl:"https://i.ibb.co/R70vBrQ/men.png",size:"large",id:5,linkUrl:"mens"}];t.default=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(c.a,null),r.a.createElement(o,{categories:s}))}}}]);
//# sourceMappingURL=5.db0a34a0.chunk.js.map