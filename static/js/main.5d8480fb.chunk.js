(this.webpackJsonpchoiyeonsu=this.webpackJsonpchoiyeonsu||[]).push([[0],{18:function(e,t,n){},19:function(e,t,n){},27:function(e,t,n){},33:function(e,t,n){},34:function(e,t,n){},35:function(e,t,n){},36:function(e,t,n){},37:function(e,t,n){},38:function(e,t,n){},39:function(e,t,n){},40:function(e,t,n){},41:function(e,t,n){},42:function(e,t,n){},43:function(e,t,n){},44:function(e,t,n){},45:function(e,t,n){"use strict";n.r(t);var c=n(0),i=n(1),s=n.n(i),r=n(20),a=n.n(r),o=n(10),l=n(7),h=n(2),d="#e00808",u="#ffcc33",j="#0bceda",f=["#e00808","#ffcc33","#0bceda"],b=["#ea642d","#2ea5d6","#eab925","#5ed3f3"];function x(){return Object(c.jsxs)("svg",{x:"0px",y:"0px",viewBox:"0 0 100 100",children:[Object(c.jsx)("circle",{cx:"38.9",cy:"37.8",r:"19",fill:d}),Object(c.jsx)("rect",{x:"67",y:"32.6",transform:"matrix(0.9507 -0.3101 0.3101 0.9507 -11.2381 23.4648)",width:"2.3",height:"29",fill:j}),Object(c.jsx)("polygon",{points:"63.8,81.1 38.9,74.4 57.1,56.1 ",fill:u})]})}n(27);var O=function(e,t,n,c){for(var i,s=document.getElementById(e),r=0;r<t.length;r++){var a=document.createElement(n);i=c?Math.floor(Math.random()*t.length)+1:r+1,a.style.setProperty("--i",i),a.dataset.delay=i,a.innerHTML=t.charAt(r),s.appendChild(a)}};function g(e){var t=e.menu,n=e.setMenu,s=Object(i.useRef)(),r=Object(i.useRef)(),a=Object(i.useRef)(),o=Object(i.useRef)(),h=Object(i.useRef)(),d=function(){n((function(e){return!e}));var e=Math.floor(Math.random()*f.length);a.current.style.backgroundColor=f[e],document.getElementById("mainTitle")&&document.getElementById("mainTitle").classList.remove("active")},u=function(){n((function(e){return!e})),"true"!==window.localStorage.getItem("Intro")&&document.getElementById("mainTitle")&&document.getElementById("mainTitle").classList.add("active")};return Object(i.useEffect)((function(){t?(r.current.classList.add("active"),document.querySelector("#Portfolio").classList.add("menuOn")):(r.current.classList.remove("active"),document.querySelector("#Portfolio").classList.remove("menuOn"))}),[t,s,r]),Object(i.useEffect)((function(){var e=Object.values(o.current.children);O("navAbout","About","span",!0),O("navTheKingOfMains","TheKingOfMains","span",!0),O("navButtonButton","ButtonButton","span",!0),O("navMain","Title","span",!0),e.forEach((function(e){e.addEventListener("mouseenter",(function(){var t=Math.floor(Math.random()*f.length);e.style.textShadow="10px 10px 0 ".concat(f[t])})),e.addEventListener("mouseleave",(function(){e.style.textShadow="0px 0px 0 transparent"}))}))}),[]),Object(c.jsxs)(c.Fragment,{children:[Object(c.jsxs)("header",{children:[Object(c.jsx)("h1",{children:Object(c.jsx)(l.b,{to:"/",children:Object(c.jsx)(x,{})})}),Object(c.jsxs)("div",{className:"menu",ref:s,onClick:d,children:[Object(c.jsx)("span",{}),Object(c.jsx)("span",{}),Object(c.jsx)("span",{})]})]}),Object(c.jsxs)("section",{id:"menuModal",ref:r,children:[Object(c.jsx)("p",{onClick:function(){document.querySelector(".introOnOff").classList.toggle("active"),"false"!==window.localStorage.getItem("Intro")?"true"!==window.localStorage.getItem("Intro")||window.localStorage.setItem("Intro",!1):window.localStorage.setItem("Intro",!0)},className:"introOnOff",children:"Intro"}),Object(c.jsx)("div",{className:"blink",ref:a}),Object(c.jsxs)("div",{className:"content",children:[Object(c.jsx)("div",{className:"menu",onClick:u,children:"CLOSE"}),Object(c.jsx)("div",{className:"logo",ref:h,children:Object(c.jsx)(x,{})}),Object(c.jsxs)("ul",{ref:o,children:[Object(c.jsx)("li",{"data-desc":"Who is yeonsu?",children:Object(c.jsx)("b",{children:Object(c.jsx)(l.b,{to:"/about",onClick:d,id:"navAbout"})})}),Object(c.jsx)("li",{"data-desc":"What is best design of main?",children:Object(c.jsx)("b",{children:Object(c.jsx)(l.b,{to:"/theKingOfMains",onClick:d,id:"navTheKingOfMains"})})}),Object(c.jsx)("li",{"data-desc":"Every Buttons what you want",children:Object(c.jsx)("b",{children:Object(c.jsx)(l.b,{to:"/Buttonbutton",onClick:d,id:"navButtonButton"})})}),Object(c.jsx)("li",{"data-desc":"Go Home",children:Object(c.jsx)("b",{children:Object(c.jsx)(l.b,{to:"/",onClick:u,id:"navMain"})})})]})]})]})]})}n(18),n(33);var v=n(8),m=n(9);n(34);function y(e){var t=e.setCompLoading,n=e.stageWidth,s=e.stageHeight,r=e.setMenu,a=Object(i.useRef)(""),o=Object(i.useRef)(""),l=Object(i.useRef)(""),h=Object(i.useRef)(""),d=Object(i.useRef)(""),u=Object(i.useRef)(),j=Object(i.useRef)(),b=Object(i.useRef)(),x=f,O={x:void 0,y:void 0,radius:100},g=function(){a.current.classList.add("active"),a.current.addEventListener("transitionend",(function(){t(!0),window.localStorage.setItem("Intro",!1);var e=Math.floor(Math.random()*f.length);document.querySelector(".blink").style.backgroundColor=f[e],r(!0)}))},v=function(){O.x=n/2,O.y=s/2,setInterval((function(){O.x=O.y=void 0}),1e3)},m=Object(i.useCallback)((function(){requestAnimationFrame(m),b.current.clearRect(0,0,b.current.canvas.width,b.current.canvas.height);for(var e=0;e<j.current.length;e++)j.current[e].update(b.current,O)}),[j,O]);return Object(i.useEffect)((function(){j.current=[],u.current.width=n,u.current.height=s;for(var e=0;e<1e3;e++){var t=Math.random()*(n-40)+20,c=Math.random()*(s-40)+20,i=2*Math.random()-1,r=2*Math.random()-1,a=Math.floor(3*Math.random()),o=a+2,l=x[a];j.current.push(new w(t,c,i,r,n,s,o,l))}b.current=u.current.getContext("2d"),m()}),[n,s,j,m,x]),Object(i.useEffect)((function(){l.current.classList.add("active"),p(l,h,v,5500),p(h,d,g,2e3)})),Object(c.jsx)(c.Fragment,{children:Object(c.jsxs)("section",{id:"intro",ref:a,children:[Object(c.jsxs)("div",{className:"title",ref:o,children:[Object(c.jsx)("p",{className:"greet",ref:l,children:"\uc548\ub155\ud558\uc138\uc694. \ubc18\uac11\uc2b5\ub2c8\ub2e4."}),Object(c.jsxs)("ul",{className:"person",ref:h,children:[Object(c.jsx)("li",{children:Object(c.jsxs)("span",{children:[Object(c.jsx)("b",{children:"\ub6f0\ub294 \uc0ac\ub78c"})," \uc704\uc758,"]})}),Object(c.jsx)("li",{children:Object(c.jsxs)("span",{children:[Object(c.jsx)("b",{children:"\ub098\ub294 \uc0ac\ub78c"})," \uc704\uc758,"]})}),Object(c.jsx)("li",{children:Object(c.jsxs)("span",{children:[Object(c.jsx)("b",{children:"\uc990\uae30\ub294 \uc0ac\ub78c"}),"."]})})]}),Object(c.jsx)("p",{className:"greetEnd",ref:d,children:"\ucd5c\uc5f0\uc218\uc785\ub2c8\ub2e4."})]}),Object(c.jsx)("canvas",{ref:u})]})})}var p=function(e,t,n,c){e.current.addEventListener("animationend",(function(){t.current.classList.add("active"),n&&setTimeout((function(){return n()}),c)}))},w=function(){function e(t,n,c,i,s,r,a,o){Object(v.a)(this,e),this.x=t,this.y=n,this.dx=c,this.dy=i,this.size=0,this.stageWidth=s,this.stageHeight=r,this.angle=a,this.figureAngle=2*Math.PI/this.angle,this.color=o,this.boundary=30,this.minSize=0,this.maxSize=50}return Object(m.a)(e,[{key:"draw",value:function(e){if(e.save(),e.beginPath(),e.fillStyle=this.color,2===this.angle)e.arc(this.x,this.y,this.size,0,2*Math.PI);else{e.translate(this.x,this.y),e.rotate(Math.PI/this.angle+Math.atan2(this.stageWidth/2-this.x,-this.stageHeight/2+this.y));for(var t=0;t<this.angle;t++){var n=Math.sin(this.figureAngle*t)*this.size,c=Math.cos(this.figureAngle*t)*this.size;0===t?e.moveTo(n,c):e.lineTo(n,c)}}e.fill(),e.restore()}},{key:"update",value:function(e,t){this.x+=this.dx,this.y+=this.dy,t.x-this.x<t.radius&&t.x-this.x>-t.radius&&t.y-this.y<t.radius&&t.y-this.y>-t.radius?this.size<this.maxSize&&(this.size+=3):this.size>this.minSize&&(this.size+=-1),this.size<0&&(this.size=0),this.draw(e)}}]),e}();function M(e){var t=e.color;return Object(c.jsx)("figure",{className:"circle",children:Object(c.jsx)("svg",{x:"0px",y:"0px",viewBox:"0 0 200 200",fill:t,children:Object(c.jsx)("g",{children:Object(c.jsx)("circle",{cx:"100",cy:"100",r:"90"})})})})}function N(e){var t=e.color;return Object(c.jsx)("figure",{className:"triangle",children:Object(c.jsx)("svg",{x:"0px",y:"0px",viewBox:"0 0 200 200",fill:t,children:Object(c.jsx)("polygon",{points:"190,177.5 10,178.1 99.4,21.9 "})})})}function L(e){var t=e.color;return Object(c.jsx)("figure",{className:"square",children:Object(c.jsx)("svg",{x:"0px",y:"0px",viewBox:"0 0 200 200",fill:t,children:Object(c.jsx)("rect",{x:"10",y:"10",width:"180",height:"180"})})})}n(35);function S(e){var t=e.isLoading,n=e.setIsLoading,s=Object(i.useRef)(-1),r=Object(i.useRef)();return Object(i.useEffect)((function(){if(!t){var e=document.querySelector(".figureBox").children;r.current=setInterval((function(){s.current+=1,s.current>2&&(s.current=0),E(s.current,e)}),1e3)}document.getElementById("loading").addEventListener("transitionend",(function(){clearInterval(r.current),n(!0)}))}),[t,n]),Object(c.jsx)("div",{id:"loading",children:Object(c.jsxs)("div",{className:"figureBox",children:[Object(c.jsx)(M,{color:d}),Object(c.jsx)(N,{color:u}),Object(c.jsx)(L,{color:j})]})})}var E=function(e,t){Object.values(t).forEach((function(e){e.classList.remove("active")})),t[e].classList.add("active")};n(19);function H(e){var t=e.stageWidth,n=e.stageHeight,s=Object(i.useRef)(),r=Object(i.useRef)(),a=Object(i.useRef)(),o=Object(i.useRef)(),l=Object(i.useRef)(),h=f,d={x:void 0,y:void 0,radius:100},u=function(e){d.x=e.clientX,d.y=e.clientY},j=Object(i.useCallback)((function(){requestAnimationFrame(j),l.current.clearRect(0,0,l.current.canvas.width,l.current.canvas.height);for(var e=0;e<a.current.length;e++)a.current[e].update(l.current,d)}),[]);return Object(i.useEffect)((function(){a.current=[],r.current.width=t,r.current.height=n;for(var e=0;e<1e3;e++){var c=Math.random()*(t-40)+20,i=Math.random()*(n-40)+20,s=2*Math.random()-1,o=2*Math.random()-1,l=Math.floor(3*Math.random()),d=l+2,u=h[l];a.current.push(new R(c,i,s,o,t,n,d,u))}}),[t,n,a,o,h]),Object(i.useEffect)((function(){l.current=r.current.getContext("2d"),j()}),[j]),Object(i.useEffect)((function(){return window.addEventListener("mousemove",(function(e){u(e)})),window.removeEventListener("mousemove",(function(e){u(e)}))})),Object(c.jsx)(c.Fragment,{children:Object(c.jsx)("section",{id:"Particle",ref:s,children:Object(c.jsx)("canvas",{id:"ParticleCanvas",ref:r})})})}var R=function(){function e(t,n,c,i,s,r,a,o){Object(v.a)(this,e),this.x=t,this.y=n,this.dx=c,this.dy=i,this.size=0,this.stageWidth=s,this.stageHeight=r,this.angle=a,this.figureAngle=2*Math.PI/this.angle,this.color=o,this.boundary=30,this.minSize=0,this.maxSize=50}return Object(m.a)(e,[{key:"draw",value:function(e){if(e.save(),e.beginPath(),e.fillStyle=this.color,2===this.angle)e.arc(this.x,this.y,this.size,0,2*Math.PI);else{e.translate(this.x,this.y),e.rotate(Math.PI/this.angle+Math.atan2(this.stageWidth/2-this.x,-this.stageHeight/2+this.y));for(var t=0;t<this.angle;t++){var n=Math.sin(this.figureAngle*t)*this.size,c=Math.cos(this.figureAngle*t)*this.size;0===t?e.moveTo(n,c):e.lineTo(n,c)}}e.fill(),e.restore()}},{key:"update",value:function(e,t){(this.x+this.size>this.stageWidth||this.x-this.size<0)&&(this.dx*=-1),(this.y+this.size>this.stageHeight||this.y-this.size<0)&&(this.dy*=-1),this.x+=this.dx,this.y+=this.dy,t.x-this.x<t.radius&&t.x-this.x>-t.radius&&t.y-this.y<t.radius&&t.y-this.y>-t.radius?this.size<this.maxSize&&(this.size+=3):this.size>this.minSize&&(this.size+=-1),this.size<0&&(this.size=0),this.draw(e)}}]),e}();n(36),n(37);function T(e){var t=e.id,n=e.text,s=Object(i.useRef)(),r=t?"".concat(t):"shadow".concat(n);return Object(i.useEffect)((function(){O(r,n,"span"),Object.values(s.current.children).forEach((function(e){var t=e.dataset.delay;e.style.transition="color 0.5s 1s, text-stroke 0.5s 1s,\n      text-stroke-color 0.5s 1s, transform 0.5s ".concat(.1*t,"s")})),setTimeout((function(){if(s.current){s.current.classList.add("active");for(var e=Math.floor(Math.random()*f.length),t="",n=0;n<10;n++)t+=(t?",":"")+"".concat(n+1,"px ").concat(n+1,"px 0 ").concat(f[e]);s.current.style.textShadow=t,s.current.style.transition="text-shadow 1s 2s"}}),1e3)}),[r,n]),Object(c.jsx)("div",{id:r,className:"shadowTitle",ref:s})}function z(e){var t=e.stageWidth,n=e.stageHeight,s=e.setMenu;return Object(i.useEffect)((function(){}),[]),Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("section",{id:"Home",onClick:function(){s(!0);var e=Math.floor(Math.random()*f.length);document.querySelector(".blink").style.backgroundColor=f[e]},children:Object(c.jsxs)("div",{id:"mainTitleBox",children:[Object(c.jsx)("div",{className:"subTitle"}),Object(c.jsx)(T,{id:"mainTitle",text:"ChanceFolio"})]})}),Object(c.jsx)(H,{stageWidth:t,stageHeight:n})]})}function W(e){var t=e.stageWidth,n=e.stageHeight,s=e.setMenu,r=Object(i.useState)(!1),a=Object(o.a)(r,2),l=a[0],h=a[1],d=Object(i.useState)(!1),u=Object(o.a)(d,2),j=u[0],f=u[1];return Object(i.useEffect)((function(){document.getElementById("loading").classList.add("active"),"false"===window.localStorage.getItem("Intro")&&f(!0)}),[]),Object(c.jsxs)(c.Fragment,{children:[!l&&Object(c.jsx)(S,{isLoading:l,setIsLoading:h}),l&&!j&&Object(c.jsx)(y,{setCompLoading:f,stageWidth:t,stageHeight:n,setMenu:s}),j&&Object(c.jsx)(z,{stageWidth:t,stageHeight:n,setMenu:s})]})}var k=[25,50],C=[0,2],I=[50,33.33,32,50],B=[50,66.66,32,50],q=[50,15,32,50],P=[50,85,32,50],A=[0,33.33],F=[50,32],Y=[0,70],K=[0,1],D=[-100,100],J=[0,-100];function X(e,t,n,c){var i;return i=e[0]+(e[1]-e[0])*t/n,c&&i>=e[1]&&(i=e[1]),!c&&i<=e[1]&&(i=e[1]),i}function G(e,t,n,c){var i;return i=e[1]+(e[0]-e[1])*t/n,c&&i>=e[0]&&(i=e[0]),!c&&i<=e[0]&&(i=e[0]),i}function Q(e,t){var n,c,i,s;(n=1-1*(i=t-(s=window.innerHeight/2))/s)<=0&&(n=0),(c=50-1*i*50/s)<=0&&(c=0),n>=1&&(n=1),c>=50&&(c=50),e.style.opacity=n,e.style.top="".concat(c,"%")}function U(e,t,n){var c,i,s;s=window.innerHeight,(i=n-e.offsetTop-e.clientHeight+window.innerHeight)<=0&&(i=0),(c=-100*i/s)>=0&&(c=0),c<=-100&&(c=-100),n>=e.offsetTop+e.clientHeight-window.innerHeight?t.style.top="".concat(c,"%"):t.style.top="0%"}function _(e,t,n,c,i,s){var r,a=window.innerHeight/2,o=100*(t-window.innerHeight)/a;o<=0&&(o=0),o>=100&&(o=100),e.style.height="".concat(o,"%"),"left"===s?r=window.innerWidth>900?I:q:"right"===s&&(r=window.innerWidth>900?B:P);var l,h=window.innerHeight/2,d=n.offsetTop,u=c.offsetTop-window.innerHeight,j=i.offsetTop,f=t-u,b=t-j;t>=d&&t<=d+h?l=V(t-d,h,1,r):t>d+h&&t<u?l=r[1]:t>=u&&t<=u+h?l=V(f,h,2,r):t>u+h&&t<j?l=r[2]:t>=j&&(l=V(b,.5*h,3,r))>=r[3]&&(l=r[3]),e.style.left="".concat(t>=d?l:r[0],"%")}function V(e,t,n,c){return c[n-1]+(c[n]-c[n-1])*e/t}function Z(e,t,n,c){var i=window.innerHeight,s=n.offsetTop+.5*i*c,r=X(D,t-s,i,!0);r<=D[0]&&(r=D[0]),r>=0?e.classList.add("active"):e.classList.remove("active"),e.querySelector(".blind").style.transform="translateX(".concat(r,"%)")}n(38);function $(){var e,t,n=Object(i.useRef)(),s=Object(i.useRef)(),r=Math.floor(Math.random()*f.length),a=f[r],o=1e5,l=function(){e=window.scrollY,document.querySelector(".toNext")&&(t=document.querySelector(".toNext").offsetTop),o=t-window.innerHeight,function(e,t,n){var c,i,s,r,a,o;a=t,o=window.innerHeight/2,t<=n?(i=se(te,a,o,!0),window.innerWidth<900&&(r=se(ne,a,o,!0)),s=window.innerWidth>900?se(ce,a,o,!0):se(ie,a,o,!0),c=se(ee,a,o,!0)):(i=re(te,a,o,n,!1),window.innerWidth<900&&(r=re(ne,a,o,!1)),s=window.innerWidth>900?re(ce,a,o,n,!1):re(ie,a,o,n,!1),c=re(ee,a,o,n,!1));e.style.opacity=c,e.querySelector(".frameTop").style.height="".concat(i,"px"),window.innerWidth>900?e.querySelector(".frameBottom").style.height="".concat(i,"px"):e.querySelector(".frameBottom").style.height="".concat(r,"px");Object.values(e.getElementsByClassName("vertical")).forEach((function(e){e.style.width="".concat(s,"px")}))}(n.current,e,o),s.current.style.backgroundColor=a,s.current.style.width="".concat(e/o*100,"%")};return Object(i.useEffect)((function(){return window.addEventListener("scroll",(function(){n.current&&l()})),window.removeEventListener("scroll",(function(){n.current&&l()}))})),Object(c.jsxs)("ul",{className:"frame",ref:n,children:[Object(c.jsx)("li",{className:"frameLeft vertical"}),Object(c.jsx)("li",{className:"frameRight vertical"}),Object(c.jsx)("li",{className:"frameTop horizon"}),Object(c.jsx)("li",{className:"frameBottom horizon",children:Object(c.jsx)("div",{className:"current",ref:s})})]})}var ee=[0,1],te=[0,60],ne=[0,30],ce=[0,100],ie=[0,20];function se(e,t,n,c){var i;return i=e[0]+(e[1]-e[0])*t/n,c&&i>=e[1]&&(i=e[1]),!c&&i<=e[1]&&(i=e[1]),i}function re(e,t,n,c,i){var s,r;return r=t-c,s=e[1]+(e[0]-e[1])*r/n,i&&s>=e[0]&&(s=e[0]),!i&&s<=e[0]&&(s=e[0]),s}function ae(e){var t=e.stageWidth,n=e.stageHeight,s=Object(i.useRef)(),r=Object(i.useRef)(),a=Object(i.useRef)(),o=Object(i.useRef)(),l=f,h=[{className:".html",color:"#ea642d",percent:90},{className:".css",color:"#2ea5d6",percent:95},{className:".js",color:"#eab925",percent:95},{className:".react",color:"#5ed3f3",percent:85},{className:".reactnative",color:"#5ed3f3",percent:70}],d={x:t-120,y:n-120,rx:void 0,ry:void 0,radius:100},u=function(e){d.x=e.clientX,d.y=e.clientY,d.rx=e.offsetX,d.ry=e.offsetY},j=Object(i.useCallback)((function(){requestAnimationFrame(j),o.current.clearRect(0,0,o.current.canvas.width,o.current.canvas.height),a.current[0].update(r.current,o.current,d)}),[]);return Object(i.useEffect)((function(){r.current.width=t,r.current.height=n,a.current=[],a.current.push(new oe("SCROLLDOWN",0,0,0,"1",-75,2*Math.PI))}),[t,n,l]),Object(i.useEffect)((function(){o.current=r.current.getContext("2d"),j()}),[j]),Object(i.useEffect)((function(){return window.addEventListener("mousemove",(function(e){u(e)})),window.removeEventListener("mousemove",(function(e){u(e)}))})),Object(i.useEffect)((function(){if(document.querySelector("#about"))for(var e=function(e){document.querySelector(".part3 ul li ".concat(h[e].className)).addEventListener("pointerenter",(function(){a.current[0].part="2",a.current[0].percent=h[e].percent,a.current[0].abilityColor=h[e].color})),document.querySelector(".part3 ul li ".concat(h[e].className)).addEventListener("pointerout",(function(){a.current[0].part="1",a.current[0].current=0,a.current[0].percent=0,a.current[0].abilityColor="transparent",a.current[0].abilityArc=0}))},t=0;t<h.length;t++)e(t)})),Object(c.jsx)(c.Fragment,{children:Object(c.jsx)("section",{id:"Particle",ref:s,children:Object(c.jsx)("canvas",{id:"ParticleCanvas",ref:r})})})}var oe=function(){function e(t,n,c,i,s,r,a){Object(v.a)(this,e),this.text=t,this.startRotation=a,this.x=n,this.y=c,this.part=s,this.size=r,this.current=0,this.percent=0,this.abilityColor="transparent",this.abilityArc=0,this.click=0,this.fontOpacity=i,this.numRadsPerLetter=2*Math.PI/this.text.length}return Object(m.a)(e,[{key:"draw",value:function(e){if(e.save(),e.translate(this.x,this.y),"1"===this.part){e.font="20px S-CoreDream-9Black",e.rotate(this.startRotation);for(var t=0;t<this.text.length;t++)e.save(),e.rotate(t*this.numRadsPerLetter),e.fillStyle="rgba(17,17,17,".concat(this.fontOpacity,")"),e.fillText(this.text[t],0,this.size),e.restore()}"2"===this.part&&(e.save(),e.beginPath(),e.arc(0,0,50,0,2*Math.PI*this.abilityArc),e.strokeStyle=this.abilityColor,e.lineWidth=50,e.stroke(),e.closePath(),e.restore(),e.fillStyle="#111",e.save(),e.font="20px S-CoreDream-9Black",e.translate(60,70),e.fillText("".concat(this.current),0,this.click),e.restore(),e.save(),e.font="15px S-CoreDream-6Bold",e.translate(86,70),e.fillText("%",0,this.click),e.restore()),e.restore()}},{key:"update",value:function(e,t,n){this.x=n.x,this.y=n.y,this.fontOpacity<=1&&(this.fontOpacity+=.01),"1"===this.part&&(document.body.style.cursor="pointer",this.startRotation-=.003),"2"===this.part&&(document.body.style.cursor="none",this.current<this.percent&&(this.current+=1),this.abilityArc<="".concat(this.current/100)&&(this.abilityArc+=.015)),this.draw(t)}}]),e}();function le(e){var t=e.color,n=e.width;return Object(c.jsx)("figure",{className:"square",children:Object(c.jsx)("svg",{x:"0px",y:"0px",viewBox:"0 0 200 200",fill:t,children:Object(c.jsx)("rect",{x:100-n/2,y:"10",width:n,height:"180"})})})}n(39);function he(e){var t,n,s,r,a,o,h,d=e.nextLink,u=function(){t=window.scrollY,r=document.querySelector(".toNext"),a=document.querySelector(".nextBtn"),o=document.querySelector(".nextPer"),document.querySelector(".toNext")&&(n=document.querySelector(".toNext").offsetTop,s=n-window.innerHeight,t>=s?(clearTimeout(h),h=setTimeout((function(){window.scrollTo({top:s,behavior:"smooth"}),clearTimeout(h)}),500)):clearTimeout(h)),console.log(t,document.body.clientHeight-window.innerHeight),r&&t===document.body.clientHeight-window.innerHeight?(clearTimeout(h),r.classList.add("active")):r.classList.remove("active"),a&&(function(e,t,n){var c,i,s;s=window.innerHeight/2,i=t-n,(c=k[0]+(k[1]-k[0])*i/s)<=k[0]&&(c=k[0]),c>=k[1]&&(c=k[1]),e.style.top="".concat(c,"%")}(a,t,s),function(e,t,n){var c,i,s,r;c=Object.values(e.children),s=t-n-(r=window.innerHeight/4),(i=Math.floor(C[0]+(C[1]-C[0])*s/r))>=C[1]&&(i=C[1]),i>=0?c.forEach((function(e,t){if(e.classList.remove("active"),i>=t)return e.classList.add("active")})):c.forEach((function(e){e.classList.remove("active")}))}(o,t,s))};return Object(i.useEffect)((function(){return clearTimeout(h),window.scroll(0,0),window.addEventListener("scroll",(function(){u()})),window.removeEventListener("scroll",(function(){u()}))})),Object(c.jsx)("div",{className:"toNext",children:Object(c.jsxs)(l.b,{className:"nextBtn",to:"/".concat(d),children:[Object(c.jsxs)("div",{className:"nextPer",children:[Object(c.jsx)(M,{}),Object(c.jsx)(le,{width:30}),Object(c.jsx)(N,{})]}),d]})})}var de=n.p+"static/media/face_circle.0d9c54a1.png";n(40);function ue(e){var t,n=e.stageWidth,s=e.stageHeight,r=Object(i.useRef)(),a=Object(i.useRef)(),o=Object(i.useRef)(),l=Object(i.useRef)(),h=Object(i.useRef)(),d=Object(i.useRef)(),u=Object(i.useRef)(),j=function(e){t=window.scrollY,Q(document.querySelector(".shadowTitle"),t),fe(r.current,t),je(r.current,t),U(e[1],document.querySelector(".part2 .content"),t),U(e[2],document.querySelector(".part3 .content"),t),function(e,t,n,c){var i,s,r,a,o=e.querySelector(".content .pic"),l=e.querySelector(".right"),h=window.innerHeight/2,d=n.offsetTop,u=c.offsetTop-window.innerHeight,j=t-d,f=t-u;t<d?(i=window.innerWidth>900?A[0]:Y[0],s=F[0],r=K[0]):t>=d&&t<u?(i=window.innerWidth>900?X(A,j,h,!0):X(Y,j,h,!0),r=X(K,j,h,!0),s=F[0]):t>=u&&(i=window.innerWidth>900?G(A,f,h,!1):G(Y,f,h,!1),r=G(K,f,h,!1),s=X(F,f,h,!1)),t>=d&&t<u?a=X(K,j,h,!0):t>=u&&(a=G(K,u,h,!0)),o.style.width="".concat(i,"%"),o.style.left="".concat(s,"%"),o.style.opacity=r,l.style.opacity=a,o.style.filter="saturate(".concat(r,")"),1===r?o.classList.add("active"):o.classList.remove("active")}(e[1],t,e[1],e[2]),e[1].querySelector(".content .pic img").style.width=e[1].querySelector(".content .pic .bg").style.width="".concat(.45*n,"px");for(var c=0;c<4;c++)Z(e[2].querySelector(".content ul li:nth-of-type(".concat(c+1,")")),t,e[2],c);!function(e,t){var n=e.querySelector(".timeLine"),c=Object.values(n.children),i=window.innerHeight,s=e.offsetTop,r=X(J,t-s,i,!1);r<=J[1]&&(r=J[1]),r>=J[0]&&(r=J[0]),c.forEach((function(e){return.8*i>=e.getBoundingClientRect().top?e.classList.add("active"):e.classList.remove("active")})),n.style.transform="translate(-50%, ".concat(r,"%)")}(e[3],t),a.current&&o.current&&(_(a.current,t,e[1],e[2],e[3],"left"),_(o.current,t,e[1],e[2],e[3],"right"))};Object(i.useEffect)((function(){return window.addEventListener("scroll",(function(){r.current&&j(r.current.children)})),window.removeEventListener("scroll",(function(){r.current&&j(r.current.children)}))}));var x=Object(i.useCallback)((function(){requestAnimationFrame(x),u.current.clearRect(0,0,u.current.canvas.width,u.current.canvas.height);for(var e=0;e<d.current.length;e++)d.current[e].update(u.current)}),[]);return Object(i.useEffect)((function(){d.current=[],h.current.width=n,h.current.height=s;for(var e=0;e<30;e++){var t=Math.random()*(.5*n-40)+20,c=Math.random()*(s-40)+20,i=2*Math.random()-1,r=2*Math.random()-1,a=Math.floor(3*Math.random())+2,o=b[Math.floor(4*Math.random())];d.current.push(new be(t,c,i,r,n,s,a,o))}}),[]),Object(i.useEffect)((function(){u.current=h.current.getContext("2d"),x()}),[x]),Object(c.jsxs)(c.Fragment,{children:[Object(c.jsxs)("section",{id:"about",ref:r,children:[Object(c.jsx)("div",{className:"part part1",children:Object(c.jsx)(T,{text:"AboutMe"})}),Object(c.jsxs)("div",{className:"part part2",children:[Object(c.jsxs)("div",{className:"content",children:[Object(c.jsxs)("div",{className:"left",children:[Object(c.jsx)("p",{children:"CHOI"}),Object(c.jsx)("p",{children:"YEONSU"}),Object(c.jsx)("span",{children:"Web Publisher"}),Object(c.jsx)("span",{children:"Frontend Developer"})]}),Object(c.jsxs)("div",{className:"pic",children:[Object(c.jsx)("img",{src:de,alt:""}),Object(c.jsxs)("div",{className:"bg",children:[Object(c.jsx)(M,{color:f[1]}),Object(c.jsx)(le,{width:10,color:f[1]}),Object(c.jsx)(le,{width:10,color:f[2]}),Object(c.jsx)(le,{width:10,color:f[1]}),Object(c.jsx)(N,{color:f[0]})]})]})]}),Object(c.jsxs)("div",{className:"right",children:[Object(c.jsx)("h2",{children:"\uc18c\uac1c\uae00 \uc81c\ubaa9"}),Object(c.jsxs)("p",{children:["\uc548\ub155\ud558\uc138\uc694.",Object(c.jsx)("b",{children:"\ucd5c\uc5f0\uc218\uc785\ub2c8\ub2e4."}),"\uc18c\uac1c\uae00 \ub4e4\uc5b4\uac08 \uc704\uce58.. \uc18c\uac1c\uae00 \ub4e4\uc5b4\uac08 \uc704\uce58 \ub0b4\uc6a9. \uc18c\uac1c\uae00 \ub4e4\uc5b4\uac08 \uc704\uce58.. \uc18c\uac1c\uae00 \ub4e4\uc5b4\uac08 \uc704\uce58 \ub0b4\uc6a9.\uc18c\uac1c\uae00 \ub4e4\uc5b4\uac08 \uc704\uce58.. \uc18c\uac1c\uae00 \ub4e4\uc5b4\uac08 \uc704\uce58 \ub0b4\uc6a9. \uc18c\uac1c\uae00 \ub4e4\uc5b4\uac08 \uc704\uce58.. \uc18c\uac1c\uae00 \ub4e4\uc5b4\uac08 \uc704\uce58 \ub0b4\uc6a9. \uc18c\uac1c\uae00 \ub4e4\uc5b4\uac08 \uc704\uce58.. \uc18c\uac1c\uae00 \ub4e4\uc5b4\uac08 \uc704\uce58 \ub0b4\uc6a9.\uc18c\uac1c\uae00 \ub4e4\uc5b4\uac08 \uc704\uce58.. \uc18c\uac1c\uae00 \ub4e4\uc5b4\uac08 \uc704\uce58 \ub0b4\uc6a9. \uc18c\uac1c\uae00 \ub4e4\uc5b4\uac08 \uc704\uce58.. \uc18c\uac1c\uae00 \ub4e4\uc5b4\uac08 \uc704\uce58 \ub0b4\uc6a9. \uc18c\uac1c\uae00 \ub4e4\uc5b4\uac08 \uc704\uce58.. \uc18c\uac1c\uae00 \ub4e4\uc5b4\uac08 \uc704\uce58 \ub0b4\uc6a9.\uc18c\uac1c\uae00 \ub4e4\uc5b4\uac08 \uc704\uce58.. \uc18c\uac1c\uae00 \ub4e4\uc5b4\uac08 \uc704\uce58 \ub0b4\uc6a9. \uc18c\uac1c\uae00 \ub4e4\uc5b4\uac08 \uc704\uce58.. \uc18c\uac1c\uae00 \ub4e4\uc5b4\uac08 \uc704\uce58 \ub0b4\uc6a9. \uc18c\uac1c\uae00 \ub4e4\uc5b4\uac08 \uc704\uce58.. \uc18c\uac1c\uae00 \ub4e4\uc5b4\uac08 \uc704\uce58 \ub0b4\uc6a9.\uc18c\uac1c\uae00 \ub4e4\uc5b4\uac08 \uc704\uce58.. \uc18c\uac1c\uae00 \ub4e4\uc5b4\uac08 \uc704\uce58 \ub0b4\uc6a9."]})]})]}),Object(c.jsx)("div",{className:"part part3",children:Object(c.jsxs)("div",{className:"content",children:[Object(c.jsx)("div",{id:"abilityBG",ref:l,children:Object(c.jsx)("canvas",{ref:h})}),Object(c.jsxs)("ul",{children:[Object(c.jsxs)("li",{children:[Object(c.jsx)("div",{className:"blind"}),Object(c.jsx)("span",{className:"html",children:"HTML"})]}),Object(c.jsxs)("li",{children:[Object(c.jsx)("div",{className:"blind"}),Object(c.jsx)("span",{className:"css",children:"CSS, SCSS"})]}),Object(c.jsxs)("li",{children:[Object(c.jsx)("div",{className:"blind"}),Object(c.jsx)("span",{className:"js",children:"JavaScript, JQuery"})]}),Object(c.jsxs)("li",{children:[Object(c.jsx)("div",{className:"blind"}),Object(c.jsx)("span",{className:"react",children:"React.js"}),",",Object(c.jsx)("span",{className:"reactnative",children:" React.Native"})]})]}),Object(c.jsx)("p",{className:"certificate",children:"\uc6cc\ub4dc\ud504\ub85c\uc138\uc11c 1\uae09, \ucef4\ud4e8\ud130\ud65c\uc6a9\ub2a5\ub825 2\uae09, \uc6f9\ub514\uc790\uc778\uae30\ub2a5\uc0ac"})]})}),Object(c.jsxs)("div",{className:"part part4",children:[Object(c.jsx)("h2",{children:"TimeLine"}),Object(c.jsxs)("ul",{className:"timeLine",children:[Object(c.jsxs)("li",{className:"birth",children:[Object(c.jsx)("h6",{children:"\uc0dd\ub144\uc6d4\uc77c"}),Object(c.jsx)("b",{children:"1993.10.27"})]}),Object(c.jsxs)("li",{className:"school",children:[Object(c.jsx)("h6",{children:"\ud559\ub825"}),Object(c.jsx)("b",{children:"2012.2 "}),Object(c.jsx)("p",{children:"\uc591\uc0b0\uace0\ub4f1\ud559\uad50 \uc878\uc5c5"})]}),Object(c.jsxs)("li",{className:"school",children:[Object(c.jsx)("h6",{children:"\ud559\ub825"}),Object(c.jsx)("b",{children:"2012.3"}),Object(c.jsxs)("p",{children:["\ud64d\uc775\ub300\ud559\uad50 \uc138\uc885\ucea0\ud37c\uc2a4",Object(c.jsx)("br",{}),"E-\ub9c8\ucf00\ud305\ud559\uacfc \uc785\ud559"]})]}),Object(c.jsxs)("li",{className:"army",children:[Object(c.jsx)("h6",{children:"\uad70 \ubcf5\ubb34"}),Object(c.jsx)("b",{children:"2014.02 ~ 2016.01"}),Object(c.jsx)("p",{children:"\ud574\uc591\uacbd\ucc30 \uc218\uacbd \ub9cc\uae30\uc81c\ub300"})]}),Object(c.jsxs)("li",{className:"school",children:[Object(c.jsx)("h6",{children:"\ud559\ub825"}),Object(c.jsx)("b",{children:"2017.2 ~ 2018.1"}),Object(c.jsxs)("p",{children:["\uc911\uad6d \uc120\uc591\uc2dc \ub3d9\ubd81\ub300\ud559\uad50",Object(c.jsx)("br",{}),"\uad50\ud658\ud559\uc0dd \uacfc\uc815 \uc218\ub8cc"]})]}),Object(c.jsxs)("li",{className:"other",children:[Object(c.jsx)("h6",{children:"\ub300\uc678\ud65c\ub3d9 (\ub3d9\uc544\ub9ac)"}),Object(c.jsx)("b",{children:"2017.02 ~ 2017.07"}),Object(c.jsx)("p",{children:"\ub3d9\ubd81\ub300\ud559\uad50 \uad6d\uc81c\uad50\ub958\ub3d9\uc544\ub9ac \uacf5\uba85\ud65c\ub3d9"}),Object(c.jsx)("span",{children:"\ub3d9\uc544\ub9ac \uc8fc\uac04 \ud504\ub85c\uadf8\ub7a8 \uae30\ud68d \ubc0f \ud64d\ubcf4"}),Object(c.jsx)("span",{children:"\uc870\uc131\uc544 \ucf54\uc2a4\uba54\ud2f1 \ube0c\ub79c\ub4dc \ud64d\ubcf4\ud504\ub85c\ubaa8\uc158 \uc9c4\ud589"})]}),Object(c.jsxs)("li",{className:"other",children:[Object(c.jsx)("h6",{children:"\ub300\uc678\ud65c\ub3d9 (\ubd09\uc0ac\ud65c\ub3d9)"}),Object(c.jsx)("b",{children:"2017.06"}),Object(c.jsx)("p",{children:"\uc911\uad6d \uc120\uc591\ud55c\uc778\ud68c"}),Object(c.jsxs)("span",{children:["\uc120\uc591\ud55c\uc778\ud68c \uc8fc\ucd5c\uc758 \ubc31\uc77c\uc7a5",Object(c.jsx)("br",{}),"\ud589\uc0ac \uc9c4\ud589 \ubc0f \uc2dc\uc124\uc815\ube44"]})]}),Object(c.jsxs)("li",{className:"job",children:[Object(c.jsx)("h6",{children:"\uc778\ud134"}),Object(c.jsx)("b",{children:"2017.12 ~ 2018.02"}),Object(c.jsx)("p",{children:"\uc911\uad6d\uae30\uc5c5 \uc5f0\ubcc0\ud55c\ub3d9\uc870\uc9c4\ubb34\uc5ed\uc720\ud55c\uacf5\uc0ac \uc778\ud134\uadfc\ubb34"}),Object(c.jsx)("span",{children:"\ub3d9\ubd81\ub300\ud559\uad50 \uad50\ud658\ud559\uc0dd \ud504\ub85c\uadf8\ub7a8 \ud64d\ubcf4\uc601\uc0c1 \uc81c\uc791"})]}),Object(c.jsxs)("li",{className:"school",children:[Object(c.jsx)("h6",{children:"\ud559\ub825"}),Object(c.jsx)("b",{children:"2019.2"}),Object(c.jsxs)("p",{children:["\ud64d\uc775\ub300\ud559\uad50 \uc138\uc885\ucea0\ud37c\uc2a4",Object(c.jsx)("br",{}),"E-\ub9c8\ucf00\ud305\ud559\uacfc \uc878\uc5c5"]})]}),Object(c.jsxs)("li",{className:"job",children:[Object(c.jsx)("h6",{children:"\uacbd\ub825"}),Object(c.jsx)("b",{children:"2019.10 - 2020.09"}),Object(c.jsx)("p",{children:"\ubbac\ub77c\uc6e8\uc5b4"}),Object(c.jsx)("span",{children:"\uc6f9\uac1c\ubc1c\ud300, IMC\ud300 \uadfc\ubb34"}),Object(c.jsxs)("span",{children:["\uc790\uc0ac\ubab0 \ud648\ud398\uc774\uc9c0 \ud37c\ube14\ub9ac\uc2f1 \uc5c5\ubb34",Object(c.jsx)("br",{}),"\ubc0f \uc790\uc0ac \uc628\ub77c\uc778 \ucee8\ud150\uce20 \ucf54\ub529 \uad00\ub828 \uc5c5\ubb34"]})]})]})]}),Object(c.jsx)(he,{nextLink:"theKingOfMains"})]}),Object(c.jsx)($,{}),Object(c.jsx)(ae,{stageWidth:n,stageHeight:s}),Object(c.jsx)("div",{className:"divLine divLineLeft",ref:a}),Object(c.jsx)("div",{className:"divLine divLineRight",ref:o})]})}var je=function(e,t){Object.values(e.children).forEach((function(e){t>e.offsetTop&&e.classList.add("on")}))},fe=function(e,t){Object.values(e.children).forEach((function(e){e.classList.remove("active"),0!==t&&e.offsetTop<=t&&e.classList.add("active")}))},be=function(){function e(t,n,c,i,s,r,a,o){Object(v.a)(this,e),this.x=t,this.y=n,this.dx=c,this.dy=i,this.size=60*Math.random()+5,this.stageWidth=s,this.stageHeight=r,this.angle=a,this.figureAngle=2*Math.PI/this.angle,this.color=o}return Object(m.a)(e,[{key:"draw",value:function(e){if(e.save(),e.beginPath(),e.fillStyle=this.color,2===this.angle)e.arc(this.x,this.y,this.size,0,2*Math.PI);else{e.translate(this.x,this.y),e.rotate(Math.PI/this.angle+Math.atan2(this.stageWidth/2-this.x,-this.stageHeight/2+this.y));for(var t=0;t<this.angle;t++){var n=Math.sin(this.figureAngle*t)*this.size,c=Math.cos(this.figureAngle*t)*this.size;0===t?e.moveTo(n,c):e.lineTo(n,c)}}e.fill(),e.restore()}},{key:"update",value:function(e){(this.x+this.size>this.stageWidth||this.x-this.size<0)&&(this.dx*=-1),(this.y+this.size>this.stageHeight||this.y-this.size<0)&&(this.dy*=-1),this.x+=this.dx,this.y+=this.dy,this.draw(e)}}]),e}();n(41);function xe(e){var t,n,s=e.text,r=e.next,a=e.stageWidth,o=e.stageHeight,l=function(){t=window.scrollY,(n=document.querySelector(".shadowTitle"))&&Q(n,t)};return Object(i.useEffect)((function(){return window.addEventListener("scroll",(function(){l()})),window.removeEventListener("scroll",(function(){l()}))})),Object(c.jsxs)(c.Fragment,{children:[Object(c.jsxs)("section",{className:"work work-".concat(s),children:[Object(c.jsx)("div",{className:"part part1",children:Object(c.jsx)(T,{text:"".concat(s)})}),Object(c.jsx)("div",{className:"part part2",children:"2"}),Object(c.jsx)("div",{className:"part part3",children:Object(c.jsx)("ul",{children:Object(c.jsx)("li",{children:"3"})})}),Object(c.jsx)("div",{className:"part part4",children:"4"}),Object(c.jsx)("div",{className:"part part5",children:"5"}),Object(c.jsx)("div",{className:"part part6",children:"6"}),Object(c.jsx)(he,{nextLink:r})]}),Object(c.jsx)($,{}),Object(c.jsx)(ae,{stageWidth:a,stageHeight:o})]})}n(42);function Oe(e){var t=e.stageWidth,n=e.stageHeight;return Object(c.jsx)(c.Fragment,{children:Object(c.jsx)(xe,{text:"theKingOfMains",next:"Buttonbutton",stageWidth:t,stageHeight:n})})}n(43);function ge(e){var t=e.stageWidth,n=e.stageHeight;return Object(c.jsx)(c.Fragment,{children:Object(c.jsx)(xe,{text:"Buttonbutton",next:"About",stageWidth:t,stageHeight:n})})}n(44);function ve(e){e.change;var t=e.setChange,n=Object(i.useRef)();return Object(i.useEffect)((function(){n.current.classList.add("active"),n.current.style.backgroundColor=f[0],n.current.addEventListener("transitionend",(function(){n.current.classList.remove("active"),t(!1)}))})),Object(c.jsx)("div",{id:"changePage",ref:n})}var me=function(){var e=Object(i.useState)(!1),t=Object(o.a)(e,2),n=t[0],s=t[1],r=Object(i.useState)(!1),a=Object(o.a)(r,2),d=a[0],u=a[1],j=Object(i.useState)(document.body.clientWidth),f=Object(o.a)(j,2),b=f[0],x=f[1],O=Object(i.useState)(document.body.clientHeight),v=Object(o.a)(O,2),m=v[0],y=v[1],p=function(){x(window.innerWidth),y(window.innerHeight)};return Object(i.useEffect)((function(){return window.addEventListener("resize",(function(e){p()})),window.removeEventListener("resize",(function(e){p()}))}),[b,m]),Object(c.jsx)(c.Fragment,{children:Object(c.jsxs)(l.a,{children:[Object(c.jsx)(g,{menu:n,setMenu:s}),Object(c.jsx)(h.a,{path:"/",exact:!0,render:function(){return Object(c.jsx)(W,{setMenu:s,stageWidth:b,stageHeight:m})}}),Object(c.jsx)(h.a,{path:"/theKingOfMains",render:function(){return Object(c.jsx)(Oe,{setMenu:s,stageWidth:b,stageHeight:m})}}),Object(c.jsx)(h.a,{path:"/about",render:function(){return Object(c.jsx)(ue,{setMenu:s,stageWidth:b,stageHeight:m})}}),Object(c.jsx)(h.a,{path:"/buttonbutton",render:function(){return Object(c.jsx)(ge,{setMenu:s,stageWidth:b,stageHeight:m})}}),d&&Object(c.jsx)(ve,{change:d,setChange:u})]})})};a.a.render(Object(c.jsx)(s.a.StrictMode,{children:Object(c.jsx)(me,{})}),document.getElementById("Portfolio"))}},[[45,1,2]]]);
//# sourceMappingURL=main.5d8480fb.chunk.js.map