import React from 'react'
import './Result.css';
const Result = ({ result }) => {
    return (
        <div>
          <span className="Result">
            {result}
          </span>
        </div>
    );
};

export default Result
