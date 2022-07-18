let colorArray = ["red", "orange", "yellow", "green", "blue", "purple"];

function setup() {
  createCanvas(1500, 750);
  noLoop();
}

function draw() {
  background(220);
  noStroke();
  
 for (let i = 0; i <  6; i ++) {
    fill(colorArray[i]);
    rect(0, height * (i / 6), width, height / 6);
  }
  
  for (let i = 5; i >= 0; i --) {
    fill(colorArray[i]);
    ellipse(width / 2, height + 75, 300 + (i * 100));
  }
  fill("gray");
  ellipse(width / 2, height + 75, 200);
}
