import { Link } from 'react-scroll';

function Intro() {
  return (
    <div className="text-box" id='name-and-logo-text-box'>
      <h1 className='name-and-logo'>
        LUCA NYCKEES
      </h1>
      {/* <img src={my_logo} alt="My Logo" className="logo" /> */}
      <p>
        Hey there, welcome to my homepage.
      </p>
      <Link to="about" smooth={true} duration={500} id="from-top-to-about">
        <a id="start-expand" className="material-symbols-outlined bouncing">
          expand_more
        </a>
      </Link>
    </div>
  );
}

export default Intro;
