//------------------------------------- RANDOM WALK ANIMATION -------------------------------------------
function displayWalk(){
    let context = document.getElementById('walk').getContext('2d');

    let screen = {
        color: 'black',
        x: 0,
        y: 0,
        width: window.innerWidth,
        height: window.innerHeight,

        draw: function () {
            context.fillStyle = this.color;
            context.fillRect = (this.x, this.y, this.width, this.height)
        }
    }

    context.canvas.width = screen.width;
    context.canvas.height = screen.height;

    class Walker {
        constructor(x, y, radius, speed, color) {
            this.x = x;
            this.y = y;
            this.radius = radius;
            this.speed = speed;
            this.color = color;
        }

        draw() {
            context.beginPath();
            context.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
            context.fillStyle = this.color;
            context.fill();
        }

        move() {
            switch (Math.floor(Math.random() * 4)) {
                case 0:
                    this.y -= this.speed;
                    break;
                case 1:
                    this.x += this.speed;
                    break;
                case 2:
                    this.y += this.speed;
                    break;
                case 3:
                    this.x -= this.speed;
                    break;

            }
        }
    }

    let walker = new Walker(screen.width * 0.5, screen.height * 0.5, 4, 20, '#C07DF4');


    screen.draw();

    function loop() {
        walker.draw();
        walker.move();
        window.requestAnimationFrame(loop);
    }

    window.requestAnimationFrame(loop);
}   

//------------------------------------- DATA SCIENCE PROJECTS -------------------------------------------

