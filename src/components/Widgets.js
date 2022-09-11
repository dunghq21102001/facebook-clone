import React from 'react'
import Contact from './Contact'
import './Widgets.css'
function Widgets(props) {
  return (
    <div className='widgets'>
      <div className='widgets__top'>
        <h2>Contact</h2>
        <div className='wedgets__options'>
          <span class="material-icons">video_call</span>
          <span class="material-icons">search</span>
          <span class="material-icons">more_horiz</span>
        </div>
      </div>
      <div className='widgets__bottom'>
        <Contact name='Nayeon' img='https://scontent.fhan4-3.fna.fbcdn.net/v/t39.30808-6/279078778_460080739209344_8528347583524523261_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=47siLrbQsbcAX9PHFSV&_nc_ht=scontent.fhan4-3.fna&oh=00_AT_DKYvVLh4ttEdIouIToim4t173v3i9Exb09JA8QOxouw&oe=6275B5EE'/>
        <Contact name='Nayeon' img='https://scontent.fhan4-3.fna.fbcdn.net/v/t39.30808-6/279078778_460080739209344_8528347583524523261_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=47siLrbQsbcAX9PHFSV&_nc_ht=scontent.fhan4-3.fna&oh=00_AT_DKYvVLh4ttEdIouIToim4t173v3i9Exb09JA8QOxouw&oe=6275B5EE'/>
        <Contact name='Nayeon' img='https://scontent.fhan4-3.fna.fbcdn.net/v/t39.30808-6/279078778_460080739209344_8528347583524523261_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=47siLrbQsbcAX9PHFSV&_nc_ht=scontent.fhan4-3.fna&oh=00_AT_DKYvVLh4ttEdIouIToim4t173v3i9Exb09JA8QOxouw&oe=6275B5EE'/>
        <Contact name='Sana' img='https://scontent.fhan3-4.fna.fbcdn.net/v/t39.30808-6/279278014_466034678613950_7594404404725286458_n.jpg?stp=dst-jpg_p526x296&_nc_cat=106&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=Gpit0Ma3JrkAX_xoZqI&_nc_ht=scontent.fhan3-4.fna&oh=00_AT9EvjtJrcjsp5mzs7ObXBVVYnKTzt1AasgfL8CcoJaA6Q&oe=62771ACC'/>
        <Contact name='Sana' img='https://scontent.fhan3-4.fna.fbcdn.net/v/t39.30808-6/279278014_466034678613950_7594404404725286458_n.jpg?stp=dst-jpg_p526x296&_nc_cat=106&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=Gpit0Ma3JrkAX_xoZqI&_nc_ht=scontent.fhan3-4.fna&oh=00_AT9EvjtJrcjsp5mzs7ObXBVVYnKTzt1AasgfL8CcoJaA6Q&oe=62771ACC'/>
        <Contact name='Sana' img='https://scontent.fhan3-4.fna.fbcdn.net/v/t39.30808-6/279278014_466034678613950_7594404404725286458_n.jpg?stp=dst-jpg_p526x296&_nc_cat=106&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=Gpit0Ma3JrkAX_xoZqI&_nc_ht=scontent.fhan3-4.fna&oh=00_AT9EvjtJrcjsp5mzs7ObXBVVYnKTzt1AasgfL8CcoJaA6Q&oe=62771ACC'/>
        <Contact name='Chaeyoung' img='https://scontent.fhan3-5.fna.fbcdn.net/v/t39.30808-6/279724905_466036575280427_6350539224273574444_n.jpg?stp=dst-jpg_p526x296&_nc_cat=109&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=voUBkEsPRQMAX-meLVG&_nc_ht=scontent.fhan3-5.fna&oh=00_AT8PRuAZOOsxh4xMptrE9KnpKnLScO72VesgLS0RpN8V4w&oe=6275E929'/>
        <Contact name='Chaeyoung' img='https://scontent.fhan3-5.fna.fbcdn.net/v/t39.30808-6/279724905_466036575280427_6350539224273574444_n.jpg?stp=dst-jpg_p526x296&_nc_cat=109&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=voUBkEsPRQMAX-meLVG&_nc_ht=scontent.fhan3-5.fna&oh=00_AT8PRuAZOOsxh4xMptrE9KnpKnLScO72VesgLS0RpN8V4w&oe=6275E929'/>
        <Contact name='Chaeyoung' img='https://scontent.fhan3-5.fna.fbcdn.net/v/t39.30808-6/279724905_466036575280427_6350539224273574444_n.jpg?stp=dst-jpg_p526x296&_nc_cat=109&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=voUBkEsPRQMAX-meLVG&_nc_ht=scontent.fhan3-5.fna&oh=00_AT8PRuAZOOsxh4xMptrE9KnpKnLScO72VesgLS0RpN8V4w&oe=6275E929'/>
        <Contact name='Chaeyoung' img='https://scontent.fhan3-5.fna.fbcdn.net/v/t39.30808-6/279724905_466036575280427_6350539224273574444_n.jpg?stp=dst-jpg_p526x296&_nc_cat=109&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=voUBkEsPRQMAX-meLVG&_nc_ht=scontent.fhan3-5.fna&oh=00_AT8PRuAZOOsxh4xMptrE9KnpKnLScO72VesgLS0RpN8V4w&oe=6275E929'/>
      </div>
    </div>
  )
}

export default Widgets