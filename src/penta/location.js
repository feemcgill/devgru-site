//import {loader} from './loader.js';
import app from './app.js';
import {debounce, getWindowSize} from './../helpers.js';


const theLocation = function(){
  const locationContainer = new PIXI.Sprite();



  const locationSprite = new PIXI.Sprite.fromImage('img/los-angeles.png');
  locationSprite.tint = 0x000000;
  locationSprite.scale.x = 0.4;
  locationSprite.scale.y = 0.4;
  locationSprite.rotation = 0.06;


  // locationSprite.x = 700;
  // //locationSprite.y = app.renderer.height - 300;
  // locationSprite.y = 100;
  locationContainer.addChild(locationSprite);




  // RESIZE
  function reSizeIt() {
    const size = getWindowSize();
    const w = size.width;

  }


  window.addEventListener("resize",debounce(function(e){
    reSizeIt();
  }));  
    
  return locationContainer;
}




export default theLocation;