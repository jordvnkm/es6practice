'use strict';

function Board(){
  this.grid = [[null, null, null],
               [null, null, null],
               [null, null, null]];

}

Board.prototype.won = function () {
  if (this.checkAllColumns("X")){
    return "X";
  }
  else if (this.checkAllRows("X")){
    return "X";
  }
  else if (this.checkDiagonals("X")){
    return "X";
  }

  if (this.checkAllColumns("O")){
    return "O";
  }
  else if (this.checkAllRows("O")){
    return "O";
  }
  else if (this.checkDiagonals("O")){
    return "O";
  }
  return null;
};

Board.prototype.checkAllRows = function (mark) {
  for (let i = 0; i < 3; i++) {
    if (this.checkSingleRow(i, mark)) {
      return true;
    };
  }
  return false;
};

Board.prototype.checkAllColumns = function(mark) {
  for (let i = 0; i < 3; i++) {
    if (this.checkSingleCol(i, mark)) {
      return true;
    }
  }
  return false;
}

Board.prototype.checkDiagonals = function(mark) {
  if (this.grid[0][0] === mark &&
      this.grid[1][1] === mark &&
      this.grid[2][2] === mark) {
    return true;
  } else if (this.grid[2][0] === mark &&
            this.grid[1][1] === mark &&
            this.grid[0][2] === mark) {
    return true;
  }
  return false;
}

Board.prototype.checkSingleRow = function(row, mark) {
  if (this.grid[row][0] === mark &&
      this.grid[row][1] === mark &&
      this.grid[row][2] === mark) {
    return true;
  }
  return false;
}

Board.prototype.checkSingleCol = function(col, mark) {
  if (this.grid[0][col] === mark &&
      this.grid[1][col] === mark &&
      this.grid[2][col] === mark) {
    return true;
  }
  return false;
}

Board.prototype.winner = function () {
  return this.won();
};

Board.prototype.empty = function (pos) {
  return (this.grid[pos[0]][pos[1]] === null);
};


Board.prototype.placeMark = function (pos, mark) {
  this.grid[pos[0]][pos[1]] = mark;
};

Board.prototype.render = function () {
  console.log(this.grid[0]);
  console.log(this.grid[1]);
  console.log(this.grid[2]);
};

module.exports.board = Board;
