import React from 'react';
import PropTypes from 'prop-types';

function Input({
  type,
  name,
  onChange,
  placeholder,
  className,
  value,
}) {
  return (
    <label htmlFor={name} className="text-start">
      {name}
      <input
        type={type}
        value={value}
        name={name}
        id={name}
        className={`form-control text-start ${className}`}
        placeholder={placeholder}
        onChange={onChange}
      />
    </label>
  );
}

Input.defaultProps = { onChange: () => {}, className: '' };
Input.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  placeholder: PropTypes.string.isRequired,
  className: PropTypes.string,
  value: PropTypes.string.isRequired,
};

export default Input;
