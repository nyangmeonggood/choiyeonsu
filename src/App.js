import { HashRouter, Route } from "react-router-dom";
import TheKingOfMains from "./routes/TheKingOfMains";
import Buttonbutton from "./routes/Buttonbutton";
import "./scss/cssReset.scss";
import Main from "./Main";
import Header from "./Components/Header";
import { useState } from "react";

function App() {
  const [menu, setMenu] = useState(false);
  return (
    <>
      <HashRouter>
        <Header menu={menu} setMenu={setMenu} />
        <Route path="/" exact={true} component={Main} />
        <Route path="/theKingOfMains" component={TheKingOfMains} />
        <Route path="/buttonbutton" component={Buttonbutton} />
      </HashRouter>
    </>
  );
}

export default App;
