import React from 'react';
import './Programs.css';
import RibbonBox from './RibbonBox';
import img1 from '../../assets/CSEimg1.png';

export default function Programs() {
  return (
    <div className="programs">
      <h2 className="programs-heading">
        Streams To Pursue Your Passion
      </h2>
      <div className="programs1">
        <div className="pro">
          <RibbonBox
            bck="orange"
            brdbtm={{ size: 2, color: "orange" }}
            cont1="300 Seats*"
            cont2="Computer Science and Engineering"
            hrColor="orange"
            hoverImage={img1}
          />
          <RibbonBox
            bck="blue"
            brdbtm={{ size: 2, color: "blue" }}
            cont1="60 Seats*"
            cont2="Computer Science and Business Studies"
            hrColor="blue"
            hoverImage={img1}
          />
          <RibbonBox
            bck="green"
            brdbtm={{ size: 2, color: "green" }}
            cont1="120 Seats*"
            cont2="Data Science"
            hrColor="green"
            hoverImage={img1}
          />
          <RibbonBox
            bck="purple"
            brdbtm={{ size: 2, color: "purple" }}
            cont1="180 Seats*"
            cont2="Artificial Intelligence and Machine Learning"
            hrColor="purple"
            hoverImage={img1}
          />
        </div>
        <div className="pro hide-mobile">
          <RibbonBox
            bck="blue"
            brdbtm={{ size: 2, color: "blue" }}
            cont1="60 Seats*"
            cont2="IOT and Cyber Security Including Blockchain"
            hrColor="blue"
            hoverImage={img1}
          />
          <RibbonBox
            bck="orange"
            brdbtm={{ size: 2, color: "orange" }}
            cont1="60 Seats*"
            cont2="Computer Science and Engineering Design"
            hrColor="orange"
            hoverImage={img1}
          />
          <RibbonBox
            bck="purple"
            brdbtm={{ size: 2, color: "purple" }}
            cont1="60 Seats*"
            cont2="Robotics and Artificial Intelligence"
            hrColor="purple"
            hoverImage={img1}
          />
          <RibbonBox
            bck="green"
            brdbtm={{ size: 2, color: "green" }}
            cont1="60 Seats*"
            cont2="Electronics and Engineering"
            hrColor="green"
            hoverImage={img1}
          />
        </div>
      </div>
      <button className="programsbtn">View More</button>
    </div>
  );
}
