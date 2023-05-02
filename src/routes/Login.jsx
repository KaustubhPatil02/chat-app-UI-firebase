import React from 'react'
// import Add from '../images/addAvatar.png'

const Login = () => {
  return (
    <div className='formContainer'>
        <div className='formWrappeer'>
            <span className='title'> Login</span>           
            <form>
             
                <input type="email" placeholder='Enter email'/>
                <input type="password" placeholder='Enter Password'/>
                <button>
                    Login 
                </button>
            </form>
            <p>Don't have an account? Register here!</p>
        </div>
    </div>
  )
}

export default Login