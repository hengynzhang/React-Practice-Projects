import './App.css';
import React from "react";

const TodoForm = ({ input, setInput, onAddClick }) => {
  const handleClick = (e) => {
    e.preventDefault();
    if (input.trim() === "") return;
    const newItem = {
      key: Date.now(),
      text: input,
      completed: false
    };
    onAddClick(newItem);
  };

  return (
    <form>
      <label htmlFor="inputBox">Create New Item</label>
      <input
        type="text"
        id="inputBox"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button className="btn" onClick={handleClick}>
        Add
      </button>
    </form>
  );
};

export default TodoForm;