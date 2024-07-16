import React from 'react';
import "../App.css"

const ActionButtons = ({ toUpperCASE, toLowerCASE, spaceHandler, validateJSON, colorMode }) => {
  return (
    <>
      <button
        className={`mx-2 px-2 py-3 button-01 ${colorMode}`}
        onClick={toUpperCASE}
      >
        Convert to upper case
      </button>

      <button
        className={`mx-2 px-2 py-3 button-01 ${colorMode}`}
        onClick={toLowerCASE}
      >
        Convert to lower case
      </button>

      <button
        className={`mx-2 px-2 py-3 button-01 ${colorMode}`}
        onClick={spaceHandler}
      >
        Remove Unnecessary Spaces
      </button>

      <button
        className={`mx-2 px-2 py-3 button-01 ${colorMode}`}
        onClick={validateJSON}
      >
        Validate JSON
      </button>
    </>
  );
};

export default ActionButtons;