import Axios from 'axios';
import React, { useEffect, useState } from 'react'

// r        Single Excuse according the the button clicked
const Seven_doing_excuse_with_input = () => {
    const [excuses, setExcuses] = useState(null);

    //  this generates excuse automatically when input is written completely
    // useEffect(() => {
    //     fetchedData();
    // }, [excuses])

    const fetchedData = () => {
        fetch(`https://excuser-three.vercel.app/v1/excuse/${excuses}/`)
        .then(res => res.json())
            .then((res) => {
                // console.log(Object.values(res.data[0].excuse).join(""));
                // console.log(res.request)
                console.log(res[0].excuse);
                setExcuses(res[0].excuse);
            })
            .catch(error => console.log(error)); // Add catch block for error handling
    }
    return (
        <div className='flex flex-col items-center m-5 justify-center '>
            {/* <input type="text" name="" id="" className='border p-3 border-gray-700' /> */}

            {/* r       here data is limited */}
            {/* <button onClick={() => fetchedData('family')} className='border bg-blue-400 p-4 rounded-md mt-6'>Family</button>
            <button onClick={() => fetchedData('office')} className='border bg-blue-400 p-4 rounded-md mt-6'>Office</button> */}
            <input type="text" onChange={(e) => setExcuses(e.target.value)
            } className="border p-5 border-gray-900" placeholder='eg: family,funny,office' />
            <button onClick={() => fetchedData()} className='border bg-blue-400 p-4 rounded-md mt-6'>Generate excuses</button>


            <h1>{excuses} </h1>

        </div>
    )
}

export default Seven_doing_excuse_with_input


// see     individual excuses for family, office, funny
/* 
import Axios from 'axios';
import React, { useState } from 'react'

const Seven_doing_excuse_with_input = () => {
    const [familyExcuse, setFamilyExcuse] = useState('');
    const [officeExcuse, setOfficexcuse] = useState('');
    const [funnyExcuse, setFunnyExcuse] = useState('');
    const fetchedData = (ex, setExcuse) => {
        Axios.get(`https://excuser-three.vercel.app/v1/excuse/${ex}/`)
            .then((res) => {
                // console.log(Object.values(res.data[0].excuse).join(""));
                console.log(res.data[0].excuse);
                return setExcuse(res.data[0].excuse);
            })
            .catch(error => console.log(error)); // Add catch block for error handling
    }
    return (
        <div className='flex flex-col items-center m-5 justify-center '>

            <button onClick={() => fetchedData('family', setFamilyExcuse)} className='border bg-blue-400 p-4 rounded-md mt-6'>Family</button>
            <h1>{familyExcuse} </h1>
            <button onClick={() => fetchedData('office', setOfficexcuse)} className='border bg-blue-400 p-4 rounded-md mt-6'>Office</button>
            <h1>{officeExcuse} </h1>

            <button onClick={() => fetchedData('funny', setFunnyExcuse)} className='border bg-blue-400 p-4 rounded-md mt-6'>Funny</button>
            <h1>{funnyExcuse} </h1>

        </div >
    )
}
export default Seven_doing_excuse_with_input
*/