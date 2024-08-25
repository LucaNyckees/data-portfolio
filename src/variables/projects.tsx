//--- IMAGES
import UPHESS_project1 from "../images/project_pictures/UPHESS_project1.jpeg";
import UPHESS_project2 from "../images/project_pictures/UPHESS_project2.png";
import UPHESS_project3 from "../images/project_pictures/UPHESS_project3.png";
import UPHESS_project4 from "../images/project_pictures/UPHESS_project4.png";
import QH_project1 from "../images/project_pictures/QH_project1.png";
import QH_project2 from "../images/project_pictures/QH_project2.png";
import QH_project3 from "../images/project_pictures/QH_project3.png";
import QH_project4 from "../images/project_pictures/QH_project4.png";
import EPFL_project1 from "../images/project_pictures/EPFL_project1.png";
import EPFL_project2 from "../images/project_pictures/EPFL_project2.png";
import EPFL_project3 from "../images/project_pictures/EPFL_project3.png";
import EPFL_project4 from "../images/project_pictures/EPFL_project4.png";

//--- REPORTS AND POSTERS
import PDM_poster from "../files/PDM_poster.pdf";
import PDM from "../files/PDM.pdf";
import LabelPropagationReport from "../files/LabelPropagationReport.pdf";
import CNN_report from "../files/CNN_report.pdf";
import covid19tda_report from "../files/covid19tda_report.pdf";
import PMT_report from "../files/PMT_report.pdf";
import PMT_presentation from "../files/PMT_presentation.pdf";
import SCV_report from "../files/SCV_report.pdf"

//------------------------------------- DATA SCIENCE PROJECTS -------------------------------------------

