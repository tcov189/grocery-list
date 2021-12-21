import React, { useCallback, useEffect, useRef, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

import { ChevronLeftIcon } from "@heroicons/react/outline";

import dataProvider from "../data/dataProvider";
import ShopGroceryListItem from "../components/lists/ShopGroceryListItem";
import categoryDataProvider from "../data/categoryDataProvider";
import { IGroceryListItem } from "../types/IGroceryListItem";
import { IGroceryList } from "../types/GroceryList";

function ShopGroceryList() {
  const { id } = useParams<{ id: string }>();
  const listId = parseInt(id);

  const [currentList, setCurrentList] = useState(dataProvider.getList(listId));
  const [listItems, setListItems] = useState<
    { category: string; items: IGroceryListItem[] }[]
  >([]);

  const allCategories = useRef(categoryDataProvider.getCategories());

  const [visibleCategory, setVisibleCategory] = useState("all");

  const formatGroceryListItems = useCallback((list: IGroceryList) => {
    return allCategories.current.map((category) => ({
      category,
      items: list.items.filter((item) => item.category === category),
    }));
  }, [allCategories]);

  useEffect(() => {
    if (currentList) {
      const formattedList = formatGroceryListItems(currentList);
      setListItems(formattedList);
    }
  }, [currentList, formatGroceryListItems]);

  function updateHandler(updateListId: number, item: IGroceryListItem) {
    const updatedList = dataProvider.updateListItem(updateListId, item);

    setCurrentList(updatedList);

    const formattedList = formatGroceryListItems(updatedList);
    setListItems(formattedList);
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
      <div className="flex mt-4">
        <label className="pr-2 font-bold" htmlFor="categories">
          Filter:
        </label>
        <select
          className="bg-gray-200 shadow-sm py-1 pl-1"
          name="categories"
          id="categories"
          value={visibleCategory}
          onChange={(e) => setVisibleCategory(e.target.value)}
        >
          <option value="all">All</option>
          {allCategories.current.map((cat, index) => (
            <option value={cat} key={`category_${index}`}>
              {cat}
            </option>
          ))}
        </select>
      </div>
      <div className="flex flex-col mb-12 item-list">
        {listItems.length === 0 && <p className="mt-5">No items yet.</p>}

        {listItems.map((listItem, index) => {
          return (
            listItem.items.length > 0 && (
              <div
                className={`pb-6 ${
                  listItem.category === visibleCategory ||
                  visibleCategory === "all"
                    ? "flex flex-col"
                    : "hidden"
                }`}
                key={`list_category_${index}`}
              >
                <p className="font-bold text-right">{listItem.category}</p>
                <hr className="border-gray-400 mb-2" />
                {listItem.items.map((item, index_2) => (
                  <ShopGroceryListItem
                    listId={id}
                    updateHandler={updateHandler}
                    listItem={item}
                    key={`list_item_${index_2}`}
                  />
                ))}
              </div>
            )
          );
        })}
      </div>
    </div>
  );
}

export default ShopGroceryList;
