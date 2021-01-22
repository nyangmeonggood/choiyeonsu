import { useEffect, useState } from "react";
import "./scss/cssReset.scss";
import "./scss/app.scss";
import Intro from "./Intro";
import Loading from "./Loading";
import Cursor from "./Cursor";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [compLoading, compIsLoading] = useState(false);
  const [stageWidth, setStageWidth] = useState(document.body.clientWidth);
  const [stageHeight, setStageHeight] = useState(document.body.clientHeight);

  const setResize = () => {
    setStageWidth(document.body.clientWidth);
    setStageHeight(document.body.clientHeight);
  };

  useEffect(() => {
    document.getElementById("loading").classList.add("active");
  }, []);

  useEffect(() => {
    if (compLoading) {
      document.getElementById("intro").classList.add("active");
    }
  }, [compLoading]);

  useEffect(() => {
    window.addEventListener("resize", (e) => {
      setResize(e);
    });

    return window.removeEventListener("resize", (e) => {
      setResize(e);
    });
  }, [stageWidth, stageHeight]);

  return (
    <>
      {!isLoading && (
        <Loading
          isLoading={isLoading}
          setIsLoading={setIsLoading}
          compIsLoading={compIsLoading}
        />
      )}
      {isLoading && <Intro stageWidth={stageWidth} stageHeight={stageHeight} />}
      {isLoading && <Cursor />}
    </>
  );
}

export default App;
