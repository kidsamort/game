import { Layer } from './layer.js';
import { Loop } from './loop.js';
import { KeyControls } from './keyControls.js';
class App {
    constructor(container) {
        this.layer = new Layer(container);
        this.keyboard = new KeyControls(['KeyA', 'KeyW', 'KeyS', 'KeyD', 'Space']);
        this.keys = this.keyboard.keys;
        this.rect = {
            x: 0,
            y: 0,
            w: 100,
            h: 100,
            vx: 200,
            vy: 0,
            minH: 32,
            maxH: 100,
            isAir: true,
            isCrouch: false,
            color: 'orange',
            gravity: 0,
        };
        new Loop(this.update.bind(this), this.display.bind(this));
    }
    update(correction) {
        this.move(correction);
    }
    display() {
        this.layer.context.clearRect(0, 0, this.layer.w, this.layer.h);
        this.layer.context.fillStyle = this.rect.color;
        this.layer.context.fillRect(this.rect.x, this.rect.y, this.rect.w, this.rect.h);
    }
    move(correction) {
        if (this.keys.KeyS && this.rect.h > this.rect.minH) {
            this.rect.h -= 3;
            this.rect.y += 3;
            this.rect.isCrouch = true;
        }
        if (!this.keys.KeyS && this.rect.h < this.rect.maxH) {
        }
        if (this.keys.KeyD) {
            this.rect.x += this.rect.vx * correction;
        }
        if (this.keys.KeyA) {
            this.rect.x -= this.rect.vx * correction;
        }
        if (this.keys.Space && !this.rect.isAir && !this.rect.isCrouch) {
        }
        if (this.rect.isAir) {
            this.rect.vy += this.rect.gravity * correction;
        }
        else {
            this.rect.vy = 0;
        }
        this.rect.y += this.rect.vy;
        if (this.rect.y + this.rect.h >= this.layer.h) {
            this.rect.y = this.layer.h - this.rect.h;
            this.rect.isAir = false;
        }
    }
    flyRect(correction) {
        if ((this.rect.x <= 0 && this.rect.vx < 0) ||
            (this.rect.x + this.rect.w > this.layer.w && this.rect.vx > 0)) {
            this.rect.vx = -this.rect.vx;
        }
        if ((this.rect.y <= 0 && this.rect.vy < 0) ||
            (this.rect.y + this.rect.h > this.layer.h && this.rect.vy > 0)) {
            this.rect.vy = -this.rect.vy;
        }
        this.rect.x += this.rect.vx * correction;
        this.rect.y += this.rect.vy * correction;
    }
}
onload = () => {
    new App(document.body);
};
