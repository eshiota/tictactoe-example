let boardInfo = {};
let boardLength;

// [
//     [0, 0, 0, 0, 0],
//     [0, 0, 1, 0, 0],
//     [2, 0, 0, 0, 0],
//     [2, 0, 0, 0, 0],
//     [2, 0, 0, 0, 0]
// ]

// 4 + 0 = boardLength - 1
// 3 + 1
// 2 + 2
// 1 + 3
// 0 + 4

// boardInfo.l1 += 1;
// boardInfo.c2 += 1;

// boardInfo.l2 -= 1;
// boardInfo.c0 -= 1;
// boardInfo.d1 -= 1;

function setBoardLength (length) {
    if (boardLength) {
        console.warn('Overriding board length');
    }

    boardLength = length;
}

function hasWinner (x, y, value) {
    if (!boardLength) {
        console.error('Board length is not set');
        return;
    }

    // store correspondent line information
    if (value === 1) {
        boardInfo[`l{$x}`] += 1;
    } else {
        boardInfo[`l{$x}`] -= 1;
    }

    // store correspondent column information
    if (value === 1) {
        boardInfo[`c{$y}`] += 1;
    } else {
        boardInfo[`c{$y}`] -= 1;
    }

    // store correspondent diagonal information
    if (x === y) {
        if (value === 1) {
            boardInfo[`d1`] += 1;
        } else {
            boardInfo[`d1`] -= 1;
        }
    }

    if (x + y === boardLength - 1) {
        if (value === 1) {
            boardInfo[`d2`] += 1;
        } else {
            boardInfo[`d2`] -= 1;
        }
    }
}

export default { setBoardLength, hasWinner }
