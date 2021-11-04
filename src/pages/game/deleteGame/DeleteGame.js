import React from 'react'
import { Api } from '../../../api/Api'

import { toast } from 'react-toastify'


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
      toast.success('Jogo deletado com sucesso!',{theme: "dark"})
      // Navigate to home page
      props.history.push(`/`)
    } else {
      toast.error('Não foi possível excluir o jogo.',{theme: "colored"})
    }
  }

  const backButton = () => {
    toast.info('Nenhuma alteração realizada.')
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
