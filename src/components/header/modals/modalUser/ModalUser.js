import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Api } from '../../../../api/Api'

import './modalUser.css'

export default function ModalAdd({isLogged}) {
  console.log("isLogged",{isLogged})
  const [userCurrent, setUserCurrent] = useState("")

  useEffect(() => {
    const loadUser = async () => {
      const response = await Api.buildApiGetRequest(Api.readCurrentUser(),true)
      const results = await response.json()
      setUserCurrent(results.id)
    }
    loadUser()
  }, [])
  console.log(userCurrent)
  
  if (!userCurrent) {
    return <div>Loading...</div>;
  }

  return (
    <div className="modalUser">
      {!isLogged ? (
        <Link to="/login" className="modalAdd-items">
              <h4>Login</h4>
        </Link>) : (
        <Link to="/logout" className="modalAdd-items">
          <h4>Logout</h4>
        </Link>
      )}
      <Link to={`/user/view/${userCurrent}`} className="modalAdd-items">
        <h4>Meu Usuario</h4>
      </Link>
    </div>
  )
}