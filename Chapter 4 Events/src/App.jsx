import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
// import Events from './Components_Events/Events'
import Events from '../src/Components_Events/Practise/Events'
import Button from './Components_Events/Practise/PlayButton'
import OnMouseImageIncr from './Components_Events/Practise/OnMouseImageIncr'
import PlayButton from './Components_Events/Practise/PlayButton'
function App({ children }) {
  return (
    <div className='bg-[#333]' onClick={(e) => {
      let element = e.target;
      let hierarchy = [];
      while (element) {
        hierarchy.push(element.tagName); // You can replace tagName with any identifying attribute
        element = element.parentElement;
      }
      console.log(hierarchy.reverse().join(' > '));
    }}>
      {/* <Events /> */}
      {/* <Events> */}
      {/* {children} */}
      <Events />

    </div>
  )
}

export default App
