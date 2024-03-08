import Controls from "./Controls";

class Car {
    x: number;
    y: number;
    width: number;
    height: number;

    speed: number;
    acceleration: number;
    max_speed: number;
    friction: number;
    angle: number;

    controls: Controls;

    constructor(p: { x: number; y: number; width: number; height: number }) {
        this.x = p.x;
        this.y = p.y;
        this.width = p.width;
        this.height = p.height;

        this.speed = 0;
        this.acceleration = 0.2;
        this.max_speed = 3;
        this.friction = 0.05;
        this.angle = 0;

        this.controls = new Controls();
    }

    update() {
        this.move();
    }

    private move() {
        if (this.controls.forword) {
            this.speed += this.acceleration;
        }
        if (this.controls.reverse) {
            this.speed -= this.acceleration;
        }

        if (this.speed > this.max_speed) {
            this.speed = this.max_speed;
        }
        if (this.speed < -this.max_speed / 2) {
            this.speed = -this.max_speed / 2;
        }

        if (this.speed > 0) {
            this.speed -= this.friction;
        }
        if (this.speed < 0) {
            this.speed += this.friction;
        }

        if (Math.abs(this.speed) < this.friction) {
            this.speed = 0;
        }

        if (this.speed !== 0) {
            const flip = this.speed > 0 ? 1 : -1;
            if (this.controls.left) {
                this.angle += 0.03 * flip;
            }
            if (this.controls.right) {
                this.angle -= 0.03 * flip;
            }
        }

        this.x -= Math.sin(this.angle) * this.speed;
        this.y -= Math.cos(this.angle) * this.speed;
    }

    draw(ctx: CanvasRenderingContext2D): void {
        ctx.save();

        ctx.translate(this.x, this.y);
        ctx.rotate(-this.angle);

        ctx.beginPath();
        ctx.rect(-this.width / 2, -this.height / 2, this.width, this.height);
        ctx.fill();

        ctx.restore();
    }
}

export default Car;
