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
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar shuffleArray = function shuffleArray(array) {\n    var currentIndex = array.length,\n        temporaryValue,\n        randomIndex;\n\n    while (0 !== currentIndex) {\n\n        randomIndex = Math.floor(Math.random() * currentIndex);\n        currentIndex -= 1;\n\n        temporaryValue = array[currentIndex];\n        array[currentIndex] = array[randomIndex];\n        array[randomIndex] = temporaryValue;\n    }\n\n    return array;\n};\n\nfunction getWindowSize() {\n    var wWidth = window.innerWidth;\n    var wHeight = window.innerHeight;\n    var data = {\n        width: wWidth,\n        height: wHeight\n    };\n    return data;\n}\n\nvar debounce = function debounce(func) {\n    var timer;\n    return function (event) {\n        if (timer) clearTimeout(timer);\n        timer = setTimeout(func, 100, event);\n    };\n};\n\nvar map = function map(the_numb, in_min, in_max, out_min, out_max) {\n    return (the_numb - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;\n};\n\nexports.shuffleArray = shuffleArray;\nexports.getWindowSize = getWindowSize;\nexports.debounce = debounce;\nexports.map = map;\n\n//# sourceURL=webpack:///./src/helpers.js?");

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
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nvar app = new PIXI.Application({\n  width: window.innerWidth,\n  height: window.innerHeight,\n  backgroundColor: 0xffffff\n  // forceCanvas : true\n});\n\ndocument.body.appendChild(app.view);\n\nexports.default = app;\n\n//# sourceURL=webpack:///./src/penta/app.js?");

/***/ }),

/***/ "./src/penta/border.js":
/*!*****************************!*\
  !*** ./src/penta/border.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _app = __webpack_require__(/*! ./app.js */ \"./src/penta/app.js\");\n\nvar _app2 = _interopRequireDefault(_app);\n\nvar _helpers = __webpack_require__(/*! ./../helpers.js */ \"./src/helpers.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar initBorder = function initBorder() {\n  var bt = 30; // border thickness\n  var border = new PIXI.Sprite();\n\n  // RESIZE\n  function makeBorder() {\n    // Get window size\n    var ss = (0, _helpers.getWindowSize)();\n\n    var bdr = new PIXI.Graphics();\n    bdr.beginFill(0x000000);\n    bdr.drawRect(0, 0, ss.width, bt); // top\n    bdr.drawRect(ss.width - bt, 0, bt, ss.height); // right\n    bdr.drawRect(0, ss.height - bt, ss.width, bt); // bottom\n    bdr.drawRect(0, 0, bt, ss.height); // left\n\n    bdr.endFill();\n    border.addChild(bdr);\n  }\n\n  makeBorder();\n\n  window.addEventListener(\"resize\", (0, _helpers.debounce)(function (e) {\n    if (border.children) {\n      border.removeChildren();\n    }\n    makeBorder();\n  }));\n\n  return border;\n};\n\nexports.default = initBorder;\n\n//# sourceURL=webpack:///./src/penta/border.js?");

/***/ }),

/***/ "./src/penta/config.js":
/*!*****************************!*\
  !*** ./src/penta/config.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nvar config = {\n  sqSize: 200,\n  sqThick: 1,\n  sqAcross: 16,\n  sqDown: 16,\n  colors: {\n    red: 0xB33450,\n    green: 0x427D3B,\n    blue: 0x2F3A75,\n    yellow: 0xD8B72D\n  },\n  test: {\n    testShape: false\n  }\n};\n\nexports.default = config;\n\n//# sourceURL=webpack:///./src/penta/config.js?");

/***/ }),

