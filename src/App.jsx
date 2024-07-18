import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Component/Navbar/Navbar'
import Programs from './Component/Programs/Programs'
function App() {
  return (
    <>
<div className="navbar"> <Navbar/></div>
   <div className="programs"> <Programs/></div>
   <div className="Academics">
    
   </div>
    </>
  )
}

export default App
