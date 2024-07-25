import { Airplane } from "./airplane";
import { Player } from "./player";
import { Parachute } from "./parachute";
import { GameScore } from "./gameScore";
import { Position, Vector } from "./vector";

export class GameLogic {
  airplane: Airplane;
  player: Player;
  parachute: Parachute[] = [];
  gameScore = GameScore;
  
}
