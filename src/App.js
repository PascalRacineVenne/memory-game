import React, { useState, useEffect } from 'react';
import Button from './components/button.js';
import Card from './components/Card.js';
// import Navbar from './components/Navbar.js';

const cardImages = [
  { imgSrc: 'images/beatles.jpeg', matched: false },
  { imgSrc: 'images/blink182.jpeg', matched: false },
  { imgSrc: 'images/fkatwigs.jpeg', matched: false },
  { imgSrc: 'images/fleetwood.jpeg', matched: false },
  { imgSrc: 'images/joy-division.jpeg', matched: false },
  { imgSrc: 'images/ledzep.jpeg', matched: false },
  { imgSrc: 'images/metallica.jpeg', matched: false },
  { imgSrc: 'images/pinkfloyd.jpeg', matched: false },
];

const App = () => {
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);

  const randomCompare = () => {
    return Math.random() - 0.5;
  };

  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => randomCompare())
      .map((card) => ({ ...card, id: Math.random() }));

    setCards(shuffledCards);
    setTurns(0);
  };

  const handleChoice = (card) => {
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
  };

  // Handle choice
  useEffect(() => {
    if (choiceOne && choiceTwo) {
      if (choiceOne.imgSrc === choiceTwo.imgSrc) {
        setCards((prevCards) => {
          return prevCards.map((card) => {
            if (card.imgSrc === choiceOne.imgSrc) {
              return {
                ...card,
                matched: true,
              };
            } else {
              return card;
            }
          });
        });
        resetTurn();
      } else {
        setTimeout(() => resetTurn(), 1000);
      }
    }
  }, [choiceOne, choiceTwo]);

  console.log(cards);

  const resetTurn = () => {
    setChoiceOne(null);
    setChoiceTwo(null);
    setTurns((prevTurns) => prevTurns + 1);
    console.log('reset');
  };

  return (
    <div className='container'>
      {/* <Navbar /> */}
      <header>
        <h1>Magic Match</h1>
        <Button onClick={shuffleCards} text='New Game' />|
        <span className='playerLivesCount'>{turns}</span>
      </header>
      <div className='card-grid'>
        <section>
          {cards.map((card) => {
            return (
              <Card
                key={card.id}
                card={card}
                handleChoice={handleChoice}
                flipped={
                  card === choiceOne || card === choiceTwo || card.matched
                }
              />
            );
          })}
        </section>
      </div>
    </div>
  );
};

export default App;
