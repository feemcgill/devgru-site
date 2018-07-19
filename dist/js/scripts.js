'use strict';

function shuffle(array) {
    var currentIndex = array.length,
        temporaryValue,
        randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

// The application will create a renderer using WebGL, if possible,
// with a fallback to a canvas render. It will also setup the ticker
// and the root stage PIXI.Container
var app = new PIXI.Application({
    width: window.innerWidth,
    height: window.innerHeight,
    backgroundColor: 0xFFFFFF,
    forceCanvas: true
});

// The application will create a canvas element for you that you
// can then insert into the DOM
document.body.appendChild(app.view);

var testShape = false;
var diamonds = [];
var bigPattern = void 0;

var config = {
    sqSize: 200,
    sqAcross: 20,
    sqDown: 10,
    colors: {
        red: 0xB33450,
        green: 0x427D3B,
        blue: 0x2F3A75,
        yellow: 0xD8B72D
    }
};

// load the texture we need
PIXI.loader.add('fun', 'img/fun.png').load(function (loader, resources) {
    // This creates a texture from a 'fun.png' image


    var colorArray = [config.colors.red, config.colors.green, config.colors.blue, config.colors.yellow, config.colors.green, config.colors.red, config.colors.yellow, config.colors.blue];

    // const bigRect = new PIXI.Graphics();
    // bigRect.beginFill(0xfaaFaF, 1);
    // bigRect.drawRect(0, 0, window.innerWidth, window.innerHeight);
    // bigRect.endFill();
    // bigRect.aplha = .4;
    // bigRect.interactive = true;
    // //app.stage.addChild(bigRect);

    // bigRect.on('mousemove', function (event) {
    //     const e = event;
    //     //_.throttle(function(){
    //     // console.log('throttle');
    //     //TweenMax.to(bigPattern, 1, { x: e.data.global.x, y: e.data.global.y });
    //     //}, 100);
    // });


    // const vidTex = new PIXI.Texture.fromVideo('vid/duckisland.mp4');
    // var videoSprite = new PIXI.Sprite(vidTex);
    // console.log(vidTex);
    // vidTex.baseTexture.source.loop = true;
    // vidTex.baseTexture.source.muted = true;
    // vidTex.baseTexture.source.playbackRate = 16;
    // // Stetch the fullscreen
    // videoSprite.width = app.screen.width;
    // videoSprite.height = app.screen.height;

    //app.stage.addChild(videoSprite);

    function makeDiamond(color) {
        var ss = config.sqSize;
        var shapeBox = new PIXI.Sprite();

        shapeBox.interactive = true;
        shapeBox.buttonMode = true;
        shapeBox.on('mouseover', onMouseover);
        shapeBox.hitArea = new PIXI.Rectangle(0, 0, config.sqSize, config.sqSize);

        function onMouseover() {
            // diamond.scale.x *= .32;
            // diamond.scale.y *= .32;
            TweenMax.to(diamond.scale, .3, { x: 0.62, y: 0.62, onComplete: function onComplete() {
                    TweenMax.to(diamond.scale, .5, { x: 1, y: 1, delay: 1.3 });
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

        diamond.lineStyle(2, color, 0.7, 0.005);
        //diamond.drawRect(0, 0, config.sqSize, config.sqSize);
        diamond.alpha = 1;

        diamond.moveTo(ss / 2, 0);
        diamond.lineTo(ss, ss / 3);
        diamond.lineTo(ss - ss * 0.2, ss - ss * 0.05);
        diamond.lineTo(ss * 0.2, ss - ss * 0.05);
        diamond.lineTo(0, ss / 3);
        diamond.lineTo(ss / 2, 0);

        //diamond.rotation = 0.785398;
        diamond.pivot.x = config.sqSize / 2;
        diamond.pivot.y = config.sqSize / 2;
        diamond.x = config.sqSize / 2;
        diamond.y = config.sqSize / 2;
        shapeBox.width = 1;
        shapeBox.height = 1;
        //shapeBox.anchor.set(0.5);
        shapeBox.pivot.x = config.sqSize / 2;
        shapeBox.pivot.y = config.sqSize / 2;
        return shapeBox;
    }

    function makeDiamonds() {
        var container = new PIXI.Sprite();
        // container.width = 5000;
        // container.height = 200;
        // const bg = new PIXI.Graphics();
        // bg.beginFill(0x000000, 1);
        // bg.drawRect(0, 0, 500, 442);
        // bg.endFill();

        // container.addChild(bg);

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
        //app.stage.addChild(container);

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

    // Add the fun to the scene we are building

    //let diamondsShuffled = shuffle(diamonds);
    var diamondsShuffled = diamonds;

    var rotateSpeed = void 0;

    setInterval(function () {
        //diamondsShuffled = shuffle(diamonds);
        //diamondsShuffled = diamondsShuffled.reverse();
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

jQuery(window).smartresize(function () {
    sizeIt();
});