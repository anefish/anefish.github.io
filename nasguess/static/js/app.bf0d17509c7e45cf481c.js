webpackJsonp([1],{"1bxq":function(t,e){},"4Uwr":function(t,e,n){t.exports=n.p+"static/img/logo.d0b532e.jpg"},"6jJI":function(t,e){},EKhs:function(t,e){},GA7m:function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n("7+uW"),a=n("zL8q"),i=n.n(a),r=(n("tvR6"),{render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"my-nav"},[s("img",{staticClass:"logo",attrs:{src:n("4Uwr"),alt:""}}),t._v(" "),s("el-menu",{staticClass:"my-menu",attrs:{router:"","default-active":t.activeIndex,mode:"horizontal"},on:{select:t.handleSelect}},[s("el-menu-item",{attrs:{index:"/unrewards"}},[t._v("正在竞猜")]),t._v(" "),s("el-menu-item",{attrs:{index:"/berewards"}},[t._v("往期竞猜")]),t._v(" "),s("el-menu-item",{attrs:{index:"/createguess"}},[t._v("发起竞猜")]),t._v(" "),s("el-menu-item",{attrs:{index:"/help"}},[t._v("帮助")])],1)],1)},staticRenderFns:[]});var u={name:"App",components:{"my-nav":n("VU/8")({data:function(){return{}},computed:{activeIndex:function(){return"/"+this.$route.path.split("/")[1]}},watch:{$route:function(t,e){return"/"+t.path.split("/")[1]}},methods:{handleSelect:function(t,e){}}},r,!1,function(t){n("v3SK")},"data-v-c010d97a",null).exports}},o={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("div",{staticClass:"header"},[e("my-nav")],1),this._v(" "),e("el-alert",{staticClass:"extension-alert",attrs:{title:"温馨提示：使用本网站，请先安装 ",type:"warning","close-text":"知道了"}},[e("a",{attrs:{target:"_blank",href:"https://github.com/ChengOrangeJu/WebExtensionWallet"}},[this._v("星云链官方钱包插件")])]),this._v(" "),e("div",{staticClass:"main"},[e("router-view")],1),this._v(" "),this._m(0)],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"footer"},[e("p",[e("span",[this._v("Powered by Nebulas")]),e("a",{attrs:{target:"_blank",href:"https://explorer.nebulas.io/#/tx/125571a155f3855f8f6b331847b426bbb09ff684f6de48901886ec3869e14f0c"}},[this._v("合约")])]),this._v(" "),e("br"),this._v(" "),e("p",[this._v("© 大玩家 Copyright by: anefish")])])}]};var l=n("VU/8")(u,o,!1,function(t){n("EKhs")},null,null).exports,c=n("/ocq"),d=n("mvHQ"),v=n.n(d),w={data:function(){return{unit:.01,guessUnits:2,serialNumber:null,intervalQuery:null,guessNum:1}},props:["unRewardItem"],methods:{onSubmitGuess:function(){var t=this,e=this.unit*this.guessUnits;this.$confirm("您选择的数字是"+this.guessNum+"，本次竞猜您需支付"+e+"NAS。(因钱包交易为异步执行，支付成功后请手动刷新网页。)","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){t.submitGuess()}).catch(function(){})},submitGuess:function(){var t=this,e=this.unit*this.guessUnits,n=window.dappAddress,s=e,a=v()([this.unRewardItem.index,this.guessNum]);this.serialNumber=window.nebPay.call(n,s,"submitGuess",a,{callback:window.IS_TESTNET?window.NebPay.config.testnetUrl:window.NebPay.config.mainnetUrl,listener:function(t){console.log("submitGuess callback data: ",t)}}),this.intervalQuery=setInterval(function(){t.funcIntervalQuery()},5e3)},funcIntervalQuery:function(){var t=this;window.nebPay.queryPayInfo(this.serialNumber,{callback:window.IS_TESTNET?window.NebPay.config.testnetUrl:window.NebPay.config.mainnetUrl}).then(function(e){console.log("tx result: ",e),0===JSON.parse(e).code&&(console.log("succeed!!!!!!!!!!!!!!!!!!!!!!!!"),clearInterval(t.intervalQuery),window.location.reload())}).catch(function(t){console.log(t)})}}},_={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-card",{staticClass:"box-card unreward-item"},[n("div",{staticClass:"title"},[t._v("\n    第"+t._s(t.unRewardItem.index)+"期\n  ")]),t._v(" "),n("div",{staticClass:"answers"},[n("span",{staticClass:"label"},[t._v("竞猜数字")]),t._v(" "),n("el-radio-group",{staticClass:"answer-options",model:{value:t.guessNum,callback:function(e){t.guessNum=e},expression:"guessNum"}},t._l(Number(t.unRewardItem.rewardUnits),function(t){return n("el-radio-button",{key:t,attrs:{label:t}})}))],1),t._v(" "),n("div",{staticClass:"tip"},[t._v("\n    猜中答案你将获得 "),n("span",{staticClass:"amount"},[t._v("0.05NAS")]),t._v(" 奖励\n  ")]),t._v(" "),n("div",{staticClass:"submit"},[n("el-button",{attrs:{type:"warning",round:"",icon:"el-icon-time"},on:{click:t.onSubmitGuess}},[t._v("我要竞猜")])],1)])},staticRenderFns:[]};var f={data:function(){return{unRewardGuess:[]}},mounted:function(){this.getUnRewardGuess()},methods:{jump:function(){this.$router.push("/createguess")},getUnRewardGuess:function(){var t=this,e=window.Account.NewAccount().getAddressString(),n={function:"getUnRewardGuess",args:"[]"};window.neb.api.call(e,window.dappAddress,"0","0","1000000","2000000",n).then(function(e){console.log("getUnRewardGuess data result: ",JSON.parse(e.result)),t.unRewardGuess=JSON.parse(e.result)}).catch(function(t){console.log("error: ",t.message)})}},components:{UnRewardItem:n("VU/8")(w,_,!1,function(t){n("GA7m")},"data-v-1035b540",null).exports}},m={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"unrewards"},[t._l(t.unRewardGuess,function(t){return n("un-reward-item",{key:t.index,attrs:{unRewardItem:t}})}),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:0===t.unRewardGuess.length,expression:"unRewardGuess.length === 0"}],staticClass:"nodata"},[n("div",{staticClass:"txt"},[t._v("\n      暂无竞猜...\n    ")]),t._v(" "),n("el-button",{attrs:{type:"warning"},on:{click:t.jump}},[t._v("我要发起")])],1)],2)},staticRenderFns:[]};var p=n("VU/8")(f,m,!1,function(t){n("wiGq")},"data-v-d1f57aee",null).exports,h={data:function(){return{unit:.01,guessUnits:2,beRewardGuess:[]}},mounted:function(){this.getBeRewardGuess()},methods:{jump:function(){this.$router.push("/createguess")},getBeRewardGuess:function(){var t=this,e=window.Account.NewAccount().getAddressString(),n={function:"getBeRewardGuess",args:"[10]"};window.neb.api.call(e,window.dappAddress,"0","0","1000000","2000000",n).then(function(e){console.log("getBeRewardGuess data result: ",JSON.parse(e.result)),t.beRewardGuess=JSON.parse(e.result)}).catch(function(t){console.log("error: ",t.message)})}}},b={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"berewards"},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.beRewardGuess.length>0,expression:"beRewardGuess.length > 0"}],staticClass:"title"},[t._v("\n    最近10期\n  ")]),t._v(" "),t._l(t.beRewardGuess,function(e){return n("el-card",{key:e.index,staticClass:"box-card bereward-item"},[n("div",{staticClass:"title"},[t._v("\n       第"+t._s(e.index)+"期\n     ")]),t._v(" "),n("div",{staticClass:"answers"},[n("span",{staticClass:"label"},[t._v("竞猜数字")]),t._v(" "),n("el-button-group",{staticClass:"answer-options"},t._l(Number(e.rewardUnits),function(e){return n("el-button",{key:e,attrs:{disabled:""}},[t._v(t._s(e))])}))],1),t._v(" "),n("div",{staticClass:"answers"},[n("span",[t._v("正确答案")]),t._v(" "),n("el-button-group",{staticClass:"answer-options"},[n("el-button",{attrs:{type:"warning"}},[t._v(t._s(e.rightNum))])],1)],1),t._v(" "),n("div",{staticClass:"tip"},[t._v("\n       获胜者 "),n("span",[t._v(t._s(e.winner))]),t._v(" 赢得 "),n("span",{staticClass:"amount"},[t._v(t._s(t.unit*Number(e.rewardUnits))+"NAS")]),t._v(" 奖励\n     ")]),t._v(" "),n("div",{staticClass:"tip"},[t._v("\n       发起者 "),n("span",[t._v(t._s(e.from))]),t._v(" 赢得 "),n("span",{staticClass:"amount"},[t._v(t._s(t.unit*t.guessUnits*Number(e.guessCount))+"NAS")]),t._v(" 奖励\n     ")])])}),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:0===t.beRewardGuess.length,expression:"beRewardGuess.length === 0"}],staticClass:"nodata"},[n("div",{staticClass:"txt"},[t._v("\n        暂无竞猜...\n      ")]),t._v(" "),n("el-button",{attrs:{type:"warning"},on:{click:t.jump}},[t._v("我要发起")])],1)],2)},staticRenderFns:[]};var g=n("VU/8")(h,b,!1,function(t){n("1bxq")},"data-v-402f45dd",null).exports,N={data:function(){return{unit:.01,rewardUnits:"5",serialNumber:null,intervalQuery:null}},methods:{onCreateGuess:function(){var t=this,e=this.unit*Number(this.rewardUnits);this.$confirm("本次发起竞猜，您需支付"+e+"NAS.","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){t.createGuess()}).catch(function(){})},createGuess:function(){var t=this,e=this.unit*Number(this.rewardUnits),n=window.dappAddress,s=e,a=v()([this.rewardUnits]);this.serialNumber=window.nebPay.call(n,s,"createGuess",a,{callback:window.IS_TESTNET?window.NebPay.config.testnetUrl:window.NebPay.config.mainnetUrl,listener:function(t){console.log("createGuess callback data: ",t)}}),this.intervalQuery=setInterval(function(){t.funcIntervalQuery()},5e3)},funcIntervalQuery:function(){var t=this;window.nebPay.queryPayInfo(this.serialNumber,{callback:window.IS_TESTNET?window.NebPay.config.testnetUrl:window.NebPay.config.mainnetUrl}).then(function(e){console.log("tx result: ",e),0===JSON.parse(e).code&&(console.log("succeed!!!!!!!!!!!!!!!!!!!!!!!!"),clearInterval(t.intervalQuery))}).catch(function(t){console.log(t)})}}},C={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"create-guess"},[n("div",{staticClass:"label"},[t._v("\n    请选择本期竞猜选项个数\n  ")]),t._v(" "),n("el-radio-group",{staticClass:"answer-options",model:{value:t.rewardUnits,callback:function(e){t.rewardUnits=e},expression:"rewardUnits"}},[n("el-radio-button",{attrs:{label:"5"}}),t._v(" "),n("el-radio-button",{attrs:{label:"6"}}),t._v(" "),n("el-radio-button",{attrs:{label:"7"}}),t._v(" "),n("el-radio-button",{attrs:{label:"8"}}),t._v(" "),n("el-radio-button",{attrs:{label:"9"}}),t._v(" "),n("el-radio-button",{attrs:{label:"10"}})],1),t._v(" "),n("div",{staticClass:"tip"},[t._v("\n     选项越多，猜中概率越小，发起人赢得更多奖励的机会越大\n   ")]),t._v(" "),n("div",{staticClass:"submit"},[n("el-button",{attrs:{type:"warning",round:"",icon:"el-icon-edit"},on:{click:t.onCreateGuess}},[t._v("发起竞猜")])],1)],1)},staticRenderFns:[]};var y=n("VU/8")(N,C,!1,function(t){n("Od2e")},"data-v-d4214678",null).exports,x={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"help"},[n("div",{staticClass:"desc"},[t._v("\n    大玩家是一款基于星云链开发的数字竞猜类区块链小游戏。在本游戏中，玩家可以发起竞猜，也可以参与别人发起的竞猜，发起和参与竞猜将有机会获得数量不等的NAS奖励。本游戏所有核心业务逻辑及数据，将永久运行和保存在基于星云区块链的智能合约中。合约代码开源，不可篡改，游戏简单有趣，公平公正。\n  ")]),t._v(" "),n("div",{staticClass:"rules"},[n("div",{staticClass:"title"},[t._v("\n      游戏规则：\n    ")]),t._v(" "),n("div",{staticClass:"info"},[n("p",[t._v("1. 发起竞猜可以选择5-10个竞猜选项。比如：发起5个选项的竞猜，则竞猜选项包含1、2、3、4、5这几个数字，以此类推。")]),t._v(" "),n("p",[t._v("2. 发起n个选项的竞猜，则发起人需支付0.01 * n 个NAS作为竞猜人中奖奖励。比如：发起5个选项的竞猜，则发起人需支付0.01 * 5 = 0.05 NAS，作为竞猜人奖励。")]),t._v(" "),n("p",[t._v("3. 发起竞猜时，当前竞猜的正确答案将在智能合约中随机生成，无人可以篡改和提前知晓。")]),t._v(" "),n("p",[t._v("3. 竞猜人每次参与竞猜，需支付0.01 * 2 = 0.02个NAS作为发起人的奖励。（因每次参与竞猜均需成本，轮刷答案得不偿失，故不限制单人参与单期竞猜次数，玩家拼的是运气。）")]),t._v(" "),n("p",[t._v("4. 每期竞猜不限参与人次，直至有人猜中正确答案。")]),t._v(" "),n("p",[t._v("5. 每期竞猜有人猜中正确答案时，将同时发放竞猜赢家与竞猜发起人奖励。竞猜赢家获得的奖励为发起人支付的发起费用，比如第2条中的0.05NAS。\n        竞猜发起人获得的奖励，为所有参与本期竞猜者所支付的费用，比如第10个人猜中答案，则发起人获得的奖励为0.01 * 2 * 10 = 0.2 NAS 。")])])]),t._v(" "),n("div",{staticClass:"limit"},[n("div",{staticClass:"title"},[t._v("\n      免责声明：\n    ")]),t._v(" "),n("div",{staticClass:"info"},[t._v("\n      用户在本平台的所有行为及结果，均由用户自行负责。平台默认用户完全理解并接受所有规则，如发生纠纷平台概不负责。\n    ")])])])}]};var U=n("VU/8")({},x,!1,function(t){n("6jJI")},"data-v-527b4410",null).exports;s.default.use(c.a);var G=new c.a({routes:[{path:"/",redirect:"/unrewards"},{path:"/unrewards",name:"UnRewards",component:p},{path:"/berewards",name:"BeRewards",component:g},{path:"/createguess",name:"CreateGuess",component:y},{path:"/help",name:"Help",component:U}]});s.default.config.productionTip=!1,s.default.use(i.a),new s.default({el:"#app",router:G,components:{App:l},template:"<App/>"})},Od2e:function(t,e){},tvR6:function(t,e){},v3SK:function(t,e){},wiGq:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.bf0d17509c7e45cf481c.js.map