import React, { useEffect, useState } from 'react'
import { Api } from '../../api/Api'
import { getYear } from 'date-fns'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder'
import FavoriteIcon from '@material-ui/icons/Favorite'
import StarIcon from '@material-ui/icons/Star'

//CSS
import './viewGame.css'
import { Link } from 'react-router-dom'

export default function ViewGame(props) {
  const id = props.match.params.id
  const [game, setGame] = useState(undefined)
  const [favorite, setFavorite] = useState(null)

  useEffect(() => {
    const loadGame = async () => {
      const response = await Api.buildApiGetRequest(Api.readByIdGameUrl(id))
      const results = await response.json()
      setGame(results)
    }
    loadGame()
  }, [id])

  useEffect(() => {
    if (game) {
      console.log('favorite dentro efect antes do set', favorite)
      let x = game.favorite
      setFavorite(x)
      console.log('favorite dentro efect=', favorite)
    }
  }, [game])

  if (!game) {
    return <h3>Loading..</h3>
  }

  console.log('favorite 1=', favorite)
  // console.log("game favorite", game.favorite)

  async function handleFavorite() {
    console.log('favorite dentro handle antes', favorite)
    setFavorite(!favorite)
    console.log('favorite dentro handle', favorite)
    const title = game.title
    const capa = game.capa
    const description = game.description
    const year = game.year
    const note = game.note
    const trailer = game.trailer
    const gameplay = game.gameplay

    // Constrói um payload com esses dados
    const payload = {
      title,
      capa,
      description,
      year,
      note,
      trailer,
      gameplay,
      favorite,
    }
    console.log('O playload é', payload)
    // Faz uma requisição no backend
    const response = await Api.buildApiPatchRequest(
      Api.updateGameUrl(id),
      payload,
      true,
    )

    const body = await response.json()
    console.log('body é', body)

    if (response.status === 200) {
      // Product updated successfully
      const id = body.id

      props.history.push(`/game/view/${id}`)
    } else {
      // Error
      console.log('deu erro', favorite)
      setFavorite(!favorite)
      console.log('depois do erro', favorite)
    }
  }

  function qtdStar(note) {
    if (note === 10) {
      return (
        <div>
          <StarIcon fontSize="large" />
          <StarIcon fontSize="large" />
          <StarIcon fontSize="large" />
          <StarIcon fontSize="large" />
          <StarIcon fontSize="large" />
        </div>
      )
    } else if (note >= 8) {
      return (
        <div>
          <StarIcon fontSize="large" />
          <StarIcon fontSize="large" />
          <StarIcon fontSize="large" />
          <StarIcon fontSize="large" />
        </div>
      )
    } else if (note > 6) {
      return (
        <div>
          <StarIcon fontSize="large" />
          <StarIcon fontSize="large" />
          <StarIcon fontSize="large" />
        </div>
      )
    } else if (note > 3) {
      return (
        <div>
          <StarIcon fontSize="large" />
          <StarIcon fontSize="large" />
        </div>
      )
    } else {
      return (
        <div>
          <StarIcon fontSize="large" />
        </div>
      )
    }
  }

  const handleClick = () => {
    props.history.push(`/game/play/${game.id}`)
  }

  return (
    <div className="viewGame">
      <section className="viewGame-header">
        <div className="viewGame-title">
          <h2>{game.title}</h2>
        </div>
      </section>
      <section className="viewGame-body">
        <div className="viewGame-area1">
          <div className="viewGame-img">
            <div className="viewGame-favorite" onClick={() => handleFavorite()}>
              {favorite ? (
                <FavoriteIcon fontSize="large" />
              ) : (
                <FavoriteBorderIcon fontSize="large" />
              )}
            </div>
            <img src={game.capa} />
          </div>
          <div className="viewGame-note-year">
            <div className="viewGame-note">
              <h3>{qtdStar(+game.note)}</h3>
            </div>
            <div className="viewGame-year">
              <h3>{getYear(new Date(game.year))}</h3>
            </div>
          </div>
        </div>
        <div className="viewGame-area2">
          <Link to={`/game/update/${game.id}`} className="viewGame-btnEdit">
            <button className="btn-pattern">Editar</button>
          </Link>

          <Link to={`/game/delete/${game.id}`} className="viewGame-btnDelete">
            <button className="btn-danger">Excluir</button>
          </Link>

          <div className="viewGame-btnPlay">
            <button className="btn-pattern" onClick={handleClick}>
              Jogar
            </button>
          </div>
        </div>
        <div className="viewGame-area3">
          <div className="viewGame-trailer">
            <iframe
              width="90%"
              height="100%"
              src={game.trailer.replace('watch?v=', 'embed/')}
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            />
          </div>
          <div className="viewGame-description">
            <p>{game.description}</p>
          </div>
        </div>
      </section>
    </div>
  )
}
