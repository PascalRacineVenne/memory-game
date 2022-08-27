import React from 'react';

const Card = ({ card, handleChoice, flipped }) => {
  const handleClick = () => {
    handleChoice(card);
  };
  return (
    <div className='card'>
      <div className={flipped ? 'flipped' : ''}>
        <img src={card.imgSrc} alt='card front' className='front' />
        <img
          src='/images/cube.jpeg'
          onClick={handleClick}
          alt='card back'
          className='back'
        />
      </div>
    </div>
  );
};
export default Card;
