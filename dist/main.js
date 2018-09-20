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
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar shuffleArray = function shuffleArray(array) {\n    var currentIndex = array.length,\n        temporaryValue,\n        randomIndex;\n\n    while (0 !== currentIndex) {\n\n        randomIndex = Math.floor(Math.random() * currentIndex);\n        currentIndex -= 1;\n\n        temporaryValue = array[currentIndex];\n        array[currentIndex] = array[randomIndex];\n        array[randomIndex] = temporaryValue;\n    }\n\n    return array;\n};\n\nfunction getWindowSize() {\n    var wWidth = window.innerWidth;\n    var wHeight = window.innerHeight;\n    var data = {\n        width: wWidth,\n        height: wHeight\n    };\n    return data;\n}\n\nvar debounce = function debounce(func) {\n    var timer;\n    return function (event) {\n        if (timer) clearTimeout(timer);\n        timer = setTimeout(func, 20, event);\n    };\n};\n\nvar map = function map(the_numb, in_min, in_max, out_min, out_max) {\n    return (the_numb - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;\n};\n\nvar boxRatio = function boxRatio(w, h) {\n    return w / h;\n};\n\nvar backgroundSize = function backgroundSize(containerW, containerH, imgW, imgH, contain) {\n    var newDims = {\n        w: null,\n        h: null,\n        scale: null\n    };\n    var imgRatio = imgW / imgH;\n\n    if (containerW / imgRatio < containerH) {\n        // Image is 100% wide and shorter than container\n        // new dims must be contaier heigh\n        if (contain) {\n            newDims.h = containerW * imgRatio;\n            newDims.w = containerW;\n        } else {\n            newDims.h = containerH;\n            newDims.w = containerH * imgRatio;\n        }\n    } else {\n        // Image is 100% wide and taller than container\n        if (contain) {\n            newDims.w = containerH * imgRatio;\n            newDims.h = containerH;\n        } else {\n            newDims.w = containerW;\n            newDims.h = containerW / imgRatio;\n        }\n    }\n    newDims.scale = newDims.w / imgW;\n    return newDims;\n};\n\nexports.shuffleArray = shuffleArray;\nexports.getWindowSize = getWindowSize;\nexports.debounce = debounce;\nexports.map = map;\nexports.backgroundSize = backgroundSize;\nexports.boxRatio = boxRatio;\n\n//# sourceURL=webpack:///./src/helpers.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n__webpack_require__(/*! ./penta/scene.js */ \"./src/penta/scene.js\");\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/penta/app.js":
/*!**************************!*\
  !*** ./src/penta/app.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nvar app = new PIXI.Application({\n  width: window.innerWidth,\n  height: window.innerHeight,\n  backgroundColor: 0xffffff,\n  antialias: true\n\n  // forceCanvas : true\n});\n\ndocument.body.appendChild(app.view);\n\nexports.default = app;\n\n//# sourceURL=webpack:///./src/penta/app.js?");

/***/ }),

/***/ "./src/penta/border.js":
/*!*****************************!*\
  !*** ./src/penta/border.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _app = __webpack_require__(/*! ./app.js */ \"./src/penta/app.js\");\n\nvar _app2 = _interopRequireDefault(_app);\n\nvar _config = __webpack_require__(/*! ./config.js */ \"./src/penta/config.js\");\n\nvar _config2 = _interopRequireDefault(_config);\n\nvar _helpers = __webpack_require__(/*! ./../helpers.js */ \"./src/helpers.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar initBorder = function initBorder() {\n  var bt = 30; // border thickness\n  var border = new PIXI.Sprite();\n\n  if (_config2.default.initialSize.width < _config2.default.breaks.mobile) {\n    bt = 15;\n  }\n\n  // RESIZE\n  function makeBorder() {\n    // Get window size\n    var ss = (0, _helpers.getWindowSize)();\n\n    var bdr = new PIXI.Graphics();\n    bdr.beginFill(0x000000);\n    bdr.drawRect(0, 0, ss.width, bt); // top\n    bdr.drawRect(ss.width - bt, 0, bt, ss.height); // right\n    bdr.drawRect(0, ss.height - bt, ss.width, bt); // bottom\n    bdr.drawRect(0, 0, bt, ss.height); // left\n\n    bdr.endFill();\n    border.addChild(bdr);\n  }\n\n  makeBorder();\n\n  window.addEventListener(\"resize\", (0, _helpers.debounce)(function (e) {\n    if (border.children) {\n      border.removeChildren();\n    }\n    makeBorder();\n  }));\n\n  return border;\n};\n\nexports.default = initBorder;\n\n//# sourceURL=webpack:///./src/penta/border.js?");

