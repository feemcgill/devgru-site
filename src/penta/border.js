import app from './app.js';
import config from './config.js';
import {debounce, getWindowSize} from './../helpers.js';


const initBorder = function(){
  let bt = 30; // border thickness
  const border = new PIXI.Sprite();

  if (config.initialSize.width < config.breaks.mobile) {
    bt = 15;
  }



  // RESIZE
  function makeBorder() {
    // Get window size
    const ss = getWindowSize();

    const bdr = new PIXI.Graphics();
    bdr.beginFill(0x000000);
    bdr.drawRect(0,0,ss.width, bt); // top
    bdr.drawRect(ss.width - bt, 0 , bt, ss.height); // right
    bdr.drawRect(0, ss.height - bt, ss.width, bt); // bottom
    bdr.drawRect(0,0, bt, ss.height); // left
  
    bdr.endFill();
    border.addChild(bdr);

  }

  makeBorder();

  window.addEventListener("resize",debounce(function(e){
    if (border.children) {
      border.removeChildren();
    }
    makeBorder();
  }));  

  return border;

};

export default initBorder;