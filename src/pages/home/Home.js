import React, { useEffect, useState } from 'react'
import { Api } from '../../api/Api'
import GameList from '../../components/gameList/GameList'

// CSS
import './home.css'

export default function Home() {
  

  
  return (
    <div className="home">
      <GameList/>
    </div>
  )
}


