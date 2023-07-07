import{g as t,N as e,O as a,G as o,o as i,c as s,w as n,a as l,P as c,b as r,v as p,f as d,j as m,F as h,k as u,l as f,i as k,x as w,Q as g,p as y,t as v,r as x,s as M,R as C}from"./index-7772774a.js";import{o as b}from"./lodash.dd7c9b8c.js";import{_ as S,o as T}from"./uni-app.es.46eca8e8.js";let _=null;const I=S({props:{color:{type:String,default:"#ff6000"},keyMap:{type:String,default:"1780b36335e4fa508c898378a18674ef"},AMapKeyWeb:{type:String,default:"8d73f322493bde9ad4480d2cc83e69bb"},initLocation:{type:String,default:""},show:{type:Boolean,default:!1},val:{type:String,default:""}},data(){return{list:[],keyword:"",timeId:null,showPlace:!1,amapMarker:{},amapText:{},mapFlag:!1,places:{key:"",keywords:"",location:this.initLocation,type:"all",city:"北京市",citylimit:!0,datatype:"all",children:!0,extensions:"all",radius:8e3,province:"北京市"}}},mounted(){this.keyword=this.val,this.showPlace=this.show,this.$nextTick((()=>{this.loop()}))},watch:{show(t,e){this.showPlace=t,this.$nextTick((()=>{this.loop()}))}},methods:{getPlacesParam(e={}){const a=t("userInfo")||{},o={key:this.AMapKeyWeb,keywords:this.keyword,city:a.city||"",province:a.province||""};return{...this.places,...o,...e}},async loop(){_=e.state.AMap,_||(_=await e.dispatch("setAmapSync")),this.initMapWeb()},inputValue(t){this.timeId&&clearTimeout(this.timeId),this.timeId=setTimeout((()=>{this.getPlaces(),this.timeId=null}))},cancel(){this.keyword="",this.list=[];for(let t in this.amapMarker)this.amapMarker[t]&&(this.amapMarker[t].setMap(null),this.amapText[t].setMap(null));this.amapMarker={},this.amapText={},this.closeInfoWindow(),this.markerAmp&&this.markerAmp.setMap(null)},toCancel(){this.$emit("changeShow",!1),this.cancel()},confrom(){const t=[];for(let e in this.amapMarker)this.amapMarker[e]&&t.push(e);t.length&&(this.cancel(),this.$emit("placeChoose",t))},toChecked(t){if(this.mapFlag)return;let e=t.location.split(",");if(t.active=!t.active,t.active)this.addBuildMask(t),this.setMapCenter(e[0],e[1]);else{const e=t.location;this.amapMarker[e].setMap(null),this.amapText[e].setMap(null),this.amapMarker[e]=null,this.amapText[e]=null,console.log(this.amapText[e])}this.closeInfoWindow(),this.mapFlag=!0,setTimeout((()=>{this.mapFlag=!1}),300)},async initMapWeb(){this.map=new _.Map("map",{zoom:16,resizeEnable:!0}),this.showControll(),this.map.on("click",((t,e)=>{const{lat:i,lng:s}=t.lnglat,n={location:`${s},${i}`,key:this.AMapKeyWeb,radius:100,extensions:"all"},l="https://restapi.amap.com/v3/geocode/regeo?"+b(n);a({url:l,method:"GET",success:t=>{if(t.data,200==t.statusCode){const e=t.data.regeocode,a=e.pois[0],o={position:[...a.location.split(",")],title:a.name,location:a.location,address:e.formatted_address,active:!0};if(this.amapMarker[a.location])return;console.log(o,88888),this.addBuildMask(o)}},fail:t=>{o({title:JSON.stringify(t),icon:"none"})}})}));let t=e.state.location;t||(t=await e.dispatch("setLocationSync")),this.onComplete(t)},onComplete(t){const e=this;if("SUCCESS"==t.info&&t.position){const a=`${t.position.lng}, ${t.position.lat}`;e.addMarker(t.position.lng,t.position.lat),e.getPlaces(a)}},showControll(){_.plugin(["AMap.ToolBar","AMap.Scale","AMap.ControlBar"],function(){var t=new _.ToolBar,e=new _.Scale,a=new _.ControlBar({position:{top:"50px",right:"10px"}});this.map.addControl(t),this.map.addControl(e),this.map.addControl(a)}.bind(this))},addCircle(t,e){var a=new _.Circle({center:[t,e],radius:this.places.radius,fillColor:"#FF33FF",fillOpacity:.2,strokeColor:"#FF33FF",strokeWeight:2});this.map.add(a)},addMarker(t,e){var a=new _.Icon({image:"//a.amap.com/jsapi_demos/static/demo-center/icons/poi-marker-default.png",imageSize:new _.Size(32,42)});this.markerAmp=new _.Marker({icon:a,position:[t,e]}),this.markerAmp.setMap(this.map),this.map.setCenter([t,e]),this.map.setZoom(11)},setMapCenter(t,e){this.map.setCenter([t,e]),this.map.setZoom(11)},buildMark(){this.list.filter((t=>t.active)).forEach(((t,e)=>{this.addBuildMask(t)}))},addBuildMask(t){const e={icon:"../../static/images/build.png",position:t.position,title:t.title,location:t.location,address:t.address},a=this,o=e.location;var i=new _.Icon({image:e.icon,imageSize:new _.Size(24,32)});a.amapText[o]=new _.Text({text:e.title,position:[e.position[0],e.position[1]],offset:new _.Pixel(-5,-5),style:{textOverflow:"auto",color:"#ffffff",fontSize:"14px",fontWeight:"bold",textOutline:"2px rgba(0, 0, 0, 0.5)",background:"rgba(0, 0, 0, 0.5)",padding:"6px 8px",borderRadius:"4px",boxShadow:"0 2px 6px rgba(0, 0, 0, 0.3)",maxWidth:"120px",wordWrap:"break-word",whiteSpace:"wrap"},zIndex:1e3,map:this.map});var s=e.title,n=[];n.push(`地址：${e.address}`);var l=new _.InfoWindow({isCustom:!0,content:a.createInfoWindow(s,n.join("<br/>"),t),offset:new _.Pixel(16,-20),map:this.map});l.setPosition([e.position[0],e.position[1]]),a.amapMarker[o]=new _.Marker({map:a.map,icon:i,position:[e.position[0],e.position[1]],offset:new _.Pixel(-13,-30)}),a.amapMarker[o].on("click",(function(){l.open(a.map,a.amapMarker[o].getPosition())})),a.amapText[o].on("click",(function(){l.open(a.map,a.amapMarker[o].getPosition())})),a.amapMarker[o].on("contextmenu",(function(t){})),a.map.add(a.amapText[o])},createInfoWindow(t,e,a){var o=document.createElement("view");o.className="custom-info input-card content-window-card",o.style.left="-50vw";var i=document.createElement("view"),s=document.createElement("view"),n=document.createElement("img");i.className="info-top",i.style="display:flex;justify-content: space-between;",s.innerHTML=t,n.src="https://webapi.amap.com/images/close2.gif",n.style="width:12px;height:12px",n.onclick=this.closeInfoWindow,i.appendChild(s),i.appendChild(n),o.appendChild(i);var l=document.createElement("view");l.className="info-middle",l.style.backgroundColor="white",l.innerHTML=e,o.appendChild(l);var c=document.createElement("button");c.className="cancel-marker-button",c.innerHTML="取消标记",c.style.padding="6px 10px",c.style.backgroundColor="#fff",c.style.border="1px solid #ccc",c.style.cursor="pointer",c.style.fontSize="12px",c.style.marginTop="10px",c.style.color="#3c9cff",c.addEventListener("click",(()=>{this.toChecked(a)}));var r=document.createElement("view");return r.className="info-bottom",r.style.position="relative",r.style.top="0px",r.style.margin="0 auto",r.appendChild(c),o.appendChild(r),o},closeInfoWindow(){this.map.clearInfoWindow()},getPlaces(t){t&&(this.places.location=t);const e=this.getPlacesParam(),i="https://restapi.amap.com/v3/assistant/inputtips?"+b(e);a({url:i,method:"GET",success:t=>{let e=t.data;if("1"===e.status){this.list=e.tips.filter((t=>t.location&&t.location.length>0));const t=this.amapMarker;this.list.forEach(((e,a)=>{const o=e.location.split(",");e.position=o,e.title=e.name,e.address=e.district+e.address,e.active=!!t[e.location]}))}},fail:t=>{o({title:JSON.stringify(t),icon:"none"})}})}}},[["render",function(t,e,a,o,x,M){const C=f,b=k,S=w,T=g;return x.showPlace?(i(),s(b,{key:0,class:"amap-choose"},{default:n((()=>[l(b,{class:"top-button"},{default:n((()=>[l(C,{class:"cancel",onClick:c(M.toCancel,["prevent"])},{default:n((()=>[r("取消")])),_:1},8,["onClick"]),l(C,{class:"conform",style:p({backgroundColor:a.color}),onClick:c(M.confrom,["prevent"])},{default:n((()=>[r("完成")])),_:1},8,["style","onClick"])])),_:1}),l(b,{class:"map-box"},{default:n((()=>[l(b,{id:"map"})])),_:1}),l(b,{class:"content"},{default:n((()=>[l(b,{class:"search"},{default:n((()=>[l(b,null,{default:n((()=>[l(S,{src:"/assets/search-99d0cdcd.png"}),l(T,{placeholder:"搜索地点",onInput:M.inputValue,modelValue:x.keyword,"onUpdate:modelValue":e[0]||(e[0]=t=>x.keyword=t)},null,8,["onInput","modelValue"])])),_:1}),l(C,{onClick:M.cancel},{default:n((()=>[r("取消")])),_:1},8,["onClick"])])),_:1}),l(b,{class:"main"},{default:n((()=>[(i(!0),d(h,null,m(x.list,((t,e)=>(i(),s(b,{key:e,onClick:c((e=>M.toChecked(t)),["prevent"])},{default:n((()=>[l(b,{class:y({active:t.active})},{default:n((()=>[l(b,null,{default:n((()=>[r(v(t.name),1)])),_:2},1024),l(C,{class:"detail"},{default:n((()=>[r(v(t.district)+v(t.address?"-"+t.address:""),1)])),_:2},1024)])),_:2},1032,["class"]),l(b,null,{default:n((()=>[t.active?(i(),s(C,{key:0,style:p({color:a.color})},{default:n((()=>[r("√")])),_:1},8,["style"])):u("",!0)])),_:2},1024)])),_:2},1032,["onClick"])))),128))])),_:1})])),_:1})])),_:1})):u("",!0)}],["__scopeId","data-v-709b2ad0"]]),P={__name:"map",props:{keyword:String},setup(e){const a=x(""),o=x(null);T((t=>{a.value=t.keyword||"",o.value=t.key}));const n=t("userInfo")||{},l=n.latitude||"",c=n.longitude||"",r=x(c?c+","+l:""),p=e=>{const a=t("location")||{};let i=[];e.forEach((t=>{i.push(`(${t})`)})),i=i.join(","),a[o.value]=i,M("location",a),C()},d=t=>{C(),console.log(t,"选中显示")};return(t,e)=>(i(),s(I,{show:"",color:"#3c9cff",initLocation:r.value,val:a.value,onPlaceChoose:p,onChangeShow:d},null,8,["initLocation","val"]))}};export{P as default};
