import React from 'react';
import './style.scss';

import { ReactComponent as Menu } from '../../assets/menu.svg';
import { ReactComponent as Share } from '../../assets/share.svg';
import { ReactComponent as Eye } from '../../assets/eye.svg';
import { ReactComponent as Calender } from '../../assets/calender.svg';
import { ReactComponent as Location } from '../../assets/location.svg';

const Cards = ({
  type,
  title,
  Img,
  desc,
  event = null,
  visit,
  job = null,
  profileImg,
  name,
  views,
}) => {
  return (
    <div className='cards-wrapper'>
      {Img && <img src={Img} alt='' />}
      <div>
        <h2>{type}</h2>
        {title && (
          <div className='card-detail'>
            <span>{title}</span>
            <button className='menu-btn'>
              <Menu />
            </button>
          </div>
        )}
        {desc && <h3>{desc}</h3>}

        {(event || job) && (
          <div className='card-event'>
            <div>
              <Calender />
              <span>{event ? event.date : job.company}</span>
            </div>
            <div>
              <Location />
              <span>{event ? event.location : job.location}</span>
            </div>
          </div>
        )}
        {visit && (
          <div
            className='event-active '
            style={{
              color: job ? '#02B875' : '',
            }}>
            {visit}
          </div>
        )}

        <div className='profile-wrapper'>
          <div className='profile'>
            <img src={profileImg} alt='' />
            <span>{name}</span>
          </div>
          <div className='post-options'>
            <span>
              <Eye />
              {views} views
            </span>
            <button>
              <Share />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
