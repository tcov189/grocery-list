import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import useGetLists from '../hooks/useGetLists';
import { ChevronLeftIcon, PlusSmIcon } from '@heroicons/react/outline'
import GroceryEditListItem from './GroceryEditListItem';
import Button from '../global/Button';
import useUpdateList from '../hooks/useUpdateList';

function EditGroceryList() {
    const { id } = useParams();

    const savedLists = JSON.parse(localStorage.getItem('lists') ?? "[]");
    const [lists] = useGetLists(savedLists);

    const [currentList, setCurrentList] = useState(null);

    useEffect(() => {
        let activeList = lists.find((list) => list.id === parseInt(id));

        if (activeList.items.length == 0) {
            activeList.items.push({
                id: 1,
                quantity: 0,
                item: ""
            })
        }

        setCurrentList(activeList)

        return () => {
            setCurrentList({});
        }
    }, [id, lists]);

    if (!currentList) {
        return null;
    }

    function addNewItemHandler() {
        let currentListItems = currentList.items;

        let newItem = {
            id: currentListItems.length + 1,
            quantity: 0,
            item: ""
        }

        currentListItems.push(newItem);

        useUpdateList(id, { ...currentList, items: [...currentListItems] })

        setCurrentList({ ...currentList, items: currentListItems });
    }

    function deleteHandler(id) {
        let newListItems = currentList.items.filter((item) => item.id !== id);
        setCurrentList({ ...currentList, items: newListItems });
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
                {currentList.items.length === 0 && <p className="mt-5">No items yet.</p>}

                {currentList.items.map((listItem, index) => <GroceryEditListItem deleteHandler={deleteHandler} listItem={listItem} key={`list_item_${index}`} />)}

                <div className="flex mt-8 justify-end">
                    <Button type="success" clickHandler={addNewItemHandler}><PlusSmIcon className="w-5" /> Add Item</Button>
                </div>
            </div>
        </div>
    )
}

export default EditGroceryList
