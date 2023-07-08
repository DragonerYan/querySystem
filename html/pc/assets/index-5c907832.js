import{n as _,b as D,D as I,j as S,V as N,k as A,p as V,m as $,A as x,d,l as k,E as O,z as g,F as P,G as B}from"./index-21681da6.js";import{m as F,A as f,T,a as K}from"./Audit-b6e2130c.js";var z=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"detail-base"},[e("div",{staticClass:"audit-status"},[t.state==t.areaStateOptions[0].value?e("t-tag",{attrs:{size:"large",theme:"warning",variant:"light"}},[t._v(t._s(t.areaStateOptions[0].label))]):t.state==t.areaStateOptions[1].value?e("t-tag",{attrs:{size:"large",theme:"success",variant:"light"}},[t._v(t._s(t.areaStateOptions[1].label))]):t.state==t.areaStateOptions[2].value?e("t-tag",{attrs:{size:"large",theme:"danger",variant:"light"}},[t._v(t._s(t.areaStateOptions[2].label))]):t._e(),t.state==t.areaStateOptions[2].value?e("p",{staticClass:"reason"},[e("span",[t._v("拒绝理由：")]),e("span",[t._v(" "+t._s(t.formData.reviewComment))])]):t._e()],1),t._l(t.baseInfoData,function(s,o){return e("t-card",{key:o,attrs:{title:s.title,bordered:!1}},[e("div",{staticClass:"info-block info-block-row"},[e("t-collapse",{attrs:{"expand-icon-placement":"right"},on:{change:t.handleChange}},t._l(s.children,function(r){var l,c,u,m;return e("div",{key:r.prop,staticClass:"info-item"},[((l=t.formData[r.prop])===null||l===void 0?void 0:l.indicatorValue)=="0"?e("t-collapse-panel",{staticClass:"exapnd-item",attrs:{expandIcon:!1},scopedSlots:t._u([{key:"header",fn:function(){return[e("p",{staticClass:"label"},[e("span",[t._v(t._s(r.name))]),e("span",{staticClass:"value"},[t._v(" 否")])])]},proxy:!0}],null,!0)}):e("t-collapse-panel",{attrs:{value:r.prop},scopedSlots:t._u([{key:"header",fn:function(){return[e("p",{staticClass:"label"},[e("span",[t._v(t._s(r.name))]),e("span",{staticClass:"value"},[t._v(" 是")])])]},proxy:!0}],null,!0)},[Array.isArray((c=t.formData[r.prop])===null||c===void 0?void 0:c.photoPath)?e("div",t._l((u=t.formData[r.prop])===null||u===void 0?void 0:u.photoPath,function(y,h){var p;return e("t-image-viewer",{key:h,attrs:{"default-index":h,images:(p=t.formData[r.prop])===null||p===void 0?void 0:p.photoPath},scopedSlots:t._u([{key:"trigger",fn:function(C){var w=C.open;return[e("div",{staticClass:"tdesign-demo-image-viewer__ui-image tdesign-demo-image-viewer__base"},[e("img",{staticClass:"tdesign-demo-image-viewer__ui-image--img",attrs:{alt:"test",src:y}}),e("div",{staticClass:"tdesign-demo-image-viewer__ui-image--hover",on:{click:w}},[e("span",[e("browse-icon",{attrs:{size:"1.4em"}}),t._v(" 预览")],1)])])]}}],null,!0)})}),1):t._e(),e("p",[e("span",[t._v("问题描述：")]),e("span",[t._v(t._s((m=t.formData[r.prop])===null||m===void 0?void 0:m.description))])])])],1)}),0)],1)])})],2)},R=[];const j={name:"AreaDetail",components:{BrowseIcon:D},props:{detail:{type:Object,default:()=>({})}},data(){return{baseInfoData:F.getBuildInfoData(),formData:{state:""},areaStateOptions:f}},created(){this.init()},computed:{state(){return this.formData.state}},methods:{init(t={}){const a={...this.detail,...t};for(const e in a){let s=a[e];this.formData[e]=s}},async getImage(t){const a=this.formData[t].photoPath;let e=a?a.split(";"):[];e=e.map(s=>I+s),this.formData[t].photoPath=e},handleChange(t){if(t.length){const a=t[t.length-1];this.getImage(a)}}}},v={};var E=_(j,z,R,!1,L,"5d3e9f35",null,null);function L(t){for(let a in v)this[a]=v[a]}const M=function(){return E.exports}(),i=()=>({buildNumber:"",communityId:"",courtName:"",description:"",indicatorId:"",indicatorValue:"",latitude:"",longitude:"",meno:"",photoPath:"",reportYear:""}),G=()=>({buildNumber:"",communityId:"",courtName:"",province:"",city:"",county:"",street:"",communityName:"",state:"",reviewComment:""}),q=()=>({"2.1.1":i(),"2.1.2":i(),"2.1.3":i(),"2.1.4":i(),"2.2":i(),"2.3.1":i(),"2.3.2":i(),"2.3.3":i(),"2.3.4":i(),"2.3.5":i(),"2.3.6":i(),"2.3.7":i(),"2.4.1":i(),"2.4.2":i(),"2.4.3":i(),"2.4.4":i(),"2.4.5":i(),"2.5.1":i(),"2.5.2":i(),"2.6.1":i(),"2.6.2":i(),"2.6.3":i(),"2.7.1":i(),"2.7.2":i(),"2.8.1":i(),"2.8.2":i(),"2.8.3":i(),"2.8.4":i(),"2.9":i(),"2.10.1":i(),"2.10.2":i(),"2.10.3":i(),"2.10.4":i()}),H=({basicInfo:t,indicatorValueList:a},e)=>{const s=e;t=S(t),a.forEach(o=>{Object.hasOwnProperty.call(s,o.indicatorId)&&(s[o.indicatorId]=o.indicatorValue)});for(let o in t)Object.hasOwnProperty.call(s,o)&&(s[o]=t[o]);return s},U=({indicatorValueList:t},a)=>{for(let e in a){const s=t.find(o=>o.indicatorId==e);s&&(a[e]=s)}return a},Y=[{colKey:"row-select",type:"multiple",width:64,fixed:"left"},{title:"楼号",colKey:"buildNumber"},{title:"省",colKey:"province"},{title:"市",colKey:"city"},{title:"区",colKey:"county"},{title:"街道",colKey:"street"},{title:"社区",colKey:"communityName"},{title:"小区",colKey:"courtName"},{title:"状态",cell:{col:"state"},colKey:"state",align:"center"},{align:"left",fixed:"right",colKey:"op",title:"操作",width:120}];var J=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("t-card",{staticClass:"list-card-container",attrs:{bordered:!1}},[e("t-form",{ref:"form",style:{marginBottom:"8px"},attrs:{data:t.formData,"label-width":"fit-content",colon:""},on:{reset:t.onReset,submit:t.onSubmit}},[e("t-row",{attrs:{justify:"space-between"}},[e("t-col",{attrs:{span:8}},[e("t-row",{staticStyle:{"flex-wrap":"nowrap"}},[e("t-col",{attrs:{flex:8}},[e("t-form-item",{attrs:{label:"市区街道社区小区"}},[e("t-cascader",{attrs:{options:t.options,placeholder:"请选择市区街道小区","check-strictly":"",onPopupVisibleChange:t.handlePopupVisibleChange,load:t.load,popupVisible:t.popupVisible},on:{change:t.handleChange},model:{value:t.areaVal,callback:function(s){t.areaVal=s},expression:"areaVal"}})],1)],1),e("t-col",{attrs:{flex:4,offset:1}},[e("t-form-item",{attrs:{label:"审核状态",name:"state"}},[e("t-select",{staticClass:"form-item-content`",attrs:{options:t.areaStateOptions,placeholder:"请选择审核状态"},model:{value:t.formData.state,callback:function(s){t.$set(t.formData,"state",s)},expression:"formData.state"}})],1)],1)],1)],1),e("t-col",{staticClass:"operation-container",attrs:{span:2}},[e("t-button",{style:{marginLeft:"8px"},attrs:{theme:"primary",type:"submit"}},[t._v(" 查询 ")]),e("t-button",{attrs:{type:"reset",variant:"base",theme:"default"}},[t._v(" 重置 ")])],1)],1)],1),e("div",{staticClass:"table-container"},[e("t-table",{attrs:{columns:t.columns,data:t.data,rowKey:t.rowKey,verticalAlign:t.verticalAlign,hover:t.hover,pagination:t.pagination,"selected-row-keys":t.selectedRowKeys,loading:t.dataLoading,stripe:"",bordered:"",headerAffixedTop:!0,headerAffixProps:{offsetTop:t.offsetTop,container:t.getContainer}},on:{"page-change":t.rehandlePageChange,change:t.rehandleChange,"select-change":t.rehandleSelectChange},scopedSlots:t._u([{key:"state",fn:function(s){var o=s.row;return[o.state==t.areaStateOptions[0].value?e("t-tag",{attrs:{theme:"warning",variant:"light"}},[t._v(t._s(t.areaStateOptions[0].label))]):o.state==t.areaStateOptions[1].value?e("t-tag",{attrs:{theme:"success",variant:"light"}},[t._v(t._s(t.areaStateOptions[1].label))]):o.state==t.areaStateOptions[2].value?e("t-tag",{attrs:{theme:"danger",variant:"light"}},[t._v(t._s(t.areaStateOptions[2].label))]):t._e()]}},{key:"op",fn:function(s){var o=s.row;return[e("a",{staticClass:"t-button-link",on:{click:function(r){return t.handleClickDetail(o)}}},[t._v(t._s(o.state==t.areaStateOptions[0].value&&t.permissions?"审核":"详情"))])]}}])})],1)],1),e("t-drawer",{class:{loading:t.loading},attrs:{cancelBtn:t.isAudit&&t.permissions?{content:"取消"}:null,size:"66vw",confirmBtn:{content:t.isAudit&&t.permissions?"审核":"确定"},visible:t.drawerVisible,onConfirm:t.handleConfirm,header:t.detailTitle},on:{close:t.handleClose}},[t.loading?e("t-loading"):e("BuildAllDetail",{ref:"detailRef",attrs:{detail:Object.assign({},t.examForm,t.baseForm)}})],1),e("t-dialog",{attrs:{header:t.auditTitle,visible:t.auditVisible,destroyOnClose:""},on:{"update:visible":function(s){t.auditVisible=s},confirm:t.handleAudit}},[e("Audit",{ref:"audit"})],1)],1)},Q=[];const n={city:"",communityId:"",communityName:"",county:"",courtName:"",isPc:1,offset:1,pageSize:10,problemState:1,province:"",state:"",street:""},W=N.extend({name:"areaBase",components:{SearchIcon:A,Trend:T,BuildAllDetail:M,Audit:K},data(){return{prefix:V,dataLoading:!1,data:[],selectedRowKeys:[1,2],columns:Y,rowKey:"pid",verticalAlign:"top",hover:!0,areaVal:"",rowClassName:t=>`${t}-class`,pagination:{defaultPageSize:20,total:0,defaultCurrent:1},searchValue:"",auditVisible:!1,deleteIdx:-1,drawerVisible:!1,formData:{...n},options:[],areaStateOptions:f,auditTitle:"",loading:!1,baseForm:{},detailTitle:"",examForm:{},popupVisible:null}},computed:{isAudit(){var t;return((t=this.baseForm)==null?void 0:t.state)==f[0].value},...$("user",["personInfo"]),offsetTop(){return this.$store.state.setting.isUseTabsRouter?48:0},permissions(){return this.personInfo.county!="-"}},created(){this.init()},methods:{load(t){console.log(t,888888);const a=this.getLoadParams(t);return new Promise(e=>{x(a).then(s=>{let r=s.data.data.records.map(l=>({label:l.courtName,children:!1,value:t.value+"_"+l.courtName,prop:"courtName"}));r.length||this.visableCascader(),e(r)})})},visableCascader(){this.popupVisible=!1},handlePopupVisibleChange(){this.popupVisible=null},getLoadParams(t){const a=t.parent;let e={value:this.personInfo.province},s={value:this.personInfo.city},o={value:this.personInfo.county};switch(t.level){case 3:o=a.parent,s=o.parent;break;case 2:o=a.parent;break}return{city:d(s.value),communityId:t.value,communityName:t.label,county:d(o.value),isPc:1,province:e.value,street:d(a.label),userName:this.personInfo.userName}},init(){const t=k.cloneDeep(this.personInfo);for(let a in n){if(Object.hasOwnProperty.call(t,a)){const e=t[a];n[a]=e=="-"?"":e}this.formData[a]=n[a]}O(t.children,"communityId"),this.options=t.children.children,this.getAllCourtBasicInfo()},async getAllCourtBasicInfo(){const t={...this.formData};for(const s in t)t[s]===""&&delete t[s];this.dataLoading=!0,this.pagination.defaultCurrent=t.offset,this.pagination.defaultPageSize=t.pageSize;const a=await g(t);this.dataLoading=!1;const e=a.data;e.status=="0"?(this.pagination.total=e.data.total,t.offset==n.offset?this.data=e.data.records:this.data=[...this.data,...e.data.records]):this.$message.warning(a.data.msg),this.data.forEach((s,o)=>{s.pid=s.communityId+"-"+s.buildNumber+"-"+o})},handleChange(t,a){var s;const e=(s=a.node)==null?void 0:s.getPath();this.formData.province=n.province,this.formData.city=n.city,this.formData.county=n.county,this.formData.street=n.street,this.formData.communityId=n.communityId,this.formData.communityName=n.communityName,this.formData.courtName=n.courtName,e.forEach(o=>{const{prop:r,value:l,label:c}=o.data;switch(this.formData[r]=d(l),r){case"communityId":this.formData.communityName=c;break}}),Array.isArray(a.node.data.children)||this.visableCascader()},onReset(){this.formData={...n},this.areaVal="",this.getAllCourtBasicInfo()},onSubmit(){this.formData.offset=n.offset,this.getAllCourtBasicInfo()},getContainer(){return document.querySelector(".tdesign-starter-layout")},rehandlePageChange(t,a){this.formData.pageSize=t.pageSize,this.formData.offset=t.current},rehandleSelectChange(t){this.selectedRowKeys=t},rehandleChange(t,a){this.getAllCourtBasicInfo(),console.log("统一Change",t,a)},async handleClickDetail(t){this.loading=!0,this.drawerVisible=!this.drawerVisible,this.detailTitle=t.courtName+"楼号为"+t.buildNumber+"号填报情况";const a={communityId:t.communityId,courtName:t.courtName||"",buildNumber:t.buildNumber},e=await P(a);e.data.status=="0"&&(this.examForm=U(e.data.data,q()),this.baseForm=H(e.data.data,G()),this.loading=!1)},handleClose(){this.drawerVisible=!this.drawerVisible},handleConfirm(){var t;this.isAudit&&this.permissions?(this.auditTitle=(((t=this.baseForm)==null?void 0:t.courtName)+"楼号为"+this.baseForm.buildNumber||"")+"审核",this.auditVisible=!0):this.handleClose()},async handleAudit(){const t=await this.$refs.audit.validate(),a={isPc:1,communityId:"",courtName:"",province:"",city:"",county:"",street:"",communityName:""};for(let s in a)a[s]=this.baseForm[s];const e=await g(a);if(e.data.status=="0"){const s=e.data.data;s.forEach(r=>{r.buildNumber==this.baseForm.buildNumber&&(r=Object.assign(r,t))}),(await B(s)).data.status=="0"&&(this.baseForm=Object.assign(this.baseForm,t),this.auditVisible=!1,this.$refs.detailRef.init(this.baseForm),this.$message.success("审核成功"),this.getAllCourtBasicInfo())}}}}),b={};var X=_(W,J,Q,!1,Z,"2f1fdb03",null,null);function Z(t){for(let a in b)this[a]=b[a]}const at=function(){return X.exports}();export{at as default};
