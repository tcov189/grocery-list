import React, { useState } from 'react'
import Button from '../global/Button';
import Modal from '../global/Modal'

function AddListModal({ closeHandler, addListHandler }) {
    let date = new Date();

    const [name, setName] = useState(date.toLocaleDateString());

    function clickHandler() {
        addListHandler({ name: name, items: [] });
        closeHandler();
    }

    return (
        <Modal
            closeHandler={closeHandler}
            modalTitle="Start new list"
        >
            <div>
                <label htmlFor="list_name">List Name: </label>
                <input id="list_name" defaultValue={name} onChange={(e) => setName(e.target.value)} className="border border-gray-400 p-1 rounded-sm" type="text" />
            </div>
            <div className="flex justify-end mt-6">
                <Button type="success" clickHandler={clickHandler}>Start List</Button>
            </div>
        </Modal>
    )
}

export default AddListModal
