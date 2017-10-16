import React from 'react';
import PropTypes from 'prop-types';
import './Btn.css';

const MulBtn = ({color, onClick}) => {
    return (
        <div
            className="Btn"
            onClick={onClick}
            style={{backgroundColor: color}}>
                *
        </div>
    );
};

MulBtn.propTypes = {
    color: PropTypes.string,
    onClick: PropTypes.func
};

MulBtn.defaultProps = {
    color: 'black'
};

export default MulBtn;
