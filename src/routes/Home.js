import { useEffect } from "react";
import { ColorArray } from "../hook/Color";
import ParticleCanvas from "../Components/ParticleCanvas.js";
import "../scss/home.scss";
import ShadowTitle from "../hook/ShadowTitle";

export default function Home({ stageWidth, stageHeight, setMenu }) {
  const toggleMenu = () => {
    setMenu(true);
    let randomBlink = Math.floor(Math.random() * ColorArray.length);
    document.querySelector(".blink").style.backgroundColor =
      ColorArray[randomBlink];
  };
  useEffect(() => {}, []);

  return (
    <>
      <section id="Home" onClick={toggleMenu}>
        <div id="mainTitleBox">
          <ShadowTitle id={"mainTitle"} text={"ChanceFolio"} />
        </div>
      </section>
      <ParticleCanvas stageWidth={stageWidth} stageHeight={stageHeight} />
    </>
  );
}
