//--- IMAGES
import UPHESS_project1 from "../../images/UPHESS_project1.jpeg";
import UPHESS_project2 from "../../images/UPHESS_project2.png";
import UPHESS_project3 from "../../images/UPHESS_project3.png";
import UPHESS_project4 from "../../images/UPHESS_project4.png";
import QH_project1bis from "../../images/QH_project1tris.png";
import QH_project2 from "../../images/QH_project2.png";
import QH_project3 from "../../images/QH_project3.png";
import QH_project4 from "../../images/QH_project4.png";
import EPFL_project1 from "../../images/EPFL_project1.png";
import EPFL_project2 from "../../images/EPFL_project2.png";
import EPFL_project3 from "../../images/EPFL_project3.png";
import EPFL_project4 from "../../images/EPFL_project4.png";

//--- REPORTS AND POSTERS
import PDM_poster from "../../files/PDM_poster.pdf";
import PDM from "../../files/PDM.pdf";
import LabelPropagationReport from "../../files/LabelPropagationReport.pdf";
import CNN_report from "../../files/CNN_report.pdf";
import covid19tda_report from "../../files/covid19tda_report.pdf";
import PMT_report from "../../files/PMT_report.pdf";
import PMT_presentation from "../../files/PMT_presentation.pdf";

//------------------------------------- DATA SCIENCE PROJECTS -------------------------------------------

