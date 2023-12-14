import { useState } from "react";
import menu from "./data";
import Title from "./components/Title";
import Menu from "./components/Menu";
import Categories from "./components/Categories";

const allCategories = ["all", ...new Set(menu.map((item) => item.category))];

const App = () => {
  const [menuItems, setMenuItems] = useState(menu);
  const [categories, setCategories] = useState(allCategories);

  const menuByCategory = (category) => {
    const items = new Set();

    if (category !== "all") {
      menu.forEach((item) => item.category === category && items.add(item));
      setMenuItems([...items]);
    } else {
      setMenuItems(menu);
    }
  };

  return (
    <main>
      <section className="menu">
        <Title text="Our Menu" />
        <Categories categories={categories} menuByCategory={menuByCategory} />
        <Menu items={menuItems} />
      </section>
    </main>
  );
};
export default App;
