import React, { useState } from 'react';
import Header from './Header.js'
import CardContainer from './CardContainer.js';
import PointsCounter from './PointsCounter.js';

function App() {

  const [score, setScore] = useState(0);

  const [bestScore, setBestScore] = useState(0);

  const [currentScore, setCurrentScore] = useState(0);

  const handleScore = (newScore) => {
    setScore(newScore)
  }

  return (
    <div className="App">
      <Header/>
      <PointsCounter score={score}/>
      <CardContainer updateScore={handleScore} currentScore={score}/>
      
    </div>
  );
}

export default App;
