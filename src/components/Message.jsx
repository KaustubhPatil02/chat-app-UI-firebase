import React from 'react'

const Message = () => {
  return (
    <div className="message owner">
       <div className='messageInfo'>
      <img src="https://cdn-icons-png.flaticon.com/512/21/21104.png" alt="" />
      <span>Just now</span>
    </div><div className="messageContent">
      {/* <img src="https://cdn-icons-png.flaticon.com/512/21/21104.png" alt="" /> */}
      <p>hii!</p></div>
    </div>
   
  )
}

export default Message