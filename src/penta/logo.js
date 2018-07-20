import {loader} from './loader.js';
import app from './app.js';


const initLogo = function(){
  const theLogo = new PIXI.Sprite(loader.resources.logo.texture);
  theLogo.x = app.renderer.width / 2;
  theLogo.y = app.renderer.height / 2;
  theLogo.anchor.x = 0.5;
  theLogo.anchor.y = 0.5;
  theLogo.scale.x = .5;
  theLogo.scale.y = .5;
  return theLogo;
}
export default initLogo;