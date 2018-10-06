import config from './config.js';
import app from './app.js';
import {getWindowSize, debounce, map} from './../helpers.js';

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
  let ss = config.sqSize;
  let lineThick = config.sqThick;
  const shapeBox = new PIXI.Sprite(); 
  shapeBox.width = 1;
  shapeBox.height = 1;
  shapeBox.pivot.x = config.sqSize / 2;
  shapeBox.pivot.y = config.sqSize / 2;   

  if (config.initialSize.width < config.breaks.mobile) {
      ss = ss / 2;
      lineThick = 0;
  }

  const diamond = new PIXI.Graphics();
  diamond.lineStyle(lineThick, 0xff0000, 1, 0);
  diamond.alpha = 1;
  diamond.beginFill(0xff0000);
  diamond.drawRect(0,0,ss,ss);
  diamond.endFill();
  diamond.alpha = 1;
  diamond.rotation = 0.785398;
  diamond.x = config.sqSize / 2;
  diamond.y = config.sqSize / 2;
  shapeBox.alpha = 0.5;
  shapeBox.addChild(diamond);

  return shapeBox;              
}





const makePentagons = function(){
  const container = new PIXI.Container();
  const shapes = new PIXI.Sprite();
  const pentagons = [];
  const diamondColumns = [];
  for (let a = 0; a <  config.sqAcross; a++) {
      const diamondColumn = [];
      for (let i = 0; i < config.sqDown; i++) {
          const diamond = makePentagon(colorArray[i%colorArray.length]);
          shapes.addChild(diamond);
          pentagons.push(diamond);
          diamondColumn.push(diamond);
          diamond.x = a * ((app.renderer.width + config.sqSize) / config.sqAcross);
          diamond.y = i * ((app.renderer.height + config.sqSize) / config.sqDown);
      }
      diamondColumns.push(diamondColumns);
   }

   const col = [];
  for (let i = 0; i < config.sqAcross; i++) {
      const e = pentagons[i];
      if (e.diamondColumn == 5) {
          col.push(e);
      }
  }

  setTimeout(() => {
    TweenMax.staggerTo(diamondColumns, 1.2, {y: - 1000} );
  }, 2000);


  container.addChild(shapes);
  
    app.ticker.add(() => {
        for (let i = 0; i < pentagons.length; i++) {
            const element = pentagons[i];
            element.rotation += 0.01 * (i * 0.006);
        }
    }); 
     
    // RESIZE
    function reSizeIt() {
    
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
    
    
    window.addEventListener("resize",function(e){
        reSizeIt();
    });
    container.interactive = true;


    let displaceTex = PIXI.Texture.fromImage('img/disp/9.png');
    let displacementSprite = new PIXI.Sprite(displaceTex);
    let displacementSprite_LOOK = new PIXI.Sprite(displaceTex);
    var displacementFilter = new PIXI.filters.DisplacementFilter(displacementSprite);
    container.addChild(displacementSprite);
    //container.addChild(displacementSprite_LOOK);
    displacementSprite_LOOK.tint = 0xFF0000;
    displacementSprite_LOOK.alpha = 0.08;

    shapes.filters = [displacementFilter];



    displacementSprite.scale.set(displacementSpriteMax);
    displacementFilter.scale.set(50);
    displacementSprite.anchor.set(0.5);
    displacementSprite.x = app.renderer.width / 2;
    displacementSprite.y = app.renderer.height / 2;

    displacementSprite_LOOK.anchor.set(0.5);



    let displacementSpriteMax = 5;
    let displacementSpriteMin = 3;
    if (config.initialSize.width < config.breaks.mobile) {
        displacementSpriteMax = 3;
        displacementSpriteMin = 1;
        displacementFilter.scale.set(10);
    }

    
    TweenMax.to(displacementSprite.scale, 15, {x: displacementSpriteMin, y: displacementSpriteMin, repeat: -1, yoyo: true, ease: Back.easeOut} );
    container.interactive = true;
    
    container
        .on('mousemove', onPointerMove)
        .on('touchmove', onPointerMove);
    
    function onPointerMove(eventData) {

        var moverX = map(eventData.data.global.x, 0, app.renderer.width, -150, 150);
        var moverY = map(eventData.data.global.y, 0, app.renderer.height, -150, 150);

        TweenMax.to(displacementSprite, 2, {
            x:(app.renderer.width / 2) + moverX,
            y:(app.renderer.height / 2) + moverY,	
            x: eventData.data.global.x,
            y: eventData.data.global.y,
        });        
        TweenMax.to(displacementSprite_LOOK, 2, {
            x:(app.renderer.width / 2) + moverX,
            y:(app.renderer.height / 2) + moverY,	
            x: eventData.data.global.x,
            y: eventData.data.global.y,
        });
    }      


  return container;
}


export {makePentagon, makePentagons};