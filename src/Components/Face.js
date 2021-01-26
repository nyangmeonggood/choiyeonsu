import { useEffect, useRef } from "react";
import { ColorArray } from "../hook/Color";
import { SeparateText } from "../hook/SeperateText";
import "../scss/face.scss";

export default function Face({ stageWidth, stageHeight, setCompLoading }) {
  const titleBoxRef = useRef();

  const introOnOff = () => {
    if (window.localStorage.getItem("Intro") === "false") {
      window.localStorage.setItem("Intro", true);
      return;
    }
    if (window.localStorage.getItem("Intro") === "true") {
      window.localStorage.setItem("Intro", false);
      return;
    }
  };
  useEffect(() => {
    SeparateText("mainTitle", "포트폴리오", "span");

    Object.values(document.getElementById("mainTitle").children).forEach(
      (item) => {
        let i = item.dataset.delay;
        item.style.transition = `color 0.5s 1s, text-stroke 0.5s 1s,
      text-stroke-color 0.5s 1s, transform 0.5s ${0.1 * i}s`;
      }
    );

    setTimeout(() => {
      titleBoxRef.current.classList.add("active");
      let randomColor = Math.floor(Math.random() * ColorArray.length),
        longshadow = ``;

      for (let longshadows = 0; longshadows < 10; longshadows++) {
        longshadow +=
          (longshadow ? "," : "") +
          `${longshadows + 1}px ${longshadows + 1}px 0 ${
            ColorArray[randomColor]
          }`;
      }
      titleBoxRef.current.style.textShadow = longshadow;
    }, 1000);
  }, []);

  return (
    <section id="face">
      <p onClick={introOnOff}>인트로 on/off</p>
      <div id="mainTitle" ref={titleBoxRef}></div>
    </section>
  );
}