/***/ }),

/***/ "./src/penta/config.js":
/*!*****************************!*\
  !*** ./src/penta/config.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _helpers = __webpack_require__(/*! ./../helpers.js */ \"./src/helpers.js\");\n\nvar config = {\n  sqSize: 25,\n  sqThick: 3,\n  sqAcross: 16,\n  sqDown: 16,\n  colors: {\n    red: 0xB33450,\n    green: 0x427D3B,\n    blue: 0x2F3A75,\n    yellow: 0xD8B72D\n  },\n  breaks: {\n    mobile: 1000\n  },\n  initialSize: (0, _helpers.getWindowSize)()\n\n};\n\nexports.default = config;\n\n//# sourceURL=webpack:///./src/penta/config.js?");

/***/ }),

/***/ "./src/penta/displacement.js":
/*!***********************************!*\
  !*** ./src/penta/displacement.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _config = __webpack_require__(/*! ./config.js */ \"./src/penta/config.js\");\n\nvar _config2 = _interopRequireDefault(_config);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = function (config) {\n\n  var displacementSprite = new PIXI.Sprite(config.texture);\n  var displacementSpriteLook = new PIXI.Sprite(config.texture);\n  //config.container.addChild(displacementSpriteLook);\n\n  displacementSprite.scale.set(2);\n  var displacementFilter = new PIXI.filters.DisplacementFilter(displacementSprite);\n\n  config.container.addChild(displacementSprite);\n\n  config.displacedElement.filters = [displacementFilter];\n\n  displacementFilter.scale.x = 50;\n  displacementFilter.scale.y = 50;\n  displacementSprite.anchor.set(0.5);\n\n  displacementSpriteLook.anchor.set(0.5);\n  displacementSpriteLook.alpha = 0.4;\n\n  if (_config2.default.initialSize.width < _config2.default.breaks.mobile) {\n    //displacementSprite.scale.set(1);\n  }\n  config.container.interactive = true;\n  config.container.on('mousemove', onPointerMove).on('touchmove', onPointerMove);\n\n  function onPointerMove(eventData) {\n    displacementSprite.position.set(eventData.data.global.x, eventData.data.global.y);\n    displacementSpriteLook.position.set(eventData.data.global.x, eventData.data.global.y);\n  }\n};\n\n//# sourceURL=webpack:///./src/penta/displacement.js?");

/***/ }),

/***/ "./src/penta/game.js":
/*!***************************!*\
  !*** ./src/penta/game.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _app = __webpack_require__(/*! ./app.js */ \"./src/penta/app.js\");\n\nvar _app2 = _interopRequireDefault(_app);\n\nvar _quads = __webpack_require__(/*! ./quads.js */ \"./src/penta/quads.js\");\n\nvar _quads2 = _interopRequireDefault(_quads);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar theGame = function theGame() {\n  var gameContainer = new PIXI.Container();\n  var quads = (0, _quads2.default)();\n  var gameState = {};\n\n  gameState.userSequence = [];\n  gameState.computerSequence = [];\n  gameState.steps = 4;\n  gameState.clickCount = 0;\n\n  function quadClick(e) {\n    var target = e.target;\n    var q = e.target.quadNo;\n    target.alpha = 1;\n    TweenMax.to(target, 0.2, { alpha: 0, delay: 0.06 });\n    gameState.userSequence.push(q);\n    if (gameState.clickCount < gameState.computerSequence.length) {\n      if (q != gameState.computerSequence[gameState.clickCount]) {\n        console.log('WRONG CLICK');\n      } else {\n        console.log('RIGHT CLICK', gameState.clickCount, gameState.computerSequence.length);\n        if (gameState.clickCount + 1 == gameState.computerSequence.length) {\n          console.log('user wins');\n          gameState.steps++;\n          playIt();\n        }\n      }\n    } else {\n      console.log('TOO MANY CLICKS');\n    }\n    gameState.clickCount++;\n  }\n\n  function generatePattern() {\n    var pattern = [];\n    for (var i = 0; i < gameState.steps; i++) {\n      var n = Math.floor(Math.random() * 4);\n      pattern.push(n);\n    }\n    return pattern;\n  }\n\n  function playPattern(pattern) {\n    var _loop = function _loop(i) {\n      var e = quads[pattern[i]];\n      setTimeout(function () {\n        e.alpha = 1;\n        TweenMax.to(e, .15, { alpha: 0, delay: 0.1 });\n      }, 500 * i);\n    };\n\n    for (var i = 0; i < pattern.length; i++) {\n      _loop(i);\n    }\n  }\n\n  function playIt() {\n    gameState.clickCount = 0;\n    gameState.computerSequence = generatePattern();\n    playPattern(gameState.computerSequence);\n  }\n  playIt();\n  //playPattern([0,3,1,2,2,2,1,3,0,1,0,3,0]);\n\n\n  for (var i = 0; i < quads.length; i++) {\n    var _e = quads[i];\n    gameContainer.addChild(_e);\n    _e.alpha = 0;\n    _e.interactive = true;\n    _e.buttonmode = true;\n    _e.on('click', quadClick);\n    _e.quadNo = i;\n  }\n\n  return gameContainer;\n};\n\nexports.default = theGame;\n\n//# sourceURL=webpack:///./src/penta/game.js?");

