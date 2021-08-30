import React from 'react';
import './style.scss';
import { ReactComponent as Back } from '../../assets/back.svg';

const Banner = ({ setOpen }) => {
  return (
    <div className='banner-wrapper'>
      <div className='mobile-options'>
        <Back />
        <button onClick={() => setOpen(true)}>Join Group</button>
      </div>
      <div className='banner-container'>
        <h1>Computer Engineering</h1>
        <h3>142,765 Computer Engineers follow this</h3>
      </div>
    </div>
  );
};

export default Banner;
