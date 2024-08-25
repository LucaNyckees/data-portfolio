import PythonLogoSvg from '../images/stack_logos/python_logo.svg'
import CplusplusLogoSvg from '../images/stack_logos/ISO_C++_Logo.svg'
import HTMLLogoSvg from '../images/stack_logos/html-5-logo-svgrepo-com.svg'
import CSSLogoSvg from '../images/stack_logos/css3-svgrepo-com.svg'
import JSLogoSvg from '../images/stack_logos/javascript-svgrepo-com.svg'
import TSLogoSvg from '../images/stack_logos/typescript-svgrepo-com.svg'

import pgSQLLogoSvg from '../images/stack_logos/postgresql-svgrepo-com.svg'
import SQLLogoSvg from '../images/stack_logos/sql-database-generic-svgrepo-com.svg'
import SQLiteLogoSvg from '../images/stack_logos/sqlite-svgrepo-com.svg'
import AlembicLogoPng from '../images/stack_logos/alembic.png'

import FastAPILogoSvg from '../images/stack_logos/fastapi-svgrepo-com.svg'
import FlaskLogoSvg from '../images/stack_logos/flask-svgrepo-com.svg'
import ReactLogoSvg from '../images/stack_logos/react-svgrepo-com.svg'

import PytorchLogoSvg from '../images/stack_logos/pytorch-svgrepo-com.svg'
import KerasLogoSvg from '../images/stack_logos/keras-svgrepo-com.svg'
import TensorflowLogoSvg from '../images/stack_logos/tensorflow-enterprise-svgrepo-com.svg'
import SklearnLogoSvg from '../images/stack_logos/Scikit_learn_logo_small.svg'
import XgboostLogoPng from '../images/stack_logos/XGBoost_logo.png'
import ScipyLogoSvg from '../images/stack_logos/SCIPY_2.svg'

import NumpyLogoSvg from '../images/stack_logos/numpy-svgrepo-com.svg'
import PandasLogoSvg from '../images/stack_logos/pandas-svgrepo-com.svg'
import PolarsLogoSvg from '../images/stack_logos/polars_logo_icon_248809.svg'

import AirflowLogoSvg from '../images/stack_logos/apache-airflow-svgrepo-com.svg'
import KafkaLogoSvg from '../images/stack_logos/data-accesskafka-cluster-svgrepo-com.svg'
import GithubLogoSvg from '../images/stack_logos/github-icon-1-logo-svgrepo-com.svg'
import GitLogoSvg from '../images/stack_logos/git-deployment-svgrepo-com.svg'
import DockerLogoSvg from '../images/stack_logos/docker-4.svg'
import DatabricksLogoSvg from '../images/stack_logos/databricks-icon.svg'

import MatplotlibLogoSvg from '../images/stack_logos/Matplotlib_icon.svg'
import PlotlyLogoSvg from '../images/stack_logos/Plotly.svg'
import NetworkxLogoSvg from '../images/stack_logos/NetworkX.svg'
import SeabornLogoSvg from '../images/stack_logos/seaborn-seeklogo.svg'

import StreamlitLogoSvg from '../images/stack_logos/streamlit-seeklogo.svg'
import MLflowLogoSvg from '../images/stack_logos/mlflow.svg'


