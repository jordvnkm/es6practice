'use strict';
const Board = require("./board").board;
const readline = require('readline');
const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


function Game(board){
  this.board = board;
  this.currentPlayer = "X";
}
Game.prototype.switchPlayer = function() {
  if (this.currentPlayer == "X") {
    this.currentPlayer = "O";
  } else {
    this.currentPlayer = "X";
  }
}
Game.prototype.promptMove = function (callback) {
  let that = this;
  that.board.render();
  reader.question(`(${that.currentPlayer}'s turn) \nWhich row? `, function (row) {
    reader.question(`(${that.currentPlayer}'s turn) \nWhich col? `, function (col) {
      let intRow = parseInt(row);
      let intCol = parseInt(col);
      let move = [intRow, intCol];
      if (that.board.empty(move)) {
        let currPlayer = that.currentPlayer;
        that.switchPlayer();
        callback(move, currPlayer)
      } else {
        console.log("Invalid move -- spot is taken");
        that.promptMove(callback);
      }
    })
  })
};

Game.prototype.run = function(completionCallback) {
  this.promptMove((move, currentPlayer) => {
    this.board.placeMark(move, currentPlayer);
    if (!this.board.won()) {
      this.run(completionCallback);
    } else {
      console.log(`${this.board.winner()} won the game`)
      completionCallback();
    }
  })
}

const board = new Board();
const game = new Game(board);

game.run(() => {
  reader.close();
});
