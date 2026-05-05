
let p;

function setup() {
  createCanvas(windowWidth, windowHeight);
  p = new Player(width/2, height/2);
}

function draw() {
  background(220);
  p.display();
  p.move();

  if (keyIsPressed === " ") {
    p.j();
  }
}

// function keyPressed() {
//   if (key === " ") {
//     p.j();
//   }
// }

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
    
  }

  j() {
    this.y -= this.dy;

    if (this.y > height/2 - 10) {
      this.dy *= -1;
    }
  }


}