const logosByCategory = {
    languages: [
        { id: 'python-logo', logo: PythonLogoSvg, text: 'Python', link: 'https://www.python.org/' },
        { id: 'cplusplus-logo', logo: CplusplusLogoSvg, text: 'C++', link: 'https://cplusplus.com/' },
        { id: 'sql-logo', logo: SQLLogoSvg, text: 'SQL', link: 'https://sql.sh/' },
        { id: 'js-logo', logo: JSLogoSvg, text: 'JavaScript', link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
        { id: 'ts-logo', logo: TSLogoSvg, text: 'TypeScript', link: 'https://www.typescriptlang.org/docs/' },
    ],
    database: [
        { id: 'sql-logo', logo: SQLLogoSvg, text: 'SQL', link: 'https://sql.sh/' },
        { id: 'pgsql-logo', logo: pgSQLLogoSvg, text: 'Postgres', link: 'https://www.postgresql.org/' },
        { id: 'sqlite-logo', logo: SQLiteLogoSvg, text: 'SQLite', link: 'https://www.sqlite.org/docs.html' },
        { id: 'alembic-logo', logo: AlembicLogoPng, text: 'Alembic', link: 'https://alembic.sqlalchemy.org/en/latest/' },
    ],
    data_ops: [
        { id: 'airflow-logo', logo: AirflowLogoSvg, text: 'Apache Airflow', link: 'https://airflow.apache.org/' },
        { id: 'docker-logo', logo: DockerLogoSvg, text: 'Docker', link: 'https://www.docker.com/' },
        { id: 'github-logo', logo: GithubLogoSvg, text: 'GitHub', link: 'https://github.com/' },
        { id: 'git-logo', logo: GitLogoSvg, text: 'Git', link: 'https://git-scm.com/' },
        { id: 'mlflow-logo', logo: MLflowLogoSvg, text: 'MLFlow', link: 'https://mlflow.org/' },
        { id: 'databricks-logo', logo: DatabricksLogoSvg, text: 'Databricks', link: 'https://www.databricks.com/' },
    ],
    // data_streaming: [
    //     { id: 'kafka-logo', logo: KafkaLogoSvg, text: 'Apache Kafka', link: 'https://kafka.apache.org/' },
    // ],
    web_development: [
        { id: 'fastapi-logo', logo: FastAPILogoSvg, text: 'FastAPI', link: 'https://fastapi.tiangolo.com/' },
        { id: 'flask-logo', logo: FlaskLogoSvg, text: 'Flask', link: 'https://flask.palletsprojects.com/en/3.0.x/' },
        { id: 'react-logo', logo: ReactLogoSvg, text: 'React', link: 'https://fr.react.dev/' },
        { id: 'html-logo', logo: HTMLLogoSvg, text: 'HTML', link: 'https://developer.mozilla.org/fr/docs/Web/HTML' },
        { id: 'css-logo', logo: CSSLogoSvg, text: 'CSS', link: 'https://www.w3.org/Style/CSS/software.en.html' },
    ],
    machine_learning: [
        { id: 'pytorch-logo', logo: PytorchLogoSvg, text: 'Pytorch', link: 'https://pytorch.org/' },
        { id: 'keras-logo', logo: KerasLogoSvg, text: 'Keras', link: 'https://keras.io/' },
        { id: 'tensorflow-logo', logo: TensorflowLogoSvg, text: 'Tensorflow', link: 'https://www.tensorflow.org/learn?hl=fr' },
        { id: 'scipy-logo', logo: ScipyLogoSvg, text: 'Scipy', link: 'https://scipy.org/' },
        { id: 'sklearn-logo', logo: SklearnLogoSvg, text: 'Scikit-learn', link: 'https://scikit-learn.org/stable/' },
        { id: 'xgboost-logo', logo: XgboostLogoPng, text: 'XGBoost', link: 'https://xgboost.readthedocs.io/en/stable/' },
    ],
    data_engineering: [
        { id: 'numpy-logo', logo: NumpyLogoSvg, text: 'Numpy', link: 'https://numpy.org/' },
        { id: 'pandas-logo', logo: PandasLogoSvg, text: 'Pandas', link: 'https://pandas.pydata.org/' },
        { id: 'polars-logo', logo: PolarsLogoSvg, text: 'Polars', link: 'https://pola.rs/' },
    ],
    data_vis: [
        { id: 'matplotlib-logo', logo: MatplotlibLogoSvg, text: 'Matplotlib', link: 'https://matplotlib.org/' },
        { id: 'plotly-logo', logo: PlotlyLogoSvg, text: 'Plotly', link: 'https://plotly.com/python/' },
        { id: 'networkx-logo', logo: NetworkxLogoSvg, text: 'Networkx', link: 'https://networkx.org/' },
        { id: 'seaborn-logo', logo: SeabornLogoSvg, text: 'Seaborn', link: 'https://seaborn.pydata.org/' },
    ],
    performance_monitoring: [
        { id: 'streamlit-logo', logo: StreamlitLogoSvg, text: 'Streamlit', link: 'https://streamlit.io/' },
        { id: 'mlflow-logo', logo: MLflowLogoSvg, text: 'MLFlow', link: 'https://mlflow.org/' },
    ],
};

// Rest of the code remains unchanged


function formatKeyToTitle(key: string): string {
    const words = key.split('_');
    const capitalizedWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1));
    return capitalizedWords.join(' ');
}

function Stack() {
    return (
        <section className='stack-section'>
            <div className='stack-section-header'>
                <h1>TECH STACK</h1>
                <h2>Some tools and technologies from my data science stack</h2>
            </div>
            <div className="stack-container">
                <div className='stack-content'>
                    {Object.entries(logosByCategory).map(([category, logos]) => (
                        <div key={category} className='stack-category'>
                            <div className='stack-logos-card'>
                                <p>{formatKeyToTitle(category)}</p>
                                <div className='stack-logos-list'>
                                    {logos.map((logoObj, index) => (
                                        <a className='stack-image-div' key={index} href={logoObj.link} target='_blank'>
                                            <img
                                                id={logoObj.id || `logo_${index}`}
                                                key={index}
                                                src={logoObj.logo}
                                                alt={`Logo ${index + 1}`}
                                                title={logoObj.text}
                                                className='stack-image'
                                            />
                                            <span className="tooltiptext">{logoObj.text}</span>
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Stack;
