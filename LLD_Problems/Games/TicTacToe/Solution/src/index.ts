import Board from "./Board";
import Game from "./Game";

async function main() {
  console.log("Welcome to Tic Tac Toe!");

  const board = new Board(3);
  const game = new Game(2, board);

  await game.startGame();

  console.log("Thank you for playing Tic Tac Toe!");
}

main();
