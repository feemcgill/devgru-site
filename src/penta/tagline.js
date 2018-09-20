//import {loader} from './loader.js';
import app from './app.js';
import {debounce, getWindowSize} from './../helpers.js';


const tagLine = function(){
  const theTag = new PIXI.Sprite();



  const tagSprite = new PIXI.Sprite.fromImage('img/creative-tech.png');
  tagSprite.tint = 0x000000;
  tagSprite.scale.x = 0.8;
  tagSprite.scale.y = 0.8;
  tagSprite.rotation = 0.016;


  tagSprite.x = 70;
  //tagSprite.y = app.renderer.height - 300;
  //tagSprite.y = app.renderer.height - 300;
  theTag.addChild(tagSprite);

  tagSprite.scale.set(0.01);


  function scaleIt(){
    TweenMax.to(tagSprite.scale, 4, {x: .4, y: .4,  onComplete: function(){
      TweenMax.to(tagSprite.scale, 0.1, {x: 0, y: 0, delay: 4, onComplete: function(){
        setTimeout(() => {
          scaleIt();
        }, 5000);
      }});
    }})
  }

  // setTimeout(() => {
  //   scaleIt();
  // }, 10000);

  // RESIZE
  function reSizeIt() {
    const size = getWindowSize();
    const w = size.width;

  }


  window.addEventListener("resize",debounce(function(e){
    reSizeIt();
  }));  
    
  return theTag;
}




export default tagLine;