import React, { useState, useEffect } from 'react';
import SCLogo from '../images/sc_logo.png'

const Header = props => {

  return(
    <div className="header">
      <div className="logo-container">
        <img src={SCLogo} alt="memory card game" className="logo"/>
      </div>
      <div>
        <h3>Get points by clicking on an image, but don't click on any more than once!</h3>      
      </div>
    </div>
  )
}

export default Header;