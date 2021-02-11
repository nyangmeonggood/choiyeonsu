import { useEffect, useRef } from "react";
import { setTitleParallex } from "../hook/Parallex";
import ShadowTitle from "../hook/ShadowTitle";
import CursorCanvas from "./CursorCanvas";
import Frame from "./Frame";
import Next from "./Next";
import "../scss/WorkTemplete.scss";
import { WorkInfo } from "./WorkInfo.js";
import WORK_BUTTONBUTTON from "./Work/WORK_BUTTONBUTTON";
import WORK_THEKINGOFMAINS from "./Work/WORK_THEKINGOFMAINS";

export default function WorkTemplete({ text, next, stageWidth, stageHeight }) {
  const descRef = useRef();
  const imgRef = useRef();
  let scrollY, title;
  let page;

  if (text === "theKingOfMains") {
    page = WorkInfo.theKingOfMains;
  } else if (text === "Buttonbutton") {
    page = WorkInfo.buttonbutton;
  }

  const scrollEvent = () => {
    scrollY = window.scrollY;
    title = document.querySelector(".shadowTitle");

    if (title) {
      setTitleParallex(title, scrollY);
    }

    if (imgRef.current) {


      imgRef.current = document.querySelector(".part3");
      Object.values(imgRef.current.querySelectorAll("h4")).forEach((item) => {
        if (item.getBoundingClientRect().top <= stageHeight * 0.8) {
          item.classList.add("active")
        }
      });
    }
  };

  useEffect(() => {
    descRef.current.querySelector(".descTitle").innerHTML = page.descTitle;
    descRef.current.querySelector(".descLeft a").href = page.link;
    descRef.current.querySelector(".descRight p").innerHTML = page.desc;

    imgRef.current = document.querySelector(".part3");
    Object.values(imgRef.current.querySelectorAll("h4")).forEach((item) => {
      let highlight = ["red", "yellow", "blue"];
      let randomHighlight = Math.floor(Math.random() * 3);
      item.classList.add(highlight[randomHighlight]);
    });

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
        <div className="part part2" ref={descRef}>
          <div className="desc">
            <div className="descLeft">
              <h3 className="descTitle">{""}</h3>
              <a href="/" target="_blank">
                {stageWidth > 900 && <span>Link To Site</span>}
                {stageWidth <= 900 && <span>Link</span>}
                <svg
                  viewBox="0 0 13 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12.1051 4.934V6.536H3.28506L6.93906 10.19L5.78706 11.342L0.189063 5.726L5.78706 0.127999L6.93906 1.28L3.26706 4.934H12.1051Z"></path>
                </svg>
              </a>
            </div>
            <div className="descRight">
              <ul className="info">
                <li>
                  <b>Type</b>
                  <span>{page.Type}</span>
                </li>
                <li>
                  <b>Role</b>
                  <span>{page.Role}</span>
                </li>
                <li>
                  <b>Language</b>
                  <span>{page.Language}</span>
                </li>
                <li>
                  <b>Library</b>
                  <span>{page.Library}</span>
                </li>
              </ul>
              <p></p>
            </div>
          </div>
        </div>
        <div className="part part3" ref={imgRef}>
          <ul>
            {text === "theKingOfMains" && <WORK_THEKINGOFMAINS />}
            {text === "Buttonbutton" && <WORK_BUTTONBUTTON />}
          </ul>
        </div>
      </section>
      <Next nextLink={next} />

      <Frame />
      {stageWidth > 900 ? (
        <CursorCanvas stageWidth={stageWidth} stageHeight={stageHeight} />
      ) : (
          <></>
        )}
    </>
  );
}
