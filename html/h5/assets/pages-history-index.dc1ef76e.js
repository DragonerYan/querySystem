import{r as a,g as t,y as e,z as s,o,f as r,a as m,w as i,F as n,j as u,e as l,c,k as d,n as p}from"./index-c90ba5bc.js";import{_ as b}from"./uv-navbar.d975eda8.js";import{_ as f,a as y,r as v}from"./uni-app.es.ab46cff8.js";import{_,a as j}from"./uni-list.606e2f31.js";import{h as x,a as I,d as h}from"./baseApi.a243367c.js";import{_ as k,o as N}from"./lodash.dc4dce02.js";import{d as g}from"./dayjs.min.36a7c6bd.js";import{a as T}from"./info.86943fcb.js";import"./uv-icon.821d90f4.js";import"./uni-icons.ee49e043.js";const w=f({__name:"index",setup(f){const w=a(t("userInfo")||null),Y=w.value?w.value.communityId:"",z=w.value?w.value.communityName:"",A=a([]);y((()=>{B()}));const B=async()=>{e(),Promise.all([x({communityId:Y}),I({communityId:Y}),h({communityId:Y})]).then((a=>{const t=a[1].data.filter((a=>a.communityId==Y)).map((a=>({...a,prop:"area"})));let e=[...a[0].data.map((a=>({...a,prop:"city"}))),...t,...a[2].data.filter((a=>"1"==a.problemState)).map((a=>({...a,court_name:a.courtName+"-"+a.buildNumber,prop:"build"})))];e=e.map((a=>{var t;let e=a.state;const s=a.hasOwnProperty("management");return s||(a.state="0"==e?"1":e),{...a,dateTime:g(a.dateTime).format("YYYY-MM-DD HH:mm:ss"),court_name:a.court_name?a.court_name:s?a.courtName:z,state_name:(null==(t=T.find((t=>t.value==a.state)))?void 0:t.text)||""}})),A.value=k.orderBy(e,["state","dateTime"],["asc","desc"]),s()}))};return(a,t)=>{const e=v(l("uv-navbar"),b),s=v(l("uni-list-item"),_),f=v(l("uni-list"),j);return o(),r(n,null,[m(e,{title:"填报列表",border:"",leftIconSize:"50rpx",placeholder:"",autoBack:""}),m(f,{"border-full":""},{default:i((()=>[(o(!0),r(n,null,u(A.value,(a=>(o(),c(s,{clickable:"",onClick:t=>(a=>{const t={state:a.state,communityId:a.communityId,courtName:a.court_name};let e="";switch(a.prop){case"city":e="/pages/city/index";break;case"area":e="/pages/area/index";break;case"build":t.buildNumber=a.buildNumber,t.courtName=a.courtName,e="/pages/build/index"}p({url:e+"?"+N(t)})})(a),class:d("item-state"+a.state),rightText:a.state_name,key:a.id,title:a.court_name,showArrow:"",note:a.dateTime},null,8,["onClick","class","rightText","title","note"])))),128))])),_:1})],64)}}},[["__scopeId","data-v-03b07095"]]);export{w as default};
