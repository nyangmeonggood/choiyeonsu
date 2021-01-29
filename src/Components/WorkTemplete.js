import { useEffect, useRef } from "react";
import { setTitleParallex } from "../hook/Parallex";
import ShadowTitle from "../hook/ShadowTitle";
import CursorCanvas from "./CursorCanvas";
import Frame from "./Frame";
import Next from "./Next";
import "../scss/WorkTemplete.scss";

export default function WorkTemplete({ text, next, stageWidth, stageHeight }) {
  const nextRef = useRef();
  let scrollY, title;

  const scrollEvent = () => {
    scrollY = window.scrollY;
    title = document.querySelector(".shadowTitle");
    if (title) {
      setTitleParallex(title, scrollY);
    }

    if (nextRef.current && scrollY === nextRef.current.offsetTop) {
      window.scrollTo(0, 0);

      nextRef.current.querySelector(".nextBtn").click();
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    window.addEventListener("scroll", () => {
      scrollEvent();
    });

    return window.removeEventListener("scroll", () => {
      scrollEvent();
    });
  });
  return (
    <>
      <section className={`work work-${text}`}>
        <div className="part part1">
          <ShadowTitle text={`${text}`} />
        </div>
        <div className="part part2">2</div>
        <div className="part part3">
          <ul>
            <li>3</li>
          </ul>
        </div>
        <div className="part part4">4</div>
        <div className="part part5">5</div>
        <div className="part part6">6</div>
        <div className="part toNext" ref={nextRef}>
          <Next nextLink={next} />
        </div>
      </section>
      <Frame />
      <CursorCanvas stageWidth={stageWidth} stageHeight={stageHeight} />
    </>
  );
}
