import { GameObject } from "./GameObject";
import { Vector } from "./Vector";

export class Player extends GameObject {
  constructor() {
    super(new Vector(50, 50), 1);
  }

  update(deltaTime: number) : void {}
}
