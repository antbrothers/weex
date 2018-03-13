/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	var parentJsonpFunction = window["webpackJsonp"];
/******/ 	window["webpackJsonp"] = function webpackJsonpCallback(chunkIds, moreModules) {
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, callbacks = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId])
/******/ 				callbacks.push.apply(callbacks, installedChunks[chunkId]);
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(chunkIds, moreModules);
/******/ 		while(callbacks.length)
/******/ 			callbacks.shift().call(null, __webpack_require__);

/******/ 	};

/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// object to store loaded and loading chunks
/******/ 	// "0" means "already loaded"
/******/ 	// Array means "loading", array contains callbacks
/******/ 	var installedChunks = {
/******/ 		0:0
/******/ 	};

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

/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId, callback) {
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] === 0)
/******/ 			return callback.call(null, __webpack_require__);

/******/ 		// an array means "currently loading".
/******/ 		if(installedChunks[chunkId] !== undefined) {
/******/ 			installedChunks[chunkId].push(callback);
/******/ 		} else {
/******/ 			// start chunk loading
/******/ 			installedChunks[chunkId] = [callback];
/******/ 			var head = document.getElementsByTagName('head')[0];
/******/ 			var script = document.createElement('script');
/******/ 			script.type = 'text/javascript';
/******/ 			script.charset = 'utf-8';
/******/ 			script.async = true;

/******/ 			script.src = __webpack_require__.p + "" + chunkId + "." + ({}[chunkId]||chunkId) + ".js";
/******/ 			head.appendChild(script);
/******/ 		}
/******/ 	};

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
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _vueRouter = __webpack_require__(2);

	var _vueRouter2 = _interopRequireDefault(_vueRouter);

	var _webRouter = __webpack_require__(4);

	var _webRouter2 = _interopRequireDefault(_webRouter);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	Vue.use(_vueRouter2.default); /**
	                               * Created by linjianxi on 2017/8/17.
	                               */

	var router = new _vueRouter2.default({
	  // mode: 'hash'
	  routes: _webRouter2.default
	});

	new Vue({
	  el: '#root',
	  router: router
	});

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	  * vue-router v2.7.0
	  * (c) 2017 Evan You
	  * @license MIT
	  */
	'use strict';

	/*  */

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	function assert(condition, message) {
	  if (!condition) {
	    throw new Error("[vue-router] " + message);
	  }
	}

	function warn(condition, message) {
	  if (process.env.NODE_ENV !== 'production' && !condition) {
	    typeof console !== 'undefined' && console.warn("[vue-router] " + message);
	  }
	}

	function isError(err) {
	  return Object.prototype.toString.call(err).indexOf('Error') > -1;
	}

	var View = {
	  name: 'router-view',
	  functional: true,
	  props: {
	    name: {
	      type: String,
	      default: 'default'
	    }
	  },
	  render: function render(_, ref) {
	    var props = ref.props;
	    var children = ref.children;
	    var parent = ref.parent;
	    var data = ref.data;

	    data.routerView = true;

	    // directly use parent context's createElement() function
	    // so that components rendered by router-view can resolve named slots
	    var h = parent.$createElement;
	    var name = props.name;
	    var route = parent.$route;
	    var cache = parent._routerViewCache || (parent._routerViewCache = {});

	    // determine current view depth, also check to see if the tree
	    // has been toggled inactive but kept-alive.
	    var depth = 0;
	    var inactive = false;
	    while (parent && parent._routerRoot !== parent) {
	      if (parent.$vnode && parent.$vnode.data.routerView) {
	        depth++;
	      }
	      if (parent._inactive) {
	        inactive = true;
	      }
	      parent = parent.$parent;
	    }
	    data.routerViewDepth = depth;

	    // render previous view if the tree is inactive and kept-alive
	    if (inactive) {
	      return h(cache[name], data, children);
	    }

	    var matched = route.matched[depth];
	    // render empty node if no matched route
	    if (!matched) {
	      cache[name] = null;
	      return h();
	    }

	    var component = cache[name] = matched.components[name];

	    // attach instance registration hook
	    // this will be called in the instance's injected lifecycle hooks
	    data.registerRouteInstance = function (vm, val) {
	      // val could be undefined for unregistration
	      var current = matched.instances[name];
	      if (val && current !== vm || !val && current === vm) {
	        matched.instances[name] = val;
	      }
	    }

	    // also regiseter instance in prepatch hook
	    // in case the same component instance is reused across different routes
	    ;(data.hook || (data.hook = {})).prepatch = function (_, vnode) {
	      matched.instances[name] = vnode.componentInstance;
	    };

	    // resolve props
	    data.props = resolveProps(route, matched.props && matched.props[name]);

	    return h(component, data, children);
	  }
	};

	function resolveProps(route, config) {
	  switch (typeof config === 'undefined' ? 'undefined' : _typeof(config)) {
	    case 'undefined':
	      return;
	    case 'object':
	      return config;
	    case 'function':
	      return config(route);
	    case 'boolean':
	      return config ? route.params : undefined;
	    default:
	      if (process.env.NODE_ENV !== 'production') {
	        warn(false, "props in \"" + route.path + "\" is a " + (typeof config === 'undefined' ? 'undefined' : _typeof(config)) + ", " + "expecting an object, function or boolean.");
	      }
	  }
	}

	/*  */

	var encodeReserveRE = /[!'()*]/g;
	var encodeReserveReplacer = function encodeReserveReplacer(c) {
	  return '%' + c.charCodeAt(0).toString(16);
	};
	var commaRE = /%2C/g;

	// fixed encodeURIComponent which is more conformant to RFC3986:
	// - escapes [!'()*]
	// - preserve commas
	var encode = function encode(str) {
	  return encodeURIComponent(str).replace(encodeReserveRE, encodeReserveReplacer).replace(commaRE, ',');
	};

	var decode = decodeURIComponent;

	function resolveQuery(query, extraQuery, _parseQuery) {
	  if (extraQuery === void 0) extraQuery = {};

	  var parse = _parseQuery || parseQuery;
	  var parsedQuery;
	  try {
	    parsedQuery = parse(query || '');
	  } catch (e) {
	    process.env.NODE_ENV !== 'production' && warn(false, e.message);
	    parsedQuery = {};
	  }
	  for (var key in extraQuery) {
	    var val = extraQuery[key];
	    parsedQuery[key] = Array.isArray(val) ? val.slice() : val;
	  }
	  return parsedQuery;
	}

	function parseQuery(query) {
	  var res = {};

	  query = query.trim().replace(/^(\?|#|&)/, '');

	  if (!query) {
	    return res;
	  }

	  query.split('&').forEach(function (param) {
	    var parts = param.replace(/\+/g, ' ').split('=');
	    var key = decode(parts.shift());
	    var val = parts.length > 0 ? decode(parts.join('=')) : null;

	    if (res[key] === undefined) {
	      res[key] = val;
	    } else if (Array.isArray(res[key])) {
	      res[key].push(val);
	    } else {
	      res[key] = [res[key], val];
	    }
	  });

	  return res;
	}

	function stringifyQuery(obj) {
	  var res = obj ? Object.keys(obj).map(function (key) {
	    var val = obj[key];

	    if (val === undefined) {
	      return '';
	    }

	    if (val === null) {
	      return encode(key);
	    }

	    if (Array.isArray(val)) {
	      var result = [];
	      val.forEach(function (val2) {
	        if (val2 === undefined) {
	          return;
	        }
	        if (val2 === null) {
	          result.push(encode(key));
	        } else {
	          result.push(encode(key) + '=' + encode(val2));
	        }
	      });
	      return result.join('&');
	    }

	    return encode(key) + '=' + encode(val);
	  }).filter(function (x) {
	    return x.length > 0;
	  }).join('&') : null;
	  return res ? "?" + res : '';
	}

	/*  */

	var trailingSlashRE = /\/?$/;

	function createRoute(record, location, redirectedFrom, router) {
	  var stringifyQuery$$1 = router && router.options.stringifyQuery;
	  var route = {
	    name: location.name || record && record.name,
	    meta: record && record.meta || {},
	    path: location.path || '/',
	    hash: location.hash || '',
	    query: location.query || {},
	    params: location.params || {},
	    fullPath: getFullPath(location, stringifyQuery$$1),
	    matched: record ? formatMatch(record) : []
	  };
	  if (redirectedFrom) {
	    route.redirectedFrom = getFullPath(redirectedFrom, stringifyQuery$$1);
	  }
	  return Object.freeze(route);
	}

	// the starting route that represents the initial state
	var START = createRoute(null, {
	  path: '/'
	});

	function formatMatch(record) {
	  var res = [];
	  while (record) {
	    res.unshift(record);
	    record = record.parent;
	  }
	  return res;
	}

	function getFullPath(ref, _stringifyQuery) {
	  var path = ref.path;
	  var query = ref.query;if (query === void 0) query = {};
	  var hash = ref.hash;if (hash === void 0) hash = '';

	  var stringify = _stringifyQuery || stringifyQuery;
	  return (path || '/') + stringify(query) + hash;
	}

	function isSameRoute(a, b) {
	  if (b === START) {
	    return a === b;
	  } else if (!b) {
	    return false;
	  } else if (a.path && b.path) {
	    return a.path.replace(trailingSlashRE, '') === b.path.replace(trailingSlashRE, '') && a.hash === b.hash && isObjectEqual(a.query, b.query);
	  } else if (a.name && b.name) {
	    return a.name === b.name && a.hash === b.hash && isObjectEqual(a.query, b.query) && isObjectEqual(a.params, b.params);
	  } else {
	    return false;
	  }
	}

	function isObjectEqual(a, b) {
	  if (a === void 0) a = {};
	  if (b === void 0) b = {};

	  var aKeys = Object.keys(a);
	  var bKeys = Object.keys(b);
	  if (aKeys.length !== bKeys.length) {
	    return false;
	  }
	  return aKeys.every(function (key) {
	    var aVal = a[key];
	    var bVal = b[key];
	    // check nested equality
	    if ((typeof aVal === 'undefined' ? 'undefined' : _typeof(aVal)) === 'object' && (typeof bVal === 'undefined' ? 'undefined' : _typeof(bVal)) === 'object') {
	      return isObjectEqual(aVal, bVal);
	    }
	    return String(aVal) === String(bVal);
	  });
	}

	function isIncludedRoute(current, target) {
	  return current.path.replace(trailingSlashRE, '/').indexOf(target.path.replace(trailingSlashRE, '/')) === 0 && (!target.hash || current.hash === target.hash) && queryIncludes(current.query, target.query);
	}

	function queryIncludes(current, target) {
	  for (var key in target) {
	    if (!(key in current)) {
	      return false;
	    }
	  }
	  return true;
	}

	/*  */

	// work around weird flow bug
	var toTypes = [String, Object];
	var eventTypes = [String, Array];

	var Link = {
	  name: 'router-link',
	  props: {
	    to: {
	      type: toTypes,
	      required: true
	    },
	    tag: {
	      type: String,
	      default: 'a'
	    },
	    exact: Boolean,
	    append: Boolean,
	    replace: Boolean,
	    activeClass: String,
	    exactActiveClass: String,
	    event: {
	      type: eventTypes,
	      default: 'click'
	    }
	  },
	  render: function render(h) {
	    var this$1 = this;

	    var router = this.$router;
	    var current = this.$route;
	    var ref = router.resolve(this.to, current, this.append);
	    var location = ref.location;
	    var route = ref.route;
	    var href = ref.href;

	    var classes = {};
	    var globalActiveClass = router.options.linkActiveClass;
	    var globalExactActiveClass = router.options.linkExactActiveClass;
	    // Support global empty active class
	    var activeClassFallback = globalActiveClass == null ? 'router-link-active' : globalActiveClass;
	    var exactActiveClassFallback = globalExactActiveClass == null ? 'router-link-exact-active' : globalExactActiveClass;
	    var activeClass = this.activeClass == null ? activeClassFallback : this.activeClass;
	    var exactActiveClass = this.exactActiveClass == null ? exactActiveClassFallback : this.exactActiveClass;
	    var compareTarget = location.path ? createRoute(null, location, null, router) : route;

	    classes[exactActiveClass] = isSameRoute(current, compareTarget);
	    classes[activeClass] = this.exact ? classes[exactActiveClass] : isIncludedRoute(current, compareTarget);

	    var handler = function handler(e) {
	      if (guardEvent(e)) {
	        if (this$1.replace) {
	          router.replace(location);
	        } else {
	          router.push(location);
	        }
	      }
	    };

	    var on = { click: guardEvent };
	    if (Array.isArray(this.event)) {
	      this.event.forEach(function (e) {
	        on[e] = handler;
	      });
	    } else {
	      on[this.event] = handler;
	    }

	    var data = {
	      class: classes
	    };

	    if (this.tag === 'a') {
	      data.on = on;
	      data.attrs = { href: href };
	    } else {
	      // find the first <a> child and apply listener and href
	      var a = findAnchor(this.$slots.default);
	      if (a) {
	        // in case the <a> is a static node
	        a.isStatic = false;
	        var extend = _Vue.util.extend;
	        var aData = a.data = extend({}, a.data);
	        aData.on = on;
	        var aAttrs = a.data.attrs = extend({}, a.data.attrs);
	        aAttrs.href = href;
	      } else {
	        // doesn't have <a> child, apply listener to self
	        data.on = on;
	      }
	    }

	    return h(this.tag, data, this.$slots.default);
	  }
	};

	function guardEvent(e) {
	  // don't redirect with control keys
	  if (e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) {
	    return;
	  }
	  // don't redirect when preventDefault called
	  if (e.defaultPrevented) {
	    return;
	  }
	  // don't redirect on right click
	  if (e.button !== undefined && e.button !== 0) {
	    return;
	  }
	  // don't redirect if `target="_blank"`
	  if (e.currentTarget && e.currentTarget.getAttribute) {
	    var target = e.currentTarget.getAttribute('target');
	    if (/\b_blank\b/i.test(target)) {
	      return;
	    }
	  }
	  // this may be a Weex event which doesn't have this method
	  if (e.preventDefault) {
	    e.preventDefault();
	  }
	  return true;
	}

	function findAnchor(children) {
	  if (children) {
	    var child;
	    for (var i = 0; i < children.length; i++) {
	      child = children[i];
	      if (child.tag === 'a') {
	        return child;
	      }
	      if (child.children && (child = findAnchor(child.children))) {
	        return child;
	      }
	    }
	  }
	}

	var _Vue;

	function install(Vue) {
	  if (install.installed) {
	    return;
	  }
	  install.installed = true;

	  _Vue = Vue;

	  var isDef = function isDef(v) {
	    return v !== undefined;
	  };

	  var registerInstance = function registerInstance(vm, callVal) {
	    var i = vm.$options._parentVnode;
	    if (isDef(i) && isDef(i = i.data) && isDef(i = i.registerRouteInstance)) {
	      i(vm, callVal);
	    }
	  };

	  Vue.mixin({
	    beforeCreate: function beforeCreate() {
	      if (isDef(this.$options.router)) {
	        this._routerRoot = this;
	        this._router = this.$options.router;
	        this._router.init(this);
	        Vue.util.defineReactive(this, '_route', this._router.history.current);
	      } else {
	        this._routerRoot = this.$parent && this.$parent._routerRoot || this;
	      }
	      registerInstance(this, this);
	    },
	    destroyed: function destroyed() {
	      registerInstance(this);
	    }
	  });

	  Object.defineProperty(Vue.prototype, '$router', {
	    get: function get() {
	      return this._routerRoot._router;
	    }
	  });

	  Object.defineProperty(Vue.prototype, '$route', {
	    get: function get() {
	      return this._routerRoot._route;
	    }
	  });

	  Vue.component('router-view', View);
	  Vue.component('router-link', Link);

	  var strats = Vue.config.optionMergeStrategies;
	  // use the same hook merging strategy for route hooks
	  strats.beforeRouteEnter = strats.beforeRouteLeave = strats.beforeRouteUpdate = strats.created;
	}

	/*  */

	var inBrowser = typeof window !== 'undefined';

	/*  */

	function resolvePath(relative, base, append) {
	  var firstChar = relative.charAt(0);
	  if (firstChar === '/') {
	    return relative;
	  }

	  if (firstChar === '?' || firstChar === '#') {
	    return base + relative;
	  }

	  var stack = base.split('/');

	  // remove trailing segment if:
	  // - not appending
	  // - appending to trailing slash (last segment is empty)
	  if (!append || !stack[stack.length - 1]) {
	    stack.pop();
	  }

	  // resolve relative path
	  var segments = relative.replace(/^\//, '').split('/');
	  for (var i = 0; i < segments.length; i++) {
	    var segment = segments[i];
	    if (segment === '..') {
	      stack.pop();
	    } else if (segment !== '.') {
	      stack.push(segment);
	    }
	  }

	  // ensure leading slash
	  if (stack[0] !== '') {
	    stack.unshift('');
	  }

	  return stack.join('/');
	}

	function parsePath(path) {
	  var hash = '';
	  var query = '';

	  var hashIndex = path.indexOf('#');
	  if (hashIndex >= 0) {
	    hash = path.slice(hashIndex);
	    path = path.slice(0, hashIndex);
	  }

	  var queryIndex = path.indexOf('?');
	  if (queryIndex >= 0) {
	    query = path.slice(queryIndex + 1);
	    path = path.slice(0, queryIndex);
	  }

	  return {
	    path: path,
	    query: query,
	    hash: hash
	  };
	}

	function cleanPath(path) {
	  return path.replace(/\/\//g, '/');
	}

	var index$1 = Array.isArray || function (arr) {
	  return Object.prototype.toString.call(arr) == '[object Array]';
	};

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

	      if (index$1(value)) {
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
	  if (!index$1(keys)) {
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
	  if (!index$1(keys)) {
	    options = /** @type {!Object} */keys || options;
	    keys = [];
	  }

	  options = options || {};

	  if (path instanceof RegExp) {
	    return regexpToRegexp(path, /** @type {!Array} */keys);
	  }

	  if (index$1(path)) {
	    return arrayToRegexp( /** @type {!Array} */path, /** @type {!Array} */keys, options);
	  }

	  return stringToRegexp( /** @type {string} */path, /** @type {!Array} */keys, options);
	}

	index.parse = parse_1;
	index.compile = compile_1;
	index.tokensToFunction = tokensToFunction_1;
	index.tokensToRegExp = tokensToRegExp_1;

	/*  */

	var regexpCompileCache = Object.create(null);

	function fillParams(path, params, routeMsg) {
	  try {
	    var filler = regexpCompileCache[path] || (regexpCompileCache[path] = index.compile(path));
	    return filler(params || {}, { pretty: true });
	  } catch (e) {
	    if (process.env.NODE_ENV !== 'production') {
	      warn(false, "missing param for " + routeMsg + ": " + e.message);
	    }
	    return '';
	  }
	}

	/*  */

	function createRouteMap(routes, oldPathList, oldPathMap, oldNameMap) {
	  // the path list is used to control path matching priority
	  var pathList = oldPathList || [];
	  var pathMap = oldPathMap || Object.create(null);
	  var nameMap = oldNameMap || Object.create(null);

	  routes.forEach(function (route) {
	    addRouteRecord(pathList, pathMap, nameMap, route);
	  });

	  // ensure wildcard routes are always at the end
	  for (var i = 0, l = pathList.length; i < l; i++) {
	    if (pathList[i] === '*') {
	      pathList.push(pathList.splice(i, 1)[0]);
	      l--;
	      i--;
	    }
	  }

	  return {
	    pathList: pathList,
	    pathMap: pathMap,
	    nameMap: nameMap
	  };
	}

	function addRouteRecord(pathList, pathMap, nameMap, route, parent, matchAs) {
	  var path = route.path;
	  var name = route.name;
	  if (process.env.NODE_ENV !== 'production') {
	    assert(path != null, "\"path\" is required in a route configuration.");
	    assert(typeof route.component !== 'string', "route config \"component\" for path: " + String(path || name) + " cannot be a " + "string id. Use an actual component instead.");
	  }

	  var normalizedPath = normalizePath(path, parent);
	  var pathToRegexpOptions = route.pathToRegexpOptions || {};

	  if (typeof route.caseSensitive === 'boolean') {
	    pathToRegexpOptions.sensitive = route.caseSensitive;
	  }

	  var record = {
	    path: normalizedPath,
	    regex: compileRouteRegex(normalizedPath, pathToRegexpOptions),
	    components: route.components || { default: route.component },
	    instances: {},
	    name: name,
	    parent: parent,
	    matchAs: matchAs,
	    redirect: route.redirect,
	    beforeEnter: route.beforeEnter,
	    meta: route.meta || {},
	    props: route.props == null ? {} : route.components ? route.props : { default: route.props }
	  };

	  if (route.children) {
	    // Warn if route is named, does not redirect and has a default child route.
	    // If users navigate to this route by name, the default child will
	    // not be rendered (GH Issue #629)
	    if (process.env.NODE_ENV !== 'production') {
	      if (route.name && !route.redirect && route.children.some(function (child) {
	        return (/^\/?$/.test(child.path)
	        );
	      })) {
	        warn(false, "Named Route '" + route.name + "' has a default child route. " + "When navigating to this named route (:to=\"{name: '" + route.name + "'\"), " + "the default child route will not be rendered. Remove the name from " + "this route and use the name of the default child route for named " + "links instead.");
	      }
	    }
	    route.children.forEach(function (child) {
	      var childMatchAs = matchAs ? cleanPath(matchAs + "/" + child.path) : undefined;
	      addRouteRecord(pathList, pathMap, nameMap, child, record, childMatchAs);
	    });
	  }

	  if (route.alias !== undefined) {
	    var aliases = Array.isArray(route.alias) ? route.alias : [route.alias];

	    aliases.forEach(function (alias) {
	      var aliasRoute = {
	        path: alias,
	        children: route.children
	      };
	      addRouteRecord(pathList, pathMap, nameMap, aliasRoute, parent, record.path || '/' // matchAs
	      );
	    });
	  }

	  if (!pathMap[record.path]) {
	    pathList.push(record.path);
	    pathMap[record.path] = record;
	  }

	  if (name) {
	    if (!nameMap[name]) {
	      nameMap[name] = record;
	    } else if (process.env.NODE_ENV !== 'production' && !matchAs) {
	      warn(false, "Duplicate named routes definition: " + "{ name: \"" + name + "\", path: \"" + record.path + "\" }");
	    }
	  }
	}

	function compileRouteRegex(path, pathToRegexpOptions) {
	  var regex = index(path, [], pathToRegexpOptions);
	  if (process.env.NODE_ENV !== 'production') {
	    var keys = {};
	    regex.keys.forEach(function (key) {
	      warn(!keys[key.name], "Duplicate param keys in route with path: \"" + path + "\"");
	      keys[key.name] = true;
	    });
	  }
	  return regex;
	}

	function normalizePath(path, parent) {
	  path = path.replace(/\/$/, '');
	  if (path[0] === '/') {
	    return path;
	  }
	  if (parent == null) {
	    return path;
	  }
	  return cleanPath(parent.path + "/" + path);
	}

	/*  */

	function normalizeLocation(raw, current, append, router) {
	  var next = typeof raw === 'string' ? { path: raw } : raw;
	  // named target
	  if (next.name || next._normalized) {
	    return next;
	  }

	  // relative params
	  if (!next.path && next.params && current) {
	    next = assign({}, next);
	    next._normalized = true;
	    var params = assign(assign({}, current.params), next.params);
	    if (current.name) {
	      next.name = current.name;
	      next.params = params;
	    } else if (current.matched.length) {
	      var rawPath = current.matched[current.matched.length - 1].path;
	      next.path = fillParams(rawPath, params, "path " + current.path);
	    } else if (process.env.NODE_ENV !== 'production') {
	      warn(false, "relative params navigation requires a current route.");
	    }
	    return next;
	  }

	  var parsedPath = parsePath(next.path || '');
	  var basePath = current && current.path || '/';
	  var path = parsedPath.path ? resolvePath(parsedPath.path, basePath, append || next.append) : basePath;

	  var query = resolveQuery(parsedPath.query, next.query, router && router.options.parseQuery);

	  var hash = next.hash || parsedPath.hash;
	  if (hash && hash.charAt(0) !== '#') {
	    hash = "#" + hash;
	  }

	  return {
	    _normalized: true,
	    path: path,
	    query: query,
	    hash: hash
	  };
	}

	function assign(a, b) {
	  for (var key in b) {
	    a[key] = b[key];
	  }
	  return a;
	}

	/*  */

	function createMatcher(routes, router) {
	  var ref = createRouteMap(routes);
	  var pathList = ref.pathList;
	  var pathMap = ref.pathMap;
	  var nameMap = ref.nameMap;

	  function addRoutes(routes) {
	    createRouteMap(routes, pathList, pathMap, nameMap);
	  }

	  function match(raw, currentRoute, redirectedFrom) {
	    var location = normalizeLocation(raw, currentRoute, false, router);
	    var name = location.name;

	    if (name) {
	      var record = nameMap[name];
	      if (process.env.NODE_ENV !== 'production') {
	        warn(record, "Route with name '" + name + "' does not exist");
	      }
	      if (!record) {
	        return _createRoute(null, location);
	      }
	      var paramNames = record.regex.keys.filter(function (key) {
	        return !key.optional;
	      }).map(function (key) {
	        return key.name;
	      });

	      if (_typeof(location.params) !== 'object') {
	        location.params = {};
	      }

	      if (currentRoute && _typeof(currentRoute.params) === 'object') {
	        for (var key in currentRoute.params) {
	          if (!(key in location.params) && paramNames.indexOf(key) > -1) {
	            location.params[key] = currentRoute.params[key];
	          }
	        }
	      }

	      if (record) {
	        location.path = fillParams(record.path, location.params, "named route \"" + name + "\"");
	        return _createRoute(record, location, redirectedFrom);
	      }
	    } else if (location.path) {
	      location.params = {};
	      for (var i = 0; i < pathList.length; i++) {
	        var path = pathList[i];
	        var record$1 = pathMap[path];
	        if (matchRoute(record$1.regex, location.path, location.params)) {
	          return _createRoute(record$1, location, redirectedFrom);
	        }
	      }
	    }
	    // no match
	    return _createRoute(null, location);
	  }

	  function redirect(record, location) {
	    var originalRedirect = record.redirect;
	    var redirect = typeof originalRedirect === 'function' ? originalRedirect(createRoute(record, location, null, router)) : originalRedirect;

	    if (typeof redirect === 'string') {
	      redirect = { path: redirect };
	    }

	    if (!redirect || (typeof redirect === 'undefined' ? 'undefined' : _typeof(redirect)) !== 'object') {
	      if (process.env.NODE_ENV !== 'production') {
	        warn(false, "invalid redirect option: " + JSON.stringify(redirect));
	      }
	      return _createRoute(null, location);
	    }

	    var re = redirect;
	    var name = re.name;
	    var path = re.path;
	    var query = location.query;
	    var hash = location.hash;
	    var params = location.params;
	    query = re.hasOwnProperty('query') ? re.query : query;
	    hash = re.hasOwnProperty('hash') ? re.hash : hash;
	    params = re.hasOwnProperty('params') ? re.params : params;

	    if (name) {
	      // resolved named direct
	      var targetRecord = nameMap[name];
	      if (process.env.NODE_ENV !== 'production') {
	        assert(targetRecord, "redirect failed: named route \"" + name + "\" not found.");
	      }
	      return match({
	        _normalized: true,
	        name: name,
	        query: query,
	        hash: hash,
	        params: params
	      }, undefined, location);
	    } else if (path) {
	      // 1. resolve relative redirect
	      var rawPath = resolveRecordPath(path, record);
	      // 2. resolve params
	      var resolvedPath = fillParams(rawPath, params, "redirect route with path \"" + rawPath + "\"");
	      // 3. rematch with existing query and hash
	      return match({
	        _normalized: true,
	        path: resolvedPath,
	        query: query,
	        hash: hash
	      }, undefined, location);
	    } else {
	      if (process.env.NODE_ENV !== 'production') {
	        warn(false, "invalid redirect option: " + JSON.stringify(redirect));
	      }
	      return _createRoute(null, location);
	    }
	  }

	  function alias(record, location, matchAs) {
	    var aliasedPath = fillParams(matchAs, location.params, "aliased route with path \"" + matchAs + "\"");
	    var aliasedMatch = match({
	      _normalized: true,
	      path: aliasedPath
	    });
	    if (aliasedMatch) {
	      var matched = aliasedMatch.matched;
	      var aliasedRecord = matched[matched.length - 1];
	      location.params = aliasedMatch.params;
	      return _createRoute(aliasedRecord, location);
	    }
	    return _createRoute(null, location);
	  }

	  function _createRoute(record, location, redirectedFrom) {
	    if (record && record.redirect) {
	      return redirect(record, redirectedFrom || location);
	    }
	    if (record && record.matchAs) {
	      return alias(record, location, record.matchAs);
	    }
	    return createRoute(record, location, redirectedFrom, router);
	  }

	  return {
	    match: match,
	    addRoutes: addRoutes
	  };
	}

	function matchRoute(regex, path, params) {
	  var m = path.match(regex);

	  if (!m) {
	    return false;
	  } else if (!params) {
	    return true;
	  }

	  for (var i = 1, len = m.length; i < len; ++i) {
	    var key = regex.keys[i - 1];
	    var val = typeof m[i] === 'string' ? decodeURIComponent(m[i]) : m[i];
	    if (key) {
	      params[key.name] = val;
	    }
	  }

	  return true;
	}

	function resolveRecordPath(path, record) {
	  return resolvePath(path, record.parent ? record.parent.path : '/', true);
	}

	/*  */

	var positionStore = Object.create(null);

	function setupScroll() {
	  window.addEventListener('popstate', function (e) {
	    saveScrollPosition();
	    if (e.state && e.state.key) {
	      setStateKey(e.state.key);
	    }
	  });
	}

	function handleScroll(router, to, from, isPop) {
	  if (!router.app) {
	    return;
	  }

	  var behavior = router.options.scrollBehavior;
	  if (!behavior) {
	    return;
	  }

	  if (process.env.NODE_ENV !== 'production') {
	    assert(typeof behavior === 'function', "scrollBehavior must be a function");
	  }

	  // wait until re-render finishes before scrolling
	  router.app.$nextTick(function () {
	    var position = getScrollPosition();
	    var shouldScroll = behavior(to, from, isPop ? position : null);
	    if (!shouldScroll) {
	      return;
	    }
	    var isObject = (typeof shouldScroll === 'undefined' ? 'undefined' : _typeof(shouldScroll)) === 'object';
	    if (isObject && typeof shouldScroll.selector === 'string') {
	      var el = document.querySelector(shouldScroll.selector);
	      if (el) {
	        var offset = shouldScroll.offset && _typeof(shouldScroll.offset) === 'object' ? shouldScroll.offset : {};
	        offset = normalizeOffset(offset);
	        position = getElementPosition(el, offset);
	      } else if (isValidPosition(shouldScroll)) {
	        position = normalizePosition(shouldScroll);
	      }
	    } else if (isObject && isValidPosition(shouldScroll)) {
	      position = normalizePosition(shouldScroll);
	    }

	    if (position) {
	      window.scrollTo(position.x, position.y);
	    }
	  });
	}

	function saveScrollPosition() {
	  var key = getStateKey();
	  if (key) {
	    positionStore[key] = {
	      x: window.pageXOffset,
	      y: window.pageYOffset
	    };
	  }
	}

	function getScrollPosition() {
	  var key = getStateKey();
	  if (key) {
	    return positionStore[key];
	  }
	}

	function getElementPosition(el, offset) {
	  var docEl = document.documentElement;
	  var docRect = docEl.getBoundingClientRect();
	  var elRect = el.getBoundingClientRect();
	  return {
	    x: elRect.left - docRect.left - offset.x,
	    y: elRect.top - docRect.top - offset.y
	  };
	}

	function isValidPosition(obj) {
	  return isNumber(obj.x) || isNumber(obj.y);
	}

	function normalizePosition(obj) {
	  return {
	    x: isNumber(obj.x) ? obj.x : window.pageXOffset,
	    y: isNumber(obj.y) ? obj.y : window.pageYOffset
	  };
	}

	function normalizeOffset(obj) {
	  return {
	    x: isNumber(obj.x) ? obj.x : 0,
	    y: isNumber(obj.y) ? obj.y : 0
	  };
	}

	function isNumber(v) {
	  return typeof v === 'number';
	}

	/*  */

	var supportsPushState = inBrowser && function () {
	  var ua = window.navigator.userAgent;

	  if ((ua.indexOf('Android 2.') !== -1 || ua.indexOf('Android 4.0') !== -1) && ua.indexOf('Mobile Safari') !== -1 && ua.indexOf('Chrome') === -1 && ua.indexOf('Windows Phone') === -1) {
	    return false;
	  }

	  return window.history && 'pushState' in window.history;
	}();

	// use User Timing api (if present) for more accurate key precision
	var Time = inBrowser && window.performance && window.performance.now ? window.performance : Date;

	var _key = genKey();

	function genKey() {
	  return Time.now().toFixed(3);
	}

	function getStateKey() {
	  return _key;
	}

	function setStateKey(key) {
	  _key = key;
	}

	function pushState(url, replace) {
	  saveScrollPosition();
	  // try...catch the pushState call to get around Safari
	  // DOM Exception 18 where it limits to 100 pushState calls
	  var history = window.history;
	  try {
	    if (replace) {
	      history.replaceState({ key: _key }, '', url);
	    } else {
	      _key = genKey();
	      history.pushState({ key: _key }, '', url);
	    }
	  } catch (e) {
	    window.location[replace ? 'replace' : 'assign'](url);
	  }
	}

	function replaceState(url) {
	  pushState(url, true);
	}

	/*  */

	function runQueue(queue, fn, cb) {
	  var step = function step(index) {
	    if (index >= queue.length) {
	      cb();
	    } else {
	      if (queue[index]) {
	        fn(queue[index], function () {
	          step(index + 1);
	        });
	      } else {
	        step(index + 1);
	      }
	    }
	  };
	  step(0);
	}

	/*  */

	function resolveAsyncComponents(matched) {
	  return function (to, from, next) {
	    var hasAsync = false;
	    var pending = 0;
	    var error = null;

	    flatMapComponents(matched, function (def, _, match, key) {
	      // if it's a function and doesn't have cid attached,
	      // assume it's an async component resolve function.
	      // we are not using Vue's default async resolving mechanism because
	      // we want to halt the navigation until the incoming component has been
	      // resolved.
	      if (typeof def === 'function' && def.cid === undefined) {
	        hasAsync = true;
	        pending++;

	        var resolve = once(function (resolvedDef) {
	          if (resolvedDef.__esModule && resolvedDef.default) {
	            resolvedDef = resolvedDef.default;
	          }
	          // save resolved on async factory in case it's used elsewhere
	          def.resolved = typeof resolvedDef === 'function' ? resolvedDef : _Vue.extend(resolvedDef);
	          match.components[key] = resolvedDef;
	          pending--;
	          if (pending <= 0) {
	            next();
	          }
	        });

	        var reject = once(function (reason) {
	          var msg = "Failed to resolve async component " + key + ": " + reason;
	          process.env.NODE_ENV !== 'production' && warn(false, msg);
	          if (!error) {
	            error = isError(reason) ? reason : new Error(msg);
	            next(error);
	          }
	        });

	        var res;
	        try {
	          res = def(resolve, reject);
	        } catch (e) {
	          reject(e);
	        }
	        if (res) {
	          if (typeof res.then === 'function') {
	            res.then(resolve, reject);
	          } else {
	            // new syntax in Vue 2.3
	            var comp = res.component;
	            if (comp && typeof comp.then === 'function') {
	              comp.then(resolve, reject);
	            }
	          }
	        }
	      }
	    });

	    if (!hasAsync) {
	      next();
	    }
	  };
	}

	function flatMapComponents(matched, fn) {
	  return flatten(matched.map(function (m) {
	    return Object.keys(m.components).map(function (key) {
	      return fn(m.components[key], m.instances[key], m, key);
	    });
	  }));
	}

	function flatten(arr) {
	  return Array.prototype.concat.apply([], arr);
	}

	// in Webpack 2, require.ensure now also returns a Promise
	// so the resolve/reject functions may get called an extra time
	// if the user uses an arrow function shorthand that happens to
	// return that Promise.
	function once(fn) {
	  var called = false;
	  return function () {
	    var args = [],
	        len = arguments.length;
	    while (len--) {
	      args[len] = arguments[len];
	    }if (called) {
	      return;
	    }
	    called = true;
	    return fn.apply(this, args);
	  };
	}

	/*  */

	var History = function History(router, base) {
	  this.router = router;
	  this.base = normalizeBase(base);
	  // start with a route object that stands for "nowhere"
	  this.current = START;
	  this.pending = null;
	  this.ready = false;
	  this.readyCbs = [];
	  this.readyErrorCbs = [];
	  this.errorCbs = [];
	};

	History.prototype.listen = function listen(cb) {
	  this.cb = cb;
	};

	History.prototype.onReady = function onReady(cb, errorCb) {
	  if (this.ready) {
	    cb();
	  } else {
	    this.readyCbs.push(cb);
	    if (errorCb) {
	      this.readyErrorCbs.push(errorCb);
	    }
	  }
	};

	History.prototype.onError = function onError(errorCb) {
	  this.errorCbs.push(errorCb);
	};

	History.prototype.transitionTo = function transitionTo(location, onComplete, onAbort) {
	  var this$1 = this;

	  var route = this.router.match(location, this.current);
	  this.confirmTransition(route, function () {
	    this$1.updateRoute(route);
	    onComplete && onComplete(route);
	    this$1.ensureURL();

	    // fire ready cbs once
	    if (!this$1.ready) {
	      this$1.ready = true;
	      this$1.readyCbs.forEach(function (cb) {
	        cb(route);
	      });
	    }
	  }, function (err) {
	    if (onAbort) {
	      onAbort(err);
	    }
	    if (err && !this$1.ready) {
	      this$1.ready = true;
	      this$1.readyErrorCbs.forEach(function (cb) {
	        cb(err);
	      });
	    }
	  });
	};

	History.prototype.confirmTransition = function confirmTransition(route, onComplete, onAbort) {
	  var this$1 = this;

	  var current = this.current;
	  var abort = function abort(err) {
	    if (isError(err)) {
	      if (this$1.errorCbs.length) {
	        this$1.errorCbs.forEach(function (cb) {
	          cb(err);
	        });
	      } else {
	        warn(false, 'uncaught error during route navigation:');
	        console.error(err);
	      }
	    }
	    onAbort && onAbort(err);
	  };
	  if (isSameRoute(route, current) &&
	  // in the case the route map has been dynamically appended to
	  route.matched.length === current.matched.length) {
	    this.ensureURL();
	    return abort();
	  }

	  var ref = resolveQueue(this.current.matched, route.matched);
	  var updated = ref.updated;
	  var deactivated = ref.deactivated;
	  var activated = ref.activated;

	  var queue = [].concat(
	  // in-component leave guards
	  extractLeaveGuards(deactivated),
	  // global before hooks
	  this.router.beforeHooks,
	  // in-component update hooks
	  extractUpdateHooks(updated),
	  // in-config enter guards
	  activated.map(function (m) {
	    return m.beforeEnter;
	  }),
	  // async components
	  resolveAsyncComponents(activated));

	  this.pending = route;
	  var iterator = function iterator(hook, next) {
	    if (this$1.pending !== route) {
	      return abort();
	    }
	    try {
	      hook(route, current, function (to) {
	        if (to === false || isError(to)) {
	          // next(false) -> abort navigation, ensure current URL
	          this$1.ensureURL(true);
	          abort(to);
	        } else if (typeof to === 'string' || (typeof to === 'undefined' ? 'undefined' : _typeof(to)) === 'object' && (typeof to.path === 'string' || typeof to.name === 'string')) {
	          // next('/') or next({ path: '/' }) -> redirect
	          abort();
	          if ((typeof to === 'undefined' ? 'undefined' : _typeof(to)) === 'object' && to.replace) {
	            this$1.replace(to);
	          } else {
	            this$1.push(to);
	          }
	        } else {
	          // confirm transition and pass on the value
	          next(to);
	        }
	      });
	    } catch (e) {
	      abort(e);
	    }
	  };

	  runQueue(queue, iterator, function () {
	    var postEnterCbs = [];
	    var isValid = function isValid() {
	      return this$1.current === route;
	    };
	    // wait until async components are resolved before
	    // extracting in-component enter guards
	    var enterGuards = extractEnterGuards(activated, postEnterCbs, isValid);
	    var queue = enterGuards.concat(this$1.router.resolveHooks);
	    runQueue(queue, iterator, function () {
	      if (this$1.pending !== route) {
	        return abort();
	      }
	      this$1.pending = null;
	      onComplete(route);
	      if (this$1.router.app) {
	        this$1.router.app.$nextTick(function () {
	          postEnterCbs.forEach(function (cb) {
	            cb();
	          });
	        });
	      }
	    });
	  });
	};

	History.prototype.updateRoute = function updateRoute(route) {
	  var prev = this.current;
	  this.current = route;
	  this.cb && this.cb(route);
	  this.router.afterHooks.forEach(function (hook) {
	    hook && hook(route, prev);
	  });
	};

	function normalizeBase(base) {
	  if (!base) {
	    if (inBrowser) {
	      // respect <base> tag
	      var baseEl = document.querySelector('base');
	      base = baseEl && baseEl.getAttribute('href') || '/';
	      // strip full URL origin
	      base = base.replace(/^https?:\/\/[^\/]+/, '');
	    } else {
	      base = '/';
	    }
	  }
	  // make sure there's the starting slash
	  if (base.charAt(0) !== '/') {
	    base = '/' + base;
	  }
	  // remove trailing slash
	  return base.replace(/\/$/, '');
	}

	function resolveQueue(current, next) {
	  var i;
	  var max = Math.max(current.length, next.length);
	  for (i = 0; i < max; i++) {
	    if (current[i] !== next[i]) {
	      break;
	    }
	  }
	  return {
	    updated: next.slice(0, i),
	    activated: next.slice(i),
	    deactivated: current.slice(i)
	  };
	}

	function extractGuards(records, name, bind, reverse) {
	  var guards = flatMapComponents(records, function (def, instance, match, key) {
	    var guard = extractGuard(def, name);
	    if (guard) {
	      return Array.isArray(guard) ? guard.map(function (guard) {
	        return bind(guard, instance, match, key);
	      }) : bind(guard, instance, match, key);
	    }
	  });
	  return flatten(reverse ? guards.reverse() : guards);
	}

	function extractGuard(def, key) {
	  if (typeof def !== 'function') {
	    // extend now so that global mixins are applied.
	    def = _Vue.extend(def);
	  }
	  return def.options[key];
	}

	function extractLeaveGuards(deactivated) {
	  return extractGuards(deactivated, 'beforeRouteLeave', bindGuard, true);
	}

	function extractUpdateHooks(updated) {
	  return extractGuards(updated, 'beforeRouteUpdate', bindGuard);
	}

	function bindGuard(guard, instance) {
	  if (instance) {
	    return function boundRouteGuard() {
	      return guard.apply(instance, arguments);
	    };
	  }
	}

	function extractEnterGuards(activated, cbs, isValid) {
	  return extractGuards(activated, 'beforeRouteEnter', function (guard, _, match, key) {
	    return bindEnterGuard(guard, match, key, cbs, isValid);
	  });
	}

	function bindEnterGuard(guard, match, key, cbs, isValid) {
	  return function routeEnterGuard(to, from, next) {
	    return guard(to, from, function (cb) {
	      next(cb);
	      if (typeof cb === 'function') {
	        cbs.push(function () {
	          // #750
	          // if a router-view is wrapped with an out-in transition,
	          // the instance may not have been registered at this time.
	          // we will need to poll for registration until current route
	          // is no longer valid.
	          poll(cb, match.instances, key, isValid);
	        });
	      }
	    });
	  };
	}

	function poll(cb, // somehow flow cannot infer this is a function
	instances, key, isValid) {
	  if (instances[key]) {
	    cb(instances[key]);
	  } else if (isValid()) {
	    setTimeout(function () {
	      poll(cb, instances, key, isValid);
	    }, 16);
	  }
	}

	/*  */

	var HTML5History = function (History$$1) {
	  function HTML5History(router, base) {
	    var this$1 = this;

	    History$$1.call(this, router, base);

	    var expectScroll = router.options.scrollBehavior;

	    if (expectScroll) {
	      setupScroll();
	    }

	    window.addEventListener('popstate', function (e) {
	      var current = this$1.current;
	      this$1.transitionTo(getLocation(this$1.base), function (route) {
	        if (expectScroll) {
	          handleScroll(router, route, current, true);
	        }
	      });
	    });
	  }

	  if (History$$1) HTML5History.__proto__ = History$$1;
	  HTML5History.prototype = Object.create(History$$1 && History$$1.prototype);
	  HTML5History.prototype.constructor = HTML5History;

	  HTML5History.prototype.go = function go(n) {
	    window.history.go(n);
	  };

	  HTML5History.prototype.push = function push(location, onComplete, onAbort) {
	    var this$1 = this;

	    var ref = this;
	    var fromRoute = ref.current;
	    this.transitionTo(location, function (route) {
	      pushState(cleanPath(this$1.base + route.fullPath));
	      handleScroll(this$1.router, route, fromRoute, false);
	      onComplete && onComplete(route);
	    }, onAbort);
	  };

	  HTML5History.prototype.replace = function replace(location, onComplete, onAbort) {
	    var this$1 = this;

	    var ref = this;
	    var fromRoute = ref.current;
	    this.transitionTo(location, function (route) {
	      replaceState(cleanPath(this$1.base + route.fullPath));
	      handleScroll(this$1.router, route, fromRoute, false);
	      onComplete && onComplete(route);
	    }, onAbort);
	  };

	  HTML5History.prototype.ensureURL = function ensureURL(push) {
	    if (getLocation(this.base) !== this.current.fullPath) {
	      var current = cleanPath(this.base + this.current.fullPath);
	      push ? pushState(current) : replaceState(current);
	    }
	  };

	  HTML5History.prototype.getCurrentLocation = function getCurrentLocation() {
	    return getLocation(this.base);
	  };

	  return HTML5History;
	}(History);

	function getLocation(base) {
	  var path = window.location.pathname;
	  if (base && path.indexOf(base) === 0) {
	    path = path.slice(base.length);
	  }
	  return (path || '/') + window.location.search + window.location.hash;
	}

	/*  */

	var HashHistory = function (History$$1) {
	  function HashHistory(router, base, fallback) {
	    History$$1.call(this, router, base);
	    // check history fallback deeplinking
	    if (fallback && checkFallback(this.base)) {
	      return;
	    }
	    ensureSlash();
	  }

	  if (History$$1) HashHistory.__proto__ = History$$1;
	  HashHistory.prototype = Object.create(History$$1 && History$$1.prototype);
	  HashHistory.prototype.constructor = HashHistory;

	  // this is delayed until the app mounts
	  // to avoid the hashchange listener being fired too early
	  HashHistory.prototype.setupListeners = function setupListeners() {
	    var this$1 = this;

	    window.addEventListener('hashchange', function () {
	      if (!ensureSlash()) {
	        return;
	      }
	      this$1.transitionTo(getHash(), function (route) {
	        replaceHash(route.fullPath);
	      });
	    });
	  };

	  HashHistory.prototype.push = function push(location, onComplete, onAbort) {
	    this.transitionTo(location, function (route) {
	      pushHash(route.fullPath);
	      onComplete && onComplete(route);
	    }, onAbort);
	  };

	  HashHistory.prototype.replace = function replace(location, onComplete, onAbort) {
	    this.transitionTo(location, function (route) {
	      replaceHash(route.fullPath);
	      onComplete && onComplete(route);
	    }, onAbort);
	  };

	  HashHistory.prototype.go = function go(n) {
	    window.history.go(n);
	  };

	  HashHistory.prototype.ensureURL = function ensureURL(push) {
	    var current = this.current.fullPath;
	    if (getHash() !== current) {
	      push ? pushHash(current) : replaceHash(current);
	    }
	  };

	  HashHistory.prototype.getCurrentLocation = function getCurrentLocation() {
	    return getHash();
	  };

	  return HashHistory;
	}(History);

	function checkFallback(base) {
	  var location = getLocation(base);
	  if (!/^\/#/.test(location)) {
	    window.location.replace(cleanPath(base + '/#' + location));
	    return true;
	  }
	}

	function ensureSlash() {
	  var path = getHash();
	  if (path.charAt(0) === '/') {
	    return true;
	  }
	  replaceHash('/' + path);
	  return false;
	}

	function getHash() {
	  // We can't use window.location.hash here because it's not
	  // consistent across browsers - Firefox will pre-decode it!
	  var href = window.location.href;
	  var index = href.indexOf('#');
	  return index === -1 ? '' : href.slice(index + 1);
	}

	function pushHash(path) {
	  window.location.hash = path;
	}

	function replaceHash(path) {
	  var href = window.location.href;
	  var i = href.indexOf('#');
	  var base = i >= 0 ? href.slice(0, i) : href;
	  window.location.replace(base + "#" + path);
	}

	/*  */

	var AbstractHistory = function (History$$1) {
	  function AbstractHistory(router, base) {
	    History$$1.call(this, router, base);
	    this.stack = [];
	    this.index = -1;
	  }

	  if (History$$1) AbstractHistory.__proto__ = History$$1;
	  AbstractHistory.prototype = Object.create(History$$1 && History$$1.prototype);
	  AbstractHistory.prototype.constructor = AbstractHistory;

	  AbstractHistory.prototype.push = function push(location, onComplete, onAbort) {
	    var this$1 = this;

	    this.transitionTo(location, function (route) {
	      this$1.stack = this$1.stack.slice(0, this$1.index + 1).concat(route);
	      this$1.index++;
	      onComplete && onComplete(route);
	    }, onAbort);
	  };

	  AbstractHistory.prototype.replace = function replace(location, onComplete, onAbort) {
	    var this$1 = this;

	    this.transitionTo(location, function (route) {
	      this$1.stack = this$1.stack.slice(0, this$1.index).concat(route);
	      onComplete && onComplete(route);
	    }, onAbort);
	  };

	  AbstractHistory.prototype.go = function go(n) {
	    var this$1 = this;

	    var targetIndex = this.index + n;
	    if (targetIndex < 0 || targetIndex >= this.stack.length) {
	      return;
	    }
	    var route = this.stack[targetIndex];
	    this.confirmTransition(route, function () {
	      this$1.index = targetIndex;
	      this$1.updateRoute(route);
	    });
	  };

	  AbstractHistory.prototype.getCurrentLocation = function getCurrentLocation() {
	    var current = this.stack[this.stack.length - 1];
	    return current ? current.fullPath : '/';
	  };

	  AbstractHistory.prototype.ensureURL = function ensureURL() {
	    // noop
	  };

	  return AbstractHistory;
	}(History);

	/*  */

	var VueRouter = function VueRouter(options) {
	  if (options === void 0) options = {};

	  this.app = null;
	  this.apps = [];
	  this.options = options;
	  this.beforeHooks = [];
	  this.resolveHooks = [];
	  this.afterHooks = [];
	  this.matcher = createMatcher(options.routes || [], this);

	  var mode = options.mode || 'hash';
	  this.fallback = mode === 'history' && !supportsPushState && options.fallback !== false;
	  if (this.fallback) {
	    mode = 'hash';
	  }
	  if (!inBrowser) {
	    mode = 'abstract';
	  }
	  this.mode = mode;

	  switch (mode) {
	    case 'history':
	      this.history = new HTML5History(this, options.base);
	      break;
	    case 'hash':
	      this.history = new HashHistory(this, options.base, this.fallback);
	      break;
	    case 'abstract':
	      this.history = new AbstractHistory(this, options.base);
	      break;
	    default:
	      if (process.env.NODE_ENV !== 'production') {
	        assert(false, "invalid mode: " + mode);
	      }
	  }
	};

	var prototypeAccessors = { currentRoute: {} };

	VueRouter.prototype.match = function match(raw, current, redirectedFrom) {
	  return this.matcher.match(raw, current, redirectedFrom);
	};

	prototypeAccessors.currentRoute.get = function () {
	  return this.history && this.history.current;
	};

	VueRouter.prototype.init = function init(app /* Vue component instance */) {
	  var this$1 = this;

	  process.env.NODE_ENV !== 'production' && assert(install.installed, "not installed. Make sure to call `Vue.use(VueRouter)` " + "before creating root instance.");

	  this.apps.push(app);

	  // main app already initialized.
	  if (this.app) {
	    return;
	  }

	  this.app = app;

	  var history = this.history;

	  if (history instanceof HTML5History) {
	    history.transitionTo(history.getCurrentLocation());
	  } else if (history instanceof HashHistory) {
	    var setupHashListener = function setupHashListener() {
	      history.setupListeners();
	    };
	    history.transitionTo(history.getCurrentLocation(), setupHashListener, setupHashListener);
	  }

	  history.listen(function (route) {
	    this$1.apps.forEach(function (app) {
	      app._route = route;
	    });
	  });
	};

	VueRouter.prototype.beforeEach = function beforeEach(fn) {
	  return registerHook(this.beforeHooks, fn);
	};

	VueRouter.prototype.beforeResolve = function beforeResolve(fn) {
	  return registerHook(this.resolveHooks, fn);
	};

	VueRouter.prototype.afterEach = function afterEach(fn) {
	  return registerHook(this.afterHooks, fn);
	};

	VueRouter.prototype.onReady = function onReady(cb, errorCb) {
	  this.history.onReady(cb, errorCb);
	};

	VueRouter.prototype.onError = function onError(errorCb) {
	  this.history.onError(errorCb);
	};

	VueRouter.prototype.push = function push(location, onComplete, onAbort) {
	  this.history.push(location, onComplete, onAbort);
	};

	VueRouter.prototype.replace = function replace(location, onComplete, onAbort) {
	  this.history.replace(location, onComplete, onAbort);
	};

	VueRouter.prototype.go = function go(n) {
	  this.history.go(n);
	};

	VueRouter.prototype.back = function back() {
	  this.go(-1);
	};

	VueRouter.prototype.forward = function forward() {
	  this.go(1);
	};

	VueRouter.prototype.getMatchedComponents = function getMatchedComponents(to) {
	  var route = to ? to.matched ? to : this.resolve(to).route : this.currentRoute;
	  if (!route) {
	    return [];
	  }
	  return [].concat.apply([], route.matched.map(function (m) {
	    return Object.keys(m.components).map(function (key) {
	      return m.components[key];
	    });
	  }));
	};

	VueRouter.prototype.resolve = function resolve(to, current, append) {
	  var location = normalizeLocation(to, current || this.history.current, append, this);
	  var route = this.match(location, current);
	  var fullPath = route.redirectedFrom || route.fullPath;
	  var base = this.history.base;
	  var href = createHref(base, fullPath, this.mode);
	  return {
	    location: location,
	    route: route,
	    href: href,
	    // for backwards compat
	    normalizedTo: location,
	    resolved: route
	  };
	};

	VueRouter.prototype.addRoutes = function addRoutes(routes) {
	  this.matcher.addRoutes(routes);
	  if (this.history.current !== START) {
	    this.history.transitionTo(this.history.getCurrentLocation());
	  }
	};

	Object.defineProperties(VueRouter.prototype, prototypeAccessors);

	function registerHook(list, fn) {
	  list.push(fn);
	  return function () {
	    var i = list.indexOf(fn);
	    if (i > -1) {
	      list.splice(i, 1);
	    }
	  };
	}

	function createHref(base, fullPath, mode) {
	  var path = mode === 'hash' ? '#' + fullPath : fullPath;
	  return base ? cleanPath(base + '/' + path) : path;
	}

	VueRouter.install = install;
	VueRouter.version = '2.7.0';

	if (inBrowser && window.Vue) {
	  window.Vue.use(VueRouter);
	}

	module.exports = VueRouter;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ }),
/* 3 */
/***/ (function(module, exports) {

	'use strict';

	// shim for using process in browser
	var process = module.exports = {};

	// cached from whatever global is present so that test runners that stub it
	// don't break things.  But we need to wrap it in a try catch in case it is
	// wrapped in strict mode code which doesn't define any globals.  It's inside a
	// function because try/catches deoptimize in certain engines.

	var cachedSetTimeout;
	var cachedClearTimeout;

	function defaultSetTimout() {
	    throw new Error('setTimeout has not been defined');
	}
	function defaultClearTimeout() {
	    throw new Error('clearTimeout has not been defined');
	}
	(function () {
	    try {
	        if (typeof setTimeout === 'function') {
	            cachedSetTimeout = setTimeout;
	        } else {
	            cachedSetTimeout = defaultSetTimout;
	        }
	    } catch (e) {
	        cachedSetTimeout = defaultSetTimout;
	    }
	    try {
	        if (typeof clearTimeout === 'function') {
	            cachedClearTimeout = clearTimeout;
	        } else {
	            cachedClearTimeout = defaultClearTimeout;
	        }
	    } catch (e) {
	        cachedClearTimeout = defaultClearTimeout;
	    }
	})();
	function runTimeout(fun) {
	    if (cachedSetTimeout === setTimeout) {
	        //normal enviroments in sane situations
	        return setTimeout(fun, 0);
	    }
	    // if setTimeout wasn't available but was latter defined
	    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
	        cachedSetTimeout = setTimeout;
	        return setTimeout(fun, 0);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedSetTimeout(fun, 0);
	    } catch (e) {
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
	            return cachedSetTimeout.call(null, fun, 0);
	        } catch (e) {
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
	            return cachedSetTimeout.call(this, fun, 0);
	        }
	    }
	}
	function runClearTimeout(marker) {
	    if (cachedClearTimeout === clearTimeout) {
	        //normal enviroments in sane situations
	        return clearTimeout(marker);
	    }
	    // if clearTimeout wasn't available but was latter defined
	    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
	        cachedClearTimeout = clearTimeout;
	        return clearTimeout(marker);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedClearTimeout(marker);
	    } catch (e) {
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
	            return cachedClearTimeout.call(null, marker);
	        } catch (e) {
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
	            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
	            return cachedClearTimeout.call(this, marker);
	        }
	    }
	}
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;

	function cleanUpNextTick() {
	    if (!draining || !currentQueue) {
	        return;
	    }
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}

	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = runTimeout(cleanUpNextTick);
	    draining = true;

	    var len = queue.length;
	    while (len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    runClearTimeout(timeout);
	}

	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        runTimeout(drainQueue);
	    }
	};

	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};

	function noop() {}

	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;
	process.prependListener = noop;
	process.prependOnceListener = noop;

	process.listeners = function (name) {
	    return [];
	};

	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};

	process.cwd = function () {
	    return '/';
	};
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function () {
	    return 0;
	};

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _index = __webpack_require__(5);

	var _index2 = _interopRequireDefault(_index);

	var _list = __webpack_require__(25);

	var _list2 = _interopRequireDefault(_list);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * Created by linjianxi on 2017/8/17.
	 */
	var detail = function detail(resolve) {
	  return __webpack_require__.e/* require */(1, function(__webpack_require__) { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(27)]; (resolve.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this));
	};
	var pay = function pay(resolve) {
	  return __webpack_require__.e/* require */(2, function(__webpack_require__) { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(29)]; (resolve.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this));
	};
	var test = function test(resolve) {
	  return __webpack_require__.e/* require */(3, function(__webpack_require__) { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(41)]; (resolve.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this));
	};
	var subject = function subject(resolve) {
	  return __webpack_require__.e/* require */(4, function(__webpack_require__) { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(46)]; (resolve.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this));
	};

	var routes = [{ path: '/', component: _index2.default }, { path: '/test', component: test }, { path: '/list/:id', component: _list2.default }, { path: '/product/:id', component: detail }, { path: '/pay', component: pay }, { path: '/subject', component: subject }];
	exports.default = routes;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

	
	/* styles */
	__webpack_require__(6)

	var Component = __webpack_require__(11)(
	  /* script */
	  __webpack_require__(12),
	  /* template */
	  __webpack_require__(24),
	  /* scopeId */
	  "data-v-29dd054e",
	  /* cssModules */
	  null
	)
	Component.options.__file = "D:\\东财项目集合\\weex\\account\\app\\pages\\index.vue"
	if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
	if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-29dd054e", Component.options)
	  } else {
	    hotAPI.reload("data-v-29dd054e", Component.options)
	  }
	})()}

	module.exports = Component.exports


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(7);
	if(typeof content === 'string') content = [[module.id, content, '']];
	if(content.locals) module.exports = content.locals;
	// add the styles to the DOM
	var update = __webpack_require__(9)("2cce6a2c", content, false);
	// Hot Module Replacement
	if(false) {
	 // When the styles change, update the <style> tags
	 if(!content.locals) {
	   module.hot.accept("!!../../node_modules/css-loader/index.js!../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-29dd054e&scoped=true!./index.css", function() {
	     var newContent = require("!!../../node_modules/css-loader/index.js!../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-29dd054e&scoped=true!./index.css");
	     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
	     update(newContent);
	   });
	 }
	 // When the module is disposed, remove the <style> tags
	 module.hot.dispose(function() { update(); });
	}

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(8)();
	// imports


	// module
	exports.push([module.id, "\n.account[data-v-29dd054e] {\r\n    /*position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    right: 0;\r\n    bottom: 0;*/\r\n    /*position: absolute;\r\n    width: 750px;\r\n    height: 1334px;*/\r\n    background-color: white;\r\n    display: flex;\r\n    align-items: center;\n}\n.account-container[data-v-29dd054e] {\r\n    width: 750px;\r\n   /* height: 1200px;*/\r\n    height: 1198px;\n}\n.index-font[data-v-29dd054e] {\r\n    font-size: 40px;\n}\n.account-head[data-v-29dd054e] {\r\n    width: 750px;\r\n    height: 295px;\r\n    background-color: #0096ff;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    flex-direction: row;\n}\n.account-menu[data-v-29dd054e] {\r\n    flex: 1;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\n}\n.account-menu-title[data-v-29dd054e] {\r\n    font-size: 25px;\r\n    color: #a0d7ff;\n}\n.account-menu-price[data-v-29dd054e] {\r\n    color: white;\r\n    font-size: 57px;\r\n    font-weight: bold;\r\n    padding-top: 10px;\r\n    padding-bottom: 10px;\n}\n.account-menu-btn[data-v-29dd054e] {\r\n    width: 146px;\r\n    height: 52px;\r\n    line-height: 52px;\r\n    background-color: white;\r\n    color: #0096ff;\r\n    font-size: 24px;\r\n    text-align: center;\r\n    border-bottom-left-radius: 5px;\r\n    border-bottom-right-radius: 5px;\r\n    border-top-left-radius: 5px;\r\n    border-top-right-radius: 5px;\n}\n.account-menu-left[data-v-29dd054e] {\r\n    border-right-style: solid;\r\n    border-right-width: 1;\r\n    border-right-color: #a0d7ff;\n}\n.account-menu-btn-right[data-v-29dd054e] {\r\n    background-color: #0096ff;\r\n    color: white;\r\n    border-style: solid;\r\n    border-width: 2;\r\n    border-color: white;\r\n    line-height: 46px;\n}\n.line[data-v-29dd054e] {\r\n    width: 750px;\r\n    height: 15px;\r\n    background-color: #f0f0f0;\n}\n.list-sel[data-v-29dd054e] {\r\n    width: 750px;\r\n    height: 87px;\r\n    flex-direction: row;\r\n    background-color: white;\r\n    padding-left: 24px;\r\n    padding-right: 24px;\r\n    align-items: center;\r\n    border-bottom-style: solid;\r\n    border-bottom-width: 1;\r\n    border-bottom-color: #ececec;\n}\n.now-mouth[data-v-29dd054e] {\r\n    width: 275px;\r\n    height: 87px;\r\n    flex-direction: row;\r\n    align-items: center;\n}\n.list-sel-right[data-v-29dd054e] {\r\n    flex: 1;\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: flex-end;\n}\n.list-sel-bord[data-v-29dd054e] {\r\n    border-right-style: solid;\r\n    border-right-width: 1;\r\n    border-right-color: #d5d5d5;\r\n    margin-right: 18px;\r\n    padding-right: 18px;\r\n    color: #b4b4b4;\n}\n.list-sel-bk[data-v-29dd054e] {\r\n    color: #b4b4b4;\n}\n.list-main[data-v-29dd054e] {\r\n    flex-direction: row;\r\n    align-items: center;\r\n    width: 750px;\r\n    height: 121px;\r\n    padding-right: 22px;\r\n    padding-left: 22px;\r\n    border-bottom-style: solid;\r\n    border-bottom-width: 1;\r\n    border-bottom-color: #ececec;\n}\n.list-main-left[data-v-29dd054e] {\r\n    width: 197px;\n}\n.list-main-lh-number[data-v-29dd054e] {\r\n    color: black;\r\n    justify-content: flex-end;\r\n    /* align-items: center; */\r\n    display: flex;\r\n    text-align: right;\n}\n.list-main-middle[data-v-29dd054e] {\r\n    flex: 1;\r\n    height: 86px;\n}\n.font-comm[data-v-29dd054e] {\r\n    color: #b4b4b4;\n}\n.list-main-right[data-v-29dd054e] {\r\n    width: 200px;\r\n    height: 86px;\r\n    justify-content: flex-end;\r\n    margin-top: -24px;\n}\n.list-main-right-font[data-v-29dd054e] {\r\n    text-align: right;\r\n    font-size: 22px;\r\n    margin-bottom: 5px;\n}\n.for-wh[data-v-29dd054e] {\r\n    font-size: 22px;\n}\n.font-size-comm[data-v-29dd054e] {\r\n    font-size: 25px;\n}\n.list-main-middle-desc[data-v-29dd054e] {\r\n    font-size: 26px;\r\n    color: black;\n}\n.downicon[data-v-29dd054e] {\r\n    width: 24px;\r\n    height: 15px;\r\n    margin-left: 20px;\n}\n.middle-top[data-v-29dd054e] {\r\n    flex-direction: row;\r\n    align-items: center;\n}\n.icon-comm[data-v-29dd054e] {\r\n    width: 86px;\r\n    height: 86px;\r\n    margin-right: 20px;\n}\n.apple-icon-comm[data-v-29dd054e] {\r\n    width: 86px;\r\n    height: 86px;\r\n    margin-right: 20px;\n}\n.langhua-desc[data-v-29dd054e] {\r\n    padding-top: 5px;\n}\n.mouth-main[data-v-29dd054e] {\r\n    /*position: absolute;*/\r\n    width: 750px;\r\n    height: 850px;\r\n    bottom: 0px;\r\n    background-color: rgba(1, 1, 1, 0.46);\r\n    z-index: 10;\n}\n.mouth-list[data-v-29dd054e] {\r\n    width: 750px;\r\n    background-color: white;\n}\n.mouth-li[data-v-29dd054e] {\r\n    width: 750px;\r\n    height: 100px;\r\n    border-bottom-style: solid;\r\n    border-bottom-width: 1;\r\n    border-bottom-color: #ececec;\r\n    padding-left: 23px;\r\n    display: flex;\r\n    align-items: center;\r\n    color: black;\r\n    font-size: 25px;\r\n    line-height: 100px;\n}\n.soller-list[data-v-29dd054e] {\r\n    width: 750px;\r\n    /*height: 810px;*/\n}\n.active[data-v-29dd054e] {\r\n    color: black;\n}\n.no-data[data-v-29dd054e] {\r\n    width: 750px;\r\n    height: 500px;\r\n    display: flex;\r\n    justify-content: center;\n}\n.no-data-desc[data-v-29dd054e] {\r\n    font-size: 25px;\r\n    color: #b4b4b4;\r\n    text-align: center;\n}\n.next-main[data-v-29dd054e] {\r\n    justify-content: center;\r\n    height: 100px;\n}\n.next-desc[data-v-29dd054e] {\r\n    color: #888888;\r\n    font-size: 26px;\r\n    text-align: center;\n}\n.loading[data-v-29dd054e]{\r\n    width: 750px;\r\n    flex-direction:row;\r\n    justify-content: center;\n}\n.loading-img[data-v-29dd054e]{\r\n    width: 80px;\r\n    height: 80px;\r\n    color: #3192e1;\r\n    margin: 20px;\n}", ""]);

	// exports


