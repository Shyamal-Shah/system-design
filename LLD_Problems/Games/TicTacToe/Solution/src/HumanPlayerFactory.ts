import AbstractPlayer from "./AbstractPlayer";
import HumanPlayer from "./HumanPlayer";
import IPlayerFactory from "./IPlayerFactory";
import MARK from "./MARK";

export default class HumanPlayerFactory implements IPlayerFactory {
  createPlayer(id: number, name: string, mark: MARK): AbstractPlayer {
    return new HumanPlayer(id, name, mark);
  }
}
