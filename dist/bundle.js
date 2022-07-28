(()=>{"use strict";var e={123:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(81),i=n.n(r),o=n(645),s=n.n(o)()(i());s.push([e.id,"body {\r\n    margin: 0;\r\n    padding: 0;\r\n    background-image: linear-gradient(#fee0ff, #b2a3f8);\r\n    min-width: 100%;\r\n    min-height: 100vh;\r\n}\r\n\r\n.content {\r\n    position: absolute;\r\n    left: 50%;\r\n    top: 50%;\r\n    transform: translate(-50%, -50%);\r\n    width: fit-content;\r\n    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;\r\n}\r\n\r\n.header {\r\n    display: flex;\r\n    justify-content: space-between;\r\n}\r\n\r\n.info {\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\nh1 {\r\n    background: -webkit-linear-gradient(.29turn, #ff4059, #fa012f, #ff4965);\r\n    -webkit-background-clip: text;\r\n    -webkit-text-fill-color: transparent;\r\n    font-size: 100px;\r\n    margin: auto 0;\r\n    padding-right: 10px;\r\n}\r\n\r\n.stats {\r\n    display: flex;\r\n}\r\n\r\n.box {\r\n    background-color: #d56efd;\r\n    font-weight: bold;\r\n    padding: 10px 22px;\r\n    text-align: center;\r\n    margin: 4px;\r\n    border-radius: 10px;\r\n}\r\n\r\n.box p {\r\n    padding: 0;\r\n    margin: 0;\r\n    color: rgb(248, 236, 246);\r\n}\r\n\r\n#score,\r\n#best {\r\n    color: white;\r\n    font-size: 22px;\r\n}\r\n\r\n.new-game {\r\n    margin: 10px;\r\n    background-color: #833ac7;\r\n    color: rgb(255, 255, 255);\r\n    font-weight: bold;\r\n    padding: 10px 18px;\r\n    border-radius: 10px;\r\n    border: none;\r\n    cursor: pointer;\r\n}\r\n\r\n.new-game:hover {\r\n    background-color: rgb(158, 182, 182);\r\n}\r\n\r\n#background {\r\n    position: relative;\r\n}\r\n\r\n#main {\r\n    position: absolute;\r\n    left: 0;\r\n    top: 0;\r\n    z-index: 100;\r\n}\r\n\r\n#container {\r\n    border: 5px solid #9aa2cf;\r\n    background-color: #9aa2cf;\r\n    width: fit-content;\r\n    border-radius: 6px;\r\n    padding: 0px;\r\n    position: relative;\r\n    margin: 0 auto;\r\n}\r\n\r\n.row {\r\n    display: flex;\r\n}\r\n\r\n.tile {\r\n    background-color: #d9d3fd;\r\n    margin: 5px;\r\n    border-radius: 6px;\r\n    width: 100px;\r\n    height: 100px;\r\n}\r\n\r\n.animate {\r\n    animation-name: show-tile;\r\n    animation-timing-function: linear;\r\n    animation-duration: 0.2s;\r\n\r\n}\r\n\r\n@keyframes show-tile {\r\n    0% {\r\n        -webkit-transform: scale(0);\r\n        -ms-transform: scale(0);\r\n        transform: scale(0);\r\n    }\r\n\r\n    100% {\r\n        -webkit-transform: scale(1);\r\n        -ms-transform: scale(1);\r\n        transform: scale(1);\r\n    }\r\n}\r\n\r\n.number {\r\n    color: white;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    font-size: 38px;\r\n    text-align: center;\r\n    font-weight: bold;\r\n    position: absolute;\r\n    transition: top 0.15s cubic-bezier(0.075, 0.82, 0.165, 1),\r\n        left 0.15s cubic-bezier(0.075, 0.82, 0.165, 1);\r\n}\r\n\r\n#won {\r\n    position: absolute;\r\n    background-color: rgba(158, 158, 158, 0.596);\r\n    left: 0;\r\n    top: 0;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    border-radius: 5px;\r\n    z-index: 120;\r\n    width: 100%;\r\n    height: 100%;\r\n\r\n    display: none;\r\n}\r\n\r\n#won button {\r\n    margin: 0 auto;\r\n    width: fit-content;\r\n    background-color: rgb(3, 24, 43);\r\n    color: rgb(253, 253, 253);\r\n    transition: background-color 0.2s cubic-bezier(0.215, 0.610, 0.355, 1);\r\n}\r\n\r\n#won button:hover {\r\n    background-color: rgb(65, 141, 255);\r\n}\r\n\r\n#won h2 {\r\n    text-align: center;\r\n    font-size: 48px;\r\n    color: rgb(255, 255, 255);\r\n    height: fit-content;\r\n    display: flex;\r\n    justify-content: center;\r\n    animation-name: text-animation;\r\n    animation-duration: 2s;\r\n    animation-timing-function: ease-in-out;\r\n    animation-iteration-count: infinite;\r\n    animation-fill-mode: both;\r\n    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;\r\n    -webkit-text-stroke-width: 3px;\r\n    -webkit-text-stroke-color: #5b5c5f;\r\n}",""]);const l=s},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,i,o){"string"==typeof e&&(e=[[null,e,void 0]]);var s={};if(r)for(var l=0;l<this.length;l++){var a=this[l][0];null!=a&&(s[a]=!0)}for(var c=0;c<e.length;c++){var f=[].concat(e[c]);r&&s[f[0]]||(void 0!==o&&(void 0===f[5]||(f[1]="@layer".concat(f[5].length>0?" ".concat(f[5]):""," {").concat(f[1],"}")),f[5]=o),n&&(f[2]?(f[1]="@media ".concat(f[2]," {").concat(f[1],"}"),f[2]=n):f[2]=n),i&&(f[4]?(f[1]="@supports (".concat(f[4],") {").concat(f[1],"}"),f[4]=i):f[4]="".concat(i)),t.push(f))}},t}},81:e=>{e.exports=function(e){return e[1]}},395:(e,t,n)=>{n.r(t),n.d(t,{default:()=>b});var r=n(379),i=n.n(r),o=n(795),s=n.n(o),l=n(569),a=n.n(l),c=n(565),f=n.n(c),d=n(216),u=n.n(d),m=n(589),h=n.n(m),p=n(123),v={};v.styleTagTransform=h(),v.setAttributes=f(),v.insert=a().bind(null,"head"),v.domAPI=s(),v.insertStyleElement=u(),i()(p.Z,v);const b=p.Z&&p.Z.locals?p.Z.locals:void 0},379:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var o={},s=[],l=0;l<e.length;l++){var a=e[l],c=r.base?a[0]+r.base:a[0],f=o[c]||0,d="".concat(c," ").concat(f);o[c]=f+1;var u=n(d),m={css:a[1],media:a[2],sourceMap:a[3],supports:a[4],layer:a[5]};if(-1!==u)t[u].references++,t[u].updater(m);else{var h=i(m,r);r.byIndex=l,t.splice(l,0,{identifier:d,updater:h,references:1})}s.push(d)}return s}function i(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,i){var o=r(e=e||[],i=i||{});return function(e){e=e||[];for(var s=0;s<o.length;s++){var l=n(o[s]);t[l].references--}for(var a=r(e,i),c=0;c<o.length;c++){var f=n(o[c]);0===t[f].references&&(t[f].updater(),t.splice(f,1))}o=a}}},569:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var i=void 0!==n.layer;i&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,i&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var o=n.sourceMap;o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(r){var i=t[r];if(void 0!==i)return i.exports;var o=t[r]={id:r,exports:{}};return e[r](o,o.exports,n),o.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.nc=void 0,(()=>{class e{constructor(e,t,n){this.row=e,this.column=t,this.index=n,this.tile=null,this.empty=!0}}const t={2:["#ceffc6","#555a61"],4:["#8cfea8","#555a61"],8:["#6fe3cd","#555a61"],16:["#099dd5","#ffffff"],32:["#0a65ff","#ffffff"],64:["#0c03bf","#ffffff"],128:["#8255dc","#ffffff"],256:["#d178f6","#ffffff"],512:["#f544e2","#ffffff"],1024:["#a7286f","#ffffff"],2048:["#ff003d","#ffffff"]};class r{constructor(e,t,n){this.i=e,this.j=t,this.index=n,this.value=2}setValue(e){this.value=e,this.element.innerText=e,this.colorElement()}move(e,t){this.i=e,this.j=t,this.positionElement()}positionElement(){this.element.style.left=`${this.j}px`,this.element.style.top=`${this.i}px`}colorElement(){let e=t[this.value];this.element.style.backgroundColor=e[0],this.element.style.color=e[1]}makeDOMElement(){let e=document.createElement("div");e.classList.add("number"),e.classList.add("tile"),e.classList.add("animate"),e.textContent=this.value,e.id=`tile-${this.index}`,this.element=e,this.colorElement(),this.positionElement(),document.getElementById("main").appendChild(this.element)}deleteElementFromDOM(){this.element.remove()}}n(395);const i=new class{constructor(){this.list=[]}initList(){this.list=[];for(let e=0;e<4;e++)for(let t=0;t<4;t++)this.list.push({row:e,column:t})}add(e){this.list.push(e)}remove(e){this.list=this.list.filter((t=>!(t.column==e.column&&t.row==e.row)))}getRandom(){let e=Math.floor(Math.random()*this.list.length),t=this.list[e],n={...t};return this.remove(t),n}},o=new class{constructor(){this.score=0,this.best=sessionStorage.getItem("best")??0,this.displayBest()}showStats(){this.displayScore(),this.displayBest()}displayScore(){document.getElementById("score").innerText=this.score}displayBest(){document.getElementById("best").innerText=this.best}addPoints(e){this.score+=e,this.displayScore()}updateBest(){this.score>this.best&&(this.best=this.score,sessionStorage.setItem("best",this.score))}},s=new class{moveTile(e,t){t.empty?this.moveToEmptyField(e,t):this.combineTiles(e,t),e.empty=!0,this.emptyFields.add({row:e.row,column:e.column}),t.empty=!1}moveTop(){let e=!1;for(let t=0;t<4;t++)for(let n=1;n<4;n++){let r=n-1,i=t;if(this.shouldMove(n,t,r,i)){const o=this.fields[r][i].empty;this.moveTile(this.fields[n][t],this.fields[r][i]);for(let e=n;e<3;e++)this.fields[e+1][t].empty||this.moveTile(this.fields[e+1][t],this.fields[e][t]);o&&(n-=2),e=!0}}return e}moveRight(){let e=!1;for(let t=0;t<4;t++)for(let n=2;n>=0;n--){let r=t,i=n+1;if(this.shouldMove(t,n,r,i)){const o=this.fields[r][i].empty;this.moveTile(this.fields[t][n],this.fields[r][i]);for(let e=n;e>=1;e--)this.fields[t][e-1].empty||this.moveTile(this.fields[t][e-1],this.fields[t][e]);o&&(n+=2),e=!0}}return e}moveBottom(){let e=!1;for(let t=0;t<4;t++)for(let n=2;n>=0;n--){let r=n+1,i=t;if(this.shouldMove(n,t,r,i)){const o=this.fields[r][i].empty;this.moveTile(this.fields[n][t],this.fields[r][i]);for(let e=n;e>1;e--)this.fields[e-1][t].empty||this.moveTile(this.fields[e-1][t],this.fields[e][t]);o&&(n+=2),e=!0}}return e}moveLeft(){let e=!1;for(let t=0;t<4;t++)for(let n=1;n<4;n++){let r=t,i=n-1;if(this.shouldMove(t,n,r,i)){const o=this.fields[r][i].empty;this.moveTile(this.fields[t][n],this.fields[r][i]);for(let e=n;e<3;e++)this.fields[t][e+1].empty||this.moveTile(this.fields[t][e+1],this.fields[t][e]);o&&(n-=2),e=!0}}return e}canMove(){for(let e=0;e<4;e++)for(let t=0;t<4;t++){let n,r,i,o,s=this.fields[e][t].tile.value;if(e-1>=0&&(n=this.fields[e-1][t]),t+1<4&&(r=this.fields[e][t+1]),e+1<4&&(i=this.fields[e+1][t]),t-1>=0&&(o=this.fields[e][t-1]),n&&n.tile.value==s)return!0;if(r&&r.tile.value==s)return!0;if(i&&i.tile.value==s)return!0;if(o&&o.tile.value==s)return!0}return!1}shouldMove(e,t,n,r){const i=this.fields[e][t];if(i.empty)return!1;if(this.outOfBounds(r,n))return!1;const o=this.fields[n][r];return!!o.empty||i.tile.value==o.tile.value}outOfBounds(e,t){return e<0||e>3||t<0||t>3}moveToEmptyField(e,t){e.tile.move(110*t.row,110*t.column),t.tile=e.tile,this.emptyFields.remove({row:t.row,column:t.column})}combineTiles(e,t){e.tile.deleteElementFromDOM();let n=2*t.tile.value;t.tile.setValue(n),this.stats.addPoints(n),2048==n&&showEndScreen(!0)}},l=[];let a=!1;function c(){!function(){l.splice(0,l.length);let t=0;for(let n=0;n<4;n++){l[n]=[];for(let r=0;r<4;r++)l[n][r]=new e(n,r,t),t++}s.fields=l}(),i.initList(),s.emptyFields=i,f(),d(),d(),function(){document.addEventListener("keyup",u);let e=document.getElementsByClassName("new-game");for(const t of e)t.addEventListener("click",m)}(),s.stats=o}function f(){document.getElementById("main").innerHTML=""}function d(){let{row:e,column:t}=i.getRandom(),n=l[e][t],o=new r(110*e,110*t,n.index);return n.tile=o,n.empty=!1,o.makeDOMElement(),o}function u(e){if(a)return;let t;switch(e.keyCode){case 37:t=s.moveLeft();break;case 38:t=s.moveTop();break;case 39:t=s.moveRight();break;case 40:t=s.moveBottom()}t&&d(),0!=i.list.length||s.canMove()||(h(!1),o.updateBest())}function m(){document.getElementById("won").style.display="none",a=!1,o.updateBest(),f(),i.initList(),o.score=0,o.showStats(),c()}function h(e){a=!0,setTimeout((()=>{let t;t=e?"You Won!":"Game Over",document.getElementById("message").innerHTML=t,document.getElementById("won").style.display="flex"}),400)}c(),s.showEndScreen=h})()})();