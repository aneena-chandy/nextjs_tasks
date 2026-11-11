import { useState } from "react";

function DynamicList() {
    const [items, setItems] = useState([
        { id: 1, name: "Learn React" },
        { id: 2, name: "Practice JavaScript" },
        { id: 3, name: "Build Projects" }
    ]);

    const [newItem, setNewItem] = useState("");

    const addItem = () => {
        if (!newItem.trim()) return;

        const item = {
            id: crypto.randomUUID(), //Generates unique IDs
            name: newItem.trim()
        };

        setItems((previousItems) => [...previousItems, item]);
        setNewItem("");
    };

    const deleteItem = (id) => {
        setItems((previousItems) =>
            previousItems.filter((item) => item.id !== id)
        );
    };

    return (
        <div>
            <h3>My Learning List</h3>

            <input
                value={newItem}
                onChange={(e) => setNewItem(e.target.value)}
                placeholder="Enter a new item"
            />

            <button onClick={addItem}>Add Item</button>

            {items.map((item) => (
                <div key={item.id}>
                    <span>{item.name}</span>

                    <button onClick={() => deleteItem(item.id)}>
                        Delete
                    </button>
                </div>
            ))}

            {items.length === 0 && <p>No items available.</p>}
        </div>
    );
}

export default DynamicList;