import PropTypes from "prop-types";
import Button from "./Button";
import MenuItem from "./MenuItem";

const Menu = ({ items, menuByCategory }) => {
  return (
    <section>
      <div className="btn-container">
        <Button text="all" menuByCategory={menuByCategory} />
        <Button text="breakfast" menuByCategory={menuByCategory} />
        <Button text="lunch" menuByCategory={menuByCategory} />
        <Button text="shakes" menuByCategory={menuByCategory} />
      </div>
      <div className="section-center">
        {items.map((item) => (
          <MenuItem key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
};

Menu.propType = {
  items: PropTypes.array,
  menuByCategory: PropTypes.func,
};

export default Menu;
