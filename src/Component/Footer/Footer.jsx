import React from 'react';
import './Footer.css';

export default function Footer() {
  return (
    <div className="footer">
      <div className="fleft">
        <div className="flogo">
          <img src="./assets/mainlogo.png" alt="Logo" />
          <p>+91-1234567890</p>
          <p>P.O. Tilwara Ghat Jabalpur</p>
        </div>
      </div>
      <div className="fmiddle">
        <button>Contact Us</button>
        <button>Staff Directory</button>
        <button>WCTC JOBS</button>
        <button>District Board</button>
      </div>
      <div className="fright">
        <div className="social-media">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
        <div className="images">
          <img src="./assets/image1.jpg" alt="Image 1" />
          <img src="./assets/image2.jpg" alt="Image 2" />
        </div>
      </div>
    </div>
  );
}
