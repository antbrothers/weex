// { "framework": "Vue" }

/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(33)
	)

	/* script */
	__vue_exports__ = __webpack_require__(34)

	/* template */
	var __vue_template__ = __webpack_require__(35)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "D:\\东财项目集合\\weex\\account\\app\\pages\\product\\test.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-721a7465"
	__vue_options__.style = __vue_options__.style || {}
	__vue_styles__.forEach(function (module) {
	  for (var name in module) {
	    __vue_options__.style[name] = module[name]
	  }
	})
	if (typeof __register_static_styles__ === "function") {
	  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
	}

	module.exports = __vue_exports__
	module.exports.el = 'true'
	new Vue(module.exports)


/***/ }),

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var _weexVueRouter = __webpack_require__(4);

	var _weexVueRouter2 = _interopRequireDefault(_weexVueRouter);

	var _nativeRouter = __webpack_require__(5);

	var _nativeRouter2 = _interopRequireDefault(_nativeRouter);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * Created by linjianxi on 2017/8/17.
	 */
	var modal = weex.requireModule('modal');
	// web端的路由跳转在web-router里定义, 在app.js 里引用
	Vue.use(_weexVueRouter2.default, { routes: _nativeRouter2.default, weex: weex });
	var cookie = '';
	exports.default = {
	  data: function data() {
	    return {
	      rpx: 1,
	      apiDomain: '',
	      android: weex.config.env.platform.toLowerCase() === 'android',
	      ios: weex.config.env.platform.toLowerCase() === 'ios',
	      web: weex.config.env.platform.toLowerCase() === 'web',
	      is_test: true,
	      tool: {}
	    };
	  },
	  created: function created() {
	    var self = this;
	    self.tool = __webpack_require__(6)(self.web, self.ios);
	    if (weex.config.params && weex.config.params.is_test != 'true') {
	      self.apiDomain = 'http://hd.lvb.eastmoney.com';
	    } else {
	      self.apiDomain = 'http://hd-qas.lvb.eastmoney.com';
	    }
	    self.is_test = weex.config.params && weex.config.params.is_test == 'true';
	    if (self.web) {
	      cookie = __webpack_require__(7);
	      __webpack_require__(8)(self.ios, cookie);
	      if (window.origin != 'http://hd-qas.lvb.eastmoney.com') {
	        self.apiDomain = 'http://hd.lvb.eastmoney.com';
	      }
	    }
	  },

	  methods: {
	    /**
	     * 通用的一个 fetch 请求
	     * @param opt
	     * @returns {Promise}
	     */
	    request: function request(opt) {
	      var stream = weex.requireModule('stream');
	      var self = this;
	      var defaultOption = {
	        host: self.apiDomain,
	        type: 'post',
	        proxy: false, // 默认非转发的接口

	        url: '',
	        data: {
	          param: {
	            'ctoken': self.web ? cookie('ctoken') : weex.config.params.ctoken,
	            'utoken': self.web ? cookie('utoken') : weex.config.params.utoken,
	            'device_id': self.web ? cookie('device_id') : weex.config.params.device_id
	          }
	        },
	        async: true,
	        timeout: 20000,
	        dataType: 'json'
	      };
	      var option = self.extendObject(defaultOption, opt);
	      var query = '';
	      var proxStr = '';
	      var proxyParam = {
	        "domain": "",
	        "api": "",
	        "method": "",
	        "param": ""
	      };

	      var proxyParamStr = '';
	      for (var key in option.data) {
	        if (_typeof(option.data[key]) === 'object' && option.data[key] !== null) {
	          for (var m in option.data[key]) {
	            if (option.proxy) {
	              proxStr += m + '=' + option.data[key][m] + '&';
	            } else {
	              query += m + '=' + option.data[key][m] + '&';
	            }
	          }
	        } else {
	          query += key + '=' + option.data[key] + '&';
	        }
	      }
	      // 转发 非json 参数
	      if (option.proxy && (option.data.method == 'post' || option.data.method == 'get')) {
	        proxyParamStr = query + 'param=' + encodeURIComponent(proxStr);
	      } else {
	        // 转发 接受json 参数
	        proxyParam.domain = option.data.domain;
	        proxyParam.api = option.data.api;
	        proxyParam.method = option.data.method;
	        proxyParam.param = encodeURIComponent(JSON.stringify(option.data.param));
	        proxyParamStr = 'domain=' + proxyParam.domain + '&api=' + proxyParam.api + '&method=' + proxyParam.method + '&param=' + proxyParam.param;
	      }
	      return new Promise(function (resolve, reject) {
	        stream.fetch({
	          method: option.type,
	          url: option.proxy ? option.host + option.url + '?' + proxyParamStr : option.host + option.url,
	          type: option.dataType,
	          headers: {
	            'Accept': 'application/json',
	            'Content-Type': 'application/x-www-form-urlencoded'
	          },
	          body: option.proxy ? '' : query
	        }, function (response) {
	          if (response.status == 200) {
	            resolve(response.data);
	          } else {
	            reject(response);
	          }
	        }, function () {});
	      });
	    },


	    /**
	     * 支付宝支付出现了一个404，
	     * 特地为他包装了一个post请求
	     * @param opt
	     * @returns {Promise}
	     */
	    post: function post(opt) {
	      var stream = weex.requireModule('stream');
	      var self = this;
	      var defaultOption = {
	        host: self.apiDomain,
	        type: 'post',
	        proxy: false, // 默认非转发的接口

	        url: '',
	        data: {
	          param: {
	            'ctoken': self.web ? cookie('ctoken') : weex.config.params.ctoken,
	            'utoken': self.web ? cookie('utoken') : weex.config.params.utoken,
	            'device_id': self.web ? cookie('device_id') : weex.config.params.device_id
	          }
	        },
	        async: true,
	        timeout: 20000,
	        dataType: 'json'
	      };
	      var option = self.extendObject(defaultOption, opt);
	      var proxyParam = {
	        "domain": "",
	        "api": "",
	        "method": "",
	        "param": ""
	      };
	      var proxyParamStr = '';
	      proxyParam.domain = option.data.domain;
	      proxyParam.api = option.data.api;
	      proxyParam.method = option.data.method;
	      proxyParam.param = JSON.stringify(option.data.param);
	      proxyParamStr = 'domain=' + proxyParam.domain + '&api=' + proxyParam.api + '&method=' + proxyParam.method + '&param=' + proxyParam.param;

	      return new Promise(function (resolve, reject) {
	        stream.fetch({
	          method: option.type,
	          url: option.host + option.url,
	          type: option.dataType,
	          headers: {
	            'Accept': 'application/json',
	            'Content-Type': 'application/json'
	          },
	          body: JSON.stringify(proxyParam)
	        }, function (response) {
	          if (response.status == 200) {
	            resolve(response.data);
	          } else {
	            reject(response);
	          }
	        }, function () {});
	      });
	    },

	    /**
	     * 路由跳转
	     * @param url
	     * @param routerType h5 weex
	     * @param htmlTpe 页面类型 支付页面 特殊处理 支付页面  htmlType = pay  否则 htmlType = no
	     */
	    jump: function jump(url, routerType, htmlType) {
	      if (!url) {
	        console.warn(url + "为非法的链接");
	        return;
	      }
	      var self = this;
	      //const nativeEvent = weex.requireModule('nativeEvent'); //native端必须扩展这个模块才能正常运行
	      var go = function go(to) {
	        self.$router.push(to);
	      };

	      if (self.web) {
	        if (routerType == 'encode') {
	          this.tool.WEEX_ROUTER(url, routerType, htmlType);
	        } else if (routerType == 'weex') {
	          this.tool.WEEX_ROUTER(url, routerType, htmlType);
	        } else if (url.indexOf('http') === 0) {
	          window.location.href = url;
	        } else {
	          go(url);
	        }
	        /*if (url.indexOf('http') === 0) {
	            window.location.href = url
	        } else if (routerType == 'encode') {
	          this.tool.WEEX_ROUTER(url, routerType, htmlType)
	        } else if (routerType == 'weex') {
	          this.tool.WEEX_ROUTER(url, routerType, htmlType)
	        } else {
	          go(url)
	        }*/
	      }
	      if (!self.web) {
	        this.tool.WEEX_ROUTER(url, routerType, htmlType);
	      }
	    },
	    extendObject: function extendObject(destination, source) {
	      // 对参数进行一次深拷贝
	      for (var property in source) {
	        if (_typeof(source[property]) === "object" && source[property] !== null) {
	          destination[property] = destination[property] || {};
	          for (var key in source[property]) {
	            if (_typeof(source[property][key]) === "object" && source[property][key] !== null) {
	              for (var deepKey in source[property][key]) {
	                destination[property][key][deepKey] = source[property][key][[deepKey]];
	              }
	            } else {
	              destination[property][key] = source[property][key];
	            }
	          }
	        } else {
	          destination[property] = source[property];
	        }
	      }
	      return destination;
	    },


	    /**
	     * 此处写入cookie， 要return 一个对象，
	     * 因为 cookieFun 是一个方法，会优先进入Vue 框架的一个绑定bind()方法 (优先绑定数据 faster than native)
	     * @returns {{cookie: string}}
	     */
	    cookieFun: function cookieFun() {
	      return { cookie: cookie };
	    }
	  }
	};

