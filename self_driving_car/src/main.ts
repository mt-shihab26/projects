import "./style.css";
import Car from "./Car";

const canvas = document.getElementById("canvas-0") as HTMLCanvasElement;

canvas.width = 200;

const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;

const car = new Car({ x: 100, y: 100, width: 30, height: 50 });

const animate = () => {
    canvas.height = window.innerHeight;
    car.update();
    car.draw(ctx);

    requestAnimationFrame(animate);
};

animate();
