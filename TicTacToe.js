// 348. 设计井字棋
// https://leetcode-cn.com/problems/design-tic-tac-toe/

/**
 * @param {number} n
 */
var TicTacToe = function(n) {
    this.n = n;
    this.row = new Array(3).fill(0).map(() => new Array(n).fill(0));
    this.col = new Array(3).fill(0).map(() => new Array(n).fill(0));
    this.diagonal = new Array(3).fill(0).map(() => new Array(2).fill(0));
};

/** 
 * @param {number} row 
 * @param {number} col 
 * @param {number} player
 * @return {number}
 */
TicTacToe.prototype.move = function(row, col, player) {
    if(++ this.row[player][row] === this.n){
      return player;
    }
    if(++ this.col[player][col] === this.n){
      return player;
    }
    if(row === col && ++ this.diagonal[player][0] === this.n){
      return player;
    }
    if(row+col === this.n-1 && ++ this.diagonal[player][1] === this.n){
      return player;
    }
    return 0
};

/** 
 * Your TicTacToe object will be instantiated and called as such:
 * var obj = new TicTacToe(n)
 * var param_1 = obj.move(row,col,player)
 */
