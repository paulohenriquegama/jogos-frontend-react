import React, { useState } from 'react'
import "./gameCard.css"

export const GameCard = (props) => {
  const games = props.list

  return (
    <div className="bloco-gameCard">
      {games.map((games) => (
        <div key={games.id} className='gameCard'>
          <div>
            {games.title}
          </div>
          <div>
            <img src={games.capa} alt={games.title}/>
          </div>
          <div className="footerCardGame">
            <div className="year">
              {games.year}
            </div>
            {games.note}
          </div>
        </div>
      ))}
    </div>
  )
}

