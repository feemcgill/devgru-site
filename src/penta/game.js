import app from './app.js';
import makeQuads from './quads.js';

const theGame = function(){
    const gameContainer = new PIXI.Container();
    const quads = makeQuads();
    const gameState = {}

    gameState.userSequence = [];
    gameState.computerSequence = [];
    gameState.steps = 4;
    gameState.clickCount = 0;

    function quadClick(e){
      const target = e.target;
      const q = e.target.quadNo;
      target.alpha = 1;
      TweenMax.to(target, 0.2, {alpha: 0, delay: 0.06});
      gameState.userSequence.push(q);
      if (gameState.clickCount < gameState.computerSequence.length) {
        if (q != gameState.computerSequence[gameState.clickCount]) {
          console.log('WRONG CLICK');
        } else {
          console.log('RIGHT CLICK', gameState.clickCount, gameState.computerSequence.length);
          if (gameState.clickCount +1 == gameState.computerSequence.length) {
            console.log('user wins');
            gameState.steps++;
            playIt()
          }
        }
      } else {
        console.log('TOO MANY CLICKS');
      }
      gameState.clickCount++;

    }


    function generatePattern(){
      const pattern = [];
      for (let i = 0; i < gameState.steps; i++) {
        const n = Math.floor(Math.random() * 4);
        pattern.push(n);
      }
      return pattern;  
    }

    function playPattern(pattern){
      for (let i = 0; i < pattern.length; i++) {
        const e = quads[pattern[i]];
        setTimeout(() => {
          e.alpha = 1;
          TweenMax.to(e, .15, {alpha: 0, delay: 0.1});
        }, 500 * i);     
      }
    }

    function playIt(){
      gameState.clickCount = 0;
      gameState.computerSequence = generatePattern();
      playPattern(gameState.computerSequence);
    }
    playIt();
    //playPattern([0,3,1,2,2,2,1,3,0,1,0,3,0]);


    for (let i = 0; i < quads.length; i++) {
      const e = quads[i];
      gameContainer.addChild(e);
      e.alpha = 0;
      e.interactive = true;
      e.buttonmode = true;
      e.on('click', quadClick);
      e.quadNo = i;
    }

    return gameContainer;
}

export default theGame;