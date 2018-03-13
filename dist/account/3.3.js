webpackJsonp([3],{

/***/ 41:
/***/ (function(module, exports, __webpack_require__) {

	
	/* styles */
	__webpack_require__(42)

	var Component = __webpack_require__(11)(
	  /* script */
	  __webpack_require__(44),
	  /* template */
	  __webpack_require__(45),
	  /* scopeId */
	  null,
	  /* cssModules */
	  null
	)
	Component.options.__file = "D:\\东财项目集合\\weex\\account\\app\\pages\\product\\test.vue"
	if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
	if (Component.options.functional) {console.error("[vue-loader] test.vue: functional components are not supported with templates, they should use render functions.")}

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-2128597b", Component.options)
	  } else {
	    hotAPI.reload("data-v-2128597b", Component.options)
	  }
	})()}

	module.exports = Component.exports


/***/ }),

/***/ 42:
/***/ (function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(43);
	if(typeof content === 'string') content = [[module.id, content, '']];
	if(content.locals) module.exports = content.locals;
	// add the styles to the DOM
	var update = __webpack_require__(9)("7022a9f8", content, false);
	// Hot Module Replacement
	if(false) {
	 // When the styles change, update the <style> tags
	 if(!content.locals) {
	   module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-2128597b!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./test.vue", function() {
	     var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-2128597b!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./test.vue");
	     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
	     update(newContent);
	   });
	 }
	 // When the module is disposed, remove the <style> tags
	 module.hot.dispose(function() { update(); });
	}

/***/ }),

/***/ 43:
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(8)();
	// imports


	// module
	exports.push([module.id, "\n.text {\n  height: 80px;\n  margin-top: 20px;\n  margin-bottom: 20px;\n  margin-left: 10px;\n  margin-right: 10px;\n  border-bottom-left-radius: 5px;\n  border-bottom-right-radius: 5px;\n  border-top-left-radius: 5px;\n  border-top-right-radius: 5px;\n}\n.btn {\n  width: 750px;\n  height: 100px;\n  border-bottom-left-radius: 5px;\n  border-bottom-right-radius: 5px;\n  border-top-left-radius: 5px;\n  border-top-right-radius: 5px;\n  text-align: center;\n  background-color: #8e8e8e;\n  color: white;\n  line-height: 100px;\n}\n", ""]);

	// exports


/***/ }),

/***/ 44:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _mixins = __webpack_require__(13);

	var _mixins2 = _interopRequireDefault(_mixins);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  mixins: [_mixins2.default],
	  data: function data() {
	    return {
	      "title": "获取用户信息-旧",
	      "shared": true,
	      "device_id": "Z4c35mZmMzMyNzc1Njc0NDkzNjE0NmU2NDdmZGRjZmEyNGV8fDYwNjE4MzYyMDY5NjY2OA=ab49=",
	      "version": "2.0.5",
	      "plat": "andriod",
	      "network": "Wifi",
	      "ctoken": "W-QMfbiJ1wcVWaxQ0hLFK4Q2XUyG6B2UBWoN1tQYcvRRtS_Lo_xNzuyELGbzETylQ7nQ1-gwUs1rahvXeP25AbZN4pukoiWV0eTJ08TN754uHDOsKiWwyjjgxIlH5Y0gfRE7zHBk_bdNmjHiI58Nflx7HWUUq6OeSJZuilBAjiY",
	      "utoken": "s3wlV4neEHtR-7bXjPv8RSXEzQJw5HIOi7i9QFQT3Wyizhu4WMiqW62d_Ei8DTy7CF0XoE_WmvU4i9dIzbR6IHHmw0JF0xVKgfmm5kXAY4DCJmY5bxZ3lrzxao6xbdqgEO_GKjcx-jK462ioJBjvHMACxualq60H4nYipmvaBai-snE3yopeRaUTZjXiz5dprzqw_O6jh_IIylkOSaOxTnfqJSz4YhThiFG7TOicfqFLd3hO1AQUhWGhiOgASXJF5E93HzVPFdquDyP0KgGmnXsF49EN-YGIzxoxuZJg1yqBSuA08BkJFpsDXwyXS3xvRGqdtOkk3pc_RopRptUnbh-cRSeRxA4JL6BZzUjEMc0"
	    };
	  },

	  methods: {
	    login: function login() {
	      var _this = this;
	      _this.cookieFun().cookie('device_id', _this.device_id, { 'path': '/' });
	      _this.cookieFun().cookie('ctoken', _this.ctoken, { 'path': '/' });
	      _this.cookieFun().cookie('utoken', _this.utoken, { 'path': '/' });
	      _this.cookieFun().cookie('version', _this.version, { 'path': '/' });
	      _this.cookieFun().cookie('plat', _this.plat, { 'path': '/' });
	      _this.cookieFun().cookie('network', _this.network, { 'path': '/' });
	    }
	  }
	}; //
	//
	//
	//
	//
	//
	//
	//
	//
	//

/***/ }),

/***/ 45:
/***/ (function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', [_c('html:input', {
	    staticClass: "text",
	    attrs: {
	      "type": "text",
	      "value": _vm.device_id,
	      "placeholder": "请输入deviceId"
	    }
	  }), _vm._v(" "), _c('html:input', {
	    staticClass: "text",
	    attrs: {
	      "type": "text",
	      "value": _vm.ctoken,
	      "placeholder": "请输入ctoken"
	    }
	  }), _vm._v(" "), _c('html:input', {
	    staticClass: "text",
	    attrs: {
	      "type": "text",
	      "value": _vm.utoken,
	      "placeholder": "请输入utoken"
	    }
	  }), _vm._v(" "), _c('html:input', {
	    staticClass: "text",
	    attrs: {
	      "type": "text",
	      "value": _vm.Uid,
	      "placeholder": "请输入Uid"
	    }
	  }), _vm._v(" "), _c('text', {
	    staticClass: "btn",
	    on: {
	      "click": _vm.login
	    }
	  }, [_vm._v("模拟登录")])], 1)
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-2128597b", module.exports)
	  }
	}

/***/ })

});