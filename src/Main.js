import { useEffect, useState } from "react";
import "./scss/cssReset.scss";
import "./scss/app.scss";
import Intro from "./Components/Intro";
import Loading from "./Components/Loading";
import Cursor from "./Components/Cursor";
import Home from "./routes/Home";
import { ColorArray } from "./hook/Color";

export default function Main({ stageWidth, stageHeight, setMenu }) {
  const [isLoading, setIsLoading] = useState(false);
  const [compLoading, setCompLoading] = useState(false);

  useEffect(() => {
    document.getElementById("loading").classList.add("active");
    if (window.localStorage.getItem("Intro") === "false") setCompLoading(true);
  }, []);

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
