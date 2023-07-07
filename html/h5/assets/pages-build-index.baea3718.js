import{r as a,e,o as t,c as s,w as l,f as o,F as i,j as u,u as r,a as n,B as m,C as c,k as d,i as p,N as f,g as b,H as v,z as _,I as g,h as y,R as h,p as j,b as k,n as I,D as N,E as x,G as V,l as w}from"./index-d68978c3.js";import{_ as B}from"./uv-navbar.51a41652.js";import{_ as S,r as C,o as q,a as F,b as z}from"./uni-app.es.dd1c2cd8.js";import{d as E,_ as P}from"./form.58865311.js";import{_ as U}from"./uni-icons.9b80f9c3.js";import{_ as D,b as L}from"./uni-forms.f26f10bb.js";import{_ as M}from"./uni-card.858c3da6.js";import{_ as O}from"./uv-button.a00d60e3.js";import{h as R}from"./h-input.3ebd95dc.js";import{s as A,a as G}from"./info.26db5737.js";import{f as H,n as T,d as W}from"./index.0eb7fdd8.js";import{j as Y,d as J,k as K,f as Q}from"./baseApi.e488cac3.js";import{t as X}from"./toast.c60169bc.js";import{_ as Z,o as $}from"./lodash.576e2588.js";import{d as aa}from"./dayjs.min.4742d98f.js";import"./uv-icon.4e469848.js";import"./uni-data-picker.70a1c02e.js";const ea=S({__name:"exam",props:{form:{}},emits:["write"],setup(f,{emit:b}){const v=f,_=E({formOptions:H}).formOptions();a("");const g=[{required:!0,errorMessage:"请选择"},{validateFunction:(a,e,t,s)=>{const l=a.label.split("#")[1],o=v.form[l];return o.description&&o.photoPath||e!=A[0].value||s("必须填写问题资料"),!0}}];return(a,v)=>{const y=C(e("uv-button"),O),h=p,j=C(e("uni-forms-item"),D),k=C(e("uni-card"),M);return t(),s(h,{class:"content"},{default:l((()=>[(t(!0),o(i,null,u(r(_),((a,e)=>(t(),s(k,{class:"form-card",title:a.title,isFull:!0,key:e},{default:l((()=>[(t(!0),o(i,null,u(a.childrens,(a=>(t(),o(i,{key:a.prop},["1"!=a.status?(t(),s(j,{key:0,label:a.name,required:"",name:[a.prop,"indicatorValue"],rules:g},{default:l((()=>[n(R,{msg:f.form[a.prop].indicatorValue,"onUpdate:msg":e=>f.form[a.prop].indicatorValue=e,type:"radio",options:r(A)},null,8,["msg","onUpdate:msg","options"]),m(n(h,null,{default:l((()=>[n(y,{onClick:e=>((a,e)=>{if(a){const a={indicatorId:e.prop,label:e.name};b("write",a)}})(e,a),size:"small",type:"primary",plain:"",text:f.form[a.prop].description?"已填写":"填写信息",class:"btn"},null,8,["onClick","text"])])),_:2},1536),[[c,f.form[a.prop].indicatorValue==r(A)[0].value]])])),_:2},1032,["label","name"])):d("",!0)],64)))),128))])),_:2},1032,["title"])))),128))])),_:1})}}},[["__scopeId","data-v-15f55541"]]),ta=S({__name:"index",props:{state:String,communityId:String,courtName:String},setup(u){const m=a("楼栋信息"),c=a(null),S=a(""),H=a(E({defaultForm:W}).defaultForm()),ta=a([]);let sa=[],la={};q((a=>{a.communityId&&(m.value=T(a),H.value.base=Z.assign(H.value.base,a),ma())})),F((()=>{oa(),ia()}));const oa=()=>{const a=f.getters.getBuildBaseInfo;a&&a.base&&(H.value=Z.assign(H.value,a),f.commit("removeBuildBaseInfo"))},ia=()=>{let a=b("location");a&&(la=a,v("location"))},ua=_((()=>G[1].value==S.value||G[2].value==S.value)),ra=a=>{const e=Z.assign(H.value.base,a);f.commit("setBuildBaseInfo",{base:e,[e.indicatorId]:H.value[e.indicatorId]}),I({url:"/pages/build/info"})};g((()=>H.value),(a=>{a.base.buildNumber}),{deep:!0}),z((()=>{na()}));const na=()=>{v("buildInfoStorage")},ma=async()=>{(()=>{const a=b("buildInfoStorage");a&&(H.value=Z.assign(H.value,a))})();let a=H.value.base;const{communityId:e,courtName:t,buildNumber:s}=a,l={communityId:e,courtName:t};if(s&&a.state){S.value=a.state;const e=await Y({...l,buildNumber:s});if("0"==e.status){const a=e.data;a.indicatorValueList.forEach((a=>{H.value[a.indicatorId]&&(H.value[a.indicatorId]={...a,indicatorValue:a.indicatorValue+""})}));for(let e in H.value.base)H.value.base[e]=a.basicInfo[e]||""}G[3].value==S.value&&ca(l)}else ca(l)},ca=async a=>{const e=await J(a);ta.value=e.data.filter((a=>"1"!=a.problemState)).map((a=>a.buildNumber)),sa=e.data,S.value||da()},da=()=>{0==ta.value.length&&y({title:"楼栋信息",content:"已经没有楼栋可填",success:function(a){(a.confirm||a.cancel)&&h()}})},pa=async()=>{const a=aa().year(),e=[],t=Z.cloneDeep(H.value),s=t.base;sa.forEach((a=>{a.buildNumber==s.buildNumber&&(a.problemState="1",a.state=1)})),delete t.base;for(let l in t){let o=t[l];o.indicatorValue&&(o.indicatorValue==A[1].value&&(o.description="",o.photoPath=""),o=Z.assign(o,{...s,indicatorId:l,reportYear:a,location:la[s.buildNumber]||""}),delete o.state,e.push(o))}N(),Promise.all([K(e),Q(sa)]).then((a=>{x(),V({title:"提交成功",duration:2e3,icon:"none"}),setTimeout((()=>{na(),h()}),800)}))};return(a,u)=>{const f=C(e("uv-navbar"),B),b=C(e("uni-notice-bar"),P),v=w,_=p,g=C(e("uni-icons"),U),h=C(e("uni-forms-item"),D),N=C(e("uni-card"),M),x=C(e("uni-forms"),L),V=C(e("uv-button"),O);return t(),o(i,null,[n(f,{onLeftClick:na,title:m.value,border:"",leftIconSize:"50rpx",placeholder:"",autoBack:""},null,8,["title"]),n(_,null,{default:l((()=>[S.value==r(G)[3].value?(t(),s(b,{key:0,text:"审核不通过意见："+H.value.base.reviewComment},null,8,["text"])):d("",!0),n(_,{class:j(["form-box",{mask:r(ua)}])},{default:l((()=>[n(x,{modelValue:H.value,"label-position":"top","label-width":"100%",class:"form-data",ref_key:"formRef",ref:c},{default:l((()=>[n(N,{class:"form-card",isFull:!0},{default:l((()=>[n(h,{label:"选择楼栋",required:"",name:["base","buildNumber"],rules:[{required:!0,errorMessage:"选择楼栋"}]},{label:l((()=>[n(_,{class:"label-title"},{default:l((()=>[n(_,null,{default:l((()=>[n(v,{class:"is-required"},{default:l((()=>[k("*")])),_:1}),n(v,null,{default:l((()=>[k("选择楼栋")])),_:1})])),_:1}),H.value.base.buildNumber?(t(),s(g,{key:0,type:"location",size:"24",onClick:u[0]||(u[0]=a=>((a,e)=>{var t;const s={keyword:(null==(t=H.value.base)?void 0:t.courtName)||"",key:a};I({url:"/pages/home/map?"+$(s)})})(H.value.base.buildNumber))})):d("",!0)])),_:1})])),default:l((()=>[n(R,{type:S.value?"value":"year",msg:H.value.base.buildNumber,"onUpdate:msg":u[1]||(u[1]=a=>H.value.base.buildNumber=a),options:ta.value,placeholder:"请先选择楼栋"},null,8,["type","msg","options"])])),_:1})])),_:1}),n(_,{class:j({buildmask:!H.value.base.buildNumber})},{default:l((()=>[n(ea,{onWrite:ra,form:H.value},null,8,["form"])])),_:1},8,["class"])])),_:1},8,["modelValue"]),r(ua)?d("",!0):(t(),s(_,{key:0,class:"btns"},{default:l((()=>[n(V,{class:"submit",type:"primary",onClick:u[2]||(u[2]=a=>{c.value.validate().then((a=>{y({title:"提交",content:"一旦提交不可修改,确定提交？",success:a=>{a.confirm?pa():a.cancel&&console.log("用户点击了取消")}})})).catch((a=>{X("请填写完整")}))})},{default:l((()=>[k("提交")])),_:1})])),_:1}))])),_:1},8,["class"])])),_:1})],64)}}},[["__scopeId","data-v-1cb40982"]]);export{ta as default};