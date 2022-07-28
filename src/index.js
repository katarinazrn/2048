if (process.env.NODE_ENV === 'development')
    require('../style/main.css')
else require('/style/main.css');


import EmptyFields from './EmptyFields.js';
import Field from './Field.js';
import MoveHandler from './MoveHandle.js';
import Stats from './Stats.js';
import Tile from './Tile.js';

let tile_size;

if (screen.width > 450)
    tile_size = 110
else {
    tile_size = screen.width / 4 - 16 + 10;
}

const emptyFields = new EmptyFields();
const stats = new Stats();
const moveHandler = new MoveHandler();

const fields = [];

let disabled = false;

init();

function init() {
    initFields();
    initEmptyFields();
    initTiles();
    initEventListeners();
    moveHandler.stats = stats;
    moveHandler.tile_size = tile_size;
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

    moveHandler.fields = fields;
}

function initEmptyFields() {
    emptyFields.initList();
    moveHandler.emptyFields = emptyFields;
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

    let i = row * tile_size;
    let j = column * tile_size;
    let tile = new Tile(i, j, field.index);

    field.tile = tile;
    field.empty = false;

    tile.makeDOMElement();

    return tile;
}

function initEventListeners() {

    document.addEventListener('keyup', handleKeyup);

    document.addEventListener('touchstart', setStartPosition);
    document.addEventListener('touchend', handleTouchEnd)

    let newGameButtons = document.getElementsByClassName('new-game')
    for (const button of newGameButtons) {
        button.addEventListener('click', startNewGame);
    }
}

function handleKeyup(event) {

    if (disabled) return;
    let moved;

    switch (event.keyCode) {
        case 37:
            moved = moveHandler.moveLeft();
            break;
        case 38:
            moved = moveHandler.moveTop();
            break;
        case 39:
            moved = moveHandler.moveRight();
            break;
        case 40:
            moved = moveHandler.moveBottom();
            break;
        default:
            break;
    }

    if (moved) makeTile();
    checkIfEnd();
}


function checkIfEnd() {
    if (emptyFields.list.length == 0 && !moveHandler.canMove()) {
        showEndScreen(false);
        stats.updateBest();
    }
}


function startNewGame() {

    document.getElementById('won').style.display = 'none';
    disabled = false;

    stats.updateBest();
    clearTiles();
    emptyFields.initList();
    stats.score = 0;
    stats.showStats();
    init();
}

moveHandler.showEndScreen = showEndScreen;

function showEndScreen(won) {

    disableKeyEvents();

    setTimeout(() => {
        let message;
        if (won) message = 'You Won!';
        else message = 'Game Over';

        document.getElementById('message').innerHTML = message;
        document.getElementById('won').style.display = 'flex';
    }, 400)
}


function disableKeyEvents() {
    disabled = true;
}

let touchStartPosition;

function setStartPosition(e) {
    touchStartPosition = getCoordinates(e);
}

function handleTouchEnd(e) {
    if (disabled) return;

    let touchEndPostion = getCoordinates(e);

    let moved;
    let horizontalDiff = touchStartPosition.x - touchEndPostion.x;
    let verticalDiff = touchStartPosition.y - touchEndPostion.y;

    if (horizontalDiff < 0 && Math.abs(horizontalDiff) > Math.abs(verticalDiff)) {
        moved = moveHandler.moveRight();
    }
    else if (horizontalDiff >= 0 && Math.abs(horizontalDiff) > Math.abs(verticalDiff)) {
        moved = moveHandler.moveLeft();
    }
    else if (verticalDiff >= 0 && Math.abs(horizontalDiff) <= Math.abs(verticalDiff)) {
        moved = moveHandler.moveTop();
    }
    else if (verticalDiff < 0 && Math.abs(horizontalDiff) <= Math.abs(verticalDiff)) {
        moved = moveHandler.moveBottom();
    }

    if (moved) makeTile();
    checkIfEnd();
}


function getCoordinates(e) {
    let evt = !e.originalEvent ? e : e.originalEvent;
    let touch = evt.touches[0] || evt.changedTouches[0];
    return { x: touch.pageX, y: touch.pageY }
}