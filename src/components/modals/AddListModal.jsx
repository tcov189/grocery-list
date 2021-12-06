import React, { useEffect, useRef, useState } from 'react'
import Button from '../../global/Button';
import Modal from '../../global/Modal'

function AddListModal({ closeHandler, addListHandler }) {
    const [name, setName] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    function submitListHandler(event) {
        event.preventDefault();

        if (!name) {
            setErrorMessage("Please enter a name");
            return;
        }

        addListHandler(name);
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
            <form onSubmit={submitListHandler}>
                <div>
                    <label htmlFor="list_name">List Name: </label>
                    <input ref={newNameRef} id="list_name" defaultValue={name} onChange={(e) => setName(e.target.value)} className="border border-gray-400 p-1 rounded-sm" type="text" />
                </div>
                <div className="flex justify-end mt-6">
                    <Button type="success" clickHandler={submitListHandler}>Start List</Button>
                </div>
            </form>
        </Modal>
    )
}

export default AddListModal
