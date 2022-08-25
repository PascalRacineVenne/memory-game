import React from 'react';

const Card = ({ card }) => {
  return (
    <div className='card' name={card.name} id={card.id}>
      <img src={card.imgSrc} alt='card' className='face' />
      <div className='back'></div>
    </div>
  );
};
export default Card;
