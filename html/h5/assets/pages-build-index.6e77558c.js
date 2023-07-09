import{r as a,f as e,o as t,a as s,w as l,g as o,F as i,k as u,u as r,b as n,C as m,D as d,l as c,i as p,O as f,h as b,I as v,A as _,J as g,j as y,T as h,q as j,d as k,n as I,E as N,G as x,H as V,m as w}from"./index-f9923a45.js";import{_ as S}from"./uv-navbar.85ff6eac.js";import{_ as q,r as B,o as C,a as F,b as z}from"./uni-app.es.05b2e329.js";import{d as E,_ as O}from"./form.aa36e78b.js";import{_ as P}from"./uni-icons.8cc73f7f.js";import{_ as U,b as A}from"./uni-forms.921cd8d3.js";import{_ as D}from"./uni-card.a4063fa8.js";import{_ as L}from"./uv-button.aa73ea60.js";import{h as M}from"./h-input.d45a6e9c.js";import{s as T,a as G}from"./info.26db5737.js";import{f as H,n as J,d as R}from"./index.7fb7cc5b.js";import{j as W,d as Y,k as K,f as Q}from"./baseApi.9064515e.js";import{t as X}from"./toast.d3db215c.js";import{_ as Z,o as $}from"./lodash.cd6eed32.js";import{d as aa}from"./dayjs.min.16297c83.js";import"./uv-icon.5bb898f1.js";import"./uni-data-picker.fbb2b343.js";const ea=q({__name:"exam",props:{form:{}},emits:["write"],setup(f,{emit:b}){const v=f,_=E({formOptions:H}).formOptions();a("");const g=[{required:!0,errorMessage:"请选择"},{validateFunction:(a,e,t,s)=>{const l=a.label.split("#")[1],o=v.form[l];return o.description&&o.photoPath||e!=T[0].value||s("必须填写问题资料"),!0}}];return(a,v)=>{const y=B(e("uv-button"),L),h=p,j=B(e("uni-forms-item"),U),k=B(e("uni-card"),D);return t(),s(h,{class:"content"},{default:l((()=>[(t(!0),o(i,null,u(r(_),((a,e)=>(t(),s(k,{class:"form-card",title:a.title,isFull:!0,key:e},{default:l((()=>[(t(!0),o(i,null,u(a.childrens,(a=>(t(),o(i,{key:a.prop},["1"!=a.status?(t(),s(j,{key:0,label:a.name,required:"",name:[a.prop,"indicatorValue"],rules:g},{default:l((()=>[n(M,{msg:f.form[a.prop].indicatorValue,"onUpdate:msg":e=>f.form[a.prop].indicatorValue=e,type:"radio",options:r(T)},null,8,["msg","onUpdate:msg","options"]),m(n(h,null,{default:l((()=>[n(y,{onClick:e=>((a,e)=>{if(a){const a={indicatorId:e.prop,label:e.name};b("write",a)}})(e,a),size:"small",type:"primary",plain:"",text:f.form[a.prop].description?"已填写":"填写信息",class:"btn"},null,8,["onClick","text"])])),_:2},1536),[[d,f.form[a.prop].indicatorValue==r(T)[0].value]])])),_:2},1032,["label","name"])):c("",!0)],64)))),128))])),_:2},1032,["title"])))),128))])),_:1})}}},[["__scopeId","data-v-15f55541"]]),ta=q({__name:"index",props:{state:String,communityId:String,courtName:String},setup(u){const m=a("楼栋信息"),d=a(null),q=a(""),H=a(E({defaultForm:R}).defaultForm()),ta=a([]);let sa=[],la={};C((a=>{a.communityId&&(m.value=J(a),H.value.base=Z.assign(H.value.base,a),ma())})),F((()=>{oa(),ia()}));const oa=()=>{const a=f.getters.getBuildBaseInfo;a&&a.base&&(H.value=Z.assign(H.value,a),f.commit("removeBuildBaseInfo"))},ia=()=>{let a=b("location");a&&(la=a,v("location"))},ua=_((()=>G[1].value==q.value||G[2].value==q.value)),ra=a=>{const e=Z.assign(H.value.base,a);f.commit("setBuildBaseInfo",{base:e,[e.indicatorId]:H.value[e.indicatorId]}),I({url:"/pages/build/info"})};g((()=>H.value),(a=>{a.base.buildNumber}),{deep:!0}),z((()=>{na()}));const na=()=>{v("buildInfoStorage")},ma=async()=>{(()=>{const a=b("buildInfoStorage");a&&(H.value=Z.assign(H.value,a))})();let a=H.value.base;const{communityId:e,courtName:t,buildNumber:s}=a,l={communityId:e,courtName:t};if(s&&a.state){q.value=a.state;const e=await W({...l,buildNumber:s});if("0"==e.status){const a=e.data;a.indicatorValueList.forEach((a=>{H.value[a.indicatorId]&&(H.value[a.indicatorId]={...a,indicatorValue:a.indicatorValue+""})}));for(let e in H.value.base)H.value.base[e]=a.basicInfo[e]||""}G[3].value==q.value&&da(l)}else da(l)},da=async a=>{const e=await Y(a);ta.value=e.data.filter((a=>"1"!=a.problemState)).map((a=>a.buildNumber)),sa=e.data,q.value||ca()},ca=()=>{0==ta.value.length&&y({title:"楼栋信息",content:"已经没有楼栋可填",success:function(a){(a.confirm||a.cancel)&&h()}})},pa=async()=>{const a=aa().year(),e=[],t=Z.cloneDeep(H.value),s=t.base;sa.forEach((a=>{a.buildNumber==s.buildNumber&&(a.problemState="1",a.state=1)})),delete t.base;for(let l in t){let o=t[l];o.indicatorValue&&(o.indicatorValue==T[1].value&&(o.description="",o.photoPath=""),o=Z.assign(o,{...s,indicatorId:l,reportYear:a,location:la[s.buildNumber]||""}),delete o.state,e.push(o))}N(),Promise.all([K(e),Q(sa)]).then((a=>{x(),V({title:"提交成功",duration:2e3,icon:"none"}),setTimeout((()=>{na(),h()}),800)}))};return(a,u)=>{const f=B(e("uv-navbar"),S),b=B(e("uni-notice-bar"),O),v=w,_=p,g=B(e("uni-icons"),P),h=B(e("uni-forms-item"),U),N=B(e("uni-card"),D),x=B(e("uni-forms"),A),V=B(e("uv-button"),L);return t(),o(i,null,[n(f,{onLeftClick:na,title:m.value,border:"",leftIconSize:"50rpx",placeholder:"",autoBack:""},null,8,["title"]),n(_,null,{default:l((()=>[q.value==r(G)[3].value?(t(),s(b,{key:0,text:"审核不通过意见："+H.value.base.reviewComment},null,8,["text"])):c("",!0),n(_,{class:j(["form-box",{mask:r(ua)}])},{default:l((()=>[n(x,{modelValue:H.value,"label-position":"top","label-width":"100%",class:"form-data",ref_key:"formRef",ref:d},{default:l((()=>[n(N,{class:"form-card",isFull:!0},{default:l((()=>[n(h,{label:"选择楼栋",required:"",name:["base","buildNumber"],rules:[{required:!0,errorMessage:"选择楼栋"}]},{label:l((()=>[n(_,{class:"label-title"},{default:l((()=>[n(_,null,{default:l((()=>[n(v,{class:"is-required"},{default:l((()=>[k("*")])),_:1}),n(v,null,{default:l((()=>[k("选择楼栋")])),_:1})])),_:1}),H.value.base.buildNumber?(t(),s(g,{key:0,type:"location",size:"24",onClick:u[0]||(u[0]=a=>((a,e)=>{var t;const s={keyword:(null==(t=H.value.base)?void 0:t.courtName)||"",key:a};I({url:"/pages/home/map?"+$(s)})})(H.value.base.buildNumber))})):c("",!0)])),_:1})])),default:l((()=>[n(M,{type:q.value?"value":"year",msg:H.value.base.buildNumber,"onUpdate:msg":u[1]||(u[1]=a=>H.value.base.buildNumber=a),options:ta.value,placeholder:"请先选择楼栋"},null,8,["type","msg","options"])])),_:1})])),_:1}),n(_,{class:j({buildmask:!H.value.base.buildNumber})},{default:l((()=>[n(ea,{onWrite:ra,form:H.value},null,8,["form"])])),_:1},8,["class"])])),_:1},8,["modelValue"]),r(ua)?c("",!0):(t(),s(_,{key:0,class:"btns"},{default:l((()=>[n(V,{class:"submit",type:"primary",onClick:u[2]||(u[2]=a=>{d.value.validate().then((a=>{y({title:"提交",content:"一旦提交不可修改,确定提交？",success:a=>{a.confirm?pa():a.cancel&&console.log("用户点击了取消")}})})).catch((a=>{X("请填写完整")}))})},{default:l((()=>[k("提交")])),_:1})])),_:1}))])),_:1},8,["class"])])),_:1})],64)}}},[["__scopeId","data-v-1cb40982"]]);export{ta as default};