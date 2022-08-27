import React from 'react';
import Menu from './Menu.js';

const Navbar = () => {
  return (
    <div className='nav'>
      <p className='title'>Matchtastic!</p>
      <Menu />
    </div>
  );
};

export default Navbar;
