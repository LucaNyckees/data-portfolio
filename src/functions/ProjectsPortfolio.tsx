import projContents from "../variables/projects";

function closeProj() {
  let modal: HTMLElement = document.getElementById("myModal") as HTMLElement;
  modal.innerHTML = "";
  for (let i = 0; i < projContents.length; i++) {
    let proj: HTMLElement = document.getElementById(`proj${i}`) as HTMLElement;
    proj.style.filter = "blur(0px)";
    proj.style.zIndex = "auto";
  }
  modal.style.borderColor = "white";
  modal.style.zIndex = "-1";
  let section: HTMLElement = document.getElementById("data") as HTMLElement;
  section.style.backgroundColor = "white";
  let title: HTMLElement = document.getElementById("dataTitle") as HTMLElement;
  title.style.filter = "blur(0px)";
}

function displayProj(projIndex: number) {
  for (let i = 0; i < projContents.length; i++) {
    let proj: HTMLElement = document.getElementById(`proj${i}`) as HTMLElement;
    proj.style.filter = "blur(8px)";
    proj.style.zIndex = "-1";
  }
  let projContent = projContents[projIndex];
  let lbls = projContent.labels;
  let modal: HTMLElement = document.getElementById("myModal") as HTMLElement;
  let git = projContent.git;
  let pres = projContent.pres;
  let report = projContent.report;
  let poster = projContent.poster;
  let lblsString = lbls.map((obj) => "<label>#" + obj + "</label>").join("");
  modal.innerHTML = `<h2>${projContent.title}</h2>\
    <h3>${projContent.date}</h3>\
    <button className="close" dataDismiss="modal" onClick={closeProj}>&times</button>\
    <p>${projContent.description}</p>\
    <img src=${projContent.imageSource}><div className="projButton">`;
  if (git !== "") {
    modal.innerHTML += `<a href="${git}" target="_blank" className="proj-btn">GitHub</a>`;
  }
  if (report !== "") {
    modal.innerHTML += `<a href="${report}" target="_blank" className="proj-btn">Report</a>`;
  }
  if (pres !== "") {
    modal.innerHTML += `<a href="${git}" target="_blank" className="proj-btn">Presentation</a>`;
  }
  if (poster !== "") {
    modal.innerHTML += `<a href="${poster}" target="_blank" className="proj-btn">Poster</a>`;
  }
  modal.innerHTML += "</div>";
  modal.innerHTML += "<div>" + lblsString + "</div>";
  modal.style.borderColor = "rgba(120, 120, 135, 0.122)";
  modal.style.zIndex = "auto";
  let section: HTMLElement = document.getElementById("data") as HTMLElement;
  section.style.backgroundColor = "rgba(57, 72, 116, 0.401)";
  let title: HTMLElement = document.getElementById("dataTitle") as HTMLElement;
  title.style.filter = "blur(8px)";
}

export { displayProj, closeProj };
