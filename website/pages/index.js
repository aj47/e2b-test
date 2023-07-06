import React, { useState } from 'react';
import ToggleButton from '../components/ToggleButton';
import '../styles/globals.css';

export default function Home() {
  const [isRed, setIsRed] = useState(false);

  const handleToggle = () => {
    setIsRed(!isRed);
  };

  return (
    <div className={isRed ? 'redBackground' : 'whiteBackground'}>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <ToggleButton onClick={handleToggle} />
      </div>
    </div>
  );
}