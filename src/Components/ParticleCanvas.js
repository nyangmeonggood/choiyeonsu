import { useCallback, useEffect, useRef } from "react";
import { ColorArray } from "../hook/Color.js";
import "../scss/particleCanvas.scss";

export default function ParticleCanvas({ stageWidth, stageHeight, mainRef }) {
  const maxParticleCanvasNumber = 1000;
  const $Particle = useRef(),
    $ParticleCanvas = useRef(),
    $ParticleArray = useRef(),
    $ctxParticleCanvas = useRef();
  const colorArray = ColorArray,
    $mainRef = mainRef;

  let $mainRefCurrent;

  let scrollY;

  let canvasMouse = {
    x: stageWidth / 2,
    y: stageHeight / 2,
    radius: 100,
  };

  // canvas
  const currentMousePos = (e) => {
    canvasMouse.x = e.clientX;
    canvasMouse.y = e.clientY;

    if (canvasMouse.y <= stageHeight * 0.2) canvasMouse.y = stageHeight * 0.2;
    if (canvasMouse.y >= stageHeight * 0.8) canvasMouse.y = stageHeight * 0.8;
  };

  const ParticleAnimate = useCallback(() => {
    requestAnimationFrame(ParticleAnimate);
    $ctxParticleCanvas.current.clearRect(
      0,
      0,
      $ctxParticleCanvas.current.canvas.width,
      $ctxParticleCanvas.current.canvas.height
    );

    if ($mainRefCurrent) {
      if ($mainRefCurrent[2] < scrollY && $mainRefCurrent[3] > scrollY) {
        for (var i = 0; i < $ParticleArray.current.length; i++) {
          $ParticleArray.current[i].update(
            $ctxParticleCanvas.current,
            canvasMouse
          );
        }
      }
    }
  }, [$ParticleArray]);

  const scrollEvent = () => {
    scrollY = window.scrollY;
  };

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
  }, [stageWidth, stageHeight, $ParticleArray, colorArray]);

  useEffect(() => {
    setInterval(() => {
      canvasMouse.x = canvasMouse.y = undefined;
    }, 1000);

    $ctxParticleCanvas.current = $ParticleCanvas.current.getContext("2d");
    ParticleAnimate();

    $mainRefCurrent = [];
    for (let i = 0; i < $mainRef.current.children.length; i++) {
      $mainRefCurrent.push($mainRef.current.children[i].offsetTop);
    }
    console.log($mainRefCurrent);
  }, []);

  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      currentMousePos(e);
    });

    return window.removeEventListener("mousemove", (e) => {
      currentMousePos(e);
    });
  });
  useEffect(() => {
    window.addEventListener("scroll", () => {
      scrollEvent();
    });

    return window.removeEventListener("scroll", () => {
      scrollEvent();
    });
  });
  //** canvas
  return (
    <>
      <section id="Particle" ref={$Particle}>
        <canvas id="ParticleCanvas" ref={$ParticleCanvas}></canvas>
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
