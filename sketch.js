let phrase = "tune into time";
let spacingX;
let spacingY = 70;
let startx = 40;
let offsetX = 0;
let speed = 1;

function setup() {
  createCanvas(windowWidth, windowHeight);
  textSize(35);
  textFont("Poetsen One");
  textStyle(BOLD);
  fill(126, 196, 128);
  noStroke();
  spacingX = textWidth(phrase) + 50;
  frameRate(60);
}

function draw() {
  background(7, 160, 86);

  offsetX = offsetX - speed;

  if (offsetX < -spacingX) {
    offsetX = 0;
  }

  for (let y = 0; y < height; y = y + spacingY) {
    let rowOffset = (y / spacingY) % 2 === 0 ? 0 : spacingX / 2;

    for (let x = startx + offsetX; x < width + spacingX; x = x + spacingX) {
      text(phrase, x + rowOffset, y);
    }
  }
}