let projContents = [
  {
    title: "Topological Data Analysis for COVID19 Data",
    description:
      "This is a project done with the Laboratory of Topology and Neuroscience at EPFL, \
                     under the supervision of Prof. Kathryn Hess Bellwald, Dr. Stefania Ebli and Dr. \
                     Celia Hacker and in collaboration with Yann Mentha. \
                     We study the spreading process of COVID19 by analysing contact tracing data through \
                     network and topological methods like graph calibration and standard persistent homology. \
                     We create an efficient pipeline and develop a Streamlit web application for data visualization. \
                     Interactions between users are modeled through simplicial complexes, whose structure allows \
                     for higher dimensional information within the spreading process.",
    imageSource: UPHESS_project1,
    labels: ["docker", "topology", "python", "graph-theory", "web-app"],
    cut: 3,
    rel_width: "70%",
    date: "Spring 2021",
    git: "private",
    pres: "",
    poster: "",
    report: covid19tda_report,
  },

  {
    title: "Topological Optimization Machine Learning",
    description:
      "This project is part of my master thesis, realized under the supervision of \
                     Prof. Kathryn Hess Bellwald and Dr. Nicolas Berkouk - in the Laboratory of Topology and \
                     Neuroscience at EPFL. In applied topology, there is a powerful data analysis tool called persistent homology.\
                     In this project, we considered a generalization of this tool called multi-parameter\
                     persistent homology and implemented an associated metric that allows for better understanding\
                     complex data such as high-dimensional point-clound data. We provide a rich visualization of the\
                     method by investigating the case of digit image classification. ",
    imageSource: UPHESS_project2,
    labels: ["topology", "multi-parameter", "metric", "smart-classifier"],
    cut: 2,
    rel_width: "70%",
    date: "Spring 2022",
    git: "https://github.com/LucaNyckees/topology-metric",
    pres: "",
    poster: PDM_poster,
    report: PDM,
  },

  {
    title: "Computing Levelset Zigzag Homology",
    description:
      "This project was realized under the supervision of \
                     Prof. Kathryn Hess Bellwald and Dr. Nicolas Berkouk, from the Laboratory of Topology and \
                     Neuroscience at EPFL. In applied topology, there is a powerful data analysis tool called persistent homology.\
                     In this project, we consider a generalization of this tool called levelset zigzag \
                     persistent homology and make a survey about the various techniques revolving around \
                     this generalization, as well as how they link to one another. We implement a web application \
                     that allows for a visualizing how levelset zigzag homology works when it is used to \
                     study the shape of spaces and point-cloud data.",
    imageSource: UPHESS_project3,
    labels: ["topology", "multi-parameter", "viz", "survey"],
    cut: 2,
    rel_width: "70%",
    date: "Summer 2021",
    git: "https://github.com/LucaNyckees/zigzag-homology",
    pres: "",
    poster: "",
    report: "https://arxiv.org/abs/2210.00916",
  },

  {
    title: "Applications of Discrete Morse Theory to Machine Learning",
    description:
      "We implement tools to apply a specific type of Morse theory called parametric Morse theory. \
                  This is done in the context of a semester project under the supervision of Celia Hacker and \
                  Stefania Ebli, in the Laboratory for Topology and Neuroscience at EPFL, directed by Kathryn Hess. \
                  Discrete Morse theory (DMT) is the discrete analog of smooth Morse theory, as developed by Robin \
                  Forman. It provides tools for analyzing the topological changes of a simplicial or cubical complex \
                  through a filtration. In brief, one can build a discrete Morse function on a given complex \
                  (a real-valued labeling of all simplices or cubes that satisfies some hierarchy conditions) and \
                  study the related so-called critical cells in the complex. Those are crucial cells in the sense that, \
                  as opposed to other cells, deleting them from the complex will fundamentally change the overall \
                  topology of the space. Generally speaking, DMT has broad applications, notably in homology \
                  computation and, more recently, in image processing via parametric Morse theory.",
    imageSource: UPHESS_project4,
    labels: ["topology", "python", "graph-theory", "geometry"],
    cut: 2,
    rel_width: "80%",
    date: "Summer 2021",
    git: "https://github.com/LucaNyckees/parametric-morse-theory",
    pres: PMT_presentation,
    poster: "",
    report: PMT_report,
  },

  {
    title: "Data Visualization for SwissTopo Geolocation Data",
    description:
      "Creating a complete data visualization analysis pipeline for stochastic real estate data, finance data and \
      geolocation data. Providing wrapped up web-app interactive summaries.",
    imageSource: QH_project1bis,
    labels: ["finance", "real-estate", "viz", "postgreSQL"],
    cut: 2,
    rel_width: "76%",
    date: "Autumn 2022",
    git: "private",
    pres: "",
    poster: "",
    report: "",
  },

  {
    title: "Behavioral Data Imputer for MNAR-type Data",
    description:
      "MNAR-type data (missing not at random) often arises in data processing challenges. Here, we develop \
    a deterministic 'behavioral' model for MNAR-type boolean data in the real estate domain. It considers network \
    structures for modeling interactions between entries with missing data and not only quantifies instances \
    of True, False and Nan values but also relations or edges between True, False and Nan values.\
    ",
    imageSource: QH_project2,
    labels: ["imputation", "real-estate", "viz", "MNAR-data"],
    cut: 2,
    rel_width: "80%",
    date: "Summer 2022",
    git: "private",
    pres: "",
    poster: "",
    report: "",
  },

  {
    title: "Financial Statistics for Real Estate Time-Series Data",
    description:
      "We implement various machine learning models from the class of neural networks and ensemble learning \
    methods to build robust estimation pipelines for non-stochastic financial analysis of real estate data. \
    We also consider mathematical finance models to build a forecasting pipeline for real estate time-series data. \
    In particular, we compare the robustness, efficiency and accuracy of random forest regressors, gradient \
    boosting regressors and standard artificial neural network architectures.",
    imageSource: QH_project3,
    labels: ["ensemble-learning", "real-estate", "time-series", "postgreSQL"],
    cut: 2,
    rel_width: "84%",
    date: "Autumn 2022",
    git: "private",
    pres: "",
    poster: "",
    report: "",
  },

  {
    title: "Developing ESG Criteria for the Real Estate Market",
    description:
      "With a team of data science students, we develop a theory of ESG (environment, society and \
      governance) criteria for the domain of real estate. These indicators apply, in particular, to real estate \
      investment funds. This work is in collaboration with both UNIL and EPFL.",
    imageSource: QH_project4,
    labels: ["environment", "real-estate", "ESG", "mobility"],
    cut: 2,
    rel_width: "80%",
    date: "Autumn 2022",
    git: "private",
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
    imageSource: EPFL_project1,
    labels: ["image-analysis", "neural-net", "segmentation", "pytorch"],
    cut: 2,
    rel_width: "74%",
    date: "Autumn 2020",
    git: "",
    pres: "",
    poster: "",
    report: CNN_report,
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
    imageSource: EPFL_project2,
    labels: [
      "graph-theory",
      "discrete-laplacian",
      "smart-classifier",
      "propagation",
    ],
    cut: 2,
    rel_width: "90%",
    date: "Autumn 2020",
    git: "https://github.com/LucaNyckees/graph-label-propagation",
    pres: "",
    poster: "",
    report: LabelPropagationReport,
  },

  {
    title: "Statistical Analysis for the Geneva Meteorological Observatory",
    description:
      "This project, done with Kieran Vaudaux, was realized in the contex of the course 'Statistical Computation \
                     and Visualization' taught by M. Golham at EPFL. It consisted in performing a rigorous statistical \
                     analysis of meteorological data in Switzerland, and implementing a time-series forecasting model designed to make \
                     meteorological predictions. An emphasis was put on data visualization - the project came in wrapped up as a \
                     Streamlit web application.",
    imageSource: EPFL_project3,
    labels: ["web-app", "forecasting", "statistical-analysis", "viz"],
    cut: 2,
    rel_width: "60%",
    date: "Autumn 2021",
    git: "https://github.com/LucaNyckees/climate-forecasting-v4",
    pres: "",
    poster: "",
    report: "",
  },

  {
    title: "Mathematical Modeling of Behavior for Urbanity and Mobility",
    description:
      "This project, done with J. Bierent and J. Roitel, was realized in the contex of the course 'Mathematical \
      modeling of behavior' taught by M. Bierlaire at the TRANSP-OR lab of EPFL. It consisted in modeling the way \
      various financial and social factors affect the choice of transporation in Switzerland. The theory of \
      mathematical modeling of behavior has strong connections to statistical machine learning and has lots of \
      applications in the domain of urbanity and mobility. We mainly used the Python package Biogeme to implement \
      our models. ",
    imageSource: EPFL_project4,
    labels: ["statistical-ML", "forecasting", "behavior", "transport"],
    cut: 2,
    rel_width: "80%",
    date: "Autumn 2021",
    git: "",
    pres: "",
    poster: "",
    report: "",
  },
];

export default projContents;
