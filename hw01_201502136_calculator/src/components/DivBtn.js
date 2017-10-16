import React from 'react';
import PropTypes from 'prop-types';
import './Btn.css';

const DivBtn = ({color, onClick}) => {
    return (
        <div
            className="Btn"
            onClick={onClick}
            style={{backgroundColor: color}}>
                /
        </div>
    );
};

DivBtn.propTypes = {
    color: PropTypes.string,
    onClick: PropTypes.func
};

DivBtn.defaultProps = {
    color: 'black'
};

export default DivBtn;
