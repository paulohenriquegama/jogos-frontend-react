import React, { useEffect, useState } from 'react'
import './header.css'
import { Link } from 'react-router-dom';

// Mui
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import SportsEsportsIcon from '@material-ui/icons/SportsEsports';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import ModalAdd from './modals/modalAdd/ModalAdd';
import ModalUser from './modals/modalUser/ModalUser';
import { JwtHandler } from '../../jwt-handler/JwtHandler';

export default function Header() {
  const [showAdd, setShowAdd] = useState(false);
  const [showUser, setShowUser] = useState(false);

  const [isLogged, setIsLogged] = useState(JwtHandler.isJwtValid);

  useEffect(() => {
    const handleOnJwtChange = () => {
        setIsLogged(JwtHandler.isJwtValid());
    };

    window.addEventListener("onJwtChange", handleOnJwtChange);

    // Função de limpeza
    return () => {
        window.removeEventListener("onJwtChange", handleOnJwtChange);
    };
}, []);

  function handleAdd() {
    setShowAdd(!showAdd);
  }
  function handleUser() {
    setShowUser(!showUser);
  }

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
            <div className="header-add" onClick={handleAdd}>
                <AddCircleIcon style={{fontSize: 60}}/>
                {showAdd ? <ModalAdd/> : null}
            </div>

          <div className="header-user" onClick={handleUser}>
              <PersonOutlineIcon style={{fontSize: 60}}/>
              {showUser ? <ModalUser isLogged={isLogged}/> : null}     
          </div>
        </div>
      </div>
    </div>

  )
}
