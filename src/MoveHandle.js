const TILE_SIZE = 110;

export default class MoveHandler {


    moveTile(currentField, nextField) {

        if (nextField.empty) {
            this.moveToEmptyField(currentField, nextField);
        }
        else {
            this.combineTiles(currentField, nextField);
        }

        currentField.empty = true;
        this.emptyFields.add({ row: currentField.row, column: currentField.column });
        nextField.empty = false;
    }


    moveTop() {

        let moved = false;

        for (let column = 0; column < 4; column++) {
            for (let row = 1; row < 4; row++) {

                let nextRow = row - 1;
                let nextColumn = column;

                if (this.shouldMove(row, column, nextRow, nextColumn)) {

                    const nextFieldShouldBeSame = this.fields[nextRow][nextColumn].empty;

                    this.moveTile(this.fields[row][column], this.fields[nextRow][nextColumn]);

                    const shifStartRow = row;
                    for (let i = shifStartRow; i < 3; i++) {
                        if (!this.fields[i + 1][column].empty)
                            this.moveTile(this.fields[i + 1][column], this.fields[i][column]);
                    }

                    if (nextFieldShouldBeSame) row -= 2;
                    moved = true;
                }
            }
        }

        return moved;
    }

    moveRight() {
        let moved = false;
        for (let row = 0; row < 4; row++) {
            for (let column = 2; column >= 0; column--) {

                let nextRow = row;
                let nextColumn = column + 1;

                if (this.shouldMove(row, column, nextRow, nextColumn)) {

                    const nextFieldShouldBeSame = this.fields[nextRow][nextColumn].empty;

                    this.moveTile(this.fields[row][column], this.fields[nextRow][nextColumn]);

                    const shifStartColumn = column;

                    for (let i = shifStartColumn; i >= 1; i--) {
                        if (!this.fields[row][i - 1].empty)
                            this.moveTile(this.fields[row][i - 1], this.fields[row][i]);
                    }

                    if (nextFieldShouldBeSame) column += 2;
                    moved = true;
                }
            }
        }

        return moved;
    }

    moveBottom() {
        let moved = false;
        for (let column = 0; column < 4; column++) {
            for (let row = 2; row >= 0; row--) {

                let nextRow = row + 1;
                let nextColumn = column;

                if (this.shouldMove(row, column, nextRow, nextColumn)) {

                    const nextFieldShouldBeSame = this.fields[nextRow][nextColumn].empty;

                    this.moveTile(this.fields[row][column], this.fields[nextRow][nextColumn]);

                    const shifStartRow = row;
                    for (let i = shifStartRow; i > 1; i--) {
                        if (!this.fields[i - 1][column].empty)
                            this.moveTile(this.fields[i - 1][column], this.fields[i][column]);
                    }

                    if (nextFieldShouldBeSame) row += 2;
                    moved = true;
                }
            }
        }
        return moved;
    }

    moveLeft() {
        let moved = false;
        for (let row = 0; row < 4; row++) {
            for (let column = 1; column < 4; column++) {

                let nextRow = row;
                let nextColumn = column - 1;

                if (this.shouldMove(row, column, nextRow, nextColumn)) {

                    const nextFieldShouldBeSame = this.fields[nextRow][nextColumn].empty;

                    this.moveTile(this.fields[row][column], this.fields[nextRow][nextColumn]);

                    const shifStartColumn = column;
                    for (let i = shifStartColumn; i < 3; i++) {
                        if (!this.fields[row][i + 1].empty)
                            this.moveTile(this.fields[row][i + 1], this.fields[row][i]);
                    }

                    if (nextFieldShouldBeSame) column -= 2;
                    moved = true;
                }
            }
        }

        return moved;
    }

    canMove() {
        for (let row = 0; row < 4; row++) {
            for (let column = 0; column < 4; column++) {
                let value = this.fields[row][column].tile.value;
                let topNeighbour, rightNeighbour, bottomNeighbour, leftNeighbour;

                if (row - 1 >= 0) topNeighbour = this.fields[row - 1][column];
                if (column + 1 < 4) rightNeighbour = this.fields[row][column + 1];
                if (row + 1 < 4) bottomNeighbour = this.fields[row + 1][column];
                if (column - 1 >= 0) leftNeighbour = this.fields[row][column - 1];

                if (topNeighbour && topNeighbour.tile.value == value) return true;
                if (rightNeighbour && rightNeighbour.tile.value == value) return true;
                if (bottomNeighbour && bottomNeighbour.tile.value == value) return true;
                if (leftNeighbour && leftNeighbour.tile.value == value) return true;
            }
        }

        return false;
    }

    shouldMove(row, column, nextRow, nextColumn) {

        const currentField = this.fields[row][column];
        if (currentField.empty) return false;

        let nextFieldExists = !this.outOfBounds(nextColumn, nextRow);
        if (!nextFieldExists) return false;

        const nextField = this.fields[nextRow][nextColumn];


        if (nextField.empty) return true;

        if (currentField.tile.value == nextField.tile.value) return true;

        return false;
    }

    outOfBounds(i, j) {
        if (i < 0 || i > 3 || j < 0 || j > 3) return true;
        else return false;
    }

    moveToEmptyField(currentField, nextField) {
        currentField.tile.move(nextField.row * TILE_SIZE, nextField.column * TILE_SIZE);
        nextField.tile = currentField.tile;

        this.emptyFields.remove({ row: nextField.row, column: nextField.column });
    }

    combineTiles(currentField, nextField) {
        currentField.tile.deleteElementFromDOM();
        let value = nextField.tile.value * 2;
        nextField.tile.setValue(value);

        this.stats.addPoints(value);

        if (value == 2048) {
            showEndScreen(true);
        }
    }

}

