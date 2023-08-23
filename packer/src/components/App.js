import { useState } from "react";
import Logo from "./logo.js";
import Form from "./form.js";
import PackingList from "./packingList.js";
import Stats from "./stats.js";

export default function App() {
  const [items, setItems] = useState([]);

  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }

  function handleDeleteItems(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function handleClearList() {
    const confirmed = window.confirm("Do you want to clear your entire list");
    if (confirmed) {
      setItems((items) => []);
    }
  }

  const noOfItems = items.length;
  const noOfItemsPacked = items.filter((item) => item.packed).length;
  const precentage = noOfItemsPacked / noOfItems;

  return (
    <div>
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList
        items={items}
        onDeleteItem={handleDeleteItems}
        onToggleItem={handleToggleItem}
        handleClearList={handleClearList}
      />
      <Stats
        onNoOfItems={noOfItems}
        percentage={precentage}
        noOfItemsPacked={noOfItemsPacked}
      />
    </div>
  );
}
