import { Sprite } from "./renderer.js";
import { Parachute } from "./parachute.js";

export class Airplane extends Sprite {
  constructor() {
    super();
    
    this.setImage('../images/plane.png');
  }

  update() : void {
    this.x-=4;
      if (this.x < 0) {
        this.x = window.innerWidth;
    } 
  }

  bDeployReady(): boolean {
    return Math.random() < 0.011;
  }
    
  deployParachute(): Parachute {
      return new Parachute(this.x);
  }  
}

