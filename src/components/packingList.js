import { keyboard } from "@testing-library/user-event/dist/keyboard";
import Item from "./Item";

export default function PackingList({ items, handleDelete }) {


  return (
    <div className="list">
      <ul>
        {items.map((item) => (
          <Item key={item.id} item={item}  id={item.id} handleDelete={handleDelete}  />
        ))}
      </ul>
    </div>
  );
}
