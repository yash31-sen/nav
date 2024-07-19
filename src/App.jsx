import { useState } from 'react'
import './App.css'
import Navbar from './Component/Navbar/Navbar'
import Programs from './Component/Programs/Programs'
import Hero from './Component/Hero/Hero'
function App() {
  return (
    <>
      <div className="app">
        <div className="navbar"> <Navbar /></div>
        <div className="Hero"><Hero /></div>
        <div className="programsMain"><Programs /></div>
        </div>
    </>
  )
}

export default App