/***/ "./src/penta/displacement.js":
/*!***********************************!*\
  !*** ./src/penta/displacement.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nexports.default = function (config) {\n\n    var displacementSprite = new PIXI.Sprite(config.texture);\n    var displacementSpriteLook = new PIXI.Sprite(config.texture);\n    //config.container.addChild(displacementSpriteLook);\n\n    //displacementSprite.scale.set(0.2);\n    var displacementFilter = new PIXI.filters.DisplacementFilter(displacementSprite);\n\n    config.container.addChild(displacementSprite);\n\n    config.displacedElement.filters = [displacementFilter];\n\n    // displacementFilter.scale.x = 100;\n    // displacementFilter.scale.y = 100;\n    displacementSprite.anchor.set(0.5);\n\n    displacementSpriteLook.anchor.set(0.5);\n    displacementSpriteLook.alpha = 0.4;\n\n    config.container.interactive = true;\n\n    config.container.on('mousemove', onPointerMove).on('touchmove', onPointerMove);\n\n    function onPointerMove(eventData) {\n        displacementSprite.position.set(eventData.data.global.x - 25, eventData.data.global.y);\n        displacementSpriteLook.position.set(eventData.data.global.x - 25, eventData.data.global.y);\n    }\n};\n\n//# sourceURL=webpack:///./src/penta/displacement.js?");

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
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _app = __webpack_require__(/*! ./app.js */ \"./src/penta/app.js\");\n\nvar _app2 = _interopRequireDefault(_app);\n\nvar _helpers = __webpack_require__(/*! ./../helpers.js */ \"./src/helpers.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar initHalftone = function initHalftone() {\n  var halfTone = new PIXI.Container();\n  var htSize = 10;\n\n  var halfToneSprite = new PIXI.Sprite();\n  var dot = new PIXI.Graphics();\n  dot.beginFill(0x000000);\n  dot.drawCircle(0, 0, htSize / 2 * 0.99);\n  dot.endFill();\n\n  var tex = _app2.default.renderer.generateTexture(dot);\n\n  var createHalftones = function createHalftones() {\n    var ss = (0, _helpers.getWindowSize)();\n    for (var i_x = 0; i_x < ss.width / htSize; i_x++) {\n      var _loop = function _loop(i_y) {\n\n        var sprite = new PIXI.Sprite(tex);\n        // sprite.height = htSize;\n        // sprite.width = htSize;\n        sprite.x = htSize * i_x;\n        sprite.y = htSize * i_y;\n        sprite.alpha = 1.2;\n\n        sprite.anchor.set(0.5);\n\n        sprite.interactive = true;\n        sprite.on('mouseover', onMouseover);\n        sprite.on('touchenter', onMouseover);\n\n        function onMouseover() {\n          // TweenMax.to(shapeBox.scale, .3, {x: 1.32,y : 1.32, onComplete: function(){\n          //     TweenMax.to(shapeBox.scale, .5, {x: 1,y : 1, delay: 1.3});\n          // }});\n          var newScale = sprite.scale.x * 0.9;\n          sprite.scale.set(newScale);\n        }\n\n        halfToneSprite.addChild(sprite);\n      };\n\n      for (var i_y = 0; i_y < ss.height / htSize; i_y++) {\n        _loop(i_y);\n      }\n    }\n  };\n  createHalftones();\n\n  halfTone.addChild(halfToneSprite);\n\n  return halfTone;\n};\n\nexports.default = initHalftone;\n\n//# sourceURL=webpack:///./src/penta/halftone.js?");

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
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.makePentagons = exports.makePentagon = undefined;\n\nvar _config = __webpack_require__(/*! ./config.js */ \"./src/penta/config.js\");\n\nvar _config2 = _interopRequireDefault(_config);\n\nvar _app = __webpack_require__(/*! ./app.js */ \"./src/penta/app.js\");\n\nvar _app2 = _interopRequireDefault(_app);\n\nvar _helpers = __webpack_require__(/*! ./../helpers.js */ \"./src/helpers.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar colorArray = [_config2.default.colors.red, _config2.default.colors.green, _config2.default.colors.blue, _config2.default.colors.yellow, _config2.default.colors.green, _config2.default.colors.red, _config2.default.colors.yellow, _config2.default.colors.blue];\n\nvar makePentagon = function makePentagon(color) {\n    var ss = _config2.default.sqSize;\n    var shapeBox = new PIXI.Sprite();\n\n    shapeBox.interactive = true;\n    shapeBox.on('mouseover', onMouseover);\n    shapeBox.on('touchenter', onMouseover);\n\n    shapeBox.hitArea = new PIXI.Rectangle(0, 0, _config2.default.sqSize, _config2.default.sqSize);\n\n    function onMouseover() {\n        TweenMax.to(shapeBox.scale, .3, { x: 1.32, y: 1.32, onComplete: function onComplete() {\n                TweenMax.to(shapeBox.scale, .5, { x: 1, y: 1, delay: 1.3 });\n            } });\n    }\n    if (_config2.default.testShape) {\n        var bg = new PIXI.Graphics();\n        bg.beginFill(0x9cffd0, 1);\n        bg.drawRect(0, 0, _config2.default.sqSize, _config2.default.sqSize);\n        bg.endFill();\n        bg.alpha = 0.1;\n        shapeBox.addChild(bg);\n    }\n\n    var diamond = new PIXI.Graphics();\n    shapeBox.addChild(diamond);\n\n    diamond.lineStyle(_config2.default.sqThick, 0x000000, 1, 0);\n    diamond.alpha = 1;\n    //diamond.beginFill(0xffffff);\n    diamond.moveTo(ss / 2, 0);\n    diamond.lineTo(ss, ss / 3);\n    diamond.lineTo(ss - ss * 0.2, ss - ss * 0.05);\n    diamond.lineTo(ss * 0.2, ss - ss * 0.05);\n    diamond.lineTo(0, ss / 3);\n    diamond.lineTo(ss / 2, 0);\n    //diamond.endFill();\n    diamond.alpha = 1;\n    diamond.rotation = 0.785398;\n\n    // diamond.pivot.x = config.sqSize / 2;\n    // diamond.pivot.y = config.sqSize / 2;\n    diamond.x = _config2.default.sqSize / 2;\n    diamond.y = _config2.default.sqSize / 2;\n\n    // const logo = new PIXI.Sprite(resources.penta.texture);\n    // // logo.x = app.renderer.width / 2;\n    // // logo.y = app.renderer.height / 2;\n    // logo.x = config.sqSize / 2;\n    // logo.y = config.sqSize / 2;        \n    // logo.anchor.x = 0.5;\n    // logo.anchor.y = 0.5;\n    // logo.scale.x = .17;\n    // logo.scale.y = .17;\n    // shapeBox.addChild(logo);\n\n\n    shapeBox.width = 1;\n    shapeBox.height = 1;\n    //shapeBox.anchor.set(0.5);\n    shapeBox.pivot.x = _config2.default.sqSize / 2;\n    shapeBox.pivot.y = _config2.default.sqSize / 2;\n    return shapeBox;\n};\n\nvar makePentagons = function makePentagons() {\n    var container = new PIXI.Sprite();\n\n    for (var a = 0; a < _config2.default.sqAcross; a++) {\n        for (var i = 0; i < _config2.default.sqDown; i++) {\n            var diamond = makePentagon(colorArray[i % colorArray.length]);\n            container.addChild(diamond);\n            diamond.x = a * ((_app2.default.renderer.width + _config2.default.sqSize) / _config2.default.sqAcross);\n            diamond.y = i * ((_app2.default.renderer.height + _config2.default.sqSize) / _config2.default.sqDown);\n        }\n    }\n\n    var pentagons = container.children;\n\n    _app2.default.ticker.add(function () {\n        for (var _i = 0; _i < pentagons.length; _i++) {\n            var element = pentagons[_i];\n            element.rotation += 0.01 * (_i * 0.006);\n        }\n    });\n\n    // RESIZE\n    function reSizeIt() {\n        // Get new size\n        var size = (0, _helpers.getWindowSize)();\n\n        // Move pentagons\n        var cnt = 0;\n        for (var _a = 0; _a < _config2.default.sqAcross; _a++) {\n            for (var _i2 = 0; _i2 < _config2.default.sqDown; _i2++) {\n                var element = pentagons[cnt];\n                var x = _a * ((_app2.default.renderer.width + _config2.default.sqSize) / _config2.default.sqAcross);\n                var y = _i2 * ((_app2.default.renderer.height + _config2.default.sqSize) / _config2.default.sqDown);\n                var delay = cnt * .005;\n                TweenMax.to(element, .1, { x: x, y: y, delay: delay });\n                cnt++;\n            }\n        }\n    }\n\n    window.addEventListener(\"resize\", (0, _helpers.debounce)(function (e) {\n        reSizeIt();\n    }));\n    container.interactive = true;\n    return container;\n};\n\nexports.makePentagon = makePentagon;\nexports.makePentagons = makePentagons;\n\n//# sourceURL=webpack:///./src/penta/make-pentagons.js?");

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
eval("\n\nvar _helpers = __webpack_require__(/*! ./../helpers.js */ \"./src/helpers.js\");\n\nvar _makePentagons = __webpack_require__(/*! ./make-pentagons.js */ \"./src/penta/make-pentagons.js\");\n\nvar _border = __webpack_require__(/*! ./border.js */ \"./src/penta/border.js\");\n\nvar _border2 = _interopRequireDefault(_border);\n\nvar _config = __webpack_require__(/*! ./config.js */ \"./src/penta/config.js\");\n\nvar _config2 = _interopRequireDefault(_config);\n\nvar _app = __webpack_require__(/*! ./app.js */ \"./src/penta/app.js\");\n\nvar _app2 = _interopRequireDefault(_app);\n\nvar _logo = __webpack_require__(/*! ./logo.js */ \"./src/penta/logo.js\");\n\nvar _logo2 = _interopRequireDefault(_logo);\n\nvar _halftone = __webpack_require__(/*! ./halftone.js */ \"./src/penta/halftone.js\");\n\nvar _halftone2 = _interopRequireDefault(_halftone);\n\nvar _displacement = __webpack_require__(/*! ./displacement.js */ \"./src/penta/displacement.js\");\n\nvar _displacement2 = _interopRequireDefault(_displacement);\n\nvar _tagline = __webpack_require__(/*! ./tagline.js */ \"./src/penta/tagline.js\");\n\nvar _tagline2 = _interopRequireDefault(_tagline);\n\nvar _location = __webpack_require__(/*! ./location.js */ \"./src/penta/location.js\");\n\nvar _location2 = _interopRequireDefault(_location);\n\nvar _quads = __webpack_require__(/*! ./quads.js */ \"./src/penta/quads.js\");\n\nvar _quads2 = _interopRequireDefault(_quads);\n\nvar _game = __webpack_require__(/*! ./game.js */ \"./src/penta/game.js\");\n\nvar _game2 = _interopRequireDefault(_game);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar bigPattern = new PIXI.Sprite();\nbigPattern.x = -_config2.default.sqSize / 4;\nbigPattern.y = -_config2.default.sqSize / 4;\n_app2.default.stage.addChild(bigPattern);\n\nvar quads = (0, _quads2.default)();\nfor (var i = 0; i < quads.length; i++) {\n  quads[i].alpha = 0;\n  _app2.default.stage.addChild(quads[i]);\n}\n\nvar pentagonJam = (0, _makePentagons.makePentagons)();\nbigPattern.addChild(pentagonJam);\n\nvar logo = (0, _logo2.default)();\n_app2.default.stage.addChild(logo);\n// logo.mask = quads[0];\n\n\n// const tagline = theTag();\n// app.stage.addChild(tagline);\n// tagline.mask = quads[1];\n\nvar location = (0, _location2.default)();\n_app2.default.stage.addChild(location);\n// location.mask = quads[2];\n// const halftone = initHalftone();\n// app.stage.addChild(halftone);\n\n\nfunction positionLayout() {\n  logo.y = 100;\n  logo.x = 100;\n  location.x = _app2.default.renderer.width / 2;\n  location.y = _app2.default.renderer.width / 4;\n}\n\npositionLayout();\n\n// const game = theGame();\n// app.stage.addChild(game);\n\n\nvar border = (0, _border2.default)();\n_app2.default.stage.addChild(border);\n\n// let pentagons = pentagonJam.children;\n// let pentagonsShuffled = pentagons;\n\n\n// displace\nvar displaceTex = PIXI.Texture.fromImage('img/disp/10.png');\nvar displaceTex2 = PIXI.Texture.fromImage('img/disp/1.png');\nvar displaceTex3 = PIXI.Texture.fromImage('img/disp/5.png');\n\n(0, _displacement2.default)({\n  texture: displaceTex,\n  displacedElement: logo,\n  container: _app2.default.stage\n});\n\n// displacement({\n//   texture: displaceTex2,\n//   displacedElement: tagline,\n//   container: app.stage\n// });\n\n\n(0, _displacement2.default)({\n  texture: displaceTex2,\n  displacedElement: location,\n  container: _app2.default.stage\n});\n\n// TICKER\n_app2.default.ticker.add(function () {\n\n  //console.log(logo.x);\n  // if (logo.x > 0) {\n  //   logo.x = 100;\n  // } else {\n  //   logo.x -= 1;\n  // }\n\n\n  // if (location.y > (app.renderer.height / 2)) {\n  //   location.y = -1000;\n  // } else {\n  //   location.y += 1;\n  // }\n\n});\n\n// RESIZE\nfunction reSizeIt() {\n  // Get new size\n  var size = (0, _helpers.getWindowSize)();\n  var w = size.width;\n  var h = size.height;\n\n  // Scale renderer\n  _app2.default.renderer.view.style.width = w + \"px\";\n  _app2.default.renderer.view.style.height = h + \"px\";\n  _app2.default.renderer.resize(w, h);\n\n  // Move pentagons\n  // var cnt = 0;\n  // for (let a = 0; a <  config.sqAcross; a++) {\n  //   for (let i = 0; i < config.sqDown; i++) {\n  //       var element = pentagons[cnt];\n  //       var x = a * ((app.renderer.width + config.sqSize) / config.sqAcross);\n  //       var y = i * ((app.renderer.height + config.sqSize) / config.sqDown);\n  //       var delay = ( cnt * .005);\n  //       TweenMax.to(element, .1, {x: x, y: y, delay: delay})\n  //       cnt ++;\n  //   }\n  // }\n}\n\nwindow.addEventListener(\"resize\", (0, _helpers.debounce)(function (e) {\n  reSizeIt();\n}));\n\n//# sourceURL=webpack:///./src/penta/scene.js?");

