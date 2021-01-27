import { useEffect, useRef } from "react";
import { ColorArray } from "../hook/Color";
import { SeparateText } from "../hook/SeperateText";
import ParticleCanvas from "../Components/ParticleCanvas.js";
import "../scss/home.scss";

export default function Home({ stageWidth, stageHeight, setMenu }) {
  const homeBoxRef = useRef(),
    titleBoxRef = useRef();

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

  const toggleMenu = () => {
    setMenu(true);
    let randomBlink = Math.floor(Math.random() * ColorArray.length);
    document.querySelector(".blink").style.backgroundColor =
      ColorArray[randomBlink];
  };
  useEffect(() => {
    SeparateText("mainTitle", "ChanceFolio", "span");

    // document.querySelector(
    //   ".subTitle .year"
    // ).innerText = new Date().getFullYear();

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
    <>
      <section id="Home" onClick={toggleMenu}>
        <p onClick={introOnOff}>인트로 on/off</p>
        <div id="mainTitleBox">
          <div className="subTitle">
            {/* <p>
              <span className="year"></span> | ChoiYeonsu
            </p> */}
          </div>
          <h2 id="mainTitle" ref={titleBoxRef}></h2>
        </div>
      </section>
      <ParticleCanvas stageWidth={stageWidth} stageHeight={stageHeight} />
    </>
  );
}
