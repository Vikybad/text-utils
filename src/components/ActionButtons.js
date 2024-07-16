import React from 'react';
import "../App.css"

const ActionButtons = ({ toUpperCASE, toLowerCASE, spaceHandler, validateJSON, colorMode }) => {
  return (
    <>
      <div className='action-buttons-container'>
        <button
          className={`button-01 ${colorMode}`}
          onClick={toUpperCASE}
        >
          Convert to upper case
        </button>

        <button
          className={`button-01 ${colorMode}`}
          onClick={toLowerCASE}
        >
          Convert to lower case
        </button>

        <button
          className={`button-01 ${colorMode}`}
          onClick={spaceHandler}
        >
          Remove Unnecessary Spaces
        </button>

        <button
          className={`button-01 ${colorMode}`}
          onClick={validateJSON}
        >
          Validate JSON
        </button>
      </div>
    </>
  );
};

export default ActionButtons;