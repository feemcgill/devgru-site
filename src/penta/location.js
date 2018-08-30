//import {loader} from './loader.js';
import app from './app.js';
import {debounce, getWindowSize, map} from './../helpers.js';


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


  locationContainer.interactive = true;
  locationContainer
    .on('mousemove', onPointerMove)
    .on('touchmove', onPointerMove)




  function onPointerMove(eventData) {
    var mx = eventData.data.global.x;
    var my = eventData.data.global.y;

    var moverX = map(mx, 0, app.renderer.width, -20, 20);
    var moverY = map(my, 0, app.renderer.height, -20, 20);
    
    
    TweenMax.to(locationSprite, 2, {
      x:(locationContainer.width / 2) + moverX,
      y:(locationContainer.height / 2) + moverY,	
    })
    
} 

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