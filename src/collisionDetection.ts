import { GameState } from "./gameState.js";
import { Parachute } from "./parachute.js";
import { Player } from "./player.js";

export class CollisionManager {
  private player: Player;
  private parachutes: Parachute[];
  private gameState: GameState;
  private canvas: HTMLCanvasElement;

  constructor(player: Player,parachutes: Parachute[],gameState:GameState) {
    this.player = player;
    this.parachutes = parachutes;
    this.gameState = gameState;
    this.canvas = document.getElementById("canvas") as HTMLCanvasElement;
  }

  checkCollisions() {
    this.parachutes.forEach(parachute => {
      if (this.isColliding(this.player,parachute)) {
        this.gameState.incrementScore();
        parachute.setSaved();
      } else if (parachute.y >= this.canvas.height - parachute.height) {
        this.gameState.loseLife();
        parachute.setMissed();
      }
    });

    this.parachutes = this.parachutes.filter(parachute => {
      return !parachute.isSaved() && !parachute.isMissed();
    });
  }

  private isColliding(player: Player, parachute: Parachute): boolean {
    return player.x < parachute.x + parachute.width &&
      player.x + player.width > parachute.x &&
      player.y < parachute.y + parachute.height &&
      player.y + player.height > parachute.y;
  }
}
