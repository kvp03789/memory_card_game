import React, { useState, useEffect } from 'react';
import {shuffleArray, containsUnit} from '../utils.js'
import IMAGES from '../images.js'

const CardContainer = props => {

  const [cardArray, setCardArray] = useState(IMAGES);
  const [tempArray, setTempArray] = useState([]);

  const handleClick = (e) => {
    let dataIndex = e.target.closest(".card").dataset.index;
    let shuffledArray = shuffleArray(cardArray);
    setCardArray([...shuffledArray]);
    setTempArray([...tempArray, cardArray[dataIndex]])

    //game loop/logic
    if(tempArray.length >= 1){
      if(containsUnit(cardArray[dataIndex], tempArray)){
        props.updateScore(props.currentScore + 1)
        console.log("POINT")
        console.log(dataIndex)
        console.log(tempArray)
      }else {
        props.updateScore(0)
        setTempArray([])
        console.log("WRONG")
        console.log(dataIndex)
        console.log(tempArray)
      }
    }else{
      props.updateScore(1);
      console.log("POINT")
      console.log(dataIndex)
      console.log(tempArray)
    }
      

  }

  // useEffect(() => {

  //   const handleClick = (e) => {
  //     let dataIndex = e.target.closest(".card").dataset.index;
  //     let shuffledArray = shuffleArray(cardArray);
  //     setCardArray([...shuffledArray]);
  //     tempArray.push(cardArray[dataIndex]);

  //     if(!tempArray.includes(cardArray[dataIndex])){
  //       props.updateScore()
  //       console.log("NEW POINT")
  //     }else {
  //       console.log("WRONG")
  //     }

  //   }

  //   // document.querySelectorAll('.card').forEach((item) => {
  //   //   item.addEventListener("click", (e) => {handleClick(e)});
  //   //   console.log("event workin burther")
  //   }) 
  // }, [])
  
  return(
      <div className="card-container">
        {cardArray.map((unit) => (
          <div className="card" key={unit.key} data-index={unit.key} onClick={(e) => {handleClick(e)}}>
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