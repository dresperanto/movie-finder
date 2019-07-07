import React, { Component } from "react"
import { API_URL, API_KEY } from "../../config"
import { IMAGE_BASE_URL, POSTER_SIZE } from "../../config"
import "./ActorDetail.css"

class ActorDetail extends Component {
  state = {
    actor: [],
    id: "",
    name: "",
    biography: "",
    photo: "",
    movies: [],
    loading: false
  }

  componentDidMount() {
    const endpoint = `${API_URL}person/${
      this.props.match.params.actorId
    }?api_key=${API_KEY}&language=en-US`
    fetch(endpoint)
      .then(response => response.json())
      .then(actor =>
        this.setState({
          id: actor.id,
          name: actor.name,
          biography: actor.biography,
          photo: `${IMAGE_BASE_URL}${POSTER_SIZE}${actor.profile_path}`
        })
      )
    console.log(this.state.actor)
  }

  render() {
    const { name, biography, photo } = this.state
    return (
      <div className='flex-container'>
        <div className='photo'>
          <img className='headshot' src={photo} alt='headshot' />
        </div>
        <div className='bio'>
          <h1>Hi I'm {name}</h1>
          <h3>Learn about me in the third person</h3>
          <p>{biography}</p>
        </div>
      </div>
    )
  }
}

export default ActorDetail
