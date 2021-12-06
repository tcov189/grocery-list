import { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { PlusSmIcon, ShoppingCartIcon, TrashIcon } from '@heroicons/react/outline'

import Button from "./global/Button";

import AddListModal from "./components/modals/AddListModal";
import GroceryLists from "./views/GroceryLists";
import EditGroceryList from "./views/EditGroceryList";
import dataProvider from "./data/dataProvider";
import ShopGroceryList from "./views/ShopGroceryList";

function App() {
  const [modalOpen, setModalOpen] = useState(false);

  const savedLists = dataProvider.getLists();

  const [lists, setLists] = useState(savedLists);

  function addListHandler(listName) {
    const updatedLists = dataProvider.addList(listName);

    setLists(updatedLists);
  }

  function removeList(listId) {
    const updatedLists = dataProvider.removeList(listId);

    setLists(updatedLists);
  }

  function clearLists() {
    dataProvider.clearLists();
    setLists([]);
  }

  return (
    <div className="flex flex-col min-h-screen bg-gray-300">
      <header className="w-full bg-gray-500 text-gray-50 py-3 px-2 h-12">
        <div className="flex">
          <ShoppingCartIcon className="w-5 mr-1" />
          Grocery List App
        </div>
      </header>
      <main className="my-2 px-2 flex-1">
        <Router>
          <Switch>
            <Route exact path="/lists/:id">
              <EditGroceryList />
            </Route>
            <Route exact path="/lists/shop/:id">
              <ShopGroceryList />
            </Route>
            <Route path="/">
              <div className="flex justify-between">
                <Button type="success" clickHandler={() => setModalOpen(true)}><PlusSmIcon className="w-5" /> Create list</Button>
                <Button type="error" clickHandler={() => clearLists()}><TrashIcon className="w-5" /> Clear All</Button>
              </div>
              <GroceryLists lists={lists} deleteListHandler={removeList} />
            </Route>
          </Switch>
        </Router>
      </main>

      {modalOpen && <AddListModal closeHandler={() => setModalOpen(false)} addListHandler={addListHandler} />}

    </div>
  );
}

export default App;
