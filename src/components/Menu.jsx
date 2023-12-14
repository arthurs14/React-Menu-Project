import PropTypes from "prop-types";
import MenuItem from "./MenuItem";

const Menu = ({ items }) => {
  return (
    <section>
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
};

export default Menu;
