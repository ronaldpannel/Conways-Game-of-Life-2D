let canvas;
let cols;
let rows;
let size = 5;
let grid;
let play = true;
let hueValue = 0;

function setup() {
  canvas = createCanvas(400, 400);
  canvas.parent("container");
  colorMode(HSB, 255);
  cols = width / size;
  rows = height / size;

  grid = new Grid();

  let playButton = createButton("Play");
  playButton.parent("container");
  playButton.position(10, height + 230);
  playButton.mousePressed(playGrid);

  let resetButton = createButton("Reset");
  resetButton.parent("container");
  resetButton.position(85, height + 230);
  resetButton.mousePressed(resetGrid);

  let randomButton = createButton("Random");
  randomButton.parent("container");
  randomButton.position(180, height + 230);
  randomButton.mousePressed(randomGrid);
}

function draw() {
  background(220);
  if (play == true) {
    grid.update();
  }

  grid.display();
}

function playGrid() {
  play = !play;
}

function resetGrid() {
  grid.resetGrid();
}

function randomGrid() {
  grid.randomGrid();
}

function mouseDragged() {
  let margin = 2;
  let x = floor(mouseX / size);
  let y = floor(mouseY / size);

  for (let i = -margin; i < margin; i++) {
    for (let j = -margin; j < margin; j++) {
      grid.grid[x + i][y + j] = 1;
    }
  }

  hueValue += 1;
  if (hueValue > 255) {
    hueValue = 0;
  }
}

// function windowResized() {
//   resizeCanvas(400, 400);
// }
