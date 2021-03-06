import {getWindowSize} from './../helpers.js';

const config = {
  sqSize: 25,
  sqThick: 3,
  sqAcross: 16,
  sqDown: 16,
  colors: {
      red: 0xB33450,
      green: 0x427D3B,
      blue: 0x2F3A75,
      yellow: 0xD8B72D
  },
  breaks: {
    mobile: 800,
  },
  initialSize: getWindowSize()

};

export default config;