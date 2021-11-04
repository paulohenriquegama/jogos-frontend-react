import StarIcon from '@material-ui/icons/Star';

import React from 'react'

export default function QtdStar(props) {
  
  return (
    <div>
      
    </div>
  )
}

function qtdStar(note) {
  let x = 8;

  const arr = Array(x)
  const star = arr.map(st => st)

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