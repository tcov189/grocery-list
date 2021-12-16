import { IGroceryListItem } from "./IGroceryListItem";

export interface IGroceryList {
    id: number,
    items: Array<IGroceryListItem>,
    name: string,
}