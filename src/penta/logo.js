//import {loader} from './loader.js';
import app from './app.js';
import {debounce, getWindowSize, map} from './../helpers.js';


const initLogo = function(){
  const theLogo = new PIXI.Sprite();
  // theLogo.width = app.renderer.width;
  // theLogo.height = app.renderer.height;

  const logoBg = new PIXI.Sprite();
  logoBg.width = app.renderer.width;
  logoBg.height = app.renderer.height;
  theLogo.addChild(logoBg);

  const logoImg = new PIXI.Sprite.fromImage('img/devgru-logo-type-g-stack.png');
  logoImg.tint = 0x000000;
  logoImg.scale.x = 0.5;
  logoImg.scale.y = 0.5;
  logoImg.rotation = -0.03;
  // logoImg.anchor.set(0.5);
  // logoImg.x = app.renderer.width / 2;
  // logoImg.y = app.renderer.height / 2;
 // logoImg.x = 200;
  //logoImg.y = app.renderer.height - (app.renderer.height / 1.5);
  theLogo.addChild(logoImg);
  theLogo.interactive = true;
  theLogo
    .on('mousemove', onPointerMove)
    .on('touchmove', onPointerMove)




  function onPointerMove(eventData) {
    var mx = eventData.data.global.x;
    var my = eventData.data.global.y;

    var moverX = map(mx, 0, app.renderer.width, 56, -56);
    var moverY = map(my, 0, app.renderer.height, 56, -56);

      
    TweenMax.to(logoImg, 2, {
      x:(theLogo.width / 2) + moverX,
      y:(theLogo.height / 2) + moverY,	
    })
    
} 

  // RESIZE
  function reSizeIt() {
    // Get new size
    const size = getWindowSize();
    const w = size.width;
    //const h = size.height;

    // Scale renderer
    //theLogo.width = w;    
    //theLogo.height = h;
    //TweenMax.to(logoImg, 0.5, {y: h - (h / 1.5)});
  }


  window.addEventListener("resize",debounce(function(e){
    reSizeIt();
  }));  
    
  return theLogo;
}




export default initLogo;