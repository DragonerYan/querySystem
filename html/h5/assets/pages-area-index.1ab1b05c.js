import{g as e,e as r,o as a,c as o,w as t,f as l,F as i,j as s,u as n,a as u,b as p,t as d,k as c,l as m,i as h,p as f,q as y,v as g,y as v,n as b,r as q,H as x,D as _,E as k,I as V,B as M,C as I,s as j,h as F,G as w,d as S}from"./index-d68978c3.js";import{_ as C}from"./uv-navbar.51a41652.js";import{r as N,_ as T,o as U,a as z}from"./uni-app.es.dd1c2cd8.js";import{b as O,c as A,_ as P}from"./form.58865311.js";import{_ as Y}from"./z-tabs.17eab00b.js";import{_ as D,b as $}from"./uni-forms.f26f10bb.js";import{_ as B}from"./uv-button.a00d60e3.js";import{_ as E}from"./uni-card.858c3da6.js";import{p as G,b as H,c as J,s as L,d as R,e as K,k as Q,f as W,g as X,i as Z,j as ee,l as re,n as ae,o as oe}from"./info.26db5737.js";import{a as te,o as le,_ as ie,i as se}from"./lodash.576e2588.js";import{d as ne}from"./dayjs.min.4742d98f.js";import{h as ue}from"./h-input.3ebd95dc.js";import{_ as pe}from"./uni-icons.9b80f9c3.js";import{b as de,g as ce,i as me}from"./baseApi.e488cac3.js";import{t as he}from"./toast.c60169bc.js";import"./uv-icon.4e469848.js";import"./uni-data-picker.70a1c02e.js";te();const fe=["基本信息","体检指标"],ye=[{title:"基本信息",childrens:[{name:"行政社区名称",value:"",prop:"communityName",placeholder:"请输入行政社区名称",type:"value",required:!0,rules:[{required:!0,errorMessage:"请输入行政社区名称"}]},{name:"社区面积",value:"公顷",prop:"area",placeholder:"请输入社区面积",type:"number",required:!0,rules:[{required:!0,errorMessage:"请输入社区面积"}]},{name:"社区管辖范围内的小区数量",value:"个",prop:"numberCourt",type:"number",placeholder:"请输入社区管辖范围内的小区数量",required:!0,rules:[{required:!0,errorMessage:"请输入社区管辖范围内的小区数量"}]},{name:"覆盖居民人数",value:"人",prop:"numberPeople",placeholder:"请输入覆盖居民人数",type:"number",required:!0,rules:[{required:!0,errorMessage:"请输入覆盖居民人数"}]},{name:"覆盖居民户数",value:"户",prop:"numberFamily",placeholder:"请输入覆盖居民户数",type:"number",required:!0,rules:[{required:!0,errorMessage:"请输入覆盖居民户数"}]}]}],ge=[{label:"设施完善",options:[{title:"社区养老服务设施",map:!0,prop:"3.1.1",keyword:"社区养老",childrens:[{name:"是否配建",value:"",prop:"3.1.1.1",required:!0,options:L,type:"radio",rules:[{required:!0,errorMessage:"请选择是否配建"}]},{name:"面积是否达标（新建社区，建筑面积不小于350平方米）",value:"",prop:"3.1.1.2",placeholder:"请选择",options:L,type:"radio",required:!0,rules:[{required:!0,errorMessage:"请选择面积是否达标"}],childrens:[{name:"建筑面积",value:"平方米",prop:"3.1.1.2.1",type:"number",placeholder:"请输入建筑面积"}]},{name:"存在哪些问题",value:"",prop:"3.1.1.3",options:R,type:"checkbox-group",required:!0,rules:[{required:!0,errorMessage:"请选择存在哪些问题"}],childrens:[{name:"",prop:"3.1.1.3",type:"textarea",placeholder:"请输入其他",slot:"other"}]}]},{title:"婴幼儿照护服务设施",map:!0,prop:"3.1.2",keyword:"婴幼儿照护",childrens:[{name:"是否配建",value:"",prop:"3.1.2.1",options:L,required:!0,type:"radio",rules:[{required:!0,errorMessage:"请选择是否配建"}]},{name:"面积是否达标（建筑面积不小于200平方米）",value:"",prop:"3.1.2.2",type:"radio",options:L,required:!0,rules:[{required:!0,errorMessage:"请选择面积是否达标"}],childrens:[{name:"建筑面积",value:"平方米",prop:"3.1.2.2.1",type:"number",placeholder:"请输入建筑面积"}]},{name:"存在哪些问题",value:"",prop:"3.1.2.3",options:K,type:"checkbox-group",childrens:[{name:"具体问题",value:"",prop:"3.1.2.3.1",type:"textarea",placeholder:"请输入具体问题",slot:"detail",required:!0}]}]},{title:"幼儿园",map:!0,prop:"3.1.3",keyword:"幼儿园",childrens:[{name:"是否配建",value:"",prop:"3.1.3.1",type:"radio",options:L,required:!0,rules:[{required:!0,errorMessage:"请选择是否配建"}]},{name:"面积是否达标（建筑面积不小于2200平方米，用地面积不小于3500平方米）",value:"",prop:"3.1.3.2",type:"radio",options:L,required:!0,rules:[{required:!0,errorMessage:"请选择面积是否达标"}],childrens:[{name:"建筑面积",value:"平方米",prop:"3.1.3.2.1",type:"number",placeholder:"请输入建筑面积"},{name:"用地面积",value:"平方米",prop:"3.1.3.2.2",type:"number",placeholder:"请输入用地面积"}]},{name:"存在哪些问题",value:"",prop:"3.1.3.3",options:Q,type:"checkbox-group",childrens:[{name:"具体问题",value:"",prop:"3.1.3.3.1",type:"textarea",placeholder:"请输入具体问题",slot:"detail",required:!0}]}]},{title:"小学学位",map:!0,prop:"3.1.4",keyword:"小学",childrens:[{name:"小学学位缺口数:",value:"个",prop:"3.1.4.1",placeholder:"请输入小学学位缺口数",required:!0,type:"number",rules:[{required:!0,errorMessage:"请输入小学学位缺口数"}]}]},{title:"停车泊位",childrens:[{name:"停车泊位缺口数:",value:"个",prop:"3.1.5.1",placeholder:"请输入停车泊位缺口数",required:!0,type:"number",rules:[{required:!0,errorMessage:"请输入停车泊位缺口数"}]},{name:"存在哪些问题",value:"",prop:"3.1.5.2",type:"checkbox-group",required:!0,options:W,rules:[{required:!0,errorMessage:"请选择存在哪些问题"}],childrens:[{name:"",prop:"3.1.5.2",type:"textarea",placeholder:"请输入其他",slot:"other"}]}]},{title:"新能源汽车充电桩",childrens:[{name:"充电桩缺口数:",value:"个",prop:"3.1.6.1",placeholder:"请输入充电桩缺口数",type:"number",required:!0,rules:[{required:!0,errorMessage:"请输入充电桩缺口数"}]},{name:"存在哪些问题",value:"",prop:"3.1.6.2",type:"checkbox-group",options:X,childrens:[{name:"具体问题",value:"",prop:"3.1.6.2.1",type:"textarea",placeholder:"请输入具体问题",slot:"detail",required:!0}]}]}]},{label:"环境宜居",options:[{title:"公共活动场地",childrens:[{name:"社区公共活动场地面积是否达标（既有社区，用地面积不小于150平方米。新建社区，用地面积不小于800平方米）",value:"",prop:"3.2.7.1",options:L,type:"radio",required:!0,rules:[{required:!0,errorMessage:"请选择面积是否达标"}],childrens:[{name:"用地面积(合计)",value:"平方米",prop:"3.2.7.1.1",type:"number",placeholder:"请输入用地面积(合计)"}]},{name:"公共绿地面积是否达标（既有社区至少有一片公共活动场地。新建社区，用地面积不小于4000平方米）",value:"",prop:"3.2.7.2",type:"radio",options:L,required:!0,rules:[{required:!0,errorMessage:"请选择公共绿地面积是否达标"}],childrens:[{name:"用地面积",value:"平方米",prop:"3.2.7.2.1",type:"number",placeholder:"请输入用地面积"}]},{name:"存在哪些问题",value:"",prop:"3.2.7.3",type:"checkbox-group",required:!0,options:Z,rules:[{required:!0,errorMessage:"请选择存在哪些问题"}],childrens:[{name:"",prop:"3.2.7.3",type:"textarea",placeholder:"请输入其他",slot:"other"}]}]},{title:"步行道",childrens:[{name:"不达标的步行道长度",value:"千米",prop:"3.2.8.2",placeholder:"请输入不达标的步行道长度",type:"number",required:!0,rules:[{required:!0,errorMessage:"请输入不达标的步行道长度"}]},{name:"存在哪些问题",value:"",prop:"3.2.8.1",type:"checkbox-group",options:ee,required:!0,rules:[{required:!0,errorMessage:"请选择存在哪些问题"}],childrens:[{name:"",prop:"3.2.8.1",type:"textarea",placeholder:"请输入其他",slot:"other"}]}]},{title:"垃圾分类",childrens:[{name:"未实施生活垃圾分类的小区数量",value:"个",prop:"3.2.9.2",placeholder:"请输入小区数量",required:!0,type:"number",rules:[{required:!0,errorMessage:"请输入小区数量"}]},{name:"存在哪些问题",value:"",prop:"3.2.9.1",type:"checkbox-group",options:re,required:!0,rules:[{required:!0,errorMessage:"请选择存在哪些问题"}],childrens:[{name:"",prop:"3.2.9.1",type:"textarea",placeholder:"请输入其他",slot:"other"}]}]}]},{label:"管理健全",options:[{title:"物业管理",childrens:[{name:"存在哪些问题",value:"",options:G,prop:"3.3.10.1",required:!0,type:"checkbox-group",rules:[{required:!0,errorMessage:"请选择存在哪些问题"}],childrens:[{name:"",prop:"3.3.10.1",type:"textarea",placeholder:"请输入其他",slot:"other"}]}]},{title:"智慧化改造",childrens:[{name:"存在哪些问题",value:"",prop:"3.3.11.1",type:"checkbox-group",options:H,required:!0,rules:[{required:!0,errorMessage:"请选择存在哪些问题"}],childrens:[{name:"",prop:"3.3.11.1",type:"textarea",placeholder:"请输入其他",slot:"other"}]},{name:"有条件的，查找差距和不足",value:"",prop:"3.3.11.2",type:"checkbox-group",required:!0,options:J,rules:[{required:!0,errorMessage:"请选择有条件的，查找差距和不足"}],childrens:[{name:"",prop:"3.3.11.2",type:"textarea",placeholder:"请输入其他",slot:"other"}]}]}]}],ve=(r="")=>({communityId:(e("userInfo")||{}).communityId||"",courtName:"",indicatorId:"",indicatorValue:r,latitude:0,longitude:0,meno:"",reportYear:""}),be=()=>{const r=e("userInfo")||{},a={"3.1.1.1":ve(),"3.1.1.2":ve(),"3.1.1.2.1":ve(),"3.1.1.3":ve([]),"3.1.2.1":ve(),"3.1.2.2":ve(),"3.1.2.2.1":ve(),"3.1.2.3":ve([]),"3.1.2.3.1":ve(),"3.1.3.1":ve(),"3.1.3.2":ve(),"3.1.3.2.1":ve(),"3.1.3.2.2":ve(),"3.1.3.3":ve([]),"3.1.3.3.1":ve(),"3.1.4.1":ve(),"3.1.5.1":ve(),"3.1.5.2":ve([]),"3.1.6.1":ve(),"3.1.6.2":ve([]),"3.1.6.2.1":ve()},o={"3.2.7.1":ve(),"3.2.7.1.1":ve(),"3.2.7.2":ve(),"3.2.7.2.1":ve(),"3.2.7.3":ve([]),"3.2.8.1":ve([]),"3.2.8.2":ve(""),"3.2.9.1":ve([]),"3.2.9.2":ve("")},t={"3.3.10.1":ve([]),"3.3.11.1":ve([]),"3.3.11.2":ve([])},l={"3.1.1":ve(),"3.1.2":ve(),"3.1.3":ve(),"3.1.4":ve()};return{basic:{area:"",communityId:r.communityId||"",communityName:r.communityName||"",dateTime:"",courtName:"",numberCourt:"",numberFamily:"",numberPeople:"",reportYear:"",reviewComment:""},exam:{...a,...o,...t},map:l}},qe={__name:"base",props:{form:{}},setup(e){var f;const y=(null==(f=O({baseFormOptions:ye}))?void 0:f.baseFormOptions)||[];return(f,g)=>{const v=m,b=N(r("uni-forms-item"),D),q=N(r("uni-card"),E),x=h;return a(),o(x,{class:"content"},{default:t((()=>[(a(!0),l(i,null,s(n(y),((r,n)=>(a(),o(q,{isFull:!0,class:"form-card",title:r.title,key:n},{default:t((()=>[(a(!0),l(i,null,s(r.childrens,(r=>(a(),o(b,{key:r.prop,required:r.required,label:r.name,name:["basic",r.prop],rules:r.rules},{default:t((()=>[u(ue,{msg:e.form.basic[r.prop],"onUpdate:msg":a=>e.form.basic[r.prop]=a,options:r.options,type:r.type,placeholder:r.placeholder},null,8,["msg","onUpdate:msg","options","type","placeholder"]),r.value?(a(),o(v,{key:0,class:"suffix"},{default:t((()=>[p(d(r.value),1)])),_:2},1024)):c("",!0)])),_:2},1032,["required","label","name","rules"])))),128))])),_:2},1032,["title"])))),128))])),_:1})}}};const xe=T({name:"UniSection",emits:["click"],props:{type:{type:String,default:""},title:{type:String,required:!0,default:""},titleFontSize:{type:String,default:"14px"},titleColor:{type:String,default:"#333"},subTitle:{type:String,default:""},subTitleFontSize:{type:String,default:"12px"},subTitleColor:{type:String,default:"#999"},padding:{type:[Boolean,String],default:!1}},computed:{_padding(){return"string"==typeof this.padding?this.padding:this.padding?"10px":""}},watch:{title(e){uni.report&&""!==e&&uni.report("title",e)}},methods:{onClick(){this.$emit("click")}}},[["render",function(e,r,l,i,s,n){const v=h,b=m;return a(),o(v,{class:"uni-section"},{default:t((()=>[u(v,{class:"uni-section-header",onClick:n.onClick},{default:t((()=>[l.type?(a(),o(v,{key:0,class:f(["uni-section-header__decoration",l.type])},null,8,["class"])):y(e.$slots,"decoration",{key:1},void 0,!0),u(v,{class:"uni-section-header__content"},{default:t((()=>[u(b,{style:g({"font-size":l.titleFontSize,color:l.titleColor}),class:f(["uni-section__content-title",{distraction:!l.subTitle}])},{default:t((()=>[p(d(l.title),1)])),_:1},8,["style","class"]),l.subTitle?(a(),o(b,{key:0,style:g({"font-size":l.subTitleFontSize,color:l.subTitleColor}),class:"uni-section-header__content-sub"},{default:t((()=>[p(d(l.subTitle),1)])),_:1},8,["style"])):c("",!0)])),_:1}),u(v,{class:"uni-section-header__slot-right"},{default:t((()=>[y(e.$slots,"right",{},void 0,!0)])),_:3})])),_:3},8,["onClick"]),u(v,{class:"uni-section-content",style:g({padding:n._padding})},{default:t((()=>[y(e.$slots,"default",{},void 0,!0)])),_:3},8,["style"])])),_:3})}],["__scopeId","data-v-0a8818d5"]]),_e=T({__name:"exam",props:{form:{}},setup(e){var f;const y=e,g=(null==(f=O({examFormOptions:ge}))?void 0:f.examFormOptions)||[],q=e=>{const r=e.options;return{"3.1.2.3":[{validateFunction:function(e,a,o,t){const l=y.form;return!a.length&&r.length>1&&t("请选择"),a.find((e=>"1"==e))&&!l.exam["3.1.2.3.1"].indicatorValue&&t("具体问题必填"),!0}}],"3.1.3.3":[{validateFunction:function(e,a,o,t){const l=y.form;return!a.length&&r.length>1&&t("请选择"),a.find((e=>"1"==e))&&!l.exam["3.1.3.3.1"].indicatorValue&&t("具体问题必填"),!0}}],"3.1.6.2":[{validateFunction:function(e,a,o,t){const l=y.form;return!a.length&&r.length>1&&t("请选择"),a.find((e=>"1"==e))&&!l.exam["3.1.6.2.1"].indicatorValue&&t("具体问题必填"),!0}}],"3.1.3.2":[{required:!0,errorMessage:"必选,必填"},{validateFunction:function(e,r,a,o){const t=y.form;let l=[];return t.exam["3.1.3.2.1"].indicatorValue||l.push("建筑面积必填"),t.exam["3.1.3.2.2"].indicatorValue||l.push("用地面积必填"),l.length>0&&o(l.join(";")),!0}}],"3.1.1.2":[{required:!0,errorMessage:"必选,必填"},{validateFunction:function(e,r,a,o){let t=[];return y.form.exam["3.1.1.2.1"].indicatorValue||t.push("建筑面积必填"),t.length>0&&o(t.join(";")),!0}}],"3.1.2.2":[{required:!0,errorMessage:"必选,必填"},{validateFunction:function(e,r,a,o){let t=[];return y.form.exam["3.1.2.2.1"].indicatorValue||t.push("建筑面积必填"),t.length>0&&o(t.join(";")),!0}}],"3.2.7.1":[{required:!0,errorMessage:"必选,必填"},{validateFunction:function(e,r,a,o){let t=[];return y.form.exam["3.2.7.1.1"].indicatorValue||t.push("用地面积(合计)必填"),t.length>0&&o(t.join(";")),!0}}],"3.2.7.2":[{required:!0,errorMessage:"必选,必填"},{validateFunction:function(e,r,a,o){let t=[];return y.form.exam["3.2.7.2.1"].indicatorValue||t.push("用地面积必填"),t.length>0&&o(t.join(";")),!0}}]}[e.prop]||e.rules};return(f,y)=>{const x=m,_=N(r("uni-icons"),pe),k=h,V=N(r("uni-forms-item"),D),M=N(r("uni-card"),E),I=N(r("uni-section"),xe);return a(),o(k,{class:"content"},{default:t((()=>[(a(!0),l(i,null,s(n(g),(r=>(a(),o(I,{class:"section-title",title:r.label,key:r.label},{default:t((()=>[(a(!0),l(i,null,s(r.options,((r,n)=>(a(),o(M,{isFull:!0,key:n,class:"form-card"},{title:t((()=>[u(k,{class:"card-title"},{default:t((()=>[u(x,null,{default:t((()=>[p(d(r.title),1)])),_:2},1024),r.map?(a(),o(_,{key:0,type:"location",size:"24",onClick:e=>{return a=r.prop,o=r.keyword,void b({url:"/pages/home/map?"+le({keyword:o,key:a})});var a,o}},null,8,["onClick"])):c("",!0)])),_:2},1024)])),default:t((()=>[(a(!0),l(i,null,s(r.childrens,(r=>(a(),o(V,{key:r.prop,required:r.required,label:r.name,name:["exam",r.prop,"indicatorValue"],rules:q(r)},{default:t((()=>[u(ue,{msg:e.form.exam[r.prop].indicatorValue,"onUpdate:msg":a=>e.form.exam[r.prop].indicatorValue=a,options:r.options,type:r.type,placeholder:r.placeholder},v({default:t((()=>["checkbox-group"!=r.type&&r.childrens?(a(!0),l(i,{key:0},s(r.childrens,((r,l)=>(a(),o(V,{label:r.name,key:r.prop,class:"child-form-rows child-form-item",required:r.required},{default:t((()=>[u(ue,{msg:e.form.exam[r.prop].indicatorValue,"onUpdate:msg":a=>e.form.exam[r.prop].indicatorValue=a,type:r.type,placeholder:r.placeholder},null,8,["msg","onUpdate:msg","type","placeholder"]),r.value?(a(),o(x,{key:0,class:"suffix"},{default:t((()=>[p(d(r.value),1)])),_:2},1024)):c("",!0)])),_:2},1032,["label","required"])))),128)):c("",!0)])),_:2},[s(r.childrens,((l,i)=>({name:l.slot,fn:t((()=>[u(V,{label:l.name,required:l.required,class:"child-form-item"},{default:t((()=>[l.prop==r.prop?(a(),o(ue,{key:0,msg:e.form.exam[l.prop].meno,"onUpdate:msg":r=>e.form.exam[l.prop].meno=r,type:l.type,placeholder:l.placeholder},null,8,["msg","onUpdate:msg","type","placeholder"])):(a(),o(ue,{key:1,msg:e.form.exam[l.prop].indicatorValue,"onUpdate:msg":r=>e.form.exam[l.prop].indicatorValue=r,type:l.type,placeholder:l.placeholder},null,8,["msg","onUpdate:msg","type","placeholder"]))])),_:2},1032,["label","required"])]))})))]),1032,["msg","onUpdate:msg","options","type","placeholder"]),r.value?(a(),o(x,{key:0,class:"suffix"},{default:t((()=>[p(d(r.value),1)])),_:2},1024)):c("",!0)])),_:2},1032,["required","label","name","rules"])))),128))])),_:2},1024)))),128))])),_:2},1032,["title"])))),128))])),_:1})}}},[["__scopeId","data-v-179fc323"]]),ke=T({__name:"index",props:{state:String,communityId:String,courtName:String,storage:String},setup(s){var m;const y=q(e("userInfo")||null),g=q("社区填报"),v=q(0),b=q(""),T=q((null==(m=O({defaultForm:be}))?void 0:m.defaultForm())||{}),D=y.value?y.value.communityId:"",E=q(null),G=A({allIndicatorValue:ae,specificIndicatorValue:oe}),H=e=>{v.value=e};U((r=>{if(r.state)g.value=(e=>{let r="";switch(e.state){case"1":r=e.courtName+"-待审核";break;case"2":r=e.courtName+"-审核通过";break;case"3":r=e.courtName+"-审核未通过"}return r})(r),b.value=r.state,L(r.communityId);else if(r.storage){const a=e(r.storage);T.value=ie.assign(T.value,a[D])}})),z((()=>{const r=e("location");r&&J(r)}));const J=(e={})=>{for(let r in e)T.value.map.hasOwnProperty(r)&&(T.value.map[r].location=e[r],T.value.map[r].indicatorValue=1);x("location")},L=async(e,r="")=>{_();const a={communityId:e,courtName:r},o=await de(a);let{basicInfo:t,indicatorValueList:l}=o.data;t=se(t),T.value.basic=ie.assign(T.value.basic,t);const i={...T.value.exam,...T.value.map};for(let s in i){const e=l.find((e=>e.indicatorId==s));if(e)if(Array.isArray(i[s].indicatorValue))if(G.specificIndicatorValue.hasOwnProperty(s))e.indicatorValue+="",i[s].indicatorValue=e.indicatorValue.split(";");else{const r=e.meno.split(";");if(r.length){const e=l.find((e=>e.indicatorId==r[r.length-1]));e&&e.meno&&(i[s].meno=e.meno)}i[s].indicatorValue=r}else i[s].indicatorValue=e.indicatorValue+"",i[s].latitude=e.latitude,i[s].location=e.location}k()};V((()=>T),(r=>{const a=e("areaForm")||{};D&&(a[D]=r.value,j("areaForm",a))}),{deep:!0});const R=async(r=1)=>{_();const a=ne().year(),o={...T.value.basic,dateTime:new Date,state:r,reportYear:a};await ce(o);const t=[],l=ie.cloneDeep({...T.value.exam,...T.value.map});for(var i in l){const e=l[i];if(e.indicatorId=i,e.reportYear=a,Array.isArray(e.indicatorValue)){const r=e.meno,o=ie.cloneDeep(e.indicatorValue);if(G.specificIndicatorValue.hasOwnProperty(i))for(let a in G.specificIndicatorValue)a==i&&(e.indicatorValue=e.indicatorValue.join(";"),e.indicatorValue||(l[G.specificIndicatorValue[i]].indicatorValue=""));else{if(o.length){e.indicatorValue=1;const l=G.allIndicatorValue[i];l.forEach(((e,i)=>{const s=o.find((r=>r==e.value)),n=ve();n.indicatorId=e.value,n.reportYear=a,s?(n.indicatorValue=1,i==l.length-1&&(n.meno=r)):n.indicatorValue=0,t.push(n)}))}else e.indicatorValue=0;e.meno=o.join(";")}}t.push(e)}await me(t),k(),w({title:"提交成功",duration:2e3,icon:"none"});const s=e("areaForm");delete s[D],"{}"===JSON.stringify(s)?x("areaForm"):j("areaForm",s),setTimeout((()=>{S({url:"/pages/home/index"})}),800)};return(e,s)=>{const m=N(r("uv-navbar"),C),y=N(r("uni-notice-bar"),P),q=N(r("z-tabs"),Y),x=N(r("uni-forms"),$),_=N(r("uv-button"),B),k=h;return a(),l(i,null,[u(m,{title:g.value,border:"",leftIconSize:"50rpx",placeholder:"",autoBack:""},null,8,["title"]),u(k,null,{default:t((()=>["3"===b.value?(a(),o(y,{key:0,text:"审核不通过意见："+T.value.basic.reviewComment},null,8,["text"])):c("",!0),u(q,{list:n(fe),onChange:H},null,8,["list"]),u(k,{class:f(["form-box",{mask:"1"==b.value||"2"==b.value}])},{default:t((()=>[u(x,{modelValue:T.value,"label-position":"top","label-width":"100%",class:"form-data",ref_key:"formRef",ref:E},{default:t((()=>[M(u(qe,{form:T.value},null,8,["form"]),[[I,0==v.value]]),M(u(_e,{form:T.value},null,8,["form"]),[[I,1==v.value]])])),_:1},8,["modelValue"]),u(k,{class:"btns"},{default:t((()=>[u(_,{class:"submit",type:"primary",onClick:s[0]||(s[0]=e=>(console.log(T.value,9999),void E.value.validate().then((e=>{F({title:"提交",content:"一旦提交不可修改,确定提交？",success:e=>{e.confirm?R():e.cancel&&console.log("用户点击了取消")}})})).catch((e=>{he("请填写完整")}))))},{default:t((()=>[p(d("4"==b.value?"重新提交":"提交"),1)])),_:1})])),_:1})])),_:1},8,["class"])])),_:1})],64)}}},[["__scopeId","data-v-1be34b99"]]);export{ke as default};