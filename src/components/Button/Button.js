import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ disabled, size, label, fill, type='button', onClick }) => (
  <button
    onClick={ onClick }
    className={ `btn ${fill} ${size}` }
    disabled={ !!disabled }
    type={ type }
  >
    { label }
  </button>
);

Button.propTypes = {
  disabled: PropTypes.bool,
  size: PropTypes.string,
  label: PropTypes.string,
  fill: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;
