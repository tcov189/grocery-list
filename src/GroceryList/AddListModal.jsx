import React, { useEffect, useRef, useState } from 'react'
import Button from '../global/Button';
import Modal from '../global/Modal'

function AddListModal({ closeHandler, addListHandler }) {
    const [name, setName] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    function clickHandler() {
        if (!name) {
            setErrorMessage("Please enter a name");
            return;
        }

        addListHandler({ name: name, items: [] });
        closeHandler();
    }

    const newNameRef = useRef(null);

    useEffect(() => {
        newNameRef.current.focus();
    }, []);

    return (
        <Modal
            closeHandler={closeHandler}
            modalTitle="Start new list"
        >
            {errorMessage && <div className="px-2 py-1 mb-2 text-gray-50 bg-red-400">
                {errorMessage}
            </div>}
            <div>
                <label htmlFor="list_name">List Name: </label>
                <input ref={newNameRef} id="list_name" defaultValue={name} onChange={(e) => setName(e.target.value)} className="border border-gray-400 p-1 rounded-sm" type="text" />
            </div>
            <div className="flex justify-end mt-6">
                <Button type="success" clickHandler={clickHandler}>Start List</Button>
            </div>
        </Modal>
    )
}

export default AddListModal
