import React, { useState } from 'react'

const Two_show_test = () => {

    const [showText, setText] = useState(false);
    const [showInput, setInput] = useState("");

    const handleClick = () => {
        setText(!showText);

        // fix    should not be used here
        // showText = !showText;
    }
    const handleInput = (e) => {
        setInput(e.target.value);
    }
    return (
        <>
            <div className='flex mt-6 gap-5 flex-col justify-center items-center'>

                <button onClick={handleClick} className="px-8 py-4 font-sans font-semibold tracking-wide text-white bg-blue-500 rounded-lg h-[60px]">
                    Show / Hide Text
                </button>
                {/* imp     to show text in input use value attribute */}
                {showText && <>
                    <input type='text' onChange={handleInput} className='text-3xl border border-gray-700' />
                    <h1>{showInput}</h1>
                </>

                }
            </div>
        </>
    )
}

export default Two_show_test