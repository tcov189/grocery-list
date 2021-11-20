import { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { PlusSmIcon, ShoppingCartIcon } from '@heroicons/react/outline'

import Button from "./global/Button";

import AddListModal from "./GroceryList/AddListModal";
import GroceryLists from "./GroceryList/GroceryLists";
import EditGroceryList from "./GroceryList/EditGroceryList";
import dataProvider from "./data/dataProvider";

function App() {
  const [modalOpen, setModalOpen] = useState(false);

  const savedLists = dataProvider.getLists();

  const [lists, setLists] = useState(savedLists);

  function addListHandler(list) {
    const newId = lists.length + 1;
    const newList = { ...list, id: newId };

    localStorage.setItem(`list_${newId}`, JSON.stringify(newList));

    setLists([...lists, newList]);
  }

  return (
    <div className="flex flex-col min-h-screen bg-gray-300">
      <header className="w-full bg-gray-500 text-gray-50 py-3 px-2">
        <div className="flex align-items">
          <ShoppingCartIcon className="w-5 mr-1" /> Grocery List App
        </div>
      </header>
      <main className="my-2 px-2 flex-1">
        <Router>
          <Switch>
            <Route path="/lists/:id">
              <EditGroceryList />
            </Route>
            <Route path="/">
              <Button type="success" clickHandler={() => setModalOpen(true)}><PlusSmIcon className="w-5" /> Create list</Button>
              <GroceryLists lists={lists} />
            </Route>
          </Switch>
        </Router>
      </main>

      {modalOpen && <AddListModal closeHandler={() => setModalOpen(false)} addListHandler={addListHandler} />}

    </div>
  );
}

export default App;
