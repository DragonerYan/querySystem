var t,e;import{o as a,c as l,w as s,D as o,G as r,i as n,z as i,e as u,p as d,a as c,q as f,b as v,B as h,k as _}from"./index-93422e90.js";import{m as g,a as p,_ as y}from"./uv-icon.4fb46f40.js";import{_ as b,r as m}from"./uni-app.es.1373d43e.js";const k=b({name:"uv-status-bar",mixins:[g,p,{props:{bgColor:{type:String,default:"transparent"}}}],data:()=>({}),computed:{style(){const t={};return t.height=this.$uv.addUnit(this.$uv.sys().statusBarHeight,"px"),t.backgroundColor=this.bgColor,this.$uv.deepMerge(t,this.$uv.addStyle(this.customStyle))}}},[["render",function(t,e,i,u,d,c){const f=n;return a(),l(f,{style:r([c.style]),class:"uv-status-bar"},{default:s((()=>[o(t.$slots,"default",{},void 0,!0)])),_:3},8,["style"])}],["__scopeId","data-v-4bd641f5"]]);const x=b({name:"uv-navbar",mixins:[g,p,{props:{safeAreaInsetTop:{type:Boolean,default:!0},placeholder:{type:Boolean,default:!1},fixed:{type:Boolean,default:!0},border:{type:Boolean,default:!1},leftIcon:{type:String,default:"arrow-left"},leftText:{type:String,default:""},rightText:{type:String,default:""},rightIcon:{type:String,default:""},title:{type:[String,Number],default:""},bgColor:{type:String,default:"#ffffff"},titleWidth:{type:[String,Number],default:"400rpx"},height:{type:[String,Number],default:"44px"},leftIconSize:{type:[String,Number],default:20},leftIconColor:{type:String,default:"#303133"},autoBack:{type:Boolean,default:!1},titleStyle:{type:[String,Object],default:""},...null==(e=null==(t=uni.$uv)?void 0:t.props)?void 0:e.navbar}}],data:()=>({}),methods:{leftClick(){this.$emit("leftClick"),this.autoBack&&i()},rightClick(){this.$emit("rightClick")}}},[["render",function(t,e,i,g,p,b){const x=n,C=m(u("uv-status-bar"),k),S=m(u("uv-icon"),y),$=_;return a(),l(x,{class:"uv-navbar"},{default:s((()=>[t.fixed&&t.placeholder?(a(),l(x,{key:0,class:"uv-navbar__placeholder",style:r({height:t.$uv.addUnit(t.$uv.getPx(t.height)+t.$uv.sys().statusBarHeight,"px")})},null,8,["style"])):d("",!0),c(x,{class:f([t.fixed&&"uv-navbar--fixed"])},{default:s((()=>[t.safeAreaInsetTop?(a(),l(C,{key:0,bgColor:t.bgColor},null,8,["bgColor"])):d("",!0),c(x,{class:f(["uv-navbar__content",[t.border&&"uv-border-bottom"]]),style:r({height:t.$uv.addUnit(t.height),backgroundColor:t.bgColor})},{default:s((()=>[c(x,{class:"uv-navbar__content__left","hover-class":"uv-navbar__content__left--hover","hover-start-time":"150",onClick:b.leftClick},{default:s((()=>[o(t.$slots,"left",{},(()=>[t.leftIcon?(a(),l(S,{key:0,name:t.leftIcon,size:t.leftIconSize,color:t.leftIconColor},null,8,["name","size","color"])):d("",!0),t.leftText?(a(),l($,{key:1,style:r({color:t.leftIconColor}),class:"uv-navbar__content__left__text"},{default:s((()=>[v(h(t.leftText),1)])),_:1},8,["style"])):d("",!0)]),!0)])),_:3},8,["onClick"]),o(t.$slots,"center",{},(()=>[c($,{class:"uv-line-1 uv-navbar__content__title",style:r([{width:t.$uv.addUnit(t.titleWidth)},t.$uv.addStyle(t.titleStyle)])},{default:s((()=>[v(h(t.title),1)])),_:1},8,["style"])]),!0),t.$slots.right||t.rightIcon||t.rightText?(a(),l(x,{key:0,class:"uv-navbar__content__right",onClick:b.rightClick},{default:s((()=>[o(t.$slots,"right",{},(()=>[t.rightIcon?(a(),l(S,{key:0,name:t.rightIcon,size:"20"},null,8,["name"])):d("",!0),t.rightText?(a(),l($,{key:1,class:"uv-navbar__content__right__text"},{default:s((()=>[v(h(t.rightText),1)])),_:1})):d("",!0)]),!0)])),_:3},8,["onClick"])):d("",!0)])),_:3},8,["class","style"])])),_:3},8,["class"])])),_:3})}],["__scopeId","data-v-76e059aa"]]);export{x as _};