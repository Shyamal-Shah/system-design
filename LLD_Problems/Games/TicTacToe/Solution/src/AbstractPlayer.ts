import MARK from "./MARK";

export default abstract class AbstractPlayer {
  name: string;
  id: number;
  private mark: MARK;
  constructor(id: number, name: string, mark: MARK) {
    this.id = id;
    this.name = name;
    this.mark = mark;
  }

  abstract playTurn(): Promise<{ row: number; col: number }>;

  getMark(): MARK {
    return this.mark;
  }
}
