import React from 'react'
import Add from '../images/kp1.jpg'

const Search = () => {
  return (
    <div className='search'>
      <div className="searchform">
        <input type="text" placeholder='Find User'/>
      </div>
      <div className="userChats">
        <img src={Add} alt="" />
        <div className="userChatInfo">
          <span>Kaustubh</span>
        </div>
      </div>
    </div>
  )
}

export default Search