import app from './app.js';


const makeQuads = function(){
  const quads = [];
  let count = 0;
  const colors = [
    0xFF0000,
    0x00FF00,
    0x0000FF,
    0xF0F000
  ];

  function makeQuad(color){
    const g = new PIXI.Graphics();
    g.beginFill(color);
    g.drawRect(0, 0, app.renderer.width / 2, app.renderer.height / 2);
    g.alpha = 0.4;
    return g;
  }

  for (let i = 0; i < 2; i++) {
    for (let j = 0; j <2; j++) {
      const l = count % colors.length;
      const q = makeQuad(colors[l]);
      q.x = (app.renderer.width / 2) * i;
      q.y = (app.renderer.height / 2) * j;
      quads.push(q);
      count ++;
    }
  }

  return quads;
}

export default makeQuads;