webpackJsonp([1],{"/Q6u":function(e,t){},K75x:function(e,t){},NHnr:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n("7+uW"),r=n("zL8q"),o=n.n(r),s=(n("tvR6"),{name:"Nav",data:function(){return{activeIndex:"/add"}},methods:{handleSelect:function(e,t){console.log(e,t)}}}),i={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-menu",{attrs:{"default-active":e.activeIndex,router:"",mode:"horizontal","background-color":"#545c64","text-color":"#fff","active-text-color":"#ffd04b"},on:{select:e.handleSelect}},[n("el-menu-item",{staticClass:"logo",attrs:{index:"/"}},[e._v("区块记事")]),e._v(" "),n("el-menu-item",{attrs:{index:"/add"}},[e._v("首页")]),e._v(" "),n("el-menu-item",{attrs:{index:"/wall"}},[e._v("大家说")]),e._v(" "),n("el-menu-item",{attrs:{index:"/mylist"}},[e._v("我的事件")])],1)},staticRenderFns:[]};var l={name:"App",components:{"my-nav":n("VU/8")(s,i,!1,function(e){n("/Q6u")},"data-v-fdee7656",null).exports}},c={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("el-container",[t("el-header",[t("my-nav")],1),this._v(" "),t("el-main",[t("router-view")],1),this._v(" "),t("el-footer",[t("span",[this._v("Copyright © 2018.区块记事")])])],1)],1)},staticRenderFns:[]};var u=n("VU/8")(l,c,!1,function(e){n("K75x")},null,null).exports,d=n("/ocq"),f=n("mvHQ"),m=n.n(f),p={name:"Add",data:function(){return{userName:"",content:"",isOpen:!1,serialNumber:null,intervalQuery:null}},mounted:function(){this.getUserName()},methods:{getUserName:function(){var e=this;window.nebPay.simulateCall(window.dappAddress,"0","getUserName","[]",{callback:window.IS_TESTNET?window.NebPay.config.testnetUrl:window.NebPay.config.mainnetUrl,listener:function(t){console.log("getUserName: ",m()(t)),e.userName=JSON.parse(t.result)||""}})},setUserName:function(){var e=this,t=this.userName;this.$prompt("","设置昵称",{confirmButtonText:"确定",cancelButtonText:"取消",inputValue:t}).then(function(t){var n=t.value;if(console.log("value",n),!(n=n.trim()))return!1;console.log("value",n);var a=window.dappAddress,r=m()([n]);window.nebPay.call(a,"0","setUserName",r,{callback:window.IS_TESTNET?window.NebPay.config.testnetUrl:window.NebPay.config.mainnetUrl,listener:function(t){console.log("response of push: ",m()(t)),e.userName=n}})}).catch(function(){})},onSubmit:function(){var e=this;if(console.log(this.content,this.isOpen),this.content=this.content.trim(),!this.content)return this.$message.error("请填写事件内容"),!1;var t=window.dappAddress,n=m()([this.content,this.isOpen]);this.serialNumber=window.nebPay.call(t,"0","addRecord",n,{callback:window.IS_TESTNET?window.NebPay.config.testnetUrl:window.NebPay.config.mainnetUrl,listener:this.cbPush}),this.intervalQuery=setInterval(function(){e.funcIntervalQuery()},5e3)},funcIntervalQuery:function(){window.nebPay.queryPayInfo(this.serialNumber,{callback:window.IS_TESTNET?window.NebPay.config.testnetUrl:window.NebPay.config.mainnetUrl}).then(function(e){console.log("tx result: ",e),0===JSON.parse(e).code&&(console.log("succeed!!!!!!!!!!!!!!!!!!!!!!!!"),clearInterval(this.intervalQuery))}).catch(function(e){console.log(e)})},cbPush:function(e){console.log("response of push: ",m()(e))}}},v={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{},[e._m(0),e._v(" "),n("el-form",{staticClass:"form",attrs:{"label-width":"80px"}},[n("el-form-item",{attrs:{label:"事件内容"}},[n("el-input",{attrs:{type:"textarea",rows:8,placeholder:"请输入内容"},model:{value:e.content,callback:function(t){e.content=t},expression:"content"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"是否公开"}},[n("el-switch",{attrs:{"active-color":"#ebb563"},model:{value:e.isOpen,callback:function(t){e.isOpen=t},expression:"isOpen"}})],1),e._v(" "),n("el-form-item",[n("el-button",{attrs:{type:"warning",plain:""},on:{click:e.onSubmit}},[e._v("提交")]),e._v(" "),n("el-button",{attrs:{type:"info",plain:""},on:{click:e.setUserName}},[e._v("设置昵称")])],1)],1)],1)},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"desc"},[t("p",[this._v("[2009年1月3日，比特币的创始人中本聪将泰晤士报当天的头版文章标题，永久刻在了比特币区块链的创世区块里。]")]),this._v(" "),t("br"),this._v(" "),t("p",[this._v("古有结绳记事，今有区块记事。区块链永不宕机，让事迹永不磨灭。")])])}]};var h=n("VU/8")(p,v,!1,function(e){n("QirH")},"data-v-a233e60a",null).exports,w={name:"Wall",data:function(){return{tableData:[]}},mounted:function(){this.getOpenRecords()},methods:{dateFormat:function(e){if(!e)return"";var t=new Date(e),n=t.getFullYear(),a=t.getMonth()+1,r=t.getDate(),o=t.getHours(),s=t.getMinutes(),i=t.getSeconds();return n+"-"+(a=a<10?"0"+a:a)+"-"+(r=r<10?"0"+r:r)+" "+(o=o<10?"0"+o:o)+":"+(s=s<10?"0"+s:s)+":"+(i=i<10?"0"+i:i)},getOpenRecords:function(){var e=window.Account.NewAccount().getAddressString();console.log("from: ",e);var t={function:"getOpenRecords",args:"[]"},n=this;window.neb.api.call(e,window.dappAddress,"0","0","1000000","2000000",t).then(function(e){console.log("resp-------------------\x3e>>: ",JSON.parse(e.result)),n.tableData=JSON.parse(e.result).reverse()}).catch(function(e){console.log("error: ",e.message)})}}},b={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-table",{staticStyle:{width:"100%"},attrs:{"show-header":!1,data:e.tableData}},[n("el-table-column",{attrs:{label:"日期",width:"180"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n      "+e._s(e.dateFormat(t.row.createTime))+"\n    ")]}}])}),e._v(" "),n("el-table-column",{attrs:{label:"姓名",width:"180"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n      "+e._s(t.row.userName||"无名氏")+"\n    ")]}}])}),e._v(" "),n("el-table-column",{attrs:{prop:"content",label:"内容"}})],1)},staticRenderFns:[]};var g=n("VU/8")(w,b,!1,function(e){n("lA5n")},null,null).exports,_={name:"MyList",data:function(){return{myRecords:[]}},mounted:function(){this.getUserRecords()},methods:{isOpenRaw:function(e){return e?"公开":"私密"},dateFormat:function(e){if(!e)return"";var t=new Date(e),n=t.getFullYear(),a=t.getMonth()+1,r=t.getDate(),o=t.getHours(),s=t.getMinutes(),i=t.getSeconds();return n+"-"+(a=a<10?"0"+a:a)+"-"+(r=r<10?"0"+r:r)+" "+(o=o<10?"0"+o:o)+":"+(s=s<10?"0"+s:s)+":"+(i=i<10?"0"+i:i)},listener:function(e){console.log("^^^^^^^^^^^^^^^^listener resp: ",JSON.parse(e.result)),this.myRecords=JSON.parse(e.result).reverse()},getUserRecords:function(){window.nebPay.simulateCall(window.dappAddress,"0","getRecordsByUser","[]",{callback:window.IS_TESTNET?window.NebPay.config.testnetUrl:window.NebPay.config.mainnetUrl,listener:this.listener})}}},y={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{},[n("el-steps",{staticClass:"records",attrs:{direction:"vertical",active:1,space:"120px"}},e._l(e.myRecords,function(t){return n("el-step",{key:t.createTime,attrs:{title:e.dateFormat(t.createTime)+" ("+e.isOpenRaw(t.isOpen)+")",description:t.content,status:t.isOpen?"finish":"process"}})}))],1)},staticRenderFns:[]};var N=n("VU/8")(_,y,!1,function(e){n("SEDQ")},"data-v-f4b7298a",null).exports,S={render:function(){var e=this.$createElement;return(this._self._c||e)("div",{},[this._v("\n  关于我们\n")])},staticRenderFns:[]},U=n("VU/8")({name:"About"},S,!1,null,null,null).exports;a.default.use(d.a);var x=new d.a({routes:[{path:"/",redirect:"/add"},{path:"/add",name:"Add",component:h},{path:"/wall",name:"Wall",component:g},{path:"/mylist",name:"MyList",component:N},{path:"/about",name:"About",component:U}]});a.default.config.productionTip=!1,a.default.use(o.a),new a.default({el:"#app",router:x,components:{App:u},template:"<App/>"})},QirH:function(e,t){},SEDQ:function(e,t){},lA5n:function(e,t){},tvR6:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.0608ea35d8df594de242.js.map