window.__require=function o(t,e,i){function r(c,s){if(!e[c]){if(!t[c]){var h=c.split("/");if(h=h[h.length-1],!t[h]){var d="function"==typeof __require&&__require;if(!s&&d)return d(h,!0);if(n)return n(h,!0);throw new Error("Cannot find module '"+c+"'")}c=h}var a=e[c]={exports:{}};t[c][0].call(a.exports,function(o){return r(t[c][1][o]||o)},a,a.exports,o,t,e,i)}return e[c].exports}for(var n="function"==typeof __require&&__require,c=0;c<i.length;c++)r(i[c]);return r}({block:[function(o,t,e){"use strict";cc._RF.push(t,"9b356vJ671Bjr9DRHC4nsSM","block"),cc.Class({extends:cc.Component,properties:{colorAtlas:cc.SpriteAtlas},onLoad:function(){this.node.on("touchstart",this.onTouchStart,this),this.node.on("touchmove",this.onTouchMove,this),this.node.on("touchend",this.onTouchEnd,this)},onDestroy:function(){this.node.off("touchstart",this.onTouchStart,this),this.node.off("touchmove",this.onTouchMove,this),this.node.off("touchend",this.onTouchEnd,this)},init:function(o){this.node.getComponent(cc.Sprite).spriteFrame=this.colorAtlas.getSpriteFrame(o%6),this.node.width=80+25*o},onTouchStart:function(o){this.startPos=this.node.position},onTouchMove:function(o){var t=o.getDelta();this.node.x+=t.x,this.node.y+=t.y},onTouchEnd:function(o){window.game.placeBlock(this.node)||(this.node.position=this.startPos)}}),cc._RF.pop()},{}],game:[function(o,t,e){"use strict";cc._RF.push(t,"c70daTVWdxMQZGI5mHpCT/L","game"),cc.Class({extends:cc.Component,properties:{blockLayerNode:cc.Node,blockPrefab:cc.Prefab,baseNodeArr:[cc.Node],gameOverNode:cc.Node,gameOverNode2:cc.Node,gameOverNode3:cc.Node},onLoad:function(){window.game=this,this.blockNodeArr=[[],[],[]],this.blockNum=3,this.initBlock(this.blockNum),this.blockNodeArr[2].length==this.blockNum&&this.initBlock(this.blockNum)},initBlock:function(o){this.gameOverNode.opacity=0,this.gameOverNode2.opacity=0,o>=10&&(o=10);for(var t=0;t<this.blockNodeArr.length;t++)for(var e=this.blockNodeArr[t],i=0;i<e.length;i++)e[i].destroy();this.blockNodeArr=[[],[],[]];for(var r=0;r<o;r++){var n=cc.instantiate(this.blockPrefab);this.blockLayerNode.addChild(n);var c=Math.floor(3*Math.random());n.x=this.baseNodeArr[c].x,n.y=34*this.blockNodeArr[c].length-200,n.baseIndex=c,n.blockIndex=o-r-1,n.getComponent("block").init(o-r-1),this.blockNodeArr[c].push(n)}},baseIndexCheck:function(o){for(var t=0;t<this.baseNodeArr.length;t++){var e=this.baseNodeArr[t];if(o.x>=e.x-e.width/2&&o.x<=e.x+e.width/2)return t}return-1},placeBlock:function(o){var t=this,e=this.baseIndexCheck(o.position);if(-1==e)return!1;if(o.baseIndex==e)return!1;var i=this.blockNodeArr[e],r=this.blockNodeArr[o.baseIndex].length-1;if(o.blockIndex!=this.blockNodeArr[o.baseIndex][r].blockIndex)return!1;if(i.length&&i[i.length-1].blockIndex<=o.blockIndex)return!1;var n=this.baseNodeArr[e];o.x=n.x,this.blockNodeArr[o.baseIndex].pop(),this.blockNodeArr[e].push(o),o.baseIndex=e;var c=this.blockNodeArr[e].length;return o.y=34*(c-1)-200,this.blockNodeArr[2].length==this.blockNum&&(this.gameOverNode3.opacity=0,this.blockNum<=9?this.gameOverNode.opacity=255:this.blockNum>=10&&(this.gameOverNode2.opacity=255),setTimeout(function(){t.initBlock(++t.blockNum)},"1500")),!0}}),cc._RF.pop()},{}]},{},["block","game"]);