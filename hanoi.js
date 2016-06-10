"use strict";
const readline = require('readline');
const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function Game(completionCallback) {
  this.completionCallback = completionCallback;
  this.piles = [[1],[3,2],[]];
}

Game.prototype.promptMove = function(callback) {
  this.printStacks()
  let move = [];
  reader.question("Source stack: ", function (sourceStack) {
    reader.question("End stack: ", function (endStack) {
      move.push(sourceStack, endStack);
      callback(move);
    })
  })
}

Game.prototype.printStacks = function(){
  console.log("Pile1: " + this.piles[0]);
  console.log("Pile2: " + this.piles[1]);
  console.log("Pile3: " + this.piles[2]);
}

Game.prototype.isValidMove = function( startIndex, endIndex){
  let startPile = this.piles[startIndex];
  let endPile = this.piles[endIndex];
  if (startPile.length === 0){
    return false;
  }
  else if (endPile.length === 0) {
    return true;
  }
  else if (startPile[startPile.length - 1] > endPile[endPile.length - 1]){
    return false;
  }
  else {
    return true;
  }
}

Game.prototype.move = function(startIndex, endIndex){
  let startPile = this.piles[startIndex];
  let endPile = this.piles[endIndex];
  if (this.isValidMove(startIndex, endIndex)){
    endPile.push(startPile.pop());
  }
  else {
    console.log("invalid move")
  }
}

Game.prototype.isWon = function () {
  if (this.piles[1].length === 3 || this.piles[2].length === 3){
    return true;
  }
  else {
    return false;
  }
}

Game.prototype.run = function(completionCallback){
  this.promptMove((moveArr) => {
    this.move(moveArr[0], moveArr[1]);
    if (!this.isWon()) {
      this.run(completionCallback);
    } else {
      console.log("You have won!");
      this.completionCallback(this);
    }
  })
}

Game.prototype.resetPiles = function() {
  this.piles = [[3,2,1], [], []];
}
let game = new Game();




module.exports.game = Game;
module.exports.reader = reader;
