import React, { useState, useEffect } from 'react';
import Button from './components/button.js';
import Card from './components/Card.js';
import Navbar from './components/Navbar.js';
import Modal from './components/modal.js';

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
  const [show, setShow] = useState(false);

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

  const resetTurn = () => {
    setChoiceOne(null);
    setChoiceTwo(null);
    setTurns((prevTurns) => prevTurns + 1);
  };

  useEffect(() => {
    if (turns !== 0) {
      const result = cards.every((card) => {
        return card.matched === true;
      });
      setShow(result);
    }
  }, [cards, turns]);

  useEffect(() => {
    shuffleCards();
  }, []);

  return (
    <div className='container'>
      <Navbar />
      <header>
        <Button onClick={shuffleCards} text='New Game' />
        <div className='tries'>
          <p className='playerLivesCount'>{turns}</p>
        </div>
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
      <Modal title='CONGRATS !' show={show} onClose={() => setShow(false)}>
        <p>Amazing you did it in {turns} turns!</p>
      </Modal>
    </div>
  );
};

export default App;
