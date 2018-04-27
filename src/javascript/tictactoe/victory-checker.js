let boardInfo = {};
let boardLength;

function setBoardLength (length) {
    if (boardLength) {
        console.warn('Overriding board length');
    }

    boardInfo = {};

    for (var i = 0; i < length; i++) {
        boardInfo[`l${i}`] = 0;
        boardInfo[`c${i}`] = 0;
    }

    boardInfo['d1'] = boardInfo['d2'] = 0;

    boardLength = length;
}

function hasWinner (x, y, value) {
    if (!boardLength) {
        console.error('Board length is not set');
        return;
    }

    let operation = value === 1 ? 1 : -1;

    // store correspondent line information
    boardInfo[`l${x}`] += operation;

    if (boardInfo[`l${x}`] === boardLength) {
        return 1;
    }

    if (boardInfo[`l${x}`] === -boardLength) {
        return 2;
    }

    // store correspondent column information
    boardInfo[`c${y}`] += operation;

    if (boardInfo[`c${y}`] === boardLength) {
        return 1;
    }

    if (boardInfo[`c${y}`] === -boardLength) {
        return 2;
    }

    // store correspondent diagonal information
    if (x === y) {
        boardInfo[`d1`] += operation;
    }

    if (boardInfo['d1'] === boardLength) {
        return 1;
    }

    if (boardInfo['d1'] === -boardLength) {
        return 2;
    }

    if (x + y === boardLength - 1) {
        boardInfo[`d2`] += operation;
    }

    if (boardInfo['d2'] === boardLength) {
        return 1;
    }

    if (boardInfo['d2'] === -boardLength) {
        return 2;
    }

    return false;
}

export default { setBoardLength, hasWinner }
