import React from "react"
import { IMAGE_BASE_URL } from "../../../config"
import { Link } from "react-router-dom"
import "./Actor.css"

const Actor = ({ actor }) => {
  const POSTER_SIZE = "w154"

  return (
    <div className='rmdb-actor'>
      <img
        src={
          actor.profile_path
            ? `${IMAGE_BASE_URL}${POSTER_SIZE}${actor.profile_path}`
            : "./images/no_image.jpg"
        }
        alt='actorthumb'
      />
      {/* <span className='rmdb-actor-name'>{actor.id}</span> */}
      <Link
        className='actorLink'
        to={{ pathname: `/actors/${actor.id}`, actorName: `${actor.name}` }}
      >
        {actor.name}
      </Link>
      <span className='rmdb-actor-character'>{actor.character}</span>
    </div>
  )
}

export default Actor
