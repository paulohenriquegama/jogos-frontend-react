import React from 'react'
import { Link } from 'react-router-dom'
import { Api } from '../../api/Api'
import { JwtHandler } from '../../jwt-handler/JwtHandler'

import './login.css'

export default function Login(props) {
  const handleSubmit = async event => {
    event.preventDefault()

    // Obtém os dados dos inputs
    const email = event.target.email.value
    const password = event.target.password.value

    // Constrói um payload com esses dados
    const payload = {
      email,
      password,
    }

    // Faz uma requisição no backend
    const response = await Api.buildApiPostRequest(Api.loginUrl(), payload)

    const body = await response.json()

    if (response.status === 200) {
      // Login successfully

      const accessToken = body.accessToken

      // localStorage.setItem("JWT", accessToken);

      JwtHandler.setJwt(accessToken)

      props.history.push(`/`)
    } else {
      // Error
    }
  }

  return (
    <div>
      <form className="formLogin" onSubmit={handleSubmit}>
        <div className="formLogin-items">
          <label className="form__label" htmlFor="email">
            E-mail:
          </label>
        </div>

        <div className="formLogin-items">
          <input
            className="form__input-text"
            type="text"
            id="email"
            name="email"
          />
        </div>

        <div className="formLogin-items">
          <label className="form__label" htmlFor="password">
            Password:
          </label>
        </div>

        <div className="formLogin-items">
          <input
            className="form__input-text"
            type="password"
            id="password"
            name="password"
          />
        </div>

        <div className="formLogin-items">
          <input className="btn-pattern" type="submit" value="Login" />
        </div>
        <div className="formLogin-footer">
          <p>Ainda não tem conta?</p>
          <div className="formLogin-register">
            <Link to="user/create" className="formLogin-linkRegister">
              <h3>Cadastre-se</h3>
            </Link>
          </div>
        </div>
      </form>
    </div>
  )
}
