import cv_file from "../../files/cv_luca_nyckees.pdf";
import profile_pic from "../../images/luca.jpeg";

function MailButton(icon: string) {
  return (
    <>
      <a target="_blank">
        <button
          type="button"
          className={icon}
          onClick={() =>
            (window.location.href = "mailto:luca.nyckees99@gmail.com")
          }
        ></button>
      </a>
    </>
  );
}

function MediaButton(href: string, icon: string) {
  return (
    <>
      <a href={href} target="_blank">
        <button type="button" className={icon}></button>
      </a>
    </>
  );
}

function AboutHead() {
  return (
    <>
      <h1>ABOUT ME</h1>
      <p>I once solved an 8 years + puzzle in only five years.</p>
      <div className="about-image">
        <img src={profile_pic} id="profileImage"></img>
        <div id="aboutButtons">
          {MediaButton(cv_file, "fa fa-file-text")}
          {MediaButton("https://www.linkedin.com/in/luca-nyckees-64674320b/", "fa fa-linkedin")}
          {MediaButton("https://github.com/LucaNyckees", "fa fa-github")}
        </div>
      </div>
    </>
  );
}

export { AboutHead, MediaButton, MailButton };
