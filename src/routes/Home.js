import { useEffect, useRef } from "react";
import { ColorArray } from "../hook/Color";
import { SeparateText } from "../hook/SeperateText";
import ParticleCanvas from "../Components/ParticleCanvas.js";
import "../scss/home.scss";
import ShadowTitle from "../hook/ShadowTitle";

export default function Home({ stageWidth, stageHeight, setMenu }) {
  const homeBoxRef = useRef();

  const toggleMenu = () => {
    setMenu(true);
    let randomBlink = Math.floor(Math.random() * ColorArray.length);
    document.querySelector(".blink").style.backgroundColor =
      ColorArray[randomBlink];
  };
  useEffect(() => {
    // document.querySelector(
    //   ".subTitle .year"
    // ).innerText = new Date().getFullYear();
  }, []);

  return (
    <>
      <section id="Home" onClick={toggleMenu}>
        <div id="mainTitleBox">
          <div className="subTitle">
            {/* <p>
              <span className="year"></span> | ChoiYeonsu
            </p> */}
          </div>
          <ShadowTitle id={"mainTitle"} text={"ChanceFolio"} />
        </div>
      </section>
      <ParticleCanvas stageWidth={stageWidth} stageHeight={stageHeight} />
    </>
  );
}
