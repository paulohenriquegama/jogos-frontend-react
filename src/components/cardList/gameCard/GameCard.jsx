import React from 'react'
import { useHistory } from 'react-router';
import StarIcon from '@material-ui/icons/Star';
import "./gameCard.css"

export const GameCard = ({game}) => {
  const history = useHistory();

  function qtdStar(note) {

    if (note === 10) {
      return (
        <div>
          <StarIcon fontSize="small"/>
          <StarIcon fontSize="small"/>
          <StarIcon fontSize="small"/>
          <StarIcon fontSize="small"/>
          <StarIcon fontSize="small"/>      
        </div>
      );
    } else if (note >= 8) {
      return (
        <div>
          <StarIcon fontSize="small"/>
          <StarIcon fontSize="small"/>
          <StarIcon fontSize="small"/>
          <StarIcon fontSize="small"/>
        </div>
      );
    } else if (note > 6) {
      return (
        <div>
          <StarIcon fontSize="small"/>
          <StarIcon fontSize="small"/>
          <StarIcon fontSize="small"/>
        </div>
      );
    } else if (note > 3) {
      return (
        <div>
          <StarIcon fontSize="small"/>
          <StarIcon fontSize="small"/>
        </div>
      );
    } else{
      return (
        <div>
          <StarIcon fontSize="small"/>
        </div>
      );
    }
  }
  
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
        <div>
          <h3>{qtdStar(+game.note)}</h3>
        </div>
      </div>
     
    </div>
  )
}

