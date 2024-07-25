export class GameScore {
  score = 0;
  lives = 3;

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
