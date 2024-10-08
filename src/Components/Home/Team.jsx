import React from 'react';
import './Team.css';
import member1 from '../../assets/member1.png';
import member2 from '../../assets/member2.png';

const Team = () => {
  return (
    <div className='team-container'>
      <div className="Team-rectangle"></div> {/* This rectangle will be a background */}
      <div className='team-content'>
        <p className='team-title'>MEET THE TEAM</p>
        <h2 className='team-subtitle'>Founders of <b>Divine Glow by Mehek</b></h2>
        <div className='team-columns'>
          <div className='member'>
            <img src={member1} alt="Mehek Saith" className="member-img" />
            <h3 className='member-name'>Mehek Saith</h3>
            <p className='member-about'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
              labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea 
              commodo consequat. Duis aute irure dolor in reprehenderit.
            </p>
          </div>
          <div className='member'>
            <img src={member2} alt="Shehbaz Alwani" className="member-img" />
            <h3 className='member-name'>Shehbaz Alwani</h3>
            <p className='member-about'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
              labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea 
              commodo consequat. Duis aute irure dolor in reprehenderit.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Team;
