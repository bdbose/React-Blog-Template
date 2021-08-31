import React, { useContext } from 'react';
import { ReactComponent as Logo } from '../../assets/logo.svg';
import { ReactComponent as Search } from '../../assets/search.svg';
import { ReactComponent as DownArrow } from '../../assets/downarrow.svg';
import './style.scss';
import { Context } from '../../store';

const Navbar = ({ open, setOpen }) => {
  const { state } = useContext(Context);
  return (
    <div className='navbar-wrapper'>
      <Logo />
      <div className='search-wrapper'>
        <Search />
        <input placeholder='Search for your favorite groups in ATG' />
      </div>
      {!state.user.logged ? (
        <div className='more-wrapper' onClick={() => setOpen(true)}>
          Create account. <span>It’s free!</span>
          <DownArrow />
        </div>
      ) : (
        <div className='more-wrapper'>
          <img src='https://bdbose.tech/bidiptobose.png' alt='' />
          {state.user.name}
          <DownArrow />
        </div>
      )}
    </div>
  );
};

export default Navbar;
