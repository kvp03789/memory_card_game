import React, { useState, useEffect } from 'react';
import shuffleArray from '../utils.js'
import IMAGES from '../images.js'

const CardContainer = props => {

  const [cardArray, setCardArray] = useState(IMAGES)

  return(
      <div className="card-container">
        {cardArray.map((unit) => (
          <div className="card" key={unit.key}>
            <div className="card-image-container">
              <img src={unit.unitImage} alt={unit.unitName} className="unit-image"/>
            </div>
            <div className="card-name-container">
              <h3>{unit.unitName}</h3>
            </div>
          </div>
        ))}
      </div>
  )
}

export default CardContainer;