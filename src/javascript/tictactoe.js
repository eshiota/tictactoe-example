import Unit from './tictactoe/unit';

let board = [];
let boardSize;
let turn = 1;

function init (boardSize) {
    let boardTemplate = [];
    let appNode = document.querySelector('#app');
    let boardNode = document.createElement('div');

    appNode.innerHTML = '';

    boardNode.setAttribute('id', 'board');
    boardNode.addEventListener('click', onDelegatedButtonClick);

    for (var i = 0; i < boardSize; i++) {
        board[i] = [];

        let boardRowNode = document.createElement('div');
        boardRowNode.classList.add('board-row');

        boardNode.appendChild(boardRowNode);

        for (var j = 0; j < boardSize; j++) {
            let unitInstance = new Unit({ x: i, y: j });

            board[i][j] = unitInstance;

            boardRowNode.appendChild(unitInstance.getNode());
        }
    }

    appNode.appendChild(boardNode);
}

function getBoard () {
    return board;
}

function onDelegatedButtonClick (evt) {
    let buttonNode = evt.target;

    if (buttonNode.tagName.toLowerCase() === 'button') {
        if (turn === 1) {
            turn = 2;
        } else {
            turn = 1;
        }

        board[parseInt(buttonNode.dataset.x, 10)][parseInt(buttonNode.dataset.y)].setValue(turn);
    }
}

export { init, getBoard };
