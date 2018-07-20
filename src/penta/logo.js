import {loader} from './loader.js';
import app from './app.js';


const initLogo = function(){
  const theLogo = new PIXI.Container();
  theLogo.width = app.renderer.width;
  theLogo.height = app.renderer.height;

  const logoBg = new PIXI.Sprite();
  logoBg.width = app.renderer.width;
  logoBg.height = app.renderer.height;
  theLogo.addChild(logoBg);


  const logoImg = new PIXI.Sprite.fromImage('img/devgru-longtype.png');
  logoImg.scale.x = 0.8;
  logoImg.scale.y = 0.8;
  logoImg.rotation = -0.03;
  // logoImg.anchor.set(0.5);
  // logoImg.x = app.renderer.width / 2;
  // logoImg.y = app.renderer.height / 2;
  logoImg.x = 200;
  logoImg.y = 500;
  theLogo.addChild(logoImg);



  var displacementSprite = PIXI.Sprite.fromImage('img/gradient1.png');
  //displacementSprite.scale.set(0.2);
  var displacementFilter = new PIXI.filters.DisplacementFilter(displacementSprite);
  
  theLogo.addChild(displacementSprite);
  
  theLogo.filters = [displacementFilter];
  
  displacementFilter.scale.x = 500;
  displacementFilter.scale.y = 500;
  displacementSprite.anchor.set(0.5);
  
  logoImg.interactive = true;
  
  logoImg
      .on('mousemove', onPointerMove)
      .on('touchmove', onPointerMove);
  
  function onPointerMove(eventData) {
      displacementSprite.position.set(eventData.data.global.x - 25, eventData.data.global.y);
  }
    







  return theLogo;
}




export default initLogo;