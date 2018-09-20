
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

const bigPattern = new PIXI.Sprite();
app.stage.addChild(bigPattern);

const foreground = new PIXI.Container();
app.stage.addChild(foreground);

const pentagonJam = makePentagons();
bigPattern.addChild(pentagonJam);



const logo = initLogo();
foreground.addChild(logo);

const location = theLocation();
foreground.addChild(location);

const icons = theIcons();
foreground.addChild(icons);

const tagSprite = new PIXI.Sprite.fromImage('img/creative-tech.png');
//const tagger = theTag();
//foreground.addChild(tagSprite);


const halftone = initHalftone();
foreground.addChild(halftone);
halftone.interactive = true;

const halfMask = new PIXI.Graphics();

function sizePositionLayout(size){
  halfMask.clear();
  halfMask.beginFill(0xF00F00);
  bigPattern.x = -config.sqSize / 4;
  bigPattern.y = -config.sqSize / 4;
  if (size.width > config.breaks.mobile) {
    logo.scale.set(1);
    logo.y = 100;
    logo.x = 100;
    location.scale.set(1);
    location.x = app.renderer.width / 2;
    location.y = app.renderer.height - (app.renderer.height / 1.7);
    icons.scale.set(1);
    icons.x = app.renderer.width - 300;
    icons.y = app.renderer.height - 300;
    halfMask.drawRect(200,app.renderer.height - 240 ,200,100);
  } else {
    logo.scale.set(0.3);
    logo.y = 70;
    logo.x = 50;
    location.scale.set(0.5);
    location.x = 50;
    location.y = 190;
    icons.scale.set(0.5);
    icons.x = 10;
    icons.y = app.renderer.height - 150;
    if (size.height < 450) {
      halfMask.drawRect(app.renderer.width - 250, 50 ,200,100);
    } else {
      halfMask.drawRect(app.renderer.width - 190 ,300, 150, 70);
    }
  }
  halftone.mask = halfMask;
}

sizePositionLayout(config.initialSize);

const border = initBorder();
app.stage.addChild(border);

// displace
let pcTex = PIXI.Texture.fromImage('img/pc/pc1.jpg');
const pcSprite = new PIXI.Sprite(pcTex);
pcSprite.width = app.renderer.width;
pcSprite.height = app.renderer.height;
pcSprite.blendMode = PIXI.BLEND_MODES.ADD;
app.stage.addChild(pcSprite);



let displaceTex = PIXI.Texture.fromImage('img/disp/7.png');

displacement({
  texture: displaceTex,
  displacedElement: foreground,
  container: app.stage
});




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