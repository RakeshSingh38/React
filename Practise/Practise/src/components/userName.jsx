import { useState } from 'react';


const UserName = ({ name:name2 }) => {

    // or
    const [name, setName] = useState("")
    const [_, setSubmit] = useState("")

    const handlerChange = () => {
        setName('Rakesh Singh')
    }
    const handlerChange2 = () => {
        setName('Developer')
    }
    const handleSubmit = () => {
        setSubmit("");
    }

    return ('div', null,
        <div>
            <h1 className='text-4xl font-medium'>Hello i am {name}</h1>
            <h1 className='text-4xl font-medium'>i am {name2}</h1>
            <button onClick={handlerChange}
                onMouseLeave={handlerChange2}>click here </button>

            <div>
                <form action="POST" className='p-[5vmax]'>
                    <label htmlFor="nameInput" className='m-[1vmax]'                    >Name</label>
                    <input className='border border-gray-700' type="text" id="nameInput" placeholder='Enter your name' />
                    <button onClick={handleSubmit} id="submitButton" className='border border-gray-700'>Submit</button>
                </form>
            </div>

        </div>
    );
}

export default UserName