import * as readline from "node:readline";
import AbstractPlayer from "./AbstractPlayer";

export default class HumanPlayer extends AbstractPlayer {
  async askForCoordinates(): Promise<{ row: number; col: number }> {
    let row: number = 0;
    let col: number = 0;

    return new Promise((resolve) => {
      const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
      });
      const ask = (
        ques = "Enter the row and column number (E.g. 3,3) starting with index 1: "
      ): void => {
        rl.question(ques, (coordinates: string) => {
          try {
            const [rowStr, colStr] = coordinates.split(",");
            row = parseInt(rowStr.trim(), 10);
            col = parseInt(colStr.trim(), 10);

            if (isNaN(row) || isNaN(col)) {
              throw new Error(
                "Invalid input. Please enter two valid numbers separated by a comma."
              );
            }

            rl.close();
            resolve({ row: --row, col: --col });
          } catch (e: unknown) {
            ask("Please try again E.g. 2,3: ");
          }
        });
      };
      ask();
    });
  }

  async playTurn(): Promise<{ row: number; col: number }> {
    console.log(`${this.name}: Where do you want to play your next move ?`);
    return await this.askForCoordinates();
  }
}
