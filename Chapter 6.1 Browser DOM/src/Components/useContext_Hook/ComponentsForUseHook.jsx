import React, { useState } from 'react'

// imp      Prop Drilling :- it is a technique to pass data from one component to another component using props.
const ComponentsForUseHook = () => {
    const [state, setState] = useState()
    return (

        <>
            <h1 className="text-center m-10 text-4xl">hiii</h1>
            <TopComponent state={state} />
        </>
    )
}

const TopComponent = ({ state }) => {

    return (
        <MiddleComponent state={state} />
    )
}

const MiddleComponent = ({ state }) => {
    return (
        <BottomComponent state={state} />
    )
}

const BottomComponent = ({ state }) => {
    return (
        <>
            <h1>{state}</h1>

        </>
    )
}
export default ComponentsForUseHook