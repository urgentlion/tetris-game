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
};