
const shuffleArray = function(array){
  var currentIndex = array.length, temporaryValue, randomIndex;

  while (0 !== currentIndex) {

    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}


const resizeInit = function() {
  (function($,sr){

    var debounce = function (func, threshold, execAsap) {
        var timeout;
  
        return function debounced () {
            var obj = this, args = arguments;
            function delayed () {
                if (!execAsap)
                    func.apply(obj, args);
                timeout = null; 
            };
  
            if (timeout)
                clearTimeout(timeout);
            else if (execAsap)
                func.apply(obj, args);
  
            timeout = setTimeout(delayed, threshold || 50); 
        };
    }
      // smartresize 
      jQuery.fn[sr] = function(fn){  return fn ? this.bind('resize', debounce(fn)) : this.trigger(sr); };
  
  })(jQuery,'smartresize');
}


function getWindowSize(){
	const wWidth = window.innerWidth;
    const wHeight = window.innerHeight;
    const data = {
        width: wWidth,
        height: wHeight
    };
    return data;
}

export {shuffleArray, resizeInit, getWindowSize};