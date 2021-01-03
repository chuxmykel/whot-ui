import React from 'react';
import PropTypes from 'prop-types';

import Card from '../Card/Card';

import './PlayerCards.scss';

const PlayerCards = ({ cards, onCardSelected }) => (
  <div className="card-rack">
    {cards.map((card) => (
      <Card
        shape={card.shape}
        number={card.number}
        onClick={onCardSelected}
        key={`${card.shape}-${card.number}`}
      />
    ))}
  </div>
);

PlayerCards.propTypes = {
  cards: PropTypes
    .arrayOf(
      PropTypes
        .shape({
          shape: PropTypes.oneOf([
            'circle',
            'triangle',
            'cross',
            'square',
            'star',
            'whot',
          ]).isRequired,
          number: PropTypes.number.isRequired,
        }),
    ).isRequired,
  onCardSelected: PropTypes.func,
};

PlayerCards.defaultProps = {
  onCardSelected: () => {},
};

export default PlayerCards;
