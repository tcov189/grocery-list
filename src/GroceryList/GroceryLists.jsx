import React from 'react'
import Button from '../global/Button'
import {
    Link,
} from "react-router-dom";
import { PencilIcon, ShoppingCartIcon, TrashIcon } from '@heroicons/react/outline';

function GroceryLists({ lists, deleteListHandler }) {

    console.log(lists)

    return (
        <div>
            <p className="font-bold text-lg mt-4">{lists.length > 0 ? "Current Lists" : "No Lists Yet"}</p>

            {lists.map((list, index) => {
                return (
                    <div className="flex justify-between items-center px-1 mb-8" key={`glist_${index}`}>
                        <p>{list.name}</p>
                        <div className="flex space-x-2">
                            <Button type="error" clickHandler={() => deleteListHandler(list.id)}><TrashIcon className="w-6" /></Button>

                            <Link to={`/lists/${list.id}`}>
                                <Button type="primary" clickHandler={null}><PencilIcon className="w-6" /></Button>
                            </Link>

                            <Link to={`/lists/shop/${list.id}`}>
                                <Button type="success" clickHandler={null}><ShoppingCartIcon className="w-6" /></Button>
                            </Link>

                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default GroceryLists
