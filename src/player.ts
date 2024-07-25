import { GameObject } from "./gameObject";
import { Position, Vector } from "./vector";

export class Player extends GameObject{
  constructor(){
    super(new Position(50,50),1);
  }

  update(deltaTime: number) : void{}
}
