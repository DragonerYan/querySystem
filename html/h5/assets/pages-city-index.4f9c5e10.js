import{g as e,e as r,o as a,c as l,w as o,f as s,F as t,j as u,u as i,k as n,a as m,b as p,t as c,l as d,m as f,v,p as b,i as h,r as y,h as g,q,x as _,y as k,z as M,A as j,d as N}from"./index-c90ba5bc.js";import{_ as x}from"./uv-navbar.d975eda8.js";import{r as T,_ as I,o as w}from"./uni-app.es.ab46cff8.js";import{_ as B}from"./uni-notice-bar.acf2060d.js";import{_ as O}from"./z-tabs.48151d79.js";import{_ as P,b as C}from"./uni-forms.c6775aed.js";import{_ as D}from"./uv-button.ea966e7b.js";import{_ as S}from"./uni-card.3628bd70.js";import{h as U}from"./h-input.05bf4445.js";import{h as z,y as F,r as Y,m as A,a as R}from"./info.86943fcb.js";import{a as V,b as $,i as E,_ as G}from"./lodash.dc4dce02.js";import{c as H,b as J,d as K,e as L,f as Q}from"./baseApi.a243367c.js";import{d as W}from"./dayjs.min.36a7c6bd.js";import{_ as X}from"./uni-icons.ee49e043.js";import{t as Z}from"./toast.da8a3938.js";import"./uv-icon.821d90f4.js";import"./uni-data-picker.31df9a37.js";import"./uni-cloud.es.0b936316.js";import"./uni-data-checkbox.3cc47dcc.js";const ee=V(),re=()=>{const r=e("userInfo")||{};return{communityId:r.communityId||"",communityName:r.communityName||"",city:r.city||"",county:r.county||"",province:r.province||"",street:r.street||""}},ae=()=>({buildNumber:"",buildTime:"",city:"",communityId:"",communityName:"",county:"",courtName:"",dateTime:"",numberDepartment:"",numberOver60People:"",numberPeople:"",province:"",reportYear:"",state:"0",reviewComment:"",problemState:"",street:"",unitsNumber:"",userId:"",...re()}),le=e=>({title:"楼栋信息",id:e||ee,childrens:[{name:"住宅楼号",value:"",prop:"buildNumber",placeholder:"请输入住宅楼号",required:!0,type:"text",rules:[{required:!0,errorMessage:"请输入住宅楼号"}]},{name:"单元数量",value:"个",prop:"unitsNumber",placeholder:"请输入单元数量",required:!0,rules:[{required:!0,errorMessage:"请输入单元数量"}]},{name:"建造时间",value:"年",prop:"buildTime",placeholder:"请选择建造时间",type:"year",options:F,required:!0,rules:[{required:!0,errorMessage:"请选择建造时间"}]},{name:"建筑层数",value:"栋",prop:"numberDepartment",placeholder:"请输入建筑层数",required:!0,rules:[{required:!0,errorMessage:"请输入建筑层数"}]},{name:"常住人口",value:"人",prop:"numberPeople",placeholder:"请输入常住人口",required:!0,rules:[{required:!0,errorMessage:"请输入常住人口"}]},{name:"六十岁以上常住人口",value:"人",prop:"numberOver60People",placeholder:"请输入六十岁以上常住人口",required:!0,rules:[{required:!0,errorMessage:"请输入六十岁以上常住人口"}]}]}),oe=["基本信息","楼栋信息"],se=[{title:"基本信息",childrens:[{name:"小区名称",value:"",prop:"courtName",placeholder:"请输入小区名称",type:"text",required:!0,rules:[{required:!0,errorMessage:"请输入小区名称"}]},{name:"省市区街道社区",value:"",prop:"communityId",placeholder:"请选择地区",type:"data-picker",options:()=>new Promise(((e,r)=>{H().then((r=>{const a=$(r.data);e(a)}))})),required:!0,rules:[{required:!0,errorMessage:"请选择地区"}]},{name:"小区类型",value:"",prop:"courtType",type:"radio",options:z,required:!0,rules:[{required:!0,errorMessage:"选择小区类型"}],active:z[z.length-1].value,childrens:[{name:"",prop:"courtTypeOther",type:"textarea",required:!1,placeholder:"请输入其他"}]},{name:"建造时间",value:"年",prop:"buildTime",placeholder:"选择建造时间",type:"year",options:F,required:!0,rules:[{required:!0,errorMessage:"选择建造时间"}]},{name:"老旧小区改造情况",value:"",prop:"remodel",type:"radio",options:Y,required:!0,rules:[{required:!0,errorMessage:"选择老旧小区改造情况"}]},{name:"物业管理",value:"",prop:"management",type:"radio",options:A,required:!0,rules:[{required:!0,errorMessage:"选择选择物业管理状况"}]},{name:"总建筑面积",value:"平方米",prop:"area",placeholder:"请输入总建筑面积",required:!0,rules:[{required:!0,errorMessage:"请输入总建筑面积"}]},{name:"住宅总套数",value:"套",prop:"numberDepartment",placeholder:"请输入住宅总套数",required:!0,rules:[{required:!0,errorMessage:"请输入住宅总套数"}]},{name:"常住人口",value:"人",prop:"numberPeople",placeholder:"请输入常住人口",required:!0,rules:[{required:!0,errorMessage:"请输入常住人口"}]},{name:"六十岁以上常住人口",value:"人",prop:"numberOver60People",placeholder:"请输入六十岁以上常住人口",required:!0,rules:[{required:!0,errorMessage:"请输入六十岁以上常住人口"}]}]},{title:"建筑数量及层数",childrens:[{name:"全部数量",value:"栋",prop:"numberBuilding",placeholder:"请输入全部建筑数量",required:!0,rules:[{required:!0,errorMessage:"请输入全部建筑数量"}]},{name:"1-3层",value:"栋",prop:"number13Building",placeholder:"请输入1-3层建筑数量",required:!0,rules:[{required:!0,errorMessage:"请输入1-3层建筑数量"}]},{name:"4-6层",value:"栋",prop:"number46Building",placeholder:"请输入4-6层建筑数量",required:!0,rules:[{required:!0,errorMessage:"请输入4-6层建筑数量"}]},{name:"7-9层",value:"栋",prop:"number79Building",placeholder:"请输入7-9层建筑数量",required:!0,rules:[{required:!0,errorMessage:"请输入7-9层建筑数量"}]},{name:"10 层以上",value:"栋",prop:"numberOver10Building",placeholder:"请输入10层以上建筑数量",required:!0,rules:[{required:!0,errorMessage:"请输入10层以上建筑数量"}]}]}],te=(e,r)=>{const a=W().year(),l={state:r,dateTime:new Date,reportYear:a};return Object.prototype.hasOwnProperty.call(e,"courtType")&&(e.courtTypeOther=e.courtType==z[z.length-1].value?e.courtTypeOther:""),{...e,...l}},ue={__name:"base",props:{form:{}},setup:e=>(y,g)=>{const q=b,_=T(r("uni-forms-item"),P),k=h,M=T(r("uni-card"),S);return a(),l(k,{class:"content"},{default:o((()=>[(a(!0),s(t,null,u(i(se),((r,i)=>(a(),l(M,{isFull:!0,class:"form-card",title:r.title,key:i},{default:o((()=>[(a(!0),s(t,null,u(r.childrens,(r=>(a(),l(_,{class:n(r.childrens?"other_form_item":""),key:r.prop,required:r.required,label:r.name,name:["basic",r.prop],rules:r.rules},{default:o((()=>[m(U,{msg:e.form.basic[r.prop],"onUpdate:msg":a=>e.form.basic[r.prop]=a,options:r.options,type:r.type,placeholder:r.placeholder},null,8,["msg","onUpdate:msg","options","type","placeholder"]),r.value?(a(),l(q,{key:0},{default:o((()=>[p(c(r.value),1)])),_:2},1024)):d("",!0),f(m(k,null,{default:o((()=>[(a(!0),s(t,null,u(r.childrens,((s,t)=>(a(),l(_,{class:n(["child_form_item",{"no-label_form_item":!s.name,child_form_item:t==r.childrens.length-1}]),key:s.prop,required:s.required,label:s.name,name:["basic",s.prop],rules:s.rules},{default:o((()=>[m(U,{msg:e.form.basic[s.prop],"onUpdate:msg":r=>e.form.basic[s.prop]=r,options:s.options,type:s.type,placeholder:s.placeholder},null,8,["msg","onUpdate:msg","options","type","placeholder"])])),_:2},1032,["class","required","label","name","rules"])))),128))])),_:2},1536),[[v,r.childrens&&e.form.basic[r.prop]===r.active]])])),_:2},1032,["class","required","label","name","rules"])))),128))])),_:2},1032,["title"])))),128))])),_:1})}},ie={__name:"arch",props:{form:{},aduitMask:{type:Boolean,default:!1}},setup(e,{expose:i}){const n=e,f=y([le()]),v=e=>{if(e){const e=V();f.value.push(le(e)),n.form.archs[e]=ae()}};return i({handleSetData:e=>{f.value=[],n.form.archs={},e.forEach((e=>{const r=V();f.value.push(le(r)),n.form.archs[r]=e}))}}),(i,y)=>{const q=b,_=T(r("uni-icons"),X),k=h,M=T(r("uni-forms-item"),P),j=T(r("uni-card"),S),N=T(r("uv-button"),D);return a(),l(k,{class:"build"},{default:o((()=>[(a(!0),s(t,null,u(f.value,((r,i)=>(a(),l(j,{isFull:!0,class:"form-card",title:r.title,key:r.id},{title:o((()=>[m(k,{class:"card-title"},{default:o((()=>[m(q,null,{default:o((()=>[p(c(`${r.title}(${i+1})`),1)])),_:2},1024),i&&!e.aduitMask?(a(),l(_,{key:0,type:"trash",color:"#b63027",size:"24",onClick:e=>{return a=r,void g({title:"删除该楼栋信息",content:"确定删除吗？",confirmText:"确定",cancelText:"取消",success:e=>{e.confirm?(f.value=f.value.filter((e=>e.id!=a.id)),delete n.form.archs[a.id]):e.cancel}});var a}},null,8,["onClick"])):d("",!0)])),_:2},1024)])),default:o((()=>[(a(!0),s(t,null,u(r.childrens,((s,t)=>(a(),l(M,{key:s.prop,required:s.required,label:s.name,name:["archs",r.id,s.prop],rules:s.rules},{default:o((()=>[m(U,{msg:e.form.archs[r.id][s.prop],"onUpdate:msg":a=>e.form.archs[r.id][s.prop]=a,options:s.options,type:s.type,placeholder:s.placeholder},null,8,["msg","onUpdate:msg","options","type","placeholder"]),s.value?(a(),l(q,{key:0},{default:o((()=>[p(c(s.value),1)])),_:2},1024)):d("",!0)])),_:2},1032,["required","label","name","rules"])))),128))])),_:2},1032,["title"])))),128)),e.aduitMask?d("",!0):(a(),l(N,{key:0,type:"primary",onClick:v,text:"添加楼宇信息","icon-color":"#fff","custom-style":"font-weight:600;margin:20px 0",icon:"plus"}))])),_:1})}}},ne=I({__name:"index",props:{state:String,communityId:String,courtName:String},setup(e){const u=y("小区住房填报"),c=y(null),b=y(""),I=y(null);w((e=>{e.state&&(u.value=(e=>{let r="";switch(e.state){case"0":r="小区暂存填报-"+e.courtName;break;case"1":r=e.courtName+"-待审核";break;case"2":r=e.courtName+"-审核通过";break;case"3":r=e.courtName+"-审核未通过"}return r})(e),b.value=e.state,P(e.communityId,e.courtName))}));const P=async(e,r)=>{const a={communityId:e,courtName:r};Promise.all([J(a),K(a)]).then((e=>{const r=e[0].data,a=e[1].data;let{basicInfo:l}=r;l=E(l),S.value.basic=G.assign(S.value.basic,l),q((()=>{I.value.handleSetData(a)}))}))},S=y({basic:{courtName:"",communityId:"",communityName:"",courtType:"",courtTypeOther:"",buildTime:"",remodel:"",management:"",area:"",dateTime:"",numberDepartment:"",numberPeople:"",numberOver60People:"",numberBuilding:"",number13Building:"",number46Building:"",number79Building:"",numberOver10Building:"",reportYear:"",reviewComment:"",...re()},archs:{[ee]:ae()}}),U=_((()=>!S.value.basic.courtName)),z=_((()=>R[1].value==b.value||R[2].value==b.value)),F=e=>{e&&c.value.validate().then((e=>{g({title:"提交",content:"一旦提交不可修改,确定提交？",success:e=>{e.confirm?Y():e.cancel&&console.log("用户点击了取消")}})})).catch((e=>{Z("请填写完整")}))},Y=async(e=1)=>{const r=te(S.value.basic,e);k();const a=[];for(var l in S.value.archs){let o=S.value.archs[l];o=te(o,e),o.courtName=r.courtName,a.push(o)}Promise.all([L(r),Q(a)]).then((r=>{M();j({title:{0:"暂存成功",1:"提交成功"}[e],duration:2e3,icon:"none"}),setTimeout((()=>{N({url:"/pages/home/index"})}),800)}))},A=y(0),V=e=>{A.value=e};return(e,y)=>{const q=T(r("uv-navbar"),x),_=T(r("uni-notice-bar"),B),k=T(r("z-tabs"),O),M=T(r("uni-forms"),C),j=T(r("uv-button"),D),N=h;return a(),s(t,null,[m(q,{title:u.value,border:"",leftIconSize:"50rpx",placeholder:"",autoBack:""},null,8,["title"]),m(N,null,{default:o((()=>[b.value===i(R)[3].value?(a(),l(_,{key:0,text:"审核不通过意见："+S.value.basic.reviewComment},null,8,["text"])):d("",!0),m(k,{list:i(oe),onChange:V},null,8,["list"]),m(N,{class:n(["form-box",{mask:i(z)}])},{default:o((()=>[m(M,{modelValue:S.value,"label-position":"top","label-width":"100%",class:"form-data",ref_key:"formRef",ref:c},{default:o((()=>[f(m(ue,{form:S.value},null,8,["form"]),[[v,0==A.value]]),f(m(ie,{ref_key:"archsRef",ref:I,aduitMask:i(z),form:S.value},null,8,["aduitMask","form"]),[[v,1==A.value]])])),_:1},8,["modelValue"]),m(N,{class:"btns"},{default:o((()=>[m(j,{class:"submit",disabled:i(U),type:"warning",onClick:y[0]||(y[0]=e=>!i(U)&&(console.log(S,666),void g({title:"小区表单暂存",content:"是否暂存小区表单？",success:e=>{e.confirm?Y(0):e.cancel&&console.log("用户点击了取消")}})))},{default:o((()=>[p("暂存")])),_:1},8,["disabled"]),m(j,{class:"submit",type:"primary",onClick:F},{default:o((()=>[p("提交")])),_:1})])),_:1})])),_:1},8,["class"])])),_:1})],64)}}},[["__scopeId","data-v-95cbe181"]]);export{ne as default};
