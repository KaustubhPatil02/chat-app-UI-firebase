import React from 'react'
import Navbar from './Navbar'
import Search from './Search'
import ChatsPannel from './ChatsPannel'


const Sidebar1 = () => {
  return (
    <div className='sidebar'>
      <Navbar/>
      <Search/>
      <ChatsPannel/>
    </div>
  )
}

export default Sidebar1