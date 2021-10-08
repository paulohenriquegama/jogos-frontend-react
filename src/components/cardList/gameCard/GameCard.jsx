import React, { useState } from 'react'
import "./gameCard.css"

export const GameCard = ({game}) => {
  

  return (
    <div className="gameCard">
      <div>
        {game.title}
      </div>
      <div className="gameCard-capa">
        <img src={game.capa} alt={game.title}/>
      </div>
      <div className="footerCardGame">
        <div className="year">
          {game.year}
        </div>
        {game.note}
      </div>
     
    </div>
  )
}

