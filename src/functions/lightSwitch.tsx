function lightSwitchHelper(props: any) {
  const color1 = props.color1;
  const color2 = props.color2;
  const color3 = props.color3;
  const colorText = props.colorText;

  let data: HTMLElement = document.getElementById("data") as HTMLElement;
  let info: HTMLElement = document.getElementById("information") as HTMLElement;
  let menuBar: HTMLElement = document.getElementById("menuBar") as HTMLElement;
  let about: HTMLElement = document.getElementById("about") as HTMLElement;

  let projects = document.getElementsByClassName(
    "about-col"
  ) as HTMLCollectionOf<HTMLElement>;
  let locks = document.getElementsByClassName(
    "bi bi-lock"
  ) as HTMLCollectionOf<HTMLElement>;

  let P = document.getElementsByTagName("p") as HTMLCollectionOf<HTMLElement>;
  let H1 = document.getElementsByTagName("h1") as HTMLCollectionOf<HTMLElement>;
  let H2 = document.getElementsByTagName("h2") as HTMLCollectionOf<HTMLElement>;
  let H3 = document.getElementsByTagName("h3") as HTMLCollectionOf<HTMLElement>;
  let H4 = document.getElementsByTagName("h4") as HTMLCollectionOf<HTMLElement>;
  let A = document.getElementsByTagName("a") as HTMLCollectionOf<HTMLElement>;
  let L = document.getElementsByTagName(
    "label"
  ) as HTMLCollectionOf<HTMLElement>;

  let particles: HTMLElement = document.getElementById(
    "tsparticles"
  ) as HTMLElement;
  let profileImage: HTMLElement = document.getElementById(
    "profileImage"
  ) as HTMLElement;
  var items: any = document.getElementsByClassName("timeline-bottom");
  var items2: any = document.getElementsByClassName("timeline-bottom-sub");
  var projectModals: any = document.getElementsByClassName("modal");
  for (let i = 0; i < items.length; i++) {
    let element = items[i];
    element.style.border = `2px solid ${color1}`;
  }
  for (let i = 0; i < items2.length; i++) {
    let element = items2[i];
    element.style.border = `3px solid ${color1}`;
  }
  for (let i = 0; i < projectModals.length; i++) {
    let element = projectModals[i];
    element.style.backgroundColor = color3;
  }

  data.style.backgroundColor = color3;
  info.style.backgroundColor = color2;
  about.style.backgroundColor = color2;
  profileImage.style.border = `6px solid ${color1}`;
  menuBar.style.backgroundColor = color3;

  const entities = [P, H1, H2, H3, H4, A, L, locks];
  for (let j = 0; j < entities.length; j++) {
    let subjects = entities[j];
    for (let i = 0; i < subjects.length; i++) {
      let el = subjects[i];
      el.style.color = colorText;
    }
  }
  for (let i = 0; i < projects.length; i++) {
    let el = projects[i];
    el.style.backgroundColor = color3;
    el.style.border = `1px solid ${colorText}`;
  }
}

function lightSwitch() {
  let data: HTMLElement = document.getElementById("data") as HTMLElement;
  if (data.style.backgroundColor !== "rgb(85, 88, 238)") {
    // ============================== DARK THEME ==============================
    console.log("Switch to dark theme.");
    const color1 = "#AAC4FF";
    const color2 = "#6668e1";
    const colorText = "white";
    const color3 = "#5558ee";
    lightSwitchHelper({ color1, color2, colorText, color3 });
  } else {
    // ============================== LIGHT THEME ==============================
    console.log("Switch to light theme.");
    const color1 = "#6668e1";
    const color2 = "#AAC4FF";
    const colorText = "grey";
    const color3 = "white";
    lightSwitchHelper({ color1, color2, colorText, color3 });
  }
}

export default lightSwitch;
