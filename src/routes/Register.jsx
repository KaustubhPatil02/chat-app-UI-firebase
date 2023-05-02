import React from 'react'
import Add from '../images/addAvatar.png'

const Register = () => {
  return (
    <div className='formContainer'>
        <div className='formWrappeer'>
            <span className='logo'> Let's Chat</span>
            <span className='title'> Register</span>           
            <form>
                <input type="text"  placeholder='Display Name'/>
                <input type="email" placeholder='Enter email'/>
                <input type="password" placeholder='Enter Password'/>
                <input style={{display:"none"}}type="file" id='file'/>
                <label htmlFor="file">
                  <img src={Add} alt="drop an dp" />
                  <span>Add a Profile Picture</span>
                </label>
                <button>
                    Sign Up
                </button>
            </form>
            <p>Already have an account? Login here!</p>
        </div>
    </div>
  )
}

export default Register