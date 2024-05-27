import React, { useState } from 'react'
import '../index.css'
const Counter = () => {
    let [number, setNumber] = useState(0);
    const handleClick = () => {
        // tip    number + 1 is faster than number++ because number++ returns the value of number before incrementing
        // ↑ same as ++number

        // Q     what if i repeat the setNumber numerous times?

        // ->    In this case, calling multiple times in a row does not immediately update the state. Instead, React schedules these updates and processes them together.
        setNumber(number + 1);
        // this number+2 willl be processed in batch and at the end of the batch, the value will be updated i.e last one will be printed
        setNumber(number + 2);
        setNumber(number + 1);
        setNumber(number + 1);
        console.log(++number);
    }
    const handleClick2 = () => {
        setNumber(number - 1)
        console.log(--number);

    }
    /*  const handleClick = () => {
            number++;
            console.log(number);
        }
        const handleClick2 = () => {
            number--;
            console.log(number);
        } */
    return (
        <div className='w-screen h-screen flex justify-center items-center text-center flex-col'>
            <h1 className='text-7xl'>Counter</h1>
            <h1 className='text-7xl'>{number}</h1>
            <div className='text-center mt-5 flex text-7xl place-content-center gap-5'>
                <button onClick={handleClick} className='border border-gray-500 px-7 py-3 bg-black text-white rounded-lg'>+</button>
                <button onClick={handleClick2} className='border border-gray-500 px-10 py-3 bg-black text-white rounded-lg'>-</button>
            </div>
        </div>
    )
}

const test = () => {
    return (
        <>
        <Counter />
        {/* <div className="h-screen w-screen">okay
            <h1>pokgug</h1>
        </div> */}
        </>
    )
}
export default test