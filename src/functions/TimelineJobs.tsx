import * as styles from "../App.css";
import jobContents from "../variables/jobs";

function displayJob(jobIndex: number) {
  let jobContent = jobContents[jobIndex];
  let box: HTMLElement = document.getElementById(
    "displayJobBox"
  ) as HTMLElement;
  console.log(`Displaying job ${jobIndex}.`);

  box.innerHTML = `<h1>${jobContent.title} | 
    ${jobContent.company}</h1>`;
  box.innerHTML += `<p>${jobContent.description}</p>`;
  box.style.backgroundColor = "#589fe2;";
  box.style.border = "1px solid #c8e8e9";
}

function undisplayJob() {
  let box: HTMLElement = document.getElementById(
    "displayJobBox"
  ) as HTMLElement;
  box.innerHTML = "";
  box.style.backgroundColor = "#c8e8e9;";
  box.style.border = "0px solid #c8e8e9";
}

export { displayJob, undisplayJob };
