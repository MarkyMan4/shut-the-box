class Game {
    constructor() {
        this.die1Val = 1;
        this.die2Val = 1;
        this.selectedTiles = [];
        this.tilesShut = [];
        this.score = 45; // initial score is all tiles: 1 + 2 + ... + 9
        this.gameOver = false;
    }

    rollDice() {
        this.die1Val = Math.ceil(Math.random() * 6);
        this.die2Val = Math.ceil(Math.random() * 6);
    }

    getRollTotal() {
        return this.die1Val + this.die2Val;
    }

    selectTile(tileVal) {
        this.selectedTiles.push(tileVal);
    }

    deselectTile(tileVal) {
        let tileIndex = this.selectedTiles.indexOf(tileVal);
        this.selectedTiles.splice(tileIndex, 1);
    }

    getSelectedTileTotal() {
        return this.selectedTiles.reduce((acc, cur) => acc + cur, 0);
    }

    // shuts the selected tiles
    shutTiles() {
        this.tilesShut = this.tilesShut.concat(this.selectedTiles);
        
        // if all tiles shut, game is over
        if(this.tilesShut.length === 9) {
            this.gameOver = true;
        }

        // subtract shut tiles from the score
        this.score -= this.getSelectedTileTotal();

        this.selectedTiles = [];
    }
}
