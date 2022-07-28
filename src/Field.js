export default class Field {

    constructor(row, column, index) {
        this.row = row;
        this.column = column;
        this.index = index;
        this.tile = null;
        this.empty = true;
    }

}