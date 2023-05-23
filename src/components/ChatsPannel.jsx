import React from 'react'
import Add from '../images/kp1.jpg'


const ChatsPannel = () => {
  return (
    <div className='chatsP'>
     <div className="userChats">
        <img src={Add} alt="" />
        <div className="userChatInfo">
          <span>Kaustubh</span>
          <p>Latest messages are here shown</p>
        </div>
      </div>

      <div className="userChats">
        <img src={Add} alt="" />
        <div className="userChatInfo">
          <span>Kaustubh</span>
          <p>Latest messages are here shown</p>
        </div>
      </div>
    

     <div className="userChats">
        <img src={Add} alt="" />
        <div className="userChatInfo">
          <span>Kaustubh</span>
          <p>Latest messages are here shown</p>
        </div>
      </div>
    
    
    </div>
  )
}

export default ChatsPannel