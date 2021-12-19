import React, { SyntheticEvent, useEffect, useRef, useState } from "react";
import Button from "../../global/Button";
import Modal from "../../global/Modal";

interface ComponentProps {
  closeHandler: () => void;
  addListHandler: (listName: string) => void;
}

function AddListModal({ closeHandler, addListHandler }: ComponentProps) {
  const [name, setName] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  function submitListHandler(event: SyntheticEvent) {
    event.preventDefault();

    if (!name) {
      setErrorMessage("Please enter a name");
      return;
    }

    addListHandler(name);
    closeHandler();
  }

  const newNameRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
      if (newNameRef.current !== null) {
          newNameRef.current.focus();
      }
  }, []);

  return (
    <Modal closeHandler={closeHandler} modalTitle="Start new list">
      {errorMessage && (
        <div className="px-2 py-1 mb-2 text-gray-50 bg-red-400">
          {errorMessage}
        </div>
      )}
      <form onSubmit={submitListHandler}>
        <div>
          <label htmlFor="list_name">List Name: </label>
          <input
            ref={newNameRef}
            id="list_name"
            defaultValue={name}
            onChange={(e) => setName(e.target.value)}
            className="border border-gray-400 p-1 rounded-sm"
            type="text"
          />
        </div>
        <div className="flex justify-end mt-6">
          <Button type="success" clickHandler={submitListHandler}>
            Start List
          </Button>
        </div>
      </form>
    </Modal>
  );
}

export default AddListModal;
