import { useEffect, useState } from 'react'
import { Api } from '../../../api/Api'

import { toast } from 'react-toastify'


import './updateProfile.css'

export default function UpdateProfile(props) {
  const id = +props.match.params.id
  


  const [profile, setProfile] = useState(undefined)
  useEffect(() => {
    const loadProfile = async () => {
      const response = await Api.buildApiGetRequest(
        Api.readByIdProfileUrl(id),
        true,
      )

      const results = await response.json()

      setProfile(results)
    }

    loadProfile()
    
  }, [id])
  const handleSubmit = async e => {
    e.preventDefault()
    const title = e.target.title.value
    const image = e.target.image.value
    const userId = +profile.userId

    const playload = {
      title,
      image,
      userId,
    }

    const response = await Api.buildApiPatchRequest(
      Api.updateProfileUrl(id),
      playload,
      true,
    )

    if (response.status === 200) {
      toast.success('Perfil editado com sucesso!',{theme: "dark"})
      props.history.push(`/user/${profile.userId}`)
    }else{
      toast.error('Não foi possível editar o perfil!',{theme: "colored"})
    }
  }

  if (!profile) {
    return <div>Loading...</div>
  }

  return (
    <div>
      <form className="formProfile" onSubmit={handleSubmit}>
        <div>
          <h2>Cadastro de Perfil</h2>
        </div>
        <div className="formProfile-items">
          <label htmlFor="title">Titulo:</label>
          <input
            type="text"
            id="title"
            name="title"
            defaultValue={profile.title}
            required
          />
        </div>
        <div className="formProfile-items">
          <label htmlFor="image">Url da Imagem:</label>
          <input
            type="text"
            id="image"
            name="image"
            defaultValue={profile.image}
          />
        </div>

        <button type="submit" class="btn-pattern">
          Enviar
        </button>
      </form>
    </div>
  )
}
