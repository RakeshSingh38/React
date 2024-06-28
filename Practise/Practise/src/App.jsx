import './App.css'
import UserName from './components/userName'
import UseState from './components/useState'
function App() {
  return (
    <div>
      <main>
        {/*  it should always start with upperCase letter */}
        <UserName name="Rakesh" />
      </main>
      <UseState />
    </div>
  )
}

export default App
