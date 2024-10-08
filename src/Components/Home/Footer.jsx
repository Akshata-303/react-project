import React from 'react'
import './Footer.css'
import media1 from '../../assets/media1.png';
import media2 from '../../assets/media2.png';
import media3 from '../../assets/media3.png';
import media4 from '../../assets/media4.png';
import media5 from '../../assets/media5.png';
import media6 from '../../assets/media6.png';
import media7 from '../../assets/media7.png';
import Logo from '../../assets/Logo.png';

const Footer = () => {
  return (
    <div className='footer-container'>
    <div className='footer-columns'>
        <div className='footer-col1'>
            <img src={Logo} alt='logo'/>
            <p><b>Address:</b> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
             labore et dolore magna aliqua. </p>
             <div className='media'>
                <img src={media1} alt='media1'/>
                <img src={media2} alt='media2'/>
                <img src={media3} alt='media3'/>
                <img src={media4} alt='media4'/>
                <img src={media5} alt='media5'/>
                <img src={media6} alt='media6'/>
                <img src={media7} alt='media7'/>
             </div>
             <p className='copywrite'>Copyright © 2024  | <b>Divine Glow By Mehek</b> </p>
        </div>
        <div className='footer-col2'>
            <h5><b>About</b></h5>
            <ul>
                <li>Section #1</li>
                <li>Section #2</li>
                <li>Section #3</li>
                <li>Section #4</li>
            </ul>
        </div>
        <div className='footer-col3'>
            <h5><b>Services</b></h5>
            <ul>
                <li>Section #1</li>
                <li>Section #2</li>
                <li>Section #3</li>
                <li>Section #4</li>
            </ul>
        </div>
        <div className='footer-col4'>
            <h5><b>Career</b></h5>
            <ul>
                <li>Section #1</li>
                <li>Section #2</li>
                <li>Section #3</li>
                <li>Section #4</li>
            </ul>
        </div>
    </div>
      
    </div>
  )
}

export default Footer
