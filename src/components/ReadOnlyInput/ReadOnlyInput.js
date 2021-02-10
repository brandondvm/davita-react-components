import React from 'react';
import PropTypes from 'prop-types';

const ReadOnlyInput = ({ value, label, header, name }) => (
  <>
    { header && (
      <div className="ready-only-input_header">
        <i className={`di ${ header.className }`} />
        <p className="ready-only-input_header_text">{ header.text }</p>
      </div>
    )}
    <div className="ready-only-input">
      {label && <label>{label}</label>}
      <input
        type="text"
        name={name}
        value={value}
        readOnly
      />
    </div>
  </>
);

ReadOnlyInput.propTypes = {
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.bool,
  ]),
  label: PropTypes.string,
  header: PropTypes.object,
};

export default ReadOnlyInput;