/***/ }),

/***/ "./src/penta/halftone.js":
/*!*******************************!*\
  !*** ./src/penta/halftone.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _app = __webpack_require__(/*! ./app.js */ \"./src/penta/app.js\");\n\nvar _app2 = _interopRequireDefault(_app);\n\nvar _helpers = __webpack_require__(/*! ./../helpers.js */ \"./src/helpers.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar initHalftone = function initHalftone() {\n  var halfTone = new PIXI.Container();\n  var htSize = 16;\n\n  var halfToneSprite = new PIXI.Sprite();\n  var dot = new PIXI.Graphics();\n  dot.beginFill(0x000000);\n  var sSize = htSize * 0.79;\n  dot.drawRect(0, 0, sSize, sSize);\n  dot.endFill();\n\n  var tex = _app2.default.renderer.generateTexture(dot);\n\n  var createHalftones = function createHalftones() {\n    var ss = (0, _helpers.getWindowSize)();\n    for (var i_x = 0; i_x < ss.width / htSize; i_x++) {\n      var _loop = function _loop(i_y) {\n\n        var sprite = new PIXI.Sprite(tex);\n        // sprite.height = htSize;\n        // sprite.width = htSize;\n        sprite.x = htSize * i_x;\n        sprite.y = htSize * i_y;\n        sprite.alpha = 1.2;\n        sprite.hitArea = new PIXI.Rectangle(0, 0, htSize, htSize);\n        sprite.anchor.set(0.5);\n\n        sprite.interactive = true;\n        sprite.buttonMode = true;\n        sprite.on('mouseover', onMouseover);\n        sprite.on('touchenter', onMouseover);\n\n        function onMouseover() {\n          var newScale = sprite.scale.x * 0.7;\n          TweenMax.to(sprite.scale, .3, { x: newScale, y: newScale, onComplete: function onComplete() {\n              TweenMax.to(sprite.scale, .1, { x: 1, y: 1, delay: 5 });\n            } });\n          // sprite.scale.set(newScale);\n        }\n\n        halfToneSprite.addChild(sprite);\n      };\n\n      for (var i_y = 0; i_y < ss.height / htSize; i_y++) {\n        _loop(i_y);\n      }\n    }\n  };\n  createHalftones();\n\n  halfTone.addChild(halfToneSprite);\n\n  return halfTone;\n};\n\nexports.default = initHalftone;\n\n//# sourceURL=webpack:///./src/penta/halftone.js?");

/***/ }),

/***/ "./src/penta/icons.js":
/*!****************************!*\
  !*** ./src/penta/icons.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _app = __webpack_require__(/*! ./app.js */ \"./src/penta/app.js\");\n\nvar _app2 = _interopRequireDefault(_app);\n\nvar _helpers = __webpack_require__(/*! ./../helpers.js */ \"./src/helpers.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n//import {loader} from './loader.js';\nvar initIcons = function initIcons() {\n  var theIcon = new PIXI.Sprite();\n\n  var box = new PIXI.Graphics();\n  theIcon.addChild(box);\n  box.beginFill(0xf00f00);\n  box.drawRect(0, 0, 255, 255);\n\n  var iconImg = new PIXI.Sprite.fromImage('img/icon-sprite-white.png');\n  theIcon.addChild(iconImg);\n  iconImg.tint = 0x000000;\n  // iconImg.scale.x = 0.5;\n  // iconImg.scale.y = 0.5;\n\n  theIcon.interactive = true;\n  // theIcon\n  //   .on('mousemove', onPointerMove)\n  //   .on('touchmove', onPointerMove)\n\n  var frame = 0;\n\n  function advanceFrame() {\n    iconImg.x = -250 * frame;\n    frame = (frame + 1) % 8;\n  }\n\n  setInterval(advanceFrame, 300);\n\n  theIcon.mask = box;\n  // advance or reset loop counter\n\n  function onPointerMove(eventData) {\n    var mx = eventData.data.global.x;\n    var my = eventData.data.global.y;\n\n    var moverX = (0, _helpers.map)(mx, 0, _app2.default.renderer.width, 56, -56);\n    var moverY = (0, _helpers.map)(my, 0, _app2.default.renderer.height, 56, -56);\n\n    TweenMax.to(iconImg, 2, {\n      x: theIcon.width / 2 + moverX,\n      y: theIcon.height / 2 + moverY\n    });\n  }\n\n  // RESIZE\n  function reSizeIt() {\n    // Get new size\n    var size = (0, _helpers.getWindowSize)();\n    var w = size.width;\n  }\n\n  window.addEventListener(\"resize\", (0, _helpers.debounce)(function (e) {\n    reSizeIt();\n  }));\n\n  return theIcon;\n};\n\nexports.default = initIcons;\n\n//# sourceURL=webpack:///./src/penta/icons.js?");

