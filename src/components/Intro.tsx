import { Link } from 'react-scroll';
import my_logo from "../../images/my_logo.png";

function Intro() {
  return (
    <div className="text-box" id='name-and-logo-text-box'>
      <h1 className='name-and-logo'>
        LUCA NYCKEES
      </h1>
      {/* <img src={my_logo} alt="My Logo" className="logo" /> */}
      <h2>Mathematician &#8226; Data scientist &#8226; Software enthusiast</h2>
      <p>
        Hey there. I’m a mathematician, working as <br></br>
        data scientist at Quanthome SA, Lausanne.
      </p>
      <p>This is my homepage.</p>
      <Link to="about" smooth={true} duration={500} id="from-top-to-about">
        <a id="start-expand" className="material-symbols-outlined bouncing">
          expand_more
        </a>
      </Link>
    </div>
  );
}

export default Intro;
