'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var shuffleArray = function shuffleArray(array) {
    var currentIndex = array.length,
        temporaryValue,
        randomIndex;

    while (0 !== currentIndex) {

        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
};

var resizeInit = function resizeInit() {
    (function ($, sr) {

        var debounce = function debounce(func, threshold, execAsap) {
            var timeout;

            return function debounced() {
                var obj = this,
                    args = arguments;
                function delayed() {
                    if (!execAsap) func.apply(obj, args);
                    timeout = null;
                };

                if (timeout) clearTimeout(timeout);else if (execAsap) func.apply(obj, args);

                timeout = setTimeout(delayed, threshold || 50);
            };
        };
        // smartresize 
        jQuery.fn[sr] = function (fn) {
            return fn ? this.bind('resize', debounce(fn)) : this.trigger(sr);
        };
    })(jQuery, 'smartresize');
};

exports.shuffleArray = shuffleArray;
exports.resizeInit = resizeInit;
'use strict';

var _helpers = require('./helpers.js');

var app = new PIXI.Application({
    width: window.innerWidth,
    height: window.innerHeight,
    backgroundColor: 0xFFFFFF
    // forceCanvas : true
});

document.body.appendChild(app.view);

var testShape = false;
var diamonds = [];
var bigPattern = void 0;

var config = {
    sqSize: 200,
    sqThick: 2,
    sqAcross: 16,
    sqDown: 16,
    colors: {
        red: 0xB33450,
        green: 0x427D3B,
        blue: 0x2F3A75,
        yellow: 0xD8B72D
    }
};

