function Menu() {
  return (
    <>
      <nav>
        <div className="nav-links" id="navLinks">
          <i className="fa fa-times"></i>
          <ul>
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
              <a href="#game">GAME</a>
            </li>
          </ul>
        </div>
        <i className="fa fa-bars"></i>
      </nav>
    </>
  );
}

export default Menu;
