import React from 'react';
import PropTypes from 'prop-types';
import './Btn.css';

const EqBtn = ({color, onClick}) => {
    return (
        <div
            className="Btn"
            onClick={onClick}
            style={{backgroundColor: color}}>
                =
        </div>
    );
};

EqBtn.propTypes = {
    color: PropTypes.string,
    onClick: PropTypes.func
};

EqBtn.defaultProps = {
    color: 'black'
};

export default EqBtn;
