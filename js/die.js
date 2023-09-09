class Die {
    constructor() {
        this.val = 1;
    }

    roll() {
        this.val = Math.ceil(Math.random() * 6);
    }
}
