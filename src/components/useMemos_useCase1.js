import React, { useMemo } from 'react'


function useMemos() {
    let [state, chngState] = React.useState(true)
    let [state1, chngState1] = React.useState(0)
    //the way useMemo is diff from useEffect is useMemo will return the old [memorise the last return result] value when state doesn't change thus saving one fetch request
    let hcf = React.useMemo(() => func1(), [state])

    console.log(hcf.then((e) => e));
    return (
        <>
            {state ? "true" : "false"}
            <button onClick={() => chngState(!state)}>theme</button>
            <button onClick={() => chngState1(++state1)} >{state1}</button>
        </>
    )
}

function func1() {
    console.log("df");
    //this function will only run when state changes
    return fetch("https://reqres.in/api/users?page=2", { method: "GET" })
        .then((res) => res.json().then((data) => data))
}

export default useMemos