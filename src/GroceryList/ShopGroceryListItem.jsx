import { ShoppingBagIcon } from '@heroicons/react/outline'
import React, { useState } from 'react'
import Button from '../global/Button'

function ShopGroceryListItem({listId, listItem, updateHandler }) {
    const [item, setItem] = useState(listItem ?? "");

    const [acquired, setAcquired] = useState(item.acquired ?? false);

    function onChangeHandler() {
        const acquiredStatus = !acquired;
        setAcquired(acquiredStatus);
        setItem({...item, acquired: acquiredStatus});
        updateHandler(listId, { id: listItem.id, acquired: acquiredStatus })
    }

    return (
        <div className="flex items-center space-x-3 mb-4" style={{ textDecoration: acquired ? 'line-through' : null }}>
            <Button type="primary" clickHandler={() => onChangeHandler()}>
                <ShoppingBagIcon className="w-4" />
            </Button>
            <p>{item.quantity} {item.item}</p>
        </div>
    )
}

export default ShopGroceryListItem
