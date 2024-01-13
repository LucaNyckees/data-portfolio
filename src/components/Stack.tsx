import PythonLogoSvg from '../../images/stack_logos/python_logo.svg'
import CplusplusLogoSvg from '../../images/stack_logos/ISO_C++_Logo.svg'
import HTMLLogoSvg from '../../images/stack_logos/html-5-logo-svgrepo-com.svg'
import CSSLogoSvg from '../../images/stack_logos/css3-svgrepo-com.svg'
import JSLogoSvg from '../../images/stack_logos/javascript-svgrepo-com.svg'
import TSLogoSvg from '../../images/stack_logos/typescript-svgrepo-com.svg'

import pgSQLLogoSvg from '../../images/stack_logos/postgresql-svgrepo-com.svg'
import SQLLogoSvg from '../../images/stack_logos/sql-database-generic-svgrepo-com.svg'
import SQLiteLogoSvg from '../../images/stack_logos/sqlite-svgrepo-com.svg'

import FastAPILogoSvg from '../../images/stack_logos/fastapi-svgrepo-com.svg'
import FlaskLogoSvg from '../../images/stack_logos/flask-svgrepo-com.svg'
import ReactLogoSvg from '../../images/stack_logos/react-svgrepo-com.svg'

import PytorchLogoSvg from '../../images/stack_logos/pytorch-svgrepo-com.svg'
import KerasLogoSvg from '../../images/stack_logos/keras-svgrepo-com.svg'
import TensorflowLogoSvg from '../../images/stack_logos/tensorflow-enterprise-svgrepo-com.svg'
import SklearnLogoSvg from '../../images/stack_logos/Scikit_learn_logo_small.svg'
import XgboostLogoPng from '../../images/stack_logos/XGBoost_logo.png'

import NumpyLogoSvg from '../../images/stack_logos/numpy-svgrepo-com.svg'
import PandasLogoSvg from '../../images/stack_logos/pandas-svgrepo-com.svg'
import PolarsLogoSvg from '../../images/stack_logos/polars_logo_icon_248809.svg'

import AirflowLogoSvg from '../../images/stack_logos/apache-airflow-svgrepo-com.svg'
import KafkaLogoSvg from '../../images/stack_logos/data-accesskafka-cluster-svgrepo-com.svg'

import MatplotlibLogoSvg from '../../images/stack_logos/Matplotlib_icon.svg'
import PlotlyLogoSvg from '../../images/stack_logos/Plotly.svg'
import NetworkxLogoSvg from '../../images/stack_logos/NetworkX.svg'

import StreamlitLogoSvg from '../../images/stack_logos/streamlit-seeklogo.svg'
import MLflowLogoSvg from '../../images/stack_logos/mlflow.svg'

import React from 'react'


const logosByCategory = {
    languages: [
        { id: 'python-logo', logo: PythonLogoSvg },
        { id: 'cplusplus-logo', logo: CplusplusLogoSvg },
        { id: 'sql-logo', logo: SQLLogoSvg },
        { id: 'js-logo', logo: JSLogoSvg },
        { id: 'ts-logo', logo: TSLogoSvg },
    ],
    database: [
        { id: 'sql-logo', logo: SQLLogoSvg },
        { id: 'pgsql-logo', logo: pgSQLLogoSvg },
        { id: 'sqlite-logo', logo: SQLiteLogoSvg },
    ],
    workflow_orchestration: [
        { id: 'airflow-logo', logo: AirflowLogoSvg },
        { id: 'kafka-logo', logo: KafkaLogoSvg },
    ],
    web_development: [
        { id: 'fastapi-logo', logo: FastAPILogoSvg },
        { id: 'flask-logo', logo: FlaskLogoSvg },
        { id: 'react-logo', logo: ReactLogoSvg },
        { id: 'html-logo', logo: HTMLLogoSvg },
        { id: 'css-logo', logo: CSSLogoSvg },
    ],
    machine_learning: [
        { id: 'pytorch-logo', logo: PytorchLogoSvg },
        { id: 'keras-logo', logo: KerasLogoSvg },
        { id: 'tensorflow-logo', logo: TensorflowLogoSvg },
        { id: 'sklearn-logo', logo: SklearnLogoSvg },
        { id: 'xgboost-logo', logo: XgboostLogoPng },
    ],
    data_engineering: [
        { id: 'numpy-logo', logo: NumpyLogoSvg },
        { id: 'pandas-logo', logo: PandasLogoSvg },
        { id: 'polars-logo', logo: PolarsLogoSvg },
    ],
    data_visualisation: [
        { id: 'matplotlib-logo', logo: MatplotlibLogoSvg },
        { id: 'plotly-logo', logo: PlotlyLogoSvg },
        { id: 'networkx-logo', logo: NetworkxLogoSvg },
    ],
    performance_monitoring: [
        { id: 'streamlit-logo', logo: StreamlitLogoSvg },
        { id: 'mlflow-logo', logo: MLflowLogoSvg },
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
                            <div className='stack-logos-list'>
                                <h2>{formatKeyToTitle(category)}</h2>
                                {logos.map((logoObj, index) => (
                                    <span className='stack-image-div' key={index}>
                                        <img
                                            id={logoObj.id || `logo_${index}`}
                                            key={index}
                                            src={logoObj.logo}
                                            alt={`Logo ${index + 1}`}
                                        />
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Stack;
