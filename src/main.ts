//import { Player, Airplane, Parachute } from "./GameObject";
//import { Vector } from "./Vector";
//
export class Game {
  private canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;
  private bgImage = <HTMLImageElement>document.getElementById('bg');
  private waterImage = <HTMLImageElement>document.getElementById('water');
  private planeImage  = <HTMLImageElement>document.getElementById('planeSprite');
  private parachuteImage  = <HTMLImageElement>document.getElementById('parachuteSprite');
  private lastFrame:number = 0;
  
  constructor() {
    this.canvas = document.getElementById('canvas') as HTMLCanvasElement;
    this.ctx = this.canvas.getContext('2d')!;

    requestAnimationFrame(this.gameLoop.bind(this));
  }

  private gameLoop(currentFrame:number):void{
    const deltaTime=(currentFrame-this.lastFrame)/1000;
    this.lastFrame=currentFrame;
  
    this.update(deltaTime);

    this.render();

    requestAnimationFrame(this.gameLoop.bind(this));
  }

  private update(deltaTime:number):void{
    this.ctx.translate
  }

  private render(): void{
    this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height);
    this.ctx.fillStyle='blue';
    this.ctx.fillRect(0,0,1280,768);
    this.ctx.drawImage(this.bgImage,0,0,this.canvas.width,this.canvas.height);
    this.ctx.drawImage(this.waterImage,this.canvas.width-this.waterImage.width,this.canvas.height-this.waterImage.height);
    this.ctx.drawImage(this.planeImage,0,0);
    this.ctx.drawImage(this.parachuteImage,0,0);
  }
}

window.onload = () => {
  new Game();

}

export {};

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
