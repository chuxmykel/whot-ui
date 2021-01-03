import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { PlayerCards, GameCard } from '../../components';

import './GamePage.scss';

const GamePage = ({ game, player }) => {
  const [selectedCard, setSelectedCard] = useState(null);

  function isValidMove(shape, number) {
    return selectedCard.shape === shape
      || selectedCard.number === number
      || selectedCard.shape === 'whot';
  }

  function handlePlay(shape, number) {
    if (!isValidMove(shape, number)) {
      // TODO: Implement
      alert('Invalid Move');
    }
  }

  function handleCardSelected(shape, number) {
    setSelectedCard({ shape, number });
  }

  return (
    <div className="game-page">
      <GameCard card={game.currentCard} onPlay={handlePlay} />
      <PlayerCards cards={player.cards} onCardSelected={handleCardSelected} />
    </div>
  );
};

GamePage.propTypes = {
  player: PropTypes.shape({
    cards: PropTypes.arrayOf(
      PropTypes.shape({
        shape: PropTypes.string.isRequired,
        number: PropTypes.number.isRequired,
      }),
    ).isRequired,
  }).isRequired,
  game: PropTypes.shape({
    currentCard: PropTypes.shape({
      shape: PropTypes.string.isRequired,
      number: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
};

export default GamePage;
