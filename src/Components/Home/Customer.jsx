import React, { useState } from 'react';
import './Customer.css';
import next_icon from '../../assets/next-icon.png';
import back_icon from '../../assets/back-icon.png';

const Customer = () => {
  const [slideIndex, setSlideIndex] = useState(1); // Keeps track of the current slide

  const reviews = [
    {
      id: 1,
      content: 'This spa is amazing! The services were top-notch, and the ambiance was so relaxing. I will definitely be back!',
      customer: 'John Doe'
    },
    {
      id: 2,
      content: 'I had a great experience at Divine Glo. The staff was professional, and the treatments left me feeling rejuvenated.',
      customer: 'Sarah Lee'
    },
    {
      id: 3,
      content: 'One of the best spa experiences I’ve had! The customer service was excellent, and the spa treatments were fantastic.',
      customer: 'Michael Smith'
    }
  ];

  // Function to go to the next slide
  const nextSlide = () => {
    if (slideIndex !== reviews.length) {
      setSlideIndex(slideIndex + 1);
    } else if (slideIndex === reviews.length) {
      setSlideIndex(1);
    }
  };

  // Function to go to the previous slide
  const prevSlide = () => {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1);
    } else if (slideIndex === 1) {
      setSlideIndex(reviews.length);
    }
  };

  // Function to move to a specific dot/slide
  const moveDot = (index) => {
    setSlideIndex(index);
  };

  return (
    <div className='customer-section'>
      <h4>CUSTOMER EXPERIENCES</h4>
      <p className='customer-subtitle'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

      <div className='customer-experience'>
        <img src={back_icon} className='back-btn' alt="Previous" onClick={prevSlide} />
        <div className='slider'>
          {reviews.map((review, index) => (
            <div
              key={review.id}
              className={slideIndex === index + 1 ? 'slide active-anim' : 'slide'}
            >
              <p className='info'>{review.content}</p>
              <p className='customer-name'>{review.customer}</p> {/* Customer name below review */}
            </div>
          ))}
        </div>
        <img src={next_icon} className='next-btn' alt="Next" onClick={nextSlide} />
      </div>

      <div className="container-dots">
        {Array.from({ length: reviews.length }).map((item, index) => (
          <div
            key={index}
            onClick={() => moveDot(index + 1)}
            className={slideIndex === index + 1 ? 'dot active' : 'dot'}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Customer;
