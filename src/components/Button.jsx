import PropTypes from "prop-types";

const Button = ({ text }) => {
  return (
    <button type="button" className="btn">
      {text}
    </button>
  );
};

Button.propType = {
  text: PropTypes.string,
};

export default Button;
