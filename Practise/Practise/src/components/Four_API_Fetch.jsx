import React, { useState, useEffect } from 'react';
import Axios from 'axios'
const Four_API_Fetch = () => {
    const [fact, setFact] = useState('');
    const fetchedData = () => {
        // imp    using fetch api to fetch data from API 
        fetch('https://catfact.ninja/fact')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setFact(data.fact);

            })
    }
    // const handleText = () => {
    //     setText(fetchedData());
    // }
    useEffect(() => {
        // fetchedData();
    }, []);


    // imp    using Axios api to fetch data from API 

    const fetchedDataUsingAxios = () => Axios.get('https://catfact.ninja/fact').then((res) => {
        console.log(res.data.fact)
        setFact(res.data.fact)

    })

    useEffect(() => {
        fetchedDataUsingAxios();
    }, [])

    return (
        <div className='p-10 border border-slate-500 bg-gray-200'>
            {/* {console.log(API)}
            {Object.values(API).map((data) => <h1>{data}</h1>)} */}
            <div
                className="flex items-center flex-col justify-center gap-x-5"
                aria-label="button-combination"
            >
                <button onClick={fetchedData} className="mb-5 w-[20%] px-8 py-4 font-sans font-semibold tracking-wide text-white bg-blue-500 rounded-lg h-[60px]">
                    Get started
                </button>

                <h1 className='text-4xl '>{fact}</h1>
            </div>
            {/* <h1 className='text-4xl'>{text}</h1> */}

        </div>
    );
}

export default Four_API_Fetch;