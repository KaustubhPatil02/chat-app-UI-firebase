import React from 'react'
import Cam from '../images/cam.png'
import more from '../images/more.png'
import attach from '../images/add.png'
import Messages from './Messages'
import Input from './Input'


const Chats = () => {
  return (
    <div className='chats'>
      <div className="chatsHistory">
        <span> Kaustubh</span>
        <div className="chatIcons">
          <img src={Cam} alt="" />
          <img src={attach} alt="" />
          <img src={more} alt="" />
        </div>
      </div>
      <Messages/>
      <Input/>
    </div>
  )
}

export default Chats