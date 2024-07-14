import lightSwitch from "../functions/lightSwitch";
import React from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';

function Button(icon: string) {
  return (
    <>
      <a target="_blank">
        <button
          type="button"
          className={icon}
          onClick={() => {
            return null;
          }}
        ></button>
      </a>
    </>
  );
}

function Menu() {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      <nav id="menuBar">
        <div className="nav-links" id="navLinks">
          <i className="fa fa-times" id="closeMenu"></i>
          <ul>
            <li>
              <Link
                activeClass="active"
                to="particles-js"
                spy={true}
                smooth={true}
                offset={-70} // Adjust the offset as needed
                duration={500}
              >
                HOME
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                ABOUT
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                to="data"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                PORTFOLIO
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                to="stack"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                TECH STACK
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                to="information"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                CONTACT
              </Link>
            </li>
          </ul>
        </div>
        <i className="fa fa-bars" id="openMenu" onClick={scrollToTop}></i>
      </nav>
    </>
  );
}

export default Menu;
