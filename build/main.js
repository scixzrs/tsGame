//import { Player, Airplane, Parachute } from "./GameObject";
//import { Vector } from "./Vector";
//
export class Game {
    constructor() {
        this.bgImage = document.getElementById('bg');
        this.waterImage = document.getElementById('water');
        this.planeImage = document.getElementById('plane');
        this.parachuteImage = document.getElementById('parachute');
        this.lastFrame = 0;
        this.canvas = document.getElementById('canvas');
        this.ctx = this.canvas.getContext('2d');
        requestAnimationFrame(this.gameLoop.bind(this));
    }
    gameLoop(currentFrame) {
        const deltaTime = (currentFrame - this.lastFrame) / 1000;
        this.lastFrame = currentFrame;
        this.update(deltaTime);
        this.render();
        requestAnimationFrame(this.gameLoop.bind(this));
    }
    update(deltaTime) {
    }
    render() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.fillStyle = 'blue';
        this.ctx.fillRect(0, 0, 1280, 768);
        this.ctx.drawImage(this.bgImage, 0, 0, this.canvas.width, this.canvas.height);
        this.ctx.drawImage(this.waterImage, this.canvas.width - this.waterImage.width, this.canvas.height - this.waterImage.height);
        this.ctx.drawImage(this.planeImage, 0, 0);
        this.ctx.drawImage(this.parachuteImage, 0, 0);
    }
}
window.onload = () => {
    new Game();
};
//class GameData {
//  player: Player;
//  airplane: Airplane;
//  parachute: Parachute[];
//
//  constructor() {
//    this.player = new Player();
//    this.airplane = new Airplane();
//    this.parachute = [];
//  }
//}
//
//class PlaneLoopManager {
//  constructor(xPos: number){
//
//  }
//}
