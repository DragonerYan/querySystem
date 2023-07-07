import{K as t,p as e,o as i,a as s,w as o,b as a,v as n,x as r,g as l,F as h,k as d,q as c,d as u,t as b,l as f,i as m,m as g,S as x}from"./index-f9923a45.js";import{_ as p}from"./uni-app.es.05b2e329.js";const y={};function S(t,e){let i=null;if(!y||!Object.keys(y).length)return e;i=y;const s=i[function(t){return t.replace(/([A-Z])/g,"-$1").toLowerCase()}(t)];return void 0===s?e:s}const C=p({name:"z-tabs",data:()=>({currentIndex:0,currentSwiperIndex:0,bottomDotX:-1,bottomDotXForIndex:0,showBottomDot:!1,shouldSetDx:!0,barCalcedWidth:0,pxBarWidth:0,scrollLeft:0,tabsSuperWidth:t(750),tabsWidth:t(750),tabsHeight:t(80),tabsLeft:0,tabsContainerWidth:0,itemNodeInfos:[],isFirstLoaded:!1,currentScrollLeft:0,changeTriggerFailed:!1,currentChanged:!1}),props:{list:{type:Array,default:function(){return[]}},current:{type:[Number,String],default:S("current",0)},scrollCount:{type:[Number,String],default:S("scrollCount",5)},tabsStyle:{type:Object,default:function(){return S("tabsStyle",{})}},tabWidth:{type:[Number,String],default:S("tabWidth",0)},barWidth:{type:[Number,String],default:S("barWidth",45)},barHeight:{type:[Number,String],default:S("barHeight",8)},barStyle:{type:Object,default:function(){return S("barStyle",{})}},bottomSpace:{type:[Number,String],default:S("bottomSpace",8)},barAnimateMode:{type:String,default:S("barAnimateMode","line")},nameKey:{type:String,default:S("nameKey","name")},valueKey:{type:String,default:S("valueKey","value")},activeColor:{type:String,default:S("activeColor","#007AFF")},inactiveColor:{type:String,default:S("inactiveColor","#666666")},disabledColor:{type:String,default:S("disabledColor","#bbbbbb")},activeStyle:{type:Object,default:function(){return S("activeStyle",{})}},inactiveStyle:{type:Object,default:function(){return S("inactiveStyle",{})}},disabledStyle:{type:Object,default:function(){return S("disabledStyle",{})}},bgColor:{type:String,default:S("bgColor","white")},badgeMaxCount:{type:[Number,String],default:S("badgeMaxCount",99)},badgeStyle:{type:Object,default:function(){return S("badgeStyle",{})}},initTriggerChange:{type:Boolean,default:S("initTriggerChange",!1)}},mounted(){this.updateSubviewLayout()},watch:{current:{handler(t){this.currentChanged&&this._lockDx(),this.currentIndex=t,this._preUpdateDotPosition(this.currentIndex),this.initTriggerChange&&(t<this.list.length?this.$emit("change",t,this.list[t][this.valueKey]):this.changeTriggerFailed=!0),this.currentChanged=!0},immediate:!0},list:{handler(t){this._handleListChange(t)},immediate:!1},bottomDotX(t){t>=0&&(this.showBottomDot=!0,this.$nextTick((()=>{})))},finalBarWidth:{handler(t){this.barCalcedWidth=t,this.pxBarWidth=this.barCalcedWidth},immediate:!0},currentIndex:{handler(t){this.currentSwiperIndex=t},immediate:!0}},computed:{shouldScroll(){return this.list.length>this.scrollCount},finalTabsHeight(){return this.tabsHeight},tabStyle(){const t=this.shouldScroll?{"flex-shrink":0}:{flex:1};return this.finalTabWidth>0?t.width=this.finalTabWidth+"px":delete t.width,t},tabsListStyle(){return this.shouldScroll?{}:{flex:1}},showAnimate(){return this.isFirstLoaded&&!this.shouldSetDx},dotTransition(){return this.showAnimate?"transform .2s linear":"none"},finalDotStyle(){return{...this.barStyle,width:this.barCalcedWidth+"px",height:this.finalBarHeight+"px",opacity:this.showBottomDot?1:0}},finalTabWidth(){return this._convertTextToPx(this.tabWidth)},finalBarWidth(){return this._convertTextToPx(this.barWidth)},finalBarHeight(){return this._convertTextToPx(this.barHeight)},finalBottomSpace(){return this._convertTextToPx(this.bottomSpace)}},methods:{setDx(t){if(!this.shouldSetDx)return;const e="line"===this.barAnimateMode,i="worm"===this.barAnimateMode;let s=t/this.tabsSuperWidth;this.currentSwiperIndex=this.currentIndex+parseInt(s);const o=s>0,a=this.pxBarWidth;if(this.currentSwiperIndex!==this.currentIndex){s-=this.currentSwiperIndex-this.currentIndex;const t=this.itemNodeInfos[this.currentSwiperIndex];t&&(this.bottomDotXForIndex=this._getBottomDotX(t,a))}const n=this.currentSwiperIndex;let r=n+(o?1:-1);r=Math.max(0,r),r=Math.min(r,this.itemNodeInfos.length-1);const l=this.itemNodeInfos[n],h=this.itemNodeInfos[r],d=this._getBottomDotX(h,a);if(e)this.bottomDotX=this.bottomDotXForIndex+(d-this.bottomDotXForIndex)*Math.abs(s);else if(i){if(o&&n>=this.itemNodeInfos.length-1||!o&&n<=0)return;const t=o?h.right-l.left:l.right-h.left;let e=a+t*Math.abs(s);if(o){if(e>d-this.bottomDotX+a){const i=a+t*(1-s);this.bottomDotX=this.bottomDotXForIndex+(e-i)/2,e=i}}else if(!o)if(e>this.bottomDotXForIndex+a-d){e=a+t*(1+s),this.bottomDotX=d}else this.bottomDotX=this.bottomDotXForIndex-(e-a);e=Math.max(e,a),this.barCalcedWidth=e}},unlockDx(){this.$nextTick((()=>{this.shouldSetDx=!0}))},updateSubviewLayout(t=0){this.$nextTick((()=>{setTimeout((()=>{this._getNodeClientRect(".z-tabs-scroll-view-conatiner").then((e=>{if(e){if(!e[0].width&&t<10)return void setTimeout((()=>{t++,this.updateSubviewLayout(t)}),50);this.tabsWidth=e[0].width,this.tabsHeight=e[0].height,this.tabsLeft=e[0].left,this._handleListChange(this.list)}})),this._getNodeClientRect(".z-tabs-conatiner").then((t=>{t&&t[0].width&&(this.tabsSuperWidth=t[0].width)}))}),10)}))},tabsClick(t,e){e.disabled||(this.currentIndex!=t?(this.shouldSetDx=!1,this.$emit("change",t,e[this.valueKey]),this.currentIndex=t,this._preUpdateDotPosition(t)):this.$emit("secondClick",t,e[this.valueKey]))},scroll(t){this.currentScrollLeft=t.detail.scrollLeft},_lockDx(){this.shouldSetDx=!1},_preUpdateDotPosition(t){this.$nextTick((()=>{e().in(this).select(".z-tabs-scroll-view").fields({scrollOffset:!0},(e=>{e?(this.currentScrollLeft=e.scrollLeft,this._updateDotPosition(t)):this._updateDotPosition(t)})).exec()}))},_updateDotPosition(e){e>=this.itemNodeInfos.length||this.$nextTick((async()=>{let i=this.itemNodeInfos[e],s=0,o=this.tabsContainerWidth;if("{}"!==JSON.stringify(this.activeStyle)){const a=await this._getNodeClientRect(`#z-tabs-item-${e}`,!0);if(a){i=a[0],s=this.currentScrollLeft,this.tabsHeight=Math.max(i.height+t(28),this.tabsHeight),o=0;for(let t=0;t<this.itemNodeInfos.length;t++){let s=this.itemNodeInfos[t];o+=t===e?i.width:s.width}}}this.bottomDotX=this._getBottomDotX(i,this.finalBarWidth,s),this.bottomDotXForIndex=this.bottomDotX,this.tabsWidth&&setTimeout((()=>{let t=this.bottomDotX-this.tabsWidth/2+this.finalBarWidth/2;t=Math.max(0,t),o&&(t=Math.min(t,o-this.tabsWidth+10)),this.shouldScroll&&o>this.tabsWidth&&(this.scrollLeft=t),this.$nextTick((()=>{this.isFirstLoaded=!0}))}),200)}))},_handleListChange(t){this.$nextTick((async()=>{if(t.length){let e=[],i=0;setTimeout((async()=>{for(let s=0;s<t.length;s++){const t=await this._getNodeClientRect(`#z-tabs-item-${s}`,!0);if(t){const s=t[0];s.left+=this.currentScrollLeft,e.push(s),i+=s.width}s===this.currentIndex&&(this.itemNodeInfos=e,this.tabsContainerWidth=i,this._updateDotPosition(this.currentIndex))}this.itemNodeInfos=e,this.tabsContainerWidth=i,this._updateDotPosition(this.currentIndex)}),0)}})),this.initTriggerChange&&this.changeTriggerFailed&&t.length&&this.current<t.length&&this.$emit("change",this.current,t[this.current][this.valueKey])},_getBottomDotX(t,e=this.finalBarWidth,i=0){return t.left+t.width/2-e/2+i-this.tabsLeft},_getNodeClientRect(t,i=!1){const s=e().in(this);return s.select(t).boundingClientRect(),new Promise(((t,e)=>{s.exec((e=>{t(!(!e||""==e||null==e||!e.length)&&e)}))}))},_formatCount(t){return t?t>this.badgeMaxCount?this.badgeMaxCount+"+":t.toString():""},_convertTextToPx(e){if("[object Number]"===Object.prototype.toString.call(e))return t(e);let i=!1;return-1!==e.indexOf("rpx")||-1!==e.indexOf("upx")?(e=e.replace("rpx","").replace("upx",""),i=!0):e=-1!==e.indexOf("px")?e.replace("px",""):t(e),isNaN(e)?0:Number(i?t(e):e)}}},[["render",function(t,e,p,y,S,C){const _=m,D=g,w=x;return i(),s(_,{class:"z-tabs-conatiner",style:r([{background:p.bgColor},p.tabsStyle])},{default:o((()=>[a(_,{class:"z-tabs-left"},{default:o((()=>[n(t.$slots,"left",{},void 0,!0)])),_:3}),a(_,{ref:"z-tabs-scroll-view-conatiner",class:"z-tabs-scroll-view-conatiner"},{default:o((()=>[a(w,{ref:"z-tabs-scroll-view",class:"z-tabs-scroll-view","scroll-x":!0,"scroll-left":S.scrollLeft,"show-scrollbar":!1,"scroll-with-animation":S.isFirstLoaded,onScroll:C.scroll},{default:o((()=>[a(_,{class:"z-tabs-list-container",style:r([C.tabsListStyle])},{default:o((()=>[a(_,{class:"z-tabs-list",style:r([C.tabsListStyle,{marginTop:-C.finalBottomSpace+"px"}])},{default:o((()=>[(i(!0),l(h,null,d(p.list,((t,e)=>(i(),s(_,{ref_for:!0,ref:`z-tabs-item-${e}`,id:`z-tabs-item-${e}`,class:"z-tabs-item",style:r([C.tabStyle]),key:e,onClick:i=>C.tabsClick(e,t)},{default:o((()=>[a(_,{class:"z-tabs-item-title-container"},{default:o((()=>[a(D,{class:c({"z-tabs-item-title":!0,"z-tabs-item-title-disabled":t.disabled}),style:r([{color:t.disabled?p.disabledColor:S.currentIndex===e?p.activeColor:p.inactiveColor},t.disabled?p.disabledStyle:S.currentIndex===e?p.activeStyle:p.inactiveStyle])},{default:o((()=>[u(b(t[p.nameKey]||t),1)])),_:2},1032,["class","style"]),t.badge&&C._formatCount(t.badge.count).length?(i(),s(D,{key:0,class:"z-tabs-item-badge",style:r([p.badgeStyle])},{default:o((()=>[u(b(C._formatCount(t.badge.count)),1)])),_:2},1032,["style"])):f("",!0)])),_:2},1024)])),_:2},1032,["id","style","onClick"])))),128))])),_:1},8,["style"]),a(_,{class:"z-tabs-bottom",style:r([{width:S.tabsContainerWidth+"px",bottom:C.finalBottomSpace+"px"}])},{default:o((()=>[a(_,{ref:"z-tabs-bottom-dot",class:"z-tabs-bottom-dot",style:r([{transform:`translateX(${S.bottomDotX}px)`,transition:C.dotTransition,background:p.activeColor},C.finalDotStyle])},null,8,["style"])])),_:1},8,["style"])])),_:1},8,["style"])])),_:1},8,["scroll-left","scroll-with-animation","onScroll"])])),_:1},512),a(_,{class:"z-tabs-right"},{default:o((()=>[n(t.$slots,"right",{},void 0,!0)])),_:3})])),_:3},8,["style"])}],["__scopeId","data-v-3329b92d"]]);export{C as _};
