export class Vector {
  constructor (public x:number, public y: number) {}
  
  add (other: Vector) : Vector {
    return new Vector(this.x + other.x, this.y + other.y);
  }

  subtract(other: Vector) : Vector {
    return new Vector(this.x - other.x, this.y - other.y);
  }

  // for multiplaying scale
  mult(other: number) : Vector {
    return new Vector(this.x * other, this.y * other);
  }

  // define additional functions...
  //
  // dot(other: number) {}
  // cross(other: number) {}

}
