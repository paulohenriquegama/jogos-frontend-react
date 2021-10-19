import React from 'react'

import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import EditIcon from '@material-ui/icons/Edit';

import './profileCard.css'
import { Link } from 'react-router-dom';

export default function ProfileCard({profile}) {
  
  console.log('entrou profileCard')
  return (
    <div className="profileCard">
      <div className="profileCard-title">
        <h3>{profile.title}</h3>
      </div>
      <div className="profileCard-image">
        <img src={profile.image} alt={profile.title}/>
      </div>
      <div className="profileCard-btn">
        <div className="profileCard-btnAdd">
          <EditIcon/>
        </div>
            <Link to={`/profile/delete/${profile.id}`}className="profileCard-btnExcluir">
              <DeleteForeverIcon/>
            </Link> 

      </div>
    </div>
  )
}
