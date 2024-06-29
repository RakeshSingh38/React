import React from 'react'
import '../App.css'
const UseState_normal = () => {

    // using conditional rendering
    const age = 18;
    const isGreen = true;

    const names = ['Rakesh', 'Rajesh', 'Ramesh', 'Raju', 'Rahul']
    return (
        <div >

            <div className='mt-5 flex flex-col gap-6 justify-center items-center'>
                {/* 
            <div className='h-screen mt-auto flex flex-col justify-center items-center gap-y-5'>

                <form className="border flex justify-center items-center gap-x-5 w-[25rem]" aria-label="simple-form">
                    <div className="flex-1">
                        <input
                            type="text"
                            placeholder="Enter your content"
                            className="w-full p-3 bg-transparent rounded-lg outline-none bg-slate-200"
                        />
                    </div>
                </form>
                <form className="border flex justify-center items-center gap-x-5 w-[25rem]" aria-label="simple-form">
                    <div className="flex-1">
                        <input
                            type="text"
                            placeholder="Enter your content"
                            className="w-full p-3 bg-transparent rounded-lg outline-none bg-slate-200"
                        />
                    </div>

                </form>
                <form className="border flex justify-center items-center gap-x-5 w-[25rem]" aria-label="simple-form">
                    <div className="flex-1">
                        <input
                            type="text"
                            placeholder="Enter your content"
                            className="w-full p-3 bg-transparent rounded-lg outline-none bg-slate-200"
                        />
                    </div>
                </form> 
            </div>
                */}

                {/* imp         to remove form data , but btn is outside */}
                {/* <button onClick={() => {
                document.querySelectorAll('form').forEach(form => form.reset());
            }} className=" bg-blue-500 p-3 rounded-md font-bold text-white">
                Subscribe
            </button> */}

                {age >= 18 ? (
                    // imp       to add multiple Tags in conditional rendering , wrap them <> </> 
                    <>
                        <h1 className='text-4xl'>Your age is {age}</h1>
                        <p className='text-xl text-center'>Congrats</p>
                    </>
                ) : (
                    <h1 className='text-4xl'>You are under age</h1>
                )}
                {isGreen ? <button className=' bg-blue-500 p-3 rounded-md font-bold text-white'>Heyy</button> : ""}
                <h1 className='text-4xl' style={{ backgroundColor: isGreen ? "green" : "red" }}>This is colour</h1>
            </div>
            <div className='mt-6 test even:bg-green-400 '>
                {names.map((name, key) => {
                    return <h1 key={key} className='text-center text-xl '>{name}</h1>
                })}
            </div>
            <ul className='mt-5'>
                <li class="bg-gray-200 even:bg-gray-300">Item 1</li>
                <li class="bg-gray-200 even:bg-gray-300">Item 2</li>
                <li class="bg-gray-200 even:bg-gray-300">Item 3</li>
                <li class="bg-gray-200 even:bg-gray-300">Item 4</li>
                <li class="bg-gray-200 even:bg-gray-300">Item 5</li>
            </ul>
        </div>
    )
}

export default UseState_normal