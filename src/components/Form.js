import { useState } from "react";

export default function Form({handleAddItem}) {
    const [description, setDescription] = useState("");
    const [quantity, setQuantity] = useState(1);


    function handelSubmit(e){
      e.preventDefault();
      if(description ==="") return;
        const newItem = {description, quantity, id:Date.now(), packed : false};
        handleAddItem(newItem);
        setDescription('');
        setQuantity(1); 
    }

  return (
    <form className="add-form" onSubmit={handelSubmit}>
      <h3> What do you need for your 🤩 trip?</h3>
      <select onChange={(e) => setQuantity(Number(e.target.value))} value={quantity}>
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input type="text" onChange={(e) => setDescription(e.target.value) } value={description}></input>
      <button ty>ADD</button>
    </form>
  );
}
