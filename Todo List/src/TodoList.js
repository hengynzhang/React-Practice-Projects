import './App.css';
import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ items, onDelete, onToggle }) => {
  return (
    <div>
      <h3 className="header">To Do List</h3>
      <ul className="list">
        {items.map((item) => (
          <TodoItem
            key={item.key}
            item={item}
            onDelete={onDelete}
            onToggle={onToggle}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;