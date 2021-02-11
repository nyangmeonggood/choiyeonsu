import { useCallback, useEffect, useRef } from "react";
import { ColorArray } from "../hook/Color.js";
import "../scss/particleCanvas.scss";

export default function CursorCanvas({ stageWidth, stageHeight }) {
  const $Particle = useRef(),
    $ParticleCanvas = useRef(),
    $Cursor = useRef(),
    $ctxParticleCanvas = useRef();

  const colorArray = ColorArray;

  const abilityPercent = [
    { className: ".html", color: "#ea642d", percent: 90 },
    { className: ".css", color: "#2ea5d6", percent: 95 },
    { className: ".js", color: "#eab925", percent: 95 },
    { className: ".react", color: "#5ed3f3", percent: 85 },
    { className: ".reactnative", color: "#5ed3f3", percent: 70 },
  ];

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
      new setCursor("SCROLL·DOWN·", 0, 0, 0, "1", -55, Math.PI * 2)
    );
  }, [stageWidth, stageHeight, colorArray]);

  useEffect(() => {
    $ctxParticleCanvas.current = $ParticleCanvas.current.getContext("2d");
    ParticleAnimate();
  }, [ParticleAnimate]);

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

  // mouseenter
  useEffect(() => {
    if (document.querySelector("#about")) {
      for (let i = 0; i < abilityPercent.length; i++) {
        document
          .querySelector(`.part3 ul li ${abilityPercent[i].className}`)
          .addEventListener("pointerenter", () => {
            $Cursor.current[0].part = `2`;
            $Cursor.current[0].percent = abilityPercent[i].percent;
            $Cursor.current[0].abilityColor = abilityPercent[i].color;
          });

        document
          .querySelector(`.part3 ul li ${abilityPercent[i].className}`)
          .addEventListener("pointerout", () => {
            $Cursor.current[0].part = "1";
            $Cursor.current[0].current = 0;
            $Cursor.current[0].percent = 0;
            $Cursor.current[0].abilityColor = "transparent";
            $Cursor.current[0].abilityArc = 0;
          });
      }

      document
        .querySelector(`.part4`)
        .addEventListener("pointerenter", () => {
          $Cursor.current[0].part = "3";
          $Cursor.current[0].text = "SCROLL·SLOW·";

        });

      document
        .querySelector(`.part4`)
        .addEventListener("pointerout", () => {
          $Cursor.current[0].part = "1";
          $Cursor.current[0].text = "SCROLL·DOWN·";

        });
    }
    if (document.querySelector(".toNext")) {
      document
        .querySelector(".toNext a")
        .addEventListener("pointerenter", () => {
          $Cursor.current[0].text = "CLICK·TO·NEXT·";
          $Cursor.current[0].size = -75;
          $Cursor.current[0].angle = $Cursor.current[0].text.length;
          $Cursor.current[0].numRadsPerLetter =
            (2 * Math.PI) / $Cursor.current[0].angle;
          $Cursor.current[0].color = "#FFF";
        });

      document.querySelector(".toNext a").addEventListener("pointerout", () => {
        $Cursor.current[0].text = "SCROLL·DOWN·";
        $Cursor.current[0].size = -55;
        $Cursor.current[0].angle = $Cursor.current[0].text.length;
        $Cursor.current[0].numRadsPerLetter =
          (2 * Math.PI) / $Cursor.current[0].angle;
        $Cursor.current[0].color = `rgba(17,17,17,1)`;
      });
    }
  });
  // **mouseover

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
    this.angle = text.length;
    this.startRotation = startRotation;
    this.x = x;
    this.y = y;
    this.part = part;
    this.size = size;
    this.color = `rgba(17,17,17,${this.fontOpacity})`;
    this.current = 0;
    this.percent = 0;
    this.abilityColor = "transparent";
    this.abilityArc = 0;
    this.click = 0;
    this.fontOpacity = fontOpacity;
    this.numRadsPerLetter = (2 * Math.PI) / this.angle;
  }
  draw(ctx) {
    ctx.save();
    ctx.translate(this.x, this.y);

    if (this.part === "1") {
      ctx.font = "20px S-CoreDream-9Black";
      ctx.rotate(this.startRotation);
      for (let i = 0; i < this.angle; i++) {
        ctx.save();
        ctx.rotate(i * this.numRadsPerLetter);
        ctx.fillStyle = this.color;
        ctx.fillText(this.text[i], 0, this.size);
        ctx.restore();
      }
    }

    if (this.part === "2") {
      ctx.save();
      ctx.beginPath();
      ctx.arc(0, 0, 50, 0, Math.PI * 2 * this.abilityArc);
      ctx.strokeStyle = this.abilityColor;
      ctx.lineWidth = 50;
      ctx.stroke();
      ctx.closePath();
      ctx.restore();
      ctx.fillStyle = "#111";

      ctx.save();
      ctx.font = "20px S-CoreDream-9Black";
      ctx.translate(60, 70);
      ctx.fillText(`${this.current}`, 0, this.click);
      ctx.restore();

      ctx.save();
      ctx.font = "15px S-CoreDream-6Bold";
      ctx.translate(86, 70);
      ctx.fillText("%", 0, this.click);
      ctx.restore();
    }

    if (this.part === "3") {
      ctx.font = "20px S-CoreDream-9Black";
      ctx.rotate(this.startRotation);
      for (let i = 0; i < this.angle; i++) {
        ctx.save();
        ctx.rotate(i * this.numRadsPerLetter);
        ctx.fillStyle = this.color;
        ctx.fillText(this.text[i], 0, this.size);
        ctx.restore();
      }
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
    if (this.part === "3") {
      document.body.style.cursor = "pointer";
      this.startRotation -= 0.001;
    }
    if (this.part === "2") {
      document.body.style.cursor = "none";
      if (this.current < this.percent) {
        this.current += 1;
      }
      if (this.abilityArc <= `${this.current / 100}`) {
        this.abilityArc += 0.015;
      }
    }
    this.draw(ctx);
  }
}

// const drawGrid = (
//   ctx,
//   stageWidth,
//   stageHeight,
//   totalWidth,
//   columnsWidth,
//   columnsNum,
//   gapWidth
// ) => {
//   ctx.save();
//   ctx.translate(stageWidth / 2, 0);

//   for (let i = 0; i < columnsNum; i++) {
//     let recStart = -totalWidth / 2 + columnsWidth * i + gapWidth * i,
//       recEnd = recStart + columnsWidth;

//     ctx.moveTo(recStart, 0);
//     ctx.lineTo(recEnd, 0);
//     ctx.lineTo(recEnd, stageHeight);
//     ctx.lineTo(recStart, stageHeight);
//     ctx.fillStyle = "#dbdbdb";
//     ctx.fill();
//   }
//   ctx.restore();
// };
