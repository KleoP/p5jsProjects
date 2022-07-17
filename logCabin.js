let quiltSizeW = 1000;
let quiltSizeL = 1000;
let quiltSquare = 500;
let stripWidth = 50;

let xR, yR, xU, yU, xL, yL, xD, yD, s;

function setup() {
  createCanvas(quiltSizeW, quiltSizeL);
  noLoop();
}

function draw() {
  background(255); 
  
  logCabin(quiltSquare / 2, quiltSquare /2);
  logCabin(quiltSquare * (3 / 2), quiltSquare / 2); 
  logCabin(quiltSquare * (3 / 2), quiltSquare * (3 / 2)); 
  logCabin(quiltSquare / 2, quiltSquare * (3 / 2)); 
  
  ripstop();
  // fibers2();
}