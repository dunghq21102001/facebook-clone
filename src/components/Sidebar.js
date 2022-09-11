import React, { useState } from 'react'
import "./Sidebar.css"
import SidebarRow from './SidebarRow'
import { useStateValue } from './StateProvider'
function Sidebar() {
  const [moreBtn, setMoreBtn] = useState(false)
  const [{user}, dispatch] = useStateValue()
  function handleClickMoreBtn() {
    setMoreBtn(true)
  }
  function handleClickLeastBtn(){
    setMoreBtn(false)
  }
  let lookMore
  if(moreBtn === true) {
    lookMore = <div>
      <SidebarRow id="game" title="Game" src="" icon="games"/>
      <SidebarRow id="pay" title="Bodybook Pay" src="" icon="paid"/>
      <SidebarRow id="watch" title="Watch" src="" icon="theaters"/>
      <SidebarRow id="weather" title="Weathers" src="" icon="sunny"/>
      <div className='hideBtn' onClick={handleClickLeastBtn}>
        <span className="material-icons">keyboard_arrow_up</span>
        <h4>Hide</h4>
      </div>
    </div>
    
  } else {
    lookMore = <div className='hideBtn' onClick={handleClickMoreBtn}>
    <span className="material-icons">keyboard_arrow_down</span>
    <h4>More</h4>
  </div>
  }
  return (
    <div className='sidebar'>
        <div className='sidebar__profile'>
          <img src={user.photoURL} alt=''/>
          <h5>{user.displayName}</h5>
        </div>
        <SidebarRow id="friend" title="Friends" src="" icon="people_alt"/>
        <SidebarRow id="page" title="Pages" src="" icon="flag"/>
        <SidebarRow id="save" title="Saved" src="" icon="turned_in"/>
        <SidebarRow id="group" title="Groups" src="" icon="groups"/>
        <SidebarRow id="market" title="Market Place" src="" icon="storefront"/>
        {lookMore}
    </div>
  )
}

export default Sidebar