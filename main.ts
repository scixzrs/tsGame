import { Player, Airplane, Parachute } from "./Player,./Airplane,./Parachute";

export const GameConfig = {
  CANVAS_WIDTH: 800,
  CANVAS_HEIGHT: 600,
  PLAYER_SPEED: 3,
  AIRPLANE_SPEED: 3,
  PARACHUTE_SPEED: 5,
};
class Game {
  private canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;

  constructor() {
    this.canvas = document.getElementById('canvas') as HTMLCanvasElement;
    this.ctx = this.canvas.getContext('2d');
  }
}

class GameData {
  player: Player;
  airplane: Airplane;
  parachute: Parachute[];

  constructor() {
    this.player = new Player();
    this.airplane = new Airplane();
    this.parachute = [];
  }
}

class GameLogic {
  
}