/***/ }),

/***/ "./src/penta/location.js":
/*!*******************************!*\
  !*** ./src/penta/location.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _app = __webpack_require__(/*! ./app.js */ \"./src/penta/app.js\");\n\nvar _app2 = _interopRequireDefault(_app);\n\nvar _helpers = __webpack_require__(/*! ./../helpers.js */ \"./src/helpers.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n//import {loader} from './loader.js';\nvar theLocation = function theLocation() {\n  var locationContainer = new PIXI.Sprite();\n\n  var locationSprite = new PIXI.Sprite.fromImage('img/los-angeles.png');\n  locationSprite.tint = 0x000000;\n  locationSprite.scale.x = 0.4;\n  locationSprite.scale.y = 0.4;\n  locationSprite.rotation = 0.06;\n\n  // locationSprite.x = 700;\n  // //locationSprite.y = app.renderer.height - 300;\n  // locationSprite.y = 100;\n  locationContainer.addChild(locationSprite);\n\n  locationContainer.interactive = true;\n  locationContainer.on('mousemove', onPointerMove).on('touchmove', onPointerMove);\n\n  function onPointerMove(eventData) {\n    var mx = eventData.data.global.x;\n    var my = eventData.data.global.y;\n\n    var moverX = (0, _helpers.map)(mx, 0, _app2.default.renderer.width, -20, 20);\n    var moverY = (0, _helpers.map)(my, 0, _app2.default.renderer.height, -20, 20);\n\n    TweenMax.to(locationSprite, 2, {\n      x: locationContainer.width / 2 + moverX,\n      y: locationContainer.height / 2 + moverY\n    });\n  }\n\n  // RESIZE\n  function reSizeIt() {\n    var size = (0, _helpers.getWindowSize)();\n    var w = size.width;\n  }\n\n  window.addEventListener(\"resize\", (0, _helpers.debounce)(function (e) {\n    reSizeIt();\n  }));\n\n  return locationContainer;\n};\n\nexports.default = theLocation;\n\n//# sourceURL=webpack:///./src/penta/location.js?");

/***/ }),

