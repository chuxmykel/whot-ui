import React from 'react';

import { GamePage } from './pages';

const cards = [
  {
    shape: 'circle',
    number: 4,
  },
  {
    shape: 'square',
    number: 14,
  },
  {
    shape: 'star',
    number: 4,
  },
  {
    shape: 'cross',
    number: 2,
  },
  {
    shape: 'triangle',
    number: 1,
  },
  {
    shape: 'whot',
    number: 20,
  },
  {
    shape: 'star',
    number: 2,
  },
  {
    shape: 'cross',
    number: 14,
  },
  {
    shape: 'triangle',
    number: 5,
  },
  {
    shape: 'whot',
    number: 20,
  },
];

const player = { cards };

const App = () => (
  <GamePage
    player={player}
    game={{
      currentCard: cards[Math.floor(Math.random() * cards.length)],
    }}
  />
);

export default App;
