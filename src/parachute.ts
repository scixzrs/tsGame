import { GameObject } from "./gameObject";
import { Position, Vector } from "./vector";

export class Parachute extends GameObject{

  constructor(startPos:Position){
    super(startPos,1);
  }

  update(deltaTime: number):void {
    this.position.y -= 50;
  }

  isSaved(player:Player):boolean{
   console.log("saved");

  } 
  
  isMissed():boolean{
   console.log("dead");
   return this.position.y > window.innerHeight;
  }
}
