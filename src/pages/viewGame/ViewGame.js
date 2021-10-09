import React, { useEffect, useState } from 'react'
import { Api } from '../../api/Api'
import { getYear } from 'date-fns'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import StarIcon from '@material-ui/icons/Star';

//CSS
import './viewGame.css'

export default function ViewGame(props) {
  const id = props.match.params.id
  const [game, setGame] = useState(undefined)
  const [favorite, setFavorite] = useState(false)

  useEffect(() => {
    const loadGame = async () => {
      const response = await Api.buildApiGetRequest(Api.readByIdGameUrl(id))
      const results = await response.json()
      setGame(results)
    }
    loadGame()
  }, [])

  const handleFavorite = () => {
    setFavorite(!favorite);
  }

  function qtdStar(note) {
    console.log(note)
    if (note === 10) {
      return (
        <div>
          <StarIcon fontSize="large"/>
          <StarIcon fontSize="large"/>
          <StarIcon fontSize="large"/>
          <StarIcon fontSize="large"/>
          <StarIcon fontSize="large"/>      
        </div>
      );
    } else if (note >= 8) {
      return (
        <div>
          <StarIcon fontSize="large"/>
          <StarIcon fontSize="large"/>
          <StarIcon fontSize="large"/>
          <StarIcon fontSize="large"/>
        </div>
      );
    } else if (note > 6) {
      return (
        <div>
          <StarIcon fontSize="large"/>
          <StarIcon fontSize="large"/>
          <StarIcon fontSize="large"/>
        </div>
      );
    } else if (note > 3) {
      return (
        <div>
          <StarIcon fontSize="large"/>
          <StarIcon fontSize="large"/>
        </div>
      );
    } else{
      return (
        <div>
          <StarIcon fontSize="large"/>
        </div>
      );
    }
  }
 

  
  if(!game){
    return <h3>Loading..</h3>;
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
            <div className="viewGame-favorite" onClick={handleFavorite}>
              {favorite ? <FavoriteIcon fontSize="large" /> : <FavoriteBorderIcon fontSize="large"/> }
            </div>
            <img src={game.capa}/>
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
          <div className="viewGame-btnEdit">
            <button>Editar</button>
          </div>
          <div className="viewGame-btnDelete">
            <button>Excluir</button>
          </div>
          <div className="viewGame-btnPlay">
            <button>Jogar</button>
          </div>
        </div>
        <div className="viewGame-area3">
          <div className="viewGame-trailer">
            <iframe width="90%" height="100%" src={game.trailer.replace('watch?v=','embed/')} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen/>
          </div>
          <div className="viewGame-description">
            <p>{game.description}</p>
          </div>
        </div>
      </section>
    </div>
  )
}