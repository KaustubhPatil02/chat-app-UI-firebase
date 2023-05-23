import React from 'react'
import Add from '../images/kp1.jpg'
import { signOut } from 'firebase/auth'

export const Navbar = () => {
  return (
    <div className='nav'>
      <span className="logo">Let's Chat</span>
      <div className="user">
        <img src={Add} alt="" />
        <span>Kaustubh </span>
        <button onClick={(auth)=>signOut}>
          Logout
        </button>
      </div>
    </div>
  )
}
export default Navbar 
