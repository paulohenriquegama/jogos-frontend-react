import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Api } from '../../../../api/Api'

import './modalUser.css'

export default function ModalAdd({ isLogged }) {
  const [userCurrent, setUserCurrent] = useState('')

  useEffect(() => {
    const loadUser = async () => {
      const response = await Api.buildApiGetRequest(Api.readCurrentUser(), true)
      const results = await response.json()
      setUserCurrent(results.id)
    }
    loadUser()
  }, [])

  return (
    <div className="modalUser">
      {!isLogged ? (
        <Link to="/login" className="modalAdd-items">
          <h4>Login</h4>
        </Link>
      ) : (
        <Link to="/logout" className="modalAdd-items">
          <h4>Logout</h4>
        </Link>
      )}
      <Link to={`/user/${userCurrent}`} className="modalAdd-items">
        <h4>Meu Usuario</h4>
      </Link>
    </div>
  )
}
