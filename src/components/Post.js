import React from 'react'
import './Post.css'
function Post(props) {
    let profilePicture = <img className='profilePicture' src={props.profilePic} alt="" />
    return (
        <div className='post'>
            <div className='post__top'>
                <div>
                    {profilePicture || <span class="material-icons">account_circle</span>}
                </div>
                <div className='post__topInfo'>
                    <h3>{props.userName}</h3>
                    <p>{new Date(props.time?.toDate()).toUTCString()}</p>
                </div>
            </div>
            <div className='post__bottom'>
                <p>{props.message}</p>
            </div>
            <div className='post__img'>
                <img src={props.postImg} alt="" />
            </div>

            <div className='post__options'>
                <div className='post__option'>
                    <span class="material-icons">thumb_up_alt</span>
                    <p>Like</p>
                </div>
                <div className='post__option'>
                    <span class="material-icons">question_answer</span>
                    <p>Comments</p>
                </div>
                <div className='post__option'>
                    <span class="material-icons">reply</span>
                    <p>Share</p>
                </div>
            </div>
        </div>
    )
}

export default Post