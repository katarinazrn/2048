export default class Stats {
    constructor() {
        this.score = 0;
        this.best = sessionStorage.getItem('best') ?? 0;

        this.displayBest();
    }

    showStats() {
        this.displayScore();
        this.displayBest();
    }

    displayScore() {
        document.getElementById('score').innerText = this.score;
    }

    displayBest() {
        document.getElementById('best').innerText = this.best;
    }

    addPoints(points) {
        this.score += points;
        this.displayScore();
    }

    updateBest() {
        if (this.score > this.best) {
            this.best = this.score;
            sessionStorage.setItem('best', this.score);
        }
    }
}