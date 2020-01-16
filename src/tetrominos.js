export const TETROMINOS = {
    0: { shape: [[0]], color: '0, 0, 0' },
    I: {
        shape: [
            [0, 'I', 0, 0],
            [0, 'I', 0, 0],
            [0, 'I', 0, 0],
            [0, 'I', 0, 0]
        ],
        color: '109, 238, 241',
    },
    L: {
        shape: [
            [0, 'L', 0],
            [0, 'L', 0],
            [0, 'L', 'L']
        ],
        color: '225, 135, 50',
    },
    J: {
        shape: [
            [0, 'J', 0],
            [0, 'J', 0],
            ['J', 'J', 0]
        ],
        color: '0, 33, 232',
    },
    O: {
        shape: [
            ['O', 'O'],
            ['O', 'O']
        ],
        color: '247, 229, 78',
    },
    S: {
        shape: [
            [0, 'S', 'S'],
            ['S', 'S', 0],
            [0, 0, 0]
        ],
        color: '111, 236, 72',
    },
    Z: {
        shape: [
            ['Z', 'Z', 0],
            [0, 'Z', 'Z'],
            [0, 0, 0]
        ],
        color: '221, 41, 33',
    },
    T: {
        shape: [
            ['T', 'T', 'T'],
            [0, 'T', 0],
            [0, 0, 0]
        ],
        color: '146, 45, 232',
    }
}

export const randomTetromino = () => {
    const tetrominos = "ILJOSZT";
    const randTetromino = tetrominos[Math.floor(Math.random() * tetrominos.length)];
    return TETROMINOS[randTetromino];
}