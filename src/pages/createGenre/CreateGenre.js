import { Api } from '../../api/Api'

import { toast } from 'react-toastify'


import './createGenre.css'

export default function CreateProfile(props) {
  const handleSubmit = async e => {
    e.preventDefault()
    const name = e.target.name.value

    const playload = {
      name,
    }
    const response = await Api.buildApiPostRequest(
      Api.createGenreUrl(),
      playload,
      true,
    )

    if (response.status === 201) {
      toast.success('Gênero criado com sucesso!',{theme: "dark"})

      props.history.push(`/`)
    }
  }

  return (
    <div>
      <form className="formGenre" onSubmit={handleSubmit}>
        <div>
          <h2>Cadastre um novo gênero</h2>
        </div>
        <div className="formGenre-items">
          <label htmlFor="name">Nome:</label>
          <input type="text" id="name" name="name" required />
        </div>

        <button type="submit" class="btn-pattern">
          Enviar
        </button>
      </form>
    </div>
  )
}
