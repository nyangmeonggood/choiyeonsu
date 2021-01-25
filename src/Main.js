import { useEffect, useState } from "react";
import "./scss/cssReset.scss";
import "./scss/app.scss";
import Intro from "./Components/Intro";
import Loading from "./Components/Loading";
import Cursor from "./Components/Cursor";
import About from "./routes/About";
import ParticleCanvas from "./Components/ParticleCanvas";

export default function Main() {
  const [isLoading, setIsLoading] = useState(false);
  const [compLoading, setCompLoading] = useState(false);
  const [stageWidth, setStageWidth] = useState(document.body.clientWidth);
  const [stageHeight, setStageHeight] = useState(document.body.clientHeight);

  const setResize = () => {
    setStageWidth(document.body.clientWidth);
    setStageHeight(document.body.clientHeight);
  };

  useEffect(() => {
    document.getElementById("loading").classList.add("active");
  }, []);

  // resize
  useEffect(() => {
    window.addEventListener("resize", (e) => {
      setResize(e);
    });

    return window.removeEventListener("resize", (e) => {
      setResize(e);
    });
  }, [stageWidth, stageHeight]);
  //** resize

  return (
    <>
      {!isLoading && (
        <Loading isLoading={isLoading} setIsLoading={setIsLoading} />
      )}
      {isLoading && !compLoading && <Intro setCompLoading={setCompLoading} />}

      {compLoading && (
        <ParticleCanvas stageWidth={stageWidth} stageHeight={stageHeight} />
      )}
      {compLoading && <About />}
      {isLoading && <Cursor />}
    </>
  );
}
