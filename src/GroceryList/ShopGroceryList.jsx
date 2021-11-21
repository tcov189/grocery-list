import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

import { ChevronLeftIcon } from '@heroicons/react/outline'

import dataProvider from '../data/dataProvider';
import ShopGroceryListItem from './ShopGroceryListItem';

function ShopGroceryList() {
    const { id } = useParams();

    const [currentList, setCurrentList] = useState(dataProvider.getList(id));
    const [listItems, setListItems] = useState([]);

    useEffect(() => {
        if (currentList) {
            setListItems([...currentList.items])
        }
    }, [currentList]);

    function updateHandler(listId, item) {
        const updatedList = dataProvider.updateListItem(listId, item);

        setCurrentList(updatedList);
        setListItems(updatedList.items);
    }

    return (
        <div>
            <div className="flex items-center">
                <div className="w-1/6">
                    <Link to="/">
                        <ChevronLeftIcon className="w-6" />
                    </Link>
                </div>
                <p className="font-bold text-xl w-5/6">Shopping {currentList.name}</p>
            </div>
            <div className="flex flex-col mt-5 mb-12 item-list">
                {listItems.length === 0 && <p className="mt-5">No items yet.</p>}

                {listItems.map((listItem, index) => <ShopGroceryListItem listId={id} updateHandler={updateHandler} listItem={listItem} key={`list_item_${index}`} />)}

            </div>
        </div>
    )
}

export default ShopGroceryList
