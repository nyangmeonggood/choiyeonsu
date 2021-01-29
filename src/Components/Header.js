import Logo from "../figure/Logo";
import "../scss/header.scss";
import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";
import { SeparateText } from "../hook/SeperateText";
import { ColorArray } from "../hook/Color";

export default function Header({ menu, setMenu }) {
  const menuRef = useRef(),
    menuModalRef = useRef(),
    blinkRef = useRef(),
    navRef = useRef(),
    logoRef = useRef();

  const toggleMenu = () => {
    setMenu((v) => !v);
    let randomBlink = Math.floor(Math.random() * ColorArray.length);
    blinkRef.current.style.backgroundColor = ColorArray[randomBlink];

    if (document.getElementById("mainTitle")) {
      document.getElementById("mainTitle").classList.remove("active");
    }
  };

  const titleFunc = () => {
    setMenu((v) => !v);

    if (document.getElementById("mainTitle")) {
      document.getElementById("mainTitle").classList.add("active");
    }
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
    SeparateText("navMain", "Title", "span", true);

    navLi.forEach((item) => {
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
        <div className="blink" ref={blinkRef}></div>
        <div className="content">
          <div className="menu" onClick={titleFunc}>
            CLOSE
          </div>
          <div className="logo" ref={logoRef}>
            <Logo />
          </div>
          <ul ref={navRef}>
            <li data-desc="Who is yeonsu?">
              <b>
                <Link to="/about" onClick={toggleMenu} id="navAbout"></Link>
              </b>
            </li>

            <li data-desc="What is best design of main?">
              <b>
                <Link
                  to="/theKingOfMains"
                  onClick={toggleMenu}
                  id="navTheKingOfMains"
                ></Link>
              </b>
            </li>

            <li data-desc="Every Buttons what you want">
              <b>
                <Link
                  to="/Buttonbutton"
                  onClick={toggleMenu}
                  id="navButtonButton"
                ></Link>
              </b>
            </li>
            <li data-desc="Go Home">
              <b>
                <Link to="/" onClick={titleFunc} id="navMain"></Link>
              </b>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}
