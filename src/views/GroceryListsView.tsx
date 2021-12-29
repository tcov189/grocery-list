import React, { useState } from "react";

import GroceryList from "../components/lists/GroceryList";
import Button from "../global/Button";
import { PlusSmIcon, TrashIcon } from "@heroicons/react/outline";
import dataProvider from "../data/dataProvider";
import AddListModal from "../components/modals/AddListModal";
import BaseLayout from "./layouts/BaseLayout";

function GroceryListsView() {
  const [modalOpen, setModalOpen] = useState(false);

  const savedLists = dataProvider.getLists();

  const [lists, setLists] = useState(savedLists);

  function addListHandler(listName: string) {
    const updatedLists = dataProvider.addList(listName);

    setLists(updatedLists);
  }

  function removeList(listId: number) {
    const updatedLists = dataProvider.removeList(listId);

    setLists(updatedLists);
  }

  function clearLists() {
    dataProvider.clearLists();
    setLists([]);
  }

  return (
    <BaseLayout>
      <div>
        <div className="flex justify-between">
          <Button type="success" clickHandler={() => setModalOpen(true)}>
            <PlusSmIcon className="w-5" /> Create list
          </Button>
          <Button type="error" clickHandler={() => clearLists()}>
            <TrashIcon className="w-5" /> Clear All
          </Button>
        </div>
        <p className="font-bold text-lg mt-4">
          {lists.length > 0 ? "Current Lists" : "No Lists Yet"}
        </p>
        {lists.map((list, index) => {
          return (
            <GroceryList
              list={list}
              deleteListHandler={removeList}
              key={`glist_${index}`}
            />
          );
        })}
      </div>
      {modalOpen && (
        <AddListModal
          closeHandler={() => setModalOpen(false)}
          addListHandler={addListHandler}
        />
      )}
    </BaseLayout>
  );
}

export default GroceryListsView;
