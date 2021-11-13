export class KeyControls {
    constructor(keysList = [`KeyW`, `KeyA`, 'KeyW', `KeyS`, `KeyD`]) {
        this.keysList = keysList;
        this.keys = {};
        addEventListener('keydown', (e) => this.changeState(e));
        addEventListener('keyup', (e) => this.changeState(e));
    }
    changeState(e) {
        if (!this.keysList.includes(e.code))
            return;
        this.keys[e.code] = e.type === 'keydown' ? true : false;
    }
}
