const die1 = document.getElementById('die1');
const die2 = document.getElementById('die2');
const diceDisplay = document.getElementById('dice-area');
const tileDisplay = document.getElementById('tiles');
const messageDisplay = document.getElementById('message-display');
const rollBtn = document.getElementById('roll-btn');
const shutBtn = document.getElementById('shut-btn');

let game = new Game();

function renderDice() {
    let diceHtml = '';

    diceHtml += `<div class="die">${game.die1.val}</div>`;
    diceHtml += `<div class="die">${game.die2.val}</div>`;

    diceDisplay.innerHTML = diceHtml;
}

function renderTiles() {
    let tileHtml = '';

    for(let i = 1; i < 10; i++) {
        if(game.tilesShut.includes(i)) {
            tileHtml += `<div class="tile closed-tile">${i}</div>`
        }
        else {
            tileHtml += `<div id="tile${i}" class="tile open-tile" onclick="tileClicked()">${i}</div>`
        }
    }

    tileDisplay.innerHTML = tileHtml;
}

function tileClicked() {
    let tileVal = parseInt(this.event.target.innerText);

    if(game.selectedTiles.includes(tileVal)) {
        document.getElementById(`tile${tileVal}`).classList.remove('selected-tile');
        game.deselectTile(tileVal);
    }
    else {
        document.getElementById(`tile${tileVal}`).classList.add('selected-tile');
        game.selectTile(tileVal);
    }
}


/*

button event listeners

*/

rollBtn.onclick = () => {
    game.rollDice();
    renderDice();

    // disable button after roll, enable shut button so user can only roll once
    rollBtn.disabled = true;
    shutBtn.disabled = false;
}

// checks if the sum of the selected tiles is equal to the dice roll
// if not, tiles cannot be shut
shutBtn.onclick = () => {
    let rollTotal = game.getRollTotal();
    let selectedTotal = game.getSelectedTileTotal();

    if(rollTotal !== selectedTotal) {
        messageDisplay.innerHTML = `selected total must equal ${rollTotal}`;
        return;
    }

    game.shutTiles();
    renderTiles();

    // enable roll button and disable shut button so user can't shut more than once per roll
    rollBtn.disabled = false;
    shutBtn.disabled = true;
}

renderDice();
renderTiles();
