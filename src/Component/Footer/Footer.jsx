import React from 'react';
import FooterLogo from '../../assets/footerlogo.jpeg';
import QR from '../../assets/qr.png';
import Gmapimg from '../../assets/gmap.png';
import './Footer.css';

export default function Footer() {
  return (
    <div className="footer">
      <div className="footerlogo">
        <img src={FooterLogo} alt="Footer Logo" />
      </div>
      <div className="footerQR">
        <h3>Gyan Ganga Institute of Technology and Sciences</h3>
        <p>Jabalpur</p>
        <img src={QR} alt="QR Code" />
      </div>
      <div className="footerContatct">
        <h3>Contact Us</h3>
        <ul>
          <li><i className="fa-solid fa-phone"></i> +91 8888888888</li>
          <li><i className="fa-solid fa-envelope"></i> ggits@ggits.net</li>
          <li>
            <i className="fa-solid fa-location-dot"></i>
            P.O. Tilwara Ghat<br />
            <span className="footeradd">Bargi Hills, Jabalpur</span>
          </li>
        </ul>
      </div>
      <div className="gmap">
        <div className="social-media">
          <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-linkedin"></i></a>
          <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-facebook"></i></a>
          <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-instagram"></i></a>
          <a href="https://www.twitter.com/" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-twitter"></i></a>
        </div>
        <a href="https://www.google.com/maps/dir/23.158087,79.8914972/Gyan+Ganga+Institute+of+Technology+%26+Sciences+(GGITS)+-+Best+Engineering+College+in+Jabalpur,+P.O,+Tilwara+Ghat,+near+Bargi+Hills,+Jabalpur,+Madhya+Pradesh+482003/@23.1436571,79.861608,14z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x3981b3caccc2274b:0xc066b027d5fb1488!2m2!1d79.8748675!2d23.1291415?entry=ttu" target='_blank'>
          <img className="gmapimg" src={Gmapimg} alt="Google Map" />
        </a>
      </div>
        <div className="designed-by">
          Designed and developed by Gyan Ganga Group Of Institutions
        </div>
    </div>
  );
}
