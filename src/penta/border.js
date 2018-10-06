import app from './app.js';
import config from './config.js';
import {debounce, getWindowSize} from './../helpers.js';


const initBorder = function(){
  let bt = 30; // border thickness
  const border = {};
  border.border = new PIXI.Sprite();
  border.mask = new PIXI.Graphics();

  if (config.initialSize.width < config.breaks.mobile) {
    bt = 15;
  }



  // RESIZE
  function makeBorder() {
    // Get window size
    const ss = getWindowSize();

    const bdr = new PIXI.Graphics();
    bdr.beginFill(0xff0000);
    bdr.drawRect(0,0,ss.width, bt); // top
    bdr.drawRect(ss.width - bt, 0 , bt, ss.height); // right
    bdr.drawRect(0, ss.height - bt, ss.width, bt); // bottom
    bdr.drawRect(0,0, bt, ss.height); // left
  
    bdr.endFill();
    border.border.addChild(bdr);

    // border.mask
    border.mask.beginFill(0xFF0000);

    border.mask.drawRect(bt,bt, ss.width - (bt*2), ss.height - (bt*2));

  }

  makeBorder();


  window.addEventListener("resize",debounce(function(e){
    if (border.border.children) {
      border.border.removeChildren();
    }
    if (border.mask.children) {
      border.mask.removeChildren();
    }    
    makeBorder();
  }));  

  return border;

};

export default initBorder;