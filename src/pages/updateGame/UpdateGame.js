import React, { useEffect, useState } from 'react'
import { Api } from '../../api/Api'

import Select from 'react-select'

import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import './updateGame.css'

export default function UpdateGame(props) {
  const id = props.match.params.id
  const [game, setGame] = useState(undefined)

  const [genres, setGenres] = useState([])
  const [genresIds, setGenresIds] = useState([])

  useEffect(() => {
    const loadGame = async () => {
      const response = await Api.buildApiGetRequest(
        Api.readByIdGameUrl(id),
        true,
      )

      const results = await response.json()

      setGame(results)
    }

    loadGame()
  }, [id])

  useEffect(() => {
    const loadGenres = async () => {
      const response = await Api.buildApiGetRequest(
        Api.readAllGenresUrl(),
        true,
      )
      const results = await response.json()
      setGenres(results)
    }

    loadGenres()
  }, [])

  const handleSubmit = async e => {
    e.preventDefault()
    const title = e.target.title.value
    const capa = e.target.capa.value
    const description = e.target.description.value
    const year = e.target.year.value
    const note = e.target.note.value
    const trailer = e.target.trailer.value
    const gameplay = e.target.gameplay.value
    const favorite = game.favorite
    const genresDisconnectIds = disconnectIds

    const playload = {
      title,
      capa,
      description,
      year,
      note,
      trailer,
      gameplay,
      favorite,
      genresIds,
      genresDisconnectIds,
    }

    const response = await Api.buildApiPatchRequest(
      Api.updateGameUrl(id),
      playload,
      true,
    )

    const body = await response.json()

    if (response.status === 200) {
      toast.success('Sucesso!')
      const id = body.id
      props.history.push(`/game/view/${id}`)
    } else {
      toast.error('Nenhuma mudança aconteceu!')
      props.history.push(`/game/view/${id}`)
    }
  }

  if (!game || !genres) {
    return <div>Loading...</div>
  }
  const options = genres.map(genre => ({
    value: genre.id,
    label: genre.name,
  }))

  const selectedOptions = game.genres.map(genre => ({
    value: genre.id,
    label: genre.name,
  }))
  const handleGenreChange = selectedOption => {
    setGenresIds(selectedOption.map(option => option.value))
  }

  if (genresIds.length === 0) {
    setGenresIds(selectedOptions.map(option => option.value))
  }

  function validarDiferenca() {
    var r1 = options.map(option => option.value)
    var r2 = genresIds
    var r3 = []
    r1.forEach(function (element) {
      if (r2.indexOf(element) === -1) r3.push(element)
    })

    return r3
  }
  const disconnectIds = validarDiferenca()

  return (
    <div>
      <form className="formGame" onSubmit={handleSubmit}>
        <div>
          <h2>Cadastro de Jogo</h2>
        </div>
        <label htmlFor="title">Titulo:</label>
        <input
          type="text"
          id="title"
          name="title"
          defaultValue={game.title}
          required
        />

        <label htmlFor="capa">Capa:</label>
        <input
          type="text"
          id="capa"
          name="capa"
          defaultValue={game.capa}
          required
        />

        <label htmlFor="description">Descrição:</label>
        <textarea
          type="text"
          id="description"
          name="description"
          defaultValue={game.description}
        />

        <label htmlFor="year">Ano:</label>
        <input
          type="text"
          id="year"
          name="year"
          defaultValue={game.year}
          required
        />

        <label htmlFor="note">Nota:</label>
        <input
          type="text"
          id="note"
          name="note"
          defaultValue={game.note}
          required
        />

        <label htmlFor="trailer">Trailer:</label>
        <input
          type="text"
          id="trailer"
          name="trailer"
          defaultValue={game.trailer}
          required
        />

        <label htmlFor="gameplay">Game Play:</label>
        <input
          type="text"
          id="gameplay"
          name="gameplay"
          defaultValue={game.gameplay}
          required
        />

        <label htmlFor="genre">Genero:</label>

        <Select
          isMulti
          options={options}
          onChange={handleGenreChange}
          defaultValue={selectedOptions}
          className="select"
        />

        <button type="submit" class="btn-pattern">
          Enviar
        </button>
      </form>
    </div>
  )
}
