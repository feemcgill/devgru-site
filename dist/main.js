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
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar shuffleArray = function shuffleArray(array) {\n    var currentIndex = array.length,\n        temporaryValue,\n        randomIndex;\n\n    while (0 !== currentIndex) {\n\n        randomIndex = Math.floor(Math.random() * currentIndex);\n        currentIndex -= 1;\n\n        temporaryValue = array[currentIndex];\n        array[currentIndex] = array[randomIndex];\n        array[randomIndex] = temporaryValue;\n    }\n\n    return array;\n};\n\nvar resizeInit = function resizeInit() {\n    (function ($, sr) {\n\n        var debounce = function debounce(func, threshold, execAsap) {\n            var timeout;\n\n            return function debounced() {\n                var obj = this,\n                    args = arguments;\n                function delayed() {\n                    if (!execAsap) func.apply(obj, args);\n                    timeout = null;\n                };\n\n                if (timeout) clearTimeout(timeout);else if (execAsap) func.apply(obj, args);\n\n                timeout = setTimeout(delayed, threshold || 50);\n            };\n        };\n        // smartresize \n        jQuery.fn[sr] = function (fn) {\n            return fn ? this.bind('resize', debounce(fn)) : this.trigger(sr);\n        };\n    })(jQuery, 'smartresize');\n};\n\nexports.shuffleArray = shuffleArray;\nexports.resizeInit = resizeInit;\n\n//# sourceURL=webpack:///./src/helpers.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _helpers = __webpack_require__(/*! ./helpers.js */ \"./src/helpers.js\");\n\nvar app = new PIXI.Application({\n    width: window.innerWidth,\n    height: window.innerHeight,\n    backgroundColor: 0xFFFFFF\n    // forceCanvas : true\n});\n\ndocument.body.appendChild(app.view);\n\nvar testShape = false;\nvar diamonds = [];\nvar bigPattern = void 0;\n\nvar config = {\n    sqSize: 200,\n    sqThick: 2,\n    sqAcross: 16,\n    sqDown: 16,\n    colors: {\n        red: 0xB33450,\n        green: 0x427D3B,\n        blue: 0x2F3A75,\n        yellow: 0xD8B72D\n    }\n};\n\nPIXI.loader.add('logo', 'img/devgru-logo.png').add('penta', 'img/devgru-logo-penta.png').load(function (loader, resources) {\n\n    var colorArray = [config.colors.red, config.colors.green, config.colors.blue, config.colors.yellow, config.colors.green, config.colors.red, config.colors.yellow, config.colors.blue];\n\n    function makeDiamond(color) {\n        var ss = config.sqSize;\n        var shapeBox = new PIXI.Sprite();\n\n        shapeBox.interactive = true;\n        shapeBox.buttonMode = true;\n        shapeBox.on('mouseover', onMouseover);\n        shapeBox.hitArea = new PIXI.Rectangle(0, 0, config.sqSize, config.sqSize);\n\n        function onMouseover() {\n            TweenMax.to(shapeBox.scale, .3, { x: 0.62, y: 0.62, onComplete: function onComplete() {\n                    TweenMax.to(shapeBox.scale, .5, { x: 1, y: 1, delay: 1.3 });\n                } });\n        }\n        if (testShape) {\n            var bg = new PIXI.Graphics();\n            bg.beginFill(0x9cffd0, 1);\n            bg.drawRect(0, 0, config.sqSize, config.sqSize);\n            bg.endFill();\n            bg.alpha = 0.2;\n            shapeBox.addChild(bg);\n        }\n\n        var diamond = new PIXI.Graphics();\n        shapeBox.addChild(diamond);\n\n        diamond.lineStyle(config.sqThick, color, 0.7, 0.005);\n        diamond.alpha = 1;\n\n        diamond.moveTo(ss / 2, 0);\n        diamond.lineTo(ss, ss / 3);\n        diamond.lineTo(ss - ss * 0.2, ss - ss * 0.05);\n        diamond.lineTo(ss * 0.2, ss - ss * 0.05);\n        diamond.lineTo(0, ss / 3);\n        diamond.lineTo(ss / 2, 0);\n\n        diamond.rotation = 0.785398;\n\n        // diamond.pivot.x = config.sqSize / 2;\n        // diamond.pivot.y = config.sqSize / 2;\n        diamond.x = config.sqSize / 2;\n        diamond.y = config.sqSize / 2;\n\n        // const logo = new PIXI.Sprite(resources.penta.texture);\n        // // logo.x = app.renderer.width / 2;\n        // // logo.y = app.renderer.height / 2;\n        // logo.x = config.sqSize / 2;\n        // logo.y = config.sqSize / 2;        \n        // logo.anchor.x = 0.5;\n        // logo.anchor.y = 0.5;\n        // logo.scale.x = .17;\n        // logo.scale.y = .17;\n        // shapeBox.addChild(logo);\n\n\n        shapeBox.width = 1;\n        shapeBox.height = 1;\n        //shapeBox.anchor.set(0.5);\n        shapeBox.pivot.x = config.sqSize / 2;\n        shapeBox.pivot.y = config.sqSize / 2;\n        return shapeBox;\n    }\n\n    function makeDiamonds() {\n        var container = new PIXI.Sprite();\n\n        // for (let a = 0; a <  app.renderer.height / (config.sqSize / 2); a++) {\n        //     for (let i = 0; i < app.renderer.width / (config.sqSize / 2); i++) {\n        //         const diamond = makeDiamond(colorArray[i%colorArray.length]);\n        //         container.addChild(diamond);\n        //         diamond.x = i * config.sqSize * .5;\n        //         diamond.y = a * config.sqSize * .5;\n        //         diamonds.push(diamond);\n        //     }\n        // }\n\n\n        for (var a = 0; a < config.sqAcross; a++) {\n            for (var i = 0; i < config.sqDown; i++) {\n                var diamond = makeDiamond(colorArray[i % colorArray.length]);\n                container.addChild(diamond);\n                diamond.x = a * (app.renderer.width / config.sqAcross);\n                diamond.y = i * (app.renderer.height / config.sqDown);\n                diamonds.push(diamond);\n            }\n        }\n\n        return container;\n    }\n\n    bigPattern = new PIXI.Sprite();\n    var ggg;\n    if (testShape) {\n        ggg = makeDiamond(0x000000);\n        ggg.x = 500;\n        ggg.y = 200;\n    } else {\n        ggg = makeDiamonds();\n    }\n\n    bigPattern.addChild(ggg);\n    bigPattern.x = config.sqSize / 4;\n    bigPattern.y = config.sqSize / 4;\n    // bigPattern.anchor.set(0.5, 0.5);\n    app.stage.addChild(bigPattern);\n\n    // const logo = new PIXI.Sprite(resources.logo.texture);\n    // logo.x = app.renderer.width / 2;\n    // logo.y = app.renderer.height / 2;\n    // logo.anchor.x = 0.5;\n    // logo.anchor.y = 0.5;\n    // logo.scale.x = .5;\n    // logo.scale.y = .5;\n    // app.stage.addChild(logo);\n\n\n    //let diamondsShuffled = shuffleArray(diamonds);\n    var diamondsShuffled = diamonds;\n\n    var rotateSpeed = void 0;\n\n    setInterval(function () {\n        //diamondsShuffled = shuffleArray(diamonds);\n        diamondsShuffled = diamondsShuffled.reverse();\n        //rotateSpeed = (Math.random() * (0.5 - 0.00500) + 0.00500);  \n        //console.log(rotateSpeed);\n    }, 3000);\n\n    // Listen for frame updates\n    app.ticker.add(function () {\n        // each frame we spin the fun around a bit\n        //bigPattern.rotation += 0.01;\n        if (testShape) {\n            ggg.rotation += 0.01 * (10 * 0.006);\n        }\n\n        for (var i = 0; i < diamonds.length; i++) {\n            var element = diamondsShuffled[i];\n            element.rotation += 0.01 * (i * 0.006);\n        }\n    });\n});\n\nfunction getWindowSize() {\n    var wWidth = window.innerWidth;\n    var wHeight = window.innerHeight;\n    var data = {\n        width: wWidth,\n        height: wHeight\n    };\n    return data;\n}\n\nfunction sizeIt() {\n    var size = getWindowSize();\n\n    var w = size.width;\n    var h = size.height;\n\n    app.renderer.view.style.width = w + \"px\";\n    app.renderer.view.style.height = h + \"px\";\n    app.renderer.resize(w, h);\n\n    // for (let d = 0; d < diamonds.length; d++) {\n\n    // }\n    var cnt = 0;\n    for (var a = 0; a < config.sqAcross; a++) {\n        for (var i = 0; i < config.sqDown; i++) {\n            var element = diamonds[cnt];\n            var x = a * (app.renderer.width / config.sqAcross);\n            var y = i * (app.renderer.height / config.sqDown);\n            var delay = cnt * .005;\n            TweenMax.to(element, .1, { x: x, y: y, delay: delay });\n            cnt++;\n        }\n    }\n}\n\n(0, _helpers.resizeInit)();\n\njQuery(window).smartresize(function () {\n    sizeIt();\n});\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });