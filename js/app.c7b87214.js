(function(e){function t(t){for(var r,a,s=t[0],c=t[1],u=t[2],d=0,f=[];d<s.length;d++)a=s[d],Object.prototype.hasOwnProperty.call(i,a)&&i[a]&&f.push(i[a][0]),i[a]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);l&&l(t);while(f.length)f.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,s=1;s<n.length;s++){var c=n[s];0!==i[c]&&(r=!1)}r&&(o.splice(t--,1),e=a(a.s=n[0]))}return e}var r={},i={app:0},o=[];function a(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=r,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(n,r,function(t){return e[t]}.bind(null,r));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=t,s=s.slice();for(var u=0;u<s.length;u++)t(s[u]);var l=c;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";n("85ec")},"09ab":function(e,t,n){var r={"./1.ogg":"e985","./2.ogg":"c5e7","./3.ogg":"3135","./4.ogg":"edf5"};function i(e){var t=o(e);return n(t)}function o(e){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}i.keys=function(){return Object.keys(r)},i.resolve=o,e.exports=i,i.id="09ab"},3135:function(e,t,n){e.exports=n.p+"media/3.7d29331d.ogg"},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},o=[],a=(n("034f"),n("2877")),s={},c=Object(a["a"])(s,i,o,!1,null,null,null),u=c.exports,l=n("8c4f"),d=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[n("HelloWorld")],1)},f=[],p=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[n("div",{staticClass:"wrapper"},[n("h1",[e._v("Simon Says")]),n("div",{staticClass:"game-board"},[n("div",{staticClass:"simon"},[n("ul",[n("li",{staticClass:"tile red",attrs:{id:"red"},on:{click:e.registerClick}}),n("li",{staticClass:"tile blue",attrs:{id:"blue"},on:{click:e.registerClick}}),n("li",{staticClass:"tile yellow",attrs:{id:"yellow"},on:{click:e.registerClick}}),n("li",{staticClass:"tile green",attrs:{id:"green"},on:{click:e.registerClick}})])])]),n("div",{staticClass:"game-info"},[n("h2",[e._v("Round: "),n("span",[e._v(e._s(e.round))])]),n("button",{on:{click:e.start}},[e._v("Start")]),e.lost?n("p",[e._v("Sorry, you lost after "),n("span",[e._v(" "+e._s(this.round))]),e._v(" rounds!")]):e._e(),e.win?n("p",[e._v("You win")]):e._e()]),n("div",{staticClass:"game-options"},[n("h2",[e._v("Game Options:")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.difficult,expression:"difficult"}],attrs:{type:"radio",name:"mode",value:"1500",checked:""},domProps:{checked:e._q(e.difficult,"1500")},on:{change:function(t){e.difficult="1500"}}}),e._v("Normal"),n("br"),n("input",{directives:[{name:"model",rawName:"v-model",value:e.difficult,expression:"difficult"}],attrs:{type:"radio",name:"mode",value:"1000"},domProps:{checked:e._q(e.difficult,"1000")},on:{change:function(t){e.difficult="1000"}}}),e._v("Medium"),n("br"),n("input",{directives:[{name:"model",rawName:"v-model",value:e.difficult,expression:"difficult"}],attrs:{type:"radio",name:"mode",value:"400"},domProps:{checked:e._q(e.difficult,"400")},on:{change:function(t){e.difficult="400"}}}),e._v("Hard ")]),e._m(0)])])},m=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("footer",[e._v(" Created by "),n("a",{attrs:{href:"https://artandsky.ru"}},[e._v("Artem Andrievsky")])])}],h=(n("c975"),n("b85c")),v=n("2909"),g=(n("96cf"),n("1da1")),b=(n("d3b7"),function(e){return new Promise((function(t){setTimeout((function(){t()}),e)}))}),_={name:"HelloWorld",data:function(){return{curNotes:[],userNotes:[],difficult:1500,round:0,colors:["yellow","red","green","blue"],gameActive:!1,lost:!1,win:!1}},methods:{start:function(){this.restartGame(),this.startRound()},startRound:function(){var e=this;return Object(g["a"])(regeneratorRuntime.mark((function t(){var n,r,i,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!(e.round<7)){t.next=27;break}e.gameActive=!1,e.round++,n=Math.floor(4*Math.random()),e.curNotes.push(e.colors[n]),e.userNotes=Object(v["a"])(e.curNotes),r=Object(h["a"])(e.curNotes),t.prev=7,r.s();case 9:if((i=r.n()).done){t.next=16;break}return o=i.value,t.next=13,b(+e.difficult);case 13:e.triggerTile(o);case 14:t.next=9;break;case 16:t.next=21;break;case 18:t.prev=18,t.t0=t["catch"](7),r.e(t.t0);case 21:return t.prev=21,r.f(),t.finish(21);case 24:e.gameActive=!0,t.next=28;break;case 27:e.endGame();case 28:case"end":return t.stop()}}),t,null,[[7,18,21,24]])})))()},endGame:function(){7==this.round&&0==this.userNotes.length?this.win=!0:this.lost=!0,this.gameActive=!1},registerClick:function(e){if(this.gameActive){var t=e.target.id;this.playSound(t),this.userNotes[0]==t?this.userNotes.shift():this.endGame(),this.changeColor(t),0==this.userNotes.length&&this.startRound()}},triggerTile:function(e){this.playSound(e),this.changeColor(e)},restartGame:function(){this.round=0,this.curNotes=[],this.userNotes=[],this.lost=!1,this.win=!1},playSound:function(e){var t=new Audio(n("09ab")("./".concat(this.colors.indexOf(e)+1,".ogg")));t.play()},changeColor:function(e){return Object(g["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=document.querySelector("#".concat(e)),n.className="tile ".concat(e," active"),t.next=4,b(200);case 4:n.className="tile ".concat(e);case 5:case"end":return t.stop()}}),t)})))()}},watch:{difficult:function(){this.restartGame()}}},y=_,w=(n("8d7c"),Object(a["a"])(y,p,m,!1,null,"28d7db5f",null)),k=w.exports,x={name:"Home",components:{HelloWorld:k}},O=x,C=Object(a["a"])(O,d,f,!1,null,null,null),N=C.exports;r["a"].use(l["a"]);var j=[{path:"/",name:"Home",component:N}],S=new l["a"]({mode:"history",base:"/",routes:j}),P=S;r["a"].config.productionTip=!1,new r["a"]({router:P,render:function(e){return e(u)}}).$mount("#app")},"65c3":function(e,t,n){},"85ec":function(e,t,n){},"8d7c":function(e,t,n){"use strict";n("65c3")},c5e7:function(e,t,n){e.exports=n.p+"media/2.63d780a9.ogg"},e985:function(e,t,n){e.exports=n.p+"media/1.76fd3fb8.ogg"},edf5:function(e,t,n){e.exports=n.p+"media/4.ab928396.ogg"}});
//# sourceMappingURL=app.c7b87214.js.map