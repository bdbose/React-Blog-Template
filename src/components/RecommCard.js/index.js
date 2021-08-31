import React, { useState } from 'react';
import './style.scss';

const RecommCard = ({ img, name }) => {
  const [active, setActive] = useState(false);
  return (
    <div className='recomm-card-wrapper'>
      <div>
        <img src={img} alt='' />
        <span>{name}</span>
      </div>
      <button
        className={active ? 'active' : ''}
        onClick={() => setActive(!active)}>
        {!active ? 'Follow' : 'Unfollow'}
      </button>
    </div>
  );
};

export default RecommCard;
