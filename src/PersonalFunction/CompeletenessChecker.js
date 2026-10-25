import React from 'react';

const CompeletenessChecker = ({ variables }) => {
  // Filter to find empty variables (null, '', or 0)
  const emptyVariables = variables.filter(
    (variable) => variable.State === null || variable.State === '' || variable.State === 0
  );

  // Calculate the percentage of variables with values
  const totalVariables = variables.length;
  const filledVariables = totalVariables - emptyVariables.length;
  const percentage = (filledVariables / totalVariables) * 100;

  return (
    <div>
      <h3>Variable Checker</h3>
      <p>
        {percentage.toFixed(0)}% of the variables have values.
      </p>
      {emptyVariables.length > 0 && (
        <div>
          <h4>Empty Variables:</h4>
          <ul>
            {emptyVariables.map((variable, index) => (
              <li key={index}>{variable.Name}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default CompeletenessChecker;