/***/ "./src/penta/logo.js":
/*!***************************!*\
  !*** ./src/penta/logo.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _app = __webpack_require__(/*! ./app.js */ \"./src/penta/app.js\");\n\nvar _app2 = _interopRequireDefault(_app);\n\nvar _helpers = __webpack_require__(/*! ./../helpers.js */ \"./src/helpers.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n//import {loader} from './loader.js';\nvar initLogo = function initLogo() {\n  var theLogo = new PIXI.Sprite();\n  // theLogo.width = app.renderer.width;\n  // theLogo.height = app.renderer.height;\n\n  var logoBg = new PIXI.Sprite();\n  logoBg.width = _app2.default.renderer.width;\n  logoBg.height = _app2.default.renderer.height;\n  theLogo.addChild(logoBg);\n\n  var logoImg = new PIXI.Sprite.fromImage('img/devgru-logo-type-g-stack.png');\n  logoImg.tint = 0x000000;\n  logoImg.scale.x = 0.5;\n  logoImg.scale.y = 0.5;\n  logoImg.rotation = -0.03;\n  // logoImg.anchor.set(0.5);\n  // logoImg.x = app.renderer.width / 2;\n  // logoImg.y = app.renderer.height / 2;\n  // logoImg.x = 200;\n  //logoImg.y = app.renderer.height - (app.renderer.height / 1.5);\n  theLogo.addChild(logoImg);\n  theLogo.interactive = true;\n  theLogo.on('mousemove', onPointerMove).on('touchmove', onPointerMove);\n\n  function onPointerMove(eventData) {\n    var mx = eventData.data.global.x;\n    var my = eventData.data.global.y;\n\n    var moverX = (0, _helpers.map)(mx, 0, _app2.default.renderer.width, 56, -56);\n    var moverY = (0, _helpers.map)(my, 0, _app2.default.renderer.height, 56, -56);\n\n    TweenMax.to(logoImg, 2, {\n      x: theLogo.width / 2 + moverX,\n      y: theLogo.height / 2 + moverY\n    });\n  }\n\n  // RESIZE\n  function reSizeIt() {\n    // Get new size\n    var size = (0, _helpers.getWindowSize)();\n    var w = size.width;\n    //const h = size.height;\n\n    // Scale renderer\n    //theLogo.width = w;    \n    //theLogo.height = h;\n    //TweenMax.to(logoImg, 0.5, {y: h - (h / 1.5)});\n  }\n\n  window.addEventListener(\"resize\", (0, _helpers.debounce)(function (e) {\n    reSizeIt();\n  }));\n\n  return theLogo;\n};\n\nexports.default = initLogo;\n\n//# sourceURL=webpack:///./src/penta/logo.js?");

/***/ }),

