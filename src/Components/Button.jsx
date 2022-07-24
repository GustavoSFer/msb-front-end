import React from 'react';
import PropTypes from 'prop-types';
import '../Style/Button.css';

function Button({ children, disable, onClick }) {
  return (
    <button
      type="submit"
      className="btn btn-color mt-3 width-max"
      data-testid="button"
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
