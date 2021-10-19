import React, { useState } from 'react'
import './header.css'
import { Link } from 'react-router-dom';

// Mui
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import SportsEsportsIcon from '@material-ui/icons/SportsEsports';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import ModalAdd from './ModalAdd';
// import FadeMenu from './FadeMenu';

export default function Header() {
  const [showAdd, setShowAdd] = useState(false);

  function handleClick() {
    setShowAdd(!showAdd);
  }
  console.log("add",showAdd)

  return (
    <div className="header">
      <div className="header-top">
        <Link to="/">
          <div className="logo">
            <SportsEsportsIcon style={{fontSize: 60}}/>
            <h4>Biblioteca <br/> de Jogos</h4>
          </div>
        </Link>
        <div className="header-title">
          <h1>Biblioteca de Jogos</h1>
        </div>
        <div className="header-btns">
            <div className="header-add" onClick={handleClick}>
                <AddCircleIcon style={{fontSize: 60}}/>
                {showAdd ? <ModalAdd/> : null}
            </div>

          <div className="header-user">
            
              <PersonOutlineIcon style={{fontSize: 60}}/>
            
          </div>
        </div>
      </div>
    </div>

  )
}
