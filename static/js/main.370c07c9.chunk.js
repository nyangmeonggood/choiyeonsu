(this.webpackJsonpchoiyeonsu=this.webpackJsonpchoiyeonsu||[]).push([[0],Array(18).concat([function(t,e,n){},function(t,e,n){},,,,,,,,,function(t,e,n){},,,,,,function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){"use strict";n.r(e);var i=n(0),c=n(1),s=n.n(c),r=n(20),a=n.n(r),o=n(8),u=n(7),l=n(2),h="#e00808",d="#ffcc33",j="#0bceda",f=["#e00808","#ffcc33","#0bceda"];function b(){return Object(i.jsxs)("svg",{x:"0px",y:"0px",viewBox:"0 0 100 100",children:[Object(i.jsx)("circle",{cx:"38.9",cy:"37.8",r:"19",fill:h}),Object(i.jsx)("rect",{x:"67",y:"32.6",transform:"matrix(0.9507 -0.3101 0.3101 0.9507 -11.2381 23.4648)",width:"2.3",height:"29",fill:j}),Object(i.jsx)("polygon",{points:"63.8,81.1 38.9,74.4 57.1,56.1 ",fill:d})]})}n(28);var x=function(t,e,n,i){for(var c,s=document.getElementById(t),r=0;r<e.length;r++){var a=document.createElement(n);c=i?Math.floor(Math.random()*e.length)+1:r+1,a.style.setProperty("--i",c),a.dataset.delay=c,a.innerHTML=e.charAt(r),s.appendChild(a)}};function O(t){var e=t.menu,n=t.setMenu,s=Object(c.useRef)(),r=Object(c.useRef)(),a=Object(c.useRef)(),o=Object(c.useRef)(),l=Object(c.useRef)(),h=function(){n((function(t){return!t}));var t=Math.floor(Math.random()*f.length);a.current.style.backgroundColor=f[t],document.getElementById("mainTitle")&&document.getElementById("mainTitle").classList.remove("active")},d=function(){n((function(t){return!t})),document.getElementById("mainTitle")&&document.getElementById("mainTitle").classList.add("active")};return Object(c.useEffect)((function(){e?(r.current.classList.add("active"),document.querySelector("#Portfolio").classList.add("menuOn")):(r.current.classList.remove("active"),document.querySelector("#Portfolio").classList.remove("menuOn"))}),[e,s,r]),Object(c.useEffect)((function(){var t=Object.values(o.current.children);x("navAbout","About","span",!0),x("navTheKingOfMains","TheKingOfMains","span",!0),x("navButtonButton","ButtonButton","span",!0),x("navMain","Title","span",!0),t.forEach((function(t){t.addEventListener("mouseenter",(function(){var e=Math.floor(Math.random()*f.length);t.style.textShadow="10px 10px 0 ".concat(f[e])})),t.addEventListener("mouseleave",(function(){t.style.textShadow="0px 0px 0 transparent"}))}))}),[]),Object(i.jsxs)(i.Fragment,{children:[Object(i.jsxs)("header",{children:[Object(i.jsx)("h1",{children:Object(i.jsx)(u.b,{to:"/",children:Object(i.jsx)(b,{})})}),Object(i.jsxs)("div",{className:"menu",ref:s,onClick:h,children:[Object(i.jsx)("span",{}),Object(i.jsx)("span",{}),Object(i.jsx)("span",{})]})]}),Object(i.jsxs)("section",{id:"menuModal",ref:r,children:[Object(i.jsx)("div",{className:"blink",ref:a}),Object(i.jsxs)("div",{className:"content",children:[Object(i.jsx)("div",{className:"menu",onClick:d,children:"CLOSE"}),Object(i.jsx)("div",{className:"logo",ref:l,children:Object(i.jsx)(b,{})}),Object(i.jsxs)("ul",{ref:o,children:[Object(i.jsx)("li",{"data-desc":"Who is yeonsu?",children:Object(i.jsx)("b",{children:Object(i.jsx)(u.b,{to:"/about",onClick:h,id:"navAbout"})})}),Object(i.jsx)("li",{"data-desc":"What is best design of main?",children:Object(i.jsx)("b",{children:Object(i.jsx)(u.b,{to:"/theKingOfMains",onClick:h,id:"navTheKingOfMains"})})}),Object(i.jsx)("li",{"data-desc":"Every Buttons what you want",children:Object(i.jsx)("b",{children:Object(i.jsx)(u.b,{to:"/Buttonbutton",onClick:h,id:"navButtonButton"})})}),Object(i.jsx)("li",{"data-desc":"Go Home",children:Object(i.jsx)("b",{children:Object(i.jsx)(u.b,{to:"/",onClick:d,id:"navMain"})})})]})]})]})]})}n(18),n(34);var g=n(9),v=n(10);n(35);function m(t){var e=t.setCompLoading,n=t.stageWidth,s=t.stageHeight,r=t.setMenu,a=Object(c.useRef)(""),o=Object(c.useRef)(""),u=Object(c.useRef)(""),l=Object(c.useRef)(""),h=Object(c.useRef)(""),d=Object(c.useRef)(),j=Object(c.useRef)(),b=Object(c.useRef)(),x=f,O={x:void 0,y:void 0,radius:100},g=function(){a.current.classList.add("active"),a.current.addEventListener("transitionend",(function(){e(!0),window.localStorage.setItem("Intro",!1);var t=Math.floor(Math.random()*f.length);document.querySelector(".blink").style.backgroundColor=f[t],r(!0)}))},v=function(){O.x=n/2,O.y=s/2,setInterval((function(){O.x=O.y=void 0}),1e3)},m=Object(c.useCallback)((function(){requestAnimationFrame(m),b.current.clearRect(0,0,b.current.canvas.width,b.current.canvas.height);for(var t=0;t<j.current.length;t++)j.current[t].update(b.current,O)}),[j,O]);return Object(c.useEffect)((function(){j.current=[],d.current.width=n,d.current.height=s;for(var t=0;t<1e3;t++){var e=Math.random()*(n-40)+20,i=Math.random()*(s-40)+20,c=2*Math.random()-1,r=2*Math.random()-1,a=Math.floor(3*Math.random()),o=a+2,u=x[a];j.current.push(new p(e,i,c,r,n,s,o,u))}b.current=d.current.getContext("2d"),m()}),[n,s,j,m,x]),Object(c.useEffect)((function(){u.current.classList.add("active"),y(u,l,v,5500),y(l,h,g,2e3)})),Object(i.jsx)(i.Fragment,{children:Object(i.jsxs)("section",{id:"intro",ref:a,children:[Object(i.jsxs)("div",{className:"title",ref:o,children:[Object(i.jsx)("p",{className:"greet",ref:u,children:"\uc548\ub155\ud558\uc138\uc694. \ubc18\uac11\uc2b5\ub2c8\ub2e4."}),Object(i.jsxs)("ul",{className:"person",ref:l,children:[Object(i.jsx)("li",{children:Object(i.jsxs)("span",{children:[Object(i.jsx)("b",{children:"\ub6f0\ub294 \uc0ac\ub78c"})," \uc704\uc758,"]})}),Object(i.jsx)("li",{children:Object(i.jsxs)("span",{children:[Object(i.jsx)("b",{children:"\ub098\ub294 \uc0ac\ub78c"})," \uc704\uc758,"]})}),Object(i.jsx)("li",{children:Object(i.jsxs)("span",{children:[Object(i.jsx)("b",{children:"\uc990\uae30\ub294 \uc0ac\ub78c"}),"."]})})]}),Object(i.jsx)("p",{className:"greetEnd",ref:h,children:"\ucd5c\uc5f0\uc218\uc785\ub2c8\ub2e4."})]}),Object(i.jsx)("canvas",{ref:d})]})})}var y=function(t,e,n,i){t.current.addEventListener("animationend",(function(){e.current.classList.add("active"),n&&setTimeout((function(){return n()}),i)}))},p=function(){function t(e,n,i,c,s,r,a,o){Object(g.a)(this,t),this.x=e,this.y=n,this.dx=i,this.dy=c,this.size=0,this.stageWidth=s,this.stageHeight=r,this.angle=a,this.figureAngle=2*Math.PI/this.angle,this.color=o,this.boundary=30,this.minSize=0,this.maxSize=50}return Object(v.a)(t,[{key:"draw",value:function(t){if(t.save(),t.beginPath(),t.fillStyle=this.color,2===this.angle)t.arc(this.x,this.y,this.size,0,2*Math.PI);else{t.translate(this.x,this.y),t.rotate(Math.PI/this.angle+Math.atan2(this.stageWidth/2-this.x,-this.stageHeight/2+this.y));for(var e=0;e<this.angle;e++){var n=Math.sin(this.figureAngle*e)*this.size,i=Math.cos(this.figureAngle*e)*this.size;0===e?t.moveTo(n,i):t.lineTo(n,i)}}t.fill(),t.restore()}},{key:"update",value:function(t,e){this.x+=this.dx,this.y+=this.dy,e.x-this.x<e.radius&&e.x-this.x>-e.radius&&e.y-this.y<e.radius&&e.y-this.y>-e.radius?this.size<this.maxSize&&(this.size+=3):this.size>this.minSize&&(this.size+=-1),this.size<0&&(this.size=0),this.draw(t)}}]),t}();function w(t){var e=t.color;return Object(i.jsx)("figure",{className:"circle",children:Object(i.jsx)("svg",{x:"0px",y:"0px",viewBox:"0 0 200 200",fill:e,children:Object(i.jsx)("g",{children:Object(i.jsx)("circle",{cx:"100",cy:"100",r:"90"})})})})}function M(t){var e=t.color;return Object(i.jsx)("figure",{className:"triangle",children:Object(i.jsx)("svg",{x:"0px",y:"0px",viewBox:"0 0 200 200",fill:e,children:Object(i.jsx)("polygon",{points:"190,177.5 10,178.1 99.4,21.9 "})})})}function E(t){var e=t.color;return Object(i.jsx)("figure",{className:"square",children:Object(i.jsx)("svg",{x:"0px",y:"0px",viewBox:"0 0 200 200",fill:e,children:Object(i.jsx)("rect",{x:"10",y:"10",width:"180",height:"180"})})})}n(36);function L(t){var e=t.isLoading,n=t.setIsLoading,s=Object(c.useRef)(-1),r=Object(c.useRef)();return Object(c.useEffect)((function(){if(!e){var t=document.querySelector(".figureBox").children;r.current=setInterval((function(){s.current+=1,s.current>2&&(s.current=0),S(s.current,t)}),1e3)}document.getElementById("loading").addEventListener("transitionend",(function(){clearInterval(r.current),n(!0)}))}),[e,n]),Object(i.jsx)("div",{id:"loading",children:Object(i.jsxs)("div",{className:"figureBox",children:[Object(i.jsx)(w,{color:h}),Object(i.jsx)(M,{color:d}),Object(i.jsx)(E,{color:j})]})})}var S=function(t,e){Object.values(e).forEach((function(t){t.classList.remove("active")})),e[t].classList.add("active")};n(37);n(19);function N(t){var e=t.stageWidth,n=t.stageHeight,s=Object(c.useRef)(),r=Object(c.useRef)(),a=Object(c.useRef)(),o=(Object(c.useRef)(),Object(c.useRef)()),u=Object(c.useRef)(),l=f,h={x:void 0,y:void 0,radius:100},d=function(t){h.x=t.clientX,h.y=t.clientY},j=Object(c.useCallback)((function(){requestAnimationFrame(j),u.current.clearRect(0,0,u.current.canvas.width,u.current.canvas.height);for(var t=0;t<a.current.length;t++)a.current[t].update(u.current,h)}),[]),b=function(){window.scrollY};return Object(c.useEffect)((function(){a.current=[],r.current.width=e,r.current.height=n;for(var t=0;t<1e3;t++){var i=Math.random()*(e-40)+20,c=Math.random()*(n-40)+20,s=2*Math.random()-1,o=2*Math.random()-1,u=Math.floor(3*Math.random()),h=u+2,d=l[u];a.current.push(new R(i,c,s,o,e,n,h,d))}}),[e,n,a,o,l]),Object(c.useEffect)((function(){u.current=r.current.getContext("2d"),j()}),[]),Object(c.useEffect)((function(){return window.addEventListener("mousemove",(function(t){d(t)})),window.removeEventListener("mousemove",(function(t){d(t)}))})),Object(c.useEffect)((function(){return window.addEventListener("scroll",(function(){b()})),window.removeEventListener("scroll",(function(){b()}))})),Object(i.jsx)(i.Fragment,{children:Object(i.jsx)("section",{id:"Particle",ref:s,children:Object(i.jsx)("canvas",{id:"ParticleCanvas",ref:r})})})}var R=function(){function t(e,n,i,c,s,r,a,o){Object(g.a)(this,t),this.x=e,this.y=n,this.dx=i,this.dy=c,this.size=0,this.stageWidth=s,this.stageHeight=r,this.angle=a,this.figureAngle=2*Math.PI/this.angle,this.color=o,this.boundary=30,this.minSize=0,this.maxSize=50}return Object(v.a)(t,[{key:"draw",value:function(t){if(t.save(),t.beginPath(),t.fillStyle=this.color,2===this.angle)t.arc(this.x,this.y,this.size,0,2*Math.PI);else{t.translate(this.x,this.y),t.rotate(Math.PI/this.angle+Math.atan2(this.stageWidth/2-this.x,-this.stageHeight/2+this.y));for(var e=0;e<this.angle;e++){var n=Math.sin(this.figureAngle*e)*this.size,i=Math.cos(this.figureAngle*e)*this.size;0===e?t.moveTo(n,i):t.lineTo(n,i)}}t.fill(),t.restore()}},{key:"update",value:function(t,e){(this.x+this.size>this.stageWidth||this.x-this.size<0)&&(this.dx*=-1),(this.y+this.size>this.stageHeight||this.y-this.size<0)&&(this.dy*=-1),this.x+=this.dx,this.y+=this.dy,e.x-this.x<e.radius&&e.x-this.x>-e.radius&&e.y-this.y<e.radius&&e.y-this.y>-e.radius?this.size<this.maxSize&&(this.size+=3):this.size>this.minSize&&(this.size+=-1),this.size<0&&(this.size=0),this.draw(t)}}]),t}();n(38),n(39);function k(t){var e=t.id,n=t.text,s=Object(c.useRef)(),r=e?"".concat(e):"shadow".concat(n);return Object(c.useEffect)((function(){x(r,n,"span");s.current.children.length;Object.values(s.current.children).forEach((function(t){var e=t.dataset.delay;t.style.transition="color 0.5s 1s, text-stroke 0.5s 1s,\n      text-stroke-color 0.5s 1s, transform 0.5s ".concat(.1*e,"s")})),setTimeout((function(){if(s.current){s.current.classList.add("active");for(var t=Math.floor(Math.random()*f.length),e="",n=0;n<10;n++)e+=(e?",":"")+"".concat(n+1,"px ").concat(n+1,"px 0 ").concat(f[t]);s.current.style.textShadow=e,s.current.style.transition="text-shadow 1s 2s"}}),1e3)}),[]),Object(i.jsx)("h2",{id:r,className:"shadowTitle",ref:s})}function z(t){var e=t.stageWidth,n=t.stageHeight,s=t.setMenu;Object(c.useRef)();return Object(c.useEffect)((function(){}),[]),Object(i.jsxs)(i.Fragment,{children:[Object(i.jsxs)("section",{id:"Home",onClick:function(){s(!0);var t=Math.floor(Math.random()*f.length);document.querySelector(".blink").style.backgroundColor=f[t]},children:[Object(i.jsx)("p",{onClick:function(){"false"!==window.localStorage.getItem("Intro")?"true"!==window.localStorage.getItem("Intro")||window.localStorage.setItem("Intro",!1):window.localStorage.setItem("Intro",!0)},children:"\uc778\ud2b8\ub85c on/off"}),Object(i.jsxs)("div",{id:"mainTitleBox",children:[Object(i.jsx)("div",{className:"subTitle"}),Object(i.jsx)(k,{id:"mainTitle",text:"ChanceFolio"})]})]}),Object(i.jsx)(N,{stageWidth:e,stageHeight:n})]})}function C(t){var e=t.stageWidth,n=t.stageHeight,s=t.setMenu,r=Object(c.useState)(!1),a=Object(o.a)(r,2),u=a[0],l=a[1],h=Object(c.useState)(!1),d=Object(o.a)(h,2),j=d[0],f=d[1];return Object(c.useEffect)((function(){document.getElementById("loading").classList.add("active"),"false"===window.localStorage.getItem("Intro")&&f(!0)}),[]),Object(i.jsxs)(i.Fragment,{children:[!u&&Object(i.jsx)(L,{isLoading:u,setIsLoading:l}),u&&!j&&Object(i.jsx)(m,{setCompLoading:f,stageWidth:e,stageHeight:n,setMenu:s}),j&&Object(i.jsx)(z,{stageWidth:e,stageHeight:n,setMenu:s})]})}var H=n(22);n(40);function I(t){Object(H.a)(t);var e,n,s=Object(c.useRef)(),r=Object(c.useRef)(),a=Math.floor(Math.random()*f.length),o=f[a],u=1e5,l=function(){e=window.scrollY,document.querySelector(".toNext")&&(n=document.querySelector(".toNext").offsetTop),u=n-window.innerHeight,function(t,e,n){var i,c,s,r,a;r=e,a=window.innerHeight/2,e<=n?(c=P(T,r,a,!0),s=P(W,r,a,!0),i=P(B,r,a,!0)):(c=q(T,r,2*a,n,!1),s=q(W,r,2*a,n,!1),i=q(B,r,2*a,n,!1));t.style.opacity=i,Object.values(t.getElementsByClassName("horizon")).forEach((function(t){t.style.height="".concat(c,"px")})),Object.values(t.getElementsByClassName("vertical")).forEach((function(t){t.style.width="".concat(s,"px")}))}(s.current,e,u),r.current.style.backgroundColor=o,r.current.style.width="".concat(e/u*100,"%")};return Object(c.useEffect)((function(){return window.addEventListener("scroll",(function(){s.current&&l()})),window.removeEventListener("scroll",(function(){s.current&&l()}))})),Object(i.jsxs)("ul",{className:"frame",ref:s,children:[Object(i.jsx)("li",{className:"frameLeft vertical"}),Object(i.jsx)("li",{className:"frameRight vertical"}),Object(i.jsx)("li",{className:"frameTop horizon"}),Object(i.jsx)("li",{className:"frameBottom horizon",children:Object(i.jsx)("div",{className:"current",ref:r})})]})}var B=[0,1],T=[0,60],W=[0,100];function P(t,e,n,i){var c;return c=t[0]+(t[1]-t[0])*e/n,i&&c>=t[1]&&(c=t[1]),!i&&c<=t[1]&&(c=t[1]),c}function q(t,e,n,i,c){var s,r;return r=e-i,s=t[1]+(t[0]-t[1])*r/n,c&&s>=t[0]&&(s=t[0]),!c&&s<=t[0]&&(s=t[0]),s}var A=[15,40];function F(t,e){var n,i,c,s;(n=1-1*(c=e-(s=window.innerHeight/2))/s)<=0&&(n=0),(i=50-1*c*50/s)<=0&&(i=0),n>=1&&(n=1),i>=50&&(i=50),t.style.opacity=n,t.style.top="".concat(i,"%")}function Y(t){var e=t.stageWidth,n=t.stageHeight,s=Object(c.useRef)(),r=Object(c.useRef)(),a=Object(c.useRef)(),o=Object(c.useRef)(),u=f,l={x:e-120,y:n-120,rx:void 0,ry:void 0,radius:100},h=function(t){l.x=t.clientX,l.y=t.clientY,l.rx=t.offsetX,l.ry=t.offsetY},d=Object(c.useCallback)((function(){requestAnimationFrame(d),o.current.clearRect(0,0,o.current.canvas.width,o.current.canvas.height),a.current[0].update(r.current,o.current,l)}),[]);return Object(c.useEffect)((function(){r.current.width=e,r.current.height=n,a.current=[],a.current.push(new K("SCROLLDOWN",0,0,0,"1",-75,2*Math.PI))}),[e,n,u]),Object(c.useEffect)((function(){o.current=r.current.getContext("2d"),setTimeout((function(){return d()}),3500)}),[]),Object(c.useEffect)((function(){return window.addEventListener("mousemove",(function(t){h(t)})),window.removeEventListener("mousemove",(function(t){h(t)}))})),Object(i.jsx)(i.Fragment,{children:Object(i.jsx)("section",{id:"Particle",ref:s,children:Object(i.jsx)("canvas",{id:"ParticleCanvas",ref:r})})})}var K=function(){function t(e,n,i,c,s,r,a){Object(g.a)(this,t),this.text=e,this.startRotation=a,this.x=n,this.y=i,this.part=s,this.size=r,this.click=0,this.fontOpacity=c,this.numRadsPerLetter=2*Math.PI/this.text.length}return Object(v.a)(t,[{key:"draw",value:function(t){if(t.save(),t.translate(this.x,this.y),"1"===this.part){t.font="20px S-CoreDream-9Black",t.rotate(this.startRotation);for(var e=0;e<this.text.length;e++)t.save(),t.rotate(e*this.numRadsPerLetter),t.fillStyle="rgba(17,17,17,".concat(this.fontOpacity,")"),t.fillText(this.text[e],0,this.size),t.restore()}"2"===this.part&&(t.font="20px S-CoreDream-9Black",t.save(),t.beginPath(),t.arc(0,0,50,0,2*Math.PI),t.fillStyle="#FC3",t.fill(),t.closePath(),t.restore(),t.save(),t.translate(-22,8),t.fillStyle="#fff",t.fillText("Click",0,this.click),t.restore()),t.restore()}},{key:"update",value:function(t,e,n){this.x=n.x,this.y=n.y,this.fontOpacity<=1&&(this.fontOpacity+=.1),"1"===this.part&&(document.body.style.cursor="pointer",this.startRotation-=.003),"2"===this.part&&(console.dir(t.style),document.body.style.cursor="none"),this.draw(e)}}]),t}();n(41),n(42);function D(t){var e,n,s,r,a=t.nextLink,o=function(){e=window.scrollY,r=document.querySelector(".nextBtn"),document.querySelector(".toNext")&&(n=document.querySelector(".toNext").offsetTop,s=n-window.innerHeight),r&&function(t,e,n){var i,c,s;c=e-n-(s=window.innerHeight/2),(i=A[0]+(A[1]-A[0])*c/s)<=A[0]&&(i=A[0]),t.style.top="".concat(i,"%")}(r,e,s)};return Object(c.useEffect)((function(){return window.addEventListener("scroll",(function(){o()})),window.removeEventListener("scroll",(function(){o()}))})),Object(i.jsx)(u.b,{className:"nextBtn",to:"/".concat(a),children:a})}function X(t){var e,n,s=t.stageWidth,r=t.stageHeight,a=Object(c.useRef)(),o=function(){e=window.scrollY,(n=document.querySelector(".shadowTitle"))&&F(n,e),a.current&&e===a.current.offsetTop&&a.current.querySelector("a").click()};return Object(c.useEffect)((function(){return window.scrollTo(0,0),window.addEventListener("scroll",(function(){o()})),window.removeEventListener("scroll",(function(){o()}))})),Object(i.jsxs)(i.Fragment,{children:[Object(i.jsxs)("section",{id:"about",children:[Object(i.jsx)("div",{className:"part part1",children:Object(i.jsx)(k,{text:"AboutMe"})}),Object(i.jsx)("div",{className:"part part2",children:"2"}),Object(i.jsx)("div",{className:"part part3",children:Object(i.jsx)("ul",{children:Object(i.jsx)("li",{children:"3"})})}),Object(i.jsx)("div",{className:"part part4",children:"4"}),Object(i.jsx)("div",{className:"part part5",children:"5"}),Object(i.jsx)("div",{className:"part part6",children:"6"}),Object(i.jsx)("div",{className:"part part7 toNext",ref:a,children:Object(i.jsx)(D,{nextLink:"theKingOfMains"})})]}),Object(i.jsx)(I,{}),Object(i.jsx)(Y,{stageWidth:s,stageHeight:r})]})}n(43);function J(t){var e,n,s=t.text,r=t.next,a=t.stageWidth,o=t.stageHeight,u=Object(c.useRef)(),l=function(){e=window.scrollY,(n=document.querySelector(".shadowTitle"))&&F(n,e),u.current&&e===u.current.offsetTop&&(window.scrollTo(0,0),u.current.querySelector(".nextBtn").click())};return Object(c.useEffect)((function(){return window.scrollTo(0,0),window.addEventListener("scroll",(function(){l()})),window.removeEventListener("scroll",(function(){l()}))})),Object(i.jsxs)(i.Fragment,{children:[Object(i.jsxs)("section",{className:"work work-".concat(s),children:[Object(i.jsx)("div",{className:"part part1",children:Object(i.jsx)(k,{text:"".concat(s)})}),Object(i.jsx)("div",{className:"part part2",children:"2"}),Object(i.jsx)("div",{className:"part part3",children:Object(i.jsx)("ul",{children:Object(i.jsx)("li",{children:"3"})})}),Object(i.jsx)("div",{className:"part part4",children:"4"}),Object(i.jsx)("div",{className:"part part5",children:"5"}),Object(i.jsx)("div",{className:"part part6",children:"6"}),Object(i.jsx)("div",{className:"part toNext",ref:u,children:Object(i.jsx)(D,{nextLink:r})})]}),Object(i.jsx)(I,{}),Object(i.jsx)(Y,{stageWidth:a,stageHeight:o})]})}n(44);function G(t){var e=t.stageWidth,n=t.stageHeight;return Object(i.jsx)(i.Fragment,{children:Object(i.jsx)(J,{text:"theKingOfMains",next:"Buttonbutton",stageWidth:e,stageHeight:n})})}n(45);function Q(t){var e=t.stageWidth,n=t.stageHeight;return Object(i.jsx)(i.Fragment,{children:Object(i.jsx)(J,{text:"Buttonbutton",next:"About",stageWidth:e,stageHeight:n})})}n(46);function U(t){t.change;var e=t.setChange,n=Object(c.useRef)();return Object(c.useEffect)((function(){n.current.classList.add("active"),n.current.style.backgroundColor=f[0],n.current.addEventListener("transitionend",(function(){n.current.classList.remove("active"),e(!1)}))})),Object(i.jsx)("div",{id:"changePage",ref:n})}var V=function(){var t=Object(c.useState)(!1),e=Object(o.a)(t,2),n=e[0],s=e[1],r=Object(c.useState)(!1),a=Object(o.a)(r,2),h=a[0],d=a[1],j=Object(c.useState)(document.body.clientWidth),f=Object(o.a)(j,2),b=f[0],x=f[1],g=Object(c.useState)(document.body.clientHeight),v=Object(o.a)(g,2),m=v[0],y=v[1],p=function(){x(document.body.clientWidth),y(document.body.clientHeight)};return Object(c.useEffect)((function(){return window.addEventListener("resize",(function(t){p()})),window.removeEventListener("resize",(function(t){p()}))}),[b,m]),Object(i.jsx)(i.Fragment,{children:Object(i.jsxs)(u.a,{children:[Object(i.jsx)(O,{menu:n,setMenu:s}),Object(i.jsx)(l.a,{path:"/",exact:!0,render:function(){return Object(i.jsx)(C,{setMenu:s,stageWidth:b,stageHeight:m})}}),Object(i.jsx)(l.a,{path:"/theKingOfMains",render:function(){return Object(i.jsx)(G,{setMenu:s,stageWidth:b,stageHeight:m})}}),Object(i.jsx)(l.a,{path:"/about",render:function(){return Object(i.jsx)(X,{setMenu:s,stageWidth:b,stageHeight:m})}}),Object(i.jsx)(l.a,{path:"/buttonbutton",render:function(){return Object(i.jsx)(Q,{setMenu:s,stageWidth:b,stageHeight:m})}}),h&&Object(i.jsx)(U,{change:h,setChange:d})]})})};a.a.render(Object(i.jsx)(s.a.StrictMode,{children:Object(i.jsx)(V,{})}),document.getElementById("Portfolio"))}]),[[47,1,2]]]);
//# sourceMappingURL=main.370c07c9.chunk.js.map