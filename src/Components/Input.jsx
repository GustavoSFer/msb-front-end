import React from 'react';
import PropTypes from 'prop-types';

function Input({
  type,
  name,
  onChange,
  placeholder,
  value,
}) {
  return (
    <label htmlFor={name} className="form-label">
      {name}
      <input
        type={type}
        value={value}
        name={name}
        id={name}
        className="form-control"
        placeholder={placeholder}
        onChange={onChange}
      />
    </label>
  );
}

Input.defaultProps = { onChange: () => {} };
Input.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

export default Input;