/***/ }),

/***/ "./src/penta/tagline.js":
/*!******************************!*\
  !*** ./src/penta/tagline.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _app = __webpack_require__(/*! ./app.js */ \"./src/penta/app.js\");\n\nvar _app2 = _interopRequireDefault(_app);\n\nvar _helpers = __webpack_require__(/*! ./../helpers.js */ \"./src/helpers.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n//import {loader} from './loader.js';\nvar tagLine = function tagLine() {\n  var theTag = new PIXI.Sprite();\n\n  var tagSprite = new PIXI.Sprite.fromImage('img/creative-tech.png');\n  tagSprite.tint = 0x000000;\n  tagSprite.scale.x = 0.8;\n  tagSprite.scale.y = 0.8;\n  tagSprite.rotation = 0.016;\n\n  tagSprite.x = 70;\n  //tagSprite.y = app.renderer.height - 300;\n  tagSprite.y = _app2.default.renderer.height - 300;\n  theTag.addChild(tagSprite);\n\n  tagSprite.scale.set(0.01);\n\n  function scaleIt() {\n    TweenMax.to(tagSprite.scale, 4, { x: .4, y: .4, onComplete: function onComplete() {\n        TweenMax.to(tagSprite.scale, 0.1, { x: 0, y: 0, delay: 4, onComplete: function onComplete() {\n            setTimeout(function () {\n              scaleIt();\n            }, 5000);\n          } });\n      } });\n  }\n\n  setTimeout(function () {\n    scaleIt();\n  }, 10000);\n\n  // RESIZE\n  function reSizeIt() {\n    var size = (0, _helpers.getWindowSize)();\n    var w = size.width;\n  }\n\n  window.addEventListener(\"resize\", (0, _helpers.debounce)(function (e) {\n    reSizeIt();\n  }));\n\n  return theTag;\n};\n\nexports.default = tagLine;\n\n//# sourceURL=webpack:///./src/penta/tagline.js?");

/***/ })

/******/ });