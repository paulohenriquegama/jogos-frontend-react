import React from 'react'
import { Link } from 'react-router-dom'

import './modalAdd.css'

export default function ModalAdd() {
  return (
    <div className="modalAdd">
        <Link to="/game/create" className="modalAdd-items">
              <h4>Adicionar Jogo</h4>
        </Link>
        <Link to="/profile/create" className="modalAdd-items">
          <h4>Adicionar Perfil</h4>
        </Link>
    </div>
  )
}
