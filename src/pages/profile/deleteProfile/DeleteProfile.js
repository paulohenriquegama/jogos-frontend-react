import React, { useEffect, useState } from 'react'
import { Api } from '../../../api/Api'

import { toast } from 'react-toastify'


import './deleteProfile.css'

export default function DeleteProfile(props) {
  const id = props.match.params.id
  
  const [userCurrent, setUserCurrent] = useState('')

  useEffect(() => {
    const loadUser = async () => {
      const response = await Api.buildApiGetRequest(Api.readCurrentUser(), true)
      const results = await response.json()
      setUserCurrent(results.id)
    }
    loadUser()
  }, [])

  const handleDelete = async event => {
    const response = await Api.buildApiDeleteRequest(
      Api.deleteProfileUrl(id),
      true,
    )

    if (response.status === 204) {
      toast.success('Perfil deletado com sucesso!',{theme: "dark"})
      props.history.push(`/user/${userCurrent}`)
    } else {
      toast.error('Não foi possível excluir o perfil!',{theme: "colored"})
    }
  }

  const backButton = () => {
    toast.info('Nenhuma alteração realizada.',{theme: "dark"})
    props.history.push(`/user/${userCurrent}`)
  }

  return (
    <div>
      <div className="deleteGame">
        <h2>Deseja realmente excluir esse perfil?</h2>
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
