import { Api } from '../../api/Api'

import './createUser.css'

export default function CreateGame(props) {

  const handleSubmit = async e => {
    e.preventDefault()
    const name = e.target.name.value
    const surname = e.target.surname.value
    const email = e.target.email.value
    const passwords = e.target.password.value
    const cpf = e.target.cpf.value

    const playload = {
      name,
      surname,
      email,
      passwords,
      cpf,
    }
    console.log("playload",playload)
    const response = await Api.buildApiPostRequest(
      Api.createUserUrl(),
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
      <form className="formGame" onSubmit={handleSubmit}>
        <div>
          <h2>Cadastro de Usuario</h2>
        </div>
        <label htmlFor="name">Nome:</label>
        <input type="text" id="name" name="name" required />

        <label htmlFor="surname">Sobrenome:</label>
        <input type="text" id="surname" name="surname" />

        <label htmlFor="email">E-mail:</label>
        <input type="email" id="email" name="email" required />

        <label htmlFor="password">Senha:</label>
        <input type="password" id="password" name="password" required />

        <label htmlFor="cpf">Cpf:</label>
        <input type="text" id="cpf" name="cpf" />

        <button type="submit" class="btn">
          Enviar
        </button>
      </form>
    </div>
  )
}
