import { IGroceryList } from "../types/GroceryList";
import { GroceryCategory, IGroceryListItem } from "../types/IGroceryListItem";

const getLists = (): IGroceryList[] => {
  let listKeys = Object.keys(localStorage).filter((list) =>
    list.includes("list_")
  );

  if (listKeys.length === 0) {
    return [];
  }

  return listKeys
    .map((listKey) => {
      let rawData = localStorage.getItem(listKey) ?? "{}";

      return JSON.parse(rawData);
    })
    .sort((a, b) => a.id - b.id);
};

const getList = (id: number): IGroceryList => {
  let rawData = localStorage.getItem(`list_${id}`) ?? "{}";

  return JSON.parse(rawData);
};

const addList = (listName: string) => {
  const lists = getLists();

  let newListId: number = 1;

  if (lists.length > 0) {
    // Get the last used id and add one
    newListId =
      lists
        .map((list) => list.id)
        .sort()
        .splice(-1, 1)[0] + 1;
  }

  const newList: IGroceryList = {
    id: newListId,
    name: listName,
    items: [],
  };

  localStorage.setItem(`list_${newListId}`, JSON.stringify(newList));

  return getLists();
};

const removeList = (listId: number) => {
  localStorage.removeItem(`list_${listId}`);

  return getLists();
};

const updateList = (listId: number, listData: IGroceryList): IGroceryList => {
  let list = getList(listId);

  let newListObject = { ...list, ...listData };

  newListObject.name = listData.name || list.name;
  newListObject.items = listData.items || list.items;

  localStorage.setItem(`list_${list.id}`, JSON.stringify(newListObject));

  return newListObject;
};

const clearLists = (): void => {
  localStorage.clear();
};

const addNewListItem = (listId: number) => {
  let list = getList(listId);

  let listItems = [...list.items];

  listItems.push({
    id: listItems.length + 1,
    item: "",
    acquired: false,
    category: GroceryCategory.Miscellaneous,
  });

  list.items = listItems;

  return updateList(listId, { ...list });
};

const removeListItem = (listId: number, listItemId: number) => {
  let list = getList(listId);

  let listItems = [...list.items];

  list.items = listItems.filter((listItem) => listItem.id !== listItemId);

  return updateList(listId, { ...list });
};

const updateListItem = (listId: number, updatedItem: IGroceryListItem) => {
  const list = getList(listId);

  const items = [...list.items];

  const listItemIndex = items.findIndex((item) => item.id === updatedItem.id);

  items[listItemIndex] = { ...items[listItemIndex], ...updatedItem };

  list.items = items;

  localStorage.setItem(`list_${list.id}`, JSON.stringify(list));

  return list;
};

const dataProvider = {
  addList,
  getLists,
  getList,
  removeListItem,
  addNewListItem,
  updateListItem,
  updateList,
  clearLists,
  removeList,
};

export default dataProvider;
