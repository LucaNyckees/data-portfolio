import { MediaButton } from "./AboutHead";
import { MailButton } from "./AboutHead";

function MediaInfo(text: string, icon: string) {
  return (
    <>
      <div>
        <button type="button" className={icon}></button>
        <p>{text}</p>
      </div>
    </>
  );
}

function Contact() {
  return (
    <>
      <div
        className="contactMe"
        style={{
          width: "100%",
          marginBottom: "60px",
        }}
      >
        <div className="contactContainer">
          <h2 style={{ marginBottom: "30px" }}>
            Don't hesitate to send me a message.
          </h2>
        </div>
        <div id="aboutButtons">
          {MailButton("fa fa-envelope")}
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

/*<div
          id="mediaInfoFooter"
          style={{ display: "flex", marginLeft: "34vw" }}
        >
          {MediaInfo("+41 78 721 25 01", "fa fa-phone")}
          {MediaInfo("luca.nyckees99@gmail.com", "fa fa-envelope")}
          {MediaInfo("Lausanne, Switerland", "fa fa-map-pin")}
        </div>*/

export default Contact;
