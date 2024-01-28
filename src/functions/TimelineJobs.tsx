import * as styles from "../App.css";
import jobContents from "../variables/jobs";

const color1copy = "#AAC4FF";
const color2copy = "#6668e1";

function displayJob(jobIndex: number) {
  let jobContent = jobContents[jobIndex];
  let box: HTMLElement = document.getElementById(
    "displayJobBox"
  ) as HTMLElement;
  box.innerHTML = `<h1>${jobContent.title} | 
    ${jobContent.company}</h1>`;
  box.innerHTML += `<p>${jobContent.description}</p>`;
  box.style.backgroundColor = "white";
  box.style.border = `none`;
}

function undisplayJob() {
  let box: HTMLElement = document.getElementById(
    "displayJobBox"
  ) as HTMLElement;
  box.innerHTML = "";
  box.style.border = "0px solid #c8e8e9";
}

export { displayJob, undisplayJob };
