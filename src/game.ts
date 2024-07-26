import { GameState } from "./gameState.js";
import { Renderer, Sprite } from "./renderer.js";
import { CollisionManager } from "./collisionDetection.js"
import { InputManager } from "./inputManager.js"
import { Player } from "./player.js";
import { Airplane } from "./airplane.js";
import { Parachute } from "./parachute.js";

export default class Game {
  private player: Player;
  private airplane: Airplane;
  private parachutes: Parachute[];

  private renderer: Renderer;
  private inputManager: InputManager;
  private collisionManager: CollisionManager;
  private gameState: GameState;
        
  private canvas: HTMLCanvasElement;
  private ctx:CanvasRenderingContext2D;
      
  constructor(canvas:HTMLCanvasElement, ctx:CanvasRenderingContext2D) {
    this.canvas = canvas;
    this.ctx = ctx;
    
    this.gameState = new GameState();
    this.renderer = new Renderer(canvas, ctx);

    this.airplane = new Airplane();
    this.parachutes = [];
    this.player = new Player(canvas);
    this.player.setPosition(canvas.width/2,400);
           
    this.inputManager = new InputManager(this.player);
    this.collisionManager = new CollisionManager(this.player,this.parachutes,this.gameState);

  }

  start(): void {
    this.gameLoop();
  }

  private gameLoop():void{
    this.update();
    this.render();

    requestAnimationFrame(this.gameLoop.bind(this));
  }

  update(): void {
    this.airplane.update();
    this.player.update();
    this.parachutes.forEach(parachute => parachute.update());
    this.collisionManager.checkCollisions();
    
    if(this.airplane.x > 15 && this.airplane.x < this.canvas.width-100){
        if (this.airplane.bDeployReady()){
          this.parachutes.push(this.airplane.deployParachute());
        }
    }

    this.parachutes = this.parachutes.filter(parachute => !parachute.hasLanded());
  }

  private render(): void{
    this.renderer.clear();
    this.renderer.draw(this.airplane);
    this.renderer.draw(this.player);
    this.parachutes.forEach(parachute => this.renderer.draw(parachute));
    this.renderer.drawScore(this.gameState);
  }
}
