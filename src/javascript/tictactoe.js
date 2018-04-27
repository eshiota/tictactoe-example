import Unit from './tictactoe/unit';
import victoryChecker from './tictactoe/victory-checker';

let appNode = document.querySelector('#app');

let board = [];
let boardLength;
let turn = 1;

let controlsTemplate = `
    <label class="controls-size hidden">
        Board size:
        <input type="number" class="controls-size-input" />
    </label>
    <button class="controls-play-again-bt hidden">Play again</button>
`;

function init (length) {
    let boardTemplate = [];
    let boardNode = document.createElement('div');
    let controlsNode = document.createElement('div');

    boardLength = length;
    turn = 1;

    appNode.innerHTML = '';

    controlsNode.innerHTML = controlsTemplate;

    boardNode.setAttribute('id', 'board');
    boardNode.addEventListener('click', onDelegatedButtonClick);

    for (var i = 0; i < boardLength; i++) {
        board[i] = [];

        let boardRowNode = document.createElement('div');
        boardRowNode.classList.add('board-row');

        boardNode.appendChild(boardRowNode);

        for (var j = 0; j < boardLength; j++) {
            let unitInstance = new Unit({ x: i, y: j });

            board[i][j] = unitInstance;

            boardRowNode.appendChild(unitInstance.getNode());
        }
    }

    appNode.appendChild(boardNode);
    appNode.appendChild(controlsNode);

    appNode.querySelector('.controls-play-again-bt').addEventListener('click', onPlayAgainButtonClick);

    victoryChecker.setBoardLength(boardLength);
}

function getBoard () {
    return board;
}

function renderGameOver (turn) {
    setTimeout(() => {
        alert(`Player ${turn} wins!`);
    }, 50);

    appNode.querySelector('.controls-play-again-bt').classList.remove('hidden');
    appNode.querySelector('.controls-size').classList.remove('hidden');

    for (var i = 0; i < boardLength; i++) {
        for (var j = 0; j < boardLength; j++) {
            board[i][j].disable();
        }
    }
}

function onDelegatedButtonClick (evt) {
    let buttonNode = evt.target;
    let x = parseInt(buttonNode.dataset.x, 10);
    let y = parseInt(buttonNode.dataset.y, 10);

    if (buttonNode.tagName.toLowerCase() === 'button') {
        board[x][y].setValue(turn);

        if (victoryChecker.hasWinner(x, y, turn)) {
            renderGameOver(turn);
        }

        turn = turn === 1 ? 2 : 1;
    }
}

function onPlayAgainButtonClick (evt) {
    let value = parseInt(appNode.querySelector('.controls-size-input').value, 10);

    init(value > 2 ? value : 3);
}

export { init, getBoard };
