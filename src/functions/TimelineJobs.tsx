import jobContents from "../variables/jobs";

function displayJob(jobIndex: number) {
  let jobContent = jobContents[jobIndex];
  let box: HTMLElement = document.getElementById(
    "displayJobBox"
  ) as HTMLElement;
  box.innerHTML = `
    <h1>
      ${jobContent.title} at
      <a href="${jobContent.href}" target="_blank" style="color: 4d4b4b;">
      ${jobContent.company}
      </a>
    </h1>
  `;
  box.innerHTML += `<p>${jobContent.description}</p>`;
  // box.style.backgroundColor = "white";
  box.style.border = `none`;
}

function undisplayJob() {
  let box: HTMLElement = document.getElementById(
    "displayJobBox"
  ) as HTMLElement;
  box.innerHTML = "";
  box.style.border = "0px solid #4d4b4b";
}

export { displayJob, undisplayJob };
