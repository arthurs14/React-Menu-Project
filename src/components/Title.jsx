import PropTypes from "prop-types";

const Title = ({ text }) => {
  return (
    <header className="title">
      <h1>{text}</h1>
      <div className="title-underline"></div>
    </header>
  );
};

Title.propType = {
  text: PropTypes.string,
};

export default Title;
