import { useCallback, useEffect, useRef } from "react";
import { ColorArray } from "../hook/Color.js";
import "../scss/particleCanvas.scss";

export default function ParticleCanvas({ stageWidth, stageHeight }) {
  const maxParticleCanvasNumber = 1000;
  const $Particle = useRef(),
    $ParticleCanvas = useRef(),
    $ParticleArray = useRef(),
    $ctxParticleCanvas = useRef(),
    titleBoxRef = useRef();
  const colorArray = ColorArray;

  let mouse = {
    x: stageWidth / 2,
    y: stageHeight / 2,
    radius: 100,
  };

  // canvas
  setInterval(() => {
    mouse.x = mouse.y = undefined;
  }, 1000);

  const currentMousePos = (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
  };

  const ParticleAnimate = useCallback(() => {
    requestAnimationFrame(ParticleAnimate);
    $ctxParticleCanvas.current.clearRect(
      0,
      0,
      $ctxParticleCanvas.current.canvas.width,
      $ctxParticleCanvas.current.canvas.height
    );
    for (var i = 0; i < $ParticleArray.current.length; i++) {
      $ParticleArray.current[i].update($ctxParticleCanvas.current, mouse);
    }
  }, [$ParticleArray, mouse]);

  useEffect(() => {
    $ParticleArray.current = [];
    $ParticleCanvas.current.width = stageWidth;
    $ParticleCanvas.current.height = stageHeight;

    for (let i = 0; i < maxParticleCanvasNumber; i++) {
      let x = Math.random() * (stageWidth - 40) + 20,
        y = Math.random() * (stageHeight - 40) + 20,
        dx = Math.random() * 2 - 1,
        dy = Math.random() * 2 - 1,
        figure = Math.floor(Math.random() * 3),
        angle = figure + 2,
        color = colorArray[figure];

      $ParticleArray.current.push(
        new SetParticleCanvas(
          x,
          y,
          dx,
          dy,
          stageWidth,
          stageHeight,
          angle,
          color
        )
      );
    }

    $ctxParticleCanvas.current = $ParticleCanvas.current.getContext("2d");

    ParticleAnimate();
  }, [stageWidth, stageHeight, $ParticleArray, ParticleAnimate, colorArray]);

  useEffect(() => {
    $Particle.current.addEventListener("mousemove", (e) => {
      currentMousePos(e);
    });

    return $Particle.current.removeEventListener("mousemove", () => {
      currentMousePos();
    });
  });
  //** canvas

  useEffect(() => {
    setTimeout(() => {
      let randomColor = Math.floor(Math.random() * ColorArray.length),
        longshadow = ``;

      titleBoxRef.current.style.opacity = 1;

      for (let longshadows = 0; longshadows < 10; longshadows++) {
        longshadow +=
          (longshadow ? "," : "") +
          `${longshadows + 1}px ${longshadows + 1}px 0 ${
            ColorArray[randomColor]
          }`;
      }
      titleBoxRef.current.style.textShadow = longshadow;
    }, 1000);
  }, []);

  return (
    <>
      <section id="Particle" ref={$Particle}>
        <canvas id="ParticleCanvas" ref={$ParticleCanvas}></canvas>
        <div className="titleBox" ref={titleBoxRef}>
          포트폴리오
        </div>
      </section>
    </>
  );
}

class SetParticleCanvas {
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
    this.maxSize = 50;
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
      this.size += -1;
    }

    if (this.size < 0) this.size = 0;

    this.draw(ctx);
  }
}
