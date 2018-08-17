const loader = PIXI.loader
  .add('logo', 'img/devgru-logo.png')
  .add('penta', 'img/devgru-logo-penta.png')
  .load((loader, resources) => {
    console.log('loaded');
  });
export {loader};