import { Player } from "./player.js";

export class InputManager {
  private player: Player;

  constructor(player: Player) {
    this.player = player;
    this.getInput();
  }

  getInput() {
    window.addEventListener("mousemove",(mEvent) => this.handleInput(mEvent));
  }

  handleInput(mEvent: MouseEvent) {
    //const canvas = document.getElementById('canvas') as HTMLCanvasElement;
    //const canvasRect = canvas.getBoundingClientRect();
    //const mouseX = mEvent.clientX - canvasRect.left;
    this.player.desiredPosition(mEvent.clientX);
    //this.player.setPosition(mouseX - this.player.width/2, 400)
  }
}
