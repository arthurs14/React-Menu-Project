import PropTypes from "prop-types";
import Button from "./Button";
import MenuItem from "./MenuItem";

const Menu = ({ items }) => {
  return (
    <section>
      <div className="btn-container">
        <Button text="All" />
        <Button text="Breakfast" />
        <Button text="Lunch" />
        <Button text="Shakes" />
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
  items: PropTypes,
};

export default Menu;
