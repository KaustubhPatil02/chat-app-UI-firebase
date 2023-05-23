import React from 'react'
import Sidebar1 from '../components/Sidebar1'
import Chats from '../components/Chats'


const Home = () => {
  return (
    <div className='home'>
      <div className='container'>
        <Sidebar1 />
        <Chats />


      </div>
    </div>
  )
}

export default Home