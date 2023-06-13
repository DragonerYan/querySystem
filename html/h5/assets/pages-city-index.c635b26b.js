import{r as e,e as a,o as l,c as r,w as u,a as o,u as m,j as d,v as n,b as t,k as i,i as s,l as c,g as f,m as b,f as p,F as V,p as _,q as g,h as x,t as y,x as q,y as v,z as h}from"./index-93422e90.js";import{_ as U}from"./uv-navbar.536f1c70.js";import{_ as M,r as B,o as T}from"./uni-app.es.1373d43e.js";import{_ as I,h as j,y as k,r as N,m as O,a as P,b as F}from"./info.5367443e.js";import{a as w,_ as C,b as D}from"./uni-forms.f3c5ebdb.js";import{_ as S}from"./uv-button.42436f61.js";import{_ as Y}from"./uni-data-picker.33492d54.js";import{_ as z}from"./uni-card.aef5c7c5.js";import{c as A,a as E,b as H,i as L,_ as R,d as G,e as J}from"./baseApi.a7600fac.js";import{t as K}from"./toast.7b8a428a.js";import{d as Q}from"./dayjs.min.1c2de08a.js";import"./uv-icon.4fb46f40.js";import"./uni-cloud.es.789f472f.js";const W=M({__name:"base",props:{form:{}},setup(f){const b=f,p=e([]);(async()=>{const e=await A();p.value=E(e.data)})();const V=e(1),_=e=>{V.value=e.detail.value,b.form.basic.buildTime=k[V.value]},g=()=>{},x=()=>{};return(e,b)=>{const y=B(a("uni-easyinput"),w),q=B(a("uni-forms-item"),C),v=B(a("uni-data-picker"),Y),h=B(a("uni-data-checkbox"),I),U=i,M=s,T=c,P=B(a("uni-card"),z);return l(),r(M,{class:"content"},{default:u((()=>[o(P,{isFull:!0},{default:u((()=>[o(q,{required:"",label:"小区名称",name:["basic","courtName"],rules:[{required:!0,errorMessage:"小区名称必填"}]},{default:u((()=>[o(y,{type:"text",modelValue:f.form.basic.courtName,"onUpdate:modelValue":b[0]||(b[0]=e=>f.form.basic.courtName=e),placeholder:"请输入小区名称"},null,8,["modelValue"])])),_:1}),o(q,{required:"",label:"省市区街道社区",class:"community_area",name:["basic","communityId"],rules:[{required:!0,errorMessage:"地区必填"}]},{default:u((()=>[o(v,{readonly:"",localdata:p.value,modelValue:f.form.basic.communityId,"onUpdate:modelValue":b[1]||(b[1]=e=>f.form.basic.communityId=e),"popup-title":"请选择地区",onChange:x,onNodeclick:g},null,8,["localdata","modelValue"])])),_:1}),o(q,{class:"other_form_item",label:"小区类型",required:"",name:["basic","courtType"],rules:[{required:!0,errorMessage:"小区类型必填"}]},{default:u((()=>[o(h,{modelValue:f.form.basic.courtType,"onUpdate:modelValue":b[2]||(b[2]=e=>f.form.basic.courtType=e),multiple:"",localdata:m(j)},null,8,["modelValue","localdata"]),d(o(y,{modelValue:f.form.basic.courtTypeOther,"onUpdate:modelValue":b[3]||(b[3]=e=>f.form.basic.courtTypeOther=e),placeholder:"请输入其他"},null,8,["modelValue"]),[[n,f.form.basic.courtType.some((e=>"0"==e))]])])),_:1}),o(q,{label:"建造时间(年)",required:"",name:["basic","buildTime"],rules:[{required:!0,errorMessage:"建造时间必填"}]},{default:u((()=>[o(T,{onChange:_,value:V.value,range:m(k)},{default:u((()=>[o(M,{class:"arch-year"},{default:u((()=>[o(y,{suffixIcon:"bottom",modelValue:f.form.basic.buildTime,"onUpdate:modelValue":b[4]||(b[4]=e=>f.form.basic.buildTime=e),placeholder:"选择建造时间(年)"},null,8,["modelValue"]),t(),o(U,null,{default:u((()=>[t("年")])),_:1})])),_:1})])),_:1},8,["value","range"])])),_:1}),o(q,{label:"改造情况",required:"",name:["basic","remodel"],rules:[{required:!0,errorMessage:"改造情况必填"}]},{default:u((()=>[o(h,{modelValue:f.form.basic.remodel,"onUpdate:modelValue":b[5]||(b[5]=e=>f.form.basic.remodel=e),localdata:m(N)},null,8,["modelValue","localdata"])])),_:1}),o(q,{label:"物业管理",required:"",name:["basic","management"],rules:[{required:!0,errorMessage:"物业管理必填"}]},{default:u((()=>[o(h,{modelValue:f.form.basic.management,"onUpdate:modelValue":b[6]||(b[6]=e=>f.form.basic.management=e),localdata:m(O)},null,8,["modelValue","localdata"])])),_:1}),o(q,{label:"总建筑面积",required:"",name:["basic","area"],rules:[{required:!0,errorMessage:"总建筑面积必填"}]},{default:u((()=>[o(y,{modelValue:f.form.basic.area,"onUpdate:modelValue":b[7]||(b[7]=e=>f.form.basic.area=e),type:"number",placeholder:"请输入总建筑面积"},null,8,["modelValue"]),o(U,null,{default:u((()=>[t("平方米")])),_:1})])),_:1}),o(q,{label:"住宅总套数",required:"",name:["basic","numberDepartment"],rules:[{required:!0,errorMessage:"住宅总套数必填"}]},{default:u((()=>[o(y,{modelValue:f.form.basic.numberDepartment,"onUpdate:modelValue":b[8]||(b[8]=e=>f.form.basic.numberDepartment=e),type:"number",placeholder:"请输入住宅总套数"},null,8,["modelValue"]),o(U,null,{default:u((()=>[t("套")])),_:1})])),_:1}),o(q,{label:"常住人口",required:"",name:["basic","numberPeople"],rules:[{required:!0,errorMessage:"常住人口必填"}]},{default:u((()=>[o(y,{modelValue:f.form.basic.numberPeople,"onUpdate:modelValue":b[9]||(b[9]=e=>f.form.basic.numberPeople=e),type:"number",placeholder:"请输入常住人口"},null,8,["modelValue"]),o(U,null,{default:u((()=>[t("人数")])),_:1})])),_:1}),o(q,{label:"六十岁以上常住人口",required:"",name:["basic","numberOver60People"],rules:[{required:!0,errorMessage:"六十岁以上常住人口必填"}]},{default:u((()=>[o(y,{modelValue:f.form.basic.numberOver60People,"onUpdate:modelValue":b[10]||(b[10]=e=>f.form.basic.numberOver60People=e),type:"number",placeholder:"请输入六十岁以上常住人口"},null,8,["modelValue"]),o(U,null,{default:u((()=>[t("人数")])),_:1})])),_:1})])),_:1}),o(P,{style:{"margin-top":"20rpx"},title:"建筑数量及层数",isFull:!0},{default:u((()=>[o(q,{label:"全部数量",required:"",name:["basic","numberBuilding"],rules:[{required:!0,errorMessage:"全部数量必填"}]},{default:u((()=>[o(y,{modelValue:f.form.basic.numberBuilding,"onUpdate:modelValue":b[11]||(b[11]=e=>f.form.basic.numberBuilding=e),type:"number",placeholder:"请输入全部建筑数量"},null,8,["modelValue"]),o(U,null,{default:u((()=>[t("栋")])),_:1})])),_:1}),o(q,{label:"1-3层",required:"",name:["basic","number13Building"],rules:[{required:!0,errorMessage:"1-3层数量必填"}]},{default:u((()=>[o(y,{modelValue:f.form.basic.number13Building,"onUpdate:modelValue":b[12]||(b[12]=e=>f.form.basic.number13Building=e),type:"number",placeholder:"请输入1-3层建筑数量"},null,8,["modelValue"]),o(U,null,{default:u((()=>[t("栋")])),_:1})])),_:1}),o(q,{label:"4-6层",required:"",name:["basic","number46Building"],rules:[{required:!0,errorMessage:"小区名称必填"}]},{default:u((()=>[o(y,{modelValue:f.form.basic.number46Building,"onUpdate:modelValue":b[13]||(b[13]=e=>f.form.basic.number46Building=e),type:"number",placeholder:"请输入4-6层建筑数量"},null,8,["modelValue"]),o(U,null,{default:u((()=>[t("栋")])),_:1})])),_:1}),o(q,{label:"7-9层",required:"",name:["basic","number79Building"],rules:[{required:!0,errorMessage:"7-9层建筑数量必填"}]},{default:u((()=>[o(y,{modelValue:f.form.basic.number79Building,"onUpdate:modelValue":b[14]||(b[14]=e=>f.form.basic.number79Building=e),type:"number",placeholder:"请输入7-9层建筑数量"},null,8,["modelValue"]),o(U,null,{default:u((()=>[t("栋")])),_:1})])),_:1}),o(q,{label:"10 层以上",required:"",name:["basic","numberOver10Building"],rules:[{required:!0,errorMessage:"10 层以上建筑数量必填"}]},{default:u((()=>[o(y,{modelValue:f.form.basic.numberOver10Building,"onUpdate:modelValue":b[15]||(b[15]=e=>f.form.basic.numberOver10Building=e),type:"number",placeholder:"请输入10 层以上建筑数量"},null,8,["modelValue"]),o(U,null,{default:u((()=>[t("栋")])),_:1})])),_:1})])),_:1})])),_:1})}}},[["__scopeId","data-v-3323e057"]]),X=M({__name:"exam",props:{form:{}},setup:e=>(m,d)=>{const n=B(a("uni-easyinput"),w),c=i,f=B(a("uni-forms-item"),C),b=B(a("uni-card"),z),p=s;return l(),r(p,{class:"content"},{default:u((()=>[o(b,{isFull:!0},{default:u((()=>[o(f,{label:"存在外墙安全隐患的住宅数量",required:"",name:["exam","2.1","indicatorValue"],rules:[{required:!0,errorMessage:"必填"}]},{default:u((()=>[o(n,{modelValue:e.form.exam[2.1].indicatorValue,"onUpdate:modelValue":d[0]||(d[0]=a=>e.form.exam[2.1].indicatorValue=a),type:"number",placeholder:"请输入"},null,8,["modelValue"]),o(c,null,{default:u((()=>[t("栋")])),_:1})])),_:1},8,["name"]),o(f,{label:"存在燃气安全隐患的住宅数量(户内燃气橡胶软管存在变硬变脆、龟裂、明显缺损、油污严重等老化破损现象或使用不合格产品)",required:"",name:["exam","2.2","indicatorValue"],rules:[{required:!0,errorMessage:"必填"}]},{default:u((()=>[o(n,{modelValue:e.form.exam[2.2].indicatorValue,"onUpdate:modelValue":d[1]||(d[1]=a=>e.form.exam[2.2].indicatorValue=a),type:"number",placeholder:"请输入"},null,8,["modelValue"]),o(c,null,{default:u((()=>[t("栋")])),_:1})])),_:1},8,["name"]),o(f,{label:"存在管线管道破损的住宅数量",required:"",name:["exam","2.6","indicatorValue"],rules:[{required:!0,errorMessage:"必填"}]},{default:u((()=>[o(n,{modelValue:e.form.exam[2.6].indicatorValue,"onUpdate:modelValue":d[2]||(d[2]=a=>e.form.exam[2.6].indicatorValue=a),type:"number",placeholder:"请输入"},null,8,["modelValue"]),o(c,null,{default:u((()=>[t("栋")])),_:1})])),_:1},8,["name"]),o(f,{label:"入户水质不达标的住宅数量",required:"",name:["exam","2.7","indicatorValue"],rules:[{required:!0,errorMessage:"必填"}]},{default:u((()=>[o(n,{modelValue:e.form.exam[2.7].indicatorValue,"onUpdate:modelValue":d[3]||(d[3]=a=>e.form.exam[2.7].indicatorValue=a),type:"number",placeholder:"请输入"},null,8,["modelValue"]),o(c,null,{default:u((()=>[t("栋")])),_:1})])),_:1},8,["name"]),o(f,{label:"需要进行节能改造的住宅数量",required:"",name:["exam","2.9","indicatorValue"],rules:[{required:!0,errorMessage:"必填"}]},{default:u((()=>[o(n,{modelValue:e.form.exam[2.9].indicatorValue,"onUpdate:modelValue":d[4]||(d[4]=a=>e.form.exam[2.9].indicatorValue=a),type:"number",placeholder:"请输入"},null,8,["modelValue"]),o(c,null,{default:u((()=>[t("栋")])),_:1})])),_:1},8,["name"]),o(f,{label:"需要进行数字化改造的住宅数量",required:"",name:["exam","2.10","indicatorValue"],rules:[{required:!0,errorMessage:"必填"}]},{default:u((()=>[o(n,{modelValue:e.form.exam["2.10"].indicatorValue,"onUpdate:modelValue":d[5]||(d[5]=a=>e.form.exam["2.10"].indicatorValue=a),type:"number",placeholder:"请输入"},null,8,["modelValue"]),o(c,null,{default:u((()=>[t("栋")])),_:1})])),_:1},8,["name"])])),_:1}),o(b,{style:{"margin-top":"20rpx"},title:"存在楼道安全隐患的住宅数量",isFull:!0},{default:u((()=>[o(f,{label:"存在楼道安全隐患的住宅数量(合计)",required:"",name:["exam","2.3","indicatorValue"],rules:[{required:!0,errorMessage:"必填"}]},{default:u((()=>[o(n,{modelValue:e.form.exam[2.3].indicatorValue,"onUpdate:modelValue":d[6]||(d[6]=a=>e.form.exam[2.3].indicatorValue=a),type:"number",placeholder:"请输入"},null,8,["modelValue"]),o(c,null,{default:u((()=>[t("栋")])),_:1})])),_:1},8,["name"]),o(f,{label:"存在楼栋内人行走道、排风烟道、通风井道、垃圾通道等损坏或违规改造的住宅",required:"",name:["exam","2.3.1","indicatorValue"],rules:[{required:!0,errorMessage:"必填"}]},{default:u((()=>[o(n,{modelValue:e.form.exam["2.3.1"].indicatorValue,"onUpdate:modelValue":d[7]||(d[7]=a=>e.form.exam["2.3.1"].indicatorValue=a),type:"number",placeholder:"请输入"},null,8,["modelValue"]),o(c,null,{default:u((()=>[t("栋")])),_:1})])),_:1},8,["name"]),o(f,{label:"存在消防、人防等安全隐患问题的住宅",required:"",name:["exam","2.3.2","indicatorValue"],rules:[{required:!0,errorMessage:"必填"}]},{default:u((()=>[o(n,{modelValue:e.form.exam["2.3.2"].indicatorValue,"onUpdate:modelValue":d[8]||(d[8]=a=>e.form.exam["2.3.2"].indicatorValue=a),type:"number",placeholder:"请输入"},null,8,["modelValue"]),o(c,null,{default:u((()=>[t("栋")])),_:1})])),_:1},8,["name"])])),_:1}),o(b,{style:{"margin-top":"20rpx"},title:"存在围护安全隐患的住宅数量",isFull:!0},{default:u((()=>[o(f,{label:"存在围护安全隐患的住宅数量(合计)",required:"",name:["exam","2.4","indicatorValue"],rules:[{required:!0,errorMessage:"必填"}]},{default:u((()=>[o(n,{modelValue:e.form.exam[2.4].indicatorValue,"onUpdate:modelValue":d[9]||(d[9]=a=>e.form.exam[2.4].indicatorValue=a),type:"number",placeholder:"请输入"},null,8,["modelValue"]),o(c,null,{default:u((()=>[t("栋")])),_:1})])),_:1},8,["name"]),o(f,{label:"存在外墙保温材料、装饰材料、悬挂设施、门窗玻璃等开裂、脱落、损坏等安全风险的住宅",required:"",name:["exam","2.4.1","indicatorValue"],rules:[{required:!0,errorMessage:"必填"}]},{default:u((()=>[o(n,{modelValue:e.form.exam["2.4.1"].indicatorValue,"onUpdate:modelValue":d[10]||(d[10]=a=>e.form.exam["2.4.1"].indicatorValue=a),type:"number",placeholder:"请输入"},null,8,["modelValue"]),o(c,null,{default:u((()=>[t("栋")])),_:1})])),_:1},8,["name"]),o(f,{label:"存在屋顶、外墙渗漏积水等问题的住宅",required:"",name:["exam","2.4.2","indicatorValue"],rules:[{required:!0,errorMessage:"必填"}]},{default:u((()=>[o(n,{modelValue:e.form.exam["2.4.2"].indicatorValue,"onUpdate:modelValue":d[11]||(d[11]=a=>e.form.exam["2.4.2"].indicatorValue=a),type:"number",placeholder:"请输入"},null,8,["modelValue"]),o(c,null,{default:u((()=>[t("栋")])),_:1})])),_:1},8,["name"])])),_:1}),o(b,{style:{"margin-top":"20rpx"},title:"住宅性能不达标的住宅数量",isFull:!0},{default:u((()=>[o(f,{label:"住宅性能不达标的住宅数量(合计)",required:"",name:["exam","2.5","indicatorValue"],rules:[{required:!0,errorMessage:"必填"}]},{default:u((()=>[o(n,{modelValue:e.form.exam[2.5].indicatorValue,"onUpdate:modelValue":d[12]||(d[12]=a=>e.form.exam[2.5].indicatorValue=a),type:"number",placeholder:"请输入"},null,8,["modelValue"]),o(c,null,{default:u((()=>[t("栋")])),_:1})])),_:1},8,["name"]),o(f,{label:"没有厨房、卫生间等基本功能空间的住宅",required:"",name:["exam","2.5.1","indicatorValue"],rules:[{required:!0,errorMessage:"必填"}]},{default:u((()=>[o(n,{modelValue:e.form.exam["2.5.1"].indicatorValue,"onUpdate:modelValue":d[13]||(d[13]=a=>e.form.exam["2.5.1"].indicatorValue=a),type:"number",placeholder:"请输入"},null,8,["modelValue"]),o(c,null,{default:u((()=>[t("栋")])),_:1})])),_:1},8,["name"]),o(f,{label:"有厨房、卫生间等基本功能空间，但存在采光、通风、照明、隔声等性能等方面问题的住宅",required:"",name:["exam","2.5.2","indicatorValue"],rules:[{required:!0,errorMessage:"必填"}]},{default:u((()=>[o(n,{modelValue:e.form.exam["2.5.2"].indicatorValue,"onUpdate:modelValue":d[14]||(d[14]=a=>e.form.exam["2.5.2"].indicatorValue=a),type:"number",placeholder:"请输入"},null,8,["modelValue"]),o(c,null,{default:u((()=>[t("栋")])),_:1})])),_:1},8,["name"])])),_:1}),o(b,{style:{"margin-top":"20rpx"},title:"需要进行适老化改造的住宅数量",isFull:!0},{default:u((()=>[o(f,{label:"需要进行适老化改造的住宅数量(合计)",required:"",name:["exam","2.8","indicatorValue"],rules:[{required:!0,errorMessage:"必填"}]},{default:u((()=>[o(n,{modelValue:e.form.exam[2.8].indicatorValue,"onUpdate:modelValue":d[15]||(d[15]=a=>e.form.exam[2.8].indicatorValue=a),type:"number",placeholder:"请输入"},null,8,["modelValue"]),o(c,null,{default:u((()=>[t("栋")])),_:1})])),_:1},8,["name"]),o(f,{label:"建成时未安装电梯的多层住宅中具备加装电梯条件，但尚未加装改造的住宅",required:"",name:["exam","2.8.1","indicatorValue"],rules:[{required:!0,errorMessage:"必填"}]},{default:u((()=>[o(n,{modelValue:e.form.exam["2.8.1"].indicatorValue,"onUpdate:modelValue":d[16]||(d[16]=a=>e.form.exam["2.8.1"].indicatorValue=a),type:"number",placeholder:"请输入"},null,8,["modelValue"]),o(c,null,{default:u((()=>[t("栋")])),_:1})])),_:1},8,["name"]),o(f,{label:"已有电梯或具备加装电梯条件的住宅，存在住宅出入口、门厅等公用区域以及住宅户内没有进行适老化改造的住宅",required:"",name:["exam","2.8.2","indicatorValue"],rules:[{required:!0,errorMessage:"必填"}]},{default:u((()=>[o(n,{modelValue:e.form.exam["2.8.2"].indicatorValue,"onUpdate:modelValue":d[17]||(d[17]=a=>e.form.exam["2.8.2"].indicatorValue=a),type:"number",placeholder:"请输入"},null,8,["modelValue"]),o(c,null,{default:u((()=>[t("栋")])),_:1})])),_:1},8,["name"])])),_:1})])),_:1})}},[["__scopeId","data-v-857666d6"]]),Z=M({__name:"index",props:{state:String,communityId:String,courtName:String},setup(i){const c=e(f("userInfo")||null),M=e("小区填报"),I=e(null),j=e(""),k=c.value?c.value.communityId:"";T((e=>{if(e.state){switch(e.state){case"0":M.value="小区暂存填报-"+e.courtName;break;case"1":M.value=e.courtName+"-待审核";break;case"2":M.value=e.courtName+"-审核通过";break;case"3":M.value=e.courtName+"-审核未通过"}j.value=e.state,N(e.communityId,e.courtName)}}));const N=async(e,a)=>{const l={communityId:e,courtName:a},r=await H(l);let{basicInfo:u,indicatorValueList:o}=r.data;u=L(u),u.courtType=u.courtType.split(";"),z.value.basic=R.assign(z.value.basic,u);const m={};o.forEach((e=>{m[e.indicatorId]=e})),z.value.exam=R.assign(z.value.exam,m)},O=e(0),w=["基本信息","现状情况"],C=e=>{O.value=e},Y=()=>({communityId:k,courtName:"1",indicatorId:"",indicatorValue:"",latitude:0,longitude:0,meno:0,reportYear:""}),z=e((()=>{const e={2.1:Y(),2.2:Y(),2.3:Y(),"2.3.1":Y(),"2.3.2":Y(),2.4:Y(),"2.4.1":Y(),"2.4.2":Y(),2.5:Y(),"2.5.1":Y(),"2.5.2":Y(),2.6:Y(),2.7:Y(),2.8:Y(),"2.8.1":Y(),"2.8.2":Y(),2.9:Y(),"2.10":Y()};return{basic:{courtName:"",communityId:k,courtType:[],courtTypeOther:"",buildTime:"",remodel:"",management:"",area:"",dateTime:"",numberDepartment:"",numberPeople:"",numberOver60People:"",numberBuilding:"",number13Building:"",number46Building:"",number79Building:"",numberOver10Building:"",reportYear:""},exam:e}})()),A=b((()=>(z.value.basic.court_name,!1))),E=async(e=1)=>{const a=Q().year(),l={...z.value.basic,state:e,dateTime:new Date,courtType:z.value.basic.courtType.join(";"),reportYear:a};y();const r=[];for(var u in z.value.exam){const e=z.value.exam[u];e.indicatorId=u,e.courtName=l.courtName,e.reportYear=a,r.push(e)}Promise.all([G(l),J(r)]).then((a=>{q();v({title:{0:"暂存成功",1:"提交成功"}[e],duration:2e3,icon:"none"}),setTimeout(h,800)}))};return(e,i)=>{const c=B(a("uv-navbar"),U),f=B(a("uni-notice-bar"),P),b=B(a("z-tabs"),F),y=B(a("uni-forms"),D),q=B(a("uv-button"),S),v=s;return l(),p(V,null,[o(c,{title:M.value,border:"",leftIconSize:"50rpx",placeholder:"",autoBack:""},null,8,["title"]),o(v,null,{default:u((()=>["3"===j.value?(l(),r(f,{key:0,text:"uni-app 版正式发布，开发一次，同时发布iOS、Android、H5、微信小程序、支付宝小程序、百度小程序、头条小程序等7大平台。"})):_("",!0),o(b,{list:w,onChange:C}),o(v,{class:g(["form-box",{mask:"1"==j.value||"2"==j.value}])},{default:u((()=>[o(y,{modelValue:z.value,"label-position":"top","label-width":"100%",class:"form",ref_key:"formRef",ref:I},{default:u((()=>[d(o(W,{form:z.value},null,8,["form"]),[[n,0==O.value]]),d(o(X,{form:z.value},null,8,["form"]),[[n,1==O.value]])])),_:1},8,["modelValue"]),o(v,{class:"btns"},{default:u((()=>[o(q,{class:"submit",disabled:m(A),type:"warning",onClick:i[0]||(i[0]=e=>!m(A)&&(console.log(z,666),void x({title:"小区表单暂存",content:"是否暂存小区表单？",success:e=>{e.confirm?E(0):e.cancel&&console.log("用户点击了取消")}})))},{default:u((()=>[t("暂存")])),_:1},8,["disabled"]),o(q,{class:"submit",type:"primary",onClick:i[1]||(i[1]=e=>{I.value.validate().then((e=>{x({title:"提交",content:"一旦提交不可修改,确定提交？",success:e=>{e.confirm?E():e.cancel&&console.log("用户点击了取消")}})})).catch((e=>{K("请填写完整")}))})},{default:u((()=>[t("提交")])),_:1})])),_:1})])),_:1},8,["class"])])),_:1})],64)}}},[["__scopeId","data-v-c9feb188"]]);export{Z as default};