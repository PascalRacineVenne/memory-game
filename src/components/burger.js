import React from 'react';
import burgerMenu from '../img/menu.svg';

const BurgerMenu = ({ menuOpen, setMenuOpen }) => {
  return (
    <img
      onClick={() => setMenuOpen(!menuOpen)}
      src={burgerMenu}
      alt='burger'
      className='menu-btn'
    />
  );
};

export default BurgerMenu;
