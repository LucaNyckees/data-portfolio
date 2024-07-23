import React from 'react';
import { useNavigate } from 'react-router-dom';

const GoBackButton: React.FC = () => {
    const navigate = useNavigate();

    const handleGoBack = () => {
        navigate(-1);
    };

    return (
        <button className='go-back' onClick={handleGoBack}>
            <i className="fa fa-angle-left"></i>
        </button>
    );
};

export default GoBackButton;
