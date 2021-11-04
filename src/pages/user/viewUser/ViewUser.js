import React, { useEffect, useState } from 'react'
import { Api } from '../../../api/Api'
import ProfileCard from '../../../components/cardList/profileCard/ProfileCard'

import './viewUser.css'

export default function ViewUser(props) {
 
  const id = props.match.params.id
  const [user, setUser] = useState([])
  const [profiles, setProfiles] = useState([])

  useEffect(() => {
    const loadUser = async () => {
      const response = await Api.buildApiGetRequest(Api.readByIdUserUrl(id),true)
      const results = await response.json()
        setUser(results)
    }
    loadUser()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  useEffect(() => {
    const loadProfiles = async () => {
      const response = await Api.buildApiGetRequest(Api.readAllProfileUrl(),true)
      const results = await response.json()
        setProfiles(results)
    }
    loadProfiles()
  }, []);

  if (!profiles) {
    return <h3>Loading..</h3>
  }
  console.log(profiles)
  return (
    <div className="viewUser">
      <div className="viewUser-title">
        <h2>{user.name}</h2>
      </div>
      <div className="viewUser-bloco-items">
        <div className="viewUser-items-label">
          <h3>Sobrenome:</h3>
        </div>
        <div className="viewUser-items">
          <h3>{user.surname}</h3>
        </div>
      </div>
      <div className="viewUser-bloco-items">
        <div className="viewUser-items-label">
          <h3>Email:</h3>
        </div>
        <div className="viewUser-items">
          <h3>{user.email}</h3>
        </div>
      </div>
      <div className="viewUser-bloco-items">
        <div className="viewUser-items-label">
          <h3>Cpf:</h3>
        </div>
        <div className="viewUser-items">
          <h3>{user.cpf}</h3>
        </div>
      </div>
      <div className="viewUser-profiles">
        <div className="viewUser-title">
          <h2>{profiles.length > 1 ? "Meus Perfis" : "Meu Perfil"}</h2>
        </div>

        <div className="viewUser-cards">
          {profiles.map((profile,i) => (
            <ProfileCard profile={profile} key={`profile-${i}`} userId={user.id} />
          ))}
        </div>
      </div>
    </div>
  )
}
