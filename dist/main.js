/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/helpers.js":
/*!************************!*\
  !*** ./src/helpers.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar shuffleArray = function shuffleArray(array) {\n    var currentIndex = array.length,\n        temporaryValue,\n        randomIndex;\n\n    while (0 !== currentIndex) {\n\n        randomIndex = Math.floor(Math.random() * currentIndex);\n        currentIndex -= 1;\n\n        temporaryValue = array[currentIndex];\n        array[currentIndex] = array[randomIndex];\n        array[randomIndex] = temporaryValue;\n    }\n\n    return array;\n};\n\nvar resizeInit = function resizeInit() {\n    (function ($, sr) {\n\n        var debounce = function debounce(func, threshold, execAsap) {\n            var timeout;\n\n            return function debounced() {\n                var obj = this,\n                    args = arguments;\n                function delayed() {\n                    if (!execAsap) func.apply(obj, args);\n                    timeout = null;\n                };\n\n                if (timeout) clearTimeout(timeout);else if (execAsap) func.apply(obj, args);\n\n                timeout = setTimeout(delayed, threshold || 50);\n            };\n        };\n        // smartresize \n        jQuery.fn[sr] = function (fn) {\n            return fn ? this.bind('resize', debounce(fn)) : this.trigger(sr);\n        };\n    })(jQuery, 'smartresize');\n};\n\nfunction getWindowSize() {\n    var wWidth = window.innerWidth;\n    var wHeight = window.innerHeight;\n    var data = {\n        width: wWidth,\n        height: wHeight\n    };\n    return data;\n}\n\nexports.shuffleArray = shuffleArray;\nexports.resizeInit = resizeInit;\nexports.getWindowSize = getWindowSize;\n\n//# sourceURL=webpack:///./src/helpers.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _helpers = __webpack_require__(/*! ./helpers.js */ \"./src/helpers.js\");\n\nvar _makePentagons = __webpack_require__(/*! ./penta/make-pentagons.js */ \"./src/penta/make-pentagons.js\");\n\nvar _config = __webpack_require__(/*! ./penta/config.js */ \"./src/penta/config.js\");\n\nvar _config2 = _interopRequireDefault(_config);\n\nvar _app = __webpack_require__(/*! ./penta/app.js */ \"./src/penta/app.js\");\n\nvar _app2 = _interopRequireDefault(_app);\n\nvar _logo = __webpack_require__(/*! ./penta/logo.js */ \"./src/penta/logo.js\");\n\nvar _logo2 = _interopRequireDefault(_logo);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar diamonds = void 0;\nvar bigPattern = void 0;\nbigPattern = new PIXI.Sprite();\n\nvar pentagonJam;\nif (_config2.default.testShape) {\n    pentagonJam = (0, _makePentagons.makePentagon)(0x000000);\n    pentagonJam.x = 500;\n    pentagonJam.y = 200;\n} else {\n    pentagonJam = (0, _makePentagons.makePentagons)();\n}\n\nbigPattern.addChild(pentagonJam);\nbigPattern.x = -_config2.default.sqSize / 4;\nbigPattern.y = -_config2.default.sqSize / 4;\n_app2.default.stage.addChild(bigPattern);\n\nvar logo = (0, _logo2.default)();\nconsole.log(logo);\n// logo.scale.set(0.5);\n// logo.anchor.set(0.5);\n// logo.x = app.renderer.width / 2 - 200;\n// logo.y = app.renderer.height / 2 - 200;\n\n\n_app2.default.stage.addChild(logo);\n\nvar displacementSprite = PIXI.Sprite.fromImage('img/gradient1.png');\ndisplacementSprite.scale.set(1);\nvar displacementFilter = new PIXI.filters.DisplacementFilter(displacementSprite);\n\nbigPattern.addChild(displacementSprite);\n\nlogo.filters = [displacementFilter];\n\ndisplacementFilter.scale.x = 110;\ndisplacementFilter.scale.y = 110;\ndisplacementSprite.anchor.set(0.5);\n\nbigPattern.interactive = true;\n\nbigPattern.on('mousemove', onPointerMove).on('touchmove', onPointerMove);\n\nfunction onPointerMove(eventData) {\n    displacementSprite.position.set(eventData.data.global.x - 25, eventData.data.global.y);\n}\n\ndiamonds = pentagonJam.children;\nvar diamondsShuffled = diamonds;\n\nsetInterval(function () {\n    diamondsShuffled = diamondsShuffled.reverse();\n}, 3000);\n\n_app2.default.ticker.add(function () {\n    if (_config2.default.testShape) {\n        pentagonJam.rotation += 0.01 * (10 * 0.006);\n    }\n    for (var i = 0; i < diamonds.length; i++) {\n        var element = diamondsShuffled[i];\n        element.rotation += 0.01 * (i * 0.006);\n    }\n});\n\nfunction sizeIt() {\n    var size = (0, _helpers.getWindowSize)();\n\n    var w = size.width;\n    var h = size.height;\n\n    _app2.default.renderer.view.style.width = w + \"px\";\n    _app2.default.renderer.view.style.height = h + \"px\";\n    _app2.default.renderer.resize(w, h);\n\n    // for (let d = 0; d < diamonds.length; d++) {\n\n    // }\n    var cnt = 0;\n    for (var a = 0; a < _config2.default.sqAcross; a++) {\n        for (var i = 0; i < _config2.default.sqDown; i++) {\n            var element = diamonds[cnt];\n            var x = a * (_app2.default.renderer.width / _config2.default.sqAcross);\n            var y = i * (_app2.default.renderer.height / _config2.default.sqDown);\n            var delay = cnt * .005;\n            TweenMax.to(element, .1, { x: x, y: y, delay: delay });\n            cnt++;\n        }\n    }\n}\n\n(0, _helpers.resizeInit)();\n\njQuery(window).smartresize(function () {\n    sizeIt();\n});\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/penta/app.js":
