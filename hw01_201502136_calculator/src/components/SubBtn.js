import React from 'react';
import PropTypes from 'prop-types';
import './Btn.css';

const SubBtn = ({color, onClick}) => {
    return (
        <div
            className="Btn"
            onClick={onClick}
            style={{backgroundColor: color}}>
                -
        </div>
    );
};

SubBtn.propTypes = {
    color: PropTypes.string,
    onClick: PropTypes.func
};

SubBtn.defaultProps = {
    color: 'black'
};

export default SubBtn;
