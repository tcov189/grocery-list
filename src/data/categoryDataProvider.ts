import { GroceryCategory } from "../types/IGroceryListItem";

const getCategories = (): Array<string> => {
  return Object.values(GroceryCategory);
};

const categoryDataProvider = {
  getCategories,
};

export default categoryDataProvider;
