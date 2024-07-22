import React from 'react';
import './App.css';
import Navbar from './Component/Navbar/Navbar';
import Programs from './Component/Programs/Programs';
import Hero from './Component/Hero/Hero';
import Footer from './Component/Footer/Footer';
import CursorRing from './Component/CurosrRing/CursorRing';
import Placements from './Component/Placements/Placements';
function App() {
  return (
    <>
      <div className="app">
        <div className="navbar"><Navbar /></div>
        <div className="Hero"><Hero /></div>
        <div className="placementsMain"><Placements/></div>
        <div className="programsMain"><Programs /></div>
        <div className="footerMain"><Footer /></div>
        <CursorRing />
      </div>
    </>
  );
}
export default App;