/***/ "./src/penta/make-pentagons.js":
/*!*************************************!*\
  !*** ./src/penta/make-pentagons.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.makePentagons = exports.makePentagon = undefined;\n\nvar _config = __webpack_require__(/*! ./config.js */ \"./src/penta/config.js\");\n\nvar _config2 = _interopRequireDefault(_config);\n\nvar _app = __webpack_require__(/*! ./app.js */ \"./src/penta/app.js\");\n\nvar _app2 = _interopRequireDefault(_app);\n\nvar _helpers = __webpack_require__(/*! ./../helpers.js */ \"./src/helpers.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nvar colorArray = [_config2.default.colors.red, _config2.default.colors.green, _config2.default.colors.blue, _config2.default.colors.yellow, _config2.default.colors.green, _config2.default.colors.red, _config2.default.colors.yellow, _config2.default.colors.blue];\n\nvar makePentagon = function makePentagon(color) {\n    var ss = _config2.default.sqSize;\n    var lineThick = _config2.default.sqThick;\n    var shapeBox = new PIXI.Sprite();\n    shapeBox.width = 1;\n    shapeBox.height = 1;\n    shapeBox.pivot.x = _config2.default.sqSize / 2;\n    shapeBox.pivot.y = _config2.default.sqSize / 2;\n\n    if (_config2.default.initialSize.width < _config2.default.breaks.mobile) {\n        ss = ss / 2;\n        lineThick = 0;\n    }\n\n    var diamond = new PIXI.Graphics();\n    diamond.lineStyle(lineThick, 0x000000, 1, 0);\n    diamond.alpha = 1;\n    diamond.beginFill(0x000000);\n    diamond.drawRect(0, 0, ss, ss);\n    diamond.endFill();\n    diamond.alpha = 1;\n    diamond.rotation = 0.785398;\n    diamond.x = _config2.default.sqSize / 2;\n    diamond.y = _config2.default.sqSize / 2;\n    shapeBox.alpha = 0.5;\n    shapeBox.addChild(diamond);\n\n    return shapeBox;\n};\n\nvar makePentagons = function makePentagons() {\n    var container = new PIXI.Container();\n    var shapes = new PIXI.Sprite();\n    var pentagons = [];\n    var diamondColumns = [];\n    for (var a = 0; a < _config2.default.sqAcross; a++) {\n        var diamondColumn = [];\n        for (var i = 0; i < _config2.default.sqDown; i++) {\n            var diamond = makePentagon(colorArray[i % colorArray.length]);\n            shapes.addChild(diamond);\n            pentagons.push(diamond);\n            diamondColumn.push(diamond);\n            diamond.x = a * ((_app2.default.renderer.width + _config2.default.sqSize) / _config2.default.sqAcross);\n            diamond.y = i * ((_app2.default.renderer.height + _config2.default.sqSize) / _config2.default.sqDown);\n        }\n        diamondColumns.push(diamondColumns);\n    }\n\n    var col = [];\n    for (var _i = 0; _i < _config2.default.sqAcross; _i++) {\n        var e = pentagons[_i];\n        if (e.diamondColumn == 5) {\n            col.push(e);\n        }\n    }\n\n    setTimeout(function () {\n        TweenMax.staggerTo(diamondColumns, 1.2, { y: -1000 });\n    }, 2000);\n\n    container.addChild(shapes);\n\n    _app2.default.ticker.add(function () {\n        for (var _i2 = 0; _i2 < pentagons.length; _i2++) {\n            var element = pentagons[_i2];\n            element.rotation += 0.01 * (_i2 * 0.006);\n        }\n    });\n\n    // RESIZE\n    function reSizeIt() {\n\n        // Move pentagons\n        var cnt = 0;\n        for (var _a = 0; _a < _config2.default.sqAcross; _a++) {\n            for (var _i3 = 0; _i3 < _config2.default.sqDown; _i3++) {\n                var element = pentagons[cnt];\n                var x = _a * ((_app2.default.renderer.width + _config2.default.sqSize) / _config2.default.sqAcross);\n                var y = _i3 * ((_app2.default.renderer.height + _config2.default.sqSize) / _config2.default.sqDown);\n                var delay = cnt * .005;\n                TweenMax.to(element, .1, { x: x, y: y, delay: delay });\n                cnt++;\n            }\n        }\n    }\n\n    window.addEventListener(\"resize\", function (e) {\n        reSizeIt();\n    });\n    container.interactive = true;\n\n    var displaceTex = PIXI.Texture.fromImage('img/disp/9.png');\n    var displacementSprite = new PIXI.Sprite(displaceTex);\n    var displacementSprite_LOOK = new PIXI.Sprite(displaceTex);\n    var displacementFilter = new PIXI.filters.DisplacementFilter(displacementSprite);\n    container.addChild(displacementSprite);\n    //container.addChild(displacementSprite_LOOK);\n    displacementSprite_LOOK.tint = 0xFF0000;\n    displacementSprite_LOOK.alpha = 0.08;\n\n    shapes.filters = [displacementFilter];\n\n    displacementSprite.scale.set(displacementSpriteMax);\n    displacementFilter.scale.set(50);\n    displacementSprite.anchor.set(0.5);\n    displacementSprite.x = _app2.default.renderer.width / 2;\n    displacementSprite.y = _app2.default.renderer.height / 2;\n\n    displacementSprite_LOOK.anchor.set(0.5);\n\n    var displacementSpriteMax = 5;\n    var displacementSpriteMin = 3;\n    if (_config2.default.initialSize.width < _config2.default.breaks.mobile) {\n        displacementSpriteMax = 3;\n        displacementSpriteMin = 1;\n        displacementFilter.scale.set(10);\n    }\n\n    TweenMax.to(displacementSprite.scale, 15, { x: displacementSpriteMin, y: displacementSpriteMin, repeat: -1, yoyo: true, ease: Back.easeOut });\n    container.interactive = true;\n\n    container.on('mousemove', onPointerMove).on('touchmove', onPointerMove);\n\n    function onPointerMove(eventData) {\n        var _TweenMax$to, _TweenMax$to2;\n\n        var moverX = (0, _helpers.map)(eventData.data.global.x, 0, _app2.default.renderer.width, -150, 150);\n        var moverY = (0, _helpers.map)(eventData.data.global.y, 0, _app2.default.renderer.height, -150, 150);\n\n        TweenMax.to(displacementSprite, 2, (_TweenMax$to = {\n            x: _app2.default.renderer.width / 2 + moverX,\n            y: _app2.default.renderer.height / 2 + moverY\n        }, _defineProperty(_TweenMax$to, 'x', eventData.data.global.x), _defineProperty(_TweenMax$to, 'y', eventData.data.global.y), _TweenMax$to));\n        TweenMax.to(displacementSprite_LOOK, 2, (_TweenMax$to2 = {\n            x: _app2.default.renderer.width / 2 + moverX,\n            y: _app2.default.renderer.height / 2 + moverY\n        }, _defineProperty(_TweenMax$to2, 'x', eventData.data.global.x), _defineProperty(_TweenMax$to2, 'y', eventData.data.global.y), _TweenMax$to2));\n    }\n\n    return container;\n};\n\nexports.makePentagon = makePentagon;\nexports.makePentagons = makePentagons;\n\n//# sourceURL=webpack:///./src/penta/make-pentagons.js?");

/***/ }),