let projContents = [{title: 'Topological Data Analysis for COVID19 Data',
                     description: "This is a project done with the Laboratory of Topology and Neuroscience at EPFL, \
                     under the supervision of Prof. Kathryn Hess Bellwald, Dr. Stefania Ebli and Dr. \
                     Celia Hacker and in collaboration with Yann Mentha.</br>\
                  </br>\
                     We study the spreading process of COVID19 by analysing contact tracing data through \
                     network and topological methods like graph calibration and standard persistent homology. \
                     We create an efficient pipeline and develop a Streamlit web application for data visualization. \
                     Interactions between users are modeled through simplicial complexes, whose structure allows \
                     for higher dimensional information within the spreading process.",
                    imageSource: "images/UPHESS_project1.jpeg",
                    labels: ["docker", "python", "pyvis", "topology", "networks"],
                    date: "Spring 2021",
                    git: "",
                    pres: "",
                    poster: "",
                    report: ""},

                    {title: 'Topological Optimization Machine Learning',
                     description: "This project is part of my master thesis, realized under the supervision of \
                     Prof. Kathryn Hess Bellwald and Dr. Nicolas Berkouk - in the Laboratory of Topology and \
                     Neuroscience at EPFL.</br>\
                     </br>\
                     In applied topology, there is a powerful data analysis tool called persistent homology.\
                     In this project, we considered a generalization of this tool called multi-parameter\
                     persistent homology and implemented an associated metric that allows for better understanding\
                     complex data such as high-dimensional point-clound data. We provide a rich visualization of the\
                     method by investigating the case of digit image classification. ",
                     imageSource: "images/UPHESS_project2.png",
                     labels: ["python", "higher-dimensional-data", "classification", "new-metric", "topology"],
                     date: "Spring 2022",
                     git: "",
                     pres: "",
                     poster: "files/PDM_poster.pdf",
                     report: "files/PDM.pdf"},

                     {title: 'Computing Levelset Zigzag Homology',
                     description: "This project was realized under the supervision of \
                     Prof. Kathryn Hess Bellwald and Dr. Nicolas Berkouk, from the Laboratory of Topology and \
                     Neuroscience at EPFL.</br>\
                     </br>\
                     In applied topology, there is a powerful data analysis tool called persistent homology.\
                     In this project, we consider a generalization of this tool called levelset zigzag \
                     persistent homology and make a survey about the various techniques revolving around \
                     this generalization, as well as how they link to one another. We implement a web application \
                     that allows for a visualizing how levelset zigzag homology works when it is used to \
                     study the shape of spaces and point-cloud data.",
                     imageSource: "images/UPHESS_project3.png",
                     labels: ['topology', 'data-visualization', 'geometry', 'python', 'survey', 'streamlit app'],
                     date: "Summer 2021",
                     git: "https://github.com/LucaNyckees/zigzaghomology",
                     pres: "",
                     poster: "",
                     report: "https://arxiv.org/abs/2210.00916"},

                     {title: 'Applications of Discrete Morse Theory to Machine Learning',
                     description: "...",
                     imageSource: "images/UPHESS_project4.png",
                     labels: ['topology', 'data-visualization', 'geometry', 'python', 'survey', 'streamlit app'],
                     date: "Summer 2021",
                     git: "https://github.com/LucaNyckees/zigzaghomology",
                     pres: "",
                     poster: "",
                     report: "https://arxiv.org/abs/2210.00916"},

                     {title: 'Data Visualization for SwissTopo Geolocation Data',
                     description: "",
                     imageSource: "images/QH_project1tris.png",
                     labels: ['finance', 'real-estate', 'viz', 'postgreSQL'],
                     date: "Autumn 2022",
                     git: "",
                     pres: "",
                     poster: "",
                     report: ""},

                     {title: 'Behavioral Data Imputer for MNAR-type Data',
                     description: "",
                     imageSource: "images/QH_project2.png",
                     labels: ['imputation', 'real-estate', 'viz', 'MNAR-data'],
                     date: "Summer 2022",
                     git: "",
                     pres: "",
                     poster: "",
                     report: ""},

                     {title: 'Financial Statistics for Real Estate Time-Series Data',
                     description: "",
                     imageSource: "images/QH_project3.png",
                     labels: ['finance', 'real-estate', 'time-series', 'postgreSQL'],
                     date: "Autumn 2022",
                     git: "",
                     pres: "",
                     poster: "",
                     report: ""},

                     {title: 'Developing ESG Criteria for the Real Estate Market',
                     description: "",
                     imageSource: "images/QH_project4.png",
                     labels: ['finance', 'real-estate', 'time-series', 'postgreSQL'],
                     date: "Autumn 2022",
                     git: "",
                     pres: "",
                     poster: "",
                     report: ""},

                     {title: 'Convolutional Neural Network Architecture for Road Segmentation',
                     description: "This project was done in the context of the course 'Machine Learning' at EPFL, given \
                     by M. Jaggi and N. Flammarion. It consisted in implementing various convolutional neural network \
                     architectures and comparing their performance on a road segmentation task : road / non-road pixel \
                     classification for satellite images. CNNs were combined with a deterministic non-trainable convolutional step.",
                     imageSource: "images/EPFL_project1.png",
                     labels: ['image-analysis', 'neural-net', 'segmentation', 'pytorch'],
                     date: "Autumn 2020",
                     git: "",
                     pres: "",
                     poster: "",
                     report: "files/CNN_report.pdf"},

                     {title: 'Graph Theoretical Label Propagation for Image Classification',
                     description: "This project was realized in the contex of the course 'Statistical Machine \
                     Learning' taught by Guillaume Obozinski at EPFL. In this project, we investigate a type of semi-supervised \
                     learning algorithm designed to efficiently tackle binary and multi-classification problems \
                     with a very low proportion of labeled data. More precisely, we introduce and study the functioning of \
                     label propagation via diffusion on a graph. We evaluate the introduced model by interpreting new results \
                     based on the problem of classifying hand-written digits. This work will strengthen the a priori \
                     supposition that this label propagation method proves promising when compared to other models, in the case \
                     where only a small amount of labeled data is available.",
                     imageSource: "images/EPFL_project2.png",
                     labels: ['graph-theory', 'discrete-laplacian', 'smart-classifier', 'propagation'],
                     date: "Autumn 2020",
                     git: "",
                     pres: "",
                     poster: "",
                     report: "files/LabelPropagationReport.pdf"},

                     {title: 'Statistical Analysis for the Geneva Meteorological Observatory',
                     description: "This project, done with Kieran Vaudaux, was realized in the contex of the course 'Statistical Computation \
                     and Visualization' taught by M. Golham at EPFL. It consisted in performing a rigorous statistical \
                     analysis of meteorological data in Switzerland, and implementing a time-series forecasting model designed to make \
                     meteorological predictions. An emphasis was put on data visualization - the project came in wrapped up as a \
                     Streamlit web application.",
                     imageSource: "images/EPFL_project3.png",
                     labels: ['web-app', 'forecasting', 'statistical-analysis', 'viz'],
                     date: "Autumn 2021",
                     git: "https://github.com/KieranVaudaux/SCV_project3",
                     pres: "",
                     poster: "",
                     report: ""},

                     {title: 'Mathematical Modeling of Behavior for Urbanity and Mobility',
                     description: "This project, done with Kieran Vaudaux, was realized in the contex of the course 'Statistical Computation \
                     and Visualization' taught by M. Golham at EPFL. It consisted in performing a rigorous statistical \
                     analysis of meteorological data in Switzerland, and implementing a time-series forecasting model designed to make \
                     meteorological predictions. An emphasis was put on data visualization - the project came in wrapped up as a \
                     Streamlit web application.",
                     imageSource: "images/EPFL_project4.png",
                     labels: ['statistical-ML', 'forecasting', 'behavior', 'transport'],
                     date: "Autumn 2021",
                     git: "https://github.com/KieranVaudaux/SCV_project3",
                     pres: "",
                     poster: "",
                     report: ""}
]


