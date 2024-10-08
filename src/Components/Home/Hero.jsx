import React from 'react';
import './Hero.css';
import Image1 from '../../assets/image1.png';
import Image2 from '../../assets/image2.png';
import Image3 from '../../assets/image3.png';
import Image4 from '../../assets/image4.png';
import Image5 from '../../assets/image5.png';
import Image6 from '../../assets/image6.png';
import Image7 from '../../assets/image7.png';

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-column coconut1-bg"></div>
      <div className="hero-column coconut2-bg"></div>
      
         
      <div className="hero-rectangle"></div>
     
      <div className='column-container'>
         <div className='col1'>
            <img src={Image1} alt="image1" className="image1" />
         </div>
         <div className='col2'>
            <img src={Image2} alt="image2" className="image2" />
            <img src={Image3} alt="image3" className="image3" />
         </div>
         <div className='col3'>
         <h4 className='heading'>DIVINE GLO</h4>
         <p className='text'>Experience seamless navigation and fast performance with our cutting-edge single-page
          application design</p>
          <button className='btn2'>Take an Appointment</button>
            <img src={Image4} alt="image4" className="image4" />
         </div>
         <div className='col4'>
            <img src={Image6} alt="image5" className="image6" />
            <img src={Image5} alt="image5" className="image5" />
         </div>
         <div className='col5'>
            <img src={Image7} alt="image7" className="image7" /> 
         </div>
      </div>
    </section>
  );
}

export default Hero;