/***/ "./src/penta/quads.js":
/*!****************************!*\
  !*** ./src/penta/quads.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _app = __webpack_require__(/*! ./app.js */ \"./src/penta/app.js\");\n\nvar _app2 = _interopRequireDefault(_app);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar makeQuads = function makeQuads() {\n  var quads = [];\n  var count = 0;\n  var colors = [0xFF0000, 0x00FF00, 0x0000FF, 0xF0F000];\n\n  function makeQuad(color) {\n    var g = new PIXI.Graphics();\n    g.beginFill(color);\n    g.drawRect(0, 0, _app2.default.renderer.width / 2, _app2.default.renderer.height / 2);\n    g.alpha = 0.4;\n    return g;\n  }\n\n  for (var i = 0; i < 2; i++) {\n    for (var j = 0; j < 2; j++) {\n      var l = count % colors.length;\n      var q = makeQuad(colors[l]);\n      q.x = _app2.default.renderer.width / 2 * i;\n      q.y = _app2.default.renderer.height / 2 * j;\n      quads.push(q);\n      count++;\n    }\n  }\n\n  return quads;\n};\n\nexports.default = makeQuads;\n\n//# sourceURL=webpack:///./src/penta/quads.js?");

/***/ }),

/***/ "./src/penta/scene.js":
/*!****************************!*\
  !*** ./src/penta/scene.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _helpers = __webpack_require__(/*! ./../helpers.js */ \"./src/helpers.js\");\n\nvar _makePentagons = __webpack_require__(/*! ./make-pentagons.js */ \"./src/penta/make-pentagons.js\");\n\nvar _border = __webpack_require__(/*! ./border.js */ \"./src/penta/border.js\");\n\nvar _border2 = _interopRequireDefault(_border);\n\nvar _config = __webpack_require__(/*! ./config.js */ \"./src/penta/config.js\");\n\nvar _config2 = _interopRequireDefault(_config);\n\nvar _app = __webpack_require__(/*! ./app.js */ \"./src/penta/app.js\");\n\nvar _app2 = _interopRequireDefault(_app);\n\nvar _logo = __webpack_require__(/*! ./logo.js */ \"./src/penta/logo.js\");\n\nvar _logo2 = _interopRequireDefault(_logo);\n\nvar _halftone = __webpack_require__(/*! ./halftone.js */ \"./src/penta/halftone.js\");\n\nvar _halftone2 = _interopRequireDefault(_halftone);\n\nvar _displacement = __webpack_require__(/*! ./displacement.js */ \"./src/penta/displacement.js\");\n\nvar _displacement2 = _interopRequireDefault(_displacement);\n\nvar _tagline = __webpack_require__(/*! ./tagline.js */ \"./src/penta/tagline.js\");\n\nvar _tagline2 = _interopRequireDefault(_tagline);\n\nvar _location = __webpack_require__(/*! ./location.js */ \"./src/penta/location.js\");\n\nvar _location2 = _interopRequireDefault(_location);\n\nvar _icons = __webpack_require__(/*! ./icons.js */ \"./src/penta/icons.js\");\n\nvar _icons2 = _interopRequireDefault(_icons);\n\nvar _quads = __webpack_require__(/*! ./quads.js */ \"./src/penta/quads.js\");\n\nvar _quads2 = _interopRequireDefault(_quads);\n\nvar _game = __webpack_require__(/*! ./game.js */ \"./src/penta/game.js\");\n\nvar _game2 = _interopRequireDefault(_game);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar bigPattern = new PIXI.Sprite();\n_app2.default.stage.addChild(bigPattern);\n\nvar foreground = new PIXI.Container();\n_app2.default.stage.addChild(foreground);\n\nvar pentagonJam = (0, _makePentagons.makePentagons)();\nbigPattern.addChild(pentagonJam);\n\nvar logo = (0, _logo2.default)();\nforeground.addChild(logo);\n\nvar location = (0, _location2.default)();\nforeground.addChild(location);\n\nvar icons = (0, _icons2.default)();\nforeground.addChild(icons);\n\nvar tagSprite = new PIXI.Sprite.fromImage('img/creative-tech.png');\n//const tagger = theTag();\n//foreground.addChild(tagSprite);\n\n\nvar halftone = (0, _halftone2.default)();\nforeground.addChild(halftone);\nhalftone.interactive = true;\n\nvar halfMask = new PIXI.Graphics();\n\nfunction sizePositionLayout(size) {\n  halfMask.clear();\n  halfMask.beginFill(0xF00F00);\n  bigPattern.x = -_config2.default.sqSize / 4;\n  bigPattern.y = -_config2.default.sqSize / 4;\n  if (size.width > _config2.default.breaks.mobile) {\n    logo.scale.set(1);\n    logo.y = 100;\n    logo.x = 100;\n    location.scale.set(1);\n    location.x = _app2.default.renderer.width / 2;\n    location.y = _app2.default.renderer.height - _app2.default.renderer.height / 1.7;\n    icons.scale.set(1);\n    icons.x = _app2.default.renderer.width - 300;\n    icons.y = _app2.default.renderer.height - 300;\n    halfMask.drawRect(200, _app2.default.renderer.height - 240, 200, 100);\n  } else {\n    logo.scale.set(0.3);\n    logo.y = 70;\n    logo.x = 50;\n    location.scale.set(0.5);\n    location.x = 50;\n    location.y = 190;\n    icons.scale.set(0.5);\n    icons.x = 10;\n    icons.y = _app2.default.renderer.height - 150;\n    if (size.height < 450) {\n      halfMask.drawRect(_app2.default.renderer.width - 250, 50, 200, 100);\n    } else {\n      halfMask.drawRect(_app2.default.renderer.width - 190, 300, 150, 70);\n    }\n  }\n  halftone.mask = halfMask;\n}\n\nsizePositionLayout(_config2.default.initialSize);\n\nvar border = (0, _border2.default)();\n_app2.default.stage.addChild(border);\n\n// displace\nvar pcTex = PIXI.Texture.fromImage('img/pc/pc1.jpg');\nvar pcSprite = new PIXI.Sprite(pcTex);\npcSprite.width = _app2.default.renderer.width;\npcSprite.height = _app2.default.renderer.height;\npcSprite.blendMode = PIXI.BLEND_MODES.ADD;\n_app2.default.stage.addChild(pcSprite);\n\nvar displaceTex = PIXI.Texture.fromImage('img/disp/7.png');\n\n(0, _displacement2.default)({\n  texture: displaceTex,\n  displacedElement: foreground,\n  container: _app2.default.stage\n});\n\n// TICKER\n_app2.default.ticker.add(function () {});\n\n// RESIZE\nfunction reSizeIt() {\n  // Get new size\n  var size = (0, _helpers.getWindowSize)();\n  var w = size.width;\n  var h = size.height;\n\n  // Scale renderer\n  _app2.default.renderer.view.style.width = w + \"px\";\n  _app2.default.renderer.view.style.height = h + \"px\";\n  _app2.default.renderer.resize(w, h);\n  sizePositionLayout(size);\n}\n\nwindow.addEventListener(\"resize\", (0, _helpers.debounce)(function (e) {\n  reSizeIt();\n}));\n\n//# sourceURL=webpack:///./src/penta/scene.js?");

