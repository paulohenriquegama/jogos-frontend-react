import { Api } from '../../api/Api'

import './createProfile.css'

export default function CreateProfile(props) {

  const handleSubmit = async e => {
    e.preventDefault()
    const title = e.target.title.value
    const image = e.target.image.value
    const userId = 1


    const playload = {
      title,
      image,
      userId,
    }
    console.log("playload",playload)
    const response = await Api.buildApiPostRequest(
      Api.createProfileUrl(),
      playload,
    )

    const body = await response.json()

    if (response.status === 201) {
      const id = body.id
      props.history.push(`/user/view/${id}`)
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
