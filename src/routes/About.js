import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Frame from "../Components/Frame";
import { Parallex, setTitleParallex } from "../hook/Parallex";
import ShadowTitle from "../hook/ShadowTitle";
import CursorCanvas from "../Components/CursorCanvas.js";
import "../scss/about.scss";
import Next from "../Components/Next";

export default function About({ stageWidth, stageHeight }) {
  const nextRef = useRef();
  let scrollY, title;

  const scrollEvent = () => {
    scrollY = window.scrollY;
    title = document.querySelector(".shadowTitle");
    if (title) {
      setTitleParallex(title, scrollY);
    }

    if (nextRef.current && scrollY === nextRef.current.offsetTop) {
      nextRef.current.querySelector("a").click();
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
      <section id="about">
        <div className="part part1">
          <ShadowTitle text={"AboutMe"} />
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
        <div className="part part7 toNext" ref={nextRef}>
          <Next nextLink={"theKingOfMains"} />
        </div>
      </section>
      <Frame />
      <CursorCanvas stageWidth={stageWidth} stageHeight={stageHeight} />
    </>
  );
}

const setPart = (target, num) => {
  if (num < 0) {
    Object.values(target).forEach((item) => {
      item.classList.remove("active");
    });
    return;
  }
  Object.values(target).forEach((item) => {
    item.classList.remove("active");
  });
  target[num].classList.add("active");
};

const setCurrentPart = (scrollY, target) => {
  let currentPart = Math.floor(
    (scrollY * target.current.children.length) / target.current.clientHeight
  );

  if (currentPart > target.current.children.length)
    currentPart = target.current.children.length;

  return currentPart;
};
