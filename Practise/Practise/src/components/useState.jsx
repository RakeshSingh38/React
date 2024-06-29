import React from 'react'
import { useState } from 'react'

const useState2 = () => {

    const [state, setState] = useState("");

    const changState = (e) => {
        setState(e.target.value);
    }
    return (
        <>
            <h1 className='text-5xl'>useState</h1>

            <form className="flex justify-center   items-center flex-col p-5 gap-y-3" >
                <div>

                    <label htmlFor="name" className="text-sm m-4 font-medium cursor-pointer">
                        Name
                    </label>
                    <input onChange={changState}
                        id="name"
                        type="text"
                        className=" p-4 bg-transparent border  border-gray-200 rounded-lg outline-none"
                        placeholder="Enter your name"
                    />
                </div>
                <div>

                    <label htmlFor='password' className='text-sm m-4 font-medium cursor-pointer'>Password</label>
                    <input type='password' id='password' className='p-4 bg-transparent border border-gray-200 rounded-lg outline-none' placeholder='Enter your password' />
                    <input type='text' value={state} id='name' className='p-4 bg-transparent border border-gray-200 rounded-lg outline-none' placeholder='Enter your password' />
                </div>
                <button className="p-3 text-white bg-blue-500 rounded-lg m-auto">Submit</button>
            </form >
            {/* <h1 className='text-5xl m-9'>{state}</h1> */}
            {/* <h1 className='text-5xl m-9'>{["Your data is : ",...state]}</h1> */}
            {/* <h1 className='text-5xl m-9'>Your data is : {state}</h1> */}

            <div className='even:bg-green-500'>
                <h1>1111</h1>
                <b>faf</b>
                <h1>1111</h1>
                <h1>1111</h1>
            </div>

        </>

    )
}

export default useState2