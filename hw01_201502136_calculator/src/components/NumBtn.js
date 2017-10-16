import React from 'react';
import PropTypes from 'prop-types';
import './Btn.css';

const NumBtn = ({n,color, onClick}) => {
    return (
        <div
            className="Btn"
            onClick={onClick}
            style={{backgroundColor: color}}>
                {n}
        </div>
    );
};

NumBtn.propTypes = {
    number: PropTypes.number,
    color: PropTypes.string,
    onClick: PropTypes.func
};

NumBtn.defaultProps = {
    color: 'black'
};

export default NumBtn;
