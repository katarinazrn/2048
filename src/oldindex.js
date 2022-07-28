if (process.env.NODE_ENV === 'development')
    require('../style/main.css')
else require('./style/main.css');

import EmptyFields from './EmptyFields.js';
import Field from './Field.js';
import Tile from './Tile.js';

const TILE_SIZE = 110;

let emptyFields = new EmptyFields();
const fields = [];


init();

function init() {
    initFields();
    initEmptyFields();
    initTiles();
    initEventListeners();
}

function initFields() {
    fields.splice(0, fields.length);

    let index = 0;
    for (let row = 0; row < 4; row++) {
        fields[row] = [];
        for (let column = 0; column < 4; column++) {
            fields[row][column] = new Field(row, column, index);
            index++;
        }
    }
}

function initEmptyFields() {
    emptyFields.initList();
}

function initTiles() {
    clearTiles();
    makeTile();
    makeTile();
}

function clearTiles() {
    let table = document.getElementById('main');
    table.innerHTML = '';
}

function makeTile() {
    let { row, column } = emptyFields.getRandom();
    let field = fields[row][column];

    let i = row * TILE_SIZE;
    let j = column * TILE_SIZE;
    let tile = new Tile(i, j, field.index);

    field.tile = tile;
    field.empty = false;

    tile.makeDOMElement();
    tile.addElementToDOM();

    return tile;
}


function initEventListeners() {
    document.addEventListener('keyup', handleKeyup, false);
}

function handleKeyup(event) {
    console.log('===========================')
    switch (event.keyCode) {
        case 37:
            moveLeft();
            break;
        case 38:
            moveTop();
            break;
        case 39:
            moveRight();
            break;
        case 40:
            moveBottom();
            break;
        default:
            break;
    }
}


function moveToEmptyField(currentField, nextField) {
    currentField.tile.move(nextField.row * TILE_SIZE, nextField.column * TILE_SIZE);
    nextField.tile = currentField.tile;

    emptyFields.remove({ row: nextField.row, column: nextField.column });
}

function combineTiles(currentField, nextField) {
    currentField.tile.deleteElementFromDOM();
    nextField.tile.setValue(nextField.tile.value * 2);
}

function moveTile(currentField, nextField) {
    let s = [];
    emptyFields.list.forEach(f => s.push(f.index))
    console.log('before ', ...s)

    if (nextField.empty) {
        moveToEmptyField(currentField, nextField);
    }
    else {
        combineTiles(currentField, nextField);
    }

    currentField.empty = true;
    emptyFields.add({ row: currentField.row, column: currentField.column });

    nextField.empty = false;

    s = [];
    emptyFields.list.forEach(f => s.push(f.index))
    console.log('after ', ...s)
}

function printEmpty() {
    for (let i = 0; i < 4; i++) {
        let str = i + '. ';
        for (let j = 0; j < 4; j++) {
            str += fields[j][i].empty + ' ';
        }
        console.log(str)
    }
    console.log()
}


function moveTop() {

    let moved = false;
    for (let column = 0; column < 4; column++) {
        for (let row = 1; row < 4; row++) {

            let nextRow = row - 1;
            let nextColumn = column;

            if (shouldMove(row, column, nextRow, nextColumn)) {

                let increment = 0;
                if (fields[nextRow][nextColumn].empty) increment = 2;
                moveTile(fields[row][column], fields[nextRow][nextColumn]);
                row -= increment;
                moved = true;
            }
        }
    }
    //printEmpty();
    if (moved) makeTile();
}

function shouldMove(row, column, nextRow, nextColumn) {

    const currentField = fields[row][column];
    if (currentField.empty) return false;

    let nextFieldExists = !outOfBounds(nextColumn, nextRow);
    if (!nextFieldExists) return false;

    const nextField = fields[nextRow][nextColumn];


    if (nextField.empty) return true;

    if (currentField.tile.value == nextField.tile.value) return true;

    return false;
}

function moveBottom() {
    let moved = false;

    for (let column = 0; column < 4; column++) {
        for (let row = 2; row >= 0; row--) {

            let nextRow = row + 1;
            let nextColumn = column;

            if (shouldMove(row, column, nextRow, nextColumn)) {
                let increment = 0;
                if (fields[nextRow][nextColumn].empty) increment = 2;

                moved = true;
                moveTile(fields[row][column], fields[nextRow][nextColumn]);
                row += increment;
            }
        }
    }
    if (moved) makeTile();
    // printEmpty();
}

function moveLeft() {
    let moved = false;
    for (let row = 0; row < 4; row++) {
        for (let column = 1; column < 4; column++) {

            let nextRow = row;
            let nextColumn = column - 1;

            if (shouldMove(row, column, nextRow, nextColumn)) {
                let increment = 0;
                if (fields[nextRow][nextColumn].empty) increment = 2;

                moveTile(fields[row][column], fields[nextRow][nextColumn]);
                column -= increment;
                moved = true;
            }
        }
    }
    if (moved) makeTile();
    //printEmpty();
}

function moveRight() {
    let moved = false;
    for (let row = 0; row < 4; row++) {
        for (let column = 2; column >= 0; column--) {

            let nextRow = row;
            let nextColumn = column + 1;

            if (shouldMove(row, column, nextRow, nextColumn)) {
                let increment = 0;
                if (fields[nextRow][nextColumn].empty) increment = 2;

                moveTile(fields[row][column], fields[nextRow][nextColumn]);
                column += increment;
                moved = true;
            }
        }
    }

    if (moved) makeTile();
    //printEmpty();
}

function outOfBounds(i, j) {
    if (i < 0 || i > 3 || j < 0 || j > 3) return true;
    else return false;
}
