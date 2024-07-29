import './App.css'
import BrowserDOM from './Components/BrowserDOM'
import Profile from './Components/Profile'
import ComponentsForUseHook from './Components/useContext_Hook/ComponentsForUseHook'
import Todo from './Components/useContext_Hook/Todos'
import ReactStepper from './Components/React_Stepper'
function App() {
  return (
    <>
      {/* <BrowserDOM /> */}
      {/*  there is no need to render profile as we are alread exported it on above comp */}
      {/* <Profile /> */}
      {/* <h1 className='bg-green-300'>hey</h1> */}

      {/* <ComponentsForUseHook />
      <Todo /> */}
      <ReactStepper />
    </>
  )
}

export default App
