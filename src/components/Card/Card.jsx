import React from 'react';
import PropTypes from 'prop-types';

import circle from '../../assets/images/circle.svg';
import cross from '../../assets/images/cross.svg';
import square from '../../assets/images/square.svg';
import star from '../../assets/images/star.svg';
import triangle from '../../assets/images/triangle.svg';
import whot from '../../assets/images/whot.svg';

import './Card.scss';

const shapes = {
  circle,
  triangle,
  cross,
  square,
  star,
  whot,
};

const Card = ({ shape, number }) => {
  const isStar = shape === 'star';
  const isOneDigit = (number * 2) < 10;

  const starStyle = {
    display: isStar ? 'block' : 'none',
    padding: '10px',
    fontSize: '14px',
    color: 'white',
  };

  const xOffset = isOneDigit ? '1' : '2.5';

  const starStyleTop = {
    transform: isStar ? `translate(${isOneDigit ? '' : '-'}${xOffset}px, 36px)` : '',
  };

  const starStyleBottom = {
    transform: isStar ? `translate(${isOneDigit ? '-' : ''}${xOffset}px, -35px) rotate(180deg)` : '',
  };

  const starNumberStyleTop = {
    transform: isStar ? 'translate(0, 36px)' : '',
  };

  const starNumberStyleBottom = {
    transform: isStar ? 'translate(0, -35px) rotate(180deg)' : 'rotate(180deg)',
  };

  return (
    <div className="card">
      <div className="top-num" style={starNumberStyleTop}>
        {number}
      </div>

      <div style={{ ...starStyle, ...starStyleTop }}>
        {number * 2}
      </div>

      <div className="shape">
        <img src={shapes[shape]} alt={`${shape}-${number} card`} />
      </div>

      <div style={{ ...starStyle, ...starStyleBottom }}>
        {number * 2}
      </div>

      <div className="bottom-num" style={starNumberStyleBottom}>{number}</div>
    </div>
  );
};

Card.propTypes = {
  shape: PropTypes.oneOf([
    'circle',
    'triangle',
    'cross',
    'square',
    'star',
    'whot',
  ]).isRequired,
  number: PropTypes.number.isRequired,
};

export default Card;
