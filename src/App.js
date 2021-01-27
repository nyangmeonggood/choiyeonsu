import { HashRouter, Route } from "react-router-dom";
import TheKingOfMains from "./routes/TheKingOfMains";
import Buttonbutton from "./routes/Buttonbutton";
import "./scss/cssReset.scss";
import Main from "./Main";
import Header from "./Components/Header";
import { useState } from "react";
import About from "./routes/About";

function App() {
  const [menu, setMenu] = useState(false);
  return (
    <>
      <HashRouter>
        <Header menu={menu} setMenu={setMenu} />
        <Route
          path="/"
          exact={true}
          render={() => <Main setMenu={setMenu} />}
        />
        <Route path="/theKingOfMains" component={TheKingOfMains} />
        <Route path="/about" component={About} />
        <Route path="/buttonbutton" component={Buttonbutton} />
      </HashRouter>
    </>
  );
}

export default App;
