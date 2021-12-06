const getCategories = () => {
    return localStorage.getItem("categories") ?? [
      "Dairy",
      "Dry/Can Goods",
      "Frozen",
      "Pantry",
      "Produce",
      "Meat",
      "Miscellaneous",
    ];
}

const categoryDataProvider = {
    getCategories,
}

export default categoryDataProvider;