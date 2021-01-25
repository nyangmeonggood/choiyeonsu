import { BrowserRouter, Route } from "react-router-dom";
import TheKingOfMains from "./routes/TheKingOfMains";
import Buttonbutton from "./routes/Buttonbutton";
import "./scss/cssReset.scss";
import Main from "./Main";
import Header from "./Components/Header";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Route path="/" exact="true" component={Main} />
        <Route path="/theKingOfMains" component={TheKingOfMains} />
        <Route path="/buttonbutton" component={Buttonbutton} />
      </BrowserRouter>
    </>
  );
}

export default App;
