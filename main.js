// import './style.css'
// import 'horizontal-scroll/dist/index';
// import 'horizontal-scroll/dist/ho'
import HorizontalScroll from 'horizontal-scroll/src/index'

document.querySelector('#app').innerHTML = `
  <h1>Hello Vite!</h1>
  <a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>
`;


var blocks = document.getElementsByClassName('block');
var container = document.getElementsByClassName('container');
var hs = new HorizontalScroll.default({
  blocks : blocks,
  container: container,
});
