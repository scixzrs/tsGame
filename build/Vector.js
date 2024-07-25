export class Vector {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    add(other) {
        return new Vector(this.x + other.x, this.y + other.y);
    }
    subtract(other) {
        return new Vector(this.x - other.x, this.y - other.y);
    }
    // for multiplaying scale
    mult(other) {
        return new Vector(this.x * other, this.y * other);
    }
}
