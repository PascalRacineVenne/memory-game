import React, { useState } from 'react';
import Card from './components/Card.js';
import cardData from './data/card-data.json';
import Navbar from './components/Navbar.js';

const App = () => {
  const [playersLivesCount, setPlayersLivesCount] = useState(6);

  function random() {
    return Math.random() - 0.5;
  }
  const randomCards = cardData.sort(() => random());

  return (
    <div className='container'>
      {/* <Navbar />
      <header>
        <h1>
          Lives: <span className='playerLivesCount'>{playersLivesCount}</span>
        </h1>
      </header> */}
      <div className='game'>
        <section>
          {randomCards.map((card, index) => {
            return <Card key={index} card={card} />;
          })}
        </section>
      </div>
    </div>
  );
};

export default App;
