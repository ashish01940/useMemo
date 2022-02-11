import React, { useEffect, useReducer, useMemo } from 'react'

let initialState = {
    num: 0,
    bool: true,
    arr1: [1, 2, 3, 4],
}
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "incNum":
            return { ...state, num: state.num + action.payload }
        case "decNum":
            return { ...state, num: state.num - action.payload }
        case "chngBool":
            return { ...state, bool: !state.bool }
    }
}

function useMemos_useCase2() {
    let [data, dispatch] = useReducer(reducer, initialState)
    const arr3 = useMemo(() => {
        return [3, 4, 5, 7]
    }, [data.bool])
    // const arr3 = [3, 4, 5, 7]

    const arr2 = [1, 2]


    useEffect(() => {
        console.log("array 2 changed", arr2);
    }, [arr2])
    useEffect(() => {
        console.log("array 3 changed", arr3);
    }, [arr3])

    return (
        <>
            <button onClick={() => dispatch({ type: "chngBool" })}>change Boolean</button>
            <button onClick={() => dispatch({ type: "incNum", payload: 1 })}>inc</button>
            <h3>{data.num}</h3>
            <button onClick={() => dispatch({ type: "decNum", payload: 1 })}>dec</button>
        </>
    )
}

export default useMemos_useCase2