class PlayerArcher {
    constructor(x, y, width, height, angle) {
      this.x = x;
      this.y = y;
      this.width = width;
      this.height = height;
      this.angle = angle;
    }
    display() {
      Matter.Body.setAngle(this.body, -PI/2);
      
   if (keyIsDown === "UP_ARROW" && playerArcher.body.angle < 1.77) {
     angleValue= 0.1;
  } else{
    angleValue = -0.1;
 }
  
  if (keyIsDown === "DOWN_ARROW" && playerArcher.body.angle > 1.47) {
      angleValue = -0.1;
   }else{
     angleValue = 0.1;
   }
   

   this.image = loadImage("./assets/PlayerArcher")
  
   display(); {
      push();
      translate(this.x, this.y);
      rotate(this.angle);
      rect(-10, -20, this.width, this.height);
      pop();
      arc(this.x - 30, this.y + 90, 140, 200, PI, TWO_PI);
      noFill();
   }
   }
  }
  