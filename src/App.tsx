import React, { useState } from 'react';
import { auth } from './firebaseConfig'
import { GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth'
import './App.css';
import ChatComponent from './component/ChatComponent';

function App() {
  var [arr,setArr]=useState({} as any)

  // Function for Sign in 
  const SignWithGoogle=()=>{
    const provider = new GoogleAuthProvider()
    signInWithPopup(auth,provider)
    .then(res=>setArr(res.user))
  }
  // Function for Sign Out
  const SignOutWithGoogle=()=>{
    signOut(auth)
    .then(()=>setArr({uid:undefined}))
  }

  return (
    <div className="App">
      <nav className="navbar bg-primary col-12 position-fixed fixed-top">
        <div className="container-fluid">
          <div className='d-flex flex-row align-items-center'>
            <img src='icon.png' alt='' style={{height:'50px'}}/>
            <a className="navbar-brand text-white fw-bold fs-2" href='h'>Chat App</a>
          </div>
          <div className="d-flex">
            <button className='border border-0 m-2 text-light rounded-pill p-2 ps-3 pe-3 bg-info fw-bold' onClick={SignWithGoogle}>Sign In</button> 
            <button className='bg-danger border-0 m-2 text-white rounded-pill p-2 ps-3 pe-3 fw-bold' onClick={SignOutWithGoogle}>LogOut</button>
          </div>
        </div>
      </nav>
      <ChatComponent arr={arr}/>
    </div>
  );
}

export default App;
