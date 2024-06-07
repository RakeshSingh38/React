import viteLogo from '/vite.svg'
import '../src/index.css'
import Counter from '../src/Components/Counter'
import Clock from '../src/Components/TestApp'
import FullPage from './Components/FullPage'
import NameCounter from './Components/NameCounter'
function App() {
  return (
    <>
      {/* <Clock/> */}
      {/* <Clock /> */}
      <NameCounter named={"Rakesh"}/>
      <Counter />
      <Counter/>
      {/* <div>
      <FullPage text={'blue'} bgColor={`bg-blue-400`}  />
      <FullPage text={'green'} bgColor={`bg-green-500`} />
      </div> */}
      <FullPage text={'red'} bgColor={`bg-red-600`} />
      {/* <Timer/> */}
    </>
  )
}
export default App
