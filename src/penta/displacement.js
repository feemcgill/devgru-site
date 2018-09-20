import globalConfig from './config.js';


export default (config) => {


  let displacementSprite = new PIXI.Sprite(config.texture);
  let displacementSpriteLook = new PIXI.Sprite(config.texture);
  //config.container.addChild(displacementSpriteLook);
  
  displacementSprite.scale.set(2);
  var displacementFilter = new PIXI.filters.DisplacementFilter(displacementSprite);
  
  config.container.addChild(displacementSprite);
  
  config.displacedElement.filters = [displacementFilter];
  
  displacementFilter.scale.x = 50;
  displacementFilter.scale.y = 50;
  displacementSprite.anchor.set(0.5);
  
  displacementSpriteLook.anchor.set(0.5);
  displacementSpriteLook.alpha = 0.4;

  if (globalConfig.initialSize.width < globalConfig.breaks.mobile) {
    //displacementSprite.scale.set(1);
  }
  config.container.interactive = true;
  config.container
      .on('mousemove', onPointerMove)
      .on('touchmove', onPointerMove);
  
  function onPointerMove(eventData) {
      displacementSprite.position.set(eventData.data.global.x , eventData.data.global.y);
      displacementSpriteLook.position.set(eventData.data.global.x , eventData.data.global.y);
  }  



}



