import { keyboard } from "@testing-library/user-event/dist/keyboard";
import Item from "./Item";
import { useState } from "react";

export default function PackingList({ items, handleDelete, handleToggle, handleClear}) {
const [sortBy, setSortBy] = useState('input');

let sortedItems;
if(sortBy === "input") sortedItems = items;
else if(sortBy === "name"){
  sortedItems = items.slice().sort((a,b) => a.description.localeCompare(b.description) )
}
else if(sortBy === "packed") {
  sortedItems = items.slice().sort((a,b ) => Number(a.packed) - Number(b.packed))
}
  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          <Item key={item.id} item={item}  id={item.id} handleDelete={handleDelete} handleToggle={handleToggle} />
        ))}
      </ul>

      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">select by input</option>
          <option value="name">select by name</option>
          <option value="packed">select by packed</option>
        </select>
        <button onClick={handleClear}>Clear</button>
      </div>
    </div>
  );
}
