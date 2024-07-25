//creating a Unity like gameobject class as a base class for gameobjects
import { Vector } from "./Vector";
export class GameObject {
    constructor(position, scale) {
        this.position = position;
        this.scale = scale;
    }
}
export class Player extends GameObject {
    constructor() {
        super(new Vector(50, 50), 1);
    }
    update(deltaTime) { }
}
export class Airplane extends GameObject {
    constructor() {
        super(new Vector(50, 50), 1);
    }
    update(deltaTime) {
        this.position.x -= 10;
        if (this.position.x < 0) {
            this.position.x = 300;
        }
    }
}
export class Parachute extends GameObject {
    constructor(startPos) {
        super(startPos, 1);
    }
    update(deltaTime) {
        this.position.y += 50;
    }
}
