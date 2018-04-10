import Unit from './tictactoe/unit';

let board = [];
let boardSize;

function init (boardSize) {
    let boardTemplate = [];
    let appNode = document.querySelector('#app');
    let boardNode = document.createElement('div');

    boardNode.setAttribute('id', 'board');

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

function getBoard() {
    return board;
}

export { init, getBoard };
