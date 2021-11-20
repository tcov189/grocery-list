import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

import { ChevronLeftIcon, PlusSmIcon } from '@heroicons/react/outline'
import GroceryEditListItem from './GroceryEditListItem';
import Button from '../global/Button';
import dataProvider from '../data/dataProvider';

function EditGroceryList() {
    const { id } = useParams();

    const [currentList, setCurrentList] = useState(dataProvider.getList(id));
    const [listItems, setListItems] = useState([]);

    useEffect(() => {
        if (currentList) {
            setListItems([...currentList.items])
        }
    }, [currentList]);


    if (!currentList) {
        return null;
    }

    function addNewItemHandler() {
        const updatedList = dataProvider.addNewListItem(id);

        setCurrentList(updatedList);
        setListItems(updatedList.items);
    }

    function deleteHandler(itemId) {
        const updatedList = dataProvider.removeListItem(id, itemId);

        setCurrentList(updatedList);
        setListItems(updatedList.items);
    }

    return (
        <div>
            <div className="flex items-center">
                <div className="flex-1">
                    <Link to="/">
                        <ChevronLeftIcon className="w-6" />
                    </Link>
                </div>
                <p className="font-bold text-xl flex-1">{currentList.name}</p>
            </div>

            <div className="flex flex-col mt-5">
                {listItems.length === 0 && <p className="mt-5">No items yet.</p>}

                {listItems.map((listItem, index) => <GroceryEditListItem deleteHandler={deleteHandler} listItem={listItem} key={`list_item_${index}`} />)}

                <div className="flex mt-8 justify-end">
                    <Button type="success" clickHandler={addNewItemHandler}><PlusSmIcon className="w-5" /> Add Item</Button>
                </div>
            </div>
        </div>
    )
}

export default EditGroceryList
