import config from './config.js';
import app from './app.js';

const colorArray = [
  config.colors.red,
  config.colors.green,
  config.colors.blue,
  config.colors.yellow,
  config.colors.green,
  config.colors.red,
  config.colors.yellow,
  config.colors.blue        
]

const makePentagon = function(color) {
  const ss = config.sqSize;
  const shapeBox = new PIXI.Sprite(); 


  shapeBox.interactive = true;
  shapeBox.buttonMode = true;
  shapeBox.on('mouseover', onMouseover);
  shapeBox.on('touchenter', onMouseover);
  
  shapeBox.hitArea = new PIXI.Rectangle(0, 0, config.sqSize, config.sqSize);


  function onMouseover () {
      TweenMax.to(shapeBox.scale, .3, {x: 0.62,y : 0.62, onComplete: function(){
          TweenMax.to(shapeBox.scale, .5, {x: 1,y : 1, delay: 1.3});
      }});
  }
  if (config.testShape) {
      const bg = new PIXI.Graphics();
      bg.beginFill(0x9cffd0, 1);
      bg.drawRect(0, 0, config.sqSize, config.sqSize);        
      bg.endFill();
      bg.alpha = 0.2;
      shapeBox.addChild(bg);
  }

  const diamond = new PIXI.Graphics();
  shapeBox.addChild(diamond);

  diamond.lineStyle(config.sqThick, color, 0.7, 0.005);
  diamond.alpha = 1;

  diamond.moveTo(ss/2, 0);
  diamond.lineTo(ss, ss/3);
  diamond.lineTo(ss - (ss * 0.2) , ss - (ss * 0.05));
  diamond.lineTo((ss * 0.2) , ss - (ss * 0.05));
  diamond.lineTo(0, ss/3);
  diamond.lineTo(ss/2, 0);

  diamond.rotation = 0.785398;


  // diamond.pivot.x = config.sqSize / 2;
  // diamond.pivot.y = config.sqSize / 2;
  diamond.x = config.sqSize / 2;
  diamond.y = config.sqSize / 2;

  // const logo = new PIXI.Sprite(resources.penta.texture);
  // // logo.x = app.renderer.width / 2;
  // // logo.y = app.renderer.height / 2;
  // logo.x = config.sqSize / 2;
  // logo.y = config.sqSize / 2;        
  // logo.anchor.x = 0.5;
  // logo.anchor.y = 0.5;
  // logo.scale.x = .17;
  // logo.scale.y = .17;
  // shapeBox.addChild(logo);



  shapeBox.width = 1;
  shapeBox.height = 1;
  //shapeBox.anchor.set(0.5);
  shapeBox.pivot.x = config.sqSize / 2;
  shapeBox.pivot.y = config.sqSize / 2;        
  return shapeBox;              
}





const makePentagons = function(){
  let container = new PIXI.Sprite(); 
  
  // for (let a = 0; a <  app.renderer.height / (config.sqSize / 2); a++) {
  //     for (let i = 0; i < app.renderer.width / (config.sqSize / 2); i++) {
  //         const diamond = makePentagon(colorArray[i%colorArray.length]);
  //         container.addChild(diamond);
  //         diamond.x = i * config.sqSize * .5;
  //         diamond.y = a * config.sqSize * .5;
  //         diamonds.push(diamond);
  //     }
  // }


  for (let a = 0; a <  config.sqAcross; a++) {
      for (let i = 0; i < config.sqDown; i++) {
          const diamond = makePentagon(colorArray[i%colorArray.length]);
          container.addChild(diamond);
          diamond.x = a * (app.renderer.width / config.sqAcross);
          diamond.y = i * (app.renderer.height / config.sqDown);
      }
  }        

  return container;
}

export {makePentagon, makePentagons};