import React from 'react'

/* note     Writing TypeScript with React is very similar to writing JavaScript with React. The key difference when working with a component is that you can provide types for your component’s props. These types can be used for correctness checking and providing inline documentation in editors. */

// tip      always define your main component interface first
interface MybuttonProps
{
    title: string;
}

const Mybutton = ({ title }: MybuttonProps) =>
{
    return (
        <div>This is something else
            <button className='text-4xl border border-blue-600 px-2 bg-black text-white rounded-md focus:scale-125 m-2 '>{title}</button>
        </div>
    )
}
const App = () =>
{
    return (
        <>
            <h1>Heyy</h1>
            <Mybutton title="Heyy how are u" />
        </>
    )
}


export default App