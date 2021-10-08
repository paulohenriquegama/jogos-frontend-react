import React from 'react'

export default function ViewGame(props) {
  const id = props.match.params.id;
  return (
    <div>
      Visualizar Jogo!!
      {id}
    </div>
  )
}
