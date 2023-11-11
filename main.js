(()=>{"use strict";var e={426:(e,t,n)=>{n.d(t,{Z:()=>p});var r=n(81),o=n.n(r),a=n(645),i=n.n(a),s=n(667),c=n.n(s),l=new URL(n(88),n.b),d=i()(o()),h=c()(l);d.push([e.id,`html,body{\n    margin: 0;\n}\n#container{\n    background-image: url(${h});\n    background-size:cover;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction: row;\n    gap:5vw;\n    height: 100vh;\n    width: 100vw;\n    text-align: center;\n    font-size: 2rem;\n    color:white;\n}\n#placeships{\n    border: 5px solid white;\n    border-radius: 40px;\n    background-color: rgba(0,0,0,0.4);\n}\n#wrapper{\n    width: 105vh;\n    display: flex;\n    flex: auto;\n    padding: 30px;\n    justify-content: space-between;\n}\n#placable{\n    width: 55vh;\n    padding: 40px;\n    display: flex;\n    flex-direction: column;\n    gap: 40px;\n}\n#ships{\n    display: flex;\n    flex-direction: column;\n    gap:25px;\n}\n#rotate{\n    background-color: white;\n    height: 50px;\n    width: 200px;\n    border: 1p solid white;\n    border-radius: 20px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    cursor: pointer;\n    align-self: center;\n}\n#rotate:hover{\n    transform:scale(1.1);\n}\n#rotate:active{\n    transform:scale(1.0);\n}\n.ship{\n    display: flex;\n    width: fit-content;\n}\n.shipcell{\n    width: 50px;\n    height: 50px;\n    border: 1px solid black;\n    background-color: #c0c0c0;\n}\n.board{\n    background-color: transparent;\n    display: grid;\n    grid-template-columns: repeat(10,1fr);\n    border:2px solid white\n}\n.cell{\n    border: 1px solid white;\n    width: 50px;\n    height: 50px;\n}\n.miss{\n    background-color: #2f4753;\n}\n.hit{\n    background-color: red;\n}\n.aliveship{\n    background-color: #c0c0c0;\n}\n#overlay{\n    position: fixed;\n    width: 100vw;\n    height: 100vh;\n    display: none;\n    background-color: rgba(0,0,0,0.7);\n    cursor: pointer;\n}\n#start{\n    position: fixed;\n    width: 100vw;\n    height: 100vh;\n    background-image: url(${h});\n    background-size:cover;\n    cursor: pointer;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    text-align: center;\n    color: white;\n    flex-direction: column;\n}\n#overlaywinner{\n    position: absolute;\n    top: 40%;\n    left: 50%;\n    font-size: 50px;\n    font-weight: bold;\n    color: white;\n    transform: translate(-50%,-50%);\n    -ms-transform: translate(-50%,-50%);\n}\n#overlaytext{\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    font-size: 40px;\n    color: white;\n    transform: translate(-50%,-50%);\n    -ms-transform: translate(-50%,-50%);\n}`,""]);const p=d},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(i[c]=!0)}for(var l=0;l<e.length;l++){var d=[].concat(e[l]);r&&i[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),n&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=n):d[2]=n),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),t.push(d))}},t}},667:e=>{e.exports=function(e,t){return t||(t={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),t.hash&&(e+=t.hash),/["'() \t\n]|(%20)/.test(e)||t.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var a={},i=[],s=0;s<e.length;s++){var c=e[s],l=r.base?c[0]+r.base:c[0],d=a[l]||0,h="".concat(l," ").concat(d);a[l]=d+1;var p=n(h),u={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)t[p].references++,t[p].updater(u);else{var f=o(u,r);r.byIndex=s,t.splice(s,0,{identifier:h,updater:f,references:1})}i.push(h)}return i}function o(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var s=n(a[i]);t[s].references--}for(var c=r(e,o),l=0;l<a.length;l++){var d=n(a[l]);0===t[d].references&&(t[d].updater(),t.splice(d,1))}a=c}}},569:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},88:(e,t,n)=>{e.exports=n.p+"4821e95499eed06af427.jpg"}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var a=t[r]={id:r,exports:{}};return e[r](a,a.exports,n),a.exports}n.m=e,n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");if(r.length)for(var o=r.length-1;o>-1&&!e;)e=r[o--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),n.b=document.baseURI||self.location.href,n.nc=void 0,(()=>{var e=n(379),t=n.n(e),r=n(795),o=n.n(r),a=n(569),i=n.n(a),s=n(565),c=n.n(s),l=n(216),d=n.n(l),h=n(589),p=n.n(h),u=n(426),f={};f.styleTagTransform=p(),f.setAttributes=c(),f.insert=i().bind(null,"head"),f.domAPI=o(),f.insertStyleElement=d(),t()(u.Z,f),u.Z&&u.Z.locals&&u.Z.locals;class m{constructor(e){this.length=e,this.hits=0,this.sunk=!1}hit(){this.hits++}isSunk(){if(this.length<=this.hits)return this.sunk=!0}}class y{constructor(){this.createBoard()}board=[];shipList=[];createBoard(){for(let e=0;e<10;e++){this.board[e]=[];for(let t=0;t<10;t++)this.board[e][t]=[e,t]}}placeShip(e,t,n,r){const o=new m(n);if("horizontal"===r){if(!(+t+ +n<=10))return!1;for(let r=0;r<n;r++){if(this.board[e][+t+ +r]instanceof m)return!1;this.board[e][+t+ +r]=o}}else if("vertical"===r){if(!(+e+ +n<=10))return!1;for(let r=0;r<n;r++){if(this.board[+e+ +r][t]instanceof m)return!1;this.board[+e+ +r][t]=o}}return this.shipList.push(o),console.log(this.shipList),!0}receiveAttack(e,t){return this.board[e][t]instanceof m?(this.board[e][t].hits++,this.board[e][t].isSunk()&&(this.shipList=this.shipList.filter((n=>n!==this.board[e][t]))),this.board[e][t]="hit","hit"):(this.board[e][t]="miss","miss")}checkShips(){return this.shipList.length<=0}}class v{constructor(e,t,n){this.name=e,this.playerBoard=t,this.enemyBoard=n}takeTurn(e,t){let n=this.checkForWinner();"Player"!==n&&"Bot"!==n&&"hit"!==this.enemyBoard.board[e][t]&&"miss"!==this.enemyBoard.board[e][t]&&(this.enemyBoard.receiveAttack(e,t),v.botAttacks(this.playerBoard))}static botAttacks(e){let t=Math.floor(10*Math.random()),n=Math.floor(10*Math.random());for(;"miss"==e.board[t][n]||"hit"==e.board[t][n];)t=Math.floor(10*Math.random()),n=Math.floor(10*Math.random());e.receiveAttack(t,n)}static botPlaceShips(e){let t,n,r;for(let o=2;o<=5;o++)for(t=Math.floor(10*Math.random()),n=Math.floor(10*Math.random()),r=1===Math.floor(2*Math.random())?"horizontal":"vertical";!e.placeShip(t,n,o,r);)t=Math.floor(10*Math.random()),n=Math.floor(10*Math.random())}checkForWinner(){return this.playerBoard.checkShips()?"Bot":this.enemyBoard.checkShips()?"Player":void 0}}class b{static renderPlayerGameboard(e){document.querySelector("#playertext").textContent="Player";const t=document.querySelector("#playerBoard");t.textContent="";for(let n=0;n<10;n++)for(let r=0;r<10;r++){const o=document.createElement("div");o.classList.add(n+","+r),o.classList.add("cell"),"hit"==e.playerBoard.board[n][r]&&o.classList.add("hit"),"miss"==e.playerBoard.board[n][r]&&o.classList.add("miss"),e.playerBoard.board[n][r]instanceof m&&o.classList.add("aliveship"),t.appendChild(o)}}static renderEnemyGameboard(e){document.querySelector("#enemytext").textContent="Enemy";const t=document.querySelector("#enemyBoard");t.textContent="";for(let n=0;n<10;n++)for(let r=0;r<10;r++){const o=document.createElement("div");o.classList.add(n+","+r),o.classList.add("cell"),"hit"==e.enemyBoard.board[n][r]&&o.classList.add("hit"),"miss"==e.enemyBoard.board[n][r]&&o.classList.add("miss"),e.enemyBoard.board[n][r]instanceof m&&o.classList.add("aliveship"),o.addEventListener("click",(t=>{this.attack(t,e)})),t.appendChild(o)}}static renderPlacing(e){const t=document.querySelector("#placeships"),n=document.querySelector("#placableBoard"),r=document.querySelectorAll(".ship"),o=document.querySelector("#rotate"),a=document.querySelector("#player"),i=document.querySelector("#enemy");a.style.display="none",i.style.display="none";let s=4,c=null,l="horizontal";t.showModal(),n.textContent="",r.forEach((e=>{e.addEventListener("drag",(e=>{c=e.target}))})),o.addEventListener("click",(()=>{const e=document.querySelector("#ships"),t=document.querySelectorAll(".ship");"horizontal"===l?(l="vertical",e.style.flexDirection="row",t.forEach((e=>{e.style.flexDirection="column"}))):(l="horizontal",t.forEach((t=>{e.style.flexDirection="column",t.style.flexDirection="row"})))}));for(let r=0;r<10;r++)for(let o=0;o<10;o++){const d=document.createElement("div");d.id=r+","+o,d.classList.add("cell"),d.addEventListener("dragover",(e=>{e.preventDefault()})),d.addEventListener("drop",(n=>{n.preventDefault();let r=n.target.id;if(e.playerBoard.placeShip(r[0],r[2],c.id,l))if("horizontal"===l){for(let e=0;e<c.id;e++)document.getElementById(r[0]+","+(+r[2]+ +e)).classList.add("aliveship");document.getElementById(c.id).style.display="none",s--}else{for(let e=0;e<c.id;e++)document.getElementById(+r[0]+ +e+","+r[2]).classList.add("aliveship");document.getElementById(c.id).style.display="none",s--}s<=0&&(t.close(),a.style.display="block",i.style.display="block",b.renderGameBoards(e))})),n.appendChild(d)}}static renderGameBoards(e){this.renderPlayerGameboard(e),this.renderEnemyGameboard(e)}static displayWinner(e){const t=document.querySelector("#overlay"),n=document.querySelector("#overlaywinner");document.querySelectorAll(".ship").forEach((e=>{e.style=""}));let r=e.checkForWinner();("Player"===r||"Bot"===r)&&(t.style.display="block",n.textContent=r+" wins!",t.addEventListener("click",(()=>{t.style.display="none",g.play()})))}static launch(){const e=document.querySelector("#start");e.addEventListener("click",(()=>{e.style.display="none",g.play()}))}static attack(e,t){const n=e.target.classList[0];t.takeTurn(n[0],n[2]),this.renderGameBoards(t),this.displayWinner(t)}}class g{static start(){b.launch()}static play(){const e=new y,t=new y;v.botPlaceShips(t);const n=new v("Captain",e,t);b.renderPlacing(n)}}g.start()})()})();