/*!**************************!*\
  !*** ./src/penta/app.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nvar app = new PIXI.Application({\n  width: window.innerWidth,\n  height: window.innerHeight,\n  backgroundColor: 0xFFFFFF\n  // forceCanvas : true\n});\n\ndocument.body.appendChild(app.view);\n\nexports.default = app;\n\n//# sourceURL=webpack:///./src/penta/app.js?");

/***/ }),

/***/ "./src/penta/config.js":
/*!*****************************!*\
  !*** ./src/penta/config.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nvar config = {\n  sqSize: 200,\n  sqThick: 2,\n  sqAcross: 16,\n  sqDown: 16,\n  colors: {\n    red: 0xB33450,\n    green: 0x427D3B,\n    blue: 0x2F3A75,\n    yellow: 0xD8B72D\n  },\n  test: {\n    testShape: false\n  }\n};\n\nexports.default = config;\n\n//# sourceURL=webpack:///./src/penta/config.js?");

/***/ }),

/***/ "./src/penta/loader.js":
/*!*****************************!*\
  !*** ./src/penta/loader.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nvar loader = PIXI.loader.add('logo', 'img/devgru-logo.png').add('penta', 'img/devgru-logo-penta.png').load(function (loader, resources) {\n  console.log('loaded');\n});\nexports.loader = loader;\n\n//# sourceURL=webpack:///./src/penta/loader.js?");

/***/ }),

