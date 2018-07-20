import {loader} from './loader.js';
import app from './app.js';


const initLogo = function(){
  const theLogo = new PIXI.Sprite();
  
  const logoImg = new PIXI.Sprite.fromImage('img/devgru-logo-reverse.png');
  logoImg.scale.x = .5;
  logoImg.scale.y = .5;
  theLogo.addChild(logoImg);
  const logoMask = new PIXI.Sprite.fromImage('img/dither.png');
  // logoMask.scale.x = .5;
  // logoMask.scale.y = .5;
  theLogo.addChild(logoMask);

  /*
  // logoMask.mask = logoImg;
  const logoMask = new PIXI.Sprite();
  theLogo.addChild(logoMask);

  for (let a = 0; a <  20; a++) {
    for (let i = 0; i < 20; i++) {
      const square = new PIXI.Sprite(PIXI.Texture.WHITE);
      // square.beginFill(0x000000);
      // square.drawRect((a * (600 / 20)), (i * (600 / 20)), (600 / 20), (600 / 20));
      // square.endFill();
      logoMask.addChild(square);
      square.width = (600 / 20);
      square.height = (600 / 20);
      square.x = (a * (600 / 20));
      square.y = (i * (600 / 20));
      square.tint = 0x000000; 
      square.interactive = true;
      square.buttonMode = true;
      square.on('mouseover', onMouseover);
      square.on('touchenter', onMouseover);
      square.anchor.x = 0.5;
      square.anchor.y = 0.5;      
      function onMouseover () {
        console.log(square.scale);
        TweenMax.to(square, .6, {rotation: 6.28319, delay: 0});
        TweenMax.to(square.scale, .3, {x: 2.3,y : 2.7, onComplete: function(){
            TweenMax.to(square.scale, .1, {x: 3,y : 3, delay: .2});

        }});
    }            
    }
  }   
  */
  logoMask.mask = logoImg;
  return theLogo;
}




export default initLogo;