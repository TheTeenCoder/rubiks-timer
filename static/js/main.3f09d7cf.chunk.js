(this["webpackJsonpreact-cra-tailwindcss-boilerplate"]=this["webpackJsonpreact-cra-tailwindcss-boilerplate"]||[]).push([[0],{22:function(e,t,a){e.exports=a(42)},41:function(e,t,a){},42:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(12),l=a.n(c),o=a(9),s=a(1),i=function(){return r.a.createElement("button",{className:"rounded-xl shadow-xl px-4 py-2 bg-black text-white"},"Go to experimental timer")},m=function(){return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"flex flex-col justify-center items-center h-screen space-y-2"},r.a.createElement("h1",{className:"text-gray-700 font-semibold"},r.a.createElement("span",{className:"bg-clip-text text-transparent bg-gradient-to-l to-blue-600 from-gray-700"},"Cubing Timer.")),r.a.createElement("span",{className:"text-gray-600"},"Minimalist, customizable (soon), and unopinionated toward any cuber"),r.a.createElement(o.b,{to:"/timer"},r.a.createElement(i,null))))},u=a(6),d=a(14),f=a.n(d),E=a(44),b=function(){return Object(E.a)("data-main",JSON.parse(localStorage.getItem("data-main")))};f.a.setAppElement("#root");var p=function(){var e=Object(n.useState)(!1),t=Object(u.a)(e,2),a=t[0],c=t[1],l=function(){var e=b(),t=Object(u.a)(e,2),a=t[0],n=(t[1],function(e,t){return e+t});return{getAverage:function(){return a?a.times.reduce(n,0)/a.times.length:0}}}().getAverage;return r.a.createElement("div",null,r.a.createElement("button",{onClick:function(){return c(!0)},className:"rounded-xl shadow-xl px-4 py-2 bg-black text-white hover:ring-2 hover:ring-blue-300"},"See Data"),r.a.createElement(f.a,{isOpen:a,onRequestClose:function(){return c(!1)}},r.a.createElement("div",{className:"flex flex-col justify-center items-center "},r.a.createElement("div",{className:"flex flex-col justify-end items-end "},r.a.createElement("button",{onClick:function(){return c(!1)},className:"shadow-xl px-4 py-2 bg-black text-white"},"Close")),r.a.createElement("h1",null,"Data"),r.a.createElement("div",{className:"text-sm"},r.a.createElement("h1",null,l())))))},x=function(){var e=Object(n.useState)(0),t=Object(u.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(!1),o=Object(u.a)(l,2),s=o[0],i=o[1],m=Object(n.useRef)(),d=Object(E.a)("data-last-time",localStorage.getItem("data-last-time")),f=Object(u.a)(d,2),p=f[0],x=f[1],g=b(),h=Object(u.a)(g,2),v=(h[0],h[1]),y=function(e){switch(e.keyCode){case 32:s?(console.log("stop it"),clearInterval(m.current),i(!1),x(a.toFixed(1)),v((function(e){return e.times.push(a)}))):(console.log("continue"),c(0),i(!0),m.current=setInterval((function(){c((function(e){return e+.1}))}),100))}};return Object(n.useEffect)((function(){return document.addEventListener("keydown",y),function(){document.removeEventListener("keydown",y)}})),r.a.createElement("div",{className:"text-gray-700 justify-center items-center flex flex-col container texct-gray-300"},p&&!s&&r.a.createElement("h3",null,"Last time: ",p,"s"),r.a.createElement("span",{className:"flex items-center space-x-2"},r.a.createElement("h1",null,a.toFixed(1)),!s&&r.a.createElement("h4",null,"seconds.")))},g=function(){return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"flex flex-col justify-center items-center h-screen"},r.a.createElement(p,null),r.a.createElement("h5",{className:"text-gray-700 font-semibold"},r.a.createElement("span",{className:"bg-clip-text text-transparent bg-gradient-to-l to-blue-600 from-gray-700"},"Click ",r.a.createElement("span",{className:"to-pink-100 from-purple-200"},"[Space]")," ","to start/end timer.")),r.a.createElement(x,null)))};a(41);var h=function(){return r.a.createElement(o.a,null,r.a.createElement(s.c,null,r.a.createElement(s.a,{exact:!0,path:"/"},r.a.createElement(m,null)),r.a.createElement(s.a,{exact:!0,path:"/timer"},r.a.createElement(g,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(h,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[22,1,2]]]);
//# sourceMappingURL=main.3f09d7cf.chunk.js.map