/***/ }),
/* 8 */
/***/ (function(module, exports) {

	"use strict";

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function () {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for (var i = 0; i < this.length; i++) {
				var item = this[i];
				if (item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function (modules, mediaQuery) {
			if (typeof modules === "string") modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for (var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if (typeof id === "number") alreadyImportedModules[id] = true;
			}
			for (i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if (typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if (mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if (mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

	/*
	  MIT License http://www.opensource.org/licenses/mit-license.php
	  Author Tobias Koppers @sokra
	  Modified by Evan You @yyx990803
	*/

	var hasDocument = typeof document !== 'undefined'

	if (false) {
	  if (!hasDocument) {
	    throw new Error(
	    'vue-style-loader cannot be used in a non-browser environment. ' +
	    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
	  ) }
	}

	var listToStyles = __webpack_require__(10)

	/*
	type StyleObject = {
	  id: number;
	  parts: Array<StyleObjectPart>
	}

	type StyleObjectPart = {
	  css: string;
	  media: string;
	  sourceMap: ?string
	}
	*/

	var stylesInDom = {/*
	  [id: number]: {
	    id: number,
	    refs: number,
	    parts: Array<(obj?: StyleObjectPart) => void>
	  }
	*/}

	var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
	var singletonElement = null
	var singletonCounter = 0
	var isProduction = false
	var noop = function () {}

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

	module.exports = function (parentId, list, _isProduction) {
	  isProduction = _isProduction

	  var styles = listToStyles(parentId, list)
	  addStylesToDom(styles)

	  return function update (newList) {
	    var mayRemove = []
	    for (var i = 0; i < styles.length; i++) {
	      var item = styles[i]
	      var domStyle = stylesInDom[item.id]
	      domStyle.refs--
	      mayRemove.push(domStyle)
	    }
	    if (newList) {
	      styles = listToStyles(parentId, newList)
	      addStylesToDom(styles)
	    } else {
	      styles = []
	    }
	    for (var i = 0; i < mayRemove.length; i++) {
	      var domStyle = mayRemove[i]
	      if (domStyle.refs === 0) {
	        for (var j = 0; j < domStyle.parts.length; j++) {
	          domStyle.parts[j]()
	        }
	        delete stylesInDom[domStyle.id]
	      }
	    }
	  }
	}

	function addStylesToDom (styles /* Array<StyleObject> */) {
	  for (var i = 0; i < styles.length; i++) {
	    var item = styles[i]
	    var domStyle = stylesInDom[item.id]
	    if (domStyle) {
	      domStyle.refs++
	      for (var j = 0; j < domStyle.parts.length; j++) {
	        domStyle.parts[j](item.parts[j])
	      }
	      for (; j < item.parts.length; j++) {
	        domStyle.parts.push(addStyle(item.parts[j]))
	      }
	      if (domStyle.parts.length > item.parts.length) {
	        domStyle.parts.length = item.parts.length
	      }
	    } else {
	      var parts = []
	      for (var j = 0; j < item.parts.length; j++) {
	        parts.push(addStyle(item.parts[j]))
	      }
	      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
	    }
	  }
	}

	function createStyleElement () {
	  var styleElement = document.createElement('style')
	  styleElement.type = 'text/css'
	  head.appendChild(styleElement)
	  return styleElement
	}

	function addStyle (obj /* StyleObjectPart */) {
	  var update, remove
	  var styleElement = document.querySelector('style[data-vue-ssr-id~="' + obj.id + '"]')

	  if (styleElement) {
	    if (isProduction) {
	      // has SSR styles and in production mode.
	      // simply do nothing.
	      return noop
	    } else {
	      // has SSR styles but in dev mode.
	      // for some reason Chrome can't handle source map in server-rendered
	      // style tags - source maps in <style> only works if the style tag is
	      // created and inserted dynamically. So we remove the server rendered
	      // styles and inject new ones.
	      styleElement.parentNode.removeChild(styleElement)
	    }
	  }

	  if (isOldIE) {
	    // use singleton mode for IE9.
	    var styleIndex = singletonCounter++
	    styleElement = singletonElement || (singletonElement = createStyleElement())
	    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
	    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
	  } else {
	    // use multi-style-tag mode in all other cases
	    styleElement = createStyleElement()
	    update = applyToTag.bind(null, styleElement)
	    remove = function () {
	      styleElement.parentNode.removeChild(styleElement)
	    }
	  }

	  update(obj)

	  return function updateStyle (newObj /* StyleObjectPart */) {
	    if (newObj) {
	      if (newObj.css === obj.css &&
	          newObj.media === obj.media &&
	          newObj.sourceMap === obj.sourceMap) {
	        return
	      }
	      update(obj = newObj)
	    } else {
	      remove()
	    }
	  }
	}

	var replaceText = (function () {
	  var textStore = []

	  return function (index, replacement) {
	    textStore[index] = replacement
	    return textStore.filter(Boolean).join('\n')
	  }
	})()

	function applyToSingletonTag (styleElement, index, remove, obj) {
	  var css = remove ? '' : obj.css

	  if (styleElement.styleSheet) {
	    styleElement.styleSheet.cssText = replaceText(index, css)
	  } else {
	    var cssNode = document.createTextNode(css)
	    var childNodes = styleElement.childNodes
	    if (childNodes[index]) styleElement.removeChild(childNodes[index])
	    if (childNodes.length) {
	      styleElement.insertBefore(cssNode, childNodes[index])
	    } else {
	      styleElement.appendChild(cssNode)
	    }
	  }
	}

	function applyToTag (styleElement, obj) {
	  var css = obj.css
	  var media = obj.media
	  var sourceMap = obj.sourceMap

	  if (media) {
	    styleElement.setAttribute('media', media)
	  }

	  if (sourceMap) {
	    // https://developer.chrome.com/devtools/docs/javascript-debugging
	    // this makes source maps inside style tags work properly in Chrome
	    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
	    // http://stackoverflow.com/a/26603875
	    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
	  }

	  if (styleElement.styleSheet) {
	    styleElement.styleSheet.cssText = css
	  } else {
	    while (styleElement.firstChild) {
	      styleElement.removeChild(styleElement.firstChild)
	    }
	    styleElement.appendChild(document.createTextNode(css))
	  }
	}


/***/ }),
/* 10 */
/***/ (function(module, exports) {

	'use strict';

	/**
	 * Translates the list format produced by css-loader into something
	 * easier to manipulate.
	 */
	module.exports = function listToStyles(parentId, list) {
	  var styles = [];
	  var newStyles = {};
	  for (var i = 0; i < list.length; i++) {
	    var item = list[i];
	    var id = item[0];
	    var css = item[1];
	    var media = item[2];
	    var sourceMap = item[3];
	    var part = {
	      id: parentId + ':' + i,
	      css: css,
	      media: media,
	      sourceMap: sourceMap
	    };
	    if (!newStyles[id]) {
	      styles.push(newStyles[id] = { id: id, parts: [part] });
	    } else {
	      newStyles[id].parts.push(part);
	    }
	  }
	  return styles;
	};

/***/ }),
/* 11 */
/***/ (function(module, exports) {

	module.exports = function normalizeComponent (
	  rawScriptExports,
	  compiledTemplate,
	  scopeId,
	  cssModules
	) {
	  var esModule
	  var scriptExports = rawScriptExports = rawScriptExports || {}

	  // ES6 modules interop
	  var type = typeof rawScriptExports.default
	  if (type === 'object' || type === 'function') {
	    esModule = rawScriptExports
	    scriptExports = rawScriptExports.default
	  }

	  // Vue.extend constructor export interop
	  var options = typeof scriptExports === 'function'
	    ? scriptExports.options
	    : scriptExports

	  // render functions
	  if (compiledTemplate) {
	    options.render = compiledTemplate.render
	    options.staticRenderFns = compiledTemplate.staticRenderFns
	  }

	  // scopedId
	  if (scopeId) {
	    options._scopeId = scopeId
	  }

	  // inject cssModules
	  if (cssModules) {
	    var computed = options.computed || (options.computed = {})
	    Object.keys(cssModules).forEach(function (key) {
	      var module = cssModules[key]
	      computed[key] = function () { return module }
	    })
	  }

	  return {
	    esModule: esModule,
	    exports: scriptExports,
	    options: options
	  }
	}


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _mixins = __webpack_require__(13);

	var _mixins2 = _interopRequireDefault(_mixins);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var modal = weex.requireModule('modal'); //
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

	exports.default = {
	  mixins: [_mixins2.default],
	  data: function data() {
	    return {
	      imgs: {
	        downIcon: __webpack_require__(19),
	        upIcon: __webpack_require__(20),
	        gitIcon: __webpack_require__(21),
	        workIcon: __webpack_require__(22),
	        appleIcon: __webpack_require__(23)
	      },
	      mouthes: {
	        show: false,
	        selectMonthText: '',
	        selectMonthValue: '',
	        monthList: []
	      },
	      link: {
	        type: '',
	        pay: ''
	      },
	      pageShow: false,
	      searchtype: 0, // //0：查浪花，1查贝壳
	      searchtypeText: '浪花',
	      pageindex: 1, //页码
	      pagesize: 50,
	      dataGrid: {
	        diamondnum: '',
	        shellnum: '',
	        list: []
	      },
	      refreshDisplay: 'show',
	      loadingDisplay: 'show'
	    };
	  },
	  created: function created() {
	    var self = this;
	    self.link.type = self.web ? 'h5' : 'weex';
	    self.link.pay = self.web ? 'pay' : 'http://hd.lvb.eastmoney.com/frontend/account/product/pay.js?v=201709181754';
	    self.tool.SET_TITLE('我的账户');
	    self.calculateMont();
	    self.getData();
	  },

	  methods: {
	    // 获取数据
	    getData: function getData() {
	      var self = this;
	      self.refreshDisplay = 'show';
	      self.request({
	        type: 'get',
	        proxy: true,
	        url: '/proxy/trans',
	        data: {
	          domain: 6,
	          api: 2,
	          method: 'json',
	          param: {
	            'date': self.mouthes.selectMonthValue, //查询月份
	            'searchtype': self.searchtype, //0：查浪花，1查贝壳
	            'pageindex': self.pageindex, //页码
	            'pagesize': self.pagesize
	          }
	        }
	      }).then(function (res) {
	        if (res.result == 1) {
	          self.refreshDisplay = 'hide';
	          self.dataGrid = res.data;
	          if (res.count > self.pagesize * self.pageindex) {
	            self.pageShow = true;
	          }
	        } else {
	          modal.alert({
	            'message': res.message
	          }, function () {});
	        }
	      });
	    },

	    mouthFun: function mouthFun() {
	      var self = this;
	      if (self.mouthes.show) {
	        self.mouthes.show = false;
	      } else {
	        self.mouthes.show = true;
	      }
	    },
	    // 选择日期
	    selectMonth: function selectMonth(v, t) {
	      var self = this;
	      self.mouthes.selectMonthValue = v;
	      self.mouthes.selectMonthText = t;
	      self.mouthes.show = false;
	      this.getData();
	    },
	    // 计算日期
	    calculateMont: function calculateMont() {
	      var self = this;
	      var onlyNum = 4; // 只显示4个月
	      var d = new Date();
	      var month = d.getMonth() + 1;
	      var year = d.getFullYear();
	      if (month < onlyNum) {
	        if (month == onlyNum - 1) {
	          // 2月
	          for (var i = 0; i < onlyNum; i++) {
	            var diff = month - i;
	            if (diff > 0) {
	              self.mouthes.monthList.push({ text: i == 0 ? '本月' : diff + '月', value: year + '-' + diff });
	            } else {
	              self.mouthes.monthList.push({ text: year - 1 + '年' + '12' + '月', value: year - 1 + '-' + '12' });
	            }
	          }
	        } else {
	          // 1月
	          var lastMonth = 12;
	          for (var i = 0; i < onlyNum; i++) {
	            var diff = month - i;
	            if (diff > 0) {
	              self.mouthes.monthList.push({ text: i == 0 ? '本月' : month + '月', value: year + '-' + month });
	            } else {
	              self.mouthes.monthList.push({ text: year - 1 + '年' + lastMonth + '月', value: year - 1 + '-' + lastMonth });
	              lastMonth--;
	            }
	          }
	        }
	      } else {
	        for (var i = 0; i < onlyNum; i++) {
	          var m = month - i;
	          self.mouthes.monthList.push({ text: i == 0 ? '本月' : m + '月', value: year + '-' + m });
	        }
	      }
	      self.mouthes.selectMonthText = '本月';
	      self.mouthes.selectMonthValue = year + '-' + month;
	    },

	    // 切换 浪花 和贝壳
	    checkType: function checkType(searchtype) {
	      this.searchtype = searchtype;
	      if (searchtype === 0) {
	        this.searchtypeText = '浪花';
	      } else {
	        this.searchtypeText = '贝壳';
	      }
	      this.getData();
	    },
	    onloadMore: function onloadMore() {
	      this.pageindex++;
	      this.getData();
	    },

	    // 做任务
	    tasks: function tasks() {
	      var encounter = 'emlive://haitunlive.com/first?params={"destClass":"shellmissionlist"}';
	      this.tool.OPOEN_WEEX_NATIVE(encounter);
	    }
	  }
	};

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var _weexVueRouter = __webpack_require__(14);

	var _weexVueRouter2 = _interopRequireDefault(_weexVueRouter);

	var _nativeRouter = __webpack_require__(15);

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
	    self.tool = __webpack_require__(16)(self.web, self.ios);
	    if (weex.config.params && weex.config.params.is_test != 'true') {
	      self.apiDomain = 'http://hd.lvb.eastmoney.com';
	    } else {
	      self.apiDomain = 'http://hd-qas.lvb.eastmoney.com';
	    }
	    self.is_test = weex.config.params && weex.config.params.is_test == 'true';
	    if (self.web) {
	      cookie = __webpack_require__(17);
	      __webpack_require__(18)(self.ios, cookie);
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
/* 14 */
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
/* 15 */
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
/* 16 */
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
/* 17 */
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
/* 18 */
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
/* 19 */
/***/ (function(module, exports) {

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAVCAYAAAAuJkyQAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpDNTUyOUExMzFGNDgxMUU3QjA0Njg0MjAyQkQ1M0Y1MyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpDNTUyOUExNDFGNDgxMUU3QjA0Njg0MjAyQkQ1M0Y1MyI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkM1NTI5QTExMUY0ODExRTdCMDQ2ODQyMDJCRDUzRjUzIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkM1NTI5QTEyMUY0ODExRTdCMDQ2ODQyMDJCRDUzRjUzIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+O68fewAAAXFJREFUeNq81oGRgjAQBdAcYwO0YAtcCV4JZwmmBCwBSkhKoAVpwRZsgRK4De7efDNEkxjMTEZEII8l/Pg1z7Pq+75RSl3UvX23bXtTkY3OVW+2E3VD3dK4uuKdv9Rr7gMNUqvPNMEs2zTuYQGR7EwfI/+wVOsDqAYwrmlyjBXsOFK/wsHdxpiLh7Fu4x9EOyb6+AGUK6HZECNP4CyYBxCgNPUJUG1BzDJHAeMm8sNbUfln0AFXrpSgOkKdCmFcZfaC4ZtXT0GAOsIu496AApiGv49rmCCIUf5JA+dVTusA499sHIhRWNaa42CfiDGcN4LB6ZAGApTFSZmQUR1gbq8wUSBGaUDFBqeDyBs68WOaXo1VxdadUWNkcOKS4OdbGdBKmoeC8+AtCdGYZNBamsNjkcoNuCSkYHIqtJbmMnH9JQHn3XagQJqbEphsUCDNa1gSbO51s0GBNLehJSG27QosmphP+t2LlQAJqsg/zD8BBgCCh4mbsIm61AAAAABJRU5ErkJggg=="

/***/ }),
/* 20 */
/***/ (function(module, exports) {

	module.exports = "data:image/png;base64,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"

/***/ }),
/* 21 */
/***/ (function(module, exports) {

	module.exports = "data:image/png;base64,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"

/***/ }),
/* 22 */
/***/ (function(module, exports) {

	module.exports = "data:image/png;base64,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"

/***/ }),
/* 23 */
/***/ (function(module, exports) {

	module.exports = "data:image/png;base64,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"

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('scroller', {
	    staticClass: "account"
	  }, [(!_vm.web) ? _c('refresh', {
	    staticClass: "loading",
	    attrs: {
	      "display": _vm.refreshDisplay
	    },
	    on: {
	      "refresh": _vm.getData
	    }
	  }, [_c('loading-indicator', {
	    staticClass: "loading-img"
	  })], 1) : _vm._e(), _vm._v(" "), _c('div', {
	    staticClass: "account-container",
	    style: ({
	      height: _vm.ios ? '1250px' : '1198px'
	    })
	  }, [_c('div', {
	    staticClass: "account-head"
	  }, [_c('div', {
	    staticClass: "account-menu account-menu-left"
	  }, [_c('text', {
	    staticClass: "account-menu-title"
	  }, [_vm._v("浪花")]), _vm._v(" "), _c('text', {
	    staticClass: "account-menu-price"
	  }, [_vm._v(_vm._s(_vm.dataGrid.diamondnum))]), _vm._v(" "), _c('text', {
	    staticClass: "account-menu-btn",
	    on: {
	      "click": function($event) {
	        _vm.jump(_vm.link.pay, _vm.link.type, 'pay')
	      }
	    }
	  }, [_vm._v("充值")])]), _vm._v(" "), _c('div', {
	    staticClass: "account-menu"
	  }, [_c('text', {
	    staticClass: "account-menu-title"
	  }, [_vm._v("贝壳")]), _vm._v(" "), _c('text', {
	    staticClass: "account-menu-price"
	  }, [_vm._v(_vm._s(_vm.dataGrid.shellnum))]), _vm._v(" "), _c('text', {
	    staticClass: "account-menu-btn account-menu-btn-right",
	    on: {
	      "click": function($event) {
	        _vm.tasks()
	      }
	    }
	  }, [_vm._v("做任务")])])]), _vm._v(" "), _c('div', {
	    staticClass: "line"
	  }), _vm._v(" "), _c('div', {
	    staticClass: "list-sel"
	  }, [_c('div', {
	    staticClass: "now-mouth",
	    on: {
	      "click": function($event) {
	        _vm.mouthFun()
	      }
	    }
	  }, [_c('text', {
	    staticClass: "font-size-comm"
	  }, [_vm._v(_vm._s(_vm.mouthes.selectMonthText))]), _vm._v(" "), (!_vm.mouthes.show) ? _c('image', {
	    staticClass: "downicon",
	    attrs: {
	      "src": _vm.imgs.downIcon,
	      "resize": "cover"
	    }
	  }) : _vm._e(), _vm._v(" "), (_vm.mouthes.show) ? _c('image', {
	    staticClass: "downicon",
	    attrs: {
	      "src": _vm.imgs.upIcon,
	      "resize": "cover"
	    }
	  }) : _vm._e()]), _vm._v(" "), _c('div', {
	    staticClass: "list-sel-right"
	  }, [_c('text', {
	    class: ['list-sel-bord', 'font-size-comm', _vm.searchtype === 0 ? 'active' : ''],
	    on: {
	      "click": function($event) {
	        _vm.checkType(0)
	      }
	    }
	  }, [_vm._v("浪花")]), _vm._v(" "), _c('text', {
	    class: ['list-sel-bk', 'font-size-comm', _vm.searchtype === 1 ? 'active' : ''],
	    on: {
	      "click": function($event) {
	        _vm.checkType(1)
	      }
	    }
	  }, [_vm._v("贝壳")])])]), _vm._v(" "), _c('scroller', {
	    staticClass: "soller-list"
	  }, [_vm._l((_vm.dataGrid.list), function(items) {
	    return (_vm.dataGrid.list.length > 0) ? _c('div', {
	      staticClass: "list-main"
	    }, [_c('div', {
	      staticClass: "list-main-middle"
	    }, [_c('div', {
	      staticClass: "middle-top"
	    }, [(items.type === 2) ? _c('image', {
	      staticClass: "icon-comm",
	      attrs: {
	        "src": _vm.imgs.gitIcon,
	        "resize": "cover"
	      }
	    }) : _vm._e(), _vm._v(" "), (items.type === 1) ? _c('image', {
	      staticClass: "apple-icon-comm",
	      attrs: {
	        "src": _vm.imgs.appleIcon,
	        "resize": "cover"
	      }
	    }) : _vm._e(), _vm._v(" "), (items.type === 0) ? _c('image', {
	      staticClass: "icon-comm",
	      attrs: {
	        "src": _vm.imgs.workIcon,
	        "resize": "cover"
	      }
	    }) : _vm._e(), _vm._v(" "), _c('text', {
	      staticClass: "font-comm list-main-middle-desc"
	    }, [_vm._v(_vm._s(items.reason))])])]), _vm._v(" "), _c('div', {
	      staticClass: "list-main-right"
	    }, [_c('text', {
	      staticClass: "list-main-lh-number font-size-comm"
	    }, [_vm._v(_vm._s(items.money) + _vm._s(_vm.searchtypeText))]), _vm._v(" "), _c('text', {
	      staticClass: "list-main-right-font font-comm"
	    }, [_vm._v(_vm._s(items.date))])])]) : _vm._e()
	  }), _vm._v(" "), (_vm.pageShow) ? _c('div', {
	    staticClass: "next-main"
	  }, [_c('text', {
	    staticClass: "next-desc",
	    on: {
	      "click": _vm.onloadMore
	    }
	  }, [_vm._v("点击加载更多")])]) : _vm._e(), _vm._v(" "), (_vm.dataGrid.list.length == 0) ? _c('div', {
	    staticClass: "no-data"
	  }, [_c('text', {
	    staticClass: "no-data-desc"
	  }, [_vm._v("暂无数据")])]) : _vm._e()], 2), _vm._v(" "), (_vm.mouthes.show) ? _c('div', {
	    staticClass: "mouth-main",
	    style: ({
	      bottom: !_vm.web ? '0px' : '0px'
	    })
	  }, [_c('div', {
	    staticClass: "mouth-list"
	  }, _vm._l((_vm.mouthes.monthList), function(m) {
	    return _c('text', {
	      staticClass: "mouth-li",
	      on: {
	        "click": function($event) {
	          _vm.selectMonth(m.value, m.text)
	        }
	      }
	    }, [_vm._v(_vm._s(m.text))])
	  }))]) : _vm._e()], 1)], 1)
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-29dd054e", module.exports)
	  }
	}

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

	var Component = __webpack_require__(11)(
	  /* script */
	  null,
	  /* template */
	  __webpack_require__(26),
	  /* scopeId */
	  null,
	  /* cssModules */
	  null
	)
	Component.options.__file = "D:\\东财项目集合\\weex\\account\\app\\pages\\product\\list.vue"
	if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
	if (Component.options.functional) {console.error("[vue-loader] list.vue: functional components are not supported with templates, they should use render functions.")}

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-949040f2", Component.options)
	  } else {
	    hotAPI.reload("data-v-949040f2", Component.options)
	  }
	})()}

	module.exports = Component.exports


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', [_c('text', [_vm._v("list")])])
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-949040f2", module.exports)
	  }
	}

/***/ })
/******/ ]);