import React, { useState } from 'react'
import Add from '../images/addAvatar.png'
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { auth, storage, db } from '../firebaseConfig'
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";
import { useNavigate, Link } from 'react-router-dom';

const Register = () => {
  const [err, setErr] = useState(false)
  const navigate = useNavigate()

  const handleSumbmit = async (e) => {
    e.preventDefault();
     console.log(e.target[0].value)
     console.log(e.target[1].value)
     console.log(e.target[2].value)
     console.log(e.target[3].value)
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[0].files;

    try {
      const res = await createUserWithEmailAndPassword(auth, email, password)

      const storageRef = ref(storage, displayName);

      const uploadTask = uploadBytesResumable(storageRef, file);
      uploadTask.on('state_changed',

        (error) => {
          setErr(true);
          // Handle unsuccessful uploads
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            await updateProfile(res.user, {
              displayName,
              photoURL: downloadURL
            })
            await setDoc(doc(db, "users", res.user.uid), {
              uid: res.user.uid,
              displayName,
              email,
              photoURL: downloadURL,

            });

            await setDoc(doc(db, "userChats", res.user.uid, {}));
            navigate("/")
          });
        }
      );


    } catch (err) {
      setErr(true);

    }

  }
  return (
    <div className='formContainer'>
      <div className='formWrappeer'>
        <span className='logo'> Let's Chat</span>
        <span className='title'> Register</span>
        <form onSubmit={handleSumbmit}>
          <input type="text" placeholder='Display Name' />
          <input type="email" placeholder='Enter email' />
          <input type="password" placeholder='Enter Password' />
          <input style={{ display: "none" }} type="file" id='file' />
          <label htmlFor="file">
            <img src={Add} alt="drop an dp" />
            <span>Add a Profile Picture</span>
          </label>
          <button>
            Sign Up
          </button>
          {err && <span>wait ......try again!, Something went wrong</span>}
        </form>
        <p>You don't have an account? <Link to="/login">Login here!</Link></p>
      </div>
    </div>
  );
};

export default Register