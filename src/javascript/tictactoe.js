(function () {

    var board = [];
    var boardSize = 3;

    function init () {
        for (var i = 0; i < boardSize; i++) {
            board[i] = [];

            for (var j = 0; j < boardSize; j++) {
                board[i][j] = 0;
            }
        }
    }

    function setBoardPositionValue (x, y, value) {
        board[x][y] = value;
    }

    function getBoard() {
        return board;
    }

    window.TicTacToe = window.TicTacToe ? window.TicTacToe : {};

    Object.assign(window.TicTacToe, {
        init: init,
        setBoardPositionValue: setBoardPositionValue,
        getBoard: getBoard
    });

})();
