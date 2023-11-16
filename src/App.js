import React from 'react';

function App() {
  const heroStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    background: 'linear-gradient(to right, #6dd5ed, #2193b0)',
    color: 'white',
    fontSize: '2rem',
    fontFamily: 'Arial, sans-serif',
    textAlign: 'center',
    padding: '20px'
  };

  return (
    <div style={heroStyle}>
      <h1>Welcome to the SDSC GenAI Hackathon</h1>
    </div>
  );
}

export default App;
