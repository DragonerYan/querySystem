import{r as a,o as e,c as t,w as s,i as l,a as o,b as u,s as i,d as n,e as m}from"./index-7f6000b5.js";import{_ as d}from"./uni-data-picker.abb03220.js";import{_ as r,r as p}from"./uni-app.es.5253cda1.js";import{_ as c,a as f,b as v}from"./uni-forms.8595ea06.js";import{_ as y}from"./uni-card.9ca39937.js";import{_}from"./uv-button.ca9c71be.js";import{c as b,l as j}from"./baseApi.42e51fa1.js";import{t as x}from"./toast.5e6aac36.js";import{g as w}from"./lodash.9f7206f8.js";import"./uni-cloud.es.10eff10f.js";import"./uni-icons.1b6d5021.js";import"./uv-icon.2afe760f.js";const V=r({__name:"index",setup(r){let V=!1;const g=a([]),h=a({userName:"",password:"",province:"",city:"",street:"",county:"",communityId:"",communityName:""}),I=a=>{if(V)return V=!1;V=!0,N()};(async()=>{const a=await b();g.value=w(a.data)})();const N=async()=>{const a={...h.value};return a.communityId?a.userName?a.password?(await j(a),x("登录成功"),delete a.password,i("userInfo",a),void n({url:"/pages/home/index"})):x("请输入密码"):x("请输入账号"):x("请选择省市区街道社区")},k=a=>{const e=a.detail.value,t=e[4].value.split(";");h.value=Object.assign(h.value,{province:e[0].text,city:e[1].text,street:e[3].text,county:e[2].text,communityId:t[0],communityName:e[4].text,latitude:t[1],longitude:t[2]})};return(a,i)=>{const n=l,r=p(m("uni-data-picker"),d),b=p(m("uni-forms-item"),c),j=p(m("uni-easyinput"),f),x=p(m("uni-forms"),v),w=p(m("uni-card"),y),V=p(m("uv-button"),_);return e(),t(n,{class:"box"},{default:s((()=>[o(n,{class:"body"},{default:s((()=>[o(n,{class:"titlebox"},{default:s((()=>[o(n,{class:"tit",style:{"text-align":"center",width:"100%"}},{default:s((()=>[u("请登录")])),_:1})])),_:1}),o(w,{isFull:!0,style:{"margin-top":"32rpx"}},{default:s((()=>[o(x,{modelValue:h.value,"label-position":"top","label-width":"fit-content"},{default:s((()=>[o(b,{label:"省市区街道社区",name:"communityId"},{default:s((()=>[o(r,{localdata:g.value,modelValue:h.value.communityId,"onUpdate:modelValue":i[0]||(i[0]=a=>h.value.communityId=a),"popup-title":"请选择地区",onChange:k},null,8,["localdata","modelValue"])])),_:1}),o(b,{name:"username",label:"账户"},{default:s((()=>[o(j,{modelValue:h.value.userName,"onUpdate:modelValue":i[1]||(i[1]=a=>h.value.userName=a),placeholder:"请输入账号"},null,8,["modelValue"])])),_:1}),o(b,{name:"password",label:"密码"},{default:s((()=>[o(j,{type:"password",modelValue:h.value.password,"onUpdate:modelValue":i[2]||(i[2]=a=>h.value.password=a),placeholder:"请输入密码"},null,8,["modelValue"])])),_:1})])),_:1},8,["modelValue"])])),_:1}),o(n,{class:"btns"},{default:s((()=>[o(V,{type:"primary",text:"登录",onClick:I})])),_:1})])),_:1})])),_:1})}}},[["__scopeId","data-v-bdb2c690"]]);export{V as default};
