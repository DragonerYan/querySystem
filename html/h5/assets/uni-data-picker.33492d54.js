import{e,o as t,c as a,w as l,a as s,f as i,F as d,A as n,q as o,b as r,B as h,p as c,k as u,i as p,S as g,C as f,D as _,E as y}from"./index-93422e90.js";import{D as m,_ as D}from"./uni-cloud.es.789f472f.js";import{_ as C,r as v}from"./uni-app.es.1373d43e.js";import{f as k}from"./baseApi.a7600fac.js";const S={props:{localdata:{type:[Array,Object],default:()=>[]},spaceInfo:{type:Object,default:()=>({})},collection:{type:String,default:""},action:{type:String,default:""},field:{type:String,default:""},orderby:{type:String,default:""},where:{type:[String,Object],default:""},pageData:{type:String,default:"add"},pageCurrent:{type:Number,default:1},pageSize:{type:Number,default:500},getcount:{type:[Boolean,String],default:!1},getone:{type:[Boolean,String],default:!1},gettree:{type:[Boolean,String],default:!1},manual:{type:Boolean,default:!1},value:{type:[Array,String,Number],default:()=>[]},modelValue:{type:[Array,String,Number],default:()=>[]},preload:{type:Boolean,default:!1},stepSearh:{type:Boolean,default:!0},selfField:{type:String,default:""},parentField:{type:String,default:""},multiple:{type:Boolean,default:!1},map:{type:Object,default:()=>({text:"text",value:"value"})}},data(){return{loading:!1,errorMessage:"",loadMore:{contentdown:"",contentrefresh:"",contentnomore:""},dataList:[],selected:[],selectedIndex:0,page:{current:this.pageCurrent,size:this.pageSize,count:0}}},computed:{isLocalData(){return!this.collection.length},isCloudData(){return this.collection.length>0},isCloudDataList(){return this.isCloudData&&!this.parentField&&!this.selfField},isCloudDataTree(){return this.isCloudData&&this.parentField&&this.selfField},dataValue(){return(Array.isArray(this.modelValue)?this.modelValue.length>0:null!==this.modelValue||void 0!==this.modelValue)?this.modelValue:this.value},hasValue(){return"number"==typeof this.dataValue||null!=this.dataValue&&this.dataValue.length>0}},created(){this.$watch((()=>{var e=[];return["pageCurrent","pageSize","spaceInfo","value","modelValue","localdata","collection","action","field","orderby","where","getont","getcount","gettree"].forEach((t=>{e.push(this[t])})),e}),((e,t)=>{for(let a=2;a<e.length&&e[a]==t[a];a++);e[0]!=t[0]&&(this.page.current=this.pageCurrent),this.page.size=this.pageSize,this.onPropsChange()})),this._treeData=[]},methods:{onPropsChange(){this._treeData=[]},async loadData(){this.isLocalData?this.loadLocalData():this.isCloudDataList?this.loadCloudDataList():this.isCloudDataTree&&this.loadCloudDataTree()},async loadLocalData(){this._treeData=[],this._extractTree(this.localdata,this._treeData);let e=this.dataValue;void 0!==e&&(Array.isArray(e)&&(e=e[e.length-1],"object"==typeof e&&e[this.map.value]&&(e=e[this.map.value])),this.selected=this._findNodePath(e,this.localdata))},async loadCloudDataList(){if(!this.loading){this.loading=!0;try{let e=(await this.getCommand()).result.data;this._treeData=e,this._updateBindData(),this._updateSelected(),this.onDataChange()}catch(e){this.errorMessage=e}finally{this.loading=!1}}},async loadCloudDataTree(){if(!this.loading){this.loading=!0;try{let e={field:this._cloudDataPostField(),where:this._cloudDataTreeWhere()};this.gettree&&(e.startwith=`${this.selfField}=='${this.dataValue}'`);let t=(await this.getCommand(e)).result.data;this._treeData=t,this._updateBindData(),this._updateSelected(),this.onDataChange()}catch(e){this.errorMessage=e}finally{this.loading=!1}}},async loadCloudDataNode(e){if(!this.loading){this.loading=!0;try{let t={field:this._cloudDataPostField(),where:this._cloudDataNodeWhere()};e((await this.getCommand(t)).result.data)}catch(t){this.errorMessage=t}finally{this.loading=!1}}},getCloudDataValue(){return this.isCloudDataList?this.getCloudDataListValue():this.isCloudDataTree?this.getCloudDataTreeValue():void 0},getCloudDataListValue(){let e=[],t=this._getForeignKeyByField();return t&&e.push(`${t} == '${this.dataValue}'`),e=e.join(" || "),this.where&&(e=`(${this.where}) && (${e})`),this.getCommand({field:this._cloudDataPostField(),where:e}).then((e=>(this.selected=e.result.data,e.result.data)))},getCloudDataTreeValue(){return this.getCommand({field:this._cloudDataPostField(),getTreePath:{startWith:`${this.selfField}=='${this.dataValue}'`}}).then((e=>{let t=[];return this._extractTreePath(e.result.data,t),this.selected=t,t}))},getCommand(e={}){let t=m.database(this.spaceInfo);const a=e.action||this.action;a&&(t=t.action(a));const l=e.collection||this.collection;t=t.collection(l);const s=e.where||this.where;s&&Object.keys(s).length&&(t=t.where(s));const i=e.field||this.field;i&&(t=t.field(i));const d=e.orderby||this.orderby;d&&(t=t.orderBy(d));const n=void 0!==e.pageCurrent?e.pageCurrent:this.page.current,o=void 0!==e.pageSize?e.pageSize:this.page.size,r={getCount:void 0!==e.getcount?e.getcount:this.getcount,getTree:void 0!==e.gettree?e.gettree:this.gettree};return e.getTreePath&&(r.getTreePath=e.getTreePath),t=t.skip(o*(n-1)).limit(o).get(r),t},_cloudDataPostField(){let e=[this.field];return this.parentField&&e.push(`${this.parentField} as parent_value`),e.join(",")},_cloudDataTreeWhere(){let e=[],t=this.selected,a=this.parentField;if(a&&e.push(`${a} == null || ${a} == ""`),t.length)for(var l=0;l<t.length-1;l++)e.push(`${a} == '${t[l].value}'`);let s=[];return this.where&&s.push(`(${this.where})`),e.length&&s.push(`(${e.join(" || ")})`),s.join(" && ")},_cloudDataNodeWhere(){let e=[],t=this.selected;return t.length&&e.push(`${this.parentField} == '${t[t.length-1].value}'`),e=e.join(" || "),this.where?`(${this.where}) && (${e})`:e},_getWhereByForeignKey(){let e=[],t=this._getForeignKeyByField();return t&&e.push(`${t} == '${this.dataValue}'`),this.where?`(${this.where}) && (${e.join(" || ")})`:e.join(" || ")},_getForeignKeyByField(){let e=this.field.split(","),t=null;for(let a=0;a<e.length;a++){const l=e[a].split("as");if(!(l.length<2)&&"value"===l[1].trim()){t=l[0].trim();break}}return t},_updateBindData(e){const{dataList:t,hasNodes:a}=this._filterData(this._treeData,this.selected);let l=!1===this._stepSearh&&!a;return e&&(e.isleaf=l),this.dataList=t,this.selectedIndex=t.length-1,!l&&this.selected.length<t.length&&this.selected.push({value:null,text:"请选择"}),{isleaf:l,hasNodes:a}},_updateSelected(){let e=this.dataList,t=this.selected,a=this.map.text,l=this.map.value;for(let s=0;s<t.length;s++){let i=t[s].value,d=e[s];for(let e=0;e<d.length;e++){let n=d[e];if(n[l]===i){t[s].text=n[a];break}}}},_filterData(e,t){let a=[],l=!0;a.push(e.filter((e=>null===e.parent_value||void 0===e.parent_value||""===e.parent_value)));for(let s=0;s<t.length;s++){let i=t[s].value,d=e.filter((e=>e.parent_value===i));d.length?a.push(d):l=!1}return{dataList:a,hasNodes:l}},_extractTree(e,t,a){let l=this.map.value;for(let s=0;s<e.length;s++){let i=e[s],d={};for(let e in i)"children"!==e&&(d[e]=i[e]);null!=a&&""!==a&&(d.parent_value=a),t.push(d);let n=i.children;n&&this._extractTree(n,t,i[l])}},_extractTreePath(e,t){for(let a=0;a<e.length;a++){let l=e[a],s={};for(let e in l)"children"!==e&&(s[e]=l[e]);t.push(s);let i=l.children;i&&this._extractTreePath(i,t)}},_findNodePath(e,t,a=[]){let l=this.map.text,s=this.map.value;for(let i=0;i<t.length;i++){let d=t[i],n=d.children,o=d[l],r=d[s];if(a.push({value:r,text:o}),r===e)return a;if(n){const t=this._findNodePath(e,n,a);if(t.length)return t}a.pop()}return[]}}};const x=C({name:"UniDataPicker",emits:["popupopened","popupclosed","nodeclick","input","change","update:modelValue","inputclick"],mixins:[S],components:{DataPickerView:C({name:"UniDataPickerView",emits:["nodeclick","change","datachange","update:modelValue"],mixins:[S],props:{managedMode:{type:Boolean,default:!1},ellipsis:{type:Boolean,default:!0}},created(){this.managedMode||this.$nextTick((()=>{this.loadData()}))},methods:{onPropsChange(){this._treeData=[],this.selectedIndex=0,this.$nextTick((()=>{this.loadData()}))},handleSelect(e){this.selectedIndex=e},handleNodeClick(e,t,a){if(e.disable)return;const l=this.dataList[t][a],s=l[this.map.text],i=l[this.map.value];if(t<this.selected.length-1?(this.selected.splice(t,this.selected.length-t),this.selected.push({text:s,value:i})):t===this.selected.length-1&&this.selected.splice(t,1,{text:s,value:i}),l.isleaf)return void this.onSelectedChange(l,l.isleaf);const{isleaf:d,hasNodes:n}=this._updateBindData();this.isLocalData?this.onSelectedChange(l,!n||d):this.isCloudDataList?this.onSelectedChange(l,!0):this.isCloudDataTree&&(d?this.onSelectedChange(l,l.isleaf):n||this.loadCloudDataNode((e=>{e.length?(this._treeData.push(...e),this._updateBindData(l)):l.isleaf=!0,this.onSelectedChange(l,l.isleaf)})))},updateData(e){this._treeData=e.treeData,this.selected=e.selected,this._treeData.length?this._updateBindData():this.loadData()},onDataChange(){this.$emit("datachange")},onSelectedChange(e,t){t&&this._dispatchEvent(),e&&this.$emit("nodeclick",e)},_dispatchEvent(){this.$emit("change",this.selected.slice(0))}}},[["render",function(f,_,y,m,C,k){const S=u,x=p,w=g,$=v(e("uni-load-more"),D);return t(),a(x,{class:"uni-data-pickerview"},{default:l((()=>[f.isCloudDataList?c("",!0):(t(),a(w,{key:0,class:"selected-area","scroll-x":"true"},{default:l((()=>[s(x,{class:"selected-list"},{default:l((()=>[(t(!0),i(d,null,n(f.selected,((e,i)=>(t(),a(x,{class:o(["selected-item",{"selected-item-active":i==f.selectedIndex}]),key:i,onClick:e=>k.handleSelect(i)},{default:l((()=>[s(S,null,{default:l((()=>[r(h(e.text||""),1)])),_:2},1024)])),_:2},1032,["class","onClick"])))),128))])),_:1})])),_:1})),s(x,{class:"tab-c"},{default:l((()=>[s(w,{class:"list","scroll-y":!0},{default:l((()=>[(t(!0),i(d,null,n(f.dataList[f.selectedIndex],((e,i)=>(t(),a(x,{class:o(["item",{"is-disabled":!!e.disable}]),key:i,onClick:t=>k.handleNodeClick(e,f.selectedIndex,i)},{default:l((()=>[s(S,{class:"item-text"},{default:l((()=>[r(h(e[f.map.text]),1)])),_:2},1024),f.selected.length>f.selectedIndex&&e[f.map.value]==f.selected[f.selectedIndex].value?(t(),a(x,{key:0,class:"check"})):c("",!0)])),_:2},1032,["class","onClick"])))),128))])),_:1}),f.loading?(t(),a(x,{key:0,class:"loading-cover"},{default:l((()=>[s($,{class:"load-more",contentText:f.loadMore,status:"loading"},null,8,["contentText"])])),_:1})):c("",!0),f.errorMessage?(t(),a(x,{key:1,class:"error-message"},{default:l((()=>[s(S,{class:"error-text"},{default:l((()=>[r(h(f.errorMessage),1)])),_:1})])),_:1})):c("",!0)])),_:1})])),_:1})}],["__scopeId","data-v-c0c521c5"]])},props:{options:{type:[Object,Array],default:()=>({})},popupTitle:{type:String,default:"请选择"},placeholder:{type:String,default:"请选择"},heightMobile:{type:String,default:""},readonly:{type:Boolean,default:!1},clearIcon:{type:Boolean,default:!0},border:{type:Boolean,default:!0},split:{type:String,default:"/"},ellipsis:{type:Boolean,default:!0}},data:()=>({isOpened:!1,inputSelected:[]}),created(){this.$nextTick((()=>{this.load()}))},watch:{localdata:{handler(){this.load()},deep:!0}},methods:{clear(){this._dispatchEvent([])},onPropsChange(){this._treeData=[],this.selectedIndex=0,this.load()},load(){this.readonly?this._processReadonly(this.localdata,this.dataValue):this.isLocalData?(this.loadData(),this.inputSelected=this.selected.slice(0)):(this.isCloudDataList||this.isCloudDataTree)&&(this.loading=!0,this.getCloudDataValue().then((e=>{this.loading=!1,this.inputSelected=e})).catch((e=>{this.loading=!1,this.errorMessage=e})))},show(){this.isOpened=!0,setTimeout((()=>{this.$refs.pickerView.updateData({treeData:this._treeData,selected:this.selected,selectedIndex:this.selectedIndex})}),200),this.$emit("popupopened")},hide(){this.isOpened=!1,this.$emit("popupclosed")},handleInput(){this.readonly?this.$emit("inputclick"):this.show()},handleClose(e){this.hide()},onnodeclick(e){this.$emit("nodeclick",e)},ondatachange(e){this._treeData=this.$refs.pickerView._treeData},onchange(e){this.hide(),this.$nextTick((()=>{this.inputSelected=e})),this._dispatchEvent(e)},_processReadonly(e,t){if(e.findIndex((e=>e.children))>-1){let e;return Array.isArray(t)?(e=t[t.length-1],"object"==typeof e&&e.value&&(e=e.value)):e=t,void(this.inputSelected=this._findNodePath(e,this.localdata))}if(!this.hasValue)return void(this.inputSelected=[]);let a=[];for(let i=0;i<t.length;i++){var l=t[i],s=e.find((e=>e.value==l));s&&a.push(s)}a.length&&(this.inputSelected=a)},_filterForArray(e,t){var a=[];for(let i=0;i<t.length;i++){var l=t[i],s=e.find((e=>e.value==l));s&&a.push(s)}return a},_dispatchEvent(e){let t={};if(e.length){for(var a=new Array(e.length),l=0;l<e.length;l++)a[l]=e[l].value;t=e[e.length-1]}else t.value="";this.formItem&&this.formItem.setValue(t.value),this.$emit("input",t.value),this.$emit("update:modelValue",t.value),this.$emit("change",{detail:{value:e}})}}},[["render",function(m,C,S,x,w,$){const V=u,b=v(e("uni-load-more"),D),T=p,F=g,B=v(e("uni-icons"),k),I=f("data-picker-view");return t(),a(T,{class:"uni-data-tree"},{default:l((()=>[s(T,{class:"uni-data-tree-input",onClick:$.handleInput},{default:l((()=>[_(m.$slots,"default",{options:S.options,data:w.inputSelected,error:m.errorMessage},(()=>[s(T,{class:o(["input-value",{"input-value-border":S.border}])},{default:l((()=>[m.errorMessage?(t(),a(V,{key:0,class:"selected-area error-text"},{default:l((()=>[r(h(m.errorMessage),1)])),_:1})):m.loading&&!w.isOpened?(t(),a(T,{key:1,class:"selected-area"},{default:l((()=>[s(b,{class:"load-more",contentText:m.loadMore,status:"loading"},null,8,["contentText"])])),_:1})):w.inputSelected.length?(t(),a(F,{key:2,class:"selected-area","scroll-x":"true"},{default:l((()=>[s(T,{class:"selected-list"},{default:l((()=>[(t(!0),i(d,null,n(w.inputSelected,((e,i)=>(t(),a(T,{class:"selected-item",key:i},{default:l((()=>[s(V,{class:"text-color"},{default:l((()=>[r(h(e.text),1)])),_:2},1024),i<w.inputSelected.length-1?(t(),a(V,{key:0,class:"input-split-line"},{default:l((()=>[r(h(S.split),1)])),_:1})):c("",!0)])),_:2},1024)))),128))])),_:1})])),_:1})):(t(),a(V,{key:3,class:"selected-area placeholder"},{default:l((()=>[r(h(S.placeholder),1)])),_:1})),S.clearIcon&&!S.readonly&&w.inputSelected.length?(t(),a(T,{key:4,class:"icon-clear",onClick:y($.clear,["stop"])},{default:l((()=>[s(B,{type:"clear",color:"#c0c4cc",size:"24"})])),_:1},8,["onClick"])):c("",!0),S.clearIcon&&w.inputSelected.length||S.readonly?c("",!0):(t(),a(T,{key:5,class:"arrow-area"},{default:l((()=>[s(T,{class:"input-arrow"})])),_:1}))])),_:1},8,["class"])]),!0)])),_:3},8,["onClick"]),w.isOpened?(t(),a(T,{key:0,class:"uni-data-tree-cover",onClick:$.handleClose},null,8,["onClick"])):c("",!0),w.isOpened?(t(),a(T,{key:1,class:"uni-data-tree-dialog"},{default:l((()=>[s(T,{class:"uni-popper__arrow"}),s(T,{class:"dialog-caption"},{default:l((()=>[s(T,{class:"title-area"},{default:l((()=>[s(V,{class:"dialog-title"},{default:l((()=>[r(h(S.popupTitle),1)])),_:1})])),_:1}),s(T,{class:"dialog-close",onClick:$.handleClose},{default:l((()=>[s(T,{class:"dialog-close-plus","data-id":"close"}),s(T,{class:"dialog-close-plus dialog-close-rotate","data-id":"close"})])),_:1},8,["onClick"])])),_:1}),s(I,{class:"picker-view",ref:"pickerView",modelValue:m.dataValue,"onUpdate:modelValue":C[0]||(C[0]=e=>m.dataValue=e),localdata:m.localdata,preload:m.preload,collection:m.collection,field:m.field,orderby:m.orderby,where:m.where,"step-searh":m.stepSearh,"self-field":m.selfField,"parent-field":m.parentField,"managed-mode":!0,map:m.map,ellipsis:S.ellipsis,onChange:$.onchange,onDatachange:$.ondatachange,onNodeclick:$.onnodeclick},null,8,["modelValue","localdata","preload","collection","field","orderby","where","step-searh","self-field","parent-field","map","ellipsis","onChange","onDatachange","onNodeclick"])])),_:1})):c("",!0)])),_:3})}],["__scopeId","data-v-13d236b7"]]);export{x as _};
