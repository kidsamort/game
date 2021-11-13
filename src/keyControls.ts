
export class KeyControls {
  keysList: string[];
  keys: any;
  constructor( keysList = [`KeyW`, `KeyA`,'KeyW', `KeyS`, `KeyD`] ) {
    this.keysList = keysList;
    this.keys = {}
    addEventListener('keydown', (e) => this.changeState(e));
    addEventListener('keyup', (e) => this.changeState(e));
  }
  changeState(e: KeyboardEvent) {
    if (!this.keysList.includes(e.code)) return;
    this.keys[e.code] = e.type === 'keydown' ? true : false;
    // console.log(e.code);
  }
}