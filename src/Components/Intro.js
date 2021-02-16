import { useCallback, useEffect, useRef } from "react";
import { ColorArray } from "../hook/Color";
import "../scss/intro.scss";

export default function Intro({
  setCompLoading,
  stageWidth,
  stageHeight,
  setMenu,
}) {
  const introRef = useRef(""),
    titleRef = useRef(""),
    greetRef = useRef(""),
    personRef = useRef(""),
    greetEndRef = useRef("");

  //canvas
  const maxParticleCanvasNumber = 1000;
  const $ParticleCanvas = useRef(),
    $ParticleArray = useRef(),
    $ctxParticleCanvas = useRef();
  const colorArray = ColorArray;

  let bomb = {
    x: undefined,
    y: undefined,
    radius: 100,
  };
  //*canvas

  const setStart = () => {
    introRef.current.classList.add("active");
    introRef.current.addEventListener("transitionend", () => {
      setCompLoading(true);
      window.localStorage.setItem("Intro", false);

      let randomBlink = Math.floor(Math.random() * ColorArray.length);
      document.querySelector(".blink").style.backgroundColor =
        ColorArray[randomBlink];
      setMenu(true);
    });
  };

  const setBomb = () => {
    bomb.x = stageWidth / 2;
    bomb.y = stageHeight / 2;
    setInterval(() => {
      bomb.x = bomb.y = undefined;
    }, 1000);
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
      $ParticleArray.current[i].update($ctxParticleCanvas.current, bomb);
    }
  }, [$ParticleArray, bomb]);

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
        new SetIntroParticleCanvas(
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
    greetRef.current.classList.add("active");
    animationEnd(greetRef, personRef, setBomb, 5500);
    animationEnd(personRef, greetEndRef, setStart, 2000);
  });
  return (
    <>
      <section id="intro" ref={introRef}>
        <div className="title" ref={titleRef}>
          <p className="greet" ref={greetRef}>
            안녕하세요. 반갑습니다.
          </p>
          <ul className="person" ref={personRef}>
            <li>
              <span>
                <b>뛰는 사람</b> 위의,
              </span>
            </li>
            <li>
              <span>
                <b>나는 사람</b> 위의,
              </span>
            </li>
            <li>
              <span>
                <b>즐기는 사람</b>.
              </span>
            </li>
          </ul>
          <p className="greetEnd" ref={greetEndRef}>
            최연수입니다.
          </p>
        </div>
        <canvas ref={$ParticleCanvas}></canvas>
      </section>
    </>
  );
}

const animationEnd = (current, next, nextFunc, time) => {
  current.current.addEventListener("animationend", () => {
    next.current.classList.add("active");
    if (nextFunc) {
      setTimeout(() => nextFunc(), time);
    }
  });
};

class SetIntroParticleCanvas {
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
