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
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(1);

	var _nativeEvent = __webpack_require__(3);

	var _nativeEvent2 = _interopRequireDefault(_nativeEvent);

	var _weexVueGlobalEvent = __webpack_require__(4);

	var _weexVueGlobalEvent2 = _interopRequireDefault(_weexVueGlobalEvent);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	weex.install(_weexVueGlobalEvent2.default);
	weex.registerModule('nativeEvent', _nativeEvent2.default);

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(process, global) {'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	/* 'WEEX VUE RENDER undefined, Build 2017-02-13 14:30. */

	(function (global, factory) {
	  ( false ? 'undefined' : _typeof(exports)) === 'object' && typeof module !== 'undefined' ? module.exports = factory() :  true ? !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : global.WeexVueRender = factory();
	})(undefined, function () {
	  'use strict';

	  function __$styleInject(css, returnValue) {
	    if (typeof document === 'undefined') {
	      return returnValue;
	    }
	    css = css || '';
	    var head = document.head || document.getElementsByTagName('head')[0];
	    var style = document.createElement('style');
	    style.type = 'text/css';
	    if (style.styleSheet) {
	      style.styleSheet.cssText = css;
	    } else {
	      style.appendChild(document.createTextNode(css));
	    }
	    head.appendChild(style);
	    return returnValue;
	  }
	  function createCommonjsModule(fn, module) {
	    return module = { exports: {} }, fn(module, module.exports), module.exports;
	  }

	  var semver = createCommonjsModule(function (module, exports) {
	    exports = module.exports = SemVer;

	    // The debug function is excluded entirely from the minified version.
	    /* nomin */var debug;
	    /* nomin */if ((typeof process === 'undefined' ? 'undefined' : _typeof(process)) === 'object' &&
	    /* nomin */process.env &&
	    /* nomin */false &&
	    /* nomin *//\bsemver\b/i.test(false))
	      /* nomin */{
	        debug = function debug() {
	          /* nomin */var args = Array.prototype.slice.call(arguments, 0);
	          /* nomin */args.unshift('SEMVER');
	          /* nomin */console.log.apply(console, args);
	          /* nomin */
	        };
	      }
	      /* nomin */else
	      /* nomin */{
	        debug = function debug() {};
	      }

	    // Note: this is the semver.org version of the spec that it implements
	    // Not necessarily the package version of this code.
	    exports.SEMVER_SPEC_VERSION = '2.0.0';

	    var MAX_LENGTH = 256;
	    var MAX_SAFE_INTEGER = Number.MAX_SAFE_INTEGER || 9007199254740991;

	    // The actual regexps go on exports.re
	    var re = exports.re = [];
	    var src = exports.src = [];
	    var R = 0;

	    // The following Regular Expressions can be used for tokenizing,
	    // validating, and parsing SemVer version strings.

	    // ## Numeric Identifier
	    // A single `0`, or a non-zero digit followed by zero or more digits.

	    var NUMERICIDENTIFIER = R++;
	    src[NUMERICIDENTIFIER] = '0|[1-9]\\d*';
	    var NUMERICIDENTIFIERLOOSE = R++;
	    src[NUMERICIDENTIFIERLOOSE] = '[0-9]+';

	    // ## Non-numeric Identifier
	    // Zero or more digits, followed by a letter or hyphen, and then zero or
	    // more letters, digits, or hyphens.

	    var NONNUMERICIDENTIFIER = R++;
	    src[NONNUMERICIDENTIFIER] = '\\d*[a-zA-Z-][a-zA-Z0-9-]*';

	    // ## Main Version
	    // Three dot-separated numeric identifiers.

	    var MAINVERSION = R++;
	    src[MAINVERSION] = '(' + src[NUMERICIDENTIFIER] + ')\\.' + '(' + src[NUMERICIDENTIFIER] + ')\\.' + '(' + src[NUMERICIDENTIFIER] + ')';

	    var MAINVERSIONLOOSE = R++;
	    src[MAINVERSIONLOOSE] = '(' + src[NUMERICIDENTIFIERLOOSE] + ')\\.' + '(' + src[NUMERICIDENTIFIERLOOSE] + ')\\.' + '(' + src[NUMERICIDENTIFIERLOOSE] + ')';

	    // ## Pre-release Version Identifier
	    // A numeric identifier, or a non-numeric identifier.

	    var PRERELEASEIDENTIFIER = R++;
	    src[PRERELEASEIDENTIFIER] = '(?:' + src[NUMERICIDENTIFIER] + '|' + src[NONNUMERICIDENTIFIER] + ')';

	    var PRERELEASEIDENTIFIERLOOSE = R++;
	    src[PRERELEASEIDENTIFIERLOOSE] = '(?:' + src[NUMERICIDENTIFIERLOOSE] + '|' + src[NONNUMERICIDENTIFIER] + ')';

	    // ## Pre-release Version
	    // Hyphen, followed by one or more dot-separated pre-release version
	    // identifiers.

	    var PRERELEASE = R++;
	    src[PRERELEASE] = '(?:-(' + src[PRERELEASEIDENTIFIER] + '(?:\\.' + src[PRERELEASEIDENTIFIER] + ')*))';

	    var PRERELEASELOOSE = R++;
	    src[PRERELEASELOOSE] = '(?:-?(' + src[PRERELEASEIDENTIFIERLOOSE] + '(?:\\.' + src[PRERELEASEIDENTIFIERLOOSE] + ')*))';

	    // ## Build Metadata Identifier
	    // Any combination of digits, letters, or hyphens.

	    var BUILDIDENTIFIER = R++;
	    src[BUILDIDENTIFIER] = '[0-9A-Za-z-]+';

	    // ## Build Metadata
	    // Plus sign, followed by one or more period-separated build metadata
	    // identifiers.

	    var BUILD = R++;
	    src[BUILD] = '(?:\\+(' + src[BUILDIDENTIFIER] + '(?:\\.' + src[BUILDIDENTIFIER] + ')*))';

	    // ## Full Version String
	    // A main version, followed optionally by a pre-release version and
	    // build metadata.

	    // Note that the only major, minor, patch, and pre-release sections of
	    // the version string are capturing groups.  The build metadata is not a
	    // capturing group, because it should not ever be used in version
	    // comparison.

	    var FULL = R++;
	    var FULLPLAIN = 'v?' + src[MAINVERSION] + src[PRERELEASE] + '?' + src[BUILD] + '?';

	    src[FULL] = '^' + FULLPLAIN + '$';

	    // like full, but allows v1.2.3 and =1.2.3, which people do sometimes.
	    // also, 1.0.0alpha1 (prerelease without the hyphen) which is pretty
	    // common in the npm registry.
	    var LOOSEPLAIN = '[v=\\s]*' + src[MAINVERSIONLOOSE] + src[PRERELEASELOOSE] + '?' + src[BUILD] + '?';

	    var LOOSE = R++;
	    src[LOOSE] = '^' + LOOSEPLAIN + '$';

	    var GTLT = R++;
	    src[GTLT] = '((?:<|>)?=?)';

	    // Something like "2.*" or "1.2.x".
	    // Note that "x.x" is a valid xRange identifer, meaning "any version"
	    // Only the first item is strictly required.
	    var XRANGEIDENTIFIERLOOSE = R++;
	    src[XRANGEIDENTIFIERLOOSE] = src[NUMERICIDENTIFIERLOOSE] + '|x|X|\\*';
	    var XRANGEIDENTIFIER = R++;
	    src[XRANGEIDENTIFIER] = src[NUMERICIDENTIFIER] + '|x|X|\\*';

	    var XRANGEPLAIN = R++;
	    src[XRANGEPLAIN] = '[v=\\s]*(' + src[XRANGEIDENTIFIER] + ')' + '(?:\\.(' + src[XRANGEIDENTIFIER] + ')' + '(?:\\.(' + src[XRANGEIDENTIFIER] + ')' + '(?:' + src[PRERELEASE] + ')?' + src[BUILD] + '?' + ')?)?';

	    var XRANGEPLAINLOOSE = R++;
	    src[XRANGEPLAINLOOSE] = '[v=\\s]*(' + src[XRANGEIDENTIFIERLOOSE] + ')' + '(?:\\.(' + src[XRANGEIDENTIFIERLOOSE] + ')' + '(?:\\.(' + src[XRANGEIDENTIFIERLOOSE] + ')' + '(?:' + src[PRERELEASELOOSE] + ')?' + src[BUILD] + '?' + ')?)?';

	    var XRANGE = R++;
	    src[XRANGE] = '^' + src[GTLT] + '\\s*' + src[XRANGEPLAIN] + '$';
	    var XRANGELOOSE = R++;
	    src[XRANGELOOSE] = '^' + src[GTLT] + '\\s*' + src[XRANGEPLAINLOOSE] + '$';

	    // Tilde ranges.
	    // Meaning is "reasonably at or greater than"
	    var LONETILDE = R++;
	    src[LONETILDE] = '(?:~>?)';

	    var TILDETRIM = R++;
	    src[TILDETRIM] = '(\\s*)' + src[LONETILDE] + '\\s+';
	    re[TILDETRIM] = new RegExp(src[TILDETRIM], 'g');
	    var tildeTrimReplace = '$1~';

	    var TILDE = R++;
	    src[TILDE] = '^' + src[LONETILDE] + src[XRANGEPLAIN] + '$';
	    var TILDELOOSE = R++;
	    src[TILDELOOSE] = '^' + src[LONETILDE] + src[XRANGEPLAINLOOSE] + '$';

	    // Caret ranges.
	    // Meaning is "at least and backwards compatible with"
	    var LONECARET = R++;
	    src[LONECARET] = '(?:\\^)';

	    var CARETTRIM = R++;
	    src[CARETTRIM] = '(\\s*)' + src[LONECARET] + '\\s+';
	    re[CARETTRIM] = new RegExp(src[CARETTRIM], 'g');
	    var caretTrimReplace = '$1^';

	    var CARET = R++;
	    src[CARET] = '^' + src[LONECARET] + src[XRANGEPLAIN] + '$';
	    var CARETLOOSE = R++;
	    src[CARETLOOSE] = '^' + src[LONECARET] + src[XRANGEPLAINLOOSE] + '$';

	    // A simple gt/lt/eq thing, or just "" to indicate "any version"
	    var COMPARATORLOOSE = R++;
	    src[COMPARATORLOOSE] = '^' + src[GTLT] + '\\s*(' + LOOSEPLAIN + ')$|^$';
	    var COMPARATOR = R++;
	    src[COMPARATOR] = '^' + src[GTLT] + '\\s*(' + FULLPLAIN + ')$|^$';

	    // An expression to strip any whitespace between the gtlt and the thing
	    // it modifies, so that `> 1.2.3` ==> `>1.2.3`
	    var COMPARATORTRIM = R++;
	    src[COMPARATORTRIM] = '(\\s*)' + src[GTLT] + '\\s*(' + LOOSEPLAIN + '|' + src[XRANGEPLAIN] + ')';

	    // this one has to use the /g flag
	    re[COMPARATORTRIM] = new RegExp(src[COMPARATORTRIM], 'g');
	    var comparatorTrimReplace = '$1$2$3';

	    // Something like `1.2.3 - 1.2.4`
	    // Note that these all use the loose form, because they'll be
	    // checked against either the strict or loose comparator form
	    // later.
	    var HYPHENRANGE = R++;
	    src[HYPHENRANGE] = '^\\s*(' + src[XRANGEPLAIN] + ')' + '\\s+-\\s+' + '(' + src[XRANGEPLAIN] + ')' + '\\s*$';

	    var HYPHENRANGELOOSE = R++;
	    src[HYPHENRANGELOOSE] = '^\\s*(' + src[XRANGEPLAINLOOSE] + ')' + '\\s+-\\s+' + '(' + src[XRANGEPLAINLOOSE] + ')' + '\\s*$';

	    // Star ranges basically just allow anything at all.
	    var STAR = R++;
	    src[STAR] = '(<|>)?=?\\s*\\*';

	    // Compile to actual regexp objects.
	    // All are flag-free, unless they were created above with a flag.
	    for (var i = 0; i < R; i++) {
	      debug(i, src[i]);
	      if (!re[i]) {
	        re[i] = new RegExp(src[i]);
	      }
	    }

	    exports.parse = parse;
	    function parse(version, loose) {
	      if (version instanceof SemVer) {
	        return version;
	      }

	      if (typeof version !== 'string') {
	        return null;
	      }

	      if (version.length > MAX_LENGTH) {
	        return null;
	      }

	      var r = loose ? re[LOOSE] : re[FULL];
	      if (!r.test(version)) {
	        return null;
	      }

	      try {
	        return new SemVer(version, loose);
	      } catch (er) {
	        return null;
	      }
	    }

	    exports.valid = valid;
	    function valid(version, loose) {
	      var v = parse(version, loose);
	      return v ? v.version : null;
	    }

	    exports.clean = clean;
	    function clean(version, loose) {
	      var s = parse(version.trim().replace(/^[=v]+/, ''), loose);
	      return s ? s.version : null;
	    }

	    exports.SemVer = SemVer;

	    function SemVer(version, loose) {
	      if (version instanceof SemVer) {
	        if (version.loose === loose) {
	          return version;
	        } else {
	          version = version.version;
	        }
	      } else if (typeof version !== 'string') {
	        throw new TypeError('Invalid Version: ' + version);
	      }

	      if (version.length > MAX_LENGTH) {
	        throw new TypeError('version is longer than ' + MAX_LENGTH + ' characters');
	      }

	      if (!(this instanceof SemVer)) {
	        return new SemVer(version, loose);
	      }

	      debug('SemVer', version, loose);
	      this.loose = loose;
	      var m = version.trim().match(loose ? re[LOOSE] : re[FULL]);

	      if (!m) {
	        throw new TypeError('Invalid Version: ' + version);
	      }

	      this.raw = version;

	      // these are actually numbers
	      this.major = +m[1];
	      this.minor = +m[2];
	      this.patch = +m[3];

	      if (this.major > MAX_SAFE_INTEGER || this.major < 0) {
	        throw new TypeError('Invalid major version');
	      }

	      if (this.minor > MAX_SAFE_INTEGER || this.minor < 0) {
	        throw new TypeError('Invalid minor version');
	      }

	      if (this.patch > MAX_SAFE_INTEGER || this.patch < 0) {
	        throw new TypeError('Invalid patch version');
	      }

	      // numberify any prerelease numeric ids
	      if (!m[4]) {
	        this.prerelease = [];
	      } else {
	        this.prerelease = m[4].split('.').map(function (id) {
	          if (/^[0-9]+$/.test(id)) {
	            var num = +id;
	            if (num >= 0 && num < MAX_SAFE_INTEGER) {
	              return num;
	            }
	          }
	          return id;
	        });
	      }

	      this.build = m[5] ? m[5].split('.') : [];
	      this.format();
	    }

	    SemVer.prototype.format = function () {
	      this.version = this.major + '.' + this.minor + '.' + this.patch;
	      if (this.prerelease.length) {
	        this.version += '-' + this.prerelease.join('.');
	      }
	      return this.version;
	    };

	    SemVer.prototype.toString = function () {
	      return this.version;
	    };

	    SemVer.prototype.compare = function (other) {
	      debug('SemVer.compare', this.version, this.loose, other);
	      if (!(other instanceof SemVer)) {
	        other = new SemVer(other, this.loose);
	      }

	      return this.compareMain(other) || this.comparePre(other);
	    };

	    SemVer.prototype.compareMain = function (other) {
	      if (!(other instanceof SemVer)) {
	        other = new SemVer(other, this.loose);
	      }

	      return compareIdentifiers(this.major, other.major) || compareIdentifiers(this.minor, other.minor) || compareIdentifiers(this.patch, other.patch);
	    };

	    SemVer.prototype.comparePre = function (other) {
	      var this$1 = this;

	      if (!(other instanceof SemVer)) {
	        other = new SemVer(other, this.loose);
	      }

	      // NOT having a prerelease is > having one
	      if (this.prerelease.length && !other.prerelease.length) {
	        return -1;
	      } else if (!this.prerelease.length && other.prerelease.length) {
	        return 1;
	      } else if (!this.prerelease.length && !other.prerelease.length) {
	        return 0;
	      }

	      var i = 0;
	      do {
	        var a = this$1.prerelease[i];
	        var b = other.prerelease[i];
	        debug('prerelease compare', i, a, b);
	        if (a === undefined && b === undefined) {
	          return 0;
	        } else if (b === undefined) {
	          return 1;
	        } else if (a === undefined) {
	          return -1;
	        } else if (a === b) {
	          continue;
	        } else {
	          return compareIdentifiers(a, b);
	        }
	      } while (++i);
	    };

	    // preminor will bump the version up to the next minor release, and immediately
	    // down to pre-release. premajor and prepatch work the same way.
	    SemVer.prototype.inc = function (release, identifier) {
	      var this$1 = this;

	      switch (release) {
	        case 'premajor':
	          this.prerelease.length = 0;
	          this.patch = 0;
	          this.minor = 0;
	          this.major++;
	          this.inc('pre', identifier);
	          break;
	        case 'preminor':
	          this.prerelease.length = 0;
	          this.patch = 0;
	          this.minor++;
	          this.inc('pre', identifier);
	          break;
	        case 'prepatch':
	          // If this is already a prerelease, it will bump to the next version
	          // drop any prereleases that might already exist, since they are not
	          // relevant at this point.
	          this.prerelease.length = 0;
	          this.inc('patch', identifier);
	          this.inc('pre', identifier);
	          break;
	        // If the input is a non-prerelease version, this acts the same as
	        // prepatch.
	        case 'prerelease':
	          if (this.prerelease.length === 0) {
	            this.inc('patch', identifier);
	          }
	          this.inc('pre', identifier);
	          break;

	        case 'major':
	          // If this is a pre-major version, bump up to the same major version.
	          // Otherwise increment major.
	          // 1.0.0-5 bumps to 1.0.0
	          // 1.1.0 bumps to 2.0.0
	          if (this.minor !== 0 || this.patch !== 0 || this.prerelease.length === 0) {
	            this.major++;
	          }
	          this.minor = 0;
	          this.patch = 0;
	          this.prerelease = [];
	          break;
	        case 'minor':
	          // If this is a pre-minor version, bump up to the same minor version.
	          // Otherwise increment minor.
	          // 1.2.0-5 bumps to 1.2.0
	          // 1.2.1 bumps to 1.3.0
	          if (this.patch !== 0 || this.prerelease.length === 0) {
	            this.minor++;
	          }
	          this.patch = 0;
	          this.prerelease = [];
	          break;
	        case 'patch':
	          // If this is not a pre-release version, it will increment the patch.
	          // If it is a pre-release it will bump up to the same patch version.
	          // 1.2.0-5 patches to 1.2.0
	          // 1.2.0 patches to 1.2.1
	          if (this.prerelease.length === 0) {
	            this.patch++;
	          }
	          this.prerelease = [];
	          break;
	        // This probably shouldn't be used publicly.
	        // 1.0.0 "pre" would become 1.0.0-0 which is the wrong direction.
	        case 'pre':
	          if (this.prerelease.length === 0) {
	            this.prerelease = [0];
	          } else {
	            var i = this.prerelease.length;
	            while (--i >= 0) {
	              if (typeof this$1.prerelease[i] === 'number') {
	                this$1.prerelease[i]++;
	                i = -2;
	              }
	            }
	            if (i === -1) // didn't increment anything
	              {
	                this.prerelease.push(0);
	              }
	          }
	          if (identifier) {
	            // 1.2.0-beta.1 bumps to 1.2.0-beta.2,
	            // 1.2.0-beta.fooblz or 1.2.0-beta bumps to 1.2.0-beta.0
	            if (this.prerelease[0] === identifier) {
	              if (isNaN(this.prerelease[1])) {
	                this.prerelease = [identifier, 0];
	              }
	            } else {
	              this.prerelease = [identifier, 0];
	            }
	          }
	          break;

	        default:
	          throw new Error('invalid increment argument: ' + release);
	      }
	      this.format();
	      this.raw = this.version;
	      return this;
	    };

	    exports.inc = inc;
	    function inc(version, release, loose, identifier) {
	      if (typeof loose === 'string') {
	        identifier = loose;
	        loose = undefined;
	      }

	      try {
	        return new SemVer(version, loose).inc(release, identifier).version;
	      } catch (er) {
	        return null;
	      }
	    }

	    exports.diff = diff;
	    function diff(version1, version2) {
	      if (eq(version1, version2)) {
	        return null;
	      } else {
	        var v1 = parse(version1);
	        var v2 = parse(version2);
	        if (v1.prerelease.length || v2.prerelease.length) {
	          for (var key in v1) {
	            if (key === 'major' || key === 'minor' || key === 'patch') {
	              if (v1[key] !== v2[key]) {
	                return 'pre' + key;
	              }
	            }
	          }
	          return 'prerelease';
	        }
	        for (var key in v1) {
	          if (key === 'major' || key === 'minor' || key === 'patch') {
	            if (v1[key] !== v2[key]) {
	              return key;
	            }
	          }
	        }
	      }
	    }

	    exports.compareIdentifiers = compareIdentifiers;

	    var numeric = /^[0-9]+$/;
	    function compareIdentifiers(a, b) {
	      var anum = numeric.test(a);
	      var bnum = numeric.test(b);

	      if (anum && bnum) {
	        a = +a;
	        b = +b;
	      }

	      return anum && !bnum ? -1 : bnum && !anum ? 1 : a < b ? -1 : a > b ? 1 : 0;
	    }

	    exports.rcompareIdentifiers = rcompareIdentifiers;
	    function rcompareIdentifiers(a, b) {
	      return compareIdentifiers(b, a);
	    }

	    exports.major = major;
	    function major(a, loose) {
	      return new SemVer(a, loose).major;
	    }

	    exports.minor = minor;
	    function minor(a, loose) {
	      return new SemVer(a, loose).minor;
	    }

	    exports.patch = patch;
	    function patch(a, loose) {
	      return new SemVer(a, loose).patch;
	    }

	    exports.compare = compare;
	    function compare(a, b, loose) {
	      return new SemVer(a, loose).compare(b);
	    }

	    exports.compareLoose = compareLoose;
	    function compareLoose(a, b) {
	      return compare(a, b, true);
	    }

	    exports.rcompare = rcompare;
	    function rcompare(a, b, loose) {
	      return compare(b, a, loose);
	    }

	    exports.sort = sort;
	    function sort(list, loose) {
	      return list.sort(function (a, b) {
	        return exports.compare(a, b, loose);
	      });
	    }

	    exports.rsort = rsort;
	    function rsort(list, loose) {
	      return list.sort(function (a, b) {
	        return exports.rcompare(a, b, loose);
	      });
	    }

	    exports.gt = gt;
	    function gt(a, b, loose) {
	      return compare(a, b, loose) > 0;
	    }

	    exports.lt = lt;
	    function lt(a, b, loose) {
	      return compare(a, b, loose) < 0;
	    }

	    exports.eq = eq;
	    function eq(a, b, loose) {
	      return compare(a, b, loose) === 0;
	    }

	    exports.neq = neq;
	    function neq(a, b, loose) {
	      return compare(a, b, loose) !== 0;
	    }

	    exports.gte = gte;
	    function gte(a, b, loose) {
	      return compare(a, b, loose) >= 0;
	    }

	    exports.lte = lte;
	    function lte(a, b, loose) {
	      return compare(a, b, loose) <= 0;
	    }

	    exports.cmp = cmp;
	    function cmp(a, op, b, loose) {
	      var ret;
	      switch (op) {
	        case '===':
	          if ((typeof a === 'undefined' ? 'undefined' : _typeof(a)) === 'object') {
	            a = a.version;
	          }
	          if ((typeof b === 'undefined' ? 'undefined' : _typeof(b)) === 'object') {
	            b = b.version;
	          }
	          ret = a === b;
	          break;
	        case '!==':
	          if ((typeof a === 'undefined' ? 'undefined' : _typeof(a)) === 'object') {
	            a = a.version;
	          }
	          if ((typeof b === 'undefined' ? 'undefined' : _typeof(b)) === 'object') {
	            b = b.version;
	          }
	          ret = a !== b;
	          break;
	        case '':case '=':case '==':
	          ret = eq(a, b, loose);break;
	        case '!=':
	          ret = neq(a, b, loose);break;
	        case '>':
	          ret = gt(a, b, loose);break;
	        case '>=':
	          ret = gte(a, b, loose);break;
	        case '<':
	          ret = lt(a, b, loose);break;
	        case '<=':
	          ret = lte(a, b, loose);break;
	        default:
	          throw new TypeError('Invalid operator: ' + op);
	      }
	      return ret;
	    }

	    exports.Comparator = Comparator;
	    function Comparator(comp, loose) {
	      if (comp instanceof Comparator) {
	        if (comp.loose === loose) {
	          return comp;
	        } else {
	          comp = comp.value;
	        }
	      }

	      if (!(this instanceof Comparator)) {
	        return new Comparator(comp, loose);
	      }

	      debug('comparator', comp, loose);
	      this.loose = loose;
	      this.parse(comp);

	      if (this.semver === ANY) {
	        this.value = '';
	      } else {
	        this.value = this.operator + this.semver.version;
	      }

	      debug('comp', this);
	    }

	    var ANY = {};
	    Comparator.prototype.parse = function (comp) {
	      var r = this.loose ? re[COMPARATORLOOSE] : re[COMPARATOR];
	      var m = comp.match(r);

	      if (!m) {
	        throw new TypeError('Invalid comparator: ' + comp);
	      }

	      this.operator = m[1];
	      if (this.operator === '=') {
	        this.operator = '';
	      }

	      // if it literally is just '>' or '' then allow anything.
	      if (!m[2]) {
	        this.semver = ANY;
	      } else {
	        this.semver = new SemVer(m[2], this.loose);
	      }
	    };

	    Comparator.prototype.toString = function () {
	      return this.value;
	    };

	    Comparator.prototype.test = function (version) {
	      debug('Comparator.test', version, this.loose);

	      if (this.semver === ANY) {
	        return true;
	      }

	      if (typeof version === 'string') {
	        version = new SemVer(version, this.loose);
	      }

	      return cmp(version, this.operator, this.semver, this.loose);
	    };

	    exports.Range = Range;
	    function Range(range, loose) {
	      if (range instanceof Range && range.loose === loose) {
	        return range;
	      }

	      if (!(this instanceof Range)) {
	        return new Range(range, loose);
	      }

	      this.loose = loose;

	      // First, split based on boolean or ||
	      this.raw = range;
	      this.set = range.split(/\s*\|\|\s*/).map(function (range) {
	        return this.parseRange(range.trim());
	      }, this).filter(function (c) {
	        // throw out any that are not relevant for whatever reason
	        return c.length;
	      });

	      if (!this.set.length) {
	        throw new TypeError('Invalid SemVer Range: ' + range);
	      }

	      this.format();
	    }

	    Range.prototype.format = function () {
	      this.range = this.set.map(function (comps) {
	        return comps.join(' ').trim();
	      }).join('||').trim();
	      return this.range;
	    };

	    Range.prototype.toString = function () {
	      return this.range;
	    };

	    Range.prototype.parseRange = function (range) {
	      var loose = this.loose;
	      range = range.trim();
	      debug('range', range, loose);
	      // `1.2.3 - 1.2.4` => `>=1.2.3 <=1.2.4`
	      var hr = loose ? re[HYPHENRANGELOOSE] : re[HYPHENRANGE];
	      range = range.replace(hr, hyphenReplace);
	      debug('hyphen replace', range);
	      // `> 1.2.3 < 1.2.5` => `>1.2.3 <1.2.5`
	      range = range.replace(re[COMPARATORTRIM], comparatorTrimReplace);
	      debug('comparator trim', range, re[COMPARATORTRIM]);

	      // `~ 1.2.3` => `~1.2.3`
	      range = range.replace(re[TILDETRIM], tildeTrimReplace);

	      // `^ 1.2.3` => `^1.2.3`
	      range = range.replace(re[CARETTRIM], caretTrimReplace);

	      // normalize spaces
	      range = range.split(/\s+/).join(' ');

	      // At this point, the range is completely trimmed and
	      // ready to be split into comparators.

	      var compRe = loose ? re[COMPARATORLOOSE] : re[COMPARATOR];
	      var set = range.split(' ').map(function (comp) {
	        return parseComparator(comp, loose);
	      }).join(' ').split(/\s+/);
	      if (this.loose) {
	        // in loose mode, throw out any that are not valid comparators
	        set = set.filter(function (comp) {
	          return !!comp.match(compRe);
	        });
	      }
	      set = set.map(function (comp) {
	        return new Comparator(comp, loose);
	      });

	      return set;
	    };

	    // Mostly just for testing and legacy API reasons
	    exports.toComparators = toComparators;
	    function toComparators(range, loose) {
	      return new Range(range, loose).set.map(function (comp) {
	        return comp.map(function (c) {
	          return c.value;
	        }).join(' ').trim().split(' ');
	      });
	    }

	    // comprised of xranges, tildes, stars, and gtlt's at this point.
	    // already replaced the hyphen ranges
	    // turn into a set of JUST comparators.
	    function parseComparator(comp, loose) {
	      debug('comp', comp);
	      comp = replaceCarets(comp, loose);
	      debug('caret', comp);
	      comp = replaceTildes(comp, loose);
	      debug('tildes', comp);
	      comp = replaceXRanges(comp, loose);
	      debug('xrange', comp);
	      comp = replaceStars(comp, loose);
	      debug('stars', comp);
	      return comp;
	    }

	    function isX(id) {
	      return !id || id.toLowerCase() === 'x' || id === '*';
	    }

	    // ~, ~> --> * (any, kinda silly)
	    // ~2, ~2.x, ~2.x.x, ~>2, ~>2.x ~>2.x.x --> >=2.0.0 <3.0.0
	    // ~2.0, ~2.0.x, ~>2.0, ~>2.0.x --> >=2.0.0 <2.1.0
	    // ~1.2, ~1.2.x, ~>1.2, ~>1.2.x --> >=1.2.0 <1.3.0
	    // ~1.2.3, ~>1.2.3 --> >=1.2.3 <1.3.0
	    // ~1.2.0, ~>1.2.0 --> >=1.2.0 <1.3.0
	    function replaceTildes(comp, loose) {
	      return comp.trim().split(/\s+/).map(function (comp) {
	        return replaceTilde(comp, loose);
	      }).join(' ');
	    }

	    function replaceTilde(comp, loose) {
	      var r = loose ? re[TILDELOOSE] : re[TILDE];
	      return comp.replace(r, function (_, M, m, p, pr) {
	        debug('tilde', comp, _, M, m, p, pr);
	        var ret;

	        if (isX(M)) {
	          ret = '';
	        } else if (isX(m)) {
	          ret = '>=' + M + '.0.0 <' + (+M + 1) + '.0.0';
	        } else if (isX(p))
	          // ~1.2 == >=1.2.0 <1.3.0
	          {
	            ret = '>=' + M + '.' + m + '.0 <' + M + '.' + (+m + 1) + '.0';
	          } else if (pr) {
	          debug('replaceTilde pr', pr);
	          if (pr.charAt(0) !== '-') {
	            pr = '-' + pr;
	          }
	          ret = '>=' + M + '.' + m + '.' + p + pr + ' <' + M + '.' + (+m + 1) + '.0';
	        } else
	          // ~1.2.3 == >=1.2.3 <1.3.0
	          {
	            ret = '>=' + M + '.' + m + '.' + p + ' <' + M + '.' + (+m + 1) + '.0';
	          }

	        debug('tilde return', ret);
	        return ret;
	      });
	    }

	    // ^ --> * (any, kinda silly)
	    // ^2, ^2.x, ^2.x.x --> >=2.0.0 <3.0.0
	    // ^2.0, ^2.0.x --> >=2.0.0 <3.0.0
	    // ^1.2, ^1.2.x --> >=1.2.0 <2.0.0
	    // ^1.2.3 --> >=1.2.3 <2.0.0
	    // ^1.2.0 --> >=1.2.0 <2.0.0
	    function replaceCarets(comp, loose) {
	      return comp.trim().split(/\s+/).map(function (comp) {
	        return replaceCaret(comp, loose);
	      }).join(' ');
	    }

	    function replaceCaret(comp, loose) {
	      debug('caret', comp, loose);
	      var r = loose ? re[CARETLOOSE] : re[CARET];
	      return comp.replace(r, function (_, M, m, p, pr) {
	        debug('caret', comp, _, M, m, p, pr);
	        var ret;

	        if (isX(M)) {
	          ret = '';
	        } else if (isX(m)) {
	          ret = '>=' + M + '.0.0 <' + (+M + 1) + '.0.0';
	        } else if (isX(p)) {
	          if (M === '0') {
	            ret = '>=' + M + '.' + m + '.0 <' + M + '.' + (+m + 1) + '.0';
	          } else {
	            ret = '>=' + M + '.' + m + '.0 <' + (+M + 1) + '.0.0';
	          }
	        } else if (pr) {
	          debug('replaceCaret pr', pr);
	          if (pr.charAt(0) !== '-') {
	            pr = '-' + pr;
	          }
	          if (M === '0') {
	            if (m === '0') {
	              ret = '>=' + M + '.' + m + '.' + p + pr + ' <' + M + '.' + m + '.' + (+p + 1);
	            } else {
	              ret = '>=' + M + '.' + m + '.' + p + pr + ' <' + M + '.' + (+m + 1) + '.0';
	            }
	          } else {
	            ret = '>=' + M + '.' + m + '.' + p + pr + ' <' + (+M + 1) + '.0.0';
	          }
	        } else {
	          debug('no pr');
	          if (M === '0') {
	            if (m === '0') {
	              ret = '>=' + M + '.' + m + '.' + p + ' <' + M + '.' + m + '.' + (+p + 1);
	            } else {
	              ret = '>=' + M + '.' + m + '.' + p + ' <' + M + '.' + (+m + 1) + '.0';
	            }
	          } else {
	            ret = '>=' + M + '.' + m + '.' + p + ' <' + (+M + 1) + '.0.0';
	          }
	        }

	        debug('caret return', ret);
	        return ret;
	      });
	    }

	    function replaceXRanges(comp, loose) {
	      debug('replaceXRanges', comp, loose);
	      return comp.split(/\s+/).map(function (comp) {
	        return replaceXRange(comp, loose);
	      }).join(' ');
	    }

	    function replaceXRange(comp, loose) {
	      comp = comp.trim();
	      var r = loose ? re[XRANGELOOSE] : re[XRANGE];
	      return comp.replace(r, function (ret, gtlt, M, m, p, pr) {
	        debug('xRange', comp, ret, gtlt, M, m, p, pr);
	        var xM = isX(M);
	        var xm = xM || isX(m);
	        var xp = xm || isX(p);
	        var anyX = xp;

	        if (gtlt === '=' && anyX) {
	          gtlt = '';
	        }

	        if (xM) {
	          if (gtlt === '>' || gtlt === '<') {
	            // nothing is allowed
	            ret = '<0.0.0';
	          } else {
	            // nothing is forbidden
	            ret = '*';
	          }
	        } else if (gtlt && anyX) {
	          // replace X with 0
	          if (xm) {
	            m = 0;
	          }
	          if (xp) {
	            p = 0;
	          }

	          if (gtlt === '>') {
	            // >1 => >=2.0.0
	            // >1.2 => >=1.3.0
	            // >1.2.3 => >= 1.2.4
	            gtlt = '>=';
	            if (xm) {
	              M = +M + 1;
	              m = 0;
	              p = 0;
	            } else if (xp) {
	              m = +m + 1;
	              p = 0;
	            }
	          } else if (gtlt === '<=') {
	            // <=0.7.x is actually <0.8.0, since any 0.7.x should
	            // pass.  Similarly, <=7.x is actually <8.0.0, etc.
	            gtlt = '<';
	            if (xm) {
	              M = +M + 1;
	            } else {
	              m = +m + 1;
	            }
	          }

	          ret = gtlt + M + '.' + m + '.' + p;
	        } else if (xm) {
	          ret = '>=' + M + '.0.0 <' + (+M + 1) + '.0.0';
	        } else if (xp) {
	          ret = '>=' + M + '.' + m + '.0 <' + M + '.' + (+m + 1) + '.0';
	        }

	        debug('xRange return', ret);

	        return ret;
	      });
	    }

	    // Because * is AND-ed with everything else in the comparator,
	    // and '' means "any version", just remove the *s entirely.
	    function replaceStars(comp, loose) {
	      debug('replaceStars', comp, loose);
	      // Looseness is ignored here.  star is always as loose as it gets!
	      return comp.trim().replace(re[STAR], '');
	    }

	    // This function is passed to string.replace(re[HYPHENRANGE])
	    // M, m, patch, prerelease, build
	    // 1.2 - 3.4.5 => >=1.2.0 <=3.4.5
	    // 1.2.3 - 3.4 => >=1.2.0 <3.5.0 Any 3.4.x will do
	    // 1.2 - 3.4 => >=1.2.0 <3.5.0
	    function hyphenReplace($0, from, fM, fm, fp, fpr, fb, to, tM, tm, tp, tpr, tb) {

	      if (isX(fM)) {
	        from = '';
	      } else if (isX(fm)) {
	        from = '>=' + fM + '.0.0';
	      } else if (isX(fp)) {
	        from = '>=' + fM + '.' + fm + '.0';
	      } else {
	        from = '>=' + from;
	      }

	      if (isX(tM)) {
	        to = '';
	      } else if (isX(tm)) {
	        to = '<' + (+tM + 1) + '.0.0';
	      } else if (isX(tp)) {
	        to = '<' + tM + '.' + (+tm + 1) + '.0';
	      } else if (tpr) {
	        to = '<=' + tM + '.' + tm + '.' + tp + '-' + tpr;
	      } else {
	        to = '<=' + to;
	      }

	      return (from + ' ' + to).trim();
	    }

	    // if ANY of the sets match ALL of its comparators, then pass
	    Range.prototype.test = function (version) {
	      var this$1 = this;

	      if (!version) {
	        return false;
	      }

	      if (typeof version === 'string') {
	        version = new SemVer(version, this.loose);
	      }

	      for (var i = 0; i < this.set.length; i++) {
	        if (testSet(this$1.set[i], version)) {
	          return true;
	        }
	      }
	      return false;
	    };

	    function testSet(set, version) {
	      for (var i = 0; i < set.length; i++) {
	        if (!set[i].test(version)) {
	          return false;
	        }
	      }

	      if (version.prerelease.length) {
	        // Find the set of versions that are allowed to have prereleases
	        // For example, ^1.2.3-pr.1 desugars to >=1.2.3-pr.1 <2.0.0
	        // That should allow `1.2.3-pr.2` to pass.
	        // However, `1.2.4-alpha.notready` should NOT be allowed,
	        // even though it's within the range set by the comparators.
	        for (var i = 0; i < set.length; i++) {
	          debug(set[i].semver);
	          if (set[i].semver === ANY) {
	            continue;
	          }

	          if (set[i].semver.prerelease.length > 0) {
	            var allowed = set[i].semver;
	            if (allowed.major === version.major && allowed.minor === version.minor && allowed.patch === version.patch) {
	              return true;
	            }
	          }
	        }

	        // Version has a -pre, but it's not one of the ones we like.
	        return false;
	      }

	      return true;
	    }

	    exports.satisfies = satisfies;
	    function satisfies(version, range, loose) {
	      try {
	        range = new Range(range, loose);
	      } catch (er) {
	        return false;
	      }
	      return range.test(version);
	    }

	    exports.maxSatisfying = maxSatisfying;
	    function maxSatisfying(versions, range, loose) {
	      return versions.filter(function (version) {
	        return satisfies(version, range, loose);
	      }).sort(function (a, b) {
	        return rcompare(a, b, loose);
	      })[0] || null;
	    }

	    exports.minSatisfying = minSatisfying;
	    function minSatisfying(versions, range, loose) {
	      return versions.filter(function (version) {
	        return satisfies(version, range, loose);
	      }).sort(function (a, b) {
	        return compare(a, b, loose);
	      })[0] || null;
	    }

	    exports.validRange = validRange;
	    function validRange(range, loose) {
	      try {
	        // Return '*' instead of '' so that truthiness works.
	        // This will throw if it's invalid anyway
	        return new Range(range, loose).range || '*';
	      } catch (er) {
	        return null;
	      }
	    }

	    // Determine if version is less than all the versions possible in the range
	    exports.ltr = ltr;
	    function ltr(version, range, loose) {
	      return outside(version, range, '<', loose);
	    }

	    // Determine if version is greater than all the versions possible in the range.
	    exports.gtr = gtr;
	    function gtr(version, range, loose) {
	      return outside(version, range, '>', loose);
	    }

	    exports.outside = outside;
	    function outside(version, range, hilo, loose) {
	      version = new SemVer(version, loose);
	      range = new Range(range, loose);

	      var gtfn, ltefn, ltfn, comp, ecomp;
	      switch (hilo) {
	        case '>':
	          gtfn = gt;
	          ltefn = lte;
	          ltfn = lt;
	          comp = '>';
	          ecomp = '>=';
	          break;
	        case '<':
	          gtfn = lt;
	          ltefn = gte;
	          ltfn = gt;
	          comp = '<';
	          ecomp = '<=';
	          break;
	        default:
	          throw new TypeError('Must provide a hilo val of "<" or ">"');
	      }

	      // If it satisifes the range it is not outside
	      if (satisfies(version, range, loose)) {
	        return false;
	      }

	      // From now on, variable terms are as if we're in "gtr" mode.
	      // but note that everything is flipped for the "ltr" function.

	      for (var i = 0; i < range.set.length; ++i) {
	        var comparators = range.set[i];

	        var high = null;
	        var low = null;

	        comparators.forEach(function (comparator) {
	          if (comparator.semver === ANY) {
	            comparator = new Comparator('>=0.0.0');
	          }
	          high = high || comparator;
	          low = low || comparator;
	          if (gtfn(comparator.semver, high.semver, loose)) {
	            high = comparator;
	          } else if (ltfn(comparator.semver, low.semver, loose)) {
	            low = comparator;
	          }
	        });

	        // If the edge version comparator has a operator then our version
	        // isn't outside it
	        if (high.operator === comp || high.operator === ecomp) {
	          return false;
	        }

	        // If the lowest version comparator has an operator and our version
	        // is less than it then it isn't higher than the range
	        if ((!low.operator || low.operator === comp) && ltefn(version, low.semver)) {
	          return false;
	        } else if (low.operator === ecomp && ltfn(version, low.semver)) {
	          return false;
	        }
	      }
	      return true;
	    }

	    exports.prerelease = prerelease;
	    function prerelease(version, loose) {
	      var parsed = parse(version, loose);
	      return parsed && parsed.prerelease.length ? parsed.prerelease : null;
	    }
	  });

	  __$styleInject("* {\n  color: initial;\n  cursor: initial;\n  direction: initial;\n  font: initial;\n  font-family: initial;\n  font-size: initial;\n  font-style: initial;\n  font-variant: initial;\n  font-weight: initial;\n  line-height: initial;\n  text-align: initial;\n  text-indent: initial;\n  visibility: initial;\n  white-space: initial;\n  word-spacing: initial;\n  font-family: BlinkMacSystemFont, 'Source Sans Pro', 'Helvetica Neue', Helvetica, Arial, sans-serif;\n}\n\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n  -webkit-text-size-adjust: none;\n      -ms-text-size-adjust: none;\n          text-size-adjust: none;\n}\n\nhtml, body {\n  -ms-overflow-style: scrollbar;\n  -webkit-tap-highlight-color: transparent;\n  padding: 0;\n  margin: 0;\n  width: 100%;\n  height: 100%;\n}\n\na,\nbutton,\n[role=\"button\"],\ninput,\nlabel,\nselect,\ntextarea {\n  -ms-touch-action: manipulation;\n      touch-action: manipulation;\n}\n\np, ol, ul, dl {\n  margin: 0;\n  padding: 0;\n}\n\nli {\n  list-style: none;\n}\n\nfigure {\n  margin: 0;\n}\n\ntextarea {\n  resize: none;\n}\n", undefined);

	  __$styleInject("a, .weex-a {\n  display: block;\n  position: relative;\n  text-decoration: none;\n}\n\nbody > .weex-div {\n  min-height: 100%;\n}\n\n.weex-div {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  position: relative;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: column;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-flex-shrink: 0;\n      -ms-flex-negative: 0;\n          flex-shrink: 0;\n  -webkit-box-align: stretch;\n  -webkit-align-items: stretch;\n      -ms-flex-align: stretch;\n          align-items: stretch;\n  box-align: stretch;\n  -webkit-align-content: flex-start;\n      -ms-flex-line-pack: start;\n          align-content: flex-start;\n}\n\ninput, textarea, .weex-input, .weex-textarea {\n  position: relative;\n  font-size: 0.4267rem;\n}\ninput:focus, textarea:focus, .weex-input:focus, .weex-textarea:focus {\n  outline: none;\n}\n\nfigure, img, .weex-image, .weex-img {\n  display: block;\n  position: relative;\n  background-repeat: no-repeat;\n}\n\n.weex-toast {\n  font-size: 0.32rem;\n  line-height: 0.426667rem;\n  position: fixed;\n  box-sizing: border-box;\n  max-width: 80%;\n  bottom: 2.666667rem;\n  left: 50%;\n  padding: 0.213333rem;\n  background-color: #000;\n  color: #fff;\n  text-align: center;\n  opacity: 0.6;\n  -webkit-transition: all 0.4s ease-in-out;\n          transition: all 0.4s ease-in-out;\n  border-radius: 0.066667rem;\n  -webkit-transform: translateX(-50%);\n  -ms-transform: translateX(-50%);\n      transform: translateX(-50%);\n}\n\n.weex-toast.hide {\n  opacity: 0;\n}\n\n.weex-alert .weex-alert-ok {\n  width: 100%;\n}\n\n.weex-confirm .btn-group .btn {\n  float: left;\n  width: 50%;\n}\n\n.weex-confirm .btn-group .btn.btn-ok {\n  border-right: 1px solid #ddd;\n}\n\n.weex-modal-wrap {\n  display: none;\n  position: fixed;\n  z-index: 999999999;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: #000;\n  opacity: 0.5;\n}\n\n.weex-modal-node {\n  position: fixed;\n  z-index: 9999999999;\n  top: 50%;\n  left: 50%;\n  width: 6.666667rem;\n  min-height: 2.666667rem;\n  border-radius: 0.066667rem;\n  -webkit-transform: translate(-50%, -50%);\n  -ms-transform: translate(-50%, -50%);\n      transform: translate(-50%, -50%);\n  background-color: #fff;\n}\n\n.weex-modal-node.hide {\n  display: none;\n}\n\n.weex-modal-node .content {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-flex-direction: column;\n  -ms-flex-direction: column;\n      flex-direction: column;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n  -ms-flex-align: center;\n      align-items: center;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n  -ms-flex-pack: center;\n      justify-content: center;\n  width: 100%;\n  min-height: 1.866667rem;\n  box-sizing: border-box;\n  font-size: 0.32rem;\n  line-height: 0.426667rem;\n  padding: 0.213333rem;\n  border-bottom: 1px solid #ddd;\n}\n\n.weex-modal-node .btn-group {\n  width: 100%;\n  height: 0.8rem;\n  font-size: 0.373333rem;\n  text-align: center;\n  margin: 0;\n  padding: 0;\n  border: none;\n}\n\n.amfe-modal-node .btn-group .btn {\n  text-align: center;\n}\n\n.weex-modal-node .btn-group .btn {\n  box-sizing: border-box;\n  height: 0.8rem;\n  line-height: 0.8rem;\n  margin: 0;\n  padding: 0;\n  border: none;\n  background: none;\n  text-align: center;\n}\n\n.weex-prompt .input-wrap {\n  box-sizing: border-box;\n  width: 100%;\n  margin-top: 0.133333rem;\n  height: 0.96rem;\n}\n\n.weex-prompt .input-wrap .input {\n  box-sizing: border-box;\n  width: 100%;\n  height: 0.56rem;\n  line-height: 0.56rem;\n  font-size: 0.32rem;\n  border: 1px solid #999;\n}\n\n.weex-prompt .btn-group .btn {\n  float: left;\n  width: 50%;\n}\n\n.weex-prompt .btn-group .btn.btn-ok {\n  border-right: 1px solid #ddd;\n}\n\nbody > .weex-list,\nbody > .weex-scroller {\n  min-height: 100%;\n}\n\n.weex-list-wrapper,\n.weex-scroller-wrapper {\n  display: block;\n  position: relative;\n  overflow-x: hidden;\n  overflow-y: scroll;\n}\n\n.weex-list-inner,\n.weex-scroller-inner {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  width: 100%;\n  min-height: 100%;\n  overflow: hidden;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: column;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-pack: start;\n  -webkit-justify-content: flex-start;\n      -ms-flex-pack: start;\n          justify-content: flex-start;\n}\n\n.weex-scroller-wrapper.weex-scroller-horizontal {\n  overflow-x: scroll;\n  overflow-y: hidden;\n}\n\n.weex-scroller-horizontal .weex-scroller-inner {\n  display: block;\n  width: auto;\n  height: 100%;\n}\n.weex-scroller-horizontal .weex-scroller-inner > * {\n  float: left;\n}\n\n.weex-cell {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  position: relative;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: column;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  width: 100%;\n}\n\n.weex-refresh,\n.weex-loading {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: column;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  width: 100%;\n  height: 0;\n  overflow: hidden;\n  position: absolute;\n  visibility: hidden;\n  z-index: 100;\n  background-color: rgba(0, 0, 0, 0.3);\n}\n\n.weex-refresh {\n  top: 0;\n}\n\n.weex-loading {\n  bottom: 0;\n  bottom: -2.8267rem;\n}\n\n.weex-slider-wrapper {\n  overflow: hidden;\n  position: relative;\n}\n\n.weex-slider-inner {\n  position: absolute;\n  height: 100%;\n  top: 0;\n  left: 0;\n}\n\n.weex-slider-cell {\n  display: block;\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  margin: 0;\n  padding: 0;\n  height: 100%;\n  overflow: hidden;\n}\n\n.weex-indicator {\n  position: absolute;\n  right: 0.4rem;\n  bottom: 0.1333rem;\n  margin: 0;\n  padding: 0.1333rem 0.2667rem;\n}\n\n.weex-indicator-item {\n  display: inline-block;\n  position: relative;\n  border-radius: 50%;\n  width: 0.2667rem;\n  height: 0.2667rem;\n  background-color: #BBBBBB;\n}\n.weex-indicator-item + .weex-indicator-item {\n  margin-left: 0.1333rem;\n}\n\n.weex-indicator-item-active {\n  background-color: blue;\n}\n\n.weex-refresh-indicator,\n.weex-loading-indicator {\n  position: relative;\n  width: 1rem;\n  height: 1rem;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  overflow: visible;\n  background: none;\n}\n.weex-refresh-indicator:before,\n.weex-loading-indicator:before {\n  display: block;\n  content: '';\n  font-size: 0.16rem;\n  /* 12px */\n  width: 1em;\n  height: 1em;\n  left: -60%;\n  top: 40%;\n  border-radius: 50%;\n  position: relative;\n  text-indent: -9999em;\n  -webkit-animation: weex-spinner 1.1s infinite ease;\n          animation: weex-spinner 1.1s infinite ease;\n  -webkit-transform: translate3d(1rem, 0, 0);\n          transform: translate3d(1rem, 0, 0);\n}\n\n@-webkit-keyframes weex-spinner {\n  0%,\n  100% {\n    box-shadow: 0em -2.6em 0em 0em #ffffff, 1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2), 2.5em 0em 0 0em rgba(255, 255, 255, 0.2), 1.75em 1.75em 0 0em rgba(255, 255, 255, 0.2), 0em 2.5em 0 0em rgba(255, 255, 255, 0.2), -1.8em 1.8em 0 0em rgba(255, 255, 255, 0.2), -2.6em 0em 0 0em rgba(255, 255, 255, 0.5), -1.8em -1.8em 0 0em rgba(255, 255, 255, 0.7);\n  }\n  12.5% {\n    box-shadow: 0em -2.6em 0em 0em rgba(255, 255, 255, 0.7), 1.8em -1.8em 0 0em #ffffff, 2.5em 0em 0 0em rgba(255, 255, 255, 0.2), 1.75em 1.75em 0 0em rgba(255, 255, 255, 0.2), 0em 2.5em 0 0em rgba(255, 255, 255, 0.2), -1.8em 1.8em 0 0em rgba(255, 255, 255, 0.2), -2.6em 0em 0 0em rgba(255, 255, 255, 0.2), -1.8em -1.8em 0 0em rgba(255, 255, 255, 0.5);\n  }\n  25% {\n    box-shadow: 0em -2.6em 0em 0em rgba(255, 255, 255, 0.5), 1.8em -1.8em 0 0em rgba(255, 255, 255, 0.7), 2.5em 0em 0 0em #ffffff, 1.75em 1.75em 0 0em rgba(255, 255, 255, 0.2), 0em 2.5em 0 0em rgba(255, 255, 255, 0.2), -1.8em 1.8em 0 0em rgba(255, 255, 255, 0.2), -2.6em 0em 0 0em rgba(255, 255, 255, 0.2), -1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2);\n  }\n  37.5% {\n    box-shadow: 0em -2.6em 0em 0em rgba(255, 255, 255, 0.2), 1.8em -1.8em 0 0em rgba(255, 255, 255, 0.5), 2.5em 0em 0 0em rgba(255, 255, 255, 0.7), 1.75em 1.75em 0 0em #ffffff, 0em 2.5em 0 0em rgba(255, 255, 255, 0.2), -1.8em 1.8em 0 0em rgba(255, 255, 255, 0.2), -2.6em 0em 0 0em rgba(255, 255, 255, 0.2), -1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2);\n  }\n  50% {\n    box-shadow: 0em -2.6em 0em 0em rgba(255, 255, 255, 0.2), 1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2), 2.5em 0em 0 0em rgba(255, 255, 255, 0.5), 1.75em 1.75em 0 0em rgba(255, 255, 255, 0.7), 0em 2.5em 0 0em #ffffff, -1.8em 1.8em 0 0em rgba(255, 255, 255, 0.2), -2.6em 0em 0 0em rgba(255, 255, 255, 0.2), -1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2);\n  }\n  62.5% {\n    box-shadow: 0em -2.6em 0em 0em rgba(255, 255, 255, 0.2), 1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2), 2.5em 0em 0 0em rgba(255, 255, 255, 0.2), 1.75em 1.75em 0 0em rgba(255, 255, 255, 0.5), 0em 2.5em 0 0em rgba(255, 255, 255, 0.7), -1.8em 1.8em 0 0em #ffffff, -2.6em 0em 0 0em rgba(255, 255, 255, 0.2), -1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2);\n  }\n  75% {\n    box-shadow: 0em -2.6em 0em 0em rgba(255, 255, 255, 0.2), 1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2), 2.5em 0em 0 0em rgba(255, 255, 255, 0.2), 1.75em 1.75em 0 0em rgba(255, 255, 255, 0.2), 0em 2.5em 0 0em rgba(255, 255, 255, 0.5), -1.8em 1.8em 0 0em rgba(255, 255, 255, 0.7), -2.6em 0em 0 0em #ffffff, -1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2);\n  }\n  87.5% {\n    box-shadow: 0em -2.6em 0em 0em rgba(255, 255, 255, 0.2), 1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2), 2.5em 0em 0 0em rgba(255, 255, 255, 0.2), 1.75em 1.75em 0 0em rgba(255, 255, 255, 0.2), 0em 2.5em 0 0em rgba(255, 255, 255, 0.2), -1.8em 1.8em 0 0em rgba(255, 255, 255, 0.5), -2.6em 0em 0 0em rgba(255, 255, 255, 0.7), -1.8em -1.8em 0 0em #ffffff;\n  }\n}\n\n@keyframes weex-spinner {\n  0%,\n  100% {\n    box-shadow: 0em -2.6em 0em 0em #ffffff, 1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2), 2.5em 0em 0 0em rgba(255, 255, 255, 0.2), 1.75em 1.75em 0 0em rgba(255, 255, 255, 0.2), 0em 2.5em 0 0em rgba(255, 255, 255, 0.2), -1.8em 1.8em 0 0em rgba(255, 255, 255, 0.2), -2.6em 0em 0 0em rgba(255, 255, 255, 0.5), -1.8em -1.8em 0 0em rgba(255, 255, 255, 0.7);\n  }\n  12.5% {\n    box-shadow: 0em -2.6em 0em 0em rgba(255, 255, 255, 0.7), 1.8em -1.8em 0 0em #ffffff, 2.5em 0em 0 0em rgba(255, 255, 255, 0.2), 1.75em 1.75em 0 0em rgba(255, 255, 255, 0.2), 0em 2.5em 0 0em rgba(255, 255, 255, 0.2), -1.8em 1.8em 0 0em rgba(255, 255, 255, 0.2), -2.6em 0em 0 0em rgba(255, 255, 255, 0.2), -1.8em -1.8em 0 0em rgba(255, 255, 255, 0.5);\n  }\n  25% {\n    box-shadow: 0em -2.6em 0em 0em rgba(255, 255, 255, 0.5), 1.8em -1.8em 0 0em rgba(255, 255, 255, 0.7), 2.5em 0em 0 0em #ffffff, 1.75em 1.75em 0 0em rgba(255, 255, 255, 0.2), 0em 2.5em 0 0em rgba(255, 255, 255, 0.2), -1.8em 1.8em 0 0em rgba(255, 255, 255, 0.2), -2.6em 0em 0 0em rgba(255, 255, 255, 0.2), -1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2);\n  }\n  37.5% {\n    box-shadow: 0em -2.6em 0em 0em rgba(255, 255, 255, 0.2), 1.8em -1.8em 0 0em rgba(255, 255, 255, 0.5), 2.5em 0em 0 0em rgba(255, 255, 255, 0.7), 1.75em 1.75em 0 0em #ffffff, 0em 2.5em 0 0em rgba(255, 255, 255, 0.2), -1.8em 1.8em 0 0em rgba(255, 255, 255, 0.2), -2.6em 0em 0 0em rgba(255, 255, 255, 0.2), -1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2);\n  }\n  50% {\n    box-shadow: 0em -2.6em 0em 0em rgba(255, 255, 255, 0.2), 1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2), 2.5em 0em 0 0em rgba(255, 255, 255, 0.5), 1.75em 1.75em 0 0em rgba(255, 255, 255, 0.7), 0em 2.5em 0 0em #ffffff, -1.8em 1.8em 0 0em rgba(255, 255, 255, 0.2), -2.6em 0em 0 0em rgba(255, 255, 255, 0.2), -1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2);\n  }\n  62.5% {\n    box-shadow: 0em -2.6em 0em 0em rgba(255, 255, 255, 0.2), 1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2), 2.5em 0em 0 0em rgba(255, 255, 255, 0.2), 1.75em 1.75em 0 0em rgba(255, 255, 255, 0.5), 0em 2.5em 0 0em rgba(255, 255, 255, 0.7), -1.8em 1.8em 0 0em #ffffff, -2.6em 0em 0 0em rgba(255, 255, 255, 0.2), -1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2);\n  }\n  75% {\n    box-shadow: 0em -2.6em 0em 0em rgba(255, 255, 255, 0.2), 1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2), 2.5em 0em 0 0em rgba(255, 255, 255, 0.2), 1.75em 1.75em 0 0em rgba(255, 255, 255, 0.2), 0em 2.5em 0 0em rgba(255, 255, 255, 0.5), -1.8em 1.8em 0 0em rgba(255, 255, 255, 0.7), -2.6em 0em 0 0em #ffffff, -1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2);\n  }\n  87.5% {\n    box-shadow: 0em -2.6em 0em 0em rgba(255, 255, 255, 0.2), 1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2), 2.5em 0em 0 0em rgba(255, 255, 255, 0.2), 1.75em 1.75em 0 0em rgba(255, 255, 255, 0.2), 0em 2.5em 0 0em rgba(255, 255, 255, 0.2), -1.8em 1.8em 0 0em rgba(255, 255, 255, 0.5), -2.6em 0em 0 0em rgba(255, 255, 255, 0.7), -1.8em -1.8em 0 0em #ffffff;\n  }\n}\n.weex-switch {\n  border: 1px solid #dfdfdf;\n  cursor: pointer;\n  display: inline-block;\n  position: relative;\n  vertical-align: middle;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  box-sizing: content-box;\n  background-clip: content-box;\n  color: #64bd63;\n  width: 1.3333rem;\n  height: 0.8rem;\n  background-color: white;\n  border-color: #dfdfdf;\n  box-shadow: #dfdfdf 0 0 0 0 inset;\n  border-radius: 0.8rem;\n  -webkit-transition: border 0.4s, box-shadow 0.4s, background-color 1.2s;\n          transition: border 0.4s, box-shadow 0.4s, background-color 1.2s;\n}\n\n.weex-switch-checked {\n  background-color: #64bd63;\n  border-color: #64bd63;\n  box-shadow: #64bd63 0 0 0 0.5333rem inset;\n}\n\n.weex-switch-checked.weex-switch-disabled {\n  background-color: #A0CCA0;\n  box-shadow: #A0CCA0 0 0 0 0.5333rem inset;\n}\n\n.weex-switch-disabled {\n  background-color: #EEEEEE;\n}\n\n.weex-switch-inner {\n  width: 0.8rem;\n  height: 0.8rem;\n  background: #fff;\n  border-radius: 100%;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.4);\n  position: absolute;\n  top: 0;\n  left: 0;\n  -webkit-transition: background-color 0.4s, left 0.2s;\n          transition: background-color 0.4s, left 0.2s;\n}\n\n.weex-switch-checked > .weex-switch-inner {\n  left: 0.5333rem;\n}\n\np, .weex-text {\n  display: -webkit-box;\n  -webkit-box-orient: vertical;\n  position: relative;\n  white-space: pre-wrap;\n  font-size: 0.4267rem;\n  word-wrap: break-word;\n  overflow: visible;\n}\n\n.weex-web {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  border: none;\n  box-sizing: border-box;\n}\n", undefined);

	  /* eslint-disable */

	  var isInitialized = false;

	  // major events supported:
	  //   panstart
	  //   panmove
	  //   panend
	  //   swipe
	  //   longpress
	  // extra events supported:
	  //   dualtouchstart
	  //   dualtouch
	  //   dualtouchend
	  //   tap
	  //   doubletap
	  //   pressend

	  var doc = window.document;
	  var docEl = doc.documentElement;
	  var slice = Array.prototype.slice;
	  var gestures = {};
	  var lastTap = null;

	  /**
	   * find the closest common ancestor
	   * if there's no one, return null
	   *
	   * @param  {Element} el1 first element
	   * @param  {Element} el2 second element
	   * @return {Element}     common ancestor
	   */
	  function getCommonAncestor(el1, el2) {
	    var el = el1;
	    while (el) {
	      if (el.contains(el2) || el == el2) {
	        return el;
	      }
	      el = el.parentNode;
	    }
	    return null;
	  }

	  /**
	   * fire a HTMLEvent
	   *
	   * @param  {Element} element which element to fire a event on
	   * @param  {string}  type    type of event
	   * @param  {object}  extra   extra data for the event object
	   */
	  function fireEvent(element, type, extra) {
	    var event = doc.createEvent('HTMLEvents');
	    event.initEvent(type, true, true);

	    if ((typeof extra === 'undefined' ? 'undefined' : _typeof(extra)) === 'object') {
	      for (var p in extra) {
	        event[p] = extra[p];
	      }
	    }

	    element.dispatchEvent(event);
	  }

	  /**
	   * calc the transform
	   * assume 4 points ABCD on the coordinate system
	   * > rotate：angle rotating from AB to CD
	   * > scale：scale ratio from AB to CD
	   * > translate：translate shift from A to C
	   *
	   * @param  {number} x1 abscissa of A
	   * @param  {number} y1 ordinate of A
	   * @param  {number} x2 abscissa of B
	   * @param  {number} y2 ordinate of B
	   * @param  {number} x3 abscissa of C
	   * @param  {number} y3 ordinate of C
	   * @param  {number} x4 abscissa of D
	   * @param  {number} y4 ordinate of D
	   * @return {object}    transform object like
	   *   {rotate, scale, translate[2], matrix[3][3]}
	   */
	  function calc(x1, y1, x2, y2, x3, y3, x4, y4) {
	    var rotate = Math.atan2(y4 - y3, x4 - x3) - Math.atan2(y2 - y1, x2 - x1);
	    var scale = Math.sqrt((Math.pow(y4 - y3, 2) + Math.pow(x4 - x3, 2)) / (Math.pow(y2 - y1, 2) + Math.pow(x2 - x1, 2)));
	    var translate = [x3 - scale * x1 * Math.cos(rotate) + scale * y1 * Math.sin(rotate), y3 - scale * y1 * Math.cos(rotate) - scale * x1 * Math.sin(rotate)];

	    return {
	      rotate: rotate,
	      scale: scale,
	      translate: translate,
	      matrix: [[scale * Math.cos(rotate), -scale * Math.sin(rotate), translate[0]], [scale * Math.sin(rotate), scale * Math.cos(rotate), translate[1]], [0, 0, 1]]
	    };
	  }

	  /**
	   * take over the touchstart events. Add new touches to the gestures.
	   * If there is no previous records, then bind touchmove, tochend
	   * and touchcancel events.
	   * new touches initialized with state 'tapping', and within 500 milliseconds
	   * if the state is still tapping, then trigger gesture 'press'.
	   * If there are two touche points, then the 'dualtouchstart' is triggerd. The
	   * node of the touch gesture is their cloest common ancestor.
	   *
	   * @event
	   * @param  {event} event
	   */
	  function touchstartHandler(event) {

	    if (Object.keys(gestures).length === 0) {
	      docEl.addEventListener('touchmove', touchmoveHandler, false);
	      docEl.addEventListener('touchend', touchendHandler, false);
	      docEl.addEventListener('touchcancel', touchcancelHandler, false);
	    }

	    // record every touch
	    for (var i = 0; i < event.changedTouches.length; i++) {
	      var touch = event.changedTouches[i];
	      var touchRecord = {};

	      for (var p in touch) {
	        touchRecord[p] = touch[p];
	      }

	      var gesture = {
	        startTouch: touchRecord,
	        startTime: Date.now(),
	        status: 'tapping',
	        element: event.srcElement || event.target,
	        pressingHandler: setTimeout(function (element, touch) {
	          return function () {
	            if (gesture.status === 'tapping') {
	              gesture.status = 'pressing';

	              fireEvent(element, 'longpress', {
	                // add touch data for weex
	                touch: touch,
	                touches: event.touches,
	                changedTouches: event.changedTouches,
	                touchEvent: event
	              });
	            }

	            clearTimeout(gesture.pressingHandler);
	            gesture.pressingHandler = null;
	          };
	        }(event.srcElement || event.target, event.changedTouches[i]), 500)
	      };
	      gestures[touch.identifier] = gesture;
	    }

	    if (Object.keys(gestures).length == 2) {
	      var elements = [];

	      for (var p in gestures) {
	        elements.push(gestures[p].element);
	      }

	      fireEvent(getCommonAncestor(elements[0], elements[1]), 'dualtouchstart', {
	        touches: slice.call(event.touches),
	        touchEvent: event
	      });
	    }
	  }

	  /**
	   * take over touchmove events, and handle pan and dual related gestures.
	   *
	   * 1. traverse every touch point：
	   * > if 'tapping' and the shift is over 10 pixles, then it's a 'panning'.
	   * 2. if there are two touch points, then calc the tranform and trigger
	   *   'dualtouch'.
	   *
	   * @event
	   * @param  {event} event
	   */
	  function touchmoveHandler(event) {
	    for (var i = 0; i < event.changedTouches.length; i++) {
	      var touch = event.changedTouches[i];
	      var gesture = gestures[touch.identifier];

	      if (!gesture) {
	        return;
	      }

	      if (!gesture.lastTouch) {
	        gesture.lastTouch = gesture.startTouch;
	      }
	      if (!gesture.lastTime) {
	        gesture.lastTime = gesture.startTime;
	      }
	      if (!gesture.velocityX) {
	        gesture.velocityX = 0;
	      }
	      if (!gesture.velocityY) {
	        gesture.velocityY = 0;
	      }
	      if (!gesture.duration) {
	        gesture.duration = 0;
	      }

	      var time = Date.now() - gesture.lastTime;
	      var vx = (touch.clientX - gesture.lastTouch.clientX) / time;
	      var vy = (touch.clientY - gesture.lastTouch.clientY) / time;

	      var RECORD_DURATION = 70;
	      if (time > RECORD_DURATION) {
	        time = RECORD_DURATION;
	      }
	      if (gesture.duration + time > RECORD_DURATION) {
	        gesture.duration = RECORD_DURATION - time;
	      }

	      gesture.velocityX = (gesture.velocityX * gesture.duration + vx * time) / (gesture.duration + time);
	      gesture.velocityY = (gesture.velocityY * gesture.duration + vy * time) / (gesture.duration + time);
	      gesture.duration += time;

	      gesture.lastTouch = {};

	      for (var p in touch) {
	        gesture.lastTouch[p] = touch[p];
	      }
	      gesture.lastTime = Date.now();

	      var displacementX = touch.clientX - gesture.startTouch.clientX;
	      var displacementY = touch.clientY - gesture.startTouch.clientY;
	      var distance = Math.sqrt(Math.pow(displacementX, 2) + Math.pow(displacementY, 2));
	      var isVertical = !(Math.abs(displacementX) > Math.abs(displacementY));
	      var direction = isVertical ? displacementY >= 0 ? 'down' : 'up' : displacementX >= 0 ? 'right' : 'left';

	      // magic number 10: moving 10px means pan, not tap
	      if ((gesture.status === 'tapping' || gesture.status === 'pressing') && distance > 10) {
	        gesture.status = 'panning';
	        gesture.isVertical = isVertical;
	        gesture.direction = direction;

	        fireEvent(gesture.element, 'panstart', {
	          touch: touch,
	          touches: event.touches,
	          changedTouches: event.changedTouches,
	          touchEvent: event,
	          isVertical: gesture.isVertical,
	          direction: direction
	        });
	      }

	      if (gesture.status === 'panning') {
	        gesture.panTime = Date.now();

	        fireEvent(gesture.element, 'panmove', {
	          displacementX: displacementX,
	          displacementY: displacementY,
	          touch: touch,
	          touches: event.touches,
	          changedTouches: event.changedTouches,
	          touchEvent: event,
	          isVertical: gesture.isVertical,
	          direction: direction
	        });
	      }
	    }

	    if (Object.keys(gestures).length == 2) {
	      var position = [];
	      var current = [];
	      var elements = [];
	      var transform;

	      for (var i = 0; i < event.touches.length; i++) {
	        var touch = event.touches[i];
	        var gesture = gestures[touch.identifier];
	        position.push([gesture.startTouch.clientX, gesture.startTouch.clientY]);
	        current.push([touch.clientX, touch.clientY]);
	      }

	      for (var p in gestures) {
	        elements.push(gestures[p].element);
	      }

	      transform = calc(position[0][0], position[0][1], position[1][0], position[1][1], current[0][0], current[0][1], current[1][0], current[1][1]);
	      fireEvent(getCommonAncestor(elements[0], elements[1]), 'dualtouch', {
	        transform: transform,
	        touches: event.touches,
	        touchEvent: event
	      });
	    }
	  }

	  /**
	   * handle touchend event
	   *
	   * 1. if there are tow touch points, then trigger 'dualtouchend'如
	   *
	   * 2. traverse every touch piont：
	   * > if tapping, then trigger 'tap'.
	   * If there is a tap 300 milliseconds before, then it's a 'doubletap'.
	   * > if padding, then decide to trigger 'panend' or 'swipe'
	   * > if pressing, then trigger 'pressend'.
	   *
	   * 3. remove listeners.
	   *
	   * @event
	   * @param  {event} event
	   */
	  function touchendHandler(event) {

	    if (Object.keys(gestures).length == 2) {
	      var elements = [];
	      for (var p in gestures) {
	        elements.push(gestures[p].element);
	      }
	      fireEvent(getCommonAncestor(elements[0], elements[1]), 'dualtouchend', {
	        touches: slice.call(event.touches),
	        touchEvent: event
	      });
	    }

	    for (var i = 0; i < event.changedTouches.length; i++) {
	      var touch = event.changedTouches[i];
	      var id = touch.identifier;
	      var gesture = gestures[id];

	      if (!gesture) {
	        continue;
	      }

	      if (gesture.pressingHandler) {
	        clearTimeout(gesture.pressingHandler);
	        gesture.pressingHandler = null;
	      }

	      if (gesture.status === 'tapping') {
	        gesture.timestamp = Date.now();
	        fireEvent(gesture.element, 'tap', {
	          touch: touch,
	          touchEvent: event
	        });

	        if (lastTap && gesture.timestamp - lastTap.timestamp < 300) {
	          fireEvent(gesture.element, 'doubletap', {
	            touch: touch,
	            touchEvent: event
	          });
	        }

	        lastTap = gesture;
	      }

	      if (gesture.status === 'panning') {
	        var now = Date.now();
	        var duration = now - gesture.startTime;
	        var displacementX = touch.clientX - gesture.startTouch.clientX;
	        var displacementY = touch.clientY - gesture.startTouch.clientY;

	        var velocity = Math.sqrt(gesture.velocityY * gesture.velocityY + gesture.velocityX * gesture.velocityX);
	        var isSwipe = velocity > 0.5 && now - gesture.lastTime < 100;
	        var extra = {
	          duration: duration,
	          isSwipe: isSwipe,
	          velocityX: gesture.velocityX,
	          velocityY: gesture.velocityY,
	          displacementX: displacementX,
	          displacementY: displacementY,
	          touch: touch,
	          touches: event.touches,
	          changedTouches: event.changedTouches,
	          touchEvent: event,
	          isVertical: gesture.isVertical,
	          direction: gesture.direction
	        };

	        fireEvent(gesture.element, 'panend', extra);
	        if (isSwipe) {
	          fireEvent(gesture.element, 'swipe', extra);
	        }
	      }

	      if (gesture.status === 'pressing') {
	        fireEvent(gesture.element, 'pressend', {
	          touch: touch,
	          touchEvent: event
	        });
	      }

	      delete gestures[id];
	    }

	    if (Object.keys(gestures).length === 0) {
	      docEl.removeEventListener('touchmove', touchmoveHandler, false);
	      docEl.removeEventListener('touchend', touchendHandler, false);
	      docEl.removeEventListener('touchcancel', touchcancelHandler, false);
	    }
	  }

	  /**
	   * handle touchcancel
	   *
	   * 1. if there are two touch points, then trigger 'dualtouchend'
	   *
	   * 2. traverse everty touch point:
	   * > if pannnig, then trigger 'panend'
	   * > if pressing, then trigger 'pressend'
	   *
	   * 3. remove listeners
	   *
	   * @event
	   * @param  {event} event
	   */
	  function touchcancelHandler(event) {

	    if (Object.keys(gestures).length == 2) {
	      var elements = [];
	      for (var p in gestures) {
	        elements.push(gestures[p].element);
	      }
	      fireEvent(getCommonAncestor(elements[0], elements[1]), 'dualtouchend', {
	        touches: slice.call(event.touches),
	        touchEvent: event
	      });
	    }

	    for (var i = 0; i < event.changedTouches.length; i++) {
	      var touch = event.changedTouches[i];
	      var id = touch.identifier;
	      var gesture = gestures[id];

	      if (!gesture) {
	        continue;
	      }

	      if (gesture.pressingHandler) {
	        clearTimeout(gesture.pressingHandler);
	        gesture.pressingHandler = null;
	      }

	      if (gesture.status === 'panning') {
	        fireEvent(gesture.element, 'panend', {
	          touch: touch,
	          touches: event.touches,
	          changedTouches: event.changedTouches,
	          touchEvent: event
	        });
	      }
	      if (gesture.status === 'pressing') {
	        fireEvent(gesture.element, 'pressend', {
	          touch: touch,
	          touchEvent: event
	        });
	      }
	      delete gestures[id];
	    }

	    if (Object.keys(gestures).length === 0) {
	      docEl.removeEventListener('touchmove', touchmoveHandler, false);
	      docEl.removeEventListener('touchend', touchendHandler, false);
	      docEl.removeEventListener('touchcancel', touchcancelHandler, false);
	    }
	  }

	  if (!isInitialized) {
	    docEl.addEventListener('touchstart', touchstartHandler, false);
	    isInitialized = true;
	  }

	  /* eslint-disable */

	  // Production steps of ECMA-262, Edition 6, 22.1.2.1
	  // Reference: https://people.mozilla.org/~jorendorff/es6-draft.html#sec-array.from

	  /* istanbul ignore if */
	  if (!Array.from) {
	    Array.from = function () {
	      var toStr = Object.prototype.toString;
	      var isCallable = function isCallable(fn) {
	        return typeof fn === 'function' || toStr.call(fn) === '[object Function]';
	      };
	      var toInteger = function toInteger(value) {
	        var number = Number(value);
	        if (isNaN(number)) {
	          return 0;
	        }
	        if (number === 0 || !isFinite(number)) {
	          return number;
	        }
	        return (number > 0 ? 1 : -1) * Math.floor(Math.abs(number));
	      };
	      var maxSafeInteger = Math.pow(2, 53) - 1;
	      var toLength = function toLength(value) {
	        var len = toInteger(value);
	        return Math.min(Math.max(len, 0), maxSafeInteger);
	      };

	      // The length property of the from method is 1.
	      return function from(arrayLike /*, mapFn, thisArg */) {
	        // 1. Let C be the this value.
	        var C = this;

	        // 2. Let items be ToObject(arrayLike).
	        var items = Object(arrayLike);

	        // 3. ReturnIfAbrupt(items).
	        if (arrayLike == null) {
	          throw new TypeError('Array.from requires an array-like object - not null or undefined');
	        }

	        // 4. If mapfn is undefined, then let mapping be false.
	        var mapFn = arguments.length > 1 ? arguments[1] : void undefined;
	        var T;
	        if (typeof mapFn !== 'undefined') {
	          // 5. else
	          // 5. a If IsCallable(mapfn) is false, throw a TypeError exception.
	          if (!isCallable(mapFn)) {
	            throw new TypeError('Array.from: when provided, the second argument must be a function');
	          }

	          // 5. b. If thisArg was supplied, let T be thisArg; else let T be undefined.
	          if (arguments.length > 2) {
	            T = arguments[2];
	          }
	        }

	        // 10. Let lenValue be Get(items, "length").
	        // 11. Let len be ToLength(lenValue).
	        var len = toLength(items.length);

	        // 13. If IsConstructor(C) is true, then
	        // 13. a. Let A be the result of calling the [[Construct]] internal method of C with an argument list containing the single item len.
	        // 14. a. Else, Let A be ArrayCreate(len).
	        var A = isCallable(C) ? Object(new C(len)) : new Array(len);

	        // 16. Let k be 0.
	        var k = 0;
	        // 17. Repeat, while k < len… (also steps a - h)
	        var kValue;
	        while (k < len) {
	          kValue = items[k];
	          if (mapFn) {
	            A[k] = typeof T === 'undefined' ? mapFn(kValue, k) : mapFn.call(T, kValue, k);
	          } else {
	            A[k] = kValue;
	          }
	          k += 1;
	        }
	        // 18. Let putStatus be Put(A, "length", len, true).
	        A.length = len;
	        // 20. Return A.
	        return A;
	      };
	    }();
	  }

	  var _global = createCommonjsModule(function (module) {
	    // https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	    var global = module.exports = typeof window != 'undefined' && window.Math == Math ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
	    if (typeof __g == 'number') {
	      __g = global;
	    } // eslint-disable-line no-undef
	  });

	  var _core = createCommonjsModule(function (module) {
	    var core = module.exports = { version: '2.4.0' };
	    if (typeof __e == 'number') {
	      __e = core;
	    } // eslint-disable-line no-undef
	  });

	  var _isObject = function _isObject(it) {
	    return (typeof it === 'undefined' ? 'undefined' : _typeof(it)) === 'object' ? it !== null : typeof it === 'function';
	  };

	  var isObject = _isObject;
	  var _anObject = function _anObject(it) {
	    if (!isObject(it)) {
	      throw TypeError(it + ' is not an object!');
	    }
	    return it;
	  };

	  var _fails = function _fails(exec) {
	    try {
	      return !!exec();
	    } catch (e) {
	      return true;
	    }
	  };

	  // Thank's IE8 for his funny defineProperty
	  var _descriptors = !_fails(function () {
	    return Object.defineProperty({}, 'a', { get: function get() {
	        return 7;
	      } }).a != 7;
	  });

	  var isObject$1 = _isObject;
	  var document$1 = _global.document;
	  var is = isObject$1(document$1) && isObject$1(document$1.createElement);
	  var _domCreate = function _domCreate(it) {
	    return is ? document$1.createElement(it) : {};
	  };

	  var _ie8DomDefine = !_descriptors && !_fails(function () {
	    return Object.defineProperty(_domCreate('div'), 'a', { get: function get() {
	        return 7;
	      } }).a != 7;
	  });

	  // 7.1.1 ToPrimitive(input [, PreferredType])
	  var isObject$2 = _isObject;
	  // instead of the ES6 spec version, we didn't implement @@toPrimitive case
	  // and the second argument - flag - preferred type is a string
	  var _toPrimitive = function _toPrimitive(it, S) {
	    if (!isObject$2(it)) {
	      return it;
	    }
	    var fn, val;
	    if (S && typeof (fn = it.toString) == 'function' && !isObject$2(val = fn.call(it))) {
	      return val;
	    }
	    if (typeof (fn = it.valueOf) == 'function' && !isObject$2(val = fn.call(it))) {
	      return val;
	    }
	    if (!S && typeof (fn = it.toString) == 'function' && !isObject$2(val = fn.call(it))) {
	      return val;
	    }
	    throw TypeError("Can't convert object to primitive value");
	  };

	  var anObject = _anObject;
	  var IE8_DOM_DEFINE = _ie8DomDefine;
	  var toPrimitive = _toPrimitive;
	  var dP$1 = Object.defineProperty;

	  var f$1 = _descriptors ? Object.defineProperty : function defineProperty(O, P, Attributes) {
	    anObject(O);
	    P = toPrimitive(P, true);
	    anObject(Attributes);
	    if (IE8_DOM_DEFINE) {
	      try {
	        return dP$1(O, P, Attributes);
	      } catch (e) {/* empty */}
	    }
	    if ('get' in Attributes || 'set' in Attributes) {
	      throw TypeError('Accessors not supported!');
	    }
	    if ('value' in Attributes) {
	      O[P] = Attributes.value;
	    }
	    return O;
	  };

	  var _objectDp = {
	    f: f$1
	  };

	  var _propertyDesc = function _propertyDesc(bitmap, value) {
	    return {
	      enumerable: !(bitmap & 1),
	      configurable: !(bitmap & 2),
	      writable: !(bitmap & 4),
	      value: value
	    };
	  };

	  var dP = _objectDp;
	  var createDesc = _propertyDesc;
	  var _hide = _descriptors ? function (object, key, value) {
	    return dP.f(object, key, createDesc(1, value));
	  } : function (object, key, value) {
	    object[key] = value;
	    return object;
	  };

	  var hasOwnProperty = {}.hasOwnProperty;
	  var _has = function _has(it, key) {
	    return hasOwnProperty.call(it, key);
	  };

	  var id = 0;
	  var px = Math.random();
	  var _uid = function _uid(key) {
	    return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
	  };

	  var _redefine = createCommonjsModule(function (module) {
	    var global = _global,
	        hide = _hide,
	        has = _has,
	        SRC = _uid('src'),
	        TO_STRING = 'toString',
	        $toString = Function[TO_STRING],
	        TPL = ('' + $toString).split(TO_STRING);

	    _core.inspectSource = function (it) {
	      return $toString.call(it);
	    };

	    (module.exports = function (O, key, val, safe) {
	      var isFunction = typeof val == 'function';
	      if (isFunction) {
	        has(val, 'name') || hide(val, 'name', key);
	      }
	      if (O[key] === val) {
	        return;
	      }
	      if (isFunction) {
	        has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
	      }
	      if (O === global) {
	        O[key] = val;
	      } else {
	        if (!safe) {
	          delete O[key];
	          hide(O, key, val);
	        } else {
	          if (O[key]) {
	            O[key] = val;
	          } else {
	            hide(O, key, val);
	          }
	        }
	      }
	      // add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
	    })(Function.prototype, TO_STRING, function toString() {
	      return typeof this == 'function' && this[SRC] || $toString.call(this);
	    });
	  });

	  var _aFunction = function _aFunction(it) {
	    if (typeof it != 'function') {
	      throw TypeError(it + ' is not a function!');
	    }
	    return it;
	  };

	  // optional / simple context binding
	  var aFunction = _aFunction;
	  var _ctx = function _ctx(fn, that, length) {
	    aFunction(fn);
	    if (that === undefined) {
	      return fn;
	    }
	    switch (length) {
	      case 1:
	        return function (a) {
	          return fn.call(that, a);
	        };
	      case 2:
	        return function (a, b) {
	          return fn.call(that, a, b);
	        };
	      case 3:
	        return function (a, b, c) {
	          return fn.call(that, a, b, c);
	        };
	    }
	    return function () /* ...args */{
	      return fn.apply(that, arguments);
	    };
	  };

	  var global$1 = _global;
	  var core = _core;
	  var hide = _hide;
	  var redefine = _redefine;
	  var ctx = _ctx;
	  var PROTOTYPE = 'prototype';

	  var $export$1 = function $export$1(type, name, source) {
	    var IS_FORCED = type & $export$1.F,
	        IS_GLOBAL = type & $export$1.G,
	        IS_STATIC = type & $export$1.S,
	        IS_PROTO = type & $export$1.P,
	        IS_BIND = type & $export$1.B,
	        target = IS_GLOBAL ? global$1 : IS_STATIC ? global$1[name] || (global$1[name] = {}) : (global$1[name] || {})[PROTOTYPE],
	        exports = IS_GLOBAL ? core : core[name] || (core[name] = {}),
	        expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {}),
	        key,
	        own,
	        out,
	        exp;
	    if (IS_GLOBAL) {
	      source = name;
	    }
	    for (key in source) {
	      // contains in native
	      own = !IS_FORCED && target && target[key] !== undefined;
	      // export native or passed
	      out = (own ? target : source)[key];
	      // bind timers to global for call from export context
	      exp = IS_BIND && own ? ctx(out, global$1) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
	      // extend global
	      if (target) {
	        redefine(target, key, out, type & $export$1.U);
	      }
	      // export
	      if (exports[key] != out) {
	        hide(exports, key, exp);
	      }
	      if (IS_PROTO && expProto[key] != out) {
	        expProto[key] = out;
	      }
	    }
	  };
	  global$1.core = core;
	  // type bitmap
	  $export$1.F = 1; // forced
	  $export$1.G = 2; // global
	  $export$1.S = 4; // static
	  $export$1.P = 8; // proto
	  $export$1.B = 16; // bind
	  $export$1.W = 32; // wrap
	  $export$1.U = 64; // safe
	  $export$1.R = 128; // real proto method for `library` 
	  var _export = $export$1;

	  var toString$1 = {}.toString;

	  var _cof = function _cof(it) {
	    return toString$1.call(it).slice(8, -1);
	  };

	  // fallback for non-array-like ES3 and non-enumerable old V8 strings
	  var cof = _cof;
	  var _iobject = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
	    return cof(it) == 'String' ? it.split('') : Object(it);
	  };

	  // 7.2.1 RequireObjectCoercible(argument)
	  var _defined = function _defined(it) {
	    if (it == undefined) {
	      throw TypeError("Can't call method on  " + it);
	    }
	    return it;
	  };

	  // to indexed object, toObject with fallback for non-array-like ES3 strings
	  var IObject$1 = _iobject;
	  var defined = _defined;
	  var _toIobject = function _toIobject(it) {
	    return IObject$1(defined(it));
	  };

	  // 7.1.4 ToInteger
	  var ceil = Math.ceil;
	  var floor = Math.floor;
	  var _toInteger = function _toInteger(it) {
	    return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
	  };

	  // 7.1.15 ToLength
	  var toInteger = _toInteger;
	  var min = Math.min;
	  var _toLength = function _toLength(it) {
	    return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
	  };

	  var toInteger$1 = _toInteger;
	  var max = Math.max;
	  var min$1 = Math.min;
	  var _toIndex = function _toIndex(index, length) {
	    index = toInteger$1(index);
	    return index < 0 ? max(index + length, 0) : min$1(index, length);
	  };

	  // false -> Array#indexOf
	  // true  -> Array#includes
	  var toIObject$1 = _toIobject;
	  var toLength = _toLength;
	  var toIndex = _toIndex;
	  var _arrayIncludes = function _arrayIncludes(IS_INCLUDES) {
	    return function ($this, el, fromIndex) {
	      var O = toIObject$1($this),
	          length = toLength(O.length),
	          index = toIndex(fromIndex, length),
	          value;
	      // Array#includes uses SameValueZero equality algorithm
	      if (IS_INCLUDES && el != el) {
	        while (length > index) {
	          value = O[index++];
	          if (value != value) {
	            return true;
	          }
	          // Array#toIndex ignores holes, Array#includes - not
	        }
	      } else {
	        for (; length > index; index++) {
	          if (IS_INCLUDES || index in O) {
	            if (O[index] === el) {
	              return IS_INCLUDES || index || 0;
	            }
	          }
	        }
	      }return !IS_INCLUDES && -1;
	    };
	  };

	  var global$2 = _global;
	  var SHARED = '__core-js_shared__';
	  var store = global$2[SHARED] || (global$2[SHARED] = {});
	  var _shared = function _shared(key) {
	    return store[key] || (store[key] = {});
	  };

	  var shared = _shared('keys');
	  var uid = _uid;
	  var _sharedKey = function _sharedKey(key) {
	    return shared[key] || (shared[key] = uid(key));
	  };

	  var has = _has;
	  var toIObject = _toIobject;
	  var arrayIndexOf = _arrayIncludes(false);
	  var IE_PROTO = _sharedKey('IE_PROTO');

	  var _objectKeysInternal = function _objectKeysInternal(object, names) {
	    var O = toIObject(object),
	        i = 0,
	        result = [],
	        key;
	    for (key in O) {
	      if (key != IE_PROTO) {
	        has(O, key) && result.push(key);
	      }
	    }
	    // Don't enum bug & hidden keys
	    while (names.length > i) {
	      if (has(O, key = names[i++])) {
	        ~arrayIndexOf(result, key) || result.push(key);
	      }
	    }
	    return result;
	  };

	  // IE 8- don't enum bug keys
	  var _enumBugKeys = 'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'.split(',');

	  // 19.1.2.14 / 15.2.3.14 Object.keys(O)
	  var $keys = _objectKeysInternal;
	  var enumBugKeys = _enumBugKeys;

	  var _objectKeys = Object.keys || function keys(O) {
	    return $keys(O, enumBugKeys);
	  };

	  var f$2 = Object.getOwnPropertySymbols;

	  var _objectGops = {
	    f: f$2
	  };

	  var f$3 = {}.propertyIsEnumerable;

	  var _objectPie = {
	    f: f$3
	  };

	  // 7.1.13 ToObject(argument)
	  var defined$1 = _defined;
	  var _toObject = function _toObject(it) {
	    return Object(defined$1(it));
	  };

	  // 19.1.2.1 Object.assign(target, source, ...)
	  var getKeys = _objectKeys;
	  var gOPS = _objectGops;
	  var pIE = _objectPie;
	  var toObject = _toObject;
	  var IObject = _iobject;
	  var $assign = Object.assign;

	  // should work with symbols and should have deterministic property order (V8 bug)
	  var _objectAssign = !$assign || _fails(function () {
	    var A = {},
	        B = {},
	        S = Symbol(),
	        K = 'abcdefghijklmnopqrst';
	    A[S] = 7;
	    K.split('').forEach(function (k) {
	      B[k] = k;
	    });
	    return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
	  }) ? function assign(target, source) {
	    var arguments$1 = arguments;
	    // eslint-disable-line no-unused-vars
	    var T = toObject(target),
	        aLen = arguments.length,
	        index = 1,
	        getSymbols = gOPS.f,
	        isEnum = pIE.f;
	    while (aLen > index) {
	      var S = IObject(arguments$1[index++]),
	          keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S),
	          length = keys.length,
	          j = 0,
	          key;
	      while (length > j) {
	        if (isEnum.call(S, key = keys[j++])) {
	          T[key] = S[key];
	        }
	      }
	    }return T;
	  } : $assign;

	  // 19.1.3.1 Object.assign(target, source)
	  var $export = _export;

	  $export($export.S + $export.F, 'Object', { assign: _objectAssign });

	  /* eslint-disable */

	  // https://gist.github.com/WebReflection/5593554

	  /* istanbul ignore if */
	  if (!Object.setPrototypeOf) {
	    Object.setPrototypeOf = function (Object, magic) {
	      var set;
	      function setPrototypeOf(O, proto) {
	        set.call(O, proto);
	        return O;
	      }
	      try {
	        // this works already in Firefox and Safari
	        set = Object.getOwnPropertyDescriptor(Object.prototype, magic).set;
	        set.call({}, null);
	      } catch (e) {
	        if (
	        // IE < 11 cannot be shimmed
	        Object.prototype !== {}[magic] ||
	        // neither can any browser that actually
	        // implemented __proto__ correctly
	        // (all but old V8 will return here)
	        { __proto__: null }.__proto__ === void 0
	        // this case means null objects cannot be passed
	        // through setPrototypeOf in a reliable way
	        // which means here a **Sham** is needed instead
	        ) {
	            return;
	          }
	        // nodejs 0.8 and 0.10 are (buggy and..) fine here
	        // probably Chrome or some old Mobile stock browser
	        set = function set(proto) {
	          this[magic] = proto;
	        };
	        // please note that this will **not** work
	        // in those browsers that do not inherit
	        // __proto__ by mistake from Object.prototype
	        // in these cases we should probably throw an error
	        // or at least be informed about the issue
	        setPrototypeOf.polyfill = setPrototypeOf(setPrototypeOf({}, null), Object.prototype) instanceof Object;
	        // setPrototypeOf.polyfill === true means it works as meant
	        // setPrototypeOf.polyfill === false means it's not 100% reliable
	        // setPrototypeOf.polyfill === undefined
	        // or
	        // setPrototypeOf.polyfill ==  null means it's not a polyfill
	        // which means it works as expected
	        // we can even delete Object.prototype.__proto__;
	      }
	      return setPrototypeOf;
	    }(Object, '__proto__');
	  }

	  var _wks = createCommonjsModule(function (module) {
	    var store = _shared('wks'),
	        uid = _uid,
	        _Symbol = _global.Symbol,
	        USE_SYMBOL = typeof _Symbol == 'function';

	    var $exports = module.exports = function (name) {
	      return store[name] || (store[name] = USE_SYMBOL && _Symbol[name] || (USE_SYMBOL ? _Symbol : uid)('Symbol.' + name));
	    };

	    $exports.store = store;
	  });

	  // getting tag from 19.1.3.6 Object.prototype.toString()
	  var cof$1 = _cof;
	  var TAG = _wks('toStringTag');
	  var ARG = cof$1(function () {
	    return arguments;
	  }()) == 'Arguments';

	  // fallback for IE11 Script Access Denied error
	  var tryGet = function tryGet(it, key) {
	    try {
	      return it[key];
	    } catch (e) {/* empty */}
	  };

	  var _classof = function _classof(it) {
	    var O, T, B;
	    return it === undefined ? 'Undefined' : it === null ? 'Null'
	    // @@toStringTag case
	    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
	    // builtinTag case
	    : ARG ? cof$1(O)
	    // ES3 arguments fallback
	    : (B = cof$1(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
	  };

	  // 19.1.3.6 Object.prototype.toString()
	  var classof = _classof;
	  var test = {};
	  test[_wks('toStringTag')] = 'z';
	  if (test + '' != '[object z]') {
	    _redefine(Object.prototype, 'toString', function toString() {
	      return '[object ' + classof(this) + ']';
	    }, true);
	  }

	  var toInteger$2 = _toInteger;
	  var defined$2 = _defined;
	  // true  -> String#at
	  // false -> String#codePointAt
	  var _stringAt = function _stringAt(TO_STRING) {
	    return function (that, pos) {
	      var s = String(defined$2(that)),
	          i = toInteger$2(pos),
	          l = s.length,
	          a,
	          b;
	      if (i < 0 || i >= l) {
	        return TO_STRING ? '' : undefined;
	      }
	      a = s.charCodeAt(i);
	      return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff ? TO_STRING ? s.charAt(i) : a : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
	    };
	  };

	  var _library = false;

	  var _iterators = {};

	  var dP$2 = _objectDp;
	  var anObject$2 = _anObject;
	  var getKeys$1 = _objectKeys;

	  var _objectDps = _descriptors ? Object.defineProperties : function defineProperties(O, Properties) {
	    anObject$2(O);
	    var keys = getKeys$1(Properties),
	        length = keys.length,
	        i = 0,
	        P;
	    while (length > i) {
	      dP$2.f(O, P = keys[i++], Properties[P]);
	    }
	    return O;
	  };

	  var _html = _global.document && document.documentElement;

	  // 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
	  var anObject$1 = _anObject;
	  var dPs = _objectDps;
	  var enumBugKeys$1 = _enumBugKeys;
	  var IE_PROTO$1 = _sharedKey('IE_PROTO');
	  var Empty = function Empty() {/* empty */};
	  var PROTOTYPE$1 = 'prototype';

	  // Create object with fake `null` prototype: use iframe Object with cleared prototype
	  var _createDict = function createDict() {
	    // Thrash, waste and sodomy: IE GC bug
	    var iframe = _domCreate('iframe'),
	        i = enumBugKeys$1.length,
	        lt = '<',
	        gt = '>',
	        iframeDocument;
	    iframe.style.display = 'none';
	    _html.appendChild(iframe);
	    iframe.src = 'javascript:'; // eslint-disable-line no-script-url
	    // createDict = iframe.contentWindow.Object;
	    // html.removeChild(iframe);
	    iframeDocument = iframe.contentWindow.document;
	    iframeDocument.open();
	    iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
	    iframeDocument.close();
	    _createDict = iframeDocument.F;
	    while (i--) {
	      delete _createDict[PROTOTYPE$1][enumBugKeys$1[i]];
	    }
	    return _createDict();
	  };

	  var _objectCreate = Object.create || function create(O, Properties) {
	    var result;
	    if (O !== null) {
	      Empty[PROTOTYPE$1] = anObject$1(O);
	      result = new Empty();
	      Empty[PROTOTYPE$1] = null;
	      // add "__proto__" for Object.getPrototypeOf polyfill
	      result[IE_PROTO$1] = O;
	    } else {
	      result = _createDict();
	    }
	    return Properties === undefined ? result : dPs(result, Properties);
	  };

	  var def = _objectDp.f;
	  var has$2 = _has;
	  var TAG$1 = _wks('toStringTag');

	  var _setToStringTag = function _setToStringTag(it, tag, stat) {
	    if (it && !has$2(it = stat ? it : it.prototype, TAG$1)) {
	      def(it, TAG$1, { configurable: true, value: tag });
	    }
	  };

	  var create$1 = _objectCreate;
	  var descriptor = _propertyDesc;
	  var setToStringTag$1 = _setToStringTag;
	  var IteratorPrototype = {};

	  // 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
	  _hide(IteratorPrototype, _wks('iterator'), function () {
	    return this;
	  });

	  var _iterCreate = function _iterCreate(Constructor, NAME, next) {
	    Constructor.prototype = create$1(IteratorPrototype, { next: descriptor(1, next) });
	    setToStringTag$1(Constructor, NAME + ' Iterator');
	  };

	  // 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
	  var has$3 = _has;
	  var toObject$1 = _toObject;
	  var IE_PROTO$2 = _sharedKey('IE_PROTO');
	  var ObjectProto = Object.prototype;

	  var _objectGpo = Object.getPrototypeOf || function (O) {
	    O = toObject$1(O);
	    if (has$3(O, IE_PROTO$2)) {
	      return O[IE_PROTO$2];
	    }
	    if (typeof O.constructor == 'function' && O instanceof O.constructor) {
	      return O.constructor.prototype;
	    }return O instanceof Object ? ObjectProto : null;
	  };

	  var LIBRARY = _library;
	  var $export$2 = _export;
	  var redefine$1 = _redefine;
	  var hide$1 = _hide;
	  var has$1 = _has;
	  var Iterators = _iterators;
	  var $iterCreate = _iterCreate;
	  var setToStringTag = _setToStringTag;
	  var getPrototypeOf = _objectGpo;
	  var ITERATOR = _wks('iterator');
	  var BUGGY = !([].keys && 'next' in [].keys());
	  var FF_ITERATOR = '@@iterator';
	  var KEYS = 'keys';
	  var VALUES = 'values';

	  var returnThis = function returnThis() {
	    return this;
	  };

	  var _iterDefine = function _iterDefine(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
	    $iterCreate(Constructor, NAME, next);
	    var getMethod = function getMethod(kind) {
	      if (!BUGGY && kind in proto) {
	        return proto[kind];
	      }
	      switch (kind) {
	        case KEYS:
	          return function keys() {
	            return new Constructor(this, kind);
	          };
	        case VALUES:
	          return function values() {
	            return new Constructor(this, kind);
	          };
	      }return function entries() {
	        return new Constructor(this, kind);
	      };
	    };
	    var TAG = NAME + ' Iterator',
	        DEF_VALUES = DEFAULT == VALUES,
	        VALUES_BUG = false,
	        proto = Base.prototype,
	        $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT],
	        $default = $native || getMethod(DEFAULT),
	        $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined,
	        $anyNative = NAME == 'Array' ? proto.entries || $native : $native,
	        methods,
	        key,
	        IteratorPrototype;
	    // Fix native
	    if ($anyNative) {
	      IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
	      if (IteratorPrototype !== Object.prototype) {
	        // Set @@toStringTag to native iterators
	        setToStringTag(IteratorPrototype, TAG, true);
	        // fix for some old engines
	        if (!LIBRARY && !has$1(IteratorPrototype, ITERATOR)) {
	          hide$1(IteratorPrototype, ITERATOR, returnThis);
	        }
	      }
	    }
	    // fix Array#{values, @@iterator}.name in V8 / FF
	    if (DEF_VALUES && $native && $native.name !== VALUES) {
	      VALUES_BUG = true;
	      $default = function values() {
	        return $native.call(this);
	      };
	    }
	    // Define iterator
	    if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
	      hide$1(proto, ITERATOR, $default);
	    }
	    // Plug for library
	    Iterators[NAME] = $default;
	    Iterators[TAG] = returnThis;
	    if (DEFAULT) {
	      methods = {
	        values: DEF_VALUES ? $default : getMethod(VALUES),
	        keys: IS_SET ? $default : getMethod(KEYS),
	        entries: $entries
	      };
	      if (FORCED) {
	        for (key in methods) {
	          if (!(key in proto)) {
	            redefine$1(proto, key, methods[key]);
	          }
	        }
	      } else {
	        $export$2($export$2.P + $export$2.F * (BUGGY || VALUES_BUG), NAME, methods);
	      }
	    }
	    return methods;
	  };

	  var $at = _stringAt(true);

	  // 21.1.3.27 String.prototype[@@iterator]()
	  _iterDefine(String, 'String', function (iterated) {
	    this._t = String(iterated); // target
	    this._i = 0; // next index
	    // 21.1.5.2.1 %StringIteratorPrototype%.next()
	  }, function () {
	    var O = this._t,
	        index = this._i,
	        point;
	    if (index >= O.length) {
	      return { value: undefined, done: true };
	    }
	    point = $at(O, index);
	    this._i += point.length;
	    return { value: point, done: false };
	  });

	  // 22.1.3.31 Array.prototype[@@unscopables]
	  var UNSCOPABLES = _wks('unscopables');
	  var ArrayProto = Array.prototype;
	  if (ArrayProto[UNSCOPABLES] == undefined) {
	    _hide(ArrayProto, UNSCOPABLES, {});
	  }
	  var _addToUnscopables = function _addToUnscopables(key) {
	    ArrayProto[UNSCOPABLES][key] = true;
	  };

	  var _iterStep = function _iterStep(done, value) {
	    return { value: value, done: !!done };
	  };

	  var addToUnscopables = _addToUnscopables;
	  var step = _iterStep;
	  var Iterators$2 = _iterators;
	  var toIObject$2 = _toIobject;

	  // 22.1.3.4 Array.prototype.entries()
	  // 22.1.3.13 Array.prototype.keys()
	  // 22.1.3.29 Array.prototype.values()
	  // 22.1.3.30 Array.prototype[@@iterator]()
	  var es6_array_iterator = _iterDefine(Array, 'Array', function (iterated, kind) {
	    this._t = toIObject$2(iterated); // target
	    this._i = 0; // next index
	    this._k = kind; // kind
	    // 22.1.5.2.1 %ArrayIteratorPrototype%.next()
	  }, function () {
	    var O = this._t,
	        kind = this._k,
	        index = this._i++;
	    if (!O || index >= O.length) {
	      this._t = undefined;
	      return step(1);
	    }
	    if (kind == 'keys') {
	      return step(0, index);
	    }
	    if (kind == 'values') {
	      return step(0, O[index]);
	    }
	    return step(0, [index, O[index]]);
	  }, 'values');

	  // argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
	  Iterators$2.Arguments = Iterators$2.Array;

	  addToUnscopables('keys');
	  addToUnscopables('values');
	  addToUnscopables('entries');

	  var $iterators = es6_array_iterator;
	  var redefine$2 = _redefine;
	  var global$3 = _global;
	  var hide$2 = _hide;
	  var Iterators$1 = _iterators;
	  var wks = _wks;
	  var ITERATOR$1 = wks('iterator');
	  var TO_STRING_TAG = wks('toStringTag');
	  var ArrayValues = Iterators$1.Array;

	  for (var collections = ['NodeList', 'DOMTokenList', 'MediaList', 'StyleSheetList', 'CSSRuleList'], i = 0; i < 5; i++) {
	    var NAME = collections[i],
	        Collection = global$3[NAME],
	        proto = Collection && Collection.prototype,
	        key;
	    if (proto) {
	      if (!proto[ITERATOR$1]) {
	        hide$2(proto, ITERATOR$1, ArrayValues);
	      }
	      if (!proto[TO_STRING_TAG]) {
	        hide$2(proto, TO_STRING_TAG, NAME);
	      }
	      Iterators$1[NAME] = ArrayValues;
	      for (key in $iterators) {
	        if (!proto[key]) {
	          redefine$2(proto, key, $iterators[key], true);
	        }
	      }
	    }
	  }

	  var _anInstance = function _anInstance(it, Constructor, name, forbiddenField) {
	    if (!(it instanceof Constructor) || forbiddenField !== undefined && forbiddenField in it) {
	      throw TypeError(name + ': incorrect invocation!');
	    }return it;
	  };

	  // call something on iterator step with safe closing on error
	  var anObject$3 = _anObject;
	  var _iterCall = function _iterCall(iterator, fn, value, entries) {
	    try {
	      return entries ? fn(anObject$3(value)[0], value[1]) : fn(value);
	      // 7.4.6 IteratorClose(iterator, completion)
	    } catch (e) {
	      var ret = iterator['return'];
	      if (ret !== undefined) {
	        anObject$3(ret.call(iterator));
	      }
	      throw e;
	    }
	  };

	  // check on default Array iterator
	  var Iterators$3 = _iterators;
	  var ITERATOR$2 = _wks('iterator');
	  var ArrayProto$1 = Array.prototype;

	  var _isArrayIter = function _isArrayIter(it) {
	    return it !== undefined && (Iterators$3.Array === it || ArrayProto$1[ITERATOR$2] === it);
	  };

	  var classof$2 = _classof;
	  var ITERATOR$3 = _wks('iterator');
	  var Iterators$4 = _iterators;
	  var core_getIteratorMethod = _core.getIteratorMethod = function (it) {
	    if (it != undefined) {
	      return it[ITERATOR$3] || it['@@iterator'] || Iterators$4[classof$2(it)];
	    }
	  };

	  var _forOf = createCommonjsModule(function (module) {
	    var ctx = _ctx,
	        call = _iterCall,
	        isArrayIter = _isArrayIter,
	        anObject = _anObject,
	        toLength = _toLength,
	        getIterFn = core_getIteratorMethod,
	        BREAK = {},
	        RETURN = {};
	    var exports = module.exports = function (iterable, entries, fn, that, ITERATOR) {
	      var iterFn = ITERATOR ? function () {
	        return iterable;
	      } : getIterFn(iterable),
	          f = ctx(fn, that, entries ? 2 : 1),
	          index = 0,
	          length,
	          step,
	          iterator,
	          result;
	      if (typeof iterFn != 'function') {
	        throw TypeError(iterable + ' is not iterable!');
	      }
	      // fast case for arrays with default iterator
	      if (isArrayIter(iterFn)) {
	        for (length = toLength(iterable.length); length > index; index++) {
	          result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
	          if (result === BREAK || result === RETURN) {
	            return result;
	          }
	        }
	      } else {
	        for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) {
	          result = call(iterator, f, step.value, entries);
	          if (result === BREAK || result === RETURN) {
	            return result;
	          }
	        }
	      }
	    };
	    exports.BREAK = BREAK;
	    exports.RETURN = RETURN;
	  });

	  // 7.3.20 SpeciesConstructor(O, defaultConstructor)
	  var anObject$4 = _anObject;
	  var aFunction$2 = _aFunction;
	  var SPECIES = _wks('species');
	  var _speciesConstructor = function _speciesConstructor(O, D) {
	    var C = anObject$4(O).constructor,
	        S;
	    return C === undefined || (S = anObject$4(C)[SPECIES]) == undefined ? D : aFunction$2(S);
	  };

	  // fast apply, http://jsperf.lnkit.com/fast-apply/5
	  var _invoke = function _invoke(fn, args, that) {
	    var un = that === undefined;
	    switch (args.length) {
	      case 0:
	        return un ? fn() : fn.call(that);
	      case 1:
	        return un ? fn(args[0]) : fn.call(that, args[0]);
	      case 2:
	        return un ? fn(args[0], args[1]) : fn.call(that, args[0], args[1]);
	      case 3:
	        return un ? fn(args[0], args[1], args[2]) : fn.call(that, args[0], args[1], args[2]);
	      case 4:
	        return un ? fn(args[0], args[1], args[2], args[3]) : fn.call(that, args[0], args[1], args[2], args[3]);
	    }return fn.apply(that, args);
	  };

	  var ctx$2 = _ctx;
	  var invoke = _invoke;
	  var html = _html;
	  var cel = _domCreate;
	  var global$5 = _global;
	  var process$2 = global$5.process;
	  var setTask = global$5.setImmediate;
	  var clearTask = global$5.clearImmediate;
	  var MessageChannel = global$5.MessageChannel;
	  var counter = 0;
	  var queue = {};
	  var ONREADYSTATECHANGE = 'onreadystatechange';
	  var defer;
	  var channel;
	  var port;
	  var run = function run() {
	    var id = +this;
	    if (queue.hasOwnProperty(id)) {
	      var fn = queue[id];
	      delete queue[id];
	      fn();
	    }
	  };
	  var listener = function listener(event) {
	    run.call(event.data);
	  };
	  // Node.js 0.9+ & IE10+ has setImmediate, otherwise:
	  if (!setTask || !clearTask) {
	    setTask = function setImmediate(fn) {
	      var arguments$1 = arguments;

	      var args = [],
	          i = 1;
	      while (arguments.length > i) {
	        args.push(arguments$1[i++]);
	      }
	      queue[++counter] = function () {
	        invoke(typeof fn == 'function' ? fn : Function(fn), args);
	      };
	      defer(counter);
	      return counter;
	    };
	    clearTask = function clearImmediate(id) {
	      delete queue[id];
	    };
	    // Node.js 0.8-
	    if (_cof(process$2) == 'process') {
	      defer = function defer(id) {
	        process$2.nextTick(ctx$2(run, id, 1));
	      };
	      // Browsers with MessageChannel, includes WebWorkers
	    } else if (MessageChannel) {
	      channel = new MessageChannel();
	      port = channel.port2;
	      channel.port1.onmessage = listener;
	      defer = ctx$2(port.postMessage, port, 1);
	      // Browsers with postMessage, skip WebWorkers
	      // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
	    } else if (global$5.addEventListener && typeof postMessage == 'function' && !global$5.importScripts) {
	      defer = function defer(id) {
	        global$5.postMessage(id + '', '*');
	      };
	      global$5.addEventListener('message', listener, false);
	      // IE8-
	    } else if (ONREADYSTATECHANGE in cel('script')) {
	      defer = function defer(id) {
	        html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function () {
	          html.removeChild(this);
	          run.call(id);
	        };
	      };
	      // Rest old browsers
	    } else {
	      defer = function defer(id) {
	        setTimeout(ctx$2(run, id, 1), 0);
	      };
	    }
	  }
	  var _task = {
	    set: setTask,
	    clear: clearTask
	  };

	  var global$6 = _global;
	  var macrotask = _task.set;
	  var Observer = global$6.MutationObserver || global$6.WebKitMutationObserver;
	  var process$3 = global$6.process;
	  var Promise$1 = global$6.Promise;
	  var isNode$1 = _cof(process$3) == 'process';

	  var _microtask = function _microtask() {
	    var head, last, notify;

	    var flush = function flush() {
	      var parent, fn;
	      if (isNode$1 && (parent = process$3.domain)) {
	        parent.exit();
	      }
	      while (head) {
	        fn = head.fn;
	        head = head.next;
	        try {
	          fn();
	        } catch (e) {
	          if (head) {
	            notify();
	          } else {
	            last = undefined;
	          }
	          throw e;
	        }
	      }last = undefined;
	      if (parent) {
	        parent.enter();
	      }
	    };

	    // Node.js
	    if (isNode$1) {
	      notify = function notify() {
	        process$3.nextTick(flush);
	      };
	      // browsers with MutationObserver
	    } else if (Observer) {
	      var toggle = true,
	          node = document.createTextNode('');
	      new Observer(flush).observe(node, { characterData: true }); // eslint-disable-line no-new
	      notify = function notify() {
	        node.data = toggle = !toggle;
	      };
	      // environments with maybe non-completely correct, but existent Promise
	    } else if (Promise$1 && Promise$1.resolve) {
	      var promise = Promise$1.resolve();
	      notify = function notify() {
	        promise.then(flush);
	      };
	      // for other environments - macrotask based on:
	      // - setImmediate
	      // - MessageChannel
	      // - window.postMessag
	      // - onreadystatechange
	      // - setTimeout
	    } else {
	      notify = function notify() {
	        // strange IE + webpack dev server bug - use .call(global)
	        macrotask.call(global$6, flush);
	      };
	    }

	    return function (fn) {
	      var task = { fn: fn, next: undefined };
	      if (last) {
	        last.next = task;
	      }
	      if (!head) {
	        head = task;
	        notify();
	      }last = task;
	    };
	  };

	  var redefine$3 = _redefine;
	  var _redefineAll = function _redefineAll(target, src, safe) {
	    for (var key in src) {
	      redefine$3(target, key, src[key], safe);
	    }
	    return target;
	  };

	  var global$7 = _global;
	  var dP$3 = _objectDp;
	  var DESCRIPTORS = _descriptors;
	  var SPECIES$1 = _wks('species');

	  var _setSpecies = function _setSpecies(KEY) {
	    var C = global$7[KEY];
	    if (DESCRIPTORS && C && !C[SPECIES$1]) {
	      dP$3.f(C, SPECIES$1, {
	        configurable: true,
	        get: function get() {
	          return this;
	        }
	      });
	    }
	  };

	  var ITERATOR$4 = _wks('iterator');
	  var SAFE_CLOSING = false;

	  try {
	    var riter = [7][ITERATOR$4]();
	    riter['return'] = function () {
	      SAFE_CLOSING = true;
	    };
	    Array.from(riter, function () {
	      throw 2;
	    });
	  } catch (e) {/* empty */}

	  var _iterDetect = function _iterDetect(exec, skipClosing) {
	    if (!skipClosing && !SAFE_CLOSING) {
	      return false;
	    }
	    var safe = false;
	    try {
	      var arr = [7],
	          iter = arr[ITERATOR$4]();
	      iter.next = function () {
	        return { done: safe = true };
	      };
	      arr[ITERATOR$4] = function () {
	        return iter;
	      };
	      exec(arr);
	    } catch (e) {/* empty */}
	    return safe;
	  };

	  var LIBRARY$1 = _library;
	  var global$4 = _global;
	  var ctx$1 = _ctx;
	  var classof$1 = _classof;
	  var $export$3 = _export;
	  var isObject$3 = _isObject;
	  var aFunction$1 = _aFunction;
	  var anInstance = _anInstance;
	  var forOf = _forOf;
	  var speciesConstructor = _speciesConstructor;
	  var task = _task.set;
	  var microtask = _microtask();
	  var PROMISE = 'Promise';
	  var TypeError$1 = global$4.TypeError;
	  var process$1 = global$4.process;
	  var $Promise = global$4[PROMISE];
	  var process$1 = global$4.process;
	  var isNode = classof$1(process$1) == 'process';
	  var empty = function empty() {/* empty */};
	  var Internal;
	  var GenericPromiseCapability;
	  var Wrapper;

	  var USE_NATIVE = !!function () {
	    try {
	      // correct subclassing with @@species support
	      var promise = $Promise.resolve(1),
	          FakePromise = (promise.constructor = {})[_wks('species')] = function (exec) {
	        exec(empty, empty);
	      };
	      // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
	      return (isNode || typeof PromiseRejectionEvent == 'function') && promise.then(empty) instanceof FakePromise;
	    } catch (e) {/* empty */}
	  }();

	  // helpers
	  var sameConstructor = function sameConstructor(a, b) {
	    // with library wrapper special case
	    return a === b || a === $Promise && b === Wrapper;
	  };
	  var isThenable = function isThenable(it) {
	    var then;
	    return isObject$3(it) && typeof (then = it.then) == 'function' ? then : false;
	  };
	  var newPromiseCapability = function newPromiseCapability(C) {
	    return sameConstructor($Promise, C) ? new PromiseCapability(C) : new GenericPromiseCapability(C);
	  };
	  var PromiseCapability = GenericPromiseCapability = function GenericPromiseCapability(C) {
	    var resolve, reject;
	    this.promise = new C(function ($$resolve, $$reject) {
	      if (resolve !== undefined || reject !== undefined) {
	        throw TypeError$1('Bad Promise constructor');
	      }
	      resolve = $$resolve;
	      reject = $$reject;
	    });
	    this.resolve = aFunction$1(resolve);
	    this.reject = aFunction$1(reject);
	  };
	  var perform = function perform(exec) {
	    try {
	      exec();
	    } catch (e) {
	      return { error: e };
	    }
	  };
	  var notify = function notify(promise, isReject) {
	    if (promise._n) {
	      return;
	    }
	    promise._n = true;
	    var chain = promise._c;
	    microtask(function () {
	      var value = promise._v,
	          ok = promise._s == 1,
	          i = 0;
	      var run = function run(reaction) {
	        var handler = ok ? reaction.ok : reaction.fail,
	            resolve = reaction.resolve,
	            reject = reaction.reject,
	            domain = reaction.domain,
	            result,
	            then;
	        try {
	          if (handler) {
	            if (!ok) {
	              if (promise._h == 2) {
	                onHandleUnhandled(promise);
	              }
	              promise._h = 1;
	            }
	            if (handler === true) {
	              result = value;
	            } else {
	              if (domain) {
	                domain.enter();
	              }
	              result = handler(value);
	              if (domain) {
	                domain.exit();
	              }
	            }
	            if (result === reaction.promise) {
	              reject(TypeError$1('Promise-chain cycle'));
	            } else if (then = isThenable(result)) {
	              then.call(result, resolve, reject);
	            } else {
	              resolve(result);
	            }
	          } else {
	            reject(value);
	          }
	        } catch (e) {
	          reject(e);
	        }
	      };
	      while (chain.length > i) {
	        run(chain[i++]);
	      } // variable length - can't use forEach
	      promise._c = [];
	      promise._n = false;
	      if (isReject && !promise._h) {
	        onUnhandled(promise);
	      }
	    });
	  };
	  var onUnhandled = function onUnhandled(promise) {
	    task.call(global$4, function () {
	      var value = promise._v,
	          abrupt,
	          handler,
	          console;
	      if (isUnhandled(promise)) {
	        abrupt = perform(function () {
	          if (isNode) {
	            process$1.emit('unhandledRejection', value, promise);
	          } else if (handler = global$4.onunhandledrejection) {
	            handler({ promise: promise, reason: value });
	          } else if ((console = global$4.console) && console.error) {
	            console.error('Unhandled promise rejection', value);
	          }
	        });
	        // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
	        promise._h = isNode || isUnhandled(promise) ? 2 : 1;
	      }promise._a = undefined;
	      if (abrupt) {
	        throw abrupt.error;
	      }
	    });
	  };
	  var isUnhandled = function isUnhandled(promise) {
	    if (promise._h == 1) {
	      return false;
	    }
	    var chain = promise._a || promise._c,
	        i = 0,
	        reaction;
	    while (chain.length > i) {
	      reaction = chain[i++];
	      if (reaction.fail || !isUnhandled(reaction.promise)) {
	        return false;
	      }
	    }return true;
	  };
	  var onHandleUnhandled = function onHandleUnhandled(promise) {
	    task.call(global$4, function () {
	      var handler;
	      if (isNode) {
	        process$1.emit('rejectionHandled', promise);
	      } else if (handler = global$4.onrejectionhandled) {
	        handler({ promise: promise, reason: promise._v });
	      }
	    });
	  };
	  var $reject = function $reject(value) {
	    var promise = this;
	    if (promise._d) {
	      return;
	    }
	    promise._d = true;
	    promise = promise._w || promise; // unwrap
	    promise._v = value;
	    promise._s = 2;
	    if (!promise._a) {
	      promise._a = promise._c.slice();
	    }
	    notify(promise, true);
	  };
	  var $resolve = function $resolve(value) {
	    var promise = this,
	        then;
	    if (promise._d) {
	      return;
	    }
	    promise._d = true;
	    promise = promise._w || promise; // unwrap
	    try {
	      if (promise === value) {
	        throw TypeError$1("Promise can't be resolved itself");
	      }
	      if (then = isThenable(value)) {
	        microtask(function () {
	          var wrapper = { _w: promise, _d: false }; // wrap
	          try {
	            then.call(value, ctx$1($resolve, wrapper, 1), ctx$1($reject, wrapper, 1));
	          } catch (e) {
	            $reject.call(wrapper, e);
	          }
	        });
	      } else {
	        promise._v = value;
	        promise._s = 1;
	        notify(promise, false);
	      }
	    } catch (e) {
	      $reject.call({ _w: promise, _d: false }, e); // wrap
	    }
	  };

	  // constructor polyfill
	  if (!USE_NATIVE) {
	    // 25.4.3.1 Promise(executor)
	    $Promise = function Promise(executor) {
	      anInstance(this, $Promise, PROMISE, '_h');
	      aFunction$1(executor);
	      Internal.call(this);
	      try {
	        executor(ctx$1($resolve, this, 1), ctx$1($reject, this, 1));
	      } catch (err) {
	        $reject.call(this, err);
	      }
	    };
	    Internal = function Promise(executor) {
	      this._c = []; // <- awaiting reactions
	      this._a = undefined; // <- checked in isUnhandled reactions
	      this._s = 0; // <- state
	      this._d = false; // <- done
	      this._v = undefined; // <- value
	      this._h = 0; // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
	      this._n = false; // <- notify
	    };
	    Internal.prototype = _redefineAll($Promise.prototype, {
	      // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
	      then: function then(onFulfilled, onRejected) {
	        var reaction = newPromiseCapability(speciesConstructor(this, $Promise));
	        reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
	        reaction.fail = typeof onRejected == 'function' && onRejected;
	        reaction.domain = isNode ? process$1.domain : undefined;
	        this._c.push(reaction);
	        if (this._a) {
	          this._a.push(reaction);
	        }
	        if (this._s) {
	          notify(this, false);
	        }
	        return reaction.promise;
	      },
	      // 25.4.5.1 Promise.prototype.catch(onRejected)
	      'catch': function _catch(onRejected) {
	        return this.then(undefined, onRejected);
	      }
	    });
	    PromiseCapability = function PromiseCapability() {
	      var promise = new Internal();
	      this.promise = promise;
	      this.resolve = ctx$1($resolve, promise, 1);
	      this.reject = ctx$1($reject, promise, 1);
	    };
	  }

	  $export$3($export$3.G + $export$3.W + $export$3.F * !USE_NATIVE, { Promise: $Promise });
	  _setToStringTag($Promise, PROMISE);
	  _setSpecies(PROMISE);
	  Wrapper = _core[PROMISE];

	  // statics
	  $export$3($export$3.S + $export$3.F * !USE_NATIVE, PROMISE, {
	    // 25.4.4.5 Promise.reject(r)
	    reject: function reject(r) {
	      var capability = newPromiseCapability(this),
	          $$reject = capability.reject;
	      $$reject(r);
	      return capability.promise;
	    }
	  });
	  $export$3($export$3.S + $export$3.F * (LIBRARY$1 || !USE_NATIVE), PROMISE, {
	    // 25.4.4.6 Promise.resolve(x)
	    resolve: function resolve(x) {
	      // instanceof instead of internal slot check because we should fix it without replacement native Promise core
	      if (x instanceof $Promise && sameConstructor(x.constructor, this)) {
	        return x;
	      }
	      var capability = newPromiseCapability(this),
	          $$resolve = capability.resolve;
	      $$resolve(x);
	      return capability.promise;
	    }
	  });
	  $export$3($export$3.S + $export$3.F * !(USE_NATIVE && _iterDetect(function (iter) {
	    $Promise.all(iter)['catch'](empty);
	  })), PROMISE, {
	    // 25.4.4.1 Promise.all(iterable)
	    all: function all(iterable) {
	      var C = this,
	          capability = newPromiseCapability(C),
	          resolve = capability.resolve,
	          reject = capability.reject;
	      var abrupt = perform(function () {
	        var values = [],
	            index = 0,
	            remaining = 1;
	        forOf(iterable, false, function (promise) {
	          var $index = index++,
	              alreadyCalled = false;
	          values.push(undefined);
	          remaining++;
	          C.resolve(promise).then(function (value) {
	            if (alreadyCalled) {
	              return;
	            }
	            alreadyCalled = true;
	            values[$index] = value;
	            --remaining || resolve(values);
	          }, reject);
	        });
	        --remaining || resolve(values);
	      });
	      if (abrupt) {
	        reject(abrupt.error);
	      }
	      return capability.promise;
	    },
	    // 25.4.4.4 Promise.race(iterable)
	    race: function race(iterable) {
	      var C = this,
	          capability = newPromiseCapability(C),
	          reject = capability.reject;
	      var abrupt = perform(function () {
	        forOf(iterable, false, function (promise) {
	          C.resolve(promise).then(capability.resolve, reject);
	        });
	      });
	      if (abrupt) {
	        reject(abrupt.error);
	      }
	      return capability.promise;
	    }
	  });

	  var DEFAULT_VIEWPORT_WIDTH = 750;

	  function parseViewportWidth(config) {
	    var width = DEFAULT_VIEWPORT_WIDTH;
	    if (config && config.width) {
	      width = Number(config.width) || config.width;
	    }
	    return width;
	  }

	  function setViewport(config) {
	    if (config === void 0) config = {};

	    var doc = window.document;

	    if (doc) {
	      var viewportWidth = parseViewportWidth(config);

	      // set root font-size
	      doc.documentElement.style.fontSize = viewportWidth / 10 + 'px';

	      var screenWidth = window.screen.width;
	      var scale = screenWidth / viewportWidth;
	      var contents = ["width=" + viewportWidth, "initial-scale=" + scale, "maximum-scale=" + scale, "minimum-scale=" + scale, "user-scalable=no"];

	      var meta = doc.querySelector('meta[name="viewport"]');
	      if (!meta) {
	        meta = doc.createElement('meta');
	        meta.setAttribute('name', 'viewport');
	        document.querySelector('head').appendChild(meta);
	      }

	      meta.setAttribute('content', contents.join(','));
	    }
	  }

	  var event = {
	    /**
	     * openUrl
	     * @param  {string} url
	     */
	    openURL: function openURL(url) {
	      location.href = url;
	    }

	  };

	  var meta = {
	    event: [{
	      name: 'openURL',
	      args: ['string']
	    }]
	  };

	  var Event$1 = {
	    init: function init(Weex) {
	      Weex.registerApiModule('event', event, meta);
	    }
	  };

	  var supportGeolocation = 'geolocation' in navigator;
	  var errorMsg = "[h5-render]: browser doesn't support geolocation.";

	  var geolocation = {
	    // options:
	    //   - enableHighAccuracy optional, value is true or false, false by default.
	    //   - timeout [none-native] optional, value is a number (milliseconds), default vaule is FINFINITY.
	    //   - maximumAge [none-native] optional, value is a number (milliseconds), default value is 0.
	    getCurrentPosition: function getCurrentPosition(successCbId, errorCbId, options) {
	      var this$1 = this;

	      var successCb = function successCb(pos) {
	        return this$1.sender.performCallback(successCbId, pos);
	      };
	      var errorCb = function errorCb(err) {
	        return this$1.sender.performCallback(errorCbId, err);
	      };
	      if (supportGeolocation) {
	        navigator.geolocation.getCurrentPosition(successCb, errorCb, options);
	      } else {
	        console.warn(errorMsg);
	        errorCb(new Error(errorMsg));
	      }
	    },

	    // options: the same with `getCurrentPosition`.
	    watchPosition: function watchPosition(successCbId, errorCbId, options) {
	      var this$1 = this;

	      var successCb = function successCb(pos) {
	        return this$1.sender.performCallback(successCbId, pos, true);
	      };
	      var errorCb = function errorCb(err) {
	        return this$1.sender.performCallback(errorCbId, err);
	      };
	      if (supportGeolocation) {
	        var id = navigator.geolocation.watchPosition(function (pos) {
	          pos.watchId = id;
	          successCb(pos);
	        }, errorCb, options);
	      } else {
	        console.warn(errorMsg);
	        errorCb(new Error(errorMsg));
	      }
	    },

	    clearWatch: function clearWatch(watchId) {
	      if (supportGeolocation) {
	        navigator.geolocation.clearWatch(watchId);
	      } else {
	        console.warn(errorMsg);
	      }
	    }
	  };

	  var meta$1 = {
	    geolocation: [{
	      name: 'getCurrentPosition',
	      args: ['function', 'function', 'object']
	    }, {
	      name: 'watchPosition',
	      args: ['function', 'function', 'object']
	    }, {
	      name: 'clearWatch',
	      args: ['string']
	    }]
	  };

	  var Geolocation = {
	    init: function init(Weex) {
	      Weex.registerApiModule('geolocation', geolocation, meta$1);
	    }
	  };

	  var pageInfo = {

	    setTitle: function setTitle(title) {
	      title = title || 'Weex HTML5';
	      try {
	        title = decodeURIComponent(title);
	      } catch (e) {}
	      document.title = title;
	    }
	  };

	  var meta$2 = {
	    pageInfo: [{
	      name: 'setTitle',
	      args: ['string']
	    }]
	  };

	  var PageInfo = {
	    init: function init(Weex) {
	      Weex.registerApiModule('pageInfo', pageInfo, meta$2);
	    }
	  };

	  /* global localStorage */
	  var supportLocalStorage = typeof localStorage !== 'undefined';
	  var SUCCESS = 'success';
	  var FAILED = 'failed';
	  var INVALID_PARAM = 'invalid_param';
	  var UNDEFINED = 'undefined';

	  var storage = {

	    /**
	     * When passed a key name and value, will add that key to the storage,
	     * or update that key's value if it already exists.
	     * @param {string} key
	     * @param {string} value
	     * @param {function} callbackId
	     */
	    setItem: function setItem(key, value, callbackId) {
	      if (!supportLocalStorage) {
	        console.error('your browser is not support localStorage yet.');
	        return;
	      }
	      var sender = this.sender;
	      if (!key || !value) {
	        sender.performCallback(callbackId, {
	          result: 'failed',
	          data: INVALID_PARAM
	        });
	        return;
	      }
	      try {
	        localStorage.setItem(key, value);
	        sender.performCallback(callbackId, {
	          result: SUCCESS,
	          data: UNDEFINED
	        });
	      } catch (e) {
	        // accept any exception thrown during a storage attempt as a quota error
	        sender.performCallback(callbackId, {
	          result: FAILED,
	          data: UNDEFINED
	        });
	      }
	    },

	    /**
	     * When passed a key name, will return that key's value.
	     * @param {string} key
	     * @param {function} callbackId
	     */
	    getItem: function getItem(key, callbackId) {
	      if (!supportLocalStorage) {
	        console.error('your browser is not support localStorage yet.');
	        return;
	      }
	      var sender = this.sender;
	      if (!key) {
	        sender.performCallback(callbackId, {
	          result: FAILED,
	          data: INVALID_PARAM
	        });
	        return;
	      }
	      var val = localStorage.getItem(key);
	      sender.performCallback(callbackId, {
	        result: val ? SUCCESS : FAILED,
	        data: val || UNDEFINED
	      });
	    },

	    /**
	     *When passed a key name, will remove that key from the storage.
	     * @param {string} key
	     * @param {function} callbackId
	     */
	    removeItem: function removeItem(key, callbackId) {
	      if (!supportLocalStorage) {
	        console.error('your browser is not support localStorage yet.');
	        return;
	      }
	      var sender = this.sender;
	      if (!key) {
	        sender.performCallback(callbackId, {
	          result: FAILED,
	          data: INVALID_PARAM
	        });
	        return;
	      }
	      localStorage.removeItem(key);
	      sender.performCallback(callbackId, {
	        result: SUCCESS,
	        data: UNDEFINED
	      });
	    },

	    /**
	     * Returns an integer representing the number of data items stored in the Storage object.
	     * @param {function} callbackId
	     */
	    length: function length(callbackId) {
	      if (!supportLocalStorage) {
	        console.error('your browser is not support localStorage yet.');
	        return;
	      }
	      var sender = this.sender;
	      var len = localStorage.length;
	      sender.performCallback(callbackId, {
	        result: SUCCESS,
	        data: len
	      });
	    },

	    /**
	     * Returns an array that contains all keys stored in Storage object.
	     * @param {function} callbackId
	     */
	    getAllKeys: function getAllKeys(callbackId) {
	      if (!supportLocalStorage) {
	        console.error('your browser is not support localStorage yet.');
	        return;
	      }
	      var sender = this.sender;
	      var _arr = [];
	      for (var i = 0; i < localStorage.length; i++) {
	        _arr.push(localStorage.key(i));
	      }
	      sender.performCallback(callbackId, {
	        result: SUCCESS,
	        data: _arr
	      });
	    }
	  };

	  var meta$3 = {
	    storage: [{
	      name: 'setItem',
	      args: ['string', 'string', 'function']
	    }, {
	      name: 'getItem',
	      args: ['string', 'function']
	    }, {
	      name: 'removeItem',
	      args: ['string', 'function']
	    }, {
	      name: 'length',
	      args: ['function']
	    }, {
	      name: 'getAllKeys',
	      args: ['function']
	    }]
	  };

	  var Storage = {
	    init: function init(Weex) {
	      Weex.registerApiModule('storage', storage, meta$3);
	    }
	  };

	  typeof window === 'undefined' && (window = { ctrl: {}, lib: {} });!window.ctrl && (window.ctrl = {});!window.lib && (window.lib = {});!function (a, b) {
	    function c(a) {
	      var b = {};Object.defineProperty(this, "params", { set: function set(a) {
	          if ("object" == (typeof a === 'undefined' ? 'undefined' : _typeof(a))) {
	            for (var c in b) {
	              delete b[c];
	            }for (var c in a) {
	              b[c] = a[c];
	            }
	          }
	        }, get: function get() {
	          return b;
	        }, enumerable: !0 }), Object.defineProperty(this, "search", { set: function set(a) {
	          if ("string" == typeof a) {
	            0 === a.indexOf("?") && (a = a.substr(1));var c = a.split("&");for (var d in b) {
	              delete b[d];
	            }for (var e = 0; e < c.length; e++) {
	              var f = c[e].split("=");if (void 0 !== f[1] && (f[1] = f[1].toString()), f[0]) {
	                try {
	                  b[decodeURIComponent(f[0])] = decodeURIComponent(f[1]);
	                } catch (g) {
	                  b[f[0]] = f[1];
	                }
	              }
	            }
	          }
	        }, get: function get() {
	          var a = [];for (var c in b) {
	            if (void 0 !== b[c]) {
	              if ("" !== b[c]) {
	                try {
	                  a.push(encodeURIComponent(c) + "=" + encodeURIComponent(b[c]));
	                } catch (d) {
	                  a.push(c + "=" + b[c]);
	                }
	              } else {
	                try {
	                  a.push(encodeURIComponent(c));
	                } catch (d) {
	                  a.push(c);
	                }
	              }
	            }
	          }return a.length ? "?" + a.join("&") : "";
	        }, enumerable: !0 });var c;Object.defineProperty(this, "hash", { set: function set(a) {
	          "string" == typeof a && (a && a.indexOf("#") < 0 && (a = "#" + a), c = a || "");
	        }, get: function get() {
	          return c;
	        }, enumerable: !0 }), this.set = function (a) {
	        a = a || "";var b;if (!(b = a.match(new RegExp("^([a-z0-9-]+:)?[/]{2}(?:([^@/:?]+)(?::([^@/:]+))?@)?([^:/?#]+)(?:[:]([0-9]+))?([/][^?#;]*)?(?:[?]([^#]*))?([#][^?]*)?$", "i")))) {
	          throw new Error("Wrong uri scheme.");
	        }this.protocol = b[1] || ("object" == (typeof location === 'undefined' ? 'undefined' : _typeof(location)) ? location.protocol : ""), this.username = b[2] || "", this.password = b[3] || "", this.hostname = this.host = b[4], this.port = b[5] || "", this.pathname = b[6] || "/", this.search = b[7] || "", this.hash = b[8] || "", this.origin = this.protocol + "//" + this.hostname;
	      }, this.toString = function () {
	        var a = this.protocol + "//";return this.username && (a += this.username, this.password && (a += ":" + this.password), a += "@"), a += this.host, this.port && "80" !== this.port && (a += ":" + this.port), this.pathname && (a += this.pathname), this.search && (a += this.search), this.hash && (a += this.hash), a;
	      }, a && this.set(a.toString());
	    }b.httpurl = function (a) {
	      return new c(a);
	    };
	  }(window, window.lib || (window.lib = {}));

	  var index$2 = function index$2(str) {
	    return encodeURIComponent(str).replace(/[!'()*]/g, function (c) {
	      return '%' + c.charCodeAt(0).toString(16).toUpperCase();
	    });
	  };

	  /* eslint-disable no-unused-vars */
	  var hasOwnProperty$1 = Object.prototype.hasOwnProperty;
	  var propIsEnumerable = Object.prototype.propertyIsEnumerable;

	  function toObject$2(val) {
	    if (val === null || val === undefined) {
	      throw new TypeError('Object.assign cannot be called with null or undefined');
	    }

	    return Object(val);
	  }

	  function shouldUseNative() {
	    try {
	      if (!Object.assign) {
	        return false;
	      }

	      // Detect buggy property enumeration order in older V8 versions.

	      // https://bugs.chromium.org/p/v8/issues/detail?id=4118
	      var test1 = new String('abc'); // eslint-disable-line
	      test1[5] = 'de';
	      if (Object.getOwnPropertyNames(test1)[0] === '5') {
	        return false;
	      }

	      // https://bugs.chromium.org/p/v8/issues/detail?id=3056
	      var test2 = {};
	      for (var i = 0; i < 10; i++) {
	        test2['_' + String.fromCharCode(i)] = i;
	      }
	      var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
	        return test2[n];
	      });
	      if (order2.join('') !== '0123456789') {
	        return false;
	      }

	      // https://bugs.chromium.org/p/v8/issues/detail?id=3056
	      var test3 = {};
	      'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
	        test3[letter] = letter;
	      });
	      if (Object.keys(Object.assign({}, test3)).join('') !== 'abcdefghijklmnopqrst') {
	        return false;
	      }

	      return true;
	    } catch (e) {
	      // We don't expect any of the above to throw, but better to be safe.
	      return false;
	    }
	  }

	  var index$4 = shouldUseNative() ? Object.assign : function (target, source) {
	    var arguments$1 = arguments;

	    var from;
	    var to = toObject$2(target);
	    var symbols;

	    for (var s = 1; s < arguments.length; s++) {
	      from = Object(arguments$1[s]);

	      for (var key in from) {
	        if (hasOwnProperty$1.call(from, key)) {
	          to[key] = from[key];
	        }
	      }

	      if (Object.getOwnPropertySymbols) {
	        symbols = Object.getOwnPropertySymbols(from);
	        for (var i = 0; i < symbols.length; i++) {
	          if (propIsEnumerable.call(from, symbols[i])) {
	            to[symbols[i]] = from[symbols[i]];
	          }
	        }
	      }
	    }

	    return to;
	  };

	  var strictUriEncode = index$2;
	  var objectAssign = index$4;

	  function encode(value, opts) {
	    if (opts.encode) {
	      return opts.strict ? strictUriEncode(value) : encodeURIComponent(value);
	    }

	    return value;
	  }

	  var extract = function extract(str) {
	    return str.split('?')[1] || '';
	  };

	  var parse$1 = function parse$1(str) {
	    // Create an object with no prototype
	    // https://github.com/sindresorhus/query-string/issues/47
	    var ret = Object.create(null);

	    if (typeof str !== 'string') {
	      return ret;
	    }

	    str = str.trim().replace(/^(\?|#|&)/, '');

	    if (!str) {
	      return ret;
	    }

	    str.split('&').forEach(function (param) {
	      var parts = param.replace(/\+/g, ' ').split('=');
	      // Firefox (pre 40) decodes `%3D` to `=`
	      // https://github.com/sindresorhus/query-string/pull/37
	      var key = parts.shift();
	      var val = parts.length > 0 ? parts.join('=') : undefined;

	      key = decodeURIComponent(key);

	      // missing `=` should be `null`:
	      // http://w3.org/TR/2012/WD-url-20120524/#collect-url-parameters
	      val = val === undefined ? null : decodeURIComponent(val);

	      if (ret[key] === undefined) {
	        ret[key] = val;
	      } else if (Array.isArray(ret[key])) {
	        ret[key].push(val);
	      } else {
	        ret[key] = [ret[key], val];
	      }
	    });

	    return ret;
	  };

	  var stringify = function stringify(obj, opts) {
	    var defaults = {
	      encode: true,
	      strict: true
	    };

	    opts = objectAssign(defaults, opts);

	    return obj ? Object.keys(obj).sort().map(function (key) {
	      var val = obj[key];

	      if (val === undefined) {
	        return '';
	      }

	      if (val === null) {
	        return encode(key, opts);
	      }

	      if (Array.isArray(val)) {
	        var result = [];

	        val.slice().forEach(function (val2) {
	          if (val2 === undefined) {
	            return;
	          }

	          if (val2 === null) {
	            result.push(encode(key, opts));
	          } else {
	            result.push(encode(key, opts) + '=' + encode(val2, opts));
	          }
	        });

	        return result.join('&');
	      }

	      return encode(key, opts) + '=' + encode(val, opts);
	    }).filter(function (x) {
	      return x.length > 0;
	    }).join('&') : '';
	  };

	  var index$1 = {
	    extract: extract,
	    parse: parse$1,
	    stringify: stringify
	  };

	  /* global lib, XMLHttpRequest */
	  /* deps: httpurl */

	  var utils;

	  var jsonpCnt = 0;
	  var ERROR_STATE = -1;

	  function _jsonp(config, callback, progressCallback) {
	    var cbName = 'jsonp_' + ++jsonpCnt;
	    var url;

	    if (!config.url) {
	      console.error('[h5-render] config.url should be set in _jsonp for \'fetch\' API.');
	    }

	    global[cbName] = function (cb) {
	      return function (response) {
	        callback({
	          status: 200,
	          ok: true,
	          statusText: 'OK',
	          data: response
	        });
	        delete global[cb];
	      };
	    }(cbName);

	    var script = document.createElement('script');
	    try {
	      url = lib.httpurl(config.url);
	    } catch (err) {
	      console.error('[h5-render] invalid config.url in _jsonp for \'fetch\' API: ' + config.url);
	    }
	    url.params.callback = cbName;
	    script.type = 'text/javascript';
	    script.src = url.toString();
	    // script.onerror is not working on IE or safari.
	    // but they are not considered here.
	    script.onerror = function (cb) {
	      return function (err) {
	        console.error('[h5-render] unexpected error in _jsonp for \'fetch\' API', err);
	        callback({
	          status: ERROR_STATE,
	          ok: false,
	          statusText: '',
	          data: ''
	        });
	        delete global[cb];
	      };
	    }(cbName);
	    var head = document.getElementsByTagName('head')[0];
	    head.insertBefore(script, null);
	  }

	  function _xhr(config, callback, progressCallback) {
	    var xhr = new XMLHttpRequest();
	    xhr.responseType = config.type;
	    xhr.open(config.method, config.url, true);

	    // cors cookie support
	    if (config.withCredentials === true) {
	      xhr.withCredentials = true;
	    }

	    var headers = config.headers || {};
	    for (var k in headers) {
	      xhr.setRequestHeader(k, headers[k]);
	    }

	    xhr.onload = function (res) {
	      callback({
	        status: xhr.status,
	        ok: xhr.status >= 200 && xhr.status < 300,
	        statusText: xhr.statusText,
	        data: xhr.response,
	        headers: xhr.getAllResponseHeaders().split('\n').reduce(function (obj, headerStr) {
	          var headerArr = headerStr.match(/(.+): (.+)/);
	          if (headerArr) {
	            obj[headerArr[1]] = headerArr[2];
	          }
	          return obj;
	        }, {})
	      });
	    };

	    if (progressCallback) {
	      xhr.onprogress = function (e) {
	        progressCallback({
	          readyState: xhr.readyState,
	          status: xhr.status,
	          length: e.loaded,
	          total: e.total,
	          statusText: xhr.statusText,
	          headers: xhr.getAllResponseHeaders().split('\n').reduce(function (obj, headerStr) {
	            var headerArr = headerStr.match(/(.+): (.+)/);
	            if (headerArr) {
	              obj[headerArr[1]] = headerArr[2];
	            }
	            return obj;
	          }, {})
	        });
	      };
	    }

	    xhr.onerror = function (err) {
	      console.error('[h5-render] unexpected error in _xhr for \'fetch\' API', err);
	      callback({
	        status: ERROR_STATE,
	        ok: false,
	        statusText: '',
	        data: ''
	      });
	    };

	    xhr.send(config.body);
	  }

	  var stream = {

	    /**
	     * sendHttp
	     * @deprecated
	     * Note: This API is deprecated. Please use stream.fetch instead.
	     * send a http request through XHR.
	     * @param  {obj} params
	     *  - method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'HEAD' | 'PATCH',
	     *  - url: url requested
	     * @param  {string} callbackId
	     */
	    sendHttp: function sendHttp(param, callbackId) {
	      if (typeof param === 'string') {
	        try {
	          param = JSON.parse(param);
	        } catch (e) {
	          return;
	        }
	      }
	      if ((typeof param === 'undefined' ? 'undefined' : _typeof(param)) !== 'object' || !param.url) {
	        return console.error('[h5-render] invalid config or invalid config.url for sendHttp API');
	      }

	      var sender = this.sender;
	      var method = param.method || 'GET';
	      var xhr = new XMLHttpRequest();
	      xhr.open(method, param.url, true);
	      xhr.onload = function () {
	        sender.performCallback(callbackId, this.responseText);
	      };
	      xhr.onerror = function (error) {
	        return console.error('[h5-render] unexpected error in sendHttp API', error);
	        // sender.performCallback(
	        //   callbackId,
	        //   new Error('unexpected error in sendHttp API')
	        // )
	      };
	      xhr.send();
	    },

	    /**
	     * fetch
	     * use stream.fetch to request for a json file, a plain text file or
	     * a arraybuffer for a file stream. (You can use Blob and FileReader
	     * API implemented by most modern browsers to read a arraybuffer.)
	     * @param  {object} options config options
	     *   - method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'HEAD' | 'PATCH'
	     *   - headers {obj}
	     *   - url {string}
	     *   - mode {string} 'cors' | 'no-cors' | 'same-origin' | 'navigate'
	     *   - withCredentials {boolean}
	     *   - body
	     *   - type {string} 'json' | 'jsonp' | 'text'
	     * @param  {string} callbackId
	     * @param  {string} progressCallbackId
	     */
	    fetch: function fetch(options, callbackId, progressCallbackId) {
	      var DEFAULT_METHOD = 'GET';
	      var DEFAULT_MODE = 'cors';
	      var DEFAULT_TYPE = 'text';

	      var methodOptions = ['GET', 'POST', 'PUT', 'DELETE', 'HEAD', 'PATCH'];
	      var modeOptions = ['cors', 'no-cors', 'same-origin', 'navigate'];
	      var typeOptions = ['text', 'json', 'jsonp', 'arraybuffer'];

	      // const fallback = false  // fallback from 'fetch' API to XHR.
	      var sender = this.sender;

	      var config = utils.extend({}, options);

	      // validate options.method
	      if (typeof config.method === 'undefined') {
	        config.method = DEFAULT_METHOD;
	        console.warn('[h5-render] options.method for \'fetch\' API has been set to ' + 'default value \'' + config.method + '\'');
	      } else if (methodOptions.indexOf((config.method + '').toUpperCase()) === -1) {
	        return console.error('[h5-render] options.method \'' + config.method + '\' for \'fetch\' API should be one of ' + methodOptions + '.');
	      }

	      // validate options.url
	      if (!config.url) {
	        return console.error('[h5-render] options.url should be set for \'fetch\' API.');
	      }

	      // validate body content for method 'GET'.
	      if (config.method.toUpperCase() === 'GET') {
	        var body = config.body;
	        if (utils.isPlainObject(body)) {
	          body = index$1.stringify(body);
	        }
	        var url = config.url;
	        var hashIdx = url.indexOf('#');
	        hashIdx <= -1 && (hashIdx = url.length);
	        var hash = url.substr(hashIdx);
	        hash && (hash = '#' + hash);
	        url = url.substring(0, hashIdx);
	        url += (config.url.indexOf('?') <= -1 ? '?' : '&') + body + hash;
	        config.url = url;
	      }

	      // validate options.mode
	      if (typeof config.mode === 'undefined') {
	        config.mode = DEFAULT_MODE;
	      } else if (modeOptions.indexOf((config.mode + '').toLowerCase()) === -1) {
	        return console.error('[h5-render] options.mode \'' + config.mode + '\' for \'fetch\' API should be one of ' + modeOptions + '.');
	      }

	      // validate options.type
	      if (typeof config.type === 'undefined') {
	        config.type = DEFAULT_TYPE;
	        console.warn('[h5-render] options.type for \'fetch\' API has been set to ' + 'default value \'' + config.type + '\'.');
	      } else if (typeOptions.indexOf((config.type + '').toLowerCase()) === -1) {
	        return console.error('[h5-render] options.type \'' + config.type + '\' for \'fetch\' API should be one of ' + typeOptions + '.');
	      }

	      // validate options.headers
	      config.headers = config.headers || {};
	      if (!utils.isPlainObject(config.headers)) {
	        return console.error('[h5-render] options.headers should be a plain object');
	      }

	      // validate options.timeout
	      config.timeout = parseInt(config.timeout, 10) || 2500;

	      var _callArgs = [config, function (res) {
	        sender.performCallback(callbackId, res);
	      }];
	      if (progressCallbackId) {
	        _callArgs.push(function (res) {
	          // Set 'keepAlive' to true for sending continuous callbacks
	          sender.performCallback(progressCallbackId, res, true);
	        });
	      }

	      if (config.type === 'jsonp') {
	        _jsonp.apply(this, _callArgs);
	      } else {
	        _xhr.apply(this, _callArgs);
	      }
	    }

	  };

	  var meta$4 = {
	    stream: [{
	      name: 'sendHttp',
	      args: ['object', 'function']
	    }, {
	      name: 'fetch',
	      args: ['object', 'function', 'function']
	    }]
	  };

	  var Stream = {
	    init: function init(Weex) {
	      utils = Weex.utils;
	      Weex.registerApiModule('stream', stream, meta$4);
	    }
	  };

	  /**
	  
	  AUCTION:
	  taskQueue
	  Clipboard.setString()  NOW not works, facing to user-act lose of taskQueue.
	  
	  works in Chrome Firefox Opera. but not in Safari.
	  @see https://developer.mozilla.org/en-US/docs/Web/API/Document/execCommand#Browser_compatibility
	  
	  Clipboard.getString() unimplemented. There is no easy way to do paste from clipboard to js variable.
	  
	  So look out your app behavior, when downgrade to html5 render.
	  Any idea is welcome.
	  **/

	  var WEEX_CLIPBOARD_ID = '__weex_clipboard_id__';

	  var clipboard = {

	    getString: function getString(callbackId) {
	      // not supported in html5
	      console.log('clipboard.getString() is not supported now.');
	    },

	    setString: function setString(text) {
	      // not support safari
	      if (typeof text === 'string' && text !== '' && document.execCommand) {
	        var tempInput = element();
	        tempInput.value = text;

	        tempInput.select();
	        document.execCommand('copy');
	        // var out = document.execCommand('copy');
	        // console.log("execCommand out is " + out);
	        tempInput.value = '';
	        tempInput.blur();
	      } else {
	        console.log('only support string input now');
	      }
	    }

	  };

	  function element() {
	    var tempInput = document.getElementById(WEEX_CLIPBOARD_ID);
	    if (!tempInput) {
	      tempInput = document.createElement('input');
	      tempInput.setAttribute('id', WEEX_CLIPBOARD_ID);
	      tempInput.style.cssText = 'height:1px;width:1px;border:none;';
	      // tempInput.style.cssText = "height:40px;width:300px;border:solid;"
	      document.body.appendChild(tempInput);
	    }
	    return tempInput;
	  }

	  var meta$5 = {
	    clipboard: [{
	      name: 'getString',
	      args: ['function']
	    }, {
	      name: 'setString',
	      args: ['string']
	    }]
	  };

	  var Clipboard = {
	    init: function init(Weex) {
	      Weex.registerApiModule('clipboard', clipboard, meta$5);
	    }
	  };

	  /**
	   * Simple bind, faster than native
	   *
	   * @param {Function} fn
	   * @param {Object} ctx
	   * @return {Function}
	   */
	  function bind(fn, ctx) {
	    return function (a) {
	      var l = arguments.length;
	      return l ? l > 1 ? fn.apply(ctx, arguments) : fn.call(ctx, a) : fn.call(ctx);
	    };
	  }

	  function debounce(func, wait) {
	    var timerId;
	    function later() {
	      timerId = null;
	      func.apply(null);
	    }
	    return function () {
	      clearTimeout(timerId);
	      timerId = setTimeout(later, wait);
	    };
	  }

	  function throttle(func, wait) {
	    var last = 0;
	    return function () {
	      var args = [],
	          len = arguments.length;
	      while (len--) {
	        args[len] = arguments[len];
	      }var context = this;
	      var time = new Date().getTime();
	      if (time - last > wait) {
	        func.apply(context, args);
	        last = time;
	      }
	    };
	  }

	  /**
	   * Create Event.
	   * @param {DOMString} type
	   * @param {Object} props
	   */
	  // export function createEvent (context, type, props) {
	  //   const event = new Event(type, { bubbles: false })
	  //   // event.preventDefault()
	  //   event.stopPropagation()
	  //
	  //   extend(event, props)
	  //
	  //   Object.defineProperty(event, 'target', {
	  //     enumerable: true,
	  //     value: context || null
	  //   })
	  //
	  //   return event
	  // }

	  /**
	   * Create Custom Event.
	   * @param {DOMString} type
	   * @param {Object} props
	   */
	  // export function createCustomEvent (context, type, props) {
	  //   // compatibility: http://caniuse.com/#search=customevent
	  //   // const event = new CustomEvent(type)
	  //   const event = document.createEvent('CustomEvent')
	  //   event.initCustomEvent(type, false, true, {})
	  //   // event.preventDefault()
	  //   event.stopPropagation()
	  //
	  //   extend(event, props)
	  //
	  //   // TODO: event.target is readonly
	  //   // Object.defineProperty(event, 'target', {
	  //   //   enumerable: true,
	  //   //   value: context || null
	  //   // })
	  //
	  //   return event
	  // }

	  function mapFormEvents(context) {
	    var eventMap = {};['input', 'change', 'focus', 'blur'].forEach(function (type) {
	      eventMap[type] = function (event) {
	        if (context.$el) {
	          context.value = context.$el.value;
	          event.value = context.$el.value;
	        }
	        context.$emit(type, event);
	      };
	    });
	    return eventMap;
	  }

	  function getParentScroller(vnode) {
	    if (!vnode) {
	      return null;
	    }
	    if (vnode.weexType === 'scroller' || vnode.weexType === 'list') {
	      return vnode;
	    }
	    return getParentScroller(vnode.$parent);
	  }

	  function hasIntersection(rect, ctRect) {
	    return rect.left < ctRect.right && rect.right > ctRect.left && rect.top < ctRect.bottom && rect.bottom > ctRect.top;
	  }

	  function isComponentVisible(component) {
	    if (component.$el) {
	      var scroller = getParentScroller(component);
	      if (scroller && scroller.$el) {
	        var visible = hasIntersection(component.$el.getBoundingClientRect(), scroller.$el.getBoundingClientRect());
	        return visible;
	      }
	    }
	    return false;
	  }

	  // TODO: improve the efficiency
	  function watchAppear(context) {
	    if (!context) {
	      return null;
	    }

	    context.$nextTick(function () {
	      if (context.$options && context.$options._parentListeners) {
	        var on = context.$options._parentListeners;
	        if (on.appear || on.disappear) {
	          context._visible = isComponentVisible(context);
	          if (context._visible) {
	            // TODO: create custom event object
	            on.appear && on.appear.fn({});
	          }
	          var handler = throttle(function (event) {
	            var visible = isComponentVisible(context);
	            if (visible !== context._visible) {
	              context._visible = visible;
	              var listener = visible ? on.appear : on.disappear;
	              if (listener && listener.fn) {
	                listener.fn(event);
	              }
	            }
	          }, 100);

	          // TODO: more reliable
	          var scroller = getParentScroller(context);
	          var element = scroller && scroller.$el || window;
	          element.addEventListener('scroll', handler, false);
	        }
	      }
	    });
	  }

	  /**
	   * Create a cached version of a pure function.
	   */
	  function cached(fn) {
	    var cache = Object.create(null);
	    return function cachedFn(str) {
	      var hit = cache[str];
	      return hit || (cache[str] = fn(str));
	    };
	  }

	  /**
	   * Camelize a hyphen-delmited string.
	   */
	  var camelizeRE = /-(\w)/g;
	  var camelize = cached(function (str) {
	    return str.replace(camelizeRE, function (_, c) {
	      return c.toUpperCase();
	    });
	  });

	  /**
	   * Capitalize a string.
	   */
	  var capitalize = cached(function (str) {
	    return str.charAt(0).toUpperCase() + str.slice(1);
	  });

	  /**
	   * Hyphenate a camelCase string.
	   */
	  var hyphenateRE = /([^-])([A-Z])/g;
	  var hyphenate = cached(function (str) {
	    return str.replace(hyphenateRE, '$1-$2').replace(hyphenateRE, '$1-$2').toLowerCase();
	  });

	  function camelToKebab(name) {
	    if (!name) {
	      return '';
	    }
	    return name.replace(/([A-Z])/g, function (g, g1) {
	      return "-" + g1.toLowerCase();
	    });
	  }

	  /**
	   * Mix properties into target object.
	   */
	  function extend(to, _from) {
	    for (var key in _from) {
	      to[key] = _from[key];
	    }
	    return to;
	  }

	  function appendStyle(css, styleId, replace) {
	    var style = document.getElementById(styleId);
	    if (style && replace) {
	      style.parentNode.removeChild(style);
	      style = null;
	    }
	    if (!style) {
	      style = document.createElement('style');
	      style.type = 'text/css';
	      styleId && (style.id = styleId);
	      document.getElementsByTagName('head')[0].appendChild(style);
	    }
	    style.appendChild(document.createTextNode(css));
	  }

	  /**
	   * Strict object type check. Only returns true
	   * for plain JavaScript objects.
	   *
	   * @param {*} obj
	   * @return {Boolean}
	   */

	  var toString$2 = Object.prototype.toString;
	  var OBJECT_STRING = '[object Object]';
	  function isPlainObject(obj) {
	    return toString$2.call(obj) === OBJECT_STRING;
	  }

	  function nextFrame(callback) {
	    var runner = window.requestAnimationFrame || window.webkitRequestAnimationFrame || function (cb) {
	      return setTimeout(cb, 16);
	    };
	    runner(callback);
	  }

	  function toCSSText(object) {
	    var cssText = '';
	    if (object) {
	      for (var key in object) {
	        cssText += hyphenate(key) + ":" + object[key] + ";";
	      }
	    }
	    return cssText;
	  }

	  var utils$1 = Object.freeze({
	    cached: cached,
	    camelize: camelize,
	    capitalize: capitalize,
	    hyphenate: hyphenate,
	    camelToKebab: camelToKebab,
	    extend: extend,
	    appendStyle: appendStyle,
	    isPlainObject: isPlainObject,
	    nextFrame: nextFrame,
	    toCSSText: toCSSText,
	    bind: bind,
	    debounce: debounce,
	    throttle: throttle,
	    mapFormEvents: mapFormEvents,
	    getParentScroller: getParentScroller,
	    hasIntersection: hasIntersection,
	    isComponentVisible: isComponentVisible,
	    watchAppear: watchAppear
	  });

	  function transitionOnce(vnode, config, callback) {
	    var duration = config.duration || 1000; // ms
	    var timing = config.timingFunction || 'ease';
	    var delay = config.delay || 0; // ms

	    // TODO: parse transition properties
	    var transitionValue = "all " + duration + "ms " + timing + " " + delay + "ms";

	    var dom = vnode.$el;
	    var transitionEndHandler = function transitionEndHandler(event) {
	      event.stopPropagation();
	      dom.removeEventListener('webkitTransitionEnd', transitionEndHandler);
	      dom.removeEventListener('transitionend', transitionEndHandler);
	      dom.style.transition = '';
	      dom.style.webkitTransition = '';
	      callback();
	    };

	    dom.style.transition = transitionValue;
	    dom.style.webkitTransition = transitionValue;
	    dom.addEventListener('webkitTransitionEnd', transitionEndHandler);
	    dom.addEventListener('transitionend', transitionEndHandler);

	    nextFrame(function () {
	      dom.style.cssText += toCSSText(config.styles || {});
	    });
	  }

	  var animation = {
	    /**
	     * transition
	     * @param  {String} vnode
	     * @param  {Object} config
	     * @param  {String} callback
	     */
	    transition: function transition(vnode, config, callback) {
	      // TODO: Make sure the transition is only run once
	      return transitionOnce(vnode, config, function () {
	        callback && callback();
	      });
	    }
	  };

	  function getParentScroller$1(vnode) {
	    if (!vnode) {
	      return null;
	    }
	    if (vnode.weexType === 'scroller' || vnode.weexType === 'list') {
	      return vnode;
	    }
	    return getParentScroller$1(vnode.$parent);
	  }

	  var dom = {
	    /**
	     * scrollToElement
	     * @param  {String} vnode
	     * @param  {Object} options {offset:Number}
	     *   ps: scroll-to has 'ease' and 'duration'(ms) as options.
	     */
	    scrollToElement: function scrollToElement(vnode, options) {
	      var scroller = getParentScroller$1(vnode);

	      if (scroller && scroller.$el && vnode.$el) {
	        var offset = vnode.$el.offsetTop;

	        if (options) {
	          offset += Number(options.offset) || 0;
	        } else {
	          console.warn('[Vue Render] The second parameter of "scrollToElement" is required, ' + 'otherwise it may not works well on native.');
	        }

	        // TODO: add animation
	        scroller.$el.scrollTop = offset;
	      }
	    },

	    /**
	     * getComponentRect
	     * @param {String} vnode
	     * @param {Function} callback
	     */
	    getComponentRect: function getComponentRect(vnode, callback) {
	      var info = { result: false };

	      if (vnode && vnode === 'viewport') {
	        info.result = true;
	        info.size = {
	          width: document.documentElement.clientWidth,
	          height: document.documentElement.clientHeight,
	          top: 0,
	          left: 0,
	          right: document.documentElement.clientWidth,
	          bottom: document.documentElement.clientHeight
	        };
	      } else if (vnode && vnode.$el) {
	        info.result = true;
	        info.size = vnode.$el.getBoundingClientRect();
	      }

	      var message = info.result ? info : {
	        result: false,
	        errMsg: 'Illegal parameter'
	      };

	      callback && callback(message);
	      return message;
	    },

	    /**
	     * for adding fontFace
	     * @param {string} key fontFace
	     * @param {object} styles rules
	     */
	    addRule: function addRule(key, styles) {
	      key = camelToKebab(key);
	      var stylesText = '';
	      for (var k in styles) {
	        if (styles.hasOwnProperty(k)) {
	          stylesText += camelToKebab(k) + ':' + styles[k] + ';';
	        }
	      }
	      var styleText = "@" + key + "{" + stylesText + "}";
	      appendStyle(styleText, 'dom-added-rules');
	    }
	  };

	  var queue$1 = [];
	  var isProcessing = false;
	  var toastWin;
	  var TOAST_WIN_CLASS_NAME = 'weex-toast';

	  var DEFAULT_DURATION = 0.8;

	  function showToastWindow(msg, callback) {
	    var handleTransitionEnd = function handleTransitionEnd() {
	      toastWin.removeEventListener('transitionend', handleTransitionEnd);
	      toastWin.removeEventListener('webkitTransitionEnd', handleTransitionEnd);
	      callback && callback();
	    };
	    if (!toastWin) {
	      toastWin = document.createElement('div');
	      toastWin.classList.add(TOAST_WIN_CLASS_NAME, 'hide');
	      document.body.appendChild(toastWin);
	    }
	    toastWin.textContent = msg;
	    toastWin.addEventListener('transitionend', handleTransitionEnd);
	    toastWin.addEventListener('webkitTransitionEnd', handleTransitionEnd);
	    setTimeout(function () {
	      toastWin.classList.remove('hide');
	    }, 0);
	  }

	  function hideToastWindow(callback) {
	    var handleTransitionEnd = function handleTransitionEnd() {
	      toastWin.removeEventListener('transitionend', handleTransitionEnd);
	      toastWin.removeEventListener('webkitTransitionEnd', handleTransitionEnd);
	      callback && callback();
	    };
	    if (!toastWin) {
	      return;
	    }
	    toastWin.addEventListener('transitionend', handleTransitionEnd);
	    toastWin.addEventListener('webkitTransitionEnd', handleTransitionEnd);
	    setTimeout(function () {
	      toastWin.classList.add('hide');
	    }, 0);
	  }

	  var _toast = {
	    push: function push(msg, duration) {
	      queue$1.push({
	        msg: msg,
	        duration: duration || DEFAULT_DURATION
	      });
	      this.show();
	    },

	    show: function show() {
	      var that = this;

	      // All messages had been toasted already, so remove the toast window,
	      if (!queue$1.length) {
	        toastWin && toastWin.parentNode.removeChild(toastWin);
	        toastWin = null;
	        return;
	      }

	      // the previous toast is not ended yet.
	      if (isProcessing) {
	        return;
	      }
	      isProcessing = true;

	      var toastInfo = queue$1.shift();
	      showToastWindow(toastInfo.msg, function () {
	        setTimeout(function () {
	          hideToastWindow(function () {
	            isProcessing = false;
	            that.show();
	          });
	        }, toastInfo.duration * 1000);
	      });
	    }
	  };

	  // there will be only one instance of modal.
	  var MODAL_WRAP_CLASS = 'weex-modal-wrap';
	  var MODAL_NODE_CLASS = 'weex-modal-node';

	  function Modal() {
	    this.wrap = document.querySelector(MODAL_WRAP_CLASS);
	    this.node = document.querySelector(MODAL_NODE_CLASS);
	    if (!this.wrap) {
	      this.createWrap();
	    }
	    if (!this.node) {
	      this.createNode();
	    }
	    this.clearNode();
	    this.createNodeContent();
	    this.bindEvents();
	  }

	  Modal.prototype = {

	    show: function show() {
	      this.wrap.style.display = 'block';
	      this.node.classList.remove('hide');
	    },

	    destroy: function destroy() {
	      document.body.removeChild(this.wrap);
	      document.body.removeChild(this.node);
	      this.wrap = null;
	      this.node = null;
	    },

	    createWrap: function createWrap() {
	      this.wrap = document.createElement('div');
	      this.wrap.className = MODAL_WRAP_CLASS;
	      document.body.appendChild(this.wrap);
	    },

	    createNode: function createNode() {
	      this.node = document.createElement('div');
	      this.node.classList.add(MODAL_NODE_CLASS, 'hide');
	      document.body.appendChild(this.node);
	    },

	    clearNode: function clearNode() {
	      this.node.innerHTML = '';
	    },

	    createNodeContent: function createNodeContent() {

	      // do nothing.
	      // child classes can override this method.
	    },

	    bindEvents: function bindEvents() {
	      this.wrap.addEventListener('click', function (e) {
	        e.preventDefault();
	        e.stopPropagation();
	      });
	    }
	  };

	  var CONTENT_CLASS = 'content';
	  var MSG_CLASS = 'content-msg';
	  var BUTTON_GROUP_CLASS = 'btn-group';
	  var BUTTON_CLASS = 'btn';

	  function Alert(config) {
	    this.msg = config.message || '';
	    this.callback = config.callback;
	    this.okTitle = config.okTitle || 'OK';
	    Modal.call(this);
	    this.node.classList.add('weex-alert');
	  }

	  Alert.prototype = Object.create(Modal.prototype);

	  Alert.prototype.createNodeContent = function () {
	    var content = document.createElement('div');
	    content.classList.add(CONTENT_CLASS);
	    this.node.appendChild(content);

	    var msg = document.createElement('div');
	    msg.classList.add(MSG_CLASS);
	    msg.appendChild(document.createTextNode(this.msg));
	    content.appendChild(msg);

	    var buttonGroup = document.createElement('div');
	    buttonGroup.classList.add(BUTTON_GROUP_CLASS);
	    this.node.appendChild(buttonGroup);
	    var button = document.createElement('div');
	    button.classList.add(BUTTON_CLASS, 'alert-ok');
	    button.appendChild(document.createTextNode(this.okTitle));
	    buttonGroup.appendChild(button);
	  };

	  Alert.prototype.bindEvents = function () {
	    Modal.prototype.bindEvents.call(this);
	    var button = this.node.querySelector('.' + BUTTON_CLASS);
	    button.addEventListener('click', function () {
	      this.destroy();
	      this.callback && this.callback();
	    }.bind(this));
	  };

	  var CONTENT_CLASS$1 = 'content';
	  var MSG_CLASS$1 = 'content-msg';
	  var BUTTON_GROUP_CLASS$1 = 'btn-group';
	  var BUTTON_CLASS$1 = 'btn';

	  function Confirm(config) {
	    this.msg = config.message || '';
	    this.callback = config.callback;
	    this.okTitle = config.okTitle || 'OK';
	    this.cancelTitle = config.cancelTitle || 'Cancel';
	    Modal.call(this);
	    this.node.classList.add('weex-confirm');
	  }

	  Confirm.prototype = Object.create(Modal.prototype);

	  Confirm.prototype.createNodeContent = function () {
	    var content = document.createElement('div');
	    content.classList.add(CONTENT_CLASS$1);
	    this.node.appendChild(content);

	    var msg = document.createElement('div');
	    msg.classList.add(MSG_CLASS$1);
	    msg.appendChild(document.createTextNode(this.msg));
	    content.appendChild(msg);

	    var buttonGroup = document.createElement('div');
	    buttonGroup.classList.add(BUTTON_GROUP_CLASS$1);
	    this.node.appendChild(buttonGroup);
	    var btnOk = document.createElement('div');
	    btnOk.appendChild(document.createTextNode(this.okTitle));
	    btnOk.classList.add('btn-ok', BUTTON_CLASS$1);
	    var btnCancel = document.createElement('div');
	    btnCancel.appendChild(document.createTextNode(this.cancelTitle));
	    btnCancel.classList.add('btn-cancel', BUTTON_CLASS$1);
	    buttonGroup.appendChild(btnOk);
	    buttonGroup.appendChild(btnCancel);
	    this.node.appendChild(buttonGroup);
	  };

	  Confirm.prototype.bindEvents = function () {
	    Modal.prototype.bindEvents.call(this);
	    var btnOk = this.node.querySelector('.' + BUTTON_CLASS$1 + '.btn-ok');
	    var btnCancel = this.node.querySelector('.' + BUTTON_CLASS$1 + '.btn-cancel');
	    btnOk.addEventListener('click', function () {
	      this.destroy();
	      this.callback && this.callback(this.okTitle);
	    }.bind(this));
	    btnCancel.addEventListener('click', function () {
	      this.destroy();
	      this.callback && this.callback(this.cancelTitle);
	    }.bind(this));
	  };

	  var CONTENT_CLASS$2 = 'content';
	  var MSG_CLASS$2 = 'content-msg';
	  var BUTTON_GROUP_CLASS$2 = 'btn-group';
	  var BUTTON_CLASS$2 = 'btn';
	  var INPUT_WRAP_CLASS = 'input-wrap';
	  var INPUT_CLASS = 'input';

	  function Prompt(config) {
	    this.msg = config.message || '';
	    this.defaultMsg = config.default || '';
	    this.callback = config.callback;
	    this.okTitle = config.okTitle || 'OK';
	    this.cancelTitle = config.cancelTitle || 'Cancel';
	    Modal.call(this);
	    this.node.classList.add('weex-prompt');
	  }

	  Prompt.prototype = Object.create(Modal.prototype);

	  Prompt.prototype.createNodeContent = function () {
	    var content = document.createElement('div');
	    content.classList.add(CONTENT_CLASS$2);
	    this.node.appendChild(content);

	    var msg = document.createElement('div');
	    msg.classList.add(MSG_CLASS$2);
	    msg.appendChild(document.createTextNode(this.msg));
	    content.appendChild(msg);

	    var inputWrap = document.createElement('div');
	    inputWrap.classList.add(INPUT_WRAP_CLASS);
	    content.appendChild(inputWrap);
	    var input = document.createElement('input');
	    input.classList.add(INPUT_CLASS);
	    input.type = 'text';
	    input.autofocus = true;
	    input.placeholder = this.defaultMsg;
	    inputWrap.appendChild(input);

	    var buttonGroup = document.createElement('div');
	    buttonGroup.classList.add(BUTTON_GROUP_CLASS$2);
	    var btnOk = document.createElement('div');
	    btnOk.appendChild(document.createTextNode(this.okTitle));
	    btnOk.classList.add('btn-ok', BUTTON_CLASS$2);
	    var btnCancel = document.createElement('div');
	    btnCancel.appendChild(document.createTextNode(this.cancelTitle));
	    btnCancel.classList.add('btn-cancel', BUTTON_CLASS$2);
	    buttonGroup.appendChild(btnOk);
	    buttonGroup.appendChild(btnCancel);
	    this.node.appendChild(buttonGroup);
	  };

	  Prompt.prototype.bindEvents = function () {
	    Modal.prototype.bindEvents.call(this);
	    var btnOk = this.node.querySelector('.' + BUTTON_CLASS$2 + '.btn-ok');
	    var btnCancel = this.node.querySelector('.' + BUTTON_CLASS$2 + '.btn-cancel');
	    var that = this;
	    btnOk.addEventListener('click', function () {
	      var val = document.querySelector('input').value;
	      this.destroy();
	      this.callback && this.callback({
	        result: that.okTitle,
	        data: val
	      });
	    }.bind(this));
	    btnCancel.addEventListener('click', function () {
	      var val = document.querySelector('input').value;
	      this.destroy();
	      this.callback && this.callback({
	        result: that.cancelTitle,
	        data: val
	      });
	    }.bind(this));
	  };

	  // TODO: rewrite the modal styles
	  var modal = {

	    // duration: default is 0.8 seconds.
	    toast: function toast(config) {
	      _toast.push(config.message, config.duration);
	    },

	    // config:
	    //  - message: string
	    //  - okTitle: title of ok button
	    //  - callback
	    alert: function alert(config, callback) {
	      config.callback = function () {
	        callback && callback();
	      };
	      new Alert(config).show();
	    },

	    // config:
	    //  - message: string
	    //  - okTitle: title of ok button
	    //  - cancelTitle: title of cancel button
	    //  - callback
	    confirm: function confirm(config, callback) {
	      config.callback = function (val) {
	        callback && callback(val);
	      };
	      new Confirm(config).show();
	    },

	    // config:
	    //  - message: string
	    //  - okTitle: title of ok button
	    //  - cancelTitle: title of cancel button
	    //  - callback
	    prompt: function prompt(config, callback) {
	      config.callback = function (val) {
	        callback && callback(val);
	      };
	      new Prompt(config).show();
	    }
	  };

	  /**
	   * Navigator module
	   */

	  // TODO: config.animated
	  var navigator$1 = {
	    push: function push(config, callback) {
	      window.location.href = config.url;
	      callback && callback();
	    },

	    pop: function pop(config, callback) {
	      window.history.back();
	      callback && callback();
	    }
	  };

	  /**
	   * Webview module
	   */

	  var webview = {
	    goBack: function goBack(vnode) {
	      if (vnode && typeof vnode.goBack === 'function') {
	        vnode.goBack();
	      }
	    },
	    goForward: function goForward(vnode) {
	      if (vnode && typeof vnode.goForward === 'function') {
	        vnode.goForward();
	      }
	    },
	    reload: function reload(vnode) {
	      if (vnode && typeof vnode.reload === 'function') {
	        vnode.reload();
	      }
	    }
	  };

	  // modules from render/browesr
	  // custom modules
	  var modules = {
	    animation: animation,
	    dom: dom,
	    modal: modal,
	    navigator: navigator$1,
	    webview: webview
	  };

	  function requireWeexModule(name) {
	    if (modules[name]) {
	      return modules[name];
	    }
	    return null;
	  }

	  function init$1(weex) {
	    weex.install(Event$1);
	    weex.install(Geolocation);
	    weex.install(PageInfo);
	    weex.install(Storage);
	    weex.install(Stream);
	    weex.install(Clipboard);
	  }

	  typeof window === 'undefined' && (window = { ctrl: {}, lib: {} });!window.ctrl && (window.ctrl = {});!window.lib && (window.lib = {});!function (a, b) {
	    function c(a) {
	      Object.defineProperty(this, "val", { value: a.toString(), enumerable: !0 }), this.gt = function (a) {
	        return c.compare(this, a) > 0;
	      }, this.gte = function (a) {
	        return c.compare(this, a) >= 0;
	      }, this.lt = function (a) {
	        return c.compare(this, a) < 0;
	      }, this.lte = function (a) {
	        return c.compare(this, a) <= 0;
	      }, this.eq = function (a) {
	        return 0 === c.compare(this, a);
	      };
	    }b.env = b.env || {}, c.prototype.toString = function () {
	      return this.val;
	    }, c.prototype.valueOf = function () {
	      for (var a = this.val.split("."), b = [], c = 0; c < a.length; c++) {
	        var d = parseInt(a[c], 10);isNaN(d) && (d = 0);var e = d.toString();e.length < 5 && (e = Array(6 - e.length).join("0") + e), b.push(e), 1 === b.length && b.push(".");
	      }return parseFloat(b.join(""));
	    }, c.compare = function (a, b) {
	      a = a.toString().split("."), b = b.toString().split(".");for (var c = 0; c < a.length || c < b.length; c++) {
	        var d = parseInt(a[c], 10),
	            e = parseInt(b[c], 10);if (window.isNaN(d) && (d = 0), window.isNaN(e) && (e = 0), e > d) {
	          return -1;
	        }if (d > e) {
	          return 1;
	        }
	      }return 0;
	    }, b.version = function (a) {
	      return new c(a);
	    };
	  }(window, window.lib || (window.lib = {})), function (a, b) {
	    b.env = b.env || {};var c = a.location.search.replace(/^\?/, "");if (b.env.params = {}, c) {
	      for (var d = c.split("&"), e = 0; e < d.length; e++) {
	        d[e] = d[e].split("=");try {
	          b.env.params[d[e][0]] = decodeURIComponent(d[e][1]);
	        } catch (f) {
	          b.env.params[d[e][0]] = d[e][1];
	        }
	      }
	    }
	  }(window, window.lib || (window.lib = {})), function (a, b) {
	    b.env = b.env || {};var c,
	        d = a.navigator.userAgent;if (c = d.match(/Windows\sPhone\s(?:OS\s)?([\d\.]+)/)) {
	      b.env.os = { name: "Windows Phone", isWindowsPhone: !0, version: c[1] };
	    } else if (d.match(/Safari/) && (c = d.match(/Android[\s\/]([\d\.]+)/))) {
	      b.env.os = { version: c[1] }, d.match(/Mobile\s+Safari/) ? (b.env.os.name = "Android", b.env.os.isAndroid = !0) : (b.env.os.name = "AndroidPad", b.env.os.isAndroidPad = !0);
	    } else if (c = d.match(/(iPhone|iPad|iPod)/)) {
	      var e = c[1];c = d.match(/OS ([\d_\.]+) like Mac OS X/), b.env.os = { name: e, isIPhone: "iPhone" === e || "iPod" === e, isIPad: "iPad" === e, isIOS: !0, version: c[1].split("_").join(".") };
	    } else {
	      b.env.os = { name: "unknown", version: "0.0.0" };
	    }b.version && (b.env.os.version = b.version(b.env.os.version));
	  }(window, window.lib || (window.lib = {})), function (a, b) {
	    b.env = b.env || {};var c,
	        d = a.navigator.userAgent;(c = d.match(/(?:UCWEB|UCBrowser\/)([\d\.]+)/)) ? b.env.browser = { name: "UC", isUC: !0, version: c[1] } : (c = d.match(/MQQBrowser\/([\d\.]+)/)) ? b.env.browser = { name: "QQ", isQQ: !0, version: c[1] } : (c = d.match(/Firefox\/([\d\.]+)/)) ? b.env.browser = { name: "Firefox", isFirefox: !0, version: c[1] } : (c = d.match(/MSIE\s([\d\.]+)/)) || (c = d.match(/IEMobile\/([\d\.]+)/)) ? (b.env.browser = { version: c[1] }, d.match(/IEMobile/) ? (b.env.browser.name = "IEMobile", b.env.browser.isIEMobile = !0) : (b.env.browser.name = "IE", b.env.browser.isIE = !0), d.match(/Android|iPhone/) && (b.env.browser.isIELikeWebkit = !0)) : (c = d.match(/(?:Chrome|CriOS)\/([\d\.]+)/)) ? (b.env.browser = { name: "Chrome", isChrome: !0, version: c[1] }, d.match(/Version\/[\d+\.]+\s*Chrome/) && (b.env.browser.name = "Chrome Webview", b.env.browser.isWebview = !0)) : d.match(/Safari/) && (c = d.match(/Android[\s\/]([\d\.]+)/)) ? b.env.browser = { name: "Android", isAndroid: !0, version: c[1] } : d.match(/iPhone|iPad|iPod/) ? d.match(/Safari/) ? (c = d.match(/Version\/([\d\.]+)/), b.env.browser = { name: "Safari", isSafari: !0, version: c[1] }) : (c = d.match(/OS ([\d_\.]+) like Mac OS X/), b.env.browser = { name: "iOS Webview", isWebview: !0, version: c[1].replace(/\_/g, ".") }) : b.env.browser = { name: "unknown", version: "0.0.0" }, b.version && (b.env.browser.version = b.version(b.env.browser.version));
	  }(window, window.lib || (window.lib = {})), function (a, b) {
	    b.env = b.env || {};var c = a.navigator.userAgent;c.match(/Weibo/i) ? b.env.thirdapp = { appname: "Weibo", isWeibo: !0 } : c.match(/MicroMessenger/i) ? b.env.thirdapp = { appname: "Weixin", isWeixin: !0 } : b.env.thirdapp = !1;
	  }(window, window.lib || (window.lib = {})), function (a, b) {
	    b.env = b.env || {};var c,
	        d,
	        e = a.navigator.userAgent;(d = e.match(/WindVane[\/\s]([\d\.\_]+)/)) && (c = d[1]);var f = !1,
	        g = "",
	        h = "",
	        i = "";(d = e.match(/AliApp\(([A-Z\-]+)\/([\d\.]+)\)/i)) && (f = !0, g = d[1], i = d[2], h = g.indexOf("-PD") > 0 ? b.env.os.isIOS ? "iPad" : b.env.os.isAndroid ? "AndroidPad" : b.env.os.name : b.env.os.name), !g && e.indexOf("TBIOS") > 0 && (g = "TB"), f ? b.env.aliapp = { windvane: b.version(c || "0.0.0"), appname: g || "unkown", version: b.version(i || "0.0.0"), platform: h || b.env.os.name } : b.env.aliapp = !1, b.env.taobaoApp = b.env.aliapp;
	  }(window, window.lib || (window.lib = {}));

	  var lib$1 = window.lib;
	  var env = {
	    platform: 'Web',
	    weexVersion: '0.10.0', // TODO: get version from package.json (not sure)
	    userAgent: navigator.userAgent,
	    appName: lib$1.env.aliapp ? lib$1.env.aliapp.appname : navigator.appName,
	    appVersion: lib$1.env.aliapp ? lib$1.env.aliapp.version.val : null,
	    osName: lib$1.env.browser ? lib$1.env.browser.name : null,
	    osVersion: lib$1.env.browser ? lib$1.env.browser.version.val : null,
	    deviceModel: lib$1.env.os.name || null,
	    deviceWidth: window.innerWidth,
	    deviceHeight: window.innerHeight
	  };

	  // 750 by default currently
	  var scale = 2;

	  var units = {
	    REM: 12 * scale,
	    VW: env.deviceWidth / 100,
	    VH: env.deviceHeight / 100,
	    VMIN: Math.min(env.deviceWidth, env.deviceHeight) / 100,
	    VMAX: Math.max(env.deviceWidth, env.deviceHeight) / 100,
	    CM: 96 / 2.54 * scale,
	    MM: 96 / 25.4 * scale,
	    Q: 96 / 25.4 / 4 * scale,
	    IN: 96 * scale,
	    PT: 96 / 72 * scale,
	    PC: 96 / 6 * scale,
	    PX: scale
	  };

	  Object.freeze(units);
	  Object.freeze(env);

	  window.CSS_UNIT = units;
	  window.WXEnvironment = env;

	  var weexModules = {};

	  var weex = {
	    utils: utils$1,
	    units: window.CSS_UNIT,
	    config: {
	      env: window.WXEnvironment,
	      bundleUrl: location.href
	    },

	    requireModule: function requireModule(moduleName) {
	      var module = requireWeexModule(moduleName);
	      if (module) {
	        return module;
	      }
	      return weexModules[moduleName];
	    },

	    registerModule: function registerModule() {
	      var args = [],
	          len = arguments.length;
	      while (len--) {
	        args[len] = arguments[len];
	      }return (ref = this).registerApiModule.apply(ref, args);
	      var ref;
	    },

	    // @deprecated
	    require: function require() {
	      var args = [],
	          len = arguments.length;
	      while (len--) {
	        args[len] = arguments[len];
	      }console.log("[Vue Render] \"weex.require\" is deprecated, please use \"weex.requireModule\" instead.");
	      return (ref = this).requireModule.apply(ref, args);
	      var ref;
	    },

	    // @deprecated
	    // TODO: rename to registerModule
	    registerApiModule: function registerApiModule(name, module, meta) {
	      var this$1 = this;

	      if (!weexModules[name]) {
	        weexModules[name] = {};
	      }
	      for (var key in module) {
	        if (module.hasOwnProperty(key)) {
	          weexModules[name][key] = bind(module[key], this$1);
	        }
	      }
	    },

	    // @deprecated
	    getRoot: function getRoot() {},

	    // @deprecated
	    sender: {
	      performCallback: function performCallback(callback, data, keepAlive) {
	        if (typeof callback === 'function') {
	          return callback(data);
	        }
	        return null;
	      }
	    },

	    // @deprecated
	    install: function install(module) {
	      module.init(this);
	    }
	  };

	  // import 'lazyimg'
	  init$1(weex);

	  Object.freeze(weex);
	  window.weex = weex;

	  var supportedEvents = ['click', 'longpress', 'appear', 'disappear'];

	  var base = {
	    mounted: function mounted() {
	      watchAppear(this);
	    },

	    methods: {
	      createEventMap: function createEventMap(extras) {
	        var this$1 = this;
	        if (extras === void 0) extras = [];

	        var eventMap = {};
	        supportedEvents.concat(extras).forEach(function (name) {
	          eventMap[name] = function (event) {
	            return this$1.$emit(name, event);
	          };
	        });
	        return eventMap;
	      }
	    }
	  };

	  var event$1 = {
	    methods: {
	      /**
	       * Create Event.
	       * @param {DOMString} type
	       * @param {Object} props
	       */
	      createEvent: function createEvent(context, type, props) {
	        var event = new Event(type, { bubbles: false });
	        // event.preventDefault()
	        event.stopPropagation();

	        extend(event, props);

	        Object.defineProperty(event, 'target', {
	          enumerable: true,
	          value: context || null
	        });

	        return event;
	      },

	      /**
	       * Create Custom Event.
	       * @param {DOMString} type
	       * @param {Object} props
	       */
	      createCustomEvent: function createCustomEvent(context, type, props) {
	        // compatibility: http://caniuse.com/#search=customevent
	        // const event = new CustomEvent(type)
	        var event = document.createEvent('CustomEvent');
	        event.initCustomEvent(type, false, true, {});
	        // event.preventDefault()
	        event.stopPropagation();

	        extend(event, props);

	        // TODO: event.target is readonly
	        // Object.defineProperty(event, 'target', {
	        //   enumerable: true,
	        //   value: context || null
	        // })

	        return event;
	      },

	      /**
	       * Check and emit longpress event.
	       * @param {Object} event
	       */
	      handleLongPress: function handleLongPress(context, event) {
	        // TODO: check the condition
	        context.$emit('longpress', context.createCustomEvent('longpress'));
	      },

	      /**
	       * Check and emit appear event.
	       * @param {Object} event
	       */
	      handleAppear: function handleAppear(context, event) {
	        // TODO: check the condition
	        context.$emit('appear', context.createCustomEvent('appear'));
	      },

	      /**
	       * Check and emit disappear event.
	       * @param {Object} event
	       */
	      handDisappear: function handDisappear(context, event) {
	        // TODO: check the condition
	        context.$emit('disappear', context.createCustomEvent('disappear'));
	      }
	    }
	  };

	  var scrollable = {
	    methods: {
	      updateLayout: function updateLayout() {
	        var wrapper = this.$refs.wrapper;
	        if (wrapper) {
	          var rect = wrapper.getBoundingClientRect();
	          this.wrapperWidth = rect.width;
	          this.wrapperHeight = rect.height;
	        }
	      },

	      handleScroll: function handleScroll(event) {
	        if (this.reachBottom()) {
	          this.$emit('loadmore', event);
	        }
	      },

	      reachTop: function reachTop() {
	        var wrapper = this.$refs.wrapper;
	        return !!wrapper && wrapper.scrollTop <= 0;
	      },

	      reachBottom: function reachBottom() {
	        var wrapper = this.$refs.wrapper;
	        var inner = this.$refs.inner;
	        var offset = Number(this.loadmoreoffset) || 0;

	        if (wrapper && inner) {
	          var innerHeight = inner.getBoundingClientRect().height;
	          var wrapperHeight = wrapper.getBoundingClientRect().height;
	          return wrapper.scrollTop >= innerHeight - wrapperHeight - offset;
	        }
	        return false;
	      }
	    }
	  };

	  /**
	   * Validate the CSS color value.
	   */
	  function isCSSColor(value) {
	    return (/^[a-z]+$/i.test(value) // match color name
	      || /^#([a-f0-9]{3}){1,2}$/i.test(value) // match #ABCDEF
	      || /^rgb\s*\((\s*[0-9.]+\s*,){2}\s*[0-9.]+\s*\)/i.test(value) // match rgb(0,0,0)
	      || /^rgba\s*\((\s*[0-9.]+\s*,){3}\s*[0-9.]+\s*\)/i.test(value)
	    ); // match rgba(0,0,0,0)
	  }

	  function isCSSLength(value) {
	    return (/^[+-]?[0-9]+.?([0-9]+)?(px|%)?$/.test(String(value))
	    );
	  }

	  function position(value) {
	    return ['absolute', 'relative', 'fixed', 'sticky'].indexOf(value) !== -1;
	  }

	  function opacity(value) {
	    var count = parseFloat(value);
	    return count >= 0 && count <= 1;
	  }

	  function display(value) {
	    return ['flex'].indexOf(value) !== -1;
	  }

	  function flexDirection(value) {
	    return ['row', 'column'].indexOf(value) !== -1;
	  }

	  function justifyContent(value) {
	    return ['flex-start', 'flex-end', 'center', 'space-between'].indexOf(value) !== -1;
	  }

	  function alignItems(value) {
	    return ['stretch', 'flex-start', 'flex-end', 'center'].indexOf(value) !== -1;
	  }

	  function flex(value) {
	    return (/^\d{1,3}$/.test(String(value))
	    );
	  }

	  function fontStyle(value) {
	    return ['normal', 'italic', 'oblique'].indexOf(value) !== -1;
	  }

	  function fontWeight(value) {
	    return ['normal', 'bold', 'light', 'bolder', 'lighter'].indexOf(value) !== -1;
	  }

	  function textDecoration(value) {
	    return ['none', 'underline', 'line-through'].indexOf(value) !== -1;
	  }

	  function textAlign(value) {
	    return ['left', 'center', 'right'].indexOf(value) !== -1;
	  }

	  function overflow(value) {
	    return ['visible', 'hidden'].indexOf(value) !== -1;
	  }

	  function textOverflow(value) {
	    return ['clip', 'ellipsis'].indexOf(value) !== -1;
	  }

	  /**
	   * Common style validator.
	   * @param {any} value
	   * @param {String} key
	   */
	  function common(value, key) {
	    if (/^[\w-]*color$/.test(String(key))) {
	      return isCSSColor(value);
	    }

	    // check width and height
	    if (/^(width|height)$/.test(String(key))) {
	      return isCSSLength(value);
	    }

	    // check postions
	    if (/^(top|right|bottom|left)$/.test(String(key))) {
	      return isCSSLength(value);
	    }

	    // checkout border-radius
	    if (/^border-((top|right|bottom|left)-){0,2}(width|radius)$/.test(String(key))) {
	      return isCSSLength(value);
	    }

	    // check border-style
	    if (/border-((top|right|bottom|left)-)?style/.test(String(key))) {
	      return ['solid', 'dashed', 'dotted'].indexOf(value) !== -1;
	    }

	    // check margins and paddings
	    if (/^((margin|padding)-)?(top|right|bottom|left)/.test(String(key))) {
	      return isCSSLength(value);
	    }

	    switch (String(key)) {
	      case 'font-size':
	        return isCSSLength(value);
	    }

	    return true;
	  }

	  var styleValidator = Object.freeze({
	    isCSSColor: isCSSColor,
	    isCSSLength: isCSSLength,
	    position: position,
	    opacity: opacity,
	    display: display,
	    flexDirection: flexDirection,
	    justifyContent: justifyContent,
	    alignItems: alignItems,
	    flex: flex,
	    fontStyle: fontStyle,
	    fontWeight: fontWeight,
	    textDecoration: textDecoration,
	    textAlign: textAlign,
	    overflow: overflow,
	    textOverflow: textOverflow,
	    common: common
	  });

	  function isString(value) {
	    return Object.prototype.toString.call(value) === '[object String]';
	  }

	  var propValidator = Object.freeze({
	    isString: isString
	  });

	  var supportedStyles = {
	    '*': ['@box-model', '@border', '@position', '@flexbox', '@font', '@text', '@bg', 'lines', 'item-size', 'item-color', 'item-selected-color'],
	    '@box-model': ['width', 'height', 'position', 'padding-top', 'padding-bottom', 'padding-left', 'padding-right', 'margin-top', 'margin-bottom', 'margin-left', 'margin-right'],
	    '@border': ['border-style', 'border-width', 'border-color', 'border-radius', 'border-top-style', 'border-right-style', 'border-bottom-style', 'border-left-style', 'border-top-width', 'border-right-width', 'border-bottom-width', 'border-left-width', 'border-top-color', 'border-right-color', 'border-bottom-color', 'border-left-color', 'border-top-left-radius', 'border-top-right-radius', 'border-bottom-left-radius', 'border-bottom-right-radius'],
	    '@position': ['position', 'top', 'left', 'right', 'bottom'],
	    '@flexbox': ['flex', 'flex-direction', 'justify-content', 'align-items', 'flex-wrap'],
	    '@font': ['font-size', 'font-weight', 'font-style', 'font-family', 'line-height'],
	    '@text': ['text-align', 'text-decoration', 'text-overflow', 'color'],
	    '@bg': ['background-color', 'opacity'],

	    'a': ['@box-model', '@border', '@position', '@flexbox', '@bg'],
	    'div': ['@box-model', '@border', '@position', '@flexbox', '@bg'],
	    'text': ['@box-model', '@border', '@position', '@font', '@text', '@bg', 'lines'],
	    'slider': ['@box-model', '@border', '@position', '@flexbox', '@bg'],
	    'switch': ['@box-model', '@border', '@position', '@flexbox', '@bg'],
	    'indicator': ['@box-model', '@border', '@position', '@flexbox', '@bg', 'item-size', 'item-color', 'item-selected-color'],
	    'input': ['@box-model', '@border', '@position', '@font', '@text', '@bg'],
	    'textarea': ['@box-model', '@border', '@position', '@font', '@text', '@bg', 'rows'],
	    'scroller': ['@box-model', '@border', '@position', '@flexbox', '@bg'],
	    'loading': ['@box-model', '@border', '@position', '@flexbox', '@bg'],
	    'refresh': ['@box-model', '@border', '@position', '@flexbox', '@bg'],
	    'list': ['@box-model', '@border', '@position', '@flexbox', '@bg'],
	    'cell': ['@box-model', '@border', '@position', '@flexbox', '@bg'],
	    'video': ['@box-model', '@border', '@position', '@flexbox', '@bg'],
	    'web': ['@box-model', '@border', '@position', '@flexbox', '@bg']
	  };

	  /**
	   * Flatten a multiple dimension array.
	   */
	  function flatten(array) {
	    return array.reduce(function (dist, item) {
	      return dist.concat(Array.isArray(item) ? flatten(item) : item);
	    }, []);
	  }

	  /**
	   * Check if the value is in the list.
	   * @param {String} type
	   * @param {String} value
	   * @param {Object} dict
	   */
	  function checkSupported(type, value, dict) {
	    if (dict === void 0) dict = {};

	    var tagType = dict[type] ? type : '*';
	    if (Array.isArray(dict[tagType])) {
	      return flatten(dict[tagType].map(function (k) {
	        return dict[k] || k;
	      })).indexOf(value) !== -1;
	    }
	    return false;
	  }

	  /**
	   * Check if the style is supported for the component.
	   * @param {String} type
	   * @param {String} style
	   */
	  function isSupportedStyle(type, style) {
	    return checkSupported(type, style, supportedStyles);
	  }

	  /**
	   * Check if the property is supported for the component.
	   * @param {String} type
	   * @param {String} property
	   */

	  var onfail = function nope() {};
	  var showConsole = true;

	  function warn() {
	    var args = [],
	        len = arguments.length;
	    while (len--) {
	      args[len] = arguments[len];
	    }var message = args.join(' ');
	    showConsole && console.warn(message);
	    onfail(message);
	    return message;
	  }

	  /**
	   * Configure the validator.
	   * @param {Object} configs
	   */

	  /**
	   * Validate the styles of the component.
	   * @param {String} type
	   * @param {Object} styles
	   */
	  function validateStyles(type, styles) {
	    if (styles === void 0) styles = {};

	    var isValid = true;

	    if (isPlainObject(type)) {
	      styles = type;
	      type = '*';
	    }

	    for (var key in styles) {
	      if (!isSupportedStyle(type, hyphenate(key))) {
	        isValid = false;
	        warn(type === '*' ? "[Style Validator] Not support to use the \"" + key + "\" style property." : "[Style Validator] <" + type + "> is not support to use the \"" + key + "\" style property.");
	      } else {
	        var validator = styleValidator[camelize(key)] || common;
	        if (!validator(styles[key], hyphenate(key))) {
	          isValid = false;
	          warn("[Style Validator] The style \"" + key + "\" is not support the \"" + styles[key] + "\" value.");
	        }
	      }
	    }
	    return isValid;
	  }

	  /**
	   * Validate the properties of the component.
	   * @param {String} type
	   * @param {Object} props
	   */

	  var _switch = {
	    mixins: [base],
	    props: {
	      checked: {
	        type: [Boolean, String],
	        default: false
	      },
	      disabled: {
	        type: [Boolean, String],
	        default: false
	      }
	    },
	    data: function data() {
	      return {
	        isChecked: this.checked !== 'false' && this.checked !== false,
	        isDisabled: this.disabled !== 'false' && this.disabled !== false
	      };
	    },
	    computed: {
	      wrapperClass: function wrapperClass() {
	        var classArray = ['weex-switch'];
	        this.isChecked && classArray.push('weex-switch-checked');
	        this.isDisabled && classArray.push('weex-switch-disabled');
	        return classArray.join(' ');
	      }
	    },
	    methods: {
	      toggle: function toggle() {
	        // TODO: handle the events
	        if (!this.isDisabled) {
	          this.isChecked = !this.isChecked;
	          this.$emit('change', { value: this.isChecked });
	        }
	      }
	    },

	    render: function render(createElement) {
	      var this$1 = this;

	      /* istanbul ignore next */
	      {
	        validateStyles('switch', this.$vnode.data && this.$vnode.data.staticStyle);
	      }

	      return createElement('span', {
	        attrs: { 'weex-type': 'switch' },
	        staticClass: this.wrapperClass,
	        on: {
	          click: function click(event$$1) {
	            this$1.$emit('click', event$$1);
	            this$1.toggle();
	          }
	        }
	      }, [createElement('small', { staticClass: 'weex-switch-inner' })]);
	    }
	  };

	  var a = {
	    mixins: [base],
	    props: {
	      href: String
	    },
	    render: function render(createElement) {
	      /* istanbul ignore next */
	      {
	        validateStyles('a', this.$vnode.data && this.$vnode.data.staticStyle);
	      }

	      return createElement('html:a', {
	        attrs: {
	          'weex-type': 'a',
	          href: this.href
	        },
	        on: this.createEventMap(),
	        staticClass: 'weex-a'
	      }, this.$slots.default);
	    }
	  };

	  function trimTextNode(children) {
	    if (Array.isArray(children)) {
	      return children.filter(function (vnode) {
	        return !!vnode.tag;
	      });
	    }
	    return children;
	  }

	  var div = {
	    mixins: [base],
	    render: function render(createElement) {
	      /* istanbul ignore next */
	      {
	        validateStyles('div', this.$vnode.data && this.$vnode.data.staticStyle);
	      }

	      return createElement('html:div', {
	        attrs: { 'weex-type': 'div' },
	        on: this.createEventMap(),
	        staticClass: 'weex-div'
	      }, trimTextNode(this.$slots.default));
	    }
	  };

	  var image = {
	    mixins: [base],
	    props: {
	      src: {
	        type: String,
	        required: true
	      },
	      resize: {
	        validator: function validator(value) {
	          /* istanbul ignore next */
	          return ['cover', 'contain', 'stretch'].indexOf(value) !== -1;
	        }
	      }
	    },

	    render: function render(createElement) {
	      /* istanbul ignore next */
	      {
	        validateStyles('image', this.$vnode.data && this.$vnode.data.staticStyle);
	      }

	      var cssText = "background-image:url(\"" + this.src + "\");";

	      // compatibility: http://caniuse.com/#search=background-size
	      cssText += this.resize && this.resize !== 'stretch' ? "background-size: " + this.resize + ";" : "background-size: 100% 100%;";

	      return createElement('figure', {
	        attrs: { 'weex-type': 'image' },
	        on: this.createEventMap(['load']),
	        staticClass: 'weex-image',
	        style: cssText
	      });
	    }
	  };

	  var input = {
	    mixins: [base],
	    props: {
	      type: {
	        type: String,
	        default: 'text',
	        validator: function validator(value) {
	          return ['email', 'number', 'password', 'search', 'tel', 'text', 'url'].indexOf(value) !== -1;
	        }
	      },
	      value: String,
	      placeholder: String,
	      disabled: {
	        type: [String, Boolean],
	        default: false
	      },
	      autofocus: {
	        type: [String, Boolean],
	        default: false
	      },
	      maxlength: [String, Number]
	    },

	    render: function render(createElement) {
	      /* istanbul ignore next */
	      {
	        validateStyles('input', this.$vnode.data && this.$vnode.data.staticStyle);
	      }

	      return createElement('html:input', {
	        attrs: {
	          'weex-type': 'input',
	          type: this.type,
	          value: this.value,
	          disabled: this.disabled !== 'false' && this.disabled !== false,
	          autofocus: this.autofocus !== 'false' && this.autofocus !== false,
	          placeholder: this.placeholder,
	          maxlength: this.maxlength
	        },
	        on: extend(this.createEventMap(), mapFormEvents(this)),
	        staticClass: 'weex-input'
	      });
	    }
	  };

	  var LoadingIndicator = {
	    name: 'loading-indicator',
	    render: function render(createElement) {
	      this.weexType = 'loading-indicator';
	      return createElement('mark', {
	        attrs: { 'weex-type': 'loading-indicator' },
	        staticClass: 'weex-loading-indicator'
	      });
	    }
	  };

	  var refresh = {
	    // name: 'refresh',
	    components: { LoadingIndicator: LoadingIndicator },
	    props: {
	      display: {
	        type: String,
	        default: 'show',
	        validator: function validator(value) {
	          return ['show', 'hide'].indexOf(value) !== -1;
	        }
	      }
	    },
	    data: function data() {
	      return {
	        height: 0
	      };
	    },
	    methods: {
	      show: function show() {
	        // TODO: no fixed height
	        this.$emit('refresh');
	        this.height = '1.6rem';
	        this.visibility = 'visible';
	      },
	      reset: function reset() {
	        this.height = 0;
	        this.visibility = 'hidden';
	        this.$emit('refreshfinish');
	      },
	      getChildren: function getChildren() {
	        var children = this.$slots.default || [];
	        if (this.display === 'show') {
	          return children;
	        }
	        return children.filter(function (vnode) {
	          return vnode.componentOptions && vnode.componentOptions.tag !== 'loading-indicator';
	        });
	      }
	    },
	    render: function render(createElement) {
	      return createElement('aside', {
	        ref: 'refresh',
	        attrs: { 'weex-type': 'refresh' },
	        style: { height: this.height, visibility: this.visibility },
	        staticClass: 'weex-refresh'
	      }, this.getChildren());
	    }
	  };

	  var loading = {
	    // name: 'loading',
	    components: { LoadingIndicator: LoadingIndicator },
	    props: {
	      display: {
	        type: String,
	        default: 'show',
	        validator: function validator(value) {
	          return ['show', 'hide'].indexOf(value) !== -1;
	        }
	      }
	    },
	    data: function data() {
	      return {
	        height: 0
	      };
	    },
	    methods: {
	      show: function show() {
	        this.$emit('loading');
	        this.height = '1.6rem';
	        this.visibility = 'visible';
	      },
	      reset: function reset() {
	        this.height = 0;
	        this.visibility = 'hidden';
	        this.$emit('loadingfinish');
	      },
	      getChildren: function getChildren() {
	        var children = this.$slots.default || [];
	        if (this.display === 'show') {
	          return children;
	        }
	        return children.filter(function (vnode) {
	          return vnode.componentOptions && vnode.componentOptions.tag !== 'loading-indicator';
	        });
	      }
	    },
	    render: function render(createElement) {
	      return createElement('aside', {
	        ref: 'loading',
	        attrs: { 'weex-type': 'loading' },
	        style: { height: this.height, visibility: this.visibility },
	        staticClass: 'weex-loading'
	      }, this.getChildren());
	    }
	  };

	  // import header from './header'
	  // export function createHeader (context, createElement) {
	  //   return createElement(header)
	  // }

	  function createLoading(context, createElement, vnode) {
	    var options = vnode.componentOptions;
	    return createElement(loading, extend({
	      on: options.listeners
	    }, vnode.data), options.children);
	  }

	  function createRefresh(context, createElement, vnode) {
	    var options = vnode.componentOptions;
	    return createElement(refresh, extend({
	      on: options.listeners
	    }, vnode.data), options.children);
	  }

	  var listMixin = {
	    methods: {
	      moveTo: function moveTo(offsetY, done) {
	        if (offsetY === void 0) offsetY = 0;

	        var inner = this.$refs.inner;
	        if (inner) {
	          inner.style.willChange = "transform";
	          inner.style.transition = "transform .2s ease-in-out";
	          inner.style.transform = "translate3d(0, " + offsetY + ", 0)";
	          setTimeout(function () {
	            inner.style.transition = '';
	            inner.style.willChange = '';
	            done && done();
	          }, 200);
	        }
	      },

	      done: function done() {
	        this.moveTo(0);
	        this._refresh && this._refresh.child.reset();
	        this._loading && this._loading.child.reset();
	      },

	      showRefresh: function showRefresh() {
	        this.moveTo('1.6rem');
	        if (this._refresh && this._refresh.child) {
	          this._refresh.child.show();
	        }
	      },

	      showLoading: function showLoading() {
	        this.moveTo('-1.6rem');
	        if (this._loading && this._loading.child) {
	          this._loading.child.show();
	        }
	      },

	      handleTouchStart: function handleTouchStart(event) {
	        // event.preventDefault()
	        event.stopPropagation();
	        if (this._loading || this._refresh) {
	          var touch = event.changedTouches[0];
	          this._touchParams = {
	            reachTop: this.reachTop(),
	            reachBottom: this.reachBottom(),
	            startTouchEvent: touch,
	            startX: touch.pageX,
	            startY: touch.pageY,
	            timeStamp: event.timeStamp
	          };
	        }
	      },

	      handleTouchMove: function handleTouchMove(event) {
	        // event.preventDefault()
	        event.stopPropagation();
	        if (this._touchParams) {
	          var inner = this.$refs.inner;
	          var ref = this._touchParams;
	          var startY = ref.startY;
	          var reachTop = ref.reachTop;
	          var reachBottom = ref.reachBottom;
	          if (inner && (reachTop && this._refresh || reachBottom && this._loading)) {
	            var touch = event.changedTouches[0];
	            var offsetY = touch.pageY - startY;
	            this._touchParams.offsetY = offsetY;
	            if (offsetY) {
	              inner.style.transform = "translate3d(0, " + offsetY + "px, 0)";
	            }
	          }
	        }
	      },

	      handleTouchEnd: function handleTouchEnd(event) {
	        // event.preventDefault()
	        event.stopPropagation();
	        if (this._touchParams) {
	          var inner = this.$refs.inner;
	          var ref = this._touchParams;
	          var offsetY = ref.offsetY;
	          var reachTop = ref.reachTop;
	          var reachBottom = ref.reachBottom;
	          if (inner && (reachTop && this._refresh || reachBottom && this._loading)) {
	            if (offsetY > 120) {
	              this.showRefresh();
	            } else if (offsetY < -120) {
	              this.showLoading();
	            } else {
	              this.done(0);
	            }
	          }
	        }
	        delete this._touchParams;
	      }
	    }
	  };

	  var index$6 = {
	    mixins: [base, event$1, scrollable, listMixin],
	    props: {
	      loadmoreoffset: {
	        type: [String, Number],
	        default: 0
	      }
	    },

	    computed: {
	      wrapperClass: function wrapperClass() {
	        var classArray = ['weex-list', 'weex-list-wrapper'];
	        this._refresh && classArray.push('with-refresh');
	        this._loading && classArray.push('with-loading');
	        return classArray.join(' ');
	      }
	    },

	    methods: {
	      createChildren: function createChildren(h) {
	        var this$1 = this;

	        var slots = this.$slots.default || [];
	        this._cells = slots.filter(function (vnode) {
	          if (!vnode.tag || !vnode.componentOptions) {
	            return false;
	          }
	          switch (vnode.componentOptions.tag) {
	            case 'loading':
	              this$1._loading = createLoading(this$1, h, vnode);return false;
	            case 'refresh':
	              this$1._refresh = createRefresh(this$1, h, vnode);return false;
	          }
	          return true;
	        });
	        return [this._refresh, h('html:div', {
	          ref: 'inner',
	          staticClass: 'weex-list-inner'
	        }, this._cells), this._loading];
	      }
	    },

	    render: function render(createElement) {
	      var this$1 = this;

	      this.weexType = 'list';

	      /* istanbul ignore next */
	      {
	        validateStyles('list', this.$vnode.data && this.$vnode.data.staticStyle);
	      }

	      this.$nextTick(function () {
	        this$1.updateLayout();
	      });

	      return createElement('main', {
	        ref: 'wrapper',
	        attrs: { 'weex-type': 'list' },
	        staticClass: this.wrapperClass,
	        on: extend(this.createEventMap(), {
	          scroll: debounce(bind(this.handleScroll, this), 30),
	          touchstart: this.handleTouchStart,
	          touchmove: throttle(bind(this.handleTouchMove, this), 25),
	          touchend: this.handleTouchEnd
	        })
	      }, this.createChildren(createElement));
	    }
	  };

	  var cell = {
	    mixins: [base],
	    render: function render(createElement) {
	      /* istanbul ignore next */
	      {
	        validateStyles('cell', this.$vnode.data && this.$vnode.data.staticStyle);
	      }

	      return createElement('section', {
	        attrs: { 'weex-type': 'cell' },
	        on: this.createEventMap(),
	        staticClass: 'weex-cell'
	      }, this.$slots.default);
	    }
	  };

	  var scroller = {
	    mixins: [base, scrollable, listMixin],
	    props: {
	      scrollDirection: {
	        type: [String],
	        default: 'vertical',
	        validator: function validator(value) {
	          return ['horizontal', 'vertical'].indexOf(value) !== -1;
	        }
	      },
	      loadmoreoffset: {
	        type: [String, Number],
	        default: 0
	      },
	      // TODO: support loadmore retry
	      loadmoreretry: {
	        type: [String, Number],
	        default: 0
	      }
	    },

	    computed: {
	      wrapperClass: function wrapperClass() {
	        var classArray = ['weex-scroller', 'weex-scroller-wrapper'];
	        if (this.scrollDirection === 'horizontal') {
	          classArray.push('weex-scroller-horizontal');
	        }
	        return classArray.join(' ');
	      }
	    },

	    methods: {
	      createChildren: function createChildren(h) {
	        var this$1 = this;

	        var slots = this.$slots.default || [];
	        this._cells = slots.filter(function (vnode) {
	          if (!vnode.tag || !vnode.componentOptions) {
	            return false;
	          }
	          switch (vnode.componentOptions.tag) {
	            case 'loading':
	              this$1._loading = createLoading(this$1, h, vnode);return false;
	            case 'refresh':
	              this$1._refresh = createRefresh(this$1, h, vnode);return false;
	          }
	          return true;
	        });
	        return [this._refresh, h('html:div', {
	          ref: 'inner',
	          staticClass: 'weex-scroller-inner'
	        }, this._cells), this._loading];
	      },
	      scrollTo: function scrollTo(vnode) {
	        if (vnode && vnode.$el) {
	          // TODO: add animation
	          this.$el.scrollTop = vnode.$el.offsetTop;
	        }
	      }
	    },

	    render: function render(createElement) {
	      var this$1 = this;

	      this.weexType = 'scroller';

	      /* istanbul ignore next */
	      {
	        validateStyles('scroller', this.$vnode.data && this.$vnode.data.staticStyle);
	      }

	      this._cells = this.$slots.default || [];
	      this.$nextTick(function () {
	        this$1.updateLayout();
	      });

	      return createElement('main', {
	        ref: 'wrapper',
	        attrs: { 'weex-type': 'scroller' },
	        staticClass: this.wrapperClass,
	        on: extend(this.createEventMap(), {
	          scroll: debounce(bind(this.handleScroll, this), 30),
	          touchstart: this.handleTouchStart,
	          touchmove: throttle(bind(this.handleTouchMove, this), 25),
	          touchend: this.handleTouchEnd
	        })
	      }, this.createChildren(createElement));
	    }
	  };

	  var indicator = {
	    name: 'indicator',
	    props: {
	      count: [Number, String],
	      active: [Number, String]
	    },
	    render: function render(createElement) {
	      var this$1 = this;

	      var children = [];
	      for (var i = 0; i < Number(this.count); ++i) {
	        var classNames = ['weex-indicator-item'];
	        if (i === Number(this$1.active)) {
	          classNames.push('weex-indicator-item-active');
	        }
	        children.push(createElement('mark', {
	          staticClass: classNames.join(' ')
	        }));
	      }
	      return createElement('nav', {
	        attrs: { 'weex-type': 'indicator' },
	        staticClass: 'weex-indicator'
	      }, children);
	    }
	  };

	  var TRANSITION_TIME = 200;

	  var slideMixin = {
	    methods: {
	      // get standard index
	      normalizeIndex: function normalizeIndex(index) {
	        var newIndex = (index + this.frameCount) % this.frameCount;
	        return Math.min(Math.max(newIndex, 0), this.frameCount - 1);
	      },

	      slideTo: function slideTo(index) {
	        var this$1 = this;

	        var newIndex = this.normalizeIndex(index);
	        this.innerOffset += Math.sign(this.currentIndex - index) * this.wrapperWidth;

	        var inner = this.$refs.inner;
	        if (inner) {
	          // TODO: will-change | set styles together
	          inner.style.transition = "transform .2s ease-in-out";
	          inner.style.transform = "translate3d(" + this.innerOffset + "px, 0, 0)";
	          setTimeout(function () {
	            inner.style.transition = '';
	          }, TRANSITION_TIME);
	        }

	        if (newIndex !== this.currentIndex) {
	          this.currentIndex = newIndex;
	          this.$emit('change', this.createEvent('change', {
	            index: this.currentIndex
	          }));
	          setTimeout(function () {
	            this$1.reorder();
	          }, TRANSITION_TIME);
	        }
	      },

	      reorder: function reorder() {
	        var this$1 = this;

	        this.$nextTick(function () {
	          var prevIndex = this$1.normalizeIndex(this$1.currentIndex - 1);
	          var nextIndex = this$1.normalizeIndex(this$1.currentIndex + 1);
	          // TODO: clone frame when prevIndex === nextIndex
	          // if (prevIndex !== nextIndex) {
	          // }
	          var prevCell = this$1._cells[prevIndex];
	          var nextCell = this$1._cells[nextIndex];
	          if (prevCell && prevCell.elm) {
	            var prevOffset = -this$1.wrapperWidth - this$1.innerOffset;
	            prevCell.elm.style.transform = "translate3d(" + prevOffset + "px, 0, 0)";
	          }
	          if (nextCell && nextCell.elm) {
	            var nextOffset = this$1.wrapperWidth - this$1.innerOffset;
	            nextCell.elm.style.transform = "translate3d(" + nextOffset + "px, 0, 0)";
	          }
	        });
	      },

	      next: function next() {
	        this.slideTo(this.currentIndex + 1);
	      },

	      prev: function prev() {
	        this.slideTo(this.currentIndex - 1);
	      },

	      handleTouchStart: function handleTouchStart(event) {
	        event.preventDefault();
	        event.stopPropagation();
	        // console.log('touch start', event)
	        var touch = event.changedTouches[0];
	        // console.log('touch start', event.target, event.target.pageY)
	        // console.log('touches', touch)
	        this._touchParams = {
	          originalTransform: this.$refs.inner.style.transform,
	          startTouchEvent: touch,
	          startX: touch.pageX,
	          startY: touch.pageY,
	          timeStamp: event.timeStamp
	        };
	      },

	      handleTouchMove: function handleTouchMove(event) {
	        event.preventDefault();
	        event.stopPropagation();
	        // console.log('touch move')
	        if (this._touchParams) {
	          var inner = this.$refs.inner;
	          var ref = this._touchParams;
	          var startX = ref.startX;
	          var touch = event.changedTouches[0];
	          var offsetX = touch.pageX - startX;
	          // console.log('offsetX', offsetX, 'startX', startX, 'pageX', touch.pageX)
	          this._touchParams.offsetX = offsetX;

	          if (inner && offsetX) {
	            inner.style.transform = "translate3d(" + (this.innerOffset + offsetX) + "px, 0, 0)";
	          }
	        }
	      },

	      handleTouchEnd: function handleTouchEnd(event) {
	        event.preventDefault();
	        event.stopPropagation();
	        // console.log('touch end')
	        var inner = this.$refs.inner;
	        if (this._touchParams) {
	          var ref = this._touchParams;
	          var offsetX = ref.offsetX;
	          if (inner) {
	            var reset = Math.abs(offsetX / this.wrapperWidth) < 0.2;
	            var direction = offsetX > 0 ? 1 : -1;
	            var newIndex = reset ? this.currentIndex : this.currentIndex - direction;
	            this.slideTo(newIndex);
	          }
	        }
	        delete this._touchParams;
	      }
	    }
	  };

	  var index$7 = {
	    mixins: [base, event$1, slideMixin],
	    props: {
	      'auto-play': {
	        type: [String, Boolean],
	        default: false
	      },
	      interval: {
	        type: [String, Number],
	        default: 3000
	      }
	    },

	    data: function data() {
	      return {
	        currentIndex: 0,
	        frameCount: 0
	      };
	    },

	    methods: {
	      computeWrapperSize: function computeWrapperSize() {
	        var wrapper = this.$refs.wrapper;
	        if (wrapper) {
	          var rect = wrapper.getBoundingClientRect();
	          this.wrapperWidth = rect.width;
	          this.wrapperHeight = rect.height;
	        }
	      },

	      updateLayout: function updateLayout() {
	        this.computeWrapperSize();
	        var inner = this.$refs.inner;
	        if (inner) {
	          inner.style.width = this.wrapperWidth * this.frameCount + 'px';
	        }
	      },

	      formatChildren: function formatChildren(createElement) {
	        var this$1 = this;

	        var children = this.$slots.default || [];
	        return children.filter(function (vnode) {
	          if (!vnode.tag) {
	            return false;
	          }
	          if (vnode.componentOptions && vnode.componentOptions.tag === 'indicator') {
	            this$1._indicator = createElement(indicator, {
	              staticClass: vnode.data.staticClass,
	              staticStyle: vnode.data.staticStyle,
	              attrs: {
	                count: this$1.frameCount,
	                active: this$1.currentIndex
	              }
	            });
	            return false;
	          }
	          return true;
	        }).map(function (vnode) {
	          return createElement('li', {
	            ref: 'cells',
	            staticClass: 'weex-slider-cell'
	          }, [vnode]);
	        });
	      }
	    },

	    created: function created() {
	      var this$1 = this;

	      this.weexType = 'slider';
	      this.currentIndex = 0;
	      this.innerOffset = 0;
	      this._indicator = null;
	      this.$nextTick(function () {
	        this$1.updateLayout();
	      });
	    },

	    beforeUpdate: function beforeUpdate() {
	      this.updateLayout();
	      this.reorder();
	    },

	    mounted: function mounted() {
	      if (this.autoPlay) {
	        var interval = Number(this.interval);
	        this._lastSlideTime = Date.now();

	        var autoPlayFn = bind(function () {
	          clearTimeout(this._autoPlayTimer);
	          var now = Date.now();
	          var nextTick = interval - now + this._lastSlideTime;
	          nextTick = nextTick > 100 ? nextTick : interval;

	          this.next();
	          this._lastSlideTime = now;
	          this._autoPlayTimer = setTimeout(autoPlayFn, nextTick);
	        }, this);

	        this._autoPlayTimer = setTimeout(autoPlayFn, interval);
	      }

	      this.reorder();
	    },

	    render: function render(createElement) {
	      /* istanbul ignore next */
	      {
	        validateStyles('slider', this.$vnode.data && this.$vnode.data.staticStyle);
	      }

	      this._cells = this.formatChildren(createElement);
	      this.frameCount = this._cells.length;

	      return createElement('nav', {
	        ref: 'wrapper',
	        attrs: { 'weex-type': 'slider' },
	        staticClass: 'weex-slider weex-slider-wrapper',
	        on: extend(this.createEventMap(), {
	          touchstart: this.handleTouchStart,
	          touchmove: throttle(bind(this.handleTouchMove, this), 25),
	          touchend: this.handleTouchEnd
	        })
	      }, [createElement('ul', {
	        ref: 'inner',
	        staticClass: 'weex-slider-inner'
	      }, this._cells), this._indicator]);
	    }
	  };

	  var warning = {
	    render: function render() {
	      // TODO: add tag nesting validation
	      {
	        var tag = this.$options._componentTag;
	        var parentTag = this.$parent.$options._componentTag;
	        console.warn("[Vue Render] The <" + tag + "> can't be the child of <" + parentTag + ">.");
	      }
	      return null;
	    }
	  };

	  /**
	   * Get text styles
	   */
	  function getTextStyle(context) {
	    if (context === void 0) context = {};

	    var lines = parseInt(context.lines) || 0;
	    if (lines > 0) {
	      return {
	        overflow: 'hidden',
	        textOverflow: 'ellipsis',
	        webkitLineClamp: lines
	      };
	    }
	  }

	  var text = {
	    mixins: [base],
	    props: {
	      lines: [Number, String],
	      value: [String]
	    },

	    render: function render(createElement) {
	      /* istanbul ignore next */
	      {
	        validateStyles('text', this.$vnode.data && this.$vnode.data.staticStyle);
	      }

	      return createElement('p', {
	        attrs: { 'weex-type': 'text' },
	        on: this.createEventMap(),
	        staticClass: 'weex-text',
	        staticStyle: getTextStyle(this)
	      }, this.$slots.default || [this.value]);
	    }
	  };

	  var textarea = {
	    mixins: [base],
	    props: {
	      value: String,
	      placeholder: String,
	      disabled: {
	        type: [String, Boolean],
	        default: false
	      },
	      autofocus: {
	        type: [String, Boolean],
	        default: false
	      },
	      rows: {
	        type: [String, Number],
	        default: 2
	      }
	    },

	    render: function render(createElement) {
	      /* istanbul ignore next */
	      {
	        validateStyles('textarea', this.$vnode.data && this.$vnode.data.staticStyle);
	      }

	      return createElement('html:textarea', {
	        attrs: {
	          'weex-type': 'textarea',
	          value: this.value,
	          disabled: this.disabled !== 'false' && this.disabled !== false,
	          autofocus: this.autofocus !== 'false' && this.autofocus !== false,
	          placeholder: this.placeholder,
	          rows: this.rows
	        },
	        on: extend(this.createEventMap(), mapFormEvents(this)),
	        staticClass: 'weex-textarea'
	      }, this.value);
	    }
	  };

	  var video = {
	    mixins: [base],
	    props: {
	      src: String,
	      playStatus: {
	        type: String,
	        default: 'pause',
	        validator: function validator(value) {
	          return ['play', 'pause'].indexOf(value) !== -1;
	        }
	      },

	      autoplay: {
	        type: [String, Boolean],
	        default: false
	      },
	      autoPlay: {
	        type: [String, Boolean],
	        default: false
	      },

	      playsinline: {
	        type: [String, Boolean],
	        default: false
	      },
	      controls: {
	        type: [String, Boolean],
	        default: false
	      }
	    },

	    render: function render(createElement) {
	      /* istanbul ignore next */
	      {
	        validateStyles('video', this.$vnode.data && this.$vnode.data.staticStyle);
	      }

	      // TODO: support playStatus
	      return createElement('html:video', {
	        attrs: {
	          'weex-type': 'video',
	          autoplay: this.autoplay !== 'false' && this.autoplay !== false,
	          autoPlay: this.autoplay !== 'false' && this.autoplay !== false,
	          controls: this.controls,
	          src: this.src
	        },
	        on: this.createEventMap(['start', 'pause', 'finish', 'fail']),
	        staticClass: 'weex-video'
	      });
	    }
	  };

	  var web = {
	    mixins: [base, event$1],
	    props: {
	      src: String
	    },
	    methods: {
	      // TODO: check cross-origin
	      goBack: function goBack() {
	        if (this.$el) {
	          this.$el.contentWindow.history.back();
	        }
	      },
	      goForward: function goForward() {
	        if (this.$el) {
	          this.$el.contentWindow.history.forward();
	        }
	      },
	      reload: function reload() {
	        if (this.$el) {
	          this.$el.contentWindow.history.reload();
	        }
	      }
	    },

	    mounted: function mounted() {
	      var this$1 = this;

	      if (this.$el) {
	        this.$emit('pagefinish', this.createCustomEvent(this, 'pagestart', { url: this.src }));
	        this.$el.addEventListener('load', function (event$$1) {
	          this$1.$emit('pagefinish', this$1.createCustomEvent(this$1, 'pagefinish', { url: this$1.src }));
	        });
	      }
	    },

	    render: function render(createElement) {
	      /* istanbul ignore next */
	      {
	        validateStyles('web', this.$vnode.data && this.$vnode.data.staticStyle);
	      }

	      return createElement('iframe', {
	        attrs: {
	          'weex-type': 'web',
	          src: this.src
	        },
	        on: this.createEventMap(['error']),
	        staticClass: 'weex-web'
	      });
	    }
	  };

	  var components$1 = Object.freeze({
	    switch: _switch,
	    a: a,
	    div: div,
	    container: div,
	    image: image,
	    img: image,
	    input: input,
	    list: index$6,
	    cell: cell,
	    scroller: scroller,
	    slider: index$7,
	    indicator: warning,
	    refresh: warning,
	    loading: warning,
	    LoadingIndicator: LoadingIndicator,
	    text: text,
	    textarea: textarea,
	    video: video,
	    web: web
	  });

	  var warned = false;

	  function getWarnText(prop) {
	    return "[Vue Rneder] \"" + prop + "\" is not a standard CSS property," + 'it may not support very well on weex vue render.';
	  }

	  function normalize(styles) {
	    var realStyle = {};
	    for (var key in styles) {
	      var value = styles[key];

	      // TODO: add more reliable check
	      if (typeof value === 'number') {
	        value += 'px';
	      }

	      // warn for unsupported properties
	      switch (key) {
	        case 'lines':
	        case 'item-color':
	        case 'itemColor':
	        case 'item-selected-color':
	        case 'itemSelectedColor':
	        case 'item-size':
	        case 'itemSize':
	          console.warn(getWarnText(key));break;
	      }

	      realStyle[key] = value;
	    }
	    return realStyle;
	  }

	  function getStyleMap(component) {
	    if (component && component.$vnode && component.$vnode.context) {
	      var $options = component.$vnode.context.$options;
	      if ($options && $options.style) {
	        if (!warned) {
	          warned = true;
	          console.error('[Invalid Bundle Format] This bundle format is ' + 'generated for Android and iOS platform, ' + 'please use "vue-loader" to compile the ".vue" file on the web.');
	        }
	        return $options.style;
	      }
	    }
	  }

	  function getStaticClass(component) {
	    if (component && component.$vnode && component.$vnode.data) {
	      var data = component.$vnode.data;
	      return [].concat(data.staticClass, data.class);
	    }
	  }

	  function getComponentStyle(context) {
	    var styleMap = getStyleMap(context);
	    var staticClass = getStaticClass(context);

	    if (styleMap && Array.isArray(staticClass)) {
	      var styles = staticClass.reduce(function (res, name) {
	        return extend(res, styleMap[name]);
	      }, {});

	      return normalize(styles);
	    }
	  }

	  function mergeStyles(context) {
	    var styles = getComponentStyle(context);
	    if (context.$el && styles) {
	      validateStyles(context.$options && context.$options._componentTag, styles);
	      for (var key in styles) {
	        context.$el.style[key] = styles[key];
	      }
	    }
	  }

	  var styleMixin = {
	    mounted: function mounted() {
	      mergeStyles(this);
	    },
	    beforeUpdate: function beforeUpdate() {
	      mergeStyles(this);
	    }
	  };

	  function install$1(Vue) {
	    setViewport();

	    Vue.prototype.$getConfig = function () {
	      console.warn('[Vue Render] "this.$getConfig" is deprecated, please use "weex.config" instead.');
	      return window.weex.config;
	    };

	    var htmlRegex = /^html:/i;
	    Vue.config.isReservedTag = function (tag) {
	      return htmlRegex.test(tag);
	    };
	    Vue.config.parsePlatformTagName = function (tag) {
	      return tag.replace(htmlRegex, '');
	    };

	    for (var name in components$1) {
	      Vue.component(name, components$1[name]);
	    }

	    /* istanbul ignore next */
	    {
	      if (semver.lt(Vue.version, '2.1.5')) {
	        console.warn("[Vue Render] The version of Vue should be " + "greater than 2.1.5, current is " + Vue.version + ".");
	      }
	      console.info("[Vue Render] Registered components: " + "[" + Object.keys(components$1).join(', ') + "].");

	      // merge styles to inline
	      Vue.mixin(styleMixin);
	    }
	  }

	  // auto install in dist mode
	  if (typeof window !== 'undefined' && window.Vue) {
	    install$1(window.Vue);
	  }

	  var index = {
	    install: install$1
	  };

	  return index;
	});
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2), (function() { return this; }())))

