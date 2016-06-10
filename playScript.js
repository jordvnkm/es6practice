"use strict";

const Game = require("./hanoi").game;
const reader = require("./hanoi").reader;


function completionCallback(game) {
  reader.question('Do you want to play again?', function(response) {
    const answer = (response === 'yes') ? true : false;
    if (answer) {
      game.resetPiles();
      game.run(game.completionCallBack);
    } else {

      reader.close();
    }
  })
}

let game = new Game(completionCallback);
game.run(game.completionCallback.bind(this));