/***/ }),

/***/ "./src/penta/tagline.js":
/*!******************************!*\
  !*** ./src/penta/tagline.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _app = __webpack_require__(/*! ./app.js */ \"./src/penta/app.js\");\n\nvar _app2 = _interopRequireDefault(_app);\n\nvar _helpers = __webpack_require__(/*! ./../helpers.js */ \"./src/helpers.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n//import {loader} from './loader.js';\nvar tagLine = function tagLine() {\n  var theTag = new PIXI.Sprite();\n\n  var tagSprite = new PIXI.Sprite.fromImage('img/creative-tech.png');\n  tagSprite.tint = 0x000000;\n  tagSprite.scale.x = 0.8;\n  tagSprite.scale.y = 0.8;\n  tagSprite.rotation = 0.016;\n\n  tagSprite.x = 70;\n  //tagSprite.y = app.renderer.height - 300;\n  //tagSprite.y = app.renderer.height - 300;\n  theTag.addChild(tagSprite);\n\n  tagSprite.scale.set(0.01);\n\n  function scaleIt() {\n    TweenMax.to(tagSprite.scale, 4, { x: .4, y: .4, onComplete: function onComplete() {\n        TweenMax.to(tagSprite.scale, 0.1, { x: 0, y: 0, delay: 4, onComplete: function onComplete() {\n            setTimeout(function () {\n              scaleIt();\n            }, 5000);\n          } });\n      } });\n  }\n\n  // setTimeout(() => {\n  //   scaleIt();\n  // }, 10000);\n\n  // RESIZE\n  function reSizeIt() {\n    var size = (0, _helpers.getWindowSize)();\n    var w = size.width;\n  }\n\n  window.addEventListener(\"resize\", (0, _helpers.debounce)(function (e) {\n    reSizeIt();\n  }));\n\n  return theTag;\n};\n\nexports.default = tagLine;\n\n//# sourceURL=webpack:///./src/penta/tagline.js?");

/***/ })

/******/ });