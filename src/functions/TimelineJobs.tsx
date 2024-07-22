import jobContents from "../variables/jobs";

function displayJob(jobIndex: number) {
  let jobContent = jobContents[jobIndex];
  let box: HTMLElement = document.getElementById(
    "displayJobBox"
  ) as HTMLElement;
  box.innerHTML = `
    <h2>
      ${jobContent.title} at
      ${jobContent.company}
    </h2>
  `;
  box.innerHTML += `<p>${jobContent.description}</p>`;
  box.innerHTML += `<a href=${jobContent.href} target="_blank">
    Learn more
  </a>`;
  // box.style.backgroundColor = "white";
  box.style.border = `none`;
  box.style.height = "40vh";
}

function undisplayJob() {
  let box: HTMLElement = document.getElementById(
    "displayJobBox"
  ) as HTMLElement;
  box.innerHTML = "";
  box.style.border = "0px solid #4d4b4b";
}

export { displayJob, undisplayJob };
