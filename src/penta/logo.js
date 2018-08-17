//import {loader} from './loader.js';
import app from './app.js';
import {debounce, getWindowSize} from './../helpers.js';


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