import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { animateScroll as scroll } from 'react-scroll';
import { useEffect, useRef } from 'react';

function useScrollToAnchor() {
  const location = useLocation();
  const lastHash = useRef('');

  // listen to location change using useEffect with location as dependency
  // https://jasonwatmore.com/react-router-v6-listen-to-location-route-change-without-history-listen
  useEffect(() => {
    if (location.hash) {
      lastHash.current = location.hash.slice(1); // safe hash for further use after navigation
    }

    if (lastHash.current && document.getElementById(lastHash.current)) {
      setTimeout(() => {
        const element = 
        document
          .getElementById(lastHash.current)
          element?.scrollIntoView({ behavior: 'smooth', block: 'start', });
          // const top = element?.getBoundingClientRect().top || 0;
          // console.log({top})
          // if (top !== 49.8515625) window.scrollTo({ behavior: 'smooth', top: top - 50 });
        lastHash.current = '';
      }, 100);
    }
  }, [location]);
}


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

  useScrollToAnchor()

  return (
    <>
      <nav id="menuBar">
        <div className="nav-links" id="navLinks">
          <i className="fa fa-times" id="closeMenu"></i>
          <ul>
            <li>
              <Link
                // activeClass="active"
                to="/#particles-js"
                // spy={true}
                // smooth={true}
                // offset={-70} // Adjust the offset as needed
                // duration={500}
              >
                HOME
              </Link>
            </li>
            <li>
              <Link
                // activeClass="active"
                to="/#about"
                // spy={true}
                // smooth={true}
                // offset={-70}
                // duration={500}
              >
                ABOUT
              </Link>
            </li>
            <li>
              <Link
                // activeClass="active"
                to="/#data"
                // spy={true}
                // smooth={true}
                // offset={-70}
                // duration={500}
              >
                PORTFOLIO
              </Link>
            </li>
            <li>
              <Link
                // activeClass="active"
                to="/#stack"
                // spy={true}
                // smooth={true}
                // offset={-70}
                // duration={500}
              >
                TECH STACK
              </Link>
            </li>
            <li>
              <Link
                // activeClass="active"
                to="/#information"
                // spy={true}
                // smooth={true}
                // offset={-70}
                // duration={500}
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
