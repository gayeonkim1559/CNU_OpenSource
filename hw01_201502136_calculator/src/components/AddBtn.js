import React from 'react';
import PropTypes from 'prop-types';
import './Btn.css';

const AddBtn = ({color, onClick}) => {
    return (
        <div
            className="Btn"
            onClick={onClick}
            style={{backgroundColor: color}}>
                +
        </div>
    );
};

AddBtn.propTypes = {
    color: PropTypes.string,
    onClick: PropTypes.func
};

AddBtn.defaultProps = {
    color: 'black',
};

export default AddBtn;
