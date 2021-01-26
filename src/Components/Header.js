import Logo from "../figure/Logo";
import "../scss/header.scss";
import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";
import { SeparateText } from "../hook/SeperateText";
import { ColorArray } from "../hook/Color";

export default function Header({ menu, setMenu }) {
  const menuRef = useRef(),
    menuModalRef = useRef(),
    navRef = useRef();

  const toggleMenu = () => {
    setMenu((v) => !v);
  };

  useEffect(() => {
    if (menu) {
      menuModalRef.current.classList.add("active");
      document.querySelector("#Portfolio").classList.add("menuOn");
    } else {
      menuModalRef.current.classList.remove("active");
      document.querySelector("#Portfolio").classList.remove("menuOn");
    }
  }, [menu, menuRef, menuModalRef]);

  useEffect(() => {
    const navLi = Object.values(navRef.current.children);

    SeparateText("navAbout", "About", "span", true);
    SeparateText("navTheKingOfMains", "TheKingOfMains", "span", true);
    SeparateText("navButtonButton", "ButtonButton", "span", true);
    SeparateText("navContact", "Contact", "span", true);

    navLi.map((item) => {
      item.addEventListener("mouseenter", () => {
        let randomColor = Math.floor(Math.random() * ColorArray.length);

        item.style.textShadow = `10px 10px 0 ${ColorArray[randomColor]}`;
      });

      item.addEventListener("mouseleave", () => {
        item.style.textShadow = `0px 0px 0 transparent`;
      });
    });
  }, []);
  return (
    <>
      <header>
        <h1>
          <Link to="/">
            <Logo />
          </Link>
        </h1>

        <div className="menu" ref={menuRef} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </header>

      <section id="menuModal" ref={menuModalRef}>
        <div className="blink"></div>
        <div className="menu" onClick={toggleMenu}>
          닫기
        </div>
        <div className="content">
          <ul ref={navRef}>
            <li>
              <b>
                <Link to="/" onClick={toggleMenu} id="navAbout"></Link>
              </b>
            </li>
            <li>
              <b>
                <Link
                  to="/theKingOfMains"
                  onClick={toggleMenu}
                  id="navTheKingOfMains"
                ></Link>
              </b>
            </li>
            <li>
              <b>
                <Link
                  to="/Buttonbutton"
                  onClick={toggleMenu}
                  id="navButtonButton"
                ></Link>
              </b>
            </li>
            <li>
              <b>
                <Link
                  to="/Buttonbutton"
                  onClick={toggleMenu}
                  id="navContact"
                ></Link>
              </b>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}

const navLiHover = (target, colors) => {
  target.addEventListener("mouseover");
};
