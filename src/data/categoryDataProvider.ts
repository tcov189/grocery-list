const getCategories = (): Array<string> => {
  let savedCategories = localStorage.getItem("categories") || "";

  return savedCategories.length > 0
    ? savedCategories?.split(",")
    : [
        "Dairy",
        "Dry/Can Goods",
        "Frozen",
        "Pantry",
        "Produce",
        "Meat",
        "Miscellaneous",
      ];
};

const categoryDataProvider = {
  getCategories,
};

export default categoryDataProvider;