/***/ "./src/penta/logo.js":
/*!***************************!*\
  !*** ./src/penta/logo.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _loader = __webpack_require__(/*! ./loader.js */ \"./src/penta/loader.js\");\n\nvar _app = __webpack_require__(/*! ./app.js */ \"./src/penta/app.js\");\n\nvar _app2 = _interopRequireDefault(_app);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar initLogo = function initLogo() {\n  var theLogo = new PIXI.Container();\n  theLogo.width = _app2.default.renderer.width;\n  theLogo.height = _app2.default.renderer.height;\n\n  var logoBg = new PIXI.Sprite();\n  //logoBg.tint = 0xFFA09A; \n  logoBg.width = _app2.default.renderer.width;\n  logoBg.height = _app2.default.renderer.height;\n  theLogo.addChild(logoBg);\n\n  var logoImg = new PIXI.Sprite.fromImage('img/devgru-longtype.png');\n  logoImg.scale.x = 0.8;\n  logoImg.scale.y = 0.8;\n  logoImg.rotation = -0.03;\n  // logoImg.anchor.set(0.5);\n  // logoImg.x = app.renderer.width / 2;\n  // logoImg.y = app.renderer.height / 2;\n  logoImg.x = 200;\n  logoImg.y = 500;\n  theLogo.addChild(logoImg);\n  //const logoMask = new PIXI.Sprite.fromImage('img/dither.png');\n  var logoMask = new PIXI.Sprite(PIXI.Texture.WHITE);\n  logoMask.width = _app2.default.renderer.width;\n  logoMask.height = _app2.default.renderer.height;\n  logoMask.tint = 0x000000;\n\n  // logoMask.scale.x = .5;\n  // logoMask.scale.y = .5;\n  //theLogo.addChild(logoMask);\n\n  /*\n  // logoMask.mask = logoImg;\n  const logoMask = new PIXI.Sprite();\n  theLogo.addChild(logoMask);\n   for (let a = 0; a <  20; a++) {\n    for (let i = 0; i < 20; i++) {\n      const square = new PIXI.Sprite(PIXI.Texture.WHITE);\n      // square.beginFill(0x000000);\n      // square.drawRect((a * (600 / 20)), (i * (600 / 20)), (600 / 20), (600 / 20));\n      // square.endFill();\n      logoMask.addChild(square);\n      square.width = (600 / 20);\n      square.height = (600 / 20);\n      square.x = (a * (600 / 20));\n      square.y = (i * (600 / 20));\n      square.tint = 0x000000; \n      square.interactive = true;\n      square.buttonMode = true;\n      square.on('mouseover', onMouseover);\n      square.on('touchenter', onMouseover);\n      square.anchor.x = 0.5;\n      square.anchor.y = 0.5;      \n      function onMouseover () {\n        console.log(square.scale);\n        TweenMax.to(square, .6, {rotation: 6.28319, delay: 0});\n        TweenMax.to(square.scale, .3, {x: 2.3,y : 2.7, onComplete: function(){\n            TweenMax.to(square.scale, .1, {x: 3,y : 3, delay: .2});\n         }});\n    }            \n    }\n  }   \n  */\n  //logoMask.mask = logoImg;\n  return theLogo;\n};\n\nexports.default = initLogo;\n\n//# sourceURL=webpack:///./src/penta/logo.js?");

/***/ }),

