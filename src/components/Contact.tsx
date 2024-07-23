import { MediaButton } from "./AboutHead";
import { MailButton } from "./AboutHead";

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
        <div id="contactButtons">
          {MailButton("fa fa-envelope")}
          {MediaButton("https://www.linkedin.com/in/luca-nyckees-64674320b/", "fa fa-linkedin")}
          {MediaButton("https://github.com/LucaNyckees", "fa fa-github")}
        </div>
      </div>
    </>
  );
}

export default Contact;
