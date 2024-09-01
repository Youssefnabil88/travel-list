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

  return (
    <div className="app">
      <Logo />
      <Form handleAddItem={handleAddItem} />
      <PackingList items={items} handleDelete={handleDelete} />
      <Status />
    </div>
  );
}

export default App;
