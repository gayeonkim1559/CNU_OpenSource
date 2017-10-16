import React from 'react';
import PropTypes from 'prop-types';
import './Btn.css';

const ClearBtn = ({color, onClick}) => {
    return (
        <div
            className="Btn"
            onClick={onClick}
            style={{backgroundColor: color}}>
                c
        </div>
    );
};

ClearBtn.propTypes = {
    color: PropTypes.string,
    onClick: PropTypes.func
};

ClearBtn.defaultProps = {
    color: 'black'
};

export default ClearBtn;
