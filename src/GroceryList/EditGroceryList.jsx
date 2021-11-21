import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

import { ChevronLeftIcon, PlusSmIcon, ArrowCircleUpIcon } from '@heroicons/react/outline'
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

    useEffect(() => {
        if (listItems.length) {
            const lastItemRow = document.querySelector('.item-row:last-child');
            lastItemRow.scrollIntoView({ behavior: "smooth" });
        }
    }, [listItems]);

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

    function backToTop() {
        document.body.scrollIntoView({ behavior: "smooth" })
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

            <div className="flex flex-col mt-5 mb-12 item-list">
                {listItems.length === 0 && <p className="mt-5">No items yet.</p>}

                {listItems.map((listItem, index) => <GroceryEditListItem deleteHandler={deleteHandler} listItem={listItem} key={`list_item_${index}`} />)}

            </div>
            <div className="flex mt-8 justify-between fixed bottom-2 right-2 left-2">
                <Button type="primary" clickHandler={backToTop}><ArrowCircleUpIcon className="w-5" /></Button>
                <Button type="success" clickHandler={addNewItemHandler}><PlusSmIcon className="w-5" /> Add Item</Button>
            </div>
        </div>
    )
}

export default EditGroceryList
