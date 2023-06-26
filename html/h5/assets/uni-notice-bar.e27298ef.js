import{J as e,e as t,o,c as i,w as n,l as a,a as l,k as s,C as r,b as c,t as u,p as h,i as d}from"./index-7f6000b5.js";import{_ as m}from"./uni-icons.1b6d5021.js";import{_ as p,r as b}from"./uni-app.es.5253cda1.js";const y=p({name:"UniNoticeBar",emits:["click","getmore","close"],props:{text:{type:String,default:""},moreText:{type:String,default:""},backgroundColor:{type:String,default:"#FFF9EA"},speed:{type:Number,default:100},color:{type:String,default:"#FF9A43"},fontSize:{type:Number,default:14},moreColor:{type:String,default:"#FF9A43"},single:{type:[Boolean,String],default:!1},scrollable:{type:[Boolean,String],default:!1},showIcon:{type:[Boolean,String],default:!1},showGetMore:{type:[Boolean,String],default:!1},showClose:{type:[Boolean,String],default:!1}},data:()=>({textWidth:0,boxWidth:0,wrapWidth:"",webviewHide:!1,elId:`Uni_${Math.ceil(1e6*Math.random()).toString(36)}`,elIdBox:`Uni_${Math.ceil(1e6*Math.random()).toString(36)}`,show:!0,animationDuration:"none",animationPlayState:"paused",animationDelay:"0s"}),computed:{isShowGetMore(){return!0===this.showGetMore||"true"===this.showGetMore},isShowClose(){return!(!0!==this.showClose&&"true"!==this.showClose||!1!==this.showGetMore&&"false"!==this.showGetMore)}},mounted(){this.$nextTick((()=>{this.initSize()}))},methods:{initSize(){if(this.scrollable){let t=[],o=new Promise(((t,o)=>{e().in(this).select(`#${this.elId}`).boundingClientRect().exec((e=>{this.textWidth=e[0].width,t()}))})),i=new Promise(((t,o)=>{e().in(this).select(`#${this.elIdBox}`).boundingClientRect().exec((e=>{this.boxWidth=e[0].width,t()}))}));t.push(o),t.push(i),Promise.all(t).then((()=>{this.animationDuration=this.textWidth/this.speed+"s",this.animationDelay=`-${this.boxWidth/this.speed}s`,setTimeout((()=>{this.animationPlayState="running"}),1e3)}))}},loopAnimation(){},clickMore(){this.$emit("getmore")},close(){this.show=!1,this.$emit("close")},onClick(){this.$emit("click")}}},[["render",function(e,p,y,w,f,S){const _=b(t("uni-icons"),m),g=h,x=d;return f.show?(o(),i(x,{key:0,class:"uni-noticebar",style:r({backgroundColor:y.backgroundColor}),onClick:S.onClick},{default:n((()=>[!0===y.showIcon||"true"===y.showIcon?(o(),i(_,{key:0,class:"uni-noticebar-icon",type:"sound",color:y.color,size:1.5*y.fontSize},null,8,["color","size"])):a("",!0),l(x,{ref:"textBox",class:s(["uni-noticebar__content-wrapper",{"uni-noticebar__content-wrapper--scrollable":y.scrollable,"uni-noticebar__content-wrapper--single":!y.scrollable&&(y.single||y.moreText)}]),style:r({height:y.scrollable?1.5*y.fontSize+"px":"auto"})},{default:n((()=>[l(x,{id:f.elIdBox,class:s(["uni-noticebar__content",{"uni-noticebar__content--scrollable":y.scrollable,"uni-noticebar__content--single":!y.scrollable&&(y.single||y.moreText)}])},{default:n((()=>[l(g,{id:f.elId,ref:"animationEle",class:s(["uni-noticebar__content-text",{"uni-noticebar__content-text--scrollable":y.scrollable,"uni-noticebar__content-text--single":!y.scrollable&&(y.single||y.showGetMore)}]),style:r({color:y.color,fontSize:y.fontSize+"px",lineHeight:1.5*y.fontSize+"px",width:f.wrapWidth+"px",animationDuration:f.animationDuration,"-webkit-animationDuration":f.animationDuration,animationPlayState:f.webviewHide?"paused":f.animationPlayState,"-webkit-animationPlayState":f.webviewHide?"paused":f.animationPlayState,animationDelay:f.animationDelay,"-webkit-animationDelay":f.animationDelay})},{default:n((()=>[c(u(y.text),1)])),_:1},8,["id","class","style"])])),_:1},8,["id","class"])])),_:1},8,["class","style"]),S.isShowGetMore?(o(),i(x,{key:1,class:"uni-noticebar__more uni-cursor-point",onClick:S.clickMore},{default:n((()=>[y.moreText.length>0?(o(),i(g,{key:0,style:r({color:y.moreColor,fontSize:y.fontSize+"px"})},{default:n((()=>[c(u(y.moreText),1)])),_:1},8,["style"])):(o(),i(_,{key:1,type:"right",color:y.moreColor,size:1.1*y.fontSize},null,8,["color","size"]))])),_:1},8,["onClick"])):a("",!0),S.isShowClose?(o(),i(x,{key:2,class:"uni-noticebar-close uni-cursor-point"},{default:n((()=>[l(_,{type:"closeempty",color:y.color,size:1.1*y.fontSize,onClick:S.close},null,8,["color","size","onClick"])])),_:1})):a("",!0)])),_:1},8,["style","onClick"])):a("",!0)}],["__scopeId","data-v-69ae3424"]]);export{y as _};
