import React from 'react';

import { Card } from './components';

const cards = ['circle', 'triangle', 'cross', 'square', 'star', 'whot'];

function App() {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        height: '100vh',
      }}
    >
      {
        cards
          .map((card) => <Card shape={card} number={4} />)
      }
    </div>
  );
}

export default App;
