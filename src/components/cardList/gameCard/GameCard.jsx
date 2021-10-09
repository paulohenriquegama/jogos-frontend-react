import React from 'react'
import { useHistory } from 'react-router';
import "./gameCard.css"

export const GameCard = ({game}) => {
  const history = useHistory();
  
  const handleClick = () => {
    history.push(`/game/view/${game.id}`)
  }

  return (
    <div className="gameCard" onClick={handleClick}>
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

