import './App.css'
import UserName from './components/userName'
import UseState from './components/useState'
import UseStateNormal from './components/UseState_normal'
import TodoList from './components/TodoList'
import Two_show_test from './components/Two_show_test'
import Three_React_Life_Cycle from './components/Three_React_Life_Cycle'
import Four_API_Fetch from './components/Four_API_Fetch'
import Five_Data_predictor from './components/Five_Data_predictor'
import Six_Excuse_generator from './components/Six_Excuse_generator'
import Seven_doing_excuse_with_input from './components/Seven_doing_excuse_with_input'
function App() {
  return (
    <div className=''>
      <main>
        {/*  it should always start with upperCase letter */}
        {/* <UserName name="Rakesh" /> */}
      </main>
      {/* imp    u can uncomment this sometimes */}
      {/* <UseState /> */}
      {/* <UseStateNormal /> */}
      {/* <TodoList /> */}
      {/* <Two_show_test/> */}
      {/* <Three_React_Life_Cycle /> */}
    {/* <Four_API_Fetch/> */}
    {/* <Five_Data_predictor/> */}
    {/* <Six_Excuse_generator/> */}
    <Seven_doing_excuse_with_input/>
    </div>
  )
}

export default App
