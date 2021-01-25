import Logo from "../figure/Logo";
import "../scss/header.scss";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <h1>
        <Link to="/">
          <Logo />
        </Link>
      </h1>
    </header>
  );
}
