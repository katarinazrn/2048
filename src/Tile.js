import { COLORS } from "./colors";

export default class Tile {
    constructor(i, j, index) {
        this.i = i;
        this.j = j;
        this.index = index;
        this.value = 2;
    }

    setValue(value) {
        this.value = value;
        this.element.innerText = value;
        this.colorElement();
    }

    move(newI, newJ) {
        this.i = newI;
        this.j = newJ;

        this.positionElement();

    }

    positionElement() {
        this.element.style.left = `${this.j}px`;
        this.element.style.top = `${this.i}px`;
    }

    colorElement() {
        let colors = COLORS[this.value];
        this.element.style.backgroundColor = colors[0];
        this.element.style.color = colors[1];
    }

    makeDOMElement() {
        let element = document.createElement('div');
        element.classList.add('number');
        element.classList.add('tile');
        element.classList.add('animate');
        element.textContent = this.value;
        element.id = `tile-${this.index}`;

        this.element = element;

        this.colorElement();
        this.positionElement();

        document.getElementById('main').appendChild(this.element);
    }

    deleteElementFromDOM() {
        this.element.remove();
    }

}