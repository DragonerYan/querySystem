import{r as a,o as e,c as t,w as s,i as l,a as o,b as u,s as i,d as n,e as d}from"./index-ea6544a4.js";import{_ as m}from"./uni-data-picker.a61e93ef.js";import{_ as r,r as c}from"./uni-app.es.39bc03e5.js";import{_ as p,a as f,b as y}from"./uni-forms.1536f03d.js";import{_ as v}from"./uni-card.a47d36c5.js";import{t as _,_ as b}from"./toast.0c1427b2.js";import{c as x,g as j,l as w}from"./baseApi.90e84e1c.js";import"./uni-cloud.es.c1a49bed.js";import"./uni-icons.6b4a5a2f.js";import"./uv-icon.7381eece.js";const V=r({__name:"index",setup(r){let V=!1;const g=a([]),I=a({userName:"",password:"",province:"",city:"",street:"",county:"",communityId:"",communityName:""}),h=a=>{if(V)return V=!1;V=!0,N()};(async()=>{const a=await x();g.value=j(a.data)})();const N=async()=>{const a={...I.value};return a.communityId?a.userName?a.password?(await w(a),_("登录成功"),delete a.password,i("userInfo",a),void n({url:"/pages/home/index"})):_("请输入密码"):_("请输入账号"):_("请选择省市区街道社区")},k=a=>{const e=a.detail.value,t=e[4].value.split(";");I.value=Object.assign(I.value,{province:e[0].text,city:e[1].text,street:e[3].text,county:e[2].text,communityId:t[0],communityName:e[4].text,latitude:t[1],longitude:t[2]})};return(a,i)=>{const n=l,r=c(d("uni-data-picker"),m),_=c(d("uni-forms-item"),p),x=c(d("uni-easyinput"),f),j=c(d("uni-forms"),y),w=c(d("uni-card"),v),V=c(d("uv-button"),b);return e(),t(n,{class:"box"},{default:s((()=>[o(n,{class:"body"},{default:s((()=>[o(n,{class:"titlebox"},{default:s((()=>[o(n,{class:"tit",style:{"text-align":"center",width:"100%"}},{default:s((()=>[u("请登录")])),_:1})])),_:1}),o(w,{isFull:!0,style:{"margin-top":"32rpx"}},{default:s((()=>[o(j,{modelValue:I.value,"label-position":"top","label-width":"fit-content"},{default:s((()=>[o(_,{label:"省市区街道社区",name:"communityId"},{default:s((()=>[o(r,{localdata:g.value,modelValue:I.value.communityId,"onUpdate:modelValue":i[0]||(i[0]=a=>I.value.communityId=a),"popup-title":"请选择地区",onChange:k},null,8,["localdata","modelValue"])])),_:1}),o(_,{name:"username",label:"账户"},{default:s((()=>[o(x,{modelValue:I.value.userName,"onUpdate:modelValue":i[1]||(i[1]=a=>I.value.userName=a),placeholder:"请输入账号"},null,8,["modelValue"])])),_:1}),o(_,{name:"password",label:"密码"},{default:s((()=>[o(x,{type:"password",modelValue:I.value.password,"onUpdate:modelValue":i[2]||(i[2]=a=>I.value.password=a),placeholder:"请输入密码"},null,8,["modelValue"])])),_:1})])),_:1},8,["modelValue"])])),_:1}),o(n,{class:"btns"},{default:s((()=>[o(V,{type:"primary",text:"登录",onClick:h})])),_:1})])),_:1})])),_:1})}}},[["__scopeId","data-v-bdb2c690"]]);export{V as default};
