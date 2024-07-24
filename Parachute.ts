import { GameObject } from "./GameObject";
import { Vector } from "./Vector";

export class Parachute extends GameObject {
  constructor(startPos: Vector) {
    super(startPos, 1);
  }

  update(deltaTime: number): void {
      this.position.y += 50;
  }
}
