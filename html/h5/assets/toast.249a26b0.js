var e,t,o,i;import{X as n,o as r,c as a,w as s,q as l,E as d,f as u,F as p,z as c,p as g,b as h,A as f,i as m,k as y,e as b,a as v,C as S,ag as C,y as x}from"./index-3120331b.js";import{m as $,a as z,_}from"./uv-icon.e9900608.js";import{_ as w,r as T}from"./uni-app.es.25f5d80b.js";function B(e,t=!0){if((e=String(e).toLowerCase())&&/^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/.test(e)){if(4===e.length){let t="#";for(let o=1;o<4;o+=1)t+=e.slice(o,o+1).concat(e.slice(o,o+1));e=t}const o=[];for(let t=1;t<7;t+=2)o.push(parseInt(`0x${e.slice(t,t+2)}`));return t?`rgb(${o[0]},${o[1]},${o[2]})`:o}if(/^(rgb|RGB)/.test(e)){return e.replace(/(?:\(|\)|rgb|RGB)*/g,"").split(",").map((e=>Number(e)))}return e}function k(e){const t=e;if(/^(rgb|RGB)/.test(t)){const e=t.replace(/(?:\(|\)|rgb|RGB)*/g,"").split(",");let o="#";for(let t=0;t<e.length;t++){let i=Number(e[t]).toString(16);i=1==String(i).length?`0${i}`:i,"0"===i&&(i+=i),o+=i}return 7!==o.length&&(o=t),o}if(!/^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/.test(t))return t;{const e=t.replace(/#/,"").split("");if(6===e.length)return t;if(3===e.length){let t="#";for(let o=0;o<e.length;o+=1)t+=e[o]+e[o];return t}}}const N=w({name:"uv-loading-icon",mixins:[$,z,{props:{show:{type:Boolean,default:!0},color:{type:String,default:"#909193"},textColor:{type:String,default:"#909193"},vertical:{type:Boolean,default:!1},mode:{type:String,default:"spinner"},size:{type:[String,Number],default:24},textSize:{type:[String,Number],default:15},text:{type:[String,Number],default:""},timingFunction:{type:String,default:"linear"},duration:{type:[String,Number],default:1200},inactiveColor:{type:String,default:""},...null==(t=null==(e=uni.$uv)?void 0:e.props)?void 0:t.loadingIcon}}],data:()=>({array12:Array.from({length:12}),aniAngel:360,webviewHide:!1,loading:!1}),computed:{otherBorderColor(){const e=function(e="rgb(0, 0, 0)",t="rgb(255, 255, 255)",o=10){const i=B(e,!1),n=i[0],r=i[1],a=i[2],s=B(t,!1),l=(s[0]-n)/o,d=(s[1]-r)/o,u=(s[2]-a)/o,p=[];for(let c=0;c<o;c++){let i=k(`rgb(${Math.round(l*c+n)},${Math.round(d*c+r)},${Math.round(u*c+a)})`);0===c&&(i=k(e)),c===o-1&&(i=k(t)),p.push(i)}return p}(this.color,"#ffffff",100)[80];return"circle"===this.mode?this.inactiveColor?this.inactiveColor:e:"transparent"}},watch:{show(e){}},mounted(){this.init()},methods:{init(){setTimeout((()=>{}),20)},addEventListenerToWebview(){const e=n(),t=e[e.length-1].$getAppWebview();t.addEventListener("hide",(()=>{this.webviewHide=!0})),t.addEventListener("show",(()=>{this.webviewHide=!1}))}}},[["render",function(e,t,o,i,n,b){const v=m,S=y;return e.show?(r(),a(v,{key:0,class:l(["uv-loading-icon",[e.vertical&&"uv-loading-icon--vertical"]]),style:d([e.$uv.addStyle(e.customStyle)])},{default:s((()=>[n.webviewHide?g("",!0):(r(),a(v,{key:0,class:l(["uv-loading-icon__spinner",[`uv-loading-icon__spinner--${e.mode}`]]),ref:"ani",style:d({color:e.color,width:e.$uv.addUnit(e.size),height:e.$uv.addUnit(e.size),borderTopColor:e.color,borderBottomColor:b.otherBorderColor,borderLeftColor:b.otherBorderColor,borderRightColor:b.otherBorderColor,"animation-duration":`${e.duration}ms`,"animation-timing-function":"semicircle"===e.mode||"circle"===e.mode?e.timingFunction:""})},{default:s((()=>["spinner"===e.mode?(r(!0),u(p,{key:0},c(n.array12,((e,t)=>(r(),a(v,{key:t,class:"uv-loading-icon__dot"})))),128)):g("",!0)])),_:1},8,["class","style"])),e.text?(r(),a(S,{key:1,class:"uv-loading-icon__text",style:d({fontSize:e.$uv.addUnit(e.textSize),color:e.textColor})},{default:s((()=>[h(f(e.text),1)])),_:1},8,["style"])):g("",!0)])),_:1},8,["style","class"])):g("",!0)}],["__scopeId","data-v-e266bb89"]]);let M;const A=w({name:"uv-button",mixins:[$,z,{props:{hairline:{type:Boolean,default:!0},type:{type:String,default:"info"},size:{type:String,default:"normal"},shape:{type:String,default:"square"},plain:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},loadingText:{type:[String,Number],default:""},loadingMode:{type:String,default:"spinner"},loadingSize:{type:[String,Number],default:14},openType:{type:String,default:""},formType:{type:String,default:""},appParameter:{type:String,default:""},hoverStopPropagation:{type:Boolean,default:!0},lang:{type:String,default:"en"},sessionFrom:{type:String,default:""},sendMessageTitle:{type:String,default:""},sendMessagePath:{type:String,default:""},sendMessageImg:{type:String,default:""},showMessageCard:{type:Boolean,default:!0},dataName:{type:String,default:""},throttleTime:{type:[String,Number],default:0},hoverStartTime:{type:[String,Number],default:0},hoverStayTime:{type:[String,Number],default:200},text:{type:[String,Number],default:""},icon:{type:String,default:""},iconColor:{type:String,default:"#000000"},color:{type:String,default:""},...null==(i=null==(o=uni.$uv)?void 0:o.props)?void 0:i.button}}],data:()=>({}),computed:{bemClass(){return this.color?this.bem("button",["shape","size"],["disabled","plain","hairline"]):this.bem("button",["type","shape","size"],["disabled","plain","hairline"])},loadingColor(){return this.plain?this.color?this.color:"#3c9cff":"info"===this.type?"#c9c9c9":"rgb(200, 200, 200)"},iconColorCom(){return this.iconColor?this.iconColor:this.plain?this.color?this.color:this.type:"info"===this.type?"#000000":"#ffffff"},baseColor(){let e={};return this.color&&(e.color=this.plain?this.color:"white",this.plain||(e["background-color"]=this.color),-1!==this.color.indexOf("gradient")?(e.borderTopWidth=0,e.borderRightWidth=0,e.borderBottomWidth=0,e.borderLeftWidth=0,this.plain||(e.backgroundImage=this.color)):(e.borderColor=this.color,e.borderWidth="1px",e.borderStyle="solid")),e},nvueTextStyle(){let e={};return"info"===this.type&&(e.color="#323233"),this.color&&(e.color=this.plain?this.color:"white"),e.fontSize=this.textSize+"px",e},textSize(){let e=14,{size:t}=this;return"large"===t&&(e=16),"normal"===t&&(e=14),"small"===t&&(e=12),"mini"===t&&(e=10),e}},methods:{clickHandler(){this.disabled||this.loading||function(e,t=500,o=!0){o?M||(M=!0,"function"==typeof e&&e(),setTimeout((()=>{M=!1}),t)):M||(M=!0,setTimeout((()=>{M=!1,"function"==typeof e&&e()}),t))}((()=>{this.$emit("click")}),this.throttleTime)},getphonenumber(e){this.$emit("getphonenumber",e)},getuserinfo(e){this.$emit("getuserinfo",e)},error(e){this.$emit("error",e)},opensetting(e){this.$emit("opensetting",e)},launchapp(e){this.$emit("launchapp",e)}}},[["render",function(e,t,o,i,n,c){const m=T(b("uv-loading-icon"),N),x=y,$=T(b("uv-icon"),_),z=C;return r(),a(z,{"hover-start-time":Number(e.hoverStartTime),"hover-stay-time":Number(e.hoverStayTime),"form-type":e.formType,"open-type":e.openType,"app-parameter":e.appParameter,"hover-stop-propagation":e.hoverStopPropagation,"send-message-title":e.sendMessageTitle,"send-message-path":e.sendMessagePath,lang:e.lang,"data-name":e.dataName,"session-from":e.sessionFrom,"send-message-img":e.sendMessageImg,"show-message-card":e.showMessageCard,onGetphonenumber:c.getphonenumber,onGetuserinfo:c.getuserinfo,onError:c.error,onOpensetting:c.opensetting,onLaunchapp:c.launchapp,"hover-class":e.disabled||e.loading?"":"uv-button--active",class:l(["uv-button uv-reset-button",c.bemClass]),style:d([c.baseColor,e.$uv.addStyle(e.customStyle)]),onClick:c.clickHandler},{default:s((()=>[e.loading?(r(),u(p,{key:0},[v(m,{mode:e.loadingMode,size:1.15*e.loadingSize,color:c.loadingColor},null,8,["mode","size","color"]),v(x,{class:"uv-button__loading-text",style:d([{fontSize:c.textSize+"px"}])},{default:s((()=>[h(f(e.loadingText||e.text),1)])),_:1},8,["style"])],64)):(r(),u(p,{key:1},[e.icon?(r(),a($,{key:0,name:e.icon,color:c.iconColorCom,size:1.35*c.textSize,customStyle:{marginRight:"2px"}},null,8,["name","color","size"])):g("",!0),S(e.$slots,"default",{},(()=>[v(x,{class:"uv-button__text",style:d([{fontSize:c.textSize+"px"}])},{default:s((()=>[h(f(e.text),1)])),_:1},8,["style"])]),!0)],64))])),_:3},8,["hover-start-time","hover-stay-time","form-type","open-type","app-parameter","hover-stop-propagation","send-message-title","send-message-path","lang","data-name","session-from","send-message-img","show-message-card","onGetphonenumber","onGetuserinfo","onError","onOpensetting","onLaunchapp","hover-class","style","onClick","class"])}],["__scopeId","data-v-871d1494"]]),G=e=>{x({title:e,duration:2e3,icon:"none"})};export{A as _,G as t};
