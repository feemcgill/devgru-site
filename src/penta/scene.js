
import {shuffleArray, resizeInit, getWindowSize, debounce} from './../helpers.js';
import {makePentagon, makePentagons} from './make-pentagons.js';
import initBorder from './border.js';
import config from './config.js';
import app from './app.js';
import initLogo from './logo.js';
import initHalftone from './halftone.js';
import displacement from './displacement.js';
import theTag from './tagline.js';
import theLocation from './location.js';
import theIcons from './icons.js';
import makeQuads from './quads.js';
import theGame from './game.js';
import Bfilter from './filt.js';

const bigPattern = new PIXI.Sprite();
bigPattern.alpha = 0.2;
//app.stage.addChild(bigPattern);

const foreground = new PIXI.Container();
app.stage.addChild(foreground);

const pentagonJam = makePentagons();
bigPattern.addChild(pentagonJam);

const logo = initLogo();
foreground.addChild(logo);
logo.mobileScale = 0.3;

const location = theLocation();
foreground.addChild(location);
location.mobileScale = 0.5;

const icons = theIcons();
foreground.addChild(icons);
icons.mobileScale = 0.5;

const halftone = initHalftone();
foreground.addChild(halftone);
halftone.interactive = true;
const halfMask = new PIXI.Graphics();



// var theFilter = new Bfilter();

// app.stage.filters = [theFilter];


// Border
const border = initBorder();
app.stage.addChild(border.border);

let displaceTex = PIXI.Texture.fromImage('img/disp/14.png');
displacement({
  texture: displaceTex,
  displacedElement: foreground,
  container: app.stage
});

const button_know = document.getElementById("button_know");


const foregroundItems = [
  logo, location, icons
];

// set initial scale
foregroundItems.forEach(el => {
  TweenMax.to(el.scale,0.001,{x:0, y:10});
});

// POSITION
function sizePositionLayout(size){
  let isMobile = false;
  console.log(isMobile);

  halfMask.clear();
  halfMask.beginFill(0xF00F00);

  bigPattern.x = -config.sqSize / 4;
  bigPattern.y = -config.sqSize / 4;
  if (size.width > config.breaks.mobile) {
    isMobile = false;
    logo.y = 100;
    logo.x = 100;
    location.x = app.renderer.width / 2;
    location.y = app.renderer.height - (app.renderer.height / 1.7);
    icons.x = app.renderer.width - 300;
    icons.y = app.renderer.height - 300;
    halfMask.drawRect(200,app.renderer.height - 240 ,200,100);
    //button_know.style.top = app.renderer.height - 240 + 'px';
    TweenMax.to(button_know,0.5, {x: 240, y: app.renderer.height - 200});
  } else {
    isMobile = true; 
    logo.y = 70;
    logo.x = 50;
    location.y = 190;
    icons.x = 10;
    icons.y = app.renderer.height - 150;
    if (size.height < 450) {
      halfMask.drawRect(app.renderer.width - 250, 50 ,200,100);
      TweenMax.to(button_know,0.5, {x: app.renderer.width - 170, y: 70});
      location.x = 150;


    } else {
      halfMask.drawRect(50 ,300, 150, 70);
      TweenMax.to(button_know,0.5, {x: 70, y: 300});
      location.x = 50;


    }
  }
  console.log(isMobile);
  let i = 0;
  foregroundItems.forEach(el => {
    let scaleQ = 1;
    if (isMobile) {
      scaleQ = el.mobileScale;
    }
    setTimeout(() => {
      TweenMax.to(el.scale, .5,{x:scaleQ, y:scaleQ,
        ease: Back.easeOut.config(1.7),
        onComplete: function(){
        }
      });
    },100 * i)
    i++;
  });  
  halftone.mask = halfMask;
}

sizePositionLayout(config.initialSize);





// TICKER
app.ticker.add(() => {
});



// RESIZE
function reSizeIt() {
  // Get new size
	const size = getWindowSize();
	const w = size.width;
	const h = size.height;

  // Scale renderer
	app.renderer.view.style.width = w + "px";    
	app.renderer.view.style.height = h + "px";      
  app.renderer.resize(w,h);
  sizePositionLayout(size);
}


window.addEventListener("resize",debounce(function(e){
  reSizeIt();
}));