export default function Item({ item, handleDelete, id }) {


  return (
    <li >
      <input type="checkbox"></input>
      <span style={item.packed ? { textDecoration: "line-through" } : {}}> {`${item.quantity}  ${item.description}`} </span>

      <button style={{ color: "red", fontSize: "1.5em"}} onClick={()=>handleDelete(id)}>&times;</button>
    </li>
  );
}
