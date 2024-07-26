import { GameState } from "./gameState.js";

export class Renderer {
  private ctx: CanvasRenderingContext2D;
  private canvas: HTMLCanvasElement;
  private bg: HTMLImageElement;
  private water: HTMLImageElement;

  constructor(canvas:HTMLCanvasElement, ctx:CanvasRenderingContext2D) {
    this.canvas = canvas;
    this.ctx = ctx;

    this.bg = new Image();
    this.bg.src='../images/background.png';
  
    this.water = new Image();
    this.water.src='../images/sea.png';
  }

  clear(): void {
    this.ctx.drawImage(this.bg,0,0,this.canvas.width,this.canvas.height);
    this.ctx.drawImage(this.water,0,this.canvas.height-100,this.canvas.width,this.canvas.height-300);
  }

  draw(sprite: Sprite) {
    this.ctx.drawImage(sprite.image, sprite.x, sprite.y); 
  }

  drawScore(gameState: GameState) {
    this.ctx.fillText(`Score: ${gameState.score}`, 10, 20);
    this.ctx.fillText(`Lives: ${gameState.lives}`, 10, 40);
  }
}

export class Sprite {
  public x: number;
  public y: number;
  public width: number;
  public height: number;
  public image: HTMLImageElement;

  constructor(x=0,y=0,width=0,height=0) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.image = new Image();
  }

  setImage(src: string): void {
    this.image.src = src;
  }

}
