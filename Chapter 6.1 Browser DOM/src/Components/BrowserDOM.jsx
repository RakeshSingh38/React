import React from 'react'
import Profile from './Profile'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

// tip      useNavigate is used to navigate to different pages
import { useNavigate } from 'react-router-dom'

const BrowserDOM = () => {
    const flex = "flex justify-center text-4xl items-center h-screen bg-gray-200 w-screen shadow-8xl"

    return (
        <div>
            <Router>
                {/* r       here a tag refreshes the page */}

                {/* we can use this space for navbar , footer etc
                    as it will be constant for all the pages 
                */}

                {/* <a href="/home">GO to home page</a> */}


                {/* // to add links to this space we can use Link tag */}
                <div className="flex justify-evenly text-xl items-center">

                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/contact">Contact</Link>
                </div>
                <Routes>

                    <Route path='/' element={
                        <h1 className={`${flex},shadow-2xl`}>Its home Page</h1>
                    } />
                    
                    <Route path='/about' element={<About />} />
                    
                    <Route path='/contact' element={
                        <h1 className={flex}>Its contact</h1>
                    } />
                    <Route path="/profile/:userName" element={<Profile />} />

                    {/* // if page doesnt exist then we will do this */}
                    <Route path='*' element={<h1 className={flex}>404 Page doesnt exist</h1>} />
                </Routes>

            </Router >


        </div >
    )
}

// w         i dont know but i think we can use useNavigate() only in functional components , i tried to use it in above component but it says
// useNavigate() may be used only in the context of a <Router> component

const About = () => {

    //  defining navigate

    const navigate = useNavigate();
    return (
        <div className="flex justify-center items-center h-screen bg-gray-200 flex-col gap-y-5">
            <h1>Its about</h1>
            <button onClick={() => navigate("/contact")} className="items-center border flex px-8 py-4 font-sans font-semibold tracking-wide text-white bg-blue-500 rounded-lg h-[60px]">
                Go to Contact Page
            </button>
        </div>
    )
}

export default BrowserDOM