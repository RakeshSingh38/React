import Axios from 'axios';
import React, { useState } from 'react'

const Five_Data_predictor = () => {
    const [predict, setPredict] = useState(null);
    const [text, setText] = useState('');
    const fetchedData = () => {
        Axios.get(`https://api.agify.io/?name=${text}`)
            .then(res => setPredict(res.data)) // Assuming you want to display the age
            .catch(error => console.log(error)); // Add catch block for error handling
    }

    const handleInpput = (e) => {
        setText(e.target.value)
    }
    return (
        <div className='flex flex-col items-center m-5 justify-center '>
            <input type="text" name="" id="" onChange={handleInpput} className='border p-3 border-gray-700' />

            {/* r       here data is limited */}
            <button className='border bg-blue-400 p-4 rounded-md mt-6' onClick={fetchedData}>Click here</button>
            <h1 className='mt-7  text-4xl'>Predicted Age : {predict?.age}</h1>
            <h1 className='mt-7  text-4xl'>Predicted Name : {predict?.name}</h1>
            <h1 className='mt-7  text-4xl'>Predicted Count : {predict?.count}</h1>
        </div>
    )
}

export default Five_Data_predictor