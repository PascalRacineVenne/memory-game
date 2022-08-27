import React from 'react';
import backface from '../img/cube.jpg';

const Card = ({ card, handleChoice, flipped }) => {
  console.log(card);
  const handleClick = () => {
    handleChoice(card);
  };
  return (
    <div className='card'>
      <div className={flipped ? 'flipped' : ''}>
        <img src={card.imgSrc} alt='card front' className='front' />
        <img
          src={backface}
          onClick={handleClick}
          alt='card back'
          className='back'
        />
      </div>
    </div>
  );
};
export default Card;
