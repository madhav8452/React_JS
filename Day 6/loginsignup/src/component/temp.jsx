import React, { useState } from 'react';

function MyInput({ regexPattern }) {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const isInputValid = regexPattern.test(inputValue);

//   console.log(isInputValid)
  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        style={{
          border: isInputValid ? '2px solid green' : '2px solid red',
        }}
      />
      {isInputValid ? (
        <p>Input is valid!</p>
      ) : (
        <p>Input is invalid.</p>
      )}
    </div>
  );
}

// Example usage:
function Temp() {
  const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i; 

  return (
    <div>
      <h1>Email Input</h1>
      <MyInput regexPattern={emailRegex} />
    </div>
  );
}

export default Temp