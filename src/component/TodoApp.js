import React, { useState } from "react";
import "./TodoApp.css";

import List from "./List";

function TodoApp() {
  const [input, setInput] = useState("");
  const [items, setItems] = useState([]);

  const handleChange = (event) => {
    setInput(event.target.value);
  };

  const storeItems = (newItems) => {
    console.log(newItems);
    setItems([...newItems]);
  };
  const _storeItems = (event) => {
    event.preventDefault();
    setItems([...items, input]);
    setInput("");
  };

  return (
    <div className="todo-container">
      <form className="input-section" onSubmit={_storeItems}>
        <h1>Todo App</h1>
        <input
          type="text"
          value={input}
          onChange={handleChange}
          placeholder="Enter items..."
        ></input>
      </form>
      <ul>
        {items.map((data, index) => (
          <List data={data} index={index} item={items} storeItem={storeItems} />
        ))}
      </ul>
    </div>
  );
}
export default TodoApp;
