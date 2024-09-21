class Grid {
  constructor() {
    this.grid = [];
    for (let i = 0; i < cols; i++) {
      this.grid[i] = [];
      for (let j = 0; j < rows; j++) {
        this.grid[i][j] = floor(random(2));
      }
    }
  }

  display() {
    for (let i = 0; i < cols; i++) {
      for (let j = 0; j < rows; j++) {
        if (this.grid[i][j] == 0) {
          if (play) {
            fill(255);
          } else {
            fill(100);
          }
        } else {
          fill(hueValue, 255, 255);
        }

        noStroke();
        rect(i * size, j * size, size, size);
      }
    }
  }

  update() {
    let nextGen = [];
    for (let i = 0; i < cols; i++) {
      nextGen[i] = [];
      for (let j = 0; j < rows; j++) {
        let n = this.neighboringStates(this.grid, i, j);
        if (this.grid[i][j] == 1 && n < 2) {
          nextGen[i][j] = 0;
        } else if (this.grid[i][j] == 1 && (n == 2 || n == 3)) {
          nextGen[i][j] = 1;
        } else if (this.grid[i][j] == 1 && n > 3) {
          nextGen[i][j] = 0;
        } else if (this.grid[i][j] == 0 && n == 3) {
          nextGen[i][j] = 1;
        } else {
          nextGen[i][j] = this.grid[i][j];
        }
      }
    }

    this.grid = nextGen;
  }

  neighboringStates(grid, x, y) {
    let sum = 0;
    for (let i = -1; i < 2; i++) {
      for (let j = -1; j < 2; j++) {
        let xIndex = (x + i + cols) % cols;
        let yIndex = (y + j + rows) % rows;
        sum += grid[xIndex][yIndex];
      }
    }
    sum -= grid[x][y];
    return sum;
  }

  resetGrid() {
    for (let i = 0; i < cols; i++) {
      for (let j = 0; j < rows; j++) {
        this.grid[i][j] = 0;
      }
    }
  }

  randomGrid() {
    for (let i = 0; i < cols; i++) {
      for (let j = 0; j < rows; j++) {
        this.grid[i][j] = floor(random(2));
      }
    }
  }
}
