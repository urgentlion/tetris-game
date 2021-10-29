const GAME_CLOCK = 1000;
const BLOCK_SIDE_LENGTH = 30;
const ROWS = 20;
const COLS = 10;
const SCORE_WORTH = 10;

const TETROMINOES = [
    [

    ],
    
    [
        [0,0,0,0],
        [1,1,1,1],
        [0,0,0,0],
        [0,0,0,0]
    ],

    [
        [2,0,0],
        [2,2,2],
        [0,0,0]
    ],

    [
        [0,0,3],
        [3,3,3],
        [0,0,0]
    ],

    [
        [4,4],
        [4,4]
    ],

    [
        [0,5,5],
        [5,5,0],
        [0,0,0]
    ],

    [
        [6,6,0],
        [0,6,6],
        [0,0,0]
    ],

    [
        [0,7,0],
        [7,7,7],
        [0,0,0]
    ],
];

const COLORS = [
    '#000000',
    '#ff0000',
    '#00ff00',
    '#0000ff',
    '#ffff00',
    '#00ffff',
    '#10ff01',
    '#f000ff'
];