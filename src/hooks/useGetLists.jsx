import { useState } from "react"

const useGetLists = () => {
    const savedLists = JSON.parse(localStorage.getItem('lists') ?? "[]");

    const [lists, setLists] = useState(savedLists);

    return [lists, setLists];
}

export default useGetLists