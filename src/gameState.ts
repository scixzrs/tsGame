 const gameConfig = {
      AIRPLANE_SPEED : 5,
      PARACHUTE_SPEED: 5,
      PLAYER_SPEED : 5
}; 

export class GameState {
  score: number;
  lives: number;

  constructor() {
    this.score = 0;
    this.lives = 3;
 
  }

  incrementScore(){
    this.score += 1;
  }

  loseLife(){
    if (this.lives >= 1 && this.lives <= 3){
      this.lives -= 1;
    }
    else if (this.lives < 1) {
      this.gameOver();
    }
  }
    
  gameOver(){
    console.log("Game Over");
  }
}
