import React from 'react';
import './Services_ext.css';
import service1 from '../../assets/service1.png';
import service2 from '../../assets/service2.png';
import service3 from '../../assets/service3.png';
import service4 from '../../assets/service4.png';
import service5 from '../../assets/service5.png';
import service6 from '../../assets/service6.png';
import service7 from '../../assets/service7.png';
import service8 from '../../assets/service8.png';

const Services_ext = () => {
  return (
    <div>
      <section className="services-section"> {/* Added class for background */}
        <div className="col-container">
          <div className='services-container2'>
            <div className="column1">
              <img src={service1} alt="image1" className="service1" />
              <img src={service4} alt="image4" className="service4" />
            </div>
            <div className="column2">
              <img src={service2} alt="image2" className="service2" />
              <img src={service5} alt="image5" className="service5" />
            </div>
            <div className="column3">
              <img src={service3} alt="image3" className="service3" />
              <img src={service6} alt="image6" className="service6" />
            </div>
            <div className="column4">
              <img src={service7} alt="image7" className="service7" />
              <img src={service8} alt="image8" className="service8" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services_ext;
