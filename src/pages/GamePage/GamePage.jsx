import React from 'react';
import PropTypes from 'prop-types';

import { PlayerCards } from '../../components';

const GamePage = ({ player }) => (
  <div>
    <PlayerCards cards={player.cards} />
  </div>
);

GamePage.propTypes = {
  player: PropTypes
    .shape({
      cards: PropTypes
        .arrayOf(
          PropTypes
            .shape({
              shape: PropTypes.string.isRequired,
              number: PropTypes.number.isRequired,
            }),
        ).isRequired,
    })
    .isRequired,
};

export default GamePage;
