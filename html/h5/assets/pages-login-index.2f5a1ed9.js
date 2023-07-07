import{c as commonjsGlobal,r as ref,o as openBlock,a as createBlock,w as withCtx,i as index$g,b as createVNode,d as createTextVNode,s as setStorageSync,e as switchTab,f as resolveDynamicComponent}from"./index-f9923a45.js";import{_ as __easycom_0}from"./uni-data-picker.fbb2b343.js";import{_ as _export_sfc,r as resolveEasycom}from"./uni-app.es.05b2e329.js";import{_ as __easycom_2,a as __easycom_0$1,b as __easycom_2$1}from"./uni-forms.921cd8d3.js";import{_ as __easycom_3}from"./uni-card.a4063fa8.js";import{_ as __easycom_7}from"./uv-button.aa73ea60.js";import{c as commiunityInfo,l as login}from"./baseApi.9064515e.js";import{t as toast}from"./toast.d3db215c.js";import{g as generateHierarchy}from"./lodash.cd6eed32.js";import"./uni-icons.8cc73f7f.js";import"./uv-icon.5bb898f1.js";var md5Exports={},md5$1={get exports(){return md5Exports},set exports(t){md5Exports=t}};
/**
 * [js-md5]{@link https://github.com/emn178/js-md5}
 *
 * @namespace md5
 * @version 0.7.3
 * @author Chen, Yi-Cyuan [emn178@gmail.com]
 * @copyright Chen, Yi-Cyuan 2014-2017
 * @license MIT
 */
