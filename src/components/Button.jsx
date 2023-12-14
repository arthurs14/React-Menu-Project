import PropTypes from "prop-types";

const Button = ({ text, menuByCategory }) => {
  return (
    <button type="button" className="btn" onClick={() => menuByCategory(text)}>
      {text}
    </button>
  );
};

Button.propType = {
  text: PropTypes.string,
  menuByCategory: PropTypes.func,
};

export default Button;
