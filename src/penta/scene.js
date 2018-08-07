
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

const bigPattern = new PIXI.Sprite();
bigPattern.x = -config.sqSize / 4;
bigPattern.y = -config.sqSize / 4;
app.stage.addChild(bigPattern);

const pentagonJam = makePentagons();
bigPattern.addChild(pentagonJam);

const logo = initLogo();
app.stage.addChild(logo);

const border = initBorder();
app.stage.addChild(border);


const tagline = theTag();
app.stage.addChild(tagline);

const location = theLocation();
app.stage.addChild(location);


// const halftone = initHalftone();
// app.stage.addChild(halftone);


let pentagons = pentagonJam.children;
let pentagonsShuffled = pentagons;


// displace
let displaceTex = PIXI.Texture.fromImage('img/disp/10.png');
let displaceTex2 = PIXI.Texture.fromImage('img/disp/1.png');
let displaceTex3 = PIXI.Texture.fromImage('img/disp/5.png');


displacement({
  texture: displaceTex,
  displacedElement: logo,
  container: app.stage
});

displacement({
  texture: displaceTex2,
  displacedElement: tagline,
  container: app.stage
});


displacement({
  texture: displaceTex2,
  displacedElement: location,
  container: app.stage
});


// TICKER
app.ticker.add(() => {

  //console.log(logo.x);
  if (logo.x > app.renderer.width) {
    logo.x = -1000;
  } else {
    logo.x += 1;
  }


  if (location.y > app.renderer.height) {
    location.y = -1000;
  } else {
    location.y += 1;
  }


  for (let i = 0; i < pentagons.length; i++) {
      const element = pentagonsShuffled[i];
      element.rotation += 0.01 * (i * 0.006);
  }
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
  var cnt = 0;
  for (let a = 0; a <  config.sqAcross; a++) {
    for (let i = 0; i < config.sqDown; i++) {
        var element = pentagons[cnt];
        var x = a * ((app.renderer.width + config.sqSize) / config.sqAcross);
        var y = i * ((app.renderer.height + config.sqSize) / config.sqDown);
        var delay = ( cnt * .005);
        TweenMax.to(element, .1, {x: x, y: y, delay: delay})
        cnt ++;
    }
  }
}


window.addEventListener("resize",debounce(function(e){
  reSizeIt();
}));