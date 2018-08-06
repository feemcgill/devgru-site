const app = new PIXI.Application({
  width: window.innerWidth,
  height: window.innerHeight,
  backgroundColor : 0xffffff,
 // forceCanvas : true
});

document.body.appendChild(app.view);

export default app;