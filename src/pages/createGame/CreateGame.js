import React, { useEffect, useState } from 'react'
import { Api } from '../../api/Api'

import Select from 'react-select'

import './createGame.css'

export default function CreateGame(props) {
  const [genres, setGenres] = useState([])
  const [genresIds, setGenresIds] = useState([])

  const handleSubmit = async e => {
    e.preventDefault()
    const title = e.target.title.value
    const capa = e.target.capa.value
    const description = e.target.description.value
    const year = e.target.year.value
    const note = e.target.note.value
    const trailer = e.target.trailer.value
    const gameplay = e.target.gameplay.value

    const playload = {
      title,
      capa,
      description,
      year,
      note,
      trailer,
      gameplay,
      genresIds,
    }
    console.log("playload",playload)
    const response = await Api.buildApiPostRequest(
      Api.createGameUrl(),
      playload,
    )

    const body = await response.json()

    if (response.status === 201) {
      const id = body.id
      props.history.push(`/game/view/${id}`)
    }
    console.log(response)
  }

  useEffect(() => {
    const loadGenres = async () => {
      const response = await Api.buildApiGetRequest(
        Api.readAllGenresUrl(),
        true,
      )

      const results = await response.json()
      console.log(results)
      setGenres(results)
    }

    loadGenres()
  }, [])

  const options = genres.map(genre => ({
    value: genre.id,
    label: genre.name,
  }))

  const handleGenreChange = selectedOption => {
    setGenresIds(selectedOption.map(option => option.value))
  }
  console.log('genresIds', genresIds)
  return (
    <div>
      <form className="formGame" onSubmit={handleSubmit}>
        <div>
          <h2>Cadastro de Jogo</h2>
        </div>
        <label htmlFor="title">Titulo:</label>
        <input type="text" id="title" name="title" required/>

        <label htmlFor="capa">Capa:</label>
        <input type="text" id="capa" name="capa" required/>

        <label htmlFor="description">Descrição:</label>
        <textarea type="text" id="description" name="description" />

        <label htmlFor="year">Ano:</label>
        <input type="text" id="year" name="year" required/>

        <label htmlFor="note">Nota:</label>
        <input type="text" id="note" name="note" required/>

        <label htmlFor="trailer">Trailer:</label>
        <input type="text" id="trailer" name="trailer" required/>

        <label htmlFor="gameplay">Game Play:</label>
        <input type="text" id="gameplay" name="gameplay" required/>

        <label htmlFor="genre">Genero:</label>
        <div className="select">
          <Select isMulti options={options} onChange={handleGenreChange} />
        </div>

        <button type="submit" class="btn">
          Enviar
        </button>
      </form>
    </div>
  )
}
