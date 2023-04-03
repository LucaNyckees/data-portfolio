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

let projects = [
  {
    name: "Topological Data Analysis for COVID19 Data",
    sourceImage: UPHESS_project1,
    labels: ["docker", "topology", "python", "graph-theory", "web-app"],
    cut: 3,
    rel_width: "70%",
  },
  {
    name: "Topological Optimization Machine Learning",
    sourceImage: UPHESS_project2,
    labels: ["topology", "multi-parameter", "metric", "smart-classifier"],
    cut: 2,
    rel_width: "70%",
  },
  {
    name: "Computing Levelset Zigzag Homology",
    sourceImage: UPHESS_project3,
    labels: ["topology", "multi-parameter", "viz", "survey"],
    cut: 2,
    rel_width: "70%",
  },
  {
    name: "Applications of Discrete Morse Theory to Machine Learning",
    sourceImage: UPHESS_project4,
    labels: ["topology", "python", "graph-theory", "geometry"],
    cut: 2,
    rel_width: "80%",
  },
  {
    name: "Data Visualization for SwissTopo Geolocation Data",
    sourceImage: QH_project1bis,
    labels: ["finance", "real-estate", "viz", "postgreSQL"],
    cut: 2,
    rel_width: "76%",
  },
  {
    name: "Behavioral Data Imputer for MNAR-type Data ",
    sourceImage: QH_project2,
    labels: ["imputation", "real-estate", "viz", "MNAR-data"],
    cut: 2,
    rel_width: "80%",
  },
  {
    name: "Financial Statistics for Real Estate Time-Series Data",
    sourceImage: QH_project3,
    labels: ["imputation", "real-estate", "time-series", "postgreSQL"],
    cut: 2,
    rel_width: "80%",
  },
  {
    name: "Developing ESG Criteria for the Real Estate Market",
    sourceImage: QH_project4,
    labels: ["environment", "real-estate", "ESG", "mobility"],
    cut: 2,
    rel_width: "80%",
  },
  {
    name: "Convolutional Neural Network Architecture for Road Segmentation",
    sourceImage: EPFL_project1,
    labels: ["image-analysis", "neural-net", "segmentation", "pytorch"],
    cut: 2,
    rel_width: "60%",
  },
  {
    name: "Graph Theoretical Label Propagation for Image Classification",
    sourceImage: EPFL_project2,
    labels: [
      "graph-theory",
      "discrete-laplacian",
      "smart-classifier",
      "propagation",
    ],
    cut: 2,
    rel_width: "80%",
  },
  {
    name: "Statistical Analysis for the Geneva Meteorological Observatory",
    sourceImage: EPFL_project3,
    labels: ["web-app", "forecasting", "statistical-analysis", "viz"],
    cut: 2,
    rel_width: "60%",
  },
  {
    name: "Mathematical Modeling of Behavior for Urbanity and Mobility",
    sourceImage: EPFL_project4,
    labels: ["statistical-ML", "forecasting", "behavior", "transport"],
    cut: 2,
    rel_width: "80%",
  },
];

export default projects;
