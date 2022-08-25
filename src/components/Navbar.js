import React from 'react';
import Menu from './Menu.js';

const Navbar = () => {
  return (
    <div className='nav'>
      <p className='title'>
        <a href='/#' alt='skysearch'>
          Magic Match
        </a>
      </p>
      <Menu />
    </div>
  );
};

export default Navbar;
