import{r as e,o as a,f as r,a as s,w as l,F as o,g as u,i as d,b as t,e as n}from"./index-93422e90.js";import{_ as m}from"./uv-navbar.536f1c70.js";import{_ as i,r as p}from"./uni-app.es.1373d43e.js";import{a as f,_ as c,b as v}from"./uni-forms.f3c5ebdb.js";import{_ as w}from"./uni-card.aef5c7c5.js";import{_}from"./uv-button.42436f61.js";import{u as b}from"./baseApi.a7600fac.js";import{t as V}from"./toast.7b8a428a.js";import"./uv-icon.4fb46f40.js";const P=i({__name:"set",setup(i){const P=e({userName:(u("userInfo")||{}).userName||"",oldPassword:"",password:"",confirmPassword:""}),h=e(null);let j=!1;const g=e=>{j||(j=!0,h.value.validate().then((e=>{const a={...P.value};delete a.confirmPassword,b(a).then((()=>{V("修改成功")})),j=!1})).catch((e=>{j=!1,console.log("表单错误信息：",e)})))},q={userName:{rules:[{required:!0,errorMessage:"请输入用户名"}]},oldPassword:{rules:[{required:!0,errorMessage:"请输入旧密码"}]},password:{rules:[{required:!0,errorMessage:"请输入新密码"}]},confirmPassword:{rules:[{required:!0,errorMessage:"请确认新密码"},{validateFunction:function(e,a,r,s){if(a==P.value.password)return!0;s("两个密码不相同")}}]}};return(e,u)=>{const i=p(n("uv-navbar"),m),b=p(n("uni-easyinput"),f),V=p(n("uni-forms-item"),c),j=p(n("uni-forms"),v),y=p(n("uni-card"),w),N=p(n("uv-button"),_),x=d;return a(),r(o,null,[s(i,{title:"修改密码",border:"",leftIconSize:"50rpx",placeholder:"",autoBack:""}),s(y,null,{default:l((()=>[s(j,{ref_key:"formRef",ref:h,modelValue:P.value,"label-width":"150rpx",rules:q,style:{padding:"32rpx 0 0"}},{default:l((()=>[s(V,{required:"",label:"用户名",name:"userName"},{default:l((()=>[s(b,{modelValue:P.value.userName,"onUpdate:modelValue":u[0]||(u[0]=e=>P.value.userName=e),placeholder:"请输入用户名"},null,8,["modelValue"])])),_:1}),s(V,{required:"",label:"旧密码",name:"oldPassword"},{default:l((()=>[s(b,{modelValue:P.value.oldPassword,"onUpdate:modelValue":u[1]||(u[1]=e=>P.value.oldPassword=e),type:"password",placeholder:"请输入旧密码"},null,8,["modelValue"])])),_:1}),s(V,{required:"",label:"新密码",name:"password"},{default:l((()=>[s(b,{type:"password",modelValue:P.value.password,"onUpdate:modelValue":u[2]||(u[2]=e=>P.value.password=e),placeholder:"请输入密码"},null,8,["modelValue"])])),_:1}),s(V,{required:"",label:"确认密码",name:"confirmPassword"},{default:l((()=>[s(b,{type:"password",modelValue:P.value.confirmPassword,"onUpdate:modelValue":u[3]||(u[3]=e=>P.value.confirmPassword=e),placeholder:"请确认密码"},null,8,["modelValue"])])),_:1})])),_:1},8,["modelValue"])])),_:1}),s(x,{class:"btns"},{default:l((()=>[s(N,{type:"primary",onClick:g},{default:l((()=>[t(" 修改密码 ")])),_:1})])),_:1})],64)}}},[["__scopeId","data-v-dedfbb5a"]]);export{P as default};
