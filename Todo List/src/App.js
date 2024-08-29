import './App.css';
import React, { useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

export default function App() {
  const [input, setInput] = useState("");
  const [items, setItems] = useState([]);

  const handleAddClick = (newItem) => {
    setItems([...items, newItem]);
    setInput(""); // Clear input after adding item
  };

  const handleDelete = (key) => {
    setItems(items.filter(item => item.key !== key));
  };

  const handleToggle = (key) => {
    setItems(items.map(item =>
      item.key === key ? { ...item, completed: !item.completed } : item
    ));
  };

  return (
    <>
      <TodoForm input={input} setInput={setInput} onAddClick={handleAddClick} />
      <TodoList items={items} onDelete={handleDelete} onToggle={handleToggle} />
    </>
  );
}