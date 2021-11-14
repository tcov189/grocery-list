import Button from "./global/Button";
import { PlusSmIcon, ShoppingCartIcon } from '@heroicons/react/outline'

import { useState } from "react";
import AddListModal from "./GroceryList/AddListModal";
import useGetLists from "./hooks/useGetLists";
import GroceryLists from "./GroceryList/GroceryLists";


function App() {
  const [modalOpen, setModalOpen] = useState(false);

  const savedLists = JSON.parse(localStorage.getItem('lists') ?? "[]");
  const [lists, setLists] = useGetLists(savedLists);

  function addListHandler(list) {
    const currentLists = [...lists];

    const newList = { ...list, id: savedLists.length + 1 };

    currentLists.push(newList);

    localStorage.setItem('lists', JSON.stringify(currentLists));

    setLists(currentLists);
  }

  return (
    <div className="h-screen w-full bg-gray-300">

      <header className="w-full bg-gray-500 text-gray-50 py-3 px-2">
        <div className="flex align-items">
          <ShoppingCartIcon className="w-5 mr-1" /> Grocery List App
        </div>
      </header>
      <main className="my-2 px-2 max-w-md flex-1">
        <Button type="success" clickHandler={() => setModalOpen(true)}><PlusSmIcon className="w-5" /> Create list</Button>

        <div className="mt-4 max-h-full overflow-scroll">
          {lists.length > 0 ? <GroceryLists lists={lists} /> : <p className="font-bold text-lg">No lists found!</p>}
        </div>
      </main>

      {modalOpen && <AddListModal closeHandler={() => setModalOpen(false)} addListHandler={addListHandler} />}

    </div>
  );
}

export default App;
