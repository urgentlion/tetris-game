//core logic of game

class GameModel {
    constructor(context) {
        this.context = context; //grab 2d information
        this.fallingPiece = null;
        this.grid = this.makeStartingGrid();
    }

    makeStartingGrid() {
        let grid = [];
        for(let r = 0; r < ROWS; r++) {
            grid.push([]);

            for(let c = 0; c < COLS; c++) {
                grid[grid.length - 1].push(0);
            }
        }
        return grid;
    }

    collision(x, y) {
        const shape = this.fallingPiece.shape;
        const n = shape.length;
        //does piece exist, if so, what's its shape
        for(let i = 0; i < n; i++) {
            for(let j = 0; j < n; j++) {
                if(shape[i][j] > 0) {
                    let p = x + j;
                    let q = y + i;

                    //test for piece in bounds
                    if(p >= 0 && p < COLS && q < ROWS) {
                        //if true the current grid is not black anymore
                       if(this.grid[q][p] > 0) {
                           return true; //if true has collided with another shape
                       } 
                    } else {
                        return true; //if true here, then the not black grid (your shape) but is out of bounds
                    }
                }
            }
        }
        return false;
    }

    //color whatever exists in the model for the DOM
    renderGameState() {
        for(let i = 0; i < this.grid.length; i++) {
            for(let j = 0; j < this.grid[i].length; j++) {
                let cell = this.grid[i][j];
                this.context.fillStyle = COLORS[cell];
                this.context.fillRect(j, i, 1, 1);
            }
        }
        //bring the piece into existance
        if(this.fallingPiece !== null) {
            this.fallingPiece.renderPiece();
        }
    }
};