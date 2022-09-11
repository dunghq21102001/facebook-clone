import React from 'react'
import "./Header.css"
import { useStateValue } from './StateProvider'
function Header() {
  const [{user}, dispatch] = useStateValue()
  return (
    <div className='header'>
      <div className='header__left'>
        <img src='https://freepngimg.com/thumb/logo/92693-kpop-jyp-entertainment-twice-black-circle.png'
        alt='header-logo'/>
        <div className='header__input'>
          <span className="material-icons">search</span>
          <input type="text" placeholder='Search on Bodybook'/>
        </div>
      </div>
      <div className='header__middle'>
        <div className='header__option header__option--active'>
          <span className="material-icons">home</span>
        </div>
        <div className='header__option'>
          <span className="material-icons">flag</span>
        </div>
        <div className='header__option'>
          <span className="material-icons">slideshow</span>
        </div>
        <div className='header__option'>
          <span className="material-icons">groups</span>
        </div>
        <div className='header__option'>
          <span className="material-icons">extension</span>
        </div>
      </div>
      <div className='header__right'>
        <div className='header__info'>
          <img src={user.photoURL} alt=''/>
          <h5>{user.displayName}</h5>
        </div>
        <span className="material-icons">menu</span>
        <span className="material-icons">maps_ugc</span>
        <span className="material-icons">notifications</span>
        <span className="material-icons">arrow_drop_down</span>
      </div>
    </div>
  )
}

export default Header