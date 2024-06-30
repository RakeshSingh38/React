import React, { useState, useEffect } from 'react';
// import Text from './Two_show_test';
//  three stages of react life cycle
//  1 > mounting
//  2 > updating
//  3 > unmounting
const Three_React_Life_Cycle = () => {
    const [showText, setShowText] = useState("");

    useEffect(() => {
        console.log("Component Mounted");
    },[showText])
    const handleText = (e) => {
        setShowText(e.target.value);
    }
    return (
        <div className='m-5'>
            {/* <Text> */}
            <input className='border border-gray-800' onChange={handleText} type="text"/>


            <h1>{showText}</h1>


        </div>
    )
}

export default Three_React_Life_Cycle   