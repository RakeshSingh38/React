// import React from 'react'

// import React from "react";
// import React from "react";
import React, { useState } from "react";
const React_Stepper = () => {

    const [step, setStep] = useState(0);
    let steps = [1, 2, 3, 4];

    // let flag = true;
    // let flag2 = false;
    const hoverOver = (index) => {
        // console.log(index);
        // setState(0);
        return (e) => {
            e.target.style.backgroundColor = 'lightblue';
            e.target.style.transition = 'ease-in-out 0.5s';
            setStep(index++);
        }
    }

    const hoverOut = (index) => {
        // console.log(index);
        return (e) => {
            setStep(0);
            e.target.style.backgroundColor = '';
        }
    }
    // const increaseIndex = (i) => {
    //     return () => i + 1;
    // };
    return (
        // <div className="grid place-content-center h-screen">
        // <h1>React Stipper</h1>

        <div className='box-border'>

            <div className="flex  ">

                <div className='flex flex-col text-center ml-20 p-10'>
                    {steps.map((s, index) => {
                        return (
                            <div key={index} className='flex justify-center items-center flex-col-reverse'>
                                {/* // tip     The .length property can be used to limit the number of iterations in a loop , i can easily manage the border of the last element by using this property */}
                                {s === step && index < steps.length - 1 && <div className='bg-green-500 border border-black h-24'></div>}
                                {/*             {

                                    // console.log(index, increaseIndex(index))
                                    // index === increaseIndex(s + 1) && <div className='bg-green-500 border border-black h-24' ></div>
                                    // <div className='bg-green-500 border border-black h-24' ></div>
                                    // console.log(index + 1, increaseIndex(index)())
                                } 
                                <div className='border border-black h-24'></div>
                                    */
                                }

                                <div onMouseLeave={hoverOut(s)} onMouseEnter={hoverOver(s)} className='py-8 h-24 w-24 border border-black rounded-full' > {index + 1}</div>

                            </div>
                        )
                    })}
                </div>
                {/*  <div className='ml-4 flex flex-col justify-center'>
                        {steps.map((index) => {
                            return (
                                <div key={index} >ga</div>
                            )
                        })} */}
                {/* <h1>h11</h1> */}
                {/* <div className='my-10 relative  py-8 w-24 border border-black rounded-full'>2</div>
                <div className='my-10 relative  py-8 w-24 border border-black rounded-full'>3</div>
                <div className='my-10 relative  py-8 w-24 border border-black rounded-full'>4</div> */}

            </div >


        </div >

    )
}
export default React_Stepper