var t,s;import{e,o as i,c as o,w as a,C as n,a as r,b as l,t as h,B as c,l as u,L as m,p,i as d,an as f,m as y,v as g,k,_ as w,a9 as b,r as C,f as x,F as v,j as S,n as T}from"./index-380bf995.js";import{_ as $}from"./uv-navbar.70629f1d.js";import{_,r as A}from"./uni-app.es.f537841c.js";import{_ as j,a as P}from"./uni-list.95b4c353.js";import{m as z,a as B,_ as D}from"./uv-icon.c47c027b.js";import{_ as I}from"./uni-icons.2fc06e0a.js";import{_ as N}from"./uv-button.6b7f39b9.js";import{h as Y}from"./baseApi.cc61b1a7.js";import{_ as E,o as M}from"./lodash.97bfd29b.js";import{d as X}from"./dayjs.min.36575ed0.js";import{b as H}from"./index.2e0bd585.js";import{a as O}from"./info.86943fcb.js";const L=_({name:"uv-empty",mixins:[z,B,{props:{icon:{type:String,default:""},text:{type:String,default:""},textColor:{type:String,default:"#c0c4cc"},textSize:{type:[String,Number],default:14},iconColor:{type:String,default:"#c0c4cc"},iconSize:{type:[String,Number],default:90},mode:{type:String,default:"data"},width:{type:[String,Number],default:160},height:{type:[String,Number],default:160},show:{type:Boolean,default:!0},marginTop:{type:[String,Number],default:0},...null==(s=null==(t=uni.$uv)?void 0:t.props)?void 0:s.empty}}],data:()=>({icons:{car:"购物车为空",page:"页面不存在",search:"没有搜索结果",address:"没有收货地址",wifi:"没有WiFi",order:"订单为空",coupon:"没有优惠券",favor:"暂无收藏",permission:"无权限",history:"无历史记录",news:"无新闻列表",message:"消息列表为空",list:"列表为空",data:"数据为空",comment:"暂无评论"}}),computed:{emptyStyle(){const t={};return t.marginTop=this.$uv.addUnit(this.marginTop),this.$uv.deepMerge(this.$uv.addStyle(this.customStyle),t)},textStyle(){const t={};return t.color=this.textColor,t.fontSize=this.$uv.addUnit(this.textSize),t},isSrc(){return this.icon.indexOf("/")>=0}}},[["render",function(t,s,f,y,g,k){const w=A(e("uv-icon"),D),b=m,C=p,x=d;return t.show?(i(),o(x,{key:0,class:"uv-empty",style:n([k.emptyStyle])},{default:a((()=>[k.isSrc?(i(),o(b,{key:1,style:n({width:t.$uv.addUnit(t.width),height:t.$uv.addUnit(t.height)}),src:t.icon,mode:"widthFix"},null,8,["style","src"])):(i(),o(w,{key:0,name:"message"===t.mode?"chat":`empty-${t.mode}`,size:t.iconSize,color:t.iconColor,"margin-top":"14"},null,8,["name","size","color"])),r(C,{class:"uv-empty__text",style:n([k.textStyle])},{default:a((()=>[l(h(t.text?t.text:g.icons[t.mode]),1)])),_:1},8,["style"]),t.$slots.default||t.$slots.$default?(i(),o(x,{key:2,class:"uv-empty__wrap"},{default:a((()=>[c(t.$slots,"default",{},void 0,!0)])),_:3})):u("",!0)])),_:3},8,["style"])):u("",!0)}],["__scopeId","data-v-8b3e0293"]]);class U{constructor(t,s){this.options=t,this.animation=f({...t}),this.currentStepAnimates={},this.next=0,this.$=s}_nvuePushAnimates(t,s){let e=this.currentStepAnimates[this.next],i={};if(i=e||{styles:{},config:{}},R.includes(t)){i.styles.transform||(i.styles.transform="");let e="";"rotate"===t&&(e="deg"),i.styles.transform+=`${t}(${s+e}) `}else i.styles[t]=`${s}`;this.currentStepAnimates[this.next]=i}_animateRun(t={},s={}){let e=this.$.$refs.ani.ref;if(e)return new Promise(((i,o)=>{nvueAnimation.transition(e,{styles:t,...s},(t=>{i()}))}))}_nvueNextAnimate(t,s=0,e){let i=t[s];if(i){let{styles:o,config:a}=i;this._animateRun(o,a).then((()=>{s+=1,this._nvueNextAnimate(t,s,e)}))}else this.currentStepAnimates={},"function"==typeof e&&e(),this.isEnd=!0}step(t={}){return this.animation.step(t),this}run(t){this.$.animationData=this.animation.export(),this.$.timer=setTimeout((()=>{"function"==typeof t&&t()}),this.$.durationTime)}}const R=["matrix","matrix3d","rotate","rotate3d","rotateX","rotateY","rotateZ","scale","scale3d","scaleX","scaleY","scaleZ","skew","skewX","skewY","translate","translate3d","translateX","translateY","translateZ"];function W(t,s){if(s)return clearTimeout(s.timer),new U(t,s)}R.concat(["opacity","backgroundColor"],["width","height","left","right","top","bottom"]).forEach((t=>{U.prototype[t]=function(...s){return this.animation[t](...s),this}}));const F=_({name:"uniTransition",emits:["click","change"],props:{show:{type:Boolean,default:!1},modeClass:{type:[Array,String],default:()=>"fade"},duration:{type:Number,default:300},styles:{type:Object,default:()=>({})},customClass:{type:String,default:""},onceRender:{type:Boolean,default:!1}},data:()=>({isShow:!1,transform:"",opacity:1,animationData:{},durationTime:300,config:{}}),watch:{show:{handler(t){t?this.open():this.isShow&&this.close()},immediate:!0}},computed:{stylesObject(){let t={...this.styles,"transition-duration":this.duration/1e3+"s"},s="";for(let e in t){s+=this.toLine(e)+":"+t[e]+";"}return s},transformStyles(){return"transform:"+this.transform+";opacity:"+this.opacity+";"+this.stylesObject}},created(){this.config={duration:this.duration,timingFunction:"ease",transformOrigin:"50% 50%",delay:0},this.durationTime=this.duration},methods:{init(t={}){t.duration&&(this.durationTime=t.duration),this.animation=W(Object.assign(this.config,t),this)},onClick(){this.$emit("click",{detail:this.isShow})},step(t,s={}){if(this.animation){for(let s in t)try{"object"==typeof t[s]?this.animation[s](...t[s]):this.animation[s](t[s])}catch(e){console.error(`方法 ${s} 不存在`)}return this.animation.step(s),this}},run(t){this.animation&&this.animation.run(t)},open(){clearTimeout(this.timer),this.transform="",this.isShow=!0;let{opacity:t,transform:s}=this.styleInit(!1);void 0!==t&&(this.opacity=t),this.transform=s,this.$nextTick((()=>{this.timer=setTimeout((()=>{this.animation=W(this.config,this),this.tranfromInit(!1).step(),this.animation.run(),this.$emit("change",{detail:this.isShow})}),20)}))},close(t){this.animation&&this.tranfromInit(!0).step().run((()=>{this.isShow=!1,this.animationData=null,this.animation=null;let{opacity:t,transform:s}=this.styleInit(!1);this.opacity=t||1,this.transform=s,this.$emit("change",{detail:this.isShow})}))},styleInit(t){let s={transform:""},e=(t,e)=>{"fade"===e?s.opacity=this.animationType(t)[e]:s.transform+=this.animationType(t)[e]+" "};return"string"==typeof this.modeClass?e(t,this.modeClass):this.modeClass.forEach((s=>{e(t,s)})),s},tranfromInit(t){let s=(t,s)=>{let e=null;"fade"===s?e=t?0:1:(e=t?"-100%":"0","zoom-in"===s&&(e=t?.8:1),"zoom-out"===s&&(e=t?1.2:1),"slide-right"===s&&(e=t?"100%":"0"),"slide-bottom"===s&&(e=t?"100%":"0")),this.animation[this.animationMode()[s]](e)};return"string"==typeof this.modeClass?s(t,this.modeClass):this.modeClass.forEach((e=>{s(t,e)})),this.animation},animationType:t=>({fade:t?1:0,"slide-top":`translateY(${t?"0":"-100%"})`,"slide-right":`translateX(${t?"0":"100%"})`,"slide-bottom":`translateY(${t?"0":"100%"})`,"slide-left":`translateX(${t?"0":"-100%"})`,"zoom-in":`scaleX(${t?1:.8}) scaleY(${t?1:.8})`,"zoom-out":`scaleX(${t?1:1.2}) scaleY(${t?1:1.2})`}),animationMode:()=>({fade:"opacity","slide-top":"translateY","slide-right":"translateX","slide-bottom":"translateY","slide-left":"translateX","zoom-in":"scale","zoom-out":"scale"}),toLine:t=>t.replace(/([A-Z])/g,"-$1").toLowerCase()}},[["render",function(t,s,e,r,l,h){const u=d;return y((i(),o(u,{ref:"ani",animation:l.animationData,class:k(e.customClass),style:n(h.transformStyles),onClick:h.onClick},{default:a((()=>[c(t.$slots,"default")])),_:3},8,["animation","class","style","onClick"])),[[g,l.isShow]])}]]);const Z=_({name:"uniPopup",components:{keypress:{name:"Keypress",props:{disable:{type:Boolean,default:!1}},mounted(){const t={esc:["Esc","Escape"],tab:"Tab",enter:"Enter",space:[" ","Spacebar"],up:["Up","ArrowUp"],left:["Left","ArrowLeft"],right:["Right","ArrowRight"],down:["Down","ArrowDown"],delete:["Backspace","Delete","Del"]};document.addEventListener("keyup",(s=>{if(this.disable)return;const e=Object.keys(t).find((e=>{const i=s.key,o=t[e];return o===i||Array.isArray(o)&&o.includes(i)}));e&&setTimeout((()=>{this.$emit(e,{})}),0)}))},render:()=>{}}},emits:["change","maskClick"],props:{animation:{type:Boolean,default:!0},type:{type:String,default:"center"},isMaskClick:{type:Boolean,default:null},maskClick:{type:Boolean,default:null},backgroundColor:{type:String,default:"none"},safeArea:{type:Boolean,default:!0},maskBackgroundColor:{type:String,default:"rgba(0, 0, 0, 0.4)"}},watch:{type:{handler:function(t){this.config[t]&&this[this.config[t]](!0)},immediate:!0},isDesktop:{handler:function(t){this.config[t]&&this[this.config[this.type]](!0)},immediate:!0},maskClick:{handler:function(t){this.mkclick=t},immediate:!0},isMaskClick:{handler:function(t){this.mkclick=t},immediate:!0},showPopup(t){document.getElementsByTagName("body")[0].style.overflow=t?"hidden":"visible"}},data(){return{duration:300,ani:[],showPopup:!1,showTrans:!1,popupWidth:0,popupHeight:0,config:{top:"top",bottom:"bottom",center:"center",left:"left",right:"right",message:"top",dialog:"center",share:"bottom"},maskClass:{position:"fixed",bottom:0,top:0,left:0,right:0,backgroundColor:"rgba(0, 0, 0, 0.4)"},transClass:{position:"fixed",left:0,right:0},maskShow:!0,mkclick:!0,popupstyle:this.isDesktop?"fixforpc-top":"top"}},computed:{isDesktop(){return this.popupWidth>=500&&this.popupHeight>=500},bg(){return""===this.backgroundColor||"none"===this.backgroundColor?"transparent":this.backgroundColor}},mounted(){(()=>{const{windowWidth:t,windowHeight:s,windowTop:e,safeArea:i,screenHeight:o,safeAreaInsets:a}=b();this.popupWidth=t,this.popupHeight=s+(e||0),i&&this.safeArea?this.safeAreaInsets=a.bottom:this.safeAreaInsets=0})()},unmounted(){this.setH5Visible()},created(){null===this.isMaskClick&&null===this.maskClick?this.mkclick=!0:this.mkclick=null!==this.isMaskClick?this.isMaskClick:this.maskClick,this.animation?this.duration=300:this.duration=0,this.messageChild=null,this.clearPropagation=!1,this.maskClass.backgroundColor=this.maskBackgroundColor},methods:{setH5Visible(){document.getElementsByTagName("body")[0].style.overflow="visible"},closeMask(){this.maskShow=!1},disableMask(){this.mkclick=!1},clear(t){t.stopPropagation(),this.clearPropagation=!0},open(t){if(this.showPopup)return;t&&-1!==["top","center","bottom","left","right","message","dialog","share"].indexOf(t)||(t=this.type),this.config[t]?(this[this.config[t]](),this.$emit("change",{show:!0,type:t})):console.error("缺少类型：",t)},close(t){this.showTrans=!1,this.$emit("change",{show:!1,type:this.type}),clearTimeout(this.timer),this.timer=setTimeout((()=>{this.showPopup=!1}),300)},touchstart(){this.clearPropagation=!1},onTap(){this.clearPropagation?this.clearPropagation=!1:(this.$emit("maskClick"),this.mkclick&&this.close())},top(t){this.popupstyle=this.isDesktop?"fixforpc-top":"top",this.ani=["slide-top"],this.transClass={position:"fixed",left:0,right:0,backgroundColor:this.bg},t||(this.showPopup=!0,this.showTrans=!0,this.$nextTick((()=>{this.messageChild&&"message"===this.type&&this.messageChild.timerClose()})))},bottom(t){this.popupstyle="bottom",this.ani=["slide-bottom"],this.transClass={position:"fixed",left:0,right:0,bottom:0,paddingBottom:this.safeAreaInsets+"px",backgroundColor:this.bg},t||(this.showPopup=!0,this.showTrans=!0)},center(t){this.popupstyle="center",this.ani=["zoom-out","fade"],this.transClass={position:"fixed",display:"flex",flexDirection:"column",bottom:0,left:0,right:0,top:0,justifyContent:"center",alignItems:"center"},t||(this.showPopup=!0,this.showTrans=!0)},left(t){this.popupstyle="left",this.ani=["slide-left"],this.transClass={position:"fixed",left:0,bottom:0,top:0,backgroundColor:this.bg,display:"flex",flexDirection:"column"},t||(this.showPopup=!0,this.showTrans=!0)},right(t){this.popupstyle="right",this.ani=["slide-right"],this.transClass={position:"fixed",bottom:0,right:0,top:0,backgroundColor:this.bg,display:"flex",flexDirection:"column"},t||(this.showPopup=!0,this.showTrans=!0)}}},[["render",function(t,s,l,h,m,p){const f=A(e("uni-transition"),F),y=d,g=w("keypress");return m.showPopup?(i(),o(y,{key:0,class:k(["uni-popup",[m.popupstyle,p.isDesktop?"fixforpc-z-index":""]])},{default:a((()=>[r(y,{onTouchstart:p.touchstart},{default:a((()=>[m.maskShow?(i(),o(f,{key:"1",name:"mask","mode-class":"fade",styles:m.maskClass,duration:m.duration,show:m.showTrans,onClick:p.onTap},null,8,["styles","duration","show","onClick"])):u("",!0),r(f,{key:"2","mode-class":m.ani,name:"content",styles:m.transClass,duration:m.duration,show:m.showTrans,onClick:p.onTap},{default:a((()=>[r(y,{class:k(["uni-popup__wrapper",[m.popupstyle]]),style:n({backgroundColor:p.bg}),onClick:p.clear},{default:a((()=>[c(t.$slots,"default",{},void 0,!0)])),_:3},8,["style","class","onClick"])])),_:3},8,["mode-class","styles","duration","show","onClick"])])),_:3},8,["onTouchstart"]),m.maskShow?(i(),o(g,{key:0,onEsc:p.onTap},null,8,["onEsc"])):u("",!0)])),_:3},8,["class"])):u("",!0)}],["__scopeId","data-v-a1518068"]]),q=_({__name:"list",setup(t){let s={};const n=C(null),h=C([]);(async()=>{let t=(await Y(H())).data;t=E.filter(t,(t=>t.state!=O[0].value)),t=E.uniqBy(t,"courtName"),t=E.orderBy(t,["dateTime"],["desc"]),h.value=t.map((t=>({...t,dateTime:X(t.dateTime).format("YYYY-MM-DD HH:mm:ss")})))})();const c={"font-size":"48rpx"},u=()=>{n.value.close()},m=()=>{y("/pages/build/index")},f=()=>{y("/pages/build/question")},y=t=>{u();const e={communityId:s.communityId,courtName:s.courtName};T({url:t+"?"+M(e)})};return(t,y)=>{const g=A(e("uv-navbar"),$),k=A(e("uni-list-item"),j),w=A(e("uni-list"),P),b=A(e("uv-empty"),L),C=p,T=A(e("uni-icons"),I),_=d,z=A(e("uv-button"),N),B=A(e("uni-popup"),Z);return i(),x(v,null,[r(g,{title:"小区列表",border:"",leftIconSize:"50rpx",placeholder:"",autoBack:""}),h.value.length?(i(),o(w,{key:0,"border-full":"",class:"list-box"},{default:a((()=>[(i(!0),x(v,null,S(h.value,(t=>(i(),o(k,{clickable:"",onClick:e=>(s=t,void n.value.open()),rightText:t.dateTime,key:t.courtName,title:t.courtName,showArrow:""},null,8,["onClick","rightText","title"])))),128))])),_:1})):(i(),o(b,{key:1,text:"暂无小区列",mode:"data",icon:"https://cdn.uviewui.com/uview/empty/data.png"})),r(B,{ref_key:"popup",ref:n,type:"center","is-mask-click":!1},{default:a((()=>[r(_,{class:"select"},{default:a((()=>[r(_,{class:"header"},{default:a((()=>[r(C,null,{default:a((()=>[l("选择小区楼栋功能")])),_:1}),r(T,{type:"closeempty",size:"20",class:"close",onClick:u})])),_:1}),r(z,{customStyle:c,onClickPassive:m,type:"primary",text:"楼栋台账填报"}),r(z,{customStyle:c,onClick:f,type:"primary",text:"楼栋问题查看"})])),_:1})])),_:1},512)],64)}}},[["__scopeId","data-v-f611e4ae"]]);export{q as default};
