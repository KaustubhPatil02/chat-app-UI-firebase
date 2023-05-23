import React, { useState } from 'react'
// import Add from '../images/addAvatar.png'
import { useNavigate, Link} from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../firebaseConfig';



const Login = () => {
  const [err, setErr] = useState(false)
  const navigate = useNavigate()

  const handleSumbmit = async (e) => {
    e.preventDefault();
    //  console.log(e.target[0].value)
    //  console.log(e.target[1].value)
     
    const email = e.target[0].value;
    const password = e.target[1].value;
    try {
        // (error) => {
        //   setErr(true);
        //   // Handle unsuccessful uploads
        // },
        const res = await signInWithEmailAndPassword(auth, email, password)
      } catch (err) {
      setErr(true);

    }
  };

  return (
    <div className='formContainer'>
        <div className='formWrappeer'>
            <span className='title'> Login</span>           
            <form onSubmit={handleSumbmit}>             
                <input type="email" placeholder='Enter email'/>
                <input type="password" placeholder='Enter Password'/>
                <button>
                    Login 
                </button>
            </form>
            <p>Don't have an account? <Link to="/register">Register here!</Link></p>
        </div>
    </div>
  )
}

export default Login