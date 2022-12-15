import React from "react";
import "../style/Button.css";
import PropTypes from "prop-types";
import "../App";

const Button = ({ variant, load, text, action }) => {
  return (
    <div>
      <button className={`btn btn-${variant}`} onClick={action}>
        {load ? "Loading..." : text}
      </button>
    </div>
  );
};
Button.propTypes = {
  text: PropTypes.string.isRequired,
  variant: PropTypes.string.isRequired,
  action: PropTypes.func.isRequired,
};
export default Button;
