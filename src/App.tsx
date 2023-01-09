import React, { useEffect, useRef, useState } from 'react';
import { auth } from './firebaseConfig'
import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup } from 'firebase/auth'
import './App.css';
import ChatComponent from './component/ChatComponent';

function App() {
  // var inpRef = useRef('')
  var [arr,setArr]=useState({})

  useEffect(()=>{
    onAuthStateChanged(auth,'dsd')
  },[])
  // console.log(firebaseConfig)

  const SignWithGoogle=()=>{
    const provider = new GoogleAuthProvider()
    signInWithPopup(auth,provider)
  
  }

  return (
    <div className="App">
      <div className='d-flex flex-row mb-3 align-items-center justify-content-around '>
        <div className='d-flex flex-row'>
          <img src='https://png.pngtree.com/element_our/png/20181229/vector-chat-icon-png_302635.jpg' alt='' style={{height:'50px'}}/>
          <h2>Chat App</h2>
        </div>
        <div>
          <button className='border border-0 m-2 text-light rounded-pill p-2 bg-info' onClick={SignWithGoogle}>Sign In</button>
          <button className='border border-0 m-2 text-light rounded-pill p-2 bg-danger'>LogOut</button>
        </div>
      </div>
      <ChatComponent arr={arr}/>
    </div>
  );
}

export default App;
