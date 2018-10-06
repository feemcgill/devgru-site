//import {loader} from './loader.js';
import app from './app.js';
import {debounce, getWindowSize, map} from './../helpers.js';

const initIcons = function(){
  const theIcon = new PIXI.Sprite();

  const box = new PIXI.Graphics();
  theIcon.addChild(box);
  box.beginFill(0xf00f00);
  box.drawRect(0,0,255,255);
  
  const iconImg = new PIXI.Sprite.fromImage('img/icon-sprite-white.png');
  theIcon.addChild(iconImg);
  iconImg.tint = 0xff0000;
  // iconImg.scale.x = 0.5;
  // iconImg.scale.y = 0.5;

  theIcon.interactive = true;
  // theIcon
  //   .on('mousemove', onPointerMove)
  //   .on('touchmove', onPointerMove)

  let frame = 0;

  function advanceFrame() {
    iconImg.x = -250 * frame;
    frame = (frame + 1) % 8;
  }

  setInterval(advanceFrame, 300);

  theIcon.mask = box;
  // advance or reset loop counter

  function onPointerMove(eventData) {
    var mx = eventData.data.global.x;
    var my = eventData.data.global.y;

    var moverX = map(mx, 0, app.renderer.width, 56, -56);
    var moverY = map(my, 0, app.renderer.height, 56, -56);

      
    TweenMax.to(iconImg, 2, {
      x:(theIcon.width / 2) + moverX,
      y:(theIcon.height / 2) + moverY,	
    })
    
} 

  // RESIZE
  function reSizeIt() {
    // Get new size
    const size = getWindowSize();
    const w = size.width;

  }


  window.addEventListener("resize",debounce(function(e){
    reSizeIt();
  }));  
    
  return theIcon;
}




export default initIcons;