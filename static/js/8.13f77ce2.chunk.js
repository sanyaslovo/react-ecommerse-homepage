(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{26:function(e,t,n){"use strict";n.d(t,"a",function(){return E});var a=n(45),r=n(3),c=n(0),i=n.n(c),o=n(5),l=(n(8),n(1)),u=n(2),s=n(4);i.a.Component;i.a.Component;var f=function(e,t){return"function"===typeof e?e(t):e},m=function(e,t){return"string"===typeof e?Object(o.c)(e,null,null,t):e},p=function(e){return e},v=i.a.forwardRef;"undefined"===typeof v&&(v=p);var d=v(function(e,t){var n=e.innerRef,a=e.navigate,r=e.onClick,c=Object(u.a)(e,["innerRef","navigate","onClick"]),o=c.target,s=Object(l.a)({},c,{onClick:function(e){try{r&&r(e)}catch(t){throw e.preventDefault(),t}e.defaultPrevented||0!==e.button||o&&"_self"!==o||function(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}(e)||(e.preventDefault(),a())}});return s.ref=p!==v&&t||n,i.a.createElement("a",s)});var E=v(function(e,t){var n=e.component,r=void 0===n?d:n,c=e.replace,o=e.to,E=e.innerRef,y=Object(u.a)(e,["component","replace","to","innerRef"]);return i.a.createElement(a.d.Consumer,null,function(e){e||Object(s.a)(!1);var n=e.history,a=m(f(o,e.location),e.location),u=a?n.createHref(a):"",d=Object(l.a)({},y,{href:u,navigate:function(){var t=f(o,e.location);(c?n.replace:n.push)(t)}});return p!==v?d.ref=t||E:d.innerRef=E,i.a.createElement(r,d)})}),y=function(e){return e},g=i.a.forwardRef;"undefined"===typeof g&&(g=y);g(function(e,t){var n=e["aria-current"],r=void 0===n?"page":n,c=e.activeClassName,o=void 0===c?"active":c,p=e.activeStyle,v=e.className,d=e.exact,b=e.isActive,h=e.location,N=e.sensitive,O=e.strict,j=e.style,w=e.to,C=e.innerRef,R=Object(u.a)(e,["aria-current","activeClassName","activeStyle","className","exact","isActive","location","sensitive","strict","style","to","innerRef"]);return i.a.createElement(a.d.Consumer,null,function(e){e||Object(s.a)(!1);var n=h||e.location,c=m(f(w,n),n),u=c.pathname,k=u&&u.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1"),x=k?Object(a.e)(n.pathname,{path:k,exact:d,sensitive:N,strict:O}):null,A=!!(b?b(x,n):x),I=A?function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.filter(function(e){return e}).join(" ")}(v,o):v,S=A?Object(l.a)({},j,{},p):j,K=Object(l.a)({"aria-current":A&&r||null,className:I,style:S,to:c},R);return y!==g?K.ref=t||C:K.innerRef=C,i.a.createElement(E,K)})})},46:function(e,t,n){"use strict";n.d(t,"a",function(){return a});var a=function(e){return e.cart.cartItems}},47:function(e,t,n){e.exports=n.p+"static/media/crown.ed28accb.svg"},48:function(e,t,n){},49:function(e,t,n){e.exports=n.p+"static/media/shopping-bag.09e6f5e7.svg"},50:function(e,t,n){},51:function(e,t,n){"use strict";function a(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],a=!0,r=!1,c=void 0;try{for(var i,o=e[Symbol.iterator]();!(a=(i=o.next()).done)&&(n.push(i.value),!t||n.length!==t);a=!0);}catch(l){r=!0,c=l}finally{try{a||null==o.return||o.return()}finally{if(r)throw c}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}n.d(t,"a",function(){return a})},52:function(e,t,n){"use strict";var a=n(0),r=n.n(a),c=n(47),i=n.n(c),o=(n(48),n(26)),l=n(51),u=n(19),s=n(46),f=n(49),m=n.n(f),p=(n(50),Object(u.b)(function(e){return{cartItems:Object(s.a)(e)}})(function(e){var t=e.cartItems,n=Object(a.useState)(!1),c=Object(l.a)(n,2),i=c[0],u=c[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"cart",onClick:function(){return u(!i)}},r.a.createElement("img",{src:m.a,alt:"Logo"}),r.a.createElement("span",null,t.reduce(function(e,t){return e+t.quantity},0))),i?r.a.createElement("div",{className:"cart-list"},0===t.length?r.a.createElement("span",{className:"empty"},"Your cart is empty"):r.a.createElement("ul",null,t.map(function(e,t){return r.a.createElement("li",{key:t,className:"cart-item"},r.a.createElement("img",{src:e.imageUrl,alt:e.name}),r.a.createElement("div",{className:"cart-item-info"},r.a.createElement("span",null,e.name),r.a.createElement("span",null,"".concat(e.quantity," x $").concat(e.price))))})),r.a.createElement(o.a,{to:"/checkout",className:"btn"},"go to checkout")):[])}));t.a=function(){return r.a.createElement("header",null,r.a.createElement(o.a,{to:"/",className:"logo-container"},r.a.createElement("img",{src:i.a,alt:"Logo"})),r.a.createElement("div",{className:"options"},r.a.createElement(o.a,{to:"/shop",className:"option"},"SHOP"),r.a.createElement(o.a,{to:"/contact",className:"option"},"CONTACT"),r.a.createElement(o.a,{to:"/sign-in",className:"option"},"SIGN IN"),r.a.createElement(p,null)))}},69:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(52);t.default=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(c.a,null),r.a.createElement("h1",null,"ContactPage"))}}}]);
//# sourceMappingURL=8.13f77ce2.chunk.js.map