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
    number: 8,
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
];

const player = { cards };

const App = () => (
  <GamePage
    player={player}
  />
);

export default App;
