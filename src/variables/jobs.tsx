import epfl_logo from "../images/job_logos/epfl.png";
import quanthome_logo from "../images/job_logos/quanthome.svg";

const jobContents = [
  {
    title: "Teaching Assistant",
    company: "Department of Mathematics, EPFL",
    dates: "Sept. 2019 - June 2022",
    job_description:
      <p>As student assistant at EPFL, I've had the chance to be responsible for various tasks including the following.
        <br></br>
        <br></br>
          - on-site and online individual teaching<br></br>
          - group teaching<br></br>
          - grading of exams and homeworks<br></br>
          - creation of exercises<br></br>
          - presenting solutions in front of a class
          <br></br>
          <br></br>
        Courses included 1rst year analysis, physics, algebra and geometry courses, as well as more advanced 2nd and 3rd year courses.</p>,
    href: "https://www.epfl.ch/schools/sb/research/math/",
    company_description: "The Department of Mathematics at EPFL (École Polytechnique Fédérale de Lausanne) is renowned for its vibrant research environment and excellence in education. It focuses on a wide range of mathematical disciplines. It also offers comprehensive undergraduate and graduate programs designed to equip students with a solid foundation in mathematical theories and methodologies, preparing them for successful careers in academia, industry, and beyond.",
    tags: ["group tutoring", "exams grading", "problem creation", "solution presentation"],
    imageSource: epfl_logo,
  },

  {
    title: " Data Science Intern",
    company: "Laboratory for Topology and Neuroscience, EPFL",
    dates: "Dec. 2020 - July 2021",
    job_description:
      <p>I worked on a project together with a data science student and under the supervision of two PhD students.
                      We developed a pipeline designed to study the COVID19 spreading process in the canton of Geneva.
                      The project included the following features.
                      <br></br>
                      <br></br>
                      - graph theoretical analysis<br></br>
                      - statistical data analysis<br></br>
                      - topological data analysis<br></br>
                      - building the project with Docker<br></br>
                      - developing a Streamlit web application
                      <br></br>
                      <br></br>
        This project, as a whole, was supervised by Professor Kathryn Hess Bellwald.</p>,
    href: "https://www.epfl.ch/labs/hessbellwald-lab/",
    company_description: "The Laboratory for Topology and Neuroscience at EPFL is directed by Professor K. Hess-Bellwald and is affiliated to the mathematics department. It aims at using tools coming from algebraic topology to tackle complex real-life data challenges, with applications to life sciences (in particular, computational neurosciences) and machine learning problems.",
    tags: ["Docker", "data visualizazion", "graph theory", "applied topology", "COVID19 analysis", "Python"],
    imageSource: epfl_logo,
  },

  {
    title: "Research Developer",
    company: "Laboratory for Topology and Neuroscience, EPFL",
    dates: "Aug. 2021 - Feb. 2022",
    job_description:
    <p>As a research developer,
       I collaborated with Dr. Nicolas Berkouk to make a survey about a powerful topological data analysis tool called
       'Levelset Zigzag Persistent Homology'. In realizing this project, I also implemented a Streamlit web application
       allowing for an intuitive visual guide of how using this tool works. The project included the following features.
       <br></br>
                      <br></br>
                      - mathematics research paper redaction<br></br>
                      - python web application<br></br>
                      - topological data analysis<br></br>
                      - emphasis on diagrams and data visualisation <br></br>
                      </p>,
    href: "https://www.epfl.ch/labs/hessbellwald-lab/",
    company_description: "The Laboratory for Topology and Neuroscience at EPFL is directed by Professor K. Hess-Bellwald and is affiliated to the mathematics department. It aims at using tools coming from algebraic topology to tackle complex real-life data challenges, with applications to life sciences (in particular, computational neurosciences) and machine learning problems.",
    tags: ["applied topology", "computational geometry", "data visualization", "zigzag persistent homology", "survey"],
    imageSource: epfl_logo,
  },

  {
    title: "Data Scientist",
    company: "Quanthome",
    dates: "Aug. 2022 - Aug. 2023",
    job_description:
      <p>My projects and responsabilities as data scientist included the following.
        <br></br>
        <br></br>
        - lead of machine learning engineering projects (Python, MLFlow, XGBoost)<br></br>
        - database management and data migrations (PostgreSQL)<br></br>
        - recruitment and supervision of junior data scientists<br></br>
        - R&D collaboration with the CRML@UNIL and ECCE@UNIL (ESG analysis and climate risk)<br></br>
        - financial data, environmental data, geometry data, geographical data, building engineering data </p>,
    href: "https://www.quanthome.ch/",
    company_description: "Quanthome is a data science startup based in Lausanne, aiming at digitalizing \
    the Swiss real estate market. It provides services allowing to strategise and simulate performance, in order to enhance investment methodologies. One of the main goals is to bring transparency\
    and regularize the financial and environmental impacts of real estate entities.",
    tags: ["machine learning engineering", "project management", "Python", "postgreSQL", "MLflow", "XGBoost"],
    imageSource: quanthome_logo,
  },

  {
    title: "MLOps Engineer",
    company: "Quanthome",
    dates: "Sept. 2023 - present",
    job_description:
      <p>My projects and responsabilities as MLOps engineer included the following.
        <br></br>
        <br></br>
        - managing data and model versioning (self-made Python package)<br></br>
        - automation of deployment pipelines<br></br>
        - model training and validation<br></br>
        - continuous monitoring of models (Streamlit, MLflow)<br></br>
        - CI/CD for ML models (Github Actions)</p>,
    href: "https://www.quanthome.ch/",
    company_description: "Quanthome is a data science startup based in Lausanne, aiming at digitalizing \
    the Swiss real estate market. It provides services allowing to strategise and simulate performance, in order to enhance investment methodologies. One of the main goals is to bring transparency\
    and regularize the financial and environmental impacts of real estate entities.",
    tags: ["MLOps", "MLflow", "CI", "CD", "data versioning", "model versioning", "continuous monitoring", "Github Actions"],
    imageSource: quanthome_logo,
  },
];

export default jobContents;
