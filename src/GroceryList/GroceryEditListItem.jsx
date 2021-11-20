import React, { useState } from 'react'
import { TrashIcon, SaveIcon } from '@heroicons/react/outline'


import Button from '../global/Button';

function GroceryEditListItem({ listItem, deleteHandler }) {
    const [quantity, setQuantity] = useState(listItem.quantity ?? 0);
    const [item, setItem] = useState(listItem.item ?? "");

    return (
        <div className="flex items-end space-x-2 mb-2">
            <div className="w-1/6 mr-2">
                <label htmlFor={`quantity_${listItem.id}`}>Quantity: </label>
                <input
                    id={`quantity_${listItem.id}`}
                    defaultValue={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                    className="border border-gray-400 p-1 mt-1 rounded-sm w-full"
                    type="number"
                />
            </div>
            <div className="w-5/6">
                <label htmlFor="item">Item: </label>
                <input
                    id="item"
                    defaultValue={item}
                    onChange={(e) => setItem(e.target.value)}
                    className="border border-gray-400 p-1 mt-1 rounded-sm w-full"
                    type="text"
                />
            </div>
            <div className="w-2/6 flex justify-between">
                <Button type="primary" clickHandler={() => deleteHandler(listItem.id)}>
                    <SaveIcon className="w-5" />
                </Button>

                <Button type="error" clickHandler={() => deleteHandler(listItem.id)}>
                    <TrashIcon className="w-5" />
                </Button>
            </div>
        </div>
    )
}

export default GroceryEditListItem
