import { GameObject } from "./GameObject";
import { Vector } from "./Vector";

export class Airplane extends GameObject {
  constructor() {
    super(new Vector(50,50),1);
  }

  update(deltaTime: number) : void {
    this.position.x -= 10;
    if(this.position.x < 0) {
      this.position.x = 300;
    }
  }
}
