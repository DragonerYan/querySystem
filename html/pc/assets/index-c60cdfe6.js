import{n as g,j as y,V as _,k as b,p as C,m as w,l as V,o as I,q as S,d as A,r as D,t as O}from"./index-21681da6.js";import{m as x,A as f,T as k,a as P}from"./Audit-b6e2130c.js";import{a as d,s as m,b as v,w as T,c as F}from"./info-daba9252.js";var $=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"detail-base"},[e("div",{staticClass:"audit-status"},[t.state==t.areaStateOptions[0].value?e("t-tag",{attrs:{size:"large",theme:"warning",variant:"light"}},[t._v(t._s(t.areaStateOptions[0].label))]):t.state==t.areaStateOptions[1].value?e("t-tag",{attrs:{size:"large",theme:"success",variant:"light"}},[t._v(t._s(t.areaStateOptions[1].label))]):t.state==t.areaStateOptions[2].value?e("t-tag",{attrs:{size:"large",theme:"danger",variant:"light"}},[t._v(t._s(t.areaStateOptions[2].label))]):t._e(),t.state==t.areaStateOptions[2].value?e("p",{staticClass:"reason"},[e("span",[t._v("拒绝理由：")]),e("span",[t._v(" "+t._s(t.formData.reviewComment))])]):t._e()],1),t._l(t.baseInfoData,function(a,s){return e("t-card",{key:s,attrs:{title:a.title,bordered:!1}},[e("div",{staticClass:"info-block",class:{"info-block-row":s>0}},t._l(a.children,function(o){return e("div",{key:o.prop,staticClass:"info-item"},[e("p",{staticClass:"label"},[e("span",[t._v(t._s(o.name))]),e("span",{staticClass:"value"},[t.formData[o.prop]?e("span",[t._v(t._s(t.formData[o.prop]))]):e("span",{staticClass:"never"})]),t._v(t._s(o.value))])])}),0)])})],2)},j=[];const K={name:"AreaDetail",props:{detail:{type:Object,default:()=>({})}},data(){return{baseInfoData:x.getAreaInfoData(),formData:{state:""},areaStateOptions:f}},created(){this.init()},computed:{state(){return this.formData.state}},methods:{init(){var i,e;const t=this.detail;for(const a in t){let s=t[a];if(Object.hasOwnProperty.call(d,a)){let o=[];(i=s.indicatorValue)==null||i.forEach(l=>{if(l==d[a][d[a].length-1].value&&s.meno)o.push(s.meno);else{const c=d[a].find(u=>u.value==l);c&&o.push(c.text)}}),s=o.join(";")}else if(Object.hasOwnProperty.call(m,a)){let o=[];if((e=s.indicatorValue)==null||e.forEach(l=>{const c=m[a].find(u=>u.value==l);c&&o.push(c.text)}),s=o.join(";"),o.length>0){const l=t[v[a]].indicatorValue;s=s+"。具体问题是"+l}}else if(T.find(o=>o==a)){const o=F.find(l=>l.value==s.indicatorValue);s=(o==null?void 0:o.text)||""}else s=(s==null?void 0:s.indicatorValue)||s;this.formData[a]=s}}}},h={};var N=g(K,$,j,!1,B,"2844646c",null,null);function B(t){for(let i in h)this[i]=h[i]}const z=function(){return N.exports}(),n=t=>({communityId:"",courtName:"",indicatorId:"",indicatorValue:t||"",latitude:0,longitude:0,meno:"",reportYear:""}),R=()=>({province:"",city:"",state:"",reviewComment:"",county:"",street:"",area:"",communityId:"",communityName:"",dateTime:"",courtName:"",numberCourt:"",numberFamily:"",numberPeople:"",reportYear:""}),E=()=>({"3.1.1.1":n(),"3.1.1.2":n(),"3.1.1.2.1":n(),"3.1.1.3":n([]),"3.1.2.1":n(),"3.1.2.2":n(),"3.1.2.2.1":n(),"3.1.2.3":n([]),"3.1.2.3.1":n(),"3.1.3.1":n(),"3.1.3.2":n(),"3.1.3.2.1":n(),"3.1.3.2.2":n(),"3.1.3.3":n([]),"3.1.3.3.1":n(),"3.1.4.1":n(),"3.1.5.1":n(),"3.1.5.2":n([]),"3.1.6.1":n(),"3.1.6.2":n([]),"3.1.6.2.1":n(),"3.2.7.1":n(),"3.2.7.1.1":n(),"3.2.7.2":n(),"3.2.7.2.1":n(),"3.2.7.3":n([]),"3.2.8.1":n([]),"3.2.8.2":n(""),"3.2.9.1":n([]),"3.2.9.2":n(""),"3.3.10.1":n([]),"3.3.11.1":n([]),"3.3.11.2":n([])}),L=({basicInfo:t,indicatorValueList:i},e)=>{const a=e;t=y(t),i.forEach(s=>{Object.hasOwnProperty.call(a,s.indicatorId)&&(a[s.indicatorId]=s.indicatorValue)});for(let s in t)Object.hasOwnProperty.call(a,s)&&(a[s]=t[s]);return a},q=({indicatorValueList:t},i)=>{for(let e in i){const a=t.find(s=>s.indicatorId==e);if(a)if(Array.isArray(i[e].indicatorValue))if(v.hasOwnProperty(e))a.indicatorValue+="",i[e].indicatorValue=a.indicatorValue.split(";");else{const s=a.meno.split(";");if(s.length){const o=t.find(l=>l.indicatorId==s[s.length-1]);o&&o.meno&&(i[e].meno=o.meno)}i[e].indicatorValue=s}else i[e].indicatorValue=a.indicatorValue+"",i[e].latitude=a.latitude,i[e].location=a.location}return i},M=[{colKey:"row-select",type:"multiple",width:64,fixed:"left"},{title:"社区",colKey:"communityName"},{title:"省",colKey:"province"},{title:"市",colKey:"city"},{title:"区",colKey:"county"},{title:"街道",colKey:"street"},{title:"状态",cell:{col:"state"},colKey:"state"},{align:"left",fixed:"right",colKey:"op",title:"操作",width:120}];var Y=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",[e("t-card",{staticClass:"list-card-container",attrs:{bordered:!1}},[e("t-form",{ref:"form",style:{marginBottom:"8px"},attrs:{data:t.formData,"label-width":"fit-content",colon:""},on:{reset:t.onReset,submit:t.onSubmit}},[e("t-row",{attrs:{justify:"space-between"}},[e("t-col",{attrs:{span:6}},[e("t-row",{staticStyle:{"flex-wrap":"nowrap"}},[e("t-col",{attrs:{flex:5}},[e("t-form-item",{attrs:{label:"市区街道"}},[e("t-cascader",{attrs:{options:t.options,placeholder:"请选择市区街道","check-strictly":"",onPopupVisibleChange:t.handlePopupVisibleChange,popupVisible:t.popupVisible},on:{change:t.handleChange},model:{value:t.areaVal,callback:function(a){t.areaVal=a},expression:"areaVal"}})],1)],1),e("t-col",{attrs:{flex:4,offset:1}},[e("t-form-item",{attrs:{label:"审核状态",name:"state"}},[e("t-select",{staticClass:"form-item-content`",attrs:{options:t.areaStateOptions,placeholder:"请选择审核状态"},model:{value:t.formData.state,callback:function(a){t.$set(t.formData,"state",a)},expression:"formData.state"}})],1)],1)],1)],1),e("t-col",{staticClass:"operation-container",attrs:{span:2}},[e("t-button",{style:{marginLeft:"8px"},attrs:{theme:"primary",type:"submit"}},[t._v(" 查询 ")]),e("t-button",{attrs:{type:"reset",variant:"base",theme:"default"}},[t._v(" 重置 ")])],1)],1)],1),e("div",{staticClass:"table-container"},[e("t-table",{attrs:{columns:t.columns,data:t.data,rowKey:t.rowKey,verticalAlign:t.verticalAlign,hover:t.hover,pagination:t.pagination,"selected-row-keys":t.selectedRowKeys,loading:t.dataLoading,stripe:"",bordered:"",headerAffixedTop:!0,headerAffixProps:{offsetTop:t.offsetTop,container:t.getContainer}},on:{"page-change":t.rehandlePageChange,change:t.rehandleChange,"select-change":t.rehandleSelectChange},scopedSlots:t._u([{key:"state",fn:function(a){var s=a.row;return[s.state==t.areaStateOptions[0].value?e("t-tag",{attrs:{theme:"warning",variant:"light"}},[t._v(t._s(t.areaStateOptions[0].label))]):s.state==t.areaStateOptions[1].value?e("t-tag",{attrs:{theme:"success",variant:"light"}},[t._v(t._s(t.areaStateOptions[1].label))]):s.state==t.areaStateOptions[2].value?e("t-tag",{attrs:{theme:"danger",variant:"light"}},[t._v(t._s(t.areaStateOptions[2].label))]):t._e()]}},{key:"op",fn:function(a){var s=a.row;return[e("a",{staticClass:"t-button-link",on:{click:function(o){return t.handleClickDetail(s)}}},[t._v(t._s(s.state==t.areaStateOptions[0].value&&t.permissions?"审核":"详情"))])]}}])})],1)],1),e("t-drawer",{class:{loading:t.loading},attrs:{cancelBtn:t.isAudit&&t.permissions?{content:"取消"}:null,size:"66vw",confirmBtn:{content:t.isAudit&&t.permissions?"审核":"确定"},visible:t.drawerVisible,onConfirm:t.handleConfirm,header:t.detailTitle},on:{close:t.handleClose}},[t.loading?e("t-loading"):e("AreaDetail",{ref:"detailRef",attrs:{detail:Object.assign({},t.examForm,t.baseForm)}})],1),e("t-dialog",{attrs:{header:t.auditTitle,visible:t.auditVisible,destroyOnClose:""},on:{"update:visible":function(a){t.auditVisible=a},confirm:t.handleAudit}},[e("Audit",{ref:"audit"})],1)],1)},U=[];const r={city:"",communityId:"",communityName:"",county:"",indicatorId:"",isPc:1,offset:1,pageSize:10,province:"",state:"",street:""},G=_.extend({name:"areaBase",components:{SearchIcon:b,Trend:k,AreaDetail:z,Audit:P},data(){return{prefix:C,dataLoading:!1,data:[],selectedRowKeys:[1,2],columns:M,rowKey:"pid",verticalAlign:"top",hover:!0,areaVal:"",rowClassName:t=>`${t}-class`,pagination:{defaultPageSize:20,total:0,defaultCurrent:1},searchValue:"",auditVisible:!1,deleteIdx:-1,drawerVisible:!1,formData:{...r},options:[],areaStateOptions:f,auditTitle:"",loading:!1,baseForm:{},detailTitle:"",examForm:{},popupVisible:null}},computed:{isAudit(){var t;return((t=this.baseForm)==null?void 0:t.state)==f[0].value},permissions(){return this.personInfo.county!="-"},...w("user",["personInfo"]),offsetTop(){return this.$store.state.setting.isUseTabsRouter?48:0}},created(){this.init()},methods:{init(){const t=V.cloneDeep(this.personInfo);for(let i in r){if(Object.hasOwnProperty.call(t,i)){const e=t[i];r[i]=e=="-"?"":e}this.formData[i]=r[i]}I(t.children,"street"),this.options=t.children.children,this.getAllCourtBasicInfo()},visableCascader(){this.popupVisible=!1},handlePopupVisibleChange(){this.popupVisible=null},async getAllCourtBasicInfo(){const t={...this.formData};for(const a in t)t[a]===""&&delete t[a];this.dataLoading=!0,this.pagination.defaultCurrent=t.offset,this.pagination.defaultPageSize=t.pageSize;const i=await S(t);this.dataLoading=!1;const e=i.data;e.status=="0"?(this.pagination.total=e.data.total,t.offset==r.offset?this.data=e.data.records:this.data=[...this.data,...e.data.records]):this.$message.warning(i.data.msg),this.data.forEach((a,s)=>{a.pid=a.communityId})},handleChange(t,i){var a;const e=(a=i.node)==null?void 0:a.getPath();this.formData.province=r.province,this.formData.city=r.city,this.formData.county=r.county,this.formData.street=r.street,this.formData.communityId=r.communityId,this.formData.communityName=r.communityName,e.forEach(s=>{const{prop:o,value:l,label:c}=s.data;switch(this.formData[o]=A(l),o){case"communityId":this.formData.communityName=c;break}}),Array.isArray(i.node.data.children)||this.visableCascader()},onReset(){this.formData={...r},this.areaVal="",this.getAllCourtBasicInfo()},onSubmit(){this.formData.offset=r.offset,this.getAllCourtBasicInfo()},getContainer(){return document.querySelector(".tdesign-starter-layout")},rehandlePageChange(t,i){this.formData.pageSize=t.pageSize,this.formData.offset=t.current},rehandleSelectChange(t){this.selectedRowKeys=t},rehandleChange(t,i){this.getAllCourtBasicInfo(),console.log("统一Change",t,i)},async handleClickDetail(t){this.loading=!0,this.drawerVisible=!this.drawerVisible,this.detailTitle=t.communityName+"填报情况";const i={communityId:t.communityId,courtName:t.courtName||""},e=await D(i);e.data.status=="0"&&(this.examForm=q(e.data.data,E()),this.baseForm=L(e.data.data,R()),this.loading=!1)},handleClose(){this.drawerVisible=!this.drawerVisible},handleConfirm(){var t;this.isAudit&&this.permissions?(this.auditTitle=(((t=this.baseForm)==null?void 0:t.communityName)||"")+"审核",this.auditVisible=!0):this.handleClose()},async handleAudit(){const t=await this.$refs.audit.validate(),i=Object.assign(this.baseForm,t);(await O(i)).data.status=="0"&&(this.baseForm=Object.assign(this.baseForm,t),this.auditVisible=!1,this.$refs.detailRef.init(),this.$message.success("审核成功"),this.getAllCourtBasicInfo())}}}),p={};var H=g(G,Y,U,!1,J,"0f29fc74",null,null);function J(t){for(let i in p)this[i]=p[i]}const Z=function(){return H.exports}();export{Z as default};
