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
        <img src="images/luca.jpeg"></img>
        <div id="aboutButtons">
          {MediaButton("files/cv_luca_nyckees.pdf", "fa fa-file-text")}
          {MediaButton(
            "https://www.linkedin.com/in/luca-nyckees-64674320b/",
            "fa fa-linkedin"
          )}
          {MediaButton("https://github.com/LucaNyckees", "fa fa-github")}
        </div>
      </div>
    </>
  );
}

export { AboutHead, MediaButton };
