(function () {

    function checkVictoryConditions (board) {
        return checkRowsVictoryConditions(board) ||
               checkColumnsVictoryConditions(board) ||
               checkDiagonalsVictoryConditions(board);
    }

    function checkRowsVictoryConditions(board) {
        for (var i = 0; i < boardSize; i++) {
            let result = checkLineVictoryCondition(board[i]);

            if (result > 0) {
                return result;
            }
        }

        return 0;
    }

    function checkColumnsVictoryConditions(board) {
        for (var j = 0; j < boardSize; j++) {
            let myColumn = [];

            for (var i = 0; i < boardSize; i++) {
                myColumn.push(board[i][j]);
            }

            let result = checkLineVictoryCondition(myColumn);

            if (result > 0) {
                return result;
            }
        }

        return 0;
    }

    function checkDiagonalsVictoryConditions(board) {
        let myDiagonal = [];

        for (var i = 0; i < boardSize; i++) {
            myDiagonal.push(board[i][i]);
        }

        let result = checkLineVictoryCondition(myDiagonal);

        if (result > 0) {
            return result;
        }

        myDiagonal = [];

        for (var i = 0, j = boardSize - 1; i < boardSize; i++) {
            myDiagonal.push(board[i][j]);
            j--;
        }

        result = checkLineVictoryCondition(myDiagonal);

        if (result > 0) {
            return result;
        }

        return 0;
    }

    /**
     * Returns the winning number, or 0 if there's no winner
     *
     * @param {Array} line - An array of Numbers
     *
     * @return {Number} - 0 or the winning Number
     */
    function checkLineVictoryCondition(line) {
        let value = 0;

        console.log(line);

        for (var i = 0; i < line.length; i++) {
            value = line[i];

            if (value === 0) {
                return 0;
            }

            if (i > 0 && value !== line[i - 1]) {
                return 0;
            }
        }

        return value;
    }

    window.TicTacToe = window.TicTacToe ? window.TicTacToe : {};

    window.TicTacToe.VictoryChecker = {
        checkVictoryConditions: checkVictoryConditions
    };

})();
