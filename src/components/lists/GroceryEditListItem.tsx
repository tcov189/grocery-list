import React, { useState } from 'react'
import { TrashIcon } from '@heroicons/react/outline'
import Button from '../../global/Button';
import { GroceryCategory, IGroceryListItem } from '../../types/IGroceryListItem';

interface ComponentProps {
    listCategories: string[],
    listId: number,
    listItem: IGroceryListItem,
    updateHandler: (updatedListId: number, item: IGroceryListItem) => void,
    deleteHandler: (listItemId: number) => void,
}

function GroceryEditListItem({ listCategories, listId, listItem, deleteHandler, updateHandler }: ComponentProps) {
    const [item, setItem] = useState(listItem.item ?? "");
    const [category, setCategory] = useState<GroceryCategory>(listItem.category ?? "Miscellaneous");

    function nameChangeHandler(itemName: string) {
        setItem(itemName);
        updateHandler(listId, { id: listItem.id, item: itemName, category, acquired: listItem.acquired });
    }

    function categoryChangeHandler(itemCategory: GroceryCategory) {
        setCategory(itemCategory);
        updateHandler(listId, { id: listItem.id, item, category: itemCategory, acquired: listItem.acquired })
    }

    return (
        <div className="flex flex-col mb-2 item-row">
            <div className="flex mb-2">
                <div className="w-full">
                    <label className="font-bold" htmlFor={`item_${listItem.id}`}>Item: </label>
                    <input
                        id={`item_${listItem.id}`}
                        defaultValue={item}
                        onChange={(e) => nameChangeHandler(e.target.value)}
                        className="border border-gray-400 p-1 mt-1 rounded-sm w-full"
                        type="text"
                    />
                </div>
            </div>

            <div className="flex justify-between space-x-2">
                <div className="text-sm">
                    <select
                        name={`category_${listItem.id}`}
                        id={`category_${listItem.id}`}
                        className="border bg-gray-100 border-gray-400 p-1 mt-1 rounded-sm"
                        onChange={(e) => categoryChangeHandler(e.target.value as GroceryCategory)}
                        value={category}
                    >
                        {listCategories.map((listCategory, index) => (
                            <option key={`${listCategory}_${index}`} value={listCategory}>{listCategory}</option>
                        ))}
                    </select>
                </div>
                <Button type="error" clickHandler={() => deleteHandler(listItem.id)}>
                    <TrashIcon className="w-5" />
                </Button>
            </div>
        </div>
    )
}

export default GroceryEditListItem
