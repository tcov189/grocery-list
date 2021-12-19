import { ShoppingBagIcon } from "@heroicons/react/outline";
import React, { useState } from "react";
import Button from "../../global/Button";

function ShopGroceryListItem({ listId, listItem, updateHandler }) {
  const [item, setItem] = useState(listItem ?? "");

  const [acquired, setAcquired] = useState(item.acquired ?? false);

  function onChangeHandler() {
    const acquiredStatus = !acquired;
    setAcquired(acquiredStatus);
    setItem({ ...item, acquired: acquiredStatus });
    updateHandler(listId, { id: listItem.id, acquired: acquiredStatus });
  }

  let itemStyle = {
    textDecoration: acquired ? "line-through" : null,
    fontStyle: acquired ? "italic" : null,
    color: acquired ? 'rgba(0,0,0,.5)' : null,
  };

  return (
    <div
      className="flex items-center space-x-3 mb-4"
      style={itemStyle}
    >
      <Button type="primary" clickHandler={() => onChangeHandler()}>
        <ShoppingBagIcon className="w-4" />
      </Button>
      <p>
        {item.quantity} {item.item}
      </p>
    </div>
  );
}

export default ShopGroceryListItem;
