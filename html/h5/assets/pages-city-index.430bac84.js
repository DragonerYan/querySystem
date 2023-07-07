import{h as e,f as a,o as r,a as t,w as l,g as i,F as s,k as o,u as n,b as u,l as c,d as p,t as d,m,i as h,p as f,q as y,v as g,x as v,y as b,r as _,j as q,z as k,A as x,B as O,C as V,D as w,E as C,G as B,H as M,e as N}from"./index-f9923a45.js";import{_ as I}from"./uv-navbar.85ff6eac.js";import{r as S,_ as j,o as A}from"./uni-app.es.05b2e329.js";import{g as T,a as $,_ as U}from"./form.aa36e78b.js";import{_ as P}from"./z-tabs.316f7773.js";import{_ as z,b as E}from"./uni-forms.921cd8d3.js";import{_ as D}from"./uv-button.aa73ea60.js";import{_ as F}from"./uni-card.a4063fa8.js";import{h as H}from"./h-input.d45a6e9c.js";import{h as Y,y as R,r as G,m as L,a as J}from"./info.26db5737.js";import{a as K,i as Q,_ as W}from"./lodash.cd6eed32.js";import{d as X}from"./dayjs.min.16297c83.js";import{_ as Z}from"./uni-icons.8cc73f7f.js";import{b as ee,d as ae,e as re,f as te,i as le}from"./baseApi.9064515e.js";import{t as ie}from"./toast.d3db215c.js";import"./uv-icon.5bb898f1.js";import"./uni-data-picker.fbb2b343.js";const se=K(),oe=()=>{const a=e("userInfo")||{};return{communityId:a.communityId||"",communityName:a.communityName||"",city:a.city||"",county:a.county||"",province:a.province||"",street:a.street||""}},ne=()=>({buildNumber:"",buildTime:"",city:"",communityId:"",communityName:"",county:"",courtName:"",dateTime:"",numberDepartment:"",numberOver60People:"",numberPeople:"",province:"",reportYear:"",state:"0",reviewComment:"",problemState:"",street:"",unitsNumber:"",userId:"",...oe()}),ue=e=>({title:"楼栋信息",id:e||se,childrens:[{name:"住宅楼号",value:"",prop:"buildNumber",placeholder:"请输入住宅楼号",required:!0,type:"text",rules:[{required:!0,errorMessage:"请输入住宅楼号"}]},{name:"单元数量",value:"个",prop:"unitsNumber",placeholder:"请输入单元数量",required:!0,rules:[{required:!0,errorMessage:"请输入单元数量"}]},{name:"建造时间",value:"年",prop:"buildTime",placeholder:"请选择建造时间",type:"year",options:R,required:!0,rules:[{required:!0,errorMessage:"请选择建造时间"}]},{name:"建筑层数",value:"栋",prop:"numberDepartment",placeholder:"请输入建筑层数",required:!0,rules:[{required:!0,errorMessage:"请输入建筑层数"}]},{name:"常住人口",value:"人",prop:"numberPeople",placeholder:"请输入常住人口",required:!0,rules:[{required:!0,errorMessage:"请输入常住人口"}]},{name:"六十岁以上常住人口",value:"人",prop:"numberOver60People",placeholder:"请输入六十岁以上常住人口",required:!0,rules:[{required:!0,errorMessage:"请输入六十岁以上常住人口"}]}]}),ce=()=>({basic:{courtName:"",communityId:"",communityName:"",courtType:"",courtTypeOther:"",buildTime:"",remodel:"",management:"",area:"",dateTime:"",numberDepartment:"",numberPeople:"",numberOver60People:"",numberBuilding:"",number13Building:"",number46Building:"",number79Building:"",numberOver10Building:"",reportYear:"",reviewComment:"",...oe()},archs:{[se]:ne()}}),pe=["基本信息","楼栋信息"],de=[{title:"基本信息",childrens:[{name:"小区名称",value:"",prop:"courtName",placeholder:"请输入小区名称",type:"text",required:!0,rules:[{required:!0,errorMessage:"请输入小区名称"}]},{name:"省市区街道社区",value:"",prop:"communityId",placeholder:"请选择地区",type:"data-picker",options:T,required:!0,rules:[{required:!0,errorMessage:"请选择地区"}]},{name:"小区类型",value:"",prop:"courtType",type:"radio",options:Y,required:!0,rules:[{required:!0,errorMessage:"选择小区类型"}],active:Y[Y.length-1].value,childrens:[{name:"",prop:"courtTypeOther",type:"textarea",required:!1,placeholder:"请输入其他"}]},{name:"建造时间",value:"年",prop:"buildTime",placeholder:"选择建造时间",type:"year",options:R,required:!0,rules:[{required:!0,errorMessage:"选择建造时间"}]},{name:"老旧小区改造情况",value:"",prop:"remodel",type:"radio",options:G,required:!0,rules:[{required:!0,errorMessage:"选择老旧小区改造情况"}]},{name:"物业管理",value:"",prop:"management",type:"radio",options:L,required:!0,rules:[{required:!0,errorMessage:"选择选择物业管理状况"}]},{name:"总建筑面积",value:"平方米",prop:"area",placeholder:"请输入总建筑面积",required:!0,rules:[{required:!0,errorMessage:"请输入总建筑面积"}]},{name:"住宅总套数",value:"套",prop:"numberDepartment",placeholder:"请输入住宅总套数",required:!0,rules:[{required:!0,errorMessage:"请输入住宅总套数"}]},{name:"常住人口",value:"人",prop:"numberPeople",placeholder:"请输入常住人口",required:!0,rules:[{required:!0,errorMessage:"请输入常住人口"}]},{name:"六十岁以上常住人口",value:"人",prop:"numberOver60People",placeholder:"请输入六十岁以上常住人口",required:!0,rules:[{required:!0,errorMessage:"请输入六十岁以上常住人口"}]}]},{title:"建筑数量及层数",childrens:[{name:"全部数量",value:"栋",prop:"numberBuilding",placeholder:"请输入全部建筑数量",required:!0,type:"value",rules:[{required:!0,errorMessage:"请输入全部建筑数量"}]},{name:"1-3层",value:"栋",prop:"number13Building",placeholder:"请输入1-3层建筑数量",required:!0,rules:[{required:!0,errorMessage:"请输入1-3层建筑数量"}]},{name:"4-6层",value:"栋",prop:"number46Building",placeholder:"请输入4-6层建筑数量",required:!0,rules:[{required:!0,errorMessage:"请输入4-6层建筑数量"}]},{name:"7-9层",value:"栋",prop:"number79Building",placeholder:"请输入7-9层建筑数量",required:!0,rules:[{required:!0,errorMessage:"请输入7-9层建筑数量"}]},{name:"10 层以上",value:"栋",prop:"numberOver10Building",placeholder:"请输入10层以上建筑数量",required:!0,rules:[{required:!0,errorMessage:"请输入10层以上建筑数量"}]}]}],me=(e,a)=>{const r=X().year(),t={state:a,dateTime:new Date,reportYear:r};return Object.prototype.hasOwnProperty.call(e,"courtType")&&(e.courtTypeOther=e.courtType==Y[Y.length-1].value?e.courtTypeOther:""),{...e,...t}},he={__name:"base",props:{form:{}},setup(e){var f;const y=(null==(f=$({baseFormOptions:de}))?void 0:f.baseFormOptions)||[];return console.log(y,9999),(f,g)=>{const v=S(a("uni-forms-item"),z),b=m,_=S(a("uni-card"),F),q=h;return r(),t(q,{class:"content"},{default:l((()=>[(r(!0),i(s,null,o(n(y),((a,n)=>(r(),t(_,{isFull:!0,class:"form-card",title:a.title,key:n},{default:l((()=>[(r(!0),i(s,null,o(a.childrens,(a=>(r(),t(v,{key:a.prop,required:a.required,label:a.name,name:["basic",a.prop],rules:a.rules},{default:l((()=>[u(H,{msg:e.form.basic[a.prop],"onUpdate:msg":r=>e.form.basic[a.prop]=r,options:a.options,type:a.type,placeholder:a.placeholder},{default:l((()=>[a.childrens&&e.form.basic[a.prop]===a.active?(r(!0),i(s,{key:0},o(a.childrens,((a,i)=>(r(),t(v,{key:a.prop,required:a.required,label:a.name,name:["basic",a.prop],rules:a.rules},{default:l((()=>[u(H,{msg:e.form.basic[a.prop],"onUpdate:msg":r=>e.form.basic[a.prop]=r,options:a.options,type:a.type,placeholder:a.placeholder},null,8,["msg","onUpdate:msg","options","type","placeholder"])])),_:2},1032,["required","label","name","rules"])))),128)):c("",!0)])),_:2},1032,["msg","onUpdate:msg","options","type","placeholder"]),a.value?(r(),t(b,{key:0,class:"suffix"},{default:l((()=>[p(d(a.value),1)])),_:2},1024)):c("",!0)])),_:2},1032,["required","label","name","rules"])))),128))])),_:2},1032,["title"])))),128))])),_:1})}}};const fe=j({name:"uniCollapseItem",props:{title:{type:String,default:""},name:{type:[Number,String],default:""},disabled:{type:Boolean,default:!1},showAnimation:{type:Boolean,default:!0},open:{type:Boolean,default:!1},thumb:{type:String,default:""},titleBorder:{type:String,default:"auto"},border:{type:Boolean,default:!0},showArrow:{type:Boolean,default:!0}},data:()=>({isOpen:!1,isheight:null,height:0,elId:`Uni_${Math.ceil(1e6*Math.random()).toString(36)}`,nameSync:0}),watch:{open(e){this.isOpen=e,this.onClick(e,"init")}},updated(e){this.$nextTick((()=>{this.init(!0)}))},created(){this.collapse=this.getCollapse(),this.oldHeight=0,this.onClick(this.open,"init")},unmounted(){this.__isUnmounted=!0,this.uninstall()},mounted(){this.collapse&&(""!==this.name?this.nameSync=this.name:this.nameSync=this.collapse.childrens.length+"",-1===this.collapse.names.indexOf(this.nameSync)?this.collapse.names.push(this.nameSync):console.warn(`name 值 ${this.nameSync} 重复`),-1===this.collapse.childrens.indexOf(this)&&this.collapse.childrens.push(this),this.init())},methods:{init(e){this.getCollapseHeight(e)},uninstall(){this.collapse&&(this.collapse.childrens.forEach(((e,a)=>{e===this&&this.collapse.childrens.splice(a,1)})),this.collapse.names.forEach(((e,a)=>{e===this.nameSync&&this.collapse.names.splice(a,1)})))},onClick(e,a){this.disabled||(this.isOpen=e,this.isOpen&&this.collapse&&this.collapse.setAccordion(this),"init"!==a&&this.collapse.onChange(e,this))},getCollapseHeight(e,a=0){f().in(this).select(`#${this.elId}`).fields({size:!0},(r=>{if(!(a>=10)){if(!r)return a++,void this.getCollapseHeight(!1,a);this.height=r.height,this.isheight=!0,e||this.onClick(this.isOpen,"init")}})).exec()},getNvueHwight(e){dom.getComponentRect(this.$refs["collapse--hook"],(a=>{if(a&&a.result&&a.size){if(this.height=a.size.height,this.isheight=!0,e)return;this.onClick(this.open,"init")}}))},getCollapse(e="uniCollapse"){let a=this.$parent,r=a.$options.name;for(;r!==e;){if(a=a.$parent,!a)return!1;r=a.$options.name}return a}}},[["render",function(e,i,s,o,n,f){const _=b,q=m,k=h,x=S(a("uni-icons"),Z);return r(),t(k,{class:"uni-collapse-item"},{default:l((()=>[u(k,{onClick:i[0]||(i[0]=e=>f.onClick(!n.isOpen)),class:y(["uni-collapse-item__title",{"is-open":n.isOpen&&"auto"===s.titleBorder,"uni-collapse-item-border":"none"!==s.titleBorder}])},{default:l((()=>[u(k,{class:"uni-collapse-item__title-wrap"},{default:l((()=>[g(e.$slots,"title",{},(()=>[u(k,{class:y(["uni-collapse-item__title-box",{"is-disabled":s.disabled}])},{default:l((()=>[s.thumb?(r(),t(_,{key:0,src:s.thumb,class:"uni-collapse-item__title-img"},null,8,["src"])):c("",!0),u(q,{class:"uni-collapse-item__title-text"},{default:l((()=>[p(d(s.title),1)])),_:1})])),_:1},8,["class"])]),!0)])),_:3}),s.showArrow?(r(),t(k,{key:0,class:y([{"uni-collapse-item__title-arrow-active":n.isOpen,"uni-collapse-item--animation":!0===s.showAnimation},"uni-collapse-item__title-arrow"])},{default:l((()=>[u(x,{color:s.disabled?"#ddd":"#bbb",size:"14",type:"bottom"},null,8,["color"])])),_:1},8,["class"])):c("",!0)])),_:3},8,["class"]),u(k,{class:y(["uni-collapse-item__wrap",{"is--transition":s.showAnimation}]),style:v({height:(n.isOpen?n.height:0)+"px"})},{default:l((()=>[u(k,{id:n.elId,ref:"collapse--hook",class:y(["uni-collapse-item__wrap-content",{open:n.isheight,"uni-collapse-item--border":s.border&&n.isOpen}])},{default:l((()=>[g(e.$slots,"default",{},void 0,!0)])),_:3},8,["id","class"])])),_:3},8,["class","style"])])),_:3})}],["__scopeId","data-v-d9eb4150"]]);const ye=j({name:"uniCollapse",emits:["change","activeItem","input","update:modelValue"],props:{value:{type:[String,Array],default:""},modelValue:{type:[String,Array],default:""},accordion:{type:[Boolean,String],default:!1}},data:()=>({}),computed:{dataValue(){let e="string"==typeof this.value&&""===this.value||Array.isArray(this.value)&&0===this.value.length;"string"==typeof this.modelValue&&""===this.modelValue||Array.isArray(this.modelValue)&&this.modelValue.length;return e?this.modelValue:this.value}},watch:{dataValue(e){this.setOpen(e)}},created(){this.childrens=[],this.names=[]},mounted(){this.$nextTick((()=>{this.setOpen(this.dataValue)}))},methods:{setOpen(e){let a="string"==typeof e,r=Array.isArray(e);this.childrens.forEach(((t,l)=>{if(a&&e===t.nameSync){if(!this.accordion)return void console.warn("accordion 属性为 false ,v-model 类型应该为 array");t.isOpen=!0}r&&e.forEach((e=>{if(e===t.nameSync){if(this.accordion)return void console.warn("accordion 属性为 true ,v-model 类型应该为 string");t.isOpen=!0}}))})),this.emit(e)},setAccordion(e){this.accordion&&this.childrens.forEach(((a,r)=>{e!==a&&(a.isOpen=!1)}))},resize(){this.childrens.forEach(((e,a)=>{e.getCollapseHeight()}))},onChange(e,a){let r=[];this.accordion?r=e?a.nameSync:"":this.childrens.forEach(((e,a)=>{e.isOpen&&r.push(e.nameSync)})),this.$emit("change",r),this.emit(r)},emit(e){this.$emit("input",e),this.$emit("update:modelValue",e)}}},[["render",function(e,a,i,s,o,n){const u=h;return r(),t(u,{class:"uni-collapse"},{default:l((()=>[g(e.$slots,"default",{},void 0,!0)])),_:3})}],["__scopeId","data-v-3aec18a2"]]),ge=j({__name:"arch",props:{form:{},aduitMask:{type:Boolean,default:!1}},setup(e,{expose:n}){const f=e,y=_([ue()]),g=e=>{if(e){const e=K();y.value.push(ue(e)),f.form.archs[e]=ne()}};return n({handleSetData:e=>{y.value=[],f.form.archs={},e.forEach((e=>{const a=K();y.value.push(ue(a)),f.form.archs[a]=e}))}}),(n,v)=>{const b=m,_=S(a("uni-icons"),Z),k=h,x=S(a("uni-forms-item"),z),O=S(a("uni-card"),F),V=S(a("uni-collapse-item"),fe),w=S(a("uni-collapse"),ye),C=S(a("uv-button"),D);return r(),t(k,{class:"build"},{default:l((()=>[u(w,null,{default:l((()=>[(r(!0),i(s,null,o(y.value,((a,n)=>(r(),t(V,{class:"item",title:a.title+`(${n+1})`,open:!n,key:a.id},{default:l((()=>[u(O,{isFull:!0,title:a.title},{title:l((()=>[u(k,{class:"card-title"},{default:l((()=>[u(b,null,{default:l((()=>[p(d(a.title),1)])),_:2},1024),n&&!e.aduitMask?(r(),t(_,{key:0,type:"trash",color:"#b63027",size:"24",onClick:e=>{return r=a,void q({title:"删除该楼栋信息",content:"确定删除吗？",confirmText:"确定",cancelText:"取消",success:e=>{e.confirm?(y.value=y.value.filter((e=>e.id!=r.id)),delete f.form.archs[r.id]):e.cancel}});var r}},null,8,["onClick"])):c("",!0)])),_:2},1024)])),default:l((()=>[(r(!0),i(s,null,o(a.childrens,((i,s)=>(r(),t(x,{key:i.prop,required:i.required,label:i.name,name:["archs",a.id,i.prop],rules:i.rules},{default:l((()=>[u(H,{msg:e.form.archs[a.id][i.prop],"onUpdate:msg":r=>e.form.archs[a.id][i.prop]=r,options:i.options,type:i.type,placeholder:i.placeholder},null,8,["msg","onUpdate:msg","options","type","placeholder"]),i.value?(r(),t(b,{key:0,class:"suffix"},{default:l((()=>[p(d(i.value),1)])),_:2},1024)):c("",!0)])),_:2},1032,["required","label","name","rules"])))),128))])),_:2},1032,["title"])])),_:2},1032,["title","open"])))),128))])),_:1}),e.aduitMask?c("",!0):(r(),t(C,{key:0,type:"primary",onClick:g,text:"添加楼宇信息","icon-color":"#fff","custom-style":"font-weight:600;margin:20px 0",icon:"plus"}))])),_:1})}}},[["__scopeId","data-v-92b45990"]]),ve={__name:"exam",props:{form:{}},setup(e){var f;const y=(null==(f=$())?void 0:f.examOptions)||[];return(f,g)=>{const v=S(a("uni-forms-item"),z),b=m,_=S(a("uni-card"),F),q=h;return r(),t(q,{class:"content"},{default:l((()=>[(r(!0),i(s,null,o(n(y),((a,n)=>(r(),t(_,{isFull:!0,title:a.title,key:n,class:"form-card"},{default:l((()=>[(r(!0),i(s,null,o(a.childrens,(a=>(r(),t(v,{key:a.prop,required:a.required,label:a.name,name:["exam",a.prop,"indicatorValue"],rules:a.rules},{default:l((()=>[u(H,{msg:e.form.exam[a.prop].indicatorValue,"onUpdate:msg":r=>e.form.exam[a.prop].indicatorValue=r,options:a.options,type:a.type,placeholder:a.placeholder},k({default:l((()=>["checkbox-group"!=a.type&&a.childrens?(r(!0),i(s,{key:0},o(a.childrens,((a,i)=>(r(),t(v,{label:a.name,key:a.prop,class:"child-form-rows",required:a.required},{default:l((()=>[u(H,{msg:e.form.exam[a.prop].indicatorValue,"onUpdate:msg":r=>e.form.exam[a.prop].indicatorValue=r,type:a.type,placeholder:a.placeholder},null,8,["msg","onUpdate:msg","type","placeholder"]),a.value?(r(),t(b,{key:0,class:"suffix"},{default:l((()=>[p(d(a.value),1)])),_:2},1024)):c("",!0)])),_:2},1032,["label","required"])))),128)):c("",!0)])),_:2},[o(a.childrens,((i,s)=>({name:i.slot,fn:l((()=>[u(v,{label:i.name,required:i.required},{default:l((()=>[i.prop==a.prop?(r(),t(H,{key:0,msg:e.form.exam[i.prop].meno,"onUpdate:msg":a=>e.form.exam[i.prop].meno=a,type:i.type,placeholder:i.placeholder},null,8,["msg","onUpdate:msg","type","placeholder"])):(r(),t(H,{key:1,msg:e.form.exam[i.prop].indicatorValue,"onUpdate:msg":a=>e.form.exam[i.prop].indicatorValue=a,type:i.type,placeholder:i.placeholder},null,8,["msg","onUpdate:msg","type","placeholder"]))])),_:2},1032,["label","required"])]))})))]),1032,["msg","onUpdate:msg","options","type","placeholder"]),a.value?(r(),t(b,{key:0,class:"suffix"},{default:l((()=>[p(d(a.value),1)])),_:2},1024)):c("",!0)])),_:2},1032,["required","label","name","rules"])))),128))])),_:2},1032,["title"])))),128))])),_:1})}}},be=j({__name:"index",props:{state:String,communityId:String,courtName:String},setup(e){const o=$({defaultForm:ce}),d=_("小区住房填报"),m=_(null),f=_(""),g=_(null),v=_({...o.defaultForm(),archs:ce().archs});A((e=>{e.state?(d.value=(e=>{let a="";switch(e.state){case"0":a="小区暂存填报-"+e.courtName;break;case"1":a=e.courtName+"-待审核";break;case"2":a=e.courtName+"-审核通过";break;case"3":a=e.courtName+"-审核未通过"}return a})(e),f.value=e.state,k(e.communityId,e.courtName)):b()}));const b=()=>{v.value.basic.numberBuilding=x((()=>{let{number13Building:e,number46Building:a,number79Building:r,numberOver10Building:t,numberOver18Building:l}=v.value.basic;e=e||0,a=a||0,r=r||0,t=t||0,l=l||0;return 1*e+1*a+1*r+1*t+1*l+""}))},k=async(e,a)=>{const r={communityId:e,courtName:a};Promise.all([ee(r),ae(r)]).then((e=>{const a=e[0].data,r=e[1].data;let{basicInfo:t,indicatorValueList:l}=a;if(t=Q(t),v.value.basic={...ce().basic,...t},v.value.exam){const e={...v.value.exam};for(let a in e){const r=l.find((e=>e.indicatorId==a));if(r)if(Array.isArray(e[a].indicatorValue)){const t=r.meno.split(";");if(t.length){const r=l.find((e=>e.indicatorId==t[t.length-1]));r&&r.meno&&(e[a].meno=r.meno)}e[a].indicatorValue=t}else e[a].indicatorValue=r.indicatorValue+"",e[a].latitude=r.latitude,e[a].location=r.location}}b(),O((()=>{g.value.handleSetData(r)}))}))},j=x((()=>!v.value.basic.courtName)),T=x((()=>J[1].value==f.value||J[2].value==f.value)),z=e=>{e&&m.value.validate().then((e=>{q({title:"提交",content:"一旦提交不可修改,确定提交？",success:e=>{e.confirm?F():e.cancel&&console.log("用户点击了取消")}})})).catch((e=>{ie("请填写完整")}))},F=async(e=1)=>{const a=me(v.value.basic,e);C();const r=[];for(var t in v.value.archs){let l=v.value.archs[t];l=me(l,e),l.courtName=a.courtName,r.push(l)}const l=[re(a),te(r)];if(v.value.exam){const e=X().year(),r=[],i=W.cloneDeep(v.value.exam);for(var t in i){const l=i[t],s=l.indicatorValue;if(Array.isArray(s)){l.indicatorValue=s.length?1:0;const i=l.meno,n=o.allIndicatorValue[t];n.forEach(((t,l)=>{const u=s.find((e=>e==t.value)),c=o.defaultParam();c.indicatorId=t.value,c.reportYear=e,c.courtName=a.courtName,u?(c.indicatorValue=1,l==n.length-1&&(c.meno=i)):c.indicatorValue=0,r.push(c)})),l.meno=s.join(";")}r.push({...l,reportYear:e,courtName:a.courtName,indicatorId:t})}l.push(le(r))}Promise.all(l).then((a=>{B();M({title:{0:"暂存成功",1:"提交成功"}[e],duration:2e3,icon:"none"}),setTimeout((()=>{N({url:"/pages/home/index"})}),800)}))},H=_(0),Y=e=>{H.value=e};return(e,o)=>{const b=S(a("uv-navbar"),I),_=S(a("uni-notice-bar"),U),k=S(a("z-tabs"),P),x=h,O=S(a("uni-forms"),E),C=S(a("uv-button"),D);return r(),i(s,null,[u(b,{title:d.value,border:"",leftIconSize:"50rpx",placeholder:"",autoBack:""},null,8,["title"]),u(x,null,{default:l((()=>[f.value===n(J)[3].value?(r(),t(_,{key:0,text:"审核不通过意见："+v.value.basic.reviewComment},null,8,["text"])):c("",!0),u(k,{list:n(pe),onChange:Y},null,8,["list"]),u(x,{class:y(["form-box",{mask:n(T)}])},{default:l((()=>[u(O,{modelValue:v.value,"label-position":"top","label-width":"100%",class:"form-data",ref_key:"formRef",ref:m},{default:l((()=>[V(u(x,null,{default:l((()=>[u(he,{form:v.value},null,8,["form"]),u(ve,{form:v.value},null,8,["form"])])),_:1},512),[[w,0==H.value]]),V(u(ge,{ref_key:"archsRef",ref:g,aduitMask:n(T),form:v.value},null,8,["aduitMask","form"]),[[w,1==H.value]])])),_:1},8,["modelValue"]),u(x,{class:"btns"},{default:l((()=>[u(C,{class:"submit",disabled:n(j),type:"warning",onClick:o[0]||(o[0]=e=>!n(j)&&void q({title:"小区表单暂存",content:"是否暂存小区表单？",success:e=>{e.confirm?F(0):e.cancel&&console.log("用户点击了取消")}}))},{default:l((()=>[p("暂存")])),_:1},8,["disabled"]),u(C,{class:"submit",type:"primary",onClick:z},{default:l((()=>[p("提交")])),_:1})])),_:1})])),_:1},8,["class"])])),_:1})],64)}}},[["__scopeId","data-v-3acc55d2"]]);export{be as default};
