const useUpdateList = (id, newListObject) => {
    const savedLists = JSON.parse(localStorage.getItem('lists') ?? "[]");

    savedLists.map((list) => {
        if (list.id === id) {
            return {
                ...list, ...newListObject
            }
        } else {
            return {
                ...newListObject
            }
        }
    });

    localStorage.setItem('lists', JSON.stringify(savedLists));

    return savedLists;
};


module.exports = {
    useUpdateList
}