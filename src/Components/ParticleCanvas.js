import { useCallback, useEffect, useRef } from "react";
import { ColorArray } from "../hook/Color.js";
import "../scss/particleCanvas.scss";

export default function ParticleCanvas({ stageWidth, stageHeight }) {
  const maxParticleCanvasNumber = 1000;
  const $Particle = useRef(),
    $ParticleCanvas = useRef(),
    $ParticleArray = useRef(),
    $Cursor = useRef(),
    $GridArray = useRef(),
    $ctxParticleCanvas = useRef();
  const colorArray = ColorArray;

  let $mainRefCurrent, mouseoutInterval;

  let scrollY = 0;

  let canvasMouse = {
    x: undefined,
    y: undefined,
    radius: 100,
  };

  // canvas
  const currentMousePos = (e) => {
    canvasMouse.x = e.clientX;
    canvasMouse.y = e.clientY;
  };

  const ParticleAnimate = useCallback(() => {
    requestAnimationFrame(ParticleAnimate);
    $ctxParticleCanvas.current.clearRect(
      0,
      0,
      $ctxParticleCanvas.current.canvas.width,
      $ctxParticleCanvas.current.canvas.height
    );

    // drawGrid(
    //   $ctxParticleCanvas.current,
    //   stageWidth,
    //   stageHeight,
    //   1858,
    //   88,
    //   16,
    //   30
    // );

    for (var i = 0; i < $ParticleArray.current.length; i++) {
      $ParticleArray.current[i].update($ctxParticleCanvas.current, canvasMouse);
    }
  }, []);

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
  }, [stageWidth, stageHeight, $ParticleArray, $GridArray, colorArray]);

  useEffect(() => {
    $ctxParticleCanvas.current = $ParticleCanvas.current.getContext("2d");
    ParticleAnimate();
  }, []);

  //mousemove
  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      currentMousePos(e);
    });

    return window.removeEventListener("mousemove", (e) => {
      currentMousePos(e);
    });
  });
  //**mousemove

  //scroll
  useEffect(() => {
    window.addEventListener("scroll", () => {
      scrollEvent();
    });

    return window.removeEventListener("scroll", () => {
      scrollEvent();
    });
  });
  //**scroll

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

class setCursor {
  constructor(text, x, y, color, part, size, startRotation) {
    this.text = text;
    this.startRotation = startRotation;
    this.x = x;
    this.y = y;
    this.part = part;
    this.size = size;
    this.color = color;
    this.numRadsPerLetter = (2 * Math.PI) / this.text.length;
  }
  draw(ctx) {
    ctx.save();
    ctx.translate(this.x, this.y);

    if (this.part === "1") {
      ctx.font = "20px S-CoreDream-9Black";
      ctx.rotate(this.startRotation);
      for (let i = 0; i < this.text.length; i++) {
        ctx.save();
        ctx.rotate(i * this.numRadsPerLetter);

        ctx.fillText(this.text[i], 0, this.size);
        ctx.restore();
      }
    }

    if (this.part === "2") {
      ctx.font = "20px S-CoreDream-9Black";
      ctx.fillText(this.text, 0, this.size);
    }

    ctx.restore();
  }
  update(ctx, canvasMouse) {
    this.x = canvasMouse.x;
    this.y = canvasMouse.y;
    if (this.part === "1") {
      this.startRotation += 0.003;
    }
    if (this.part === "2") {
    }
    this.draw(ctx);
  }
}

const drawGrid = (
  ctx,
  stageWidth,
  stageHeight,
  totalWidth,
  columnsWidth,
  columnsNum,
  gapWidth
) => {
  ctx.save();
  ctx.translate(stageWidth / 2, 0);

  for (let i = 0; i < columnsNum; i++) {
    let recStart = -totalWidth / 2 + columnsWidth * i + gapWidth * i,
      recEnd = recStart + columnsWidth;

    ctx.moveTo(recStart, 0);
    ctx.lineTo(recEnd, 0);
    ctx.lineTo(recEnd, stageHeight);
    ctx.lineTo(recStart, stageHeight);
    ctx.fillStyle = "#dbdbdb";
    ctx.fill();
  }
  ctx.restore();
};
