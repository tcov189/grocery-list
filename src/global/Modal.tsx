import { XIcon } from '@heroicons/react/outline'
import React, { useRef } from 'react'
import useOutsideClicked from '../hooks/useOutsideClicked';

function Modal({
    children,
    modalTitle = "Modal Title",
    closeHandler,
}) {
    const modalRef = useRef(null);
    useOutsideClicked(modalRef, closeHandler)

    return (
        <div className="absolute top-0 right-0 bottom-0 left-0 pt-10" style={{ backgroundColor: "rgba(0,0,0,.4" }}>
            <div ref={modalRef} className="bg-gray-300 w-5/6 mx-auto py-2 px-3 shadow-lg rounded-sm border-gray-400 border">
                <div className="flex justify-between items-center mb-2">
                    <p className="font-bold">{modalTitle}</p>
                    <XIcon className="w-5" onClick={() => closeHandler()} />
                </div>
                {children}
            </div>
        </div>
    )
}

export default Modal