PIXI.loader.add('logo', 'img/devgru-logo.png').add('penta', 'img/devgru-logo-penta.png').load(function (loader, resources) {

    var colorArray = [config.colors.red, config.colors.green, config.colors.blue, config.colors.yellow, config.colors.green, config.colors.red, config.colors.yellow, config.colors.blue];

    function makeDiamond(color) {
        var ss = config.sqSize;
        var shapeBox = new PIXI.Sprite();

        shapeBox.interactive = true;
        shapeBox.buttonMode = true;
        shapeBox.on('mouseover', onMouseover);
        shapeBox.hitArea = new PIXI.Rectangle(0, 0, config.sqSize, config.sqSize);

        function onMouseover() {
            TweenMax.to(shapeBox.scale, .3, { x: 0.62, y: 0.62, onComplete: function onComplete() {
                    TweenMax.to(shapeBox.scale, .5, { x: 1, y: 1, delay: 1.3 });
                } });
        }
        if (testShape) {
            var bg = new PIXI.Graphics();
            bg.beginFill(0x9cffd0, 1);
            bg.drawRect(0, 0, config.sqSize, config.sqSize);
            bg.endFill();
            bg.alpha = 0.2;
            shapeBox.addChild(bg);
        }

        var diamond = new PIXI.Graphics();
        shapeBox.addChild(diamond);

        diamond.lineStyle(config.sqThick, color, 0.7, 0.005);
        diamond.alpha = 1;

        diamond.moveTo(ss / 2, 0);
        diamond.lineTo(ss, ss / 3);
        diamond.lineTo(ss - ss * 0.2, ss - ss * 0.05);
        diamond.lineTo(ss * 0.2, ss - ss * 0.05);
        diamond.lineTo(0, ss / 3);
        diamond.lineTo(ss / 2, 0);

        diamond.rotation = 0.785398;

        // diamond.pivot.x = config.sqSize / 2;
        // diamond.pivot.y = config.sqSize / 2;
        diamond.x = config.sqSize / 2;
        diamond.y = config.sqSize / 2;

        // const logo = new PIXI.Sprite(resources.penta.texture);
        // // logo.x = app.renderer.width / 2;
        // // logo.y = app.renderer.height / 2;
        // logo.x = config.sqSize / 2;
        // logo.y = config.sqSize / 2;        
        // logo.anchor.x = 0.5;
        // logo.anchor.y = 0.5;
        // logo.scale.x = .17;
        // logo.scale.y = .17;
        // shapeBox.addChild(logo);


        shapeBox.width = 1;
        shapeBox.height = 1;
        //shapeBox.anchor.set(0.5);
        shapeBox.pivot.x = config.sqSize / 2;
        shapeBox.pivot.y = config.sqSize / 2;
        return shapeBox;
    }

    function makeDiamonds() {
        var container = new PIXI.Sprite();

        // for (let a = 0; a <  app.renderer.height / (config.sqSize / 2); a++) {
        //     for (let i = 0; i < app.renderer.width / (config.sqSize / 2); i++) {
        //         const diamond = makeDiamond(colorArray[i%colorArray.length]);
        //         container.addChild(diamond);
        //         diamond.x = i * config.sqSize * .5;
        //         diamond.y = a * config.sqSize * .5;
        //         diamonds.push(diamond);
        //     }
        // }


        for (var a = 0; a < config.sqAcross; a++) {
            for (var i = 0; i < config.sqDown; i++) {
                var diamond = makeDiamond(colorArray[i % colorArray.length]);
                container.addChild(diamond);
                diamond.x = a * (app.renderer.width / config.sqAcross);
                diamond.y = i * (app.renderer.height / config.sqDown);
                diamonds.push(diamond);
            }
        }

        return container;
    }

    bigPattern = new PIXI.Sprite();
    var ggg;
    if (testShape) {
        ggg = makeDiamond(0x000000);
        ggg.x = 500;
        ggg.y = 200;
    } else {
        ggg = makeDiamonds();
    }

    bigPattern.addChild(ggg);
    bigPattern.x = config.sqSize / 4;
    bigPattern.y = config.sqSize / 4;
    // bigPattern.anchor.set(0.5, 0.5);
    app.stage.addChild(bigPattern);

    // const logo = new PIXI.Sprite(resources.logo.texture);
    // logo.x = app.renderer.width / 2;
    // logo.y = app.renderer.height / 2;
    // logo.anchor.x = 0.5;
    // logo.anchor.y = 0.5;
    // logo.scale.x = .5;
    // logo.scale.y = .5;
    // app.stage.addChild(logo);


    //let diamondsShuffled = shuffleArray(diamonds);
    var diamondsShuffled = diamonds;

    var rotateSpeed = void 0;

    setInterval(function () {
        //diamondsShuffled = shuffleArray(diamonds);
        diamondsShuffled = diamondsShuffled.reverse();
        //rotateSpeed = (Math.random() * (0.5 - 0.00500) + 0.00500);  
        //console.log(rotateSpeed);
    }, 3000);

    // Listen for frame updates
    app.ticker.add(function () {
        // each frame we spin the fun around a bit
        //bigPattern.rotation += 0.01;
        if (testShape) {
            ggg.rotation += 0.01 * (10 * 0.006);
        }

        for (var i = 0; i < diamonds.length; i++) {
            var element = diamondsShuffled[i];
            element.rotation += 0.01 * (i * 0.006);
        }
    });
});

function getWindowSize() {
    var wWidth = window.innerWidth;
    var wHeight = window.innerHeight;
    var data = {
        width: wWidth,
        height: wHeight
    };
    return data;
}

function sizeIt() {
    var size = getWindowSize();

    var w = size.width;
    var h = size.height;

    app.renderer.view.style.width = w + "px";
    app.renderer.view.style.height = h + "px";
    app.renderer.resize(w, h);

    // for (let d = 0; d < diamonds.length; d++) {

    // }
    var cnt = 0;
    for (var a = 0; a < config.sqAcross; a++) {
        for (var i = 0; i < config.sqDown; i++) {
            var element = diamonds[cnt];
            var x = a * (app.renderer.width / config.sqAcross);
            var y = i * (app.renderer.height / config.sqDown);
            var delay = cnt * .005;
            TweenMax.to(element, .1, { x: x, y: y, delay: delay });
            cnt++;
        }
    }
}

(0, _helpers.resizeInit)();

jQuery(window).smartresize(function () {
    sizeIt();
});