import React from 'react'
import "./SidebarRow.css"
function SidebarRow(props) {
  return (
    <div id={props.id} className='sidebarRow'>
      <span  className="material-icons">{props.icon}</span>
      <h4>{props.title}</h4>
    </div>
  )
}

export default SidebarRow