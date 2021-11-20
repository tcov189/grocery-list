const getLists = () => {
    let listKeys = Object.keys(localStorage).filter((list) => list.includes('list_'));

    return listKeys.map((listKey) => JSON.parse(localStorage.getItem(listKey)));
}

const getList = (id) => {
    return JSON.parse(localStorage.getItem(`list_${id}`));
}

const addNewListItem = (listId) => {
    let list = getList(listId);

    let listItems = [...list.items];

    listItems.push({
        id: listItems.length + 1,
        quantity: 0,
        item: ""
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

const updateList = (listId, listData) => {
    let list = getList(listId);

    let newListObject = { ...list, ...listData };

    newListObject.name = listData.name || list.name;
    newListObject.items = listData.items || list.items;

    localStorage.setItem(`list_${list.id}`, JSON.stringify(newListObject));

    return newListObject;
};


const dataProvider = {
    getLists,
    getList,
    removeListItem,
    addNewListItem,
    updateList,
}

export default dataProvider;