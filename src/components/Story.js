import React from 'react'
import './Story.css'
function Story(props) {
  return (
    <div style={{backgroundImage: `url(${props.img})`}} className='story'>
      <img className='story__avatar' src={props.img} alt='avatar'/>
      <h4>{props.name}</h4>
    </div>
  )
}

export default Story