"use client"

import { useState } from "react"
import "./item-list.css"
import NewItemComponent from "./server-side"

export default function ItemList() {
    const [newItem, setNewItem] = useState([]);

    return (
        <div className="item-list">
            <h3>Öğe Listesi</h3>

            <div className="items">
                {newItem.map(x =>
                    <div className="new-it">
                        {x}
                    </div>
                )}
            </div>

            <button type="button" className="add" onClick={() => setNewItem([...newItem, NewItemComponent()])}>+ Add New Item</button>
        </div>
    )
}