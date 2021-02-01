import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Frame from "../Components/Frame";
import { Parallex, setTitleParallex } from "../hook/Parallex";
import ShadowTitle from "../hook/ShadowTitle";
import CursorCanvas from "../Components/CursorCanvas.js";
import "../scss/about.scss";
import Next from "../Components/Next";
import Logo from "../figure/Logo.js";

export default function About({ stageWidth, stageHeight }) {
  let scrollY, title;

  const scrollEvent = () => {
    scrollY = window.scrollY;
    title = document.querySelector(".shadowTitle");
    if (title) {
      setTitleParallex(title, scrollY);
    }
  };

  useEffect(() => {
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
          <figure>
            <Logo />
          </figure>
          <ul>
            <li>3-1</li>
            <li>3-2</li>
            <li>3-3</li>
            <li>3-4</li>
          </ul>
        </div>
        <div className="part part4">4</div>
        <div className="part part5">5</div>
        <div className="part part6">6</div>
          <Next nextLink={"theKingOfMains"} />
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
