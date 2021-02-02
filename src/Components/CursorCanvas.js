import { useCallback, useEffect, useRef } from "react";
import { ColorArray } from "../hook/Color.js";
import "../scss/particleCanvas.scss";

export default function CursorCanvas({ stageWidth, stageHeight }) {
  const $Particle = useRef(),
    $ParticleCanvas = useRef(),
    $Cursor = useRef(),
    $ctxParticleCanvas = useRef();

  const colorArray = ColorArray;

  let $mainRefCurrent;

  let scrollY = 0;

  let canvasMouse = {
    x: stageWidth - 120,
    y: stageHeight - 120,
    rx: undefined,
    ry: undefined,
    radius: 100,
  };

  // canvas
  const currentMousePos = (e) => {
    canvasMouse.x = e.clientX;
    canvasMouse.y = e.clientY;
    canvasMouse.rx = e.offsetX;
    canvasMouse.ry = e.offsetY;
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
    // );

    $Cursor.current[0].update(
      $ParticleCanvas.current,
      $ctxParticleCanvas.current,
      canvasMouse
    );
  }, []);

  useEffect(() => {
    $ParticleCanvas.current.width = stageWidth;
    $ParticleCanvas.current.height = stageHeight;

    $Cursor.current = [];
    $Cursor.current.push(
      new setCursor("SCROLLDOWN", 0, 0, 0, "1", -75, Math.PI * 2)
    );
  }, [stageWidth, stageHeight, colorArray]);

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

  return (
    <>
      <section id="Particle" ref={$Particle}>
        <canvas id="ParticleCanvas" ref={$ParticleCanvas}></canvas>
      </section>
    </>
  );
}

class setCursor {
  constructor(text, x, y, fontOpacity, part, size, startRotation) {
    this.text = text;
    this.startRotation = startRotation;
    this.x = x;
    this.y = y;
    this.part = part;
    this.size = size;
    this.click = 0;
    this.fontOpacity = fontOpacity;
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
        ctx.fillStyle = `rgba(17,17,17,${this.fontOpacity})`;
        ctx.fillText(this.text[i], 0, this.size);
        ctx.restore();
      }
    }

    if (this.part === "2") {
      ctx.font = "20px S-CoreDream-9Black";
      ctx.save();
      ctx.beginPath();
      ctx.arc(0, 0, 50, 0, Math.PI * 2);
      ctx.fillStyle = `#FC3`;
      ctx.fill();
      ctx.closePath();
      ctx.restore();

      ctx.save();
      ctx.translate(-22, 8);
      ctx.fillStyle = `#fff`;
      ctx.fillText("Click", 0, this.click);
      ctx.restore();
    }

    ctx.restore();
  }
  update(canvas, ctx, canvasMouse) {
    this.x = canvasMouse.x;
    this.y = canvasMouse.y;

    if (this.fontOpacity <= 1) {
      this.fontOpacity += 0.01;
    }
    if (this.part === "1") {
      document.body.style.cursor = "pointer";
      this.startRotation -= 0.003;
    }
    if (this.part === "2") {
      console.dir(canvas.style);
      document.body.style.cursor = "none";
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
