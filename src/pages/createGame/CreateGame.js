import React from 'react';
import { Api } from '../../api/Api';
import './createGame.css';

export default function CreateGame() {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const title = e.target.title.value
    const capa = e.target.capa.value
    const description = e.target.description.value
    const year = e.target.year.value
    const note = e.target.note.value
    const trailer = e.target.trailer.value
    const gameplay = e.target.gameplay.value
    const genre = e.target.genre.value

    const playload = {
      title,
      capa,
      description,
      year,
      note,
      trailer,
      gameplay,
      genres: [
        {
          name: genre,
        },
      ],
    };

    const response = await Api.buildApiPostRequest(Api.createGameUrl(),playload);
    
    console.log(response)
  };

  return (
    <div>
      <form className="formGame" onSubmit={handleSubmit}>
        <label htmlFor="title">Titulo:</label>
        <input type="text" id="title" name="title"/>

        <label htmlFor="capa">Capa:</label>
        <input type="text" id="capa" name="capa"/>

        <label htmlFor="description">Descrição:</label>
        <input type="text" id="description" name="description"/>

        <label htmlFor="year">Ano:</label>
        <input type="text" id="year" name="year"/>

        <label htmlFor="note">Nota:</label>
        <input type="text" id="note" name="note"/>

        <label htmlFor="trailer">Trailer:</label>
        <input type="text" id="trailer" name="trailer"/>

        <label htmlFor="gameplay">Game Play:</label>
        <input type="text" id="gameplay" name="gameplay"/>

        <label htmlFor="genre">Genero:</label>
        <input type="text" id="genre" name="genre"/>

        <button type="submit" class="btn">Enviar</button>
      </form>
    </div>
  )
}
