//creating a Unity like gameobject class as a base class for gameobjects
import { Position, Vector } from "./vector";

export abstract class GameObject {
  constructor(public position: Position, public scale: number) {
  }

  abstract update(deltaTime: number): void;
}

