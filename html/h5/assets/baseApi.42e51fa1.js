import{P as a,a3 as t,E as o,M as e,A as d,a2 as s,g as u}from"./index-7f6000b5.js";import{o as r}from"./lodash.9f7206f8.js";const m=(u={})=>{var r=s;return new Promise(((s,m)=>{a({url:r+t+u.url,method:u.method||"GET",data:u.data||{},timeout:8e3,success:a=>{const{status:t,msg:u}=a.data;0==t?s(a.data):500==t&&u.includes("Token失效，请重新登录")?(o("userInfo"),e({url:"/pages/login/index"})):d({title:u||"请求失败",duration:1500,icon:"none"})},fail:a=>{m(a)}})}))},i=()=>{const a=u("userInfo")||{};return{province:a.province||"",city:a.city||"",county:a.county||"",street:a.street||"",communityName:a.communityName||""}},n=a=>m({url:"/login",method:"GET",data:a}),l=a=>m({url:"/updateUserInfo?"+r(a),method:"POST"}),c=a=>m({url:"/commiunityInfo",method:"GET",data:a}),h=a=>m({url:"/communityBaseSave",method:"POST",data:{...a,...i()}}),T=a=>m({url:"/courtBasicSave",method:"POST",data:{...a}}),f=a=>m({url:"/indicatorValueSave",method:"POST",data:a}),E=a=>m({url:"/allInfo",method:"GET",data:a}),I=a=>m({url:"/communityBasicInfo",method:"GET",data:{isPc:"0",...a,...i()}}),G=a=>m({url:"/courtBasicInfo",method:"GET",data:{isPc:"0",...a,...i()}}),P=a=>m({url:"/buildBasicSave",method:"POST",data:a}),S=a=>m({url:"/buildBasicInfo",method:"GET",data:{isPc:"0",...a,...i()}}),p=a=>m({url:"/indicatorValueBuildSave",method:"POST",data:a}),y=a=>m({url:"/problemBuildInfo",method:"GET",data:a}),g=a=>m({url:"/downloadImgHand",method:"GET",data:a}),v=a=>m({url:"/buildInfo",method:"GET",data:a}),B=a=>m({url:"/deleteImgHand",method:"GET",data:a});export{I as a,E as b,c,S as d,T as e,P as f,h as g,G as h,f as i,v as j,p as k,n as l,g as m,B as n,y as p,l as u};