import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Main from './components/main';
// import SignIn from './components/SignIn'

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";



const firebaseConfig = {
  apiKey: "AIzaSyBbWyuNMhR5U7MHXtTWkzxLGkIF93pE1zA",
  authDomain: "hackathon-db-7164c.firebaseapp.com",
  projectId: "hackathon-db-7164c",
  storageBucket: "hackathon-db-7164c.appspot.com",
  messagingSenderId: "399031904188",
  appId: "1:399031904188:web:75dafdecb494a4ebcdadb9"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);



function App() {


  return (
    <div className="App">

      <h1>Hello world</h1>
      <Main />

    </div>
  )
}

export default App
