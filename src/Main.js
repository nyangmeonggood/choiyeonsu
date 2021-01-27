import { useEffect, useState } from "react";
import "./scss/cssReset.scss";
import "./scss/app.scss";
import Intro from "./Components/Intro";
import Loading from "./Components/Loading";
import Cursor from "./Components/Cursor";
import Home from "./routes/Home";
import { ColorArray } from "./hook/Color";

export default function Main({ setMenu }) {
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
    if (window.localStorage.getItem("Intro") === "false") setCompLoading(true);
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
      {isLoading && !compLoading && (
        <Intro
          setCompLoading={setCompLoading}
          stageWidth={stageWidth}
          stageHeight={stageHeight}
          setMenu={setMenu}
        />
      )}
      {compLoading && (
        <Home
          stageWidth={stageWidth}
          stageHeight={stageHeight}
          setMenu={setMenu}
        />
      )}
      {/* {isLoading && <Cursor />} */}
    </>
  );
}
