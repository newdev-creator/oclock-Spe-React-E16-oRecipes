// Import NPM
import React from 'react';
import PropTypes from 'prop-types';

// Imports locaux
import './style.scss';

const Instructions = ({ steps }) => {
  return (
    <ol className="steps">
      {steps.map((instruction) => {
        return (
          <li key={instruction} className="step">
            {instruction}
          </li>
        );
      })}
    </ol>
  );
};

// on valide nos props
Instructions.propTypes = {
  steps: PropTypes.arrayOf(
    PropTypes.string,
  ).isRequired,
};

// Export composant
export default Instructions;
