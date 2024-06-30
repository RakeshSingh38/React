import './App.css'
import BrowserDOM from './Componenets/BrowserDOM'
import Profile from './Componenets/Profile'
function App() {
  return (
    <>
    <BrowserDOM />
    {/*  there is no need to render profile as we are alread exported it on above comp */}
    {/* <Profile /> */}
      {/* <h1 className='bg-green-300'>hey</h1> */}
    </>
  )
}

export default App