/***/ }),

/***/ 4:
/***/ (function(module, exports) {

	/**
	 * weex-vue-router v0.0.3
	 * (c) 2017 dongnaebi
	 * @license Apache-2.0
	 */
	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var index$1 = Array.isArray || function (arr) {
	  return Object.prototype.toString.call(arr) == '[object Array]';
	};

	var isarray = index$1;

	/**
	 * Expose `pathToRegexp`.
	 */
	var index = pathToRegexp;
	var parse_1 = parse;
	var compile_1 = compile;
	var tokensToFunction_1 = tokensToFunction;
	var tokensToRegExp_1 = tokensToRegExp;

	/**
	 * The main path matching regexp utility.
	 *
	 * @type {RegExp}
	 */
	var PATH_REGEXP = new RegExp([
	// Match escaped characters that would otherwise appear in future matches.
	// This allows the user to escape special characters that won't transform.
	'(\\\\.)',
	// Match Express-style parameters and un-named parameters with a prefix
	// and optional suffixes. Matches appear as:
	//
	// "/:test(\\d+)?" => ["/", "test", "\d+", undefined, "?", undefined]
	// "/route(\\d+)"  => [undefined, undefined, undefined, "\d+", undefined, undefined]
	// "/*"            => ["/", undefined, undefined, undefined, undefined, "*"]
	'([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))'].join('|'), 'g');

	/**
	 * Parse a string for the raw tokens.
	 *
	 * @param  {string}  str
	 * @param  {Object=} options
	 * @return {!Array}
	 */
	function parse(str, options) {
	  var tokens = [];
	  var key = 0;
	  var index = 0;
	  var path = '';
	  var defaultDelimiter = options && options.delimiter || '/';
	  var res;

	  while ((res = PATH_REGEXP.exec(str)) != null) {
	    var m = res[0];
	    var escaped = res[1];
	    var offset = res.index;
	    path += str.slice(index, offset);
	    index = offset + m.length;

	    // Ignore already escaped sequences.
	    if (escaped) {
	      path += escaped[1];
	      continue;
	    }

	    var next = str[index];
	    var prefix = res[2];
	    var name = res[3];
	    var capture = res[4];
	    var group = res[5];
	    var modifier = res[6];
	    var asterisk = res[7];

	    // Push the current path onto the tokens.
	    if (path) {
	      tokens.push(path);
	      path = '';
	    }

	    var partial = prefix != null && next != null && next !== prefix;
	    var repeat = modifier === '+' || modifier === '*';
	    var optional = modifier === '?' || modifier === '*';
	    var delimiter = res[2] || defaultDelimiter;
	    var pattern = capture || group;

	    tokens.push({
	      name: name || key++,
	      prefix: prefix || '',
	      delimiter: delimiter,
	      optional: optional,
	      repeat: repeat,
	      partial: partial,
	      asterisk: !!asterisk,
	      pattern: pattern ? escapeGroup(pattern) : asterisk ? '.*' : '[^' + escapeString(delimiter) + ']+?'
	    });
	  }

	  // Match any characters still remaining.
	  if (index < str.length) {
	    path += str.substr(index);
	  }

	  // If the path exists, push it onto the end.
	  if (path) {
	    tokens.push(path);
	  }

	  return tokens;
	}

	/**
	 * Compile a string to a template function for the path.
	 *
	 * @param  {string}             str
	 * @param  {Object=}            options
	 * @return {!function(Object=, Object=)}
	 */
	function compile(str, options) {
	  return tokensToFunction(parse(str, options));
	}

	/**
	 * Prettier encoding of URI path segments.
	 *
	 * @param  {string}
	 * @return {string}
	 */
	function encodeURIComponentPretty(str) {
	  return encodeURI(str).replace(/[\/?#]/g, function (c) {
	    return '%' + c.charCodeAt(0).toString(16).toUpperCase();
	  });
	}

	/**
	 * Encode the asterisk parameter. Similar to `pretty`, but allows slashes.
	 *
	 * @param  {string}
	 * @return {string}
	 */
	function encodeAsterisk(str) {
	  return encodeURI(str).replace(/[?#]/g, function (c) {
	    return '%' + c.charCodeAt(0).toString(16).toUpperCase();
	  });
	}

	/**
	 * Expose a method for transforming tokens into the path function.
	 */
	function tokensToFunction(tokens) {
	  // Compile all the tokens into regexps.
	  var matches = new Array(tokens.length);

	  // Compile all the patterns before compilation.
	  for (var i = 0; i < tokens.length; i++) {
	    if (_typeof(tokens[i]) === 'object') {
	      matches[i] = new RegExp('^(?:' + tokens[i].pattern + ')$');
	    }
	  }

	  return function (obj, opts) {
	    var path = '';
	    var data = obj || {};
	    var options = opts || {};
	    var encode = options.pretty ? encodeURIComponentPretty : encodeURIComponent;

	    for (var i = 0; i < tokens.length; i++) {
	      var token = tokens[i];

	      if (typeof token === 'string') {
	        path += token;

	        continue;
	      }

	      var value = data[token.name];
	      var segment;

	      if (value == null) {
	        if (token.optional) {
	          // Prepend partial segment prefixes.
	          if (token.partial) {
	            path += token.prefix;
	          }

	          continue;
	        } else {
	          throw new TypeError('Expected "' + token.name + '" to be defined');
	        }
	      }

	      if (isarray(value)) {
	        if (!token.repeat) {
	          throw new TypeError('Expected "' + token.name + '" to not repeat, but received `' + JSON.stringify(value) + '`');
	        }

	        if (value.length === 0) {
	          if (token.optional) {
	            continue;
	          } else {
	            throw new TypeError('Expected "' + token.name + '" to not be empty');
	          }
	        }

	        for (var j = 0; j < value.length; j++) {
	          segment = encode(value[j]);

	          if (!matches[i].test(segment)) {
	            throw new TypeError('Expected all "' + token.name + '" to match "' + token.pattern + '", but received `' + JSON.stringify(segment) + '`');
	          }

	          path += (j === 0 ? token.prefix : token.delimiter) + segment;
	        }

	        continue;
	      }

	      segment = token.asterisk ? encodeAsterisk(value) : encode(value);

	      if (!matches[i].test(segment)) {
	        throw new TypeError('Expected "' + token.name + '" to match "' + token.pattern + '", but received "' + segment + '"');
	      }

	      path += token.prefix + segment;
	    }

	    return path;
	  };
	}

	/**
	 * Escape a regular expression string.
	 *
	 * @param  {string} str
	 * @return {string}
	 */
	function escapeString(str) {
	  return str.replace(/([.+*?=^!:${}()[\]|\/\\])/g, '\\$1');
	}

	/**
	 * Escape the capturing group by escaping special characters and meaning.
	 *
	 * @param  {string} group
	 * @return {string}
	 */
	function escapeGroup(group) {
	  return group.replace(/([=!:$\/()])/g, '\\$1');
	}

	/**
	 * Attach the keys as a property of the regexp.
	 *
	 * @param  {!RegExp} re
	 * @param  {Array}   keys
	 * @return {!RegExp}
	 */
	function attachKeys(re, keys) {
	  re.keys = keys;
	  return re;
	}

	/**
	 * Get the flags for a regexp from the options.
	 *
	 * @param  {Object} options
	 * @return {string}
	 */
	function flags(options) {
	  return options.sensitive ? '' : 'i';
	}

	/**
	 * Pull out keys from a regexp.
	 *
	 * @param  {!RegExp} path
	 * @param  {!Array}  keys
	 * @return {!RegExp}
	 */
	function regexpToRegexp(path, keys) {
	  // Use a negative lookahead to match only capturing groups.
	  var groups = path.source.match(/\((?!\?)/g);

	  if (groups) {
	    for (var i = 0; i < groups.length; i++) {
	      keys.push({
	        name: i,
	        prefix: null,
	        delimiter: null,
	        optional: false,
	        repeat: false,
	        partial: false,
	        asterisk: false,
	        pattern: null
	      });
	    }
	  }

	  return attachKeys(path, keys);
	}

	/**
	 * Transform an array into a regexp.
	 *
	 * @param  {!Array}  path
	 * @param  {Array}   keys
	 * @param  {!Object} options
	 * @return {!RegExp}
	 */
	function arrayToRegexp(path, keys, options) {
	  var parts = [];

	  for (var i = 0; i < path.length; i++) {
	    parts.push(pathToRegexp(path[i], keys, options).source);
	  }

	  var regexp = new RegExp('(?:' + parts.join('|') + ')', flags(options));

	  return attachKeys(regexp, keys);
	}

	/**
	 * Create a path regexp from string input.
	 *
	 * @param  {string}  path
	 * @param  {!Array}  keys
	 * @param  {!Object} options
	 * @return {!RegExp}
	 */
	function stringToRegexp(path, keys, options) {
	  return tokensToRegExp(parse(path, options), keys, options);
	}

	/**
	 * Expose a function for taking tokens and returning a RegExp.
	 *
	 * @param  {!Array}          tokens
	 * @param  {(Array|Object)=} keys
	 * @param  {Object=}         options
	 * @return {!RegExp}
	 */
	function tokensToRegExp(tokens, keys, options) {
	  if (!isarray(keys)) {
	    options = /** @type {!Object} */keys || options;
	    keys = [];
	  }

	  options = options || {};

	  var strict = options.strict;
	  var end = options.end !== false;
	  var route = '';

	  // Iterate over the tokens and create our regexp string.
	  for (var i = 0; i < tokens.length; i++) {
	    var token = tokens[i];

	    if (typeof token === 'string') {
	      route += escapeString(token);
	    } else {
	      var prefix = escapeString(token.prefix);
	      var capture = '(?:' + token.pattern + ')';

	      keys.push(token);

	      if (token.repeat) {
	        capture += '(?:' + prefix + capture + ')*';
	      }

	      if (token.optional) {
	        if (!token.partial) {
	          capture = '(?:' + prefix + '(' + capture + '))?';
	        } else {
	          capture = prefix + '(' + capture + ')?';
	        }
	      } else {
	        capture = prefix + '(' + capture + ')';
	      }

	      route += capture;
	    }
	  }

	  var delimiter = escapeString(options.delimiter || '/');
	  var endsWithDelimiter = route.slice(-delimiter.length) === delimiter;

	  // In non-strict mode we allow a slash at the end of match. If the path to
	  // match already ends with a slash, we remove it for consistency. The slash
	  // is valid at the end of a path match, not in the middle. This is important
	  // in non-ending mode, where "/test/" shouldn't match "/test//route".
	  if (!strict) {
	    route = (endsWithDelimiter ? route.slice(0, -delimiter.length) : route) + '(?:' + delimiter + '(?=$))?';
	  }

	  if (end) {
	    route += '$';
	  } else {
	    // In non-ending mode, we need the capturing groups to match as much as
	    // possible by using a positive lookahead to the end or next path segment.
	    route += strict && endsWithDelimiter ? '' : '(?=' + delimiter + '|$)';
	  }

	  return attachKeys(new RegExp('^' + route, flags(options)), keys);
	}

	/**
	 * Normalize the given path string, returning a regular expression.
	 *
	 * An empty array can be passed in for the keys, which will hold the
	 * placeholder key descriptions. For example, using `/user/:id`, `keys` will
	 * contain `[{ name: 'id', delimiter: '/', optional: false, repeat: false }]`.
	 *
	 * @param  {(string|RegExp|Array)} path
	 * @param  {(Array|Object)=}       keys
	 * @param  {Object=}               options
	 * @return {!RegExp}
	 */
	function pathToRegexp(path, keys, options) {
	  if (!isarray(keys)) {
	    options = /** @type {!Object} */keys || options;
	    keys = [];
	  }

	  options = options || {};

	  if (path instanceof RegExp) {
	    return regexpToRegexp(path, /** @type {!Array} */keys);
	  }

	  if (isarray(path)) {
	    return arrayToRegexp( /** @type {!Array} */path, /** @type {!Array} */keys, options);
	  }

	  return stringToRegexp( /** @type {string} */path, /** @type {!Array} */keys, options);
	}

	index.parse = parse_1;
	index.compile = compile_1;
	index.tokensToFunction = tokensToFunction_1;
	index.tokensToRegExp = tokensToRegExp_1;

	/**
	 * Created by ebi on 2017/2/14.
	 */
	var weexVueRouter = {
	  install: function install(Vue, ref) {
	    var routes = ref.routes;
	    var weex = ref.weex;

	    var platform = weex.config.env ? weex.config.env.platform : weex.config.platform;
	    if (platform.toLowerCase() == 'web') {
	      return;
	    }
	    var navigator = weex.requireModule('navigator');
	    var bundleUrl = weex.config.bundleUrl;
	    var route = bundleToPath(bundleUrl, routes);
	    Object.defineProperty(Vue.prototype, "$router", {
	      value: {
	        push: function push(url) {
	          var bundle = pathToBundle(url, routes);
	          if (navigator) {
	            console.log(bundle);
	            navigator.push({
	              'url': bundle,
	              'animated': 'true'
	            }, function () {
	              console.log('skip complete');
	            });
	          }
	        },
	        back: function back() {
	          if (navigator) {
	            navigator.pop();
	          }
	        }
	      },
	      configurable: false
	    });
	    Object.defineProperty(Vue.prototype, '$route', {
	      configurable: false,
	      value: {
	        path: route.path,
	        params: route.params,
	        query: route.query,
	        hash: route.hash,
	        fullPath: route.fullPath,
	        matched: route.matched,
	        name: route.name
	      }
	    });
	  }
	};
	function pathToBundle(url, routes) {
	  /* url='/list/2-1?from=1#2'
	   * r={path:'/list/:cid-:id',bundle:'/product/list.js'}
	   * */
	  if (url.indexOf('/') != 0) {
	    console.error("the url must begin with '/'");
	    return '';
	  }

	  //copy from vue-router
	  var encodeReserveRE = /[!'()*]/g;
	  var encodeReserveReplacer = function encodeReserveReplacer(c) {
	    return '%' + c.charCodeAt(0).toString(16);
	  };
	  var encode = function encode(str) {
	    return encodeURIComponent(str).replace(encodeReserveRE, encodeReserveReplacer).replace(/%2C/g, ',');
	  };

	  /*find out the rule*/
	  var matchRule = {};
	  routes.forEach(function (r) {
	    var re = index(r.path);
	    var match = re.exec(url);
	    if (match != null) {
	      matchRule = r;
	    }
	  });

	  /*get the key and value*/
	  var keys = [];
	  var pathReg = index(matchRule.path, keys);
	  var values = pathReg.exec(url);
	  var lastValue = values[values.length - 1]; //save the last value to find query and hash
	  values[values.length - 1] = lastValue.split(/\?|\#/)[0]; //the true value

	  /*parse params to key/value object*/
	  var params = {};
	  if (keys.length > 0) {
	    keys.forEach(function (key, i) {
	      params[key.name] = values[i + 1];
	    });
	  }

	  /*get query and hash*/
	  var queryIndex = lastValue.indexOf('?');
	  var hashIndex = lastValue.indexOf('#');
	  if (queryIndex > 0 && hashIndex > 0 && queryIndex > hashIndex) {
	    console.error("Could not set '#' behind '?'");
	    return '';
	  }
	  var queryStr = queryIndex > 0 ? lastValue.substring(queryIndex + 1, hashIndex > 0 ? hashIndex : lastValue.length) : "";
	  var hashStr = hashIndex > 0 ? lastValue.substring(hashIndex, lastValue.length) : "";
	  var query = getParams(queryStr); //{from:1}

	  /*add the bundleUrl's params and hash*/
	  var componentPath = matchRule.component;
	  for (var k in params) {
	    componentPath += (componentPath.indexOf('?') > 0 ? '&' : '?') + k + '=' + encode(params[k]);
	  }
	  for (var q in query) {
	    componentPath += (componentPath.indexOf('?') > 0 ? '&' : '?') + q + '=' + encode(query[q]);
	  }
	  componentPath += hashStr;
	  return componentPath;
	}
	function bundleToPath(url, routes) {
	  //url='domain/product/list.js?cid=2&id=1&from=1'
	  //matchRule={path:'/list/:cid-:id',component:'domain/product/list.js'}
	  var route = {
	    params: null,
	    query: null,
	    hash: null,
	    path: null,
	    fullPath: null,
	    matched: null,
	    name: null
	  };
	  var jsBundle = url.split(/\?|\#/)[0];
	  /*find out the rule*/
	  var matchRule = null;
	  routes.forEach(function (r) {
	    r.component == jsBundle && (matchRule = r);
	    //http://192.168.253.124:8080/dist/product/list.js
	  });
	  if (!matchRule) {
	    console.error("your component must be like '" + jsBundle + "',can not find it in routes,please check up");
	    return route;
	  }

	  /*use pathToRegexp*/
	  var keys = [];
	  index(matchRule.path, keys);

	  /*get query and hash*/
	  var queryIndex = url.indexOf('?');
	  var hashIndex = url.indexOf('#');
	  var queryStr = queryIndex > 0 ? url.substring(queryIndex + 1, hashIndex > 0 ? hashIndex : url.length) : "";
	  route.hash = hashIndex > 0 ? url.substring(hashIndex, url.length) : "";

	  var allQuery = getParams(queryStr); //{cid:2,id:1,from:1}

	  var params = {},
	      //{cid:2,id:1}
	  query = {},
	      //{from:1}
	  paramsKey = []; //['cid','id']
	  if (keys.length > 0) {
	    paramsKey = keys.map(function (key) {
	      return key.name;
	    });
	  }
	  for (var q in allQuery) {
	    allQuery[q] = decodeURIComponent(allQuery[q]);
	    paramsKey.indexOf(q) < 0 ? query[q] = allQuery[q] : params[q] = allQuery[q];
	  }
	  route.params = params;
	  route.query = query;

	  //path and fullPath
	  var path = matchRule.path;
	  for (var p in params) {
	    path = path.replace(':' + p, params[p]);
	  }
	  route.path = path;
	  var queryArr = [];
	  for (var i in query) {
	    queryArr.push(i + '=' + query[i]);
	  }
	  route.fullPath = path + '?' + queryArr.join('&') + route.hash;
	  route.matched = matchRule;
	  route.name = matchRule.name;

	  return route;
	}
	function getParams(str) {
	  var temp = {};
	  if (!str) {
	    return temp;
	  }
	  if (str.indexOf('=') < 0) {
	    temp[str] = "";
	    return temp;
	  }
	  var arr = str.split('&');
	  arr.forEach(function (item) {
	    var w = item.match(/([^=]*)=(.*)/);
	    temp[w[1]] = w[2];
	  });
	  return temp;
	}

	module.exports = weexVueRouter;

/***/ }),

/***/ 5:
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * Created by linjianxi on 2017/8/17.
	 */
	var basePath = 'http://192.168.31.174:8080/dist/account';
	exports.default = [{ path: '/', component: basePath + '/index.js' }, { path: '/list/:id', component: basePath + '/product/list.js' }, { path: '/product/:id', component: basePath + '/product/detail.js' }, { path: '/test', component: basePath + '/product/test.js' }, { path: '/pay', component: basePath + '/product/pay.js' }, { path: '/suject', component: basePath + '/product/subject.js' }];

/***/ }),

/***/ 6:
/***/ (function(module, exports) {

	'use strict';

	/**
	 * Created by linjianxi on 2017/8/22.
	 */

	var event = weex.requireModule('event');
	var modal = weex.requireModule('modal');
	function eventOpenWeex(param) {
	  var params = param;
	  var bytes = params.split('params=');
	  bytes[1] = base64encode(encodeURIComponent(bytes[1]));
	  var paramsEncoded = bytes[0] + 'params=' + bytes[1];
	  console.log(paramsEncoded);
	  event.openSpecifiedPage(paramsEncoded);
	}
	function eventOpenH5(s, ios) {

	  if (ios) {
	    //IOS
	    var iosstr = '{"callbackname":"callbackOpen","appname":"haitunlive://","scheme":"' + s + '"}';
	    window.location = "emH5toOpenApp:" + iosstr;
	  } else {
	    //Android
	    var bytes = s.split('params=');
	    bytes[1] = encodeURIComponent(base64encode(bytes[1]));
	    var androidstr = '{"callbackname":"callbackOpen","appname":"' + 'com.eastmoney.haitunlive' + '","scheme":"' + bytes[0] + 'params=' + bytes[1] + '","isLocal":"' + true + '"}';
	    window.eastmoney.emH5toOpenLocalPage(androidstr);
	  }
	}
	function base64encode(str) {
	  var base64EncodeChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
	  var base64DecodeChars = new Array(-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 62, -1, -1, -1, 63, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, -1, -1, -1, -1, -1, -1, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, -1, -1, -1, -1, -1, -1, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, -1, -1, -1, -1, -1);

	  var out, i, len;
	  var c1, c2, c3;
	  len = str.length;
	  i = 0;
	  out = "";
	  while (i < len) {
	    c1 = str.charCodeAt(i++) & 0xff;
	    if (i == len) {
	      out += base64EncodeChars.charAt(c1 >> 2);
	      out += base64EncodeChars.charAt((c1 & 0x3) << 4);
	      out += "==";
	      break;
	    }
	    c2 = str.charCodeAt(i++);
	    if (i == len) {
	      out += base64EncodeChars.charAt(c1 >> 2);
	      out += base64EncodeChars.charAt((c1 & 0x3) << 4 | (c2 & 0xF0) >> 4);
	      out += base64EncodeChars.charAt((c2 & 0xF) << 2);
	      out += "=";
	      break;
	    }
	    c3 = str.charCodeAt(i++);
	    out += base64EncodeChars.charAt(c1 >> 2);
	    out += base64EncodeChars.charAt((c1 & 0x3) << 4 | (c2 & 0xF0) >> 4);
	    out += base64EncodeChars.charAt((c2 & 0xF) << 2 | (c3 & 0xC0) >> 6);
	    out += base64EncodeChars.charAt(c3 & 0x3F);
	  }
	  return out;
	}
	function callbackOpen(returnValue) {
	  var str = JSON.parse(returnValue);
	  if (str.code != "0") {
	    window.location = "http://zhibo.eastmoney.com/";
	  }
	}
	module.exports = function (web, ios) {
	  return {
	    SET_TITLE: function SET_TITLE(txt) {
	      var strCB = '{"title1":"' + txt + '"}';
	      if (web) {
	        if (ios) {
	          window.location = 'emH5Title:' + strCB;
	        } else {
	          if (window.eastmoney) {
	            window.eastmoney.emH5Title(strCB);
	          }
	        }
	      } else {
	        event.emH5Title(strCB);
	      }
	    },
	    /**
	     * weex 跳转
	     * @param to
	     * @param routerType  'weex' 跳weex ； 'h5' 跳h5 ；'encode' 编过码的地址
	     * @param htmlType 页面类型 支付页面 特殊处理
	     * @constructor
	     */
	    WEEX_ROUTER: function WEEX_ROUTER(to, routerType, htmlType) {
	      var parm = '';
	      if (routerType == 'weex') {
	        var destClass = htmlType == 'pay' ? 'pay' : 'wxh5';
	        parm = 'emlive://haitunlive.com/first?params={"destClass":"' + destClass + '","segueParams":{"load_js_path": "' + to + '","title":"","pid":"{pid}"}}';
	        if (web) {
	          eventOpenH5(parm, ios);
	        } else {
	          eventOpenWeex(parm);
	        }
	      } else if (routerType == 'h5') {
	        parm = 'emlive://haitunlive.com/first?params={"destClass":"h5","segueParams":{"url":"' + to + '","isShowTitle":false}}';
	        eventOpenWeex(parm);
	      } else {
	        if (web) {
	          eventOpenH5(to, ios);
	        } else {
	          event.openSpecifiedPage(to);
	        }
	      }
	    },
	    OPOEN_WEEX_NATIVE: function OPOEN_WEEX_NATIVE(url) {
	      if (web) {
	        eventOpenH5(url, ios);
	      } else {
	        eventOpenWeex(url);
	      }
	    }
	  };
	};

/***/ }),

/***/ 7:
/***/ (function(module, exports) {

	'use strict';

	/**
	 * Set or get cookie `name` with `value` and `options` object.
	 * https://github.com/component/cookie
	 * @param {String} name
	 * @param {String} value
	 * @param {Object} options
	 * @return {Mixed}
	 * @api public
	 */

	/* eslint-disable */
	module.exports = function (name, value, options) {
	    switch (arguments.length) {
	        case 3:
	        case 2:
	            return set(name, value, options);
	        case 1:
	            return get(name);
	        default:
	            return all();
	    }
	};

	/**
	 * Set cookie `name` to `value`.
	 *
	 * @param {String} name
	 * @param {String} value
	 * @param {Object} options
	 * @api private
	 */

	function set(name, value, options) {
	    options = options || {};
	    var str = encode(name) + '=' + encode(value);

	    if (null == value) options.maxage = -1;

	    if (options.maxage) {
	        options.expires = new Date(+new Date() + options.maxage);
	    }
	    if (options.path) str += '; path=' + options.path;
	    if (options.domain) str += '; domain=' + options.domain;
	    if (options.expires) str += '; expires=' + options.expires.toUTCString();
	    if (options.secure) str += '; secure';

	    document.cookie = str;
	}

	/**
	 * Return all cookies.
	 *
	 * @return {Object}
	 * @api private
	 */

	function all() {
	    var str;
	    try {
	        str = document.cookie;
	    } catch (err) {
	        if (typeof console !== 'undefined' && typeof console.error === 'function') {
	            console.error(err.stack || err);
	        }
	        return {};
	    }
	    return parse(str);
	}

	/**
	 * Get cookie `name`.
	 *
	 * @param {String} name
	 * @return {String}
	 * @api private
	 */

	function get(name) {
	    return all()[name];
	}

	/**
	 * Parse cookie `str`.
	 *
	 * @param {String} str
	 * @return {Object}
	 * @api private
	 */

	function parse(str) {
	    var obj = {};
	    var pairs = str.split(/ *; */);
	    var pair;
	    if ('' == pairs[0]) return obj;
	    for (var i = 0; i < pairs.length; ++i) {
	        pair = pairs[i].split('=');
	        obj[decode(pair[0])] = decode(pair[1]);
	    }
	    return obj;
	}

	/**
	 * Encode.
	 */

	function encode(value) {
	    try {
	        return encodeURIComponent(value);
	    } catch (e) {}
	}

	/**
	 * Decode.
	 */

	function decode(value) {
	    try {
	        return decodeURIComponent(value);
	    } catch (e) {}
	}

/***/ }),

/***/ 8:
/***/ (function(module, exports) {

	'use strict';

	/**
	 * Created by linjianxi on 2017/8/21.
	 */
	module.exports = function (ios, cookie) {
	  var LOGININFO = 'GET_LOGIN_INFO' + Math.floor(Math.random() * 1000000);
	  var LOGIN_INFO_CB = 'LOGIN_INFO_CB' + Math.floor(Math.random() * 1000000);
	  var DEVICE_INFO = 'DEVICE_INFO' + Math.floor(Math.random() * 1000000);
	  var DEVICE_INFO_CB = 'DEVICE_INFO_CB' + Math.floor(Math.random() * 1000000);

	  window[LOGININFO] = function (str) {
	    var strCB = '{"callbackname":"' + str + '"}';
	    try {
	      if (ios) {
	        callAppFun('emH5GetLoginStatus:' + strCB);
	      } else {
	        if (window.eastmoney) {
	          window.eastmoney.emH5GetLoginStatus(strCB);
	        }
	      }
	    } catch (e) {}
	  };
	  window[LOGIN_INFO_CB] = function (json) {
	    if (typeof json === 'string') {
	      var data = JSON.parse(json);
	      cookie('uid', data.data.uid, { 'path': '/' });
	      cookie('ctoken', data.data.ct, { 'path': '/' });
	      cookie('utoken', data.data.ut, { 'path': '/' });
	      window[DEVICE_INFO]('' + DEVICE_INFO_CB);
	    }
	  };
	  window[DEVICE_INFO] = function (str) {
	    var strCB = '{"callbackname":"' + str + '"}';
	    try {
	      if (ios) {
	        callAppFun('getDeviceInfo:' + strCB);
	      } else {
	        if (window.eastmoney) {
	          window.eastmoney.getDeviceInfo(strCB);
	        }
	      }
	    } catch (e) {}
	  };
	  window[DEVICE_INFO_CB] = function (json) {
	    if (typeof json === 'string') {
	      var data = JSON.parse(json);
	      cookie('device_id', data.data.UniqueID, { 'path': '/' });
	    }
	  };
	  window[LOGININFO]('' + LOGIN_INFO_CB);

	  function callAppFun(url) {
	    var iframe = document.createElement('iframe');
	    iframe.src = url;
	    iframe.width = 0;
	    iframe.border = 0;
	    iframe.style.display = 'none';
	    document.body.appendChild(iframe);
	    setTimeout(function () {
	      iframe.remove();
	    }, 500);
	  }
	};

/***/ }),

/***/ 33:
/***/ (function(module, exports) {

	module.exports = {
	  "text": {
	    "height": 80,
	    "marginTop": 20,
	    "marginBottom": 20,
	    "marginLeft": 10,
	    "marginRight": 10,
	    "borderBottomLeftRadius": 5,
	    "borderBottomRightRadius": 5,
	    "borderTopLeftRadius": 5,
	    "borderTopRightRadius": 5
	  },
	  "btn": {
	    "width": 750,
	    "height": 100,
	    "borderBottomLeftRadius": 5,
	    "borderBottomRightRadius": 5,
	    "borderTopLeftRadius": 5,
	    "borderTopRightRadius": 5,
	    "textAlign": "center",
	    "backgroundColor": "#8e8e8e",
	    "color": "#FFFFFF",
	    "lineHeight": 100
	  }
	}

/***/ }),

/***/ 34:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _mixins = __webpack_require__(3);

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

/***/ 35:
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', [_c('html:input', {
	    staticClass: ["text"],
	    attrs: {
	      "type": "text",
	      "value": _vm.device_id,
	      "placeholder": "请输入deviceId"
	    }
	  }), _c('html:input', {
	    staticClass: ["text"],
	    attrs: {
	      "type": "text",
	      "value": _vm.ctoken,
	      "placeholder": "请输入ctoken"
	    }
	  }), _c('html:input', {
	    staticClass: ["text"],
	    attrs: {
	      "type": "text",
	      "value": _vm.utoken,
	      "placeholder": "请输入utoken"
	    }
	  }), _c('html:input', {
	    staticClass: ["text"],
	    attrs: {
	      "type": "text",
	      "value": _vm.Uid,
	      "placeholder": "请输入Uid"
	    }
	  }), _c('text', {
	    staticClass: ["btn"],
	    on: {
	      "click": _vm.login
	    }
	  }, [_vm._v("模拟登录")])], 1)
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ })

/******/ });