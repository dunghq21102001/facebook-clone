import React, { useEffect, useState } from 'react'
import StoryRoll from './StoryRoll'
import './Feed.css'
import MessSender from './MessSender'
import Post from './Post'
import { db } from '../firebase'
import { collection, getDocs, query, orderBy } from 'firebase/firestore'
function Feed() {
  const [posts, setPosts] = useState([])
  useEffect(() => {
    const getData = async () => {
      const parkingData = await getDocs(collection(db, "posts"), orderBy("time", "desc"))
      const q = query(parkingData, orderBy("time", "desc"))
      setPosts(parkingData.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    }
    getData()
  }, [])

  return (
    <div className='feed'>
      <StoryRoll />
      <MessSender />
      {posts.map((post) => {
        return <Post
          key={post.id}
          profilePic={post.profilePic}
          userName={post.userName}
          time={post.time}
          message={post.message}
          postImg={post.postImg}
        />
      })}
    </div>
  )
}

export default Feed