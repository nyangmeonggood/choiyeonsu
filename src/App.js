import { HashRouter, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import Header from "./Components/Header";
import Main from "./Main";
import About from "./routes/About";
import TheKingOfMains from "./routes/TheKingOfMains";
import Buttonbutton from "./routes/Buttonbutton";
import ChangePage from "./Components/ChangePage";
import "./scss/cssReset.scss";

function App() {
  const [menu, setMenu] = useState(false);
  const [change, setChange] = useState(false);
  const [stageWidth, setStageWidth] = useState(document.body.clientWidth);
  const [stageHeight, setStageHeight] = useState(document.body.clientHeight);

  const setResize = () => {
    setStageWidth(window.innerWidth);
    setStageHeight(window.innerHeight);
  };

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
      <HashRouter>
        <Header menu={menu} setMenu={setMenu} />
        <Route
          path="/"
          exact={true}
          render={() => (
            <Main
              setMenu={setMenu}
              stageWidth={stageWidth}
              stageHeight={stageHeight}
            />
          )}
        />
        <Route
          path="/theKingOfMains"
          render={() => (
            <TheKingOfMains
              setMenu={setMenu}
              stageWidth={stageWidth}
              stageHeight={stageHeight}
            />
          )}
        />
        <Route
          path="/about"
          render={() => (
            <About
              setMenu={setMenu}
              stageWidth={stageWidth}
              stageHeight={stageHeight}
            />
          )}
        />
        <Route
          path="/buttonbutton"
          render={() => (
            <Buttonbutton
              setMenu={setMenu}
              stageWidth={stageWidth}
              stageHeight={stageHeight}
            />
          )}
        />
        {change && <ChangePage change={change} setChange={setChange} />}
      </HashRouter>
    </>
  );
}

export default App;
