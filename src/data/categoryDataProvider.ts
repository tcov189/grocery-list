import { GroceryCategory } from "../types/IGroceryListItem";

const getCategories = (): Array<string> => {
  let types = [];

  for (const value in GroceryCategory) {
    types.push(value)
  }

  return types;
};

const categoryDataProvider = {
  getCategories,
};

export default categoryDataProvider;
