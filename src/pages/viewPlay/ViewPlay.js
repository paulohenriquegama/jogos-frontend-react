import React, { useEffect, useState } from 'react'
import { Api } from '../../api/Api'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder'
import FavoriteIcon from '@material-ui/icons/Favorite'
import StarIcon from '@material-ui/icons/Star'

//CSS
import './viewPlay.css'

export default function ViewGame(props) {
  const id = props.match.params.id
  const [game, setGame] = useState(undefined)
  const [favorite, setFavorite] = useState(false)

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
  }, [])

  const handleFavorite = () => {
    setFavorite(!favorite)
  }

  function qtdStar(note) {
    console.log(note)
    if (note === 10) {
      return (
        <div>
          <StarIcon style={{ fontSize: 60 }} />
          <StarIcon style={{ fontSize: 60 }} />
          <StarIcon style={{ fontSize: 60 }} />
          <StarIcon style={{ fontSize: 60 }} />
          <StarIcon style={{ fontSize: 60 }} />
        </div>
      )
    } else if (note >= 8) {
      return (
        <div>
          <StarIcon style={{ fontSize: 70 }} />
          <StarIcon style={{ fontSize: 70 }} />
          <StarIcon style={{ fontSize: 70 }} />
          <StarIcon style={{ fontSize: 70 }} />
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

  if (!game) {
    return <h3>Loading..</h3>
  }

  return (
    <div className="viewPlay">
      <section className="viewPlay-header">
        <div className="viewPlay-title">
          <h2>{game.title}</h2>
        </div>
      </section>
      <section className="viewPlay-body">
        <div className="viewPlay-favorite" onClick={handleFavorite}>
          {favorite ? (
            <FavoriteIcon style={{ fontSize: 65 }} />
          ) : (
            <FavoriteBorderIcon style={{ fontSize: 65 }} />
          )}
        </div>
        <div className="viewPlay-trailer">
          <iframe
            width="100%"
            height="100%"
            src={`${game.gameplay.replace('watch?v=', 'embed/')}?autoplay=1`}
            frameborder="0"
            allow="accelerometer;"
            allowfullscreen
          />
        </div>
        <div className="viewPlay-note">
          <h3>{qtdStar(+game.note)}</h3>
        </div>
      </section>
    </div>
  )
}
