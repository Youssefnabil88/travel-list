export default function Status({ items }) {
  if (!items.length) {
    return (
      <footer className="stats">
        <em> Start adding some items to your packing list 🚀 </em>
      </footer>
    );
  }
  const numOfItems = items.length;

  const numOfCheckedItems = items.filter((item) => item.packed).length;

  const percentage = (numOfCheckedItems / numOfItems) * 100;

  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "You got everything! Ready to Go ✈️ "
          : `You have ${numOfItems} items there, and you packed  ${numOfCheckedItems} (${Math.round(
              percentage 
            )}) % of them`}
      </em>
    </footer>
  );
}
