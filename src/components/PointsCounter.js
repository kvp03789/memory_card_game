import React, { useState, useEffect } from 'react';

const PointsCounter = props => {

  return(
    <div className="points-counter">
      <p className="score">Current Score: {props.score}</p>  
    </div>
  )
}

export default PointsCounter;