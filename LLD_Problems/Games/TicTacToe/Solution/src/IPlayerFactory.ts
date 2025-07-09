import AbstractPlayer from "./AbstractPlayer";
import MARK from "./MARK";

export default interface IPlayerFactory {
  createPlayer(id: number, name: string, mark: MARK): AbstractPlayer;
}
