import React, { useEffect, useState } from 'react'
import { Api } from '../../api/Api';
import { GameCard } from '../cardList/gameCard/GameCard';
import './gameList.css';

export default function GameList() {
  const [games, setGames] = useState([])

  useEffect(()=> {
    const loadGame = async () => {
      const response = await Api.buildApiGetRequest(Api.readAllGameUrl());

      const results = await response.json();
      setGames(results);
    }
    loadGame();
  },[])

  return (
    <div className="bloco-gameList">
      <GameCard list={games}/>
    </div>
  )
}
