import { HashRouter, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import Header from "./Components/Header";
import Main from "./Main";
import About from "./routes/About";
import TheKingOfMains from "./routes/TheKingOfMains";
import Buttonbutton from "./routes/Buttonbutton";
import "./scss/cssReset.scss";
import Contact from "./routes/Contact";

function App() {
  const [menu, setMenu] = useState(false);
  const [change, setChange] = useState(false);
  const [stageWidth, setStageWidth] = useState(window.innerWidth);
  const [stageHeight, setStageHeight] = useState(window.innerHeight);
  const [device, setDevice] = useState(false)

  const setResize = () => {
    setStageWidth(window.innerWidth);
    setStageHeight(window.innerHeight);
  };

  const getDeviceType = () => {
    const ua = navigator.userAgent.toLowerCase();
    if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
      return "tablet";
    }
    if (
      /mobile|ip(hone|od)|android|blackberry|iemobile|kindle|silk-accelerated|(hpw|web)os|opera m(obi|ini)/.test(
        ua
      )
    ) {
      return "mobile";
    }
    return "desktop";
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

  // device
  useEffect(() => {
    let device = getDeviceType()
    setDevice(device)

    console.log(device)
  }, []);
  //** device

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
              change={change}
              setChange={setChange}
              device={device}
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
              change={change}
              setChange={setChange}
              device={device}
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
              change={change}
              setChange={setChange}
              device={device}
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
              change={change}
              setChange={setChange}
              device={device}
            />
          )}
        />
        <Route
          path="/contact"
          render={() => (
            <Contact
              stageWidth={stageWidth}
              stageHeight={stageHeight}
              change={change}
              setChange={setChange}
              device={device}
            />
          )}
        />
      </HashRouter>
    </>
  );
}

export default App;
