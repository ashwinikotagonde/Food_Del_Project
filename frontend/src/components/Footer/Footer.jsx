import React from 'react'
import './Footer.css';
import { assets } from '../../assets/assets';

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className='footer-container'>
        <div className='footer-container-left'>
            <img src={assets.logo} alt=''/>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque explicabo culpa nihil quod quis sed assumenda? Velit, amet sequi et cum commodi reiciendis dolore, eos tenetur, ipsam eligendi necessitatibus blanditiis.</p>
            <div className='footer-social-icons'>
                <img src={assets.facebook_icon} alt="" />
                <img src={assets.twitter_icon} alt="" />
                <img src={assets.linkedin_icon} alt="" />
            </div>
        </div>
        <div className='footer-container-center'>
            <h2>COMPANY</h2>
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Delivery</li>
                <li>Privacy Policy</li>
            </ul>
        </div>
        <div className='fpooter-container-right'>
            <h2>GET IN TOUCH</h2>
            <ul>
                <li>+1-212-456-7890</li>
                <li>contact@tomato.com</li>
            </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copy-right">Copyright 2024 Tomato.com - All Right Reserved.</p>
    </div>
  )
}

export default Footer