/***/ "./src/penta/make-pentagons.js":
/*!*************************************!*\
  !*** ./src/penta/make-pentagons.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.makePentagons = exports.makePentagon = undefined;\n\nvar _config = __webpack_require__(/*! ./config.js */ \"./src/penta/config.js\");\n\nvar _config2 = _interopRequireDefault(_config);\n\nvar _app = __webpack_require__(/*! ./app.js */ \"./src/penta/app.js\");\n\nvar _app2 = _interopRequireDefault(_app);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar colorArray = [_config2.default.colors.red, _config2.default.colors.green, _config2.default.colors.blue, _config2.default.colors.yellow, _config2.default.colors.green, _config2.default.colors.red, _config2.default.colors.yellow, _config2.default.colors.blue];\n\nvar makePentagon = function makePentagon(color) {\n    var ss = _config2.default.sqSize;\n    var shapeBox = new PIXI.Sprite();\n\n    shapeBox.interactive = true;\n    shapeBox.buttonMode = true;\n    shapeBox.on('mouseover', onMouseover);\n    shapeBox.on('touchenter', onMouseover);\n\n    shapeBox.hitArea = new PIXI.Rectangle(0, 0, _config2.default.sqSize, _config2.default.sqSize);\n\n    function onMouseover() {\n        TweenMax.to(shapeBox.scale, .3, { x: 0.62, y: 0.62, onComplete: function onComplete() {\n                TweenMax.to(shapeBox.scale, .5, { x: 1, y: 1, delay: 1.3 });\n            } });\n    }\n    if (_config2.default.testShape) {\n        var bg = new PIXI.Graphics();\n        bg.beginFill(0x9cffd0, 1);\n        bg.drawRect(0, 0, _config2.default.sqSize, _config2.default.sqSize);\n        bg.endFill();\n        bg.alpha = 0.2;\n        shapeBox.addChild(bg);\n    }\n\n    var diamond = new PIXI.Graphics();\n    shapeBox.addChild(diamond);\n\n    diamond.lineStyle(_config2.default.sqThick, color, 0.7, 0.005);\n    diamond.alpha = 1;\n\n    diamond.moveTo(ss / 2, 0);\n    diamond.lineTo(ss, ss / 3);\n    diamond.lineTo(ss - ss * 0.2, ss - ss * 0.05);\n    diamond.lineTo(ss * 0.2, ss - ss * 0.05);\n    diamond.lineTo(0, ss / 3);\n    diamond.lineTo(ss / 2, 0);\n\n    diamond.rotation = 0.785398;\n\n    // diamond.pivot.x = config.sqSize / 2;\n    // diamond.pivot.y = config.sqSize / 2;\n    diamond.x = _config2.default.sqSize / 2;\n    diamond.y = _config2.default.sqSize / 2;\n\n    // const logo = new PIXI.Sprite(resources.penta.texture);\n    // // logo.x = app.renderer.width / 2;\n    // // logo.y = app.renderer.height / 2;\n    // logo.x = config.sqSize / 2;\n    // logo.y = config.sqSize / 2;        \n    // logo.anchor.x = 0.5;\n    // logo.anchor.y = 0.5;\n    // logo.scale.x = .17;\n    // logo.scale.y = .17;\n    // shapeBox.addChild(logo);\n\n\n    shapeBox.width = 1;\n    shapeBox.height = 1;\n    //shapeBox.anchor.set(0.5);\n    shapeBox.pivot.x = _config2.default.sqSize / 2;\n    shapeBox.pivot.y = _config2.default.sqSize / 2;\n    return shapeBox;\n};\n\nvar makePentagons = function makePentagons() {\n    var container = new PIXI.Sprite();\n\n    // for (let a = 0; a <  app.renderer.height / (config.sqSize / 2); a++) {\n    //     for (let i = 0; i < app.renderer.width / (config.sqSize / 2); i++) {\n    //         const diamond = makePentagon(colorArray[i%colorArray.length]);\n    //         container.addChild(diamond);\n    //         diamond.x = i * config.sqSize * .5;\n    //         diamond.y = a * config.sqSize * .5;\n    //         diamonds.push(diamond);\n    //     }\n    // }\n\n\n    for (var a = 0; a < _config2.default.sqAcross; a++) {\n        for (var i = 0; i < _config2.default.sqDown; i++) {\n            var diamond = makePentagon(colorArray[i % colorArray.length]);\n            container.addChild(diamond);\n            diamond.x = a * ((_app2.default.renderer.width + _config2.default.sqSize) / _config2.default.sqAcross);\n            diamond.y = i * ((_app2.default.renderer.height + _config2.default.sqSize) / _config2.default.sqDown);\n        }\n    }\n\n    return container;\n};\n\nexports.makePentagon = makePentagon;\nexports.makePentagons = makePentagons;\n\n//# sourceURL=webpack:///./src/penta/make-pentagons.js?");

/***/ })

/******/ });