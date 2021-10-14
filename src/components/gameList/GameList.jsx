import React, { useEffect, useState } from 'react'
import { Api } from '../../api/Api';
import { GameCard } from '../cardList/gameCard/GameCard';
import './gameList.css';

import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

export default function GameList() {
  const [games, setGames] = useState([])
  const [scrollX,setScrollX] = useState(0);

  useEffect(()=> {
    const loadGame = async () => {
      const response = await Api.buildApiGetRequest(Api.readAllGameUrl());

      const results = await response.json();
      setGames(results);
    }
    loadGame();
    // document.documentElement.style.setProperty('--lengthList', games.length);
  },[])

  const handleArrowLeft = () =>{
    let x = scrollX + 480;
    if (x>0){
      x=0;
    }
    setScrollX(x);
  }

  const handleArrowRight = () =>{
    let x = scrollX - 480;
    let totalGames = games.length * 240;
    if (window.innerWidth >totalGames){
      console.log('entrou')
      x=0;
      
    }
    if (window.innerWidth -70 <totalGames){
      console.log('entrou segundo')
      x=-(window.innerWidth/2);
    }
    setScrollX(x);
    console.log("innerWidt",window.innerWidth)
    console.log("totalGame",totalGames)
    console.log("x",x)
  }

  return (
    <div className="bloco-gameList">
      <div className="title-gameList">
        <h2>Lista de Jogos</h2>
      </div>
      <div className="gameList" style={{
        marginLeft: scrollX,
        width: games.length * 240
        // maxWidth: 100%, 
        // overflow: 'hidden'
         }}>
        <div className="arrowLeft" onClick={handleArrowLeft}>
          <NavigateBeforeIcon style={{fontSize: 80}}/>
        </div>
        <div className="arrowRight" onClick={handleArrowRight}>
          <NavigateNextIcon style={{fontSize: 80}}/>
        </div>
        {games.map((game) => (
        <GameCard game={game}/>
        ))}
      </div>
    </div>
  )
}
