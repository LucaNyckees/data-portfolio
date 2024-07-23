import epfl_logo from "../images/job_logos/epfl.png";
import quanthome_logo from "../images/job_logos/quanthome.svg";

const jobContents = [
  {
    title: "Teaching Assistant",
    company: "Department of Mathematics, EPFL",
    dates: "Sept. 2019 - June 2022",
    job_description:
      "As student assistant at EPFL, I've had the chance to be responsible for various tasks such as \
                      on-site and online individual teaching, group teaching, grading of exams and homeworks, creation of exercises and \
                      presenting the resolution of exercises in front of a class. I have been hired by the department of mathematics, \
                      for a wide variety of courses including first year analysis, mecanical physics, algebra and geometry courses, as well as more advanced 2nd and 3rd year math courses.",
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
      "I worked on a project together with a data science student and under the supervision of two PhD students. \
                      We developed a pipeline designed to study the COVID19 spreading process in the canton of Geneva. \
                      We made use of graph theoretical, statistical and topological techniques in order to modelize and analyse \
                      this process. As a final product, the project came in as a Dockerized Streamlit web application.",
    href: "https://www.epfl.ch/labs/hessbellwald-lab/",
    company_description: "The Laboratory for Topology and Neuroscience at EPFL is directed by Professor K. Hess-Bellwald and is affiliated to the mathematics department. It aims at using tools coming from algebraic topology to tackle complex real-life data challenges, with applications to life sciences (in particular, computational neurosciences) and machine learning problems.",
    tags: ["Docker", "data visualizazion", "graph theory", "applied topology", "COVID19 analysis", "Python"],
    imageSource: epfl_logo,
  },

  {
    title: "Research Developer",
    company: "Laboratory for Topology and Neuroscience, EPFL",
    dates: "August 2021 - Feb. 2022",
    job_description:
      "As a research developer, \
                      I collaborated with Nicolas Berkouk to make a survey about a powerful data analysis tool called \
                      'Levelset Zigzag Persistent Homology'. In realizing this project, I also implemented a Streamlit web application \
                      allowing for an intuitive visual guide of how using this tool works.",
    href: "https://www.epfl.ch/labs/hessbellwald-lab/",
    company_description: "The Laboratory for Topology and Neuroscience at EPFL is directed by Professor K. Hess-Bellwald and is affiliated to the mathematics department. It aims at using tools coming from algebraic topology to tackle complex real-life data challenges, with applications to life sciences (in particular, computational neurosciences) and machine learning problems.",
    tags: ["applied topology", "computational geometry", "data visualization", "zigzag persistent homology", "survey"],
    imageSource: epfl_logo,
  },

  {
    title: "Data Scientist",
    company: "Quanthome",
    dates: "August 2022 - present",
    job_description:
      "With a team of passionate web developers and data scientists, we're designing complex \
      pipelines with the latest technology in order to deliver a platform product. \
      Applying a comprehensive data science stack (databases maintenance, data migration \
      projects, machine learning engineering, workflow orchestration, CI/CD) - to applications \
      focused on both financial and environmental data analysis as well as real estate market analysis. \
      Responsibilities involved recruiting and supervising data science master students. \
      Made a collaboration with the CRML at UNIL (Center for Risk Management of Lausanne).",
    href: "https://www.quanthome.ch/",
    company_description: "Quanthome is a data science startup based in Lausanne, aiming at digitalizing \
    the Swiss real estate market. It provides services allowing to strategise and simulate performance, in order to enhance investment methodologies. One of the main goals is to bring transparency\
    and regularize the financial and environmental impacts of real estate entities.",
    tags: ["MLOps", "machine learning engineering", "project management", "Python", "SQL", "financial data analysis"],
    imageSource: quanthome_logo,
  },
];

export default jobContents;
