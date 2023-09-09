class Game {
    constructor() {
        this.die1 = new Die();
        this.die2 = new Die();
        this.selectedTiles = [];
        this.tilesShut = [];
        this.gameOver = false;
    }

    rollDice() {
        this.die1.roll();
        this.die2.roll();
    }

    getRollTotal() {
        return this.die1.val + this.die2.val;
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

        this.selectedTiles = [];
    }
}
