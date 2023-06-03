import React, { useState } from 'react';

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleBackground = () => {
    setIsDarkMode(!isDarkMode);
  };

  const backgroundColor = isDarkMode ? 'black' : 'white';
  const textColor = isDarkMode ? 'white' : 'black';

  return (
    <div style={{ backgroundColor, color: textColor, height: '100vh', padding: '20px' }}>
      <h1>Toggle Background Color</h1>
      <button onClick={toggleBackground}>Toggle</button>
    </div>
  );
};

export default App;
