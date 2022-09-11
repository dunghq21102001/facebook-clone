import React from 'react'
import './Contact.css'
function Contact(props) {
  return (
    <div className='contact'>
        <img src={props.img} alt=''/>
        <h5>{props.name}</h5>
    </div>
  )
}

export default Contact