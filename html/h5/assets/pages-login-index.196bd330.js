import{r as a,o as e,c as t,w as s,i as l,a as o,b as u,s as n,d as i,e as m}from"./index-7772774a.js";import{_ as d}from"./uni-data-picker.1629c55c.js";import{_ as r,r as c}from"./uni-app.es.46eca8e8.js";import{_ as p,a as f,b as v}from"./uni-forms.f20d73c4.js";import{_ as y}from"./uni-card.f893e531.js";import{_}from"./uv-button.290da5c9.js";import{c as b,l as x}from"./baseApi.6d460e5e.js";import{t as j}from"./toast.0aad277c.js";import{g as w}from"./lodash.dd7c9b8c.js";import"./uni-icons.403c191f.js";import"./uv-icon.748af6f6.js";const V=r({__name:"index",setup(r){let V=!1;const g=a([]),h=a({userName:"",password:"",province:"",city:"",street:"",county:"",communityId:"",communityName:""}),I=a=>{if(V)return V=!1;V=!0,N()};(async()=>{const a=await b();g.value=w(a.data)})();const N=async()=>{const a={...h.value};return a.communityId?a.userName?a.password?(await x(a),j("登录成功"),delete a.password,n("userInfo",a),void i({url:"/pages/home/index"})):j("请输入密码"):j("请输入账号"):j("请选择省市区街道社区")},k=a=>{const e=a.detail.value,t=e[4].value.split(";");h.value=Object.assign(h.value,{province:e[0].text,city:e[1].text,street:e[3].text,county:e[2].text,communityId:t[0],communityName:e[4].text,latitude:t[1],longitude:t[2]})};return(a,n)=>{const i=l,r=c(m("uni-data-picker"),d),b=c(m("uni-forms-item"),p),x=c(m("uni-easyinput"),f),j=c(m("uni-forms"),v),w=c(m("uni-card"),y),V=c(m("uv-button"),_);return e(),t(i,{class:"box"},{default:s((()=>[o(i,{class:"body"},{default:s((()=>[o(i,{class:"titlebox"},{default:s((()=>[o(i,{class:"tit",style:{"text-align":"center",width:"100%"}},{default:s((()=>[u("请登录")])),_:1})])),_:1}),o(w,{isFull:!0,style:{"margin-top":"32rpx"}},{default:s((()=>[o(j,{modelValue:h.value,"label-position":"top","label-width":"fit-content"},{default:s((()=>[o(b,{label:"省市区街道社区",name:"communityId"},{default:s((()=>[o(r,{localdata:g.value,modelValue:h.value.communityId,"onUpdate:modelValue":n[0]||(n[0]=a=>h.value.communityId=a),"popup-title":"请选择地区",onChange:k},null,8,["localdata","modelValue"])])),_:1}),o(b,{name:"username",label:"账户"},{default:s((()=>[o(x,{modelValue:h.value.userName,"onUpdate:modelValue":n[1]||(n[1]=a=>h.value.userName=a),placeholder:"请输入账号"},null,8,["modelValue"])])),_:1}),o(b,{name:"password",label:"密码"},{default:s((()=>[o(x,{type:"password",modelValue:h.value.password,"onUpdate:modelValue":n[2]||(n[2]=a=>h.value.password=a),placeholder:"请输入密码"},null,8,["modelValue"])])),_:1})])),_:1},8,["modelValue"])])),_:1}),o(i,{class:"btns"},{default:s((()=>[o(V,{type:"primary",text:"登录",onClick:I})])),_:1})])),_:1})])),_:1})}}},[["__scopeId","data-v-f80fbcd7"]]);export{V as default};