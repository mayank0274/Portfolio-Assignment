import menuImage from "../assets/menu-bar.png";
import menuImageClose from "../assets/close-menu.svg";
import { Link } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  // toggleMenu
  const toggleMenu = () => {
    setMenu((prev) => {
      return !menu;
    });
  };

  return (
    <nav>
      <section className="logo">
        <h3>Luck Sharma</h3>
      </section>
      <section className="menu">
        <ul className={!menu ? "hideMenu" : "showMenu"}>
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/about">
            <li>About</li>
          </Link>
          <Link to="/projects">
            <li>Projects</li>
          </Link>
          <Link to="/contact">
            <li>Contact</li>
          </Link>
        </ul>
        <img
          src={!menu ? menuImage : menuImageClose}
          className="menuToggler"
          alt="menuToggler"
          onClick={() => {
            toggleMenu();
          }}
        />
      </section>
    </nav>
  );
};

export default Navbar;