(function(module){(function(){var ERROR="input is invalid type",WINDOW="object"==typeof window,root=WINDOW?window:{};root.JS_MD5_NO_WINDOW&&(WINDOW=!1);var WEB_WORKER=!WINDOW&&"object"==typeof self,NODE_JS=!root.JS_MD5_NO_NODE_JS&&"object"==typeof process&&process.versions&&process.versions.node;NODE_JS?root=commonjsGlobal:WEB_WORKER&&(root=self);var COMMON_JS=!root.JS_MD5_NO_COMMON_JS&&module.exports,ARRAY_BUFFER=!root.JS_MD5_NO_ARRAY_BUFFER&&"undefined"!=typeof ArrayBuffer,HEX_CHARS="0123456789abcdef".split(""),EXTRA=[128,32768,8388608,-2147483648],SHIFT=[0,8,16,24],OUTPUT_TYPES=["hex","array","digest","buffer","arrayBuffer","base64"],BASE64_ENCODE_CHAR="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split(""),blocks=[],buffer8;if(ARRAY_BUFFER){var buffer=new ArrayBuffer(68);buffer8=new Uint8Array(buffer),blocks=new Uint32Array(buffer)}!root.JS_MD5_NO_NODE_JS&&Array.isArray||(Array.isArray=function(t){return"[object Array]"===Object.prototype.toString.call(t)}),!ARRAY_BUFFER||!root.JS_MD5_NO_ARRAY_BUFFER_IS_VIEW&&ArrayBuffer.isView||(ArrayBuffer.isView=function(t){return"object"==typeof t&&t.buffer&&t.buffer.constructor===ArrayBuffer});var createOutputMethod=function(t){return function(e){return new Md5(!0).update(e)[t]()}},createMethod=function(){var t=createOutputMethod("hex");NODE_JS&&(t=nodeWrap(t)),t.create=function(){return new Md5},t.update=function(e){return t.create().update(e)};for(var e=0;e<OUTPUT_TYPES.length;++e){var r=OUTPUT_TYPES[e];t[r]=createOutputMethod(r)}return t},nodeWrap=function(method){var crypto=eval("require('crypto')"),Buffer=eval("require('buffer').Buffer"),nodeMethod=function(t){if("string"==typeof t)return crypto.createHash("md5").update(t,"utf8").digest("hex");if(null==t)throw ERROR;return t.constructor===ArrayBuffer&&(t=new Uint8Array(t)),Array.isArray(t)||ArrayBuffer.isView(t)||t.constructor===Buffer?crypto.createHash("md5").update(new Buffer(t)).digest("hex"):method(t)};return nodeMethod};function Md5(t){if(t)blocks[0]=blocks[16]=blocks[1]=blocks[2]=blocks[3]=blocks[4]=blocks[5]=blocks[6]=blocks[7]=blocks[8]=blocks[9]=blocks[10]=blocks[11]=blocks[12]=blocks[13]=blocks[14]=blocks[15]=0,this.blocks=blocks,this.buffer8=buffer8;else if(ARRAY_BUFFER){var e=new ArrayBuffer(68);this.buffer8=new Uint8Array(e),this.blocks=new Uint32Array(e)}else this.blocks=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];this.h0=this.h1=this.h2=this.h3=this.start=this.bytes=this.hBytes=0,this.finalized=this.hashed=!1,this.first=!0}Md5.prototype.update=function(t){if(!this.finalized){var e,r=typeof t;if("string"!==r){if("object"!==r)throw ERROR;if(null===t)throw ERROR;if(ARRAY_BUFFER&&t.constructor===ArrayBuffer)t=new Uint8Array(t);else if(!(Array.isArray(t)||ARRAY_BUFFER&&ArrayBuffer.isView(t)))throw ERROR;e=!0}for(var o,s,a=0,i=t.length,n=this.blocks,c=this.buffer8;a<i;){if(this.hashed&&(this.hashed=!1,n[0]=n[16],n[16]=n[1]=n[2]=n[3]=n[4]=n[5]=n[6]=n[7]=n[8]=n[9]=n[10]=n[11]=n[12]=n[13]=n[14]=n[15]=0),e)if(ARRAY_BUFFER)for(s=this.start;a<i&&s<64;++a)c[s++]=t[a];else for(s=this.start;a<i&&s<64;++a)n[s>>2]|=t[a]<<SHIFT[3&s++];else if(ARRAY_BUFFER)for(s=this.start;a<i&&s<64;++a)(o=t.charCodeAt(a))<128?c[s++]=o:o<2048?(c[s++]=192|o>>6,c[s++]=128|63&o):o<55296||o>=57344?(c[s++]=224|o>>12,c[s++]=128|o>>6&63,c[s++]=128|63&o):(o=65536+((1023&o)<<10|1023&t.charCodeAt(++a)),c[s++]=240|o>>18,c[s++]=128|o>>12&63,c[s++]=128|o>>6&63,c[s++]=128|63&o);else for(s=this.start;a<i&&s<64;++a)(o=t.charCodeAt(a))<128?n[s>>2]|=o<<SHIFT[3&s++]:o<2048?(n[s>>2]|=(192|o>>6)<<SHIFT[3&s++],n[s>>2]|=(128|63&o)<<SHIFT[3&s++]):o<55296||o>=57344?(n[s>>2]|=(224|o>>12)<<SHIFT[3&s++],n[s>>2]|=(128|o>>6&63)<<SHIFT[3&s++],n[s>>2]|=(128|63&o)<<SHIFT[3&s++]):(o=65536+((1023&o)<<10|1023&t.charCodeAt(++a)),n[s>>2]|=(240|o>>18)<<SHIFT[3&s++],n[s>>2]|=(128|o>>12&63)<<SHIFT[3&s++],n[s>>2]|=(128|o>>6&63)<<SHIFT[3&s++],n[s>>2]|=(128|63&o)<<SHIFT[3&s++]);this.lastByteIndex=s,this.bytes+=s-this.start,s>=64?(this.start=s-64,this.hash(),this.hashed=!0):this.start=s}return this.bytes>4294967295&&(this.hBytes+=this.bytes/4294967296<<0,this.bytes=this.bytes%4294967296),this}},Md5.prototype.finalize=function(){if(!this.finalized){this.finalized=!0;var t=this.blocks,e=this.lastByteIndex;t[e>>2]|=EXTRA[3&e],e>=56&&(this.hashed||this.hash(),t[0]=t[16],t[16]=t[1]=t[2]=t[3]=t[4]=t[5]=t[6]=t[7]=t[8]=t[9]=t[10]=t[11]=t[12]=t[13]=t[14]=t[15]=0),t[14]=this.bytes<<3,t[15]=this.hBytes<<3|this.bytes>>>29,this.hash()}},Md5.prototype.hash=function(){var t,e,r,o,s,a,i=this.blocks;this.first?e=((e=((t=((t=i[0]-680876937)<<7|t>>>25)-271733879<<0)^(r=((r=(-271733879^(o=((o=(-1732584194^2004318071&t)+i[1]-117830708)<<12|o>>>20)+t<<0)&(-271733879^t))+i[2]-1126478375)<<17|r>>>15)+o<<0)&(o^t))+i[3]-1316259209)<<22|e>>>10)+r<<0:(t=this.h0,e=this.h1,r=this.h2,e=((e+=((t=((t+=((o=this.h3)^e&(r^o))+i[0]-680876936)<<7|t>>>25)+e<<0)^(r=((r+=(e^(o=((o+=(r^t&(e^r))+i[1]-389564586)<<12|o>>>20)+t<<0)&(t^e))+i[2]+606105819)<<17|r>>>15)+o<<0)&(o^t))+i[3]-1044525330)<<22|e>>>10)+r<<0),e=((e+=((t=((t+=(o^e&(r^o))+i[4]-176418897)<<7|t>>>25)+e<<0)^(r=((r+=(e^(o=((o+=(r^t&(e^r))+i[5]+1200080426)<<12|o>>>20)+t<<0)&(t^e))+i[6]-1473231341)<<17|r>>>15)+o<<0)&(o^t))+i[7]-45705983)<<22|e>>>10)+r<<0,e=((e+=((t=((t+=(o^e&(r^o))+i[8]+1770035416)<<7|t>>>25)+e<<0)^(r=((r+=(e^(o=((o+=(r^t&(e^r))+i[9]-1958414417)<<12|o>>>20)+t<<0)&(t^e))+i[10]-42063)<<17|r>>>15)+o<<0)&(o^t))+i[11]-1990404162)<<22|e>>>10)+r<<0,e=((e+=((t=((t+=(o^e&(r^o))+i[12]+1804603682)<<7|t>>>25)+e<<0)^(r=((r+=(e^(o=((o+=(r^t&(e^r))+i[13]-40341101)<<12|o>>>20)+t<<0)&(t^e))+i[14]-1502002290)<<17|r>>>15)+o<<0)&(o^t))+i[15]+1236535329)<<22|e>>>10)+r<<0,e=((e+=((o=((o+=(e^r&((t=((t+=(r^o&(e^r))+i[1]-165796510)<<5|t>>>27)+e<<0)^e))+i[6]-1069501632)<<9|o>>>23)+t<<0)^t&((r=((r+=(t^e&(o^t))+i[11]+643717713)<<14|r>>>18)+o<<0)^o))+i[0]-373897302)<<20|e>>>12)+r<<0,e=((e+=((o=((o+=(e^r&((t=((t+=(r^o&(e^r))+i[5]-701558691)<<5|t>>>27)+e<<0)^e))+i[10]+38016083)<<9|o>>>23)+t<<0)^t&((r=((r+=(t^e&(o^t))+i[15]-660478335)<<14|r>>>18)+o<<0)^o))+i[4]-405537848)<<20|e>>>12)+r<<0,e=((e+=((o=((o+=(e^r&((t=((t+=(r^o&(e^r))+i[9]+568446438)<<5|t>>>27)+e<<0)^e))+i[14]-1019803690)<<9|o>>>23)+t<<0)^t&((r=((r+=(t^e&(o^t))+i[3]-187363961)<<14|r>>>18)+o<<0)^o))+i[8]+1163531501)<<20|e>>>12)+r<<0,e=((e+=((o=((o+=(e^r&((t=((t+=(r^o&(e^r))+i[13]-1444681467)<<5|t>>>27)+e<<0)^e))+i[2]-51403784)<<9|o>>>23)+t<<0)^t&((r=((r+=(t^e&(o^t))+i[7]+1735328473)<<14|r>>>18)+o<<0)^o))+i[12]-1926607734)<<20|e>>>12)+r<<0,e=((e+=((a=(o=((o+=((s=e^r)^(t=((t+=(s^o)+i[5]-378558)<<4|t>>>28)+e<<0))+i[8]-2022574463)<<11|o>>>21)+t<<0)^t)^(r=((r+=(a^e)+i[11]+1839030562)<<16|r>>>16)+o<<0))+i[14]-35309556)<<23|e>>>9)+r<<0,e=((e+=((a=(o=((o+=((s=e^r)^(t=((t+=(s^o)+i[1]-1530992060)<<4|t>>>28)+e<<0))+i[4]+1272893353)<<11|o>>>21)+t<<0)^t)^(r=((r+=(a^e)+i[7]-155497632)<<16|r>>>16)+o<<0))+i[10]-1094730640)<<23|e>>>9)+r<<0,e=((e+=((a=(o=((o+=((s=e^r)^(t=((t+=(s^o)+i[13]+681279174)<<4|t>>>28)+e<<0))+i[0]-358537222)<<11|o>>>21)+t<<0)^t)^(r=((r+=(a^e)+i[3]-722521979)<<16|r>>>16)+o<<0))+i[6]+76029189)<<23|e>>>9)+r<<0,e=((e+=((a=(o=((o+=((s=e^r)^(t=((t+=(s^o)+i[9]-640364487)<<4|t>>>28)+e<<0))+i[12]-421815835)<<11|o>>>21)+t<<0)^t)^(r=((r+=(a^e)+i[15]+530742520)<<16|r>>>16)+o<<0))+i[2]-995338651)<<23|e>>>9)+r<<0,e=((e+=((o=((o+=(e^((t=((t+=(r^(e|~o))+i[0]-198630844)<<6|t>>>26)+e<<0)|~r))+i[7]+1126891415)<<10|o>>>22)+t<<0)^((r=((r+=(t^(o|~e))+i[14]-1416354905)<<15|r>>>17)+o<<0)|~t))+i[5]-57434055)<<21|e>>>11)+r<<0,e=((e+=((o=((o+=(e^((t=((t+=(r^(e|~o))+i[12]+1700485571)<<6|t>>>26)+e<<0)|~r))+i[3]-1894986606)<<10|o>>>22)+t<<0)^((r=((r+=(t^(o|~e))+i[10]-1051523)<<15|r>>>17)+o<<0)|~t))+i[1]-2054922799)<<21|e>>>11)+r<<0,e=((e+=((o=((o+=(e^((t=((t+=(r^(e|~o))+i[8]+1873313359)<<6|t>>>26)+e<<0)|~r))+i[15]-30611744)<<10|o>>>22)+t<<0)^((r=((r+=(t^(o|~e))+i[6]-1560198380)<<15|r>>>17)+o<<0)|~t))+i[13]+1309151649)<<21|e>>>11)+r<<0,e=((e+=((o=((o+=(e^((t=((t+=(r^(e|~o))+i[4]-145523070)<<6|t>>>26)+e<<0)|~r))+i[11]-1120210379)<<10|o>>>22)+t<<0)^((r=((r+=(t^(o|~e))+i[2]+718787259)<<15|r>>>17)+o<<0)|~t))+i[9]-343485551)<<21|e>>>11)+r<<0,this.first?(this.h0=t+1732584193<<0,this.h1=e-271733879<<0,this.h2=r-1732584194<<0,this.h3=o+271733878<<0,this.first=!1):(this.h0=this.h0+t<<0,this.h1=this.h1+e<<0,this.h2=this.h2+r<<0,this.h3=this.h3+o<<0)},Md5.prototype.hex=function(){this.finalize();var t=this.h0,e=this.h1,r=this.h2,o=this.h3;return HEX_CHARS[t>>4&15]+HEX_CHARS[15&t]+HEX_CHARS[t>>12&15]+HEX_CHARS[t>>8&15]+HEX_CHARS[t>>20&15]+HEX_CHARS[t>>16&15]+HEX_CHARS[t>>28&15]+HEX_CHARS[t>>24&15]+HEX_CHARS[e>>4&15]+HEX_CHARS[15&e]+HEX_CHARS[e>>12&15]+HEX_CHARS[e>>8&15]+HEX_CHARS[e>>20&15]+HEX_CHARS[e>>16&15]+HEX_CHARS[e>>28&15]+HEX_CHARS[e>>24&15]+HEX_CHARS[r>>4&15]+HEX_CHARS[15&r]+HEX_CHARS[r>>12&15]+HEX_CHARS[r>>8&15]+HEX_CHARS[r>>20&15]+HEX_CHARS[r>>16&15]+HEX_CHARS[r>>28&15]+HEX_CHARS[r>>24&15]+HEX_CHARS[o>>4&15]+HEX_CHARS[15&o]+HEX_CHARS[o>>12&15]+HEX_CHARS[o>>8&15]+HEX_CHARS[o>>20&15]+HEX_CHARS[o>>16&15]+HEX_CHARS[o>>28&15]+HEX_CHARS[o>>24&15]},Md5.prototype.toString=Md5.prototype.hex,Md5.prototype.digest=function(){this.finalize();var t=this.h0,e=this.h1,r=this.h2,o=this.h3;return[255&t,t>>8&255,t>>16&255,t>>24&255,255&e,e>>8&255,e>>16&255,e>>24&255,255&r,r>>8&255,r>>16&255,r>>24&255,255&o,o>>8&255,o>>16&255,o>>24&255]},Md5.prototype.array=Md5.prototype.digest,Md5.prototype.arrayBuffer=function(){this.finalize();var t=new ArrayBuffer(16),e=new Uint32Array(t);return e[0]=this.h0,e[1]=this.h1,e[2]=this.h2,e[3]=this.h3,t},Md5.prototype.buffer=Md5.prototype.arrayBuffer,Md5.prototype.base64=function(){for(var t,e,r,o="",s=this.array(),a=0;a<15;)t=s[a++],e=s[a++],r=s[a++],o+=BASE64_ENCODE_CHAR[t>>>2]+BASE64_ENCODE_CHAR[63&(t<<4|e>>>4)]+BASE64_ENCODE_CHAR[63&(e<<2|r>>>6)]+BASE64_ENCODE_CHAR[63&r];return t=s[a],o+=BASE64_ENCODE_CHAR[t>>>2]+BASE64_ENCODE_CHAR[t<<4&63]+"=="};var exports=createMethod();COMMON_JS?module.exports=exports:root.md5=exports})()})(md5$1);const md5=md5Exports,index_vue_vue_type_style_index_0_scoped_8925cc3d_lang="",_sfc_main={__name:"index",setup(t){let e=!1;const r=ref([]),o=ref({userName:"",password:"",province:"",city:"",street:"",county:"",communityId:"",communityName:""}),s=t=>{if(e)return e=!1;e=!0,a()};(async()=>{const t=await commiunityInfo();r.value=generateHierarchy(t.data)})();const a=async()=>{const t={...o.value};return t.communityId?t.userName?t.password?(t.password=md5(t.password),await login(t),toast("登录成功"),delete t.password,setStorageSync("userInfo",t),void switchTab({url:"/pages/home/index"})):toast("请输入密码"):toast("请输入账号"):toast("请选择省市区街道社区")},i=t=>{const e=t.detail.value,r=e[4].value.split(";");o.value=Object.assign(o.value,{province:e[0].text,city:e[1].text,street:e[3].text,county:e[2].text,communityId:r[0],communityName:e[4].text,latitude:r[1],longitude:r[2]})};return(t,e)=>{const a=index$g,n=resolveEasycom(resolveDynamicComponent("uni-data-picker"),__easycom_0),c=resolveEasycom(resolveDynamicComponent("uni-forms-item"),__easycom_2),h=resolveEasycom(resolveDynamicComponent("uni-easyinput"),__easycom_0$1),l=resolveEasycom(resolveDynamicComponent("uni-forms"),__easycom_2$1),u=resolveEasycom(resolveDynamicComponent("uni-card"),__easycom_3),f=resolveEasycom(resolveDynamicComponent("uv-button"),__easycom_7);return openBlock(),createBlock(a,{class:"box"},{default:withCtx((()=>[createVNode(a,{class:"body"},{default:withCtx((()=>[createVNode(a,{class:"titlebox"},{default:withCtx((()=>[createVNode(a,{class:"tit",style:{"text-align":"center",width:"100%"}},{default:withCtx((()=>[createTextVNode("请登录")])),_:1})])),_:1}),createVNode(u,{isFull:!0,style:{"margin-top":"32rpx"}},{default:withCtx((()=>[createVNode(l,{modelValue:o.value,"label-position":"top","label-width":"fit-content"},{default:withCtx((()=>[createVNode(c,{label:"省市区街道社区",name:"communityId"},{default:withCtx((()=>[createVNode(n,{localdata:r.value,modelValue:o.value.communityId,"onUpdate:modelValue":e[0]||(e[0]=t=>o.value.communityId=t),"popup-title":"请选择地区",onChange:i},null,8,["localdata","modelValue"])])),_:1}),createVNode(c,{name:"username",label:"账户"},{default:withCtx((()=>[createVNode(h,{modelValue:o.value.userName,"onUpdate:modelValue":e[1]||(e[1]=t=>o.value.userName=t),placeholder:"请输入账号"},null,8,["modelValue"])])),_:1}),createVNode(c,{name:"password",label:"密码"},{default:withCtx((()=>[createVNode(h,{type:"password",modelValue:o.value.password,"onUpdate:modelValue":e[2]||(e[2]=t=>o.value.password=t),placeholder:"请输入密码"},null,8,["modelValue"])])),_:1})])),_:1},8,["modelValue"])])),_:1}),createVNode(a,{class:"btns"},{default:withCtx((()=>[createVNode(f,{type:"primary",text:"登录",onClick:s})])),_:1})])),_:1})])),_:1})}}},index=_export_sfc(_sfc_main,[["__scopeId","data-v-8925cc3d"]]);export{index as default};
