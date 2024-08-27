import React, { useState } from 'react'

const Temp = () => {
    const users = [
        { userName: 'rakesh', id: 1, age: 24 },
        { userName: 'nikesh', id: 2, age: 20 },
        { userName: 'prakash', id: 3, age: 26 },
        { userName: 'ajay', id: 4, age: 28 },
        { userName: 'ramesh', id: 5, age: 30 },
        { userName: 'suresh', id: 6, age: 22 },
        { userName: 'mahesh', id: 7, age: 29 },
        { userName: 'vijay', id: 8, age: 27 },
    ];

    const [user, setUser] = useState("");
    const [userId, setUserId] = useState(0);
    const handleChange = (e) => {
        setUser(e.target.value);
    }
    return (
        <>
            <div>Maps</div>
            {users.map(({ userName, id, age }, index) =>

                <ul>
                    {/* <li key={index}>UserName : {userName && user || userName} , ID:  {id}, Age: {age}</li> */}
                    {/*  or */}

                    {/* imp     here i am changing the text if it exist or keep default text */}
                    {/*   {index===0 && <li key={index}>UserName : {user ? user : userName} , ID:  {id}, Age: {age}</li> || <li key={index}>UserName : {userName} , ID:  {id}, Age: {age}</li>

                    } */}

                    {/* tip    another variation     here i am changing the text if it exist or keep default text */}

                    <li key={index}>UserName : {index === 0 && user ? user : userName}, ID:  {id}, Age: {age}
                    </li>
                    {/* <li key={index}>{id}</li>
                    <li key={index}>{age}</li> */}
                </ul>

                // tip     no use of applying filter method after map method
            )}

            <input
                onChange={handleChange}
                type="text"
                placeholder="Enter your content"
                className="w-[600px] border border-slate-200 rounded-lg py-3 px-5 outline-none  bg-transparent"
            />
            <button onClick={handleChange}></button>
        </>
    )
}

export default Temp 