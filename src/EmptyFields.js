export default class EmptyFields {

    constructor() {
        this.list = [];
    }

    initList() {
        this.list = [];

        for (let row = 0; row < 4; row++) {
            for (let column = 0; column < 4; column++) {
                this.list.push({ row, column });
            }
        }
    }

    add(field) {
        this.list.push(field);
    }

    remove(field) {
        this.list = this.list.filter(f => !(f.column == field.column && f.row == field.row));
    }

    getRandom() {
        let randomIndex = Math.floor(Math.random() * this.list.length);
        let randomField = this.list[randomIndex];
        let temp = { ...randomField };
        this.remove(randomField);
        return temp;
    }

}