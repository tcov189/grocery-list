const getLists = () => {
    let listKeys = Object.keys(localStorage).filter((list) => list.includes('list_'));

    return listKeys.map((listKey) => JSON.parse(localStorage.getItem(listKey)));
}

const getList = (id) => {
    return JSON.parse(localStorage.getItem(`list_${id}`));
}

const updateList = (id, newItem) => {
   let list = JSON.parse(localStorage.getItem(`list_${id}`));

   let listItems = [...list.items];

   listItems.push(newItem);

   list.items = listItems;

   localStorage.setItem(`list_${id}`, JSON.stringify(list));

   return list;
};


const dataProvider = {
    getLists,
    getList,
    updateList,
}

export default dataProvider;