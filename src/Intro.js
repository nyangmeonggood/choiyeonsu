import { useEffect, useRef } from "react";
import { ColorArray } from "./hook/Color.js";
import "./scss/intro.scss";

export default function Intro({ stageWidth, stageHeight }) {
  let $introParticleArray, $ctxIntroCanvas;
  const maxIntroParticleNumber = 1000;
  const $introCanvas = useRef();
  const colorArray = ColorArray;

  let mouse = {
    x: undefined,
    y: undefined,
    radius: 100,
  };

  setInterval(() => {
    mouse.x = mouse.y = undefined;
  }, 1000);

  const currentMousePos = (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
  };

  const introAnimate = () => {
    requestAnimationFrame(introAnimate);
    $ctxIntroCanvas.clearRect(
      0,
      0,
      $ctxIntroCanvas.canvas.width,
      $ctxIntroCanvas.canvas.height
    );
    for (var i = 0; i < $introParticleArray.length; i++) {
      $introParticleArray[i].update($ctxIntroCanvas, mouse);
    }
  };

  useEffect(() => {
    $introParticleArray = [];
    $introCanvas.current.width = stageWidth;
    $introCanvas.current.height = stageHeight;

    for (let i = 0; i < maxIntroParticleNumber; i++) {
      let x = Math.random() * (stageWidth - 40) + 20,
        y = Math.random() * (stageHeight - 40) + 20,
        dx = Math.random() * 2 - 1,
        dy = Math.random() * 2 - 1,
        figure = Math.floor(Math.random() * 3),
        angle = figure + 2,
        color = colorArray[figure];

      $introParticleArray.push(
        new IntroCanvas(x, y, dx, dy, stageWidth, stageHeight, angle, color)
      );
    }
  }, [stageWidth, stageHeight]);

  useEffect(() => {
    $ctxIntroCanvas = $introCanvas.current.getContext("2d");

    introAnimate();
  }, [stageWidth, stageHeight]);

  useEffect(() => {
    $introCanvas.current.addEventListener("mousemove", (e) => {
      currentMousePos(e);
    });

    return $introCanvas.current.removeEventListener("mousemove", () => {
      currentMousePos();
    });
  });

  return (
    <>
      <section id="intro">
        <canvas id="introCanvas" ref={$introCanvas}></canvas>
      </section>
    </>
  );
}

class IntroCanvas {
  constructor(x, y, dx, dy, stageWidth, stageHeight, angle, color) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.size = 0;
    this.stageWidth = stageWidth;
    this.stageHeight = stageHeight;
    this.angle = angle;
    this.figureAngle = (Math.PI * 2) / this.angle;
    this.color = color;

    this.boundary = 30;
    this.minSize = 0;
    this.maxSize = 20;
  }

  draw(ctx) {
    ctx.save();
    ctx.beginPath();
    ctx.fillStyle = this.color;
    if (this.angle === 2) {
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    } else {
      ctx.translate(this.x, this.y);
      ctx.rotate(
        Math.PI / this.angle +
          Math.atan2(
            this.stageWidth / 2 - this.x,
            -this.stageHeight / 2 + this.y
          )
      );

      for (let i = 0; i < this.angle; i++) {
        let px = Math.sin(this.figureAngle * i) * this.size,
          py = Math.cos(this.figureAngle * i) * this.size;
        i === 0 ? ctx.moveTo(px, py) : ctx.lineTo(px, py);
      }
    }
    ctx.fill();
    ctx.restore();
  }

  update(ctx, mouse) {
    if (this.x + this.size > this.stageWidth || this.x - this.size < 0) {
      this.dx *= -1;
    }
    if (this.y + this.size > this.stageHeight || this.y - this.size < 0) {
      this.dy *= -1;
    }
    this.x += this.dx;
    this.y += this.dy;

    if (
      mouse.x - this.x < mouse.radius &&
      mouse.x - this.x > -mouse.radius &&
      mouse.y - this.y < mouse.radius &&
      mouse.y - this.y > -mouse.radius
    ) {
      if (this.size < this.maxSize) {
        this.size += 3;
      }
    } else if (this.size > this.minSize) {
      this.size += -0.1;
    }

    if (this.size < 0) this.size = 0;

    this.draw(ctx);
  }
}
