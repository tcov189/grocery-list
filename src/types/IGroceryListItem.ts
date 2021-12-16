export interface IGroceryListItem {
    id: number,
    item: string,
    category: GroceryCategory,
    acquired: boolean,
}

export enum GroceryCategory {
    Dairy = "Dairy",
    DryCanGoods = "Dry/Can Goods",
    Frozen = "Frozen",
    Pantry = "Pantry",
    Produce = "Produce",
    Meat = "Meat",
    Miscellaneous = "Miscellaneous",
}