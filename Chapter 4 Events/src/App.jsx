import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
// import Events from './Components_Events/Events'
import Events from '../src/Components_Events/Practise/Events'
import Button from './Components_Events/Practise/PlayButton'
function App({ children }) {
  return (
    <div className='bg-[#333]'>
      {/* <Events /> */}
      {/* <Events> */}
        {/* {children} */}
      <Events/>
    </div>
  )
}

export default App
