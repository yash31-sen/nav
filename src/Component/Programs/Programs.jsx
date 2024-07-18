import React from 'react';
import './Programs.css';
import RibbonBox from './RibbonBox';

export default function Programs() {
  return (
    <div className="programs">
      <h2 className="programs-heading">
      Streams To Pursue Your  Passion
      </h2>
      <div className="programs1">
        <div className="pro">
          <RibbonBox bck="orange" brdbtm={{ size: 2, color: "orange" }} cont1="300 Seats*" cont2="Computer Science and Engineering" hrColor="orange" />
          <RibbonBox bck="blue" brdbtm={{ size: 2, color: "blue" }} cont1="60 Seats*" cont2="Computer Science and Business Studies" hrColor="blue" />
          <RibbonBox bck="green" brdbtm={{ size: 2, color: "green" }} cont1="120 Seats*" cont2="Data Science" hrColor="green" />
          <RibbonBox bck="purple" brdbtm={{ size: 2, color: "purple" }} cont1="180 Seats*" cont2="Artificial Inteligence and Machine Learning" hrColor="purple" />
        </div>
        
        <div className="pro hide-mobile">
          <RibbonBox bck="blue" brdbtm={{ size: 2, color: "blue" }} cont1="60 Seats*" cont2="IOT and Cyber Security Including Bockchain" hrColor="blue" />
          <RibbonBox bck="orange" brdbtm={{ size: 2, color: "orange" }} cont1="60 Seats*" cont2="Computer Science and Engineering Design" hrColor="orange" />
          <RibbonBox bck="purple" brdbtm={{ size: 2, color: "purple" }} cont1="60 Seats*" cont2="Robotics and Artificial Inteligence" hrColor="purple" />
          <RibbonBox bck="green" brdbtm={{ size: 2, color: "green" }} cont1="60 Seats*" cont2="Electronics and Engineering" hrColor="green" />
        </div>
        
      </div>
      <button className="porgramsbtn">View More</button>
    </div>
  );
}
