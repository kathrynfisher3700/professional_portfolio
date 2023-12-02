import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Home from './pages/Home'
import './App.css'
import stag from './assets/stag.png'

function App() {
 
  return(
  <div>
    <nav className="navbar">
  <div className="container-fluid">
    
      <a className="navbar-brand" href="#"><img src={stag}></img>StagCrest Creations</a>
        <a className="nav-link active" aria-current="page" href="#">Home</a>
        <a className="nav-link" href="#">About</a>
        <a className="nav-link" href="#">Projects</a>
        <a className="nav-link" href="#" >Contact</a>
     </div>
</nav>
  </div>
  )}

export default App
