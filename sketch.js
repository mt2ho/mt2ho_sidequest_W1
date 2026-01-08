function setup() {
  createCanvas(400, 400);
  textSize(24); // size of the text
  textAlign(CENTER); // center the text
}

function draw() {
  background(204, 204, 255);

  fill(0); // text color (black)
  text("Is This Seat Taken?!", width / 2, height / 2);
}
