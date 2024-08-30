import Item from "./Item";

export default function PackingList({ items }) {
  return (
    <div className="list">
      <ul>
        {items.map((item) => (
          <Item key={item.id} itemName={item.description} />
        ))}
      </ul>
    </div>
  );
}
