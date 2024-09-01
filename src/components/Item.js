import {useState} from 'react'
export default function Item({ item, handleDelete, id, handleToggle}) {


  return (
    <li >
      <input type="checkbox"  onChange={() =>handleToggle(item.id)}></input>
   <span style={item.packed ? { textDecoration: "line-through" } : {}} > {`${item.quantity}  ${item.description}`}  </span>

      <button style={{ color: "red", fontSize: "1.5em"}} onClick={()=>handleDelete(id)}>&times;</button>
    </li>
  );
}
