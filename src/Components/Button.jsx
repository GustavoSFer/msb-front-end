import React from 'react';
import PropTypes from 'prop-types';
import '../Style/Button.css';

function Button({ children, disable, onClick }) {
  return (
    <button
      type="button"
      className="btn btn-primary mt-3 width-max"
      disabled={disable}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

Button.defaultProps = { disable: false, onClick: () => {} };
Button.propTypes = {
  children: PropTypes.node.isRequired,
  disable: PropTypes.bool,
  onClick: PropTypes.func,
};

export default Button;
