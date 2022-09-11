import React, { useState } from 'react'
import './MessSender.css'
import { useStateValue } from './StateProvider'
import { db } from '../firebase'
import { collection, addDoc, Timestamp } from 'firebase/firestore'
function MessSender(props) {
    const [messBtn, setMessBtn] = useState(false)
    const [input, setInput] = useState("")
    const [url, setUrl] = useState("")
    const [{ user }, dispatch] = useStateValue()

    function messBtnHandle() {
        setMessBtn(true)
    }
    function closeHandle() {
        setMessBtn(false)
    }
    const submitHandle = (e) => {
        e.preventDefault()
        const createNote = async () => {
            await addDoc(collection(db, 'posts'), {
                message: input,
                time: Timestamp.now(),
                profilePic: user.photoURL,
                userName: user.displayName,
                postImg: url
            })
        }
        createNote()
        setInput("")
        setUrl("")
        setMessBtn(false)
    }

    let thinkingTable
    if (messBtn === true) {
        thinkingTable = <div>
            <form className='thinkingForm'>
                <div className='containerForm'>
                    <div onClick={closeHandle} className='closeBtn'><span>X</span></div>
                    <input value={input} onChange={(e) => setInput(e.target.value)} className='inputForm' required type='text' placeholder="What's on your mind?" />
                    <input value={url} onChange={(e) => setUrl(e.target.value)} className='imgForm' required type='text' placeholder="Image URL" />
                    <button onClick={submitHandle} type='submit' className='sendBtn'>Đăng</button>
                </div>
            </form>
        </div>
    }
    return (
        <div className='messSender'>
            <div className='messSender__top'>
                <img src={user.photoURL} alt='' />
                <div onClick={messBtnHandle} className='messSender__top__btn'>
                    What's on your mind, {user.displayName}
                </div>
            </div>
            <div className='messSender__bottom'>
                <div className='messSender__option'>
                    <span style={{ color: '#f3425f' }} class="material-icons">video_call</span>
                    <h3>Stream</h3>
                </div>
                <div className='messSender__option'>
                    <span style={{ color: '#45bd62' }} class="material-icons">image</span>
                    <h3>Images/video</h3>
                </div>
                <div className='messSender__option'>
                    <span style={{ color: '#f7b928' }} class="material-icons">mood</span>
                    <h3>Feeling/Activities</h3>
                </div>
            </div>
            {thinkingTable}
        </div>
    )
}

export default MessSender