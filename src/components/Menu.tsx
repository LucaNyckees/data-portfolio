import lightSwitch from "../functions/lightSwitch";

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
  return (
    <>
      <nav id="menuBar">
        {/* <button type="button" className="LightButton" onClick={lightSwitch}>
          <div className="LightButtonSymbol"></div>
        </button> */}

        <div className="nav-links" id="navLinks">
          <i className="fa fa-times" id="closeMenu"></i>
          <ul>
            <li></li>
            <li>
              <a href="#particles-js">HOME</a>
            </li>
            <li>
              <a href="#about">ABOUT ME</a>
            </li>
            <li>
              <a href="#data">DATA SCIENCE PORTFOLIO</a>
            </li>
            <li>
              <a href="#stack">TECH STACK</a>
            </li>
            {/* <li>
              <a href="#game">GAME</a>
            </li> */}
          </ul>
        </div>
        <i className="fa fa-bars" id="openMenu"></i>
      </nav>
    </>
  );
}

export default Menu;
