import { useState } from "react";
import Form from "./components/Form";
import Logo from "./components/Logo";
import PackingList from "./components/packingList";
import Status from "./components/Status";

function App() {
  const [items, setItems] = useState([]);

  function handleAddItem(newItem) {
    setItems((items) => [...items, newItem]);
  }

  function handleDelete(id) {
    const updatedItems = items.filter((item) => id !== item.id);
    setItems([...updatedItems]);
  }

  function handleToggle(id) {
    setItems((oldItems) =>
      oldItems.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  return (
    <div className="app">
      <Logo />
      <Form handleAddItem={handleAddItem} />
      <PackingList
        items={items}
        handleDelete={handleDelete}
        handleToggle={handleToggle}
      />
      <Status items={items} />
    </div>
  );
}

export default App;
