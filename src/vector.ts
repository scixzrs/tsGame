export class Vector {
  constructor (public x:number, public y: number) {}
  
  add (other: Vector) : Vector {
    return new Vector(this.x + other.x, this.y + other.y);
  }

  subtract(other: Vector) : Vector {
    return new Vector(this.x - other.x, this.y - other.y);
  }

  // for multiplaying scale
  scale(factor: number) : Vector {
    return new Vector(this.x * factor, this.y * factor);
  }

  // define additional functions...
  //
  // dot(other: number) {}
  // cross(other: number) {}
}

export class Position extends Vector {
  constructor(x: number, y: number) {
    super(x,y);
  }
}
