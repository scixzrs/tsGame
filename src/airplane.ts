import { Position, Vector } from "./vector";
import { GameObject } from "./gameObject";

export class Airplane extends GameObject {
  constructor() {
    super(new Position(50,50),1);
  }

  update(deltaTime:number) : void {
    this.position.x -= 10;
    if(this.position.x < 0) {
      this.position.x = window.innerWidth;
    }
  }

  deployParachute(): Parachute {
    return new Parachute(new Position(this.position.x, this.position.y));
  }
}

