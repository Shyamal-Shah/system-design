import AbstractPlayer from "./AbstractPlayer";
import MARK from "./MARK";

export default class Board {
  state: MARK[][];
  boardSize: number;
  playerStates: { [key: number]: any } = {};
  totalTurns: number;

  constructor(boardSize: number = 3) {
    this.boardSize = boardSize;
    this.state = Array.from({ length: boardSize }, () =>
      Array(boardSize).fill(MARK.EMPTY)
    );
    this.totalTurns = 0;
  }

  addPlayerState(player: AbstractPlayer) {
    this.playerStates[player.id] = {
      rowCounts: Array(this.boardSize).fill(0),
      colCounts: Array(this.boardSize).fill(0),
      diagCount: 0,
      antiDiagCount: 0,
    };
  }

  printState() {
    for (let i = 0; i < this.boardSize; i++) {
      console.log(this.state[i].join(" | "));
    }
  }

  testWinCondition(player: AbstractPlayer, row: number, col: number) {
    const ps = this.playerStates[player.id];
    return (
      ps.rowCounts[row] === this.boardSize ||
      ps.colCounts[col] === this.boardSize ||
      ps.diagCount === this.boardSize ||
      ps.antiDiagCount === this.boardSize
    );
  }

  isDraw() {
    return this.totalTurns === this.boardSize * this.boardSize;
  }

  resetBoardState() {
    this.state = Array.from({ length: this.boardSize }, () =>
      Array(this.boardSize).fill(MARK.EMPTY)
    );
    this.totalTurns = 0;
    this.playerStates = {};
  }

  isValidMove(row: number, col: number) {
    if (
      row < 0 ||
      row >= this.boardSize ||
      col < 0 ||
      col >= this.boardSize ||
      this.state[row][col] !== MARK.EMPTY
    ) {
      console.error("Invalid Move!!");
      return false;
    }
    return true;
  }

  updateState(player: AbstractPlayer, row: number, col: number) {
    if (
      row < 0 ||
      row >= this.boardSize ||
      col < 0 ||
      col >= this.boardSize ||
      this.state[row][col] !== MARK.EMPTY
    ) {
      console.error("Invalid Move!!");
      return;
    }
    this.state[row][col] = player.getMark();
    this.playerStates[player.id].rowCounts[row]++;
    this.playerStates[player.id].colCounts[col]++;
    if (row === col) {
      this.playerStates[player.id].diagCount++;
    }
    if (row + col === this.boardSize - 1) {
      this.playerStates[player.id].antiDiagCount++;
    }
    this.totalTurns++;
  }
}
