import React, { useEffect, useState } from 'react'
import { Api } from '../../api/Api'

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
      props.history.push(`/user/${userCurrent}`)
    } else {
      // Error
    }
  }

  const backButton = () => {
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
