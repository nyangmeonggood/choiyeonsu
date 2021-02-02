import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Frame from "../Components/Frame";
import { Parallex, setdivLineRefParallex, setPositionParallex, setTitleParallex } from "../hook/Parallex";
import ShadowTitle from "../hook/ShadowTitle";
import CursorCanvas from "../Components/CursorCanvas.js";
import "../scss/about.scss";
import Next from "../Components/Next";
import Logo from "../figure/Logo.js";

export default function About({ stageWidth, stageHeight }) {
  const aboutRef = useRef(),
  divLineLeftRef = useRef(),
  divLineRightRef = useRef();

  let scrollY, title;

  const scrollEvent = () => {
    scrollY = window.scrollY;
    title = document.querySelector(".shadowTitle");

    if (title) {
      setTitleParallex(title, scrollY);
    }
    if(aboutRef.current){
      setActive(aboutRef.current,scrollY)
      setPart(aboutRef.current,scrollY)
      setPositionParallex(document.querySelector(".part2"),document.querySelector(".part2 .content"), scrollY)
      setPositionParallex(document.querySelector(".part3"),document.querySelector(".part3 .content"), scrollY)
    }
    if(divLineLeftRef.current && divLineRightRef.current ){
      setdivLineRefParallex(divLineLeftRef.current, scrollY,document.querySelector(".part2"),document.querySelector(".part3"),document.querySelector(".part4"),"left")
      setdivLineRefParallex(divLineRightRef.current, scrollY,document.querySelector(".part2"),document.querySelector(".part3"),document.querySelector(".part4"),"right")
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
      <section id="about" ref={aboutRef}>
        <div className="part part1">
          <ShadowTitle text={"AboutMe"} />
        </div>
        <div className="part part2">
          <div className="content">          
            <figure>
              <Logo />
            </figure>
            <ul>
              <li><div className="blind"></div>2-1</li>
              <li><div className="blind"></div>2-2</li>
              <li><div className="blind"></div>2-3</li>
              <li><div className="blind"></div>2-4</li>
            </ul>
          </div>
        </div>
        <div className="part part3">
          <div className="content">          
            <figure>
              <Logo />
            </figure>
            <ul>
              <li><div className="blind"></div>3-1</li>
              <li><div className="blind"></div>3-2</li>
              <li><div className="blind"></div>3-3</li>
              <li><div className="blind"></div>3-4</li>
            </ul>
          </div>
        </div>
        <div className="part part4">
            <ul>
              <li><div className="blind"></div>3-1</li>
              <li><div className="blind"></div>3-2</li>
              <li><div className="blind"></div>3-3</li>
              <li><div className="blind"></div>3-4</li>
            </ul></div>
        <Next nextLink={"theKingOfMains"} />
      </section>
      <Frame />
      <CursorCanvas stageWidth={stageWidth} stageHeight={stageHeight} />
          <div className="divLine divLineLeft" ref={divLineLeftRef}></div>
          <div className="divLine divLineRight" ref={divLineRightRef}></div>
    </>
  );
}

const setPart = (target,scrollY) => {
  Object.values(target.children).forEach((item) => {
    if(scrollY > item.offsetTop)item.classList.add("on");
  });
};

const setActive = (target,scrollY) => {
  Object.values(target.children).forEach((item) => {
    item.classList.remove("active");

    if(item.offsetTop <= scrollY){
      item.classList.add("active");
    }
  });

};
