function setup() {
  createCanvas(1000, 1000);
}

function draw() {
  background(220);
  noStroke();
  
  fill("red");
  rect(0, 0, width, height / 6);
  
  fill("orange");
  rect(0, height / 6, width, height / 6);

  fill("yellow");
  rect(0,  height / 3, width, height / 6);
  
  fill("green");
  rect(0,  height / 2, width, height / 6);

  fill("blue");
  rect(0,  height * (2 / 3), width, height / 6);
  
  fill("purple");
  rect(0,  height * (5 / 6), width, height / 6);
}
