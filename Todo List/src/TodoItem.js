import './App.css';
import React from "react";

const TodoItem = ({ item, onDelete, onToggle }) => {
  return (
    <li>
      <label>
        <input
          type="checkbox"
          checked={item.completed}
          onChange={() => onToggle(item.key)}
        />
      </label>
      {item.text}
      <button className="btn btn-danger" onClick={() => onDelete(item.key)}>
        Delete
      </button>
    </li>
  );
};

export default TodoItem;