import Axios from 'axios';
import React, { useEffect, useState } from 'react'

// r        Single Excuse according the the button clicked
const Seven_doing_excuse_with_input = () => {
    const [userInput, setUserInput] = useState(null);
    const [fetchedExcuse, setFetchedExcuse] = useState('');
    //  this generates excuse automatically when input is written completely
    // useEffect(() => {
    //     fetchedData();
    // }, [userInput])

    const fetchedData = () => {
        try {
            // imp      1 >  we will get the excuse text from the api
            fetch(`https://excuser-three.vercel.app/v1/excuse/${fetchedExcuse}/`)
                .then(res => res.json())
                .then((res) => {
                    // console.log(Object.values(res.data[0].excuse).join(""));
                    // console.log(res.request)
                    console.log(res[0].excuse);
                    // imp     2 > then i will set the fetchedExcuse to the setUserInput state
                    // fix      i cant set the fetchedExcuse to the setFetchedExcuse as it will be the same as the input 
                    //          coz it would overwrite the user's input, which is not the desired behavior.  

                    setUserInput(res[0].excuse);
                })

        } catch (error) {
            console.log(error)
        }
        // .catch(error => console.log(error)); // Add catch block for error handling
    }
    return (
        <div className='flex flex-col items-center m-5 justify-center '>
            <h1>{fetchedExcuse}</h1>
            {/* <input type="text" name="" id="" className='border p-3 border-gray-700' /> */}

            {/* r       here data is limited */}
            {/* <button onClick={() => fetchedData('family')} className='border bg-blue-400 p-4 rounded-md mt-6'>Family</button>
            <button onClick={() => fetchedData('office')} className='border bg-blue-400 p-4 rounded-md mt-6'>Office</button> */}
            <input type="text" onKeyDown={(e) => e.key === 'Enter' ? fetchedData() : null}
                onChange={(e) => {
                    // imp        3 > this is where i will set the fetchedExcuse to the setUserInput state and then use the fetchedExcuse as the input for the api
                    //  in simple words, i will set the setFetchedExcuse and then use the fetchedExcuse as the input for the api
                    setFetchedExcuse(e.target.value)
                }
                } className="border p-5 border-gray-900" placeholder='eg: family,funny,office' />
            {/* imp         4 > once all steps are finished then i will call the fetchedData function on button */}
            <button onClick={() => fetchedData()} className='border bg-blue-400 p-4 rounded-md mt-6'>Generate userInput</button>

            {/* imp         here it  should be userInput coz fetchedExcuse consist  of user Input */}
            <h1 className="text-xl pt-4">{userInput} </h1>

            {/* imp         this is the input -→  <h1>{fetchedExcuse}</h1> eg: family */}

        </div>
    )
}

export default Seven_doing_excuse_with_input


// see     individual userInput for family, office, funny
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