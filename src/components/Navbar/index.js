import React from 'react';
import { ReactComponent as Logo } from '../../assets/logo.svg';
import { ReactComponent as Search } from '../../assets/search.svg';
import { ReactComponent as DownArrow } from '../../assets/downarrow.svg';
import './style.scss';

const Navbar = ({ open, setOpen }) => {
  return (
    <div className='navbar-wrapper'>
      <Logo />
      <div className='search-wrapper'>
        <Search />
        <span>Search for your favorite groups in ATG</span>
      </div>
      <div className='more-wrapper' onClick={() => setOpen(true)}>
        Create account. <span>It’s free!</span>
        <DownArrow />
      </div>
    </div>
  );
};

export default Navbar;
