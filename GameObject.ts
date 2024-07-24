//creating a Unity like gameobject class as a base class for gameobjects
import { Vector } from "./Vector";

export abstract class GameObject {
  constructor(public position: Vector, public scale: number) {
  }

  abstract update(deltaTime: number): void;
}

