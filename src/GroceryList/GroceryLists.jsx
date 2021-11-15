import React from 'react'
import Button from '../global/Button'
import {
    Link,
} from "react-router-dom";

function GroceryLists({ lists }) {

    return (
        <div>
            <p className="font-bold text-lg mt-4">{lists.length > 0 ? "Current Lists" : "No Lists Yet"}</p>

            {lists.map((list, index) => {
                return (
                    <div className="flex justify-between items-center px-1 my-1" key={`glist_${index}`}>
                        <p>{list.name}</p>
                        <div className="flex space-x-2">
                            <Link to={`/lists/${list.id}`}>
                                <Button type="primary" clickHandler={null}>Edit</Button>
                            </Link>

                            <Button type="success">Shop</Button>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default GroceryLists
