import{r as e,e as a,o as l,c as r,w as u,a as o,u as d,j as m,v as n,b as i,k as t,i as s,l as c,g as V,m as f,f as p,F as b,p as _,q as x,h as q,t as g,x as y,y as h,d as v}from"./index-3120331b.js";import{_ as U}from"./uv-navbar.d68dac94.js";import{_ as M,r as B,o as I}from"./uni-app.es.25f5d80b.js";import{_ as T,h as N,y as j,r as k,m as F,a as O,b as w}from"./info.034e24bb.js";import{a as P,_ as C,b as D}from"./uni-forms.7a774e89.js";import{t as S,_ as Y}from"./toast.249a26b0.js";import{_ as z}from"./uni-data-picker.11b69934.js";import{_ as A}from"./uni-card.969fd93b.js";import{c as E,b as L,d as R,i as G,_ as H,e as J,f as K}from"./baseApi.6213607f.js";import{d as Q}from"./dayjs.min.b2c80d6d.js";import"./uv-icon.e9900608.js";import"./uni-icons.0b93f177.js";import"./uni-cloud.es.837cc618.js";const W=M({__name:"base",props:{form:{}},setup(V){const f=V,p=e([]);(async()=>{const e=await E();p.value=L(e.data)})();const b=e(1),_=e=>{b.value=e.detail.value,f.form.basic.buildTime=j[b.value]},x=()=>{},q=()=>{};return(e,f)=>{const g=B(a("uni-easyinput"),P),y=B(a("uni-forms-item"),C),h=B(a("uni-data-picker"),z),v=B(a("uni-data-checkbox"),T),U=t,M=s,I=c,O=B(a("uni-card"),A);return l(),r(M,{class:"content"},{default:u((()=>[o(O,{isFull:!0},{default:u((()=>[o(y,{required:"",label:"小区名称",name:["basic","courtName"],rules:[{required:!0,errorMessage:"小区名称必填"}]},{default:u((()=>[o(g,{type:"text",modelValue:V.form.basic.courtName,"onUpdate:modelValue":f[0]||(f[0]=e=>V.form.basic.courtName=e),placeholder:"请输入小区名称"},null,8,["modelValue"])])),_:1}),o(y,{required:"",label:"省市区街道社区",class:"community_area",name:["basic","communityId"],rules:[{required:!0,errorMessage:"地区必填"}]},{default:u((()=>[o(h,{readonly:"",localdata:p.value,modelValue:V.form.basic.communityId,"onUpdate:modelValue":f[1]||(f[1]=e=>V.form.basic.communityId=e),"popup-title":"请选择地区",onChange:q,onNodeclick:x},null,8,["localdata","modelValue"])])),_:1}),o(y,{class:"other_form_item",label:"小区类型",required:"",name:["basic","courtType"],rules:[{required:!0,errorMessage:"小区类型必填"}]},{default:u((()=>[o(v,{modelValue:V.form.basic.courtType,"onUpdate:modelValue":f[2]||(f[2]=e=>V.form.basic.courtType=e),localdata:d(N)},null,8,["modelValue","localdata"]),m(o(g,{modelValue:V.form.basic.courtTypeOther,"onUpdate:modelValue":f[3]||(f[3]=e=>V.form.basic.courtTypeOther=e),placeholder:"请输入其他"},null,8,["modelValue"]),[[n,"0"==V.form.basic.courtType]])])),_:1}),o(y,{label:"建造时间(年)",required:"",name:["basic","buildTime"],rules:[{required:!0,errorMessage:"建造时间必填"}]},{default:u((()=>[o(I,{onChange:_,value:b.value,range:d(j)},{default:u((()=>[o(M,{class:"arch-year"},{default:u((()=>[o(g,{suffixIcon:"bottom",modelValue:V.form.basic.buildTime,"onUpdate:modelValue":f[4]||(f[4]=e=>V.form.basic.buildTime=e),placeholder:"选择建造时间(年)"},null,8,["modelValue"]),i(),o(U,null,{default:u((()=>[i("年")])),_:1})])),_:1})])),_:1},8,["value","range"])])),_:1}),o(y,{label:"老旧小区改造情况",required:"",name:["basic","remodel"],rules:[{required:!0,errorMessage:"改造情况必填"}]},{default:u((()=>[o(v,{modelValue:V.form.basic.remodel,"onUpdate:modelValue":f[5]||(f[5]=e=>V.form.basic.remodel=e),localdata:d(k)},null,8,["modelValue","localdata"])])),_:1}),o(y,{label:"物业管理",required:"",name:["basic","management"],rules:[{required:!0,errorMessage:"物业管理必填"}]},{default:u((()=>[o(v,{modelValue:V.form.basic.management,"onUpdate:modelValue":f[6]||(f[6]=e=>V.form.basic.management=e),localdata:d(F)},null,8,["modelValue","localdata"])])),_:1}),o(y,{label:"总建筑面积",required:"",name:["basic","area"],rules:[{required:!0,errorMessage:"总建筑面积必填"}]},{default:u((()=>[o(g,{modelValue:V.form.basic.area,"onUpdate:modelValue":f[7]||(f[7]=e=>V.form.basic.area=e),type:"number",placeholder:"请输入总建筑面积"},null,8,["modelValue"]),o(U,null,{default:u((()=>[i("平方米")])),_:1})])),_:1}),o(y,{label:"住宅总套数",required:"",name:["basic","numberDepartment"],rules:[{required:!0,errorMessage:"住宅总套数必填"}]},{default:u((()=>[o(g,{modelValue:V.form.basic.numberDepartment,"onUpdate:modelValue":f[8]||(f[8]=e=>V.form.basic.numberDepartment=e),type:"number",placeholder:"请输入住宅总套数"},null,8,["modelValue"]),o(U,null,{default:u((()=>[i("套")])),_:1})])),_:1}),o(y,{label:"常住人口",required:"",name:["basic","numberPeople"],rules:[{required:!0,errorMessage:"常住人口必填"}]},{default:u((()=>[o(g,{modelValue:V.form.basic.numberPeople,"onUpdate:modelValue":f[9]||(f[9]=e=>V.form.basic.numberPeople=e),type:"number",placeholder:"请输入常住人口"},null,8,["modelValue"]),o(U,null,{default:u((()=>[i("人数")])),_:1})])),_:1}),o(y,{label:"六十岁以上常住人口",required:"",name:["basic","numberOver60People"],rules:[{required:!0,errorMessage:"六十岁以上常住人口必填"}]},{default:u((()=>[o(g,{modelValue:V.form.basic.numberOver60People,"onUpdate:modelValue":f[10]||(f[10]=e=>V.form.basic.numberOver60People=e),type:"number",placeholder:"请输入六十岁以上常住人口"},null,8,["modelValue"]),o(U,null,{default:u((()=>[i("人数")])),_:1})])),_:1})])),_:1}),o(O,{style:{"margin-top":"20rpx"},title:"建筑数量及层数",isFull:!0},{default:u((()=>[o(y,{label:"全部数量",required:"",name:["basic","numberBuilding"],rules:[{required:!0,errorMessage:"全部数量必填"}]},{default:u((()=>[o(g,{modelValue:V.form.basic.numberBuilding,"onUpdate:modelValue":f[11]||(f[11]=e=>V.form.basic.numberBuilding=e),type:"number",placeholder:"请输入全部建筑数量"},null,8,["modelValue"]),o(U,null,{default:u((()=>[i("栋")])),_:1})])),_:1}),o(y,{label:"1-3层",required:"",name:["basic","number13Building"],rules:[{required:!0,errorMessage:"1-3层数量必填"}]},{default:u((()=>[o(g,{modelValue:V.form.basic.number13Building,"onUpdate:modelValue":f[12]||(f[12]=e=>V.form.basic.number13Building=e),type:"number",placeholder:"请输入1-3层建筑数量"},null,8,["modelValue"]),o(U,null,{default:u((()=>[i("栋")])),_:1})])),_:1}),o(y,{label:"4-6层",required:"",name:["basic","number46Building"],rules:[{required:!0,errorMessage:"小区名称必填"}]},{default:u((()=>[o(g,{modelValue:V.form.basic.number46Building,"onUpdate:modelValue":f[13]||(f[13]=e=>V.form.basic.number46Building=e),type:"number",placeholder:"请输入4-6层建筑数量"},null,8,["modelValue"]),o(U,null,{default:u((()=>[i("栋")])),_:1})])),_:1}),o(y,{label:"7-9层",required:"",name:["basic","number79Building"],rules:[{required:!0,errorMessage:"7-9层建筑数量必填"}]},{default:u((()=>[o(g,{modelValue:V.form.basic.number79Building,"onUpdate:modelValue":f[14]||(f[14]=e=>V.form.basic.number79Building=e),type:"number",placeholder:"请输入7-9层建筑数量"},null,8,["modelValue"]),o(U,null,{default:u((()=>[i("栋")])),_:1})])),_:1}),o(y,{label:"10 层以上",required:"",name:["basic","numberOver10Building"],rules:[{required:!0,errorMessage:"10 层以上建筑数量必填"}]},{default:u((()=>[o(g,{modelValue:V.form.basic.numberOver10Building,"onUpdate:modelValue":f[15]||(f[15]=e=>V.form.basic.numberOver10Building=e),type:"number",placeholder:"请输入10 层以上建筑数量"},null,8,["modelValue"]),o(U,null,{default:u((()=>[i("栋")])),_:1})])),_:1})])),_:1})])),_:1})}}},[["__scopeId","data-v-333be671"]]),X=M({__name:"exam",props:{form:{}},setup:e=>(d,m)=>{const n=B(a("uni-easyinput"),P),c=t,V=B(a("uni-forms-item"),C),f=B(a("uni-card"),A),p=s;return l(),r(p,{class:"content"},{default:u((()=>[o(f,{title:"存在外墙安全隐患的住宅数量",isFull:!0},{default:u((()=>[o(V,{label:"存在外墙安全隐患的住宅数量(合计)",required:"",name:["exam","2.1","indicatorValue"],rules:[{required:!0,errorMessage:"必填"}]},{default:u((()=>[o(n,{modelValue:e.form.exam[2.1].indicatorValue,"onUpdate:modelValue":m[0]||(m[0]=a=>e.form.exam[2.1].indicatorValue=a),type:"number",placeholder:"请输入"},null,8,["modelValue"]),o(c,null,{default:u((()=>[i("栋")])),_:1})])),_:1},8,["name"]),o(V,{label:"墙体楼板出现肉眼清晰可见的裂缝（裂缝需深达结构基层，不是表皮抹灰开裂）",required:"",name:["exam","2.1.1","indicatorValue"],rules:[{required:!0,errorMessage:"必填"}]},{default:u((()=>[o(n,{modelValue:e.form.exam["2.1.1"].indicatorValue,"onUpdate:modelValue":m[1]||(m[1]=a=>e.form.exam["2.1.1"].indicatorValue=a),type:"number",placeholder:"请输入"},null,8,["modelValue"]),o(c,null,{default:u((()=>[i("栋")])),_:1})])),_:1},8,["name"]),o(V,{label:"砖混结构墙体主体出现砖体缺棱掉角、表面存在裂缝，砖与砂浆之间存在较大缝隙",required:"",name:["exam","2.1.2","indicatorValue"],rules:[{required:!0,errorMessage:"必填"}]},{default:u((()=>[o(n,{modelValue:e.form.exam["2.1.2"].indicatorValue,"onUpdate:modelValue":m[2]||(m[2]=a=>e.form.exam["2.1.2"].indicatorValue=a),type:"number",placeholder:"请输入"},null,8,["modelValue"]),o(c,null,{default:u((()=>[i("栋")])),_:1})])),_:1},8,["name"]),o(V,{label:"户内违规承重墙体拆墙或开洞，底商或地库违规拆除柱子，砖混结构拆除外窗窗下墙垛等",required:"",name:["exam","2.1.3","indicatorValue"],rules:[{required:!0,errorMessage:"必填"}]},{default:u((()=>[o(n,{modelValue:e.form.exam["2.1.3"].indicatorValue,"onUpdate:modelValue":m[3]||(m[3]=a=>e.form.exam["2.1.3"].indicatorValue=a),type:"number",placeholder:"请输入"},null,8,["modelValue"]),o(c,null,{default:u((()=>[i("栋")])),_:1})])),_:1},8,["name"]),o(V,{label:"违规加建悬挑飘窗",required:"",name:["exam","2.1.4","indicatorValue"],rules:[{required:!0,errorMessage:"必填"}]},{default:u((()=>[o(n,{modelValue:e.form.exam["2.1.4"].indicatorValue,"onUpdate:modelValue":m[4]||(m[4]=a=>e.form.exam["2.1.4"].indicatorValue=a),type:"number",placeholder:"请输入"},null,8,["modelValue"]),o(c,null,{default:u((()=>[i("栋")])),_:1})])),_:1},8,["name"])])),_:1}),o(f,{style:{"margin-top":"20rpx"},isFull:!0,title:"存在燃气安全隐患的住宅数量"},{default:u((()=>[o(V,{label:"户内燃气橡胶软管存在变硬变脆、龟裂、明显缺损、油污严重等老化破损现象或使用不合格产品",required:"",name:["exam","2.2","indicatorValue"],rules:[{required:!0,errorMessage:"必填"}]},{default:u((()=>[o(n,{modelValue:e.form.exam[2.2].indicatorValue,"onUpdate:modelValue":m[5]||(m[5]=a=>e.form.exam[2.2].indicatorValue=a),type:"number",placeholder:"请输入"},null,8,["modelValue"]),o(c,null,{default:u((()=>[i("栋")])),_:1})])),_:1},8,["name"])])),_:1}),o(f,{style:{"margin-top":"20rpx"},title:"存在楼道安全隐患的住宅数量",isFull:!0},{default:u((()=>[o(V,{label:"存在楼道安全隐患的住宅数量(合计)",required:"",name:["exam","2.3","indicatorValue"],rules:[{required:!0,errorMessage:"必填"}]},{default:u((()=>[o(n,{modelValue:e.form.exam[2.3].indicatorValue,"onUpdate:modelValue":m[6]||(m[6]=a=>e.form.exam[2.3].indicatorValue=a),type:"number",placeholder:"请输入"},null,8,["modelValue"]),o(c,null,{default:u((()=>[i("栋")])),_:1})])),_:1},8,["name"]),o(V,{label:"楼梯间内楼梯踏步缺损、楼梯扶手松动损坏、照明损坏缺失、安全护栏松动损坏或缺失",required:"",name:["exam","2.3.1","indicatorValue"],rules:[{required:!0,errorMessage:"必填"}]},{default:u((()=>[o(n,{modelValue:e.form.exam["2.3.1"].indicatorValue,"onUpdate:modelValue":m[7]||(m[7]=a=>e.form.exam["2.3.1"].indicatorValue=a),type:"number",placeholder:"请输入"},null,8,["modelValue"]),o(c,null,{default:u((()=>[i("栋")])),_:1})])),_:1},8,["name"]),o(V,{label:"通风井道、排风烟道等堵塞，造成通风不畅、异味串味",required:"",name:["exam","2.3.2","indicatorValue"],rules:[{required:!0,errorMessage:"必填"}]},{default:u((()=>[o(n,{modelValue:e.form.exam["2.3.2"].indicatorValue,"onUpdate:modelValue":m[8]||(m[8]=a=>e.form.exam["2.3.2"].indicatorValue=a),type:"number",placeholder:"请输入"},null,8,["modelValue"]),o(c,null,{default:u((()=>[i("栋")])),_:1})])),_:1},8,["name"]),o(V,{label:"消防门缺失、损坏、无法关闭",required:"",name:["exam","2.3.3","indicatorValue"],rules:[{required:!0,errorMessage:"必填"}]},{default:u((()=>[o(n,{modelValue:e.form.exam["2.3.3"].indicatorValue,"onUpdate:modelValue":m[9]||(m[9]=a=>e.form.exam["2.3.3"].indicatorValue=a),type:"number",placeholder:"请输入"},null,8,["modelValue"]),o(c,null,{default:u((()=>[i("栋")])),_:1})])),_:1},8,["name"]),o(V,{label:"消火栓无日常维护、老化损坏",required:"",name:["exam","2.3.4","indicatorValue"],rules:[{required:!0,errorMessage:"必填"}]},{default:u((()=>[o(n,{modelValue:e.form.exam["2.3.4"].indicatorValue,"onUpdate:modelValue":m[10]||(m[10]=a=>e.form.exam["2.3.4"].indicatorValue=a),type:"number",placeholder:"请输入"},null,8,["modelValue"]),o(c,null,{default:u((()=>[i("栋")])),_:1})])),_:1},8,["name"]),o(V,{label:"灭火器缺失、未设置灭火器保护设施",required:"",name:["exam","2.3.5","indicatorValue"],rules:[{required:!0,errorMessage:"必填"}]},{default:u((()=>[o(n,{modelValue:e.form.exam["2.3.5"].indicatorValue,"onUpdate:modelValue":m[11]||(m[11]=a=>e.form.exam["2.3.5"].indicatorValue=a),type:"number",placeholder:"请输入"},null,8,["modelValue"]),o(c,null,{default:u((()=>[i("栋")])),_:1})])),_:1},8,["name"]),o(V,{label:"消防安全出口指示灯损坏或者缺失",required:"",name:["exam","2.3.6","indicatorValue"],rules:[{required:!0,errorMessage:"必填"}]},{default:u((()=>[o(n,{modelValue:e.form.exam["2.3.6"].indicatorValue,"onUpdate:modelValue":m[12]||(m[12]=a=>e.form.exam["2.3.6"].indicatorValue=a),type:"number",placeholder:"请输入"},null,8,["modelValue"]),o(c,null,{default:u((()=>[i("栋")])),_:1})])),_:1},8,["name"]),o(V,{label:"违规占用消防楼梯、楼道、管道井等公共空间，用于堆放杂物",required:"",name:["exam","2.3.7","indicatorValue"],rules:[{required:!0,errorMessage:"必填"}]},{default:u((()=>[o(n,{modelValue:e.form.exam["2.3.7"].indicatorValue,"onUpdate:modelValue":m[13]||(m[13]=a=>e.form.exam["2.3.7"].indicatorValue=a),type:"number",placeholder:"请输入"},null,8,["modelValue"]),o(c,null,{default:u((()=>[i("栋")])),_:1})])),_:1},8,["name"])])),_:1}),o(f,{style:{"margin-top":"20rpx"},title:"存在围护安全隐患的住宅数量",isFull:!0},{default:u((()=>[o(V,{label:"存在围护安全隐患的住宅数量(合计)",required:"",name:["exam","2.4","indicatorValue"],rules:[{required:!0,errorMessage:"必填"}]},{default:u((()=>[o(n,{modelValue:e.form.exam[2.4].indicatorValue,"onUpdate:modelValue":m[14]||(m[14]=a=>e.form.exam[2.4].indicatorValue=a),type:"number",placeholder:"请输入"},null,8,["modelValue"]),o(c,null,{default:u((()=>[i("栋")])),_:1})])),_:1},8,["name"]),o(V,{label:"外墙装饰材料和保温材料开裂、损坏、脱落",required:"",name:["exam","2.4.1","indicatorValue"],rules:[{required:!0,errorMessage:"必填"}]},{default:u((()=>[o(n,{modelValue:e.form.exam["2.4.1"].indicatorValue,"onUpdate:modelValue":m[15]||(m[15]=a=>e.form.exam["2.4.1"].indicatorValue=a),type:"number",placeholder:"请输入"},null,8,["modelValue"]),o(c,null,{default:u((()=>[i("栋")])),_:1})])),_:1},8,["name"]),o(V,{label:"外墙悬挂设施不规范（如过大、过高）或损坏松脱的情况",required:"",name:["exam","2.4.2","indicatorValue"],rules:[{required:!0,errorMessage:"必填"}]},{default:u((()=>[o(n,{modelValue:e.form.exam["2.4.2"].indicatorValue,"onUpdate:modelValue":m[16]||(m[16]=a=>e.form.exam["2.4.2"].indicatorValue=a),type:"number",placeholder:"请输入"},null,8,["modelValue"]),o(c,null,{default:u((()=>[i("栋")])),_:1})])),_:1},8,["name"]),o(V,{label:"门窗玻璃存在破损、脱落等情况",required:"",name:["exam","2.4.3","indicatorValue"],rules:[{required:!0,errorMessage:"必填"}]},{default:u((()=>[o(n,{modelValue:e.form.exam["2.4.3"].indicatorValue,"onUpdate:modelValue":m[17]||(m[17]=a=>e.form.exam["2.4.3"].indicatorValue=a),type:"number",placeholder:"请输入"},null,8,["modelValue"]),o(c,null,{default:u((()=>[i("栋")])),_:1})])),_:1},8,["name"]),o(V,{label:"屋面排水不畅、漏水",required:"",name:["exam","2.4.4","indicatorValue"],rules:[{required:!0,errorMessage:"必填"}]},{default:u((()=>[o(n,{modelValue:e.form.exam["2.4.4"].indicatorValue,"onUpdate:modelValue":m[18]||(m[18]=a=>e.form.exam["2.4.4"].indicatorValue=a),type:"number",placeholder:"请输入"},null,8,["modelValue"]),o(c,null,{default:u((()=>[i("栋")])),_:1})])),_:1},8,["name"]),o(V,{label:"外墙内侧或地下室渗水漏水",required:"",name:["exam","2.4.5","indicatorValue"],rules:[{required:!0,errorMessage:"必填"}]},{default:u((()=>[o(n,{modelValue:e.form.exam["2.4.5"].indicatorValue,"onUpdate:modelValue":m[19]||(m[19]=a=>e.form.exam["2.4.5"].indicatorValue=a),type:"number",placeholder:"请输入"},null,8,["modelValue"]),o(c,null,{default:u((()=>[i("栋")])),_:1})])),_:1},8,["name"])])),_:1}),o(f,{style:{"margin-top":"20rpx"},title:"住宅性能不达标的住宅数量",isFull:!0},{default:u((()=>[o(V,{label:"住宅性能不达标的住宅数量(合计)",required:"",name:["exam","2.5","indicatorValue"],rules:[{required:!0,errorMessage:"必填"}]},{default:u((()=>[o(n,{modelValue:e.form.exam[2.5].indicatorValue,"onUpdate:modelValue":m[20]||(m[20]=a=>e.form.exam[2.5].indicatorValue=a),type:"number",placeholder:"请输入"},null,8,["modelValue"]),o(c,null,{default:u((()=>[i("栋")])),_:1})])),_:1},8,["name"]),o(V,{label:"没有独立厨房、卫生间等基本功能空间",required:"",name:["exam","2.5.1","indicatorValue"],rules:[{required:!0,errorMessage:"必填"}]},{default:u((()=>[o(n,{modelValue:e.form.exam["2.5.1"].indicatorValue,"onUpdate:modelValue":m[21]||(m[21]=a=>e.form.exam["2.5.1"].indicatorValue=a),type:"number",placeholder:"请输入"},null,8,["modelValue"]),o(c,null,{default:u((()=>[i("栋")])),_:1})])),_:1},8,["name"]),o(V,{label:"采光、通风等性能方面不达标",required:"",name:["exam","2.5.2","indicatorValue"],rules:[{required:!0,errorMessage:"必填"}]},{default:u((()=>[o(n,{modelValue:e.form.exam["2.5.2"].indicatorValue,"onUpdate:modelValue":m[22]||(m[22]=a=>e.form.exam["2.5.2"].indicatorValue=a),type:"number",placeholder:"请输入"},null,8,["modelValue"]),o(c,null,{default:u((()=>[i("栋")])),_:1})])),_:1},8,["name"])])),_:1}),o(f,{style:{"margin-top":"20rpx"},title:"存在管线管道破损的住宅数量",isFull:!0},{default:u((()=>[o(V,{label:"存在管线管道破损的住宅数量(合计)",required:"",name:["exam","2.6","indicatorValue"],rules:[{required:!0,errorMessage:"必填"}]},{default:u((()=>[o(n,{modelValue:e.form.exam[2.6].indicatorValue,"onUpdate:modelValue":m[23]||(m[23]=a=>e.form.exam[2.6].indicatorValue=a),type:"number",placeholder:"请输入"},null,8,["modelValue"]),o(c,null,{default:u((()=>[i("栋")])),_:1})])),_:1},8,["name"]),o(V,{label:"存在给水管线跑冒滴漏、排水管线老化破损、渗漏堵塞的问题",required:"",name:["exam","2.6.1","indicatorValue"],rules:[{required:!0,errorMessage:"必填"}]},{default:u((()=>[o(n,{modelValue:e.form.exam["2.6.1"].indicatorValue,"onUpdate:modelValue":m[24]||(m[24]=a=>e.form.exam["2.6.1"].indicatorValue=a),type:"number",placeholder:"请输入"},null,8,["modelValue"]),o(c,null,{default:u((()=>[i("栋")])),_:1})])),_:1},8,["name"]),o(V,{label:"存在采暖季温度不达标问题",required:"",name:["exam","2.6.2","indicatorValue"],rules:[{required:!0,errorMessage:"必填"}]},{default:u((()=>[o(n,{modelValue:e.form.exam["2.6.2"].indicatorValue,"onUpdate:modelValue":m[25]||(m[25]=a=>e.form.exam["2.6.2"].indicatorValue=a),type:"number",placeholder:"请输入"},null,8,["modelValue"]),o(c,null,{default:u((()=>[i("栋")])),_:1})])),_:1},8,["name"]),o(V,{label:"存在电力电信管线老化破损及裸露、私搭乱接的问题",required:"",name:["exam","2.6.3","indicatorValue"],rules:[{required:!0,errorMessage:"必填"}]},{default:u((()=>[o(n,{modelValue:e.form.exam["2.6.3"].indicatorValue,"onUpdate:modelValue":m[26]||(m[26]=a=>e.form.exam["2.6.3"].indicatorValue=a),type:"number",placeholder:"请输入"},null,8,["modelValue"]),o(c,null,{default:u((()=>[i("栋")])),_:1})])),_:1},8,["name"])])),_:1}),o(f,{style:{"margin-top":"20rpx"},title:"入户水质不达标的住宅数量",isFull:!0},{default:u((()=>[o(V,{label:"入户水质不达标的住宅数量(合计)",required:"",name:["exam","2.7","indicatorValue"],rules:[{required:!0,errorMessage:"必填"}]},{default:u((()=>[o(n,{modelValue:e.form.exam[2.7].indicatorValue,"onUpdate:modelValue":m[27]||(m[27]=a=>e.form.exam[2.7].indicatorValue=a),type:"number",placeholder:"请输入"},null,8,["modelValue"]),o(c,null,{default:u((()=>[i("栋")])),_:1})])),_:1},8,["name"]),o(V,{label:"入户水质不满足《生活饮用水卫生标准》",required:"",name:["exam","2.7","indicatorValue"],rules:[{required:!0,errorMessage:"必填"}]},{default:u((()=>[o(n,{modelValue:e.form.exam["2.7.1"].indicatorValue,"onUpdate:modelValue":m[28]||(m[28]=a=>e.form.exam["2.7.1"].indicatorValue=a),type:"number",placeholder:"请输入"},null,8,["modelValue"]),o(c,null,{default:u((()=>[i("栋")])),_:1})])),_:1},8,["name"]),o(V,{label:"存在居民用水水压不足问题",required:"",name:["exam","2.7","indicatorValue"],rules:[{required:!0,errorMessage:"必填"}]},{default:u((()=>[o(n,{modelValue:e.form.exam["2.7.2"].indicatorValue,"onUpdate:modelValue":m[29]||(m[29]=a=>e.form.exam["2.7.2"].indicatorValue=a),type:"number",placeholder:"请输入"},null,8,["modelValue"]),o(c,null,{default:u((()=>[i("栋")])),_:1})])),_:1},8,["name"])])),_:1}),o(f,{style:{"margin-top":"20rpx"},title:"需要进行适老化改造的住宅数量",isFull:!0},{default:u((()=>[o(V,{label:"需要进行适老化改造的住宅数量(合计)",required:"",name:["exam","2.8","indicatorValue"],rules:[{required:!0,errorMessage:"必填"}]},{default:u((()=>[o(n,{modelValue:e.form.exam[2.8].indicatorValue,"onUpdate:modelValue":m[30]||(m[30]=a=>e.form.exam[2.8].indicatorValue=a),type:"number",placeholder:"请输入"},null,8,["modelValue"]),o(c,null,{default:u((()=>[i("栋")])),_:1})])),_:1},8,["name"]),o(V,{label:"建成时未安装电梯的多层住宅中具备加装电梯条件，但尚未加装改造",required:"",name:["exam","2.8.1","indicatorValue"],rules:[{required:!0,errorMessage:"必填"}]},{default:u((()=>[o(n,{modelValue:e.form.exam["2.8.1"].indicatorValue,"onUpdate:modelValue":m[31]||(m[31]=a=>e.form.exam["2.8.1"].indicatorValue=a),type:"number",placeholder:"请输入"},null,8,["modelValue"]),o(c,null,{default:u((()=>[i("栋")])),_:1})])),_:1},8,["name"]),o(V,{label:"住宅单元出入口和通道未进行无障碍改造、地面防滑处理",required:"",name:["exam","2.8.2","indicatorValue"],rules:[{required:!0,errorMessage:"必填"}]},{default:u((()=>[o(n,{modelValue:e.form.exam["2.8.2"].indicatorValue,"onUpdate:modelValue":m[32]||(m[32]=a=>e.form.exam["2.8.2"].indicatorValue=a),type:"number",placeholder:"请输入"},null,8,["modelValue"]),o(c,null,{default:u((()=>[i("栋")])),_:1})])),_:1},8,["name"]),o(V,{label:"楼梯间未沿墙加装扶手",required:"",name:["exam","2.8.3","indicatorValue"],rules:[{required:!0,errorMessage:"必填"}]},{default:u((()=>[o(n,{modelValue:e.form.exam["2.8.3"].indicatorValue,"onUpdate:modelValue":m[33]||(m[33]=a=>e.form.exam["2.8.3"].indicatorValue=a),type:"number",placeholder:"请输入"},null,8,["modelValue"]),o(c,null,{default:u((()=>[i("栋")])),_:1})])),_:1},8,["name"]),o(V,{label:"纳入分散供养特困人员和建档立卡贫困人口范围的高龄、失能、残疾老年人等特殊困难老年人家庭未实施适老化改造",required:"",name:["exam","2.8.4","indicatorValue"],rules:[{required:!0,errorMessage:"必填"}]},{default:u((()=>[o(n,{modelValue:e.form.exam["2.8.4"].indicatorValue,"onUpdate:modelValue":m[34]||(m[34]=a=>e.form.exam["2.8.4"].indicatorValue=a),type:"number",placeholder:"请输入"},null,8,["modelValue"]),o(c,null,{default:u((()=>[i("栋")])),_:1})])),_:1},8,["name"])])),_:1}),o(f,{style:{"margin-top":"20rpx"},title:"需要进行节能改造的住宅数量",isFull:!0},{default:u((()=>[o(V,{label:"具备节能改造价值但尚未进行节能改造",required:"",name:["exam","2.9","indicatorValue"],rules:[{required:!0,errorMessage:"必填"}]},{default:u((()=>[o(n,{modelValue:e.form.exam[2.9].indicatorValue,"onUpdate:modelValue":m[35]||(m[35]=a=>e.form.exam[2.9].indicatorValue=a),type:"number",placeholder:"请输入"},null,8,["modelValue"]),o(c,null,{default:u((()=>[i("栋")])),_:1})])),_:1},8,["name"])])),_:1}),o(f,{style:{"margin-top":"20rpx"},isFull:!0,title:"需要进行数字化改造的住宅数量"},{default:u((()=>[o(V,{label:"需要进行数字化改造的住宅数量(合计)",required:"",name:["exam","2.10","indicatorValue"],rules:[{required:!0,errorMessage:"必填"}]},{default:u((()=>[o(n,{modelValue:e.form.exam["2.10"].indicatorValue,"onUpdate:modelValue":m[36]||(m[36]=a=>e.form.exam["2.10"].indicatorValue=a),type:"number",placeholder:"请输入"},null,8,["modelValue"]),o(c,null,{default:u((()=>[i("栋")])),_:1})])),_:1},8,["name"]),o(V,{label:"不具备光纤入户条件",required:"",name:["exam","2.10.1","indicatorValue"],rules:[{required:!0,errorMessage:"必填"}]},{default:u((()=>[o(n,{modelValue:e.form.exam["2.10.1"].indicatorValue,"onUpdate:modelValue":m[37]||(m[37]=a=>e.form.exam["2.10.1"].indicatorValue=a),type:"number",placeholder:"请输入"},null,8,["modelValue"]),o(c,null,{default:u((()=>[i("栋")])),_:1})])),_:1},8,["name"]),o(V,{label:"住宅公共空间未安装楼宇入侵报警、视频监控等安防检测设备",required:"",name:["exam","2.10.2","indicatorValue"],rules:[{required:!0,errorMessage:"必填"}]},{default:u((()=>[o(n,{modelValue:e.form.exam["2.10.2"].indicatorValue,"onUpdate:modelValue":m[38]||(m[38]=a=>e.form.exam["2.10.2"].indicatorValue=a),type:"number",placeholder:"请输入"},null,8,["modelValue"]),o(c,null,{default:u((()=>[i("栋")])),_:1})])),_:1},8,["name"]),o(V,{label:"高层住宅的楼梯间、走道、候梯厅、门厅等公共部位未安装烟感报警器",required:"",name:["exam","2.10.3","indicatorValue"],rules:[{required:!0,errorMessage:"必填"}]},{default:u((()=>[o(n,{modelValue:e.form.exam["2.10.3"].indicatorValue,"onUpdate:modelValue":m[39]||(m[39]=a=>e.form.exam["2.10.3"].indicatorValue=a),type:"number",placeholder:"请输入"},null,8,["modelValue"]),o(c,null,{default:u((()=>[i("栋")])),_:1})])),_:1},8,["name"]),o(V,{label:"未安装家庭健康紧急呼叫系统，无法保障有需要的居家老年人、残疾人安装一键紧急呼叫、安全监护无感化监测等智能产品",required:"",name:["exam","2.10.4","indicatorValue"],rules:[{required:!0,errorMessage:"必填"}]},{default:u((()=>[o(n,{modelValue:e.form.exam["2.10.4"].indicatorValue,"onUpdate:modelValue":m[40]||(m[40]=a=>e.form.exam["2.10.4"].indicatorValue=a),type:"number",placeholder:"请输入"},null,8,["modelValue"]),o(c,null,{default:u((()=>[i("栋")])),_:1})])),_:1},8,["name"])])),_:1})])),_:1})}},[["__scopeId","data-v-a357ce57"]]),Z=M({__name:"index",props:{state:String,communityId:String,courtName:String},setup(t){const c=e(V("userInfo")||null),M=e("小区填报"),T=e(null),N=e(""),j=c.value?c.value.communityId:"",k=c.value?c.value.communityName:"";I((e=>{if(e.state){switch(e.state){case"0":M.value="小区暂存填报-"+e.courtName;break;case"1":M.value=e.courtName+"-待审核";break;case"2":M.value=e.courtName+"-审核通过";break;case"3":M.value=e.courtName+"-审核未通过"}N.value=e.state,F(e.communityId,e.courtName)}}));const F=async(e,a)=>{const l={communityId:e,courtName:a},r=await R(l);let{basicInfo:u,indicatorValueList:o}=r.data;u=G(u),E.value.basic=H.assign(E.value.basic,u);const d={};o.forEach((e=>{d[e.indicatorId]=e})),E.value.exam=H.assign(E.value.exam,d)},P=e(0),C=["基本信息","现状情况"],z=e=>{P.value=e},A=()=>({communityId:j,courtName:"1",indicatorId:"",indicatorValue:"",latitude:0,longitude:0,meno:0,reportYear:""}),E=e((()=>{const e={2.1:A(),"2.1.1":A(),"2.1.2":A(),"2.1.3":A(),"2.1.4":A(),2.2:A(),2.3:A(),"2.3.1":A(),"2.3.2":A(),"2.3.3":A(),"2.3.4":A(),"2.3.5":A(),"2.3.6":A(),"2.3.7":A(),2.4:A(),"2.4.1":A(),"2.4.2":A(),"2.4.3":A(),"2.4.4":A(),"2.4.5":A(),2.5:A(),"2.5.1":A(),"2.5.2":A(),2.6:A(),"2.6.1":A(),"2.6.2":A(),"2.6.3":A(),2.7:A(),"2.7.1":A(),"2.7.2":A(),2.8:A(),"2.8.1":A(),"2.8.2":A(),"2.8.3":A(),"2.8.4":A(),2.9:A(),"2.10":A(),"2.10.1":A(),"2.10.2":A(),"2.10.3":A(),"2.10.4":A()};return{basic:{courtName:"",communityId:j,communityName:k,courtType:[],courtTypeOther:"",buildTime:"",remodel:"",management:"",area:"",dateTime:"",numberDepartment:"",numberPeople:"",numberOver60People:"",numberBuilding:"",number13Building:"",number46Building:"",number79Building:"",numberOver10Building:"",reportYear:"",reviewComment:""},exam:e}})()),L=f((()=>!E.value.basic.courtName)),Z=async(e=1)=>{const a=Q().year(),l={...E.value.basic,state:e,dateTime:new Date,courtTypeOther:"0"==E.value.basic.courtType?E.value.basic.courtTypeOther:"",reportYear:a};g();const r=[];for(var u in E.value.exam){const e=E.value.exam[u];e.indicatorId=u,e.courtName=l.courtName,e.reportYear=a,r.push(e)}Promise.all([J(l),K(r)]).then((a=>{y();h({title:{0:"暂存成功",1:"提交成功"}[e],duration:2e3,icon:"none"}),setTimeout((()=>{v({url:"/pages/home/index"})}),800)}))};return(e,t)=>{const c=B(a("uv-navbar"),U),V=B(a("uni-notice-bar"),O),f=B(a("z-tabs"),w),g=B(a("uni-forms"),D),y=B(a("uv-button"),Y),h=s;return l(),p(b,null,[o(c,{title:M.value,border:"",leftIconSize:"50rpx",placeholder:"",autoBack:""},null,8,["title"]),o(h,null,{default:u((()=>["3"===N.value?(l(),r(V,{key:0,text:"审核不通过意见："+E.value.basic.reviewComment},null,8,["text"])):_("",!0),o(f,{list:C,onChange:z}),o(h,{class:x(["form-box",{mask:"1"==N.value||"2"==N.value}])},{default:u((()=>[o(g,{modelValue:E.value,"label-position":"top","label-width":"100%",class:"form",ref_key:"formRef",ref:T},{default:u((()=>[m(o(W,{form:E.value},null,8,["form"]),[[n,0==P.value]]),m(o(X,{form:E.value},null,8,["form"]),[[n,1==P.value]])])),_:1},8,["modelValue"]),o(h,{class:"btns"},{default:u((()=>[o(y,{class:"submit",disabled:d(L),type:"warning",onClick:t[0]||(t[0]=e=>!d(L)&&(console.log(E,666),void q({title:"小区表单暂存",content:"是否暂存小区表单？",success:e=>{e.confirm?Z(0):e.cancel&&console.log("用户点击了取消")}})))},{default:u((()=>[i("暂存")])),_:1},8,["disabled"]),o(y,{class:"submit",type:"primary",onClick:t[1]||(t[1]=e=>{T.value.validate().then((e=>{q({title:"提交",content:"一旦提交不可修改,确定提交？",success:e=>{e.confirm?Z():e.cancel&&console.log("用户点击了取消")}})})).catch((e=>{S("请填写完整")}))})},{default:u((()=>[i("提交")])),_:1})])),_:1})])),_:1},8,["class"])])),_:1})],64)}}},[["__scopeId","data-v-42b1aea0"]]);export{Z as default};
