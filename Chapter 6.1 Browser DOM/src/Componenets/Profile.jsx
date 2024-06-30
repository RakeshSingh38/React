// tried doing within the component but it says useNavigate() may be used only in the context of a <Router> component
// 😓😓

import React from 'react'
import { useParams, useNavigate } from "react-router-dom";
// tip      useNavigate is used to navigate to different pages
const Profile = () => {
    const flex = "flex justify-center text-4xl items-center h-screen bg-gray-200 w-screen shadow-8xl"

    const navigate = useNavigate();
    const { userName } = useParams();
    return (
        <div className={`${flex} flex-col gap-y-6`}>
            <h1>This is the profile page for {userName}</h1>
            <button className="border bg-green-500 rounded-xl p-3" onClick={() => {
                navigate("/")
            }}>Go to Home Page</button>


        </div >
    )
}

// i dont know but i think we can use useNavigate() only in functional components , i tried to use it in above component but it says
// useNavigate() may be used only in the context of a <Router> component

export default Profile;