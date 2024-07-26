import { Sprite } from "./renderer.js";

export class Player extends Sprite{
  private canvas: HTMLCanvasElement;
  private mouseX: number;

  constructor(canvas:HTMLCanvasElement){
    super();
    this.canvas = canvas;
    this.mouseX = this.x;
    this.setImage('../images/boat.png');
  }

  update(): void {
    this.x += (this.mouseX - this.x) * 0.04;
  }
  
  setPosition(x: number, y:number): void {
    if(x<=this.canvas.width-100){
      this.x = Math.max(0, Math.min(x,window.innerWidth - this.width));
      this.y = 400;
    } else {
      this.x = this.canvas.width - 100;
    }
  }

  desiredPosition(mouseX: number): void {
    this.mouseX = mouseX;
  }
}
