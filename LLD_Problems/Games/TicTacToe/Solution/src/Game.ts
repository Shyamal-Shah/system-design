import AbstractPlayer from "./AbstractPlayer";
import Board from "./Board";
import HumanPlayer from "./HumanPlayer";
import MARK from "./MARK";

export default class Game {
  players: AbstractPlayer[] = [];
  board: Board | null;

  constructor(playerCount: number = 2, board: Board) {
    if (playerCount < 2) {
      throw new Error("There should be at least two players");
    }
    if (playerCount > Object.values(MARK).length - 1) {
      throw new Error(
        "The number of players should be less or equal to the number of Marks."
      );
    }
    this.board = board;
    this.initializePlayers(playerCount);
  }

  initializePlayers(playerCount: number) {
    const marks: MARK[] = Object.values(MARK).filter(
      (v) => typeof v === "number" && v !== MARK.EMPTY
    ) as MARK[];
    this.players = Array.from({ length: playerCount }, (_, i) => {
      const player = new HumanPlayer(i + 1, `Player ${i + 1}`, marks[i]);
      this.board?.addPlayerState(player);
      return player;
    });
  }

  resetGame() {
    this.players = [];
    this.board = null;
  }

  async startGame() {
    if (!this.board) {
      throw new Error("The board is not initialized.");
    }
    if (!this.players || this.players.length < 2) {
      throw new Error("The players are not initialized.");
    }
    let turn = 0;
    let row, col;
    do {
      this.board.printState();
      do {
        ({ row, col } = await this.players[turn].playTurn());
      } while (!this.board.isValidMove(row, col));
      this.board.updateState(this.players[turn], row, col);

      if (this.board.testWinCondition(this.players[turn], row, col)) {
        console.log(`${this.players[turn].name} Won !!`);
        break;
      }
      turn = (turn + 1) % this.players.length;
    } while (!this.board.isDraw());
  }
}
