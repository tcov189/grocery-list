import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

import { ChevronLeftIcon, PlusSmIcon, ArrowCircleUpIcon } from '@heroicons/react/outline'
import GroceryEditListItem from '../components/lists/GroceryEditListItem';
import Button from '../global/Button';
import dataProvider from '../data/dataProvider';
import categoryDataProvider from '../data/categoryDataProvider';

import { IGroceryListItem } from '../types/IGroceryListItem';

function EditGroceryListView() {
    const { id } = useParams<{ id: string }>();
    const listId = parseInt(id);

    const [currentList, setCurrentList] = useState(dataProvider.getList(listId));
    const [listItems, setListItems] = useState<IGroceryListItem[]>([]);
    const [listCategories] = useState(categoryDataProvider.getCategories());

    useEffect(() => {
        if (currentList) {
            setListItems([...currentList.items])
        }
    }, [currentList]);

    useEffect(() => {
        if (listItems.length > 1) {
            const lastItemRow = document.querySelector('.item-row:last-child');

            if (lastItemRow) {
                lastItemRow.scrollIntoView({ behavior: "smooth" });
            }
        }
    }, [listItems]);

    if (!currentList) {
        return null;
    }


    function addNewItemHandler() {
        const updatedList = dataProvider.addNewListItem(listId);

        setCurrentList(updatedList);
        setListItems(updatedList.items);
    }

    function deleteHandler(itemId: number) {
        const updatedList = dataProvider.removeListItem(listId, itemId);

        setCurrentList(updatedList);
        setListItems(updatedList.items);
    }

    function updateHandler(updatedListId: number, item: IGroceryListItem) {
        const updatedList = dataProvider.updateListItem(updatedListId, item);

        setCurrentList(updatedList);
        setListItems(updatedList.items);
    }

    function backToTop() {
        document.body.scrollIntoView({ behavior: "smooth" })
    }

    return (
      <div>
        <div className="flex items-center">
          <div className="w-1/6">
            <Link to="/">
              <ChevronLeftIcon className="w-6" />
            </Link>
          </div>
          <p className="font-bold text-xl flex-1">{currentList.name}</p>
        </div>

        <div className="flex flex-col mt-5 mb-12 item-list">
          {listItems.length === 0 && <p className="mt-5">No items yet.</p>}

          {listItems.map((listItem, index) => (
            <GroceryEditListItem
              listCategories={listCategories}
              listId={listId}
              updateHandler={updateHandler}
              deleteHandler={deleteHandler}
              listItem={listItem}
              key={`list_item_${index}`}
            />
          ))}
        </div>
        <div className="flex mt-8 justify-between fixed bottom-2 right-2 left-2">
          <Button type="primary" clickHandler={backToTop}>
            <ArrowCircleUpIcon className="w-5" />
          </Button>
          <Button type="success" clickHandler={addNewItemHandler}>
            <PlusSmIcon className="w-5" /> Add Item
          </Button>
        </div>
      </div>
    );
}

export default EditGroceryListView
