import React from 'react';
import './RibbonBox.css';

const RibbonBox = ({ bck, brdbtm, cont1, cont2, hrColor }) => {
  const boxStyle = {
    maxWidth: "500px",
    borderBottom: `${brdbtm.size}px solid ${brdbtm.color}`
  };

  const ribbonStyle = {
    maxWidth: "500px",
    background: bck
  };

  const hrStyle = {
    backgroundColor: hrColor,
    height: "8px", // Set the height to 8vh
    border: "none"
  };

  return (
    <div className="box" style={boxStyle}>
      <div className="ribbon-2" style={ribbonStyle}>{cont1}</div>
      <div className="content">
        <p>
        {cont2}</p>
      </div>
      <hr style={hrStyle} />
    </div>
  );
};

export default RibbonBox;