function displayProj(projIndex) {
    for (let i=0; i<projContents.length; i++) {
        let proj = document.getElementById(`proj${i}`);
        proj.style.filter = "blur(8px)";
        proj.style.zIndex = "-1";
    }
    let projContent = projContents[projIndex]
    let lbls = projContent.labels;
    let modal = document.getElementById('myModal')
    let git = projContent.git;
    let pres = projContent.pres;
    let report = projContent.report;
    let poster = projContent.poster;
    lblsString = lbls.map(obj => '<label>#'+obj+'</label>').join('');
    modal.innerHTML = `<h2>${projContent.title}</h2>\
    <h3>${projContent.date}</h3>\
    <button type="button" class="close" data-dismiss="modal" onclick="closeProj()">&times;</button>\
    <p>${projContent.description}</p>\
    <img src=${projContent.imageSource}><div class="projButton">`
    if (git!=="") {
        modal.innerHTML += `<a href="${git}" target="_blank" class="proj-btn">GitHub</a>`
    }
    if (report!=="") {
        modal.innerHTML += `<a href="${report}" target="_blank" class="proj-btn">Report</a>`
    }
    if (pres!=="") {
        modal.innerHTML += `<a href="${git}" target="_blank" class="proj-btn">Presentation</a>`
    }
    if (poster!=="") {
        modal.innerHTML += `<a href="${poster}" target="_blank" class="proj-btn">Poster</a>`
    } 
    modal.innerHTML += '</div>'
    modal.innerHTML += '<div>' + lblsString + '</div>'
    modal.style.borderColor = "rgba(120, 120, 135, 0.122)";
    modal.style.zIndex = 'auto';
    let section = document.getElementById('data');
    section.style.backgroundColor = 'rgba(57, 72, 116, 0.401)';
    let title = document.getElementById('dataTitle')
    title.style.filter = "blur(8px)";
}

function closeProj() {
    let modal = document.getElementById('myModal');
    modal.innerHTML = '';
    for (let i=0; i<projContents.length; i++) {
        let proj = document.getElementById(`proj${i}`);
        proj.style.filter = "blur(0px)";
        proj.style.zIndex = "auto";
    }
    modal.style.borderColor = "white";
    modal.style.zIndex = '-1';
    let section = document.getElementById('data');
    section.style.backgroundColor = 'white';
    let title = document.getElementById('dataTitle')
    title.style.filter = "blur(0px)";
}
function getRowId(rowIndex) {
    return String(`projRow${rowIndex}`);
}
function getRowHtml(rowId) {
    row = document.getElementById(rowId)
    let html = document.getElementById(rowId).innerHTML;
    return html
}

function comment(element) {
    let content = "<!--" + element.innerHTML + "-->";
    element.innerHTML = content;
}
function uncomment(element) {
    let content = element.innerHTML
    content = content.replace('<!--', '');
    content = content.replace('-->', '');
    element.innerHTML = content;
}


