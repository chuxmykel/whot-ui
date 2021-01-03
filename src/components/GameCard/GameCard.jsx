import React from 'react';
import PropTypes from 'prop-types';

import Card from '../Card/Card';

import './GameCard.scss';

const GameCard = ({ card, onPlay }) => (
  <div className="game-card">
    <Card
      shape={card.shape}
      number={card.number}
      onClick={onPlay}
    />
  </div>
);

GameCard.propTypes = {
  card: PropTypes.shape({
    shape: PropTypes.oneOf([
      'circle',
      'triangle',
      'cross',
      'square',
      'star',
      'whot',
    ]).isRequired,
    number: PropTypes.number.isRequired,
  }).isRequired,
  onPlay: PropTypes.func,
};

GameCard.defaultProps = {
  onPlay: () => { },
};

export default GameCard;
