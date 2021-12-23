import React from "react";

import { IGroceryList } from "../types/GroceryList";
import GroceryList from "../components/lists/GroceryList";

interface ComponentProps {
  lists: IGroceryList[],
  deleteListHandler: (listId: number) => void,
}

function GroceryListsView({ lists, deleteListHandler }: ComponentProps) {
  return (
    <div>
      <p className="font-bold text-lg mt-4">
        {lists.length > 0 ? "Current Lists" : "No Lists Yet"}
      </p>

      {lists.map((list, index) => {
        return (
          <GroceryList list={list} deleteListHandler={deleteListHandler} key={`glist_${index}`} />
        );
      })}
    </div>
  );
}

export default GroceryListsView;