let projContents = [
  {
    title: "Network and Topological Data Analysis for COVID19 Data in Geneva",
    description:
      "We study the spreading process of COVID19 by analysing contact tracing data through \
                     network and topological methods like graph calibration and standard persistent homology. \
                     We create an efficient pipeline and develop a Streamlit web application for data visualization. \
                     Interactions between users are modeled through simplicial complexes, allowing \
                     for higher dimensional information within the spreading process.\
                     Note : the GitHub repository contains notebooks with confidential clinical data and is thus private. Don't hesitate to contact me for more details.",
    implementation:
      "We implement this using standard network and topology libraries, including GUDHI and NetworkX for the analysis. \
      We use PyVis and Plotly for visualisation. Moreover, Streamlit is used \
      in order to develop a web app (interactive dashPortfolio). The whole project is built as a Docker image. Data comes from \
      a collaboration between the lab and hospitals in Geneva and are confidential - we thus chose to keep the \
      GitHub repository private.",
    imageSource: UPHESS_project1,
    labels: ["docker", "topology", "python", "graph theory", "NetworkX"],
    cut: 3,
    rel_width: "70%",
    rel_height_open: "44%",
    date: "Spring 2021",
    git: "private",
    pres: "",
    poster: "",
    report: covid19tda_report,
  },

  {
    title: "A TensorFlow Optimization ML Framework for the Linear Integral Sheaf Metric",
    description:
      "This project is part of my master thesis, realized with Dr. Nicolas Berkouk. \
                     In applied topology, there is a powerful data analysis tool called persistent homology.\
                     We consider a generalization of this tool called multi-parameter\
                     persistent homology and implement an associated metric that allows for better understanding\
                     complex data such as high-dimensional point-clound data. We provide a rich visualization of the\
                     method by investigating the case of digit image classification. ",
    implementation:
    "We implement the core neural network algorithms with TensorFlow. The clustering part ouputs a distance matrix,  \
    which we visualize with a UMAP embedding (Uniform Manifold Approximation and Projection for Dimension Reduction). \
    We make use of PyVis and Plotly for everything related to visualisation purposes.",
    imageSource: UPHESS_project2,
    labels: ["optimization", "TensorFlow", "python", "topology", "classification"],
    cut: 2,
    rel_width: "70%",
    rel_height_open: "40%",
    date: "Spring 2022",
    git: "https://github.com/LucaNyckees/topology-metric",
    pres: "",
    poster: PDM_poster,
    report: PDM,
  },

  {
    title: "Statistical Analysis for the Geneva Meteorological Observatory",
    description:
      "This project was realized with Kieran Vaudaux, for the course 'Statistical Computation \
                     and Visualization' taught by M. Golham at EPFL. It consisted in performing a rigorous statistical \
                     analysis of meteorological data in Switzerland, and implementing a time-series forecasting model designed to make \
                     meteorological predictions. An emphasis was put on data visualization. The project came in wrapped up as a \
                     Streamlit web application.",
    implementation:
      "Data comes from the European Climate Assessment and Dataset Center. We used various statistical analysis frameworks, \
      including scipy, statsmodels and scikit-learn. Visualisation was made with matplotlib and Plotly. The whole project \
      came in as a wrapped up Streamlit application, containing both the final report and a multi-pages dashPortfolio.",
    imageSource: EPFL_project3,
    labels: ["data viz", "time series forecasting", "statistical analysis", "python", "docker"],
    cut: 2,
    rel_width: "60%",
    rel_height_open: "40%",
    date: "Autumn 2021",
    git: "https://github.com/LucaNyckees/climate-forecasting-v4",
    pres: "",
    poster: "",
    report: SCV_report,
  },

  {
    title: "The Levelset Zigzag Homology Framework in Topological Data Analysis",
    description:
      "We consider a generalization of this persistent homology called levelset zigzag \
                    persistent homology and make a survey about how the \
                    various linked mathematical frameworks relate to one another. We implement a web application \
                     that allows for a visualizing how levelset zigzag homology works when it is used to \
                     study the shape of spaces and point-cloud data.",
    implementation:
    "For this work, we make use of the topology and geometry library GUDHI for the core algorithms. \
      We use both PyVis and Plotly for everything related to visualisation purposes, and wrap a part of the project \
      (the diagram bijection) as a Streamlit web app product.",
    imageSource: UPHESS_project3,
    labels: ["web app", "topological data analysis", "multi-parameter", "data viz"],
    cut: 2,
    rel_width: "70%",
    rel_height_open: "40%",
    date: "Summer 2021",
    git: "https://github.com/LucaNyckees/zigzag-homology",
    pres: "",
    poster: "",
    report: "https://arxiv.org/abs/2210.00916",
  },

  {
    title: "Graph Theoretical Label Propagation for Image Classification",
    description:
      "This project was realized in the contex of the course 'Statistical Machine \
                     Learning' taught by Guillaume Obozinski at EPFL. We investigate a type of semi-supervised \
                     learning algorithm designed to efficiently tackle binary and multi-classification problems \
                     with a very low proportion of labeled data. More precisely, we introduce and study the functioning of \
                     label propagation via diffusion on a graph. We evaluate the introduced model by interpreting new results \
                     based on the problem of classifying hand-written digits. This work will strengthen the a priori \
                     supposition that this label propagation method proves promising when compared to other models, in the case \
                     where only a small amount of labeled data is available.",
    implementation:
      "We make use of almost no external libraries for the graph label propagation algorithms, as the scope was to make a \
      from-scratch implementation of those. For comparing with other methods, we use standard libraries, including scikit-learn. \
      Finally, plotly is used for everything that is visualisation-related.",
    imageSource: EPFL_project2,
    labels: [
      "graph theory",
      "weak supervision",
      "image classification",
      "python",
    ],
    cut: 2,
    rel_width: "90%",
    rel_height_open: "28%",
    date: "Autumn 2020",
    git: "https://github.com/LucaNyckees/graph-label-propagation",
    pres: "",
    poster: "",
    report: LabelPropagationReport,
  },

  {
    title: "Applications of Parametric Morse Theory to Machine Learning",
    description:
      "This project is done with Dr. Celia Hacker and \
                  Dr. Stefania Ebli. \
                  We implement a framework for working with parametric Morse theory, which \
                  provides tools for analyzing the topological changes of a simplicial (cubical) complex \
                  through a filtration. One can build a discrete Morse function on a given complex \
                  (a real-valued labeling of all simplices or cubes that satisfies some hierarchy conditions) and \
                  study the related so-called critical cells in the complex. Those are crucial cells in the sense that, \
                  as opposed to other cells, deleting them from the complex will fundamentally change the overall \
                  topology of the space. DMT has applications in computational \
                  geometry and image processing.",
    implementation:
    "For this work, we make use of the topology and geometry library GUDHI for the core algorithms. A lot of those\
    algorithms are implemented by us, built on top of pre-existing ones.\
      We use both PyVis and Plotly for everything related to visualisation purposes.",
    imageSource: UPHESS_project4,
    labels: ["simplical complexes", "python", "graph theory", "GHUDI"],
    cut: 2,
    rel_width: "64%",
    rel_height_open: "32%",
    date: "Summer 2021",
    git: "https://github.com/LucaNyckees/parametric-morse-theory",
    pres: PMT_presentation,
    poster: "",
    report: PMT_report,
  },

  {
    title: "Convolutional Neural Network Architecture for Road Segmentation",
    description:
      "This project was done in the context of the course 'Machine Learning' at EPFL, given \
                     by M. Jaggi and N. Flammarion. It consisted in implementing various convolutional neural network \
                     architectures and comparing their performance on a road segmentation task : road / non-road pixel \
                     classification for satellite images. CNNs were combined with a deterministic non-trainable convolutional step.",
    implementation:
      "We use the neural network framework from Keras to build our models. Datasets of satellite images (with labels) \
      were provided beforehand by the course administrators.",
    imageSource: EPFL_project1,
    labels: ["image analysis", "neural networks", "segmentation", "PyTorch"],
    cut: 2,
    rel_width: "66%",
    rel_height_open: "44%",
    date: "Autumn 2020",
    git: "",
    pres: "",
    poster: "",
    report: CNN_report,
  },

  // {
  //   title: "Mathematical Modeling of Behavior for Urbanity and Mobility",
  //   description:
  //     "This project, done with J. Bierent and J. Roitel, was realized in the context of the course 'Mathematical \
  //     modeling of behavior' taught by M. Bierlaire at the TRANSP-OR lab of EPFL. It consisted in modeling the way \
  //     various financial and social factors affect the choice of transporation in Switzerland. The theory of \
  //     mathematical modeling of behavior has strong connections to statistical machine learning and has lots of \
  //     applications in the domain of urbanity and mobility. We mainly used the Python package Biogeme to implement \
  //     our models. ",
  //   implementation:
  //     "We use the statistical analysis framework Biogeme, dedicated to tasks related to mathematical behavior modeling and \
  //     implemented by the TRANSP-OR lab of EPFL.",
  //   imageSource: EPFL_project4,
  //   labels: ["statistical ML", "forecasting", "behavior modeling", "python"],
  //   cut: 2,
  //   rel_width: "80%",
  //   rel_height_open: "32%",
  //   date: "Autumn 2021",
  //   git: "",
  //   pres: "",
  //   poster: "",
  //   report: "",
  // },

  {
    title: "Estimating Energy consumption and CO2 Emissions at Building-Level",
    description:
      "In this project, we realized a framework designed to estimate both CO2 emissions and the energy consumption \
      of buildings in Switzerland by using \
      gradient boosting regressors, fit to work with on tabular data with both categorical and numerical variables. \
      The real work of this project lies in the data engineering part, in which we extract meaningful multi-granularity \
      features (i.e. building-level, district-level, locality-level and so on). This was done as part of the master \
      thesis of Hilda Horvath, a student at EPFL in the data science program.",
    implementation:
      "We make use of the XGboost package for building our estimation pipelines, and compare their performance \
      with scikit-learn random regressor models. We use both PyVis and Plotly for \
      everything related to visualisation purposes.",
    imageSource: QH_project1,
    labels: ["XGBoost", "CO2 emissions", "python", "postgreSQL", "MLflow"],
    cut: 2,
    rel_width: "76%",
    rel_height_open: "42%",
    date: "Autumn 2022",
    git: "private",
    pres: "",
    poster: "",
    report: "",
  },

  {
    title: "Impact of Macro-economic Variables on the Real Estate Market",
    description:
      "The real estate market is intricately linked to macro-economic variables, creating a dynamic interplay that \
      shapes its trajectory. We study the impact of macro-economic factors on this market, analyzing how variables \
      such as interest rates, inflation, GDP growth, real estate rent index and employment rates influence property \
      values, real estate asset incomes, demand, and investment patterns. We combine standard mathematical finance \
      techniques to the use of artificial neural networks.",
    implementation:
    "Data comes, in particular, from SwissFundData. \
    We make use of the XGboost package for building our estimation pipelines, and compare their performance \
    with scikit-learn random regressor models. We use both PyVis and Plotly for \
    everything related to visualisation purposes.",
    imageSource: QH_project2,
    labels: ["macro economics", "postgreSQL", "indices", "time series", "MLflow"],
    cut: 2,
    rel_width: "80%",
    rel_height_open: "40%",
    date: "Summer 2022",
    git: "private",
    pres: "",
    poster: "",
    report: "",
  },

  {
    title: "Machine Learning-based Techniques for Real Estate Time-Series Forecasting",
    description:
      "By integrating machine learning capabilities with the precision of mathematical finance, we develop a \
      framework not only ensuring precise predictions but also furnishing valuable insights into the complexities \
      of real estate finance. Whether engaged in non-temporal estimations or time-series forecasting, this modular \
      approach guarantees adaptability and optimal performance across a spectrum of scenarios. On the machine learning \
      side, used for non-temporal estimations of financial target variables, we focus on conventional neural \
      network architectures as well as ensemble learning models such as the class gradient boosting regressors.",
    implementation:
    "We combine the use of XGboost and ARIMA methods.",
    imageSource: QH_project3,
    labels: ["ensemble learning", "MLflow", "time series", "postgreSQL", "python"],
    cut: 2,
    rel_width: "84%",
    rel_height_open: "24%",
    date: "Autumn 2022",
    git: "private",
    pres: "",
    poster: "",
    report: "",
  },

  {
    title: "Environmental Damage Function at Building-Level Data (Hail Insurance Claims)",
    description:
      "This project is an on-going work, in collaboration with two UNIL labs, namely the CRML (Center for Risk \
        Management at Lausanne) and ECCE (Extreme Climatics Center Expertise). Firstly, we aim at providing \
        an environmental damage function - current focus on hail - at the building-level \
        by downscaling climate data from MeteoSwiss and fitting extreme values models on insurance claims data. \
        Secondly, we aim at developing a cost function modeling the financial impact on a building price. \
        The goal is to improve the study of Dr. Ophelia Miralles and Prof. Anthony Davison (article : \
        Bayesian Modeling of Insurance Claims for Hail Damage) by adding a building fragility index to their \
        framework.",
    implementation:
      "Data comes from SwissTopo (aerial images of houses, to predict a hail fragility index via roof analysis), \
      Quanthome (for the financial and other structural features), and AECA (for the insurance data in the canton of \
        Vaud, Switzerland). ",
    imageSource: QH_project4,
    labels: ["geosciences", "real estate", "hail damage", "climate risk"],
    cut: 2,
    rel_width: "70%",
    rel_height_open: "40%",
    date: "Autumn 2022",
    git: "private",
    pres: "",
    poster: "",
    report: "",
  },
];

export default projContents;
