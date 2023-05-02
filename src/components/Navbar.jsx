import React from 'react'
import Add from '../images/kp1.jpg'

export const Navbar = () => {
  return (
    <div className='nav'>
      <span className="logo">Let's Chat</span>
      <div className="user">
        <img src={Add} alt="" />
        <span>Kaustubh </span>
        <button>
          Logout
        </button>
      </div>
    </div>
  )
}
export default Navbar 
