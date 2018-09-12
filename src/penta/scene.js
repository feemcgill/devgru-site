
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
bigPattern.x = -config.sqSize / 4;
bigPattern.y = -config.sqSize / 4;
app.stage.addChild(bigPattern);

const foreground = new PIXI.Container();
app.stage.addChild(foreground);

// const quads = makeQuads();
// for (let i = 0; i < quads.length; i++) {
//   quads[i].alpha = 0;
//   app.stage.addChild(quads[i]);
// }

const pentagonJam = makePentagons();
bigPattern.addChild(pentagonJam);

const logo = initLogo();
foreground.addChild(logo);
// logo.mask = quads[0];


// const tagline = theTag();
// foreground.addChild(tagline);
// tagline.mask = quads[1];

const location = theLocation();
foreground.addChild(location);

// location.mask = quads[2];
const halftone = initHalftone();
foreground.addChild(halftone);

const halfMask = new PIXI.Graphics();
halfMask.beginFill(0xF00F00);
halfMask.drawRect(200,app.renderer.height - 240 ,200,100);
halftone.mask = halfMask;

const icons = theIcons();
foreground.addChild(icons);

function positionLayout(){
  logo.y = 100;
  logo.x = 100;
  location.x = app.renderer.width / 2;
  location.y = app.renderer.width / 4;
  icons.x = app.renderer.width - 300;
  icons.y = app.renderer.height - 300;
}

positionLayout();


// const game = theGame();
// app.stage.addChild(game);




const border = initBorder();
app.stage.addChild(border);


// let pentagons = pentagonJam.children;
// let pentagonsShuffled = pentagons;



// displace
let displaceTex = PIXI.Texture.fromImage('img/disp/9.png');
let displaceTex2 = PIXI.Texture.fromImage('img/disp/1.png');
let displaceTex3 = PIXI.Texture.fromImage('img/disp/5.png');

// displacement({
//   texture: displaceTex2,
//   displacedElement: bigPattern,
//   container: app.stage
// });


displacement({
  texture: displaceTex,
  displacedElement: foreground,
  container: app.stage
});




// TICKER
app.ticker.add(() => {

  //console.log(logo.x);
  // if (logo.x > 0) {
  //   logo.x = 100;
  // } else {
  //   logo.x -= 1;
  // }


  // if (location.y > (app.renderer.height / 2)) {
  //   location.y = -1000;
  // } else {
  //   location.y += 1;
  // }

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

  // Move pentagons
  // var cnt = 0;
  // for (let a = 0; a <  config.sqAcross; a++) {
  //   for (let i = 0; i < config.sqDown; i++) {
  //       var element = pentagons[cnt];
  //       var x = a * ((app.renderer.width + config.sqSize) / config.sqAcross);
  //       var y = i * ((app.renderer.height + config.sqSize) / config.sqDown);
  //       var delay = ( cnt * .005);
  //       TweenMax.to(element, .1, {x: x, y: y, delay: delay})
  //       cnt ++;
  //   }
  // }
}


window.addEventListener("resize",debounce(function(e){
  reSizeIt();
}));