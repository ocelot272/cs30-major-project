
let p;

function setup() {
  createCanvas(windowWidth, windowHeight);
  p = new Player(width/2, height/2);
}

function draw() {
  background(220);
  p.display();
  p.move();

  
}

class Player {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.dx = 5;
    this.dy = 5;
  }

  display() {
    rect(this.x, this.y, 25, 50); 
  }

  move() {
    if (keyIsDown(LEFT_ARROW)) {
      this.x -= this.dx;
    }
    if (keyIsDown(RIGHT_ARROW)) {
      this.x += this.dx;
    }

    if (keyIsDown(UP_ARROW)) {
      this.y -= this.dy;
    }
    else if (!keyIsDown(UP_ARROW) && y > height/2) {
      this.y += this.dy;
    }
    
  }

}

