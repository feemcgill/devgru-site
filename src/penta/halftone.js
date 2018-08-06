import app from './app.js';
import {getWindowSize} from './../helpers.js';


const initHalftone = function(){
  const halfTone = new PIXI.Container();
  const htSize = 10;

  const halfToneSprite = new PIXI.Sprite();
  const dot = new PIXI.Graphics();
  dot.beginFill(0x000000);
  dot.drawCircle(0,0,((htSize/2) * 0.99));
  dot.endFill();

  const tex = app.renderer.generateTexture(dot);






  const createHalftones = function() {
    const ss = getWindowSize();
    for (let i_x = 0; i_x < (ss.width / htSize); i_x++) {
      for (let i_y = 0; i_y < (ss.height / htSize); i_y++) {

        const sprite = new PIXI.Sprite(tex);
        // sprite.height = htSize;
        // sprite.width = htSize;
        sprite.x = htSize * i_x;
        sprite.y = htSize * i_y;
        sprite.alpha = 1.2;
        
        sprite.anchor.set(0.5);

        sprite.interactive = true;
        sprite.on('mouseover', onMouseover);
        sprite.on('touchenter', onMouseover);

        function onMouseover () {
          // TweenMax.to(shapeBox.scale, .3, {x: 1.32,y : 1.32, onComplete: function(){
          //     TweenMax.to(shapeBox.scale, .5, {x: 1,y : 1, delay: 1.3});
          // }});
          const newScale = sprite.scale.x * 0.9;
          sprite.scale.set(newScale);
        }

        halfToneSprite.addChild(sprite);
      }    
    }
  }
  createHalftones();




  
  halfTone.addChild(halfToneSprite);







  return halfTone;
};

export default initHalftone;