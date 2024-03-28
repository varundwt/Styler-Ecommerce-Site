import React from 'react'
import './Footer.css'
import footer_logo from '../Assets/logo_big.png'
import instagram_icon from '../Assets/instagram_icon.png'
import pinterest_icon from '../Assets/pintester_icon.png'
import whatsapp_icon from '../Assets/whatsapp_icon.png'

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-logo'>
            <img className='footer-logo' src={footer_logo} alt='footer-logo'/>
            <p>STYLER</p>
        </div>
        <ul className='footer-links'>
            <li>Company</li>
            <li>Products</li>
            <li>Offices</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
        <div className='footer-social-icon'>
            <div className='footer-icon-container'>
                <img src={whatsapp_icon} alt='whatsapp-icon'/>
            </div>
            <div className='footer-icon-container'>
                <img src={instagram_icon} alt='instagram-icon'/>
            </div>
            <div className='footer-icon-container'>
                <img src={pinterest_icon} alt='pinterest-icon'/>
            </div>
        </div>
        <div className='footer-copyright'>
        <hr/>
        <p>Copyright @ 2024 - All Rights Reserved</p>
        <p>Developed By - Varun Pandey</p>
        </div>
    </div>
  )
}

export default Footer;