const getLists = () => {
    let listKeys = Object.keys(localStorage).filter((list) => list.includes('list_'));

    return listKeys.map((listKey) => JSON.parse(localStorage.getItem(listKey))).sort((a,b) => a.id - b.id );
}

const getList = (id) => {
    return JSON.parse(localStorage.getItem(`list_${id}`));
}

const addNewListItem = (listId) => {
    let list = getList(listId);

    let listItems = [...list.items];

    listItems.push({
        id: listItems.length + 1,
        quantity: 1,
        item: "",
        acquired: false,
    });

    list.items = listItems;

    return updateList(listId, { ...list });
}

const removeListItem = (listId, listItemId) => {
    let list = getList(listId);

    let listItems = [...list.items];

    list.items = listItems.filter((listItem) => listItem.id !== listItemId);

    return updateList(listId, { ...list });
}

const removeList = (listId) => {
    localStorage.removeItem(`list_${listId}`);

    return getLists();
}

const updateList = (listId, listData) => {
    let list = getList(listId);

    let newListObject = { ...list, ...listData };

    newListObject.name = listData.name || list.name;
    newListObject.items = listData.items || list.items;

    localStorage.setItem(`list_${list.id}`, JSON.stringify(newListObject));

    return newListObject;
};

const updateListItem = (listId, updatedItem) => {
    const list = getList(listId);

    const items = [...list.items];

    const listItemIndex = items.findIndex((item) => item.id === updatedItem.id);

    items[listItemIndex].item = updatedItem.item;
    items[listItemIndex].quantity = updatedItem.quantity;

    list.items = items;

    localStorage.setItem(`list_${list.id}`, JSON.stringify(list));

    return list;
}

const clearLists = () => {
    localStorage.clear();
}


const dataProvider = {
    getLists,
    getList,
    removeListItem,
    addNewListItem,
    updateListItem,
    updateList,
    clearLists,
    removeList,
}

export default dataProvider;