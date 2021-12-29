import { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import GroceryLists from "./views/GroceryListsView";
import EditGroceryList from "./views/EditGroceryListView";
import ShopGroceryList from "./views/ShopGroceryListView";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/lists/:id">
          <EditGroceryList />
        </Route>
        <Route exact path="/lists/shop/:id">
          <ShopGroceryList />
        </Route>
        <Route path="/">
          <GroceryLists />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
