import { useState } from "react";
import menu from "./data";
import Title from "./components/Title";
import Menu from "./components/Menu";

const App = () => {
  const [menuItems, setMenuItems] = useState(menu);

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
        <Menu items={menuItems} menuByCategory={menuByCategory} />
      </section>
    </main>
  );
};
export default App;
