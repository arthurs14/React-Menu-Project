import PropTypes from "prop-types";

const MenuItem = ({ item }) => {
  const { img, title, price, desc } = item;
  return (
    <article className="menu-item">
      <img src={img} alt={title} className="img" />
      <div className="item-info">
        <header>
          <h5>{title}</h5>
          <span className="item-price">${price}</span>
        </header>
        <div className="item-text">{desc}</div>
      </div>
    </article>
  );
};

MenuItem.propType = {
  item: PropTypes.object,
};

export default MenuItem;
