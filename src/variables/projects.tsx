//------------------------------------- DATA SCIENCE PROJECTS -------------------------------------------

let projContents = [
  {
    title: "Topological Data Analysis for COVID19 Data",
    description:
      "This is a project done with the Laboratory of Topology and Neuroscience at EPFL, \
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
    report: "",
  },

  {
    title: "Topological Optimization Machine Learning",
    description:
      "This project is part of my master thesis, realized under the supervision of \
                     Prof. Kathryn Hess Bellwald and Dr. Nicolas Berkouk - in the Laboratory of Topology and \
                     Neuroscience at EPFL.</br>\
                     </br>\
                     In applied topology, there is a powerful data analysis tool called persistent homology.\
                     In this project, we considered a generalization of this tool called multi-parameter\
                     persistent homology and implemented an associated metric that allows for better understanding\
                     complex data such as high-dimensional point-clound data. We provide a rich visualization of the\
                     method by investigating the case of digit image classification. ",
    imageSource: "images/UPHESS_project2.png",
    labels: [
      "python",
      "higher-dimensional-data",
      "classification",
      "new-metric",
      "topology",
    ],
    date: "Spring 2022",
    git: "",
    pres: "",
    poster: "files/PDM_poster.pdf",
    report: "files/PDM.pdf",
  },

  {
    title: "Computing Levelset Zigzag Homology",
    description:
      "This project was realized under the supervision of \
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
    labels: [
      "topology",
      "data-visualization",
      "geometry",
      "python",
      "survey",
      "streamlit app",
    ],
    date: "Summer 2021",
    git: "https://github.com/LucaNyckees/zigzaghomology",
    pres: "",
    poster: "",
    report: "https://arxiv.org/abs/2210.00916",
  },

  {
    title: "Applications of Discrete Morse Theory to Machine Learning",
    description: "...",
    imageSource: "images/UPHESS_project4.png",
    labels: [
      "topology",
      "data-visualization",
      "geometry",
      "python",
      "survey",
      "streamlit app",
    ],
    date: "Summer 2021",
    git: "https://github.com/LucaNyckees/zigzaghomology",
    pres: "",
    poster: "",
    report: "https://arxiv.org/abs/2210.00916",
  },

  {
    title: "Data Visualization for SwissTopo Geolocation Data",
    description: "",
    imageSource: "images/QH_project1bis.png",
    labels: ["finance", "real-estate", "viz", "postgreSQL"],
    date: "Autumn 2022",
    git: "",
    pres: "",
    poster: "",
    report: "",
  },

  {
    title: "Behavioral Data Imputer for MNAR-type Data",
    description: "",
    imageSource: "images/QH_project2.png",
    labels: ["imputation", "real-estate", "viz", "MNAR-data"],
    date: "Summer 2022",
    git: "",
    pres: "",
    poster: "",
    report: "",
  },

  {
    title: "Financial Statistics for Real Estate Time-Series Data",
    description: "",
    imageSource: "images/QH_project3.png",
    labels: ["finance", "real-estate", "time-series", "postgreSQL"],
    date: "Autumn 2022",
    git: "",
    pres: "",
    poster: "",
    report: "",
  },

  {
    title: "Developing ESG Criteria for the Real Estate Market",
    description: "",
    imageSource: "images/QH_project4.png",
    labels: ["finance", "real-estate", "time-series", "postgreSQL"],
    date: "Autumn 2022",
    git: "",
    pres: "",
    poster: "",
    report: "",
  },

  {
    title: "Convolutional Neural Network Architecture for Road Segmentation",
    description:
      "This project was done in the context of the course 'Machine Learning' at EPFL, given \
                     by M. Jaggi and N. Flammarion. It consisted in implementing various convolutional neural network \
                     architectures and comparing their performance on a road segmentation task : road / non-road pixel \
                     classification for satellite images. CNNs were combined with a deterministic non-trainable convolutional step.",
    imageSource: "images/EPFL_project1.png",
    labels: ["image-analysis", "neural-net", "segmentation", "pytorch"],
    date: "Autumn 2020",
    git: "",
    pres: "",
    poster: "",
    report: "files/CNN_report.pdf",
  },

  {
    title: "Graph Theoretical Label Propagation for Image Classification",
    description:
      "This project was realized in the contex of the course 'Statistical Machine \
                     Learning' taught by Guillaume Obozinski at EPFL. In this project, we investigate a type of semi-supervised \
                     learning algorithm designed to efficiently tackle binary and multi-classification problems \
                     with a very low proportion of labeled data. More precisely, we introduce and study the functioning of \
                     label propagation via diffusion on a graph. We evaluate the introduced model by interpreting new results \
                     based on the problem of classifying hand-written digits. This work will strengthen the a priori \
                     supposition that this label propagation method proves promising when compared to other models, in the case \
                     where only a small amount of labeled data is available.",
    imageSource: "images/EPFL_project2.png",
    labels: [
      "graph-theory",
      "discrete-laplacian",
      "smart-classifier",
      "propagation",
    ],
    date: "Autumn 2020",
    git: "",
    pres: "",
    poster: "",
    report: "files/LabelPropagationReport.pdf",
  },

  {
    title: "Statistical Analysis for the Geneva Meteorological Observatory",
    description:
      "This project, done with Kieran Vaudaux, was realized in the contex of the course 'Statistical Computation \
                     and Visualization' taught by M. Golham at EPFL. It consisted in performing a rigorous statistical \
                     analysis of meteorological data in Switzerland, and implementing a time-series forecasting model designed to make \
                     meteorological predictions. An emphasis was put on data visualization - the project came in wrapped up as a \
                     Streamlit web application.",
    imageSource: "images/EPFL_project3.png",
    labels: ["web-app", "forecasting", "statistical-analysis", "viz"],
    date: "Autumn 2021",
    git: "https://github.com/KieranVaudaux/SCV_project3",
    pres: "",
    poster: "",
    report: "",
  },

  {
    title: "Mathematical Modeling of Behavior for Urbanity and Mobility",
    description:
      "This project, done with Kieran Vaudaux, was realized in the contex of the course 'Statistical Computation \
                     and Visualization' taught by M. Golham at EPFL. It consisted in performing a rigorous statistical \
                     analysis of meteorological data in Switzerland, and implementing a time-series forecasting model designed to make \
                     meteorological predictions. An emphasis was put on data visualization - the project came in wrapped up as a \
                     Streamlit web application.",
    imageSource: "images/EPFL_project4.png",
    labels: ["statistical-ML", "forecasting", "behavior", "transport"],
    date: "Autumn 2021",
    git: "https://github.com/KieranVaudaux/SCV_project3",
    pres: "",
    poster: "",
    report: "",
  },
];

export default projContents;
