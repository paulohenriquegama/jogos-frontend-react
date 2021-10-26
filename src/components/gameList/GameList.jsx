import React, { useEffect, useState } from 'react'
import { Api } from '../../api/Api';
import { GameCard } from '../cardList/gameCard/GameCard';
import './gameList.css';

import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

export default function GameList() {
  const [games, setGames] = useState([])
  const [scrollX,setScrollX] = useState(0);
  const [y,setY] = useState(1);
  


  useEffect(()=> {
    const loadGame = async () => {
      const response = await Api.buildApiGetRequest(Api.readAllGameUrl());

      const results = await response.json();
      if(results.length>0){
        setGames(results);
      }
    }
    loadGame();
  },[])

  const handleArrowLeft = () =>{
    let x = scrollX + 280;
    setY(y-1);

    if (x>0){
      x=0;
      setY(1);
    }   
    setScrollX(x);
  }

  const handleArrowRight = () =>{
    let x = scrollX - 280;
    let totalGames = games.length * 240;
    if ((window.innerWidth - (x/2)) >totalGames){
      x=-240;
      setY(1)    
    }else{
      x=- (y*240);
      let fim = -totalGames
      setY(y+1);
      if(x<= fim){
        x = fim + 250;
        setY(games.length);
      }
      
    }
    setScrollX(x);
  }

  return (
    <div className="bloco-gameList">
      <div className="title-gameList">
        <h2>Lista de Jogos</h2>
      </div>
      <div className="gameList" style={{
        marginLeft: scrollX,
        width: games.length * 240
         }}>
        <div className="arrowLeft" onClick={handleArrowLeft}>
          <NavigateBeforeIcon style={{fontSize: 80}}/>
        </div>
        <div className="arrowRight" onClick={handleArrowRight}>
          <NavigateNextIcon style={{fontSize: 80}}/>
        </div>
        {games?.map((game) => (
        <GameCard game={game} key={`game-${game.id}`}/>
        ))}
      </div>
    </div>
  )
}
