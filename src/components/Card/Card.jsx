import React from 'react';
import PropTypes from 'prop-types';

import circle from '../../assets/images/circle.svg';
import cross from '../../assets/images/cross.svg';
import square from '../../assets/images/square.svg';
import star from '../../assets/images/star.svg';
import triangle from '../../assets/images/triangle.svg';
import whot from '../../assets/images/whot.svg';

import './Card.scss';

const Card = ({ shape, number, onClick }) => {
  const shapes = {
    circle,
    triangle,
    cross,
    square,
    star,
    whot,
  };

  const isStar = shape === 'star';
  const isOneDigit = (number * 2) < 10;
  const starStyle = {
    display: isStar ? 'block' : 'none',
    padding: '10px',
    fontSize: '14px',
    color: 'white',
    backgroundColor: '#ffffff00',
  };
  const starSmallNumberXOffset = isOneDigit ? '1' : '2.5';
  const starSmallNumberStyleTop = {
    transform: isStar
      ? `translate(${isOneDigit ? '' : '-'}${starSmallNumberXOffset}px, 36px)`
      : '',
  };
  const starSmallNumberStyleBottom = {
    transform: isStar
      ? `translate(${isOneDigit ? '-' : ''}${starSmallNumberXOffset}px, -39.5px) rotate(180deg)`
      : '',
  };
  const starNumberStyleTop = {
    transform: isStar ? 'translate(0, 36px)' : '',
  };
  const starNumberStyleBottom = {
    transform: isStar
      ? 'translate(0, -35px) rotate(180deg)'
      : 'rotate(180deg)',
  };

  return (
    <div
      className="card"
      role="button"
      tabIndex={0}
      onClick={onClick.bind(null, shape, number)}
      onKeyDown={onClick.bind(null, shape, number)}
    >
      <div className="top-num" style={starNumberStyleTop}>
        {number}
      </div>

      <div
        style={{
          ...starStyle,
          ...starSmallNumberStyleTop,
        }}
      >
        {number * 2}
      </div>

      <div className="shape">
        <img src={shapes[shape]} alt={`${shape}-${number} card`} />
      </div>

      <div
        style={{
          ...starStyle,
          ...starSmallNumberStyleBottom,
        }}
      >
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
  onClick: PropTypes.func.isRequired,
};

export default Card;
