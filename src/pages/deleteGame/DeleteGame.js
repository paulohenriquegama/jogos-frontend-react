import React from 'react'
import { Api } from '../../api/Api'

import './deleteGame.css'

export default function DeleteGame(props) {
  const id = props.match.params.id

  const handleDelete = async event => {
    const response = await Api.buildApiDeleteRequest(
      Api.deleteGameUrl(id),
      true,
    )

    if (response.status === 204) {
      // Delete product successfully

      // Navigate to home page
      props.history.push(`/`)
    } else {
      // Error
    }
  }

  const backButton = () => {
    props.history.push(`/game/view/${id}`)
  }

  return (
    <div>
      <div className="deleteGame">
        <h2>Deseja realmente excluir esse jogo?</h2>
        <div className="deleteGame-blocoBtn">
          <button className="btn-danger" onClick={handleDelete}>
            Confirmar Exclusão
          </button>
          <button className="btn-pattern" onClick={backButton}>
            Cancelar
          </button>
        </div>
      </div>
    </div>
  )
}
