import { Api } from '../../../api/Api'
import React, { useEffect, useState } from 'react'

import './updateUser.css'

export default function UpdateUser(props) {
  const id = props.match.params.id;
  const [user, setUser] = useState(undefined)

  useEffect(() => {
    const loadUser = async () => {
        const response = await Api.buildApiGetRequest(
            Api.readByIdUserUrl(id),
            true
        );

        const results = await response.json();

        setUser(results);
    };

    loadUser();
  },[id]); 

  const handleSubmit = async e => {
    e.preventDefault()
    const name = e.target.name.value
    const surname = e.target.surname.value
    const email = e.target.email.value
    const password = e.target.password.value
    const cpf = e.target.cpf.value

    const playload = {
      name,
      surname,
      email,
      password,
      cpf,
    }
    const response = await Api.buildApiPatchRequest(
      Api.updateUserUrl(id),
      playload,
      true
    )

    const body = await response.json()

    if (response.status === 200) {
      const id = body.id
      props.history.push(`/user/${id}`)
    }
  }

  return (
    <div>
      <form className="formGame" onSubmit={handleSubmit}>
        <div>
          <h2>Cadastro de Usuario</h2>
        </div>
        <label htmlFor="name">Nome:</label>
        <input type="text" id="name" name="name" defaultValue={user.name} required />

        <label htmlFor="surname">Sobrenome:</label>
        <input type="text" id="surname" name="surname" defaultValue={user.surname} />

        <label htmlFor="email">E-mail:</label>
        <input type="email" id="email" name="email" defaultValue={user.email} required />

        <label htmlFor="password">Senha:</label>
        <input type="password" id="password" name="password" defaultValue={user.password} required />

        <label htmlFor="cpf">Cpf:</label>
        <input type="text" id="cpf" name="cpf" defaultValue={user.cpf}/>

        <button type="submit" class="btn-pattern">
          Enviar
        </button>
      </form>
    </div>
  )
}
