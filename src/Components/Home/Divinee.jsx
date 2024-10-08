import React from 'react'
import './Divinee.css'
import divine1 from '../../assets/divine1.png';
import divine2 from '../../assets/divine2.png';

const Divinee = () => {
  return (
    <div className='divine-container'>
      <div className='div-col1'>
        <h2>DIVINE GLO</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <img src={divine1} alt="Divine Glo Service" className="divine1" />
      </div>
      <div className='div-col2'>
        <img src={divine2} alt="Divine Glo Service" className="divine2" />
        <h6>OUR STORY</h6>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
          in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
          sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <button>More about us</button>
      </div>
    </div>
  )
}

export default Divinee;