function displayProjRows(rowIndices) {
    for (let i=0; i<3; i++) {
        let rowId = `projRow${i}`;
        let row = document.getElementById(rowId);
        let text = row.innerHTML;
        if (text.includes("<!--")) {
            uncomment(row);
            row.style.height = "320px";
        }
    }
    for (let i=0; i<3; i++) {
        let rowId = `projRow${i}`;
        let row = document.getElementById(rowId);
        if (!(rowIndices.includes(i))) {
            console.log(`Row ${i} was temporarily suppressed.`)
            comment(row)
            row.style.height = "0px";
            let btn = document.getElementById(`projLabelShow${i}`);
            /*btn.style.backgroundColor = "white";
            btn.style.color = "#b260f1ba";*/
        }
        else {
            if (i===2) {
                let row1 = document.getElementById("projRow1");
                row.style.marginTop = "-28px";
                row1.style.marginTop = "auto";
            }
            if (i===1) {
                let row2 = document.getElementById("projRow2");
                row2.style.marginTop = "auto";
                row.style.marginTop = "-14px";
            }
        }
    }
    if (rowIndices.length === 3) {
        console.log("Showing all.")
        let row1 = document.getElementById("projRow1");
        let row2 = document.getElementById("projRow2");
        row1.style.marginTop = "28px";
        row2.style.marginTop = "28px";
    }

}


/*------------------------ JOBS (TIMELINE) ------------------------*/

let jobContents = [{title: "Student Assistant",
                    company: "Department of Mathematics, EPFL",
                    period: "",
                    description: "As student assistant at EPFL, I've had the chance to be responsible of various tasks such as \
                    on-site and online individual teaching, group teaching, grading of exams and homeworks, creation of exercises and \
                    presenting the resolution of exercises in front of a class. I have been hired by both the departments of physics and mathematics, \
                    for a wide variety of courses."},

                   {title: " Data Science Intern",
                    company: "Laboratory for Topology and Neuroscience, EPFL",
                    period: "",
                    description: "Within the topological data analysis (TDA) division of the lab, \
                    I worked on a project together with a data science student and under the supervision of two PhD students. \
                    We developed a pipeline designed to study the COVID19 spreading process in the canton of Geneva. \
                    We made use of graph theoretical, statistical and topological techniques in order to modelize and analyse \
                    this process. As a final product, the project came in as a Dockerized Streamlit web application."},

                   {title: "Research Developer",
                    company: "Laboratory for Topology and Neuroscience, EPFL",
                    period: "",
                    description: "The Laboratory for Topology and Neuroscience of EPFL has a divsion that focuses \
                    on the applciations of topology to data analysis and machine learning. As a research developer, \
                    I collaborated with Nicolas Berkouk to make a survey about a powerful data analysis tool called \
                    'Levelset Zigzag Persistent Homology'. In realizing this project, I also implemented a Streamlit web application \
                    allowing for an intuitive visual guide of how using this tool works."},

                    {title: "Data Scientist",
                    company: "Quanthome SA",
                    period: "August 2023 - present",
                    description: "Quanthome is a data science startup based in Lausanne, and aiming at digitalizing and analysing \
                    the Swiss real estate market.  \
                    Together with a team of passionate web developers and data scientists, we're designing and implementing complex \
                    pipelines with the latest technology. So far, I have had the chance to work on two main projects, namely one about financial \
                    estimations, and one about developing ESG criteria for buildings and real estate funds."}]

function displayJob(jobIndex) {
    let jobContent = jobContents[jobIndex]
    let box = document.getElementById("displayJobBox");
    box.innerHTML = `<h1>${jobContent.title} | 
    ${jobContent.company}</h1>`
    /*box.innerHTML += `<h2>${jobContent.period}</h2>`*/
    box.innerHTML += `<p>${jobContent.description}</p>`;
    box.style.backgroundColor = "white";
    box.style.border = "1px solid #c8e8e9";
}

function undisplayJob() {
    let box = document.getElementById("displayJobBox");
    box.innerHTML = "";
    box.style.backgroundColor = "#c8e8e9;";
    box.style.border = "1px solid #c8e8e9";
}


/*------------------------ MATH GAME ------------------------*/

function displayGameAnswer() {
    let answer = document.getElementById("game-answer-display-text");
    let link = document.getElementById("lattice-link");
    answer.style.color = "white";
    link.style.color = "white";
}
