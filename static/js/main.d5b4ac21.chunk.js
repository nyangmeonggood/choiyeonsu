(this.webpackJsonpchoiyeonsu=this.webpackJsonpchoiyeonsu||[]).push([[0],{17:function(e,t,n){},26:function(e,t,n){},27:function(e,t,n){},28:function(e,t,n){},29:function(e,t,n){},30:function(e,t,n){},31:function(e,t,n){},37:function(e,t,n){},38:function(e,t,n){},39:function(e,t,n){"use strict";n.r(t);var i=n(0),c=n(1),s=n.n(c),r=n(19),a=n.n(r),o=n(8),u=n(7),h=n(2);function l(){return Object(i.jsx)(i.Fragment,{children:Object(i.jsx)("h2",{children:"theKingOfMains"})})}function d(){return Object(i.jsx)(i.Fragment,{children:Object(i.jsx)("h2",{children:"Buttonbutton"})})}n(17),n(26);var j=n(11),f=n(12),b="#e00808",x="#ffcc33",O="#0bceda",v=["#e00808","#ffcc33","#0bceda"];n(27);function g(e){var t=e.setCompLoading,n=e.stageWidth,s=e.stageHeight,r=Object(c.useRef)(""),a=Object(c.useRef)(""),o=Object(c.useRef)(""),u=Object(c.useRef)(""),h=Object(c.useRef)(""),l=Object(c.useRef)(),d=Object(c.useRef)(),j=Object(c.useRef)(),f=v,b={x:void 0,y:void 0,radius:100},x=function(){r.current.classList.add("active"),r.current.addEventListener("transitionend",(function(){t(!0),window.localStorage.setItem("Intro",!1)}))},O=function(){b.x=n/2,b.y=s/2,setInterval((function(){b.x=b.y=void 0}),1e3)},g=Object(c.useCallback)((function(){requestAnimationFrame(g),j.current.clearRect(0,0,j.current.canvas.width,j.current.canvas.height);for(var e=0;e<d.current.length;e++)d.current[e].update(j.current,b)}),[d,b]);return Object(c.useEffect)((function(){d.current=[],l.current.width=n,l.current.height=s;for(var e=0;e<1e3;e++){var t=Math.random()*(n-40)+20,i=Math.random()*(s-40)+20,c=2*Math.random()-1,r=2*Math.random()-1,a=Math.floor(3*Math.random()),o=a+2,u=f[a];d.current.push(new y(t,i,c,r,n,s,o,u))}j.current=l.current.getContext("2d"),g()}),[n,s,d,g,f]),Object(c.useEffect)((function(){o.current.classList.add("active"),m(o,u,O,5500),m(u,h,x,2e3)})),Object(i.jsx)(i.Fragment,{children:Object(i.jsxs)("section",{id:"intro",ref:r,children:[Object(i.jsxs)("div",{className:"title",ref:a,children:[Object(i.jsx)("p",{className:"greet",ref:o,children:"Hi, there"}),Object(i.jsxs)("ul",{className:"person",ref:u,children:[Object(i.jsx)("li",{children:Object(i.jsxs)("span",{children:[Object(i.jsx)("b",{children:"\ub6f0\ub294 \uc0ac\ub78c"})," \uc704\uc758,"]})}),Object(i.jsx)("li",{children:Object(i.jsxs)("span",{children:[Object(i.jsx)("b",{children:"\ub098\ub294 \uc0ac\ub78c"})," \uc704\uc758,"]})}),Object(i.jsx)("li",{children:Object(i.jsxs)("span",{children:[Object(i.jsx)("b",{children:"\uc990\uae30\ub294 \uc0ac\ub78c"}),"."]})})]}),Object(i.jsx)("p",{className:"greetEnd",ref:h,children:"\ucd5c\uc5f0\uc218\uc785\ub2c8\ub2e4."})]}),Object(i.jsx)("canvas",{ref:l})]})})}var m=function(e,t,n,i){e.current.addEventListener("animationend",(function(){t.current.classList.add("active"),n&&setTimeout((function(){return n()}),i)}))},y=function(){function e(t,n,i,c,s,r,a,o){Object(j.a)(this,e),this.x=t,this.y=n,this.dx=i,this.dy=c,this.size=0,this.stageWidth=s,this.stageHeight=r,this.angle=a,this.figureAngle=2*Math.PI/this.angle,this.color=o,this.boundary=30,this.minSize=0,this.maxSize=50}return Object(f.a)(e,[{key:"draw",value:function(e){if(e.save(),e.beginPath(),e.fillStyle=this.color,2===this.angle)e.arc(this.x,this.y,this.size,0,2*Math.PI);else{e.translate(this.x,this.y),e.rotate(Math.PI/this.angle+Math.atan2(this.stageWidth/2-this.x,-this.stageHeight/2+this.y));for(var t=0;t<this.angle;t++){var n=Math.sin(this.figureAngle*t)*this.size,i=Math.cos(this.figureAngle*t)*this.size;0===t?e.moveTo(n,i):e.lineTo(n,i)}}e.fill(),e.restore()}},{key:"update",value:function(e,t){this.x+=this.dx,this.y+=this.dy,t.x-this.x<t.radius&&t.x-this.x>-t.radius&&t.y-this.y<t.radius&&t.y-this.y>-t.radius?this.size<this.maxSize&&(this.size+=3):this.size>this.minSize&&(this.size+=-1),this.size<0&&(this.size=0),this.draw(e)}}]),e}();function p(e){var t=e.color;return Object(i.jsx)("figure",{className:"circle",children:Object(i.jsx)("svg",{x:"0px",y:"0px",viewBox:"0 0 200 200",fill:t,children:Object(i.jsx)("g",{children:Object(i.jsx)("circle",{cx:"100",cy:"100",r:"90"})})})})}function w(e){var t=e.color;return Object(i.jsx)("figure",{className:"triangle",children:Object(i.jsx)("svg",{x:"0px",y:"0px",viewBox:"0 0 200 200",fill:t,children:Object(i.jsx)("polygon",{points:"190,177.5 10,178.1 99.4,21.9 "})})})}function M(e){var t=e.color;return Object(i.jsx)("figure",{className:"square",children:Object(i.jsx)("svg",{x:"0px",y:"0px",viewBox:"0 0 200 200",fill:t,children:Object(i.jsx)("rect",{x:"10",y:"10",width:"180",height:"180"})})})}n(28);function L(e){var t=e.isLoading,n=e.setIsLoading,s=Object(c.useRef)(-1),r=Object(c.useRef)();return Object(c.useEffect)((function(){if(!t){var e=document.querySelector(".figureBox").children;r.current=setInterval((function(){s.current+=1,s.current>2&&(s.current=0),E(s.current,e)}),1e3)}document.getElementById("loading").addEventListener("transitionend",(function(){clearInterval(r.current),n(!0)}))}),[t,n]),Object(i.jsx)("div",{id:"loading",children:Object(i.jsxs)("div",{className:"figureBox",children:[Object(i.jsx)(p,{color:b}),Object(i.jsx)(w,{color:x}),Object(i.jsx)(M,{color:O})]})})}var E=function(e,t){Object.values(t).forEach((function(e){e.classList.remove("active")})),t[e].classList.add("active")};n(29);function z(){var e=function(e){var t=Object(c.useState)({x:void 0,y:void 0,radius:void 0}),n=Object(o.a)(t,2),i=n[0],s=n[1];return Object(c.useEffect)((function(){var t=function(t){return s({x:t.clientX,y:t.clientY,radius:e})};return window.addEventListener("mousemove",t),function(){window.removeEventListener("mousemove",t)}})),i}();return Object(c.useEffect)((function(){var t=document.getElementById("cursor");S(t,e.x,e.y)})),Object(i.jsx)(i.Fragment,{children:Object(i.jsx)("div",{id:"cursor"})})}var S=function(e,t,n){window.addEventListener("mousemove",(function(i){e.style.top="".concat(n,"px"),e.style.left="".concat(t,"px")}))},I=[0,1];n(30),n(31);function R(e){var t,n,s=e.stageWidth,r=e.stageHeight,a=e.mainRef,o=Object(c.useRef)(),u=Object(c.useRef)(),h=Object(c.useRef)(),l=Object(c.useRef)(),d=v,j=a,f={x:s/2,y:r/2,radius:100},b=function(e){f.x=e.clientX,f.y=e.clientY,f.y<=.2*r&&(f.y=.2*r),f.y>=.8*r&&(f.y=.8*r)},x=Object(c.useCallback)((function(){if(requestAnimationFrame(x),l.current.clearRect(0,0,l.current.canvas.width,l.current.canvas.height),t&&t[2]<n&&t[3]>n)for(var e=0;e<h.current.length;e++)h.current[e].update(l.current,f)}),[h]),O=function(){n=window.scrollY};return Object(c.useEffect)((function(){h.current=[],u.current.width=s,u.current.height=r;for(var e=0;e<1e3;e++){var t=Math.random()*(s-40)+20,n=Math.random()*(r-40)+20,i=2*Math.random()-1,c=2*Math.random()-1,a=Math.floor(3*Math.random()),o=a+2,l=d[a];h.current.push(new B(t,n,i,c,s,r,o,l))}}),[s,r,h,d]),Object(c.useEffect)((function(){setInterval((function(){f.x=f.y=void 0}),1e3),l.current=u.current.getContext("2d"),x(),t=[];for(var e=0;e<j.current.children.length;e++)t.push(j.current.children[e].offsetTop);console.log(t)}),[]),Object(c.useEffect)((function(){return window.addEventListener("mousemove",(function(e){b(e)})),window.removeEventListener("mousemove",(function(e){b(e)}))})),Object(c.useEffect)((function(){return window.addEventListener("scroll",(function(){O()})),window.removeEventListener("scroll",(function(){O()}))})),Object(i.jsx)(i.Fragment,{children:Object(i.jsx)("section",{id:"Particle",ref:o,children:Object(i.jsx)("canvas",{id:"ParticleCanvas",ref:u})})})}var B=function(){function e(t,n,i,c,s,r,a,o){Object(j.a)(this,e),this.x=t,this.y=n,this.dx=i,this.dy=c,this.size=0,this.stageWidth=s,this.stageHeight=r,this.angle=a,this.figureAngle=2*Math.PI/this.angle,this.color=o,this.boundary=30,this.minSize=0,this.maxSize=50}return Object(f.a)(e,[{key:"draw",value:function(e){if(e.save(),e.beginPath(),e.fillStyle=this.color,2===this.angle)e.arc(this.x,this.y,this.size,0,2*Math.PI);else{e.translate(this.x,this.y),e.rotate(Math.PI/this.angle+Math.atan2(this.stageWidth/2-this.x,-this.stageHeight/2+this.y));for(var t=0;t<this.angle;t++){var n=Math.sin(this.figureAngle*t)*this.size,i=Math.cos(this.figureAngle*t)*this.size;0===t?e.moveTo(n,i):e.lineTo(n,i)}}e.fill(),e.restore()}},{key:"update",value:function(e,t){(this.x+this.size>this.stageWidth||this.x-this.size<0)&&(this.dx*=-1),(this.y+this.size>this.stageHeight||this.y-this.size<0)&&(this.dy*=-1),this.x+=this.dx,this.y+=this.dy,t.x-this.x<t.radius&&t.x-this.x>-t.radius&&t.y-this.y<t.radius&&t.y-this.y>-t.radius?this.size<this.maxSize&&(this.size+=3):this.size>this.minSize&&(this.size+=-1),this.size<0&&(this.size=0),this.draw(e)}}]),e}();function C(e){var t,n,s=e.stageWidth,r=e.stageHeight,a=Object(c.useRef)(),o=Object(c.useRef)(),h=Object(c.useRef)(),l=Object(c.useRef)(),d=Object(c.useRef)(),j=Object(c.useRef)(),f=function(){t=window.scrollY,a.current.offsetTop<=t?a.current.classList.add("active"):a.current.classList.remove("active"),t>=100?document.querySelector("header").classList.add("active"):document.querySelector("header").classList.remove("active"),n=N(t,a),H(a.current.children,n),function(e,t,n,i,c){var s,r;r=n-(t-1)*i,(s=c[0]+(c[1]-c[0])*r/i)>=c[1]&&(s=c[1]),e.style.opacity=s}(document.querySelector(".part1"),1,t,h.current,I)};return Object(c.useEffect)((function(){return j.current=a.current.clientHeight,l.current=a.current.children.length,h.current=j.current/l.current,a.current.style.height="".concat(100*l.current,"vh"),o.current=window.innerHeight+j.current,d.current=Object.values(a.current.children),window.addEventListener("scroll",(function(){a.current&&f()})),window.removeEventListener("scroll",(function(){a.current&&f()}))})),Object(i.jsxs)(i.Fragment,{children:[Object(i.jsxs)("section",{id:"main",ref:a,children:[Object(i.jsx)("div",{className:"part part1",children:"1"}),Object(i.jsx)("div",{className:"part part2",children:"2"}),Object(i.jsx)("div",{className:"part part3",children:"3"}),Object(i.jsx)("div",{className:"part part4",children:"4"}),Object(i.jsx)("div",{className:"part part5",children:"5"}),Object(i.jsxs)("div",{className:"part part6",children:[Object(i.jsx)(u.b,{to:"/theKingOfMains",children:"theKingOfMains"}),Object(i.jsx)("br",{}),Object(i.jsx)(u.b,{to:"/Buttonbutton",children:"ButtonButton"})]})]}),Object(i.jsx)(R,{stageWidth:s,stageHeight:r,mainRef:a})]})}var H=function(e,t){Object.values(e).forEach((function(e){e.classList.remove("active")})),e[t].classList.add("active")},N=function(e,t){var n=Math.floor(e*t.current.children.length/t.current.clientHeight-1);return n<0&&(n=0),n>t.current.children.length-1&&(n=t.current.children.length-1),n},k=function(e,t,n,i){for(var c,s=document.getElementById(e),r=0;r<t.length;r++){var a=document.createElement(n);c=i?Math.floor(Math.random()*t.length)+1:r+1,a.style.setProperty("--i",c),a.innerHTML=t.charAt(r),s.appendChild(a)}};n(37);function W(e){e.stageWidth,e.stageHeight,e.setCompLoading;var t=Object(c.useRef)();return Object(c.useEffect)((function(){k("mainTitle","\ud3ec\ud2b8\ud3f4\ub9ac\uc624","span"),setTimeout((function(){t.current.classList.add("active");for(var e=Math.floor(Math.random()*v.length),n="",i=0;i<10;i++)n+=(n?",":"")+"".concat(i+1,"px ").concat(i+1,"px 0 ").concat(v[e]);t.current.style.textShadow=n}),1e3)}),[]),Object(i.jsxs)("section",{id:"face",children:[Object(i.jsx)("p",{onClick:function(){"false"!==window.localStorage.getItem("Intro")?"true"!==window.localStorage.getItem("Intro")||window.localStorage.setItem("Intro",!1):window.localStorage.setItem("Intro",!0)},children:"\uc778\ud2b8\ub85c on/off"}),Object(i.jsx)("div",{id:"mainTitle",ref:t})]})}function P(){var e=Object(c.useState)(!1),t=Object(o.a)(e,2),n=t[0],s=t[1],r=Object(c.useState)(!1),a=Object(o.a)(r,2),u=a[0],h=a[1],l=Object(c.useState)(document.body.clientWidth),d=Object(o.a)(l,2),j=d[0],f=d[1],b=Object(c.useState)(document.body.clientHeight),x=Object(o.a)(b,2),O=x[0],v=x[1],m=function(){f(document.body.clientWidth),v(document.body.clientHeight)};return Object(c.useEffect)((function(){document.getElementById("loading").classList.add("active"),"false"===window.localStorage.getItem("Intro")&&h(!0)}),[]),Object(c.useEffect)((function(){return window.addEventListener("resize",(function(e){m()})),window.removeEventListener("resize",(function(e){m()}))}),[j,O]),Object(i.jsxs)(i.Fragment,{children:[!n&&Object(i.jsx)(L,{isLoading:n,setIsLoading:s}),n&&!u&&Object(i.jsx)(g,{setCompLoading:h,stageWidth:j,stageHeight:O}),u&&Object(i.jsx)(W,{stageWidth:j,stageHeight:O,setCompLoading:h}),u&&Object(i.jsx)(C,{stageWidth:j,stageHeight:O}),n&&Object(i.jsx)(z,{})]})}function T(){return Object(i.jsxs)("svg",{x:"0px",y:"0px",viewBox:"0 0 100 100",children:[Object(i.jsx)("circle",{cx:"38.9",cy:"37.8",r:"19",fill:b}),Object(i.jsx)("rect",{x:"67",y:"32.6",transform:"matrix(0.9507 -0.3101 0.3101 0.9507 -11.2381 23.4648)",width:"2.3",height:"29",fill:O}),Object(i.jsx)("polygon",{points:"63.8,81.1 38.9,74.4 57.1,56.1 ",fill:x})]})}n(38);function A(e){var t=e.menu,n=e.setMenu,s=Object(c.useRef)(),r=Object(c.useRef)(),a=Object(c.useRef)(),o=function(){n((function(e){return!e}))};return Object(c.useEffect)((function(){t?(r.current.classList.add("active"),document.querySelector("#Portfolio").classList.add("menuOn")):(r.current.classList.remove("active"),document.querySelector("#Portfolio").classList.remove("menuOn"))}),[t,s,r]),Object(c.useEffect)((function(){var e=Object.values(a.current.children);k("navAbout","About","span",!0),k("navTheKingOfMains","TheKingOfMains","span",!0),k("navButtonButton","ButtonButton","span",!0),k("navContact","Contact","span",!0),e.map((function(e){e.addEventListener("mouseenter",(function(){var t=Math.floor(Math.random()*v.length);e.style.textShadow="10px 10px 0 ".concat(v[t])})),e.addEventListener("mouseleave",(function(){e.style.textShadow="0px 0px 0 transparent"}))}))}),[]),Object(i.jsxs)(i.Fragment,{children:[Object(i.jsxs)("header",{children:[Object(i.jsx)("h1",{children:Object(i.jsx)(u.b,{to:"/",children:Object(i.jsx)(T,{})})}),Object(i.jsxs)("div",{className:"menu",ref:s,onClick:o,children:[Object(i.jsx)("span",{}),Object(i.jsx)("span",{}),Object(i.jsx)("span",{})]})]}),Object(i.jsxs)("section",{id:"menuModal",ref:r,children:[Object(i.jsx)("div",{className:"blink"}),Object(i.jsx)("div",{className:"menu",onClick:o,children:"\ub2eb\uae30"}),Object(i.jsx)("div",{className:"content",children:Object(i.jsxs)("ul",{ref:a,children:[Object(i.jsx)("li",{children:Object(i.jsx)("b",{children:Object(i.jsx)(u.b,{to:"/",onClick:o,id:"navAbout"})})}),Object(i.jsx)("li",{children:Object(i.jsx)("b",{children:Object(i.jsx)(u.b,{to:"/theKingOfMains",onClick:o,id:"navTheKingOfMains"})})}),Object(i.jsx)("li",{children:Object(i.jsx)("b",{children:Object(i.jsx)(u.b,{to:"/Buttonbutton",onClick:o,id:"navButtonButton"})})}),Object(i.jsx)("li",{children:Object(i.jsx)("b",{children:Object(i.jsx)(u.b,{to:"/Buttonbutton",onClick:o,id:"navContact"})})})]})})]})]})}var F=function(){var e=Object(c.useState)(!1),t=Object(o.a)(e,2),n=t[0],s=t[1];return Object(i.jsx)(i.Fragment,{children:Object(i.jsxs)(u.a,{children:[Object(i.jsx)(A,{menu:n,setMenu:s}),Object(i.jsx)(h.a,{path:"/",exact:!0,component:P}),Object(i.jsx)(h.a,{path:"/theKingOfMains",component:l}),Object(i.jsx)(h.a,{path:"/buttonbutton",component:d})]})})};a.a.render(Object(i.jsx)(s.a.StrictMode,{children:Object(i.jsx)(F,{})}),document.getElementById("Portfolio"))}},[[39,1,2]]]);
//# sourceMappingURL=main.d5b4ac21.chunk.js.map