import { Sprite } from "./renderer.js";
import { Player } from "./player.js";

export class Parachute extends Sprite {
  private speed: number;
  private saved: boolean;
  private missed: boolean;

  constructor(startPos: number){
    super(startPos);
    this.speed = 7;
    this.setImage('../images/parachutist.png');
    this.saved = false;
    this.missed = false;
  }

  update():void {
    this.y += this.speed;
  }

  setSaved(): void{
    this.saved = true;
  }
  isSaved():boolean{
    return this.saved;
  } 
 
  setMissed():void{
    if (this.y > window.innerHeight - 100){
      this.missed = true;
    }
  }

  isMissed():boolean{
    return this.missed;
  }

  hasLanded(): boolean{
    return this.isSaved() || this.isMissed(); 
  }
}
