import React, { useState } from 'react'
import Add from "../img/addAvatar.png"
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, storage, db } from "../firebase";//we take the auth const var from firebase.js  
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
// import { async } from '@firebase/util';
import { doc, setDoc } from "firebase/firestore";
const Register = () => {
  const [err, setErr] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault()//It will prevent the default browser behavior of submitting a form and refreshing the page.
    //It allows the developer to take control of the behavior of the event and run the desired logic instead of the default one.
    //console.log(e.target[0].value)//Print the first display name in the console providing th value, the index denotes the targets.
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].value;
    //Copied the below code from firebase docs
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);

      const storageRef = ref(storage, displayName);

      const uploadTask = uploadBytesResumable(storageRef, file);

      // Register three observers:
      // 1. 'state_changed' observer, called any time the state changes
      // 2. Error observer, called on failure
      // 3. Completion observer, called on successful completion
      uploadTask.on(
        (error) => {
          // Handle unsuccessful uploads
          setErr(true);
        },
        () => {
          // Handle successful uploads on complete
          // For instance, get the download URL: https://firebasestorage.googleapis.com/...
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            await updateProfile(res.user, {
              displayName,
              photoURL: downloadURL,

            });
            await setDoc(doc(db, "users", res.user.uid), {
              uid: res.user.uid,
              displayName,
              email,
              photoURL: downloadURL
            });
          });
        }
      );
    } catch (err) {
      console.log(err);
      setErr(true);

    }

    // -------------------------------------------------------------------------  
    // .then((userCredential) => {
    //   // Signed in 
    //   const user = userCredential.user;

    //   //testing 
    //   console.log(user);
    //   // ...
    // })
    // .catch((error) => {
    //   const errorCode = error.code;
    //   const errorMessage = error.message;
    //   // ..
    // });
    //Till here we have copied


  }
  return (
    <div className='formContainer'>
      <div className='formWrapper'>
        <span className='logo'>BitesToBeacon</span>
        <span className='title'>Register</span>
        <form onSubmit={handleSubmit}>

          <input type="text" placeholder='display name' />
          <input type="email" placeholder='email' />
          <input type="password" placeholder='password' />
          <input style={{ display: "none" }} type="file" id="file" />
          <label htmlFor="file" >
            <img src={Add} alt="" />{/*URL deko xaina so dont use "" instead we use ADD inside {} to tell its a variable containing appavatar image */}
            <span>Choose Avatar</span>
          </label>

          <button>Sign up</button>
          {err && <span>Something went wrong</span>}
        </form>
        <p>You do have an account? Login</p>
      </div>
    </div>
  )
}

export default Register