(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{46:function(e,a,t){"use strict";t.d(a,"a",function(){return n});var n=function(e){return e.cart.cartItems}},47:function(e,a,t){e.exports=t.p+"static/media/crown.ed28accb.svg"},48:function(e,a,t){},49:function(e,a,t){e.exports=t.p+"static/media/shopping-bag.09e6f5e7.svg"},50:function(e,a,t){},52:function(e,a,t){"use strict";var n=t(0),l=t.n(n),c=t(47),r=t.n(c),m=(t(48),t(26)),s=t(51),i=t(19),u=t(46),o=t(49),p=t.n(o),d=(t(50),Object(i.b)(function(e){return{cartItems:Object(u.a)(e)}})(function(e){var a=e.cartItems,t=Object(n.useState)(!1),c=Object(s.a)(t,2),r=c[0],i=c[1];return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"cart",onClick:function(){return i(!r)}},l.a.createElement("img",{src:p.a,alt:"Logo"}),l.a.createElement("span",null,a.reduce(function(e,a){return e+a.quantity},0))),r?l.a.createElement("div",{className:"cart-list"},0===a.length?l.a.createElement("span",{className:"empty"},"Your cart is empty"):l.a.createElement("ul",null,a.map(function(e,a){return l.a.createElement("li",{key:a,className:"cart-item"},l.a.createElement("img",{src:e.imageUrl,alt:e.name}),l.a.createElement("div",{className:"cart-item-info"},l.a.createElement("span",null,e.name),l.a.createElement("span",null,"".concat(e.quantity," x $").concat(e.price))))})),l.a.createElement(m.a,{to:"/checkout",className:"btn"},"go to checkout")):[])}));a.a=function(){return l.a.createElement("header",null,l.a.createElement(m.a,{to:"/",className:"logo-container"},l.a.createElement("img",{src:r.a,alt:"Logo"})),l.a.createElement("div",{className:"options"},l.a.createElement(m.a,{to:"/shop",className:"option"},"SHOP"),l.a.createElement(m.a,{to:"/contact",className:"option"},"CONTACT"),l.a.createElement(m.a,{to:"/sign-in",className:"option"},"SIGN IN"),l.a.createElement(d,null)))}},61:function(e,a,t){},62:function(e,a,t){},63:function(e,a,t){},73:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),c=t(52),r=t(60),m=(t(61),function(){var e=function(e){console.log(e)};return l.a.createElement("div",{className:"auth"},l.a.createElement("h2",null,"I already have an account"),l.a.createElement("span",null,"Sign in with your email and password"),l.a.createElement("form",null,l.a.createElement("div",{className:"form-input"},l.a.createElement("input",{name:"email",type:"email",required:"",className:"input",defaultValue:""}),l.a.createElement("label",null,"email")),l.a.createElement("div",{className:"form-input"},l.a.createElement("input",{name:"password",type:"password",required:"",className:"input",defaultValue:""}),l.a.createElement("label",null,"password")),l.a.createElement("div",{className:"auth-btn"},l.a.createElement("button",{type:"submit",className:"submit"}," Sign in"),l.a.createElement(r.GoogleLogin,{className:"google-btn",clientId:"658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com",buttonText:"SIGN IN WITH GOOGLE",render:function(e){return l.a.createElement("button",{className:"google-btn",onClick:e.onClick,disabled:e.disabled},"SIGN IN WITH GOOGLE")},onSuccess:e,onFailure:e,cookiePolicy:"single_host_origin"}))))}),s=(t(62),function(){return l.a.createElement("div",{className:"registration"},l.a.createElement("h2",null,"I do not have a account"),l.a.createElement("span",null,"Sign up with your email and password"),l.a.createElement("form",null,l.a.createElement("div",{className:"form-input"},l.a.createElement("input",{name:"displayName",type:"text",required:"",className:"input",defaultValue:""}),l.a.createElement("label",null,"Display Name")),l.a.createElement("div",{className:"form-input"},l.a.createElement("input",{name:"email",type:"email",required:"",className:"input",defaultValue:""}),l.a.createElement("label",null,"Email")),l.a.createElement("div",{className:"form-input"},l.a.createElement("input",{name:"password",type:"password",required:"",className:"input",defaultValue:""}),l.a.createElement("label",null,"Password")),l.a.createElement("div",{className:"form-input"},l.a.createElement("input",{name:"confirmPassword",type:"password",required:"",className:"input",defaultValue:""}),l.a.createElement("label",null,"Confirm Password")),l.a.createElement("div",{className:"registration-btn"},l.a.createElement("button",{type:"submit",className:"submit"}," Sign up"))))});t(63),a.default=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(c.a,null),l.a.createElement("div",{className:"sign-in"},l.a.createElement(m,null),l.a.createElement(s,null)))}}}]);
//# sourceMappingURL=6.6c299979.chunk.js.map