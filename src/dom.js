
import {getWindowSize} from './helpers.js';

// Dom stuff
const button_know = document.getElementById("button_know");
const button_info_screen_close = document.getElementById("button_info_screen_close");
const info_screen = document.getElementById("info_screen");
const devgru_form = document.getElementById("devgru_form");
const about_devgru = document.getElementById("about_devgru");


function infoScreenOut() {
  const windowSize = getWindowSize();
  const offset = windowSize.height+500;
  TweenMax.to(info_screen, 1.6, {opacity: 0,
    onComplete: function(){
      info_screen.style.display = 'none';
    }
  });

  TweenMax.to(button_info_screen_close, .2, {x: windowSize.width + 50 });

  TweenMax.to(devgru_form, .6, {y: offset });
  TweenMax.to(about_devgru, .6, {y: -offset,
    onComplete: function(){
      TweenMax.set(devgru_form, {y: -offset});
      TweenMax.set(about_devgru,{y: offset});
    }
  });
}
infoScreenOut();

function infoScreenIn(){
  info_screen.style.display = 'block';
  TweenMax.to(info_screen, 0.6, {opacity: 1});
  TweenMax.to(devgru_form, 0.6, {y: 0 });
  TweenMax.to(about_devgru, 0.6, {y: 0 });
  TweenMax.to(button_info_screen_close, 0.6, {x: 0, delay: 0.1 });


}

button_know.addEventListener('click', function(e) {
  e.preventDefault();
  infoScreenIn();
}, false);

button_info_screen_close.addEventListener('click', function(e) {
  e.preventDefault();
  infoScreenOut();
}, false);