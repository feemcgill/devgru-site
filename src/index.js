
import {shuffleArray, resizeInit, getWindowSize} from './helpers.js';
import {makePentagon, makePentagons} from './penta/make-pentagons.js';
import config from './penta/config.js';
import app from './penta/app.js';
import initLogo from './penta/logo.js';



document.body.appendChild(app.view);


let diamonds;
let bigPattern; 
bigPattern = new PIXI.Sprite();

var pentagonJam;
if (config.testShape) {
  pentagonJam = makePentagon(0x000000);
  pentagonJam.x = 500;
  pentagonJam.y = 200;
} else {
  pentagonJam = makePentagons();
}


bigPattern.addChild(pentagonJam);
bigPattern.x = config.sqSize / 4;
bigPattern.y = config.sqSize / 4;
app.stage.addChild(bigPattern);

const logo = initLogo();
app.stage.addChild(logo);

diamonds = pentagonJam.children;
let diamondsShuffled = diamonds;
    
setInterval(function(){
  diamondsShuffled = diamondsShuffled.reverse();
}, 3000);

app.ticker.add(() => {
  if (config.testShape) {
      pentagonJam.rotation += 0.01 * (10 * 0.006);
  }
  for (let i = 0; i < diamonds.length; i++) {
      const element = diamondsShuffled[i];
      element.rotation += 0.01 * (i * 0.006);
      
  }
});


function sizeIt() {
	const size = getWindowSize();
	
	const w = size.width;
	const h = size.height;

	app.renderer.view.style.width = w + "px";    
	app.renderer.view.style.height = h + "px";      
	app.renderer.resize(w,h);

    // for (let d = 0; d < diamonds.length; d++) {
        
    // }
        var cnt = 0;
        for (let a = 0; a <  config.sqAcross; a++) {
            for (let i = 0; i < config.sqDown; i++) {
                var element = diamonds[cnt];
                var x = a * (app.renderer.width / config.sqAcross);
                var y = i * (app.renderer.height / config.sqDown);
                var delay = ( cnt * .005);
                TweenMax.to(element, .1, {x: x, y: y, delay: delay})
                cnt ++;
            }
        }          
  

}

   resizeInit();

  jQuery(window).smartresize(function(){  
      sizeIt();
  }); 