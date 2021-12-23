import {
  PencilIcon,
  ShoppingCartIcon,
  TrashIcon,
} from "@heroicons/react/outline";
import React, { ReactElement } from "react";
import { Link } from "react-router-dom";
import Button from "../../global/Button";
import { IGroceryList } from "../../types/GroceryList";

interface Props {
  list: IGroceryList;
  deleteListHandler: (listId: number) => void;
}

function GroceryList({ list, deleteListHandler }: Props): ReactElement {
  return (
    <div className="flex justify-between items-center px-1 mb-8">
      <p>{list.name}</p>
      <div className="flex space-x-2">
        <Button type="error" clickHandler={() => deleteListHandler(list.id)}>
          <TrashIcon className="w-6" />
        </Button>

        <Link to={`/lists/${list.id}`}>
          <Button type="primary">
            <PencilIcon className="w-6" />
          </Button>
        </Link>

        <Link to={`/lists/shop/${list.id}`}>
          <Button type="success">
            <ShoppingCartIcon className="w-6" />
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default GroceryList;
