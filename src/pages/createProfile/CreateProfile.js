import { useEffect, useState } from 'react'
import { Api } from '../../api/Api'

import './createProfile.css'

export default function CreateProfile(props) {
  console.log("porps aqui",props)
  const [userCurrent, setUserCurrent] = useState("")

  useEffect(() => {
    const loadUser = async () => {
      const response = await Api.buildApiGetRequest(Api.readCurrentUser(),true)
      const results = await response.json()
      setUserCurrent(results.id)
    }
    loadUser()
  }, [])

  if (!userCurrent) {
    return <div>Loading...</div>;
  }

  const handleSubmit = async e => {
    e.preventDefault()
    const title = e.target.title.value
    const image = e.target.image.value
    const userId = +userCurrent


    const playload = {
      title,
      image,
      userId,
    }
    console.log("playload",playload)
    const response = await Api.buildApiPostRequest(
      Api.createProfileUrl(),
      playload,
      true
    )

    const body = await response.json()

    if (response.status === 201) {
      
      props.history.push(`/user/view/${userCurrent}`)
    }
    console.log(response)
  }

  return (
    <div>
      <form className="formProfile" onSubmit={handleSubmit}>
        <div>
          <h2>Cadastro de Perfil</h2>
        </div>
        <div className="formProfile-items">
          <label htmlFor="title">Titulo:</label>
          <input type="text" id="title" name="title" required />
        </div>
        <div className="formProfile-items">
          <label htmlFor="image">Url da Imagem:</label>
          <input type="text" id="image" name="image" />
        </div>

        <button type="submit" class="btn-pattern">
          Enviar
        </button>
      </form>
    </div>
  )
}
