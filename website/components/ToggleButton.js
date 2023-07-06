import React from 'react';

const ToggleButton = ({ handleToggle }) => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <button id="toggleButton" onClick={handleToggle}>
        Toggle Background Color
      </button>
    </div>
  );
};

export default ToggleButton;