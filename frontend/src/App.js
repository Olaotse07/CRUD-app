import React, { useState } from "react";
import ItemForm from "./components/ItemForm";
import ItemList from "./components/ItemList";
import "./App.css";

function App() {
  const [items, setItems] = useState([]);

  const handleItemAdded = (newItem) => {
    setItems([...items, newItem]);
  };

  return (
    <div className="App">
      <div className="container">
        <h1>CRUD Application</h1>
        <ItemForm onItemAdded={handleItemAdded} />
        <ItemList items={items} />
      </div>
    </div>
  );
}

export default App;