/***/ }),
/* 2 */
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
/* 3 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var nativeEvent = {
	    skip: function skip(url) {
	        window.location.href = url;
	    }
	};
	exports.default = nativeEvent;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	(function (global, factory) {
	  ( false ? 'undefined' : _typeof(exports)) === 'object' && typeof module !== 'undefined' ? module.exports = factory() :  true ? !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : global.weexVueGlobalEvent = factory();
	})(undefined, function () {
	  'use strict';

	  function __$styleInject(css, returnValue) {
	    if (typeof document === 'undefined') {
	      return returnValue;
	    }
	    css = css || '';
	    var head = document.head || document.getElementsByTagName('head')[0];
	    var style = document.createElement('style');
	    style.type = 'text/css';
	    if (style.styleSheet) {
	      style.styleSheet.cssText = css;
	    } else {
	      style.appendChild(document.createTextNode(css));
	    }
	    head.appendChild(style);
	    return returnValue;
	  }
	  /*
	   * Licensed to the Apache Software Foundation (ASF) under one
	   * or more contributor license agreements.  See the NOTICE file
	   * distributed with this work for additional information
	   * regarding copyright ownership.  The ASF licenses this file
	   * to you under the Apache License, Version 2.0 (the
	   * "License"); you may not use this file except in compliance
	   * with the License.  You may obtain a copy of the License at
	   *
	   *   http://www.apache.org/licenses/LICENSE-2.0
	   *
	   * Unless required by applicable law or agreed to in writing,
	   * software distributed under the License is distributed on an
	   * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
	   * KIND, either express or implied.  See the License for the
	   * specific language governing permissions and limitations
	   * under the License.
	   */
	  /**
	   * globalEvent API:
	   * @doc http://weex.apache.org/cn/references/modules/globalevent.html
	   */
	  // track varies kinds of events and listeners.
	  var handlerTraker = {};

	  var globalEvent$1 = {
	    /**
	     * addEventListener
	     * NOTE: one callback can only be bound to the same event once. Bind a callback twice doesn't
	     *  mean it will be called twice when the event fired once.
	     * @param {string} evt - the event name to add a listener on.
	     */
	    addEventListener: function addEventListener(evt, callback) {
	      if (!callback) {
	        {
	          console.error("[vue-render] missing callback arg in globalEvent.addEventListener.");
	        }
	        return;
	      }
	      var handlers = handlerTraker[evt];
	      if (!handlers) {
	        handlers = handlerTraker[evt] = [];
	      }
	      var len = handlers.length;
	      for (var i = 0; i < len; i++) {
	        if (handlers[i] === callback) {
	          // this callback is already bound. no need to bind it again.
	          return;
	        }
	      }
	      handlers.push(callback);
	      document.addEventListener(evt, callback);
	    },

	    /**
	     * removeEventListener
	     * NOTE: remove all the event handlers for the specified event type.
	     * @param {string} evt - the event name to remove a listener from.
	     */
	    removeEventListener: function removeEventListener(evt) {
	      var handlers = handlerTraker[evt];
	      if (!handlers) {
	        // evt handlers has been already removed.
	        return;
	      }
	      handlers.forEach(function (cb) {
	        return document.removeEventListener(evt, cb);
	      });
	      delete handlerTraker[evt];
	    }
	  };

	  var globalEvent$2 = {
	    init: function init(weex) {
	      weex.registerModule('globalEvent', globalEvent$1);
	    }
	  };

	  return globalEvent$2;
	});

/***/ })
/******/ ]);