function setup() {
    createCanvas(400, 400);
  }
  
  function draw() {
    background(220);
  
    fill(0, 255, 0);
    rect(150, 200, 100, 150);
  
    fill(255, 204, 0);
    ellipse(200, 120, 150, 150);
  
    fill(0);
    ellipse(180, 100, 30, 30);
    ellipse(220, 100, 30, 30);
  
    fill(255);
    ellipse(180, 100, 10, 10);
    ellipse(220, 100, 10, 10);
  
    fill(255);
    arc(200, 150, 60, 40, 0, PI);
  
    fill(0);
    rect(150, 30, 100, 50);
    triangle(150, 50, 250, 50, 200, 10);
  }