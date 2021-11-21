import React, { useState } from 'react'
import { TrashIcon } from '@heroicons/react/outline'


import Button from '../global/Button';

function GroceryEditListItem({ listId, listItem, deleteHandler, updateHandler }) {
    const [quantity, setQuantity] = useState(listItem.quantity ?? 1);
    const [item, setItem] = useState(listItem.item ?? "");

    function onChangeHandler(itemName) {
        setItem(itemName);
        updateHandler(listId, { id: listItem.id, item: itemName, quantity })
    }

    return (
        <div className="flex flex-col items-end space-x-2 mb-2 item-row">
            <div className="flex mb-2">
                <div className="w-1/12 mr-2">
                    <label htmlFor={`quantity_${listItem.id}`}>Qty: </label>
                    <input
                        id={`quantity_${listItem.id}`}
                        defaultValue={quantity}
                        onChange={(e) => setQuantity(e.target.value)}
                        className="border border-gray-400 p-1 mt-1 rounded-sm w-full"
                        type="number"
                    />
                </div>
                <div className="w-11/12">
                    <label htmlFor={`item_${listItem.id}`}>Item: </label>
                    <input
                        id={`item_${listItem.id}`}
                        defaultValue={item}
                        onChange={(e) => onChangeHandler(e.target.value)}
                        className="border border-gray-400 p-1 mt-1 rounded-sm w-full"
                        type="text"
                    />
                </div>
            </div>

            <div className="flex justify-between space-x-2">
                <Button type="error" clickHandler={() => deleteHandler(listItem.id)}>
                    <TrashIcon className="w-5" />
                </Button>
            </div>
        </div>
    )
}

export default GroceryEditListItem
