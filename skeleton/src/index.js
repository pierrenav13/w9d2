const View = require('./ttt-view')// require appropriate file
const Game = require('../ttt_node/game.js') // require appropriate file

document.addEventListener("DOMContentLoaded", () => {
  // Your code here
  const game = new Game();
  const el = document.querySelector('.ttt');
  const view = new View(game, el);
});
