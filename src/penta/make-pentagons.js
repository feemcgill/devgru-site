import config from './config.js';
import app from './app.js';
import {getWindowSize, debounce} from './../helpers.js';

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
  shapeBox.on('mouseover', onMouseover);
  shapeBox.on('touchenter', onMouseover);
  
  shapeBox.hitArea = new PIXI.Rectangle(0, 0, config.sqSize, config.sqSize);


  function onMouseover () {
      TweenMax.to(shapeBox.scale, .3, {x: 1.32,y : 1.32, onComplete: function(){
          TweenMax.to(shapeBox.scale, .5, {x: 1,y : 1, delay: 1.3});
      }});
  }
  if (config.testShape) {
      const bg = new PIXI.Graphics();
      bg.beginFill(0x9cffd0, 1);
      bg.drawRect(0, 0, config.sqSize, config.sqSize);        
      bg.endFill();
      bg.alpha = 0.1;
      shapeBox.addChild(bg);
  }

  const diamond = new PIXI.Graphics();
  shapeBox.addChild(diamond);

  diamond.lineStyle(config.sqThick, 0x000000, 1, 0);
  diamond.alpha = 1;
  //diamond.beginFill(0xffffff);
  diamond.moveTo(ss/2, 0);
  diamond.lineTo(ss, ss/3);
  diamond.lineTo(ss - (ss * 0.2) , ss - (ss * 0.05));
  diamond.lineTo((ss * 0.2) , ss - (ss * 0.05));
  diamond.lineTo(0, ss/3);
  diamond.lineTo(ss/2, 0);
  //diamond.endFill();
  diamond.alpha = 1;
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

  for (let a = 0; a <  config.sqAcross; a++) {
      for (let i = 0; i < config.sqDown; i++) {
          const diamond = makePentagon(colorArray[i%colorArray.length]);
          container.addChild(diamond);
          diamond.x = a * ((app.renderer.width + config.sqSize) / config.sqAcross);
          diamond.y = i * ((app.renderer.height + config.sqSize) / config.sqDown);
      }
  }
  
    const pentagons = container.children;

    app.ticker.add(() => {
        for (let i = 0; i < pentagons.length; i++) {
            const element = pentagons[i];
            element.rotation += 0.01 * (i * 0.006);
        }
    }); 
     
    // RESIZE
    function reSizeIt() {
        // Get new size
        const size = getWindowSize();

    
        // Move pentagons
        var cnt = 0;
        for (let a = 0; a <  config.sqAcross; a++) {
        for (let i = 0; i < config.sqDown; i++) {
            var element = pentagons[cnt];
            var x = a * ((app.renderer.width + config.sqSize) / config.sqAcross);
            var y = i * ((app.renderer.height + config.sqSize) / config.sqDown);
            var delay = ( cnt * .005);
            TweenMax.to(element, .1, {x: x, y: y, delay: delay})
            cnt ++;
        }
        }
    }
    
    
    window.addEventListener("resize",debounce(function(e){
        reSizeIt();
    }));
    container.interactive = true;
  return container;
}


export {makePentagon, makePentagons};