import './App.css'
import UserName from './components/userName'
import UseState from './components/useState'
import UseStateNormal from './components/UseState_normal'
import TodoList from './components/TodoList'
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
      <TodoList />
    </div>
  )
}

export default App
