(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{12:function(e,n,t){},13:function(e,n,t){},14:function(e,n,t){"use strict";t.r(n);var a=t(0),o=t.n(a),r=t(3),c=t.n(r),i=(t(12),t(4)),l=t(5),s=t(1);t(13);var u=function(){var e=Object(a.useState)(0),n=Object(l.a)(e,2),t=n[0],r=n[1],c=Object(s.estimateQuantity)(t),u=[];try{u=Object(s.spacingMeasurements)(t,c)}catch(f){c++,u=Object(s.spacingMeasurements)(t,c)}return o.a.createElement("div",{className:"App"},o.a.createElement("h1",null,"Baluster Calculator"),o.a.createElement("label",null,'Inner Post Width (max 120"): '),o.a.createElement("input",{type:"number",placeholder:"Whole Inches",onChange:function(e){return n=parseInt(e.target.value||0,10),r(function(e){return Math.min(120,n+(e-Math.floor(e)))});var n}}),o.a.createElement("label",null,"Fraction:"),o.a.createElement("select",{onChange:function(e){return n=parseFloat(e.target.value),r(function(e){return Math.floor(e)+n});var n}},Object(i.a)(Array(16).keys()).map(function(e){return o.a.createElement("option",{key:e,value:e/16},e,'/16"')})),!!t&&o.a.createElement(o.a.Fragment,null,o.a.createElement("p",null,"Number of Balusters: ",c),o.a.createElement("p",null,"Spacing (on center):"),o.a.createElement("ol",null,u.map(function(e){return 16===Object(s.nearest16th)(e)?[Math.ceil(e),[0,16]]:[Math.floor(e),[Object(s.nearest16th)(e),16]]}).map(function(e,n){return o.a.createElement("li",{key:n},e[0]," ",o.a.createElement("sup",null,e[1][0]),"/",o.a.createElement("sub",null,e[1][1]),'"')}))))},f=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function h(e,n){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),n&&n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}c.a.render(o.a.createElement(u,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/baluster",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var n="".concat("/baluster","/service-worker.js");f?(function(e,n){fetch(e).then(function(t){var a=t.headers.get("content-type");404===t.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):h(e,n)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(n,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")})):h(n,e)})}}()},6:function(e,n,t){e.exports=t(14)}},[[6,1,2]]]);
//# sourceMappingURL=main.cf101bd1.chunk.js.map