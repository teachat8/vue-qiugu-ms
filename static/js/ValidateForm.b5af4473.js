(window.webpackJsonp=window.webpackJsonp||[]).push([["ValidateForm"],{"8f2c":function(e,t,l){"use strict";l.r(t),l("6762"),l("2fdb");var r={data:function(){return{form:{name:"",region:"",date1:"",date2:"",delivery:!1,type:[],resource:"",desc:""}}},methods:{onSubmit:function(){}},directives:{enterNumber:{inserted:function(e){e.addEventListener("keypress",function(t){var l="number"==typeof(t=t||window.event).charCode?t.charCode:t.keyCode;46!==l?45!==l?!/\d/.test(String.fromCharCode(l))&&9<l&&!t.ctrlKey&&(t.preventDefault?t.preventDefault():t.returnValue=!1):e.children[0].value.includes("-")&&t.preventDefault():e.children[0].value.includes(".")&&t.preventDefault()})}}}},a=l("2877"),o=Object(a.a)(r,function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",{staticClass:"validate"},[l("h1",[e._v("表单验证")]),l("el-form",{ref:"form",attrs:{model:e.form,"label-width":"80px"}},[l("el-form-item",{attrs:{label:"活动名称"}},[l("el-input",{directives:[{name:"enter-number",rawName:"v-enter-number"}],model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),l("el-form-item",{attrs:{label:"活动区域"}},[l("el-select",{attrs:{placeholder:"请选择活动区域"},model:{value:e.form.region,callback:function(t){e.$set(e.form,"region",t)},expression:"form.region"}},[l("el-option",{attrs:{label:"区域一",value:"shanghai"}}),l("el-option",{attrs:{label:"区域二",value:"beijing"}})],1)],1),l("el-form-item",{attrs:{label:"活动时间"}},[l("el-col",{attrs:{span:11}},[l("el-date-picker",{staticStyle:{width:"100%"},attrs:{type:"date",placeholder:"选择日期"},model:{value:e.form.date1,callback:function(t){e.$set(e.form,"date1",t)},expression:"form.date1"}})],1),l("el-col",{staticClass:"line",attrs:{span:2}},[e._v("-")]),l("el-col",{attrs:{span:11}},[l("el-time-picker",{staticStyle:{width:"100%"},attrs:{type:"fixed-time",placeholder:"选择时间"},model:{value:e.form.date2,callback:function(t){e.$set(e.form,"date2",t)},expression:"form.date2"}})],1)],1),l("el-form-item",{attrs:{label:"即时配送"}},[l("el-switch",{model:{value:e.form.delivery,callback:function(t){e.$set(e.form,"delivery",t)},expression:"form.delivery"}})],1),l("el-form-item",{attrs:{label:"活动性质"}},[l("el-checkbox-group",{model:{value:e.form.type,callback:function(t){e.$set(e.form,"type",t)},expression:"form.type"}},[l("el-checkbox",{attrs:{label:"美食/餐厅线上活动",name:"type"}}),l("el-checkbox",{attrs:{label:"地推活动",name:"type"}}),l("el-checkbox",{attrs:{label:"线下主题活动",name:"type"}}),l("el-checkbox",{attrs:{label:"单纯品牌曝光",name:"type"}})],1)],1),l("el-form-item",{attrs:{label:"特殊资源"}},[l("el-radio-group",{model:{value:e.form.resource,callback:function(t){e.$set(e.form,"resource",t)},expression:"form.resource"}},[l("el-radio",{attrs:{label:"线上品牌商赞助"}}),l("el-radio",{attrs:{label:"线下场地免费"}})],1)],1),l("el-form-item",{attrs:{label:"活动形式"}},[l("el-input",{attrs:{type:"textarea"},model:{value:e.form.desc,callback:function(t){e.$set(e.form,"desc",t)},expression:"form.desc"}})],1),l("el-form-item",[l("el-button",{attrs:{type:"primary"},on:{click:e.onSubmit}},[e._v("立即创建")]),l("el-button",[e._v("取消")])],1)],1)],1)},[],!1,null,null,null);o.options.__file="ValidateForm.vue",t.default=o.exports}}]);