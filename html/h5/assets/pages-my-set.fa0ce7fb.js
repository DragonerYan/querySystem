import{r as e,o as a,f as r,a as s,w as l,F as o,g as u,i as d,b as t,e as n}from"./index-dc79b2ae.js";import{_ as m}from"./uv-navbar.2dea54b9.js";import{_ as i,r as p}from"./uni-app.es.da9f3327.js";import{a as f,_ as c,b as v}from"./uni-forms.4e5fca14.js";import{_ as w}from"./uni-card.d7d01fbd.js";import{_}from"./uv-button.726e6cb5.js";import{u as b}from"./baseApi.caad9e83.js";import{t as V}from"./toast.8d653010.js";import"./uv-icon.802e20ec.js";import"./uni-icons.17e858bc.js";import"./lodash.d5e524c4.js";const j=i({__name:"set",setup(i){const j=e({userName:(u("userInfo")||{}).userName||"",oldPassword:"",password:"",confirmPassword:""}),h=e(null);let P=!1;const q=e=>{P||(P=!0,h.value.validate().then((e=>{const a={...j.value};delete a.confirmPassword,b(a).then((()=>{V("修改成功")})),P=!1})).catch((e=>{P=!1,console.log("表单错误信息：",e)})))},g={userName:{rules:[{required:!0,errorMessage:"请输入用户名"}]},oldPassword:{rules:[{required:!0,errorMessage:"请输入旧密码"}]},password:{rules:[{required:!0,errorMessage:"请输入新密码"}]},confirmPassword:{rules:[{required:!0,errorMessage:"请确认新密码"},{validateFunction:function(e,a,r,s){if(a==j.value.password)return!0;s("两个密码不相同")}}]}};return(e,u)=>{const i=p(n("uv-navbar"),m),b=p(n("uni-easyinput"),f),V=p(n("uni-forms-item"),c),P=p(n("uni-forms"),v),y=p(n("uni-card"),w),N=p(n("uv-button"),_),x=d;return a(),r(o,null,[s(i,{title:"修改密码",border:"",leftIconSize:"50rpx",placeholder:"",autoBack:""}),s(y,null,{default:l((()=>[s(P,{ref_key:"formRef",ref:h,modelValue:j.value,"label-width":"150rpx",rules:g,style:{padding:"32rpx 0 0"}},{default:l((()=>[s(V,{required:"",label:"用户名",name:"userName"},{default:l((()=>[s(b,{modelValue:j.value.userName,"onUpdate:modelValue":u[0]||(u[0]=e=>j.value.userName=e),placeholder:"请输入用户名"},null,8,["modelValue"])])),_:1}),s(V,{required:"",label:"旧密码",name:"oldPassword"},{default:l((()=>[s(b,{modelValue:j.value.oldPassword,"onUpdate:modelValue":u[1]||(u[1]=e=>j.value.oldPassword=e),type:"password",placeholder:"请输入旧密码"},null,8,["modelValue"])])),_:1}),s(V,{required:"",label:"新密码",name:"password"},{default:l((()=>[s(b,{type:"password",modelValue:j.value.password,"onUpdate:modelValue":u[2]||(u[2]=e=>j.value.password=e),placeholder:"请输入密码"},null,8,["modelValue"])])),_:1}),s(V,{required:"",label:"确认密码",name:"confirmPassword"},{default:l((()=>[s(b,{type:"password",modelValue:j.value.confirmPassword,"onUpdate:modelValue":u[3]||(u[3]=e=>j.value.confirmPassword=e),placeholder:"请确认密码"},null,8,["modelValue"])])),_:1})])),_:1},8,["modelValue"])])),_:1}),s(x,{class:"btns"},{default:l((()=>[s(N,{type:"primary",onClick:q},{default:l((()=>[t(" 修改密码 ")])),_:1})])),_:1})],64)}}},[["__scopeId","data-v-dedfbb5a"]]);export{j as default};
