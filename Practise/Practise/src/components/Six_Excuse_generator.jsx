import Axios from 'axios';
import React, { useState } from 'react'

// r        Single Excuse according the the button clicked
const Six_Excuse_generator = () => {
    const [excuses, setExcuses] = useState('');
    const fetchedData = (ex) => {
        // imp      excuses else api for excuses and jokes
        Axios.get(`https://excuser-three.vercel.app/v1/excuse/${ex}/`)
            .then((res) => {
                // console.log(Object.values(res.data[0].excuse).join(""));
                // console.log(res.data[0].excuse);
                return setExcuses(res.data[0].excuse);
            })
            .catch(error => console.log(error)); // Add catch block for error handling
    }
    return (
        <div className='flex flex-col items-center m-5 justify-center '>
            {/* <input type="text" name="" id="" className='border p-3 border-gray-700' /> */}

            {/* r       here data is limited */}
            <button onClick={() => fetchedData('family')} className='border bg-blue-400 p-4 rounded-md mt-6'>Family</button>
            <button onClick={() => fetchedData('office')} className='border bg-blue-400 p-4 rounded-md mt-6'>Office</button>

            <button onClick={() => fetchedData('funny')} className='border bg-blue-400 p-4 rounded-md mt-6'>Funny</button>


            <h1>{excuses} </h1>

        </div>
    )
}

export default Six_Excuse_generator


// see     individual excuses for family, office, funny
/* 
import Axios from 'axios';
import React, { useState } from 'react'

const Six_Excuse_generator = () => {
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
export default Six_Excuse_generator
*/