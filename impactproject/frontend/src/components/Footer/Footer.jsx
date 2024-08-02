import React from 'react';
import './Footer.css'
import { assets } from '../../assets/assets';
const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <img src={assets.logo} alt="" />
                <p>Choose from diverse menu featuring a delectable array of dishes crafted with thefinest ingridients and culinary expertise. Our mission is to satisfy your cravin gs and elevate your dining experience, one delicous meal at a time.</p>
                <div className="footer-social-icons">
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                </div>
            </div>
            <div className="footer-content-center">
               
            </div>
            <div className="footer-content-right">
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>9951971328</li>
                    <li>foodmunch@gmail.com</li>
                </ul>
            </div>
        </div>
      <hr />
      <p className='footer-copyright'>Copyright 2024 © Tomato.com All Right Reserved.k</p>
    </div>
  );
}

export default Footer;
