import React from 'react'
import Button from '../global/Button'

function GroceryLists({ lists }) {
    return (
        <div>
            <p className="font-bold text-lg mt-4">Current Lists</p>

            {lists.map((list, index) => {
                return (
                    <div className="flex justify-between items-center px-1 my-1">
                        <p>{list.name}</p>
                        <div className="flex space-x-2">
                            <Button type="primary">Edit</Button>
                            <Button type="success">Shop</Button>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default GroceryLists
