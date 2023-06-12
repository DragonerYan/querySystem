import{o as e,c as a,w as l,a as o,q as n,D as r,G as t,b as i,B as u,p as d,i as m,k as s,e as c,u as p,j as f,v as V,n as _,r as b,g,t as v,x as y,H as q,f as h,F as U,I as k,s as M,h as F,y as x,J as S,z as C}from"./index-93422e90.js";import{_ as j}from"./uv-navbar.536f1c70.js";import{_ as I,r as z,o as N,a as T}from"./uni-app.es.1373d43e.js";import{_ as w,s as A,e as P,c as Y,d as D,p as $,f as B,g as H,i as O,j as E,k as G,a as J,b as L,l as R}from"./info.5367443e.js";import{_ as K,a as Q,b as W}from"./uni-forms.f3c5ebdb.js";import{_ as X}from"./uv-button.42436f61.js";import{_ as Z}from"./uni-card.aef5c7c5.js";import{f as ee,o as ae,_ as le,b as oe,i as ne,h as re,e as te}from"./baseApi.a7600fac.js";import{t as ie}from"./toast.7b8a428a.js";import{d as ue}from"./dayjs.min.1c2de08a.js";import"./uv-icon.4fb46f40.js";import"./uni-cloud.es.789f472f.js";const de=I({name:"UniSection",emits:["click"],props:{type:{type:String,default:""},title:{type:String,required:!0,default:""},titleFontSize:{type:String,default:"14px"},titleColor:{type:String,default:"#333"},subTitle:{type:String,default:""},subTitleFontSize:{type:String,default:"12px"},subTitleColor:{type:String,default:"#999"},padding:{type:[Boolean,String],default:!1}},computed:{_padding(){return"string"==typeof this.padding?this.padding:this.padding?"10px":""}},watch:{title(e){uni.report&&""!==e&&uni.report("title",e)}},methods:{onClick(){this.$emit("click")}}},[["render",function(c,p,f,V,_,b){const g=m,v=s;return e(),a(g,{class:"uni-section"},{default:l((()=>[o(g,{class:"uni-section-header",onClick:b.onClick},{default:l((()=>[f.type?(e(),a(g,{key:0,class:n(["uni-section-header__decoration",f.type])},null,8,["class"])):r(c.$slots,"decoration",{key:1},void 0,!0),o(g,{class:"uni-section-header__content"},{default:l((()=>[o(v,{style:t({"font-size":f.titleFontSize,color:f.titleColor}),class:n(["uni-section__content-title",{distraction:!f.subTitle}])},{default:l((()=>[i(u(f.title),1)])),_:1},8,["style","class"]),f.subTitle?(e(),a(v,{key:0,style:t({"font-size":f.subTitleFontSize,color:f.subTitleColor}),class:"uni-section-header__content-sub"},{default:l((()=>[i(u(f.subTitle),1)])),_:1},8,["style"])):d("",!0)])),_:1}),o(g,{class:"uni-section-header__slot-right"},{default:l((()=>[r(c.$slots,"right",{},void 0,!0)])),_:3})])),_:3},8,["onClick"]),o(g,{class:"uni-section-content",style:t({padding:b._padding})},{default:l((()=>[r(c.$slots,"default",{},void 0,!0)])),_:3},8,["style"])])),_:3})}],["__scopeId","data-v-0a8818d5"]]),me={__name:"base",props:{form:{}},setup:n=>(r,t)=>{const d=s,p=z(c("uni-forms-item"),K),f=z(c("uni-easyinput"),Q),V=z(c("uni-card"),Z),_=m;return e(),a(_,{class:"content"},{default:l((()=>[o(V,{isFull:!0},{default:l((()=>[o(p,{required:"",label:"行政社区名称",name:["basic","communityName"],rules:[{required:!0,errorMessage:"必填"}]},{default:l((()=>[o(d,null,{default:l((()=>[i(u(n.form.basic.communityName),1)])),_:1})])),_:1}),o(p,{required:"",label:"社区面积",name:["basic","area"],rules:[{required:!0,errorMessage:"必填"}]},{default:l((()=>[o(f,{modelValue:n.form.basic.area,"onUpdate:modelValue":t[0]||(t[0]=e=>n.form.basic.area=e),type:"number",placeholder:"请输入社区面积"},null,8,["modelValue"]),o(d,null,{default:l((()=>[i("公顷")])),_:1})])),_:1}),o(p,{required:"",label:"社区管辖范围内的小区数量",name:["basic","numberCourt"],rules:[{required:!0,errorMessage:"必填"}]},{default:l((()=>[o(f,{modelValue:n.form.basic.numberCourt,"onUpdate:modelValue":t[1]||(t[1]=e=>n.form.basic.numberCourt=e),type:"number",placeholder:"请输入社区管辖范围内的小区数量"},null,8,["modelValue"]),o(d,null,{default:l((()=>[i("个")])),_:1})])),_:1}),o(p,{required:"",label:"覆盖居民人数",name:["basic","numberPeople"],rules:[{required:!0,errorMessage:"必填"}]},{default:l((()=>[o(f,{modelValue:n.form.basic.numberPeople,"onUpdate:modelValue":t[2]||(t[2]=e=>n.form.basic.numberPeople=e),type:"number",placeholder:"请输入覆盖居民人数"},null,8,["modelValue"]),o(d,null,{default:l((()=>[i("人")])),_:1})])),_:1}),o(p,{required:"",label:"覆盖居民户数",name:["basic","numberFamily"],rules:[{required:!0,errorMessage:"必填"}]},{default:l((()=>[o(f,{modelValue:n.form.basic.numberFamily,"onUpdate:modelValue":t[3]||(t[3]=e=>n.form.basic.numberFamily=e),type:"number",placeholder:"请输入覆盖居民户数"},null,8,["modelValue"]),o(d,null,{default:l((()=>[i("户")])),_:1})])),_:1})])),_:1})])),_:1})}},se={__name:"environment",props:{form:{}},setup:n=>(r,t)=>{const i=z(c("uni-data-checkbox"),w),u=z(c("uni-forms-item"),K),d=z(c("uni-card"),Z),s=z(c("uni-easyinput"),Q),_=m;return e(),a(_,{class:"content"},{default:l((()=>[o(d,{title:"公共活动场地",isFull:!0},{default:l((()=>[o(u,{label:"社区公共活动场地面积是否达标（既有社区，用地面积不小于150平方米。新建社区，用地面积不小于800平方米）",required:"",name:["environment","3.2.7.1","indicatorValue"],rules:[{required:!0,errorMessage:"必填"}]},{default:l((()=>[o(i,{modelValue:n.form.environment["3.2.7.1"].indicatorValue,"onUpdate:modelValue":t[0]||(t[0]=e=>n.form.environment["3.2.7.1"].indicatorValue=e),localdata:p(A)},null,8,["modelValue","localdata"])])),_:1},8,["name"]),o(u,{label:"公共绿地面积是否达标（既有社区至少有一片公共活动场地。新建社区，用地面积不小于4000平方米）",required:"",name:["environment","3.2.7.2","indicatorValue"],rules:[{required:!0,errorMessage:"必填"}]},{default:l((()=>[o(i,{modelValue:n.form.environment["3.2.7.2"].indicatorValue,"onUpdate:modelValue":t[1]||(t[1]=e=>n.form.environment["3.2.7.2"].indicatorValue=e),localdata:p(A)},null,8,["modelValue","localdata"])])),_:1},8,["name"]),o(u,{label:"是否存在以下设施设备不充足或破损",required:"",name:["environment","3.2.7.3","indicatorValue"],rules:[{required:!0,errorMessage:"必填"}]},{default:l((()=>[o(i,{modelValue:n.form.environment["3.2.7.3"].indicatorValue,"onUpdate:modelValue":t[2]||(t[2]=e=>n.form.environment["3.2.7.3"].indicatorValue=e),multiple:"",localdata:p(P)},null,8,["modelValue","localdata"])])),_:1},8,["name"]),o(u,{label:"是否符合无障碍设计要求",required:"",name:["environment","3.2.7.4","indicatorValue"],rules:[{required:!0,errorMessage:"必填"}]},{default:l((()=>[o(i,{modelValue:n.form.environment["3.2.7.4"].indicatorValue,"onUpdate:modelValue":t[3]||(t[3]=e=>n.form.environment["3.2.7.4"].indicatorValue=e),localdata:p(A)},null,8,["modelValue","localdata"])])),_:1},8,["name"]),o(u,{label:"是否存在私搭乱建问题",required:"",name:["environment","3.2.7.5","indicatorValue"],rules:[{required:!0,errorMessage:"必填"}]},{default:l((()=>[o(i,{modelValue:n.form.environment["3.2.7.5"].indicatorValue,"onUpdate:modelValue":t[4]||(t[4]=e=>n.form.environment["3.2.7.5"].indicatorValue=e),localdata:p(A)},null,8,["modelValue","localdata"])])),_:1},8,["name"])])),_:1}),o(d,{style:{"margin-top":"20rpx"},title:"步行道",isFull:!0},{default:l((()=>[o(u,{class:"other_form_item",label:"人行道是否存在以下问题",required:"",name:["environment","3.2.8.1","indicatorValue"],rules:[{required:!0,errorMessage:"必填"}]},{default:l((()=>[o(i,{modelValue:n.form.environment["3.2.8.1"].indicatorValue,"onUpdate:modelValue":t[5]||(t[5]=e=>n.form.environment["3.2.8.1"].indicatorValue=e),multiple:"",localdata:p(Y)},null,8,["modelValue","localdata"]),f(o(s,{modelValue:n.form.environment["3.2.8.1"].meno,"onUpdate:modelValue":t[6]||(t[6]=e=>n.form.environment["3.2.8.1"].meno=e),placeholder:"请输入其他"},null,8,["modelValue"]),[[V,n.form.environment["3.2.8.1"].indicatorValue.some((e=>"3.2.8.1.7"==e))]])])),_:1},8,["name"])])),_:1}),o(d,{style:{"margin-top":"20rpx"},title:"垃圾分类",isFull:!0},{default:l((()=>[o(u,{class:"other_form_item",label:"是否存在以下问题",required:"",name:["environment","3.2.9.1","indicatorValue"],rules:[{required:!0,errorMessage:"必填"}]},{default:l((()=>[o(i,{modelValue:n.form.environment["3.2.9.1"].indicatorValue,"onUpdate:modelValue":t[7]||(t[7]=e=>n.form.environment["3.2.9.1"].indicatorValue=e),multiple:"",localdata:p(D)},null,8,["modelValue","localdata"]),f(o(s,{modelValue:n.form.environment["3.2.9.1"].meno,"onUpdate:modelValue":t[8]||(t[8]=e=>n.form.environment["3.2.9.1"].meno=e),placeholder:"请输入其他"},null,8,["modelValue"]),[[V,n.form.environment["3.2.9.1"].indicatorValue.some((e=>"3.2.9.1.3"==e))]])])),_:1},8,["name"])])),_:1})])),_:1})}},ce={__name:"manage",props:{form:{}},setup:n=>(r,t)=>{const i=z(c("uni-data-checkbox"),w),u=z(c("uni-easyinput"),Q),d=z(c("uni-forms-item"),K),s=z(c("uni-card"),Z),_=m;return e(),a(_,{class:"content"},{default:l((()=>[o(s,{title:"物业管理",isFull:!0},{default:l((()=>[o(d,{class:"other_form_item",label:"是否存在以下问题",required:"",name:["manage","3.3.10.1","indicatorValue"],rules:[{required:!0,errorMessage:"必填"}]},{default:l((()=>[o(i,{modelValue:n.form.manage["3.3.10.1"].indicatorValue,"onUpdate:modelValue":t[0]||(t[0]=e=>n.form.manage["3.3.10.1"].indicatorValue=e),multiple:"",localdata:p($)},null,8,["modelValue","localdata"]),f(o(u,{modelValue:n.form.manage["3.3.10.1"].meno,"onUpdate:modelValue":t[1]||(t[1]=e=>n.form.manage["3.3.10.1"].meno=e),placeholder:"请输入其他"},null,8,["modelValue"]),[[V,n.form.manage["3.3.10.1"].indicatorValue.some((e=>"3.3.10.1.6"==e))]])])),_:1},8,["name"])])),_:1}),o(s,{style:{"margin-top":"20rpx"},title:"智慧化改造",isFull:!0},{default:l((()=>[o(d,{class:"other_form_item",label:"是否存在以下问题",required:"",name:["manage","3.3.11.1","indicatorValue"],rules:[{required:!0,errorMessage:"必填"}]},{default:l((()=>[o(i,{modelValue:n.form.manage["3.3.11.1"].indicatorValue,"onUpdate:modelValue":t[2]||(t[2]=e=>n.form.manage["3.3.11.1"].indicatorValue=e),multiple:"",localdata:p(B)},null,8,["modelValue","localdata"]),f(o(u,{modelValue:n.form.manage["3.3.11.1"].meno,"onUpdate:modelValue":t[3]||(t[3]=e=>n.form.manage["3.3.11.1"].meno=e),placeholder:"请输入其他"},null,8,["modelValue"]),[[V,n.form.manage["3.3.11.1"].indicatorValue.some((e=>"3.3.11.1.3"==e))]])])),_:1},8,["name"]),o(d,{class:"other_form_item",label:"有条件的社区，是否在以下方面存在差距",required:"",name:["manage","3.3.11.2","indicatorValue"],rules:[{required:!0,errorMessage:"必填"}]},{default:l((()=>[o(i,{modelValue:n.form.manage["3.3.11.2"].indicatorValue,"onUpdate:modelValue":t[4]||(t[4]=e=>n.form.manage["3.3.11.2"].indicatorValue=e),multiple:"",localdata:p(H)},null,8,["modelValue","localdata"]),f(o(u,{modelValue:n.form.manage["3.3.11.2"].meno,"onUpdate:modelValue":t[5]||(t[5]=e=>n.form.manage["3.3.11.2"].meno=e),placeholder:"请输入其他"},null,8,["modelValue"]),[[V,n.form.manage["3.3.11.2"].indicatorValue.some((e=>"3.3.11.2.5"==e))]])])),_:1},8,["name"])])),_:1})])),_:1})}},pe={__name:"pension",props:{form:{}},setup(n){const r=(e,a)=>{_({url:"/pages/home/map?"+ae({keyword:a,key:e})})};return(t,u)=>{const d=s,_=z(c("uni-icons"),ee),b=m,g=z(c("uni-data-checkbox"),w),v=z(c("uni-forms-item"),K),y=z(c("uni-easyinput"),Q),q=z(c("uni-card"),Z);return e(),a(b,{class:"content"},{default:l((()=>[o(q,{title:"社区养老服务设施",isFull:!0},{title:l((()=>[o(b,{class:"card-title"},{default:l((()=>[o(d,null,{default:l((()=>[i("社区养老服务设施")])),_:1}),o(_,{type:"location",size:"24",onClick:u[0]||(u[0]=e=>r("3.1.1","社区养老"))})])),_:1})])),default:l((()=>[o(v,{label:"是否配建",required:"",name:["pension","3.1.1.1","indicatorValue"],rules:[{required:!0,errorMessage:"必填"}]},{default:l((()=>[o(g,{modelValue:n.form.pension["3.1.1.1"].indicatorValue,"onUpdate:modelValue":u[1]||(u[1]=e=>n.form.pension["3.1.1.1"].indicatorValue=e),localdata:p(A)},null,8,["modelValue","localdata"])])),_:1},8,["name"]),o(v,{label:"面积是否达标（建筑面积不小于350平方米）",required:"",name:["pension","3.1.1.2","indicatorValue"],rules:[{required:!0,errorMessage:"必填"}]},{default:l((()=>[o(g,{modelValue:n.form.pension["3.1.1.2"].indicatorValue,"onUpdate:modelValue":u[2]||(u[2]=e=>n.form.pension["3.1.1.2"].indicatorValue=e),localdata:p(A)},null,8,["modelValue","localdata"])])),_:1},8,["name"]),o(v,{class:"other_form_item",label:"是否存在以下养老服务不健全的问题",required:"",name:["pension","3.1.1.3","indicatorValue"],rules:[{required:!0,errorMessage:"必填"}]},{default:l((()=>[o(g,{modelValue:n.form.pension["3.1.1.3"].indicatorValue,"onUpdate:modelValue":u[3]||(u[3]=e=>n.form.pension["3.1.1.3"].indicatorValue=e),multiple:"",localdata:p(O)},null,8,["modelValue","localdata"]),f(o(y,{modelValue:n.form.pension["3.1.1.3"].meno,"onUpdate:modelValue":u[4]||(u[4]=e=>n.form.pension["3.1.1.3"].meno=e),placeholder:"请输入其他"},null,8,["modelValue"]),[[V,n.form.pension["3.1.1.3"].indicatorValue.some((e=>"3.1.1.3.6"==e))]])])),_:1},8,["name"])])),_:1}),o(q,{style:{"margin-top":"20rpx"},title:"婴幼儿照护服务设施",isFull:!0},{title:l((()=>[o(b,{class:"card-title"},{default:l((()=>[o(d,null,{default:l((()=>[i("婴幼儿照护服务设施")])),_:1}),o(_,{type:"location",size:"24",onClick:u[5]||(u[5]=e=>r("3.1.2","婴幼儿照护"))})])),_:1})])),default:l((()=>[o(v,{label:"是否配建",required:"",name:["pension","3.1.2.1","indicatorValue"],rules:[{required:!0,errorMessage:"必填"}]},{default:l((()=>[o(g,{modelValue:n.form.pension["3.1.2.1"].indicatorValue,"onUpdate:modelValue":u[6]||(u[6]=e=>n.form.pension["3.1.2.1"].indicatorValue=e),localdata:p(A)},null,8,["modelValue","localdata"])])),_:1},8,["name"]),o(v,{label:"面积是否达标（建筑面积不小于200平方米）",required:"",name:["pension","3.1.2.2","indicatorValue"],rules:[{required:!0,errorMessage:"必填"}]},{default:l((()=>[o(g,{modelValue:n.form.pension["3.1.2.2"].indicatorValue,"onUpdate:modelValue":u[7]||(u[7]=e=>n.form.pension["3.1.2.2"].indicatorValue=e),localdata:p(A)},null,8,["modelValue","localdata"])])),_:1},8,["name"]),o(v,{label:"是否存在对婴幼儿早期发展指导等照护服务不到位的问题",required:"",name:["pension","3.1.2.3","indicatorValue"],rules:[{required:!0,errorMessage:"必填"}]},{default:l((()=>[o(g,{modelValue:n.form.pension["3.1.2.3"].indicatorValue,"onUpdate:modelValue":u[8]||(u[8]=e=>n.form.pension["3.1.2.3"].indicatorValue=e),localdata:p(A)},null,8,["modelValue","localdata"])])),_:1},8,["name"])])),_:1}),o(q,{style:{"margin-top":"20rpx"},title:"幼儿园",isFull:!0},{title:l((()=>[o(b,{class:"card-title"},{default:l((()=>[o(d,null,{default:l((()=>[i("幼儿园")])),_:1}),o(_,{type:"location",size:"24",onClick:u[9]||(u[9]=e=>r("3.1.3","幼儿园"))})])),_:1})])),default:l((()=>[o(v,{label:"是否配建",required:"",name:["pension","3.1.3.1","indicatorValue"],rules:[{required:!0,errorMessage:"必填"}]},{default:l((()=>[o(g,{modelValue:n.form.pension["3.1.3.1"].indicatorValue,"onUpdate:modelValue":u[10]||(u[10]=e=>n.form.pension["3.1.3.1"].indicatorValue=e),localdata:p(A)},null,8,["modelValue","localdata"])])),_:1},8,["name"]),o(v,{label:"面积是否达标（建筑面积不小于2200平方米，用地面积不小于3500平方米）",required:"",name:["pension","3.1.3.2","indicatorValue"],rules:[{required:!0,errorMessage:"必填"}]},{default:l((()=>[o(g,{modelValue:n.form.pension["3.1.3.2"].indicatorValue,"onUpdate:modelValue":u[11]||(u[11]=e=>n.form.pension["3.1.3.2"].indicatorValue=e),localdata:p(A)},null,8,["modelValue","localdata"])])),_:1},8,["name"]),o(v,{label:"是否存在普惠性学前教育服务不到位的问题",required:"",name:["pension","3.1.3.3","indicatorValue"],rules:[{required:!0,errorMessage:"必填"}]},{default:l((()=>[o(g,{modelValue:n.form.pension["3.1.3.3"].indicatorValue,"onUpdate:modelValue":u[12]||(u[12]=e=>n.form.pension["3.1.3.3"].indicatorValue=e),localdata:p(A)},null,8,["modelValue","localdata"])])),_:1},8,["name"])])),_:1}),o(q,{style:{"margin-top":"20rpx"},title:"小学学位",isFull:!0},{title:l((()=>[o(b,{class:"card-title"},{default:l((()=>[o(d,null,{default:l((()=>[i("小学学位")])),_:1}),o(_,{type:"location",size:"24",onClick:u[13]||(u[13]=e=>r("3.1.4","小学"))})])),_:1})])),default:l((()=>[o(v,{label:"小学学位供给与半径500米范围内适龄儿童就近入学需求方面的差距和不足",required:"",name:["pension","3.1.4.1","indicatorValue"],rules:[{required:!0,errorMessage:"必填"}]},{default:l((()=>[o(d,null,{default:l((()=>[i("缺口数:")])),_:1}),o(y,{modelValue:n.form.pension["3.1.4.1"].indicatorValue,"onUpdate:modelValue":u[14]||(u[14]=e=>n.form.pension["3.1.4.1"].indicatorValue=e),type:"number",placeholder:"请输入"},null,8,["modelValue"]),o(d,null,{default:l((()=>[i("个")])),_:1})])),_:1},8,["name"])])),_:1}),o(q,{style:{"margin-top":"20rpx"},title:"停车泊位",isFull:!0},{default:l((()=>[o(v,{label:"现有停车泊位与小区居民停车需求的差距",required:"",name:["pension","3.1.5.1","indicatorValue"],rules:[{required:!0,errorMessage:"必填"}]},{default:l((()=>[o(d,null,{default:l((()=>[i("缺口数:")])),_:1}),o(y,{modelValue:n.form.pension["3.1.5.1"].indicatorValue,"onUpdate:modelValue":u[15]||(u[15]=e=>n.form.pension["3.1.5.1"].indicatorValue=e),type:"number",placeholder:"请输入"},null,8,["modelValue"]),o(d,null,{default:l((()=>[i("个")])),_:1})])),_:1},8,["name"]),o(v,{class:"other_form_item",label:"是否存在停车占用以下空间问题",required:"",name:["pension","3.1.5.2","indicatorValue"],rules:[{required:!0,errorMessage:"必填"}]},{default:l((()=>[o(g,{modelValue:n.form.pension["3.1.5.2"].indicatorValue,"onUpdate:modelValue":u[16]||(u[16]=e=>n.form.pension["3.1.5.2"].indicatorValue=e),multiple:"",localdata:p(E)},null,8,["modelValue","localdata"]),f(o(y,{modelValue:n.form.pension["3.1.5.2"].meno,"onUpdate:modelValue":u[17]||(u[17]=e=>n.form.pension["3.1.5.2"].meno=e),placeholder:"请输入其他"},null,8,["modelValue"]),[[V,n.form.pension["3.1.5.2"].indicatorValue.some((e=>"3.1.5.2.2"==e))]])])),_:1},8,["name"])])),_:1}),o(q,{style:{"margin-top":"20rpx"},title:"新能源汽车充电桩",isFull:!0},{default:l((()=>[o(v,{label:"现有充电桩供给能力与小区居民新能源汽车充电需求的差距",required:"",name:["pension","3.1.6.1","indicatorValue"],rules:[{required:!0,errorMessage:"必填"}]},{default:l((()=>[o(d,null,{default:l((()=>[i("缺口数:")])),_:1}),o(y,{modelValue:n.form.pension["3.1.6.1"].indicatorValue,"onUpdate:modelValue":u[18]||(u[18]=e=>n.form.pension["3.1.6.1"].indicatorValue=e),type:"number",placeholder:"请输入"},null,8,["modelValue"]),o(d,null,{default:l((()=>[i("个")])),_:1})])),_:1},8,["name"]),o(v,{class:"other_form_item",label:"是否存在以下问题",required:"",name:["pension","3.1.6.2","indicatorValue"],rules:[{required:!0,errorMessage:"必填"}]},{default:l((()=>[o(g,{modelValue:n.form.pension["3.1.6.2"].indicatorValue,"onUpdate:modelValue":u[19]||(u[19]=e=>n.form.pension["3.1.6.2"].indicatorValue=e),multiple:"",localdata:p(G)},null,8,["modelValue","localdata"]),f(o(y,{modelValue:n.form.pension["3.1.6.2"].meno,"onUpdate:modelValue":u[20]||(u[20]=e=>n.form.pension["3.1.6.2"].meno=e),placeholder:"请输入其他"},null,8,["modelValue"]),[[V,n.form.pension["3.1.6.2"].indicatorValue.some((e=>"3.1.6.2.2"==e))]])])),_:1},8,["name"])])),_:1})])),_:1})}}},fe=I({__name:"index",props:{state:String,communityId:String,courtName:String,storage:String},setup(r){const t=b(g("userInfo")||null),s=b("社区填报"),p=b(0),_=["基本信息","体检指标"],I=b(""),w=t.value?t.value.communityId:"",A=t.value?t.value.communityName:"",P=b(null),Y=e=>{p.value=e},D=(e="")=>({communityId:w,courtName:"",indicatorId:"",indicatorValue:e,latitude:0,longitude:0,meno:"",reportYear:""});N((e=>{if(e.state){switch(e.state){case"0":s.value="小区暂存填报-"+e.courtName;break;case"1":s.value=e.courtName+"-待审核";break;case"2":s.value=e.courtName+"-审核通过";break;case"3":s.value=e.courtName+"-审核未通过"}I.value=e.state,B(e.communityId)}else if(e.storage){const a=g(e.storage);H.value=le.assign(H.value,a)}})),T((()=>{const e=g("location");e&&$(e)}));const $=(e={})=>{for(let a in e)H.value.map.hasOwnProperty(a)&&(H.value.map[a].latitude=e[a].latitude,H.value.map[a].longitude=e[a].longitude,H.value.map[a].indicatorValue=1)},B=async(e,a="")=>{v();const l={communityId:e,courtName:a},o=await oe(l);let{basicInfo:n,indicatorValueList:r}=o.data;n=ne(n),H.value.basic=le.assign(H.value.basic,n);const t={...H.value.pension,...H.value.environment,...H.value.manage,...H.value.map};for(let i in t){const e=r.find((e=>e.indicatorId==i));if(e)if(Array.isArray(t[i].indicatorValue)){const a=e.meno.split(";");if(a.length){const e=r.find((e=>e.indicatorId==a[a.length-1]));e.meno&&(t[i].meno=e.meno)}t[i].indicatorValue=a}else t[i].indicatorValue=e.indicatorValue+"",t[i].latitude=e.latitude,t[i].location=e.location}y()},H=b((()=>{const e={"3.1.1.1":D(),"3.1.1.2":D(),"3.1.1.3":D([]),"3.1.2.1":D(),"3.1.2.2":D(),"3.1.2.3":D(),"3.1.3.1":D(),"3.1.3.2":D(),"3.1.3.3":D(),"3.1.4.1":D(),"3.1.5.1":D(),"3.1.5.2":D([]),"3.1.6.1":D(),"3.1.6.2":D([])},a={"3.2.7.1":D(),"3.2.7.2":D(),"3.2.7.3":D([]),"3.2.7.4":D(),"3.2.7.5":D(),"3.2.8.1":D([]),"3.2.9.1":D([])},l={"3.3.10.1":D([]),"3.3.11.1":D([]),"3.3.11.2":D([])},o={"3.1.1":D(),"3.1.2":D(),"3.1.3":D(),"3.1.4":D()};return{basic:{area:"",communityId:w,communityName:A,dateTime:"",courtName:"",numberCourt:"",numberFamily:"",numberPeople:"",reportYear:""},pension:e,environment:a,manage:l,map:o}})());q((()=>H),(e=>{M("areaForm",e.value)}),{deep:!0});const O=async(e=1)=>{v();const a=ue().year(),l={...H.value.basic,dateTime:new Date,state:e,reportYear:a};await re(l);const o=[],n=le.cloneDeep({...H.value.pension,...H.value.environment,...H.value.manage,...H.value.map});for(var r in n){const e=n[r];if(e.indicatorId=r,e.reportYear=a,Array.isArray(e.indicatorValue)){const l=e.meno,n=le.cloneDeep(e.indicatorValue);if(n.length){e.indicatorValue=1;const t=R[r];t.forEach(((e,r)=>{const i=n.find((a=>a==e.value)),u=D();u.indicatorId=e.value,u.reportYear=a,i?(u.indicatorValue=1,r==t.length-1&&(u.meno=l)):u.indicatorValue=0,o.push(u)}))}else e.indicatorValue=0;e.meno=n.join(";")}o.push(e)}await te(o),y(),x({title:"提交成功",duration:2e3,icon:"none"}),S({key:"areaForm"}),setTimeout(C,800)};return(r,t)=>{const b=z(c("uv-navbar"),j),g=z(c("uni-notice-bar"),J),v=z(c("z-tabs"),L),y=z(c("uni-section"),de),q=z(c("uni-forms"),W),M=z(c("uv-button"),X),x=m;return e(),h(U,null,[o(b,{title:s.value,border:"",leftIconSize:"50rpx",placeholder:"",autoBack:""},null,8,["title"]),o(x,null,{default:l((()=>["3"===I.value?(e(),a(g,{key:0,text:"uni-app 版正式发布，开发一次，同时发布iOS、Android、H5、微信小程序、支付宝小程序、百度小程序、头条小程序等7大平台。"})):d("",!0),o(v,{list:_,onChange:Y}),o(x,{class:n(["form-box",{mask:"1"==I.value||"2"==I.value}])},{default:l((()=>[o(q,{modelValue:H.value,"label-position":"top","label-width":"100%",class:"form",ref_key:"formRef",ref:P},{default:l((()=>[f(o(me,{form:H.value},null,8,["form"]),[[V,0==p.value]]),f(k("div",null,[o(y,{class:"section-title",title:"设施完善"},{default:l((()=>[o(pe,{form:H.value},null,8,["form"])])),_:1}),o(y,{class:"section-title",title:"环境宜居"},{default:l((()=>[o(se,{form:H.value},null,8,["form"])])),_:1}),o(y,{class:"section-title",title:"管理健全"},{default:l((()=>[o(ce,{form:H.value},null,8,["form"])])),_:1})],512),[[V,1==p.value]])])),_:1},8,["modelValue"]),o(x,{class:"btns"},{default:l((()=>[o(M,{class:"submit",type:"primary",onClick:t[0]||(t[0]=e=>{P.value.validate().then((e=>{F({title:"提交",content:"一旦提交不可修改,确定提交？",success:e=>{e.confirm?O():e.cancel&&console.log("用户点击了取消")}})})).catch((e=>{ie("请填写完整")}))})},{default:l((()=>[i(u("4"==I.value?"重新提交":"提交"),1)])),_:1})])),_:1})])),_:1},8,["class"])])),_:1})],64)}}},[["__scopeId","data-v-d3833ae5"]]);export{fe as default};
