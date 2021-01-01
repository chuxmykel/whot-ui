import React from 'react';
import PropTypes from 'prop-types';

import Card from '../Card/Card';

import './PlayerCards.scss';

const PlayerCards = ({ cards }) => {
  function handleClick(shape, number) {
    // TODO: Implement
    console.table({ shape, number });
  }

  return (
    <div className="card-rack">
      {cards.map((card) => (
        <Card
          shape={card.shape}
          number={card.number}
          onClick={handleClick}
          key={`${card.shape}-${card.number}`}
        />
      ))}
    </div>
  );
};

PlayerCards.propTypes = {
  cards: PropTypes
    .arrayOf(
      PropTypes
        .shape({
          shape: PropTypes.string.isRequired,
          number: PropTypes.number.isRequired,
        }),
    ).isRequired,
};

export default PlayerCards;
