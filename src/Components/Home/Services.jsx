import React from 'react';
import './Services.css';
import Card1 from '../../assets/card1.png';
import Card2 from '../../assets/card2.png';
import Card3 from '../../assets/card3.png';
import Card4 from '../../assets/card4.png';


const Services = () => {
  return (
    <div className="services-container">
    <h2 className="services">SERVICES</h2>
    <p className="text2">
      From soothing massages to rejuvenating facials, we offer a range of treatments
      tailored to provide the ultimate relaxation experience.
    </p>
    <div className='card-container'> {/* Single card container for all cards */}
      <div className='card'>
        <img src={Card1} alt="Service 1" />
        <div className='card-content'><p>Service 1</p></div>
      </div>
      <div className='card'>
        <img src={Card2} alt="Service 2" />
        <div className='card-content'><p>Service 2</p></div>
      </div>
      <div className='card'>
        <img src={Card3} alt="Service 3" />
        <div className='card-content'><p>Service 3</p></div>
      </div>
      <div className='card'>
        <img src={Card4} alt="Service 4" />
        <div className='card-content'><p>Service 4</p></div>
      </div>
    </div>
    </div>
  );
}

export default Services;
