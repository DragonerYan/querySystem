import{o as a,f as t,a as r,w as e,F as s,d as o,i as n,b as i,g as l,h as u,n as c,e as m}from"./index-d68978c3.js";import{_ as p}from"./uv-navbar.51a41652.js";import{_ as d,r as f}from"./uni-app.es.dd1c2cd8.js";import{_ as y}from"./uv-button.a00d60e3.js";import{_ as g}from"./uni-card.858c3da6.js";import{a as _}from"./baseApi.e488cac3.js";import{t as x}from"./toast.c60169bc.js";import"./uv-icon.4e469848.js";import"./lodash.576e2588.js";const b=d({__name:"index",setup(d){const b=async()=>{const a=l("userInfo")||null,t=a?a.communityId:"",r=(await _({communityId:t})).data.filter((a=>a.communityId==t));if(r.length&&r[0].state<=1)return x("等待审核结果，请勿重新填写");const e=l("areaForm")||{};if(e.hasOwnProperty(t)&&e[t])return u({title:"填写社区报表",content:"之前填写继续吗？",confirmText:"继续",cancelText:"新建",success:a=>{a.confirm?c({url:"/pages/area/index?storage=areaForm"}):a.cancel&&(c({url:"/pages/area/index"}),console.log("用户点击了取消"))}});c({url:"/pages/area/index"})},j=()=>{c({url:"/pages/city/index"})},h=()=>{c({url:"/pages/history/index"})},v=()=>{o({url:"/pages/my/index"})},I=()=>{c({url:"/pages/build/list"})};return(o,l)=>{const u=f(m("uv-navbar"),p),c=f(m("uv-button"),y),d=f(m("uni-card"),g),_=n;return a(),t(s,null,[r(u,{title:"城市体检数据调查系统",onRightClick:v,border:"",leftIconSize:0,rightIcon:"account-fill",placeholder:""}),r(_,{class:"content"},{default:e((()=>[r(d,null,{default:e((()=>[r(c,{type:"primary",onClick:b},{default:e((()=>[i(" 社区填报 ")])),_:1}),r(c,{type:"primary",onClick:j},{default:e((()=>[i(" 小区住房基本信息 ")])),_:1}),r(c,{type:"primary",onClick:I},{default:e((()=>[i(" 楼栋台账 ")])),_:1}),r(c,{type:"primary",onClick:h},{default:e((()=>[i(" 填报列表 ")])),_:1})])),_:1})])),_:1})],64)}}},[["__scopeId","data-v-c4b1377b"]]);export{b as default};