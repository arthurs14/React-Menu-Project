import PropTypes from "prop-types";
import Button from "./Button";

const Categories = ({ categories, menuByCategory }) => {
  return (
    <div className="btn-container">
      {categories.map((category) => (
        <Button
          key={category}
          text={category}
          menuByCategory={menuByCategory}
        />
      ))}
    </div>
  );
};

Categories.propType = {
  categories: PropTypes.array,
  menuByCategory: PropTypes.func,
};

export default Categories;
